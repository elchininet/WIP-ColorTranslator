export const COLORS = [
    {
        KEYWORD: 'red',
        RGBLegacy: 'rgb(255,0,0)',
        RGB: 'rgb(255 0 0)',
        RGBALegacy: 'rgba(255,0,0,1)',
        RGBA: 'rgb(255 0 0 / 1)',
        RGBAInPercentage: 'rgb(100% 0% 0% / 100%)',
        RGBObject: { R: 255, G: 0, B: 0 },
        RGBAObject: { R: 255, G: 0, B: 0, A: 1 },
        HEX: '#FF0000',
        HEXObject: { R: '0xFF', G: '0x00', B: '0x00' },
        HEXA: '#FF0000FF',
        HEXAObject: { R: '0xFF', G: '0x00', B: '0x00', A: '0xFF' },
        HSLLegacy: 'hsl(0,100%,50%)',
        HSL: 'hsl(0 100% 50%)',
        HSLALegacy: 'hsla(0,100%,50%,1)',
        HSLA: 'hsl(0 100% 50% / 1)',
        HSLAInPercentages: 'hsl(0 100% 50% / 100%)',
        HSLObject: { H: 0, S: 100, L: 50 },
        HSLAObject: { H: 0, S: 100, L: 50, A: 1 }
    },
    {
        KEYWORD: 'lime',
        RGBLegacy: 'rgb(0,255,0)',
        RGB: 'rgb(0 255 0)',
        RGBALegacy: 'rgba(0,255,0,1)',
        RGBA: 'rgb(0 255 0 / 1)',
        RGBAInPercentage: 'rgb(0% 100% 0% / 100%)',
        RGBObject: { R: 0, G: 255, B: 0 },
        RGBAObject: { R: 0, G: 255, B: 0, A: 1 },
        HEX: '#00FF00',
        HEXObject: { R: '0x00', G: '0xFF', B: '0x00' },
        HEXA: '#00FF00FF',
        HEXAObject: { R: '0x00', G: '0xFF', B: '0x00', A: '0xFF' },
        HSLLegacy: 'hsl(120,100%,50%)',
        HSL: 'hsl(120 100% 50%)',
        HSLALegacy: 'hsla(120,100%,50%,1)',
        HSLA: 'hsl(120 100% 50% / 1)',
        HSLAInPercentages: 'hsl(120 100% 50% / 100%)',
        HSLObject: { H: 120, S: 100, L: 50 },
        HSLAObject: { H: 120, S: 100, L: 50, A: 1 }
    },
    {
        KEYWORD: 'blue',
        RGBLegacy: 'rgb(0,0,255)',
        RGB: 'rgb(0 0 255)',
        RGBALegacy: 'rgba(0,0,255,1)',
        RGBA: 'rgb(0 0 255 / 1)',
        RGBAInPercentage: 'rgb(0% 0% 100% / 100%)',
        RGBObject: { R: 0, G: 0, B: 255 },
        RGBAObject: { R: 0, G: 0, B: 255, A: 1 },
        HEX: '#0000FF',
        HEXObject: { R: '0x00', G: '0x00', B: '0xFF' },
        HEXA: '#0000FFFF',
        HEXAObject: { R: '0x00', G: '0x00', B: '0xFF', A: '0xFF' },
        HSLLegacy: 'hsl(240,100%,50%)',
        HSL: 'hsl(240 100% 50%)',
        HSLALegacy: 'hsla(240,100%,50%,1)',
        HSLA: 'hsl(240 100% 50% / 1)',
        HSLAInPercentages: 'hsl(240 100% 50% / 100%)',
        HSLObject: { H: 240, S: 100, L: 50 },
        HSLAObject: { H: 240, S: 100, L: 50, A: 1 }
    },
    {
        KEYWORD: 'magenta',
        RGBLegacy: 'rgb(255,0,255)',
        RGB: 'rgb(255 0 255)',
        RGBALegacy: 'rgba(255,0,255,1)',
        RGBA: 'rgb(255 0 255 / 1)',
        RGBAInPercentage: 'rgb(100% 0% 100% / 100%)',
        RGBObject: { R: 255, G: 0, B: 255 },
        RGBAObject: { R: 255, G: 0, B: 255, A: 1 },
        HEX: '#FF00FF',
        HEXObject: { R: '0xFF', G: '0x00', B: '0xFF' },
        HEXA: '#FF00FFFF',
        HEXAObject: { R: '0xFF', G: '0x00', B: '0xFF', A: '0xFF' },
        HSLLegacy: 'hsl(300,100%,50%)',
        HSL: 'hsl(300 100% 50%)',
        HSLALegacy: 'hsla(300,100%,50%,1)',
        HSLA: 'hsl(300 100% 50% / 1)',
        HSLAInPercentages: 'hsl(300 100% 50% / 100%)',
        HSLObject: { H: 300, S: 100, L: 50 },
        HSLAObject: { H: 300, S: 100, L: 50, A: 1 }
    },
    {
        KEYWORD: 'white',
        RGBLegacy: 'rgb(255,255,255)',
        RGB: 'rgb(255 255 255)',
        RGBALegacy: 'rgba(255,255,255,1)',
        RGBA: 'rgb(255 255 255 / 1)',
        RGBAInPercentage: 'rgb(100% 100% 100% / 100%)',
        RGBObject: { R: 255, G: 255, B: 255 },
        RGBAObject: { R: 255, G: 255, B: 255, A: 1 },
        HEX: '#FFFFFF',
        HEXObject: { R: '0xFF', G: '0xFF', B: '0xFF' },
        HEXA: '#FFFFFFFF',
        HEXAObject: { R: '0xFF', G: '0xFF', B: '0xFF', A: '0xFF' },
        HSLLegacy: 'hsl(0,0%,100%)',
        HSL: 'hsl(0 0% 100%)',
        HSLALegacy: 'hsla(0,0%,100%,1)',
        HSLA: 'hsl(0 0% 100% / 1)',
        HSLAInPercentages: 'hsl(0 0% 100% / 100%)',
        HSLObject: { H: 0, S: 0, L: 100 },
        HSLAObject: { H: 0, S: 0, L: 100, A: 1 }
    },
    {
        KEYWORD: 'black',
        RGBLegacy: 'rgb(0,0,0)',
        RGB: 'rgb(0 0 0)',
        RGBALegacy: 'rgba(0,0,0,1)',
        RGBA: 'rgb(0 0 0 / 1)',
        RGBAInPercentage: 'rgb(0% 0% 0% / 100%)',
        RGBObject: { R: 0, G: 0, B: 0 },
        RGBAObject: { R: 0, G: 0, B: 0, A: 1 },
        HEX: '#000000',
        HEXObject: { R: '0x00', G: '0x00', B: '0x00' },
        HEXA: '#000000FF',
        HEXAObject: { R: '0x00', G: '0x00', B: '0x00', A: '0xFF' },
        HSLLegacy: 'hsl(0,0%,0%)',
        HSL: 'hsl(0 0% 0%)',
        HSLALegacy: 'hsla(0,0%,0%,1)',
        HSLA: 'hsl(0 0% 0% / 1)',
        HSLAInPercentages: 'hsl(0 0% 0% / 100%)',
        HSLObject: { H: 0, S: 0, L: 0 },
        HSLAObject: { H: 0, S: 0, L: 0, A: 1 }
    },
    {
        KEYWORD: 'gray',
        RGBLegacy: 'rgb(128,128,128)',
        RGB: 'rgb(128 128 128)',
        RGBALegacy: 'rgba(128,128,128,1)',
        RGBA: 'rgb(128 128 128 / 1)',
        RGBAInPercentage: 'rgb(50% 50% 50% / 100%)',
        RGBObject: { R: 128, G: 128, B: 128 },
        RGBAObject: { R: 128, G: 128, B: 128, A: 1 },
        HEX: '#808080',
        HEXObject: { R: '0x80', G: '0x80', B: '0x80' },
        HEXA: '#808080FF',
        HEXAObject: { R: '0x80', G: '0x80', B: '0x80', A: '0xFF' },
        HSLLegacy: 'hsl(0,0%,50%)',
        HSL: 'hsl(0 0% 50%)',
        HSLALegacy: 'hsla(0,0%,50%,1)',
        HSLA: 'hsl(0 0% 50% / 1)',
        HSLAInPercentages: 'hsl(0 0% 50% / 100%)',
        HSLObject: { H: 0, S: 0, L: 50 },
        HSLAObject: { H: 0, S: 0, L: 50, A: 1 }
    }
];

