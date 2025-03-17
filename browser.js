// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function o(e,r,t){var o=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(o=!0,e=e.substr(1)),e=t?e+n(i):n(i)+e,o&&(e="-"+e)),e}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=o(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=o(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):i.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,y=/^(\d+)e/,b=/\.0$/,h=/\.0*e/,v=/(\..*[^0])0*e/;function w(e){var r,n,o=parseFloat(e.arg);if(!isFinite(o)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);o=e.arg}switch(e.specifier){case"e":case"E":n=o.toExponential(e.precision);break;case"f":case"F":n=o.toFixed(e.precision);break;case"g":case"G":u(o)<1e-4?((r=e.precision)>0&&(r-=1),n=o.toExponential(r)):n=o.toPrecision(e.precision),e.alternate||(n=s.call(n,v,"$1e"),n=s.call(n,h,"e"),n=s.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,g,"e-0$1"),e.alternate&&(n=s.call(n,d,"$1."),n=s.call(n,y,"$1.e")),o>=0&&e.sign&&(n=e.sign+n),n=e.specifier===f.call(e.specifier)?f.call(n):l.call(n)}function m(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var j=String.fromCharCode,_=Array.isArray;function E(e){return e!=e}function S(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function x(e){var r,t,n,i,a,u,l,f,s,p,g,d,y;if(!_(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(u="",l=1,f=0;f<e.length;f++)if("string"==typeof(n=e[f]))u+=n;else{if(r=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,E(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,y=void 0,(y=g-p.length)<0?p:p=d?p+m(y):m(y)+p)),u+=n.arg||"",l+=1}return u}var O=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function T(e){var r,t,n,o;for(t=[],o=0,n=O.exec(e);n;)(r=e.slice(o,O.lastIndex-n[0].length)).length&&t.push(r),t.push(k(n)),o=O.lastIndex,n=O.exec(e);return(r=e.slice(o)).length&&t.push(r),t}function A(e){var r,t;if("string"!=typeof e)throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[T(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return x.apply(null,r)}var V,P=Object.prototype,F=P.toString,C=P.__defineGetter__,I=P.__defineSetter__,$=P.__lookupGetter__,R=P.__lookupSetter__;V=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===F.call(e))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&($.call(e,r)||R.call(e,r)?(n=e.__proto__,e.__proto__=P,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&C&&C.call(e,r,t.get),a&&I&&I.call(e,r,t.set),e};var B=V;function L(e,r,t){B(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var G=/./;function N(e){return"boolean"==typeof e}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return Z&&"symbol"==typeof Symbol.toStringTag}var U=Object.prototype.toString,W=Object.prototype.hasOwnProperty;function X(e,r){return null!=e&&W.call(e,r)}var z="function"==typeof Symbol?Symbol:void 0,H="function"==typeof z?z.toStringTag:"",q=M()?function(e){var r,t,n;if(null==e)return U.call(e);t=e[H],r=X(e,H);try{e[H]=void 0}catch(r){return U.call(e)}return n=U.call(e),r?e[H]=t:delete e[H],n}:function(e){return U.call(e)},D=Boolean,J=Boolean.prototype.toString,K=M();function Q(e){return"object"==typeof e&&(e instanceof D||(K?function(e){try{return J.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===q(e)))}function Y(e){return N(e)||Q(e)}L(Y,"isPrimitive",N),L(Y,"isObject",Q);var ee="object"==typeof self?self:null,re="object"==typeof window?window:null,te="object"==typeof globalThis?globalThis:null,ne=function(e){if(arguments.length){if(!N(e))throw new TypeError(A("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(te)return te;if(ee)return ee;if(re)return re;throw new Error("unexpected error. Unable to resolve global object.")}(),oe=ne.document&&ne.document.childNodes,ie=Int8Array;function ae(){return/^\s*function\s*([^(]*)/i}var ce=/^\s*function\s*([^(]*)/i;L(ae,"REGEXP",ce);var ue=Array.isArray?Array.isArray:function(e){return"[object Array]"===q(e)};function le(e){return null!==e&&"object"==typeof e}function fe(e){var r,t,n,o;if(("Object"===(t=q(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=ce.exec(n.toString()))return r[1]}return le(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}L(le,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(A("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!ue(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(le));var se="function"==typeof G||"object"==typeof ie||"function"==typeof oe?function(e){return fe(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?fe(e).toLowerCase():r};function pe(e){return"function"===se(e)}function ge(e){return"number"==typeof e}var de=Number,ye=de.prototype.toString,be=M();function he(e){return"object"==typeof e&&(e instanceof de||(be?function(e){try{return ye.call(e),!0}catch(e){return!1}}(e):"[object Number]"===q(e)))}function ve(e){return ge(e)||he(e)}L(ve,"isPrimitive",ge),L(ve,"isObject",he);var we="function"==typeof z&&"symbol"==typeof z("foo")&&X(z,"iterator")&&"symbol"==typeof z.iterator?Symbol.iterator:null;function me(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}var je,_e=Object,Ee=Object.getPrototypeOf;je=pe(Object.getPrototypeOf)?Ee:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===q(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var Se=je,xe=Object.prototype;function Oe(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!ue(e)}(e)&&(r=function(e){return null==e?null:(e=_e(e),Se(e))}(e),!r||!X(e,"constructor")&&X(r,"constructor")&&pe(r.constructor)&&"[object Function]"===q(r.constructor)&&X(r,"isPrototypeOf")&&pe(r.isPrototypeOf)&&(r===xe||function(e){var r;for(r in e)if(!X(e,r))return!1;return!0}(e)))}return function e(r,t,n){var o,i,a,c,u,l;if(l=typeof(u=r),null===u||"object"!==l&&"function"!==l||!pe(u.next))throw new TypeError(me("0e146",r));if(!pe(t))throw new TypeError(me("0e12H",t));if(o={invalid:NaN},arguments.length>2&&(a=function(e,r){return Oe(r)?(X(r,"invalid")&&(e.invalid=r.invalid),null):new TypeError(me("0e12V",r))}(o,n)))throw a;return L(i={},"next",(function(){var e;return c?{done:!0}:(e=r.next()).done?(c=!0,e):{value:ge(e.value)?t(e.value):o.invalid,done:!1}})),L(i,"return",(function(e){return c=!0,arguments.length?{value:e,done:!0}:{done:!0}})),we&&pe(r[we])&&L(i,we,(function(){return e(r[we](),t,o)})),i}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).iterMap=r();
//# sourceMappingURL=browser.js.map
