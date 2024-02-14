"use strict";var l=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var d=l(function(V,s){
var x=require('@stdlib/assert-is-plain-object/dist'),y=require('@stdlib/assert-has-own-property/dist'),O=require('@stdlib/error-tools-fmtprodmsg/dist');function j(e,r){return x(r)?(y(r,"invalid")&&(e.invalid=r.invalid),null):new TypeError(O('0e12V',r));}s.exports=j
});var g=l(function(L,q){
var o=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=require('@stdlib/assert-is-function/dist'),E=require('@stdlib/assert-is-iterator-like/dist'),F=require('@stdlib/assert-is-number/dist').isPrimitive,a=require('@stdlib/symbol-iterator/dist'),f=require('@stdlib/error-tools-fmtprodmsg/dist'),N=d();function c(e,r,p){var n,i,u,v;if(!E(e))throw new TypeError(f('0e146',e));if(!m(r))throw new TypeError(f('0e12H',r));if(n={invalid:NaN},arguments.length>2&&(u=N(n,p),u))throw u;return i={},o(i,"next",b),o(i,"return",w),a&&m(e[a])&&o(i,a,h),i;function b(){var t;return v?{done:!0}:(t=e.next(),t.done?(v=!0,t):{value:F(t.value)?r(t.value):n.invalid,done:!1})}function w(t){return v=!0,arguments.length?{value:t,done:!0}:{done:!0}}function h(){return c(e[a](),r,n)}}q.exports=c
});var P=g();module.exports=P;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