export const HEX3 = [
    {
        KEYWORD: 'red',
        HEX: '#F00',
        HEXObject: { R: '0xF', G: '0x0', B: '0x0' },
        HEXA: '#F00F',
        HEXAObject: { R: '0xF', G: '0x0', B: '0x0', A: '0xF' },
        HEXObjectPercent: { R: '100%', G: '0%', B: '0%' },
        rgbPercentLegacy: 'rgb(100%,0%,0%)',
        rgbPercent: 'rgb(100% 0% 0%)',
        rgbaPercentLegacy: 'rgba(100%,0%,0%,1)',
        rgbaPercent: 'rgb(100% 0% 0% / 1)',

        RGBLegacy: 'rgb(255,0,0)',
        RGB: 'rgb(255 0 0)',
        RGBObject: { R: 255, G: 0, B: 0 },
        RGBALegacy: 'rgba(255,0,0,1)',
        RGBA: 'rgb(255 0 0 / 1)',
        RGBAObject: { R: 255, G: 0, B: 0, A: 1 },
        HSLLegacy: 'hsl(0,100%,50%)',
        HSL: 'hsl(0 100% 50%)',
        HSLObject: { H: 0, S: 100, L: 50 },
        HSLALegacy: 'hsla(0,100%,50%,1)',
        HSLA: 'hsl(0 100% 50% / 1)',
        HSLAObject: { H: 0, S: 100, L: 50, A: 1 }
    },
    {
        KEYWORD: 'lime',
        HEX: '#0F0',
        HEXObject: { R: '0x0', G: '0xF', B: '0x0' },
        HEXA: '#0F0F',
        HEXAObject: { R: '0x0', G: '0xF', B: '0x0', A: '0xF' },
        HEXObjectPercent: { R: '0%', G: '100%', B: '0%' },
        rgbPercentLegacy: 'rgb(0%,100%,0%)',
        rgbPercent: 'rgb(0% 100% 0%)',
        rgbaPercentLegacy: 'rgba(0%,100%,0%,1)',
        rgbaPercent: 'rgb(0% 100% 0% / 1)',

        RGBLegacy: 'rgb(0,255,0)',
        RGB: 'rgb(0 255 0)',
        RGBObject: { R: 0, G: 255, B: 0 },
        RGBALegacy: 'rgba(0,255,0,1)',
        RGBA: 'rgb(0 255 0 / 1)',
        RGBAObject: { R: 0, G: 255, B: 0, A: 1 },
        HSLLegacy: 'hsl(120,100%,50%)',
        HSL: 'hsl(120 100% 50%)',
        HSLObject: { H: 120, S: 100, L: 50 },
        HSLALegacy: 'hsla(120,100%,50%,1)',
        HSLA: 'hsl(120 100% 50% / 1)',
        HSLAObject: { H: 120, S: 100, L: 50, A: 1 }
    },
    {
        KEYWORD: 'blue',
        HEX: '#00F',
        HEXObject: { R: '0x0', G: '0x0', B: '0xF' },
        HEXA: '#00FF',
        HEXAObject: { R: '0x0', G: '0x0', B: '0xF', A: '0xF' },
        HEXObjectPercent: { R: '0%', G: '0%', B: '100%' },
        rgbPercentLegacy: 'rgb(0%,0%,100%)',
        rgbPercent: 'rgb(0% 0% 100%)',
        rgbaPercentLegacy: 'rgba(0%,0%,100%,1)',
        rgbaPercent: 'rgb(0% 0% 100% / 1)',

        RGBLegacy: 'rgb(0,0,255)',
        RGB: 'rgb(0 0 255)',
        RGBObject: { R: 0, G: 0, B: 255 },
        RGBALegacy: 'rgba(0,0,255,1)',
        RGBA: 'rgb(0 0 255 / 1)',
        RGBAObject: { R: 0, G: 0, B: 255, A: 1 },
        HSLLegacy: 'hsl(240,100%,50%)',
        HSL: 'hsl(240 100% 50%)',
        HSLObject: { H: 240, S: 100, L: 50 },
        HSLALegacy: 'hsla(240,100%,50%,1)',
        HSLA: 'hsl(240 100% 50% / 1)',
        HSLAObject: { H: 240, S: 100, L: 50, A: 1 }
    },
    {
        KEYWORD: 'fuchsia',
        HEX: '#F0F',
        HEXObject: { R: '0xF', G: '0x0', B: '0xF' },
        HEXA: '#F0FF',
        HEXAObject: { R: '0xF', G: '0x0', B: '0xF', A: '0xF' },
        HEXObjectPercent: { R: '100%', G: '0%', B: '100%' },
        rgbPercentLegacy: 'rgb(100%,0%,100%)',
        rgbPercent: 'rgb(100% 0% 100%)',
        rgbaPercentLegacy: 'rgba(100%,0%,100%,1)',
        rgbaPercent: 'rgb(100% 0% 100% / 1)',

        RGBLegacy: 'rgb(255,0,255)',
        RGB: 'rgb(255 0 255)',
        RGBObject: { R: 255, G: 0, B: 255 },
        RGBALegacy: 'rgba(255,0,255,1)',
        RGBA: 'rgb(255 0 255 / 1)',
        RGBAObject: { R: 255, G: 0, B: 255, A: 1 },
        HSLLegacy: 'hsl(300,100%,50%)',
        HSL: 'hsl(300 100% 50%)',
        HSLObject: { H: 300, S: 100, L: 50 },
        HSLALegacy: 'hsla(300,100%,50%,1)',
        HSLA: 'hsl(300 100% 50% / 1)',
        HSLAObject: { H: 300, S: 100, L: 50, A: 1 }
    },
    {
        KEYWORD: 'white',
        HEX: '#FFF',
        HEXObject: { R: '0xF', G: '0xF', B: '0xF' },
        HEXA: '#FFFF',
        HEXAObject: { R: '0xF', G: '0xF', B: '0xF', A: '0xF' },
        HEXObjectPercent: { R: '100%', G: '100%', B: '100%' },
        rgbPercentLegacy: 'rgb(100%,100%,100%)',
        rgbPercent: 'rgb(100% 100% 100%)',
        rgbaPercentLegacy: 'rgba(100%,100%,100%,1)',
        rgbaPercent: 'rgb(100% 100% 100% / 1)',

        RGBLegacy: 'rgb(255,255,255)',
        RGB: 'rgb(255 255 255)',
        RGBObject: { R: 255, G: 255, B: 255 },
        RGBALegacy: 'rgba(255,255,255,1)',
        RGBA: 'rgb(255 255 255 / 1)',
        RGBAObject: { R: 255, G: 255, B: 255, A: 1 },
        HSLLegacy: 'hsl(0,0%,100%)',
        HSL: 'hsl(0 0% 100%)',
        HSLObject: { H: 0, S: 0, L: 100 },
        HSLALegacy: 'hsla(0,0%,100%,1)',
        HSLA: 'hsl(0 0% 100% / 1)',
        HSLAObject: { H: 0, S: 0, L: 100, A: 1 }
    },
    {
        KEYWORD: 'black',
        HEX: '#000',
        HEXObject: { R: '0x0', G: '0x0', B: '0x0' },
        HEXA: '#000F',
        HEXAObject: { R: '0x0', G: '0x0', B: '0x0', A: '0xF' },
        HEXObjectPercent: { R: '0%', G: '0%', B: '0%' },
        rgbPercentLegacy: 'rgb(0%,0%,0%)',
        rgbPercent: 'rgb(0% 0% 0%)',
        rgbaPercentLegacy: 'rgba(0%,0%,0%,1)',
        rgbaPercent: 'rgb(0% 0% 0% / 1)',

        RGBLegacy: 'rgb(0,0,0)',
        RGB: 'rgb(0 0 0)',
        RGBObject: { R: 0, G: 0, B: 0 },
        RGBALegacy: 'rgba(0,0,0,1)',
        RGBA: 'rgb(0 0 0 / 1)',
        RGBAObject: { R: 0, G: 0, B: 0, A: 1 },
        HSLLegacy: 'hsl(0,0%,0%)',
        HSL: 'hsl(0 0% 0%)',
        HSLObject: { H: 0, S: 0, L: 0 },
        HSLALegacy: 'hsla(0,0%,0%,1)',
        HSLA: 'hsl(0 0% 0% / 1)',
        HSLAObject: { H: 0, S: 0, L: 0, A: 1 }
    }
];

