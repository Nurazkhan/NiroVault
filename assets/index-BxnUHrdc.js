(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function V_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var j_={exports:{}},du={},O_={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var na=Symbol.for("react.element"),ST=Symbol.for("react.portal"),AT=Symbol.for("react.fragment"),kT=Symbol.for("react.strict_mode"),CT=Symbol.for("react.profiler"),RT=Symbol.for("react.provider"),xT=Symbol.for("react.context"),PT=Symbol.for("react.forward_ref"),NT=Symbol.for("react.suspense"),bT=Symbol.for("react.memo"),DT=Symbol.for("react.lazy"),zm=Symbol.iterator;function VT(t){return t===null||typeof t!="object"?null:(t=zm&&t[zm]||t["@@iterator"],typeof t=="function"?t:null)}var L_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M_=Object.assign,F_={};function wi(t,e,n){this.props=t,this.context=e,this.refs=F_,this.updater=n||L_}wi.prototype.isReactComponent={};wi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};wi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function U_(){}U_.prototype=wi.prototype;function Bd(t,e,n){this.props=t,this.context=e,this.refs=F_,this.updater=n||L_}var $d=Bd.prototype=new U_;$d.constructor=Bd;M_($d,wi.prototype);$d.isPureReactComponent=!0;var Bm=Array.isArray,z_=Object.prototype.hasOwnProperty,Hd={current:null},B_={key:!0,ref:!0,__self:!0,__source:!0};function $_(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)z_.call(e,r)&&!B_.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:na,type:t,key:i,ref:o,props:s,_owner:Hd.current}}function jT(t,e){return{$$typeof:na,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function qd(t){return typeof t=="object"&&t!==null&&t.$$typeof===na}function OT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var $m=/\/+/g;function kc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?OT(""+t.key):e.toString(36)}function nl(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case na:case ST:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+kc(o,0):r,Bm(s)?(n="",t!=null&&(n=t.replace($m,"$&/")+"/"),nl(s,e,n,"",function(c){return c})):s!=null&&(qd(s)&&(s=jT(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace($m,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Bm(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+kc(i,l);o+=nl(i,e,n,u,s)}else if(u=VT(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+kc(i,l++),o+=nl(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Na(t,e,n){if(t==null)return t;var r=[],s=0;return nl(t,r,"","",function(i){return e.call(n,i,s++)}),r}function LT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pt={current:null},rl={transition:null},MT={ReactCurrentDispatcher:pt,ReactCurrentBatchConfig:rl,ReactCurrentOwner:Hd};function H_(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:Na,forEach:function(t,e,n){Na(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Na(t,function(){e++}),e},toArray:function(t){return Na(t,function(e){return e})||[]},only:function(t){if(!qd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};te.Component=wi;te.Fragment=AT;te.Profiler=CT;te.PureComponent=Bd;te.StrictMode=kT;te.Suspense=NT;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=MT;te.act=H_;te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=M_({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Hd.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)z_.call(e,u)&&!B_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:na,type:t.type,key:s,ref:i,props:r,_owner:o}};te.createContext=function(t){return t={$$typeof:xT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:RT,_context:t},t.Consumer=t};te.createElement=$_;te.createFactory=function(t){var e=$_.bind(null,t);return e.type=t,e};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:PT,render:t}};te.isValidElement=qd;te.lazy=function(t){return{$$typeof:DT,_payload:{_status:-1,_result:t},_init:LT}};te.memo=function(t,e){return{$$typeof:bT,type:t,compare:e===void 0?null:e}};te.startTransition=function(t){var e=rl.transition;rl.transition={};try{t()}finally{rl.transition=e}};te.unstable_act=H_;te.useCallback=function(t,e){return pt.current.useCallback(t,e)};te.useContext=function(t){return pt.current.useContext(t)};te.useDebugValue=function(){};te.useDeferredValue=function(t){return pt.current.useDeferredValue(t)};te.useEffect=function(t,e){return pt.current.useEffect(t,e)};te.useId=function(){return pt.current.useId()};te.useImperativeHandle=function(t,e,n){return pt.current.useImperativeHandle(t,e,n)};te.useInsertionEffect=function(t,e){return pt.current.useInsertionEffect(t,e)};te.useLayoutEffect=function(t,e){return pt.current.useLayoutEffect(t,e)};te.useMemo=function(t,e){return pt.current.useMemo(t,e)};te.useReducer=function(t,e,n){return pt.current.useReducer(t,e,n)};te.useRef=function(t){return pt.current.useRef(t)};te.useState=function(t){return pt.current.useState(t)};te.useSyncExternalStore=function(t,e,n){return pt.current.useSyncExternalStore(t,e,n)};te.useTransition=function(){return pt.current.useTransition()};te.version="18.3.1";O_.exports=te;var B=O_.exports;const q_=V_(B);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var FT=B,UT=Symbol.for("react.element"),zT=Symbol.for("react.fragment"),BT=Object.prototype.hasOwnProperty,$T=FT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,HT={key:!0,ref:!0,__self:!0,__source:!0};function W_(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)BT.call(e,r)&&!HT.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:UT,type:t,key:i,ref:o,props:s,_owner:$T.current}}du.Fragment=zT;du.jsx=W_;du.jsxs=W_;j_.exports=du;var h=j_.exports,mh={},G_={exports:{}},Nt={},K_={exports:{}},Q_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,Q){var Z=$.length;$.push(Q);e:for(;0<Z;){var ye=Z-1>>>1,Re=$[ye];if(0<s(Re,Q))$[ye]=Q,$[Z]=Re,Z=ye;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var Q=$[0],Z=$.pop();if(Z!==Q){$[0]=Z;e:for(var ye=0,Re=$.length,zr=Re>>>1;ye<zr;){var Dt=2*(ye+1)-1,Br=$[Dt],$t=Dt+1,qn=$[$t];if(0>s(Br,Z))$t<Re&&0>s(qn,Br)?($[ye]=qn,$[$t]=Z,ye=$t):($[ye]=Br,$[Dt]=Z,ye=Dt);else if($t<Re&&0>s(qn,Z))$[ye]=qn,$[$t]=Z,ye=$t;else break e}}return Q}function s($,Q){var Z=$.sortIndex-Q.sortIndex;return Z!==0?Z:$.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,m=null,g=3,w=!1,I=!1,P=!1,V=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A($){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=$)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(c)}}function b($){if(P=!1,A($),!I)if(n(u)!==null)I=!0,Bt(x);else{var Q=n(c);Q!==null&&Ur(b,Q.startTime-$)}}function x($,Q){I=!1,P&&(P=!1,S(_),_=-1),w=!0;var Z=g;try{for(A(Q),m=n(u);m!==null&&(!(m.expirationTime>Q)||$&&!k());){var ye=m.callback;if(typeof ye=="function"){m.callback=null,g=m.priorityLevel;var Re=ye(m.expirationTime<=Q);Q=t.unstable_now(),typeof Re=="function"?m.callback=Re:m===n(u)&&r(u),A(Q)}else r(u);m=n(u)}if(m!==null)var zr=!0;else{var Dt=n(c);Dt!==null&&Ur(b,Dt.startTime-Q),zr=!1}return zr}finally{m=null,g=Z,w=!1}}var O=!1,y=null,_=-1,E=5,R=-1;function k(){return!(t.unstable_now()-R<E)}function N(){if(y!==null){var $=t.unstable_now();R=$;var Q=!0;try{Q=y(!0,$)}finally{Q?C():(O=!1,y=null)}}else O=!1}var C;if(typeof T=="function")C=function(){T(N)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,Ue=ce.port2;ce.port1.onmessage=N,C=function(){Ue.postMessage(null)}}else C=function(){V(N,0)};function Bt($){y=$,O||(O=!0,C())}function Ur($,Q){_=V(function(){$(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){I||w||(I=!0,Bt(x))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(g){case 1:case 2:case 3:var Q=3;break;default:Q=g}var Z=g;g=Q;try{return $()}finally{g=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,Q){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Z=g;g=$;try{return Q()}finally{g=Z}},t.unstable_scheduleCallback=function($,Q,Z){var ye=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ye+Z:ye):Z=ye,$){case 1:var Re=-1;break;case 2:Re=250;break;case 5:Re=1073741823;break;case 4:Re=1e4;break;default:Re=5e3}return Re=Z+Re,$={id:f++,callback:Q,priorityLevel:$,startTime:Z,expirationTime:Re,sortIndex:-1},Z>ye?($.sortIndex=Z,e(c,$),n(u)===null&&$===n(c)&&(P?(S(_),_=-1):P=!0,Ur(b,Z-ye))):($.sortIndex=Re,e(u,$),I||w||(I=!0,Bt(x))),$},t.unstable_shouldYield=k,t.unstable_wrapCallback=function($){var Q=g;return function(){var Z=g;g=Q;try{return $.apply(this,arguments)}finally{g=Z}}}})(Q_);K_.exports=Q_;var qT=K_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var WT=B,Pt=qT;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Y_=new Set,Co={};function _s(t,e){ri(t,e),ri(t+"Capture",e)}function ri(t,e){for(Co[t]=e,t=0;t<e.length;t++)Y_.add(e[t])}var On=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gh=Object.prototype.hasOwnProperty,GT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hm={},qm={};function KT(t){return gh.call(qm,t)?!0:gh.call(Hm,t)?!1:GT.test(t)?qm[t]=!0:(Hm[t]=!0,!1)}function QT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function YT(t,e,n,r){if(e===null||typeof e>"u"||QT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Qe[t]=new mt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Qe[e]=new mt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Qe[t]=new mt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Qe[t]=new mt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Qe[t]=new mt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Qe[t]=new mt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Qe[t]=new mt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Qe[t]=new mt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Qe[t]=new mt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Wd=/[\-:]([a-z])/g;function Gd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Wd,Gd);Qe[e]=new mt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Wd,Gd);Qe[e]=new mt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Wd,Gd);Qe[e]=new mt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Qe[t]=new mt(t,1,!1,t.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Qe[t]=new mt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Kd(t,e,n,r){var s=Qe.hasOwnProperty(e)?Qe[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(YT(e,n,s,r)&&(n=null),r||s===null?KT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Hn=WT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ba=Symbol.for("react.element"),Ds=Symbol.for("react.portal"),Vs=Symbol.for("react.fragment"),Qd=Symbol.for("react.strict_mode"),yh=Symbol.for("react.profiler"),X_=Symbol.for("react.provider"),J_=Symbol.for("react.context"),Yd=Symbol.for("react.forward_ref"),_h=Symbol.for("react.suspense"),vh=Symbol.for("react.suspense_list"),Xd=Symbol.for("react.memo"),er=Symbol.for("react.lazy"),Z_=Symbol.for("react.offscreen"),Wm=Symbol.iterator;function qi(t){return t===null||typeof t!="object"?null:(t=Wm&&t[Wm]||t["@@iterator"],typeof t=="function"?t:null)}var Ee=Object.assign,Cc;function to(t){if(Cc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Cc=e&&e[1]||""}return`
`+Cc+t}var Rc=!1;function xc(t,e){if(!t||Rc)return"";Rc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Rc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?to(t):""}function XT(t){switch(t.tag){case 5:return to(t.type);case 16:return to("Lazy");case 13:return to("Suspense");case 19:return to("SuspenseList");case 0:case 2:case 15:return t=xc(t.type,!1),t;case 11:return t=xc(t.type.render,!1),t;case 1:return t=xc(t.type,!0),t;default:return""}}function wh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Vs:return"Fragment";case Ds:return"Portal";case yh:return"Profiler";case Qd:return"StrictMode";case _h:return"Suspense";case vh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case J_:return(t.displayName||"Context")+".Consumer";case X_:return(t._context.displayName||"Context")+".Provider";case Yd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Xd:return e=t.displayName||null,e!==null?e:wh(t.type)||"Memo";case er:e=t._payload,t=t._init;try{return wh(t(e))}catch{}}return null}function JT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wh(e);case 8:return e===Qd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Sr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ev(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ZT(t){var e=ev(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Da(t){t._valueTracker||(t._valueTracker=ZT(t))}function tv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=ev(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Sl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Eh(t,e){var n=e.checked;return Ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Gm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Sr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function nv(t,e){e=e.checked,e!=null&&Kd(t,"checked",e,!1)}function Th(t,e){nv(t,e);var n=Sr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ih(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ih(t,e.type,Sr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Km(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ih(t,e,n){(e!=="number"||Sl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var no=Array.isArray;function qs(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Sr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Sh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Qm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(no(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Sr(n)}}function rv(t,e){var n=Sr(e.value),r=Sr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ym(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function sv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ah(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?sv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Va,iv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Va=Va||document.createElement("div"),Va.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Va.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ro(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var uo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},eI=["Webkit","ms","Moz","O"];Object.keys(uo).forEach(function(t){eI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),uo[e]=uo[t]})});function ov(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||uo.hasOwnProperty(t)&&uo[t]?(""+e).trim():e+"px"}function av(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=ov(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var tI=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kh(t,e){if(e){if(tI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Ch(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rh=null;function Jd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xh=null,Ws=null,Gs=null;function Xm(t){if(t=ia(t)){if(typeof xh!="function")throw Error(F(280));var e=t.stateNode;e&&(e=yu(e),xh(t.stateNode,t.type,e))}}function lv(t){Ws?Gs?Gs.push(t):Gs=[t]:Ws=t}function uv(){if(Ws){var t=Ws,e=Gs;if(Gs=Ws=null,Xm(t),e)for(t=0;t<e.length;t++)Xm(e[t])}}function cv(t,e){return t(e)}function hv(){}var Pc=!1;function dv(t,e,n){if(Pc)return t(e,n);Pc=!0;try{return cv(t,e,n)}finally{Pc=!1,(Ws!==null||Gs!==null)&&(hv(),uv())}}function xo(t,e){var n=t.stateNode;if(n===null)return null;var r=yu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Ph=!1;if(On)try{var Wi={};Object.defineProperty(Wi,"passive",{get:function(){Ph=!0}}),window.addEventListener("test",Wi,Wi),window.removeEventListener("test",Wi,Wi)}catch{Ph=!1}function nI(t,e,n,r,s,i,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var co=!1,Al=null,kl=!1,Nh=null,rI={onError:function(t){co=!0,Al=t}};function sI(t,e,n,r,s,i,o,l,u){co=!1,Al=null,nI.apply(rI,arguments)}function iI(t,e,n,r,s,i,o,l,u){if(sI.apply(this,arguments),co){if(co){var c=Al;co=!1,Al=null}else throw Error(F(198));kl||(kl=!0,Nh=c)}}function vs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function fv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Jm(t){if(vs(t)!==t)throw Error(F(188))}function oI(t){var e=t.alternate;if(!e){if(e=vs(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Jm(s),t;if(i===r)return Jm(s),e;i=i.sibling}throw Error(F(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function pv(t){return t=oI(t),t!==null?mv(t):null}function mv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=mv(t);if(e!==null)return e;t=t.sibling}return null}var gv=Pt.unstable_scheduleCallback,Zm=Pt.unstable_cancelCallback,aI=Pt.unstable_shouldYield,lI=Pt.unstable_requestPaint,Pe=Pt.unstable_now,uI=Pt.unstable_getCurrentPriorityLevel,Zd=Pt.unstable_ImmediatePriority,yv=Pt.unstable_UserBlockingPriority,Cl=Pt.unstable_NormalPriority,cI=Pt.unstable_LowPriority,_v=Pt.unstable_IdlePriority,fu=null,cn=null;function hI(t){if(cn&&typeof cn.onCommitFiberRoot=="function")try{cn.onCommitFiberRoot(fu,t,void 0,(t.current.flags&128)===128)}catch{}}var Qt=Math.clz32?Math.clz32:pI,dI=Math.log,fI=Math.LN2;function pI(t){return t>>>=0,t===0?32:31-(dI(t)/fI|0)|0}var ja=64,Oa=4194304;function ro(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Rl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=ro(l):(i&=o,i!==0&&(r=ro(i)))}else o=n&~s,o!==0?r=ro(o):i!==0&&(r=ro(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Qt(e),s=1<<n,r|=t[n],e&=~s;return r}function mI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-Qt(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=mI(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function bh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function vv(){var t=ja;return ja<<=1,!(ja&4194240)&&(ja=64),t}function Nc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ra(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Qt(e),t[e]=n}function yI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Qt(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function ef(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Qt(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var le=0;function wv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ev,tf,Tv,Iv,Sv,Dh=!1,La=[],dr=null,fr=null,pr=null,Po=new Map,No=new Map,nr=[],_I="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function eg(t,e){switch(t){case"focusin":case"focusout":dr=null;break;case"dragenter":case"dragleave":fr=null;break;case"mouseover":case"mouseout":pr=null;break;case"pointerover":case"pointerout":Po.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":No.delete(e.pointerId)}}function Gi(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=ia(e),e!==null&&tf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function vI(t,e,n,r,s){switch(e){case"focusin":return dr=Gi(dr,t,e,n,r,s),!0;case"dragenter":return fr=Gi(fr,t,e,n,r,s),!0;case"mouseover":return pr=Gi(pr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Po.set(i,Gi(Po.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,No.set(i,Gi(No.get(i)||null,t,e,n,r,s)),!0}return!1}function Av(t){var e=Xr(t.target);if(e!==null){var n=vs(e);if(n!==null){if(e=n.tag,e===13){if(e=fv(n),e!==null){t.blockedOn=e,Sv(t.priority,function(){Tv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function sl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Vh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Rh=r,n.target.dispatchEvent(r),Rh=null}else return e=ia(n),e!==null&&tf(e),t.blockedOn=n,!1;e.shift()}return!0}function tg(t,e,n){sl(t)&&n.delete(e)}function wI(){Dh=!1,dr!==null&&sl(dr)&&(dr=null),fr!==null&&sl(fr)&&(fr=null),pr!==null&&sl(pr)&&(pr=null),Po.forEach(tg),No.forEach(tg)}function Ki(t,e){t.blockedOn===e&&(t.blockedOn=null,Dh||(Dh=!0,Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority,wI)))}function bo(t){function e(s){return Ki(s,t)}if(0<La.length){Ki(La[0],t);for(var n=1;n<La.length;n++){var r=La[n];r.blockedOn===t&&(r.blockedOn=null)}}for(dr!==null&&Ki(dr,t),fr!==null&&Ki(fr,t),pr!==null&&Ki(pr,t),Po.forEach(e),No.forEach(e),n=0;n<nr.length;n++)r=nr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<nr.length&&(n=nr[0],n.blockedOn===null);)Av(n),n.blockedOn===null&&nr.shift()}var Ks=Hn.ReactCurrentBatchConfig,xl=!0;function EI(t,e,n,r){var s=le,i=Ks.transition;Ks.transition=null;try{le=1,nf(t,e,n,r)}finally{le=s,Ks.transition=i}}function TI(t,e,n,r){var s=le,i=Ks.transition;Ks.transition=null;try{le=4,nf(t,e,n,r)}finally{le=s,Ks.transition=i}}function nf(t,e,n,r){if(xl){var s=Vh(t,e,n,r);if(s===null)zc(t,e,r,Pl,n),eg(t,r);else if(vI(s,t,e,n,r))r.stopPropagation();else if(eg(t,r),e&4&&-1<_I.indexOf(t)){for(;s!==null;){var i=ia(s);if(i!==null&&Ev(i),i=Vh(t,e,n,r),i===null&&zc(t,e,r,Pl,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else zc(t,e,r,null,n)}}var Pl=null;function Vh(t,e,n,r){if(Pl=null,t=Jd(r),t=Xr(t),t!==null)if(e=vs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=fv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Pl=t,null}function kv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(uI()){case Zd:return 1;case yv:return 4;case Cl:case cI:return 16;case _v:return 536870912;default:return 16}default:return 16}}var lr=null,rf=null,il=null;function Cv(){if(il)return il;var t,e=rf,n=e.length,r,s="value"in lr?lr.value:lr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return il=s.slice(t,1<r?1-r:void 0)}function ol(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ma(){return!0}function ng(){return!1}function bt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ma:ng,this.isPropagationStopped=ng,this}return Ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ma)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ma)},persist:function(){},isPersistent:Ma}),e}var Ei={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sf=bt(Ei),sa=Ee({},Ei,{view:0,detail:0}),II=bt(sa),bc,Dc,Qi,pu=Ee({},sa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:of,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qi&&(Qi&&t.type==="mousemove"?(bc=t.screenX-Qi.screenX,Dc=t.screenY-Qi.screenY):Dc=bc=0,Qi=t),bc)},movementY:function(t){return"movementY"in t?t.movementY:Dc}}),rg=bt(pu),SI=Ee({},pu,{dataTransfer:0}),AI=bt(SI),kI=Ee({},sa,{relatedTarget:0}),Vc=bt(kI),CI=Ee({},Ei,{animationName:0,elapsedTime:0,pseudoElement:0}),RI=bt(CI),xI=Ee({},Ei,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),PI=bt(xI),NI=Ee({},Ei,{data:0}),sg=bt(NI),bI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},DI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},VI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=VI[t])?!!e[t]:!1}function of(){return jI}var OI=Ee({},sa,{key:function(t){if(t.key){var e=bI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ol(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?DI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:of,charCode:function(t){return t.type==="keypress"?ol(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ol(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),LI=bt(OI),MI=Ee({},pu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ig=bt(MI),FI=Ee({},sa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:of}),UI=bt(FI),zI=Ee({},Ei,{propertyName:0,elapsedTime:0,pseudoElement:0}),BI=bt(zI),$I=Ee({},pu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),HI=bt($I),qI=[9,13,27,32],af=On&&"CompositionEvent"in window,ho=null;On&&"documentMode"in document&&(ho=document.documentMode);var WI=On&&"TextEvent"in window&&!ho,Rv=On&&(!af||ho&&8<ho&&11>=ho),og=" ",ag=!1;function xv(t,e){switch(t){case"keyup":return qI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var js=!1;function GI(t,e){switch(t){case"compositionend":return Pv(e);case"keypress":return e.which!==32?null:(ag=!0,og);case"textInput":return t=e.data,t===og&&ag?null:t;default:return null}}function KI(t,e){if(js)return t==="compositionend"||!af&&xv(t,e)?(t=Cv(),il=rf=lr=null,js=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Rv&&e.locale!=="ko"?null:e.data;default:return null}}var QI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!QI[t.type]:e==="textarea"}function Nv(t,e,n,r){lv(r),e=Nl(e,"onChange"),0<e.length&&(n=new sf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var fo=null,Do=null;function YI(t){Bv(t,0)}function mu(t){var e=Ms(t);if(tv(e))return t}function XI(t,e){if(t==="change")return e}var bv=!1;if(On){var jc;if(On){var Oc="oninput"in document;if(!Oc){var ug=document.createElement("div");ug.setAttribute("oninput","return;"),Oc=typeof ug.oninput=="function"}jc=Oc}else jc=!1;bv=jc&&(!document.documentMode||9<document.documentMode)}function cg(){fo&&(fo.detachEvent("onpropertychange",Dv),Do=fo=null)}function Dv(t){if(t.propertyName==="value"&&mu(Do)){var e=[];Nv(e,Do,t,Jd(t)),dv(YI,e)}}function JI(t,e,n){t==="focusin"?(cg(),fo=e,Do=n,fo.attachEvent("onpropertychange",Dv)):t==="focusout"&&cg()}function ZI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return mu(Do)}function eS(t,e){if(t==="click")return mu(e)}function tS(t,e){if(t==="input"||t==="change")return mu(e)}function nS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Zt=typeof Object.is=="function"?Object.is:nS;function Vo(t,e){if(Zt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!gh.call(e,s)||!Zt(t[s],e[s]))return!1}return!0}function hg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function dg(t,e){var n=hg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hg(n)}}function Vv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Vv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function jv(){for(var t=window,e=Sl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Sl(t.document)}return e}function lf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function rS(t){var e=jv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Vv(n.ownerDocument.documentElement,n)){if(r!==null&&lf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=dg(n,i);var o=dg(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var sS=On&&"documentMode"in document&&11>=document.documentMode,Os=null,jh=null,po=null,Oh=!1;function fg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Oh||Os==null||Os!==Sl(r)||(r=Os,"selectionStart"in r&&lf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),po&&Vo(po,r)||(po=r,r=Nl(jh,"onSelect"),0<r.length&&(e=new sf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Os)))}function Fa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ls={animationend:Fa("Animation","AnimationEnd"),animationiteration:Fa("Animation","AnimationIteration"),animationstart:Fa("Animation","AnimationStart"),transitionend:Fa("Transition","TransitionEnd")},Lc={},Ov={};On&&(Ov=document.createElement("div").style,"AnimationEvent"in window||(delete Ls.animationend.animation,delete Ls.animationiteration.animation,delete Ls.animationstart.animation),"TransitionEvent"in window||delete Ls.transitionend.transition);function gu(t){if(Lc[t])return Lc[t];if(!Ls[t])return t;var e=Ls[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ov)return Lc[t]=e[n];return t}var Lv=gu("animationend"),Mv=gu("animationiteration"),Fv=gu("animationstart"),Uv=gu("transitionend"),zv=new Map,pg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dr(t,e){zv.set(t,e),_s(e,[t])}for(var Mc=0;Mc<pg.length;Mc++){var Fc=pg[Mc],iS=Fc.toLowerCase(),oS=Fc[0].toUpperCase()+Fc.slice(1);Dr(iS,"on"+oS)}Dr(Lv,"onAnimationEnd");Dr(Mv,"onAnimationIteration");Dr(Fv,"onAnimationStart");Dr("dblclick","onDoubleClick");Dr("focusin","onFocus");Dr("focusout","onBlur");Dr(Uv,"onTransitionEnd");ri("onMouseEnter",["mouseout","mouseover"]);ri("onMouseLeave",["mouseout","mouseover"]);ri("onPointerEnter",["pointerout","pointerover"]);ri("onPointerLeave",["pointerout","pointerover"]);_s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_s("onBeforeInput",["compositionend","keypress","textInput","paste"]);_s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var so="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aS=new Set("cancel close invalid load scroll toggle".split(" ").concat(so));function mg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,iI(r,e,void 0,t),t.currentTarget=null}function Bv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;mg(s,l,c),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;mg(s,l,c),i=u}}}if(kl)throw t=Nh,kl=!1,Nh=null,t}function pe(t,e){var n=e[zh];n===void 0&&(n=e[zh]=new Set);var r=t+"__bubble";n.has(r)||($v(e,t,2,!1),n.add(r))}function Uc(t,e,n){var r=0;e&&(r|=4),$v(n,t,r,e)}var Ua="_reactListening"+Math.random().toString(36).slice(2);function jo(t){if(!t[Ua]){t[Ua]=!0,Y_.forEach(function(n){n!=="selectionchange"&&(aS.has(n)||Uc(n,!1,t),Uc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ua]||(e[Ua]=!0,Uc("selectionchange",!1,e))}}function $v(t,e,n,r){switch(kv(e)){case 1:var s=EI;break;case 4:s=TI;break;default:s=nf}n=s.bind(null,e,n,t),s=void 0,!Ph||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function zc(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Xr(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}dv(function(){var c=i,f=Jd(n),m=[];e:{var g=zv.get(t);if(g!==void 0){var w=sf,I=t;switch(t){case"keypress":if(ol(n)===0)break e;case"keydown":case"keyup":w=LI;break;case"focusin":I="focus",w=Vc;break;case"focusout":I="blur",w=Vc;break;case"beforeblur":case"afterblur":w=Vc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=rg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=AI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=UI;break;case Lv:case Mv:case Fv:w=RI;break;case Uv:w=BI;break;case"scroll":w=II;break;case"wheel":w=HI;break;case"copy":case"cut":case"paste":w=PI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=ig}var P=(e&4)!==0,V=!P&&t==="scroll",S=P?g!==null?g+"Capture":null:g;P=[];for(var T=c,A;T!==null;){A=T;var b=A.stateNode;if(A.tag===5&&b!==null&&(A=b,S!==null&&(b=xo(T,S),b!=null&&P.push(Oo(T,b,A)))),V)break;T=T.return}0<P.length&&(g=new w(g,I,null,n,f),m.push({event:g,listeners:P}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",g&&n!==Rh&&(I=n.relatedTarget||n.fromElement)&&(Xr(I)||I[Ln]))break e;if((w||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,w?(I=n.relatedTarget||n.toElement,w=c,I=I?Xr(I):null,I!==null&&(V=vs(I),I!==V||I.tag!==5&&I.tag!==6)&&(I=null)):(w=null,I=c),w!==I)){if(P=rg,b="onMouseLeave",S="onMouseEnter",T="mouse",(t==="pointerout"||t==="pointerover")&&(P=ig,b="onPointerLeave",S="onPointerEnter",T="pointer"),V=w==null?g:Ms(w),A=I==null?g:Ms(I),g=new P(b,T+"leave",w,n,f),g.target=V,g.relatedTarget=A,b=null,Xr(f)===c&&(P=new P(S,T+"enter",I,n,f),P.target=A,P.relatedTarget=V,b=P),V=b,w&&I)t:{for(P=w,S=I,T=0,A=P;A;A=Rs(A))T++;for(A=0,b=S;b;b=Rs(b))A++;for(;0<T-A;)P=Rs(P),T--;for(;0<A-T;)S=Rs(S),A--;for(;T--;){if(P===S||S!==null&&P===S.alternate)break t;P=Rs(P),S=Rs(S)}P=null}else P=null;w!==null&&gg(m,g,w,P,!1),I!==null&&V!==null&&gg(m,V,I,P,!0)}}e:{if(g=c?Ms(c):window,w=g.nodeName&&g.nodeName.toLowerCase(),w==="select"||w==="input"&&g.type==="file")var x=XI;else if(lg(g))if(bv)x=tS;else{x=ZI;var O=JI}else(w=g.nodeName)&&w.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(x=eS);if(x&&(x=x(t,c))){Nv(m,x,n,f);break e}O&&O(t,g,c),t==="focusout"&&(O=g._wrapperState)&&O.controlled&&g.type==="number"&&Ih(g,"number",g.value)}switch(O=c?Ms(c):window,t){case"focusin":(lg(O)||O.contentEditable==="true")&&(Os=O,jh=c,po=null);break;case"focusout":po=jh=Os=null;break;case"mousedown":Oh=!0;break;case"contextmenu":case"mouseup":case"dragend":Oh=!1,fg(m,n,f);break;case"selectionchange":if(sS)break;case"keydown":case"keyup":fg(m,n,f)}var y;if(af)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else js?xv(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Rv&&n.locale!=="ko"&&(js||_!=="onCompositionStart"?_==="onCompositionEnd"&&js&&(y=Cv()):(lr=f,rf="value"in lr?lr.value:lr.textContent,js=!0)),O=Nl(c,_),0<O.length&&(_=new sg(_,t,null,n,f),m.push({event:_,listeners:O}),y?_.data=y:(y=Pv(n),y!==null&&(_.data=y)))),(y=WI?GI(t,n):KI(t,n))&&(c=Nl(c,"onBeforeInput"),0<c.length&&(f=new sg("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:c}),f.data=y))}Bv(m,e)})}function Oo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Nl(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=xo(t,n),i!=null&&r.unshift(Oo(t,i,s)),i=xo(t,e),i!=null&&r.push(Oo(t,i,s))),t=t.return}return r}function Rs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function gg(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,s?(u=xo(n,i),u!=null&&o.unshift(Oo(n,u,l))):s||(u=xo(n,i),u!=null&&o.push(Oo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var lS=/\r\n?/g,uS=/\u0000|\uFFFD/g;function yg(t){return(typeof t=="string"?t:""+t).replace(lS,`
`).replace(uS,"")}function za(t,e,n){if(e=yg(e),yg(t)!==e&&n)throw Error(F(425))}function bl(){}var Lh=null,Mh=null;function Fh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Uh=typeof setTimeout=="function"?setTimeout:void 0,cS=typeof clearTimeout=="function"?clearTimeout:void 0,_g=typeof Promise=="function"?Promise:void 0,hS=typeof queueMicrotask=="function"?queueMicrotask:typeof _g<"u"?function(t){return _g.resolve(null).then(t).catch(dS)}:Uh;function dS(t){setTimeout(function(){throw t})}function Bc(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),bo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);bo(e)}function mr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function vg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ti=Math.random().toString(36).slice(2),ln="__reactFiber$"+Ti,Lo="__reactProps$"+Ti,Ln="__reactContainer$"+Ti,zh="__reactEvents$"+Ti,fS="__reactListeners$"+Ti,pS="__reactHandles$"+Ti;function Xr(t){var e=t[ln];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ln]||n[ln]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=vg(t);t!==null;){if(n=t[ln])return n;t=vg(t)}return e}t=n,n=t.parentNode}return null}function ia(t){return t=t[ln]||t[Ln],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ms(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function yu(t){return t[Lo]||null}var Bh=[],Fs=-1;function Vr(t){return{current:t}}function ge(t){0>Fs||(t.current=Bh[Fs],Bh[Fs]=null,Fs--)}function de(t,e){Fs++,Bh[Fs]=t.current,t.current=e}var Ar={},ot=Vr(Ar),wt=Vr(!1),as=Ar;function si(t,e){var n=t.type.contextTypes;if(!n)return Ar;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Et(t){return t=t.childContextTypes,t!=null}function Dl(){ge(wt),ge(ot)}function wg(t,e,n){if(ot.current!==Ar)throw Error(F(168));de(ot,e),de(wt,n)}function Hv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(F(108,JT(t)||"Unknown",s));return Ee({},n,r)}function Vl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ar,as=ot.current,de(ot,t),de(wt,wt.current),!0}function Eg(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=Hv(t,e,as),r.__reactInternalMemoizedMergedChildContext=t,ge(wt),ge(ot),de(ot,t)):ge(wt),de(wt,n)}var Cn=null,_u=!1,$c=!1;function qv(t){Cn===null?Cn=[t]:Cn.push(t)}function mS(t){_u=!0,qv(t)}function jr(){if(!$c&&Cn!==null){$c=!0;var t=0,e=le;try{var n=Cn;for(le=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Cn=null,_u=!1}catch(s){throw Cn!==null&&(Cn=Cn.slice(t+1)),gv(Zd,jr),s}finally{le=e,$c=!1}}return null}var Us=[],zs=0,jl=null,Ol=0,Vt=[],jt=0,ls=null,xn=1,Pn="";function Kr(t,e){Us[zs++]=Ol,Us[zs++]=jl,jl=t,Ol=e}function Wv(t,e,n){Vt[jt++]=xn,Vt[jt++]=Pn,Vt[jt++]=ls,ls=t;var r=xn;t=Pn;var s=32-Qt(r)-1;r&=~(1<<s),n+=1;var i=32-Qt(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,xn=1<<32-Qt(e)+s|n<<s|r,Pn=i+t}else xn=1<<i|n<<s|r,Pn=t}function uf(t){t.return!==null&&(Kr(t,1),Wv(t,1,0))}function cf(t){for(;t===jl;)jl=Us[--zs],Us[zs]=null,Ol=Us[--zs],Us[zs]=null;for(;t===ls;)ls=Vt[--jt],Vt[jt]=null,Pn=Vt[--jt],Vt[jt]=null,xn=Vt[--jt],Vt[jt]=null}var xt=null,kt=null,_e=!1,Gt=null;function Gv(t,e){var n=Mt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Tg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xt=t,kt=mr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xt=t,kt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ls!==null?{id:xn,overflow:Pn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Mt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xt=t,kt=null,!0):!1;default:return!1}}function $h(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Hh(t){if(_e){var e=kt;if(e){var n=e;if(!Tg(t,e)){if($h(t))throw Error(F(418));e=mr(n.nextSibling);var r=xt;e&&Tg(t,e)?Gv(r,n):(t.flags=t.flags&-4097|2,_e=!1,xt=t)}}else{if($h(t))throw Error(F(418));t.flags=t.flags&-4097|2,_e=!1,xt=t}}}function Ig(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xt=t}function Ba(t){if(t!==xt)return!1;if(!_e)return Ig(t),_e=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Fh(t.type,t.memoizedProps)),e&&(e=kt)){if($h(t))throw Kv(),Error(F(418));for(;e;)Gv(t,e),e=mr(e.nextSibling)}if(Ig(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){kt=mr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}kt=null}}else kt=xt?mr(t.stateNode.nextSibling):null;return!0}function Kv(){for(var t=kt;t;)t=mr(t.nextSibling)}function ii(){kt=xt=null,_e=!1}function hf(t){Gt===null?Gt=[t]:Gt.push(t)}var gS=Hn.ReactCurrentBatchConfig;function Yi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function $a(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Sg(t){var e=t._init;return e(t._payload)}function Qv(t){function e(S,T){if(t){var A=S.deletions;A===null?(S.deletions=[T],S.flags|=16):A.push(T)}}function n(S,T){if(!t)return null;for(;T!==null;)e(S,T),T=T.sibling;return null}function r(S,T){for(S=new Map;T!==null;)T.key!==null?S.set(T.key,T):S.set(T.index,T),T=T.sibling;return S}function s(S,T){return S=vr(S,T),S.index=0,S.sibling=null,S}function i(S,T,A){return S.index=A,t?(A=S.alternate,A!==null?(A=A.index,A<T?(S.flags|=2,T):A):(S.flags|=2,T)):(S.flags|=1048576,T)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function l(S,T,A,b){return T===null||T.tag!==6?(T=Yc(A,S.mode,b),T.return=S,T):(T=s(T,A),T.return=S,T)}function u(S,T,A,b){var x=A.type;return x===Vs?f(S,T,A.props.children,b,A.key):T!==null&&(T.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===er&&Sg(x)===T.type)?(b=s(T,A.props),b.ref=Yi(S,T,A),b.return=S,b):(b=fl(A.type,A.key,A.props,null,S.mode,b),b.ref=Yi(S,T,A),b.return=S,b)}function c(S,T,A,b){return T===null||T.tag!==4||T.stateNode.containerInfo!==A.containerInfo||T.stateNode.implementation!==A.implementation?(T=Xc(A,S.mode,b),T.return=S,T):(T=s(T,A.children||[]),T.return=S,T)}function f(S,T,A,b,x){return T===null||T.tag!==7?(T=rs(A,S.mode,b,x),T.return=S,T):(T=s(T,A),T.return=S,T)}function m(S,T,A){if(typeof T=="string"&&T!==""||typeof T=="number")return T=Yc(""+T,S.mode,A),T.return=S,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case ba:return A=fl(T.type,T.key,T.props,null,S.mode,A),A.ref=Yi(S,null,T),A.return=S,A;case Ds:return T=Xc(T,S.mode,A),T.return=S,T;case er:var b=T._init;return m(S,b(T._payload),A)}if(no(T)||qi(T))return T=rs(T,S.mode,A,null),T.return=S,T;$a(S,T)}return null}function g(S,T,A,b){var x=T!==null?T.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return x!==null?null:l(S,T,""+A,b);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case ba:return A.key===x?u(S,T,A,b):null;case Ds:return A.key===x?c(S,T,A,b):null;case er:return x=A._init,g(S,T,x(A._payload),b)}if(no(A)||qi(A))return x!==null?null:f(S,T,A,b,null);$a(S,A)}return null}function w(S,T,A,b,x){if(typeof b=="string"&&b!==""||typeof b=="number")return S=S.get(A)||null,l(T,S,""+b,x);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ba:return S=S.get(b.key===null?A:b.key)||null,u(T,S,b,x);case Ds:return S=S.get(b.key===null?A:b.key)||null,c(T,S,b,x);case er:var O=b._init;return w(S,T,A,O(b._payload),x)}if(no(b)||qi(b))return S=S.get(A)||null,f(T,S,b,x,null);$a(T,b)}return null}function I(S,T,A,b){for(var x=null,O=null,y=T,_=T=0,E=null;y!==null&&_<A.length;_++){y.index>_?(E=y,y=null):E=y.sibling;var R=g(S,y,A[_],b);if(R===null){y===null&&(y=E);break}t&&y&&R.alternate===null&&e(S,y),T=i(R,T,_),O===null?x=R:O.sibling=R,O=R,y=E}if(_===A.length)return n(S,y),_e&&Kr(S,_),x;if(y===null){for(;_<A.length;_++)y=m(S,A[_],b),y!==null&&(T=i(y,T,_),O===null?x=y:O.sibling=y,O=y);return _e&&Kr(S,_),x}for(y=r(S,y);_<A.length;_++)E=w(y,S,_,A[_],b),E!==null&&(t&&E.alternate!==null&&y.delete(E.key===null?_:E.key),T=i(E,T,_),O===null?x=E:O.sibling=E,O=E);return t&&y.forEach(function(k){return e(S,k)}),_e&&Kr(S,_),x}function P(S,T,A,b){var x=qi(A);if(typeof x!="function")throw Error(F(150));if(A=x.call(A),A==null)throw Error(F(151));for(var O=x=null,y=T,_=T=0,E=null,R=A.next();y!==null&&!R.done;_++,R=A.next()){y.index>_?(E=y,y=null):E=y.sibling;var k=g(S,y,R.value,b);if(k===null){y===null&&(y=E);break}t&&y&&k.alternate===null&&e(S,y),T=i(k,T,_),O===null?x=k:O.sibling=k,O=k,y=E}if(R.done)return n(S,y),_e&&Kr(S,_),x;if(y===null){for(;!R.done;_++,R=A.next())R=m(S,R.value,b),R!==null&&(T=i(R,T,_),O===null?x=R:O.sibling=R,O=R);return _e&&Kr(S,_),x}for(y=r(S,y);!R.done;_++,R=A.next())R=w(y,S,_,R.value,b),R!==null&&(t&&R.alternate!==null&&y.delete(R.key===null?_:R.key),T=i(R,T,_),O===null?x=R:O.sibling=R,O=R);return t&&y.forEach(function(N){return e(S,N)}),_e&&Kr(S,_),x}function V(S,T,A,b){if(typeof A=="object"&&A!==null&&A.type===Vs&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case ba:e:{for(var x=A.key,O=T;O!==null;){if(O.key===x){if(x=A.type,x===Vs){if(O.tag===7){n(S,O.sibling),T=s(O,A.props.children),T.return=S,S=T;break e}}else if(O.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===er&&Sg(x)===O.type){n(S,O.sibling),T=s(O,A.props),T.ref=Yi(S,O,A),T.return=S,S=T;break e}n(S,O);break}else e(S,O);O=O.sibling}A.type===Vs?(T=rs(A.props.children,S.mode,b,A.key),T.return=S,S=T):(b=fl(A.type,A.key,A.props,null,S.mode,b),b.ref=Yi(S,T,A),b.return=S,S=b)}return o(S);case Ds:e:{for(O=A.key;T!==null;){if(T.key===O)if(T.tag===4&&T.stateNode.containerInfo===A.containerInfo&&T.stateNode.implementation===A.implementation){n(S,T.sibling),T=s(T,A.children||[]),T.return=S,S=T;break e}else{n(S,T);break}else e(S,T);T=T.sibling}T=Xc(A,S.mode,b),T.return=S,S=T}return o(S);case er:return O=A._init,V(S,T,O(A._payload),b)}if(no(A))return I(S,T,A,b);if(qi(A))return P(S,T,A,b);$a(S,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,T!==null&&T.tag===6?(n(S,T.sibling),T=s(T,A),T.return=S,S=T):(n(S,T),T=Yc(A,S.mode,b),T.return=S,S=T),o(S)):n(S,T)}return V}var oi=Qv(!0),Yv=Qv(!1),Ll=Vr(null),Ml=null,Bs=null,df=null;function ff(){df=Bs=Ml=null}function pf(t){var e=Ll.current;ge(Ll),t._currentValue=e}function qh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Qs(t,e){Ml=t,df=Bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(vt=!0),t.firstContext=null)}function Ut(t){var e=t._currentValue;if(df!==t)if(t={context:t,memoizedValue:e,next:null},Bs===null){if(Ml===null)throw Error(F(308));Bs=t,Ml.dependencies={lanes:0,firstContext:t}}else Bs=Bs.next=t;return e}var Jr=null;function mf(t){Jr===null?Jr=[t]:Jr.push(t)}function Xv(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,mf(e)):(n.next=s.next,s.next=n),e.interleaved=n,Mn(t,r)}function Mn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var tr=!1;function gf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Dn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function gr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Mn(t,n)}return s=r.interleaved,s===null?(e.next=e,mf(r)):(e.next=s.next,s.next=e),r.interleaved=e,Mn(t,n)}function al(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ef(t,n)}}function Ag(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Fl(t,e,n,r){var s=t.updateQueue;tr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(i!==null){var m=s.baseState;o=0,f=c=u=null,l=i;do{var g=l.lane,w=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var I=t,P=l;switch(g=e,w=n,P.tag){case 1:if(I=P.payload,typeof I=="function"){m=I.call(w,m,g);break e}m=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=P.payload,g=typeof I=="function"?I.call(w,m,g):I,g==null)break e;m=Ee({},m,g);break e;case 2:tr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[l]:g.push(l))}else w={eventTime:w,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=w,u=m):f=f.next=w,o|=g;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;g=l,l=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(f===null&&(u=m),s.baseState=u,s.firstBaseUpdate=c,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);cs|=o,t.lanes=o,t.memoizedState=m}}function kg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(F(191,s));s.call(r)}}}var oa={},hn=Vr(oa),Mo=Vr(oa),Fo=Vr(oa);function Zr(t){if(t===oa)throw Error(F(174));return t}function yf(t,e){switch(de(Fo,e),de(Mo,t),de(hn,oa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ah(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ah(e,t)}ge(hn),de(hn,e)}function ai(){ge(hn),ge(Mo),ge(Fo)}function Zv(t){Zr(Fo.current);var e=Zr(hn.current),n=Ah(e,t.type);e!==n&&(de(Mo,t),de(hn,n))}function _f(t){Mo.current===t&&(ge(hn),ge(Mo))}var ve=Vr(0);function Ul(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Hc=[];function vf(){for(var t=0;t<Hc.length;t++)Hc[t]._workInProgressVersionPrimary=null;Hc.length=0}var ll=Hn.ReactCurrentDispatcher,qc=Hn.ReactCurrentBatchConfig,us=0,we=null,Le=null,$e=null,zl=!1,mo=!1,Uo=0,yS=0;function Ze(){throw Error(F(321))}function wf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Zt(t[n],e[n]))return!1;return!0}function Ef(t,e,n,r,s,i){if(us=i,we=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ll.current=t===null||t.memoizedState===null?ES:TS,t=n(r,s),mo){i=0;do{if(mo=!1,Uo=0,25<=i)throw Error(F(301));i+=1,$e=Le=null,e.updateQueue=null,ll.current=IS,t=n(r,s)}while(mo)}if(ll.current=Bl,e=Le!==null&&Le.next!==null,us=0,$e=Le=we=null,zl=!1,e)throw Error(F(300));return t}function Tf(){var t=Uo!==0;return Uo=0,t}function on(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?we.memoizedState=$e=t:$e=$e.next=t,$e}function zt(){if(Le===null){var t=we.alternate;t=t!==null?t.memoizedState:null}else t=Le.next;var e=$e===null?we.memoizedState:$e.next;if(e!==null)$e=e,Le=t;else{if(t===null)throw Error(F(310));Le=t,t={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},$e===null?we.memoizedState=$e=t:$e=$e.next=t}return $e}function zo(t,e){return typeof e=="function"?e(t):e}function Wc(t){var e=zt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Le,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,c=i;do{var f=c.lane;if((us&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var m={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,we.lanes|=f,cs|=f}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=l,Zt(r,e.memoizedState)||(vt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,we.lanes|=i,cs|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Gc(t){var e=zt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);Zt(i,e.memoizedState)||(vt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function ew(){}function tw(t,e){var n=we,r=zt(),s=e(),i=!Zt(r.memoizedState,s);if(i&&(r.memoizedState=s,vt=!0),r=r.queue,If(sw.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||$e!==null&&$e.memoizedState.tag&1){if(n.flags|=2048,Bo(9,rw.bind(null,n,r,s,e),void 0,null),He===null)throw Error(F(349));us&30||nw(n,e,s)}return s}function nw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function rw(t,e,n,r){e.value=n,e.getSnapshot=r,iw(e)&&ow(t)}function sw(t,e,n){return n(function(){iw(e)&&ow(t)})}function iw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Zt(t,n)}catch{return!0}}function ow(t){var e=Mn(t,1);e!==null&&Yt(e,t,1,-1)}function Cg(t){var e=on();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:t},e.queue=t,t=t.dispatch=wS.bind(null,we,t),[e.memoizedState,t]}function Bo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function aw(){return zt().memoizedState}function ul(t,e,n,r){var s=on();we.flags|=t,s.memoizedState=Bo(1|e,n,void 0,r===void 0?null:r)}function vu(t,e,n,r){var s=zt();r=r===void 0?null:r;var i=void 0;if(Le!==null){var o=Le.memoizedState;if(i=o.destroy,r!==null&&wf(r,o.deps)){s.memoizedState=Bo(e,n,i,r);return}}we.flags|=t,s.memoizedState=Bo(1|e,n,i,r)}function Rg(t,e){return ul(8390656,8,t,e)}function If(t,e){return vu(2048,8,t,e)}function lw(t,e){return vu(4,2,t,e)}function uw(t,e){return vu(4,4,t,e)}function cw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function hw(t,e,n){return n=n!=null?n.concat([t]):null,vu(4,4,cw.bind(null,e,t),n)}function Sf(){}function dw(t,e){var n=zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&wf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function fw(t,e){var n=zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&wf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function pw(t,e,n){return us&21?(Zt(n,e)||(n=vv(),we.lanes|=n,cs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,vt=!0),t.memoizedState=n)}function _S(t,e){var n=le;le=n!==0&&4>n?n:4,t(!0);var r=qc.transition;qc.transition={};try{t(!1),e()}finally{le=n,qc.transition=r}}function mw(){return zt().memoizedState}function vS(t,e,n){var r=_r(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},gw(t))yw(e,n);else if(n=Xv(t,e,n,r),n!==null){var s=ft();Yt(n,t,r,s),_w(n,e,r)}}function wS(t,e,n){var r=_r(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(gw(t))yw(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,Zt(l,o)){var u=e.interleaved;u===null?(s.next=s,mf(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=Xv(t,e,s,r),n!==null&&(s=ft(),Yt(n,t,r,s),_w(n,e,r))}}function gw(t){var e=t.alternate;return t===we||e!==null&&e===we}function yw(t,e){mo=zl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function _w(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ef(t,n)}}var Bl={readContext:Ut,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useInsertionEffect:Ze,useLayoutEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useMutableSource:Ze,useSyncExternalStore:Ze,useId:Ze,unstable_isNewReconciler:!1},ES={readContext:Ut,useCallback:function(t,e){return on().memoizedState=[t,e===void 0?null:e],t},useContext:Ut,useEffect:Rg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ul(4194308,4,cw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ul(4194308,4,t,e)},useInsertionEffect:function(t,e){return ul(4,2,t,e)},useMemo:function(t,e){var n=on();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=on();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=vS.bind(null,we,t),[r.memoizedState,t]},useRef:function(t){var e=on();return t={current:t},e.memoizedState=t},useState:Cg,useDebugValue:Sf,useDeferredValue:function(t){return on().memoizedState=t},useTransition:function(){var t=Cg(!1),e=t[0];return t=_S.bind(null,t[1]),on().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=we,s=on();if(_e){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),He===null)throw Error(F(349));us&30||nw(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Rg(sw.bind(null,r,i,t),[t]),r.flags|=2048,Bo(9,rw.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=on(),e=He.identifierPrefix;if(_e){var n=Pn,r=xn;n=(r&~(1<<32-Qt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Uo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=yS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},TS={readContext:Ut,useCallback:dw,useContext:Ut,useEffect:If,useImperativeHandle:hw,useInsertionEffect:lw,useLayoutEffect:uw,useMemo:fw,useReducer:Wc,useRef:aw,useState:function(){return Wc(zo)},useDebugValue:Sf,useDeferredValue:function(t){var e=zt();return pw(e,Le.memoizedState,t)},useTransition:function(){var t=Wc(zo)[0],e=zt().memoizedState;return[t,e]},useMutableSource:ew,useSyncExternalStore:tw,useId:mw,unstable_isNewReconciler:!1},IS={readContext:Ut,useCallback:dw,useContext:Ut,useEffect:If,useImperativeHandle:hw,useInsertionEffect:lw,useLayoutEffect:uw,useMemo:fw,useReducer:Gc,useRef:aw,useState:function(){return Gc(zo)},useDebugValue:Sf,useDeferredValue:function(t){var e=zt();return Le===null?e.memoizedState=t:pw(e,Le.memoizedState,t)},useTransition:function(){var t=Gc(zo)[0],e=zt().memoizedState;return[t,e]},useMutableSource:ew,useSyncExternalStore:tw,useId:mw,unstable_isNewReconciler:!1};function qt(t,e){if(t&&t.defaultProps){e=Ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Wh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var wu={isMounted:function(t){return(t=t._reactInternals)?vs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ft(),s=_r(t),i=Dn(r,s);i.payload=e,n!=null&&(i.callback=n),e=gr(t,i,s),e!==null&&(Yt(e,t,s,r),al(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ft(),s=_r(t),i=Dn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=gr(t,i,s),e!==null&&(Yt(e,t,s,r),al(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ft(),r=_r(t),s=Dn(n,r);s.tag=2,e!=null&&(s.callback=e),e=gr(t,s,r),e!==null&&(Yt(e,t,r,n),al(e,t,r))}};function xg(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Vo(n,r)||!Vo(s,i):!0}function vw(t,e,n){var r=!1,s=Ar,i=e.contextType;return typeof i=="object"&&i!==null?i=Ut(i):(s=Et(e)?as:ot.current,r=e.contextTypes,i=(r=r!=null)?si(t,s):Ar),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=wu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Pg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&wu.enqueueReplaceState(e,e.state,null)}function Gh(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},gf(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Ut(i):(i=Et(e)?as:ot.current,s.context=si(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Wh(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&wu.enqueueReplaceState(s,s.state,null),Fl(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function li(t,e){try{var n="",r=e;do n+=XT(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Kc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Kh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var SS=typeof WeakMap=="function"?WeakMap:Map;function ww(t,e,n){n=Dn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Hl||(Hl=!0,sd=r),Kh(t,e)},n}function Ew(t,e,n){n=Dn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Kh(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Kh(t,e),typeof r!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ng(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new SS;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=MS.bind(null,t,e,n),e.then(t,t))}function bg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Dg(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Dn(-1,1),e.tag=2,gr(n,e,1))),n.lanes|=1),t)}var AS=Hn.ReactCurrentOwner,vt=!1;function ht(t,e,n,r){e.child=t===null?Yv(e,null,n,r):oi(e,t.child,n,r)}function Vg(t,e,n,r,s){n=n.render;var i=e.ref;return Qs(e,s),r=Ef(t,e,n,r,i,s),n=Tf(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Fn(t,e,s)):(_e&&n&&uf(e),e.flags|=1,ht(t,e,r,s),e.child)}function jg(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!bf(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,Tw(t,e,i,r,s)):(t=fl(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Vo,n(o,r)&&t.ref===e.ref)return Fn(t,e,s)}return e.flags|=1,t=vr(i,r),t.ref=e.ref,t.return=e,e.child=t}function Tw(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Vo(i,r)&&t.ref===e.ref)if(vt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(vt=!0);else return e.lanes=t.lanes,Fn(t,e,s)}return Qh(t,e,n,r,s)}function Iw(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(Hs,At),At|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,de(Hs,At),At|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,de(Hs,At),At|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,de(Hs,At),At|=r;return ht(t,e,s,n),e.child}function Sw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Qh(t,e,n,r,s){var i=Et(n)?as:ot.current;return i=si(e,i),Qs(e,s),n=Ef(t,e,n,r,i,s),r=Tf(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Fn(t,e,s)):(_e&&r&&uf(e),e.flags|=1,ht(t,e,n,s),e.child)}function Og(t,e,n,r,s){if(Et(n)){var i=!0;Vl(e)}else i=!1;if(Qs(e,s),e.stateNode===null)cl(t,e),vw(e,n,r),Gh(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ut(c):(c=Et(n)?as:ot.current,c=si(e,c));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Pg(e,o,r,c),tr=!1;var g=e.memoizedState;o.state=g,Fl(e,r,o,s),u=e.memoizedState,l!==r||g!==u||wt.current||tr?(typeof f=="function"&&(Wh(e,n,f,r),u=e.memoizedState),(l=tr||xg(e,n,l,r,g,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Jv(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:qt(e.type,l),o.props=c,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ut(u):(u=Et(n)?as:ot.current,u=si(e,u));var w=n.getDerivedStateFromProps;(f=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&Pg(e,o,r,u),tr=!1,g=e.memoizedState,o.state=g,Fl(e,r,o,s);var I=e.memoizedState;l!==m||g!==I||wt.current||tr?(typeof w=="function"&&(Wh(e,n,w,r),I=e.memoizedState),(c=tr||xg(e,n,c,r,g,I,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,I,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,I,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=I),o.props=r,o.state=I,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Yh(t,e,n,r,i,s)}function Yh(t,e,n,r,s,i){Sw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Eg(e,n,!1),Fn(t,e,i);r=e.stateNode,AS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=oi(e,t.child,null,i),e.child=oi(e,null,l,i)):ht(t,e,l,i),e.memoizedState=r.state,s&&Eg(e,n,!0),e.child}function Aw(t){var e=t.stateNode;e.pendingContext?wg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&wg(t,e.context,!1),yf(t,e.containerInfo)}function Lg(t,e,n,r,s){return ii(),hf(s),e.flags|=256,ht(t,e,n,r),e.child}var Xh={dehydrated:null,treeContext:null,retryLane:0};function Jh(t){return{baseLanes:t,cachePool:null,transitions:null}}function kw(t,e,n){var r=e.pendingProps,s=ve.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),de(ve,s&1),t===null)return Hh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Iu(o,r,0,null),t=rs(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Jh(n),e.memoizedState=Xh,t):Af(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return kS(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=vr(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=vr(l,i):(i=rs(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Jh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Xh,r}return i=t.child,t=i.sibling,r=vr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Af(t,e){return e=Iu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ha(t,e,n,r){return r!==null&&hf(r),oi(e,t.child,null,n),t=Af(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function kS(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=Kc(Error(F(422))),Ha(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Iu({mode:"visible",children:r.children},s,0,null),i=rs(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&oi(e,t.child,null,o),e.child.memoizedState=Jh(o),e.memoizedState=Xh,i);if(!(e.mode&1))return Ha(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(F(419)),r=Kc(i,r,void 0),Ha(t,e,o,r)}if(l=(o&t.childLanes)!==0,vt||l){if(r=He,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Mn(t,s),Yt(r,t,s,-1))}return Nf(),r=Kc(Error(F(421))),Ha(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=FS.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,kt=mr(s.nextSibling),xt=e,_e=!0,Gt=null,t!==null&&(Vt[jt++]=xn,Vt[jt++]=Pn,Vt[jt++]=ls,xn=t.id,Pn=t.overflow,ls=e),e=Af(e,r.children),e.flags|=4096,e)}function Mg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),qh(t.return,e,n)}function Qc(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function Cw(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(ht(t,e,r.children,n),r=ve.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Mg(t,n,e);else if(t.tag===19)Mg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(de(ve,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Ul(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Qc(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Ul(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Qc(e,!0,n,null,i);break;case"together":Qc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function cl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Fn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),cs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=vr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=vr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function CS(t,e,n){switch(e.tag){case 3:Aw(e),ii();break;case 5:Zv(e);break;case 1:Et(e.type)&&Vl(e);break;case 4:yf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;de(Ll,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(de(ve,ve.current&1),e.flags|=128,null):n&e.child.childLanes?kw(t,e,n):(de(ve,ve.current&1),t=Fn(t,e,n),t!==null?t.sibling:null);de(ve,ve.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Cw(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),de(ve,ve.current),r)break;return null;case 22:case 23:return e.lanes=0,Iw(t,e,n)}return Fn(t,e,n)}var Rw,Zh,xw,Pw;Rw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Zh=function(){};xw=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Zr(hn.current);var i=null;switch(n){case"input":s=Eh(t,s),r=Eh(t,r),i=[];break;case"select":s=Ee({},s,{value:void 0}),r=Ee({},r,{value:void 0}),i=[];break;case"textarea":s=Sh(t,s),r=Sh(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=bl)}kh(n,r);var o;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var l=s[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Co.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(l=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Co.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&pe("scroll",t),i||l===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};Pw=function(t,e,n,r){n!==r&&(e.flags|=4)};function Xi(t,e){if(!_e)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function et(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function RS(t,e,n){var r=e.pendingProps;switch(cf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(e),null;case 1:return Et(e.type)&&Dl(),et(e),null;case 3:return r=e.stateNode,ai(),ge(wt),ge(ot),vf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ba(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gt!==null&&(ad(Gt),Gt=null))),Zh(t,e),et(e),null;case 5:_f(e);var s=Zr(Fo.current);if(n=e.type,t!==null&&e.stateNode!=null)xw(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return et(e),null}if(t=Zr(hn.current),Ba(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[ln]=e,r[Lo]=i,t=(e.mode&1)!==0,n){case"dialog":pe("cancel",r),pe("close",r);break;case"iframe":case"object":case"embed":pe("load",r);break;case"video":case"audio":for(s=0;s<so.length;s++)pe(so[s],r);break;case"source":pe("error",r);break;case"img":case"image":case"link":pe("error",r),pe("load",r);break;case"details":pe("toggle",r);break;case"input":Gm(r,i),pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},pe("invalid",r);break;case"textarea":Qm(r,i),pe("invalid",r)}kh(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&za(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&za(r.textContent,l,t),s=["children",""+l]):Co.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&pe("scroll",r)}switch(n){case"input":Da(r),Km(r,i,!0);break;case"textarea":Da(r),Ym(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=bl)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=sv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[ln]=e,t[Lo]=r,Rw(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ch(n,r),n){case"dialog":pe("cancel",t),pe("close",t),s=r;break;case"iframe":case"object":case"embed":pe("load",t),s=r;break;case"video":case"audio":for(s=0;s<so.length;s++)pe(so[s],t);s=r;break;case"source":pe("error",t),s=r;break;case"img":case"image":case"link":pe("error",t),pe("load",t),s=r;break;case"details":pe("toggle",t),s=r;break;case"input":Gm(t,r),s=Eh(t,r),pe("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Ee({},r,{value:void 0}),pe("invalid",t);break;case"textarea":Qm(t,r),s=Sh(t,r),pe("invalid",t);break;default:s=r}kh(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?av(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&iv(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ro(t,u):typeof u=="number"&&Ro(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Co.hasOwnProperty(i)?u!=null&&i==="onScroll"&&pe("scroll",t):u!=null&&Kd(t,i,u,o))}switch(n){case"input":Da(t),Km(t,r,!1);break;case"textarea":Da(t),Ym(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Sr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?qs(t,!!r.multiple,i,!1):r.defaultValue!=null&&qs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=bl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return et(e),null;case 6:if(t&&e.stateNode!=null)Pw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=Zr(Fo.current),Zr(hn.current),Ba(e)){if(r=e.stateNode,n=e.memoizedProps,r[ln]=e,(i=r.nodeValue!==n)&&(t=xt,t!==null))switch(t.tag){case 3:za(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&za(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ln]=e,e.stateNode=r}return et(e),null;case 13:if(ge(ve),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_e&&kt!==null&&e.mode&1&&!(e.flags&128))Kv(),ii(),e.flags|=98560,i=!1;else if(i=Ba(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(F(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(F(317));i[ln]=e}else ii(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;et(e),i=!1}else Gt!==null&&(ad(Gt),Gt=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ve.current&1?Me===0&&(Me=3):Nf())),e.updateQueue!==null&&(e.flags|=4),et(e),null);case 4:return ai(),Zh(t,e),t===null&&jo(e.stateNode.containerInfo),et(e),null;case 10:return pf(e.type._context),et(e),null;case 17:return Et(e.type)&&Dl(),et(e),null;case 19:if(ge(ve),i=e.memoizedState,i===null)return et(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Xi(i,!1);else{if(Me!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ul(t),o!==null){for(e.flags|=128,Xi(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return de(ve,ve.current&1|2),e.child}t=t.sibling}i.tail!==null&&Pe()>ui&&(e.flags|=128,r=!0,Xi(i,!1),e.lanes=4194304)}else{if(!r)if(t=Ul(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Xi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!_e)return et(e),null}else 2*Pe()-i.renderingStartTime>ui&&n!==1073741824&&(e.flags|=128,r=!0,Xi(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Pe(),e.sibling=null,n=ve.current,de(ve,r?n&1|2:n&1),e):(et(e),null);case 22:case 23:return Pf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?At&1073741824&&(et(e),e.subtreeFlags&6&&(e.flags|=8192)):et(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function xS(t,e){switch(cf(e),e.tag){case 1:return Et(e.type)&&Dl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ai(),ge(wt),ge(ot),vf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return _f(e),null;case 13:if(ge(ve),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));ii()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ge(ve),null;case 4:return ai(),null;case 10:return pf(e.type._context),null;case 22:case 23:return Pf(),null;case 24:return null;default:return null}}var qa=!1,rt=!1,PS=typeof WeakSet=="function"?WeakSet:Set,q=null;function $s(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ae(t,e,r)}else n.current=null}function ed(t,e,n){try{n()}catch(r){Ae(t,e,r)}}var Fg=!1;function NS(t,e){if(Lh=xl,t=jv(),lf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,m=t,g=null;t:for(;;){for(var w;m!==n||s!==0&&m.nodeType!==3||(l=o+s),m!==i||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(w=m.firstChild)!==null;)g=m,m=w;for(;;){if(m===t)break t;if(g===n&&++c===s&&(l=o),g===i&&++f===r&&(u=o),(w=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=w}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Mh={focusedElem:t,selectionRange:n},xl=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var I=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var P=I.memoizedProps,V=I.memoizedState,S=e.stateNode,T=S.getSnapshotBeforeUpdate(e.elementType===e.type?P:qt(e.type,P),V);S.__reactInternalSnapshotBeforeUpdate=T}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(b){Ae(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return I=Fg,Fg=!1,I}function go(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&ed(e,n,i)}s=s.next}while(s!==r)}}function Eu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function td(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Nw(t){var e=t.alternate;e!==null&&(t.alternate=null,Nw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ln],delete e[Lo],delete e[zh],delete e[fS],delete e[pS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function bw(t){return t.tag===5||t.tag===3||t.tag===4}function Ug(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||bw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function nd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=bl));else if(r!==4&&(t=t.child,t!==null))for(nd(t,e,n),t=t.sibling;t!==null;)nd(t,e,n),t=t.sibling}function rd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(rd(t,e,n),t=t.sibling;t!==null;)rd(t,e,n),t=t.sibling}var qe=null,Wt=!1;function Jn(t,e,n){for(n=n.child;n!==null;)Dw(t,e,n),n=n.sibling}function Dw(t,e,n){if(cn&&typeof cn.onCommitFiberUnmount=="function")try{cn.onCommitFiberUnmount(fu,n)}catch{}switch(n.tag){case 5:rt||$s(n,e);case 6:var r=qe,s=Wt;qe=null,Jn(t,e,n),qe=r,Wt=s,qe!==null&&(Wt?(t=qe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):qe.removeChild(n.stateNode));break;case 18:qe!==null&&(Wt?(t=qe,n=n.stateNode,t.nodeType===8?Bc(t.parentNode,n):t.nodeType===1&&Bc(t,n),bo(t)):Bc(qe,n.stateNode));break;case 4:r=qe,s=Wt,qe=n.stateNode.containerInfo,Wt=!0,Jn(t,e,n),qe=r,Wt=s;break;case 0:case 11:case 14:case 15:if(!rt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&ed(n,e,o),s=s.next}while(s!==r)}Jn(t,e,n);break;case 1:if(!rt&&($s(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ae(n,e,l)}Jn(t,e,n);break;case 21:Jn(t,e,n);break;case 22:n.mode&1?(rt=(r=rt)||n.memoizedState!==null,Jn(t,e,n),rt=r):Jn(t,e,n);break;default:Jn(t,e,n)}}function zg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new PS),e.forEach(function(r){var s=US.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Ht(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:qe=l.stateNode,Wt=!1;break e;case 3:qe=l.stateNode.containerInfo,Wt=!0;break e;case 4:qe=l.stateNode.containerInfo,Wt=!0;break e}l=l.return}if(qe===null)throw Error(F(160));Dw(i,o,s),qe=null,Wt=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(c){Ae(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Vw(e,t),e=e.sibling}function Vw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ht(e,t),sn(t),r&4){try{go(3,t,t.return),Eu(3,t)}catch(P){Ae(t,t.return,P)}try{go(5,t,t.return)}catch(P){Ae(t,t.return,P)}}break;case 1:Ht(e,t),sn(t),r&512&&n!==null&&$s(n,n.return);break;case 5:if(Ht(e,t),sn(t),r&512&&n!==null&&$s(n,n.return),t.flags&32){var s=t.stateNode;try{Ro(s,"")}catch(P){Ae(t,t.return,P)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&nv(s,i),Ch(l,o);var c=Ch(l,i);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?av(s,m):f==="dangerouslySetInnerHTML"?iv(s,m):f==="children"?Ro(s,m):Kd(s,f,m,c)}switch(l){case"input":Th(s,i);break;case"textarea":rv(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?qs(s,!!i.multiple,w,!1):g!==!!i.multiple&&(i.defaultValue!=null?qs(s,!!i.multiple,i.defaultValue,!0):qs(s,!!i.multiple,i.multiple?[]:"",!1))}s[Lo]=i}catch(P){Ae(t,t.return,P)}}break;case 6:if(Ht(e,t),sn(t),r&4){if(t.stateNode===null)throw Error(F(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(P){Ae(t,t.return,P)}}break;case 3:if(Ht(e,t),sn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{bo(e.containerInfo)}catch(P){Ae(t,t.return,P)}break;case 4:Ht(e,t),sn(t);break;case 13:Ht(e,t),sn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Rf=Pe())),r&4&&zg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(rt=(c=rt)||f,Ht(e,t),rt=c):Ht(e,t),sn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(q=t,f=t.child;f!==null;){for(m=q=f;q!==null;){switch(g=q,w=g.child,g.tag){case 0:case 11:case 14:case 15:go(4,g,g.return);break;case 1:$s(g,g.return);var I=g.stateNode;if(typeof I.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,I.props=e.memoizedProps,I.state=e.memoizedState,I.componentWillUnmount()}catch(P){Ae(r,n,P)}}break;case 5:$s(g,g.return);break;case 22:if(g.memoizedState!==null){$g(m);continue}}w!==null?(w.return=g,q=w):$g(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{s=m.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=ov("display",o))}catch(P){Ae(t,t.return,P)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(P){Ae(t,t.return,P)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ht(e,t),sn(t),r&4&&zg(t);break;case 21:break;default:Ht(e,t),sn(t)}}function sn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(bw(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Ro(s,""),r.flags&=-33);var i=Ug(t);rd(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Ug(t);nd(t,l,o);break;default:throw Error(F(161))}}catch(u){Ae(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function bS(t,e,n){q=t,jw(t)}function jw(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var s=q,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||qa;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||rt;l=qa;var c=rt;if(qa=o,(rt=u)&&!c)for(q=s;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?Hg(s):u!==null?(u.return=o,q=u):Hg(s);for(;i!==null;)q=i,jw(i),i=i.sibling;q=s,qa=l,rt=c}Bg(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,q=i):Bg(t)}}function Bg(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:rt||Eu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!rt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:qt(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&kg(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}kg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&bo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}rt||e.flags&512&&td(e)}catch(g){Ae(e,e.return,g)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function $g(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function Hg(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Eu(4,e)}catch(u){Ae(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Ae(e,s,u)}}var i=e.return;try{td(e)}catch(u){Ae(e,i,u)}break;case 5:var o=e.return;try{td(e)}catch(u){Ae(e,o,u)}}}catch(u){Ae(e,e.return,u)}if(e===t){q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,q=l;break}q=e.return}}var DS=Math.ceil,$l=Hn.ReactCurrentDispatcher,kf=Hn.ReactCurrentOwner,Ft=Hn.ReactCurrentBatchConfig,oe=0,He=null,be=null,Ke=0,At=0,Hs=Vr(0),Me=0,$o=null,cs=0,Tu=0,Cf=0,yo=null,yt=null,Rf=0,ui=1/0,kn=null,Hl=!1,sd=null,yr=null,Wa=!1,ur=null,ql=0,_o=0,id=null,hl=-1,dl=0;function ft(){return oe&6?Pe():hl!==-1?hl:hl=Pe()}function _r(t){return t.mode&1?oe&2&&Ke!==0?Ke&-Ke:gS.transition!==null?(dl===0&&(dl=vv()),dl):(t=le,t!==0||(t=window.event,t=t===void 0?16:kv(t.type)),t):1}function Yt(t,e,n,r){if(50<_o)throw _o=0,id=null,Error(F(185));ra(t,n,r),(!(oe&2)||t!==He)&&(t===He&&(!(oe&2)&&(Tu|=n),Me===4&&rr(t,Ke)),Tt(t,r),n===1&&oe===0&&!(e.mode&1)&&(ui=Pe()+500,_u&&jr()))}function Tt(t,e){var n=t.callbackNode;gI(t,e);var r=Rl(t,t===He?Ke:0);if(r===0)n!==null&&Zm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Zm(n),e===1)t.tag===0?mS(qg.bind(null,t)):qv(qg.bind(null,t)),hS(function(){!(oe&6)&&jr()}),n=null;else{switch(wv(r)){case 1:n=Zd;break;case 4:n=yv;break;case 16:n=Cl;break;case 536870912:n=_v;break;default:n=Cl}n=$w(n,Ow.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ow(t,e){if(hl=-1,dl=0,oe&6)throw Error(F(327));var n=t.callbackNode;if(Ys()&&t.callbackNode!==n)return null;var r=Rl(t,t===He?Ke:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Wl(t,r);else{e=r;var s=oe;oe|=2;var i=Mw();(He!==t||Ke!==e)&&(kn=null,ui=Pe()+500,ns(t,e));do try{OS();break}catch(l){Lw(t,l)}while(!0);ff(),$l.current=i,oe=s,be!==null?e=0:(He=null,Ke=0,e=Me)}if(e!==0){if(e===2&&(s=bh(t),s!==0&&(r=s,e=od(t,s))),e===1)throw n=$o,ns(t,0),rr(t,r),Tt(t,Pe()),n;if(e===6)rr(t,r);else{if(s=t.current.alternate,!(r&30)&&!VS(s)&&(e=Wl(t,r),e===2&&(i=bh(t),i!==0&&(r=i,e=od(t,i))),e===1))throw n=$o,ns(t,0),rr(t,r),Tt(t,Pe()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Qr(t,yt,kn);break;case 3:if(rr(t,r),(r&130023424)===r&&(e=Rf+500-Pe(),10<e)){if(Rl(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){ft(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Uh(Qr.bind(null,t,yt,kn),e);break}Qr(t,yt,kn);break;case 4:if(rr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-Qt(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*DS(r/1960))-r,10<r){t.timeoutHandle=Uh(Qr.bind(null,t,yt,kn),r);break}Qr(t,yt,kn);break;case 5:Qr(t,yt,kn);break;default:throw Error(F(329))}}}return Tt(t,Pe()),t.callbackNode===n?Ow.bind(null,t):null}function od(t,e){var n=yo;return t.current.memoizedState.isDehydrated&&(ns(t,e).flags|=256),t=Wl(t,e),t!==2&&(e=yt,yt=n,e!==null&&ad(e)),t}function ad(t){yt===null?yt=t:yt.push.apply(yt,t)}function VS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Zt(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function rr(t,e){for(e&=~Cf,e&=~Tu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Qt(e),r=1<<n;t[n]=-1,e&=~r}}function qg(t){if(oe&6)throw Error(F(327));Ys();var e=Rl(t,0);if(!(e&1))return Tt(t,Pe()),null;var n=Wl(t,e);if(t.tag!==0&&n===2){var r=bh(t);r!==0&&(e=r,n=od(t,r))}if(n===1)throw n=$o,ns(t,0),rr(t,e),Tt(t,Pe()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Qr(t,yt,kn),Tt(t,Pe()),null}function xf(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(ui=Pe()+500,_u&&jr())}}function hs(t){ur!==null&&ur.tag===0&&!(oe&6)&&Ys();var e=oe;oe|=1;var n=Ft.transition,r=le;try{if(Ft.transition=null,le=1,t)return t()}finally{le=r,Ft.transition=n,oe=e,!(oe&6)&&jr()}}function Pf(){At=Hs.current,ge(Hs)}function ns(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,cS(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch(cf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Dl();break;case 3:ai(),ge(wt),ge(ot),vf();break;case 5:_f(r);break;case 4:ai();break;case 13:ge(ve);break;case 19:ge(ve);break;case 10:pf(r.type._context);break;case 22:case 23:Pf()}n=n.return}if(He=t,be=t=vr(t.current,null),Ke=At=e,Me=0,$o=null,Cf=Tu=cs=0,yt=yo=null,Jr!==null){for(e=0;e<Jr.length;e++)if(n=Jr[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Jr=null}return t}function Lw(t,e){do{var n=be;try{if(ff(),ll.current=Bl,zl){for(var r=we.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}zl=!1}if(us=0,$e=Le=we=null,mo=!1,Uo=0,kf.current=null,n===null||n.return===null){Me=1,$o=e,be=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=Ke,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var w=bg(o);if(w!==null){w.flags&=-257,Dg(w,o,l,i,e),w.mode&1&&Ng(i,c,e),e=w,u=c;var I=e.updateQueue;if(I===null){var P=new Set;P.add(u),e.updateQueue=P}else I.add(u);break e}else{if(!(e&1)){Ng(i,c,e),Nf();break e}u=Error(F(426))}}else if(_e&&l.mode&1){var V=bg(o);if(V!==null){!(V.flags&65536)&&(V.flags|=256),Dg(V,o,l,i,e),hf(li(u,l));break e}}i=u=li(u,l),Me!==4&&(Me=2),yo===null?yo=[i]:yo.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var S=ww(i,u,e);Ag(i,S);break e;case 1:l=u;var T=i.type,A=i.stateNode;if(!(i.flags&128)&&(typeof T.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(yr===null||!yr.has(A)))){i.flags|=65536,e&=-e,i.lanes|=e;var b=Ew(i,l,e);Ag(i,b);break e}}i=i.return}while(i!==null)}Uw(n)}catch(x){e=x,be===n&&n!==null&&(be=n=n.return);continue}break}while(!0)}function Mw(){var t=$l.current;return $l.current=Bl,t===null?Bl:t}function Nf(){(Me===0||Me===3||Me===2)&&(Me=4),He===null||!(cs&268435455)&&!(Tu&268435455)||rr(He,Ke)}function Wl(t,e){var n=oe;oe|=2;var r=Mw();(He!==t||Ke!==e)&&(kn=null,ns(t,e));do try{jS();break}catch(s){Lw(t,s)}while(!0);if(ff(),oe=n,$l.current=r,be!==null)throw Error(F(261));return He=null,Ke=0,Me}function jS(){for(;be!==null;)Fw(be)}function OS(){for(;be!==null&&!aI();)Fw(be)}function Fw(t){var e=Bw(t.alternate,t,At);t.memoizedProps=t.pendingProps,e===null?Uw(t):be=e,kf.current=null}function Uw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=xS(n,e),n!==null){n.flags&=32767,be=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Me=6,be=null;return}}else if(n=RS(n,e,At),n!==null){be=n;return}if(e=e.sibling,e!==null){be=e;return}be=e=t}while(e!==null);Me===0&&(Me=5)}function Qr(t,e,n){var r=le,s=Ft.transition;try{Ft.transition=null,le=1,LS(t,e,n,r)}finally{Ft.transition=s,le=r}return null}function LS(t,e,n,r){do Ys();while(ur!==null);if(oe&6)throw Error(F(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(yI(t,i),t===He&&(be=He=null,Ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Wa||(Wa=!0,$w(Cl,function(){return Ys(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ft.transition,Ft.transition=null;var o=le;le=1;var l=oe;oe|=4,kf.current=null,NS(t,n),Vw(n,t),rS(Mh),xl=!!Lh,Mh=Lh=null,t.current=n,bS(n),lI(),oe=l,le=o,Ft.transition=i}else t.current=n;if(Wa&&(Wa=!1,ur=t,ql=s),i=t.pendingLanes,i===0&&(yr=null),hI(n.stateNode),Tt(t,Pe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Hl)throw Hl=!1,t=sd,sd=null,t;return ql&1&&t.tag!==0&&Ys(),i=t.pendingLanes,i&1?t===id?_o++:(_o=0,id=t):_o=0,jr(),null}function Ys(){if(ur!==null){var t=wv(ql),e=Ft.transition,n=le;try{if(Ft.transition=null,le=16>t?16:t,ur===null)var r=!1;else{if(t=ur,ur=null,ql=0,oe&6)throw Error(F(331));var s=oe;for(oe|=4,q=t.current;q!==null;){var i=q,o=i.child;if(q.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(q=c;q!==null;){var f=q;switch(f.tag){case 0:case 11:case 15:go(8,f,i)}var m=f.child;if(m!==null)m.return=f,q=m;else for(;q!==null;){f=q;var g=f.sibling,w=f.return;if(Nw(f),f===c){q=null;break}if(g!==null){g.return=w,q=g;break}q=w}}}var I=i.alternate;if(I!==null){var P=I.child;if(P!==null){I.child=null;do{var V=P.sibling;P.sibling=null,P=V}while(P!==null)}}q=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,q=o;else e:for(;q!==null;){if(i=q,i.flags&2048)switch(i.tag){case 0:case 11:case 15:go(9,i,i.return)}var S=i.sibling;if(S!==null){S.return=i.return,q=S;break e}q=i.return}}var T=t.current;for(q=T;q!==null;){o=q;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,q=A;else e:for(o=T;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Eu(9,l)}}catch(x){Ae(l,l.return,x)}if(l===o){q=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,q=b;break e}q=l.return}}if(oe=s,jr(),cn&&typeof cn.onPostCommitFiberRoot=="function")try{cn.onPostCommitFiberRoot(fu,t)}catch{}r=!0}return r}finally{le=n,Ft.transition=e}}return!1}function Wg(t,e,n){e=li(n,e),e=ww(t,e,1),t=gr(t,e,1),e=ft(),t!==null&&(ra(t,1,e),Tt(t,e))}function Ae(t,e,n){if(t.tag===3)Wg(t,t,n);else for(;e!==null;){if(e.tag===3){Wg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yr===null||!yr.has(r))){t=li(n,t),t=Ew(e,t,1),e=gr(e,t,1),t=ft(),e!==null&&(ra(e,1,t),Tt(e,t));break}}e=e.return}}function MS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ft(),t.pingedLanes|=t.suspendedLanes&n,He===t&&(Ke&n)===n&&(Me===4||Me===3&&(Ke&130023424)===Ke&&500>Pe()-Rf?ns(t,0):Cf|=n),Tt(t,e)}function zw(t,e){e===0&&(t.mode&1?(e=Oa,Oa<<=1,!(Oa&130023424)&&(Oa=4194304)):e=1);var n=ft();t=Mn(t,e),t!==null&&(ra(t,e,n),Tt(t,n))}function FS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),zw(t,n)}function US(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),zw(t,n)}var Bw;Bw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||wt.current)vt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return vt=!1,CS(t,e,n);vt=!!(t.flags&131072)}else vt=!1,_e&&e.flags&1048576&&Wv(e,Ol,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;cl(t,e),t=e.pendingProps;var s=si(e,ot.current);Qs(e,n),s=Ef(null,e,r,t,s,n);var i=Tf();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Et(r)?(i=!0,Vl(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,gf(e),s.updater=wu,e.stateNode=s,s._reactInternals=e,Gh(e,r,t,n),e=Yh(null,e,r,!0,i,n)):(e.tag=0,_e&&i&&uf(e),ht(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(cl(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=BS(r),t=qt(r,t),s){case 0:e=Qh(null,e,r,t,n);break e;case 1:e=Og(null,e,r,t,n);break e;case 11:e=Vg(null,e,r,t,n);break e;case 14:e=jg(null,e,r,qt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:qt(r,s),Qh(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:qt(r,s),Og(t,e,r,s,n);case 3:e:{if(Aw(e),t===null)throw Error(F(387));r=e.pendingProps,i=e.memoizedState,s=i.element,Jv(t,e),Fl(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=li(Error(F(423)),e),e=Lg(t,e,r,n,s);break e}else if(r!==s){s=li(Error(F(424)),e),e=Lg(t,e,r,n,s);break e}else for(kt=mr(e.stateNode.containerInfo.firstChild),xt=e,_e=!0,Gt=null,n=Yv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ii(),r===s){e=Fn(t,e,n);break e}ht(t,e,r,n)}e=e.child}return e;case 5:return Zv(e),t===null&&Hh(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Fh(r,s)?o=null:i!==null&&Fh(r,i)&&(e.flags|=32),Sw(t,e),ht(t,e,o,n),e.child;case 6:return t===null&&Hh(e),null;case 13:return kw(t,e,n);case 4:return yf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=oi(e,null,r,n):ht(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:qt(r,s),Vg(t,e,r,s,n);case 7:return ht(t,e,e.pendingProps,n),e.child;case 8:return ht(t,e,e.pendingProps.children,n),e.child;case 12:return ht(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,de(Ll,r._currentValue),r._currentValue=o,i!==null)if(Zt(i.value,o)){if(i.children===s.children&&!wt.current){e=Fn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Dn(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),qh(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),qh(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ht(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Qs(e,n),s=Ut(s),r=r(s),e.flags|=1,ht(t,e,r,n),e.child;case 14:return r=e.type,s=qt(r,e.pendingProps),s=qt(r.type,s),jg(t,e,r,s,n);case 15:return Tw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:qt(r,s),cl(t,e),e.tag=1,Et(r)?(t=!0,Vl(e)):t=!1,Qs(e,n),vw(e,r,s),Gh(e,r,s,n),Yh(null,e,r,!0,t,n);case 19:return Cw(t,e,n);case 22:return Iw(t,e,n)}throw Error(F(156,e.tag))};function $w(t,e){return gv(t,e)}function zS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(t,e,n,r){return new zS(t,e,n,r)}function bf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function BS(t){if(typeof t=="function")return bf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Yd)return 11;if(t===Xd)return 14}return 2}function vr(t,e){var n=t.alternate;return n===null?(n=Mt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function fl(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")bf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Vs:return rs(n.children,s,i,e);case Qd:o=8,s|=8;break;case yh:return t=Mt(12,n,e,s|2),t.elementType=yh,t.lanes=i,t;case _h:return t=Mt(13,n,e,s),t.elementType=_h,t.lanes=i,t;case vh:return t=Mt(19,n,e,s),t.elementType=vh,t.lanes=i,t;case Z_:return Iu(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case X_:o=10;break e;case J_:o=9;break e;case Yd:o=11;break e;case Xd:o=14;break e;case er:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Mt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function rs(t,e,n,r){return t=Mt(7,t,r,e),t.lanes=n,t}function Iu(t,e,n,r){return t=Mt(22,t,r,e),t.elementType=Z_,t.lanes=n,t.stateNode={isHidden:!1},t}function Yc(t,e,n){return t=Mt(6,t,null,e),t.lanes=n,t}function Xc(t,e,n){return e=Mt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function $S(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nc(0),this.expirationTimes=Nc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nc(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Df(t,e,n,r,s,i,o,l,u){return t=new $S(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Mt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gf(i),t}function HS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ds,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Hw(t){if(!t)return Ar;t=t._reactInternals;e:{if(vs(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Et(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(Et(n))return Hv(t,n,e)}return e}function qw(t,e,n,r,s,i,o,l,u){return t=Df(n,r,!0,t,s,i,o,l,u),t.context=Hw(null),n=t.current,r=ft(),s=_r(n),i=Dn(r,s),i.callback=e??null,gr(n,i,s),t.current.lanes=s,ra(t,s,r),Tt(t,r),t}function Su(t,e,n,r){var s=e.current,i=ft(),o=_r(s);return n=Hw(n),e.context===null?e.context=n:e.pendingContext=n,e=Dn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=gr(s,e,o),t!==null&&(Yt(t,s,o,i),al(t,s,o)),o}function Gl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Gg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Vf(t,e){Gg(t,e),(t=t.alternate)&&Gg(t,e)}function qS(){return null}var Ww=typeof reportError=="function"?reportError:function(t){console.error(t)};function jf(t){this._internalRoot=t}Au.prototype.render=jf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Su(t,e,null,null)};Au.prototype.unmount=jf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;hs(function(){Su(null,t,null,null)}),e[Ln]=null}};function Au(t){this._internalRoot=t}Au.prototype.unstable_scheduleHydration=function(t){if(t){var e=Iv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<nr.length&&e!==0&&e<nr[n].priority;n++);nr.splice(n,0,t),n===0&&Av(t)}};function Of(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ku(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Kg(){}function WS(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=Gl(o);i.call(c)}}var o=qw(e,r,t,0,null,!1,!1,"",Kg);return t._reactRootContainer=o,t[Ln]=o.current,jo(t.nodeType===8?t.parentNode:t),hs(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var c=Gl(u);l.call(c)}}var u=Df(t,0,!1,null,null,!1,!1,"",Kg);return t._reactRootContainer=u,t[Ln]=u.current,jo(t.nodeType===8?t.parentNode:t),hs(function(){Su(e,u,n,r)}),u}function Cu(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=Gl(o);l.call(u)}}Su(e,o,t,s)}else o=WS(n,e,t,s,r);return Gl(o)}Ev=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ro(e.pendingLanes);n!==0&&(ef(e,n|1),Tt(e,Pe()),!(oe&6)&&(ui=Pe()+500,jr()))}break;case 13:hs(function(){var r=Mn(t,1);if(r!==null){var s=ft();Yt(r,t,1,s)}}),Vf(t,1)}};tf=function(t){if(t.tag===13){var e=Mn(t,134217728);if(e!==null){var n=ft();Yt(e,t,134217728,n)}Vf(t,134217728)}};Tv=function(t){if(t.tag===13){var e=_r(t),n=Mn(t,e);if(n!==null){var r=ft();Yt(n,t,e,r)}Vf(t,e)}};Iv=function(){return le};Sv=function(t,e){var n=le;try{return le=t,e()}finally{le=n}};xh=function(t,e,n){switch(e){case"input":if(Th(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=yu(r);if(!s)throw Error(F(90));tv(r),Th(r,s)}}}break;case"textarea":rv(t,n);break;case"select":e=n.value,e!=null&&qs(t,!!n.multiple,e,!1)}};cv=xf;hv=hs;var GS={usingClientEntryPoint:!1,Events:[ia,Ms,yu,lv,uv,xf]},Ji={findFiberByHostInstance:Xr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},KS={bundleType:Ji.bundleType,version:Ji.version,rendererPackageName:Ji.rendererPackageName,rendererConfig:Ji.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Hn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=pv(t),t===null?null:t.stateNode},findFiberByHostInstance:Ji.findFiberByHostInstance||qS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ga=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ga.isDisabled&&Ga.supportsFiber)try{fu=Ga.inject(KS),cn=Ga}catch{}}Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=GS;Nt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Of(e))throw Error(F(200));return HS(t,e,null,n)};Nt.createRoot=function(t,e){if(!Of(t))throw Error(F(299));var n=!1,r="",s=Ww;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Df(t,1,!1,null,null,n,!1,r,s),t[Ln]=e.current,jo(t.nodeType===8?t.parentNode:t),new jf(e)};Nt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=pv(e),t=t===null?null:t.stateNode,t};Nt.flushSync=function(t){return hs(t)};Nt.hydrate=function(t,e,n){if(!ku(e))throw Error(F(200));return Cu(null,t,e,!0,n)};Nt.hydrateRoot=function(t,e,n){if(!Of(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=Ww;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=qw(e,null,t,1,n??null,s,!1,i,o),t[Ln]=e.current,jo(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Au(e)};Nt.render=function(t,e,n){if(!ku(e))throw Error(F(200));return Cu(null,t,e,!1,n)};Nt.unmountComponentAtNode=function(t){if(!ku(t))throw Error(F(40));return t._reactRootContainer?(hs(function(){Cu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ln]=null})}),!0):!1};Nt.unstable_batchedUpdates=xf;Nt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ku(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Cu(t,e,n,!1,r)};Nt.version="18.3.1-next-f1338f8080-20240426";function Gw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gw)}catch(t){console.error(t)}}Gw(),G_.exports=Nt;var QS=G_.exports,Qg=QS;mh.createRoot=Qg.createRoot,mh.hydrateRoot=Qg.hydrateRoot;const YS={},Yg=t=>{let e;const n=new Set,r=(f,m)=>{const g=typeof f=="function"?f(e):f;if(!Object.is(g,e)){const w=e;e=m??(typeof g!="object"||g===null)?g:Object.assign({},e,g),n.forEach(I=>I(e,w))}},s=()=>e,u={setState:r,getState:s,getInitialState:()=>c,subscribe:f=>(n.add(f),()=>n.delete(f)),destroy:()=>{(YS?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=e=t(r,s,u);return u},XS=t=>t?Yg(t):Yg;var Kw={exports:{}},Qw={},Yw={exports:{}},Xw={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ci=B;function JS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ZS=typeof Object.is=="function"?Object.is:JS,eA=ci.useState,tA=ci.useEffect,nA=ci.useLayoutEffect,rA=ci.useDebugValue;function sA(t,e){var n=e(),r=eA({inst:{value:n,getSnapshot:e}}),s=r[0].inst,i=r[1];return nA(function(){s.value=n,s.getSnapshot=e,Jc(s)&&i({inst:s})},[t,n,e]),tA(function(){return Jc(s)&&i({inst:s}),t(function(){Jc(s)&&i({inst:s})})},[t]),rA(n),n}function Jc(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ZS(t,n)}catch{return!0}}function iA(t,e){return e()}var oA=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?iA:sA;Xw.useSyncExternalStore=ci.useSyncExternalStore!==void 0?ci.useSyncExternalStore:oA;Yw.exports=Xw;var aA=Yw.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ru=B,lA=aA;function uA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var cA=typeof Object.is=="function"?Object.is:uA,hA=lA.useSyncExternalStore,dA=Ru.useRef,fA=Ru.useEffect,pA=Ru.useMemo,mA=Ru.useDebugValue;Qw.useSyncExternalStoreWithSelector=function(t,e,n,r,s){var i=dA(null);if(i.current===null){var o={hasValue:!1,value:null};i.current=o}else o=i.current;i=pA(function(){function u(w){if(!c){if(c=!0,f=w,w=r(w),s!==void 0&&o.hasValue){var I=o.value;if(s(I,w))return m=I}return m=w}if(I=m,cA(f,w))return I;var P=r(w);return s!==void 0&&s(I,P)?(f=w,I):(f=w,m=P)}var c=!1,f,m,g=n===void 0?null:n;return[function(){return u(e())},g===null?void 0:function(){return u(g())}]},[e,n,r,s]);var l=hA(t,i[0],i[1]);return fA(function(){o.hasValue=!0,o.value=l},[l]),mA(l),l};Kw.exports=Qw;var gA=Kw.exports;const yA=V_(gA),Jw={},{useDebugValue:_A}=q_,{useSyncExternalStoreWithSelector:vA}=yA;let Xg=!1;const wA=t=>t;function EA(t,e=wA,n){(Jw?"production":void 0)!=="production"&&n&&!Xg&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Xg=!0);const r=vA(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return _A(r),r}const Jg=t=>{(Jw?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?XS(t):t,n=(r,s)=>EA(e,r,s);return Object.assign(n,e),n},TA=t=>t?Jg(t):Jg,IA=()=>{};var Zg={};/**
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
 */const Zw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},SA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},eE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,c=u?t[s+2]:0,f=i>>2,m=(i&3)<<4|l>>4;let g=(l&15)<<2|c>>6,w=c&63;u||(w=64,o||(g=64)),r.push(n[f],n[m],n[g],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Zw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):SA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||c==null||m==null)throw new AA;const g=i<<2|l>>4;if(r.push(g),c!==64){const w=l<<4&240|c>>2;if(r.push(w),m!==64){const I=c<<6&192|m;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class AA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kA=function(t){const e=Zw(t);return eE.encodeByteArray(e,!0)},Kl=function(t){return kA(t).replace(/\./g,"")},tE=function(t){try{return eE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function CA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const RA=()=>CA().__FIREBASE_DEFAULTS__,xA=()=>{if(typeof process>"u"||typeof Zg>"u")return;const t=Zg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},PA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&tE(t[1]);return e&&JSON.parse(e)},xu=()=>{try{return IA()||RA()||xA()||PA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},nE=t=>{var e,n;return(n=(e=xu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},rE=t=>{const e=nE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},sE=()=>{var t;return(t=xu())==null?void 0:t.config},iE=t=>{var e;return(e=xu())==null?void 0:e[`_${t}`]};/**
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
 */class NA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Or(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Lf(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function oE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Kl(JSON.stringify(n)),Kl(JSON.stringify(o)),""].join(".")}const vo={};function bA(){const t={prod:[],emulator:[]};for(const e of Object.keys(vo))vo[e]?t.emulator.push(e):t.prod.push(e);return t}function DA(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let ey=!1;function Mf(t,e){if(typeof window>"u"||typeof document>"u"||!Or(window.location.host)||vo[t]===e||vo[t]||ey)return;vo[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=bA().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,w){g.setAttribute("width","24"),g.setAttribute("id",w),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function c(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{ey=!0,o()},g}function f(g,w){g.setAttribute("id",w),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function m(){const g=DA(r),w=n("text"),I=document.getElementById(w)||document.createElement("span"),P=n("learnmore"),V=document.getElementById(P)||document.createElement("a"),S=n("preprendIcon"),T=document.getElementById(S)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const A=g.element;l(A),f(V,P);const b=c();u(T,S),A.append(T,I,V,b),document.body.appendChild(A)}i?(I.innerText="Preview backend disconnected.",T.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(T.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,I.innerText="Preview backend running in this workspace."),I.setAttribute("id",w)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
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
 */function at(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function VA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(at())}function jA(){var e;const t=(e=xu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function OA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function LA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function MA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function FA(){const t=at();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function UA(){return!jA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zA(){try{return typeof indexedDB=="object"}catch{return!1}}function BA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const $A="FirebaseError";class Tn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=$A,Object.setPrototypeOf(this,Tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,aa.prototype.create)}}class aa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?HA(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Tn(s,l,r)}}function HA(t,e){return t.replace(qA,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const qA=/\{\$([^}]+)}/g;function WA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ds(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ty(i)&&ty(o)){if(!ds(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ty(t){return t!==null&&typeof t=="object"}/**
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
 */function la(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function GA(t,e){const n=new KA(t,e);return n.subscribe.bind(n)}class KA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");QA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Zc),s.error===void 0&&(s.error=Zc),s.complete===void 0&&(s.complete=Zc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function QA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Zc(){}/**
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
 */function Te(t){return t&&t._delegate?t._delegate:t}class kr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Yr="[DEFAULT]";/**
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
 */class YA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new NA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(JA(e))try{this.getOrInitializeService({instanceIdentifier:Yr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Yr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yr){return this.instances.has(e)}getOptions(e=Yr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:XA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Yr){return this.component?this.component.multipleInstances?e:Yr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function XA(t){return t===Yr?void 0:t}function JA(t){return t.instantiationMode==="EAGER"}/**
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
 */class ZA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new YA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const ek={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},tk=ne.INFO,nk={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},rk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=nk[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ff{constructor(e){this.name=e,this._logLevel=tk,this._logHandler=rk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ek[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const sk=(t,e)=>e.some(n=>t instanceof n);let ny,ry;function ik(){return ny||(ny=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ok(){return ry||(ry=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const aE=new WeakMap,ld=new WeakMap,lE=new WeakMap,eh=new WeakMap,Uf=new WeakMap;function ak(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(wr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&aE.set(n,t)}).catch(()=>{}),Uf.set(e,t),e}function lk(t){if(ld.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ld.set(t,e)}let ud={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ld.get(t);if(e==="objectStoreNames")return t.objectStoreNames||lE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return wr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function uk(t){ud=t(ud)}function ck(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(th(this),e,...n);return lE.set(r,e.sort?e.sort():[e]),wr(r)}:ok().includes(t)?function(...e){return t.apply(th(this),e),wr(aE.get(this))}:function(...e){return wr(t.apply(th(this),e))}}function hk(t){return typeof t=="function"?ck(t):(t instanceof IDBTransaction&&lk(t),sk(t,ik())?new Proxy(t,ud):t)}function wr(t){if(t instanceof IDBRequest)return ak(t);if(eh.has(t))return eh.get(t);const e=hk(t);return e!==t&&(eh.set(t,e),Uf.set(e,t)),e}const th=t=>Uf.get(t);function dk(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=wr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(wr(o.result),u.oldVersion,u.newVersion,wr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const fk=["get","getKey","getAll","getAllKeys","count"],pk=["put","add","delete","clear"],nh=new Map;function sy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(nh.get(e))return nh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=pk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||fk.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),s&&u.done]))[0]};return nh.set(e,i),i}uk(t=>({...t,get:(e,n,r)=>sy(e,n)||t.get(e,n,r),has:(e,n)=>!!sy(e,n)||t.has(e,n)}));/**
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
 */class mk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(gk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function gk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const cd="@firebase/app",iy="0.14.7";/**
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
 */const Un=new Ff("@firebase/app"),yk="@firebase/app-compat",_k="@firebase/analytics-compat",vk="@firebase/analytics",wk="@firebase/app-check-compat",Ek="@firebase/app-check",Tk="@firebase/auth",Ik="@firebase/auth-compat",Sk="@firebase/database",Ak="@firebase/data-connect",kk="@firebase/database-compat",Ck="@firebase/functions",Rk="@firebase/functions-compat",xk="@firebase/installations",Pk="@firebase/installations-compat",Nk="@firebase/messaging",bk="@firebase/messaging-compat",Dk="@firebase/performance",Vk="@firebase/performance-compat",jk="@firebase/remote-config",Ok="@firebase/remote-config-compat",Lk="@firebase/storage",Mk="@firebase/storage-compat",Fk="@firebase/firestore",Uk="@firebase/ai",zk="@firebase/firestore-compat",Bk="firebase",$k="12.8.0";/**
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
 */const hd="[DEFAULT]",Hk={[cd]:"fire-core",[yk]:"fire-core-compat",[vk]:"fire-analytics",[_k]:"fire-analytics-compat",[Ek]:"fire-app-check",[wk]:"fire-app-check-compat",[Tk]:"fire-auth",[Ik]:"fire-auth-compat",[Sk]:"fire-rtdb",[Ak]:"fire-data-connect",[kk]:"fire-rtdb-compat",[Ck]:"fire-fn",[Rk]:"fire-fn-compat",[xk]:"fire-iid",[Pk]:"fire-iid-compat",[Nk]:"fire-fcm",[bk]:"fire-fcm-compat",[Dk]:"fire-perf",[Vk]:"fire-perf-compat",[jk]:"fire-rc",[Ok]:"fire-rc-compat",[Lk]:"fire-gcs",[Mk]:"fire-gcs-compat",[Fk]:"fire-fst",[zk]:"fire-fst-compat",[Uk]:"fire-vertex","fire-js":"fire-js",[Bk]:"fire-js-all"};/**
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
 */const Ql=new Map,qk=new Map,dd=new Map;function oy(t,e){try{t.container.addComponent(e)}catch(n){Un.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fs(t){const e=t.name;if(dd.has(e))return Un.debug(`There were multiple attempts to register component ${e}.`),!1;dd.set(e,t);for(const n of Ql.values())oy(n,t);for(const n of qk.values())oy(n,t);return!0}function Pu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ot(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Wk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Er=new aa("app","Firebase",Wk);/**
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
 */class Gk{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new kr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Er.create("app-deleted",{appName:this._name})}}/**
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
 */const ws=$k;function uE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:hd,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Er.create("bad-app-name",{appName:String(s)});if(n||(n=sE()),!n)throw Er.create("no-options");const i=Ql.get(s);if(i){if(ds(n,i.options)&&ds(r,i.config))return i;throw Er.create("duplicate-app",{appName:s})}const o=new ZA(s);for(const u of dd.values())o.addComponent(u);const l=new Gk(n,r,o);return Ql.set(s,l),l}function zf(t=hd){const e=Ql.get(t);if(!e&&t===hd&&sE())return uE();if(!e)throw Er.create("no-app",{appName:t});return e}function dn(t,e,n){let r=Hk[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Un.warn(o.join(" "));return}fs(new kr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Kk="firebase-heartbeat-database",Qk=1,Ho="firebase-heartbeat-store";let rh=null;function cE(){return rh||(rh=dk(Kk,Qk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ho)}catch(n){console.warn(n)}}}}).catch(t=>{throw Er.create("idb-open",{originalErrorMessage:t.message})})),rh}async function Yk(t){try{const n=(await cE()).transaction(Ho),r=await n.objectStore(Ho).get(hE(t));return await n.done,r}catch(e){if(e instanceof Tn)Un.warn(e.message);else{const n=Er.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Un.warn(n.message)}}}async function ay(t,e){try{const r=(await cE()).transaction(Ho,"readwrite");await r.objectStore(Ho).put(e,hE(t)),await r.done}catch(n){if(n instanceof Tn)Un.warn(n.message);else{const r=Er.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Un.warn(r.message)}}}function hE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Xk=1024,Jk=30;class Zk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new tC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ly();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Jk){const o=nC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Un.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ly(),{heartbeatsToSend:r,unsentEntries:s}=eC(this._heartbeatsCache.heartbeats),i=Kl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Un.warn(n),""}}}function ly(){return new Date().toISOString().substring(0,10)}function eC(t,e=Xk){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),uy(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),uy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class tC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zA()?BA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Yk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ay(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ay(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function uy(t){return Kl(JSON.stringify({version:2,heartbeats:t})).length}function nC(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function rC(t){fs(new kr("platform-logger",e=>new mk(e),"PRIVATE")),fs(new kr("heartbeat",e=>new Zk(e),"PRIVATE")),dn(cd,iy,t),dn(cd,iy,"esm2020"),dn("fire-js","")}rC("");var cy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tr,dE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(y,_){function E(){}E.prototype=_.prototype,y.F=_.prototype,y.prototype=new E,y.prototype.constructor=y,y.D=function(R,k,N){for(var C=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)C[ce-2]=arguments[ce];return _.prototype[k].apply(R,C)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(y,_,E){E||(E=0);const R=Array(16);if(typeof _=="string")for(var k=0;k<16;++k)R[k]=_.charCodeAt(E++)|_.charCodeAt(E++)<<8|_.charCodeAt(E++)<<16|_.charCodeAt(E++)<<24;else for(k=0;k<16;++k)R[k]=_[E++]|_[E++]<<8|_[E++]<<16|_[E++]<<24;_=y.g[0],E=y.g[1],k=y.g[2];let N=y.g[3],C;C=_+(N^E&(k^N))+R[0]+3614090360&4294967295,_=E+(C<<7&4294967295|C>>>25),C=N+(k^_&(E^k))+R[1]+3905402710&4294967295,N=_+(C<<12&4294967295|C>>>20),C=k+(E^N&(_^E))+R[2]+606105819&4294967295,k=N+(C<<17&4294967295|C>>>15),C=E+(_^k&(N^_))+R[3]+3250441966&4294967295,E=k+(C<<22&4294967295|C>>>10),C=_+(N^E&(k^N))+R[4]+4118548399&4294967295,_=E+(C<<7&4294967295|C>>>25),C=N+(k^_&(E^k))+R[5]+1200080426&4294967295,N=_+(C<<12&4294967295|C>>>20),C=k+(E^N&(_^E))+R[6]+2821735955&4294967295,k=N+(C<<17&4294967295|C>>>15),C=E+(_^k&(N^_))+R[7]+4249261313&4294967295,E=k+(C<<22&4294967295|C>>>10),C=_+(N^E&(k^N))+R[8]+1770035416&4294967295,_=E+(C<<7&4294967295|C>>>25),C=N+(k^_&(E^k))+R[9]+2336552879&4294967295,N=_+(C<<12&4294967295|C>>>20),C=k+(E^N&(_^E))+R[10]+4294925233&4294967295,k=N+(C<<17&4294967295|C>>>15),C=E+(_^k&(N^_))+R[11]+2304563134&4294967295,E=k+(C<<22&4294967295|C>>>10),C=_+(N^E&(k^N))+R[12]+1804603682&4294967295,_=E+(C<<7&4294967295|C>>>25),C=N+(k^_&(E^k))+R[13]+4254626195&4294967295,N=_+(C<<12&4294967295|C>>>20),C=k+(E^N&(_^E))+R[14]+2792965006&4294967295,k=N+(C<<17&4294967295|C>>>15),C=E+(_^k&(N^_))+R[15]+1236535329&4294967295,E=k+(C<<22&4294967295|C>>>10),C=_+(k^N&(E^k))+R[1]+4129170786&4294967295,_=E+(C<<5&4294967295|C>>>27),C=N+(E^k&(_^E))+R[6]+3225465664&4294967295,N=_+(C<<9&4294967295|C>>>23),C=k+(_^E&(N^_))+R[11]+643717713&4294967295,k=N+(C<<14&4294967295|C>>>18),C=E+(N^_&(k^N))+R[0]+3921069994&4294967295,E=k+(C<<20&4294967295|C>>>12),C=_+(k^N&(E^k))+R[5]+3593408605&4294967295,_=E+(C<<5&4294967295|C>>>27),C=N+(E^k&(_^E))+R[10]+38016083&4294967295,N=_+(C<<9&4294967295|C>>>23),C=k+(_^E&(N^_))+R[15]+3634488961&4294967295,k=N+(C<<14&4294967295|C>>>18),C=E+(N^_&(k^N))+R[4]+3889429448&4294967295,E=k+(C<<20&4294967295|C>>>12),C=_+(k^N&(E^k))+R[9]+568446438&4294967295,_=E+(C<<5&4294967295|C>>>27),C=N+(E^k&(_^E))+R[14]+3275163606&4294967295,N=_+(C<<9&4294967295|C>>>23),C=k+(_^E&(N^_))+R[3]+4107603335&4294967295,k=N+(C<<14&4294967295|C>>>18),C=E+(N^_&(k^N))+R[8]+1163531501&4294967295,E=k+(C<<20&4294967295|C>>>12),C=_+(k^N&(E^k))+R[13]+2850285829&4294967295,_=E+(C<<5&4294967295|C>>>27),C=N+(E^k&(_^E))+R[2]+4243563512&4294967295,N=_+(C<<9&4294967295|C>>>23),C=k+(_^E&(N^_))+R[7]+1735328473&4294967295,k=N+(C<<14&4294967295|C>>>18),C=E+(N^_&(k^N))+R[12]+2368359562&4294967295,E=k+(C<<20&4294967295|C>>>12),C=_+(E^k^N)+R[5]+4294588738&4294967295,_=E+(C<<4&4294967295|C>>>28),C=N+(_^E^k)+R[8]+2272392833&4294967295,N=_+(C<<11&4294967295|C>>>21),C=k+(N^_^E)+R[11]+1839030562&4294967295,k=N+(C<<16&4294967295|C>>>16),C=E+(k^N^_)+R[14]+4259657740&4294967295,E=k+(C<<23&4294967295|C>>>9),C=_+(E^k^N)+R[1]+2763975236&4294967295,_=E+(C<<4&4294967295|C>>>28),C=N+(_^E^k)+R[4]+1272893353&4294967295,N=_+(C<<11&4294967295|C>>>21),C=k+(N^_^E)+R[7]+4139469664&4294967295,k=N+(C<<16&4294967295|C>>>16),C=E+(k^N^_)+R[10]+3200236656&4294967295,E=k+(C<<23&4294967295|C>>>9),C=_+(E^k^N)+R[13]+681279174&4294967295,_=E+(C<<4&4294967295|C>>>28),C=N+(_^E^k)+R[0]+3936430074&4294967295,N=_+(C<<11&4294967295|C>>>21),C=k+(N^_^E)+R[3]+3572445317&4294967295,k=N+(C<<16&4294967295|C>>>16),C=E+(k^N^_)+R[6]+76029189&4294967295,E=k+(C<<23&4294967295|C>>>9),C=_+(E^k^N)+R[9]+3654602809&4294967295,_=E+(C<<4&4294967295|C>>>28),C=N+(_^E^k)+R[12]+3873151461&4294967295,N=_+(C<<11&4294967295|C>>>21),C=k+(N^_^E)+R[15]+530742520&4294967295,k=N+(C<<16&4294967295|C>>>16),C=E+(k^N^_)+R[2]+3299628645&4294967295,E=k+(C<<23&4294967295|C>>>9),C=_+(k^(E|~N))+R[0]+4096336452&4294967295,_=E+(C<<6&4294967295|C>>>26),C=N+(E^(_|~k))+R[7]+1126891415&4294967295,N=_+(C<<10&4294967295|C>>>22),C=k+(_^(N|~E))+R[14]+2878612391&4294967295,k=N+(C<<15&4294967295|C>>>17),C=E+(N^(k|~_))+R[5]+4237533241&4294967295,E=k+(C<<21&4294967295|C>>>11),C=_+(k^(E|~N))+R[12]+1700485571&4294967295,_=E+(C<<6&4294967295|C>>>26),C=N+(E^(_|~k))+R[3]+2399980690&4294967295,N=_+(C<<10&4294967295|C>>>22),C=k+(_^(N|~E))+R[10]+4293915773&4294967295,k=N+(C<<15&4294967295|C>>>17),C=E+(N^(k|~_))+R[1]+2240044497&4294967295,E=k+(C<<21&4294967295|C>>>11),C=_+(k^(E|~N))+R[8]+1873313359&4294967295,_=E+(C<<6&4294967295|C>>>26),C=N+(E^(_|~k))+R[15]+4264355552&4294967295,N=_+(C<<10&4294967295|C>>>22),C=k+(_^(N|~E))+R[6]+2734768916&4294967295,k=N+(C<<15&4294967295|C>>>17),C=E+(N^(k|~_))+R[13]+1309151649&4294967295,E=k+(C<<21&4294967295|C>>>11),C=_+(k^(E|~N))+R[4]+4149444226&4294967295,_=E+(C<<6&4294967295|C>>>26),C=N+(E^(_|~k))+R[11]+3174756917&4294967295,N=_+(C<<10&4294967295|C>>>22),C=k+(_^(N|~E))+R[2]+718787259&4294967295,k=N+(C<<15&4294967295|C>>>17),C=E+(N^(k|~_))+R[9]+3951481745&4294967295,y.g[0]=y.g[0]+_&4294967295,y.g[1]=y.g[1]+(k+(C<<21&4294967295|C>>>11))&4294967295,y.g[2]=y.g[2]+k&4294967295,y.g[3]=y.g[3]+N&4294967295}r.prototype.v=function(y,_){_===void 0&&(_=y.length);const E=_-this.blockSize,R=this.C;let k=this.h,N=0;for(;N<_;){if(k==0)for(;N<=E;)s(this,y,N),N+=this.blockSize;if(typeof y=="string"){for(;N<_;)if(R[k++]=y.charCodeAt(N++),k==this.blockSize){s(this,R),k=0;break}}else for(;N<_;)if(R[k++]=y[N++],k==this.blockSize){s(this,R),k=0;break}}this.h=k,this.o+=_},r.prototype.A=function(){var y=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);y[0]=128;for(var _=1;_<y.length-8;++_)y[_]=0;_=this.o*8;for(var E=y.length-8;E<y.length;++E)y[E]=_&255,_/=256;for(this.v(y),y=Array(16),_=0,E=0;E<4;++E)for(let R=0;R<32;R+=8)y[_++]=this.g[E]>>>R&255;return y};function i(y,_){var E=l;return Object.prototype.hasOwnProperty.call(E,y)?E[y]:E[y]=_(y)}function o(y,_){this.h=_;const E=[];let R=!0;for(let k=y.length-1;k>=0;k--){const N=y[k]|0;R&&N==_||(E[k]=N,R=!1)}this.g=E}var l={};function u(y){return-128<=y&&y<128?i(y,function(_){return new o([_|0],_<0?-1:0)}):new o([y|0],y<0?-1:0)}function c(y){if(isNaN(y)||!isFinite(y))return m;if(y<0)return V(c(-y));const _=[];let E=1;for(let R=0;y>=E;R++)_[R]=y/E|0,E*=4294967296;return new o(_,0)}function f(y,_){if(y.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(y.charAt(0)=="-")return V(f(y.substring(1),_));if(y.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=c(Math.pow(_,8));let R=m;for(let N=0;N<y.length;N+=8){var k=Math.min(8,y.length-N);const C=parseInt(y.substring(N,N+k),_);k<8?(k=c(Math.pow(_,k)),R=R.j(k).add(c(C))):(R=R.j(E),R=R.add(c(C)))}return R}var m=u(0),g=u(1),w=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-V(this).m();let y=0,_=1;for(let E=0;E<this.g.length;E++){const R=this.i(E);y+=(R>=0?R:4294967296+R)*_,_*=4294967296}return y},t.toString=function(y){if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(I(this))return"0";if(P(this))return"-"+V(this).toString(y);const _=c(Math.pow(y,6));var E=this;let R="";for(;;){const k=b(E,_).g;E=S(E,k.j(_));let N=((E.g.length>0?E.g[0]:E.h)>>>0).toString(y);if(E=k,I(E))return N+R;for(;N.length<6;)N="0"+N;R=N+R}},t.i=function(y){return y<0?0:y<this.g.length?this.g[y]:this.h};function I(y){if(y.h!=0)return!1;for(let _=0;_<y.g.length;_++)if(y.g[_]!=0)return!1;return!0}function P(y){return y.h==-1}t.l=function(y){return y=S(this,y),P(y)?-1:I(y)?0:1};function V(y){const _=y.g.length,E=[];for(let R=0;R<_;R++)E[R]=~y.g[R];return new o(E,~y.h).add(g)}t.abs=function(){return P(this)?V(this):this},t.add=function(y){const _=Math.max(this.g.length,y.g.length),E=[];let R=0;for(let k=0;k<=_;k++){let N=R+(this.i(k)&65535)+(y.i(k)&65535),C=(N>>>16)+(this.i(k)>>>16)+(y.i(k)>>>16);R=C>>>16,N&=65535,C&=65535,E[k]=C<<16|N}return new o(E,E[E.length-1]&-2147483648?-1:0)};function S(y,_){return y.add(V(_))}t.j=function(y){if(I(this)||I(y))return m;if(P(this))return P(y)?V(this).j(V(y)):V(V(this).j(y));if(P(y))return V(this.j(V(y)));if(this.l(w)<0&&y.l(w)<0)return c(this.m()*y.m());const _=this.g.length+y.g.length,E=[];for(var R=0;R<2*_;R++)E[R]=0;for(R=0;R<this.g.length;R++)for(let k=0;k<y.g.length;k++){const N=this.i(R)>>>16,C=this.i(R)&65535,ce=y.i(k)>>>16,Ue=y.i(k)&65535;E[2*R+2*k]+=C*Ue,T(E,2*R+2*k),E[2*R+2*k+1]+=N*Ue,T(E,2*R+2*k+1),E[2*R+2*k+1]+=C*ce,T(E,2*R+2*k+1),E[2*R+2*k+2]+=N*ce,T(E,2*R+2*k+2)}for(y=0;y<_;y++)E[y]=E[2*y+1]<<16|E[2*y];for(y=_;y<2*_;y++)E[y]=0;return new o(E,0)};function T(y,_){for(;(y[_]&65535)!=y[_];)y[_+1]+=y[_]>>>16,y[_]&=65535,_++}function A(y,_){this.g=y,this.h=_}function b(y,_){if(I(_))throw Error("division by zero");if(I(y))return new A(m,m);if(P(y))return _=b(V(y),_),new A(V(_.g),V(_.h));if(P(_))return _=b(y,V(_)),new A(V(_.g),_.h);if(y.g.length>30){if(P(y)||P(_))throw Error("slowDivide_ only works with positive integers.");for(var E=g,R=_;R.l(y)<=0;)E=x(E),R=x(R);var k=O(E,1),N=O(R,1);for(R=O(R,2),E=O(E,2);!I(R);){var C=N.add(R);C.l(y)<=0&&(k=k.add(E),N=C),R=O(R,1),E=O(E,1)}return _=S(y,k.j(_)),new A(k,_)}for(k=m;y.l(_)>=0;){for(E=Math.max(1,Math.floor(y.m()/_.m())),R=Math.ceil(Math.log(E)/Math.LN2),R=R<=48?1:Math.pow(2,R-48),N=c(E),C=N.j(_);P(C)||C.l(y)>0;)E-=R,N=c(E),C=N.j(_);I(N)&&(N=g),k=k.add(N),y=S(y,C)}return new A(k,y)}t.B=function(y){return b(this,y).h},t.and=function(y){const _=Math.max(this.g.length,y.g.length),E=[];for(let R=0;R<_;R++)E[R]=this.i(R)&y.i(R);return new o(E,this.h&y.h)},t.or=function(y){const _=Math.max(this.g.length,y.g.length),E=[];for(let R=0;R<_;R++)E[R]=this.i(R)|y.i(R);return new o(E,this.h|y.h)},t.xor=function(y){const _=Math.max(this.g.length,y.g.length),E=[];for(let R=0;R<_;R++)E[R]=this.i(R)^y.i(R);return new o(E,this.h^y.h)};function x(y){const _=y.g.length+1,E=[];for(let R=0;R<_;R++)E[R]=y.i(R)<<1|y.i(R-1)>>>31;return new o(E,y.h)}function O(y,_){const E=_>>5;_%=32;const R=y.g.length-E,k=[];for(let N=0;N<R;N++)k[N]=_>0?y.i(N+E)>>>_|y.i(N+E+1)<<32-_:y.i(N+E);return new o(k,y.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,dE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,Tr=o}).apply(typeof cy<"u"?cy:typeof self<"u"?self:typeof window<"u"?window:{});var Ka=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fE,io,pE,pl,fd,mE,gE,yE;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ka=="object"&&Ka];for(var d=0;d<a.length;++d){var p=a[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,d){if(d)e:{var p=r;a=a.split(".");for(var v=0;v<a.length-1;v++){var D=a[v];if(!(D in p))break e;p=p[D]}a=a[a.length-1],v=p[a],d=d(v),d!=v&&d!=null&&e(p,a,{configurable:!0,writable:!0,value:d})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(d){var p=[],v;for(v in d)Object.prototype.hasOwnProperty.call(d,v)&&p.push([v,d[v]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function u(a,d,p){return a.call.apply(a.bind,arguments)}function c(a,d,p){return c=u,c.apply(null,arguments)}function f(a,d){var p=Array.prototype.slice.call(arguments,1);return function(){var v=p.slice();return v.push.apply(v,arguments),a.apply(this,v)}}function m(a,d){function p(){}p.prototype=d.prototype,a.Z=d.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(v,D,j){for(var U=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)U[ee-2]=arguments[ee];return d.prototype[D].apply(v,U)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function w(a){const d=a.length;if(d>0){const p=Array(d);for(let v=0;v<d;v++)p[v]=a[v];return p}return[]}function I(a,d){for(let v=1;v<arguments.length;v++){const D=arguments[v];var p=typeof D;if(p=p!="object"?p:D?Array.isArray(D)?"array":p:"null",p=="array"||p=="object"&&typeof D.length=="number"){p=a.length||0;const j=D.length||0;a.length=p+j;for(let U=0;U<j;U++)a[p+U]=D[U]}else a.push(D)}}class P{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return this.h>0?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function V(a){o.setTimeout(()=>{throw a},0)}function S(){var a=y;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class T{constructor(){this.h=this.g=null}add(d,p){const v=A.get();v.set(d,p),this.h?this.h.next=v:this.g=v,this.h=v}}var A=new P(()=>new b,a=>a.reset());class b{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let x,O=!1,y=new T,_=()=>{const a=Promise.resolve(void 0);x=()=>{a.then(E)}};function E(){for(var a;a=S();){try{a.h.call(a.g)}catch(p){V(p)}var d=A;d.j(a),d.h<100&&(d.h++,a.next=d.g,d.g=a)}O=!1}function R(){this.u=this.u,this.C=this.C}R.prototype.u=!1,R.prototype.dispose=function(){this.u||(this.u=!0,this.N())},R.prototype[Symbol.dispose]=function(){this.dispose()},R.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function k(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}k.prototype.h=function(){this.defaultPrevented=!0};var N=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,d),o.removeEventListener("test",p,d)}catch{}return a}();function C(a){return/^[\s\xa0]*$/.test(a)}function ce(a,d){k.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,d)}m(ce,k),ce.prototype.init=function(a,d){const p=this.type=a.type,v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget,d||(p=="mouseover"?d=a.fromElement:p=="mouseout"&&(d=a.toElement)),this.relatedTarget=d,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&ce.Z.h.call(this)},ce.prototype.h=function(){ce.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ue="closure_listenable_"+(Math.random()*1e6|0),Bt=0;function Ur(a,d,p,v,D){this.listener=a,this.proxy=null,this.src=d,this.type=p,this.capture=!!v,this.ha=D,this.key=++Bt,this.da=this.fa=!1}function $(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Q(a,d,p){for(const v in a)d.call(p,a[v],v,a)}function Z(a,d){for(const p in a)d.call(void 0,a[p],p,a)}function ye(a){const d={};for(const p in a)d[p]=a[p];return d}const Re="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function zr(a,d){let p,v;for(let D=1;D<arguments.length;D++){v=arguments[D];for(p in v)a[p]=v[p];for(let j=0;j<Re.length;j++)p=Re[j],Object.prototype.hasOwnProperty.call(v,p)&&(a[p]=v[p])}}function Dt(a){this.src=a,this.g={},this.h=0}Dt.prototype.add=function(a,d,p,v,D){const j=a.toString();a=this.g[j],a||(a=this.g[j]=[],this.h++);const U=$t(a,d,v,D);return U>-1?(d=a[U],p||(d.fa=!1)):(d=new Ur(d,this.src,j,!!v,D),d.fa=p,a.push(d)),d};function Br(a,d){const p=d.type;if(p in a.g){var v=a.g[p],D=Array.prototype.indexOf.call(v,d,void 0),j;(j=D>=0)&&Array.prototype.splice.call(v,D,1),j&&($(d),a.g[p].length==0&&(delete a.g[p],a.h--))}}function $t(a,d,p,v){for(let D=0;D<a.length;++D){const j=a[D];if(!j.da&&j.listener==d&&j.capture==!!p&&j.ha==v)return D}return-1}var qn="closure_lm_"+(Math.random()*1e6|0),ic={};function $p(a,d,p,v,D){if(Array.isArray(d)){for(let j=0;j<d.length;j++)$p(a,d[j],p,v,D);return null}return p=Wp(p),a&&a[Ue]?a.J(d,p,l(v)?!!v.capture:!1,D):Q0(a,d,p,!1,v,D)}function Q0(a,d,p,v,D,j){if(!d)throw Error("Invalid event type");const U=l(D)?!!D.capture:!!D;let ee=ac(a);if(ee||(a[qn]=ee=new Dt(a)),p=ee.add(d,p,v,U,j),p.proxy)return p;if(v=Y0(),p.proxy=v,v.src=a,v.listener=p,a.addEventListener)N||(D=U),D===void 0&&(D=!1),a.addEventListener(d.toString(),v,D);else if(a.attachEvent)a.attachEvent(qp(d.toString()),v);else if(a.addListener&&a.removeListener)a.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Y0(){function a(p){return d.call(a.src,a.listener,p)}const d=X0;return a}function Hp(a,d,p,v,D){if(Array.isArray(d))for(var j=0;j<d.length;j++)Hp(a,d[j],p,v,D);else v=l(v)?!!v.capture:!!v,p=Wp(p),a&&a[Ue]?(a=a.i,j=String(d).toString(),j in a.g&&(d=a.g[j],p=$t(d,p,v,D),p>-1&&($(d[p]),Array.prototype.splice.call(d,p,1),d.length==0&&(delete a.g[j],a.h--)))):a&&(a=ac(a))&&(d=a.g[d.toString()],a=-1,d&&(a=$t(d,p,v,D)),(p=a>-1?d[a]:null)&&oc(p))}function oc(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[Ue])Br(d.i,a);else{var p=a.type,v=a.proxy;d.removeEventListener?d.removeEventListener(p,v,a.capture):d.detachEvent?d.detachEvent(qp(p),v):d.addListener&&d.removeListener&&d.removeListener(v),(p=ac(d))?(Br(p,a),p.h==0&&(p.src=null,d[qn]=null)):$(a)}}}function qp(a){return a in ic?ic[a]:ic[a]="on"+a}function X0(a,d){if(a.da)a=!0;else{d=new ce(d,this);const p=a.listener,v=a.ha||a.src;a.fa&&oc(a),a=p.call(v,d)}return a}function ac(a){return a=a[qn],a instanceof Dt?a:null}var lc="__closure_events_fn_"+(Math.random()*1e9>>>0);function Wp(a){return typeof a=="function"?a:(a[lc]||(a[lc]=function(d){return a.handleEvent(d)}),a[lc])}function Je(){R.call(this),this.i=new Dt(this),this.M=this,this.G=null}m(Je,R),Je.prototype[Ue]=!0,Je.prototype.removeEventListener=function(a,d,p,v){Hp(this,a,d,p,v)};function lt(a,d){var p,v=a.G;if(v)for(p=[];v;v=v.G)p.push(v);if(a=a.M,v=d.type||d,typeof d=="string")d=new k(d,a);else if(d instanceof k)d.target=d.target||a;else{var D=d;d=new k(v,a),zr(d,D)}D=!0;let j,U;if(p)for(U=p.length-1;U>=0;U--)j=d.g=p[U],D=va(j,v,!0,d)&&D;if(j=d.g=a,D=va(j,v,!0,d)&&D,D=va(j,v,!1,d)&&D,p)for(U=0;U<p.length;U++)j=d.g=p[U],D=va(j,v,!1,d)&&D}Je.prototype.N=function(){if(Je.Z.N.call(this),this.i){var a=this.i;for(const d in a.g){const p=a.g[d];for(let v=0;v<p.length;v++)$(p[v]);delete a.g[d],a.h--}}this.G=null},Je.prototype.J=function(a,d,p,v){return this.i.add(String(a),d,!1,p,v)},Je.prototype.K=function(a,d,p,v){return this.i.add(String(a),d,!0,p,v)};function va(a,d,p,v){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();let D=!0;for(let j=0;j<d.length;++j){const U=d[j];if(U&&!U.da&&U.capture==p){const ee=U.listener,Oe=U.ha||U.src;U.fa&&Br(a.i,U),D=ee.call(Oe,v)!==!1&&D}}return D&&!v.defaultPrevented}function J0(a,d){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(d)>2147483647?-1:o.setTimeout(a,d||0)}function Gp(a){a.g=J0(()=>{a.g=null,a.i&&(a.i=!1,Gp(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class Z0 extends R{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Gp(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xi(a){R.call(this),this.h=a,this.g={}}m(xi,R);var Kp=[];function Qp(a){Q(a.g,function(d,p){this.g.hasOwnProperty(p)&&oc(d)},a),a.g={}}xi.prototype.N=function(){xi.Z.N.call(this),Qp(this)},xi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var uc=o.JSON.stringify,eT=o.JSON.parse,tT=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Yp(){}function Xp(){}var Pi={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function cc(){k.call(this,"d")}m(cc,k);function hc(){k.call(this,"c")}m(hc,k);var $r={},Jp=null;function wa(){return Jp=Jp||new Je}$r.Ia="serverreachability";function Zp(a){k.call(this,$r.Ia,a)}m(Zp,k);function Ni(a){const d=wa();lt(d,new Zp(d))}$r.STAT_EVENT="statevent";function em(a,d){k.call(this,$r.STAT_EVENT,a),this.stat=d}m(em,k);function ut(a){const d=wa();lt(d,new em(d,a))}$r.Ja="timingevent";function tm(a,d){k.call(this,$r.Ja,a),this.size=d}m(tm,k);function bi(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},d)}function Di(){this.g=!0}Di.prototype.ua=function(){this.g=!1};function nT(a,d,p,v,D,j){a.info(function(){if(a.g)if(j){var U="",ee=j.split("&");for(let ue=0;ue<ee.length;ue++){var Oe=ee[ue].split("=");if(Oe.length>1){const ze=Oe[0];Oe=Oe[1];const rn=ze.split("_");U=rn.length>=2&&rn[1]=="type"?U+(ze+"="+Oe+"&"):U+(ze+"=redacted&")}}}else U=null;else U=j;return"XMLHTTP REQ ("+v+") [attempt "+D+"]: "+d+`
`+p+`
`+U})}function rT(a,d,p,v,D,j,U){a.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+D+"]: "+d+`
`+p+`
`+j+" "+U})}function As(a,d,p,v){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+iT(a,p)+(v?" "+v:"")})}function sT(a,d){a.info(function(){return"TIMEOUT: "+d})}Di.prototype.info=function(){};function iT(a,d){if(!a.g)return d;if(!d)return null;try{const j=JSON.parse(d);if(j){for(a=0;a<j.length;a++)if(Array.isArray(j[a])){var p=j[a];if(!(p.length<2)){var v=p[1];if(Array.isArray(v)&&!(v.length<1)){var D=v[0];if(D!="noop"&&D!="stop"&&D!="close")for(let U=1;U<v.length;U++)v[U]=""}}}}return uc(j)}catch{return d}}var Ea={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},nm={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},rm;function dc(){}m(dc,Yp),dc.prototype.g=function(){return new XMLHttpRequest},rm=new dc;function Vi(a){return encodeURIComponent(String(a))}function oT(a){var d=1;a=a.split(":");const p=[];for(;d>0&&a.length;)p.push(a.shift()),d--;return a.length&&p.push(a.join(":")),p}function Wn(a,d,p,v){this.j=a,this.i=d,this.l=p,this.S=v||1,this.V=new xi(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new sm}function sm(){this.i=null,this.g="",this.h=!1}var im={},fc={};function pc(a,d,p){a.M=1,a.A=Ia(nn(d)),a.u=p,a.R=!0,om(a,null)}function om(a,d){a.F=Date.now(),Ta(a),a.B=nn(a.A);var p=a.B,v=a.S;Array.isArray(v)||(v=[String(v)]),vm(p.i,"t",v),a.C=0,p=a.j.L,a.h=new sm,a.g=Lm(a.j,p?d:null,!a.u),a.P>0&&(a.O=new Z0(c(a.Y,a,a.g),a.P)),d=a.V,p=a.g,v=a.ba;var D="readystatechange";Array.isArray(D)||(D&&(Kp[0]=D.toString()),D=Kp);for(let j=0;j<D.length;j++){const U=$p(p,D[j],v||d.handleEvent,!1,d.h||d);if(!U)break;d.g[U.key]=U}d=a.J?ye(a.J):{},a.u?(a.v||(a.v="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,d)):(a.v="GET",a.g.ea(a.B,a.v,null,d)),Ni(),nT(a.i,a.v,a.B,a.l,a.S,a.u)}Wn.prototype.ba=function(a){a=a.target;const d=this.O;d&&Qn(a)==3?d.j():this.Y(a)},Wn.prototype.Y=function(a){try{if(a==this.g)e:{const ee=Qn(this.g),Oe=this.g.ya(),ue=this.g.ca();if(!(ee<3)&&(ee!=3||this.g&&(this.h.h||this.g.la()||km(this.g)))){this.K||ee!=4||Oe==7||(Oe==8||ue<=0?Ni(3):Ni(2)),mc(this);var d=this.g.ca();this.X=d;var p=aT(this);if(this.o=d==200,rT(this.i,this.v,this.B,this.l,this.S,ee,d),this.o){if(this.U&&!this.L){t:{if(this.g){var v,D=this.g;if((v=D.g?D.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(v)){var j=v;break t}}j=null}if(a=j)As(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,gc(this,a);else{this.o=!1,this.m=3,ut(12),Hr(this),ji(this);break e}}if(this.R){a=!0;let ze;for(;!this.K&&this.C<p.length;)if(ze=lT(this,p),ze==fc){ee==4&&(this.m=4,ut(14),a=!1),As(this.i,this.l,null,"[Incomplete Response]");break}else if(ze==im){this.m=4,ut(15),As(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else As(this.i,this.l,ze,null),gc(this,ze);if(am(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ee!=4||p.length!=0||this.h.h||(this.m=1,ut(16),a=!1),this.o=this.o&&a,!a)As(this.i,this.l,p,"[Invalid Chunked Response]"),Hr(this),ji(this);else if(p.length>0&&!this.W){this.W=!0;var U=this.j;U.g==this&&U.aa&&!U.P&&(U.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),Sc(U),U.P=!0,ut(11))}}else As(this.i,this.l,p,null),gc(this,p);ee==4&&Hr(this),this.o&&!this.K&&(ee==4?Dm(this.j,this):(this.o=!1,Ta(this)))}else TT(this.g),d==400&&p.indexOf("Unknown SID")>0?(this.m=3,ut(12)):(this.m=0,ut(13)),Hr(this),ji(this)}}}catch{}finally{}};function aT(a){if(!am(a))return a.g.la();const d=km(a.g);if(d==="")return"";let p="";const v=d.length,D=Qn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Hr(a),ji(a),"";a.h.i=new o.TextDecoder}for(let j=0;j<v;j++)a.h.h=!0,p+=a.h.i.decode(d[j],{stream:!(D&&j==v-1)});return d.length=0,a.h.g+=p,a.C=0,a.h.g}function am(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function lT(a,d){var p=a.C,v=d.indexOf(`
`,p);return v==-1?fc:(p=Number(d.substring(p,v)),isNaN(p)?im:(v+=1,v+p>d.length?fc:(d=d.slice(v,v+p),a.C=v+p,d)))}Wn.prototype.cancel=function(){this.K=!0,Hr(this)};function Ta(a){a.T=Date.now()+a.H,lm(a,a.H)}function lm(a,d){if(a.D!=null)throw Error("WatchDog timer not null");a.D=bi(c(a.aa,a),d)}function mc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Wn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(sT(this.i,this.B),this.M!=2&&(Ni(),ut(17)),Hr(this),this.m=2,ji(this)):lm(this,this.T-a)};function ji(a){a.j.I==0||a.K||Dm(a.j,a)}function Hr(a){mc(a);var d=a.O;d&&typeof d.dispose=="function"&&d.dispose(),a.O=null,Qp(a.V),a.g&&(d=a.g,a.g=null,d.abort(),d.dispose())}function gc(a,d){try{var p=a.j;if(p.I!=0&&(p.g==a||yc(p.h,a))){if(!a.L&&yc(p.h,a)&&p.I==3){try{var v=p.Ba.g.parse(d)}catch{v=null}if(Array.isArray(v)&&v.length==3){var D=v;if(D[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)Ra(p),ka(p);else break e;Ic(p),ut(18)}}else p.xa=D[1],0<p.xa-p.K&&D[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=bi(c(p.Va,p),6e3));hm(p.h)<=1&&p.ta&&(p.ta=void 0)}else Wr(p,11)}else if((a.L||p.g==a)&&Ra(p),!C(d))for(D=p.Ba.g.parse(d),d=0;d<D.length;d++){let ue=D[d];const ze=ue[0];if(!(ze<=p.K))if(p.K=ze,ue=ue[1],p.I==2)if(ue[0]=="c"){p.M=ue[1],p.ba=ue[2];const rn=ue[3];rn!=null&&(p.ka=rn,p.j.info("VER="+p.ka));const Gr=ue[4];Gr!=null&&(p.za=Gr,p.j.info("SVER="+p.za));const Yn=ue[5];Yn!=null&&typeof Yn=="number"&&Yn>0&&(v=1.5*Yn,p.O=v,p.j.info("backChannelRequestTimeoutMs_="+v)),v=p;const Xn=a.g;if(Xn){const Pa=Xn.g?Xn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Pa){var j=v.h;j.g||Pa.indexOf("spdy")==-1&&Pa.indexOf("quic")==-1&&Pa.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(_c(j,j.h),j.h=null))}if(v.G){const Ac=Xn.g?Xn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ac&&(v.wa=Ac,fe(v.J,v.G,Ac))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),v=p;var U=a;if(v.na=Om(v,v.L?v.ba:null,v.W),U.L){dm(v.h,U);var ee=U,Oe=v.O;Oe&&(ee.H=Oe),ee.D&&(mc(ee),Ta(ee)),v.g=U}else Nm(v);p.i.length>0&&Ca(p)}else ue[0]!="stop"&&ue[0]!="close"||Wr(p,7);else p.I==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?Wr(p,7):Tc(p):ue[0]!="noop"&&p.l&&p.l.qa(ue),p.A=0)}}Ni(4)}catch{}}var uT=class{constructor(a,d){this.g=a,this.map=d}};function um(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function cm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function hm(a){return a.h?1:a.g?a.g.size:0}function yc(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function _c(a,d){a.g?a.g.add(d):a.h=d}function dm(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}um.prototype.cancel=function(){if(this.i=fm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function fm(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const p of a.g.values())d=d.concat(p.G);return d}return w(a.i)}var pm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function cT(a,d){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const v=a[p].indexOf("=");let D,j=null;v>=0?(D=a[p].substring(0,v),j=a[p].substring(v+1)):D=a[p],d(D,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function Gn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let d;a instanceof Gn?(this.l=a.l,Oi(this,a.j),this.o=a.o,this.g=a.g,Li(this,a.u),this.h=a.h,vc(this,wm(a.i)),this.m=a.m):a&&(d=String(a).match(pm))?(this.l=!1,Oi(this,d[1]||"",!0),this.o=Mi(d[2]||""),this.g=Mi(d[3]||"",!0),Li(this,d[4]),this.h=Mi(d[5]||"",!0),vc(this,d[6]||"",!0),this.m=Mi(d[7]||"")):(this.l=!1,this.i=new Ui(null,this.l))}Gn.prototype.toString=function(){const a=[];var d=this.j;d&&a.push(Fi(d,mm,!0),":");var p=this.g;return(p||d=="file")&&(a.push("//"),(d=this.o)&&a.push(Fi(d,mm,!0),"@"),a.push(Vi(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Fi(p,p.charAt(0)=="/"?fT:dT,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Fi(p,mT)),a.join("")},Gn.prototype.resolve=function(a){const d=nn(this);let p=!!a.j;p?Oi(d,a.j):p=!!a.o,p?d.o=a.o:p=!!a.g,p?d.g=a.g:p=a.u!=null;var v=a.h;if(p)Li(d,a.u);else if(p=!!a.h){if(v.charAt(0)!="/")if(this.g&&!this.h)v="/"+v;else{var D=d.h.lastIndexOf("/");D!=-1&&(v=d.h.slice(0,D+1)+v)}if(D=v,D==".."||D==".")v="";else if(D.indexOf("./")!=-1||D.indexOf("/.")!=-1){v=D.lastIndexOf("/",0)==0,D=D.split("/");const j=[];for(let U=0;U<D.length;){const ee=D[U++];ee=="."?v&&U==D.length&&j.push(""):ee==".."?((j.length>1||j.length==1&&j[0]!="")&&j.pop(),v&&U==D.length&&j.push("")):(j.push(ee),v=!0)}v=j.join("/")}else v=D}return p?d.h=v:p=a.i.toString()!=="",p?vc(d,wm(a.i)):p=!!a.m,p&&(d.m=a.m),d};function nn(a){return new Gn(a)}function Oi(a,d,p){a.j=p?Mi(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function Li(a,d){if(d){if(d=Number(d),isNaN(d)||d<0)throw Error("Bad port number "+d);a.u=d}else a.u=null}function vc(a,d,p){d instanceof Ui?(a.i=d,gT(a.i,a.l)):(p||(d=Fi(d,pT)),a.i=new Ui(d,a.l))}function fe(a,d,p){a.i.set(d,p)}function Ia(a){return fe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Mi(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Fi(a,d,p){return typeof a=="string"?(a=encodeURI(a).replace(d,hT),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function hT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var mm=/[#\/\?@]/g,dT=/[#\?:]/g,fT=/[#\?]/g,pT=/[#\?@]/g,mT=/#/g;function Ui(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function qr(a){a.g||(a.g=new Map,a.h=0,a.i&&cT(a.i,function(d,p){a.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}t=Ui.prototype,t.add=function(a,d){qr(this),this.i=null,a=ks(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(d),this.h+=1,this};function gm(a,d){qr(a),d=ks(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function ym(a,d){return qr(a),d=ks(a,d),a.g.has(d)}t.forEach=function(a,d){qr(this),this.g.forEach(function(p,v){p.forEach(function(D){a.call(d,D,v,this)},this)},this)};function _m(a,d){qr(a);let p=[];if(typeof d=="string")ym(a,d)&&(p=p.concat(a.g.get(ks(a,d))));else for(a=Array.from(a.g.values()),d=0;d<a.length;d++)p=p.concat(a[d]);return p}t.set=function(a,d){return qr(this),this.i=null,a=ks(this,a),ym(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=_m(this,a),a.length>0?String(a[0]):d):d};function vm(a,d,p){gm(a,d),p.length>0&&(a.i=null,a.g.set(ks(a,d),w(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(let v=0;v<d.length;v++){var p=d[v];const D=Vi(p);p=_m(this,p);for(let j=0;j<p.length;j++){let U=D;p[j]!==""&&(U+="="+Vi(p[j])),a.push(U)}}return this.i=a.join("&")};function wm(a){const d=new Ui;return d.i=a.i,a.g&&(d.g=new Map(a.g),d.h=a.h),d}function ks(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function gT(a,d){d&&!a.j&&(qr(a),a.i=null,a.g.forEach(function(p,v){const D=v.toLowerCase();v!=D&&(gm(this,v),vm(this,D,p))},a)),a.j=d}function yT(a,d){const p=new Di;if(o.Image){const v=new Image;v.onload=f(Kn,p,"TestLoadImage: loaded",!0,d,v),v.onerror=f(Kn,p,"TestLoadImage: error",!1,d,v),v.onabort=f(Kn,p,"TestLoadImage: abort",!1,d,v),v.ontimeout=f(Kn,p,"TestLoadImage: timeout",!1,d,v),o.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=a}else d(!1)}function _T(a,d){const p=new Di,v=new AbortController,D=setTimeout(()=>{v.abort(),Kn(p,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:v.signal}).then(j=>{clearTimeout(D),j.ok?Kn(p,"TestPingServer: ok",!0,d):Kn(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(D),Kn(p,"TestPingServer: error",!1,d)})}function Kn(a,d,p,v,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),v(p)}catch{}}function vT(){this.g=new tT}function wc(a){this.i=a.Sb||null,this.h=a.ab||!1}m(wc,Yp),wc.prototype.g=function(){return new Sa(this.i,this.h)};function Sa(a,d){Je.call(this),this.H=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(Sa,Je),t=Sa.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=d,this.readyState=1,Bi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const d={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(d.body=a),(this.H||o).fetch(new Request(this.D,d)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,zi(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Bi(this)),this.g&&(this.readyState=3,Bi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Em(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Em(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.B.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?zi(this):Bi(this),this.readyState==3&&Em(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,zi(this))},t.Na=function(a){this.g&&(this.response=a,zi(this))},t.ga=function(){this.g&&zi(this)};function zi(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Bi(a)}t.setRequestHeader=function(a,d){this.A.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=d.next();return a.join(`\r
`)};function Bi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Sa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Tm(a){let d="";return Q(a,function(p,v){d+=v,d+=":",d+=p,d+=`\r
`}),d}function Ec(a,d,p){e:{for(v in p){var v=!1;break e}v=!0}v||(p=Tm(p),typeof a=="string"?p!=null&&Vi(p):fe(a,d,p))}function Se(a){Je.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(Se,Je);var wT=/^https?$/i,ET=["POST","PUT"];t=Se.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,d,p,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():rm.g(),this.g.onreadystatechange=g(c(this.Ca,this));try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(j){Im(this,j);return}if(a=p||"",p=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var D in v)p.set(D,v[D]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const j of v.keys())p.set(j,v.get(j));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(p.keys()).find(j=>j.toLowerCase()=="content-type"),D=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(ET,d,void 0)>=0)||v||D||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,U]of p)this.g.setRequestHeader(j,U);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(j){Im(this,j)}};function Im(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.o=5,Sm(a),Aa(a)}function Sm(a){a.A||(a.A=!0,lt(a,"complete"),lt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,lt(this,"complete"),lt(this,"abort"),Aa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Aa(this,!0)),Se.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Am(this):this.Xa())},t.Xa=function(){Am(this)};function Am(a){if(a.h&&typeof i<"u"){if(a.v&&Qn(a)==4)setTimeout(a.Ca.bind(a),0);else if(lt(a,"readystatechange"),Qn(a)==4){a.h=!1;try{const j=a.ca();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var v;if(v=j===0){let U=String(a.D).match(pm)[1]||null;!U&&o.self&&o.self.location&&(U=o.self.location.protocol.slice(0,-1)),v=!wT.test(U?U.toLowerCase():"")}p=v}if(p)lt(a,"complete"),lt(a,"success");else{a.o=6;try{var D=Qn(a)>2?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.ca()+"]",Sm(a)}}finally{Aa(a)}}}}function Aa(a,d){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,d||lt(a,"ready");try{p.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Qn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Qn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),eT(d)}};function km(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function TT(a){const d={};a=(a.g&&Qn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<a.length;v++){if(C(a[v]))continue;var p=oT(a[v]);const D=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const j=d[D]||[];d[D]=j,j.push(p)}Z(d,function(v){return v.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function $i(a,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||d}function Cm(a){this.za=0,this.i=[],this.j=new Di,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=$i("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=$i("baseRetryDelayMs",5e3,a),this.Za=$i("retryDelaySeedMs",1e4,a),this.Ta=$i("forwardChannelMaxRetries",2,a),this.va=$i("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new um(a&&a.concurrentRequestLimit),this.Ba=new vT,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Cm.prototype,t.ka=8,t.I=1,t.connect=function(a,d,p,v){ut(0),this.W=a,this.H=d||{},p&&v!==void 0&&(this.H.OSID=p,this.H.OAID=v),this.F=this.X,this.J=Om(this,null,this.W),Ca(this)};function Tc(a){if(Rm(a),a.I==3){var d=a.V++,p=nn(a.J);if(fe(p,"SID",a.M),fe(p,"RID",d),fe(p,"TYPE","terminate"),Hi(a,p),d=new Wn(a,a.j,d),d.M=2,d.A=Ia(nn(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(d.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=d.A,p=!0),p||(d.g=Lm(d.j,null),d.g.ea(d.A)),d.F=Date.now(),Ta(d)}jm(a)}function ka(a){a.g&&(Sc(a),a.g.cancel(),a.g=null)}function Rm(a){ka(a),a.v&&(o.clearTimeout(a.v),a.v=null),Ra(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Ca(a){if(!cm(a.h)&&!a.m){a.m=!0;var d=a.Ea;x||_(),O||(x(),O=!0),y.add(d,a),a.D=0}}function IT(a,d){return hm(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=d.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=bi(c(a.Ea,a,d),Vm(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const D=new Wn(this,this.j,a);let j=this.o;if(this.U&&(j?(j=ye(j),zr(j,this.U)):j=this.U),this.u!==null||this.R||(D.J=j,j=null),this.S)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var v=this.i[p];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(d+=v,d>4096){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=Pm(this,D,d),p=nn(this.J),fe(p,"RID",a),fe(p,"CVER",22),this.G&&fe(p,"X-HTTP-Session-Id",this.G),Hi(this,p),j&&(this.R?d="headers="+Vi(Tm(j))+"&"+d:this.u&&Ec(p,this.u,j)),_c(this.h,D),this.Ra&&fe(p,"TYPE","init"),this.S?(fe(p,"$req",d),fe(p,"SID","null"),D.U=!0,pc(D,p,null)):pc(D,p,d),this.I=2}}else this.I==3&&(a?xm(this,a):this.i.length==0||cm(this.h)||xm(this))};function xm(a,d){var p;d?p=d.l:p=a.V++;const v=nn(a.J);fe(v,"SID",a.M),fe(v,"RID",p),fe(v,"AID",a.K),Hi(a,v),a.u&&a.o&&Ec(v,a.u,a.o),p=new Wn(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),d&&(a.i=d.G.concat(a.i)),d=Pm(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),_c(a.h,p),pc(p,v,d)}function Hi(a,d){a.H&&Q(a.H,function(p,v){fe(d,v,p)}),a.l&&Q({},function(p,v){fe(d,v,p)})}function Pm(a,d,p){p=Math.min(a.i.length,p);const v=a.l?c(a.l.Ka,a.l,a):null;e:{var D=a.i;let ee=-1;for(;;){const Oe=["count="+p];ee==-1?p>0?(ee=D[0].g,Oe.push("ofs="+ee)):ee=0:Oe.push("ofs="+ee);let ue=!0;for(let ze=0;ze<p;ze++){var j=D[ze].g;const rn=D[ze].map;if(j-=ee,j<0)ee=Math.max(0,D[ze].g-100),ue=!1;else try{j="req"+j+"_"||"";try{var U=rn instanceof Map?rn:Object.entries(rn);for(const[Gr,Yn]of U){let Xn=Yn;l(Yn)&&(Xn=uc(Yn)),Oe.push(j+Gr+"="+encodeURIComponent(Xn))}}catch(Gr){throw Oe.push(j+"type="+encodeURIComponent("_badmap")),Gr}}catch{v&&v(rn)}}if(ue){U=Oe.join("&");break e}}U=void 0}return a=a.i.splice(0,p),d.G=a,U}function Nm(a){if(!a.g&&!a.v){a.Y=1;var d=a.Da;x||_(),O||(x(),O=!0),y.add(d,a),a.A=0}}function Ic(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=bi(c(a.Da,a),Vm(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,bm(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=bi(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ut(10),ka(this),bm(this))};function Sc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function bm(a){a.g=new Wn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var d=nn(a.na);fe(d,"RID","rpc"),fe(d,"SID",a.M),fe(d,"AID",a.K),fe(d,"CI",a.F?"0":"1"),!a.F&&a.ia&&fe(d,"TO",a.ia),fe(d,"TYPE","xmlhttp"),Hi(a,d),a.u&&a.o&&Ec(d,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=Ia(nn(d)),p.u=null,p.R=!0,om(p,a)}t.Va=function(){this.C!=null&&(this.C=null,ka(this),Ic(this),ut(19))};function Ra(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Dm(a,d){var p=null;if(a.g==d){Ra(a),Sc(a),a.g=null;var v=2}else if(yc(a.h,d))p=d.G,dm(a.h,d),v=1;else return;if(a.I!=0){if(d.o)if(v==1){p=d.u?d.u.length:0,d=Date.now()-d.F;var D=a.D;v=wa(),lt(v,new tm(v,p)),Ca(a)}else Nm(a);else if(D=d.m,D==3||D==0&&d.X>0||!(v==1&&IT(a,d)||v==2&&Ic(a)))switch(p&&p.length>0&&(d=a.h,d.i=d.i.concat(p)),D){case 1:Wr(a,5);break;case 4:Wr(a,10);break;case 3:Wr(a,6);break;default:Wr(a,2)}}}function Vm(a,d){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*d}function Wr(a,d){if(a.j.info("Error code "+d),d==2){var p=c(a.bb,a),v=a.Ua;const D=!v;v=new Gn(v||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Oi(v,"https"),Ia(v),D?yT(v.toString(),p):_T(v.toString(),p)}else ut(2);a.I=0,a.l&&a.l.pa(d),jm(a),Rm(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function jm(a){if(a.I=0,a.ja=[],a.l){const d=fm(a.h);(d.length!=0||a.i.length!=0)&&(I(a.ja,d),I(a.ja,a.i),a.h.i.length=0,w(a.i),a.i.length=0),a.l.oa()}}function Om(a,d,p){var v=p instanceof Gn?nn(p):new Gn(p);if(v.g!="")d&&(v.g=d+"."+v.g),Li(v,v.u);else{var D=o.location;v=D.protocol,d=d?d+"."+D.hostname:D.hostname,D=+D.port;const j=new Gn(null);v&&Oi(j,v),d&&(j.g=d),D&&Li(j,D),p&&(j.h=p),v=j}return p=a.G,d=a.wa,p&&d&&fe(v,p,d),fe(v,"VER",a.ka),Hi(a,v),v}function Lm(a,d,p){if(d&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Aa&&!a.ma?new Se(new wc({ab:p})):new Se(a.ma),d.Fa(a.L),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Mm(){}t=Mm.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function xa(){}xa.prototype.g=function(a,d){return new St(a,d)};function St(a,d){Je.call(this),this.g=new Cm(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.sa&&(a?a["X-WebChannel-Client-Profile"]=d.sa:a={"X-WebChannel-Client-Profile":d.sa}),this.g.U=a,(a=d&&d.Qb)&&!C(a)&&(this.g.u=a),this.A=d&&d.supportsCrossDomainXhr||!1,this.v=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!C(d)&&(this.g.G=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new Cs(this)}m(St,Je),St.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){Tc(this.g)},St.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=uc(a),a=p);d.i.push(new uT(d.Ya++,a)),d.I==3&&Ca(d)},St.prototype.N=function(){this.g.l=null,delete this.j,Tc(this.g),delete this.g,St.Z.N.call(this)};function Fm(a){cc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const p in d){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}m(Fm,cc);function Um(){hc.call(this),this.status=1}m(Um,hc);function Cs(a){this.g=a}m(Cs,Mm),Cs.prototype.ra=function(){lt(this.g,"a")},Cs.prototype.qa=function(a){lt(this.g,new Fm(a))},Cs.prototype.pa=function(a){lt(this.g,new Um)},Cs.prototype.oa=function(){lt(this.g,"b")},xa.prototype.createWebChannel=xa.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,yE=function(){return new xa},gE=function(){return wa()},mE=$r,fd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ea.NO_ERROR=0,Ea.TIMEOUT=8,Ea.HTTP_ERROR=6,pl=Ea,nm.COMPLETE="complete",pE=nm,Xp.EventType=Pi,Pi.OPEN="a",Pi.CLOSE="b",Pi.ERROR="c",Pi.MESSAGE="d",Je.prototype.listen=Je.prototype.J,io=Xp,Se.prototype.listenOnce=Se.prototype.K,Se.prototype.getLastError=Se.prototype.Ha,Se.prototype.getLastErrorCode=Se.prototype.ya,Se.prototype.getStatus=Se.prototype.ca,Se.prototype.getResponseJson=Se.prototype.La,Se.prototype.getResponseText=Se.prototype.la,Se.prototype.send=Se.prototype.ea,Se.prototype.setWithCredentials=Se.prototype.Fa,fE=Se}).apply(typeof Ka<"u"?Ka:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */let Ii="12.8.0";function sC(t){Ii=t}/**
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
 */const ps=new Ff("@firebase/firestore");function xs(){return ps.logLevel}function H(t,...e){if(ps.logLevel<=ne.DEBUG){const n=e.map(Bf);ps.debug(`Firestore (${Ii}): ${t}`,...n)}}function zn(t,...e){if(ps.logLevel<=ne.ERROR){const n=e.map(Bf);ps.error(`Firestore (${Ii}): ${t}`,...n)}}function hi(t,...e){if(ps.logLevel<=ne.WARN){const n=e.map(Bf);ps.warn(`Firestore (${Ii}): ${t}`,...n)}}function Bf(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function G(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,_E(t,r,n)}function _E(t,e,n){let r=`FIRESTORE (${Ii}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw zn(r),new Error(r)}function ae(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||_E(e,s,r)}function J(t,e){return t}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends Tn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Vn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class vE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class iC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(nt.UNAUTHENTICATED))}shutdown(){}}class oC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class aC{constructor(e){this.t=e,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ae(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Vn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Vn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Vn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ae(typeof r.accessToken=="string",31837,{l:r}),new vE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ae(e===null||typeof e=="string",2055,{h:e}),new nt(e)}}class lC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=nt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class uC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new lC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ot(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ae(this.o===void 0,3512);const r=i=>{i.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new hy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ae(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new hy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function hC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class $f{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=hC(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function re(t,e){return t<e?-1:t>e?1:0}function pd(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return sh(s)===sh(i)?re(s,i):sh(s)?1:-1}return re(t.length,e.length)}const dC=55296,fC=57343;function sh(t){const e=t.charCodeAt(0);return e>=dC&&e<=fC}function di(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const dy="__name__";class an{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&G(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return an.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof an?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=an.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return re(e.length,n.length)}static compareSegments(e,n){const r=an.isNumericId(e),s=an.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?an.extractNumericId(e).compare(an.extractNumericId(n)):pd(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Tr.fromString(e.substring(4,e.length-2))}}class he extends an{construct(e,n,r){return new he(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new he(n)}static emptyPath(){return new he([])}}const pC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends an{construct(e,n,r){return new Ge(e,n,r)}static isValidIdentifier(e){return pC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===dy}static keyField(){return new Ge([dy])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new z(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new z(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new z(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new z(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(n)}static emptyPath(){return new Ge([])}}/**
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
 */function wE(t,e,n){if(!n)throw new z(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function mC(t,e,n,r){if(e===!0&&r===!0)throw new z(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function fy(t){if(!W.isDocumentKey(t))throw new z(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function py(t){if(W.isDocumentKey(t))throw new z(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function EE(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Nu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G(12329,{type:typeof t})}function _n(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Nu(t);throw new z(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Ve(t,e){const n={typeString:t};return e&&(n.value=e),n}function ua(t,e){if(!EE(t))throw new z(L.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new z(L.INVALID_ARGUMENT,n);return!0}/**
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
 */const my=-62135596800,gy=1e6;class me{static now(){return me.fromMillis(Date.now())}static fromDate(e){return me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*gy);return new me(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<my)throw new z(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/gy}_compareTo(e){return this.seconds===e.seconds?re(this.nanoseconds,e.nanoseconds):re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:me._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ua(e,me._jsonSchema))return new me(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-my;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}me._jsonSchemaVersion="firestore/timestamp/1.0",me._jsonSchema={type:Ve("string",me._jsonSchemaVersion),seconds:Ve("number"),nanoseconds:Ve("number")};/**
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
 */const qo=-1;function gC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Y.fromTimestamp(r===1e9?new me(n+1,0):new me(n,r));return new Cr(s,W.empty(),e)}function yC(t){return new Cr(t.readTime,t.key,qo)}class Cr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Cr(Y.min(),W.empty(),qo)}static max(){return new Cr(Y.max(),W.empty(),qo)}}function _C(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:re(t.largestBatchId,e.largestBatchId))}/**
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
 */const vC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class wC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Si(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==vC)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new M((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new M((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function EC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ai(t){return t.name==="IndexedDbTransactionError"}/**
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
 */const Hf=-1;function Du(t){return t==null}function Yl(t){return t===0&&1/t==-1/0}function TC(t){return typeof t=="number"&&Number.isInteger(t)&&!Yl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const TE="";function IC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=yy(e)),e=SC(t.get(n),e);return yy(e)}function SC(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case TE:n+="";break;default:n+=i}}return n}function yy(t){return t+TE+""}/**
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
 */function _y(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Lr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function IE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ie{constructor(e,n){this.comparator=e,this.root=n||We.EMPTY}insert(e,n){return new Ie(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,We.BLACK,null,null))}remove(e){return new Ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,We.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Qa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Qa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Qa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Qa(this.root,e,this.comparator,!0)}}class Qa{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class We{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??We.RED,this.left=s??We.EMPTY,this.right=i??We.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new We(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return We.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw G(43730,{key:this.key,value:this.value});if(this.right.isRed())throw G(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw G(27949);return e+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw G(57766)}get value(){throw G(16141)}get color(){throw G(16727)}get left(){throw G(29726)}get right(){throw G(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new We(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Fe{constructor(e){this.comparator=e,this.data=new Ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new vy(this.data.getIterator())}getIteratorFrom(e){return new vy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Fe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Fe(this.comparator);return n.data=e,n}}class vy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class SE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ye{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new SE("Invalid base64 string: "+i):i}}(e);return new Ye(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Ye(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ye.EMPTY_BYTE_STRING=new Ye("");const AC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rr(t){if(ae(!!t,39018),typeof t=="string"){let e=0;const n=AC.exec(t);if(ae(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:xe(t.seconds),nanos:xe(t.nanos)}}function xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function xr(t){return typeof t=="string"?Ye.fromBase64String(t):Ye.fromUint8Array(t)}/**
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
 */const AE="server_timestamp",kE="__type__",CE="__previous_value__",RE="__local_write_time__";function qf(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[kE])==null?void 0:r.stringValue)===AE}function Vu(t){const e=t.mapValue.fields[CE];return qf(e)?Vu(e):e}function Wo(t){const e=Rr(t.mapValue.fields[RE].timestampValue);return new me(e.seconds,e.nanos)}/**
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
 */class kC{constructor(e,n,r,s,i,o,l,u,c,f,m){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=f,this.apiKey=m}}const Xl="(default)";class Go{constructor(e,n){this.projectId=e,this.database=n||Xl}static empty(){return new Go("","")}get isDefaultDatabase(){return this.database===Xl}isEqual(e){return e instanceof Go&&e.projectId===this.projectId&&e.database===this.database}}function CC(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new z(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Go(t.options.projectId,e)}/**
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
 */const xE="__type__",RC="__max__",Ya={mapValue:{}},PE="__vector__",Jl="value";function Pr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?qf(t)?4:PC(t)?9007199254740991:xC(t)?10:11:G(28295,{value:t})}function vn(t,e){if(t===e)return!0;const n=Pr(t);if(n!==Pr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Wo(t).isEqual(Wo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Rr(s.timestampValue),l=Rr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return xr(s.bytesValue).isEqual(xr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return xe(s.geoPointValue.latitude)===xe(i.geoPointValue.latitude)&&xe(s.geoPointValue.longitude)===xe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return xe(s.integerValue)===xe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=xe(s.doubleValue),l=xe(i.doubleValue);return o===l?Yl(o)===Yl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return di(t.arrayValue.values||[],e.arrayValue.values||[],vn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(_y(o)!==_y(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!vn(o[u],l[u])))return!1;return!0}(t,e);default:return G(52216,{left:t})}}function Ko(t,e){return(t.values||[]).find(n=>vn(n,e))!==void 0}function fi(t,e){if(t===e)return 0;const n=Pr(t),r=Pr(e);if(n!==r)return re(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return re(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=xe(i.integerValue||i.doubleValue),u=xe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return wy(t.timestampValue,e.timestampValue);case 4:return wy(Wo(t),Wo(e));case 5:return pd(t.stringValue,e.stringValue);case 6:return function(i,o){const l=xr(i),u=xr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=re(l[c],u[c]);if(f!==0)return f}return re(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=re(xe(i.latitude),xe(o.latitude));return l!==0?l:re(xe(i.longitude),xe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Ey(t.arrayValue,e.arrayValue);case 10:return function(i,o){var g,w,I,P;const l=i.fields||{},u=o.fields||{},c=(g=l[Jl])==null?void 0:g.arrayValue,f=(w=u[Jl])==null?void 0:w.arrayValue,m=re(((I=c==null?void 0:c.values)==null?void 0:I.length)||0,((P=f==null?void 0:f.values)==null?void 0:P.length)||0);return m!==0?m:Ey(c,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Ya.mapValue&&o===Ya.mapValue)return 0;if(i===Ya.mapValue)return 1;if(o===Ya.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const g=pd(u[m],f[m]);if(g!==0)return g;const w=fi(l[u[m]],c[f[m]]);if(w!==0)return w}return re(u.length,f.length)}(t.mapValue,e.mapValue);default:throw G(23264,{he:n})}}function wy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return re(t,e);const n=Rr(t),r=Rr(e),s=re(n.seconds,r.seconds);return s!==0?s:re(n.nanos,r.nanos)}function Ey(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=fi(n[s],r[s]);if(i)return i}return re(n.length,r.length)}function pi(t){return md(t)}function md(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Rr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return xr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=md(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${md(n.fields[o])}`;return s+"}"}(t.mapValue):G(61005,{value:t})}function ml(t){switch(Pr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Vu(t);return e?16+ml(e):16;case 5:return 2*t.stringValue.length;case 6:return xr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+ml(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Lr(r.fields,(i,o)=>{s+=i.length+ml(o)}),s}(t.mapValue);default:throw G(13486,{value:t})}}function Ty(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function gd(t){return!!t&&"integerValue"in t}function Wf(t){return!!t&&"arrayValue"in t}function Iy(t){return!!t&&"nullValue"in t}function Sy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function gl(t){return!!t&&"mapValue"in t}function xC(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[xE])==null?void 0:r.stringValue)===PE}function wo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Lr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=wo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=wo(t.arrayValue.values[n]);return e}return{...t}}function PC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===RC}/**
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
 */class _t{constructor(e){this.value=e}static empty(){return new _t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!gl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=wo(n)}setAll(e){let n=Ge.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=wo(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());gl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return vn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];gl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Lr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new _t(wo(this.value))}}function NE(t){const e=[];return Lr(t.fields,(n,r)=>{const s=new Ge([n]);if(gl(r)){const i=NE(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ct(e)}/**
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
 */class st{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new st(e,0,Y.min(),Y.min(),Y.min(),_t.empty(),0)}static newFoundDocument(e,n,r,s){return new st(e,1,n,Y.min(),r,s,0)}static newNoDocument(e,n){return new st(e,2,n,Y.min(),Y.min(),_t.empty(),0)}static newUnknownDocument(e,n){return new st(e,3,n,Y.min(),Y.min(),_t.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof st&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new st(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Zl{constructor(e,n){this.position=e,this.inclusive=n}}function Ay(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),n.key):r=fi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function ky(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!vn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Qo{constructor(e,n="asc"){this.field=e,this.dir=n}}function NC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class bE{}class De extends bE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new DC(e,n,r):n==="array-contains"?new OC(e,r):n==="in"?new LC(e,r):n==="not-in"?new MC(e,r):n==="array-contains-any"?new FC(e,r):new De(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new VC(e,r):new jC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(fi(n,this.value)):n!==null&&Pr(this.value)===Pr(n)&&this.matchesComparison(fi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class en extends bE{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new en(e,n)}matches(e){return DE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function DE(t){return t.op==="and"}function VE(t){return bC(t)&&DE(t)}function bC(t){for(const e of t.filters)if(e instanceof en)return!1;return!0}function yd(t){if(t instanceof De)return t.field.canonicalString()+t.op.toString()+pi(t.value);if(VE(t))return t.filters.map(e=>yd(e)).join(",");{const e=t.filters.map(n=>yd(n)).join(",");return`${t.op}(${e})`}}function jE(t,e){return t instanceof De?function(r,s){return s instanceof De&&r.op===s.op&&r.field.isEqual(s.field)&&vn(r.value,s.value)}(t,e):t instanceof en?function(r,s){return s instanceof en&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&jE(o,s.filters[l]),!0):!1}(t,e):void G(19439)}function OE(t){return t instanceof De?function(n){return`${n.field.canonicalString()} ${n.op} ${pi(n.value)}`}(t):t instanceof en?function(n){return n.op.toString()+" {"+n.getFilters().map(OE).join(" ,")+"}"}(t):"Filter"}class DC extends De{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class VC extends De{constructor(e,n){super(e,"in",n),this.keys=LE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class jC extends De{constructor(e,n){super(e,"not-in",n),this.keys=LE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function LE(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class OC extends De{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Wf(n)&&Ko(n.arrayValue,this.value)}}class LC extends De{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ko(this.value.arrayValue,n)}}class MC extends De{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ko(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ko(this.value.arrayValue,n)}}class FC extends De{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Wf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ko(this.value.arrayValue,r))}}/**
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
 */class UC{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function Cy(t,e=null,n=[],r=[],s=null,i=null,o=null){return new UC(t,e,n,r,s,i,o)}function Gf(t){const e=J(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>yd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Du(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>pi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>pi(r)).join(",")),e.Te=n}return e.Te}function Kf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!NC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!jE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ky(t.startAt,e.startAt)&&ky(t.endAt,e.endAt)}function _d(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ki{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function zC(t,e,n,r,s,i,o,l){return new ki(t,e,n,r,s,i,o,l)}function Qf(t){return new ki(t)}function Ry(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function BC(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function ME(t){return t.collectionGroup!==null}function Eo(t){const e=J(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Fe(Ge.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Qo(i,r))}),n.has(Ge.keyField().canonicalString())||e.Ie.push(new Qo(Ge.keyField(),r))}return e.Ie}function fn(t){const e=J(t);return e.Ee||(e.Ee=$C(e,Eo(t))),e.Ee}function $C(t,e){if(t.limitType==="F")return Cy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Qo(s.field,i)});const n=t.endAt?new Zl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Zl(t.startAt.position,t.startAt.inclusive):null;return Cy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function vd(t,e){const n=t.filters.concat([e]);return new ki(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function HC(t,e){const n=t.explicitOrderBy.concat([e]);return new ki(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function wd(t,e,n){return new ki(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ju(t,e){return Kf(fn(t),fn(e))&&t.limitType===e.limitType}function FE(t){return`${Gf(fn(t))}|lt:${t.limitType}`}function Ps(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>OE(s)).join(", ")}]`),Du(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>pi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>pi(s)).join(",")),`Target(${r})`}(fn(t))}; limitType=${t.limitType})`}function Ou(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):W.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Eo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const c=Ay(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Eo(r),s)||r.endAt&&!function(o,l,u){const c=Ay(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Eo(r),s))}(t,e)}function qC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function UE(t){return(e,n)=>{let r=!1;for(const s of Eo(t)){const i=WC(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function WC(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),c=l.data.field(i);return u!==null&&c!==null?fi(u,c):G(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G(19790,{direction:t.dir})}}/**
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
 */class Es{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Lr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return IE(this.inner)}size(){return this.innerSize}}/**
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
 */const GC=new Ie(W.comparator);function Bn(){return GC}const zE=new Ie(W.comparator);function oo(...t){let e=zE;for(const n of t)e=e.insert(n.key,n);return e}function BE(t){let e=zE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function es(){return To()}function $E(){return To()}function To(){return new Es(t=>t.toString(),(t,e)=>t.isEqual(e))}const KC=new Ie(W.comparator),QC=new Fe(W.comparator);function se(...t){let e=QC;for(const n of t)e=e.add(n);return e}const YC=new Fe(re);function XC(){return YC}/**
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
 */function Yf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yl(e)?"-0":e}}function HE(t){return{integerValue:""+t}}function JC(t,e){return TC(e)?HE(e):Yf(t,e)}/**
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
 */class Lu{constructor(){this._=void 0}}function ZC(t,e,n){return t instanceof Yo?function(s,i){const o={fields:{[kE]:{stringValue:AE},[RE]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&qf(i)&&(i=Vu(i)),i&&(o.fields[CE]=i),{mapValue:o}}(n,e):t instanceof Xo?WE(t,e):t instanceof Jo?GE(t,e):function(s,i){const o=qE(s,i),l=xy(o)+xy(s.Ae);return gd(o)&&gd(s.Ae)?HE(l):Yf(s.serializer,l)}(t,e)}function eR(t,e,n){return t instanceof Xo?WE(t,e):t instanceof Jo?GE(t,e):n}function qE(t,e){return t instanceof eu?function(r){return gd(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Yo extends Lu{}class Xo extends Lu{constructor(e){super(),this.elements=e}}function WE(t,e){const n=KE(e);for(const r of t.elements)n.some(s=>vn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Jo extends Lu{constructor(e){super(),this.elements=e}}function GE(t,e){let n=KE(e);for(const r of t.elements)n=n.filter(s=>!vn(s,r));return{arrayValue:{values:n}}}class eu extends Lu{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function xy(t){return xe(t.integerValue||t.doubleValue)}function KE(t){return Wf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class tR{constructor(e,n){this.field=e,this.transform=n}}function nR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Xo&&s instanceof Xo||r instanceof Jo&&s instanceof Jo?di(r.elements,s.elements,vn):r instanceof eu&&s instanceof eu?vn(r.Ae,s.Ae):r instanceof Yo&&s instanceof Yo}(t.transform,e.transform)}class rR{constructor(e,n){this.version=e,this.transformResults=n}}class It{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new It}static exists(e){return new It(void 0,e)}static updateTime(e){return new It(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function yl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Mu{}function QE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Fu(t.key,It.none()):new ca(t.key,t.data,It.none());{const n=t.data,r=_t.empty();let s=new Fe(Ge.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Mr(t.key,r,new Ct(s.toArray()),It.none())}}function sR(t,e,n){t instanceof ca?function(s,i,o){const l=s.value.clone(),u=Ny(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Mr?function(s,i,o){if(!yl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Ny(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(YE(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Io(t,e,n,r){return t instanceof ca?function(i,o,l,u){if(!yl(i.precondition,o))return l;const c=i.value.clone(),f=by(i.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Mr?function(i,o,l,u){if(!yl(i.precondition,o))return l;const c=by(i.fieldTransforms,u,o),f=o.data;return f.setAll(YE(i)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,l){return yl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function iR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=qE(r.transform,s||null);i!=null&&(n===null&&(n=_t.empty()),n.set(r.field,i))}return n||null}function Py(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&di(r,s,(i,o)=>nR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ca extends Mu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Mr extends Mu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function YE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ny(t,e,n){const r=new Map;ae(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,eR(o,l,n[s]))}return r}function by(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,ZC(i,o,e))}return r}class Fu extends Mu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class oR extends Mu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class aR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&sR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Io(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Io(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=$E();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=QE(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&di(this.mutations,e.mutations,(n,r)=>Py(n,r))&&di(this.baseMutations,e.baseMutations,(n,r)=>Py(n,r))}}class Xf{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ae(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return KC}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Xf(e,n,r,s)}}/**
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
 */class lR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class uR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ne,ie;function cR(t){switch(t){case L.OK:return G(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return G(15467,{code:t})}}function XE(t){if(t===void 0)return zn("GRPC error has no .code"),L.UNKNOWN;switch(t){case Ne.OK:return L.OK;case Ne.CANCELLED:return L.CANCELLED;case Ne.UNKNOWN:return L.UNKNOWN;case Ne.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Ne.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Ne.INTERNAL:return L.INTERNAL;case Ne.UNAVAILABLE:return L.UNAVAILABLE;case Ne.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Ne.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Ne.NOT_FOUND:return L.NOT_FOUND;case Ne.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Ne.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Ne.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Ne.ABORTED:return L.ABORTED;case Ne.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Ne.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Ne.DATA_LOSS:return L.DATA_LOSS;default:return G(39323,{code:t})}}(ie=Ne||(Ne={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function hR(){return new TextEncoder}/**
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
 */const dR=new Tr([4294967295,4294967295],0);function Dy(t){const e=hR().encode(t),n=new dE;return n.update(e),new Uint8Array(n.digest())}function Vy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Tr([n,r],0),new Tr([s,i],0)]}class Jf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ao(`Invalid padding: ${n}`);if(r<0)throw new ao(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ao(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ao(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Tr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Tr.fromNumber(r)));return s.compare(dR)===1&&(s=new Tr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Dy(e),[r,s]=Vy(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Jf(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=Dy(e),[r,s]=Vy(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ao extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Uu{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ha.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Uu(Y.min(),s,new Ie(re),Bn(),se())}}class ha{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ha(r,n,se(),se(),se())}}/**
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
 */class _l{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.De=s}}class JE{constructor(e,n){this.targetId=e,this.Ce=n}}class ZE{constructor(e,n,r=Ye.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class jy{constructor(){this.ve=0,this.Fe=Oy(),this.Me=Ye.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=se(),n=se(),r=se();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:G(38017,{changeType:i})}}),new ha(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=Oy()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ae(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class fR{constructor(e){this.Ge=e,this.ze=new Map,this.je=Bn(),this.He=Xa(),this.Je=Xa(),this.Ze=new Ie(re)}Xe(e){for(const n of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:G(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(_d(i))if(r===0){const o=new W(i.path);this.et(n,o,st.newNoDocument(o,Y.min()))}else ae(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=xr(r).toUint8Array()}catch(u){if(u instanceof SE)return hi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Jf(o,s,i)}catch(u){return hi(u instanceof ao?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&_d(l.target)){const u=new W(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,st.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.Ke())}});let r=se();this.Je.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new Uu(e,n,this.Ze,this.je,r);return this.je=Bn(),this.He=Xa(),this.Je=Xa(),this.Ze=new Ie(re),s}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.He=this.He.insert(n.key,this.It(n.key).add(e)),this.Je=this.Je.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.qe(n,1):s.Ue(n),this.Je=this.Je.insert(n,this.Rt(n).delete(e)),this.Je=this.Je.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new jy,this.ze.set(e,n)),n}Rt(e){let n=this.Je.get(e);return n||(n=new Fe(re),this.Je=this.Je.insert(e,n)),n}It(e){let n=this.He.get(e);return n||(n=new Fe(re),this.He=this.He.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new jy),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Xa(){return new Ie(W.comparator)}function Oy(){return new Ie(W.comparator)}const pR={asc:"ASCENDING",desc:"DESCENDING"},mR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},gR={and:"AND",or:"OR"};class yR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ed(t,e){return t.useProto3Json||Du(e)?e:{value:e}}function tu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function e1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function _R(t,e){return tu(t,e.toTimestamp())}function pn(t){return ae(!!t,49232),Y.fromTimestamp(function(n){const r=Rr(n);return new me(r.seconds,r.nanos)}(t))}function Zf(t,e){return Td(t,e).canonicalString()}function Td(t,e){const n=function(s){return new he(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function t1(t){const e=he.fromString(t);return ae(o1(e),10190,{key:e.toString()}),e}function Id(t,e){return Zf(t.databaseId,e.path)}function ih(t,e){const n=t1(e);if(n.get(1)!==t.databaseId.projectId)throw new z(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(r1(n))}function n1(t,e){return Zf(t.databaseId,e)}function vR(t){const e=t1(t);return e.length===4?he.emptyPath():r1(e)}function Sd(t){return new he(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function r1(t){return ae(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Ly(t,e,n){return{name:Id(t,e),fields:n.value.mapValue.fields}}function wR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,f){return c.useProto3Json?(ae(f===void 0||typeof f=="string",58123),Ye.fromBase64String(f||"")):(ae(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Ye.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?L.UNKNOWN:XE(c.code);return new z(f,c.message||"")}(o);n=new ZE(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ih(t,r.document.name),i=pn(r.document.updateTime),o=r.document.createTime?pn(r.document.createTime):Y.min(),l=new _t({mapValue:{fields:r.document.fields}}),u=st.newFoundDocument(s,i,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new _l(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ih(t,r.document),i=r.readTime?pn(r.readTime):Y.min(),o=st.newNoDocument(s,i),l=r.removedTargetIds||[];n=new _l([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ih(t,r.document),i=r.removedTargetIds||[];n=new _l([],i,s,null)}else{if(!("filter"in e))return G(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new uR(s,i),l=r.targetId;n=new JE(l,o)}}return n}function ER(t,e){let n;if(e instanceof ca)n={update:Ly(t,e.key,e.value)};else if(e instanceof Fu)n={delete:Id(t,e.key)};else if(e instanceof Mr)n={update:Ly(t,e.key,e.data),updateMask:PR(e.fieldMask)};else{if(!(e instanceof oR))return G(16599,{dt:e.type});n={verify:Id(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Yo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Xo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Jo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof eu)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw G(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:_R(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:G(27497)}(t,e.precondition)),n}function TR(t,e){return t&&t.length>0?(ae(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?pn(s.updateTime):pn(i);return o.isEqual(Y.min())&&(o=pn(i)),new rR(o,s.transformResults||[])}(n,e))):[]}function IR(t,e){return{documents:[n1(t,e.path)]}}function SR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=n1(t,s);const i=function(c){if(c.length!==0)return i1(en.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(f=>function(g){return{field:Ns(g.field),direction:CR(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Ed(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:s}}function AR(t){let e=vR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ae(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(m){const g=s1(m);return g instanceof en&&VE(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(I){return new Qo(bs(I.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,Du(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,w=m.values||[];return new Zl(w,g)}(n.startAt));let c=null;return n.endAt&&(c=function(m){const g=!m.before,w=m.values||[];return new Zl(w,g)}(n.endAt)),zC(e,s,o,i,l,"F",u,c)}function kR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function s1(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=bs(n.unaryFilter.field);return De.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=bs(n.unaryFilter.field);return De.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=bs(n.unaryFilter.field);return De.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=bs(n.unaryFilter.field);return De.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return G(61313);default:return G(60726)}}(t):t.fieldFilter!==void 0?function(n){return De.create(bs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return G(58110);default:return G(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return en.create(n.compositeFilter.filters.map(r=>s1(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return G(1026)}}(n.compositeFilter.op))}(t):G(30097,{filter:t})}function CR(t){return pR[t]}function RR(t){return mR[t]}function xR(t){return gR[t]}function Ns(t){return{fieldPath:t.canonicalString()}}function bs(t){return Ge.fromServerFormat(t.fieldPath)}function i1(t){return t instanceof De?function(n){if(n.op==="=="){if(Sy(n.value))return{unaryFilter:{field:Ns(n.field),op:"IS_NAN"}};if(Iy(n.value))return{unaryFilter:{field:Ns(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Sy(n.value))return{unaryFilter:{field:Ns(n.field),op:"IS_NOT_NAN"}};if(Iy(n.value))return{unaryFilter:{field:Ns(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ns(n.field),op:RR(n.op),value:n.value}}}(t):t instanceof en?function(n){const r=n.getFilters().map(s=>i1(s));return r.length===1?r[0]:{compositeFilter:{op:xR(n.op),filters:r}}}(t):G(54877,{filter:t})}function PR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function o1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function a1(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
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
 */class cr{constructor(e,n,r,s,i=Y.min(),o=Y.min(),l=Ye.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new cr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class NR{constructor(e){this.yt=e}}function bR(t){const e=AR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?wd(e,e.limit,"L"):e}/**
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
 */class DR{constructor(){this.Sn=new VR}addToCollectionParentIndex(e,n){return this.Sn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(Cr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(Cr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class VR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Fe(he.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Fe(he.comparator)).toArray()}}/**
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
 */const My={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},l1=41943040;class gt{static withCacheSize(e){return new gt(e,gt.DEFAULT_COLLECTION_PERCENTILE,gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */gt.DEFAULT_COLLECTION_PERCENTILE=10,gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,gt.DEFAULT=new gt(l1,gt.DEFAULT_COLLECTION_PERCENTILE,gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),gt.DISABLED=new gt(-1,0,0);/**
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
 */const Fy="LruGarbageCollector",jR=1048576;function Uy([t,e],[n,r]){const s=re(t,n);return s===0?re(e,r):s}class OR{constructor(e){this.Pr=e,this.buffer=new Fe(Uy),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Uy(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class LR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){H(Fy,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ai(n)?H(Fy,"Ignoring IndexedDB error during garbage collection: ",n):await Si(n)}await this.Ar(3e5)})}}class MR{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(bu.ce);const r=new OR(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(My)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),My):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,l,u,c;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,o=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(i=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(c=Date.now(),xs()<=ne.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(c-u)+`ms
Total Duration: ${c-f}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function FR(t,e){return new MR(t,e)}/**
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
 */class UR{constructor(){this.changes=new Es(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,st.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class zR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class BR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Io(r.mutation,s,Ct.empty(),me.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=se()){const s=es();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=oo();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=es();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,se()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Bn();const o=To(),l=function(){return To()}();return n.forEach((u,c)=>{const f=r.get(c.key);s.has(c.key)&&(f===void 0||f.mutation instanceof Mr)?i=i.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),Io(f.mutation,c,f.mutation.getFieldMask(),me.now())):o.set(c.key,Ct.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>l.set(c,new zR(f,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=To();let s=new Ie((o,l)=>o-l),i=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||Ct.empty();f=l.applyToLocalView(c,f),r.set(u,f);const m=(s.get(l.batchId)||se()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,m=$E();f.forEach(g=>{if(!i.has(g)){const w=QE(n.get(g),r.get(g));w!==null&&m.set(g,w),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,m))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return BC(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ME(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(es());let l=qo,u=i;return o.next(c=>M.forEach(c,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,se())).next(f=>({batchId:l,changes:BE(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(r=>{let s=oo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=oo();return this.indexManager.getCollectionParents(e,i).next(l=>M.forEach(l,u=>{const c=function(m,g){return new ki(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(f=>{f.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,st.newInvalidDocument(f)))});let l=oo();return o.forEach((u,c)=>{const f=i.get(u);f!==void 0&&Io(f.mutation,c,Ct.empty(),me.now()),Ou(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class $R{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return M.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:pn(s.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(s){return{name:s.name,query:bR(s.bundledQuery),readTime:pn(s.readTime)}}(n)),M.resolve()}}/**
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
 */class HR{constructor(){this.overlays=new Ie(W.comparator),this.Lr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=es();return M.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.bt(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=es(),i=n.length+1,o=new W(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ie((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=i.get(c.largestBatchId);f===null&&(f=es(),i=i.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=es(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=s)););return M.resolve(l)}bt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new lR(n,r));let i=this.Lr.get(n);i===void 0&&(i=se(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
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
 */class qR{constructor(){this.sessionToken=Ye.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
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
 */class WR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new Fe(Be.Kr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new aR(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Jr=this.Jr.add(new Be(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?Hf:this.Yn-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Be(n,0),s=new Be(n,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([r,s],o=>{const l=this.Zr(o.Hr);i.push(l)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Fe(re);return n.forEach(s=>{const i=new Be(s,0),o=new Be(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,o],l=>{r=r.add(l.Hr)})}),M.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;W.isDocumentKey(i)||(i=i.child(""));const o=new Be(new W(i),0);let l=new Fe(re);return this.Jr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(l=l.add(u.Hr)),!0)},o),M.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ae(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return M.forEach(n.mutations,s=>{const i=new Be(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Jr=r})}nr(e){}containsKey(e,n){const r=new Be(n,0),s=this.Jr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class GR{constructor(e){this.ti=e,this.docs=function(){return new Ie(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():st.newInvalidDocument(n))}getEntries(e,n){let r=Bn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():st.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Bn();const o=n.path,l=new W(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||_C(yC(f),r)<=0||(s.has(f.key)||Ou(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){G(9500)}ni(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new KR(this)}getSize(e){return M.resolve(this.size)}}class KR extends UR{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
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
 */class QR{constructor(e){this.persistence=e,this.ri=new Es(n=>Gf(n),Kf),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.ii=0,this.si=new ep,this.targetCount=0,this.oi=mi._r()}forEachTarget(e,n){return this.ri.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),M.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new mi(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.lr(n),M.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.si.containsKey(n))}}/**
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
 */class u1{constructor(e,n){this._i={},this.overlays={},this.ai=new bu(0),this.ui=!1,this.ui=!0,this.ci=new qR,this.referenceDelegate=e(this),this.li=new QR(this),this.indexManager=new DR,this.remoteDocumentCache=function(s){return new GR(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new NR(n),this.Pi=new $R(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new HR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new WR(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const s=new YR(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return M.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class YR extends wC{constructor(e){super(),this.currentSequenceNumber=e}}class tp{constructor(e){this.persistence=e,this.Ri=new ep,this.Ai=null}static Vi(e){return new tp(e)}get di(){if(this.Ai)return this.Ai;throw G(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.di,r=>{const s=W.fromPath(r);return this.mi(e,s).next(i=>{i||n.removeEntry(s,Y.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class nu{constructor(e,n){this.persistence=e,this.fi=new Es(r=>IC(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=FR(this,n)}static Vi(e,n){return new nu(e,n)}Ti(){}Ii(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return M.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?M.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,Y.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ml(e.data.value)),n}wr(e,n,r){return M.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class XR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class JR{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return UA()?8:EC(at())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new XR;return this.ys(e,n,o).next(l=>{if(i.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>i.result)}ws(e,n,r,s){return r.documentReadCount<this.Vs?(xs()<=ne.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Ps(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),M.resolve()):(xs()<=ne.DEBUG&&H("QueryEngine","Query:",Ps(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(xs()<=ne.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Ps(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,fn(n))):M.resolve())}gs(e,n){if(Ry(n))return M.resolve(null);let r=fn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=wd(n,null,"F"),r=fn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=se(...i);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.bs(n,l);return this.Ss(n,c,o,u.readTime)?this.gs(e,wd(n,null,"F")):this.Ds(e,c,n,u)}))})))}ps(e,n,r,s){return Ry(n)||s.isEqual(Y.min())?M.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.bs(n,i);return this.Ss(n,o,r,s)?M.resolve(null):(xs()<=ne.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ps(n)),this.Ds(e,o,n,gC(s,qo)).next(l=>l))})}bs(e,n){let r=new Fe(UE(e));return n.forEach((s,i)=>{Ou(e,i)&&(r=r.add(i))}),r}Ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return xs()<=ne.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Ps(n)),this.fs.getDocumentsMatchingQuery(e,n,Cr.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const rp="LocalStore",ZR=3e8;class ex{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new Ie(re),this.Fs=new Es(i=>Gf(i),Kf),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new BR(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function tx(t,e,n,r){return new ex(t,e,n,r)}async function c1(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=se();for(const c of s){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of i){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ns:c,removedBatchIds:o,addedBatchIds:l}))})})}function nx(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const m=c.batch,g=m.keys();let w=M.resolve();return g.forEach(I=>{w=w.next(()=>f.getEntry(u,I)).next(P=>{const V=c.docVersions.get(I);ae(V!==null,48541),P.version.compareTo(V)<0&&(m.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),f.addEntry(P)))})}),w.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=se();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function h1(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function rx(t,e){const n=J(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const l=[];e.targetChanges.forEach((f,m)=>{const g=s.get(m);if(!g)return;l.push(n.li.removeMatchingKeys(i,f.removedDocuments,m).next(()=>n.li.addMatchingKeys(i,f.addedDocuments,m)));let w=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?w=w.withResumeToken(Ye.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):f.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(f.resumeToken,r)),s=s.insert(m,w),function(P,V,S){return P.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=ZR?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(g,w,f)&&l.push(n.li.updateTargetData(i,w))});let u=Bn(),c=se();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(sx(i,o,e.documentUpdates).next(f=>{u=f.Bs,c=f.Ls})),!r.isEqual(Y.min())){const f=n.li.getLastRemoteSnapshotVersion(i).next(m=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(n.vs=s,i))}function sx(t,e,n){let r=se(),s=se();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Bn();return n.forEach((l,u)=>{const c=i.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H(rp,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Bs:o,Ls:s}})}function ix(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Hf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ox(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.li.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):n.li.allocateTargetId(r).next(o=>(s=new cr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Ad(t,e,n){const r=J(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ai(o))throw o;H(rp,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function zy(t,e,n){const r=J(t);let s=Y.min(),i=se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const m=J(u),g=m.Fs.get(f);return g!==void 0?M.resolve(m.vs.get(g)):m.li.getTargetData(c,f)}(r,o,fn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:Y.min(),n?i:se())).next(l=>(ax(r,qC(e),l),{documents:l,ks:i})))}function ax(t,e,n){let r=t.Ms.get(e)||Y.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ms.set(e,r)}class By{constructor(){this.activeTargetIds=XC()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lx{constructor(){this.vo=new By,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new By,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class ux{Mo(e){}shutdown(){}}/**
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
 */const $y="ConnectivityMonitor";class Hy{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){H($y,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){H($y,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ja=null;function kd(){return Ja===null?Ja=function(){return 268435456+Math.round(2147483648*Math.random())}():Ja++,"0x"+Ja.toString(16)}/**
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
 */const oh="RestConnection",cx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class hx{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===Xl?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=kd(),l=this.Qo(e,n.toUriEncodedString());H(oh,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,i);const{host:c}=new URL(l),f=Or(c);return this.zo(e,l,u,r,f).then(m=>(H(oh,`Received RPC '${e}' ${o}: `,m),m),m=>{throw hi(oh,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ii}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,n){const r=cx[e];let s=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class dx{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const tt="WebChannelConnection",Zi=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Xs extends hx{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Xs.c_){const e=gE();Zi(e,mE.STAT_EVENT,n=>{n.stat===fd.PROXY?H(tt,"STAT_EVENT: detected buffering proxy"):n.stat===fd.NOPROXY&&H(tt,"STAT_EVENT: detected no buffering proxy")}),Xs.c_=!0}}zo(e,n,r,s,i){const o=kd();return new Promise((l,u)=>{const c=new fE;c.setWithCredentials(!0),c.listenOnce(pE.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case pl.NO_ERROR:const m=c.getResponseJson();H(tt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case pl.TIMEOUT:H(tt,`RPC '${e}' ${o} timed out`),u(new z(L.DEADLINE_EXCEEDED,"Request time out"));break;case pl.HTTP_ERROR:const g=c.getStatus();if(H(tt,`RPC '${e}' ${o} failed with status:`,g,"response text:",c.getResponseText()),g>0){let w=c.getResponseJson();Array.isArray(w)&&(w=w[0]);const I=w==null?void 0:w.error;if(I&&I.status&&I.message){const P=function(S){const T=S.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(T)>=0?T:L.UNKNOWN}(I.status);u(new z(P,I.message))}else u(new z(L.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new z(L.UNAVAILABLE,"Connection failed."));break;default:G(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{H(tt,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);H(tt,`RPC '${e}' ${o} sending request:`,s),c.send(n,"POST",f,r,15)})}T_(e,n,r){const s=kd(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=i.join("");H(tt,`Creating RPC '${e}' stream ${s}: ${c}`,l);const f=o.createWebChannel(c,l);this.I_(f);let m=!1,g=!1;const w=new dx({Ho:I=>{g?H(tt,`Not sending because RPC '${e}' stream ${s} is closed:`,I):(m||(H(tt,`Opening RPC '${e}' stream ${s} transport.`),f.open(),m=!0),H(tt,`RPC '${e}' stream ${s} sending:`,I),f.send(I))},Jo:()=>f.close()});return Zi(f,io.EventType.OPEN,()=>{g||(H(tt,`RPC '${e}' stream ${s} transport opened.`),w.i_())}),Zi(f,io.EventType.CLOSE,()=>{g||(g=!0,H(tt,`RPC '${e}' stream ${s} transport closed`),w.o_(),this.E_(f))}),Zi(f,io.EventType.ERROR,I=>{g||(g=!0,hi(tt,`RPC '${e}' stream ${s} transport errored. Name:`,I.name,"Message:",I.message),w.o_(new z(L.UNAVAILABLE,"The operation could not be completed")))}),Zi(f,io.EventType.MESSAGE,I=>{var P;if(!g){const V=I.data[0];ae(!!V,16349);const S=V,T=(S==null?void 0:S.error)||((P=S[0])==null?void 0:P.error);if(T){H(tt,`RPC '${e}' stream ${s} received error:`,T);const A=T.status;let b=function(y){const _=Ne[y];if(_!==void 0)return XE(_)}(A),x=T.message;b===void 0&&(b=L.INTERNAL,x="Unknown error status: "+A+" with message "+T.message),g=!0,w.o_(new z(b,x)),f.close()}else H(tt,`RPC '${e}' stream ${s} received:`,V),w.__(V)}}),Xs.u_(),setTimeout(()=>{w.s_()},0),w}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return yE()}}/**
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
 */function fx(t){return new Xs(t)}function ah(){return typeof document<"u"?document:null}/**
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
 */function zu(t){return new yR(t,!0)}/**
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
 */Xs.c_=!1;class d1{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const qy="PersistentStream";class f1{constructor(e,n,r,s,i,o,l,u){this.Ci=e,this.b_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new d1(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(zn(n.toString()),zn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new z(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.H_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return H(qy,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(H(qy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class px extends f1{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=wR(this.serializer,e),r=function(i){if(!("targetChange"in i))return Y.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?pn(o.readTime):Y.min()}(e);return this.listener.J_(n,r)}Z_(e){const n={};n.database=Sd(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=_d(u)?{documents:IR(i,u)}:{query:SR(i,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=e1(i,o.resumeToken);const c=Ed(i,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=tu(i,o.snapshotVersion.toTimestamp());const c=Ed(i,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=kR(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=Sd(this.serializer),n.removeTarget=e,this.K_(n)}}class mx extends f1{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}H_(e){return ae(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ae(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ae(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=TR(e.writeResults,e.commitTime),r=pn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Sd(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>ER(this.serializer,r))};this.K_(n)}}/**
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
 */class gx{}class yx extends gx{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new z(L.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,Td(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(L.UNKNOWN,i.toString())})}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,Td(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(L.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function _x(t,e,n,r){return new yx(t,e,n,r)}class vx{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(zn(n),this.aa=!1):H("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const ms="RemoteStore";class wx{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{Ts(this)&&(H(ms,"Restarting streams for network reachability change."),await async function(u){const c=J(u);c.Ea.add(4),await da(c),c.Va.set("Unknown"),c.Ea.delete(4),await Bu(c)}(this))})}),this.Va=new vx(r,s)}}async function Bu(t){if(Ts(t))for(const e of t.Ra)await e(!0)}async function da(t){for(const e of t.Ra)await e(!1)}function p1(t,e){const n=J(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),ap(n)?op(n):Ci(n).O_()&&ip(n,e))}function sp(t,e){const n=J(t),r=Ci(n);n.Ia.delete(e),r.O_()&&m1(n,e),n.Ia.size===0&&(r.O_()?r.L_():Ts(n)&&n.Va.set("Unknown"))}function ip(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ci(t).Z_(e)}function m1(t,e){t.da.$e(e),Ci(t).X_(e)}function op(t){t.da=new fR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Ci(t).start(),t.Va.ua()}function ap(t){return Ts(t)&&!Ci(t).x_()&&t.Ia.size>0}function Ts(t){return J(t).Ea.size===0}function g1(t){t.da=void 0}async function Ex(t){t.Va.set("Online")}async function Tx(t){t.Ia.forEach((e,n)=>{ip(t,e)})}async function Ix(t,e){g1(t),ap(t)?(t.Va.ha(e),op(t)):t.Va.set("Unknown")}async function Sx(t,e,n){if(t.Va.set("Online"),e instanceof ZE&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ia.delete(l),s.da.removeTarget(l))}(t,e)}catch(r){H(ms,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ru(t,r)}else if(e instanceof _l?t.da.Xe(e):e instanceof JE?t.da.st(e):t.da.tt(e),!n.isEqual(Y.min()))try{const r=await h1(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.da.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ia.get(c);f&&i.Ia.set(c,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const f=i.Ia.get(u);if(!f)return;i.Ia.set(u,f.withResumeToken(Ye.EMPTY_BYTE_STRING,f.snapshotVersion)),m1(i,u);const m=new cr(f.target,u,c,f.sequenceNumber);ip(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H(ms,"Failed to raise snapshot:",r),await ru(t,r)}}async function ru(t,e,n){if(!Ai(e))throw e;t.Ea.add(1),await da(t),t.Va.set("Offline"),n||(n=()=>h1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H(ms,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Bu(t)})}function y1(t,e){return e().catch(n=>ru(t,n,e))}async function $u(t){const e=J(t),n=Nr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Hf;for(;Ax(e);)try{const s=await ix(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,kx(e,s)}catch(s){await ru(e,s)}_1(e)&&v1(e)}function Ax(t){return Ts(t)&&t.Ta.length<10}function kx(t,e){t.Ta.push(e);const n=Nr(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function _1(t){return Ts(t)&&!Nr(t).x_()&&t.Ta.length>0}function v1(t){Nr(t).start()}async function Cx(t){Nr(t).ra()}async function Rx(t){const e=Nr(t);for(const n of t.Ta)e.ea(n.mutations)}async function xx(t,e,n){const r=t.Ta.shift(),s=Xf.from(r,e,n);await y1(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await $u(t)}async function Px(t,e){e&&Nr(t).Y_&&await async function(r,s){if(function(o){return cR(o)&&o!==L.ABORTED}(s.code)){const i=r.Ta.shift();Nr(r).B_(),await y1(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await $u(r)}}(t,e),_1(t)&&v1(t)}async function Wy(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),H(ms,"RemoteStore received new credentials");const r=Ts(n);n.Ea.add(3),await da(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Bu(n)}async function Nx(t,e){const n=J(t);e?(n.Ea.delete(2),await Bu(n)):e||(n.Ea.add(2),await da(n),n.Va.set("Unknown"))}function Ci(t){return t.ma||(t.ma=function(n,r,s){const i=J(n);return i.sa(),new px(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:Ex.bind(null,t),Yo:Tx.bind(null,t),t_:Ix.bind(null,t),J_:Sx.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),ap(t)?op(t):t.Va.set("Unknown")):(await t.ma.stop(),g1(t))})),t.ma}function Nr(t){return t.fa||(t.fa=function(n,r,s){const i=J(n);return i.sa(),new mx(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:Cx.bind(null,t),t_:Px.bind(null,t),ta:Rx.bind(null,t),na:xx.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await $u(t)):(await t.fa.stop(),t.Ta.length>0&&(H(ms,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class lp{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Vn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new lp(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function up(t,e){if(zn("AsyncQueue",`${e}: ${t}`),Ai(t))return new z(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Gy{constructor(){this.ga=new Ie(W.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):G(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class gi{constructor(e,n,r,s,i,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new gi(e,n,Js.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ju(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class bx{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class Dx{constructor(){this.queries=Ky(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=J(n),i=s.queries;s.queries=Ky(),i.forEach((o,l)=>{for(const u of l.ba)u.onError(r)})})(this,new z(L.ABORTED,"Firestore shutting down"))}}function Ky(){return new Es(t=>FE(t),ju)}async function w1(t,e){const n=J(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.Da()&&(r=2):(i=new bx,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=up(o,`Initialization of query '${Ps(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.ba.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&cp(n)}async function E1(t,e){const n=J(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ba.indexOf(e);o>=0&&(i.ba.splice(o,1),i.ba.length===0?s=e.Da()?0:1:!i.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Vx(t,e){const n=J(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.ba)l.Fa(s)&&(r=!0);o.wa=s}}r&&cp(n)}function jx(t,e,n){const r=J(t),s=r.queries.get(e);if(s)for(const i of s.ba)i.onError(n);r.queries.delete(e)}function cp(t){t.Ca.forEach(e=>{e.next()})}var Cd,Qy;(Qy=Cd||(Cd={})).Ma="default",Qy.Cache="cache";class T1{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new gi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=gi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Cd.Cache}}/**
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
 */class I1{constructor(e){this.key=e}}class S1{constructor(e){this.key=e}}class Ox{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=se(),this.mutatedKeys=se(),this.eu=UE(e),this.tu=new Js(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new Gy,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,m)=>{const g=s.get(f),w=Ou(this.query,m)?m:null,I=!!g&&this.mutatedKeys.has(g.key),P=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let V=!1;g&&w?g.data.isEqual(w.data)?I!==P&&(r.track({type:3,doc:w}),V=!0):this.su(g,w)||(r.track({type:2,doc:w}),V=!0,(u&&this.eu(w,u)>0||c&&this.eu(w,c)<0)&&(l=!0)):!g&&w?(r.track({type:0,doc:w}),V=!0):g&&!w&&(r.track({type:1,doc:g}),V=!0,(u||c)&&(l=!0)),V&&(w?(o=o.add(w),i=P?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Ss:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,m)=>function(w,I){const P=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G(20277,{Vt:V})}};return P(w)-P(I)}(f.type,m.type)||this.eu(f.doc,m.doc)),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],u=this.Ya.size===0&&this.current&&!s?1:0,c=u!==this.Xa;return this.Xa=u,o.length!==0||c?{snapshot:new gi(this.query,e.tu,i,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Gy,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=se(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new S1(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new I1(r))}),n}cu(e){this.Za=e.ks,this.Ya=se();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return gi.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const hp="SyncEngine";class Lx{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Mx{constructor(e){this.key=e,this.hu=!1}}class Fx{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Es(l=>FE(l),ju),this.Iu=new Map,this.Eu=new Set,this.Ru=new Ie(W.comparator),this.Au=new Map,this.Vu=new ep,this.du={},this.mu=new Map,this.fu=mi.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Ux(t,e,n=!0){const r=P1(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await A1(r,e,n,!0),s}async function zx(t,e){const n=P1(t);await A1(n,e,!0,!1)}async function A1(t,e,n,r){const s=await ox(t.localStore,fn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await Bx(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&p1(t.remoteStore,s),l}async function Bx(t,e,n,r,s){t.pu=(m,g,w)=>async function(P,V,S,T){let A=V.view.ru(S);A.Ss&&(A=await zy(P.localStore,V.query,!1).then(({documents:y})=>V.view.ru(y,A)));const b=T&&T.targetChanges.get(V.targetId),x=T&&T.targetMismatches.get(V.targetId)!=null,O=V.view.applyChanges(A,P.isPrimaryClient,b,x);return Xy(P,V.targetId,O.au),O.snapshot}(t,m,g,w);const i=await zy(t.localStore,e,!0),o=new Ox(e,i.ks),l=o.ru(i.documents),u=ha.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(l,t.isPrimaryClient,u);Xy(t,n,c.au);const f=new Lx(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),c.snapshot}async function $x(t,e,n){const r=J(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!ju(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ad(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&sp(r.remoteStore,s.targetId),Rd(r,s.targetId)}).catch(Si)):(Rd(r,s.targetId),await Ad(r.localStore,s.targetId,!0))}async function Hx(t,e){const n=J(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),sp(n.remoteStore,r.targetId))}async function qx(t,e,n){const r=Jx(t);try{const s=await function(o,l){const u=J(o),c=me.now(),f=l.reduce((w,I)=>w.add(I.key),se());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",w=>{let I=Bn(),P=se();return u.xs.getEntries(w,f).next(V=>{I=V,I.forEach((S,T)=>{T.isValidDocument()||(P=P.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(w,I)).next(V=>{m=V;const S=[];for(const T of l){const A=iR(T,m.get(T.key).overlayedDocument);A!=null&&S.push(new Mr(T.key,A,NE(A.value.mapValue),It.exists(!0)))}return u.mutationQueue.addMutationBatch(w,c,S,l)}).next(V=>{g=V;const S=V.applyToLocalDocumentSet(m,P);return u.documentOverlayCache.saveOverlays(w,V.batchId,S)})}).then(()=>({batchId:g.batchId,changes:BE(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let c=o.du[o.currentUser.toKey()];c||(c=new Ie(re)),c=c.insert(l,u),o.du[o.currentUser.toKey()]=c}(r,s.batchId,n),await fa(r,s.changes),await $u(r.remoteStore)}catch(s){const i=up(s,"Failed to persist write");n.reject(i)}}async function k1(t,e){const n=J(t);try{const r=await rx(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(ae(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?ae(o.hu,14607):s.removedDocuments.size>0&&(ae(o.hu,42227),o.hu=!1))}),await fa(n,r,e)}catch(r){await Si(r)}}function Yy(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=J(o);u.onlineState=l;let c=!1;u.queries.forEach((f,m)=>{for(const g of m.ba)g.va(l)&&(c=!0)}),c&&cp(u)}(r.eventManager,e),s.length&&r.Pu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Wx(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Ie(W.comparator);o=o.insert(i,st.newNoDocument(i,Y.min()));const l=se().add(i),u=new Uu(Y.min(),new Map,new Ie(re),o,l);await k1(r,u),r.Ru=r.Ru.remove(i),r.Au.delete(e),dp(r)}else await Ad(r.localStore,e,!1).then(()=>Rd(r,e,n)).catch(Si)}async function Gx(t,e){const n=J(t),r=e.batch.batchId;try{const s=await nx(n.localStore,e);R1(n,r,null),C1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await fa(n,s)}catch(s){await Si(s)}}async function Kx(t,e,n){const r=J(t);try{const s=await function(o,l){const u=J(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(m=>(ae(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(c,m))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);R1(r,e,n),C1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await fa(r,s)}catch(s){await Si(s)}}function C1(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function R1(t,e,n){const r=J(t);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function Rd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||x1(t,r)})}function x1(t,e){t.Eu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(sp(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),dp(t))}function Xy(t,e,n){for(const r of n)r instanceof I1?(t.Vu.addReference(r.key,e),Qx(t,r)):r instanceof S1?(H(hp,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||x1(t,r.key)):G(19791,{wu:r})}function Qx(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Eu.has(r)||(H(hp,"New document in limbo: "+n),t.Eu.add(r),dp(t))}function dp(t){for(;t.Eu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new W(he.fromString(e)),r=t.fu.next();t.Au.set(r,new Mx(n)),t.Ru=t.Ru.insert(n,r),p1(t.remoteStore,new cr(fn(Qf(n.path)),r,"TargetPurposeLimboResolution",bu.ce))}}async function fa(t,e,n){const r=J(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const m=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){s.push(c);const m=np.Es(u.targetId,c);i.push(m)}}))}),await Promise.all(o),r.Pu.J_(s),await async function(u,c){const f=J(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>M.forEach(c,g=>M.forEach(g.Ts,w=>f.persistence.referenceDelegate.addReference(m,g.targetId,w)).next(()=>M.forEach(g.Is,w=>f.persistence.referenceDelegate.removeReference(m,g.targetId,w)))))}catch(m){if(!Ai(m))throw m;H(rp,"Failed to update sequence numbers: "+m)}for(const m of c){const g=m.targetId;if(!m.fromCache){const w=f.vs.get(g),I=w.snapshotVersion,P=w.withLastLimboFreeSnapshotVersion(I);f.vs=f.vs.insert(g,P)}}}(r.localStore,i))}async function Yx(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){H(hp,"User change. New user:",e.toKey());const r=await c1(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(l=>{l.forEach(u=>{u.reject(new z(L.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await fa(n,r.Ns)}}function Xx(t,e){const n=J(t),r=n.Au.get(e);if(r&&r.hu)return se().add(r.key);{let s=se();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const l=n.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function P1(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=k1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Xx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Wx.bind(null,e),e.Pu.J_=Vx.bind(null,e.eventManager),e.Pu.yu=jx.bind(null,e.eventManager),e}function Jx(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Gx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Kx.bind(null,e),e}class su{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=zu(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return tx(this.persistence,new JR,e.initialUser,this.serializer)}Cu(e){return new u1(tp.Vi,this.serializer)}Du(e){return new lx}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}su.provider={build:()=>new su};class Zx extends su{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){ae(this.persistence.referenceDelegate instanceof nu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new LR(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?gt.withCacheSize(this.cacheSizeBytes):gt.DEFAULT;return new u1(r=>nu.Vi(r,n),this.serializer)}}class xd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Yy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Yx.bind(null,this.syncEngine),await Nx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Dx}()}createDatastore(e){const n=zu(e.databaseInfo.databaseId),r=fx(e.databaseInfo);return _x(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new wx(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Yy(this.syncEngine,n,0),function(){return Hy.v()?new Hy:new ux}())}createSyncEngine(e,n){return function(s,i,o,l,u,c,f){const m=new Fx(s,i,o,l,u,c);return f&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=J(s);H(ms,"RemoteStore shutting down."),i.Ea.add(5),await da(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}xd.provider={build:()=>new xd};/**
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
 */class N1{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):zn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const br="FirestoreClient";class e2{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=nt.UNAUTHENTICATED,this.clientId=$f.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{H(br,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H(br,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=up(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function lh(t,e){t.asyncQueue.verifyOperationInProgress(),H(br,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await c1(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Jy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await t2(t);H(br,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Wy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Wy(e.remoteStore,s)),t._onlineComponents=e}async function t2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H(br,"Using user provided OfflineComponentProvider");try{await lh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;hi("Error using user provided cache. Falling back to memory cache: "+n),await lh(t,new su)}}else H(br,"Using default OfflineComponentProvider"),await lh(t,new Zx(void 0));return t._offlineComponents}async function b1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H(br,"Using user provided OnlineComponentProvider"),await Jy(t,t._uninitializedComponentsProvider._online)):(H(br,"Using default OnlineComponentProvider"),await Jy(t,new xd))),t._onlineComponents}function n2(t){return b1(t).then(e=>e.syncEngine)}async function D1(t){const e=await b1(t),n=e.eventManager;return n.onListen=Ux.bind(null,e.syncEngine),n.onUnlisten=$x.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=zx.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Hx.bind(null,e.syncEngine),n}function r2(t,e,n={}){const r=new Vn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const f=new N1({next:g=>{f.Nu(),o.enqueueAndForget(()=>E1(i,m));const w=g.docs.has(l);!w&&g.fromCache?c.reject(new z(L.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&g.fromCache&&u&&u.source==="server"?c.reject(new z(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new T1(Qf(l.path),f,{includeMetadataChanges:!0,Ka:!0});return w1(i,m)}(await D1(t),t.asyncQueue,e,n,r)),r.promise}function s2(t,e,n={}){const r=new Vn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,c){const f=new N1({next:g=>{f.Nu(),o.enqueueAndForget(()=>E1(i,m)),g.fromCache&&u.source==="server"?c.reject(new z(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new T1(l,f,{includeMetadataChanges:!0,Ka:!0});return w1(i,m)}(await D1(t),t.asyncQueue,e,n,r)),r.promise}function i2(t,e){const n=new Vn;return t.asyncQueue.enqueueAndForget(async()=>qx(await n2(t),e,n)),n.promise}/**
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
 */function V1(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const o2="ComponentProvider",Zy=new Map;function a2(t,e,n,r,s){return new kC(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,V1(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const j1="firestore.googleapis.com",e_=!0;class t_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new z(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=j1,this.ssl=e_}else this.host=e.host,this.ssl=e.ssl??e_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=l1;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<jR)throw new z(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=V1(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new z(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new z(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new z(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Hu{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new t_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new t_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new iC;switch(r.type){case"firstParty":return new uC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Zy.get(n);r&&(H(o2,"Removing Datastore"),Zy.delete(n),r.terminate())}(this),Promise.resolve()}}function l2(t,e,n,r={}){var c;t=_n(t,Hu);const s=Or(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&(Lf(`https://${l}`),Mf("Firestore",!0)),i.host!==j1&&i.host!==l&&hi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!ds(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=nt.MOCK_USER;else{f=oE(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new z(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new nt(g)}t._authCredentials=new oC(new vE(f,m))}}/**
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
 */class Is{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Is(this.firestore,e,this._query)}}class je{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ir(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new je(this.firestore,e,this._key)}toJSON(){return{type:je._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ua(n,je._jsonSchema))return new je(e,r||null,new W(he.fromString(n.referencePath)))}}je._jsonSchemaVersion="firestore/documentReference/1.0",je._jsonSchema={type:Ve("string",je._jsonSchemaVersion),referencePath:Ve("string")};class Ir extends Is{constructor(e,n,r){super(e,n,Qf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new je(this.firestore,null,new W(e))}withConverter(e){return new Ir(this.firestore,e,this._path)}}function mn(t,e,...n){if(t=Te(t),wE("collection","path",e),t instanceof Hu){const r=he.fromString(e,...n);return py(r),new Ir(t,null,r)}{if(!(t instanceof je||t instanceof Ir))throw new z(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(he.fromString(e,...n));return py(r),new Ir(t.firestore,null,r)}}function it(t,e,...n){if(t=Te(t),arguments.length===1&&(e=$f.newId()),wE("doc","path",e),t instanceof Hu){const r=he.fromString(e,...n);return fy(r),new je(t,null,new W(r))}{if(!(t instanceof je||t instanceof Ir))throw new z(L.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(he.fromString(e,...n));return fy(r),new je(t.firestore,t instanceof Ir?t.converter:null,new W(r))}}/**
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
 */const n_="AsyncQueue";class r_{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new d1(this,"async_queue_retry"),this._c=()=>{const r=ah();r&&H(n_,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=ah();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=ah();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Vn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Ai(e))throw e;H(n_,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,zn("INTERNAL UNHANDLED ERROR: ",s_(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=lp.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&G(47125,{Pc:s_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function s_(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Ss extends Hu{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new r_,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new r_(e),this._firestoreClient=void 0,await e}}}function u2(t,e){const n=typeof t=="object"?t:zf(),r=typeof t=="string"?t:Xl,s=Pu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=rE("firestore");i&&l2(s,...i)}return s}function qu(t){if(t._terminated)throw new z(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||c2(t),t._firestoreClient}function c2(t){var r,s,i,o;const e=t._freezeSettings(),n=a2(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new e2(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class Lt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Lt(Ye.fromBase64String(e))}catch(n){throw new z(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Lt(Ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Lt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ua(e,Lt._jsonSchema))return Lt.fromBase64String(e.bytes)}}Lt._jsonSchemaVersion="firestore/bytes/1.0",Lt._jsonSchema={type:Ve("string",Lt._jsonSchemaVersion),bytes:Ve("string")};/**
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
 */class gn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return re(this._lat,e._lat)||re(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:gn._jsonSchemaVersion}}static fromJSON(e){if(ua(e,gn._jsonSchema))return new gn(e.latitude,e.longitude)}}gn._jsonSchemaVersion="firestore/geoPoint/1.0",gn._jsonSchema={type:Ve("string",gn._jsonSchemaVersion),latitude:Ve("number"),longitude:Ve("number")};/**
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
 */class Xt{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Xt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ua(e,Xt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Xt(e.vectorValues);throw new z(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Xt._jsonSchemaVersion="firestore/vectorValue/1.0",Xt._jsonSchema={type:Ve("string",Xt._jsonSchemaVersion),vectorValues:Ve("object")};/**
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
 */const h2=/^__.*__$/;class d2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Mr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ca(e,this.data,n,this.fieldTransforms)}}class O1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Mr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function L1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G(40011,{dataSource:t})}}class fp{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new fp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return iu(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(L1(this.dataSource)&&h2.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class f2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||zu(e)}createContext(e,n,r,s=!1){return new fp({dataSource:e,methodName:n,targetDoc:r,path:Ge.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ku(t){const e=t._freezeSettings(),n=zu(t._databaseId);return new f2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function M1(t,e,n,r,s,i={}){const o=t.createContext(i.merge||i.mergeFields?2:0,e,n,s);mp("Data must be an object, but it was:",o,r);const l=z1(r,o);let u,c;if(i.merge)u=new Ct(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const g=yi(e,m,n);if(!o.contains(g))throw new z(L.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);H1(f,g)||f.push(g)}u=new Ct(f),c=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,c=o.fieldTransforms;return new d2(new _t(l),u,c)}class Qu extends Gu{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Qu}}class pp extends Gu{_toFieldTransform(e){return new tR(e.path,new Yo)}isEqual(e){return e instanceof pp}}function F1(t,e,n,r){const s=t.createContext(1,e,n);mp("Data must be an object, but it was:",s,r);const i=[],o=_t.empty();Lr(r,(u,c)=>{const f=$1(e,u,n);c=Te(c);const m=s.childContextForFieldPath(f);if(c instanceof Qu)i.push(f);else{const g=pa(c,m);g!=null&&(i.push(f),o.set(f,g))}});const l=new Ct(i);return new O1(o,l,s.fieldTransforms)}function U1(t,e,n,r,s,i){const o=t.createContext(1,e,n),l=[yi(e,r,n)],u=[s];if(i.length%2!=0)throw new z(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(yi(e,i[g])),u.push(i[g+1]);const c=[],f=_t.empty();for(let g=l.length-1;g>=0;--g)if(!H1(c,l[g])){const w=l[g];let I=u[g];I=Te(I);const P=o.childContextForFieldPath(w);if(I instanceof Qu)c.push(w);else{const V=pa(I,P);V!=null&&(c.push(w),f.set(w,V))}}const m=new Ct(c);return new O1(f,m,o.fieldTransforms)}function p2(t,e,n,r=!1){return pa(n,t.createContext(r?4:3,e))}function pa(t,e){if(B1(t=Te(t)))return mp("Unsupported field value:",e,t),z1(t,e);if(t instanceof Gu)return function(r,s){if(!L1(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=pa(l,s.childContextForArray(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Te(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return JC(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=me.fromDate(r);return{timestampValue:tu(s.serializer,i)}}if(r instanceof me){const i=new me(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:tu(s.serializer,i)}}if(r instanceof gn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Lt)return{bytesValue:e1(s.serializer,r._byteString)};if(r instanceof je){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Zf(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Xt)return function(o,l){const u=o instanceof Xt?o.toArray():o;return{mapValue:{fields:{[xE]:{stringValue:PE},[Jl]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw l.createError("VectorValues must only contain numeric values.");return Yf(l.serializer,f)})}}}}}}(r,s);if(a1(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${Nu(r)}`)}(t,e)}function z1(t,e){const n={};return IE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Lr(t,(r,s)=>{const i=pa(s,e.childContextForField(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function B1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof me||t instanceof gn||t instanceof Lt||t instanceof je||t instanceof Gu||t instanceof Xt||a1(t))}function mp(t,e,n){if(!B1(n)||!EE(n)){const r=Nu(n);throw r==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function yi(t,e,n){if((e=Te(e))instanceof Wu)return e._internalPath;if(typeof e=="string")return $1(t,e);throw iu("Field path arguments must be of type string or ",t,!1,void 0,n)}const m2=new RegExp("[~\\*/\\[\\]]");function $1(t,e,n){if(e.search(m2)>=0)throw iu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Wu(...e.split("."))._internalPath}catch{throw iu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function iu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new z(L.INVALID_ARGUMENT,l+t+u)}function H1(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class g2{convertValue(e,n="none"){switch(Pr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(xr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw G(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Lr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[Jl].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>xe(o.doubleValue));return new Xt(n)}convertGeoPoint(e){return new gn(xe(e.latitude),xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Vu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Wo(e));default:return null}}convertTimestamp(e){const n=Rr(e);return new me(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=he.fromString(e);ae(o1(r),9688,{name:e});const s=new Go(r.get(1),r.get(3)),i=new W(r.popFirst(5));return s.isEqual(n)||zn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class q1 extends g2{constructor(e){super(),this.firestore=e}convertBytes(e){return new Lt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new je(this.firestore,null,n)}}function hr(){return new pp("serverTimestamp")}const i_="@firebase/firestore",o_="4.10.0";/**
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
 */class W1{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new y2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(yi("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class y2 extends W1{data(){return super.data()}}/**
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
 */function _2(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gp{}class G1 extends gp{}function Yu(t,e,...n){let r=[];e instanceof gp&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof _p).length,l=i.filter(u=>u instanceof yp).length;if(o>1||o>0&&l>0)throw new z(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class yp extends G1{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new yp(e,n,r)}_apply(e){const n=this._parse(e);return K1(e._query,n),new Is(e.firestore,e.converter,vd(e._query,n))}_parse(e){const n=Ku(e.firestore);return function(i,o,l,u,c,f,m){let g;if(c.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new z(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){l_(m,f);const I=[];for(const P of m)I.push(a_(u,i,P));g={arrayValue:{values:I}}}else g=a_(u,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||l_(m,f),g=p2(l,o,m,f==="in"||f==="not-in");return De.create(c,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class _p extends gp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new _p(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:en.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)K1(o,u),o=vd(o,u)}(e._query,n),new Is(e.firestore,e.converter,vd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class vp extends G1{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new vp(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new z(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new z(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Qo(i,o)}(e._query,this._field,this._direction);return new Is(e.firestore,e.converter,HC(e._query,n))}}function Xu(t,e="asc"){const n=e,r=yi("orderBy",t);return vp._create(r,n)}function a_(t,e,n){if(typeof(n=Te(n))=="string"){if(n==="")throw new z(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ME(e)&&n.indexOf("/")!==-1)throw new z(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(he.fromString(n));if(!W.isDocumentKey(r))throw new z(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ty(t,new W(r))}if(n instanceof je)return Ty(t,n._key);throw new z(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Nu(n)}.`)}function l_(t,e){if(!Array.isArray(t)||t.length===0)throw new z(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function K1(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new z(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Q1(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class lo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ss extends W1{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new vl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(yi("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new z(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=ss._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}ss._jsonSchemaVersion="firestore/documentSnapshot/1.0",ss._jsonSchema={type:Ve("string",ss._jsonSchemaVersion),bundleSource:Ve("string","DocumentSnapshot"),bundleName:Ve("string"),bundle:Ve("string")};class vl extends ss{data(e={}){return super.data(e)}}class Zs{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new lo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new vl(this._firestore,this._userDataWriter,r.key,r,new lo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new vl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new lo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new vl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new lo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:v2(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new z(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Zs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=$f.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function v2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G(61501,{type:t})}}/**
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
 */class w2{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Ku(e)}set(e,n,r){this._verifyNotCommitted();const s=uh(e,this._firestore),i=Q1(s.converter,n,r),o=M1(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,It.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=uh(e,this._firestore);let o;return o=typeof(n=Te(n))=="string"||n instanceof Wu?U1(this._dataReader,"WriteBatch.update",i._key,n,r,s):F1(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,It.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=uh(e,this._firestore);return this._mutations=this._mutations.concat(new Fu(n._key,It.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new z(L.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function uh(t,e){if((t=Te(t)).firestore!==e)throw new z(L.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */function wp(t){t=_n(t,je);const e=_n(t.firestore,Ss),n=qu(e);return r2(n,t._key).then(r=>E2(e,t,r))}function Ju(t){t=_n(t,Is);const e=_n(t.firestore,Ss),n=qu(e),r=new q1(e);return _2(t._query),s2(n,t._query).then(s=>new Zs(e,r,t,s))}function Ep(t,e,n,...r){t=_n(t,je);const s=_n(t.firestore,Ss),i=Ku(s);let o;return o=typeof(e=Te(e))=="string"||e instanceof Wu?U1(i,"updateDoc",t._key,e,n,r):F1(i,"updateDoc",t._key,e),ec(s,[o.toMutation(t._key,It.exists(!0))])}function Zu(t){return ec(_n(t.firestore,Ss),[new Fu(t._key,It.none())])}function Tp(t,e){const n=_n(t.firestore,Ss),r=it(t),s=Q1(t.converter,e),i=Ku(t.firestore);return ec(n,[M1(i,"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,It.exists(!1))]).then(()=>r)}function ec(t,e){const n=qu(t);return i2(n,e)}function E2(t,e,n){const r=n.docs.get(e._key),s=new q1(t);return new ss(t,s,e._key,r,new lo(n.hasPendingWrites,n.fromCache),e.converter)}function Y1(t){return t=_n(t,Ss),qu(t),new w2(t,e=>ec(t,e))}(function(e,n=!0){sC(ws),fs(new kr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Ss(new aC(r.getProvider("auth-internal")),new cC(o,r.getProvider("app-check-internal")),CC(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),dn(i_,o_,e),dn(i_,o_,"esm2020")})();/**
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
 */const X1="firebasestorage.googleapis.com",J1="storageBucket",T2=2*60*1e3,I2=10*60*1e3;/**
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
 */class Ce extends Tn{constructor(e,n,r=0){super(ch(e),`Firebase Storage: ${n} (${ch(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ce.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ch(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ke;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ke||(ke={}));function ch(t){return"storage/"+t}function Ip(){const t="An unknown error occurred, please check the error payload for server response.";return new Ce(ke.UNKNOWN,t)}function S2(t){return new Ce(ke.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function A2(t){return new Ce(ke.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function k2(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ce(ke.UNAUTHENTICATED,t)}function C2(){return new Ce(ke.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function R2(t){return new Ce(ke.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function x2(){return new Ce(ke.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function P2(){return new Ce(ke.CANCELED,"User canceled the upload/download.")}function N2(t){return new Ce(ke.INVALID_URL,"Invalid URL '"+t+"'.")}function b2(t){return new Ce(ke.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function D2(){return new Ce(ke.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+J1+"' property when initializing the app?")}function V2(){return new Ce(ke.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function j2(){return new Ce(ke.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function O2(t){return new Ce(ke.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Pd(t){return new Ce(ke.INVALID_ARGUMENT,t)}function Z1(){return new Ce(ke.APP_DELETED,"The Firebase app was deleted.")}function L2(t){return new Ce(ke.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function So(t,e){return new Ce(ke.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function eo(t){throw new Ce(ke.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Rt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Rt.makeFromUrl(e,n)}catch{return new Rt(e,"")}if(r.path==="")return r;throw b2(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function c(b){b.path_=decodeURIComponent(b.path)}const f="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",w=new RegExp(`^https?://${m}/${f}/b/${s}/o${g}`,"i"),I={bucket:1,path:3},P=n===X1?"(?:storage.googleapis.com|storage.cloud.google.com)":n,V="([^?#]*)",S=new RegExp(`^https?://${P}/${s}/${V}`,"i"),A=[{regex:l,indices:u,postModify:i},{regex:w,indices:I,postModify:c},{regex:S,indices:{bucket:1,path:2},postModify:c}];for(let b=0;b<A.length;b++){const x=A[b],O=x.regex.exec(e);if(O){const y=O[x.indices.bucket];let _=O[x.indices.path];_||(_=""),r=new Rt(y,_),x.postModify(r);break}}if(r==null)throw N2(e);return r}}class M2{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function F2(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function u(){return l===2}let c=!1;function f(...V){c||(c=!0,e.apply(null,V))}function m(V){s=setTimeout(()=>{s=null,t(w,u())},V)}function g(){i&&clearTimeout(i)}function w(V,...S){if(c){g();return}if(V){g(),f.call(null,V,...S);return}if(u()||o){g(),f.call(null,V,...S);return}r<64&&(r*=2);let A;l===1?(l=2,A=0):A=(r+Math.random())*1e3,m(A)}let I=!1;function P(V){I||(I=!0,g(),!c&&(s!==null?(V||(l=2),clearTimeout(s),m(0)):V||(l=1)))}return m(0),i=setTimeout(()=>{o=!0,P(!0)},n),P}function U2(t){t(!1)}/**
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
 */function z2(t){return t!==void 0}function B2(t){return typeof t=="object"&&!Array.isArray(t)}function Sp(t){return typeof t=="string"||t instanceof String}function u_(t){return Ap()&&t instanceof Blob}function Ap(){return typeof Blob<"u"}function c_(t,e,n,r){if(r<e)throw Pd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Pd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function kp(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function e0(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var is;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(is||(is={}));/**
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
 */function $2(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class H2{constructor(e,n,r,s,i,o,l,u,c,f,m,g=!0,w=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=f,this.connectionFactory_=m,this.retry=g,this.isUsingEmulator=w,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((I,P)=>{this.resolve_=I,this.reject_=P,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Za(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===is.NO_ERROR,u=i.getStatus();if(!l||$2(u,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===is.ABORT;r(!1,new Za(!1,null,f));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Za(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());z2(u)?i(u):i()}catch(u){o(u)}else if(l!==null){const u=Ip();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(s.canceled){const u=this.appDelete_?Z1():P2();o(u)}else{const u=x2();o(u)}};this.canceled_?n(!1,new Za(!1,null,!0)):this.backoffId_=F2(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&U2(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Za{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function q2(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function W2(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function G2(t,e){e&&(t["X-Firebase-GMPID"]=e)}function K2(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Q2(t,e,n,r,s,i,o=!0,l=!1){const u=e0(t.urlParams),c=t.url+u,f=Object.assign({},t.headers);return G2(f,e),q2(f,n),W2(f,i),K2(f,r),new H2(c,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,l)}/**
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
 */function Y2(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function X2(...t){const e=Y2();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Ap())return new Blob(t);throw new Ce(ke.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function J2(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function Z2(t){if(typeof atob>"u")throw O2("base-64");return atob(t)}/**
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
 */const un={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class hh{constructor(e,n){this.data=e,this.contentType=n||null}}function eP(t,e){switch(t){case un.RAW:return new hh(t0(e));case un.BASE64:case un.BASE64URL:return new hh(n0(t,e));case un.DATA_URL:return new hh(nP(e),rP(e))}throw Ip()}function t0(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function tP(t){let e;try{e=decodeURIComponent(t)}catch{throw So(un.DATA_URL,"Malformed data URL.")}return t0(e)}function n0(t,e){switch(t){case un.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw So(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case un.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw So(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Z2(e)}catch(s){throw s.message.includes("polyfill")?s:So(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class r0{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw So(un.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=sP(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function nP(t){const e=new r0(t);return e.base64?n0(un.BASE64,e.rest):tP(e.rest)}function rP(t){return new r0(t).contentType}function sP(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class sr{constructor(e,n){let r=0,s="";u_(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(u_(this.data_)){const r=this.data_,s=J2(r,e,n);return s===null?null:new sr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new sr(r,!0)}}static getBlob(...e){if(Ap()){const n=e.map(r=>r instanceof sr?r.data_:r);return new sr(X2.apply(null,n))}else{const n=e.map(o=>Sp(o)?eP(un.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new sr(s,!0)}}uploadData(){return this.data_}}/**
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
 */function s0(t){let e;try{e=JSON.parse(t)}catch{return null}return B2(e)?e:null}/**
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
 */function iP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function oP(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function i0(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function aP(t,e){return e}class ct{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||aP}}let el=null;function lP(t){return!Sp(t)||t.length<2?t:i0(t)}function o0(){if(el)return el;const t=[];t.push(new ct("bucket")),t.push(new ct("generation")),t.push(new ct("metageneration")),t.push(new ct("name","fullPath",!0));function e(i,o){return lP(o)}const n=new ct("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new ct("size");return s.xform=r,t.push(s),t.push(new ct("timeCreated")),t.push(new ct("updated")),t.push(new ct("md5Hash",null,!0)),t.push(new ct("cacheControl",null,!0)),t.push(new ct("contentDisposition",null,!0)),t.push(new ct("contentEncoding",null,!0)),t.push(new ct("contentLanguage",null,!0)),t.push(new ct("contentType",null,!0)),t.push(new ct("metadata","customMetadata",!0)),el=t,el}function uP(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Rt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function cP(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return uP(r,t),r}function a0(t,e,n){const r=s0(e);return r===null?null:cP(t,r,n)}function hP(t,e,n,r){const s=s0(e);if(s===null||!Sp(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const f=t.bucket,m=t.fullPath,g="/b/"+o(f)+"/o/"+o(m),w=kp(g,n,r),I=e0({alt:"media",token:c});return w+I})[0]}function dP(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class l0{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function u0(t){if(!t)throw Ip()}function fP(t,e){function n(r,s){const i=a0(t,s,e);return u0(i!==null),i}return n}function pP(t,e){function n(r,s){const i=a0(t,s,e);return u0(i!==null),hP(i,s,t.host,t._protocol)}return n}function c0(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=C2():s=k2():n.getStatus()===402?s=A2(t.bucket):n.getStatus()===403?s=R2(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function mP(t){const e=c0(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=S2(t.path)),i.serverResponse=s.serverResponse,i}return n}function gP(t,e,n){const r=e.fullServerUrl(),s=kp(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new l0(s,i,pP(t,n),o);return l.errorHandler=mP(e),l}function yP(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function _P(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=yP(null,e)),r}function vP(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let A="";for(let b=0;b<2;b++)A=A+Math.random().toString().slice(2);return A}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const c=_P(e,r,s),f=dP(c,n),m="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,g=`\r
--`+u+"--",w=sr.getBlob(m,r,g);if(w===null)throw V2();const I={name:c.fullPath},P=kp(i,t.host,t._protocol),V="POST",S=t.maxUploadRetryTime,T=new l0(P,V,fP(t,n),S);return T.urlParams=I,T.headers=o,T.body=w.uploadData(),T.errorHandler=c0(e),T}class wP{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=is.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=is.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=is.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s,i){if(this.sent_)throw eo("cannot .send() more than once");if(Or(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw eo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw eo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw eo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw eo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class EP extends wP{initXhr(){this.xhr_.responseType="text"}}function h0(){return new EP}/**
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
 */class gs{constructor(e,n){this._service=e,n instanceof Rt?this._location=n:this._location=Rt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new gs(e,n)}get root(){const e=new Rt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return i0(this._location.path)}get storage(){return this._service}get parent(){const e=iP(this._location.path);if(e===null)return null;const n=new Rt(this._location.bucket,e);return new gs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw L2(e)}}function TP(t,e,n){t._throwIfRoot("uploadBytes");const r=vP(t.storage,t._location,o0(),new sr(e,!0),n);return t.storage.makeRequestWithTokens(r,h0).then(s=>({metadata:s,ref:t}))}function IP(t){t._throwIfRoot("getDownloadURL");const e=gP(t.storage,t._location,o0());return t.storage.makeRequestWithTokens(e,h0).then(n=>{if(n===null)throw j2();return n})}function SP(t,e){const n=oP(t._location.path,e),r=new Rt(t._location.bucket,n);return new gs(t.storage,r)}/**
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
 */function AP(t){return/^[A-Za-z]+:\/\//.test(t)}function kP(t,e){return new gs(t,e)}function d0(t,e){if(t instanceof Cp){const n=t;if(n._bucket==null)throw D2();const r=new gs(n,n._bucket);return e!=null?d0(r,e):r}else return e!==void 0?SP(t,e):t}function CP(t,e){if(e&&AP(e)){if(t instanceof Cp)return kP(t,e);throw Pd("To use ref(service, url), the first argument must be a Storage instance.")}else return d0(t,e)}function h_(t,e){const n=e==null?void 0:e[J1];return n==null?null:Rt.makeFromBucketSpec(n,t)}function RP(t,e,n,r={}){t.host=`${e}:${n}`;const s=Or(e);s&&(Lf(`https://${t.host}/b`),Mf("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:oE(i,t.app.options.projectId))}class Cp{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=X1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=T2,this._maxUploadRetryTime=I2,this._requests=new Set,s!=null?this._bucket=Rt.makeFromBucketSpec(s,this._host):this._bucket=h_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Rt.makeFromBucketSpec(this._url,e):this._bucket=h_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){c_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){c_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Ot(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new gs(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new M2(Z1());{const o=Q2(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const d_="@firebase/storage",f_="0.14.0";/**
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
 */const f0="storage";function Nd(t,e,n){return t=Te(t),TP(t,e,n)}function bd(t){return t=Te(t),IP(t)}function Dd(t,e){return t=Te(t),CP(t,e)}function xP(t=zf(),e){t=Te(t);const r=Pu(t,f0).getImmediate({identifier:e}),s=rE("storage");return s&&PP(r,...s),r}function PP(t,e,n,r={}){RP(t,e,n,r)}function NP(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Cp(n,r,s,e,ws)}function bP(){fs(new kr(f0,NP,"PUBLIC").setMultipleInstances(!0)),dn(d_,f_,""),dn(d_,f_,"esm2020")}bP();var DP="firebase",VP="12.8.0";/**
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
 */dn(DP,VP,"app");function p0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jP=p0,m0=new aa("auth","Firebase",p0());/**
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
 */const ou=new Ff("@firebase/auth");function OP(t,...e){ou.logLevel<=ne.WARN&&ou.warn(`Auth (${ws}): ${t}`,...e)}function wl(t,...e){ou.logLevel<=ne.ERROR&&ou.error(`Auth (${ws}): ${t}`,...e)}/**
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
 */function wn(t,...e){throw xp(t,...e)}function Jt(t,...e){return xp(t,...e)}function Rp(t,e,n){const r={...jP(),[e]:n};return new aa("auth","Firebase",r).create(e,{appName:t.name})}function os(t){return Rp(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function LP(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&wn(t,"argument-error"),Rp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function xp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return m0.create(t,...e)}function K(t,e,...n){if(!t)throw xp(e,...n)}function Nn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw wl(e),new Error(e)}function $n(t,e){t||Nn(e)}/**
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
 */function Vd(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function MP(){return p_()==="http:"||p_()==="https:"}function p_(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function FP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(MP()||LA()||"connection"in navigator)?navigator.onLine:!0}function UP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ma{constructor(e,n){this.shortDelay=e,this.longDelay=n,$n(n>e,"Short delay should be less than long delay!"),this.isMobile=VA()||MA()}get(){return FP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Pp(t,e){$n(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class g0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const zP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const BP=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],$P=new ma(3e4,6e4);function Np(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Ri(t,e,n,r,s={}){return y0(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=la({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...i};return OA()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Or(t.emulatorConfig.host)&&(c.credentials="include"),g0.fetch()(await _0(t,t.config.apiHost,n,l),c)})}async function y0(t,e,n){t._canInitEmulator=!1;const r={...zP,...e};try{const s=new qP(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw tl(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw tl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw tl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw tl(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Rp(t,f,c);wn(t,f)}}catch(s){if(s instanceof Tn)throw s;wn(t,"network-request-failed",{message:String(s)})}}async function HP(t,e,n,r,s={}){const i=await Ri(t,e,n,r,s);return"mfaPendingCredential"in i&&wn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function _0(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Pp(t.config,s):`${t.config.apiScheme}://${s}`;return BP.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class qP{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Jt(this.auth,"network-request-failed")),$P.get())})}}function tl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Jt(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function WP(t,e){return Ri(t,"POST","/v1/accounts:delete",e)}async function au(t,e){return Ri(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ao(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function GP(t,e=!1){const n=Te(t),r=await n.getIdToken(e),s=bp(r);K(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ao(dh(s.auth_time)),issuedAtTime:Ao(dh(s.iat)),expirationTime:Ao(dh(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function dh(t){return Number(t)*1e3}function bp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return wl("JWT malformed, contained fewer than 3 sections"),null;try{const s=tE(n);return s?JSON.parse(s):(wl("Failed to decode base64 JWT payload"),null)}catch(s){return wl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function m_(t){const e=bp(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Zo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Tn&&KP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function KP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class QP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */async function lu(t){var m;const e=t.auth,n=await t.getIdToken(),r=await Zo(t,au(e,{idToken:n}));K(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(m=s.providerUserInfo)!=null&&m.length?v0(s.providerUserInfo):[],o=XP(t.providerData,i),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new jd(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function YP(t){const e=Te(t);await lu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function XP(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function v0(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function JP(t,e){const n=await y0(t,{},async()=>{const r=la({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await _0(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Or(t.emulatorConfig.host)&&(u.credentials="include"),g0.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ZP(t,e){return Ri(t,"POST","/v2/accounts:revokeToken",Np(t,e))}/**
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
 */class ei{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):m_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=m_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await JP(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ei;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(K(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(K(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ei,this.toJSON())}_performRefresh(){return Nn("not implemented")}}/**
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
 */function Zn(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Kt{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new QP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new jd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Zo(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return GP(this,e)}reload(){return YP(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Kt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await lu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ot(this.auth.app))return Promise.reject(os(this.auth));const e=await this.getIdToken();return await Zo(this,WP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:m,emailVerified:g,isAnonymous:w,providerData:I,stsTokenManager:P}=n;K(m&&P,e,"internal-error");const V=ei.fromJSON(this.name,P);K(typeof m=="string",e,"internal-error"),Zn(r,e.name),Zn(s,e.name),K(typeof g=="boolean",e,"internal-error"),K(typeof w=="boolean",e,"internal-error"),Zn(i,e.name),Zn(o,e.name),Zn(l,e.name),Zn(u,e.name),Zn(c,e.name),Zn(f,e.name);const S=new Kt({uid:m,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:w,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:V,createdAt:c,lastLoginAt:f});return I&&Array.isArray(I)&&(S.providerData=I.map(T=>({...T}))),u&&(S._redirectEventId=u),S}static async _fromIdTokenResponse(e,n,r=!1){const s=new ei;s.updateFromServerResponse(n);const i=new Kt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await lu(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];K(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?v0(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new ei;l.updateFromIdToken(r);const u=new Kt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new jd(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,c),u}}/**
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
 */const g_=new Map;function bn(t){$n(t instanceof Function,"Expected a class definition");let e=g_.get(t);return e?($n(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,g_.set(t,e),e)}/**
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
 */class w0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}w0.type="NONE";const y_=w0;/**
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
 */function El(t,e,n){return`firebase:${t}:${e}:${n}`}class ti{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=El(this.userKey,s.apiKey,i),this.fullPersistenceKey=El("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await au(this.auth,{idToken:e}).catch(()=>{});return n?Kt._fromGetAccountInfoResponse(this.auth,n,e):null}return Kt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ti(bn(y_),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||bn(y_);const o=El(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){let m;if(typeof f=="string"){const g=await au(e,{idToken:f}).catch(()=>{});if(!g)break;m=await Kt._fromGetAccountInfoResponse(e,g,f)}else m=Kt._fromJSON(e,f);c!==i&&(l=m),i=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new ti(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new ti(i,e,r))}}/**
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
 */function __(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(S0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(E0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(k0(e))return"Blackberry";if(C0(e))return"Webos";if(T0(e))return"Safari";if((e.includes("chrome/")||I0(e))&&!e.includes("edge/"))return"Chrome";if(A0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function E0(t=at()){return/firefox\//i.test(t)}function T0(t=at()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function I0(t=at()){return/crios\//i.test(t)}function S0(t=at()){return/iemobile/i.test(t)}function A0(t=at()){return/android/i.test(t)}function k0(t=at()){return/blackberry/i.test(t)}function C0(t=at()){return/webos/i.test(t)}function Dp(t=at()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function eN(t=at()){var e;return Dp(t)&&!!((e=window.navigator)!=null&&e.standalone)}function tN(){return FA()&&document.documentMode===10}function R0(t=at()){return Dp(t)||A0(t)||C0(t)||k0(t)||/windows phone/i.test(t)||S0(t)}/**
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
 */function x0(t,e=[]){let n;switch(t){case"Browser":n=__(at());break;case"Worker":n=`${__(at())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ws}/${r}`}/**
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
 */class nN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function rN(t,e={}){return Ri(t,"GET","/v2/passwordPolicy",Np(t,e))}/**
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
 */const sN=6;class iN{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??sN,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class oN{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new v_(this),this.idTokenSubscription=new v_(this),this.beforeStateQueue=new nN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=m0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=bn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await ti.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await au(this,{idToken:e}),r=await Kt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Ot(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await lu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=UP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ot(this.app))return Promise.reject(os(this));const n=e?Te(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ot(this.app)?Promise.reject(os(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ot(this.app)?Promise.reject(os(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(bn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rN(this),n=new iN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new aa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ZP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&bn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await ti.create(this,[bn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=x0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Ot(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&OP(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function tc(t){return Te(t)}class v_{constructor(e){this.auth=e,this.observer=null,this.addObserver=GA(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Vp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function aN(t){Vp=t}function lN(t){return Vp.loadJS(t)}function uN(){return Vp.gapiScript}function cN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function hN(t,e){const n=Pu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ds(i,e??{}))return s;wn(s,"already-initialized")}return n.initialize({options:e})}function dN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(bn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function fN(t,e,n){const r=tc(t);K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=P0(e),{host:o,port:l}=pN(e),u=l===null?"":`:${l}`,c={url:`${i}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){K(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),K(ds(c,r.config.emulator)&&ds(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Or(o)?(Lf(`${i}//${o}${u}`),Mf("Auth",!0)):mN()}function P0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function pN(t){const e=P0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:w_(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:w_(o)}}}function w_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function mN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class N0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Nn("not implemented")}_getIdTokenResponse(e){return Nn("not implemented")}_linkToIdToken(e,n){return Nn("not implemented")}_getReauthenticationResolver(e){return Nn("not implemented")}}/**
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
 */async function ni(t,e){return HP(t,"POST","/v1/accounts:signInWithIdp",Np(t,e))}/**
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
 */const gN="http://localhost";class ys extends N0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ys(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new ys(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ni(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ni(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ni(e,n)}buildRequest(){const e={requestUri:gN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=la(n)}return e}}/**
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
 */class jp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ga extends jp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ir extends ga{constructor(){super("facebook.com")}static credential(e){return ys._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ir.credential(e.oauthAccessToken)}catch{return null}}}ir.FACEBOOK_SIGN_IN_METHOD="facebook.com";ir.PROVIDER_ID="facebook.com";/**
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
 */class Rn extends ga{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ys._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Rn.credential(n,r)}catch{return null}}}Rn.GOOGLE_SIGN_IN_METHOD="google.com";Rn.PROVIDER_ID="google.com";/**
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
 */class or extends ga{constructor(){super("github.com")}static credential(e){return ys._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return or.credential(e.oauthAccessToken)}catch{return null}}}or.GITHUB_SIGN_IN_METHOD="github.com";or.PROVIDER_ID="github.com";/**
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
 */class ar extends ga{constructor(){super("twitter.com")}static credential(e,n){return ys._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ar.credential(n,r)}catch{return null}}}ar.TWITTER_SIGN_IN_METHOD="twitter.com";ar.PROVIDER_ID="twitter.com";/**
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
 */class _i{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Kt._fromIdTokenResponse(e,r,s),o=E_(r);return new _i({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=E_(r);return new _i({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function E_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class uu extends Tn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,uu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new uu(e,n,r,s)}}function b0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?uu._fromErrorAndOperation(t,i,e,r):i})}async function yN(t,e,n=!1){const r=await Zo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _i._forOperation(t,"link",r)}/**
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
 */async function _N(t,e,n=!1){const{auth:r}=t;if(Ot(r.app))return Promise.reject(os(r));const s="reauthenticate";try{const i=await Zo(t,b0(r,s,e,t),n);K(i.idToken,r,"internal-error");const o=bp(i.idToken);K(o,r,"internal-error");const{sub:l}=o;return K(t.uid===l,r,"user-mismatch"),_i._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&wn(r,"user-mismatch"),i}}/**
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
 */async function vN(t,e,n=!1){if(Ot(t.app))return Promise.reject(os(t));const r="signIn",s=await b0(t,r,e),i=await _i._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function wN(t,e,n,r){return Te(t).onIdTokenChanged(e,n,r)}function EN(t,e,n){return Te(t).beforeAuthStateChanged(e,n)}function TN(t,e,n,r){return Te(t).onAuthStateChanged(e,n,r)}function IN(t){return Te(t).signOut()}const cu="__sak";/**
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
 */class D0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(cu,"1"),this.storage.removeItem(cu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const SN=1e3,AN=10;class V0 extends D0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=R0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);tN()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,AN):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},SN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}V0.type="LOCAL";const kN=V0;/**
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
 */function CN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class nc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new nc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async c=>c(n.origin,i)),u=await CN(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nc.receivers=[];/**
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
 */function Op(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class RN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const c=Op("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const g=m;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function yn(){return window}function xN(t){yn().location.href=t}/**
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
 */function L0(){return typeof yn().WorkerGlobalScope<"u"&&typeof yn().importScripts=="function"}async function PN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function NN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function bN(){return L0()?self:null}/**
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
 */const M0="firebaseLocalStorageDb",DN=1,hu="firebaseLocalStorage",F0="fbase_key";class ya{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function rc(t,e){return t.transaction([hu],e?"readwrite":"readonly").objectStore(hu)}function VN(){const t=indexedDB.deleteDatabase(M0);return new ya(t).toPromise()}function Od(){const t=indexedDB.open(M0,DN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(hu,{keyPath:F0})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(hu)?e(r):(r.close(),await VN(),e(await Od()))})})}async function T_(t,e,n){const r=rc(t,!0).put({[F0]:e,value:n});return new ya(r).toPromise()}async function jN(t,e){const n=rc(t,!1).get(e),r=await new ya(n).toPromise();return r===void 0?null:r.value}function I_(t,e){const n=rc(t,!0).delete(e);return new ya(n).toPromise()}const ON=800,LN=3;class U0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Od(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>LN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return L0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nc._getInstance(bN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await PN(),!this.activeServiceWorker)return;this.sender=new RN(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||NN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Od();return await T_(e,cu,"1"),await I_(e,cu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>T_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>jN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>I_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=rc(s,!1).getAll();return new ya(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ON)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}U0.type="LOCAL";const MN=U0;new ma(3e4,6e4);/**
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
 */function z0(t,e){return e?bn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Lp extends N0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ni(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ni(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ni(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function FN(t){return vN(t.auth,new Lp(t),t.bypassAuthState)}function UN(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),_N(n,new Lp(t),t.bypassAuthState)}async function zN(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),yN(n,new Lp(t),t.bypassAuthState)}/**
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
 */class B0{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return FN;case"linkViaPopup":case"linkViaRedirect":return zN;case"reauthViaPopup":case"reauthViaRedirect":return UN;default:wn(this.auth,"internal-error")}}resolve(e){$n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const BN=new ma(2e3,1e4);async function $N(t,e,n){if(Ot(t.app))return Promise.reject(Jt(t,"operation-not-supported-in-this-environment"));const r=tc(t);LP(t,e,jp);const s=z0(r,n);return new ts(r,"signInViaPopup",e,s).executeNotNull()}class ts extends B0{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ts.currentPopupAction&&ts.currentPopupAction.cancel(),ts.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){$n(this.filter.length===1,"Popup operations only handle one event");const e=Op();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ts.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,BN.get())};e()}}ts.currentPopupAction=null;/**
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
 */const HN="pendingRedirect",Tl=new Map;class qN extends B0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Tl.get(this.auth._key());if(!e){try{const r=await WN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Tl.set(this.auth._key(),e)}return this.bypassAuthState||Tl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function WN(t,e){const n=QN(e),r=KN(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function GN(t,e){Tl.set(t._key(),e)}function KN(t){return bn(t._redirectPersistence)}function QN(t){return El(HN,t.config.apiKey,t.name)}async function YN(t,e,n=!1){if(Ot(t.app))return Promise.reject(os(t));const r=tc(t),s=z0(r,e),o=await new qN(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const XN=10*60*1e3;class JN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ZN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!$0(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Jt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=XN&&this.cachedEventUids.clear(),this.cachedEventUids.has(S_(e))}saveEventToCache(e){this.cachedEventUids.add(S_(e)),this.lastProcessedEventTime=Date.now()}}function S_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function $0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ZN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $0(t);default:return!1}}/**
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
 */async function eb(t,e={}){return Ri(t,"GET","/v1/projects",e)}/**
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
 */const tb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nb=/^https?/;async function rb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await eb(t);for(const n of e)try{if(sb(n))return}catch{}wn(t,"unauthorized-domain")}function sb(t){const e=Vd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!nb.test(n))return!1;if(tb.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const ib=new ma(3e4,6e4);function A_(){const t=yn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ob(t){return new Promise((e,n)=>{var s,i,o;function r(){A_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{A_(),n(Jt(t,"network-request-failed"))},timeout:ib.get()})}if((i=(s=yn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=yn().gapi)!=null&&o.load)r();else{const l=cN("iframefcb");return yn()[l]=()=>{gapi.load?r():n(Jt(t,"network-request-failed"))},lN(`${uN()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Il=null,e})}let Il=null;function ab(t){return Il=Il||ob(t),Il}/**
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
 */const lb=new ma(5e3,15e3),ub="__/auth/iframe",cb="emulator/auth/iframe",hb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},db=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fb(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Pp(e,cb):`https://${t.config.authDomain}/${ub}`,r={apiKey:e.apiKey,appName:t.name,v:ws},s=db.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${la(r).slice(1)}`}async function pb(t){const e=await ab(t),n=yn().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:fb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Jt(t,"network-request-failed"),l=yn().setTimeout(()=>{i(o)},lb.get());function u(){yn().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const mb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gb=500,yb=600,_b="_blank",vb="http://localhost";class k_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wb(t,e,n,r=gb,s=yb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...mb,width:r.toString(),height:s.toString(),top:i,left:o},c=at().toLowerCase();n&&(l=I0(c)?_b:n),E0(c)&&(e=e||vb,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[w,I])=>`${g}${w}=${I},`,"");if(eN(c)&&l!=="_self")return Eb(e||"",l),new k_(null);const m=window.open(e||"",l,f);K(m,t,"popup-blocked");try{m.focus()}catch{}return new k_(m)}function Eb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Tb="__/auth/handler",Ib="emulator/auth/handler",Sb=encodeURIComponent("fac");async function C_(t,e,n,r,s,i){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ws,eventId:s};if(e instanceof jp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",WA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof ga){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${Sb}=${encodeURIComponent(u)}`:"";return`${Ab(t)}?${la(l).slice(1)}${c}`}function Ab({config:t}){return t.emulator?Pp(t,Ib):`https://${t.authDomain}/${Tb}`}/**
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
 */const fh="webStorageSupport";class kb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=O0,this._completeRedirectFn=YN,this._overrideRedirectResult=GN}async _openPopup(e,n,r,s){var o;$n((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await C_(e,n,r,Vd(),s);return wb(e,i,Op())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await C_(e,n,r,Vd(),s);return xN(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):($n(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await pb(e),r=new JN(e);return n.register("authEvent",s=>(K(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(fh,{type:fh},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[fh];i!==void 0&&n(!!i),wn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=rb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return R0()||T0()||Dp()}}const Cb=kb;var R_="@firebase/auth",x_="1.12.0";/**
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
 */class Rb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function xb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Pb(t){fs(new kr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:x0(t)},c=new oN(r,s,i,u);return dN(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),fs(new kr("auth-internal",e=>{const n=tc(e.getProvider("auth").getImmediate());return(r=>new Rb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dn(R_,x_,xb(t)),dn(R_,x_,"esm2020")}/**
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
 */const Nb=5*60,bb=iE("authIdTokenMaxAge")||Nb;let P_=null;const Db=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>bb)return;const s=n==null?void 0:n.token;P_!==s&&(P_=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Vb(t=zf()){const e=Pu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=hN(t,{popupRedirectResolver:Cb,persistence:[MN,kN,O0]}),r=iE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Db(i.toString());EN(n,o,()=>o(n.currentUser)),wN(n,l=>o(l))}}const s=nE("auth");return s&&fN(n,`http://${s}`),n}function jb(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}aN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Jt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",jb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Pb("Browser");const Ob={apiKey:"AIzaSyChYmVhjDixj7-zjW8T_vVGFX_g18a5NDw",authDomain:"nurazkhan-50303.firebaseapp.com",projectId:"nurazkhan-50303",storageBucket:"nurazkhan-50303.firebasestorage.app",messagingSenderId:"298709005555",appId:"1:298709005555:web:b8df5cbb5f041b48fff386"},Mp=uE(Ob),ea=u2(Mp),Ld=xP(Mp),jn=Vb(Mp),dt=()=>{const t=jn.currentUser;if(!t)throw new Error("User not authenticated");return it(ea,"users",t.uid)},In={async create(t){const e=dt(),n=mn(e,"projects"),r=Y1(ea),s=it(n),i=s.id,o={name:t.name,description:t.description||"",thumbnailUrl:null,folderId:t.folderId||null,tags:t.tags||[],createdAt:hr(),updatedAt:hr(),currentVersionId:null};if(t.thumbnail instanceof File){const f=Dd(Ld,`users/${jn.currentUser.uid}/thumbnails/${i}/${t.thumbnail.name}`);await Nd(f,t.thumbnail),o.thumbnailUrl=await bd(f)}const l=mn(s,"versions"),u=it(l),c=u.id;return o.currentVersionId=c,r.set(s,o),r.set(u,{name:"v1.0",description:"Initial version",parentVersionId:null,todos:[],errors:[],createdAt:hr()}),await r.commit(),i},async getAll(){const t=jn.currentUser;if(!t)return[];const e=it(ea,"users",t.uid),n=Yu(mn(e,"projects"),Xu("updatedAt","desc"));return(await Ju(n)).docs.map(s=>{var i,o;return{id:s.id,...s.data(),createdAt:((i=s.data().createdAt)==null?void 0:i.toDate())||new Date,updatedAt:((o=s.data().updatedAt)==null?void 0:o.toDate())||new Date}})},async getById(t){var s,i;const e=dt(),n=it(e,"projects",t),r=await wp(n);if(r.exists())return{id:r.id,...r.data(),createdAt:(s=r.data().createdAt)==null?void 0:s.toDate(),updatedAt:(i=r.data().updatedAt)==null?void 0:i.toDate()};throw new Error("Project not found")},async update(t,e){const n=dt(),r=it(n,"projects",t),s={...e,updatedAt:hr()};if(e.thumbnail instanceof File){const i=Dd(Ld,`users/${jn.currentUser.uid}/thumbnails/${t}/${e.thumbnail.name}`);await Nd(i,e.thumbnail),s.thumbnailUrl=await bd(i),delete s.thumbnail}await Ep(r,s)},async delete(t){const e=dt(),n=it(e,"projects",t);await Zu(n)}},Sn={async create(t,e){const n=dt(),r=mn(n,"projects",t,"versions"),s=await Tp(r,{name:e.name,description:e.description||"",parentVersionId:e.parentVersionId||null,todos:e.todos||[],errors:e.errors||[],createdAt:hr()});if(e.parentVersionId&&e.copyResources){const i=await An.getByVersion(t,e.parentVersionId),o=s.id,l=Y1(ea),u=mn(n,"projects",t,"versions",o,"resources");i.forEach(c=>{const f=it(u);l.set(f,{name:c.name,type:c.type,url:c.url,metadata:c.metadata,createdAt:hr()})}),await l.commit()}return s.id},async getByProject(t){const e=dt(),n=Yu(mn(e,"projects",t,"versions"),Xu("createdAt","desc"));return(await Ju(n)).docs.map(s=>{var i;return{id:s.id,...s.data(),createdAt:(i=s.data().createdAt)==null?void 0:i.toDate()}})},async getById(t,e){var i;const n=dt(),r=it(n,"projects",t,"versions",e),s=await wp(r);return{id:s.id,...s.data(),createdAt:(i=s.data().createdAt)==null?void 0:i.toDate()}},async update(t,e,n){const r=dt(),s=it(r,"projects",t,"versions",e);await Ep(s,n)},async delete(t,e){const n=dt(),r=it(n,"projects",t,"versions",e);await Zu(r)}},An={async create(t,e,n){const r=dt(),s=mn(r,"projects",t,"versions",e,"resources");let i=n.url||null;if(n.data instanceof File){const l=`users/${jn.currentUser.uid}/projects/${t}/versions/${e}/${Date.now()}_${n.name}`,u=Dd(Ld,l);await Nd(u,n.data),i=await bd(u)}return(await Tp(s,{name:n.name,type:n.type,url:i,metadata:n.metadata||{},createdAt:hr()})).id},async getByVersion(t,e){const n=dt(),r=mn(n,"projects",t,"versions",e,"resources"),s=Yu(r,Xu("createdAt","desc"));return(await Ju(s)).docs.map(o=>{var l;return{id:o.id,...o.data(),data:null,createdAt:(l=o.data().createdAt)==null?void 0:l.toDate()}})},async update(t,e,n,r){const s=dt(),i=it(s,"projects",t,"versions",e,"resources",n);await Ep(i,r)},async delete(t,e,n){const r=dt(),s=it(r,"projects",t,"versions",e,"resources",n),i=await wp(s);i.exists()&&i.data().url&&i.data().url.startsWith("http"),await Zu(s)}},ph={async create(t){const e=dt(),n=mn(e,"folders");return(await Tp(n,{name:t,createdAt:hr()})).id},async getAll(){const t=jn.currentUser;if(!t)return[];const e=it(ea,"users",t.uid),n=Yu(mn(e,"folders"),Xu("name"));return(await Ju(n)).docs.map(s=>({id:s.id,...s.data()}))},async delete(t){const e=dt();await Zu(it(e,"folders",t))}},Xe=TA((t,e)=>({user:null,authLoading:!0,projects:[],folders:[],currentProject:null,currentVersion:null,versions:[],resources:[],view:"list",sidebarOpen:!0,isLoading:!1,initAuth:()=>TN(jn,async r=>{t({user:r,authLoading:!1}),r?(await e().loadProjects(),await e().loadFolders()):t({projects:[],folders:[],currentProject:null})}),login:async()=>{try{const n=new Rn;await $N(jn,n)}catch(n){throw console.error("Login failed:",n),n}},logout:async()=>{await IN(jn),t({user:null,projects:[],folders:[]})},setView:n=>t({view:n}),toggleSidebar:()=>t(n=>({sidebarOpen:!n.sidebarOpen})),setLoading:n=>t({isLoading:n}),loadFolders:async()=>{if(!e().user)return;const n=await ph.getAll();t({folders:n})},createFolder:async n=>{await ph.create(n),await e().loadFolders()},deleteFolder:async n=>{await ph.delete(n),await e().loadFolders()},loadProjects:async()=>{if(e().user){t({isLoading:!0});try{const n=await In.getAll();t({projects:n,isLoading:!1})}catch(n){console.error(n),t({isLoading:!1})}}},createProject:async n=>{const r=await In.create(n);return await e().loadProjects(),r},selectProject:async n=>{if(!n){t({currentProject:null,currentVersion:null,versions:[],resources:[]});return}t({isLoading:!0});try{const r=await In.getById(n),s=await Sn.getByProject(n);let i=null,o=[];if(r.currentVersionId){const l=s.find(u=>u.id===r.currentVersionId);l&&(i=l,o=await An.getByVersion(n,r.currentVersionId))}t({currentProject:r,currentVersion:i,versions:s,resources:o,isLoading:!1})}catch(r){console.error(r),t({isLoading:!1})}},updateProject:async(n,r)=>{var s;if(await In.update(n,r),await e().loadProjects(),((s=e().currentProject)==null?void 0:s.id)===n){const i=await In.getById(n);t({currentProject:i})}},deleteProject:async n=>{var r;await In.delete(n),await e().loadProjects(),((r=e().currentProject)==null?void 0:r.id)===n&&t({currentProject:null,currentVersion:null,versions:[],resources:[]})},createVersion:async(n,r)=>{const s=await Sn.create(n,r),i=await Sn.getByProject(n);await In.update(n,{currentVersionId:s});const o=await In.getById(n);return t({versions:i,currentProject:o}),s},selectVersion:async n=>{const r=e().currentProject.id,s=e().versions.find(o=>o.id===n)||await Sn.getById(r,n),i=await An.getByVersion(r,n);e().currentProject&&await In.update(r,{currentVersionId:n}),t({currentVersion:s,resources:i})},updateVersion:async(n,r)=>{var i;const s=e().currentProject.id;if(await Sn.update(s,n,r),((i=e().currentVersion)==null?void 0:i.id)===n){const o=await Sn.getByProject(s),l=o.find(u=>u.id===n);t({currentVersion:l,versions:o})}else{const o=await Sn.getByProject(s);t({versions:o})}},deleteVersion:async n=>{var i;const r=e().currentProject.id;await Sn.delete(r,n);const s=await Sn.getByProject(r);t({versions:s}),((i=e().currentVersion)==null?void 0:i.id)===n&&t({currentVersion:s[0]||null,resources:[]})},addResource:async(n,r)=>{const s=e().currentProject.id;await An.create(s,n,r);const i=await An.getByVersion(s,n);t({resources:i})},updateResource:async(n,r)=>{const s=e().currentProject.id,i=e().currentVersion.id;await An.update(s,i,n,r);const o=await An.getByVersion(s,i);t({resources:o})},deleteResource:async n=>{const r=e().currentProject.id,s=e().currentVersion.id;await An.delete(r,s,n);const i=await An.getByVersion(r,s);t({resources:i})}}));/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Lb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),X=(t,e)=>{const n=B.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:l="",children:u,...c},f)=>B.createElement("svg",{ref:f,...Lb,width:s,height:s,stroke:r,strokeWidth:o?Number(i)*24/Number(s):i,className:["lucide",`lucide-${Mb(t)}`,l].join(" "),...c},[...e.map(([m,g])=>B.createElement(m,g)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fb=X("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=X("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=X("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=X("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb=X("Bug",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=X("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=X("CheckSquare",[["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}],["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",key:"1jnkn4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=X("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=X("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=X("CircuitBoard",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M11 9h4a2 2 0 0 0 2-2V3",key:"1ve2rv"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"M7 21v-4a2 2 0 0 1 2-2h4",key:"1fwkro"}],["circle",{cx:"15",cy:"15",r:"2",key:"3i40o0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=X("Clipboard",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=X("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=X("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sc=X("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=X("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=X("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ta=X("FileCode",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=X("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=X("FileType",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"M9 13v-1h6v1",key:"1bb014"}],["path",{d:"M11 18h2",key:"12mj7e"}],["path",{d:"M12 12v6",key:"3ahymv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=X("File",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=X("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=X("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vi=X("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _a=X("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=X("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qb=X("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=X("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=X("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=X("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=X("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eD=X("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tD=X("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nD=X("PenSquare",[["path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1qinfi"}],["path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z",key:"w2jsv5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rD=X("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tn=X("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sD=X("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iD=X("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=X("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oD=X("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aD=X("Tag",[["path",{d:"M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z",key:"14b2ls"}],["path",{d:"M7 7h.01",key:"7u93v4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fr=X("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=X("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N_=X("Usb",[["circle",{cx:"10",cy:"7",r:"1",key:"dypaad"}],["circle",{cx:"4",cy:"20",r:"1",key:"22iqad"}],["path",{d:"M4.7 19.3 19 5",key:"1enqfc"}],["path",{d:"m21 3-3 1 2 2Z",key:"d3ov82"}],["path",{d:"M9.26 7.68 5 12l2 5",key:"1esawj"}],["path",{d:"m10 14 5 2 3.5-3.5",key:"v8oal5"}],["path",{d:"m18 12 1-1 1 1-1 1Z",key:"1bh22v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=X("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const En=X("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function lD(){var A;const{projects:t,folders:e,currentProject:n,toggleSidebar:r,selectProject:s,createFolder:i,deleteFolder:o,logout:l,user:u}=Xe(),[c,f]=B.useState(""),[m,g]=B.useState({}),w=b=>{g(x=>({...x,[b]:!x[b]}))},I=async()=>{const b=prompt("Folder Name:");b&&await i(b)},P=async(b,x)=>{b.stopPropagation(),confirm("Delete this folder? Projects inside will be moved to root.")&&await o(x)},V=t.filter(b=>b.name.toLowerCase().includes(c.toLowerCase())),S=b=>V.filter(x=>x.folderId===b),T=V.filter(b=>!b.folderId);return h.jsxs("aside",{className:"sidebar",children:[h.jsxs("div",{className:"sidebar-header",children:[h.jsxs("button",{className:"logo",onClick:()=>s(null),title:"Go to home",children:[h.jsx(sc,{className:"logo-icon"}),h.jsx("span",{className:"logo-text",children:"NiroVault"})]}),h.jsx("button",{className:"btn btn-icon btn-ghost",onClick:r,children:h.jsx(Hb,{})})]}),h.jsxs("div",{className:"sidebar-content",children:[h.jsxs("div",{className:"sidebar-user",children:[h.jsx("div",{className:"user-avatar",children:u!=null&&u.photoURL?h.jsx("img",{src:u.photoURL,alt:u.displayName}):h.jsx("div",{className:"avatar-placeholder",children:(A=u==null?void 0:u.email)==null?void 0:A[0].toUpperCase()})}),h.jsxs("div",{className:"user-info",children:[h.jsx("span",{className:"user-name truncate",children:(u==null?void 0:u.displayName)||"User"}),h.jsx("span",{className:"user-email truncate",children:u==null?void 0:u.email})]})]}),h.jsxs("div",{className:"sidebar-search",children:[h.jsx(G0,{size:16}),h.jsx("input",{type:"text",placeholder:"Search projects...",className:"input",value:c,onChange:b=>f(b.target.value)})]}),h.jsx("div",{className:"sidebar-actions",children:h.jsxs("button",{className:"btn btn-sm btn-ghost",onClick:I,children:[h.jsx(Ud,{size:14}),"New Folder"]})}),h.jsxs("nav",{className:"sidebar-nav",children:[e.map(b=>{const x=S(b.id),O=m[b.id];return c&&x.length===0?null:h.jsxs("div",{className:"nav-section",children:[h.jsxs("div",{className:"nav-section-header",onClick:()=>w(b.id),children:[h.jsxs("div",{className:"folder-label",children:[O?h.jsx(Bp,{size:14}):h.jsx(Ud,{size:14}),h.jsx("span",{className:"truncate",children:b.name}),h.jsx("span",{className:"badge badge-sm",children:x.length})]}),h.jsx("button",{className:"btn btn-icon btn-ghost btn-xs folder-menu",onClick:y=>P(y,b.id),children:h.jsx(Fr,{size:12})})]}),O&&h.jsxs("ul",{className:"nav-list",children:[x.map(y=>h.jsx("li",{children:h.jsx("button",{className:`nav-item ${(n==null?void 0:n.id)===y.id?"active":""}`,onClick:()=>s(y.id),children:h.jsx("span",{className:"truncate",children:y.name})})},y.id)),x.length===0&&h.jsx("li",{className:"nav-empty",children:"Empty folder"})]})]},b.id)}),h.jsxs("div",{className:"nav-section",children:[h.jsx("span",{className:"nav-section-title",children:"Root Projects"}),h.jsxs("ul",{className:"nav-list",children:[T.map(b=>h.jsx("li",{children:h.jsx("button",{className:`nav-item ${(n==null?void 0:n.id)===b.id?"active":""}`,onClick:()=>s(b.id),children:h.jsx("span",{className:"truncate",children:b.name})})},b.id)),T.length===0&&e.length===0&&h.jsx("li",{className:"nav-empty",children:"No projects found"})]})]})]})]}),h.jsx("div",{className:"sidebar-footer",children:h.jsxs("button",{className:"btn btn-ghost nav-item",onClick:l,children:[h.jsx(Jb,{size:16}),h.jsx("span",{children:"Sign Out"})]})})]})}function uD({children:t,onCreateProject:e}){const{projects:n,currentProject:r,sidebarOpen:s,toggleSidebar:i,selectProject:o,view:l,setView:u}=Xe();return h.jsxs("div",{className:`layout ${s?"sidebar-open":"sidebar-closed"}`,children:[h.jsx(lD,{}),h.jsxs("main",{className:"main-content",children:[h.jsxs("header",{className:"main-header",children:[h.jsxs("div",{className:"header-left",children:[!s&&h.jsx("button",{className:"btn btn-icon btn-ghost",onClick:i,children:h.jsx(eD,{})}),h.jsx("h1",{className:"header-title",children:r?r.name:"All Projects"})]}),h.jsx("div",{className:"header-right",children:h.jsxs("div",{className:"view-toggle",children:[h.jsx("button",{className:`btn btn-icon btn-ghost ${l==="grid"?"active":""}`,onClick:()=>u("grid"),children:h.jsx(Kb,{size:18})}),h.jsx("button",{className:`btn btn-icon btn-ghost ${l==="list"?"active":""}`,onClick:()=>u("list"),children:h.jsx(Yb,{size:18})})]})})]}),h.jsx("div",{className:"content-wrapper",children:t})]})]})}function cD({project:t}){const{selectProject:e}=Xe(),n=r=>{if(!r)return"";const s=new Date(r);return s.toLocaleDateString("en-US",{month:"short",day:"numeric",year:s.getFullYear()!==new Date().getFullYear()?"numeric":void 0})};return h.jsxs("article",{className:"project-card card card-interactive",onClick:()=>e(t.id),tabIndex:0,onKeyDown:r=>r.key==="Enter"&&e(t.id),children:[h.jsx("div",{className:"project-thumbnail",children:t.thumbnailUrl||t.thumbnail?h.jsx("img",{src:t.thumbnailUrl||URL.createObjectURL(t.thumbnail),alt:t.name,loading:"lazy"}):h.jsx("div",{className:"project-thumbnail-placeholder",children:h.jsx(Bp,{size:32})})}),h.jsxs("div",{className:"project-info",children:[h.jsx("h3",{className:"project-name truncate",children:t.name}),t.description&&h.jsx("p",{className:"project-description truncate",children:t.description}),h.jsxs("div",{className:"project-meta",children:[h.jsxs("span",{className:"meta-item",children:[h.jsx(W0,{size:12}),n(t.updatedAt)]}),h.jsxs("span",{className:"meta-item",children:[h.jsx(vi,{size:12}),"v1.0"]})]})]})]})}function hD({onCreateProject:t}){const{projects:e,view:n,isLoading:r}=Xe();return r?h.jsx("div",{className:`project-list ${n}`,children:[1,2,3,4].map(s=>h.jsxs("div",{className:"project-card skeleton-card",children:[h.jsx("div",{className:"skeleton",style:{height:160}}),h.jsxs("div",{className:"skeleton-content",children:[h.jsx("div",{className:"skeleton",style:{height:20,width:"60%"}}),h.jsx("div",{className:"skeleton",style:{height:14,width:"80%"}})]})]},s))}):e.length===0?h.jsxs("div",{className:"empty-state",children:[h.jsx(Bp,{className:"empty-state-icon"}),h.jsx("h3",{children:"No projects yet"}),h.jsx("p",{children:"Create your first project to start organizing your electronics work, schematics, and firmware."}),h.jsxs("button",{className:"btn btn-primary btn-lg",onClick:t,children:[h.jsx(tn,{size:20}),"Create Project"]})]}):h.jsxs("div",{className:`project-list ${n}`,children:[e.map(s=>h.jsx(cD,{project:s},s.id)),h.jsxs("button",{className:"project-card add-card",onClick:t,children:[h.jsx(tn,{size:32}),h.jsx("span",{children:"New Project"})]})]})}function dD({versions:t,currentVersionId:e,onSelectVersion:n}){const r=B.useMemo(()=>{if(!t.length)return{nodes:[],height:0,width:0};const f=new Map;t.forEach(x=>f.set(x.id,{...x,children:[]}));const m=[];t.forEach(x=>{const O=f.get(x.id);x.parentVersionId&&f.has(x.parentVersionId)?f.get(x.parentVersionId).children.push(O):m.push(O)});const g=140,w=60,I=20,P=40;let V=0,S=0;const T=(x,O,y)=>{if(x.x=O,x.y=y,V=Math.max(V,O+g),S=Math.max(S,y+w),x.children.length===0)return O+g+I;let _=O;if(x.children.forEach(E=>{_=T(E,_,y+w+P)}),x.children.length>1){const E=x.children[0].x,R=x.children[x.children.length-1].x;x.x=(E+R+g)/2-g/2}return _};let A=0;m.forEach(x=>{A=T(x,A,0)});const b=x=>{let O=[];return x.forEach(y=>{O.push(y),O=[...O,...b(y.children)]}),O};return{nodes:b(m),roots:m,height:S+40,width:V+40,nodeWidth:g,nodeHeight:w}},[t]),s=()=>{const f=[],{nodes:m,nodeWidth:g,nodeHeight:w}=r;return m.forEach(I=>{I.children.forEach(P=>{const V=I.x+g/2,S=I.y+w,T=P.x+g/2,A=P.y,b=(S+A)/2,x=`M ${V} ${S} C ${V} ${b}, ${T} ${b}, ${T} ${A}`;f.push(h.jsx("path",{d:x,className:"version-connection",fill:"none"},`line-${I.id}-${P.id}`))})}),f};if(t.length===0)return h.jsxs("div",{className:"version-tree-empty",children:[h.jsx(vi,{size:32}),h.jsx("p",{children:"No versions yet"}),h.jsx("span",{className:"text-muted",children:"Create your first version to start tracking changes"})]});const{nodes:i,height:o,width:l,nodeWidth:u,nodeHeight:c}=r;return h.jsx("div",{className:"version-tree-container",children:h.jsx("svg",{className:"version-tree",width:l,height:o,viewBox:`0 0 ${l} ${o}`,children:h.jsxs("g",{transform:"translate(20, 20)",children:[s(),i.map(f=>h.jsxs("g",{className:`version-node ${f.id===e?"active":""}`,transform:`translate(${f.x}, ${f.y})`,onClick:()=>n(f.id),style:{cursor:"pointer"},children:[h.jsx("rect",{x:"0",y:"0",width:u,height:c,rx:"10",className:"version-node-bg"}),h.jsx("circle",{cx:"20",cy:c/2,r:"8",className:"version-dot"}),h.jsx("text",{x:"38",y:c/2-6,className:"version-name",children:f.name}),h.jsx("text",{x:"38",y:c/2+10,className:"version-date",children:new Date(f.createdAt).toLocaleDateString()})]},f.id))]})})})}function b_({resources:t,onAdd:e,type:n="image"}){const{deleteResource:r}=Xe(),[s,i]=B.useState(null),o=c=>c.data?URL.createObjectURL(c.data):c.url||"",l=c=>{var f;return c.type==="video"||((f=c.metadata)==null?void 0:f.mimeType)&&c.metadata.mimeType.startsWith("video/")},u=c=>{const f=o(c),m=document.createElement("a");m.href=f,m.download=c.name,document.body.appendChild(m),m.click(),document.body.removeChild(m)};return t.length===0?h.jsxs("div",{className:"gallery-empty",children:[h.jsx(_a,{size:48}),h.jsxs("h3",{children:["No ",n==="schematic"?"schematics":"media"," yet"]}),h.jsx("p",{children:"Add images, videos, or schematics to this version"}),h.jsxs("button",{className:"btn btn-primary",onClick:e,children:[h.jsx(tn,{size:18}),"Add Files"]})]}):h.jsxs("div",{className:"gallery",children:[h.jsxs("div",{className:"gallery-grid",children:[t.map(c=>h.jsxs("div",{className:"gallery-item",children:[h.jsxs("div",{className:"gallery-preview",onClick:()=>i(c),children:[l(c)?h.jsx("video",{src:o(c),muted:!0}):h.jsx("img",{src:o(c),alt:c.name,loading:"lazy"}),h.jsxs("div",{className:"gallery-overlay",children:[l(c)&&h.jsx(K0,{size:24}),h.jsx(Zb,{size:20})]})]}),h.jsxs("div",{className:"gallery-info",children:[h.jsx("span",{className:"gallery-name truncate",children:c.name}),h.jsxs("div",{className:"gallery-actions",children:[h.jsx("button",{className:"btn btn-icon btn-ghost btn-sm",onClick:()=>u(c),children:h.jsx(Md,{size:14})}),h.jsx("button",{className:"btn btn-icon btn-ghost btn-sm text-error",onClick:()=>r(c.id),children:h.jsx(Fr,{size:14})})]})]})]},c.id)),h.jsxs("button",{className:"gallery-add",onClick:e,children:[h.jsx(tn,{size:24}),h.jsx("span",{children:"Add More"})]})]}),s&&h.jsxs("div",{className:"lightbox",onClick:()=>i(null),children:[h.jsx("button",{className:"btn btn-icon btn-ghost lightbox-close",onClick:()=>i(null),children:h.jsx(En,{size:24})}),h.jsxs("div",{className:"lightbox-content",onClick:c=>c.stopPropagation(),children:[l(s)?h.jsx("video",{src:o(s),controls:!0,autoPlay:!0}):h.jsx("img",{src:o(s),alt:s.name}),h.jsxs("div",{className:"lightbox-info",children:[h.jsx("span",{children:s.name}),h.jsxs("button",{className:"btn btn-sm btn-secondary",onClick:()=>u(s),children:[h.jsx(Md,{size:14}),"Download"]})]})]})]})]})}function fD({version:t}){const{updateVersion:e}=Xe(),[n,r]=B.useState(""),s=(t==null?void 0:t.todos)||[],i=()=>{if(!n.trim()||!t)return;const m={id:Date.now(),text:n.trim(),completed:!1,createdAt:new Date};e(t.id,{todos:[...s,m]}),r("")},o=m=>{e(t.id,{todos:s.map(g=>g.id===m?{...g,completed:!g.completed}:g)})},l=m=>{e(t.id,{todos:s.filter(g=>g.id!==m)})},u=m=>{m.key==="Enter"&&i()},c=s.filter(m=>m.completed).length,f=s.length>0?c/s.length*100:0;return h.jsxs("div",{className:"todo-list",children:[h.jsx("div",{className:"todo-header",children:h.jsxs("div",{className:"todo-stats",children:[h.jsxs("span",{className:"todo-count",children:[c," / ",s.length," completed"]}),s.length>0&&h.jsx("div",{className:"progress-bar todo-progress",children:h.jsx("div",{className:"progress-bar-fill",style:{width:`${f}%`}})})]})}),h.jsxs("div",{className:"todo-input-wrapper",children:[h.jsx("input",{type:"text",className:"input todo-input",placeholder:"Add a new task...",value:n,onChange:m=>r(m.target.value),onKeyDown:u}),h.jsxs("button",{className:"btn btn-primary",onClick:i,disabled:!n.trim(),children:[h.jsx(tn,{size:18}),"Add"]})]}),s.length===0?h.jsxs("div",{className:"todo-empty",children:[h.jsx(H0,{size:48}),h.jsx("h3",{children:"No tasks yet"}),h.jsx("p",{children:"Add tasks to track what needs to be done for this version"})]}):h.jsx("ul",{className:"todo-items",children:s.map(m=>h.jsxs("li",{className:`todo-item ${m.completed?"completed":""}`,children:[h.jsx("button",{className:"todo-checkbox",onClick:()=>o(m.id),children:m.completed?h.jsx(q0,{size:16}):h.jsx(oD,{size:16})}),h.jsx("span",{className:"todo-text",children:m.text}),h.jsx("button",{className:"btn btn-icon btn-ghost btn-sm todo-delete",onClick:()=>l(m.id),children:h.jsx(Fr,{size:14})})]},m.id))})]})}function pD({version:t}){const{updateVersion:e}=Xe(),[n,r]=B.useState(""),[s,i]=B.useState(""),[o,l]=B.useState(!1),u=(t==null?void 0:t.errors)||[],c=()=>{if(!n.trim()||!t)return;const w={id:Date.now(),title:n.trim(),description:s.trim(),resolved:!1,createdAt:new Date};e(t.id,{errors:[...u,w]}),r(""),i(""),l(!1)},f=w=>{e(t.id,{errors:u.map(I=>I.id===w?{...I,resolved:!I.resolved}:I)})},m=w=>{e(t.id,{errors:u.filter(I=>I.id!==w)})},g=u.filter(w=>!w.resolved).length;return h.jsxs("div",{className:"error-list",children:[h.jsxs("div",{className:"error-header",children:[h.jsx("div",{className:"error-stats",children:g>0?h.jsxs("span",{className:"badge badge-error",children:[g," unresolved"]}):h.jsx("span",{className:"badge badge-success",children:"All resolved"})}),h.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>l(!o),children:[h.jsx(tn,{size:16}),"Log Error"]})]}),o&&h.jsxs("div",{className:"error-form",children:[h.jsx("input",{type:"text",className:"input",placeholder:"Error title...",value:n,onChange:w=>r(w.target.value),autoFocus:!0}),h.jsx("textarea",{className:"input textarea",placeholder:"Description (optional)...",value:s,onChange:w=>i(w.target.value),rows:3}),h.jsxs("div",{className:"error-form-actions",children:[h.jsx("button",{className:"btn btn-ghost",onClick:()=>l(!1),children:"Cancel"}),h.jsx("button",{className:"btn btn-primary",onClick:c,disabled:!n.trim(),children:"Add Error"})]})]}),u.length===0?h.jsxs("div",{className:"error-empty",children:[h.jsx(Bb,{size:48}),h.jsx("h3",{children:"No errors logged"}),h.jsx("p",{children:"Track bugs and issues for this version here"})]}):h.jsx("ul",{className:"error-items",children:u.map(w=>h.jsxs("li",{className:`error-item ${w.resolved?"resolved":""}`,children:[h.jsx("button",{className:"error-status",onClick:()=>f(w.id),title:w.resolved?"Mark as unresolved":"Mark as resolved",children:w.resolved?h.jsx($b,{size:20}):h.jsx(Fp,{size:20})}),h.jsxs("div",{className:"error-content",children:[h.jsx("h4",{className:"error-title",children:w.title}),w.description&&h.jsx("p",{className:"error-description",children:w.description}),h.jsx("span",{className:"error-date",children:new Date(w.createdAt).toLocaleDateString()})]}),h.jsx("button",{className:"btn btn-icon btn-ghost btn-sm error-delete",onClick:()=>m(w.id),children:h.jsx(Fr,{size:14})})]},w.id))})]})}function mD({resources:t}){const{addResource:e,deleteResource:n,currentVersion:r}=Xe(),[s,i]=B.useState(!1),[o,l]=B.useState({name:"",url:"",description:""}),u=async()=>{!o.url.trim()||!r||(await e(r.id,{type:"link",name:o.name.trim()||c(o.url),url:o.url.trim(),metadata:{description:o.description.trim(),platform:f(o.url)}}),l({name:"",url:"",description:""}),i(!1))},c=w=>{try{return`Chat - ${new URL(w).hostname}`}catch{return"AI Chat Link"}},f=w=>{const I=w.toLowerCase();return I.includes("chat.openai")||I.includes("chatgpt")?"chatgpt":I.includes("claude.ai")?"claude":I.includes("gemini.google")||I.includes("bard")?"gemini":I.includes("copilot")?"copilot":I.includes("perplexity")?"perplexity":"other"},m=w=>{const I={chatgpt:"🤖",claude:"🧠",gemini:"✨",copilot:"💻",perplexity:"🔍",other:"💬"};return I[w]||I.other},g=w=>{const I={chatgpt:"#10a37f",claude:"#cc785c",gemini:"#8e44ad",copilot:"#0078d4",perplexity:"#1db954",other:"var(--color-accent)"};return I[w]||I.other};return h.jsxs("div",{className:"ai-links",children:[h.jsxs("div",{className:"ai-links-header",children:[h.jsxs("h3",{children:[h.jsx(tD,{size:18}),"AI Chat Links"]}),h.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>i(!s),children:[h.jsx(tn,{size:16}),"Add Link"]})]}),s&&h.jsxs("div",{className:"ai-link-form",children:[h.jsx("input",{type:"url",className:"input",placeholder:"https://chat.openai.com/...",value:o.url,onChange:w=>l({...o,url:w.target.value}),autoFocus:!0}),h.jsx("input",{type:"text",className:"input",placeholder:"Name (optional)",value:o.name,onChange:w=>l({...o,name:w.target.value})}),h.jsx("textarea",{className:"input textarea",placeholder:"What was this chat about? (optional)",value:o.description,onChange:w=>l({...o,description:w.target.value}),rows:2}),h.jsxs("div",{className:"form-actions",children:[h.jsx("button",{className:"btn btn-ghost",onClick:()=>i(!1),children:"Cancel"}),h.jsx("button",{className:"btn btn-primary",onClick:u,disabled:!o.url.trim(),children:"Add Link"})]})]}),t.length===0?h.jsxs("div",{className:"ai-links-empty",children:[h.jsx(zb,{size:48}),h.jsx("h3",{children:"No AI chat links yet"}),h.jsx("p",{children:"Save links to AI conversations you used for this project"})]}):h.jsx("div",{className:"ai-links-grid",children:t.map(w=>{var P,V;const I=((P=w.metadata)==null?void 0:P.platform)||"other";return h.jsxs("a",{href:w.url,target:"_blank",rel:"noopener noreferrer",className:"ai-link-card",style:{"--platform-color":g(I)},children:[h.jsx("div",{className:"ai-link-icon",children:m(I)}),h.jsxs("div",{className:"ai-link-content",children:[h.jsx("h4",{className:"ai-link-name",children:w.name}),((V=w.metadata)==null?void 0:V.description)&&h.jsx("p",{className:"ai-link-description truncate",children:w.metadata.description}),h.jsx("span",{className:"ai-link-url truncate",children:w.url})]}),h.jsxs("div",{className:"ai-link-actions",children:[h.jsx(Wb,{size:16}),h.jsx("button",{className:"btn btn-icon btn-ghost btn-sm",onClick:S=>{S.preventDefault(),S.stopPropagation(),n(w.id)},children:h.jsx(Fr,{size:14})})]})]},w.id)})})]})}function gD({resources:t,onAdd:e}){var g,w;const{deleteResource:n}=Xe(),[r,s]=B.useState(null),[i,o]=B.useState(""),l=t.filter(I=>I.type==="bin"),u=t.filter(I=>I.type==="ino"),c=async I=>{if(s(I),I.type==="ino")try{if(I.url){const V=await(await fetch(I.url)).text();o(V)}else if(I.data instanceof ko){const P=await I.data.text();o(P)}else o("Error: File content unavailable.")}catch(P){console.error("Failed to load file content:",P),o("Error loading file content.")}else o("")},f=I=>{const P=I.url||(I.data?URL.createObjectURL(I.data):null);if(!P)return;const V=document.createElement("a");V.href=P,V.download=I.name,document.body.appendChild(V),V.click(),document.body.removeChild(V),I.url||URL.revokeObjectURL(P)},m=I=>{if(!I&&I!==0)return"Unknown";if(I===0)return"0 B";const P=1024,V=["B","KB","MB"],S=Math.floor(Math.log(I)/Math.log(P));return parseFloat((I/Math.pow(P,S)).toFixed(1))+" "+V[S]};return t.length===0?h.jsxs("div",{className:"code-empty",children:[h.jsx(ta,{size:48}),h.jsx("h3",{children:"No code files yet"}),h.jsx("p",{children:"Add .bin (compiled firmware) or .ino (Arduino source) files"}),h.jsxs("button",{className:"btn btn-primary",onClick:e,children:[h.jsx(tn,{size:18}),"Add Code Files"]})]}):h.jsxs("div",{className:"code-viewer",children:[h.jsxs("div",{className:"code-sidebar",children:[h.jsxs("div",{className:"code-section",children:[h.jsxs("h4",{className:"code-section-title",children:[h.jsx(ko,{size:14}),"Compiled (.bin)"]}),h.jsxs("ul",{className:"code-list",children:[l.map(I=>{var P,V;return h.jsx("li",{children:h.jsxs("button",{className:`code-file ${(r==null?void 0:r.id)===I.id?"active":""}`,onClick:()=>c(I),children:[h.jsx("span",{className:"badge badge-accent",children:"BIN"}),h.jsx("span",{className:"code-file-name truncate",children:I.name}),h.jsx("span",{className:"code-file-size",children:m(((P=I.metadata)==null?void 0:P.size)||((V=I.data)==null?void 0:V.size))})]})},I.id)}),l.length===0&&h.jsx("li",{className:"code-empty-section",children:"No .bin files"})]})]}),h.jsxs("div",{className:"code-section",children:[h.jsxs("h4",{className:"code-section-title",children:[h.jsx(Gb,{size:14}),"Source (.ino)"]}),h.jsxs("ul",{className:"code-list",children:[u.map(I=>{var P,V;return h.jsx("li",{children:h.jsxs("button",{className:`code-file ${(r==null?void 0:r.id)===I.id?"active":""}`,onClick:()=>c(I),children:[h.jsx("span",{className:"badge badge-success",children:"INO"}),h.jsx("span",{className:"code-file-name truncate",children:I.name}),h.jsx("span",{className:"code-file-size",children:m(((P=I.metadata)==null?void 0:P.size)||((V=I.data)==null?void 0:V.size))})]})},I.id)}),u.length===0&&h.jsx("li",{className:"code-empty-section",children:"No .ino files"})]})]}),h.jsxs("button",{className:"btn btn-secondary code-add",onClick:e,children:[h.jsx(tn,{size:16}),"Add Files"]})]}),h.jsx("div",{className:"code-content",children:r?h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"code-header",children:[h.jsxs("div",{className:"code-file-info",children:[h.jsx("h3",{children:r.name}),h.jsx("span",{className:"text-muted",children:m(((g=r.metadata)==null?void 0:g.size)||((w=r.data)==null?void 0:w.size))})]}),h.jsxs("div",{className:"code-actions",children:[h.jsxs("button",{className:"btn btn-sm btn-secondary",onClick:()=>f(r),children:[h.jsx(Md,{size:14}),"Download"]}),h.jsx("button",{className:"btn btn-sm btn-ghost text-error",onClick:()=>{n(r.id),s(null)},children:h.jsx(Fr,{size:14})})]})]}),r.type==="ino"&&i?h.jsx("pre",{className:"code-preview",children:h.jsx("code",{children:i})}):h.jsxs("div",{className:"code-binary-info",children:[h.jsx(ko,{size:64}),h.jsx("h4",{children:"Binary File"}),h.jsx("p",{children:"This is a compiled firmware file ready for flashing."}),h.jsx("p",{className:"text-muted",children:'Use the "USB Flash" tab to upload this file to your board.'})]})]}):h.jsxs("div",{className:"code-placeholder",children:[h.jsx(ta,{size:48}),h.jsx("p",{children:"Select a file to view details"})]})})]})}const yD=115200;function _D({resources:t}){const[e,n]=B.useState(null),[r,s]=B.useState(!1),[i,o]=B.useState(!1),[l,u]=B.useState(0),[c,f]=B.useState("disconnected"),[m,g]=B.useState(null),[w,I]=B.useState([]),P=B.useRef(null),V=t.filter(y=>y.type==="bin"),S=(y,_="info")=>{const E=new Date().toLocaleTimeString();I(R=>[...R,{message:y,type:_,timestamp:E}])};B.useEffect(()=>{P.current&&(P.current.scrollTop=P.current.scrollHeight)},[w]);const T=()=>"serial"in navigator,A=async()=>{var y;if(!T()){S("WebSerial not supported. Use Chrome or Edge.","error");return}try{f("connecting"),S("Requesting serial port...");const _=await navigator.serial.requestPort();await _.open({baudRate:yD}),n(_),s(!0),f("connected"),S("Connected successfully!","success");const E=_.getInfo();E.usbVendorId&&S(`Device: VID ${E.usbVendorId.toString(16).toUpperCase()} PID ${(y=E.usbProductId)==null?void 0:y.toString(16).toUpperCase()}`)}catch(_){f("error"),S(`Connection failed: ${_.message}`,"error")}},b=async()=>{if(e)try{await e.close(),n(null),s(!1),f("disconnected"),S("Disconnected","info")}catch(y){S(`Disconnect error: ${y.message}`,"error")}},x=async()=>{if(!e||!m){S("No port or file selected","error");return}try{o(!0),u(0),f("flashing"),S(`Starting flash: ${m.name}`);let y;if(m.url){S("Downloading firmware from cloud...");const C=await fetch(m.url);if(!C.ok)throw new Error("Failed to download firmware");y=await C.arrayBuffer()}else if(m.data)y=await m.data.arrayBuffer();else throw new Error("Firmware data unavailable");const _=new Uint8Array(y),E=_.length;S(`File size: ${E} bytes`);const R=e.writable.getWriter(),k=1024;let N=0;for(let C=0;C<E;C+=k){const ce=_.slice(C,Math.min(C+k,E));await R.write(ce),N+=ce.length;const Ue=Math.round(N/E*100);u(Ue),Ue%25===0&&Ue>0&&S(`Progress: ${Ue}%`),await new Promise(Bt=>setTimeout(Bt,10))}R.releaseLock(),u(100),f("success"),S("Flash completed successfully!","success")}catch(y){f("error"),S(`Flash failed: ${y.message}`,"error")}finally{o(!1)}},O=async()=>{if(e)try{S("Resetting device..."),await e.setSignals({dataTerminalReady:!1,requestToSend:!0}),await new Promise(y=>setTimeout(y,100)),await e.setSignals({dataTerminalReady:!0,requestToSend:!1}),S("Device reset complete","success")}catch(y){S(`Reset failed: ${y.message}`,"error")}};return T()?h.jsxs("div",{className:"firmware-flasher",children:[h.jsxs("div",{className:"flasher-main",children:[h.jsxs("div",{className:"flasher-panel",children:[h.jsxs("h3",{children:[h.jsx(N_,{size:18}),"USB Connection"]}),h.jsxs("div",{className:"connection-status",children:[h.jsx("span",{className:`status-indicator ${c}`}),h.jsxs("span",{className:"status-text",children:[c==="disconnected"&&"Not connected",c==="connecting"&&"Connecting...",c==="connected"&&"Connected",c==="flashing"&&"Flashing...",c==="success"&&"Success!",c==="error"&&"Error"]})]}),h.jsx("div",{className:"connection-actions",children:r?h.jsxs(h.Fragment,{children:[h.jsxs("button",{className:"btn btn-secondary",onClick:O,children:[h.jsx(sD,{size:16}),"Reset"]}),h.jsxs("button",{className:"btn btn-ghost",onClick:b,children:[h.jsx(En,{size:16}),"Disconnect"]})]}):h.jsxs("button",{className:"btn btn-primary",onClick:A,disabled:c==="connecting",children:[h.jsx(N_,{size:16}),"Connect Device"]})})]}),h.jsxs("div",{className:"flasher-panel",children:[h.jsxs("h3",{children:[h.jsx(sc,{size:18}),"Firmware File"]}),V.length>0?h.jsx("div",{className:"file-select",children:h.jsxs("select",{className:"input",value:(m==null?void 0:m.id)||"",onChange:y=>{const _=V.find(E=>E.id===Number(y.target.value));g(_)},children:[h.jsx("option",{value:"",children:"Select a .bin file"}),V.map(y=>{var _,E;return h.jsxs("option",{value:y.id,children:[y.name," (",((((_=y.metadata)==null?void 0:_.size)||((E=y.data)==null?void 0:E.size))/1024).toFixed(1)," KB)"]},y.id)})]})}):h.jsx("p",{className:"text-muted",children:"No .bin files in this version. Add firmware files in the Code tab."})]}),h.jsxs("div",{className:"flasher-panel flasher-action",children:[h.jsx("button",{className:"btn btn-primary btn-lg flash-button",onClick:x,disabled:!r||!m||i,children:i?h.jsxs(h.Fragment,{children:[h.jsx("span",{className:"loading-spinner"}),"Flashing... ",l,"%"]}):h.jsxs(h.Fragment,{children:[h.jsx(zd,{size:20}),"Flash Firmware"]})}),i&&h.jsx("div",{className:"progress-bar",children:h.jsx("div",{className:"progress-bar-fill",style:{width:`${l}%`}})})]})]}),h.jsxs("div",{className:"flasher-log",ref:P,children:[h.jsx("h4",{children:"Console Log"}),h.jsxs("div",{className:"log-content",children:[w.map((y,_)=>h.jsxs("div",{className:`log-entry log-${y.type}`,children:[h.jsxs("span",{className:"log-time",children:["[",y.timestamp,"]"]}),h.jsx("span",{className:"log-message",children:y.message})]},_)),w.length===0&&h.jsx("div",{className:"log-empty",children:"Logs will appear here..."})]})]})]}):h.jsxs("div",{className:"flasher-unsupported",children:[h.jsx(Fb,{size:48}),h.jsx("h3",{children:"WebSerial Not Supported"}),h.jsxs("p",{children:["Your browser doesn't support WebSerial API.",h.jsx("br",{}),"Please use ",h.jsx("strong",{children:"Google Chrome"})," or ",h.jsx("strong",{children:"Microsoft Edge"}),"."]})]})}const D_=[{id:"image",label:"Image",icon:_a,accept:"image/*"},{id:"video",label:"Video",icon:K0,accept:"video/*"},{id:"schematic",label:"Schematic",icon:Up,accept:"image/*"},{id:"bin",label:"Firmware (.bin)",icon:ta,accept:".bin"},{id:"ino",label:"Source (.ino)",icon:ta,accept:".ino"}];function vD({onClose:t,versionId:e,defaultType:n="image"}){const{addResource:r}=Xe(),[s,i]=B.useState(n),[o,l]=B.useState([]),[u,c]=B.useState(!1),[f,m]=B.useState(!1),g=B.useRef(null),w=B.useCallback(x=>{var _;const O=(_=x.clipboardData)==null?void 0:_.items;if(!O)return;const y=[];for(let E=0;E<O.length;E++){const R=O[E];if(R.kind==="file"){const k=R.getAsFile();if(k){let N=k.name;(N==="image.png"||!N)&&(N=`pasted-image-${Date.now()}.png`);const C=new ko([k],N,{type:k.type});y.push(C)}}}y.length>0&&(x.preventDefault(),l(E=>[...E,...y]))},[]);B.useEffect(()=>(document.addEventListener("paste",w),()=>{document.removeEventListener("paste",w)}),[w]);const I=B.useCallback(x=>{x.preventDefault(),c(!0)},[]),P=B.useCallback(x=>{x.preventDefault(),c(!1)},[]),V=B.useCallback(x=>{x.preventDefault(),c(!1);const O=Array.from(x.dataTransfer.files);l(y=>[...y,...O])},[]),S=x=>{const O=Array.from(x.target.files);l(y=>[...y,...O])},T=x=>{l(O=>O.filter((y,_)=>_!==x))},A=async()=>{if(!(!e||o.length===0)){m(!0);try{for(const x of o)await r(e,{type:s,name:x.name,data:x,metadata:{mimeType:x.type,size:x.size,lastModified:x.lastModified}});t()}catch(x){console.error("Upload failed:",x)}finally{m(!1)}}},b=D_.find(x=>x.id===s);return h.jsx("div",{className:"modal-overlay",onClick:t,children:h.jsxs("div",{className:"modal",onClick:x=>x.stopPropagation(),children:[h.jsxs("div",{className:"modal-header",children:[h.jsx("h2",{children:"Add Files"}),h.jsx("button",{className:"btn btn-icon btn-ghost",onClick:t,children:h.jsx(En,{size:20})})]}),h.jsxs("div",{className:"modal-content",children:[h.jsxs("div",{className:"form-group",children:[h.jsx("label",{className:"label",children:"File Type"}),h.jsx("div",{className:"file-type-selector",children:D_.map(x=>{const O=x.icon;return h.jsxs("button",{type:"button",className:`file-type-btn ${s===x.id?"active":""}`,onClick:()=>i(x.id),children:[h.jsx(O,{size:18}),h.jsx("span",{children:x.label})]},x.id)})})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{className:"label",children:"Files"}),h.jsxs("div",{ref:g,className:`dropzone ${u?"active":""}`,onDragOver:I,onDragLeave:P,onDrop:V,children:[h.jsx("input",{type:"file",multiple:!0,accept:b==null?void 0:b.accept,onChange:S,style:{display:"none"},id:"file-input"}),h.jsxs("label",{htmlFor:"file-input",style:{cursor:"pointer",display:"contents"},children:[h.jsx(zd,{className:"dropzone-icon"}),h.jsxs("p",{children:["Drag files, click to browse, or ",h.jsx("strong",{children:"paste from clipboard"})]}),h.jsxs("div",{className:"dropzone-hint",children:[h.jsx(zp,{size:14}),h.jsx("span",{children:"Ctrl+V to paste images"})]})]})]})]}),o.length>0&&h.jsxs("div",{className:"form-group",children:[h.jsxs("label",{className:"label",children:["Selected Files (",o.length,")"]}),h.jsx("ul",{className:"file-list",children:o.map((x,O)=>h.jsxs("li",{className:"file-item",children:[h.jsx(ko,{size:16}),h.jsx("span",{className:"file-name truncate",children:x.name}),h.jsxs("span",{className:"file-size",children:[(x.size/1024).toFixed(1)," KB"]}),h.jsx("button",{type:"button",className:"btn btn-icon btn-ghost btn-sm",onClick:()=>T(O),children:h.jsx(En,{size:14})})]},O))})]}),h.jsxs("div",{className:"modal-footer",children:[h.jsx("button",{type:"button",className:"btn btn-secondary",onClick:t,children:"Cancel"}),h.jsx("button",{type:"button",className:"btn btn-primary",onClick:A,disabled:o.length===0||f,children:f?h.jsxs(h.Fragment,{children:[h.jsx("span",{className:"loading-spinner",style:{width:16,height:16}}),"Uploading..."]}):h.jsxs(h.Fragment,{children:[h.jsx(zd,{size:16}),"Upload ",o.length," File",o.length!==1?"s":""]})})]})]})]})})}function wD({onClose:t,projectId:e,parentVersion:n,versions:r}){var T;const{createVersion:s,selectVersion:i}=Xe(),[o,l]=B.useState(""),[u,c]=B.useState(""),[f,m]=B.useState((n==null?void 0:n.id)||null),[g,w]=B.useState(!0),[I,P]=B.useState(!1),V=()=>{if(!r.length)return"v1.0";const A=r.filter(x=>x.parentVersionId===f),b=r.find(x=>x.id===f);if(b){const x=b.name.match(/v?(\d+)\.(\d+)/);if(x){const O=parseInt(x[1]),y=parseInt(x[2]);return A.length>0?`v${O}.${y}-branch${A.length+1}`:`v${O}.${y+1}`}}return`v1.${r.length}`},S=async A=>{if(A.preventDefault(),!!o.trim()){P(!0);try{const b=await s(e,{name:o.trim(),description:u.trim(),parentVersionId:f,copyResources:g,todos:[],errors:[]});await i(b),t()}catch(b){console.error("Failed to create version:",b)}finally{P(!1)}}};return h.jsx("div",{className:"modal-overlay",onClick:t,children:h.jsxs("div",{className:"modal",onClick:A=>A.stopPropagation(),children:[h.jsxs("div",{className:"modal-header",children:[h.jsx("h2",{children:"Create New Version"}),h.jsx("button",{className:"btn btn-icon btn-ghost",onClick:t,children:h.jsx(En,{size:20})})]}),h.jsxs("form",{onSubmit:S,className:"modal-content",children:[h.jsxs("div",{className:"form-group",children:[h.jsx("label",{className:"label",children:"Version Name *"}),h.jsx("input",{type:"text",className:"input",placeholder:V(),value:o,onChange:A=>l(A.target.value),autoFocus:!0,required:!0}),h.jsxs("span",{className:"form-hint",children:["Suggested: ",V()]})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{className:"label",children:"Description"}),h.jsx("textarea",{className:"input textarea",placeholder:"What changes in this version?",value:u,onChange:A=>c(A.target.value),rows:2})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{className:"label",children:"Branch From"}),h.jsxs("select",{className:"input",value:f||"",onChange:A=>m(A.target.value?Number(A.target.value):null),children:[h.jsx("option",{value:"",children:"None (New Root)"}),r.map(A=>h.jsxs("option",{value:A.id,children:[A.name," ",A.id===(n==null?void 0:n.id)?"(current)":""]},A.id))]})]}),f&&h.jsx("div",{className:"form-group",children:h.jsxs("label",{className:"checkbox-label",children:[h.jsx("input",{type:"checkbox",checked:g,onChange:A=>w(A.target.checked)}),h.jsx(qb,{size:16}),h.jsx("span",{children:"Copy files from parent version"})]})}),h.jsxs("div",{className:"version-preview",children:[h.jsx(vi,{size:16}),h.jsx("span",{children:f?h.jsxs(h.Fragment,{children:["Creating branch from ",h.jsx("strong",{children:(T=r.find(A=>A.id===f))==null?void 0:T.name})]}):h.jsx(h.Fragment,{children:"Creating new root version"})})]}),h.jsxs("div",{className:"modal-footer",children:[h.jsx("button",{type:"button",className:"btn btn-secondary",onClick:t,children:"Cancel"}),h.jsx("button",{type:"submit",className:"btn btn-primary",disabled:!o.trim()||I,children:I?h.jsxs(h.Fragment,{children:[h.jsx("span",{className:"loading-spinner",style:{width:16,height:16}}),"Creating..."]}):h.jsxs(h.Fragment,{children:[h.jsx(vi,{size:16}),"Create Version"]})})]})]})]})})}function ED({onClose:t,project:e}){const{updateProject:n,folders:r}=Xe(),[s,i]=B.useState(e.name),[o,l]=B.useState(e.description||""),[u,c]=B.useState(e.folderId||""),[f,m]=B.useState(e.tags?e.tags.join(", "):""),[g,w]=B.useState(null),[I,P]=B.useState(e.thumbnailUrl||null),[V,S]=B.useState(!1),[T,A]=B.useState(!1),b=k=>{const N=k.target.files[0];N&&(w(N),P(URL.createObjectURL(N)))},x=k=>{k&&k.type.startsWith("image/")&&(w(k),P(URL.createObjectURL(k)))},O=B.useCallback(k=>{var C;if(k.target.tagName==="INPUT"||k.target.tagName==="TEXTAREA")return;const N=(C=k.clipboardData)==null?void 0:C.items;if(N)for(let ce=0;ce<N.length;ce++){const Ue=N[ce];if(Ue.kind==="file"&&Ue.type.startsWith("image/")){const Bt=Ue.getAsFile();if(Bt){k.preventDefault();const Ur=new File([Bt],`thumbnail-${Date.now()}.png`,{type:Bt.type});x(Ur);break}}}},[]),y=k=>{k.preventDefault(),S(!0)},_=k=>{k.preventDefault(),S(!1)},E=k=>{k.preventDefault(),S(!1);const N=k.dataTransfer.files;N.length>0&&x(N[0])};B.useEffect(()=>(document.addEventListener("paste",O),()=>document.removeEventListener("paste",O)),[O]);const R=async k=>{k.preventDefault(),A(!0);try{const N=f.split(",").map(ce=>ce.trim()).filter(Boolean),C={name:s,description:o,folderId:u||null,tags:N,thumbnail:g};!I&&!g&&(C.thumbnailUrl=null),await n(e.id,C),t()}catch(N){console.error("Failed to update project:",N),alert("Failed to update project")}finally{A(!1)}};return h.jsx("div",{className:"modal-overlay",onClick:t,children:h.jsxs("div",{className:"modal",onClick:k=>k.stopPropagation(),children:[h.jsxs("div",{className:"modal-header",children:[h.jsx("h2",{children:"Edit Project"}),h.jsx("button",{className:"btn btn-icon btn-ghost",onClick:t,children:h.jsx(En,{size:20})})]}),h.jsxs("form",{onSubmit:R,className:"modal-content",children:[h.jsxs("div",{className:"form-group",children:[h.jsx("label",{className:"label",children:"Project Name"}),h.jsx("input",{type:"text",className:"input",value:s,onChange:k=>i(k.target.value),required:!0})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{className:"label",children:"Thumbnail"}),h.jsx("div",{className:"thumbnail-upload",children:I?h.jsxs("div",{className:"thumbnail-preview",children:[h.jsx("img",{src:I,alt:"Preview"}),h.jsx("button",{type:"button",className:"btn btn-icon btn-ghost thumbnail-remove",onClick:()=>{w(null),P(null)},children:h.jsx(En,{size:16})})]}):h.jsxs("label",{className:`dropzone thumbnail-dropzone ${V?"active":""}`,onDragOver:y,onDragLeave:_,onDrop:E,children:[h.jsx("input",{type:"file",accept:"image/*",onChange:b,hidden:!0}),h.jsx(_a,{size:24,className:"dropzone-icon"}),h.jsx("span",{children:"Change Thumbnail"}),h.jsxs("div",{className:"dropzone-hint",children:[h.jsx(zp,{size:14}),h.jsx("span",{children:"Paste / Drop"})]})]})})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{className:"label",children:"Description"}),h.jsx("textarea",{className:"input textarea",value:o,onChange:k=>l(k.target.value),rows:3})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{className:"label",children:h.jsxs("span",{className:"flex items-center gap-sm",children:[h.jsx(Ud,{size:14})," Folder"]})}),h.jsxs("select",{className:"input",value:u,onChange:k=>c(k.target.value),children:[h.jsx("option",{value:"",children:"(No Folder)"}),r.map(k=>h.jsx("option",{value:k.id,children:k.name},k.id))]})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{className:"label",children:h.jsxs("span",{className:"flex items-center gap-sm",children:[h.jsx(aD,{size:14})," Tags"]})}),h.jsx("input",{type:"text",className:"input",value:f,onChange:k=>m(k.target.value),placeholder:"iot, v1 (comma separated)"})]})]}),h.jsxs("div",{className:"modal-footer",children:[h.jsx("button",{type:"button",className:"btn btn-secondary",onClick:t,children:"Cancel"}),h.jsxs("button",{className:"btn btn-primary",onClick:R,disabled:T,children:[T?h.jsx("div",{className:"loading-spinner sm"}):h.jsx(iD,{size:18}),"Save Changes"]})]})]})})}function TD({resources:t}){const{addResource:e,deleteResource:n,updateResource:r,currentVersion:s}=Xe(),[i,o]=B.useState(""),[l,u]=B.useState(!1),[c,f]=B.useState(""),[m,g]=B.useState(null),[w,I]=B.useState(""),P=async()=>{if(!(!i.trim()||!s)){u(!0);try{await e(s.id,{type:"note",name:"Note",metadata:{content:i.trim()}}),o("")}catch(y){console.error("Failed to add note:",y)}finally{u(!1)}}},V=y=>{y.key==="Enter"&&y.ctrlKey&&P()},S=y=>{var _;g(y.id),I(((_=y.metadata)==null?void 0:_.content)||"")},T=()=>{g(null),I("")},A=async y=>{if(w.trim())try{await r(y,{metadata:{content:w.trim()}}),g(null),I("")}catch(_){console.error("Failed to update note:",_)}},b=(y,_)=>{y.key==="Enter"&&y.ctrlKey?A(_):y.key==="Escape"&&T()},x=y=>y?new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"}).format(y):"",O=t.filter(y=>{var E,R;return(((E=y.metadata)==null?void 0:E.content)||((R=y.metadata)==null?void 0:R.text)||"").toLowerCase().includes(c.toLowerCase())});return h.jsxs("div",{className:"text-entries",children:[h.jsxs("div",{className:"entries-header",children:[h.jsxs("h3",{children:[h.jsx(Fd,{size:18}),"Project Notes"]}),h.jsxs("div",{className:"entries-search",children:[h.jsx(G0,{size:14}),h.jsx("input",{type:"text",placeholder:"Search notes...",value:c,onChange:y=>f(y.target.value),className:"search-input"})]})]}),h.jsxs("div",{className:"entries-input-wrapper",children:[h.jsx("textarea",{className:"input entry-textarea",placeholder:"Type a note... (Ctrl+Enter to add)",value:i,onChange:y=>o(y.target.value),onKeyDown:V}),h.jsx("div",{className:"entries-input-actions",children:h.jsxs("button",{className:"btn btn-primary btn-sm",onClick:P,disabled:!i.trim()||l,children:[h.jsx(tn,{size:16}),"Add Note"]})})]}),h.jsx("div",{className:"entries-content",children:O.length===0?h.jsxs("div",{className:"entries-empty",children:[h.jsx(Fd,{size:48}),h.jsx("h3",{children:c?"No matching notes":"No notes yet"}),h.jsx("p",{children:c?"Try a different search term.":"Add notes, ideas, or logs for this version."})]}):h.jsx("div",{className:"entries-list",children:O.map(y=>{var _,E;return h.jsxs("div",{className:`entry-card ${m===y.id?"editing":""}`,children:[h.jsxs("div",{className:"entry-header",children:[h.jsxs("span",{className:"entry-timestamp",children:[h.jsx(W0,{size:12}),x(y.createdAt)]}),h.jsx("div",{className:"entry-actions",children:m===y.id?h.jsxs(h.Fragment,{children:[h.jsx("button",{className:"btn btn-icon btn-ghost btn-sm text-success",onClick:()=>A(y.id),title:"Save (Ctrl+Enter)",children:h.jsx(q0,{size:14})}),h.jsx("button",{className:"btn btn-icon btn-ghost btn-sm",onClick:T,title:"Cancel (Esc)",children:h.jsx(En,{size:14})})]}):h.jsxs(h.Fragment,{children:[h.jsx("button",{className:"btn btn-icon btn-ghost btn-sm",onClick:()=>S(y),title:"Edit note",children:h.jsx(rD,{size:14})}),h.jsx("button",{className:"btn btn-icon btn-ghost btn-sm text-error",onClick:()=>n(y.id),title:"Delete note",children:h.jsx(Fr,{size:14})})]})})]}),m===y.id?h.jsx("textarea",{className:"input entry-edit-textarea",value:w,onChange:R=>I(R.target.value),onKeyDown:R=>b(R,y.id),autoFocus:!0}):h.jsx("div",{className:"entry-content",onClick:()=>S(y),children:((_=y.metadata)==null?void 0:_.content)||((E=y.metadata)==null?void 0:E.text)||""})]},y.id)})})})]})}const ID=[{id:"gallery",label:"Gallery",icon:_a},{id:"code",label:"Code",icon:ta},{id:"notes",label:"Notes",icon:Fd},{id:"schematics",label:"Schematics",icon:Up},{id:"flasher",label:"USB Flash",icon:sc},{id:"links",label:"AI Chats",icon:Qb},{id:"todo",label:"To-Do",icon:H0},{id:"errors",label:"Errors",icon:Fp}];function SD(){const{currentProject:t,currentVersion:e,versions:n,resources:r,selectProject:s,deleteProject:i,selectVersion:o}=Xe(),[l,u]=B.useState("gallery"),[c,f]=B.useState(!1),[m,g]=B.useState(!1),[w,I]=B.useState(!1),[P,V]=B.useState(!1);if(!t)return null;const S=()=>{s(null)},T=async()=>{await i(t.id)},A=()=>{switch(l){case"gallery":return r.filter(x=>x.type==="image"||x.type==="video");case"code":return r.filter(x=>x.type==="bin"||x.type==="ino");case"schematics":return r.filter(x=>x.type==="schematic");case"notes":return r.filter(x=>x.type==="note");case"links":return r.filter(x=>x.type==="link");default:return[]}},b=()=>{switch(l){case"gallery":return h.jsx(b_,{resources:A(),onAdd:()=>f(!0)});case"code":return h.jsx(gD,{resources:A(),onAdd:()=>f(!0)});case"schematics":return h.jsx(b_,{resources:A(),onAdd:()=>f(!0),type:"schematic"});case"notes":return h.jsx(TD,{resources:A()});case"flasher":return h.jsx(_D,{resources:r.filter(x=>x.type==="bin")});case"links":return h.jsx(mD,{resources:A()});case"todo":return h.jsx(fD,{version:e});case"errors":return h.jsx(pD,{version:e});default:return null}};return h.jsxs("div",{className:"project-detail animate-fadeIn",children:[h.jsxs("div",{className:"detail-header",children:[h.jsxs("button",{className:"btn btn-ghost",onClick:S,children:[h.jsx(Ub,{size:18}),"Back"]}),h.jsxs("div",{className:"detail-actions",children:[h.jsxs("button",{className:"btn btn-secondary",onClick:()=>V(!0),children:[h.jsx(nD,{size:16}),"Edit"]}),h.jsx("button",{className:"btn btn-ghost text-error",onClick:()=>g(!0),children:h.jsx(Fr,{size:16})})]})]}),h.jsxs("div",{className:"detail-info",children:[h.jsx("div",{className:"detail-thumbnail",children:t.thumbnailUrl||t.thumbnail?h.jsx("img",{src:t.thumbnailUrl||URL.createObjectURL(t.thumbnail),alt:t.name}):h.jsx("div",{className:"detail-thumbnail-placeholder",children:h.jsx(sc,{size:48})})}),h.jsxs("div",{className:"detail-meta",children:[h.jsx("h1",{className:"detail-title",children:t.name}),t.description&&h.jsx("p",{className:"detail-description",children:t.description}),e&&h.jsxs("div",{className:"version-badge",children:[h.jsx(vi,{size:14}),h.jsx("span",{children:e.name})]}),t.tags&&t.tags.length>0&&h.jsx("div",{className:"tags-list",children:t.tags.map((x,O)=>h.jsxs("span",{className:"badge badge-sm",children:[h.jsx(Tag,{size:12})," ",x]},O))})]})]}),h.jsxs("div",{className:"version-section",children:[h.jsxs("div",{className:"section-header",children:[h.jsxs("h2",{children:[h.jsx(vi,{size:18}),"Version Tree"]}),h.jsxs("button",{className:"btn btn-sm btn-secondary",onClick:()=>I(!0),children:[h.jsx(tn,{size:14}),"New Version"]})]}),h.jsx(dD,{versions:n,currentVersionId:e==null?void 0:e.id,onSelectVersion:o})]}),h.jsx("div",{className:"tabs",children:ID.map(x=>{const O=x.icon;return h.jsxs("button",{className:`tab ${l===x.id?"active":""}`,onClick:()=>u(x.id),children:[h.jsx(O,{size:16}),h.jsx("span",{children:x.label})]},x.id)})}),h.jsx("div",{className:"tab-content",children:b()}),c&&h.jsx(vD,{onClose:()=>f(!1),versionId:e==null?void 0:e.id,defaultType:l==="schematics"?"schematic":l==="code"?"bin":"image"}),w&&h.jsx(wD,{onClose:()=>I(!1),projectId:t.id,parentVersion:e,versions:n}),P&&h.jsx(ED,{onClose:()=>V(!1),project:t}),m&&h.jsx("div",{className:"modal-overlay",onClick:()=>g(!1),children:h.jsxs("div",{className:"modal confirm-dialog",onClick:x=>x.stopPropagation(),children:[h.jsxs("div",{className:"modal-content",children:[h.jsx(Fp,{className:"confirm-icon"}),h.jsx("h3",{children:"Delete Project?"}),h.jsxs("p",{className:"text-secondary",children:['This will permanently delete "',t.name,'" and all its versions and files.']})]}),h.jsxs("div",{className:"modal-footer",children:[h.jsx("button",{className:"btn btn-secondary",onClick:()=>g(!1),children:"Cancel"}),h.jsx("button",{className:"btn btn-danger",onClick:T,children:"Delete"})]})]})})]})}function AD({onClose:t}){const{createProject:e}=Xe(),[n,r]=B.useState(""),[s,i]=B.useState(""),[o,l]=B.useState(null),[u,c]=B.useState(null),[f,m]=B.useState(!1),[g,w]=B.useState(!1),I=x=>{const O=x.target.files[0];O&&(l(O),c(URL.createObjectURL(O)))},P=x=>{x&&x.type.startsWith("image/")&&(l(x),c(URL.createObjectURL(x)))},V=B.useCallback(x=>{var y;if(x.target.tagName==="INPUT"||x.target.tagName==="TEXTAREA")return;const O=(y=x.clipboardData)==null?void 0:y.items;if(O)for(let _=0;_<O.length;_++){const E=O[_];if(E.kind==="file"&&E.type.startsWith("image/")){const R=E.getAsFile();if(R){x.preventDefault();const k=new File([R],`thumbnail-${Date.now()}.png`,{type:R.type});P(k);break}}}},[]),S=x=>{x.preventDefault(),w(!0)},T=x=>{x.preventDefault(),w(!1)},A=x=>{x.preventDefault(),w(!1);const O=x.dataTransfer.files;if(O.length>0){const y=O[0];P(y)}};B.useEffect(()=>(document.addEventListener("paste",V),()=>{document.removeEventListener("paste",V)}),[V]);const b=async x=>{if(x.preventDefault(),!!n.trim()){m(!0);try{await e({name:n.trim(),description:s.trim(),thumbnail:o}),t()}catch(O){console.error("Failed to create project:",O)}finally{m(!1)}}};return h.jsx("div",{className:"modal-overlay",onClick:t,children:h.jsxs("div",{className:"modal",onClick:x=>x.stopPropagation(),children:[h.jsxs("div",{className:"modal-header",children:[h.jsx("h2",{children:"Create New Project"}),h.jsx("button",{className:"btn btn-icon btn-ghost",onClick:t,children:h.jsx(En,{size:20})})]}),h.jsxs("form",{onSubmit:b,className:"modal-content",children:[h.jsxs("div",{className:"form-group",children:[h.jsx("label",{className:"label",children:"Project Name *"}),h.jsx("input",{type:"text",className:"input",placeholder:"e.g., RC Car with PS4 Controller",value:n,onChange:x=>r(x.target.value),autoFocus:!0,required:!0})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{className:"label",children:"Description"}),h.jsx("textarea",{className:"input textarea",placeholder:"Describe your project...",value:s,onChange:x=>i(x.target.value),rows:3})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{className:"label",children:"Thumbnail"}),h.jsx("div",{className:"thumbnail-upload",children:u?h.jsxs("div",{className:"thumbnail-preview",children:[h.jsx("img",{src:u,alt:"Preview"}),h.jsx("button",{type:"button",className:"btn btn-icon btn-ghost thumbnail-remove",onClick:()=>{l(null),c(null)},children:h.jsx(En,{size:16})})]}):h.jsxs("label",{className:`dropzone thumbnail-dropzone ${g?"active":""}`,onDragOver:S,onDragLeave:T,onDrop:A,children:[h.jsx("input",{type:"file",accept:"image/*",onChange:I,hidden:!0}),h.jsx(_a,{size:24,className:"dropzone-icon"}),h.jsxs("span",{children:["Click, drag, or ",h.jsx("strong",{children:"paste"})," image"]}),h.jsxs("div",{className:"dropzone-hint",children:[h.jsx(zp,{size:14}),h.jsx("span",{children:"Ctrl+V to paste"})]})]})})]}),h.jsxs("div",{className:"modal-footer",children:[h.jsx("button",{type:"button",className:"btn btn-secondary",onClick:t,children:"Cancel"}),h.jsx("button",{type:"submit",className:"btn btn-primary",disabled:!n.trim()||f,children:f?h.jsxs(h.Fragment,{children:[h.jsx("span",{className:"loading-spinner",style:{width:16,height:16}}),"Creating..."]}):"Create Project"})]})]})]})})}function kD({children:t}){const{user:e,authLoading:n,login:r}=Xe();return n?h.jsxs("div",{className:"auth-loading",children:[h.jsx("div",{className:"loading-spinner"}),h.jsx("p",{children:"Connecting to NiroVault Cloud..."})]}):e?t:h.jsx("div",{className:"auth-container",children:h.jsxs("div",{className:"auth-card",children:[h.jsxs("div",{className:"auth-logo",children:[h.jsx(Up,{size:48}),h.jsx("h1",{children:"NiroVault"})]}),h.jsx("p",{className:"auth-subtitle",children:"Sync your electronics projects across all devices"}),h.jsxs("button",{className:"btn btn-primary btn-lg auth-btn",onClick:r,children:[h.jsx(Xb,{size:20}),"Sign in with Google"]}),h.jsxs("div",{className:"auth-features",children:[h.jsxs("div",{className:"feature-item",children:[h.jsx("span",{children:"☁️"}),h.jsx("p",{children:"Real-time Cloud Sync"})]}),h.jsxs("div",{className:"feature-item",children:[h.jsx("span",{children:"📱"}),h.jsx("p",{children:"Mobile Accessible"})]}),h.jsxs("div",{className:"feature-item",children:[h.jsx("span",{children:"🔒"}),h.jsx("p",{children:"Secure Storage"})]})]})]})})}function CD(){const{currentProject:t,initAuth:e}=Xe(),[n,r]=B.useState(!1);return B.useEffect(()=>{const s=e();return()=>s()},[]),h.jsx(kD,{children:h.jsxs(uD,{onCreateProject:()=>r(!0),children:[t?h.jsx(SD,{}):h.jsx(hD,{onCreateProject:()=>r(!0)}),n&&h.jsx(AD,{onClose:()=>r(!1)})]})})}mh.createRoot(document.getElementById("root")).render(h.jsx(q_.StrictMode,{children:h.jsx(CD,{})}));
//# sourceMappingURL=index-BxnUHrdc.js.map
