import {
    Color,
    ColorInput,
    ColorInputWithoutCMYK,
    HSLObjectGeneric,
    HEXObject,
    RGBObject,
    HSLObject,
    CMYKObject,
    HEXOutput,
    RGBOutput,
    HSLOutput,
    CMYKOutput,
    ColorOutput,
    Options
} from '@types';
import {
    ColorModel,
    Harmony,
    Mix,
    DEFAULT_BLEND_STEPS
} from '#constants';
import {
    rgbToHSL,
    hslToRGB,
    rgbToCMYK,
    cmykToRGB
} from '#color/translators';
import * as utils from '#color/utils';
import { CSS } from '#color/css';
import { round, minmax, parseOptions } from '#helpers';

const getColorReturn = <T>(
    color: ColorInput,
    model: ColorModel,
    css: boolean,
    options: Partial<Options>,
    translateFunction: (color: Color, decimals: number) => T,
    cssFunction: (color: T) => string
): T | string => {
    const { decimals } = parseOptions(options);
    const rgbObject = utils.getRGBObject(color, model);
    const translated = translateFunction(rgbObject, decimals);
    if (!css) {
        return translated;
    }
    return cssFunction(translated);
};

const getBlendReturn = <T>(
    from: ColorInput,
    to: ColorInput,
    steps: number,
    css: boolean,
    options: Partial<Options>,
    translateFunction: (color: Color, decimals: number) => T,
    cssFunction: (color: T) => string
): (T | string)[] => {
    const { decimals } = parseOptions(options);
    if (steps < 1) steps = DEFAULT_BLEND_STEPS;
    const fromRGBObject = utils.getRGBObject(from);
    const toRGBObject = utils.getRGBObject(to);
    const blendArray = utils.blend(fromRGBObject, toRGBObject, steps);
    return blendArray.map((color: RGBObject): T | string => {
        const translated = translateFunction(color, decimals);
        if (!css) {
            return translated;
        }
        return cssFunction(translated);
    });
};

const getHarmonyReturn = (
    harmony: Harmony,
    color: ColorInputWithoutCMYK,
    options: Partial<Options>,
    mode?: Mix,
): ColorOutput[] => {
    const { decimals } = parseOptions(options);
    return ({
        [Harmony.ANALOGOUS]:           utils.colorHarmony.buildHarmony(color, utils.analogous, mode, decimals),
        [Harmony.COMPLEMENTARY]:       utils.colorHarmony.buildHarmony(color, utils.complementary, mode, decimals),
        [Harmony.SPLIT_COMPLEMENTARY]: utils.colorHarmony.buildHarmony(color, utils.splitComplementary, mode, decimals),
        [Harmony.TRIADIC]:             utils.colorHarmony.buildHarmony(color, utils.triadic, mode, decimals),
        [Harmony.TETRADIC]:            utils.colorHarmony.buildHarmony(color, utils.tetradic, mode, decimals),
        [Harmony.SQUARE]:              utils.colorHarmony.buildHarmony(color, utils.square, mode, decimals)
    })[harmony];
};

export class ColorTranslator {

    // Constructor
    public constructor(color: ColorInput, options: Partial<Options> = {}) {
        this._options = parseOptions(options);
        this.rgb = utils.getRGBObject(color);
        this.updateHSL();
        this.updateCMYK();
    }

    // Private properties
    private _options: Options;
    private rgb: RGBObject;
    private hsl: HSLObject;
    private cmyk: CMYKObject;

    // Private methods
    private updateRGB(): void {
        this.rgb = { ...hslToRGB(this.hsl.h, this.hsl.s, this.hsl.l), a: this.hsl.a };
    }

    private updateRGBFromCMYK(): void {
        this.rgb = { ...cmykToRGB(this.cmyk.c, this.cmyk.m, this.cmyk.y, this.cmyk.k), a: this.rgb.a };
    }

    private updateHSL(): void {
        this.hsl = rgbToHSL(this.rgb.r, this.rgb.g, this.rgb.b, this.rgb.a);
    }

