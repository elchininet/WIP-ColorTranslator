var colortranslator=function(t){"use strict";var r,e,n,i,o=function(){return o=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var i in r=arguments[e])Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);return t},o.apply(this,arguments)};function a(t,r,e){if(e||2===arguments.length)for(var n,i=0,o=r.length;i<o;i++)!n&&i in r||(n||(n=Array.prototype.slice.call(r,0,i)),n[i]=r[i]);return t.concat(n||Array.prototype.slice.call(r))}!function(t){t.HEX="HEX",t.RGB="RGB",t.RGBA="RGBA",t.HSL="HSL",t.HSLA="HSLA",t.CMYK="CMYK"}(r||(r={})),t.Harmony=void 0,(e=t.Harmony||(t.Harmony={})).ANALOGOUS="ANALOGOUS",e.COMPLEMENTARY="COMPLEMENTARY",e.SPLIT_COMPLEMENTARY="SPLIT_COMPLEMENTARY",e.TRIADIC="TRIADIC",e.TETRADIC="TETRADIC",e.SQUARE="SQUARE",t.Mix=void 0,(n=t.Mix||(t.Mix={})).ADDITIVE="ADDITIVE",n.SUBTRACTIVE="SUBTRACTIVE",function(t){t.black="#000000",t.silver="#C0C0C0",t.gray="#808080",t.white="#FFFFFF",t.maroon="#800000",t.red="#FF0000",t.purple="#800080",t.fuchsia="#FF00FF",t.green="#008000",t.lime="#00FF00",t.olive="#808000",t.yellow="#FFFF00",t.navy="#000080",t.blue="#0000FF",t.teal="#008080",t.aqua="#00FFFF",t.orange="#FFA500",t.aliceblue="#F0F8FF",t.antiquewhite="#FAEBD7",t.aquamarine="#7FFFD4",t.azure="#F0FFFF",t.beige="#F5F5DC",t.bisque="#FFE4C4",t.blanchedalmond="#FFEBCD",t.blueviolet="#8A2BE2",t.brown="#A52A2A",t.burlywood="#DEB887",t.cadetblue="#5F9EA0",t.chartreuse="#7FFF00",t.chocolate="#D2691E",t.coral="#FF7F50",t.cornflowerblue="#6495ED",t.cornsilk="#FFF8DC",t.crimson="#DC143C",t.cyan="#00FFFF",t.darkblue="#00008B",t.darkcyan="#008B8B",t.darkgoldenrod="#B8860B",t.darkgray="#A9A9A9",t.darkgreen="#006400",t.darkgrey="#A9A9A9",t.darkkhaki="#BDB76B",t.darkmagenta="#8B008B",t.darkolivegreen="#556B2F",t.darkorange="#FF8C00",t.darkorchid="#9932CC",t.darkred="#8B0000",t.darksalmon="#E9967A",t.darkseagreen="#8FBC8F",t.darkslateblue="#483D8B",t.darkslategray="#2F4F4F",t.darkslategrey="#2F4F4F",t.darkturquoise="#00CED1",t.darkviolet="#9400D3",t.deeppink="#FF1493",t.deepskyblue="#00BFFF",t.dimgray="#696969",t.dimgrey="#696969",t.dodgerblue="#1E90FF",t.firebrick="#B22222",t.floralwhite="#FFFAF0",t.forestgreen="#228B22",t.gainsboro="#DCDCDC",t.ghostwhite="#F8F8FF",t.gold="#FFD700",t.goldenrod="#DAA520",t.greenyellow="#ADFF2F",t.grey="#808080",t.honeydew="#F0FFF0",t.hotpink="#FF69B4",t.indianred="#CD5C5C",t.indigo="#4B0082",t.ivory="#FFFFF0",t.khaki="#F0E68C",t.lavender="#E6E6FA",t.lavenderblush="#FFF0F5",t.lawngreen="#7CFC00",t.lemonchiffon="#FFFACD",t.lightblue="#ADD8E6",t.lightcoral="#F08080",t.lightcyan="#E0FFFF",t.lightgoldenrodyellow="#FAFAD2",t.lightgray="#D3D3D3",t.lightgreen="#90EE90",t.lightgrey="#D3D3D3",t.lightpink="#FFB6C1",t.lightsalmon="#FFA07A",t.lightseagreen="#20B2AA",t.lightskyblue="#87CEFA",t.lightslategray="#778899",t.lightslategrey="#778899",t.lightsteelblue="#B0C4DE",t.lightyellow="#FFFFE0",t.limegreen="#32CD32",t.linen="#FAF0E6",t.magenta="#FF00FF",t.mediumaquamarine="#66CDAA",t.mediumblue="#0000CD",t.mediumorchid="#BA55D3",t.mediumpurple="#9370DB",t.mediumseagreen="#3CB371",t.mediumslateblue="#7B68EE",t.mediumspringgreen="#00FA9A",t.mediumturquoise="#48D1CC",t.mediumvioletred="#C71585",t.midnightblue="#191970",t.mintcream="#F5FFFA",t.mistyrose="#FFE4E1",t.moccasin="#FFE4B5",t.navajowhite="#FFDEAD",t.oldlace="#FDF5E6",t.olivedrab="#6B8E23",t.orangered="#FF4500",t.orchid="#DA70D6",t.palegoldenrod="#EEE8AA",t.palegreen="#98FB98",t.paleturquoise="#AFEEEE",t.palevioletred="#DB7093",t.papayawhip="#FFEFD5",t.peachpuff="#FFDAB9",t.peru="#CD853F",t.pink="#FFC0CB",t.plum="#DDA0DD",t.powderblue="#B0E0E6",t.rosybrown="#BC8F8F",t.royalblue="#4169E1",t.saddlebrown="#8B4513",t.salmon="#FA8072",t.sandybrown="#F4A460",t.seagreen="#2E8B57",t.seashell="#FFF5EE",t.sienna="#A0522D",t.skyblue="#87CEEB",t.slateblue="#6A5ACD",t.slategray="#708090",t.slategrey="#708090",t.snow="#FFFAFA",t.springgreen="#00FF7F",t.steelblue="#4682B4",t.tan="#D2B48C",t.thistle="#D8BFD8",t.tomato="#FF6347",t.turquoise="#40E0D0",t.violet="#EE82EE",t.wheat="#F5DEB3",t.whitesmoke="#F5F5F5",t.yellowgreen="#9ACD32",t.rebeccapurple="#663399"}(i||(i={}));var u,c,s,d,l,f,h,p=Object.keys(i),g=((u={})[r.HEX]=/^#(?:([a-f\d])([a-f\d])([a-f\d])([a-f\d])?|([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?)$/i,u[r.RGB]=/^rgb\s*\(\s*(?:(\d+%)\s*,\s*(\d+%)\s*,\s*(\d+%)|(\d+)\s*,\s*(\d+)\s*,\s*(\d+))\s*\)$/,u[r.RGBA]=/^rgba\s*\(\s*(?:(\d+%)\s*,\s*(\d+%)\s*,\s*(\d+%)|(\d+)\s*,\s*(\d+)\s*,\s*(\d+))\s*,\s*(\d\.?\d*)\s*\)$/,u[r.HSL]=/^hsl\s*\(\s*(-?\d+\.?\d*)\s*,\s*(\d+\.?\d*)%\s*,\s*(\d+\.?\d*)%s*\)$/,u[r.HSLA]=/^hsla\s*\(\s*(-?\d+\.?\d*)\s*,\s*(\d+\.?\d*)%\s*,\s*(\d+\.?\d*)%\s*,\s*(\d\.?\d*)\s*\)$/,u[r.CMYK]=/^(?:device-cmyk|cmyk)\s*\(\s*(?:(\d+\.?\d*%)\s*,\s*(\d+\.?\d*%)\s*,\s*(\d+\.?\d*%)\s*,\s*(\d+\.?\d*%)|(\d\.?\d*)\s*,\s*(\d\.?\d*)\s*,\s*(\d\.?\d*)\s*,\s*(\d\.?\d*))\s*\)$/,u),b=/^(\d+(?:\.\d+)?|\.\d+)%$/,F=/^0x([a-f\d]{1,2})$/i,y="The provided string color doesn't have a correct format",m="The provided color object doesn't have the proper keys or format",A=function(t,r,e){return e<0&&(e+=6),e>=6&&(e-=6),e<1?Math.round(255*((r-t)*e+t)):e<3?Math.round(255*r):e<4?Math.round(255*((r-t)*(4-e)+t)):Math.round(255*t)},H=function(t,r,e){r/=100;var n=(e/=100)<=.5?e*(r+1):e+r-e*r,i=2*e-n;return{r:A(i,n,(t/=60)+2),g:A(i,n,t),b:A(i,n,t-2)}},E=function(t,r,e,n){return n=1-n,{r:Math.round(255*(1-t)*n),g:Math.round(255*(1-r)*n),b:Math.round(255*(1-e)*n)}},B=function(t,r,e){t/=255,r/=255,e/=255;var n=1-Math.max(t,r,e),i=1-n,o=(i-t)/i,a=(i-r)/i,u=(i-e)/i;return{c:Math.round(100*o),m:Math.round(100*a),y:Math.round(100*u),k:Math.round(100*n)}},v=function(t,r,e,n){void 0===n&&(n=1),t/=255,r/=255,e/=255,n=Math.min(n,1);var i=Math.max(t,r,e),o=Math.min(t,r,e),a=i-o,u=0,c=0,s=(i+o)/2;if(0===a)u=0,c=0;else{switch(i){case t:u=(r-e)/a%6;break;case r:u=(e-t)/a+2;break;case e:u=(t-r)/a+4}(u=Math.round(60*u))<0&&(u+=360),c=a/(1-Math.abs(2*s-1))}return{h:u,s:Math.round(100*c),l:Math.round(100*s),a:n}},M=function(t,r){if(t<0&&(t+=360),t>360&&(t-=360),360===t||0===t)return t;var e=[[0,120],[120,180],[180,240],[240,360]],n=[[0,60],[60,120],[120,240],[240,360]],i=r?n:e,o=0,a=0,u=0,c=0;return(r?e:n).find((function(r,e){return t>=r[0]&&t<r[1]&&(o=r[0],a=r[1],u=i[e][0],c=i[e][1],!0)})),u+(c-u)/(a-o)*(t-o)},R=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},S=function(t){return b.test("".concat(t))?+"".concat(t).replace(b,"$1"):Math.min(+t,100)},C=function(t){return 1===t.length&&(t+=t),parseInt(t,16)},L=function(t){var r=parseInt("".concat(t)).toString(16).toUpperCase();return 1===r.length?"0x0".concat(r):"0x".concat(r)},D=function(t){var r=parseInt("".concat(t)).toString(16).toUpperCase();return 1===r.length&&(r="0".concat(r)),r},G=function(t,r){return void 0===r&&(r=!1),!r&&b.test(t)?Math.min(255*+t.replace(b,"$1")/100,255):F.test(t)?3===t.length?r?parseInt(t+t.slice(-1))/255:parseInt(t+t.slice(-1)):r?parseInt(t)/255:parseInt(t):Math.min(+t,r?1:255)},k=function(t){return Math.min(b.test(t)?+t.replace(b,"$1")/100:+t,1)},O=function(t){return t.sort().join().toUpperCase()},X=function(t,r){void 0===r&&(r=0);var e=Math.pow(10,r);return Math.round(+t*e)/e},j=function(t,r,e){return Math.max(r,Math.min(t,e))},I=((c={})[r.HEX]=function(t){return"#".concat(D(t.r)).concat(D(t.g)).concat(D(t.b)).concat(R(t,"a")&&D(t.a)||"")},c[r.RGB]=function(t){return"rgb".concat(R(t,"a")?"a":"","(").concat(X(t.r),",").concat(X(t.g),",").concat(X(t.b)).concat(R(t,"a")&&",".concat(X(t.a,2))||"",")")},c[r.HSL]=function(t){return"hsl".concat(R(t,"a")?"a":"","(").concat(X(t.h),",").concat(X(t.s),"%,").concat(X(t.l),"%").concat(R(t,"a")&&",".concat(X(t.a,2))||"",")")},c[r.CMYK]=function(t){return"cmyk(".concat(X(t.c),"%,").concat(X(t.m),"%,").concat(X(t.y),"%,").concat(X(t.k),"%)")},c),x=function(t){return(t>360||t<0)&&(t-=360*Math.floor(t/360)),t},T=function(t){return isNaN(+t)||t>1?1:X(t,2)},Y=function(r,e,n){return e.reduce((function(e,i){return a(a([],e,!0),[o(o({},r),{h:n===t.Mix.ADDITIVE?x(r.h+i):x(M(M(r.h,!1)+i,!0))})],!1)}),[o({},r)])},P=function(t,r){return Y(t,[30,-30],r)},w=function(t,r){return Y(t,[180],r)},K=function(t,r){return Y(t,[150,-150],r)},N=function(t,r){return Y(t,[120,-120],r)},V=function(t,r){return Y(t,[60,-120,180],r)},U=function(t,r){return Y(t,[90,-90,180],r)},$=function(t){return"string"==typeof t?function(t){var e;if(Object.keys(r).some((function(r){if(g[r].test(t))return e=r,!0})),!e&&~p.indexOf(t)&&(e=r.HEX),!e)throw new Error(y);return e}(t):function(t){var e,n=!1,i=O(Object.keys(t));if(Object.keys(r).filter((function(t){return t!==r.HEX})).some((function(t){if(O(t.split(""))===i)return e=t,!0})),e&&e===r.RGB||e===r.RGBA){var o=Object.entries(t).map((function(t){return F.test("".concat(t[1]))})),a=Object.entries(t).map((function(t){return b.test("".concat(t[1]))||!F.test("".concat(t[1]))&&!isNaN(+t[1])&&+t[1]<=255})),u=o.some((function(t,r){return r>0&&t!==o[r-1]})),c=a.some((function(t,r){return r>0&&t!==a[r-1]}));!(n=u||c||!o[0]&&!a[0])&&o[0]&&(e=r.HEX)}if(!e||n)throw new Error(m);return e}(t)},q=((s={})[r.HEX]=function(t){var r=(~p.indexOf(t)?i[t]:t).match(g.HEX),e={r:C(r[1]||r[5]),g:C(r[2]||r[6]),b:C(r[3]||r[7])},n=r[4]||r[8];return void 0!==n&&(e.a=C(n)/255),e},s[r.RGB]=function(t){var r=t.match(g.RGB),e=G(r[1]||r[4]),n=G(r[2]||r[5]),i=G(r[3]||r[6]);return{r:Math.min(e,255),g:Math.min(n,255),b:Math.min(i,255)}},s[r.RGBA]=function(t){var r=t.match(g.RGBA),e=G(r[1]||r[4]),n=G(r[2]||r[5]),i=G(r[3]||r[6]),o=+r[7];return{r:Math.min(e,255),g:Math.min(n,255),b:Math.min(i,255),a:T(o)}},s[r.HSL]=function(t){var r=t.match(g.HSL),e=x(+r[1]),n=S(r[2]),i=S(r[3]);return H(e,n,i)},s[r.HSLA]=function(t){var r=t.match(g.HSLA),e=x(+r[1]),n=S(r[2]),i=S(r[3]),o=+r[4],a=H(e,n,i);return a.a=T(o),a},s[r.CMYK]=function(t){var r=t.match(g.CMYK),e=k(r[1]||r[5]),n=k(r[2]||r[6]),i=k(r[3]||r[7]),o=k(r[4]||r[8]);return E(e,n,i,o)},s),_=((d={})[r.HEX]=function(t){var r={r:G("".concat(t.r)),g:G("".concat(t.g)),b:G("".concat(t.b))};return r.a=R(t,"a")?Math.min(G("".concat(t.a),!0),1):1,r},d[r.RGB]=function(t){var r=this.HEX(t);return delete r.a,r},d[r.RGBA]=function(t){return this.HEX(t)},d[r.HSL]=function(t){var r=S("".concat(t.s)),e=S("".concat(t.l));return H(x(t.h),r,e)},d[r.HSLA]=function(t){var r=this.HSL(t);return r.a=T(t.a),r},d[r.CMYK]=function(t){var r=k("".concat(t.c)),e=k("".concat(t.m)),n=k("".concat(t.y)),i=k("".concat(t.k));return E(r,e,n,i)},d),Q=function(t,r){return void 0===r&&(r=$(t)),"string"==typeof t?q[r](t):_[r](t)},z=((l={})[r.HEX]=function(t){return{r:L(t.r),g:L(t.g),b:L(t.b)}},l.HEXA=function(t){var r=z.HEX(t);return r.a=R(t,"a")?L(255*t.a):"0xFF",r},l[r.RGB]=function(t){return R(t,"a")&&delete t.a,t},l[r.RGBA]=function(t){return t.a=R(t,"a")?X(t.a,2):1,t},l[r.HSL]=function(t){var r=v(t.r,t.g,t.b);return delete r.a,r},l[r.HSLA]=function(t){var r=z.HSL(t);return r.a=R(t,"a")?X(t.a,2):1,r},l[r.CMYK]=function(t){return B(t.r,t.g,t.b)},l),J=function(t,e,n){var i=$(t),a="string"==typeof t,u=Q(t,i),c="string"==typeof t&&R(u,"a")||"string"!=typeof t&&R(t,"a"),s=v(u.r,u.g,u.b,u.a);c||delete s.a;var d=n?s.l/(e+1):(100-s.l)/(e+1),l=Array(e).fill(null).map((function(t,r){return o(o({},s),{l:s.l+d*(r+1)*(1-2*+n)})}));switch(i){case r.HEX:default:return l.map((function(t){var r=H(t.h,t.s,t.l);return c&&(r.a=t.a),a?c?I.HEX(o(o({},r),{a:X(255*r.a,2)})):I.HEX(r):c?z.HEXA(r):z.HEX(r)}));case r.RGB:case r.RGBA:return l.map((function(t){var r=H(t.h,t.s,t.l);return c&&(r.a=t.a),a?I.RGB(r):c?z.RGBA(r):z.RGB(r)}));case r.HSL:case r.HSLA:return l.map((function(t){return a?I.HSL(t):c?z.HSLA(o(o({},H(t.h,t.s,t.l)),{a:t.a})):z.HSL(H(t.h,t.s,t.l))}))}},W=((f={buildHarmony:function(t,e,n){var i=$(t),o=Q(t,i),a=v(o.r,o.g,o.b,o.a),u="string"==typeof t&&R(o,"a")||"string"!=typeof t&&R(t,"a"),c="string"==typeof t;switch(i){case r.HEX:default:return u?this.HEXA(a,e,n,c):this.HEX(a,e,n,c);case r.HSL:return this.HSL(a,e,n,c);case r.HSLA:return this.HSLA(a,e,n,c);case r.RGB:return this.RGB(a,e,n,c);case r.RGBA:return this.RGBA(a,e,n,c)}}})[r.HEX]=function(t,r,e,n){return r(t,e).map((function(t){return n?I.HEX(H(t.h,t.s,t.l)):z.HEX(H(t.h,t.s,t.l))}))},f.HEXA=function(t,r,e,n){return r(t,e).map((function(t){return n?I.HEX(o(o({},H(t.h,t.s,t.l)),{a:255*T(t.a)})):z.HEXA(o(o({},H(t.h,t.s,t.l)),{a:T(t.a)}))}))},f[r.RGB]=function(t,r,e,n){return r(t,e).map((function(t){return n?I.RGB(H(t.h,t.s,t.l)):z.RGB(H(t.h,t.s,t.l))}))},f[r.RGBA]=function(t,r,e,n){return r(t,e).map((function(t){return n?I.RGB(o(o({},H(t.h,t.s,t.l)),{a:T(t.a)})):z.RGBA(o(o({},H(t.h,t.s,t.l)),{a:T(t.a)}))}))},f[r.HSL]=function(t,r,e,n){return r(t,e).map((function(t){return n?I.HSL({h:t.h,s:t.s,l:t.l}):z.HSL(H(t.h,t.s,t.l))}))},f[r.HSLA]=function(t,r,e,n){return r(t,e).map((function(t){return n?I.HSL(o(o({},t),{a:T(t.a)})):z.HSLA(o(o({},H(t.h,t.s,t.l)),{a:T(t.a)}))}))},f),Z=((h={mix:function(r,e){var n,i,a,u,c,s,d,l,f,h,p,g,b,F,y,m=r.map((function(t){var r=$(t);return Q(t,r)})),A=e===t.Mix.SUBTRACTIVE?m.map((function(t){var r,e,n,i,o,a,u,c,s,d,l,f,h,p,g=(r=t.r,e=t.g,n=t.b,i=Math.min(r,e,n),o=Math.min(255-r,255-e,255-n),a=r-i,u=e-i,c=n-i,s=Math.min(a,u),d=a-s,l=(u+s)/2,f=(c+u-s)/2,h=Math.max(d,l,f)/Math.max(a,u,c),p=isNaN(h)||h===1/0||h<=0?1:h,{r:d/p+o,y:l/p+o,b:f/p+o});return R(t,"a")&&(g.a=t.a),g})):null;function H(r){var n=e===t.Mix.ADDITIVE?{r:0,g:0,b:0,a:0}:{r:0,y:0,b:0,a:0};return r.reduce((function(r,n){var i=R(n,"a")?n.a:1,a={r:Math.min(r.r+n.r*i,255),b:Math.min(r.b+n.b*i,255),a:1-(1-i)*(1-r.a)},u="g"in r?r.g:r.y,c="g"in n?n.g:n.y;return o(o({},a),e===t.Mix.ADDITIVE?{g:Math.min(u+c*i,255)}:{y:Math.min(u+c*i,255)})}),n)}if(e===t.Mix.ADDITIVE)n=H(m);else{var E=H(A);i=E.r,a=E.y,u=E.b,c=Math.min(i,a,u),s=Math.min(255-i,255-a,255-u),d=i-c,l=a-c,f=u-c,h=Math.min(l,f),p=d+l-h,g=l+2*h,b=2*(f-h),F=Math.max(p,g,b)/Math.max(d,l,f),y=isNaN(F)||F===1/0||F<=0?1:F,(n={r:p/y+s,g:g/y+s,b:b/y+s}).a=E.a}return{r:X(n.r,2),g:X(n.g,2),b:X(n.b,2),a:j(n.a,0,1)}}})[r.HEX]=function(t,r,e){var n=this.mix(t,r);return delete n.a,e?I.HEX(n):z.HEX(n)},h.HEXA=function(t,r,e){var n=this.mix(t,r);return n.a=e?255*T(n.a):T(n.a),e?I.HEX(n):z.HEXA(n)},h[r.RGB]=function(t,r,e){var n=this.mix(t,r);return delete n.a,e?I.RGB(n):z.RGB(n)},h[r.RGBA]=function(t,r,e){var n=this.mix(t,r);return e?I.RGB(n):z.RGBA(n)},h[r.HSL]=function(t,r,e){var n=this.mix(t,r),i=v(n.r,n.g,n.b);return delete n.a,delete i.a,e?I.HSL(i):z.HSL(n)},h[r.HSLA]=function(t,r,e){var n=this.mix(t,r),i=v(n.r,n.g,n.b,n.a);return e?I.HSL(i):z.HSLA(n)},h),tt=function(t,r){return"string"==typeof t&&r||"object"==typeof t&&!r},rt=function(t,r,e,n,i){var o=n(Q(t,r));return e?i(o):o},et=function(t,r,e,n,i,o){e<1&&(e=5);var a=function(t,r,e){var n=e-1,i=(r.r-t.r)/n,o=(r.g-t.g)/n,a=(r.b-t.b)/n,u=T(t.a),c=(T(r.a)-u)/n;return Array(e).fill(null).map((function(e,s){return 0===s?t:s===n?r:{r:X(t.r+i*s),g:X(t.g+o*s),b:X(t.b+a*s),a:X(u+c*s,2)}}))}(Q(t),Q(r),e);return a.map((function(t){var r=i(t);return n?o(r):r}))},nt=function(){function e(t){this.rgb=Q(t),this.updateHSL(),this.updateCMYK()}return e.prototype.updateRGB=function(){this.rgb=o(o({},H(this.hsl.h,this.hsl.s,this.hsl.l)),{a:this.hsl.a})},e.prototype.updateRGBFromCMYK=function(){this.rgb=o(o({},E(this.cmyk.c,this.cmyk.m,this.cmyk.y,this.cmyk.k)),{a:this.rgb.a})},e.prototype.updateHSL=function(){this.hsl=v(this.rgb.r,this.rgb.g,this.rgb.b,this.rgb.a)},e.prototype.updateCMYK=function(){this.cmyk=B(this.rgb.r,this.rgb.g,this.rgb.b)},e.prototype.updateRGBAndCMYK=function(){return this.updateRGB(),this.updateCMYK(),this},e.prototype.updateHSLAndCMYK=function(){return this.updateHSL(),this.updateCMYK(),this},e.prototype.updateRGBAndHSL=function(){return this.updateRGBFromCMYK(),this.updateHSL(),this},e.prototype.setH=function(t){return this.hsl.h=x(t),this.updateRGBAndCMYK()},e.prototype.setS=function(t){return this.hsl.s=j(t,0,100),this.updateRGBAndCMYK()},e.prototype.setL=function(t){return this.hsl.l=j(t,0,100),this.updateRGBAndCMYK()},e.prototype.setR=function(t){return this.rgb.r=j(t,0,255),this.updateHSLAndCMYK()},e.prototype.setG=function(t){return this.rgb.g=j(t,0,255),this.updateHSLAndCMYK()},e.prototype.setB=function(t){return this.rgb.b=j(t,0,255),this.updateHSLAndCMYK()},e.prototype.setA=function(t){return this.hsl.a=this.rgb.a=j(t,0,1),this},e.prototype.setC=function(t){return this.cmyk.c=j(t,0,100),this.updateRGBAndHSL()},e.prototype.setM=function(t){return this.cmyk.m=j(t,0,100),this.updateRGBAndHSL()},e.prototype.setY=function(t){return this.cmyk.y=j(t,0,100),this.updateRGBAndHSL()},e.prototype.setK=function(t){return this.cmyk.k=j(t,0,100),this.updateRGBAndHSL()},Object.defineProperty(e.prototype,"H",{get:function(){return X(this.hsl.h)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"S",{get:function(){return X(this.hsl.s)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"L",{get:function(){return X(this.hsl.l)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"R",{get:function(){return X(this.rgb.r)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"G",{get:function(){return X(this.rgb.g)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"B",{get:function(){return X(this.rgb.b)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"A",{get:function(){return X(this.hsl.a,2)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"C",{get:function(){return X(this.cmyk.c)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"M",{get:function(){return X(this.cmyk.m)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"Y",{get:function(){return X(this.cmyk.y)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"K",{get:function(){return X(this.cmyk.k)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"HEXObject",{get:function(){return z.HEX(this.rgb)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"HEXAObject",{get:function(){return z.HEXA(this.rgb)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"RGBObject",{get:function(){return{r:this.R,g:this.G,b:this.B}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"RGBAObject",{get:function(){return o(o({},this.RGBObject),{a:this.A})},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"HSLObject",{get:function(){return{h:this.H,s:this.S,l:this.L}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"HSLAObject",{get:function(){return o(o({},this.HSLObject),{a:this.A})},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"CMYKObject",{get:function(){return{c:this.C,m:this.M,y:this.Y,k:this.K}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"HEX",{get:function(){var t=this.rgb,r={r:t.r,g:t.g,b:t.b};return I.HEX(r)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"HEXA",{get:function(){var t=this.rgb,r={r:t.r,g:t.g,b:t.b,a:255*this.A};return I.HEX(r)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"RGB",{get:function(){var t=this.rgb,r={r:t.r,g:t.g,b:t.b};return I.RGB(r)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"RGBA",{get:function(){var t=this.rgb,r={r:t.r,g:t.g,b:t.b,a:this.A};return I.RGB(r)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"HSL",{get:function(){var t=this.hsl,r={h:t.h,s:t.s,l:t.l};return I.HSL(r)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"HSLA",{get:function(){return I.HSL(this.hsl)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"CMYK",{get:function(){return I.CMYK(this.cmyk)},enumerable:!1,configurable:!0}),e.toHEX=function(t,r){void 0===r&&(r=!0);var e=$(t);return rt(t,e,r,z.HEX,I.HEX)},e.toHEXA=function(t,r){void 0===r&&(r=!0);var e=$(t);return rt(t,e,r,z.HEXA,I.HEX)},e.toRGB=function(t,r){void 0===r&&(r=!0);var e=$(t);return rt(t,e,r,z.RGB,I.RGB)},e.toRGBA=function(t,r){void 0===r&&(r=!0);var e=$(t);return rt(t,e,r,z.RGBA,I.RGB)},e.toHSL=function(t,e){void 0===e&&(e=!0);var n=$(t);return n===r.HSL&&tt(t,e)?t:rt(t,n,e,z.HSL,I.HSL)},e.toHSLA=function(t,e){void 0===e&&(e=!0);var n=$(t);return n===r.HSLA&&tt(t,e)?t:rt(t,n,e,z.HSLA,I.HSL)},e.toCMYK=function(t,e){void 0===e&&(e=!0);var n=$(t);return n===r.CMYK&&tt(t,e)?t:rt(t,n,e,z.CMYK,I.CMYK)},e.getBlendHEX=function(t,r,e,n){return void 0===e&&(e=5),void 0===n&&(n=!0),et(t,r,e,n,z.HEX,I.HEX)},e.getBlendHEXA=function(t,r,e,n){return void 0===e&&(e=5),void 0===n&&(n=!0),et(t,r,e,n,z.HEXA,I.HEX)},e.getBlendRGB=function(t,r,e,n){return void 0===e&&(e=5),void 0===n&&(n=!0),et(t,r,e,n,z.RGB,I.RGB)},e.getBlendRGBA=function(t,r,e,n){return void 0===e&&(e=5),void 0===n&&(n=!0),et(t,r,e,n,z.RGBA,I.RGB)},e.getBlendHSL=function(t,r,e,n){return void 0===e&&(e=5),void 0===n&&(n=!0),et(t,r,e,n,z.HSL,I.HSL)},e.getBlendHSLA=function(t,r,e,n){return void 0===e&&(e=5),void 0===n&&(n=!0),et(t,r,e,n,z.HSLA,I.HSL)},e.getMixHEX=function(r,e,n){return void 0===e&&(e=t.Mix.ADDITIVE),void 0===n&&(n=!0),Z.HEX(r,e,n)},e.getMixHEXA=function(r,e,n){return void 0===e&&(e=t.Mix.ADDITIVE),void 0===n&&(n=!0),Z.HEXA(r,e,n)},e.getMixRGB=function(r,e,n){return void 0===e&&(e=t.Mix.ADDITIVE),void 0===n&&(n=!0),Z.RGB(r,e,n)},e.getMixRGBA=function(r,e,n){return void 0===e&&(e=t.Mix.ADDITIVE),void 0===n&&(n=!0),Z.RGBA(r,e,n)},e.getMixHSL=function(r,e,n){return void 0===e&&(e=t.Mix.ADDITIVE),void 0===n&&(n=!0),Z.HSL(r,e,n)},e.getMixHSLA=function(r,e,n){return void 0===e&&(e=t.Mix.ADDITIVE),void 0===n&&(n=!0),Z.HSLA(r,e,n)},e.getShades=function(t,r){return J(t,r,!0)},e.getTints=function(t,r){return J(t,r,!1)},e.getHarmony=function(r,e,n){switch(void 0===e&&(e=t.Harmony.COMPLEMENTARY),void 0===n&&(n=t.Mix.ADDITIVE),e){case t.Harmony.ANALOGOUS:return W.buildHarmony(r,P,n);case t.Harmony.SPLIT_COMPLEMENTARY:return W.buildHarmony(r,K,n);case t.Harmony.TRIADIC:return W.buildHarmony(r,N,n);case t.Harmony.TETRADIC:return W.buildHarmony(r,V,n);case t.Harmony.SQUARE:return W.buildHarmony(r,U,n);default:return W.buildHarmony(r,w,n)}},e}();return t.ColorTranslator=nt,Object.defineProperty(t,"__esModule",{value:!0}),t}({});