export const CMYK_COLORS = [
    {
        RGB: '#F00',
        CMYKLegacy: 'device-cmyk(0%,100%,100%,0%)',
        CMYK: 'device-cmyk(0% 100% 100% 0%)',
        CMYKLegacyWithAlpha: 'device-cmyk(0%,100%,100%,0%,1)',
        CMYKWithAlpha: 'device-cmyk(0% 100% 100% 0% / 1)',
        CMYKWithAlphaInPercentages: 'device-cmyk(0% 100% 100% 0% / 100%)',
        CMYKIntLegacy: 'device-cmyk(0,1,1,0)',
        CMYKInt: 'device-cmyk(0 1 1 0)',
        CMYKIntLegacyWithAlpha: 'device-cmyk(0,1,1,0,1)',
        CMYKIntWithAlpha: 'device-cmyk(0 1 1 0 / 1)',
        CMYKIntWithAlphaInPercentages: 'device-cmyk(0 1 1 0 / 100%)',
        CMYKObject: { C: '0%', M: '100%', Y: '100%', K: '0%' },
        CMYKIntObject: { C: 0, M: 1, Y: 1, K: 0 },
        CMYKIntObjectWithAlpha: { C: 0, M: 1, Y: 1, K: 0, A: 1 },
        CMYKIntObject100: { C: 0, M: 100, Y: 100, K: 0 },
        CMYKIntObject100WithAlpha: { C: 0, M: 100, Y: 100, K: 0, A: 1 }
    },
    {
        RGB: '#0F0',
        CMYKLegacy: 'device-cmyk(100%,0%,100%,0%)',
        CMYK: 'device-cmyk(100% 0% 100% 0%)',
        CMYKLegacyWithAlpha: 'device-cmyk(100%,0%,100%,0%,1)',
        CMYKWithAlpha: 'device-cmyk(100% 0% 100% 0% / 1)',
        CMYKWithAlphaInPercentages: 'device-cmyk(100% 0% 100% 0% / 100%)',
        CMYKIntLegacy: 'device-cmyk(1,0,1,0)',
        CMYKInt: 'device-cmyk(1 0 1 0)',
        CMYKIntLegacyWithAlpha: 'device-cmyk(1,0,1,0,1)',
        CMYKIntWithAlpha: 'device-cmyk(1 0 1 0 / 1)',
        CMYKIntWithAlphaInPercentages: 'device-cmyk(1 0 1 0 / 100%)',
        CMYKObject: { C: '100%', M: '0%', Y: '100%', K: '0%' },
        CMYKIntObject: { C: 1, M: 0, Y: 1, K: 0 },
        CMYKIntObjectWithAlpha: { C: 1, M: 0, Y: 1, K: 0, A: 1 },
        CMYKIntObject100: { C: 100, M: 0, Y: 100, K: 0 },
        CMYKIntObject100WithAlpha: { C: 100, M: 0, Y: 100, K: 0, A: 1 }
    },
    {
        RGB: '#00F',
        CMYKLegacy: 'device-cmyk(100%,100%,0%,0%)',
        CMYK: 'device-cmyk(100% 100% 0% 0%)',
        CMYKLegacyWithAlpha: 'device-cmyk(100%,100%,0%,0%,1)',
        CMYKWithAlpha: 'device-cmyk(100% 100% 0% 0% / 1)',
        CMYKWithAlphaInPercentages: 'device-cmyk(100% 100% 0% 0% / 100%)',
        CMYKIntLegacy: 'device-cmyk(1,1,0,0)',
        CMYKInt: 'device-cmyk(1 1 0 0)',
        CMYKIntLegacyWithAlpha: 'device-cmyk(1,1,0,0,1)',
        CMYKIntWithAlpha: 'device-cmyk(1 1 0 0 / 1)',
        CMYKIntWithAlphaInPercentages: 'device-cmyk(1 1 0 0 / 100%)',
        CMYKObject: { C: '100%', M: '100%', Y: '0%', K: '0%' },
        CMYKIntObject: { C: 1, M: 1, Y: 0, K: 0 },
        CMYKIntObjectWithAlpha: { C: 1, M: 1, Y: 0, K: 0, A: 1 },
        CMYKIntObject100: { C: 100, M: 100, Y: 0, K: 0 },
        CMYKIntObject100WithAlpha: { C: 100, M: 100, Y: 0, K: 0, A: 1 }
    },
    {
        RGB: '#0FF',
        CMYKLegacy: 'device-cmyk(100%,0%,0%,0%)',
        CMYK: 'device-cmyk(100% 0% 0% 0%)',
        CMYKLegacyWithAlpha: 'device-cmyk(100%,0%,0%,0%,1)',
        CMYKWithAlpha: 'device-cmyk(100% 0% 0% 0% / 1)',
        CMYKWithAlphaInPercentages: 'device-cmyk(100% 0% 0% 0% / 100%)',
        CMYKIntLegacy: 'device-cmyk(1,0,0,0)',
        CMYKInt: 'device-cmyk(1 0 0 0)',
        CMYKIntLegacyWithAlpha: 'device-cmyk(1,0,0,0,1)',
        CMYKIntWithAlpha: 'device-cmyk(1 0 0 0 / 1)',
        CMYKIntWithAlphaInPercentages: 'device-cmyk(1 0 0 0 / 100%)',
        CMYKObject: { C: '100%', M: '0%', Y: '0%', K: '0%' },
        CMYKIntObject: { C: 1, M: 0, Y: 0, K: 0 },
        CMYKIntObjectWithAlpha: { C: 1, M: 0, Y: 0, K: 0, A: 1 },
        CMYKIntObject100: { C: 100, M: 0, Y: 0, K: 0 },
        CMYKIntObject100WithAlpha: { C: 100, M: 0, Y: 0, K: 0, A: 1 }
    },
    {
        RGB: '#FF0',
        CMYKLegacy: 'device-cmyk(0%,0%,100%,0%)',
        CMYK: 'device-cmyk(0% 0% 100% 0%)',
        CMYKLegacyWithAlpha: 'device-cmyk(0%,0%,100%,0%,1)',
        CMYKWithAlpha: 'device-cmyk(0% 0% 100% 0% / 1)',
        CMYKWithAlphaInPercentages: 'device-cmyk(0% 0% 100% 0% / 100%)',
        CMYKIntLegacy: 'device-cmyk(0,0,1,0)',
        CMYKInt: 'device-cmyk(0 0 1 0)',
        CMYKIntLegacyWithAlpha: 'device-cmyk(0,0,1,0,1)',
        CMYKIntWithAlpha: 'device-cmyk(0 0 1 0 / 1)',
        CMYKIntWithAlphaInPercentages: 'device-cmyk(0 0 1 0 / 100%)',
        CMYKObject: { C: '0%', M: '0%', Y: '100%', K: '0%' },
        CMYKIntObject: { C: 0, M: 0, Y: 1, K: 0 },
        CMYKIntObjectWithAlpha: { C: 0, M: 0, Y: 1, K: 0, A: 1 },
        CMYKIntObject100: { C: 0, M: 0, Y: 100, K: 0 },
        CMYKIntObject100WithAlpha: { C: 0, M: 0, Y: 100, K: 0, A: 1 }
    },
    {
        RGB: '#F0F',
        CMYKLegacy: 'device-cmyk(0%,100%,0%,0%)',
        CMYK: 'device-cmyk(0% 100% 0% 0%)',
        CMYKLegacyWithAlpha: 'device-cmyk(0%,100%,0%,0%,1)',
        CMYKWithAlpha: 'device-cmyk(0% 100% 0% 0% / 1)',
        CMYKWithAlphaInPercentages: 'device-cmyk(0% 100% 0% 0% / 100%)',
        CMYKIntLegacy: 'device-cmyk(0,1,0,0)',
        CMYKInt: 'device-cmyk(0 1 0 0)',
        CMYKIntLegacyWithAlpha: 'device-cmyk(0,1,0,0,1)',
        CMYKIntWithAlpha: 'device-cmyk(0 1 0 0 / 1)',
        CMYKIntWithAlphaInPercentages: 'device-cmyk(0 1 0 0 / 100%)',
        CMYKObject: { C: '0%', M: '100%', Y: '0%', K: '0%' },
        CMYKIntObject: { C: 0, M: 1, Y: 0, K: 0 },
        CMYKIntObjectWithAlpha: { C: 0, M: 1, Y: 0, K: 0, A: 1 },
        CMYKIntObject100: { C: 0, M: 100, Y: 0, K: 0 },
        CMYKIntObject100WithAlpha: { C: 0, M: 100, Y: 0, K: 0, A: 1 }
    },
    {
        RGB: '#000',
        CMYKLegacy: 'device-cmyk(0%,0%,0%,100%)',
        CMYK: 'device-cmyk(0% 0% 0% 100%)',
        CMYKLegacyWithAlpha: 'device-cmyk(0%,0%,0%,100%,1)',
        CMYKWithAlpha: 'device-cmyk(0% 0% 0% 100% / 1)',
        CMYKWithAlphaInPercentages: 'device-cmyk(0% 0% 0% 100% / 100%)',
        CMYKIntLegacy: 'device-cmyk(0,0,0,1)',
        CMYKInt: 'device-cmyk(0 0 0 1)',
        CMYKIntLegacyWithAlpha: 'device-cmyk(0,0,0,1,1)',
        CMYKIntWithAlpha: 'device-cmyk(0 0 0 1 / 1)',
        CMYKIntWithAlphaInPercentages: 'device-cmyk(0 0 0 1 / 100%)',
        CMYKObject: { C: '0%', M: '0%', Y: '0%', K: '100%' },
        CMYKIntObject: { C: 0, M: 0, Y: 0, K: 1 },
        CMYKIntObjectWithAlpha: { C: 0, M: 0, Y: 0, K: 1, A: 1 },
        CMYKIntObject100: { C: 0, M: 0, Y: 0, K: 100 },
        CMYKIntObject100WithAlpha: { C: 0, M: 0, Y: 0, K: 100, A: 1 }
    }
];

export const ADDITIVE_MIXES = [
    {
        colors: ['#FF0000', '#0000FF'],
        mix: '#FF00FF'
    },
    {
        colors: ['#FF0000', '#00FF00'],
        mix: '#FFFF00'
    },
    {
        colors: ['#00FF00', '#0000FF'],
        mix: '#00FFFF'
    },
    {
        colors: ['#FF0000', '#00FF00', '#0000FF'],
        mix: '#FFFFFF'
    }
];

export const SUBTRACTIVE_MIXES = [
    {
        colors: ['#FFFF00', '#FF0000'],
        mix: '#FF8000'
    },
    {
        colors: ['#FF0000', '#0000FF'],
        mix: '#8000FF'
    },
    {
        colors: ['#0000FF', '#FFFF00'],
        mix: '#00FF00'
    },
    {
        colors: ['#FFFF00', '#FF0000', '#0000FF'],
        mix: '#000000'
    }
];
