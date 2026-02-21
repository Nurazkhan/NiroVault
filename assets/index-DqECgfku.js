(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function W_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var G_={exports:{}},Rc={},K_={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ya=Symbol.for("react.element"),MT=Symbol.for("react.portal"),FT=Symbol.for("react.fragment"),UT=Symbol.for("react.strict_mode"),zT=Symbol.for("react.profiler"),BT=Symbol.for("react.provider"),$T=Symbol.for("react.context"),HT=Symbol.for("react.forward_ref"),qT=Symbol.for("react.suspense"),WT=Symbol.for("react.memo"),GT=Symbol.for("react.lazy"),Ym=Symbol.iterator;function KT(t){return t===null||typeof t!="object"?null:(t=Ym&&t[Ym]||t["@@iterator"],typeof t=="function"?t:null)}var Q_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y_=Object.assign,X_={};function Ai(t,e,n){this.props=t,this.context=e,this.refs=X_,this.updater=n||Q_}Ai.prototype.isReactComponent={};Ai.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ai.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function J_(){}J_.prototype=Ai.prototype;function tf(t,e,n){this.props=t,this.context=e,this.refs=X_,this.updater=n||Q_}var nf=tf.prototype=new J_;nf.constructor=tf;Y_(nf,Ai.prototype);nf.isPureReactComponent=!0;var Xm=Array.isArray,Z_=Object.prototype.hasOwnProperty,rf={current:null},ev={key:!0,ref:!0,__self:!0,__source:!0};function tv(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Z_.call(e,r)&&!ev.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:ya,type:t,key:i,ref:o,props:s,_owner:rf.current}}function QT(t,e){return{$$typeof:ya,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function sf(t){return typeof t=="object"&&t!==null&&t.$$typeof===ya}function YT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Jm=/\/+/g;function Bu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?YT(""+t.key):e.toString(36)}function wl(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ya:case MT:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Bu(o,0):r,Xm(s)?(n="",t!=null&&(n=t.replace(Jm,"$&/")+"/"),wl(s,e,n,"",function(h){return h})):s!=null&&(sf(s)&&(s=QT(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Jm,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Xm(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+Bu(i,l);o+=wl(i,e,n,u,s)}else if(u=KT(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+Bu(i,l++),o+=wl(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Wa(t,e,n){if(t==null)return t;var r=[],s=0;return wl(t,r,"","",function(i){return e.call(n,i,s++)}),r}function XT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var It={current:null},El={transition:null},JT={ReactCurrentDispatcher:It,ReactCurrentBatchConfig:El,ReactCurrentOwner:rf};function nv(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:Wa,forEach:function(t,e,n){Wa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Wa(t,function(){e++}),e},toArray:function(t){return Wa(t,function(e){return e})||[]},only:function(t){if(!sf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=Ai;re.Fragment=FT;re.Profiler=zT;re.PureComponent=tf;re.StrictMode=UT;re.Suspense=qT;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=JT;re.act=nv;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Y_({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=rf.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Z_.call(e,u)&&!ev.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:ya,type:t.type,key:s,ref:i,props:r,_owner:o}};re.createContext=function(t){return t={$$typeof:$T,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:BT,_context:t},t.Consumer=t};re.createElement=tv;re.createFactory=function(t){var e=tv.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:HT,render:t}};re.isValidElement=sf;re.lazy=function(t){return{$$typeof:GT,_payload:{_status:-1,_result:t},_init:XT}};re.memo=function(t,e){return{$$typeof:WT,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=El.transition;El.transition={};try{t()}finally{El.transition=e}};re.unstable_act=nv;re.useCallback=function(t,e){return It.current.useCallback(t,e)};re.useContext=function(t){return It.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return It.current.useDeferredValue(t)};re.useEffect=function(t,e){return It.current.useEffect(t,e)};re.useId=function(){return It.current.useId()};re.useImperativeHandle=function(t,e,n){return It.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return It.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return It.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return It.current.useMemo(t,e)};re.useReducer=function(t,e,n){return It.current.useReducer(t,e,n)};re.useRef=function(t){return It.current.useRef(t)};re.useState=function(t){return It.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return It.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return It.current.useTransition()};re.version="18.3.1";K_.exports=re;var F=K_.exports;const rv=W_(F);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ZT=F,eI=Symbol.for("react.element"),tI=Symbol.for("react.fragment"),nI=Object.prototype.hasOwnProperty,rI=ZT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sI={key:!0,ref:!0,__self:!0,__source:!0};function sv(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)nI.call(e,r)&&!sI.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:eI,type:t,key:i,ref:o,props:s,_owner:rI.current}}Rc.Fragment=tI;Rc.jsx=sv;Rc.jsxs=sv;G_.exports=Rc;var c=G_.exports,Ph={},iv={exports:{}},$t={},ov={exports:{}},av={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(H,Q){var Z=H.length;H.push(Q);e:for(;0<Z;){var he=Z-1>>>1,z=H[he];if(0<s(z,Q))H[he]=Q,H[Z]=z,Z=he;else break e}}function n(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var Q=H[0],Z=H.pop();if(Z!==Q){H[0]=Z;e:for(var he=0,z=H.length,de=z>>>1;he<de;){var U=2*(he+1)-1,fe=H[U],ve=U+1,Me=H[ve];if(0>s(fe,Z))ve<z&&0>s(Me,fe)?(H[he]=Me,H[ve]=Z,he=ve):(H[he]=fe,H[U]=Z,he=U);else if(ve<z&&0>s(Me,Z))H[he]=Me,H[ve]=Z,he=ve;else break e}}return Q}function s(H,Q){var Z=H.sortIndex-Q.sortIndex;return Z!==0?Z:H.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,g=null,m=3,w=!1,x=!1,R=!1,b=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(H){for(var Q=n(h);Q!==null;){if(Q.callback===null)r(h);else if(Q.startTime<=H)r(h),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(h)}}function D(H){if(R=!1,A(H),!x)if(n(u)!==null)x=!0,mt(N);else{var Q=n(h);Q!==null&&qt(D,Q.startTime-H)}}function N(H,Q){x=!1,R&&(R=!1,S(y),y=-1),w=!0;var Z=m;try{for(A(Q),g=n(u);g!==null&&(!(g.expirationTime>Q)||H&&!k());){var he=g.callback;if(typeof he=="function"){g.callback=null,m=g.priorityLevel;var z=he(g.expirationTime<=Q);Q=t.unstable_now(),typeof z=="function"?g.callback=z:g===n(u)&&r(u),A(Q)}else r(u);g=n(u)}if(g!==null)var de=!0;else{var U=n(h);U!==null&&qt(D,U.startTime-Q),de=!1}return de}finally{g=null,m=Z,w=!1}}var V=!1,_=null,y=-1,T=5,E=-1;function k(){return!(t.unstable_now()-E<T)}function P(){if(_!==null){var H=t.unstable_now();E=H;var Q=!0;try{Q=_(!0,H)}finally{Q?C():(V=!1,_=null)}}else V=!1}var C;if(typeof I=="function")C=function(){I(P)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,Pe=se.port2;se.port1.onmessage=P,C=function(){Pe.postMessage(null)}}else C=function(){b(P,0)};function mt(H){_=H,V||(V=!0,C())}function qt(H,Q){y=b(function(){H(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_continueExecution=function(){x||w||(x=!0,mt(N))},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(H){switch(m){case 1:case 2:case 3:var Q=3;break;default:Q=m}var Z=m;m=Q;try{return H()}finally{m=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(H,Q){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var Z=m;m=H;try{return Q()}finally{m=Z}},t.unstable_scheduleCallback=function(H,Q,Z){var he=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?he+Z:he):Z=he,H){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=Z+z,H={id:f++,callback:Q,priorityLevel:H,startTime:Z,expirationTime:z,sortIndex:-1},Z>he?(H.sortIndex=Z,e(h,H),n(u)===null&&H===n(h)&&(R?(S(y),y=-1):R=!0,qt(D,Z-he))):(H.sortIndex=z,e(u,H),x||w||(x=!0,mt(N))),H},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(H){var Q=m;return function(){var Z=m;m=Q;try{return H.apply(this,arguments)}finally{m=Z}}}})(av);ov.exports=av;var iI=ov.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oI=F,Bt=iI;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lv=new Set,Mo={};function Ss(t,e){hi(t,e),hi(t+"Capture",e)}function hi(t,e){for(Mo[t]=e,t=0;t<e.length;t++)lv.add(e[t])}var $n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bh=Object.prototype.hasOwnProperty,aI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Zm={},eg={};function lI(t){return bh.call(eg,t)?!0:bh.call(Zm,t)?!1:aI.test(t)?eg[t]=!0:(Zm[t]=!0,!1)}function cI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function uI(t,e,n,r){if(e===null||typeof e>"u"||cI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function St(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var st={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){st[t]=new St(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];st[e]=new St(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){st[t]=new St(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){st[t]=new St(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){st[t]=new St(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){st[t]=new St(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){st[t]=new St(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){st[t]=new St(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){st[t]=new St(t,5,!1,t.toLowerCase(),null,!1,!1)});var of=/[\-:]([a-z])/g;function af(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(of,af);st[e]=new St(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(of,af);st[e]=new St(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(of,af);st[e]=new St(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){st[t]=new St(t,1,!1,t.toLowerCase(),null,!1,!1)});st.xlinkHref=new St("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){st[t]=new St(t,1,!1,t.toLowerCase(),null,!0,!0)});function lf(t,e,n,r){var s=st.hasOwnProperty(e)?st[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(uI(e,n,s,r)&&(n=null),r||s===null?lI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var er=oI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ga=Symbol.for("react.element"),Us=Symbol.for("react.portal"),zs=Symbol.for("react.fragment"),cf=Symbol.for("react.strict_mode"),jh=Symbol.for("react.profiler"),cv=Symbol.for("react.provider"),uv=Symbol.for("react.context"),uf=Symbol.for("react.forward_ref"),Dh=Symbol.for("react.suspense"),Vh=Symbol.for("react.suspense_list"),hf=Symbol.for("react.memo"),cr=Symbol.for("react.lazy"),hv=Symbol.for("react.offscreen"),tg=Symbol.iterator;function to(t){return t===null||typeof t!="object"?null:(t=tg&&t[tg]||t["@@iterator"],typeof t=="function"?t:null)}var Ce=Object.assign,$u;function ho(t){if($u===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);$u=e&&e[1]||""}return`
`+$u+t}var Hu=!1;function qu(t,e){if(!t||Hu)return"";Hu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var s=h.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Hu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ho(t):""}function hI(t){switch(t.tag){case 5:return ho(t.type);case 16:return ho("Lazy");case 13:return ho("Suspense");case 19:return ho("SuspenseList");case 0:case 2:case 15:return t=qu(t.type,!1),t;case 11:return t=qu(t.type.render,!1),t;case 1:return t=qu(t.type,!0),t;default:return""}}function Lh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case zs:return"Fragment";case Us:return"Portal";case jh:return"Profiler";case cf:return"StrictMode";case Dh:return"Suspense";case Vh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case uv:return(t.displayName||"Context")+".Consumer";case cv:return(t._context.displayName||"Context")+".Provider";case uf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case hf:return e=t.displayName||null,e!==null?e:Lh(t.type)||"Memo";case cr:e=t._payload,t=t._init;try{return Lh(t(e))}catch{}}return null}function dI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Lh(e);case 8:return e===cf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function br(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function dv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function fI(t){var e=dv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ka(t){t._valueTracker||(t._valueTracker=fI(t))}function fv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=dv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Bl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Oh(t,e){var n=e.checked;return Ce({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ng(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=br(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function pv(t,e){e=e.checked,e!=null&&lf(t,"checked",e,!1)}function Mh(t,e){pv(t,e);var n=br(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Fh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Fh(t,e.type,br(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function rg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Fh(t,e,n){(e!=="number"||Bl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var fo=Array.isArray;function Js(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+br(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Uh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return Ce({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function sg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(fo(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:br(n)}}function mv(t,e){var n=br(e.value),r=br(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ig(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function gv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?gv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Qa,yv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Qa=Qa||document.createElement("div"),Qa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Qa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Fo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var wo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pI=["Webkit","ms","Moz","O"];Object.keys(wo).forEach(function(t){pI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),wo[e]=wo[t]})});function _v(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||wo.hasOwnProperty(t)&&wo[t]?(""+e).trim():e+"px"}function vv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=_v(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var mI=Ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bh(t,e){if(e){if(mI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function $h(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hh=null;function df(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qh=null,Zs=null,ei=null;function og(t){if(t=wa(t)){if(typeof qh!="function")throw Error(B(280));var e=t.stateNode;e&&(e=Vc(e),qh(t.stateNode,t.type,e))}}function wv(t){Zs?ei?ei.push(t):ei=[t]:Zs=t}function Ev(){if(Zs){var t=Zs,e=ei;if(ei=Zs=null,og(t),e)for(t=0;t<e.length;t++)og(e[t])}}function Tv(t,e){return t(e)}function Iv(){}var Wu=!1;function Sv(t,e,n){if(Wu)return t(e,n);Wu=!0;try{return Tv(t,e,n)}finally{Wu=!1,(Zs!==null||ei!==null)&&(Iv(),Ev())}}function Uo(t,e){var n=t.stateNode;if(n===null)return null;var r=Vc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var Wh=!1;if($n)try{var no={};Object.defineProperty(no,"passive",{get:function(){Wh=!0}}),window.addEventListener("test",no,no),window.removeEventListener("test",no,no)}catch{Wh=!1}function gI(t,e,n,r,s,i,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Eo=!1,$l=null,Hl=!1,Gh=null,yI={onError:function(t){Eo=!0,$l=t}};function _I(t,e,n,r,s,i,o,l,u){Eo=!1,$l=null,gI.apply(yI,arguments)}function vI(t,e,n,r,s,i,o,l,u){if(_I.apply(this,arguments),Eo){if(Eo){var h=$l;Eo=!1,$l=null}else throw Error(B(198));Hl||(Hl=!0,Gh=h)}}function xs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function xv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ag(t){if(xs(t)!==t)throw Error(B(188))}function wI(t){var e=t.alternate;if(!e){if(e=xs(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return ag(s),t;if(i===r)return ag(s),e;i=i.sibling}throw Error(B(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function kv(t){return t=wI(t),t!==null?Av(t):null}function Av(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Av(t);if(e!==null)return e;t=t.sibling}return null}var Cv=Bt.unstable_scheduleCallback,lg=Bt.unstable_cancelCallback,EI=Bt.unstable_shouldYield,TI=Bt.unstable_requestPaint,Oe=Bt.unstable_now,II=Bt.unstable_getCurrentPriorityLevel,ff=Bt.unstable_ImmediatePriority,Nv=Bt.unstable_UserBlockingPriority,ql=Bt.unstable_NormalPriority,SI=Bt.unstable_LowPriority,Rv=Bt.unstable_IdlePriority,Pc=null,wn=null;function xI(t){if(wn&&typeof wn.onCommitFiberRoot=="function")try{wn.onCommitFiberRoot(Pc,t,void 0,(t.current.flags&128)===128)}catch{}}var on=Math.clz32?Math.clz32:CI,kI=Math.log,AI=Math.LN2;function CI(t){return t>>>=0,t===0?32:31-(kI(t)/AI|0)|0}var Ya=64,Xa=4194304;function po(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Wl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=po(l):(i&=o,i!==0&&(r=po(i)))}else o=n&~s,o!==0?r=po(o):i!==0&&(r=po(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-on(e),s=1<<n,r|=t[n],e&=~s;return r}function NI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function RI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-on(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=NI(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function Kh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Pv(){var t=Ya;return Ya<<=1,!(Ya&4194240)&&(Ya=64),t}function Gu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function _a(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-on(e),t[e]=n}function PI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-on(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function pf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-on(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var pe=0;function bv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var jv,mf,Dv,Vv,Lv,Qh=!1,Ja=[],wr=null,Er=null,Tr=null,zo=new Map,Bo=new Map,hr=[],bI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cg(t,e){switch(t){case"focusin":case"focusout":wr=null;break;case"dragenter":case"dragleave":Er=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":zo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bo.delete(e.pointerId)}}function ro(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=wa(e),e!==null&&mf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function jI(t,e,n,r,s){switch(e){case"focusin":return wr=ro(wr,t,e,n,r,s),!0;case"dragenter":return Er=ro(Er,t,e,n,r,s),!0;case"mouseover":return Tr=ro(Tr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return zo.set(i,ro(zo.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Bo.set(i,ro(Bo.get(i)||null,t,e,n,r,s)),!0}return!1}function Ov(t){var e=ns(t.target);if(e!==null){var n=xs(e);if(n!==null){if(e=n.tag,e===13){if(e=xv(n),e!==null){t.blockedOn=e,Lv(t.priority,function(){Dv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Tl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Yh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Hh=r,n.target.dispatchEvent(r),Hh=null}else return e=wa(n),e!==null&&mf(e),t.blockedOn=n,!1;e.shift()}return!0}function ug(t,e,n){Tl(t)&&n.delete(e)}function DI(){Qh=!1,wr!==null&&Tl(wr)&&(wr=null),Er!==null&&Tl(Er)&&(Er=null),Tr!==null&&Tl(Tr)&&(Tr=null),zo.forEach(ug),Bo.forEach(ug)}function so(t,e){t.blockedOn===e&&(t.blockedOn=null,Qh||(Qh=!0,Bt.unstable_scheduleCallback(Bt.unstable_NormalPriority,DI)))}function $o(t){function e(s){return so(s,t)}if(0<Ja.length){so(Ja[0],t);for(var n=1;n<Ja.length;n++){var r=Ja[n];r.blockedOn===t&&(r.blockedOn=null)}}for(wr!==null&&so(wr,t),Er!==null&&so(Er,t),Tr!==null&&so(Tr,t),zo.forEach(e),Bo.forEach(e),n=0;n<hr.length;n++)r=hr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<hr.length&&(n=hr[0],n.blockedOn===null);)Ov(n),n.blockedOn===null&&hr.shift()}var ti=er.ReactCurrentBatchConfig,Gl=!0;function VI(t,e,n,r){var s=pe,i=ti.transition;ti.transition=null;try{pe=1,gf(t,e,n,r)}finally{pe=s,ti.transition=i}}function LI(t,e,n,r){var s=pe,i=ti.transition;ti.transition=null;try{pe=4,gf(t,e,n,r)}finally{pe=s,ti.transition=i}}function gf(t,e,n,r){if(Gl){var s=Yh(t,e,n,r);if(s===null)rh(t,e,r,Kl,n),cg(t,r);else if(jI(s,t,e,n,r))r.stopPropagation();else if(cg(t,r),e&4&&-1<bI.indexOf(t)){for(;s!==null;){var i=wa(s);if(i!==null&&jv(i),i=Yh(t,e,n,r),i===null&&rh(t,e,r,Kl,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else rh(t,e,r,null,n)}}var Kl=null;function Yh(t,e,n,r){if(Kl=null,t=df(r),t=ns(t),t!==null)if(e=xs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=xv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Kl=t,null}function Mv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(II()){case ff:return 1;case Nv:return 4;case ql:case SI:return 16;case Rv:return 536870912;default:return 16}default:return 16}}var yr=null,yf=null,Il=null;function Fv(){if(Il)return Il;var t,e=yf,n=e.length,r,s="value"in yr?yr.value:yr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Il=s.slice(t,1<r?1-r:void 0)}function Sl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Za(){return!0}function hg(){return!1}function Ht(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Za:hg,this.isPropagationStopped=hg,this}return Ce(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Za)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Za)},persist:function(){},isPersistent:Za}),e}var Ci={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_f=Ht(Ci),va=Ce({},Ci,{view:0,detail:0}),OI=Ht(va),Ku,Qu,io,bc=Ce({},va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==io&&(io&&t.type==="mousemove"?(Ku=t.screenX-io.screenX,Qu=t.screenY-io.screenY):Qu=Ku=0,io=t),Ku)},movementY:function(t){return"movementY"in t?t.movementY:Qu}}),dg=Ht(bc),MI=Ce({},bc,{dataTransfer:0}),FI=Ht(MI),UI=Ce({},va,{relatedTarget:0}),Yu=Ht(UI),zI=Ce({},Ci,{animationName:0,elapsedTime:0,pseudoElement:0}),BI=Ht(zI),$I=Ce({},Ci,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),HI=Ht($I),qI=Ce({},Ci,{data:0}),fg=Ht(qI),WI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},GI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},KI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function QI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=KI[t])?!!e[t]:!1}function vf(){return QI}var YI=Ce({},va,{key:function(t){if(t.key){var e=WI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Sl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?GI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vf,charCode:function(t){return t.type==="keypress"?Sl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Sl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),XI=Ht(YI),JI=Ce({},bc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pg=Ht(JI),ZI=Ce({},va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vf}),eS=Ht(ZI),tS=Ce({},Ci,{propertyName:0,elapsedTime:0,pseudoElement:0}),nS=Ht(tS),rS=Ce({},bc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sS=Ht(rS),iS=[9,13,27,32],wf=$n&&"CompositionEvent"in window,To=null;$n&&"documentMode"in document&&(To=document.documentMode);var oS=$n&&"TextEvent"in window&&!To,Uv=$n&&(!wf||To&&8<To&&11>=To),mg=" ",gg=!1;function zv(t,e){switch(t){case"keyup":return iS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Bs=!1;function aS(t,e){switch(t){case"compositionend":return Bv(e);case"keypress":return e.which!==32?null:(gg=!0,mg);case"textInput":return t=e.data,t===mg&&gg?null:t;default:return null}}function lS(t,e){if(Bs)return t==="compositionend"||!wf&&zv(t,e)?(t=Fv(),Il=yf=yr=null,Bs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Uv&&e.locale!=="ko"?null:e.data;default:return null}}var cS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!cS[t.type]:e==="textarea"}function $v(t,e,n,r){wv(r),e=Ql(e,"onChange"),0<e.length&&(n=new _f("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Io=null,Ho=null;function uS(t){ew(t,0)}function jc(t){var e=qs(t);if(fv(e))return t}function hS(t,e){if(t==="change")return e}var Hv=!1;if($n){var Xu;if($n){var Ju="oninput"in document;if(!Ju){var _g=document.createElement("div");_g.setAttribute("oninput","return;"),Ju=typeof _g.oninput=="function"}Xu=Ju}else Xu=!1;Hv=Xu&&(!document.documentMode||9<document.documentMode)}function vg(){Io&&(Io.detachEvent("onpropertychange",qv),Ho=Io=null)}function qv(t){if(t.propertyName==="value"&&jc(Ho)){var e=[];$v(e,Ho,t,df(t)),Sv(uS,e)}}function dS(t,e,n){t==="focusin"?(vg(),Io=e,Ho=n,Io.attachEvent("onpropertychange",qv)):t==="focusout"&&vg()}function fS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return jc(Ho)}function pS(t,e){if(t==="click")return jc(e)}function mS(t,e){if(t==="input"||t==="change")return jc(e)}function gS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var un=typeof Object.is=="function"?Object.is:gS;function qo(t,e){if(un(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!bh.call(e,s)||!un(t[s],e[s]))return!1}return!0}function wg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Eg(t,e){var n=wg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wg(n)}}function Wv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Wv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Gv(){for(var t=window,e=Bl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Bl(t.document)}return e}function Ef(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function yS(t){var e=Gv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Wv(n.ownerDocument.documentElement,n)){if(r!==null&&Ef(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Eg(n,i);var o=Eg(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var _S=$n&&"documentMode"in document&&11>=document.documentMode,$s=null,Xh=null,So=null,Jh=!1;function Tg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Jh||$s==null||$s!==Bl(r)||(r=$s,"selectionStart"in r&&Ef(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),So&&qo(So,r)||(So=r,r=Ql(Xh,"onSelect"),0<r.length&&(e=new _f("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=$s)))}function el(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Hs={animationend:el("Animation","AnimationEnd"),animationiteration:el("Animation","AnimationIteration"),animationstart:el("Animation","AnimationStart"),transitionend:el("Transition","TransitionEnd")},Zu={},Kv={};$n&&(Kv=document.createElement("div").style,"AnimationEvent"in window||(delete Hs.animationend.animation,delete Hs.animationiteration.animation,delete Hs.animationstart.animation),"TransitionEvent"in window||delete Hs.transitionend.transition);function Dc(t){if(Zu[t])return Zu[t];if(!Hs[t])return t;var e=Hs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Kv)return Zu[t]=e[n];return t}var Qv=Dc("animationend"),Yv=Dc("animationiteration"),Xv=Dc("animationstart"),Jv=Dc("transitionend"),Zv=new Map,Ig="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(t,e){Zv.set(t,e),Ss(e,[t])}for(var eh=0;eh<Ig.length;eh++){var th=Ig[eh],vS=th.toLowerCase(),wS=th[0].toUpperCase()+th.slice(1);zr(vS,"on"+wS)}zr(Qv,"onAnimationEnd");zr(Yv,"onAnimationIteration");zr(Xv,"onAnimationStart");zr("dblclick","onDoubleClick");zr("focusin","onFocus");zr("focusout","onBlur");zr(Jv,"onTransitionEnd");hi("onMouseEnter",["mouseout","mouseover"]);hi("onMouseLeave",["mouseout","mouseover"]);hi("onPointerEnter",["pointerout","pointerover"]);hi("onPointerLeave",["pointerout","pointerover"]);Ss("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ss("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ss("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ss("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ss("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ss("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ES=new Set("cancel close invalid load scroll toggle".split(" ").concat(mo));function Sg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,vI(r,e,void 0,t),t.currentTarget=null}function ew(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;Sg(s,l,h),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;Sg(s,l,h),i=u}}}if(Hl)throw t=Gh,Hl=!1,Gh=null,t}function Ee(t,e){var n=e[rd];n===void 0&&(n=e[rd]=new Set);var r=t+"__bubble";n.has(r)||(tw(e,t,2,!1),n.add(r))}function nh(t,e,n){var r=0;e&&(r|=4),tw(n,t,r,e)}var tl="_reactListening"+Math.random().toString(36).slice(2);function Wo(t){if(!t[tl]){t[tl]=!0,lv.forEach(function(n){n!=="selectionchange"&&(ES.has(n)||nh(n,!1,t),nh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[tl]||(e[tl]=!0,nh("selectionchange",!1,e))}}function tw(t,e,n,r){switch(Mv(e)){case 1:var s=VI;break;case 4:s=LI;break;default:s=gf}n=s.bind(null,e,n,t),s=void 0,!Wh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function rh(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=ns(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}Sv(function(){var h=i,f=df(n),g=[];e:{var m=Zv.get(t);if(m!==void 0){var w=_f,x=t;switch(t){case"keypress":if(Sl(n)===0)break e;case"keydown":case"keyup":w=XI;break;case"focusin":x="focus",w=Yu;break;case"focusout":x="blur",w=Yu;break;case"beforeblur":case"afterblur":w=Yu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=dg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=FI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=eS;break;case Qv:case Yv:case Xv:w=BI;break;case Jv:w=nS;break;case"scroll":w=OI;break;case"wheel":w=sS;break;case"copy":case"cut":case"paste":w=HI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=pg}var R=(e&4)!==0,b=!R&&t==="scroll",S=R?m!==null?m+"Capture":null:m;R=[];for(var I=h,A;I!==null;){A=I;var D=A.stateNode;if(A.tag===5&&D!==null&&(A=D,S!==null&&(D=Uo(I,S),D!=null&&R.push(Go(I,D,A)))),b)break;I=I.return}0<R.length&&(m=new w(m,x,null,n,f),g.push({event:m,listeners:R}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",m&&n!==Hh&&(x=n.relatedTarget||n.fromElement)&&(ns(x)||x[Hn]))break e;if((w||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,w?(x=n.relatedTarget||n.toElement,w=h,x=x?ns(x):null,x!==null&&(b=xs(x),x!==b||x.tag!==5&&x.tag!==6)&&(x=null)):(w=null,x=h),w!==x)){if(R=dg,D="onMouseLeave",S="onMouseEnter",I="mouse",(t==="pointerout"||t==="pointerover")&&(R=pg,D="onPointerLeave",S="onPointerEnter",I="pointer"),b=w==null?m:qs(w),A=x==null?m:qs(x),m=new R(D,I+"leave",w,n,f),m.target=b,m.relatedTarget=A,D=null,ns(f)===h&&(R=new R(S,I+"enter",x,n,f),R.target=A,R.relatedTarget=b,D=R),b=D,w&&x)t:{for(R=w,S=x,I=0,A=R;A;A=Vs(A))I++;for(A=0,D=S;D;D=Vs(D))A++;for(;0<I-A;)R=Vs(R),I--;for(;0<A-I;)S=Vs(S),A--;for(;I--;){if(R===S||S!==null&&R===S.alternate)break t;R=Vs(R),S=Vs(S)}R=null}else R=null;w!==null&&xg(g,m,w,R,!1),x!==null&&b!==null&&xg(g,b,x,R,!0)}}e:{if(m=h?qs(h):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var N=hS;else if(yg(m))if(Hv)N=mS;else{N=fS;var V=dS}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(N=pS);if(N&&(N=N(t,h))){$v(g,N,n,f);break e}V&&V(t,m,h),t==="focusout"&&(V=m._wrapperState)&&V.controlled&&m.type==="number"&&Fh(m,"number",m.value)}switch(V=h?qs(h):window,t){case"focusin":(yg(V)||V.contentEditable==="true")&&($s=V,Xh=h,So=null);break;case"focusout":So=Xh=$s=null;break;case"mousedown":Jh=!0;break;case"contextmenu":case"mouseup":case"dragend":Jh=!1,Tg(g,n,f);break;case"selectionchange":if(_S)break;case"keydown":case"keyup":Tg(g,n,f)}var _;if(wf)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Bs?zv(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Uv&&n.locale!=="ko"&&(Bs||y!=="onCompositionStart"?y==="onCompositionEnd"&&Bs&&(_=Fv()):(yr=f,yf="value"in yr?yr.value:yr.textContent,Bs=!0)),V=Ql(h,y),0<V.length&&(y=new fg(y,t,null,n,f),g.push({event:y,listeners:V}),_?y.data=_:(_=Bv(n),_!==null&&(y.data=_)))),(_=oS?aS(t,n):lS(t,n))&&(h=Ql(h,"onBeforeInput"),0<h.length&&(f=new fg("onBeforeInput","beforeinput",null,n,f),g.push({event:f,listeners:h}),f.data=_))}ew(g,e)})}function Go(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ql(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Uo(t,n),i!=null&&r.unshift(Go(t,i,s)),i=Uo(t,e),i!=null&&r.push(Go(t,i,s))),t=t.return}return r}function Vs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function xg(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,s?(u=Uo(n,i),u!=null&&o.unshift(Go(n,u,l))):s||(u=Uo(n,i),u!=null&&o.push(Go(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var TS=/\r\n?/g,IS=/\u0000|\uFFFD/g;function kg(t){return(typeof t=="string"?t:""+t).replace(TS,`
`).replace(IS,"")}function nl(t,e,n){if(e=kg(e),kg(t)!==e&&n)throw Error(B(425))}function Yl(){}var Zh=null,ed=null;function td(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var nd=typeof setTimeout=="function"?setTimeout:void 0,SS=typeof clearTimeout=="function"?clearTimeout:void 0,Ag=typeof Promise=="function"?Promise:void 0,xS=typeof queueMicrotask=="function"?queueMicrotask:typeof Ag<"u"?function(t){return Ag.resolve(null).then(t).catch(kS)}:nd;function kS(t){setTimeout(function(){throw t})}function sh(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),$o(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);$o(e)}function Ir(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Cg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ni=Math.random().toString(36).slice(2),_n="__reactFiber$"+Ni,Ko="__reactProps$"+Ni,Hn="__reactContainer$"+Ni,rd="__reactEvents$"+Ni,AS="__reactListeners$"+Ni,CS="__reactHandles$"+Ni;function ns(t){var e=t[_n];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Hn]||n[_n]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Cg(t);t!==null;){if(n=t[_n])return n;t=Cg(t)}return e}t=n,n=t.parentNode}return null}function wa(t){return t=t[_n]||t[Hn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function qs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function Vc(t){return t[Ko]||null}var sd=[],Ws=-1;function Br(t){return{current:t}}function Ie(t){0>Ws||(t.current=sd[Ws],sd[Ws]=null,Ws--)}function _e(t,e){Ws++,sd[Ws]=t.current,t.current=e}var jr={},ft=Br(jr),Nt=Br(!1),ds=jr;function di(t,e){var n=t.type.contextTypes;if(!n)return jr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Rt(t){return t=t.childContextTypes,t!=null}function Xl(){Ie(Nt),Ie(ft)}function Ng(t,e,n){if(ft.current!==jr)throw Error(B(168));_e(ft,e),_e(Nt,n)}function nw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(B(108,dI(t)||"Unknown",s));return Ce({},n,r)}function Jl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||jr,ds=ft.current,_e(ft,t),_e(Nt,Nt.current),!0}function Rg(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=nw(t,e,ds),r.__reactInternalMemoizedMergedChildContext=t,Ie(Nt),Ie(ft),_e(ft,t)):Ie(Nt),_e(Nt,n)}var Vn=null,Lc=!1,ih=!1;function rw(t){Vn===null?Vn=[t]:Vn.push(t)}function NS(t){Lc=!0,rw(t)}function $r(){if(!ih&&Vn!==null){ih=!0;var t=0,e=pe;try{var n=Vn;for(pe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Vn=null,Lc=!1}catch(s){throw Vn!==null&&(Vn=Vn.slice(t+1)),Cv(ff,$r),s}finally{pe=e,ih=!1}}return null}var Gs=[],Ks=0,Zl=null,ec=0,Wt=[],Gt=0,fs=null,On=1,Mn="";function Zr(t,e){Gs[Ks++]=ec,Gs[Ks++]=Zl,Zl=t,ec=e}function sw(t,e,n){Wt[Gt++]=On,Wt[Gt++]=Mn,Wt[Gt++]=fs,fs=t;var r=On;t=Mn;var s=32-on(r)-1;r&=~(1<<s),n+=1;var i=32-on(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,On=1<<32-on(e)+s|n<<s|r,Mn=i+t}else On=1<<i|n<<s|r,Mn=t}function Tf(t){t.return!==null&&(Zr(t,1),sw(t,1,0))}function If(t){for(;t===Zl;)Zl=Gs[--Ks],Gs[Ks]=null,ec=Gs[--Ks],Gs[Ks]=null;for(;t===fs;)fs=Wt[--Gt],Wt[Gt]=null,Mn=Wt[--Gt],Wt[Gt]=null,On=Wt[--Gt],Wt[Gt]=null}var zt=null,Ot=null,Se=!1,rn=null;function iw(t,e){var n=Yt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Pg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,zt=t,Ot=Ir(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,zt=t,Ot=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=fs!==null?{id:On,overflow:Mn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Yt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,zt=t,Ot=null,!0):!1;default:return!1}}function id(t){return(t.mode&1)!==0&&(t.flags&128)===0}function od(t){if(Se){var e=Ot;if(e){var n=e;if(!Pg(t,e)){if(id(t))throw Error(B(418));e=Ir(n.nextSibling);var r=zt;e&&Pg(t,e)?iw(r,n):(t.flags=t.flags&-4097|2,Se=!1,zt=t)}}else{if(id(t))throw Error(B(418));t.flags=t.flags&-4097|2,Se=!1,zt=t}}}function bg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;zt=t}function rl(t){if(t!==zt)return!1;if(!Se)return bg(t),Se=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!td(t.type,t.memoizedProps)),e&&(e=Ot)){if(id(t))throw ow(),Error(B(418));for(;e;)iw(t,e),e=Ir(e.nextSibling)}if(bg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ot=Ir(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ot=null}}else Ot=zt?Ir(t.stateNode.nextSibling):null;return!0}function ow(){for(var t=Ot;t;)t=Ir(t.nextSibling)}function fi(){Ot=zt=null,Se=!1}function Sf(t){rn===null?rn=[t]:rn.push(t)}var RS=er.ReactCurrentBatchConfig;function oo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function sl(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function jg(t){var e=t._init;return e(t._payload)}function aw(t){function e(S,I){if(t){var A=S.deletions;A===null?(S.deletions=[I],S.flags|=16):A.push(I)}}function n(S,I){if(!t)return null;for(;I!==null;)e(S,I),I=I.sibling;return null}function r(S,I){for(S=new Map;I!==null;)I.key!==null?S.set(I.key,I):S.set(I.index,I),I=I.sibling;return S}function s(S,I){return S=Ar(S,I),S.index=0,S.sibling=null,S}function i(S,I,A){return S.index=A,t?(A=S.alternate,A!==null?(A=A.index,A<I?(S.flags|=2,I):A):(S.flags|=2,I)):(S.flags|=1048576,I)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function l(S,I,A,D){return I===null||I.tag!==6?(I=dh(A,S.mode,D),I.return=S,I):(I=s(I,A),I.return=S,I)}function u(S,I,A,D){var N=A.type;return N===zs?f(S,I,A.props.children,D,A.key):I!==null&&(I.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===cr&&jg(N)===I.type)?(D=s(I,A.props),D.ref=oo(S,I,A),D.return=S,D):(D=Pl(A.type,A.key,A.props,null,S.mode,D),D.ref=oo(S,I,A),D.return=S,D)}function h(S,I,A,D){return I===null||I.tag!==4||I.stateNode.containerInfo!==A.containerInfo||I.stateNode.implementation!==A.implementation?(I=fh(A,S.mode,D),I.return=S,I):(I=s(I,A.children||[]),I.return=S,I)}function f(S,I,A,D,N){return I===null||I.tag!==7?(I=ls(A,S.mode,D,N),I.return=S,I):(I=s(I,A),I.return=S,I)}function g(S,I,A){if(typeof I=="string"&&I!==""||typeof I=="number")return I=dh(""+I,S.mode,A),I.return=S,I;if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Ga:return A=Pl(I.type,I.key,I.props,null,S.mode,A),A.ref=oo(S,null,I),A.return=S,A;case Us:return I=fh(I,S.mode,A),I.return=S,I;case cr:var D=I._init;return g(S,D(I._payload),A)}if(fo(I)||to(I))return I=ls(I,S.mode,A,null),I.return=S,I;sl(S,I)}return null}function m(S,I,A,D){var N=I!==null?I.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return N!==null?null:l(S,I,""+A,D);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Ga:return A.key===N?u(S,I,A,D):null;case Us:return A.key===N?h(S,I,A,D):null;case cr:return N=A._init,m(S,I,N(A._payload),D)}if(fo(A)||to(A))return N!==null?null:f(S,I,A,D,null);sl(S,A)}return null}function w(S,I,A,D,N){if(typeof D=="string"&&D!==""||typeof D=="number")return S=S.get(A)||null,l(I,S,""+D,N);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Ga:return S=S.get(D.key===null?A:D.key)||null,u(I,S,D,N);case Us:return S=S.get(D.key===null?A:D.key)||null,h(I,S,D,N);case cr:var V=D._init;return w(S,I,A,V(D._payload),N)}if(fo(D)||to(D))return S=S.get(A)||null,f(I,S,D,N,null);sl(I,D)}return null}function x(S,I,A,D){for(var N=null,V=null,_=I,y=I=0,T=null;_!==null&&y<A.length;y++){_.index>y?(T=_,_=null):T=_.sibling;var E=m(S,_,A[y],D);if(E===null){_===null&&(_=T);break}t&&_&&E.alternate===null&&e(S,_),I=i(E,I,y),V===null?N=E:V.sibling=E,V=E,_=T}if(y===A.length)return n(S,_),Se&&Zr(S,y),N;if(_===null){for(;y<A.length;y++)_=g(S,A[y],D),_!==null&&(I=i(_,I,y),V===null?N=_:V.sibling=_,V=_);return Se&&Zr(S,y),N}for(_=r(S,_);y<A.length;y++)T=w(_,S,y,A[y],D),T!==null&&(t&&T.alternate!==null&&_.delete(T.key===null?y:T.key),I=i(T,I,y),V===null?N=T:V.sibling=T,V=T);return t&&_.forEach(function(k){return e(S,k)}),Se&&Zr(S,y),N}function R(S,I,A,D){var N=to(A);if(typeof N!="function")throw Error(B(150));if(A=N.call(A),A==null)throw Error(B(151));for(var V=N=null,_=I,y=I=0,T=null,E=A.next();_!==null&&!E.done;y++,E=A.next()){_.index>y?(T=_,_=null):T=_.sibling;var k=m(S,_,E.value,D);if(k===null){_===null&&(_=T);break}t&&_&&k.alternate===null&&e(S,_),I=i(k,I,y),V===null?N=k:V.sibling=k,V=k,_=T}if(E.done)return n(S,_),Se&&Zr(S,y),N;if(_===null){for(;!E.done;y++,E=A.next())E=g(S,E.value,D),E!==null&&(I=i(E,I,y),V===null?N=E:V.sibling=E,V=E);return Se&&Zr(S,y),N}for(_=r(S,_);!E.done;y++,E=A.next())E=w(_,S,y,E.value,D),E!==null&&(t&&E.alternate!==null&&_.delete(E.key===null?y:E.key),I=i(E,I,y),V===null?N=E:V.sibling=E,V=E);return t&&_.forEach(function(P){return e(S,P)}),Se&&Zr(S,y),N}function b(S,I,A,D){if(typeof A=="object"&&A!==null&&A.type===zs&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case Ga:e:{for(var N=A.key,V=I;V!==null;){if(V.key===N){if(N=A.type,N===zs){if(V.tag===7){n(S,V.sibling),I=s(V,A.props.children),I.return=S,S=I;break e}}else if(V.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===cr&&jg(N)===V.type){n(S,V.sibling),I=s(V,A.props),I.ref=oo(S,V,A),I.return=S,S=I;break e}n(S,V);break}else e(S,V);V=V.sibling}A.type===zs?(I=ls(A.props.children,S.mode,D,A.key),I.return=S,S=I):(D=Pl(A.type,A.key,A.props,null,S.mode,D),D.ref=oo(S,I,A),D.return=S,S=D)}return o(S);case Us:e:{for(V=A.key;I!==null;){if(I.key===V)if(I.tag===4&&I.stateNode.containerInfo===A.containerInfo&&I.stateNode.implementation===A.implementation){n(S,I.sibling),I=s(I,A.children||[]),I.return=S,S=I;break e}else{n(S,I);break}else e(S,I);I=I.sibling}I=fh(A,S.mode,D),I.return=S,S=I}return o(S);case cr:return V=A._init,b(S,I,V(A._payload),D)}if(fo(A))return x(S,I,A,D);if(to(A))return R(S,I,A,D);sl(S,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,I!==null&&I.tag===6?(n(S,I.sibling),I=s(I,A),I.return=S,S=I):(n(S,I),I=dh(A,S.mode,D),I.return=S,S=I),o(S)):n(S,I)}return b}var pi=aw(!0),lw=aw(!1),tc=Br(null),nc=null,Qs=null,xf=null;function kf(){xf=Qs=nc=null}function Af(t){var e=tc.current;Ie(tc),t._currentValue=e}function ad(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ni(t,e){nc=t,xf=Qs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ct=!0),t.firstContext=null)}function Jt(t){var e=t._currentValue;if(xf!==t)if(t={context:t,memoizedValue:e,next:null},Qs===null){if(nc===null)throw Error(B(308));Qs=t,nc.dependencies={lanes:0,firstContext:t}}else Qs=Qs.next=t;return e}var rs=null;function Cf(t){rs===null?rs=[t]:rs.push(t)}function cw(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Cf(e)):(n.next=s.next,s.next=n),e.interleaved=n,qn(t,r)}function qn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ur=!1;function Nf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function zn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Sr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ce&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,qn(t,n)}return s=r.interleaved,s===null?(e.next=e,Cf(r)):(e.next=s.next,s.next=e),r.interleaved=e,qn(t,n)}function xl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,pf(t,n)}}function Dg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function rc(t,e,n,r){var s=t.updateQueue;ur=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?i=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(i!==null){var g=s.baseState;o=0,f=h=u=null,l=i;do{var m=l.lane,w=l.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=t,R=l;switch(m=e,w=n,R.tag){case 1:if(x=R.payload,typeof x=="function"){g=x.call(w,g,m);break e}g=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=R.payload,m=typeof x=="function"?x.call(w,g,m):x,m==null)break e;g=Ce({},g,m);break e;case 2:ur=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=s.effects,m===null?s.effects=[l]:m.push(l))}else w={eventTime:w,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=w,u=g):f=f.next=w,o|=m;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;m=l,l=m.next,m.next=null,s.lastBaseUpdate=m,s.shared.pending=null}}while(!0);if(f===null&&(u=g),s.baseState=u,s.firstBaseUpdate=h,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);ms|=o,t.lanes=o,t.memoizedState=g}}function Vg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(B(191,s));s.call(r)}}}var Ea={},En=Br(Ea),Qo=Br(Ea),Yo=Br(Ea);function ss(t){if(t===Ea)throw Error(B(174));return t}function Rf(t,e){switch(_e(Yo,e),_e(Qo,t),_e(En,Ea),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:zh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=zh(e,t)}Ie(En),_e(En,e)}function mi(){Ie(En),Ie(Qo),Ie(Yo)}function hw(t){ss(Yo.current);var e=ss(En.current),n=zh(e,t.type);e!==n&&(_e(Qo,t),_e(En,n))}function Pf(t){Qo.current===t&&(Ie(En),Ie(Qo))}var ke=Br(0);function sc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var oh=[];function bf(){for(var t=0;t<oh.length;t++)oh[t]._workInProgressVersionPrimary=null;oh.length=0}var kl=er.ReactCurrentDispatcher,ah=er.ReactCurrentBatchConfig,ps=0,Ae=null,qe=null,Xe=null,ic=!1,xo=!1,Xo=0,PS=0;function at(){throw Error(B(321))}function jf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!un(t[n],e[n]))return!1;return!0}function Df(t,e,n,r,s,i){if(ps=i,Ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,kl.current=t===null||t.memoizedState===null?VS:LS,t=n(r,s),xo){i=0;do{if(xo=!1,Xo=0,25<=i)throw Error(B(301));i+=1,Xe=qe=null,e.updateQueue=null,kl.current=OS,t=n(r,s)}while(xo)}if(kl.current=oc,e=qe!==null&&qe.next!==null,ps=0,Xe=qe=Ae=null,ic=!1,e)throw Error(B(300));return t}function Vf(){var t=Xo!==0;return Xo=0,t}function gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?Ae.memoizedState=Xe=t:Xe=Xe.next=t,Xe}function Zt(){if(qe===null){var t=Ae.alternate;t=t!==null?t.memoizedState:null}else t=qe.next;var e=Xe===null?Ae.memoizedState:Xe.next;if(e!==null)Xe=e,qe=t;else{if(t===null)throw Error(B(310));qe=t,t={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},Xe===null?Ae.memoizedState=Xe=t:Xe=Xe.next=t}return Xe}function Jo(t,e){return typeof e=="function"?e(t):e}function lh(t){var e=Zt(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=qe,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,h=i;do{var f=h.lane;if((ps&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var g={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=g,o=r):u=u.next=g,Ae.lanes|=f,ms|=f}h=h.next}while(h!==null&&h!==i);u===null?o=r:u.next=l,un(r,e.memoizedState)||(Ct=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Ae.lanes|=i,ms|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ch(t){var e=Zt(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);un(i,e.memoizedState)||(Ct=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function dw(){}function fw(t,e){var n=Ae,r=Zt(),s=e(),i=!un(r.memoizedState,s);if(i&&(r.memoizedState=s,Ct=!0),r=r.queue,Lf(gw.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Xe!==null&&Xe.memoizedState.tag&1){if(n.flags|=2048,Zo(9,mw.bind(null,n,r,s,e),void 0,null),Je===null)throw Error(B(349));ps&30||pw(n,e,s)}return s}function pw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ae.updateQueue,e===null?(e={lastEffect:null,stores:null},Ae.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function mw(t,e,n,r){e.value=n,e.getSnapshot=r,yw(e)&&_w(t)}function gw(t,e,n){return n(function(){yw(e)&&_w(t)})}function yw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!un(t,n)}catch{return!0}}function _w(t){var e=qn(t,1);e!==null&&an(e,t,1,-1)}function Lg(t){var e=gn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jo,lastRenderedState:t},e.queue=t,t=t.dispatch=DS.bind(null,Ae,t),[e.memoizedState,t]}function Zo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ae.updateQueue,e===null?(e={lastEffect:null,stores:null},Ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function vw(){return Zt().memoizedState}function Al(t,e,n,r){var s=gn();Ae.flags|=t,s.memoizedState=Zo(1|e,n,void 0,r===void 0?null:r)}function Oc(t,e,n,r){var s=Zt();r=r===void 0?null:r;var i=void 0;if(qe!==null){var o=qe.memoizedState;if(i=o.destroy,r!==null&&jf(r,o.deps)){s.memoizedState=Zo(e,n,i,r);return}}Ae.flags|=t,s.memoizedState=Zo(1|e,n,i,r)}function Og(t,e){return Al(8390656,8,t,e)}function Lf(t,e){return Oc(2048,8,t,e)}function ww(t,e){return Oc(4,2,t,e)}function Ew(t,e){return Oc(4,4,t,e)}function Tw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Iw(t,e,n){return n=n!=null?n.concat([t]):null,Oc(4,4,Tw.bind(null,e,t),n)}function Of(){}function Sw(t,e){var n=Zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&jf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function xw(t,e){var n=Zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&jf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function kw(t,e,n){return ps&21?(un(n,e)||(n=Pv(),Ae.lanes|=n,ms|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ct=!0),t.memoizedState=n)}function bS(t,e){var n=pe;pe=n!==0&&4>n?n:4,t(!0);var r=ah.transition;ah.transition={};try{t(!1),e()}finally{pe=n,ah.transition=r}}function Aw(){return Zt().memoizedState}function jS(t,e,n){var r=kr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Cw(t))Nw(e,n);else if(n=cw(t,e,n,r),n!==null){var s=wt();an(n,t,r,s),Rw(n,e,r)}}function DS(t,e,n){var r=kr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cw(t))Nw(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,un(l,o)){var u=e.interleaved;u===null?(s.next=s,Cf(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=cw(t,e,s,r),n!==null&&(s=wt(),an(n,t,r,s),Rw(n,e,r))}}function Cw(t){var e=t.alternate;return t===Ae||e!==null&&e===Ae}function Nw(t,e){xo=ic=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Rw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,pf(t,n)}}var oc={readContext:Jt,useCallback:at,useContext:at,useEffect:at,useImperativeHandle:at,useInsertionEffect:at,useLayoutEffect:at,useMemo:at,useReducer:at,useRef:at,useState:at,useDebugValue:at,useDeferredValue:at,useTransition:at,useMutableSource:at,useSyncExternalStore:at,useId:at,unstable_isNewReconciler:!1},VS={readContext:Jt,useCallback:function(t,e){return gn().memoizedState=[t,e===void 0?null:e],t},useContext:Jt,useEffect:Og,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Al(4194308,4,Tw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Al(4194308,4,t,e)},useInsertionEffect:function(t,e){return Al(4,2,t,e)},useMemo:function(t,e){var n=gn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=gn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=jS.bind(null,Ae,t),[r.memoizedState,t]},useRef:function(t){var e=gn();return t={current:t},e.memoizedState=t},useState:Lg,useDebugValue:Of,useDeferredValue:function(t){return gn().memoizedState=t},useTransition:function(){var t=Lg(!1),e=t[0];return t=bS.bind(null,t[1]),gn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ae,s=gn();if(Se){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),Je===null)throw Error(B(349));ps&30||pw(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Og(gw.bind(null,r,i,t),[t]),r.flags|=2048,Zo(9,mw.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=gn(),e=Je.identifierPrefix;if(Se){var n=Mn,r=On;n=(r&~(1<<32-on(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Xo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=PS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},LS={readContext:Jt,useCallback:Sw,useContext:Jt,useEffect:Lf,useImperativeHandle:Iw,useInsertionEffect:ww,useLayoutEffect:Ew,useMemo:xw,useReducer:lh,useRef:vw,useState:function(){return lh(Jo)},useDebugValue:Of,useDeferredValue:function(t){var e=Zt();return kw(e,qe.memoizedState,t)},useTransition:function(){var t=lh(Jo)[0],e=Zt().memoizedState;return[t,e]},useMutableSource:dw,useSyncExternalStore:fw,useId:Aw,unstable_isNewReconciler:!1},OS={readContext:Jt,useCallback:Sw,useContext:Jt,useEffect:Lf,useImperativeHandle:Iw,useInsertionEffect:ww,useLayoutEffect:Ew,useMemo:xw,useReducer:ch,useRef:vw,useState:function(){return ch(Jo)},useDebugValue:Of,useDeferredValue:function(t){var e=Zt();return qe===null?e.memoizedState=t:kw(e,qe.memoizedState,t)},useTransition:function(){var t=ch(Jo)[0],e=Zt().memoizedState;return[t,e]},useMutableSource:dw,useSyncExternalStore:fw,useId:Aw,unstable_isNewReconciler:!1};function tn(t,e){if(t&&t.defaultProps){e=Ce({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ld(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ce({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Mc={isMounted:function(t){return(t=t._reactInternals)?xs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=wt(),s=kr(t),i=zn(r,s);i.payload=e,n!=null&&(i.callback=n),e=Sr(t,i,s),e!==null&&(an(e,t,s,r),xl(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=wt(),s=kr(t),i=zn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Sr(t,i,s),e!==null&&(an(e,t,s,r),xl(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=wt(),r=kr(t),s=zn(n,r);s.tag=2,e!=null&&(s.callback=e),e=Sr(t,s,r),e!==null&&(an(e,t,r,n),xl(e,t,r))}};function Mg(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!qo(n,r)||!qo(s,i):!0}function Pw(t,e,n){var r=!1,s=jr,i=e.contextType;return typeof i=="object"&&i!==null?i=Jt(i):(s=Rt(e)?ds:ft.current,r=e.contextTypes,i=(r=r!=null)?di(t,s):jr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Mc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Fg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Mc.enqueueReplaceState(e,e.state,null)}function cd(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Nf(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Jt(i):(i=Rt(e)?ds:ft.current,s.context=di(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(ld(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Mc.enqueueReplaceState(s,s.state,null),rc(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function gi(t,e){try{var n="",r=e;do n+=hI(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function uh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ud(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var MS=typeof WeakMap=="function"?WeakMap:Map;function bw(t,e,n){n=zn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){lc||(lc=!0,wd=r),ud(t,e)},n}function jw(t,e,n){n=zn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){ud(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ud(t,e),typeof r!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ug(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new MS;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=JS.bind(null,t,e,n),e.then(t,t))}function zg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Bg(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=zn(-1,1),e.tag=2,Sr(n,e,1))),n.lanes|=1),t)}var FS=er.ReactCurrentOwner,Ct=!1;function vt(t,e,n,r){e.child=t===null?lw(e,null,n,r):pi(e,t.child,n,r)}function $g(t,e,n,r,s){n=n.render;var i=e.ref;return ni(e,s),r=Df(t,e,n,r,i,s),n=Vf(),t!==null&&!Ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Wn(t,e,s)):(Se&&n&&Tf(e),e.flags|=1,vt(t,e,r,s),e.child)}function Hg(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!qf(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,Dw(t,e,i,r,s)):(t=Pl(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:qo,n(o,r)&&t.ref===e.ref)return Wn(t,e,s)}return e.flags|=1,t=Ar(i,r),t.ref=e.ref,t.return=e,e.child=t}function Dw(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(qo(i,r)&&t.ref===e.ref)if(Ct=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Ct=!0);else return e.lanes=t.lanes,Wn(t,e,s)}return hd(t,e,n,r,s)}function Vw(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(Xs,Lt),Lt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_e(Xs,Lt),Lt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,_e(Xs,Lt),Lt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,_e(Xs,Lt),Lt|=r;return vt(t,e,s,n),e.child}function Lw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function hd(t,e,n,r,s){var i=Rt(n)?ds:ft.current;return i=di(e,i),ni(e,s),n=Df(t,e,n,r,i,s),r=Vf(),t!==null&&!Ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Wn(t,e,s)):(Se&&r&&Tf(e),e.flags|=1,vt(t,e,n,s),e.child)}function qg(t,e,n,r,s){if(Rt(n)){var i=!0;Jl(e)}else i=!1;if(ni(e,s),e.stateNode===null)Cl(t,e),Pw(e,n,r),cd(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Jt(h):(h=Rt(n)?ds:ft.current,h=di(e,h));var f=n.getDerivedStateFromProps,g=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&Fg(e,o,r,h),ur=!1;var m=e.memoizedState;o.state=m,rc(e,r,o,s),u=e.memoizedState,l!==r||m!==u||Nt.current||ur?(typeof f=="function"&&(ld(e,n,f,r),u=e.memoizedState),(l=ur||Mg(e,n,l,r,m,u,h))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,uw(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:tn(e.type,l),o.props=h,g=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Jt(u):(u=Rt(n)?ds:ft.current,u=di(e,u));var w=n.getDerivedStateFromProps;(f=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==g||m!==u)&&Fg(e,o,r,u),ur=!1,m=e.memoizedState,o.state=m,rc(e,r,o,s);var x=e.memoizedState;l!==g||m!==x||Nt.current||ur?(typeof w=="function"&&(ld(e,n,w,r),x=e.memoizedState),(h=ur||Mg(e,n,h,r,m,x,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),o.props=r,o.state=x,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return dd(t,e,n,r,i,s)}function dd(t,e,n,r,s,i){Lw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Rg(e,n,!1),Wn(t,e,i);r=e.stateNode,FS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=pi(e,t.child,null,i),e.child=pi(e,null,l,i)):vt(t,e,l,i),e.memoizedState=r.state,s&&Rg(e,n,!0),e.child}function Ow(t){var e=t.stateNode;e.pendingContext?Ng(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ng(t,e.context,!1),Rf(t,e.containerInfo)}function Wg(t,e,n,r,s){return fi(),Sf(s),e.flags|=256,vt(t,e,n,r),e.child}var fd={dehydrated:null,treeContext:null,retryLane:0};function pd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Mw(t,e,n){var r=e.pendingProps,s=ke.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),_e(ke,s&1),t===null)return od(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=zc(o,r,0,null),t=ls(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=pd(n),e.memoizedState=fd,t):Mf(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return US(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Ar(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=Ar(l,i):(i=ls(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?pd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=fd,r}return i=t.child,t=i.sibling,r=Ar(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Mf(t,e){return e=zc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function il(t,e,n,r){return r!==null&&Sf(r),pi(e,t.child,null,n),t=Mf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function US(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=uh(Error(B(422))),il(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=zc({mode:"visible",children:r.children},s,0,null),i=ls(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&pi(e,t.child,null,o),e.child.memoizedState=pd(o),e.memoizedState=fd,i);if(!(e.mode&1))return il(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(B(419)),r=uh(i,r,void 0),il(t,e,o,r)}if(l=(o&t.childLanes)!==0,Ct||l){if(r=Je,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,qn(t,s),an(r,t,s,-1))}return Hf(),r=uh(Error(B(421))),il(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=ZS.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Ot=Ir(s.nextSibling),zt=e,Se=!0,rn=null,t!==null&&(Wt[Gt++]=On,Wt[Gt++]=Mn,Wt[Gt++]=fs,On=t.id,Mn=t.overflow,fs=e),e=Mf(e,r.children),e.flags|=4096,e)}function Gg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ad(t.return,e,n)}function hh(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function Fw(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(vt(t,e,r.children,n),r=ke.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gg(t,n,e);else if(t.tag===19)Gg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(_e(ke,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&sc(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),hh(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&sc(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}hh(e,!0,n,null,i);break;case"together":hh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Cl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Wn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ms|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=Ar(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ar(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function zS(t,e,n){switch(e.tag){case 3:Ow(e),fi();break;case 5:hw(e);break;case 1:Rt(e.type)&&Jl(e);break;case 4:Rf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;_e(tc,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(_e(ke,ke.current&1),e.flags|=128,null):n&e.child.childLanes?Mw(t,e,n):(_e(ke,ke.current&1),t=Wn(t,e,n),t!==null?t.sibling:null);_e(ke,ke.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Fw(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),_e(ke,ke.current),r)break;return null;case 22:case 23:return e.lanes=0,Vw(t,e,n)}return Wn(t,e,n)}var Uw,md,zw,Bw;Uw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};md=function(){};zw=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,ss(En.current);var i=null;switch(n){case"input":s=Oh(t,s),r=Oh(t,r),i=[];break;case"select":s=Ce({},s,{value:void 0}),r=Ce({},r,{value:void 0}),i=[];break;case"textarea":s=Uh(t,s),r=Uh(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Yl)}Bh(n,r);var o;n=null;for(h in s)if(!r.hasOwnProperty(h)&&s.hasOwnProperty(h)&&s[h]!=null)if(h==="style"){var l=s[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Mo.hasOwnProperty(h)?i||(i=[]):(i=i||[]).push(h,null));for(h in r){var u=r[h];if(l=s!=null?s[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Mo.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&Ee("scroll",t),i||l===u||(i=[])):(i=i||[]).push(h,u))}n&&(i=i||[]).push("style",n);var h=i;(e.updateQueue=h)&&(e.flags|=4)}};Bw=function(t,e,n,r){n!==r&&(e.flags|=4)};function ao(t,e){if(!Se)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function lt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function BS(t,e,n){var r=e.pendingProps;switch(If(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(e),null;case 1:return Rt(e.type)&&Xl(),lt(e),null;case 3:return r=e.stateNode,mi(),Ie(Nt),Ie(ft),bf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(rl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,rn!==null&&(Id(rn),rn=null))),md(t,e),lt(e),null;case 5:Pf(e);var s=ss(Yo.current);if(n=e.type,t!==null&&e.stateNode!=null)zw(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return lt(e),null}if(t=ss(En.current),rl(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[_n]=e,r[Ko]=i,t=(e.mode&1)!==0,n){case"dialog":Ee("cancel",r),Ee("close",r);break;case"iframe":case"object":case"embed":Ee("load",r);break;case"video":case"audio":for(s=0;s<mo.length;s++)Ee(mo[s],r);break;case"source":Ee("error",r);break;case"img":case"image":case"link":Ee("error",r),Ee("load",r);break;case"details":Ee("toggle",r);break;case"input":ng(r,i),Ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Ee("invalid",r);break;case"textarea":sg(r,i),Ee("invalid",r)}Bh(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&nl(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&nl(r.textContent,l,t),s=["children",""+l]):Mo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Ee("scroll",r)}switch(n){case"input":Ka(r),rg(r,i,!0);break;case"textarea":Ka(r),ig(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Yl)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=gv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[_n]=e,t[Ko]=r,Uw(t,e,!1,!1),e.stateNode=t;e:{switch(o=$h(n,r),n){case"dialog":Ee("cancel",t),Ee("close",t),s=r;break;case"iframe":case"object":case"embed":Ee("load",t),s=r;break;case"video":case"audio":for(s=0;s<mo.length;s++)Ee(mo[s],t);s=r;break;case"source":Ee("error",t),s=r;break;case"img":case"image":case"link":Ee("error",t),Ee("load",t),s=r;break;case"details":Ee("toggle",t),s=r;break;case"input":ng(t,r),s=Oh(t,r),Ee("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Ce({},r,{value:void 0}),Ee("invalid",t);break;case"textarea":sg(t,r),s=Uh(t,r),Ee("invalid",t);break;default:s=r}Bh(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?vv(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&yv(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Fo(t,u):typeof u=="number"&&Fo(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Mo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Ee("scroll",t):u!=null&&lf(t,i,u,o))}switch(n){case"input":Ka(t),rg(t,r,!1);break;case"textarea":Ka(t),ig(t);break;case"option":r.value!=null&&t.setAttribute("value",""+br(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Js(t,!!r.multiple,i,!1):r.defaultValue!=null&&Js(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Yl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return lt(e),null;case 6:if(t&&e.stateNode!=null)Bw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=ss(Yo.current),ss(En.current),rl(e)){if(r=e.stateNode,n=e.memoizedProps,r[_n]=e,(i=r.nodeValue!==n)&&(t=zt,t!==null))switch(t.tag){case 3:nl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&nl(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_n]=e,e.stateNode=r}return lt(e),null;case 13:if(Ie(ke),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Se&&Ot!==null&&e.mode&1&&!(e.flags&128))ow(),fi(),e.flags|=98560,i=!1;else if(i=rl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(B(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(B(317));i[_n]=e}else fi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;lt(e),i=!1}else rn!==null&&(Id(rn),rn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ke.current&1?We===0&&(We=3):Hf())),e.updateQueue!==null&&(e.flags|=4),lt(e),null);case 4:return mi(),md(t,e),t===null&&Wo(e.stateNode.containerInfo),lt(e),null;case 10:return Af(e.type._context),lt(e),null;case 17:return Rt(e.type)&&Xl(),lt(e),null;case 19:if(Ie(ke),i=e.memoizedState,i===null)return lt(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)ao(i,!1);else{if(We!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=sc(t),o!==null){for(e.flags|=128,ao(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return _e(ke,ke.current&1|2),e.child}t=t.sibling}i.tail!==null&&Oe()>yi&&(e.flags|=128,r=!0,ao(i,!1),e.lanes=4194304)}else{if(!r)if(t=sc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ao(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Se)return lt(e),null}else 2*Oe()-i.renderingStartTime>yi&&n!==1073741824&&(e.flags|=128,r=!0,ao(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Oe(),e.sibling=null,n=ke.current,_e(ke,r?n&1|2:n&1),e):(lt(e),null);case 22:case 23:return $f(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Lt&1073741824&&(lt(e),e.subtreeFlags&6&&(e.flags|=8192)):lt(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function $S(t,e){switch(If(e),e.tag){case 1:return Rt(e.type)&&Xl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return mi(),Ie(Nt),Ie(ft),bf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Pf(e),null;case 13:if(Ie(ke),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));fi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ie(ke),null;case 4:return mi(),null;case 10:return Af(e.type._context),null;case 22:case 23:return $f(),null;case 24:return null;default:return null}}var ol=!1,ht=!1,HS=typeof WeakSet=="function"?WeakSet:Set,G=null;function Ys(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){je(t,e,r)}else n.current=null}function gd(t,e,n){try{n()}catch(r){je(t,e,r)}}var Kg=!1;function qS(t,e){if(Zh=Gl,t=Gv(),Ef(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,g=t,m=null;t:for(;;){for(var w;g!==n||s!==0&&g.nodeType!==3||(l=o+s),g!==i||r!==0&&g.nodeType!==3||(u=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(w=g.firstChild)!==null;)m=g,g=w;for(;;){if(g===t)break t;if(m===n&&++h===s&&(l=o),m===i&&++f===r&&(u=o),(w=g.nextSibling)!==null)break;g=m,m=g.parentNode}g=w}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ed={focusedElem:t,selectionRange:n},Gl=!1,G=e;G!==null;)if(e=G,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,G=t;else for(;G!==null;){e=G;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var R=x.memoizedProps,b=x.memoizedState,S=e.stateNode,I=S.getSnapshotBeforeUpdate(e.elementType===e.type?R:tn(e.type,R),b);S.__reactInternalSnapshotBeforeUpdate=I}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(D){je(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,G=t;break}G=e.return}return x=Kg,Kg=!1,x}function ko(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&gd(e,n,i)}s=s.next}while(s!==r)}}function Fc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function yd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function $w(t){var e=t.alternate;e!==null&&(t.alternate=null,$w(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[_n],delete e[Ko],delete e[rd],delete e[AS],delete e[CS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Hw(t){return t.tag===5||t.tag===3||t.tag===4}function Qg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Hw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _d(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Yl));else if(r!==4&&(t=t.child,t!==null))for(_d(t,e,n),t=t.sibling;t!==null;)_d(t,e,n),t=t.sibling}function vd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(vd(t,e,n),t=t.sibling;t!==null;)vd(t,e,n),t=t.sibling}var et=null,nn=!1;function ar(t,e,n){for(n=n.child;n!==null;)qw(t,e,n),n=n.sibling}function qw(t,e,n){if(wn&&typeof wn.onCommitFiberUnmount=="function")try{wn.onCommitFiberUnmount(Pc,n)}catch{}switch(n.tag){case 5:ht||Ys(n,e);case 6:var r=et,s=nn;et=null,ar(t,e,n),et=r,nn=s,et!==null&&(nn?(t=et,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):et.removeChild(n.stateNode));break;case 18:et!==null&&(nn?(t=et,n=n.stateNode,t.nodeType===8?sh(t.parentNode,n):t.nodeType===1&&sh(t,n),$o(t)):sh(et,n.stateNode));break;case 4:r=et,s=nn,et=n.stateNode.containerInfo,nn=!0,ar(t,e,n),et=r,nn=s;break;case 0:case 11:case 14:case 15:if(!ht&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&gd(n,e,o),s=s.next}while(s!==r)}ar(t,e,n);break;case 1:if(!ht&&(Ys(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){je(n,e,l)}ar(t,e,n);break;case 21:ar(t,e,n);break;case 22:n.mode&1?(ht=(r=ht)||n.memoizedState!==null,ar(t,e,n),ht=r):ar(t,e,n);break;default:ar(t,e,n)}}function Yg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new HS),e.forEach(function(r){var s=ex.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function en(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:et=l.stateNode,nn=!1;break e;case 3:et=l.stateNode.containerInfo,nn=!0;break e;case 4:et=l.stateNode.containerInfo,nn=!0;break e}l=l.return}if(et===null)throw Error(B(160));qw(i,o,s),et=null,nn=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(h){je(s,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ww(e,t),e=e.sibling}function Ww(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(en(e,t),mn(t),r&4){try{ko(3,t,t.return),Fc(3,t)}catch(R){je(t,t.return,R)}try{ko(5,t,t.return)}catch(R){je(t,t.return,R)}}break;case 1:en(e,t),mn(t),r&512&&n!==null&&Ys(n,n.return);break;case 5:if(en(e,t),mn(t),r&512&&n!==null&&Ys(n,n.return),t.flags&32){var s=t.stateNode;try{Fo(s,"")}catch(R){je(t,t.return,R)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&pv(s,i),$h(l,o);var h=$h(l,i);for(o=0;o<u.length;o+=2){var f=u[o],g=u[o+1];f==="style"?vv(s,g):f==="dangerouslySetInnerHTML"?yv(s,g):f==="children"?Fo(s,g):lf(s,f,g,h)}switch(l){case"input":Mh(s,i);break;case"textarea":mv(s,i);break;case"select":var m=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?Js(s,!!i.multiple,w,!1):m!==!!i.multiple&&(i.defaultValue!=null?Js(s,!!i.multiple,i.defaultValue,!0):Js(s,!!i.multiple,i.multiple?[]:"",!1))}s[Ko]=i}catch(R){je(t,t.return,R)}}break;case 6:if(en(e,t),mn(t),r&4){if(t.stateNode===null)throw Error(B(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(R){je(t,t.return,R)}}break;case 3:if(en(e,t),mn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$o(e.containerInfo)}catch(R){je(t,t.return,R)}break;case 4:en(e,t),mn(t);break;case 13:en(e,t),mn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(zf=Oe())),r&4&&Yg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(ht=(h=ht)||f,en(e,t),ht=h):en(e,t),mn(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(G=t,f=t.child;f!==null;){for(g=G=f;G!==null;){switch(m=G,w=m.child,m.tag){case 0:case 11:case 14:case 15:ko(4,m,m.return);break;case 1:Ys(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(R){je(r,n,R)}}break;case 5:Ys(m,m.return);break;case 22:if(m.memoizedState!==null){Jg(g);continue}}w!==null?(w.return=m,G=w):Jg(g)}f=f.sibling}e:for(f=null,g=t;;){if(g.tag===5){if(f===null){f=g;try{s=g.stateNode,h?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=g.stateNode,u=g.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=_v("display",o))}catch(R){je(t,t.return,R)}}}else if(g.tag===6){if(f===null)try{g.stateNode.nodeValue=h?"":g.memoizedProps}catch(R){je(t,t.return,R)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;f===g&&(f=null),g=g.return}f===g&&(f=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:en(e,t),mn(t),r&4&&Yg(t);break;case 21:break;default:en(e,t),mn(t)}}function mn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Hw(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Fo(s,""),r.flags&=-33);var i=Qg(t);vd(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Qg(t);_d(t,l,o);break;default:throw Error(B(161))}}catch(u){je(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function WS(t,e,n){G=t,Gw(t)}function Gw(t,e,n){for(var r=(t.mode&1)!==0;G!==null;){var s=G,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||ol;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||ht;l=ol;var h=ht;if(ol=o,(ht=u)&&!h)for(G=s;G!==null;)o=G,u=o.child,o.tag===22&&o.memoizedState!==null?Zg(s):u!==null?(u.return=o,G=u):Zg(s);for(;i!==null;)G=i,Gw(i),i=i.sibling;G=s,ol=l,ht=h}Xg(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,G=i):Xg(t)}}function Xg(t){for(;G!==null;){var e=G;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ht||Fc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ht)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:tn(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Vg(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Vg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var g=f.dehydrated;g!==null&&$o(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}ht||e.flags&512&&yd(e)}catch(m){je(e,e.return,m)}}if(e===t){G=null;break}if(n=e.sibling,n!==null){n.return=e.return,G=n;break}G=e.return}}function Jg(t){for(;G!==null;){var e=G;if(e===t){G=null;break}var n=e.sibling;if(n!==null){n.return=e.return,G=n;break}G=e.return}}function Zg(t){for(;G!==null;){var e=G;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Fc(4,e)}catch(u){je(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){je(e,s,u)}}var i=e.return;try{yd(e)}catch(u){je(e,i,u)}break;case 5:var o=e.return;try{yd(e)}catch(u){je(e,o,u)}}}catch(u){je(e,e.return,u)}if(e===t){G=null;break}var l=e.sibling;if(l!==null){l.return=e.return,G=l;break}G=e.return}}var GS=Math.ceil,ac=er.ReactCurrentDispatcher,Ff=er.ReactCurrentOwner,Xt=er.ReactCurrentBatchConfig,ce=0,Je=null,Ue=null,rt=0,Lt=0,Xs=Br(0),We=0,ea=null,ms=0,Uc=0,Uf=0,Ao=null,kt=null,zf=0,yi=1/0,Dn=null,lc=!1,wd=null,xr=null,al=!1,_r=null,cc=0,Co=0,Ed=null,Nl=-1,Rl=0;function wt(){return ce&6?Oe():Nl!==-1?Nl:Nl=Oe()}function kr(t){return t.mode&1?ce&2&&rt!==0?rt&-rt:RS.transition!==null?(Rl===0&&(Rl=Pv()),Rl):(t=pe,t!==0||(t=window.event,t=t===void 0?16:Mv(t.type)),t):1}function an(t,e,n,r){if(50<Co)throw Co=0,Ed=null,Error(B(185));_a(t,n,r),(!(ce&2)||t!==Je)&&(t===Je&&(!(ce&2)&&(Uc|=n),We===4&&dr(t,rt)),Pt(t,r),n===1&&ce===0&&!(e.mode&1)&&(yi=Oe()+500,Lc&&$r()))}function Pt(t,e){var n=t.callbackNode;RI(t,e);var r=Wl(t,t===Je?rt:0);if(r===0)n!==null&&lg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&lg(n),e===1)t.tag===0?NS(ey.bind(null,t)):rw(ey.bind(null,t)),xS(function(){!(ce&6)&&$r()}),n=null;else{switch(bv(r)){case 1:n=ff;break;case 4:n=Nv;break;case 16:n=ql;break;case 536870912:n=Rv;break;default:n=ql}n=tE(n,Kw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Kw(t,e){if(Nl=-1,Rl=0,ce&6)throw Error(B(327));var n=t.callbackNode;if(ri()&&t.callbackNode!==n)return null;var r=Wl(t,t===Je?rt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=uc(t,r);else{e=r;var s=ce;ce|=2;var i=Yw();(Je!==t||rt!==e)&&(Dn=null,yi=Oe()+500,as(t,e));do try{YS();break}catch(l){Qw(t,l)}while(!0);kf(),ac.current=i,ce=s,Ue!==null?e=0:(Je=null,rt=0,e=We)}if(e!==0){if(e===2&&(s=Kh(t),s!==0&&(r=s,e=Td(t,s))),e===1)throw n=ea,as(t,0),dr(t,r),Pt(t,Oe()),n;if(e===6)dr(t,r);else{if(s=t.current.alternate,!(r&30)&&!KS(s)&&(e=uc(t,r),e===2&&(i=Kh(t),i!==0&&(r=i,e=Td(t,i))),e===1))throw n=ea,as(t,0),dr(t,r),Pt(t,Oe()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:es(t,kt,Dn);break;case 3:if(dr(t,r),(r&130023424)===r&&(e=zf+500-Oe(),10<e)){if(Wl(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){wt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=nd(es.bind(null,t,kt,Dn),e);break}es(t,kt,Dn);break;case 4:if(dr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-on(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*GS(r/1960))-r,10<r){t.timeoutHandle=nd(es.bind(null,t,kt,Dn),r);break}es(t,kt,Dn);break;case 5:es(t,kt,Dn);break;default:throw Error(B(329))}}}return Pt(t,Oe()),t.callbackNode===n?Kw.bind(null,t):null}function Td(t,e){var n=Ao;return t.current.memoizedState.isDehydrated&&(as(t,e).flags|=256),t=uc(t,e),t!==2&&(e=kt,kt=n,e!==null&&Id(e)),t}function Id(t){kt===null?kt=t:kt.push.apply(kt,t)}function KS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!un(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function dr(t,e){for(e&=~Uf,e&=~Uc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-on(e),r=1<<n;t[n]=-1,e&=~r}}function ey(t){if(ce&6)throw Error(B(327));ri();var e=Wl(t,0);if(!(e&1))return Pt(t,Oe()),null;var n=uc(t,e);if(t.tag!==0&&n===2){var r=Kh(t);r!==0&&(e=r,n=Td(t,r))}if(n===1)throw n=ea,as(t,0),dr(t,e),Pt(t,Oe()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,es(t,kt,Dn),Pt(t,Oe()),null}function Bf(t,e){var n=ce;ce|=1;try{return t(e)}finally{ce=n,ce===0&&(yi=Oe()+500,Lc&&$r())}}function gs(t){_r!==null&&_r.tag===0&&!(ce&6)&&ri();var e=ce;ce|=1;var n=Xt.transition,r=pe;try{if(Xt.transition=null,pe=1,t)return t()}finally{pe=r,Xt.transition=n,ce=e,!(ce&6)&&$r()}}function $f(){Lt=Xs.current,Ie(Xs)}function as(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,SS(n)),Ue!==null)for(n=Ue.return;n!==null;){var r=n;switch(If(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xl();break;case 3:mi(),Ie(Nt),Ie(ft),bf();break;case 5:Pf(r);break;case 4:mi();break;case 13:Ie(ke);break;case 19:Ie(ke);break;case 10:Af(r.type._context);break;case 22:case 23:$f()}n=n.return}if(Je=t,Ue=t=Ar(t.current,null),rt=Lt=e,We=0,ea=null,Uf=Uc=ms=0,kt=Ao=null,rs!==null){for(e=0;e<rs.length;e++)if(n=rs[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}rs=null}return t}function Qw(t,e){do{var n=Ue;try{if(kf(),kl.current=oc,ic){for(var r=Ae.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}ic=!1}if(ps=0,Xe=qe=Ae=null,xo=!1,Xo=0,Ff.current=null,n===null||n.return===null){We=1,ea=e,Ue=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=rt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,g=f.tag;if(!(f.mode&1)&&(g===0||g===11||g===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var w=zg(o);if(w!==null){w.flags&=-257,Bg(w,o,l,i,e),w.mode&1&&Ug(i,h,e),e=w,u=h;var x=e.updateQueue;if(x===null){var R=new Set;R.add(u),e.updateQueue=R}else x.add(u);break e}else{if(!(e&1)){Ug(i,h,e),Hf();break e}u=Error(B(426))}}else if(Se&&l.mode&1){var b=zg(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Bg(b,o,l,i,e),Sf(gi(u,l));break e}}i=u=gi(u,l),We!==4&&(We=2),Ao===null?Ao=[i]:Ao.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var S=bw(i,u,e);Dg(i,S);break e;case 1:l=u;var I=i.type,A=i.stateNode;if(!(i.flags&128)&&(typeof I.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(xr===null||!xr.has(A)))){i.flags|=65536,e&=-e,i.lanes|=e;var D=jw(i,l,e);Dg(i,D);break e}}i=i.return}while(i!==null)}Jw(n)}catch(N){e=N,Ue===n&&n!==null&&(Ue=n=n.return);continue}break}while(!0)}function Yw(){var t=ac.current;return ac.current=oc,t===null?oc:t}function Hf(){(We===0||We===3||We===2)&&(We=4),Je===null||!(ms&268435455)&&!(Uc&268435455)||dr(Je,rt)}function uc(t,e){var n=ce;ce|=2;var r=Yw();(Je!==t||rt!==e)&&(Dn=null,as(t,e));do try{QS();break}catch(s){Qw(t,s)}while(!0);if(kf(),ce=n,ac.current=r,Ue!==null)throw Error(B(261));return Je=null,rt=0,We}function QS(){for(;Ue!==null;)Xw(Ue)}function YS(){for(;Ue!==null&&!EI();)Xw(Ue)}function Xw(t){var e=eE(t.alternate,t,Lt);t.memoizedProps=t.pendingProps,e===null?Jw(t):Ue=e,Ff.current=null}function Jw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=$S(n,e),n!==null){n.flags&=32767,Ue=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{We=6,Ue=null;return}}else if(n=BS(n,e,Lt),n!==null){Ue=n;return}if(e=e.sibling,e!==null){Ue=e;return}Ue=e=t}while(e!==null);We===0&&(We=5)}function es(t,e,n){var r=pe,s=Xt.transition;try{Xt.transition=null,pe=1,XS(t,e,n,r)}finally{Xt.transition=s,pe=r}return null}function XS(t,e,n,r){do ri();while(_r!==null);if(ce&6)throw Error(B(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(PI(t,i),t===Je&&(Ue=Je=null,rt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||al||(al=!0,tE(ql,function(){return ri(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Xt.transition,Xt.transition=null;var o=pe;pe=1;var l=ce;ce|=4,Ff.current=null,qS(t,n),Ww(n,t),yS(ed),Gl=!!Zh,ed=Zh=null,t.current=n,WS(n),TI(),ce=l,pe=o,Xt.transition=i}else t.current=n;if(al&&(al=!1,_r=t,cc=s),i=t.pendingLanes,i===0&&(xr=null),xI(n.stateNode),Pt(t,Oe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(lc)throw lc=!1,t=wd,wd=null,t;return cc&1&&t.tag!==0&&ri(),i=t.pendingLanes,i&1?t===Ed?Co++:(Co=0,Ed=t):Co=0,$r(),null}function ri(){if(_r!==null){var t=bv(cc),e=Xt.transition,n=pe;try{if(Xt.transition=null,pe=16>t?16:t,_r===null)var r=!1;else{if(t=_r,_r=null,cc=0,ce&6)throw Error(B(331));var s=ce;for(ce|=4,G=t.current;G!==null;){var i=G,o=i.child;if(G.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(G=h;G!==null;){var f=G;switch(f.tag){case 0:case 11:case 15:ko(8,f,i)}var g=f.child;if(g!==null)g.return=f,G=g;else for(;G!==null;){f=G;var m=f.sibling,w=f.return;if($w(f),f===h){G=null;break}if(m!==null){m.return=w,G=m;break}G=w}}}var x=i.alternate;if(x!==null){var R=x.child;if(R!==null){x.child=null;do{var b=R.sibling;R.sibling=null,R=b}while(R!==null)}}G=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,G=o;else e:for(;G!==null;){if(i=G,i.flags&2048)switch(i.tag){case 0:case 11:case 15:ko(9,i,i.return)}var S=i.sibling;if(S!==null){S.return=i.return,G=S;break e}G=i.return}}var I=t.current;for(G=I;G!==null;){o=G;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,G=A;else e:for(o=I;G!==null;){if(l=G,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Fc(9,l)}}catch(N){je(l,l.return,N)}if(l===o){G=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,G=D;break e}G=l.return}}if(ce=s,$r(),wn&&typeof wn.onPostCommitFiberRoot=="function")try{wn.onPostCommitFiberRoot(Pc,t)}catch{}r=!0}return r}finally{pe=n,Xt.transition=e}}return!1}function ty(t,e,n){e=gi(n,e),e=bw(t,e,1),t=Sr(t,e,1),e=wt(),t!==null&&(_a(t,1,e),Pt(t,e))}function je(t,e,n){if(t.tag===3)ty(t,t,n);else for(;e!==null;){if(e.tag===3){ty(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xr===null||!xr.has(r))){t=gi(n,t),t=jw(e,t,1),e=Sr(e,t,1),t=wt(),e!==null&&(_a(e,1,t),Pt(e,t));break}}e=e.return}}function JS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=wt(),t.pingedLanes|=t.suspendedLanes&n,Je===t&&(rt&n)===n&&(We===4||We===3&&(rt&130023424)===rt&&500>Oe()-zf?as(t,0):Uf|=n),Pt(t,e)}function Zw(t,e){e===0&&(t.mode&1?(e=Xa,Xa<<=1,!(Xa&130023424)&&(Xa=4194304)):e=1);var n=wt();t=qn(t,e),t!==null&&(_a(t,e,n),Pt(t,n))}function ZS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Zw(t,n)}function ex(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),Zw(t,n)}var eE;eE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Nt.current)Ct=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ct=!1,zS(t,e,n);Ct=!!(t.flags&131072)}else Ct=!1,Se&&e.flags&1048576&&sw(e,ec,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Cl(t,e),t=e.pendingProps;var s=di(e,ft.current);ni(e,n),s=Df(null,e,r,t,s,n);var i=Vf();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Rt(r)?(i=!0,Jl(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Nf(e),s.updater=Mc,e.stateNode=s,s._reactInternals=e,cd(e,r,t,n),e=dd(null,e,r,!0,i,n)):(e.tag=0,Se&&i&&Tf(e),vt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Cl(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=nx(r),t=tn(r,t),s){case 0:e=hd(null,e,r,t,n);break e;case 1:e=qg(null,e,r,t,n);break e;case 11:e=$g(null,e,r,t,n);break e;case 14:e=Hg(null,e,r,tn(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:tn(r,s),hd(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:tn(r,s),qg(t,e,r,s,n);case 3:e:{if(Ow(e),t===null)throw Error(B(387));r=e.pendingProps,i=e.memoizedState,s=i.element,uw(t,e),rc(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=gi(Error(B(423)),e),e=Wg(t,e,r,n,s);break e}else if(r!==s){s=gi(Error(B(424)),e),e=Wg(t,e,r,n,s);break e}else for(Ot=Ir(e.stateNode.containerInfo.firstChild),zt=e,Se=!0,rn=null,n=lw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fi(),r===s){e=Wn(t,e,n);break e}vt(t,e,r,n)}e=e.child}return e;case 5:return hw(e),t===null&&od(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,td(r,s)?o=null:i!==null&&td(r,i)&&(e.flags|=32),Lw(t,e),vt(t,e,o,n),e.child;case 6:return t===null&&od(e),null;case 13:return Mw(t,e,n);case 4:return Rf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=pi(e,null,r,n):vt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:tn(r,s),$g(t,e,r,s,n);case 7:return vt(t,e,e.pendingProps,n),e.child;case 8:return vt(t,e,e.pendingProps.children,n),e.child;case 12:return vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,_e(tc,r._currentValue),r._currentValue=o,i!==null)if(un(i.value,o)){if(i.children===s.children&&!Nt.current){e=Wn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=zn(-1,n&-n),u.tag=2;var h=i.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),ad(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(B(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ad(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}vt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,ni(e,n),s=Jt(s),r=r(s),e.flags|=1,vt(t,e,r,n),e.child;case 14:return r=e.type,s=tn(r,e.pendingProps),s=tn(r.type,s),Hg(t,e,r,s,n);case 15:return Dw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:tn(r,s),Cl(t,e),e.tag=1,Rt(r)?(t=!0,Jl(e)):t=!1,ni(e,n),Pw(e,r,s),cd(e,r,s,n),dd(null,e,r,!0,t,n);case 19:return Fw(t,e,n);case 22:return Vw(t,e,n)}throw Error(B(156,e.tag))};function tE(t,e){return Cv(t,e)}function tx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yt(t,e,n,r){return new tx(t,e,n,r)}function qf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function nx(t){if(typeof t=="function")return qf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===uf)return 11;if(t===hf)return 14}return 2}function Ar(t,e){var n=t.alternate;return n===null?(n=Yt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Pl(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")qf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case zs:return ls(n.children,s,i,e);case cf:o=8,s|=8;break;case jh:return t=Yt(12,n,e,s|2),t.elementType=jh,t.lanes=i,t;case Dh:return t=Yt(13,n,e,s),t.elementType=Dh,t.lanes=i,t;case Vh:return t=Yt(19,n,e,s),t.elementType=Vh,t.lanes=i,t;case hv:return zc(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case cv:o=10;break e;case uv:o=9;break e;case uf:o=11;break e;case hf:o=14;break e;case cr:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=Yt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function ls(t,e,n,r){return t=Yt(7,t,r,e),t.lanes=n,t}function zc(t,e,n,r){return t=Yt(22,t,r,e),t.elementType=hv,t.lanes=n,t.stateNode={isHidden:!1},t}function dh(t,e,n){return t=Yt(6,t,null,e),t.lanes=n,t}function fh(t,e,n){return e=Yt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function rx(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gu(0),this.expirationTimes=Gu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gu(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Wf(t,e,n,r,s,i,o,l,u){return t=new rx(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Yt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nf(i),t}function sx(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Us,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function nE(t){if(!t)return jr;t=t._reactInternals;e:{if(xs(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Rt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(Rt(n))return nw(t,n,e)}return e}function rE(t,e,n,r,s,i,o,l,u){return t=Wf(n,r,!0,t,s,i,o,l,u),t.context=nE(null),n=t.current,r=wt(),s=kr(n),i=zn(r,s),i.callback=e??null,Sr(n,i,s),t.current.lanes=s,_a(t,s,r),Pt(t,r),t}function Bc(t,e,n,r){var s=e.current,i=wt(),o=kr(s);return n=nE(n),e.context===null?e.context=n:e.pendingContext=n,e=zn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Sr(s,e,o),t!==null&&(an(t,s,o,i),xl(t,s,o)),o}function hc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ny(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Gf(t,e){ny(t,e),(t=t.alternate)&&ny(t,e)}function ix(){return null}var sE=typeof reportError=="function"?reportError:function(t){console.error(t)};function Kf(t){this._internalRoot=t}$c.prototype.render=Kf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));Bc(t,e,null,null)};$c.prototype.unmount=Kf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;gs(function(){Bc(null,t,null,null)}),e[Hn]=null}};function $c(t){this._internalRoot=t}$c.prototype.unstable_scheduleHydration=function(t){if(t){var e=Vv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<hr.length&&e!==0&&e<hr[n].priority;n++);hr.splice(n,0,t),n===0&&Ov(t)}};function Qf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Hc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ry(){}function ox(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var h=hc(o);i.call(h)}}var o=rE(e,r,t,0,null,!1,!1,"",ry);return t._reactRootContainer=o,t[Hn]=o.current,Wo(t.nodeType===8?t.parentNode:t),gs(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var h=hc(u);l.call(h)}}var u=Wf(t,0,!1,null,null,!1,!1,"",ry);return t._reactRootContainer=u,t[Hn]=u.current,Wo(t.nodeType===8?t.parentNode:t),gs(function(){Bc(e,u,n,r)}),u}function qc(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=hc(o);l.call(u)}}Bc(e,o,t,s)}else o=ox(n,e,t,s,r);return hc(o)}jv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=po(e.pendingLanes);n!==0&&(pf(e,n|1),Pt(e,Oe()),!(ce&6)&&(yi=Oe()+500,$r()))}break;case 13:gs(function(){var r=qn(t,1);if(r!==null){var s=wt();an(r,t,1,s)}}),Gf(t,1)}};mf=function(t){if(t.tag===13){var e=qn(t,134217728);if(e!==null){var n=wt();an(e,t,134217728,n)}Gf(t,134217728)}};Dv=function(t){if(t.tag===13){var e=kr(t),n=qn(t,e);if(n!==null){var r=wt();an(n,t,e,r)}Gf(t,e)}};Vv=function(){return pe};Lv=function(t,e){var n=pe;try{return pe=t,e()}finally{pe=n}};qh=function(t,e,n){switch(e){case"input":if(Mh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Vc(r);if(!s)throw Error(B(90));fv(r),Mh(r,s)}}}break;case"textarea":mv(t,n);break;case"select":e=n.value,e!=null&&Js(t,!!n.multiple,e,!1)}};Tv=Bf;Iv=gs;var ax={usingClientEntryPoint:!1,Events:[wa,qs,Vc,wv,Ev,Bf]},lo={findFiberByHostInstance:ns,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lx={bundleType:lo.bundleType,version:lo.version,rendererPackageName:lo.rendererPackageName,rendererConfig:lo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:er.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=kv(t),t===null?null:t.stateNode},findFiberByHostInstance:lo.findFiberByHostInstance||ix,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ll.isDisabled&&ll.supportsFiber)try{Pc=ll.inject(lx),wn=ll}catch{}}$t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ax;$t.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qf(e))throw Error(B(200));return sx(t,e,null,n)};$t.createRoot=function(t,e){if(!Qf(t))throw Error(B(299));var n=!1,r="",s=sE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Wf(t,1,!1,null,null,n,!1,r,s),t[Hn]=e.current,Wo(t.nodeType===8?t.parentNode:t),new Kf(e)};$t.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=kv(e),t=t===null?null:t.stateNode,t};$t.flushSync=function(t){return gs(t)};$t.hydrate=function(t,e,n){if(!Hc(e))throw Error(B(200));return qc(null,t,e,!0,n)};$t.hydrateRoot=function(t,e,n){if(!Qf(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=sE;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=rE(e,null,t,1,n??null,s,!1,i,o),t[Hn]=e.current,Wo(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new $c(e)};$t.render=function(t,e,n){if(!Hc(e))throw Error(B(200));return qc(null,t,e,!1,n)};$t.unmountComponentAtNode=function(t){if(!Hc(t))throw Error(B(40));return t._reactRootContainer?(gs(function(){qc(null,null,t,!1,function(){t._reactRootContainer=null,t[Hn]=null})}),!0):!1};$t.unstable_batchedUpdates=Bf;$t.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Hc(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return qc(t,e,n,!1,r)};$t.version="18.3.1-next-f1338f8080-20240426";function iE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(iE)}catch(t){console.error(t)}}iE(),iv.exports=$t;var cx=iv.exports,sy=cx;Ph.createRoot=sy.createRoot,Ph.hydrateRoot=sy.hydrateRoot;const ux={},iy=t=>{let e;const n=new Set,r=(f,g)=>{const m=typeof f=="function"?f(e):f;if(!Object.is(m,e)){const w=e;e=g??(typeof m!="object"||m===null)?m:Object.assign({},e,m),n.forEach(x=>x(e,w))}},s=()=>e,u={setState:r,getState:s,getInitialState:()=>h,subscribe:f=>(n.add(f),()=>n.delete(f)),destroy:()=>{(ux?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},h=e=t(r,s,u);return u},hx=t=>t?iy(t):iy;var oE={exports:{}},aE={},lE={exports:{}},cE={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _i=F;function dx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var fx=typeof Object.is=="function"?Object.is:dx,px=_i.useState,mx=_i.useEffect,gx=_i.useLayoutEffect,yx=_i.useDebugValue;function _x(t,e){var n=e(),r=px({inst:{value:n,getSnapshot:e}}),s=r[0].inst,i=r[1];return gx(function(){s.value=n,s.getSnapshot=e,ph(s)&&i({inst:s})},[t,n,e]),mx(function(){return ph(s)&&i({inst:s}),t(function(){ph(s)&&i({inst:s})})},[t]),yx(n),n}function ph(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!fx(t,n)}catch{return!0}}function vx(t,e){return e()}var wx=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?vx:_x;cE.useSyncExternalStore=_i.useSyncExternalStore!==void 0?_i.useSyncExternalStore:wx;lE.exports=cE;var Ex=lE.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wc=F,Tx=Ex;function Ix(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Sx=typeof Object.is=="function"?Object.is:Ix,xx=Tx.useSyncExternalStore,kx=Wc.useRef,Ax=Wc.useEffect,Cx=Wc.useMemo,Nx=Wc.useDebugValue;aE.useSyncExternalStoreWithSelector=function(t,e,n,r,s){var i=kx(null);if(i.current===null){var o={hasValue:!1,value:null};i.current=o}else o=i.current;i=Cx(function(){function u(w){if(!h){if(h=!0,f=w,w=r(w),s!==void 0&&o.hasValue){var x=o.value;if(s(x,w))return g=x}return g=w}if(x=g,Sx(f,w))return x;var R=r(w);return s!==void 0&&s(x,R)?(f=w,x):(f=w,g=R)}var h=!1,f,g,m=n===void 0?null:n;return[function(){return u(e())},m===null?void 0:function(){return u(m())}]},[e,n,r,s]);var l=xx(t,i[0],i[1]);return Ax(function(){o.hasValue=!0,o.value=l},[l]),Nx(l),l};oE.exports=aE;var Rx=oE.exports;const Px=W_(Rx),uE={},{useDebugValue:bx}=rv,{useSyncExternalStoreWithSelector:jx}=Px;let oy=!1;const Dx=t=>t;function Vx(t,e=Dx,n){(uE?"production":void 0)!=="production"&&n&&!oy&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),oy=!0);const r=jx(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return bx(r),r}const ay=t=>{(uE?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?hx(t):t,n=(r,s)=>Vx(e,r,s);return Object.assign(n,e),n},Lx=t=>t?ay(t):ay,Ox=()=>{};var ly={};/**
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
 */const hE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Mx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},dE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,h=u?t[s+2]:0,f=i>>2,g=(i&3)<<4|l>>4;let m=(l&15)<<2|h>>6,w=h&63;u||(w=64,o||(m=64)),r.push(n[f],n[g],n[m],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(hE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Mx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const g=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||g==null)throw new Fx;const m=i<<2|l>>4;if(r.push(m),h!==64){const w=l<<4&240|h>>2;if(r.push(w),g!==64){const x=h<<6&192|g;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Fx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ux=function(t){const e=hE(t);return dE.encodeByteArray(e,!0)},dc=function(t){return Ux(t).replace(/\./g,"")},fE=function(t){try{return dE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function zx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Bx=()=>zx().__FIREBASE_DEFAULTS__,$x=()=>{if(typeof process>"u"||typeof ly>"u")return;const t=ly.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Hx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&fE(t[1]);return e&&JSON.parse(e)},Gc=()=>{try{return Ox()||Bx()||$x()||Hx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},pE=t=>{var e,n;return(n=(e=Gc())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},mE=t=>{const e=pE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},gE=()=>{var t;return(t=Gc())==null?void 0:t.config},yE=t=>{var e;return(e=Gc())==null?void 0:e[`_${t}`]};/**
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
 */class qx{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Hr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Yf(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function _E(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[dc(JSON.stringify(n)),dc(JSON.stringify(o)),""].join(".")}const No={};function Wx(){const t={prod:[],emulator:[]};for(const e of Object.keys(No))No[e]?t.emulator.push(e):t.prod.push(e);return t}function Gx(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let cy=!1;function Xf(t,e){if(typeof window>"u"||typeof document>"u"||!Hr(window.location.host)||No[t]===e||No[t]||cy)return;No[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=Wx().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function u(m,w){m.setAttribute("width","24"),m.setAttribute("id",w),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function h(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{cy=!0,o()},m}function f(m,w){m.setAttribute("id",w),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function g(){const m=Gx(r),w=n("text"),x=document.getElementById(w)||document.createElement("span"),R=n("learnmore"),b=document.getElementById(R)||document.createElement("a"),S=n("preprendIcon"),I=document.getElementById(S)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const A=m.element;l(A),f(b,R);const D=h();u(I,S),A.append(I,x,b,D),document.body.appendChild(A)}i?(x.innerText="Preview backend disconnected.",I.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",w)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
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
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Kx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function Qx(){var e;const t=(e=Gc())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Yx(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Xx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Jx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Zx(){const t=pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ek(){return!Qx()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function tk(){try{return typeof indexedDB=="object"}catch{return!1}}function nk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const rk="FirebaseError";class Rn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=rk,Object.setPrototypeOf(this,Rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ta.prototype.create)}}class Ta{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?sk(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Rn(s,l,r)}}function sk(t,e){return t.replace(ik,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ik=/\{\$([^}]+)}/g;function ok(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ys(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(uy(i)&&uy(o)){if(!ys(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function uy(t){return t!==null&&typeof t=="object"}/**
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
 */function Ia(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ak(t,e){const n=new lk(t,e);return n.subscribe.bind(n)}class lk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ck(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=mh),s.error===void 0&&(s.error=mh),s.complete===void 0&&(s.complete=mh);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ck(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function mh(){}/**
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
 */function Ne(t){return t&&t._delegate?t._delegate:t}class Dr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ts="[DEFAULT]";/**
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
 */class uk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new qx;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(dk(e))try{this.getOrInitializeService({instanceIdentifier:ts})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ts){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ts){return this.instances.has(e)}getOptions(e=ts){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:hk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ts){return this.component?this.component.multipleInstances?e:ts:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hk(t){return t===ts?void 0:t}function dk(t){return t.instantiationMode==="EAGER"}/**
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
 */class fk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new uk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const pk={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},mk=ie.INFO,gk={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},yk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=gk[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jf{constructor(e){this.name=e,this._logLevel=mk,this._logHandler=yk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const _k=(t,e)=>e.some(n=>t instanceof n);let hy,dy;function vk(){return hy||(hy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wk(){return dy||(dy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vE=new WeakMap,Sd=new WeakMap,wE=new WeakMap,gh=new WeakMap,Zf=new WeakMap;function Ek(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Cr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&vE.set(n,t)}).catch(()=>{}),Zf.set(e,t),e}function Tk(t){if(Sd.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Sd.set(t,e)}let xd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||wE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Cr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ik(t){xd=t(xd)}function Sk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(yh(this),e,...n);return wE.set(r,e.sort?e.sort():[e]),Cr(r)}:wk().includes(t)?function(...e){return t.apply(yh(this),e),Cr(vE.get(this))}:function(...e){return Cr(t.apply(yh(this),e))}}function xk(t){return typeof t=="function"?Sk(t):(t instanceof IDBTransaction&&Tk(t),_k(t,vk())?new Proxy(t,xd):t)}function Cr(t){if(t instanceof IDBRequest)return Ek(t);if(gh.has(t))return gh.get(t);const e=xk(t);return e!==t&&(gh.set(t,e),Zf.set(e,t)),e}const yh=t=>Zf.get(t);function kk(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Cr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Cr(o.result),u.oldVersion,u.newVersion,Cr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Ak=["get","getKey","getAll","getAllKeys","count"],Ck=["put","add","delete","clear"],_h=new Map;function fy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(_h.get(e))return _h.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Ck.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ak.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&u.done]))[0]};return _h.set(e,i),i}Ik(t=>({...t,get:(e,n,r)=>fy(e,n)||t.get(e,n,r),has:(e,n)=>!!fy(e,n)||t.has(e,n)}));/**
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
 */class Nk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Rk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Rk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kd="@firebase/app",py="0.14.7";/**
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
 */const Gn=new Jf("@firebase/app"),Pk="@firebase/app-compat",bk="@firebase/analytics-compat",jk="@firebase/analytics",Dk="@firebase/app-check-compat",Vk="@firebase/app-check",Lk="@firebase/auth",Ok="@firebase/auth-compat",Mk="@firebase/database",Fk="@firebase/data-connect",Uk="@firebase/database-compat",zk="@firebase/functions",Bk="@firebase/functions-compat",$k="@firebase/installations",Hk="@firebase/installations-compat",qk="@firebase/messaging",Wk="@firebase/messaging-compat",Gk="@firebase/performance",Kk="@firebase/performance-compat",Qk="@firebase/remote-config",Yk="@firebase/remote-config-compat",Xk="@firebase/storage",Jk="@firebase/storage-compat",Zk="@firebase/firestore",eA="@firebase/ai",tA="@firebase/firestore-compat",nA="firebase",rA="12.8.0";/**
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
 */const Ad="[DEFAULT]",sA={[kd]:"fire-core",[Pk]:"fire-core-compat",[jk]:"fire-analytics",[bk]:"fire-analytics-compat",[Vk]:"fire-app-check",[Dk]:"fire-app-check-compat",[Lk]:"fire-auth",[Ok]:"fire-auth-compat",[Mk]:"fire-rtdb",[Fk]:"fire-data-connect",[Uk]:"fire-rtdb-compat",[zk]:"fire-fn",[Bk]:"fire-fn-compat",[$k]:"fire-iid",[Hk]:"fire-iid-compat",[qk]:"fire-fcm",[Wk]:"fire-fcm-compat",[Gk]:"fire-perf",[Kk]:"fire-perf-compat",[Qk]:"fire-rc",[Yk]:"fire-rc-compat",[Xk]:"fire-gcs",[Jk]:"fire-gcs-compat",[Zk]:"fire-fst",[tA]:"fire-fst-compat",[eA]:"fire-vertex","fire-js":"fire-js",[nA]:"fire-js-all"};/**
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
 */const fc=new Map,iA=new Map,Cd=new Map;function my(t,e){try{t.container.addComponent(e)}catch(n){Gn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _s(t){const e=t.name;if(Cd.has(e))return Gn.debug(`There were multiple attempts to register component ${e}.`),!1;Cd.set(e,t);for(const n of fc.values())my(n,t);for(const n of iA.values())my(n,t);return!0}function Kc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Kt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const oA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nr=new Ta("app","Firebase",oA);/**
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
 */class aA{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Dr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nr.create("app-deleted",{appName:this._name})}}/**
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
 */const ks=rA;function EE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Ad,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Nr.create("bad-app-name",{appName:String(s)});if(n||(n=gE()),!n)throw Nr.create("no-options");const i=fc.get(s);if(i){if(ys(n,i.options)&&ys(r,i.config))return i;throw Nr.create("duplicate-app",{appName:s})}const o=new fk(s);for(const u of Cd.values())o.addComponent(u);const l=new aA(n,r,o);return fc.set(s,l),l}function ep(t=Ad){const e=fc.get(t);if(!e&&t===Ad&&gE())return EE();if(!e)throw Nr.create("no-app",{appName:t});return e}function Tn(t,e,n){let r=sA[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gn.warn(o.join(" "));return}_s(new Dr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const lA="firebase-heartbeat-database",cA=1,ta="firebase-heartbeat-store";let vh=null;function TE(){return vh||(vh=kk(lA,cA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ta)}catch(n){console.warn(n)}}}}).catch(t=>{throw Nr.create("idb-open",{originalErrorMessage:t.message})})),vh}async function uA(t){try{const n=(await TE()).transaction(ta),r=await n.objectStore(ta).get(IE(t));return await n.done,r}catch(e){if(e instanceof Rn)Gn.warn(e.message);else{const n=Nr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gn.warn(n.message)}}}async function gy(t,e){try{const r=(await TE()).transaction(ta,"readwrite");await r.objectStore(ta).put(e,IE(t)),await r.done}catch(n){if(n instanceof Rn)Gn.warn(n.message);else{const r=Nr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gn.warn(r.message)}}}function IE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const hA=1024,dA=30;class fA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new mA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=yy();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>dA){const o=gA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Gn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=yy(),{heartbeatsToSend:r,unsentEntries:s}=pA(this._heartbeatsCache.heartbeats),i=dc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Gn.warn(n),""}}}function yy(){return new Date().toISOString().substring(0,10)}function pA(t,e=hA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),_y(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),_y(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class mA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tk()?nk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await uA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return gy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return gy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function _y(t){return dc(JSON.stringify({version:2,heartbeats:t})).length}function gA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function yA(t){_s(new Dr("platform-logger",e=>new Nk(e),"PRIVATE")),_s(new Dr("heartbeat",e=>new fA(e),"PRIVATE")),Tn(kd,py,t),Tn(kd,py,"esm2020"),Tn("fire-js","")}yA("");var vy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rr,SE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,y){function T(){}T.prototype=y.prototype,_.F=y.prototype,_.prototype=new T,_.prototype.constructor=_,_.D=function(E,k,P){for(var C=Array(arguments.length-2),se=2;se<arguments.length;se++)C[se-2]=arguments[se];return y.prototype[k].apply(E,C)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(_,y,T){T||(T=0);const E=Array(16);if(typeof y=="string")for(var k=0;k<16;++k)E[k]=y.charCodeAt(T++)|y.charCodeAt(T++)<<8|y.charCodeAt(T++)<<16|y.charCodeAt(T++)<<24;else for(k=0;k<16;++k)E[k]=y[T++]|y[T++]<<8|y[T++]<<16|y[T++]<<24;y=_.g[0],T=_.g[1],k=_.g[2];let P=_.g[3],C;C=y+(P^T&(k^P))+E[0]+3614090360&4294967295,y=T+(C<<7&4294967295|C>>>25),C=P+(k^y&(T^k))+E[1]+3905402710&4294967295,P=y+(C<<12&4294967295|C>>>20),C=k+(T^P&(y^T))+E[2]+606105819&4294967295,k=P+(C<<17&4294967295|C>>>15),C=T+(y^k&(P^y))+E[3]+3250441966&4294967295,T=k+(C<<22&4294967295|C>>>10),C=y+(P^T&(k^P))+E[4]+4118548399&4294967295,y=T+(C<<7&4294967295|C>>>25),C=P+(k^y&(T^k))+E[5]+1200080426&4294967295,P=y+(C<<12&4294967295|C>>>20),C=k+(T^P&(y^T))+E[6]+2821735955&4294967295,k=P+(C<<17&4294967295|C>>>15),C=T+(y^k&(P^y))+E[7]+4249261313&4294967295,T=k+(C<<22&4294967295|C>>>10),C=y+(P^T&(k^P))+E[8]+1770035416&4294967295,y=T+(C<<7&4294967295|C>>>25),C=P+(k^y&(T^k))+E[9]+2336552879&4294967295,P=y+(C<<12&4294967295|C>>>20),C=k+(T^P&(y^T))+E[10]+4294925233&4294967295,k=P+(C<<17&4294967295|C>>>15),C=T+(y^k&(P^y))+E[11]+2304563134&4294967295,T=k+(C<<22&4294967295|C>>>10),C=y+(P^T&(k^P))+E[12]+1804603682&4294967295,y=T+(C<<7&4294967295|C>>>25),C=P+(k^y&(T^k))+E[13]+4254626195&4294967295,P=y+(C<<12&4294967295|C>>>20),C=k+(T^P&(y^T))+E[14]+2792965006&4294967295,k=P+(C<<17&4294967295|C>>>15),C=T+(y^k&(P^y))+E[15]+1236535329&4294967295,T=k+(C<<22&4294967295|C>>>10),C=y+(k^P&(T^k))+E[1]+4129170786&4294967295,y=T+(C<<5&4294967295|C>>>27),C=P+(T^k&(y^T))+E[6]+3225465664&4294967295,P=y+(C<<9&4294967295|C>>>23),C=k+(y^T&(P^y))+E[11]+643717713&4294967295,k=P+(C<<14&4294967295|C>>>18),C=T+(P^y&(k^P))+E[0]+3921069994&4294967295,T=k+(C<<20&4294967295|C>>>12),C=y+(k^P&(T^k))+E[5]+3593408605&4294967295,y=T+(C<<5&4294967295|C>>>27),C=P+(T^k&(y^T))+E[10]+38016083&4294967295,P=y+(C<<9&4294967295|C>>>23),C=k+(y^T&(P^y))+E[15]+3634488961&4294967295,k=P+(C<<14&4294967295|C>>>18),C=T+(P^y&(k^P))+E[4]+3889429448&4294967295,T=k+(C<<20&4294967295|C>>>12),C=y+(k^P&(T^k))+E[9]+568446438&4294967295,y=T+(C<<5&4294967295|C>>>27),C=P+(T^k&(y^T))+E[14]+3275163606&4294967295,P=y+(C<<9&4294967295|C>>>23),C=k+(y^T&(P^y))+E[3]+4107603335&4294967295,k=P+(C<<14&4294967295|C>>>18),C=T+(P^y&(k^P))+E[8]+1163531501&4294967295,T=k+(C<<20&4294967295|C>>>12),C=y+(k^P&(T^k))+E[13]+2850285829&4294967295,y=T+(C<<5&4294967295|C>>>27),C=P+(T^k&(y^T))+E[2]+4243563512&4294967295,P=y+(C<<9&4294967295|C>>>23),C=k+(y^T&(P^y))+E[7]+1735328473&4294967295,k=P+(C<<14&4294967295|C>>>18),C=T+(P^y&(k^P))+E[12]+2368359562&4294967295,T=k+(C<<20&4294967295|C>>>12),C=y+(T^k^P)+E[5]+4294588738&4294967295,y=T+(C<<4&4294967295|C>>>28),C=P+(y^T^k)+E[8]+2272392833&4294967295,P=y+(C<<11&4294967295|C>>>21),C=k+(P^y^T)+E[11]+1839030562&4294967295,k=P+(C<<16&4294967295|C>>>16),C=T+(k^P^y)+E[14]+4259657740&4294967295,T=k+(C<<23&4294967295|C>>>9),C=y+(T^k^P)+E[1]+2763975236&4294967295,y=T+(C<<4&4294967295|C>>>28),C=P+(y^T^k)+E[4]+1272893353&4294967295,P=y+(C<<11&4294967295|C>>>21),C=k+(P^y^T)+E[7]+4139469664&4294967295,k=P+(C<<16&4294967295|C>>>16),C=T+(k^P^y)+E[10]+3200236656&4294967295,T=k+(C<<23&4294967295|C>>>9),C=y+(T^k^P)+E[13]+681279174&4294967295,y=T+(C<<4&4294967295|C>>>28),C=P+(y^T^k)+E[0]+3936430074&4294967295,P=y+(C<<11&4294967295|C>>>21),C=k+(P^y^T)+E[3]+3572445317&4294967295,k=P+(C<<16&4294967295|C>>>16),C=T+(k^P^y)+E[6]+76029189&4294967295,T=k+(C<<23&4294967295|C>>>9),C=y+(T^k^P)+E[9]+3654602809&4294967295,y=T+(C<<4&4294967295|C>>>28),C=P+(y^T^k)+E[12]+3873151461&4294967295,P=y+(C<<11&4294967295|C>>>21),C=k+(P^y^T)+E[15]+530742520&4294967295,k=P+(C<<16&4294967295|C>>>16),C=T+(k^P^y)+E[2]+3299628645&4294967295,T=k+(C<<23&4294967295|C>>>9),C=y+(k^(T|~P))+E[0]+4096336452&4294967295,y=T+(C<<6&4294967295|C>>>26),C=P+(T^(y|~k))+E[7]+1126891415&4294967295,P=y+(C<<10&4294967295|C>>>22),C=k+(y^(P|~T))+E[14]+2878612391&4294967295,k=P+(C<<15&4294967295|C>>>17),C=T+(P^(k|~y))+E[5]+4237533241&4294967295,T=k+(C<<21&4294967295|C>>>11),C=y+(k^(T|~P))+E[12]+1700485571&4294967295,y=T+(C<<6&4294967295|C>>>26),C=P+(T^(y|~k))+E[3]+2399980690&4294967295,P=y+(C<<10&4294967295|C>>>22),C=k+(y^(P|~T))+E[10]+4293915773&4294967295,k=P+(C<<15&4294967295|C>>>17),C=T+(P^(k|~y))+E[1]+2240044497&4294967295,T=k+(C<<21&4294967295|C>>>11),C=y+(k^(T|~P))+E[8]+1873313359&4294967295,y=T+(C<<6&4294967295|C>>>26),C=P+(T^(y|~k))+E[15]+4264355552&4294967295,P=y+(C<<10&4294967295|C>>>22),C=k+(y^(P|~T))+E[6]+2734768916&4294967295,k=P+(C<<15&4294967295|C>>>17),C=T+(P^(k|~y))+E[13]+1309151649&4294967295,T=k+(C<<21&4294967295|C>>>11),C=y+(k^(T|~P))+E[4]+4149444226&4294967295,y=T+(C<<6&4294967295|C>>>26),C=P+(T^(y|~k))+E[11]+3174756917&4294967295,P=y+(C<<10&4294967295|C>>>22),C=k+(y^(P|~T))+E[2]+718787259&4294967295,k=P+(C<<15&4294967295|C>>>17),C=T+(P^(k|~y))+E[9]+3951481745&4294967295,_.g[0]=_.g[0]+y&4294967295,_.g[1]=_.g[1]+(k+(C<<21&4294967295|C>>>11))&4294967295,_.g[2]=_.g[2]+k&4294967295,_.g[3]=_.g[3]+P&4294967295}r.prototype.v=function(_,y){y===void 0&&(y=_.length);const T=y-this.blockSize,E=this.C;let k=this.h,P=0;for(;P<y;){if(k==0)for(;P<=T;)s(this,_,P),P+=this.blockSize;if(typeof _=="string"){for(;P<y;)if(E[k++]=_.charCodeAt(P++),k==this.blockSize){s(this,E),k=0;break}}else for(;P<y;)if(E[k++]=_[P++],k==this.blockSize){s(this,E),k=0;break}}this.h=k,this.o+=y},r.prototype.A=function(){var _=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);_[0]=128;for(var y=1;y<_.length-8;++y)_[y]=0;y=this.o*8;for(var T=_.length-8;T<_.length;++T)_[T]=y&255,y/=256;for(this.v(_),_=Array(16),y=0,T=0;T<4;++T)for(let E=0;E<32;E+=8)_[y++]=this.g[T]>>>E&255;return _};function i(_,y){var T=l;return Object.prototype.hasOwnProperty.call(T,_)?T[_]:T[_]=y(_)}function o(_,y){this.h=y;const T=[];let E=!0;for(let k=_.length-1;k>=0;k--){const P=_[k]|0;E&&P==y||(T[k]=P,E=!1)}this.g=T}var l={};function u(_){return-128<=_&&_<128?i(_,function(y){return new o([y|0],y<0?-1:0)}):new o([_|0],_<0?-1:0)}function h(_){if(isNaN(_)||!isFinite(_))return g;if(_<0)return b(h(-_));const y=[];let T=1;for(let E=0;_>=T;E++)y[E]=_/T|0,T*=4294967296;return new o(y,0)}function f(_,y){if(_.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(_.charAt(0)=="-")return b(f(_.substring(1),y));if(_.indexOf("-")>=0)throw Error('number format error: interior "-" character');const T=h(Math.pow(y,8));let E=g;for(let P=0;P<_.length;P+=8){var k=Math.min(8,_.length-P);const C=parseInt(_.substring(P,P+k),y);k<8?(k=h(Math.pow(y,k)),E=E.j(k).add(h(C))):(E=E.j(T),E=E.add(h(C)))}return E}var g=u(0),m=u(1),w=u(16777216);t=o.prototype,t.m=function(){if(R(this))return-b(this).m();let _=0,y=1;for(let T=0;T<this.g.length;T++){const E=this.i(T);_+=(E>=0?E:4294967296+E)*y,y*=4294967296}return _},t.toString=function(_){if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(x(this))return"0";if(R(this))return"-"+b(this).toString(_);const y=h(Math.pow(_,6));var T=this;let E="";for(;;){const k=D(T,y).g;T=S(T,k.j(y));let P=((T.g.length>0?T.g[0]:T.h)>>>0).toString(_);if(T=k,x(T))return P+E;for(;P.length<6;)P="0"+P;E=P+E}},t.i=function(_){return _<0?0:_<this.g.length?this.g[_]:this.h};function x(_){if(_.h!=0)return!1;for(let y=0;y<_.g.length;y++)if(_.g[y]!=0)return!1;return!0}function R(_){return _.h==-1}t.l=function(_){return _=S(this,_),R(_)?-1:x(_)?0:1};function b(_){const y=_.g.length,T=[];for(let E=0;E<y;E++)T[E]=~_.g[E];return new o(T,~_.h).add(m)}t.abs=function(){return R(this)?b(this):this},t.add=function(_){const y=Math.max(this.g.length,_.g.length),T=[];let E=0;for(let k=0;k<=y;k++){let P=E+(this.i(k)&65535)+(_.i(k)&65535),C=(P>>>16)+(this.i(k)>>>16)+(_.i(k)>>>16);E=C>>>16,P&=65535,C&=65535,T[k]=C<<16|P}return new o(T,T[T.length-1]&-2147483648?-1:0)};function S(_,y){return _.add(b(y))}t.j=function(_){if(x(this)||x(_))return g;if(R(this))return R(_)?b(this).j(b(_)):b(b(this).j(_));if(R(_))return b(this.j(b(_)));if(this.l(w)<0&&_.l(w)<0)return h(this.m()*_.m());const y=this.g.length+_.g.length,T=[];for(var E=0;E<2*y;E++)T[E]=0;for(E=0;E<this.g.length;E++)for(let k=0;k<_.g.length;k++){const P=this.i(E)>>>16,C=this.i(E)&65535,se=_.i(k)>>>16,Pe=_.i(k)&65535;T[2*E+2*k]+=C*Pe,I(T,2*E+2*k),T[2*E+2*k+1]+=P*Pe,I(T,2*E+2*k+1),T[2*E+2*k+1]+=C*se,I(T,2*E+2*k+1),T[2*E+2*k+2]+=P*se,I(T,2*E+2*k+2)}for(_=0;_<y;_++)T[_]=T[2*_+1]<<16|T[2*_];for(_=y;_<2*y;_++)T[_]=0;return new o(T,0)};function I(_,y){for(;(_[y]&65535)!=_[y];)_[y+1]+=_[y]>>>16,_[y]&=65535,y++}function A(_,y){this.g=_,this.h=y}function D(_,y){if(x(y))throw Error("division by zero");if(x(_))return new A(g,g);if(R(_))return y=D(b(_),y),new A(b(y.g),b(y.h));if(R(y))return y=D(_,b(y)),new A(b(y.g),y.h);if(_.g.length>30){if(R(_)||R(y))throw Error("slowDivide_ only works with positive integers.");for(var T=m,E=y;E.l(_)<=0;)T=N(T),E=N(E);var k=V(T,1),P=V(E,1);for(E=V(E,2),T=V(T,2);!x(E);){var C=P.add(E);C.l(_)<=0&&(k=k.add(T),P=C),E=V(E,1),T=V(T,1)}return y=S(_,k.j(y)),new A(k,y)}for(k=g;_.l(y)>=0;){for(T=Math.max(1,Math.floor(_.m()/y.m())),E=Math.ceil(Math.log(T)/Math.LN2),E=E<=48?1:Math.pow(2,E-48),P=h(T),C=P.j(y);R(C)||C.l(_)>0;)T-=E,P=h(T),C=P.j(y);x(P)&&(P=m),k=k.add(P),_=S(_,C)}return new A(k,_)}t.B=function(_){return D(this,_).h},t.and=function(_){const y=Math.max(this.g.length,_.g.length),T=[];for(let E=0;E<y;E++)T[E]=this.i(E)&_.i(E);return new o(T,this.h&_.h)},t.or=function(_){const y=Math.max(this.g.length,_.g.length),T=[];for(let E=0;E<y;E++)T[E]=this.i(E)|_.i(E);return new o(T,this.h|_.h)},t.xor=function(_){const y=Math.max(this.g.length,_.g.length),T=[];for(let E=0;E<y;E++)T[E]=this.i(E)^_.i(E);return new o(T,this.h^_.h)};function N(_){const y=_.g.length+1,T=[];for(let E=0;E<y;E++)T[E]=_.i(E)<<1|_.i(E-1)>>>31;return new o(T,_.h)}function V(_,y){const T=y>>5;y%=32;const E=_.g.length-T,k=[];for(let P=0;P<E;P++)k[P]=y>0?_.i(P+T)>>>y|_.i(P+T+1)<<32-y:_.i(P+T);return new o(k,_.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,SE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Rr=o}).apply(typeof vy<"u"?vy:typeof self<"u"?self:typeof window<"u"?window:{});var cl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xE,go,kE,bl,Nd,AE,CE,NE;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof cl=="object"&&cl];for(var d=0;d<a.length;++d){var p=a[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,d){if(d)e:{var p=r;a=a.split(".");for(var v=0;v<a.length-1;v++){var j=a[v];if(!(j in p))break e;p=p[j]}a=a[a.length-1],v=p[a],d=d(v),d!=v&&d!=null&&e(p,a,{configurable:!0,writable:!0,value:d})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(d){var p=[],v;for(v in d)Object.prototype.hasOwnProperty.call(d,v)&&p.push([v,d[v]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function u(a,d,p){return a.call.apply(a.bind,arguments)}function h(a,d,p){return h=u,h.apply(null,arguments)}function f(a,d){var p=Array.prototype.slice.call(arguments,1);return function(){var v=p.slice();return v.push.apply(v,arguments),a.apply(this,v)}}function g(a,d){function p(){}p.prototype=d.prototype,a.Z=d.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(v,j,L){for(var $=Array(arguments.length-2),ne=2;ne<arguments.length;ne++)$[ne-2]=arguments[ne];return d.prototype[j].apply(v,$)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function w(a){const d=a.length;if(d>0){const p=Array(d);for(let v=0;v<d;v++)p[v]=a[v];return p}return[]}function x(a,d){for(let v=1;v<arguments.length;v++){const j=arguments[v];var p=typeof j;if(p=p!="object"?p:j?Array.isArray(j)?"array":p:"null",p=="array"||p=="object"&&typeof j.length=="number"){p=a.length||0;const L=j.length||0;a.length=p+L;for(let $=0;$<L;$++)a[p+$]=j[$]}else a.push(j)}}class R{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return this.h>0?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function b(a){o.setTimeout(()=>{throw a},0)}function S(){var a=_;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class I{constructor(){this.h=this.g=null}add(d,p){const v=A.get();v.set(d,p),this.h?this.h.next=v:this.g=v,this.h=v}}var A=new R(()=>new D,a=>a.reset());class D{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let N,V=!1,_=new I,y=()=>{const a=Promise.resolve(void 0);N=()=>{a.then(T)}};function T(){for(var a;a=S();){try{a.h.call(a.g)}catch(p){b(p)}var d=A;d.j(a),d.h<100&&(d.h++,a.next=d.g,d.g=a)}V=!1}function E(){this.u=this.u,this.C=this.C}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function k(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}k.prototype.h=function(){this.defaultPrevented=!0};var P=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,d),o.removeEventListener("test",p,d)}catch{}return a}();function C(a){return/^[\s\xa0]*$/.test(a)}function se(a,d){k.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,d)}g(se,k),se.prototype.init=function(a,d){const p=this.type=a.type,v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget,d||(p=="mouseover"?d=a.fromElement:p=="mouseout"&&(d=a.toElement)),this.relatedTarget=d,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&se.Z.h.call(this)},se.prototype.h=function(){se.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Pe="closure_listenable_"+(Math.random()*1e6|0),mt=0;function qt(a,d,p,v,j){this.listener=a,this.proxy=null,this.src=d,this.type=p,this.capture=!!v,this.ha=j,this.key=++mt,this.da=this.fa=!1}function H(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Q(a,d,p){for(const v in a)d.call(p,a[v],v,a)}function Z(a,d){for(const p in a)d.call(void 0,a[p],p,a)}function he(a){const d={};for(const p in a)d[p]=a[p];return d}const z="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function de(a,d){let p,v;for(let j=1;j<arguments.length;j++){v=arguments[j];for(p in v)a[p]=v[p];for(let L=0;L<z.length;L++)p=z[L],Object.prototype.hasOwnProperty.call(v,p)&&(a[p]=v[p])}}function U(a){this.src=a,this.g={},this.h=0}U.prototype.add=function(a,d,p,v,j){const L=a.toString();a=this.g[L],a||(a=this.g[L]=[],this.h++);const $=ve(a,d,v,j);return $>-1?(d=a[$],p||(d.fa=!1)):(d=new qt(d,this.src,L,!!v,j),d.fa=p,a.push(d)),d};function fe(a,d){const p=d.type;if(p in a.g){var v=a.g[p],j=Array.prototype.indexOf.call(v,d,void 0),L;(L=j>=0)&&Array.prototype.splice.call(v,j,1),L&&(H(d),a.g[p].length==0&&(delete a.g[p],a.h--))}}function ve(a,d,p,v){for(let j=0;j<a.length;++j){const L=a[j];if(!L.da&&L.listener==d&&L.capture==!!p&&L.ha==v)return j}return-1}var Me="closure_lm_"+(Math.random()*1e6|0),Dt={};function ja(a,d,p,v,j){if(Array.isArray(d)){for(let L=0;L<d.length;L++)ja(a,d[L],p,v,j);return null}return p=tm(p),a&&a[Pe]?a.J(d,p,l(v)?!!v.capture:!1,j):cT(a,d,p,!1,v,j)}function cT(a,d,p,v,j,L){if(!d)throw Error("Invalid event type");const $=l(j)?!!j.capture:!!j;let ne=Iu(a);if(ne||(a[Me]=ne=new U(a)),p=ne.add(d,p,v,$,L),p.proxy)return p;if(v=uT(),p.proxy=v,v.src=a,v.listener=p,a.addEventListener)P||(j=$),j===void 0&&(j=!1),a.addEventListener(d.toString(),v,j);else if(a.attachEvent)a.attachEvent(em(d.toString()),v);else if(a.addListener&&a.removeListener)a.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return p}function uT(){function a(p){return d.call(a.src,a.listener,p)}const d=hT;return a}function Zp(a,d,p,v,j){if(Array.isArray(d))for(var L=0;L<d.length;L++)Zp(a,d[L],p,v,j);else v=l(v)?!!v.capture:!!v,p=tm(p),a&&a[Pe]?(a=a.i,L=String(d).toString(),L in a.g&&(d=a.g[L],p=ve(d,p,v,j),p>-1&&(H(d[p]),Array.prototype.splice.call(d,p,1),d.length==0&&(delete a.g[L],a.h--)))):a&&(a=Iu(a))&&(d=a.g[d.toString()],a=-1,d&&(a=ve(d,p,v,j)),(p=a>-1?d[a]:null)&&Tu(p))}function Tu(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[Pe])fe(d.i,a);else{var p=a.type,v=a.proxy;d.removeEventListener?d.removeEventListener(p,v,a.capture):d.detachEvent?d.detachEvent(em(p),v):d.addListener&&d.removeListener&&d.removeListener(v),(p=Iu(d))?(fe(p,a),p.h==0&&(p.src=null,d[Me]=null)):H(a)}}}function em(a){return a in Dt?Dt[a]:Dt[a]="on"+a}function hT(a,d){if(a.da)a=!0;else{d=new se(d,this);const p=a.listener,v=a.ha||a.src;a.fa&&Tu(a),a=p.call(v,d)}return a}function Iu(a){return a=a[Me],a instanceof U?a:null}var Su="__closure_events_fn_"+(Math.random()*1e9>>>0);function tm(a){return typeof a=="function"?a:(a[Su]||(a[Su]=function(d){return a.handleEvent(d)}),a[Su])}function ot(){E.call(this),this.i=new U(this),this.M=this,this.G=null}g(ot,E),ot.prototype[Pe]=!0,ot.prototype.removeEventListener=function(a,d,p,v){Zp(this,a,d,p,v)};function gt(a,d){var p,v=a.G;if(v)for(p=[];v;v=v.G)p.push(v);if(a=a.M,v=d.type||d,typeof d=="string")d=new k(d,a);else if(d instanceof k)d.target=d.target||a;else{var j=d;d=new k(v,a),de(d,j)}j=!0;let L,$;if(p)for($=p.length-1;$>=0;$--)L=d.g=p[$],j=Da(L,v,!0,d)&&j;if(L=d.g=a,j=Da(L,v,!0,d)&&j,j=Da(L,v,!1,d)&&j,p)for($=0;$<p.length;$++)L=d.g=p[$],j=Da(L,v,!1,d)&&j}ot.prototype.N=function(){if(ot.Z.N.call(this),this.i){var a=this.i;for(const d in a.g){const p=a.g[d];for(let v=0;v<p.length;v++)H(p[v]);delete a.g[d],a.h--}}this.G=null},ot.prototype.J=function(a,d,p,v){return this.i.add(String(a),d,!1,p,v)},ot.prototype.K=function(a,d,p,v){return this.i.add(String(a),d,!0,p,v)};function Da(a,d,p,v){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();let j=!0;for(let L=0;L<d.length;++L){const $=d[L];if($&&!$.da&&$.capture==p){const ne=$.listener,He=$.ha||$.src;$.fa&&fe(a.i,$),j=ne.call(He,v)!==!1&&j}}return j&&!v.defaultPrevented}function dT(a,d){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(d)>2147483647?-1:o.setTimeout(a,d||0)}function nm(a){a.g=dT(()=>{a.g=null,a.i&&(a.i=!1,nm(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class fT extends E{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:nm(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fi(a){E.call(this),this.h=a,this.g={}}g(Fi,E);var rm=[];function sm(a){Q(a.g,function(d,p){this.g.hasOwnProperty(p)&&Tu(d)},a),a.g={}}Fi.prototype.N=function(){Fi.Z.N.call(this),sm(this)},Fi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var xu=o.JSON.stringify,pT=o.JSON.parse,mT=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function im(){}function om(){}var Ui={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ku(){k.call(this,"d")}g(ku,k);function Au(){k.call(this,"c")}g(Au,k);var Kr={},am=null;function Va(){return am=am||new ot}Kr.Ia="serverreachability";function lm(a){k.call(this,Kr.Ia,a)}g(lm,k);function zi(a){const d=Va();gt(d,new lm(d))}Kr.STAT_EVENT="statevent";function cm(a,d){k.call(this,Kr.STAT_EVENT,a),this.stat=d}g(cm,k);function yt(a){const d=Va();gt(d,new cm(d,a))}Kr.Ja="timingevent";function um(a,d){k.call(this,Kr.Ja,a),this.size=d}g(um,k);function Bi(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},d)}function $i(){this.g=!0}$i.prototype.ua=function(){this.g=!1};function gT(a,d,p,v,j,L){a.info(function(){if(a.g)if(L){var $="",ne=L.split("&");for(let me=0;me<ne.length;me++){var He=ne[me].split("=");if(He.length>1){const Qe=He[0];He=He[1];const pn=Qe.split("_");$=pn.length>=2&&pn[1]=="type"?$+(Qe+"="+He+"&"):$+(Qe+"=redacted&")}}}else $=null;else $=L;return"XMLHTTP REQ ("+v+") [attempt "+j+"]: "+d+`
`+p+`
`+$})}function yT(a,d,p,v,j,L,$){a.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+j+"]: "+d+`
`+p+`
`+L+" "+$})}function bs(a,d,p,v){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+vT(a,p)+(v?" "+v:"")})}function _T(a,d){a.info(function(){return"TIMEOUT: "+d})}$i.prototype.info=function(){};function vT(a,d){if(!a.g)return d;if(!d)return null;try{const L=JSON.parse(d);if(L){for(a=0;a<L.length;a++)if(Array.isArray(L[a])){var p=L[a];if(!(p.length<2)){var v=p[1];if(Array.isArray(v)&&!(v.length<1)){var j=v[0];if(j!="noop"&&j!="stop"&&j!="close")for(let $=1;$<v.length;$++)v[$]=""}}}}return xu(L)}catch{return d}}var La={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},hm={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},dm;function Cu(){}g(Cu,im),Cu.prototype.g=function(){return new XMLHttpRequest},dm=new Cu;function Hi(a){return encodeURIComponent(String(a))}function wT(a){var d=1;a=a.split(":");const p=[];for(;d>0&&a.length;)p.push(a.shift()),d--;return a.length&&p.push(a.join(":")),p}function tr(a,d,p,v){this.j=a,this.i=d,this.l=p,this.S=v||1,this.V=new Fi(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new fm}function fm(){this.i=null,this.g="",this.h=!1}var pm={},Nu={};function Ru(a,d,p){a.M=1,a.A=Ma(fn(d)),a.u=p,a.R=!0,mm(a,null)}function mm(a,d){a.F=Date.now(),Oa(a),a.B=fn(a.A);var p=a.B,v=a.S;Array.isArray(v)||(v=[String(v)]),Cm(p.i,"t",v),a.C=0,p=a.j.L,a.h=new fm,a.g=Wm(a.j,p?d:null,!a.u),a.P>0&&(a.O=new fT(h(a.Y,a,a.g),a.P)),d=a.V,p=a.g,v=a.ba;var j="readystatechange";Array.isArray(j)||(j&&(rm[0]=j.toString()),j=rm);for(let L=0;L<j.length;L++){const $=ja(p,j[L],v||d.handleEvent,!1,d.h||d);if(!$)break;d.g[$.key]=$}d=a.J?he(a.J):{},a.u?(a.v||(a.v="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,d)):(a.v="GET",a.g.ea(a.B,a.v,null,d)),zi(),gT(a.i,a.v,a.B,a.l,a.S,a.u)}tr.prototype.ba=function(a){a=a.target;const d=this.O;d&&sr(a)==3?d.j():this.Y(a)},tr.prototype.Y=function(a){try{if(a==this.g)e:{const ne=sr(this.g),He=this.g.ya(),me=this.g.ca();if(!(ne<3)&&(ne!=3||this.g&&(this.h.h||this.g.la()||Vm(this.g)))){this.K||ne!=4||He==7||(He==8||me<=0?zi(3):zi(2)),Pu(this);var d=this.g.ca();this.X=d;var p=ET(this);if(this.o=d==200,yT(this.i,this.v,this.B,this.l,this.S,ne,d),this.o){if(this.U&&!this.L){t:{if(this.g){var v,j=this.g;if((v=j.g?j.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(v)){var L=v;break t}}L=null}if(a=L)bs(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,bu(this,a);else{this.o=!1,this.m=3,yt(12),Qr(this),qi(this);break e}}if(this.R){a=!0;let Qe;for(;!this.K&&this.C<p.length;)if(Qe=TT(this,p),Qe==Nu){ne==4&&(this.m=4,yt(14),a=!1),bs(this.i,this.l,null,"[Incomplete Response]");break}else if(Qe==pm){this.m=4,yt(15),bs(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else bs(this.i,this.l,Qe,null),bu(this,Qe);if(gm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ne!=4||p.length!=0||this.h.h||(this.m=1,yt(16),a=!1),this.o=this.o&&a,!a)bs(this.i,this.l,p,"[Invalid Chunked Response]"),Qr(this),qi(this);else if(p.length>0&&!this.W){this.W=!0;var $=this.j;$.g==this&&$.aa&&!$.P&&($.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),Uu($),$.P=!0,yt(11))}}else bs(this.i,this.l,p,null),bu(this,p);ne==4&&Qr(this),this.o&&!this.K&&(ne==4?Bm(this.j,this):(this.o=!1,Oa(this)))}else LT(this.g),d==400&&p.indexOf("Unknown SID")>0?(this.m=3,yt(12)):(this.m=0,yt(13)),Qr(this),qi(this)}}}catch{}finally{}};function ET(a){if(!gm(a))return a.g.la();const d=Vm(a.g);if(d==="")return"";let p="";const v=d.length,j=sr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Qr(a),qi(a),"";a.h.i=new o.TextDecoder}for(let L=0;L<v;L++)a.h.h=!0,p+=a.h.i.decode(d[L],{stream:!(j&&L==v-1)});return d.length=0,a.h.g+=p,a.C=0,a.h.g}function gm(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function TT(a,d){var p=a.C,v=d.indexOf(`
`,p);return v==-1?Nu:(p=Number(d.substring(p,v)),isNaN(p)?pm:(v+=1,v+p>d.length?Nu:(d=d.slice(v,v+p),a.C=v+p,d)))}tr.prototype.cancel=function(){this.K=!0,Qr(this)};function Oa(a){a.T=Date.now()+a.H,ym(a,a.H)}function ym(a,d){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Bi(h(a.aa,a),d)}function Pu(a){a.D&&(o.clearTimeout(a.D),a.D=null)}tr.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(_T(this.i,this.B),this.M!=2&&(zi(),yt(17)),Qr(this),this.m=2,qi(this)):ym(this,this.T-a)};function qi(a){a.j.I==0||a.K||Bm(a.j,a)}function Qr(a){Pu(a);var d=a.O;d&&typeof d.dispose=="function"&&d.dispose(),a.O=null,sm(a.V),a.g&&(d=a.g,a.g=null,d.abort(),d.dispose())}function bu(a,d){try{var p=a.j;if(p.I!=0&&(p.g==a||ju(p.h,a))){if(!a.L&&ju(p.h,a)&&p.I==3){try{var v=p.Ba.g.parse(d)}catch{v=null}if(Array.isArray(v)&&v.length==3){var j=v;if(j[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)$a(p),za(p);else break e;Fu(p),yt(18)}}else p.xa=j[1],0<p.xa-p.K&&j[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=Bi(h(p.Va,p),6e3));wm(p.h)<=1&&p.ta&&(p.ta=void 0)}else Xr(p,11)}else if((a.L||p.g==a)&&$a(p),!C(d))for(j=p.Ba.g.parse(d),d=0;d<j.length;d++){let me=j[d];const Qe=me[0];if(!(Qe<=p.K))if(p.K=Qe,me=me[1],p.I==2)if(me[0]=="c"){p.M=me[1],p.ba=me[2];const pn=me[3];pn!=null&&(p.ka=pn,p.j.info("VER="+p.ka));const Jr=me[4];Jr!=null&&(p.za=Jr,p.j.info("SVER="+p.za));const ir=me[5];ir!=null&&typeof ir=="number"&&ir>0&&(v=1.5*ir,p.O=v,p.j.info("backChannelRequestTimeoutMs_="+v)),v=p;const or=a.g;if(or){const qa=or.g?or.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(qa){var L=v.h;L.g||qa.indexOf("spdy")==-1&&qa.indexOf("quic")==-1&&qa.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(Du(L,L.h),L.h=null))}if(v.G){const zu=or.g?or.g.getResponseHeader("X-HTTP-Session-Id"):null;zu&&(v.wa=zu,we(v.J,v.G,zu))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),v=p;var $=a;if(v.na=qm(v,v.L?v.ba:null,v.W),$.L){Em(v.h,$);var ne=$,He=v.O;He&&(ne.H=He),ne.D&&(Pu(ne),Oa(ne)),v.g=$}else Um(v);p.i.length>0&&Ba(p)}else me[0]!="stop"&&me[0]!="close"||Xr(p,7);else p.I==3&&(me[0]=="stop"||me[0]=="close"?me[0]=="stop"?Xr(p,7):Mu(p):me[0]!="noop"&&p.l&&p.l.qa(me),p.A=0)}}zi(4)}catch{}}var IT=class{constructor(a,d){this.g=a,this.map=d}};function _m(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function vm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function wm(a){return a.h?1:a.g?a.g.size:0}function ju(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function Du(a,d){a.g?a.g.add(d):a.h=d}function Em(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}_m.prototype.cancel=function(){if(this.i=Tm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Tm(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const p of a.g.values())d=d.concat(p.G);return d}return w(a.i)}var Im=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ST(a,d){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const v=a[p].indexOf("=");let j,L=null;v>=0?(j=a[p].substring(0,v),L=a[p].substring(v+1)):j=a[p],d(j,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function nr(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let d;a instanceof nr?(this.l=a.l,Wi(this,a.j),this.o=a.o,this.g=a.g,Gi(this,a.u),this.h=a.h,Vu(this,Nm(a.i)),this.m=a.m):a&&(d=String(a).match(Im))?(this.l=!1,Wi(this,d[1]||"",!0),this.o=Ki(d[2]||""),this.g=Ki(d[3]||"",!0),Gi(this,d[4]),this.h=Ki(d[5]||"",!0),Vu(this,d[6]||"",!0),this.m=Ki(d[7]||"")):(this.l=!1,this.i=new Yi(null,this.l))}nr.prototype.toString=function(){const a=[];var d=this.j;d&&a.push(Qi(d,Sm,!0),":");var p=this.g;return(p||d=="file")&&(a.push("//"),(d=this.o)&&a.push(Qi(d,Sm,!0),"@"),a.push(Hi(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Qi(p,p.charAt(0)=="/"?AT:kT,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Qi(p,NT)),a.join("")},nr.prototype.resolve=function(a){const d=fn(this);let p=!!a.j;p?Wi(d,a.j):p=!!a.o,p?d.o=a.o:p=!!a.g,p?d.g=a.g:p=a.u!=null;var v=a.h;if(p)Gi(d,a.u);else if(p=!!a.h){if(v.charAt(0)!="/")if(this.g&&!this.h)v="/"+v;else{var j=d.h.lastIndexOf("/");j!=-1&&(v=d.h.slice(0,j+1)+v)}if(j=v,j==".."||j==".")v="";else if(j.indexOf("./")!=-1||j.indexOf("/.")!=-1){v=j.lastIndexOf("/",0)==0,j=j.split("/");const L=[];for(let $=0;$<j.length;){const ne=j[$++];ne=="."?v&&$==j.length&&L.push(""):ne==".."?((L.length>1||L.length==1&&L[0]!="")&&L.pop(),v&&$==j.length&&L.push("")):(L.push(ne),v=!0)}v=L.join("/")}else v=j}return p?d.h=v:p=a.i.toString()!=="",p?Vu(d,Nm(a.i)):p=!!a.m,p&&(d.m=a.m),d};function fn(a){return new nr(a)}function Wi(a,d,p){a.j=p?Ki(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function Gi(a,d){if(d){if(d=Number(d),isNaN(d)||d<0)throw Error("Bad port number "+d);a.u=d}else a.u=null}function Vu(a,d,p){d instanceof Yi?(a.i=d,RT(a.i,a.l)):(p||(d=Qi(d,CT)),a.i=new Yi(d,a.l))}function we(a,d,p){a.i.set(d,p)}function Ma(a){return we(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Ki(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Qi(a,d,p){return typeof a=="string"?(a=encodeURI(a).replace(d,xT),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function xT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Sm=/[#\/\?@]/g,kT=/[#\?:]/g,AT=/[#\?]/g,CT=/[#\?@]/g,NT=/#/g;function Yi(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function Yr(a){a.g||(a.g=new Map,a.h=0,a.i&&ST(a.i,function(d,p){a.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}t=Yi.prototype,t.add=function(a,d){Yr(this),this.i=null,a=js(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(d),this.h+=1,this};function xm(a,d){Yr(a),d=js(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function km(a,d){return Yr(a),d=js(a,d),a.g.has(d)}t.forEach=function(a,d){Yr(this),this.g.forEach(function(p,v){p.forEach(function(j){a.call(d,j,v,this)},this)},this)};function Am(a,d){Yr(a);let p=[];if(typeof d=="string")km(a,d)&&(p=p.concat(a.g.get(js(a,d))));else for(a=Array.from(a.g.values()),d=0;d<a.length;d++)p=p.concat(a[d]);return p}t.set=function(a,d){return Yr(this),this.i=null,a=js(this,a),km(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=Am(this,a),a.length>0?String(a[0]):d):d};function Cm(a,d,p){xm(a,d),p.length>0&&(a.i=null,a.g.set(js(a,d),w(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(let v=0;v<d.length;v++){var p=d[v];const j=Hi(p);p=Am(this,p);for(let L=0;L<p.length;L++){let $=j;p[L]!==""&&($+="="+Hi(p[L])),a.push($)}}return this.i=a.join("&")};function Nm(a){const d=new Yi;return d.i=a.i,a.g&&(d.g=new Map(a.g),d.h=a.h),d}function js(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function RT(a,d){d&&!a.j&&(Yr(a),a.i=null,a.g.forEach(function(p,v){const j=v.toLowerCase();v!=j&&(xm(this,v),Cm(this,j,p))},a)),a.j=d}function PT(a,d){const p=new $i;if(o.Image){const v=new Image;v.onload=f(rr,p,"TestLoadImage: loaded",!0,d,v),v.onerror=f(rr,p,"TestLoadImage: error",!1,d,v),v.onabort=f(rr,p,"TestLoadImage: abort",!1,d,v),v.ontimeout=f(rr,p,"TestLoadImage: timeout",!1,d,v),o.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=a}else d(!1)}function bT(a,d){const p=new $i,v=new AbortController,j=setTimeout(()=>{v.abort(),rr(p,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:v.signal}).then(L=>{clearTimeout(j),L.ok?rr(p,"TestPingServer: ok",!0,d):rr(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(j),rr(p,"TestPingServer: error",!1,d)})}function rr(a,d,p,v,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),v(p)}catch{}}function jT(){this.g=new mT}function Lu(a){this.i=a.Sb||null,this.h=a.ab||!1}g(Lu,im),Lu.prototype.g=function(){return new Fa(this.i,this.h)};function Fa(a,d){ot.call(this),this.H=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(Fa,ot),t=Fa.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=d,this.readyState=1,Ji(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const d={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(d.body=a),(this.H||o).fetch(new Request(this.D,d)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Xi(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ji(this)),this.g&&(this.readyState=3,Ji(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Rm(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Rm(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.B.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?Xi(this):Ji(this),this.readyState==3&&Rm(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Xi(this))},t.Na=function(a){this.g&&(this.response=a,Xi(this))},t.ga=function(){this.g&&Xi(this)};function Xi(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Ji(a)}t.setRequestHeader=function(a,d){this.A.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=d.next();return a.join(`\r
`)};function Ji(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Fa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Pm(a){let d="";return Q(a,function(p,v){d+=v,d+=":",d+=p,d+=`\r
`}),d}function Ou(a,d,p){e:{for(v in p){var v=!1;break e}v=!0}v||(p=Pm(p),typeof a=="string"?p!=null&&Hi(p):we(a,d,p))}function be(a){ot.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(be,ot);var DT=/^https?$/i,VT=["POST","PUT"];t=be.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,d,p,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():dm.g(),this.g.onreadystatechange=m(h(this.Ca,this));try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(L){bm(this,L);return}if(a=p||"",p=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var j in v)p.set(j,v[j]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const L of v.keys())p.set(L,v.get(L));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(p.keys()).find(L=>L.toLowerCase()=="content-type"),j=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(VT,d,void 0)>=0)||v||j||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,$]of p)this.g.setRequestHeader(L,$);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(L){bm(this,L)}};function bm(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.o=5,jm(a),Ua(a)}function jm(a){a.A||(a.A=!0,gt(a,"complete"),gt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,gt(this,"complete"),gt(this,"abort"),Ua(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ua(this,!0)),be.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Dm(this):this.Xa())},t.Xa=function(){Dm(this)};function Dm(a){if(a.h&&typeof i<"u"){if(a.v&&sr(a)==4)setTimeout(a.Ca.bind(a),0);else if(gt(a,"readystatechange"),sr(a)==4){a.h=!1;try{const L=a.ca();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var v;if(v=L===0){let $=String(a.D).match(Im)[1]||null;!$&&o.self&&o.self.location&&($=o.self.location.protocol.slice(0,-1)),v=!DT.test($?$.toLowerCase():"")}p=v}if(p)gt(a,"complete"),gt(a,"success");else{a.o=6;try{var j=sr(a)>2?a.g.statusText:""}catch{j=""}a.l=j+" ["+a.ca()+"]",jm(a)}}finally{Ua(a)}}}}function Ua(a,d){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,d||gt(a,"ready");try{p.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function sr(a){return a.g?a.g.readyState:0}t.ca=function(){try{return sr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),pT(d)}};function Vm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function LT(a){const d={};a=(a.g&&sr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<a.length;v++){if(C(a[v]))continue;var p=wT(a[v]);const j=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const L=d[j]||[];d[j]=L,L.push(p)}Z(d,function(v){return v.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zi(a,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||d}function Lm(a){this.za=0,this.i=[],this.j=new $i,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Zi("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Zi("baseRetryDelayMs",5e3,a),this.Za=Zi("retryDelaySeedMs",1e4,a),this.Ta=Zi("forwardChannelMaxRetries",2,a),this.va=Zi("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new _m(a&&a.concurrentRequestLimit),this.Ba=new jT,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Lm.prototype,t.ka=8,t.I=1,t.connect=function(a,d,p,v){yt(0),this.W=a,this.H=d||{},p&&v!==void 0&&(this.H.OSID=p,this.H.OAID=v),this.F=this.X,this.J=qm(this,null,this.W),Ba(this)};function Mu(a){if(Om(a),a.I==3){var d=a.V++,p=fn(a.J);if(we(p,"SID",a.M),we(p,"RID",d),we(p,"TYPE","terminate"),eo(a,p),d=new tr(a,a.j,d),d.M=2,d.A=Ma(fn(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(d.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=d.A,p=!0),p||(d.g=Wm(d.j,null),d.g.ea(d.A)),d.F=Date.now(),Oa(d)}Hm(a)}function za(a){a.g&&(Uu(a),a.g.cancel(),a.g=null)}function Om(a){za(a),a.v&&(o.clearTimeout(a.v),a.v=null),$a(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Ba(a){if(!vm(a.h)&&!a.m){a.m=!0;var d=a.Ea;N||y(),V||(N(),V=!0),_.add(d,a),a.D=0}}function OT(a,d){return wm(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=d.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Bi(h(a.Ea,a,d),$m(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const j=new tr(this,this.j,a);let L=this.o;if(this.U&&(L?(L=he(L),de(L,this.U)):L=this.U),this.u!==null||this.R||(j.J=L,L=null),this.S)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var v=this.i[p];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(d+=v,d>4096){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=Fm(this,j,d),p=fn(this.J),we(p,"RID",a),we(p,"CVER",22),this.G&&we(p,"X-HTTP-Session-Id",this.G),eo(this,p),L&&(this.R?d="headers="+Hi(Pm(L))+"&"+d:this.u&&Ou(p,this.u,L)),Du(this.h,j),this.Ra&&we(p,"TYPE","init"),this.S?(we(p,"$req",d),we(p,"SID","null"),j.U=!0,Ru(j,p,null)):Ru(j,p,d),this.I=2}}else this.I==3&&(a?Mm(this,a):this.i.length==0||vm(this.h)||Mm(this))};function Mm(a,d){var p;d?p=d.l:p=a.V++;const v=fn(a.J);we(v,"SID",a.M),we(v,"RID",p),we(v,"AID",a.K),eo(a,v),a.u&&a.o&&Ou(v,a.u,a.o),p=new tr(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),d&&(a.i=d.G.concat(a.i)),d=Fm(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Du(a.h,p),Ru(p,v,d)}function eo(a,d){a.H&&Q(a.H,function(p,v){we(d,v,p)}),a.l&&Q({},function(p,v){we(d,v,p)})}function Fm(a,d,p){p=Math.min(a.i.length,p);const v=a.l?h(a.l.Ka,a.l,a):null;e:{var j=a.i;let ne=-1;for(;;){const He=["count="+p];ne==-1?p>0?(ne=j[0].g,He.push("ofs="+ne)):ne=0:He.push("ofs="+ne);let me=!0;for(let Qe=0;Qe<p;Qe++){var L=j[Qe].g;const pn=j[Qe].map;if(L-=ne,L<0)ne=Math.max(0,j[Qe].g-100),me=!1;else try{L="req"+L+"_"||"";try{var $=pn instanceof Map?pn:Object.entries(pn);for(const[Jr,ir]of $){let or=ir;l(ir)&&(or=xu(ir)),He.push(L+Jr+"="+encodeURIComponent(or))}}catch(Jr){throw He.push(L+"type="+encodeURIComponent("_badmap")),Jr}}catch{v&&v(pn)}}if(me){$=He.join("&");break e}}$=void 0}return a=a.i.splice(0,p),d.G=a,$}function Um(a){if(!a.g&&!a.v){a.Y=1;var d=a.Da;N||y(),V||(N(),V=!0),_.add(d,a),a.A=0}}function Fu(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Bi(h(a.Da,a),$m(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,zm(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Bi(h(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,yt(10),za(this),zm(this))};function Uu(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function zm(a){a.g=new tr(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var d=fn(a.na);we(d,"RID","rpc"),we(d,"SID",a.M),we(d,"AID",a.K),we(d,"CI",a.F?"0":"1"),!a.F&&a.ia&&we(d,"TO",a.ia),we(d,"TYPE","xmlhttp"),eo(a,d),a.u&&a.o&&Ou(d,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=Ma(fn(d)),p.u=null,p.R=!0,mm(p,a)}t.Va=function(){this.C!=null&&(this.C=null,za(this),Fu(this),yt(19))};function $a(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Bm(a,d){var p=null;if(a.g==d){$a(a),Uu(a),a.g=null;var v=2}else if(ju(a.h,d))p=d.G,Em(a.h,d),v=1;else return;if(a.I!=0){if(d.o)if(v==1){p=d.u?d.u.length:0,d=Date.now()-d.F;var j=a.D;v=Va(),gt(v,new um(v,p)),Ba(a)}else Um(a);else if(j=d.m,j==3||j==0&&d.X>0||!(v==1&&OT(a,d)||v==2&&Fu(a)))switch(p&&p.length>0&&(d=a.h,d.i=d.i.concat(p)),j){case 1:Xr(a,5);break;case 4:Xr(a,10);break;case 3:Xr(a,6);break;default:Xr(a,2)}}}function $m(a,d){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*d}function Xr(a,d){if(a.j.info("Error code "+d),d==2){var p=h(a.bb,a),v=a.Ua;const j=!v;v=new nr(v||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Wi(v,"https"),Ma(v),j?PT(v.toString(),p):bT(v.toString(),p)}else yt(2);a.I=0,a.l&&a.l.pa(d),Hm(a),Om(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function Hm(a){if(a.I=0,a.ja=[],a.l){const d=Tm(a.h);(d.length!=0||a.i.length!=0)&&(x(a.ja,d),x(a.ja,a.i),a.h.i.length=0,w(a.i),a.i.length=0),a.l.oa()}}function qm(a,d,p){var v=p instanceof nr?fn(p):new nr(p);if(v.g!="")d&&(v.g=d+"."+v.g),Gi(v,v.u);else{var j=o.location;v=j.protocol,d=d?d+"."+j.hostname:j.hostname,j=+j.port;const L=new nr(null);v&&Wi(L,v),d&&(L.g=d),j&&Gi(L,j),p&&(L.h=p),v=L}return p=a.G,d=a.wa,p&&d&&we(v,p,d),we(v,"VER",a.ka),eo(a,v),v}function Wm(a,d,p){if(d&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Aa&&!a.ma?new be(new Lu({ab:p})):new be(a.ma),d.Fa(a.L),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Gm(){}t=Gm.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Ha(){}Ha.prototype.g=function(a,d){return new Vt(a,d)};function Vt(a,d){ot.call(this),this.g=new Lm(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.sa&&(a?a["X-WebChannel-Client-Profile"]=d.sa:a={"X-WebChannel-Client-Profile":d.sa}),this.g.U=a,(a=d&&d.Qb)&&!C(a)&&(this.g.u=a),this.A=d&&d.supportsCrossDomainXhr||!1,this.v=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!C(d)&&(this.g.G=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new Ds(this)}g(Vt,ot),Vt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Vt.prototype.close=function(){Mu(this.g)},Vt.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=xu(a),a=p);d.i.push(new IT(d.Ya++,a)),d.I==3&&Ba(d)},Vt.prototype.N=function(){this.g.l=null,delete this.j,Mu(this.g),delete this.g,Vt.Z.N.call(this)};function Km(a){ku.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const p in d){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}g(Km,ku);function Qm(){Au.call(this),this.status=1}g(Qm,Au);function Ds(a){this.g=a}g(Ds,Gm),Ds.prototype.ra=function(){gt(this.g,"a")},Ds.prototype.qa=function(a){gt(this.g,new Km(a))},Ds.prototype.pa=function(a){gt(this.g,new Qm)},Ds.prototype.oa=function(){gt(this.g,"b")},Ha.prototype.createWebChannel=Ha.prototype.g,Vt.prototype.send=Vt.prototype.o,Vt.prototype.open=Vt.prototype.m,Vt.prototype.close=Vt.prototype.close,NE=function(){return new Ha},CE=function(){return Va()},AE=Kr,Nd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},La.NO_ERROR=0,La.TIMEOUT=8,La.HTTP_ERROR=6,bl=La,hm.COMPLETE="complete",kE=hm,om.EventType=Ui,Ui.OPEN="a",Ui.CLOSE="b",Ui.ERROR="c",Ui.MESSAGE="d",ot.prototype.listen=ot.prototype.J,go=om,be.prototype.listenOnce=be.prototype.K,be.prototype.getLastError=be.prototype.Ha,be.prototype.getLastErrorCode=be.prototype.ya,be.prototype.getStatus=be.prototype.ca,be.prototype.getResponseJson=be.prototype.La,be.prototype.getResponseText=be.prototype.la,be.prototype.send=be.prototype.ea,be.prototype.setWithCredentials=be.prototype.Fa,xE=be}).apply(typeof cl<"u"?cl:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
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
 */let Ri="12.8.0";function _A(t){Ri=t}/**
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
 */const vs=new Jf("@firebase/firestore");function Ls(){return vs.logLevel}function W(t,...e){if(vs.logLevel<=ie.DEBUG){const n=e.map(tp);vs.debug(`Firestore (${Ri}): ${t}`,...n)}}function Kn(t,...e){if(vs.logLevel<=ie.ERROR){const n=e.map(tp);vs.error(`Firestore (${Ri}): ${t}`,...n)}}function vi(t,...e){if(vs.logLevel<=ie.WARN){const n=e.map(tp);vs.warn(`Firestore (${Ri}): ${t}`,...n)}}function tp(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function Y(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,RE(t,r,n)}function RE(t,e,n){let r=`FIRESTORE (${Ri}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Kn(r),new Error(r)}function ue(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||RE(e,s,r)}function te(t,e){return t}/**
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
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Rn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Bn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class PE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class vA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ut.UNAUTHENTICATED))}shutdown(){}}class wA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class EA{constructor(e){this.t=e,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ue(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Bn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Bn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Bn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ue(typeof r.accessToken=="string",31837,{l:r}),new PE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ue(e===null||typeof e=="string",2055,{h:e}),new ut(e)}}class TA{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ut.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class IA{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new TA(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class wy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class SA{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Kt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ue(this.o===void 0,3512);const r=i=>{i.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new wy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ue(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new wy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function xA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class np{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=xA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function oe(t,e){return t<e?-1:t>e?1:0}function Rd(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return wh(s)===wh(i)?oe(s,i):wh(s)?1:-1}return oe(t.length,e.length)}const kA=55296,AA=57343;function wh(t){const e=t.charCodeAt(0);return e>=kA&&e<=AA}function wi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const Ey="__name__";class yn{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Y(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return yn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof yn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=yn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return oe(e.length,n.length)}static compareSegments(e,n){const r=yn.isNumericId(e),s=yn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?yn.extractNumericId(e).compare(yn.extractNumericId(n)):Rd(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Rr.fromString(e.substring(4,e.length-2))}}class ye extends yn{construct(e,n,r){return new ye(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new ye(n)}static emptyPath(){return new ye([])}}const CA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends yn{construct(e,n,r){return new nt(e,n,r)}static isValidIdentifier(e){return CA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ey}static keyField(){return new nt([Ey])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new q(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new q(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new q(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nt(n)}static emptyPath(){return new nt([])}}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(ye.fromString(e))}static fromName(e){return new K(ye.fromString(e).popFirst(5))}static empty(){return new K(ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ye.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new ye(e.slice()))}}/**
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
 */function bE(t,e,n){if(!n)throw new q(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function NA(t,e,n,r){if(e===!0&&r===!0)throw new q(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ty(t){if(!K.isDocumentKey(t))throw new q(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Iy(t){if(K.isDocumentKey(t))throw new q(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function jE(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Qc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y(12329,{type:typeof t})}function An(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Qc(t);throw new q(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Be(t,e){const n={typeString:t};return e&&(n.value=e),n}function Sa(t,e){if(!jE(t))throw new q(O.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new q(O.INVALID_ARGUMENT,n);return!0}/**
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
 */const Sy=-62135596800,xy=1e6;class Te{static now(){return Te.fromMillis(Date.now())}static fromDate(e){return Te.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*xy);return new Te(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Sy)throw new q(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/xy}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Te._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Sa(e,Te._jsonSchema))return new Te(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Sy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Te._jsonSchemaVersion="firestore/timestamp/1.0",Te._jsonSchema={type:Be("string",Te._jsonSchemaVersion),seconds:Be("number"),nanoseconds:Be("number")};/**
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
 */class ee{static fromTimestamp(e){return new ee(e)}static min(){return new ee(new Te(0,0))}static max(){return new ee(new Te(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const na=-1;function RA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ee.fromTimestamp(r===1e9?new Te(n+1,0):new Te(n,r));return new Vr(s,K.empty(),e)}function PA(t){return new Vr(t.readTime,t.key,na)}class Vr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Vr(ee.min(),K.empty(),na)}static max(){return new Vr(ee.max(),K.empty(),na)}}function bA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
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
 */const jA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class DA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Pi(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==jA)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new M((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new M((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function VA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function bi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Yc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Yc.ce=-1;/**
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
 */const rp=-1;function Xc(t){return t==null}function pc(t){return t===0&&1/t==-1/0}function LA(t){return typeof t=="number"&&Number.isInteger(t)&&!pc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const DE="";function OA(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=ky(e)),e=MA(t.get(n),e);return ky(e)}function MA(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case DE:n+="";break;default:n+=i}}return n}function ky(t){return t+DE+""}/**
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
 */function Ay(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function qr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function VE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Re{constructor(e,n){this.comparator=e,this.root=n||tt.EMPTY}insert(e,n){return new Re(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,tt.BLACK,null,null))}remove(e){return new Re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ul(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ul(this.root,e,this.comparator,!1)}getReverseIterator(){return new ul(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ul(this.root,e,this.comparator,!0)}}class ul{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??tt.RED,this.left=s??tt.EMPTY,this.right=i??tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new tt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return tt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Y(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Y(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Y(27949);return e+(this.isRed()?0:1)}}tt.EMPTY=null,tt.RED=!0,tt.BLACK=!1;tt.EMPTY=new class{constructor(){this.size=0}get key(){throw Y(57766)}get value(){throw Y(16141)}get color(){throw Y(16727)}get left(){throw Y(29726)}get right(){throw Y(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new tt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ge{constructor(e){this.comparator=e,this.data=new Re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Cy(this.data.getIterator())}getIteratorFrom(e){return new Cy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ge)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ge(this.comparator);return n.data=e,n}}class Cy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Mt{constructor(e){this.fields=e,e.sort(nt.comparator)}static empty(){return new Mt([])}unionWith(e){let n=new Ge(nt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Mt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return wi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class LE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class it{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new LE("Invalid base64 string: "+i):i}}(e);return new it(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new it(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}it.EMPTY_BYTE_STRING=new it("");const FA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Lr(t){if(ue(!!t,39018),typeof t=="string"){let e=0;const n=FA.exec(t);if(ue(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Or(t){return typeof t=="string"?it.fromBase64String(t):it.fromUint8Array(t)}/**
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
 */const OE="server_timestamp",ME="__type__",FE="__previous_value__",UE="__local_write_time__";function sp(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[ME])==null?void 0:r.stringValue)===OE}function Jc(t){const e=t.mapValue.fields[FE];return sp(e)?Jc(e):e}function ra(t){const e=Lr(t.mapValue.fields[UE].timestampValue);return new Te(e.seconds,e.nanos)}/**
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
 */class UA{constructor(e,n,r,s,i,o,l,u,h,f,g){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=g}}const mc="(default)";class sa{constructor(e,n){this.projectId=e,this.database=n||mc}static empty(){return new sa("","")}get isDefaultDatabase(){return this.database===mc}isEqual(e){return e instanceof sa&&e.projectId===this.projectId&&e.database===this.database}}function zA(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new q(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sa(t.options.projectId,e)}/**
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
 */const zE="__type__",BA="__max__",hl={mapValue:{}},BE="__vector__",gc="value";function Mr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?sp(t)?4:HA(t)?9007199254740991:$A(t)?10:11:Y(28295,{value:t})}function Cn(t,e){if(t===e)return!0;const n=Mr(t);if(n!==Mr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ra(t).isEqual(ra(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Lr(s.timestampValue),l=Lr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Or(s.bytesValue).isEqual(Or(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Le(s.geoPointValue.latitude)===Le(i.geoPointValue.latitude)&&Le(s.geoPointValue.longitude)===Le(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Le(s.integerValue)===Le(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Le(s.doubleValue),l=Le(i.doubleValue);return o===l?pc(o)===pc(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return wi(t.arrayValue.values||[],e.arrayValue.values||[],Cn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Ay(o)!==Ay(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Cn(o[u],l[u])))return!1;return!0}(t,e);default:return Y(52216,{left:t})}}function ia(t,e){return(t.values||[]).find(n=>Cn(n,e))!==void 0}function Ei(t,e){if(t===e)return 0;const n=Mr(t),r=Mr(e);if(n!==r)return oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Le(i.integerValue||i.doubleValue),u=Le(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Ny(t.timestampValue,e.timestampValue);case 4:return Ny(ra(t),ra(e));case 5:return Rd(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Or(i),u=Or(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=oe(l[h],u[h]);if(f!==0)return f}return oe(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=oe(Le(i.latitude),Le(o.latitude));return l!==0?l:oe(Le(i.longitude),Le(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Ry(t.arrayValue,e.arrayValue);case 10:return function(i,o){var m,w,x,R;const l=i.fields||{},u=o.fields||{},h=(m=l[gc])==null?void 0:m.arrayValue,f=(w=u[gc])==null?void 0:w.arrayValue,g=oe(((x=h==null?void 0:h.values)==null?void 0:x.length)||0,((R=f==null?void 0:f.values)==null?void 0:R.length)||0);return g!==0?g:Ry(h,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===hl.mapValue&&o===hl.mapValue)return 0;if(i===hl.mapValue)return 1;if(o===hl.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let g=0;g<u.length&&g<f.length;++g){const m=Rd(u[g],f[g]);if(m!==0)return m;const w=Ei(l[u[g]],h[f[g]]);if(w!==0)return w}return oe(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Y(23264,{he:n})}}function Ny(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=Lr(t),r=Lr(e),s=oe(n.seconds,r.seconds);return s!==0?s:oe(n.nanos,r.nanos)}function Ry(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ei(n[s],r[s]);if(i)return i}return oe(n.length,r.length)}function Ti(t){return Pd(t)}function Pd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Lr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Or(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Pd(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Pd(n.fields[o])}`;return s+"}"}(t.mapValue):Y(61005,{value:t})}function jl(t){switch(Mr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Jc(t);return e?16+jl(e):16;case 5:return 2*t.stringValue.length;case 6:return Or(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+jl(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return qr(r.fields,(i,o)=>{s+=i.length+jl(o)}),s}(t.mapValue);default:throw Y(13486,{value:t})}}function Py(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function bd(t){return!!t&&"integerValue"in t}function ip(t){return!!t&&"arrayValue"in t}function by(t){return!!t&&"nullValue"in t}function jy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Dl(t){return!!t&&"mapValue"in t}function $A(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[zE])==null?void 0:r.stringValue)===BE}function Ro(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return qr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ro(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ro(t.arrayValue.values[n]);return e}return{...t}}function HA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===BA}/**
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
 */class At{constructor(e){this.value=e}static empty(){return new At({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Dl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ro(n)}setAll(e){let n=nt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Ro(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Dl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Dl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){qr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new At(Ro(this.value))}}function $E(t){const e=[];return qr(t.fields,(n,r)=>{const s=new nt([n]);if(Dl(r)){const i=$E(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Mt(e)}/**
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
 */class dt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new dt(e,0,ee.min(),ee.min(),ee.min(),At.empty(),0)}static newFoundDocument(e,n,r,s){return new dt(e,1,n,ee.min(),r,s,0)}static newNoDocument(e,n){return new dt(e,2,n,ee.min(),ee.min(),At.empty(),0)}static newUnknownDocument(e,n){return new dt(e,3,n,ee.min(),ee.min(),At.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class yc{constructor(e,n){this.position=e,this.inclusive=n}}function Dy(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=Ei(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Vy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Cn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class oa{constructor(e,n="asc"){this.field=e,this.dir=n}}function qA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class HE{}class ze extends HE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new GA(e,n,r):n==="array-contains"?new YA(e,r):n==="in"?new XA(e,r):n==="not-in"?new JA(e,r):n==="array-contains-any"?new ZA(e,r):new ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new KA(e,r):new QA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ei(n,this.value)):n!==null&&Mr(this.value)===Mr(n)&&this.matchesComparison(Ei(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class hn extends HE{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new hn(e,n)}matches(e){return qE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function qE(t){return t.op==="and"}function WE(t){return WA(t)&&qE(t)}function WA(t){for(const e of t.filters)if(e instanceof hn)return!1;return!0}function jd(t){if(t instanceof ze)return t.field.canonicalString()+t.op.toString()+Ti(t.value);if(WE(t))return t.filters.map(e=>jd(e)).join(",");{const e=t.filters.map(n=>jd(n)).join(",");return`${t.op}(${e})`}}function GE(t,e){return t instanceof ze?function(r,s){return s instanceof ze&&r.op===s.op&&r.field.isEqual(s.field)&&Cn(r.value,s.value)}(t,e):t instanceof hn?function(r,s){return s instanceof hn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&GE(o,s.filters[l]),!0):!1}(t,e):void Y(19439)}function KE(t){return t instanceof ze?function(n){return`${n.field.canonicalString()} ${n.op} ${Ti(n.value)}`}(t):t instanceof hn?function(n){return n.op.toString()+" {"+n.getFilters().map(KE).join(" ,")+"}"}(t):"Filter"}class GA extends ze{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class KA extends ze{constructor(e,n){super(e,"in",n),this.keys=QE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class QA extends ze{constructor(e,n){super(e,"not-in",n),this.keys=QE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function QE(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class YA extends ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ip(n)&&ia(n.arrayValue,this.value)}}class XA extends ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ia(this.value.arrayValue,n)}}class JA extends ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(ia(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ia(this.value.arrayValue,n)}}class ZA extends ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ip(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ia(this.value.arrayValue,r))}}/**
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
 */class eC{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function Ly(t,e=null,n=[],r=[],s=null,i=null,o=null){return new eC(t,e,n,r,s,i,o)}function op(t){const e=te(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>jd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Xc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ti(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ti(r)).join(",")),e.Te=n}return e.Te}function ap(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!qA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!GE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Vy(t.startAt,e.startAt)&&Vy(t.endAt,e.endAt)}function Dd(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ji{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function tC(t,e,n,r,s,i,o,l){return new ji(t,e,n,r,s,i,o,l)}function lp(t){return new ji(t)}function Oy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function nC(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function YE(t){return t.collectionGroup!==null}function Po(t){const e=te(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ge(nt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new oa(i,r))}),n.has(nt.keyField().canonicalString())||e.Ie.push(new oa(nt.keyField(),r))}return e.Ie}function In(t){const e=te(t);return e.Ee||(e.Ee=rC(e,Po(t))),e.Ee}function rC(t,e){if(t.limitType==="F")return Ly(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new oa(s.field,i)});const n=t.endAt?new yc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new yc(t.startAt.position,t.startAt.inclusive):null;return Ly(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Vd(t,e){const n=t.filters.concat([e]);return new ji(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function sC(t,e){const n=t.explicitOrderBy.concat([e]);return new ji(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function Ld(t,e,n){return new ji(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Zc(t,e){return ap(In(t),In(e))&&t.limitType===e.limitType}function XE(t){return`${op(In(t))}|lt:${t.limitType}`}function Os(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>KE(s)).join(", ")}]`),Xc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ti(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ti(s)).join(",")),`Target(${r})`}(In(t))}; limitType=${t.limitType})`}function eu(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):K.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Po(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const h=Dy(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Po(r),s)||r.endAt&&!function(o,l,u){const h=Dy(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Po(r),s))}(t,e)}function iC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function JE(t){return(e,n)=>{let r=!1;for(const s of Po(t)){const i=oC(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function oC(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),h=l.data.field(i);return u!==null&&h!==null?Ei(u,h):Y(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y(19790,{direction:t.dir})}}/**
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
 */class As{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){qr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return VE(this.inner)}size(){return this.innerSize}}/**
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
 */const aC=new Re(K.comparator);function Qn(){return aC}const ZE=new Re(K.comparator);function yo(...t){let e=ZE;for(const n of t)e=e.insert(n.key,n);return e}function e1(t){let e=ZE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function is(){return bo()}function t1(){return bo()}function bo(){return new As(t=>t.toString(),(t,e)=>t.isEqual(e))}const lC=new Re(K.comparator),cC=new Ge(K.comparator);function ae(...t){let e=cC;for(const n of t)e=e.add(n);return e}const uC=new Ge(oe);function hC(){return uC}/**
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
 */function cp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pc(e)?"-0":e}}function n1(t){return{integerValue:""+t}}function dC(t,e){return LA(e)?n1(e):cp(t,e)}/**
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
 */class tu{constructor(){this._=void 0}}function fC(t,e,n){return t instanceof aa?function(s,i){const o={fields:{[ME]:{stringValue:OE},[UE]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&sp(i)&&(i=Jc(i)),i&&(o.fields[FE]=i),{mapValue:o}}(n,e):t instanceof la?s1(t,e):t instanceof ca?i1(t,e):function(s,i){const o=r1(s,i),l=My(o)+My(s.Ae);return bd(o)&&bd(s.Ae)?n1(l):cp(s.serializer,l)}(t,e)}function pC(t,e,n){return t instanceof la?s1(t,e):t instanceof ca?i1(t,e):n}function r1(t,e){return t instanceof _c?function(r){return bd(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class aa extends tu{}class la extends tu{constructor(e){super(),this.elements=e}}function s1(t,e){const n=o1(e);for(const r of t.elements)n.some(s=>Cn(s,r))||n.push(r);return{arrayValue:{values:n}}}class ca extends tu{constructor(e){super(),this.elements=e}}function i1(t,e){let n=o1(e);for(const r of t.elements)n=n.filter(s=>!Cn(s,r));return{arrayValue:{values:n}}}class _c extends tu{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function My(t){return Le(t.integerValue||t.doubleValue)}function o1(t){return ip(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class mC{constructor(e,n){this.field=e,this.transform=n}}function gC(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof la&&s instanceof la||r instanceof ca&&s instanceof ca?wi(r.elements,s.elements,Cn):r instanceof _c&&s instanceof _c?Cn(r.Ae,s.Ae):r instanceof aa&&s instanceof aa}(t.transform,e.transform)}class yC{constructor(e,n){this.version=e,this.transformResults=n}}class bt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new bt}static exists(e){return new bt(void 0,e)}static updateTime(e){return new bt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class nu{}function a1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ru(t.key,bt.none()):new xa(t.key,t.data,bt.none());{const n=t.data,r=At.empty();let s=new Ge(nt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Wr(t.key,r,new Mt(s.toArray()),bt.none())}}function _C(t,e,n){t instanceof xa?function(s,i,o){const l=s.value.clone(),u=Uy(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Wr?function(s,i,o){if(!Vl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Uy(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(l1(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function jo(t,e,n,r){return t instanceof xa?function(i,o,l,u){if(!Vl(i.precondition,o))return l;const h=i.value.clone(),f=zy(i.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Wr?function(i,o,l,u){if(!Vl(i.precondition,o))return l;const h=zy(i.fieldTransforms,u,o),f=o.data;return f.setAll(l1(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(t,e,n,r):function(i,o,l){return Vl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function vC(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=r1(r.transform,s||null);i!=null&&(n===null&&(n=At.empty()),n.set(r.field,i))}return n||null}function Fy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&wi(r,s,(i,o)=>gC(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class xa extends nu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Wr extends nu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function l1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Uy(t,e,n){const r=new Map;ue(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,pC(o,l,n[s]))}return r}function zy(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,fC(i,o,e))}return r}class ru extends nu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wC extends nu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class EC{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&_C(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=jo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=jo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=t1();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=a1(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ae())}isEqual(e){return this.batchId===e.batchId&&wi(this.mutations,e.mutations,(n,r)=>Fy(n,r))&&wi(this.baseMutations,e.baseMutations,(n,r)=>Fy(n,r))}}class up{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ue(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return lC}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new up(e,n,r,s)}}/**
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
 */class TC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class IC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Fe,le;function SC(t){switch(t){case O.OK:return Y(64938);case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0;default:return Y(15467,{code:t})}}function c1(t){if(t===void 0)return Kn("GRPC error has no .code"),O.UNKNOWN;switch(t){case Fe.OK:return O.OK;case Fe.CANCELLED:return O.CANCELLED;case Fe.UNKNOWN:return O.UNKNOWN;case Fe.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Fe.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Fe.INTERNAL:return O.INTERNAL;case Fe.UNAVAILABLE:return O.UNAVAILABLE;case Fe.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Fe.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Fe.NOT_FOUND:return O.NOT_FOUND;case Fe.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Fe.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Fe.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Fe.ABORTED:return O.ABORTED;case Fe.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Fe.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Fe.DATA_LOSS:return O.DATA_LOSS;default:return Y(39323,{code:t})}}(le=Fe||(Fe={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function xC(){return new TextEncoder}/**
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
 */const kC=new Rr([4294967295,4294967295],0);function By(t){const e=xC().encode(t),n=new SE;return n.update(e),new Uint8Array(n.digest())}function $y(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Rr([n,r],0),new Rr([s,i],0)]}class hp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new _o(`Invalid padding: ${n}`);if(r<0)throw new _o(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new _o(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new _o(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Rr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Rr.fromNumber(r)));return s.compare(kC)===1&&(s=new Rr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=By(e),[r,s]=$y(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new hp(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=By(e),[r,s]=$y(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class _o extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class su{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ka.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new su(ee.min(),s,new Re(oe),Qn(),ae())}}class ka{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ka(r,n,ae(),ae(),ae())}}/**
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
 */class Ll{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.De=s}}class u1{constructor(e,n){this.targetId=e,this.Ce=n}}class h1{constructor(e,n,r=it.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Hy{constructor(){this.ve=0,this.Fe=qy(),this.Me=it.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ae(),n=ae(),r=ae();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Y(38017,{changeType:i})}}),new ka(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=qy()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ue(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class AC{constructor(e){this.Ge=e,this.ze=new Map,this.je=Qn(),this.He=dl(),this.Je=dl(),this.Ze=new Re(oe)}Xe(e){for(const n of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Y(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Dd(i))if(r===0){const o=new K(i.path);this.et(n,o,dt.newNoDocument(o,ee.min()))}else ue(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Or(r).toUint8Array()}catch(u){if(u instanceof LE)return vi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new hp(o,s,i)}catch(u){return vi(u instanceof _o?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&Dd(l.target)){const u=new K(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,dt.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.Ke())}});let r=ae();this.Je.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new su(e,n,this.Ze,this.je,r);return this.je=Qn(),this.He=dl(),this.Je=dl(),this.Ze=new Re(oe),s}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.He=this.He.insert(n.key,this.It(n.key).add(e)),this.Je=this.Je.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.qe(n,1):s.Ue(n),this.Je=this.Je.insert(n,this.Rt(n).delete(e)),this.Je=this.Je.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new Hy,this.ze.set(e,n)),n}Rt(e){let n=this.Je.get(e);return n||(n=new Ge(oe),this.Je=this.Je.insert(e,n)),n}It(e){let n=this.He.get(e);return n||(n=new Ge(oe),this.He=this.He.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Hy),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function dl(){return new Re(K.comparator)}function qy(){return new Re(K.comparator)}const CC={asc:"ASCENDING",desc:"DESCENDING"},NC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},RC={and:"AND",or:"OR"};class PC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Od(t,e){return t.useProto3Json||Xc(e)?e:{value:e}}function vc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function d1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function bC(t,e){return vc(t,e.toTimestamp())}function Sn(t){return ue(!!t,49232),ee.fromTimestamp(function(n){const r=Lr(n);return new Te(r.seconds,r.nanos)}(t))}function dp(t,e){return Md(t,e).canonicalString()}function Md(t,e){const n=function(s){return new ye(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function f1(t){const e=ye.fromString(t);return ue(_1(e),10190,{key:e.toString()}),e}function Fd(t,e){return dp(t.databaseId,e.path)}function Eh(t,e){const n=f1(e);if(n.get(1)!==t.databaseId.projectId)throw new q(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(m1(n))}function p1(t,e){return dp(t.databaseId,e)}function jC(t){const e=f1(t);return e.length===4?ye.emptyPath():m1(e)}function Ud(t){return new ye(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function m1(t){return ue(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Wy(t,e,n){return{name:Fd(t,e),fields:n.value.mapValue.fields}}function DC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Y(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(ue(f===void 0||typeof f=="string",58123),it.fromBase64String(f||"")):(ue(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),it.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?O.UNKNOWN:c1(h.code);return new q(f,h.message||"")}(o);n=new h1(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Eh(t,r.document.name),i=Sn(r.document.updateTime),o=r.document.createTime?Sn(r.document.createTime):ee.min(),l=new At({mapValue:{fields:r.document.fields}}),u=dt.newFoundDocument(s,i,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Ll(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Eh(t,r.document),i=r.readTime?Sn(r.readTime):ee.min(),o=dt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Ll([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Eh(t,r.document),i=r.removedTargetIds||[];n=new Ll([],i,s,null)}else{if(!("filter"in e))return Y(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new IC(s,i),l=r.targetId;n=new u1(l,o)}}return n}function VC(t,e){let n;if(e instanceof xa)n={update:Wy(t,e.key,e.value)};else if(e instanceof ru)n={delete:Fd(t,e.key)};else if(e instanceof Wr)n={update:Wy(t,e.key,e.data),updateMask:HC(e.fieldMask)};else{if(!(e instanceof wC))return Y(16599,{dt:e.type});n={verify:Fd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof aa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof la)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ca)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof _c)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw Y(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:bC(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Y(27497)}(t,e.precondition)),n}function LC(t,e){return t&&t.length>0?(ue(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?Sn(s.updateTime):Sn(i);return o.isEqual(ee.min())&&(o=Sn(i)),new yC(o,s.transformResults||[])}(n,e))):[]}function OC(t,e){return{documents:[p1(t,e.path)]}}function MC(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=p1(t,s);const i=function(h){if(h.length!==0)return y1(hn.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(m){return{field:Ms(m.field),direction:zC(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Od(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:n,parent:s}}function FC(t){let e=jC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ue(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(g){const m=g1(g);return m instanceof hn&&WE(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(g){return g.map(m=>function(x){return new oa(Fs(x.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(g){let m;return m=typeof g=="object"?g.value:g,Xc(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(g){const m=!!g.before,w=g.values||[];return new yc(w,m)}(n.startAt));let h=null;return n.endAt&&(h=function(g){const m=!g.before,w=g.values||[];return new yc(w,m)}(n.endAt)),tC(e,s,o,i,l,"F",u,h)}function UC(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function g1(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Fs(n.unaryFilter.field);return ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Fs(n.unaryFilter.field);return ze.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Fs(n.unaryFilter.field);return ze.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Fs(n.unaryFilter.field);return ze.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Y(61313);default:return Y(60726)}}(t):t.fieldFilter!==void 0?function(n){return ze.create(Fs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Y(58110);default:return Y(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return hn.create(n.compositeFilter.filters.map(r=>g1(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Y(1026)}}(n.compositeFilter.op))}(t):Y(30097,{filter:t})}function zC(t){return CC[t]}function BC(t){return NC[t]}function $C(t){return RC[t]}function Ms(t){return{fieldPath:t.canonicalString()}}function Fs(t){return nt.fromServerFormat(t.fieldPath)}function y1(t){return t instanceof ze?function(n){if(n.op==="=="){if(jy(n.value))return{unaryFilter:{field:Ms(n.field),op:"IS_NAN"}};if(by(n.value))return{unaryFilter:{field:Ms(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(jy(n.value))return{unaryFilter:{field:Ms(n.field),op:"IS_NOT_NAN"}};if(by(n.value))return{unaryFilter:{field:Ms(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ms(n.field),op:BC(n.op),value:n.value}}}(t):t instanceof hn?function(n){const r=n.getFilters().map(s=>y1(s));return r.length===1?r[0]:{compositeFilter:{op:$C(n.op),filters:r}}}(t):Y(54877,{filter:t})}function HC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function _1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function v1(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
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
 */class vr{constructor(e,n,r,s,i=ee.min(),o=ee.min(),l=it.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new vr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new vr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class qC{constructor(e){this.yt=e}}function WC(t){const e=FC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ld(e,e.limit,"L"):e}/**
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
 */class GC{constructor(){this.Sn=new KC}addToCollectionParentIndex(e,n){return this.Sn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(Vr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(Vr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class KC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ge(ye.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ge(ye.comparator)).toArray()}}/**
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
 */const Gy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},w1=41943040;class xt{static withCacheSize(e){return new xt(e,xt.DEFAULT_COLLECTION_PERCENTILE,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */xt.DEFAULT_COLLECTION_PERCENTILE=10,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,xt.DEFAULT=new xt(w1,xt.DEFAULT_COLLECTION_PERCENTILE,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),xt.DISABLED=new xt(-1,0,0);/**
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
 */class Ii{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Ii(0)}static ar(){return new Ii(-1)}}/**
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
 */const Ky="LruGarbageCollector",QC=1048576;function Qy([t,e],[n,r]){const s=oe(t,n);return s===0?oe(e,r):s}class YC{constructor(e){this.Pr=e,this.buffer=new Ge(Qy),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Qy(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class XC{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){W(Ky,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){bi(n)?W(Ky,"Ignoring IndexedDB error during garbage collection: ",n):await Pi(n)}await this.Ar(3e5)})}}class JC{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(Yc.ce);const r=new YC(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(Gy)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Gy):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,o=Date.now(),this.nthSequenceNumber(e,s))).next(g=>(r=g,l=Date.now(),this.removeTargets(e,r,n))).next(g=>(i=g,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(g=>(h=Date.now(),Ls()<=ie.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${g} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g})))}}function ZC(t,e){return new JC(t,e)}/**
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
 */class eN{constructor(){this.changes=new As(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,dt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class tN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class nN{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&jo(r.mutation,s,Mt.empty(),Te.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ae()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ae()){const s=is();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=yo();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=is();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ae()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Qn();const o=bo(),l=function(){return bo()}();return n.forEach((u,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Wr)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),jo(f.mutation,h,f.mutation.getFieldMask(),Te.now())):o.set(h.key,Mt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>l.set(h,new tN(f,o.get(h)??null))),l))}recalculateAndSaveOverlays(e,n){const r=bo();let s=new Re((o,l)=>o-l),i=ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||Mt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const g=(s.get(l.batchId)||ae()).add(u);s=s.insert(l.batchId,g)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,g=t1();f.forEach(m=>{if(!i.has(m)){const w=a1(n.get(m),r.get(m));w!==null&&g.set(m,w),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,g))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return nC(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):YE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(is());let l=na,u=i;return o.next(h=>M.forEach(h,(f,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),i.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{u=u.insert(f,m)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,ae())).next(f=>({batchId:l,changes:e1(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let s=yo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=yo();return this.indexManager.getCollectionParents(e,i).next(l=>M.forEach(l,u=>{const h=function(g,m){return new ji(m,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((g,m)=>{o=o.insert(g,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,dt.newInvalidDocument(f)))});let l=yo();return o.forEach((u,h)=>{const f=i.get(u);f!==void 0&&jo(f.mutation,h,Mt.empty(),Te.now()),eu(n,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class rN{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return M.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Sn(s.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(s){return{name:s.name,query:WC(s.bundledQuery),readTime:Sn(s.readTime)}}(n)),M.resolve()}}/**
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
 */class sN{constructor(){this.overlays=new Re(K.comparator),this.Lr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=is();return M.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.bt(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=is(),i=n.length+1,o=new K(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Re((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=is(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=is(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return M.resolve(l)}bt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new TC(n,r));let i=this.Lr.get(n);i===void 0&&(i=ae(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
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
 */class iN{constructor(){this.sessionToken=it.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
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
 */class fp{constructor(){this.kr=new Ge(Ye.Kr),this.qr=new Ge(Ye.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new Ye(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Ye(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new K(new ye([])),r=new Ye(n,e),s=new Ye(n,e+1),i=[];return this.qr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new K(new ye([])),r=new Ye(n,e),s=new Ye(n,e+1);let i=ae();return this.qr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ye(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ye{constructor(e,n){this.key=e,this.Hr=n}static Kr(e,n){return K.comparator(e.key,n.key)||oe(e.Hr,n.Hr)}static Ur(e,n){return oe(e.Hr,n.Hr)||K.comparator(e.key,n.key)}}/**
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
 */class oN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new Ge(Ye.Kr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new EC(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Jr=this.Jr.add(new Ye(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?rp:this.Yn-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ye(n,0),s=new Ye(n,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([r,s],o=>{const l=this.Zr(o.Hr);i.push(l)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ge(oe);return n.forEach(s=>{const i=new Ye(s,0),o=new Ye(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,o],l=>{r=r.add(l.Hr)})}),M.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;K.isDocumentKey(i)||(i=i.child(""));const o=new Ye(new K(i),0);let l=new Ge(oe);return this.Jr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.Hr)),!0)},o),M.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ue(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return M.forEach(n.mutations,s=>{const i=new Ye(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Jr=r})}nr(e){}containsKey(e,n){const r=new Ye(n,0),s=this.Jr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class aN{constructor(e){this.ti=e,this.docs=function(){return new Re(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():dt.newInvalidDocument(n))}getEntries(e,n){let r=Qn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():dt.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Qn();const o=n.path,l=new K(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||bA(PA(f),r)<=0||(s.has(f.key)||eu(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Y(9500)}ni(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new lN(this)}getSize(e){return M.resolve(this.size)}}class lN extends eN{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
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
 */class cN{constructor(e){this.persistence=e,this.ri=new As(n=>op(n),ap),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.ii=0,this.si=new fp,this.targetCount=0,this.oi=Ii._r()}forEachTarget(e,n){return this.ri.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),M.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new Ii(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.lr(n),M.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.si.containsKey(n))}}/**
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
 */class E1{constructor(e,n){this._i={},this.overlays={},this.ai=new Yc(0),this.ui=!1,this.ui=!0,this.ci=new iN,this.referenceDelegate=e(this),this.li=new cN(this),this.indexManager=new GC,this.remoteDocumentCache=function(s){return new aN(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new qC(n),this.Pi=new rN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new sN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new oN(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const s=new uN(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return M.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class uN extends DA{constructor(e){super(),this.currentSequenceNumber=e}}class pp{constructor(e){this.persistence=e,this.Ri=new fp,this.Ai=null}static Vi(e){return new pp(e)}get di(){if(this.Ai)return this.Ai;throw Y(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.di,r=>{const s=K.fromPath(r);return this.mi(e,s).next(i=>{i||n.removeEntry(s,ee.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class wc{constructor(e,n){this.persistence=e,this.fi=new As(r=>OA(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=ZC(this,n)}static Vi(e,n){return new wc(e,n)}Ti(){}Ii(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return M.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?M.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,ee.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=jl(e.data.value)),n}wr(e,n,r){return M.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class mp{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=s}static Es(e,n){let r=ae(),s=ae();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new mp(e,n.fromCache,r,s)}}/**
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
 */class hN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class dN{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return ek()?8:VA(pt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new hN;return this.ys(e,n,o).next(l=>{if(i.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>i.result)}ws(e,n,r,s){return r.documentReadCount<this.Vs?(Ls()<=ie.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",Os(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),M.resolve()):(Ls()<=ie.DEBUG&&W("QueryEngine","Query:",Os(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(Ls()<=ie.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",Os(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,In(n))):M.resolve())}gs(e,n){if(Oy(n))return M.resolve(null);let r=In(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ld(n,null,"F"),r=In(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ae(...i);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.bs(n,l);return this.Ss(n,h,o,u.readTime)?this.gs(e,Ld(n,null,"F")):this.Ds(e,h,n,u)}))})))}ps(e,n,r,s){return Oy(n)||s.isEqual(ee.min())?M.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.bs(n,i);return this.Ss(n,o,r,s)?M.resolve(null):(Ls()<=ie.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Os(n)),this.Ds(e,o,n,RA(s,na)).next(l=>l))})}bs(e,n){let r=new Ge(JE(e));return n.forEach((s,i)=>{eu(e,i)&&(r=r.add(i))}),r}Ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return Ls()<=ie.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",Os(n)),this.fs.getDocumentsMatchingQuery(e,n,Vr.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const gp="LocalStore",fN=3e8;class pN{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new Re(oe),this.Fs=new As(i=>op(i),ap),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nN(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function mN(t,e,n,r){return new pN(t,e,n,r)}async function T1(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=ae();for(const h of s){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Ns:h,removedBatchIds:o,addedBatchIds:l}))})})}function gN(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const g=h.batch,m=g.keys();let w=M.resolve();return m.forEach(x=>{w=w.next(()=>f.getEntry(u,x)).next(R=>{const b=h.docVersions.get(x);ue(b!==null,48541),R.version.compareTo(b)<0&&(g.applyToRemoteDocument(R,h),R.isValidDocument()&&(R.setReadTime(h.commitVersion),f.addEntry(R)))})}),w.next(()=>l.mutationQueue.removeMutationBatch(u,g))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ae();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function I1(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function yN(t,e){const n=te(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const l=[];e.targetChanges.forEach((f,g)=>{const m=s.get(g);if(!m)return;l.push(n.li.removeMatchingKeys(i,f.removedDocuments,g).next(()=>n.li.addMatchingKeys(i,f.addedDocuments,g)));let w=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?w=w.withResumeToken(it.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):f.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(f.resumeToken,r)),s=s.insert(g,w),function(R,b,S){return R.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=fN?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(m,w,f)&&l.push(n.li.updateTargetData(i,w))});let u=Qn(),h=ae();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(_N(i,o,e.documentUpdates).next(f=>{u=f.Bs,h=f.Ls})),!r.isEqual(ee.min())){const f=n.li.getLastRemoteSnapshotVersion(i).next(g=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(n.vs=s,i))}function _N(t,e,n){let r=ae(),s=ae();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Qn();return n.forEach((l,u)=>{const h=i.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(ee.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):W(gp,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Bs:o,Ls:s}})}function vN(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=rp),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function wN(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.li.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):n.li.allocateTargetId(r).next(o=>(s=new vr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function zd(t,e,n){const r=te(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!bi(o))throw o;W(gp,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function Yy(t,e,n){const r=te(t);let s=ee.min(),i=ae();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const g=te(u),m=g.Fs.get(f);return m!==void 0?M.resolve(g.vs.get(m)):g.li.getTargetData(h,f)}(r,o,In(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:ee.min(),n?i:ae())).next(l=>(EN(r,iC(e),l),{documents:l,ks:i})))}function EN(t,e,n){let r=t.Ms.get(e)||ee.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ms.set(e,r)}class Xy{constructor(){this.activeTargetIds=hC()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class TN{constructor(){this.vo=new Xy,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Xy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class IN{Mo(e){}shutdown(){}}/**
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
 */const Jy="ConnectivityMonitor";class Zy{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){W(Jy,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){W(Jy,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let fl=null;function Bd(){return fl===null?fl=function(){return 268435456+Math.round(2147483648*Math.random())}():fl++,"0x"+fl.toString(16)}/**
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
 */const Th="RestConnection",SN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class xN{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===mc?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=Bd(),l=this.Qo(e,n.toUriEncodedString());W(Th,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,i);const{host:h}=new URL(l),f=Hr(h);return this.zo(e,l,u,r,f).then(g=>(W(Th,`Received RPC '${e}' ${o}: `,g),g),g=>{throw vi(Th,`RPC '${e}' ${o} failed with error: `,g,"url: ",l,"request:",r),g})}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ri}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,n){const r=SN[e];let s=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class kN{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const ct="WebChannelConnection",co=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class si extends xN{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!si.c_){const e=CE();co(e,AE.STAT_EVENT,n=>{n.stat===Nd.PROXY?W(ct,"STAT_EVENT: detected buffering proxy"):n.stat===Nd.NOPROXY&&W(ct,"STAT_EVENT: detected no buffering proxy")}),si.c_=!0}}zo(e,n,r,s,i){const o=Bd();return new Promise((l,u)=>{const h=new xE;h.setWithCredentials(!0),h.listenOnce(kE.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case bl.NO_ERROR:const g=h.getResponseJson();W(ct,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(g)),l(g);break;case bl.TIMEOUT:W(ct,`RPC '${e}' ${o} timed out`),u(new q(O.DEADLINE_EXCEEDED,"Request time out"));break;case bl.HTTP_ERROR:const m=h.getStatus();if(W(ct,`RPC '${e}' ${o} failed with status:`,m,"response text:",h.getResponseText()),m>0){let w=h.getResponseJson();Array.isArray(w)&&(w=w[0]);const x=w==null?void 0:w.error;if(x&&x.status&&x.message){const R=function(S){const I=S.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(I)>=0?I:O.UNKNOWN}(x.status);u(new q(R,x.message))}else u(new q(O.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new q(O.UNAVAILABLE,"Connection failed."));break;default:Y(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{W(ct,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);W(ct,`RPC '${e}' ${o} sending request:`,s),h.send(n,"POST",f,r,15)})}T_(e,n,r){const s=Bd(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=i.join("");W(ct,`Creating RPC '${e}' stream ${s}: ${h}`,l);const f=o.createWebChannel(h,l);this.I_(f);let g=!1,m=!1;const w=new kN({Ho:x=>{m?W(ct,`Not sending because RPC '${e}' stream ${s} is closed:`,x):(g||(W(ct,`Opening RPC '${e}' stream ${s} transport.`),f.open(),g=!0),W(ct,`RPC '${e}' stream ${s} sending:`,x),f.send(x))},Jo:()=>f.close()});return co(f,go.EventType.OPEN,()=>{m||(W(ct,`RPC '${e}' stream ${s} transport opened.`),w.i_())}),co(f,go.EventType.CLOSE,()=>{m||(m=!0,W(ct,`RPC '${e}' stream ${s} transport closed`),w.o_(),this.E_(f))}),co(f,go.EventType.ERROR,x=>{m||(m=!0,vi(ct,`RPC '${e}' stream ${s} transport errored. Name:`,x.name,"Message:",x.message),w.o_(new q(O.UNAVAILABLE,"The operation could not be completed")))}),co(f,go.EventType.MESSAGE,x=>{var R;if(!m){const b=x.data[0];ue(!!b,16349);const S=b,I=(S==null?void 0:S.error)||((R=S[0])==null?void 0:R.error);if(I){W(ct,`RPC '${e}' stream ${s} received error:`,I);const A=I.status;let D=function(_){const y=Fe[_];if(y!==void 0)return c1(y)}(A),N=I.message;D===void 0&&(D=O.INTERNAL,N="Unknown error status: "+A+" with message "+I.message),m=!0,w.o_(new q(D,N)),f.close()}else W(ct,`RPC '${e}' stream ${s} received:`,b),w.__(b)}}),si.u_(),setTimeout(()=>{w.s_()},0),w}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return NE()}}/**
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
 */function AN(t){return new si(t)}function Ih(){return typeof document<"u"?document:null}/**
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
 */function iu(t){return new PC(t,!0)}/**
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
 */si.c_=!1;class S1{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&W("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const e_="PersistentStream";class x1{constructor(e,n,r,s,i,o,l,u){this.Ci=e,this.b_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new S1(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(Kn(n.toString()),Kn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new q(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.H_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return W(e_,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(W(e_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class CN extends x1{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=DC(this.serializer,e),r=function(i){if(!("targetChange"in i))return ee.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?Sn(o.readTime):ee.min()}(e);return this.listener.J_(n,r)}Z_(e){const n={};n.database=Ud(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=Dd(u)?{documents:OC(i,u)}:{query:MC(i,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=d1(i,o.resumeToken);const h=Od(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(ee.min())>0){l.readTime=vc(i,o.snapshotVersion.toTimestamp());const h=Od(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=UC(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=Ud(this.serializer),n.removeTarget=e,this.K_(n)}}class NN extends x1{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}H_(e){return ue(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ue(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ue(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=LC(e.writeResults,e.commitTime),r=Sn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Ud(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>VC(this.serializer,r))};this.K_(n)}}/**
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
 */class RN{}class PN extends RN{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new q(O.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,Md(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new q(O.UNKNOWN,i.toString())})}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,Md(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(O.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function bN(t,e,n,r){return new PN(t,e,n,r)}class jN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Kn(n),this.aa=!1):W("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const ws="RemoteStore";class DN{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{Cs(this)&&(W(ws,"Restarting streams for network reachability change."),await async function(u){const h=te(u);h.Ea.add(4),await Aa(h),h.Va.set("Unknown"),h.Ea.delete(4),await ou(h)}(this))})}),this.Va=new jN(r,s)}}async function ou(t){if(Cs(t))for(const e of t.Ra)await e(!0)}async function Aa(t){for(const e of t.Ra)await e(!1)}function k1(t,e){const n=te(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),wp(n)?vp(n):Di(n).O_()&&_p(n,e))}function yp(t,e){const n=te(t),r=Di(n);n.Ia.delete(e),r.O_()&&A1(n,e),n.Ia.size===0&&(r.O_()?r.L_():Cs(n)&&n.Va.set("Unknown"))}function _p(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Di(t).Z_(e)}function A1(t,e){t.da.$e(e),Di(t).X_(e)}function vp(t){t.da=new AC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Di(t).start(),t.Va.ua()}function wp(t){return Cs(t)&&!Di(t).x_()&&t.Ia.size>0}function Cs(t){return te(t).Ea.size===0}function C1(t){t.da=void 0}async function VN(t){t.Va.set("Online")}async function LN(t){t.Ia.forEach((e,n)=>{_p(t,e)})}async function ON(t,e){C1(t),wp(t)?(t.Va.ha(e),vp(t)):t.Va.set("Unknown")}async function MN(t,e,n){if(t.Va.set("Online"),e instanceof h1&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ia.delete(l),s.da.removeTarget(l))}(t,e)}catch(r){W(ws,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ec(t,r)}else if(e instanceof Ll?t.da.Xe(e):e instanceof u1?t.da.st(e):t.da.tt(e),!n.isEqual(ee.min()))try{const r=await I1(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.da.Tt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ia.get(h);f&&i.Ia.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=i.Ia.get(u);if(!f)return;i.Ia.set(u,f.withResumeToken(it.EMPTY_BYTE_STRING,f.snapshotVersion)),A1(i,u);const g=new vr(f.target,u,h,f.sequenceNumber);_p(i,g)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){W(ws,"Failed to raise snapshot:",r),await Ec(t,r)}}async function Ec(t,e,n){if(!bi(e))throw e;t.Ea.add(1),await Aa(t),t.Va.set("Offline"),n||(n=()=>I1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W(ws,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await ou(t)})}function N1(t,e){return e().catch(n=>Ec(t,n,e))}async function au(t){const e=te(t),n=Fr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:rp;for(;FN(e);)try{const s=await vN(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,UN(e,s)}catch(s){await Ec(e,s)}R1(e)&&P1(e)}function FN(t){return Cs(t)&&t.Ta.length<10}function UN(t,e){t.Ta.push(e);const n=Fr(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function R1(t){return Cs(t)&&!Fr(t).x_()&&t.Ta.length>0}function P1(t){Fr(t).start()}async function zN(t){Fr(t).ra()}async function BN(t){const e=Fr(t);for(const n of t.Ta)e.ea(n.mutations)}async function $N(t,e,n){const r=t.Ta.shift(),s=up.from(r,e,n);await N1(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await au(t)}async function HN(t,e){e&&Fr(t).Y_&&await async function(r,s){if(function(o){return SC(o)&&o!==O.ABORTED}(s.code)){const i=r.Ta.shift();Fr(r).B_(),await N1(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await au(r)}}(t,e),R1(t)&&P1(t)}async function t_(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),W(ws,"RemoteStore received new credentials");const r=Cs(n);n.Ea.add(3),await Aa(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await ou(n)}async function qN(t,e){const n=te(t);e?(n.Ea.delete(2),await ou(n)):e||(n.Ea.add(2),await Aa(n),n.Va.set("Unknown"))}function Di(t){return t.ma||(t.ma=function(n,r,s){const i=te(n);return i.sa(),new CN(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:VN.bind(null,t),Yo:LN.bind(null,t),t_:ON.bind(null,t),J_:MN.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),wp(t)?vp(t):t.Va.set("Unknown")):(await t.ma.stop(),C1(t))})),t.ma}function Fr(t){return t.fa||(t.fa=function(n,r,s){const i=te(n);return i.sa(),new NN(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:zN.bind(null,t),t_:HN.bind(null,t),ta:BN.bind(null,t),na:$N.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await au(t)):(await t.fa.stop(),t.Ta.length>0&&(W(ws,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class Ep{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Bn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Ep(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tp(t,e){if(Kn("AsyncQueue",`${e}: ${t}`),bi(t))return new q(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ii{static emptySet(e){return new ii(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=yo(),this.sortedSet=new Re(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ii)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ii;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class n_{constructor(){this.ga=new Re(K.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Y(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Si{constructor(e,n,r,s,i,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Si(e,n,ii.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class WN{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class GN{constructor(){this.queries=r_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=te(n),i=s.queries;s.queries=r_(),i.forEach((o,l)=>{for(const u of l.ba)u.onError(r)})})(this,new q(O.ABORTED,"Firestore shutting down"))}}function r_(){return new As(t=>XE(t),Zc)}async function b1(t,e){const n=te(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.Da()&&(r=2):(i=new WN,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Tp(o,`Initialization of query '${Os(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.ba.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Ip(n)}async function j1(t,e){const n=te(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ba.indexOf(e);o>=0&&(i.ba.splice(o,1),i.ba.length===0?s=e.Da()?0:1:!i.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function KN(t,e){const n=te(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.ba)l.Fa(s)&&(r=!0);o.wa=s}}r&&Ip(n)}function QN(t,e,n){const r=te(t),s=r.queries.get(e);if(s)for(const i of s.ba)i.onError(n);r.queries.delete(e)}function Ip(t){t.Ca.forEach(e=>{e.next()})}var $d,s_;(s_=$d||($d={})).Ma="default",s_.Cache="cache";class D1{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Si(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Si.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==$d.Cache}}/**
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
 */class V1{constructor(e){this.key=e}}class L1{constructor(e){this.key=e}}class YN{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ae(),this.mutatedKeys=ae(),this.eu=JE(e),this.tu=new ii(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new n_,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,g)=>{const m=s.get(f),w=eu(this.query,g)?g:null,x=!!m&&this.mutatedKeys.has(m.key),R=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let b=!1;m&&w?m.data.isEqual(w.data)?x!==R&&(r.track({type:3,doc:w}),b=!0):this.su(m,w)||(r.track({type:2,doc:w}),b=!0,(u&&this.eu(w,u)>0||h&&this.eu(w,h)<0)&&(l=!0)):!m&&w?(r.track({type:0,doc:w}),b=!0):m&&!w&&(r.track({type:1,doc:m}),b=!0,(u||h)&&(l=!0)),b&&(w?(o=o.add(w),i=R?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Ss:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,g)=>function(w,x){const R=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y(20277,{Vt:b})}};return R(w)-R(x)}(f.type,g.type)||this.eu(f.doc,g.doc)),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],u=this.Ya.size===0&&this.current&&!s?1:0,h=u!==this.Xa;return this.Xa=u,o.length!==0||h?{snapshot:new Si(this.query,e.tu,i,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new n_,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=ae(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new L1(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new V1(r))}),n}cu(e){this.Za=e.ks,this.Ya=ae();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Si.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Sp="SyncEngine";class XN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class JN{constructor(e){this.key=e,this.hu=!1}}class ZN{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new As(l=>XE(l),Zc),this.Iu=new Map,this.Eu=new Set,this.Ru=new Re(K.comparator),this.Au=new Map,this.Vu=new fp,this.du={},this.mu=new Map,this.fu=Ii.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function eR(t,e,n=!0){const r=B1(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await O1(r,e,n,!0),s}async function tR(t,e){const n=B1(t);await O1(n,e,!0,!1)}async function O1(t,e,n,r){const s=await wN(t.localStore,In(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await nR(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&k1(t.remoteStore,s),l}async function nR(t,e,n,r,s){t.pu=(g,m,w)=>async function(R,b,S,I){let A=b.view.ru(S);A.Ss&&(A=await Yy(R.localStore,b.query,!1).then(({documents:_})=>b.view.ru(_,A)));const D=I&&I.targetChanges.get(b.targetId),N=I&&I.targetMismatches.get(b.targetId)!=null,V=b.view.applyChanges(A,R.isPrimaryClient,D,N);return o_(R,b.targetId,V.au),V.snapshot}(t,g,m,w);const i=await Yy(t.localStore,e,!0),o=new YN(e,i.ks),l=o.ru(i.documents),u=ka.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,u);o_(t,n,h.au);const f=new XN(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function rR(t,e,n){const r=te(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!Zc(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await zd(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&yp(r.remoteStore,s.targetId),Hd(r,s.targetId)}).catch(Pi)):(Hd(r,s.targetId),await zd(r.localStore,s.targetId,!0))}async function sR(t,e){const n=te(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),yp(n.remoteStore,r.targetId))}async function iR(t,e,n){const r=dR(t);try{const s=await function(o,l){const u=te(o),h=Te.now(),f=l.reduce((w,x)=>w.add(x.key),ae());let g,m;return u.persistence.runTransaction("Locally write mutations","readwrite",w=>{let x=Qn(),R=ae();return u.xs.getEntries(w,f).next(b=>{x=b,x.forEach((S,I)=>{I.isValidDocument()||(R=R.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(w,x)).next(b=>{g=b;const S=[];for(const I of l){const A=vC(I,g.get(I.key).overlayedDocument);A!=null&&S.push(new Wr(I.key,A,$E(A.value.mapValue),bt.exists(!0)))}return u.mutationQueue.addMutationBatch(w,h,S,l)}).next(b=>{m=b;const S=b.applyToLocalDocumentSet(g,R);return u.documentOverlayCache.saveOverlays(w,b.batchId,S)})}).then(()=>({batchId:m.batchId,changes:e1(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let h=o.du[o.currentUser.toKey()];h||(h=new Re(oe)),h=h.insert(l,u),o.du[o.currentUser.toKey()]=h}(r,s.batchId,n),await Ca(r,s.changes),await au(r.remoteStore)}catch(s){const i=Tp(s,"Failed to persist write");n.reject(i)}}async function M1(t,e){const n=te(t);try{const r=await yN(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(ue(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?ue(o.hu,14607):s.removedDocuments.size>0&&(ue(o.hu,42227),o.hu=!1))}),await Ca(n,r,e)}catch(r){await Pi(r)}}function i_(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=te(o);u.onlineState=l;let h=!1;u.queries.forEach((f,g)=>{for(const m of g.ba)m.va(l)&&(h=!0)}),h&&Ip(u)}(r.eventManager,e),s.length&&r.Pu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function oR(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Re(K.comparator);o=o.insert(i,dt.newNoDocument(i,ee.min()));const l=ae().add(i),u=new su(ee.min(),new Map,new Re(oe),o,l);await M1(r,u),r.Ru=r.Ru.remove(i),r.Au.delete(e),xp(r)}else await zd(r.localStore,e,!1).then(()=>Hd(r,e,n)).catch(Pi)}async function aR(t,e){const n=te(t),r=e.batch.batchId;try{const s=await gN(n.localStore,e);U1(n,r,null),F1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ca(n,s)}catch(s){await Pi(s)}}async function lR(t,e,n){const r=te(t);try{const s=await function(o,l){const u=te(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(g=>(ue(g!==null,37113),f=g.keys(),u.mutationQueue.removeMutationBatch(h,g))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);U1(r,e,n),F1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ca(r,s)}catch(s){await Pi(s)}}function F1(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function U1(t,e,n){const r=te(t);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function Hd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||z1(t,r)})}function z1(t,e){t.Eu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(yp(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),xp(t))}function o_(t,e,n){for(const r of n)r instanceof V1?(t.Vu.addReference(r.key,e),cR(t,r)):r instanceof L1?(W(Sp,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||z1(t,r.key)):Y(19791,{wu:r})}function cR(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Eu.has(r)||(W(Sp,"New document in limbo: "+n),t.Eu.add(r),xp(t))}function xp(t){for(;t.Eu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new K(ye.fromString(e)),r=t.fu.next();t.Au.set(r,new JN(n)),t.Ru=t.Ru.insert(n,r),k1(t.remoteStore,new vr(In(lp(n.path)),r,"TargetPurposeLimboResolution",Yc.ce))}}async function Ca(t,e,n){const r=te(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const g=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(h){s.push(h);const g=mp.Es(u.targetId,h);i.push(g)}}))}),await Promise.all(o),r.Pu.J_(s),await async function(u,h){const f=te(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>M.forEach(h,m=>M.forEach(m.Ts,w=>f.persistence.referenceDelegate.addReference(g,m.targetId,w)).next(()=>M.forEach(m.Is,w=>f.persistence.referenceDelegate.removeReference(g,m.targetId,w)))))}catch(g){if(!bi(g))throw g;W(gp,"Failed to update sequence numbers: "+g)}for(const g of h){const m=g.targetId;if(!g.fromCache){const w=f.vs.get(m),x=w.snapshotVersion,R=w.withLastLimboFreeSnapshotVersion(x);f.vs=f.vs.insert(m,R)}}}(r.localStore,i))}async function uR(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){W(Sp,"User change. New user:",e.toKey());const r=await T1(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(l=>{l.forEach(u=>{u.reject(new q(O.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ca(n,r.Ns)}}function hR(t,e){const n=te(t),r=n.Au.get(e);if(r&&r.hu)return ae().add(r.key);{let s=ae();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const l=n.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function B1(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=M1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=hR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=oR.bind(null,e),e.Pu.J_=KN.bind(null,e.eventManager),e.Pu.yu=QN.bind(null,e.eventManager),e}function dR(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=aR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=lR.bind(null,e),e}class Tc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=iu(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return mN(this.persistence,new dN,e.initialUser,this.serializer)}Cu(e){return new E1(pp.Vi,this.serializer)}Du(e){return new TN}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Tc.provider={build:()=>new Tc};class fR extends Tc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){ue(this.persistence.referenceDelegate instanceof wc,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new XC(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?xt.withCacheSize(this.cacheSizeBytes):xt.DEFAULT;return new E1(r=>wc.Vi(r,n),this.serializer)}}class qd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>i_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=uR.bind(null,this.syncEngine),await qN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new GN}()}createDatastore(e){const n=iu(e.databaseInfo.databaseId),r=AN(e.databaseInfo);return bN(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new DN(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>i_(this.syncEngine,n,0),function(){return Zy.v()?new Zy:new IN}())}createSyncEngine(e,n){return function(s,i,o,l,u,h,f){const g=new ZN(s,i,o,l,u,h);return f&&(g.gu=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=te(s);W(ws,"RemoteStore shutting down."),i.Ea.add(5),await Aa(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}qd.provider={build:()=>new qd};/**
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
 */class $1{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Kn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Ur="FirestoreClient";class pR{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=ut.UNAUTHENTICATED,this.clientId=np.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{W(Ur,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W(Ur,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Bn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Tp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Sh(t,e){t.asyncQueue.verifyOperationInProgress(),W(Ur,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await T1(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function a_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await mR(t);W(Ur,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>t_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>t_(e.remoteStore,s)),t._onlineComponents=e}async function mR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W(Ur,"Using user provided OfflineComponentProvider");try{await Sh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===O.FAILED_PRECONDITION||s.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;vi("Error using user provided cache. Falling back to memory cache: "+n),await Sh(t,new Tc)}}else W(Ur,"Using default OfflineComponentProvider"),await Sh(t,new fR(void 0));return t._offlineComponents}async function H1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W(Ur,"Using user provided OnlineComponentProvider"),await a_(t,t._uninitializedComponentsProvider._online)):(W(Ur,"Using default OnlineComponentProvider"),await a_(t,new qd))),t._onlineComponents}function gR(t){return H1(t).then(e=>e.syncEngine)}async function q1(t){const e=await H1(t),n=e.eventManager;return n.onListen=eR.bind(null,e.syncEngine),n.onUnlisten=rR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=tR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=sR.bind(null,e.syncEngine),n}function yR(t,e,n={}){const r=new Bn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,h){const f=new $1({next:m=>{f.Nu(),o.enqueueAndForget(()=>j1(i,g));const w=m.docs.has(l);!w&&m.fromCache?h.reject(new q(O.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&m.fromCache&&u&&u.source==="server"?h.reject(new q(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),g=new D1(lp(l.path),f,{includeMetadataChanges:!0,Ka:!0});return b1(i,g)}(await q1(t),t.asyncQueue,e,n,r)),r.promise}function _R(t,e,n={}){const r=new Bn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,h){const f=new $1({next:m=>{f.Nu(),o.enqueueAndForget(()=>j1(i,g)),m.fromCache&&u.source==="server"?h.reject(new q(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),g=new D1(l,f,{includeMetadataChanges:!0,Ka:!0});return b1(i,g)}(await q1(t),t.asyncQueue,e,n,r)),r.promise}function vR(t,e){const n=new Bn;return t.asyncQueue.enqueueAndForget(async()=>iR(await gR(t),e,n)),n.promise}/**
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
 */function W1(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const wR="ComponentProvider",l_=new Map;function ER(t,e,n,r,s){return new UA(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,W1(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const G1="firestore.googleapis.com",c_=!0;class u_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new q(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=G1,this.ssl=c_}else this.host=e.host,this.ssl=e.ssl??c_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=w1;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<QC)throw new q(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}NA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=W1(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new q(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new q(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new q(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class lu{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new u_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new u_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new vA;switch(r.type){case"firstParty":return new IA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=l_.get(n);r&&(W(wR,"Removing Datastore"),l_.delete(n),r.terminate())}(this),Promise.resolve()}}function TR(t,e,n,r={}){var h;t=An(t,lu);const s=Hr(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&(Yf(`https://${l}`),Xf("Firestore",!0)),i.host!==G1&&i.host!==l&&vi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!ys(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,g;if(typeof r.mockUserToken=="string")f=r.mockUserToken,g=ut.MOCK_USER;else{f=_E(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new q(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new ut(m)}t._authCredentials=new wA(new PE(f,g))}}/**
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
 */class Ns{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ns(this.firestore,e,this._query)}}class $e{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $e(this.firestore,e,this._key)}toJSON(){return{type:$e._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Sa(n,$e._jsonSchema))return new $e(e,r||null,new K(ye.fromString(n.referencePath)))}}$e._jsonSchemaVersion="firestore/documentReference/1.0",$e._jsonSchema={type:Be("string",$e._jsonSchemaVersion),referencePath:Be("string")};class Pr extends Ns{constructor(e,n,r){super(e,n,lp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $e(this.firestore,null,new K(e))}withConverter(e){return new Pr(this.firestore,e,this._path)}}function Ze(t,e,...n){if(t=Ne(t),bE("collection","path",e),t instanceof lu){const r=ye.fromString(e,...n);return Iy(r),new Pr(t,null,r)}{if(!(t instanceof $e||t instanceof Pr))throw new q(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ye.fromString(e,...n));return Iy(r),new Pr(t.firestore,null,r)}}function ge(t,e,...n){if(t=Ne(t),arguments.length===1&&(e=np.newId()),bE("doc","path",e),t instanceof lu){const r=ye.fromString(e,...n);return Ty(r),new $e(t,null,new K(r))}{if(!(t instanceof $e||t instanceof Pr))throw new q(O.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ye.fromString(e,...n));return Ty(r),new $e(t.firestore,t instanceof Pr?t.converter:null,new K(r))}}/**
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
 */const h_="AsyncQueue";class d_{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new S1(this,"async_queue_retry"),this._c=()=>{const r=Ih();r&&W(h_,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Ih();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Ih();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Bn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!bi(e))throw e;W(h_,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Kn("INTERNAL UNHANDLED ERROR: ",f_(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Ep.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&Y(47125,{Pc:f_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function f_(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Rs extends lu{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new d_,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new d_(e),this._firestoreClient=void 0,await e}}}function IR(t,e){const n=typeof t=="object"?t:ep(),r=typeof t=="string"?t:mc,s=Kc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=mE("firestore");i&&TR(s,...i)}return s}function cu(t){if(t._terminated)throw new q(O.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||SR(t),t._firestoreClient}function SR(t){var r,s,i,o;const e=t._freezeSettings(),n=ER(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new pR(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(t._componentsProvider))}/**
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
 */class Qt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qt(it.fromBase64String(e))}catch(n){throw new q(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Qt(it.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Qt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Sa(e,Qt._jsonSchema))return Qt.fromBase64String(e.bytes)}}Qt._jsonSchemaVersion="firestore/bytes/1.0",Qt._jsonSchema={type:Be("string",Qt._jsonSchemaVersion),bytes:Be("string")};/**
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
 */class uu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class hu{constructor(e){this._methodName=e}}/**
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
 */class xn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:xn._jsonSchemaVersion}}static fromJSON(e){if(Sa(e,xn._jsonSchema))return new xn(e.latitude,e.longitude)}}xn._jsonSchemaVersion="firestore/geoPoint/1.0",xn._jsonSchema={type:Be("string",xn._jsonSchemaVersion),latitude:Be("number"),longitude:Be("number")};/**
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
 */class ln{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:ln._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Sa(e,ln._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new ln(e.vectorValues);throw new q(O.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ln._jsonSchemaVersion="firestore/vectorValue/1.0",ln._jsonSchema={type:Be("string",ln._jsonSchemaVersion),vectorValues:Be("object")};/**
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
 */const xR=/^__.*__$/;class kR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Wr(e,this.data,this.fieldMask,n,this.fieldTransforms):new xa(e,this.data,n,this.fieldTransforms)}}class K1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Wr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Q1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y(40011,{dataSource:t})}}class kp{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new kp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Ic(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(Q1(this.dataSource)&&xR.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class AR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||iu(e)}createContext(e,n,r,s=!1){return new kp({dataSource:e,methodName:n,targetDoc:r,path:nt.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function du(t){const e=t._freezeSettings(),n=iu(t._databaseId);return new AR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Y1(t,e,n,r,s,i={}){const o=t.createContext(i.merge||i.mergeFields?2:0,e,n,s);Cp("Data must be an object, but it was:",o,r);const l=Z1(r,o);let u,h;if(i.merge)u=new Mt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const g of i.mergeFields){const m=Es(e,g,n);if(!o.contains(m))throw new q(O.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);n0(f,m)||f.push(m)}u=new Mt(f),h=o.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,h=o.fieldTransforms;return new kR(new At(l),u,h)}class fu extends hu{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof fu}}class Ap extends hu{_toFieldTransform(e){return new mC(e.path,new aa)}isEqual(e){return e instanceof Ap}}function X1(t,e,n,r){const s=t.createContext(1,e,n);Cp("Data must be an object, but it was:",s,r);const i=[],o=At.empty();qr(r,(u,h)=>{const f=t0(e,u,n);h=Ne(h);const g=s.childContextForFieldPath(f);if(h instanceof fu)i.push(f);else{const m=Na(h,g);m!=null&&(i.push(f),o.set(f,m))}});const l=new Mt(i);return new K1(o,l,s.fieldTransforms)}function J1(t,e,n,r,s,i){const o=t.createContext(1,e,n),l=[Es(e,r,n)],u=[s];if(i.length%2!=0)throw new q(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(Es(e,i[m])),u.push(i[m+1]);const h=[],f=At.empty();for(let m=l.length-1;m>=0;--m)if(!n0(h,l[m])){const w=l[m];let x=u[m];x=Ne(x);const R=o.childContextForFieldPath(w);if(x instanceof fu)h.push(w);else{const b=Na(x,R);b!=null&&(h.push(w),f.set(w,b))}}const g=new Mt(h);return new K1(f,g,o.fieldTransforms)}function CR(t,e,n,r=!1){return Na(n,t.createContext(r?4:3,e))}function Na(t,e){if(e0(t=Ne(t)))return Cp("Unsupported field value:",e,t),Z1(t,e);if(t instanceof hu)return function(r,s){if(!Q1(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=Na(l,s.childContextForArray(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ne(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return dC(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Te.fromDate(r);return{timestampValue:vc(s.serializer,i)}}if(r instanceof Te){const i=new Te(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:vc(s.serializer,i)}}if(r instanceof xn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Qt)return{bytesValue:d1(s.serializer,r._byteString)};if(r instanceof $e){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:dp(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ln)return function(o,l){const u=o instanceof ln?o.toArray():o;return{mapValue:{fields:{[zE]:{stringValue:BE},[gc]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw l.createError("VectorValues must only contain numeric values.");return cp(l.serializer,f)})}}}}}}(r,s);if(v1(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${Qc(r)}`)}(t,e)}function Z1(t,e){const n={};return VE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):qr(t,(r,s)=>{const i=Na(s,e.childContextForField(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function e0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Te||t instanceof xn||t instanceof Qt||t instanceof $e||t instanceof hu||t instanceof ln||v1(t))}function Cp(t,e,n){if(!e0(n)||!jE(n)){const r=Qc(n);throw r==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function Es(t,e,n){if((e=Ne(e))instanceof uu)return e._internalPath;if(typeof e=="string")return t0(t,e);throw Ic("Field path arguments must be of type string or ",t,!1,void 0,n)}const NR=new RegExp("[~\\*/\\[\\]]");function t0(t,e,n){if(e.search(NR)>=0)throw Ic(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new uu(...e.split("."))._internalPath}catch{throw Ic(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ic(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new q(O.INVALID_ARGUMENT,l+t+u)}function n0(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class RR{convertValue(e,n="none"){switch(Mr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Or(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Y(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return qr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[gc].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>Le(o.doubleValue));return new ln(n)}convertGeoPoint(e){return new xn(Le(e.latitude),Le(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Jc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ra(e));default:return null}}convertTimestamp(e){const n=Lr(e);return new Te(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ye.fromString(e);ue(_1(r),9688,{name:e});const s=new sa(r.get(1),r.get(3)),i=new K(r.popFirst(5));return s.isEqual(n)||Kn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class r0 extends RR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new $e(this.firestore,null,n)}}function Ft(){return new Ap("serverTimestamp")}const p_="@firebase/firestore",m_="4.10.0";/**
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
 */class s0{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new $e(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new PR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Es("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class PR extends s0{data(){return super.data()}}/**
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
 */function bR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Np{}class i0 extends Np{}function Yn(t,e,...n){let r=[];e instanceof Np&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof Rp).length,l=i.filter(u=>u instanceof pu).length;if(o>1||o>0&&l>0)throw new q(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class pu extends i0{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new pu(e,n,r)}_apply(e){const n=this._parse(e);return o0(e._query,n),new Ns(e.firestore,e.converter,Vd(e._query,n))}_parse(e){const n=du(e.firestore);return function(i,o,l,u,h,f,g){let m;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new q(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){y_(g,f);const x=[];for(const R of g)x.push(g_(u,i,R));m={arrayValue:{values:x}}}else m=g_(u,i,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||y_(g,f),m=CR(l,o,g,f==="in"||f==="not-in");return ze.create(h,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function jR(t,e,n){const r=e,s=Es("where",t);return pu._create(s,r,n)}class Rp extends Np{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Rp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:hn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)o0(o,u),o=Vd(o,u)}(e._query,n),new Ns(e.firestore,e.converter,Vd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Pp extends i0{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Pp(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new q(O.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new q(O.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new oa(i,o)}(e._query,this._field,this._direction);return new Ns(e.firestore,e.converter,sC(e._query,n))}}function Gr(t,e="asc"){const n=e,r=Es("orderBy",t);return Pp._create(r,n)}function g_(t,e,n){if(typeof(n=Ne(n))=="string"){if(n==="")throw new q(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!YE(e)&&n.indexOf("/")!==-1)throw new q(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ye.fromString(n));if(!K.isDocumentKey(r))throw new q(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Py(t,new K(r))}if(n instanceof $e)return Py(t,n._key);throw new q(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qc(n)}.`)}function y_(t,e){if(!Array.isArray(t)||t.length===0)throw new q(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function o0(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new q(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new q(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function a0(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class vo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class cs extends s0{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ol(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Es("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new q(O.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=cs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}cs._jsonSchemaVersion="firestore/documentSnapshot/1.0",cs._jsonSchema={type:Be("string",cs._jsonSchemaVersion),bundleSource:Be("string","DocumentSnapshot"),bundleName:Be("string"),bundle:Be("string")};class Ol extends cs{data(e={}){return super.data(e)}}class oi{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new vo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ol(this._firestore,this._userDataWriter,r.key,r,new vo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new Ol(s._firestore,s._userDataWriter,l.doc.key,l.doc,new vo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Ol(s._firestore,s._userDataWriter,l.doc.key,l.doc,new vo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:DR(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new q(O.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=oi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=np.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function DR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y(61501,{type:t})}}/**
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
 */oi._jsonSchemaVersion="firestore/querySnapshot/1.0",oi._jsonSchema={type:Be("string",oi._jsonSchemaVersion),bundleSource:Be("string","QuerySnapshot"),bundleName:Be("string"),bundle:Be("string")};/**
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
 */class VR{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=du(e)}set(e,n,r){this._verifyNotCommitted();const s=xh(e,this._firestore),i=a0(s.converter,n,r),o=Y1(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,bt.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=xh(e,this._firestore);let o;return o=typeof(n=Ne(n))=="string"||n instanceof uu?J1(this._dataReader,"WriteBatch.update",i._key,n,r,s):X1(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,bt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=xh(e,this._firestore);return this._mutations=this._mutations.concat(new ru(n._key,bt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new q(O.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function xh(t,e){if((t=Ne(t)).firestore!==e)throw new q(O.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */function mu(t){t=An(t,$e);const e=An(t.firestore,Rs),n=cu(e);return yR(n,t._key).then(r=>LR(e,t,r))}function Xn(t){t=An(t,Ns);const e=An(t.firestore,Rs),n=cu(e),r=new r0(e);return bR(t._query),_R(n,t._query).then(s=>new oi(e,r,t,s))}function Vi(t,e,n,...r){t=An(t,$e);const s=An(t.firestore,Rs),i=du(s);let o;return o=typeof(e=Ne(e))=="string"||e instanceof uu?J1(i,"updateDoc",t._key,e,n,r):X1(i,"updateDoc",t._key,e),gu(s,[o.toMutation(t._key,bt.exists(!0))])}function Ps(t){return gu(An(t.firestore,Rs),[new ru(t._key,bt.none())])}function Li(t,e){const n=An(t.firestore,Rs),r=ge(t),s=a0(t.converter,e),i=du(t.firestore);return gu(n,[Y1(i,"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,bt.exists(!1))]).then(()=>r)}function gu(t,e){const n=cu(t);return vR(n,e)}function LR(t,e,n){const r=n.docs.get(e._key),s=new r0(t);return new cs(t,s,e._key,r,new vo(n.hasPendingWrites,n.fromCache),e.converter)}function l0(t){return t=An(t,Rs),cu(t),new VR(t,e=>gu(t,e))}(function(e,n=!0){_A(ks),_s(new Dr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Rs(new EA(r.getProvider("auth-internal")),new SA(o,r.getProvider("app-check-internal")),zA(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Tn(p_,m_,e),Tn(p_,m_,"esm2020")})();/**
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
 */const c0="firebasestorage.googleapis.com",u0="storageBucket",OR=2*60*1e3,MR=10*60*1e3;/**
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
 */class Ve extends Rn{constructor(e,n,r=0){super(kh(e),`Firebase Storage: ${n} (${kh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ve.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return kh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var De;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(De||(De={}));function kh(t){return"storage/"+t}function bp(){const t="An unknown error occurred, please check the error payload for server response.";return new Ve(De.UNKNOWN,t)}function FR(t){return new Ve(De.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function UR(t){return new Ve(De.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function zR(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ve(De.UNAUTHENTICATED,t)}function BR(){return new Ve(De.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function $R(t){return new Ve(De.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function HR(){return new Ve(De.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function qR(){return new Ve(De.CANCELED,"User canceled the upload/download.")}function WR(t){return new Ve(De.INVALID_URL,"Invalid URL '"+t+"'.")}function GR(t){return new Ve(De.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function KR(){return new Ve(De.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+u0+"' property when initializing the app?")}function QR(){return new Ve(De.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function YR(){return new Ve(De.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function XR(t){return new Ve(De.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Wd(t){return new Ve(De.INVALID_ARGUMENT,t)}function h0(){return new Ve(De.APP_DELETED,"The Firebase app was deleted.")}function JR(t){return new Ve(De.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Do(t,e){return new Ve(De.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function uo(t){throw new Ve(De.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Ut{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ut.makeFromUrl(e,n)}catch{return new Ut(e,"")}if(r.path==="")return r;throw GR(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function h(D){D.path_=decodeURIComponent(D.path)}const f="v[A-Za-z0-9_]+",g=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",w=new RegExp(`^https?://${g}/${f}/b/${s}/o${m}`,"i"),x={bucket:1,path:3},R=n===c0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",S=new RegExp(`^https?://${R}/${s}/${b}`,"i"),A=[{regex:l,indices:u,postModify:i},{regex:w,indices:x,postModify:h},{regex:S,indices:{bucket:1,path:2},postModify:h}];for(let D=0;D<A.length;D++){const N=A[D],V=N.regex.exec(e);if(V){const _=V[N.indices.bucket];let y=V[N.indices.path];y||(y=""),r=new Ut(_,y),N.postModify(r);break}}if(r==null)throw WR(e);return r}}class ZR{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function e2(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function u(){return l===2}let h=!1;function f(...b){h||(h=!0,e.apply(null,b))}function g(b){s=setTimeout(()=>{s=null,t(w,u())},b)}function m(){i&&clearTimeout(i)}function w(b,...S){if(h){m();return}if(b){m(),f.call(null,b,...S);return}if(u()||o){m(),f.call(null,b,...S);return}r<64&&(r*=2);let A;l===1?(l=2,A=0):A=(r+Math.random())*1e3,g(A)}let x=!1;function R(b){x||(x=!0,m(),!h&&(s!==null?(b||(l=2),clearTimeout(s),g(0)):b||(l=1)))}return g(0),i=setTimeout(()=>{o=!0,R(!0)},n),R}function t2(t){t(!1)}/**
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
 */function n2(t){return t!==void 0}function r2(t){return typeof t=="object"&&!Array.isArray(t)}function jp(t){return typeof t=="string"||t instanceof String}function __(t){return Dp()&&t instanceof Blob}function Dp(){return typeof Blob<"u"}function v_(t,e,n,r){if(r<e)throw Wd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Wd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Vp(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function d0(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var us;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(us||(us={}));/**
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
 */function s2(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class i2{constructor(e,n,r,s,i,o,l,u,h,f,g,m=!0,w=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=g,this.retry=m,this.isUsingEmulator=w,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((x,R)=>{this.resolve_=x,this.reject_=R,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new pl(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const u=l.loaded,h=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===us.NO_ERROR,u=i.getStatus();if(!l||s2(u,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===us.ABORT;r(!1,new pl(!1,null,f));return}const h=this.successCodes_.indexOf(u)!==-1;r(!0,new pl(h,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());n2(u)?i(u):i()}catch(u){o(u)}else if(l!==null){const u=bp();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(s.canceled){const u=this.appDelete_?h0():qR();o(u)}else{const u=HR();o(u)}};this.canceled_?n(!1,new pl(!1,null,!0)):this.backoffId_=e2(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&t2(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class pl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function o2(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function a2(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function l2(t,e){e&&(t["X-Firebase-GMPID"]=e)}function c2(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function u2(t,e,n,r,s,i,o=!0,l=!1){const u=d0(t.urlParams),h=t.url+u,f=Object.assign({},t.headers);return l2(f,e),o2(f,n),a2(f,i),c2(f,r),new i2(h,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,l)}/**
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
 */function h2(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function d2(...t){const e=h2();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Dp())return new Blob(t);throw new Ve(De.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function f2(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function p2(t){if(typeof atob>"u")throw XR("base-64");return atob(t)}/**
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
 */const vn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ah{constructor(e,n){this.data=e,this.contentType=n||null}}function m2(t,e){switch(t){case vn.RAW:return new Ah(f0(e));case vn.BASE64:case vn.BASE64URL:return new Ah(p0(t,e));case vn.DATA_URL:return new Ah(y2(e),_2(e))}throw bp()}function f0(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function g2(t){let e;try{e=decodeURIComponent(t)}catch{throw Do(vn.DATA_URL,"Malformed data URL.")}return f0(e)}function p0(t,e){switch(t){case vn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Do(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case vn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Do(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=p2(e)}catch(s){throw s.message.includes("polyfill")?s:Do(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class m0{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Do(vn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=v2(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function y2(t){const e=new m0(t);return e.base64?p0(vn.BASE64,e.rest):g2(e.rest)}function _2(t){return new m0(t).contentType}function v2(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class fr{constructor(e,n){let r=0,s="";__(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(__(this.data_)){const r=this.data_,s=f2(r,e,n);return s===null?null:new fr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new fr(r,!0)}}static getBlob(...e){if(Dp()){const n=e.map(r=>r instanceof fr?r.data_:r);return new fr(d2.apply(null,n))}else{const n=e.map(o=>jp(o)?m2(vn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new fr(s,!0)}}uploadData(){return this.data_}}/**
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
 */function g0(t){let e;try{e=JSON.parse(t)}catch{return null}return r2(e)?e:null}/**
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
 */function w2(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function E2(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function y0(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function T2(t,e){return e}class _t{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||T2}}let ml=null;function I2(t){return!jp(t)||t.length<2?t:y0(t)}function _0(){if(ml)return ml;const t=[];t.push(new _t("bucket")),t.push(new _t("generation")),t.push(new _t("metageneration")),t.push(new _t("name","fullPath",!0));function e(i,o){return I2(o)}const n=new _t("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new _t("size");return s.xform=r,t.push(s),t.push(new _t("timeCreated")),t.push(new _t("updated")),t.push(new _t("md5Hash",null,!0)),t.push(new _t("cacheControl",null,!0)),t.push(new _t("contentDisposition",null,!0)),t.push(new _t("contentEncoding",null,!0)),t.push(new _t("contentLanguage",null,!0)),t.push(new _t("contentType",null,!0)),t.push(new _t("metadata","customMetadata",!0)),ml=t,ml}function S2(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Ut(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function x2(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return S2(r,t),r}function v0(t,e,n){const r=g0(e);return r===null?null:x2(t,r,n)}function k2(t,e,n,r){const s=g0(e);if(s===null||!jp(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(h=>{const f=t.bucket,g=t.fullPath,m="/b/"+o(f)+"/o/"+o(g),w=Vp(m,n,r),x=d0({alt:"media",token:h});return w+x})[0]}function A2(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class w0{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function E0(t){if(!t)throw bp()}function C2(t,e){function n(r,s){const i=v0(t,s,e);return E0(i!==null),i}return n}function N2(t,e){function n(r,s){const i=v0(t,s,e);return E0(i!==null),k2(i,s,t.host,t._protocol)}return n}function T0(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=BR():s=zR():n.getStatus()===402?s=UR(t.bucket):n.getStatus()===403?s=$R(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function R2(t){const e=T0(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=FR(t.path)),i.serverResponse=s.serverResponse,i}return n}function P2(t,e,n){const r=e.fullServerUrl(),s=Vp(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new w0(s,i,N2(t,n),o);return l.errorHandler=R2(e),l}function b2(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function j2(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=b2(null,e)),r}function D2(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let A="";for(let D=0;D<2;D++)A=A+Math.random().toString().slice(2);return A}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const h=j2(e,r,s),f=A2(h,n),g="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+u+`\r
Content-Type: `+h.contentType+`\r
\r
`,m=`\r
--`+u+"--",w=fr.getBlob(g,r,m);if(w===null)throw QR();const x={name:h.fullPath},R=Vp(i,t.host,t._protocol),b="POST",S=t.maxUploadRetryTime,I=new w0(R,b,C2(t,n),S);return I.urlParams=x,I.headers=o,I.body=w.uploadData(),I.errorHandler=T0(e),I}class V2{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=us.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=us.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=us.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s,i){if(this.sent_)throw uo("cannot .send() more than once");if(Hr(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw uo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw uo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw uo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw uo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class L2 extends V2{initXhr(){this.xhr_.responseType="text"}}function I0(){return new L2}/**
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
 */class Ts{constructor(e,n){this._service=e,n instanceof Ut?this._location=n:this._location=Ut.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ts(e,n)}get root(){const e=new Ut(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return y0(this._location.path)}get storage(){return this._service}get parent(){const e=w2(this._location.path);if(e===null)return null;const n=new Ut(this._location.bucket,e);return new Ts(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw JR(e)}}function O2(t,e,n){t._throwIfRoot("uploadBytes");const r=D2(t.storage,t._location,_0(),new fr(e,!0),n);return t.storage.makeRequestWithTokens(r,I0).then(s=>({metadata:s,ref:t}))}function M2(t){t._throwIfRoot("getDownloadURL");const e=P2(t.storage,t._location,_0());return t.storage.makeRequestWithTokens(e,I0).then(n=>{if(n===null)throw YR();return n})}function F2(t,e){const n=E2(t._location.path,e),r=new Ut(t._location.bucket,n);return new Ts(t.storage,r)}/**
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
 */function U2(t){return/^[A-Za-z]+:\/\//.test(t)}function z2(t,e){return new Ts(t,e)}function S0(t,e){if(t instanceof Lp){const n=t;if(n._bucket==null)throw KR();const r=new Ts(n,n._bucket);return e!=null?S0(r,e):r}else return e!==void 0?F2(t,e):t}function B2(t,e){if(e&&U2(e)){if(t instanceof Lp)return z2(t,e);throw Wd("To use ref(service, url), the first argument must be a Storage instance.")}else return S0(t,e)}function w_(t,e){const n=e==null?void 0:e[u0];return n==null?null:Ut.makeFromBucketSpec(n,t)}function $2(t,e,n,r={}){t.host=`${e}:${n}`;const s=Hr(e);s&&(Yf(`https://${t.host}/b`),Xf("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:_E(i,t.app.options.projectId))}class Lp{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=c0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=OR,this._maxUploadRetryTime=MR,this._requests=new Set,s!=null?this._bucket=Ut.makeFromBucketSpec(s,this._host):this._bucket=w_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ut.makeFromBucketSpec(this._url,e):this._bucket=w_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){v_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){v_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Kt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ts(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new ZR(h0());{const o=u2(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const E_="@firebase/storage",T_="0.14.0";/**
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
 */const x0="storage";function ua(t,e,n){return t=Ne(t),O2(t,e,n)}function ha(t){return t=Ne(t),M2(t)}function da(t,e){return t=Ne(t),B2(t,e)}function H2(t=ep(),e){t=Ne(t);const r=Kc(t,x0).getImmediate({identifier:e}),s=mE("storage");return s&&q2(r,...s),r}function q2(t,e,n,r={}){$2(t,e,n,r)}function W2(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Lp(n,r,s,e,ks)}function G2(){_s(new Dr(x0,W2,"PUBLIC").setMultipleInstances(!0)),Tn(E_,T_,""),Tn(E_,T_,"esm2020")}G2();var K2="firebase",Q2="12.8.0";/**
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
 */Tn(K2,Q2,"app");function k0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Y2=k0,A0=new Ta("auth","Firebase",k0());/**
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
 */const Sc=new Jf("@firebase/auth");function X2(t,...e){Sc.logLevel<=ie.WARN&&Sc.warn(`Auth (${ks}): ${t}`,...e)}function Ml(t,...e){Sc.logLevel<=ie.ERROR&&Sc.error(`Auth (${ks}): ${t}`,...e)}/**
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
 */function Nn(t,...e){throw Mp(t,...e)}function cn(t,...e){return Mp(t,...e)}function Op(t,e,n){const r={...Y2(),[e]:n};return new Ta("auth","Firebase",r).create(e,{appName:t.name})}function hs(t){return Op(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function J2(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Nn(t,"argument-error"),Op(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Mp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return A0.create(t,...e)}function J(t,e,...n){if(!t)throw Mp(e,...n)}function Fn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ml(e),new Error(e)}function Jn(t,e){t||Fn(e)}/**
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
 */function Gd(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function Z2(){return I_()==="http:"||I_()==="https:"}function I_(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function eP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Z2()||Xx()||"connection"in navigator)?navigator.onLine:!0}function tP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ra{constructor(e,n){this.shortDelay=e,this.longDelay=n,Jn(n>e,"Short delay should be less than long delay!"),this.isMobile=Kx()||Jx()}get(){return eP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Fp(t,e){Jn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class C0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const nP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const rP=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],sP=new Ra(3e4,6e4);function Up(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Oi(t,e,n,r,s={}){return N0(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Ia({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:u,...i};return Yx()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&Hr(t.emulatorConfig.host)&&(h.credentials="include"),C0.fetch()(await R0(t,t.config.apiHost,n,l),h)})}async function N0(t,e,n){t._canInitEmulator=!1;const r={...nP,...e};try{const s=new oP(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw gl(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw gl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw gl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw gl(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Op(t,f,h);Nn(t,f)}}catch(s){if(s instanceof Rn)throw s;Nn(t,"network-request-failed",{message:String(s)})}}async function iP(t,e,n,r,s={}){const i=await Oi(t,e,n,r,s);return"mfaPendingCredential"in i&&Nn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function R0(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Fp(t.config,s):`${t.config.apiScheme}://${s}`;return rP.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class oP{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(cn(this.auth,"network-request-failed")),sP.get())})}}function gl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=cn(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function aP(t,e){return Oi(t,"POST","/v1/accounts:delete",e)}async function xc(t,e){return Oi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Vo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lP(t,e=!1){const n=Ne(t),r=await n.getIdToken(e),s=zp(r);J(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Vo(Ch(s.auth_time)),issuedAtTime:Vo(Ch(s.iat)),expirationTime:Vo(Ch(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ch(t){return Number(t)*1e3}function zp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ml("JWT malformed, contained fewer than 3 sections"),null;try{const s=fE(n);return s?JSON.parse(s):(Ml("Failed to decode base64 JWT payload"),null)}catch(s){return Ml("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function S_(t){const e=zp(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function fa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Rn&&cP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function cP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class uP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Kd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vo(this.lastLoginAt),this.creationTime=Vo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function kc(t){var g;const e=t.auth,n=await t.getIdToken(),r=await fa(t,xc(e,{idToken:n}));J(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(g=s.providerUserInfo)!=null&&g.length?P0(s.providerUserInfo):[],o=dP(t.providerData,i),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),h=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Kd(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function hP(t){const e=Ne(t);await kc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dP(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function P0(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function fP(t,e){const n=await N0(t,{},async()=>{const r=Ia({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await R0(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Hr(t.emulatorConfig.host)&&(u.credentials="include"),C0.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function pP(t,e){return Oi(t,"POST","/v2/accounts:revokeToken",Up(t,e))}/**
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
 */class ai{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):S_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){J(e.length!==0,"internal-error");const n=S_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await fP(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ai;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(J(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(J(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ai,this.toJSON())}_performRefresh(){return Fn("not implemented")}}/**
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
 */function lr(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class sn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new uP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Kd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await fa(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return lP(this,e)}reload(){return hP(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new sn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await kc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Kt(this.auth.app))return Promise.reject(hs(this.auth));const e=await this.getIdToken();return await fa(this,aP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:g,emailVerified:m,isAnonymous:w,providerData:x,stsTokenManager:R}=n;J(g&&R,e,"internal-error");const b=ai.fromJSON(this.name,R);J(typeof g=="string",e,"internal-error"),lr(r,e.name),lr(s,e.name),J(typeof m=="boolean",e,"internal-error"),J(typeof w=="boolean",e,"internal-error"),lr(i,e.name),lr(o,e.name),lr(l,e.name),lr(u,e.name),lr(h,e.name),lr(f,e.name);const S=new sn({uid:g,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:w,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:b,createdAt:h,lastLoginAt:f});return x&&Array.isArray(x)&&(S.providerData=x.map(I=>({...I}))),u&&(S._redirectEventId=u),S}static async _fromIdTokenResponse(e,n,r=!1){const s=new ai;s.updateFromServerResponse(n);const i=new sn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await kc(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];J(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?P0(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new ai;l.updateFromIdToken(r);const u=new sn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Kd(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
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
 */const x_=new Map;function Un(t){Jn(t instanceof Function,"Expected a class definition");let e=x_.get(t);return e?(Jn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,x_.set(t,e),e)}/**
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
 */class b0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}b0.type="NONE";const k_=b0;/**
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
 */function Fl(t,e,n){return`firebase:${t}:${e}:${n}`}class li{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Fl(this.userKey,s.apiKey,i),this.fullPersistenceKey=Fl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await xc(this.auth,{idToken:e}).catch(()=>{});return n?sn._fromGetAccountInfoResponse(this.auth,n,e):null}return sn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new li(Un(k_),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Un(k_);const o=Fl(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){let g;if(typeof f=="string"){const m=await xc(e,{idToken:f}).catch(()=>{});if(!m)break;g=await sn._fromGetAccountInfoResponse(e,m,f)}else g=sn._fromJSON(e,f);h!==i&&(l=g),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new li(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new li(i,e,r))}}/**
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
 */function A_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(L0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(j0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(M0(e))return"Blackberry";if(F0(e))return"Webos";if(D0(e))return"Safari";if((e.includes("chrome/")||V0(e))&&!e.includes("edge/"))return"Chrome";if(O0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function j0(t=pt()){return/firefox\//i.test(t)}function D0(t=pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function V0(t=pt()){return/crios\//i.test(t)}function L0(t=pt()){return/iemobile/i.test(t)}function O0(t=pt()){return/android/i.test(t)}function M0(t=pt()){return/blackberry/i.test(t)}function F0(t=pt()){return/webos/i.test(t)}function Bp(t=pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function mP(t=pt()){var e;return Bp(t)&&!!((e=window.navigator)!=null&&e.standalone)}function gP(){return Zx()&&document.documentMode===10}function U0(t=pt()){return Bp(t)||O0(t)||F0(t)||M0(t)||/windows phone/i.test(t)||L0(t)}/**
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
 */function z0(t,e=[]){let n;switch(t){case"Browser":n=A_(pt());break;case"Worker":n=`${A_(pt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ks}/${r}`}/**
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
 */class yP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function _P(t,e={}){return Oi(t,"GET","/v2/passwordPolicy",Up(t,e))}/**
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
 */const vP=6;class wP{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??vP,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class EP{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new C_(this),this.idTokenSubscription=new C_(this),this.beforeStateQueue=new yP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=A0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Un(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await li.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await xc(this,{idToken:e}),r=await sn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Kt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await kc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=tP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Kt(this.app))return Promise.reject(hs(this));const n=e?Ne(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Kt(this.app)?Promise.reject(hs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Kt(this.app)?Promise.reject(hs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Un(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await _P(this),n=new wP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ta("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await pP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Un(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await li.create(this,[Un(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=z0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Kt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&X2(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function yu(t){return Ne(t)}class C_{constructor(e){this.auth=e,this.observer=null,this.addObserver=ak(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let $p={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function TP(t){$p=t}function IP(t){return $p.loadJS(t)}function SP(){return $p.gapiScript}function xP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function kP(t,e){const n=Kc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ys(i,e??{}))return s;Nn(s,"already-initialized")}return n.initialize({options:e})}function AP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Un);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function CP(t,e,n){const r=yu(t);J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=B0(e),{host:o,port:l}=NP(e),u=l===null?"":`:${l}`,h={url:`${i}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){J(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),J(ys(h,r.config.emulator)&&ys(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Hr(o)?(Yf(`${i}//${o}${u}`),Xf("Auth",!0)):RP()}function B0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function NP(t){const e=B0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:N_(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:N_(o)}}}function N_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function RP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class $0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Fn("not implemented")}_getIdTokenResponse(e){return Fn("not implemented")}_linkToIdToken(e,n){return Fn("not implemented")}_getReauthenticationResolver(e){return Fn("not implemented")}}/**
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
 */async function ci(t,e){return iP(t,"POST","/v1/accounts:signInWithIdp",Up(t,e))}/**
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
 */const PP="http://localhost";class Is extends $0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Is(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Nn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Is(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ci(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ci(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ci(e,n)}buildRequest(){const e={requestUri:PP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ia(n)}return e}}/**
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
 */class Hp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Pa extends Hp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class pr extends Pa{constructor(){super("facebook.com")}static credential(e){return Is._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pr.credential(e.oauthAccessToken)}catch{return null}}}pr.FACEBOOK_SIGN_IN_METHOD="facebook.com";pr.PROVIDER_ID="facebook.com";/**
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
 */class Ln extends Pa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Is._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ln.credential(n,r)}catch{return null}}}Ln.GOOGLE_SIGN_IN_METHOD="google.com";Ln.PROVIDER_ID="google.com";/**
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
 */class mr extends Pa{constructor(){super("github.com")}static credential(e){return Is._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mr.credential(e.oauthAccessToken)}catch{return null}}}mr.GITHUB_SIGN_IN_METHOD="github.com";mr.PROVIDER_ID="github.com";/**
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
 */class gr extends Pa{constructor(){super("twitter.com")}static credential(e,n){return Is._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return gr.credential(n,r)}catch{return null}}}gr.TWITTER_SIGN_IN_METHOD="twitter.com";gr.PROVIDER_ID="twitter.com";/**
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
 */class xi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await sn._fromIdTokenResponse(e,r,s),o=R_(r);return new xi({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=R_(r);return new xi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function R_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ac extends Rn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ac.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ac(e,n,r,s)}}function H0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ac._fromErrorAndOperation(t,i,e,r):i})}async function bP(t,e,n=!1){const r=await fa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return xi._forOperation(t,"link",r)}/**
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
 */async function jP(t,e,n=!1){const{auth:r}=t;if(Kt(r.app))return Promise.reject(hs(r));const s="reauthenticate";try{const i=await fa(t,H0(r,s,e,t),n);J(i.idToken,r,"internal-error");const o=zp(i.idToken);J(o,r,"internal-error");const{sub:l}=o;return J(t.uid===l,r,"user-mismatch"),xi._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Nn(r,"user-mismatch"),i}}/**
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
 */async function DP(t,e,n=!1){if(Kt(t.app))return Promise.reject(hs(t));const r="signIn",s=await H0(t,r,e),i=await xi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function VP(t,e,n,r){return Ne(t).onIdTokenChanged(e,n,r)}function LP(t,e,n){return Ne(t).beforeAuthStateChanged(e,n)}function OP(t,e,n,r){return Ne(t).onAuthStateChanged(e,n,r)}function MP(t){return Ne(t).signOut()}const Cc="__sak";/**
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
 */class q0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Cc,"1"),this.storage.removeItem(Cc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const FP=1e3,UP=10;class W0 extends q0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=U0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);gP()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,UP):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},FP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}W0.type="LOCAL";const zP=W0;/**
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
 */class G0 extends q0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}G0.type="SESSION";const K0=G0;/**
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
 */function BP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class _u{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new _u(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),u=await BP(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_u.receivers=[];/**
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
 */function qp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class $P{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const h=qp("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(g){const m=g;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function kn(){return window}function HP(t){kn().location.href=t}/**
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
 */function Q0(){return typeof kn().WorkerGlobalScope<"u"&&typeof kn().importScripts=="function"}async function qP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function WP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function GP(){return Q0()?self:null}/**
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
 */const Y0="firebaseLocalStorageDb",KP=1,Nc="firebaseLocalStorage",X0="fbase_key";class ba{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function vu(t,e){return t.transaction([Nc],e?"readwrite":"readonly").objectStore(Nc)}function QP(){const t=indexedDB.deleteDatabase(Y0);return new ba(t).toPromise()}function Qd(){const t=indexedDB.open(Y0,KP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Nc,{keyPath:X0})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Nc)?e(r):(r.close(),await QP(),e(await Qd()))})})}async function P_(t,e,n){const r=vu(t,!0).put({[X0]:e,value:n});return new ba(r).toPromise()}async function YP(t,e){const n=vu(t,!1).get(e),r=await new ba(n).toPromise();return r===void 0?null:r.value}function b_(t,e){const n=vu(t,!0).delete(e);return new ba(n).toPromise()}const XP=800,JP=3;class J0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>JP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Q0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_u._getInstance(GP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await qP(),!this.activeServiceWorker)return;this.sender=new $P(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||WP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qd();return await P_(e,Cc,"1"),await b_(e,Cc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>P_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>YP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>b_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=vu(s,!1).getAll();return new ba(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),XP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}J0.type="LOCAL";const ZP=J0;new Ra(3e4,6e4);/**
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
 */function Z0(t,e){return e?Un(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Wp extends $0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ci(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ci(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ci(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function eb(t){return DP(t.auth,new Wp(t),t.bypassAuthState)}function tb(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),jP(n,new Wp(t),t.bypassAuthState)}async function nb(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),bP(n,new Wp(t),t.bypassAuthState)}/**
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
 */class eT{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return eb;case"linkViaPopup":case"linkViaRedirect":return nb;case"reauthViaPopup":case"reauthViaRedirect":return tb;default:Nn(this.auth,"internal-error")}}resolve(e){Jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const rb=new Ra(2e3,1e4);async function sb(t,e,n){if(Kt(t.app))return Promise.reject(cn(t,"operation-not-supported-in-this-environment"));const r=yu(t);J2(t,e,Hp);const s=Z0(r,n);return new os(r,"signInViaPopup",e,s).executeNotNull()}class os extends eT{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,os.currentPopupAction&&os.currentPopupAction.cancel(),os.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){Jn(this.filter.length===1,"Popup operations only handle one event");const e=qp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,os.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,rb.get())};e()}}os.currentPopupAction=null;/**
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
 */const ib="pendingRedirect",Ul=new Map;class ob extends eT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ul.get(this.auth._key());if(!e){try{const r=await ab(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ul.set(this.auth._key(),e)}return this.bypassAuthState||Ul.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ab(t,e){const n=ub(e),r=cb(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function lb(t,e){Ul.set(t._key(),e)}function cb(t){return Un(t._redirectPersistence)}function ub(t){return Fl(ib,t.config.apiKey,t.name)}async function hb(t,e,n=!1){if(Kt(t.app))return Promise.reject(hs(t));const r=yu(t),s=Z0(r,e),o=await new ob(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const db=10*60*1e3;class fb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!tT(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(cn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=db&&this.cachedEventUids.clear(),this.cachedEventUids.has(j_(e))}saveEventToCache(e){this.cachedEventUids.add(j_(e)),this.lastProcessedEventTime=Date.now()}}function j_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function tT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function pb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tT(t);default:return!1}}/**
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
 */async function mb(t,e={}){return Oi(t,"GET","/v1/projects",e)}/**
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
 */const gb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yb=/^https?/;async function _b(t){if(t.config.emulator)return;const{authorizedDomains:e}=await mb(t);for(const n of e)try{if(vb(n))return}catch{}Nn(t,"unauthorized-domain")}function vb(t){const e=Gd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!yb.test(n))return!1;if(gb.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const wb=new Ra(3e4,6e4);function D_(){const t=kn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Eb(t){return new Promise((e,n)=>{var s,i,o;function r(){D_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{D_(),n(cn(t,"network-request-failed"))},timeout:wb.get()})}if((i=(s=kn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=kn().gapi)!=null&&o.load)r();else{const l=xP("iframefcb");return kn()[l]=()=>{gapi.load?r():n(cn(t,"network-request-failed"))},IP(`${SP()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw zl=null,e})}let zl=null;function Tb(t){return zl=zl||Eb(t),zl}/**
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
 */const Ib=new Ra(5e3,15e3),Sb="__/auth/iframe",xb="emulator/auth/iframe",kb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ab=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Cb(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Fp(e,xb):`https://${t.config.authDomain}/${Sb}`,r={apiKey:e.apiKey,appName:t.name,v:ks},s=Ab.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ia(r).slice(1)}`}async function Nb(t){const e=await Tb(t),n=kn().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:Cb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=cn(t,"network-request-failed"),l=kn().setTimeout(()=>{i(o)},Ib.get());function u(){kn().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const Rb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Pb=500,bb=600,jb="_blank",Db="http://localhost";class V_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Vb(t,e,n,r=Pb,s=bb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...Rb,width:r.toString(),height:s.toString(),top:i,left:o},h=pt().toLowerCase();n&&(l=V0(h)?jb:n),j0(h)&&(e=e||Db,u.scrollbars="yes");const f=Object.entries(u).reduce((m,[w,x])=>`${m}${w}=${x},`,"");if(mP(h)&&l!=="_self")return Lb(e||"",l),new V_(null);const g=window.open(e||"",l,f);J(g,t,"popup-blocked");try{g.focus()}catch{}return new V_(g)}function Lb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Ob="__/auth/handler",Mb="emulator/auth/handler",Fb=encodeURIComponent("fac");async function L_(t,e,n,r,s,i){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ks,eventId:s};if(e instanceof Hp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ok(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))o[f]=g}if(e instanceof Pa){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${Fb}=${encodeURIComponent(u)}`:"";return`${Ub(t)}?${Ia(l).slice(1)}${h}`}function Ub({config:t}){return t.emulator?Fp(t,Mb):`https://${t.authDomain}/${Ob}`}/**
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
 */const Nh="webStorageSupport";class zb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=K0,this._completeRedirectFn=hb,this._overrideRedirectResult=lb}async _openPopup(e,n,r,s){var o;Jn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await L_(e,n,r,Gd(),s);return Vb(e,i,qp())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await L_(e,n,r,Gd(),s);return HP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Jn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Nb(e),r=new fb(e);return n.register("authEvent",s=>(J(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Nh,{type:Nh},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Nh];i!==void 0&&n(!!i),Nn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_b(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return U0()||D0()||Bp()}}const Bb=zb;var O_="@firebase/auth",M_="1.12.0";/**
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
 */class $b{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Hb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function qb(t){_s(new Dr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:z0(t)},h=new EP(r,s,i,u);return AP(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),_s(new Dr("auth-internal",e=>{const n=yu(e.getProvider("auth").getImmediate());return(r=>new $b(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tn(O_,M_,Hb(t)),Tn(O_,M_,"esm2020")}/**
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
 */const Wb=5*60,Gb=yE("authIdTokenMaxAge")||Wb;let F_=null;const Kb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Gb)return;const s=n==null?void 0:n.token;F_!==s&&(F_=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Qb(t=ep()){const e=Kc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=kP(t,{popupRedirectResolver:Bb,persistence:[ZP,zP,K0]}),r=yE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Kb(i.toString());LP(n,o,()=>o(n.currentUser)),VP(n,l=>o(l))}}const s=pE("auth");return s&&CP(n,`http://${s}`),n}function Yb(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}TP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=cn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Yb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});qb("Browser");const Xb={apiKey:"AIzaSyChYmVhjDixj7-zjW8T_vVGFX_g18a5NDw",authDomain:"nurazkhan-50303.firebaseapp.com",projectId:"nurazkhan-50303",storageBucket:"nurazkhan-50303.firebasestorage.app",messagingSenderId:"298709005555",appId:"1:298709005555:web:b8df5cbb5f041b48fff386"},Gp=EE(Xb),Zn=IR(Gp),pa=H2(Gp),Et=Qb(Gp),xe=()=>{const t=Et.currentUser;if(!t)throw new Error("User not authenticated");return ge(Zn,"users",t.uid)},Pn={async create(t){const e=xe(),n=Ze(e,"projects"),r=l0(Zn),s=ge(n),i=s.id,o={name:t.name,description:t.description||"",thumbnailUrl:null,folderId:t.folderId||null,tags:t.tags||[],createdAt:Ft(),updatedAt:Ft(),currentVersionId:null};if(t.thumbnail instanceof File){const f=da(pa,`users/${Et.currentUser.uid}/thumbnails/${i}/${t.thumbnail.name}`);await ua(f,t.thumbnail),o.thumbnailUrl=await ha(f)}const l=Ze(s,"versions"),u=ge(l),h=u.id;return o.currentVersionId=h,r.set(s,o),r.set(u,{name:"v1.0",description:"Initial version",parentVersionId:null,todos:[],errors:[],createdAt:Ft()}),await r.commit(),i},async getAll(){const t=Et.currentUser;if(!t)return[];const e=ge(Zn,"users",t.uid),n=Yn(Ze(e,"projects"),Gr("updatedAt","desc"));return(await Xn(n)).docs.map(s=>{var i,o;return{id:s.id,...s.data(),createdAt:((i=s.data().createdAt)==null?void 0:i.toDate())||new Date,updatedAt:((o=s.data().updatedAt)==null?void 0:o.toDate())||new Date}})},async getById(t){var s,i;const e=xe(),n=ge(e,"projects",t),r=await mu(n);if(r.exists())return{id:r.id,...r.data(),createdAt:(s=r.data().createdAt)==null?void 0:s.toDate(),updatedAt:(i=r.data().updatedAt)==null?void 0:i.toDate()};throw new Error("Project not found")},async update(t,e){const n=xe(),r=ge(n,"projects",t),s={...e,updatedAt:Ft()};if(e.thumbnail instanceof File){const i=da(pa,`users/${Et.currentUser.uid}/thumbnails/${t}/${e.thumbnail.name}`);await ua(i,e.thumbnail),s.thumbnailUrl=await ha(i),delete s.thumbnail}await Vi(r,s)},async delete(t){const e=xe(),n=ge(e,"projects",t);await Ps(n)}},bn={async create(t,e){const n=xe(),r=Ze(n,"projects",t,"versions"),s=await Li(r,{name:e.name,description:e.description||"",parentVersionId:e.parentVersionId||null,todos:e.todos||[],errors:e.errors||[],createdAt:Ft()});if(e.parentVersionId&&e.copyResources){const i=await jn.getByVersion(t,e.parentVersionId),o=s.id,l=l0(Zn),u=Ze(n,"projects",t,"versions",o,"resources");i.forEach(h=>{const f=ge(u);l.set(f,{name:h.name,type:h.type,url:h.url,metadata:h.metadata,createdAt:Ft()})}),await l.commit()}return s.id},async getByProject(t){const e=xe(),n=Yn(Ze(e,"projects",t,"versions"),Gr("createdAt","desc"));return(await Xn(n)).docs.map(s=>{var i;return{id:s.id,...s.data(),createdAt:(i=s.data().createdAt)==null?void 0:i.toDate()}})},async getById(t,e){var i;const n=xe(),r=ge(n,"projects",t,"versions",e),s=await mu(r);return{id:s.id,...s.data(),createdAt:(i=s.data().createdAt)==null?void 0:i.toDate()}},async update(t,e,n){const r=xe(),s=ge(r,"projects",t,"versions",e);await Vi(s,n)},async delete(t,e){const n=xe(),r=ge(n,"projects",t,"versions",e);await Ps(r)}},jn={async create(t,e,n){const r=xe(),s=Ze(r,"projects",t,"versions",e,"resources");let i=n.url||null;if(n.data instanceof File){const l=`users/${Et.currentUser.uid}/projects/${t}/versions/${e}/${Date.now()}_${n.name}`,u=da(pa,l);await ua(u,n.data),i=await ha(u)}return(await Li(s,{name:n.name,type:n.type,url:i,metadata:n.metadata||{},createdAt:Ft()})).id},async getByVersion(t,e){const n=xe(),r=Ze(n,"projects",t,"versions",e,"resources"),s=Yn(r,Gr("createdAt","desc"));return(await Xn(s)).docs.map(o=>{var l;return{id:o.id,...o.data(),data:null,createdAt:(l=o.data().createdAt)==null?void 0:l.toDate()}})},async update(t,e,n,r){const s=xe(),i=ge(s,"projects",t,"versions",e,"resources",n);await Vi(i,r)},async delete(t,e,n){const r=xe(),s=ge(r,"projects",t,"versions",e,"resources",n),i=await mu(s);i.exists()&&i.data().url&&i.data().url.startsWith("http"),await Ps(s)}},Rh={async create(t){const e=xe(),n=Ze(e,"folders");return(await Li(n,{name:t,createdAt:Ft()})).id},async getAll(){const t=Et.currentUser;if(!t)return[];const e=ge(Zn,"users",t.uid),n=Yn(Ze(e,"folders"),Gr("name"));return(await Xn(n)).docs.map(s=>({id:s.id,...s.data()}))},async delete(t){const e=xe();await Ps(ge(e,"folders",t))}},yl={async create(t){const e=xe(),n=Ze(e,"inspirations");let r=null;if(t.image instanceof File){const i=`users/${Et.currentUser.uid}/inspirations/${Date.now()}_${t.image.name}`,o=da(pa,i);await ua(o,t.image),r=await ha(o)}return(await Li(n,{title:t.title||"",description:t.description||"",tags:t.tags||[],imageUrl:r,url:t.url||"",createdAt:Ft(),updatedAt:Ft()})).id},async getAll(){const t=Et.currentUser;if(!t)return[];const e=ge(Zn,"users",t.uid),n=Yn(Ze(e,"inspirations"),Gr("createdAt","desc"));return(await Xn(n)).docs.map(s=>{var i,o;return{id:s.id,...s.data(),createdAt:((i=s.data().createdAt)==null?void 0:i.toDate())||new Date,updatedAt:((o=s.data().updatedAt)==null?void 0:o.toDate())||new Date}})},async update(t,e){const n=xe(),r=ge(n,"inspirations",t),s={...e,updatedAt:Ft()};if(e.image instanceof File){const i=`users/${Et.currentUser.uid}/inspirations/${Date.now()}_${e.image.name}`,o=da(pa,i);await ua(o,e.image),s.imageUrl=await ha(o),delete s.image}await Vi(r,s)},async delete(t){const e=xe();await Ps(ge(e,"inspirations",t))}},_l={async create(t){const e=xe(),n=Ze(e,"globalTasks");return(await Li(n,{text:t.text,completed:!1,createdAt:Ft()})).id},async getAll(){const t=Et.currentUser;if(!t)return[];const e=ge(Zn,"users",t.uid),n=Yn(Ze(e,"globalTasks"),Gr("createdAt","desc"));return(await Xn(n)).docs.map(s=>{var i;return{id:s.id,...s.data(),createdAt:((i=s.data().createdAt)==null?void 0:i.toDate())||new Date}})},async update(t,e){const n=xe();await Vi(ge(n,"globalTasks",t),e)},async delete(t){const e=xe();await Ps(ge(e,"globalTasks",t))}},vl={async create(t){const e=xe(),n=Ze(e,"globalNotes");return(await Li(n,{content:t.content,createdAt:Ft()})).id},async getAll(){const t=Et.currentUser;if(!t)return[];const e=ge(Zn,"users",t.uid),n=Yn(Ze(e,"globalNotes"),Gr("createdAt","desc"));return(await Xn(n)).docs.map(s=>{var i;return{id:s.id,...s.data(),createdAt:((i=s.data().createdAt)==null?void 0:i.toDate())||new Date}})},async update(t,e){const n=xe();await Vi(ge(n,"globalNotes",t),e)},async delete(t){const e=xe();await Ps(ge(e,"globalNotes",t))}},Jb=async()=>{const t=Et.currentUser;if(!t)return[];const e=ge(Zn,"users",t.uid),n=await Xn(Yn(Ze(e,"projects"),Gr("updatedAt","desc"))),r=[];for(const s of n.docs){const i={id:s.id,...s.data()};if(i.currentVersionId)try{const o=ge(e,"projects",i.id,"versions",i.currentVersionId),l=await mu(o);if(!l.exists())continue;const u=l.data(),f=(await Xn(Yn(Ze(e,"projects",i.id,"versions",i.currentVersionId,"resources"),jR("type","==","note")))).docs.map(g=>{var m;return{id:g.id,...g.data(),createdAt:((m=g.data().createdAt)==null?void 0:m.toDate())||new Date}});r.push({projectId:i.id,projectName:i.name,versionId:i.currentVersionId,todos:u.todos||[],notes:f})}catch(o){console.error(`Failed to load data for project ${i.name}:`,o)}}return r},Ke=Lx((t,e)=>({user:null,authLoading:!0,projects:[],folders:[],currentProject:null,currentVersion:null,versions:[],resources:[],view:"list",currentView:"projects",sidebarOpen:!0,isLoading:!1,inspirations:[],globalTasks:[],globalNotes:[],initAuth:()=>OP(Et,async r=>{t({user:r,authLoading:!1}),r?(await e().loadProjects(),await e().loadFolders(),await e().loadInspirations(),await e().loadGlobalTasks(),await e().loadGlobalNotes()):t({projects:[],folders:[],currentProject:null,inspirations:[],globalTasks:[],globalNotes:[]})}),login:async()=>{try{const n=new Ln;await sb(Et,n)}catch(n){throw console.error("Login failed:",n),n}},logout:async()=>{await MP(Et),t({user:null,projects:[],folders:[]})},setView:n=>t({view:n}),setCurrentView:n=>t({currentView:n}),toggleSidebar:()=>t(n=>({sidebarOpen:!n.sidebarOpen})),setLoading:n=>t({isLoading:n}),loadFolders:async()=>{if(!e().user)return;const n=await Rh.getAll();t({folders:n})},createFolder:async n=>{await Rh.create(n),await e().loadFolders()},deleteFolder:async n=>{await Rh.delete(n),await e().loadFolders()},loadProjects:async()=>{if(e().user){t({isLoading:!0});try{const n=await Pn.getAll();t({projects:n,isLoading:!1})}catch(n){console.error(n),t({isLoading:!1})}}},createProject:async n=>{const r=await Pn.create(n);return await e().loadProjects(),r},selectProject:async n=>{if(!n){t({currentProject:null,currentVersion:null,versions:[],resources:[]});return}t({isLoading:!0});try{const r=await Pn.getById(n),s=await bn.getByProject(n);let i=null,o=[];if(r.currentVersionId){const l=s.find(u=>u.id===r.currentVersionId);l&&(i=l,o=await jn.getByVersion(n,r.currentVersionId))}t({currentProject:r,currentVersion:i,versions:s,resources:o,isLoading:!1})}catch(r){console.error(r),t({isLoading:!1})}},updateProject:async(n,r)=>{var s;if(await Pn.update(n,r),await e().loadProjects(),((s=e().currentProject)==null?void 0:s.id)===n){const i=await Pn.getById(n);t({currentProject:i})}},deleteProject:async n=>{var r;await Pn.delete(n),await e().loadProjects(),((r=e().currentProject)==null?void 0:r.id)===n&&t({currentProject:null,currentVersion:null,versions:[],resources:[]})},createVersion:async(n,r)=>{const s=await bn.create(n,r),i=await bn.getByProject(n);await Pn.update(n,{currentVersionId:s});const o=await Pn.getById(n);return t({versions:i,currentProject:o}),s},selectVersion:async n=>{const r=e().currentProject.id,s=e().versions.find(o=>o.id===n)||await bn.getById(r,n),i=await jn.getByVersion(r,n);e().currentProject&&await Pn.update(r,{currentVersionId:n}),t({currentVersion:s,resources:i})},updateVersion:async(n,r)=>{var i;const s=e().currentProject.id;if(await bn.update(s,n,r),((i=e().currentVersion)==null?void 0:i.id)===n){const o=await bn.getByProject(s),l=o.find(u=>u.id===n);t({currentVersion:l,versions:o})}else{const o=await bn.getByProject(s);t({versions:o})}},deleteVersion:async n=>{var i;const r=e().currentProject.id;await bn.delete(r,n);const s=await bn.getByProject(r);t({versions:s}),((i=e().currentVersion)==null?void 0:i.id)===n&&t({currentVersion:s[0]||null,resources:[]})},addResource:async(n,r)=>{const s=e().currentProject.id;await jn.create(s,n,r);const i=await jn.getByVersion(s,n);t({resources:i})},updateResource:async(n,r)=>{const s=e().currentProject.id,i=e().currentVersion.id;await jn.update(s,i,n,r);const o=await jn.getByVersion(s,i);t({resources:o})},deleteResource:async n=>{const r=e().currentProject.id,s=e().currentVersion.id;await jn.delete(r,s,n);const i=await jn.getByVersion(r,s);t({resources:i})},loadInspirations:async()=>{if(e().user)try{const n=await yl.getAll();t({inspirations:n})}catch(n){console.error("Failed to load inspirations:",n)}},addInspiration:async n=>{const r=await yl.create(n);return await e().loadInspirations(),r},updateInspiration:async(n,r)=>{await yl.update(n,r),await e().loadInspirations()},deleteInspiration:async n=>{await yl.delete(n),await e().loadInspirations()},loadGlobalTasks:async()=>{if(e().user)try{const n=await _l.getAll();t({globalTasks:n})}catch(n){console.error("Failed to load global tasks:",n)}},addGlobalTask:async n=>{await _l.create({text:n}),await e().loadGlobalTasks()},toggleGlobalTask:async(n,r)=>{await _l.update(n,{completed:!r}),await e().loadGlobalTasks()},deleteGlobalTask:async n=>{await _l.delete(n),await e().loadGlobalTasks()},loadGlobalNotes:async()=>{if(e().user)try{const n=await vl.getAll();t({globalNotes:n})}catch(n){console.error("Failed to load global notes:",n)}},addGlobalNote:async n=>{await vl.create({content:n}),await e().loadGlobalNotes()},updateGlobalNote:async(n,r)=>{await vl.update(n,{content:r}),await e().loadGlobalNotes()},deleteGlobalNote:async n=>{await vl.delete(n),await e().loadGlobalNotes()}}));/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Zb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ej=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),X=(t,e)=>{const n=F.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:l="",children:u,...h},f)=>F.createElement("svg",{ref:f,...Zb,width:s,height:s,stroke:r,strokeWidth:o?Number(i)*24/Number(s):i,className:["lucide",`lucide-${ej(t)}`,l].join(" "),...h},[...e.map(([g,m])=>F.createElement(g,m)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tj=X("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=X("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=X("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nj=X("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rj=X("Bug",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sj=X("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ui=X("CheckSquare",[["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}],["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",key:"1jnkn4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lo=X("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U_=X("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ij=X("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_=X("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=X("CircuitBoard",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M11 9h4a2 2 0 0 0 2-2V3",key:"1ve2rv"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"M7 21v-4a2 2 0 0 1 2-2h4",key:"1fwkro"}],["circle",{cx:"15",cy:"15",r:"2",key:"3i40o0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu=X("Clipboard",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nT=X("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oj=X("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eu=X("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=X("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rT=X("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ma=X("FileCode",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ga=X("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aj=X("FileType",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"M9 13v-1h6v1",key:"1bb014"}],["path",{d:"M11 18h2",key:"12mj7e"}],["path",{d:"M12 12v6",key:"3ahymv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oo=X("File",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=X("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=X("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ki=X("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mi=X("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B_=X("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sT=X("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=X("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lj=X("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iT=X("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cj=X("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uj=X("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hj=X("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dj=X("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fj=X("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pj=X("PenSquare",[["path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1qinfi"}],["path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z",key:"w2jsv5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oT=X("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=X("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mj=X("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gj=X("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=X("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=X("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aT=X("Tag",[["path",{d:"M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z",key:"14b2ls"}],["path",{d:"M7 7h.01",key:"7u93v4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=X("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=X("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_=X("Usb",[["circle",{cx:"10",cy:"7",r:"1",key:"dypaad"}],["circle",{cx:"4",cy:"20",r:"1",key:"22iqad"}],["path",{d:"M4.7 19.3 19 5",key:"1enqfc"}],["path",{d:"m21 3-3 1 2 2Z",key:"d3ov82"}],["path",{d:"M9.26 7.68 5 12l2 5",key:"1esawj"}],["path",{d:"m10 14 5 2 3.5-3.5",key:"v8oal5"}],["path",{d:"m18 12 1-1 1 1-1 1Z",key:"1bh22v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lT=X("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt=X("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function yj({onCreateProject:t}){var V;const{projects:e,folders:n,currentProject:r,toggleSidebar:s,selectProject:i,createFolder:o,deleteFolder:l,logout:u,user:h,currentView:f,setCurrentView:g}=Ke(),[m,w]=F.useState(""),[x,R]=F.useState({}),b=_=>{R(y=>({...y,[_]:!y[_]}))},S=async()=>{const _=prompt("Folder Name:");_&&await o(_)},I=async(_,y)=>{_.stopPropagation(),confirm("Delete this folder? Projects inside will be moved to root.")&&await l(y)},A=e.filter(_=>_.name.toLowerCase().includes(m.toLowerCase())),D=_=>A.filter(y=>y.folderId===_),N=A.filter(_=>!_.folderId);return c.jsxs("aside",{className:"sidebar",children:[c.jsxs("div",{className:"sidebar-header",children:[c.jsxs("button",{className:"logo",onClick:()=>{i(null),g("projects")},title:"Go to home",children:[c.jsx(Eu,{className:"logo-icon"}),c.jsx("span",{className:"logo-text",children:"NiroVault"})]}),c.jsx("button",{className:"btn btn-icon btn-ghost",onClick:s,children:c.jsx(ij,{})})]}),c.jsxs("div",{className:"sidebar-content",children:[c.jsxs("div",{className:"sidebar-user",children:[c.jsx("div",{className:"user-avatar",children:h!=null&&h.photoURL?c.jsx("img",{src:h.photoURL,alt:h.displayName}):c.jsx("div",{className:"avatar-placeholder",children:(V=h==null?void 0:h.email)==null?void 0:V[0].toUpperCase()})}),c.jsxs("div",{className:"user-info",children:[c.jsx("span",{className:"user-name truncate",children:(h==null?void 0:h.displayName)||"User"}),c.jsx("span",{className:"user-email truncate",children:h==null?void 0:h.email})]})]}),c.jsxs("div",{className:"sidebar-search",children:[c.jsx(Jp,{size:16}),c.jsx("input",{type:"text",placeholder:"Search projects...",className:"input",value:m,onChange:_=>w(_.target.value)})]}),c.jsx("div",{className:"sidebar-actions",children:c.jsxs("button",{className:"btn btn-sm btn-ghost",onClick:S,children:[c.jsx(Xd,{size:14}),"New Folder"]})}),c.jsxs("nav",{className:"sidebar-nav",children:[n.map(_=>{const y=D(_.id),T=x[_.id];return m&&y.length===0?null:c.jsxs("div",{className:"nav-section",children:[c.jsxs("div",{className:"nav-section-header",onClick:()=>b(_.id),children:[c.jsxs("div",{className:"folder-label",children:[T?c.jsx(Xp,{size:14}):c.jsx(Xd,{size:14}),c.jsx("span",{className:"truncate",children:_.name}),c.jsx("span",{className:"badge badge-sm",children:y.length})]}),c.jsx("button",{className:"btn btn-icon btn-ghost btn-xs folder-menu",onClick:E=>I(E,_.id),children:c.jsx(dn,{size:12})})]}),T&&c.jsxs("ul",{className:"nav-list",children:[y.map(E=>c.jsx("li",{children:c.jsx("button",{className:`nav-item ${(r==null?void 0:r.id)===E.id?"active":""}`,onClick:()=>{i(E.id),g("projects")},children:c.jsx("span",{className:"truncate",children:E.name})})},E.id)),y.length===0&&c.jsx("li",{className:"nav-empty",children:"Empty folder"})]})]},_.id)}),c.jsxs("div",{className:"nav-section",children:[c.jsxs("div",{className:"nav-section-header-static",children:[c.jsx("span",{className:"nav-section-title",children:"Root Projects"}),t&&c.jsx("button",{className:"btn btn-icon btn-ghost btn-xs",onClick:t,title:"New Project",children:c.jsx(Tt,{size:14})})]}),c.jsxs("ul",{className:"nav-list",children:[N.map(_=>c.jsx("li",{children:c.jsx("button",{className:`nav-item ${(r==null?void 0:r.id)===_.id?"active":""}`,onClick:()=>{i(_.id),g("projects")},children:c.jsx("span",{className:"truncate",children:_.name})})},_.id)),N.length===0&&n.length===0&&c.jsx("li",{className:"nav-empty",children:"No projects found"})]})]})]})]}),c.jsxs("div",{className:"sidebar-footer",children:[c.jsxs("button",{className:`btn btn-ghost nav-item ${f==="inspiration"?"active":""}`,onClick:()=>{i(null),g("inspiration")},children:[c.jsx(Jd,{size:16}),c.jsx("span",{children:"Inspiration"})]}),c.jsxs("button",{className:`btn btn-ghost nav-item ${f==="tasks"?"active":""}`,onClick:()=>{i(null),g("tasks")},children:[c.jsx(ui,{size:16}),c.jsx("span",{children:"Tasks & Notes"})]}),c.jsxs("button",{className:"btn btn-ghost nav-item",onClick:u,children:[c.jsx(uj,{size:16}),c.jsx("span",{children:"Sign Out"})]})]})]})}function _j({children:t,onCreateProject:e}){const{projects:n,currentProject:r,sidebarOpen:s,toggleSidebar:i,selectProject:o,view:l,setView:u}=Ke();return c.jsxs("div",{className:`layout ${s?"sidebar-open":"sidebar-closed"}`,children:[c.jsx(yj,{onCreateProject:e}),c.jsxs("main",{className:"main-content",children:[c.jsxs("header",{className:"main-header",children:[c.jsxs("div",{className:"header-left",children:[!s&&c.jsx("button",{className:"btn btn-icon btn-ghost",onClick:i,children:c.jsx(dj,{})}),c.jsx("h1",{className:"header-title",children:r?r.name:"All Projects"})]}),c.jsx("div",{className:"header-right",children:c.jsxs("div",{className:"view-toggle",children:[c.jsx("button",{className:`btn btn-icon btn-ghost ${l==="grid"?"active":""}`,onClick:()=>u("grid"),children:c.jsx(sT,{size:18})}),c.jsx("button",{className:`btn btn-icon btn-ghost ${l==="list"?"active":""}`,onClick:()=>u("list"),children:c.jsx(iT,{size:18})})]})})]}),c.jsx("div",{className:"content-wrapper",children:t})]})]})}function vj({project:t}){const{selectProject:e}=Ke(),n=r=>{if(!r)return"";const s=new Date(r);return s.toLocaleDateString("en-US",{month:"short",day:"numeric",year:s.getFullYear()!==new Date().getFullYear()?"numeric":void 0})};return c.jsxs("article",{className:"project-card card card-interactive",onClick:()=>e(t.id),tabIndex:0,onKeyDown:r=>r.key==="Enter"&&e(t.id),children:[c.jsx("div",{className:"project-thumbnail",children:t.thumbnailUrl||t.thumbnail?c.jsx("img",{src:t.thumbnailUrl||URL.createObjectURL(t.thumbnail),alt:t.name,loading:"lazy"}):c.jsx("div",{className:"project-thumbnail-placeholder",children:c.jsx(Xp,{size:32})})}),c.jsxs("div",{className:"project-info",children:[c.jsx("h3",{className:"project-name truncate",children:t.name}),t.description&&c.jsx("p",{className:"project-description truncate",children:t.description}),c.jsxs("div",{className:"project-meta",children:[c.jsxs("span",{className:"meta-item",children:[c.jsx(nT,{size:12}),n(t.updatedAt)]}),c.jsxs("span",{className:"meta-item",children:[c.jsx(ki,{size:12}),"v1.0"]})]})]})]})}function wj({onCreateProject:t}){const{projects:e,view:n,isLoading:r}=Ke();return r?c.jsx("div",{className:`project-list ${n}`,children:[1,2,3,4].map(s=>c.jsxs("div",{className:"project-card skeleton-card",children:[c.jsx("div",{className:"skeleton",style:{height:160}}),c.jsxs("div",{className:"skeleton-content",children:[c.jsx("div",{className:"skeleton",style:{height:20,width:"60%"}}),c.jsx("div",{className:"skeleton",style:{height:14,width:"80%"}})]})]},s))}):e.length===0?c.jsxs("div",{className:"empty-state",children:[c.jsx(Xp,{className:"empty-state-icon"}),c.jsx("h3",{children:"No projects yet"}),c.jsx("p",{children:"Create your first project to start organizing your electronics work, schematics, and firmware."}),c.jsxs("button",{className:"btn btn-primary btn-lg",onClick:t,children:[c.jsx(Tt,{size:20}),"Create Project"]})]}):c.jsxs("div",{className:`project-list ${n}`,children:[e.map(s=>c.jsx(vj,{project:s},s.id)),c.jsxs("button",{className:"project-card add-card",onClick:t,children:[c.jsx(Tt,{size:32}),c.jsx("span",{children:"New Project"})]})]})}function Ej({versions:t,currentVersionId:e,onSelectVersion:n}){const r=F.useMemo(()=>{if(!t.length)return{nodes:[],height:0,width:0};const f=new Map;t.forEach(N=>f.set(N.id,{...N,children:[]}));const g=[];t.forEach(N=>{const V=f.get(N.id);N.parentVersionId&&f.has(N.parentVersionId)?f.get(N.parentVersionId).children.push(V):g.push(V)});const m=140,w=60,x=20,R=40;let b=0,S=0;const I=(N,V,_)=>{if(N.x=V,N.y=_,b=Math.max(b,V+m),S=Math.max(S,_+w),N.children.length===0)return V+m+x;let y=V;if(N.children.forEach(T=>{y=I(T,y,_+w+R)}),N.children.length>1){const T=N.children[0].x,E=N.children[N.children.length-1].x;N.x=(T+E+m)/2-m/2}return y};let A=0;g.forEach(N=>{A=I(N,A,0)});const D=N=>{let V=[];return N.forEach(_=>{V.push(_),V=[...V,...D(_.children)]}),V};return{nodes:D(g),roots:g,height:S+40,width:b+40,nodeWidth:m,nodeHeight:w}},[t]),s=()=>{const f=[],{nodes:g,nodeWidth:m,nodeHeight:w}=r;return g.forEach(x=>{x.children.forEach(R=>{const b=x.x+m/2,S=x.y+w,I=R.x+m/2,A=R.y,D=(S+A)/2,N=`M ${b} ${S} C ${b} ${D}, ${I} ${D}, ${I} ${A}`;f.push(c.jsx("path",{d:N,className:"version-connection",fill:"none"},`line-${x.id}-${R.id}`))})}),f};if(t.length===0)return c.jsxs("div",{className:"version-tree-empty",children:[c.jsx(ki,{size:32}),c.jsx("p",{children:"No versions yet"}),c.jsx("span",{className:"text-muted",children:"Create your first version to start tracking changes"})]});const{nodes:i,height:o,width:l,nodeWidth:u,nodeHeight:h}=r;return c.jsx("div",{className:"version-tree-container",children:c.jsx("svg",{className:"version-tree",width:l,height:o,viewBox:`0 0 ${l} ${o}`,children:c.jsxs("g",{transform:"translate(20, 20)",children:[s(),i.map(f=>c.jsxs("g",{className:`version-node ${f.id===e?"active":""}`,transform:`translate(${f.x}, ${f.y})`,onClick:()=>n(f.id),style:{cursor:"pointer"},children:[c.jsx("rect",{x:"0",y:"0",width:u,height:h,rx:"10",className:"version-node-bg"}),c.jsx("circle",{cx:"20",cy:h/2,r:"8",className:"version-dot"}),c.jsx("text",{x:"38",y:h/2-6,className:"version-name",children:f.name}),c.jsx("text",{x:"38",y:h/2+10,className:"version-date",children:new Date(f.createdAt).toLocaleDateString()})]},f.id))]})})})}function H_({resources:t,onAdd:e,type:n="image"}){const{deleteResource:r}=Ke(),[s,i]=F.useState(null),o=h=>h.data?URL.createObjectURL(h.data):h.url||"",l=h=>{var f;return h.type==="video"||((f=h.metadata)==null?void 0:f.mimeType)&&h.metadata.mimeType.startsWith("video/")},u=h=>{const f=o(h),g=document.createElement("a");g.href=f,g.download=h.name,document.body.appendChild(g),g.click(),document.body.removeChild(g)};return t.length===0?c.jsxs("div",{className:"gallery-empty",children:[c.jsx(Mi,{size:48}),c.jsxs("h3",{children:["No ",n==="schematic"?"schematics":"media"," yet"]}),c.jsx("p",{children:"Add images, videos, or schematics to this version"}),c.jsxs("button",{className:"btn btn-primary",onClick:e,children:[c.jsx(Tt,{size:18}),"Add Files"]})]}):c.jsxs("div",{className:"gallery",children:[c.jsxs("div",{className:"gallery-grid",children:[t.map(h=>c.jsxs("div",{className:"gallery-item",children:[c.jsxs("div",{className:"gallery-preview",onClick:()=>i(h),children:[l(h)?c.jsx("video",{src:o(h),muted:!0}):c.jsx("img",{src:o(h),alt:h.name,loading:"lazy"}),c.jsxs("div",{className:"gallery-overlay",children:[l(h)&&c.jsx(lT,{size:24}),c.jsx(hj,{size:20})]})]}),c.jsxs("div",{className:"gallery-info",children:[c.jsx("span",{className:"gallery-name truncate",children:h.name}),c.jsxs("div",{className:"gallery-actions",children:[c.jsx("button",{className:"btn btn-icon btn-ghost btn-sm",onClick:()=>u(h),children:c.jsx(Yd,{size:14})}),c.jsx("button",{className:"btn btn-icon btn-ghost btn-sm text-error",onClick:()=>r(h.id),children:c.jsx(dn,{size:14})})]})]})]},h.id)),c.jsxs("button",{className:"gallery-add",onClick:e,children:[c.jsx(Tt,{size:24}),c.jsx("span",{children:"Add More"})]})]}),s&&c.jsxs("div",{className:"lightbox",onClick:()=>i(null),children:[c.jsx("button",{className:"btn btn-icon btn-ghost lightbox-close",onClick:()=>i(null),children:c.jsx(jt,{size:24})}),c.jsxs("div",{className:"lightbox-content",onClick:h=>h.stopPropagation(),children:[l(s)?c.jsx("video",{src:o(s),controls:!0,autoPlay:!0}):c.jsx("img",{src:o(s),alt:s.name}),c.jsxs("div",{className:"lightbox-info",children:[c.jsx("span",{children:s.name}),c.jsxs("button",{className:"btn btn-sm btn-secondary",onClick:()=>u(s),children:[c.jsx(Yd,{size:14}),"Download"]})]})]})]})]})}function Tj({version:t}){const{updateVersion:e}=Ke(),[n,r]=F.useState(""),s=(t==null?void 0:t.todos)||[],i=()=>{if(!n.trim()||!t)return;const m={id:Date.now(),text:n.trim(),completed:!1,createdAt:new Date};e(t.id,{todos:[...s,m]}),r("")},o=m=>{e(t.id,{todos:s.map(w=>w.id===m?{...w,completed:!w.completed}:w)})},l=m=>{e(t.id,{todos:s.filter(w=>w.id!==m)})},u=m=>{m.key==="Enter"&&i()},h=m=>{if(!m)return"";const w=m instanceof Date?m:new Date(m!=null&&m.seconds?m.seconds*1e3:m);if(isNaN(w.getTime()))return"";const R=new Date-w,b=Math.floor(R/6e4),S=Math.floor(R/36e5),I=Math.floor(R/864e5);return b<1?"just now":b<60?`${b}m ago`:S<24?`${S}h ago`:I<30?`${I}d ago`:w.toLocaleDateString("en-US",{month:"short",day:"numeric"})},f=s.filter(m=>m.completed).length,g=s.length>0?f/s.length*100:0;return c.jsxs("div",{className:"todo-list",children:[c.jsx("div",{className:"todo-header",children:c.jsxs("div",{className:"todo-stats",children:[c.jsxs("span",{className:"todo-count",children:[f," / ",s.length," completed"]}),s.length>0&&c.jsx("div",{className:"progress-bar todo-progress",children:c.jsx("div",{className:"progress-bar-fill",style:{width:`${g}%`}})})]})}),c.jsxs("div",{className:"todo-input-wrapper",children:[c.jsx("input",{type:"text",className:"input todo-input",placeholder:"Add a new task...",value:n,onChange:m=>r(m.target.value),onKeyDown:u}),c.jsxs("button",{className:"btn btn-primary",onClick:i,disabled:!n.trim(),children:[c.jsx(Tt,{size:18}),"Add"]})]}),s.length===0?c.jsxs("div",{className:"todo-empty",children:[c.jsx(ui,{size:48}),c.jsx("h3",{children:"No tasks yet"}),c.jsx("p",{children:"Add tasks to track what needs to be done for this version"})]}):c.jsx("ul",{className:"todo-items",children:s.map(m=>c.jsxs("li",{className:`todo-item ${m.completed?"completed":""}`,children:[c.jsx("button",{className:"todo-checkbox",onClick:()=>o(m.id),children:m.completed?c.jsx(Lo,{size:16}):c.jsx(Zd,{size:16})}),c.jsxs("div",{className:"todo-text-wrapper",children:[c.jsx("span",{className:"todo-text",children:m.text}),m.createdAt&&c.jsx("span",{className:"todo-time",children:h(m.createdAt)})]}),c.jsx("button",{className:"btn btn-icon btn-ghost btn-sm todo-delete",onClick:()=>l(m.id),children:c.jsx(dn,{size:14})})]},m.id))})]})}function Ij({version:t}){const{updateVersion:e}=Ke(),[n,r]=F.useState(""),[s,i]=F.useState(""),[o,l]=F.useState(!1),u=(t==null?void 0:t.errors)||[],h=()=>{if(!n.trim()||!t)return;const w={id:Date.now(),title:n.trim(),description:s.trim(),resolved:!1,createdAt:new Date};e(t.id,{errors:[...u,w]}),r(""),i(""),l(!1)},f=w=>{e(t.id,{errors:u.map(x=>x.id===w?{...x,resolved:!x.resolved}:x)})},g=w=>{e(t.id,{errors:u.filter(x=>x.id!==w)})},m=u.filter(w=>!w.resolved).length;return c.jsxs("div",{className:"error-list",children:[c.jsxs("div",{className:"error-header",children:[c.jsx("div",{className:"error-stats",children:m>0?c.jsxs("span",{className:"badge badge-error",children:[m," unresolved"]}):c.jsx("span",{className:"badge badge-success",children:"All resolved"})}),c.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>l(!o),children:[c.jsx(Tt,{size:16}),"Log Error"]})]}),o&&c.jsxs("div",{className:"error-form",children:[c.jsx("input",{type:"text",className:"input",placeholder:"Error title...",value:n,onChange:w=>r(w.target.value),autoFocus:!0}),c.jsx("textarea",{className:"input textarea",placeholder:"Description (optional)...",value:s,onChange:w=>i(w.target.value),rows:3}),c.jsxs("div",{className:"error-form-actions",children:[c.jsx("button",{className:"btn btn-ghost",onClick:()=>l(!1),children:"Cancel"}),c.jsx("button",{className:"btn btn-primary",onClick:h,disabled:!n.trim(),children:"Add Error"})]})]}),u.length===0?c.jsxs("div",{className:"error-empty",children:[c.jsx(rj,{size:48}),c.jsx("h3",{children:"No errors logged"}),c.jsx("p",{children:"Track bugs and issues for this version here"})]}):c.jsx("ul",{className:"error-items",children:u.map(w=>c.jsxs("li",{className:`error-item ${w.resolved?"resolved":""}`,children:[c.jsx("button",{className:"error-status",onClick:()=>f(w.id),title:w.resolved?"Mark as unresolved":"Mark as resolved",children:w.resolved?c.jsx(sj,{size:20}):c.jsx(Kp,{size:20})}),c.jsxs("div",{className:"error-content",children:[c.jsx("h4",{className:"error-title",children:w.title}),w.description&&c.jsx("p",{className:"error-description",children:w.description}),c.jsx("span",{className:"error-date",children:new Date(w.createdAt).toLocaleDateString()})]}),c.jsx("button",{className:"btn btn-icon btn-ghost btn-sm error-delete",onClick:()=>g(w.id),children:c.jsx(dn,{size:14})})]},w.id))})]})}function Sj({resources:t}){const{addResource:e,deleteResource:n,currentVersion:r}=Ke(),[s,i]=F.useState(!1),[o,l]=F.useState({name:"",url:"",description:""}),u=async()=>{!o.url.trim()||!r||(await e(r.id,{type:"link",name:o.name.trim()||h(o.url),url:o.url.trim(),metadata:{description:o.description.trim(),platform:f(o.url)}}),l({name:"",url:"",description:""}),i(!1))},h=w=>{try{return`Chat - ${new URL(w).hostname}`}catch{return"AI Chat Link"}},f=w=>{const x=w.toLowerCase();return x.includes("chat.openai")||x.includes("chatgpt")?"chatgpt":x.includes("claude.ai")?"claude":x.includes("gemini.google")||x.includes("bard")?"gemini":x.includes("copilot")?"copilot":x.includes("perplexity")?"perplexity":"other"},g=w=>{const x={chatgpt:"🤖",claude:"🧠",gemini:"✨",copilot:"💻",perplexity:"🔍",other:"💬"};return x[w]||x.other},m=w=>{const x={chatgpt:"#10a37f",claude:"#cc785c",gemini:"#8e44ad",copilot:"#0078d4",perplexity:"#1db954",other:"var(--color-accent)"};return x[w]||x.other};return c.jsxs("div",{className:"ai-links",children:[c.jsxs("div",{className:"ai-links-header",children:[c.jsxs("h3",{children:[c.jsx(fj,{size:18}),"AI Chat Links"]}),c.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>i(!s),children:[c.jsx(Tt,{size:16}),"Add Link"]})]}),s&&c.jsxs("div",{className:"ai-link-form",children:[c.jsx("input",{type:"url",className:"input",placeholder:"https://chat.openai.com/...",value:o.url,onChange:w=>l({...o,url:w.target.value}),autoFocus:!0}),c.jsx("input",{type:"text",className:"input",placeholder:"Name (optional)",value:o.name,onChange:w=>l({...o,name:w.target.value})}),c.jsx("textarea",{className:"input textarea",placeholder:"What was this chat about? (optional)",value:o.description,onChange:w=>l({...o,description:w.target.value}),rows:2}),c.jsxs("div",{className:"form-actions",children:[c.jsx("button",{className:"btn btn-ghost",onClick:()=>i(!1),children:"Cancel"}),c.jsx("button",{className:"btn btn-primary",onClick:u,disabled:!o.url.trim(),children:"Add Link"})]})]}),t.length===0?c.jsxs("div",{className:"ai-links-empty",children:[c.jsx(nj,{size:48}),c.jsx("h3",{children:"No AI chat links yet"}),c.jsx("p",{children:"Save links to AI conversations you used for this project"})]}):c.jsx("div",{className:"ai-links-grid",children:t.map(w=>{var R,b;const x=((R=w.metadata)==null?void 0:R.platform)||"other";return c.jsxs("a",{href:w.url,target:"_blank",rel:"noopener noreferrer",className:"ai-link-card",style:{"--platform-color":m(x)},children:[c.jsx("div",{className:"ai-link-icon",children:g(x)}),c.jsxs("div",{className:"ai-link-content",children:[c.jsx("h4",{className:"ai-link-name",children:w.name}),((b=w.metadata)==null?void 0:b.description)&&c.jsx("p",{className:"ai-link-description truncate",children:w.metadata.description}),c.jsx("span",{className:"ai-link-url truncate",children:w.url})]}),c.jsxs("div",{className:"ai-link-actions",children:[c.jsx(rT,{size:16}),c.jsx("button",{className:"btn btn-icon btn-ghost btn-sm",onClick:S=>{S.preventDefault(),S.stopPropagation(),n(w.id)},children:c.jsx(dn,{size:14})})]})]},w.id)})})]})}function xj({resources:t,onAdd:e}){var m,w;const{deleteResource:n}=Ke(),[r,s]=F.useState(null),[i,o]=F.useState(""),l=t.filter(x=>x.type==="bin"),u=t.filter(x=>x.type==="ino"),h=async x=>{if(s(x),x.type==="ino")try{if(x.url){const b=await(await fetch(x.url)).text();o(b)}else if(x.data instanceof Oo){const R=await x.data.text();o(R)}else o("Error: File content unavailable.")}catch(R){console.error("Failed to load file content:",R),o("Error loading file content.")}else o("")},f=x=>{const R=x.url||(x.data?URL.createObjectURL(x.data):null);if(!R)return;const b=document.createElement("a");b.href=R,b.download=x.name,document.body.appendChild(b),b.click(),document.body.removeChild(b),x.url||URL.revokeObjectURL(R)},g=x=>{if(!x&&x!==0)return"Unknown";if(x===0)return"0 B";const R=1024,b=["B","KB","MB"],S=Math.floor(Math.log(x)/Math.log(R));return parseFloat((x/Math.pow(R,S)).toFixed(1))+" "+b[S]};return t.length===0?c.jsxs("div",{className:"code-empty",children:[c.jsx(ma,{size:48}),c.jsx("h3",{children:"No code files yet"}),c.jsx("p",{children:"Add .bin (compiled firmware) or .ino (Arduino source) files"}),c.jsxs("button",{className:"btn btn-primary",onClick:e,children:[c.jsx(Tt,{size:18}),"Add Code Files"]})]}):c.jsxs("div",{className:"code-viewer",children:[c.jsxs("div",{className:"code-sidebar",children:[c.jsxs("div",{className:"code-section",children:[c.jsxs("h4",{className:"code-section-title",children:[c.jsx(Oo,{size:14}),"Compiled (.bin)"]}),c.jsxs("ul",{className:"code-list",children:[l.map(x=>{var R,b;return c.jsx("li",{children:c.jsxs("button",{className:`code-file ${(r==null?void 0:r.id)===x.id?"active":""}`,onClick:()=>h(x),children:[c.jsx("span",{className:"badge badge-accent",children:"BIN"}),c.jsx("span",{className:"code-file-name truncate",children:x.name}),c.jsx("span",{className:"code-file-size",children:g(((R=x.metadata)==null?void 0:R.size)||((b=x.data)==null?void 0:b.size))})]})},x.id)}),l.length===0&&c.jsx("li",{className:"code-empty-section",children:"No .bin files"})]})]}),c.jsxs("div",{className:"code-section",children:[c.jsxs("h4",{className:"code-section-title",children:[c.jsx(aj,{size:14}),"Source (.ino)"]}),c.jsxs("ul",{className:"code-list",children:[u.map(x=>{var R,b;return c.jsx("li",{children:c.jsxs("button",{className:`code-file ${(r==null?void 0:r.id)===x.id?"active":""}`,onClick:()=>h(x),children:[c.jsx("span",{className:"badge badge-success",children:"INO"}),c.jsx("span",{className:"code-file-name truncate",children:x.name}),c.jsx("span",{className:"code-file-size",children:g(((R=x.metadata)==null?void 0:R.size)||((b=x.data)==null?void 0:b.size))})]})},x.id)}),u.length===0&&c.jsx("li",{className:"code-empty-section",children:"No .ino files"})]})]}),c.jsxs("button",{className:"btn btn-secondary code-add",onClick:e,children:[c.jsx(Tt,{size:16}),"Add Files"]})]}),c.jsx("div",{className:"code-content",children:r?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"code-header",children:[c.jsxs("div",{className:"code-file-info",children:[c.jsx("h3",{children:r.name}),c.jsx("span",{className:"text-muted",children:g(((m=r.metadata)==null?void 0:m.size)||((w=r.data)==null?void 0:w.size))})]}),c.jsxs("div",{className:"code-actions",children:[c.jsxs("button",{className:"btn btn-sm btn-secondary",onClick:()=>f(r),children:[c.jsx(Yd,{size:14}),"Download"]}),c.jsx("button",{className:"btn btn-sm btn-ghost text-error",onClick:()=>{n(r.id),s(null)},children:c.jsx(dn,{size:14})})]})]}),r.type==="ino"&&i?c.jsx("pre",{className:"code-preview",children:c.jsx("code",{children:i})}):c.jsxs("div",{className:"code-binary-info",children:[c.jsx(Oo,{size:64}),c.jsx("h4",{children:"Binary File"}),c.jsx("p",{children:"This is a compiled firmware file ready for flashing."}),c.jsx("p",{className:"text-muted",children:'Use the "USB Flash" tab to upload this file to your board.'})]})]}):c.jsxs("div",{className:"code-placeholder",children:[c.jsx(ma,{size:48}),c.jsx("p",{children:"Select a file to view details"})]})})]})}const kj=115200;function Aj({resources:t}){const[e,n]=F.useState(null),[r,s]=F.useState(!1),[i,o]=F.useState(!1),[l,u]=F.useState(0),[h,f]=F.useState("disconnected"),[g,m]=F.useState(null),[w,x]=F.useState([]),R=F.useRef(null),b=t.filter(_=>_.type==="bin"),S=(_,y="info")=>{const T=new Date().toLocaleTimeString();x(E=>[...E,{message:_,type:y,timestamp:T}])};F.useEffect(()=>{R.current&&(R.current.scrollTop=R.current.scrollHeight)},[w]);const I=()=>"serial"in navigator,A=async()=>{var _;if(!I()){S("WebSerial not supported. Use Chrome or Edge.","error");return}try{f("connecting"),S("Requesting serial port...");const y=await navigator.serial.requestPort();await y.open({baudRate:kj}),n(y),s(!0),f("connected"),S("Connected successfully!","success");const T=y.getInfo();T.usbVendorId&&S(`Device: VID ${T.usbVendorId.toString(16).toUpperCase()} PID ${(_=T.usbProductId)==null?void 0:_.toString(16).toUpperCase()}`)}catch(y){f("error"),S(`Connection failed: ${y.message}`,"error")}},D=async()=>{if(e)try{await e.close(),n(null),s(!1),f("disconnected"),S("Disconnected","info")}catch(_){S(`Disconnect error: ${_.message}`,"error")}},N=async()=>{if(!e||!g){S("No port or file selected","error");return}try{o(!0),u(0),f("flashing"),S(`Starting flash: ${g.name}`);let _;if(g.url){S("Downloading firmware from cloud...");const C=await fetch(g.url);if(!C.ok)throw new Error("Failed to download firmware");_=await C.arrayBuffer()}else if(g.data)_=await g.data.arrayBuffer();else throw new Error("Firmware data unavailable");const y=new Uint8Array(_),T=y.length;S(`File size: ${T} bytes`);const E=e.writable.getWriter(),k=1024;let P=0;for(let C=0;C<T;C+=k){const se=y.slice(C,Math.min(C+k,T));await E.write(se),P+=se.length;const Pe=Math.round(P/T*100);u(Pe),Pe%25===0&&Pe>0&&S(`Progress: ${Pe}%`),await new Promise(mt=>setTimeout(mt,10))}E.releaseLock(),u(100),f("success"),S("Flash completed successfully!","success")}catch(_){f("error"),S(`Flash failed: ${_.message}`,"error")}finally{o(!1)}},V=async()=>{if(e)try{S("Resetting device..."),await e.setSignals({dataTerminalReady:!1,requestToSend:!0}),await new Promise(_=>setTimeout(_,100)),await e.setSignals({dataTerminalReady:!0,requestToSend:!1}),S("Device reset complete","success")}catch(_){S(`Reset failed: ${_.message}`,"error")}};return I()?c.jsxs("div",{className:"firmware-flasher",children:[c.jsxs("div",{className:"flasher-main",children:[c.jsxs("div",{className:"flasher-panel",children:[c.jsxs("h3",{children:[c.jsx($_,{size:18}),"USB Connection"]}),c.jsxs("div",{className:"connection-status",children:[c.jsx("span",{className:`status-indicator ${h}`}),c.jsxs("span",{className:"status-text",children:[h==="disconnected"&&"Not connected",h==="connecting"&&"Connecting...",h==="connected"&&"Connected",h==="flashing"&&"Flashing...",h==="success"&&"Success!",h==="error"&&"Error"]})]}),c.jsx("div",{className:"connection-actions",children:r?c.jsxs(c.Fragment,{children:[c.jsxs("button",{className:"btn btn-secondary",onClick:V,children:[c.jsx(mj,{size:16}),"Reset"]}),c.jsxs("button",{className:"btn btn-ghost",onClick:D,children:[c.jsx(jt,{size:16}),"Disconnect"]})]}):c.jsxs("button",{className:"btn btn-primary",onClick:A,disabled:h==="connecting",children:[c.jsx($_,{size:16}),"Connect Device"]})})]}),c.jsxs("div",{className:"flasher-panel",children:[c.jsxs("h3",{children:[c.jsx(Eu,{size:18}),"Firmware File"]}),b.length>0?c.jsx("div",{className:"file-select",children:c.jsxs("select",{className:"input",value:(g==null?void 0:g.id)||"",onChange:_=>{const y=b.find(T=>T.id===Number(_.target.value));m(y)},children:[c.jsx("option",{value:"",children:"Select a .bin file"}),b.map(_=>{var y,T;return c.jsxs("option",{value:_.id,children:[_.name," (",((((y=_.metadata)==null?void 0:y.size)||((T=_.data)==null?void 0:T.size))/1024).toFixed(1)," KB)"]},_.id)})]})}):c.jsx("p",{className:"text-muted",children:"No .bin files in this version. Add firmware files in the Code tab."})]}),c.jsxs("div",{className:"flasher-panel flasher-action",children:[c.jsx("button",{className:"btn btn-primary btn-lg flash-button",onClick:N,disabled:!r||!g||i,children:i?c.jsxs(c.Fragment,{children:[c.jsx("span",{className:"loading-spinner"}),"Flashing... ",l,"%"]}):c.jsxs(c.Fragment,{children:[c.jsx(ef,{size:20}),"Flash Firmware"]})}),i&&c.jsx("div",{className:"progress-bar",children:c.jsx("div",{className:"progress-bar-fill",style:{width:`${l}%`}})})]})]}),c.jsxs("div",{className:"flasher-log",ref:R,children:[c.jsx("h4",{children:"Console Log"}),c.jsxs("div",{className:"log-content",children:[w.map((_,y)=>c.jsxs("div",{className:`log-entry log-${_.type}`,children:[c.jsxs("span",{className:"log-time",children:["[",_.timestamp,"]"]}),c.jsx("span",{className:"log-message",children:_.message})]},y)),w.length===0&&c.jsx("div",{className:"log-empty",children:"Logs will appear here..."})]})]})]}):c.jsxs("div",{className:"flasher-unsupported",children:[c.jsx(tj,{size:48}),c.jsx("h3",{children:"WebSerial Not Supported"}),c.jsxs("p",{children:["Your browser doesn't support WebSerial API.",c.jsx("br",{}),"Please use ",c.jsx("strong",{children:"Google Chrome"})," or ",c.jsx("strong",{children:"Microsoft Edge"}),"."]})]})}const q_=[{id:"image",label:"Image",icon:Mi,accept:"image/*"},{id:"video",label:"Video",icon:lT,accept:"video/*"},{id:"schematic",label:"Schematic",icon:Yp,accept:"image/*"},{id:"bin",label:"Firmware (.bin)",icon:ma,accept:".bin"},{id:"ino",label:"Source (.ino)",icon:ma,accept:".ino"}];function Cj({onClose:t,versionId:e,defaultType:n="image"}){const{addResource:r}=Ke(),[s,i]=F.useState(n),[o,l]=F.useState([]),[u,h]=F.useState(!1),[f,g]=F.useState(!1),m=F.useRef(null),w=F.useCallback(N=>{var y;const V=(y=N.clipboardData)==null?void 0:y.items;if(!V)return;const _=[];for(let T=0;T<V.length;T++){const E=V[T];if(E.kind==="file"){const k=E.getAsFile();if(k){let P=k.name;(P==="image.png"||!P)&&(P=`pasted-image-${Date.now()}.png`);const C=new Oo([k],P,{type:k.type});_.push(C)}}}_.length>0&&(N.preventDefault(),l(T=>[...T,..._]))},[]);F.useEffect(()=>(document.addEventListener("paste",w),()=>{document.removeEventListener("paste",w)}),[w]);const x=F.useCallback(N=>{N.preventDefault(),h(!0)},[]),R=F.useCallback(N=>{N.preventDefault(),h(!1)},[]),b=F.useCallback(N=>{N.preventDefault(),h(!1);const V=Array.from(N.dataTransfer.files);l(_=>[..._,...V])},[]),S=N=>{const V=Array.from(N.target.files);l(_=>[..._,...V])},I=N=>{l(V=>V.filter((_,y)=>y!==N))},A=async()=>{if(!(!e||o.length===0)){g(!0);try{for(const N of o)await r(e,{type:s,name:N.name,data:N,metadata:{mimeType:N.type,size:N.size,lastModified:N.lastModified}});t()}catch(N){console.error("Upload failed:",N)}finally{g(!1)}}},D=q_.find(N=>N.id===s);return c.jsx("div",{className:"modal-overlay",onClick:t,children:c.jsxs("div",{className:"modal",onClick:N=>N.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h2",{children:"Add Files"}),c.jsx("button",{className:"btn btn-icon btn-ghost",onClick:t,children:c.jsx(jt,{size:20})})]}),c.jsxs("div",{className:"modal-content",children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"label",children:"File Type"}),c.jsx("div",{className:"file-type-selector",children:q_.map(N=>{const V=N.icon;return c.jsxs("button",{type:"button",className:`file-type-btn ${s===N.id?"active":""}`,onClick:()=>i(N.id),children:[c.jsx(V,{size:18}),c.jsx("span",{children:N.label})]},N.id)})})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"label",children:"Files"}),c.jsxs("div",{ref:m,className:`dropzone ${u?"active":""}`,onDragOver:x,onDragLeave:R,onDrop:b,children:[c.jsx("input",{type:"file",multiple:!0,accept:D==null?void 0:D.accept,onChange:S,style:{display:"none"},id:"file-input"}),c.jsxs("label",{htmlFor:"file-input",style:{cursor:"pointer",display:"contents"},children:[c.jsx(ef,{className:"dropzone-icon"}),c.jsxs("p",{children:["Drag files, click to browse, or ",c.jsx("strong",{children:"paste from clipboard"})]}),c.jsxs("div",{className:"dropzone-hint",children:[c.jsx(wu,{size:14}),c.jsx("span",{children:"Ctrl+V to paste images"})]})]})]})]}),o.length>0&&c.jsxs("div",{className:"form-group",children:[c.jsxs("label",{className:"label",children:["Selected Files (",o.length,")"]}),c.jsx("ul",{className:"file-list",children:o.map((N,V)=>c.jsxs("li",{className:"file-item",children:[c.jsx(Oo,{size:16}),c.jsx("span",{className:"file-name truncate",children:N.name}),c.jsxs("span",{className:"file-size",children:[(N.size/1024).toFixed(1)," KB"]}),c.jsx("button",{type:"button",className:"btn btn-icon btn-ghost btn-sm",onClick:()=>I(V),children:c.jsx(jt,{size:14})})]},V))})]}),c.jsxs("div",{className:"modal-footer",children:[c.jsx("button",{type:"button",className:"btn btn-secondary",onClick:t,children:"Cancel"}),c.jsx("button",{type:"button",className:"btn btn-primary",onClick:A,disabled:o.length===0||f,children:f?c.jsxs(c.Fragment,{children:[c.jsx("span",{className:"loading-spinner",style:{width:16,height:16}}),"Uploading..."]}):c.jsxs(c.Fragment,{children:[c.jsx(ef,{size:16}),"Upload ",o.length," File",o.length!==1?"s":""]})})]})]})]})})}function Nj({onClose:t,projectId:e,parentVersion:n,versions:r}){var I;const{createVersion:s,selectVersion:i}=Ke(),[o,l]=F.useState(""),[u,h]=F.useState(""),[f,g]=F.useState((n==null?void 0:n.id)||null),[m,w]=F.useState(!0),[x,R]=F.useState(!1),b=()=>{if(!r.length)return"v1.0";const A=r.filter(N=>N.parentVersionId===f),D=r.find(N=>N.id===f);if(D){const N=D.name.match(/v?(\d+)\.(\d+)/);if(N){const V=parseInt(N[1]),_=parseInt(N[2]);return A.length>0?`v${V}.${_}-branch${A.length+1}`:`v${V}.${_+1}`}}return`v1.${r.length}`},S=async A=>{if(A.preventDefault(),!!o.trim()){R(!0);try{const D=await s(e,{name:o.trim(),description:u.trim(),parentVersionId:f,copyResources:m,todos:[],errors:[]});await i(D),t()}catch(D){console.error("Failed to create version:",D)}finally{R(!1)}}};return c.jsx("div",{className:"modal-overlay",onClick:t,children:c.jsxs("div",{className:"modal",onClick:A=>A.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h2",{children:"Create New Version"}),c.jsx("button",{className:"btn btn-icon btn-ghost",onClick:t,children:c.jsx(jt,{size:20})})]}),c.jsxs("form",{onSubmit:S,className:"modal-content",children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"label",children:"Version Name *"}),c.jsx("input",{type:"text",className:"input",placeholder:b(),value:o,onChange:A=>l(A.target.value),autoFocus:!0,required:!0}),c.jsxs("span",{className:"form-hint",children:["Suggested: ",b()]})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"label",children:"Description"}),c.jsx("textarea",{className:"input textarea",placeholder:"What changes in this version?",value:u,onChange:A=>h(A.target.value),rows:2})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"label",children:"Branch From"}),c.jsxs("select",{className:"input",value:f||"",onChange:A=>g(A.target.value?Number(A.target.value):null),children:[c.jsx("option",{value:"",children:"None (New Root)"}),r.map(A=>c.jsxs("option",{value:A.id,children:[A.name," ",A.id===(n==null?void 0:n.id)?"(current)":""]},A.id))]})]}),f&&c.jsx("div",{className:"form-group",children:c.jsxs("label",{className:"checkbox-label",children:[c.jsx("input",{type:"checkbox",checked:m,onChange:A=>w(A.target.checked)}),c.jsx(oj,{size:16}),c.jsx("span",{children:"Copy files from parent version"})]})}),c.jsxs("div",{className:"version-preview",children:[c.jsx(ki,{size:16}),c.jsx("span",{children:f?c.jsxs(c.Fragment,{children:["Creating branch from ",c.jsx("strong",{children:(I=r.find(A=>A.id===f))==null?void 0:I.name})]}):c.jsx(c.Fragment,{children:"Creating new root version"})})]}),c.jsxs("div",{className:"modal-footer",children:[c.jsx("button",{type:"button",className:"btn btn-secondary",onClick:t,children:"Cancel"}),c.jsx("button",{type:"submit",className:"btn btn-primary",disabled:!o.trim()||x,children:x?c.jsxs(c.Fragment,{children:[c.jsx("span",{className:"loading-spinner",style:{width:16,height:16}}),"Creating..."]}):c.jsxs(c.Fragment,{children:[c.jsx(ki,{size:16}),"Create Version"]})})]})]})]})})}function Rj({onClose:t,project:e}){const{updateProject:n,folders:r}=Ke(),[s,i]=F.useState(e.name),[o,l]=F.useState(e.description||""),[u,h]=F.useState(e.folderId||""),[f,g]=F.useState(e.tags?e.tags.join(", "):""),[m,w]=F.useState(null),[x,R]=F.useState(e.thumbnailUrl||null),[b,S]=F.useState(!1),[I,A]=F.useState(!1),D=k=>{const P=k.target.files[0];P&&(w(P),R(URL.createObjectURL(P)))},N=k=>{k&&k.type.startsWith("image/")&&(w(k),R(URL.createObjectURL(k)))},V=F.useCallback(k=>{var C;if(k.target.tagName==="INPUT"||k.target.tagName==="TEXTAREA")return;const P=(C=k.clipboardData)==null?void 0:C.items;if(P)for(let se=0;se<P.length;se++){const Pe=P[se];if(Pe.kind==="file"&&Pe.type.startsWith("image/")){const mt=Pe.getAsFile();if(mt){k.preventDefault();const qt=new File([mt],`thumbnail-${Date.now()}.png`,{type:mt.type});N(qt);break}}}},[]),_=k=>{k.preventDefault(),S(!0)},y=k=>{k.preventDefault(),S(!1)},T=k=>{k.preventDefault(),S(!1);const P=k.dataTransfer.files;P.length>0&&N(P[0])};F.useEffect(()=>(document.addEventListener("paste",V),()=>document.removeEventListener("paste",V)),[V]);const E=async k=>{k.preventDefault(),A(!0);try{const P=f.split(",").map(se=>se.trim()).filter(Boolean),C={name:s,description:o,folderId:u||null,tags:P,thumbnail:m};!x&&!m&&(C.thumbnailUrl=null),await n(e.id,C),t()}catch(P){console.error("Failed to update project:",P),alert("Failed to update project")}finally{A(!1)}};return c.jsx("div",{className:"modal-overlay",onClick:t,children:c.jsxs("div",{className:"modal",onClick:k=>k.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h2",{children:"Edit Project"}),c.jsx("button",{className:"btn btn-icon btn-ghost",onClick:t,children:c.jsx(jt,{size:20})})]}),c.jsxs("form",{onSubmit:E,className:"modal-content",children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"label",children:"Project Name"}),c.jsx("input",{type:"text",className:"input",value:s,onChange:k=>i(k.target.value),required:!0})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"label",children:"Thumbnail"}),c.jsx("div",{className:"thumbnail-upload",children:x?c.jsxs("div",{className:"thumbnail-preview",children:[c.jsx("img",{src:x,alt:"Preview"}),c.jsx("button",{type:"button",className:"btn btn-icon btn-ghost thumbnail-remove",onClick:()=>{w(null),R(null)},children:c.jsx(jt,{size:16})})]}):c.jsxs("label",{className:`dropzone thumbnail-dropzone ${b?"active":""}`,onDragOver:_,onDragLeave:y,onDrop:T,children:[c.jsx("input",{type:"file",accept:"image/*",onChange:D,hidden:!0}),c.jsx(Mi,{size:24,className:"dropzone-icon"}),c.jsx("span",{children:"Change Thumbnail"}),c.jsxs("div",{className:"dropzone-hint",children:[c.jsx(wu,{size:14}),c.jsx("span",{children:"Paste / Drop"})]})]})})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"label",children:"Description"}),c.jsx("textarea",{className:"input textarea",value:o,onChange:k=>l(k.target.value),rows:3})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"label",children:c.jsxs("span",{className:"flex items-center gap-sm",children:[c.jsx(Xd,{size:14})," Folder"]})}),c.jsxs("select",{className:"input",value:u,onChange:k=>h(k.target.value),children:[c.jsx("option",{value:"",children:"(No Folder)"}),r.map(k=>c.jsx("option",{value:k.id,children:k.name},k.id))]})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"label",children:c.jsxs("span",{className:"flex items-center gap-sm",children:[c.jsx(aT,{size:14})," Tags"]})}),c.jsx("input",{type:"text",className:"input",value:f,onChange:k=>g(k.target.value),placeholder:"iot, v1 (comma separated)"})]})]}),c.jsxs("div",{className:"modal-footer",children:[c.jsx("button",{type:"button",className:"btn btn-secondary",onClick:t,children:"Cancel"}),c.jsxs("button",{className:"btn btn-primary",onClick:E,disabled:I,children:[I?c.jsx("div",{className:"loading-spinner sm"}):c.jsx(gj,{size:18}),"Save Changes"]})]})]})})}function Pj({resources:t}){const{addResource:e,deleteResource:n,updateResource:r,currentVersion:s}=Ke(),[i,o]=F.useState(""),[l,u]=F.useState(!1),[h,f]=F.useState(""),[g,m]=F.useState(null),[w,x]=F.useState(""),[R,b]=F.useState("list"),S=async()=>{if(!(!i.trim()||!s)){u(!0);try{await e(s.id,{type:"note",name:"Note",metadata:{content:i.trim()}}),o("")}catch(E){console.error("Failed to add note:",E)}finally{u(!1)}}},I=E=>{E.key==="Enter"&&E.ctrlKey&&S()},A=E=>{var k;m(E.id),x(((k=E.metadata)==null?void 0:k.content)||"")},D=()=>{m(null),x("")},N=async E=>{if(w.trim())try{await r(E,{metadata:{content:w.trim()}}),m(null),x("")}catch(k){console.error("Failed to update note:",k)}},V=(E,k)=>{E.key==="Enter"&&E.ctrlKey?N(k):E.key==="Escape"&&D()},_=E=>E?new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"}).format(E):"",y=t.filter(E=>{var P,C;return(((P=E.metadata)==null?void 0:P.content)||((C=E.metadata)==null?void 0:C.text)||"").toLowerCase().includes(h.toLowerCase())}),T=E=>{const k=["var(--note-tint-1, rgba(255,255,255,0.02))","var(--note-tint-2, rgba(100,180,255,0.04))","var(--note-tint-3, rgba(180,100,255,0.03))","var(--note-tint-4, rgba(100,255,180,0.03))","var(--note-tint-5, rgba(255,200,100,0.03))"];return k[E%k.length]};return c.jsxs("div",{className:"text-entries",children:[c.jsxs("div",{className:"entries-header",children:[c.jsxs("h3",{children:[c.jsx(ga,{size:18}),"Project Notes"]}),c.jsxs("div",{className:"entries-header-right",children:[c.jsxs("div",{className:"entries-search",children:[c.jsx(Jp,{size:14}),c.jsx("input",{type:"text",placeholder:"Search notes...",value:h,onChange:E=>f(E.target.value),className:"search-input"})]}),c.jsxs("div",{className:"entries-view-toggle",children:[c.jsx("button",{className:`btn btn-icon btn-ghost btn-sm ${R==="list"?"active":""}`,onClick:()=>b("list"),title:"List view",children:c.jsx(iT,{size:16})}),c.jsx("button",{className:`btn btn-icon btn-ghost btn-sm ${R==="cards"?"active":""}`,onClick:()=>b("cards"),title:"Card view",children:c.jsx(sT,{size:16})})]})]})]}),c.jsxs("div",{className:"entries-input-wrapper",children:[c.jsx("textarea",{className:"input entry-textarea",placeholder:"Type a note... (Ctrl+Enter to add)",value:i,onChange:E=>o(E.target.value),onKeyDown:I}),c.jsx("div",{className:"entries-input-actions",children:c.jsxs("button",{className:"btn btn-primary btn-sm",onClick:S,disabled:!i.trim()||l,children:[c.jsx(Tt,{size:16}),"Add Note"]})})]}),c.jsx("div",{className:"entries-content",children:y.length===0?c.jsxs("div",{className:"entries-empty",children:[c.jsx(ga,{size:48}),c.jsx("h3",{children:h?"No matching notes":"No notes yet"}),c.jsx("p",{children:h?"Try a different search term.":"Add notes, ideas, or logs for this version."})]}):c.jsx("div",{className:`entries-list ${R==="cards"?"entries-grid":""}`,children:y.map((E,k)=>{var P,C;return c.jsxs("div",{className:`entry-card ${g===E.id?"editing":""}`,style:{background:T(k)},children:[c.jsxs("div",{className:"entry-header",children:[c.jsxs("span",{className:"entry-timestamp",children:[c.jsx(nT,{size:12}),_(E.createdAt)]}),c.jsx("div",{className:"entry-actions",children:g===E.id?c.jsxs(c.Fragment,{children:[c.jsx("button",{className:"btn btn-icon btn-ghost btn-sm text-success",onClick:()=>N(E.id),title:"Save (Ctrl+Enter)",children:c.jsx(Lo,{size:14})}),c.jsx("button",{className:"btn btn-icon btn-ghost btn-sm",onClick:D,title:"Cancel (Esc)",children:c.jsx(jt,{size:14})})]}):c.jsxs(c.Fragment,{children:[c.jsx("button",{className:"btn btn-icon btn-ghost btn-sm",onClick:()=>A(E),title:"Edit note",children:c.jsx(oT,{size:14})}),c.jsx("button",{className:"btn btn-icon btn-ghost btn-sm text-error",onClick:()=>n(E.id),title:"Delete note",children:c.jsx(dn,{size:14})})]})})]}),g===E.id?c.jsx("textarea",{className:"input entry-edit-textarea",value:w,onChange:se=>x(se.target.value),onKeyDown:se=>V(se,E.id),autoFocus:!0}):c.jsx("div",{className:"entry-content",onClick:()=>A(E),children:((P=E.metadata)==null?void 0:P.content)||((C=E.metadata)==null?void 0:C.text)||""})]},E.id)})})})]})}const bj=[{id:"gallery",label:"Gallery",icon:Mi},{id:"code",label:"Code",icon:ma},{id:"notes",label:"Notes",icon:ga},{id:"schematics",label:"Schematics",icon:Yp},{id:"flasher",label:"USB Flash",icon:Eu},{id:"links",label:"AI Chats",icon:lj},{id:"todo",label:"To-Do",icon:ui},{id:"errors",label:"Errors",icon:Kp}];function jj(){const{currentProject:t,currentVersion:e,versions:n,resources:r,selectProject:s,deleteProject:i,selectVersion:o}=Ke(),[l,u]=F.useState("gallery"),[h,f]=F.useState(!1),[g,m]=F.useState(!1),[w,x]=F.useState(!1),[R,b]=F.useState(!1);if(!t)return null;const S=()=>{s(null)},I=async()=>{await i(t.id)},A=()=>{switch(l){case"gallery":return r.filter(N=>N.type==="image"||N.type==="video");case"code":return r.filter(N=>N.type==="bin"||N.type==="ino");case"schematics":return r.filter(N=>N.type==="schematic");case"notes":return r.filter(N=>N.type==="note");case"links":return r.filter(N=>N.type==="link");default:return[]}},D=()=>{switch(l){case"gallery":return c.jsx(H_,{resources:A(),onAdd:()=>f(!0)});case"code":return c.jsx(xj,{resources:A(),onAdd:()=>f(!0)});case"schematics":return c.jsx(H_,{resources:A(),onAdd:()=>f(!0),type:"schematic"});case"notes":return c.jsx(Pj,{resources:A()});case"flasher":return c.jsx(Aj,{resources:r.filter(N=>N.type==="bin")});case"links":return c.jsx(Sj,{resources:A()});case"todo":return c.jsx(Tj,{version:e});case"errors":return c.jsx(Ij,{version:e});default:return null}};return c.jsxs("div",{className:"project-detail animate-fadeIn",children:[c.jsxs("div",{className:"detail-header",children:[c.jsxs("button",{className:"btn btn-ghost",onClick:S,children:[c.jsx(Qp,{size:18}),"Back"]}),c.jsxs("div",{className:"detail-actions",children:[c.jsxs("button",{className:"btn btn-secondary",onClick:()=>b(!0),children:[c.jsx(pj,{size:16}),"Edit"]}),c.jsx("button",{className:"btn btn-ghost text-error",onClick:()=>m(!0),children:c.jsx(dn,{size:16})})]})]}),c.jsxs("div",{className:"detail-info",children:[c.jsx("div",{className:"detail-thumbnail",children:t.thumbnailUrl||t.thumbnail?c.jsx("img",{src:t.thumbnailUrl||URL.createObjectURL(t.thumbnail),alt:t.name}):c.jsx("div",{className:"detail-thumbnail-placeholder",children:c.jsx(Eu,{size:48})})}),c.jsxs("div",{className:"detail-meta",children:[c.jsx("h1",{className:"detail-title",children:t.name}),t.description&&c.jsx("p",{className:"detail-description",children:t.description}),e&&c.jsxs("div",{className:"version-badge",children:[c.jsx(ki,{size:14}),c.jsx("span",{children:e.name})]}),t.tags&&t.tags.length>0&&c.jsx("div",{className:"tags-list",children:t.tags.map((N,V)=>c.jsxs("span",{className:"badge badge-sm",children:[c.jsx(Tag,{size:12})," ",N]},V))})]})]}),c.jsxs("div",{className:"version-section",children:[c.jsxs("div",{className:"section-header",children:[c.jsxs("h2",{children:[c.jsx(ki,{size:18}),"Version Tree"]}),c.jsxs("button",{className:"btn btn-sm btn-secondary",onClick:()=>x(!0),children:[c.jsx(Tt,{size:14}),"New Version"]})]}),c.jsx(Ej,{versions:n,currentVersionId:e==null?void 0:e.id,onSelectVersion:o})]}),c.jsx("div",{className:"tabs",children:bj.map(N=>{const V=N.icon;return c.jsxs("button",{className:`tab ${l===N.id?"active":""}`,onClick:()=>u(N.id),children:[c.jsx(V,{size:16}),c.jsx("span",{children:N.label})]},N.id)})}),c.jsx("div",{className:"tab-content",children:D()}),h&&c.jsx(Cj,{onClose:()=>f(!1),versionId:e==null?void 0:e.id,defaultType:l==="schematics"?"schematic":l==="code"?"bin":"image"}),w&&c.jsx(Nj,{onClose:()=>x(!1),projectId:t.id,parentVersion:e,versions:n}),R&&c.jsx(Rj,{onClose:()=>b(!1),project:t}),g&&c.jsx("div",{className:"modal-overlay",onClick:()=>m(!1),children:c.jsxs("div",{className:"modal confirm-dialog",onClick:N=>N.stopPropagation(),children:[c.jsxs("div",{className:"modal-content",children:[c.jsx(Kp,{className:"confirm-icon"}),c.jsx("h3",{children:"Delete Project?"}),c.jsxs("p",{className:"text-secondary",children:['This will permanently delete "',t.name,'" and all its versions and files.']})]}),c.jsxs("div",{className:"modal-footer",children:[c.jsx("button",{className:"btn btn-secondary",onClick:()=>m(!1),children:"Cancel"}),c.jsx("button",{className:"btn btn-danger",onClick:I,children:"Delete"})]})]})})]})}function Dj({onClose:t}){const{createProject:e}=Ke(),[n,r]=F.useState(""),[s,i]=F.useState(""),[o,l]=F.useState(null),[u,h]=F.useState(null),[f,g]=F.useState(!1),[m,w]=F.useState(!1),x=N=>{const V=N.target.files[0];V&&(l(V),h(URL.createObjectURL(V)))},R=N=>{N&&N.type.startsWith("image/")&&(l(N),h(URL.createObjectURL(N)))},b=F.useCallback(N=>{var _;if(N.target.tagName==="INPUT"||N.target.tagName==="TEXTAREA")return;const V=(_=N.clipboardData)==null?void 0:_.items;if(V)for(let y=0;y<V.length;y++){const T=V[y];if(T.kind==="file"&&T.type.startsWith("image/")){const E=T.getAsFile();if(E){N.preventDefault();const k=new File([E],`thumbnail-${Date.now()}.png`,{type:E.type});R(k);break}}}},[]),S=N=>{N.preventDefault(),w(!0)},I=N=>{N.preventDefault(),w(!1)},A=N=>{N.preventDefault(),w(!1);const V=N.dataTransfer.files;if(V.length>0){const _=V[0];R(_)}};F.useEffect(()=>(document.addEventListener("paste",b),()=>{document.removeEventListener("paste",b)}),[b]);const D=async N=>{if(N.preventDefault(),!!n.trim()){g(!0);try{await e({name:n.trim(),description:s.trim(),thumbnail:o}),t()}catch(V){console.error("Failed to create project:",V)}finally{g(!1)}}};return c.jsx("div",{className:"modal-overlay",onClick:t,children:c.jsxs("div",{className:"modal",onClick:N=>N.stopPropagation(),children:[c.jsxs("div",{className:"modal-header",children:[c.jsx("h2",{children:"Create New Project"}),c.jsx("button",{className:"btn btn-icon btn-ghost",onClick:t,children:c.jsx(jt,{size:20})})]}),c.jsxs("form",{onSubmit:D,className:"modal-content",children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"label",children:"Project Name *"}),c.jsx("input",{type:"text",className:"input",placeholder:"e.g., RC Car with PS4 Controller",value:n,onChange:N=>r(N.target.value),autoFocus:!0,required:!0})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"label",children:"Description"}),c.jsx("textarea",{className:"input textarea",placeholder:"Describe your project...",value:s,onChange:N=>i(N.target.value),rows:3})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"label",children:"Thumbnail"}),c.jsx("div",{className:"thumbnail-upload",children:u?c.jsxs("div",{className:"thumbnail-preview",children:[c.jsx("img",{src:u,alt:"Preview"}),c.jsx("button",{type:"button",className:"btn btn-icon btn-ghost thumbnail-remove",onClick:()=>{l(null),h(null)},children:c.jsx(jt,{size:16})})]}):c.jsxs("label",{className:`dropzone thumbnail-dropzone ${m?"active":""}`,onDragOver:S,onDragLeave:I,onDrop:A,children:[c.jsx("input",{type:"file",accept:"image/*",onChange:x,hidden:!0}),c.jsx(Mi,{size:24,className:"dropzone-icon"}),c.jsxs("span",{children:["Click, drag, or ",c.jsx("strong",{children:"paste"})," image"]}),c.jsxs("div",{className:"dropzone-hint",children:[c.jsx(wu,{size:14}),c.jsx("span",{children:"Ctrl+V to paste"})]})]})})]}),c.jsxs("div",{className:"modal-footer",children:[c.jsx("button",{type:"button",className:"btn btn-secondary",onClick:t,children:"Cancel"}),c.jsx("button",{type:"submit",className:"btn btn-primary",disabled:!n.trim()||f,children:f?c.jsxs(c.Fragment,{children:[c.jsx("span",{className:"loading-spinner",style:{width:16,height:16}}),"Creating..."]}):"Create Project"})]})]})]})})}function Vj(){const{inspirations:t,addInspiration:e,deleteInspiration:n,setCurrentView:r}=Ke(),[s,i]=F.useState(""),[o,l]=F.useState(!1),[u,h]=F.useState(!1),[f,g]=F.useState(""),[m,w]=F.useState(""),[x,R]=F.useState(""),[b,S]=F.useState([]),[I,A]=F.useState(null),[D,N]=F.useState(null),[V,_]=F.useState(""),[y,T]=F.useState(!1),E=()=>{g(""),w(""),R(""),S([]),A(null),N(null),_(""),l(!1)},k=()=>{const U=x.trim().toLowerCase();U&&!b.includes(U)&&S([...b,U]),R("")},P=U=>{S(b.filter(fe=>fe!==U))},C=U=>{U.key==="Enter"?(U.preventDefault(),k()):U.key==="Backspace"&&!x&&b.length>0&&S(b.slice(0,-1))},se=U=>{U&&U.type.startsWith("image/")&&(A(U),N(URL.createObjectURL(U)))},Pe=U=>{U.preventDefault(),T(!0)},mt=U=>{U.preventDefault(),T(!1)},qt=U=>{U.preventDefault(),T(!1),U.dataTransfer.files.length>0&&se(U.dataTransfer.files[0])},H=F.useCallback(U=>{var ve;if(U.target.tagName==="INPUT"||U.target.tagName==="TEXTAREA")return;const fe=(ve=U.clipboardData)==null?void 0:ve.items;if(fe){for(let Me=0;Me<fe.length;Me++)if(fe[Me].kind==="file"&&fe[Me].type.startsWith("image/")){const Dt=fe[Me].getAsFile();if(Dt){U.preventDefault(),se(new File([Dt],`inspiration-${Date.now()}.png`,{type:Dt.type}));break}}}},[]);F.useEffect(()=>{if(o)return document.addEventListener("paste",H),()=>document.removeEventListener("paste",H)},[o,H]);const Q=async U=>{if(U.preventDefault(),!!f.trim()){h(!0);try{await e({title:f.trim(),description:m.trim(),tags:b,image:I,url:V.trim()}),E()}catch(fe){console.error("Failed to add inspiration:",fe)}finally{h(!1)}}},Z=async U=>{confirm("Delete this inspiration?")&&await n(U)},he=t.filter(U=>{var ve,Me,Dt;const fe=s.toLowerCase();return fe?((ve=U.title)==null?void 0:ve.toLowerCase().includes(fe))||((Me=U.description)==null?void 0:Me.toLowerCase().includes(fe))||((Dt=U.tags)==null?void 0:Dt.some(ja=>ja.toLowerCase().includes(fe))):!0}),z=[...new Set(t.flatMap(U=>U.tags||[]))],de=U=>U?new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric",year:"numeric"}).format(U):"";return c.jsxs("div",{className:"inspiration-board",children:[c.jsxs("div",{className:"inspiration-header",children:[c.jsxs("div",{className:"inspiration-header-left",children:[c.jsx("button",{className:"btn btn-icon btn-ghost",onClick:()=>r("projects"),title:"Back to Projects",children:c.jsx(Qp,{size:18})}),c.jsxs("h2",{children:[c.jsx(Jd,{size:22}),"Inspiration Board"]})]}),c.jsxs("div",{className:"inspiration-header-right",children:[c.jsxs("div",{className:"inspiration-search",children:[c.jsx(Jp,{size:14}),c.jsx("input",{type:"text",placeholder:"Search by title, tag...",value:s,onChange:U=>i(U.target.value),className:"search-input"})]}),c.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>l(!0),children:[c.jsx(Tt,{size:16}),"Add"]})]})]}),z.length>0&&c.jsx("div",{className:"inspiration-tags-filter",children:z.map(U=>c.jsxs("button",{className:`tag-chip ${s===U?"active":""}`,onClick:()=>i(s===U?"":U),children:[c.jsx(aT,{size:10}),U]},U))}),o&&c.jsx("div",{className:"inspiration-form-overlay",onClick:()=>E(),children:c.jsxs("div",{className:"inspiration-form",onClick:U=>U.stopPropagation(),children:[c.jsxs("div",{className:"form-header",children:[c.jsx("h3",{children:"Add Inspiration"}),c.jsx("button",{className:"btn btn-icon btn-ghost",onClick:()=>E(),children:c.jsx(jt,{size:18})})]}),c.jsxs("form",{onSubmit:Q,children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"label",children:"Title *"}),c.jsx("input",{type:"text",className:"input",placeholder:"What inspired you?",value:f,onChange:U=>g(U.target.value),autoFocus:!0,required:!0})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"label",children:"Description"}),c.jsx("textarea",{className:"input textarea",placeholder:"Notes or details...",value:m,onChange:U=>w(U.target.value),rows:3})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"label",children:"URL"}),c.jsx("input",{type:"url",className:"input",placeholder:"https://...",value:V,onChange:U=>_(U.target.value)})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"label",children:"Tags"}),c.jsxs("div",{className:"tags-input-wrapper",children:[b.map(U=>c.jsxs("span",{className:"tag-chip",children:[U,c.jsx("button",{type:"button",onClick:()=>P(U),children:c.jsx(jt,{size:10})})]},U)),c.jsx("input",{type:"text",className:"tag-text-input",placeholder:b.length===0?"Type and press Enter...":"",value:x,onChange:U=>R(U.target.value),onKeyDown:C})]})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"label",children:"Image"}),D?c.jsxs("div",{className:"image-preview",children:[c.jsx("img",{src:D,alt:"Preview"}),c.jsx("button",{type:"button",className:"btn btn-icon btn-ghost image-remove",onClick:()=>{A(null),N(null)},children:c.jsx(jt,{size:14})})]}):c.jsxs("label",{className:`dropzone ${y?"active":""}`,onDragOver:Pe,onDragLeave:mt,onDrop:qt,children:[c.jsx("input",{type:"file",accept:"image/*",onChange:U=>se(U.target.files[0]),hidden:!0}),c.jsx(Mi,{size:20}),c.jsxs("span",{children:["Click, drag, or ",c.jsx("strong",{children:"paste"})]}),c.jsxs("div",{className:"dropzone-hint",children:[c.jsx(wu,{size:12}),c.jsx("span",{children:"Ctrl+V"})]})]})]}),c.jsxs("div",{className:"form-footer",children:[c.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>E(),children:"Cancel"}),c.jsx("button",{type:"submit",className:"btn btn-primary",disabled:!f.trim()||u,children:u?"Adding...":"Add Inspiration"})]})]})]})}),c.jsx("div",{className:"inspiration-content",children:he.length===0?c.jsxs("div",{className:"inspiration-empty",children:[c.jsx(Jd,{size:48}),c.jsx("h3",{children:s?"No matching inspirations":"No inspirations yet"}),c.jsx("p",{children:s?"Try different search terms.":"Collect ideas, references, and resources that inspire you."})]}):c.jsx("div",{className:"inspiration-grid",children:he.map(U=>{var fe;return c.jsxs("div",{className:"inspiration-card",children:[U.imageUrl&&c.jsx("div",{className:"inspiration-card-image",children:c.jsx("img",{src:U.imageUrl,alt:U.title,loading:"lazy"})}),c.jsxs("div",{className:"inspiration-card-body",children:[c.jsxs("div",{className:"inspiration-card-top",children:[c.jsx("h4",{children:U.title}),c.jsx("button",{className:"btn btn-icon btn-ghost btn-xs inspiration-delete",onClick:()=>Z(U.id),children:c.jsx(dn,{size:13})})]}),U.description&&c.jsx("p",{className:"inspiration-card-desc",children:U.description}),U.url&&c.jsxs("a",{href:U.url,target:"_blank",rel:"noopener noreferrer",className:"inspiration-card-link",children:[c.jsx(rT,{size:12}),new URL(U.url).hostname]}),((fe=U.tags)==null?void 0:fe.length)>0&&c.jsx("div",{className:"inspiration-card-tags",children:U.tags.map(ve=>c.jsx("span",{className:"tag-chip tag-chip-sm",onClick:()=>i(ve),children:ve},ve))}),c.jsx("span",{className:"inspiration-card-date",children:de(U.createdAt)})]})]},U.id)})})})]})}function Lj(){const{globalTasks:t,globalNotes:e,addGlobalTask:n,toggleGlobalTask:r,deleteGlobalTask:s,addGlobalNote:i,updateGlobalNote:o,deleteGlobalNote:l,setCurrentView:u}=Ke(),[h,f]=F.useState("tasks"),[g,m]=F.useState(""),[w,x]=F.useState(""),[R,b]=F.useState(!1),[S,I]=F.useState([]),[A,D]=F.useState(!1),[N,V]=F.useState({}),[_,y]=F.useState(null),[T,E]=F.useState(""),k=async()=>{g.trim()&&(await n(g.trim()),m(""))},P=z=>{z.key==="Enter"&&k()},C=async()=>{w.trim()&&(await i(w.trim()),x(""))},se=z=>{z.key==="Enter"&&(z.ctrlKey||z.metaKey)&&C()},Pe=z=>{y(z.id),E(z.content)},mt=async()=>{T.trim()&&_&&await o(_,T.trim()),y(null),E("")},qt=F.useCallback(async()=>{if(R){b(!1);return}D(!0);try{const z=await Jb();I(z),b(!0)}catch(z){console.error("Failed to load project data:",z)}finally{D(!1)}},[R]),H=z=>{V(de=>({...de,[z]:!de[z]}))},Q=z=>{if(!z)return"";const de=z instanceof Date?z:new Date(z!=null&&z.seconds?z.seconds*1e3:z);if(isNaN(de.getTime()))return"";const fe=new Date-de,ve=Math.floor(fe/6e4),Me=Math.floor(fe/36e5),Dt=Math.floor(fe/864e5);return ve<1?"just now":ve<60?`${ve}m ago`:Me<24?`${Me}h ago`:Dt<30?`${Dt}d ago`:de.toLocaleDateString("en-US",{month:"short",day:"numeric"})},Z=t.filter(z=>z.completed).length,he=t.length>0?Z/t.length*100:0;return c.jsxs("div",{className:"global-tasks-page",children:[c.jsx("div",{className:"gtp-header",children:c.jsxs("div",{className:"gtp-header-left",children:[c.jsx("button",{className:"btn btn-icon btn-ghost",onClick:()=>u("projects"),title:"Back to Projects",children:c.jsx(Qp,{size:18})}),c.jsxs("h2",{children:[c.jsx(ui,{size:22}),"Tasks & Notes"]})]})}),c.jsxs("div",{className:"gtp-tabs",children:[c.jsxs("button",{className:`gtp-tab ${h==="tasks"?"active":""}`,onClick:()=>f("tasks"),children:[c.jsx(ui,{size:15}),"Tasks",t.length>0&&c.jsx("span",{className:"gtp-tab-badge",children:t.length})]}),c.jsxs("button",{className:`gtp-tab ${h==="notes"?"active":""}`,onClick:()=>f("notes"),children:[c.jsx(ga,{size:15}),"Notes",e.length>0&&c.jsx("span",{className:"gtp-tab-badge",children:e.length})]})]}),c.jsxs("div",{className:"gtp-content",children:[h==="tasks"&&c.jsxs("div",{className:"gtp-section",children:[c.jsxs("div",{className:"gtp-input-wrapper",children:[c.jsx("input",{type:"text",className:"input gtp-input",placeholder:"Add a general task...",value:g,onChange:z=>m(z.target.value),onKeyDown:P}),c.jsxs("button",{className:"btn btn-primary",onClick:k,disabled:!g.trim(),children:[c.jsx(Tt,{size:18}),"Add"]})]}),t.length>0&&c.jsxs("div",{className:"gtp-stats",children:[c.jsxs("span",{className:"gtp-count",children:[Z," / ",t.length," completed"]}),c.jsx("div",{className:"progress-bar gtp-progress",children:c.jsx("div",{className:"progress-bar-fill",style:{width:`${he}%`}})})]}),t.length===0?c.jsxs("div",{className:"gtp-empty",children:[c.jsx(ui,{size:40}),c.jsx("h3",{children:"No general tasks yet"}),c.jsx("p",{children:"Add tasks that aren't tied to any project."})]}):c.jsx("ul",{className:"gtp-task-list",children:t.map(z=>c.jsxs("li",{className:`gtp-task-item ${z.completed?"completed":""}`,children:[c.jsx("button",{className:"gtp-task-checkbox",onClick:()=>r(z.id,z.completed),children:z.completed?c.jsx(Lo,{size:16}):c.jsx(Zd,{size:16})}),c.jsxs("div",{className:"gtp-task-text-wrapper",children:[c.jsx("span",{className:"gtp-task-text",children:z.text}),z.createdAt&&c.jsx("span",{className:"gtp-task-time",children:Q(z.createdAt)})]}),c.jsx("button",{className:"btn btn-icon btn-ghost btn-sm gtp-task-delete",onClick:()=>s(z.id),children:c.jsx(dn,{size:14})})]},z.id))}),c.jsx("div",{className:"gtp-show-all",children:c.jsxs("button",{className:`btn btn-secondary gtp-show-all-btn ${R?"active":""}`,onClick:qt,disabled:A,children:[c.jsx(B_,{size:16}),A?"Loading...":R?"Hide Project Tasks":"Show All Project Tasks"]})}),R&&c.jsx("div",{className:"gtp-project-sections",children:S.length===0?c.jsx("p",{className:"gtp-no-project-data",children:"No project tasks found."}):S.filter(z=>z.todos.length>0).map(z=>c.jsxs("div",{className:"gtp-project-group",children:[c.jsxs("button",{className:"gtp-project-header",onClick:()=>H(z.projectId),children:[N[z.projectId]?c.jsx(U_,{size:16}):c.jsx(z_,{size:16}),c.jsx("span",{className:"gtp-project-name",children:z.projectName}),c.jsxs("span",{className:"gtp-project-count",children:[z.todos.filter(de=>de.completed).length,"/",z.todos.length]})]}),N[z.projectId]&&c.jsx("ul",{className:"gtp-task-list gtp-task-list-nested",children:z.todos.map(de=>c.jsxs("li",{className:`gtp-task-item ${de.completed?"completed":""}`,children:[c.jsx("span",{className:"gtp-task-checkbox read-only",children:de.completed?c.jsx(Lo,{size:14}):c.jsx(Zd,{size:14})}),c.jsx("span",{className:"gtp-task-text",children:de.text})]},de.id))})]},z.projectId))})]}),h==="notes"&&c.jsxs("div",{className:"gtp-section",children:[c.jsxs("div",{className:"gtp-input-wrapper gtp-note-input-wrapper",children:[c.jsx("textarea",{className:"input gtp-textarea",placeholder:"Write a general note... (Ctrl+Enter to add)",value:w,onChange:z=>x(z.target.value),onKeyDown:se,rows:3}),c.jsxs("button",{className:"btn btn-primary gtp-note-add-btn",onClick:C,disabled:!w.trim(),children:[c.jsx(Tt,{size:18}),"Add"]})]}),e.length===0?c.jsxs("div",{className:"gtp-empty",children:[c.jsx(ga,{size:40}),c.jsx("h3",{children:"No general notes yet"}),c.jsx("p",{children:"Jot down notes that aren't tied to any project."})]}):c.jsx("div",{className:"gtp-notes-list",children:e.map(z=>c.jsx("div",{className:"gtp-note-card",children:_===z.id?c.jsxs("div",{className:"gtp-note-editing",children:[c.jsx("textarea",{className:"input gtp-textarea",value:T,onChange:de=>E(de.target.value),autoFocus:!0,rows:3}),c.jsxs("div",{className:"gtp-note-edit-actions",children:[c.jsxs("button",{className:"btn btn-primary btn-sm",onClick:mt,children:[c.jsx(Lo,{size:14})," Save"]}),c.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>y(null),children:[c.jsx(jt,{size:14})," Cancel"]})]})]}):c.jsxs(c.Fragment,{children:[c.jsx("p",{className:"gtp-note-content",children:z.content}),c.jsxs("div",{className:"gtp-note-footer",children:[c.jsx("span",{className:"gtp-note-time",children:Q(z.createdAt)}),c.jsxs("div",{className:"gtp-note-actions",children:[c.jsx("button",{className:"btn btn-icon btn-ghost btn-xs",onClick:()=>Pe(z),children:c.jsx(oT,{size:13})}),c.jsx("button",{className:"btn btn-icon btn-ghost btn-xs",onClick:()=>l(z.id),children:c.jsx(dn,{size:13})})]})]})]})},z.id))}),c.jsx("div",{className:"gtp-show-all",children:c.jsxs("button",{className:`btn btn-secondary gtp-show-all-btn ${R?"active":""}`,onClick:qt,disabled:A,children:[c.jsx(B_,{size:16}),A?"Loading...":R?"Hide Project Notes":"Show All Project Notes"]})}),R&&c.jsx("div",{className:"gtp-project-sections",children:S.length===0?c.jsx("p",{className:"gtp-no-project-data",children:"No project notes found."}):S.filter(z=>z.notes.length>0).map(z=>c.jsxs("div",{className:"gtp-project-group",children:[c.jsxs("button",{className:"gtp-project-header",onClick:()=>H(z.projectId),children:[N[z.projectId]?c.jsx(U_,{size:16}):c.jsx(z_,{size:16}),c.jsx("span",{className:"gtp-project-name",children:z.projectName}),c.jsxs("span",{className:"gtp-project-count",children:[z.notes.length," note",z.notes.length!==1?"s":""]})]}),N[z.projectId]&&c.jsx("div",{className:"gtp-notes-list gtp-notes-list-nested",children:z.notes.map(de=>{var U;return c.jsx("div",{className:"gtp-note-card gtp-note-card-readonly",children:c.jsx("p",{className:"gtp-note-content",children:((U=de.metadata)==null?void 0:U.content)||de.content||""})},de.id)})})]},z.projectId))})]})]})]})}function Oj({children:t}){const{user:e,authLoading:n,login:r}=Ke();return n?c.jsxs("div",{className:"auth-loading",children:[c.jsx("div",{className:"loading-spinner"}),c.jsx("p",{children:"Connecting to NiroVault Cloud..."})]}):e?t:c.jsx("div",{className:"auth-container",children:c.jsxs("div",{className:"auth-card",children:[c.jsxs("div",{className:"auth-logo",children:[c.jsx(Yp,{size:48}),c.jsx("h1",{children:"NiroVault"})]}),c.jsx("p",{className:"auth-subtitle",children:"Sync your electronics projects across all devices"}),c.jsxs("button",{className:"btn btn-primary btn-lg auth-btn",onClick:r,children:[c.jsx(cj,{size:20}),"Sign in with Google"]}),c.jsxs("div",{className:"auth-features",children:[c.jsxs("div",{className:"feature-item",children:[c.jsx("span",{children:"☁️"}),c.jsx("p",{children:"Real-time Cloud Sync"})]}),c.jsxs("div",{className:"feature-item",children:[c.jsx("span",{children:"📱"}),c.jsx("p",{children:"Mobile Accessible"})]}),c.jsxs("div",{className:"feature-item",children:[c.jsx("span",{children:"🔒"}),c.jsx("p",{children:"Secure Storage"})]})]})]})})}function Mj(){const{currentProject:t,currentView:e,setCurrentView:n,initAuth:r}=Ke(),[s,i]=F.useState(!1);F.useEffect(()=>{const u=r();return()=>u()},[]);const o=()=>{n("projects"),i(!0)},l=()=>e==="inspiration"?c.jsx(Vj,{}):e==="tasks"?c.jsx(Lj,{}):t?c.jsx(jj,{}):c.jsx(wj,{onCreateProject:o});return c.jsx(Oj,{children:c.jsxs(_j,{onCreateProject:o,children:[l(),s&&c.jsx(Dj,{onClose:()=>i(!1)})]})})}Ph.createRoot(document.getElementById("root")).render(c.jsx(rv.StrictMode,{children:c.jsx(Mj,{})}));
//# sourceMappingURL=index-DqECgfku.js.map
