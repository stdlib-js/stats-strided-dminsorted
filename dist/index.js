"use strict";var n=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var u=n(function(b,d){
var v=require('@stdlib/math-base-assert-is-nan/dist'),o=require('@stdlib/math-base-assert-is-negative-zero/dist');function y(e,r,i,s){var t,a;return e<=0?NaN:e===1||i===0?r[0]:(t=r[s],a=r[s+(e-1)*i],v(t)||v(a)?NaN:t===a?o(t)||o(a)?-0:t:t<a?t:a)}d.exports=y
});var q=n(function(h,f){
var x=require('@stdlib/strided-base-stride2offset/dist'),N=u();function g(e,r,i){return N(e,r,i,x(e,i))}f.exports=g
});var p=n(function(j,m){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=q(),O=u();l(c,"ndarray",O);m.exports=c
});var R=p();module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
