(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function O_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var M_={exports:{}},Iu={},F_={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var la=Symbol.for("react.element"),PT=Symbol.for("react.portal"),bT=Symbol.for("react.fragment"),DT=Symbol.for("react.strict_mode"),jT=Symbol.for("react.profiler"),VT=Symbol.for("react.provider"),LT=Symbol.for("react.context"),OT=Symbol.for("react.forward_ref"),MT=Symbol.for("react.suspense"),FT=Symbol.for("react.memo"),UT=Symbol.for("react.lazy"),Hm=Symbol.iterator;function zT(t){return t===null||typeof t!="object"?null:(t=Hm&&t[Hm]||t["@@iterator"],typeof t=="function"?t:null)}var U_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z_=Object.assign,B_={};function Ti(t,e,n){this.props=t,this.context=e,this.refs=B_,this.updater=n||U_}Ti.prototype.isReactComponent={};Ti.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ti.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function $_(){}$_.prototype=Ti.prototype;function Kd(t,e,n){this.props=t,this.context=e,this.refs=B_,this.updater=n||U_}var Qd=Kd.prototype=new $_;Qd.constructor=Kd;z_(Qd,Ti.prototype);Qd.isPureReactComponent=!0;var qm=Array.isArray,H_=Object.prototype.hasOwnProperty,Yd={current:null},q_={key:!0,ref:!0,__self:!0,__source:!0};function W_(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)H_.call(e,r)&&!q_.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:la,type:t,key:i,ref:o,props:s,_owner:Yd.current}}function BT(t,e){return{$$typeof:la,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Xd(t){return typeof t=="object"&&t!==null&&t.$$typeof===la}function $T(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Wm=/\/+/g;function Vc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?$T(""+t.key):e.toString(36)}function fl(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case la:case PT:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Vc(o,0):r,qm(s)?(n="",t!=null&&(n=t.replace(Wm,"$&/")+"/"),fl(s,e,n,"",function(h){return h})):s!=null&&(Xd(s)&&(s=BT(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Wm,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",qm(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+Vc(i,l);o+=fl(i,e,n,u,s)}else if(u=zT(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+Vc(i,l++),o+=fl(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function za(t,e,n){if(t==null)return t;var r=[],s=0;return fl(t,r,"","",function(i){return e.call(n,i,s++)}),r}function HT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var _t={current:null},pl={transition:null},qT={ReactCurrentDispatcher:_t,ReactCurrentBatchConfig:pl,ReactCurrentOwner:Yd};function G_(){throw Error("act(...) is not supported in production builds of React.")}ne.Children={map:za,forEach:function(t,e,n){za(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return za(t,function(){e++}),e},toArray:function(t){return za(t,function(e){return e})||[]},only:function(t){if(!Xd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=Ti;ne.Fragment=bT;ne.Profiler=jT;ne.PureComponent=Kd;ne.StrictMode=DT;ne.Suspense=MT;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qT;ne.act=G_;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=z_({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Yd.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)H_.call(e,u)&&!q_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:la,type:t.type,key:s,ref:i,props:r,_owner:o}};ne.createContext=function(t){return t={$$typeof:LT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:VT,_context:t},t.Consumer=t};ne.createElement=W_;ne.createFactory=function(t){var e=W_.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:OT,render:t}};ne.isValidElement=Xd;ne.lazy=function(t){return{$$typeof:UT,_payload:{_status:-1,_result:t},_init:HT}};ne.memo=function(t,e){return{$$typeof:FT,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=pl.transition;pl.transition={};try{t()}finally{pl.transition=e}};ne.unstable_act=G_;ne.useCallback=function(t,e){return _t.current.useCallback(t,e)};ne.useContext=function(t){return _t.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return _t.current.useDeferredValue(t)};ne.useEffect=function(t,e){return _t.current.useEffect(t,e)};ne.useId=function(){return _t.current.useId()};ne.useImperativeHandle=function(t,e,n){return _t.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return _t.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return _t.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return _t.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return _t.current.useReducer(t,e,n)};ne.useRef=function(t){return _t.current.useRef(t)};ne.useState=function(t){return _t.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return _t.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return _t.current.useTransition()};ne.version="18.3.1";F_.exports=ne;var z=F_.exports;const K_=O_(z);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var WT=z,GT=Symbol.for("react.element"),KT=Symbol.for("react.fragment"),QT=Object.prototype.hasOwnProperty,YT=WT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,XT={key:!0,ref:!0,__self:!0,__source:!0};function Q_(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)QT.call(e,r)&&!XT.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:GT,type:t,key:i,ref:o,props:s,_owner:YT.current}}Iu.Fragment=KT;Iu.jsx=Q_;Iu.jsxs=Q_;M_.exports=Iu;var c=M_.exports,Sh={},Y_={exports:{}},Mt={},X_={exports:{}},J_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(H,Q){var ee=H.length;H.push(Q);e:for(;0<ee;){var he=ee-1>>>1,we=H[he];if(0<s(we,Q))H[he]=Q,H[ee]=we,ee=he;else break e}}function n(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var Q=H[0],ee=H.pop();if(ee!==Q){H[0]=ee;e:for(var he=0,we=H.length,Rn=we>>>1;he<Rn;){var U=2*(he+1)-1,me=H[U],Pe=U+1,Xe=H[Pe];if(0>s(me,ee))Pe<we&&0>s(Xe,me)?(H[he]=Xe,H[Pe]=ee,he=Pe):(H[he]=me,H[U]=ee,he=U);else if(Pe<we&&0>s(Xe,ee))H[he]=Xe,H[Pe]=ee,he=Pe;else break e}}return Q}function s(H,Q){var ee=H.sortIndex-Q.sortIndex;return ee!==0?ee:H.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,g=null,m=3,w=!1,k=!1,N=!1,b=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(H){for(var Q=n(h);Q!==null;){if(Q.callback===null)r(h);else if(Q.startTime<=H)r(h),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(h)}}function j(H){if(N=!1,x(H),!k)if(n(u)!==null)k=!0,Ct(R);else{var Q=n(h);Q!==null&&Cn(j,Q.startTime-H)}}function R(H,Q){k=!1,N&&(N=!1,S(y),y=-1),w=!0;var ee=m;try{for(x(Q),g=n(u);g!==null&&(!(g.expirationTime>Q)||H&&!A());){var he=g.callback;if(typeof he=="function"){g.callback=null,m=g.priorityLevel;var we=he(g.expirationTime<=Q);Q=t.unstable_now(),typeof we=="function"?g.callback=we:g===n(u)&&r(u),x(Q)}else r(u);g=n(u)}if(g!==null)var Rn=!0;else{var U=n(h);U!==null&&Cn(j,U.startTime-Q),Rn=!1}return Rn}finally{g=null,m=ee,w=!1}}var L=!1,_=null,y=-1,T=5,E=-1;function A(){return!(t.unstable_now()-E<T)}function P(){if(_!==null){var H=t.unstable_now();E=H;var Q=!0;try{Q=_(!0,H)}finally{Q?C():(L=!1,_=null)}}else L=!1}var C;if(typeof I=="function")C=function(){I(P)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,je=oe.port2;oe.port1.onmessage=P,C=function(){je.postMessage(null)}}else C=function(){b(P,0)};function Ct(H){_=H,L||(L=!0,C())}function Cn(H,Q){y=b(function(){H(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_continueExecution=function(){k||w||(k=!0,Ct(R))},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(H){switch(m){case 1:case 2:case 3:var Q=3;break;default:Q=m}var ee=m;m=Q;try{return H()}finally{m=ee}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(H,Q){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ee=m;m=H;try{return Q()}finally{m=ee}},t.unstable_scheduleCallback=function(H,Q,ee){var he=t.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?he+ee:he):ee=he,H){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=ee+we,H={id:f++,callback:Q,priorityLevel:H,startTime:ee,expirationTime:we,sortIndex:-1},ee>he?(H.sortIndex=ee,e(h,H),n(u)===null&&H===n(h)&&(N?(S(y),y=-1):N=!0,Cn(j,ee-he))):(H.sortIndex=we,e(u,H),k||w||(k=!0,Ct(R))),H},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(H){var Q=m;return function(){var ee=m;m=Q;try{return H.apply(this,arguments)}finally{m=ee}}}})(J_);X_.exports=J_;var JT=X_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ZT=z,Lt=JT;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Z_=new Set,No={};function vs(t,e){si(t,e),si(t+"Capture",e)}function si(t,e){for(No[t]=e,t=0;t<e.length;t++)Z_.add(e[t])}var Bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kh=Object.prototype.hasOwnProperty,eI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Gm={},Km={};function tI(t){return kh.call(Km,t)?!0:kh.call(Gm,t)?!1:eI.test(t)?Km[t]=!0:(Gm[t]=!0,!1)}function nI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function rI(t,e,n,r){if(e===null||typeof e>"u"||nI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function vt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){nt[t]=new vt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];nt[e]=new vt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){nt[t]=new vt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){nt[t]=new vt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){nt[t]=new vt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){nt[t]=new vt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){nt[t]=new vt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){nt[t]=new vt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){nt[t]=new vt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Jd=/[\-:]([a-z])/g;function Zd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Jd,Zd);nt[e]=new vt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Jd,Zd);nt[e]=new vt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Jd,Zd);nt[e]=new vt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){nt[t]=new vt(t,1,!1,t.toLowerCase(),null,!1,!1)});nt.xlinkHref=new vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){nt[t]=new vt(t,1,!1,t.toLowerCase(),null,!0,!0)});function ef(t,e,n,r){var s=nt.hasOwnProperty(e)?nt[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(rI(e,n,s,r)&&(n=null),r||s===null?tI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Yn=ZT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ba=Symbol.for("react.element"),js=Symbol.for("react.portal"),Vs=Symbol.for("react.fragment"),tf=Symbol.for("react.strict_mode"),Ah=Symbol.for("react.profiler"),ev=Symbol.for("react.provider"),tv=Symbol.for("react.context"),nf=Symbol.for("react.forward_ref"),xh=Symbol.for("react.suspense"),Ch=Symbol.for("react.suspense_list"),rf=Symbol.for("react.memo"),or=Symbol.for("react.lazy"),nv=Symbol.for("react.offscreen"),Qm=Symbol.iterator;function Ki(t){return t===null||typeof t!="object"?null:(t=Qm&&t[Qm]||t["@@iterator"],typeof t=="function"?t:null)}var Se=Object.assign,Lc;function so(t){if(Lc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Lc=e&&e[1]||""}return`
`+Lc+t}var Oc=!1;function Mc(t,e){if(!t||Oc)return"";Oc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var s=h.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Oc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?so(t):""}function sI(t){switch(t.tag){case 5:return so(t.type);case 16:return so("Lazy");case 13:return so("Suspense");case 19:return so("SuspenseList");case 0:case 2:case 15:return t=Mc(t.type,!1),t;case 11:return t=Mc(t.type.render,!1),t;case 1:return t=Mc(t.type,!0),t;default:return""}}function Rh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Vs:return"Fragment";case js:return"Portal";case Ah:return"Profiler";case tf:return"StrictMode";case xh:return"Suspense";case Ch:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case tv:return(t.displayName||"Context")+".Consumer";case ev:return(t._context.displayName||"Context")+".Provider";case nf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case rf:return e=t.displayName||null,e!==null?e:Rh(t.type)||"Memo";case or:e=t._payload,t=t._init;try{return Rh(t(e))}catch{}}return null}function iI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Rh(e);case 8:return e===tf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Rr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function rv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function oI(t){var e=rv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function $a(t){t._valueTracker||(t._valueTracker=oI(t))}function sv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=rv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Vl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Nh(t,e){var n=e.checked;return Se({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ym(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Rr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function iv(t,e){e=e.checked,e!=null&&ef(t,"checked",e,!1)}function Ph(t,e){iv(t,e);var n=Rr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?bh(t,e.type,n):e.hasOwnProperty("defaultValue")&&bh(t,e.type,Rr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Xm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function bh(t,e,n){(e!=="number"||Vl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var io=Array.isArray;function Ws(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Rr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Dh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Se({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Jm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(io(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Rr(n)}}function ov(t,e){var n=Rr(e.value),r=Rr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Zm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function av(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function jh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?av(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ha,lv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ha=Ha||document.createElement("div"),Ha.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ha.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Po(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var fo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},aI=["Webkit","ms","Moz","O"];Object.keys(fo).forEach(function(t){aI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),fo[e]=fo[t]})});function uv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||fo.hasOwnProperty(t)&&fo[t]?(""+e).trim():e+"px"}function cv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=uv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var lI=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vh(t,e){if(e){if(lI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Lh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oh=null;function sf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Mh=null,Gs=null,Ks=null;function eg(t){if(t=ha(t)){if(typeof Mh!="function")throw Error(F(280));var e=t.stateNode;e&&(e=Cu(e),Mh(t.stateNode,t.type,e))}}function hv(t){Gs?Ks?Ks.push(t):Ks=[t]:Gs=t}function dv(){if(Gs){var t=Gs,e=Ks;if(Ks=Gs=null,eg(t),e)for(t=0;t<e.length;t++)eg(e[t])}}function fv(t,e){return t(e)}function pv(){}var Fc=!1;function mv(t,e,n){if(Fc)return t(e,n);Fc=!0;try{return fv(t,e,n)}finally{Fc=!1,(Gs!==null||Ks!==null)&&(pv(),dv())}}function bo(t,e){var n=t.stateNode;if(n===null)return null;var r=Cu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Fh=!1;if(Bn)try{var Qi={};Object.defineProperty(Qi,"passive",{get:function(){Fh=!0}}),window.addEventListener("test",Qi,Qi),window.removeEventListener("test",Qi,Qi)}catch{Fh=!1}function uI(t,e,n,r,s,i,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var po=!1,Ll=null,Ol=!1,Uh=null,cI={onError:function(t){po=!0,Ll=t}};function hI(t,e,n,r,s,i,o,l,u){po=!1,Ll=null,uI.apply(cI,arguments)}function dI(t,e,n,r,s,i,o,l,u){if(hI.apply(this,arguments),po){if(po){var h=Ll;po=!1,Ll=null}else throw Error(F(198));Ol||(Ol=!0,Uh=h)}}function ws(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function gv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function tg(t){if(ws(t)!==t)throw Error(F(188))}function fI(t){var e=t.alternate;if(!e){if(e=ws(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return tg(s),t;if(i===r)return tg(s),e;i=i.sibling}throw Error(F(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function yv(t){return t=fI(t),t!==null?_v(t):null}function _v(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=_v(t);if(e!==null)return e;t=t.sibling}return null}var vv=Lt.unstable_scheduleCallback,ng=Lt.unstable_cancelCallback,pI=Lt.unstable_shouldYield,mI=Lt.unstable_requestPaint,De=Lt.unstable_now,gI=Lt.unstable_getCurrentPriorityLevel,of=Lt.unstable_ImmediatePriority,wv=Lt.unstable_UserBlockingPriority,Ml=Lt.unstable_NormalPriority,yI=Lt.unstable_LowPriority,Ev=Lt.unstable_IdlePriority,Su=null,yn=null;function _I(t){if(yn&&typeof yn.onCommitFiberRoot=="function")try{yn.onCommitFiberRoot(Su,t,void 0,(t.current.flags&128)===128)}catch{}}var nn=Math.clz32?Math.clz32:EI,vI=Math.log,wI=Math.LN2;function EI(t){return t>>>=0,t===0?32:31-(vI(t)/wI|0)|0}var qa=64,Wa=4194304;function oo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Fl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=oo(l):(i&=o,i!==0&&(r=oo(i)))}else o=n&~s,o!==0?r=oo(o):i!==0&&(r=oo(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-nn(e),s=1<<n,r|=t[n],e&=~s;return r}function TI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function II(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-nn(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=TI(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function zh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Tv(){var t=qa;return qa<<=1,!(qa&4194240)&&(qa=64),t}function Uc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ua(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-nn(e),t[e]=n}function SI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-nn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function af(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-nn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var ce=0;function Iv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Sv,lf,kv,Av,xv,Bh=!1,Ga=[],yr=null,_r=null,vr=null,Do=new Map,jo=new Map,lr=[],kI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rg(t,e){switch(t){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":Do.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":jo.delete(e.pointerId)}}function Yi(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=ha(e),e!==null&&lf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function AI(t,e,n,r,s){switch(e){case"focusin":return yr=Yi(yr,t,e,n,r,s),!0;case"dragenter":return _r=Yi(_r,t,e,n,r,s),!0;case"mouseover":return vr=Yi(vr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Do.set(i,Yi(Do.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,jo.set(i,Yi(jo.get(i)||null,t,e,n,r,s)),!0}return!1}function Cv(t){var e=Jr(t.target);if(e!==null){var n=ws(e);if(n!==null){if(e=n.tag,e===13){if(e=gv(n),e!==null){t.blockedOn=e,xv(t.priority,function(){kv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ml(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=$h(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Oh=r,n.target.dispatchEvent(r),Oh=null}else return e=ha(n),e!==null&&lf(e),t.blockedOn=n,!1;e.shift()}return!0}function sg(t,e,n){ml(t)&&n.delete(e)}function xI(){Bh=!1,yr!==null&&ml(yr)&&(yr=null),_r!==null&&ml(_r)&&(_r=null),vr!==null&&ml(vr)&&(vr=null),Do.forEach(sg),jo.forEach(sg)}function Xi(t,e){t.blockedOn===e&&(t.blockedOn=null,Bh||(Bh=!0,Lt.unstable_scheduleCallback(Lt.unstable_NormalPriority,xI)))}function Vo(t){function e(s){return Xi(s,t)}if(0<Ga.length){Xi(Ga[0],t);for(var n=1;n<Ga.length;n++){var r=Ga[n];r.blockedOn===t&&(r.blockedOn=null)}}for(yr!==null&&Xi(yr,t),_r!==null&&Xi(_r,t),vr!==null&&Xi(vr,t),Do.forEach(e),jo.forEach(e),n=0;n<lr.length;n++)r=lr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<lr.length&&(n=lr[0],n.blockedOn===null);)Cv(n),n.blockedOn===null&&lr.shift()}var Qs=Yn.ReactCurrentBatchConfig,Ul=!0;function CI(t,e,n,r){var s=ce,i=Qs.transition;Qs.transition=null;try{ce=1,uf(t,e,n,r)}finally{ce=s,Qs.transition=i}}function RI(t,e,n,r){var s=ce,i=Qs.transition;Qs.transition=null;try{ce=4,uf(t,e,n,r)}finally{ce=s,Qs.transition=i}}function uf(t,e,n,r){if(Ul){var s=$h(t,e,n,r);if(s===null)Yc(t,e,r,zl,n),rg(t,r);else if(AI(s,t,e,n,r))r.stopPropagation();else if(rg(t,r),e&4&&-1<kI.indexOf(t)){for(;s!==null;){var i=ha(s);if(i!==null&&Sv(i),i=$h(t,e,n,r),i===null&&Yc(t,e,r,zl,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Yc(t,e,r,null,n)}}var zl=null;function $h(t,e,n,r){if(zl=null,t=sf(r),t=Jr(t),t!==null)if(e=ws(t),e===null)t=null;else if(n=e.tag,n===13){if(t=gv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return zl=t,null}function Rv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gI()){case of:return 1;case wv:return 4;case Ml:case yI:return 16;case Ev:return 536870912;default:return 16}default:return 16}}var pr=null,cf=null,gl=null;function Nv(){if(gl)return gl;var t,e=cf,n=e.length,r,s="value"in pr?pr.value:pr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return gl=s.slice(t,1<r?1-r:void 0)}function yl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ka(){return!0}function ig(){return!1}function Ft(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ka:ig,this.isPropagationStopped=ig,this}return Se(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ka)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ka)},persist:function(){},isPersistent:Ka}),e}var Ii={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hf=Ft(Ii),ca=Se({},Ii,{view:0,detail:0}),NI=Ft(ca),zc,Bc,Ji,ku=Se({},ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:df,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ji&&(Ji&&t.type==="mousemove"?(zc=t.screenX-Ji.screenX,Bc=t.screenY-Ji.screenY):Bc=zc=0,Ji=t),zc)},movementY:function(t){return"movementY"in t?t.movementY:Bc}}),og=Ft(ku),PI=Se({},ku,{dataTransfer:0}),bI=Ft(PI),DI=Se({},ca,{relatedTarget:0}),$c=Ft(DI),jI=Se({},Ii,{animationName:0,elapsedTime:0,pseudoElement:0}),VI=Ft(jI),LI=Se({},Ii,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),OI=Ft(LI),MI=Se({},Ii,{data:0}),ag=Ft(MI),FI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},UI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function BI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=zI[t])?!!e[t]:!1}function df(){return BI}var $I=Se({},ca,{key:function(t){if(t.key){var e=FI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=yl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?UI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:df,charCode:function(t){return t.type==="keypress"?yl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?yl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),HI=Ft($I),qI=Se({},ku,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lg=Ft(qI),WI=Se({},ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:df}),GI=Ft(WI),KI=Se({},Ii,{propertyName:0,elapsedTime:0,pseudoElement:0}),QI=Ft(KI),YI=Se({},ku,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),XI=Ft(YI),JI=[9,13,27,32],ff=Bn&&"CompositionEvent"in window,mo=null;Bn&&"documentMode"in document&&(mo=document.documentMode);var ZI=Bn&&"TextEvent"in window&&!mo,Pv=Bn&&(!ff||mo&&8<mo&&11>=mo),ug=" ",cg=!1;function bv(t,e){switch(t){case"keyup":return JI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ls=!1;function eS(t,e){switch(t){case"compositionend":return Dv(e);case"keypress":return e.which!==32?null:(cg=!0,ug);case"textInput":return t=e.data,t===ug&&cg?null:t;default:return null}}function tS(t,e){if(Ls)return t==="compositionend"||!ff&&bv(t,e)?(t=Nv(),gl=cf=pr=null,Ls=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Pv&&e.locale!=="ko"?null:e.data;default:return null}}var nS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!nS[t.type]:e==="textarea"}function jv(t,e,n,r){hv(r),e=Bl(e,"onChange"),0<e.length&&(n=new hf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var go=null,Lo=null;function rS(t){qv(t,0)}function Au(t){var e=Fs(t);if(sv(e))return t}function sS(t,e){if(t==="change")return e}var Vv=!1;if(Bn){var Hc;if(Bn){var qc="oninput"in document;if(!qc){var dg=document.createElement("div");dg.setAttribute("oninput","return;"),qc=typeof dg.oninput=="function"}Hc=qc}else Hc=!1;Vv=Hc&&(!document.documentMode||9<document.documentMode)}function fg(){go&&(go.detachEvent("onpropertychange",Lv),Lo=go=null)}function Lv(t){if(t.propertyName==="value"&&Au(Lo)){var e=[];jv(e,Lo,t,sf(t)),mv(rS,e)}}function iS(t,e,n){t==="focusin"?(fg(),go=e,Lo=n,go.attachEvent("onpropertychange",Lv)):t==="focusout"&&fg()}function oS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Au(Lo)}function aS(t,e){if(t==="click")return Au(e)}function lS(t,e){if(t==="input"||t==="change")return Au(e)}function uS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var an=typeof Object.is=="function"?Object.is:uS;function Oo(t,e){if(an(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!kh.call(e,s)||!an(t[s],e[s]))return!1}return!0}function pg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function mg(t,e){var n=pg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=pg(n)}}function Ov(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ov(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Mv(){for(var t=window,e=Vl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Vl(t.document)}return e}function pf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function cS(t){var e=Mv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ov(n.ownerDocument.documentElement,n)){if(r!==null&&pf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=mg(n,i);var o=mg(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var hS=Bn&&"documentMode"in document&&11>=document.documentMode,Os=null,Hh=null,yo=null,qh=!1;function gg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qh||Os==null||Os!==Vl(r)||(r=Os,"selectionStart"in r&&pf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),yo&&Oo(yo,r)||(yo=r,r=Bl(Hh,"onSelect"),0<r.length&&(e=new hf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Os)))}function Qa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ms={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionend:Qa("Transition","TransitionEnd")},Wc={},Fv={};Bn&&(Fv=document.createElement("div").style,"AnimationEvent"in window||(delete Ms.animationend.animation,delete Ms.animationiteration.animation,delete Ms.animationstart.animation),"TransitionEvent"in window||delete Ms.transitionend.transition);function xu(t){if(Wc[t])return Wc[t];if(!Ms[t])return t;var e=Ms[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Fv)return Wc[t]=e[n];return t}var Uv=xu("animationend"),zv=xu("animationiteration"),Bv=xu("animationstart"),$v=xu("transitionend"),Hv=new Map,yg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mr(t,e){Hv.set(t,e),vs(e,[t])}for(var Gc=0;Gc<yg.length;Gc++){var Kc=yg[Gc],dS=Kc.toLowerCase(),fS=Kc[0].toUpperCase()+Kc.slice(1);Mr(dS,"on"+fS)}Mr(Uv,"onAnimationEnd");Mr(zv,"onAnimationIteration");Mr(Bv,"onAnimationStart");Mr("dblclick","onDoubleClick");Mr("focusin","onFocus");Mr("focusout","onBlur");Mr($v,"onTransitionEnd");si("onMouseEnter",["mouseout","mouseover"]);si("onMouseLeave",["mouseout","mouseover"]);si("onPointerEnter",["pointerout","pointerover"]);si("onPointerLeave",["pointerout","pointerover"]);vs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vs("onBeforeInput",["compositionend","keypress","textInput","paste"]);vs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pS=new Set("cancel close invalid load scroll toggle".split(" ").concat(ao));function _g(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,dI(r,e,void 0,t),t.currentTarget=null}function qv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;_g(s,l,h),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;_g(s,l,h),i=u}}}if(Ol)throw t=Uh,Ol=!1,Uh=null,t}function ye(t,e){var n=e[Yh];n===void 0&&(n=e[Yh]=new Set);var r=t+"__bubble";n.has(r)||(Wv(e,t,2,!1),n.add(r))}function Qc(t,e,n){var r=0;e&&(r|=4),Wv(n,t,r,e)}var Ya="_reactListening"+Math.random().toString(36).slice(2);function Mo(t){if(!t[Ya]){t[Ya]=!0,Z_.forEach(function(n){n!=="selectionchange"&&(pS.has(n)||Qc(n,!1,t),Qc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ya]||(e[Ya]=!0,Qc("selectionchange",!1,e))}}function Wv(t,e,n,r){switch(Rv(e)){case 1:var s=CI;break;case 4:s=RI;break;default:s=uf}n=s.bind(null,e,n,t),s=void 0,!Fh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Yc(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Jr(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}mv(function(){var h=i,f=sf(n),g=[];e:{var m=Hv.get(t);if(m!==void 0){var w=hf,k=t;switch(t){case"keypress":if(yl(n)===0)break e;case"keydown":case"keyup":w=HI;break;case"focusin":k="focus",w=$c;break;case"focusout":k="blur",w=$c;break;case"beforeblur":case"afterblur":w=$c;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=og;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=bI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=GI;break;case Uv:case zv:case Bv:w=VI;break;case $v:w=QI;break;case"scroll":w=NI;break;case"wheel":w=XI;break;case"copy":case"cut":case"paste":w=OI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=lg}var N=(e&4)!==0,b=!N&&t==="scroll",S=N?m!==null?m+"Capture":null:m;N=[];for(var I=h,x;I!==null;){x=I;var j=x.stateNode;if(x.tag===5&&j!==null&&(x=j,S!==null&&(j=bo(I,S),j!=null&&N.push(Fo(I,j,x)))),b)break;I=I.return}0<N.length&&(m=new w(m,k,null,n,f),g.push({event:m,listeners:N}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",m&&n!==Oh&&(k=n.relatedTarget||n.fromElement)&&(Jr(k)||k[$n]))break e;if((w||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,w?(k=n.relatedTarget||n.toElement,w=h,k=k?Jr(k):null,k!==null&&(b=ws(k),k!==b||k.tag!==5&&k.tag!==6)&&(k=null)):(w=null,k=h),w!==k)){if(N=og,j="onMouseLeave",S="onMouseEnter",I="mouse",(t==="pointerout"||t==="pointerover")&&(N=lg,j="onPointerLeave",S="onPointerEnter",I="pointer"),b=w==null?m:Fs(w),x=k==null?m:Fs(k),m=new N(j,I+"leave",w,n,f),m.target=b,m.relatedTarget=x,j=null,Jr(f)===h&&(N=new N(S,I+"enter",k,n,f),N.target=x,N.relatedTarget=b,j=N),b=j,w&&k)t:{for(N=w,S=k,I=0,x=N;x;x=Rs(x))I++;for(x=0,j=S;j;j=Rs(j))x++;for(;0<I-x;)N=Rs(N),I--;for(;0<x-I;)S=Rs(S),x--;for(;I--;){if(N===S||S!==null&&N===S.alternate)break t;N=Rs(N),S=Rs(S)}N=null}else N=null;w!==null&&vg(g,m,w,N,!1),k!==null&&b!==null&&vg(g,b,k,N,!0)}}e:{if(m=h?Fs(h):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var R=sS;else if(hg(m))if(Vv)R=lS;else{R=oS;var L=iS}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(R=aS);if(R&&(R=R(t,h))){jv(g,R,n,f);break e}L&&L(t,m,h),t==="focusout"&&(L=m._wrapperState)&&L.controlled&&m.type==="number"&&bh(m,"number",m.value)}switch(L=h?Fs(h):window,t){case"focusin":(hg(L)||L.contentEditable==="true")&&(Os=L,Hh=h,yo=null);break;case"focusout":yo=Hh=Os=null;break;case"mousedown":qh=!0;break;case"contextmenu":case"mouseup":case"dragend":qh=!1,gg(g,n,f);break;case"selectionchange":if(hS)break;case"keydown":case"keyup":gg(g,n,f)}var _;if(ff)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Ls?bv(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Pv&&n.locale!=="ko"&&(Ls||y!=="onCompositionStart"?y==="onCompositionEnd"&&Ls&&(_=Nv()):(pr=f,cf="value"in pr?pr.value:pr.textContent,Ls=!0)),L=Bl(h,y),0<L.length&&(y=new ag(y,t,null,n,f),g.push({event:y,listeners:L}),_?y.data=_:(_=Dv(n),_!==null&&(y.data=_)))),(_=ZI?eS(t,n):tS(t,n))&&(h=Bl(h,"onBeforeInput"),0<h.length&&(f=new ag("onBeforeInput","beforeinput",null,n,f),g.push({event:f,listeners:h}),f.data=_))}qv(g,e)})}function Fo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Bl(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=bo(t,n),i!=null&&r.unshift(Fo(t,i,s)),i=bo(t,e),i!=null&&r.push(Fo(t,i,s))),t=t.return}return r}function Rs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function vg(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,s?(u=bo(n,i),u!=null&&o.unshift(Fo(n,u,l))):s||(u=bo(n,i),u!=null&&o.push(Fo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var mS=/\r\n?/g,gS=/\u0000|\uFFFD/g;function wg(t){return(typeof t=="string"?t:""+t).replace(mS,`
`).replace(gS,"")}function Xa(t,e,n){if(e=wg(e),wg(t)!==e&&n)throw Error(F(425))}function $l(){}var Wh=null,Gh=null;function Kh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Qh=typeof setTimeout=="function"?setTimeout:void 0,yS=typeof clearTimeout=="function"?clearTimeout:void 0,Eg=typeof Promise=="function"?Promise:void 0,_S=typeof queueMicrotask=="function"?queueMicrotask:typeof Eg<"u"?function(t){return Eg.resolve(null).then(t).catch(vS)}:Qh;function vS(t){setTimeout(function(){throw t})}function Xc(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),Vo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Vo(e)}function wr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Tg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Si=Math.random().toString(36).slice(2),mn="__reactFiber$"+Si,Uo="__reactProps$"+Si,$n="__reactContainer$"+Si,Yh="__reactEvents$"+Si,wS="__reactListeners$"+Si,ES="__reactHandles$"+Si;function Jr(t){var e=t[mn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[$n]||n[mn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Tg(t);t!==null;){if(n=t[mn])return n;t=Tg(t)}return e}t=n,n=t.parentNode}return null}function ha(t){return t=t[mn]||t[$n],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function Cu(t){return t[Uo]||null}var Xh=[],Us=-1;function Fr(t){return{current:t}}function ve(t){0>Us||(t.current=Xh[Us],Xh[Us]=null,Us--)}function pe(t,e){Us++,Xh[Us]=t.current,t.current=e}var Nr={},ht=Fr(Nr),St=Fr(!1),ls=Nr;function ii(t,e){var n=t.type.contextTypes;if(!n)return Nr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function kt(t){return t=t.childContextTypes,t!=null}function Hl(){ve(St),ve(ht)}function Ig(t,e,n){if(ht.current!==Nr)throw Error(F(168));pe(ht,e),pe(St,n)}function Gv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(F(108,iI(t)||"Unknown",s));return Se({},n,r)}function ql(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Nr,ls=ht.current,pe(ht,t),pe(St,St.current),!0}function Sg(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=Gv(t,e,ls),r.__reactInternalMemoizedMergedChildContext=t,ve(St),ve(ht),pe(ht,t)):ve(St),pe(St,n)}var jn=null,Ru=!1,Jc=!1;function Kv(t){jn===null?jn=[t]:jn.push(t)}function TS(t){Ru=!0,Kv(t)}function Ur(){if(!Jc&&jn!==null){Jc=!0;var t=0,e=ce;try{var n=jn;for(ce=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}jn=null,Ru=!1}catch(s){throw jn!==null&&(jn=jn.slice(t+1)),vv(of,Ur),s}finally{ce=e,Jc=!1}}return null}var zs=[],Bs=0,Wl=null,Gl=0,Ut=[],zt=0,us=null,Ln=1,On="";function Qr(t,e){zs[Bs++]=Gl,zs[Bs++]=Wl,Wl=t,Gl=e}function Qv(t,e,n){Ut[zt++]=Ln,Ut[zt++]=On,Ut[zt++]=us,us=t;var r=Ln;t=On;var s=32-nn(r)-1;r&=~(1<<s),n+=1;var i=32-nn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Ln=1<<32-nn(e)+s|n<<s|r,On=i+t}else Ln=1<<i|n<<s|r,On=t}function mf(t){t.return!==null&&(Qr(t,1),Qv(t,1,0))}function gf(t){for(;t===Wl;)Wl=zs[--Bs],zs[Bs]=null,Gl=zs[--Bs],zs[Bs]=null;for(;t===us;)us=Ut[--zt],Ut[zt]=null,On=Ut[--zt],Ut[zt]=null,Ln=Ut[--zt],Ut[zt]=null}var jt=null,Pt=null,Ee=!1,Zt=null;function Yv(t,e){var n=Ht(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function kg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,jt=t,Pt=wr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,jt=t,Pt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=us!==null?{id:Ln,overflow:On}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ht(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,jt=t,Pt=null,!0):!1;default:return!1}}function Jh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Zh(t){if(Ee){var e=Pt;if(e){var n=e;if(!kg(t,e)){if(Jh(t))throw Error(F(418));e=wr(n.nextSibling);var r=jt;e&&kg(t,e)?Yv(r,n):(t.flags=t.flags&-4097|2,Ee=!1,jt=t)}}else{if(Jh(t))throw Error(F(418));t.flags=t.flags&-4097|2,Ee=!1,jt=t}}}function Ag(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;jt=t}function Ja(t){if(t!==jt)return!1;if(!Ee)return Ag(t),Ee=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Kh(t.type,t.memoizedProps)),e&&(e=Pt)){if(Jh(t))throw Xv(),Error(F(418));for(;e;)Yv(t,e),e=wr(e.nextSibling)}if(Ag(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Pt=wr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Pt=null}}else Pt=jt?wr(t.stateNode.nextSibling):null;return!0}function Xv(){for(var t=Pt;t;)t=wr(t.nextSibling)}function oi(){Pt=jt=null,Ee=!1}function yf(t){Zt===null?Zt=[t]:Zt.push(t)}var IS=Yn.ReactCurrentBatchConfig;function Zi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function Za(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function xg(t){var e=t._init;return e(t._payload)}function Jv(t){function e(S,I){if(t){var x=S.deletions;x===null?(S.deletions=[I],S.flags|=16):x.push(I)}}function n(S,I){if(!t)return null;for(;I!==null;)e(S,I),I=I.sibling;return null}function r(S,I){for(S=new Map;I!==null;)I.key!==null?S.set(I.key,I):S.set(I.index,I),I=I.sibling;return S}function s(S,I){return S=Sr(S,I),S.index=0,S.sibling=null,S}function i(S,I,x){return S.index=x,t?(x=S.alternate,x!==null?(x=x.index,x<I?(S.flags|=2,I):x):(S.flags|=2,I)):(S.flags|=1048576,I)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function l(S,I,x,j){return I===null||I.tag!==6?(I=ih(x,S.mode,j),I.return=S,I):(I=s(I,x),I.return=S,I)}function u(S,I,x,j){var R=x.type;return R===Vs?f(S,I,x.props.children,j,x.key):I!==null&&(I.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===or&&xg(R)===I.type)?(j=s(I,x.props),j.ref=Zi(S,I,x),j.return=S,j):(j=Sl(x.type,x.key,x.props,null,S.mode,j),j.ref=Zi(S,I,x),j.return=S,j)}function h(S,I,x,j){return I===null||I.tag!==4||I.stateNode.containerInfo!==x.containerInfo||I.stateNode.implementation!==x.implementation?(I=oh(x,S.mode,j),I.return=S,I):(I=s(I,x.children||[]),I.return=S,I)}function f(S,I,x,j,R){return I===null||I.tag!==7?(I=ss(x,S.mode,j,R),I.return=S,I):(I=s(I,x),I.return=S,I)}function g(S,I,x){if(typeof I=="string"&&I!==""||typeof I=="number")return I=ih(""+I,S.mode,x),I.return=S,I;if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Ba:return x=Sl(I.type,I.key,I.props,null,S.mode,x),x.ref=Zi(S,null,I),x.return=S,x;case js:return I=oh(I,S.mode,x),I.return=S,I;case or:var j=I._init;return g(S,j(I._payload),x)}if(io(I)||Ki(I))return I=ss(I,S.mode,x,null),I.return=S,I;Za(S,I)}return null}function m(S,I,x,j){var R=I!==null?I.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return R!==null?null:l(S,I,""+x,j);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ba:return x.key===R?u(S,I,x,j):null;case js:return x.key===R?h(S,I,x,j):null;case or:return R=x._init,m(S,I,R(x._payload),j)}if(io(x)||Ki(x))return R!==null?null:f(S,I,x,j,null);Za(S,x)}return null}function w(S,I,x,j,R){if(typeof j=="string"&&j!==""||typeof j=="number")return S=S.get(x)||null,l(I,S,""+j,R);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Ba:return S=S.get(j.key===null?x:j.key)||null,u(I,S,j,R);case js:return S=S.get(j.key===null?x:j.key)||null,h(I,S,j,R);case or:var L=j._init;return w(S,I,x,L(j._payload),R)}if(io(j)||Ki(j))return S=S.get(x)||null,f(I,S,j,R,null);Za(I,j)}return null}function k(S,I,x,j){for(var R=null,L=null,_=I,y=I=0,T=null;_!==null&&y<x.length;y++){_.index>y?(T=_,_=null):T=_.sibling;var E=m(S,_,x[y],j);if(E===null){_===null&&(_=T);break}t&&_&&E.alternate===null&&e(S,_),I=i(E,I,y),L===null?R=E:L.sibling=E,L=E,_=T}if(y===x.length)return n(S,_),Ee&&Qr(S,y),R;if(_===null){for(;y<x.length;y++)_=g(S,x[y],j),_!==null&&(I=i(_,I,y),L===null?R=_:L.sibling=_,L=_);return Ee&&Qr(S,y),R}for(_=r(S,_);y<x.length;y++)T=w(_,S,y,x[y],j),T!==null&&(t&&T.alternate!==null&&_.delete(T.key===null?y:T.key),I=i(T,I,y),L===null?R=T:L.sibling=T,L=T);return t&&_.forEach(function(A){return e(S,A)}),Ee&&Qr(S,y),R}function N(S,I,x,j){var R=Ki(x);if(typeof R!="function")throw Error(F(150));if(x=R.call(x),x==null)throw Error(F(151));for(var L=R=null,_=I,y=I=0,T=null,E=x.next();_!==null&&!E.done;y++,E=x.next()){_.index>y?(T=_,_=null):T=_.sibling;var A=m(S,_,E.value,j);if(A===null){_===null&&(_=T);break}t&&_&&A.alternate===null&&e(S,_),I=i(A,I,y),L===null?R=A:L.sibling=A,L=A,_=T}if(E.done)return n(S,_),Ee&&Qr(S,y),R;if(_===null){for(;!E.done;y++,E=x.next())E=g(S,E.value,j),E!==null&&(I=i(E,I,y),L===null?R=E:L.sibling=E,L=E);return Ee&&Qr(S,y),R}for(_=r(S,_);!E.done;y++,E=x.next())E=w(_,S,y,E.value,j),E!==null&&(t&&E.alternate!==null&&_.delete(E.key===null?y:E.key),I=i(E,I,y),L===null?R=E:L.sibling=E,L=E);return t&&_.forEach(function(P){return e(S,P)}),Ee&&Qr(S,y),R}function b(S,I,x,j){if(typeof x=="object"&&x!==null&&x.type===Vs&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ba:e:{for(var R=x.key,L=I;L!==null;){if(L.key===R){if(R=x.type,R===Vs){if(L.tag===7){n(S,L.sibling),I=s(L,x.props.children),I.return=S,S=I;break e}}else if(L.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===or&&xg(R)===L.type){n(S,L.sibling),I=s(L,x.props),I.ref=Zi(S,L,x),I.return=S,S=I;break e}n(S,L);break}else e(S,L);L=L.sibling}x.type===Vs?(I=ss(x.props.children,S.mode,j,x.key),I.return=S,S=I):(j=Sl(x.type,x.key,x.props,null,S.mode,j),j.ref=Zi(S,I,x),j.return=S,S=j)}return o(S);case js:e:{for(L=x.key;I!==null;){if(I.key===L)if(I.tag===4&&I.stateNode.containerInfo===x.containerInfo&&I.stateNode.implementation===x.implementation){n(S,I.sibling),I=s(I,x.children||[]),I.return=S,S=I;break e}else{n(S,I);break}else e(S,I);I=I.sibling}I=oh(x,S.mode,j),I.return=S,S=I}return o(S);case or:return L=x._init,b(S,I,L(x._payload),j)}if(io(x))return k(S,I,x,j);if(Ki(x))return N(S,I,x,j);Za(S,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,I!==null&&I.tag===6?(n(S,I.sibling),I=s(I,x),I.return=S,S=I):(n(S,I),I=ih(x,S.mode,j),I.return=S,S=I),o(S)):n(S,I)}return b}var ai=Jv(!0),Zv=Jv(!1),Kl=Fr(null),Ql=null,$s=null,_f=null;function vf(){_f=$s=Ql=null}function wf(t){var e=Kl.current;ve(Kl),t._currentValue=e}function ed(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ys(t,e){Ql=t,_f=$s=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(It=!0),t.firstContext=null)}function Kt(t){var e=t._currentValue;if(_f!==t)if(t={context:t,memoizedValue:e,next:null},$s===null){if(Ql===null)throw Error(F(308));$s=t,Ql.dependencies={lanes:0,firstContext:t}}else $s=$s.next=t;return e}var Zr=null;function Ef(t){Zr===null?Zr=[t]:Zr.push(t)}function ew(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Ef(e)):(n.next=s.next,s.next=n),e.interleaved=n,Hn(t,r)}function Hn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ar=!1;function Tf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Un(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Er(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Hn(t,n)}return s=r.interleaved,s===null?(e.next=e,Ef(r)):(e.next=s.next,s.next=e),r.interleaved=e,Hn(t,n)}function _l(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,af(t,n)}}function Cg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Yl(t,e,n,r){var s=t.updateQueue;ar=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?i=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(i!==null){var g=s.baseState;o=0,f=h=u=null,l=i;do{var m=l.lane,w=l.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=t,N=l;switch(m=e,w=n,N.tag){case 1:if(k=N.payload,typeof k=="function"){g=k.call(w,g,m);break e}g=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=N.payload,m=typeof k=="function"?k.call(w,g,m):k,m==null)break e;g=Se({},g,m);break e;case 2:ar=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=s.effects,m===null?s.effects=[l]:m.push(l))}else w={eventTime:w,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=w,u=g):f=f.next=w,o|=m;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;m=l,l=m.next,m.next=null,s.lastBaseUpdate=m,s.shared.pending=null}}while(!0);if(f===null&&(u=g),s.baseState=u,s.firstBaseUpdate=h,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);hs|=o,t.lanes=o,t.memoizedState=g}}function Rg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(F(191,s));s.call(r)}}}var da={},_n=Fr(da),zo=Fr(da),Bo=Fr(da);function es(t){if(t===da)throw Error(F(174));return t}function If(t,e){switch(pe(Bo,e),pe(zo,t),pe(_n,da),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:jh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=jh(e,t)}ve(_n),pe(_n,e)}function li(){ve(_n),ve(zo),ve(Bo)}function nw(t){es(Bo.current);var e=es(_n.current),n=jh(e,t.type);e!==n&&(pe(zo,t),pe(_n,n))}function Sf(t){zo.current===t&&(ve(_n),ve(zo))}var Te=Fr(0);function Xl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Zc=[];function kf(){for(var t=0;t<Zc.length;t++)Zc[t]._workInProgressVersionPrimary=null;Zc.length=0}var vl=Yn.ReactCurrentDispatcher,eh=Yn.ReactCurrentBatchConfig,cs=0,Ie=null,ze=null,Ge=null,Jl=!1,_o=!1,$o=0,SS=0;function it(){throw Error(F(321))}function Af(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!an(t[n],e[n]))return!1;return!0}function xf(t,e,n,r,s,i){if(cs=i,Ie=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,vl.current=t===null||t.memoizedState===null?CS:RS,t=n(r,s),_o){i=0;do{if(_o=!1,$o=0,25<=i)throw Error(F(301));i+=1,Ge=ze=null,e.updateQueue=null,vl.current=NS,t=n(r,s)}while(_o)}if(vl.current=Zl,e=ze!==null&&ze.next!==null,cs=0,Ge=ze=Ie=null,Jl=!1,e)throw Error(F(300));return t}function Cf(){var t=$o!==0;return $o=0,t}function fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?Ie.memoizedState=Ge=t:Ge=Ge.next=t,Ge}function Qt(){if(ze===null){var t=Ie.alternate;t=t!==null?t.memoizedState:null}else t=ze.next;var e=Ge===null?Ie.memoizedState:Ge.next;if(e!==null)Ge=e,ze=t;else{if(t===null)throw Error(F(310));ze=t,t={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},Ge===null?Ie.memoizedState=Ge=t:Ge=Ge.next=t}return Ge}function Ho(t,e){return typeof e=="function"?e(t):e}function th(t){var e=Qt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=ze,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,h=i;do{var f=h.lane;if((cs&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var g={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=g,o=r):u=u.next=g,Ie.lanes|=f,hs|=f}h=h.next}while(h!==null&&h!==i);u===null?o=r:u.next=l,an(r,e.memoizedState)||(It=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Ie.lanes|=i,hs|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function nh(t){var e=Qt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);an(i,e.memoizedState)||(It=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function rw(){}function sw(t,e){var n=Ie,r=Qt(),s=e(),i=!an(r.memoizedState,s);if(i&&(r.memoizedState=s,It=!0),r=r.queue,Rf(aw.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Ge!==null&&Ge.memoizedState.tag&1){if(n.flags|=2048,qo(9,ow.bind(null,n,r,s,e),void 0,null),Qe===null)throw Error(F(349));cs&30||iw(n,e,s)}return s}function iw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ow(t,e,n,r){e.value=n,e.getSnapshot=r,lw(e)&&uw(t)}function aw(t,e,n){return n(function(){lw(e)&&uw(t)})}function lw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!an(t,n)}catch{return!0}}function uw(t){var e=Hn(t,1);e!==null&&rn(e,t,1,-1)}function Ng(t){var e=fn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ho,lastRenderedState:t},e.queue=t,t=t.dispatch=xS.bind(null,Ie,t),[e.memoizedState,t]}function qo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function cw(){return Qt().memoizedState}function wl(t,e,n,r){var s=fn();Ie.flags|=t,s.memoizedState=qo(1|e,n,void 0,r===void 0?null:r)}function Nu(t,e,n,r){var s=Qt();r=r===void 0?null:r;var i=void 0;if(ze!==null){var o=ze.memoizedState;if(i=o.destroy,r!==null&&Af(r,o.deps)){s.memoizedState=qo(e,n,i,r);return}}Ie.flags|=t,s.memoizedState=qo(1|e,n,i,r)}function Pg(t,e){return wl(8390656,8,t,e)}function Rf(t,e){return Nu(2048,8,t,e)}function hw(t,e){return Nu(4,2,t,e)}function dw(t,e){return Nu(4,4,t,e)}function fw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function pw(t,e,n){return n=n!=null?n.concat([t]):null,Nu(4,4,fw.bind(null,e,t),n)}function Nf(){}function mw(t,e){var n=Qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Af(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function gw(t,e){var n=Qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Af(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function yw(t,e,n){return cs&21?(an(n,e)||(n=Tv(),Ie.lanes|=n,hs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,It=!0),t.memoizedState=n)}function kS(t,e){var n=ce;ce=n!==0&&4>n?n:4,t(!0);var r=eh.transition;eh.transition={};try{t(!1),e()}finally{ce=n,eh.transition=r}}function _w(){return Qt().memoizedState}function AS(t,e,n){var r=Ir(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},vw(t))ww(e,n);else if(n=ew(t,e,n,r),n!==null){var s=yt();rn(n,t,r,s),Ew(n,e,r)}}function xS(t,e,n){var r=Ir(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(vw(t))ww(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,an(l,o)){var u=e.interleaved;u===null?(s.next=s,Ef(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=ew(t,e,s,r),n!==null&&(s=yt(),rn(n,t,r,s),Ew(n,e,r))}}function vw(t){var e=t.alternate;return t===Ie||e!==null&&e===Ie}function ww(t,e){_o=Jl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ew(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,af(t,n)}}var Zl={readContext:Kt,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},CS={readContext:Kt,useCallback:function(t,e){return fn().memoizedState=[t,e===void 0?null:e],t},useContext:Kt,useEffect:Pg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,wl(4194308,4,fw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return wl(4194308,4,t,e)},useInsertionEffect:function(t,e){return wl(4,2,t,e)},useMemo:function(t,e){var n=fn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=fn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=AS.bind(null,Ie,t),[r.memoizedState,t]},useRef:function(t){var e=fn();return t={current:t},e.memoizedState=t},useState:Ng,useDebugValue:Nf,useDeferredValue:function(t){return fn().memoizedState=t},useTransition:function(){var t=Ng(!1),e=t[0];return t=kS.bind(null,t[1]),fn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ie,s=fn();if(Ee){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),Qe===null)throw Error(F(349));cs&30||iw(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Pg(aw.bind(null,r,i,t),[t]),r.flags|=2048,qo(9,ow.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=fn(),e=Qe.identifierPrefix;if(Ee){var n=On,r=Ln;n=(r&~(1<<32-nn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=$o++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=SS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},RS={readContext:Kt,useCallback:mw,useContext:Kt,useEffect:Rf,useImperativeHandle:pw,useInsertionEffect:hw,useLayoutEffect:dw,useMemo:gw,useReducer:th,useRef:cw,useState:function(){return th(Ho)},useDebugValue:Nf,useDeferredValue:function(t){var e=Qt();return yw(e,ze.memoizedState,t)},useTransition:function(){var t=th(Ho)[0],e=Qt().memoizedState;return[t,e]},useMutableSource:rw,useSyncExternalStore:sw,useId:_w,unstable_isNewReconciler:!1},NS={readContext:Kt,useCallback:mw,useContext:Kt,useEffect:Rf,useImperativeHandle:pw,useInsertionEffect:hw,useLayoutEffect:dw,useMemo:gw,useReducer:nh,useRef:cw,useState:function(){return nh(Ho)},useDebugValue:Nf,useDeferredValue:function(t){var e=Qt();return ze===null?e.memoizedState=t:yw(e,ze.memoizedState,t)},useTransition:function(){var t=nh(Ho)[0],e=Qt().memoizedState;return[t,e]},useMutableSource:rw,useSyncExternalStore:sw,useId:_w,unstable_isNewReconciler:!1};function Xt(t,e){if(t&&t.defaultProps){e=Se({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function td(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Se({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Pu={isMounted:function(t){return(t=t._reactInternals)?ws(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=yt(),s=Ir(t),i=Un(r,s);i.payload=e,n!=null&&(i.callback=n),e=Er(t,i,s),e!==null&&(rn(e,t,s,r),_l(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=yt(),s=Ir(t),i=Un(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Er(t,i,s),e!==null&&(rn(e,t,s,r),_l(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=yt(),r=Ir(t),s=Un(n,r);s.tag=2,e!=null&&(s.callback=e),e=Er(t,s,r),e!==null&&(rn(e,t,r,n),_l(e,t,r))}};function bg(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Oo(n,r)||!Oo(s,i):!0}function Tw(t,e,n){var r=!1,s=Nr,i=e.contextType;return typeof i=="object"&&i!==null?i=Kt(i):(s=kt(e)?ls:ht.current,r=e.contextTypes,i=(r=r!=null)?ii(t,s):Nr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Pu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Dg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Pu.enqueueReplaceState(e,e.state,null)}function nd(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Tf(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Kt(i):(i=kt(e)?ls:ht.current,s.context=ii(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(td(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Pu.enqueueReplaceState(s,s.state,null),Yl(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function ui(t,e){try{var n="",r=e;do n+=sI(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function rh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function rd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var PS=typeof WeakMap=="function"?WeakMap:Map;function Iw(t,e,n){n=Un(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){tu||(tu=!0,fd=r),rd(t,e)},n}function Sw(t,e,n){n=Un(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){rd(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){rd(t,e),typeof r!="function"&&(Tr===null?Tr=new Set([this]):Tr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function jg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new PS;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=qS.bind(null,t,e,n),e.then(t,t))}function Vg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Lg(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Un(-1,1),e.tag=2,Er(n,e,1))),n.lanes|=1),t)}var bS=Yn.ReactCurrentOwner,It=!1;function gt(t,e,n,r){e.child=t===null?Zv(e,null,n,r):ai(e,t.child,n,r)}function Og(t,e,n,r,s){n=n.render;var i=e.ref;return Ys(e,s),r=xf(t,e,n,r,i,s),n=Cf(),t!==null&&!It?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,qn(t,e,s)):(Ee&&n&&mf(e),e.flags|=1,gt(t,e,r,s),e.child)}function Mg(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Mf(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,kw(t,e,i,r,s)):(t=Sl(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Oo,n(o,r)&&t.ref===e.ref)return qn(t,e,s)}return e.flags|=1,t=Sr(i,r),t.ref=e.ref,t.return=e,e.child=t}function kw(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Oo(i,r)&&t.ref===e.ref)if(It=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(It=!0);else return e.lanes=t.lanes,qn(t,e,s)}return sd(t,e,n,r,s)}function Aw(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(qs,Nt),Nt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,pe(qs,Nt),Nt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,pe(qs,Nt),Nt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,pe(qs,Nt),Nt|=r;return gt(t,e,s,n),e.child}function xw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function sd(t,e,n,r,s){var i=kt(n)?ls:ht.current;return i=ii(e,i),Ys(e,s),n=xf(t,e,n,r,i,s),r=Cf(),t!==null&&!It?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,qn(t,e,s)):(Ee&&r&&mf(e),e.flags|=1,gt(t,e,n,s),e.child)}function Fg(t,e,n,r,s){if(kt(n)){var i=!0;ql(e)}else i=!1;if(Ys(e,s),e.stateNode===null)El(t,e),Tw(e,n,r),nd(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Kt(h):(h=kt(n)?ls:ht.current,h=ii(e,h));var f=n.getDerivedStateFromProps,g=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&Dg(e,o,r,h),ar=!1;var m=e.memoizedState;o.state=m,Yl(e,r,o,s),u=e.memoizedState,l!==r||m!==u||St.current||ar?(typeof f=="function"&&(td(e,n,f,r),u=e.memoizedState),(l=ar||bg(e,n,l,r,m,u,h))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,tw(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Xt(e.type,l),o.props=h,g=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Kt(u):(u=kt(n)?ls:ht.current,u=ii(e,u));var w=n.getDerivedStateFromProps;(f=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==g||m!==u)&&Dg(e,o,r,u),ar=!1,m=e.memoizedState,o.state=m,Yl(e,r,o,s);var k=e.memoizedState;l!==g||m!==k||St.current||ar?(typeof w=="function"&&(td(e,n,w,r),k=e.memoizedState),(h=ar||bg(e,n,h,r,m,k,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=k),o.props=r,o.state=k,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return id(t,e,n,r,i,s)}function id(t,e,n,r,s,i){xw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Sg(e,n,!1),qn(t,e,i);r=e.stateNode,bS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ai(e,t.child,null,i),e.child=ai(e,null,l,i)):gt(t,e,l,i),e.memoizedState=r.state,s&&Sg(e,n,!0),e.child}function Cw(t){var e=t.stateNode;e.pendingContext?Ig(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ig(t,e.context,!1),If(t,e.containerInfo)}function Ug(t,e,n,r,s){return oi(),yf(s),e.flags|=256,gt(t,e,n,r),e.child}var od={dehydrated:null,treeContext:null,retryLane:0};function ad(t){return{baseLanes:t,cachePool:null,transitions:null}}function Rw(t,e,n){var r=e.pendingProps,s=Te.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),pe(Te,s&1),t===null)return Zh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=ju(o,r,0,null),t=ss(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=ad(n),e.memoizedState=od,t):Pf(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return DS(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Sr(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=Sr(l,i):(i=ss(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?ad(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=od,r}return i=t.child,t=i.sibling,r=Sr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Pf(t,e){return e=ju({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function el(t,e,n,r){return r!==null&&yf(r),ai(e,t.child,null,n),t=Pf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function DS(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=rh(Error(F(422))),el(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=ju({mode:"visible",children:r.children},s,0,null),i=ss(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&ai(e,t.child,null,o),e.child.memoizedState=ad(o),e.memoizedState=od,i);if(!(e.mode&1))return el(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(F(419)),r=rh(i,r,void 0),el(t,e,o,r)}if(l=(o&t.childLanes)!==0,It||l){if(r=Qe,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Hn(t,s),rn(r,t,s,-1))}return Of(),r=rh(Error(F(421))),el(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=WS.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Pt=wr(s.nextSibling),jt=e,Ee=!0,Zt=null,t!==null&&(Ut[zt++]=Ln,Ut[zt++]=On,Ut[zt++]=us,Ln=t.id,On=t.overflow,us=e),e=Pf(e,r.children),e.flags|=4096,e)}function zg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ed(t.return,e,n)}function sh(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function Nw(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(gt(t,e,r.children,n),r=Te.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&zg(t,n,e);else if(t.tag===19)zg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(pe(Te,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Xl(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),sh(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Xl(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}sh(e,!0,n,null,i);break;case"together":sh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function El(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function qn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),hs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=Sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function jS(t,e,n){switch(e.tag){case 3:Cw(e),oi();break;case 5:nw(e);break;case 1:kt(e.type)&&ql(e);break;case 4:If(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;pe(Kl,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(pe(Te,Te.current&1),e.flags|=128,null):n&e.child.childLanes?Rw(t,e,n):(pe(Te,Te.current&1),t=qn(t,e,n),t!==null?t.sibling:null);pe(Te,Te.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Nw(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),pe(Te,Te.current),r)break;return null;case 22:case 23:return e.lanes=0,Aw(t,e,n)}return qn(t,e,n)}var Pw,ld,bw,Dw;Pw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ld=function(){};bw=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,es(_n.current);var i=null;switch(n){case"input":s=Nh(t,s),r=Nh(t,r),i=[];break;case"select":s=Se({},s,{value:void 0}),r=Se({},r,{value:void 0}),i=[];break;case"textarea":s=Dh(t,s),r=Dh(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=$l)}Vh(n,r);var o;n=null;for(h in s)if(!r.hasOwnProperty(h)&&s.hasOwnProperty(h)&&s[h]!=null)if(h==="style"){var l=s[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(No.hasOwnProperty(h)?i||(i=[]):(i=i||[]).push(h,null));for(h in r){var u=r[h];if(l=s!=null?s[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(No.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&ye("scroll",t),i||l===u||(i=[])):(i=i||[]).push(h,u))}n&&(i=i||[]).push("style",n);var h=i;(e.updateQueue=h)&&(e.flags|=4)}};Dw=function(t,e,n,r){n!==r&&(e.flags|=4)};function eo(t,e){if(!Ee)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function VS(t,e,n){var r=e.pendingProps;switch(gf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(e),null;case 1:return kt(e.type)&&Hl(),ot(e),null;case 3:return r=e.stateNode,li(),ve(St),ve(ht),kf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ja(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Zt!==null&&(gd(Zt),Zt=null))),ld(t,e),ot(e),null;case 5:Sf(e);var s=es(Bo.current);if(n=e.type,t!==null&&e.stateNode!=null)bw(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return ot(e),null}if(t=es(_n.current),Ja(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[mn]=e,r[Uo]=i,t=(e.mode&1)!==0,n){case"dialog":ye("cancel",r),ye("close",r);break;case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(s=0;s<ao.length;s++)ye(ao[s],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"details":ye("toggle",r);break;case"input":Ym(r,i),ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ye("invalid",r);break;case"textarea":Jm(r,i),ye("invalid",r)}Vh(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Xa(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Xa(r.textContent,l,t),s=["children",""+l]):No.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ye("scroll",r)}switch(n){case"input":$a(r),Xm(r,i,!0);break;case"textarea":$a(r),Zm(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=$l)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=av(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[mn]=e,t[Uo]=r,Pw(t,e,!1,!1),e.stateNode=t;e:{switch(o=Lh(n,r),n){case"dialog":ye("cancel",t),ye("close",t),s=r;break;case"iframe":case"object":case"embed":ye("load",t),s=r;break;case"video":case"audio":for(s=0;s<ao.length;s++)ye(ao[s],t);s=r;break;case"source":ye("error",t),s=r;break;case"img":case"image":case"link":ye("error",t),ye("load",t),s=r;break;case"details":ye("toggle",t),s=r;break;case"input":Ym(t,r),s=Nh(t,r),ye("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Se({},r,{value:void 0}),ye("invalid",t);break;case"textarea":Jm(t,r),s=Dh(t,r),ye("invalid",t);break;default:s=r}Vh(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?cv(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&lv(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Po(t,u):typeof u=="number"&&Po(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(No.hasOwnProperty(i)?u!=null&&i==="onScroll"&&ye("scroll",t):u!=null&&ef(t,i,u,o))}switch(n){case"input":$a(t),Xm(t,r,!1);break;case"textarea":$a(t),Zm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Rr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Ws(t,!!r.multiple,i,!1):r.defaultValue!=null&&Ws(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=$l)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ot(e),null;case 6:if(t&&e.stateNode!=null)Dw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=es(Bo.current),es(_n.current),Ja(e)){if(r=e.stateNode,n=e.memoizedProps,r[mn]=e,(i=r.nodeValue!==n)&&(t=jt,t!==null))switch(t.tag){case 3:Xa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Xa(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mn]=e,e.stateNode=r}return ot(e),null;case 13:if(ve(Te),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ee&&Pt!==null&&e.mode&1&&!(e.flags&128))Xv(),oi(),e.flags|=98560,i=!1;else if(i=Ja(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(F(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(F(317));i[mn]=e}else oi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ot(e),i=!1}else Zt!==null&&(gd(Zt),Zt=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Te.current&1?$e===0&&($e=3):Of())),e.updateQueue!==null&&(e.flags|=4),ot(e),null);case 4:return li(),ld(t,e),t===null&&Mo(e.stateNode.containerInfo),ot(e),null;case 10:return wf(e.type._context),ot(e),null;case 17:return kt(e.type)&&Hl(),ot(e),null;case 19:if(ve(Te),i=e.memoizedState,i===null)return ot(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)eo(i,!1);else{if($e!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Xl(t),o!==null){for(e.flags|=128,eo(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return pe(Te,Te.current&1|2),e.child}t=t.sibling}i.tail!==null&&De()>ci&&(e.flags|=128,r=!0,eo(i,!1),e.lanes=4194304)}else{if(!r)if(t=Xl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),eo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Ee)return ot(e),null}else 2*De()-i.renderingStartTime>ci&&n!==1073741824&&(e.flags|=128,r=!0,eo(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=De(),e.sibling=null,n=Te.current,pe(Te,r?n&1|2:n&1),e):(ot(e),null);case 22:case 23:return Lf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Nt&1073741824&&(ot(e),e.subtreeFlags&6&&(e.flags|=8192)):ot(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function LS(t,e){switch(gf(e),e.tag){case 1:return kt(e.type)&&Hl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return li(),ve(St),ve(ht),kf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Sf(e),null;case 13:if(ve(Te),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));oi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ve(Te),null;case 4:return li(),null;case 10:return wf(e.type._context),null;case 22:case 23:return Lf(),null;case 24:return null;default:return null}}var tl=!1,ut=!1,OS=typeof WeakSet=="function"?WeakSet:Set,W=null;function Hs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ce(t,e,r)}else n.current=null}function ud(t,e,n){try{n()}catch(r){Ce(t,e,r)}}var Bg=!1;function MS(t,e){if(Wh=Ul,t=Mv(),pf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,g=t,m=null;t:for(;;){for(var w;g!==n||s!==0&&g.nodeType!==3||(l=o+s),g!==i||r!==0&&g.nodeType!==3||(u=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(w=g.firstChild)!==null;)m=g,g=w;for(;;){if(g===t)break t;if(m===n&&++h===s&&(l=o),m===i&&++f===r&&(u=o),(w=g.nextSibling)!==null)break;g=m,m=g.parentNode}g=w}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Gh={focusedElem:t,selectionRange:n},Ul=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var k=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var N=k.memoizedProps,b=k.memoizedState,S=e.stateNode,I=S.getSnapshotBeforeUpdate(e.elementType===e.type?N:Xt(e.type,N),b);S.__reactInternalSnapshotBeforeUpdate=I}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(j){Ce(e,e.return,j)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return k=Bg,Bg=!1,k}function vo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&ud(e,n,i)}s=s.next}while(s!==r)}}function bu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function cd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function jw(t){var e=t.alternate;e!==null&&(t.alternate=null,jw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[mn],delete e[Uo],delete e[Yh],delete e[wS],delete e[ES])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Vw(t){return t.tag===5||t.tag===3||t.tag===4}function $g(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Vw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=$l));else if(r!==4&&(t=t.child,t!==null))for(hd(t,e,n),t=t.sibling;t!==null;)hd(t,e,n),t=t.sibling}function dd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(dd(t,e,n),t=t.sibling;t!==null;)dd(t,e,n),t=t.sibling}var Je=null,Jt=!1;function sr(t,e,n){for(n=n.child;n!==null;)Lw(t,e,n),n=n.sibling}function Lw(t,e,n){if(yn&&typeof yn.onCommitFiberUnmount=="function")try{yn.onCommitFiberUnmount(Su,n)}catch{}switch(n.tag){case 5:ut||Hs(n,e);case 6:var r=Je,s=Jt;Je=null,sr(t,e,n),Je=r,Jt=s,Je!==null&&(Jt?(t=Je,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Je.removeChild(n.stateNode));break;case 18:Je!==null&&(Jt?(t=Je,n=n.stateNode,t.nodeType===8?Xc(t.parentNode,n):t.nodeType===1&&Xc(t,n),Vo(t)):Xc(Je,n.stateNode));break;case 4:r=Je,s=Jt,Je=n.stateNode.containerInfo,Jt=!0,sr(t,e,n),Je=r,Jt=s;break;case 0:case 11:case 14:case 15:if(!ut&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&ud(n,e,o),s=s.next}while(s!==r)}sr(t,e,n);break;case 1:if(!ut&&(Hs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ce(n,e,l)}sr(t,e,n);break;case 21:sr(t,e,n);break;case 22:n.mode&1?(ut=(r=ut)||n.memoizedState!==null,sr(t,e,n),ut=r):sr(t,e,n);break;default:sr(t,e,n)}}function Hg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new OS),e.forEach(function(r){var s=GS.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Yt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Je=l.stateNode,Jt=!1;break e;case 3:Je=l.stateNode.containerInfo,Jt=!0;break e;case 4:Je=l.stateNode.containerInfo,Jt=!0;break e}l=l.return}if(Je===null)throw Error(F(160));Lw(i,o,s),Je=null,Jt=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(h){Ce(s,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ow(e,t),e=e.sibling}function Ow(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Yt(e,t),dn(t),r&4){try{vo(3,t,t.return),bu(3,t)}catch(N){Ce(t,t.return,N)}try{vo(5,t,t.return)}catch(N){Ce(t,t.return,N)}}break;case 1:Yt(e,t),dn(t),r&512&&n!==null&&Hs(n,n.return);break;case 5:if(Yt(e,t),dn(t),r&512&&n!==null&&Hs(n,n.return),t.flags&32){var s=t.stateNode;try{Po(s,"")}catch(N){Ce(t,t.return,N)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&iv(s,i),Lh(l,o);var h=Lh(l,i);for(o=0;o<u.length;o+=2){var f=u[o],g=u[o+1];f==="style"?cv(s,g):f==="dangerouslySetInnerHTML"?lv(s,g):f==="children"?Po(s,g):ef(s,f,g,h)}switch(l){case"input":Ph(s,i);break;case"textarea":ov(s,i);break;case"select":var m=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?Ws(s,!!i.multiple,w,!1):m!==!!i.multiple&&(i.defaultValue!=null?Ws(s,!!i.multiple,i.defaultValue,!0):Ws(s,!!i.multiple,i.multiple?[]:"",!1))}s[Uo]=i}catch(N){Ce(t,t.return,N)}}break;case 6:if(Yt(e,t),dn(t),r&4){if(t.stateNode===null)throw Error(F(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(N){Ce(t,t.return,N)}}break;case 3:if(Yt(e,t),dn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vo(e.containerInfo)}catch(N){Ce(t,t.return,N)}break;case 4:Yt(e,t),dn(t);break;case 13:Yt(e,t),dn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(jf=De())),r&4&&Hg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(ut=(h=ut)||f,Yt(e,t),ut=h):Yt(e,t),dn(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(W=t,f=t.child;f!==null;){for(g=W=f;W!==null;){switch(m=W,w=m.child,m.tag){case 0:case 11:case 14:case 15:vo(4,m,m.return);break;case 1:Hs(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,k.props=e.memoizedProps,k.state=e.memoizedState,k.componentWillUnmount()}catch(N){Ce(r,n,N)}}break;case 5:Hs(m,m.return);break;case 22:if(m.memoizedState!==null){Wg(g);continue}}w!==null?(w.return=m,W=w):Wg(g)}f=f.sibling}e:for(f=null,g=t;;){if(g.tag===5){if(f===null){f=g;try{s=g.stateNode,h?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=g.stateNode,u=g.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=uv("display",o))}catch(N){Ce(t,t.return,N)}}}else if(g.tag===6){if(f===null)try{g.stateNode.nodeValue=h?"":g.memoizedProps}catch(N){Ce(t,t.return,N)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;f===g&&(f=null),g=g.return}f===g&&(f=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Yt(e,t),dn(t),r&4&&Hg(t);break;case 21:break;default:Yt(e,t),dn(t)}}function dn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Vw(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Po(s,""),r.flags&=-33);var i=$g(t);dd(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=$g(t);hd(t,l,o);break;default:throw Error(F(161))}}catch(u){Ce(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function FS(t,e,n){W=t,Mw(t)}function Mw(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var s=W,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||tl;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||ut;l=tl;var h=ut;if(tl=o,(ut=u)&&!h)for(W=s;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?Gg(s):u!==null?(u.return=o,W=u):Gg(s);for(;i!==null;)W=i,Mw(i),i=i.sibling;W=s,tl=l,ut=h}qg(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,W=i):qg(t)}}function qg(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ut||bu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ut)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Xt(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Rg(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Rg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var g=f.dehydrated;g!==null&&Vo(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}ut||e.flags&512&&cd(e)}catch(m){Ce(e,e.return,m)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function Wg(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function Gg(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{bu(4,e)}catch(u){Ce(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Ce(e,s,u)}}var i=e.return;try{cd(e)}catch(u){Ce(e,i,u)}break;case 5:var o=e.return;try{cd(e)}catch(u){Ce(e,o,u)}}}catch(u){Ce(e,e.return,u)}if(e===t){W=null;break}var l=e.sibling;if(l!==null){l.return=e.return,W=l;break}W=e.return}}var US=Math.ceil,eu=Yn.ReactCurrentDispatcher,bf=Yn.ReactCurrentOwner,qt=Yn.ReactCurrentBatchConfig,le=0,Qe=null,Le=null,tt=0,Nt=0,qs=Fr(0),$e=0,Wo=null,hs=0,Du=0,Df=0,wo=null,Et=null,jf=0,ci=1/0,Dn=null,tu=!1,fd=null,Tr=null,nl=!1,mr=null,nu=0,Eo=0,pd=null,Tl=-1,Il=0;function yt(){return le&6?De():Tl!==-1?Tl:Tl=De()}function Ir(t){return t.mode&1?le&2&&tt!==0?tt&-tt:IS.transition!==null?(Il===0&&(Il=Tv()),Il):(t=ce,t!==0||(t=window.event,t=t===void 0?16:Rv(t.type)),t):1}function rn(t,e,n,r){if(50<Eo)throw Eo=0,pd=null,Error(F(185));ua(t,n,r),(!(le&2)||t!==Qe)&&(t===Qe&&(!(le&2)&&(Du|=n),$e===4&&ur(t,tt)),At(t,r),n===1&&le===0&&!(e.mode&1)&&(ci=De()+500,Ru&&Ur()))}function At(t,e){var n=t.callbackNode;II(t,e);var r=Fl(t,t===Qe?tt:0);if(r===0)n!==null&&ng(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&ng(n),e===1)t.tag===0?TS(Kg.bind(null,t)):Kv(Kg.bind(null,t)),_S(function(){!(le&6)&&Ur()}),n=null;else{switch(Iv(r)){case 1:n=of;break;case 4:n=wv;break;case 16:n=Ml;break;case 536870912:n=Ev;break;default:n=Ml}n=Ww(n,Fw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Fw(t,e){if(Tl=-1,Il=0,le&6)throw Error(F(327));var n=t.callbackNode;if(Xs()&&t.callbackNode!==n)return null;var r=Fl(t,t===Qe?tt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ru(t,r);else{e=r;var s=le;le|=2;var i=zw();(Qe!==t||tt!==e)&&(Dn=null,ci=De()+500,rs(t,e));do try{$S();break}catch(l){Uw(t,l)}while(!0);vf(),eu.current=i,le=s,Le!==null?e=0:(Qe=null,tt=0,e=$e)}if(e!==0){if(e===2&&(s=zh(t),s!==0&&(r=s,e=md(t,s))),e===1)throw n=Wo,rs(t,0),ur(t,r),At(t,De()),n;if(e===6)ur(t,r);else{if(s=t.current.alternate,!(r&30)&&!zS(s)&&(e=ru(t,r),e===2&&(i=zh(t),i!==0&&(r=i,e=md(t,i))),e===1))throw n=Wo,rs(t,0),ur(t,r),At(t,De()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Yr(t,Et,Dn);break;case 3:if(ur(t,r),(r&130023424)===r&&(e=jf+500-De(),10<e)){if(Fl(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){yt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Qh(Yr.bind(null,t,Et,Dn),e);break}Yr(t,Et,Dn);break;case 4:if(ur(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-nn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=De()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*US(r/1960))-r,10<r){t.timeoutHandle=Qh(Yr.bind(null,t,Et,Dn),r);break}Yr(t,Et,Dn);break;case 5:Yr(t,Et,Dn);break;default:throw Error(F(329))}}}return At(t,De()),t.callbackNode===n?Fw.bind(null,t):null}function md(t,e){var n=wo;return t.current.memoizedState.isDehydrated&&(rs(t,e).flags|=256),t=ru(t,e),t!==2&&(e=Et,Et=n,e!==null&&gd(e)),t}function gd(t){Et===null?Et=t:Et.push.apply(Et,t)}function zS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!an(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ur(t,e){for(e&=~Df,e&=~Du,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-nn(e),r=1<<n;t[n]=-1,e&=~r}}function Kg(t){if(le&6)throw Error(F(327));Xs();var e=Fl(t,0);if(!(e&1))return At(t,De()),null;var n=ru(t,e);if(t.tag!==0&&n===2){var r=zh(t);r!==0&&(e=r,n=md(t,r))}if(n===1)throw n=Wo,rs(t,0),ur(t,e),At(t,De()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Yr(t,Et,Dn),At(t,De()),null}function Vf(t,e){var n=le;le|=1;try{return t(e)}finally{le=n,le===0&&(ci=De()+500,Ru&&Ur())}}function ds(t){mr!==null&&mr.tag===0&&!(le&6)&&Xs();var e=le;le|=1;var n=qt.transition,r=ce;try{if(qt.transition=null,ce=1,t)return t()}finally{ce=r,qt.transition=n,le=e,!(le&6)&&Ur()}}function Lf(){Nt=qs.current,ve(qs)}function rs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,yS(n)),Le!==null)for(n=Le.return;n!==null;){var r=n;switch(gf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Hl();break;case 3:li(),ve(St),ve(ht),kf();break;case 5:Sf(r);break;case 4:li();break;case 13:ve(Te);break;case 19:ve(Te);break;case 10:wf(r.type._context);break;case 22:case 23:Lf()}n=n.return}if(Qe=t,Le=t=Sr(t.current,null),tt=Nt=e,$e=0,Wo=null,Df=Du=hs=0,Et=wo=null,Zr!==null){for(e=0;e<Zr.length;e++)if(n=Zr[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Zr=null}return t}function Uw(t,e){do{var n=Le;try{if(vf(),vl.current=Zl,Jl){for(var r=Ie.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Jl=!1}if(cs=0,Ge=ze=Ie=null,_o=!1,$o=0,bf.current=null,n===null||n.return===null){$e=1,Wo=e,Le=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=tt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,g=f.tag;if(!(f.mode&1)&&(g===0||g===11||g===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var w=Vg(o);if(w!==null){w.flags&=-257,Lg(w,o,l,i,e),w.mode&1&&jg(i,h,e),e=w,u=h;var k=e.updateQueue;if(k===null){var N=new Set;N.add(u),e.updateQueue=N}else k.add(u);break e}else{if(!(e&1)){jg(i,h,e),Of();break e}u=Error(F(426))}}else if(Ee&&l.mode&1){var b=Vg(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Lg(b,o,l,i,e),yf(ui(u,l));break e}}i=u=ui(u,l),$e!==4&&($e=2),wo===null?wo=[i]:wo.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var S=Iw(i,u,e);Cg(i,S);break e;case 1:l=u;var I=i.type,x=i.stateNode;if(!(i.flags&128)&&(typeof I.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Tr===null||!Tr.has(x)))){i.flags|=65536,e&=-e,i.lanes|=e;var j=Sw(i,l,e);Cg(i,j);break e}}i=i.return}while(i!==null)}$w(n)}catch(R){e=R,Le===n&&n!==null&&(Le=n=n.return);continue}break}while(!0)}function zw(){var t=eu.current;return eu.current=Zl,t===null?Zl:t}function Of(){($e===0||$e===3||$e===2)&&($e=4),Qe===null||!(hs&268435455)&&!(Du&268435455)||ur(Qe,tt)}function ru(t,e){var n=le;le|=2;var r=zw();(Qe!==t||tt!==e)&&(Dn=null,rs(t,e));do try{BS();break}catch(s){Uw(t,s)}while(!0);if(vf(),le=n,eu.current=r,Le!==null)throw Error(F(261));return Qe=null,tt=0,$e}function BS(){for(;Le!==null;)Bw(Le)}function $S(){for(;Le!==null&&!pI();)Bw(Le)}function Bw(t){var e=qw(t.alternate,t,Nt);t.memoizedProps=t.pendingProps,e===null?$w(t):Le=e,bf.current=null}function $w(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=LS(n,e),n!==null){n.flags&=32767,Le=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{$e=6,Le=null;return}}else if(n=VS(n,e,Nt),n!==null){Le=n;return}if(e=e.sibling,e!==null){Le=e;return}Le=e=t}while(e!==null);$e===0&&($e=5)}function Yr(t,e,n){var r=ce,s=qt.transition;try{qt.transition=null,ce=1,HS(t,e,n,r)}finally{qt.transition=s,ce=r}return null}function HS(t,e,n,r){do Xs();while(mr!==null);if(le&6)throw Error(F(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(SI(t,i),t===Qe&&(Le=Qe=null,tt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||nl||(nl=!0,Ww(Ml,function(){return Xs(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=qt.transition,qt.transition=null;var o=ce;ce=1;var l=le;le|=4,bf.current=null,MS(t,n),Ow(n,t),cS(Gh),Ul=!!Wh,Gh=Wh=null,t.current=n,FS(n),mI(),le=l,ce=o,qt.transition=i}else t.current=n;if(nl&&(nl=!1,mr=t,nu=s),i=t.pendingLanes,i===0&&(Tr=null),_I(n.stateNode),At(t,De()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(tu)throw tu=!1,t=fd,fd=null,t;return nu&1&&t.tag!==0&&Xs(),i=t.pendingLanes,i&1?t===pd?Eo++:(Eo=0,pd=t):Eo=0,Ur(),null}function Xs(){if(mr!==null){var t=Iv(nu),e=qt.transition,n=ce;try{if(qt.transition=null,ce=16>t?16:t,mr===null)var r=!1;else{if(t=mr,mr=null,nu=0,le&6)throw Error(F(331));var s=le;for(le|=4,W=t.current;W!==null;){var i=W,o=i.child;if(W.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(W=h;W!==null;){var f=W;switch(f.tag){case 0:case 11:case 15:vo(8,f,i)}var g=f.child;if(g!==null)g.return=f,W=g;else for(;W!==null;){f=W;var m=f.sibling,w=f.return;if(jw(f),f===h){W=null;break}if(m!==null){m.return=w,W=m;break}W=w}}}var k=i.alternate;if(k!==null){var N=k.child;if(N!==null){k.child=null;do{var b=N.sibling;N.sibling=null,N=b}while(N!==null)}}W=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,W=o;else e:for(;W!==null;){if(i=W,i.flags&2048)switch(i.tag){case 0:case 11:case 15:vo(9,i,i.return)}var S=i.sibling;if(S!==null){S.return=i.return,W=S;break e}W=i.return}}var I=t.current;for(W=I;W!==null;){o=W;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,W=x;else e:for(o=I;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:bu(9,l)}}catch(R){Ce(l,l.return,R)}if(l===o){W=null;break e}var j=l.sibling;if(j!==null){j.return=l.return,W=j;break e}W=l.return}}if(le=s,Ur(),yn&&typeof yn.onPostCommitFiberRoot=="function")try{yn.onPostCommitFiberRoot(Su,t)}catch{}r=!0}return r}finally{ce=n,qt.transition=e}}return!1}function Qg(t,e,n){e=ui(n,e),e=Iw(t,e,1),t=Er(t,e,1),e=yt(),t!==null&&(ua(t,1,e),At(t,e))}function Ce(t,e,n){if(t.tag===3)Qg(t,t,n);else for(;e!==null;){if(e.tag===3){Qg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Tr===null||!Tr.has(r))){t=ui(n,t),t=Sw(e,t,1),e=Er(e,t,1),t=yt(),e!==null&&(ua(e,1,t),At(e,t));break}}e=e.return}}function qS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=yt(),t.pingedLanes|=t.suspendedLanes&n,Qe===t&&(tt&n)===n&&($e===4||$e===3&&(tt&130023424)===tt&&500>De()-jf?rs(t,0):Df|=n),At(t,e)}function Hw(t,e){e===0&&(t.mode&1?(e=Wa,Wa<<=1,!(Wa&130023424)&&(Wa=4194304)):e=1);var n=yt();t=Hn(t,e),t!==null&&(ua(t,e,n),At(t,n))}function WS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Hw(t,n)}function GS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),Hw(t,n)}var qw;qw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||St.current)It=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return It=!1,jS(t,e,n);It=!!(t.flags&131072)}else It=!1,Ee&&e.flags&1048576&&Qv(e,Gl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;El(t,e),t=e.pendingProps;var s=ii(e,ht.current);Ys(e,n),s=xf(null,e,r,t,s,n);var i=Cf();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,kt(r)?(i=!0,ql(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Tf(e),s.updater=Pu,e.stateNode=s,s._reactInternals=e,nd(e,r,t,n),e=id(null,e,r,!0,i,n)):(e.tag=0,Ee&&i&&mf(e),gt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(El(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=QS(r),t=Xt(r,t),s){case 0:e=sd(null,e,r,t,n);break e;case 1:e=Fg(null,e,r,t,n);break e;case 11:e=Og(null,e,r,t,n);break e;case 14:e=Mg(null,e,r,Xt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Xt(r,s),sd(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Xt(r,s),Fg(t,e,r,s,n);case 3:e:{if(Cw(e),t===null)throw Error(F(387));r=e.pendingProps,i=e.memoizedState,s=i.element,tw(t,e),Yl(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=ui(Error(F(423)),e),e=Ug(t,e,r,n,s);break e}else if(r!==s){s=ui(Error(F(424)),e),e=Ug(t,e,r,n,s);break e}else for(Pt=wr(e.stateNode.containerInfo.firstChild),jt=e,Ee=!0,Zt=null,n=Zv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(oi(),r===s){e=qn(t,e,n);break e}gt(t,e,r,n)}e=e.child}return e;case 5:return nw(e),t===null&&Zh(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Kh(r,s)?o=null:i!==null&&Kh(r,i)&&(e.flags|=32),xw(t,e),gt(t,e,o,n),e.child;case 6:return t===null&&Zh(e),null;case 13:return Rw(t,e,n);case 4:return If(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ai(e,null,r,n):gt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Xt(r,s),Og(t,e,r,s,n);case 7:return gt(t,e,e.pendingProps,n),e.child;case 8:return gt(t,e,e.pendingProps.children,n),e.child;case 12:return gt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,pe(Kl,r._currentValue),r._currentValue=o,i!==null)if(an(i.value,o)){if(i.children===s.children&&!St.current){e=qn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Un(-1,n&-n),u.tag=2;var h=i.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),ed(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ed(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}gt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Ys(e,n),s=Kt(s),r=r(s),e.flags|=1,gt(t,e,r,n),e.child;case 14:return r=e.type,s=Xt(r,e.pendingProps),s=Xt(r.type,s),Mg(t,e,r,s,n);case 15:return kw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Xt(r,s),El(t,e),e.tag=1,kt(r)?(t=!0,ql(e)):t=!1,Ys(e,n),Tw(e,r,s),nd(e,r,s,n),id(null,e,r,!0,t,n);case 19:return Nw(t,e,n);case 22:return Aw(t,e,n)}throw Error(F(156,e.tag))};function Ww(t,e){return vv(t,e)}function KS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ht(t,e,n,r){return new KS(t,e,n,r)}function Mf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function QS(t){if(typeof t=="function")return Mf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===nf)return 11;if(t===rf)return 14}return 2}function Sr(t,e){var n=t.alternate;return n===null?(n=Ht(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Sl(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Mf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Vs:return ss(n.children,s,i,e);case tf:o=8,s|=8;break;case Ah:return t=Ht(12,n,e,s|2),t.elementType=Ah,t.lanes=i,t;case xh:return t=Ht(13,n,e,s),t.elementType=xh,t.lanes=i,t;case Ch:return t=Ht(19,n,e,s),t.elementType=Ch,t.lanes=i,t;case nv:return ju(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ev:o=10;break e;case tv:o=9;break e;case nf:o=11;break e;case rf:o=14;break e;case or:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Ht(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function ss(t,e,n,r){return t=Ht(7,t,r,e),t.lanes=n,t}function ju(t,e,n,r){return t=Ht(22,t,r,e),t.elementType=nv,t.lanes=n,t.stateNode={isHidden:!1},t}function ih(t,e,n){return t=Ht(6,t,null,e),t.lanes=n,t}function oh(t,e,n){return e=Ht(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function YS(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Uc(0),this.expirationTimes=Uc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uc(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Ff(t,e,n,r,s,i,o,l,u){return t=new YS(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Ht(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tf(i),t}function XS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:js,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Gw(t){if(!t)return Nr;t=t._reactInternals;e:{if(ws(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(kt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(kt(n))return Gv(t,n,e)}return e}function Kw(t,e,n,r,s,i,o,l,u){return t=Ff(n,r,!0,t,s,i,o,l,u),t.context=Gw(null),n=t.current,r=yt(),s=Ir(n),i=Un(r,s),i.callback=e??null,Er(n,i,s),t.current.lanes=s,ua(t,s,r),At(t,r),t}function Vu(t,e,n,r){var s=e.current,i=yt(),o=Ir(s);return n=Gw(n),e.context===null?e.context=n:e.pendingContext=n,e=Un(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Er(s,e,o),t!==null&&(rn(t,s,o,i),_l(t,s,o)),o}function su(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Yg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Uf(t,e){Yg(t,e),(t=t.alternate)&&Yg(t,e)}function JS(){return null}var Qw=typeof reportError=="function"?reportError:function(t){console.error(t)};function zf(t){this._internalRoot=t}Lu.prototype.render=zf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Vu(t,e,null,null)};Lu.prototype.unmount=zf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ds(function(){Vu(null,t,null,null)}),e[$n]=null}};function Lu(t){this._internalRoot=t}Lu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Av();t={blockedOn:null,target:t,priority:e};for(var n=0;n<lr.length&&e!==0&&e<lr[n].priority;n++);lr.splice(n,0,t),n===0&&Cv(t)}};function Bf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ou(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Xg(){}function ZS(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var h=su(o);i.call(h)}}var o=Kw(e,r,t,0,null,!1,!1,"",Xg);return t._reactRootContainer=o,t[$n]=o.current,Mo(t.nodeType===8?t.parentNode:t),ds(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var h=su(u);l.call(h)}}var u=Ff(t,0,!1,null,null,!1,!1,"",Xg);return t._reactRootContainer=u,t[$n]=u.current,Mo(t.nodeType===8?t.parentNode:t),ds(function(){Vu(e,u,n,r)}),u}function Mu(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=su(o);l.call(u)}}Vu(e,o,t,s)}else o=ZS(n,e,t,s,r);return su(o)}Sv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=oo(e.pendingLanes);n!==0&&(af(e,n|1),At(e,De()),!(le&6)&&(ci=De()+500,Ur()))}break;case 13:ds(function(){var r=Hn(t,1);if(r!==null){var s=yt();rn(r,t,1,s)}}),Uf(t,1)}};lf=function(t){if(t.tag===13){var e=Hn(t,134217728);if(e!==null){var n=yt();rn(e,t,134217728,n)}Uf(t,134217728)}};kv=function(t){if(t.tag===13){var e=Ir(t),n=Hn(t,e);if(n!==null){var r=yt();rn(n,t,e,r)}Uf(t,e)}};Av=function(){return ce};xv=function(t,e){var n=ce;try{return ce=t,e()}finally{ce=n}};Mh=function(t,e,n){switch(e){case"input":if(Ph(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Cu(r);if(!s)throw Error(F(90));sv(r),Ph(r,s)}}}break;case"textarea":ov(t,n);break;case"select":e=n.value,e!=null&&Ws(t,!!n.multiple,e,!1)}};fv=Vf;pv=ds;var ek={usingClientEntryPoint:!1,Events:[ha,Fs,Cu,hv,dv,Vf]},to={findFiberByHostInstance:Jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},tk={bundleType:to.bundleType,version:to.version,rendererPackageName:to.rendererPackageName,rendererConfig:to.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=yv(t),t===null?null:t.stateNode},findFiberByHostInstance:to.findFiberByHostInstance||JS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rl.isDisabled&&rl.supportsFiber)try{Su=rl.inject(tk),yn=rl}catch{}}Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ek;Mt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bf(e))throw Error(F(200));return XS(t,e,null,n)};Mt.createRoot=function(t,e){if(!Bf(t))throw Error(F(299));var n=!1,r="",s=Qw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Ff(t,1,!1,null,null,n,!1,r,s),t[$n]=e.current,Mo(t.nodeType===8?t.parentNode:t),new zf(e)};Mt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=yv(e),t=t===null?null:t.stateNode,t};Mt.flushSync=function(t){return ds(t)};Mt.hydrate=function(t,e,n){if(!Ou(e))throw Error(F(200));return Mu(null,t,e,!0,n)};Mt.hydrateRoot=function(t,e,n){if(!Bf(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=Qw;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Kw(e,null,t,1,n??null,s,!1,i,o),t[$n]=e.current,Mo(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Lu(e)};Mt.render=function(t,e,n){if(!Ou(e))throw Error(F(200));return Mu(null,t,e,!1,n)};Mt.unmountComponentAtNode=function(t){if(!Ou(t))throw Error(F(40));return t._reactRootContainer?(ds(function(){Mu(null,null,t,!1,function(){t._reactRootContainer=null,t[$n]=null})}),!0):!1};Mt.unstable_batchedUpdates=Vf;Mt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ou(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Mu(t,e,n,!1,r)};Mt.version="18.3.1-next-f1338f8080-20240426";function Yw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yw)}catch(t){console.error(t)}}Yw(),Y_.exports=Mt;var nk=Y_.exports,Jg=nk;Sh.createRoot=Jg.createRoot,Sh.hydrateRoot=Jg.hydrateRoot;const rk={},Zg=t=>{let e;const n=new Set,r=(f,g)=>{const m=typeof f=="function"?f(e):f;if(!Object.is(m,e)){const w=e;e=g??(typeof m!="object"||m===null)?m:Object.assign({},e,m),n.forEach(k=>k(e,w))}},s=()=>e,u={setState:r,getState:s,getInitialState:()=>h,subscribe:f=>(n.add(f),()=>n.delete(f)),destroy:()=>{(rk?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},h=e=t(r,s,u);return u},sk=t=>t?Zg(t):Zg;var Xw={exports:{}},Jw={},Zw={exports:{}},eE={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hi=z;function ik(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ok=typeof Object.is=="function"?Object.is:ik,ak=hi.useState,lk=hi.useEffect,uk=hi.useLayoutEffect,ck=hi.useDebugValue;function hk(t,e){var n=e(),r=ak({inst:{value:n,getSnapshot:e}}),s=r[0].inst,i=r[1];return uk(function(){s.value=n,s.getSnapshot=e,ah(s)&&i({inst:s})},[t,n,e]),lk(function(){return ah(s)&&i({inst:s}),t(function(){ah(s)&&i({inst:s})})},[t]),ck(n),n}function ah(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ok(t,n)}catch{return!0}}function dk(t,e){return e()}var fk=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?dk:hk;eE.useSyncExternalStore=hi.useSyncExternalStore!==void 0?hi.useSyncExternalStore:fk;Zw.exports=eE;var pk=Zw.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fu=z,mk=pk;function gk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var yk=typeof Object.is=="function"?Object.is:gk,_k=mk.useSyncExternalStore,vk=Fu.useRef,wk=Fu.useEffect,Ek=Fu.useMemo,Tk=Fu.useDebugValue;Jw.useSyncExternalStoreWithSelector=function(t,e,n,r,s){var i=vk(null);if(i.current===null){var o={hasValue:!1,value:null};i.current=o}else o=i.current;i=Ek(function(){function u(w){if(!h){if(h=!0,f=w,w=r(w),s!==void 0&&o.hasValue){var k=o.value;if(s(k,w))return g=k}return g=w}if(k=g,yk(f,w))return k;var N=r(w);return s!==void 0&&s(k,N)?(f=w,k):(f=w,g=N)}var h=!1,f,g,m=n===void 0?null:n;return[function(){return u(e())},m===null?void 0:function(){return u(m())}]},[e,n,r,s]);var l=_k(t,i[0],i[1]);return wk(function(){o.hasValue=!0,o.value=l},[l]),Tk(l),l};Xw.exports=Jw;var Ik=Xw.exports;const Sk=O_(Ik),tE={},{useDebugValue:kk}=K_,{useSyncExternalStoreWithSelector:Ak}=Sk;let ey=!1;const xk=t=>t;function Ck(t,e=xk,n){(tE?"production":void 0)!=="production"&&n&&!ey&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),ey=!0);const r=Ak(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return kk(r),r}const ty=t=>{(tE?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?sk(t):t,n=(r,s)=>Ck(e,r,s);return Object.assign(n,e),n},Rk=t=>t?ty(t):ty,Nk=()=>{};var ny={};/**
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
 */const nE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Pk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},rE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,h=u?t[s+2]:0,f=i>>2,g=(i&3)<<4|l>>4;let m=(l&15)<<2|h>>6,w=h&63;u||(w=64,o||(m=64)),r.push(n[f],n[g],n[m],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(nE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Pk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const g=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||g==null)throw new bk;const m=i<<2|l>>4;if(r.push(m),h!==64){const w=l<<4&240|h>>2;if(r.push(w),g!==64){const k=h<<6&192|g;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class bk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Dk=function(t){const e=nE(t);return rE.encodeByteArray(e,!0)},iu=function(t){return Dk(t).replace(/\./g,"")},sE=function(t){try{return rE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function jk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Vk=()=>jk().__FIREBASE_DEFAULTS__,Lk=()=>{if(typeof process>"u"||typeof ny>"u")return;const t=ny.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ok=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&sE(t[1]);return e&&JSON.parse(e)},Uu=()=>{try{return Nk()||Vk()||Lk()||Ok()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},iE=t=>{var e,n;return(n=(e=Uu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},oE=t=>{const e=iE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},aE=()=>{var t;return(t=Uu())==null?void 0:t.config},lE=t=>{var e;return(e=Uu())==null?void 0:e[`_${t}`]};/**
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
 */class Mk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function zr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function $f(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function uE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[iu(JSON.stringify(n)),iu(JSON.stringify(o)),""].join(".")}const To={};function Fk(){const t={prod:[],emulator:[]};for(const e of Object.keys(To))To[e]?t.emulator.push(e):t.prod.push(e);return t}function Uk(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let ry=!1;function Hf(t,e){if(typeof window>"u"||typeof document>"u"||!zr(window.location.host)||To[t]===e||To[t]||ry)return;To[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=Fk().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function u(m,w){m.setAttribute("width","24"),m.setAttribute("id",w),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function h(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{ry=!0,o()},m}function f(m,w){m.setAttribute("id",w),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function g(){const m=Uk(r),w=n("text"),k=document.getElementById(w)||document.createElement("span"),N=n("learnmore"),b=document.getElementById(N)||document.createElement("a"),S=n("preprendIcon"),I=document.getElementById(S)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const x=m.element;l(x),f(b,N);const j=h();u(I,S),x.append(I,k,b,j),document.body.appendChild(x)}i?(k.innerText="Preview backend disconnected.",I.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(I.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",w)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
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
 */function dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dt())}function Bk(){var e;const t=(e=Uu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $k(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Hk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Wk(){const t=dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Gk(){return!Bk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Kk(){try{return typeof indexedDB=="object"}catch{return!1}}function Qk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Yk="FirebaseError";class xn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Yk,Object.setPrototypeOf(this,xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fa.prototype.create)}}class fa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Xk(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new xn(s,l,r)}}function Xk(t,e){return t.replace(Jk,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Jk=/\{\$([^}]+)}/g;function Zk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function fs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(sy(i)&&sy(o)){if(!fs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function sy(t){return t!==null&&typeof t=="object"}/**
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
 */function pa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function eA(t,e){const n=new tA(t,e);return n.subscribe.bind(n)}class tA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");nA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=lh),s.error===void 0&&(s.error=lh),s.complete===void 0&&(s.complete=lh);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function nA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function lh(){}/**
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
 */function ke(t){return t&&t._delegate?t._delegate:t}class Pr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Xr="[DEFAULT]";/**
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
 */class rA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Mk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(iA(e))try{this.getOrInitializeService({instanceIdentifier:Xr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Xr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xr){return this.instances.has(e)}getOptions(e=Xr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:sA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Xr){return this.component?this.component.multipleInstances?e:Xr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sA(t){return t===Xr?void 0:t}function iA(t){return t.instantiationMode==="EAGER"}/**
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
 */class oA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new rA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const aA={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},lA=re.INFO,uA={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},cA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=uA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class qf{constructor(e){this.name=e,this._logLevel=lA,this._logHandler=cA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?aA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const hA=(t,e)=>e.some(n=>t instanceof n);let iy,oy;function dA(){return iy||(iy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fA(){return oy||(oy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cE=new WeakMap,yd=new WeakMap,hE=new WeakMap,uh=new WeakMap,Wf=new WeakMap;function pA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(kr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&cE.set(n,t)}).catch(()=>{}),Wf.set(e,t),e}function mA(t){if(yd.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});yd.set(t,e)}let _d={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return yd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||hE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function gA(t){_d=t(_d)}function yA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ch(this),e,...n);return hE.set(r,e.sort?e.sort():[e]),kr(r)}:fA().includes(t)?function(...e){return t.apply(ch(this),e),kr(cE.get(this))}:function(...e){return kr(t.apply(ch(this),e))}}function _A(t){return typeof t=="function"?yA(t):(t instanceof IDBTransaction&&mA(t),hA(t,dA())?new Proxy(t,_d):t)}function kr(t){if(t instanceof IDBRequest)return pA(t);if(uh.has(t))return uh.get(t);const e=_A(t);return e!==t&&(uh.set(t,e),Wf.set(e,t)),e}const ch=t=>Wf.get(t);function vA(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=kr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(kr(o.result),u.oldVersion,u.newVersion,kr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const wA=["get","getKey","getAll","getAllKeys","count"],EA=["put","add","delete","clear"],hh=new Map;function ay(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(hh.get(e))return hh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=EA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||wA.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&u.done]))[0]};return hh.set(e,i),i}gA(t=>({...t,get:(e,n,r)=>ay(e,n)||t.get(e,n,r),has:(e,n)=>!!ay(e,n)||t.has(e,n)}));/**
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
 */class TA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(IA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function IA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vd="@firebase/app",ly="0.14.7";/**
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
 */const Wn=new qf("@firebase/app"),SA="@firebase/app-compat",kA="@firebase/analytics-compat",AA="@firebase/analytics",xA="@firebase/app-check-compat",CA="@firebase/app-check",RA="@firebase/auth",NA="@firebase/auth-compat",PA="@firebase/database",bA="@firebase/data-connect",DA="@firebase/database-compat",jA="@firebase/functions",VA="@firebase/functions-compat",LA="@firebase/installations",OA="@firebase/installations-compat",MA="@firebase/messaging",FA="@firebase/messaging-compat",UA="@firebase/performance",zA="@firebase/performance-compat",BA="@firebase/remote-config",$A="@firebase/remote-config-compat",HA="@firebase/storage",qA="@firebase/storage-compat",WA="@firebase/firestore",GA="@firebase/ai",KA="@firebase/firestore-compat",QA="firebase",YA="12.8.0";/**
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
 */const wd="[DEFAULT]",XA={[vd]:"fire-core",[SA]:"fire-core-compat",[AA]:"fire-analytics",[kA]:"fire-analytics-compat",[CA]:"fire-app-check",[xA]:"fire-app-check-compat",[RA]:"fire-auth",[NA]:"fire-auth-compat",[PA]:"fire-rtdb",[bA]:"fire-data-connect",[DA]:"fire-rtdb-compat",[jA]:"fire-fn",[VA]:"fire-fn-compat",[LA]:"fire-iid",[OA]:"fire-iid-compat",[MA]:"fire-fcm",[FA]:"fire-fcm-compat",[UA]:"fire-perf",[zA]:"fire-perf-compat",[BA]:"fire-rc",[$A]:"fire-rc-compat",[HA]:"fire-gcs",[qA]:"fire-gcs-compat",[WA]:"fire-fst",[KA]:"fire-fst-compat",[GA]:"fire-vertex","fire-js":"fire-js",[QA]:"fire-js-all"};/**
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
 */const ou=new Map,JA=new Map,Ed=new Map;function uy(t,e){try{t.container.addComponent(e)}catch(n){Wn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ps(t){const e=t.name;if(Ed.has(e))return Wn.debug(`There were multiple attempts to register component ${e}.`),!1;Ed.set(e,t);for(const n of ou.values())uy(n,t);for(const n of JA.values())uy(n,t);return!0}function zu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Bt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const ZA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ar=new fa("app","Firebase",ZA);/**
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
 */class ex{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Pr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ar.create("app-deleted",{appName:this._name})}}/**
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
 */const Es=YA;function dE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:wd,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Ar.create("bad-app-name",{appName:String(s)});if(n||(n=aE()),!n)throw Ar.create("no-options");const i=ou.get(s);if(i){if(fs(n,i.options)&&fs(r,i.config))return i;throw Ar.create("duplicate-app",{appName:s})}const o=new oA(s);for(const u of Ed.values())o.addComponent(u);const l=new ex(n,r,o);return ou.set(s,l),l}function Gf(t=wd){const e=ou.get(t);if(!e&&t===wd&&aE())return dE();if(!e)throw Ar.create("no-app",{appName:t});return e}function vn(t,e,n){let r=XA[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wn.warn(o.join(" "));return}ps(new Pr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const tx="firebase-heartbeat-database",nx=1,Go="firebase-heartbeat-store";let dh=null;function fE(){return dh||(dh=vA(tx,nx,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Go)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ar.create("idb-open",{originalErrorMessage:t.message})})),dh}async function rx(t){try{const n=(await fE()).transaction(Go),r=await n.objectStore(Go).get(pE(t));return await n.done,r}catch(e){if(e instanceof xn)Wn.warn(e.message);else{const n=Ar.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Wn.warn(n.message)}}}async function cy(t,e){try{const r=(await fE()).transaction(Go,"readwrite");await r.objectStore(Go).put(e,pE(t)),await r.done}catch(n){if(n instanceof xn)Wn.warn(n.message);else{const r=Ar.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Wn.warn(r.message)}}}function pE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const sx=1024,ix=30;class ox{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new lx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=hy();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>ix){const o=ux(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Wn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=hy(),{heartbeatsToSend:r,unsentEntries:s}=ax(this._heartbeatsCache.heartbeats),i=iu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Wn.warn(n),""}}}function hy(){return new Date().toISOString().substring(0,10)}function ax(t,e=sx){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),dy(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),dy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class lx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Kk()?Qk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await rx(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return cy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return cy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function dy(t){return iu(JSON.stringify({version:2,heartbeats:t})).length}function ux(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function cx(t){ps(new Pr("platform-logger",e=>new TA(e),"PRIVATE")),ps(new Pr("heartbeat",e=>new ox(e),"PRIVATE")),vn(vd,ly,t),vn(vd,ly,"esm2020"),vn("fire-js","")}cx("");var fy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xr,mE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,y){function T(){}T.prototype=y.prototype,_.F=y.prototype,_.prototype=new T,_.prototype.constructor=_,_.D=function(E,A,P){for(var C=Array(arguments.length-2),oe=2;oe<arguments.length;oe++)C[oe-2]=arguments[oe];return y.prototype[A].apply(E,C)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(_,y,T){T||(T=0);const E=Array(16);if(typeof y=="string")for(var A=0;A<16;++A)E[A]=y.charCodeAt(T++)|y.charCodeAt(T++)<<8|y.charCodeAt(T++)<<16|y.charCodeAt(T++)<<24;else for(A=0;A<16;++A)E[A]=y[T++]|y[T++]<<8|y[T++]<<16|y[T++]<<24;y=_.g[0],T=_.g[1],A=_.g[2];let P=_.g[3],C;C=y+(P^T&(A^P))+E[0]+3614090360&4294967295,y=T+(C<<7&4294967295|C>>>25),C=P+(A^y&(T^A))+E[1]+3905402710&4294967295,P=y+(C<<12&4294967295|C>>>20),C=A+(T^P&(y^T))+E[2]+606105819&4294967295,A=P+(C<<17&4294967295|C>>>15),C=T+(y^A&(P^y))+E[3]+3250441966&4294967295,T=A+(C<<22&4294967295|C>>>10),C=y+(P^T&(A^P))+E[4]+4118548399&4294967295,y=T+(C<<7&4294967295|C>>>25),C=P+(A^y&(T^A))+E[5]+1200080426&4294967295,P=y+(C<<12&4294967295|C>>>20),C=A+(T^P&(y^T))+E[6]+2821735955&4294967295,A=P+(C<<17&4294967295|C>>>15),C=T+(y^A&(P^y))+E[7]+4249261313&4294967295,T=A+(C<<22&4294967295|C>>>10),C=y+(P^T&(A^P))+E[8]+1770035416&4294967295,y=T+(C<<7&4294967295|C>>>25),C=P+(A^y&(T^A))+E[9]+2336552879&4294967295,P=y+(C<<12&4294967295|C>>>20),C=A+(T^P&(y^T))+E[10]+4294925233&4294967295,A=P+(C<<17&4294967295|C>>>15),C=T+(y^A&(P^y))+E[11]+2304563134&4294967295,T=A+(C<<22&4294967295|C>>>10),C=y+(P^T&(A^P))+E[12]+1804603682&4294967295,y=T+(C<<7&4294967295|C>>>25),C=P+(A^y&(T^A))+E[13]+4254626195&4294967295,P=y+(C<<12&4294967295|C>>>20),C=A+(T^P&(y^T))+E[14]+2792965006&4294967295,A=P+(C<<17&4294967295|C>>>15),C=T+(y^A&(P^y))+E[15]+1236535329&4294967295,T=A+(C<<22&4294967295|C>>>10),C=y+(A^P&(T^A))+E[1]+4129170786&4294967295,y=T+(C<<5&4294967295|C>>>27),C=P+(T^A&(y^T))+E[6]+3225465664&4294967295,P=y+(C<<9&4294967295|C>>>23),C=A+(y^T&(P^y))+E[11]+643717713&4294967295,A=P+(C<<14&4294967295|C>>>18),C=T+(P^y&(A^P))+E[0]+3921069994&4294967295,T=A+(C<<20&4294967295|C>>>12),C=y+(A^P&(T^A))+E[5]+3593408605&4294967295,y=T+(C<<5&4294967295|C>>>27),C=P+(T^A&(y^T))+E[10]+38016083&4294967295,P=y+(C<<9&4294967295|C>>>23),C=A+(y^T&(P^y))+E[15]+3634488961&4294967295,A=P+(C<<14&4294967295|C>>>18),C=T+(P^y&(A^P))+E[4]+3889429448&4294967295,T=A+(C<<20&4294967295|C>>>12),C=y+(A^P&(T^A))+E[9]+568446438&4294967295,y=T+(C<<5&4294967295|C>>>27),C=P+(T^A&(y^T))+E[14]+3275163606&4294967295,P=y+(C<<9&4294967295|C>>>23),C=A+(y^T&(P^y))+E[3]+4107603335&4294967295,A=P+(C<<14&4294967295|C>>>18),C=T+(P^y&(A^P))+E[8]+1163531501&4294967295,T=A+(C<<20&4294967295|C>>>12),C=y+(A^P&(T^A))+E[13]+2850285829&4294967295,y=T+(C<<5&4294967295|C>>>27),C=P+(T^A&(y^T))+E[2]+4243563512&4294967295,P=y+(C<<9&4294967295|C>>>23),C=A+(y^T&(P^y))+E[7]+1735328473&4294967295,A=P+(C<<14&4294967295|C>>>18),C=T+(P^y&(A^P))+E[12]+2368359562&4294967295,T=A+(C<<20&4294967295|C>>>12),C=y+(T^A^P)+E[5]+4294588738&4294967295,y=T+(C<<4&4294967295|C>>>28),C=P+(y^T^A)+E[8]+2272392833&4294967295,P=y+(C<<11&4294967295|C>>>21),C=A+(P^y^T)+E[11]+1839030562&4294967295,A=P+(C<<16&4294967295|C>>>16),C=T+(A^P^y)+E[14]+4259657740&4294967295,T=A+(C<<23&4294967295|C>>>9),C=y+(T^A^P)+E[1]+2763975236&4294967295,y=T+(C<<4&4294967295|C>>>28),C=P+(y^T^A)+E[4]+1272893353&4294967295,P=y+(C<<11&4294967295|C>>>21),C=A+(P^y^T)+E[7]+4139469664&4294967295,A=P+(C<<16&4294967295|C>>>16),C=T+(A^P^y)+E[10]+3200236656&4294967295,T=A+(C<<23&4294967295|C>>>9),C=y+(T^A^P)+E[13]+681279174&4294967295,y=T+(C<<4&4294967295|C>>>28),C=P+(y^T^A)+E[0]+3936430074&4294967295,P=y+(C<<11&4294967295|C>>>21),C=A+(P^y^T)+E[3]+3572445317&4294967295,A=P+(C<<16&4294967295|C>>>16),C=T+(A^P^y)+E[6]+76029189&4294967295,T=A+(C<<23&4294967295|C>>>9),C=y+(T^A^P)+E[9]+3654602809&4294967295,y=T+(C<<4&4294967295|C>>>28),C=P+(y^T^A)+E[12]+3873151461&4294967295,P=y+(C<<11&4294967295|C>>>21),C=A+(P^y^T)+E[15]+530742520&4294967295,A=P+(C<<16&4294967295|C>>>16),C=T+(A^P^y)+E[2]+3299628645&4294967295,T=A+(C<<23&4294967295|C>>>9),C=y+(A^(T|~P))+E[0]+4096336452&4294967295,y=T+(C<<6&4294967295|C>>>26),C=P+(T^(y|~A))+E[7]+1126891415&4294967295,P=y+(C<<10&4294967295|C>>>22),C=A+(y^(P|~T))+E[14]+2878612391&4294967295,A=P+(C<<15&4294967295|C>>>17),C=T+(P^(A|~y))+E[5]+4237533241&4294967295,T=A+(C<<21&4294967295|C>>>11),C=y+(A^(T|~P))+E[12]+1700485571&4294967295,y=T+(C<<6&4294967295|C>>>26),C=P+(T^(y|~A))+E[3]+2399980690&4294967295,P=y+(C<<10&4294967295|C>>>22),C=A+(y^(P|~T))+E[10]+4293915773&4294967295,A=P+(C<<15&4294967295|C>>>17),C=T+(P^(A|~y))+E[1]+2240044497&4294967295,T=A+(C<<21&4294967295|C>>>11),C=y+(A^(T|~P))+E[8]+1873313359&4294967295,y=T+(C<<6&4294967295|C>>>26),C=P+(T^(y|~A))+E[15]+4264355552&4294967295,P=y+(C<<10&4294967295|C>>>22),C=A+(y^(P|~T))+E[6]+2734768916&4294967295,A=P+(C<<15&4294967295|C>>>17),C=T+(P^(A|~y))+E[13]+1309151649&4294967295,T=A+(C<<21&4294967295|C>>>11),C=y+(A^(T|~P))+E[4]+4149444226&4294967295,y=T+(C<<6&4294967295|C>>>26),C=P+(T^(y|~A))+E[11]+3174756917&4294967295,P=y+(C<<10&4294967295|C>>>22),C=A+(y^(P|~T))+E[2]+718787259&4294967295,A=P+(C<<15&4294967295|C>>>17),C=T+(P^(A|~y))+E[9]+3951481745&4294967295,_.g[0]=_.g[0]+y&4294967295,_.g[1]=_.g[1]+(A+(C<<21&4294967295|C>>>11))&4294967295,_.g[2]=_.g[2]+A&4294967295,_.g[3]=_.g[3]+P&4294967295}r.prototype.v=function(_,y){y===void 0&&(y=_.length);const T=y-this.blockSize,E=this.C;let A=this.h,P=0;for(;P<y;){if(A==0)for(;P<=T;)s(this,_,P),P+=this.blockSize;if(typeof _=="string"){for(;P<y;)if(E[A++]=_.charCodeAt(P++),A==this.blockSize){s(this,E),A=0;break}}else for(;P<y;)if(E[A++]=_[P++],A==this.blockSize){s(this,E),A=0;break}}this.h=A,this.o+=y},r.prototype.A=function(){var _=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);_[0]=128;for(var y=1;y<_.length-8;++y)_[y]=0;y=this.o*8;for(var T=_.length-8;T<_.length;++T)_[T]=y&255,y/=256;for(this.v(_),_=Array(16),y=0,T=0;T<4;++T)for(let E=0;E<32;E+=8)_[y++]=this.g[T]>>>E&255;return _};function i(_,y){var T=l;return Object.prototype.hasOwnProperty.call(T,_)?T[_]:T[_]=y(_)}function o(_,y){this.h=y;const T=[];let E=!0;for(let A=_.length-1;A>=0;A--){const P=_[A]|0;E&&P==y||(T[A]=P,E=!1)}this.g=T}var l={};function u(_){return-128<=_&&_<128?i(_,function(y){return new o([y|0],y<0?-1:0)}):new o([_|0],_<0?-1:0)}function h(_){if(isNaN(_)||!isFinite(_))return g;if(_<0)return b(h(-_));const y=[];let T=1;for(let E=0;_>=T;E++)y[E]=_/T|0,T*=4294967296;return new o(y,0)}function f(_,y){if(_.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(_.charAt(0)=="-")return b(f(_.substring(1),y));if(_.indexOf("-")>=0)throw Error('number format error: interior "-" character');const T=h(Math.pow(y,8));let E=g;for(let P=0;P<_.length;P+=8){var A=Math.min(8,_.length-P);const C=parseInt(_.substring(P,P+A),y);A<8?(A=h(Math.pow(y,A)),E=E.j(A).add(h(C))):(E=E.j(T),E=E.add(h(C)))}return E}var g=u(0),m=u(1),w=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-b(this).m();let _=0,y=1;for(let T=0;T<this.g.length;T++){const E=this.i(T);_+=(E>=0?E:4294967296+E)*y,y*=4294967296}return _},t.toString=function(_){if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(k(this))return"0";if(N(this))return"-"+b(this).toString(_);const y=h(Math.pow(_,6));var T=this;let E="";for(;;){const A=j(T,y).g;T=S(T,A.j(y));let P=((T.g.length>0?T.g[0]:T.h)>>>0).toString(_);if(T=A,k(T))return P+E;for(;P.length<6;)P="0"+P;E=P+E}},t.i=function(_){return _<0?0:_<this.g.length?this.g[_]:this.h};function k(_){if(_.h!=0)return!1;for(let y=0;y<_.g.length;y++)if(_.g[y]!=0)return!1;return!0}function N(_){return _.h==-1}t.l=function(_){return _=S(this,_),N(_)?-1:k(_)?0:1};function b(_){const y=_.g.length,T=[];for(let E=0;E<y;E++)T[E]=~_.g[E];return new o(T,~_.h).add(m)}t.abs=function(){return N(this)?b(this):this},t.add=function(_){const y=Math.max(this.g.length,_.g.length),T=[];let E=0;for(let A=0;A<=y;A++){let P=E+(this.i(A)&65535)+(_.i(A)&65535),C=(P>>>16)+(this.i(A)>>>16)+(_.i(A)>>>16);E=C>>>16,P&=65535,C&=65535,T[A]=C<<16|P}return new o(T,T[T.length-1]&-2147483648?-1:0)};function S(_,y){return _.add(b(y))}t.j=function(_){if(k(this)||k(_))return g;if(N(this))return N(_)?b(this).j(b(_)):b(b(this).j(_));if(N(_))return b(this.j(b(_)));if(this.l(w)<0&&_.l(w)<0)return h(this.m()*_.m());const y=this.g.length+_.g.length,T=[];for(var E=0;E<2*y;E++)T[E]=0;for(E=0;E<this.g.length;E++)for(let A=0;A<_.g.length;A++){const P=this.i(E)>>>16,C=this.i(E)&65535,oe=_.i(A)>>>16,je=_.i(A)&65535;T[2*E+2*A]+=C*je,I(T,2*E+2*A),T[2*E+2*A+1]+=P*je,I(T,2*E+2*A+1),T[2*E+2*A+1]+=C*oe,I(T,2*E+2*A+1),T[2*E+2*A+2]+=P*oe,I(T,2*E+2*A+2)}for(_=0;_<y;_++)T[_]=T[2*_+1]<<16|T[2*_];for(_=y;_<2*y;_++)T[_]=0;return new o(T,0)};function I(_,y){for(;(_[y]&65535)!=_[y];)_[y+1]+=_[y]>>>16,_[y]&=65535,y++}function x(_,y){this.g=_,this.h=y}function j(_,y){if(k(y))throw Error("division by zero");if(k(_))return new x(g,g);if(N(_))return y=j(b(_),y),new x(b(y.g),b(y.h));if(N(y))return y=j(_,b(y)),new x(b(y.g),y.h);if(_.g.length>30){if(N(_)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var T=m,E=y;E.l(_)<=0;)T=R(T),E=R(E);var A=L(T,1),P=L(E,1);for(E=L(E,2),T=L(T,2);!k(E);){var C=P.add(E);C.l(_)<=0&&(A=A.add(T),P=C),E=L(E,1),T=L(T,1)}return y=S(_,A.j(y)),new x(A,y)}for(A=g;_.l(y)>=0;){for(T=Math.max(1,Math.floor(_.m()/y.m())),E=Math.ceil(Math.log(T)/Math.LN2),E=E<=48?1:Math.pow(2,E-48),P=h(T),C=P.j(y);N(C)||C.l(_)>0;)T-=E,P=h(T),C=P.j(y);k(P)&&(P=m),A=A.add(P),_=S(_,C)}return new x(A,_)}t.B=function(_){return j(this,_).h},t.and=function(_){const y=Math.max(this.g.length,_.g.length),T=[];for(let E=0;E<y;E++)T[E]=this.i(E)&_.i(E);return new o(T,this.h&_.h)},t.or=function(_){const y=Math.max(this.g.length,_.g.length),T=[];for(let E=0;E<y;E++)T[E]=this.i(E)|_.i(E);return new o(T,this.h|_.h)},t.xor=function(_){const y=Math.max(this.g.length,_.g.length),T=[];for(let E=0;E<y;E++)T[E]=this.i(E)^_.i(E);return new o(T,this.h^_.h)};function R(_){const y=_.g.length+1,T=[];for(let E=0;E<y;E++)T[E]=_.i(E)<<1|_.i(E-1)>>>31;return new o(T,_.h)}function L(_,y){const T=y>>5;y%=32;const E=_.g.length-T,A=[];for(let P=0;P<E;P++)A[P]=y>0?_.i(P+T)>>>y|_.i(P+T+1)<<32-y:_.i(P+T);return new o(A,_.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,mE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,xr=o}).apply(typeof fy<"u"?fy:typeof self<"u"?self:typeof window<"u"?window:{});var sl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gE,lo,yE,kl,Td,_E,vE,wE;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof sl=="object"&&sl];for(var d=0;d<a.length;++d){var p=a[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,d){if(d)e:{var p=r;a=a.split(".");for(var v=0;v<a.length-1;v++){var D=a[v];if(!(D in p))break e;p=p[D]}a=a[a.length-1],v=p[a],d=d(v),d!=v&&d!=null&&e(p,a,{configurable:!0,writable:!0,value:d})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(d){var p=[],v;for(v in d)Object.prototype.hasOwnProperty.call(d,v)&&p.push([v,d[v]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function u(a,d,p){return a.call.apply(a.bind,arguments)}function h(a,d,p){return h=u,h.apply(null,arguments)}function f(a,d){var p=Array.prototype.slice.call(arguments,1);return function(){var v=p.slice();return v.push.apply(v,arguments),a.apply(this,v)}}function g(a,d){function p(){}p.prototype=d.prototype,a.Z=d.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(v,D,V){for(var B=Array(arguments.length-2),te=2;te<arguments.length;te++)B[te-2]=arguments[te];return d.prototype[D].apply(v,B)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function w(a){const d=a.length;if(d>0){const p=Array(d);for(let v=0;v<d;v++)p[v]=a[v];return p}return[]}function k(a,d){for(let v=1;v<arguments.length;v++){const D=arguments[v];var p=typeof D;if(p=p!="object"?p:D?Array.isArray(D)?"array":p:"null",p=="array"||p=="object"&&typeof D.length=="number"){p=a.length||0;const V=D.length||0;a.length=p+V;for(let B=0;B<V;B++)a[p+B]=D[B]}else a.push(D)}}class N{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return this.h>0?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function b(a){o.setTimeout(()=>{throw a},0)}function S(){var a=_;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class I{constructor(){this.h=this.g=null}add(d,p){const v=x.get();v.set(d,p),this.h?this.h.next=v:this.g=v,this.h=v}}var x=new N(()=>new j,a=>a.reset());class j{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let R,L=!1,_=new I,y=()=>{const a=Promise.resolve(void 0);R=()=>{a.then(T)}};function T(){for(var a;a=S();){try{a.h.call(a.g)}catch(p){b(p)}var d=x;d.j(a),d.h<100&&(d.h++,a.next=d.g,d.g=a)}L=!1}function E(){this.u=this.u,this.C=this.C}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var P=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,d),o.removeEventListener("test",p,d)}catch{}return a}();function C(a){return/^[\s\xa0]*$/.test(a)}function oe(a,d){A.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,d)}g(oe,A),oe.prototype.init=function(a,d){const p=this.type=a.type,v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget,d||(p=="mouseover"?d=a.fromElement:p=="mouseout"&&(d=a.toElement)),this.relatedTarget=d,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&oe.Z.h.call(this)},oe.prototype.h=function(){oe.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var je="closure_listenable_"+(Math.random()*1e6|0),Ct=0;function Cn(a,d,p,v,D){this.listener=a,this.proxy=null,this.src=d,this.type=p,this.capture=!!v,this.ha=D,this.key=++Ct,this.da=this.fa=!1}function H(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Q(a,d,p){for(const v in a)d.call(p,a[v],v,a)}function ee(a,d){for(const p in a)d.call(void 0,a[p],p,a)}function he(a){const d={};for(const p in a)d[p]=a[p];return d}const we="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Rn(a,d){let p,v;for(let D=1;D<arguments.length;D++){v=arguments[D];for(p in v)a[p]=v[p];for(let V=0;V<we.length;V++)p=we[V],Object.prototype.hasOwnProperty.call(v,p)&&(a[p]=v[p])}}function U(a){this.src=a,this.g={},this.h=0}U.prototype.add=function(a,d,p,v,D){const V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);const B=Pe(a,d,v,D);return B>-1?(d=a[B],p||(d.fa=!1)):(d=new Cn(d,this.src,V,!!v,D),d.fa=p,a.push(d)),d};function me(a,d){const p=d.type;if(p in a.g){var v=a.g[p],D=Array.prototype.indexOf.call(v,d,void 0),V;(V=D>=0)&&Array.prototype.splice.call(v,D,1),V&&(H(d),a.g[p].length==0&&(delete a.g[p],a.h--))}}function Pe(a,d,p,v){for(let D=0;D<a.length;++D){const V=a[D];if(!V.da&&V.listener==d&&V.capture==!!p&&V.ha==v)return D}return-1}var Xe="closure_lm_"+(Math.random()*1e6|0),un={};function Ca(a,d,p,v,D){if(Array.isArray(d)){for(let V=0;V<d.length;V++)Ca(a,d[V],p,v,D);return null}return p=Qp(p),a&&a[je]?a.J(d,p,l(v)?!!v.capture:!1,D):nT(a,d,p,!1,v,D)}function nT(a,d,p,v,D,V){if(!d)throw Error("Invalid event type");const B=l(D)?!!D.capture:!!D;let te=gc(a);if(te||(a[Xe]=te=new U(a)),p=te.add(d,p,v,B,V),p.proxy)return p;if(v=rT(),p.proxy=v,v.src=a,v.listener=p,a.addEventListener)P||(D=B),D===void 0&&(D=!1),a.addEventListener(d.toString(),v,D);else if(a.attachEvent)a.attachEvent(Kp(d.toString()),v);else if(a.addListener&&a.removeListener)a.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return p}function rT(){function a(p){return d.call(a.src,a.listener,p)}const d=sT;return a}function Gp(a,d,p,v,D){if(Array.isArray(d))for(var V=0;V<d.length;V++)Gp(a,d[V],p,v,D);else v=l(v)?!!v.capture:!!v,p=Qp(p),a&&a[je]?(a=a.i,V=String(d).toString(),V in a.g&&(d=a.g[V],p=Pe(d,p,v,D),p>-1&&(H(d[p]),Array.prototype.splice.call(d,p,1),d.length==0&&(delete a.g[V],a.h--)))):a&&(a=gc(a))&&(d=a.g[d.toString()],a=-1,d&&(a=Pe(d,p,v,D)),(p=a>-1?d[a]:null)&&mc(p))}function mc(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[je])me(d.i,a);else{var p=a.type,v=a.proxy;d.removeEventListener?d.removeEventListener(p,v,a.capture):d.detachEvent?d.detachEvent(Kp(p),v):d.addListener&&d.removeListener&&d.removeListener(v),(p=gc(d))?(me(p,a),p.h==0&&(p.src=null,d[Xe]=null)):H(a)}}}function Kp(a){return a in un?un[a]:un[a]="on"+a}function sT(a,d){if(a.da)a=!0;else{d=new oe(d,this);const p=a.listener,v=a.ha||a.src;a.fa&&mc(a),a=p.call(v,d)}return a}function gc(a){return a=a[Xe],a instanceof U?a:null}var yc="__closure_events_fn_"+(Math.random()*1e9>>>0);function Qp(a){return typeof a=="function"?a:(a[yc]||(a[yc]=function(d){return a.handleEvent(d)}),a[yc])}function st(){E.call(this),this.i=new U(this),this.M=this,this.G=null}g(st,E),st.prototype[je]=!0,st.prototype.removeEventListener=function(a,d,p,v){Gp(this,a,d,p,v)};function ft(a,d){var p,v=a.G;if(v)for(p=[];v;v=v.G)p.push(v);if(a=a.M,v=d.type||d,typeof d=="string")d=new A(d,a);else if(d instanceof A)d.target=d.target||a;else{var D=d;d=new A(v,a),Rn(d,D)}D=!0;let V,B;if(p)for(B=p.length-1;B>=0;B--)V=d.g=p[B],D=Ra(V,v,!0,d)&&D;if(V=d.g=a,D=Ra(V,v,!0,d)&&D,D=Ra(V,v,!1,d)&&D,p)for(B=0;B<p.length;B++)V=d.g=p[B],D=Ra(V,v,!1,d)&&D}st.prototype.N=function(){if(st.Z.N.call(this),this.i){var a=this.i;for(const d in a.g){const p=a.g[d];for(let v=0;v<p.length;v++)H(p[v]);delete a.g[d],a.h--}}this.G=null},st.prototype.J=function(a,d,p,v){return this.i.add(String(a),d,!1,p,v)},st.prototype.K=function(a,d,p,v){return this.i.add(String(a),d,!0,p,v)};function Ra(a,d,p,v){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();let D=!0;for(let V=0;V<d.length;++V){const B=d[V];if(B&&!B.da&&B.capture==p){const te=B.listener,Ue=B.ha||B.src;B.fa&&me(a.i,B),D=te.call(Ue,v)!==!1&&D}}return D&&!v.defaultPrevented}function iT(a,d){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(d)>2147483647?-1:o.setTimeout(a,d||0)}function Yp(a){a.g=iT(()=>{a.g=null,a.i&&(a.i=!1,Yp(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class oT extends E{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Yp(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bi(a){E.call(this),this.h=a,this.g={}}g(bi,E);var Xp=[];function Jp(a){Q(a.g,function(d,p){this.g.hasOwnProperty(p)&&mc(d)},a),a.g={}}bi.prototype.N=function(){bi.Z.N.call(this),Jp(this)},bi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var _c=o.JSON.stringify,aT=o.JSON.parse,lT=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Zp(){}function em(){}var Di={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function vc(){A.call(this,"d")}g(vc,A);function wc(){A.call(this,"c")}g(wc,A);var Hr={},tm=null;function Na(){return tm=tm||new st}Hr.Ia="serverreachability";function nm(a){A.call(this,Hr.Ia,a)}g(nm,A);function ji(a){const d=Na();ft(d,new nm(d))}Hr.STAT_EVENT="statevent";function rm(a,d){A.call(this,Hr.STAT_EVENT,a),this.stat=d}g(rm,A);function pt(a){const d=Na();ft(d,new rm(d,a))}Hr.Ja="timingevent";function sm(a,d){A.call(this,Hr.Ja,a),this.size=d}g(sm,A);function Vi(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},d)}function Li(){this.g=!0}Li.prototype.ua=function(){this.g=!1};function uT(a,d,p,v,D,V){a.info(function(){if(a.g)if(V){var B="",te=V.split("&");for(let de=0;de<te.length;de++){var Ue=te[de].split("=");if(Ue.length>1){const qe=Ue[0];Ue=Ue[1];const hn=qe.split("_");B=hn.length>=2&&hn[1]=="type"?B+(qe+"="+Ue+"&"):B+(qe+"=redacted&")}}}else B=null;else B=V;return"XMLHTTP REQ ("+v+") [attempt "+D+"]: "+d+`
`+p+`
`+B})}function cT(a,d,p,v,D,V,B){a.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+D+"]: "+d+`
`+p+`
`+V+" "+B})}function As(a,d,p,v){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+dT(a,p)+(v?" "+v:"")})}function hT(a,d){a.info(function(){return"TIMEOUT: "+d})}Li.prototype.info=function(){};function dT(a,d){if(!a.g)return d;if(!d)return null;try{const V=JSON.parse(d);if(V){for(a=0;a<V.length;a++)if(Array.isArray(V[a])){var p=V[a];if(!(p.length<2)){var v=p[1];if(Array.isArray(v)&&!(v.length<1)){var D=v[0];if(D!="noop"&&D!="stop"&&D!="close")for(let B=1;B<v.length;B++)v[B]=""}}}}return _c(V)}catch{return d}}var Pa={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},im={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},om;function Ec(){}g(Ec,Zp),Ec.prototype.g=function(){return new XMLHttpRequest},om=new Ec;function Oi(a){return encodeURIComponent(String(a))}function fT(a){var d=1;a=a.split(":");const p=[];for(;d>0&&a.length;)p.push(a.shift()),d--;return a.length&&p.push(a.join(":")),p}function Jn(a,d,p,v){this.j=a,this.i=d,this.l=p,this.S=v||1,this.V=new bi(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new am}function am(){this.i=null,this.g="",this.h=!1}var lm={},Tc={};function Ic(a,d,p){a.M=1,a.A=Da(cn(d)),a.u=p,a.R=!0,um(a,null)}function um(a,d){a.F=Date.now(),ba(a),a.B=cn(a.A);var p=a.B,v=a.S;Array.isArray(v)||(v=[String(v)]),Tm(p.i,"t",v),a.C=0,p=a.j.L,a.h=new am,a.g=Um(a.j,p?d:null,!a.u),a.P>0&&(a.O=new oT(h(a.Y,a,a.g),a.P)),d=a.V,p=a.g,v=a.ba;var D="readystatechange";Array.isArray(D)||(D&&(Xp[0]=D.toString()),D=Xp);for(let V=0;V<D.length;V++){const B=Ca(p,D[V],v||d.handleEvent,!1,d.h||d);if(!B)break;d.g[B.key]=B}d=a.J?he(a.J):{},a.u?(a.v||(a.v="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,d)):(a.v="GET",a.g.ea(a.B,a.v,null,d)),ji(),uT(a.i,a.v,a.B,a.l,a.S,a.u)}Jn.prototype.ba=function(a){a=a.target;const d=this.O;d&&tr(a)==3?d.j():this.Y(a)},Jn.prototype.Y=function(a){try{if(a==this.g)e:{const te=tr(this.g),Ue=this.g.ya(),de=this.g.ca();if(!(te<3)&&(te!=3||this.g&&(this.h.h||this.g.la()||Rm(this.g)))){this.K||te!=4||Ue==7||(Ue==8||de<=0?ji(3):ji(2)),Sc(this);var d=this.g.ca();this.X=d;var p=pT(this);if(this.o=d==200,cT(this.i,this.v,this.B,this.l,this.S,te,d),this.o){if(this.U&&!this.L){t:{if(this.g){var v,D=this.g;if((v=D.g?D.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(v)){var V=v;break t}}V=null}if(a=V)As(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,kc(this,a);else{this.o=!1,this.m=3,pt(12),qr(this),Mi(this);break e}}if(this.R){a=!0;let qe;for(;!this.K&&this.C<p.length;)if(qe=mT(this,p),qe==Tc){te==4&&(this.m=4,pt(14),a=!1),As(this.i,this.l,null,"[Incomplete Response]");break}else if(qe==lm){this.m=4,pt(15),As(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else As(this.i,this.l,qe,null),kc(this,qe);if(cm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),te!=4||p.length!=0||this.h.h||(this.m=1,pt(16),a=!1),this.o=this.o&&a,!a)As(this.i,this.l,p,"[Invalid Chunked Response]"),qr(this),Mi(this);else if(p.length>0&&!this.W){this.W=!0;var B=this.j;B.g==this&&B.aa&&!B.P&&(B.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),Dc(B),B.P=!0,pt(11))}}else As(this.i,this.l,p,null),kc(this,p);te==4&&qr(this),this.o&&!this.K&&(te==4?Lm(this.j,this):(this.o=!1,ba(this)))}else RT(this.g),d==400&&p.indexOf("Unknown SID")>0?(this.m=3,pt(12)):(this.m=0,pt(13)),qr(this),Mi(this)}}}catch{}finally{}};function pT(a){if(!cm(a))return a.g.la();const d=Rm(a.g);if(d==="")return"";let p="";const v=d.length,D=tr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return qr(a),Mi(a),"";a.h.i=new o.TextDecoder}for(let V=0;V<v;V++)a.h.h=!0,p+=a.h.i.decode(d[V],{stream:!(D&&V==v-1)});return d.length=0,a.h.g+=p,a.C=0,a.h.g}function cm(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function mT(a,d){var p=a.C,v=d.indexOf(`
`,p);return v==-1?Tc:(p=Number(d.substring(p,v)),isNaN(p)?lm:(v+=1,v+p>d.length?Tc:(d=d.slice(v,v+p),a.C=v+p,d)))}Jn.prototype.cancel=function(){this.K=!0,qr(this)};function ba(a){a.T=Date.now()+a.H,hm(a,a.H)}function hm(a,d){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Vi(h(a.aa,a),d)}function Sc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Jn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(hT(this.i,this.B),this.M!=2&&(ji(),pt(17)),qr(this),this.m=2,Mi(this)):hm(this,this.T-a)};function Mi(a){a.j.I==0||a.K||Lm(a.j,a)}function qr(a){Sc(a);var d=a.O;d&&typeof d.dispose=="function"&&d.dispose(),a.O=null,Jp(a.V),a.g&&(d=a.g,a.g=null,d.abort(),d.dispose())}function kc(a,d){try{var p=a.j;if(p.I!=0&&(p.g==a||Ac(p.h,a))){if(!a.L&&Ac(p.h,a)&&p.I==3){try{var v=p.Ba.g.parse(d)}catch{v=null}if(Array.isArray(v)&&v.length==3){var D=v;if(D[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)Ma(p),La(p);else break e;bc(p),pt(18)}}else p.xa=D[1],0<p.xa-p.K&&D[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=Vi(h(p.Va,p),6e3));pm(p.h)<=1&&p.ta&&(p.ta=void 0)}else Gr(p,11)}else if((a.L||p.g==a)&&Ma(p),!C(d))for(D=p.Ba.g.parse(d),d=0;d<D.length;d++){let de=D[d];const qe=de[0];if(!(qe<=p.K))if(p.K=qe,de=de[1],p.I==2)if(de[0]=="c"){p.M=de[1],p.ba=de[2];const hn=de[3];hn!=null&&(p.ka=hn,p.j.info("VER="+p.ka));const Kr=de[4];Kr!=null&&(p.za=Kr,p.j.info("SVER="+p.za));const nr=de[5];nr!=null&&typeof nr=="number"&&nr>0&&(v=1.5*nr,p.O=v,p.j.info("backChannelRequestTimeoutMs_="+v)),v=p;const rr=a.g;if(rr){const Ua=rr.g?rr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ua){var V=v.h;V.g||Ua.indexOf("spdy")==-1&&Ua.indexOf("quic")==-1&&Ua.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(xc(V,V.h),V.h=null))}if(v.G){const jc=rr.g?rr.g.getResponseHeader("X-HTTP-Session-Id"):null;jc&&(v.wa=jc,ge(v.J,v.G,jc))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),v=p;var B=a;if(v.na=Fm(v,v.L?v.ba:null,v.W),B.L){mm(v.h,B);var te=B,Ue=v.O;Ue&&(te.H=Ue),te.D&&(Sc(te),ba(te)),v.g=B}else jm(v);p.i.length>0&&Oa(p)}else de[0]!="stop"&&de[0]!="close"||Gr(p,7);else p.I==3&&(de[0]=="stop"||de[0]=="close"?de[0]=="stop"?Gr(p,7):Pc(p):de[0]!="noop"&&p.l&&p.l.qa(de),p.A=0)}}ji(4)}catch{}}var gT=class{constructor(a,d){this.g=a,this.map=d}};function dm(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function fm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function pm(a){return a.h?1:a.g?a.g.size:0}function Ac(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function xc(a,d){a.g?a.g.add(d):a.h=d}function mm(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}dm.prototype.cancel=function(){if(this.i=gm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function gm(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const p of a.g.values())d=d.concat(p.G);return d}return w(a.i)}var ym=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function yT(a,d){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const v=a[p].indexOf("=");let D,V=null;v>=0?(D=a[p].substring(0,v),V=a[p].substring(v+1)):D=a[p],d(D,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function Zn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let d;a instanceof Zn?(this.l=a.l,Fi(this,a.j),this.o=a.o,this.g=a.g,Ui(this,a.u),this.h=a.h,Cc(this,Im(a.i)),this.m=a.m):a&&(d=String(a).match(ym))?(this.l=!1,Fi(this,d[1]||"",!0),this.o=zi(d[2]||""),this.g=zi(d[3]||"",!0),Ui(this,d[4]),this.h=zi(d[5]||"",!0),Cc(this,d[6]||"",!0),this.m=zi(d[7]||"")):(this.l=!1,this.i=new $i(null,this.l))}Zn.prototype.toString=function(){const a=[];var d=this.j;d&&a.push(Bi(d,_m,!0),":");var p=this.g;return(p||d=="file")&&(a.push("//"),(d=this.o)&&a.push(Bi(d,_m,!0),"@"),a.push(Oi(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Bi(p,p.charAt(0)=="/"?wT:vT,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Bi(p,TT)),a.join("")},Zn.prototype.resolve=function(a){const d=cn(this);let p=!!a.j;p?Fi(d,a.j):p=!!a.o,p?d.o=a.o:p=!!a.g,p?d.g=a.g:p=a.u!=null;var v=a.h;if(p)Ui(d,a.u);else if(p=!!a.h){if(v.charAt(0)!="/")if(this.g&&!this.h)v="/"+v;else{var D=d.h.lastIndexOf("/");D!=-1&&(v=d.h.slice(0,D+1)+v)}if(D=v,D==".."||D==".")v="";else if(D.indexOf("./")!=-1||D.indexOf("/.")!=-1){v=D.lastIndexOf("/",0)==0,D=D.split("/");const V=[];for(let B=0;B<D.length;){const te=D[B++];te=="."?v&&B==D.length&&V.push(""):te==".."?((V.length>1||V.length==1&&V[0]!="")&&V.pop(),v&&B==D.length&&V.push("")):(V.push(te),v=!0)}v=V.join("/")}else v=D}return p?d.h=v:p=a.i.toString()!=="",p?Cc(d,Im(a.i)):p=!!a.m,p&&(d.m=a.m),d};function cn(a){return new Zn(a)}function Fi(a,d,p){a.j=p?zi(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function Ui(a,d){if(d){if(d=Number(d),isNaN(d)||d<0)throw Error("Bad port number "+d);a.u=d}else a.u=null}function Cc(a,d,p){d instanceof $i?(a.i=d,IT(a.i,a.l)):(p||(d=Bi(d,ET)),a.i=new $i(d,a.l))}function ge(a,d,p){a.i.set(d,p)}function Da(a){return ge(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function zi(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Bi(a,d,p){return typeof a=="string"?(a=encodeURI(a).replace(d,_T),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function _T(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var _m=/[#\/\?@]/g,vT=/[#\?:]/g,wT=/[#\?]/g,ET=/[#\?@]/g,TT=/#/g;function $i(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function Wr(a){a.g||(a.g=new Map,a.h=0,a.i&&yT(a.i,function(d,p){a.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}t=$i.prototype,t.add=function(a,d){Wr(this),this.i=null,a=xs(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(d),this.h+=1,this};function vm(a,d){Wr(a),d=xs(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function wm(a,d){return Wr(a),d=xs(a,d),a.g.has(d)}t.forEach=function(a,d){Wr(this),this.g.forEach(function(p,v){p.forEach(function(D){a.call(d,D,v,this)},this)},this)};function Em(a,d){Wr(a);let p=[];if(typeof d=="string")wm(a,d)&&(p=p.concat(a.g.get(xs(a,d))));else for(a=Array.from(a.g.values()),d=0;d<a.length;d++)p=p.concat(a[d]);return p}t.set=function(a,d){return Wr(this),this.i=null,a=xs(this,a),wm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=Em(this,a),a.length>0?String(a[0]):d):d};function Tm(a,d,p){vm(a,d),p.length>0&&(a.i=null,a.g.set(xs(a,d),w(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(let v=0;v<d.length;v++){var p=d[v];const D=Oi(p);p=Em(this,p);for(let V=0;V<p.length;V++){let B=D;p[V]!==""&&(B+="="+Oi(p[V])),a.push(B)}}return this.i=a.join("&")};function Im(a){const d=new $i;return d.i=a.i,a.g&&(d.g=new Map(a.g),d.h=a.h),d}function xs(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function IT(a,d){d&&!a.j&&(Wr(a),a.i=null,a.g.forEach(function(p,v){const D=v.toLowerCase();v!=D&&(vm(this,v),Tm(this,D,p))},a)),a.j=d}function ST(a,d){const p=new Li;if(o.Image){const v=new Image;v.onload=f(er,p,"TestLoadImage: loaded",!0,d,v),v.onerror=f(er,p,"TestLoadImage: error",!1,d,v),v.onabort=f(er,p,"TestLoadImage: abort",!1,d,v),v.ontimeout=f(er,p,"TestLoadImage: timeout",!1,d,v),o.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=a}else d(!1)}function kT(a,d){const p=new Li,v=new AbortController,D=setTimeout(()=>{v.abort(),er(p,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:v.signal}).then(V=>{clearTimeout(D),V.ok?er(p,"TestPingServer: ok",!0,d):er(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(D),er(p,"TestPingServer: error",!1,d)})}function er(a,d,p,v,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),v(p)}catch{}}function AT(){this.g=new lT}function Rc(a){this.i=a.Sb||null,this.h=a.ab||!1}g(Rc,Zp),Rc.prototype.g=function(){return new ja(this.i,this.h)};function ja(a,d){st.call(this),this.H=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(ja,st),t=ja.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=d,this.readyState=1,qi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const d={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(d.body=a),(this.H||o).fetch(new Request(this.D,d)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Hi(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,qi(this)),this.g&&(this.readyState=3,qi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Sm(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Sm(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.B.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?Hi(this):qi(this),this.readyState==3&&Sm(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Hi(this))},t.Na=function(a){this.g&&(this.response=a,Hi(this))},t.ga=function(){this.g&&Hi(this)};function Hi(a){a.readyState=4,a.l=null,a.j=null,a.B=null,qi(a)}t.setRequestHeader=function(a,d){this.A.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=d.next();return a.join(`\r
`)};function qi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ja.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function km(a){let d="";return Q(a,function(p,v){d+=v,d+=":",d+=p,d+=`\r
`}),d}function Nc(a,d,p){e:{for(v in p){var v=!1;break e}v=!0}v||(p=km(p),typeof a=="string"?p!=null&&Oi(p):ge(a,d,p))}function xe(a){st.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(xe,st);var xT=/^https?$/i,CT=["POST","PUT"];t=xe.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,d,p,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():om.g(),this.g.onreadystatechange=m(h(this.Ca,this));try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(V){Am(this,V);return}if(a=p||"",p=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var D in v)p.set(D,v[D]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const V of v.keys())p.set(V,v.get(V));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(p.keys()).find(V=>V.toLowerCase()=="content-type"),D=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(CT,d,void 0)>=0)||v||D||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,B]of p)this.g.setRequestHeader(V,B);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(V){Am(this,V)}};function Am(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.o=5,xm(a),Va(a)}function xm(a){a.A||(a.A=!0,ft(a,"complete"),ft(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,ft(this,"complete"),ft(this,"abort"),Va(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Va(this,!0)),xe.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Cm(this):this.Xa())},t.Xa=function(){Cm(this)};function Cm(a){if(a.h&&typeof i<"u"){if(a.v&&tr(a)==4)setTimeout(a.Ca.bind(a),0);else if(ft(a,"readystatechange"),tr(a)==4){a.h=!1;try{const V=a.ca();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var v;if(v=V===0){let B=String(a.D).match(ym)[1]||null;!B&&o.self&&o.self.location&&(B=o.self.location.protocol.slice(0,-1)),v=!xT.test(B?B.toLowerCase():"")}p=v}if(p)ft(a,"complete"),ft(a,"success");else{a.o=6;try{var D=tr(a)>2?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.ca()+"]",xm(a)}}finally{Va(a)}}}}function Va(a,d){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,d||ft(a,"ready");try{p.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function tr(a){return a.g?a.g.readyState:0}t.ca=function(){try{return tr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),aT(d)}};function Rm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function RT(a){const d={};a=(a.g&&tr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<a.length;v++){if(C(a[v]))continue;var p=fT(a[v]);const D=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const V=d[D]||[];d[D]=V,V.push(p)}ee(d,function(v){return v.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Wi(a,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||d}function Nm(a){this.za=0,this.i=[],this.j=new Li,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Wi("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Wi("baseRetryDelayMs",5e3,a),this.Za=Wi("retryDelaySeedMs",1e4,a),this.Ta=Wi("forwardChannelMaxRetries",2,a),this.va=Wi("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new dm(a&&a.concurrentRequestLimit),this.Ba=new AT,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Nm.prototype,t.ka=8,t.I=1,t.connect=function(a,d,p,v){pt(0),this.W=a,this.H=d||{},p&&v!==void 0&&(this.H.OSID=p,this.H.OAID=v),this.F=this.X,this.J=Fm(this,null,this.W),Oa(this)};function Pc(a){if(Pm(a),a.I==3){var d=a.V++,p=cn(a.J);if(ge(p,"SID",a.M),ge(p,"RID",d),ge(p,"TYPE","terminate"),Gi(a,p),d=new Jn(a,a.j,d),d.M=2,d.A=Da(cn(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(d.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=d.A,p=!0),p||(d.g=Um(d.j,null),d.g.ea(d.A)),d.F=Date.now(),ba(d)}Mm(a)}function La(a){a.g&&(Dc(a),a.g.cancel(),a.g=null)}function Pm(a){La(a),a.v&&(o.clearTimeout(a.v),a.v=null),Ma(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Oa(a){if(!fm(a.h)&&!a.m){a.m=!0;var d=a.Ea;R||y(),L||(R(),L=!0),_.add(d,a),a.D=0}}function NT(a,d){return pm(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=d.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Vi(h(a.Ea,a,d),Om(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const D=new Jn(this,this.j,a);let V=this.o;if(this.U&&(V?(V=he(V),Rn(V,this.U)):V=this.U),this.u!==null||this.R||(D.J=V,V=null),this.S)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var v=this.i[p];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(d+=v,d>4096){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=Dm(this,D,d),p=cn(this.J),ge(p,"RID",a),ge(p,"CVER",22),this.G&&ge(p,"X-HTTP-Session-Id",this.G),Gi(this,p),V&&(this.R?d="headers="+Oi(km(V))+"&"+d:this.u&&Nc(p,this.u,V)),xc(this.h,D),this.Ra&&ge(p,"TYPE","init"),this.S?(ge(p,"$req",d),ge(p,"SID","null"),D.U=!0,Ic(D,p,null)):Ic(D,p,d),this.I=2}}else this.I==3&&(a?bm(this,a):this.i.length==0||fm(this.h)||bm(this))};function bm(a,d){var p;d?p=d.l:p=a.V++;const v=cn(a.J);ge(v,"SID",a.M),ge(v,"RID",p),ge(v,"AID",a.K),Gi(a,v),a.u&&a.o&&Nc(v,a.u,a.o),p=new Jn(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),d&&(a.i=d.G.concat(a.i)),d=Dm(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),xc(a.h,p),Ic(p,v,d)}function Gi(a,d){a.H&&Q(a.H,function(p,v){ge(d,v,p)}),a.l&&Q({},function(p,v){ge(d,v,p)})}function Dm(a,d,p){p=Math.min(a.i.length,p);const v=a.l?h(a.l.Ka,a.l,a):null;e:{var D=a.i;let te=-1;for(;;){const Ue=["count="+p];te==-1?p>0?(te=D[0].g,Ue.push("ofs="+te)):te=0:Ue.push("ofs="+te);let de=!0;for(let qe=0;qe<p;qe++){var V=D[qe].g;const hn=D[qe].map;if(V-=te,V<0)te=Math.max(0,D[qe].g-100),de=!1;else try{V="req"+V+"_"||"";try{var B=hn instanceof Map?hn:Object.entries(hn);for(const[Kr,nr]of B){let rr=nr;l(nr)&&(rr=_c(nr)),Ue.push(V+Kr+"="+encodeURIComponent(rr))}}catch(Kr){throw Ue.push(V+"type="+encodeURIComponent("_badmap")),Kr}}catch{v&&v(hn)}}if(de){B=Ue.join("&");break e}}B=void 0}return a=a.i.splice(0,p),d.G=a,B}function jm(a){if(!a.g&&!a.v){a.Y=1;var d=a.Da;R||y(),L||(R(),L=!0),_.add(d,a),a.A=0}}function bc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Vi(h(a.Da,a),Om(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Vm(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Vi(h(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,pt(10),La(this),Vm(this))};function Dc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Vm(a){a.g=new Jn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var d=cn(a.na);ge(d,"RID","rpc"),ge(d,"SID",a.M),ge(d,"AID",a.K),ge(d,"CI",a.F?"0":"1"),!a.F&&a.ia&&ge(d,"TO",a.ia),ge(d,"TYPE","xmlhttp"),Gi(a,d),a.u&&a.o&&Nc(d,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=Da(cn(d)),p.u=null,p.R=!0,um(p,a)}t.Va=function(){this.C!=null&&(this.C=null,La(this),bc(this),pt(19))};function Ma(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Lm(a,d){var p=null;if(a.g==d){Ma(a),Dc(a),a.g=null;var v=2}else if(Ac(a.h,d))p=d.G,mm(a.h,d),v=1;else return;if(a.I!=0){if(d.o)if(v==1){p=d.u?d.u.length:0,d=Date.now()-d.F;var D=a.D;v=Na(),ft(v,new sm(v,p)),Oa(a)}else jm(a);else if(D=d.m,D==3||D==0&&d.X>0||!(v==1&&NT(a,d)||v==2&&bc(a)))switch(p&&p.length>0&&(d=a.h,d.i=d.i.concat(p)),D){case 1:Gr(a,5);break;case 4:Gr(a,10);break;case 3:Gr(a,6);break;default:Gr(a,2)}}}function Om(a,d){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*d}function Gr(a,d){if(a.j.info("Error code "+d),d==2){var p=h(a.bb,a),v=a.Ua;const D=!v;v=new Zn(v||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Fi(v,"https"),Da(v),D?ST(v.toString(),p):kT(v.toString(),p)}else pt(2);a.I=0,a.l&&a.l.pa(d),Mm(a),Pm(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function Mm(a){if(a.I=0,a.ja=[],a.l){const d=gm(a.h);(d.length!=0||a.i.length!=0)&&(k(a.ja,d),k(a.ja,a.i),a.h.i.length=0,w(a.i),a.i.length=0),a.l.oa()}}function Fm(a,d,p){var v=p instanceof Zn?cn(p):new Zn(p);if(v.g!="")d&&(v.g=d+"."+v.g),Ui(v,v.u);else{var D=o.location;v=D.protocol,d=d?d+"."+D.hostname:D.hostname,D=+D.port;const V=new Zn(null);v&&Fi(V,v),d&&(V.g=d),D&&Ui(V,D),p&&(V.h=p),v=V}return p=a.G,d=a.wa,p&&d&&ge(v,p,d),ge(v,"VER",a.ka),Gi(a,v),v}function Um(a,d,p){if(d&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Aa&&!a.ma?new xe(new Rc({ab:p})):new xe(a.ma),d.Fa(a.L),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function zm(){}t=zm.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Fa(){}Fa.prototype.g=function(a,d){return new Rt(a,d)};function Rt(a,d){st.call(this),this.g=new Nm(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.sa&&(a?a["X-WebChannel-Client-Profile"]=d.sa:a={"X-WebChannel-Client-Profile":d.sa}),this.g.U=a,(a=d&&d.Qb)&&!C(a)&&(this.g.u=a),this.A=d&&d.supportsCrossDomainXhr||!1,this.v=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!C(d)&&(this.g.G=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new Cs(this)}g(Rt,st),Rt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Rt.prototype.close=function(){Pc(this.g)},Rt.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=_c(a),a=p);d.i.push(new gT(d.Ya++,a)),d.I==3&&Oa(d)},Rt.prototype.N=function(){this.g.l=null,delete this.j,Pc(this.g),delete this.g,Rt.Z.N.call(this)};function Bm(a){vc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const p in d){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}g(Bm,vc);function $m(){wc.call(this),this.status=1}g($m,wc);function Cs(a){this.g=a}g(Cs,zm),Cs.prototype.ra=function(){ft(this.g,"a")},Cs.prototype.qa=function(a){ft(this.g,new Bm(a))},Cs.prototype.pa=function(a){ft(this.g,new $m)},Cs.prototype.oa=function(){ft(this.g,"b")},Fa.prototype.createWebChannel=Fa.prototype.g,Rt.prototype.send=Rt.prototype.o,Rt.prototype.open=Rt.prototype.m,Rt.prototype.close=Rt.prototype.close,wE=function(){return new Fa},vE=function(){return Na()},_E=Hr,Td={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Pa.NO_ERROR=0,Pa.TIMEOUT=8,Pa.HTTP_ERROR=6,kl=Pa,im.COMPLETE="complete",yE=im,em.EventType=Di,Di.OPEN="a",Di.CLOSE="b",Di.ERROR="c",Di.MESSAGE="d",st.prototype.listen=st.prototype.J,lo=em,xe.prototype.listenOnce=xe.prototype.K,xe.prototype.getLastError=xe.prototype.Ha,xe.prototype.getLastErrorCode=xe.prototype.ya,xe.prototype.getStatus=xe.prototype.ca,xe.prototype.getResponseJson=xe.prototype.La,xe.prototype.getResponseText=xe.prototype.la,xe.prototype.send=xe.prototype.ea,xe.prototype.setWithCredentials=xe.prototype.Fa,gE=xe}).apply(typeof sl<"u"?sl:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");/**
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
 */let ki="12.8.0";function hx(t){ki=t}/**
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
 */const ms=new qf("@firebase/firestore");function Ns(){return ms.logLevel}function q(t,...e){if(ms.logLevel<=re.DEBUG){const n=e.map(Kf);ms.debug(`Firestore (${ki}): ${t}`,...n)}}function Gn(t,...e){if(ms.logLevel<=re.ERROR){const n=e.map(Kf);ms.error(`Firestore (${ki}): ${t}`,...n)}}function di(t,...e){if(ms.logLevel<=re.WARN){const n=e.map(Kf);ms.warn(`Firestore (${ki}): ${t}`,...n)}}function Kf(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function K(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,EE(t,r,n)}function EE(t,e,n){let r=`FIRESTORE (${ki}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Gn(r),new Error(r)}function ue(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||EE(e,s,r)}function Z(t,e){return t}/**
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
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends xn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class zn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class TE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class dx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(lt.UNAUTHENTICATED))}shutdown(){}}class fx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class px{constructor(e){this.t=e,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ue(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new zn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new zn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new zn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ue(typeof r.accessToken=="string",31837,{l:r}),new TE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ue(e===null||typeof e=="string",2055,{h:e}),new lt(e)}}class mx{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class gx{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new mx(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class py{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yx{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Bt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ue(this.o===void 0,3512);const r=i=>{i.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new py(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ue(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new py(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function _x(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Qf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=_x(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function se(t,e){return t<e?-1:t>e?1:0}function Id(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return fh(s)===fh(i)?se(s,i):fh(s)?1:-1}return se(t.length,e.length)}const vx=55296,wx=57343;function fh(t){const e=t.charCodeAt(0);return e>=vx&&e<=wx}function fi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const my="__name__";class pn{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&K(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return pn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof pn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=pn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return se(e.length,n.length)}static compareSegments(e,n){const r=pn.isNumericId(e),s=pn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?pn.extractNumericId(e).compare(pn.extractNumericId(n)):Id(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return xr.fromString(e.substring(4,e.length-2))}}class fe extends pn{construct(e,n,r){return new fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new fe(n)}static emptyPath(){return new fe([])}}const Ex=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class et extends pn{construct(e,n,r){return new et(e,n,r)}static isValidIdentifier(e){return Ex.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===my}static keyField(){return new et([my])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new $(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new $(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new $(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new $(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new et(n)}static emptyPath(){return new et([])}}/**
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
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(fe.fromString(e))}static fromName(e){return new G(fe.fromString(e).popFirst(5))}static empty(){return new G(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new fe(e.slice()))}}/**
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
 */function IE(t,e,n){if(!n)throw new $(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Tx(t,e,n,r){if(e===!0&&r===!0)throw new $(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function gy(t){if(!G.isDocumentKey(t))throw new $(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function yy(t){if(G.isDocumentKey(t))throw new $(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function SE(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Bu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K(12329,{type:typeof t})}function Sn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Bu(t);throw new $(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Me(t,e){const n={typeString:t};return e&&(n.value=e),n}function ma(t,e){if(!SE(t))throw new $(O.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new $(O.INVALID_ARGUMENT,n);return!0}/**
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
 */const _y=-62135596800,vy=1e6;class _e{static now(){return _e.fromMillis(Date.now())}static fromDate(e){return _e.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*vy);return new _e(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<_y)throw new $(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/vy}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:_e._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ma(e,_e._jsonSchema))return new _e(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-_y;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}_e._jsonSchemaVersion="firestore/timestamp/1.0",_e._jsonSchema={type:Me("string",_e._jsonSchemaVersion),seconds:Me("number"),nanoseconds:Me("number")};/**
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
 */class J{static fromTimestamp(e){return new J(e)}static min(){return new J(new _e(0,0))}static max(){return new J(new _e(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ko=-1;function Ix(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=J.fromTimestamp(r===1e9?new _e(n+1,0):new _e(n,r));return new br(s,G.empty(),e)}function Sx(t){return new br(t.readTime,t.key,Ko)}class br{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new br(J.min(),G.empty(),Ko)}static max(){return new br(J.max(),G.empty(),Ko)}}function kx(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:se(t.largestBatchId,e.largestBatchId))}/**
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
 */const Ax="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class xx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ai(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==Ax)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new M((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new M((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Cx(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function xi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class $u{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}$u.ce=-1;/**
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
 */const Yf=-1;function Hu(t){return t==null}function au(t){return t===0&&1/t==-1/0}function Rx(t){return typeof t=="number"&&Number.isInteger(t)&&!au(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const kE="";function Nx(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=wy(e)),e=Px(t.get(n),e);return wy(e)}function Px(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case kE:n+="";break;default:n+=i}}return n}function wy(t){return t+kE+""}/**
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
 */function Ey(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Br(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function AE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ae{constructor(e,n){this.comparator=e,this.root=n||Ze.EMPTY}insert(e,n){return new Ae(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ze.BLACK,null,null))}remove(e){return new Ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new il(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new il(this.root,e,this.comparator,!1)}getReverseIterator(){return new il(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new il(this.root,e,this.comparator,!0)}}class il{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ze{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ze.RED,this.left=s??Ze.EMPTY,this.right=i??Ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ze(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ze.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw K(43730,{key:this.key,value:this.value});if(this.right.isRed())throw K(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw K(27949);return e+(this.isRed()?0:1)}}Ze.EMPTY=null,Ze.RED=!0,Ze.BLACK=!1;Ze.EMPTY=new class{constructor(){this.size=0}get key(){throw K(57766)}get value(){throw K(16141)}get color(){throw K(16727)}get left(){throw K(29726)}get right(){throw K(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ze(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class He{constructor(e){this.comparator=e,this.data=new Ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ty(this.data.getIterator())}getIteratorFrom(e){return new Ty(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof He)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new He(this.comparator);return n.data=e,n}}class Ty{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class bt{constructor(e){this.fields=e,e.sort(et.comparator)}static empty(){return new bt([])}unionWith(e){let n=new He(et.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return fi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class xE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new xE("Invalid base64 string: "+i):i}}(e);return new rt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const bx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Dr(t){if(ue(!!t,39018),typeof t=="string"){let e=0;const n=bx.exec(t);if(ue(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:be(t.seconds),nanos:be(t.nanos)}}function be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function jr(t){return typeof t=="string"?rt.fromBase64String(t):rt.fromUint8Array(t)}/**
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
 */const CE="server_timestamp",RE="__type__",NE="__previous_value__",PE="__local_write_time__";function Xf(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[RE])==null?void 0:r.stringValue)===CE}function qu(t){const e=t.mapValue.fields[NE];return Xf(e)?qu(e):e}function Qo(t){const e=Dr(t.mapValue.fields[PE].timestampValue);return new _e(e.seconds,e.nanos)}/**
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
 */class Dx{constructor(e,n,r,s,i,o,l,u,h,f,g){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=g}}const lu="(default)";class Yo{constructor(e,n){this.projectId=e,this.database=n||lu}static empty(){return new Yo("","")}get isDefaultDatabase(){return this.database===lu}isEqual(e){return e instanceof Yo&&e.projectId===this.projectId&&e.database===this.database}}function jx(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new $(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Yo(t.options.projectId,e)}/**
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
 */const bE="__type__",Vx="__max__",ol={mapValue:{}},DE="__vector__",uu="value";function Vr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Xf(t)?4:Ox(t)?9007199254740991:Lx(t)?10:11:K(28295,{value:t})}function kn(t,e){if(t===e)return!0;const n=Vr(t);if(n!==Vr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Qo(t).isEqual(Qo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Dr(s.timestampValue),l=Dr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return jr(s.bytesValue).isEqual(jr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return be(s.geoPointValue.latitude)===be(i.geoPointValue.latitude)&&be(s.geoPointValue.longitude)===be(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return be(s.integerValue)===be(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=be(s.doubleValue),l=be(i.doubleValue);return o===l?au(o)===au(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return fi(t.arrayValue.values||[],e.arrayValue.values||[],kn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Ey(o)!==Ey(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!kn(o[u],l[u])))return!1;return!0}(t,e);default:return K(52216,{left:t})}}function Xo(t,e){return(t.values||[]).find(n=>kn(n,e))!==void 0}function pi(t,e){if(t===e)return 0;const n=Vr(t),r=Vr(e);if(n!==r)return se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return se(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=be(i.integerValue||i.doubleValue),u=be(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Iy(t.timestampValue,e.timestampValue);case 4:return Iy(Qo(t),Qo(e));case 5:return Id(t.stringValue,e.stringValue);case 6:return function(i,o){const l=jr(i),u=jr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=se(l[h],u[h]);if(f!==0)return f}return se(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=se(be(i.latitude),be(o.latitude));return l!==0?l:se(be(i.longitude),be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Sy(t.arrayValue,e.arrayValue);case 10:return function(i,o){var m,w,k,N;const l=i.fields||{},u=o.fields||{},h=(m=l[uu])==null?void 0:m.arrayValue,f=(w=u[uu])==null?void 0:w.arrayValue,g=se(((k=h==null?void 0:h.values)==null?void 0:k.length)||0,((N=f==null?void 0:f.values)==null?void 0:N.length)||0);return g!==0?g:Sy(h,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===ol.mapValue&&o===ol.mapValue)return 0;if(i===ol.mapValue)return 1;if(o===ol.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let g=0;g<u.length&&g<f.length;++g){const m=Id(u[g],f[g]);if(m!==0)return m;const w=pi(l[u[g]],h[f[g]]);if(w!==0)return w}return se(u.length,f.length)}(t.mapValue,e.mapValue);default:throw K(23264,{he:n})}}function Iy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return se(t,e);const n=Dr(t),r=Dr(e),s=se(n.seconds,r.seconds);return s!==0?s:se(n.nanos,r.nanos)}function Sy(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=pi(n[s],r[s]);if(i)return i}return se(n.length,r.length)}function mi(t){return Sd(t)}function Sd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Dr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return jr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Sd(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Sd(n.fields[o])}`;return s+"}"}(t.mapValue):K(61005,{value:t})}function Al(t){switch(Vr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=qu(t);return e?16+Al(e):16;case 5:return 2*t.stringValue.length;case 6:return jr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Al(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Br(r.fields,(i,o)=>{s+=i.length+Al(o)}),s}(t.mapValue);default:throw K(13486,{value:t})}}function ky(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function kd(t){return!!t&&"integerValue"in t}function Jf(t){return!!t&&"arrayValue"in t}function Ay(t){return!!t&&"nullValue"in t}function xy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function xl(t){return!!t&&"mapValue"in t}function Lx(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[bE])==null?void 0:r.stringValue)===DE}function Io(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Br(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Io(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Io(t.arrayValue.values[n]);return e}return{...t}}function Ox(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Vx}/**
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
 */class Tt{constructor(e){this.value=e}static empty(){return new Tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!xl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Io(n)}setAll(e){let n=et.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Io(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());xl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return kn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];xl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Br(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Tt(Io(this.value))}}function jE(t){const e=[];return Br(t.fields,(n,r)=>{const s=new et([n]);if(xl(r)){const i=jE(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new bt(e)}/**
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
 */class ct{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ct(e,0,J.min(),J.min(),J.min(),Tt.empty(),0)}static newFoundDocument(e,n,r,s){return new ct(e,1,n,J.min(),r,s,0)}static newNoDocument(e,n){return new ct(e,2,n,J.min(),J.min(),Tt.empty(),0)}static newUnknownDocument(e,n){return new ct(e,3,n,J.min(),J.min(),Tt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class cu{constructor(e,n){this.position=e,this.inclusive=n}}function Cy(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=pi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ry(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!kn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Jo{constructor(e,n="asc"){this.field=e,this.dir=n}}function Mx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class VE{}class Oe extends VE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Ux(e,n,r):n==="array-contains"?new $x(e,r):n==="in"?new Hx(e,r):n==="not-in"?new qx(e,r):n==="array-contains-any"?new Wx(e,r):new Oe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new zx(e,r):new Bx(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(pi(n,this.value)):n!==null&&Vr(this.value)===Vr(n)&&this.matchesComparison(pi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ln extends VE{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new ln(e,n)}matches(e){return LE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function LE(t){return t.op==="and"}function OE(t){return Fx(t)&&LE(t)}function Fx(t){for(const e of t.filters)if(e instanceof ln)return!1;return!0}function Ad(t){if(t instanceof Oe)return t.field.canonicalString()+t.op.toString()+mi(t.value);if(OE(t))return t.filters.map(e=>Ad(e)).join(",");{const e=t.filters.map(n=>Ad(n)).join(",");return`${t.op}(${e})`}}function ME(t,e){return t instanceof Oe?function(r,s){return s instanceof Oe&&r.op===s.op&&r.field.isEqual(s.field)&&kn(r.value,s.value)}(t,e):t instanceof ln?function(r,s){return s instanceof ln&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&ME(o,s.filters[l]),!0):!1}(t,e):void K(19439)}function FE(t){return t instanceof Oe?function(n){return`${n.field.canonicalString()} ${n.op} ${mi(n.value)}`}(t):t instanceof ln?function(n){return n.op.toString()+" {"+n.getFilters().map(FE).join(" ,")+"}"}(t):"Filter"}class Ux extends Oe{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class zx extends Oe{constructor(e,n){super(e,"in",n),this.keys=UE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Bx extends Oe{constructor(e,n){super(e,"not-in",n),this.keys=UE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function UE(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class $x extends Oe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Jf(n)&&Xo(n.arrayValue,this.value)}}class Hx extends Oe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Xo(this.value.arrayValue,n)}}class qx extends Oe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Xo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Xo(this.value.arrayValue,n)}}class Wx extends Oe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Jf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Xo(this.value.arrayValue,r))}}/**
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
 */class Gx{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function Ny(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Gx(t,e,n,r,s,i,o)}function Zf(t){const e=Z(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ad(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Hu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>mi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>mi(r)).join(",")),e.Te=n}return e.Te}function ep(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Mx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ME(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ry(t.startAt,e.startAt)&&Ry(t.endAt,e.endAt)}function xd(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ci{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Kx(t,e,n,r,s,i,o,l){return new Ci(t,e,n,r,s,i,o,l)}function tp(t){return new Ci(t)}function Py(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Qx(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function zE(t){return t.collectionGroup!==null}function So(t){const e=Z(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new He(et.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Jo(i,r))}),n.has(et.keyField().canonicalString())||e.Ie.push(new Jo(et.keyField(),r))}return e.Ie}function wn(t){const e=Z(t);return e.Ee||(e.Ee=Yx(e,So(t))),e.Ee}function Yx(t,e){if(t.limitType==="F")return Ny(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Jo(s.field,i)});const n=t.endAt?new cu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new cu(t.startAt.position,t.startAt.inclusive):null;return Ny(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Cd(t,e){const n=t.filters.concat([e]);return new Ci(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Xx(t,e){const n=t.explicitOrderBy.concat([e]);return new Ci(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function Rd(t,e,n){return new Ci(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Wu(t,e){return ep(wn(t),wn(e))&&t.limitType===e.limitType}function BE(t){return`${Zf(wn(t))}|lt:${t.limitType}`}function Ps(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>FE(s)).join(", ")}]`),Hu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>mi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>mi(s)).join(",")),`Target(${r})`}(wn(t))}; limitType=${t.limitType})`}function Gu(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):G.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of So(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const h=Cy(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,So(r),s)||r.endAt&&!function(o,l,u){const h=Cy(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,So(r),s))}(t,e)}function Jx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function $E(t){return(e,n)=>{let r=!1;for(const s of So(t)){const i=Zx(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Zx(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),h=l.data.field(i);return u!==null&&h!==null?pi(u,h):K(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K(19790,{direction:t.dir})}}/**
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
 */class Ts{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Br(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return AE(this.inner)}size(){return this.innerSize}}/**
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
 */const eC=new Ae(G.comparator);function Kn(){return eC}const HE=new Ae(G.comparator);function uo(...t){let e=HE;for(const n of t)e=e.insert(n.key,n);return e}function qE(t){let e=HE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ts(){return ko()}function WE(){return ko()}function ko(){return new Ts(t=>t.toString(),(t,e)=>t.isEqual(e))}const tC=new Ae(G.comparator),nC=new He(G.comparator);function ie(...t){let e=nC;for(const n of t)e=e.add(n);return e}const rC=new He(se);function sC(){return rC}/**
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
 */function np(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:au(e)?"-0":e}}function GE(t){return{integerValue:""+t}}function iC(t,e){return Rx(e)?GE(e):np(t,e)}/**
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
 */class Ku{constructor(){this._=void 0}}function oC(t,e,n){return t instanceof Zo?function(s,i){const o={fields:{[RE]:{stringValue:CE},[PE]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Xf(i)&&(i=qu(i)),i&&(o.fields[NE]=i),{mapValue:o}}(n,e):t instanceof ea?QE(t,e):t instanceof ta?YE(t,e):function(s,i){const o=KE(s,i),l=by(o)+by(s.Ae);return kd(o)&&kd(s.Ae)?GE(l):np(s.serializer,l)}(t,e)}function aC(t,e,n){return t instanceof ea?QE(t,e):t instanceof ta?YE(t,e):n}function KE(t,e){return t instanceof hu?function(r){return kd(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Zo extends Ku{}class ea extends Ku{constructor(e){super(),this.elements=e}}function QE(t,e){const n=XE(e);for(const r of t.elements)n.some(s=>kn(s,r))||n.push(r);return{arrayValue:{values:n}}}class ta extends Ku{constructor(e){super(),this.elements=e}}function YE(t,e){let n=XE(e);for(const r of t.elements)n=n.filter(s=>!kn(s,r));return{arrayValue:{values:n}}}class hu extends Ku{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function by(t){return be(t.integerValue||t.doubleValue)}function XE(t){return Jf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class lC{constructor(e,n){this.field=e,this.transform=n}}function uC(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ea&&s instanceof ea||r instanceof ta&&s instanceof ta?fi(r.elements,s.elements,kn):r instanceof hu&&s instanceof hu?kn(r.Ae,s.Ae):r instanceof Zo&&s instanceof Zo}(t.transform,e.transform)}class cC{constructor(e,n){this.version=e,this.transformResults=n}}class xt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new xt}static exists(e){return new xt(void 0,e)}static updateTime(e){return new xt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Cl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Qu{}function JE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Yu(t.key,xt.none()):new ga(t.key,t.data,xt.none());{const n=t.data,r=Tt.empty();let s=new He(et.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new $r(t.key,r,new bt(s.toArray()),xt.none())}}function hC(t,e,n){t instanceof ga?function(s,i,o){const l=s.value.clone(),u=jy(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof $r?function(s,i,o){if(!Cl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=jy(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(ZE(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ao(t,e,n,r){return t instanceof ga?function(i,o,l,u){if(!Cl(i.precondition,o))return l;const h=i.value.clone(),f=Vy(i.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof $r?function(i,o,l,u){if(!Cl(i.precondition,o))return l;const h=Vy(i.fieldTransforms,u,o),f=o.data;return f.setAll(ZE(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(t,e,n,r):function(i,o,l){return Cl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function dC(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=KE(r.transform,s||null);i!=null&&(n===null&&(n=Tt.empty()),n.set(r.field,i))}return n||null}function Dy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&fi(r,s,(i,o)=>uC(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ga extends Qu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class $r extends Qu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ZE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function jy(t,e,n){const r=new Map;ue(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,aC(o,l,n[s]))}return r}function Vy(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,oC(i,o,e))}return r}class Yu extends Qu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fC extends Qu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class pC{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&hC(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ao(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ao(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=WE();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=JE(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&fi(this.mutations,e.mutations,(n,r)=>Dy(n,r))&&fi(this.baseMutations,e.baseMutations,(n,r)=>Dy(n,r))}}class rp{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ue(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return tC}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new rp(e,n,r,s)}}/**
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
 */class mC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class gC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ve,ae;function yC(t){switch(t){case O.OK:return K(64938);case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0;default:return K(15467,{code:t})}}function e1(t){if(t===void 0)return Gn("GRPC error has no .code"),O.UNKNOWN;switch(t){case Ve.OK:return O.OK;case Ve.CANCELLED:return O.CANCELLED;case Ve.UNKNOWN:return O.UNKNOWN;case Ve.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Ve.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Ve.INTERNAL:return O.INTERNAL;case Ve.UNAVAILABLE:return O.UNAVAILABLE;case Ve.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Ve.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Ve.NOT_FOUND:return O.NOT_FOUND;case Ve.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Ve.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Ve.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Ve.ABORTED:return O.ABORTED;case Ve.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Ve.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Ve.DATA_LOSS:return O.DATA_LOSS;default:return K(39323,{code:t})}}(ae=Ve||(Ve={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function _C(){return new TextEncoder}/**
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
 */const vC=new xr([4294967295,4294967295],0);function Ly(t){const e=_C().encode(t),n=new mE;return n.update(e),new Uint8Array(n.digest())}function Oy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new xr([n,r],0),new xr([s,i],0)]}class sp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new co(`Invalid padding: ${n}`);if(r<0)throw new co(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new co(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new co(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=xr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(xr.fromNumber(r)));return s.compare(vC)===1&&(s=new xr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Ly(e),[r,s]=Oy(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new sp(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=Ly(e),[r,s]=Oy(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class co extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Xu{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ya.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Xu(J.min(),s,new Ae(se),Kn(),ie())}}class ya{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ya(r,n,ie(),ie(),ie())}}/**
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
 */class Rl{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.De=s}}class t1{constructor(e,n){this.targetId=e,this.Ce=n}}class n1{constructor(e,n,r=rt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class My{constructor(){this.ve=0,this.Fe=Fy(),this.Me=rt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ie(),n=ie(),r=ie();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:K(38017,{changeType:i})}}),new ya(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=Fy()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ue(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class wC{constructor(e){this.Ge=e,this.ze=new Map,this.je=Kn(),this.He=al(),this.Je=al(),this.Ze=new Ae(se)}Xe(e){for(const n of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:K(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(xd(i))if(r===0){const o=new G(i.path);this.et(n,o,ct.newNoDocument(o,J.min()))}else ue(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=jr(r).toUint8Array()}catch(u){if(u instanceof xE)return di("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new sp(o,s,i)}catch(u){return di(u instanceof co?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&xd(l.target)){const u=new G(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,ct.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.Ke())}});let r=ie();this.Je.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new Xu(e,n,this.Ze,this.je,r);return this.je=Kn(),this.He=al(),this.Je=al(),this.Ze=new Ae(se),s}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.He=this.He.insert(n.key,this.It(n.key).add(e)),this.Je=this.Je.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.qe(n,1):s.Ue(n),this.Je=this.Je.insert(n,this.Rt(n).delete(e)),this.Je=this.Je.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new My,this.ze.set(e,n)),n}Rt(e){let n=this.Je.get(e);return n||(n=new He(se),this.Je=this.Je.insert(e,n)),n}It(e){let n=this.He.get(e);return n||(n=new He(se),this.He=this.He.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new My),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function al(){return new Ae(G.comparator)}function Fy(){return new Ae(G.comparator)}const EC={asc:"ASCENDING",desc:"DESCENDING"},TC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},IC={and:"AND",or:"OR"};class SC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Nd(t,e){return t.useProto3Json||Hu(e)?e:{value:e}}function du(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function r1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function kC(t,e){return du(t,e.toTimestamp())}function En(t){return ue(!!t,49232),J.fromTimestamp(function(n){const r=Dr(n);return new _e(r.seconds,r.nanos)}(t))}function ip(t,e){return Pd(t,e).canonicalString()}function Pd(t,e){const n=function(s){return new fe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function s1(t){const e=fe.fromString(t);return ue(u1(e),10190,{key:e.toString()}),e}function bd(t,e){return ip(t.databaseId,e.path)}function ph(t,e){const n=s1(e);if(n.get(1)!==t.databaseId.projectId)throw new $(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(o1(n))}function i1(t,e){return ip(t.databaseId,e)}function AC(t){const e=s1(t);return e.length===4?fe.emptyPath():o1(e)}function Dd(t){return new fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function o1(t){return ue(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Uy(t,e,n){return{name:bd(t,e),fields:n.value.mapValue.fields}}function xC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:K(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(ue(f===void 0||typeof f=="string",58123),rt.fromBase64String(f||"")):(ue(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),rt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?O.UNKNOWN:e1(h.code);return new $(f,h.message||"")}(o);n=new n1(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ph(t,r.document.name),i=En(r.document.updateTime),o=r.document.createTime?En(r.document.createTime):J.min(),l=new Tt({mapValue:{fields:r.document.fields}}),u=ct.newFoundDocument(s,i,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Rl(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ph(t,r.document),i=r.readTime?En(r.readTime):J.min(),o=ct.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Rl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ph(t,r.document),i=r.removedTargetIds||[];n=new Rl([],i,s,null)}else{if(!("filter"in e))return K(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new gC(s,i),l=r.targetId;n=new t1(l,o)}}return n}function CC(t,e){let n;if(e instanceof ga)n={update:Uy(t,e.key,e.value)};else if(e instanceof Yu)n={delete:bd(t,e.key)};else if(e instanceof $r)n={update:Uy(t,e.key,e.data),updateMask:OC(e.fieldMask)};else{if(!(e instanceof fC))return K(16599,{dt:e.type});n={verify:bd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Zo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ea)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ta)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof hu)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw K(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:kC(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:K(27497)}(t,e.precondition)),n}function RC(t,e){return t&&t.length>0?(ue(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?En(s.updateTime):En(i);return o.isEqual(J.min())&&(o=En(i)),new cC(o,s.transformResults||[])}(n,e))):[]}function NC(t,e){return{documents:[i1(t,e.path)]}}function PC(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=i1(t,s);const i=function(h){if(h.length!==0)return l1(ln.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(m){return{field:bs(m.field),direction:jC(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Nd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:n,parent:s}}function bC(t){let e=AC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ue(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(g){const m=a1(g);return m instanceof ln&&OE(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(g){return g.map(m=>function(k){return new Jo(Ds(k.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(g){let m;return m=typeof g=="object"?g.value:g,Hu(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(g){const m=!!g.before,w=g.values||[];return new cu(w,m)}(n.startAt));let h=null;return n.endAt&&(h=function(g){const m=!g.before,w=g.values||[];return new cu(w,m)}(n.endAt)),Kx(e,s,o,i,l,"F",u,h)}function DC(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function a1(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ds(n.unaryFilter.field);return Oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ds(n.unaryFilter.field);return Oe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ds(n.unaryFilter.field);return Oe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ds(n.unaryFilter.field);return Oe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return K(61313);default:return K(60726)}}(t):t.fieldFilter!==void 0?function(n){return Oe.create(Ds(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return K(58110);default:return K(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ln.create(n.compositeFilter.filters.map(r=>a1(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return K(1026)}}(n.compositeFilter.op))}(t):K(30097,{filter:t})}function jC(t){return EC[t]}function VC(t){return TC[t]}function LC(t){return IC[t]}function bs(t){return{fieldPath:t.canonicalString()}}function Ds(t){return et.fromServerFormat(t.fieldPath)}function l1(t){return t instanceof Oe?function(n){if(n.op==="=="){if(xy(n.value))return{unaryFilter:{field:bs(n.field),op:"IS_NAN"}};if(Ay(n.value))return{unaryFilter:{field:bs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(xy(n.value))return{unaryFilter:{field:bs(n.field),op:"IS_NOT_NAN"}};if(Ay(n.value))return{unaryFilter:{field:bs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:bs(n.field),op:VC(n.op),value:n.value}}}(t):t instanceof ln?function(n){const r=n.getFilters().map(s=>l1(s));return r.length===1?r[0]:{compositeFilter:{op:LC(n.op),filters:r}}}(t):K(54877,{filter:t})}function OC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function u1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function c1(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
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
 */class gr{constructor(e,n,r,s,i=J.min(),o=J.min(),l=rt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new gr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class MC{constructor(e){this.yt=e}}function FC(t){const e=bC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Rd(e,e.limit,"L"):e}/**
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
 */class UC{constructor(){this.Sn=new zC}addToCollectionParentIndex(e,n){return this.Sn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(br.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(br.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class zC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new He(fe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new He(fe.comparator)).toArray()}}/**
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
 */const zy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},h1=41943040;class wt{static withCacheSize(e){return new wt(e,wt.DEFAULT_COLLECTION_PERCENTILE,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */wt.DEFAULT_COLLECTION_PERCENTILE=10,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,wt.DEFAULT=new wt(h1,wt.DEFAULT_COLLECTION_PERCENTILE,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),wt.DISABLED=new wt(-1,0,0);/**
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
 */class gi{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new gi(0)}static ar(){return new gi(-1)}}/**
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
 */const By="LruGarbageCollector",BC=1048576;function $y([t,e],[n,r]){const s=se(t,n);return s===0?se(e,r):s}class $C{constructor(e){this.Pr=e,this.buffer=new He($y),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();$y(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class HC{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){q(By,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){xi(n)?q(By,"Ignoring IndexedDB error during garbage collection: ",n):await Ai(n)}await this.Ar(3e5)})}}class qC{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve($u.ce);const r=new $C(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(zy)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),zy):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,o=Date.now(),this.nthSequenceNumber(e,s))).next(g=>(r=g,l=Date.now(),this.removeTargets(e,r,n))).next(g=>(i=g,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(g=>(h=Date.now(),Ns()<=re.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${g} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g})))}}function WC(t,e){return new qC(t,e)}/**
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
 */class GC{constructor(){this.changes=new Ts(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ct.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class KC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class QC{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ao(r.mutation,s,bt.empty(),_e.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ie()){const s=ts();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=uo();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ts();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ie()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Kn();const o=ko(),l=function(){return ko()}();return n.forEach((u,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof $r)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Ao(f.mutation,h,f.mutation.getFieldMask(),_e.now())):o.set(h.key,bt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>l.set(h,new KC(f,o.get(h)??null))),l))}recalculateAndSaveOverlays(e,n){const r=ko();let s=new Ae((o,l)=>o-l),i=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||bt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const g=(s.get(l.batchId)||ie()).add(u);s=s.insert(l.batchId,g)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,g=WE();f.forEach(m=>{if(!i.has(m)){const w=JE(n.get(m),r.get(m));w!==null&&g.set(m,w),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,g))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return Qx(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):zE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(ts());let l=Ko,u=i;return o.next(h=>M.forEach(h,(f,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),i.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{u=u.insert(f,m)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,ie())).next(f=>({batchId:l,changes:qE(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let s=uo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=uo();return this.indexManager.getCollectionParents(e,i).next(l=>M.forEach(l,u=>{const h=function(g,m){return new Ci(m,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((g,m)=>{o=o.insert(g,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,ct.newInvalidDocument(f)))});let l=uo();return o.forEach((u,h)=>{const f=i.get(u);f!==void 0&&Ao(f.mutation,h,bt.empty(),_e.now()),Gu(n,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class YC{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return M.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:En(s.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(s){return{name:s.name,query:FC(s.bundledQuery),readTime:En(s.readTime)}}(n)),M.resolve()}}/**
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
 */class XC{constructor(){this.overlays=new Ae(G.comparator),this.Lr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ts();return M.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.bt(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=ts(),i=n.length+1,o=new G(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ae((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=ts(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=ts(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return M.resolve(l)}bt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new mC(n,r));let i=this.Lr.get(n);i===void 0&&(i=ie(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
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
 */class JC{constructor(){this.sessionToken=rt.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
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
 */class op{constructor(){this.kr=new He(We.Kr),this.qr=new He(We.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new We(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new We(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new G(new fe([])),r=new We(n,e),s=new We(n,e+1),i=[];return this.qr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new G(new fe([])),r=new We(n,e),s=new We(n,e+1);let i=ie();return this.qr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new We(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class We{constructor(e,n){this.key=e,this.Hr=n}static Kr(e,n){return G.comparator(e.key,n.key)||se(e.Hr,n.Hr)}static Ur(e,n){return se(e.Hr,n.Hr)||G.comparator(e.key,n.key)}}/**
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
 */class ZC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new He(We.Kr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new pC(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Jr=this.Jr.add(new We(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?Yf:this.Yn-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new We(n,0),s=new We(n,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([r,s],o=>{const l=this.Zr(o.Hr);i.push(l)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new He(se);return n.forEach(s=>{const i=new We(s,0),o=new We(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,o],l=>{r=r.add(l.Hr)})}),M.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;G.isDocumentKey(i)||(i=i.child(""));const o=new We(new G(i),0);let l=new He(se);return this.Jr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.Hr)),!0)},o),M.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ue(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return M.forEach(n.mutations,s=>{const i=new We(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Jr=r})}nr(e){}containsKey(e,n){const r=new We(n,0),s=this.Jr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class eR{constructor(e){this.ti=e,this.docs=function(){return new Ae(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():ct.newInvalidDocument(n))}getEntries(e,n){let r=Kn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ct.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Kn();const o=n.path,l=new G(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||kx(Sx(f),r)<=0||(s.has(f.key)||Gu(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){K(9500)}ni(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new tR(this)}getSize(e){return M.resolve(this.size)}}class tR extends GC{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
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
 */class nR{constructor(e){this.persistence=e,this.ri=new Ts(n=>Zf(n),ep),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.ii=0,this.si=new op,this.targetCount=0,this.oi=gi._r()}forEachTarget(e,n){return this.ri.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),M.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new gi(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.lr(n),M.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.si.containsKey(n))}}/**
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
 */class d1{constructor(e,n){this._i={},this.overlays={},this.ai=new $u(0),this.ui=!1,this.ui=!0,this.ci=new JC,this.referenceDelegate=e(this),this.li=new nR(this),this.indexManager=new UC,this.remoteDocumentCache=function(s){return new eR(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new MC(n),this.Pi=new YC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new XC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new ZC(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const s=new rR(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return M.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class rR extends xx{constructor(e){super(),this.currentSequenceNumber=e}}class ap{constructor(e){this.persistence=e,this.Ri=new op,this.Ai=null}static Vi(e){return new ap(e)}get di(){if(this.Ai)return this.Ai;throw K(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.di,r=>{const s=G.fromPath(r);return this.mi(e,s).next(i=>{i||n.removeEntry(s,J.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class fu{constructor(e,n){this.persistence=e,this.fi=new Ts(r=>Nx(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=WC(this,n)}static Vi(e,n){return new fu(e,n)}Ti(){}Ii(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return M.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?M.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,J.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Al(e.data.value)),n}wr(e,n,r){return M.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class lp{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=s}static Es(e,n){let r=ie(),s=ie();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new lp(e,n.fromCache,r,s)}}/**
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
 */class sR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class iR{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return Gk()?8:Cx(dt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new sR;return this.ys(e,n,o).next(l=>{if(i.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>i.result)}ws(e,n,r,s){return r.documentReadCount<this.Vs?(Ns()<=re.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Ps(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),M.resolve()):(Ns()<=re.DEBUG&&q("QueryEngine","Query:",Ps(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(Ns()<=re.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Ps(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,wn(n))):M.resolve())}gs(e,n){if(Py(n))return M.resolve(null);let r=wn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Rd(n,null,"F"),r=wn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ie(...i);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.bs(n,l);return this.Ss(n,h,o,u.readTime)?this.gs(e,Rd(n,null,"F")):this.Ds(e,h,n,u)}))})))}ps(e,n,r,s){return Py(n)||s.isEqual(J.min())?M.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.bs(n,i);return this.Ss(n,o,r,s)?M.resolve(null):(Ns()<=re.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ps(n)),this.Ds(e,o,n,Ix(s,Ko)).next(l=>l))})}bs(e,n){let r=new He($E(e));return n.forEach((s,i)=>{Gu(e,i)&&(r=r.add(i))}),r}Ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return Ns()<=re.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Ps(n)),this.fs.getDocumentsMatchingQuery(e,n,br.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const up="LocalStore",oR=3e8;class aR{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new Ae(se),this.Fs=new Ts(i=>Zf(i),ep),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new QC(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function lR(t,e,n,r){return new aR(t,e,n,r)}async function f1(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=ie();for(const h of s){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Ns:h,removedBatchIds:o,addedBatchIds:l}))})})}function uR(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const g=h.batch,m=g.keys();let w=M.resolve();return m.forEach(k=>{w=w.next(()=>f.getEntry(u,k)).next(N=>{const b=h.docVersions.get(k);ue(b!==null,48541),N.version.compareTo(b)<0&&(g.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))})}),w.next(()=>l.mutationQueue.removeMutationBatch(u,g))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ie();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function p1(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function cR(t,e){const n=Z(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const l=[];e.targetChanges.forEach((f,g)=>{const m=s.get(g);if(!m)return;l.push(n.li.removeMatchingKeys(i,f.removedDocuments,g).next(()=>n.li.addMatchingKeys(i,f.addedDocuments,g)));let w=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?w=w.withResumeToken(rt.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):f.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(f.resumeToken,r)),s=s.insert(g,w),function(N,b,S){return N.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=oR?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(m,w,f)&&l.push(n.li.updateTargetData(i,w))});let u=Kn(),h=ie();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(hR(i,o,e.documentUpdates).next(f=>{u=f.Bs,h=f.Ls})),!r.isEqual(J.min())){const f=n.li.getLastRemoteSnapshotVersion(i).next(g=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(n.vs=s,i))}function hR(t,e,n){let r=ie(),s=ie();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Kn();return n.forEach((l,u)=>{const h=i.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):q(up,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Bs:o,Ls:s}})}function dR(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Yf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function fR(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.li.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):n.li.allocateTargetId(r).next(o=>(s=new gr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function jd(t,e,n){const r=Z(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!xi(o))throw o;q(up,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function Hy(t,e,n){const r=Z(t);let s=J.min(),i=ie();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const g=Z(u),m=g.Fs.get(f);return m!==void 0?M.resolve(g.vs.get(m)):g.li.getTargetData(h,f)}(r,o,wn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:J.min(),n?i:ie())).next(l=>(pR(r,Jx(e),l),{documents:l,ks:i})))}function pR(t,e,n){let r=t.Ms.get(e)||J.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ms.set(e,r)}class qy{constructor(){this.activeTargetIds=sC()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class mR{constructor(){this.vo=new qy,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new qy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class gR{Mo(e){}shutdown(){}}/**
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
 */const Wy="ConnectivityMonitor";class Gy{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){q(Wy,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){q(Wy,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ll=null;function Vd(){return ll===null?ll=function(){return 268435456+Math.round(2147483648*Math.random())}():ll++,"0x"+ll.toString(16)}/**
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
 */const mh="RestConnection",yR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class _R{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===lu?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=Vd(),l=this.Qo(e,n.toUriEncodedString());q(mh,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,i);const{host:h}=new URL(l),f=zr(h);return this.zo(e,l,u,r,f).then(g=>(q(mh,`Received RPC '${e}' ${o}: `,g),g),g=>{throw di(mh,`RPC '${e}' ${o} failed with error: `,g,"url: ",l,"request:",r),g})}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ki}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,n){const r=yR[e];let s=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class vR{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const at="WebChannelConnection",no=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Js extends _R{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Js.c_){const e=vE();no(e,_E.STAT_EVENT,n=>{n.stat===Td.PROXY?q(at,"STAT_EVENT: detected buffering proxy"):n.stat===Td.NOPROXY&&q(at,"STAT_EVENT: detected no buffering proxy")}),Js.c_=!0}}zo(e,n,r,s,i){const o=Vd();return new Promise((l,u)=>{const h=new gE;h.setWithCredentials(!0),h.listenOnce(yE.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case kl.NO_ERROR:const g=h.getResponseJson();q(at,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(g)),l(g);break;case kl.TIMEOUT:q(at,`RPC '${e}' ${o} timed out`),u(new $(O.DEADLINE_EXCEEDED,"Request time out"));break;case kl.HTTP_ERROR:const m=h.getStatus();if(q(at,`RPC '${e}' ${o} failed with status:`,m,"response text:",h.getResponseText()),m>0){let w=h.getResponseJson();Array.isArray(w)&&(w=w[0]);const k=w==null?void 0:w.error;if(k&&k.status&&k.message){const N=function(S){const I=S.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(I)>=0?I:O.UNKNOWN}(k.status);u(new $(N,k.message))}else u(new $(O.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new $(O.UNAVAILABLE,"Connection failed."));break;default:K(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{q(at,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);q(at,`RPC '${e}' ${o} sending request:`,s),h.send(n,"POST",f,r,15)})}T_(e,n,r){const s=Vd(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=i.join("");q(at,`Creating RPC '${e}' stream ${s}: ${h}`,l);const f=o.createWebChannel(h,l);this.I_(f);let g=!1,m=!1;const w=new vR({Ho:k=>{m?q(at,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(g||(q(at,`Opening RPC '${e}' stream ${s} transport.`),f.open(),g=!0),q(at,`RPC '${e}' stream ${s} sending:`,k),f.send(k))},Jo:()=>f.close()});return no(f,lo.EventType.OPEN,()=>{m||(q(at,`RPC '${e}' stream ${s} transport opened.`),w.i_())}),no(f,lo.EventType.CLOSE,()=>{m||(m=!0,q(at,`RPC '${e}' stream ${s} transport closed`),w.o_(),this.E_(f))}),no(f,lo.EventType.ERROR,k=>{m||(m=!0,di(at,`RPC '${e}' stream ${s} transport errored. Name:`,k.name,"Message:",k.message),w.o_(new $(O.UNAVAILABLE,"The operation could not be completed")))}),no(f,lo.EventType.MESSAGE,k=>{var N;if(!m){const b=k.data[0];ue(!!b,16349);const S=b,I=(S==null?void 0:S.error)||((N=S[0])==null?void 0:N.error);if(I){q(at,`RPC '${e}' stream ${s} received error:`,I);const x=I.status;let j=function(_){const y=Ve[_];if(y!==void 0)return e1(y)}(x),R=I.message;j===void 0&&(j=O.INTERNAL,R="Unknown error status: "+x+" with message "+I.message),m=!0,w.o_(new $(j,R)),f.close()}else q(at,`RPC '${e}' stream ${s} received:`,b),w.__(b)}}),Js.u_(),setTimeout(()=>{w.s_()},0),w}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return wE()}}/**
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
 */function wR(t){return new Js(t)}function gh(){return typeof document<"u"?document:null}/**
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
 */function Ju(t){return new SC(t,!0)}/**
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
 */Js.c_=!1;class m1{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const Ky="PersistentStream";class g1{constructor(e,n,r,s,i,o,l,u){this.Ci=e,this.b_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new m1(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(Gn(n.toString()),Gn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new $(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.H_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return q(Ky,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(q(Ky,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ER extends g1{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=xC(this.serializer,e),r=function(i){if(!("targetChange"in i))return J.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?En(o.readTime):J.min()}(e);return this.listener.J_(n,r)}Z_(e){const n={};n.database=Dd(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=xd(u)?{documents:NC(i,u)}:{query:PC(i,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=r1(i,o.resumeToken);const h=Nd(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(J.min())>0){l.readTime=du(i,o.snapshotVersion.toTimestamp());const h=Nd(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=DC(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=Dd(this.serializer),n.removeTarget=e,this.K_(n)}}class TR extends g1{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}H_(e){return ue(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ue(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ue(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=RC(e.writeResults,e.commitTime),r=En(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Dd(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>CC(this.serializer,r))};this.K_(n)}}/**
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
 */class IR{}class SR extends IR{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new $(O.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,Pd(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(O.UNKNOWN,i.toString())})}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,Pd(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(O.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function kR(t,e,n,r){return new SR(t,e,n,r)}class AR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Gn(n),this.aa=!1):q("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const gs="RemoteStore";class xR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{Is(this)&&(q(gs,"Restarting streams for network reachability change."),await async function(u){const h=Z(u);h.Ea.add(4),await _a(h),h.Va.set("Unknown"),h.Ea.delete(4),await Zu(h)}(this))})}),this.Va=new AR(r,s)}}async function Zu(t){if(Is(t))for(const e of t.Ra)await e(!0)}async function _a(t){for(const e of t.Ra)await e(!1)}function y1(t,e){const n=Z(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),fp(n)?dp(n):Ri(n).O_()&&hp(n,e))}function cp(t,e){const n=Z(t),r=Ri(n);n.Ia.delete(e),r.O_()&&_1(n,e),n.Ia.size===0&&(r.O_()?r.L_():Is(n)&&n.Va.set("Unknown"))}function hp(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ri(t).Z_(e)}function _1(t,e){t.da.$e(e),Ri(t).X_(e)}function dp(t){t.da=new wC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Ri(t).start(),t.Va.ua()}function fp(t){return Is(t)&&!Ri(t).x_()&&t.Ia.size>0}function Is(t){return Z(t).Ea.size===0}function v1(t){t.da=void 0}async function CR(t){t.Va.set("Online")}async function RR(t){t.Ia.forEach((e,n)=>{hp(t,e)})}async function NR(t,e){v1(t),fp(t)?(t.Va.ha(e),dp(t)):t.Va.set("Unknown")}async function PR(t,e,n){if(t.Va.set("Online"),e instanceof n1&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ia.delete(l),s.da.removeTarget(l))}(t,e)}catch(r){q(gs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await pu(t,r)}else if(e instanceof Rl?t.da.Xe(e):e instanceof t1?t.da.st(e):t.da.tt(e),!n.isEqual(J.min()))try{const r=await p1(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.da.Tt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ia.get(h);f&&i.Ia.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=i.Ia.get(u);if(!f)return;i.Ia.set(u,f.withResumeToken(rt.EMPTY_BYTE_STRING,f.snapshotVersion)),_1(i,u);const g=new gr(f.target,u,h,f.sequenceNumber);hp(i,g)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){q(gs,"Failed to raise snapshot:",r),await pu(t,r)}}async function pu(t,e,n){if(!xi(e))throw e;t.Ea.add(1),await _a(t),t.Va.set("Offline"),n||(n=()=>p1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q(gs,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Zu(t)})}function w1(t,e){return e().catch(n=>pu(t,n,e))}async function ec(t){const e=Z(t),n=Lr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Yf;for(;bR(e);)try{const s=await dR(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,DR(e,s)}catch(s){await pu(e,s)}E1(e)&&T1(e)}function bR(t){return Is(t)&&t.Ta.length<10}function DR(t,e){t.Ta.push(e);const n=Lr(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function E1(t){return Is(t)&&!Lr(t).x_()&&t.Ta.length>0}function T1(t){Lr(t).start()}async function jR(t){Lr(t).ra()}async function VR(t){const e=Lr(t);for(const n of t.Ta)e.ea(n.mutations)}async function LR(t,e,n){const r=t.Ta.shift(),s=rp.from(r,e,n);await w1(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ec(t)}async function OR(t,e){e&&Lr(t).Y_&&await async function(r,s){if(function(o){return yC(o)&&o!==O.ABORTED}(s.code)){const i=r.Ta.shift();Lr(r).B_(),await w1(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ec(r)}}(t,e),E1(t)&&T1(t)}async function Qy(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),q(gs,"RemoteStore received new credentials");const r=Is(n);n.Ea.add(3),await _a(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Zu(n)}async function MR(t,e){const n=Z(t);e?(n.Ea.delete(2),await Zu(n)):e||(n.Ea.add(2),await _a(n),n.Va.set("Unknown"))}function Ri(t){return t.ma||(t.ma=function(n,r,s){const i=Z(n);return i.sa(),new ER(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:CR.bind(null,t),Yo:RR.bind(null,t),t_:NR.bind(null,t),J_:PR.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),fp(t)?dp(t):t.Va.set("Unknown")):(await t.ma.stop(),v1(t))})),t.ma}function Lr(t){return t.fa||(t.fa=function(n,r,s){const i=Z(n);return i.sa(),new TR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:jR.bind(null,t),t_:OR.bind(null,t),ta:VR.bind(null,t),na:LR.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await ec(t)):(await t.fa.stop(),t.Ta.length>0&&(q(gs,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class pp{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new zn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new pp(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mp(t,e){if(Gn("AsyncQueue",`${e}: ${t}`),xi(t))return new $(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Zs{static emptySet(e){return new Zs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=uo(),this.sortedSet=new Ae(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Zs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Zs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Yy{constructor(){this.ga=new Ae(G.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):K(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class yi{constructor(e,n,r,s,i,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new yi(e,n,Zs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class FR{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class UR{constructor(){this.queries=Xy(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=Z(n),i=s.queries;s.queries=Xy(),i.forEach((o,l)=>{for(const u of l.ba)u.onError(r)})})(this,new $(O.ABORTED,"Firestore shutting down"))}}function Xy(){return new Ts(t=>BE(t),Wu)}async function I1(t,e){const n=Z(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.Da()&&(r=2):(i=new FR,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=mp(o,`Initialization of query '${Ps(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.ba.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&gp(n)}async function S1(t,e){const n=Z(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ba.indexOf(e);o>=0&&(i.ba.splice(o,1),i.ba.length===0?s=e.Da()?0:1:!i.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function zR(t,e){const n=Z(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.ba)l.Fa(s)&&(r=!0);o.wa=s}}r&&gp(n)}function BR(t,e,n){const r=Z(t),s=r.queries.get(e);if(s)for(const i of s.ba)i.onError(n);r.queries.delete(e)}function gp(t){t.Ca.forEach(e=>{e.next()})}var Ld,Jy;(Jy=Ld||(Ld={})).Ma="default",Jy.Cache="cache";class k1{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new yi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=yi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Ld.Cache}}/**
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
 */class A1{constructor(e){this.key=e}}class x1{constructor(e){this.key=e}}class $R{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ie(),this.mutatedKeys=ie(),this.eu=$E(e),this.tu=new Zs(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new Yy,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,g)=>{const m=s.get(f),w=Gu(this.query,g)?g:null,k=!!m&&this.mutatedKeys.has(m.key),N=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let b=!1;m&&w?m.data.isEqual(w.data)?k!==N&&(r.track({type:3,doc:w}),b=!0):this.su(m,w)||(r.track({type:2,doc:w}),b=!0,(u&&this.eu(w,u)>0||h&&this.eu(w,h)<0)&&(l=!0)):!m&&w?(r.track({type:0,doc:w}),b=!0):m&&!w&&(r.track({type:1,doc:m}),b=!0,(u||h)&&(l=!0)),b&&(w?(o=o.add(w),i=N?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Ss:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,g)=>function(w,k){const N=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K(20277,{Vt:b})}};return N(w)-N(k)}(f.type,g.type)||this.eu(f.doc,g.doc)),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],u=this.Ya.size===0&&this.current&&!s?1:0,h=u!==this.Xa;return this.Xa=u,o.length!==0||h?{snapshot:new yi(this.query,e.tu,i,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Yy,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=ie(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new x1(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new A1(r))}),n}cu(e){this.Za=e.ks,this.Ya=ie();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return yi.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const yp="SyncEngine";class HR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class qR{constructor(e){this.key=e,this.hu=!1}}class WR{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Ts(l=>BE(l),Wu),this.Iu=new Map,this.Eu=new Set,this.Ru=new Ae(G.comparator),this.Au=new Map,this.Vu=new op,this.du={},this.mu=new Map,this.fu=gi.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function GR(t,e,n=!0){const r=D1(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await C1(r,e,n,!0),s}async function KR(t,e){const n=D1(t);await C1(n,e,!0,!1)}async function C1(t,e,n,r){const s=await fR(t.localStore,wn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await QR(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&y1(t.remoteStore,s),l}async function QR(t,e,n,r,s){t.pu=(g,m,w)=>async function(N,b,S,I){let x=b.view.ru(S);x.Ss&&(x=await Hy(N.localStore,b.query,!1).then(({documents:_})=>b.view.ru(_,x)));const j=I&&I.targetChanges.get(b.targetId),R=I&&I.targetMismatches.get(b.targetId)!=null,L=b.view.applyChanges(x,N.isPrimaryClient,j,R);return e_(N,b.targetId,L.au),L.snapshot}(t,g,m,w);const i=await Hy(t.localStore,e,!0),o=new $R(e,i.ks),l=o.ru(i.documents),u=ya.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,u);e_(t,n,h.au);const f=new HR(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function YR(t,e,n){const r=Z(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!Wu(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await jd(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&cp(r.remoteStore,s.targetId),Od(r,s.targetId)}).catch(Ai)):(Od(r,s.targetId),await jd(r.localStore,s.targetId,!0))}async function XR(t,e){const n=Z(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),cp(n.remoteStore,r.targetId))}async function JR(t,e,n){const r=i2(t);try{const s=await function(o,l){const u=Z(o),h=_e.now(),f=l.reduce((w,k)=>w.add(k.key),ie());let g,m;return u.persistence.runTransaction("Locally write mutations","readwrite",w=>{let k=Kn(),N=ie();return u.xs.getEntries(w,f).next(b=>{k=b,k.forEach((S,I)=>{I.isValidDocument()||(N=N.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(w,k)).next(b=>{g=b;const S=[];for(const I of l){const x=dC(I,g.get(I.key).overlayedDocument);x!=null&&S.push(new $r(I.key,x,jE(x.value.mapValue),xt.exists(!0)))}return u.mutationQueue.addMutationBatch(w,h,S,l)}).next(b=>{m=b;const S=b.applyToLocalDocumentSet(g,N);return u.documentOverlayCache.saveOverlays(w,b.batchId,S)})}).then(()=>({batchId:m.batchId,changes:qE(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let h=o.du[o.currentUser.toKey()];h||(h=new Ae(se)),h=h.insert(l,u),o.du[o.currentUser.toKey()]=h}(r,s.batchId,n),await va(r,s.changes),await ec(r.remoteStore)}catch(s){const i=mp(s,"Failed to persist write");n.reject(i)}}async function R1(t,e){const n=Z(t);try{const r=await cR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(ue(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?ue(o.hu,14607):s.removedDocuments.size>0&&(ue(o.hu,42227),o.hu=!1))}),await va(n,r,e)}catch(r){await Ai(r)}}function Zy(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=Z(o);u.onlineState=l;let h=!1;u.queries.forEach((f,g)=>{for(const m of g.ba)m.va(l)&&(h=!0)}),h&&gp(u)}(r.eventManager,e),s.length&&r.Pu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ZR(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Ae(G.comparator);o=o.insert(i,ct.newNoDocument(i,J.min()));const l=ie().add(i),u=new Xu(J.min(),new Map,new Ae(se),o,l);await R1(r,u),r.Ru=r.Ru.remove(i),r.Au.delete(e),_p(r)}else await jd(r.localStore,e,!1).then(()=>Od(r,e,n)).catch(Ai)}async function e2(t,e){const n=Z(t),r=e.batch.batchId;try{const s=await uR(n.localStore,e);P1(n,r,null),N1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await va(n,s)}catch(s){await Ai(s)}}async function t2(t,e,n){const r=Z(t);try{const s=await function(o,l){const u=Z(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(g=>(ue(g!==null,37113),f=g.keys(),u.mutationQueue.removeMutationBatch(h,g))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);P1(r,e,n),N1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await va(r,s)}catch(s){await Ai(s)}}function N1(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function P1(t,e,n){const r=Z(t);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function Od(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||b1(t,r)})}function b1(t,e){t.Eu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(cp(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),_p(t))}function e_(t,e,n){for(const r of n)r instanceof A1?(t.Vu.addReference(r.key,e),n2(t,r)):r instanceof x1?(q(yp,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||b1(t,r.key)):K(19791,{wu:r})}function n2(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Eu.has(r)||(q(yp,"New document in limbo: "+n),t.Eu.add(r),_p(t))}function _p(t){for(;t.Eu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new G(fe.fromString(e)),r=t.fu.next();t.Au.set(r,new qR(n)),t.Ru=t.Ru.insert(n,r),y1(t.remoteStore,new gr(wn(tp(n.path)),r,"TargetPurposeLimboResolution",$u.ce))}}async function va(t,e,n){const r=Z(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const g=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(h){s.push(h);const g=lp.Es(u.targetId,h);i.push(g)}}))}),await Promise.all(o),r.Pu.J_(s),await async function(u,h){const f=Z(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>M.forEach(h,m=>M.forEach(m.Ts,w=>f.persistence.referenceDelegate.addReference(g,m.targetId,w)).next(()=>M.forEach(m.Is,w=>f.persistence.referenceDelegate.removeReference(g,m.targetId,w)))))}catch(g){if(!xi(g))throw g;q(up,"Failed to update sequence numbers: "+g)}for(const g of h){const m=g.targetId;if(!g.fromCache){const w=f.vs.get(m),k=w.snapshotVersion,N=w.withLastLimboFreeSnapshotVersion(k);f.vs=f.vs.insert(m,N)}}}(r.localStore,i))}async function r2(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){q(yp,"User change. New user:",e.toKey());const r=await f1(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(l=>{l.forEach(u=>{u.reject(new $(O.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await va(n,r.Ns)}}function s2(t,e){const n=Z(t),r=n.Au.get(e);if(r&&r.hu)return ie().add(r.key);{let s=ie();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const l=n.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function D1(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=R1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=s2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ZR.bind(null,e),e.Pu.J_=zR.bind(null,e.eventManager),e.Pu.yu=BR.bind(null,e.eventManager),e}function i2(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=e2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=t2.bind(null,e),e}class mu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ju(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return lR(this.persistence,new iR,e.initialUser,this.serializer)}Cu(e){return new d1(ap.Vi,this.serializer)}Du(e){return new mR}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}mu.provider={build:()=>new mu};class o2 extends mu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){ue(this.persistence.referenceDelegate instanceof fu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new HC(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?wt.withCacheSize(this.cacheSizeBytes):wt.DEFAULT;return new d1(r=>fu.Vi(r,n),this.serializer)}}class Md{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Zy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=r2.bind(null,this.syncEngine),await MR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new UR}()}createDatastore(e){const n=Ju(e.databaseInfo.databaseId),r=wR(e.databaseInfo);return kR(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new xR(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Zy(this.syncEngine,n,0),function(){return Gy.v()?new Gy:new gR}())}createSyncEngine(e,n){return function(s,i,o,l,u,h,f){const g=new WR(s,i,o,l,u,h);return f&&(g.gu=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=Z(s);q(gs,"RemoteStore shutting down."),i.Ea.add(5),await _a(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Md.provider={build:()=>new Md};/**
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
 */class j1{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Gn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Or="FirestoreClient";class a2{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=lt.UNAUTHENTICATED,this.clientId=Qf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{q(Or,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q(Or,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=mp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function yh(t,e){t.asyncQueue.verifyOperationInProgress(),q(Or,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await f1(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function t_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await l2(t);q(Or,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Qy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Qy(e.remoteStore,s)),t._onlineComponents=e}async function l2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q(Or,"Using user provided OfflineComponentProvider");try{await yh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===O.FAILED_PRECONDITION||s.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;di("Error using user provided cache. Falling back to memory cache: "+n),await yh(t,new mu)}}else q(Or,"Using default OfflineComponentProvider"),await yh(t,new o2(void 0));return t._offlineComponents}async function V1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q(Or,"Using user provided OnlineComponentProvider"),await t_(t,t._uninitializedComponentsProvider._online)):(q(Or,"Using default OnlineComponentProvider"),await t_(t,new Md))),t._onlineComponents}function u2(t){return V1(t).then(e=>e.syncEngine)}async function L1(t){const e=await V1(t),n=e.eventManager;return n.onListen=GR.bind(null,e.syncEngine),n.onUnlisten=YR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=KR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=XR.bind(null,e.syncEngine),n}function c2(t,e,n={}){const r=new zn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,h){const f=new j1({next:m=>{f.Nu(),o.enqueueAndForget(()=>S1(i,g));const w=m.docs.has(l);!w&&m.fromCache?h.reject(new $(O.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&m.fromCache&&u&&u.source==="server"?h.reject(new $(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),g=new k1(tp(l.path),f,{includeMetadataChanges:!0,Ka:!0});return I1(i,g)}(await L1(t),t.asyncQueue,e,n,r)),r.promise}function h2(t,e,n={}){const r=new zn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,h){const f=new j1({next:m=>{f.Nu(),o.enqueueAndForget(()=>S1(i,g)),m.fromCache&&u.source==="server"?h.reject(new $(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),g=new k1(l,f,{includeMetadataChanges:!0,Ka:!0});return I1(i,g)}(await L1(t),t.asyncQueue,e,n,r)),r.promise}function d2(t,e){const n=new zn;return t.asyncQueue.enqueueAndForget(async()=>JR(await u2(t),e,n)),n.promise}/**
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
 */function O1(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const f2="ComponentProvider",n_=new Map;function p2(t,e,n,r,s){return new Dx(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,O1(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const M1="firestore.googleapis.com",r_=!0;class s_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new $(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=M1,this.ssl=r_}else this.host=e.host,this.ssl=e.ssl??r_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=h1;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<BC)throw new $(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Tx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=O1(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new $(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new $(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new $(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class tc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new s_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new s_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new dx;switch(r.type){case"firstParty":return new gx(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=n_.get(n);r&&(q(f2,"Removing Datastore"),n_.delete(n),r.terminate())}(this),Promise.resolve()}}function m2(t,e,n,r={}){var h;t=Sn(t,tc);const s=zr(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&($f(`https://${l}`),Hf("Firestore",!0)),i.host!==M1&&i.host!==l&&di("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!fs(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,g;if(typeof r.mockUserToken=="string")f=r.mockUserToken,g=lt.MOCK_USER;else{f=uE(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new $(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new lt(m)}t._authCredentials=new fx(new TE(f,g))}}/**
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
 */class Ss{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ss(this.firestore,e,this._query)}}class Fe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Fe(this.firestore,e,this._key)}toJSON(){return{type:Fe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ma(n,Fe._jsonSchema))return new Fe(e,r||null,new G(fe.fromString(n.referencePath)))}}Fe._jsonSchemaVersion="firestore/documentReference/1.0",Fe._jsonSchema={type:Me("string",Fe._jsonSchemaVersion),referencePath:Me("string")};class Cr extends Ss{constructor(e,n,r){super(e,n,tp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Fe(this.firestore,null,new G(e))}withConverter(e){return new Cr(this.firestore,e,this._path)}}function Wt(t,e,...n){if(t=ke(t),IE("collection","path",e),t instanceof tc){const r=fe.fromString(e,...n);return yy(r),new Cr(t,null,r)}{if(!(t instanceof Fe||t instanceof Cr))throw new $(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return yy(r),new Cr(t.firestore,null,r)}}function Be(t,e,...n){if(t=ke(t),arguments.length===1&&(e=Qf.newId()),IE("doc","path",e),t instanceof tc){const r=fe.fromString(e,...n);return gy(r),new Fe(t,null,new G(r))}{if(!(t instanceof Fe||t instanceof Cr))throw new $(O.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return gy(r),new Fe(t.firestore,t instanceof Cr?t.converter:null,new G(r))}}/**
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
 */const i_="AsyncQueue";class o_{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new m1(this,"async_queue_retry"),this._c=()=>{const r=gh();r&&q(i_,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=gh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=gh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new zn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!xi(e))throw e;q(i_,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Gn("INTERNAL UNHANDLED ERROR: ",a_(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=pp.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&K(47125,{Pc:a_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function a_(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class ks extends tc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new o_,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new o_(e),this._firestoreClient=void 0,await e}}}function g2(t,e){const n=typeof t=="object"?t:Gf(),r=typeof t=="string"?t:lu,s=zu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=oE("firestore");i&&m2(s,...i)}return s}function nc(t){if(t._terminated)throw new $(O.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||y2(t),t._firestoreClient}function y2(t){var r,s,i,o;const e=t._freezeSettings(),n=p2(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new a2(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(t._componentsProvider))}/**
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
 */class $t{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $t(rt.fromBase64String(e))}catch(n){throw new $(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new $t(rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:$t._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ma(e,$t._jsonSchema))return $t.fromBase64String(e.bytes)}}$t._jsonSchemaVersion="firestore/bytes/1.0",$t._jsonSchema={type:Me("string",$t._jsonSchemaVersion),bytes:Me("string")};/**
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
 */class rc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class sc{constructor(e){this._methodName=e}}/**
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
 */class Tn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Tn._jsonSchemaVersion}}static fromJSON(e){if(ma(e,Tn._jsonSchema))return new Tn(e.latitude,e.longitude)}}Tn._jsonSchemaVersion="firestore/geoPoint/1.0",Tn._jsonSchema={type:Me("string",Tn._jsonSchemaVersion),latitude:Me("number"),longitude:Me("number")};/**
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
 */class sn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:sn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ma(e,sn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new sn(e.vectorValues);throw new $(O.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}sn._jsonSchemaVersion="firestore/vectorValue/1.0",sn._jsonSchema={type:Me("string",sn._jsonSchemaVersion),vectorValues:Me("object")};/**
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
 */const _2=/^__.*__$/;class v2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new $r(e,this.data,this.fieldMask,n,this.fieldTransforms):new ga(e,this.data,n,this.fieldTransforms)}}class F1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new $r(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function U1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K(40011,{dataSource:t})}}class vp{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new vp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return gu(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(U1(this.dataSource)&&_2.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class w2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ju(e)}createContext(e,n,r,s=!1){return new vp({dataSource:e,methodName:n,targetDoc:r,path:et.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ic(t){const e=t._freezeSettings(),n=Ju(t._databaseId);return new w2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function z1(t,e,n,r,s,i={}){const o=t.createContext(i.merge||i.mergeFields?2:0,e,n,s);Ep("Data must be an object, but it was:",o,r);const l=H1(r,o);let u,h;if(i.merge)u=new bt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const g of i.mergeFields){const m=_i(e,g,n);if(!o.contains(m))throw new $(O.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);G1(f,m)||f.push(m)}u=new bt(f),h=o.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,h=o.fieldTransforms;return new v2(new Tt(l),u,h)}class oc extends sc{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof oc}}class wp extends sc{_toFieldTransform(e){return new lC(e.path,new Zo)}isEqual(e){return e instanceof wp}}function B1(t,e,n,r){const s=t.createContext(1,e,n);Ep("Data must be an object, but it was:",s,r);const i=[],o=Tt.empty();Br(r,(u,h)=>{const f=W1(e,u,n);h=ke(h);const g=s.childContextForFieldPath(f);if(h instanceof oc)i.push(f);else{const m=wa(h,g);m!=null&&(i.push(f),o.set(f,m))}});const l=new bt(i);return new F1(o,l,s.fieldTransforms)}function $1(t,e,n,r,s,i){const o=t.createContext(1,e,n),l=[_i(e,r,n)],u=[s];if(i.length%2!=0)throw new $(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(_i(e,i[m])),u.push(i[m+1]);const h=[],f=Tt.empty();for(let m=l.length-1;m>=0;--m)if(!G1(h,l[m])){const w=l[m];let k=u[m];k=ke(k);const N=o.childContextForFieldPath(w);if(k instanceof oc)h.push(w);else{const b=wa(k,N);b!=null&&(h.push(w),f.set(w,b))}}const g=new bt(h);return new F1(f,g,o.fieldTransforms)}function E2(t,e,n,r=!1){return wa(n,t.createContext(r?4:3,e))}function wa(t,e){if(q1(t=ke(t)))return Ep("Unsupported field value:",e,t),H1(t,e);if(t instanceof sc)return function(r,s){if(!U1(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=wa(l,s.childContextForArray(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ke(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return iC(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=_e.fromDate(r);return{timestampValue:du(s.serializer,i)}}if(r instanceof _e){const i=new _e(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:du(s.serializer,i)}}if(r instanceof Tn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof $t)return{bytesValue:r1(s.serializer,r._byteString)};if(r instanceof Fe){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ip(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof sn)return function(o,l){const u=o instanceof sn?o.toArray():o;return{mapValue:{fields:{[bE]:{stringValue:DE},[uu]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw l.createError("VectorValues must only contain numeric values.");return np(l.serializer,f)})}}}}}}(r,s);if(c1(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${Bu(r)}`)}(t,e)}function H1(t,e){const n={};return AE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Br(t,(r,s)=>{const i=wa(s,e.childContextForField(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function q1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof _e||t instanceof Tn||t instanceof $t||t instanceof Fe||t instanceof sc||t instanceof sn||c1(t))}function Ep(t,e,n){if(!q1(n)||!SE(n)){const r=Bu(n);throw r==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function _i(t,e,n){if((e=ke(e))instanceof rc)return e._internalPath;if(typeof e=="string")return W1(t,e);throw gu("Field path arguments must be of type string or ",t,!1,void 0,n)}const T2=new RegExp("[~\\*/\\[\\]]");function W1(t,e,n){if(e.search(T2)>=0)throw gu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new rc(...e.split("."))._internalPath}catch{throw gu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function gu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new $(O.INVALID_ARGUMENT,l+t+u)}function G1(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class I2{convertValue(e,n="none"){switch(Vr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(jr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw K(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Br(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[uu].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>be(o.doubleValue));return new sn(n)}convertGeoPoint(e){return new Tn(be(e.latitude),be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=qu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Qo(e));default:return null}}convertTimestamp(e){const n=Dr(e);return new _e(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=fe.fromString(e);ue(u1(r),9688,{name:e});const s=new Yo(r.get(1),r.get(3)),i=new G(r.popFirst(5));return s.isEqual(n)||Gn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class K1 extends I2{constructor(e){super(),this.firestore=e}convertBytes(e){return new $t(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Fe(this.firestore,null,n)}}function en(){return new wp("serverTimestamp")}const l_="@firebase/firestore",u_="4.10.0";/**
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
 */class Q1{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Fe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new S2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(_i("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class S2 extends Q1{data(){return super.data()}}/**
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
 */function k2(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Tp{}class Y1 extends Tp{}function Ea(t,e,...n){let r=[];e instanceof Tp&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof Sp).length,l=i.filter(u=>u instanceof Ip).length;if(o>1||o>0&&l>0)throw new $(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Ip extends Y1{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ip(e,n,r)}_apply(e){const n=this._parse(e);return X1(e._query,n),new Ss(e.firestore,e.converter,Cd(e._query,n))}_parse(e){const n=ic(e.firestore);return function(i,o,l,u,h,f,g){let m;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new $(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){h_(g,f);const k=[];for(const N of g)k.push(c_(u,i,N));m={arrayValue:{values:k}}}else m=c_(u,i,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||h_(g,f),m=E2(l,o,g,f==="in"||f==="not-in");return Oe.create(h,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Sp extends Tp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Sp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ln.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)X1(o,u),o=Cd(o,u)}(e._query,n),new Ss(e.firestore,e.converter,Cd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class kp extends Y1{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new kp(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new $(O.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new $(O.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Jo(i,o)}(e._query,this._field,this._direction);return new Ss(e.firestore,e.converter,Xx(e._query,n))}}function Ta(t,e="asc"){const n=e,r=_i("orderBy",t);return kp._create(r,n)}function c_(t,e,n){if(typeof(n=ke(n))=="string"){if(n==="")throw new $(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!zE(e)&&n.indexOf("/")!==-1)throw new $(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(fe.fromString(n));if(!G.isDocumentKey(r))throw new $(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ky(t,new G(r))}if(n instanceof Fe)return ky(t,n._key);throw new $(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Bu(n)}.`)}function h_(t,e){if(!Array.isArray(t)||t.length===0)throw new $(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function X1(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function J1(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class ho{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class is extends Q1{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Nl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(_i("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new $(O.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=is._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}is._jsonSchemaVersion="firestore/documentSnapshot/1.0",is._jsonSchema={type:Me("string",is._jsonSchemaVersion),bundleSource:Me("string","DocumentSnapshot"),bundleName:Me("string"),bundle:Me("string")};class Nl extends is{data(e={}){return super.data(e)}}class ei{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ho(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Nl(this._firestore,this._userDataWriter,r.key,r,new ho(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new Nl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ho(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Nl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ho(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:A2(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new $(O.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ei._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Qf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function A2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K(61501,{type:t})}}/**
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
 */ei._jsonSchemaVersion="firestore/querySnapshot/1.0",ei._jsonSchema={type:Me("string",ei._jsonSchemaVersion),bundleSource:Me("string","QuerySnapshot"),bundleName:Me("string"),bundle:Me("string")};/**
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
 */class x2{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=ic(e)}set(e,n,r){this._verifyNotCommitted();const s=_h(e,this._firestore),i=J1(s.converter,n,r),o=z1(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,xt.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=_h(e,this._firestore);let o;return o=typeof(n=ke(n))=="string"||n instanceof rc?$1(this._dataReader,"WriteBatch.update",i._key,n,r,s):B1(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,xt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=_h(e,this._firestore);return this._mutations=this._mutations.concat(new Yu(n._key,xt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new $(O.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function _h(t,e){if((t=ke(t)).firestore!==e)throw new $(O.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */function Ap(t){t=Sn(t,Fe);const e=Sn(t.firestore,ks),n=nc(e);return c2(n,t._key).then(r=>C2(e,t,r))}function Ia(t){t=Sn(t,Ss);const e=Sn(t.firestore,ks),n=nc(e),r=new K1(e);return k2(t._query),h2(n,t._query).then(s=>new ei(e,r,t,s))}function ac(t,e,n,...r){t=Sn(t,Fe);const s=Sn(t.firestore,ks),i=ic(s);let o;return o=typeof(e=ke(e))=="string"||e instanceof rc?$1(i,"updateDoc",t._key,e,n,r):B1(i,"updateDoc",t._key,e),uc(s,[o.toMutation(t._key,xt.exists(!0))])}function Sa(t){return uc(Sn(t.firestore,ks),[new Yu(t._key,xt.none())])}function lc(t,e){const n=Sn(t.firestore,ks),r=Be(t),s=J1(t.converter,e),i=ic(t.firestore);return uc(n,[z1(i,"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,xt.exists(!1))]).then(()=>r)}function uc(t,e){const n=nc(t);return d2(n,e)}function C2(t,e,n){const r=n.docs.get(e._key),s=new K1(t);return new is(t,s,e._key,r,new ho(n.hasPendingWrites,n.fromCache),e.converter)}function Z1(t){return t=Sn(t,ks),nc(t),new x2(t,e=>uc(t,e))}(function(e,n=!0){hx(Es),ps(new Pr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new ks(new px(r.getProvider("auth-internal")),new yx(o,r.getProvider("app-check-internal")),jx(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),vn(l_,u_,e),vn(l_,u_,"esm2020")})();/**
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
 */const e0="firebasestorage.googleapis.com",t0="storageBucket",R2=2*60*1e3,N2=10*60*1e3;/**
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
 */class Ne extends xn{constructor(e,n,r=0){super(vh(e),`Firebase Storage: ${n} (${vh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ne.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return vh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Re;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Re||(Re={}));function vh(t){return"storage/"+t}function xp(){const t="An unknown error occurred, please check the error payload for server response.";return new Ne(Re.UNKNOWN,t)}function P2(t){return new Ne(Re.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function b2(t){return new Ne(Re.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function D2(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ne(Re.UNAUTHENTICATED,t)}function j2(){return new Ne(Re.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function V2(t){return new Ne(Re.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function L2(){return new Ne(Re.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function O2(){return new Ne(Re.CANCELED,"User canceled the upload/download.")}function M2(t){return new Ne(Re.INVALID_URL,"Invalid URL '"+t+"'.")}function F2(t){return new Ne(Re.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function U2(){return new Ne(Re.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+t0+"' property when initializing the app?")}function z2(){return new Ne(Re.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function B2(){return new Ne(Re.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function $2(t){return new Ne(Re.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Fd(t){return new Ne(Re.INVALID_ARGUMENT,t)}function n0(){return new Ne(Re.APP_DELETED,"The Firebase app was deleted.")}function H2(t){return new Ne(Re.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function xo(t,e){return new Ne(Re.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ro(t){throw new Ne(Re.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Dt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Dt.makeFromUrl(e,n)}catch{return new Dt(e,"")}if(r.path==="")return r;throw F2(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(j){j.path.charAt(j.path.length-1)==="/"&&(j.path_=j.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function h(j){j.path_=decodeURIComponent(j.path)}const f="v[A-Za-z0-9_]+",g=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",w=new RegExp(`^https?://${g}/${f}/b/${s}/o${m}`,"i"),k={bucket:1,path:3},N=n===e0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",S=new RegExp(`^https?://${N}/${s}/${b}`,"i"),x=[{regex:l,indices:u,postModify:i},{regex:w,indices:k,postModify:h},{regex:S,indices:{bucket:1,path:2},postModify:h}];for(let j=0;j<x.length;j++){const R=x[j],L=R.regex.exec(e);if(L){const _=L[R.indices.bucket];let y=L[R.indices.path];y||(y=""),r=new Dt(_,y),R.postModify(r);break}}if(r==null)throw M2(e);return r}}class q2{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function W2(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function u(){return l===2}let h=!1;function f(...b){h||(h=!0,e.apply(null,b))}function g(b){s=setTimeout(()=>{s=null,t(w,u())},b)}function m(){i&&clearTimeout(i)}function w(b,...S){if(h){m();return}if(b){m(),f.call(null,b,...S);return}if(u()||o){m(),f.call(null,b,...S);return}r<64&&(r*=2);let x;l===1?(l=2,x=0):x=(r+Math.random())*1e3,g(x)}let k=!1;function N(b){k||(k=!0,m(),!h&&(s!==null?(b||(l=2),clearTimeout(s),g(0)):b||(l=1)))}return g(0),i=setTimeout(()=>{o=!0,N(!0)},n),N}function G2(t){t(!1)}/**
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
 */function K2(t){return t!==void 0}function Q2(t){return typeof t=="object"&&!Array.isArray(t)}function Cp(t){return typeof t=="string"||t instanceof String}function d_(t){return Rp()&&t instanceof Blob}function Rp(){return typeof Blob<"u"}function f_(t,e,n,r){if(r<e)throw Fd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Fd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Np(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function r0(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var os;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(os||(os={}));/**
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
 */function Y2(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class X2{constructor(e,n,r,s,i,o,l,u,h,f,g,m=!0,w=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=g,this.retry=m,this.isUsingEmulator=w,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((k,N)=>{this.resolve_=k,this.reject_=N,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new ul(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const u=l.loaded,h=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===os.NO_ERROR,u=i.getStatus();if(!l||Y2(u,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===os.ABORT;r(!1,new ul(!1,null,f));return}const h=this.successCodes_.indexOf(u)!==-1;r(!0,new ul(h,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());K2(u)?i(u):i()}catch(u){o(u)}else if(l!==null){const u=xp();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(s.canceled){const u=this.appDelete_?n0():O2();o(u)}else{const u=L2();o(u)}};this.canceled_?n(!1,new ul(!1,null,!0)):this.backoffId_=W2(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&G2(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ul{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function J2(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Z2(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function eN(t,e){e&&(t["X-Firebase-GMPID"]=e)}function tN(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function nN(t,e,n,r,s,i,o=!0,l=!1){const u=r0(t.urlParams),h=t.url+u,f=Object.assign({},t.headers);return eN(f,e),J2(f,n),Z2(f,i),tN(f,r),new X2(h,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,l)}/**
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
 */function rN(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function sN(...t){const e=rN();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Rp())return new Blob(t);throw new Ne(Re.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function iN(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function oN(t){if(typeof atob>"u")throw $2("base-64");return atob(t)}/**
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
 */const gn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class wh{constructor(e,n){this.data=e,this.contentType=n||null}}function aN(t,e){switch(t){case gn.RAW:return new wh(s0(e));case gn.BASE64:case gn.BASE64URL:return new wh(i0(t,e));case gn.DATA_URL:return new wh(uN(e),cN(e))}throw xp()}function s0(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function lN(t){let e;try{e=decodeURIComponent(t)}catch{throw xo(gn.DATA_URL,"Malformed data URL.")}return s0(e)}function i0(t,e){switch(t){case gn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw xo(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case gn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw xo(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=oN(e)}catch(s){throw s.message.includes("polyfill")?s:xo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class o0{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw xo(gn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=hN(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function uN(t){const e=new o0(t);return e.base64?i0(gn.BASE64,e.rest):lN(e.rest)}function cN(t){return new o0(t).contentType}function hN(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class cr{constructor(e,n){let r=0,s="";d_(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(d_(this.data_)){const r=this.data_,s=iN(r,e,n);return s===null?null:new cr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new cr(r,!0)}}static getBlob(...e){if(Rp()){const n=e.map(r=>r instanceof cr?r.data_:r);return new cr(sN.apply(null,n))}else{const n=e.map(o=>Cp(o)?aN(gn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new cr(s,!0)}}uploadData(){return this.data_}}/**
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
 */function a0(t){let e;try{e=JSON.parse(t)}catch{return null}return Q2(e)?e:null}/**
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
 */function dN(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function fN(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function l0(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function pN(t,e){return e}class mt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||pN}}let cl=null;function mN(t){return!Cp(t)||t.length<2?t:l0(t)}function u0(){if(cl)return cl;const t=[];t.push(new mt("bucket")),t.push(new mt("generation")),t.push(new mt("metageneration")),t.push(new mt("name","fullPath",!0));function e(i,o){return mN(o)}const n=new mt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new mt("size");return s.xform=r,t.push(s),t.push(new mt("timeCreated")),t.push(new mt("updated")),t.push(new mt("md5Hash",null,!0)),t.push(new mt("cacheControl",null,!0)),t.push(new mt("contentDisposition",null,!0)),t.push(new mt("contentEncoding",null,!0)),t.push(new mt("contentLanguage",null,!0)),t.push(new mt("contentType",null,!0)),t.push(new mt("metadata","customMetadata",!0)),cl=t,cl}function gN(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Dt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function yN(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return gN(r,t),r}function c0(t,e,n){const r=a0(e);return r===null?null:yN(t,r,n)}function _N(t,e,n,r){const s=a0(e);if(s===null||!Cp(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(h=>{const f=t.bucket,g=t.fullPath,m="/b/"+o(f)+"/o/"+o(g),w=Np(m,n,r),k=r0({alt:"media",token:h});return w+k})[0]}function vN(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class h0{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function d0(t){if(!t)throw xp()}function wN(t,e){function n(r,s){const i=c0(t,s,e);return d0(i!==null),i}return n}function EN(t,e){function n(r,s){const i=c0(t,s,e);return d0(i!==null),_N(i,s,t.host,t._protocol)}return n}function f0(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=j2():s=D2():n.getStatus()===402?s=b2(t.bucket):n.getStatus()===403?s=V2(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function TN(t){const e=f0(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=P2(t.path)),i.serverResponse=s.serverResponse,i}return n}function IN(t,e,n){const r=e.fullServerUrl(),s=Np(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new h0(s,i,EN(t,n),o);return l.errorHandler=TN(e),l}function SN(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function kN(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=SN(null,e)),r}function AN(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let x="";for(let j=0;j<2;j++)x=x+Math.random().toString().slice(2);return x}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const h=kN(e,r,s),f=vN(h,n),g="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+u+`\r
Content-Type: `+h.contentType+`\r
\r
`,m=`\r
--`+u+"--",w=cr.getBlob(g,r,m);if(w===null)throw z2();const k={name:h.fullPath},N=Np(i,t.host,t._protocol),b="POST",S=t.maxUploadRetryTime,I=new h0(N,b,wN(t,n),S);return I.urlParams=k,I.headers=o,I.body=w.uploadData(),I.errorHandler=f0(e),I}class xN{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=os.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=os.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=os.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s,i){if(this.sent_)throw ro("cannot .send() more than once");if(zr(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ro("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ro("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ro("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ro("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class CN extends xN{initXhr(){this.xhr_.responseType="text"}}function p0(){return new CN}/**
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
 */class ys{constructor(e,n){this._service=e,n instanceof Dt?this._location=n:this._location=Dt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ys(e,n)}get root(){const e=new Dt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return l0(this._location.path)}get storage(){return this._service}get parent(){const e=dN(this._location.path);if(e===null)return null;const n=new Dt(this._location.bucket,e);return new ys(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw H2(e)}}function RN(t,e,n){t._throwIfRoot("uploadBytes");const r=AN(t.storage,t._location,u0(),new cr(e,!0),n);return t.storage.makeRequestWithTokens(r,p0).then(s=>({metadata:s,ref:t}))}function NN(t){t._throwIfRoot("getDownloadURL");const e=IN(t.storage,t._location,u0());return t.storage.makeRequestWithTokens(e,p0).then(n=>{if(n===null)throw B2();return n})}function PN(t,e){const n=fN(t._location.path,e),r=new Dt(t._location.bucket,n);return new ys(t.storage,r)}/**
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
 */function bN(t){return/^[A-Za-z]+:\/\//.test(t)}function DN(t,e){return new ys(t,e)}function m0(t,e){if(t instanceof Pp){const n=t;if(n._bucket==null)throw U2();const r=new ys(n,n._bucket);return e!=null?m0(r,e):r}else return e!==void 0?PN(t,e):t}function jN(t,e){if(e&&bN(e)){if(t instanceof Pp)return DN(t,e);throw Fd("To use ref(service, url), the first argument must be a Storage instance.")}else return m0(t,e)}function p_(t,e){const n=e==null?void 0:e[t0];return n==null?null:Dt.makeFromBucketSpec(n,t)}function VN(t,e,n,r={}){t.host=`${e}:${n}`;const s=zr(e);s&&($f(`https://${t.host}/b`),Hf("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:uE(i,t.app.options.projectId))}class Pp{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=e0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=R2,this._maxUploadRetryTime=N2,this._requests=new Set,s!=null?this._bucket=Dt.makeFromBucketSpec(s,this._host):this._bucket=p_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Dt.makeFromBucketSpec(this._url,e):this._bucket=p_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){f_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){f_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Bt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ys(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new q2(n0());{const o=nN(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const m_="@firebase/storage",g_="0.14.0";/**
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
 */const g0="storage";function na(t,e,n){return t=ke(t),RN(t,e,n)}function ra(t){return t=ke(t),NN(t)}function sa(t,e){return t=ke(t),jN(t,e)}function LN(t=Gf(),e){t=ke(t);const r=zu(t,g0).getImmediate({identifier:e}),s=oE("storage");return s&&ON(r,...s),r}function ON(t,e,n,r={}){VN(t,e,n,r)}function MN(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Pp(n,r,s,e,Es)}function FN(){ps(new Pr(g0,MN,"PUBLIC").setMultipleInstances(!0)),vn(m_,g_,""),vn(m_,g_,"esm2020")}FN();var UN="firebase",zN="12.8.0";/**
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
 */vn(UN,zN,"app");function y0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const BN=y0,_0=new fa("auth","Firebase",y0());/**
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
 */const yu=new qf("@firebase/auth");function $N(t,...e){yu.logLevel<=re.WARN&&yu.warn(`Auth (${Es}): ${t}`,...e)}function Pl(t,...e){yu.logLevel<=re.ERROR&&yu.error(`Auth (${Es}): ${t}`,...e)}/**
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
 */function An(t,...e){throw Dp(t,...e)}function on(t,...e){return Dp(t,...e)}function bp(t,e,n){const r={...BN(),[e]:n};return new fa("auth","Firebase",r).create(e,{appName:t.name})}function as(t){return bp(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function HN(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&An(t,"argument-error"),bp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Dp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return _0.create(t,...e)}function Y(t,e,...n){if(!t)throw Dp(e,...n)}function Mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Pl(e),new Error(e)}function Qn(t,e){t||Mn(e)}/**
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
 */function Ud(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function qN(){return y_()==="http:"||y_()==="https:"}function y_(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function WN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qN()||Hk()||"connection"in navigator)?navigator.onLine:!0}function GN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ka{constructor(e,n){this.shortDelay=e,this.longDelay=n,Qn(n>e,"Short delay should be less than long delay!"),this.isMobile=zk()||qk()}get(){return WN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function jp(t,e){Qn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class v0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const KN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const QN=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],YN=new ka(3e4,6e4);function Vp(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Ni(t,e,n,r,s={}){return w0(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=pa({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:u,...i};return $k()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&zr(t.emulatorConfig.host)&&(h.credentials="include"),v0.fetch()(await E0(t,t.config.apiHost,n,l),h)})}async function w0(t,e,n){t._canInitEmulator=!1;const r={...KN,...e};try{const s=new JN(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw hl(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw hl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw hl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw hl(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw bp(t,f,h);An(t,f)}}catch(s){if(s instanceof xn)throw s;An(t,"network-request-failed",{message:String(s)})}}async function XN(t,e,n,r,s={}){const i=await Ni(t,e,n,r,s);return"mfaPendingCredential"in i&&An(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function E0(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?jp(t.config,s):`${t.config.apiScheme}://${s}`;return QN.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class JN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(on(this.auth,"network-request-failed")),YN.get())})}}function hl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=on(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function ZN(t,e){return Ni(t,"POST","/v1/accounts:delete",e)}async function _u(t,e){return Ni(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Co(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function eP(t,e=!1){const n=ke(t),r=await n.getIdToken(e),s=Lp(r);Y(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Co(Eh(s.auth_time)),issuedAtTime:Co(Eh(s.iat)),expirationTime:Co(Eh(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Eh(t){return Number(t)*1e3}function Lp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Pl("JWT malformed, contained fewer than 3 sections"),null;try{const s=sE(n);return s?JSON.parse(s):(Pl("Failed to decode base64 JWT payload"),null)}catch(s){return Pl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function __(t){const e=Lp(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ia(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof xn&&tP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function tP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class nP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class zd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Co(this.lastLoginAt),this.creationTime=Co(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function vu(t){var g;const e=t.auth,n=await t.getIdToken(),r=await ia(t,_u(e,{idToken:n}));Y(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(g=s.providerUserInfo)!=null&&g.length?T0(s.providerUserInfo):[],o=sP(t.providerData,i),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),h=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new zd(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function rP(t){const e=ke(t);await vu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sP(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function T0(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function iP(t,e){const n=await w0(t,{},async()=>{const r=pa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await E0(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&zr(t.emulatorConfig.host)&&(u.credentials="include"),v0.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function oP(t,e){return Ni(t,"POST","/v2/accounts:revokeToken",Vp(t,e))}/**
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
 */class ti{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):__(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const n=__(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await iP(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ti;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Y(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Y(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ti,this.toJSON())}_performRefresh(){return Mn("not implemented")}}/**
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
 */function ir(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class tn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new nP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new zd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ia(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return eP(this,e)}reload(){return rP(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new tn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await vu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Bt(this.auth.app))return Promise.reject(as(this.auth));const e=await this.getIdToken();return await ia(this,ZN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:g,emailVerified:m,isAnonymous:w,providerData:k,stsTokenManager:N}=n;Y(g&&N,e,"internal-error");const b=ti.fromJSON(this.name,N);Y(typeof g=="string",e,"internal-error"),ir(r,e.name),ir(s,e.name),Y(typeof m=="boolean",e,"internal-error"),Y(typeof w=="boolean",e,"internal-error"),ir(i,e.name),ir(o,e.name),ir(l,e.name),ir(u,e.name),ir(h,e.name),ir(f,e.name);const S=new tn({uid:g,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:w,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:b,createdAt:h,lastLoginAt:f});return k&&Array.isArray(k)&&(S.providerData=k.map(I=>({...I}))),u&&(S._redirectEventId=u),S}static async _fromIdTokenResponse(e,n,r=!1){const s=new ti;s.updateFromServerResponse(n);const i=new tn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await vu(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];Y(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?T0(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new ti;l.updateFromIdToken(r);const u=new tn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new zd(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
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
 */const v_=new Map;function Fn(t){Qn(t instanceof Function,"Expected a class definition");let e=v_.get(t);return e?(Qn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,v_.set(t,e),e)}/**
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
 */class I0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}I0.type="NONE";const w_=I0;/**
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
 */function bl(t,e,n){return`firebase:${t}:${e}:${n}`}class ni{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=bl(this.userKey,s.apiKey,i),this.fullPersistenceKey=bl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await _u(this.auth,{idToken:e}).catch(()=>{});return n?tn._fromGetAccountInfoResponse(this.auth,n,e):null}return tn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ni(Fn(w_),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Fn(w_);const o=bl(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){let g;if(typeof f=="string"){const m=await _u(e,{idToken:f}).catch(()=>{});if(!m)break;g=await tn._fromGetAccountInfoResponse(e,m,f)}else g=tn._fromJSON(e,f);h!==i&&(l=g),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new ni(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new ni(i,e,r))}}/**
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
 */function E_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(x0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(S0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(R0(e))return"Blackberry";if(N0(e))return"Webos";if(k0(e))return"Safari";if((e.includes("chrome/")||A0(e))&&!e.includes("edge/"))return"Chrome";if(C0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function S0(t=dt()){return/firefox\//i.test(t)}function k0(t=dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function A0(t=dt()){return/crios\//i.test(t)}function x0(t=dt()){return/iemobile/i.test(t)}function C0(t=dt()){return/android/i.test(t)}function R0(t=dt()){return/blackberry/i.test(t)}function N0(t=dt()){return/webos/i.test(t)}function Op(t=dt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function aP(t=dt()){var e;return Op(t)&&!!((e=window.navigator)!=null&&e.standalone)}function lP(){return Wk()&&document.documentMode===10}function P0(t=dt()){return Op(t)||C0(t)||N0(t)||R0(t)||/windows phone/i.test(t)||x0(t)}/**
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
 */function b0(t,e=[]){let n;switch(t){case"Browser":n=E_(dt());break;case"Worker":n=`${E_(dt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Es}/${r}`}/**
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
 */class uP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function cP(t,e={}){return Ni(t,"GET","/v2/passwordPolicy",Vp(t,e))}/**
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
 */const hP=6;class dP{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??hP,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class fP{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new T_(this),this.idTokenSubscription=new T_(this),this.beforeStateQueue=new uP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Fn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await ni.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await _u(this,{idToken:e}),r=await tn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Bt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await vu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=GN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Bt(this.app))return Promise.reject(as(this));const n=e?ke(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Bt(this.app)?Promise.reject(as(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Bt(this.app)?Promise.reject(as(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await cP(this),n=new dP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new fa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await oP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Fn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await ni.create(this,[Fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=b0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Bt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&$N(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function cc(t){return ke(t)}class T_{constructor(e){this.auth=e,this.observer=null,this.addObserver=eA(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Mp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function pP(t){Mp=t}function mP(t){return Mp.loadJS(t)}function gP(){return Mp.gapiScript}function yP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function _P(t,e){const n=zu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(fs(i,e??{}))return s;An(s,"already-initialized")}return n.initialize({options:e})}function vP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function wP(t,e,n){const r=cc(t);Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=D0(e),{host:o,port:l}=EP(e),u=l===null?"":`:${l}`,h={url:`${i}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Y(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Y(fs(h,r.config.emulator)&&fs(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,zr(o)?($f(`${i}//${o}${u}`),Hf("Auth",!0)):TP()}function D0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function EP(t){const e=D0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:I_(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:I_(o)}}}function I_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function TP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class j0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Mn("not implemented")}_getIdTokenResponse(e){return Mn("not implemented")}_linkToIdToken(e,n){return Mn("not implemented")}_getReauthenticationResolver(e){return Mn("not implemented")}}/**
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
 */async function ri(t,e){return XN(t,"POST","/v1/accounts:signInWithIdp",Vp(t,e))}/**
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
 */const IP="http://localhost";class _s extends j0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new _s(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):An("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new _s(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ri(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ri(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ri(e,n)}buildRequest(){const e={requestUri:IP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=pa(n)}return e}}/**
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
 */class Fp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Aa extends Fp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class hr extends Aa{constructor(){super("facebook.com")}static credential(e){return _s._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hr.credential(e.oauthAccessToken)}catch{return null}}}hr.FACEBOOK_SIGN_IN_METHOD="facebook.com";hr.PROVIDER_ID="facebook.com";/**
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
 */class Vn extends Aa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return _s._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Vn.credential(n,r)}catch{return null}}}Vn.GOOGLE_SIGN_IN_METHOD="google.com";Vn.PROVIDER_ID="google.com";/**
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
 */class dr extends Aa{constructor(){super("github.com")}static credential(e){return _s._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dr.credential(e.oauthAccessToken)}catch{return null}}}dr.GITHUB_SIGN_IN_METHOD="github.com";dr.PROVIDER_ID="github.com";/**
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
 */class fr extends Aa{constructor(){super("twitter.com")}static credential(e,n){return _s._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return fr.credential(n,r)}catch{return null}}}fr.TWITTER_SIGN_IN_METHOD="twitter.com";fr.PROVIDER_ID="twitter.com";/**
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
 */class vi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await tn._fromIdTokenResponse(e,r,s),o=S_(r);return new vi({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=S_(r);return new vi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function S_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class wu extends xn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,wu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new wu(e,n,r,s)}}function V0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?wu._fromErrorAndOperation(t,i,e,r):i})}async function SP(t,e,n=!1){const r=await ia(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vi._forOperation(t,"link",r)}/**
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
 */async function kP(t,e,n=!1){const{auth:r}=t;if(Bt(r.app))return Promise.reject(as(r));const s="reauthenticate";try{const i=await ia(t,V0(r,s,e,t),n);Y(i.idToken,r,"internal-error");const o=Lp(i.idToken);Y(o,r,"internal-error");const{sub:l}=o;return Y(t.uid===l,r,"user-mismatch"),vi._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&An(r,"user-mismatch"),i}}/**
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
 */async function AP(t,e,n=!1){if(Bt(t.app))return Promise.reject(as(t));const r="signIn",s=await V0(t,r,e),i=await vi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function xP(t,e,n,r){return ke(t).onIdTokenChanged(e,n,r)}function CP(t,e,n){return ke(t).beforeAuthStateChanged(e,n)}function RP(t,e,n,r){return ke(t).onAuthStateChanged(e,n,r)}function NP(t){return ke(t).signOut()}const Eu="__sak";/**
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
 */class L0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Eu,"1"),this.storage.removeItem(Eu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const PP=1e3,bP=10;class O0 extends L0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=P0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);lP()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,bP):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},PP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}O0.type="LOCAL";const DP=O0;/**
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
 */class M0 extends L0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}M0.type="SESSION";const F0=M0;/**
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
 */function jP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class hc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new hc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),u=await jP(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hc.receivers=[];/**
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
 */function Up(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class VP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const h=Up("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(g){const m=g;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function In(){return window}function LP(t){In().location.href=t}/**
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
 */function U0(){return typeof In().WorkerGlobalScope<"u"&&typeof In().importScripts=="function"}async function OP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function MP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function FP(){return U0()?self:null}/**
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
 */const z0="firebaseLocalStorageDb",UP=1,Tu="firebaseLocalStorage",B0="fbase_key";class xa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function dc(t,e){return t.transaction([Tu],e?"readwrite":"readonly").objectStore(Tu)}function zP(){const t=indexedDB.deleteDatabase(z0);return new xa(t).toPromise()}function Bd(){const t=indexedDB.open(z0,UP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Tu,{keyPath:B0})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Tu)?e(r):(r.close(),await zP(),e(await Bd()))})})}async function k_(t,e,n){const r=dc(t,!0).put({[B0]:e,value:n});return new xa(r).toPromise()}async function BP(t,e){const n=dc(t,!1).get(e),r=await new xa(n).toPromise();return r===void 0?null:r.value}function A_(t,e){const n=dc(t,!0).delete(e);return new xa(n).toPromise()}const $P=800,HP=3;class $0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>HP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return U0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hc._getInstance(FP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await OP(),!this.activeServiceWorker)return;this.sender=new VP(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||MP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bd();return await k_(e,Eu,"1"),await A_(e,Eu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>k_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>BP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>A_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=dc(s,!1).getAll();return new xa(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$P)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$0.type="LOCAL";const qP=$0;new ka(3e4,6e4);/**
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
 */function H0(t,e){return e?Fn(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class zp extends j0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ri(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ri(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ri(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function WP(t){return AP(t.auth,new zp(t),t.bypassAuthState)}function GP(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),kP(n,new zp(t),t.bypassAuthState)}async function KP(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),SP(n,new zp(t),t.bypassAuthState)}/**
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
 */class q0{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return WP;case"linkViaPopup":case"linkViaRedirect":return KP;case"reauthViaPopup":case"reauthViaRedirect":return GP;default:An(this.auth,"internal-error")}}resolve(e){Qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const QP=new ka(2e3,1e4);async function YP(t,e,n){if(Bt(t.app))return Promise.reject(on(t,"operation-not-supported-in-this-environment"));const r=cc(t);HN(t,e,Fp);const s=H0(r,n);return new ns(r,"signInViaPopup",e,s).executeNotNull()}class ns extends q0{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ns.currentPopupAction&&ns.currentPopupAction.cancel(),ns.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){Qn(this.filter.length===1,"Popup operations only handle one event");const e=Up();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(on(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(on(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ns.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(on(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,QP.get())};e()}}ns.currentPopupAction=null;/**
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
 */const XP="pendingRedirect",Dl=new Map;class JP extends q0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Dl.get(this.auth._key());if(!e){try{const r=await ZP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Dl.set(this.auth._key(),e)}return this.bypassAuthState||Dl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ZP(t,e){const n=nb(e),r=tb(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function eb(t,e){Dl.set(t._key(),e)}function tb(t){return Fn(t._redirectPersistence)}function nb(t){return bl(XP,t.config.apiKey,t.name)}async function rb(t,e,n=!1){if(Bt(t.app))return Promise.reject(as(t));const r=cc(t),s=H0(r,e),o=await new JP(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const sb=10*60*1e3;class ib{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ob(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!W0(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(on(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sb&&this.cachedEventUids.clear(),this.cachedEventUids.has(x_(e))}saveEventToCache(e){this.cachedEventUids.add(x_(e)),this.lastProcessedEventTime=Date.now()}}function x_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function W0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ob(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return W0(t);default:return!1}}/**
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
 */async function ab(t,e={}){return Ni(t,"GET","/v1/projects",e)}/**
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
 */const lb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ub=/^https?/;async function cb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ab(t);for(const n of e)try{if(hb(n))return}catch{}An(t,"unauthorized-domain")}function hb(t){const e=Ud(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ub.test(n))return!1;if(lb.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const db=new ka(3e4,6e4);function C_(){const t=In().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function fb(t){return new Promise((e,n)=>{var s,i,o;function r(){C_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{C_(),n(on(t,"network-request-failed"))},timeout:db.get()})}if((i=(s=In().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=In().gapi)!=null&&o.load)r();else{const l=yP("iframefcb");return In()[l]=()=>{gapi.load?r():n(on(t,"network-request-failed"))},mP(`${gP()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw jl=null,e})}let jl=null;function pb(t){return jl=jl||fb(t),jl}/**
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
 */const mb=new ka(5e3,15e3),gb="__/auth/iframe",yb="emulator/auth/iframe",_b={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wb(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?jp(e,yb):`https://${t.config.authDomain}/${gb}`,r={apiKey:e.apiKey,appName:t.name,v:Es},s=vb.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${pa(r).slice(1)}`}async function Eb(t){const e=await pb(t),n=In().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:wb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_b,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=on(t,"network-request-failed"),l=In().setTimeout(()=>{i(o)},mb.get());function u(){In().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const Tb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ib=500,Sb=600,kb="_blank",Ab="http://localhost";class R_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xb(t,e,n,r=Ib,s=Sb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...Tb,width:r.toString(),height:s.toString(),top:i,left:o},h=dt().toLowerCase();n&&(l=A0(h)?kb:n),S0(h)&&(e=e||Ab,u.scrollbars="yes");const f=Object.entries(u).reduce((m,[w,k])=>`${m}${w}=${k},`,"");if(aP(h)&&l!=="_self")return Cb(e||"",l),new R_(null);const g=window.open(e||"",l,f);Y(g,t,"popup-blocked");try{g.focus()}catch{}return new R_(g)}function Cb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Rb="__/auth/handler",Nb="emulator/auth/handler",Pb=encodeURIComponent("fac");async function N_(t,e,n,r,s,i){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Es,eventId:s};if(e instanceof Fp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Zk(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))o[f]=g}if(e instanceof Aa){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${Pb}=${encodeURIComponent(u)}`:"";return`${bb(t)}?${pa(l).slice(1)}${h}`}function bb({config:t}){return t.emulator?jp(t,Nb):`https://${t.authDomain}/${Rb}`}/**
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
 */const Th="webStorageSupport";class Db{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=F0,this._completeRedirectFn=rb,this._overrideRedirectResult=eb}async _openPopup(e,n,r,s){var o;Qn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await N_(e,n,r,Ud(),s);return xb(e,i,Up())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await N_(e,n,r,Ud(),s);return LP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Qn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Eb(e),r=new ib(e);return n.register("authEvent",s=>(Y(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Th,{type:Th},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Th];i!==void 0&&n(!!i),An(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return P0()||k0()||Op()}}const jb=Db;var P_="@firebase/auth",b_="1.12.0";/**
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
 */class Vb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Lb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ob(t){ps(new Pr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:b0(t)},h=new fP(r,s,i,u);return vP(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ps(new Pr("auth-internal",e=>{const n=cc(e.getProvider("auth").getImmediate());return(r=>new Vb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),vn(P_,b_,Lb(t)),vn(P_,b_,"esm2020")}/**
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
 */const Mb=5*60,Fb=lE("authIdTokenMaxAge")||Mb;let D_=null;const Ub=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Fb)return;const s=n==null?void 0:n.token;D_!==s&&(D_=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function zb(t=Gf()){const e=zu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=_P(t,{popupRedirectResolver:jb,persistence:[qP,DP,F0]}),r=lE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Ub(i.toString());CP(n,o,()=>o(n.currentUser)),xP(n,l=>o(l))}}const s=iE("auth");return s&&wP(n,`http://${s}`),n}function Bb(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}pP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=on("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Bb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ob("Browser");const $b={apiKey:"AIzaSyChYmVhjDixj7-zjW8T_vVGFX_g18a5NDw",authDomain:"nurazkhan-50303.firebaseapp.com",projectId:"nurazkhan-50303",storageBucket:"nurazkhan-50303.firebasestorage.app",messagingSenderId:"298709005555",appId:"1:298709005555:web:b8df5cbb5f041b48fff386"},Bp=dE($b),wi=g2(Bp),oa=LN(Bp),Gt=zb(Bp),Ke=()=>{const t=Gt.currentUser;if(!t)throw new Error("User not authenticated");return Be(wi,"users",t.uid)},Nn={async create(t){const e=Ke(),n=Wt(e,"projects"),r=Z1(wi),s=Be(n),i=s.id,o={name:t.name,description:t.description||"",thumbnailUrl:null,folderId:t.folderId||null,tags:t.tags||[],createdAt:en(),updatedAt:en(),currentVersionId:null};if(t.thumbnail instanceof File){const f=sa(oa,`users/${Gt.currentUser.uid}/thumbnails/${i}/${t.thumbnail.name}`);await na(f,t.thumbnail),o.thumbnailUrl=await ra(f)}const l=Wt(s,"versions"),u=Be(l),h=u.id;return o.currentVersionId=h,r.set(s,o),r.set(u,{name:"v1.0",description:"Initial version",parentVersionId:null,todos:[],errors:[],createdAt:en()}),await r.commit(),i},async getAll(){const t=Gt.currentUser;if(!t)return[];const e=Be(wi,"users",t.uid),n=Ea(Wt(e,"projects"),Ta("updatedAt","desc"));return(await Ia(n)).docs.map(s=>{var i,o;return{id:s.id,...s.data(),createdAt:((i=s.data().createdAt)==null?void 0:i.toDate())||new Date,updatedAt:((o=s.data().updatedAt)==null?void 0:o.toDate())||new Date}})},async getById(t){var s,i;const e=Ke(),n=Be(e,"projects",t),r=await Ap(n);if(r.exists())return{id:r.id,...r.data(),createdAt:(s=r.data().createdAt)==null?void 0:s.toDate(),updatedAt:(i=r.data().updatedAt)==null?void 0:i.toDate()};throw new Error("Project not found")},async update(t,e){const n=Ke(),r=Be(n,"projects",t),s={...e,updatedAt:en()};if(e.thumbnail instanceof File){const i=sa(oa,`users/${Gt.currentUser.uid}/thumbnails/${t}/${e.thumbnail.name}`);await na(i,e.thumbnail),s.thumbnailUrl=await ra(i),delete s.thumbnail}await ac(r,s)},async delete(t){const e=Ke(),n=Be(e,"projects",t);await Sa(n)}},Pn={async create(t,e){const n=Ke(),r=Wt(n,"projects",t,"versions"),s=await lc(r,{name:e.name,description:e.description||"",parentVersionId:e.parentVersionId||null,todos:e.todos||[],errors:e.errors||[],createdAt:en()});if(e.parentVersionId&&e.copyResources){const i=await bn.getByVersion(t,e.parentVersionId),o=s.id,l=Z1(wi),u=Wt(n,"projects",t,"versions",o,"resources");i.forEach(h=>{const f=Be(u);l.set(f,{name:h.name,type:h.type,url:h.url,metadata:h.metadata,createdAt:en()})}),await l.commit()}return s.id},async getByProject(t){const e=Ke(),n=Ea(Wt(e,"projects",t,"versions"),Ta("createdAt","desc"));return(await Ia(n)).docs.map(s=>{var i;return{id:s.id,...s.data(),createdAt:(i=s.data().createdAt)==null?void 0:i.toDate()}})},async getById(t,e){var i;const n=Ke(),r=Be(n,"projects",t,"versions",e),s=await Ap(r);return{id:s.id,...s.data(),createdAt:(i=s.data().createdAt)==null?void 0:i.toDate()}},async update(t,e,n){const r=Ke(),s=Be(r,"projects",t,"versions",e);await ac(s,n)},async delete(t,e){const n=Ke(),r=Be(n,"projects",t,"versions",e);await Sa(r)}},bn={async create(t,e,n){const r=Ke(),s=Wt(r,"projects",t,"versions",e,"resources");let i=n.url||null;if(n.data instanceof File){const l=`users/${Gt.currentUser.uid}/projects/${t}/versions/${e}/${Date.now()}_${n.name}`,u=sa(oa,l);await na(u,n.data),i=await ra(u)}return(await lc(s,{name:n.name,type:n.type,url:i,metadata:n.metadata||{},createdAt:en()})).id},async getByVersion(t,e){const n=Ke(),r=Wt(n,"projects",t,"versions",e,"resources"),s=Ea(r,Ta("createdAt","desc"));return(await Ia(s)).docs.map(o=>{var l;return{id:o.id,...o.data(),data:null,createdAt:(l=o.data().createdAt)==null?void 0:l.toDate()}})},async update(t,e,n,r){const s=Ke(),i=Be(s,"projects",t,"versions",e,"resources",n);await ac(i,r)},async delete(t,e,n){const r=Ke(),s=Be(r,"projects",t,"versions",e,"resources",n),i=await Ap(s);i.exists()&&i.data().url&&i.data().url.startsWith("http"),await Sa(s)}},Ih={async create(t){const e=Ke(),n=Wt(e,"folders");return(await lc(n,{name:t,createdAt:en()})).id},async getAll(){const t=Gt.currentUser;if(!t)return[];const e=Be(wi,"users",t.uid),n=Ea(Wt(e,"folders"),Ta("name"));return(await Ia(n)).docs.map(s=>({id:s.id,...s.data()}))},async delete(t){const e=Ke();await Sa(Be(e,"folders",t))}},dl={async create(t){const e=Ke(),n=Wt(e,"inspirations");let r=null;if(t.image instanceof File){const i=`users/${Gt.currentUser.uid}/inspirations/${Date.now()}_${t.image.name}`,o=sa(oa,i);await na(o,t.image),r=await ra(o)}return(await lc(n,{title:t.title||"",description:t.description||"",tags:t.tags||[],imageUrl:r,url:t.url||"",createdAt:en(),updatedAt:en()})).id},async getAll(){const t=Gt.currentUser;if(!t)return[];const e=Be(wi,"users",t.uid),n=Ea(Wt(e,"inspirations"),Ta("createdAt","desc"));return(await Ia(n)).docs.map(s=>{var i,o;return{id:s.id,...s.data(),createdAt:((i=s.data().createdAt)==null?void 0:i.toDate())||new Date,updatedAt:((o=s.data().updatedAt)==null?void 0:o.toDate())||new Date}})},async update(t,e){const n=Ke(),r=Be(n,"inspirations",t),s={...e,updatedAt:en()};if(e.image instanceof File){const i=`users/${Gt.currentUser.uid}/inspirations/${Date.now()}_${e.image.name}`,o=sa(oa,i);await na(o,e.image),s.imageUrl=await ra(o),delete s.image}await ac(r,s)},async delete(t){const e=Ke();await Sa(Be(e,"inspirations",t))}},Ye=Rk((t,e)=>({user:null,authLoading:!0,projects:[],folders:[],currentProject:null,currentVersion:null,versions:[],resources:[],view:"list",currentView:"projects",sidebarOpen:!0,isLoading:!1,inspirations:[],initAuth:()=>RP(Gt,async r=>{t({user:r,authLoading:!1}),r?(await e().loadProjects(),await e().loadFolders(),await e().loadInspirations()):t({projects:[],folders:[],currentProject:null,inspirations:[]})}),login:async()=>{try{const n=new Vn;await YP(Gt,n)}catch(n){throw console.error("Login failed:",n),n}},logout:async()=>{await NP(Gt),t({user:null,projects:[],folders:[]})},setView:n=>t({view:n}),setCurrentView:n=>t({currentView:n}),toggleSidebar:()=>t(n=>({sidebarOpen:!n.sidebarOpen})),setLoading:n=>t({isLoading:n}),loadFolders:async()=>{if(!e().user)return;const n=await Ih.getAll();t({folders:n})},createFolder:async n=>{await Ih.create(n),await e().loadFolders()},deleteFolder:async n=>{await Ih.delete(n),await e().loadFolders()},loadProjects:async()=>{if(e().user){t({isLoading:!0});try{const n=await Nn.getAll();t({projects:n,isLoading:!1})}catch(n){console.error(n),t({isLoading:!1})}}},createProject:async n=>{const r=await Nn.create(n);return await e().loadProjects(),r},selectProject:async n=>{if(!n){t({currentProject:null,currentVersion:null,versions:[],resources:[]});return}t({isLoading:!0});try{const r=await Nn.getById(n),s=await Pn.getByProject(n);let i=null,o=[];if(r.currentVersionId){const l=s.find(u=>u.id===r.currentVersionId);l&&(i=l,o=await bn.getByVersion(n,r.currentVersionId))}t({currentProject:r,currentVersion:i,versions:s,resources:o,isLoading:!1})}catch(r){console.error(r),t({isLoading:!1})}},updateProject:async(n,r)=>{var s;if(await Nn.update(n,r),await e().loadProjects(),((s=e().currentProject)==null?void 0:s.id)===n){const i=await Nn.getById(n);t({currentProject:i})}},deleteProject:async n=>{var r;await Nn.delete(n),await e().loadProjects(),((r=e().currentProject)==null?void 0:r.id)===n&&t({currentProject:null,currentVersion:null,versions:[],resources:[]})},createVersion:async(n,r)=>{const s=await Pn.create(n,r),i=await Pn.getByProject(n);await Nn.update(n,{currentVersionId:s});const o=await Nn.getById(n);return t({versions:i,currentProject:o}),s},selectVersion:async n=>{const r=e().currentProject.id,s=e().versions.find(o=>o.id===n)||await Pn.getById(r,n),i=await bn.getByVersion(r,n);e().currentProject&&await Nn.update(r,{currentVersionId:n}),t({currentVersion:s,resources:i})},updateVersion:async(n,r)=>{var i;const s=e().currentProject.id;if(await Pn.update(s,n,r),((i=e().currentVersion)==null?void 0:i.id)===n){const o=await Pn.getByProject(s),l=o.find(u=>u.id===n);t({currentVersion:l,versions:o})}else{const o=await Pn.getByProject(s);t({versions:o})}},deleteVersion:async n=>{var i;const r=e().currentProject.id;await Pn.delete(r,n);const s=await Pn.getByProject(r);t({versions:s}),((i=e().currentVersion)==null?void 0:i.id)===n&&t({currentVersion:s[0]||null,resources:[]})},addResource:async(n,r)=>{const s=e().currentProject.id;await bn.create(s,n,r);const i=await bn.getByVersion(s,n);t({resources:i})},updateResource:async(n,r)=>{const s=e().currentProject.id,i=e().currentVersion.id;await bn.update(s,i,n,r);const o=await bn.getByVersion(s,i);t({resources:o})},deleteResource:async n=>{const r=e().currentProject.id,s=e().currentVersion.id;await bn.delete(r,s,n);const i=await bn.getByVersion(r,s);t({resources:i})},loadInspirations:async()=>{if(e().user)try{const n=await dl.getAll();t({inspirations:n})}catch(n){console.error("Failed to load inspirations:",n)}},addInspiration:async n=>{const r=await dl.create(n);return await e().loadInspirations(),r},updateInspiration:async(n,r)=>{await dl.update(n,r),await e().loadInspirations()},deleteInspiration:async n=>{await dl.delete(n),await e().loadInspirations()}}));/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Hb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),X=(t,e)=>{const n=z.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:l="",children:u,...h},f)=>z.createElement("svg",{ref:f,...Hb,width:s,height:s,stroke:r,strokeWidth:o?Number(i)*24/Number(s):i,className:["lucide",`lucide-${qb(t)}`,l].join(" "),...h},[...e.map(([g,m])=>z.createElement(g,m)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=X("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=X("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=X("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=X("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=X("Bug",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qb=X("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=X("CheckSquare",[["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}],["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",key:"1jnkn4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=X("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=X("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=X("CircuitBoard",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M11 9h4a2 2 0 0 0 2-2V3",key:"1ve2rv"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"M7 21v-4a2 2 0 0 1 2-2h4",key:"1fwkro"}],["circle",{cx:"15",cy:"15",r:"2",key:"3i40o0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc=X("Clipboard",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=X("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=X("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=X("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=X("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=X("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aa=X("FileCode",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=X("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=X("FileType",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"M9 13v-1h6v1",key:"1bb014"}],["path",{d:"M11 18h2",key:"12mj7e"}],["path",{d:"M12 12v6",key:"3ahymv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ro=X("File",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=X("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=X("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ei=X("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pi=X("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=X("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=X("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=X("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=X("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eD=X("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tD=X("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nD=X("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rD=X("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sD=X("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iD=X("PenSquare",[["path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1qinfi"}],["path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z",key:"w2jsv5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oD=X("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=X("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aD=X("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lD=X("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=X("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uD=X("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eT=X("Tag",[["path",{d:"M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z",key:"14b2ls"}],["path",{d:"M7 7h.01",key:"7u93v4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn=X("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=X("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j_=X("Usb",[["circle",{cx:"10",cy:"7",r:"1",key:"dypaad"}],["circle",{cx:"4",cy:"20",r:"1",key:"22iqad"}],["path",{d:"M4.7 19.3 19 5",key:"1enqfc"}],["path",{d:"m21 3-3 1 2 2Z",key:"d3ov82"}],["path",{d:"M9.26 7.68 5 12l2 5",key:"1esawj"}],["path",{d:"m10 14 5 2 3.5-3.5",key:"v8oal5"}],["path",{d:"m18 12 1-1 1 1-1 1Z",key:"1bh22v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tT=X("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=X("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function cD({onCreateProject:t}){var L;const{projects:e,folders:n,currentProject:r,toggleSidebar:s,selectProject:i,createFolder:o,deleteFolder:l,logout:u,user:h,currentView:f,setCurrentView:g}=Ye(),[m,w]=z.useState(""),[k,N]=z.useState({}),b=_=>{N(y=>({...y,[_]:!y[_]}))},S=async()=>{const _=prompt("Folder Name:");_&&await o(_)},I=async(_,y)=>{_.stopPropagation(),confirm("Delete this folder? Projects inside will be moved to root.")&&await l(y)},x=e.filter(_=>_.name.toLowerCase().includes(m.toLowerCase())),j=_=>x.filter(y=>y.folderId===_),R=x.filter(_=>!_.folderId);return c.jsxs("aside",{className:"sidebar",children:[c.jsxs("div",{className:"sidebar-header",children:[c.jsxs("button",{className:"logo",onClick:()=>{i(null),g("projects")},title:"Go to home",children:[c.jsx(pc,{className:"logo-icon"}),c.jsx("span",{className:"logo-text",children:"NiroVault"})]}),c.jsx("button",{className:"btn btn-icon btn-ghost",onClick:s,children:c.jsx(Yb,{})})]}),c.jsxs("div",{className:"sidebar-content",children:[c.jsxs("div",{className:"sidebar-user",children:[c.jsx("div",{className:"user-avatar",children:h!=null&&h.photoURL?c.jsx("img",{src:h.photoURL,alt:h.displayName}):c.jsx("div",{className:"avatar-placeholder",children:(L=h==null?void 0:h.email)==null?void 0:L[0].toUpperCase()})}),c.jsxs("div",{className:"user-info",children:[c.jsx("span",{className:"user-name truncate",children:(h==null?void 0:h.displayName)||"User"}),c.jsx("span",{className:"user-email truncate",children:h==null?void 0:h.email})]})]}),c.jsxs("div",{className:"sidebar-search",children:[c.jsx(Wp,{size:16}),c.jsx("input",{type:"text",placeholder:"Search projects...",className:"input",value:m,onChange:_=>w(_.target.value)})]}),c.jsx("div",{className:"sidebar-actions",children:c.jsxs("button",{className:"btn btn-sm btn-ghost",onClick:S,children:[c.jsx(qd,{size:14}),"New Folder"]})}),c.jsxs("nav",{className:"sidebar-nav",children:[n.map(_=>{const y=j(_.id),T=k[_.id];return m&&y.length===0?null:c.jsxs("div",{className:"nav-section",children:[c.jsxs("div",{className:"nav-section-header",onClick:()=>b(_.id),children:[c.jsxs("div",{className:"folder-label",children:[T?c.jsx(qp,{size:14}):c.jsx(qd,{size:14}),c.jsx("span",{className:"truncate",children:_.name}),c.jsx("span",{className:"badge badge-sm",children:y.length})]}),c.jsx("button",{className:"btn btn-icon btn-ghost btn-xs folder-menu",onClick:E=>I(E,_.id),children:c.jsx(Xn,{size:12})})]}),T&&c.jsxs("ul",{className:"nav-list",children:[y.map(E=>c.jsx("li",{children:c.jsx("button",{className:`nav-item ${(r==null?void 0:r.id)===E.id?"active":""}`,onClick:()=>{i(E.id),g("projects")},children:c.jsx("span",{className:"truncate",children:E.name})})},E.id)),y.length===0&&c.jsx("li",{className:"nav-empty",children:"Empty folder"})]})]},_.id)}),c.jsxs("div",{className:"nav-section",children:[c.jsxs("div",{className:"nav-section-header-static",children:[c.jsx("span",{className:"nav-section-title",children:"Root Projects"}),t&&c.jsx("button",{className:"btn btn-icon btn-ghost btn-xs",onClick:t,title:"New Project",children:c.jsx(Ot,{size:14})})]}),c.jsxs("ul",{className:"nav-list",children:[R.map(_=>c.jsx("li",{children:c.jsx("button",{className:`nav-item ${(r==null?void 0:r.id)===_.id?"active":""}`,onClick:()=>{i(_.id),g("projects")},children:c.jsx("span",{className:"truncate",children:_.name})})},_.id)),R.length===0&&n.length===0&&c.jsx("li",{className:"nav-empty",children:"No projects found"})]})]})]})]}),c.jsxs("div",{className:"sidebar-footer",children:[c.jsxs("button",{className:`btn btn-ghost nav-item ${f==="inspiration"?"active":""}`,onClick:()=>{i(null),g("inspiration")},children:[c.jsx(Wd,{size:16}),c.jsx("span",{children:"Inspiration"})]}),c.jsxs("button",{className:"btn btn-ghost nav-item",onClick:u,children:[c.jsx(tD,{size:16}),c.jsx("span",{children:"Sign Out"})]})]})]})}function hD({children:t,onCreateProject:e}){const{projects:n,currentProject:r,sidebarOpen:s,toggleSidebar:i,selectProject:o,view:l,setView:u}=Ye();return c.jsxs("div",{className:`layout ${s?"sidebar-open":"sidebar-closed"}`,children:[c.jsx(cD,{onCreateProject:e}),c.jsxs("main",{className:"main-content",children:[c.jsxs("header",{className:"main-header",children:[c.jsxs("div",{className:"header-left",children:[!s&&c.jsx("button",{className:"btn btn-icon btn-ghost",onClick:i,children:c.jsx(rD,{})}),c.jsx("h1",{className:"header-title",children:r?r.name:"All Projects"})]}),c.jsx("div",{className:"header-right",children:c.jsxs("div",{className:"view-toggle",children:[c.jsx("button",{className:`btn btn-icon btn-ghost ${l==="grid"?"active":""}`,onClick:()=>u("grid"),children:c.jsx(J0,{size:18})}),c.jsx("button",{className:`btn btn-icon btn-ghost ${l==="list"?"active":""}`,onClick:()=>u("list"),children:c.jsx(Z0,{size:18})})]})})]}),c.jsx("div",{className:"content-wrapper",children:t})]})]})}function dD({project:t}){const{selectProject:e}=Ye(),n=r=>{if(!r)return"";const s=new Date(r);return s.toLocaleDateString("en-US",{month:"short",day:"numeric",year:s.getFullYear()!==new Date().getFullYear()?"numeric":void 0})};return c.jsxs("article",{className:"project-card card card-interactive",onClick:()=>e(t.id),tabIndex:0,onKeyDown:r=>r.key==="Enter"&&e(t.id),children:[c.jsx("div",{className:"project-thumbnail",children:t.thumbnailUrl||t.thumbnail?c.jsx("img",{src:t.thumbnailUrl||URL.createObjectURL(t.thumbnail),alt:t.name,loading:"lazy"}):c.jsx("div",{className:"project-thumbnail-placeholder",children:c.jsx(qp,{size:32})})}),c.jsxs("div",{className:"project-info",children:[c.jsx("h3",{className:"project-name truncate",children:t.name}),t.description&&c.jsx("p",{className:"project-description truncate",children:t.description}),c.jsxs("div",{className:"project-meta",children:[c.jsxs("span",{className:"meta-item",children:[c.jsx(Y0,{size:12}),n(t.updatedAt)]}),c.jsxs("span",{className:"meta-item",children:[c.jsx(Ei,{size:12}),"v1.0"]})]})]})]})}function fD({onCreateProject:t}){const{projects:e,view:n,isLoading:r}=Ye();return r?c.jsx("div",{className:`project-list ${n}`,children:[1,2,3,4].map(s=>c.jsxs("div",{className:"project-card skeleton-card",children:[c.jsx("div",{className:"skeleton",style:{height:160}}),c.jsxs("div",{className:"skeleton-content",children:[c.jsx("div",{className:"skeleton",style:{height:20,width:"60%"}}),c.jsx("div",{className:"skeleton",style:{height:14,width:"80%"}})]})]},s))}):e.length===0?c.jsxs("div",{className:"empty-state",children:[c.jsx(qp,{className:"empty-state-icon"}),c.jsx("h3",{children:"No projects yet"}),c.jsx("p",{children:"Create your first project to start organizing your electronics work, schematics, and firmware."}),c.jsxs("button",{className:"btn btn-primary btn-lg",onClick:t,children:[c.jsx(Ot,{size:20}),"Create Project"]})]}):c.jsxs("div",{className:`project-list ${n}`,children:[e.map(s=>c.jsx(dD,{project:s},s.id)),c.jsxs("button",{className:"project-card add-card",onClick:t,children:[c.jsx(Ot,{size:32}),c.jsx("span",{children:"New Project"})]})]})}function pD({versions:t,currentVersionId:e,onSelectVersion:n}){const r=z.useMemo(()=>{if(!t.length)return{nodes:[],height:0,width:0};const f=new Map;t.forEach(R=>f.set(R.id,{...R,children:[]}));const g=[];t.forEach(R=>{const L=f.get(R.id);R.parentVersionId&&f.has(R.parentVersionId)?f.get(R.parentVersionId).children.push(L):g.push(L)});const m=140,w=60,k=20,N=40;let b=0,S=0;const I=(R,L,_)=>{if(R.x=L,R.y=_,b=Math.max(b,L+m),S=Math.max(S,_+w),R.children.length===0)return L+m+k;let y=L;if(R.children.forEach(T=>{y=I(T,y,_+w+N)}),R.children.length>1){const T=R.children[0].x,E=R.children[R.children.length-1].x;R.x=(T+E+m)/2-m/2}return y};let x=0;g.forEach(R=>{x=I(R,x,0)});const j=R=>{let L=[];return R.forEach(_=>{L.push(_),L=[...L,...j(_.children)]}),L};return{nodes:j(g),roots:g,height:S+40,width:b+40,nodeWidth:m,nodeHeight:w}},[t]),s=()=>{const f=[],{nodes:g,nodeWidth:m,nodeHeight:w}=r;return g.forEach(k=>{k.children.forEach(N=>{const b=k.x+m/2,S=k.y+w,I=N.x+m/2,x=N.y,j=(S+x)/2,R=`M ${b} ${S} C ${b} ${j}, ${I} ${j}, ${I} ${x}`;f.push(c.jsx("path",{d:R,className:"version-connection",fill:"none"},`line-${k.id}-${N.id}`))})}),f};if(t.length===0)return c.jsxs("div",{className:"version-tree-empty",children:[c.jsx(Ei,{size:32}),c.jsx("p",{children:"No versions yet"}),c.jsx("span",{className:"text-muted",children:"Create your first version to start tracking changes"})]});const{nodes:i,height:o,width:l,nodeWidth:u,nodeHeight:h}=r;return c.jsx("div",{className:"version-tree-container",children:c.jsx("svg",{className:"version-tree",width:l,height:o,viewBox:`0 0 ${l} ${o}`,children:c.jsxs("g",{transform:"translate(20, 20)",children:[s(),i.map(f=>c.jsxs("g",{className:`version-node ${f.id===e?"active":""}`,transform:`translate(${f.x}, ${f.y})`,onClick:()=>n(f.id),style:{cursor:"pointer"},children:[c.jsx("rect",{x:"0",y:"0",width:u,height:h,rx:"10",className:"version-node-bg"}),c.jsx("circle",{cx:"20",cy:h/2,r:"8",className:"version-dot"}),c.jsx("text",{x:"38",y:h/2-6,className:"version-name",children:f.name}),c.jsx("text",{x:"38",y:h/2+10,className:"version-date",children:new Date(f.createdAt).toLocaleDateString()})]},f.id))]})})})}function V_({resources:t,onAdd:e,type:n="image"}){const{deleteResource:r}=Ye(),[s,i]=z.useState(null),o=h=>h.data?URL.createObjectURL(h.data):h.url||"",l=h=>{var f;return h.type==="video"||((f=h.metadata)==null?void 0:f.mimeType)&&h.metadata.mimeType.startsWith("video/")},u=h=>{const f=o(h),g=document.createElement("a");g.href=f,g.download=h.name,document.body.appendChild(g),g.click(),document.body.removeChild(g)};return t.length===0?c.jsxs("div",{className:"gallery-empty",children:[c.jsx(Pi,{size:48}),c.jsxs("h3",{children:["No ",n==="schematic"?"schematics":"media"," yet"]}),c.jsx("p",{children:"Add images, videos, or schematics to this version"}),c.jsxs("button",{className:"btn btn-primary",onClick:e,children:[c.jsx(Ot,{size:18}),"Add Files"]})]}):c.jsxs("div",{className:"gallery",children:[c.jsxs("div",{className:"gallery-grid",children:[t.map(h=>c.jsxs("div",{className:"gallery-item",children:[c.jsxs("div",{className:"gallery-preview",onClick:()=>i(h),children:[l(h)?c.jsx("video",{src:o(h),muted:!0}):c.jsx("img",{src:o(h),alt:h.name,loading:"lazy"}),c.jsxs("div",{className:"gallery-overlay",children:[l(h)&&c.jsx(tT,{size:24}),c.jsx(nD,{size:20})]})]}),c.jsxs("div",{className:"gallery-info",children:[c.jsx("span",{className:"gallery-name truncate",children:h.name}),c.jsxs("div",{className:"gallery-actions",children:[c.jsx("button",{className:"btn btn-icon btn-ghost btn-sm",onClick:()=>u(h),children:c.jsx($d,{size:14})}),c.jsx("button",{className:"btn btn-icon btn-ghost btn-sm text-error",onClick:()=>r(h.id),children:c.jsx(Xn,{size:14})})]})]})]},h.id)),c.jsxs("button",{className:"gallery-add",onClick:e,children:[c.jsx(Ot,{size:24}),c.jsx("span",{children:"Add More"})]})]}),s&&c.jsxs("div",{className:"lightbox",onClick:()=>i(null),children:[c.jsx("button",{className:"btn btn-icon btn-ghost lightbox-close",onClick:()=>i(null),children:c.jsx(Vt,{size:24})}),c.jsxs("div",{className:"lightbox-content",onClick:h=>h.stopPropagation(),children:[l(s)?c.jsx("video",{src:o(s),controls:!0,autoPlay:!0}):c.jsx("img",{src:o(s),alt:s.name}),c.jsxs("div",{className:"lightbox-info",children:[c.jsx("span",{children:s.name}),c.jsxs("button",{className:"btn btn-sm btn-secondary",onClick:()=>u(s),children:[c.jsx($d,{size:14}),"Download"]})]})]})]})]})}function mD({version:t}){const{updateVersion:e}=Ye(),[n,r]=z.useState(""),s=(t==null?void 0:t.todos)||[],i=()=>{if(!n.trim()||!t)return;const m={id:Date.now(),text:n.trim(),completed:!1,createdAt:new Date};e(t.id,{todos:[...s,m]}),r("")},o=m=>{e(t.id,{todos:s.map(w=>w.id===m?{...w,completed:!w.completed}:w)})},l=m=>{e(t.id,{todos:s.filter(w=>w.id!==m)})},u=m=>{m.key==="Enter"&&i()},h=m=>{if(!m)return"";const w=m instanceof Date?m:new Date(m!=null&&m.seconds?m.seconds*1e3:m);if(isNaN(w.getTime()))return"";const N=new Date-w,b=Math.floor(N/6e4),S=Math.floor(N/36e5),I=Math.floor(N/864e5);return b<1?"just now":b<60?`${b}m ago`:S<24?`${S}h ago`:I<30?`${I}d ago`:w.toLocaleDateString("en-US",{month:"short",day:"numeric"})},f=s.filter(m=>m.completed).length,g=s.length>0?f/s.length*100:0;return c.jsxs("div",{className:"todo-list",children:[c.jsx("div",{className:"todo-header",children:c.jsxs("div",{className:"todo-stats",children:[c.jsxs("span",{className:"todo-count",children:[f," / ",s.length," completed"]}),s.length>0&&c.jsx("div",{className:"progress-bar todo-progress",children:c.jsx("div",{className:"progress-bar-fill",style:{width:`${g}%`}})})]})}),c.jsxs("div",{className:"todo-input-wrapper",children:[c.jsx("input",{type:"text",className:"input todo-input",placeholder:"Add a new task...",value:n,onChange:m=>r(m.target.value),onKeyDown:u}),c.jsxs("button",{className:"btn btn-primary",onClick:i,disabled:!n.trim(),children:[c.jsx(Ot,{size:18}),"Add"]})]}),s.length===0?c.jsxs("div",{className:"todo-empty",children:[c.jsx(K0,{size:48}),c.jsx("h3",{children:"No tasks yet"}),c.jsx("p",{children:"Add tasks to track what needs to be done for this version"})]}):c.jsx("ul",{className:"todo-items",children:s.map(m=>c.jsxs("li",{className:`todo-item ${m.completed?"completed":""}`,children:[c.jsx("button",{className:"todo-checkbox",onClick:()=>o(m.id),children:m.completed?c.jsx(Q0,{size:16}):c.jsx(uD,{size:16})}),c.jsxs("div",{className:"todo-text-wrapper",children:[c.jsx("span",{className:"todo-text",children:m.text}),m.createdAt&&c.jsx("span",{className:"todo-time",children:h(m.createdAt)})]}),c.jsx("button",{className:"btn btn-icon btn-ghost btn-sm todo-delete",onClick:()=>l(m.id),children:c.jsx(Xn,{size:14})})]},m.id))})]})}function gD({version:t}){const{updateVersion:e}=Ye(),[n,r]=z.useState(""),[s,i]=z.useState(""),[o,l]=z.useState(!1),u=(t==null?void 0:t.errors)||[],h=()=>{if(!n.trim()||!t)return;const w={id:Date.now(),title:n.trim(),description:s.trim(),resolved:!1,createdAt:new Date};e(t.id,{errors:[...u,w]}),r(""),i(""),l(!1)},f=w=>{e(t.id,{errors:u.map(k=>k.id===w?{...k,resolved:!k.resolved}:k)})},g=w=>{e(t.id,{errors:u.filter(k=>k.id!==w)})},m=u.filter(w=>!w.resolved).length;return c.jsxs("div",{className:"error-list",children:[c.jsxs("div",{className:"error-header",children:[c.jsx("div",{className:"error-stats",children:m>0?c.jsxs("span",{className:"badge badge-error",children:[m," unresolved"]}):c.jsx("span",{className:"badge badge-success",children:"All resolved"})}),c.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>l(!o),children:[c.jsx(Ot,{size:16}),"Log Error"]})]}),o&&c.jsxs("div",{className:"error-form",children:[c.jsx("input",{type:"text",className:"input",placeholder:"Error title...",value:n,onChange:w=>r(w.target.value),autoFocus:!0}),c.jsx("textarea",{className:"input textarea",placeholder:"Description (optional)...",value:s,onChange:w=>i(w.target.value),rows:3}),c.jsxs("div",{className:"error-form-actions",children:[c.jsx("button",{className:"btn btn-ghost",onClick:()=>l(!1),children:"Cancel"}),c.jsx("button",{className:"btn btn-primary",onClick:h,disabled:!n.trim(),children:"Add Error"})]})]}),u.length===0?c.jsxs("div",{className:"error-empty",children:[c.jsx(Kb,{size:48}),c.jsx("h3",{children:"No errors logged"}),c.jsx("p",{children:"Track bugs and issues for this version here"})]}):c.jsx("ul",{className:"error-items",children:u.map(w=>c.jsxs("li",{className:`error-item ${w.resolved?"resolved":""}`,children:[c.jsx("button",{className:"error-status",onClick:()=>f(w.id),title:w.resolved?"Mark as unresolved":"Mark as resolved",children:w.resolved?c.jsx(Qb,{size:20}):c.jsx($p,{size:20})}),c.jsxs("div",{className:"error-content",children:[c.jsx("h4",{className:"error-title",children:w.title}),w.description&&c.jsx("p",{className:"error-description",children:w.description}),c.jsx("span",{className:"error-date",children:new Date(w.createdAt).toLocaleDateString()})]}),c.jsx("button",{className:"btn btn-icon btn-ghost btn-sm error-delete",onClick:()=>g(w.id),children:c.jsx(Xn,{size:14})})]},w.id))})]})}function yD({resources:t}){const{addResource:e,deleteResource:n,currentVersion:r}=Ye(),[s,i]=z.useState(!1),[o,l]=z.useState({name:"",url:"",description:""}),u=async()=>{!o.url.trim()||!r||(await e(r.id,{type:"link",name:o.name.trim()||h(o.url),url:o.url.trim(),metadata:{description:o.description.trim(),platform:f(o.url)}}),l({name:"",url:"",description:""}),i(!1))},h=w=>{try{return`Chat - ${new URL(w).hostname}`}catch{return"AI Chat Link"}},f=w=>{const k=w.toLowerCase();return k.includes("chat.openai")||k.includes("chatgpt")?"chatgpt":k.includes("claude.ai")?"claude":k.includes("gemini.google")||k.includes("bard")?"gemini":k.includes("copilot")?"copilot":k.includes("perplexity")?"perplexity":"other"},g=w=>{const k={chatgpt:"🤖",claude:"🧠",gemini:"✨",copilot:"💻",perplexity:"🔍",other:"💬"};return k[w]||k.other},m=w=>{const k={chatgpt:"#10a37f",claude:"#cc785c",gemini:"#8e44ad",copilot:"#0078d4",perplexity:"#1db954",other:"var(--color-accent)"};return k[w]||k.other};return c.jsxs("div",{className:"ai-links",children:[c.jsxs("div",{className:"ai-links-header",children:[c.jsxs("h3",{children:[c.jsx(sD,{size:18}),"AI Chat Links"]}),c.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>i(!s),children:[c.jsx(Ot,{size:16}),"Add Link"]})]}),s&&c.jsxs("div",{className:"ai-link-form",children:[c.jsx("input",{type:"url",className:"input",placeholder:"https://chat.openai.com/...",value:o.url,onChange:w=>l({...o,url:w.target.value}),autoFocus:!0}),c.jsx("input",{type:"text",className:"input",placeholder:"Name (optional)",value:o.name,onChange:w=>l({...o,name:w.target.value})}),c.jsx("textarea",{className:"input textarea",placeholder:"What was this chat about? (optional)",value:o.description,onChange:w=>l({...o,description:w.target.value}),rows:2}),c.jsxs("div",{className:"form-actions",children:[c.jsx("button",{className:"btn btn-ghost",onClick:()=>i(!1),children:"Cancel"}),c.jsx("button",{className:"btn btn-primary",onClick:u,disabled:!o.url.trim(),children:"Add Link"})]})]}),t.length===0?c.jsxs("div",{className:"ai-links-empty",children:[c.jsx(Gb,{size:48}),c.jsx("h3",{children:"No AI chat links yet"}),c.jsx("p",{children:"Save links to AI conversations you used for this project"})]}):c.jsx("div",{className:"ai-links-grid",children:t.map(w=>{var N,b;const k=((N=w.metadata)==null?void 0:N.platform)||"other";return c.jsxs("a",{href:w.url,target:"_blank",rel:"noopener noreferrer",className:"ai-link-card",style:{"--platform-color":m(k)},children:[c.jsx("div",{className:"ai-link-icon",children:g(k)}),c.jsxs("div",{className:"ai-link-content",children:[c.jsx("h4",{className:"ai-link-name",children:w.name}),((b=w.metadata)==null?void 0:b.description)&&c.jsx("p",{className:"ai-link-description truncate",children:w.metadata.description}),c.jsx("span",{className:"ai-link-url truncate",children:w.url})]}),c.jsxs("div",{className:"ai-link-actions",children:[c.jsx(X0,{size:16}),c.jsx("button",{className:"btn btn-icon btn-ghost btn-sm",onClick:S=>{S.preventDefault(),S.stopPropagation(),n(w.id)},children:c.jsx(Xn,{size:14})})]})]},w.id)})})]})}function _D({resources:t,onAdd:e}){var m,w;const{deleteResource:n}=Ye(),[r,s]=z.useState(null),[i,o]=z.useState(""),l=t.filter(k=>k.type==="bin"),u=t.filter(k=>k.type==="ino"),h=async k=>{if(s(k),k.type==="ino")try{if(k.url){const b=await(await fetch(k.url)).text();o(b)}else if(k.data instanceof Ro){const N=await k.data.text();o(N)}else o("Error: File content unavailable.")}catch(N){console.error("Failed to load file content:",N),o("Error loading file content.")}else o("")},f=k=>{const N=k.url||(k.data?URL.createObjectURL(k.data):null);if(!N)return;const b=document.createElement("a");b.href=N,b.download=k.name,document.body.appendChild(b),b.click(),document.body.removeChild(b),k.url||URL.revokeObjectURL(N)},g=k=>{if(!k&&k!==0)return"Unknown";if(k===0)return"0 B";const N=1024,b=["B","KB","MB"],S=Math.floor(Math.log(k)/Math.log(N));return parseFloat((k/Math.pow(N,S)).toFixed(1))+" "+b[S]};return t.length===0?c.jsxs("div",{className:"code-empty",children:[c.jsx(aa,{size:48}),c.jsx("h3",{children:"No code files yet"}),c.jsx("p",{children:"Add .bin (compiled firmware) or .ino (Arduino source) files"}),c.jsxs("button",{className:"btn btn-primary",onClick:e,children:[c.jsx(Ot,{size:18}),"Add Code Files"]})]}):c.jsxs("div",{className:"code-viewer",children:[c.jsxs("div",{className:"code-sidebar",children:[c.jsxs("div",{className:"code-section",children:[c.jsxs("h4",{className:"code-section-title",children:[c.jsx(Ro,{size:14}),"Compiled (.bin)"]}),c.jsxs("ul",{className:"code-list",children:[l.map(k=>{var N,b;return c.jsx("li",{children:c.jsxs("button",{className:`code-file ${(r==null?void 0:r.id)===k.id?"active":""}`,onClick:()=>h(k),children:[c.jsx("span",{className:"badge badge-accent",children:"BIN"}),c.jsx("span",{className:"code-file-name truncate",children:k.name}),c.jsx("span",{className:"code-file-size",children:g(((N=k.metadata)==null?void 0:N.size)||((b=k.data)==null?void 0:b.size))})]})},k.id)}),l.length===0&&c.jsx("li",{className:"code-empty-section",children:"No .bin files"})]})]}),c.jsxs("div",{className:"code-section",children:[c.jsxs("h4",{className:"code-section-title",children:[c.jsx(Jb,{size:14}),"Source (.ino)"]}),c.jsxs("ul",{className:"code-list",children:[u.map(k=>{var N,b;return c.jsx("li",{children:c.jsxs("button",{className:`code-file ${(r==null?void 0:r.id)===k.id?"active":""}`,onClick:()=>h(k),children:[c.jsx("span",{className:"badge badge-success",children:"INO"}),c.jsx("span",{className:"code-file-name truncate",children:k.name}),c.jsx("span",{className:"code-file-size",children:g(((N=k.metadata)==null?void 0:N.size)||((b=k.data)==null?void 0:b.size))})]})},k.id)}),u.length===0&&c.jsx("li",{className:"code-empty-section",children:"No .ino files"})]})]}),c.jsxs("button",{className:"btn btn-secondary code-add",onClick:e,children:[c.jsx(Ot,{size:16}),"Add Files"]})]}),c.jsx("div",{className:"code-content",children:r?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"code-header",children:[c.jsxs("div",{className:"code-file-info",children:[c.jsx("h3",{children:r.name}),c.jsx("span",{className:"text-muted",children:g(((m=r.metadata)==null?void 0:m.size)||((w=r.data)==null?void 0:w.size))})]}),c.jsxs("div",{className:"code-actions",children:[c.jsxs("button",{className:"btn btn-sm btn-secondary",onClick:()=>f(r),children:[c.jsx($d,{size:14}),"Download"]}),c.jsx("button",{className:"btn btn-sm btn-ghost text-error",onClick:()=>{n(r.id),s(null)},children:c.jsx(Xn,{size:14})})]})]}),r.type==="ino"&&i?c.jsx("pre",{className:"code-preview",children:c.jsx("code",{children:i})}):c.jsxs("div",{className:"code-binary-info",children:[c.jsx(Ro,{size:64}),c.jsx("h4",{children:"Binary File"}),c.jsx("p",{children:"This is a compiled firmware file ready for flashing."}),c.jsx("p",{className:"text-muted",children:'Use the "USB Flash" tab to upload this file to your board.'})]})]}):c.jsxs("div",{className:"code-placeholder",children:[c.jsx(aa,{size:48}),c.jsx("p",{children:"Select a file to view details"})]})})]})}const vD=115200;function wD({resources:t}){const[e,n]=z.useState(null),[r,s]=z.useState(!1),[i,o]=z.useState(!1),[l,u]=z.useState(0),[h,f]=z.useState("disconnected"),[g,m]=z.useState(null),[w,k]=z.useState([]),N=z.useRef(null),b=t.filter(_=>_.type==="bin"),S=(_,y="info")=>{const T=new Date().toLocaleTimeString();k(E=>[...E,{message:_,type:y,timestamp:T}])};z.useEffect(()=>{N.current&&(N.current.scrollTop=N.current.scrollHeight)},[w]);const I=()=>"serial"in navigator,x=async()=>{var _;if(!I()){S("WebSerial not supported. Use Chrome or Edge.","error");return}try{f("connecting"),S("Requesting serial port...");const y=await navigator.serial.requestPort();await y.open({baudRate:vD}),n(y),s(!0),f("connected"),S("Connected successfully!","success");const T=y.getInfo();T.usbVendorId&&S(`Device: VID ${T.usbVendorId.toString(16).toUpperCase()} PID ${(_=T.usbProductId)==null?void 0:_.toString(16).toUpperCase()}`)}catch(y){f("error"),S(`Connection failed: ${y.message}`,"error")}},j=async()=>{if(e)try{await e.close(),n(null),s(!1),f("disconnected"),S("Disconnected","info")}catch(_){S(`Disconnect error: ${_.message}`,"error")}},R=async()=>{if(!e||!g){S("No port or file selected","error");return}try{o(!0),u(0),f("flashing"),S(`Starting flash: ${g.name}`);let _;if(g.url){S("Downloading firmware from cloud...");const C=await fetch(g.url);if(!C.ok)throw new Error("Failed to download firmware");_=await C.arrayBuffer()}else if(g.data)_=await g.data.arrayBuffer();else throw new Error("Firmware data unavailable");const y=new Uint8Array(_),T=y.length;S(`File size: ${T} bytes`);const E=e.writable.getWriter(),A=1024;let P=0;for(let C=0;C<T;C+=A){const oe=y.slice(C,Math.min(C+A,T));await E.write(oe),P+=oe.length;const je=Math.round(P/T*100);u(je),je%25===0&&je>0&&S(`Progress: ${je}%`),await new Promise(Ct=>setTimeout(Ct,10))}E.releaseLock(),u(100),f("success"),S("Flash completed successfully!","success")}catch(_){f("error"),S(`Flash failed: ${_.message}`,"error")}finally{o(!1)}},L=async()=>{if(e)try{S("Resetting device..."),await e.setSignals({dataTerminalReady:!1,requestToSend:!0}),await new Promise(_=>setTimeout(_,100)),await e.setSignals({dataTerminalReady:!0,requestToSend:!1}),S("Device reset complete","success")}catch(_){S(`Reset failed: ${_.message}`,"error")}};return I()?c.jsxs("div",{className:"firmware-flasher",children:[c.jsxs("div",{className:"flasher-main",children:[c.jsxs("div",{className:"flasher-panel",children:[c.jsxs("h3",{children:[c.jsx(j_,{size:18}),"USB Connection"]}),c.jsxs("div",{className:"connection-status",children:[c.jsx("span",{className:`status-indicator ${h}`}),c.jsxs("span",{className:"status-text",children:[h==="disconnected"&&"Not connected",h==="connecting"&&"Connecting...",h==="connected"&&"Connected",h==="flashing"&&"Flashing...",h==="success"&&"Success!",h==="error"&&"Error"]})]}),c.jsx("div",{className:"connection-actions",children:r?c.jsxs(c.Fragment,{children:[c.jsxs("button",{className:"btn btn-secondary",onClick:L,children:[c.jsx(aD,{size:16}),"Reset"]}),c.jsxs("button",{className:"btn btn-ghost",onClick:j,children:[c.jsx(Vt,{size:16}),"Disconnect"]})]}):c.jsxs("button",{className:"btn btn-primary",onClick:x,disabled:h==="connecting",children:[c.jsx(j_,{size:16}),"Connect Device"]})})]}),c.jsxs("div",{className:"flasher-panel",children:[c.jsxs("h3",{children:[c.jsx(pc,{size:18}),"Firmware File"]}),b.length>0?c.jsx("div",{className:"file-select",children:c.jsxs("select",{className:"input",value:(g==null?void 0:g.id)||"",onChange:_=>{const y=b.find(T=>T.id===Number(_.target.value));m(y)},children:[c.jsx("option",{value:"",children:"Select a .bin file"}),b.map(_=>{var y,T;return c.jsxs("option",{value:_.id,children:[_.name," (",((((y=_.metadata)==null?void 0:y.size)||((T=_.data)==null?void 0:T.size))/1024).toFixed(1)," KB)"]},_.id)})]})}):c.jsx("p",{className:"text-muted",children:"No .bin files in this version. Add firmware files in the Code tab."})]}),c.jsxs("div",{className:"flasher-panel flasher-action",children:[c.jsx("button",{className:"btn btn-primary btn-lg flash-button",onClick:R,disabled:!r||!g||i,children:i?c.jsxs(c.Fragment,{children:[c.jsx("span",{className:"loading-spinner"}),"Flashing... ",l,"%"]}):c.jsxs(c.Fragment,{children:[c.jsx(Gd,{size:20}),"Flash Firmware"]})}),i&&c.jsx("div",{className:"progress-bar",children:c.jsx("div",{className:"progress-bar-fill",style:{width:`${l}%`}})})]})]}),c.jsxs("div",{className:"flasher-log",ref:N,children:[c.jsx("h4",{children:"Console Log"}),c.jsxs("div",{className:"log-content",children:[w.map((_,y)=>c.jsxs("div",{className:`log-entry log-${_.type}`,children:[c.jsxs("span",{className:"log-time",children:["[",_.timestamp,"]"]}),c.jsx("span",{className:"log-message",children:_.message})]},y)),w.length===0&&c.jsx("div",{className:"log-empty",children:"Logs will appear here..."})]})]})]}):c.jsxs("div",{className:"flasher-unsupported",children:[c.jsx(Wb,{size:48}),c.jsx("h3",{children:"WebSerial Not Supported"}),c.jsxs("p",{children:["Your browser doesn't support WebSerial API.",c.jsx("br",{}),"Please use ",c.jsx("strong",{children:"Google Chrome"})," or ",c.jsx("strong",{children:"Microsoft Edge"}),"."]})]})}const L_=[{id:"image",label:"Image",icon:Pi,accept:"image/*"},{id:"video",label:"Video",icon:tT,accept:"video/*"},{id:"schematic",label:"Schematic",icon:Hp,accept:"image/*"},{id:"bin",label:"Firmware (.bin)",icon:aa,accept:".bin"},{id:"ino",label:"Source (.ino)",icon:aa,accept:".ino"}];function ED({onClose:t,versionId:e,defaultType:n="image"}){const{addResource:r}=Ye(),[s,i]=z.useState(n),[o,l]=z.useState([]),[u,h]=z.useState(!1),[f,g]=z.useState(!1),m=z.useRef(null),w=z.useCallback(R=>{var y;const L=(y=R.clipboardData)==null?void 0:y.items;if(!L)return;const _=[];for(let T=0;T<L.length;T++){const E=L[T];if(E.kind==="file"){const A=E.getAsFile();if(A){let P=A.name;(P==="image.png"||!P)&&(P=`pasted-image-${Date.now()}.png`);const C=new Ro([A],P,{type:A.type});_.push(C)}}}_.length>0&&(R.preventDefault(),l(T=>[...T,..._]))},[]);z.useEffect(()=>(document.addEventListener("paste",w),()=>{document.removeEventListener("paste",w)}),[w]);const k=z.useCallback(R=>{R.preventDefault(),h(!0)},[]),N=z.useCallback(R=>{R.preventDefault(),h(!1)},[]),b=z.useCallback(R=>{R.preventDefault(),h(!1);const L=Array.from(R.dataTransfer.files);l(_=>[..._,...L])},[]),S=R=>{const L=Array.from(R.target.files);l(_=>[..._,...L])},I=R=>{l(L=>L.filter((_,y)=>y!==R))},x=async()=>{if(!(!e||o.length===0)){g(!0);try{for(const R of o)await r(e,{type:s,name:R.name,data:R,metadata:{mimeType:R.type,size:R.size,lastModified:R.lastModified}});t()}catch(R){console.error("Upload failed:",R)}finally{g(!1)}}},j=L_.find(R=>R.id===s);return c.jsx("div",{className:"modal-overlay",onClick:t,children:c.jsxs("div",{className:"modal",onClick:R=>R.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h2",{children:"Add Files"}),c.jsx("button",{className:"btn btn-icon btn-ghost",onClick:t,children:c.jsx(Vt,{size:20})})]}),c.jsxs("div",{className:"modal-content",children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"label",children:"File Type"}),c.jsx("div",{className:"file-type-selector",children:L_.map(R=>{const L=R.icon;return c.jsxs("button",{type:"button",className:`file-type-btn ${s===R.id?"active":""}`,onClick:()=>i(R.id),children:[c.jsx(L,{size:18}),c.jsx("span",{children:R.label})]},R.id)})})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"label",children:"Files"}),c.jsxs("div",{ref:m,className:`dropzone ${u?"active":""}`,onDragOver:k,onDragLeave:N,onDrop:b,children:[c.jsx("input",{type:"file",multiple:!0,accept:j==null?void 0:j.accept,onChange:S,style:{display:"none"},id:"file-input"}),c.jsxs("label",{htmlFor:"file-input",style:{cursor:"pointer",display:"contents"},children:[c.jsx(Gd,{className:"dropzone-icon"}),c.jsxs("p",{children:["Drag files, click to browse, or ",c.jsx("strong",{children:"paste from clipboard"})]}),c.jsxs("div",{className:"dropzone-hint",children:[c.jsx(fc,{size:14}),c.jsx("span",{children:"Ctrl+V to paste images"})]})]})]})]}),o.length>0&&c.jsxs("div",{className:"form-group",children:[c.jsxs("label",{className:"label",children:["Selected Files (",o.length,")"]}),c.jsx("ul",{className:"file-list",children:o.map((R,L)=>c.jsxs("li",{className:"file-item",children:[c.jsx(Ro,{size:16}),c.jsx("span",{className:"file-name truncate",children:R.name}),c.jsxs("span",{className:"file-size",children:[(R.size/1024).toFixed(1)," KB"]}),c.jsx("button",{type:"button",className:"btn btn-icon btn-ghost btn-sm",onClick:()=>I(L),children:c.jsx(Vt,{size:14})})]},L))})]}),c.jsxs("div",{className:"modal-footer",children:[c.jsx("button",{type:"button",className:"btn btn-secondary",onClick:t,children:"Cancel"}),c.jsx("button",{type:"button",className:"btn btn-primary",onClick:x,disabled:o.length===0||f,children:f?c.jsxs(c.Fragment,{children:[c.jsx("span",{className:"loading-spinner",style:{width:16,height:16}}),"Uploading..."]}):c.jsxs(c.Fragment,{children:[c.jsx(Gd,{size:16}),"Upload ",o.length," File",o.length!==1?"s":""]})})]})]})]})})}function TD({onClose:t,projectId:e,parentVersion:n,versions:r}){var I;const{createVersion:s,selectVersion:i}=Ye(),[o,l]=z.useState(""),[u,h]=z.useState(""),[f,g]=z.useState((n==null?void 0:n.id)||null),[m,w]=z.useState(!0),[k,N]=z.useState(!1),b=()=>{if(!r.length)return"v1.0";const x=r.filter(R=>R.parentVersionId===f),j=r.find(R=>R.id===f);if(j){const R=j.name.match(/v?(\d+)\.(\d+)/);if(R){const L=parseInt(R[1]),_=parseInt(R[2]);return x.length>0?`v${L}.${_}-branch${x.length+1}`:`v${L}.${_+1}`}}return`v1.${r.length}`},S=async x=>{if(x.preventDefault(),!!o.trim()){N(!0);try{const j=await s(e,{name:o.trim(),description:u.trim(),parentVersionId:f,copyResources:m,todos:[],errors:[]});await i(j),t()}catch(j){console.error("Failed to create version:",j)}finally{N(!1)}}};return c.jsx("div",{className:"modal-overlay",onClick:t,children:c.jsxs("div",{className:"modal",onClick:x=>x.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h2",{children:"Create New Version"}),c.jsx("button",{className:"btn btn-icon btn-ghost",onClick:t,children:c.jsx(Vt,{size:20})})]}),c.jsxs("form",{onSubmit:S,className:"modal-content",children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"label",children:"Version Name *"}),c.jsx("input",{type:"text",className:"input",placeholder:b(),value:o,onChange:x=>l(x.target.value),autoFocus:!0,required:!0}),c.jsxs("span",{className:"form-hint",children:["Suggested: ",b()]})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"label",children:"Description"}),c.jsx("textarea",{className:"input textarea",placeholder:"What changes in this version?",value:u,onChange:x=>h(x.target.value),rows:2})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"label",children:"Branch From"}),c.jsxs("select",{className:"input",value:f||"",onChange:x=>g(x.target.value?Number(x.target.value):null),children:[c.jsx("option",{value:"",children:"None (New Root)"}),r.map(x=>c.jsxs("option",{value:x.id,children:[x.name," ",x.id===(n==null?void 0:n.id)?"(current)":""]},x.id))]})]}),f&&c.jsx("div",{className:"form-group",children:c.jsxs("label",{className:"checkbox-label",children:[c.jsx("input",{type:"checkbox",checked:m,onChange:x=>w(x.target.checked)}),c.jsx(Xb,{size:16}),c.jsx("span",{children:"Copy files from parent version"})]})}),c.jsxs("div",{className:"version-preview",children:[c.jsx(Ei,{size:16}),c.jsx("span",{children:f?c.jsxs(c.Fragment,{children:["Creating branch from ",c.jsx("strong",{children:(I=r.find(x=>x.id===f))==null?void 0:I.name})]}):c.jsx(c.Fragment,{children:"Creating new root version"})})]}),c.jsxs("div",{className:"modal-footer",children:[c.jsx("button",{type:"button",className:"btn btn-secondary",onClick:t,children:"Cancel"}),c.jsx("button",{type:"submit",className:"btn btn-primary",disabled:!o.trim()||k,children:k?c.jsxs(c.Fragment,{children:[c.jsx("span",{className:"loading-spinner",style:{width:16,height:16}}),"Creating..."]}):c.jsxs(c.Fragment,{children:[c.jsx(Ei,{size:16}),"Create Version"]})})]})]})]})})}function ID({onClose:t,project:e}){const{updateProject:n,folders:r}=Ye(),[s,i]=z.useState(e.name),[o,l]=z.useState(e.description||""),[u,h]=z.useState(e.folderId||""),[f,g]=z.useState(e.tags?e.tags.join(", "):""),[m,w]=z.useState(null),[k,N]=z.useState(e.thumbnailUrl||null),[b,S]=z.useState(!1),[I,x]=z.useState(!1),j=A=>{const P=A.target.files[0];P&&(w(P),N(URL.createObjectURL(P)))},R=A=>{A&&A.type.startsWith("image/")&&(w(A),N(URL.createObjectURL(A)))},L=z.useCallback(A=>{var C;if(A.target.tagName==="INPUT"||A.target.tagName==="TEXTAREA")return;const P=(C=A.clipboardData)==null?void 0:C.items;if(P)for(let oe=0;oe<P.length;oe++){const je=P[oe];if(je.kind==="file"&&je.type.startsWith("image/")){const Ct=je.getAsFile();if(Ct){A.preventDefault();const Cn=new File([Ct],`thumbnail-${Date.now()}.png`,{type:Ct.type});R(Cn);break}}}},[]),_=A=>{A.preventDefault(),S(!0)},y=A=>{A.preventDefault(),S(!1)},T=A=>{A.preventDefault(),S(!1);const P=A.dataTransfer.files;P.length>0&&R(P[0])};z.useEffect(()=>(document.addEventListener("paste",L),()=>document.removeEventListener("paste",L)),[L]);const E=async A=>{A.preventDefault(),x(!0);try{const P=f.split(",").map(oe=>oe.trim()).filter(Boolean),C={name:s,description:o,folderId:u||null,tags:P,thumbnail:m};!k&&!m&&(C.thumbnailUrl=null),await n(e.id,C),t()}catch(P){console.error("Failed to update project:",P),alert("Failed to update project")}finally{x(!1)}};return c.jsx("div",{className:"modal-overlay",onClick:t,children:c.jsxs("div",{className:"modal",onClick:A=>A.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h2",{children:"Edit Project"}),c.jsx("button",{className:"btn btn-icon btn-ghost",onClick:t,children:c.jsx(Vt,{size:20})})]}),c.jsxs("form",{onSubmit:E,className:"modal-content",children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"label",children:"Project Name"}),c.jsx("input",{type:"text",className:"input",value:s,onChange:A=>i(A.target.value),required:!0})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"label",children:"Thumbnail"}),c.jsx("div",{className:"thumbnail-upload",children:k?c.jsxs("div",{className:"thumbnail-preview",children:[c.jsx("img",{src:k,alt:"Preview"}),c.jsx("button",{type:"button",className:"btn btn-icon btn-ghost thumbnail-remove",onClick:()=>{w(null),N(null)},children:c.jsx(Vt,{size:16})})]}):c.jsxs("label",{className:`dropzone thumbnail-dropzone ${b?"active":""}`,onDragOver:_,onDragLeave:y,onDrop:T,children:[c.jsx("input",{type:"file",accept:"image/*",onChange:j,hidden:!0}),c.jsx(Pi,{size:24,className:"dropzone-icon"}),c.jsx("span",{children:"Change Thumbnail"}),c.jsxs("div",{className:"dropzone-hint",children:[c.jsx(fc,{size:14}),c.jsx("span",{children:"Paste / Drop"})]})]})})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"label",children:"Description"}),c.jsx("textarea",{className:"input textarea",value:o,onChange:A=>l(A.target.value),rows:3})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"label",children:c.jsxs("span",{className:"flex items-center gap-sm",children:[c.jsx(qd,{size:14})," Folder"]})}),c.jsxs("select",{className:"input",value:u,onChange:A=>h(A.target.value),children:[c.jsx("option",{value:"",children:"(No Folder)"}),r.map(A=>c.jsx("option",{value:A.id,children:A.name},A.id))]})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"label",children:c.jsxs("span",{className:"flex items-center gap-sm",children:[c.jsx(eT,{size:14})," Tags"]})}),c.jsx("input",{type:"text",className:"input",value:f,onChange:A=>g(A.target.value),placeholder:"iot, v1 (comma separated)"})]})]}),c.jsxs("div",{className:"modal-footer",children:[c.jsx("button",{type:"button",className:"btn btn-secondary",onClick:t,children:"Cancel"}),c.jsxs("button",{className:"btn btn-primary",onClick:E,disabled:I,children:[I?c.jsx("div",{className:"loading-spinner sm"}):c.jsx(lD,{size:18}),"Save Changes"]})]})]})})}function SD({resources:t}){const{addResource:e,deleteResource:n,updateResource:r,currentVersion:s}=Ye(),[i,o]=z.useState(""),[l,u]=z.useState(!1),[h,f]=z.useState(""),[g,m]=z.useState(null),[w,k]=z.useState(""),[N,b]=z.useState("list"),S=async()=>{if(!(!i.trim()||!s)){u(!0);try{await e(s.id,{type:"note",name:"Note",metadata:{content:i.trim()}}),o("")}catch(E){console.error("Failed to add note:",E)}finally{u(!1)}}},I=E=>{E.key==="Enter"&&E.ctrlKey&&S()},x=E=>{var A;m(E.id),k(((A=E.metadata)==null?void 0:A.content)||"")},j=()=>{m(null),k("")},R=async E=>{if(w.trim())try{await r(E,{metadata:{content:w.trim()}}),m(null),k("")}catch(A){console.error("Failed to update note:",A)}},L=(E,A)=>{E.key==="Enter"&&E.ctrlKey?R(A):E.key==="Escape"&&j()},_=E=>E?new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"}).format(E):"",y=t.filter(E=>{var P,C;return(((P=E.metadata)==null?void 0:P.content)||((C=E.metadata)==null?void 0:C.text)||"").toLowerCase().includes(h.toLowerCase())}),T=E=>{const A=["var(--note-tint-1, rgba(255,255,255,0.02))","var(--note-tint-2, rgba(100,180,255,0.04))","var(--note-tint-3, rgba(180,100,255,0.03))","var(--note-tint-4, rgba(100,255,180,0.03))","var(--note-tint-5, rgba(255,200,100,0.03))"];return A[E%A.length]};return c.jsxs("div",{className:"text-entries",children:[c.jsxs("div",{className:"entries-header",children:[c.jsxs("h3",{children:[c.jsx(Hd,{size:18}),"Project Notes"]}),c.jsxs("div",{className:"entries-header-right",children:[c.jsxs("div",{className:"entries-search",children:[c.jsx(Wp,{size:14}),c.jsx("input",{type:"text",placeholder:"Search notes...",value:h,onChange:E=>f(E.target.value),className:"search-input"})]}),c.jsxs("div",{className:"entries-view-toggle",children:[c.jsx("button",{className:`btn btn-icon btn-ghost btn-sm ${N==="list"?"active":""}`,onClick:()=>b("list"),title:"List view",children:c.jsx(Z0,{size:16})}),c.jsx("button",{className:`btn btn-icon btn-ghost btn-sm ${N==="cards"?"active":""}`,onClick:()=>b("cards"),title:"Card view",children:c.jsx(J0,{size:16})})]})]})]}),c.jsxs("div",{className:"entries-input-wrapper",children:[c.jsx("textarea",{className:"input entry-textarea",placeholder:"Type a note... (Ctrl+Enter to add)",value:i,onChange:E=>o(E.target.value),onKeyDown:I}),c.jsx("div",{className:"entries-input-actions",children:c.jsxs("button",{className:"btn btn-primary btn-sm",onClick:S,disabled:!i.trim()||l,children:[c.jsx(Ot,{size:16}),"Add Note"]})})]}),c.jsx("div",{className:"entries-content",children:y.length===0?c.jsxs("div",{className:"entries-empty",children:[c.jsx(Hd,{size:48}),c.jsx("h3",{children:h?"No matching notes":"No notes yet"}),c.jsx("p",{children:h?"Try a different search term.":"Add notes, ideas, or logs for this version."})]}):c.jsx("div",{className:`entries-list ${N==="cards"?"entries-grid":""}`,children:y.map((E,A)=>{var P,C;return c.jsxs("div",{className:`entry-card ${g===E.id?"editing":""}`,style:{background:T(A)},children:[c.jsxs("div",{className:"entry-header",children:[c.jsxs("span",{className:"entry-timestamp",children:[c.jsx(Y0,{size:12}),_(E.createdAt)]}),c.jsx("div",{className:"entry-actions",children:g===E.id?c.jsxs(c.Fragment,{children:[c.jsx("button",{className:"btn btn-icon btn-ghost btn-sm text-success",onClick:()=>R(E.id),title:"Save (Ctrl+Enter)",children:c.jsx(Q0,{size:14})}),c.jsx("button",{className:"btn btn-icon btn-ghost btn-sm",onClick:j,title:"Cancel (Esc)",children:c.jsx(Vt,{size:14})})]}):c.jsxs(c.Fragment,{children:[c.jsx("button",{className:"btn btn-icon btn-ghost btn-sm",onClick:()=>x(E),title:"Edit note",children:c.jsx(oD,{size:14})}),c.jsx("button",{className:"btn btn-icon btn-ghost btn-sm text-error",onClick:()=>n(E.id),title:"Delete note",children:c.jsx(Xn,{size:14})})]})})]}),g===E.id?c.jsx("textarea",{className:"input entry-edit-textarea",value:w,onChange:oe=>k(oe.target.value),onKeyDown:oe=>L(oe,E.id),autoFocus:!0}):c.jsx("div",{className:"entry-content",onClick:()=>x(E),children:((P=E.metadata)==null?void 0:P.content)||((C=E.metadata)==null?void 0:C.text)||""})]},E.id)})})})]})}const kD=[{id:"gallery",label:"Gallery",icon:Pi},{id:"code",label:"Code",icon:aa},{id:"notes",label:"Notes",icon:Hd},{id:"schematics",label:"Schematics",icon:Hp},{id:"flasher",label:"USB Flash",icon:pc},{id:"links",label:"AI Chats",icon:Zb},{id:"todo",label:"To-Do",icon:K0},{id:"errors",label:"Errors",icon:$p}];function AD(){const{currentProject:t,currentVersion:e,versions:n,resources:r,selectProject:s,deleteProject:i,selectVersion:o}=Ye(),[l,u]=z.useState("gallery"),[h,f]=z.useState(!1),[g,m]=z.useState(!1),[w,k]=z.useState(!1),[N,b]=z.useState(!1);if(!t)return null;const S=()=>{s(null)},I=async()=>{await i(t.id)},x=()=>{switch(l){case"gallery":return r.filter(R=>R.type==="image"||R.type==="video");case"code":return r.filter(R=>R.type==="bin"||R.type==="ino");case"schematics":return r.filter(R=>R.type==="schematic");case"notes":return r.filter(R=>R.type==="note");case"links":return r.filter(R=>R.type==="link");default:return[]}},j=()=>{switch(l){case"gallery":return c.jsx(V_,{resources:x(),onAdd:()=>f(!0)});case"code":return c.jsx(_D,{resources:x(),onAdd:()=>f(!0)});case"schematics":return c.jsx(V_,{resources:x(),onAdd:()=>f(!0),type:"schematic"});case"notes":return c.jsx(SD,{resources:x()});case"flasher":return c.jsx(wD,{resources:r.filter(R=>R.type==="bin")});case"links":return c.jsx(yD,{resources:x()});case"todo":return c.jsx(mD,{version:e});case"errors":return c.jsx(gD,{version:e});default:return null}};return c.jsxs("div",{className:"project-detail animate-fadeIn",children:[c.jsxs("div",{className:"detail-header",children:[c.jsxs("button",{className:"btn btn-ghost",onClick:S,children:[c.jsx(G0,{size:18}),"Back"]}),c.jsxs("div",{className:"detail-actions",children:[c.jsxs("button",{className:"btn btn-secondary",onClick:()=>b(!0),children:[c.jsx(iD,{size:16}),"Edit"]}),c.jsx("button",{className:"btn btn-ghost text-error",onClick:()=>m(!0),children:c.jsx(Xn,{size:16})})]})]}),c.jsxs("div",{className:"detail-info",children:[c.jsx("div",{className:"detail-thumbnail",children:t.thumbnailUrl||t.thumbnail?c.jsx("img",{src:t.thumbnailUrl||URL.createObjectURL(t.thumbnail),alt:t.name}):c.jsx("div",{className:"detail-thumbnail-placeholder",children:c.jsx(pc,{size:48})})}),c.jsxs("div",{className:"detail-meta",children:[c.jsx("h1",{className:"detail-title",children:t.name}),t.description&&c.jsx("p",{className:"detail-description",children:t.description}),e&&c.jsxs("div",{className:"version-badge",children:[c.jsx(Ei,{size:14}),c.jsx("span",{children:e.name})]}),t.tags&&t.tags.length>0&&c.jsx("div",{className:"tags-list",children:t.tags.map((R,L)=>c.jsxs("span",{className:"badge badge-sm",children:[c.jsx(Tag,{size:12})," ",R]},L))})]})]}),c.jsxs("div",{className:"version-section",children:[c.jsxs("div",{className:"section-header",children:[c.jsxs("h2",{children:[c.jsx(Ei,{size:18}),"Version Tree"]}),c.jsxs("button",{className:"btn btn-sm btn-secondary",onClick:()=>k(!0),children:[c.jsx(Ot,{size:14}),"New Version"]})]}),c.jsx(pD,{versions:n,currentVersionId:e==null?void 0:e.id,onSelectVersion:o})]}),c.jsx("div",{className:"tabs",children:kD.map(R=>{const L=R.icon;return c.jsxs("button",{className:`tab ${l===R.id?"active":""}`,onClick:()=>u(R.id),children:[c.jsx(L,{size:16}),c.jsx("span",{children:R.label})]},R.id)})}),c.jsx("div",{className:"tab-content",children:j()}),h&&c.jsx(ED,{onClose:()=>f(!1),versionId:e==null?void 0:e.id,defaultType:l==="schematics"?"schematic":l==="code"?"bin":"image"}),w&&c.jsx(TD,{onClose:()=>k(!1),projectId:t.id,parentVersion:e,versions:n}),N&&c.jsx(ID,{onClose:()=>b(!1),project:t}),g&&c.jsx("div",{className:"modal-overlay",onClick:()=>m(!1),children:c.jsxs("div",{className:"modal confirm-dialog",onClick:R=>R.stopPropagation(),children:[c.jsxs("div",{className:"modal-content",children:[c.jsx($p,{className:"confirm-icon"}),c.jsx("h3",{children:"Delete Project?"}),c.jsxs("p",{className:"text-secondary",children:['This will permanently delete "',t.name,'" and all its versions and files.']})]}),c.jsxs("div",{className:"modal-footer",children:[c.jsx("button",{className:"btn btn-secondary",onClick:()=>m(!1),children:"Cancel"}),c.jsx("button",{className:"btn btn-danger",onClick:I,children:"Delete"})]})]})})]})}function xD({onClose:t}){const{createProject:e}=Ye(),[n,r]=z.useState(""),[s,i]=z.useState(""),[o,l]=z.useState(null),[u,h]=z.useState(null),[f,g]=z.useState(!1),[m,w]=z.useState(!1),k=R=>{const L=R.target.files[0];L&&(l(L),h(URL.createObjectURL(L)))},N=R=>{R&&R.type.startsWith("image/")&&(l(R),h(URL.createObjectURL(R)))},b=z.useCallback(R=>{var _;if(R.target.tagName==="INPUT"||R.target.tagName==="TEXTAREA")return;const L=(_=R.clipboardData)==null?void 0:_.items;if(L)for(let y=0;y<L.length;y++){const T=L[y];if(T.kind==="file"&&T.type.startsWith("image/")){const E=T.getAsFile();if(E){R.preventDefault();const A=new File([E],`thumbnail-${Date.now()}.png`,{type:E.type});N(A);break}}}},[]),S=R=>{R.preventDefault(),w(!0)},I=R=>{R.preventDefault(),w(!1)},x=R=>{R.preventDefault(),w(!1);const L=R.dataTransfer.files;if(L.length>0){const _=L[0];N(_)}};z.useEffect(()=>(document.addEventListener("paste",b),()=>{document.removeEventListener("paste",b)}),[b]);const j=async R=>{if(R.preventDefault(),!!n.trim()){g(!0);try{await e({name:n.trim(),description:s.trim(),thumbnail:o}),t()}catch(L){console.error("Failed to create project:",L)}finally{g(!1)}}};return c.jsx("div",{className:"modal-overlay",onClick:t,children:c.jsxs("div",{className:"modal",onClick:R=>R.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h2",{children:"Create New Project"}),c.jsx("button",{className:"btn btn-icon btn-ghost",onClick:t,children:c.jsx(Vt,{size:20})})]}),c.jsxs("form",{onSubmit:j,className:"modal-content",children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"label",children:"Project Name *"}),c.jsx("input",{type:"text",className:"input",placeholder:"e.g., RC Car with PS4 Controller",value:n,onChange:R=>r(R.target.value),autoFocus:!0,required:!0})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"label",children:"Description"}),c.jsx("textarea",{className:"input textarea",placeholder:"Describe your project...",value:s,onChange:R=>i(R.target.value),rows:3})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"label",children:"Thumbnail"}),c.jsx("div",{className:"thumbnail-upload",children:u?c.jsxs("div",{className:"thumbnail-preview",children:[c.jsx("img",{src:u,alt:"Preview"}),c.jsx("button",{type:"button",className:"btn btn-icon btn-ghost thumbnail-remove",onClick:()=>{l(null),h(null)},children:c.jsx(Vt,{size:16})})]}):c.jsxs("label",{className:`dropzone thumbnail-dropzone ${m?"active":""}`,onDragOver:S,onDragLeave:I,onDrop:x,children:[c.jsx("input",{type:"file",accept:"image/*",onChange:k,hidden:!0}),c.jsx(Pi,{size:24,className:"dropzone-icon"}),c.jsxs("span",{children:["Click, drag, or ",c.jsx("strong",{children:"paste"})," image"]}),c.jsxs("div",{className:"dropzone-hint",children:[c.jsx(fc,{size:14}),c.jsx("span",{children:"Ctrl+V to paste"})]})]})})]}),c.jsxs("div",{className:"modal-footer",children:[c.jsx("button",{type:"button",className:"btn btn-secondary",onClick:t,children:"Cancel"}),c.jsx("button",{type:"submit",className:"btn btn-primary",disabled:!n.trim()||f,children:f?c.jsxs(c.Fragment,{children:[c.jsx("span",{className:"loading-spinner",style:{width:16,height:16}}),"Creating..."]}):"Create Project"})]})]})]})})}function CD(){const{inspirations:t,addInspiration:e,deleteInspiration:n,setCurrentView:r}=Ye(),[s,i]=z.useState(""),[o,l]=z.useState(!1),[u,h]=z.useState(!1),[f,g]=z.useState(""),[m,w]=z.useState(""),[k,N]=z.useState(""),[b,S]=z.useState([]),[I,x]=z.useState(null),[j,R]=z.useState(null),[L,_]=z.useState(""),[y,T]=z.useState(!1),E=()=>{g(""),w(""),N(""),S([]),x(null),R(null),_(""),l(!1)},A=()=>{const U=k.trim().toLowerCase();U&&!b.includes(U)&&S([...b,U]),N("")},P=U=>{S(b.filter(me=>me!==U))},C=U=>{U.key==="Enter"?(U.preventDefault(),A()):U.key==="Backspace"&&!k&&b.length>0&&S(b.slice(0,-1))},oe=U=>{U&&U.type.startsWith("image/")&&(x(U),R(URL.createObjectURL(U)))},je=U=>{U.preventDefault(),T(!0)},Ct=U=>{U.preventDefault(),T(!1)},Cn=U=>{U.preventDefault(),T(!1),U.dataTransfer.files.length>0&&oe(U.dataTransfer.files[0])},H=z.useCallback(U=>{var Pe;if(U.target.tagName==="INPUT"||U.target.tagName==="TEXTAREA")return;const me=(Pe=U.clipboardData)==null?void 0:Pe.items;if(me){for(let Xe=0;Xe<me.length;Xe++)if(me[Xe].kind==="file"&&me[Xe].type.startsWith("image/")){const un=me[Xe].getAsFile();if(un){U.preventDefault(),oe(new File([un],`inspiration-${Date.now()}.png`,{type:un.type}));break}}}},[]);z.useEffect(()=>{if(o)return document.addEventListener("paste",H),()=>document.removeEventListener("paste",H)},[o,H]);const Q=async U=>{if(U.preventDefault(),!!f.trim()){h(!0);try{await e({title:f.trim(),description:m.trim(),tags:b,image:I,url:L.trim()}),E()}catch(me){console.error("Failed to add inspiration:",me)}finally{h(!1)}}},ee=async U=>{confirm("Delete this inspiration?")&&await n(U)},he=t.filter(U=>{var Pe,Xe,un;const me=s.toLowerCase();return me?((Pe=U.title)==null?void 0:Pe.toLowerCase().includes(me))||((Xe=U.description)==null?void 0:Xe.toLowerCase().includes(me))||((un=U.tags)==null?void 0:un.some(Ca=>Ca.toLowerCase().includes(me))):!0}),we=[...new Set(t.flatMap(U=>U.tags||[]))],Rn=U=>U?new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric",year:"numeric"}).format(U):"";return c.jsxs("div",{className:"inspiration-board",children:[c.jsxs("div",{className:"inspiration-header",children:[c.jsxs("div",{className:"inspiration-header-left",children:[c.jsx("button",{className:"btn btn-icon btn-ghost",onClick:()=>r("projects"),title:"Back to Projects",children:c.jsx(G0,{size:18})}),c.jsxs("h2",{children:[c.jsx(Wd,{size:22}),"Inspiration Board"]})]}),c.jsxs("div",{className:"inspiration-header-right",children:[c.jsxs("div",{className:"inspiration-search",children:[c.jsx(Wp,{size:14}),c.jsx("input",{type:"text",placeholder:"Search by title, tag...",value:s,onChange:U=>i(U.target.value),className:"search-input"})]}),c.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>l(!0),children:[c.jsx(Ot,{size:16}),"Add"]})]})]}),we.length>0&&c.jsx("div",{className:"inspiration-tags-filter",children:we.map(U=>c.jsxs("button",{className:`tag-chip ${s===U?"active":""}`,onClick:()=>i(s===U?"":U),children:[c.jsx(eT,{size:10}),U]},U))}),o&&c.jsx("div",{className:"inspiration-form-overlay",onClick:()=>E(),children:c.jsxs("div",{className:"inspiration-form",onClick:U=>U.stopPropagation(),children:[c.jsxs("div",{className:"form-header",children:[c.jsx("h3",{children:"Add Inspiration"}),c.jsx("button",{className:"btn btn-icon btn-ghost",onClick:()=>E(),children:c.jsx(Vt,{size:18})})]}),c.jsxs("form",{onSubmit:Q,children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"label",children:"Title *"}),c.jsx("input",{type:"text",className:"input",placeholder:"What inspired you?",value:f,onChange:U=>g(U.target.value),autoFocus:!0,required:!0})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"label",children:"Description"}),c.jsx("textarea",{className:"input textarea",placeholder:"Notes or details...",value:m,onChange:U=>w(U.target.value),rows:3})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"label",children:"URL"}),c.jsx("input",{type:"url",className:"input",placeholder:"https://...",value:L,onChange:U=>_(U.target.value)})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"label",children:"Tags"}),c.jsxs("div",{className:"tags-input-wrapper",children:[b.map(U=>c.jsxs("span",{className:"tag-chip",children:[U,c.jsx("button",{type:"button",onClick:()=>P(U),children:c.jsx(Vt,{size:10})})]},U)),c.jsx("input",{type:"text",className:"tag-text-input",placeholder:b.length===0?"Type and press Enter...":"",value:k,onChange:U=>N(U.target.value),onKeyDown:C})]})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"label",children:"Image"}),j?c.jsxs("div",{className:"image-preview",children:[c.jsx("img",{src:j,alt:"Preview"}),c.jsx("button",{type:"button",className:"btn btn-icon btn-ghost image-remove",onClick:()=>{x(null),R(null)},children:c.jsx(Vt,{size:14})})]}):c.jsxs("label",{className:`dropzone ${y?"active":""}`,onDragOver:je,onDragLeave:Ct,onDrop:Cn,children:[c.jsx("input",{type:"file",accept:"image/*",onChange:U=>oe(U.target.files[0]),hidden:!0}),c.jsx(Pi,{size:20}),c.jsxs("span",{children:["Click, drag, or ",c.jsx("strong",{children:"paste"})]}),c.jsxs("div",{className:"dropzone-hint",children:[c.jsx(fc,{size:12}),c.jsx("span",{children:"Ctrl+V"})]})]})]}),c.jsxs("div",{className:"form-footer",children:[c.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>E(),children:"Cancel"}),c.jsx("button",{type:"submit",className:"btn btn-primary",disabled:!f.trim()||u,children:u?"Adding...":"Add Inspiration"})]})]})]})}),c.jsx("div",{className:"inspiration-content",children:he.length===0?c.jsxs("div",{className:"inspiration-empty",children:[c.jsx(Wd,{size:48}),c.jsx("h3",{children:s?"No matching inspirations":"No inspirations yet"}),c.jsx("p",{children:s?"Try different search terms.":"Collect ideas, references, and resources that inspire you."})]}):c.jsx("div",{className:"inspiration-grid",children:he.map(U=>{var me;return c.jsxs("div",{className:"inspiration-card",children:[U.imageUrl&&c.jsx("div",{className:"inspiration-card-image",children:c.jsx("img",{src:U.imageUrl,alt:U.title,loading:"lazy"})}),c.jsxs("div",{className:"inspiration-card-body",children:[c.jsxs("div",{className:"inspiration-card-top",children:[c.jsx("h4",{children:U.title}),c.jsx("button",{className:"btn btn-icon btn-ghost btn-xs inspiration-delete",onClick:()=>ee(U.id),children:c.jsx(Xn,{size:13})})]}),U.description&&c.jsx("p",{className:"inspiration-card-desc",children:U.description}),U.url&&c.jsxs("a",{href:U.url,target:"_blank",rel:"noopener noreferrer",className:"inspiration-card-link",children:[c.jsx(X0,{size:12}),new URL(U.url).hostname]}),((me=U.tags)==null?void 0:me.length)>0&&c.jsx("div",{className:"inspiration-card-tags",children:U.tags.map(Pe=>c.jsx("span",{className:"tag-chip tag-chip-sm",onClick:()=>i(Pe),children:Pe},Pe))}),c.jsx("span",{className:"inspiration-card-date",children:Rn(U.createdAt)})]})]},U.id)})})})]})}function RD({children:t}){const{user:e,authLoading:n,login:r}=Ye();return n?c.jsxs("div",{className:"auth-loading",children:[c.jsx("div",{className:"loading-spinner"}),c.jsx("p",{children:"Connecting to NiroVault Cloud..."})]}):e?t:c.jsx("div",{className:"auth-container",children:c.jsxs("div",{className:"auth-card",children:[c.jsxs("div",{className:"auth-logo",children:[c.jsx(Hp,{size:48}),c.jsx("h1",{children:"NiroVault"})]}),c.jsx("p",{className:"auth-subtitle",children:"Sync your electronics projects across all devices"}),c.jsxs("button",{className:"btn btn-primary btn-lg auth-btn",onClick:r,children:[c.jsx(eD,{size:20}),"Sign in with Google"]}),c.jsxs("div",{className:"auth-features",children:[c.jsxs("div",{className:"feature-item",children:[c.jsx("span",{children:"☁️"}),c.jsx("p",{children:"Real-time Cloud Sync"})]}),c.jsxs("div",{className:"feature-item",children:[c.jsx("span",{children:"📱"}),c.jsx("p",{children:"Mobile Accessible"})]}),c.jsxs("div",{className:"feature-item",children:[c.jsx("span",{children:"🔒"}),c.jsx("p",{children:"Secure Storage"})]})]})]})})}function ND(){const{currentProject:t,currentView:e,setCurrentView:n,initAuth:r}=Ye(),[s,i]=z.useState(!1);z.useEffect(()=>{const u=r();return()=>u()},[]);const o=()=>{n("projects"),i(!0)},l=()=>e==="inspiration"?c.jsx(CD,{}):t?c.jsx(AD,{}):c.jsx(fD,{onCreateProject:o});return c.jsx(RD,{children:c.jsxs(hD,{onCreateProject:o,children:[l(),s&&c.jsx(xD,{onClose:()=>i(!1)})]})})}Sh.createRoot(document.getElementById("root")).render(c.jsx(K_.StrictMode,{children:c.jsx(ND,{})}));
//# sourceMappingURL=index-CgBB7Vjt.js.map
