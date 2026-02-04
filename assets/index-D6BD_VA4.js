(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function D_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var V_={exports:{}},du={},j_={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ta=Symbol.for("react.element"),TT=Symbol.for("react.portal"),IT=Symbol.for("react.fragment"),ST=Symbol.for("react.strict_mode"),AT=Symbol.for("react.profiler"),kT=Symbol.for("react.provider"),CT=Symbol.for("react.context"),RT=Symbol.for("react.forward_ref"),xT=Symbol.for("react.suspense"),PT=Symbol.for("react.memo"),NT=Symbol.for("react.lazy"),Um=Symbol.iterator;function bT(t){return t===null||typeof t!="object"?null:(t=Um&&t[Um]||t["@@iterator"],typeof t=="function"?t:null)}var O_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L_=Object.assign,M_={};function wi(t,e,n){this.props=t,this.context=e,this.refs=M_,this.updater=n||O_}wi.prototype.isReactComponent={};wi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};wi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function F_(){}F_.prototype=wi.prototype;function Bd(t,e,n){this.props=t,this.context=e,this.refs=M_,this.updater=n||O_}var $d=Bd.prototype=new F_;$d.constructor=Bd;L_($d,wi.prototype);$d.isPureReactComponent=!0;var zm=Array.isArray,U_=Object.prototype.hasOwnProperty,Hd={current:null},z_={key:!0,ref:!0,__self:!0,__source:!0};function B_(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)U_.call(e,r)&&!z_.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:ta,type:t,key:i,ref:o,props:s,_owner:Hd.current}}function DT(t,e){return{$$typeof:ta,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function qd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ta}function VT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Bm=/\/+/g;function kc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?VT(""+t.key):e.toString(36)}function tl(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ta:case TT:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+kc(o,0):r,zm(s)?(n="",t!=null&&(n=t.replace(Bm,"$&/")+"/"),tl(s,e,n,"",function(c){return c})):s!=null&&(qd(s)&&(s=DT(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Bm,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",zm(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+kc(i,l);o+=tl(i,e,n,u,s)}else if(u=bT(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+kc(i,l++),o+=tl(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Pa(t,e,n){if(t==null)return t;var r=[],s=0;return tl(t,r,"","",function(i){return e.call(n,i,s++)}),r}function jT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ft={current:null},nl={transition:null},OT={ReactCurrentDispatcher:ft,ReactCurrentBatchConfig:nl,ReactCurrentOwner:Hd};function $_(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:Pa,forEach:function(t,e,n){Pa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Pa(t,function(){e++}),e},toArray:function(t){return Pa(t,function(e){return e})||[]},only:function(t){if(!qd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};te.Component=wi;te.Fragment=IT;te.Profiler=AT;te.PureComponent=Bd;te.StrictMode=ST;te.Suspense=xT;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=OT;te.act=$_;te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=L_({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Hd.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)U_.call(e,u)&&!z_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:ta,type:t.type,key:s,ref:i,props:r,_owner:o}};te.createContext=function(t){return t={$$typeof:CT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:kT,_context:t},t.Consumer=t};te.createElement=B_;te.createFactory=function(t){var e=B_.bind(null,t);return e.type=t,e};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:RT,render:t}};te.isValidElement=qd;te.lazy=function(t){return{$$typeof:NT,_payload:{_status:-1,_result:t},_init:jT}};te.memo=function(t,e){return{$$typeof:PT,type:t,compare:e===void 0?null:e}};te.startTransition=function(t){var e=nl.transition;nl.transition={};try{t()}finally{nl.transition=e}};te.unstable_act=$_;te.useCallback=function(t,e){return ft.current.useCallback(t,e)};te.useContext=function(t){return ft.current.useContext(t)};te.useDebugValue=function(){};te.useDeferredValue=function(t){return ft.current.useDeferredValue(t)};te.useEffect=function(t,e){return ft.current.useEffect(t,e)};te.useId=function(){return ft.current.useId()};te.useImperativeHandle=function(t,e,n){return ft.current.useImperativeHandle(t,e,n)};te.useInsertionEffect=function(t,e){return ft.current.useInsertionEffect(t,e)};te.useLayoutEffect=function(t,e){return ft.current.useLayoutEffect(t,e)};te.useMemo=function(t,e){return ft.current.useMemo(t,e)};te.useReducer=function(t,e,n){return ft.current.useReducer(t,e,n)};te.useRef=function(t){return ft.current.useRef(t)};te.useState=function(t){return ft.current.useState(t)};te.useSyncExternalStore=function(t,e,n){return ft.current.useSyncExternalStore(t,e,n)};te.useTransition=function(){return ft.current.useTransition()};te.version="18.3.1";j_.exports=te;var B=j_.exports;const H_=D_(B);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var LT=B,MT=Symbol.for("react.element"),FT=Symbol.for("react.fragment"),UT=Object.prototype.hasOwnProperty,zT=LT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,BT={key:!0,ref:!0,__self:!0,__source:!0};function q_(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)UT.call(e,r)&&!BT.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:MT,type:t,key:i,ref:o,props:s,_owner:zT.current}}du.Fragment=FT;du.jsx=q_;du.jsxs=q_;V_.exports=du;var d=V_.exports,mh={},W_={exports:{}},Nt={},G_={exports:{}},K_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,Q){var Z=$.length;$.push(Q);e:for(;0<Z;){var ye=Z-1>>>1,Re=$[ye];if(0<s(Re,Q))$[ye]=Q,$[Z]=Re,Z=ye;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var Q=$[0],Z=$.pop();if(Z!==Q){$[0]=Z;e:for(var ye=0,Re=$.length,Ur=Re>>>1;ye<Ur;){var Dt=2*(ye+1)-1,zr=$[Dt],$t=Dt+1,Hn=$[$t];if(0>s(zr,Z))$t<Re&&0>s(Hn,zr)?($[ye]=Hn,$[$t]=Z,ye=$t):($[ye]=zr,$[Dt]=Z,ye=Dt);else if($t<Re&&0>s(Hn,Z))$[ye]=Hn,$[$t]=Z,ye=$t;else break e}}return Q}function s($,Q){var Z=$.sortIndex-Q.sortIndex;return Z!==0?Z:$.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,m=null,g=3,_=!1,R=!1,N=!1,j=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A($){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=$)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(c)}}function b($){if(N=!1,A($),!R)if(n(u)!==null)R=!0,Bt(x);else{var Q=n(c);Q!==null&&Fr(b,Q.startTime-$)}}function x($,Q){R=!1,N&&(N=!1,I(y),y=-1),_=!0;var Z=g;try{for(A(Q),m=n(u);m!==null&&(!(m.expirationTime>Q)||$&&!S());){var ye=m.callback;if(typeof ye=="function"){m.callback=null,g=m.priorityLevel;var Re=ye(m.expirationTime<=Q);Q=t.unstable_now(),typeof Re=="function"?m.callback=Re:m===n(u)&&r(u),A(Q)}else r(u);m=n(u)}if(m!==null)var Ur=!0;else{var Dt=n(c);Dt!==null&&Fr(b,Dt.startTime-Q),Ur=!1}return Ur}finally{m=null,g=Z,_=!1}}var O=!1,w=null,y=-1,T=5,C=-1;function S(){return!(t.unstable_now()-C<T)}function P(){if(w!==null){var $=t.unstable_now();C=$;var Q=!0;try{Q=w(!0,$)}finally{Q?k():(O=!1,w=null)}}else O=!1}var k;if(typeof E=="function")k=function(){E(P)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,Ue=ce.port2;ce.port1.onmessage=P,k=function(){Ue.postMessage(null)}}else k=function(){j(P,0)};function Bt($){w=$,O||(O=!0,k())}function Fr($,Q){y=j(function(){$(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){R||_||(R=!0,Bt(x))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(g){case 1:case 2:case 3:var Q=3;break;default:Q=g}var Z=g;g=Q;try{return $()}finally{g=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,Q){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Z=g;g=$;try{return Q()}finally{g=Z}},t.unstable_scheduleCallback=function($,Q,Z){var ye=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ye+Z:ye):Z=ye,$){case 1:var Re=-1;break;case 2:Re=250;break;case 5:Re=1073741823;break;case 4:Re=1e4;break;default:Re=5e3}return Re=Z+Re,$={id:f++,callback:Q,priorityLevel:$,startTime:Z,expirationTime:Re,sortIndex:-1},Z>ye?($.sortIndex=Z,e(c,$),n(u)===null&&$===n(c)&&(N?(I(y),y=-1):N=!0,Fr(b,Z-ye))):($.sortIndex=Re,e(u,$),R||_||(R=!0,Bt(x))),$},t.unstable_shouldYield=S,t.unstable_wrapCallback=function($){var Q=g;return function(){var Z=g;g=Q;try{return $.apply(this,arguments)}finally{g=Z}}}})(K_);G_.exports=K_;var $T=G_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var HT=B,Pt=$T;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Q_=new Set,ko={};function _s(t,e){ri(t,e),ri(t+"Capture",e)}function ri(t,e){for(ko[t]=e,t=0;t<e.length;t++)Q_.add(e[t])}var Vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gh=Object.prototype.hasOwnProperty,qT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$m={},Hm={};function WT(t){return gh.call(Hm,t)?!0:gh.call($m,t)?!1:qT.test(t)?Hm[t]=!0:($m[t]=!0,!1)}function GT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function KT(t,e,n,r){if(e===null||typeof e>"u"||GT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Qe[t]=new pt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Qe[e]=new pt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Qe[t]=new pt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Qe[t]=new pt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Qe[t]=new pt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Qe[t]=new pt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Qe[t]=new pt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Qe[t]=new pt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Qe[t]=new pt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Wd=/[\-:]([a-z])/g;function Gd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Wd,Gd);Qe[e]=new pt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Wd,Gd);Qe[e]=new pt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Wd,Gd);Qe[e]=new pt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Qe[t]=new pt(t,1,!1,t.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Qe[t]=new pt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Kd(t,e,n,r){var s=Qe.hasOwnProperty(e)?Qe[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(KT(e,n,s,r)&&(n=null),r||s===null?WT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var $n=HT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Na=Symbol.for("react.element"),Ds=Symbol.for("react.portal"),Vs=Symbol.for("react.fragment"),Qd=Symbol.for("react.strict_mode"),yh=Symbol.for("react.profiler"),Y_=Symbol.for("react.provider"),X_=Symbol.for("react.context"),Yd=Symbol.for("react.forward_ref"),_h=Symbol.for("react.suspense"),vh=Symbol.for("react.suspense_list"),Xd=Symbol.for("react.memo"),Zn=Symbol.for("react.lazy"),J_=Symbol.for("react.offscreen"),qm=Symbol.iterator;function qi(t){return t===null||typeof t!="object"?null:(t=qm&&t[qm]||t["@@iterator"],typeof t=="function"?t:null)}var Ee=Object.assign,Cc;function to(t){if(Cc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Cc=e&&e[1]||""}return`
`+Cc+t}var Rc=!1;function xc(t,e){if(!t||Rc)return"";Rc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Rc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?to(t):""}function QT(t){switch(t.tag){case 5:return to(t.type);case 16:return to("Lazy");case 13:return to("Suspense");case 19:return to("SuspenseList");case 0:case 2:case 15:return t=xc(t.type,!1),t;case 11:return t=xc(t.type.render,!1),t;case 1:return t=xc(t.type,!0),t;default:return""}}function wh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Vs:return"Fragment";case Ds:return"Portal";case yh:return"Profiler";case Qd:return"StrictMode";case _h:return"Suspense";case vh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case X_:return(t.displayName||"Context")+".Consumer";case Y_:return(t._context.displayName||"Context")+".Provider";case Yd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Xd:return e=t.displayName||null,e!==null?e:wh(t.type)||"Memo";case Zn:e=t._payload,t=t._init;try{return wh(t(e))}catch{}}return null}function YT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wh(e);case 8:return e===Qd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Z_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function XT(t){var e=Z_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ba(t){t._valueTracker||(t._valueTracker=XT(t))}function ev(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Z_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Il(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Eh(t,e){var n=e.checked;return Ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Wm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function tv(t,e){e=e.checked,e!=null&&Kd(t,"checked",e,!1)}function Th(t,e){tv(t,e);var n=Ir(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ih(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ih(t,e.type,Ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Gm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ih(t,e,n){(e!=="number"||Il(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var no=Array.isArray;function qs(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ir(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Sh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Km(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(no(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ir(n)}}function nv(t,e){var n=Ir(e.value),r=Ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Qm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function rv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ah(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?rv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Da,sv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Da=Da||document.createElement("div"),Da.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Da.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Co(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var uo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},JT=["Webkit","ms","Moz","O"];Object.keys(uo).forEach(function(t){JT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),uo[e]=uo[t]})});function iv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||uo.hasOwnProperty(t)&&uo[t]?(""+e).trim():e+"px"}function ov(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=iv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var ZT=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kh(t,e){if(e){if(ZT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Ch(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rh=null;function Jd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xh=null,Ws=null,Gs=null;function Ym(t){if(t=sa(t)){if(typeof xh!="function")throw Error(F(280));var e=t.stateNode;e&&(e=yu(e),xh(t.stateNode,t.type,e))}}function av(t){Ws?Gs?Gs.push(t):Gs=[t]:Ws=t}function lv(){if(Ws){var t=Ws,e=Gs;if(Gs=Ws=null,Ym(t),e)for(t=0;t<e.length;t++)Ym(e[t])}}function uv(t,e){return t(e)}function cv(){}var Pc=!1;function hv(t,e,n){if(Pc)return t(e,n);Pc=!0;try{return uv(t,e,n)}finally{Pc=!1,(Ws!==null||Gs!==null)&&(cv(),lv())}}function Ro(t,e){var n=t.stateNode;if(n===null)return null;var r=yu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Ph=!1;if(Vn)try{var Wi={};Object.defineProperty(Wi,"passive",{get:function(){Ph=!0}}),window.addEventListener("test",Wi,Wi),window.removeEventListener("test",Wi,Wi)}catch{Ph=!1}function eI(t,e,n,r,s,i,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var co=!1,Sl=null,Al=!1,Nh=null,tI={onError:function(t){co=!0,Sl=t}};function nI(t,e,n,r,s,i,o,l,u){co=!1,Sl=null,eI.apply(tI,arguments)}function rI(t,e,n,r,s,i,o,l,u){if(nI.apply(this,arguments),co){if(co){var c=Sl;co=!1,Sl=null}else throw Error(F(198));Al||(Al=!0,Nh=c)}}function vs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function dv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Xm(t){if(vs(t)!==t)throw Error(F(188))}function sI(t){var e=t.alternate;if(!e){if(e=vs(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Xm(s),t;if(i===r)return Xm(s),e;i=i.sibling}throw Error(F(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function fv(t){return t=sI(t),t!==null?pv(t):null}function pv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=pv(t);if(e!==null)return e;t=t.sibling}return null}var mv=Pt.unstable_scheduleCallback,Jm=Pt.unstable_cancelCallback,iI=Pt.unstable_shouldYield,oI=Pt.unstable_requestPaint,Pe=Pt.unstable_now,aI=Pt.unstable_getCurrentPriorityLevel,Zd=Pt.unstable_ImmediatePriority,gv=Pt.unstable_UserBlockingPriority,kl=Pt.unstable_NormalPriority,lI=Pt.unstable_LowPriority,yv=Pt.unstable_IdlePriority,fu=null,cn=null;function uI(t){if(cn&&typeof cn.onCommitFiberRoot=="function")try{cn.onCommitFiberRoot(fu,t,void 0,(t.current.flags&128)===128)}catch{}}var Qt=Math.clz32?Math.clz32:dI,cI=Math.log,hI=Math.LN2;function dI(t){return t>>>=0,t===0?32:31-(cI(t)/hI|0)|0}var Va=64,ja=4194304;function ro(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Cl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=ro(l):(i&=o,i!==0&&(r=ro(i)))}else o=n&~s,o!==0?r=ro(o):i!==0&&(r=ro(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Qt(e),s=1<<n,r|=t[n],e&=~s;return r}function fI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-Qt(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=fI(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function bh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function _v(){var t=Va;return Va<<=1,!(Va&4194240)&&(Va=64),t}function Nc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function na(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Qt(e),t[e]=n}function mI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Qt(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function ef(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Qt(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var le=0;function vv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var wv,tf,Ev,Tv,Iv,Dh=!1,Oa=[],hr=null,dr=null,fr=null,xo=new Map,Po=new Map,tr=[],gI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zm(t,e){switch(t){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":dr=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":xo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(e.pointerId)}}function Gi(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=sa(e),e!==null&&tf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function yI(t,e,n,r,s){switch(e){case"focusin":return hr=Gi(hr,t,e,n,r,s),!0;case"dragenter":return dr=Gi(dr,t,e,n,r,s),!0;case"mouseover":return fr=Gi(fr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return xo.set(i,Gi(xo.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Po.set(i,Gi(Po.get(i)||null,t,e,n,r,s)),!0}return!1}function Sv(t){var e=Xr(t.target);if(e!==null){var n=vs(e);if(n!==null){if(e=n.tag,e===13){if(e=dv(n),e!==null){t.blockedOn=e,Iv(t.priority,function(){Ev(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function rl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Vh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Rh=r,n.target.dispatchEvent(r),Rh=null}else return e=sa(n),e!==null&&tf(e),t.blockedOn=n,!1;e.shift()}return!0}function eg(t,e,n){rl(t)&&n.delete(e)}function _I(){Dh=!1,hr!==null&&rl(hr)&&(hr=null),dr!==null&&rl(dr)&&(dr=null),fr!==null&&rl(fr)&&(fr=null),xo.forEach(eg),Po.forEach(eg)}function Ki(t,e){t.blockedOn===e&&(t.blockedOn=null,Dh||(Dh=!0,Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority,_I)))}function No(t){function e(s){return Ki(s,t)}if(0<Oa.length){Ki(Oa[0],t);for(var n=1;n<Oa.length;n++){var r=Oa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(hr!==null&&Ki(hr,t),dr!==null&&Ki(dr,t),fr!==null&&Ki(fr,t),xo.forEach(e),Po.forEach(e),n=0;n<tr.length;n++)r=tr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<tr.length&&(n=tr[0],n.blockedOn===null);)Sv(n),n.blockedOn===null&&tr.shift()}var Ks=$n.ReactCurrentBatchConfig,Rl=!0;function vI(t,e,n,r){var s=le,i=Ks.transition;Ks.transition=null;try{le=1,nf(t,e,n,r)}finally{le=s,Ks.transition=i}}function wI(t,e,n,r){var s=le,i=Ks.transition;Ks.transition=null;try{le=4,nf(t,e,n,r)}finally{le=s,Ks.transition=i}}function nf(t,e,n,r){if(Rl){var s=Vh(t,e,n,r);if(s===null)zc(t,e,r,xl,n),Zm(t,r);else if(yI(s,t,e,n,r))r.stopPropagation();else if(Zm(t,r),e&4&&-1<gI.indexOf(t)){for(;s!==null;){var i=sa(s);if(i!==null&&wv(i),i=Vh(t,e,n,r),i===null&&zc(t,e,r,xl,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else zc(t,e,r,null,n)}}var xl=null;function Vh(t,e,n,r){if(xl=null,t=Jd(r),t=Xr(t),t!==null)if(e=vs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=dv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return xl=t,null}function Av(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(aI()){case Zd:return 1;case gv:return 4;case kl:case lI:return 16;case yv:return 536870912;default:return 16}default:return 16}}var ar=null,rf=null,sl=null;function kv(){if(sl)return sl;var t,e=rf,n=e.length,r,s="value"in ar?ar.value:ar.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return sl=s.slice(t,1<r?1-r:void 0)}function il(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function La(){return!0}function tg(){return!1}function bt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?La:tg,this.isPropagationStopped=tg,this}return Ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=La)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=La)},persist:function(){},isPersistent:La}),e}var Ei={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sf=bt(Ei),ra=Ee({},Ei,{view:0,detail:0}),EI=bt(ra),bc,Dc,Qi,pu=Ee({},ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:of,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qi&&(Qi&&t.type==="mousemove"?(bc=t.screenX-Qi.screenX,Dc=t.screenY-Qi.screenY):Dc=bc=0,Qi=t),bc)},movementY:function(t){return"movementY"in t?t.movementY:Dc}}),ng=bt(pu),TI=Ee({},pu,{dataTransfer:0}),II=bt(TI),SI=Ee({},ra,{relatedTarget:0}),Vc=bt(SI),AI=Ee({},Ei,{animationName:0,elapsedTime:0,pseudoElement:0}),kI=bt(AI),CI=Ee({},Ei,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),RI=bt(CI),xI=Ee({},Ei,{data:0}),rg=bt(xI),PI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},NI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function DI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=bI[t])?!!e[t]:!1}function of(){return DI}var VI=Ee({},ra,{key:function(t){if(t.key){var e=PI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=il(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?NI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:of,charCode:function(t){return t.type==="keypress"?il(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?il(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),jI=bt(VI),OI=Ee({},pu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sg=bt(OI),LI=Ee({},ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:of}),MI=bt(LI),FI=Ee({},Ei,{propertyName:0,elapsedTime:0,pseudoElement:0}),UI=bt(FI),zI=Ee({},pu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),BI=bt(zI),$I=[9,13,27,32],af=Vn&&"CompositionEvent"in window,ho=null;Vn&&"documentMode"in document&&(ho=document.documentMode);var HI=Vn&&"TextEvent"in window&&!ho,Cv=Vn&&(!af||ho&&8<ho&&11>=ho),ig=" ",og=!1;function Rv(t,e){switch(t){case"keyup":return $I.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var js=!1;function qI(t,e){switch(t){case"compositionend":return xv(e);case"keypress":return e.which!==32?null:(og=!0,ig);case"textInput":return t=e.data,t===ig&&og?null:t;default:return null}}function WI(t,e){if(js)return t==="compositionend"||!af&&Rv(t,e)?(t=kv(),sl=rf=ar=null,js=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Cv&&e.locale!=="ko"?null:e.data;default:return null}}var GI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ag(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!GI[t.type]:e==="textarea"}function Pv(t,e,n,r){av(r),e=Pl(e,"onChange"),0<e.length&&(n=new sf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var fo=null,bo=null;function KI(t){zv(t,0)}function mu(t){var e=Ms(t);if(ev(e))return t}function QI(t,e){if(t==="change")return e}var Nv=!1;if(Vn){var jc;if(Vn){var Oc="oninput"in document;if(!Oc){var lg=document.createElement("div");lg.setAttribute("oninput","return;"),Oc=typeof lg.oninput=="function"}jc=Oc}else jc=!1;Nv=jc&&(!document.documentMode||9<document.documentMode)}function ug(){fo&&(fo.detachEvent("onpropertychange",bv),bo=fo=null)}function bv(t){if(t.propertyName==="value"&&mu(bo)){var e=[];Pv(e,bo,t,Jd(t)),hv(KI,e)}}function YI(t,e,n){t==="focusin"?(ug(),fo=e,bo=n,fo.attachEvent("onpropertychange",bv)):t==="focusout"&&ug()}function XI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return mu(bo)}function JI(t,e){if(t==="click")return mu(e)}function ZI(t,e){if(t==="input"||t==="change")return mu(e)}function eS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Zt=typeof Object.is=="function"?Object.is:eS;function Do(t,e){if(Zt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!gh.call(e,s)||!Zt(t[s],e[s]))return!1}return!0}function cg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hg(t,e){var n=cg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cg(n)}}function Dv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Dv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Vv(){for(var t=window,e=Il();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Il(t.document)}return e}function lf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function tS(t){var e=Vv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Dv(n.ownerDocument.documentElement,n)){if(r!==null&&lf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=hg(n,i);var o=hg(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var nS=Vn&&"documentMode"in document&&11>=document.documentMode,Os=null,jh=null,po=null,Oh=!1;function dg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Oh||Os==null||Os!==Il(r)||(r=Os,"selectionStart"in r&&lf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),po&&Do(po,r)||(po=r,r=Pl(jh,"onSelect"),0<r.length&&(e=new sf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Os)))}function Ma(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ls={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionend:Ma("Transition","TransitionEnd")},Lc={},jv={};Vn&&(jv=document.createElement("div").style,"AnimationEvent"in window||(delete Ls.animationend.animation,delete Ls.animationiteration.animation,delete Ls.animationstart.animation),"TransitionEvent"in window||delete Ls.transitionend.transition);function gu(t){if(Lc[t])return Lc[t];if(!Ls[t])return t;var e=Ls[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in jv)return Lc[t]=e[n];return t}var Ov=gu("animationend"),Lv=gu("animationiteration"),Mv=gu("animationstart"),Fv=gu("transitionend"),Uv=new Map,fg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function br(t,e){Uv.set(t,e),_s(e,[t])}for(var Mc=0;Mc<fg.length;Mc++){var Fc=fg[Mc],rS=Fc.toLowerCase(),sS=Fc[0].toUpperCase()+Fc.slice(1);br(rS,"on"+sS)}br(Ov,"onAnimationEnd");br(Lv,"onAnimationIteration");br(Mv,"onAnimationStart");br("dblclick","onDoubleClick");br("focusin","onFocus");br("focusout","onBlur");br(Fv,"onTransitionEnd");ri("onMouseEnter",["mouseout","mouseover"]);ri("onMouseLeave",["mouseout","mouseover"]);ri("onPointerEnter",["pointerout","pointerover"]);ri("onPointerLeave",["pointerout","pointerover"]);_s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_s("onBeforeInput",["compositionend","keypress","textInput","paste"]);_s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var so="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iS=new Set("cancel close invalid load scroll toggle".split(" ").concat(so));function pg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,rI(r,e,void 0,t),t.currentTarget=null}function zv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;pg(s,l,c),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;pg(s,l,c),i=u}}}if(Al)throw t=Nh,Al=!1,Nh=null,t}function pe(t,e){var n=e[zh];n===void 0&&(n=e[zh]=new Set);var r=t+"__bubble";n.has(r)||(Bv(e,t,2,!1),n.add(r))}function Uc(t,e,n){var r=0;e&&(r|=4),Bv(n,t,r,e)}var Fa="_reactListening"+Math.random().toString(36).slice(2);function Vo(t){if(!t[Fa]){t[Fa]=!0,Q_.forEach(function(n){n!=="selectionchange"&&(iS.has(n)||Uc(n,!1,t),Uc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Fa]||(e[Fa]=!0,Uc("selectionchange",!1,e))}}function Bv(t,e,n,r){switch(Av(e)){case 1:var s=vI;break;case 4:s=wI;break;default:s=nf}n=s.bind(null,e,n,t),s=void 0,!Ph||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function zc(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Xr(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}hv(function(){var c=i,f=Jd(n),m=[];e:{var g=Uv.get(t);if(g!==void 0){var _=sf,R=t;switch(t){case"keypress":if(il(n)===0)break e;case"keydown":case"keyup":_=jI;break;case"focusin":R="focus",_=Vc;break;case"focusout":R="blur",_=Vc;break;case"beforeblur":case"afterblur":_=Vc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=ng;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=II;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=MI;break;case Ov:case Lv:case Mv:_=kI;break;case Fv:_=UI;break;case"scroll":_=EI;break;case"wheel":_=BI;break;case"copy":case"cut":case"paste":_=RI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=sg}var N=(e&4)!==0,j=!N&&t==="scroll",I=N?g!==null?g+"Capture":null:g;N=[];for(var E=c,A;E!==null;){A=E;var b=A.stateNode;if(A.tag===5&&b!==null&&(A=b,I!==null&&(b=Ro(E,I),b!=null&&N.push(jo(E,b,A)))),j)break;E=E.return}0<N.length&&(g=new _(g,R,null,n,f),m.push({event:g,listeners:N}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",g&&n!==Rh&&(R=n.relatedTarget||n.fromElement)&&(Xr(R)||R[jn]))break e;if((_||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,_?(R=n.relatedTarget||n.toElement,_=c,R=R?Xr(R):null,R!==null&&(j=vs(R),R!==j||R.tag!==5&&R.tag!==6)&&(R=null)):(_=null,R=c),_!==R)){if(N=ng,b="onMouseLeave",I="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(N=sg,b="onPointerLeave",I="onPointerEnter",E="pointer"),j=_==null?g:Ms(_),A=R==null?g:Ms(R),g=new N(b,E+"leave",_,n,f),g.target=j,g.relatedTarget=A,b=null,Xr(f)===c&&(N=new N(I,E+"enter",R,n,f),N.target=A,N.relatedTarget=j,b=N),j=b,_&&R)t:{for(N=_,I=R,E=0,A=N;A;A=Rs(A))E++;for(A=0,b=I;b;b=Rs(b))A++;for(;0<E-A;)N=Rs(N),E--;for(;0<A-E;)I=Rs(I),A--;for(;E--;){if(N===I||I!==null&&N===I.alternate)break t;N=Rs(N),I=Rs(I)}N=null}else N=null;_!==null&&mg(m,g,_,N,!1),R!==null&&j!==null&&mg(m,j,R,N,!0)}}e:{if(g=c?Ms(c):window,_=g.nodeName&&g.nodeName.toLowerCase(),_==="select"||_==="input"&&g.type==="file")var x=QI;else if(ag(g))if(Nv)x=ZI;else{x=XI;var O=YI}else(_=g.nodeName)&&_.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(x=JI);if(x&&(x=x(t,c))){Pv(m,x,n,f);break e}O&&O(t,g,c),t==="focusout"&&(O=g._wrapperState)&&O.controlled&&g.type==="number"&&Ih(g,"number",g.value)}switch(O=c?Ms(c):window,t){case"focusin":(ag(O)||O.contentEditable==="true")&&(Os=O,jh=c,po=null);break;case"focusout":po=jh=Os=null;break;case"mousedown":Oh=!0;break;case"contextmenu":case"mouseup":case"dragend":Oh=!1,dg(m,n,f);break;case"selectionchange":if(nS)break;case"keydown":case"keyup":dg(m,n,f)}var w;if(af)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else js?Rv(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Cv&&n.locale!=="ko"&&(js||y!=="onCompositionStart"?y==="onCompositionEnd"&&js&&(w=kv()):(ar=f,rf="value"in ar?ar.value:ar.textContent,js=!0)),O=Pl(c,y),0<O.length&&(y=new rg(y,t,null,n,f),m.push({event:y,listeners:O}),w?y.data=w:(w=xv(n),w!==null&&(y.data=w)))),(w=HI?qI(t,n):WI(t,n))&&(c=Pl(c,"onBeforeInput"),0<c.length&&(f=new rg("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:c}),f.data=w))}zv(m,e)})}function jo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Pl(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Ro(t,n),i!=null&&r.unshift(jo(t,i,s)),i=Ro(t,e),i!=null&&r.push(jo(t,i,s))),t=t.return}return r}function Rs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function mg(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,s?(u=Ro(n,i),u!=null&&o.unshift(jo(n,u,l))):s||(u=Ro(n,i),u!=null&&o.push(jo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var oS=/\r\n?/g,aS=/\u0000|\uFFFD/g;function gg(t){return(typeof t=="string"?t:""+t).replace(oS,`
`).replace(aS,"")}function Ua(t,e,n){if(e=gg(e),gg(t)!==e&&n)throw Error(F(425))}function Nl(){}var Lh=null,Mh=null;function Fh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Uh=typeof setTimeout=="function"?setTimeout:void 0,lS=typeof clearTimeout=="function"?clearTimeout:void 0,yg=typeof Promise=="function"?Promise:void 0,uS=typeof queueMicrotask=="function"?queueMicrotask:typeof yg<"u"?function(t){return yg.resolve(null).then(t).catch(cS)}:Uh;function cS(t){setTimeout(function(){throw t})}function Bc(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),No(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);No(e)}function pr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function _g(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ti=Math.random().toString(36).slice(2),ln="__reactFiber$"+Ti,Oo="__reactProps$"+Ti,jn="__reactContainer$"+Ti,zh="__reactEvents$"+Ti,hS="__reactListeners$"+Ti,dS="__reactHandles$"+Ti;function Xr(t){var e=t[ln];if(e)return e;for(var n=t.parentNode;n;){if(e=n[jn]||n[ln]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=_g(t);t!==null;){if(n=t[ln])return n;t=_g(t)}return e}t=n,n=t.parentNode}return null}function sa(t){return t=t[ln]||t[jn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ms(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function yu(t){return t[Oo]||null}var Bh=[],Fs=-1;function Dr(t){return{current:t}}function ge(t){0>Fs||(t.current=Bh[Fs],Bh[Fs]=null,Fs--)}function de(t,e){Fs++,Bh[Fs]=t.current,t.current=e}var Sr={},it=Dr(Sr),wt=Dr(!1),as=Sr;function si(t,e){var n=t.type.contextTypes;if(!n)return Sr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Et(t){return t=t.childContextTypes,t!=null}function bl(){ge(wt),ge(it)}function vg(t,e,n){if(it.current!==Sr)throw Error(F(168));de(it,e),de(wt,n)}function $v(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(F(108,YT(t)||"Unknown",s));return Ee({},n,r)}function Dl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Sr,as=it.current,de(it,t),de(wt,wt.current),!0}function wg(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=$v(t,e,as),r.__reactInternalMemoizedMergedChildContext=t,ge(wt),ge(it),de(it,t)):ge(wt),de(wt,n)}var An=null,_u=!1,$c=!1;function Hv(t){An===null?An=[t]:An.push(t)}function fS(t){_u=!0,Hv(t)}function Vr(){if(!$c&&An!==null){$c=!0;var t=0,e=le;try{var n=An;for(le=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}An=null,_u=!1}catch(s){throw An!==null&&(An=An.slice(t+1)),mv(Zd,Vr),s}finally{le=e,$c=!1}}return null}var Us=[],zs=0,Vl=null,jl=0,Vt=[],jt=0,ls=null,Cn=1,Rn="";function Gr(t,e){Us[zs++]=jl,Us[zs++]=Vl,Vl=t,jl=e}function qv(t,e,n){Vt[jt++]=Cn,Vt[jt++]=Rn,Vt[jt++]=ls,ls=t;var r=Cn;t=Rn;var s=32-Qt(r)-1;r&=~(1<<s),n+=1;var i=32-Qt(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Cn=1<<32-Qt(e)+s|n<<s|r,Rn=i+t}else Cn=1<<i|n<<s|r,Rn=t}function uf(t){t.return!==null&&(Gr(t,1),qv(t,1,0))}function cf(t){for(;t===Vl;)Vl=Us[--zs],Us[zs]=null,jl=Us[--zs],Us[zs]=null;for(;t===ls;)ls=Vt[--jt],Vt[jt]=null,Rn=Vt[--jt],Vt[jt]=null,Cn=Vt[--jt],Vt[jt]=null}var xt=null,kt=null,_e=!1,Gt=null;function Wv(t,e){var n=Mt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Eg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xt=t,kt=pr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xt=t,kt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ls!==null?{id:Cn,overflow:Rn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Mt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xt=t,kt=null,!0):!1;default:return!1}}function $h(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Hh(t){if(_e){var e=kt;if(e){var n=e;if(!Eg(t,e)){if($h(t))throw Error(F(418));e=pr(n.nextSibling);var r=xt;e&&Eg(t,e)?Wv(r,n):(t.flags=t.flags&-4097|2,_e=!1,xt=t)}}else{if($h(t))throw Error(F(418));t.flags=t.flags&-4097|2,_e=!1,xt=t}}}function Tg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xt=t}function za(t){if(t!==xt)return!1;if(!_e)return Tg(t),_e=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Fh(t.type,t.memoizedProps)),e&&(e=kt)){if($h(t))throw Gv(),Error(F(418));for(;e;)Wv(t,e),e=pr(e.nextSibling)}if(Tg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){kt=pr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}kt=null}}else kt=xt?pr(t.stateNode.nextSibling):null;return!0}function Gv(){for(var t=kt;t;)t=pr(t.nextSibling)}function ii(){kt=xt=null,_e=!1}function hf(t){Gt===null?Gt=[t]:Gt.push(t)}var pS=$n.ReactCurrentBatchConfig;function Yi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function Ba(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ig(t){var e=t._init;return e(t._payload)}function Kv(t){function e(I,E){if(t){var A=I.deletions;A===null?(I.deletions=[E],I.flags|=16):A.push(E)}}function n(I,E){if(!t)return null;for(;E!==null;)e(I,E),E=E.sibling;return null}function r(I,E){for(I=new Map;E!==null;)E.key!==null?I.set(E.key,E):I.set(E.index,E),E=E.sibling;return I}function s(I,E){return I=_r(I,E),I.index=0,I.sibling=null,I}function i(I,E,A){return I.index=A,t?(A=I.alternate,A!==null?(A=A.index,A<E?(I.flags|=2,E):A):(I.flags|=2,E)):(I.flags|=1048576,E)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,E,A,b){return E===null||E.tag!==6?(E=Yc(A,I.mode,b),E.return=I,E):(E=s(E,A),E.return=I,E)}function u(I,E,A,b){var x=A.type;return x===Vs?f(I,E,A.props.children,b,A.key):E!==null&&(E.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Zn&&Ig(x)===E.type)?(b=s(E,A.props),b.ref=Yi(I,E,A),b.return=I,b):(b=dl(A.type,A.key,A.props,null,I.mode,b),b.ref=Yi(I,E,A),b.return=I,b)}function c(I,E,A,b){return E===null||E.tag!==4||E.stateNode.containerInfo!==A.containerInfo||E.stateNode.implementation!==A.implementation?(E=Xc(A,I.mode,b),E.return=I,E):(E=s(E,A.children||[]),E.return=I,E)}function f(I,E,A,b,x){return E===null||E.tag!==7?(E=rs(A,I.mode,b,x),E.return=I,E):(E=s(E,A),E.return=I,E)}function m(I,E,A){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Yc(""+E,I.mode,A),E.return=I,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Na:return A=dl(E.type,E.key,E.props,null,I.mode,A),A.ref=Yi(I,null,E),A.return=I,A;case Ds:return E=Xc(E,I.mode,A),E.return=I,E;case Zn:var b=E._init;return m(I,b(E._payload),A)}if(no(E)||qi(E))return E=rs(E,I.mode,A,null),E.return=I,E;Ba(I,E)}return null}function g(I,E,A,b){var x=E!==null?E.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return x!==null?null:l(I,E,""+A,b);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Na:return A.key===x?u(I,E,A,b):null;case Ds:return A.key===x?c(I,E,A,b):null;case Zn:return x=A._init,g(I,E,x(A._payload),b)}if(no(A)||qi(A))return x!==null?null:f(I,E,A,b,null);Ba(I,A)}return null}function _(I,E,A,b,x){if(typeof b=="string"&&b!==""||typeof b=="number")return I=I.get(A)||null,l(E,I,""+b,x);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Na:return I=I.get(b.key===null?A:b.key)||null,u(E,I,b,x);case Ds:return I=I.get(b.key===null?A:b.key)||null,c(E,I,b,x);case Zn:var O=b._init;return _(I,E,A,O(b._payload),x)}if(no(b)||qi(b))return I=I.get(A)||null,f(E,I,b,x,null);Ba(E,b)}return null}function R(I,E,A,b){for(var x=null,O=null,w=E,y=E=0,T=null;w!==null&&y<A.length;y++){w.index>y?(T=w,w=null):T=w.sibling;var C=g(I,w,A[y],b);if(C===null){w===null&&(w=T);break}t&&w&&C.alternate===null&&e(I,w),E=i(C,E,y),O===null?x=C:O.sibling=C,O=C,w=T}if(y===A.length)return n(I,w),_e&&Gr(I,y),x;if(w===null){for(;y<A.length;y++)w=m(I,A[y],b),w!==null&&(E=i(w,E,y),O===null?x=w:O.sibling=w,O=w);return _e&&Gr(I,y),x}for(w=r(I,w);y<A.length;y++)T=_(w,I,y,A[y],b),T!==null&&(t&&T.alternate!==null&&w.delete(T.key===null?y:T.key),E=i(T,E,y),O===null?x=T:O.sibling=T,O=T);return t&&w.forEach(function(S){return e(I,S)}),_e&&Gr(I,y),x}function N(I,E,A,b){var x=qi(A);if(typeof x!="function")throw Error(F(150));if(A=x.call(A),A==null)throw Error(F(151));for(var O=x=null,w=E,y=E=0,T=null,C=A.next();w!==null&&!C.done;y++,C=A.next()){w.index>y?(T=w,w=null):T=w.sibling;var S=g(I,w,C.value,b);if(S===null){w===null&&(w=T);break}t&&w&&S.alternate===null&&e(I,w),E=i(S,E,y),O===null?x=S:O.sibling=S,O=S,w=T}if(C.done)return n(I,w),_e&&Gr(I,y),x;if(w===null){for(;!C.done;y++,C=A.next())C=m(I,C.value,b),C!==null&&(E=i(C,E,y),O===null?x=C:O.sibling=C,O=C);return _e&&Gr(I,y),x}for(w=r(I,w);!C.done;y++,C=A.next())C=_(w,I,y,C.value,b),C!==null&&(t&&C.alternate!==null&&w.delete(C.key===null?y:C.key),E=i(C,E,y),O===null?x=C:O.sibling=C,O=C);return t&&w.forEach(function(P){return e(I,P)}),_e&&Gr(I,y),x}function j(I,E,A,b){if(typeof A=="object"&&A!==null&&A.type===Vs&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case Na:e:{for(var x=A.key,O=E;O!==null;){if(O.key===x){if(x=A.type,x===Vs){if(O.tag===7){n(I,O.sibling),E=s(O,A.props.children),E.return=I,I=E;break e}}else if(O.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Zn&&Ig(x)===O.type){n(I,O.sibling),E=s(O,A.props),E.ref=Yi(I,O,A),E.return=I,I=E;break e}n(I,O);break}else e(I,O);O=O.sibling}A.type===Vs?(E=rs(A.props.children,I.mode,b,A.key),E.return=I,I=E):(b=dl(A.type,A.key,A.props,null,I.mode,b),b.ref=Yi(I,E,A),b.return=I,I=b)}return o(I);case Ds:e:{for(O=A.key;E!==null;){if(E.key===O)if(E.tag===4&&E.stateNode.containerInfo===A.containerInfo&&E.stateNode.implementation===A.implementation){n(I,E.sibling),E=s(E,A.children||[]),E.return=I,I=E;break e}else{n(I,E);break}else e(I,E);E=E.sibling}E=Xc(A,I.mode,b),E.return=I,I=E}return o(I);case Zn:return O=A._init,j(I,E,O(A._payload),b)}if(no(A))return R(I,E,A,b);if(qi(A))return N(I,E,A,b);Ba(I,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,E!==null&&E.tag===6?(n(I,E.sibling),E=s(E,A),E.return=I,I=E):(n(I,E),E=Yc(A,I.mode,b),E.return=I,I=E),o(I)):n(I,E)}return j}var oi=Kv(!0),Qv=Kv(!1),Ol=Dr(null),Ll=null,Bs=null,df=null;function ff(){df=Bs=Ll=null}function pf(t){var e=Ol.current;ge(Ol),t._currentValue=e}function qh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Qs(t,e){Ll=t,df=Bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(vt=!0),t.firstContext=null)}function Ut(t){var e=t._currentValue;if(df!==t)if(t={context:t,memoizedValue:e,next:null},Bs===null){if(Ll===null)throw Error(F(308));Bs=t,Ll.dependencies={lanes:0,firstContext:t}}else Bs=Bs.next=t;return e}var Jr=null;function mf(t){Jr===null?Jr=[t]:Jr.push(t)}function Yv(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,mf(e)):(n.next=s.next,s.next=n),e.interleaved=n,On(t,r)}function On(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var er=!1;function gf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Nn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function mr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,On(t,n)}return s=r.interleaved,s===null?(e.next=e,mf(r)):(e.next=s.next,s.next=e),r.interleaved=e,On(t,n)}function ol(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ef(t,n)}}function Sg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ml(t,e,n,r){var s=t.updateQueue;er=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(i!==null){var m=s.baseState;o=0,f=c=u=null,l=i;do{var g=l.lane,_=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var R=t,N=l;switch(g=e,_=n,N.tag){case 1:if(R=N.payload,typeof R=="function"){m=R.call(_,m,g);break e}m=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=N.payload,g=typeof R=="function"?R.call(_,m,g):R,g==null)break e;m=Ee({},m,g);break e;case 2:er=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[l]:g.push(l))}else _={eventTime:_,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=_,u=m):f=f.next=_,o|=g;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;g=l,l=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(f===null&&(u=m),s.baseState=u,s.firstBaseUpdate=c,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);cs|=o,t.lanes=o,t.memoizedState=m}}function Ag(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(F(191,s));s.call(r)}}}var ia={},hn=Dr(ia),Lo=Dr(ia),Mo=Dr(ia);function Zr(t){if(t===ia)throw Error(F(174));return t}function yf(t,e){switch(de(Mo,e),de(Lo,t),de(hn,ia),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ah(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ah(e,t)}ge(hn),de(hn,e)}function ai(){ge(hn),ge(Lo),ge(Mo)}function Jv(t){Zr(Mo.current);var e=Zr(hn.current),n=Ah(e,t.type);e!==n&&(de(Lo,t),de(hn,n))}function _f(t){Lo.current===t&&(ge(hn),ge(Lo))}var ve=Dr(0);function Fl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Hc=[];function vf(){for(var t=0;t<Hc.length;t++)Hc[t]._workInProgressVersionPrimary=null;Hc.length=0}var al=$n.ReactCurrentDispatcher,qc=$n.ReactCurrentBatchConfig,us=0,we=null,Le=null,$e=null,Ul=!1,mo=!1,Fo=0,mS=0;function Ze(){throw Error(F(321))}function wf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Zt(t[n],e[n]))return!1;return!0}function Ef(t,e,n,r,s,i){if(us=i,we=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,al.current=t===null||t.memoizedState===null?vS:wS,t=n(r,s),mo){i=0;do{if(mo=!1,Fo=0,25<=i)throw Error(F(301));i+=1,$e=Le=null,e.updateQueue=null,al.current=ES,t=n(r,s)}while(mo)}if(al.current=zl,e=Le!==null&&Le.next!==null,us=0,$e=Le=we=null,Ul=!1,e)throw Error(F(300));return t}function Tf(){var t=Fo!==0;return Fo=0,t}function on(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?we.memoizedState=$e=t:$e=$e.next=t,$e}function zt(){if(Le===null){var t=we.alternate;t=t!==null?t.memoizedState:null}else t=Le.next;var e=$e===null?we.memoizedState:$e.next;if(e!==null)$e=e,Le=t;else{if(t===null)throw Error(F(310));Le=t,t={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},$e===null?we.memoizedState=$e=t:$e=$e.next=t}return $e}function Uo(t,e){return typeof e=="function"?e(t):e}function Wc(t){var e=zt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Le,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,c=i;do{var f=c.lane;if((us&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var m={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,we.lanes|=f,cs|=f}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=l,Zt(r,e.memoizedState)||(vt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,we.lanes|=i,cs|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Gc(t){var e=zt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);Zt(i,e.memoizedState)||(vt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function Zv(){}function ew(t,e){var n=we,r=zt(),s=e(),i=!Zt(r.memoizedState,s);if(i&&(r.memoizedState=s,vt=!0),r=r.queue,If(rw.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||$e!==null&&$e.memoizedState.tag&1){if(n.flags|=2048,zo(9,nw.bind(null,n,r,s,e),void 0,null),He===null)throw Error(F(349));us&30||tw(n,e,s)}return s}function tw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function nw(t,e,n,r){e.value=n,e.getSnapshot=r,sw(e)&&iw(t)}function rw(t,e,n){return n(function(){sw(e)&&iw(t)})}function sw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Zt(t,n)}catch{return!0}}function iw(t){var e=On(t,1);e!==null&&Yt(e,t,1,-1)}function kg(t){var e=on();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Uo,lastRenderedState:t},e.queue=t,t=t.dispatch=_S.bind(null,we,t),[e.memoizedState,t]}function zo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function ow(){return zt().memoizedState}function ll(t,e,n,r){var s=on();we.flags|=t,s.memoizedState=zo(1|e,n,void 0,r===void 0?null:r)}function vu(t,e,n,r){var s=zt();r=r===void 0?null:r;var i=void 0;if(Le!==null){var o=Le.memoizedState;if(i=o.destroy,r!==null&&wf(r,o.deps)){s.memoizedState=zo(e,n,i,r);return}}we.flags|=t,s.memoizedState=zo(1|e,n,i,r)}function Cg(t,e){return ll(8390656,8,t,e)}function If(t,e){return vu(2048,8,t,e)}function aw(t,e){return vu(4,2,t,e)}function lw(t,e){return vu(4,4,t,e)}function uw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function cw(t,e,n){return n=n!=null?n.concat([t]):null,vu(4,4,uw.bind(null,e,t),n)}function Sf(){}function hw(t,e){var n=zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&wf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function dw(t,e){var n=zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&wf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function fw(t,e,n){return us&21?(Zt(n,e)||(n=_v(),we.lanes|=n,cs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,vt=!0),t.memoizedState=n)}function gS(t,e){var n=le;le=n!==0&&4>n?n:4,t(!0);var r=qc.transition;qc.transition={};try{t(!1),e()}finally{le=n,qc.transition=r}}function pw(){return zt().memoizedState}function yS(t,e,n){var r=yr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},mw(t))gw(e,n);else if(n=Yv(t,e,n,r),n!==null){var s=dt();Yt(n,t,r,s),yw(n,e,r)}}function _S(t,e,n){var r=yr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(mw(t))gw(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,Zt(l,o)){var u=e.interleaved;u===null?(s.next=s,mf(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=Yv(t,e,s,r),n!==null&&(s=dt(),Yt(n,t,r,s),yw(n,e,r))}}function mw(t){var e=t.alternate;return t===we||e!==null&&e===we}function gw(t,e){mo=Ul=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function yw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ef(t,n)}}var zl={readContext:Ut,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useInsertionEffect:Ze,useLayoutEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useMutableSource:Ze,useSyncExternalStore:Ze,useId:Ze,unstable_isNewReconciler:!1},vS={readContext:Ut,useCallback:function(t,e){return on().memoizedState=[t,e===void 0?null:e],t},useContext:Ut,useEffect:Cg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ll(4194308,4,uw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ll(4194308,4,t,e)},useInsertionEffect:function(t,e){return ll(4,2,t,e)},useMemo:function(t,e){var n=on();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=on();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=yS.bind(null,we,t),[r.memoizedState,t]},useRef:function(t){var e=on();return t={current:t},e.memoizedState=t},useState:kg,useDebugValue:Sf,useDeferredValue:function(t){return on().memoizedState=t},useTransition:function(){var t=kg(!1),e=t[0];return t=gS.bind(null,t[1]),on().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=we,s=on();if(_e){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),He===null)throw Error(F(349));us&30||tw(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Cg(rw.bind(null,r,i,t),[t]),r.flags|=2048,zo(9,nw.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=on(),e=He.identifierPrefix;if(_e){var n=Rn,r=Cn;n=(r&~(1<<32-Qt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Fo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=mS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},wS={readContext:Ut,useCallback:hw,useContext:Ut,useEffect:If,useImperativeHandle:cw,useInsertionEffect:aw,useLayoutEffect:lw,useMemo:dw,useReducer:Wc,useRef:ow,useState:function(){return Wc(Uo)},useDebugValue:Sf,useDeferredValue:function(t){var e=zt();return fw(e,Le.memoizedState,t)},useTransition:function(){var t=Wc(Uo)[0],e=zt().memoizedState;return[t,e]},useMutableSource:Zv,useSyncExternalStore:ew,useId:pw,unstable_isNewReconciler:!1},ES={readContext:Ut,useCallback:hw,useContext:Ut,useEffect:If,useImperativeHandle:cw,useInsertionEffect:aw,useLayoutEffect:lw,useMemo:dw,useReducer:Gc,useRef:ow,useState:function(){return Gc(Uo)},useDebugValue:Sf,useDeferredValue:function(t){var e=zt();return Le===null?e.memoizedState=t:fw(e,Le.memoizedState,t)},useTransition:function(){var t=Gc(Uo)[0],e=zt().memoizedState;return[t,e]},useMutableSource:Zv,useSyncExternalStore:ew,useId:pw,unstable_isNewReconciler:!1};function qt(t,e){if(t&&t.defaultProps){e=Ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Wh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var wu={isMounted:function(t){return(t=t._reactInternals)?vs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=dt(),s=yr(t),i=Nn(r,s);i.payload=e,n!=null&&(i.callback=n),e=mr(t,i,s),e!==null&&(Yt(e,t,s,r),ol(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=dt(),s=yr(t),i=Nn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=mr(t,i,s),e!==null&&(Yt(e,t,s,r),ol(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=dt(),r=yr(t),s=Nn(n,r);s.tag=2,e!=null&&(s.callback=e),e=mr(t,s,r),e!==null&&(Yt(e,t,r,n),ol(e,t,r))}};function Rg(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Do(n,r)||!Do(s,i):!0}function _w(t,e,n){var r=!1,s=Sr,i=e.contextType;return typeof i=="object"&&i!==null?i=Ut(i):(s=Et(e)?as:it.current,r=e.contextTypes,i=(r=r!=null)?si(t,s):Sr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=wu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function xg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&wu.enqueueReplaceState(e,e.state,null)}function Gh(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},gf(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Ut(i):(i=Et(e)?as:it.current,s.context=si(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Wh(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&wu.enqueueReplaceState(s,s.state,null),Ml(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function li(t,e){try{var n="",r=e;do n+=QT(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Kc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Kh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var TS=typeof WeakMap=="function"?WeakMap:Map;function vw(t,e,n){n=Nn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){$l||($l=!0,sd=r),Kh(t,e)},n}function ww(t,e,n){n=Nn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Kh(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Kh(t,e),typeof r!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Pg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new TS;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=OS.bind(null,t,e,n),e.then(t,t))}function Ng(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function bg(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Nn(-1,1),e.tag=2,mr(n,e,1))),n.lanes|=1),t)}var IS=$n.ReactCurrentOwner,vt=!1;function ct(t,e,n,r){e.child=t===null?Qv(e,null,n,r):oi(e,t.child,n,r)}function Dg(t,e,n,r,s){n=n.render;var i=e.ref;return Qs(e,s),r=Ef(t,e,n,r,i,s),n=Tf(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Ln(t,e,s)):(_e&&n&&uf(e),e.flags|=1,ct(t,e,r,s),e.child)}function Vg(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!bf(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,Ew(t,e,i,r,s)):(t=dl(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Do,n(o,r)&&t.ref===e.ref)return Ln(t,e,s)}return e.flags|=1,t=_r(i,r),t.ref=e.ref,t.return=e,e.child=t}function Ew(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Do(i,r)&&t.ref===e.ref)if(vt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(vt=!0);else return e.lanes=t.lanes,Ln(t,e,s)}return Qh(t,e,n,r,s)}function Tw(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(Hs,At),At|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,de(Hs,At),At|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,de(Hs,At),At|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,de(Hs,At),At|=r;return ct(t,e,s,n),e.child}function Iw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Qh(t,e,n,r,s){var i=Et(n)?as:it.current;return i=si(e,i),Qs(e,s),n=Ef(t,e,n,r,i,s),r=Tf(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Ln(t,e,s)):(_e&&r&&uf(e),e.flags|=1,ct(t,e,n,s),e.child)}function jg(t,e,n,r,s){if(Et(n)){var i=!0;Dl(e)}else i=!1;if(Qs(e,s),e.stateNode===null)ul(t,e),_w(e,n,r),Gh(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ut(c):(c=Et(n)?as:it.current,c=si(e,c));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&xg(e,o,r,c),er=!1;var g=e.memoizedState;o.state=g,Ml(e,r,o,s),u=e.memoizedState,l!==r||g!==u||wt.current||er?(typeof f=="function"&&(Wh(e,n,f,r),u=e.memoizedState),(l=er||Rg(e,n,l,r,g,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Xv(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:qt(e.type,l),o.props=c,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ut(u):(u=Et(n)?as:it.current,u=si(e,u));var _=n.getDerivedStateFromProps;(f=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&xg(e,o,r,u),er=!1,g=e.memoizedState,o.state=g,Ml(e,r,o,s);var R=e.memoizedState;l!==m||g!==R||wt.current||er?(typeof _=="function"&&(Wh(e,n,_,r),R=e.memoizedState),(c=er||Rg(e,n,c,r,g,R,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Yh(t,e,n,r,i,s)}function Yh(t,e,n,r,s,i){Iw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&wg(e,n,!1),Ln(t,e,i);r=e.stateNode,IS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=oi(e,t.child,null,i),e.child=oi(e,null,l,i)):ct(t,e,l,i),e.memoizedState=r.state,s&&wg(e,n,!0),e.child}function Sw(t){var e=t.stateNode;e.pendingContext?vg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&vg(t,e.context,!1),yf(t,e.containerInfo)}function Og(t,e,n,r,s){return ii(),hf(s),e.flags|=256,ct(t,e,n,r),e.child}var Xh={dehydrated:null,treeContext:null,retryLane:0};function Jh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Aw(t,e,n){var r=e.pendingProps,s=ve.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),de(ve,s&1),t===null)return Hh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Iu(o,r,0,null),t=rs(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Jh(n),e.memoizedState=Xh,t):Af(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return SS(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=_r(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=_r(l,i):(i=rs(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Jh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Xh,r}return i=t.child,t=i.sibling,r=_r(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Af(t,e){return e=Iu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function $a(t,e,n,r){return r!==null&&hf(r),oi(e,t.child,null,n),t=Af(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function SS(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=Kc(Error(F(422))),$a(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Iu({mode:"visible",children:r.children},s,0,null),i=rs(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&oi(e,t.child,null,o),e.child.memoizedState=Jh(o),e.memoizedState=Xh,i);if(!(e.mode&1))return $a(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(F(419)),r=Kc(i,r,void 0),$a(t,e,o,r)}if(l=(o&t.childLanes)!==0,vt||l){if(r=He,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,On(t,s),Yt(r,t,s,-1))}return Nf(),r=Kc(Error(F(421))),$a(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=LS.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,kt=pr(s.nextSibling),xt=e,_e=!0,Gt=null,t!==null&&(Vt[jt++]=Cn,Vt[jt++]=Rn,Vt[jt++]=ls,Cn=t.id,Rn=t.overflow,ls=e),e=Af(e,r.children),e.flags|=4096,e)}function Lg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),qh(t.return,e,n)}function Qc(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function kw(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(ct(t,e,r.children,n),r=ve.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Lg(t,n,e);else if(t.tag===19)Lg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(de(ve,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Fl(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Qc(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Fl(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Qc(e,!0,n,null,i);break;case"together":Qc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ul(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ln(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),cs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=_r(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=_r(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function AS(t,e,n){switch(e.tag){case 3:Sw(e),ii();break;case 5:Jv(e);break;case 1:Et(e.type)&&Dl(e);break;case 4:yf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;de(Ol,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(de(ve,ve.current&1),e.flags|=128,null):n&e.child.childLanes?Aw(t,e,n):(de(ve,ve.current&1),t=Ln(t,e,n),t!==null?t.sibling:null);de(ve,ve.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return kw(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),de(ve,ve.current),r)break;return null;case 22:case 23:return e.lanes=0,Tw(t,e,n)}return Ln(t,e,n)}var Cw,Zh,Rw,xw;Cw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Zh=function(){};Rw=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Zr(hn.current);var i=null;switch(n){case"input":s=Eh(t,s),r=Eh(t,r),i=[];break;case"select":s=Ee({},s,{value:void 0}),r=Ee({},r,{value:void 0}),i=[];break;case"textarea":s=Sh(t,s),r=Sh(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Nl)}kh(n,r);var o;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var l=s[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ko.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(l=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ko.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&pe("scroll",t),i||l===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};xw=function(t,e,n,r){n!==r&&(e.flags|=4)};function Xi(t,e){if(!_e)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function et(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function kS(t,e,n){var r=e.pendingProps;switch(cf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(e),null;case 1:return Et(e.type)&&bl(),et(e),null;case 3:return r=e.stateNode,ai(),ge(wt),ge(it),vf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(za(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gt!==null&&(ad(Gt),Gt=null))),Zh(t,e),et(e),null;case 5:_f(e);var s=Zr(Mo.current);if(n=e.type,t!==null&&e.stateNode!=null)Rw(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return et(e),null}if(t=Zr(hn.current),za(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[ln]=e,r[Oo]=i,t=(e.mode&1)!==0,n){case"dialog":pe("cancel",r),pe("close",r);break;case"iframe":case"object":case"embed":pe("load",r);break;case"video":case"audio":for(s=0;s<so.length;s++)pe(so[s],r);break;case"source":pe("error",r);break;case"img":case"image":case"link":pe("error",r),pe("load",r);break;case"details":pe("toggle",r);break;case"input":Wm(r,i),pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},pe("invalid",r);break;case"textarea":Km(r,i),pe("invalid",r)}kh(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Ua(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Ua(r.textContent,l,t),s=["children",""+l]):ko.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&pe("scroll",r)}switch(n){case"input":ba(r),Gm(r,i,!0);break;case"textarea":ba(r),Qm(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Nl)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=rv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[ln]=e,t[Oo]=r,Cw(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ch(n,r),n){case"dialog":pe("cancel",t),pe("close",t),s=r;break;case"iframe":case"object":case"embed":pe("load",t),s=r;break;case"video":case"audio":for(s=0;s<so.length;s++)pe(so[s],t);s=r;break;case"source":pe("error",t),s=r;break;case"img":case"image":case"link":pe("error",t),pe("load",t),s=r;break;case"details":pe("toggle",t),s=r;break;case"input":Wm(t,r),s=Eh(t,r),pe("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Ee({},r,{value:void 0}),pe("invalid",t);break;case"textarea":Km(t,r),s=Sh(t,r),pe("invalid",t);break;default:s=r}kh(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?ov(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&sv(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Co(t,u):typeof u=="number"&&Co(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ko.hasOwnProperty(i)?u!=null&&i==="onScroll"&&pe("scroll",t):u!=null&&Kd(t,i,u,o))}switch(n){case"input":ba(t),Gm(t,r,!1);break;case"textarea":ba(t),Qm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ir(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?qs(t,!!r.multiple,i,!1):r.defaultValue!=null&&qs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Nl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return et(e),null;case 6:if(t&&e.stateNode!=null)xw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=Zr(Mo.current),Zr(hn.current),za(e)){if(r=e.stateNode,n=e.memoizedProps,r[ln]=e,(i=r.nodeValue!==n)&&(t=xt,t!==null))switch(t.tag){case 3:Ua(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ua(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ln]=e,e.stateNode=r}return et(e),null;case 13:if(ge(ve),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_e&&kt!==null&&e.mode&1&&!(e.flags&128))Gv(),ii(),e.flags|=98560,i=!1;else if(i=za(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(F(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(F(317));i[ln]=e}else ii(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;et(e),i=!1}else Gt!==null&&(ad(Gt),Gt=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ve.current&1?Me===0&&(Me=3):Nf())),e.updateQueue!==null&&(e.flags|=4),et(e),null);case 4:return ai(),Zh(t,e),t===null&&Vo(e.stateNode.containerInfo),et(e),null;case 10:return pf(e.type._context),et(e),null;case 17:return Et(e.type)&&bl(),et(e),null;case 19:if(ge(ve),i=e.memoizedState,i===null)return et(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Xi(i,!1);else{if(Me!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Fl(t),o!==null){for(e.flags|=128,Xi(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return de(ve,ve.current&1|2),e.child}t=t.sibling}i.tail!==null&&Pe()>ui&&(e.flags|=128,r=!0,Xi(i,!1),e.lanes=4194304)}else{if(!r)if(t=Fl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Xi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!_e)return et(e),null}else 2*Pe()-i.renderingStartTime>ui&&n!==1073741824&&(e.flags|=128,r=!0,Xi(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Pe(),e.sibling=null,n=ve.current,de(ve,r?n&1|2:n&1),e):(et(e),null);case 22:case 23:return Pf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?At&1073741824&&(et(e),e.subtreeFlags&6&&(e.flags|=8192)):et(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function CS(t,e){switch(cf(e),e.tag){case 1:return Et(e.type)&&bl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ai(),ge(wt),ge(it),vf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return _f(e),null;case 13:if(ge(ve),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));ii()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ge(ve),null;case 4:return ai(),null;case 10:return pf(e.type._context),null;case 22:case 23:return Pf(),null;case 24:return null;default:return null}}var Ha=!1,rt=!1,RS=typeof WeakSet=="function"?WeakSet:Set,q=null;function $s(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ae(t,e,r)}else n.current=null}function ed(t,e,n){try{n()}catch(r){Ae(t,e,r)}}var Mg=!1;function xS(t,e){if(Lh=Rl,t=Vv(),lf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,m=t,g=null;t:for(;;){for(var _;m!==n||s!==0&&m.nodeType!==3||(l=o+s),m!==i||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(_=m.firstChild)!==null;)g=m,m=_;for(;;){if(m===t)break t;if(g===n&&++c===s&&(l=o),g===i&&++f===r&&(u=o),(_=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=_}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Mh={focusedElem:t,selectionRange:n},Rl=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var N=R.memoizedProps,j=R.memoizedState,I=e.stateNode,E=I.getSnapshotBeforeUpdate(e.elementType===e.type?N:qt(e.type,N),j);I.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(b){Ae(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return R=Mg,Mg=!1,R}function go(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&ed(e,n,i)}s=s.next}while(s!==r)}}function Eu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function td(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Pw(t){var e=t.alternate;e!==null&&(t.alternate=null,Pw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ln],delete e[Oo],delete e[zh],delete e[hS],delete e[dS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Nw(t){return t.tag===5||t.tag===3||t.tag===4}function Fg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Nw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function nd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Nl));else if(r!==4&&(t=t.child,t!==null))for(nd(t,e,n),t=t.sibling;t!==null;)nd(t,e,n),t=t.sibling}function rd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(rd(t,e,n),t=t.sibling;t!==null;)rd(t,e,n),t=t.sibling}var qe=null,Wt=!1;function Xn(t,e,n){for(n=n.child;n!==null;)bw(t,e,n),n=n.sibling}function bw(t,e,n){if(cn&&typeof cn.onCommitFiberUnmount=="function")try{cn.onCommitFiberUnmount(fu,n)}catch{}switch(n.tag){case 5:rt||$s(n,e);case 6:var r=qe,s=Wt;qe=null,Xn(t,e,n),qe=r,Wt=s,qe!==null&&(Wt?(t=qe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):qe.removeChild(n.stateNode));break;case 18:qe!==null&&(Wt?(t=qe,n=n.stateNode,t.nodeType===8?Bc(t.parentNode,n):t.nodeType===1&&Bc(t,n),No(t)):Bc(qe,n.stateNode));break;case 4:r=qe,s=Wt,qe=n.stateNode.containerInfo,Wt=!0,Xn(t,e,n),qe=r,Wt=s;break;case 0:case 11:case 14:case 15:if(!rt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&ed(n,e,o),s=s.next}while(s!==r)}Xn(t,e,n);break;case 1:if(!rt&&($s(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ae(n,e,l)}Xn(t,e,n);break;case 21:Xn(t,e,n);break;case 22:n.mode&1?(rt=(r=rt)||n.memoizedState!==null,Xn(t,e,n),rt=r):Xn(t,e,n);break;default:Xn(t,e,n)}}function Ug(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new RS),e.forEach(function(r){var s=MS.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Ht(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:qe=l.stateNode,Wt=!1;break e;case 3:qe=l.stateNode.containerInfo,Wt=!0;break e;case 4:qe=l.stateNode.containerInfo,Wt=!0;break e}l=l.return}if(qe===null)throw Error(F(160));bw(i,o,s),qe=null,Wt=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(c){Ae(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Dw(e,t),e=e.sibling}function Dw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ht(e,t),sn(t),r&4){try{go(3,t,t.return),Eu(3,t)}catch(N){Ae(t,t.return,N)}try{go(5,t,t.return)}catch(N){Ae(t,t.return,N)}}break;case 1:Ht(e,t),sn(t),r&512&&n!==null&&$s(n,n.return);break;case 5:if(Ht(e,t),sn(t),r&512&&n!==null&&$s(n,n.return),t.flags&32){var s=t.stateNode;try{Co(s,"")}catch(N){Ae(t,t.return,N)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&tv(s,i),Ch(l,o);var c=Ch(l,i);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?ov(s,m):f==="dangerouslySetInnerHTML"?sv(s,m):f==="children"?Co(s,m):Kd(s,f,m,c)}switch(l){case"input":Th(s,i);break;case"textarea":nv(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var _=i.value;_!=null?qs(s,!!i.multiple,_,!1):g!==!!i.multiple&&(i.defaultValue!=null?qs(s,!!i.multiple,i.defaultValue,!0):qs(s,!!i.multiple,i.multiple?[]:"",!1))}s[Oo]=i}catch(N){Ae(t,t.return,N)}}break;case 6:if(Ht(e,t),sn(t),r&4){if(t.stateNode===null)throw Error(F(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(N){Ae(t,t.return,N)}}break;case 3:if(Ht(e,t),sn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{No(e.containerInfo)}catch(N){Ae(t,t.return,N)}break;case 4:Ht(e,t),sn(t);break;case 13:Ht(e,t),sn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Rf=Pe())),r&4&&Ug(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(rt=(c=rt)||f,Ht(e,t),rt=c):Ht(e,t),sn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(q=t,f=t.child;f!==null;){for(m=q=f;q!==null;){switch(g=q,_=g.child,g.tag){case 0:case 11:case 14:case 15:go(4,g,g.return);break;case 1:$s(g,g.return);var R=g.stateNode;if(typeof R.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(N){Ae(r,n,N)}}break;case 5:$s(g,g.return);break;case 22:if(g.memoizedState!==null){Bg(m);continue}}_!==null?(_.return=g,q=_):Bg(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{s=m.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=iv("display",o))}catch(N){Ae(t,t.return,N)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(N){Ae(t,t.return,N)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ht(e,t),sn(t),r&4&&Ug(t);break;case 21:break;default:Ht(e,t),sn(t)}}function sn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Nw(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Co(s,""),r.flags&=-33);var i=Fg(t);rd(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Fg(t);nd(t,l,o);break;default:throw Error(F(161))}}catch(u){Ae(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function PS(t,e,n){q=t,Vw(t)}function Vw(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var s=q,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Ha;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||rt;l=Ha;var c=rt;if(Ha=o,(rt=u)&&!c)for(q=s;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?$g(s):u!==null?(u.return=o,q=u):$g(s);for(;i!==null;)q=i,Vw(i),i=i.sibling;q=s,Ha=l,rt=c}zg(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,q=i):zg(t)}}function zg(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:rt||Eu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!rt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:qt(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Ag(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ag(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&No(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}rt||e.flags&512&&td(e)}catch(g){Ae(e,e.return,g)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function Bg(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function $g(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Eu(4,e)}catch(u){Ae(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Ae(e,s,u)}}var i=e.return;try{td(e)}catch(u){Ae(e,i,u)}break;case 5:var o=e.return;try{td(e)}catch(u){Ae(e,o,u)}}}catch(u){Ae(e,e.return,u)}if(e===t){q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,q=l;break}q=e.return}}var NS=Math.ceil,Bl=$n.ReactCurrentDispatcher,kf=$n.ReactCurrentOwner,Ft=$n.ReactCurrentBatchConfig,oe=0,He=null,be=null,Ke=0,At=0,Hs=Dr(0),Me=0,Bo=null,cs=0,Tu=0,Cf=0,yo=null,gt=null,Rf=0,ui=1/0,Sn=null,$l=!1,sd=null,gr=null,qa=!1,lr=null,Hl=0,_o=0,id=null,cl=-1,hl=0;function dt(){return oe&6?Pe():cl!==-1?cl:cl=Pe()}function yr(t){return t.mode&1?oe&2&&Ke!==0?Ke&-Ke:pS.transition!==null?(hl===0&&(hl=_v()),hl):(t=le,t!==0||(t=window.event,t=t===void 0?16:Av(t.type)),t):1}function Yt(t,e,n,r){if(50<_o)throw _o=0,id=null,Error(F(185));na(t,n,r),(!(oe&2)||t!==He)&&(t===He&&(!(oe&2)&&(Tu|=n),Me===4&&nr(t,Ke)),Tt(t,r),n===1&&oe===0&&!(e.mode&1)&&(ui=Pe()+500,_u&&Vr()))}function Tt(t,e){var n=t.callbackNode;pI(t,e);var r=Cl(t,t===He?Ke:0);if(r===0)n!==null&&Jm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Jm(n),e===1)t.tag===0?fS(Hg.bind(null,t)):Hv(Hg.bind(null,t)),uS(function(){!(oe&6)&&Vr()}),n=null;else{switch(vv(r)){case 1:n=Zd;break;case 4:n=gv;break;case 16:n=kl;break;case 536870912:n=yv;break;default:n=kl}n=Bw(n,jw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function jw(t,e){if(cl=-1,hl=0,oe&6)throw Error(F(327));var n=t.callbackNode;if(Ys()&&t.callbackNode!==n)return null;var r=Cl(t,t===He?Ke:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ql(t,r);else{e=r;var s=oe;oe|=2;var i=Lw();(He!==t||Ke!==e)&&(Sn=null,ui=Pe()+500,ns(t,e));do try{VS();break}catch(l){Ow(t,l)}while(!0);ff(),Bl.current=i,oe=s,be!==null?e=0:(He=null,Ke=0,e=Me)}if(e!==0){if(e===2&&(s=bh(t),s!==0&&(r=s,e=od(t,s))),e===1)throw n=Bo,ns(t,0),nr(t,r),Tt(t,Pe()),n;if(e===6)nr(t,r);else{if(s=t.current.alternate,!(r&30)&&!bS(s)&&(e=ql(t,r),e===2&&(i=bh(t),i!==0&&(r=i,e=od(t,i))),e===1))throw n=Bo,ns(t,0),nr(t,r),Tt(t,Pe()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Kr(t,gt,Sn);break;case 3:if(nr(t,r),(r&130023424)===r&&(e=Rf+500-Pe(),10<e)){if(Cl(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){dt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Uh(Kr.bind(null,t,gt,Sn),e);break}Kr(t,gt,Sn);break;case 4:if(nr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-Qt(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*NS(r/1960))-r,10<r){t.timeoutHandle=Uh(Kr.bind(null,t,gt,Sn),r);break}Kr(t,gt,Sn);break;case 5:Kr(t,gt,Sn);break;default:throw Error(F(329))}}}return Tt(t,Pe()),t.callbackNode===n?jw.bind(null,t):null}function od(t,e){var n=yo;return t.current.memoizedState.isDehydrated&&(ns(t,e).flags|=256),t=ql(t,e),t!==2&&(e=gt,gt=n,e!==null&&ad(e)),t}function ad(t){gt===null?gt=t:gt.push.apply(gt,t)}function bS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Zt(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function nr(t,e){for(e&=~Cf,e&=~Tu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Qt(e),r=1<<n;t[n]=-1,e&=~r}}function Hg(t){if(oe&6)throw Error(F(327));Ys();var e=Cl(t,0);if(!(e&1))return Tt(t,Pe()),null;var n=ql(t,e);if(t.tag!==0&&n===2){var r=bh(t);r!==0&&(e=r,n=od(t,r))}if(n===1)throw n=Bo,ns(t,0),nr(t,e),Tt(t,Pe()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Kr(t,gt,Sn),Tt(t,Pe()),null}function xf(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(ui=Pe()+500,_u&&Vr())}}function hs(t){lr!==null&&lr.tag===0&&!(oe&6)&&Ys();var e=oe;oe|=1;var n=Ft.transition,r=le;try{if(Ft.transition=null,le=1,t)return t()}finally{le=r,Ft.transition=n,oe=e,!(oe&6)&&Vr()}}function Pf(){At=Hs.current,ge(Hs)}function ns(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,lS(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch(cf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&bl();break;case 3:ai(),ge(wt),ge(it),vf();break;case 5:_f(r);break;case 4:ai();break;case 13:ge(ve);break;case 19:ge(ve);break;case 10:pf(r.type._context);break;case 22:case 23:Pf()}n=n.return}if(He=t,be=t=_r(t.current,null),Ke=At=e,Me=0,Bo=null,Cf=Tu=cs=0,gt=yo=null,Jr!==null){for(e=0;e<Jr.length;e++)if(n=Jr[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Jr=null}return t}function Ow(t,e){do{var n=be;try{if(ff(),al.current=zl,Ul){for(var r=we.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Ul=!1}if(us=0,$e=Le=we=null,mo=!1,Fo=0,kf.current=null,n===null||n.return===null){Me=1,Bo=e,be=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=Ke,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var _=Ng(o);if(_!==null){_.flags&=-257,bg(_,o,l,i,e),_.mode&1&&Pg(i,c,e),e=_,u=c;var R=e.updateQueue;if(R===null){var N=new Set;N.add(u),e.updateQueue=N}else R.add(u);break e}else{if(!(e&1)){Pg(i,c,e),Nf();break e}u=Error(F(426))}}else if(_e&&l.mode&1){var j=Ng(o);if(j!==null){!(j.flags&65536)&&(j.flags|=256),bg(j,o,l,i,e),hf(li(u,l));break e}}i=u=li(u,l),Me!==4&&(Me=2),yo===null?yo=[i]:yo.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var I=vw(i,u,e);Sg(i,I);break e;case 1:l=u;var E=i.type,A=i.stateNode;if(!(i.flags&128)&&(typeof E.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(gr===null||!gr.has(A)))){i.flags|=65536,e&=-e,i.lanes|=e;var b=ww(i,l,e);Sg(i,b);break e}}i=i.return}while(i!==null)}Fw(n)}catch(x){e=x,be===n&&n!==null&&(be=n=n.return);continue}break}while(!0)}function Lw(){var t=Bl.current;return Bl.current=zl,t===null?zl:t}function Nf(){(Me===0||Me===3||Me===2)&&(Me=4),He===null||!(cs&268435455)&&!(Tu&268435455)||nr(He,Ke)}function ql(t,e){var n=oe;oe|=2;var r=Lw();(He!==t||Ke!==e)&&(Sn=null,ns(t,e));do try{DS();break}catch(s){Ow(t,s)}while(!0);if(ff(),oe=n,Bl.current=r,be!==null)throw Error(F(261));return He=null,Ke=0,Me}function DS(){for(;be!==null;)Mw(be)}function VS(){for(;be!==null&&!iI();)Mw(be)}function Mw(t){var e=zw(t.alternate,t,At);t.memoizedProps=t.pendingProps,e===null?Fw(t):be=e,kf.current=null}function Fw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=CS(n,e),n!==null){n.flags&=32767,be=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Me=6,be=null;return}}else if(n=kS(n,e,At),n!==null){be=n;return}if(e=e.sibling,e!==null){be=e;return}be=e=t}while(e!==null);Me===0&&(Me=5)}function Kr(t,e,n){var r=le,s=Ft.transition;try{Ft.transition=null,le=1,jS(t,e,n,r)}finally{Ft.transition=s,le=r}return null}function jS(t,e,n,r){do Ys();while(lr!==null);if(oe&6)throw Error(F(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(mI(t,i),t===He&&(be=He=null,Ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||qa||(qa=!0,Bw(kl,function(){return Ys(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ft.transition,Ft.transition=null;var o=le;le=1;var l=oe;oe|=4,kf.current=null,xS(t,n),Dw(n,t),tS(Mh),Rl=!!Lh,Mh=Lh=null,t.current=n,PS(n),oI(),oe=l,le=o,Ft.transition=i}else t.current=n;if(qa&&(qa=!1,lr=t,Hl=s),i=t.pendingLanes,i===0&&(gr=null),uI(n.stateNode),Tt(t,Pe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if($l)throw $l=!1,t=sd,sd=null,t;return Hl&1&&t.tag!==0&&Ys(),i=t.pendingLanes,i&1?t===id?_o++:(_o=0,id=t):_o=0,Vr(),null}function Ys(){if(lr!==null){var t=vv(Hl),e=Ft.transition,n=le;try{if(Ft.transition=null,le=16>t?16:t,lr===null)var r=!1;else{if(t=lr,lr=null,Hl=0,oe&6)throw Error(F(331));var s=oe;for(oe|=4,q=t.current;q!==null;){var i=q,o=i.child;if(q.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(q=c;q!==null;){var f=q;switch(f.tag){case 0:case 11:case 15:go(8,f,i)}var m=f.child;if(m!==null)m.return=f,q=m;else for(;q!==null;){f=q;var g=f.sibling,_=f.return;if(Pw(f),f===c){q=null;break}if(g!==null){g.return=_,q=g;break}q=_}}}var R=i.alternate;if(R!==null){var N=R.child;if(N!==null){R.child=null;do{var j=N.sibling;N.sibling=null,N=j}while(N!==null)}}q=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,q=o;else e:for(;q!==null;){if(i=q,i.flags&2048)switch(i.tag){case 0:case 11:case 15:go(9,i,i.return)}var I=i.sibling;if(I!==null){I.return=i.return,q=I;break e}q=i.return}}var E=t.current;for(q=E;q!==null;){o=q;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,q=A;else e:for(o=E;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Eu(9,l)}}catch(x){Ae(l,l.return,x)}if(l===o){q=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,q=b;break e}q=l.return}}if(oe=s,Vr(),cn&&typeof cn.onPostCommitFiberRoot=="function")try{cn.onPostCommitFiberRoot(fu,t)}catch{}r=!0}return r}finally{le=n,Ft.transition=e}}return!1}function qg(t,e,n){e=li(n,e),e=vw(t,e,1),t=mr(t,e,1),e=dt(),t!==null&&(na(t,1,e),Tt(t,e))}function Ae(t,e,n){if(t.tag===3)qg(t,t,n);else for(;e!==null;){if(e.tag===3){qg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gr===null||!gr.has(r))){t=li(n,t),t=ww(e,t,1),e=mr(e,t,1),t=dt(),e!==null&&(na(e,1,t),Tt(e,t));break}}e=e.return}}function OS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=dt(),t.pingedLanes|=t.suspendedLanes&n,He===t&&(Ke&n)===n&&(Me===4||Me===3&&(Ke&130023424)===Ke&&500>Pe()-Rf?ns(t,0):Cf|=n),Tt(t,e)}function Uw(t,e){e===0&&(t.mode&1?(e=ja,ja<<=1,!(ja&130023424)&&(ja=4194304)):e=1);var n=dt();t=On(t,e),t!==null&&(na(t,e,n),Tt(t,n))}function LS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Uw(t,n)}function MS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),Uw(t,n)}var zw;zw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||wt.current)vt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return vt=!1,AS(t,e,n);vt=!!(t.flags&131072)}else vt=!1,_e&&e.flags&1048576&&qv(e,jl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ul(t,e),t=e.pendingProps;var s=si(e,it.current);Qs(e,n),s=Ef(null,e,r,t,s,n);var i=Tf();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Et(r)?(i=!0,Dl(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,gf(e),s.updater=wu,e.stateNode=s,s._reactInternals=e,Gh(e,r,t,n),e=Yh(null,e,r,!0,i,n)):(e.tag=0,_e&&i&&uf(e),ct(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ul(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=US(r),t=qt(r,t),s){case 0:e=Qh(null,e,r,t,n);break e;case 1:e=jg(null,e,r,t,n);break e;case 11:e=Dg(null,e,r,t,n);break e;case 14:e=Vg(null,e,r,qt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:qt(r,s),Qh(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:qt(r,s),jg(t,e,r,s,n);case 3:e:{if(Sw(e),t===null)throw Error(F(387));r=e.pendingProps,i=e.memoizedState,s=i.element,Xv(t,e),Ml(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=li(Error(F(423)),e),e=Og(t,e,r,n,s);break e}else if(r!==s){s=li(Error(F(424)),e),e=Og(t,e,r,n,s);break e}else for(kt=pr(e.stateNode.containerInfo.firstChild),xt=e,_e=!0,Gt=null,n=Qv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ii(),r===s){e=Ln(t,e,n);break e}ct(t,e,r,n)}e=e.child}return e;case 5:return Jv(e),t===null&&Hh(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Fh(r,s)?o=null:i!==null&&Fh(r,i)&&(e.flags|=32),Iw(t,e),ct(t,e,o,n),e.child;case 6:return t===null&&Hh(e),null;case 13:return Aw(t,e,n);case 4:return yf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=oi(e,null,r,n):ct(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:qt(r,s),Dg(t,e,r,s,n);case 7:return ct(t,e,e.pendingProps,n),e.child;case 8:return ct(t,e,e.pendingProps.children,n),e.child;case 12:return ct(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,de(Ol,r._currentValue),r._currentValue=o,i!==null)if(Zt(i.value,o)){if(i.children===s.children&&!wt.current){e=Ln(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Nn(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),qh(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),qh(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ct(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Qs(e,n),s=Ut(s),r=r(s),e.flags|=1,ct(t,e,r,n),e.child;case 14:return r=e.type,s=qt(r,e.pendingProps),s=qt(r.type,s),Vg(t,e,r,s,n);case 15:return Ew(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:qt(r,s),ul(t,e),e.tag=1,Et(r)?(t=!0,Dl(e)):t=!1,Qs(e,n),_w(e,r,s),Gh(e,r,s,n),Yh(null,e,r,!0,t,n);case 19:return kw(t,e,n);case 22:return Tw(t,e,n)}throw Error(F(156,e.tag))};function Bw(t,e){return mv(t,e)}function FS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(t,e,n,r){return new FS(t,e,n,r)}function bf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function US(t){if(typeof t=="function")return bf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Yd)return 11;if(t===Xd)return 14}return 2}function _r(t,e){var n=t.alternate;return n===null?(n=Mt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function dl(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")bf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Vs:return rs(n.children,s,i,e);case Qd:o=8,s|=8;break;case yh:return t=Mt(12,n,e,s|2),t.elementType=yh,t.lanes=i,t;case _h:return t=Mt(13,n,e,s),t.elementType=_h,t.lanes=i,t;case vh:return t=Mt(19,n,e,s),t.elementType=vh,t.lanes=i,t;case J_:return Iu(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Y_:o=10;break e;case X_:o=9;break e;case Yd:o=11;break e;case Xd:o=14;break e;case Zn:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Mt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function rs(t,e,n,r){return t=Mt(7,t,r,e),t.lanes=n,t}function Iu(t,e,n,r){return t=Mt(22,t,r,e),t.elementType=J_,t.lanes=n,t.stateNode={isHidden:!1},t}function Yc(t,e,n){return t=Mt(6,t,null,e),t.lanes=n,t}function Xc(t,e,n){return e=Mt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function zS(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nc(0),this.expirationTimes=Nc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nc(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Df(t,e,n,r,s,i,o,l,u){return t=new zS(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Mt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gf(i),t}function BS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ds,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function $w(t){if(!t)return Sr;t=t._reactInternals;e:{if(vs(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Et(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(Et(n))return $v(t,n,e)}return e}function Hw(t,e,n,r,s,i,o,l,u){return t=Df(n,r,!0,t,s,i,o,l,u),t.context=$w(null),n=t.current,r=dt(),s=yr(n),i=Nn(r,s),i.callback=e??null,mr(n,i,s),t.current.lanes=s,na(t,s,r),Tt(t,r),t}function Su(t,e,n,r){var s=e.current,i=dt(),o=yr(s);return n=$w(n),e.context===null?e.context=n:e.pendingContext=n,e=Nn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=mr(s,e,o),t!==null&&(Yt(t,s,o,i),ol(t,s,o)),o}function Wl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Wg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Vf(t,e){Wg(t,e),(t=t.alternate)&&Wg(t,e)}function $S(){return null}var qw=typeof reportError=="function"?reportError:function(t){console.error(t)};function jf(t){this._internalRoot=t}Au.prototype.render=jf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Su(t,e,null,null)};Au.prototype.unmount=jf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;hs(function(){Su(null,t,null,null)}),e[jn]=null}};function Au(t){this._internalRoot=t}Au.prototype.unstable_scheduleHydration=function(t){if(t){var e=Tv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<tr.length&&e!==0&&e<tr[n].priority;n++);tr.splice(n,0,t),n===0&&Sv(t)}};function Of(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ku(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Gg(){}function HS(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=Wl(o);i.call(c)}}var o=Hw(e,r,t,0,null,!1,!1,"",Gg);return t._reactRootContainer=o,t[jn]=o.current,Vo(t.nodeType===8?t.parentNode:t),hs(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var c=Wl(u);l.call(c)}}var u=Df(t,0,!1,null,null,!1,!1,"",Gg);return t._reactRootContainer=u,t[jn]=u.current,Vo(t.nodeType===8?t.parentNode:t),hs(function(){Su(e,u,n,r)}),u}function Cu(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=Wl(o);l.call(u)}}Su(e,o,t,s)}else o=HS(n,e,t,s,r);return Wl(o)}wv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ro(e.pendingLanes);n!==0&&(ef(e,n|1),Tt(e,Pe()),!(oe&6)&&(ui=Pe()+500,Vr()))}break;case 13:hs(function(){var r=On(t,1);if(r!==null){var s=dt();Yt(r,t,1,s)}}),Vf(t,1)}};tf=function(t){if(t.tag===13){var e=On(t,134217728);if(e!==null){var n=dt();Yt(e,t,134217728,n)}Vf(t,134217728)}};Ev=function(t){if(t.tag===13){var e=yr(t),n=On(t,e);if(n!==null){var r=dt();Yt(n,t,e,r)}Vf(t,e)}};Tv=function(){return le};Iv=function(t,e){var n=le;try{return le=t,e()}finally{le=n}};xh=function(t,e,n){switch(e){case"input":if(Th(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=yu(r);if(!s)throw Error(F(90));ev(r),Th(r,s)}}}break;case"textarea":nv(t,n);break;case"select":e=n.value,e!=null&&qs(t,!!n.multiple,e,!1)}};uv=xf;cv=hs;var qS={usingClientEntryPoint:!1,Events:[sa,Ms,yu,av,lv,xf]},Ji={findFiberByHostInstance:Xr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},WS={bundleType:Ji.bundleType,version:Ji.version,rendererPackageName:Ji.rendererPackageName,rendererConfig:Ji.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$n.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=fv(t),t===null?null:t.stateNode},findFiberByHostInstance:Ji.findFiberByHostInstance||$S,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wa.isDisabled&&Wa.supportsFiber)try{fu=Wa.inject(WS),cn=Wa}catch{}}Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qS;Nt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Of(e))throw Error(F(200));return BS(t,e,null,n)};Nt.createRoot=function(t,e){if(!Of(t))throw Error(F(299));var n=!1,r="",s=qw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Df(t,1,!1,null,null,n,!1,r,s),t[jn]=e.current,Vo(t.nodeType===8?t.parentNode:t),new jf(e)};Nt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=fv(e),t=t===null?null:t.stateNode,t};Nt.flushSync=function(t){return hs(t)};Nt.hydrate=function(t,e,n){if(!ku(e))throw Error(F(200));return Cu(null,t,e,!0,n)};Nt.hydrateRoot=function(t,e,n){if(!Of(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=qw;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Hw(e,null,t,1,n??null,s,!1,i,o),t[jn]=e.current,Vo(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Au(e)};Nt.render=function(t,e,n){if(!ku(e))throw Error(F(200));return Cu(null,t,e,!1,n)};Nt.unmountComponentAtNode=function(t){if(!ku(t))throw Error(F(40));return t._reactRootContainer?(hs(function(){Cu(null,null,t,!1,function(){t._reactRootContainer=null,t[jn]=null})}),!0):!1};Nt.unstable_batchedUpdates=xf;Nt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ku(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Cu(t,e,n,!1,r)};Nt.version="18.3.1-next-f1338f8080-20240426";function Ww(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ww)}catch(t){console.error(t)}}Ww(),W_.exports=Nt;var GS=W_.exports,Kg=GS;mh.createRoot=Kg.createRoot,mh.hydrateRoot=Kg.hydrateRoot;const KS={},Qg=t=>{let e;const n=new Set,r=(f,m)=>{const g=typeof f=="function"?f(e):f;if(!Object.is(g,e)){const _=e;e=m??(typeof g!="object"||g===null)?g:Object.assign({},e,g),n.forEach(R=>R(e,_))}},s=()=>e,u={setState:r,getState:s,getInitialState:()=>c,subscribe:f=>(n.add(f),()=>n.delete(f)),destroy:()=>{(KS?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=e=t(r,s,u);return u},QS=t=>t?Qg(t):Qg;var Gw={exports:{}},Kw={},Qw={exports:{}},Yw={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ci=B;function YS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var XS=typeof Object.is=="function"?Object.is:YS,JS=ci.useState,ZS=ci.useEffect,eA=ci.useLayoutEffect,tA=ci.useDebugValue;function nA(t,e){var n=e(),r=JS({inst:{value:n,getSnapshot:e}}),s=r[0].inst,i=r[1];return eA(function(){s.value=n,s.getSnapshot=e,Jc(s)&&i({inst:s})},[t,n,e]),ZS(function(){return Jc(s)&&i({inst:s}),t(function(){Jc(s)&&i({inst:s})})},[t]),tA(n),n}function Jc(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!XS(t,n)}catch{return!0}}function rA(t,e){return e()}var sA=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?rA:nA;Yw.useSyncExternalStore=ci.useSyncExternalStore!==void 0?ci.useSyncExternalStore:sA;Qw.exports=Yw;var iA=Qw.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ru=B,oA=iA;function aA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var lA=typeof Object.is=="function"?Object.is:aA,uA=oA.useSyncExternalStore,cA=Ru.useRef,hA=Ru.useEffect,dA=Ru.useMemo,fA=Ru.useDebugValue;Kw.useSyncExternalStoreWithSelector=function(t,e,n,r,s){var i=cA(null);if(i.current===null){var o={hasValue:!1,value:null};i.current=o}else o=i.current;i=dA(function(){function u(_){if(!c){if(c=!0,f=_,_=r(_),s!==void 0&&o.hasValue){var R=o.value;if(s(R,_))return m=R}return m=_}if(R=m,lA(f,_))return R;var N=r(_);return s!==void 0&&s(R,N)?(f=_,R):(f=_,m=N)}var c=!1,f,m,g=n===void 0?null:n;return[function(){return u(e())},g===null?void 0:function(){return u(g())}]},[e,n,r,s]);var l=uA(t,i[0],i[1]);return hA(function(){o.hasValue=!0,o.value=l},[l]),fA(l),l};Gw.exports=Kw;var pA=Gw.exports;const mA=D_(pA),Xw={},{useDebugValue:gA}=H_,{useSyncExternalStoreWithSelector:yA}=mA;let Yg=!1;const _A=t=>t;function vA(t,e=_A,n){(Xw?"production":void 0)!=="production"&&n&&!Yg&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Yg=!0);const r=yA(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return gA(r),r}const Xg=t=>{(Xw?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?QS(t):t,n=(r,s)=>vA(e,r,s);return Object.assign(n,e),n},wA=t=>t?Xg(t):Xg,EA=()=>{};var Jg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},TA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Zw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,c=u?t[s+2]:0,f=i>>2,m=(i&3)<<4|l>>4;let g=(l&15)<<2|c>>6,_=c&63;u||(_=64,o||(g=64)),r.push(n[f],n[m],n[g],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Jw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):TA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||c==null||m==null)throw new IA;const g=i<<2|l>>4;if(r.push(g),c!==64){const _=l<<4&240|c>>2;if(r.push(_),m!==64){const R=c<<6&192|m;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class IA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const SA=function(t){const e=Jw(t);return Zw.encodeByteArray(e,!0)},Gl=function(t){return SA(t).replace(/\./g,"")},eE=function(t){try{return Zw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kA=()=>AA().__FIREBASE_DEFAULTS__,CA=()=>{if(typeof process>"u"||typeof Jg>"u")return;const t=Jg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},RA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&eE(t[1]);return e&&JSON.parse(e)},xu=()=>{try{return EA()||kA()||CA()||RA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},tE=t=>{var e,n;return(n=(e=xu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},nE=t=>{const e=tE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},rE=()=>{var t;return(t=xu())==null?void 0:t.config},sE=t=>{var e;return(e=xu())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Lf(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Gl(JSON.stringify(n)),Gl(JSON.stringify(o)),""].join(".")}const vo={};function PA(){const t={prod:[],emulator:[]};for(const e of Object.keys(vo))vo[e]?t.emulator.push(e):t.prod.push(e);return t}function NA(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Zg=!1;function Mf(t,e){if(typeof window>"u"||typeof document>"u"||!jr(window.location.host)||vo[t]===e||vo[t]||Zg)return;vo[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=PA().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,_){g.setAttribute("width","24"),g.setAttribute("id",_),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function c(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Zg=!0,o()},g}function f(g,_){g.setAttribute("id",_),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function m(){const g=NA(r),_=n("text"),R=document.getElementById(_)||document.createElement("span"),N=n("learnmore"),j=document.getElementById(N)||document.createElement("a"),I=n("preprendIcon"),E=document.getElementById(I)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const A=g.element;l(A),f(j,N);const b=c();u(E,I),A.append(E,R,j,b),document.body.appendChild(A)}i?(R.innerText="Preview backend disconnected.",E.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(E.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ot())}function DA(){var e;const t=(e=xu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function VA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function jA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function OA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function LA(){const t=ot();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function MA(){return!DA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function FA(){try{return typeof indexedDB=="object"}catch{return!1}}function UA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA="FirebaseError";class En extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=zA,Object.setPrototypeOf(this,En.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,oa.prototype.create)}}class oa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?BA(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new En(s,l,r)}}function BA(t,e){return t.replace($A,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const $A=/\{\$([^}]+)}/g;function HA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ds(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ey(i)&&ey(o)){if(!ds(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ey(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function qA(t,e){const n=new WA(t,e);return n.subscribe.bind(n)}class WA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");GA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Zc),s.error===void 0&&(s.error=Zc),s.complete===void 0&&(s.complete=Zc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function GA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Zc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(t){return t&&t._delegate?t._delegate:t}class Ar{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new xA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(YA(e))try{this.getOrInitializeService({instanceIdentifier:Qr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Qr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qr){return this.instances.has(e)}getOptions(e=Qr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:QA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Qr){return this.component?this.component.multipleInstances?e:Qr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function QA(t){return t===Qr?void 0:t}function YA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new KA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const JA={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},ZA=ne.INFO,ek={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},tk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=ek[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ff{constructor(e){this.name=e,this._logLevel=ZA,this._logHandler=tk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?JA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const nk=(t,e)=>e.some(n=>t instanceof n);let ty,ny;function rk(){return ty||(ty=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sk(){return ny||(ny=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const oE=new WeakMap,ld=new WeakMap,aE=new WeakMap,eh=new WeakMap,Uf=new WeakMap;function ik(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(vr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&oE.set(n,t)}).catch(()=>{}),Uf.set(e,t),e}function ok(t){if(ld.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ld.set(t,e)}let ud={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ld.get(t);if(e==="objectStoreNames")return t.objectStoreNames||aE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ak(t){ud=t(ud)}function lk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(th(this),e,...n);return aE.set(r,e.sort?e.sort():[e]),vr(r)}:sk().includes(t)?function(...e){return t.apply(th(this),e),vr(oE.get(this))}:function(...e){return vr(t.apply(th(this),e))}}function uk(t){return typeof t=="function"?lk(t):(t instanceof IDBTransaction&&ok(t),nk(t,rk())?new Proxy(t,ud):t)}function vr(t){if(t instanceof IDBRequest)return ik(t);if(eh.has(t))return eh.get(t);const e=uk(t);return e!==t&&(eh.set(t,e),Uf.set(e,t)),e}const th=t=>Uf.get(t);function ck(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=vr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(vr(o.result),u.oldVersion,u.newVersion,vr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const hk=["get","getKey","getAll","getAllKeys","count"],dk=["put","add","delete","clear"],nh=new Map;function ry(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(nh.get(e))return nh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=dk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||hk.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&u.done]))[0]};return nh.set(e,i),i}ak(t=>({...t,get:(e,n,r)=>ry(e,n)||t.get(e,n,r),has:(e,n)=>!!ry(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(pk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function pk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const cd="@firebase/app",sy="0.14.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=new Ff("@firebase/app"),mk="@firebase/app-compat",gk="@firebase/analytics-compat",yk="@firebase/analytics",_k="@firebase/app-check-compat",vk="@firebase/app-check",wk="@firebase/auth",Ek="@firebase/auth-compat",Tk="@firebase/database",Ik="@firebase/data-connect",Sk="@firebase/database-compat",Ak="@firebase/functions",kk="@firebase/functions-compat",Ck="@firebase/installations",Rk="@firebase/installations-compat",xk="@firebase/messaging",Pk="@firebase/messaging-compat",Nk="@firebase/performance",bk="@firebase/performance-compat",Dk="@firebase/remote-config",Vk="@firebase/remote-config-compat",jk="@firebase/storage",Ok="@firebase/storage-compat",Lk="@firebase/firestore",Mk="@firebase/ai",Fk="@firebase/firestore-compat",Uk="firebase",zk="12.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd="[DEFAULT]",Bk={[cd]:"fire-core",[mk]:"fire-core-compat",[yk]:"fire-analytics",[gk]:"fire-analytics-compat",[vk]:"fire-app-check",[_k]:"fire-app-check-compat",[wk]:"fire-auth",[Ek]:"fire-auth-compat",[Tk]:"fire-rtdb",[Ik]:"fire-data-connect",[Sk]:"fire-rtdb-compat",[Ak]:"fire-fn",[kk]:"fire-fn-compat",[Ck]:"fire-iid",[Rk]:"fire-iid-compat",[xk]:"fire-fcm",[Pk]:"fire-fcm-compat",[Nk]:"fire-perf",[bk]:"fire-perf-compat",[Dk]:"fire-rc",[Vk]:"fire-rc-compat",[jk]:"fire-gcs",[Ok]:"fire-gcs-compat",[Lk]:"fire-fst",[Fk]:"fire-fst-compat",[Mk]:"fire-vertex","fire-js":"fire-js",[Uk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl=new Map,$k=new Map,dd=new Map;function iy(t,e){try{t.container.addComponent(e)}catch(n){Mn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fs(t){const e=t.name;if(dd.has(e))return Mn.debug(`There were multiple attempts to register component ${e}.`),!1;dd.set(e,t);for(const n of Kl.values())iy(n,t);for(const n of $k.values())iy(n,t);return!0}function Pu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ot(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wr=new oa("app","Firebase",Hk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qk{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ar("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=zk;function lE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:hd,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw wr.create("bad-app-name",{appName:String(s)});if(n||(n=rE()),!n)throw wr.create("no-options");const i=Kl.get(s);if(i){if(ds(n,i.options)&&ds(r,i.config))return i;throw wr.create("duplicate-app",{appName:s})}const o=new XA(s);for(const u of dd.values())o.addComponent(u);const l=new qk(n,r,o);return Kl.set(s,l),l}function zf(t=hd){const e=Kl.get(t);if(!e&&t===hd&&rE())return lE();if(!e)throw wr.create("no-app",{appName:t});return e}function dn(t,e,n){let r=Bk[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mn.warn(o.join(" "));return}fs(new Ar(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wk="firebase-heartbeat-database",Gk=1,$o="firebase-heartbeat-store";let rh=null;function uE(){return rh||(rh=ck(Wk,Gk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore($o)}catch(n){console.warn(n)}}}}).catch(t=>{throw wr.create("idb-open",{originalErrorMessage:t.message})})),rh}async function Kk(t){try{const n=(await uE()).transaction($o),r=await n.objectStore($o).get(cE(t));return await n.done,r}catch(e){if(e instanceof En)Mn.warn(e.message);else{const n=wr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mn.warn(n.message)}}}async function oy(t,e){try{const r=(await uE()).transaction($o,"readwrite");await r.objectStore($o).put(e,cE(t)),await r.done}catch(n){if(n instanceof En)Mn.warn(n.message);else{const r=wr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Mn.warn(r.message)}}}function cE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qk=1024,Yk=30;class Xk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Zk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ay();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Yk){const o=eC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Mn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ay(),{heartbeatsToSend:r,unsentEntries:s}=Jk(this._heartbeatsCache.heartbeats),i=Gl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Mn.warn(n),""}}}function ay(){return new Date().toISOString().substring(0,10)}function Jk(t,e=Qk){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ly(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ly(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Zk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return FA()?UA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Kk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return oy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return oy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ly(t){return Gl(JSON.stringify({version:2,heartbeats:t})).length}function eC(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tC(t){fs(new Ar("platform-logger",e=>new fk(e),"PRIVATE")),fs(new Ar("heartbeat",e=>new Xk(e),"PRIVATE")),dn(cd,sy,t),dn(cd,sy,"esm2020"),dn("fire-js","")}tC("");var uy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Er,hE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function T(){}T.prototype=y.prototype,w.F=y.prototype,w.prototype=new T,w.prototype.constructor=w,w.D=function(C,S,P){for(var k=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)k[ce-2]=arguments[ce];return y.prototype[S].apply(C,k)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,y,T){T||(T=0);const C=Array(16);if(typeof y=="string")for(var S=0;S<16;++S)C[S]=y.charCodeAt(T++)|y.charCodeAt(T++)<<8|y.charCodeAt(T++)<<16|y.charCodeAt(T++)<<24;else for(S=0;S<16;++S)C[S]=y[T++]|y[T++]<<8|y[T++]<<16|y[T++]<<24;y=w.g[0],T=w.g[1],S=w.g[2];let P=w.g[3],k;k=y+(P^T&(S^P))+C[0]+3614090360&4294967295,y=T+(k<<7&4294967295|k>>>25),k=P+(S^y&(T^S))+C[1]+3905402710&4294967295,P=y+(k<<12&4294967295|k>>>20),k=S+(T^P&(y^T))+C[2]+606105819&4294967295,S=P+(k<<17&4294967295|k>>>15),k=T+(y^S&(P^y))+C[3]+3250441966&4294967295,T=S+(k<<22&4294967295|k>>>10),k=y+(P^T&(S^P))+C[4]+4118548399&4294967295,y=T+(k<<7&4294967295|k>>>25),k=P+(S^y&(T^S))+C[5]+1200080426&4294967295,P=y+(k<<12&4294967295|k>>>20),k=S+(T^P&(y^T))+C[6]+2821735955&4294967295,S=P+(k<<17&4294967295|k>>>15),k=T+(y^S&(P^y))+C[7]+4249261313&4294967295,T=S+(k<<22&4294967295|k>>>10),k=y+(P^T&(S^P))+C[8]+1770035416&4294967295,y=T+(k<<7&4294967295|k>>>25),k=P+(S^y&(T^S))+C[9]+2336552879&4294967295,P=y+(k<<12&4294967295|k>>>20),k=S+(T^P&(y^T))+C[10]+4294925233&4294967295,S=P+(k<<17&4294967295|k>>>15),k=T+(y^S&(P^y))+C[11]+2304563134&4294967295,T=S+(k<<22&4294967295|k>>>10),k=y+(P^T&(S^P))+C[12]+1804603682&4294967295,y=T+(k<<7&4294967295|k>>>25),k=P+(S^y&(T^S))+C[13]+4254626195&4294967295,P=y+(k<<12&4294967295|k>>>20),k=S+(T^P&(y^T))+C[14]+2792965006&4294967295,S=P+(k<<17&4294967295|k>>>15),k=T+(y^S&(P^y))+C[15]+1236535329&4294967295,T=S+(k<<22&4294967295|k>>>10),k=y+(S^P&(T^S))+C[1]+4129170786&4294967295,y=T+(k<<5&4294967295|k>>>27),k=P+(T^S&(y^T))+C[6]+3225465664&4294967295,P=y+(k<<9&4294967295|k>>>23),k=S+(y^T&(P^y))+C[11]+643717713&4294967295,S=P+(k<<14&4294967295|k>>>18),k=T+(P^y&(S^P))+C[0]+3921069994&4294967295,T=S+(k<<20&4294967295|k>>>12),k=y+(S^P&(T^S))+C[5]+3593408605&4294967295,y=T+(k<<5&4294967295|k>>>27),k=P+(T^S&(y^T))+C[10]+38016083&4294967295,P=y+(k<<9&4294967295|k>>>23),k=S+(y^T&(P^y))+C[15]+3634488961&4294967295,S=P+(k<<14&4294967295|k>>>18),k=T+(P^y&(S^P))+C[4]+3889429448&4294967295,T=S+(k<<20&4294967295|k>>>12),k=y+(S^P&(T^S))+C[9]+568446438&4294967295,y=T+(k<<5&4294967295|k>>>27),k=P+(T^S&(y^T))+C[14]+3275163606&4294967295,P=y+(k<<9&4294967295|k>>>23),k=S+(y^T&(P^y))+C[3]+4107603335&4294967295,S=P+(k<<14&4294967295|k>>>18),k=T+(P^y&(S^P))+C[8]+1163531501&4294967295,T=S+(k<<20&4294967295|k>>>12),k=y+(S^P&(T^S))+C[13]+2850285829&4294967295,y=T+(k<<5&4294967295|k>>>27),k=P+(T^S&(y^T))+C[2]+4243563512&4294967295,P=y+(k<<9&4294967295|k>>>23),k=S+(y^T&(P^y))+C[7]+1735328473&4294967295,S=P+(k<<14&4294967295|k>>>18),k=T+(P^y&(S^P))+C[12]+2368359562&4294967295,T=S+(k<<20&4294967295|k>>>12),k=y+(T^S^P)+C[5]+4294588738&4294967295,y=T+(k<<4&4294967295|k>>>28),k=P+(y^T^S)+C[8]+2272392833&4294967295,P=y+(k<<11&4294967295|k>>>21),k=S+(P^y^T)+C[11]+1839030562&4294967295,S=P+(k<<16&4294967295|k>>>16),k=T+(S^P^y)+C[14]+4259657740&4294967295,T=S+(k<<23&4294967295|k>>>9),k=y+(T^S^P)+C[1]+2763975236&4294967295,y=T+(k<<4&4294967295|k>>>28),k=P+(y^T^S)+C[4]+1272893353&4294967295,P=y+(k<<11&4294967295|k>>>21),k=S+(P^y^T)+C[7]+4139469664&4294967295,S=P+(k<<16&4294967295|k>>>16),k=T+(S^P^y)+C[10]+3200236656&4294967295,T=S+(k<<23&4294967295|k>>>9),k=y+(T^S^P)+C[13]+681279174&4294967295,y=T+(k<<4&4294967295|k>>>28),k=P+(y^T^S)+C[0]+3936430074&4294967295,P=y+(k<<11&4294967295|k>>>21),k=S+(P^y^T)+C[3]+3572445317&4294967295,S=P+(k<<16&4294967295|k>>>16),k=T+(S^P^y)+C[6]+76029189&4294967295,T=S+(k<<23&4294967295|k>>>9),k=y+(T^S^P)+C[9]+3654602809&4294967295,y=T+(k<<4&4294967295|k>>>28),k=P+(y^T^S)+C[12]+3873151461&4294967295,P=y+(k<<11&4294967295|k>>>21),k=S+(P^y^T)+C[15]+530742520&4294967295,S=P+(k<<16&4294967295|k>>>16),k=T+(S^P^y)+C[2]+3299628645&4294967295,T=S+(k<<23&4294967295|k>>>9),k=y+(S^(T|~P))+C[0]+4096336452&4294967295,y=T+(k<<6&4294967295|k>>>26),k=P+(T^(y|~S))+C[7]+1126891415&4294967295,P=y+(k<<10&4294967295|k>>>22),k=S+(y^(P|~T))+C[14]+2878612391&4294967295,S=P+(k<<15&4294967295|k>>>17),k=T+(P^(S|~y))+C[5]+4237533241&4294967295,T=S+(k<<21&4294967295|k>>>11),k=y+(S^(T|~P))+C[12]+1700485571&4294967295,y=T+(k<<6&4294967295|k>>>26),k=P+(T^(y|~S))+C[3]+2399980690&4294967295,P=y+(k<<10&4294967295|k>>>22),k=S+(y^(P|~T))+C[10]+4293915773&4294967295,S=P+(k<<15&4294967295|k>>>17),k=T+(P^(S|~y))+C[1]+2240044497&4294967295,T=S+(k<<21&4294967295|k>>>11),k=y+(S^(T|~P))+C[8]+1873313359&4294967295,y=T+(k<<6&4294967295|k>>>26),k=P+(T^(y|~S))+C[15]+4264355552&4294967295,P=y+(k<<10&4294967295|k>>>22),k=S+(y^(P|~T))+C[6]+2734768916&4294967295,S=P+(k<<15&4294967295|k>>>17),k=T+(P^(S|~y))+C[13]+1309151649&4294967295,T=S+(k<<21&4294967295|k>>>11),k=y+(S^(T|~P))+C[4]+4149444226&4294967295,y=T+(k<<6&4294967295|k>>>26),k=P+(T^(y|~S))+C[11]+3174756917&4294967295,P=y+(k<<10&4294967295|k>>>22),k=S+(y^(P|~T))+C[2]+718787259&4294967295,S=P+(k<<15&4294967295|k>>>17),k=T+(P^(S|~y))+C[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(S+(k<<21&4294967295|k>>>11))&4294967295,w.g[2]=w.g[2]+S&4294967295,w.g[3]=w.g[3]+P&4294967295}r.prototype.v=function(w,y){y===void 0&&(y=w.length);const T=y-this.blockSize,C=this.C;let S=this.h,P=0;for(;P<y;){if(S==0)for(;P<=T;)s(this,w,P),P+=this.blockSize;if(typeof w=="string"){for(;P<y;)if(C[S++]=w.charCodeAt(P++),S==this.blockSize){s(this,C),S=0;break}}else for(;P<y;)if(C[S++]=w[P++],S==this.blockSize){s(this,C),S=0;break}}this.h=S,this.o+=y},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;y=this.o*8;for(var T=w.length-8;T<w.length;++T)w[T]=y&255,y/=256;for(this.v(w),w=Array(16),y=0,T=0;T<4;++T)for(let C=0;C<32;C+=8)w[y++]=this.g[T]>>>C&255;return w};function i(w,y){var T=l;return Object.prototype.hasOwnProperty.call(T,w)?T[w]:T[w]=y(w)}function o(w,y){this.h=y;const T=[];let C=!0;for(let S=w.length-1;S>=0;S--){const P=w[S]|0;C&&P==y||(T[S]=P,C=!1)}this.g=T}var l={};function u(w){return-128<=w&&w<128?i(w,function(y){return new o([y|0],y<0?-1:0)}):new o([w|0],w<0?-1:0)}function c(w){if(isNaN(w)||!isFinite(w))return m;if(w<0)return j(c(-w));const y=[];let T=1;for(let C=0;w>=T;C++)y[C]=w/T|0,T*=4294967296;return new o(y,0)}function f(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return j(f(w.substring(1),y));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const T=c(Math.pow(y,8));let C=m;for(let P=0;P<w.length;P+=8){var S=Math.min(8,w.length-P);const k=parseInt(w.substring(P,P+S),y);S<8?(S=c(Math.pow(y,S)),C=C.j(S).add(c(k))):(C=C.j(T),C=C.add(c(k)))}return C}var m=u(0),g=u(1),_=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-j(this).m();let w=0,y=1;for(let T=0;T<this.g.length;T++){const C=this.i(T);w+=(C>=0?C:4294967296+C)*y,y*=4294967296}return w},t.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(R(this))return"0";if(N(this))return"-"+j(this).toString(w);const y=c(Math.pow(w,6));var T=this;let C="";for(;;){const S=b(T,y).g;T=I(T,S.j(y));let P=((T.g.length>0?T.g[0]:T.h)>>>0).toString(w);if(T=S,R(T))return P+C;for(;P.length<6;)P="0"+P;C=P+C}},t.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function R(w){if(w.h!=0)return!1;for(let y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function N(w){return w.h==-1}t.l=function(w){return w=I(this,w),N(w)?-1:R(w)?0:1};function j(w){const y=w.g.length,T=[];for(let C=0;C<y;C++)T[C]=~w.g[C];return new o(T,~w.h).add(g)}t.abs=function(){return N(this)?j(this):this},t.add=function(w){const y=Math.max(this.g.length,w.g.length),T=[];let C=0;for(let S=0;S<=y;S++){let P=C+(this.i(S)&65535)+(w.i(S)&65535),k=(P>>>16)+(this.i(S)>>>16)+(w.i(S)>>>16);C=k>>>16,P&=65535,k&=65535,T[S]=k<<16|P}return new o(T,T[T.length-1]&-2147483648?-1:0)};function I(w,y){return w.add(j(y))}t.j=function(w){if(R(this)||R(w))return m;if(N(this))return N(w)?j(this).j(j(w)):j(j(this).j(w));if(N(w))return j(this.j(j(w)));if(this.l(_)<0&&w.l(_)<0)return c(this.m()*w.m());const y=this.g.length+w.g.length,T=[];for(var C=0;C<2*y;C++)T[C]=0;for(C=0;C<this.g.length;C++)for(let S=0;S<w.g.length;S++){const P=this.i(C)>>>16,k=this.i(C)&65535,ce=w.i(S)>>>16,Ue=w.i(S)&65535;T[2*C+2*S]+=k*Ue,E(T,2*C+2*S),T[2*C+2*S+1]+=P*Ue,E(T,2*C+2*S+1),T[2*C+2*S+1]+=k*ce,E(T,2*C+2*S+1),T[2*C+2*S+2]+=P*ce,E(T,2*C+2*S+2)}for(w=0;w<y;w++)T[w]=T[2*w+1]<<16|T[2*w];for(w=y;w<2*y;w++)T[w]=0;return new o(T,0)};function E(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function A(w,y){this.g=w,this.h=y}function b(w,y){if(R(y))throw Error("division by zero");if(R(w))return new A(m,m);if(N(w))return y=b(j(w),y),new A(j(y.g),j(y.h));if(N(y))return y=b(w,j(y)),new A(j(y.g),y.h);if(w.g.length>30){if(N(w)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var T=g,C=y;C.l(w)<=0;)T=x(T),C=x(C);var S=O(T,1),P=O(C,1);for(C=O(C,2),T=O(T,2);!R(C);){var k=P.add(C);k.l(w)<=0&&(S=S.add(T),P=k),C=O(C,1),T=O(T,1)}return y=I(w,S.j(y)),new A(S,y)}for(S=m;w.l(y)>=0;){for(T=Math.max(1,Math.floor(w.m()/y.m())),C=Math.ceil(Math.log(T)/Math.LN2),C=C<=48?1:Math.pow(2,C-48),P=c(T),k=P.j(y);N(k)||k.l(w)>0;)T-=C,P=c(T),k=P.j(y);R(P)&&(P=g),S=S.add(P),w=I(w,k)}return new A(S,w)}t.B=function(w){return b(this,w).h},t.and=function(w){const y=Math.max(this.g.length,w.g.length),T=[];for(let C=0;C<y;C++)T[C]=this.i(C)&w.i(C);return new o(T,this.h&w.h)},t.or=function(w){const y=Math.max(this.g.length,w.g.length),T=[];for(let C=0;C<y;C++)T[C]=this.i(C)|w.i(C);return new o(T,this.h|w.h)},t.xor=function(w){const y=Math.max(this.g.length,w.g.length),T=[];for(let C=0;C<y;C++)T[C]=this.i(C)^w.i(C);return new o(T,this.h^w.h)};function x(w){const y=w.g.length+1,T=[];for(let C=0;C<y;C++)T[C]=w.i(C)<<1|w.i(C-1)>>>31;return new o(T,w.h)}function O(w,y){const T=y>>5;y%=32;const C=w.g.length-T,S=[];for(let P=0;P<C;P++)S[P]=y>0?w.i(P+T)>>>y|w.i(P+T+1)<<32-y:w.i(P+T);return new o(S,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,hE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,Er=o}).apply(typeof uy<"u"?uy:typeof self<"u"?self:typeof window<"u"?window:{});var Ga=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dE,io,fE,fl,fd,pE,mE,gE;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ga=="object"&&Ga];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var p=r;a=a.split(".");for(var v=0;v<a.length-1;v++){var D=a[v];if(!(D in p))break e;p=p[D]}a=a[a.length-1],v=p[a],h=h(v),h!=v&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var p=[],v;for(v in h)Object.prototype.hasOwnProperty.call(h,v)&&p.push([v,h[v]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,p){return a.call.apply(a.bind,arguments)}function c(a,h,p){return c=u,c.apply(null,arguments)}function f(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var v=p.slice();return v.push.apply(v,arguments),a.apply(this,v)}}function m(a,h){function p(){}p.prototype=h.prototype,a.Z=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(v,D,V){for(var U=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)U[ee-2]=arguments[ee];return h.prototype[D].apply(v,U)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function _(a){const h=a.length;if(h>0){const p=Array(h);for(let v=0;v<h;v++)p[v]=a[v];return p}return[]}function R(a,h){for(let v=1;v<arguments.length;v++){const D=arguments[v];var p=typeof D;if(p=p!="object"?p:D?Array.isArray(D)?"array":p:"null",p=="array"||p=="object"&&typeof D.length=="number"){p=a.length||0;const V=D.length||0;a.length=p+V;for(let U=0;U<V;U++)a[p+U]=D[U]}else a.push(D)}}class N{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function j(a){o.setTimeout(()=>{throw a},0)}function I(){var a=w;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class E{constructor(){this.h=this.g=null}add(h,p){const v=A.get();v.set(h,p),this.h?this.h.next=v:this.g=v,this.h=v}}var A=new N(()=>new b,a=>a.reset());class b{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let x,O=!1,w=new E,y=()=>{const a=Promise.resolve(void 0);x=()=>{a.then(T)}};function T(){for(var a;a=I();){try{a.h.call(a.g)}catch(p){j(p)}var h=A;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}O=!1}function C(){this.u=this.u,this.C=this.C}C.prototype.u=!1,C.prototype.dispose=function(){this.u||(this.u=!0,this.N())},C.prototype[Symbol.dispose]=function(){this.dispose()},C.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function S(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}S.prototype.h=function(){this.defaultPrevented=!0};var P=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,h),o.removeEventListener("test",p,h)}catch{}return a}();function k(a){return/^[\s\xa0]*$/.test(a)}function ce(a,h){S.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}m(ce,S),ce.prototype.init=function(a,h){const p=this.type=a.type,v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&ce.Z.h.call(this)},ce.prototype.h=function(){ce.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ue="closure_listenable_"+(Math.random()*1e6|0),Bt=0;function Fr(a,h,p,v,D){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!v,this.ha=D,this.key=++Bt,this.da=this.fa=!1}function $(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Q(a,h,p){for(const v in a)h.call(p,a[v],v,a)}function Z(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function ye(a){const h={};for(const p in a)h[p]=a[p];return h}const Re="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ur(a,h){let p,v;for(let D=1;D<arguments.length;D++){v=arguments[D];for(p in v)a[p]=v[p];for(let V=0;V<Re.length;V++)p=Re[V],Object.prototype.hasOwnProperty.call(v,p)&&(a[p]=v[p])}}function Dt(a){this.src=a,this.g={},this.h=0}Dt.prototype.add=function(a,h,p,v,D){const V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);const U=$t(a,h,v,D);return U>-1?(h=a[U],p||(h.fa=!1)):(h=new Fr(h,this.src,V,!!v,D),h.fa=p,a.push(h)),h};function zr(a,h){const p=h.type;if(p in a.g){var v=a.g[p],D=Array.prototype.indexOf.call(v,h,void 0),V;(V=D>=0)&&Array.prototype.splice.call(v,D,1),V&&($(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function $t(a,h,p,v){for(let D=0;D<a.length;++D){const V=a[D];if(!V.da&&V.listener==h&&V.capture==!!p&&V.ha==v)return D}return-1}var Hn="closure_lm_"+(Math.random()*1e6|0),ic={};function Bp(a,h,p,v,D){if(Array.isArray(h)){for(let V=0;V<h.length;V++)Bp(a,h[V],p,v,D);return null}return p=qp(p),a&&a[Ue]?a.J(h,p,l(v)?!!v.capture:!1,D):G0(a,h,p,!1,v,D)}function G0(a,h,p,v,D,V){if(!h)throw Error("Invalid event type");const U=l(D)?!!D.capture:!!D;let ee=ac(a);if(ee||(a[Hn]=ee=new Dt(a)),p=ee.add(h,p,v,U,V),p.proxy)return p;if(v=K0(),p.proxy=v,v.src=a,v.listener=p,a.addEventListener)P||(D=U),D===void 0&&(D=!1),a.addEventListener(h.toString(),v,D);else if(a.attachEvent)a.attachEvent(Hp(h.toString()),v);else if(a.addListener&&a.removeListener)a.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return p}function K0(){function a(p){return h.call(a.src,a.listener,p)}const h=Q0;return a}function $p(a,h,p,v,D){if(Array.isArray(h))for(var V=0;V<h.length;V++)$p(a,h[V],p,v,D);else v=l(v)?!!v.capture:!!v,p=qp(p),a&&a[Ue]?(a=a.i,V=String(h).toString(),V in a.g&&(h=a.g[V],p=$t(h,p,v,D),p>-1&&($(h[p]),Array.prototype.splice.call(h,p,1),h.length==0&&(delete a.g[V],a.h--)))):a&&(a=ac(a))&&(h=a.g[h.toString()],a=-1,h&&(a=$t(h,p,v,D)),(p=a>-1?h[a]:null)&&oc(p))}function oc(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Ue])zr(h.i,a);else{var p=a.type,v=a.proxy;h.removeEventListener?h.removeEventListener(p,v,a.capture):h.detachEvent?h.detachEvent(Hp(p),v):h.addListener&&h.removeListener&&h.removeListener(v),(p=ac(h))?(zr(p,a),p.h==0&&(p.src=null,h[Hn]=null)):$(a)}}}function Hp(a){return a in ic?ic[a]:ic[a]="on"+a}function Q0(a,h){if(a.da)a=!0;else{h=new ce(h,this);const p=a.listener,v=a.ha||a.src;a.fa&&oc(a),a=p.call(v,h)}return a}function ac(a){return a=a[Hn],a instanceof Dt?a:null}var lc="__closure_events_fn_"+(Math.random()*1e9>>>0);function qp(a){return typeof a=="function"?a:(a[lc]||(a[lc]=function(h){return a.handleEvent(h)}),a[lc])}function Je(){C.call(this),this.i=new Dt(this),this.M=this,this.G=null}m(Je,C),Je.prototype[Ue]=!0,Je.prototype.removeEventListener=function(a,h,p,v){$p(this,a,h,p,v)};function at(a,h){var p,v=a.G;if(v)for(p=[];v;v=v.G)p.push(v);if(a=a.M,v=h.type||h,typeof h=="string")h=new S(h,a);else if(h instanceof S)h.target=h.target||a;else{var D=h;h=new S(v,a),Ur(h,D)}D=!0;let V,U;if(p)for(U=p.length-1;U>=0;U--)V=h.g=p[U],D=_a(V,v,!0,h)&&D;if(V=h.g=a,D=_a(V,v,!0,h)&&D,D=_a(V,v,!1,h)&&D,p)for(U=0;U<p.length;U++)V=h.g=p[U],D=_a(V,v,!1,h)&&D}Je.prototype.N=function(){if(Je.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const p=a.g[h];for(let v=0;v<p.length;v++)$(p[v]);delete a.g[h],a.h--}}this.G=null},Je.prototype.J=function(a,h,p,v){return this.i.add(String(a),h,!1,p,v)},Je.prototype.K=function(a,h,p,v){return this.i.add(String(a),h,!0,p,v)};function _a(a,h,p,v){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let D=!0;for(let V=0;V<h.length;++V){const U=h[V];if(U&&!U.da&&U.capture==p){const ee=U.listener,Oe=U.ha||U.src;U.fa&&zr(a.i,U),D=ee.call(Oe,v)!==!1&&D}}return D&&!v.defaultPrevented}function Y0(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Wp(a){a.g=Y0(()=>{a.g=null,a.i&&(a.i=!1,Wp(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class X0 extends C{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Wp(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xi(a){C.call(this),this.h=a,this.g={}}m(xi,C);var Gp=[];function Kp(a){Q(a.g,function(h,p){this.g.hasOwnProperty(p)&&oc(h)},a),a.g={}}xi.prototype.N=function(){xi.Z.N.call(this),Kp(this)},xi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var uc=o.JSON.stringify,J0=o.JSON.parse,Z0=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Qp(){}function Yp(){}var Pi={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function cc(){S.call(this,"d")}m(cc,S);function hc(){S.call(this,"c")}m(hc,S);var Br={},Xp=null;function va(){return Xp=Xp||new Je}Br.Ia="serverreachability";function Jp(a){S.call(this,Br.Ia,a)}m(Jp,S);function Ni(a){const h=va();at(h,new Jp(h))}Br.STAT_EVENT="statevent";function Zp(a,h){S.call(this,Br.STAT_EVENT,a),this.stat=h}m(Zp,S);function lt(a){const h=va();at(h,new Zp(h,a))}Br.Ja="timingevent";function em(a,h){S.call(this,Br.Ja,a),this.size=h}m(em,S);function bi(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Di(){this.g=!0}Di.prototype.ua=function(){this.g=!1};function eT(a,h,p,v,D,V){a.info(function(){if(a.g)if(V){var U="",ee=V.split("&");for(let ue=0;ue<ee.length;ue++){var Oe=ee[ue].split("=");if(Oe.length>1){const ze=Oe[0];Oe=Oe[1];const rn=ze.split("_");U=rn.length>=2&&rn[1]=="type"?U+(ze+"="+Oe+"&"):U+(ze+"=redacted&")}}}else U=null;else U=V;return"XMLHTTP REQ ("+v+") [attempt "+D+"]: "+h+`
`+p+`
`+U})}function tT(a,h,p,v,D,V,U){a.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+D+"]: "+h+`
`+p+`
`+V+" "+U})}function As(a,h,p,v){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+rT(a,p)+(v?" "+v:"")})}function nT(a,h){a.info(function(){return"TIMEOUT: "+h})}Di.prototype.info=function(){};function rT(a,h){if(!a.g)return h;if(!h)return null;try{const V=JSON.parse(h);if(V){for(a=0;a<V.length;a++)if(Array.isArray(V[a])){var p=V[a];if(!(p.length<2)){var v=p[1];if(Array.isArray(v)&&!(v.length<1)){var D=v[0];if(D!="noop"&&D!="stop"&&D!="close")for(let U=1;U<v.length;U++)v[U]=""}}}}return uc(V)}catch{return h}}var wa={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},tm={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},nm;function dc(){}m(dc,Qp),dc.prototype.g=function(){return new XMLHttpRequest},nm=new dc;function Vi(a){return encodeURIComponent(String(a))}function sT(a){var h=1;a=a.split(":");const p=[];for(;h>0&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function qn(a,h,p,v){this.j=a,this.i=h,this.l=p,this.S=v||1,this.V=new xi(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new rm}function rm(){this.i=null,this.g="",this.h=!1}var sm={},fc={};function pc(a,h,p){a.M=1,a.A=Ta(nn(h)),a.u=p,a.R=!0,im(a,null)}function im(a,h){a.F=Date.now(),Ea(a),a.B=nn(a.A);var p=a.B,v=a.S;Array.isArray(v)||(v=[String(v)]),_m(p.i,"t",v),a.C=0,p=a.j.L,a.h=new rm,a.g=Om(a.j,p?h:null,!a.u),a.P>0&&(a.O=new X0(c(a.Y,a,a.g),a.P)),h=a.V,p=a.g,v=a.ba;var D="readystatechange";Array.isArray(D)||(D&&(Gp[0]=D.toString()),D=Gp);for(let V=0;V<D.length;V++){const U=Bp(p,D[V],v||h.handleEvent,!1,h.h||h);if(!U)break;h.g[U.key]=U}h=a.J?ye(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Ni(),eT(a.i,a.v,a.B,a.l,a.S,a.u)}qn.prototype.ba=function(a){a=a.target;const h=this.O;h&&Kn(a)==3?h.j():this.Y(a)},qn.prototype.Y=function(a){try{if(a==this.g)e:{const ee=Kn(this.g),Oe=this.g.ya(),ue=this.g.ca();if(!(ee<3)&&(ee!=3||this.g&&(this.h.h||this.g.la()||Am(this.g)))){this.K||ee!=4||Oe==7||(Oe==8||ue<=0?Ni(3):Ni(2)),mc(this);var h=this.g.ca();this.X=h;var p=iT(this);if(this.o=h==200,tT(this.i,this.v,this.B,this.l,this.S,ee,h),this.o){if(this.U&&!this.L){t:{if(this.g){var v,D=this.g;if((v=D.g?D.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!k(v)){var V=v;break t}}V=null}if(a=V)As(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,gc(this,a);else{this.o=!1,this.m=3,lt(12),$r(this),ji(this);break e}}if(this.R){a=!0;let ze;for(;!this.K&&this.C<p.length;)if(ze=oT(this,p),ze==fc){ee==4&&(this.m=4,lt(14),a=!1),As(this.i,this.l,null,"[Incomplete Response]");break}else if(ze==sm){this.m=4,lt(15),As(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else As(this.i,this.l,ze,null),gc(this,ze);if(om(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ee!=4||p.length!=0||this.h.h||(this.m=1,lt(16),a=!1),this.o=this.o&&a,!a)As(this.i,this.l,p,"[Invalid Chunked Response]"),$r(this),ji(this);else if(p.length>0&&!this.W){this.W=!0;var U=this.j;U.g==this&&U.aa&&!U.P&&(U.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),Sc(U),U.P=!0,lt(11))}}else As(this.i,this.l,p,null),gc(this,p);ee==4&&$r(this),this.o&&!this.K&&(ee==4?bm(this.j,this):(this.o=!1,Ea(this)))}else wT(this.g),h==400&&p.indexOf("Unknown SID")>0?(this.m=3,lt(12)):(this.m=0,lt(13)),$r(this),ji(this)}}}catch{}finally{}};function iT(a){if(!om(a))return a.g.la();const h=Am(a.g);if(h==="")return"";let p="";const v=h.length,D=Kn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return $r(a),ji(a),"";a.h.i=new o.TextDecoder}for(let V=0;V<v;V++)a.h.h=!0,p+=a.h.i.decode(h[V],{stream:!(D&&V==v-1)});return h.length=0,a.h.g+=p,a.C=0,a.h.g}function om(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function oT(a,h){var p=a.C,v=h.indexOf(`
`,p);return v==-1?fc:(p=Number(h.substring(p,v)),isNaN(p)?sm:(v+=1,v+p>h.length?fc:(h=h.slice(v,v+p),a.C=v+p,h)))}qn.prototype.cancel=function(){this.K=!0,$r(this)};function Ea(a){a.T=Date.now()+a.H,am(a,a.H)}function am(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=bi(c(a.aa,a),h)}function mc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}qn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(nT(this.i,this.B),this.M!=2&&(Ni(),lt(17)),$r(this),this.m=2,ji(this)):am(this,this.T-a)};function ji(a){a.j.I==0||a.K||bm(a.j,a)}function $r(a){mc(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Kp(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function gc(a,h){try{var p=a.j;if(p.I!=0&&(p.g==a||yc(p.h,a))){if(!a.L&&yc(p.h,a)&&p.I==3){try{var v=p.Ba.g.parse(h)}catch{v=null}if(Array.isArray(v)&&v.length==3){var D=v;if(D[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)Ca(p),Aa(p);else break e;Ic(p),lt(18)}}else p.xa=D[1],0<p.xa-p.K&&D[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=bi(c(p.Va,p),6e3));cm(p.h)<=1&&p.ta&&(p.ta=void 0)}else qr(p,11)}else if((a.L||p.g==a)&&Ca(p),!k(h))for(D=p.Ba.g.parse(h),h=0;h<D.length;h++){let ue=D[h];const ze=ue[0];if(!(ze<=p.K))if(p.K=ze,ue=ue[1],p.I==2)if(ue[0]=="c"){p.M=ue[1],p.ba=ue[2];const rn=ue[3];rn!=null&&(p.ka=rn,p.j.info("VER="+p.ka));const Wr=ue[4];Wr!=null&&(p.za=Wr,p.j.info("SVER="+p.za));const Qn=ue[5];Qn!=null&&typeof Qn=="number"&&Qn>0&&(v=1.5*Qn,p.O=v,p.j.info("backChannelRequestTimeoutMs_="+v)),v=p;const Yn=a.g;if(Yn){const xa=Yn.g?Yn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(xa){var V=v.h;V.g||xa.indexOf("spdy")==-1&&xa.indexOf("quic")==-1&&xa.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(_c(V,V.h),V.h=null))}if(v.G){const Ac=Yn.g?Yn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ac&&(v.wa=Ac,fe(v.J,v.G,Ac))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),v=p;var U=a;if(v.na=jm(v,v.L?v.ba:null,v.W),U.L){hm(v.h,U);var ee=U,Oe=v.O;Oe&&(ee.H=Oe),ee.D&&(mc(ee),Ea(ee)),v.g=U}else Pm(v);p.i.length>0&&ka(p)}else ue[0]!="stop"&&ue[0]!="close"||qr(p,7);else p.I==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?qr(p,7):Tc(p):ue[0]!="noop"&&p.l&&p.l.qa(ue),p.A=0)}}Ni(4)}catch{}}var aT=class{constructor(a,h){this.g=a,this.map=h}};function lm(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function um(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function cm(a){return a.h?1:a.g?a.g.size:0}function yc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function _c(a,h){a.g?a.g.add(h):a.h=h}function hm(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}lm.prototype.cancel=function(){if(this.i=dm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function dm(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.G);return h}return _(a.i)}var fm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lT(a,h){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const v=a[p].indexOf("=");let D,V=null;v>=0?(D=a[p].substring(0,v),V=a[p].substring(v+1)):D=a[p],h(D,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function Wn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Wn?(this.l=a.l,Oi(this,a.j),this.o=a.o,this.g=a.g,Li(this,a.u),this.h=a.h,vc(this,vm(a.i)),this.m=a.m):a&&(h=String(a).match(fm))?(this.l=!1,Oi(this,h[1]||"",!0),this.o=Mi(h[2]||""),this.g=Mi(h[3]||"",!0),Li(this,h[4]),this.h=Mi(h[5]||"",!0),vc(this,h[6]||"",!0),this.m=Mi(h[7]||"")):(this.l=!1,this.i=new Ui(null,this.l))}Wn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Fi(h,pm,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Fi(h,pm,!0),"@"),a.push(Vi(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Fi(p,p.charAt(0)=="/"?hT:cT,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Fi(p,fT)),a.join("")},Wn.prototype.resolve=function(a){const h=nn(this);let p=!!a.j;p?Oi(h,a.j):p=!!a.o,p?h.o=a.o:p=!!a.g,p?h.g=a.g:p=a.u!=null;var v=a.h;if(p)Li(h,a.u);else if(p=!!a.h){if(v.charAt(0)!="/")if(this.g&&!this.h)v="/"+v;else{var D=h.h.lastIndexOf("/");D!=-1&&(v=h.h.slice(0,D+1)+v)}if(D=v,D==".."||D==".")v="";else if(D.indexOf("./")!=-1||D.indexOf("/.")!=-1){v=D.lastIndexOf("/",0)==0,D=D.split("/");const V=[];for(let U=0;U<D.length;){const ee=D[U++];ee=="."?v&&U==D.length&&V.push(""):ee==".."?((V.length>1||V.length==1&&V[0]!="")&&V.pop(),v&&U==D.length&&V.push("")):(V.push(ee),v=!0)}v=V.join("/")}else v=D}return p?h.h=v:p=a.i.toString()!=="",p?vc(h,vm(a.i)):p=!!a.m,p&&(h.m=a.m),h};function nn(a){return new Wn(a)}function Oi(a,h,p){a.j=p?Mi(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Li(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function vc(a,h,p){h instanceof Ui?(a.i=h,pT(a.i,a.l)):(p||(h=Fi(h,dT)),a.i=new Ui(h,a.l))}function fe(a,h,p){a.i.set(h,p)}function Ta(a){return fe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Mi(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Fi(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,uT),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function uT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var pm=/[#\/\?@]/g,cT=/[#\?:]/g,hT=/[#\?]/g,dT=/[#\?@]/g,fT=/#/g;function Ui(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Hr(a){a.g||(a.g=new Map,a.h=0,a.i&&lT(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=Ui.prototype,t.add=function(a,h){Hr(this),this.i=null,a=ks(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function mm(a,h){Hr(a),h=ks(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function gm(a,h){return Hr(a),h=ks(a,h),a.g.has(h)}t.forEach=function(a,h){Hr(this),this.g.forEach(function(p,v){p.forEach(function(D){a.call(h,D,v,this)},this)},this)};function ym(a,h){Hr(a);let p=[];if(typeof h=="string")gm(a,h)&&(p=p.concat(a.g.get(ks(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)p=p.concat(a[h]);return p}t.set=function(a,h){return Hr(this),this.i=null,a=ks(this,a),gm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=ym(this,a),a.length>0?String(a[0]):h):h};function _m(a,h,p){mm(a,h),p.length>0&&(a.i=null,a.g.set(ks(a,h),_(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let v=0;v<h.length;v++){var p=h[v];const D=Vi(p);p=ym(this,p);for(let V=0;V<p.length;V++){let U=D;p[V]!==""&&(U+="="+Vi(p[V])),a.push(U)}}return this.i=a.join("&")};function vm(a){const h=new Ui;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function ks(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function pT(a,h){h&&!a.j&&(Hr(a),a.i=null,a.g.forEach(function(p,v){const D=v.toLowerCase();v!=D&&(mm(this,v),_m(this,D,p))},a)),a.j=h}function mT(a,h){const p=new Di;if(o.Image){const v=new Image;v.onload=f(Gn,p,"TestLoadImage: loaded",!0,h,v),v.onerror=f(Gn,p,"TestLoadImage: error",!1,h,v),v.onabort=f(Gn,p,"TestLoadImage: abort",!1,h,v),v.ontimeout=f(Gn,p,"TestLoadImage: timeout",!1,h,v),o.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=a}else h(!1)}function gT(a,h){const p=new Di,v=new AbortController,D=setTimeout(()=>{v.abort(),Gn(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:v.signal}).then(V=>{clearTimeout(D),V.ok?Gn(p,"TestPingServer: ok",!0,h):Gn(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(D),Gn(p,"TestPingServer: error",!1,h)})}function Gn(a,h,p,v,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),v(p)}catch{}}function yT(){this.g=new Z0}function wc(a){this.i=a.Sb||null,this.h=a.ab||!1}m(wc,Qp),wc.prototype.g=function(){return new Ia(this.i,this.h)};function Ia(a,h){Je.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(Ia,Je),t=Ia.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Bi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,zi(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Bi(this)),this.g&&(this.readyState=3,Bi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;wm(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function wm(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?zi(this):Bi(this),this.readyState==3&&wm(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,zi(this))},t.Na=function(a){this.g&&(this.response=a,zi(this))},t.ga=function(){this.g&&zi(this)};function zi(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Bi(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function Bi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ia.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Em(a){let h="";return Q(a,function(p,v){h+=v,h+=":",h+=p,h+=`\r
`}),h}function Ec(a,h,p){e:{for(v in p){var v=!1;break e}v=!0}v||(p=Em(p),typeof a=="string"?p!=null&&Vi(p):fe(a,h,p))}function Se(a){Je.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(Se,Je);var _T=/^https?$/i,vT=["POST","PUT"];t=Se.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,p,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():nm.g(),this.g.onreadystatechange=g(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){Tm(this,V);return}if(a=p||"",p=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var D in v)p.set(D,v[D]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const V of v.keys())p.set(V,v.get(V));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(p.keys()).find(V=>V.toLowerCase()=="content-type"),D=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(vT,h,void 0)>=0)||v||D||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,U]of p)this.g.setRequestHeader(V,U);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(V){Tm(this,V)}};function Tm(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,Im(a),Sa(a)}function Im(a){a.A||(a.A=!0,at(a,"complete"),at(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,at(this,"complete"),at(this,"abort"),Sa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Sa(this,!0)),Se.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Sm(this):this.Xa())},t.Xa=function(){Sm(this)};function Sm(a){if(a.h&&typeof i<"u"){if(a.v&&Kn(a)==4)setTimeout(a.Ca.bind(a),0);else if(at(a,"readystatechange"),Kn(a)==4){a.h=!1;try{const V=a.ca();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var v;if(v=V===0){let U=String(a.D).match(fm)[1]||null;!U&&o.self&&o.self.location&&(U=o.self.location.protocol.slice(0,-1)),v=!_T.test(U?U.toLowerCase():"")}p=v}if(p)at(a,"complete"),at(a,"success");else{a.o=6;try{var D=Kn(a)>2?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.ca()+"]",Im(a)}}finally{Sa(a)}}}}function Sa(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,h||at(a,"ready");try{p.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Kn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Kn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),J0(h)}};function Am(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function wT(a){const h={};a=(a.g&&Kn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<a.length;v++){if(k(a[v]))continue;var p=sT(a[v]);const D=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const V=h[D]||[];h[D]=V,V.push(p)}Z(h,function(v){return v.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function $i(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function km(a){this.za=0,this.i=[],this.j=new Di,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=$i("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=$i("baseRetryDelayMs",5e3,a),this.Za=$i("retryDelaySeedMs",1e4,a),this.Ta=$i("forwardChannelMaxRetries",2,a),this.va=$i("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new lm(a&&a.concurrentRequestLimit),this.Ba=new yT,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=km.prototype,t.ka=8,t.I=1,t.connect=function(a,h,p,v){lt(0),this.W=a,this.H=h||{},p&&v!==void 0&&(this.H.OSID=p,this.H.OAID=v),this.F=this.X,this.J=jm(this,null,this.W),ka(this)};function Tc(a){if(Cm(a),a.I==3){var h=a.V++,p=nn(a.J);if(fe(p,"SID",a.M),fe(p,"RID",h),fe(p,"TYPE","terminate"),Hi(a,p),h=new qn(a,a.j,h),h.M=2,h.A=Ta(nn(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=h.A,p=!0),p||(h.g=Om(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Ea(h)}Vm(a)}function Aa(a){a.g&&(Sc(a),a.g.cancel(),a.g=null)}function Cm(a){Aa(a),a.v&&(o.clearTimeout(a.v),a.v=null),Ca(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function ka(a){if(!um(a.h)&&!a.m){a.m=!0;var h=a.Ea;x||y(),O||(x(),O=!0),w.add(h,a),a.D=0}}function ET(a,h){return cm(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=bi(c(a.Ea,a,h),Dm(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const D=new qn(this,this.j,a);let V=this.o;if(this.U&&(V?(V=ye(V),Ur(V,this.U)):V=this.U),this.u!==null||this.R||(D.J=V,V=null),this.S)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var v=this.i[p];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(h+=v,h>4096){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=xm(this,D,h),p=nn(this.J),fe(p,"RID",a),fe(p,"CVER",22),this.G&&fe(p,"X-HTTP-Session-Id",this.G),Hi(this,p),V&&(this.R?h="headers="+Vi(Em(V))+"&"+h:this.u&&Ec(p,this.u,V)),_c(this.h,D),this.Ra&&fe(p,"TYPE","init"),this.S?(fe(p,"$req",h),fe(p,"SID","null"),D.U=!0,pc(D,p,null)):pc(D,p,h),this.I=2}}else this.I==3&&(a?Rm(this,a):this.i.length==0||um(this.h)||Rm(this))};function Rm(a,h){var p;h?p=h.l:p=a.V++;const v=nn(a.J);fe(v,"SID",a.M),fe(v,"RID",p),fe(v,"AID",a.K),Hi(a,v),a.u&&a.o&&Ec(v,a.u,a.o),p=new qn(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),h&&(a.i=h.G.concat(a.i)),h=xm(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),_c(a.h,p),pc(p,v,h)}function Hi(a,h){a.H&&Q(a.H,function(p,v){fe(h,v,p)}),a.l&&Q({},function(p,v){fe(h,v,p)})}function xm(a,h,p){p=Math.min(a.i.length,p);const v=a.l?c(a.l.Ka,a.l,a):null;e:{var D=a.i;let ee=-1;for(;;){const Oe=["count="+p];ee==-1?p>0?(ee=D[0].g,Oe.push("ofs="+ee)):ee=0:Oe.push("ofs="+ee);let ue=!0;for(let ze=0;ze<p;ze++){var V=D[ze].g;const rn=D[ze].map;if(V-=ee,V<0)ee=Math.max(0,D[ze].g-100),ue=!1;else try{V="req"+V+"_"||"";try{var U=rn instanceof Map?rn:Object.entries(rn);for(const[Wr,Qn]of U){let Yn=Qn;l(Qn)&&(Yn=uc(Qn)),Oe.push(V+Wr+"="+encodeURIComponent(Yn))}}catch(Wr){throw Oe.push(V+"type="+encodeURIComponent("_badmap")),Wr}}catch{v&&v(rn)}}if(ue){U=Oe.join("&");break e}}U=void 0}return a=a.i.splice(0,p),h.G=a,U}function Pm(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;x||y(),O||(x(),O=!0),w.add(h,a),a.A=0}}function Ic(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=bi(c(a.Da,a),Dm(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Nm(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=bi(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,lt(10),Aa(this),Nm(this))};function Sc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Nm(a){a.g=new qn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=nn(a.na);fe(h,"RID","rpc"),fe(h,"SID",a.M),fe(h,"AID",a.K),fe(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&fe(h,"TO",a.ia),fe(h,"TYPE","xmlhttp"),Hi(a,h),a.u&&a.o&&Ec(h,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=Ta(nn(h)),p.u=null,p.R=!0,im(p,a)}t.Va=function(){this.C!=null&&(this.C=null,Aa(this),Ic(this),lt(19))};function Ca(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function bm(a,h){var p=null;if(a.g==h){Ca(a),Sc(a),a.g=null;var v=2}else if(yc(a.h,h))p=h.G,hm(a.h,h),v=1;else return;if(a.I!=0){if(h.o)if(v==1){p=h.u?h.u.length:0,h=Date.now()-h.F;var D=a.D;v=va(),at(v,new em(v,p)),ka(a)}else Pm(a);else if(D=h.m,D==3||D==0&&h.X>0||!(v==1&&ET(a,h)||v==2&&Ic(a)))switch(p&&p.length>0&&(h=a.h,h.i=h.i.concat(p)),D){case 1:qr(a,5);break;case 4:qr(a,10);break;case 3:qr(a,6);break;default:qr(a,2)}}}function Dm(a,h){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*h}function qr(a,h){if(a.j.info("Error code "+h),h==2){var p=c(a.bb,a),v=a.Ua;const D=!v;v=new Wn(v||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Oi(v,"https"),Ta(v),D?mT(v.toString(),p):gT(v.toString(),p)}else lt(2);a.I=0,a.l&&a.l.pa(h),Vm(a),Cm(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),lt(2)):(this.j.info("Failed to ping google.com"),lt(1))};function Vm(a){if(a.I=0,a.ja=[],a.l){const h=dm(a.h);(h.length!=0||a.i.length!=0)&&(R(a.ja,h),R(a.ja,a.i),a.h.i.length=0,_(a.i),a.i.length=0),a.l.oa()}}function jm(a,h,p){var v=p instanceof Wn?nn(p):new Wn(p);if(v.g!="")h&&(v.g=h+"."+v.g),Li(v,v.u);else{var D=o.location;v=D.protocol,h=h?h+"."+D.hostname:D.hostname,D=+D.port;const V=new Wn(null);v&&Oi(V,v),h&&(V.g=h),D&&Li(V,D),p&&(V.h=p),v=V}return p=a.G,h=a.wa,p&&h&&fe(v,p,h),fe(v,"VER",a.ka),Hi(a,v),v}function Om(a,h,p){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Se(new wc({ab:p})):new Se(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Lm(){}t=Lm.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Ra(){}Ra.prototype.g=function(a,h){return new St(a,h)};function St(a,h){Je.call(this),this.g=new km(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!k(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!k(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Cs(this)}m(St,Je),St.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){Tc(this.g)},St.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=uc(a),a=p);h.i.push(new aT(h.Ya++,a)),h.I==3&&ka(h)},St.prototype.N=function(){this.g.l=null,delete this.j,Tc(this.g),delete this.g,St.Z.N.call(this)};function Mm(a){cc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}m(Mm,cc);function Fm(){hc.call(this),this.status=1}m(Fm,hc);function Cs(a){this.g=a}m(Cs,Lm),Cs.prototype.ra=function(){at(this.g,"a")},Cs.prototype.qa=function(a){at(this.g,new Mm(a))},Cs.prototype.pa=function(a){at(this.g,new Fm)},Cs.prototype.oa=function(){at(this.g,"b")},Ra.prototype.createWebChannel=Ra.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,gE=function(){return new Ra},mE=function(){return va()},pE=Br,fd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},wa.NO_ERROR=0,wa.TIMEOUT=8,wa.HTTP_ERROR=6,fl=wa,tm.COMPLETE="complete",fE=tm,Yp.EventType=Pi,Pi.OPEN="a",Pi.CLOSE="b",Pi.ERROR="c",Pi.MESSAGE="d",Je.prototype.listen=Je.prototype.J,io=Yp,Se.prototype.listenOnce=Se.prototype.K,Se.prototype.getLastError=Se.prototype.Ha,Se.prototype.getLastErrorCode=Se.prototype.ya,Se.prototype.getStatus=Se.prototype.ca,Se.prototype.getResponseJson=Se.prototype.La,Se.prototype.getResponseText=Se.prototype.la,Se.prototype.send=Se.prototype.ea,Se.prototype.setWithCredentials=Se.prototype.Fa,dE=Se}).apply(typeof Ga<"u"?Ga:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ii="12.8.0";function nC(t){Ii=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps=new Ff("@firebase/firestore");function xs(){return ps.logLevel}function H(t,...e){if(ps.logLevel<=ne.DEBUG){const n=e.map(Bf);ps.debug(`Firestore (${Ii}): ${t}`,...n)}}function Fn(t,...e){if(ps.logLevel<=ne.ERROR){const n=e.map(Bf);ps.error(`Firestore (${Ii}): ${t}`,...n)}}function hi(t,...e){if(ps.logLevel<=ne.WARN){const n=e.map(Bf);ps.warn(`Firestore (${Ii}): ${t}`,...n)}}function Bf(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,yE(t,r,n)}function yE(t,e,n){let r=`FIRESTORE (${Ii}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Fn(r),new Error(r)}function ae(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||yE(e,s,r)}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends En{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(nt.UNAUTHENTICATED))}shutdown(){}}class sC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class iC{constructor(e){this.t=e,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ae(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new bn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new bn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new bn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ae(typeof r.accessToken=="string",31837,{l:r}),new _E(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ae(e===null||typeof e=="string",2055,{h:e}),new nt(e)}}class oC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=nt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class aC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new oC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class cy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ot(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ae(this.o===void 0,3512);const r=i=>{i.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new cy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ae(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new cy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=uC(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function re(t,e){return t<e?-1:t>e?1:0}function pd(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return sh(s)===sh(i)?re(s,i):sh(s)?1:-1}return re(t.length,e.length)}const cC=55296,hC=57343;function sh(t){const e=t.charCodeAt(0);return e>=cC&&e<=hC}function di(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy="__name__";class an{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&G(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return an.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof an?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=an.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return re(e.length,n.length)}static compareSegments(e,n){const r=an.isNumericId(e),s=an.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?an.extractNumericId(e).compare(an.extractNumericId(n)):pd(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Er.fromString(e.substring(4,e.length-2))}}class he extends an{construct(e,n,r){return new he(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new he(n)}static emptyPath(){return new he([])}}const dC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends an{construct(e,n,r){return new Ge(e,n,r)}static isValidIdentifier(e){return dC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===hy}static keyField(){return new Ge([hy])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new z(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new z(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new z(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new z(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(n)}static emptyPath(){return new Ge([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(he.fromString(e))}static fromName(e){return new W(he.fromString(e).popFirst(5))}static empty(){return new W(he.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&he.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return he.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new he(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vE(t,e,n){if(!n)throw new z(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function fC(t,e,n,r){if(e===!0&&r===!0)throw new z(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function dy(t){if(!W.isDocumentKey(t))throw new z(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function fy(t){if(W.isDocumentKey(t))throw new z(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function wE(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Nu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G(12329,{type:typeof t})}function _n(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Nu(t);throw new z(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(t,e){const n={typeString:t};return e&&(n.value=e),n}function la(t,e){if(!wE(t))throw new z(L.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new z(L.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py=-62135596800,my=1e6;class me{static now(){return me.fromMillis(Date.now())}static fromDate(e){return me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*my);return new me(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<py)throw new z(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/my}_compareTo(e){return this.seconds===e.seconds?re(this.nanoseconds,e.nanoseconds):re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:me._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(la(e,me._jsonSchema))return new me(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-py;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}me._jsonSchemaVersion="firestore/timestamp/1.0",me._jsonSchema={type:Ve("string",me._jsonSchemaVersion),seconds:Ve("number"),nanoseconds:Ve("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{static fromTimestamp(e){return new Y(e)}static min(){return new Y(new me(0,0))}static max(){return new Y(new me(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho=-1;function pC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Y.fromTimestamp(r===1e9?new me(n+1,0):new me(n,r));return new kr(s,W.empty(),e)}function mC(t){return new kr(t.readTime,t.key,Ho)}class kr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new kr(Y.min(),W.empty(),Ho)}static max(){return new kr(Y.max(),W.empty(),Ho)}}function gC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:re(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _C{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Si(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==yC)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new M((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new M((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function vC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ai(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}bu.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hf=-1;function Du(t){return t==null}function Ql(t){return t===0&&1/t==-1/0}function wC(t){return typeof t=="number"&&Number.isInteger(t)&&!Ql(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EE="";function EC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=gy(e)),e=TC(t.get(n),e);return gy(e)}function TC(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case EE:n+="";break;default:n+=i}}return n}function gy(t){return t+EE+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Or(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function TE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,n){this.comparator=e,this.root=n||We.EMPTY}insert(e,n){return new Ie(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,We.BLACK,null,null))}remove(e){return new Ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,We.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ka(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ka(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ka(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ka(this.root,e,this.comparator,!0)}}class Ka{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class We{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??We.RED,this.left=s??We.EMPTY,this.right=i??We.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new We(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return We.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw G(43730,{key:this.key,value:this.value});if(this.right.isRed())throw G(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw G(27949);return e+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw G(57766)}get value(){throw G(16141)}get color(){throw G(16727)}get left(){throw G(29726)}get right(){throw G(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new We(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.comparator=e,this.data=new Ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new _y(this.data.getIterator())}getIteratorFrom(e){return new _y(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Fe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Fe(this.comparator);return n.data=e,n}}class _y{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new Ct([])}unionWith(e){let n=new Fe(Ge.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ct(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return di(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new IE("Invalid base64 string: "+i):i}}(e);return new Ye(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Ye(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ye.EMPTY_BYTE_STRING=new Ye("");const IC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Cr(t){if(ae(!!t,39018),typeof t=="string"){let e=0;const n=IC.exec(t);if(ae(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:xe(t.seconds),nanos:xe(t.nanos)}}function xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Rr(t){return typeof t=="string"?Ye.fromBase64String(t):Ye.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE="server_timestamp",AE="__type__",kE="__previous_value__",CE="__local_write_time__";function qf(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[AE])==null?void 0:r.stringValue)===SE}function Vu(t){const e=t.mapValue.fields[kE];return qf(e)?Vu(e):e}function qo(t){const e=Cr(t.mapValue.fields[CE].timestampValue);return new me(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e,n,r,s,i,o,l,u,c,f,m){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=f,this.apiKey=m}}const Yl="(default)";class Wo{constructor(e,n){this.projectId=e,this.database=n||Yl}static empty(){return new Wo("","")}get isDefaultDatabase(){return this.database===Yl}isEqual(e){return e instanceof Wo&&e.projectId===this.projectId&&e.database===this.database}}function AC(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new z(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wo(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE="__type__",kC="__max__",Qa={mapValue:{}},xE="__vector__",Xl="value";function xr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?qf(t)?4:RC(t)?9007199254740991:CC(t)?10:11:G(28295,{value:t})}function vn(t,e){if(t===e)return!0;const n=xr(t);if(n!==xr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return qo(t).isEqual(qo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Cr(s.timestampValue),l=Cr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Rr(s.bytesValue).isEqual(Rr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return xe(s.geoPointValue.latitude)===xe(i.geoPointValue.latitude)&&xe(s.geoPointValue.longitude)===xe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return xe(s.integerValue)===xe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=xe(s.doubleValue),l=xe(i.doubleValue);return o===l?Ql(o)===Ql(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return di(t.arrayValue.values||[],e.arrayValue.values||[],vn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(yy(o)!==yy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!vn(o[u],l[u])))return!1;return!0}(t,e);default:return G(52216,{left:t})}}function Go(t,e){return(t.values||[]).find(n=>vn(n,e))!==void 0}function fi(t,e){if(t===e)return 0;const n=xr(t),r=xr(e);if(n!==r)return re(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return re(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=xe(i.integerValue||i.doubleValue),u=xe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return vy(t.timestampValue,e.timestampValue);case 4:return vy(qo(t),qo(e));case 5:return pd(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Rr(i),u=Rr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=re(l[c],u[c]);if(f!==0)return f}return re(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=re(xe(i.latitude),xe(o.latitude));return l!==0?l:re(xe(i.longitude),xe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return wy(t.arrayValue,e.arrayValue);case 10:return function(i,o){var g,_,R,N;const l=i.fields||{},u=o.fields||{},c=(g=l[Xl])==null?void 0:g.arrayValue,f=(_=u[Xl])==null?void 0:_.arrayValue,m=re(((R=c==null?void 0:c.values)==null?void 0:R.length)||0,((N=f==null?void 0:f.values)==null?void 0:N.length)||0);return m!==0?m:wy(c,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Qa.mapValue&&o===Qa.mapValue)return 0;if(i===Qa.mapValue)return 1;if(o===Qa.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const g=pd(u[m],f[m]);if(g!==0)return g;const _=fi(l[u[m]],c[f[m]]);if(_!==0)return _}return re(u.length,f.length)}(t.mapValue,e.mapValue);default:throw G(23264,{he:n})}}function vy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return re(t,e);const n=Cr(t),r=Cr(e),s=re(n.seconds,r.seconds);return s!==0?s:re(n.nanos,r.nanos)}function wy(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=fi(n[s],r[s]);if(i)return i}return re(n.length,r.length)}function pi(t){return md(t)}function md(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Cr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Rr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=md(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${md(n.fields[o])}`;return s+"}"}(t.mapValue):G(61005,{value:t})}function pl(t){switch(xr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Vu(t);return e?16+pl(e):16;case 5:return 2*t.stringValue.length;case 6:return Rr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+pl(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Or(r.fields,(i,o)=>{s+=i.length+pl(o)}),s}(t.mapValue);default:throw G(13486,{value:t})}}function Ey(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function gd(t){return!!t&&"integerValue"in t}function Wf(t){return!!t&&"arrayValue"in t}function Ty(t){return!!t&&"nullValue"in t}function Iy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ml(t){return!!t&&"mapValue"in t}function CC(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[RE])==null?void 0:r.stringValue)===xE}function wo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Or(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=wo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=wo(t.arrayValue.values[n]);return e}return{...t}}function RC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===kC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.value=e}static empty(){return new yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ml(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=wo(n)}setAll(e){let n=Ge.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=wo(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ml(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return vn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ml(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Or(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new yt(wo(this.value))}}function PE(t){const e=[];return Or(t.fields,(n,r)=>{const s=new Ge([n]);if(ml(r)){const i=PE(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ct(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new st(e,0,Y.min(),Y.min(),Y.min(),yt.empty(),0)}static newFoundDocument(e,n,r,s){return new st(e,1,n,Y.min(),r,s,0)}static newNoDocument(e,n){return new st(e,2,n,Y.min(),Y.min(),yt.empty(),0)}static newUnknownDocument(e,n){return new st(e,3,n,Y.min(),Y.min(),yt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof st&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new st(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e,n){this.position=e,this.inclusive=n}}function Sy(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),n.key):r=fi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ay(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!vn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,n="asc"){this.field=e,this.dir=n}}function xC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{}class De extends NE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new NC(e,n,r):n==="array-contains"?new VC(e,r):n==="in"?new jC(e,r):n==="not-in"?new OC(e,r):n==="array-contains-any"?new LC(e,r):new De(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new bC(e,r):new DC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(fi(n,this.value)):n!==null&&xr(this.value)===xr(n)&&this.matchesComparison(fi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class en extends NE{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new en(e,n)}matches(e){return bE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function bE(t){return t.op==="and"}function DE(t){return PC(t)&&bE(t)}function PC(t){for(const e of t.filters)if(e instanceof en)return!1;return!0}function yd(t){if(t instanceof De)return t.field.canonicalString()+t.op.toString()+pi(t.value);if(DE(t))return t.filters.map(e=>yd(e)).join(",");{const e=t.filters.map(n=>yd(n)).join(",");return`${t.op}(${e})`}}function VE(t,e){return t instanceof De?function(r,s){return s instanceof De&&r.op===s.op&&r.field.isEqual(s.field)&&vn(r.value,s.value)}(t,e):t instanceof en?function(r,s){return s instanceof en&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&VE(o,s.filters[l]),!0):!1}(t,e):void G(19439)}function jE(t){return t instanceof De?function(n){return`${n.field.canonicalString()} ${n.op} ${pi(n.value)}`}(t):t instanceof en?function(n){return n.op.toString()+" {"+n.getFilters().map(jE).join(" ,")+"}"}(t):"Filter"}class NC extends De{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class bC extends De{constructor(e,n){super(e,"in",n),this.keys=OE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class DC extends De{constructor(e,n){super(e,"not-in",n),this.keys=OE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function OE(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class VC extends De{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Wf(n)&&Go(n.arrayValue,this.value)}}class jC extends De{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Go(this.value.arrayValue,n)}}class OC extends De{constructor(e,n){super(e,"not-in",n)}matches(e){if(Go(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Go(this.value.arrayValue,n)}}class LC extends De{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Wf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Go(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function ky(t,e=null,n=[],r=[],s=null,i=null,o=null){return new MC(t,e,n,r,s,i,o)}function Gf(t){const e=X(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>yd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Du(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>pi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>pi(r)).join(",")),e.Te=n}return e.Te}function Kf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!xC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!VE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ay(t.startAt,e.startAt)&&Ay(t.endAt,e.endAt)}function _d(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function FC(t,e,n,r,s,i,o,l){return new ki(t,e,n,r,s,i,o,l)}function Qf(t){return new ki(t)}function Cy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function UC(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function LE(t){return t.collectionGroup!==null}function Eo(t){const e=X(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Fe(Ge.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Ko(i,r))}),n.has(Ge.keyField().canonicalString())||e.Ie.push(new Ko(Ge.keyField(),r))}return e.Ie}function fn(t){const e=X(t);return e.Ee||(e.Ee=zC(e,Eo(t))),e.Ee}function zC(t,e){if(t.limitType==="F")return ky(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ko(s.field,i)});const n=t.endAt?new Jl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Jl(t.startAt.position,t.startAt.inclusive):null;return ky(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function vd(t,e){const n=t.filters.concat([e]);return new ki(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function BC(t,e){const n=t.explicitOrderBy.concat([e]);return new ki(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function wd(t,e,n){return new ki(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ju(t,e){return Kf(fn(t),fn(e))&&t.limitType===e.limitType}function ME(t){return`${Gf(fn(t))}|lt:${t.limitType}`}function Ps(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>jE(s)).join(", ")}]`),Du(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>pi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>pi(s)).join(",")),`Target(${r})`}(fn(t))}; limitType=${t.limitType})`}function Ou(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):W.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Eo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const c=Sy(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Eo(r),s)||r.endAt&&!function(o,l,u){const c=Sy(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Eo(r),s))}(t,e)}function $C(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function FE(t){return(e,n)=>{let r=!1;for(const s of Eo(t)){const i=HC(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function HC(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),c=l.data.field(i);return u!==null&&c!==null?fi(u,c):G(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Or(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return TE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qC=new Ie(W.comparator);function Un(){return qC}const UE=new Ie(W.comparator);function oo(...t){let e=UE;for(const n of t)e=e.insert(n.key,n);return e}function zE(t){let e=UE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function es(){return To()}function BE(){return To()}function To(){return new Es(t=>t.toString(),(t,e)=>t.isEqual(e))}const WC=new Ie(W.comparator),GC=new Fe(W.comparator);function se(...t){let e=GC;for(const n of t)e=e.add(n);return e}const KC=new Fe(re);function QC(){return KC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ql(e)?"-0":e}}function $E(t){return{integerValue:""+t}}function YC(t,e){return wC(e)?$E(e):Yf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(){this._=void 0}}function XC(t,e,n){return t instanceof Qo?function(s,i){const o={fields:{[AE]:{stringValue:SE},[CE]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&qf(i)&&(i=Vu(i)),i&&(o.fields[kE]=i),{mapValue:o}}(n,e):t instanceof Yo?qE(t,e):t instanceof Xo?WE(t,e):function(s,i){const o=HE(s,i),l=Ry(o)+Ry(s.Ae);return gd(o)&&gd(s.Ae)?$E(l):Yf(s.serializer,l)}(t,e)}function JC(t,e,n){return t instanceof Yo?qE(t,e):t instanceof Xo?WE(t,e):n}function HE(t,e){return t instanceof Zl?function(r){return gd(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Qo extends Lu{}class Yo extends Lu{constructor(e){super(),this.elements=e}}function qE(t,e){const n=GE(e);for(const r of t.elements)n.some(s=>vn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Xo extends Lu{constructor(e){super(),this.elements=e}}function WE(t,e){let n=GE(e);for(const r of t.elements)n=n.filter(s=>!vn(s,r));return{arrayValue:{values:n}}}class Zl extends Lu{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Ry(t){return xe(t.integerValue||t.doubleValue)}function GE(t){return Wf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(e,n){this.field=e,this.transform=n}}function eR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Yo&&s instanceof Yo||r instanceof Xo&&s instanceof Xo?di(r.elements,s.elements,vn):r instanceof Zl&&s instanceof Zl?vn(r.Ae,s.Ae):r instanceof Qo&&s instanceof Qo}(t.transform,e.transform)}class tR{constructor(e,n){this.version=e,this.transformResults=n}}class It{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new It}static exists(e){return new It(void 0,e)}static updateTime(e){return new It(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function gl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Mu{}function KE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Fu(t.key,It.none()):new ua(t.key,t.data,It.none());{const n=t.data,r=yt.empty();let s=new Fe(Ge.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Lr(t.key,r,new Ct(s.toArray()),It.none())}}function nR(t,e,n){t instanceof ua?function(s,i,o){const l=s.value.clone(),u=Py(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Lr?function(s,i,o){if(!gl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Py(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(QE(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Io(t,e,n,r){return t instanceof ua?function(i,o,l,u){if(!gl(i.precondition,o))return l;const c=i.value.clone(),f=Ny(i.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Lr?function(i,o,l,u){if(!gl(i.precondition,o))return l;const c=Ny(i.fieldTransforms,u,o),f=o.data;return f.setAll(QE(i)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,l){return gl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function rR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=HE(r.transform,s||null);i!=null&&(n===null&&(n=yt.empty()),n.set(r.field,i))}return n||null}function xy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&di(r,s,(i,o)=>eR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ua extends Mu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Lr extends Mu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function QE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Py(t,e,n){const r=new Map;ae(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,JC(o,l,n[s]))}return r}function Ny(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,XC(i,o,e))}return r}class Fu extends Mu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sR extends Mu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&nR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Io(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Io(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=BE();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=KE(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&di(this.mutations,e.mutations,(n,r)=>xy(n,r))&&di(this.baseMutations,e.baseMutations,(n,r)=>xy(n,r))}}class Xf{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ae(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return WC}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Xf(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne,ie;function lR(t){switch(t){case L.OK:return G(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return G(15467,{code:t})}}function YE(t){if(t===void 0)return Fn("GRPC error has no .code"),L.UNKNOWN;switch(t){case Ne.OK:return L.OK;case Ne.CANCELLED:return L.CANCELLED;case Ne.UNKNOWN:return L.UNKNOWN;case Ne.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Ne.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Ne.INTERNAL:return L.INTERNAL;case Ne.UNAVAILABLE:return L.UNAVAILABLE;case Ne.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Ne.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Ne.NOT_FOUND:return L.NOT_FOUND;case Ne.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Ne.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Ne.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Ne.ABORTED:return L.ABORTED;case Ne.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Ne.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Ne.DATA_LOSS:return L.DATA_LOSS;default:return G(39323,{code:t})}}(ie=Ne||(Ne={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uR(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR=new Er([4294967295,4294967295],0);function by(t){const e=uR().encode(t),n=new hE;return n.update(e),new Uint8Array(n.digest())}function Dy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Er([n,r],0),new Er([s,i],0)]}class Jf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ao(`Invalid padding: ${n}`);if(r<0)throw new ao(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ao(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ao(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Er.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Er.fromNumber(r)));return s.compare(cR)===1&&(s=new Er([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=by(e),[r,s]=Dy(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Jf(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=by(e),[r,s]=Dy(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ao extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ca.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Uu(Y.min(),s,new Ie(re),Un(),se())}}class ca{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ca(r,n,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.De=s}}class XE{constructor(e,n){this.targetId=e,this.Ce=n}}class JE{constructor(e,n,r=Ye.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Vy{constructor(){this.ve=0,this.Fe=jy(),this.Me=Ye.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=se(),n=se(),r=se();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:G(38017,{changeType:i})}}),new ca(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=jy()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ae(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class hR{constructor(e){this.Ge=e,this.ze=new Map,this.je=Un(),this.He=Ya(),this.Je=Ya(),this.Ze=new Ie(re)}Xe(e){for(const n of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:G(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(_d(i))if(r===0){const o=new W(i.path);this.et(n,o,st.newNoDocument(o,Y.min()))}else ae(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Rr(r).toUint8Array()}catch(u){if(u instanceof IE)return hi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Jf(o,s,i)}catch(u){return hi(u instanceof ao?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&_d(l.target)){const u=new W(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,st.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.Ke())}});let r=se();this.Je.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new Uu(e,n,this.Ze,this.je,r);return this.je=Un(),this.He=Ya(),this.Je=Ya(),this.Ze=new Ie(re),s}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.He=this.He.insert(n.key,this.It(n.key).add(e)),this.Je=this.Je.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.qe(n,1):s.Ue(n),this.Je=this.Je.insert(n,this.Rt(n).delete(e)),this.Je=this.Je.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new Vy,this.ze.set(e,n)),n}Rt(e){let n=this.Je.get(e);return n||(n=new Fe(re),this.Je=this.Je.insert(e,n)),n}It(e){let n=this.He.get(e);return n||(n=new Fe(re),this.He=this.He.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Vy),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Ya(){return new Ie(W.comparator)}function jy(){return new Ie(W.comparator)}const dR={asc:"ASCENDING",desc:"DESCENDING"},fR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},pR={and:"AND",or:"OR"};class mR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ed(t,e){return t.useProto3Json||Du(e)?e:{value:e}}function eu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ZE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function gR(t,e){return eu(t,e.toTimestamp())}function pn(t){return ae(!!t,49232),Y.fromTimestamp(function(n){const r=Cr(n);return new me(r.seconds,r.nanos)}(t))}function Zf(t,e){return Td(t,e).canonicalString()}function Td(t,e){const n=function(s){return new he(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function e1(t){const e=he.fromString(t);return ae(i1(e),10190,{key:e.toString()}),e}function Id(t,e){return Zf(t.databaseId,e.path)}function ih(t,e){const n=e1(e);if(n.get(1)!==t.databaseId.projectId)throw new z(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(n1(n))}function t1(t,e){return Zf(t.databaseId,e)}function yR(t){const e=e1(t);return e.length===4?he.emptyPath():n1(e)}function Sd(t){return new he(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function n1(t){return ae(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Oy(t,e,n){return{name:Id(t,e),fields:n.value.mapValue.fields}}function _R(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,f){return c.useProto3Json?(ae(f===void 0||typeof f=="string",58123),Ye.fromBase64String(f||"")):(ae(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Ye.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?L.UNKNOWN:YE(c.code);return new z(f,c.message||"")}(o);n=new JE(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ih(t,r.document.name),i=pn(r.document.updateTime),o=r.document.createTime?pn(r.document.createTime):Y.min(),l=new yt({mapValue:{fields:r.document.fields}}),u=st.newFoundDocument(s,i,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new yl(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ih(t,r.document),i=r.readTime?pn(r.readTime):Y.min(),o=st.newNoDocument(s,i),l=r.removedTargetIds||[];n=new yl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ih(t,r.document),i=r.removedTargetIds||[];n=new yl([],i,s,null)}else{if(!("filter"in e))return G(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new aR(s,i),l=r.targetId;n=new XE(l,o)}}return n}function vR(t,e){let n;if(e instanceof ua)n={update:Oy(t,e.key,e.value)};else if(e instanceof Fu)n={delete:Id(t,e.key)};else if(e instanceof Lr)n={update:Oy(t,e.key,e.data),updateMask:RR(e.fieldMask)};else{if(!(e instanceof sR))return G(16599,{dt:e.type});n={verify:Id(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Qo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Yo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Xo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Zl)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw G(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:gR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:G(27497)}(t,e.precondition)),n}function wR(t,e){return t&&t.length>0?(ae(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?pn(s.updateTime):pn(i);return o.isEqual(Y.min())&&(o=pn(i)),new tR(o,s.transformResults||[])}(n,e))):[]}function ER(t,e){return{documents:[t1(t,e.path)]}}function TR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=t1(t,s);const i=function(c){if(c.length!==0)return s1(en.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(f=>function(g){return{field:Ns(g.field),direction:AR(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Ed(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:s}}function IR(t){let e=yR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ae(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(m){const g=r1(m);return g instanceof en&&DE(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(R){return new Ko(bs(R.field),function(j){switch(j){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,Du(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,_=m.values||[];return new Jl(_,g)}(n.startAt));let c=null;return n.endAt&&(c=function(m){const g=!m.before,_=m.values||[];return new Jl(_,g)}(n.endAt)),FC(e,s,o,i,l,"F",u,c)}function SR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function r1(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=bs(n.unaryFilter.field);return De.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=bs(n.unaryFilter.field);return De.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=bs(n.unaryFilter.field);return De.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=bs(n.unaryFilter.field);return De.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return G(61313);default:return G(60726)}}(t):t.fieldFilter!==void 0?function(n){return De.create(bs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return G(58110);default:return G(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return en.create(n.compositeFilter.filters.map(r=>r1(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return G(1026)}}(n.compositeFilter.op))}(t):G(30097,{filter:t})}function AR(t){return dR[t]}function kR(t){return fR[t]}function CR(t){return pR[t]}function Ns(t){return{fieldPath:t.canonicalString()}}function bs(t){return Ge.fromServerFormat(t.fieldPath)}function s1(t){return t instanceof De?function(n){if(n.op==="=="){if(Iy(n.value))return{unaryFilter:{field:Ns(n.field),op:"IS_NAN"}};if(Ty(n.value))return{unaryFilter:{field:Ns(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Iy(n.value))return{unaryFilter:{field:Ns(n.field),op:"IS_NOT_NAN"}};if(Ty(n.value))return{unaryFilter:{field:Ns(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ns(n.field),op:kR(n.op),value:n.value}}}(t):t instanceof en?function(n){const r=n.getFilters().map(s=>s1(s));return r.length===1?r[0]:{compositeFilter:{op:CR(n.op),filters:r}}}(t):G(54877,{filter:t})}function RR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function i1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function o1(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,n,r,s,i=Y.min(),o=Y.min(),l=Ye.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new ur(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(e){this.yt=e}}function PR(t){const e=IR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?wd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(){this.Sn=new bR}addToCollectionParentIndex(e,n){return this.Sn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(kr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(kr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class bR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Fe(he.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Fe(he.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},a1=41943040;class mt{static withCacheSize(e){return new mt(e,mt.DEFAULT_COLLECTION_PERCENTILE,mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mt.DEFAULT_COLLECTION_PERCENTILE=10,mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,mt.DEFAULT=new mt(a1,mt.DEFAULT_COLLECTION_PERCENTILE,mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),mt.DISABLED=new mt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new mi(0)}static ar(){return new mi(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const My="LruGarbageCollector",DR=1048576;function Fy([t,e],[n,r]){const s=re(t,n);return s===0?re(e,r):s}class VR{constructor(e){this.Pr=e,this.buffer=new Fe(Fy),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Fy(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class jR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){H(My,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ai(n)?H(My,"Ignoring IndexedDB error during garbage collection: ",n):await Si(n)}await this.Ar(3e5)})}}class OR{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(bu.ce);const r=new VR(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(Ly)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ly):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,l,u,c;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,o=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(i=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(c=Date.now(),xs()<=ne.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(c-u)+`ms
Total Duration: ${c-f}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function LR(t,e){return new OR(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(){this.changes=new Es(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,st.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Io(r.mutation,s,Ct.empty(),me.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=se()){const s=es();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=oo();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=es();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,se()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Un();const o=To(),l=function(){return To()}();return n.forEach((u,c)=>{const f=r.get(c.key);s.has(c.key)&&(f===void 0||f.mutation instanceof Lr)?i=i.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),Io(f.mutation,c,f.mutation.getFieldMask(),me.now())):o.set(c.key,Ct.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>l.set(c,new FR(f,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=To();let s=new Ie((o,l)=>o-l),i=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||Ct.empty();f=l.applyToLocalView(c,f),r.set(u,f);const m=(s.get(l.batchId)||se()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,m=BE();f.forEach(g=>{if(!i.has(g)){const _=KE(n.get(g),r.get(g));_!==null&&m.set(g,_),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,m))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return UC(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):LE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(es());let l=Ho,u=i;return o.next(c=>M.forEach(c,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,se())).next(f=>({batchId:l,changes:zE(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(r=>{let s=oo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=oo();return this.indexManager.getCollectionParents(e,i).next(l=>M.forEach(l,u=>{const c=function(m,g){return new ki(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(f=>{f.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,st.newInvalidDocument(f)))});let l=oo();return o.forEach((u,c)=>{const f=i.get(u);f!==void 0&&Io(f.mutation,c,Ct.empty(),me.now()),Ou(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return M.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:pn(s.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(s){return{name:s.name,query:PR(s.bundledQuery),readTime:pn(s.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(){this.overlays=new Ie(W.comparator),this.Lr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=es();return M.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.bt(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=es(),i=n.length+1,o=new W(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ie((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=i.get(c.largestBatchId);f===null&&(f=es(),i=i.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=es(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=s)););return M.resolve(l)}bt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new oR(n,r));let i=this.Lr.get(n);i===void 0&&(i=se(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(){this.sessionToken=Ye.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(){this.kr=new Fe(Be.Kr),this.qr=new Fe(Be.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new Be(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Be(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new W(new he([])),r=new Be(n,e),s=new Be(n,e+1),i=[];return this.qr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new W(new he([])),r=new Be(n,e),s=new Be(n,e+1);let i=se();return this.qr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Be(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Be{constructor(e,n){this.key=e,this.Hr=n}static Kr(e,n){return W.comparator(e.key,n.key)||re(e.Hr,n.Hr)}static Ur(e,n){return re(e.Hr,n.Hr)||W.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new Fe(Be.Kr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new iR(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Jr=this.Jr.add(new Be(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?Hf:this.Yn-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Be(n,0),s=new Be(n,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([r,s],o=>{const l=this.Zr(o.Hr);i.push(l)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Fe(re);return n.forEach(s=>{const i=new Be(s,0),o=new Be(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,o],l=>{r=r.add(l.Hr)})}),M.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;W.isDocumentKey(i)||(i=i.child(""));const o=new Be(new W(i),0);let l=new Fe(re);return this.Jr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(l=l.add(u.Hr)),!0)},o),M.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ae(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return M.forEach(n.mutations,s=>{const i=new Be(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Jr=r})}nr(e){}containsKey(e,n){const r=new Be(n,0),s=this.Jr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e){this.ti=e,this.docs=function(){return new Ie(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():st.newInvalidDocument(n))}getEntries(e,n){let r=Un();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():st.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Un();const o=n.path,l=new W(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||gC(mC(f),r)<=0||(s.has(f.key)||Ou(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){G(9500)}ni(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new WR(this)}getSize(e){return M.resolve(this.size)}}class WR extends MR{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e){this.persistence=e,this.ri=new Es(n=>Gf(n),Kf),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.ii=0,this.si=new ep,this.targetCount=0,this.oi=mi._r()}forEachTarget(e,n){return this.ri.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),M.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new mi(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.lr(n),M.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(e,n){this._i={},this.overlays={},this.ai=new bu(0),this.ui=!1,this.ui=!0,this.ci=new $R,this.referenceDelegate=e(this),this.li=new GR(this),this.indexManager=new NR,this.remoteDocumentCache=function(s){return new qR(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new xR(n),this.Pi=new zR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new BR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new HR(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const s=new KR(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return M.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class KR extends _C{constructor(e){super(),this.currentSequenceNumber=e}}class tp{constructor(e){this.persistence=e,this.Ri=new ep,this.Ai=null}static Vi(e){return new tp(e)}get di(){if(this.Ai)return this.Ai;throw G(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.di,r=>{const s=W.fromPath(r);return this.mi(e,s).next(i=>{i||n.removeEntry(s,Y.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class tu{constructor(e,n){this.persistence=e,this.fi=new Es(r=>EC(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=LR(this,n)}static Vi(e,n){return new tu(e,n)}Ti(){}Ii(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return M.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?M.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,Y.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=pl(e.data.value)),n}wr(e,n,r){return M.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=s}static Es(e,n){let r=se(),s=se();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new np(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return MA()?8:vC(ot())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new QR;return this.ys(e,n,o).next(l=>{if(i.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>i.result)}ws(e,n,r,s){return r.documentReadCount<this.Vs?(xs()<=ne.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Ps(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),M.resolve()):(xs()<=ne.DEBUG&&H("QueryEngine","Query:",Ps(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(xs()<=ne.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Ps(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,fn(n))):M.resolve())}gs(e,n){if(Cy(n))return M.resolve(null);let r=fn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=wd(n,null,"F"),r=fn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=se(...i);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.bs(n,l);return this.Ss(n,c,o,u.readTime)?this.gs(e,wd(n,null,"F")):this.Ds(e,c,n,u)}))})))}ps(e,n,r,s){return Cy(n)||s.isEqual(Y.min())?M.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.bs(n,i);return this.Ss(n,o,r,s)?M.resolve(null):(xs()<=ne.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ps(n)),this.Ds(e,o,n,pC(s,Ho)).next(l=>l))})}bs(e,n){let r=new Fe(FE(e));return n.forEach((s,i)=>{Ou(e,i)&&(r=r.add(i))}),r}Ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return xs()<=ne.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Ps(n)),this.fs.getDocumentsMatchingQuery(e,n,kr.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp="LocalStore",XR=3e8;class JR{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new Ie(re),this.Fs=new Es(i=>Gf(i),Kf),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new UR(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function ZR(t,e,n,r){return new JR(t,e,n,r)}async function u1(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=se();for(const c of s){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of i){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ns:c,removedBatchIds:o,addedBatchIds:l}))})})}function ex(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const m=c.batch,g=m.keys();let _=M.resolve();return g.forEach(R=>{_=_.next(()=>f.getEntry(u,R)).next(N=>{const j=c.docVersions.get(R);ae(j!==null,48541),N.version.compareTo(j)<0&&(m.applyToRemoteDocument(N,c),N.isValidDocument()&&(N.setReadTime(c.commitVersion),f.addEntry(N)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=se();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function c1(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function tx(t,e){const n=X(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const l=[];e.targetChanges.forEach((f,m)=>{const g=s.get(m);if(!g)return;l.push(n.li.removeMatchingKeys(i,f.removedDocuments,m).next(()=>n.li.addMatchingKeys(i,f.addedDocuments,m)));let _=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?_=_.withResumeToken(Ye.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),s=s.insert(m,_),function(N,j,I){return N.resumeToken.approximateByteSize()===0||j.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=XR?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(g,_,f)&&l.push(n.li.updateTargetData(i,_))});let u=Un(),c=se();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(nx(i,o,e.documentUpdates).next(f=>{u=f.Bs,c=f.Ls})),!r.isEqual(Y.min())){const f=n.li.getLastRemoteSnapshotVersion(i).next(m=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(n.vs=s,i))}function nx(t,e,n){let r=se(),s=se();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Un();return n.forEach((l,u)=>{const c=i.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H(rp,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Bs:o,Ls:s}})}function rx(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Hf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function sx(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.li.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):n.li.allocateTargetId(r).next(o=>(s=new ur(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Ad(t,e,n){const r=X(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ai(o))throw o;H(rp,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function Uy(t,e,n){const r=X(t);let s=Y.min(),i=se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const m=X(u),g=m.Fs.get(f);return g!==void 0?M.resolve(m.vs.get(g)):m.li.getTargetData(c,f)}(r,o,fn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:Y.min(),n?i:se())).next(l=>(ix(r,$C(e),l),{documents:l,ks:i})))}function ix(t,e,n){let r=t.Ms.get(e)||Y.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ms.set(e,r)}class zy{constructor(){this.activeTargetIds=QC()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ox{constructor(){this.vo=new zy,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new zy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By="ConnectivityMonitor";class $y{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){H(By,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){H(By,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xa=null;function kd(){return Xa===null?Xa=function(){return 268435456+Math.round(2147483648*Math.random())}():Xa++,"0x"+Xa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh="RestConnection",lx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class ux{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===Yl?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=kd(),l=this.Qo(e,n.toUriEncodedString());H(oh,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,i);const{host:c}=new URL(l),f=jr(c);return this.zo(e,l,u,r,f).then(m=>(H(oh,`Received RPC '${e}' ${o}: `,m),m),m=>{throw hi(oh,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ii}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,n){const r=lx[e];let s=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cx{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt="WebChannelConnection",Zi=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Xs extends ux{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Xs.c_){const e=mE();Zi(e,pE.STAT_EVENT,n=>{n.stat===fd.PROXY?H(tt,"STAT_EVENT: detected buffering proxy"):n.stat===fd.NOPROXY&&H(tt,"STAT_EVENT: detected no buffering proxy")}),Xs.c_=!0}}zo(e,n,r,s,i){const o=kd();return new Promise((l,u)=>{const c=new dE;c.setWithCredentials(!0),c.listenOnce(fE.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case fl.NO_ERROR:const m=c.getResponseJson();H(tt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case fl.TIMEOUT:H(tt,`RPC '${e}' ${o} timed out`),u(new z(L.DEADLINE_EXCEEDED,"Request time out"));break;case fl.HTTP_ERROR:const g=c.getStatus();if(H(tt,`RPC '${e}' ${o} failed with status:`,g,"response text:",c.getResponseText()),g>0){let _=c.getResponseJson();Array.isArray(_)&&(_=_[0]);const R=_==null?void 0:_.error;if(R&&R.status&&R.message){const N=function(I){const E=I.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(E)>=0?E:L.UNKNOWN}(R.status);u(new z(N,R.message))}else u(new z(L.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new z(L.UNAVAILABLE,"Connection failed."));break;default:G(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{H(tt,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);H(tt,`RPC '${e}' ${o} sending request:`,s),c.send(n,"POST",f,r,15)})}T_(e,n,r){const s=kd(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=i.join("");H(tt,`Creating RPC '${e}' stream ${s}: ${c}`,l);const f=o.createWebChannel(c,l);this.I_(f);let m=!1,g=!1;const _=new cx({Ho:R=>{g?H(tt,`Not sending because RPC '${e}' stream ${s} is closed:`,R):(m||(H(tt,`Opening RPC '${e}' stream ${s} transport.`),f.open(),m=!0),H(tt,`RPC '${e}' stream ${s} sending:`,R),f.send(R))},Jo:()=>f.close()});return Zi(f,io.EventType.OPEN,()=>{g||(H(tt,`RPC '${e}' stream ${s} transport opened.`),_.i_())}),Zi(f,io.EventType.CLOSE,()=>{g||(g=!0,H(tt,`RPC '${e}' stream ${s} transport closed`),_.o_(),this.E_(f))}),Zi(f,io.EventType.ERROR,R=>{g||(g=!0,hi(tt,`RPC '${e}' stream ${s} transport errored. Name:`,R.name,"Message:",R.message),_.o_(new z(L.UNAVAILABLE,"The operation could not be completed")))}),Zi(f,io.EventType.MESSAGE,R=>{var N;if(!g){const j=R.data[0];ae(!!j,16349);const I=j,E=(I==null?void 0:I.error)||((N=I[0])==null?void 0:N.error);if(E){H(tt,`RPC '${e}' stream ${s} received error:`,E);const A=E.status;let b=function(w){const y=Ne[w];if(y!==void 0)return YE(y)}(A),x=E.message;b===void 0&&(b=L.INTERNAL,x="Unknown error status: "+A+" with message "+E.message),g=!0,_.o_(new z(b,x)),f.close()}else H(tt,`RPC '${e}' stream ${s} received:`,j),_.__(j)}}),Xs.u_(),setTimeout(()=>{_.s_()},0),_}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return gE()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hx(t){return new Xs(t)}function ah(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(t){return new mR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xs.c_=!1;class h1{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy="PersistentStream";class d1{constructor(e,n,r,s,i,o,l,u){this.Ci=e,this.b_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new h1(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Fn(n.toString()),Fn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new z(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.H_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return H(Hy,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(H(Hy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class dx extends d1{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=_R(this.serializer,e),r=function(i){if(!("targetChange"in i))return Y.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?pn(o.readTime):Y.min()}(e);return this.listener.J_(n,r)}Z_(e){const n={};n.database=Sd(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=_d(u)?{documents:ER(i,u)}:{query:TR(i,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=ZE(i,o.resumeToken);const c=Ed(i,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=eu(i,o.snapshotVersion.toTimestamp());const c=Ed(i,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=SR(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=Sd(this.serializer),n.removeTarget=e,this.K_(n)}}class fx extends d1{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}H_(e){return ae(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ae(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ae(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=wR(e.writeResults,e.commitTime),r=pn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Sd(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>vR(this.serializer,r))};this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{}class mx extends px{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new z(L.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,Td(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(L.UNKNOWN,i.toString())})}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,Td(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(L.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function gx(t,e,n,r){return new mx(t,e,n,r)}class yx{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Fn(n),this.aa=!1):H("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms="RemoteStore";class _x{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{Ts(this)&&(H(ms,"Restarting streams for network reachability change."),await async function(u){const c=X(u);c.Ea.add(4),await ha(c),c.Va.set("Unknown"),c.Ea.delete(4),await Bu(c)}(this))})}),this.Va=new yx(r,s)}}async function Bu(t){if(Ts(t))for(const e of t.Ra)await e(!0)}async function ha(t){for(const e of t.Ra)await e(!1)}function f1(t,e){const n=X(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),ap(n)?op(n):Ci(n).O_()&&ip(n,e))}function sp(t,e){const n=X(t),r=Ci(n);n.Ia.delete(e),r.O_()&&p1(n,e),n.Ia.size===0&&(r.O_()?r.L_():Ts(n)&&n.Va.set("Unknown"))}function ip(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ci(t).Z_(e)}function p1(t,e){t.da.$e(e),Ci(t).X_(e)}function op(t){t.da=new hR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Ci(t).start(),t.Va.ua()}function ap(t){return Ts(t)&&!Ci(t).x_()&&t.Ia.size>0}function Ts(t){return X(t).Ea.size===0}function m1(t){t.da=void 0}async function vx(t){t.Va.set("Online")}async function wx(t){t.Ia.forEach((e,n)=>{ip(t,e)})}async function Ex(t,e){m1(t),ap(t)?(t.Va.ha(e),op(t)):t.Va.set("Unknown")}async function Tx(t,e,n){if(t.Va.set("Online"),e instanceof JE&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ia.delete(l),s.da.removeTarget(l))}(t,e)}catch(r){H(ms,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await nu(t,r)}else if(e instanceof yl?t.da.Xe(e):e instanceof XE?t.da.st(e):t.da.tt(e),!n.isEqual(Y.min()))try{const r=await c1(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.da.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ia.get(c);f&&i.Ia.set(c,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const f=i.Ia.get(u);if(!f)return;i.Ia.set(u,f.withResumeToken(Ye.EMPTY_BYTE_STRING,f.snapshotVersion)),p1(i,u);const m=new ur(f.target,u,c,f.sequenceNumber);ip(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H(ms,"Failed to raise snapshot:",r),await nu(t,r)}}async function nu(t,e,n){if(!Ai(e))throw e;t.Ea.add(1),await ha(t),t.Va.set("Offline"),n||(n=()=>c1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H(ms,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Bu(t)})}function g1(t,e){return e().catch(n=>nu(t,n,e))}async function $u(t){const e=X(t),n=Pr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Hf;for(;Ix(e);)try{const s=await rx(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,Sx(e,s)}catch(s){await nu(e,s)}y1(e)&&_1(e)}function Ix(t){return Ts(t)&&t.Ta.length<10}function Sx(t,e){t.Ta.push(e);const n=Pr(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function y1(t){return Ts(t)&&!Pr(t).x_()&&t.Ta.length>0}function _1(t){Pr(t).start()}async function Ax(t){Pr(t).ra()}async function kx(t){const e=Pr(t);for(const n of t.Ta)e.ea(n.mutations)}async function Cx(t,e,n){const r=t.Ta.shift(),s=Xf.from(r,e,n);await g1(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await $u(t)}async function Rx(t,e){e&&Pr(t).Y_&&await async function(r,s){if(function(o){return lR(o)&&o!==L.ABORTED}(s.code)){const i=r.Ta.shift();Pr(r).B_(),await g1(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await $u(r)}}(t,e),y1(t)&&_1(t)}async function qy(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),H(ms,"RemoteStore received new credentials");const r=Ts(n);n.Ea.add(3),await ha(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Bu(n)}async function xx(t,e){const n=X(t);e?(n.Ea.delete(2),await Bu(n)):e||(n.Ea.add(2),await ha(n),n.Va.set("Unknown"))}function Ci(t){return t.ma||(t.ma=function(n,r,s){const i=X(n);return i.sa(),new dx(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:vx.bind(null,t),Yo:wx.bind(null,t),t_:Ex.bind(null,t),J_:Tx.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),ap(t)?op(t):t.Va.set("Unknown")):(await t.ma.stop(),m1(t))})),t.ma}function Pr(t){return t.fa||(t.fa=function(n,r,s){const i=X(n);return i.sa(),new fx(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:Ax.bind(null,t),t_:Rx.bind(null,t),ta:kx.bind(null,t),na:Cx.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await $u(t)):(await t.fa.stop(),t.Ta.length>0&&(H(ms,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new bn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new lp(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function up(t,e){if(Fn("AsyncQueue",`${e}: ${t}`),Ai(t))return new z(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{static emptySet(e){return new Js(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=oo(),this.sortedSet=new Ie(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Js)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Js;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(){this.ga=new Ie(W.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):G(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class gi{constructor(e,n,r,s,i,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new gi(e,n,Js.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ju(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class Nx{constructor(){this.queries=Gy(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=X(n),i=s.queries;s.queries=Gy(),i.forEach((o,l)=>{for(const u of l.ba)u.onError(r)})})(this,new z(L.ABORTED,"Firestore shutting down"))}}function Gy(){return new Es(t=>ME(t),ju)}async function v1(t,e){const n=X(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.Da()&&(r=2):(i=new Px,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=up(o,`Initialization of query '${Ps(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.ba.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&cp(n)}async function w1(t,e){const n=X(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ba.indexOf(e);o>=0&&(i.ba.splice(o,1),i.ba.length===0?s=e.Da()?0:1:!i.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function bx(t,e){const n=X(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.ba)l.Fa(s)&&(r=!0);o.wa=s}}r&&cp(n)}function Dx(t,e,n){const r=X(t),s=r.queries.get(e);if(s)for(const i of s.ba)i.onError(n);r.queries.delete(e)}function cp(t){t.Ca.forEach(e=>{e.next()})}var Cd,Ky;(Ky=Cd||(Cd={})).Ma="default",Ky.Cache="cache";class E1{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new gi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=gi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Cd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(e){this.key=e}}class I1{constructor(e){this.key=e}}class Vx{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=se(),this.mutatedKeys=se(),this.eu=FE(e),this.tu=new Js(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new Wy,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,m)=>{const g=s.get(f),_=Ou(this.query,m)?m:null,R=!!g&&this.mutatedKeys.has(g.key),N=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let j=!1;g&&_?g.data.isEqual(_.data)?R!==N&&(r.track({type:3,doc:_}),j=!0):this.su(g,_)||(r.track({type:2,doc:_}),j=!0,(u&&this.eu(_,u)>0||c&&this.eu(_,c)<0)&&(l=!0)):!g&&_?(r.track({type:0,doc:_}),j=!0):g&&!_&&(r.track({type:1,doc:g}),j=!0,(u||c)&&(l=!0)),j&&(_?(o=o.add(_),i=N?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Ss:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,m)=>function(_,R){const N=j=>{switch(j){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G(20277,{Vt:j})}};return N(_)-N(R)}(f.type,m.type)||this.eu(f.doc,m.doc)),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],u=this.Ya.size===0&&this.current&&!s?1:0,c=u!==this.Xa;return this.Xa=u,o.length!==0||c?{snapshot:new gi(this.query,e.tu,i,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Wy,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=se(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new I1(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new T1(r))}),n}cu(e){this.Za=e.ks,this.Ya=se();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return gi.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const hp="SyncEngine";class jx{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Ox{constructor(e){this.key=e,this.hu=!1}}class Lx{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Es(l=>ME(l),ju),this.Iu=new Map,this.Eu=new Set,this.Ru=new Ie(W.comparator),this.Au=new Map,this.Vu=new ep,this.du={},this.mu=new Map,this.fu=mi.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Mx(t,e,n=!0){const r=x1(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await S1(r,e,n,!0),s}async function Fx(t,e){const n=x1(t);await S1(n,e,!0,!1)}async function S1(t,e,n,r){const s=await sx(t.localStore,fn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await Ux(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&f1(t.remoteStore,s),l}async function Ux(t,e,n,r,s){t.pu=(m,g,_)=>async function(N,j,I,E){let A=j.view.ru(I);A.Ss&&(A=await Uy(N.localStore,j.query,!1).then(({documents:w})=>j.view.ru(w,A)));const b=E&&E.targetChanges.get(j.targetId),x=E&&E.targetMismatches.get(j.targetId)!=null,O=j.view.applyChanges(A,N.isPrimaryClient,b,x);return Yy(N,j.targetId,O.au),O.snapshot}(t,m,g,_);const i=await Uy(t.localStore,e,!0),o=new Vx(e,i.ks),l=o.ru(i.documents),u=ca.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(l,t.isPrimaryClient,u);Yy(t,n,c.au);const f=new jx(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),c.snapshot}async function zx(t,e,n){const r=X(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!ju(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ad(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&sp(r.remoteStore,s.targetId),Rd(r,s.targetId)}).catch(Si)):(Rd(r,s.targetId),await Ad(r.localStore,s.targetId,!0))}async function Bx(t,e){const n=X(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),sp(n.remoteStore,r.targetId))}async function $x(t,e,n){const r=Yx(t);try{const s=await function(o,l){const u=X(o),c=me.now(),f=l.reduce((_,R)=>_.add(R.key),se());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",_=>{let R=Un(),N=se();return u.xs.getEntries(_,f).next(j=>{R=j,R.forEach((I,E)=>{E.isValidDocument()||(N=N.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(_,R)).next(j=>{m=j;const I=[];for(const E of l){const A=rR(E,m.get(E.key).overlayedDocument);A!=null&&I.push(new Lr(E.key,A,PE(A.value.mapValue),It.exists(!0)))}return u.mutationQueue.addMutationBatch(_,c,I,l)}).next(j=>{g=j;const I=j.applyToLocalDocumentSet(m,N);return u.documentOverlayCache.saveOverlays(_,j.batchId,I)})}).then(()=>({batchId:g.batchId,changes:zE(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let c=o.du[o.currentUser.toKey()];c||(c=new Ie(re)),c=c.insert(l,u),o.du[o.currentUser.toKey()]=c}(r,s.batchId,n),await da(r,s.changes),await $u(r.remoteStore)}catch(s){const i=up(s,"Failed to persist write");n.reject(i)}}async function A1(t,e){const n=X(t);try{const r=await tx(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(ae(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?ae(o.hu,14607):s.removedDocuments.size>0&&(ae(o.hu,42227),o.hu=!1))}),await da(n,r,e)}catch(r){await Si(r)}}function Qy(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=X(o);u.onlineState=l;let c=!1;u.queries.forEach((f,m)=>{for(const g of m.ba)g.va(l)&&(c=!0)}),c&&cp(u)}(r.eventManager,e),s.length&&r.Pu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Hx(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Ie(W.comparator);o=o.insert(i,st.newNoDocument(i,Y.min()));const l=se().add(i),u=new Uu(Y.min(),new Map,new Ie(re),o,l);await A1(r,u),r.Ru=r.Ru.remove(i),r.Au.delete(e),dp(r)}else await Ad(r.localStore,e,!1).then(()=>Rd(r,e,n)).catch(Si)}async function qx(t,e){const n=X(t),r=e.batch.batchId;try{const s=await ex(n.localStore,e);C1(n,r,null),k1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await da(n,s)}catch(s){await Si(s)}}async function Wx(t,e,n){const r=X(t);try{const s=await function(o,l){const u=X(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(m=>(ae(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(c,m))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);C1(r,e,n),k1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await da(r,s)}catch(s){await Si(s)}}function k1(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function C1(t,e,n){const r=X(t);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function Rd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||R1(t,r)})}function R1(t,e){t.Eu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(sp(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),dp(t))}function Yy(t,e,n){for(const r of n)r instanceof T1?(t.Vu.addReference(r.key,e),Gx(t,r)):r instanceof I1?(H(hp,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||R1(t,r.key)):G(19791,{wu:r})}function Gx(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Eu.has(r)||(H(hp,"New document in limbo: "+n),t.Eu.add(r),dp(t))}function dp(t){for(;t.Eu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new W(he.fromString(e)),r=t.fu.next();t.Au.set(r,new Ox(n)),t.Ru=t.Ru.insert(n,r),f1(t.remoteStore,new ur(fn(Qf(n.path)),r,"TargetPurposeLimboResolution",bu.ce))}}async function da(t,e,n){const r=X(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const m=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){s.push(c);const m=np.Es(u.targetId,c);i.push(m)}}))}),await Promise.all(o),r.Pu.J_(s),await async function(u,c){const f=X(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>M.forEach(c,g=>M.forEach(g.Ts,_=>f.persistence.referenceDelegate.addReference(m,g.targetId,_)).next(()=>M.forEach(g.Is,_=>f.persistence.referenceDelegate.removeReference(m,g.targetId,_)))))}catch(m){if(!Ai(m))throw m;H(rp,"Failed to update sequence numbers: "+m)}for(const m of c){const g=m.targetId;if(!m.fromCache){const _=f.vs.get(g),R=_.snapshotVersion,N=_.withLastLimboFreeSnapshotVersion(R);f.vs=f.vs.insert(g,N)}}}(r.localStore,i))}async function Kx(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){H(hp,"User change. New user:",e.toKey());const r=await u1(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(l=>{l.forEach(u=>{u.reject(new z(L.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await da(n,r.Ns)}}function Qx(t,e){const n=X(t),r=n.Au.get(e);if(r&&r.hu)return se().add(r.key);{let s=se();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const l=n.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function x1(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=A1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Qx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Hx.bind(null,e),e.Pu.J_=bx.bind(null,e.eventManager),e.Pu.yu=Dx.bind(null,e.eventManager),e}function Yx(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=qx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Wx.bind(null,e),e}class ru{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=zu(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return ZR(this.persistence,new YR,e.initialUser,this.serializer)}Cu(e){return new l1(tp.Vi,this.serializer)}Du(e){return new ox}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ru.provider={build:()=>new ru};class Xx extends ru{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){ae(this.persistence.referenceDelegate instanceof tu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new jR(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?mt.withCacheSize(this.cacheSizeBytes):mt.DEFAULT;return new l1(r=>tu.Vi(r,n),this.serializer)}}class xd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Qy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Kx.bind(null,this.syncEngine),await xx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Nx}()}createDatastore(e){const n=zu(e.databaseInfo.databaseId),r=hx(e.databaseInfo);return gx(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new _x(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Qy(this.syncEngine,n,0),function(){return $y.v()?new $y:new ax}())}createSyncEngine(e,n){return function(s,i,o,l,u,c,f){const m=new Lx(s,i,o,l,u,c);return f&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=X(s);H(ms,"RemoteStore shutting down."),i.Ea.add(5),await ha(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}xd.provider={build:()=>new xd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Fn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr="FirestoreClient";class Jx{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=nt.UNAUTHENTICATED,this.clientId=$f.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{H(Nr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H(Nr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new bn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=up(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function lh(t,e){t.asyncQueue.verifyOperationInProgress(),H(Nr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await u1(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Xy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Zx(t);H(Nr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>qy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>qy(e.remoteStore,s)),t._onlineComponents=e}async function Zx(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H(Nr,"Using user provided OfflineComponentProvider");try{await lh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;hi("Error using user provided cache. Falling back to memory cache: "+n),await lh(t,new ru)}}else H(Nr,"Using default OfflineComponentProvider"),await lh(t,new Xx(void 0));return t._offlineComponents}async function N1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H(Nr,"Using user provided OnlineComponentProvider"),await Xy(t,t._uninitializedComponentsProvider._online)):(H(Nr,"Using default OnlineComponentProvider"),await Xy(t,new xd))),t._onlineComponents}function e2(t){return N1(t).then(e=>e.syncEngine)}async function b1(t){const e=await N1(t),n=e.eventManager;return n.onListen=Mx.bind(null,e.syncEngine),n.onUnlisten=zx.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Fx.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Bx.bind(null,e.syncEngine),n}function t2(t,e,n={}){const r=new bn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const f=new P1({next:g=>{f.Nu(),o.enqueueAndForget(()=>w1(i,m));const _=g.docs.has(l);!_&&g.fromCache?c.reject(new z(L.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&g.fromCache&&u&&u.source==="server"?c.reject(new z(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new E1(Qf(l.path),f,{includeMetadataChanges:!0,Ka:!0});return v1(i,m)}(await b1(t),t.asyncQueue,e,n,r)),r.promise}function n2(t,e,n={}){const r=new bn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const f=new P1({next:g=>{f.Nu(),o.enqueueAndForget(()=>w1(i,m)),g.fromCache&&u.source==="server"?c.reject(new z(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new E1(l,f,{includeMetadataChanges:!0,Ka:!0});return v1(i,m)}(await b1(t),t.asyncQueue,e,n,r)),r.promise}function r2(t,e){const n=new bn;return t.asyncQueue.enqueueAndForget(async()=>$x(await e2(t),e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D1(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s2="ComponentProvider",Jy=new Map;function i2(t,e,n,r,s){return new SC(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,D1(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V1="firestore.googleapis.com",Zy=!0;class e_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new z(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=V1,this.ssl=Zy}else this.host=e.host,this.ssl=e.ssl??Zy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=a1;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<DR)throw new z(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}fC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=D1(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new z(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new z(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new z(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Hu{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new e_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new e_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new rC;switch(r.type){case"firstParty":return new aC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Jy.get(n);r&&(H(s2,"Removing Datastore"),Jy.delete(n),r.terminate())}(this),Promise.resolve()}}function o2(t,e,n,r={}){var c;t=_n(t,Hu);const s=jr(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&(Lf(`https://${l}`),Mf("Firestore",!0)),i.host!==V1&&i.host!==l&&hi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!ds(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=nt.MOCK_USER;else{f=iE(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new z(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new nt(g)}t._authCredentials=new sC(new _E(f,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Is(this.firestore,e,this._query)}}class je{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Tr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new je(this.firestore,e,this._key)}toJSON(){return{type:je._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(la(n,je._jsonSchema))return new je(e,r||null,new W(he.fromString(n.referencePath)))}}je._jsonSchemaVersion="firestore/documentReference/1.0",je._jsonSchema={type:Ve("string",je._jsonSchemaVersion),referencePath:Ve("string")};class Tr extends Is{constructor(e,n,r){super(e,n,Qf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new je(this.firestore,null,new W(e))}withConverter(e){return new Tr(this.firestore,e,this._path)}}function mn(t,e,...n){if(t=Te(t),vE("collection","path",e),t instanceof Hu){const r=he.fromString(e,...n);return fy(r),new Tr(t,null,r)}{if(!(t instanceof je||t instanceof Tr))throw new z(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(he.fromString(e,...n));return fy(r),new Tr(t.firestore,null,r)}}function ht(t,e,...n){if(t=Te(t),arguments.length===1&&(e=$f.newId()),vE("doc","path",e),t instanceof Hu){const r=he.fromString(e,...n);return dy(r),new je(t,null,new W(r))}{if(!(t instanceof je||t instanceof Tr))throw new z(L.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(he.fromString(e,...n));return dy(r),new je(t.firestore,t instanceof Tr?t.converter:null,new W(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_="AsyncQueue";class n_{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new h1(this,"async_queue_retry"),this._c=()=>{const r=ah();r&&H(t_,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=ah();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=ah();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new bn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Ai(e))throw e;H(t_,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Fn("INTERNAL UNHANDLED ERROR: ",r_(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=lp.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&G(47125,{Pc:r_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function r_(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Ss extends Hu{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new n_,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new n_(e),this._firestoreClient=void 0,await e}}}function a2(t,e){const n=typeof t=="object"?t:zf(),r=typeof t=="string"?t:Yl,s=Pu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=nE("firestore");i&&o2(s,...i)}return s}function qu(t){if(t._terminated)throw new z(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||l2(t),t._firestoreClient}function l2(t){var r,s,i,o;const e=t._freezeSettings(),n=i2(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new Jx(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Lt(Ye.fromBase64String(e))}catch(n){throw new z(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Lt(Ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Lt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(la(e,Lt._jsonSchema))return Lt.fromBase64String(e.bytes)}}Lt._jsonSchemaVersion="firestore/bytes/1.0",Lt._jsonSchema={type:Ve("string",Lt._jsonSchemaVersion),bytes:Ve("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return re(this._lat,e._lat)||re(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:gn._jsonSchemaVersion}}static fromJSON(e){if(la(e,gn._jsonSchema))return new gn(e.latitude,e.longitude)}}gn._jsonSchemaVersion="firestore/geoPoint/1.0",gn._jsonSchema={type:Ve("string",gn._jsonSchemaVersion),latitude:Ve("number"),longitude:Ve("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Xt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(la(e,Xt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Xt(e.vectorValues);throw new z(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Xt._jsonSchemaVersion="firestore/vectorValue/1.0",Xt._jsonSchema={type:Ve("string",Xt._jsonSchemaVersion),vectorValues:Ve("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u2=/^__.*__$/;class c2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Lr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ua(e,this.data,n,this.fieldTransforms)}}class j1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Lr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function O1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G(40011,{dataSource:t})}}class fp{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new fp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return su(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(O1(this.dataSource)&&u2.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class h2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||zu(e)}createContext(e,n,r,s=!1){return new fp({dataSource:e,methodName:n,targetDoc:r,path:Ge.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ku(t){const e=t._freezeSettings(),n=zu(t._databaseId);return new h2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function L1(t,e,n,r,s,i={}){const o=t.createContext(i.merge||i.mergeFields?2:0,e,n,s);mp("Data must be an object, but it was:",o,r);const l=U1(r,o);let u,c;if(i.merge)u=new Ct(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const g=yi(e,m,n);if(!o.contains(g))throw new z(L.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);$1(f,g)||f.push(g)}u=new Ct(f),c=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,c=o.fieldTransforms;return new c2(new yt(l),u,c)}class Qu extends Gu{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Qu}}class pp extends Gu{_toFieldTransform(e){return new ZC(e.path,new Qo)}isEqual(e){return e instanceof pp}}function M1(t,e,n,r){const s=t.createContext(1,e,n);mp("Data must be an object, but it was:",s,r);const i=[],o=yt.empty();Or(r,(u,c)=>{const f=B1(e,u,n);c=Te(c);const m=s.childContextForFieldPath(f);if(c instanceof Qu)i.push(f);else{const g=fa(c,m);g!=null&&(i.push(f),o.set(f,g))}});const l=new Ct(i);return new j1(o,l,s.fieldTransforms)}function F1(t,e,n,r,s,i){const o=t.createContext(1,e,n),l=[yi(e,r,n)],u=[s];if(i.length%2!=0)throw new z(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(yi(e,i[g])),u.push(i[g+1]);const c=[],f=yt.empty();for(let g=l.length-1;g>=0;--g)if(!$1(c,l[g])){const _=l[g];let R=u[g];R=Te(R);const N=o.childContextForFieldPath(_);if(R instanceof Qu)c.push(_);else{const j=fa(R,N);j!=null&&(c.push(_),f.set(_,j))}}const m=new Ct(c);return new j1(f,m,o.fieldTransforms)}function d2(t,e,n,r=!1){return fa(n,t.createContext(r?4:3,e))}function fa(t,e){if(z1(t=Te(t)))return mp("Unsupported field value:",e,t),U1(t,e);if(t instanceof Gu)return function(r,s){if(!O1(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=fa(l,s.childContextForArray(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Te(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return YC(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=me.fromDate(r);return{timestampValue:eu(s.serializer,i)}}if(r instanceof me){const i=new me(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:eu(s.serializer,i)}}if(r instanceof gn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Lt)return{bytesValue:ZE(s.serializer,r._byteString)};if(r instanceof je){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Zf(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Xt)return function(o,l){const u=o instanceof Xt?o.toArray():o;return{mapValue:{fields:{[RE]:{stringValue:xE},[Xl]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw l.createError("VectorValues must only contain numeric values.");return Yf(l.serializer,f)})}}}}}}(r,s);if(o1(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${Nu(r)}`)}(t,e)}function U1(t,e){const n={};return TE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Or(t,(r,s)=>{const i=fa(s,e.childContextForField(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function z1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof me||t instanceof gn||t instanceof Lt||t instanceof je||t instanceof Gu||t instanceof Xt||o1(t))}function mp(t,e,n){if(!z1(n)||!wE(n)){const r=Nu(n);throw r==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function yi(t,e,n){if((e=Te(e))instanceof Wu)return e._internalPath;if(typeof e=="string")return B1(t,e);throw su("Field path arguments must be of type string or ",t,!1,void 0,n)}const f2=new RegExp("[~\\*/\\[\\]]");function B1(t,e,n){if(e.search(f2)>=0)throw su(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Wu(...e.split("."))._internalPath}catch{throw su(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function su(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new z(L.INVALID_ARGUMENT,l+t+u)}function $1(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p2{convertValue(e,n="none"){switch(xr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Rr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw G(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Or(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[Xl].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>xe(o.doubleValue));return new Xt(n)}convertGeoPoint(e){return new gn(xe(e.latitude),xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Vu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(qo(e));default:return null}}convertTimestamp(e){const n=Cr(e);return new me(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=he.fromString(e);ae(i1(r),9688,{name:e});const s=new Wo(r.get(1),r.get(3)),i=new W(r.popFirst(5));return s.isEqual(n)||Fn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1 extends p2{constructor(e){super(),this.firestore=e}convertBytes(e){return new Lt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new je(this.firestore,null,n)}}function cr(){return new pp("serverTimestamp")}const s_="@firebase/firestore",i_="4.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new m2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(yi("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class m2 extends q1{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g2(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gp{}class W1 extends gp{}function Yu(t,e,...n){let r=[];e instanceof gp&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof _p).length,l=i.filter(u=>u instanceof yp).length;if(o>1||o>0&&l>0)throw new z(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class yp extends W1{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new yp(e,n,r)}_apply(e){const n=this._parse(e);return G1(e._query,n),new Is(e.firestore,e.converter,vd(e._query,n))}_parse(e){const n=Ku(e.firestore);return function(i,o,l,u,c,f,m){let g;if(c.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new z(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){a_(m,f);const R=[];for(const N of m)R.push(o_(u,i,N));g={arrayValue:{values:R}}}else g=o_(u,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||a_(m,f),g=d2(l,o,m,f==="in"||f==="not-in");return De.create(c,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class _p extends gp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new _p(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:en.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)G1(o,u),o=vd(o,u)}(e._query,n),new Is(e.firestore,e.converter,vd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class vp extends W1{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new vp(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new z(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new z(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ko(i,o)}(e._query,this._field,this._direction);return new Is(e.firestore,e.converter,BC(e._query,n))}}function Xu(t,e="asc"){const n=e,r=yi("orderBy",t);return vp._create(r,n)}function o_(t,e,n){if(typeof(n=Te(n))=="string"){if(n==="")throw new z(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!LE(e)&&n.indexOf("/")!==-1)throw new z(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(he.fromString(n));if(!W.isDocumentKey(r))throw new z(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ey(t,new W(r))}if(n instanceof je)return Ey(t,n._key);throw new z(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Nu(n)}.`)}function a_(t,e){if(!Array.isArray(t)||t.length===0)throw new z(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function G1(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new z(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function K1(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class lo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ss extends q1{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new _l(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(yi("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new z(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=ss._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}ss._jsonSchemaVersion="firestore/documentSnapshot/1.0",ss._jsonSchema={type:Ve("string",ss._jsonSchemaVersion),bundleSource:Ve("string","DocumentSnapshot"),bundleName:Ve("string"),bundle:Ve("string")};class _l extends ss{data(e={}){return super.data(e)}}class Zs{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new lo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new _l(this._firestore,this._userDataWriter,r.key,r,new lo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new _l(s._firestore,s._userDataWriter,l.doc.key,l.doc,new lo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new _l(s._firestore,s._userDataWriter,l.doc.key,l.doc,new lo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:y2(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new z(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Zs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=$f.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function y2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G(61501,{type:t})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zs._jsonSchemaVersion="firestore/querySnapshot/1.0",Zs._jsonSchema={type:Ve("string",Zs._jsonSchemaVersion),bundleSource:Ve("string","QuerySnapshot"),bundleName:Ve("string"),bundle:Ve("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _2{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Ku(e)}set(e,n,r){this._verifyNotCommitted();const s=uh(e,this._firestore),i=K1(s.converter,n,r),o=L1(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,It.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=uh(e,this._firestore);let o;return o=typeof(n=Te(n))=="string"||n instanceof Wu?F1(this._dataReader,"WriteBatch.update",i._key,n,r,s):M1(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,It.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=uh(e,this._firestore);return this._mutations=this._mutations.concat(new Fu(n._key,It.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new z(L.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function uh(t,e){if((t=Te(t)).firestore!==e)throw new z(L.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(t){t=_n(t,je);const e=_n(t.firestore,Ss),n=qu(e);return t2(n,t._key).then(r=>v2(e,t,r))}function Ju(t){t=_n(t,Is);const e=_n(t.firestore,Ss),n=qu(e),r=new H1(e);return g2(t._query),n2(n,t._query).then(s=>new Zs(e,r,t,s))}function Q1(t,e,n,...r){t=_n(t,je);const s=_n(t.firestore,Ss),i=Ku(s);let o;return o=typeof(e=Te(e))=="string"||e instanceof Wu?F1(i,"updateDoc",t._key,e,n,r):M1(i,"updateDoc",t._key,e),ec(s,[o.toMutation(t._key,It.exists(!0))])}function Zu(t){return ec(_n(t.firestore,Ss),[new Fu(t._key,It.none())])}function Ep(t,e){const n=_n(t.firestore,Ss),r=ht(t),s=K1(t.converter,e),i=Ku(t.firestore);return ec(n,[L1(i,"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,It.exists(!1))]).then(()=>r)}function ec(t,e){const n=qu(t);return r2(n,e)}function v2(t,e,n){const r=n.docs.get(e._key),s=new H1(t);return new ss(t,s,e._key,r,new lo(n.hasPendingWrites,n.fromCache),e.converter)}function Y1(t){return t=_n(t,Ss),qu(t),new _2(t,e=>ec(t,e))}(function(e,n=!0){nC(ws),fs(new Ar("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Ss(new iC(r.getProvider("auth-internal")),new lC(o,r.getProvider("app-check-internal")),AC(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),dn(s_,i_,e),dn(s_,i_,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1="firebasestorage.googleapis.com",J1="storageBucket",w2=2*60*1e3,E2=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce extends En{constructor(e,n,r=0){super(ch(e),`Firebase Storage: ${n} (${ch(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ce.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ch(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ke;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ke||(ke={}));function ch(t){return"storage/"+t}function Tp(){const t="An unknown error occurred, please check the error payload for server response.";return new Ce(ke.UNKNOWN,t)}function T2(t){return new Ce(ke.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function I2(t){return new Ce(ke.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function S2(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ce(ke.UNAUTHENTICATED,t)}function A2(){return new Ce(ke.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function k2(t){return new Ce(ke.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function C2(){return new Ce(ke.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function R2(){return new Ce(ke.CANCELED,"User canceled the upload/download.")}function x2(t){return new Ce(ke.INVALID_URL,"Invalid URL '"+t+"'.")}function P2(t){return new Ce(ke.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function N2(){return new Ce(ke.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+J1+"' property when initializing the app?")}function b2(){return new Ce(ke.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function D2(){return new Ce(ke.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function V2(t){return new Ce(ke.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Pd(t){return new Ce(ke.INVALID_ARGUMENT,t)}function Z1(){return new Ce(ke.APP_DELETED,"The Firebase app was deleted.")}function j2(t){return new Ce(ke.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function So(t,e){return new Ce(ke.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function eo(t){throw new Ce(ke.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Rt.makeFromUrl(e,n)}catch{return new Rt(e,"")}if(r.path==="")return r;throw P2(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function c(b){b.path_=decodeURIComponent(b.path)}const f="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",_=new RegExp(`^https?://${m}/${f}/b/${s}/o${g}`,"i"),R={bucket:1,path:3},N=n===X1?"(?:storage.googleapis.com|storage.cloud.google.com)":n,j="([^?#]*)",I=new RegExp(`^https?://${N}/${s}/${j}`,"i"),A=[{regex:l,indices:u,postModify:i},{regex:_,indices:R,postModify:c},{regex:I,indices:{bucket:1,path:2},postModify:c}];for(let b=0;b<A.length;b++){const x=A[b],O=x.regex.exec(e);if(O){const w=O[x.indices.bucket];let y=O[x.indices.path];y||(y=""),r=new Rt(w,y),x.postModify(r);break}}if(r==null)throw x2(e);return r}}class O2{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L2(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function u(){return l===2}let c=!1;function f(...j){c||(c=!0,e.apply(null,j))}function m(j){s=setTimeout(()=>{s=null,t(_,u())},j)}function g(){i&&clearTimeout(i)}function _(j,...I){if(c){g();return}if(j){g(),f.call(null,j,...I);return}if(u()||o){g(),f.call(null,j,...I);return}r<64&&(r*=2);let A;l===1?(l=2,A=0):A=(r+Math.random())*1e3,m(A)}let R=!1;function N(j){R||(R=!0,g(),!c&&(s!==null?(j||(l=2),clearTimeout(s),m(0)):j||(l=1)))}return m(0),i=setTimeout(()=>{o=!0,N(!0)},n),N}function M2(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F2(t){return t!==void 0}function U2(t){return typeof t=="object"&&!Array.isArray(t)}function Ip(t){return typeof t=="string"||t instanceof String}function l_(t){return Sp()&&t instanceof Blob}function Sp(){return typeof Blob<"u"}function u_(t,e,n,r){if(r<e)throw Pd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Pd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function e0(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var is;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(is||(is={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z2(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B2{constructor(e,n,r,s,i,o,l,u,c,f,m,g=!0,_=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=f,this.connectionFactory_=m,this.retry=g,this.isUsingEmulator=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((R,N)=>{this.resolve_=R,this.reject_=N,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Ja(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===is.NO_ERROR,u=i.getStatus();if(!l||z2(u,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===is.ABORT;r(!1,new Ja(!1,null,f));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Ja(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());F2(u)?i(u):i()}catch(u){o(u)}else if(l!==null){const u=Tp();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(s.canceled){const u=this.appDelete_?Z1():R2();o(u)}else{const u=C2();o(u)}};this.canceled_?n(!1,new Ja(!1,null,!0)):this.backoffId_=L2(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&M2(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ja{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function $2(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function H2(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function q2(t,e){e&&(t["X-Firebase-GMPID"]=e)}function W2(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function G2(t,e,n,r,s,i,o=!0,l=!1){const u=e0(t.urlParams),c=t.url+u,f=Object.assign({},t.headers);return q2(f,e),$2(f,n),H2(f,i),W2(f,r),new B2(c,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K2(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Q2(...t){const e=K2();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Sp())return new Blob(t);throw new Ce(ke.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Y2(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X2(t){if(typeof atob>"u")throw V2("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class hh{constructor(e,n){this.data=e,this.contentType=n||null}}function J2(t,e){switch(t){case un.RAW:return new hh(t0(e));case un.BASE64:case un.BASE64URL:return new hh(n0(t,e));case un.DATA_URL:return new hh(eP(e),tP(e))}throw Tp()}function t0(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function Z2(t){let e;try{e=decodeURIComponent(t)}catch{throw So(un.DATA_URL,"Malformed data URL.")}return t0(e)}function n0(t,e){switch(t){case un.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw So(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case un.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw So(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=X2(e)}catch(s){throw s.message.includes("polyfill")?s:So(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class r0{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw So(un.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=nP(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function eP(t){const e=new r0(t);return e.base64?n0(un.BASE64,e.rest):Z2(e.rest)}function tP(t){return new r0(t).contentType}function nP(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,n){let r=0,s="";l_(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(l_(this.data_)){const r=this.data_,s=Y2(r,e,n);return s===null?null:new rr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new rr(r,!0)}}static getBlob(...e){if(Sp()){const n=e.map(r=>r instanceof rr?r.data_:r);return new rr(Q2.apply(null,n))}else{const n=e.map(o=>Ip(o)?J2(un.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new rr(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s0(t){let e;try{e=JSON.parse(t)}catch{return null}return U2(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function sP(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function i0(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iP(t,e){return e}class ut{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||iP}}let Za=null;function oP(t){return!Ip(t)||t.length<2?t:i0(t)}function o0(){if(Za)return Za;const t=[];t.push(new ut("bucket")),t.push(new ut("generation")),t.push(new ut("metageneration")),t.push(new ut("name","fullPath",!0));function e(i,o){return oP(o)}const n=new ut("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new ut("size");return s.xform=r,t.push(s),t.push(new ut("timeCreated")),t.push(new ut("updated")),t.push(new ut("md5Hash",null,!0)),t.push(new ut("cacheControl",null,!0)),t.push(new ut("contentDisposition",null,!0)),t.push(new ut("contentEncoding",null,!0)),t.push(new ut("contentLanguage",null,!0)),t.push(new ut("contentType",null,!0)),t.push(new ut("metadata","customMetadata",!0)),Za=t,Za}function aP(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Rt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function lP(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return aP(r,t),r}function a0(t,e,n){const r=s0(e);return r===null?null:lP(t,r,n)}function uP(t,e,n,r){const s=s0(e);if(s===null||!Ip(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const f=t.bucket,m=t.fullPath,g="/b/"+o(f)+"/o/"+o(m),_=Ap(g,n,r),R=e0({alt:"media",token:c});return _+R})[0]}function cP(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class l0{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u0(t){if(!t)throw Tp()}function hP(t,e){function n(r,s){const i=a0(t,s,e);return u0(i!==null),i}return n}function dP(t,e){function n(r,s){const i=a0(t,s,e);return u0(i!==null),uP(i,s,t.host,t._protocol)}return n}function c0(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=A2():s=S2():n.getStatus()===402?s=I2(t.bucket):n.getStatus()===403?s=k2(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function fP(t){const e=c0(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=T2(t.path)),i.serverResponse=s.serverResponse,i}return n}function pP(t,e,n){const r=e.fullServerUrl(),s=Ap(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new l0(s,i,dP(t,n),o);return l.errorHandler=fP(e),l}function mP(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function gP(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=mP(null,e)),r}function yP(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let A="";for(let b=0;b<2;b++)A=A+Math.random().toString().slice(2);return A}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const c=gP(e,r,s),f=cP(c,n),m="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,g=`\r
--`+u+"--",_=rr.getBlob(m,r,g);if(_===null)throw b2();const R={name:c.fullPath},N=Ap(i,t.host,t._protocol),j="POST",I=t.maxUploadRetryTime,E=new l0(N,j,hP(t,n),I);return E.urlParams=R,E.headers=o,E.body=_.uploadData(),E.errorHandler=c0(e),E}class _P{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=is.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=is.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=is.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s,i){if(this.sent_)throw eo("cannot .send() more than once");if(jr(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw eo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw eo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw eo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw eo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class vP extends _P{initXhr(){this.xhr_.responseType="text"}}function h0(){return new vP}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,n){this._service=e,n instanceof Rt?this._location=n:this._location=Rt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new gs(e,n)}get root(){const e=new Rt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return i0(this._location.path)}get storage(){return this._service}get parent(){const e=rP(this._location.path);if(e===null)return null;const n=new Rt(this._location.bucket,e);return new gs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw j2(e)}}function wP(t,e,n){t._throwIfRoot("uploadBytes");const r=yP(t.storage,t._location,o0(),new rr(e,!0),n);return t.storage.makeRequestWithTokens(r,h0).then(s=>({metadata:s,ref:t}))}function EP(t){t._throwIfRoot("getDownloadURL");const e=pP(t.storage,t._location,o0());return t.storage.makeRequestWithTokens(e,h0).then(n=>{if(n===null)throw D2();return n})}function TP(t,e){const n=sP(t._location.path,e),r=new Rt(t._location.bucket,n);return new gs(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IP(t){return/^[A-Za-z]+:\/\//.test(t)}function SP(t,e){return new gs(t,e)}function d0(t,e){if(t instanceof kp){const n=t;if(n._bucket==null)throw N2();const r=new gs(n,n._bucket);return e!=null?d0(r,e):r}else return e!==void 0?TP(t,e):t}function AP(t,e){if(e&&IP(e)){if(t instanceof kp)return SP(t,e);throw Pd("To use ref(service, url), the first argument must be a Storage instance.")}else return d0(t,e)}function c_(t,e){const n=e==null?void 0:e[J1];return n==null?null:Rt.makeFromBucketSpec(n,t)}function kP(t,e,n,r={}){t.host=`${e}:${n}`;const s=jr(e);s&&(Lf(`https://${t.host}/b`),Mf("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:iE(i,t.app.options.projectId))}class kp{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=X1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=w2,this._maxUploadRetryTime=E2,this._requests=new Set,s!=null?this._bucket=Rt.makeFromBucketSpec(s,this._host):this._bucket=c_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Rt.makeFromBucketSpec(this._url,e):this._bucket=c_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){u_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){u_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Ot(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new gs(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new O2(Z1());{const o=G2(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const h_="@firebase/storage",d_="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f0="storage";function Nd(t,e,n){return t=Te(t),wP(t,e,n)}function bd(t){return t=Te(t),EP(t)}function Dd(t,e){return t=Te(t),AP(t,e)}function CP(t=zf(),e){t=Te(t);const r=Pu(t,f0).getImmediate({identifier:e}),s=nE("storage");return s&&RP(r,...s),r}function RP(t,e,n,r={}){kP(t,e,n,r)}function xP(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new kp(n,r,s,e,ws)}function PP(){fs(new Ar(f0,xP,"PUBLIC").setMultipleInstances(!0)),dn(h_,d_,""),dn(h_,d_,"esm2020")}PP();var NP="firebase",bP="12.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dn(NP,bP,"app");function p0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const DP=p0,m0=new oa("auth","Firebase",p0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu=new Ff("@firebase/auth");function VP(t,...e){iu.logLevel<=ne.WARN&&iu.warn(`Auth (${ws}): ${t}`,...e)}function vl(t,...e){iu.logLevel<=ne.ERROR&&iu.error(`Auth (${ws}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(t,...e){throw Rp(t,...e)}function Jt(t,...e){return Rp(t,...e)}function Cp(t,e,n){const r={...DP(),[e]:n};return new oa("auth","Firebase",r).create(e,{appName:t.name})}function os(t){return Cp(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function jP(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&wn(t,"argument-error"),Cp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Rp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return m0.create(t,...e)}function K(t,e,...n){if(!t)throw Rp(e,...n)}function xn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw vl(e),new Error(e)}function zn(t,e){t||xn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function OP(){return f_()==="http:"||f_()==="https:"}function f_(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(OP()||jA()||"connection"in navigator)?navigator.onLine:!0}function MP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,n){this.shortDelay=e,this.longDelay=n,zn(n>e,"Short delay should be less than long delay!"),this.isMobile=bA()||OA()}get(){return LP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xp(t,e){zn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UP=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],zP=new pa(3e4,6e4);function Pp(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Ri(t,e,n,r,s={}){return y0(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=aa({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...i};return VA()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&jr(t.emulatorConfig.host)&&(c.credentials="include"),g0.fetch()(await _0(t,t.config.apiHost,n,l),c)})}async function y0(t,e,n){t._canInitEmulator=!1;const r={...FP,...e};try{const s=new $P(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw el(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw el(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw el(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw el(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Cp(t,f,c);wn(t,f)}}catch(s){if(s instanceof En)throw s;wn(t,"network-request-failed",{message:String(s)})}}async function BP(t,e,n,r,s={}){const i=await Ri(t,e,n,r,s);return"mfaPendingCredential"in i&&wn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function _0(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?xp(t.config,s):`${t.config.apiScheme}://${s}`;return UP.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class $P{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Jt(this.auth,"network-request-failed")),zP.get())})}}function el(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Jt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HP(t,e){return Ri(t,"POST","/v1/accounts:delete",e)}async function ou(t,e){return Ri(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qP(t,e=!1){const n=Te(t),r=await n.getIdToken(e),s=Np(r);K(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ao(dh(s.auth_time)),issuedAtTime:Ao(dh(s.iat)),expirationTime:Ao(dh(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function dh(t){return Number(t)*1e3}function Np(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return vl("JWT malformed, contained fewer than 3 sections"),null;try{const s=eE(n);return s?JSON.parse(s):(vl("Failed to decode base64 JWT payload"),null)}catch(s){return vl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function p_(t){const e=Np(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof En&&WP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function WP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ao(this.lastLoginAt),this.creationTime=Ao(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function au(t){var m;const e=t.auth,n=await t.getIdToken(),r=await Jo(t,ou(e,{idToken:n}));K(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(m=s.providerUserInfo)!=null&&m.length?v0(s.providerUserInfo):[],o=QP(t.providerData,i),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new jd(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function KP(t){const e=Te(t);await au(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function QP(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function v0(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YP(t,e){const n=await y0(t,{},async()=>{const r=aa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await _0(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&jr(t.emulatorConfig.host)&&(u.credentials="include"),g0.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function XP(t,e){return Ri(t,"POST","/v2/accounts:revokeToken",Pp(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):p_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=p_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await YP(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ei;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(K(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(K(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ei,this.toJSON())}_performRefresh(){return xn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Kt{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new GP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new jd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Jo(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return qP(this,e)}reload(){return KP(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Kt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await au(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ot(this.auth.app))return Promise.reject(os(this.auth));const e=await this.getIdToken();return await Jo(this,HP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:m,emailVerified:g,isAnonymous:_,providerData:R,stsTokenManager:N}=n;K(m&&N,e,"internal-error");const j=ei.fromJSON(this.name,N);K(typeof m=="string",e,"internal-error"),Jn(r,e.name),Jn(s,e.name),K(typeof g=="boolean",e,"internal-error"),K(typeof _=="boolean",e,"internal-error"),Jn(i,e.name),Jn(o,e.name),Jn(l,e.name),Jn(u,e.name),Jn(c,e.name),Jn(f,e.name);const I=new Kt({uid:m,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:_,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:j,createdAt:c,lastLoginAt:f});return R&&Array.isArray(R)&&(I.providerData=R.map(E=>({...E}))),u&&(I._redirectEventId=u),I}static async _fromIdTokenResponse(e,n,r=!1){const s=new ei;s.updateFromServerResponse(n);const i=new Kt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await au(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];K(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?v0(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new ei;l.updateFromIdToken(r);const u=new Kt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new jd(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_=new Map;function Pn(t){zn(t instanceof Function,"Expected a class definition");let e=m_.get(t);return e?(zn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,m_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}w0.type="NONE";const g_=w0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(t,e,n){return`firebase:${t}:${e}:${n}`}class ti{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=wl(this.userKey,s.apiKey,i),this.fullPersistenceKey=wl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ou(this.auth,{idToken:e}).catch(()=>{});return n?Kt._fromGetAccountInfoResponse(this.auth,n,e):null}return Kt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ti(Pn(g_),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Pn(g_);const o=wl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){let m;if(typeof f=="string"){const g=await ou(e,{idToken:f}).catch(()=>{});if(!g)break;m=await Kt._fromGetAccountInfoResponse(e,g,f)}else m=Kt._fromJSON(e,f);c!==i&&(l=m),i=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new ti(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new ti(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(S0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(E0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(k0(e))return"Blackberry";if(C0(e))return"Webos";if(T0(e))return"Safari";if((e.includes("chrome/")||I0(e))&&!e.includes("edge/"))return"Chrome";if(A0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function E0(t=ot()){return/firefox\//i.test(t)}function T0(t=ot()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function I0(t=ot()){return/crios\//i.test(t)}function S0(t=ot()){return/iemobile/i.test(t)}function A0(t=ot()){return/android/i.test(t)}function k0(t=ot()){return/blackberry/i.test(t)}function C0(t=ot()){return/webos/i.test(t)}function bp(t=ot()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function JP(t=ot()){var e;return bp(t)&&!!((e=window.navigator)!=null&&e.standalone)}function ZP(){return LA()&&document.documentMode===10}function R0(t=ot()){return bp(t)||A0(t)||C0(t)||k0(t)||/windows phone/i.test(t)||S0(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x0(t,e=[]){let n;switch(t){case"Browser":n=y_(ot());break;case"Worker":n=`${y_(ot())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ws}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tN(t,e={}){return Ri(t,"GET","/v2/passwordPolicy",Pp(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nN=6;class rN{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??nN,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new __(this),this.idTokenSubscription=new __(this),this.beforeStateQueue=new eN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=m0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Pn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await ti.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ou(this,{idToken:e}),r=await Kt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Ot(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await au(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=MP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ot(this.app))return Promise.reject(os(this));const n=e?Te(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ot(this.app)?Promise.reject(os(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ot(this.app)?Promise.reject(os(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Pn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await tN(this),n=new rN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new oa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await XP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Pn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await ti.create(this,[Pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=x0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Ot(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&VP(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function tc(t){return Te(t)}class __{constructor(e){this.auth=e,this.observer=null,this.addObserver=qA(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function iN(t){Dp=t}function oN(t){return Dp.loadJS(t)}function aN(){return Dp.gapiScript}function lN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uN(t,e){const n=Pu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ds(i,e??{}))return s;wn(s,"already-initialized")}return n.initialize({options:e})}function cN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function hN(t,e,n){const r=tc(t);K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=P0(e),{host:o,port:l}=dN(e),u=l===null?"":`:${l}`,c={url:`${i}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){K(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),K(ds(c,r.config.emulator)&&ds(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,jr(o)?(Lf(`${i}//${o}${u}`),Mf("Auth",!0)):fN()}function P0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function dN(t){const e=P0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:v_(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:v_(o)}}}function v_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function fN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return xn("not implemented")}_getIdTokenResponse(e){return xn("not implemented")}_linkToIdToken(e,n){return xn("not implemented")}_getReauthenticationResolver(e){return xn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ni(t,e){return BP(t,"POST","/v1/accounts:signInWithIdp",Pp(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pN="http://localhost";class ys extends N0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ys(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new ys(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ni(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ni(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ni(e,n)}buildRequest(){const e={requestUri:pN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=aa(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma extends Vp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends ma{constructor(){super("facebook.com")}static credential(e){return ys._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.FACEBOOK_SIGN_IN_METHOD="facebook.com";sr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends ma{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ys._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return kn.credential(n,r)}catch{return null}}}kn.GOOGLE_SIGN_IN_METHOD="google.com";kn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends ma{constructor(){super("github.com")}static credential(e){return ys._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ir.credential(e.oauthAccessToken)}catch{return null}}}ir.GITHUB_SIGN_IN_METHOD="github.com";ir.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends ma{constructor(){super("twitter.com")}static credential(e,n){return ys._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return or.credential(n,r)}catch{return null}}}or.TWITTER_SIGN_IN_METHOD="twitter.com";or.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Kt._fromIdTokenResponse(e,r,s),o=w_(r);return new _i({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=w_(r);return new _i({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function w_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu extends En{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,lu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new lu(e,n,r,s)}}function b0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?lu._fromErrorAndOperation(t,i,e,r):i})}async function mN(t,e,n=!1){const r=await Jo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _i._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gN(t,e,n=!1){const{auth:r}=t;if(Ot(r.app))return Promise.reject(os(r));const s="reauthenticate";try{const i=await Jo(t,b0(r,s,e,t),n);K(i.idToken,r,"internal-error");const o=Np(i.idToken);K(o,r,"internal-error");const{sub:l}=o;return K(t.uid===l,r,"user-mismatch"),_i._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&wn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yN(t,e,n=!1){if(Ot(t.app))return Promise.reject(os(t));const r="signIn",s=await b0(t,r,e),i=await _i._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function _N(t,e,n,r){return Te(t).onIdTokenChanged(e,n,r)}function vN(t,e,n){return Te(t).beforeAuthStateChanged(e,n)}function wN(t,e,n,r){return Te(t).onAuthStateChanged(e,n,r)}function EN(t){return Te(t).signOut()}const uu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(uu,"1"),this.storage.removeItem(uu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TN=1e3,IN=10;class V0 extends D0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=R0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);ZP()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,IN):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},TN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}V0.type="LOCAL";const SN=V0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0 extends D0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}j0.type="SESSION";const O0=j0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new nc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async c=>c(n.origin,i)),u=await AN(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const c=jp("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const g=m;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(){return window}function CN(t){yn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L0(){return typeof yn().WorkerGlobalScope<"u"&&typeof yn().importScripts=="function"}async function RN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function PN(){return L0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0="firebaseLocalStorageDb",NN=1,cu="firebaseLocalStorage",F0="fbase_key";class ga{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function rc(t,e){return t.transaction([cu],e?"readwrite":"readonly").objectStore(cu)}function bN(){const t=indexedDB.deleteDatabase(M0);return new ga(t).toPromise()}function Od(){const t=indexedDB.open(M0,NN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(cu,{keyPath:F0})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(cu)?e(r):(r.close(),await bN(),e(await Od()))})})}async function E_(t,e,n){const r=rc(t,!0).put({[F0]:e,value:n});return new ga(r).toPromise()}async function DN(t,e){const n=rc(t,!1).get(e),r=await new ga(n).toPromise();return r===void 0?null:r.value}function T_(t,e){const n=rc(t,!0).delete(e);return new ga(n).toPromise()}const VN=800,jN=3;class U0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Od(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>jN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return L0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nc._getInstance(PN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await RN(),!this.activeServiceWorker)return;this.sender=new kN(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Od();return await E_(e,uu,"1"),await T_(e,uu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>E_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>DN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>T_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=rc(s,!1).getAll();return new ga(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),VN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}U0.type="LOCAL";const ON=U0;new pa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z0(t,e){return e?Pn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op extends N0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ni(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ni(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ni(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function LN(t){return yN(t.auth,new Op(t),t.bypassAuthState)}function MN(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),gN(n,new Op(t),t.bypassAuthState)}async function FN(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),mN(n,new Op(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return LN;case"linkViaPopup":case"linkViaRedirect":return FN;case"reauthViaPopup":case"reauthViaRedirect":return MN;default:wn(this.auth,"internal-error")}}resolve(e){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UN=new pa(2e3,1e4);async function zN(t,e,n){if(Ot(t.app))return Promise.reject(Jt(t,"operation-not-supported-in-this-environment"));const r=tc(t);jP(t,e,Vp);const s=z0(r,n);return new ts(r,"signInViaPopup",e,s).executeNotNull()}class ts extends B0{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ts.currentPopupAction&&ts.currentPopupAction.cancel(),ts.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){zn(this.filter.length===1,"Popup operations only handle one event");const e=jp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ts.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,UN.get())};e()}}ts.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BN="pendingRedirect",El=new Map;class $N extends B0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=El.get(this.auth._key());if(!e){try{const r=await HN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}El.set(this.auth._key(),e)}return this.bypassAuthState||El.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function HN(t,e){const n=GN(e),r=WN(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function qN(t,e){El.set(t._key(),e)}function WN(t){return Pn(t._redirectPersistence)}function GN(t){return wl(BN,t.config.apiKey,t.name)}async function KN(t,e,n=!1){if(Ot(t.app))return Promise.reject(os(t));const r=tc(t),s=z0(r,e),o=await new $N(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QN=10*60*1e3;class YN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!XN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!$0(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Jt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=QN&&this.cachedEventUids.clear(),this.cachedEventUids.has(I_(e))}saveEventToCache(e){this.cachedEventUids.add(I_(e)),this.lastProcessedEventTime=Date.now()}}function I_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function $0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function XN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JN(t,e={}){return Ri(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,eb=/^https?/;async function tb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await JN(t);for(const n of e)try{if(nb(n))return}catch{}wn(t,"unauthorized-domain")}function nb(t){const e=Vd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!eb.test(n))return!1;if(ZN.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rb=new pa(3e4,6e4);function S_(){const t=yn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function sb(t){return new Promise((e,n)=>{var s,i,o;function r(){S_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{S_(),n(Jt(t,"network-request-failed"))},timeout:rb.get()})}if((i=(s=yn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=yn().gapi)!=null&&o.load)r();else{const l=lN("iframefcb");return yn()[l]=()=>{gapi.load?r():n(Jt(t,"network-request-failed"))},oN(`${aN()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Tl=null,e})}let Tl=null;function ib(t){return Tl=Tl||sb(t),Tl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob=new pa(5e3,15e3),ab="__/auth/iframe",lb="emulator/auth/iframe",ub={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hb(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?xp(e,lb):`https://${t.config.authDomain}/${ab}`,r={apiKey:e.apiKey,appName:t.name,v:ws},s=cb.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${aa(r).slice(1)}`}async function db(t){const e=await ib(t),n=yn().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:hb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ub,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Jt(t,"network-request-failed"),l=yn().setTimeout(()=>{i(o)},ob.get());function u(){yn().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pb=500,mb=600,gb="_blank",yb="http://localhost";class A_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _b(t,e,n,r=pb,s=mb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...fb,width:r.toString(),height:s.toString(),top:i,left:o},c=ot().toLowerCase();n&&(l=I0(c)?gb:n),E0(c)&&(e=e||yb,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[_,R])=>`${g}${_}=${R},`,"");if(JP(c)&&l!=="_self")return vb(e||"",l),new A_(null);const m=window.open(e||"",l,f);K(m,t,"popup-blocked");try{m.focus()}catch{}return new A_(m)}function vb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wb="__/auth/handler",Eb="emulator/auth/handler",Tb=encodeURIComponent("fac");async function k_(t,e,n,r,s,i){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ws,eventId:s};if(e instanceof Vp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",HA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof ma){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${Tb}=${encodeURIComponent(u)}`:"";return`${Ib(t)}?${aa(l).slice(1)}${c}`}function Ib({config:t}){return t.emulator?xp(t,Eb):`https://${t.authDomain}/${wb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh="webStorageSupport";class Sb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=O0,this._completeRedirectFn=KN,this._overrideRedirectResult=qN}async _openPopup(e,n,r,s){var o;zn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await k_(e,n,r,Vd(),s);return _b(e,i,jp())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await k_(e,n,r,Vd(),s);return CN(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(zn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await db(e),r=new YN(e);return n.register("authEvent",s=>(K(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(fh,{type:fh},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[fh];i!==void 0&&n(!!i),wn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=tb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return R0()||T0()||bp()}}const Ab=Sb;var C_="@firebase/auth",R_="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Rb(t){fs(new Ar("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:x0(t)},c=new sN(r,s,i,u);return cN(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),fs(new Ar("auth-internal",e=>{const n=tc(e.getProvider("auth").getImmediate());return(r=>new kb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dn(C_,R_,Cb(t)),dn(C_,R_,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xb=5*60,Pb=sE("authIdTokenMaxAge")||xb;let x_=null;const Nb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Pb)return;const s=n==null?void 0:n.token;x_!==s&&(x_=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function bb(t=zf()){const e=Pu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=uN(t,{popupRedirectResolver:Ab,persistence:[ON,SN,O0]}),r=sE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Nb(i.toString());vN(n,o,()=>o(n.currentUser)),_N(n,l=>o(l))}}const s=tE("auth");return s&&hN(n,`http://${s}`),n}function Db(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}iN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Jt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Db().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Rb("Browser");const Vb={apiKey:"AIzaSyChYmVhjDixj7-zjW8T_vVGFX_g18a5NDw",authDomain:"nurazkhan-50303.firebaseapp.com",projectId:"nurazkhan-50303",storageBucket:"nurazkhan-50303.firebasestorage.app",messagingSenderId:"298709005555",appId:"1:298709005555:web:b8df5cbb5f041b48fff386"},Lp=lE(Vb),Zo=a2(Lp),Ld=CP(Lp),Dn=bb(Lp),_t=()=>{const t=Dn.currentUser;if(!t)throw new Error("User not authenticated");return ht(Zo,"users",t.uid)},Tn={async create(t){const e=_t(),n=mn(e,"projects"),r=Y1(Zo),s=ht(n),i=s.id,o={name:t.name,description:t.description||"",thumbnailUrl:null,folderId:t.folderId||null,tags:t.tags||[],createdAt:cr(),updatedAt:cr(),currentVersionId:null};if(t.thumbnail instanceof File){const f=Dd(Ld,`users/${Dn.currentUser.uid}/thumbnails/${i}/${t.thumbnail.name}`);await Nd(f,t.thumbnail),o.thumbnailUrl=await bd(f)}const l=mn(s,"versions"),u=ht(l),c=u.id;return o.currentVersionId=c,r.set(s,o),r.set(u,{name:"v1.0",description:"Initial version",parentVersionId:null,todos:[],errors:[],createdAt:cr()}),await r.commit(),i},async getAll(){const t=Dn.currentUser;if(!t)return[];const e=ht(Zo,"users",t.uid),n=Yu(mn(e,"projects"),Xu("updatedAt","desc"));return(await Ju(n)).docs.map(s=>{var i,o;return{id:s.id,...s.data(),createdAt:((i=s.data().createdAt)==null?void 0:i.toDate())||new Date,updatedAt:((o=s.data().updatedAt)==null?void 0:o.toDate())||new Date}})},async getById(t){var s,i;const e=_t(),n=ht(e,"projects",t),r=await wp(n);if(r.exists())return{id:r.id,...r.data(),createdAt:(s=r.data().createdAt)==null?void 0:s.toDate(),updatedAt:(i=r.data().updatedAt)==null?void 0:i.toDate()};throw new Error("Project not found")},async update(t,e){const n=_t(),r=ht(n,"projects",t),s={...e,updatedAt:cr()};if(e.thumbnail instanceof File){const i=Dd(Ld,`users/${Dn.currentUser.uid}/thumbnails/${t}/${e.thumbnail.name}`);await Nd(i,e.thumbnail),s.thumbnailUrl=await bd(i),delete s.thumbnail}await Q1(r,s)},async delete(t){const e=_t(),n=ht(e,"projects",t);await Zu(n)}},In={async create(t,e){const n=_t(),r=mn(n,"projects",t,"versions"),s=await Ep(r,{name:e.name,description:e.description||"",parentVersionId:e.parentVersionId||null,todos:e.todos||[],errors:e.errors||[],createdAt:cr()});if(e.parentVersionId&&e.copyResources){const i=await Yr.getByVersion(t,e.parentVersionId),o=s.id,l=Y1(Zo),u=mn(n,"projects",t,"versions",o,"resources");i.forEach(c=>{const f=ht(u);l.set(f,{name:c.name,type:c.type,url:c.url,metadata:c.metadata,createdAt:cr()})}),await l.commit()}return s.id},async getByProject(t){const e=_t(),n=Yu(mn(e,"projects",t,"versions"),Xu("createdAt","desc"));return(await Ju(n)).docs.map(s=>{var i;return{id:s.id,...s.data(),createdAt:(i=s.data().createdAt)==null?void 0:i.toDate()}})},async getById(t,e){var i;const n=_t(),r=ht(n,"projects",t,"versions",e),s=await wp(r);return{id:s.id,...s.data(),createdAt:(i=s.data().createdAt)==null?void 0:i.toDate()}},async update(t,e,n){const r=_t(),s=ht(r,"projects",t,"versions",e);await Q1(s,n)},async delete(t,e){const n=_t(),r=ht(n,"projects",t,"versions",e);await Zu(r)}},Yr={async create(t,e,n){const r=_t(),s=mn(r,"projects",t,"versions",e,"resources");let i=n.url||null;if(n.data instanceof File){const l=`users/${Dn.currentUser.uid}/projects/${t}/versions/${e}/${Date.now()}_${n.name}`,u=Dd(Ld,l);await Nd(u,n.data),i=await bd(u)}return(await Ep(s,{name:n.name,type:n.type,url:i,metadata:n.metadata||{},createdAt:cr()})).id},async getByVersion(t,e){const n=_t(),r=mn(n,"projects",t,"versions",e,"resources"),s=Yu(r,Xu("createdAt","desc"));return(await Ju(s)).docs.map(o=>{var l;return{id:o.id,...o.data(),data:null,createdAt:(l=o.data().createdAt)==null?void 0:l.toDate()}})},async delete(t,e,n){const r=_t(),s=ht(r,"projects",t,"versions",e,"resources",n),i=await wp(s);i.exists()&&i.data().url&&i.data().url.startsWith("http"),await Zu(s)}},ph={async create(t){const e=_t(),n=mn(e,"folders");return(await Ep(n,{name:t,createdAt:cr()})).id},async getAll(){const t=Dn.currentUser;if(!t)return[];const e=ht(Zo,"users",t.uid),n=Yu(mn(e,"folders"),Xu("name"));return(await Ju(n)).docs.map(s=>({id:s.id,...s.data()}))},async delete(t){const e=_t();await Zu(ht(e,"folders",t))}},Xe=wA((t,e)=>({user:null,authLoading:!0,projects:[],folders:[],currentProject:null,currentVersion:null,versions:[],resources:[],view:"list",sidebarOpen:!0,isLoading:!1,initAuth:()=>wN(Dn,async r=>{t({user:r,authLoading:!1}),r?(await e().loadProjects(),await e().loadFolders()):t({projects:[],folders:[],currentProject:null})}),login:async()=>{try{const n=new kn;await zN(Dn,n)}catch(n){throw console.error("Login failed:",n),n}},logout:async()=>{await EN(Dn),t({user:null,projects:[],folders:[]})},setView:n=>t({view:n}),toggleSidebar:()=>t(n=>({sidebarOpen:!n.sidebarOpen})),setLoading:n=>t({isLoading:n}),loadFolders:async()=>{if(!e().user)return;const n=await ph.getAll();t({folders:n})},createFolder:async n=>{await ph.create(n),await e().loadFolders()},deleteFolder:async n=>{await ph.delete(n),await e().loadFolders()},loadProjects:async()=>{if(e().user){t({isLoading:!0});try{const n=await Tn.getAll();t({projects:n,isLoading:!1})}catch(n){console.error(n),t({isLoading:!1})}}},createProject:async n=>{const r=await Tn.create(n);return await e().loadProjects(),r},selectProject:async n=>{if(!n){t({currentProject:null,currentVersion:null,versions:[],resources:[]});return}t({isLoading:!0});try{const r=await Tn.getById(n),s=await In.getByProject(n);let i=null,o=[];if(r.currentVersionId){const l=s.find(u=>u.id===r.currentVersionId);l&&(i=l,o=await Yr.getByVersion(n,r.currentVersionId))}t({currentProject:r,currentVersion:i,versions:s,resources:o,isLoading:!1})}catch(r){console.error(r),t({isLoading:!1})}},updateProject:async(n,r)=>{var s;if(await Tn.update(n,r),await e().loadProjects(),((s=e().currentProject)==null?void 0:s.id)===n){const i=await Tn.getById(n);t({currentProject:i})}},deleteProject:async n=>{var r;await Tn.delete(n),await e().loadProjects(),((r=e().currentProject)==null?void 0:r.id)===n&&t({currentProject:null,currentVersion:null,versions:[],resources:[]})},createVersion:async(n,r)=>{const s=await In.create(n,r),i=await In.getByProject(n);await Tn.update(n,{currentVersionId:s});const o=await Tn.getById(n);return t({versions:i,currentProject:o}),s},selectVersion:async n=>{const r=e().currentProject.id,s=e().versions.find(o=>o.id===n)||await In.getById(r,n),i=await Yr.getByVersion(r,n);e().currentProject&&await Tn.update(r,{currentVersionId:n}),t({currentVersion:s,resources:i})},updateVersion:async(n,r)=>{var i;const s=e().currentProject.id;if(await In.update(s,n,r),((i=e().currentVersion)==null?void 0:i.id)===n){const o=await In.getByProject(s),l=o.find(u=>u.id===n);t({currentVersion:l,versions:o})}else{const o=await In.getByProject(s);t({versions:o})}},deleteVersion:async n=>{var i;const r=e().currentProject.id;await In.delete(r,n);const s=await In.getByProject(r);t({versions:s}),((i=e().currentVersion)==null?void 0:i.id)===n&&t({currentVersion:s[0]||null,resources:[]})},addResource:async(n,r)=>{const s=e().currentProject.id;await Yr.create(s,n,r);const i=await Yr.getByVersion(s,n);t({resources:i})},updateResource:async(n,r)=>{},deleteResource:async n=>{const r=e().currentProject.id,s=e().currentVersion.id;await Yr.delete(r,s,n);const i=await Yr.getByVersion(r,s);t({resources:i})}}));/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var jb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),J=(t,e)=>{const n=B.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:l="",children:u,...c},f)=>B.createElement("svg",{ref:f,...jb,width:s,height:s,stroke:r,strokeWidth:o?Number(i)*24/Number(s):i,className:["lucide",`lucide-${Ob(t)}`,l].join(" "),...c},[...e.map(([m,g])=>B.createElement(m,g)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lb=J("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=J("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb=J("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fb=J("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=J("Bug",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=J("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=J("CheckSquare",[["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}],["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",key:"1jnkn4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb=J("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=J("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=J("CircuitBoard",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M11 9h4a2 2 0 0 0 2-2V3",key:"1ve2rv"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"M7 21v-4a2 2 0 0 1 2-2h4",key:"1fwkro"}],["circle",{cx:"15",cy:"15",r:"2",key:"3i40o0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=J("Clipboard",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=J("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=J("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sc=J("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=J("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=J("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ea=J("FileCode",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=J("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=J("FileType",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"M9 13v-1h6v1",key:"1bb014"}],["path",{d:"M11 18h2",key:"12mj7e"}],["path",{d:"M12 12v6",key:"3ahymv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hu=J("File",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=J("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=J("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vi=J("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ya=J("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=J("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=J("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qb=J("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=J("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=J("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=J("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=J("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eD=J("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tD=J("PenSquare",[["path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1qinfi"}],["path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z",key:"w2jsv5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tn=J("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nD=J("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rD=J("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sD=J("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iD=J("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oD=J("Tag",[["path",{d:"M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z",key:"14b2ls"}],["path",{d:"M7 7h.01",key:"7u93v4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mr=J("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=J("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P_=J("Usb",[["circle",{cx:"10",cy:"7",r:"1",key:"dypaad"}],["circle",{cx:"4",cy:"20",r:"1",key:"22iqad"}],["path",{d:"M4.7 19.3 19 5",key:"1enqfc"}],["path",{d:"m21 3-3 1 2 2Z",key:"d3ov82"}],["path",{d:"M9.26 7.68 5 12l2 5",key:"1esawj"}],["path",{d:"m10 14 5 2 3.5-3.5",key:"v8oal5"}],["path",{d:"m18 12 1-1 1 1-1 1Z",key:"1bh22v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=J("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=J("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function aD(){var A;const{projects:t,folders:e,currentProject:n,toggleSidebar:r,selectProject:s,createFolder:i,deleteFolder:o,logout:l,user:u}=Xe(),[c,f]=B.useState(""),[m,g]=B.useState({}),_=b=>{g(x=>({...x,[b]:!x[b]}))},R=async()=>{const b=prompt("Folder Name:");b&&await i(b)},N=async(b,x)=>{b.stopPropagation(),confirm("Delete this folder? Projects inside will be moved to root.")&&await o(x)},j=t.filter(b=>b.name.toLowerCase().includes(c.toLowerCase())),I=b=>j.filter(x=>x.folderId===b),E=j.filter(b=>!b.folderId);return d.jsxs("aside",{className:"sidebar",children:[d.jsxs("div",{className:"sidebar-header",children:[d.jsxs("div",{className:"logo",children:[d.jsx(sc,{className:"logo-icon"}),d.jsx("span",{className:"logo-text",children:"NiroVault"})]}),d.jsx("button",{className:"btn btn-icon btn-ghost",onClick:r,children:d.jsx($b,{})})]}),d.jsxs("div",{className:"sidebar-content",children:[d.jsxs("div",{className:"sidebar-user",children:[d.jsx("div",{className:"user-avatar",children:u!=null&&u.photoURL?d.jsx("img",{src:u.photoURL,alt:u.displayName}):d.jsx("div",{className:"avatar-placeholder",children:(A=u==null?void 0:u.email)==null?void 0:A[0].toUpperCase()})}),d.jsxs("div",{className:"user-info",children:[d.jsx("span",{className:"user-name truncate",children:(u==null?void 0:u.displayName)||"User"}),d.jsx("span",{className:"user-email truncate",children:u==null?void 0:u.email})]})]}),d.jsxs("div",{className:"sidebar-search",children:[d.jsx(sD,{size:16}),d.jsx("input",{type:"text",placeholder:"Search projects...",className:"input",value:c,onChange:b=>f(b.target.value)})]}),d.jsx("div",{className:"sidebar-actions",children:d.jsxs("button",{className:"btn btn-sm btn-ghost",onClick:R,children:[d.jsx(Ud,{size:14}),"New Folder"]})}),d.jsxs("nav",{className:"sidebar-nav",children:[e.map(b=>{const x=I(b.id),O=m[b.id];return c&&x.length===0?null:d.jsxs("div",{className:"nav-section",children:[d.jsxs("div",{className:"nav-section-header",onClick:()=>_(b.id),children:[d.jsxs("div",{className:"folder-label",children:[O?d.jsx(zp,{size:14}):d.jsx(Ud,{size:14}),d.jsx("span",{className:"truncate",children:b.name}),d.jsx("span",{className:"badge badge-sm",children:x.length})]}),d.jsx("button",{className:"btn btn-icon btn-ghost btn-xs folder-menu",onClick:w=>N(w,b.id),children:d.jsx(Mr,{size:12})})]}),O&&d.jsxs("ul",{className:"nav-list",children:[x.map(w=>d.jsx("li",{children:d.jsx("button",{className:`nav-item ${(n==null?void 0:n.id)===w.id?"active":""}`,onClick:()=>s(w.id),children:d.jsx("span",{className:"truncate",children:w.name})})},w.id)),x.length===0&&d.jsx("li",{className:"nav-empty",children:"Empty folder"})]})]},b.id)}),d.jsxs("div",{className:"nav-section",children:[d.jsx("span",{className:"nav-section-title",children:"Root Projects"}),d.jsxs("ul",{className:"nav-list",children:[E.map(b=>d.jsx("li",{children:d.jsx("button",{className:`nav-item ${(n==null?void 0:n.id)===b.id?"active":""}`,onClick:()=>s(b.id),children:d.jsx("span",{className:"truncate",children:b.name})})},b.id)),E.length===0&&e.length===0&&d.jsx("li",{className:"nav-empty",children:"No projects found"})]})]})]})]}),d.jsx("div",{className:"sidebar-footer",children:d.jsxs("button",{className:"btn btn-ghost nav-item",onClick:l,children:[d.jsx(Xb,{size:16}),d.jsx("span",{children:"Sign Out"})]})})]})}function lD({children:t,onCreateProject:e}){const{projects:n,currentProject:r,sidebarOpen:s,toggleSidebar:i,selectProject:o,view:l,setView:u}=Xe();return d.jsxs("div",{className:`layout ${s?"sidebar-open":"sidebar-closed"}`,children:[d.jsx(aD,{}),d.jsxs("main",{className:"main-content",children:[d.jsxs("header",{className:"main-header",children:[d.jsxs("div",{className:"header-left",children:[!s&&d.jsx("button",{className:"btn btn-icon btn-ghost",onClick:i,children:d.jsx(Zb,{})}),d.jsx("h1",{className:"header-title",children:r?r.name:"All Projects"})]}),d.jsx("div",{className:"header-right",children:d.jsxs("div",{className:"view-toggle",children:[d.jsx("button",{className:`btn btn-icon btn-ghost ${l==="grid"?"active":""}`,onClick:()=>u("grid"),children:d.jsx(Gb,{size:18})}),d.jsx("button",{className:`btn btn-icon btn-ghost ${l==="list"?"active":""}`,onClick:()=>u("list"),children:d.jsx(Qb,{size:18})})]})})]}),d.jsx("div",{className:"content-wrapper",children:t})]})]})}function uD({project:t}){const{selectProject:e}=Xe(),n=r=>{if(!r)return"";const s=new Date(r);return s.toLocaleDateString("en-US",{month:"short",day:"numeric",year:s.getFullYear()!==new Date().getFullYear()?"numeric":void 0})};return d.jsxs("article",{className:"project-card card card-interactive",onClick:()=>e(t.id),tabIndex:0,onKeyDown:r=>r.key==="Enter"&&e(t.id),children:[d.jsx("div",{className:"project-thumbnail",children:t.thumbnailUrl||t.thumbnail?d.jsx("img",{src:t.thumbnailUrl||URL.createObjectURL(t.thumbnail),alt:t.name,loading:"lazy"}):d.jsx("div",{className:"project-thumbnail-placeholder",children:d.jsx(zp,{size:32})})}),d.jsxs("div",{className:"project-info",children:[d.jsx("h3",{className:"project-name truncate",children:t.name}),t.description&&d.jsx("p",{className:"project-description truncate",children:t.description}),d.jsxs("div",{className:"project-meta",children:[d.jsxs("span",{className:"meta-item",children:[d.jsx(q0,{size:12}),n(t.updatedAt)]}),d.jsxs("span",{className:"meta-item",children:[d.jsx(vi,{size:12}),"v1.0"]})]})]})]})}function cD({onCreateProject:t}){const{projects:e,view:n,isLoading:r}=Xe();return r?d.jsx("div",{className:`project-list ${n}`,children:[1,2,3,4].map(s=>d.jsxs("div",{className:"project-card skeleton-card",children:[d.jsx("div",{className:"skeleton",style:{height:160}}),d.jsxs("div",{className:"skeleton-content",children:[d.jsx("div",{className:"skeleton",style:{height:20,width:"60%"}}),d.jsx("div",{className:"skeleton",style:{height:14,width:"80%"}})]})]},s))}):e.length===0?d.jsxs("div",{className:"empty-state",children:[d.jsx(zp,{className:"empty-state-icon"}),d.jsx("h3",{children:"No projects yet"}),d.jsx("p",{children:"Create your first project to start organizing your electronics work, schematics, and firmware."}),d.jsxs("button",{className:"btn btn-primary btn-lg",onClick:t,children:[d.jsx(tn,{size:20}),"Create Project"]})]}):d.jsxs("div",{className:`project-list ${n}`,children:[e.map(s=>d.jsx(uD,{project:s},s.id)),d.jsxs("button",{className:"project-card add-card",onClick:t,children:[d.jsx(tn,{size:32}),d.jsx("span",{children:"New Project"})]})]})}function hD({versions:t,currentVersionId:e,onSelectVersion:n}){const r=B.useMemo(()=>{if(!t.length)return{nodes:[],height:0,width:0};const f=new Map;t.forEach(x=>f.set(x.id,{...x,children:[]}));const m=[];t.forEach(x=>{const O=f.get(x.id);x.parentVersionId&&f.has(x.parentVersionId)?f.get(x.parentVersionId).children.push(O):m.push(O)});const g=140,_=60,R=20,N=40;let j=0,I=0;const E=(x,O,w)=>{if(x.x=O,x.y=w,j=Math.max(j,O+g),I=Math.max(I,w+_),x.children.length===0)return O+g+R;let y=O;if(x.children.forEach(T=>{y=E(T,y,w+_+N)}),x.children.length>1){const T=x.children[0].x,C=x.children[x.children.length-1].x;x.x=(T+C+g)/2-g/2}return y};let A=0;m.forEach(x=>{A=E(x,A,0)});const b=x=>{let O=[];return x.forEach(w=>{O.push(w),O=[...O,...b(w.children)]}),O};return{nodes:b(m),roots:m,height:I+40,width:j+40,nodeWidth:g,nodeHeight:_}},[t]),s=()=>{const f=[],{nodes:m,nodeWidth:g,nodeHeight:_}=r;return m.forEach(R=>{R.children.forEach(N=>{const j=R.x+g/2,I=R.y+_,E=N.x+g/2,A=N.y,b=(I+A)/2,x=`M ${j} ${I} C ${j} ${b}, ${E} ${b}, ${E} ${A}`;f.push(d.jsx("path",{d:x,className:"version-connection",fill:"none"},`line-${R.id}-${N.id}`))})}),f};if(t.length===0)return d.jsxs("div",{className:"version-tree-empty",children:[d.jsx(vi,{size:32}),d.jsx("p",{children:"No versions yet"}),d.jsx("span",{className:"text-muted",children:"Create your first version to start tracking changes"})]});const{nodes:i,height:o,width:l,nodeWidth:u,nodeHeight:c}=r;return d.jsx("div",{className:"version-tree-container",children:d.jsx("svg",{className:"version-tree",width:l,height:o,viewBox:`0 0 ${l} ${o}`,children:d.jsxs("g",{transform:"translate(20, 20)",children:[s(),i.map(f=>d.jsxs("g",{className:`version-node ${f.id===e?"active":""}`,transform:`translate(${f.x}, ${f.y})`,onClick:()=>n(f.id),style:{cursor:"pointer"},children:[d.jsx("rect",{x:"0",y:"0",width:u,height:c,rx:"10",className:"version-node-bg"}),d.jsx("circle",{cx:"20",cy:c/2,r:"8",className:"version-dot"}),d.jsx("text",{x:"38",y:c/2-6,className:"version-name",children:f.name}),d.jsx("text",{x:"38",y:c/2+10,className:"version-date",children:new Date(f.createdAt).toLocaleDateString()})]},f.id))]})})})}function N_({resources:t,onAdd:e,type:n="image"}){const{deleteResource:r}=Xe(),[s,i]=B.useState(null),o=c=>c.data?URL.createObjectURL(c.data):c.url||"",l=c=>{var f;return c.type==="video"||((f=c.metadata)==null?void 0:f.mimeType)&&c.metadata.mimeType.startsWith("video/")},u=c=>{const f=o(c),m=document.createElement("a");m.href=f,m.download=c.name,document.body.appendChild(m),m.click(),document.body.removeChild(m)};return t.length===0?d.jsxs("div",{className:"gallery-empty",children:[d.jsx(ya,{size:48}),d.jsxs("h3",{children:["No ",n==="schematic"?"schematics":"media"," yet"]}),d.jsx("p",{children:"Add images, videos, or schematics to this version"}),d.jsxs("button",{className:"btn btn-primary",onClick:e,children:[d.jsx(tn,{size:18}),"Add Files"]})]}):d.jsxs("div",{className:"gallery",children:[d.jsxs("div",{className:"gallery-grid",children:[t.map(c=>d.jsxs("div",{className:"gallery-item",children:[d.jsxs("div",{className:"gallery-preview",onClick:()=>i(c),children:[l(c)?d.jsx("video",{src:o(c),muted:!0}):d.jsx("img",{src:o(c),alt:c.name,loading:"lazy"}),d.jsxs("div",{className:"gallery-overlay",children:[l(c)&&d.jsx(W0,{size:24}),d.jsx(Jb,{size:20})]})]}),d.jsxs("div",{className:"gallery-info",children:[d.jsx("span",{className:"gallery-name truncate",children:c.name}),d.jsxs("div",{className:"gallery-actions",children:[d.jsx("button",{className:"btn btn-icon btn-ghost btn-sm",onClick:()=>u(c),children:d.jsx(Md,{size:14})}),d.jsx("button",{className:"btn btn-icon btn-ghost btn-sm text-error",onClick:()=>r(c.id),children:d.jsx(Mr,{size:14})})]})]})]},c.id)),d.jsxs("button",{className:"gallery-add",onClick:e,children:[d.jsx(tn,{size:24}),d.jsx("span",{children:"Add More"})]})]}),s&&d.jsxs("div",{className:"lightbox",onClick:()=>i(null),children:[d.jsx("button",{className:"btn btn-icon btn-ghost lightbox-close",onClick:()=>i(null),children:d.jsx(Bn,{size:24})}),d.jsxs("div",{className:"lightbox-content",onClick:c=>c.stopPropagation(),children:[l(s)?d.jsx("video",{src:o(s),controls:!0,autoPlay:!0}):d.jsx("img",{src:o(s),alt:s.name}),d.jsxs("div",{className:"lightbox-info",children:[d.jsx("span",{children:s.name}),d.jsxs("button",{className:"btn btn-sm btn-secondary",onClick:()=>u(s),children:[d.jsx(Md,{size:14}),"Download"]})]})]})]})]})}function dD({version:t}){const{updateVersion:e}=Xe(),[n,r]=B.useState(""),s=(t==null?void 0:t.todos)||[],i=()=>{if(!n.trim()||!t)return;const m={id:Date.now(),text:n.trim(),completed:!1,createdAt:new Date};e(t.id,{todos:[...s,m]}),r("")},o=m=>{e(t.id,{todos:s.map(g=>g.id===m?{...g,completed:!g.completed}:g)})},l=m=>{e(t.id,{todos:s.filter(g=>g.id!==m)})},u=m=>{m.key==="Enter"&&i()},c=s.filter(m=>m.completed).length,f=s.length>0?c/s.length*100:0;return d.jsxs("div",{className:"todo-list",children:[d.jsx("div",{className:"todo-header",children:d.jsxs("div",{className:"todo-stats",children:[d.jsxs("span",{className:"todo-count",children:[c," / ",s.length," completed"]}),s.length>0&&d.jsx("div",{className:"progress-bar todo-progress",children:d.jsx("div",{className:"progress-bar-fill",style:{width:`${f}%`}})})]})}),d.jsxs("div",{className:"todo-input-wrapper",children:[d.jsx("input",{type:"text",className:"input todo-input",placeholder:"Add a new task...",value:n,onChange:m=>r(m.target.value),onKeyDown:u}),d.jsxs("button",{className:"btn btn-primary",onClick:i,disabled:!n.trim(),children:[d.jsx(tn,{size:18}),"Add"]})]}),s.length===0?d.jsxs("div",{className:"todo-empty",children:[d.jsx(H0,{size:48}),d.jsx("h3",{children:"No tasks yet"}),d.jsx("p",{children:"Add tasks to track what needs to be done for this version"})]}):d.jsx("ul",{className:"todo-items",children:s.map(m=>d.jsxs("li",{className:`todo-item ${m.completed?"completed":""}`,children:[d.jsx("button",{className:"todo-checkbox",onClick:()=>o(m.id),children:m.completed?d.jsx(Bb,{size:16}):d.jsx(iD,{size:16})}),d.jsx("span",{className:"todo-text",children:m.text}),d.jsx("button",{className:"btn btn-icon btn-ghost btn-sm todo-delete",onClick:()=>l(m.id),children:d.jsx(Mr,{size:14})})]},m.id))})]})}function fD({version:t}){const{updateVersion:e}=Xe(),[n,r]=B.useState(""),[s,i]=B.useState(""),[o,l]=B.useState(!1),u=(t==null?void 0:t.errors)||[],c=()=>{if(!n.trim()||!t)return;const _={id:Date.now(),title:n.trim(),description:s.trim(),resolved:!1,createdAt:new Date};e(t.id,{errors:[...u,_]}),r(""),i(""),l(!1)},f=_=>{e(t.id,{errors:u.map(R=>R.id===_?{...R,resolved:!R.resolved}:R)})},m=_=>{e(t.id,{errors:u.filter(R=>R.id!==_)})},g=u.filter(_=>!_.resolved).length;return d.jsxs("div",{className:"error-list",children:[d.jsxs("div",{className:"error-header",children:[d.jsx("div",{className:"error-stats",children:g>0?d.jsxs("span",{className:"badge badge-error",children:[g," unresolved"]}):d.jsx("span",{className:"badge badge-success",children:"All resolved"})}),d.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>l(!o),children:[d.jsx(tn,{size:16}),"Log Error"]})]}),o&&d.jsxs("div",{className:"error-form",children:[d.jsx("input",{type:"text",className:"input",placeholder:"Error title...",value:n,onChange:_=>r(_.target.value),autoFocus:!0}),d.jsx("textarea",{className:"input textarea",placeholder:"Description (optional)...",value:s,onChange:_=>i(_.target.value),rows:3}),d.jsxs("div",{className:"error-form-actions",children:[d.jsx("button",{className:"btn btn-ghost",onClick:()=>l(!1),children:"Cancel"}),d.jsx("button",{className:"btn btn-primary",onClick:c,disabled:!n.trim(),children:"Add Error"})]})]}),u.length===0?d.jsxs("div",{className:"error-empty",children:[d.jsx(Ub,{size:48}),d.jsx("h3",{children:"No errors logged"}),d.jsx("p",{children:"Track bugs and issues for this version here"})]}):d.jsx("ul",{className:"error-items",children:u.map(_=>d.jsxs("li",{className:`error-item ${_.resolved?"resolved":""}`,children:[d.jsx("button",{className:"error-status",onClick:()=>f(_.id),title:_.resolved?"Mark as unresolved":"Mark as resolved",children:_.resolved?d.jsx(zb,{size:20}):d.jsx(Mp,{size:20})}),d.jsxs("div",{className:"error-content",children:[d.jsx("h4",{className:"error-title",children:_.title}),_.description&&d.jsx("p",{className:"error-description",children:_.description}),d.jsx("span",{className:"error-date",children:new Date(_.createdAt).toLocaleDateString()})]}),d.jsx("button",{className:"btn btn-icon btn-ghost btn-sm error-delete",onClick:()=>m(_.id),children:d.jsx(Mr,{size:14})})]},_.id))})]})}function pD({resources:t}){const{addResource:e,deleteResource:n,currentVersion:r}=Xe(),[s,i]=B.useState(!1),[o,l]=B.useState({name:"",url:"",description:""}),u=async()=>{!o.url.trim()||!r||(await e(r.id,{type:"link",name:o.name.trim()||c(o.url),url:o.url.trim(),metadata:{description:o.description.trim(),platform:f(o.url)}}),l({name:"",url:"",description:""}),i(!1))},c=_=>{try{return`Chat - ${new URL(_).hostname}`}catch{return"AI Chat Link"}},f=_=>{const R=_.toLowerCase();return R.includes("chat.openai")||R.includes("chatgpt")?"chatgpt":R.includes("claude.ai")?"claude":R.includes("gemini.google")||R.includes("bard")?"gemini":R.includes("copilot")?"copilot":R.includes("perplexity")?"perplexity":"other"},m=_=>{const R={chatgpt:"🤖",claude:"🧠",gemini:"✨",copilot:"💻",perplexity:"🔍",other:"💬"};return R[_]||R.other},g=_=>{const R={chatgpt:"#10a37f",claude:"#cc785c",gemini:"#8e44ad",copilot:"#0078d4",perplexity:"#1db954",other:"var(--color-accent)"};return R[_]||R.other};return d.jsxs("div",{className:"ai-links",children:[d.jsxs("div",{className:"ai-links-header",children:[d.jsxs("h3",{children:[d.jsx(eD,{size:18}),"AI Chat Links"]}),d.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>i(!s),children:[d.jsx(tn,{size:16}),"Add Link"]})]}),s&&d.jsxs("div",{className:"ai-link-form",children:[d.jsx("input",{type:"url",className:"input",placeholder:"https://chat.openai.com/...",value:o.url,onChange:_=>l({...o,url:_.target.value}),autoFocus:!0}),d.jsx("input",{type:"text",className:"input",placeholder:"Name (optional)",value:o.name,onChange:_=>l({...o,name:_.target.value})}),d.jsx("textarea",{className:"input textarea",placeholder:"What was this chat about? (optional)",value:o.description,onChange:_=>l({...o,description:_.target.value}),rows:2}),d.jsxs("div",{className:"form-actions",children:[d.jsx("button",{className:"btn btn-ghost",onClick:()=>i(!1),children:"Cancel"}),d.jsx("button",{className:"btn btn-primary",onClick:u,disabled:!o.url.trim(),children:"Add Link"})]})]}),t.length===0?d.jsxs("div",{className:"ai-links-empty",children:[d.jsx(Fb,{size:48}),d.jsx("h3",{children:"No AI chat links yet"}),d.jsx("p",{children:"Save links to AI conversations you used for this project"})]}):d.jsx("div",{className:"ai-links-grid",children:t.map(_=>{var N,j;const R=((N=_.metadata)==null?void 0:N.platform)||"other";return d.jsxs("a",{href:_.url,target:"_blank",rel:"noopener noreferrer",className:"ai-link-card",style:{"--platform-color":g(R)},children:[d.jsx("div",{className:"ai-link-icon",children:m(R)}),d.jsxs("div",{className:"ai-link-content",children:[d.jsx("h4",{className:"ai-link-name",children:_.name}),((j=_.metadata)==null?void 0:j.description)&&d.jsx("p",{className:"ai-link-description truncate",children:_.metadata.description}),d.jsx("span",{className:"ai-link-url truncate",children:_.url})]}),d.jsxs("div",{className:"ai-link-actions",children:[d.jsx(qb,{size:16}),d.jsx("button",{className:"btn btn-icon btn-ghost btn-sm",onClick:I=>{I.preventDefault(),I.stopPropagation(),n(_.id)},children:d.jsx(Mr,{size:14})})]})]},_.id)})})]})}function mD({resources:t,onAdd:e}){var g;const{deleteResource:n}=Xe(),[r,s]=B.useState(null),[i,o]=B.useState(""),l=t.filter(_=>_.type==="bin"),u=t.filter(_=>_.type==="ino"),c=async _=>{if(s(_),_.type==="ino"&&_.data){const R=await _.data.text();o(R)}else o("")},f=_=>{if(!_.data)return;const R=URL.createObjectURL(_.data),N=document.createElement("a");N.href=R,N.download=_.name,document.body.appendChild(N),N.click(),document.body.removeChild(N),URL.revokeObjectURL(R)},m=_=>{if(!_)return"0 B";const R=1024,N=["B","KB","MB"],j=Math.floor(Math.log(_)/Math.log(R));return parseFloat((_/Math.pow(R,j)).toFixed(1))+" "+N[j]};return t.length===0?d.jsxs("div",{className:"code-empty",children:[d.jsx(ea,{size:48}),d.jsx("h3",{children:"No code files yet"}),d.jsx("p",{children:"Add .bin (compiled firmware) or .ino (Arduino source) files"}),d.jsxs("button",{className:"btn btn-primary",onClick:e,children:[d.jsx(tn,{size:18}),"Add Code Files"]})]}):d.jsxs("div",{className:"code-viewer",children:[d.jsxs("div",{className:"code-sidebar",children:[d.jsxs("div",{className:"code-section",children:[d.jsxs("h4",{className:"code-section-title",children:[d.jsx(hu,{size:14}),"Compiled (.bin)"]}),d.jsxs("ul",{className:"code-list",children:[l.map(_=>{var R;return d.jsx("li",{children:d.jsxs("button",{className:`code-file ${(r==null?void 0:r.id)===_.id?"active":""}`,onClick:()=>c(_),children:[d.jsx("span",{className:"badge badge-accent",children:"BIN"}),d.jsx("span",{className:"code-file-name truncate",children:_.name}),d.jsx("span",{className:"code-file-size",children:m((R=_.data)==null?void 0:R.size)})]})},_.id)}),l.length===0&&d.jsx("li",{className:"code-empty-section",children:"No .bin files"})]})]}),d.jsxs("div",{className:"code-section",children:[d.jsxs("h4",{className:"code-section-title",children:[d.jsx(Wb,{size:14}),"Source (.ino)"]}),d.jsxs("ul",{className:"code-list",children:[u.map(_=>{var R;return d.jsx("li",{children:d.jsxs("button",{className:`code-file ${(r==null?void 0:r.id)===_.id?"active":""}`,onClick:()=>c(_),children:[d.jsx("span",{className:"badge badge-success",children:"INO"}),d.jsx("span",{className:"code-file-name truncate",children:_.name}),d.jsx("span",{className:"code-file-size",children:m((R=_.data)==null?void 0:R.size)})]})},_.id)}),u.length===0&&d.jsx("li",{className:"code-empty-section",children:"No .ino files"})]})]}),d.jsxs("button",{className:"btn btn-secondary code-add",onClick:e,children:[d.jsx(tn,{size:16}),"Add Files"]})]}),d.jsx("div",{className:"code-content",children:r?d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"code-header",children:[d.jsxs("div",{className:"code-file-info",children:[d.jsx("h3",{children:r.name}),d.jsx("span",{className:"text-muted",children:m((g=r.data)==null?void 0:g.size)})]}),d.jsxs("div",{className:"code-actions",children:[d.jsxs("button",{className:"btn btn-sm btn-secondary",onClick:()=>f(r),children:[d.jsx(Md,{size:14}),"Download"]}),d.jsx("button",{className:"btn btn-sm btn-ghost text-error",onClick:()=>{n(r.id),s(null)},children:d.jsx(Mr,{size:14})})]})]}),r.type==="ino"&&i?d.jsx("pre",{className:"code-preview",children:d.jsx("code",{children:i})}):d.jsxs("div",{className:"code-binary-info",children:[d.jsx(hu,{size:64}),d.jsx("h4",{children:"Binary File"}),d.jsx("p",{children:"This is a compiled firmware file ready for flashing."}),d.jsx("p",{className:"text-muted",children:'Use the "USB Flash" tab to upload this file to your board.'})]})]}):d.jsxs("div",{className:"code-placeholder",children:[d.jsx(ea,{size:48}),d.jsx("p",{children:"Select a file to view details"})]})})]})}const gD=115200;function yD({resources:t}){const[e,n]=B.useState(null),[r,s]=B.useState(!1),[i,o]=B.useState(!1),[l,u]=B.useState(0),[c,f]=B.useState("disconnected"),[m,g]=B.useState(null),[_,R]=B.useState([]),N=B.useRef(null),j=t.filter(w=>w.type==="bin"),I=(w,y="info")=>{const T=new Date().toLocaleTimeString();R(C=>[...C,{message:w,type:y,timestamp:T}])};B.useEffect(()=>{N.current&&(N.current.scrollTop=N.current.scrollHeight)},[_]);const E=()=>"serial"in navigator,A=async()=>{var w;if(!E()){I("WebSerial not supported. Use Chrome or Edge.","error");return}try{f("connecting"),I("Requesting serial port...");const y=await navigator.serial.requestPort();await y.open({baudRate:gD}),n(y),s(!0),f("connected"),I("Connected successfully!","success");const T=y.getInfo();T.usbVendorId&&I(`Device: VID ${T.usbVendorId.toString(16).toUpperCase()} PID ${(w=T.usbProductId)==null?void 0:w.toString(16).toUpperCase()}`)}catch(y){f("error"),I(`Connection failed: ${y.message}`,"error")}},b=async()=>{if(e)try{await e.close(),n(null),s(!1),f("disconnected"),I("Disconnected","info")}catch(w){I(`Disconnect error: ${w.message}`,"error")}},x=async()=>{if(!e||!m){I("No port or file selected","error");return}try{o(!0),u(0),f("flashing"),I(`Starting flash: ${m.name}`);const w=await m.data.arrayBuffer(),y=new Uint8Array(w),T=y.length;I(`File size: ${T} bytes`);const C=e.writable.getWriter(),S=1024;let P=0;for(let k=0;k<T;k+=S){const ce=y.slice(k,Math.min(k+S,T));await C.write(ce),P+=ce.length;const Ue=Math.round(P/T*100);u(Ue),Ue%25===0&&Ue>0&&I(`Progress: ${Ue}%`),await new Promise(Bt=>setTimeout(Bt,10))}C.releaseLock(),u(100),f("success"),I("Flash completed successfully!","success")}catch(w){f("error"),I(`Flash failed: ${w.message}`,"error")}finally{o(!1)}},O=async()=>{if(e)try{I("Resetting device..."),await e.setSignals({dataTerminalReady:!1,requestToSend:!0}),await new Promise(w=>setTimeout(w,100)),await e.setSignals({dataTerminalReady:!0,requestToSend:!1}),I("Device reset complete","success")}catch(w){I(`Reset failed: ${w.message}`,"error")}};return E()?d.jsxs("div",{className:"firmware-flasher",children:[d.jsxs("div",{className:"flasher-main",children:[d.jsxs("div",{className:"flasher-panel",children:[d.jsxs("h3",{children:[d.jsx(P_,{size:18}),"USB Connection"]}),d.jsxs("div",{className:"connection-status",children:[d.jsx("span",{className:`status-indicator ${c}`}),d.jsxs("span",{className:"status-text",children:[c==="disconnected"&&"Not connected",c==="connecting"&&"Connecting...",c==="connected"&&"Connected",c==="flashing"&&"Flashing...",c==="success"&&"Success!",c==="error"&&"Error"]})]}),d.jsx("div",{className:"connection-actions",children:r?d.jsxs(d.Fragment,{children:[d.jsxs("button",{className:"btn btn-secondary",onClick:O,children:[d.jsx(nD,{size:16}),"Reset"]}),d.jsxs("button",{className:"btn btn-ghost",onClick:b,children:[d.jsx(Bn,{size:16}),"Disconnect"]})]}):d.jsxs("button",{className:"btn btn-primary",onClick:A,disabled:c==="connecting",children:[d.jsx(P_,{size:16}),"Connect Device"]})})]}),d.jsxs("div",{className:"flasher-panel",children:[d.jsxs("h3",{children:[d.jsx(sc,{size:18}),"Firmware File"]}),j.length>0?d.jsx("div",{className:"file-select",children:d.jsxs("select",{className:"input",value:(m==null?void 0:m.id)||"",onChange:w=>{const y=j.find(T=>T.id===Number(w.target.value));g(y)},children:[d.jsx("option",{value:"",children:"Select a .bin file"}),j.map(w=>{var y;return d.jsxs("option",{value:w.id,children:[w.name," (",(((y=w.data)==null?void 0:y.size)/1024).toFixed(1)," KB)"]},w.id)})]})}):d.jsx("p",{className:"text-muted",children:"No .bin files in this version. Add firmware files in the Code tab."})]}),d.jsxs("div",{className:"flasher-panel flasher-action",children:[d.jsx("button",{className:"btn btn-primary btn-lg flash-button",onClick:x,disabled:!r||!m||i,children:i?d.jsxs(d.Fragment,{children:[d.jsx("span",{className:"loading-spinner"}),"Flashing... ",l,"%"]}):d.jsxs(d.Fragment,{children:[d.jsx(zd,{size:20}),"Flash Firmware"]})}),i&&d.jsx("div",{className:"progress-bar",children:d.jsx("div",{className:"progress-bar-fill",style:{width:`${l}%`}})})]})]}),d.jsxs("div",{className:"flasher-log",ref:N,children:[d.jsx("h4",{children:"Console Log"}),d.jsxs("div",{className:"log-content",children:[_.map((w,y)=>d.jsxs("div",{className:`log-entry log-${w.type}`,children:[d.jsxs("span",{className:"log-time",children:["[",w.timestamp,"]"]}),d.jsx("span",{className:"log-message",children:w.message})]},y)),_.length===0&&d.jsx("div",{className:"log-empty",children:"Logs will appear here..."})]})]})]}):d.jsxs("div",{className:"flasher-unsupported",children:[d.jsx(Lb,{size:48}),d.jsx("h3",{children:"WebSerial Not Supported"}),d.jsxs("p",{children:["Your browser doesn't support WebSerial API.",d.jsx("br",{}),"Please use ",d.jsx("strong",{children:"Google Chrome"})," or ",d.jsx("strong",{children:"Microsoft Edge"}),"."]})]})}const b_=[{id:"image",label:"Image",icon:ya,accept:"image/*"},{id:"video",label:"Video",icon:W0,accept:"video/*"},{id:"schematic",label:"Schematic",icon:Fp,accept:"image/*"},{id:"bin",label:"Firmware (.bin)",icon:ea,accept:".bin"},{id:"ino",label:"Source (.ino)",icon:ea,accept:".ino"}];function _D({onClose:t,versionId:e,defaultType:n="image"}){const{addResource:r}=Xe(),[s,i]=B.useState(n),[o,l]=B.useState([]),[u,c]=B.useState(!1),[f,m]=B.useState(!1),g=B.useRef(null),_=B.useCallback(x=>{var y;const O=(y=x.clipboardData)==null?void 0:y.items;if(!O)return;const w=[];for(let T=0;T<O.length;T++){const C=O[T];if(C.kind==="file"){const S=C.getAsFile();if(S){let P=S.name;(P==="image.png"||!P)&&(P=`pasted-image-${Date.now()}.png`);const k=new hu([S],P,{type:S.type});w.push(k)}}}w.length>0&&(x.preventDefault(),l(T=>[...T,...w]))},[]);B.useEffect(()=>(document.addEventListener("paste",_),()=>{document.removeEventListener("paste",_)}),[_]);const R=B.useCallback(x=>{x.preventDefault(),c(!0)},[]),N=B.useCallback(x=>{x.preventDefault(),c(!1)},[]),j=B.useCallback(x=>{x.preventDefault(),c(!1);const O=Array.from(x.dataTransfer.files);l(w=>[...w,...O])},[]),I=x=>{const O=Array.from(x.target.files);l(w=>[...w,...O])},E=x=>{l(O=>O.filter((w,y)=>y!==x))},A=async()=>{if(!(!e||o.length===0)){m(!0);try{for(const x of o)await r(e,{type:s,name:x.name,data:x,metadata:{mimeType:x.type,size:x.size,lastModified:x.lastModified}});t()}catch(x){console.error("Upload failed:",x)}finally{m(!1)}}},b=b_.find(x=>x.id===s);return d.jsx("div",{className:"modal-overlay",onClick:t,children:d.jsxs("div",{className:"modal",onClick:x=>x.stopPropagation(),children:[d.jsxs("div",{className:"modal-header",children:[d.jsx("h2",{children:"Add Files"}),d.jsx("button",{className:"btn btn-icon btn-ghost",onClick:t,children:d.jsx(Bn,{size:20})})]}),d.jsxs("div",{className:"modal-content",children:[d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"label",children:"File Type"}),d.jsx("div",{className:"file-type-selector",children:b_.map(x=>{const O=x.icon;return d.jsxs("button",{type:"button",className:`file-type-btn ${s===x.id?"active":""}`,onClick:()=>i(x.id),children:[d.jsx(O,{size:18}),d.jsx("span",{children:x.label})]},x.id)})})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"label",children:"Files"}),d.jsxs("div",{ref:g,className:`dropzone ${u?"active":""}`,onDragOver:R,onDragLeave:N,onDrop:j,children:[d.jsx("input",{type:"file",multiple:!0,accept:b==null?void 0:b.accept,onChange:I,style:{display:"none"},id:"file-input"}),d.jsxs("label",{htmlFor:"file-input",style:{cursor:"pointer",display:"contents"},children:[d.jsx(zd,{className:"dropzone-icon"}),d.jsxs("p",{children:["Drag files, click to browse, or ",d.jsx("strong",{children:"paste from clipboard"})]}),d.jsxs("div",{className:"dropzone-hint",children:[d.jsx(Up,{size:14}),d.jsx("span",{children:"Ctrl+V to paste images"})]})]})]})]}),o.length>0&&d.jsxs("div",{className:"form-group",children:[d.jsxs("label",{className:"label",children:["Selected Files (",o.length,")"]}),d.jsx("ul",{className:"file-list",children:o.map((x,O)=>d.jsxs("li",{className:"file-item",children:[d.jsx(hu,{size:16}),d.jsx("span",{className:"file-name truncate",children:x.name}),d.jsxs("span",{className:"file-size",children:[(x.size/1024).toFixed(1)," KB"]}),d.jsx("button",{type:"button",className:"btn btn-icon btn-ghost btn-sm",onClick:()=>E(O),children:d.jsx(Bn,{size:14})})]},O))})]}),d.jsxs("div",{className:"modal-footer",children:[d.jsx("button",{type:"button",className:"btn btn-secondary",onClick:t,children:"Cancel"}),d.jsx("button",{type:"button",className:"btn btn-primary",onClick:A,disabled:o.length===0||f,children:f?d.jsxs(d.Fragment,{children:[d.jsx("span",{className:"loading-spinner",style:{width:16,height:16}}),"Uploading..."]}):d.jsxs(d.Fragment,{children:[d.jsx(zd,{size:16}),"Upload ",o.length," File",o.length!==1?"s":""]})})]})]})]})})}function vD({onClose:t,projectId:e,parentVersion:n,versions:r}){var E;const{createVersion:s,selectVersion:i}=Xe(),[o,l]=B.useState(""),[u,c]=B.useState(""),[f,m]=B.useState((n==null?void 0:n.id)||null),[g,_]=B.useState(!0),[R,N]=B.useState(!1),j=()=>{if(!r.length)return"v1.0";const A=r.filter(x=>x.parentVersionId===f),b=r.find(x=>x.id===f);if(b){const x=b.name.match(/v?(\d+)\.(\d+)/);if(x){const O=parseInt(x[1]),w=parseInt(x[2]);return A.length>0?`v${O}.${w}-branch${A.length+1}`:`v${O}.${w+1}`}}return`v1.${r.length}`},I=async A=>{if(A.preventDefault(),!!o.trim()){N(!0);try{const b=await s(e,{name:o.trim(),description:u.trim(),parentVersionId:f,copyResources:g,todos:[],errors:[]});await i(b),t()}catch(b){console.error("Failed to create version:",b)}finally{N(!1)}}};return d.jsx("div",{className:"modal-overlay",onClick:t,children:d.jsxs("div",{className:"modal",onClick:A=>A.stopPropagation(),children:[d.jsxs("div",{className:"modal-header",children:[d.jsx("h2",{children:"Create New Version"}),d.jsx("button",{className:"btn btn-icon btn-ghost",onClick:t,children:d.jsx(Bn,{size:20})})]}),d.jsxs("form",{onSubmit:I,className:"modal-content",children:[d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"label",children:"Version Name *"}),d.jsx("input",{type:"text",className:"input",placeholder:j(),value:o,onChange:A=>l(A.target.value),autoFocus:!0,required:!0}),d.jsxs("span",{className:"form-hint",children:["Suggested: ",j()]})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"label",children:"Description"}),d.jsx("textarea",{className:"input textarea",placeholder:"What changes in this version?",value:u,onChange:A=>c(A.target.value),rows:2})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"label",children:"Branch From"}),d.jsxs("select",{className:"input",value:f||"",onChange:A=>m(A.target.value?Number(A.target.value):null),children:[d.jsx("option",{value:"",children:"None (New Root)"}),r.map(A=>d.jsxs("option",{value:A.id,children:[A.name," ",A.id===(n==null?void 0:n.id)?"(current)":""]},A.id))]})]}),f&&d.jsx("div",{className:"form-group",children:d.jsxs("label",{className:"checkbox-label",children:[d.jsx("input",{type:"checkbox",checked:g,onChange:A=>_(A.target.checked)}),d.jsx(Hb,{size:16}),d.jsx("span",{children:"Copy files from parent version"})]})}),d.jsxs("div",{className:"version-preview",children:[d.jsx(vi,{size:16}),d.jsx("span",{children:f?d.jsxs(d.Fragment,{children:["Creating branch from ",d.jsx("strong",{children:(E=r.find(A=>A.id===f))==null?void 0:E.name})]}):d.jsx(d.Fragment,{children:"Creating new root version"})})]}),d.jsxs("div",{className:"modal-footer",children:[d.jsx("button",{type:"button",className:"btn btn-secondary",onClick:t,children:"Cancel"}),d.jsx("button",{type:"submit",className:"btn btn-primary",disabled:!o.trim()||R,children:R?d.jsxs(d.Fragment,{children:[d.jsx("span",{className:"loading-spinner",style:{width:16,height:16}}),"Creating..."]}):d.jsxs(d.Fragment,{children:[d.jsx(vi,{size:16}),"Create Version"]})})]})]})]})})}function wD({onClose:t,project:e}){const{updateProject:n,folders:r}=Xe(),[s,i]=B.useState(e.name),[o,l]=B.useState(e.description||""),[u,c]=B.useState(e.folderId||""),[f,m]=B.useState(e.tags?e.tags.join(", "):""),[g,_]=B.useState(null),[R,N]=B.useState(e.thumbnailUrl||null),[j,I]=B.useState(!1),[E,A]=B.useState(!1),b=S=>{const P=S.target.files[0];P&&(_(P),N(URL.createObjectURL(P)))},x=S=>{S&&S.type.startsWith("image/")&&(_(S),N(URL.createObjectURL(S)))},O=B.useCallback(S=>{var k;if(S.target.tagName==="INPUT"||S.target.tagName==="TEXTAREA")return;const P=(k=S.clipboardData)==null?void 0:k.items;if(P)for(let ce=0;ce<P.length;ce++){const Ue=P[ce];if(Ue.kind==="file"&&Ue.type.startsWith("image/")){const Bt=Ue.getAsFile();if(Bt){S.preventDefault();const Fr=new File([Bt],`thumbnail-${Date.now()}.png`,{type:Bt.type});x(Fr);break}}}},[]),w=S=>{S.preventDefault(),I(!0)},y=S=>{S.preventDefault(),I(!1)},T=S=>{S.preventDefault(),I(!1);const P=S.dataTransfer.files;P.length>0&&x(P[0])};B.useEffect(()=>(document.addEventListener("paste",O),()=>document.removeEventListener("paste",O)),[O]);const C=async S=>{S.preventDefault(),A(!0);try{const P=f.split(",").map(ce=>ce.trim()).filter(Boolean),k={name:s,description:o,folderId:u||null,tags:P,thumbnail:g};!R&&!g&&(k.thumbnailUrl=null),await n(e.id,k),t()}catch(P){console.error("Failed to update project:",P),alert("Failed to update project")}finally{A(!1)}};return d.jsx("div",{className:"modal-overlay",onClick:t,children:d.jsxs("div",{className:"modal",onClick:S=>S.stopPropagation(),children:[d.jsxs("div",{className:"modal-header",children:[d.jsx("h2",{children:"Edit Project"}),d.jsx("button",{className:"btn btn-icon btn-ghost",onClick:t,children:d.jsx(Bn,{size:20})})]}),d.jsxs("form",{onSubmit:C,className:"modal-content",children:[d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"label",children:"Project Name"}),d.jsx("input",{type:"text",className:"input",value:s,onChange:S=>i(S.target.value),required:!0})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"label",children:"Thumbnail"}),d.jsx("div",{className:"thumbnail-upload",children:R?d.jsxs("div",{className:"thumbnail-preview",children:[d.jsx("img",{src:R,alt:"Preview"}),d.jsx("button",{type:"button",className:"btn btn-icon btn-ghost thumbnail-remove",onClick:()=>{_(null),N(null)},children:d.jsx(Bn,{size:16})})]}):d.jsxs("label",{className:`dropzone thumbnail-dropzone ${j?"active":""}`,onDragOver:w,onDragLeave:y,onDrop:T,children:[d.jsx("input",{type:"file",accept:"image/*",onChange:b,hidden:!0}),d.jsx(ya,{size:24,className:"dropzone-icon"}),d.jsx("span",{children:"Change Thumbnail"}),d.jsxs("div",{className:"dropzone-hint",children:[d.jsx(Up,{size:14}),d.jsx("span",{children:"Paste / Drop"})]})]})})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"label",children:"Description"}),d.jsx("textarea",{className:"input textarea",value:o,onChange:S=>l(S.target.value),rows:3})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"label",children:d.jsxs("span",{className:"flex items-center gap-sm",children:[d.jsx(Ud,{size:14})," Folder"]})}),d.jsxs("select",{className:"input",value:u,onChange:S=>c(S.target.value),children:[d.jsx("option",{value:"",children:"(No Folder)"}),r.map(S=>d.jsx("option",{value:S.id,children:S.name},S.id))]})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"label",children:d.jsxs("span",{className:"flex items-center gap-sm",children:[d.jsx(oD,{size:14})," Tags"]})}),d.jsx("input",{type:"text",className:"input",value:f,onChange:S=>m(S.target.value),placeholder:"iot, v1 (comma separated)"})]})]}),d.jsxs("div",{className:"modal-footer",children:[d.jsx("button",{type:"button",className:"btn btn-secondary",onClick:t,children:"Cancel"}),d.jsxs("button",{className:"btn btn-primary",onClick:C,disabled:E,children:[E?d.jsx("div",{className:"loading-spinner sm"}):d.jsx(rD,{size:18}),"Save Changes"]})]})]})})}function ED({resources:t}){const{addResource:e,deleteResource:n,currentVersion:r}=Xe(),[s,i]=B.useState(""),[o,l]=B.useState(!1),u=async()=>{if(!(!s.trim()||!r)){l(!0);try{await e(r.id,{type:"note",name:"Note",metadata:{content:s.trim()}}),i("")}catch(m){console.error("Failed to add note:",m)}finally{l(!1)}}},c=m=>{m.key==="Enter"&&m.ctrlKey&&u()},f=m=>m?new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"}).format(m):"";return d.jsxs("div",{className:"text-entries",children:[d.jsx("div",{className:"entries-header",children:d.jsxs("h3",{children:[d.jsx(Fd,{size:18}),"Project Notes"]})}),d.jsxs("div",{className:"entries-input-wrapper",children:[d.jsx("textarea",{className:"input entry-textarea",placeholder:"Type a note... (Ctrl+Enter to add)",value:s,onChange:m=>i(m.target.value),onKeyDown:c}),d.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:d.jsxs("button",{className:"btn btn-primary btn-sm",onClick:u,disabled:!s.trim()||o,children:[d.jsx(tn,{size:16}),"Add Note"]})})]}),t.length===0?d.jsxs("div",{className:"entries-empty",children:[d.jsx(Fd,{size:48}),d.jsx("h3",{children:"No notes yet"}),d.jsx("p",{children:"Add notes, ideas, or logs for this version."})]}):d.jsx("div",{className:"entries-list",children:t.map(m=>{var g,_;return d.jsxs("div",{className:"entry-card",children:[d.jsxs("div",{className:"entry-header",children:[d.jsxs("span",{className:"entry-timestamp",children:[d.jsx(q0,{size:12}),f(m.createdAt)]}),d.jsx("div",{className:"entry-actions",children:d.jsx("button",{className:"btn btn-icon btn-ghost btn-sm text-error",onClick:()=>n(m.id),title:"Delete note",children:d.jsx(Mr,{size:14})})})]}),d.jsx("div",{className:"entry-content",children:((g=m.metadata)==null?void 0:g.content)||((_=m.metadata)==null?void 0:_.text)||""})]},m.id)})})]})}const TD=[{id:"gallery",label:"Gallery",icon:ya},{id:"code",label:"Code",icon:ea},{id:"notes",label:"Notes",icon:Fd},{id:"schematics",label:"Schematics",icon:Fp},{id:"flasher",label:"USB Flash",icon:sc},{id:"links",label:"AI Chats",icon:Kb},{id:"todo",label:"To-Do",icon:H0},{id:"errors",label:"Errors",icon:Mp}];function ID(){const{currentProject:t,currentVersion:e,versions:n,resources:r,selectProject:s,deleteProject:i,selectVersion:o}=Xe(),[l,u]=B.useState("gallery"),[c,f]=B.useState(!1),[m,g]=B.useState(!1),[_,R]=B.useState(!1),[N,j]=B.useState(!1);if(!t)return null;const I=()=>{s(null)},E=async()=>{await i(t.id)},A=()=>{switch(l){case"gallery":return r.filter(x=>x.type==="image"||x.type==="video");case"code":return r.filter(x=>x.type==="bin"||x.type==="ino");case"schematics":return r.filter(x=>x.type==="schematic");case"notes":return r.filter(x=>x.type==="note");case"links":return r.filter(x=>x.type==="link");default:return[]}},b=()=>{switch(l){case"gallery":return d.jsx(N_,{resources:A(),onAdd:()=>f(!0)});case"code":return d.jsx(mD,{resources:A(),onAdd:()=>f(!0)});case"schematics":return d.jsx(N_,{resources:A(),onAdd:()=>f(!0),type:"schematic"});case"notes":return d.jsx(ED,{resources:A()});case"flasher":return d.jsx(yD,{resources:r.filter(x=>x.type==="bin")});case"links":return d.jsx(pD,{resources:A()});case"todo":return d.jsx(dD,{version:e});case"errors":return d.jsx(fD,{version:e});default:return null}};return d.jsxs("div",{className:"project-detail animate-fadeIn",children:[d.jsxs("div",{className:"detail-header",children:[d.jsxs("button",{className:"btn btn-ghost",onClick:I,children:[d.jsx(Mb,{size:18}),"Back"]}),d.jsxs("div",{className:"detail-actions",children:[d.jsxs("button",{className:"btn btn-secondary",onClick:()=>j(!0),children:[d.jsx(tD,{size:16}),"Edit"]}),d.jsx("button",{className:"btn btn-ghost text-error",onClick:()=>g(!0),children:d.jsx(Mr,{size:16})})]})]}),d.jsxs("div",{className:"detail-info",children:[d.jsx("div",{className:"detail-thumbnail",children:t.thumbnailUrl||t.thumbnail?d.jsx("img",{src:t.thumbnailUrl||URL.createObjectURL(t.thumbnail),alt:t.name}):d.jsx("div",{className:"detail-thumbnail-placeholder",children:d.jsx(sc,{size:48})})}),d.jsxs("div",{className:"detail-meta",children:[d.jsx("h1",{className:"detail-title",children:t.name}),t.description&&d.jsx("p",{className:"detail-description",children:t.description}),e&&d.jsxs("div",{className:"version-badge",children:[d.jsx(vi,{size:14}),d.jsx("span",{children:e.name})]}),t.tags&&t.tags.length>0&&d.jsx("div",{className:"tags-list",children:t.tags.map((x,O)=>d.jsxs("span",{className:"badge badge-sm",children:[d.jsx(Tag,{size:12})," ",x]},O))})]})]}),d.jsxs("div",{className:"version-section",children:[d.jsxs("div",{className:"section-header",children:[d.jsxs("h2",{children:[d.jsx(vi,{size:18}),"Version Tree"]}),d.jsxs("button",{className:"btn btn-sm btn-secondary",onClick:()=>R(!0),children:[d.jsx(tn,{size:14}),"New Version"]})]}),d.jsx(hD,{versions:n,currentVersionId:e==null?void 0:e.id,onSelectVersion:o})]}),d.jsx("div",{className:"tabs",children:TD.map(x=>{const O=x.icon;return d.jsxs("button",{className:`tab ${l===x.id?"active":""}`,onClick:()=>u(x.id),children:[d.jsx(O,{size:16}),d.jsx("span",{children:x.label})]},x.id)})}),d.jsx("div",{className:"tab-content",children:b()}),c&&d.jsx(_D,{onClose:()=>f(!1),versionId:e==null?void 0:e.id,defaultType:l==="schematics"?"schematic":l==="code"?"bin":"image"}),_&&d.jsx(vD,{onClose:()=>R(!1),projectId:t.id,parentVersion:e,versions:n}),N&&d.jsx(wD,{onClose:()=>j(!1),project:t}),m&&d.jsx("div",{className:"modal-overlay",onClick:()=>g(!1),children:d.jsxs("div",{className:"modal confirm-dialog",onClick:x=>x.stopPropagation(),children:[d.jsxs("div",{className:"modal-content",children:[d.jsx(Mp,{className:"confirm-icon"}),d.jsx("h3",{children:"Delete Project?"}),d.jsxs("p",{className:"text-secondary",children:['This will permanently delete "',t.name,'" and all its versions and files.']})]}),d.jsxs("div",{className:"modal-footer",children:[d.jsx("button",{className:"btn btn-secondary",onClick:()=>g(!1),children:"Cancel"}),d.jsx("button",{className:"btn btn-danger",onClick:E,children:"Delete"})]})]})})]})}function SD({onClose:t}){const{createProject:e}=Xe(),[n,r]=B.useState(""),[s,i]=B.useState(""),[o,l]=B.useState(null),[u,c]=B.useState(null),[f,m]=B.useState(!1),[g,_]=B.useState(!1),R=x=>{const O=x.target.files[0];O&&(l(O),c(URL.createObjectURL(O)))},N=x=>{x&&x.type.startsWith("image/")&&(l(x),c(URL.createObjectURL(x)))},j=B.useCallback(x=>{var w;if(x.target.tagName==="INPUT"||x.target.tagName==="TEXTAREA")return;const O=(w=x.clipboardData)==null?void 0:w.items;if(O)for(let y=0;y<O.length;y++){const T=O[y];if(T.kind==="file"&&T.type.startsWith("image/")){const C=T.getAsFile();if(C){x.preventDefault();const S=new File([C],`thumbnail-${Date.now()}.png`,{type:C.type});N(S);break}}}},[]),I=x=>{x.preventDefault(),_(!0)},E=x=>{x.preventDefault(),_(!1)},A=x=>{x.preventDefault(),_(!1);const O=x.dataTransfer.files;if(O.length>0){const w=O[0];N(w)}};B.useEffect(()=>(document.addEventListener("paste",j),()=>{document.removeEventListener("paste",j)}),[j]);const b=async x=>{if(x.preventDefault(),!!n.trim()){m(!0);try{await e({name:n.trim(),description:s.trim(),thumbnail:o}),t()}catch(O){console.error("Failed to create project:",O)}finally{m(!1)}}};return d.jsx("div",{className:"modal-overlay",onClick:t,children:d.jsxs("div",{className:"modal",onClick:x=>x.stopPropagation(),children:[d.jsxs("div",{className:"modal-header",children:[d.jsx("h2",{children:"Create New Project"}),d.jsx("button",{className:"btn btn-icon btn-ghost",onClick:t,children:d.jsx(Bn,{size:20})})]}),d.jsxs("form",{onSubmit:b,className:"modal-content",children:[d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"label",children:"Project Name *"}),d.jsx("input",{type:"text",className:"input",placeholder:"e.g., RC Car with PS4 Controller",value:n,onChange:x=>r(x.target.value),autoFocus:!0,required:!0})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"label",children:"Description"}),d.jsx("textarea",{className:"input textarea",placeholder:"Describe your project...",value:s,onChange:x=>i(x.target.value),rows:3})]}),d.jsxs("div",{className:"form-group",children:[d.jsx("label",{className:"label",children:"Thumbnail"}),d.jsx("div",{className:"thumbnail-upload",children:u?d.jsxs("div",{className:"thumbnail-preview",children:[d.jsx("img",{src:u,alt:"Preview"}),d.jsx("button",{type:"button",className:"btn btn-icon btn-ghost thumbnail-remove",onClick:()=>{l(null),c(null)},children:d.jsx(Bn,{size:16})})]}):d.jsxs("label",{className:`dropzone thumbnail-dropzone ${g?"active":""}`,onDragOver:I,onDragLeave:E,onDrop:A,children:[d.jsx("input",{type:"file",accept:"image/*",onChange:R,hidden:!0}),d.jsx(ya,{size:24,className:"dropzone-icon"}),d.jsxs("span",{children:["Click, drag, or ",d.jsx("strong",{children:"paste"})," image"]}),d.jsxs("div",{className:"dropzone-hint",children:[d.jsx(Up,{size:14}),d.jsx("span",{children:"Ctrl+V to paste"})]})]})})]}),d.jsxs("div",{className:"modal-footer",children:[d.jsx("button",{type:"button",className:"btn btn-secondary",onClick:t,children:"Cancel"}),d.jsx("button",{type:"submit",className:"btn btn-primary",disabled:!n.trim()||f,children:f?d.jsxs(d.Fragment,{children:[d.jsx("span",{className:"loading-spinner",style:{width:16,height:16}}),"Creating..."]}):"Create Project"})]})]})]})})}function AD({children:t}){const{user:e,authLoading:n,login:r}=Xe();return n?d.jsxs("div",{className:"auth-loading",children:[d.jsx("div",{className:"loading-spinner"}),d.jsx("p",{children:"Connecting to NiroVault Cloud..."})]}):e?t:d.jsx("div",{className:"auth-container",children:d.jsxs("div",{className:"auth-card",children:[d.jsxs("div",{className:"auth-logo",children:[d.jsx(Fp,{size:48}),d.jsx("h1",{children:"NiroVault"})]}),d.jsx("p",{className:"auth-subtitle",children:"Sync your electronics projects across all devices"}),d.jsxs("button",{className:"btn btn-primary btn-lg auth-btn",onClick:r,children:[d.jsx(Yb,{size:20}),"Sign in with Google"]}),d.jsxs("div",{className:"auth-features",children:[d.jsxs("div",{className:"feature-item",children:[d.jsx("span",{children:"☁️"}),d.jsx("p",{children:"Real-time Cloud Sync"})]}),d.jsxs("div",{className:"feature-item",children:[d.jsx("span",{children:"📱"}),d.jsx("p",{children:"Mobile Accessible"})]}),d.jsxs("div",{className:"feature-item",children:[d.jsx("span",{children:"🔒"}),d.jsx("p",{children:"Secure Storage"})]})]})]})})}function kD(){const{currentProject:t,initAuth:e}=Xe(),[n,r]=B.useState(!1);return B.useEffect(()=>{const s=e();return()=>s()},[]),d.jsx(AD,{children:d.jsxs(lD,{onCreateProject:()=>r(!0),children:[t?d.jsx(ID,{}):d.jsx(cD,{onCreateProject:()=>r(!0)}),n&&d.jsx(SD,{onClose:()=>r(!1)})]})})}mh.createRoot(document.getElementById("root")).render(d.jsx(H_.StrictMode,{children:d.jsx(kD,{})}));
//# sourceMappingURL=index-D6BD_VA4.js.map