    private updateCMYK(): void {
        this.cmyk = rgbToCMYK(this.rgb.r, this.rgb.g, this.rgb.b);
    }

    private updateRGBAndCMYK(): ColorTranslator {
        this.updateRGB();
        this.updateCMYK();
        return this;
    }

    private updateHSLAndCMYK(): ColorTranslator {
        this.updateHSL();
        this.updateCMYK();
        return this;
    }

    private updateRGBAndHSL(): ColorTranslator {
        this.updateRGBFromCMYK();
        this.updateHSL();
        return this;
    }

    // Public options method
    public setOptions(options: Partial<Options> = {}): ColorTranslator {
        this._options = {
            ...this._options,
            ...options
        };
        return this;
    }

    // Public HSL methods
    public setH(h: number): ColorTranslator {
        this.hsl.h = utils.normalizeHue(h);
        return this.updateRGBAndCMYK();
    }

    public setS(s: number): ColorTranslator {
        this.hsl.s = minmax(s, 0, 100);
        return this.updateRGBAndCMYK();
    }

    public setL(l: number): ColorTranslator {
        this.hsl.l = minmax(l, 0, 100);
        return this.updateRGBAndCMYK();
    }

    // Public RGB methods
    public setR(r: number): ColorTranslator {
        this.rgb.r = minmax(r, 0, 255);
        return this.updateHSLAndCMYK();
    }

    public setG(g: number): ColorTranslator {
        this.rgb.g = minmax(g, 0, 255);
        return this.updateHSLAndCMYK();
    }

    public setB(b: number): ColorTranslator {
        this.rgb.b = minmax(b, 0, 255);
        return this.updateHSLAndCMYK();
    }

    // Public alpha method
    public setA(a: number): ColorTranslator {
        this.hsl.a = this.rgb.a = minmax(a, 0, 1);
        return this;
    }

    // Public CMYK methods
    public setC(c: number): ColorTranslator {
        this.cmyk.c = minmax(c, 0, 100);
        return this.updateRGBAndHSL();
    }

    public setM(m: number): ColorTranslator {
        this.cmyk.m = minmax(m, 0, 100);
        return this.updateRGBAndHSL();
    }

    public setY(y: number): ColorTranslator {
        this.cmyk.y = minmax(y, 0, 100);
        return this.updateRGBAndHSL();
    }

    public setK(k: number): ColorTranslator {
        this.cmyk.k = minmax(k, 0, 100);
        return this.updateRGBAndHSL();
    }

    // Public options property
    public get options(): Options {
        return this._options;
    }

    // Public HSL properties
    public get H(): number {
        return round(this.hsl.h, this.options.decimals);
    }

    public get S(): number {
        return round(this.hsl.s, this.options.decimals);
    }

    public get L(): number {
        return round(this.hsl.l, this.options.decimals);
    }

    // Public RGB properties
    public get R(): number {
        return round(this.rgb.r, this.options.decimals);
    }

    public get G(): number {
        return round(this.rgb.g, this.options.decimals);
    }

    public get B(): number {
        return round(this.rgb.b, this.options.decimals);
    }

    // Public alpha property
    public get A(): number {
        return round(this.hsl.a, this.options.decimals);
    }

    // Public CMYK properties
    public get C(): number {
        return round(this.cmyk.c, this.options.decimals);
    }

    public get M(): number {
        return round(this.cmyk.m, this.options.decimals);
    }

    public get Y(): number {
        return round(this.cmyk.y, this.options.decimals);
    }

    public get K(): number {
        return round(this.cmyk.k, this.options.decimals);
    }

    // Object public properties
    public get HEXObject(): HEXObject {
        return utils.translateColor.HEX(this.rgb);
    }

    public get HEXAObject(): HEXObject {
        return utils.translateColor.HEXA(this.rgb);
    }

    public get RGBObject(): RGBObject {
        return {
            r: this.R,
            g: this.G,
            b: this.B
        };
    }

