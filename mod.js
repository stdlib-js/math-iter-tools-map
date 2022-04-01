// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,i=Object.prototype,o=i.toString,a=i.__defineGetter__,u=i.__defineSetter__,c=i.__lookupGetter__,f=i.__lookupSetter__;var s=function(r,e,t){var n,s,l,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((s="value"in t)&&(c.call(r,e)||f.call(r,e)?(n=r.__proto__,r.__proto__=i,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),l="get"in t,v="set"in t,s&&(l||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&a&&a.call(r,e,t.get),v&&u&&u.call(r,e,t.set),r},l=n,v=s,p=t()?l:v;var g=function(r,e,t){p(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},d=g,m=/./;var b=function(r){return"boolean"==typeof r};var h=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var y=function(){return h&&"symbol"==typeof Symbol.toStringTag},w=Object.prototype.toString,j=w;var E=function(r){return j.call(r)},P=Object.prototype.hasOwnProperty;var _=function(r,e){return null!=r&&P.call(r,e)},O="function"==typeof Symbol?Symbol.toStringTag:"",T=_,S=O,x=w;var V=E,k=function(r){var e,t,n;if(null==r)return x.call(r);t=r[S],e=T(r,S);try{r[S]=void 0}catch(e){return x.call(r)}return n=x.call(r),e?r[S]=t:delete r[S],n},I=y()?k:V,A=Boolean.prototype.toString;var F=I,R=function(r){try{return A.call(r),!0}catch(r){return!1}},$=y();var M=function(r){return"object"==typeof r&&(r instanceof Boolean||($?R(r):"[object Boolean]"===F(r)))},N=b,C=M;var B=d,G=function(r){return N(r)||C(r)},L=M;B(G,"isPrimitive",b),B(G,"isObject",L);var Z="object"==typeof self?self:null,W="object"==typeof window?window:null,X=G.isPrimitive,z=function(){return new Function("return this;")()},U=Z,Y=W,D=r(Object.freeze({__proto__:null}));var q=function(r){if(arguments.length){if(!X(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return z()}if(U)return U;if(Y)return Y;if(D)return D;throw new Error("unexpected error. Unable to resolve global object.")},H=q(),J=H.document&&H.document.childNodes,K=Int8Array,Q=m,rr=J,er=K;var tr=function(){return"function"==typeof Q||"object"==typeof er||"function"==typeof rr};var nr=function(){return/^\s*function\s*([^(]*)/i},ir=nr;d(ir,"REGEXP",nr());var or=ir,ar=I;var ur=Array.isArray?Array.isArray:function(r){return"[object Array]"===ar(r)},cr=ur;var fr=function(r){return null!==r&&"object"==typeof r};d(fr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!cr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(fr));var sr=fr;var lr=I,vr=or.REGEXP,pr=function(r){return sr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var gr=function(r){var e,t,n;if(("Object"===(t=lr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=vr.exec(n.toString()))return e[1]}return pr(r)?"Buffer":t},dr=gr;var mr=gr;var br=function(r){var e;return null===r?"null":"object"===(e=typeof r)?dr(r).toLowerCase():e},hr=function(r){return mr(r).toLowerCase()},yr=tr()?hr:br;var wr=function(r){return"function"===yr(r)},jr=wr;var Er=function(r){var e=typeof r;return null!==r&&("object"===e||"function"===e)&&jr(r.next)};var Pr=function(r){return"number"==typeof r},_r=Number,Or=_r.prototype.toString;var Tr=I,Sr=_r,xr=function(r){try{return Or.call(r),!0}catch(r){return!1}},Vr=y();var kr=function(r){return"object"==typeof r&&(r instanceof Sr||(Vr?xr(r):"[object Number]"===Tr(r)))},Ir=Pr,Ar=kr;var Fr=d,Rr=function(r){return Ir(r)||Ar(r)},$r=kr;Fr(Rr,"isPrimitive",Pr),Fr(Rr,"isObject",$r);var Mr=Rr,Nr=_;var Cr=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&Nr(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null;var Br=function(r){return"string"==typeof r},Gr=String.prototype.valueOf;var Lr=I,Zr=function(r){try{return Gr.call(r),!0}catch(r){return!1}},Wr=y();var Xr=function(r){return"object"==typeof r&&(r instanceof String||(Wr?Zr(r):"[object String]"===Lr(r)))},zr=Br,Ur=Xr;var Yr=d,Dr=function(r){return zr(r)||Ur(r)},qr=Xr;Yr(Dr,"isPrimitive",Br),Yr(Dr,"isObject",qr);var Hr=Dr,Jr=Math.floor;var Kr=function(r){return Jr(r)===r},Qr=Kr;var re=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Qr(r.length)&&r.length>=0&&r.length<=9007199254740991},ee=Number.POSITIVE_INFINITY,te=_r.NEGATIVE_INFINITY,ne=ee,ie=te,oe=Kr;var ae=function(r){return r<ne&&r>ie&&oe(r)},ue=Mr.isPrimitive,ce=ae;var fe=function(r){return ue(r)&&ce(r)},se=Mr.isObject,le=ae;var ve=function(r){return se(r)&&le(r.valueOf())},pe=fe,ge=ve;var de=d,me=function(r){return pe(r)||ge(r)},be=ve;de(me,"isPrimitive",fe),de(me,"isObject",be);var he=me;var ye=function(r){return r!=r},we=Mr.isPrimitive,je=ye;var Ee=function(r){return we(r)&&je(r)},Pe=Mr.isObject,_e=ye;var Oe=function(r){return Pe(r)&&_e(r.valueOf())},Te=Ee,Se=Oe;var xe=d,Ve=function(r){return Te(r)||Se(r)},ke=Oe;xe(Ve,"isPrimitive",Ee),xe(Ve,"isObject",ke);var Ie=re,Ae=he.isPrimitive,Fe=Hr.isPrimitive,Re=Ve.isPrimitive;var $e=function(r,e,t){var n,i,o;if(!Ie(r)&&!Fe(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!Ae(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(Fe(r)){if(!Fe(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,Re(e)){for(o=i;o<n;o++)if(Re(r[o]))return!0;return!1}for(o=i;o<n;o++)if(r[o]===e)return!0;return!1},Me=Hr.isPrimitive;var Ne=function(r){if(!Me(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},Ce=Hr.isPrimitive;var Be=function(r){if(!Ce(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},Ge=Ne,Le=Be,Ze=Hr.isPrimitive;var We=function(r){return Ze(r)&&r===Le(r)&&r!==Ge(r)},Xe=ee,ze=te;var Ue=function(r){return r==r&&r>ze&&r<Xe},Ye=he.isPrimitive;var De=function(r){return Ye(r)&&r>=0},qe=he.isObject;var He=function(r){return qe(r)&&r.valueOf()>=0},Je=De,Ke=He;var Qe=d,rt=function(r){return Je(r)||Ke(r)},et=He;Qe(rt,"isPrimitive",De),Qe(rt,"isObject",et);var tt=rt.isPrimitive,nt=Hr.isPrimitive;var it=function(r,e){var t,n;if(!nt(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!tt(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},ot=he.isPrimitive,at=Hr.isPrimitive;var ut=it,ct=function(r,e,t){var n,i;if(!at(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!at(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!ot(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0};var ft=function(r,e,t){var n=!1,i=e-r.length;return i<0||(ct(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+ut("0",i):ut("0",i)+r,n&&(r="-"+r)),r},st=We,lt=Be,vt=Ne,pt=Ue,gt=Mr.isPrimitive,dt=ft;var mt=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!pt(n)){if(!gt(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=dt(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=dt(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=st(r.specifier)?lt(t):vt(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},bt=Hr.isPrimitive,ht=/[-\/\\^$*+?.()|[\]{}]/g;var yt=function(r){var e,t;if(!bt(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(ht,"\\$&"):(e=(e=r.substring(1,t)).replace(ht,"\\$&"),r=r[0]+e+r.substring(t))},wt=RegExp.prototype.exec;var jt=I,Et=function(r){try{return wt.call(r),!0}catch(r){return!1}},Pt=y();var _t=yt,Ot=wr,Tt=Hr.isPrimitive,St=function(r){return"object"==typeof r&&(r instanceof RegExp||(Pt?Et(r):"[object RegExp]"===jt(r)))};var xt=We,Vt=Be,kt=Ne,It=function(r,e,t){if(!Tt(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(Tt(e))e=_t(e),e=new RegExp(e,"g");else if(!St(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!Tt(t)&&!Ot(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},At=Ue,Ft=Mr.isPrimitive,Rt=function(r){return Math.abs(r)},$t=/e\+(\d)$/,Mt=/e-(\d)$/,Nt=/^(\d+)$/,Ct=/^(\d+)e/,Bt=/\.0$/,Gt=/\.0*e/,Lt=/(\..*[^0])0*e/;var Zt=function(r){var e,t,n=parseFloat(r.arg);if(!At(n)){if(!Ft(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Rt(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=It(t,Lt,"$1e"),t=It(t,Gt,"e"),t=It(t,Bt,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=It(t,$t,"e+0$1"),t=It(t,Mt,"e-0$1"),r.alternate&&(t=It(t,Nt,"$1."),t=It(t,Ct,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=xt(r.specifier)?Vt(t):kt(t)},Wt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var Xt=it;var zt=Hr.isPrimitive,Ut=$e,Yt=ye,Dt=mt,qt=Zt,Ht=function(r){var e,t,n,i,o;for(e=0,n=[],o=Wt.exec(r);o;)(t=r.slice(e,Wt.lastIndex-o[0].length)).length&&n.push(t),(i=a(o,n.length))&&n.push(i),e=Wt.lastIndex,o=Wt.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function a(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},Jt=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Xt(" ",n):Xt(" ",n)+r},Kt=ft,Qt=String.fromCharCode;var rn=function(r){var e,t,n,i,o,a,u,c,f;if(!zt(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=Ht(r),a="",u=1,c=0;c<e.length;c++)if(n=e[c],zt(n))a+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!Ut(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Yt(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,Yt(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=Dt(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!Yt(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Yt(o)?String(n.arg):Qt(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=qt(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Kt(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Jt(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a},en=ur;var tn=function(r){return"object"==typeof r&&null!==r&&!en(r)},nn=Object.getPrototypeOf;var on=function(r){return r.__proto__},an=I,un=on;var cn=function(r){var e=un(r);return e||null===e?e:"[object Function]"===an(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},fn=nn,sn=cn,ln=wr(Object.getPrototypeOf)?fn:sn;var vn=tn,pn=wr,gn=function(r){return null==r?null:(r=Object(r),ln(r))},dn=_,mn=I,bn=Object.prototype;var hn=function(r){var e;return!!vn(r)&&(!(e=gn(r))||!dn(r,"constructor")&&dn(e,"constructor")&&pn(e.constructor)&&"[object Function]"===mn(e.constructor)&&dn(e,"isPrototypeOf")&&pn(e.isPrototypeOf)&&(e===bn||function(r){var e;for(e in r)if(!dn(r,e))return!1;return!0}(r)))},yn=hn,wn=_,jn=rn;var En=d,Pn=wr,_n=Er,On=Mr.isPrimitive,Tn=Cr,Sn=rn,xn=function(r,e){return yn(e)?(wn(e,"invalid")&&(r.invalid=e.invalid),null):new TypeError(jn("invalid argument. Options argument must be an object. Value: `%s`.",e))};var Vn=function r(e,t,n){var i,o,a,u;if(!_n(e))throw new TypeError(Sn("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",e));if(!Pn(t))throw new TypeError(Sn("invalid argument. Second argument must be a function. Value: `%s`.",t));if(i={invalid:NaN},arguments.length>2&&(a=xn(i,n)))throw a;return En(o={},"next",c),En(o,"return",f),Tn&&Pn(e[Tn])&&En(o,Tn,s),o;function c(){var r;return u?{done:!0}:(r=e.next()).done?(u=!0,r):{value:On(r.value)?t(r.value):i.invalid,done:!1}}function f(r){return u=!0,arguments.length?{value:r,done:!0}:{done:!0}}function s(){return r(e[Tn](),t,i)}},kn=Vn;export{kn as default};
//# sourceMappingURL=mod.js.map
