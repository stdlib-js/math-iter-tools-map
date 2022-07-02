// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";function l(e,t){return o(t)?(d(t,"invalid")&&(e.invalid=t.invalid),null):new TypeError(i("0Jv2h",t))}function m(o,d,p){var a,j,h,v;if(!r(o))throw new TypeError(i("0Jv4J",o));if(!t(d))throw new TypeError(i("0Jv2S",d));if(a={invalid:NaN},arguments.length>2&&(h=l(a,p)))throw h;return e(j={},"next",u),e(j,"return",f),s&&t(o[s])&&e(j,s,c),j;function u(){var e;return v?{done:!0}:(e=o.next()).done?(v=!0,e):{value:n(e.value)?d(e.value):a.invalid,done:!1}}function f(e){return v=!0,arguments.length?{value:e,done:!0}:{done:!0}}function c(){return m(o[s](),d,a)}}export{m as default};
//# sourceMappingURL=index.mjs.map
