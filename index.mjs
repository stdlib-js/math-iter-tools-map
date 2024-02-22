// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@v0.2.1-esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";function l(m,v,p){var a,j,u,f;if(!r(m))throw new TypeError(i("0e146",m));if(!t(v))throw new TypeError(i("0e12H",v));if(a={invalid:NaN},arguments.length>2&&(u=function(e,t){return o(t)?(d(t,"invalid")&&(e.invalid=t.invalid),null):new TypeError(i("0e12V",t))}(a,p),u))throw u;return e(j={},"next",(function(){var e;if(f)return{done:!0};if((e=m.next()).done)return f=!0,e;return{value:n(e.value)?v(e.value):a.invalid,done:!1}})),e(j,"return",(function(e){if(f=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),s&&t(m[s])&&e(j,s,(function(){return l(m[s](),v,a)})),j}export{l as default};
//# sourceMappingURL=index.mjs.map