    public get RGBAObject(): RGBObject {
        return {
            ...this.RGBObject,
            a: this.A
        };
    }

    public get HSLObject(): HSLObject {
        return {
            h: this.H,
            s: this.S,
            l: this.L
        };
    }

    public get HSLAObject(): HSLObject {
        return {
            ...this.HSLObject,
            a: this.A
        };
    }

    public get CMYKObject(): CMYKObject {
        return {
            c: this.C,
            m: this.M,
            y: this.Y,
            k: this.K
        };
    }

    public get CMYKAObject(): CMYKObject {
        return {
            ...this.CMYKObject,
            a: this.A
        };
    }

    // CSS public properties
    public get HEX(): string {
        return CSS.HEX({
            r: this.R,
            g: this.G,
            b: this.B
        });
    }

    public get HEXA(): string {
        return CSS.HEX({
            r: this.R,
            g: this.G,
            b: this.B,
            a: this.A * 255
        });
    }

    public get RGB(): string {
        return CSS.RGB({
            r: this.R,
            g: this.G,
            b: this.B
        });
    }

    public get RGBA(): string {
        return CSS.RGB({
            r: this.R,
            g: this.G,
            b: this.B,
            a: this.A
        });
    }

    public get HSL(): string {
        return CSS.HSL({
            h: this.H,
            s: this.S,
            l: this.L
        });
    }

    public get HSLA(): string {
        return CSS.HSL({
            h: this.H,
            s: this.S,
            l: this.L,
            a: this.A
        });
    }

    public get CMYK(): string {
        return CSS.CMYK({
            c: this.C,
            m: this.M,
            y: this.Y,
            k: this.K
        });
    }

    public get CMYKA(): string {
        return CSS.CMYK({
            c: this.C,
            m: this.M,
            y: this.Y,
            k: this.K,
            a: this.A
        });
    }

    // Color Conversion Static Methods
    public static toHEX(color: ColorInput): string;
    public static toHEX(color: ColorInput, css: true): string;
    public static toHEX(color: ColorInput, css: false): HEXObject;
    public static toHEX(color: ColorInput, css = true): HEXOutput {
        const model = utils.getColorModel(color);
        return getColorReturn<HEXObject>(
            color,
            model,
            css,
            { decimals: 0 },
            utils.translateColor.HEX,
            CSS.HEX
        );
    }

    public static toHEXA(color: ColorInput): string;
    public static toHEXA(color: ColorInput, css: true): string;
    public static toHEXA(color: ColorInput, css: false): HEXObject;
    public static toHEXA(color: ColorInput, css = true): HEXOutput {
        const model = utils.getColorModel(color);
        return getColorReturn<HEXObject>(
            color,
            model,
            css,
            { decimals: 0 },
            utils.translateColor.HEXA,
            CSS.HEX
        );
    }

    public static toRGB(color: ColorInput): string;
    public static toRGB(color: ColorInput, css: true, options?: Partial<Options>): string;
    public static toRGB(color: ColorInput, css: false, options?: Partial<Options>): RGBObject;
    public static toRGB(color: ColorInput, css = true, options = {}): RGBOutput {
        const model = utils.getColorModel(color);
        return getColorReturn<RGBObject>(
            color,
            model,
            css,
            options,
            utils.translateColor.RGB,
            CSS.RGB
        );
    }

    public static toRGBA(color: ColorInput): string;
    public static toRGBA(color: ColorInput, css: true, options?: Partial<Options>): string;
    public static toRGBA(color: ColorInput, css: false, options?: Partial<Options>): RGBObject;
    public static toRGBA(color: ColorInput, css = true, options = {}): RGBOutput {
        const model = utils.getColorModel(color);
        return getColorReturn<RGBObject>(
            color,
            model,
            css,
            options,
            utils.translateColor.RGBA,
            CSS.RGB
        );
    }

