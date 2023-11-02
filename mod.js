// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(r){return"string"==typeof r}var l=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,y=/^(\d+)$/,b=/^(\d+)e/,v=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":l(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,h,"e"),n=p.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),r.alternate&&(n=p.call(n,y,"$1."),n=p.call(n,b,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):f.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function _(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var E=String.fromCharCode,S=isNaN,x=Array.isArray;function O(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function k(r){var e,t,n,i,a,l,f,s,p;if(!x(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",f=1,s=0;s<r.length;s++)if(u(n=r[s]))l+=n;else{if(e=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,S(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!S(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),l+=n.arg||"",f+=1}return l}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function V(r){var e,t,n,o;for(t=[],o=0,n=T.exec(r);n;)(e=r.slice(o,T.lastIndex-n[0].length)).length&&t.push(e),t.push(A(n)),o=T.lastIndex,n=T.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function F(r){return"string"==typeof r}function P(r){var e,t,n;if(!F(r))throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=V(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var C,I=Object.prototype,$=I.toString,R=I.__defineGetter__,B=I.__defineSetter__,G=I.__lookupGetter__,N=I.__lookupSetter__;C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===$.call(r))throw new TypeError(P("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(P("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(G.call(r,e)||N.call(r,e)?(n=r.__proto__,r.__proto__=I,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&R&&R.call(r,e,t.get),a&&B&&B.call(r,e,t.set),r};var L=C;function Z(r,e,t){L(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var U=/./;function W(r){return"boolean"==typeof r}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return M&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString;var D=Object.prototype.hasOwnProperty;function H(r,e){return null!=r&&D.call(r,e)}var q="function"==typeof Symbol?Symbol:void 0,J="function"==typeof q?q.toStringTag:"";var K=X()?function(r){var e,t,n;if(null==r)return z.call(r);t=r[J],e=H(r,J);try{r[J]=void 0}catch(e){return z.call(r)}return n=z.call(r),e?r[J]=t:delete r[J],n}:function(r){return z.call(r)},Q=Boolean,Y=Boolean.prototype.toString;var rr=X();function er(r){return"object"==typeof r&&(r instanceof Q||(rr?function(r){try{return Y.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===K(r)))}function tr(r){return W(r)||er(r)}function nr(){return new Function("return this;")()}Z(tr,"isPrimitive",W),Z(tr,"isObject",er);var or="object"==typeof self?self:null,ir="object"==typeof window?window:null,ar="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},cr="object"==typeof ar?ar:null,ur="object"==typeof globalThis?globalThis:null;var lr=function(r){if(arguments.length){if(!W(r))throw new TypeError(P("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return nr()}if(ur)return ur;if(or)return or;if(ir)return ir;if(cr)return cr;throw new Error("unexpected error. Unable to resolve global object.")}(),fr=lr.document&&lr.document.childNodes,sr=Int8Array;function pr(){return/^\s*function\s*([^(]*)/i}var gr=/^\s*function\s*([^(]*)/i;Z(pr,"REGEXP",gr);var dr=Array.isArray?Array.isArray:function(r){return"[object Array]"===K(r)};function yr(r){return null!==r&&"object"==typeof r}function br(r){var e,t,n,o;if(("Object"===(t=K(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=gr.exec(n.toString()))return e[1]}return yr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}Z(yr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(P("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!dr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(yr));var vr="function"==typeof U||"object"==typeof sr||"function"==typeof fr?function(r){return br(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?br(r).toLowerCase():e};function hr(r){return"function"===vr(r)}function wr(r){var e=typeof r;return null!==r&&("object"===e||"function"===e)&&hr(r.next)}function mr(r){return"number"==typeof r}var jr=Number,_r=jr.prototype.toString;var Er=X();function Sr(r){return"object"==typeof r&&(r instanceof jr||(Er?function(r){try{return _r.call(r),!0}catch(r){return!1}}(r):"[object Number]"===K(r)))}function xr(r){return mr(r)||Sr(r)}Z(xr,"isPrimitive",mr),Z(xr,"isObject",Sr);var Or="function"==typeof q&&"symbol"==typeof q("foo")&&H(q,"iterator")&&"symbol"==typeof q.iterator?Symbol.iterator:null;function kr(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}var Tr,Ar=Object,Vr=Object.getPrototypeOf;Tr=hr(Object.getPrototypeOf)?Vr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===K(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Fr=Tr;var Pr=Object.prototype;function Cr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!dr(r)}(r)&&(e=function(r){return null==r?null:(r=Ar(r),Fr(r))}(r),!e||!H(r,"constructor")&&H(e,"constructor")&&hr(e.constructor)&&"[object Function]"===K(e.constructor)&&H(e,"isPrototypeOf")&&hr(e.isPrototypeOf)&&(e===Pr||function(r){var e;for(e in r)if(!H(r,e))return!1;return!0}(r)))}function Ir(r,e){return Cr(e)?(H(e,"invalid")&&(r.invalid=e.invalid),null):new TypeError(kr("0e12V,FD",e))}function $r(r,e,t){var n,o,i,a;if(!wr(r))throw new TypeError(kr("0e146,G5",r));if(!hr(e))throw new TypeError(kr("0e12H,G6",e));if(n={invalid:NaN},arguments.length>2&&(i=Ir(n,t)))throw i;return Z(o={},"next",c),Z(o,"return",u),Or&&hr(r[Or])&&Z(o,Or,l),o;function c(){var t;return a?{done:!0}:(t=r.next()).done?(a=!0,t):{value:mr(t.value)?e(t.value):n.invalid,done:!1}}function u(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){return $r(r[Or](),e,n)}}export{$r as default};
//# sourceMappingURL=mod.js.map
