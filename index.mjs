// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@v0.1.0-esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.0-esm/index.mjs";function l(e,t){return o(t)?(d(t,"invalid")&&(e.invalid=t.invalid),null):new TypeError(i("0e12V,FD",t))}function m(o,d,v){var p,a,j,h;if(!r(o))throw new TypeError(i("0e146,G5",o));if(!t(d))throw new TypeError(i("0e12H,G6",d));if(p={invalid:NaN},arguments.length>2&&(j=l(p,v)))throw j;return e(a={},"next",u),e(a,"return",f),s&&t(o[s])&&e(a,s,c),a;function u(){var e;return h?{done:!0}:(e=o.next()).done?(h=!0,e):{value:n(e.value)?d(e.value):p.invalid,done:!1}}function f(e){return h=!0,arguments.length?{value:e,done:!0}:{done:!0}}function c(){return m(o[s](),d,p)}}export{m as default};
//# sourceMappingURL=index.mjs.map
