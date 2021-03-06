/**
 * skylark-langx-maths - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx-ns","skylark-langx-types"],function(n,t){for(var r=[],o=0;o<256;o++)r[o]=(o<16?"0":"")+o.toString(16);var e={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,clamp:function(n,t,r){return Math.max(t,Math.min(r,n))},euclideanModulo:function(n,t){return(n%t+t)%t},mapLinear:function(n,t,r,o,e){return o+(n-t)*(e-o)/(r-t)},lerp:function(n,t,r){return(1-r)*n+r*t},smoothstep:function(n,t,r){return n<=t?0:n>=r?1:(n=(n-t)/(r-t))*n*(3-2*n)},smootherstep:function(n,t,r){return n<=t?0:n>=r?1:(n=(n-t)/(r-t))*n*n*(n*(6*n-15)+10)},randInt:function(n,t){return n+Math.floor(Math.random()*(t-n+1))},randFloat:function(n,t){return n+Math.random()*(t-n)},randFloatSpread:function(n){return n*(.5-Math.random())},degToRad:function(n){return n*e.DEG2RAD},radToDeg:function(n){return n*e.RAD2DEG},isPowerOfTwo:function(n){return 0==(n&n-1)&&0!==n},ceilPowerOfTwo:function(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))},floorPowerOfTwo:function(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))},setQuaternionFromProperEuler:function(n,t,r,o,e){var a=Math.cos,u=Math.sin,i=a(r/2),c=u(r/2),f=a((t+o)/2),h=u((t+o)/2),l=a((t-o)/2),s=u((t-o)/2),M=a((o-t)/2),d=u((o-t)/2);"XYX"===e?n.set(i*h,c*l,c*s,i*f):"YZY"===e?n.set(c*s,i*h,c*l,i*f):"ZXZ"===e?n.set(c*l,c*s,i*h,i*f):"XZX"===e?n.set(i*h,c*d,c*M,i*f):"YXY"===e?n.set(c*M,i*h,c*d,i*f):"ZYZ"===e?n.set(c*d,c*M,i*h,i*f):console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order.")}};return n.attach("langx.maths",e)});
//# sourceMappingURL=sourcemaps/maths.js.map