    public static toHSL(color: ColorInput): string;
    public static toHSL(color: ColorInput, css: true, options?: Partial<Options>): string;
    public static toHSL(color: ColorInput, css: false, options?: Partial<Options>): HSLObject;
    public static toHSL(color: ColorInput, css = true, options = {}): HSLOutput {
        const model = utils.getColorModel(color);
        return getColorReturn<HSLObject>(
            color,
            model,
            css,
            options,
            utils.translateColor.HSL,
            CSS.HSL
        );
    }

    public static toHSLA(color: ColorInput): string;
    public static toHSLA(color: ColorInput, css: true, options?: Partial<Options>): string;
    public static toHSLA(color: ColorInput, css: false, options?: Partial<Options>): HSLObject;
    public static toHSLA(color: ColorInput, css = true, options = {}): HSLOutput {
        const model = utils.getColorModel(color);
        return getColorReturn<HSLObject>(
            color,
            model,
            css,
            options,
            utils.translateColor.HSLA,
            CSS.HSL
        );
    }

    public static toCMYK(color: ColorInput): string;
    public static toCMYK(color: ColorInput, css: true, options?: Partial<Options>): string;
    public static toCMYK(color: ColorInput, css: false, options?: Partial<Options>): CMYKObject;
    public static toCMYK(color: ColorInput, css = true, options = {}): CMYKOutput {
        const model = utils.getColorModel(color);
        return getColorReturn<CMYKObject>(
            color,
            model,
            css,
            options,
            utils.translateColor.CMYK,
            CSS.CMYK
        );
    }

    public static toCMYKA(color: ColorInput): string;
    public static toCMYKA(color: ColorInput, css: true, options?: Partial<Options>): string;
    public static toCMYKA(color: ColorInput, css: false, options?: Partial<Options>): CMYKObject;
    public static toCMYKA(color: ColorInput, css = true, options = {}): CMYKOutput {
        const model = utils.getColorModel(color);
        return getColorReturn<CMYKObject>(
            color,
            model,
            css,
            options,
            utils.translateColor.CMYKA,
            CSS.CMYK
        );
    }

    // Color Blending Static Methods
    public static getBlendHEX(from: ColorInput, to: ColorInput, steps?: number): string[];
    public static getBlendHEX(from: ColorInput, to: ColorInput, steps: number, css: true, options?: Partial<Options>): string[];
    public static getBlendHEX(from: ColorInput, to: ColorInput, steps: number, css: false, options?: Partial<Options>): HEXObject[];
    public static getBlendHEX(from: ColorInput, to: ColorInput, steps: number = DEFAULT_BLEND_STEPS, css = true, options = {}): HEXOutput[] {
        return getBlendReturn<HEXObject>(
            from,
            to,
            steps,
            css,
            options,
            utils.translateColor.HEX,
            CSS.HEX
        );
    }

    public static getBlendHEXA(from: ColorInput, to: ColorInput, steps?: number): string[];
    public static getBlendHEXA(from: ColorInput, to: ColorInput, steps: number, css: true, options?: Partial<Options>): string[];
    public static getBlendHEXA(from: ColorInput, to: ColorInput, steps: number, css: false, options?: Partial<Options>): HEXObject[];
    public static getBlendHEXA(from: ColorInput, to: ColorInput, steps: number = DEFAULT_BLEND_STEPS, css = true, options = {}): HEXOutput[] {
        return getBlendReturn<HEXObject>(
            from,
            to,
            steps,
            css,
            options,
            utils.translateColor.HEXA,
            CSS.HEX
        );
    }

    public static getBlendRGB(from: ColorInput, to: ColorInput, steps?: number): string[];
    public static getBlendRGB(from: ColorInput, to: ColorInput, steps: number, css: true, options?: Partial<Options>): string[];
    public static getBlendRGB(from: ColorInput, to: ColorInput, steps: number, css: false, options?: Partial<Options>): RGBObject[];
    public static getBlendRGB(from: ColorInput, to: ColorInput, steps: number = DEFAULT_BLEND_STEPS, css = true, options = {}): RGBOutput[] {
        return getBlendReturn<RGBObject>(
            from,
            to,
            steps,
            css,
            options,
            utils.translateColor.RGB,
            CSS.RGB
        );
    }

