"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var m=s(function(V,d){
var x=require('@stdlib/assert-is-plain-object/dist'),y=require('@stdlib/assert-has-own-property/dist'),O=require('@stdlib/error-tools-fmtprodmsg/dist');function j(e,r){return x(r)?(y(r,"invalid")&&(e.invalid=r.invalid),null):new TypeError(O('0e12V',r));}d.exports=j
});var p=s(function(L,g){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),f=require('@stdlib/assert-is-function/dist'),E=require('@stdlib/assert-is-iterator-like/dist'),F=require('@stdlib/assert-is-number/dist').isPrimitive,a=require('@stdlib/symbol-iterator/dist'),c=require('@stdlib/error-tools-fmtprodmsg/dist'),N=m();function q(e,r,u){var n,i,v,o;if(!E(e))throw new TypeError(c('0e146',e));if(!f(r))throw new TypeError(c('0e12H',r));if(n={invalid:NaN},arguments.length>2&&(v=N(n,u),v))throw v;return i={},l(i,"next",b),l(i,"return",w),a&&f(e[a])&&l(i,a,h),i;function b(){var t;return o?{done:!0}:(t=e.next(),t.done?(o=!0,t):{value:F(t.value)?r(t.value):n.invalid,done:!1})}function w(t){return o=!0,arguments.length?{value:t,done:!0}:{done:!0}}function h(){return q(e[a](),r,n)}}g.exports=q
});var P=p();module.exports=P;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
