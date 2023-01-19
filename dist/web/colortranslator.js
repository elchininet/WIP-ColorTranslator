var colortranslator=function(t){"use strict";var r=function(){return r=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var i in r=arguments[e])Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);return t},r.apply(this,arguments)};function e(t,r,e){if(e||2===arguments.length)for(var n,i=0,o=r.length;i<o;i++)!n&&i in r||(n||(n=Array.prototype.slice.call(r,0,i)),n[i]=r[i]);return t.concat(n||Array.prototype.slice.call(r))}var n,i,o,a;!function(t){t.HEX="HEX",t.RGB="RGB",t.HSL="HSL",t.CMYK="CMYK"}(n||(n={})),t.Harmony=void 0,(i=t.Harmony||(t.Harmony={})).ANALOGOUS="ANALOGOUS",i.COMPLEMENTARY="COMPLEMENTARY",i.SPLIT_COMPLEMENTARY="SPLIT_COMPLEMENTARY",i.TRIADIC="TRIADIC",i.TETRADIC="TETRADIC",i.SQUARE="SQUARE",t.Mix=void 0,(o=t.Mix||(t.Mix={})).ADDITIVE="ADDITIVE",o.SUBTRACTIVE="SUBTRACTIVE",function(t){t.black="#000000",t.silver="#C0C0C0",t.gray="#808080",t.white="#FFFFFF",t.maroon="#800000",t.red="#FF0000",t.purple="#800080",t.fuchsia="#FF00FF",t.green="#008000",t.lime="#00FF00",t.olive="#808000",t.yellow="#FFFF00",t.navy="#000080",t.blue="#0000FF",t.teal="#008080",t.aqua="#00FFFF",t.orange="#FFA500",t.aliceblue="#F0F8FF",t.antiquewhite="#FAEBD7",t.aquamarine="#7FFFD4",t.azure="#F0FFFF",t.beige="#F5F5DC",t.bisque="#FFE4C4",t.blanchedalmond="#FFEBCD",t.blueviolet="#8A2BE2",t.brown="#A52A2A",t.burlywood="#DEB887",t.cadetblue="#5F9EA0",t.chartreuse="#7FFF00",t.chocolate="#D2691E",t.coral="#FF7F50",t.cornflowerblue="#6495ED",t.cornsilk="#FFF8DC",t.crimson="#DC143C",t.cyan="#00FFFF",t.darkblue="#00008B",t.darkcyan="#008B8B",t.darkgoldenrod="#B8860B",t.darkgray="#A9A9A9",t.darkgreen="#006400",t.darkgrey="#A9A9A9",t.darkkhaki="#BDB76B",t.darkmagenta="#8B008B",t.darkolivegreen="#556B2F",t.darkorange="#FF8C00",t.darkorchid="#9932CC",t.darkred="#8B0000",t.darksalmon="#E9967A",t.darkseagreen="#8FBC8F",t.darkslateblue="#483D8B",t.darkslategray="#2F4F4F",t.darkslategrey="#2F4F4F",t.darkturquoise="#00CED1",t.darkviolet="#9400D3",t.deeppink="#FF1493",t.deepskyblue="#00BFFF",t.dimgray="#696969",t.dimgrey="#696969",t.dodgerblue="#1E90FF",t.firebrick="#B22222",t.floralwhite="#FFFAF0",t.forestgreen="#228B22",t.gainsboro="#DCDCDC",t.ghostwhite="#F8F8FF",t.gold="#FFD700",t.goldenrod="#DAA520",t.greenyellow="#ADFF2F",t.grey="#808080",t.honeydew="#F0FFF0",t.hotpink="#FF69B4",t.indianred="#CD5C5C",t.indigo="#4B0082",t.ivory="#FFFFF0",t.khaki="#F0E68C",t.lavender="#E6E6FA",t.lavenderblush="#FFF0F5",t.lawngreen="#7CFC00",t.lemonchiffon="#FFFACD",t.lightblue="#ADD8E6",t.lightcoral="#F08080",t.lightcyan="#E0FFFF",t.lightgoldenrodyellow="#FAFAD2",t.lightgray="#D3D3D3",t.lightgreen="#90EE90",t.lightgrey="#D3D3D3",t.lightpink="#FFB6C1",t.lightsalmon="#FFA07A",t.lightseagreen="#20B2AA",t.lightskyblue="#87CEFA",t.lightslategray="#778899",t.lightslategrey="#778899",t.lightsteelblue="#B0C4DE",t.lightyellow="#FFFFE0",t.limegreen="#32CD32",t.linen="#FAF0E6",t.magenta="#FF00FF",t.mediumaquamarine="#66CDAA",t.mediumblue="#0000CD",t.mediumorchid="#BA55D3",t.mediumpurple="#9370DB",t.mediumseagreen="#3CB371",t.mediumslateblue="#7B68EE",t.mediumspringgreen="#00FA9A",t.mediumturquoise="#48D1CC",t.mediumvioletred="#C71585",t.midnightblue="#191970",t.mintcream="#F5FFFA",t.mistyrose="#FFE4E1",t.moccasin="#FFE4B5",t.navajowhite="#FFDEAD",t.oldlace="#FDF5E6",t.olivedrab="#6B8E23",t.orangered="#FF4500",t.orchid="#DA70D6",t.palegoldenrod="#EEE8AA",t.palegreen="#98FB98",t.paleturquoise="#AFEEEE",t.palevioletred="#DB7093",t.papayawhip="#FFEFD5",t.peachpuff="#FFDAB9",t.peru="#CD853F",t.pink="#FFC0CB",t.plum="#DDA0DD",t.powderblue="#B0E0E6",t.rosybrown="#BC8F8F",t.royalblue="#4169E1",t.saddlebrown="#8B4513",t.salmon="#FA8072",t.sandybrown="#F4A460",t.seagreen="#2E8B57",t.seashell="#FFF5EE",t.sienna="#A0522D",t.skyblue="#87CEEB",t.slateblue="#6A5ACD",t.slategray="#708090",t.slategrey="#708090",t.snow="#FFFAFA",t.springgreen="#00FF7F",t.steelblue="#4682B4",t.tan="#D2B48C",t.thistle="#D8BFD8",t.tomato="#FF6347",t.turquoise="#40E0D0",t.violet="#EE82EE",t.wheat="#F5DEB3",t.whitesmoke="#F5F5F5",t.yellowgreen="#9ACD32",t.rebeccapurple="#663399"}(a||(a={}));var u,c,s,d,l,h,f,g=Object.keys(a),p=((u={})[n.HEX]=/^#(?:([a-f\d])([a-f\d])([a-f\d])([a-f\d])?|([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?)$/i,u[n.RGB]=/^rgba?\s*\(\s*(?:((?:\d*\.)?\d+%?)\s*,\s*((?:\d*\.)?\d+%?)\s*,\s*((?:\d*\.)?\d+%?)(?:\s*,\s*((?:\d*\.)?\d+))?|((?:\d*\.)?\d+%?)\s*((?:\d*\.)?\d+%?)\s*((?:\d*\.)?\d+%?)(?:\s*\/\s*((?:\d*\.)?\d+%?))?)\s*\)$/,u[n.HSL]=/^hsla?\s*\(\s*(?:(-?(?:\d*\.)?\d+(?:deg|grad|rad|turn)?)\s*,\s*((?:\d*\.)?\d+)%\s*,\s*((?:\d*\.)?\d+)%(?:\s*,\s*((?:\d*\.)?\d+))?|(-?(?:\d*\.)?\d+(?:deg|grad|rad|turn)?)\s*((?:\d*\.)?\d+)%\s*((?:\d*\.)?\d+)%(?:\s*\/\s*((?:\d*\.)?\d+%?))?)\s*\)$/,u[n.CMYK]=/^(?:device-cmyk|cmyk)\s*\(\s*(?:((?:\d*\.)?\d+%?)\s*,\s*((?:\d*\.)?\d+%?)\s*,\s*((?:\d*\.)?\d+%?)\s*,\s*((?:\d*\.)?\d+%?)(?:\s*,\s*((?:\d*\.)?\d+))?|((?:\d*\.)?\d+%?)\s*((?:\d*\.)?\d+%?)\s*((?:\d*\.)?\d+%?)\s*((?:\d*\.)?\d+%?)(?:\s*\/\s*((?:\d*\.)?\d+%?))?)\s*\)$/,u),b=/^(-?(?:\d*\.)?\d+)((?:deg|grad|rad|turn)?)$/,F=/^(\d+(?:\.\d+)?|\.\d+)%$/,y=/^0x([a-f\d]{1,2})$/i,m="The provided string color doesn't have a correct format",A="The provided color object doesn't have the proper keys or format",E=function(t,r,e){return e<0&&(e+=6),e>=6&&(e-=6),e<1?Math.round(255*((r-t)*e+t)):e<3?Math.round(255*r):e<4?Math.round(255*((r-t)*(4-e)+t)):Math.round(255*t)},H=function(t,r,e){r/=100;var n=(e/=100)<=.5?e*(r+1):e+r-e*r,i=2*e-n;return{r:E(i,n,(t/=60)+2),g:E(i,n,t),b:E(i,n,t-2)}},v=function(t,r,e,n){return n=1-n,{r:Math.round(255*(1-t)*n),g:Math.round(255*(1-r)*n),b:Math.round(255*(1-e)*n)}},B=function(t,r,e){t/=255,r/=255,e/=255;var n=1-Math.max(t,r,e),i=1-n,o=(i-t)/i,a=(i-r)/i,u=(i-e)/i;return{c:Math.round(100*o),m:Math.round(100*a),y:Math.round(100*u),k:Math.round(100*n)}},M=function(t,r,e,n){void 0===n&&(n=1),t/=255,r/=255,e/=255,n=Math.min(n,1);var i=Math.max(t,r,e),o=Math.min(t,r,e),a=i-o,u=0,c=0,s=(i+o)/2;if(0!==a){switch(i){case t:u=(r-e)/a%6;break;case r:u=(e-t)/a+2;break;case e:u=(t-r)/a+4}(u=Math.round(60*u))<0&&(u+=360),c=a/(1-Math.abs(2*s-1))}return{h:u,s:Math.round(100*c),l:Math.round(100*s),a:n}},C=function(t,r){if(t<0&&(t+=360),t>360&&(t-=360),360===t||0===t)return t;var e=[[0,120],[120,180],[180,240],[240,360]],n=[[0,60],[60,120],[120,240],[240,360]],i=r?n:e,o=0,a=0,u=0,c=0;return(r?e:n).find((function(r,e){return t>=r[0]&&t<r[1]&&(o=r[0],a=r[1],u=i[e][0],c=i[e][1],!0)})),u+(c-u)/(a-o)*(t-o)},D=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},R=function(t){return F.test("".concat(t))?+"".concat(t).replace(F,"$1"):Math.min(+t,100)},S=function(t){return 1===t.length&&(t+=t),parseInt(t,16)},L=function(t){var r=j(t).toString(16).toUpperCase();return 1===r.length?"0x0".concat(r):"0x".concat(r)},G=function(t){var r=j(t).toString(16).toUpperCase();return 1===r.length&&(r="0".concat(r)),r},k=function(t,r){return void 0===r&&(r=!1),!r&&F.test(t)?Math.min(255*+t.replace(F,"$1")/100,255):y.test(t)?3===t.length?r?parseInt(t+t.slice(-1))/255:parseInt(t+t.slice(-1)):r?j(t,6)/255:j(t,6):Math.min(+t,r?1:255)},O=function(t){return Math.min(F.test(t)?+t.replace(F,"$1")/100:+t,1)},X=function(t){return e([],t,!0).sort().join("").toUpperCase()},j=function(t,r){void 0===r&&(r=0);var e=Math.pow(10,r);return Math.round(+t*e)/e},I=function(t,r){return void 0===r&&(r=0),t.map((function(t){return j(t,r)}))},Y=function(t,r,e){return Math.max(r,Math.min(t,e))},x=((c={})[n.HEX]=function(t){var r=function(t){return t.map((function(t){return G(t)}))}([t.r,t.g,t.b]),e=D(t,"a")?G(t.a):"";return"#".concat(r.join("")).concat(e)},c[n.RGB]=function(t){var r=t.r,e=t.g,n=t.b,i=I([r,e,n]),o=D(t,"a"),a=o?",".concat(j(t.a,2)):"";return"rgb".concat(o?"a":"","(").concat(i.join(",")).concat(a,")")},c[n.HSL]=function(t){var r=t.h,e=t.s,n=t.l,i=D(t,"a"),o=i?",".concat(j(t.a,2)):"";return"hsl".concat(i?"a":"","(").concat(j(r),",").concat(j(e),"%,").concat(j(n),"%").concat(o,")")},c[n.CMYK]=function(t){var r=t.c,e=t.m,n=t.y,i=t.k,o=I([r,e,n,i]),a=D(t,"a")?",".concat(j(t.a,2)):"";return"cmyk(".concat(o.join("%,"),"%").concat(a,")")},c),T=function(t){if("string"==typeof t){var r=t.match(b),e=+r[1];switch(r[2]){case"rad":t=Math.round(180*e/Math.PI);break;case"turn":t=Math.round(360*e);break;default:t=e}}return(t>360||t<0)&&(t-=360*Math.floor(t/360)),t},K=function(t){return"string"==typeof t&&(t=F.test(t)?+t.replace(F,"$1")/100:+t),isNaN(+t)||t>1?1:j(t,6)},P=function(n,i,o){return i.reduce((function(i,a){return e(e([],i,!0),[r(r({},n),{h:o===t.Mix.ADDITIVE?T(n.h+a):T(C(C(n.h,!1)+a,!0))})],!1)}),[r({},n)])},w=function(t,r){return P(t,[30,-30],r)},N=function(t,r){return P(t,[180],r)},V=function(t,r){return P(t,[150,-150],r)},U=function(t,r){return P(t,[120,-120],r)},$=function(t,r){return P(t,[60,-120,180],r)},q=function(t,r){return P(t,[90,-90,180],r)},Q=Object.entries(n).reduce((function(t,r){var e=r[0],i=r[1];if(e!==n.HEX){var o=X(e.split(""));t[o]=i,t["A"+o]=i}return t}),{}),_=function(t){return"string"==typeof t?function(t){var r;if(Object.keys(n).some((function(e){if(p[e].test(t))return r=e,!0})),!r&&~g.indexOf(t)&&(r=n.HEX),!r)throw new Error(m);return r}(t):function(t){var r,e=!1,i=X(Object.keys(t));if(Q[i]&&(r=Q[i]),r&&r===n.RGB){var o=Object.entries(t).some((function(t){return!y.test("".concat(t[1]))})),a=Object.entries(t).some((function(t){return!(F.test("".concat(t[1]))||!y.test("".concat(t[1]))&&!isNaN(+t[1])&&+t[1]<=255)}));o&&a&&(e=!0),o||(r=n.HEX)}if(!r||e)throw new Error(A);return r}(t)},z=((s={})[n.HEX]=function(t){var r=(~g.indexOf(t)?a[t]:t).match(p.HEX),e={r:S(r[1]||r[5]),g:S(r[2]||r[6]),b:S(r[3]||r[7])},n=r[4]||r[8];return void 0!==n&&(e.a=S(n)/255),e},s[n.RGB]=function(t){var r=t.match(p.RGB),e=k(r[1]||r[5]),n=k(r[2]||r[6]),i=k(r[3]||r[7]),o=r[4]||r[8],a={r:Math.min(e,255),g:Math.min(n,255),b:Math.min(i,255)};return void 0!==o&&(a.a=K(o)),a},s[n.HSL]=function(t){var r=t.match(p.HSL),e=T(r[1]||r[5]),n=R(r[2]||r[6]),i=R(r[3]||r[7]),o=r[4]||r[8],a=H(e,n,i);return void 0!==o&&(a.a=K(o)),a},s[n.CMYK]=function(t){var r=t.match(p.CMYK),e=O(r[1]||r[6]),n=O(r[2]||r[7]),i=O(r[3]||r[8]),o=O(r[4]||r[9]),a=r[5]||r[10],u=v(e,n,i,o);return void 0!==a&&(u.a=K(a)),u},s),J=((d={})[n.HEX]=function(t){var r={r:k("".concat(t.r)),g:k("".concat(t.g)),b:k("".concat(t.b))};return D(t,"a")&&(r.a=Math.min(k("".concat(t.a),!0),1)),r},d[n.RGB]=function(t){return this.HEX(t)},d[n.HSL]=function(t){var r=R("".concat(t.s)),e=R("".concat(t.l)),n=H(T(t.h),r,e);return D(t,"a")&&(n.a=K(t.a)),n},d[n.CMYK]=function(t){var r=O("".concat(t.c)),e=O("".concat(t.m)),n=O("".concat(t.y)),i=O("".concat(t.k)),o=v(r,e,n,i);return D(t,"a")&&(o.a=K(t.a)),o},d),W=function(t,r){return void 0===r&&(r=_(t)),"string"==typeof t?z[r](t):J[r](t)},Z=((l={})[n.HEX]=function(t){return{r:L(t.r),g:L(t.g),b:L(t.b)}},l.HEXA=function(t){var r=Z.HEX(t);return r.a=D(t,"a")?L(255*t.a):"0xFF",r},l[n.RGB]=function(t){return D(t,"a")&&delete t.a,t},l.RGBA=function(t){return t.a=D(t,"a")?j(t.a,2):1,t},l[n.HSL]=function(t){var r=M(t.r,t.g,t.b);return delete r.a,r},l.HSLA=function(t){var r=Z.HSL(t);return r.a=D(t,"a")?j(t.a,2):1,r},l[n.CMYK]=function(t){return B(t.r,t.g,t.b)},l.CMYKA=function(t){var r=B(t.r,t.g,t.b);return r.a=D(t,"a")?j(t.a,2):1,r},l),tt=function(t,e,i){var o=_(t),a="string"==typeof t,u=W(t,o),c="string"==typeof t&&D(u,"a")||"string"!=typeof t&&D(t,"a"),s=M(u.r,u.g,u.b,u.a);c||delete s.a;var d=i?s.l/(e+1):(100-s.l)/(e+1),l=Array(e).fill(null).map((function(t,e){return r(r({},s),{l:s.l+d*(e+1)*(1-2*+i)})}));switch(o){case n.HEX:default:return l.map((function(t){var e=H(t.h,t.s,t.l);return c&&(e.a=t.a),a?c?x.HEX(r(r({},e),{a:j(255*e.a,6)})):x.HEX(e):c?Z.HEXA(e):Z.HEX(e)}));case n.RGB:return l.map((function(t){var r=H(t.h,t.s,t.l);return c&&(r.a=t.a),a?x.RGB(r):c?Z.RGBA(r):Z.RGB(r)}));case n.HSL:return l.map((function(t){return a?x.HSL(t):c?Z.HSLA(r(r({},H(t.h,t.s,t.l)),{a:t.a})):Z.HSL(H(t.h,t.s,t.l))}))}},rt=((h={buildHarmony:function(t,r,e){var i=_(t),o=W(t,i),a=M(o.r,o.g,o.b,o.a),u="string"==typeof t&&D(o,"a")||"string"!=typeof t&&D(t,"a"),c="string"==typeof t;switch(i){case n.HEX:default:return u?this.HEXA(a,r,e,c):this.HEX(a,r,e,c);case n.HSL:return u?this.HSLA(a,r,e,c):this.HSL(a,r,e,c);case n.RGB:return u?this.RGBA(a,r,e,c):this.RGB(a,r,e,c)}}})[n.HEX]=function(t,r,e,n){return r(t,e).map((function(t){return n?x.HEX(H(t.h,t.s,t.l)):Z.HEX(H(t.h,t.s,t.l))}))},h.HEXA=function(t,e,n,i){return e(t,n).map((function(t){return i?x.HEX(r(r({},H(t.h,t.s,t.l)),{a:255*K(t.a)})):Z.HEXA(r(r({},H(t.h,t.s,t.l)),{a:K(t.a)}))}))},h[n.RGB]=function(t,r,e,n){return r(t,e).map((function(t){return n?x.RGB(H(t.h,t.s,t.l)):Z.RGB(H(t.h,t.s,t.l))}))},h.RGBA=function(t,e,n,i){return e(t,n).map((function(t){return i?x.RGB(r(r({},H(t.h,t.s,t.l)),{a:K(t.a)})):Z.RGBA(r(r({},H(t.h,t.s,t.l)),{a:K(t.a)}))}))},h[n.HSL]=function(t,r,e,n){return r(t,e).map((function(t){return n?x.HSL({h:t.h,s:t.s,l:t.l}):Z.HSL(H(t.h,t.s,t.l))}))},h.HSLA=function(t,e,n,i){return e(t,n).map((function(t){return i?x.HSL(r(r({},t),{a:K(t.a)})):Z.HSLA(r(r({},H(t.h,t.s,t.l)),{a:K(t.a)}))}))},h),et=((f={mix:function(e,n){var i,o,a,u,c,s,d,l,h,f,g,p,b,F,y,m=e.map((function(t){var r=_(t);return W(t,r)})),A=n===t.Mix.SUBTRACTIVE?m.map((function(t){var r,e,n,i,o,a,u,c,s,d,l,h,f,g,p=(r=t.r,e=t.g,n=t.b,i=Math.min(r,e,n),o=Math.min(255-r,255-e,255-n),a=r-i,u=e-i,c=n-i,s=Math.min(a,u),d=a-s,l=(u+s)/2,h=(c+u-s)/2,f=Math.max(d,l,h)/Math.max(a,u,c),g=isNaN(f)||f===1/0||f<=0?1:f,{r:d/g+o,y:l/g+o,b:h/g+o});return D(t,"a")&&(p.a=t.a),p})):null;function E(e){var i=n===t.Mix.ADDITIVE?{r:0,g:0,b:0,a:0}:{r:0,y:0,b:0,a:0};return e.reduce((function(e,i){var o=D(i,"a")?i.a:1,a={r:Math.min(e.r+i.r*o,255),b:Math.min(e.b+i.b*o,255),a:1-(1-o)*(1-e.a)},u="g"in e?e.g:e.y,c="g"in i?i.g:i.y;return r(r({},a),n===t.Mix.ADDITIVE?{g:Math.min(u+c*o,255)}:{y:Math.min(u+c*o,255)})}),i)}if(n===t.Mix.ADDITIVE)i=E(m);else{var H=E(A);o=H.r,a=H.y,u=H.b,c=Math.min(o,a,u),s=Math.min(255-o,255-a,255-u),d=o-c,l=a-c,h=u-c,f=Math.min(l,h),g=d+l-f,p=l+f,b=2*(h-f),F=Math.max(g,p,b)/Math.max(d,l,h),y=isNaN(F)||F===1/0||F<=0?1:F,(i={r:g/y+s,g:p/y+s,b:b/y+s}).a=H.a}return{r:j(i.r,2),g:j(i.g,2),b:j(i.b,2),a:Y(i.a,0,1)}}})[n.HEX]=function(t,r,e){var n=this.mix(t,r);return delete n.a,e?x.HEX(n):Z.HEX(n)},f.HEXA=function(t,r,e){var n=this.mix(t,r);return n.a=e?255*K(n.a):K(n.a),e?x.HEX(n):Z.HEXA(n)},f[n.RGB]=function(t,r,e){var n=this.mix(t,r);return delete n.a,e?x.RGB(n):Z.RGB(n)},f.RGBA=function(t,r,e){var n=this.mix(t,r);return e?x.RGB(n):Z.RGBA(n)},f[n.HSL]=function(t,r,e){var n=this.mix(t,r),i=M(n.r,n.g,n.b);return delete n.a,delete i.a,e?x.HSL(i):Z.HSL(n)},f.HSLA=function(t,r,e){var n=this.mix(t,r),i=M(n.r,n.g,n.b,n.a);return e?x.HSL(i):Z.HSLA(n)},f),nt=function(t,r,e,n,i){var o=n(W(t,r));return e?i(o):o},it=function(t,r,e,n,i,o){e<1&&(e=5);var a=function(t,r,e){var n=e-1,i=(r.r-t.r)/n,o=(r.g-t.g)/n,a=(r.b-t.b)/n,u=K(t.a),c=(K(r.a)-u)/n;return Array(e).fill(null).map((function(e,s){return 0===s?t:s===n?r:{r:j(t.r+i*s),g:j(t.g+o*s),b:j(t.b+a*s),a:j(u+c*s,2)}}))}(W(t),W(r),e);return a.map((function(t){var r=i(t);return n?o(r):r}))},ot=function(){function e(t){this.rgb=W(t),this.updateHSL(),this.updateCMYK()}return e.prototype.updateRGB=function(){this.rgb=r(r({},H(this.hsl.h,this.hsl.s,this.hsl.l)),{a:this.hsl.a})},e.prototype.updateRGBFromCMYK=function(){this.rgb=r(r({},v(this.cmyk.c,this.cmyk.m,this.cmyk.y,this.cmyk.k)),{a:this.rgb.a})},e.prototype.updateHSL=function(){this.hsl=M(this.rgb.r,this.rgb.g,this.rgb.b,this.rgb.a)},e.prototype.updateCMYK=function(){this.cmyk=B(this.rgb.r,this.rgb.g,this.rgb.b)},e.prototype.updateRGBAndCMYK=function(){return this.updateRGB(),this.updateCMYK(),this},e.prototype.updateHSLAndCMYK=function(){return this.updateHSL(),this.updateCMYK(),this},e.prototype.updateRGBAndHSL=function(){return this.updateRGBFromCMYK(),this.updateHSL(),this},e.prototype.setH=function(t){return this.hsl.h=T(t),this.updateRGBAndCMYK()},e.prototype.setS=function(t){return this.hsl.s=Y(t,0,100),this.updateRGBAndCMYK()},e.prototype.setL=function(t){return this.hsl.l=Y(t,0,100),this.updateRGBAndCMYK()},e.prototype.setR=function(t){return this.rgb.r=Y(t,0,255),this.updateHSLAndCMYK()},e.prototype.setG=function(t){return this.rgb.g=Y(t,0,255),this.updateHSLAndCMYK()},e.prototype.setB=function(t){return this.rgb.b=Y(t,0,255),this.updateHSLAndCMYK()},e.prototype.setA=function(t){return this.hsl.a=this.rgb.a=Y(t,0,1),this},e.prototype.setC=function(t){return this.cmyk.c=Y(t,0,100),this.updateRGBAndHSL()},e.prototype.setM=function(t){return this.cmyk.m=Y(t,0,100),this.updateRGBAndHSL()},e.prototype.setY=function(t){return this.cmyk.y=Y(t,0,100),this.updateRGBAndHSL()},e.prototype.setK=function(t){return this.cmyk.k=Y(t,0,100),this.updateRGBAndHSL()},Object.defineProperty(e.prototype,"H",{get:function(){return j(this.hsl.h)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"S",{get:function(){return j(this.hsl.s)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"L",{get:function(){return j(this.hsl.l)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"R",{get:function(){return j(this.rgb.r)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"G",{get:function(){return j(this.rgb.g)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"B",{get:function(){return j(this.rgb.b)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"A",{get:function(){return j(this.hsl.a,2)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"C",{get:function(){return j(this.cmyk.c)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"M",{get:function(){return j(this.cmyk.m)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"Y",{get:function(){return j(this.cmyk.y)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"K",{get:function(){return j(this.cmyk.k)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"HEXObject",{get:function(){return Z.HEX(this.rgb)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"HEXAObject",{get:function(){return Z.HEXA(this.rgb)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"RGBObject",{get:function(){return{r:this.R,g:this.G,b:this.B}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"RGBAObject",{get:function(){return r(r({},this.RGBObject),{a:this.hsl.a})},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"HSLObject",{get:function(){return{h:this.H,s:this.S,l:this.L}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"HSLAObject",{get:function(){return r(r({},this.HSLObject),{a:this.hsl.a})},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"CMYKObject",{get:function(){return{c:this.C,m:this.M,y:this.Y,k:this.K}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"CMYKAObject",{get:function(){return{c:this.C,m:this.M,y:this.Y,k:this.K,a:this.hsl.a}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"HEX",{get:function(){var t=this.rgb,r={r:t.r,g:t.g,b:t.b};return x.HEX(r)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"HEXA",{get:function(){var t=this.rgb,r={r:t.r,g:t.g,b:t.b,a:255*this.hsl.a};return x.HEX(r)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"RGB",{get:function(){var t=this.rgb,r={r:t.r,g:t.g,b:t.b};return x.RGB(r)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"RGBA",{get:function(){var t=this.rgb,r={r:t.r,g:t.g,b:t.b,a:this.hsl.a};return x.RGB(r)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"HSL",{get:function(){var t=this.hsl,r={h:t.h,s:t.s,l:t.l};return x.HSL(r)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"HSLA",{get:function(){return x.HSL(this.hsl)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"CMYK",{get:function(){return x.CMYK(this.cmyk)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"CMYKA",{get:function(){return x.CMYK(r(r({},this.cmyk),{a:this.hsl.a}))},enumerable:!1,configurable:!0}),e.toHEX=function(t,r){void 0===r&&(r=!0);var e=_(t);return nt(t,e,r,Z.HEX,x.HEX)},e.toHEXA=function(t,r){void 0===r&&(r=!0);var e=_(t);return nt(t,e,r,Z.HEXA,x.HEX)},e.toRGB=function(t,r){void 0===r&&(r=!0);var e=_(t);return nt(t,e,r,Z.RGB,x.RGB)},e.toRGBA=function(t,r){void 0===r&&(r=!0);var e=_(t);return nt(t,e,r,Z.RGBA,x.RGB)},e.toHSL=function(t,r){void 0===r&&(r=!0);var e=_(t);return nt(t,e,r,Z.HSL,x.HSL)},e.toHSLA=function(t,r){void 0===r&&(r=!0);var e=_(t);return nt(t,e,r,Z.HSLA,x.HSL)},e.toCMYK=function(t,r){void 0===r&&(r=!0);var e=_(t);return nt(t,e,r,Z.CMYK,x.CMYK)},e.toCMYKA=function(t,r){void 0===r&&(r=!0);var e=_(t);return nt(t,e,r,Z.CMYKA,x.CMYK)},e.getBlendHEX=function(t,r,e,n){return void 0===e&&(e=5),void 0===n&&(n=!0),it(t,r,e,n,Z.HEX,x.HEX)},e.getBlendHEXA=function(t,r,e,n){return void 0===e&&(e=5),void 0===n&&(n=!0),it(t,r,e,n,Z.HEXA,x.HEX)},e.getBlendRGB=function(t,r,e,n){return void 0===e&&(e=5),void 0===n&&(n=!0),it(t,r,e,n,Z.RGB,x.RGB)},e.getBlendRGBA=function(t,r,e,n){return void 0===e&&(e=5),void 0===n&&(n=!0),it(t,r,e,n,Z.RGBA,x.RGB)},e.getBlendHSL=function(t,r,e,n){return void 0===e&&(e=5),void 0===n&&(n=!0),it(t,r,e,n,Z.HSL,x.HSL)},e.getBlendHSLA=function(t,r,e,n){return void 0===e&&(e=5),void 0===n&&(n=!0),it(t,r,e,n,Z.HSLA,x.HSL)},e.getMixHEX=function(r,e,n){return void 0===e&&(e=t.Mix.ADDITIVE),void 0===n&&(n=!0),et.HEX(r,e,n)},e.getMixHEXA=function(r,e,n){return void 0===e&&(e=t.Mix.ADDITIVE),void 0===n&&(n=!0),et.HEXA(r,e,n)},e.getMixRGB=function(r,e,n){return void 0===e&&(e=t.Mix.ADDITIVE),void 0===n&&(n=!0),et.RGB(r,e,n)},e.getMixRGBA=function(r,e,n){return void 0===e&&(e=t.Mix.ADDITIVE),void 0===n&&(n=!0),et.RGBA(r,e,n)},e.getMixHSL=function(r,e,n){return void 0===e&&(e=t.Mix.ADDITIVE),void 0===n&&(n=!0),et.HSL(r,e,n)},e.getMixHSLA=function(r,e,n){return void 0===e&&(e=t.Mix.ADDITIVE),void 0===n&&(n=!0),et.HSLA(r,e,n)},e.getShades=function(t,r){return tt(t,r,!0)},e.getTints=function(t,r){return tt(t,r,!1)},e.getHarmony=function(r,e,n){switch(void 0===e&&(e=t.Harmony.COMPLEMENTARY),void 0===n&&(n=t.Mix.ADDITIVE),e){case t.Harmony.ANALOGOUS:return rt.buildHarmony(r,w,n);case t.Harmony.SPLIT_COMPLEMENTARY:return rt.buildHarmony(r,V,n);case t.Harmony.TRIADIC:return rt.buildHarmony(r,U,n);case t.Harmony.TETRADIC:return rt.buildHarmony(r,$,n);case t.Harmony.SQUARE:return rt.buildHarmony(r,q,n);default:return rt.buildHarmony(r,N,n)}},e}();return t.ColorTranslator=ot,t}({});