    public static getBlendRGBA(from: ColorInput, to: ColorInput, steps: number): string[];
    public static getBlendRGBA(from: ColorInput, to: ColorInput, steps: number, css: true, options?: Partial<Options>): string[];
    public static getBlendRGBA(from: ColorInput, to: ColorInput, steps: number, css: false, options?: Partial<Options>): RGBObject[];
    public static getBlendRGBA(from: ColorInput, to: ColorInput, steps: number = DEFAULT_BLEND_STEPS, css = true, options = {}): RGBOutput[] {
        return getBlendReturn<RGBObject>(
            from,
            to,
            steps,
            css,
            options,
            utils.translateColor.RGBA,
            CSS.RGB
        );
    }

    public static getBlendHSL(from: ColorInput, to: ColorInput, steps?: number): string[];
    public static getBlendHSL(from: ColorInput, to: ColorInput, steps: number, css: true, options?: Partial<Options>): string[];
    public static getBlendHSL(from: ColorInput, to: ColorInput, steps: number, css: false, options?: Partial<Options>): HSLObject[];
    public static getBlendHSL(from: ColorInput, to: ColorInput, steps: number = DEFAULT_BLEND_STEPS, css = true, options = {}): HSLOutput[] {
        return getBlendReturn<HSLObject>(
            from,
            to,
            steps,
            css,
            options,
            utils.translateColor.HSL,
            CSS.HSL
        );
    }

    public static getBlendHSLA(from: ColorInput, to: ColorInput, steps?: number): string[];
    public static getBlendHSLA(from: ColorInput, to: ColorInput, steps: number, css: true, options?: Partial<Options>): string[];
    public static getBlendHSLA(from: ColorInput, to: ColorInput, steps: number, css: false, options?: Partial<Options>): HSLObject[];
    public static getBlendHSLA(from: ColorInput, to: ColorInput, steps: number = DEFAULT_BLEND_STEPS, css = true, options = {}): HSLOutput[] {
        return getBlendReturn<HSLObject>(
            from,
            to,
            steps,
            css,
            options,
            utils.translateColor.HSLA,
            CSS.HSL
        );
    }

    // Color Mix Static Methods
    public static getMixHEX(colors: ColorInput[]): string;
    public static getMixHEX(colors: ColorInput[], mode: Mix): string;
    public static getMixHEX(colors: ColorInput[], mode: Mix, css: true): string;
    public static getMixHEX(colors: ColorInput[], mode: Mix, css: false): HEXObject;
    public static getMixHEX(colors: ColorInput[], mode: Mix = Mix.ADDITIVE, css = true): HEXOutput {
        return utils.colorMixer.HEX(colors, mode, css);
    }

    public static getMixHEXA(colors: ColorInput[]): string;
    public static getMixHEXA(colors: ColorInput[], mode: Mix): string;
    public static getMixHEXA(colors: ColorInput[], mode: Mix, css: true): string;
    public static getMixHEXA(colors: ColorInput[], mode: Mix, css: false): HEXObject;
    public static getMixHEXA(colors: ColorInput[], mode: Mix = Mix.ADDITIVE, css = true): HEXOutput {
        return utils.colorMixer.HEXA(colors, mode, css);
    }

    public static getMixRGB(colors: ColorInput[]): string;
    public static getMixRGB(colors: ColorInput[], mode: Mix): string;
    public static getMixRGB(colors: ColorInput[], mode: Mix, css: true, options?: Partial<Options>): string;
    public static getMixRGB(colors: ColorInput[], mode: Mix, css: false, options?: Partial<Options>): RGBObject;
    public static getMixRGB(colors: ColorInput[], mode: Mix = Mix.ADDITIVE, css = true, options = {}): RGBOutput {
        return utils.colorMixer.RGB(colors, mode, css, options);
    }

    public static getMixRGBA(colors: ColorInput[]): string;
    public static getMixRGBA(colors: ColorInput[], mode: Mix): string;
    public static getMixRGBA(colors: ColorInput[], mode: Mix, css: true, options?: Partial<Options>): string;
    public static getMixRGBA(colors: ColorInput[], mode: Mix, css: false, options?: Partial<Options>): RGBObject;
    public static getMixRGBA(colors: ColorInput[], mode: Mix = Mix.ADDITIVE, css = true, options = {}): RGBOutput {
        return utils.colorMixer.RGBA(colors, mode, css, options);
    }

    public static getMixHSL(colors: ColorInput[]): string;
    public static getMixHSL(colors: ColorInput[], mode: Mix): string;
    public static getMixHSL(colors: ColorInput[], mode: Mix, css: true, options?: Partial<Options>): string;
    public static getMixHSL(colors: ColorInput[], mode: Mix, css: false, options?: Partial<Options>): HSLObject;
    public static getMixHSL(colors: ColorInput[], mode: Mix = Mix.ADDITIVE, css = true, options = {}): HSLOutput {
        return utils.colorMixer.HSL(colors, mode, css, options);
    }

    public static getMixHSLA(colors: ColorInput[]): string;
    public static getMixHSLA(colors: ColorInput[], mode: Mix): string;
    public static getMixHSLA(colors: ColorInput[], mode: Mix, css: true, options?: Partial<Options>): string;
    public static getMixHSLA(colors: ColorInput[], mode: Mix, css: false, options?: Partial<Options>): HSLObject;
    public static getMixHSLA(colors: ColorInput[], mode: Mix = Mix.ADDITIVE, css = true, options = {}): HSLOutput {
        return utils.colorMixer.HSLA(colors, mode, css, options);
    }

    // Get shades static method
    public static getShades(color: string, shades: number, options?: Partial<Options>): string[];
    public static getShades(color: HEXObject, shades: number, options?: Partial<Options>): HEXObject[];
    public static getShades(color: RGBObject, shades: number, options?: Partial<Options>): RGBObject[];
    public static getShades(color: HSLObjectGeneric, shades: number, options?: Partial<Options>): HSLObject[];
    public static getShades(color: ColorInputWithoutCMYK, shades: number, options = {}): ColorOutput[] {
        return utils.getColorMixture(color, shades, true, options);
    }

    // Get tints static method
    public static getTints(color: string, tints: number, options?: Partial<Options>): string[];
    public static getTints(color: HEXObject, tints: number, options?: Partial<Options>): HEXObject[];
    public static getTints(color: RGBObject, tints: number, options?: Partial<Options>): RGBObject[];
    public static getTints(color: HSLObjectGeneric, tints: number, options?: Partial<Options>): HSLObject[];
    public static getTints(color: ColorInputWithoutCMYK, tints: number, options = {}): ColorOutput[] {
        return utils.getColorMixture(color, tints, false, options);
    }

    // Color Harmony Static Method
    public static getHarmony(color: string, harmony?: Harmony, mode?: Mix, options?: Partial<Options>): string[];
    public static getHarmony(color: HEXObject, harmony?: Harmony, mode?: Mix, options?: Partial<Options>): HEXObject[];
    public static getHarmony(color: RGBObject, harmony?: Harmony, mode?: Mix, options?: Partial<Options>): RGBObject[];
    public static getHarmony(color: HSLObjectGeneric, harmony?: Harmony, mode?: Mix, options?: Partial<Options>): HSLObject[];
    public static getHarmony(color: ColorInputWithoutCMYK, harmony: Harmony = Harmony.COMPLEMENTARY, mode: Mix = Mix.ADDITIVE, options = {}): ColorOutput[] {
        return getHarmonyReturn(harmony, color, options, mode);
    }
}

export {
    Harmony,
    Mix,
    HEXObject,
    RGBObject,
    HSLObject,
    CMYKObject
};