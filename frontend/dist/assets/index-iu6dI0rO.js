function mS(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function gS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var g_={exports:{}},zc={},v_={exports:{}},qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Po=Symbol.for("react.element"),vS=Symbol.for("react.portal"),_S=Symbol.for("react.fragment"),xS=Symbol.for("react.strict_mode"),yS=Symbol.for("react.profiler"),SS=Symbol.for("react.provider"),ES=Symbol.for("react.context"),MS=Symbol.for("react.forward_ref"),wS=Symbol.for("react.suspense"),TS=Symbol.for("react.memo"),bS=Symbol.for("react.lazy"),ym=Symbol.iterator;function CS(t){return t===null||typeof t!="object"?null:(t=ym&&t[ym]||t["@@iterator"],typeof t=="function"?t:null)}var __={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x_=Object.assign,y_={};function pa(t,e,n){this.props=t,this.context=e,this.refs=y_,this.updater=n||__}pa.prototype.isReactComponent={};pa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};pa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function S_(){}S_.prototype=pa.prototype;function Oh(t,e,n){this.props=t,this.context=e,this.refs=y_,this.updater=n||__}var Bh=Oh.prototype=new S_;Bh.constructor=Oh;x_(Bh,pa.prototype);Bh.isPureReactComponent=!0;var Sm=Array.isArray,E_=Object.prototype.hasOwnProperty,kh={current:null},M_={key:!0,ref:!0,__self:!0,__source:!0};function w_(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)E_.call(e,i)&&!M_.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Po,type:t,key:s,ref:a,props:r,_owner:kh.current}}function AS(t,e){return{$$typeof:Po,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function zh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Po}function RS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Em=/\/+/g;function Su(t,e){return typeof t=="object"&&t!==null&&t.key!=null?RS(""+t.key):e.toString(36)}function Ol(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Po:case vS:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Su(a,0):i,Sm(r)?(n="",t!=null&&(n=t.replace(Em,"$&/")+"/"),Ol(r,e,n,"",function(u){return u})):r!=null&&(zh(r)&&(r=AS(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Em,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Sm(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Su(s,o);a+=Ol(s,e,n,l,r)}else if(l=CS(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Su(s,o++),a+=Ol(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function qo(t,e,n){if(t==null)return t;var i=[],r=0;return Ol(t,i,"","",function(s){return e.call(n,s,r++)}),i}function NS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var _n={current:null},Bl={transition:null},PS={ReactCurrentDispatcher:_n,ReactCurrentBatchConfig:Bl,ReactCurrentOwner:kh};function T_(){throw Error("act(...) is not supported in production builds of React.")}qe.Children={map:qo,forEach:function(t,e,n){qo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return qo(t,function(){e++}),e},toArray:function(t){return qo(t,function(e){return e})||[]},only:function(t){if(!zh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};qe.Component=pa;qe.Fragment=_S;qe.Profiler=yS;qe.PureComponent=Oh;qe.StrictMode=xS;qe.Suspense=wS;qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=PS;qe.act=T_;qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=x_({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=kh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)E_.call(e,l)&&!M_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:Po,type:t.type,key:r,ref:s,props:i,_owner:a}};qe.createContext=function(t){return t={$$typeof:ES,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:SS,_context:t},t.Consumer=t};qe.createElement=w_;qe.createFactory=function(t){var e=w_.bind(null,t);return e.type=t,e};qe.createRef=function(){return{current:null}};qe.forwardRef=function(t){return{$$typeof:MS,render:t}};qe.isValidElement=zh;qe.lazy=function(t){return{$$typeof:bS,_payload:{_status:-1,_result:t},_init:NS}};qe.memo=function(t,e){return{$$typeof:TS,type:t,compare:e===void 0?null:e}};qe.startTransition=function(t){var e=Bl.transition;Bl.transition={};try{t()}finally{Bl.transition=e}};qe.unstable_act=T_;qe.useCallback=function(t,e){return _n.current.useCallback(t,e)};qe.useContext=function(t){return _n.current.useContext(t)};qe.useDebugValue=function(){};qe.useDeferredValue=function(t){return _n.current.useDeferredValue(t)};qe.useEffect=function(t,e){return _n.current.useEffect(t,e)};qe.useId=function(){return _n.current.useId()};qe.useImperativeHandle=function(t,e,n){return _n.current.useImperativeHandle(t,e,n)};qe.useInsertionEffect=function(t,e){return _n.current.useInsertionEffect(t,e)};qe.useLayoutEffect=function(t,e){return _n.current.useLayoutEffect(t,e)};qe.useMemo=function(t,e){return _n.current.useMemo(t,e)};qe.useReducer=function(t,e,n){return _n.current.useReducer(t,e,n)};qe.useRef=function(t){return _n.current.useRef(t)};qe.useState=function(t){return _n.current.useState(t)};qe.useSyncExternalStore=function(t,e,n){return _n.current.useSyncExternalStore(t,e,n)};qe.useTransition=function(){return _n.current.useTransition()};qe.version="18.3.1";v_.exports=qe;var I=v_.exports;const jc=gS(I),LS=mS({__proto__:null,default:jc},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DS=I,IS=Symbol.for("react.element"),US=Symbol.for("react.fragment"),FS=Object.prototype.hasOwnProperty,OS=DS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,BS={key:!0,ref:!0,__self:!0,__source:!0};function b_(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)FS.call(e,i)&&!BS.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:IS,type:t,key:s,ref:a,props:r,_owner:OS.current}}zc.Fragment=US;zc.jsx=b_;zc.jsxs=b_;g_.exports=zc;var c=g_.exports,Od={},C_={exports:{}},kn={},A_={exports:{}},R_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,K){var ee=k.length;k.push(K);e:for(;0<ee;){var re=ee-1>>>1,$=k[re];if(0<r($,K))k[re]=K,k[ee]=$,ee=re;else break e}}function n(k){return k.length===0?null:k[0]}function i(k){if(k.length===0)return null;var K=k[0],ee=k.pop();if(ee!==K){k[0]=ee;e:for(var re=0,$=k.length,Ce=$>>>1;re<Ce;){var Z=2*(re+1)-1,Se=k[Z],J=Z+1,me=k[J];if(0>r(Se,ee))J<$&&0>r(me,Se)?(k[re]=me,k[J]=ee,re=J):(k[re]=Se,k[Z]=ee,re=Z);else if(J<$&&0>r(me,ee))k[re]=me,k[J]=ee,re=J;else break e}}return K}function r(k,K){var ee=k.sortIndex-K.sortIndex;return ee!==0?ee:k.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],u=[],d=1,h=null,f=3,g=!1,_=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(k){for(var K=n(u);K!==null;){if(K.callback===null)i(u);else if(K.startTime<=k)i(u),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(u)}}function E(k){if(x=!1,S(k),!_)if(n(l)!==null)_=!0,O(A);else{var K=n(u);K!==null&&j(E,K.startTime-k)}}function A(k,K){_=!1,x&&(x=!1,p(y),y=-1),g=!0;var ee=f;try{for(S(K),h=n(l);h!==null&&(!(h.expirationTime>K)||k&&!N());){var re=h.callback;if(typeof re=="function"){h.callback=null,f=h.priorityLevel;var $=re(h.expirationTime<=K);K=t.unstable_now(),typeof $=="function"?h.callback=$:h===n(l)&&i(l),S(K)}else i(l);h=n(l)}if(h!==null)var Ce=!0;else{var Z=n(u);Z!==null&&j(E,Z.startTime-K),Ce=!1}return Ce}finally{h=null,f=ee,g=!1}}var w=!1,C=null,y=-1,b=5,P=-1;function N(){return!(t.unstable_now()-P<b)}function D(){if(C!==null){var k=t.unstable_now();P=k;var K=!0;try{K=C(!0,k)}finally{K?L():(w=!1,C=null)}}else w=!1}var L;if(typeof v=="function")L=function(){v(D)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,U=H.port2;H.port1.onmessage=D,L=function(){U.postMessage(null)}}else L=function(){m(D,0)};function O(k){C=k,w||(w=!0,L())}function j(k,K){y=m(function(){k(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,O(A))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(k){switch(f){case 1:case 2:case 3:var K=3;break;default:K=f}var ee=f;f=K;try{return k()}finally{f=ee}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,K){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var ee=f;f=k;try{return K()}finally{f=ee}},t.unstable_scheduleCallback=function(k,K,ee){var re=t.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?re+ee:re):ee=re,k){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=ee+$,k={id:d++,callback:K,priorityLevel:k,startTime:ee,expirationTime:$,sortIndex:-1},ee>re?(k.sortIndex=ee,e(u,k),n(l)===null&&k===n(u)&&(x?(p(y),y=-1):x=!0,j(E,ee-re))):(k.sortIndex=$,e(l,k),_||g||(_=!0,O(A))),k},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(k){var K=f;return function(){var ee=f;f=K;try{return k.apply(this,arguments)}finally{f=ee}}}})(R_);A_.exports=R_;var kS=A_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zS=I,Bn=kS;function oe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var N_=new Set,oo={};function hs(t,e){ta(t,e),ta(t+"Capture",e)}function ta(t,e){for(oo[t]=e,t=0;t<e.length;t++)N_.add(e[t])}var Yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bd=Object.prototype.hasOwnProperty,jS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mm={},wm={};function VS(t){return Bd.call(wm,t)?!0:Bd.call(Mm,t)?!1:jS.test(t)?wm[t]=!0:(Mm[t]=!0,!1)}function HS(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function GS(t,e,n,i){if(e===null||typeof e>"u"||HS(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function xn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Jt[t]=new xn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Jt[e]=new xn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Jt[t]=new xn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Jt[t]=new xn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Jt[t]=new xn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Jt[t]=new xn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Jt[t]=new xn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Jt[t]=new xn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Jt[t]=new xn(t,5,!1,t.toLowerCase(),null,!1,!1)});var jh=/[\-:]([a-z])/g;function Vh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(jh,Vh);Jt[e]=new xn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(jh,Vh);Jt[e]=new xn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(jh,Vh);Jt[e]=new xn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Jt[t]=new xn(t,1,!1,t.toLowerCase(),null,!1,!1)});Jt.xlinkHref=new xn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Jt[t]=new xn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Hh(t,e,n,i){var r=Jt.hasOwnProperty(e)?Jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(GS(e,n,r,i)&&(n=null),i||r===null?VS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var tr=zS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$o=Symbol.for("react.element"),Us=Symbol.for("react.portal"),Fs=Symbol.for("react.fragment"),Gh=Symbol.for("react.strict_mode"),kd=Symbol.for("react.profiler"),P_=Symbol.for("react.provider"),L_=Symbol.for("react.context"),Wh=Symbol.for("react.forward_ref"),zd=Symbol.for("react.suspense"),jd=Symbol.for("react.suspense_list"),Xh=Symbol.for("react.memo"),hr=Symbol.for("react.lazy"),D_=Symbol.for("react.offscreen"),Tm=Symbol.iterator;function Ta(t){return t===null||typeof t!="object"?null:(t=Tm&&t[Tm]||t["@@iterator"],typeof t=="function"?t:null)}var wt=Object.assign,Eu;function Ga(t){if(Eu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Eu=e&&e[1]||""}return`
`+Eu+t}var Mu=!1;function wu(t,e){if(!t||Mu)return"";Mu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Mu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ga(t):""}function WS(t){switch(t.tag){case 5:return Ga(t.type);case 16:return Ga("Lazy");case 13:return Ga("Suspense");case 19:return Ga("SuspenseList");case 0:case 2:case 15:return t=wu(t.type,!1),t;case 11:return t=wu(t.type.render,!1),t;case 1:return t=wu(t.type,!0),t;default:return""}}function Vd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Fs:return"Fragment";case Us:return"Portal";case kd:return"Profiler";case Gh:return"StrictMode";case zd:return"Suspense";case jd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case L_:return(t.displayName||"Context")+".Consumer";case P_:return(t._context.displayName||"Context")+".Provider";case Wh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Xh:return e=t.displayName||null,e!==null?e:Vd(t.type)||"Memo";case hr:e=t._payload,t=t._init;try{return Vd(t(e))}catch{}}return null}function XS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vd(e);case 8:return e===Gh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Lr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function I_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function qS(t){var e=I_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Yo(t){t._valueTracker||(t._valueTracker=qS(t))}function U_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=I_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function lc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Hd(t,e){var n=e.checked;return wt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function bm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Lr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function F_(t,e){e=e.checked,e!=null&&Hh(t,"checked",e,!1)}function Gd(t,e){F_(t,e);var n=Lr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Wd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Wd(t,e.type,Lr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Cm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Wd(t,e,n){(e!=="number"||lc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Wa=Array.isArray;function qs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Lr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Xd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return wt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Am(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(oe(92));if(Wa(n)){if(1<n.length)throw Error(oe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Lr(n)}}function O_(t,e){var n=Lr(e.value),i=Lr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Rm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function B_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?B_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ko,k_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ko=Ko||document.createElement("div"),Ko.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ko.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function lo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ja={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$S=["Webkit","ms","Moz","O"];Object.keys(Ja).forEach(function(t){$S.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ja[e]=Ja[t]})});function z_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ja.hasOwnProperty(t)&&Ja[t]?(""+e).trim():e+"px"}function j_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=z_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var YS=wt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $d(t,e){if(e){if(YS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function Yd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kd=null;function qh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zd=null,$s=null,Ys=null;function Nm(t){if(t=Io(t)){if(typeof Zd!="function")throw Error(oe(280));var e=t.stateNode;e&&(e=Xc(e),Zd(t.stateNode,t.type,e))}}function V_(t){$s?Ys?Ys.push(t):Ys=[t]:$s=t}function H_(){if($s){var t=$s,e=Ys;if(Ys=$s=null,Nm(t),e)for(t=0;t<e.length;t++)Nm(e[t])}}function G_(t,e){return t(e)}function W_(){}var Tu=!1;function X_(t,e,n){if(Tu)return t(e,n);Tu=!0;try{return G_(t,e,n)}finally{Tu=!1,($s!==null||Ys!==null)&&(W_(),H_())}}function co(t,e){var n=t.stateNode;if(n===null)return null;var i=Xc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(oe(231,e,typeof n));return n}var Jd=!1;if(Yi)try{var ba={};Object.defineProperty(ba,"passive",{get:function(){Jd=!0}}),window.addEventListener("test",ba,ba),window.removeEventListener("test",ba,ba)}catch{Jd=!1}function KS(t,e,n,i,r,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Qa=!1,cc=null,uc=!1,Qd=null,ZS={onError:function(t){Qa=!0,cc=t}};function JS(t,e,n,i,r,s,a,o,l){Qa=!1,cc=null,KS.apply(ZS,arguments)}function QS(t,e,n,i,r,s,a,o,l){if(JS.apply(this,arguments),Qa){if(Qa){var u=cc;Qa=!1,cc=null}else throw Error(oe(198));uc||(uc=!0,Qd=u)}}function ps(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function q_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Pm(t){if(ps(t)!==t)throw Error(oe(188))}function eE(t){var e=t.alternate;if(!e){if(e=ps(t),e===null)throw Error(oe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Pm(r),t;if(s===i)return Pm(r),e;s=s.sibling}throw Error(oe(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(oe(189))}}if(n.alternate!==i)throw Error(oe(190))}if(n.tag!==3)throw Error(oe(188));return n.stateNode.current===n?t:e}function $_(t){return t=eE(t),t!==null?Y_(t):null}function Y_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Y_(t);if(e!==null)return e;t=t.sibling}return null}var K_=Bn.unstable_scheduleCallback,Lm=Bn.unstable_cancelCallback,tE=Bn.unstable_shouldYield,nE=Bn.unstable_requestPaint,Lt=Bn.unstable_now,iE=Bn.unstable_getCurrentPriorityLevel,$h=Bn.unstable_ImmediatePriority,Z_=Bn.unstable_UserBlockingPriority,dc=Bn.unstable_NormalPriority,rE=Bn.unstable_LowPriority,J_=Bn.unstable_IdlePriority,Vc=null,Ti=null;function sE(t){if(Ti&&typeof Ti.onCommitFiberRoot=="function")try{Ti.onCommitFiberRoot(Vc,t,void 0,(t.current.flags&128)===128)}catch{}}var di=Math.clz32?Math.clz32:lE,aE=Math.log,oE=Math.LN2;function lE(t){return t>>>=0,t===0?32:31-(aE(t)/oE|0)|0}var Zo=64,Jo=4194304;function Xa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function fc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Xa(o):(s&=a,s!==0&&(i=Xa(s)))}else a=n&~r,a!==0?i=Xa(a):s!==0&&(i=Xa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-di(e),r=1<<n,i|=t[n],e&=~r;return i}function cE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uE(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-di(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=cE(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function ef(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Q_(){var t=Zo;return Zo<<=1,!(Zo&4194240)&&(Zo=64),t}function bu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Lo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-di(e),t[e]=n}function dE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-di(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Yh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-di(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var at=0;function e0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var t0,Kh,n0,i0,r0,tf=!1,Qo=[],Er=null,Mr=null,wr=null,uo=new Map,fo=new Map,mr=[],fE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dm(t,e){switch(t){case"focusin":case"focusout":Er=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":wr=null;break;case"pointerover":case"pointerout":uo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":fo.delete(e.pointerId)}}function Ca(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Io(e),e!==null&&Kh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function hE(t,e,n,i,r){switch(e){case"focusin":return Er=Ca(Er,t,e,n,i,r),!0;case"dragenter":return Mr=Ca(Mr,t,e,n,i,r),!0;case"mouseover":return wr=Ca(wr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return uo.set(s,Ca(uo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,fo.set(s,Ca(fo.get(s)||null,t,e,n,i,r)),!0}return!1}function s0(t){var e=Kr(t.target);if(e!==null){var n=ps(e);if(n!==null){if(e=n.tag,e===13){if(e=q_(n),e!==null){t.blockedOn=e,r0(t.priority,function(){n0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function kl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=nf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Kd=i,n.target.dispatchEvent(i),Kd=null}else return e=Io(n),e!==null&&Kh(e),t.blockedOn=n,!1;e.shift()}return!0}function Im(t,e,n){kl(t)&&n.delete(e)}function pE(){tf=!1,Er!==null&&kl(Er)&&(Er=null),Mr!==null&&kl(Mr)&&(Mr=null),wr!==null&&kl(wr)&&(wr=null),uo.forEach(Im),fo.forEach(Im)}function Aa(t,e){t.blockedOn===e&&(t.blockedOn=null,tf||(tf=!0,Bn.unstable_scheduleCallback(Bn.unstable_NormalPriority,pE)))}function ho(t){function e(r){return Aa(r,t)}if(0<Qo.length){Aa(Qo[0],t);for(var n=1;n<Qo.length;n++){var i=Qo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Er!==null&&Aa(Er,t),Mr!==null&&Aa(Mr,t),wr!==null&&Aa(wr,t),uo.forEach(e),fo.forEach(e),n=0;n<mr.length;n++)i=mr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<mr.length&&(n=mr[0],n.blockedOn===null);)s0(n),n.blockedOn===null&&mr.shift()}var Ks=tr.ReactCurrentBatchConfig,hc=!0;function mE(t,e,n,i){var r=at,s=Ks.transition;Ks.transition=null;try{at=1,Zh(t,e,n,i)}finally{at=r,Ks.transition=s}}function gE(t,e,n,i){var r=at,s=Ks.transition;Ks.transition=null;try{at=4,Zh(t,e,n,i)}finally{at=r,Ks.transition=s}}function Zh(t,e,n,i){if(hc){var r=nf(t,e,n,i);if(r===null)Fu(t,e,i,pc,n),Dm(t,i);else if(hE(r,t,e,n,i))i.stopPropagation();else if(Dm(t,i),e&4&&-1<fE.indexOf(t)){for(;r!==null;){var s=Io(r);if(s!==null&&t0(s),s=nf(t,e,n,i),s===null&&Fu(t,e,i,pc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Fu(t,e,i,null,n)}}var pc=null;function nf(t,e,n,i){if(pc=null,t=qh(i),t=Kr(t),t!==null)if(e=ps(t),e===null)t=null;else if(n=e.tag,n===13){if(t=q_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return pc=t,null}function a0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(iE()){case $h:return 1;case Z_:return 4;case dc:case rE:return 16;case J_:return 536870912;default:return 16}default:return 16}}var _r=null,Jh=null,zl=null;function o0(){if(zl)return zl;var t,e=Jh,n=e.length,i,r="value"in _r?_r.value:_r.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return zl=r.slice(t,1<i?1-i:void 0)}function jl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function el(){return!0}function Um(){return!1}function zn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?el:Um,this.isPropagationStopped=Um,this}return wt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=el)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=el)},persist:function(){},isPersistent:el}),e}var ma={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qh=zn(ma),Do=wt({},ma,{view:0,detail:0}),vE=zn(Do),Cu,Au,Ra,Hc=wt({},Do,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ep,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ra&&(Ra&&t.type==="mousemove"?(Cu=t.screenX-Ra.screenX,Au=t.screenY-Ra.screenY):Au=Cu=0,Ra=t),Cu)},movementY:function(t){return"movementY"in t?t.movementY:Au}}),Fm=zn(Hc),_E=wt({},Hc,{dataTransfer:0}),xE=zn(_E),yE=wt({},Do,{relatedTarget:0}),Ru=zn(yE),SE=wt({},ma,{animationName:0,elapsedTime:0,pseudoElement:0}),EE=zn(SE),ME=wt({},ma,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),wE=zn(ME),TE=wt({},ma,{data:0}),Om=zn(TE),bE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},CE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},AE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function RE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=AE[t])?!!e[t]:!1}function ep(){return RE}var NE=wt({},Do,{key:function(t){if(t.key){var e=bE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=jl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?CE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ep,charCode:function(t){return t.type==="keypress"?jl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?jl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),PE=zn(NE),LE=wt({},Hc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bm=zn(LE),DE=wt({},Do,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ep}),IE=zn(DE),UE=wt({},ma,{propertyName:0,elapsedTime:0,pseudoElement:0}),FE=zn(UE),OE=wt({},Hc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),BE=zn(OE),kE=[9,13,27,32],tp=Yi&&"CompositionEvent"in window,eo=null;Yi&&"documentMode"in document&&(eo=document.documentMode);var zE=Yi&&"TextEvent"in window&&!eo,l0=Yi&&(!tp||eo&&8<eo&&11>=eo),km=" ",zm=!1;function c0(t,e){switch(t){case"keyup":return kE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function u0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Os=!1;function jE(t,e){switch(t){case"compositionend":return u0(e);case"keypress":return e.which!==32?null:(zm=!0,km);case"textInput":return t=e.data,t===km&&zm?null:t;default:return null}}function VE(t,e){if(Os)return t==="compositionend"||!tp&&c0(t,e)?(t=o0(),zl=Jh=_r=null,Os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return l0&&e.locale!=="ko"?null:e.data;default:return null}}var HE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!HE[t.type]:e==="textarea"}function d0(t,e,n,i){V_(i),e=mc(e,"onChange"),0<e.length&&(n=new Qh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var to=null,po=null;function GE(t){E0(t,0)}function Gc(t){var e=zs(t);if(U_(e))return t}function WE(t,e){if(t==="change")return e}var f0=!1;if(Yi){var Nu;if(Yi){var Pu="oninput"in document;if(!Pu){var Vm=document.createElement("div");Vm.setAttribute("oninput","return;"),Pu=typeof Vm.oninput=="function"}Nu=Pu}else Nu=!1;f0=Nu&&(!document.documentMode||9<document.documentMode)}function Hm(){to&&(to.detachEvent("onpropertychange",h0),po=to=null)}function h0(t){if(t.propertyName==="value"&&Gc(po)){var e=[];d0(e,po,t,qh(t)),X_(GE,e)}}function XE(t,e,n){t==="focusin"?(Hm(),to=e,po=n,to.attachEvent("onpropertychange",h0)):t==="focusout"&&Hm()}function qE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Gc(po)}function $E(t,e){if(t==="click")return Gc(e)}function YE(t,e){if(t==="input"||t==="change")return Gc(e)}function KE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var hi=typeof Object.is=="function"?Object.is:KE;function mo(t,e){if(hi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Bd.call(e,r)||!hi(t[r],e[r]))return!1}return!0}function Gm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Wm(t,e){var n=Gm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Gm(n)}}function p0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?p0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function m0(){for(var t=window,e=lc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=lc(t.document)}return e}function np(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ZE(t){var e=m0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&p0(n.ownerDocument.documentElement,n)){if(i!==null&&np(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Wm(n,s);var a=Wm(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var JE=Yi&&"documentMode"in document&&11>=document.documentMode,Bs=null,rf=null,no=null,sf=!1;function Xm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sf||Bs==null||Bs!==lc(i)||(i=Bs,"selectionStart"in i&&np(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),no&&mo(no,i)||(no=i,i=mc(rf,"onSelect"),0<i.length&&(e=new Qh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Bs)))}function tl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ks={animationend:tl("Animation","AnimationEnd"),animationiteration:tl("Animation","AnimationIteration"),animationstart:tl("Animation","AnimationStart"),transitionend:tl("Transition","TransitionEnd")},Lu={},g0={};Yi&&(g0=document.createElement("div").style,"AnimationEvent"in window||(delete ks.animationend.animation,delete ks.animationiteration.animation,delete ks.animationstart.animation),"TransitionEvent"in window||delete ks.transitionend.transition);function Wc(t){if(Lu[t])return Lu[t];if(!ks[t])return t;var e=ks[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in g0)return Lu[t]=e[n];return t}var v0=Wc("animationend"),_0=Wc("animationiteration"),x0=Wc("animationstart"),y0=Wc("transitionend"),S0=new Map,qm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fr(t,e){S0.set(t,e),hs(e,[t])}for(var Du=0;Du<qm.length;Du++){var Iu=qm[Du],QE=Iu.toLowerCase(),eM=Iu[0].toUpperCase()+Iu.slice(1);Fr(QE,"on"+eM)}Fr(v0,"onAnimationEnd");Fr(_0,"onAnimationIteration");Fr(x0,"onAnimationStart");Fr("dblclick","onDoubleClick");Fr("focusin","onFocus");Fr("focusout","onBlur");Fr(y0,"onTransitionEnd");ta("onMouseEnter",["mouseout","mouseover"]);ta("onMouseLeave",["mouseout","mouseover"]);ta("onPointerEnter",["pointerout","pointerover"]);ta("onPointerLeave",["pointerout","pointerover"]);hs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hs("onBeforeInput",["compositionend","keypress","textInput","paste"]);hs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tM=new Set("cancel close invalid load scroll toggle".split(" ").concat(qa));function $m(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,QS(i,e,void 0,t),t.currentTarget=null}function E0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;$m(r,o,u),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;$m(r,o,u),s=l}}}if(uc)throw t=Qd,uc=!1,Qd=null,t}function gt(t,e){var n=e[uf];n===void 0&&(n=e[uf]=new Set);var i=t+"__bubble";n.has(i)||(M0(e,t,2,!1),n.add(i))}function Uu(t,e,n){var i=0;e&&(i|=4),M0(n,t,i,e)}var nl="_reactListening"+Math.random().toString(36).slice(2);function go(t){if(!t[nl]){t[nl]=!0,N_.forEach(function(n){n!=="selectionchange"&&(tM.has(n)||Uu(n,!1,t),Uu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[nl]||(e[nl]=!0,Uu("selectionchange",!1,e))}}function M0(t,e,n,i){switch(a0(e)){case 1:var r=mE;break;case 4:r=gE;break;default:r=Zh}n=r.bind(null,e,n,t),r=void 0,!Jd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Fu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Kr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}X_(function(){var u=s,d=qh(n),h=[];e:{var f=S0.get(t);if(f!==void 0){var g=Qh,_=t;switch(t){case"keypress":if(jl(n)===0)break e;case"keydown":case"keyup":g=PE;break;case"focusin":_="focus",g=Ru;break;case"focusout":_="blur",g=Ru;break;case"beforeblur":case"afterblur":g=Ru;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Fm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=xE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=IE;break;case v0:case _0:case x0:g=EE;break;case y0:g=FE;break;case"scroll":g=vE;break;case"wheel":g=BE;break;case"copy":case"cut":case"paste":g=wE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Bm}var x=(e&4)!==0,m=!x&&t==="scroll",p=x?f!==null?f+"Capture":null:f;x=[];for(var v=u,S;v!==null;){S=v;var E=S.stateNode;if(S.tag===5&&E!==null&&(S=E,p!==null&&(E=co(v,p),E!=null&&x.push(vo(v,E,S)))),m)break;v=v.return}0<x.length&&(f=new g(f,_,null,n,d),h.push({event:f,listeners:x}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==Kd&&(_=n.relatedTarget||n.fromElement)&&(Kr(_)||_[Ki]))break e;if((g||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?Kr(_):null,_!==null&&(m=ps(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(x=Fm,E="onMouseLeave",p="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(x=Bm,E="onPointerLeave",p="onPointerEnter",v="pointer"),m=g==null?f:zs(g),S=_==null?f:zs(_),f=new x(E,v+"leave",g,n,d),f.target=m,f.relatedTarget=S,E=null,Kr(d)===u&&(x=new x(p,v+"enter",_,n,d),x.target=S,x.relatedTarget=m,E=x),m=E,g&&_)t:{for(x=g,p=_,v=0,S=x;S;S=_s(S))v++;for(S=0,E=p;E;E=_s(E))S++;for(;0<v-S;)x=_s(x),v--;for(;0<S-v;)p=_s(p),S--;for(;v--;){if(x===p||p!==null&&x===p.alternate)break t;x=_s(x),p=_s(p)}x=null}else x=null;g!==null&&Ym(h,f,g,x,!1),_!==null&&m!==null&&Ym(h,m,_,x,!0)}}e:{if(f=u?zs(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var A=WE;else if(jm(f))if(f0)A=YE;else{A=qE;var w=XE}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(A=$E);if(A&&(A=A(t,u))){d0(h,A,n,d);break e}w&&w(t,f,u),t==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&Wd(f,"number",f.value)}switch(w=u?zs(u):window,t){case"focusin":(jm(w)||w.contentEditable==="true")&&(Bs=w,rf=u,no=null);break;case"focusout":no=rf=Bs=null;break;case"mousedown":sf=!0;break;case"contextmenu":case"mouseup":case"dragend":sf=!1,Xm(h,n,d);break;case"selectionchange":if(JE)break;case"keydown":case"keyup":Xm(h,n,d)}var C;if(tp)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Os?c0(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(l0&&n.locale!=="ko"&&(Os||y!=="onCompositionStart"?y==="onCompositionEnd"&&Os&&(C=o0()):(_r=d,Jh="value"in _r?_r.value:_r.textContent,Os=!0)),w=mc(u,y),0<w.length&&(y=new Om(y,t,null,n,d),h.push({event:y,listeners:w}),C?y.data=C:(C=u0(n),C!==null&&(y.data=C)))),(C=zE?jE(t,n):VE(t,n))&&(u=mc(u,"onBeforeInput"),0<u.length&&(d=new Om("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:u}),d.data=C))}E0(h,e)})}function vo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function mc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=co(t,n),s!=null&&i.unshift(vo(t,s,r)),s=co(t,e),s!=null&&i.push(vo(t,s,r))),t=t.return}return i}function _s(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ym(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,r?(l=co(n,s),l!=null&&a.unshift(vo(n,l,o))):r||(l=co(n,s),l!=null&&a.push(vo(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var nM=/\r\n?/g,iM=/\u0000|\uFFFD/g;function Km(t){return(typeof t=="string"?t:""+t).replace(nM,`
`).replace(iM,"")}function il(t,e,n){if(e=Km(e),Km(t)!==e&&n)throw Error(oe(425))}function gc(){}var af=null,of=null;function lf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var cf=typeof setTimeout=="function"?setTimeout:void 0,rM=typeof clearTimeout=="function"?clearTimeout:void 0,Zm=typeof Promise=="function"?Promise:void 0,sM=typeof queueMicrotask=="function"?queueMicrotask:typeof Zm<"u"?function(t){return Zm.resolve(null).then(t).catch(aM)}:cf;function aM(t){setTimeout(function(){throw t})}function Ou(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ho(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ho(e)}function Tr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Jm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ga=Math.random().toString(36).slice(2),Ei="__reactFiber$"+ga,_o="__reactProps$"+ga,Ki="__reactContainer$"+ga,uf="__reactEvents$"+ga,oM="__reactListeners$"+ga,lM="__reactHandles$"+ga;function Kr(t){var e=t[Ei];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ki]||n[Ei]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Jm(t);t!==null;){if(n=t[Ei])return n;t=Jm(t)}return e}t=n,n=t.parentNode}return null}function Io(t){return t=t[Ei]||t[Ki],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function zs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(oe(33))}function Xc(t){return t[_o]||null}var df=[],js=-1;function Or(t){return{current:t}}function vt(t){0>js||(t.current=df[js],df[js]=null,js--)}function pt(t,e){js++,df[js]=t.current,t.current=e}var Dr={},fn=Or(Dr),Mn=Or(!1),ss=Dr;function na(t,e){var n=t.type.contextTypes;if(!n)return Dr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function wn(t){return t=t.childContextTypes,t!=null}function vc(){vt(Mn),vt(fn)}function Qm(t,e,n){if(fn.current!==Dr)throw Error(oe(168));pt(fn,e),pt(Mn,n)}function w0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,XS(t)||"Unknown",r));return wt({},n,i)}function _c(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Dr,ss=fn.current,pt(fn,t),pt(Mn,Mn.current),!0}function eg(t,e,n){var i=t.stateNode;if(!i)throw Error(oe(169));n?(t=w0(t,e,ss),i.__reactInternalMemoizedMergedChildContext=t,vt(Mn),vt(fn),pt(fn,t)):vt(Mn),pt(Mn,n)}var ji=null,qc=!1,Bu=!1;function T0(t){ji===null?ji=[t]:ji.push(t)}function cM(t){qc=!0,T0(t)}function Br(){if(!Bu&&ji!==null){Bu=!0;var t=0,e=at;try{var n=ji;for(at=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ji=null,qc=!1}catch(r){throw ji!==null&&(ji=ji.slice(t+1)),K_($h,Br),r}finally{at=e,Bu=!1}}return null}var Vs=[],Hs=0,xc=null,yc=0,Gn=[],Wn=0,as=null,Hi=1,Gi="";function Wr(t,e){Vs[Hs++]=yc,Vs[Hs++]=xc,xc=t,yc=e}function b0(t,e,n){Gn[Wn++]=Hi,Gn[Wn++]=Gi,Gn[Wn++]=as,as=t;var i=Hi;t=Gi;var r=32-di(i)-1;i&=~(1<<r),n+=1;var s=32-di(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Hi=1<<32-di(e)+r|n<<r|i,Gi=s+t}else Hi=1<<s|n<<r|i,Gi=t}function ip(t){t.return!==null&&(Wr(t,1),b0(t,1,0))}function rp(t){for(;t===xc;)xc=Vs[--Hs],Vs[Hs]=null,yc=Vs[--Hs],Vs[Hs]=null;for(;t===as;)as=Gn[--Wn],Gn[Wn]=null,Gi=Gn[--Wn],Gn[Wn]=null,Hi=Gn[--Wn],Gn[Wn]=null}var On=null,Fn=null,_t=!1,li=null;function C0(t,e){var n=$n(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function tg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,On=t,Fn=Tr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,On=t,Fn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=as!==null?{id:Hi,overflow:Gi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=$n(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,On=t,Fn=null,!0):!1;default:return!1}}function ff(t){return(t.mode&1)!==0&&(t.flags&128)===0}function hf(t){if(_t){var e=Fn;if(e){var n=e;if(!tg(t,e)){if(ff(t))throw Error(oe(418));e=Tr(n.nextSibling);var i=On;e&&tg(t,e)?C0(i,n):(t.flags=t.flags&-4097|2,_t=!1,On=t)}}else{if(ff(t))throw Error(oe(418));t.flags=t.flags&-4097|2,_t=!1,On=t}}}function ng(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;On=t}function rl(t){if(t!==On)return!1;if(!_t)return ng(t),_t=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!lf(t.type,t.memoizedProps)),e&&(e=Fn)){if(ff(t))throw A0(),Error(oe(418));for(;e;)C0(t,e),e=Tr(e.nextSibling)}if(ng(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Fn=Tr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Fn=null}}else Fn=On?Tr(t.stateNode.nextSibling):null;return!0}function A0(){for(var t=Fn;t;)t=Tr(t.nextSibling)}function ia(){Fn=On=null,_t=!1}function sp(t){li===null?li=[t]:li.push(t)}var uM=tr.ReactCurrentBatchConfig;function Na(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(oe(309));var i=n.stateNode}if(!i)throw Error(oe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(oe(284));if(!n._owner)throw Error(oe(290,t))}return t}function sl(t,e){throw t=Object.prototype.toString.call(e),Error(oe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ig(t){var e=t._init;return e(t._payload)}function R0(t){function e(p,v){if(t){var S=p.deletions;S===null?(p.deletions=[v],p.flags|=16):S.push(v)}}function n(p,v){if(!t)return null;for(;v!==null;)e(p,v),v=v.sibling;return null}function i(p,v){for(p=new Map;v!==null;)v.key!==null?p.set(v.key,v):p.set(v.index,v),v=v.sibling;return p}function r(p,v){return p=Rr(p,v),p.index=0,p.sibling=null,p}function s(p,v,S){return p.index=S,t?(S=p.alternate,S!==null?(S=S.index,S<v?(p.flags|=2,v):S):(p.flags|=2,v)):(p.flags|=1048576,v)}function a(p){return t&&p.alternate===null&&(p.flags|=2),p}function o(p,v,S,E){return v===null||v.tag!==6?(v=Wu(S,p.mode,E),v.return=p,v):(v=r(v,S),v.return=p,v)}function l(p,v,S,E){var A=S.type;return A===Fs?d(p,v,S.props.children,E,S.key):v!==null&&(v.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===hr&&ig(A)===v.type)?(E=r(v,S.props),E.ref=Na(p,v,S),E.return=p,E):(E=$l(S.type,S.key,S.props,null,p.mode,E),E.ref=Na(p,v,S),E.return=p,E)}function u(p,v,S,E){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=Xu(S,p.mode,E),v.return=p,v):(v=r(v,S.children||[]),v.return=p,v)}function d(p,v,S,E,A){return v===null||v.tag!==7?(v=is(S,p.mode,E,A),v.return=p,v):(v=r(v,S),v.return=p,v)}function h(p,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Wu(""+v,p.mode,S),v.return=p,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case $o:return S=$l(v.type,v.key,v.props,null,p.mode,S),S.ref=Na(p,null,v),S.return=p,S;case Us:return v=Xu(v,p.mode,S),v.return=p,v;case hr:var E=v._init;return h(p,E(v._payload),S)}if(Wa(v)||Ta(v))return v=is(v,p.mode,S,null),v.return=p,v;sl(p,v)}return null}function f(p,v,S,E){var A=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return A!==null?null:o(p,v,""+S,E);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case $o:return S.key===A?l(p,v,S,E):null;case Us:return S.key===A?u(p,v,S,E):null;case hr:return A=S._init,f(p,v,A(S._payload),E)}if(Wa(S)||Ta(S))return A!==null?null:d(p,v,S,E,null);sl(p,S)}return null}function g(p,v,S,E,A){if(typeof E=="string"&&E!==""||typeof E=="number")return p=p.get(S)||null,o(v,p,""+E,A);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case $o:return p=p.get(E.key===null?S:E.key)||null,l(v,p,E,A);case Us:return p=p.get(E.key===null?S:E.key)||null,u(v,p,E,A);case hr:var w=E._init;return g(p,v,S,w(E._payload),A)}if(Wa(E)||Ta(E))return p=p.get(S)||null,d(v,p,E,A,null);sl(v,E)}return null}function _(p,v,S,E){for(var A=null,w=null,C=v,y=v=0,b=null;C!==null&&y<S.length;y++){C.index>y?(b=C,C=null):b=C.sibling;var P=f(p,C,S[y],E);if(P===null){C===null&&(C=b);break}t&&C&&P.alternate===null&&e(p,C),v=s(P,v,y),w===null?A=P:w.sibling=P,w=P,C=b}if(y===S.length)return n(p,C),_t&&Wr(p,y),A;if(C===null){for(;y<S.length;y++)C=h(p,S[y],E),C!==null&&(v=s(C,v,y),w===null?A=C:w.sibling=C,w=C);return _t&&Wr(p,y),A}for(C=i(p,C);y<S.length;y++)b=g(C,p,y,S[y],E),b!==null&&(t&&b.alternate!==null&&C.delete(b.key===null?y:b.key),v=s(b,v,y),w===null?A=b:w.sibling=b,w=b);return t&&C.forEach(function(N){return e(p,N)}),_t&&Wr(p,y),A}function x(p,v,S,E){var A=Ta(S);if(typeof A!="function")throw Error(oe(150));if(S=A.call(S),S==null)throw Error(oe(151));for(var w=A=null,C=v,y=v=0,b=null,P=S.next();C!==null&&!P.done;y++,P=S.next()){C.index>y?(b=C,C=null):b=C.sibling;var N=f(p,C,P.value,E);if(N===null){C===null&&(C=b);break}t&&C&&N.alternate===null&&e(p,C),v=s(N,v,y),w===null?A=N:w.sibling=N,w=N,C=b}if(P.done)return n(p,C),_t&&Wr(p,y),A;if(C===null){for(;!P.done;y++,P=S.next())P=h(p,P.value,E),P!==null&&(v=s(P,v,y),w===null?A=P:w.sibling=P,w=P);return _t&&Wr(p,y),A}for(C=i(p,C);!P.done;y++,P=S.next())P=g(C,p,y,P.value,E),P!==null&&(t&&P.alternate!==null&&C.delete(P.key===null?y:P.key),v=s(P,v,y),w===null?A=P:w.sibling=P,w=P);return t&&C.forEach(function(D){return e(p,D)}),_t&&Wr(p,y),A}function m(p,v,S,E){if(typeof S=="object"&&S!==null&&S.type===Fs&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case $o:e:{for(var A=S.key,w=v;w!==null;){if(w.key===A){if(A=S.type,A===Fs){if(w.tag===7){n(p,w.sibling),v=r(w,S.props.children),v.return=p,p=v;break e}}else if(w.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===hr&&ig(A)===w.type){n(p,w.sibling),v=r(w,S.props),v.ref=Na(p,w,S),v.return=p,p=v;break e}n(p,w);break}else e(p,w);w=w.sibling}S.type===Fs?(v=is(S.props.children,p.mode,E,S.key),v.return=p,p=v):(E=$l(S.type,S.key,S.props,null,p.mode,E),E.ref=Na(p,v,S),E.return=p,p=E)}return a(p);case Us:e:{for(w=S.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){n(p,v.sibling),v=r(v,S.children||[]),v.return=p,p=v;break e}else{n(p,v);break}else e(p,v);v=v.sibling}v=Xu(S,p.mode,E),v.return=p,p=v}return a(p);case hr:return w=S._init,m(p,v,w(S._payload),E)}if(Wa(S))return _(p,v,S,E);if(Ta(S))return x(p,v,S,E);sl(p,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,v!==null&&v.tag===6?(n(p,v.sibling),v=r(v,S),v.return=p,p=v):(n(p,v),v=Wu(S,p.mode,E),v.return=p,p=v),a(p)):n(p,v)}return m}var ra=R0(!0),N0=R0(!1),Sc=Or(null),Ec=null,Gs=null,ap=null;function op(){ap=Gs=Ec=null}function lp(t){var e=Sc.current;vt(Sc),t._currentValue=e}function pf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Zs(t,e){Ec=t,ap=Gs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(En=!0),t.firstContext=null)}function Kn(t){var e=t._currentValue;if(ap!==t)if(t={context:t,memoizedValue:e,next:null},Gs===null){if(Ec===null)throw Error(oe(308));Gs=t,Ec.dependencies={lanes:0,firstContext:t}}else Gs=Gs.next=t;return e}var Zr=null;function cp(t){Zr===null?Zr=[t]:Zr.push(t)}function P0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,cp(e)):(n.next=r.next,r.next=n),e.interleaved=n,Zi(t,i)}function Zi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var pr=!1;function up(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function L0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Xi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function br(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,tt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Zi(t,n)}return r=i.interleaved,r===null?(e.next=e,cp(i)):(e.next=r.next,r.next=e),i.interleaved=e,Zi(t,n)}function Vl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Yh(t,n)}}function rg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Mc(t,e,n,i){var r=t.updateQueue;pr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=u:o.next=u,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,d=u=l=null,o=s;do{var f=o.lane,g=o.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:g,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,x=o;switch(f=e,g=n,x.tag){case 1:if(_=x.payload,typeof _=="function"){h=_.call(g,h,f);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,f=typeof _=="function"?_.call(g,h,f):_,f==null)break e;h=wt({},h,f);break e;case 2:pr=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else g={eventTime:g,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(u=d=g,l=h):d=d.next=g,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ls|=a,t.lanes=a,t.memoizedState=h}}function sg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var Uo={},bi=Or(Uo),xo=Or(Uo),yo=Or(Uo);function Jr(t){if(t===Uo)throw Error(oe(174));return t}function dp(t,e){switch(pt(yo,e),pt(xo,t),pt(bi,Uo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:qd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=qd(e,t)}vt(bi),pt(bi,e)}function sa(){vt(bi),vt(xo),vt(yo)}function D0(t){Jr(yo.current);var e=Jr(bi.current),n=qd(e,t.type);e!==n&&(pt(xo,t),pt(bi,n))}function fp(t){xo.current===t&&(vt(bi),vt(xo))}var St=Or(0);function wc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ku=[];function hp(){for(var t=0;t<ku.length;t++)ku[t]._workInProgressVersionPrimary=null;ku.length=0}var Hl=tr.ReactCurrentDispatcher,zu=tr.ReactCurrentBatchConfig,os=0,Et=null,jt=null,Xt=null,Tc=!1,io=!1,So=0,dM=0;function en(){throw Error(oe(321))}function pp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!hi(t[n],e[n]))return!1;return!0}function mp(t,e,n,i,r,s){if(os=s,Et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Hl.current=t===null||t.memoizedState===null?mM:gM,t=n(i,r),io){s=0;do{if(io=!1,So=0,25<=s)throw Error(oe(301));s+=1,Xt=jt=null,e.updateQueue=null,Hl.current=vM,t=n(i,r)}while(io)}if(Hl.current=bc,e=jt!==null&&jt.next!==null,os=0,Xt=jt=Et=null,Tc=!1,e)throw Error(oe(300));return t}function gp(){var t=So!==0;return So=0,t}function yi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xt===null?Et.memoizedState=Xt=t:Xt=Xt.next=t,Xt}function Zn(){if(jt===null){var t=Et.alternate;t=t!==null?t.memoizedState:null}else t=jt.next;var e=Xt===null?Et.memoizedState:Xt.next;if(e!==null)Xt=e,jt=t;else{if(t===null)throw Error(oe(310));jt=t,t={memoizedState:jt.memoizedState,baseState:jt.baseState,baseQueue:jt.baseQueue,queue:jt.queue,next:null},Xt===null?Et.memoizedState=Xt=t:Xt=Xt.next=t}return Xt}function Eo(t,e){return typeof e=="function"?e(t):e}function ju(t){var e=Zn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=jt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,u=s;do{var d=u.lane;if((os&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,Et.lanes|=d,ls|=d}u=u.next}while(u!==null&&u!==s);l===null?a=i:l.next=o,hi(i,e.memoizedState)||(En=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Et.lanes|=s,ls|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Vu(t){var e=Zn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);hi(s,e.memoizedState)||(En=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function I0(){}function U0(t,e){var n=Et,i=Zn(),r=e(),s=!hi(i.memoizedState,r);if(s&&(i.memoizedState=r,En=!0),i=i.queue,vp(B0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Xt!==null&&Xt.memoizedState.tag&1){if(n.flags|=2048,Mo(9,O0.bind(null,n,i,r,e),void 0,null),qt===null)throw Error(oe(349));os&30||F0(n,e,r)}return r}function F0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function O0(t,e,n,i){e.value=n,e.getSnapshot=i,k0(e)&&z0(t)}function B0(t,e,n){return n(function(){k0(e)&&z0(t)})}function k0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!hi(t,n)}catch{return!0}}function z0(t){var e=Zi(t,1);e!==null&&fi(e,t,1,-1)}function ag(t){var e=yi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Eo,lastRenderedState:t},e.queue=t,t=t.dispatch=pM.bind(null,Et,t),[e.memoizedState,t]}function Mo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function j0(){return Zn().memoizedState}function Gl(t,e,n,i){var r=yi();Et.flags|=t,r.memoizedState=Mo(1|e,n,void 0,i===void 0?null:i)}function $c(t,e,n,i){var r=Zn();i=i===void 0?null:i;var s=void 0;if(jt!==null){var a=jt.memoizedState;if(s=a.destroy,i!==null&&pp(i,a.deps)){r.memoizedState=Mo(e,n,s,i);return}}Et.flags|=t,r.memoizedState=Mo(1|e,n,s,i)}function og(t,e){return Gl(8390656,8,t,e)}function vp(t,e){return $c(2048,8,t,e)}function V0(t,e){return $c(4,2,t,e)}function H0(t,e){return $c(4,4,t,e)}function G0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function W0(t,e,n){return n=n!=null?n.concat([t]):null,$c(4,4,G0.bind(null,e,t),n)}function _p(){}function X0(t,e){var n=Zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&pp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function q0(t,e){var n=Zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&pp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function $0(t,e,n){return os&21?(hi(n,e)||(n=Q_(),Et.lanes|=n,ls|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,En=!0),t.memoizedState=n)}function fM(t,e){var n=at;at=n!==0&&4>n?n:4,t(!0);var i=zu.transition;zu.transition={};try{t(!1),e()}finally{at=n,zu.transition=i}}function Y0(){return Zn().memoizedState}function hM(t,e,n){var i=Ar(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},K0(t))Z0(e,n);else if(n=P0(t,e,n,i),n!==null){var r=vn();fi(n,t,i,r),J0(n,e,i)}}function pM(t,e,n){var i=Ar(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(K0(t))Z0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,hi(o,a)){var l=e.interleaved;l===null?(r.next=r,cp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=P0(t,e,r,i),n!==null&&(r=vn(),fi(n,t,i,r),J0(n,e,i))}}function K0(t){var e=t.alternate;return t===Et||e!==null&&e===Et}function Z0(t,e){io=Tc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function J0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Yh(t,n)}}var bc={readContext:Kn,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useInsertionEffect:en,useLayoutEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useMutableSource:en,useSyncExternalStore:en,useId:en,unstable_isNewReconciler:!1},mM={readContext:Kn,useCallback:function(t,e){return yi().memoizedState=[t,e===void 0?null:e],t},useContext:Kn,useEffect:og,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Gl(4194308,4,G0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Gl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Gl(4,2,t,e)},useMemo:function(t,e){var n=yi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=yi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=hM.bind(null,Et,t),[i.memoizedState,t]},useRef:function(t){var e=yi();return t={current:t},e.memoizedState=t},useState:ag,useDebugValue:_p,useDeferredValue:function(t){return yi().memoizedState=t},useTransition:function(){var t=ag(!1),e=t[0];return t=fM.bind(null,t[1]),yi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Et,r=yi();if(_t){if(n===void 0)throw Error(oe(407));n=n()}else{if(n=e(),qt===null)throw Error(oe(349));os&30||F0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,og(B0.bind(null,i,s,t),[t]),i.flags|=2048,Mo(9,O0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=yi(),e=qt.identifierPrefix;if(_t){var n=Gi,i=Hi;n=(i&~(1<<32-di(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=So++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=dM++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},gM={readContext:Kn,useCallback:X0,useContext:Kn,useEffect:vp,useImperativeHandle:W0,useInsertionEffect:V0,useLayoutEffect:H0,useMemo:q0,useReducer:ju,useRef:j0,useState:function(){return ju(Eo)},useDebugValue:_p,useDeferredValue:function(t){var e=Zn();return $0(e,jt.memoizedState,t)},useTransition:function(){var t=ju(Eo)[0],e=Zn().memoizedState;return[t,e]},useMutableSource:I0,useSyncExternalStore:U0,useId:Y0,unstable_isNewReconciler:!1},vM={readContext:Kn,useCallback:X0,useContext:Kn,useEffect:vp,useImperativeHandle:W0,useInsertionEffect:V0,useLayoutEffect:H0,useMemo:q0,useReducer:Vu,useRef:j0,useState:function(){return Vu(Eo)},useDebugValue:_p,useDeferredValue:function(t){var e=Zn();return jt===null?e.memoizedState=t:$0(e,jt.memoizedState,t)},useTransition:function(){var t=Vu(Eo)[0],e=Zn().memoizedState;return[t,e]},useMutableSource:I0,useSyncExternalStore:U0,useId:Y0,unstable_isNewReconciler:!1};function si(t,e){if(t&&t.defaultProps){e=wt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function mf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:wt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Yc={isMounted:function(t){return(t=t._reactInternals)?ps(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=vn(),r=Ar(t),s=Xi(i,r);s.payload=e,n!=null&&(s.callback=n),e=br(t,s,r),e!==null&&(fi(e,t,r,i),Vl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=vn(),r=Ar(t),s=Xi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=br(t,s,r),e!==null&&(fi(e,t,r,i),Vl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=vn(),i=Ar(t),r=Xi(n,i);r.tag=2,e!=null&&(r.callback=e),e=br(t,r,i),e!==null&&(fi(e,t,i,n),Vl(e,t,i))}};function lg(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!mo(n,i)||!mo(r,s):!0}function Q0(t,e,n){var i=!1,r=Dr,s=e.contextType;return typeof s=="object"&&s!==null?s=Kn(s):(r=wn(e)?ss:fn.current,i=e.contextTypes,s=(i=i!=null)?na(t,r):Dr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Yc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function cg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Yc.enqueueReplaceState(e,e.state,null)}function gf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},up(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Kn(s):(s=wn(e)?ss:fn.current,r.context=na(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(mf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Yc.enqueueReplaceState(r,r.state,null),Mc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function aa(t,e){try{var n="",i=e;do n+=WS(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Hu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function vf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var _M=typeof WeakMap=="function"?WeakMap:Map;function ex(t,e,n){n=Xi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ac||(Ac=!0,Cf=i),vf(t,e)},n}function tx(t,e,n){n=Xi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){vf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){vf(t,e),typeof i!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function ug(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new _M;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=LM.bind(null,t,e,n),e.then(t,t))}function dg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function fg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Xi(-1,1),e.tag=2,br(n,e,1))),n.lanes|=1),t)}var xM=tr.ReactCurrentOwner,En=!1;function gn(t,e,n,i){e.child=t===null?N0(e,null,n,i):ra(e,t.child,n,i)}function hg(t,e,n,i,r){n=n.render;var s=e.ref;return Zs(e,r),i=mp(t,e,n,i,s,r),n=gp(),t!==null&&!En?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ji(t,e,r)):(_t&&n&&ip(e),e.flags|=1,gn(t,e,i,r),e.child)}function pg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!bp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,nx(t,e,s,i,r)):(t=$l(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:mo,n(a,i)&&t.ref===e.ref)return Ji(t,e,r)}return e.flags|=1,t=Rr(s,i),t.ref=e.ref,t.return=e,e.child=t}function nx(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(mo(s,i)&&t.ref===e.ref)if(En=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(En=!0);else return e.lanes=t.lanes,Ji(t,e,r)}return _f(t,e,n,i,r)}function ix(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pt(Xs,Dn),Dn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,pt(Xs,Dn),Dn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,pt(Xs,Dn),Dn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,pt(Xs,Dn),Dn|=i;return gn(t,e,r,n),e.child}function rx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function _f(t,e,n,i,r){var s=wn(n)?ss:fn.current;return s=na(e,s),Zs(e,r),n=mp(t,e,n,i,s,r),i=gp(),t!==null&&!En?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ji(t,e,r)):(_t&&i&&ip(e),e.flags|=1,gn(t,e,n,r),e.child)}function mg(t,e,n,i,r){if(wn(n)){var s=!0;_c(e)}else s=!1;if(Zs(e,r),e.stateNode===null)Wl(t,e),Q0(e,n,i),gf(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Kn(u):(u=wn(n)?ss:fn.current,u=na(e,u));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==u)&&cg(e,a,i,u),pr=!1;var f=e.memoizedState;a.state=f,Mc(e,i,a,r),l=e.memoizedState,o!==i||f!==l||Mn.current||pr?(typeof d=="function"&&(mf(e,n,d,i),l=e.memoizedState),(o=pr||lg(e,n,o,i,f,l,u))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,L0(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:si(e.type,o),a.props=u,h=e.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Kn(l):(l=wn(n)?ss:fn.current,l=na(e,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||f!==l)&&cg(e,a,i,l),pr=!1,f=e.memoizedState,a.state=f,Mc(e,i,a,r);var _=e.memoizedState;o!==h||f!==_||Mn.current||pr?(typeof g=="function"&&(mf(e,n,g,i),_=e.memoizedState),(u=pr||lg(e,n,u,i,f,_,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return xf(t,e,n,i,s,r)}function xf(t,e,n,i,r,s){rx(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&eg(e,n,!1),Ji(t,e,s);i=e.stateNode,xM.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=ra(e,t.child,null,s),e.child=ra(e,null,o,s)):gn(t,e,o,s),e.memoizedState=i.state,r&&eg(e,n,!0),e.child}function sx(t){var e=t.stateNode;e.pendingContext?Qm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Qm(t,e.context,!1),dp(t,e.containerInfo)}function gg(t,e,n,i,r){return ia(),sp(r),e.flags|=256,gn(t,e,n,i),e.child}var yf={dehydrated:null,treeContext:null,retryLane:0};function Sf(t){return{baseLanes:t,cachePool:null,transitions:null}}function ax(t,e,n){var i=e.pendingProps,r=St.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),pt(St,r&1),t===null)return hf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Jc(a,i,0,null),t=is(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Sf(n),e.memoizedState=yf,t):xp(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return yM(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Rr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Rr(o,s):(s=is(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Sf(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=yf,i}return s=t.child,t=s.sibling,i=Rr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function xp(t,e){return e=Jc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function al(t,e,n,i){return i!==null&&sp(i),ra(e,t.child,null,n),t=xp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function yM(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Hu(Error(oe(422))),al(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Jc({mode:"visible",children:i.children},r,0,null),s=is(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ra(e,t.child,null,a),e.child.memoizedState=Sf(a),e.memoizedState=yf,s);if(!(e.mode&1))return al(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(oe(419)),i=Hu(s,i,void 0),al(t,e,a,i)}if(o=(a&t.childLanes)!==0,En||o){if(i=qt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Zi(t,r),fi(i,t,r,-1))}return Tp(),i=Hu(Error(oe(421))),al(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=DM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Fn=Tr(r.nextSibling),On=e,_t=!0,li=null,t!==null&&(Gn[Wn++]=Hi,Gn[Wn++]=Gi,Gn[Wn++]=as,Hi=t.id,Gi=t.overflow,as=e),e=xp(e,i.children),e.flags|=4096,e)}function vg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),pf(t.return,e,n)}function Gu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function ox(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(gn(t,e,i.children,n),i=St.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&vg(t,n,e);else if(t.tag===19)vg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(pt(St,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&wc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Gu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&wc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Gu(e,!0,n,null,s);break;case"together":Gu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Wl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ji(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ls|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(oe(153));if(e.child!==null){for(t=e.child,n=Rr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Rr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function SM(t,e,n){switch(e.tag){case 3:sx(e),ia();break;case 5:D0(e);break;case 1:wn(e.type)&&_c(e);break;case 4:dp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;pt(Sc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(pt(St,St.current&1),e.flags|=128,null):n&e.child.childLanes?ax(t,e,n):(pt(St,St.current&1),t=Ji(t,e,n),t!==null?t.sibling:null);pt(St,St.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return ox(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),pt(St,St.current),i)break;return null;case 22:case 23:return e.lanes=0,ix(t,e,n)}return Ji(t,e,n)}var lx,Ef,cx,ux;lx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ef=function(){};cx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Jr(bi.current);var s=null;switch(n){case"input":r=Hd(t,r),i=Hd(t,i),s=[];break;case"select":r=wt({},r,{value:void 0}),i=wt({},i,{value:void 0}),s=[];break;case"textarea":r=Xd(t,r),i=Xd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=gc)}$d(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(oo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(oo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&gt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};ux=function(t,e,n,i){n!==i&&(e.flags|=4)};function Pa(t,e){if(!_t)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function tn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function EM(t,e,n){var i=e.pendingProps;switch(rp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(e),null;case 1:return wn(e.type)&&vc(),tn(e),null;case 3:return i=e.stateNode,sa(),vt(Mn),vt(fn),hp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(rl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,li!==null&&(Nf(li),li=null))),Ef(t,e),tn(e),null;case 5:fp(e);var r=Jr(yo.current);if(n=e.type,t!==null&&e.stateNode!=null)cx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return tn(e),null}if(t=Jr(bi.current),rl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Ei]=e,i[_o]=s,t=(e.mode&1)!==0,n){case"dialog":gt("cancel",i),gt("close",i);break;case"iframe":case"object":case"embed":gt("load",i);break;case"video":case"audio":for(r=0;r<qa.length;r++)gt(qa[r],i);break;case"source":gt("error",i);break;case"img":case"image":case"link":gt("error",i),gt("load",i);break;case"details":gt("toggle",i);break;case"input":bm(i,s),gt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},gt("invalid",i);break;case"textarea":Am(i,s),gt("invalid",i)}$d(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&il(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&il(i.textContent,o,t),r=["children",""+o]):oo.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&gt("scroll",i)}switch(n){case"input":Yo(i),Cm(i,s,!0);break;case"textarea":Yo(i),Rm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=gc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=B_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Ei]=e,t[_o]=i,lx(t,e,!1,!1),e.stateNode=t;e:{switch(a=Yd(n,i),n){case"dialog":gt("cancel",t),gt("close",t),r=i;break;case"iframe":case"object":case"embed":gt("load",t),r=i;break;case"video":case"audio":for(r=0;r<qa.length;r++)gt(qa[r],t);r=i;break;case"source":gt("error",t),r=i;break;case"img":case"image":case"link":gt("error",t),gt("load",t),r=i;break;case"details":gt("toggle",t),r=i;break;case"input":bm(t,i),r=Hd(t,i),gt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=wt({},i,{value:void 0}),gt("invalid",t);break;case"textarea":Am(t,i),r=Xd(t,i),gt("invalid",t);break;default:r=i}$d(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?j_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&k_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&lo(t,l):typeof l=="number"&&lo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(oo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&gt("scroll",t):l!=null&&Hh(t,s,l,a))}switch(n){case"input":Yo(t),Cm(t,i,!1);break;case"textarea":Yo(t),Rm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Lr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?qs(t,!!i.multiple,s,!1):i.defaultValue!=null&&qs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=gc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return tn(e),null;case 6:if(t&&e.stateNode!=null)ux(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(n=Jr(yo.current),Jr(bi.current),rl(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ei]=e,(s=i.nodeValue!==n)&&(t=On,t!==null))switch(t.tag){case 3:il(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&il(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ei]=e,e.stateNode=i}return tn(e),null;case 13:if(vt(St),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_t&&Fn!==null&&e.mode&1&&!(e.flags&128))A0(),ia(),e.flags|=98560,s=!1;else if(s=rl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(oe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[Ei]=e}else ia(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;tn(e),s=!1}else li!==null&&(Nf(li),li=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||St.current&1?Vt===0&&(Vt=3):Tp())),e.updateQueue!==null&&(e.flags|=4),tn(e),null);case 4:return sa(),Ef(t,e),t===null&&go(e.stateNode.containerInfo),tn(e),null;case 10:return lp(e.type._context),tn(e),null;case 17:return wn(e.type)&&vc(),tn(e),null;case 19:if(vt(St),s=e.memoizedState,s===null)return tn(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Pa(s,!1);else{if(Vt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=wc(t),a!==null){for(e.flags|=128,Pa(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return pt(St,St.current&1|2),e.child}t=t.sibling}s.tail!==null&&Lt()>oa&&(e.flags|=128,i=!0,Pa(s,!1),e.lanes=4194304)}else{if(!i)if(t=wc(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Pa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!_t)return tn(e),null}else 2*Lt()-s.renderingStartTime>oa&&n!==1073741824&&(e.flags|=128,i=!0,Pa(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Lt(),e.sibling=null,n=St.current,pt(St,i?n&1|2:n&1),e):(tn(e),null);case 22:case 23:return wp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Dn&1073741824&&(tn(e),e.subtreeFlags&6&&(e.flags|=8192)):tn(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function MM(t,e){switch(rp(e),e.tag){case 1:return wn(e.type)&&vc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return sa(),vt(Mn),vt(fn),hp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return fp(e),null;case 13:if(vt(St),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));ia()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return vt(St),null;case 4:return sa(),null;case 10:return lp(e.type._context),null;case 22:case 23:return wp(),null;case 24:return null;default:return null}}var ol=!1,on=!1,wM=typeof WeakSet=="function"?WeakSet:Set,be=null;function Ws(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Ct(t,e,i)}else n.current=null}function Mf(t,e,n){try{n()}catch(i){Ct(t,e,i)}}var _g=!1;function TM(t,e){if(af=hc,t=m0(),np(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,u=0,d=0,h=t,f=null;t:for(;;){for(var g;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(g=h.firstChild)!==null;)f=h,h=g;for(;;){if(h===t)break t;if(f===n&&++u===r&&(o=a),f===s&&++d===i&&(l=a),(g=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=g}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(of={focusedElem:t,selectionRange:n},hc=!1,be=e;be!==null;)if(e=be,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,be=t;else for(;be!==null;){e=be;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,m=_.memoizedState,p=e.stateNode,v=p.getSnapshotBeforeUpdate(e.elementType===e.type?x:si(e.type,x),m);p.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(E){Ct(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,be=t;break}be=e.return}return _=_g,_g=!1,_}function ro(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Mf(e,n,s)}r=r.next}while(r!==i)}}function Kc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function wf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function dx(t){var e=t.alternate;e!==null&&(t.alternate=null,dx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ei],delete e[_o],delete e[uf],delete e[oM],delete e[lM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function fx(t){return t.tag===5||t.tag===3||t.tag===4}function xg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||fx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Tf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=gc));else if(i!==4&&(t=t.child,t!==null))for(Tf(t,e,n),t=t.sibling;t!==null;)Tf(t,e,n),t=t.sibling}function bf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(bf(t,e,n),t=t.sibling;t!==null;)bf(t,e,n),t=t.sibling}var Yt=null,ai=!1;function ar(t,e,n){for(n=n.child;n!==null;)hx(t,e,n),n=n.sibling}function hx(t,e,n){if(Ti&&typeof Ti.onCommitFiberUnmount=="function")try{Ti.onCommitFiberUnmount(Vc,n)}catch{}switch(n.tag){case 5:on||Ws(n,e);case 6:var i=Yt,r=ai;Yt=null,ar(t,e,n),Yt=i,ai=r,Yt!==null&&(ai?(t=Yt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Yt.removeChild(n.stateNode));break;case 18:Yt!==null&&(ai?(t=Yt,n=n.stateNode,t.nodeType===8?Ou(t.parentNode,n):t.nodeType===1&&Ou(t,n),ho(t)):Ou(Yt,n.stateNode));break;case 4:i=Yt,r=ai,Yt=n.stateNode.containerInfo,ai=!0,ar(t,e,n),Yt=i,ai=r;break;case 0:case 11:case 14:case 15:if(!on&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Mf(n,e,a),r=r.next}while(r!==i)}ar(t,e,n);break;case 1:if(!on&&(Ws(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Ct(n,e,o)}ar(t,e,n);break;case 21:ar(t,e,n);break;case 22:n.mode&1?(on=(i=on)||n.memoizedState!==null,ar(t,e,n),on=i):ar(t,e,n);break;default:ar(t,e,n)}}function yg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new wM),e.forEach(function(i){var r=IM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function ti(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Yt=o.stateNode,ai=!1;break e;case 3:Yt=o.stateNode.containerInfo,ai=!0;break e;case 4:Yt=o.stateNode.containerInfo,ai=!0;break e}o=o.return}if(Yt===null)throw Error(oe(160));hx(s,a,r),Yt=null,ai=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Ct(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)px(e,t),e=e.sibling}function px(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ti(e,t),vi(t),i&4){try{ro(3,t,t.return),Kc(3,t)}catch(x){Ct(t,t.return,x)}try{ro(5,t,t.return)}catch(x){Ct(t,t.return,x)}}break;case 1:ti(e,t),vi(t),i&512&&n!==null&&Ws(n,n.return);break;case 5:if(ti(e,t),vi(t),i&512&&n!==null&&Ws(n,n.return),t.flags&32){var r=t.stateNode;try{lo(r,"")}catch(x){Ct(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&F_(r,s),Yd(o,a);var u=Yd(o,s);for(a=0;a<l.length;a+=2){var d=l[a],h=l[a+1];d==="style"?j_(r,h):d==="dangerouslySetInnerHTML"?k_(r,h):d==="children"?lo(r,h):Hh(r,d,h,u)}switch(o){case"input":Gd(r,s);break;case"textarea":O_(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?qs(r,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?qs(r,!!s.multiple,s.defaultValue,!0):qs(r,!!s.multiple,s.multiple?[]:"",!1))}r[_o]=s}catch(x){Ct(t,t.return,x)}}break;case 6:if(ti(e,t),vi(t),i&4){if(t.stateNode===null)throw Error(oe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){Ct(t,t.return,x)}}break;case 3:if(ti(e,t),vi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ho(e.containerInfo)}catch(x){Ct(t,t.return,x)}break;case 4:ti(e,t),vi(t);break;case 13:ti(e,t),vi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Ep=Lt())),i&4&&yg(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(on=(u=on)||d,ti(e,t),on=u):ti(e,t),vi(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(be=t,d=t.child;d!==null;){for(h=be=d;be!==null;){switch(f=be,g=f.child,f.tag){case 0:case 11:case 14:case 15:ro(4,f,f.return);break;case 1:Ws(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){Ct(i,n,x)}}break;case 5:Ws(f,f.return);break;case 22:if(f.memoizedState!==null){Eg(h);continue}}g!==null?(g.return=f,be=g):Eg(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=z_("display",a))}catch(x){Ct(t,t.return,x)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(x){Ct(t,t.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ti(e,t),vi(t),i&4&&yg(t);break;case 21:break;default:ti(e,t),vi(t)}}function vi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(fx(n)){var i=n;break e}n=n.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(lo(r,""),i.flags&=-33);var s=xg(t);bf(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=xg(t);Tf(t,o,a);break;default:throw Error(oe(161))}}catch(l){Ct(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function bM(t,e,n){be=t,mx(t)}function mx(t,e,n){for(var i=(t.mode&1)!==0;be!==null;){var r=be,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||ol;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||on;o=ol;var u=on;if(ol=a,(on=l)&&!u)for(be=r;be!==null;)a=be,l=a.child,a.tag===22&&a.memoizedState!==null?Mg(r):l!==null?(l.return=a,be=l):Mg(r);for(;s!==null;)be=s,mx(s),s=s.sibling;be=r,ol=o,on=u}Sg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,be=s):Sg(t)}}function Sg(t){for(;be!==null;){var e=be;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:on||Kc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!on)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:si(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&sg(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}sg(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&ho(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}on||e.flags&512&&wf(e)}catch(f){Ct(e,e.return,f)}}if(e===t){be=null;break}if(n=e.sibling,n!==null){n.return=e.return,be=n;break}be=e.return}}function Eg(t){for(;be!==null;){var e=be;if(e===t){be=null;break}var n=e.sibling;if(n!==null){n.return=e.return,be=n;break}be=e.return}}function Mg(t){for(;be!==null;){var e=be;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Kc(4,e)}catch(l){Ct(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ct(e,r,l)}}var s=e.return;try{wf(e)}catch(l){Ct(e,s,l)}break;case 5:var a=e.return;try{wf(e)}catch(l){Ct(e,a,l)}}}catch(l){Ct(e,e.return,l)}if(e===t){be=null;break}var o=e.sibling;if(o!==null){o.return=e.return,be=o;break}be=e.return}}var CM=Math.ceil,Cc=tr.ReactCurrentDispatcher,yp=tr.ReactCurrentOwner,Yn=tr.ReactCurrentBatchConfig,tt=0,qt=null,Ft=null,Zt=0,Dn=0,Xs=Or(0),Vt=0,wo=null,ls=0,Zc=0,Sp=0,so=null,Sn=null,Ep=0,oa=1/0,zi=null,Ac=!1,Cf=null,Cr=null,ll=!1,xr=null,Rc=0,ao=0,Af=null,Xl=-1,ql=0;function vn(){return tt&6?Lt():Xl!==-1?Xl:Xl=Lt()}function Ar(t){return t.mode&1?tt&2&&Zt!==0?Zt&-Zt:uM.transition!==null?(ql===0&&(ql=Q_()),ql):(t=at,t!==0||(t=window.event,t=t===void 0?16:a0(t.type)),t):1}function fi(t,e,n,i){if(50<ao)throw ao=0,Af=null,Error(oe(185));Lo(t,n,i),(!(tt&2)||t!==qt)&&(t===qt&&(!(tt&2)&&(Zc|=n),Vt===4&&gr(t,Zt)),Tn(t,i),n===1&&tt===0&&!(e.mode&1)&&(oa=Lt()+500,qc&&Br()))}function Tn(t,e){var n=t.callbackNode;uE(t,e);var i=fc(t,t===qt?Zt:0);if(i===0)n!==null&&Lm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Lm(n),e===1)t.tag===0?cM(wg.bind(null,t)):T0(wg.bind(null,t)),sM(function(){!(tt&6)&&Br()}),n=null;else{switch(e0(i)){case 1:n=$h;break;case 4:n=Z_;break;case 16:n=dc;break;case 536870912:n=J_;break;default:n=dc}n=Mx(n,gx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function gx(t,e){if(Xl=-1,ql=0,tt&6)throw Error(oe(327));var n=t.callbackNode;if(Js()&&t.callbackNode!==n)return null;var i=fc(t,t===qt?Zt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Nc(t,i);else{e=i;var r=tt;tt|=2;var s=_x();(qt!==t||Zt!==e)&&(zi=null,oa=Lt()+500,ns(t,e));do try{NM();break}catch(o){vx(t,o)}while(!0);op(),Cc.current=s,tt=r,Ft!==null?e=0:(qt=null,Zt=0,e=Vt)}if(e!==0){if(e===2&&(r=ef(t),r!==0&&(i=r,e=Rf(t,r))),e===1)throw n=wo,ns(t,0),gr(t,i),Tn(t,Lt()),n;if(e===6)gr(t,i);else{if(r=t.current.alternate,!(i&30)&&!AM(r)&&(e=Nc(t,i),e===2&&(s=ef(t),s!==0&&(i=s,e=Rf(t,s))),e===1))throw n=wo,ns(t,0),gr(t,i),Tn(t,Lt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:Xr(t,Sn,zi);break;case 3:if(gr(t,i),(i&130023424)===i&&(e=Ep+500-Lt(),10<e)){if(fc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){vn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=cf(Xr.bind(null,t,Sn,zi),e);break}Xr(t,Sn,zi);break;case 4:if(gr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-di(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Lt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*CM(i/1960))-i,10<i){t.timeoutHandle=cf(Xr.bind(null,t,Sn,zi),i);break}Xr(t,Sn,zi);break;case 5:Xr(t,Sn,zi);break;default:throw Error(oe(329))}}}return Tn(t,Lt()),t.callbackNode===n?gx.bind(null,t):null}function Rf(t,e){var n=so;return t.current.memoizedState.isDehydrated&&(ns(t,e).flags|=256),t=Nc(t,e),t!==2&&(e=Sn,Sn=n,e!==null&&Nf(e)),t}function Nf(t){Sn===null?Sn=t:Sn.push.apply(Sn,t)}function AM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!hi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function gr(t,e){for(e&=~Sp,e&=~Zc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-di(e),i=1<<n;t[n]=-1,e&=~i}}function wg(t){if(tt&6)throw Error(oe(327));Js();var e=fc(t,0);if(!(e&1))return Tn(t,Lt()),null;var n=Nc(t,e);if(t.tag!==0&&n===2){var i=ef(t);i!==0&&(e=i,n=Rf(t,i))}if(n===1)throw n=wo,ns(t,0),gr(t,e),Tn(t,Lt()),n;if(n===6)throw Error(oe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Xr(t,Sn,zi),Tn(t,Lt()),null}function Mp(t,e){var n=tt;tt|=1;try{return t(e)}finally{tt=n,tt===0&&(oa=Lt()+500,qc&&Br())}}function cs(t){xr!==null&&xr.tag===0&&!(tt&6)&&Js();var e=tt;tt|=1;var n=Yn.transition,i=at;try{if(Yn.transition=null,at=1,t)return t()}finally{at=i,Yn.transition=n,tt=e,!(tt&6)&&Br()}}function wp(){Dn=Xs.current,vt(Xs)}function ns(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,rM(n)),Ft!==null)for(n=Ft.return;n!==null;){var i=n;switch(rp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&vc();break;case 3:sa(),vt(Mn),vt(fn),hp();break;case 5:fp(i);break;case 4:sa();break;case 13:vt(St);break;case 19:vt(St);break;case 10:lp(i.type._context);break;case 22:case 23:wp()}n=n.return}if(qt=t,Ft=t=Rr(t.current,null),Zt=Dn=e,Vt=0,wo=null,Sp=Zc=ls=0,Sn=so=null,Zr!==null){for(e=0;e<Zr.length;e++)if(n=Zr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Zr=null}return t}function vx(t,e){do{var n=Ft;try{if(op(),Hl.current=bc,Tc){for(var i=Et.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Tc=!1}if(os=0,Xt=jt=Et=null,io=!1,So=0,yp.current=null,n===null||n.return===null){Vt=1,wo=e,Ft=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Zt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=o,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=dg(a);if(g!==null){g.flags&=-257,fg(g,a,o,s,e),g.mode&1&&ug(s,u,e),e=g,l=u;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){ug(s,u,e),Tp();break e}l=Error(oe(426))}}else if(_t&&o.mode&1){var m=dg(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),fg(m,a,o,s,e),sp(aa(l,o));break e}}s=l=aa(l,o),Vt!==4&&(Vt=2),so===null?so=[s]:so.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=ex(s,l,e);rg(s,p);break e;case 1:o=l;var v=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Cr===null||!Cr.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=tx(s,o,e);rg(s,E);break e}}s=s.return}while(s!==null)}yx(n)}catch(A){e=A,Ft===n&&n!==null&&(Ft=n=n.return);continue}break}while(!0)}function _x(){var t=Cc.current;return Cc.current=bc,t===null?bc:t}function Tp(){(Vt===0||Vt===3||Vt===2)&&(Vt=4),qt===null||!(ls&268435455)&&!(Zc&268435455)||gr(qt,Zt)}function Nc(t,e){var n=tt;tt|=2;var i=_x();(qt!==t||Zt!==e)&&(zi=null,ns(t,e));do try{RM();break}catch(r){vx(t,r)}while(!0);if(op(),tt=n,Cc.current=i,Ft!==null)throw Error(oe(261));return qt=null,Zt=0,Vt}function RM(){for(;Ft!==null;)xx(Ft)}function NM(){for(;Ft!==null&&!tE();)xx(Ft)}function xx(t){var e=Ex(t.alternate,t,Dn);t.memoizedProps=t.pendingProps,e===null?yx(t):Ft=e,yp.current=null}function yx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=MM(n,e),n!==null){n.flags&=32767,Ft=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Vt=6,Ft=null;return}}else if(n=EM(n,e,Dn),n!==null){Ft=n;return}if(e=e.sibling,e!==null){Ft=e;return}Ft=e=t}while(e!==null);Vt===0&&(Vt=5)}function Xr(t,e,n){var i=at,r=Yn.transition;try{Yn.transition=null,at=1,PM(t,e,n,i)}finally{Yn.transition=r,at=i}return null}function PM(t,e,n,i){do Js();while(xr!==null);if(tt&6)throw Error(oe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(oe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(dE(t,s),t===qt&&(Ft=qt=null,Zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ll||(ll=!0,Mx(dc,function(){return Js(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Yn.transition,Yn.transition=null;var a=at;at=1;var o=tt;tt|=4,yp.current=null,TM(t,n),px(n,t),ZE(of),hc=!!af,of=af=null,t.current=n,bM(n),nE(),tt=o,at=a,Yn.transition=s}else t.current=n;if(ll&&(ll=!1,xr=t,Rc=r),s=t.pendingLanes,s===0&&(Cr=null),sE(n.stateNode),Tn(t,Lt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ac)throw Ac=!1,t=Cf,Cf=null,t;return Rc&1&&t.tag!==0&&Js(),s=t.pendingLanes,s&1?t===Af?ao++:(ao=0,Af=t):ao=0,Br(),null}function Js(){if(xr!==null){var t=e0(Rc),e=Yn.transition,n=at;try{if(Yn.transition=null,at=16>t?16:t,xr===null)var i=!1;else{if(t=xr,xr=null,Rc=0,tt&6)throw Error(oe(331));var r=tt;for(tt|=4,be=t.current;be!==null;){var s=be,a=s.child;if(be.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(be=u;be!==null;){var d=be;switch(d.tag){case 0:case 11:case 15:ro(8,d,s)}var h=d.child;if(h!==null)h.return=d,be=h;else for(;be!==null;){d=be;var f=d.sibling,g=d.return;if(dx(d),d===u){be=null;break}if(f!==null){f.return=g,be=f;break}be=g}}}var _=s.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}be=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,be=a;else e:for(;be!==null;){if(s=be,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ro(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,be=p;break e}be=s.return}}var v=t.current;for(be=v;be!==null;){a=be;var S=a.child;if(a.subtreeFlags&2064&&S!==null)S.return=a,be=S;else e:for(a=v;be!==null;){if(o=be,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Kc(9,o)}}catch(A){Ct(o,o.return,A)}if(o===a){be=null;break e}var E=o.sibling;if(E!==null){E.return=o.return,be=E;break e}be=o.return}}if(tt=r,Br(),Ti&&typeof Ti.onPostCommitFiberRoot=="function")try{Ti.onPostCommitFiberRoot(Vc,t)}catch{}i=!0}return i}finally{at=n,Yn.transition=e}}return!1}function Tg(t,e,n){e=aa(n,e),e=ex(t,e,1),t=br(t,e,1),e=vn(),t!==null&&(Lo(t,1,e),Tn(t,e))}function Ct(t,e,n){if(t.tag===3)Tg(t,t,n);else for(;e!==null;){if(e.tag===3){Tg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Cr===null||!Cr.has(i))){t=aa(n,t),t=tx(e,t,1),e=br(e,t,1),t=vn(),e!==null&&(Lo(e,1,t),Tn(e,t));break}}e=e.return}}function LM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=vn(),t.pingedLanes|=t.suspendedLanes&n,qt===t&&(Zt&n)===n&&(Vt===4||Vt===3&&(Zt&130023424)===Zt&&500>Lt()-Ep?ns(t,0):Sp|=n),Tn(t,e)}function Sx(t,e){e===0&&(t.mode&1?(e=Jo,Jo<<=1,!(Jo&130023424)&&(Jo=4194304)):e=1);var n=vn();t=Zi(t,e),t!==null&&(Lo(t,e,n),Tn(t,n))}function DM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Sx(t,n)}function IM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),Sx(t,n)}var Ex;Ex=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Mn.current)En=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return En=!1,SM(t,e,n);En=!!(t.flags&131072)}else En=!1,_t&&e.flags&1048576&&b0(e,yc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Wl(t,e),t=e.pendingProps;var r=na(e,fn.current);Zs(e,n),r=mp(null,e,i,t,r,n);var s=gp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,wn(i)?(s=!0,_c(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,up(e),r.updater=Yc,e.stateNode=r,r._reactInternals=e,gf(e,i,t,n),e=xf(null,e,i,!0,s,n)):(e.tag=0,_t&&s&&ip(e),gn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Wl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=FM(i),t=si(i,t),r){case 0:e=_f(null,e,i,t,n);break e;case 1:e=mg(null,e,i,t,n);break e;case 11:e=hg(null,e,i,t,n);break e;case 14:e=pg(null,e,i,si(i.type,t),n);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),_f(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),mg(t,e,i,r,n);case 3:e:{if(sx(e),t===null)throw Error(oe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,L0(t,e),Mc(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=aa(Error(oe(423)),e),e=gg(t,e,i,n,r);break e}else if(i!==r){r=aa(Error(oe(424)),e),e=gg(t,e,i,n,r);break e}else for(Fn=Tr(e.stateNode.containerInfo.firstChild),On=e,_t=!0,li=null,n=N0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ia(),i===r){e=Ji(t,e,n);break e}gn(t,e,i,n)}e=e.child}return e;case 5:return D0(e),t===null&&hf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,lf(i,r)?a=null:s!==null&&lf(i,s)&&(e.flags|=32),rx(t,e),gn(t,e,a,n),e.child;case 6:return t===null&&hf(e),null;case 13:return ax(t,e,n);case 4:return dp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ra(e,null,i,n):gn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),hg(t,e,i,r,n);case 7:return gn(t,e,e.pendingProps,n),e.child;case 8:return gn(t,e,e.pendingProps.children,n),e.child;case 12:return gn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,pt(Sc,i._currentValue),i._currentValue=a,s!==null)if(hi(s.value,a)){if(s.children===r.children&&!Mn.current){e=Ji(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Xi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),pf(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(oe(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),pf(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}gn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Zs(e,n),r=Kn(r),i=i(r),e.flags|=1,gn(t,e,i,n),e.child;case 14:return i=e.type,r=si(i,e.pendingProps),r=si(i.type,r),pg(t,e,i,r,n);case 15:return nx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),Wl(t,e),e.tag=1,wn(i)?(t=!0,_c(e)):t=!1,Zs(e,n),Q0(e,i,r),gf(e,i,r,n),xf(null,e,i,!0,t,n);case 19:return ox(t,e,n);case 22:return ix(t,e,n)}throw Error(oe(156,e.tag))};function Mx(t,e){return K_(t,e)}function UM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(t,e,n,i){return new UM(t,e,n,i)}function bp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function FM(t){if(typeof t=="function")return bp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Wh)return 11;if(t===Xh)return 14}return 2}function Rr(t,e){var n=t.alternate;return n===null?(n=$n(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function $l(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")bp(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Fs:return is(n.children,r,s,e);case Gh:a=8,r|=8;break;case kd:return t=$n(12,n,e,r|2),t.elementType=kd,t.lanes=s,t;case zd:return t=$n(13,n,e,r),t.elementType=zd,t.lanes=s,t;case jd:return t=$n(19,n,e,r),t.elementType=jd,t.lanes=s,t;case D_:return Jc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case P_:a=10;break e;case L_:a=9;break e;case Wh:a=11;break e;case Xh:a=14;break e;case hr:a=16,i=null;break e}throw Error(oe(130,t==null?t:typeof t,""))}return e=$n(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function is(t,e,n,i){return t=$n(7,t,i,e),t.lanes=n,t}function Jc(t,e,n,i){return t=$n(22,t,i,e),t.elementType=D_,t.lanes=n,t.stateNode={isHidden:!1},t}function Wu(t,e,n){return t=$n(6,t,null,e),t.lanes=n,t}function Xu(t,e,n){return e=$n(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function OM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bu(0),this.expirationTimes=bu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Cp(t,e,n,i,r,s,a,o,l){return t=new OM(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=$n(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},up(s),t}function BM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Us,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function wx(t){if(!t)return Dr;t=t._reactInternals;e:{if(ps(t)!==t||t.tag!==1)throw Error(oe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(wn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(t.tag===1){var n=t.type;if(wn(n))return w0(t,n,e)}return e}function Tx(t,e,n,i,r,s,a,o,l){return t=Cp(n,i,!0,t,r,s,a,o,l),t.context=wx(null),n=t.current,i=vn(),r=Ar(n),s=Xi(i,r),s.callback=e??null,br(n,s,r),t.current.lanes=r,Lo(t,r,i),Tn(t,i),t}function Qc(t,e,n,i){var r=e.current,s=vn(),a=Ar(r);return n=wx(n),e.context===null?e.context=n:e.pendingContext=n,e=Xi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=br(r,e,a),t!==null&&(fi(t,r,a,s),Vl(t,r,a)),a}function Pc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function bg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ap(t,e){bg(t,e),(t=t.alternate)&&bg(t,e)}function kM(){return null}var bx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Rp(t){this._internalRoot=t}eu.prototype.render=Rp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(oe(409));Qc(t,e,null,null)};eu.prototype.unmount=Rp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;cs(function(){Qc(null,t,null,null)}),e[Ki]=null}};function eu(t){this._internalRoot=t}eu.prototype.unstable_scheduleHydration=function(t){if(t){var e=i0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<mr.length&&e!==0&&e<mr[n].priority;n++);mr.splice(n,0,t),n===0&&s0(t)}};function Np(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function tu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Cg(){}function zM(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Pc(a);s.call(u)}}var a=Tx(e,i,t,0,null,!1,!1,"",Cg);return t._reactRootContainer=a,t[Ki]=a.current,go(t.nodeType===8?t.parentNode:t),cs(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=Pc(l);o.call(u)}}var l=Cp(t,0,!1,null,null,!1,!1,"",Cg);return t._reactRootContainer=l,t[Ki]=l.current,go(t.nodeType===8?t.parentNode:t),cs(function(){Qc(e,l,n,i)}),l}function nu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Pc(a);o.call(l)}}Qc(e,a,t,r)}else a=zM(n,e,t,r,i);return Pc(a)}t0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Xa(e.pendingLanes);n!==0&&(Yh(e,n|1),Tn(e,Lt()),!(tt&6)&&(oa=Lt()+500,Br()))}break;case 13:cs(function(){var i=Zi(t,1);if(i!==null){var r=vn();fi(i,t,1,r)}}),Ap(t,1)}};Kh=function(t){if(t.tag===13){var e=Zi(t,134217728);if(e!==null){var n=vn();fi(e,t,134217728,n)}Ap(t,134217728)}};n0=function(t){if(t.tag===13){var e=Ar(t),n=Zi(t,e);if(n!==null){var i=vn();fi(n,t,e,i)}Ap(t,e)}};i0=function(){return at};r0=function(t,e){var n=at;try{return at=t,e()}finally{at=n}};Zd=function(t,e,n){switch(e){case"input":if(Gd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Xc(i);if(!r)throw Error(oe(90));U_(i),Gd(i,r)}}}break;case"textarea":O_(t,n);break;case"select":e=n.value,e!=null&&qs(t,!!n.multiple,e,!1)}};G_=Mp;W_=cs;var jM={usingClientEntryPoint:!1,Events:[Io,zs,Xc,V_,H_,Mp]},La={findFiberByHostInstance:Kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},VM={bundleType:La.bundleType,version:La.version,rendererPackageName:La.rendererPackageName,rendererConfig:La.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=$_(t),t===null?null:t.stateNode},findFiberByHostInstance:La.findFiberByHostInstance||kM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cl.isDisabled&&cl.supportsFiber)try{Vc=cl.inject(VM),Ti=cl}catch{}}kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jM;kn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Np(e))throw Error(oe(200));return BM(t,e,null,n)};kn.createRoot=function(t,e){if(!Np(t))throw Error(oe(299));var n=!1,i="",r=bx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Cp(t,1,!1,null,null,n,!1,i,r),t[Ki]=e.current,go(t.nodeType===8?t.parentNode:t),new Rp(e)};kn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(oe(188)):(t=Object.keys(t).join(","),Error(oe(268,t)));return t=$_(e),t=t===null?null:t.stateNode,t};kn.flushSync=function(t){return cs(t)};kn.hydrate=function(t,e,n){if(!tu(e))throw Error(oe(200));return nu(null,t,e,!0,n)};kn.hydrateRoot=function(t,e,n){if(!Np(t))throw Error(oe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=bx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Tx(e,null,t,1,n??null,r,!1,s,a),t[Ki]=e.current,go(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new eu(e)};kn.render=function(t,e,n){if(!tu(e))throw Error(oe(200));return nu(null,t,e,!1,n)};kn.unmountComponentAtNode=function(t){if(!tu(t))throw Error(oe(40));return t._reactRootContainer?(cs(function(){nu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ki]=null})}),!0):!1};kn.unstable_batchedUpdates=Mp;kn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!tu(n))throw Error(oe(200));if(t==null||t._reactInternals===void 0)throw Error(oe(38));return nu(t,e,n,!1,i)};kn.version="18.3.1-next-f1338f8080-20240426";function Cx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cx)}catch(t){console.error(t)}}Cx(),C_.exports=kn;var HM=C_.exports,Ag=HM;Od.createRoot=Ag.createRoot,Od.hydrateRoot=Ag.hydrateRoot;function GM(t={}){const{nonce:e,locale:n,onScriptLoadSuccess:i,onScriptLoadError:r}=t,[s,a]=I.useState(!1),o=I.useRef(i);o.current=i;const l=I.useRef(r);return l.current=r,I.useEffect(()=>{const u=document.createElement("script");return u.src="https://accounts.google.com/gsi/client",n&&(u.src+=`?hl=${n}`),u.async=!0,u.defer=!0,u.nonce=e,u.onload=()=>{var d;a(!0),(d=o.current)===null||d===void 0||d.call(o)},u.onerror=()=>{var d;a(!1),(d=l.current)===null||d===void 0||d.call(l)},document.body.appendChild(u),()=>{document.body.removeChild(u)}},[e]),s}const Ax=I.createContext(null);function WM({clientId:t,nonce:e,locale:n,onScriptLoadSuccess:i,onScriptLoadError:r,children:s}){const a=GM({nonce:e,onScriptLoadSuccess:i,onScriptLoadError:r,locale:n}),o=I.useMemo(()=>({locale:n,clientId:t,scriptLoadedSuccessfully:a}),[t,a]);return jc.createElement(Ax.Provider,{value:o},s)}function XM(){const t=I.useContext(Ax);if(!t)throw new Error("Google OAuth components must be used within GoogleOAuthProvider");return t}function qM(t){var e;return(e=t==null?void 0:t.clientId)!==null&&e!==void 0?e:t==null?void 0:t.client_id}const $M={large:40,medium:32,small:20};function YM({onSuccess:t,onError:e,useOneTap:n,promptMomentNotification:i,type:r="standard",theme:s="outline",size:a="large",text:o,shape:l,logo_alignment:u,width:d,click_listener:h,state:f,containerProps:g,login_hint:_,...x}){const m=I.useRef(null),{clientId:p,locale:v,scriptLoadedSuccessfully:S}=XM(),E=I.useRef(t);E.current=t;const A=I.useRef(e);A.current=e;const w=I.useRef(i);return w.current=i,I.useEffect(()=>{var C,y,b,P,N,D,L,H,U;if(S)return(b=(y=(C=window==null?void 0:window.google)===null||C===void 0?void 0:C.accounts)===null||y===void 0?void 0:y.id)===null||b===void 0||b.initialize({client_id:p,callback:O=>{var j;if(!(O!=null&&O.credential))return(j=A.current)===null||j===void 0?void 0:j.call(A);const{credential:k,select_by:K}=O;E.current({credential:k,clientId:qM(O),select_by:K})},login_hint:_,...x}),(D=(N=(P=window==null?void 0:window.google)===null||P===void 0?void 0:P.accounts)===null||N===void 0?void 0:N.id)===null||D===void 0||D.renderButton(m.current,{type:r,theme:s,size:a,text:o,shape:l,logo_alignment:u,width:d,locale:v,click_listener:h,state:f}),n&&((U=(H=(L=window==null?void 0:window.google)===null||L===void 0?void 0:L.accounts)===null||H===void 0?void 0:H.id)===null||U===void 0||U.prompt(w.current)),()=>{var O,j,k;n&&((k=(j=(O=window==null?void 0:window.google)===null||O===void 0?void 0:O.accounts)===null||j===void 0?void 0:j.id)===null||k===void 0||k.cancel())}},[p,S,n,r,s,a,o,l,u,d,v,_]),jc.createElement("div",{...g,ref:m,style:{height:$M[a],...g==null?void 0:g.style}})}const Rx=I.createContext(),KM=()=>{try{const t=localStorage.getItem("user");return t?JSON.parse(t):null}catch{return localStorage.removeItem("user"),localStorage.removeItem("token"),null}},ZM=({children:t})=>{const[e,n]=I.useState(KM),i=s=>{!s||!s.token||!s.user||(n(s.user),localStorage.setItem("token",s.token),localStorage.setItem("user",JSON.stringify(s.user)))},r=()=>{n(null),localStorage.removeItem("token"),localStorage.removeItem("user")};return c.jsx(Rx.Provider,{value:{user:e,login:i,logout:r},children:t})};/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function To(){return To=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},To.apply(this,arguments)}var yr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(yr||(yr={}));const Rg="popstate";function JM(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:a,hash:o}=i.location;return Pf("",{pathname:s,search:a,hash:o},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:Lc(r)}return ew(e,n,null,t)}function Mt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Pp(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function QM(){return Math.random().toString(36).substr(2,8)}function Ng(t,e){return{usr:t.state,key:t.key,idx:e}}function Pf(t,e,n,i){return n===void 0&&(n=null),To({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?va(e):e,{state:n,key:e&&e.key||i||QM()})}function Lc(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function va(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function ew(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o=yr.Pop,l=null,u=d();u==null&&(u=0,a.replaceState(To({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function h(){o=yr.Pop;let m=d(),p=m==null?null:m-u;u=m,l&&l({action:o,location:x.location,delta:p})}function f(m,p){o=yr.Push;let v=Pf(x.location,m,p);u=d()+1;let S=Ng(v,u),E=x.createHref(v);try{a.pushState(S,"",E)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;r.location.assign(E)}s&&l&&l({action:o,location:x.location,delta:1})}function g(m,p){o=yr.Replace;let v=Pf(x.location,m,p);u=d();let S=Ng(v,u),E=x.createHref(v);a.replaceState(S,"",E),s&&l&&l({action:o,location:x.location,delta:0})}function _(m){let p=r.location.origin!=="null"?r.location.origin:r.location.href,v=typeof m=="string"?m:Lc(m);return v=v.replace(/ $/,"%20"),Mt(p,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,p)}let x={get action(){return o},get location(){return t(r,a)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Rg,h),l=m,()=>{r.removeEventListener(Rg,h),l=null}},createHref(m){return e(r,m)},createURL:_,encodeLocation(m){let p=_(m);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:f,replace:g,go(m){return a.go(m)}};return x}var Pg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Pg||(Pg={}));function tw(t,e,n){return n===void 0&&(n="/"),nw(t,e,n)}function nw(t,e,n,i){let r=typeof e=="string"?va(e):e,s=la(r.pathname||"/",n);if(s==null)return null;let a=Nx(t);iw(a);let o=null;for(let l=0;o==null&&l<a.length;++l){let u=pw(s);o=fw(a[l],u)}return o}function Nx(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,a,o)=>{let l={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};l.relativePath.startsWith("/")&&(Mt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let u=Nr([i,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(Mt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Nx(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:uw(u,s.index),routesMeta:d})};return t.forEach((s,a)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))r(s,a);else for(let l of Px(s.path))r(s,a,l)}),e}function Px(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=Px(i.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),r&&o.push(...a),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function iw(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:dw(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const rw=/^:[\w-]+$/,sw=3,aw=2,ow=1,lw=10,cw=-2,Lg=t=>t==="*";function uw(t,e){let n=t.split("/"),i=n.length;return n.some(Lg)&&(i+=cw),e&&(i+=aw),n.filter(r=>!Lg(r)).reduce((r,s)=>r+(rw.test(s)?sw:s===""?ow:lw),i)}function dw(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function fw(t,e,n){let{routesMeta:i}=t,r={},s="/",a=[];for(let o=0;o<i.length;++o){let l=i[o],u=o===i.length-1,d=s==="/"?e:e.slice(s.length)||"/",h=Lf({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),f=l.route;if(!h)return null;Object.assign(r,h.params),a.push({params:r,pathname:Nr([s,h.pathname]),pathnameBase:xw(Nr([s,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(s=Nr([s,h.pathnameBase]))}return a}function Lf(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=hw(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((u,d,h)=>{let{paramName:f,isOptional:g}=d;if(f==="*"){let x=o[h]||"";a=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const _=o[h];return g&&!_?u[f]=void 0:u[f]=(_||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:a,pattern:t}}function hw(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Pp(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function pw(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Pp(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function la(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const mw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,gw=t=>mw.test(t);function vw(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?va(t):t,s;if(n)if(gw(n))s=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),Pp(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?s=Dg(n.substring(1),"/"):s=Dg(n,e)}else s=e;return{pathname:s,search:yw(i),hash:Sw(r)}}function Dg(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function qu(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function _w(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Lp(t,e){let n=_w(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function Dp(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=va(t):(r=To({},t),Mt(!r.pathname||!r.pathname.includes("?"),qu("?","pathname","search",r)),Mt(!r.pathname||!r.pathname.includes("#"),qu("#","pathname","hash",r)),Mt(!r.search||!r.search.includes("#"),qu("#","search","hash",r)));let s=t===""||r.pathname==="",a=s?"/":r.pathname,o;if(a==null)o=n;else{let h=e.length-1;if(!i&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),h-=1;r.pathname=f.join("/")}o=h>=0?e[h]:"/"}let l=vw(r,o),u=a&&a!=="/"&&a.endsWith("/"),d=(s||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const Nr=t=>t.join("/").replace(/\/\/+/g,"/"),xw=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),yw=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Sw=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Ew(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Lx=["post","put","patch","delete"];new Set(Lx);const Mw=["get",...Lx];new Set(Mw);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bo(){return bo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},bo.apply(this,arguments)}const iu=I.createContext(null),Dx=I.createContext(null),nr=I.createContext(null),ru=I.createContext(null),kr=I.createContext({outlet:null,matches:[],isDataRoute:!1}),Ix=I.createContext(null);function ww(t,e){let{relative:n}=e===void 0?{}:e;_a()||Mt(!1);let{basename:i,navigator:r}=I.useContext(nr),{hash:s,pathname:a,search:o}=au(t,{relative:n}),l=a;return i!=="/"&&(l=a==="/"?i:Nr([i,a])),r.createHref({pathname:l,search:o,hash:s})}function _a(){return I.useContext(ru)!=null}function xa(){return _a()||Mt(!1),I.useContext(ru).location}function Ux(t){I.useContext(nr).static||I.useLayoutEffect(t)}function su(){let{isDataRoute:t}=I.useContext(kr);return t?Ow():Tw()}function Tw(){_a()||Mt(!1);let t=I.useContext(iu),{basename:e,future:n,navigator:i}=I.useContext(nr),{matches:r}=I.useContext(kr),{pathname:s}=xa(),a=JSON.stringify(Lp(r,n.v7_relativeSplatPath)),o=I.useRef(!1);return Ux(()=>{o.current=!0}),I.useCallback(function(u,d){if(d===void 0&&(d={}),!o.current)return;if(typeof u=="number"){i.go(u);return}let h=Dp(u,JSON.parse(a),s,d.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:Nr([e,h.pathname])),(d.replace?i.replace:i.push)(h,d.state,d)},[e,i,a,s,t])}function au(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=I.useContext(nr),{matches:r}=I.useContext(kr),{pathname:s}=xa(),a=JSON.stringify(Lp(r,i.v7_relativeSplatPath));return I.useMemo(()=>Dp(t,JSON.parse(a),s,n==="path"),[t,a,s,n])}function bw(t,e){return Cw(t,e)}function Cw(t,e,n,i){_a()||Mt(!1);let{navigator:r}=I.useContext(nr),{matches:s}=I.useContext(kr),a=s[s.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let u=xa(),d;if(e){var h;let m=typeof e=="string"?va(e):e;l==="/"||(h=m.pathname)!=null&&h.startsWith(l)||Mt(!1),d=m}else d=u;let f=d.pathname||"/",g=f;if(l!=="/"){let m=l.replace(/^\//,"").split("/");g="/"+f.replace(/^\//,"").split("/").slice(m.length).join("/")}let _=tw(t,{pathname:g}),x=Lw(_&&_.map(m=>Object.assign({},m,{params:Object.assign({},o,m.params),pathname:Nr([l,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?l:Nr([l,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),s,n,i);return e&&x?I.createElement(ru.Provider,{value:{location:bo({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:yr.Pop}},x):x}function Aw(){let t=Fw(),e=Ew(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},e),n?I.createElement("pre",{style:r},n):null,null)}const Rw=I.createElement(Aw,null);class Nw extends I.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?I.createElement(kr.Provider,{value:this.props.routeContext},I.createElement(Ix.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Pw(t){let{routeContext:e,match:n,children:i}=t,r=I.useContext(iu);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(kr.Provider,{value:e},i)}function Lw(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let d=a.findIndex(h=>h.route.id&&(o==null?void 0:o[h.route.id])!==void 0);d>=0||Mt(!1),a=a.slice(0,Math.min(a.length,d+1))}let l=!1,u=-1;if(n&&i&&i.v7_partialHydration)for(let d=0;d<a.length;d++){let h=a[d];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=d),h.route.id){let{loaderData:f,errors:g}=n,_=h.route.loader&&f[h.route.id]===void 0&&(!g||g[h.route.id]===void 0);if(h.route.lazy||_){l=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,h,f)=>{let g,_=!1,x=null,m=null;n&&(g=o&&h.route.id?o[h.route.id]:void 0,x=h.route.errorElement||Rw,l&&(u<0&&f===0?(Bw("route-fallback"),_=!0,m=null):u===f&&(_=!0,m=h.route.hydrateFallbackElement||null)));let p=e.concat(a.slice(0,f+1)),v=()=>{let S;return g?S=x:_?S=m:h.route.Component?S=I.createElement(h.route.Component,null):h.route.element?S=h.route.element:S=d,I.createElement(Pw,{match:h,routeContext:{outlet:d,matches:p,isDataRoute:n!=null},children:S})};return n&&(h.route.ErrorBoundary||h.route.errorElement||f===0)?I.createElement(Nw,{location:n.location,revalidation:n.revalidation,component:x,error:g,children:v(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):v()},null)}var Fx=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Fx||{}),Ox=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Ox||{});function Dw(t){let e=I.useContext(iu);return e||Mt(!1),e}function Iw(t){let e=I.useContext(Dx);return e||Mt(!1),e}function Uw(t){let e=I.useContext(kr);return e||Mt(!1),e}function Bx(t){let e=Uw(),n=e.matches[e.matches.length-1];return n.route.id||Mt(!1),n.route.id}function Fw(){var t;let e=I.useContext(Ix),n=Iw(),i=Bx();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function Ow(){let{router:t}=Dw(Fx.UseNavigateStable),e=Bx(Ox.UseNavigateStable),n=I.useRef(!1);return Ux(()=>{n.current=!0}),I.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,bo({fromRouteId:e},s)))},[t,e])}const Ig={};function Bw(t,e,n){Ig[t]||(Ig[t]=!0)}function kw(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function zw(t){let{to:e,replace:n,state:i,relative:r}=t;_a()||Mt(!1);let{future:s,static:a}=I.useContext(nr),{matches:o}=I.useContext(kr),{pathname:l}=xa(),u=su(),d=Dp(e,Lp(o,s.v7_relativeSplatPath),l,r==="path"),h=JSON.stringify(d);return I.useEffect(()=>u(JSON.parse(h),{replace:n,state:i,relative:r}),[u,h,r,n,i]),null}function zt(t){Mt(!1)}function jw(t){let{basename:e="/",children:n=null,location:i,navigationType:r=yr.Pop,navigator:s,static:a=!1,future:o}=t;_a()&&Mt(!1);let l=e.replace(/^\/*/,"/"),u=I.useMemo(()=>({basename:l,navigator:s,static:a,future:bo({v7_relativeSplatPath:!1},o)}),[l,o,s,a]);typeof i=="string"&&(i=va(i));let{pathname:d="/",search:h="",hash:f="",state:g=null,key:_="default"}=i,x=I.useMemo(()=>{let m=la(d,l);return m==null?null:{location:{pathname:m,search:h,hash:f,state:g,key:_},navigationType:r}},[l,d,h,f,g,_,r]);return x==null?null:I.createElement(nr.Provider,{value:u},I.createElement(ru.Provider,{children:n,value:x}))}function Vw(t){let{children:e,location:n}=t;return bw(Df(e),n)}new Promise(()=>{});function Df(t,e){e===void 0&&(e=[]);let n=[];return I.Children.forEach(t,(i,r)=>{if(!I.isValidElement(i))return;let s=[...e,r];if(i.type===I.Fragment){n.push.apply(n,Df(i.props.children,s));return}i.type!==zt&&Mt(!1),!i.props.index||!i.props.children||Mt(!1);let a={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=Df(i.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dc(){return Dc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Dc.apply(this,arguments)}function kx(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function Hw(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Gw(t,e){return t.button===0&&(!e||e==="_self")&&!Hw(t)}const Ww=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Xw=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],qw="6";try{window.__reactRouterVersion=qw}catch{}const $w=I.createContext({isTransitioning:!1}),Yw="startTransition",Ug=LS[Yw];function Kw(t){let{basename:e,children:n,future:i,window:r}=t,s=I.useRef();s.current==null&&(s.current=JM({window:r,v5Compat:!0}));let a=s.current,[o,l]=I.useState({action:a.action,location:a.location}),{v7_startTransition:u}=i||{},d=I.useCallback(h=>{u&&Ug?Ug(()=>l(h)):l(h)},[l,u]);return I.useLayoutEffect(()=>a.listen(d),[a,d]),I.useEffect(()=>kw(i),[i]),I.createElement(jw,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:a,future:i})}const Zw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Jw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ip=I.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:a,state:o,target:l,to:u,preventScrollReset:d,viewTransition:h}=e,f=kx(e,Ww),{basename:g}=I.useContext(nr),_,x=!1;if(typeof u=="string"&&Jw.test(u)&&(_=u,Zw))try{let S=new URL(window.location.href),E=u.startsWith("//")?new URL(S.protocol+u):new URL(u),A=la(E.pathname,g);E.origin===S.origin&&A!=null?u=A+E.search+E.hash:x=!0}catch{}let m=ww(u,{relative:r}),p=tT(u,{replace:a,state:o,target:l,preventScrollReset:d,relative:r,viewTransition:h});function v(S){i&&i(S),S.defaultPrevented||p(S)}return I.createElement("a",Dc({},f,{href:_||m,onClick:x||s?i:v,ref:n,target:l}))}),Qw=I.forwardRef(function(e,n){let{"aria-current":i="page",caseSensitive:r=!1,className:s="",end:a=!1,style:o,to:l,viewTransition:u,children:d}=e,h=kx(e,Xw),f=au(l,{relative:h.relative}),g=xa(),_=I.useContext(Dx),{navigator:x,basename:m}=I.useContext(nr),p=_!=null&&nT(f)&&u===!0,v=x.encodeLocation?x.encodeLocation(f).pathname:f.pathname,S=g.pathname,E=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;r||(S=S.toLowerCase(),E=E?E.toLowerCase():null,v=v.toLowerCase()),E&&m&&(E=la(E,m)||E);const A=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let w=S===v||!a&&S.startsWith(v)&&S.charAt(A)==="/",C=E!=null&&(E===v||!a&&E.startsWith(v)&&E.charAt(v.length)==="/"),y={isActive:w,isPending:C,isTransitioning:p},b=w?i:void 0,P;typeof s=="function"?P=s(y):P=[s,w?"active":null,C?"pending":null,p?"transitioning":null].filter(Boolean).join(" ");let N=typeof o=="function"?o(y):o;return I.createElement(Ip,Dc({},h,{"aria-current":b,className:P,ref:n,style:N,to:l,viewTransition:u}),typeof d=="function"?d(y):d)});var If;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(If||(If={}));var Fg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Fg||(Fg={}));function eT(t){let e=I.useContext(iu);return e||Mt(!1),e}function tT(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:a,viewTransition:o}=e===void 0?{}:e,l=su(),u=xa(),d=au(t,{relative:a});return I.useCallback(h=>{if(Gw(h,n)){h.preventDefault();let f=i!==void 0?i:Lc(u)===Lc(d);l(t,{replace:f,state:r,preventScrollReset:s,relative:a,viewTransition:o})}},[u,l,d,i,r,n,t,s,a,o])}function nT(t,e){e===void 0&&(e={});let n=I.useContext($w);n==null&&Mt(!1);let{basename:i}=eT(If.useViewTransitionState),r=au(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=la(n.currentLocation.pathname,i)||n.currentLocation.pathname,a=la(n.nextLocation.pathname,i)||n.nextLocation.pathname;return Lf(r.pathname,a)!=null||Lf(r.pathname,s)!=null}const zx=I.createContext(null);function iT(){const t=localStorage.getItem("theme");return t==="dark"?"dark":"light"}function rT({children:t}){const[e,n]=I.useState(iT);I.useEffect(()=>{document.body.classList.toggle("dark-mode",e==="dark"),localStorage.setItem("theme",e)},[e]);const i=()=>{n(e==="dark"?"light":"dark")};return c.jsx(zx.Provider,{value:{theme:e,toggleTheme:i},children:t})}function sT(){const t=I.useContext(zx);if(!t)throw new Error("useTheme must be used inside ThemeProvider");return t}function jx(t,e){return function(){return t.apply(e,arguments)}}const{toString:aT}=Object.prototype,{getPrototypeOf:ou}=Object,{iterator:lu,toStringTag:Vx}=Symbol,cu=(t=>e=>{const n=aT.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),pi=t=>(t=t.toLowerCase(),e=>cu(e)===t),uu=t=>e=>typeof e===t,{isArray:ya}=Array,ca=uu("undefined");function Fo(t){return t!==null&&!ca(t)&&t.constructor!==null&&!ca(t.constructor)&&bn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Hx=pi("ArrayBuffer");function oT(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Hx(t.buffer),e}const lT=uu("string"),bn=uu("function"),Gx=uu("number"),Oo=t=>t!==null&&typeof t=="object",cT=t=>t===!0||t===!1,Yl=t=>{if(cu(t)!=="object")return!1;const e=ou(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Vx in t)&&!(lu in t)},uT=t=>{if(!Oo(t)||Fo(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},dT=pi("Date"),fT=pi("File"),hT=t=>!!(t&&typeof t.uri<"u"),pT=t=>t&&typeof t.getParts<"u",mT=pi("Blob"),gT=pi("FileList"),vT=t=>Oo(t)&&bn(t.pipe);function _T(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Og=_T(),Bg=typeof Og.FormData<"u"?Og.FormData:void 0,xT=t=>{if(!t)return!1;if(Bg&&t instanceof Bg)return!0;const e=ou(t);if(!e||e===Object.prototype||!bn(t.append))return!1;const n=cu(t);return n==="formdata"||n==="object"&&bn(t.toString)&&t.toString()==="[object FormData]"},yT=pi("URLSearchParams"),[ST,ET,MT,wT]=["ReadableStream","Request","Response","Headers"].map(pi),TT=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Bo(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,r;if(typeof t!="object"&&(t=[t]),ya(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{if(Fo(t))return;const s=n?Object.getOwnPropertyNames(t):Object.keys(t),a=s.length;let o;for(i=0;i<a;i++)o=s[i],e.call(null,t[o],o,t)}}function Wx(t,e){if(Fo(t))return null;e=e.toLowerCase();const n=Object.keys(t);let i=n.length,r;for(;i-- >0;)if(r=n[i],e===r.toLowerCase())return r;return null}const Qr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Xx=t=>!ca(t)&&t!==Qr;function Uf(){const{caseless:t,skipUndefined:e}=Xx(this)&&this||{},n={},i=(r,s)=>{if(s==="__proto__"||s==="constructor"||s==="prototype")return;const a=t&&Wx(n,s)||s;Yl(n[a])&&Yl(r)?n[a]=Uf(n[a],r):Yl(r)?n[a]=Uf({},r):ya(r)?n[a]=r.slice():(!e||!ca(r))&&(n[a]=r)};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&Bo(arguments[r],i);return n}const bT=(t,e,n,{allOwnKeys:i}={})=>(Bo(e,(r,s)=>{n&&bn(r)?Object.defineProperty(t,s,{value:jx(r,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,s,{value:r,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),t),CT=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),AT=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),Object.defineProperty(t.prototype,"constructor",{value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},RT=(t,e,n,i)=>{let r,s,a;const o={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)a=r[s],(!i||i(a,t,e))&&!o[a]&&(e[a]=t[a],o[a]=!0);t=n!==!1&&ou(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},NT=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},PT=t=>{if(!t)return null;if(ya(t))return t;let e=t.length;if(!Gx(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},LT=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&ou(Uint8Array)),DT=(t,e)=>{const i=(t&&t[lu]).call(t);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(t,s[0],s[1])}},IT=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},UT=pi("HTMLFormElement"),FT=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,r){return i.toUpperCase()+r}),kg=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),OT=pi("RegExp"),qx=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};Bo(n,(r,s)=>{let a;(a=e(r,s,t))!==!1&&(i[s]=a||r)}),Object.defineProperties(t,i)},BT=t=>{qx(t,(e,n)=>{if(bn(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=t[n];if(bn(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},kT=(t,e)=>{const n={},i=r=>{r.forEach(s=>{n[s]=!0})};return ya(t)?i(t):i(String(t).split(e)),n},zT=()=>{},jT=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function VT(t){return!!(t&&bn(t.append)&&t[Vx]==="FormData"&&t[lu])}const HT=t=>{const e=new Array(10),n=(i,r)=>{if(Oo(i)){if(e.indexOf(i)>=0)return;if(Fo(i))return i;if(!("toJSON"in i)){e[r]=i;const s=ya(i)?[]:{};return Bo(i,(a,o)=>{const l=n(a,r+1);!ca(l)&&(s[o]=l)}),e[r]=void 0,s}}return i};return n(t,0)},GT=pi("AsyncFunction"),WT=t=>t&&(Oo(t)||bn(t))&&bn(t.then)&&bn(t.catch),$x=((t,e)=>t?setImmediate:e?((n,i)=>(Qr.addEventListener("message",({source:r,data:s})=>{r===Qr&&s===n&&i.length&&i.shift()()},!1),r=>{i.push(r),Qr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",bn(Qr.postMessage)),XT=typeof queueMicrotask<"u"?queueMicrotask.bind(Qr):typeof process<"u"&&process.nextTick||$x,qT=t=>t!=null&&bn(t[lu]),q={isArray:ya,isArrayBuffer:Hx,isBuffer:Fo,isFormData:xT,isArrayBufferView:oT,isString:lT,isNumber:Gx,isBoolean:cT,isObject:Oo,isPlainObject:Yl,isEmptyObject:uT,isReadableStream:ST,isRequest:ET,isResponse:MT,isHeaders:wT,isUndefined:ca,isDate:dT,isFile:fT,isReactNativeBlob:hT,isReactNative:pT,isBlob:mT,isRegExp:OT,isFunction:bn,isStream:vT,isURLSearchParams:yT,isTypedArray:LT,isFileList:gT,forEach:Bo,merge:Uf,extend:bT,trim:TT,stripBOM:CT,inherits:AT,toFlatObject:RT,kindOf:cu,kindOfTest:pi,endsWith:NT,toArray:PT,forEachEntry:DT,matchAll:IT,isHTMLForm:UT,hasOwnProperty:kg,hasOwnProp:kg,reduceDescriptors:qx,freezeMethods:BT,toObjectSet:kT,toCamelCase:FT,noop:zT,toFiniteNumber:jT,findKey:Wx,global:Qr,isContextDefined:Xx,isSpecCompliantForm:VT,toJSONObject:HT,isAsyncFn:GT,isThenable:WT,setImmediate:$x,asap:XT,isIterable:qT};let De=class Yx extends Error{static from(e,n,i,r,s,a){const o=new Yx(e.message,n||e.code,i,r,s);return o.cause=e,o.name=e.name,e.status!=null&&o.status==null&&(o.status=e.status),a&&Object.assign(o,a),o}constructor(e,n,i,r,s){super(e),Object.defineProperty(this,"message",{value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),i&&(this.config=i),r&&(this.request=r),s&&(this.response=s,this.status=s.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:q.toJSONObject(this.config),code:this.code,status:this.status}}};De.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";De.ERR_BAD_OPTION="ERR_BAD_OPTION";De.ECONNABORTED="ECONNABORTED";De.ETIMEDOUT="ETIMEDOUT";De.ERR_NETWORK="ERR_NETWORK";De.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";De.ERR_DEPRECATED="ERR_DEPRECATED";De.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";De.ERR_BAD_REQUEST="ERR_BAD_REQUEST";De.ERR_CANCELED="ERR_CANCELED";De.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";De.ERR_INVALID_URL="ERR_INVALID_URL";De.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const $T=null;function Ff(t){return q.isPlainObject(t)||q.isArray(t)}function Kx(t){return q.endsWith(t,"[]")?t.slice(0,-2):t}function $u(t,e,n){return t?t.concat(e).map(function(r,s){return r=Kx(r),!n&&s?"["+r+"]":r}).join(n?".":""):e}function YT(t){return q.isArray(t)&&!t.some(Ff)}const KT=q.toFlatObject(q,{},null,function(e){return/^is[A-Z]/.test(e)});function du(t,e,n){if(!q.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=q.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,p){return!q.isUndefined(p[m])});const i=n.metaTokens,r=n.visitor||h,s=n.dots,a=n.indexes,o=n.Blob||typeof Blob<"u"&&Blob,l=n.maxDepth===void 0?100:n.maxDepth,u=o&&q.isSpecCompliantForm(e);if(!q.isFunction(r))throw new TypeError("visitor must be a function");function d(x){if(x===null)return"";if(q.isDate(x))return x.toISOString();if(q.isBoolean(x))return x.toString();if(!u&&q.isBlob(x))throw new De("Blob is not supported. Use a Buffer instead.");return q.isArrayBuffer(x)||q.isTypedArray(x)?u&&typeof Blob=="function"?new Blob([x]):Buffer.from(x):x}function h(x,m,p){let v=x;if(q.isReactNative(e)&&q.isReactNativeBlob(x))return e.append($u(p,m,s),d(x)),!1;if(x&&!p&&typeof x=="object"){if(q.endsWith(m,"{}"))m=i?m:m.slice(0,-2),x=JSON.stringify(x);else if(q.isArray(x)&&YT(x)||(q.isFileList(x)||q.endsWith(m,"[]"))&&(v=q.toArray(x)))return m=Kx(m),v.forEach(function(E,A){!(q.isUndefined(E)||E===null)&&e.append(a===!0?$u([m],A,s):a===null?m:m+"[]",d(E))}),!1}return Ff(x)?!0:(e.append($u(p,m,s),d(x)),!1)}const f=[],g=Object.assign(KT,{defaultVisitor:h,convertValue:d,isVisitable:Ff});function _(x,m,p=0){if(!q.isUndefined(x)){if(p>l)throw new De("Object is too deeply nested ("+p+" levels). Max depth: "+l,De.ERR_FORM_DATA_DEPTH_EXCEEDED);if(f.indexOf(x)!==-1)throw Error("Circular reference detected in "+m.join("."));f.push(x),q.forEach(x,function(S,E){(!(q.isUndefined(S)||S===null)&&r.call(e,S,q.isString(E)?E.trim():E,m,g))===!0&&_(S,m?m.concat(E):[E],p+1)}),f.pop()}}if(!q.isObject(t))throw new TypeError("data must be an object");return _(t),e}function zg(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(t).replace(/[!'()~]|%20/g,function(i){return e[i]})}function Up(t,e){this._pairs=[],t&&du(t,this,e)}const Zx=Up.prototype;Zx.append=function(e,n){this._pairs.push([e,n])};Zx.toString=function(e){const n=e?function(i){return e.call(this,i,zg)}:zg;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function ZT(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Jx(t,e,n){if(!e)return t;const i=n&&n.encode||ZT,r=q.isFunction(n)?{serialize:n}:n,s=r&&r.serialize;let a;if(s?a=s(e,r):a=q.isURLSearchParams(e)?e.toString():new Up(e,r).toString(i),a){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+a}return t}class jg{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){q.forEach(this.handlers,function(i){i!==null&&e(i)})}}const Fp={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},JT=typeof URLSearchParams<"u"?URLSearchParams:Up,QT=typeof FormData<"u"?FormData:null,eb=typeof Blob<"u"?Blob:null,tb={isBrowser:!0,classes:{URLSearchParams:JT,FormData:QT,Blob:eb},protocols:["http","https","file","blob","url","data"]},Op=typeof window<"u"&&typeof document<"u",Of=typeof navigator=="object"&&navigator||void 0,nb=Op&&(!Of||["ReactNative","NativeScript","NS"].indexOf(Of.product)<0),ib=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",rb=Op&&window.location.href||"http://localhost",sb=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Op,hasStandardBrowserEnv:nb,hasStandardBrowserWebWorkerEnv:ib,navigator:Of,origin:rb},Symbol.toStringTag,{value:"Module"})),ln={...sb,...tb};function ab(t,e){return du(t,new ln.classes.URLSearchParams,{visitor:function(n,i,r,s){return ln.isNode&&q.isBuffer(n)?(this.append(i,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)},...e})}function ob(t){return q.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function lb(t){const e={},n=Object.keys(t);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],e[s]=t[s];return e}function Qx(t){function e(n,i,r,s){let a=n[s++];if(a==="__proto__")return!0;const o=Number.isFinite(+a),l=s>=n.length;return a=!a&&q.isArray(r)?r.length:a,l?(q.hasOwnProp(r,a)?r[a]=q.isArray(r[a])?r[a].concat(i):[r[a],i]:r[a]=i,!o):((!r[a]||!q.isObject(r[a]))&&(r[a]=[]),e(n,i,r[a],s)&&q.isArray(r[a])&&(r[a]=lb(r[a])),!o)}if(q.isFormData(t)&&q.isFunction(t.entries)){const n={};return q.forEachEntry(t,(i,r)=>{e(ob(i),r,n,0)}),n}return null}const xs=(t,e)=>t!=null&&q.hasOwnProp(t,e)?t[e]:void 0;function cb(t,e,n){if(q.isString(t))try{return(e||JSON.parse)(t),q.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const ko={transitional:Fp,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",r=i.indexOf("application/json")>-1,s=q.isObject(e);if(s&&q.isHTMLForm(e)&&(e=new FormData(e)),q.isFormData(e))return r?JSON.stringify(Qx(e)):e;if(q.isArrayBuffer(e)||q.isBuffer(e)||q.isStream(e)||q.isFile(e)||q.isBlob(e)||q.isReadableStream(e))return e;if(q.isArrayBufferView(e))return e.buffer;if(q.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let o;if(s){const l=xs(this,"formSerializer");if(i.indexOf("application/x-www-form-urlencoded")>-1)return ab(e,l).toString();if((o=q.isFileList(e))||i.indexOf("multipart/form-data")>-1){const u=xs(this,"env"),d=u&&u.FormData;return du(o?{"files[]":e}:e,d&&new d,l)}}return s||r?(n.setContentType("application/json",!1),cb(e)):e}],transformResponse:[function(e){const n=xs(this,"transitional")||ko.transitional,i=n&&n.forcedJSONParsing,r=xs(this,"responseType"),s=r==="json";if(q.isResponse(e)||q.isReadableStream(e))return e;if(e&&q.isString(e)&&(i&&!r||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e,xs(this,"parseReviver"))}catch(l){if(o)throw l.name==="SyntaxError"?De.from(l,De.ERR_BAD_RESPONSE,this,null,xs(this,"response")):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ln.classes.FormData,Blob:ln.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};q.forEach(["delete","get","head","post","put","patch"],t=>{ko.headers[t]={}});const ub=q.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),db=t=>{const e={};let n,i,r;return t&&t.split(`
`).forEach(function(a){r=a.indexOf(":"),n=a.substring(0,r).trim().toLowerCase(),i=a.substring(r+1).trim(),!(!n||e[n]&&ub[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e},Vg=Symbol("internals"),fb=/[^\x09\x20-\x7E\x80-\xFF]/g;function hb(t){let e=0,n=t.length;for(;e<n;){const i=t.charCodeAt(e);if(i!==9&&i!==32)break;e+=1}for(;n>e;){const i=t.charCodeAt(n-1);if(i!==9&&i!==32)break;n-=1}return e===0&&n===t.length?t:t.slice(e,n)}function Da(t){return t&&String(t).trim().toLowerCase()}function pb(t){return hb(t.replace(fb,""))}function Kl(t){return t===!1||t==null?t:q.isArray(t)?t.map(Kl):pb(String(t))}function mb(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const gb=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Yu(t,e,n,i,r){if(q.isFunction(i))return i.call(this,e,n);if(r&&(e=n),!!q.isString(e)){if(q.isString(i))return e.indexOf(i)!==-1;if(q.isRegExp(i))return i.test(e)}}function vb(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function _b(t,e){const n=q.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{value:function(r,s,a){return this[i].call(this,e,r,s,a)},configurable:!0})})}let Cn=class{constructor(e){e&&this.set(e)}set(e,n,i){const r=this;function s(o,l,u){const d=Da(l);if(!d)throw new Error("header name must be a non-empty string");const h=q.findKey(r,d);(!h||r[h]===void 0||u===!0||u===void 0&&r[h]!==!1)&&(r[h||l]=Kl(o))}const a=(o,l)=>q.forEach(o,(u,d)=>s(u,d,l));if(q.isPlainObject(e)||e instanceof this.constructor)a(e,n);else if(q.isString(e)&&(e=e.trim())&&!gb(e))a(db(e),n);else if(q.isObject(e)&&q.isIterable(e)){let o={},l,u;for(const d of e){if(!q.isArray(d))throw TypeError("Object iterator must return a key-value pair");o[u=d[0]]=(l=o[u])?q.isArray(l)?[...l,d[1]]:[l,d[1]]:d[1]}a(o,n)}else e!=null&&s(n,e,i);return this}get(e,n){if(e=Da(e),e){const i=q.findKey(this,e);if(i){const r=this[i];if(!n)return r;if(n===!0)return mb(r);if(q.isFunction(n))return n.call(this,r,i);if(q.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Da(e),e){const i=q.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||Yu(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let r=!1;function s(a){if(a=Da(a),a){const o=q.findKey(i,a);o&&(!n||Yu(i,i[o],o,n))&&(delete i[o],r=!0)}}return q.isArray(e)?e.forEach(s):s(e),r}clear(e){const n=Object.keys(this);let i=n.length,r=!1;for(;i--;){const s=n[i];(!e||Yu(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const n=this,i={};return q.forEach(this,(r,s)=>{const a=q.findKey(i,s);if(a){n[a]=Kl(r),delete n[s];return}const o=e?vb(s):String(s).trim();o!==s&&delete n[s],n[o]=Kl(r),i[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return q.forEach(this,(i,r)=>{i!=null&&i!==!1&&(n[r]=e&&q.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[Vg]=this[Vg]={accessors:{}}).accessors,r=this.prototype;function s(a){const o=Da(a);i[o]||(_b(r,a),i[o]=!0)}return q.isArray(e)?e.forEach(s):s(e),this}};Cn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);q.reduceDescriptors(Cn.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});q.freezeMethods(Cn);function Ku(t,e){const n=this||ko,i=e||n,r=Cn.from(i.headers);let s=i.data;return q.forEach(t,function(o){s=o.call(n,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function ey(t){return!!(t&&t.__CANCEL__)}let zo=class extends De{constructor(e,n,i){super(e??"canceled",De.ERR_CANCELED,n,i),this.name="CanceledError",this.__CANCEL__=!0}};function ty(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new De("Request failed with status code "+n.status,[De.ERR_BAD_REQUEST,De.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function xb(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function yb(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r=0,s=0,a;return e=e!==void 0?e:1e3,function(l){const u=Date.now(),d=i[s];a||(a=u),n[r]=l,i[r]=u;let h=s,f=0;for(;h!==r;)f+=n[h++],h=h%t;if(r=(r+1)%t,r===s&&(s=(s+1)%t),u-a<e)return;const g=d&&u-d;return g?Math.round(f*1e3/g):void 0}}function Sb(t,e){let n=0,i=1e3/e,r,s;const a=(u,d=Date.now())=>{n=d,r=null,s&&(clearTimeout(s),s=null),t(...u)};return[(...u)=>{const d=Date.now(),h=d-n;h>=i?a(u,d):(r=u,s||(s=setTimeout(()=>{s=null,a(r)},i-h)))},()=>r&&a(r)]}const Ic=(t,e,n=3)=>{let i=0;const r=yb(50,250);return Sb(s=>{const a=s.loaded,o=s.lengthComputable?s.total:void 0,l=o!=null?Math.min(a,o):a,u=Math.max(0,l-i),d=r(u);i=Math.max(i,l);const h={loaded:l,total:o,progress:o?l/o:void 0,bytes:u,rate:d||void 0,estimated:d&&o?(o-l)/d:void 0,event:s,lengthComputable:o!=null,[e?"download":"upload"]:!0};t(h)},n)},Hg=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},Gg=t=>(...e)=>q.asap(()=>t(...e)),Eb=ln.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,ln.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(ln.origin),ln.navigator&&/(msie|trident)/i.test(ln.navigator.userAgent)):()=>!0,Mb=ln.hasStandardBrowserEnv?{write(t,e,n,i,r,s,a){if(typeof document>"u")return;const o=[`${t}=${encodeURIComponent(e)}`];q.isNumber(n)&&o.push(`expires=${new Date(n).toUTCString()}`),q.isString(i)&&o.push(`path=${i}`),q.isString(r)&&o.push(`domain=${r}`),s===!0&&o.push("secure"),q.isString(a)&&o.push(`SameSite=${a}`),document.cookie=o.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie.match(new RegExp("(?:^|; )"+t+"=([^;]*)"));return e?decodeURIComponent(e[1]):null},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function wb(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Tb(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function ny(t,e,n){let i=!wb(e);return t&&(i||n===!1)?Tb(t,e):e}const Wg=t=>t instanceof Cn?{...t}:t;function us(t,e){e=e||{};const n=Object.create(null);Object.defineProperty(n,"hasOwnProperty",{value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function i(u,d,h,f){return q.isPlainObject(u)&&q.isPlainObject(d)?q.merge.call({caseless:f},u,d):q.isPlainObject(d)?q.merge({},d):q.isArray(d)?d.slice():d}function r(u,d,h,f){if(q.isUndefined(d)){if(!q.isUndefined(u))return i(void 0,u,h,f)}else return i(u,d,h,f)}function s(u,d){if(!q.isUndefined(d))return i(void 0,d)}function a(u,d){if(q.isUndefined(d)){if(!q.isUndefined(u))return i(void 0,u)}else return i(void 0,d)}function o(u,d,h){if(q.hasOwnProp(e,h))return i(u,d);if(q.hasOwnProp(t,h))return i(void 0,u)}const l={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,allowedSocketPaths:a,responseEncoding:a,validateStatus:o,headers:(u,d,h)=>r(Wg(u),Wg(d),h,!0)};return q.forEach(Object.keys({...t,...e}),function(d){if(d==="__proto__"||d==="constructor"||d==="prototype")return;const h=q.hasOwnProp(l,d)?l[d]:r,f=q.hasOwnProp(t,d)?t[d]:void 0,g=q.hasOwnProp(e,d)?e[d]:void 0,_=h(f,g,d);q.isUndefined(_)&&h!==o||(n[d]=_)}),n}const iy=t=>{const e=us({},t),n=f=>q.hasOwnProp(e,f)?e[f]:void 0,i=n("data");let r=n("withXSRFToken");const s=n("xsrfHeaderName"),a=n("xsrfCookieName");let o=n("headers");const l=n("auth"),u=n("baseURL"),d=n("allowAbsoluteUrls"),h=n("url");if(e.headers=o=Cn.from(o),e.url=Jx(ny(u,h,d),t.params,t.paramsSerializer),l&&o.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),q.isFormData(i)){if(ln.hasStandardBrowserEnv||ln.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(q.isFunction(i.getHeaders)){const f=i.getHeaders(),g=["content-type","content-length"];Object.entries(f).forEach(([_,x])=>{g.includes(_.toLowerCase())&&o.set(_,x)})}}if(ln.hasStandardBrowserEnv&&(q.isFunction(r)&&(r=r(e)),r===!0||r==null&&Eb(e.url))){const g=s&&a&&Mb.read(a);g&&o.set(s,g)}return e},bb=typeof XMLHttpRequest<"u",Cb=bb&&function(t){return new Promise(function(n,i){const r=iy(t);let s=r.data;const a=Cn.from(r.headers).normalize();let{responseType:o,onUploadProgress:l,onDownloadProgress:u}=r,d,h,f,g,_;function x(){g&&g(),_&&_(),r.cancelToken&&r.cancelToken.unsubscribe(d),r.signal&&r.signal.removeEventListener("abort",d)}let m=new XMLHttpRequest;m.open(r.method.toUpperCase(),r.url,!0),m.timeout=r.timeout;function p(){if(!m)return;const S=Cn.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),A={data:!o||o==="text"||o==="json"?m.responseText:m.response,status:m.status,statusText:m.statusText,headers:S,config:t,request:m};ty(function(C){n(C),x()},function(C){i(C),x()},A),m=null}"onloadend"in m?m.onloadend=p:m.onreadystatechange=function(){!m||m.readyState!==4||m.status===0&&!(m.responseURL&&m.responseURL.indexOf("file:")===0)||setTimeout(p)},m.onabort=function(){m&&(i(new De("Request aborted",De.ECONNABORTED,t,m)),m=null)},m.onerror=function(E){const A=E&&E.message?E.message:"Network Error",w=new De(A,De.ERR_NETWORK,t,m);w.event=E||null,i(w),m=null},m.ontimeout=function(){let E=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const A=r.transitional||Fp;r.timeoutErrorMessage&&(E=r.timeoutErrorMessage),i(new De(E,A.clarifyTimeoutError?De.ETIMEDOUT:De.ECONNABORTED,t,m)),m=null},s===void 0&&a.setContentType(null),"setRequestHeader"in m&&q.forEach(a.toJSON(),function(E,A){m.setRequestHeader(A,E)}),q.isUndefined(r.withCredentials)||(m.withCredentials=!!r.withCredentials),o&&o!=="json"&&(m.responseType=r.responseType),u&&([f,_]=Ic(u,!0),m.addEventListener("progress",f)),l&&m.upload&&([h,g]=Ic(l),m.upload.addEventListener("progress",h),m.upload.addEventListener("loadend",g)),(r.cancelToken||r.signal)&&(d=S=>{m&&(i(!S||S.type?new zo(null,t,m):S),m.abort(),m=null)},r.cancelToken&&r.cancelToken.subscribe(d),r.signal&&(r.signal.aborted?d():r.signal.addEventListener("abort",d)));const v=xb(r.url);if(v&&ln.protocols.indexOf(v)===-1){i(new De("Unsupported protocol "+v+":",De.ERR_BAD_REQUEST,t));return}m.send(s||null)})},Ab=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let i=new AbortController,r;const s=function(u){if(!r){r=!0,o();const d=u instanceof Error?u:this.reason;i.abort(d instanceof De?d:new zo(d instanceof Error?d.message:d))}};let a=e&&setTimeout(()=>{a=null,s(new De(`timeout of ${e}ms exceeded`,De.ETIMEDOUT))},e);const o=()=>{t&&(a&&clearTimeout(a),a=null,t.forEach(u=>{u.unsubscribe?u.unsubscribe(s):u.removeEventListener("abort",s)}),t=null)};t.forEach(u=>u.addEventListener("abort",s));const{signal:l}=i;return l.unsubscribe=()=>q.asap(o),l}},Rb=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,r;for(;i<n;)r=i+e,yield t.slice(i,r),i=r},Nb=async function*(t,e){for await(const n of Pb(t))yield*Rb(n,e)},Pb=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},Xg=(t,e,n,i)=>{const r=Nb(t,e);let s=0,a,o=l=>{a||(a=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:u,value:d}=await r.next();if(u){o(),l.close();return}let h=d.byteLength;if(n){let f=s+=h;n(f)}l.enqueue(new Uint8Array(d))}catch(u){throw o(u),u}},cancel(l){return o(l),r.return()}},{highWaterMark:2})},qg=64*1024,{isFunction:ul}=q,Lb=(({Request:t,Response:e})=>({Request:t,Response:e}))(q.global),{ReadableStream:$g,TextEncoder:Yg}=q.global,Kg=(t,...e)=>{try{return!!t(...e)}catch{return!1}},Db=t=>{t=q.merge.call({skipUndefined:!0},Lb,t);const{fetch:e,Request:n,Response:i}=t,r=e?ul(e):typeof fetch=="function",s=ul(n),a=ul(i);if(!r)return!1;const o=r&&ul($g),l=r&&(typeof Yg=="function"?(_=>x=>_.encode(x))(new Yg):async _=>new Uint8Array(await new n(_).arrayBuffer())),u=s&&o&&Kg(()=>{let _=!1;const x=new n(ln.origin,{body:new $g,method:"POST",get duplex(){return _=!0,"half"}}),m=x.headers.has("Content-Type");return x.body!=null&&x.body.cancel(),_&&!m}),d=a&&o&&Kg(()=>q.isReadableStream(new i("").body)),h={stream:d&&(_=>_.body)};r&&["text","arrayBuffer","blob","formData","stream"].forEach(_=>{!h[_]&&(h[_]=(x,m)=>{let p=x&&x[_];if(p)return p.call(x);throw new De(`Response type '${_}' is not supported`,De.ERR_NOT_SUPPORT,m)})});const f=async _=>{if(_==null)return 0;if(q.isBlob(_))return _.size;if(q.isSpecCompliantForm(_))return(await new n(ln.origin,{method:"POST",body:_}).arrayBuffer()).byteLength;if(q.isArrayBufferView(_)||q.isArrayBuffer(_))return _.byteLength;if(q.isURLSearchParams(_)&&(_=_+""),q.isString(_))return(await l(_)).byteLength},g=async(_,x)=>{const m=q.toFiniteNumber(_.getContentLength());return m??f(x)};return async _=>{let{url:x,method:m,data:p,signal:v,cancelToken:S,timeout:E,onDownloadProgress:A,onUploadProgress:w,responseType:C,headers:y,withCredentials:b="same-origin",fetchOptions:P}=iy(_),N=e||fetch;C=C?(C+"").toLowerCase():"text";let D=Ab([v,S&&S.toAbortSignal()],E),L=null;const H=D&&D.unsubscribe&&(()=>{D.unsubscribe()});let U;try{if(w&&u&&m!=="get"&&m!=="head"&&(U=await g(y,p))!==0){let re=new n(x,{method:"POST",body:p,duplex:"half"}),$;if(q.isFormData(p)&&($=re.headers.get("content-type"))&&y.setContentType($),re.body){const[Ce,Z]=Hg(U,Ic(Gg(w)));p=Xg(re.body,qg,Ce,Z)}}q.isString(b)||(b=b?"include":"omit");const O=s&&"credentials"in n.prototype;if(q.isFormData(p)){const re=y.getContentType();re&&/^multipart\/form-data/i.test(re)&&!/boundary=/i.test(re)&&y.delete("content-type")}const j={...P,signal:D,method:m.toUpperCase(),headers:y.normalize().toJSON(),body:p,duplex:"half",credentials:O?b:void 0};L=s&&new n(x,j);let k=await(s?N(L,P):N(x,j));const K=d&&(C==="stream"||C==="response");if(d&&(A||K&&H)){const re={};["status","statusText","headers"].forEach(Se=>{re[Se]=k[Se]});const $=q.toFiniteNumber(k.headers.get("content-length")),[Ce,Z]=A&&Hg($,Ic(Gg(A),!0))||[];k=new i(Xg(k.body,qg,Ce,()=>{Z&&Z(),H&&H()}),re)}C=C||"text";let ee=await h[q.findKey(h,C)||"text"](k,_);return!K&&H&&H(),await new Promise((re,$)=>{ty(re,$,{data:ee,headers:Cn.from(k.headers),status:k.status,statusText:k.statusText,config:_,request:L})})}catch(O){throw H&&H(),O&&O.name==="TypeError"&&/Load failed|fetch/i.test(O.message)?Object.assign(new De("Network Error",De.ERR_NETWORK,_,L,O&&O.response),{cause:O.cause||O}):De.from(O,O&&O.code,_,L,O&&O.response)}}},Ib=new Map,ry=t=>{let e=t&&t.env||{};const{fetch:n,Request:i,Response:r}=e,s=[i,r,n];let a=s.length,o=a,l,u,d=Ib;for(;o--;)l=s[o],u=d.get(l),u===void 0&&d.set(l,u=o?new Map:Db(e)),d=u;return u};ry();const Bp={http:$T,xhr:Cb,fetch:{get:ry}};q.forEach(Bp,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Zg=t=>`- ${t}`,Ub=t=>q.isFunction(t)||t===null||t===!1;function Fb(t,e){t=q.isArray(t)?t:[t];const{length:n}=t;let i,r;const s={};for(let a=0;a<n;a++){i=t[a];let o;if(r=i,!Ub(i)&&(r=Bp[(o=String(i)).toLowerCase()],r===void 0))throw new De(`Unknown adapter '${o}'`);if(r&&(q.isFunction(r)||(r=r.get(e))))break;s[o||"#"+a]=r}if(!r){const a=Object.entries(s).map(([l,u])=>`adapter ${l} `+(u===!1?"is not supported by the environment":"is not available in the build"));let o=n?a.length>1?`since :
`+a.map(Zg).join(`
`):" "+Zg(a[0]):"as no adapter specified";throw new De("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r}const sy={getAdapter:Fb,adapters:Bp};function Zu(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new zo(null,t)}function Jg(t){return Zu(t),t.headers=Cn.from(t.headers),t.data=Ku.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),sy.getAdapter(t.adapter||ko.adapter,t)(t).then(function(i){return Zu(t),i.data=Ku.call(t,t.transformResponse,i),i.headers=Cn.from(i.headers),i},function(i){return ey(i)||(Zu(t),i&&i.response&&(i.response.data=Ku.call(t,t.transformResponse,i.response),i.response.headers=Cn.from(i.response.headers))),Promise.reject(i)})}const ay="1.15.2",fu={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{fu[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const Qg={};fu.transitional=function(e,n,i){function r(s,a){return"[Axios v"+ay+"] Transitional option '"+s+"'"+a+(i?". "+i:"")}return(s,a,o)=>{if(e===!1)throw new De(r(a," has been removed"+(n?" in "+n:"")),De.ERR_DEPRECATED);return n&&!Qg[a]&&(Qg[a]=!0,console.warn(r(a," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,a,o):!0}};fu.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function Ob(t,e,n){if(typeof t!="object")throw new De("options must be an object",De.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const s=i[r],a=Object.prototype.hasOwnProperty.call(e,s)?e[s]:void 0;if(a){const o=t[s],l=o===void 0||a(o,s,t);if(l!==!0)throw new De("option "+s+" must be "+l,De.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new De("Unknown option "+s,De.ERR_BAD_OPTION)}}const Zl={assertOptions:Ob,validators:fu},Vn=Zl.validators;let rs=class{constructor(e){this.defaults=e||{},this.interceptors={request:new jg,response:new jg}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const s=(()=>{if(!r.stack)return"";const a=r.stack.indexOf(`
`);return a===-1?"":r.stack.slice(a+1)})();try{if(!i.stack)i.stack=s;else if(s){const a=s.indexOf(`
`),o=a===-1?-1:s.indexOf(`
`,a+1),l=o===-1?"":s.slice(o+1);String(i.stack).endsWith(l)||(i.stack+=`
`+s)}}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=us(this.defaults,n);const{transitional:i,paramsSerializer:r,headers:s}=n;i!==void 0&&Zl.assertOptions(i,{silentJSONParsing:Vn.transitional(Vn.boolean),forcedJSONParsing:Vn.transitional(Vn.boolean),clarifyTimeoutError:Vn.transitional(Vn.boolean),legacyInterceptorReqResOrdering:Vn.transitional(Vn.boolean)},!1),r!=null&&(q.isFunction(r)?n.paramsSerializer={serialize:r}:Zl.assertOptions(r,{encode:Vn.function,serialize:Vn.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Zl.assertOptions(n,{baseUrl:Vn.spelling("baseURL"),withXsrfToken:Vn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=s&&q.merge(s.common,s[n.method]);s&&q.forEach(["delete","get","head","post","put","patch","common"],_=>{delete s[_]}),n.headers=Cn.concat(a,s);const o=[];let l=!0;this.interceptors.request.forEach(function(x){if(typeof x.runWhen=="function"&&x.runWhen(n)===!1)return;l=l&&x.synchronous;const m=n.transitional||Fp;m&&m.legacyInterceptorReqResOrdering?o.unshift(x.fulfilled,x.rejected):o.push(x.fulfilled,x.rejected)});const u=[];this.interceptors.response.forEach(function(x){u.push(x.fulfilled,x.rejected)});let d,h=0,f;if(!l){const _=[Jg.bind(this),void 0];for(_.unshift(...o),_.push(...u),f=_.length,d=Promise.resolve(n);h<f;)d=d.then(_[h++],_[h++]);return d}f=o.length;let g=n;for(;h<f;){const _=o[h++],x=o[h++];try{g=_(g)}catch(m){x.call(this,m);break}}try{d=Jg.call(this,g)}catch(_){return Promise.reject(_)}for(h=0,f=u.length;h<f;)d=d.then(u[h++],u[h++]);return d}getUri(e){e=us(this.defaults,e);const n=ny(e.baseURL,e.url,e.allowAbsoluteUrls);return Jx(n,e.params,e.paramsSerializer)}};q.forEach(["delete","get","head","options"],function(e){rs.prototype[e]=function(n,i){return this.request(us(i||{},{method:e,url:n,data:(i||{}).data}))}});q.forEach(["post","put","patch"],function(e){function n(i){return function(s,a,o){return this.request(us(o||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:a}))}}rs.prototype[e]=n(),rs.prototype[e+"Form"]=n(!0)});let Bb=class oy{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const a=new Promise(o=>{i.subscribe(o),s=o}).then(r);return a.cancel=function(){i.unsubscribe(s)},a},e(function(s,a,o){i.reason||(i.reason=new zo(s,a,o),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new oy(function(r){e=r}),cancel:e}}};function kb(t){return function(n){return t.apply(null,n)}}function zb(t){return q.isObject(t)&&t.isAxiosError===!0}const Bf={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Bf).forEach(([t,e])=>{Bf[e]=t});function ly(t){const e=new rs(t),n=jx(rs.prototype.request,e);return q.extend(n,rs.prototype,e,{allOwnKeys:!0}),q.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return ly(us(t,r))},n}const It=ly(ko);It.Axios=rs;It.CanceledError=zo;It.CancelToken=Bb;It.isCancel=ey;It.VERSION=ay;It.toFormData=du;It.AxiosError=De;It.Cancel=It.CanceledError;It.all=function(e){return Promise.all(e)};It.spread=kb;It.isAxiosError=zb;It.mergeConfig=us;It.AxiosHeaders=Cn;It.formToJSON=t=>Qx(q.isHTMLForm(t)?new FormData(t):t);It.getAdapter=sy.getAdapter;It.HttpStatusCode=Bf;It.default=It;const{Axios:K3,AxiosError:Z3,CanceledError:J3,isCancel:Q3,CancelToken:e2,VERSION:t2,all:n2,Cancel:i2,isAxiosError:r2,spread:s2,toFormData:a2,AxiosHeaders:o2,HttpStatusCode:l2,formToJSON:c2,getAdapter:u2,mergeConfig:d2}=It,Le=It.create({baseURL:"http://localhost:5000/api"});Le.interceptors.request.use(t=>{const e=localStorage.getItem("token");return e&&!t.headers.Authorization&&(t.headers.Authorization=e),t});function Xe(t,e){let n=e;return t&&t.response&&t.response.data&&t.response.data.message&&(n=t.response.data.message),n}const Jn=()=>I.useContext(Rx);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kp="184",jb=0,ev=1,Vb=2,Jl=1,Hb=2,$a=3,Ir=0,An=1,Vi=2,qi=0,Qs=1,tv=2,nv=3,iv=4,Gb=5,$r=100,Wb=101,Xb=102,qb=103,$b=104,Yb=200,Kb=201,Zb=202,Jb=203,kf=204,zf=205,Qb=206,eC=207,tC=208,nC=209,iC=210,rC=211,sC=212,aC=213,oC=214,jf=0,Vf=1,Hf=2,ua=3,Gf=4,Wf=5,Xf=6,qf=7,cy=0,lC=1,cC=2,Ci=0,uy=1,dy=2,fy=3,hy=4,py=5,my=6,gy=7,vy=300,ds=301,da=302,Ju=303,Qu=304,hu=306,$f=1e3,Wi=1001,Yf=1002,Kt=1003,uC=1004,dl=1005,cn=1006,ed=1007,es=1008,Un=1009,_y=1010,xy=1011,Co=1012,zp=1013,Pi=1014,Mi=1015,Qi=1016,jp=1017,Vp=1018,Ao=1020,yy=35902,Sy=35899,Ey=1021,My=1022,ui=1023,er=1026,ts=1027,wy=1028,Hp=1029,fs=1030,Gp=1031,Wp=1033,Ql=33776,ec=33777,tc=33778,nc=33779,Kf=35840,Zf=35841,Jf=35842,Qf=35843,eh=36196,th=37492,nh=37496,ih=37488,rh=37489,Uc=37490,sh=37491,ah=37808,oh=37809,lh=37810,ch=37811,uh=37812,dh=37813,fh=37814,hh=37815,ph=37816,mh=37817,gh=37818,vh=37819,_h=37820,xh=37821,yh=36492,Sh=36494,Eh=36495,Mh=36283,wh=36284,Fc=36285,Th=36286,dC=3200,bh=0,fC=1,vr="",In="srgb",Oc="srgb-linear",Bc="linear",st="srgb",ys=7680,rv=519,hC=512,pC=513,mC=514,Xp=515,gC=516,vC=517,qp=518,_C=519,sv=35044,av="300 es",wi=2e3,Ro=2001;function xC(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function No(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function yC(){const t=No("canvas");return t.style.display="block",t}const ov={};function lv(...t){const e="THREE."+t.shift();console.log(e,...t)}function Ty(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Fe(...t){t=Ty(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function et(...t){t=Ty(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Ch(...t){const e=t.join(" ");e in ov||(ov[e]=!0,Fe(...t))}function SC(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const EC={[jf]:Vf,[Hf]:Xf,[Gf]:qf,[ua]:Wf,[Vf]:jf,[Xf]:Hf,[qf]:Gf,[Wf]:ua};class ms{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],td=Math.PI/180,Ah=180/Math.PI;function jo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[t&255]+nn[t>>8&255]+nn[t>>16&255]+nn[t>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[n&63|128]+nn[n>>8&255]+"-"+nn[n>>16&255]+nn[n>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function Je(t,e,n){return Math.max(e,Math.min(n,t))}function MC(t,e){return(t%e+e)%e}function nd(t,e,n){return(1-n)*t+n*e}function Ia(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function yn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const om=class om{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Je(this.x,e.x,n.x),this.y=Je(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Je(this.x,e,n),this.y=Je(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};om.prototype.isVector2=!0;let nt=om;class Sa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],u=i[r+1],d=i[r+2],h=i[r+3],f=s[a+0],g=s[a+1],_=s[a+2],x=s[a+3];if(h!==x||l!==f||u!==g||d!==_){let m=l*f+u*g+d*_+h*x;m<0&&(f=-f,g=-g,_=-_,x=-x,m=-m);let p=1-o;if(m<.9995){const v=Math.acos(m),S=Math.sin(v);p=Math.sin(p*v)/S,o=Math.sin(o*v)/S,l=l*p+f*o,u=u*p+g*o,d=d*p+_*o,h=h*p+x*o}else{l=l*p+f*o,u=u*p+g*o,d=d*p+_*o,h=h*p+x*o;const v=1/Math.sqrt(l*l+u*u+d*d+h*h);l*=v,u*=v,d*=v,h*=v}}e[n]=l,e[n+1]=u,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],d=i[r+3],h=s[a],f=s[a+1],g=s[a+2],_=s[a+3];return e[n]=o*_+d*h+l*g-u*f,e[n+1]=l*_+d*f+u*h-o*g,e[n+2]=u*_+d*g+o*f-l*h,e[n+3]=d*_-o*h-l*f-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),d=o(r/2),h=o(s/2),f=l(i/2),g=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=f*d*h+u*g*_,this._y=u*g*h-f*d*_,this._z=u*d*_+f*g*h,this._w=u*d*h-f*g*_;break;case"YXZ":this._x=f*d*h+u*g*_,this._y=u*g*h-f*d*_,this._z=u*d*_-f*g*h,this._w=u*d*h+f*g*_;break;case"ZXY":this._x=f*d*h-u*g*_,this._y=u*g*h+f*d*_,this._z=u*d*_+f*g*h,this._w=u*d*h-f*g*_;break;case"ZYX":this._x=f*d*h-u*g*_,this._y=u*g*h+f*d*_,this._z=u*d*_-f*g*h,this._w=u*d*h+f*g*_;break;case"YZX":this._x=f*d*h+u*g*_,this._y=u*g*h+f*d*_,this._z=u*d*_-f*g*h,this._w=u*d*h-f*g*_;break;case"XZY":this._x=f*d*h-u*g*_,this._y=u*g*h-f*d*_,this._z=u*d*_+f*g*h,this._w=u*d*h+f*g*_;break;default:Fe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],u=n[2],d=n[6],h=n[10],f=i+o+h;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(d-l)*g,this._y=(s-u)*g,this._z=(a-r)*g}else if(i>o&&i>h){const g=2*Math.sqrt(1+i-o-h);this._w=(d-l)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+u)/g}else if(o>h){const g=2*Math.sqrt(1+o-i-h);this._w=(s-u)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(l+d)/g}else{const g=2*Math.sqrt(1+h-i-o);this._w=(a-r)/g,this._x=(s+u)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,u=n._z,d=n._w;return this._x=i*d+a*o+r*u-s*l,this._y=r*d+a*l+s*o-i*u,this._z=s*d+a*u+i*l-r*o,this._w=a*d-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const u=Math.acos(o),d=Math.sin(u);l=Math.sin(l*u)/d,n=Math.sin(n*u)/d,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const lm=class lm{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(cv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(cv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),d=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*u+a*h-o*d,this.y=i+l*d+o*u-s*h,this.z=r+l*h+s*d-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Je(this.x,e.x,n.x),this.y=Je(this.y,e.y,n.y),this.z=Je(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Je(this.x,e,n),this.y=Je(this.y,e,n),this.z=Je(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return id.copy(this).projectOnVector(e),this.sub(id)}reflect(e){return this.sub(id.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};lm.prototype.isVector3=!0;let G=lm;const id=new G,cv=new Sa,cm=class cm{constructor(e,n,i,r,s,a,o,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u)}set(e,n,i,r,s,a,o,l,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],d=i[4],h=i[7],f=i[2],g=i[5],_=i[8],x=r[0],m=r[3],p=r[6],v=r[1],S=r[4],E=r[7],A=r[2],w=r[5],C=r[8];return s[0]=a*x+o*v+l*A,s[3]=a*m+o*S+l*w,s[6]=a*p+o*E+l*C,s[1]=u*x+d*v+h*A,s[4]=u*m+d*S+h*w,s[7]=u*p+d*E+h*C,s[2]=f*x+g*v+_*A,s[5]=f*m+g*S+_*w,s[8]=f*p+g*E+_*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],d=e[8];return n*a*d-n*o*u-i*s*d+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],d=e[8],h=d*a-o*u,f=o*l-d*s,g=u*s-a*l,_=n*h+i*f+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=h*x,e[1]=(r*u-d*i)*x,e[2]=(o*i-r*a)*x,e[3]=f*x,e[4]=(d*n-r*l)*x,e[5]=(r*s-o*n)*x,e[6]=g*x,e[7]=(i*l-u*n)*x,e[8]=(a*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(rd.makeScale(e,n)),this}rotate(e){return this.premultiply(rd.makeRotation(-e)),this}translate(e,n){return this.premultiply(rd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};cm.prototype.isMatrix3=!0;let ke=cm;const rd=new ke,uv=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dv=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wC(){const t={enabled:!0,workingColorSpace:Oc,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===st&&(r.r=$i(r.r),r.g=$i(r.g),r.b=$i(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(r.r=ea(r.r),r.g=ea(r.g),r.b=ea(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===vr?Bc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ch("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ch("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Oc]:{primaries:e,whitePoint:i,transfer:Bc,toXYZ:uv,fromXYZ:dv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:In},outputColorSpaceConfig:{drawingBufferColorSpace:In}},[In]:{primaries:e,whitePoint:i,transfer:st,toXYZ:uv,fromXYZ:dv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:In}}}),t}const Ze=wC();function $i(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ea(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ss;class TC{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ss===void 0&&(Ss=No("canvas")),Ss.width=e.width,Ss.height=e.height;const r=Ss.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ss}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=No("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=$i(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor($i(n[i]/255)*255):n[i]=$i(n[i]);return{data:n,width:e.width,height:e.height}}else return Fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bC=0;class $p{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bC++}),this.uuid=jo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(sd(r[a].image)):s.push(sd(r[a]))}else s=sd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function sd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?TC.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Fe("Texture: Unable to serialize Texture."),{})}let CC=0;const ad=new G;class un extends ms{constructor(e=un.DEFAULT_IMAGE,n=un.DEFAULT_MAPPING,i=Wi,r=Wi,s=cn,a=es,o=ui,l=Un,u=un.DEFAULT_ANISOTROPY,d=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:CC++}),this.uuid=jo(),this.name="",this.source=new $p(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ad).x}get height(){return this.source.getSize(ad).y}get depth(){return this.source.getSize(ad).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Fe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Fe(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $f:e.x=e.x-Math.floor(e.x);break;case Wi:e.x=e.x<0?0:1;break;case Yf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $f:e.y=e.y-Math.floor(e.y);break;case Wi:e.y=e.y<0?0:1;break;case Yf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=vy;un.DEFAULT_ANISOTROPY=1;const um=class um{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],d=l[4],h=l[8],f=l[1],g=l[5],_=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+x)<.1&&Math.abs(_+m)<.1&&Math.abs(u+g+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(u+1)/2,E=(g+1)/2,A=(p+1)/2,w=(d+f)/4,C=(h+x)/4,y=(_+m)/4;return S>E&&S>A?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=w/i,s=C/i):E>A?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=w/r,s=y/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=C/s,r=y/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-_)*(m-_)+(h-x)*(h-x)+(f-d)*(f-d));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(h-x)/v,this.z=(f-d)/v,this.w=Math.acos((u+g+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Je(this.x,e.x,n.x),this.y=Je(this.y,e.y,n.y),this.z=Je(this.z,e.z,n.z),this.w=Je(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Je(this.x,e,n),this.y=Je(this.y,e,n),this.z=Je(this.z,e,n),this.w=Je(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};um.prototype.isVector4=!0;let At=um;class AC extends ms{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new At(0,0,e,n),this.scissorTest=!1,this.viewport=new At(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new un(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new $p(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ai extends AC{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class by extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class RC extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const kc=class kc{constructor(e,n,i,r,s,a,o,l,u,d,h,f,g,_,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u,d,h,f,g,_,x,m)}set(e,n,i,r,s,a,o,l,u,d,h,f,g,_,x,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=u,p[6]=d,p[10]=h,p[14]=f,p[3]=g,p[7]=_,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Es.setFromMatrixColumn(e,0).length(),s=1/Es.setFromMatrixColumn(e,1).length(),a=1/Es.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*d,g=a*h,_=o*d,x=o*h;n[0]=l*d,n[4]=-l*h,n[8]=u,n[1]=g+_*u,n[5]=f-x*u,n[9]=-o*l,n[2]=x-f*u,n[6]=_+g*u,n[10]=a*l}else if(e.order==="YXZ"){const f=l*d,g=l*h,_=u*d,x=u*h;n[0]=f+x*o,n[4]=_*o-g,n[8]=a*u,n[1]=a*h,n[5]=a*d,n[9]=-o,n[2]=g*o-_,n[6]=x+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*d,g=l*h,_=u*d,x=u*h;n[0]=f-x*o,n[4]=-a*h,n[8]=_+g*o,n[1]=g+_*o,n[5]=a*d,n[9]=x-f*o,n[2]=-a*u,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*d,g=a*h,_=o*d,x=o*h;n[0]=l*d,n[4]=_*u-g,n[8]=f*u+x,n[1]=l*h,n[5]=x*u+f,n[9]=g*u-_,n[2]=-u,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,g=a*u,_=o*l,x=o*u;n[0]=l*d,n[4]=x-f*h,n[8]=_*h+g,n[1]=h,n[5]=a*d,n[9]=-o*d,n[2]=-u*d,n[6]=g*h+_,n[10]=f-x*h}else if(e.order==="XZY"){const f=a*l,g=a*u,_=o*l,x=o*u;n[0]=l*d,n[4]=-h,n[8]=u*d,n[1]=f*h+x,n[5]=a*d,n[9]=g*h-_,n[2]=_*h-g,n[6]=o*d,n[10]=x*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(NC,e,PC)}lookAt(e,n,i){const r=this.elements;return Pn.subVectors(e,n),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),or.crossVectors(i,Pn),or.lengthSq()===0&&(Math.abs(i.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),or.crossVectors(i,Pn)),or.normalize(),fl.crossVectors(Pn,or),r[0]=or.x,r[4]=fl.x,r[8]=Pn.x,r[1]=or.y,r[5]=fl.y,r[9]=Pn.y,r[2]=or.z,r[6]=fl.z,r[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],d=i[1],h=i[5],f=i[9],g=i[13],_=i[2],x=i[6],m=i[10],p=i[14],v=i[3],S=i[7],E=i[11],A=i[15],w=r[0],C=r[4],y=r[8],b=r[12],P=r[1],N=r[5],D=r[9],L=r[13],H=r[2],U=r[6],O=r[10],j=r[14],k=r[3],K=r[7],ee=r[11],re=r[15];return s[0]=a*w+o*P+l*H+u*k,s[4]=a*C+o*N+l*U+u*K,s[8]=a*y+o*D+l*O+u*ee,s[12]=a*b+o*L+l*j+u*re,s[1]=d*w+h*P+f*H+g*k,s[5]=d*C+h*N+f*U+g*K,s[9]=d*y+h*D+f*O+g*ee,s[13]=d*b+h*L+f*j+g*re,s[2]=_*w+x*P+m*H+p*k,s[6]=_*C+x*N+m*U+p*K,s[10]=_*y+x*D+m*O+p*ee,s[14]=_*b+x*L+m*j+p*re,s[3]=v*w+S*P+E*H+A*k,s[7]=v*C+S*N+E*U+A*K,s[11]=v*y+S*D+E*O+A*ee,s[15]=v*b+S*L+E*j+A*re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],d=e[2],h=e[6],f=e[10],g=e[14],_=e[3],x=e[7],m=e[11],p=e[15],v=l*g-u*f,S=o*g-u*h,E=o*f-l*h,A=a*g-u*d,w=a*f-l*d,C=a*h-o*d;return n*(x*v-m*S+p*E)-i*(_*v-m*A+p*w)+r*(_*S-x*A+p*C)-s*(_*E-x*w+m*C)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],d=e[8],h=e[9],f=e[10],g=e[11],_=e[12],x=e[13],m=e[14],p=e[15],v=n*o-i*a,S=n*l-r*a,E=n*u-s*a,A=i*l-r*o,w=i*u-s*o,C=r*u-s*l,y=d*x-h*_,b=d*m-f*_,P=d*p-g*_,N=h*m-f*x,D=h*p-g*x,L=f*p-g*m,H=v*L-S*D+E*N+A*P-w*b+C*y;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/H;return e[0]=(o*L-l*D+u*N)*U,e[1]=(r*D-i*L-s*N)*U,e[2]=(x*C-m*w+p*A)*U,e[3]=(f*w-h*C-g*A)*U,e[4]=(l*P-a*L-u*b)*U,e[5]=(n*L-r*P+s*b)*U,e[6]=(m*E-_*C-p*S)*U,e[7]=(d*C-f*E+g*S)*U,e[8]=(a*D-o*P+u*y)*U,e[9]=(i*P-n*D-s*y)*U,e[10]=(_*w-x*E+p*v)*U,e[11]=(h*E-d*w-g*v)*U,e[12]=(o*b-a*N-l*y)*U,e[13]=(n*N-i*b+r*y)*U,e[14]=(x*S-_*A-m*v)*U,e[15]=(d*A-h*S+f*v)*U,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,d=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,d*o+i,d*l-r*a,0,u*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,u=s+s,d=a+a,h=o+o,f=s*u,g=s*d,_=s*h,x=a*d,m=a*h,p=o*h,v=l*u,S=l*d,E=l*h,A=i.x,w=i.y,C=i.z;return r[0]=(1-(x+p))*A,r[1]=(g+E)*A,r[2]=(_-S)*A,r[3]=0,r[4]=(g-E)*w,r[5]=(1-(f+p))*w,r[6]=(m+v)*w,r[7]=0,r[8]=(_+S)*C,r[9]=(m-v)*C,r[10]=(1-(f+x))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Es.set(r[0],r[1],r[2]).length();const o=Es.set(r[4],r[5],r[6]).length(),l=Es.set(r[8],r[9],r[10]).length();s<0&&(a=-a),ni.copy(this);const u=1/a,d=1/o,h=1/l;return ni.elements[0]*=u,ni.elements[1]*=u,ni.elements[2]*=u,ni.elements[4]*=d,ni.elements[5]*=d,ni.elements[6]*=d,ni.elements[8]*=h,ni.elements[9]*=h,ni.elements[10]*=h,n.setFromRotationMatrix(ni),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=wi,l=!1){const u=this.elements,d=2*s/(n-e),h=2*s/(i-r),f=(n+e)/(n-e),g=(i+r)/(i-r);let _,x;if(l)_=s/(a-s),x=a*s/(a-s);else if(o===wi)_=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Ro)_=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=d,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=h,u[9]=g,u[13]=0,u[2]=0,u[6]=0,u[10]=_,u[14]=x,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=wi,l=!1){const u=this.elements,d=2/(n-e),h=2/(i-r),f=-(n+e)/(n-e),g=-(i+r)/(i-r);let _,x;if(l)_=1/(a-s),x=a/(a-s);else if(o===wi)_=-2/(a-s),x=-(a+s)/(a-s);else if(o===Ro)_=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=d,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=h,u[9]=0,u[13]=g,u[2]=0,u[6]=0,u[10]=_,u[14]=x,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};kc.prototype.isMatrix4=!0;let Dt=kc;const Es=new G,ni=new Dt,NC=new G(0,0,0),PC=new G(1,1,1),or=new G,fl=new G,Pn=new G,fv=new Dt,hv=new Sa;class Ur{constructor(e=0,n=0,i=0,r=Ur.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],d=r[9],h=r[2],f=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,g),this._y=0);break;default:Fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return fv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fv,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return hv.setFromEuler(this),this.setFromQuaternion(hv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ur.DEFAULT_ORDER="XYZ";class Cy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let LC=0;const pv=new G,Ms=new Sa,Ui=new Dt,hl=new G,Ua=new G,DC=new G,IC=new Sa,mv=new G(1,0,0),gv=new G(0,1,0),vv=new G(0,0,1),_v={type:"added"},UC={type:"removed"},ws={type:"childadded",child:null},od={type:"childremoved",child:null};class dn extends ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:LC++}),this.uuid=jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const e=new G,n=new Ur,i=new Sa,r=new G(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Dt},normalMatrix:{value:new ke}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ms.setFromAxisAngle(e,n),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(e,n){return Ms.setFromAxisAngle(e,n),this.quaternion.premultiply(Ms),this}rotateX(e){return this.rotateOnAxis(mv,e)}rotateY(e){return this.rotateOnAxis(gv,e)}rotateZ(e){return this.rotateOnAxis(vv,e)}translateOnAxis(e,n){return pv.copy(e).applyQuaternion(this.quaternion),this.position.add(pv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(mv,e)}translateY(e){return this.translateOnAxis(gv,e)}translateZ(e){return this.translateOnAxis(vv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?hl.copy(e):hl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ua.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(Ua,hl,this.up):Ui.lookAt(hl,Ua,this.up),this.quaternion.setFromRotationMatrix(Ui),r&&(Ui.extractRotation(r.matrixWorld),Ms.setFromRotationMatrix(Ui),this.quaternion.premultiply(Ms.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_v),ws.child=e,this.dispatchEvent(ws),ws.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(UC),od.child=e,this.dispatchEvent(od),od.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_v),ws.child=e,this.dispatchEvent(ws),ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ua,e,DC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ua,IC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),d=a(e.images),h=a(e.shapes),f=a(e.skeletons),g=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const u in o){const d=o[u];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}dn.DEFAULT_UP=new G(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ya extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const FC={type:"move"};class ld{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ya,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ya,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ya,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),p=this._getHandJoint(u,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=d.position.distanceTo(h.position),g=.02,_=.005;u.inputState.pinching&&f>g+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=g-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(FC)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ya;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Ay={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lr={h:0,s:0,l:0},pl={h:0,s:0,l:0};function cd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class rt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=In){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=MC(e,1),n=Je(n,0,1),i=Je(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=cd(a,s,e+1/3),this.g=cd(a,s,e),this.b=cd(a,s,e-1/3)}return Ze.colorSpaceToWorking(this,r),this}setStyle(e,n=In){function i(s){s!==void 0&&parseFloat(s)<1&&Fe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Fe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Fe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=In){const i=Ay[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Fe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=ea(e.r),this.g=ea(e.g),this.b=ea(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=In){return Ze.workingToColorSpace(rn.copy(this),e),Math.round(Je(rn.r*255,0,255))*65536+Math.round(Je(rn.g*255,0,255))*256+Math.round(Je(rn.b*255,0,255))}getHexString(e=In){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.workingToColorSpace(rn.copy(this),n);const i=rn.r,r=rn.g,s=rn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const d=(o+a)/2;if(o===a)l=0,u=0;else{const h=a-o;switch(u=d<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=d,e}getRGB(e,n=Ze.workingColorSpace){return Ze.workingToColorSpace(rn.copy(this),n),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=In){Ze.workingToColorSpace(rn.copy(this),e);const n=rn.r,i=rn.g,r=rn.b;return e!==In?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(lr),this.setHSL(lr.h+e,lr.s+n,lr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(lr),e.getHSL(pl);const i=nd(lr.h,pl.h,n),r=nd(lr.s,pl.s,n),s=nd(lr.l,pl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new rt;rt.NAMES=Ay;class OC extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ur,this.environmentIntensity=1,this.environmentRotation=new Ur,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const ii=new G,Fi=new G,ud=new G,Oi=new G,Ts=new G,bs=new G,xv=new G,dd=new G,fd=new G,hd=new G,pd=new At,md=new At,gd=new At;class ci{constructor(e=new G,n=new G,i=new G){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ii.subVectors(e,n),r.cross(ii);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ii.subVectors(r,n),Fi.subVectors(i,n),ud.subVectors(e,n);const a=ii.dot(ii),o=ii.dot(Fi),l=ii.dot(ud),u=Fi.dot(Fi),d=Fi.dot(ud),h=a*u-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,g=(u*l-o*d)*f,_=(a*d-o*l)*f;return s.set(1-g-_,_,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Oi.x),l.addScaledVector(a,Oi.y),l.addScaledVector(o,Oi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return pd.setScalar(0),md.setScalar(0),gd.setScalar(0),pd.fromBufferAttribute(e,n),md.fromBufferAttribute(e,i),gd.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(pd,s.x),a.addScaledVector(md,s.y),a.addScaledVector(gd,s.z),a}static isFrontFacing(e,n,i,r){return ii.subVectors(i,n),Fi.subVectors(e,n),ii.cross(Fi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),ii.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ci.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ci.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Ts.subVectors(r,i),bs.subVectors(s,i),dd.subVectors(e,i);const l=Ts.dot(dd),u=bs.dot(dd);if(l<=0&&u<=0)return n.copy(i);fd.subVectors(e,r);const d=Ts.dot(fd),h=bs.dot(fd);if(d>=0&&h<=d)return n.copy(r);const f=l*h-d*u;if(f<=0&&l>=0&&d<=0)return a=l/(l-d),n.copy(i).addScaledVector(Ts,a);hd.subVectors(e,s);const g=Ts.dot(hd),_=bs.dot(hd);if(_>=0&&g<=_)return n.copy(s);const x=g*u-l*_;if(x<=0&&u>=0&&_<=0)return o=u/(u-_),n.copy(i).addScaledVector(bs,o);const m=d*_-g*h;if(m<=0&&h-d>=0&&g-_>=0)return xv.subVectors(s,r),o=(h-d)/(h-d+(g-_)),n.copy(r).addScaledVector(xv,o);const p=1/(m+x+f);return a=x*p,o=f*p,n.copy(i).addScaledVector(Ts,a).addScaledVector(bs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Vo{constructor(e=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ri.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ri.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ri.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ri):ri.fromBufferAttribute(s,a),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ml.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ml.copy(i.boundingBox)),ml.applyMatrix4(e.matrixWorld),this.union(ml)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fa),gl.subVectors(this.max,Fa),Cs.subVectors(e.a,Fa),As.subVectors(e.b,Fa),Rs.subVectors(e.c,Fa),cr.subVectors(As,Cs),ur.subVectors(Rs,As),jr.subVectors(Cs,Rs);let n=[0,-cr.z,cr.y,0,-ur.z,ur.y,0,-jr.z,jr.y,cr.z,0,-cr.x,ur.z,0,-ur.x,jr.z,0,-jr.x,-cr.y,cr.x,0,-ur.y,ur.x,0,-jr.y,jr.x,0];return!vd(n,Cs,As,Rs,gl)||(n=[1,0,0,0,1,0,0,0,1],!vd(n,Cs,As,Rs,gl))?!1:(vl.crossVectors(cr,ur),n=[vl.x,vl.y,vl.z],vd(n,Cs,As,Rs,gl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Bi=[new G,new G,new G,new G,new G,new G,new G,new G],ri=new G,ml=new Vo,Cs=new G,As=new G,Rs=new G,cr=new G,ur=new G,jr=new G,Fa=new G,gl=new G,vl=new G,Vr=new G;function vd(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Vr.fromArray(t,s);const o=r.x*Math.abs(Vr.x)+r.y*Math.abs(Vr.y)+r.z*Math.abs(Vr.z),l=e.dot(Vr),u=n.dot(Vr),d=i.dot(Vr);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>o)return!1}return!0}const Ut=new G,_l=new nt;let BC=0;class Ri extends ms{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:BC++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=sv,this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)_l.fromBufferAttribute(this,n),_l.applyMatrix3(e),this.setXY(n,_l.x,_l.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix3(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix4(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyNormalMatrix(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.transformDirection(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ia(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=yn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ia(n,this.array)),n}setX(e,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ia(n,this.array)),n}setY(e,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ia(n,this.array)),n}setZ(e,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ia(n,this.array)),n}setW(e,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=yn(n,this.array),i=yn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=yn(n,this.array),i=yn(i,this.array),r=yn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=yn(n,this.array),i=yn(i,this.array),r=yn(r,this.array),s=yn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sv&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Ry extends Ri{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Ny extends Ri{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class $t extends Ri{constructor(e,n,i){super(new Float32Array(e),n,i)}}const kC=new Vo,Oa=new G,_d=new G;class Yp{constructor(e=new G,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):kC.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oa.subVectors(e,this.center);const n=Oa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Oa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_d.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oa.copy(e.center).add(_d)),this.expandByPoint(Oa.copy(e.center).sub(_d))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let zC=0;const Hn=new Dt,xd=new dn,Ns=new G,Ln=new Vo,Ba=new Vo,Wt=new G;class Qn extends ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zC++}),this.uuid=jo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xC(e)?Ny:Ry)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,n,i){return Hn.makeTranslation(e,n,i),this.applyMatrix4(Hn),this}scale(e,n,i){return Hn.makeScale(e,n,i),this.applyMatrix4(Hn),this}lookAt(e){return xd.lookAt(e),xd.updateMatrix(),this.applyMatrix4(xd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new $t(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yp);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Ba.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(Ln.min,Ba.min),Ln.expandByPoint(Wt),Wt.addVectors(Ln.max,Ba.max),Ln.expandByPoint(Wt)):(Ln.expandByPoint(Ba.min),Ln.expandByPoint(Ba.max))}Ln.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Wt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let u=0,d=o.count;u<d;u++)Wt.fromBufferAttribute(o,u),l&&(Ns.fromBufferAttribute(e,u),Wt.add(Ns)),r=Math.max(r,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ri(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new G,l[y]=new G;const u=new G,d=new G,h=new G,f=new nt,g=new nt,_=new nt,x=new G,m=new G;function p(y,b,P){u.fromBufferAttribute(i,y),d.fromBufferAttribute(i,b),h.fromBufferAttribute(i,P),f.fromBufferAttribute(s,y),g.fromBufferAttribute(s,b),_.fromBufferAttribute(s,P),d.sub(u),h.sub(u),g.sub(f),_.sub(f);const N=1/(g.x*_.y-_.x*g.y);isFinite(N)&&(x.copy(d).multiplyScalar(_.y).addScaledVector(h,-g.y).multiplyScalar(N),m.copy(h).multiplyScalar(g.x).addScaledVector(d,-_.x).multiplyScalar(N),o[y].add(x),o[b].add(x),o[P].add(x),l[y].add(m),l[b].add(m),l[P].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let y=0,b=v.length;y<b;++y){const P=v[y],N=P.start,D=P.count;for(let L=N,H=N+D;L<H;L+=3)p(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const S=new G,E=new G,A=new G,w=new G;function C(y){A.fromBufferAttribute(r,y),w.copy(A);const b=o[y];S.copy(b),S.sub(A.multiplyScalar(A.dot(b))).normalize(),E.crossVectors(w,b);const N=E.dot(l[y])<0?-1:1;a.setXYZW(y,S.x,S.y,S.z,N)}for(let y=0,b=v.length;y<b;++y){const P=v[y],N=P.start,D=P.count;for(let L=N,H=N+D;L<H;L+=3)C(e.getX(L+0)),C(e.getX(L+1)),C(e.getX(L+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ri(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);const r=new G,s=new G,a=new G,o=new G,l=new G,u=new G,d=new G,h=new G;if(e)for(let f=0,g=e.count;f<g;f+=3){const _=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,x),a.fromBufferAttribute(n,m),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,m),o.add(d),l.add(d),u.add(d),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,g=n.count;f<g;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Wt.fromBufferAttribute(e,n),Wt.normalize(),e.setXYZ(n,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(o,l){const u=o.array,d=o.itemSize,h=o.normalized,f=new u.constructor(l.length*d);let g=0,_=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?g=l[x]*o.data.stride+o.offset:g=l[x]*d;for(let p=0;p<d;p++)f[_++]=u[g++]}return new Ri(f,d,h)}if(this.index===null)return Fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Qn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let d=0,h=u.length;d<h;d++){const f=u[d],g=e(f,i);l.push(g)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],d=[];for(let h=0,f=u.length;h<f;h++){const g=u[h];d.push(g.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(n))}const s=e.morphAttributes;for(const u in s){const d=[],h=s[u];for(let f=0,g=h.length;f<g;f++)d.push(h[f].clone(n));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,d=a.length;u<d;u++){const h=a[u];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let jC=0;class Ho extends ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jC++}),this.uuid=jo(),this.name="",this.type="Material",this.blending=Qs,this.side=Ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kf,this.blendDst=zf,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=ua,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ys,this.stencilZFail=ys,this.stencilZPass=ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Fe(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Fe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qs&&(i.blending=this.blending),this.side!==Ir&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==kf&&(i.blendSrc=this.blendSrc),this.blendDst!==zf&&(i.blendDst=this.blendDst),this.blendEquation!==$r&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ua&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ys&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ys&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ys&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ki=new G,yd=new G,xl=new G,dr=new G,Sd=new G,yl=new G,Ed=new G;class VC{constructor(e=new G,n=new G(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ki.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,n),ki.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){yd.copy(e).add(n).multiplyScalar(.5),xl.copy(n).sub(e).normalize(),dr.copy(this.origin).sub(yd);const s=e.distanceTo(n)*.5,a=-this.direction.dot(xl),o=dr.dot(this.direction),l=-dr.dot(xl),u=dr.lengthSq(),d=Math.abs(1-a*a);let h,f,g,_;if(d>0)if(h=a*l-o,f=a*o-l,_=s*d,h>=0)if(f>=-_)if(f<=_){const x=1/d;h*=x,f*=x,g=h*(h+a*f+2*o)+f*(a*h+f+2*l)+u}else f=s,h=Math.max(0,-(a*f+o)),g=-h*h+f*(f+2*l)+u;else f=-s,h=Math.max(0,-(a*f+o)),g=-h*h+f*(f+2*l)+u;else f<=-_?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),g=-h*h+f*(f+2*l)+u):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),g=f*(f+2*l)+u):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),g=-h*h+f*(f+2*l)+u);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),g=-h*h+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(yd).addScaledVector(xl,f),g}intersectSphere(e,n){ki.subVectors(e.center,this.origin);const i=ki.dot(this.direction),r=ki.dot(ki)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const u=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),d>=0?(s=(e.min.y-f.y)*d,a=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,a=(e.min.y-f.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,n,i,r,s){Sd.subVectors(n,e),yl.subVectors(i,e),Ed.crossVectors(Sd,yl);let a=this.direction.dot(Ed),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;dr.subVectors(this.origin,e);const l=o*this.direction.dot(yl.crossVectors(dr,yl));if(l<0)return null;const u=o*this.direction.dot(Sd.cross(dr));if(u<0||l+u>a)return null;const d=-o*dr.dot(Ed);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Py extends Ho{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ur,this.combine=cy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yv=new Dt,Hr=new VC,Sl=new Yp,Sv=new G,El=new G,Ml=new G,wl=new G,Md=new G,Tl=new G,Ev=new G,bl=new G;class an extends dn{constructor(e=new Qn,n=new Py){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Tl.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const d=o[l],h=s[l];d!==0&&(Md.fromBufferAttribute(h,e),a?Tl.addScaledVector(Md,d):Tl.addScaledVector(Md.sub(n),d))}n.add(Tl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Sl.copy(i.boundingSphere),Sl.applyMatrix4(s),Hr.copy(e.ray).recast(e.near),!(Sl.containsPoint(Hr.origin)===!1&&(Hr.intersectSphere(Sl,Sv)===null||Hr.origin.distanceToSquared(Sv)>(e.far-e.near)**2))&&(yv.copy(s).invert(),Hr.copy(e.ray).applyMatrix4(yv),!(i.boundingBox!==null&&Hr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Hr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=f.length;_<x;_++){const m=f[_],p=a[m.materialIndex],v=Math.max(m.start,g.start),S=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let E=v,A=S;E<A;E+=3){const w=o.getX(E),C=o.getX(E+1),y=o.getX(E+2);r=Cl(this,p,e,i,u,d,h,w,C,y),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),x=Math.min(o.count,g.start+g.count);for(let m=_,p=x;m<p;m+=3){const v=o.getX(m),S=o.getX(m+1),E=o.getX(m+2);r=Cl(this,a,e,i,u,d,h,v,S,E),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=f.length;_<x;_++){const m=f[_],p=a[m.materialIndex],v=Math.max(m.start,g.start),S=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let E=v,A=S;E<A;E+=3){const w=E,C=E+1,y=E+2;r=Cl(this,p,e,i,u,d,h,w,C,y),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),x=Math.min(l.count,g.start+g.count);for(let m=_,p=x;m<p;m+=3){const v=m,S=m+1,E=m+2;r=Cl(this,a,e,i,u,d,h,v,S,E),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function HC(t,e,n,i,r,s,a,o){let l;if(e.side===An?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Ir,o),l===null)return null;bl.copy(o),bl.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(bl);return u<n.near||u>n.far?null:{distance:u,point:bl.clone(),object:t}}function Cl(t,e,n,i,r,s,a,o,l,u){t.getVertexPosition(o,El),t.getVertexPosition(l,Ml),t.getVertexPosition(u,wl);const d=HC(t,e,n,i,El,Ml,wl,Ev);if(d){const h=new G;ci.getBarycoord(Ev,El,Ml,wl,h),r&&(d.uv=ci.getInterpolatedAttribute(r,o,l,u,h,new nt)),s&&(d.uv1=ci.getInterpolatedAttribute(s,o,l,u,h,new nt)),a&&(d.normal=ci.getInterpolatedAttribute(a,o,l,u,h,new G),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c:u,normal:new G,materialIndex:0};ci.getNormal(El,Ml,wl,f.normal),d.face=f,d.barycoord=h}return d}class GC extends un{constructor(e=null,n=1,i=1,r,s,a,o,l,u=Kt,d=Kt,h,f){super(null,a,o,l,u,d,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wd=new G,WC=new G,XC=new ke;class qr{constructor(e=new G(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=wd.subVectors(i,n).cross(WC.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(wd),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||XC.getNormalMatrix(e),r=this.coplanarPoint(wd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gr=new Yp,qC=new nt(.5,.5),Al=new G;class Kp{constructor(e=new qr,n=new qr,i=new qr,r=new qr,s=new qr,a=new qr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=wi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],u=s[3],d=s[4],h=s[5],f=s[6],g=s[7],_=s[8],x=s[9],m=s[10],p=s[11],v=s[12],S=s[13],E=s[14],A=s[15];if(r[0].setComponents(u-a,g-d,p-_,A-v).normalize(),r[1].setComponents(u+a,g+d,p+_,A+v).normalize(),r[2].setComponents(u+o,g+h,p+x,A+S).normalize(),r[3].setComponents(u-o,g-h,p-x,A-S).normalize(),i)r[4].setComponents(l,f,m,E).normalize(),r[5].setComponents(u-l,g-f,p-m,A-E).normalize();else if(r[4].setComponents(u-l,g-f,p-m,A-E).normalize(),n===wi)r[5].setComponents(u+l,g+f,p+m,A+E).normalize();else if(n===Ro)r[5].setComponents(l,f,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gr)}intersectsSprite(e){Gr.center.set(0,0,0);const n=qC.distanceTo(e.center);return Gr.radius=.7071067811865476+n,Gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Al.x=r.normal.x>0?e.max.x:e.min.x,Al.y=r.normal.y>0?e.max.y:e.min.y,Al.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Al)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ly extends un{constructor(e=[],n=ds,i,r,s,a,o,l,u,d){super(e,n,i,r,s,a,o,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fa extends un{constructor(e,n,i=Pi,r,s,a,o=Kt,l=Kt,u,d=er,h=1){if(d!==er&&d!==ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:h};super(f,r,s,a,o,l,d,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $p(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class $C extends fa{constructor(e,n=Pi,i=ds,r,s,a=Kt,o=Kt,l,u=er){const d={width:e,height:e,depth:1},h=[d,d,d,d,d,d];super(e,e,n,i,r,s,a,o,l,u),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Dy extends un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Go extends Qn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],d=[],h=[];let f=0,g=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new $t(u,3)),this.setAttribute("normal",new $t(d,3)),this.setAttribute("uv",new $t(h,2));function _(x,m,p,v,S,E,A,w,C,y,b){const P=E/C,N=A/y,D=E/2,L=A/2,H=w/2,U=C+1,O=y+1;let j=0,k=0;const K=new G;for(let ee=0;ee<O;ee++){const re=ee*N-L;for(let $=0;$<U;$++){const Ce=$*P-D;K[x]=Ce*v,K[m]=re*S,K[p]=H,u.push(K.x,K.y,K.z),K[x]=0,K[m]=0,K[p]=w>0?1:-1,d.push(K.x,K.y,K.z),h.push($/C),h.push(1-ee/y),j+=1}}for(let ee=0;ee<y;ee++)for(let re=0;re<C;re++){const $=f+re+U*ee,Ce=f+re+U*(ee+1),Z=f+(re+1)+U*(ee+1),Se=f+(re+1)+U*ee;l.push($,Ce,Se),l.push(Ce,Z,Se),k+=6}o.addGroup(g,k,b),g+=k,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Go(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Zp extends Qn{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],a=[],o=[],l=[],u=new G,d=new nt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=n;h++,f+=3){const g=i+h/n*r;u.x=e*Math.cos(g),u.y=e*Math.sin(g),a.push(u.x,u.y,u.z),o.push(0,0,1),d.x=(a[f]/e+1)/2,d.y=(a[f+1]/e+1)/2,l.push(d.x,d.y)}for(let h=1;h<=n;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new $t(a,3)),this.setAttribute("normal",new $t(o,3)),this.setAttribute("uv",new $t(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zp(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Jp extends Qn{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const d=[],h=[],f=[],g=[];let _=0;const x=[],m=i/2;let p=0;v(),a===!1&&(e>0&&S(!0),n>0&&S(!1)),this.setIndex(d),this.setAttribute("position",new $t(h,3)),this.setAttribute("normal",new $t(f,3)),this.setAttribute("uv",new $t(g,2));function v(){const E=new G,A=new G;let w=0;const C=(n-e)/i;for(let y=0;y<=s;y++){const b=[],P=y/s,N=P*(n-e)+e;for(let D=0;D<=r;D++){const L=D/r,H=L*l+o,U=Math.sin(H),O=Math.cos(H);A.x=N*U,A.y=-P*i+m,A.z=N*O,h.push(A.x,A.y,A.z),E.set(U,C,O).normalize(),f.push(E.x,E.y,E.z),g.push(L,1-P),b.push(_++)}x.push(b)}for(let y=0;y<r;y++)for(let b=0;b<s;b++){const P=x[b][y],N=x[b+1][y],D=x[b+1][y+1],L=x[b][y+1];(e>0||b!==0)&&(d.push(P,N,L),w+=3),(n>0||b!==s-1)&&(d.push(N,D,L),w+=3)}u.addGroup(p,w,0),p+=w}function S(E){const A=_,w=new nt,C=new G;let y=0;const b=E===!0?e:n,P=E===!0?1:-1;for(let D=1;D<=r;D++)h.push(0,m*P,0),f.push(0,P,0),g.push(.5,.5),_++;const N=_;for(let D=0;D<=r;D++){const H=D/r*l+o,U=Math.cos(H),O=Math.sin(H);C.x=b*O,C.y=m*P,C.z=b*U,h.push(C.x,C.y,C.z),f.push(0,P,0),w.x=U*.5+.5,w.y=O*.5*P+.5,g.push(w.x,w.y),_++}for(let D=0;D<r;D++){const L=A+D,H=N+D;E===!0?d.push(H,H+1,L):d.push(H+1,H,L),y+=3}u.addGroup(p,y,E===!0?1:2),p+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jp(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class pu extends Qn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),u=o+1,d=l+1,h=e/o,f=n/l,g=[],_=[],x=[],m=[];for(let p=0;p<d;p++){const v=p*f-a;for(let S=0;S<u;S++){const E=S*h-s;_.push(E,-v,0),x.push(0,0,1),m.push(S/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){const S=v+u*p,E=v+u*(p+1),A=v+1+u*(p+1),w=v+1+u*p;g.push(S,E,w),g.push(E,A,w)}this.setIndex(g),this.setAttribute("position",new $t(_,3)),this.setAttribute("normal",new $t(x,3)),this.setAttribute("uv",new $t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Qp extends Qn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const l=[],u=[],d=[],h=[],f=new G,g=new G,_=new G;for(let x=0;x<=i;x++){const m=a+x/i*o;for(let p=0;p<=r;p++){const v=p/r*s;g.x=(e+n*Math.cos(m))*Math.cos(v),g.y=(e+n*Math.cos(m))*Math.sin(v),g.z=n*Math.sin(m),u.push(g.x,g.y,g.z),f.x=e*Math.cos(v),f.y=e*Math.sin(v),_.subVectors(g,f).normalize(),d.push(_.x,_.y,_.z),h.push(p/r),h.push(x/i)}}for(let x=1;x<=i;x++)for(let m=1;m<=r;m++){const p=(r+1)*x+m-1,v=(r+1)*(x-1)+m-1,S=(r+1)*(x-1)+m,E=(r+1)*x+m;l.push(p,v,E),l.push(v,S,E)}this.setIndex(l),this.setAttribute("position",new $t(u,3)),this.setAttribute("normal",new $t(d,3)),this.setAttribute("uv",new $t(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qp(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function ha(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Mv(r))r.isRenderTargetTexture?(Fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Mv(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function mn(t){const e={};for(let n=0;n<t.length;n++){const i=ha(t[n]);for(const r in i)e[r]=i[r]}return e}function Mv(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function YC(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Iy(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const KC={clone:ha,merge:mn};var ZC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,JC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Li extends Ho{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ZC,this.fragmentShader=JC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ha(e.uniforms),this.uniformsGroups=YC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class QC extends Li{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ka extends Ho{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bh,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ur,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class eA extends Ho{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tA extends Ho{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Td={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(wv(t)||(this.files[t]=e))},get:function(t){if(this.enabled!==!1&&!wv(t))return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function wv(t){try{const e=t.slice(t.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class nA{constructor(e,n,i){const r=this;let s=!1,a=0,o=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(d){o++,s===!1&&r.onStart!==void 0&&r.onStart(d,a,o),s=!0},this.itemEnd=function(d){a++,r.onProgress!==void 0&&r.onProgress(d,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return u.push(d,h),this},this.removeHandler=function(d){const h=u.indexOf(d);return h!==-1&&u.splice(h,2),this},this.getHandler=function(d){for(let h=0,f=u.length;h<f;h+=2){const g=u[h],_=u[h+1];if(g.global&&(g.lastIndex=0),g.test(d))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const iA=new nA;let em=class{constructor(e){this.manager=e!==void 0?e:iA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};em.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ps=new WeakMap;class rA extends em{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Td.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){n&&n(a),s.manager.itemEnd(e)},0);else{let h=Ps.get(a);h===void 0&&(h=[],Ps.set(a,h)),h.push({onLoad:n,onError:r})}return a}const o=No("img");function l(){d(),n&&n(this);const h=Ps.get(this)||[];for(let f=0;f<h.length;f++){const g=h[f];g.onLoad&&g.onLoad(this)}Ps.delete(this),s.manager.itemEnd(e)}function u(h){d(),r&&r(h),Td.remove(`image:${e}`);const f=Ps.get(this)||[];for(let g=0;g<f.length;g++){const _=f[g];_.onError&&_.onError(h)}Ps.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Td.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class sA extends em{constructor(e){super(e)}load(e,n,i,r){const s=new un,a=new rA(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Uy extends dn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const bd=new Dt,Tv=new G,bv=new G;class aA{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new Dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kp,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Tv.setFromMatrixPosition(e.matrixWorld),n.position.copy(Tv),bv.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(bv),n.updateMatrixWorld(),bd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bd,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Ro||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(bd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Rl=new G,Nl=new Sa,_i=new G;class Fy extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Rl,Nl,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rl,Nl,_i.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(Rl,Nl,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rl,Nl,_i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const fr=new G,Cv=new nt,Av=new nt;class Xn extends Fy{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ah*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(td*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ah*2*Math.atan(Math.tan(td*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fr.x,fr.y).multiplyScalar(-e/fr.z),fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fr.x,fr.y).multiplyScalar(-e/fr.z)}getViewSize(e,n){return this.getViewBounds(e,Cv,Av),n.subVectors(Av,Cv)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(td*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class tm extends Fy{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class oA extends aA{constructor(){super(new tm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Rv extends Uy{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new oA}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class lA extends Uy{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ls=-90,Ds=1;class cA extends dn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Xn(Ls,Ds,e,n);r.layers=this.layers,this.add(r);const s=new Xn(Ls,Ds,e,n);s.layers=this.layers,this.add(s);const a=new Xn(Ls,Ds,e,n);a.layers=this.layers,this.add(a);const o=new Xn(Ls,Ds,e,n);o.layers=this.layers,this.add(o);const l=new Xn(Ls,Ds,e,n);l.layers=this.layers,this.add(l);const u=new Xn(Ls,Ds,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const u of n)this.remove(u);if(e===wi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ro)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(h,f,g),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class uA extends Xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const dm=class dm{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};dm.prototype.isMatrix2=!0;let Nv=dm;function Pv(t,e,n,i){const r=dA(i);switch(n){case Ey:return t*e;case wy:return t*e/r.components*r.byteLength;case Hp:return t*e/r.components*r.byteLength;case fs:return t*e*2/r.components*r.byteLength;case Gp:return t*e*2/r.components*r.byteLength;case My:return t*e*3/r.components*r.byteLength;case ui:return t*e*4/r.components*r.byteLength;case Wp:return t*e*4/r.components*r.byteLength;case Ql:case ec:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case tc:case nc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Zf:case Qf:return Math.max(t,16)*Math.max(e,8)/4;case Kf:case Jf:return Math.max(t,8)*Math.max(e,8)/2;case eh:case th:case ih:case rh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case nh:case Uc:case sh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ah:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case oh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case lh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case ch:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case uh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case dh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case fh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case hh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case ph:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case mh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case gh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case vh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case _h:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case xh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case yh:case Sh:case Eh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Mh:case wh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Fc:case Th:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function dA(t){switch(t){case Un:case _y:return{byteLength:1,components:1};case Co:case xy:case Qi:return{byteLength:2,components:1};case jp:case Vp:return{byteLength:2,components:4};case Pi:case zp:case Mi:return{byteLength:4,components:1};case yy:case Sy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kp}}));typeof window<"u"&&(window.__THREE__?Fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Oy(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function fA(t){const e=new WeakMap;function n(o,l){const u=o.array,d=o.usage,h=u.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,u,d),o.onUploadCallback();let g;if(u instanceof Float32Array)g=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)g=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=t.SHORT;else if(u instanceof Uint32Array)g=t.UNSIGNED_INT;else if(u instanceof Int32Array)g=t.INT;else if(u instanceof Int8Array)g=t.BYTE;else if(u instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,u){const d=l.array,h=l.updateRanges;if(t.bindBuffer(u,o),h.length===0)t.bufferSubData(u,0,d);else{h.sort((g,_)=>g.start-_.start);let f=0;for(let g=1;g<h.length;g++){const _=h[f],x=h[g];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++f,h[f]=x)}h.length=f+1;for(let g=0,_=h.length;g<_;g++){const x=h[g];t.bufferSubData(u,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,n(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}var hA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_A=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,SA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,EA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,MA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,TA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,CA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,AA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,RA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,NA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,PA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,LA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,DA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,IA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,UA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,FA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,OA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,BA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,kA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,VA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,HA="gl_FragColor = linearToOutputTexel( gl_FragColor );",GA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,WA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,XA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,qA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$A=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,YA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,KA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ZA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,JA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,QA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,e1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,t1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,n1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,i1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,r1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,s1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,a1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,o1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,l1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,c1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,u1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,d1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,f1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,h1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,p1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,m1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,g1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,v1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,y1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,S1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,E1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,M1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,T1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,b1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,C1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,A1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,N1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,L1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,D1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,F1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,O1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,B1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,k1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,z1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,j1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,V1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,H1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,G1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,W1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,X1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,q1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Y1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,K1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Z1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,J1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Q1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,iR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,aR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,oR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_R=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,SR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ER=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,MR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,AR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,LR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,IR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,UR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,BR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,VR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,WR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,XR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:hA,alphahash_pars_fragment:pA,alphamap_fragment:mA,alphamap_pars_fragment:gA,alphatest_fragment:vA,alphatest_pars_fragment:_A,aomap_fragment:xA,aomap_pars_fragment:yA,batching_pars_vertex:SA,batching_vertex:EA,begin_vertex:MA,beginnormal_vertex:wA,bsdfs:TA,iridescence_fragment:bA,bumpmap_pars_fragment:CA,clipping_planes_fragment:AA,clipping_planes_pars_fragment:RA,clipping_planes_pars_vertex:NA,clipping_planes_vertex:PA,color_fragment:LA,color_pars_fragment:DA,color_pars_vertex:IA,color_vertex:UA,common:FA,cube_uv_reflection_fragment:OA,defaultnormal_vertex:BA,displacementmap_pars_vertex:kA,displacementmap_vertex:zA,emissivemap_fragment:jA,emissivemap_pars_fragment:VA,colorspace_fragment:HA,colorspace_pars_fragment:GA,envmap_fragment:WA,envmap_common_pars_fragment:XA,envmap_pars_fragment:qA,envmap_pars_vertex:$A,envmap_physical_pars_fragment:s1,envmap_vertex:YA,fog_vertex:KA,fog_pars_vertex:ZA,fog_fragment:JA,fog_pars_fragment:QA,gradientmap_pars_fragment:e1,lightmap_pars_fragment:t1,lights_lambert_fragment:n1,lights_lambert_pars_fragment:i1,lights_pars_begin:r1,lights_toon_fragment:a1,lights_toon_pars_fragment:o1,lights_phong_fragment:l1,lights_phong_pars_fragment:c1,lights_physical_fragment:u1,lights_physical_pars_fragment:d1,lights_fragment_begin:f1,lights_fragment_maps:h1,lights_fragment_end:p1,lightprobes_pars_fragment:m1,logdepthbuf_fragment:g1,logdepthbuf_pars_fragment:v1,logdepthbuf_pars_vertex:_1,logdepthbuf_vertex:x1,map_fragment:y1,map_pars_fragment:S1,map_particle_fragment:E1,map_particle_pars_fragment:M1,metalnessmap_fragment:w1,metalnessmap_pars_fragment:T1,morphinstance_vertex:b1,morphcolor_vertex:C1,morphnormal_vertex:A1,morphtarget_pars_vertex:R1,morphtarget_vertex:N1,normal_fragment_begin:P1,normal_fragment_maps:L1,normal_pars_fragment:D1,normal_pars_vertex:I1,normal_vertex:U1,normalmap_pars_fragment:F1,clearcoat_normal_fragment_begin:O1,clearcoat_normal_fragment_maps:B1,clearcoat_pars_fragment:k1,iridescence_pars_fragment:z1,opaque_fragment:j1,packing:V1,premultiplied_alpha_fragment:H1,project_vertex:G1,dithering_fragment:W1,dithering_pars_fragment:X1,roughnessmap_fragment:q1,roughnessmap_pars_fragment:$1,shadowmap_pars_fragment:Y1,shadowmap_pars_vertex:K1,shadowmap_vertex:Z1,shadowmask_pars_fragment:J1,skinbase_vertex:Q1,skinning_pars_vertex:eR,skinning_vertex:tR,skinnormal_vertex:nR,specularmap_fragment:iR,specularmap_pars_fragment:rR,tonemapping_fragment:sR,tonemapping_pars_fragment:aR,transmission_fragment:oR,transmission_pars_fragment:lR,uv_pars_fragment:cR,uv_pars_vertex:uR,uv_vertex:dR,worldpos_vertex:fR,background_vert:hR,background_frag:pR,backgroundCube_vert:mR,backgroundCube_frag:gR,cube_vert:vR,cube_frag:_R,depth_vert:xR,depth_frag:yR,distance_vert:SR,distance_frag:ER,equirect_vert:MR,equirect_frag:wR,linedashed_vert:TR,linedashed_frag:bR,meshbasic_vert:CR,meshbasic_frag:AR,meshlambert_vert:RR,meshlambert_frag:NR,meshmatcap_vert:PR,meshmatcap_frag:LR,meshnormal_vert:DR,meshnormal_frag:IR,meshphong_vert:UR,meshphong_frag:FR,meshphysical_vert:OR,meshphysical_frag:BR,meshtoon_vert:kR,meshtoon_frag:zR,points_vert:jR,points_frag:VR,shadow_vert:HR,shadow_frag:GR,sprite_vert:WR,sprite_frag:XR},ve={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Si={basic:{uniforms:mn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:mn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new rt(0)},envMapIntensity:{value:1}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:mn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:mn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:mn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new rt(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:mn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:mn([ve.points,ve.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:mn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:mn([ve.common,ve.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:mn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:mn([ve.sprite,ve.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:mn([ve.common,ve.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:mn([ve.lights,ve.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Si.physical={uniforms:mn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Pl={r:0,b:0,g:0},qR=new Dt,By=new ke;By.set(-1,0,0,0,1,0,0,0,1);function $R(t,e,n,i,r,s){const a=new rt(0);let o=r===!0?0:1,l,u,d=null,h=0,f=null;function g(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){const E=v.backgroundBlurriness>0;S=e.get(S,E)}return S}function _(v){let S=!1;const E=g(v);E===null?m(a,o):E&&E.isColor&&(m(E,1),S=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function x(v,S){const E=g(S);E&&(E.isCubeTexture||E.mapping===hu)?(u===void 0&&(u=new an(new Go(1,1,1),new Li({name:"BackgroundCubeMaterial",uniforms:ha(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=E,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(qR.makeRotationFromEuler(S.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(By),u.material.toneMapped=Ze.getTransfer(E.colorSpace)!==st,(d!==E||h!==E.version||f!==t.toneMapping)&&(u.material.needsUpdate=!0,d=E,h=E.version,f=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new an(new pu(2,2),new Li({name:"BackgroundMaterial",uniforms:ha(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:Ir,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(E.colorSpace)!==st,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||h!==E.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,d=E,h=E.version,f=t.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,S){v.getRGB(Pl,Iy(t)),n.buffers.color.setClear(Pl.r,Pl.g,Pl.b,S,s)}function p(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,S=1){a.set(v),o=S,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:_,addToRenderList:x,dispose:p}}function YR(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(N,D,L,H,U){let O=!1;const j=h(N,H,L,D);s!==j&&(s=j,u(s.object)),O=g(N,H,L,U),O&&_(N,H,L,U),U!==null&&e.update(U,t.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,E(N,D,L,H),U!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return t.createVertexArray()}function u(N){return t.bindVertexArray(N)}function d(N){return t.deleteVertexArray(N)}function h(N,D,L,H){const U=H.wireframe===!0;let O=i[D.id];O===void 0&&(O={},i[D.id]=O);const j=N.isInstancedMesh===!0?N.id:0;let k=O[j];k===void 0&&(k={},O[j]=k);let K=k[L.id];K===void 0&&(K={},k[L.id]=K);let ee=K[U];return ee===void 0&&(ee=f(l()),K[U]=ee),ee}function f(N){const D=[],L=[],H=[];for(let U=0;U<n;U++)D[U]=0,L[U]=0,H[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:L,attributeDivisors:H,object:N,attributes:{},index:null}}function g(N,D,L,H){const U=s.attributes,O=D.attributes;let j=0;const k=L.getAttributes();for(const K in k)if(k[K].location>=0){const re=U[K];let $=O[K];if($===void 0&&(K==="instanceMatrix"&&N.instanceMatrix&&($=N.instanceMatrix),K==="instanceColor"&&N.instanceColor&&($=N.instanceColor)),re===void 0||re.attribute!==$||$&&re.data!==$.data)return!0;j++}return s.attributesNum!==j||s.index!==H}function _(N,D,L,H){const U={},O=D.attributes;let j=0;const k=L.getAttributes();for(const K in k)if(k[K].location>=0){let re=O[K];re===void 0&&(K==="instanceMatrix"&&N.instanceMatrix&&(re=N.instanceMatrix),K==="instanceColor"&&N.instanceColor&&(re=N.instanceColor));const $={};$.attribute=re,re&&re.data&&($.data=re.data),U[K]=$,j++}s.attributes=U,s.attributesNum=j,s.index=H}function x(){const N=s.newAttributes;for(let D=0,L=N.length;D<L;D++)N[D]=0}function m(N){p(N,0)}function p(N,D){const L=s.newAttributes,H=s.enabledAttributes,U=s.attributeDivisors;L[N]=1,H[N]===0&&(t.enableVertexAttribArray(N),H[N]=1),U[N]!==D&&(t.vertexAttribDivisor(N,D),U[N]=D)}function v(){const N=s.newAttributes,D=s.enabledAttributes;for(let L=0,H=D.length;L<H;L++)D[L]!==N[L]&&(t.disableVertexAttribArray(L),D[L]=0)}function S(N,D,L,H,U,O,j){j===!0?t.vertexAttribIPointer(N,D,L,U,O):t.vertexAttribPointer(N,D,L,H,U,O)}function E(N,D,L,H){x();const U=H.attributes,O=L.getAttributes(),j=D.defaultAttributeValues;for(const k in O){const K=O[k];if(K.location>=0){let ee=U[k];if(ee===void 0&&(k==="instanceMatrix"&&N.instanceMatrix&&(ee=N.instanceMatrix),k==="instanceColor"&&N.instanceColor&&(ee=N.instanceColor)),ee!==void 0){const re=ee.normalized,$=ee.itemSize,Ce=e.get(ee);if(Ce===void 0)continue;const Z=Ce.buffer,Se=Ce.type,J=Ce.bytesPerElement,me=Se===t.INT||Se===t.UNSIGNED_INT||ee.gpuType===zp;if(ee.isInterleavedBufferAttribute){const de=ee.data,Ie=de.stride,Be=ee.offset;if(de.isInstancedInterleavedBuffer){for(let Ue=0;Ue<K.locationSize;Ue++)p(K.location+Ue,de.meshPerAttribute);N.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ue=0;Ue<K.locationSize;Ue++)m(K.location+Ue);t.bindBuffer(t.ARRAY_BUFFER,Z);for(let Ue=0;Ue<K.locationSize;Ue++)S(K.location+Ue,$/K.locationSize,Se,re,Ie*J,(Be+$/K.locationSize*Ue)*J,me)}else{if(ee.isInstancedBufferAttribute){for(let de=0;de<K.locationSize;de++)p(K.location+de,ee.meshPerAttribute);N.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let de=0;de<K.locationSize;de++)m(K.location+de);t.bindBuffer(t.ARRAY_BUFFER,Z);for(let de=0;de<K.locationSize;de++)S(K.location+de,$/K.locationSize,Se,re,$*J,$/K.locationSize*de*J,me)}}else if(j!==void 0){const re=j[k];if(re!==void 0)switch(re.length){case 2:t.vertexAttrib2fv(K.location,re);break;case 3:t.vertexAttrib3fv(K.location,re);break;case 4:t.vertexAttrib4fv(K.location,re);break;default:t.vertexAttrib1fv(K.location,re)}}}}v()}function A(){b();for(const N in i){const D=i[N];for(const L in D){const H=D[L];for(const U in H){const O=H[U];for(const j in O)d(O[j].object),delete O[j];delete H[U]}}delete i[N]}}function w(N){if(i[N.id]===void 0)return;const D=i[N.id];for(const L in D){const H=D[L];for(const U in H){const O=H[U];for(const j in O)d(O[j].object),delete O[j];delete H[U]}}delete i[N.id]}function C(N){for(const D in i){const L=i[D];for(const H in L){const U=L[H];if(U[N.id]===void 0)continue;const O=U[N.id];for(const j in O)d(O[j].object),delete O[j];delete U[N.id]}}}function y(N){for(const D in i){const L=i[D],H=N.isInstancedMesh===!0?N.id:0,U=L[H];if(U!==void 0){for(const O in U){const j=U[O];for(const k in j)d(j[k].object),delete j[k];delete U[O]}delete L[H],Object.keys(L).length===0&&delete i[D]}}}function b(){P(),a=!0,s!==r&&(s=r,u(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:b,resetDefaultState:P,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function KR(t,e,n){let i;function r(l){i=l}function s(l,u){t.drawArrays(i,l,u),n.update(u,i,1)}function a(l,u,d){d!==0&&(t.drawArraysInstanced(i,l,u,d),n.update(u,i,d))}function o(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];n.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function ZR(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==ui&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const y=C===Qi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Un&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Mi&&!y)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const d=l(u);d!==u&&(Fe("WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const h=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&Fe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const g=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=t.getParameter(t.MAX_SAMPLES),w=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:g,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:E,maxSamples:A,samples:w}}function JR(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new qr,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const g=h.length!==0||f||i!==0||r;return r=f,i=h.length,g},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,g){const _=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=t.get(h);if(!r||_===null||_.length===0||s&&!m)s?d(null):u();else{const v=s?0:i,S=v*4;let E=p.clippingState||null;l.value=E,E=d(_,f,S,g);for(let A=0;A!==S;++A)E[A]=n[A];p.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,g,_){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const p=g+x*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,E=g;S!==x;++S,E+=4)a.copy(h[S]).applyMatrix4(v,o),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}const Sr=4,Lv=[.125,.215,.35,.446,.526,.582],Yr=20,QR=256,za=new tm,Dv=new rt;let Cd=null,Ad=0,Rd=0,Nd=!1;const eN=new G;class Iv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=eN}=s;Cd=this._renderer.getRenderTarget(),Ad=this._renderer.getActiveCubeFace(),Rd=this._renderer.getActiveMipmapLevel(),Nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ov(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Cd,Ad,Rd),this._renderer.xr.enabled=Nd,e.scissorTest=!1,Is(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ds||e.mapping===da?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cd=this._renderer.getRenderTarget(),Ad=this._renderer.getActiveCubeFace(),Rd=this._renderer.getActiveMipmapLevel(),Nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Qi,format:ui,colorSpace:Oc,depthBuffer:!1},r=Uv(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uv(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=tN(s)),this._blurMaterial=iN(s,e,n),this._ggxMaterial=nN(s,e,n)}return r}_compileMaterial(e){const n=new an(new Qn,e);this._renderer.compile(n,za)}_sceneToCubeUV(e,n,i,r,s){const l=new Xn(90,1,n,i),u=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,g=h.toneMapping;h.getClearColor(Dv),h.toneMapping=Ci,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new an(new Go,new Py({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let p=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,p=!0):(m.color.copy(Dv),p=!0);for(let S=0;S<6;S++){const E=S%3;E===0?(l.up.set(0,u[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[S],s.y,s.z)):E===1?(l.up.set(0,0,u[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[S],s.z)):(l.up.set(0,u[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[S]));const A=this._cubeSize;Is(r,E*A,S>2?A:0,A,A),h.setRenderTarget(r),p&&h.render(x,l),h.render(e,l)}h.toneMapping=g,h.autoClear=f,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ds||e.mapping===da;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ov()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fv());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Is(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,za)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,u=i/(this._lodMeshes.length-1),d=n/(this._lodMeshes.length-1),h=Math.sqrt(u*u-d*d),f=0+u*1.25,g=h*f,{_lodMax:_}=this,x=this._sizeLods[i],m=3*x*(i>_-Sr?i-_+Sr:0),p=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=g,l.mipInt.value=_-n,Is(s,m,p,3*x,2*x),r.setRenderTarget(s),r.render(o,za),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,Is(e,m,p,3*x,2*x),r.setRenderTarget(e),r.render(o,za)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&et("blur direction must be either latitudinal or longitudinal!");const d=3,h=this._lodMeshes[r];h.material=u;const f=u.uniforms,g=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Yr-1),x=s/_,m=isFinite(s)?1+Math.floor(d*x):Yr;m>Yr&&Fe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yr}`);const p=[];let v=0;for(let C=0;C<Yr;++C){const y=C/x,b=Math.exp(-y*y/2);p.push(b),C===0?v+=b:C<m&&(v+=2*b)}for(let C=0;C<p.length;C++)p[C]=p[C]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:S}=this;f.dTheta.value=_,f.mipInt.value=S-i;const E=this._sizeLods[r],A=3*E*(r>S-Sr?r-S+Sr:0),w=4*(this._cubeSize-E);Is(n,A,w,3*E,2*E),l.setRenderTarget(n),l.render(h,za)}}function tN(t){const e=[],n=[],i=[];let r=t;const s=t-Sr+1+Lv.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-Sr?l=Lv[a-t+Sr-1]:a===0&&(l=0),n.push(l);const u=1/(o-2),d=-u,h=1+u,f=[d,d,h,d,h,h,d,d,h,h,d,h],g=6,_=6,x=3,m=2,p=1,v=new Float32Array(x*_*g),S=new Float32Array(m*_*g),E=new Float32Array(p*_*g);for(let w=0;w<g;w++){const C=w%3*2/3-1,y=w>2?0:-1,b=[C,y,0,C+2/3,y,0,C+2/3,y+1,0,C,y,0,C+2/3,y+1,0,C,y+1,0];v.set(b,x*_*w),S.set(f,m*_*w);const P=[w,w,w,w,w,w];E.set(P,p*_*w)}const A=new Qn;A.setAttribute("position",new Ri(v,x)),A.setAttribute("uv",new Ri(S,m)),A.setAttribute("faceIndex",new Ri(E,p)),i.push(new an(A,null)),r>Sr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Uv(t,e,n){const i=new Ai(t,e,n);return i.texture.mapping=hu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Is(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function nN(t,e,n){return new Li({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:QR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:mu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function iN(t,e,n){const i=new Float32Array(Yr),r=new G(0,1,0);return new Li({name:"SphericalGaussianBlur",defines:{n:Yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Fv(){return new Li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Ov(){return new Li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function mu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class ky extends Ai{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ly(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Go(5,5,5),s=new Li({name:"CubemapFromEquirect",uniforms:ha(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:An,blending:qi});s.uniforms.tEquirect.value=n;const a=new an(r,s),o=n.minFilter;return n.minFilter===es&&(n.minFilter=cn),new cA(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function rN(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,g=!1){return f==null?null:g?a(f):s(f)}function s(f){if(f&&f.isTexture){const g=f.mapping;if(g===Ju||g===Qu)if(e.has(f)){const _=e.get(f).texture;return o(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const x=new ky(_.height);return x.fromEquirectangularTexture(t,f),e.set(f,x),f.addEventListener("dispose",u),o(x.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const g=f.mapping,_=g===Ju||g===Qu,x=g===ds||g===da;if(_||x){let m=n.get(f);const p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new Iv(t)),m=_?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,n.set(f,m),m.texture;if(m!==void 0)return m.texture;{const v=f.image;return _&&v&&v.height>0||x&&v&&l(v)?(i===null&&(i=new Iv(t)),m=_?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,n.set(f,m),f.addEventListener("dispose",d),m.texture):null}}}return f}function o(f,g){return g===Ju?f.mapping=ds:g===Qu&&(f.mapping=da),f}function l(f){let g=0;const _=6;for(let x=0;x<_;x++)f[x]!==void 0&&g++;return g===_}function u(f){const g=f.target;g.removeEventListener("dispose",u);const _=e.get(g);_!==void 0&&(e.delete(g),_.dispose())}function d(f){const g=f.target;g.removeEventListener("dispose",d);const _=n.get(g);_!==void 0&&(n.delete(g),_.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function sN(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ch("WebGLRenderer: "+i+" extension not supported."),r}}}function aN(t,e,n,i){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete r[f.id];const g=s.get(f);g&&(e.remove(g),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],t.ARRAY_BUFFER)}function u(h){const f=[],g=h.index,_=h.attributes.position;let x=0;if(_===void 0)return;if(g!==null){const v=g.array;x=g.version;for(let S=0,E=v.length;S<E;S+=3){const A=v[S+0],w=v[S+1],C=v[S+2];f.push(A,w,w,C,C,A)}}else{const v=_.array;x=_.version;for(let S=0,E=v.length/3-1;S<E;S+=3){const A=S+0,w=S+1,C=S+2;f.push(A,w,w,C,C,A)}}const m=new(_.count>=65535?Ny:Ry)(f,1);m.version=x;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function d(h){const f=s.get(h);if(f){const g=h.index;g!==null&&f.version<g.version&&u(h)}else u(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function oN(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,f){t.drawElements(i,f,s,h*a),n.update(f,i,1)}function u(h,f,g){g!==0&&(t.drawElementsInstanced(i,f,s,h*a,g),n.update(f,i,g))}function d(h,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,h,0,g);let x=0;for(let m=0;m<g;m++)x+=f[m];n.update(x,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d}function lN(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:et("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function cN(t,e,n){const i=new WeakMap,r=new At;function s(a,o,l){const u=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let P=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",P)};var g=P;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let E=0;_===!0&&(E=1),x===!0&&(E=2),m===!0&&(E=3);let A=o.attributes.position.count*E,w=1;A>e.maxTextureSize&&(w=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const C=new Float32Array(A*w*4*h),y=new by(C,A,w,h);y.type=Mi,y.needsUpdate=!0;const b=E*4;for(let N=0;N<h;N++){const D=p[N],L=v[N],H=S[N],U=A*w*4*N;for(let O=0;O<D.count;O++){const j=O*b;_===!0&&(r.fromBufferAttribute(D,O),C[U+j+0]=r.x,C[U+j+1]=r.y,C[U+j+2]=r.z,C[U+j+3]=0),x===!0&&(r.fromBufferAttribute(L,O),C[U+j+4]=r.x,C[U+j+5]=r.y,C[U+j+6]=r.z,C[U+j+7]=0),m===!0&&(r.fromBufferAttribute(H,O),C[U+j+8]=r.x,C[U+j+9]=r.y,C[U+j+10]=r.z,C[U+j+11]=H.itemSize===4?r.w:1)}}f={count:h,texture:y,size:new nt(A,w)},i.set(o,f),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let m=0;m<u.length;m++)_+=u[m];const x=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function uN(t,e,n,i,r){let s=new WeakMap;function a(u){const d=r.render.frame,h=u.geometry,f=e.get(u,h);if(s.get(f)!==d&&(e.update(f),s.set(f,d)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==d&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,d))),u.isSkinnedMesh){const g=u.skeleton;s.get(g)!==d&&(g.update(),s.set(g,d))}return f}function o(){s=new WeakMap}function l(u){const d=u.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:a,dispose:o}}const dN={[uy]:"LINEAR_TONE_MAPPING",[dy]:"REINHARD_TONE_MAPPING",[fy]:"CINEON_TONE_MAPPING",[hy]:"ACES_FILMIC_TONE_MAPPING",[my]:"AGX_TONE_MAPPING",[gy]:"NEUTRAL_TONE_MAPPING",[py]:"CUSTOM_TONE_MAPPING"};function fN(t,e,n,i,r){const s=new Ai(e,n,{type:t,depthBuffer:i,stencilBuffer:r,depthTexture:i?new fa(e,n):void 0}),a=new Ai(e,n,{type:Qi,depthBuffer:!1,stencilBuffer:!1}),o=new Qn;o.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new $t([0,2,0,0,2,0],2));const l=new QC({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new an(o,l),d=new tm(-1,1,1,-1,0,1);let h=null,f=null,g=!1,_,x=null,m=[],p=!1;this.setSize=function(v,S){s.setSize(v,S),a.setSize(v,S);for(let E=0;E<m.length;E++){const A=m[E];A.setSize&&A.setSize(v,S)}},this.setEffects=function(v){m=v,p=m.length>0&&m[0].isRenderPass===!0;const S=s.width,E=s.height;for(let A=0;A<m.length;A++){const w=m[A];w.setSize&&w.setSize(S,E)}},this.begin=function(v,S){if(g||v.toneMapping===Ci&&m.length===0)return!1;if(x=S,S!==null){const E=S.width,A=S.height;(s.width!==E||s.height!==A)&&this.setSize(E,A)}return p===!1&&v.setRenderTarget(s),_=v.toneMapping,v.toneMapping=Ci,!0},this.hasRenderPass=function(){return p},this.end=function(v,S){v.toneMapping=_,g=!0;let E=s,A=a;for(let w=0;w<m.length;w++){const C=m[w];if(C.enabled!==!1&&(C.render(v,A,E,S),C.needsSwap!==!1)){const y=E;E=A,A=y}}if(h!==v.outputColorSpace||f!==v.toneMapping){h=v.outputColorSpace,f=v.toneMapping,l.defines={},Ze.getTransfer(h)===st&&(l.defines.SRGB_TRANSFER="");const w=dN[f];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,v.setRenderTarget(x),v.render(u,d),x=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const zy=new un,Rh=new fa(1,1),jy=new by,Vy=new RC,Hy=new Ly,Bv=[],kv=[],zv=new Float32Array(16),jv=new Float32Array(9),Vv=new Float32Array(4);function Ea(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Bv[r];if(s===void 0&&(s=new Float32Array(r),Bv[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ht(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Gt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function gu(t,e){let n=kv[e];n===void 0&&(n=new Int32Array(e),kv[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function hN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function pN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2fv(this.addr,e),Gt(n,e)}}function mN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ht(n,e))return;t.uniform3fv(this.addr,e),Gt(n,e)}}function gN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4fv(this.addr,e),Gt(n,e)}}function vN(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Gt(n,e)}else{if(Ht(n,i))return;Vv.set(i),t.uniformMatrix2fv(this.addr,!1,Vv),Gt(n,i)}}function _N(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Gt(n,e)}else{if(Ht(n,i))return;jv.set(i),t.uniformMatrix3fv(this.addr,!1,jv),Gt(n,i)}}function xN(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Gt(n,e)}else{if(Ht(n,i))return;zv.set(i),t.uniformMatrix4fv(this.addr,!1,zv),Gt(n,i)}}function yN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function SN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2iv(this.addr,e),Gt(n,e)}}function EN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3iv(this.addr,e),Gt(n,e)}}function MN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4iv(this.addr,e),Gt(n,e)}}function wN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function TN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2uiv(this.addr,e),Gt(n,e)}}function bN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3uiv(this.addr,e),Gt(n,e)}}function CN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4uiv(this.addr,e),Gt(n,e)}}function AN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Rh.compareFunction=n.isReversedDepthBuffer()?qp:Xp,s=Rh):s=zy,n.setTexture2D(e||s,r)}function RN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Vy,r)}function NN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Hy,r)}function PN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||jy,r)}function LN(t){switch(t){case 5126:return hN;case 35664:return pN;case 35665:return mN;case 35666:return gN;case 35674:return vN;case 35675:return _N;case 35676:return xN;case 5124:case 35670:return yN;case 35667:case 35671:return SN;case 35668:case 35672:return EN;case 35669:case 35673:return MN;case 5125:return wN;case 36294:return TN;case 36295:return bN;case 36296:return CN;case 35678:case 36198:case 36298:case 36306:case 35682:return AN;case 35679:case 36299:case 36307:return RN;case 35680:case 36300:case 36308:case 36293:return NN;case 36289:case 36303:case 36311:case 36292:return PN}}function DN(t,e){t.uniform1fv(this.addr,e)}function IN(t,e){const n=Ea(e,this.size,2);t.uniform2fv(this.addr,n)}function UN(t,e){const n=Ea(e,this.size,3);t.uniform3fv(this.addr,n)}function FN(t,e){const n=Ea(e,this.size,4);t.uniform4fv(this.addr,n)}function ON(t,e){const n=Ea(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function BN(t,e){const n=Ea(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function kN(t,e){const n=Ea(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function zN(t,e){t.uniform1iv(this.addr,e)}function jN(t,e){t.uniform2iv(this.addr,e)}function VN(t,e){t.uniform3iv(this.addr,e)}function HN(t,e){t.uniform4iv(this.addr,e)}function GN(t,e){t.uniform1uiv(this.addr,e)}function WN(t,e){t.uniform2uiv(this.addr,e)}function XN(t,e){t.uniform3uiv(this.addr,e)}function qN(t,e){t.uniform4uiv(this.addr,e)}function $N(t,e,n){const i=this.cache,r=e.length,s=gu(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=Rh:a=zy;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function YN(t,e,n){const i=this.cache,r=e.length,s=gu(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Vy,s[a])}function KN(t,e,n){const i=this.cache,r=e.length,s=gu(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Hy,s[a])}function ZN(t,e,n){const i=this.cache,r=e.length,s=gu(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||jy,s[a])}function JN(t){switch(t){case 5126:return DN;case 35664:return IN;case 35665:return UN;case 35666:return FN;case 35674:return ON;case 35675:return BN;case 35676:return kN;case 5124:case 35670:return zN;case 35667:case 35671:return jN;case 35668:case 35672:return VN;case 35669:case 35673:return HN;case 5125:return GN;case 36294:return WN;case 36295:return XN;case 36296:return qN;case 35678:case 36198:case 36298:case 36306:case 35682:return $N;case 35679:case 36299:case 36307:return YN;case 35680:case 36300:case 36308:case 36293:return KN;case 36289:case 36303:case 36311:case 36292:return ZN}}class QN{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=LN(n.type)}}class eP{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=JN(n.type)}}class tP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Pd=/(\w+)(\])?(\[|\.)?/g;function Hv(t,e){t.seq.push(e),t.map[e.id]=e}function nP(t,e,n){const i=t.name,r=i.length;for(Pd.lastIndex=0;;){const s=Pd.exec(i),a=Pd.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){Hv(n,u===void 0?new QN(o,t,e):new eP(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new tP(o),Hv(n,h)),n=h}}}class ic{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);nP(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Gv(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const iP=37297;let rP=0;function sP(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Wv=new ke;function aP(t){Ze._getMatrix(Wv,Ze.workingColorSpace,t);const e=`mat3( ${Wv.elements.map(n=>n.toFixed(4))} )`;switch(Ze.getTransfer(t)){case Bc:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return Fe("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Xv(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+sP(t.getShaderSource(e),o)}else return s}function oP(t,e){const n=aP(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const lP={[uy]:"Linear",[dy]:"Reinhard",[fy]:"Cineon",[hy]:"ACESFilmic",[my]:"AgX",[gy]:"Neutral",[py]:"Custom"};function cP(t,e){const n=lP[e];return n===void 0?(Fe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ll=new G;function uP(){Ze.getLuminanceCoefficients(Ll);const t=Ll.x.toFixed(4),e=Ll.y.toFixed(4),n=Ll.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dP(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ka).join(`
`)}function fP(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function hP(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Ka(t){return t!==""}function qv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $v(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pP=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nh(t){return t.replace(pP,gP)}const mP=new Map;function gP(t,e){let n=He[e];if(n===void 0){const i=mP.get(e);if(i!==void 0)n=He[i],Fe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Nh(n)}const vP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yv(t){return t.replace(vP,_P)}function _P(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Kv(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const xP={[Jl]:"SHADOWMAP_TYPE_PCF",[$a]:"SHADOWMAP_TYPE_VSM"};function yP(t){return xP[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const SP={[ds]:"ENVMAP_TYPE_CUBE",[da]:"ENVMAP_TYPE_CUBE",[hu]:"ENVMAP_TYPE_CUBE_UV"};function EP(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":SP[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const MP={[da]:"ENVMAP_MODE_REFRACTION"};function wP(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":MP[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const TP={[cy]:"ENVMAP_BLENDING_MULTIPLY",[lC]:"ENVMAP_BLENDING_MIX",[cC]:"ENVMAP_BLENDING_ADD"};function bP(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":TP[t.combine]||"ENVMAP_BLENDING_NONE"}function CP(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function AP(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=yP(n),u=EP(n),d=wP(n),h=bP(n),f=CP(n),g=dP(n),_=fP(s),x=r.createProgram();let m,p,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ka).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ka).join(`
`),p.length>0&&(p+=`
`)):(m=[Kv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ka).join(`
`),p=[Kv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ci?"#define TONE_MAPPING":"",n.toneMapping!==Ci?He.tonemapping_pars_fragment:"",n.toneMapping!==Ci?cP("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,oP("linearToOutputTexel",n.outputColorSpace),uP(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ka).join(`
`)),a=Nh(a),a=qv(a,n),a=$v(a,n),o=Nh(o),o=qv(o,n),o=$v(o,n),a=Yv(a),o=Yv(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===av?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===av?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=v+m+a,E=v+p+o,A=Gv(r,r.VERTEX_SHADER,S),w=Gv(r,r.FRAGMENT_SHADER,E);r.attachShader(x,A),r.attachShader(x,w),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function C(N){if(t.debug.checkShaderErrors){const D=r.getProgramInfoLog(x)||"",L=r.getShaderInfoLog(A)||"",H=r.getShaderInfoLog(w)||"",U=D.trim(),O=L.trim(),j=H.trim();let k=!0,K=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(k=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,A,w);else{const ee=Xv(r,A,"vertex"),re=Xv(r,w,"fragment");et("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+U+`
`+ee+`
`+re)}else U!==""?Fe("WebGLProgram: Program Info Log:",U):(O===""||j==="")&&(K=!1);K&&(N.diagnostics={runnable:k,programLog:U,vertexShader:{log:O,prefix:m},fragmentShader:{log:j,prefix:p}})}r.deleteShader(A),r.deleteShader(w),y=new ic(r,x),b=hP(r,x)}let y;this.getUniforms=function(){return y===void 0&&C(this),y};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(x,iP)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=rP++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=w,this}let RP=0;class NP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new PP(e),n.set(e,i)),i}}class PP{constructor(e){this.id=RP++,this.code=e,this.usedTimes=0}}function LP(t){return t===fs||t===Uc||t===Fc}function DP(t,e,n,i,r,s){const a=new Cy,o=new NP,l=new Set,u=[],d=new Map,h=i.logarithmicDepthBuffer;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,b,P,N,D,L){const H=N.fog,U=D.geometry,O=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?N.environment:null,j=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,k=e.get(y.envMap||O,j),K=k&&k.mapping===hu?k.image.height:null,ee=g[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&Fe("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const re=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,$=re!==void 0?re.length:0;let Ce=0;U.morphAttributes.position!==void 0&&(Ce=1),U.morphAttributes.normal!==void 0&&(Ce=2),U.morphAttributes.color!==void 0&&(Ce=3);let Z,Se,J,me;if(ee){const ze=Si[ee];Z=ze.vertexShader,Se=ze.fragmentShader}else Z=y.vertexShader,Se=y.fragmentShader,o.update(y),J=o.getVertexShaderID(y),me=o.getFragmentShaderID(y);const de=t.getRenderTarget(),Ie=t.state.buffers.depth.getReversed(),Be=D.isInstancedMesh===!0,Ue=D.isBatchedMesh===!0,xt=!!y.map,$e=!!y.matcap,ot=!!k,mt=!!y.aoMap,We=!!y.lightMap,Bt=!!y.bumpMap,yt=!!y.normalMap,Rn=!!y.displacementMap,B=!!y.emissiveMap,kt=!!y.metalnessMap,Ye=!!y.roughnessMap,ft=y.anisotropy>0,ge=y.clearcoat>0,Tt=y.dispersion>0,R=y.iridescence>0,M=y.sheen>0,V=y.transmission>0,ne=ft&&!!y.anisotropyMap,ae=ge&&!!y.clearcoatMap,le=ge&&!!y.clearcoatNormalMap,pe=ge&&!!y.clearcoatRoughnessMap,Q=R&&!!y.iridescenceMap,ie=R&&!!y.iridescenceThicknessMap,ye=M&&!!y.sheenColorMap,we=M&&!!y.sheenRoughnessMap,fe=!!y.specularMap,ce=!!y.specularColorMap,Oe=!!y.specularIntensityMap,Ve=V&&!!y.transmissionMap,it=V&&!!y.thicknessMap,F=!!y.gradientMap,ue=!!y.alphaMap,te=y.alphaTest>0,Ee=!!y.alphaHash,he=!!y.extensions;let se=Ci;y.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(se=t.toneMapping);const Re={shaderID:ee,shaderType:y.type,shaderName:y.name,vertexShader:Z,fragmentShader:Se,defines:y.defines,customVertexShaderID:J,customFragmentShaderID:me,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Ue,batchingColor:Ue&&D._colorsTexture!==null,instancing:Be,instancingColor:Be&&D.instanceColor!==null,instancingMorph:Be&&D.morphTexture!==null,outputColorSpace:de===null?t.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:xt,matcap:$e,envMap:ot,envMapMode:ot&&k.mapping,envMapCubeUVHeight:K,aoMap:mt,lightMap:We,bumpMap:Bt,normalMap:yt,displacementMap:Rn,emissiveMap:B,normalMapObjectSpace:yt&&y.normalMapType===fC,normalMapTangentSpace:yt&&y.normalMapType===bh,packedNormalMap:yt&&y.normalMapType===bh&&LP(y.normalMap.format),metalnessMap:kt,roughnessMap:Ye,anisotropy:ft,anisotropyMap:ne,clearcoat:ge,clearcoatMap:ae,clearcoatNormalMap:le,clearcoatRoughnessMap:pe,dispersion:Tt,iridescence:R,iridescenceMap:Q,iridescenceThicknessMap:ie,sheen:M,sheenColorMap:ye,sheenRoughnessMap:we,specularMap:fe,specularColorMap:ce,specularIntensityMap:Oe,transmission:V,transmissionMap:Ve,thicknessMap:it,gradientMap:F,opaque:y.transparent===!1&&y.blending===Qs&&y.alphaToCoverage===!1,alphaMap:ue,alphaTest:te,alphaHash:Ee,combine:y.combine,mapUv:xt&&_(y.map.channel),aoMapUv:mt&&_(y.aoMap.channel),lightMapUv:We&&_(y.lightMap.channel),bumpMapUv:Bt&&_(y.bumpMap.channel),normalMapUv:yt&&_(y.normalMap.channel),displacementMapUv:Rn&&_(y.displacementMap.channel),emissiveMapUv:B&&_(y.emissiveMap.channel),metalnessMapUv:kt&&_(y.metalnessMap.channel),roughnessMapUv:Ye&&_(y.roughnessMap.channel),anisotropyMapUv:ne&&_(y.anisotropyMap.channel),clearcoatMapUv:ae&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:le&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:we&&_(y.sheenRoughnessMap.channel),specularMapUv:fe&&_(y.specularMap.channel),specularColorMapUv:ce&&_(y.specularColorMap.channel),specularIntensityMapUv:Oe&&_(y.specularIntensityMap.channel),transmissionMapUv:Ve&&_(y.transmissionMap.channel),thicknessMapUv:it&&_(y.thicknessMap.channel),alphaMapUv:ue&&_(y.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(yt||ft),vertexNormals:!!U.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!U.attributes.uv&&(xt||ue),fog:!!H,useFog:y.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||U.attributes.normal===void 0&&yt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Ie,skinning:D.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:Ce,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:se,decodeVideoTexture:xt&&y.map.isVideoTexture===!0&&Ze.getTransfer(y.map.colorSpace)===st,decodeVideoTextureEmissive:B&&y.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(y.emissiveMap.colorSpace)===st,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Vi,flipSided:y.side===An,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:he&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&y.extensions.multiDraw===!0||Ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Re.vertexUv1s=l.has(1),Re.vertexUv2s=l.has(2),Re.vertexUv3s=l.has(3),l.clear(),Re}function m(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)b.push(P),b.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(p(b,y),v(b,y),b.push(t.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function p(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function v(y,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),y.push(a.mask)}function S(y){const b=g[y.type];let P;if(b){const N=Si[b];P=KC.clone(N.uniforms)}else P=y.uniforms;return P}function E(y,b){let P=d.get(b);return P!==void 0?++P.usedTimes:(P=new AP(t,b,y,r),u.push(P),d.set(b,P)),P}function A(y){if(--y.usedTimes===0){const b=u.indexOf(y);u[b]=u[u.length-1],u.pop(),d.delete(y.cacheKey),y.destroy()}}function w(y){o.remove(y)}function C(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:S,acquireProgram:E,releaseProgram:A,releaseShaderCache:w,programs:u,dispose:C}}function IP(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function UP(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Zv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Jv(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f){let g=0;return f.isInstancedMesh&&(g+=2),f.isSkinnedMesh&&(g+=1),g}function o(f,g,_,x,m,p){let v=t[e];return v===void 0?(v={id:f.id,object:f,geometry:g,material:_,materialVariant:a(f),groupOrder:x,renderOrder:f.renderOrder,z:m,group:p},t[e]=v):(v.id=f.id,v.object=f,v.geometry=g,v.material=_,v.materialVariant=a(f),v.groupOrder=x,v.renderOrder=f.renderOrder,v.z=m,v.group=p),e++,v}function l(f,g,_,x,m,p){const v=o(f,g,_,x,m,p);_.transmission>0?i.push(v):_.transparent===!0?r.push(v):n.push(v)}function u(f,g,_,x,m,p){const v=o(f,g,_,x,m,p);_.transmission>0?i.unshift(v):_.transparent===!0?r.unshift(v):n.unshift(v)}function d(f,g){n.length>1&&n.sort(f||UP),i.length>1&&i.sort(g||Zv),r.length>1&&r.sort(g||Zv)}function h(){for(let f=e,g=t.length;f<g;f++){const _=t[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:u,finish:h,sort:d}}function FP(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Jv,t.set(i,[a])):r>=s.length?(a=new Jv,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function OP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new G,color:new rt};break;case"SpotLight":n={position:new G,direction:new G,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new rt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":n={color:new rt,position:new G,halfWidth:new G,halfHeight:new G};break}return t[e.id]=n,n}}}function BP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let kP=0;function zP(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function jP(t){const e=new OP,n=BP(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new G);const r=new G,s=new Dt,a=new Dt;function o(u){let d=0,h=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let g=0,_=0,x=0,m=0,p=0,v=0,S=0,E=0,A=0,w=0,C=0;u.sort(zP);for(let b=0,P=u.length;b<P;b++){const N=u[b],D=N.color,L=N.intensity,H=N.distance;let U=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===fs?U=N.shadow.map.texture:U=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)d+=D.r*L,h+=D.g*L,f+=D.b*L;else if(N.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(N.sh.coefficients[O],L);C++}else if(N.isDirectionalLight){const O=e.get(N);if(O.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const j=N.shadow,k=n.get(N);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,i.directionalShadow[g]=k,i.directionalShadowMap[g]=U,i.directionalShadowMatrix[g]=N.shadow.matrix,v++}i.directional[g]=O,g++}else if(N.isSpotLight){const O=e.get(N);O.position.setFromMatrixPosition(N.matrixWorld),O.color.copy(D).multiplyScalar(L),O.distance=H,O.coneCos=Math.cos(N.angle),O.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),O.decay=N.decay,i.spot[x]=O;const j=N.shadow;if(N.map&&(i.spotLightMap[A]=N.map,A++,j.updateMatrices(N),N.castShadow&&w++),i.spotLightMatrix[x]=j.matrix,N.castShadow){const k=n.get(N);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,i.spotShadow[x]=k,i.spotShadowMap[x]=U,E++}x++}else if(N.isRectAreaLight){const O=e.get(N);O.color.copy(D).multiplyScalar(L),O.halfWidth.set(N.width*.5,0,0),O.halfHeight.set(0,N.height*.5,0),i.rectArea[m]=O,m++}else if(N.isPointLight){const O=e.get(N);if(O.color.copy(N.color).multiplyScalar(N.intensity),O.distance=N.distance,O.decay=N.decay,N.castShadow){const j=N.shadow,k=n.get(N);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,k.shadowCameraNear=j.camera.near,k.shadowCameraFar=j.camera.far,i.pointShadow[_]=k,i.pointShadowMap[_]=U,i.pointShadowMatrix[_]=N.shadow.matrix,S++}i.point[_]=O,_++}else if(N.isHemisphereLight){const O=e.get(N);O.skyColor.copy(N.color).multiplyScalar(L),O.groundColor.copy(N.groundColor).multiplyScalar(L),i.hemi[p]=O,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=f;const y=i.hash;(y.directionalLength!==g||y.pointLength!==_||y.spotLength!==x||y.rectAreaLength!==m||y.hemiLength!==p||y.numDirectionalShadows!==v||y.numPointShadows!==S||y.numSpotShadows!==E||y.numSpotMaps!==A||y.numLightProbes!==C)&&(i.directional.length=g,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=E+A-w,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,y.directionalLength=g,y.pointLength=_,y.spotLength=x,y.rectAreaLength=m,y.hemiLength=p,y.numDirectionalShadows=v,y.numPointShadows=S,y.numSpotShadows=E,y.numSpotMaps=A,y.numLightProbes=C,i.version=kP++)}function l(u,d){let h=0,f=0,g=0,_=0,x=0;const m=d.matrixWorldInverse;for(let p=0,v=u.length;p<v;p++){const S=u[p];if(S.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),h++}else if(S.isSpotLight){const E=i.spot[g];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),g++}else if(S.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(m),a.identity(),s.copy(S.matrixWorld),s.premultiply(m),a.extractRotation(s),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const E=i.hemi[x];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function Qv(t){const e=new jP(t),n=[],i=[],r=[];function s(f){h.camera=f,n.length=0,i.length=0,r.length=0}function a(f){n.push(f)}function o(f){i.push(f)}function l(f){r.push(f)}function u(){e.setup(n)}function d(f){e.setupView(n,f)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:u,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function VP(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Qv(t),e.set(r,[o])):s>=a.length?(o=new Qv(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const HP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GP=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,WP=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],XP=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],e_=new Dt,ja=new G,Ld=new G;function qP(t,e,n){let i=new Kp;const r=new nt,s=new nt,a=new At,o=new eA,l=new tA,u={},d=n.maxTextureSize,h={[Ir]:An,[An]:Ir,[Vi]:Vi},f=new Li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:HP,fragmentShader:GP}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const _=new Qn;_.setAttribute("position",new Ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new an(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jl;let p=this.type;this.render=function(w,C,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Hb&&(Fe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Jl);const b=t.getRenderTarget(),P=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),D=t.state;D.setBlending(qi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const L=p!==this.type;L&&C.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(U=>U.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,U=w.length;H<U;H++){const O=w[H],j=O.shadow;if(j===void 0){Fe("WebGLShadowMap:",O,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const k=j.getFrameExtents();r.multiply(k),s.copy(j.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/k.x),r.x=s.x*k.x,j.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/k.y),r.y=s.y*k.y,j.mapSize.y=s.y));const K=t.state.buffers.depth.getReversed();if(j.camera._reversedDepth=K,j.map===null||L===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===$a){if(O.isPointLight){Fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new Ai(r.x,r.y,{format:fs,type:Qi,minFilter:cn,magFilter:cn,generateMipmaps:!1}),j.map.texture.name=O.name+".shadowMap",j.map.depthTexture=new fa(r.x,r.y,Mi),j.map.depthTexture.name=O.name+".shadowMapDepth",j.map.depthTexture.format=er,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Kt,j.map.depthTexture.magFilter=Kt}else O.isPointLight?(j.map=new ky(r.x),j.map.depthTexture=new $C(r.x,Pi)):(j.map=new Ai(r.x,r.y),j.map.depthTexture=new fa(r.x,r.y,Pi)),j.map.depthTexture.name=O.name+".shadowMap",j.map.depthTexture.format=er,this.type===Jl?(j.map.depthTexture.compareFunction=K?qp:Xp,j.map.depthTexture.minFilter=cn,j.map.depthTexture.magFilter=cn):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Kt,j.map.depthTexture.magFilter=Kt);j.camera.updateProjectionMatrix()}const ee=j.map.isWebGLCubeRenderTarget?6:1;for(let re=0;re<ee;re++){if(j.map.isWebGLCubeRenderTarget)t.setRenderTarget(j.map,re),t.clear();else{re===0&&(t.setRenderTarget(j.map),t.clear());const $=j.getViewport(re);a.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),D.viewport(a)}if(O.isPointLight){const $=j.camera,Ce=j.matrix,Z=O.distance||$.far;Z!==$.far&&($.far=Z,$.updateProjectionMatrix()),ja.setFromMatrixPosition(O.matrixWorld),$.position.copy(ja),Ld.copy($.position),Ld.add(WP[re]),$.up.copy(XP[re]),$.lookAt(Ld),$.updateMatrixWorld(),Ce.makeTranslation(-ja.x,-ja.y,-ja.z),e_.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),j._frustum.setFromProjectionMatrix(e_,$.coordinateSystem,$.reversedDepth)}else j.updateMatrices(O);i=j.getFrustum(),E(C,y,j.camera,O,this.type)}j.isPointLightShadow!==!0&&this.type===$a&&v(j,y),j.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(b,P,N)};function v(w,C){const y=e.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,g.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ai(r.x,r.y,{format:fs,type:Qi})),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(C,null,y,f,x,null),g.uniforms.shadow_pass.value=w.mapPass.texture,g.uniforms.resolution.value=w.mapSize,g.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(C,null,y,g,x,null)}function S(w,C,y,b){let P=null;const N=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)P=N;else if(P=y.isPointLight===!0?l:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const D=P.uuid,L=C.uuid;let H=u[D];H===void 0&&(H={},u[D]=H);let U=H[L];U===void 0&&(U=P.clone(),H[L]=U,C.addEventListener("dispose",A)),P=U}if(P.visible=C.visible,P.wireframe=C.wireframe,b===$a?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:h[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,y.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const D=t.properties.get(P);D.light=y}return P}function E(w,C,y,b,P){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===$a)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);const L=e.update(w),H=w.material;if(Array.isArray(H)){const U=L.groups;for(let O=0,j=U.length;O<j;O++){const k=U[O],K=H[k.materialIndex];if(K&&K.visible){const ee=S(w,K,b,P);w.onBeforeShadow(t,w,C,y,L,ee,k),t.renderBufferDirect(y,null,L,ee,w,k),w.onAfterShadow(t,w,C,y,L,ee,k)}}}else if(H.visible){const U=S(w,H,b,P);w.onBeforeShadow(t,w,C,y,L,U,null),t.renderBufferDirect(y,null,L,U,w,null),w.onAfterShadow(t,w,C,y,L,U,null)}}const D=w.children;for(let L=0,H=D.length;L<H;L++)E(D[L],C,y,b,P)}function A(w){w.target.removeEventListener("dispose",A);for(const y in u){const b=u[y],P=w.target.uuid;P in b&&(b[P].dispose(),delete b[P])}}}function $P(t,e){function n(){let F=!1;const ue=new At;let te=null;const Ee=new At(0,0,0,0);return{setMask:function(he){te!==he&&!F&&(t.colorMask(he,he,he,he),te=he)},setLocked:function(he){F=he},setClear:function(he,se,Re,ze,Rt){Rt===!0&&(he*=ze,se*=ze,Re*=ze),ue.set(he,se,Re,ze),Ee.equals(ue)===!1&&(t.clearColor(he,se,Re,ze),Ee.copy(ue))},reset:function(){F=!1,te=null,Ee.set(-1,0,0,0)}}}function i(){let F=!1,ue=!1,te=null,Ee=null,he=null;return{setReversed:function(se){if(ue!==se){const Re=e.get("EXT_clip_control");se?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),ue=se;const ze=he;he=null,this.setClear(ze)}},getReversed:function(){return ue},setTest:function(se){se?de(t.DEPTH_TEST):Ie(t.DEPTH_TEST)},setMask:function(se){te!==se&&!F&&(t.depthMask(se),te=se)},setFunc:function(se){if(ue&&(se=EC[se]),Ee!==se){switch(se){case jf:t.depthFunc(t.NEVER);break;case Vf:t.depthFunc(t.ALWAYS);break;case Hf:t.depthFunc(t.LESS);break;case ua:t.depthFunc(t.LEQUAL);break;case Gf:t.depthFunc(t.EQUAL);break;case Wf:t.depthFunc(t.GEQUAL);break;case Xf:t.depthFunc(t.GREATER);break;case qf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Ee=se}},setLocked:function(se){F=se},setClear:function(se){he!==se&&(he=se,ue&&(se=1-se),t.clearDepth(se))},reset:function(){F=!1,te=null,Ee=null,he=null,ue=!1}}}function r(){let F=!1,ue=null,te=null,Ee=null,he=null,se=null,Re=null,ze=null,Rt=null;return{setTest:function(lt){F||(lt?de(t.STENCIL_TEST):Ie(t.STENCIL_TEST))},setMask:function(lt){ue!==lt&&!F&&(t.stencilMask(lt),ue=lt)},setFunc:function(lt,Ii,mi){(te!==lt||Ee!==Ii||he!==mi)&&(t.stencilFunc(lt,Ii,mi),te=lt,Ee=Ii,he=mi)},setOp:function(lt,Ii,mi){(se!==lt||Re!==Ii||ze!==mi)&&(t.stencilOp(lt,Ii,mi),se=lt,Re=Ii,ze=mi)},setLocked:function(lt){F=lt},setClear:function(lt){Rt!==lt&&(t.clearStencil(lt),Rt=lt)},reset:function(){F=!1,ue=null,te=null,Ee=null,he=null,se=null,Re=null,ze=null,Rt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,u=new WeakMap;let d={},h={},f={},g=new WeakMap,_=[],x=null,m=!1,p=null,v=null,S=null,E=null,A=null,w=null,C=null,y=new rt(0,0,0),b=0,P=!1,N=null,D=null,L=null,H=null,U=null;const O=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,k=0;const K=t.getParameter(t.VERSION);K.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(K)[1]),j=k>=1):K.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),j=k>=2);let ee=null,re={};const $=t.getParameter(t.SCISSOR_BOX),Ce=t.getParameter(t.VIEWPORT),Z=new At().fromArray($),Se=new At().fromArray(Ce);function J(F,ue,te,Ee){const he=new Uint8Array(4),se=t.createTexture();t.bindTexture(F,se),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Re=0;Re<te;Re++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(ue,0,t.RGBA,1,1,Ee,0,t.RGBA,t.UNSIGNED_BYTE,he):t.texImage2D(ue+Re,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,he);return se}const me={};me[t.TEXTURE_2D]=J(t.TEXTURE_2D,t.TEXTURE_2D,1),me[t.TEXTURE_CUBE_MAP]=J(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[t.TEXTURE_2D_ARRAY]=J(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),me[t.TEXTURE_3D]=J(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),de(t.DEPTH_TEST),a.setFunc(ua),Bt(!1),yt(ev),de(t.CULL_FACE),mt(qi);function de(F){d[F]!==!0&&(t.enable(F),d[F]=!0)}function Ie(F){d[F]!==!1&&(t.disable(F),d[F]=!1)}function Be(F,ue){return f[F]!==ue?(t.bindFramebuffer(F,ue),f[F]=ue,F===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=ue),F===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=ue),!0):!1}function Ue(F,ue){let te=_,Ee=!1;if(F){te=g.get(ue),te===void 0&&(te=[],g.set(ue,te));const he=F.textures;if(te.length!==he.length||te[0]!==t.COLOR_ATTACHMENT0){for(let se=0,Re=he.length;se<Re;se++)te[se]=t.COLOR_ATTACHMENT0+se;te.length=he.length,Ee=!0}}else te[0]!==t.BACK&&(te[0]=t.BACK,Ee=!0);Ee&&t.drawBuffers(te)}function xt(F){return x!==F?(t.useProgram(F),x=F,!0):!1}const $e={[$r]:t.FUNC_ADD,[Wb]:t.FUNC_SUBTRACT,[Xb]:t.FUNC_REVERSE_SUBTRACT};$e[qb]=t.MIN,$e[$b]=t.MAX;const ot={[Yb]:t.ZERO,[Kb]:t.ONE,[Zb]:t.SRC_COLOR,[kf]:t.SRC_ALPHA,[iC]:t.SRC_ALPHA_SATURATE,[tC]:t.DST_COLOR,[Qb]:t.DST_ALPHA,[Jb]:t.ONE_MINUS_SRC_COLOR,[zf]:t.ONE_MINUS_SRC_ALPHA,[nC]:t.ONE_MINUS_DST_COLOR,[eC]:t.ONE_MINUS_DST_ALPHA,[rC]:t.CONSTANT_COLOR,[sC]:t.ONE_MINUS_CONSTANT_COLOR,[aC]:t.CONSTANT_ALPHA,[oC]:t.ONE_MINUS_CONSTANT_ALPHA};function mt(F,ue,te,Ee,he,se,Re,ze,Rt,lt){if(F===qi){m===!0&&(Ie(t.BLEND),m=!1);return}if(m===!1&&(de(t.BLEND),m=!0),F!==Gb){if(F!==p||lt!==P){if((v!==$r||A!==$r)&&(t.blendEquation(t.FUNC_ADD),v=$r,A=$r),lt)switch(F){case Qs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case tv:t.blendFunc(t.ONE,t.ONE);break;case nv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case iv:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:et("WebGLState: Invalid blending: ",F);break}else switch(F){case Qs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case tv:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case nv:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case iv:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",F);break}S=null,E=null,w=null,C=null,y.set(0,0,0),b=0,p=F,P=lt}return}he=he||ue,se=se||te,Re=Re||Ee,(ue!==v||he!==A)&&(t.blendEquationSeparate($e[ue],$e[he]),v=ue,A=he),(te!==S||Ee!==E||se!==w||Re!==C)&&(t.blendFuncSeparate(ot[te],ot[Ee],ot[se],ot[Re]),S=te,E=Ee,w=se,C=Re),(ze.equals(y)===!1||Rt!==b)&&(t.blendColor(ze.r,ze.g,ze.b,Rt),y.copy(ze),b=Rt),p=F,P=!1}function We(F,ue){F.side===Vi?Ie(t.CULL_FACE):de(t.CULL_FACE);let te=F.side===An;ue&&(te=!te),Bt(te),F.blending===Qs&&F.transparent===!1?mt(qi):mt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const Ee=F.stencilWrite;o.setTest(Ee),Ee&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),B(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?de(t.SAMPLE_ALPHA_TO_COVERAGE):Ie(t.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(F){N!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),N=F)}function yt(F){F!==jb?(de(t.CULL_FACE),F!==D&&(F===ev?t.cullFace(t.BACK):F===Vb?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ie(t.CULL_FACE),D=F}function Rn(F){F!==L&&(j&&t.lineWidth(F),L=F)}function B(F,ue,te){F?(de(t.POLYGON_OFFSET_FILL),(H!==ue||U!==te)&&(H=ue,U=te,a.getReversed()&&(ue=-ue),t.polygonOffset(ue,te))):Ie(t.POLYGON_OFFSET_FILL)}function kt(F){F?de(t.SCISSOR_TEST):Ie(t.SCISSOR_TEST)}function Ye(F){F===void 0&&(F=t.TEXTURE0+O-1),ee!==F&&(t.activeTexture(F),ee=F)}function ft(F,ue,te){te===void 0&&(ee===null?te=t.TEXTURE0+O-1:te=ee);let Ee=re[te];Ee===void 0&&(Ee={type:void 0,texture:void 0},re[te]=Ee),(Ee.type!==F||Ee.texture!==ue)&&(ee!==te&&(t.activeTexture(te),ee=te),t.bindTexture(F,ue||me[F]),Ee.type=F,Ee.texture=ue)}function ge(){const F=re[ee];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Tt(){try{t.compressedTexImage2D(...arguments)}catch(F){et("WebGLState:",F)}}function R(){try{t.compressedTexImage3D(...arguments)}catch(F){et("WebGLState:",F)}}function M(){try{t.texSubImage2D(...arguments)}catch(F){et("WebGLState:",F)}}function V(){try{t.texSubImage3D(...arguments)}catch(F){et("WebGLState:",F)}}function ne(){try{t.compressedTexSubImage2D(...arguments)}catch(F){et("WebGLState:",F)}}function ae(){try{t.compressedTexSubImage3D(...arguments)}catch(F){et("WebGLState:",F)}}function le(){try{t.texStorage2D(...arguments)}catch(F){et("WebGLState:",F)}}function pe(){try{t.texStorage3D(...arguments)}catch(F){et("WebGLState:",F)}}function Q(){try{t.texImage2D(...arguments)}catch(F){et("WebGLState:",F)}}function ie(){try{t.texImage3D(...arguments)}catch(F){et("WebGLState:",F)}}function ye(F){return h[F]!==void 0?h[F]:t.getParameter(F)}function we(F,ue){h[F]!==ue&&(t.pixelStorei(F,ue),h[F]=ue)}function fe(F){Z.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),Z.copy(F))}function ce(F){Se.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),Se.copy(F))}function Oe(F,ue){let te=u.get(ue);te===void 0&&(te=new WeakMap,u.set(ue,te));let Ee=te.get(F);Ee===void 0&&(Ee=t.getUniformBlockIndex(ue,F.name),te.set(F,Ee))}function Ve(F,ue){const Ee=u.get(ue).get(F);l.get(ue)!==Ee&&(t.uniformBlockBinding(ue,Ee,F.__bindingPointIndex),l.set(ue,Ee))}function it(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),d={},h={},ee=null,re={},f={},g=new WeakMap,_=[],x=null,m=!1,p=null,v=null,S=null,E=null,A=null,w=null,C=null,y=new rt(0,0,0),b=0,P=!1,N=null,D=null,L=null,H=null,U=null,Z.set(0,0,t.canvas.width,t.canvas.height),Se.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:de,disable:Ie,bindFramebuffer:Be,drawBuffers:Ue,useProgram:xt,setBlending:mt,setMaterial:We,setFlipSided:Bt,setCullFace:yt,setLineWidth:Rn,setPolygonOffset:B,setScissorTest:kt,activeTexture:Ye,bindTexture:ft,unbindTexture:ge,compressedTexImage2D:Tt,compressedTexImage3D:R,texImage2D:Q,texImage3D:ie,pixelStorei:we,getParameter:ye,updateUBOMapping:Oe,uniformBlockBinding:Ve,texStorage2D:le,texStorage3D:pe,texSubImage2D:M,texSubImage3D:V,compressedTexSubImage2D:ne,compressedTexSubImage3D:ae,scissor:fe,viewport:ce,reset:it}}function YP(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new nt,d=new WeakMap,h=new Set;let f;const g=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,M){return _?new OffscreenCanvas(R,M):No("canvas")}function m(R,M,V){let ne=1;const ae=Tt(R);if((ae.width>V||ae.height>V)&&(ne=V/Math.max(ae.width,ae.height)),ne<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const le=Math.floor(ne*ae.width),pe=Math.floor(ne*ae.height);f===void 0&&(f=x(le,pe));const Q=M?x(le,pe):f;return Q.width=le,Q.height=pe,Q.getContext("2d").drawImage(R,0,0,le,pe),Fe("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+le+"x"+pe+")."),Q}else return"data"in R&&Fe("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),R;return R}function p(R){return R.generateMipmaps}function v(R){t.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function E(R,M,V,ne,ae,le=!1){if(R!==null){if(t[R]!==void 0)return t[R];Fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let pe;ne&&(pe=e.get("EXT_texture_norm16"),pe||Fe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=M;if(M===t.RED&&(V===t.FLOAT&&(Q=t.R32F),V===t.HALF_FLOAT&&(Q=t.R16F),V===t.UNSIGNED_BYTE&&(Q=t.R8),V===t.UNSIGNED_SHORT&&pe&&(Q=pe.R16_EXT),V===t.SHORT&&pe&&(Q=pe.R16_SNORM_EXT)),M===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&(Q=t.R8UI),V===t.UNSIGNED_SHORT&&(Q=t.R16UI),V===t.UNSIGNED_INT&&(Q=t.R32UI),V===t.BYTE&&(Q=t.R8I),V===t.SHORT&&(Q=t.R16I),V===t.INT&&(Q=t.R32I)),M===t.RG&&(V===t.FLOAT&&(Q=t.RG32F),V===t.HALF_FLOAT&&(Q=t.RG16F),V===t.UNSIGNED_BYTE&&(Q=t.RG8),V===t.UNSIGNED_SHORT&&pe&&(Q=pe.RG16_EXT),V===t.SHORT&&pe&&(Q=pe.RG16_SNORM_EXT)),M===t.RG_INTEGER&&(V===t.UNSIGNED_BYTE&&(Q=t.RG8UI),V===t.UNSIGNED_SHORT&&(Q=t.RG16UI),V===t.UNSIGNED_INT&&(Q=t.RG32UI),V===t.BYTE&&(Q=t.RG8I),V===t.SHORT&&(Q=t.RG16I),V===t.INT&&(Q=t.RG32I)),M===t.RGB_INTEGER&&(V===t.UNSIGNED_BYTE&&(Q=t.RGB8UI),V===t.UNSIGNED_SHORT&&(Q=t.RGB16UI),V===t.UNSIGNED_INT&&(Q=t.RGB32UI),V===t.BYTE&&(Q=t.RGB8I),V===t.SHORT&&(Q=t.RGB16I),V===t.INT&&(Q=t.RGB32I)),M===t.RGBA_INTEGER&&(V===t.UNSIGNED_BYTE&&(Q=t.RGBA8UI),V===t.UNSIGNED_SHORT&&(Q=t.RGBA16UI),V===t.UNSIGNED_INT&&(Q=t.RGBA32UI),V===t.BYTE&&(Q=t.RGBA8I),V===t.SHORT&&(Q=t.RGBA16I),V===t.INT&&(Q=t.RGBA32I)),M===t.RGB&&(V===t.UNSIGNED_SHORT&&pe&&(Q=pe.RGB16_EXT),V===t.SHORT&&pe&&(Q=pe.RGB16_SNORM_EXT),V===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),V===t.UNSIGNED_INT_10F_11F_11F_REV&&(Q=t.R11F_G11F_B10F)),M===t.RGBA){const ie=le?Bc:Ze.getTransfer(ae);V===t.FLOAT&&(Q=t.RGBA32F),V===t.HALF_FLOAT&&(Q=t.RGBA16F),V===t.UNSIGNED_BYTE&&(Q=ie===st?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT&&pe&&(Q=pe.RGBA16_EXT),V===t.SHORT&&pe&&(Q=pe.RGBA16_SNORM_EXT),V===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function A(R,M){let V;return R?M===null||M===Pi||M===Ao?V=t.DEPTH24_STENCIL8:M===Mi?V=t.DEPTH32F_STENCIL8:M===Co&&(V=t.DEPTH24_STENCIL8,Fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Pi||M===Ao?V=t.DEPTH_COMPONENT24:M===Mi?V=t.DEPTH_COMPONENT32F:M===Co&&(V=t.DEPTH_COMPONENT16),V}function w(R,M){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Kt&&R.minFilter!==cn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function C(R){const M=R.target;M.removeEventListener("dispose",C),b(M),M.isVideoTexture&&d.delete(M),M.isHTMLTexture&&h.delete(M)}function y(R){const M=R.target;M.removeEventListener("dispose",y),N(M)}function b(R){const M=i.get(R);if(M.__webglInit===void 0)return;const V=R.source,ne=g.get(V);if(ne){const ae=ne[M.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&P(R),Object.keys(ne).length===0&&g.delete(V)}i.remove(R)}function P(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const V=R.source,ne=g.get(V);delete ne[M.__cacheKey],a.memory.textures--}function N(R){const M=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(M.__webglFramebuffer[ne]))for(let ae=0;ae<M.__webglFramebuffer[ne].length;ae++)t.deleteFramebuffer(M.__webglFramebuffer[ne][ae]);else t.deleteFramebuffer(M.__webglFramebuffer[ne]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[ne])}else{if(Array.isArray(M.__webglFramebuffer))for(let ne=0;ne<M.__webglFramebuffer.length;ne++)t.deleteFramebuffer(M.__webglFramebuffer[ne]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ne=0;ne<M.__webglColorRenderbuffer.length;ne++)M.__webglColorRenderbuffer[ne]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[ne]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const V=R.textures;for(let ne=0,ae=V.length;ne<ae;ne++){const le=i.get(V[ne]);le.__webglTexture&&(t.deleteTexture(le.__webglTexture),a.memory.textures--),i.remove(V[ne])}i.remove(R)}let D=0;function L(){D=0}function H(){return D}function U(R){D=R}function O(){const R=D;return R>=r.maxTextures&&Fe("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),D+=1,R}function j(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function k(R,M){const V=i.get(R);if(R.isVideoTexture&&ft(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&V.__version!==R.version){const ne=R.image;if(ne===null)Fe("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)Fe("WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(V,R,M);return}}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+M)}function K(R,M){const V=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){Ie(V,R,M);return}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+M)}function ee(R,M){const V=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){Ie(V,R,M);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+M)}function re(R,M){const V=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&V.__version!==R.version){Be(V,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+M)}const $={[$f]:t.REPEAT,[Wi]:t.CLAMP_TO_EDGE,[Yf]:t.MIRRORED_REPEAT},Ce={[Kt]:t.NEAREST,[uC]:t.NEAREST_MIPMAP_NEAREST,[dl]:t.NEAREST_MIPMAP_LINEAR,[cn]:t.LINEAR,[ed]:t.LINEAR_MIPMAP_NEAREST,[es]:t.LINEAR_MIPMAP_LINEAR},Z={[hC]:t.NEVER,[_C]:t.ALWAYS,[pC]:t.LESS,[Xp]:t.LEQUAL,[mC]:t.EQUAL,[qp]:t.GEQUAL,[gC]:t.GREATER,[vC]:t.NOTEQUAL};function Se(R,M){if(M.type===Mi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===cn||M.magFilter===ed||M.magFilter===dl||M.magFilter===es||M.minFilter===cn||M.minFilter===ed||M.minFilter===dl||M.minFilter===es)&&Fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,$[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,$[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,$[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Ce[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Ce[M.minFilter]),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Z[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Kt||M.minFilter!==dl&&M.minFilter!==es||M.type===Mi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function J(R,M){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",C));const ne=M.source;let ae=g.get(ne);ae===void 0&&(ae={},g.set(ne,ae));const le=j(M);if(le!==R.__cacheKey){ae[le]===void 0&&(ae[le]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ae[le].usedTimes++;const pe=ae[R.__cacheKey];pe!==void 0&&(ae[R.__cacheKey].usedTimes--,pe.usedTimes===0&&P(M)),R.__cacheKey=le,R.__webglTexture=ae[le].texture}return V}function me(R,M,V){return Math.floor(Math.floor(R/V)/M)}function de(R,M,V,ne){const le=R.updateRanges;if(le.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,M.width,M.height,V,ne,M.data);else{le.sort((we,fe)=>we.start-fe.start);let pe=0;for(let we=1;we<le.length;we++){const fe=le[pe],ce=le[we],Oe=fe.start+fe.count,Ve=me(ce.start,M.width,4),it=me(fe.start,M.width,4);ce.start<=Oe+1&&Ve===it&&me(ce.start+ce.count-1,M.width,4)===Ve?fe.count=Math.max(fe.count,ce.start+ce.count-fe.start):(++pe,le[pe]=ce)}le.length=pe+1;const Q=n.getParameter(t.UNPACK_ROW_LENGTH),ie=n.getParameter(t.UNPACK_SKIP_PIXELS),ye=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,M.width);for(let we=0,fe=le.length;we<fe;we++){const ce=le[we],Oe=Math.floor(ce.start/4),Ve=Math.ceil(ce.count/4),it=Oe%M.width,F=Math.floor(Oe/M.width),ue=Ve,te=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,it),n.pixelStorei(t.UNPACK_SKIP_ROWS,F),n.texSubImage2D(t.TEXTURE_2D,0,it,F,ue,te,V,ne,M.data)}R.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Q),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ie),n.pixelStorei(t.UNPACK_SKIP_ROWS,ye)}}function Ie(R,M,V){let ne=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ne=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ne=t.TEXTURE_3D);const ae=J(R,M),le=M.source;n.bindTexture(ne,R.__webglTexture,t.TEXTURE0+V);const pe=i.get(le);if(le.version!==pe.__version||ae===!0){if(n.activeTexture(t.TEXTURE0+V),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const te=Ze.getPrimaries(Ze.workingColorSpace),Ee=M.colorSpace===vr?null:Ze.getPrimaries(M.colorSpace),he=M.colorSpace===vr||te===Ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,he)}n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment);let ie=m(M.image,!1,r.maxTextureSize);ie=ge(M,ie);const ye=s.convert(M.format,M.colorSpace),we=s.convert(M.type);let fe=E(M.internalFormat,ye,we,M.normalized,M.colorSpace,M.isVideoTexture);Se(ne,M);let ce;const Oe=M.mipmaps,Ve=M.isVideoTexture!==!0,it=pe.__version===void 0||ae===!0,F=le.dataReady,ue=w(M,ie);if(M.isDepthTexture)fe=A(M.format===ts,M.type),it&&(Ve?n.texStorage2D(t.TEXTURE_2D,1,fe,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,fe,ie.width,ie.height,0,ye,we,null));else if(M.isDataTexture)if(Oe.length>0){Ve&&it&&n.texStorage2D(t.TEXTURE_2D,ue,fe,Oe[0].width,Oe[0].height);for(let te=0,Ee=Oe.length;te<Ee;te++)ce=Oe[te],Ve?F&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,ce.width,ce.height,ye,we,ce.data):n.texImage2D(t.TEXTURE_2D,te,fe,ce.width,ce.height,0,ye,we,ce.data);M.generateMipmaps=!1}else Ve?(it&&n.texStorage2D(t.TEXTURE_2D,ue,fe,ie.width,ie.height),F&&de(M,ie,ye,we)):n.texImage2D(t.TEXTURE_2D,0,fe,ie.width,ie.height,0,ye,we,ie.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ve&&it&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,fe,Oe[0].width,Oe[0].height,ie.depth);for(let te=0,Ee=Oe.length;te<Ee;te++)if(ce=Oe[te],M.format!==ui)if(ye!==null)if(Ve){if(F)if(M.layerUpdates.size>0){const he=Pv(ce.width,ce.height,M.format,M.type);for(const se of M.layerUpdates){const Re=ce.data.subarray(se*he/ce.data.BYTES_PER_ELEMENT,(se+1)*he/ce.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,se,ce.width,ce.height,1,ye,Re)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,ce.width,ce.height,ie.depth,ye,ce.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,te,fe,ce.width,ce.height,ie.depth,0,ce.data,0,0);else Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,ce.width,ce.height,ie.depth,ye,we,ce.data):n.texImage3D(t.TEXTURE_2D_ARRAY,te,fe,ce.width,ce.height,ie.depth,0,ye,we,ce.data)}else{Ve&&it&&n.texStorage2D(t.TEXTURE_2D,ue,fe,Oe[0].width,Oe[0].height);for(let te=0,Ee=Oe.length;te<Ee;te++)ce=Oe[te],M.format!==ui?ye!==null?Ve?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,te,0,0,ce.width,ce.height,ye,ce.data):n.compressedTexImage2D(t.TEXTURE_2D,te,fe,ce.width,ce.height,0,ce.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?F&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,ce.width,ce.height,ye,we,ce.data):n.texImage2D(t.TEXTURE_2D,te,fe,ce.width,ce.height,0,ye,we,ce.data)}else if(M.isDataArrayTexture)if(Ve){if(it&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,fe,ie.width,ie.height,ie.depth),F)if(M.layerUpdates.size>0){const te=Pv(ie.width,ie.height,M.format,M.type);for(const Ee of M.layerUpdates){const he=ie.data.subarray(Ee*te/ie.data.BYTES_PER_ELEMENT,(Ee+1)*te/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Ee,ie.width,ie.height,1,ye,we,he)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ye,we,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,fe,ie.width,ie.height,ie.depth,0,ye,we,ie.data);else if(M.isData3DTexture)Ve?(it&&n.texStorage3D(t.TEXTURE_3D,ue,fe,ie.width,ie.height,ie.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ye,we,ie.data)):n.texImage3D(t.TEXTURE_3D,0,fe,ie.width,ie.height,ie.depth,0,ye,we,ie.data);else if(M.isFramebufferTexture){if(it)if(Ve)n.texStorage2D(t.TEXTURE_2D,ue,fe,ie.width,ie.height);else{let te=ie.width,Ee=ie.height;for(let he=0;he<ue;he++)n.texImage2D(t.TEXTURE_2D,he,fe,te,Ee,0,ye,we,null),te>>=1,Ee>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in t){const te=t.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),ie.parentNode!==te){te.appendChild(ie),h.add(M),te.onpaint=ze=>{const Rt=ze.changedElements;for(const lt of h)Rt.includes(lt.image)&&(lt.needsUpdate=!0)},te.requestPaint();return}const Ee=0,he=t.RGBA,se=t.RGBA,Re=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,Ee,he,se,Re,ie),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Oe.length>0){if(Ve&&it){const te=Tt(Oe[0]);n.texStorage2D(t.TEXTURE_2D,ue,fe,te.width,te.height)}for(let te=0,Ee=Oe.length;te<Ee;te++)ce=Oe[te],Ve?F&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,ye,we,ce):n.texImage2D(t.TEXTURE_2D,te,fe,ye,we,ce);M.generateMipmaps=!1}else if(Ve){if(it){const te=Tt(ie);n.texStorage2D(t.TEXTURE_2D,ue,fe,te.width,te.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ye,we,ie)}else n.texImage2D(t.TEXTURE_2D,0,fe,ye,we,ie);p(M)&&v(ne),pe.__version=le.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Be(R,M,V){if(M.image.length!==6)return;const ne=J(R,M),ae=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+V);const le=i.get(ae);if(ae.version!==le.__version||ne===!0){n.activeTexture(t.TEXTURE0+V);const pe=Ze.getPrimaries(Ze.workingColorSpace),Q=M.colorSpace===vr?null:Ze.getPrimaries(M.colorSpace),ie=M.colorSpace===vr||pe===Q?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const ye=M.isCompressedTexture||M.image[0].isCompressedTexture,we=M.image[0]&&M.image[0].isDataTexture,fe=[];for(let se=0;se<6;se++)!ye&&!we?fe[se]=m(M.image[se],!0,r.maxCubemapSize):fe[se]=we?M.image[se].image:M.image[se],fe[se]=ge(M,fe[se]);const ce=fe[0],Oe=s.convert(M.format,M.colorSpace),Ve=s.convert(M.type),it=E(M.internalFormat,Oe,Ve,M.normalized,M.colorSpace),F=M.isVideoTexture!==!0,ue=le.__version===void 0||ne===!0,te=ae.dataReady;let Ee=w(M,ce);Se(t.TEXTURE_CUBE_MAP,M);let he;if(ye){F&&ue&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ee,it,ce.width,ce.height);for(let se=0;se<6;se++){he=fe[se].mipmaps;for(let Re=0;Re<he.length;Re++){const ze=he[Re];M.format!==ui?Oe!==null?F?te&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re,0,0,ze.width,ze.height,Oe,ze.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re,it,ze.width,ze.height,0,ze.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re,0,0,ze.width,ze.height,Oe,Ve,ze.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re,it,ze.width,ze.height,0,Oe,Ve,ze.data)}}}else{if(he=M.mipmaps,F&&ue){he.length>0&&Ee++;const se=Tt(fe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ee,it,se.width,se.height)}for(let se=0;se<6;se++)if(we){F?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,fe[se].width,fe[se].height,Oe,Ve,fe[se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,it,fe[se].width,fe[se].height,0,Oe,Ve,fe[se].data);for(let Re=0;Re<he.length;Re++){const Rt=he[Re].image[se].image;F?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re+1,0,0,Rt.width,Rt.height,Oe,Ve,Rt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re+1,it,Rt.width,Rt.height,0,Oe,Ve,Rt.data)}}else{F?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Oe,Ve,fe[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,it,Oe,Ve,fe[se]);for(let Re=0;Re<he.length;Re++){const ze=he[Re];F?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re+1,0,0,Oe,Ve,ze.image[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re+1,it,Oe,Ve,ze.image[se])}}}p(M)&&v(t.TEXTURE_CUBE_MAP),le.__version=ae.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Ue(R,M,V,ne,ae,le){const pe=s.convert(V.format,V.colorSpace),Q=s.convert(V.type),ie=E(V.internalFormat,pe,Q,V.normalized,V.colorSpace),ye=i.get(M),we=i.get(V);if(we.__renderTarget=M,!ye.__hasExternalTextures){const fe=Math.max(1,M.width>>le),ce=Math.max(1,M.height>>le);ae===t.TEXTURE_3D||ae===t.TEXTURE_2D_ARRAY?n.texImage3D(ae,le,ie,fe,ce,M.depth,0,pe,Q,null):n.texImage2D(ae,le,ie,fe,ce,0,pe,Q,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Ye(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,ae,we.__webglTexture,0,kt(M)):(ae===t.TEXTURE_2D||ae>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ne,ae,we.__webglTexture,le),n.bindFramebuffer(t.FRAMEBUFFER,null)}function xt(R,M,V){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer){const ne=M.depthTexture,ae=ne&&ne.isDepthTexture?ne.type:null,le=A(M.stencilBuffer,ae),pe=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Ye(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,kt(M),le,M.width,M.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,kt(M),le,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,le,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,pe,t.RENDERBUFFER,R)}else{const ne=M.textures;for(let ae=0;ae<ne.length;ae++){const le=ne[ae],pe=s.convert(le.format,le.colorSpace),Q=s.convert(le.type),ie=E(le.internalFormat,pe,Q,le.normalized,le.colorSpace);Ye(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,kt(M),ie,M.width,M.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,kt(M),ie,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ie,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function $e(R,M,V){const ne=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ae=i.get(M.depthTexture);if(ae.__renderTarget=M,(!ae.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ne){if(ae.__webglInit===void 0&&(ae.__webglInit=!0,M.depthTexture.addEventListener("dispose",C)),ae.__webglTexture===void 0){ae.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ae.__webglTexture),Se(t.TEXTURE_CUBE_MAP,M.depthTexture);const ye=s.convert(M.depthTexture.format),we=s.convert(M.depthTexture.type);let fe;M.depthTexture.format===er?fe=t.DEPTH_COMPONENT24:M.depthTexture.format===ts&&(fe=t.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,fe,M.width,M.height,0,ye,we,null)}}else k(M.depthTexture,0);const le=ae.__webglTexture,pe=kt(M),Q=ne?t.TEXTURE_CUBE_MAP_POSITIVE_X+V:t.TEXTURE_2D,ie=M.depthTexture.format===ts?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(M.depthTexture.format===er)Ye(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,Q,le,0,pe):t.framebufferTexture2D(t.FRAMEBUFFER,ie,Q,le,0);else if(M.depthTexture.format===ts)Ye(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,Q,le,0,pe):t.framebufferTexture2D(t.FRAMEBUFFER,ie,Q,le,0);else throw new Error("Unknown depthTexture format")}function ot(R){const M=i.get(R),V=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const ne=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ne){const ae=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ne.removeEventListener("dispose",ae)};ne.addEventListener("dispose",ae),M.__depthDisposeCallback=ae}M.__boundDepthTexture=ne}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(V)for(let ne=0;ne<6;ne++)$e(M.__webglFramebuffer[ne],R,ne);else{const ne=R.texture.mipmaps;ne&&ne.length>0?$e(M.__webglFramebuffer[0],R,0):$e(M.__webglFramebuffer,R,0)}else if(V){M.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[ne]),M.__webglDepthbuffer[ne]===void 0)M.__webglDepthbuffer[ne]=t.createRenderbuffer(),xt(M.__webglDepthbuffer[ne],R,!1);else{const ae=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=M.__webglDepthbuffer[ne];t.bindRenderbuffer(t.RENDERBUFFER,le),t.framebufferRenderbuffer(t.FRAMEBUFFER,ae,t.RENDERBUFFER,le)}}else{const ne=R.texture.mipmaps;if(ne&&ne.length>0?n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),xt(M.__webglDepthbuffer,R,!1);else{const ae=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,le),t.framebufferRenderbuffer(t.FRAMEBUFFER,ae,t.RENDERBUFFER,le)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function mt(R,M,V){const ne=i.get(R);M!==void 0&&Ue(ne.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&ot(R)}function We(R){const M=R.texture,V=i.get(R),ne=i.get(M);R.addEventListener("dispose",y);const ae=R.textures,le=R.isWebGLCubeRenderTarget===!0,pe=ae.length>1;if(pe||(ne.__webglTexture===void 0&&(ne.__webglTexture=t.createTexture()),ne.__version=M.version,a.memory.textures++),le){V.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[Q]=[];for(let ie=0;ie<M.mipmaps.length;ie++)V.__webglFramebuffer[Q][ie]=t.createFramebuffer()}else V.__webglFramebuffer[Q]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let Q=0;Q<M.mipmaps.length;Q++)V.__webglFramebuffer[Q]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(pe)for(let Q=0,ie=ae.length;Q<ie;Q++){const ye=i.get(ae[Q]);ye.__webglTexture===void 0&&(ye.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&Ye(R)===!1){V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Q=0;Q<ae.length;Q++){const ie=ae[Q];V.__webglColorRenderbuffer[Q]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[Q]);const ye=s.convert(ie.format,ie.colorSpace),we=s.convert(ie.type),fe=E(ie.internalFormat,ye,we,ie.normalized,ie.colorSpace,R.isXRRenderTarget===!0),ce=kt(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,fe,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Q,t.RENDERBUFFER,V.__webglColorRenderbuffer[Q])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),xt(V.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(le){n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),Se(t.TEXTURE_CUBE_MAP,M);for(let Q=0;Q<6;Q++)if(M.mipmaps&&M.mipmaps.length>0)for(let ie=0;ie<M.mipmaps.length;ie++)Ue(V.__webglFramebuffer[Q][ie],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ie);else Ue(V.__webglFramebuffer[Q],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);p(M)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(pe){for(let Q=0,ie=ae.length;Q<ie;Q++){const ye=ae[Q],we=i.get(ye);let fe=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(fe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,we.__webglTexture),Se(fe,ye),Ue(V.__webglFramebuffer,R,ye,t.COLOR_ATTACHMENT0+Q,fe,0),p(ye)&&v(fe)}n.unbindTexture()}else{let Q=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Q=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Q,ne.__webglTexture),Se(Q,M),M.mipmaps&&M.mipmaps.length>0)for(let ie=0;ie<M.mipmaps.length;ie++)Ue(V.__webglFramebuffer[ie],R,M,t.COLOR_ATTACHMENT0,Q,ie);else Ue(V.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,Q,0);p(M)&&v(Q),n.unbindTexture()}R.depthBuffer&&ot(R)}function Bt(R){const M=R.textures;for(let V=0,ne=M.length;V<ne;V++){const ae=M[V];if(p(ae)){const le=S(R),pe=i.get(ae).__webglTexture;n.bindTexture(le,pe),v(le),n.unbindTexture()}}}const yt=[],Rn=[];function B(R){if(R.samples>0){if(Ye(R)===!1){const M=R.textures,V=R.width,ne=R.height;let ae=t.COLOR_BUFFER_BIT;const le=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=i.get(R),Q=M.length>1;if(Q)for(let ye=0;ye<M.length;ye++)n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);const ie=R.texture.mipmaps;ie&&ie.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ye=0;ye<M.length;ye++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ae|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ae|=t.STENCIL_BUFFER_BIT)),Q){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,pe.__webglColorRenderbuffer[ye]);const we=i.get(M[ye]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,we,0)}t.blitFramebuffer(0,0,V,ne,0,0,V,ne,ae,t.NEAREST),l===!0&&(yt.length=0,Rn.length=0,yt.push(t.COLOR_ATTACHMENT0+ye),R.depthBuffer&&R.resolveDepthBuffer===!1&&(yt.push(le),Rn.push(le),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Rn)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,yt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Q)for(let ye=0;ye<M.length;ye++){n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,pe.__webglColorRenderbuffer[ye]);const we=i.get(M[ye]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,we,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function kt(R){return Math.min(r.maxSamples,R.samples)}function Ye(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ft(R){const M=a.render.frame;d.get(R)!==M&&(d.set(R,M),R.update())}function ge(R,M){const V=R.colorSpace,ne=R.format,ae=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==Oc&&V!==vr&&(Ze.getTransfer(V)===st?(ne!==ui||ae!==Un)&&Fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",V)),M}function Tt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=O,this.resetTextureUnits=L,this.getTextureUnits=H,this.setTextureUnits=U,this.setTexture2D=k,this.setTexture2DArray=K,this.setTexture3D=ee,this.setTextureCube=re,this.rebindTextures=mt,this.setupRenderTarget=We,this.updateRenderTargetMipmap=Bt,this.updateMultisampleRenderTarget=B,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=Ye,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function KP(t,e){function n(i,r=vr){let s;const a=Ze.getTransfer(r);if(i===Un)return t.UNSIGNED_BYTE;if(i===jp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Vp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===yy)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Sy)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===_y)return t.BYTE;if(i===xy)return t.SHORT;if(i===Co)return t.UNSIGNED_SHORT;if(i===zp)return t.INT;if(i===Pi)return t.UNSIGNED_INT;if(i===Mi)return t.FLOAT;if(i===Qi)return t.HALF_FLOAT;if(i===Ey)return t.ALPHA;if(i===My)return t.RGB;if(i===ui)return t.RGBA;if(i===er)return t.DEPTH_COMPONENT;if(i===ts)return t.DEPTH_STENCIL;if(i===wy)return t.RED;if(i===Hp)return t.RED_INTEGER;if(i===fs)return t.RG;if(i===Gp)return t.RG_INTEGER;if(i===Wp)return t.RGBA_INTEGER;if(i===Ql||i===ec||i===tc||i===nc)if(a===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ql)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ec)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===tc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===nc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ql)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ec)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===tc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===nc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Kf||i===Zf||i===Jf||i===Qf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Kf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Zf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Jf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Qf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===eh||i===th||i===nh||i===ih||i===rh||i===Uc||i===sh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===eh||i===th)return a===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===nh)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===ih)return s.COMPRESSED_R11_EAC;if(i===rh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Uc)return s.COMPRESSED_RG11_EAC;if(i===sh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ah||i===oh||i===lh||i===ch||i===uh||i===dh||i===fh||i===hh||i===ph||i===mh||i===gh||i===vh||i===_h||i===xh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ah)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===oh)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===lh)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ch)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===uh)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===dh)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===fh)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hh)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ph)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===mh)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===gh)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===vh)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_h)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xh)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yh||i===Sh||i===Eh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===yh)return a===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Sh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Eh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Mh||i===wh||i===Fc||i===Th)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Mh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===wh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Th)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ao?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const ZP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JP=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class QP{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Dy(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Li({vertexShader:ZP,fragmentShader:JP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new an(new pu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eL extends ms{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,d=null,h=null,f=null,g=null,_=null;const x=typeof XRWebGLBinding<"u",m=new QP,p={},v=n.getContextAttributes();let S=null,E=null;const A=[],w=[],C=new nt;let y=null;const b=new Xn;b.viewport=new At;const P=new Xn;P.viewport=new At;const N=[b,P],D=new uA;let L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let me=A[J];return me===void 0&&(me=new ld,A[J]=me),me.getTargetRaySpace()},this.getControllerGrip=function(J){let me=A[J];return me===void 0&&(me=new ld,A[J]=me),me.getGripSpace()},this.getHand=function(J){let me=A[J];return me===void 0&&(me=new ld,A[J]=me),me.getHandSpace()};function U(J){const me=w.indexOf(J.inputSource);if(me===-1)return;const de=A[me];de!==void 0&&(de.update(J.inputSource,J.frame,u||a),de.dispatchEvent({type:J.type,data:J.inputSource}))}function O(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",j);for(let J=0;J<A.length;J++){const me=w[J];me!==null&&(w[J]=null,A[J].disconnect(me))}L=null,H=null,m.reset();for(const J in p)delete p[J];e.setRenderTarget(S),g=null,f=null,h=null,r=null,E=null,Se.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&Fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&Fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(J){u=J},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",O),r.addEventListener("inputsourceschange",j),v.xrCompatible!==!0&&await n.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Ie=null,Be=null;v.depth&&(Be=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,de=v.stencil?ts:er,Ie=v.stencil?Ao:Pi);const Ue={colorFormat:n.RGBA8,depthFormat:Be,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Ue),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new Ai(f.textureWidth,f.textureHeight,{format:ui,type:Un,depthTexture:new fa(f.textureWidth,f.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const de={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,de),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),E=new Ai(g.framebufferWidth,g.framebufferHeight,{format:ui,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),Se.setContext(r),Se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j(J){for(let me=0;me<J.removed.length;me++){const de=J.removed[me],Ie=w.indexOf(de);Ie>=0&&(w[Ie]=null,A[Ie].disconnect(de))}for(let me=0;me<J.added.length;me++){const de=J.added[me];let Ie=w.indexOf(de);if(Ie===-1){for(let Ue=0;Ue<A.length;Ue++)if(Ue>=w.length){w.push(de),Ie=Ue;break}else if(w[Ue]===null){w[Ue]=de,Ie=Ue;break}if(Ie===-1)break}const Be=A[Ie];Be&&Be.connect(de)}}const k=new G,K=new G;function ee(J,me,de){k.setFromMatrixPosition(me.matrixWorld),K.setFromMatrixPosition(de.matrixWorld);const Ie=k.distanceTo(K),Be=me.projectionMatrix.elements,Ue=de.projectionMatrix.elements,xt=Be[14]/(Be[10]-1),$e=Be[14]/(Be[10]+1),ot=(Be[9]+1)/Be[5],mt=(Be[9]-1)/Be[5],We=(Be[8]-1)/Be[0],Bt=(Ue[8]+1)/Ue[0],yt=xt*We,Rn=xt*Bt,B=Ie/(-We+Bt),kt=B*-We;if(me.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(kt),J.translateZ(B),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Be[10]===-1)J.projectionMatrix.copy(me.projectionMatrix),J.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const Ye=xt+B,ft=$e+B,ge=yt-kt,Tt=Rn+(Ie-kt),R=ot*$e/ft*Ye,M=mt*$e/ft*Ye;J.projectionMatrix.makePerspective(ge,Tt,R,M,Ye,ft),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function re(J,me){me===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(me.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let me=J.near,de=J.far;m.texture!==null&&(m.depthNear>0&&(me=m.depthNear),m.depthFar>0&&(de=m.depthFar)),D.near=P.near=b.near=me,D.far=P.far=b.far=de,(L!==D.near||H!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),L=D.near,H=D.far),D.layers.mask=J.layers.mask|6,b.layers.mask=D.layers.mask&-5,P.layers.mask=D.layers.mask&-3;const Ie=J.parent,Be=D.cameras;re(D,Ie);for(let Ue=0;Ue<Be.length;Ue++)re(Be[Ue],Ie);Be.length===2?ee(D,b,P):D.projectionMatrix.copy(b.projectionMatrix),$(J,D,Ie)};function $(J,me,de){de===null?J.matrix.copy(me.matrixWorld):(J.matrix.copy(de.matrixWorld),J.matrix.invert(),J.matrix.multiply(me.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(me.projectionMatrix),J.projectionMatrixInverse.copy(me.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ah*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(J){return p[J]};let Ce=null;function Z(J,me){if(d=me.getViewerPose(u||a),_=me,d!==null){const de=d.views;g!==null&&(e.setRenderTargetFramebuffer(E,g.framebuffer),e.setRenderTarget(E));let Ie=!1;de.length!==D.cameras.length&&(D.cameras.length=0,Ie=!0);for(let $e=0;$e<de.length;$e++){const ot=de[$e];let mt=null;if(g!==null)mt=g.getViewport(ot);else{const Bt=h.getViewSubImage(f,ot);mt=Bt.viewport,$e===0&&(e.setRenderTargetTextures(E,Bt.colorTexture,Bt.depthStencilTexture),e.setRenderTarget(E))}let We=N[$e];We===void 0&&(We=new Xn,We.layers.enable($e),We.viewport=new At,N[$e]=We),We.matrix.fromArray(ot.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(ot.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(mt.x,mt.y,mt.width,mt.height),$e===0&&(D.matrix.copy(We.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ie===!0&&D.cameras.push(We)}const Be=r.enabledFeatures;if(Be&&Be.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){h=i.getBinding();const $e=h.getDepthInformation(de[0]);$e&&$e.isValid&&$e.texture&&m.init($e,r.renderState)}if(Be&&Be.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let $e=0;$e<de.length;$e++){const ot=de[$e].camera;if(ot){let mt=p[ot];mt||(mt=new Dy,p[ot]=mt);const We=h.getCameraImage(ot);mt.sourceTexture=We}}}}for(let de=0;de<A.length;de++){const Ie=w[de],Be=A[de];Ie!==null&&Be!==void 0&&Be.update(Ie,me,u||a)}Ce&&Ce(J,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),_=null}const Se=new Oy;Se.setAnimationLoop(Z),this.setAnimationLoop=function(J){Ce=J},this.dispose=function(){}}}const tL=new Dt,Gy=new ke;Gy.set(-1,0,0,0,1,0,0,0,1);function nL(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Iy(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,v,S,E){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),d(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&g(m,p,E)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,v,S):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===An&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===An&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),S=v.envMap,E=v.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(tL.makeRotationFromEuler(E)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Gy),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=S*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function g(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===An&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function iL(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){const E=S.program;i.uniformBlockBinding(v,E)}function u(v,S){let E=r[v.id];E===void 0&&(_(v),E=d(v),r[v.id]=E,v.addEventListener("dispose",m));const A=S.program;i.updateUBOMapping(v,A);const w=e.render.frame;s[v.id]!==w&&(f(v),s[v.id]=w)}function d(v){const S=h();v.__bindingPointIndex=S;const E=t.createBuffer(),A=v.__size,w=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,A,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,S,E),E}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const S=r[v.id],E=v.uniforms,A=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,S);for(let w=0,C=E.length;w<C;w++){const y=Array.isArray(E[w])?E[w]:[E[w]];for(let b=0,P=y.length;b<P;b++){const N=y[b];if(g(N,w,b,A)===!0){const D=N.__offset,L=Array.isArray(N.value)?N.value:[N.value];let H=0;for(let U=0;U<L.length;U++){const O=L[U],j=x(O);typeof O=="number"||typeof O=="boolean"?(N.__data[0]=O,t.bufferSubData(t.UNIFORM_BUFFER,D+H,N.__data)):O.isMatrix3?(N.__data[0]=O.elements[0],N.__data[1]=O.elements[1],N.__data[2]=O.elements[2],N.__data[3]=0,N.__data[4]=O.elements[3],N.__data[5]=O.elements[4],N.__data[6]=O.elements[5],N.__data[7]=0,N.__data[8]=O.elements[6],N.__data[9]=O.elements[7],N.__data[10]=O.elements[8],N.__data[11]=0):ArrayBuffer.isView(O)?N.__data.set(new O.constructor(O.buffer,O.byteOffset,N.__data.length)):(O.toArray(N.__data,H),H+=j.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,D,N.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(v,S,E,A){const w=v.value,C=S+"_"+E;if(A[C]===void 0)return typeof w=="number"||typeof w=="boolean"?A[C]=w:ArrayBuffer.isView(w)?A[C]=w.slice():A[C]=w.clone(),!0;{const y=A[C];if(typeof w=="number"||typeof w=="boolean"){if(y!==w)return A[C]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(y.equals(w)===!1)return y.copy(w),!0}}return!1}function _(v){const S=v.uniforms;let E=0;const A=16;for(let C=0,y=S.length;C<y;C++){const b=Array.isArray(S[C])?S[C]:[S[C]];for(let P=0,N=b.length;P<N;P++){const D=b[P],L=Array.isArray(D.value)?D.value:[D.value];for(let H=0,U=L.length;H<U;H++){const O=L[H],j=x(O),k=E%A,K=k%j.boundary,ee=k+K;E+=K,ee!==0&&A-ee<j.storage&&(E+=A-ee),D.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=E,E+=j.storage}}}const w=E%A;return w>0&&(E+=A-w),v.__size=E,v.__cache={},this}function x(v){const S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?Fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):Fe("WebGLRenderer: Unsupported uniform value type.",v),S}function m(v){const S=v.target;S.removeEventListener("dispose",m);const E=a.indexOf(S.__bindingPointIndex);a.splice(E,1),t.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function p(){for(const v in r)t.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:u,dispose:p}}const rL=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let xi=null;function sL(){return xi===null&&(xi=new GC(rL,16,16,fs,Qi),xi.name="DFG_LUT",xi.minFilter=cn,xi.magFilter=cn,xi.wrapS=Wi,xi.wrapT=Wi,xi.generateMipmaps=!1,xi.needsUpdate=!0),xi}class aL{constructor(e={}){const{canvas:n=yC(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:g=Un}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const x=g,m=new Set([Wp,Gp,Hp]),p=new Set([Un,Pi,Co,Ao,jp,Vp]),v=new Uint32Array(4),S=new Int32Array(4),E=new G;let A=null,w=null;const C=[],y=[];let b=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let N=!1,D=null;this._outputColorSpace=In;let L=0,H=0,U=null,O=-1,j=null;const k=new At,K=new At;let ee=null;const re=new rt(0);let $=0,Ce=n.width,Z=n.height,Se=1,J=null,me=null;const de=new At(0,0,Ce,Z),Ie=new At(0,0,Ce,Z);let Be=!1;const Ue=new Kp;let xt=!1,$e=!1;const ot=new Dt,mt=new G,We=new At,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yt=!1;function Rn(){return U===null?Se:1}let B=i;function kt(T,z){return n.getContext(T,z)}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${kp}`),n.addEventListener("webglcontextlost",se,!1),n.addEventListener("webglcontextrestored",Re,!1),n.addEventListener("webglcontextcreationerror",ze,!1),B===null){const z="webgl2";if(B=kt(z,T),B===null)throw kt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw et("WebGLRenderer: "+T.message),T}let Ye,ft,ge,Tt,R,M,V,ne,ae,le,pe,Q,ie,ye,we,fe,ce,Oe,Ve,it,F,ue,te;function Ee(){Ye=new sN(B),Ye.init(),F=new KP(B,Ye),ft=new ZR(B,Ye,e,F),ge=new $P(B,Ye),ft.reversedDepthBuffer&&f&&ge.buffers.depth.setReversed(!0),Tt=new lN(B),R=new IP,M=new YP(B,Ye,ge,R,ft,F,Tt),V=new rN(P),ne=new fA(B),ue=new YR(B,ne),ae=new aN(B,ne,Tt,ue),le=new uN(B,ae,ne,ue,Tt),Oe=new cN(B,ft,M),we=new JR(R),pe=new DP(P,V,Ye,ft,ue,we),Q=new nL(P,R),ie=new FP,ye=new VP(Ye),ce=new $R(P,V,ge,le,_,l),fe=new qP(P,le,ft),te=new iL(B,Tt,ft,ge),Ve=new KR(B,Ye,Tt),it=new oN(B,Ye,Tt),Tt.programs=pe.programs,P.capabilities=ft,P.extensions=Ye,P.properties=R,P.renderLists=ie,P.shadowMap=fe,P.state=ge,P.info=Tt}Ee(),x!==Un&&(b=new fN(x,n.width,n.height,r,s));const he=new eL(P,B);this.xr=he,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const T=Ye.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ye.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(T){T!==void 0&&(Se=T,this.setSize(Ce,Z,!1))},this.getSize=function(T){return T.set(Ce,Z)},this.setSize=function(T,z,Y=!0){if(he.isPresenting){Fe("WebGLRenderer: Can't change size while VR device is presenting.");return}Ce=T,Z=z,n.width=Math.floor(T*Se),n.height=Math.floor(z*Se),Y===!0&&(n.style.width=T+"px",n.style.height=z+"px"),b!==null&&b.setSize(n.width,n.height),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(Ce*Se,Z*Se).floor()},this.setDrawingBufferSize=function(T,z,Y){Ce=T,Z=z,Se=Y,n.width=Math.floor(T*Y),n.height=Math.floor(z*Y),this.setViewport(0,0,T,z)},this.setEffects=function(T){if(x===Un){et("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let z=0;z<T.length;z++)if(T[z].isOutputPass===!0){Fe("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(k)},this.getViewport=function(T){return T.copy(de)},this.setViewport=function(T,z,Y,W){T.isVector4?de.set(T.x,T.y,T.z,T.w):de.set(T,z,Y,W),ge.viewport(k.copy(de).multiplyScalar(Se).round())},this.getScissor=function(T){return T.copy(Ie)},this.setScissor=function(T,z,Y,W){T.isVector4?Ie.set(T.x,T.y,T.z,T.w):Ie.set(T,z,Y,W),ge.scissor(K.copy(Ie).multiplyScalar(Se).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(T){ge.setScissorTest(Be=T)},this.setOpaqueSort=function(T){J=T},this.setTransparentSort=function(T){me=T},this.getClearColor=function(T){return T.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(T=!0,z=!0,Y=!0){let W=0;if(T){let X=!1;if(U!==null){const xe=U.texture.format;X=m.has(xe)}if(X){const xe=U.texture.type,Te=p.has(xe),_e=ce.getClearColor(),Ae=ce.getClearAlpha(),Ne=_e.r,je=_e.g,Ge=_e.b;Te?(v[0]=Ne,v[1]=je,v[2]=Ge,v[3]=Ae,B.clearBufferuiv(B.COLOR,0,v)):(S[0]=Ne,S[1]=je,S[2]=Ge,S[3]=Ae,B.clearBufferiv(B.COLOR,0,S))}else W|=B.COLOR_BUFFER_BIT}z&&(W|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(W|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&B.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),D=T},this.dispose=function(){n.removeEventListener("webglcontextlost",se,!1),n.removeEventListener("webglcontextrestored",Re,!1),n.removeEventListener("webglcontextcreationerror",ze,!1),ce.dispose(),ie.dispose(),ye.dispose(),R.dispose(),V.dispose(),le.dispose(),ue.dispose(),te.dispose(),pe.dispose(),he.dispose(),he.removeEventListener("sessionstart",fm),he.removeEventListener("sessionend",hm),zr.stop()};function se(T){T.preventDefault(),lv("WebGLRenderer: Context Lost."),N=!0}function Re(){lv("WebGLRenderer: Context Restored."),N=!1;const T=Tt.autoReset,z=fe.enabled,Y=fe.autoUpdate,W=fe.needsUpdate,X=fe.type;Ee(),Tt.autoReset=T,fe.enabled=z,fe.autoUpdate=Y,fe.needsUpdate=W,fe.type=X}function ze(T){et("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Rt(T){const z=T.target;z.removeEventListener("dispose",Rt),lt(z)}function lt(T){Ii(T),R.remove(T)}function Ii(T){const z=R.get(T).programs;z!==void 0&&(z.forEach(function(Y){pe.releaseProgram(Y)}),T.isShaderMaterial&&pe.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,Y,W,X,xe){z===null&&(z=Bt);const Te=X.isMesh&&X.matrixWorld.determinant()<0,_e=cS(T,z,Y,W,X);ge.setMaterial(W,Te);let Ae=Y.index,Ne=1;if(W.wireframe===!0){if(Ae=ae.getWireframeAttribute(Y),Ae===void 0)return;Ne=2}const je=Y.drawRange,Ge=Y.attributes.position;let Pe=je.start*Ne,ct=(je.start+je.count)*Ne;xe!==null&&(Pe=Math.max(Pe,xe.start*Ne),ct=Math.min(ct,(xe.start+xe.count)*Ne)),Ae!==null?(Pe=Math.max(Pe,0),ct=Math.min(ct,Ae.count)):Ge!=null&&(Pe=Math.max(Pe,0),ct=Math.min(ct,Ge.count));const Nt=ct-Pe;if(Nt<0||Nt===1/0)return;ue.setup(X,W,_e,Y,Ae);let bt,ut=Ve;if(Ae!==null&&(bt=ne.get(Ae),ut=it,ut.setIndex(bt)),X.isMesh)W.wireframe===!0?(ge.setLineWidth(W.wireframeLinewidth*Rn()),ut.setMode(B.LINES)):ut.setMode(B.TRIANGLES);else if(X.isLine){let Qt=W.linewidth;Qt===void 0&&(Qt=1),ge.setLineWidth(Qt*Rn()),X.isLineSegments?ut.setMode(B.LINES):X.isLineLoop?ut.setMode(B.LINE_LOOP):ut.setMode(B.LINE_STRIP)}else X.isPoints?ut.setMode(B.POINTS):X.isSprite&&ut.setMode(B.TRIANGLES);if(X.isBatchedMesh)if(Ye.get("WEBGL_multi_draw"))ut.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Qt=X._multiDrawStarts,Me=X._multiDrawCounts,Nn=X._multiDrawCount,Qe=Ae?ne.get(Ae).bytesPerElement:1,jn=R.get(W).currentProgram.getUniforms();for(let gi=0;gi<Nn;gi++)jn.setValue(B,"_gl_DrawID",gi),ut.render(Qt[gi]/Qe,Me[gi])}else if(X.isInstancedMesh)ut.renderInstances(Pe,Nt,X.count);else if(Y.isInstancedBufferGeometry){const Qt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Me=Math.min(Y.instanceCount,Qt);ut.renderInstances(Pe,Nt,Me)}else ut.render(Pe,Nt)};function mi(T,z,Y){T.transparent===!0&&T.side===Vi&&T.forceSinglePass===!1?(T.side=An,T.needsUpdate=!0,Xo(T,z,Y),T.side=Ir,T.needsUpdate=!0,Xo(T,z,Y),T.side=Vi):Xo(T,z,Y)}this.compile=function(T,z,Y=null){Y===null&&(Y=T),w=ye.get(Y),w.init(z),y.push(w),Y.traverseVisible(function(X){X.isLight&&X.layers.test(z.layers)&&(w.pushLight(X),X.castShadow&&w.pushShadow(X))}),T!==Y&&T.traverseVisible(function(X){X.isLight&&X.layers.test(z.layers)&&(w.pushLight(X),X.castShadow&&w.pushShadow(X))}),w.setupLights();const W=new Set;return T.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const xe=X.material;if(xe)if(Array.isArray(xe))for(let Te=0;Te<xe.length;Te++){const _e=xe[Te];mi(_e,Y,X),W.add(_e)}else mi(xe,Y,X),W.add(xe)}),w=y.pop(),W},this.compileAsync=function(T,z,Y=null){const W=this.compile(T,z,Y);return new Promise(X=>{function xe(){if(W.forEach(function(Te){R.get(Te).currentProgram.isReady()&&W.delete(Te)}),W.size===0){X(T);return}setTimeout(xe,10)}Ye.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let xu=null;function oS(T){xu&&xu(T)}function fm(){zr.stop()}function hm(){zr.start()}const zr=new Oy;zr.setAnimationLoop(oS),typeof self<"u"&&zr.setContext(self),this.setAnimationLoop=function(T){xu=T,he.setAnimationLoop(T),T===null?zr.stop():zr.start()},he.addEventListener("sessionstart",fm),he.addEventListener("sessionend",hm),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;D!==null&&D.renderStart(T,z);const Y=he.enabled===!0&&he.isPresenting===!0,W=b!==null&&(U===null||Y)&&b.begin(P,U);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(he.cameraAutoUpdate===!0&&he.updateCamera(z),z=he.getCamera()),T.isScene===!0&&T.onBeforeRender(P,T,z,U),w=ye.get(T,y.length),w.init(z),w.state.textureUnits=M.getTextureUnits(),y.push(w),ot.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Ue.setFromProjectionMatrix(ot,wi,z.reversedDepth),$e=this.localClippingEnabled,xt=we.init(this.clippingPlanes,$e),A=ie.get(T,C.length),A.init(),C.push(A),he.enabled===!0&&he.isPresenting===!0){const Te=P.xr.getDepthSensingMesh();Te!==null&&yu(Te,z,-1/0,P.sortObjects)}yu(T,z,0,P.sortObjects),A.finish(),P.sortObjects===!0&&A.sort(J,me),yt=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,yt&&ce.addToRenderList(A,T),this.info.render.frame++,xt===!0&&we.beginShadows();const X=w.state.shadowsArray;if(fe.render(X,T,z),xt===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&b.hasRenderPass())===!1){const Te=A.opaque,_e=A.transmissive;if(w.setupLights(),z.isArrayCamera){const Ae=z.cameras;if(_e.length>0)for(let Ne=0,je=Ae.length;Ne<je;Ne++){const Ge=Ae[Ne];mm(Te,_e,T,Ge)}yt&&ce.render(T);for(let Ne=0,je=Ae.length;Ne<je;Ne++){const Ge=Ae[Ne];pm(A,T,Ge,Ge.viewport)}}else _e.length>0&&mm(Te,_e,T,z),yt&&ce.render(T),pm(A,T,z)}U!==null&&H===0&&(M.updateMultisampleRenderTarget(U),M.updateRenderTargetMipmap(U)),W&&b.end(P),T.isScene===!0&&T.onAfterRender(P,T,z),ue.resetDefaultState(),O=-1,j=null,y.pop(),y.length>0?(w=y[y.length-1],M.setTextureUnits(w.state.textureUnits),xt===!0&&we.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,C.pop(),C.length>0?A=C[C.length-1]:A=null,D!==null&&D.renderEnd()};function yu(T,z,Y,W){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLightProbeGrid)w.pushLightProbeGrid(T);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ue.intersectsSprite(T)){W&&We.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ot);const Te=le.update(T),_e=T.material;_e.visible&&A.push(T,Te,_e,Y,We.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ue.intersectsObject(T))){const Te=le.update(T),_e=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),We.copy(T.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),We.copy(Te.boundingSphere.center)),We.applyMatrix4(T.matrixWorld).applyMatrix4(ot)),Array.isArray(_e)){const Ae=Te.groups;for(let Ne=0,je=Ae.length;Ne<je;Ne++){const Ge=Ae[Ne],Pe=_e[Ge.materialIndex];Pe&&Pe.visible&&A.push(T,Te,Pe,Y,We.z,Ge)}}else _e.visible&&A.push(T,Te,_e,Y,We.z,null)}}const xe=T.children;for(let Te=0,_e=xe.length;Te<_e;Te++)yu(xe[Te],z,Y,W)}function pm(T,z,Y,W){const{opaque:X,transmissive:xe,transparent:Te}=T;w.setupLightsView(Y),xt===!0&&we.setGlobalState(P.clippingPlanes,Y),W&&ge.viewport(k.copy(W)),X.length>0&&Wo(X,z,Y),xe.length>0&&Wo(xe,z,Y),Te.length>0&&Wo(Te,z,Y),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function mm(T,z,Y,W){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[W.id]===void 0){const Pe=Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[W.id]=new Ai(1,1,{generateMipmaps:!0,type:Pe?Qi:Un,minFilter:es,samples:Math.max(4,ft.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}const xe=w.state.transmissionRenderTarget[W.id],Te=W.viewport||k;xe.setSize(Te.z*P.transmissionResolutionScale,Te.w*P.transmissionResolutionScale);const _e=P.getRenderTarget(),Ae=P.getActiveCubeFace(),Ne=P.getActiveMipmapLevel();P.setRenderTarget(xe),P.getClearColor(re),$=P.getClearAlpha(),$<1&&P.setClearColor(16777215,.5),P.clear(),yt&&ce.render(Y);const je=P.toneMapping;P.toneMapping=Ci;const Ge=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),w.setupLightsView(W),xt===!0&&we.setGlobalState(P.clippingPlanes,W),Wo(T,Y,W),M.updateMultisampleRenderTarget(xe),M.updateRenderTargetMipmap(xe),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let ct=0,Nt=z.length;ct<Nt;ct++){const bt=z[ct],{object:ut,geometry:Qt,material:Me,group:Nn}=bt;if(Me.side===Vi&&ut.layers.test(W.layers)){const Qe=Me.side;Me.side=An,Me.needsUpdate=!0,gm(ut,Y,W,Qt,Me,Nn),Me.side=Qe,Me.needsUpdate=!0,Pe=!0}}Pe===!0&&(M.updateMultisampleRenderTarget(xe),M.updateRenderTargetMipmap(xe))}P.setRenderTarget(_e,Ae,Ne),P.setClearColor(re,$),Ge!==void 0&&(W.viewport=Ge),P.toneMapping=je}function Wo(T,z,Y){const W=z.isScene===!0?z.overrideMaterial:null;for(let X=0,xe=T.length;X<xe;X++){const Te=T[X],{object:_e,geometry:Ae,group:Ne}=Te;let je=Te.material;je.allowOverride===!0&&W!==null&&(je=W),_e.layers.test(Y.layers)&&gm(_e,z,Y,Ae,je,Ne)}}function gm(T,z,Y,W,X,xe){T.onBeforeRender(P,z,Y,W,X,xe),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(P,z,Y,W,T,xe),X.transparent===!0&&X.side===Vi&&X.forceSinglePass===!1?(X.side=An,X.needsUpdate=!0,P.renderBufferDirect(Y,z,W,X,T,xe),X.side=Ir,X.needsUpdate=!0,P.renderBufferDirect(Y,z,W,X,T,xe),X.side=Vi):P.renderBufferDirect(Y,z,W,X,T,xe),T.onAfterRender(P,z,Y,W,X,xe)}function Xo(T,z,Y){z.isScene!==!0&&(z=Bt);const W=R.get(T),X=w.state.lights,xe=w.state.shadowsArray,Te=X.state.version,_e=pe.getParameters(T,X.state,xe,z,Y,w.state.lightProbeGridArray),Ae=pe.getProgramCacheKey(_e);let Ne=W.programs;W.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?z.environment:null,W.fog=z.fog;const je=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;W.envMap=V.get(T.envMap||W.environment,je),W.envMapRotation=W.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,Ne===void 0&&(T.addEventListener("dispose",Rt),Ne=new Map,W.programs=Ne);let Ge=Ne.get(Ae);if(Ge!==void 0){if(W.currentProgram===Ge&&W.lightsStateVersion===Te)return _m(T,_e),Ge}else _e.uniforms=pe.getUniforms(T),D!==null&&T.isNodeMaterial&&D.build(T,Y,_e),T.onBeforeCompile(_e,P),Ge=pe.acquireProgram(_e,Ae),Ne.set(Ae,Ge),W.uniforms=_e.uniforms;const Pe=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pe.clippingPlanes=we.uniform),_m(T,_e),W.needsLights=dS(T),W.lightsStateVersion=Te,W.needsLights&&(Pe.ambientLightColor.value=X.state.ambient,Pe.lightProbe.value=X.state.probe,Pe.directionalLights.value=X.state.directional,Pe.directionalLightShadows.value=X.state.directionalShadow,Pe.spotLights.value=X.state.spot,Pe.spotLightShadows.value=X.state.spotShadow,Pe.rectAreaLights.value=X.state.rectArea,Pe.ltc_1.value=X.state.rectAreaLTC1,Pe.ltc_2.value=X.state.rectAreaLTC2,Pe.pointLights.value=X.state.point,Pe.pointLightShadows.value=X.state.pointShadow,Pe.hemisphereLights.value=X.state.hemi,Pe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Pe.spotLightMatrix.value=X.state.spotLightMatrix,Pe.spotLightMap.value=X.state.spotLightMap,Pe.pointShadowMatrix.value=X.state.pointShadowMatrix),W.lightProbeGrid=w.state.lightProbeGridArray.length>0,W.currentProgram=Ge,W.uniformsList=null,Ge}function vm(T){if(T.uniformsList===null){const z=T.currentProgram.getUniforms();T.uniformsList=ic.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function _m(T,z){const Y=R.get(T);Y.outputColorSpace=z.outputColorSpace,Y.batching=z.batching,Y.batchingColor=z.batchingColor,Y.instancing=z.instancing,Y.instancingColor=z.instancingColor,Y.instancingMorph=z.instancingMorph,Y.skinning=z.skinning,Y.morphTargets=z.morphTargets,Y.morphNormals=z.morphNormals,Y.morphColors=z.morphColors,Y.morphTargetsCount=z.morphTargetsCount,Y.numClippingPlanes=z.numClippingPlanes,Y.numIntersection=z.numClipIntersection,Y.vertexAlphas=z.vertexAlphas,Y.vertexTangents=z.vertexTangents,Y.toneMapping=z.toneMapping}function lS(T,z){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;E.setFromMatrixPosition(z.matrixWorld);for(let Y=0,W=T.length;Y<W;Y++){const X=T[Y];if(X.texture!==null&&X.boundingBox.containsPoint(E))return X}return null}function cS(T,z,Y,W,X){z.isScene!==!0&&(z=Bt),M.resetTextureUnits();const xe=z.fog,Te=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?z.environment:null,_e=U===null?P.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Ze.workingColorSpace,Ae=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ne=V.get(W.envMap||Te,Ae),je=W.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ge=!!Y.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Pe=!!Y.morphAttributes.position,ct=!!Y.morphAttributes.normal,Nt=!!Y.morphAttributes.color;let bt=Ci;W.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(bt=P.toneMapping);const ut=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Qt=ut!==void 0?ut.length:0,Me=R.get(W),Nn=w.state.lights;if(xt===!0&&($e===!0||T!==j)){const ht=T===j&&W.id===O;we.setState(W,T,ht)}let Qe=!1;W.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Nn.state.version||Me.outputColorSpace!==_e||X.isBatchedMesh&&Me.batching===!1||!X.isBatchedMesh&&Me.batching===!0||X.isBatchedMesh&&Me.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Me.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Me.instancing===!1||!X.isInstancedMesh&&Me.instancing===!0||X.isSkinnedMesh&&Me.skinning===!1||!X.isSkinnedMesh&&Me.skinning===!0||X.isInstancedMesh&&Me.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Me.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Me.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Me.instancingMorph===!1&&X.morphTexture!==null||Me.envMap!==Ne||W.fog===!0&&Me.fog!==xe||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==we.numPlanes||Me.numIntersection!==we.numIntersection)||Me.vertexAlphas!==je||Me.vertexTangents!==Ge||Me.morphTargets!==Pe||Me.morphNormals!==ct||Me.morphColors!==Nt||Me.toneMapping!==bt||Me.morphTargetsCount!==Qt||!!Me.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Qe=!0):(Qe=!0,Me.__version=W.version);let jn=Me.currentProgram;Qe===!0&&(jn=Xo(W,z,X),D&&W.isNodeMaterial&&D.onUpdateProgram(W,jn,Me));let gi=!1,ir=!1,gs=!1;const dt=jn.getUniforms(),Pt=Me.uniforms;if(ge.useProgram(jn.program)&&(gi=!0,ir=!0,gs=!0),W.id!==O&&(O=W.id,ir=!0),Me.needsLights){const ht=lS(w.state.lightProbeGridArray,X);Me.lightProbeGrid!==ht&&(Me.lightProbeGrid=ht,ir=!0)}if(gi||j!==T){ge.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),dt.setValue(B,"projectionMatrix",T.projectionMatrix),dt.setValue(B,"viewMatrix",T.matrixWorldInverse);const sr=dt.map.cameraPosition;sr!==void 0&&sr.setValue(B,mt.setFromMatrixPosition(T.matrixWorld)),ft.logarithmicDepthBuffer&&dt.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&dt.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),j!==T&&(j=T,ir=!0,gs=!0)}if(Me.needsLights&&(Nn.state.directionalShadowMap.length>0&&dt.setValue(B,"directionalShadowMap",Nn.state.directionalShadowMap,M),Nn.state.spotShadowMap.length>0&&dt.setValue(B,"spotShadowMap",Nn.state.spotShadowMap,M),Nn.state.pointShadowMap.length>0&&dt.setValue(B,"pointShadowMap",Nn.state.pointShadowMap,M)),X.isSkinnedMesh){dt.setOptional(B,X,"bindMatrix"),dt.setOptional(B,X,"bindMatrixInverse");const ht=X.skeleton;ht&&(ht.boneTexture===null&&ht.computeBoneTexture(),dt.setValue(B,"boneTexture",ht.boneTexture,M))}X.isBatchedMesh&&(dt.setOptional(B,X,"batchingTexture"),dt.setValue(B,"batchingTexture",X._matricesTexture,M),dt.setOptional(B,X,"batchingIdTexture"),dt.setValue(B,"batchingIdTexture",X._indirectTexture,M),dt.setOptional(B,X,"batchingColorTexture"),X._colorsTexture!==null&&dt.setValue(B,"batchingColorTexture",X._colorsTexture,M));const rr=Y.morphAttributes;if((rr.position!==void 0||rr.normal!==void 0||rr.color!==void 0)&&Oe.update(X,Y,jn),(ir||Me.receiveShadow!==X.receiveShadow)&&(Me.receiveShadow=X.receiveShadow,dt.setValue(B,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&z.environment!==null&&(Pt.envMapIntensity.value=z.environmentIntensity),Pt.dfgLUT!==void 0&&(Pt.dfgLUT.value=sL()),ir){if(dt.setValue(B,"toneMappingExposure",P.toneMappingExposure),Me.needsLights&&uS(Pt,gs),xe&&W.fog===!0&&Q.refreshFogUniforms(Pt,xe),Q.refreshMaterialUniforms(Pt,W,Se,Z,w.state.transmissionRenderTarget[T.id]),Me.needsLights&&Me.lightProbeGrid){const ht=Me.lightProbeGrid;Pt.probesSH.value=ht.texture,Pt.probesMin.value.copy(ht.boundingBox.min),Pt.probesMax.value.copy(ht.boundingBox.max),Pt.probesResolution.value.copy(ht.resolution)}ic.upload(B,vm(Me),Pt,M)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ic.upload(B,vm(Me),Pt,M),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&dt.setValue(B,"center",X.center),dt.setValue(B,"modelViewMatrix",X.modelViewMatrix),dt.setValue(B,"normalMatrix",X.normalMatrix),dt.setValue(B,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){const ht=W.uniformsGroups;for(let sr=0,vs=ht.length;sr<vs;sr++){const xm=ht[sr];te.update(xm,jn),te.bind(xm,jn)}}return jn}function uS(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function dS(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(T,z,Y){const W=R.get(T);W.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),R.get(T.texture).__webglTexture=z,R.get(T.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Y,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,z){const Y=R.get(T);Y.__webglFramebuffer=z,Y.__useDefaultFramebuffer=z===void 0};const fS=B.createFramebuffer();this.setRenderTarget=function(T,z=0,Y=0){U=T,L=z,H=Y;let W=null,X=!1,xe=!1;if(T){const _e=R.get(T);if(_e.__useDefaultFramebuffer!==void 0){ge.bindFramebuffer(B.FRAMEBUFFER,_e.__webglFramebuffer),k.copy(T.viewport),K.copy(T.scissor),ee=T.scissorTest,ge.viewport(k),ge.scissor(K),ge.setScissorTest(ee),O=-1;return}else if(_e.__webglFramebuffer===void 0)M.setupRenderTarget(T);else if(_e.__hasExternalTextures)M.rebindTextures(T,R.get(T.texture).__webglTexture,R.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const je=T.depthTexture;if(_e.__boundDepthTexture!==je){if(je!==null&&R.has(je)&&(T.width!==je.image.width||T.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(T)}}const Ae=T.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(xe=!0);const Ne=R.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ne[z])?W=Ne[z][Y]:W=Ne[z],X=!0):T.samples>0&&M.useMultisampledRTT(T)===!1?W=R.get(T).__webglMultisampledFramebuffer:Array.isArray(Ne)?W=Ne[Y]:W=Ne,k.copy(T.viewport),K.copy(T.scissor),ee=T.scissorTest}else k.copy(de).multiplyScalar(Se).floor(),K.copy(Ie).multiplyScalar(Se).floor(),ee=Be;if(Y!==0&&(W=fS),ge.bindFramebuffer(B.FRAMEBUFFER,W)&&ge.drawBuffers(T,W),ge.viewport(k),ge.scissor(K),ge.setScissorTest(ee),X){const _e=R.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+z,_e.__webglTexture,Y)}else if(xe){const _e=z;for(let Ae=0;Ae<T.textures.length;Ae++){const Ne=R.get(T.textures[Ae]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ae,Ne.__webglTexture,Y,_e)}}else if(T!==null&&Y!==0){const _e=R.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,_e.__webglTexture,Y)}O=-1},this.readRenderTargetPixels=function(T,z,Y,W,X,xe,Te,_e=0){if(!(T&&T.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=R.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Te!==void 0&&(Ae=Ae[Te]),Ae){ge.bindFramebuffer(B.FRAMEBUFFER,Ae);try{const Ne=T.textures[_e],je=Ne.format,Ge=Ne.type;if(T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+_e),!ft.textureFormatReadable(je)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(Ge)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-W&&Y>=0&&Y<=T.height-X&&B.readPixels(z,Y,W,X,F.convert(je),F.convert(Ge),xe)}finally{const Ne=U!==null?R.get(U).__webglFramebuffer:null;ge.bindFramebuffer(B.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(T,z,Y,W,X,xe,Te,_e=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=R.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Te!==void 0&&(Ae=Ae[Te]),Ae)if(z>=0&&z<=T.width-W&&Y>=0&&Y<=T.height-X){ge.bindFramebuffer(B.FRAMEBUFFER,Ae);const Ne=T.textures[_e],je=Ne.format,Ge=Ne.type;if(T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+_e),!ft.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Pe=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Pe),B.bufferData(B.PIXEL_PACK_BUFFER,xe.byteLength,B.STREAM_READ),B.readPixels(z,Y,W,X,F.convert(je),F.convert(Ge),0);const ct=U!==null?R.get(U).__webglFramebuffer:null;ge.bindFramebuffer(B.FRAMEBUFFER,ct);const Nt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await SC(B,Nt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Pe),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,xe),B.deleteBuffer(Pe),B.deleteSync(Nt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,z=null,Y=0){const W=Math.pow(2,-Y),X=Math.floor(T.image.width*W),xe=Math.floor(T.image.height*W),Te=z!==null?z.x:0,_e=z!==null?z.y:0;M.setTexture2D(T,0),B.copyTexSubImage2D(B.TEXTURE_2D,Y,0,0,Te,_e,X,xe),ge.unbindTexture()};const hS=B.createFramebuffer(),pS=B.createFramebuffer();this.copyTextureToTexture=function(T,z,Y=null,W=null,X=0,xe=0){let Te,_e,Ae,Ne,je,Ge,Pe,ct,Nt;const bt=T.isCompressedTexture?T.mipmaps[xe]:T.image;if(Y!==null)Te=Y.max.x-Y.min.x,_e=Y.max.y-Y.min.y,Ae=Y.isBox3?Y.max.z-Y.min.z:1,Ne=Y.min.x,je=Y.min.y,Ge=Y.isBox3?Y.min.z:0;else{const Pt=Math.pow(2,-X);Te=Math.floor(bt.width*Pt),_e=Math.floor(bt.height*Pt),T.isDataArrayTexture?Ae=bt.depth:T.isData3DTexture?Ae=Math.floor(bt.depth*Pt):Ae=1,Ne=0,je=0,Ge=0}W!==null?(Pe=W.x,ct=W.y,Nt=W.z):(Pe=0,ct=0,Nt=0);const ut=F.convert(z.format),Qt=F.convert(z.type);let Me;z.isData3DTexture?(M.setTexture3D(z,0),Me=B.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(M.setTexture2DArray(z,0),Me=B.TEXTURE_2D_ARRAY):(M.setTexture2D(z,0),Me=B.TEXTURE_2D),ge.activeTexture(B.TEXTURE0),ge.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,z.flipY),ge.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),ge.pixelStorei(B.UNPACK_ALIGNMENT,z.unpackAlignment);const Nn=ge.getParameter(B.UNPACK_ROW_LENGTH),Qe=ge.getParameter(B.UNPACK_IMAGE_HEIGHT),jn=ge.getParameter(B.UNPACK_SKIP_PIXELS),gi=ge.getParameter(B.UNPACK_SKIP_ROWS),ir=ge.getParameter(B.UNPACK_SKIP_IMAGES);ge.pixelStorei(B.UNPACK_ROW_LENGTH,bt.width),ge.pixelStorei(B.UNPACK_IMAGE_HEIGHT,bt.height),ge.pixelStorei(B.UNPACK_SKIP_PIXELS,Ne),ge.pixelStorei(B.UNPACK_SKIP_ROWS,je),ge.pixelStorei(B.UNPACK_SKIP_IMAGES,Ge);const gs=T.isDataArrayTexture||T.isData3DTexture,dt=z.isDataArrayTexture||z.isData3DTexture;if(T.isDepthTexture){const Pt=R.get(T),rr=R.get(z),ht=R.get(Pt.__renderTarget),sr=R.get(rr.__renderTarget);ge.bindFramebuffer(B.READ_FRAMEBUFFER,ht.__webglFramebuffer),ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,sr.__webglFramebuffer);for(let vs=0;vs<Ae;vs++)gs&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,R.get(T).__webglTexture,X,Ge+vs),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,R.get(z).__webglTexture,xe,Nt+vs)),B.blitFramebuffer(Ne,je,Te,_e,Pe,ct,Te,_e,B.DEPTH_BUFFER_BIT,B.NEAREST);ge.bindFramebuffer(B.READ_FRAMEBUFFER,null),ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(X!==0||T.isRenderTargetTexture||R.has(T)){const Pt=R.get(T),rr=R.get(z);ge.bindFramebuffer(B.READ_FRAMEBUFFER,hS),ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,pS);for(let ht=0;ht<Ae;ht++)gs?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Pt.__webglTexture,X,Ge+ht):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Pt.__webglTexture,X),dt?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,rr.__webglTexture,xe,Nt+ht):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,rr.__webglTexture,xe),X!==0?B.blitFramebuffer(Ne,je,Te,_e,Pe,ct,Te,_e,B.COLOR_BUFFER_BIT,B.NEAREST):dt?B.copyTexSubImage3D(Me,xe,Pe,ct,Nt+ht,Ne,je,Te,_e):B.copyTexSubImage2D(Me,xe,Pe,ct,Ne,je,Te,_e);ge.bindFramebuffer(B.READ_FRAMEBUFFER,null),ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else dt?T.isDataTexture||T.isData3DTexture?B.texSubImage3D(Me,xe,Pe,ct,Nt,Te,_e,Ae,ut,Qt,bt.data):z.isCompressedArrayTexture?B.compressedTexSubImage3D(Me,xe,Pe,ct,Nt,Te,_e,Ae,ut,bt.data):B.texSubImage3D(Me,xe,Pe,ct,Nt,Te,_e,Ae,ut,Qt,bt):T.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,xe,Pe,ct,Te,_e,ut,Qt,bt.data):T.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,xe,Pe,ct,bt.width,bt.height,ut,bt.data):B.texSubImage2D(B.TEXTURE_2D,xe,Pe,ct,Te,_e,ut,Qt,bt);ge.pixelStorei(B.UNPACK_ROW_LENGTH,Nn),ge.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Qe),ge.pixelStorei(B.UNPACK_SKIP_PIXELS,jn),ge.pixelStorei(B.UNPACK_SKIP_ROWS,gi),ge.pixelStorei(B.UNPACK_SKIP_IMAGES,ir),xe===0&&z.generateMipmaps&&B.generateMipmap(Me),ge.unbindTexture()},this.initRenderTarget=function(T){R.get(T).__webglFramebuffer===void 0&&M.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?M.setTextureCube(T,0):T.isData3DTexture?M.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?M.setTexture2DArray(T,0):M.setTexture2D(T,0),ge.unbindTexture()},this.resetState=function(){L=0,H=0,U=null,ge.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ze._getUnpackColorSpace()}}function Wy(){const t=I.useRef(null);return I.useEffect(()=>{const e=t.current;if(!e)return;let n=0,i=!0,r=null;const s=[];let a=null;const o=new OC,l=new Xn(35,1,.1,100);l.position.z=6.8;const u=new aL({alpha:!0,antialias:!0}),d=window.devicePixelRatio,h=Math.min(d,2);u.setPixelRatio(h),e.appendChild(u.domElement);const f=new lA(16777215,1.2);o.add(f);const g=new Rv(16777215,1.8);g.position.set(2,3,5),o.add(g);const _=new Rv(6333946,1.1);_.position.set(-4,1,3),o.add(_);function x(){const v=e.clientWidth,S=e.clientHeight;v===0||S===0||(u.setSize(v,S),l.aspect=v/S,l.updateProjectionMatrix())}function m(){if(n=window.requestAnimationFrame(m),r){r.rotation.y=r.rotation.y+.024;const v=Math.sin(Date.now()*.0012)*.08;r.rotation.x=v}u.render(o,l)}return new sA().load("/logos/uploaded-crime-logo.png",v=>{if(!i){v.dispose();return}v.colorSpace=In,a=v;const S=new ka({color:16317180,metalness:.2,roughness:.3}),E=new ka({map:v,transparent:!0,metalness:.12,roughness:.28}),A=new ka({map:v,transparent:!0,metalness:.12,roughness:.28}),w=new ka({color:1059404,metalness:.85,roughness:.22,emissive:1195384,emissiveIntensity:.18}),C=new ka({color:8246268,metalness:.8,roughness:.2});r=new Ya;const y=new Jp(2.12,2.12,.38,96,1,!0),b=new an(y,w);b.rotation.x=Math.PI/2,r.add(b),s.push(b);const P=new Zp(2.03,96),N=new an(P,S);N.position.z=.205,r.add(N),s.push(N);const D=new an(P.clone(),S.clone());D.position.z=-.205,D.rotation.y=Math.PI,r.add(D),s.push(D);const L=new an(P.clone(),E);L.position.z=.215,r.add(L),s.push(L);const H=new an(P.clone(),A);H.position.z=-.215,H.rotation.y=Math.PI,r.add(H),s.push(H);const U=new Qp(2.06,.035,16,96),O=new an(U,C);O.position.z=.235,r.add(O),s.push(O);const j=new an(U.clone(),C.clone());j.position.z=-.235,r.add(j),s.push(j),r.rotation.y=-.35,r.scale.set(.92,.92,.92),o.add(r)}),x(),m(),window.addEventListener("resize",x),()=>{i=!1,window.cancelAnimationFrame(n),window.removeEventListener("resize",x),u.domElement.remove(),u.dispose(),r&&o.remove(r),s.forEach(v=>{v.geometry.dispose(),v.material.dispose()}),s.length=0,a&&a.dispose()}},[]),c.jsx("div",{ref:t,className:"rotating-logo-3d",role:"img","aria-label":"AI Crime Investigation 3D rotating logo"})}function oL(){const[t,e]=I.useState({email:"",password:""}),[n,i]=I.useState(""),[r,s]=I.useState(!1),[a,o]=I.useState(""),[l,u]=I.useState(null),[d,h]=I.useState(""),f=su(),{login:g}=Jn(),_=N=>{s(!0),o(N.tempToken),u(N.setupData||null),i(""),h("")},x=N=>{const D=N.target.name,L=N.target.value;D==="email"&&e({email:L,password:t.password}),D==="password"&&e({email:t.email,password:L})},m=async N=>{N.preventDefault();try{const D=await Le.post("/users/login",t);if(D.data.twoFactorRequired){_(D.data);return}g(D.data),f("/dashboard")}catch(D){alert(Xe(D,"Login failed"))}},p=async N=>{N.preventDefault();try{const D=await Le.post("/users/2fa/verify-login",{code:n.trim()},{headers:{Authorization:a}});g(D.data),f("/dashboard")}catch(D){D&&D.response&&D.response.data&&D.response.data.setupData&&u(D.response.data.setupData),h(Xe(D,"OTP verification failed"))}},v=async N=>{try{const D=await Le.post("/users/google",{credential:N.credential});if(D.data.twoFactorRequired){_(D.data);return}g(D.data),f("/dashboard")}catch{alert("Google login failed")}},S=()=>{s(!1),o(""),u(null),i(""),h("")},E=N=>{const D=N.target.value.replace(/\D/g,"").slice(0,6);i(D),h("")},A=l&&l.qrCodeDataUrl,w=l&&l.secret,C=l&&l.otpauthUrl;let y="Login",b=m,P=c.jsxs(c.Fragment,{children:[c.jsxs("label",{children:["Email",c.jsx("input",{name:"email",type:"email",value:t.email,onChange:x,placeholder:"Enter email"})]}),c.jsxs("label",{children:["Password",c.jsx("input",{name:"password",type:"password",value:t.password,onChange:x,placeholder:"Enter password"})]}),c.jsx("button",{className:"btn btn-primary",type:"submit",children:"Login"}),c.jsxs("div",{className:"auth-divider",children:[c.jsx("span",{}),c.jsx("p",{children:"or"}),c.jsx("span",{})]}),c.jsx("div",{className:"google-login-wrap",children:c.jsx(YM,{onSuccess:v,onError:()=>alert("Google login failed"),theme:"outline",size:"large",width:"100%"})}),c.jsxs("p",{className:"form-link",children:["New user? ",c.jsx(Ip,{to:"/register",children:"Create account"})]}),c.jsx("p",{className:"auth-security-note",children:"Protected access for citizens and investigation staff"})]});return r&&(y="Enter OTP Code",b=p,P=c.jsxs(c.Fragment,{children:[c.jsx("p",{children:"Please enter the 6 digit code shown in your authenticator app."}),A&&c.jsxs("div",{className:"qr-box",children:[c.jsx("p",{children:"Scan this QR code with Google Authenticator"}),c.jsx("img",{className:"qr-image",src:l.qrCodeDataUrl,alt:"Authenticator QR code"})]}),w&&c.jsxs("div",{className:"auth-note",children:[c.jsx("p",{children:"Use this secret in your authenticator app:"}),c.jsx("code",{children:l.secret})]}),C&&c.jsxs("div",{className:"auth-note",children:[c.jsx("p",{children:"Open this link in your authenticator app:"}),c.jsx("a",{href:l.otpauthUrl,target:"_blank",rel:"noreferrer",children:"Set up authenticator"})]}),c.jsxs("label",{children:["OTP Code",c.jsx("input",{name:"code",type:"text",inputMode:"numeric",maxLength:"6",value:n,onChange:E,placeholder:"Enter OTP code"})]}),c.jsx("button",{className:"btn btn-primary",type:"submit",disabled:n.length!==6,children:"Verify OTP"}),d&&c.jsx("p",{className:"form-error",children:d}),c.jsx("button",{type:"button",className:"btn btn-secondary",onClick:S,children:"Back to login"})]})),c.jsx("main",{className:"auth-page",children:c.jsxs("section",{className:"auth-panel",children:[c.jsxs("div",{className:"auth-copy",children:[c.jsx("div",{className:"auth-copy-logo-box",children:c.jsx(Wy,{})}),c.jsx("p",{className:"eyebrow",children:"Secure Access"}),c.jsx("h1",{children:"Crime Investigation System"}),c.jsx("p",{children:"Login with your credentials. If your account uses two factor authentication, enter the OTP code next."})]}),c.jsxs("form",{className:"auth-card",onSubmit:b,children:[c.jsxs("div",{className:"auth-brand",children:[c.jsx("img",{className:"auth-brand-logo",src:"/logos/logo-mark.png",alt:"CrimeDesk logo"}),c.jsxs("div",{children:[c.jsx("strong",{children:"CrimeDesk Portal"}),c.jsx("small",{children:"Secure case access"})]})]}),c.jsxs("div",{children:[c.jsx("p",{className:"eyebrow",children:"Welcome Back"}),c.jsx("h2",{children:y})]}),P]})]})})}function lL(){const[t,e]=I.useState({name:"",email:"",password:""}),n=su(),i=s=>{const a=s.target.name,o=s.target.value;a==="name"&&e({name:o,email:t.email,password:t.password}),a==="email"&&e({name:t.name,email:o,password:t.password}),a==="password"&&e({name:t.name,email:t.email,password:o})},r=async s=>{s.preventDefault();try{await Le.post("/users/register",t),localStorage.removeItem("token"),localStorage.removeItem("user"),n("/")}catch(a){alert(Xe(a,"Registration failed"))}};return c.jsx("main",{className:"auth-page",children:c.jsxs("section",{className:"auth-panel",children:[c.jsxs("div",{className:"auth-copy",children:[c.jsx("div",{className:"auth-copy-logo-box",children:c.jsx(Wy,{})}),c.jsx("p",{className:"eyebrow",children:"Citizen Signup"}),c.jsx("h1",{children:"Create Your Account"}),c.jsx("p",{children:"Set up access to submit complaints and track investigation updates."})]}),c.jsxs("form",{className:"auth-card",onSubmit:r,children:[c.jsxs("div",{className:"auth-brand",children:[c.jsx("img",{className:"auth-brand-logo",src:"/logos/logo-mark.png",alt:"CrimeDesk logo"}),c.jsxs("div",{children:[c.jsx("strong",{children:"CrimeDesk Portal"}),c.jsx("small",{children:"Citizen account setup"})]})]}),c.jsxs("div",{children:[c.jsx("p",{className:"eyebrow",children:"Registration"}),c.jsx("h2",{children:"Sign Up"})]}),c.jsxs("label",{children:["Full Name",c.jsx("input",{name:"name",value:t.name,onChange:i,placeholder:"Enter full name"})]}),c.jsxs("label",{children:["Email",c.jsx("input",{name:"email",type:"email",value:t.email,onChange:i,placeholder:"Enter email"})]}),c.jsxs("label",{children:["Password",c.jsx("input",{name:"password",type:"password",value:t.password,onChange:i,placeholder:"Create password"})]}),c.jsx("button",{className:"btn btn-primary",type:"submit",children:"Register"}),c.jsxs("p",{className:"form-link",children:["Already registered? ",c.jsx(Ip,{to:"/",children:"Login"})]}),c.jsx("p",{className:"auth-security-note",children:"Your account is used for complaint and case updates"})]})]})})}function cL({fir:t,onEdit:e,onDelete:n,role:i}){const r=t.statusHistory||[],s=t.status||"pending";return c.jsxs("article",{className:"fir-card",children:[c.jsxs("div",{className:"fir-card-header",children:[c.jsxs("div",{children:[c.jsx("p",{className:"eyebrow",children:"FIR Record"}),c.jsx("h3",{children:t.title})]}),c.jsx("span",{className:`badge badge-${s}`,children:s})]}),c.jsx("p",{className:"fir-description",children:t.description}),c.jsxs("div",{className:"fir-meta",children:[c.jsx("span",{children:"Location"}),c.jsx("strong",{children:t.location})]}),r.length>0&&c.jsxs("div",{className:"status-history",children:[c.jsx("span",{children:"Status History"}),r.map(a=>c.jsxs("p",{children:[a.status," on ",new Date(a.changedAt).toLocaleString()]},a._id||`${a.status}-${a.changedAt}`))]}),c.jsxs("div",{className:"card-actions",children:[["police","admin"].includes(i)&&c.jsx("button",{className:"btn btn-secondary",onClick:()=>e(t),children:"Edit Status"}),i==="admin"&&c.jsx("button",{className:"btn btn-danger",onClick:()=>n(t._id),children:"Delete"})]})]})}function ei(){return c.jsxs("div",{className:"loader-box",children:[c.jsx("img",{className:"loader-logo",src:"/logos/loading-logo.png",alt:""}),c.jsx("span",{children:"Loading investigation data..."})]})}const uL=["pending","investigating","closed"];function dL(){const[t,e]=I.useState([]),[n,i]=I.useState(!0),[r,s]=I.useState(""),[a,o]=I.useState(""),{user:l}=Jn(),u=async()=>{try{const x=await Le.get("/fir");e(x.data)}finally{i(!1)}};I.useEffect(()=>{u()},[]);const d=async x=>{await Le.delete(`/fir/${x}`),u()},h=async x=>{const m=prompt("Enter status: pending, investigating, or closed",x.status||"pending");if(m){if(!uL.includes(m)){alert("Use only pending investigating or closed status");return}await Le.put(`/fir/${x._id}`,{status:m}),u()}},f=()=>{const x=[];for(const m of t){let p=!0;r&&(p=m.status===r);let v=!0;if(a){const S=a.toLowerCase(),E=m.title||"",A=m.description||"",w=m.location||"";v=`${E} ${A} ${w}`.toLowerCase().includes(S)}p&&v&&x.push(m)}return x};let g="";l&&l.role&&(g=l.role);const _=f();return c.jsxs("section",{className:"content-section",children:[c.jsxs("div",{className:"section-header",children:[c.jsxs("div",{children:[c.jsx("p",{className:"eyebrow",children:"Records"}),c.jsx("h2",{children:"Filed FIRs"})]}),c.jsxs("span",{className:"count-pill",children:[_.length," filtered"]})]}),c.jsxs("div",{className:"filter-row",children:[c.jsxs("label",{children:["Search",c.jsx("input",{value:a,onChange:x=>o(x.target.value),placeholder:"Search by title, location, or description"})]}),c.jsxs("label",{children:["Status",c.jsxs("select",{value:r,onChange:x=>s(x.target.value),children:[c.jsx("option",{value:"",children:"All statuses"}),c.jsx("option",{value:"pending",children:"Pending"}),c.jsx("option",{value:"investigating",children:"Investigating"}),c.jsx("option",{value:"closed",children:"Closed"})]})]})]}),n&&c.jsx("div",{className:"empty-state",children:c.jsx(ei,{})}),!n&&t.length===0&&c.jsxs("div",{className:"empty-state",children:[c.jsx("h3",{children:"No FIR records found"}),c.jsx("p",{children:"Create a new FIR to see it listed here."})]}),c.jsx("div",{className:"fir-grid",children:_.map(x=>c.jsx(cL,{fir:x,onEdit:h,onDelete:d,role:g},x._id))})]})}function hn({title:t="Dashboard"}){const{theme:e,toggleTheme:n}=sT();let i="Use Dark Mode";return e==="dark"&&(i="Use Light Mode"),c.jsxs("header",{className:"topbar",children:[c.jsxs("div",{children:[c.jsx("p",{className:"eyebrow",children:"AI Crime Investigation System"}),c.jsx("h1",{children:t})]}),c.jsxs("div",{className:"topbar-actions",children:[c.jsx("button",{className:"btn btn-secondary theme-btn",onClick:n,children:i}),c.jsxs("div",{className:"status-pill",children:[c.jsx("span",{className:"status-dot"}),"Online"]})]})]})}const t_={user:"/logos/role-user.png",police:"/logos/role-police.png",admin:"/logos/role-admin.png"},fL=[{label:"Dashboard",path:"/dashboard",icon:"/logos/logo-mark.png"},{label:"Submit Complaint",path:"/create",icon:"/logos/icon-fir.png",roles:["user"]},{label:"Create FIR",path:"/create-fir",icon:"/logos/icon-fir.png",roles:["police","admin"]},{label:"Evidence",path:"/evidence",icon:"/logos/icon-evidence.png",roles:["police","admin"]},{label:"Cases",path:"/cases",icon:"/logos/icon-cases.png"},{label:"Crime Map",path:"/crime-map",icon:"/logos/icon-cases.png"},{label:"Suspects",path:"/suspects",icon:"/logos/icon-suspects.png",roles:["police","admin"]},{label:"Reports",path:"/reports",icon:"/logos/icon-reports.png"},{label:"Notifications",path:"/notifications",icon:"/logos/icon-notifications.png"},{label:"Chat",path:"/chat",icon:"/logos/role-user.png"},{label:"Live Meeting",path:"/meetings",icon:"/logos/role-admin.png",roles:["admin","police"]},{label:"AI Analysis",path:"/ai",icon:"/logos/icon-ai.png",roles:["police","admin"]},{label:"AI Logs",path:"/ai-logs",icon:"/logos/icon-alert.png"},{label:"Activity Logs",path:"/activity-logs",icon:"/logos/icon-alert.png"},{label:"Users",path:"/users",icon:"/logos/role-admin.png",roles:["admin"]}];function pn(){const{user:t,logout:e}=Jn();let n="user";t&&t.role&&(n=t.role);let i="Logged in";t&&t.name&&(i=t.name);const r=t_[n]||t_.user,s=o=>o.roles?o.roles.includes(n):!0,a=[];for(const o of fL)s(o)&&a.push(o);return c.jsxs("aside",{className:"sidebar",children:[c.jsxs("div",{className:"brand",children:[c.jsx("img",{className:"brand-logo",src:"/logos/logo-mark.png",alt:"CrimeDesk logo"}),c.jsxs("div",{children:[c.jsx("strong",{children:"CrimeDesk"}),c.jsx("span",{children:"Investigation Portal"})]})]}),c.jsx("nav",{className:"side-nav",children:a.map(o=>c.jsxs(Qw,{to:o.path,children:[c.jsx("img",{className:"nav-icon",src:o.icon,alt:""}),c.jsx("span",{children:o.label})]},o.path))}),c.jsxs("div",{className:"user-box",children:[c.jsxs("div",{className:"user-role-row",children:[c.jsx("img",{className:"role-icon",src:r,alt:""}),c.jsxs("div",{children:[c.jsx("span",{children:i}),c.jsx("strong",{children:n})]})]}),c.jsx("button",{className:"logout-btn",onClick:e,children:"Logout"})]})]})}const hL=t=>t.toLocaleString("default",{month:"short"}),pL=()=>{const t=new Date,e=[];for(let n=5;n>=0;n-=1){const i=new Date(t.getFullYear(),t.getMonth()-n,1);e.push({key:`${i.getFullYear()}-${i.getMonth()}`,label:hL(i),value:0})}return e},mL=t=>{const e=pL(),n={};for(const i of e)n[i.key]=i;for(const i of t){const r=new Date(i.createdAt);if(Number.isNaN(r.getTime()))continue;const s=`${r.getFullYear()}-${r.getMonth()}`,a=n[s];a&&(a.value+=1)}return e},Xy=t=>{let e=0;for(const n of t)e+=n.value;return e},gL=t=>{let e=1;for(const n of t)n.value>e&&(e=n.value);return e},Dl=(t,e)=>{const n={};for(const i in e)n[i]=e[i];for(const i of t)n[i.status]!==void 0&&(n[i.status]+=1);return n},n_=t=>{const e=t.slice();return e.sort((n,i)=>new Date(i.createdAt)-new Date(n.createdAt)),e.slice(0,5)};function Il({title:t,rows:e}){const n=Xy(e);return c.jsxs("article",{className:"form-card chart-card",children:[c.jsxs("div",{className:"chart-title-row",children:[c.jsx("p",{className:"eyebrow",children:t}),c.jsx("span",{className:"chart-total",children:n})]}),c.jsx("div",{className:"bar-chart",children:e.map(i=>{let r=0;return n>0&&(r=Math.round(i.value/n*100)),c.jsxs("div",{className:"bar-row",children:[c.jsxs("div",{className:"bar-label",children:[c.jsx("span",{children:i.label}),c.jsx("strong",{children:i.value})]}),c.jsx("div",{className:"bar-track",children:c.jsx("span",{className:"bar-fill",style:{width:`${r}%`,backgroundColor:i.color}})})]},i.label)})})]})}function vL({title:t,points:e}){const n=Xy(e),i=gL(e);return c.jsxs("article",{className:"form-card chart-card activity-card",children:[c.jsxs("div",{className:"chart-title-row",children:[c.jsx("p",{className:"eyebrow",children:t}),c.jsx("span",{className:"chart-total",children:n})]}),c.jsx("div",{className:"activity-bars","aria-label":t,children:e.map(r=>{const s=Math.round(r.value/i*100);let a=8;return r.value>0&&(a=Math.max(s,24)),c.jsxs("div",{className:"activity-month",children:[c.jsx("span",{className:"activity-value",children:r.value}),c.jsx("div",{className:"activity-track",children:c.jsx("span",{className:"activity-fill",style:{height:`${a}%`}})}),c.jsx("span",{className:"activity-label",children:r.label})]},r.key)})})]})}function Va({label:t,value:e,icon:n}){return c.jsxs("article",{className:"summary-card summary-card-icon",children:[c.jsxs("div",{children:[c.jsx("p",{children:t}),c.jsx("strong",{children:e})]}),c.jsx("img",{className:"summary-icon",src:n,alt:""})]})}const _L=t=>{const e=Dl(t.firs,{pending:0,investigating:0,closed:0}),n=Dl(t.cases,{open:0,under_review:0,closed:0}),i=Dl(t.evidence,{collected:0,verified:0,archived:0}),r=Dl(t.suspects,{unknown:0,wanted:0,cleared:0});return{firChart:[{label:"Pending",value:e.pending,color:"#f59e0b"},{label:"Investigating",value:e.investigating,color:"#2f6fed"},{label:"Closed",value:e.closed,color:"#16a34a"}],caseChart:[{label:"Open",value:n.open,color:"#2f6fed"},{label:"Under Review",value:n.under_review,color:"#a855f7"},{label:"Closed",value:n.closed,color:"#16a34a"}],evidenceChart:[{label:"Collected",value:i.collected,color:"#f59e0b"},{label:"Verified",value:i.verified,color:"#14b8a6"},{label:"Archived",value:i.archived,color:"#64748b"}],suspectChart:[{label:"Unknown",value:r.unknown,color:"#64748b"},{label:"Wanted",value:r.wanted,color:"#ef4444"},{label:"Cleared",value:r.cleared,color:"#16a34a"}],caseActivity:mL(t.cases),recentCases:n_(t.cases),recentEvidence:n_(t.evidence)}};function xL(){const{user:t}=Jn();let e="";t&&t.role&&(e=t.role);const n=e==="police"||e==="admin",[i,r]=I.useState({firs:[],evidence:[],cases:[],suspects:[],unreadNotifications:0}),[s,a]=I.useState(!0);I.useEffect(()=>{(async()=>{try{const u=await Le.get("/fir"),d=await Le.get("/evidence"),h=await Le.get("/notifications/unread/count"),f=await Le.get("/cases");let g=[];n&&(g=(await Le.get("/suspects")).data||[]);let _=0;h.data&&h.data.unread&&(_=h.data.unread),r({firs:u.data||[],evidence:d.data||[],cases:f.data||[],suspects:g,unreadNotifications:_})}catch(u){console.error(u)}finally{a(!1)}})()},[n]);const o=_L(i);return c.jsxs("div",{className:"app-layout",children:[c.jsx(pn,{}),c.jsxs("main",{className:"main-panel",children:[c.jsx(hn,{title:"Dashboard"}),c.jsxs("section",{className:"dashboard-summary",children:[c.jsx(Va,{label:"Total FIRs",value:i.firs.length,icon:"/logos/icon-fir.png"}),c.jsx(Va,{label:"Total Cases",value:i.cases.length,icon:"/logos/icon-cases.png"}),c.jsx(Va,{label:"Evidence Items",value:i.evidence.length,icon:"/logos/icon-evidence.png"}),c.jsx(Va,{label:"Unread Alerts",value:i.unreadNotifications,icon:"/logos/icon-notifications.png"}),n&&c.jsx(Va,{label:"Total Suspects",value:i.suspects.length,icon:"/logos/icon-suspects.png"})]}),c.jsxs("section",{className:"content-section dashboard-analytics-grid",children:[c.jsx(Il,{title:"FIR Status Graph",rows:o.firChart}),c.jsx(Il,{title:"Case Status Graph",rows:o.caseChart}),c.jsx(Il,{title:"Evidence Status Graph",rows:o.evidenceChart}),n&&c.jsx(Il,{title:"Suspect Status Graph",rows:o.suspectChart})]}),c.jsx("section",{className:"content-section dashboard-plot-section",children:c.jsx(vL,{title:"Case Activity Chart",points:o.caseActivity})}),c.jsxs("section",{className:"content-section dashboard-analytics-grid",children:[c.jsxs("article",{className:"form-card",children:[c.jsx("p",{className:"eyebrow",children:"Recent Cases"}),o.recentCases.length===0&&!s&&c.jsx("p",{children:"No recent cases."}),o.recentCases.map(l=>c.jsxs("div",{className:"fir-meta",children:[c.jsx("span",{children:l.status}),c.jsx("strong",{children:l.title})]},l._id))]}),c.jsxs("article",{className:"form-card",children:[c.jsx("p",{className:"eyebrow",children:"Recent Evidence"}),o.recentEvidence.length===0&&!s&&c.jsx("p",{children:"No recent evidence."}),o.recentEvidence.map(l=>c.jsxs("div",{className:"fir-meta",children:[c.jsx("span",{children:l.status}),c.jsx("strong",{children:l.title})]},l._id))]})]}),c.jsx(dL,{})]})]})}function yL(){const[t,e]=I.useState({title:"",description:"",location:""}),n=r=>{const s=r.target.name,a=r.target.value;s==="title"&&e({title:a,description:t.description,location:t.location}),s==="description"&&e({title:t.title,description:a,location:t.location}),s==="location"&&e({title:t.title,description:t.description,location:a})},i=async r=>{r.preventDefault();try{await Le.post("/complaints",t),alert("Complaint created"),e({title:"",description:"",location:""})}catch(s){alert(Xe(s,"Complaint creation failed"))}};return c.jsxs("div",{className:"app-layout",children:[c.jsx(pn,{}),c.jsxs("main",{className:"main-panel",children:[c.jsx(hn,{title:"Create Complaint"}),c.jsxs("section",{className:"content-section narrow",children:[c.jsx("div",{className:"section-header",children:c.jsxs("div",{children:[c.jsx("p",{className:"eyebrow",children:"New Complaint"}),c.jsx("h2",{children:"Fill Complaint Details"})]})}),c.jsxs("form",{className:"form-card",onSubmit:i,children:[c.jsxs("label",{children:["Complaint Title",c.jsx("input",{name:"title",value:t.title,onChange:n,placeholder:"Enter complaint title"})]}),c.jsxs("label",{children:["Description",c.jsx("textarea",{name:"description",value:t.description,onChange:n,placeholder:"Describe the incident",rows:"6"})]}),c.jsxs("label",{children:["Location",c.jsx("input",{name:"location",value:t.location,onChange:n,placeholder:"Enter incident location"})]}),c.jsx("button",{className:"btn btn-primary",type:"submit",children:"Create Complaint"})]})]})]})]})}function SL(){const[t,e]=I.useState([]),[n,i]=I.useState(""),[r,s]=I.useState({title:"",description:"",location:""}),[a,o]=I.useState(""),[l,u]=I.useState("");I.useEffect(()=>{(async()=>{try{const g=await Le.get("/complaints"),_=[];for(const x of g.data)x.firCreated||_.push(x);e(_)}catch(g){o(Xe(g,"Failed to load complaints"))}})()},[]),I.useEffect(()=>{let f=null;for(const g of t)g._id===n&&(f=g);f&&s({title:f.title||"",description:f.description||"",location:f.location||""})},[n,t]);const d=f=>{const g=f.target.name,_=f.target.value;g==="title"&&s({title:_,description:r.description,location:r.location}),g==="description"&&s({title:r.title,description:_,location:r.location}),g==="location"&&s({title:r.title,description:r.description,location:_})},h=async f=>{if(f.preventDefault(),o(""),u(""),!n){o("Please select a complaint to create an FIR from.");return}try{await Le.post("/fir",{complaintId:n,title:r.title,description:r.description,location:r.location}),u("FIR created successfully"),i(""),s({title:"",description:"",location:""})}catch(g){o(Xe(g,"Failed to create FIR"))}};return c.jsxs("div",{className:"app-layout",children:[c.jsx(pn,{}),c.jsxs("main",{className:"main-panel",children:[c.jsx(hn,{title:"Create FIR"}),c.jsxs("section",{className:"content-section narrow",children:[c.jsx("div",{className:"section-header",children:c.jsxs("div",{children:[c.jsx("p",{className:"eyebrow",children:"New FIR"}),c.jsx("h2",{children:"Create FIR from Complaint"})]})}),c.jsxs("div",{className:"form-card",children:[a&&c.jsx("div",{className:"alert alert-error",children:a})," ",l&&c.jsx("div",{className:"alert alert-success",children:l})," ",c.jsxs("label",{children:["Select Complaint",c.jsxs("select",{value:n,onChange:f=>i(f.target.value),children:[c.jsx("option",{value:"",children:"Select a complaint"}),t.map(f=>c.jsxs("option",{value:f._id,children:[f.title," - ",f.location]},f._id))]})]}),c.jsxs("form",{onSubmit:h,children:[c.jsxs("label",{children:["FIR Title",c.jsx("input",{name:"title",value:r.title,onChange:d,placeholder:"Enter FIR title"})]}),c.jsxs("label",{children:["Description",c.jsx("textarea",{name:"description",value:r.description,onChange:d,placeholder:"Describe the FIR details",rows:"6"})]}),c.jsxs("label",{children:["Location",c.jsx("input",{name:"location",value:r.location,onChange:d,placeholder:"Enter incident location"})]}),c.jsx("button",{className:"btn btn-primary",type:"submit",children:"Create FIR"})]})]})]})]})]})}function EL(){const[t,e]=I.useState(""),[n,i]=I.useState(""),[r,s]=I.useState(""),[a,o]=I.useState(!1),l=async()=>{o(!0),i(""),s("");try{const d=await Le.post("/ai/analyze",{text:t.trim()});i(d.data.result)}catch(d){s(Xe(d,"AI analysis failed. Check that the backend server is running."))}finally{o(!1)}};let u="Analyze";return a&&(u="Analyzing..."),c.jsxs("div",{className:"app-layout",children:[" ",c.jsx(pn,{})," ",c.jsxs("main",{className:"main-panel",children:[" ",c.jsx(hn,{title:"AI Analysis"})," ",c.jsxs("section",{className:"content-section narrow",children:[" ",c.jsxs("div",{className:"section-header",children:[" ",c.jsxs("div",{children:[c.jsx("p",{className:"eyebrow",children:"Investigation Assistant"})," ",c.jsx("h2",{children:"Analyze Crime Text"})," "]})]}),c.jsxs("div",{className:"form-card",children:[" ",c.jsxs("label",{children:["Case Notes",c.jsx("textarea",{value:t,onChange:d=>e(d.target.value),placeholder:"Paste case details or witness notes",rows:"8"})]}),c.jsx("button",{className:"btn btn-primary",onClick:l,disabled:a||!t.trim(),children:u}),r&&c.jsx("div",{className:"analysis-error",children:c.jsx("p",{children:r})}),n&&c.jsxs("div",{className:"analysis-result",children:[c.jsx("p",{className:"eyebrow",children:"AI Result"}),c.jsx("p",{children:n})]})]})]})]})]})}const i_={title:"",description:"",caseId:"",suspectId:"",status:"collected"},ML={q:"",status:"",caseId:"",suspectId:"",sortBy:"createdAt",sortOrder:"desc"},wL=t=>{const e={};return t.q&&(e.q=t.q),t.status&&(e.status=t.status),t.caseId&&(e.caseId=t.caseId),t.suspectId&&(e.suspectId=t.suspectId),t.sortBy&&(e.sortBy=t.sortBy),t.sortOrder&&(e.sortOrder=t.sortOrder),e},TL=t=>t.caseId&&t.caseId.title?t.caseId.title:"No case found",bL=t=>t.suspectId&&t.suspectId.name?t.suspectId.name:"No suspect linked",CL=t=>t.uploadedBy&&t.uploadedBy.name?t.uploadedBy.name:"Unknown";function AL(){const{user:t}=Jn();let e="",n="";t&&t.role&&(e=t.role),t&&t.id&&(n=t.id);const[i,r]=I.useState(i_),[s,a]=I.useState(null),[o,l]=I.useState(0),[u,d]=I.useState([]),[h,f]=I.useState([]),[g,_]=I.useState([]),[x,m]=I.useState(""),[p,v]=I.useState(""),[S,E]=I.useState(""),[A,w]=I.useState(!0),[C,y]=I.useState(!1),[b,P]=I.useState(ML),N=e==="admin",D=Z=>!!(e==="admin"||Z.uploadedBy&&Z.uploadedBy._id===n),L=async()=>{try{const Z=await Le.get("/cases"),Se=await Le.get("/suspects");d(Z.data||[]),f(Se.data||[])}catch(Z){E(Xe(Z,"Unable to load form options"))}},H=async()=>{w(!0),E("");try{const Z=wL(b),Se=await Le.get("/evidence",{params:Z});_(Se.data||[])}catch(Z){E(Xe(Z,"Unable to load evidence"))}finally{w(!1)}};I.useEffect(()=>{L()},[]),I.useEffect(()=>{H()},[b.q,b.status,b.caseId,b.suspectId,b.sortBy,b.sortOrder]);const U=(Z,Se)=>{const J={title:i.title,description:i.description,caseId:i.caseId,suspectId:i.suspectId,status:i.status};J[Z]=Se,r(J)},O=(Z,Se)=>{const J={q:b.q,status:b.status,caseId:b.caseId,suspectId:b.suspectId,sortBy:b.sortBy,sortOrder:b.sortOrder};J[Z]=Se,P(J)},j=()=>{r(i_),a(null),m(""),l(o+1)},k=async Z=>{if(Z.preventDefault(),v(""),E(""),!i.title||!i.caseId){E("Please enter title and select case");return}if(!x&&!s){E("Please select an evidence file");return}const Se=new FormData;Se.append("title",i.title),Se.append("description",i.description),Se.append("caseId",i.caseId),Se.append("status",i.status),i.suspectId&&Se.append("suspectId",i.suspectId),s&&Se.append("file",s),y(!0);try{x?(await Le.put(`/evidence/${x}`,Se),v("Evidence updated successfully")):(await Le.post("/evidence",Se),v("Evidence uploaded successfully")),j(),H()}catch(J){E(Xe(J,"Unable to save evidence"))}finally{y(!1)}},K=Z=>{let Se="",J="";Z.caseId&&Z.caseId._id&&(Se=Z.caseId._id),Z.suspectId&&Z.suspectId._id&&(J=Z.suspectId._id),m(Z._id),r({title:Z.title||"",description:Z.description||"",caseId:Se,suspectId:J,status:Z.status||"collected"}),a(null),l(o+1)},ee=Z=>{Z.target.files&&Z.target.files.length>0&&a(Z.target.files[0])},re=async Z=>{if(window.confirm("Do you want to delete this evidence"))try{await Le.delete(`/evidence/${Z}`),v("Evidence deleted successfully"),H()}catch(J){E(Xe(J,"Unable to delete evidence"))}};let $="Upload Evidence",Ce="Upload Evidence";return C?$="Saving":x&&($="Update Evidence",Ce="Edit Evidence"),c.jsxs("div",{className:"app-layout",children:[c.jsx(pn,{}),c.jsxs("main",{className:"main-panel",children:[c.jsx(hn,{title:"Evidence Management"}),c.jsxs("section",{className:"content-section",children:[c.jsxs("div",{className:"section-header",children:[c.jsxs("div",{children:[c.jsx("p",{className:"eyebrow",children:"Investigation Files"}),c.jsx("h2",{children:"Evidence"})]}),c.jsxs("span",{className:"count-pill",children:[g.length," total"]})]}),c.jsxs("form",{className:"form-card",onSubmit:k,children:[c.jsx("p",{className:"eyebrow",children:Ce}),c.jsxs("div",{className:"filter-row case-filter-grid",children:[c.jsxs("label",{children:["Title",c.jsx("input",{value:i.title,onChange:Z=>U("title",Z.target.value),placeholder:"Evidence title"})]}),c.jsxs("label",{children:["Status",c.jsxs("select",{value:i.status,onChange:Z=>U("status",Z.target.value),children:[c.jsx("option",{value:"collected",children:"Collected"}),c.jsx("option",{value:"verified",children:"Verified"}),c.jsx("option",{value:"archived",children:"Archived"})]})]}),c.jsxs("label",{children:["Case",c.jsxs("select",{value:i.caseId,onChange:Z=>U("caseId",Z.target.value),children:[c.jsx("option",{value:"",children:"Select case"}),u.map(Z=>c.jsx("option",{value:Z._id,children:Z.title},Z._id))]})]}),c.jsxs("label",{children:["Suspect",c.jsxs("select",{value:i.suspectId,onChange:Z=>U("suspectId",Z.target.value),children:[c.jsx("option",{value:"",children:"No suspect selected"}),h.map(Z=>c.jsx("option",{value:Z._id,children:Z.name},Z._id))]})]}),c.jsxs("label",{children:["File",c.jsx("input",{type:"file",onChange:ee,accept:"image/*,application/pdf,video/*"},o)]})]}),c.jsxs("label",{children:["Description",c.jsx("textarea",{value:i.description,onChange:Z=>U("description",Z.target.value),placeholder:"Describe the evidence"})]}),c.jsxs("div",{className:"card-actions",children:[c.jsx("button",{className:"btn btn-primary",type:"submit",disabled:C,children:$}),x&&c.jsx("button",{className:"btn btn-secondary",type:"button",onClick:j,children:"Cancel Edit"})]})]}),c.jsxs("section",{className:"form-card case-filter-card",children:[c.jsx("p",{className:"eyebrow",children:"Advanced Search"}),c.jsxs("div",{className:"filter-row case-filter-grid",children:[c.jsxs("label",{children:["Search Text",c.jsx("input",{value:b.q,onChange:Z=>O("q",Z.target.value),placeholder:"Search title or description"})]}),c.jsxs("label",{children:["Status",c.jsxs("select",{value:b.status,onChange:Z=>O("status",Z.target.value),children:[c.jsx("option",{value:"",children:"All statuses"}),c.jsx("option",{value:"collected",children:"Collected"}),c.jsx("option",{value:"verified",children:"Verified"}),c.jsx("option",{value:"archived",children:"Archived"})]})]}),c.jsxs("label",{children:["Case",c.jsxs("select",{value:b.caseId,onChange:Z=>O("caseId",Z.target.value),children:[c.jsx("option",{value:"",children:"All cases"}),u.map(Z=>c.jsx("option",{value:Z._id,children:Z.title},Z._id))]})]}),c.jsxs("label",{children:["Suspect",c.jsxs("select",{value:b.suspectId,onChange:Z=>O("suspectId",Z.target.value),children:[c.jsx("option",{value:"",children:"All suspects"}),h.map(Z=>c.jsx("option",{value:Z._id,children:Z.name},Z._id))]})]}),c.jsxs("label",{children:["Sort By",c.jsxs("select",{value:b.sortBy,onChange:Z=>O("sortBy",Z.target.value),children:[c.jsx("option",{value:"createdAt",children:"Created Date"}),c.jsx("option",{value:"title",children:"Title"}),c.jsx("option",{value:"status",children:"Status"})]})]}),c.jsxs("label",{children:["Sort Order",c.jsxs("select",{value:b.sortOrder,onChange:Z=>O("sortOrder",Z.target.value),children:[c.jsx("option",{value:"desc",children:"Newest First"}),c.jsx("option",{value:"asc",children:"Oldest First"})]})]})]})]}),p&&c.jsx("div",{className:"analysis-result",children:c.jsx("p",{children:p})}),S&&c.jsx("div",{className:"analysis-error",children:c.jsx("p",{children:S})}),A&&c.jsx("div",{className:"empty-state",children:c.jsx(ei,{})}),!A&&g.length===0&&c.jsx("div",{className:"empty-state",children:"No evidence found"}),!A&&g.length>0&&c.jsx("div",{className:"fir-grid",children:g.map(Z=>c.jsxs("article",{className:"fir-card",children:[c.jsxs("div",{className:"fir-card-header",children:[c.jsxs("div",{children:[c.jsx("p",{className:"eyebrow",children:"Evidence Item"}),c.jsx("h3",{children:Z.title})]}),c.jsx("span",{className:"badge",children:Z.status})]}),c.jsx("p",{className:"fir-description",children:Z.description||"No description added"}),c.jsxs("div",{className:"fir-meta",children:[c.jsx("span",{children:"Case"}),c.jsx("strong",{children:TL(Z)})]}),c.jsxs("div",{className:"fir-meta",children:[c.jsx("span",{children:"Suspect"}),c.jsx("strong",{children:bL(Z)})]}),c.jsxs("div",{className:"fir-meta",children:[c.jsx("span",{children:"Uploaded By"}),c.jsx("strong",{children:CL(Z)})]}),Z.fileUrl&&c.jsx("a",{className:"btn btn-secondary evidence-file-link",href:Z.fileUrl,target:"_blank",rel:"noreferrer",children:"Open File"}),c.jsxs("div",{className:"card-actions",children:[D(Z)&&c.jsx("button",{className:"btn btn-secondary",type:"button",onClick:()=>K(Z),children:"Edit"}),N&&c.jsx("button",{className:"btn btn-danger",type:"button",onClick:()=>re(Z._id),children:"Delete"})]})]},Z._id))})]})]})]})}const Di=Object.create(null);Di.open="0";Di.close="1";Di.ping="2";Di.pong="3";Di.message="4";Di.upgrade="5";Di.noop="6";const rc=Object.create(null);Object.keys(Di).forEach(t=>{rc[Di[t]]=t});const Ph={type:"error",data:"parser error"},qy=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",$y=typeof ArrayBuffer=="function",Yy=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer,nm=({type:t,data:e},n,i)=>qy&&e instanceof Blob?n?i(e):r_(e,i):$y&&(e instanceof ArrayBuffer||Yy(e))?n?i(e):r_(new Blob([e]),i):i(Di[t]+(e||"")),r_=(t,e)=>{const n=new FileReader;return n.onload=function(){const i=n.result.split(",")[1];e("b"+(i||""))},n.readAsDataURL(t)};function s_(t){return t instanceof Uint8Array?t:t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}let Dd;function RL(t,e){if(qy&&t.data instanceof Blob)return t.data.arrayBuffer().then(s_).then(e);if($y&&(t.data instanceof ArrayBuffer||Yy(t.data)))return e(s_(t.data));nm(t,!1,n=>{Dd||(Dd=new TextEncoder),e(Dd.encode(n))})}const a_="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Za=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let t=0;t<a_.length;t++)Za[a_.charCodeAt(t)]=t;const NL=t=>{let e=t.length*.75,n=t.length,i,r=0,s,a,o,l;t[t.length-1]==="="&&(e--,t[t.length-2]==="="&&e--);const u=new ArrayBuffer(e),d=new Uint8Array(u);for(i=0;i<n;i+=4)s=Za[t.charCodeAt(i)],a=Za[t.charCodeAt(i+1)],o=Za[t.charCodeAt(i+2)],l=Za[t.charCodeAt(i+3)],d[r++]=s<<2|a>>4,d[r++]=(a&15)<<4|o>>2,d[r++]=(o&3)<<6|l&63;return u},PL=typeof ArrayBuffer=="function",im=(t,e)=>{if(typeof t!="string")return{type:"message",data:Ky(t,e)};const n=t.charAt(0);return n==="b"?{type:"message",data:LL(t.substring(1),e)}:rc[n]?t.length>1?{type:rc[n],data:t.substring(1)}:{type:rc[n]}:Ph},LL=(t,e)=>{if(PL){const n=NL(t);return Ky(n,e)}else return{base64:!0,data:t}},Ky=(t,e)=>{switch(e){case"blob":return t instanceof Blob?t:new Blob([t]);case"arraybuffer":default:return t instanceof ArrayBuffer?t:t.buffer}},Zy="",DL=(t,e)=>{const n=t.length,i=new Array(n);let r=0;t.forEach((s,a)=>{nm(s,!1,o=>{i[a]=o,++r===n&&e(i.join(Zy))})})},IL=(t,e)=>{const n=t.split(Zy),i=[];for(let r=0;r<n.length;r++){const s=im(n[r],e);if(i.push(s),s.type==="error")break}return i};function UL(){return new TransformStream({transform(t,e){RL(t,n=>{const i=n.length;let r;if(i<126)r=new Uint8Array(1),new DataView(r.buffer).setUint8(0,i);else if(i<65536){r=new Uint8Array(3);const s=new DataView(r.buffer);s.setUint8(0,126),s.setUint16(1,i)}else{r=new Uint8Array(9);const s=new DataView(r.buffer);s.setUint8(0,127),s.setBigUint64(1,BigInt(i))}t.data&&typeof t.data!="string"&&(r[0]|=128),e.enqueue(r),e.enqueue(n)})}})}let Id;function Ul(t){return t.reduce((e,n)=>e+n.length,0)}function Fl(t,e){if(t[0].length===e)return t.shift();const n=new Uint8Array(e);let i=0;for(let r=0;r<e;r++)n[r]=t[0][i++],i===t[0].length&&(t.shift(),i=0);return t.length&&i<t[0].length&&(t[0]=t[0].slice(i)),n}function FL(t,e){Id||(Id=new TextDecoder);const n=[];let i=0,r=-1,s=!1;return new TransformStream({transform(a,o){for(n.push(a);;){if(i===0){if(Ul(n)<1)break;const l=Fl(n,1);s=(l[0]&128)===128,r=l[0]&127,r<126?i=3:r===126?i=1:i=2}else if(i===1){if(Ul(n)<2)break;const l=Fl(n,2);r=new DataView(l.buffer,l.byteOffset,l.length).getUint16(0),i=3}else if(i===2){if(Ul(n)<8)break;const l=Fl(n,8),u=new DataView(l.buffer,l.byteOffset,l.length),d=u.getUint32(0);if(d>Math.pow(2,21)-1){o.enqueue(Ph);break}r=d*Math.pow(2,32)+u.getUint32(4),i=3}else{if(Ul(n)<r)break;const l=Fl(n,r);o.enqueue(im(s?l:Id.decode(l),e)),i=0}if(r===0||r>t){o.enqueue(Ph);break}}}})}const Jy=4;function Ot(t){if(t)return OL(t)}function OL(t){for(var e in Ot.prototype)t[e]=Ot.prototype[e];return t}Ot.prototype.on=Ot.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this};Ot.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this};Ot.prototype.off=Ot.prototype.removeListener=Ot.prototype.removeAllListeners=Ot.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(arguments.length==1)return delete this._callbacks["$"+t],this;for(var i,r=0;r<n.length;r++)if(i=n[r],i===e||i.fn===e){n.splice(r,1);break}return n.length===0&&delete this._callbacks["$"+t],this};Ot.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),n=this._callbacks["$"+t],i=1;i<arguments.length;i++)e[i-1]=arguments[i];if(n){n=n.slice(0);for(var i=0,r=n.length;i<r;++i)n[i].apply(this,e)}return this};Ot.prototype.emitReserved=Ot.prototype.emit;Ot.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]};Ot.prototype.hasListeners=function(t){return!!this.listeners(t).length};const vu=typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,n)=>n(e,0),qn=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),BL="arraybuffer";function Qy(t,...e){return e.reduce((n,i)=>(t.hasOwnProperty(i)&&(n[i]=t[i]),n),{})}const kL=qn.setTimeout,zL=qn.clearTimeout;function _u(t,e){e.useNativeTimers?(t.setTimeoutFn=kL.bind(qn),t.clearTimeoutFn=zL.bind(qn)):(t.setTimeoutFn=qn.setTimeout.bind(qn),t.clearTimeoutFn=qn.clearTimeout.bind(qn))}const jL=1.33;function VL(t){return typeof t=="string"?HL(t):Math.ceil((t.byteLength||t.size)*jL)}function HL(t){let e=0,n=0;for(let i=0,r=t.length;i<r;i++)e=t.charCodeAt(i),e<128?n+=1:e<2048?n+=2:e<55296||e>=57344?n+=3:(i++,n+=4);return n}function eS(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function GL(t){let e="";for(let n in t)t.hasOwnProperty(n)&&(e.length&&(e+="&"),e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e}function WL(t){let e={},n=t.split("&");for(let i=0,r=n.length;i<r;i++){let s=n[i].split("=");e[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return e}class XL extends Error{constructor(e,n,i){super(e),this.description=n,this.context=i,this.type="TransportError"}}class rm extends Ot{constructor(e){super(),this.writable=!1,_u(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,n,i){return super.emitReserved("error",new XL(e,n,i)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const n=im(e,this.socket.binaryType);this.onPacket(n)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,n={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(n)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const n=GL(e);return n.length?"?"+n:""}}class qL extends rm{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const n=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let i=0;this._polling&&(i++,this.once("pollComplete",function(){--i||n()})),this.writable||(i++,this.once("drain",function(){--i||n()}))}else n()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const n=i=>{if(this.readyState==="opening"&&i.type==="open"&&this.onOpen(),i.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(i)};IL(e,this.socket.binaryType).forEach(n),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,DL(e,n=>{this.doWrite(n,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",n=this.query||{};return this.opts.timestampRequests!==!1&&(n[this.opts.timestampParam]=eS()),!this.supportsBinary&&!n.sid&&(n.b64=1),this.createUri(e,n)}}let tS=!1;try{tS=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const $L=tS;function YL(){}class KL extends qL{constructor(e){if(super(e),typeof location<"u"){const n=location.protocol==="https:";let i=location.port;i||(i=n?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||i!==e.port}}doWrite(e,n){const i=this.request({method:"POST",data:e});i.on("success",n),i.on("error",(r,s)=>{this.onError("xhr post error",r,s)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(n,i)=>{this.onError("xhr poll error",n,i)}),this.pollXhr=e}}class Ni extends Ot{constructor(e,n,i){super(),this.createRequest=e,_u(this,i),this._opts=i,this._method=i.method||"GET",this._uri=n,this._data=i.data!==void 0?i.data:null,this._create()}_create(){var e;const n=Qy(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");n.xdomain=!!this._opts.xd;const i=this._xhr=this.createRequest(n);try{i.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){i.setDisableHeaderCheck&&i.setDisableHeaderCheck(!0);for(let r in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(r)&&i.setRequestHeader(r,this._opts.extraHeaders[r])}}catch{}if(this._method==="POST")try{i.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{i.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(i),"withCredentials"in i&&(i.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(i.timeout=this._opts.requestTimeout),i.onreadystatechange=()=>{var r;i.readyState===3&&((r=this._opts.cookieJar)===null||r===void 0||r.parseCookies(i.getResponseHeader("set-cookie"))),i.readyState===4&&(i.status===200||i.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof i.status=="number"?i.status:0)},0))},i.send(this._data)}catch(r){this.setTimeoutFn(()=>{this._onError(r)},0);return}typeof document<"u"&&(this._index=Ni.requestsCount++,Ni.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=YL,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete Ni.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}Ni.requestsCount=0;Ni.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",o_);else if(typeof addEventListener=="function"){const t="onpagehide"in qn?"pagehide":"unload";addEventListener(t,o_,!1)}}function o_(){for(let t in Ni.requests)Ni.requests.hasOwnProperty(t)&&Ni.requests[t].abort()}const ZL=function(){const t=nS({xdomain:!1});return t&&t.responseType!==null}();class JL extends KL{constructor(e){super(e);const n=e&&e.forceBase64;this.supportsBinary=ZL&&!n}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new Ni(nS,this.uri(),e)}}function nS(t){const e=t.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||$L))return new XMLHttpRequest}catch{}if(!e)try{return new qn[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const iS=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class QL extends rm{get name(){return"websocket"}doOpen(){const e=this.uri(),n=this.opts.protocols,i=iS?{}:Qy(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(i.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,n,i)}catch(r){return this.emitReserved("error",r)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const i=e[n],r=n===e.length-1;nm(i,this.supportsBinary,s=>{try{this.doWrite(i,s)}catch{}r&&vu(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",n=this.query||{};return this.opts.timestampRequests&&(n[this.opts.timestampParam]=eS()),this.supportsBinary||(n.b64=1),this.createUri(e,n)}}const Ud=qn.WebSocket||qn.MozWebSocket;class e3 extends QL{createSocket(e,n,i){return iS?new Ud(e,n,i):n?new Ud(e,n):new Ud(e)}doWrite(e,n){this.ws.send(n)}}class t3 extends rm{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const n=FL(Number.MAX_SAFE_INTEGER,this.socket.binaryType),i=e.readable.pipeThrough(n).getReader(),r=UL();r.readable.pipeTo(e.writable),this._writer=r.writable.getWriter();const s=()=>{i.read().then(({done:o,value:l})=>{o||(this.onPacket(l),s())}).catch(o=>{})};s();const a={type:"open"};this.query.sid&&(a.data=`{"sid":"${this.query.sid}"}`),this._writer.write(a).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const i=e[n],r=n===e.length-1;this._writer.write(i).then(()=>{r&&vu(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const n3={websocket:e3,webtransport:t3,polling:JL},i3=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,r3=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Lh(t){if(t.length>8e3)throw"URI too long";const e=t,n=t.indexOf("["),i=t.indexOf("]");n!=-1&&i!=-1&&(t=t.substring(0,n)+t.substring(n,i).replace(/:/g,";")+t.substring(i,t.length));let r=i3.exec(t||""),s={},a=14;for(;a--;)s[r3[a]]=r[a]||"";return n!=-1&&i!=-1&&(s.source=e,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=s3(s,s.path),s.queryKey=a3(s,s.query),s}function s3(t,e){const n=/\/{2,9}/g,i=e.replace(n,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&i.splice(0,1),e.slice(-1)=="/"&&i.splice(i.length-1,1),i}function a3(t,e){const n={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(i,r,s){r&&(n[r]=s)}),n}const Dh=typeof addEventListener=="function"&&typeof removeEventListener=="function",sc=[];Dh&&addEventListener("offline",()=>{sc.forEach(t=>t())},!1);class Pr extends Ot{constructor(e,n){if(super(),this.binaryType=BL,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(n=e,e=null),e){const i=Lh(e);n.hostname=i.host,n.secure=i.protocol==="https"||i.protocol==="wss",n.port=i.port,i.query&&(n.query=i.query)}else n.host&&(n.hostname=Lh(n.host).host);_u(this,n),this.secure=n.secure!=null?n.secure:typeof location<"u"&&location.protocol==="https:",n.hostname&&!n.port&&(n.port=this.secure?"443":"80"),this.hostname=n.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=n.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},n.transports.forEach(i=>{const r=i.prototype.name;this.transports.push(r),this._transportsByName[r]=i}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},n),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=WL(this.opts.query)),Dh&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},sc.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const n=Object.assign({},this.opts.query);n.EIO=Jy,n.transport=e,this.id&&(n.sid=this.id);const i=Object.assign({},this.opts,{query:n,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](i)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&Pr.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const n=this.createTransport(e);n.open(),this.setTransport(n)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",n=>this._onClose("transport close",n))}onOpen(){this.readyState="open",Pr.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const n=new Error("server error");n.code=e.data,this._onError(n);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let n=1;for(let i=0;i<this.writeBuffer.length;i++){const r=this.writeBuffer[i].data;if(r&&(n+=VL(r)),i>0&&n>this._maxPayload)return this.writeBuffer.slice(0,i);n+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,vu(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,n,i){return this._sendPacket("message",e,n,i),this}send(e,n,i){return this._sendPacket("message",e,n,i),this}_sendPacket(e,n,i,r){if(typeof n=="function"&&(r=n,n=void 0),typeof i=="function"&&(r=i,i=null),this.readyState==="closing"||this.readyState==="closed")return;i=i||{},i.compress=i.compress!==!1;const s={type:e,data:n,options:i};this.emitReserved("packetCreate",s),this.writeBuffer.push(s),r&&this.once("flush",r),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},n=()=>{this.off("upgrade",n),this.off("upgradeError",n),e()},i=()=>{this.once("upgrade",n),this.once("upgradeError",n)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?i():e()}):this.upgrading?i():e()),this}_onError(e){if(Pr.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,n){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Dh&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const i=sc.indexOf(this._offlineEventListener);i!==-1&&sc.splice(i,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,n),this.writeBuffer=[],this._prevBufferLen=0}}}Pr.protocol=Jy;class o3 extends Pr{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let n=this.createTransport(e),i=!1;Pr.priorWebsocketSuccess=!1;const r=()=>{i||(n.send([{type:"ping",data:"probe"}]),n.once("packet",h=>{if(!i)if(h.type==="pong"&&h.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",n),!n)return;Pr.priorWebsocketSuccess=n.name==="websocket",this.transport.pause(()=>{i||this.readyState!=="closed"&&(d(),this.setTransport(n),n.send([{type:"upgrade"}]),this.emitReserved("upgrade",n),n=null,this.upgrading=!1,this.flush())})}else{const f=new Error("probe error");f.transport=n.name,this.emitReserved("upgradeError",f)}}))};function s(){i||(i=!0,d(),n.close(),n=null)}const a=h=>{const f=new Error("probe error: "+h);f.transport=n.name,s(),this.emitReserved("upgradeError",f)};function o(){a("transport closed")}function l(){a("socket closed")}function u(h){n&&h.name!==n.name&&s()}const d=()=>{n.removeListener("open",r),n.removeListener("error",a),n.removeListener("close",o),this.off("close",l),this.off("upgrading",u)};n.once("open",r),n.once("error",a),n.once("close",o),this.once("close",l),this.once("upgrading",u),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{i||n.open()},200):n.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const n=[];for(let i=0;i<e.length;i++)~this.transports.indexOf(e[i])&&n.push(e[i]);return n}}let l3=class extends o3{constructor(e,n={}){const i=typeof e=="object"?e:n;(!i.transports||i.transports&&typeof i.transports[0]=="string")&&(i.transports=(i.transports||["polling","websocket","webtransport"]).map(r=>n3[r]).filter(r=>!!r)),super(e,i)}};function c3(t,e="",n){let i=t;n=n||typeof location<"u"&&location,t==null&&(t=n.protocol+"//"+n.host),typeof t=="string"&&(t.charAt(0)==="/"&&(t.charAt(1)==="/"?t=n.protocol+t:t=n.host+t),/^(https?|wss?):\/\//.test(t)||(typeof n<"u"?t=n.protocol+"//"+t:t="https://"+t),i=Lh(t)),i.port||(/^(http|ws)$/.test(i.protocol)?i.port="80":/^(http|ws)s$/.test(i.protocol)&&(i.port="443")),i.path=i.path||"/";const s=i.host.indexOf(":")!==-1?"["+i.host+"]":i.host;return i.id=i.protocol+"://"+s+":"+i.port+e,i.href=i.protocol+"://"+s+(n&&n.port===i.port?"":":"+i.port),i}const u3=typeof ArrayBuffer=="function",d3=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer,rS=Object.prototype.toString,f3=typeof Blob=="function"||typeof Blob<"u"&&rS.call(Blob)==="[object BlobConstructor]",h3=typeof File=="function"||typeof File<"u"&&rS.call(File)==="[object FileConstructor]";function sm(t){return u3&&(t instanceof ArrayBuffer||d3(t))||f3&&t instanceof Blob||h3&&t instanceof File}function ac(t,e){if(!t||typeof t!="object")return!1;if(Array.isArray(t)){for(let n=0,i=t.length;n<i;n++)if(ac(t[n]))return!0;return!1}if(sm(t))return!0;if(t.toJSON&&typeof t.toJSON=="function"&&arguments.length===1)return ac(t.toJSON(),!0);for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&ac(t[n]))return!0;return!1}function p3(t){const e=[],n=t.data,i=t;return i.data=Ih(n,e),i.attachments=e.length,{packet:i,buffers:e}}function Ih(t,e){if(!t)return t;if(sm(t)){const n={_placeholder:!0,num:e.length};return e.push(t),n}else if(Array.isArray(t)){const n=new Array(t.length);for(let i=0;i<t.length;i++)n[i]=Ih(t[i],e);return n}else if(typeof t=="object"&&!(t instanceof Date)){const n={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=Ih(t[i],e));return n}return t}function m3(t,e){return t.data=Uh(t.data,e),delete t.attachments,t}function Uh(t,e){if(!t)return t;if(t&&t._placeholder===!0){if(typeof t.num=="number"&&t.num>=0&&t.num<e.length)return e[t.num];throw new Error("illegal attachments")}else if(Array.isArray(t))for(let n=0;n<t.length;n++)t[n]=Uh(t[n],e);else if(typeof t=="object")for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(t[n]=Uh(t[n],e));return t}const g3=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"];var Ke;(function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"})(Ke||(Ke={}));class v3{constructor(e){this.replacer=e}encode(e){return(e.type===Ke.EVENT||e.type===Ke.ACK)&&ac(e)?this.encodeAsBinary({type:e.type===Ke.EVENT?Ke.BINARY_EVENT:Ke.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let n=""+e.type;return(e.type===Ke.BINARY_EVENT||e.type===Ke.BINARY_ACK)&&(n+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(n+=e.nsp+","),e.id!=null&&(n+=e.id),e.data!=null&&(n+=JSON.stringify(e.data,this.replacer)),n}encodeAsBinary(e){const n=p3(e),i=this.encodeAsString(n.packet),r=n.buffers;return r.unshift(i),r}}class am extends Ot{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let n;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");n=this.decodeString(e);const i=n.type===Ke.BINARY_EVENT;i||n.type===Ke.BINARY_ACK?(n.type=i?Ke.EVENT:Ke.ACK,this.reconstructor=new _3(n),n.attachments===0&&super.emitReserved("decoded",n)):super.emitReserved("decoded",n)}else if(sm(e)||e.base64)if(this.reconstructor)n=this.reconstructor.takeBinaryData(e),n&&(this.reconstructor=null,super.emitReserved("decoded",n));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let n=0;const i={type:Number(e.charAt(0))};if(Ke[i.type]===void 0)throw new Error("unknown packet type "+i.type);if(i.type===Ke.BINARY_EVENT||i.type===Ke.BINARY_ACK){const s=n+1;for(;e.charAt(++n)!=="-"&&n!=e.length;);const a=e.substring(s,n);if(a!=Number(a)||e.charAt(n)!=="-")throw new Error("Illegal attachments");const o=Number(a);if(!x3(o)||o<0)throw new Error("Illegal attachments");if(o>this.opts.maxAttachments)throw new Error("too many attachments");i.attachments=o}if(e.charAt(n+1)==="/"){const s=n+1;for(;++n&&!(e.charAt(n)===","||n===e.length););i.nsp=e.substring(s,n)}else i.nsp="/";const r=e.charAt(n+1);if(r!==""&&Number(r)==r){const s=n+1;for(;++n;){const a=e.charAt(n);if(a==null||Number(a)!=a){--n;break}if(n===e.length)break}i.id=Number(e.substring(s,n+1))}if(e.charAt(++n)){const s=this.tryParse(e.substr(n));if(am.isPayloadValid(i.type,s))i.data=s;else throw new Error("invalid payload")}return i}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,n){switch(e){case Ke.CONNECT:return l_(n);case Ke.DISCONNECT:return n===void 0;case Ke.CONNECT_ERROR:return typeof n=="string"||l_(n);case Ke.EVENT:case Ke.BINARY_EVENT:return Array.isArray(n)&&(typeof n[0]=="number"||typeof n[0]=="string"&&g3.indexOf(n[0])===-1);case Ke.ACK:case Ke.BINARY_ACK:return Array.isArray(n)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class _3{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const n=m3(this.reconPack,this.buffers);return this.finishedReconstruction(),n}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const x3=Number.isInteger||function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t};function l_(t){return Object.prototype.toString.call(t)==="[object Object]"}const y3=Object.freeze(Object.defineProperty({__proto__:null,Decoder:am,Encoder:v3,get PacketType(){return Ke}},Symbol.toStringTag,{value:"Module"}));function oi(t,e,n){return t.on(e,n),function(){t.off(e,n)}}const S3=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class sS extends Ot{constructor(e,n,i){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=n,i&&i.auth&&(this.auth=i.auth),this._opts=Object.assign({},i),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[oi(e,"open",this.onopen.bind(this)),oi(e,"packet",this.onpacket.bind(this)),oi(e,"error",this.onerror.bind(this)),oi(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...n){var i,r,s;if(S3.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(n.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(n),this;const a={type:Ke.EVENT,data:n};if(a.options={},a.options.compress=this.flags.compress!==!1,typeof n[n.length-1]=="function"){const d=this.ids++,h=n.pop();this._registerAckCallback(d,h),a.id=d}const o=(r=(i=this.io.engine)===null||i===void 0?void 0:i.transport)===null||r===void 0?void 0:r.writable,l=this.connected&&!(!((s=this.io.engine)===null||s===void 0)&&s._hasPingExpired());return this.flags.volatile&&!o||(l?(this.notifyOutgoingListeners(a),this.packet(a)):this.sendBuffer.push(a)),this.flags={},this}_registerAckCallback(e,n){var i;const r=(i=this.flags.timeout)!==null&&i!==void 0?i:this._opts.ackTimeout;if(r===void 0){this.acks[e]=n;return}const s=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let o=0;o<this.sendBuffer.length;o++)this.sendBuffer[o].id===e&&this.sendBuffer.splice(o,1);n.call(this,new Error("operation has timed out"))},r),a=(...o)=>{this.io.clearTimeoutFn(s),n.apply(this,o)};a.withError=!0,this.acks[e]=a}emitWithAck(e,...n){return new Promise((i,r)=>{const s=(a,o)=>a?r(a):i(o);s.withError=!0,n.push(s),this.emit(e,...n)})}_addToQueue(e){let n;typeof e[e.length-1]=="function"&&(n=e.pop());const i={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((r,...s)=>(this._queue[0],r!==null?i.tryCount>this._opts.retries&&(this._queue.shift(),n&&n(r)):(this._queue.shift(),n&&n(null,...s)),i.pending=!1,this._drainQueue())),this._queue.push(i),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const n=this._queue[0];n.pending&&!e||(n.pending=!0,n.tryCount++,this.flags=n.flags,this.emit.apply(this,n.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:Ke.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,n){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,n),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(i=>String(i.id)===e)){const i=this.acks[e];delete this.acks[e],i.withError&&i.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case Ke.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case Ke.EVENT:case Ke.BINARY_EVENT:this.onevent(e);break;case Ke.ACK:case Ke.BINARY_ACK:this.onack(e);break;case Ke.DISCONNECT:this.ondisconnect();break;case Ke.CONNECT_ERROR:this.destroy();const i=new Error(e.data.message);i.data=e.data.data,this.emitReserved("connect_error",i);break}}onevent(e){const n=e.data||[];e.id!=null&&n.push(this.ack(e.id)),this.connected?this.emitEvent(n):this.receiveBuffer.push(Object.freeze(n))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const n=this._anyListeners.slice();for(const i of n)i.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const n=this;let i=!1;return function(...r){i||(i=!0,n.packet({type:Ke.ACK,id:e,data:r}))}}onack(e){const n=this.acks[e.id];typeof n=="function"&&(delete this.acks[e.id],n.withError&&e.data.unshift(null),n.apply(this,e.data))}onconnect(e,n){this.id=e,this.recovered=n&&this._pid===n,this._pid=n,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:Ke.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const n=this._anyListeners;for(let i=0;i<n.length;i++)if(e===n[i])return n.splice(i,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const n=this._anyOutgoingListeners;for(let i=0;i<n.length;i++)if(e===n[i])return n.splice(i,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const n=this._anyOutgoingListeners.slice();for(const i of n)i.apply(this,e.data)}}}function Ma(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}Ma.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=Math.floor(e*10)&1?t+n:t-n}return Math.min(t,this.max)|0};Ma.prototype.reset=function(){this.attempts=0};Ma.prototype.setMin=function(t){this.ms=t};Ma.prototype.setMax=function(t){this.max=t};Ma.prototype.setJitter=function(t){this.jitter=t};class Fh extends Ot{constructor(e,n){var i;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(n=e,e=void 0),n=n||{},n.path=n.path||"/socket.io",this.opts=n,_u(this,n),this.reconnection(n.reconnection!==!1),this.reconnectionAttempts(n.reconnectionAttempts||1/0),this.reconnectionDelay(n.reconnectionDelay||1e3),this.reconnectionDelayMax(n.reconnectionDelayMax||5e3),this.randomizationFactor((i=n.randomizationFactor)!==null&&i!==void 0?i:.5),this.backoff=new Ma({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(n.timeout==null?2e4:n.timeout),this._readyState="closed",this.uri=e;const r=n.parser||y3;this.encoder=new r.Encoder,this.decoder=new r.Decoder,this._autoConnect=n.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var n;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(n=this.backoff)===null||n===void 0||n.setMin(e),this)}randomizationFactor(e){var n;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(n=this.backoff)===null||n===void 0||n.setJitter(e),this)}reconnectionDelayMax(e){var n;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(n=this.backoff)===null||n===void 0||n.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new l3(this.uri,this.opts);const n=this.engine,i=this;this._readyState="opening",this.skipReconnect=!1;const r=oi(n,"open",function(){i.onopen(),e&&e()}),s=o=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",o),e?e(o):this.maybeReconnectOnOpen()},a=oi(n,"error",s);if(this._timeout!==!1){const o=this._timeout,l=this.setTimeoutFn(()=>{r(),s(new Error("timeout")),n.close()},o);this.opts.autoUnref&&l.unref(),this.subs.push(()=>{this.clearTimeoutFn(l)})}return this.subs.push(r),this.subs.push(a),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(oi(e,"ping",this.onping.bind(this)),oi(e,"data",this.ondata.bind(this)),oi(e,"error",this.onerror.bind(this)),oi(e,"close",this.onclose.bind(this)),oi(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(n){this.onclose("parse error",n)}}ondecoded(e){vu(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,n){let i=this.nsps[e];return i?this._autoConnect&&!i.active&&i.connect():(i=new sS(this,e,n),this.nsps[e]=i),i}_destroy(e){const n=Object.keys(this.nsps);for(const i of n)if(this.nsps[i].active)return;this._close()}_packet(e){const n=this.encoder.encode(e);for(let i=0;i<n.length;i++)this.engine.write(n[i],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,n){var i;this.cleanup(),(i=this.engine)===null||i===void 0||i.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,n),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const n=this.backoff.duration();this._reconnecting=!0;const i=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(r=>{r?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",r)):e.onreconnect()}))},n);this.opts.autoUnref&&i.unref(),this.subs.push(()=>{this.clearTimeoutFn(i)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const Ha={};function oc(t,e){typeof t=="object"&&(e=t,t=void 0),e=e||{};const n=c3(t,e.path||"/socket.io"),i=n.source,r=n.id,s=n.path,a=Ha[r]&&s in Ha[r].nsps,o=e.forceNew||e["force new connection"]||e.multiplex===!1||a;let l;return o?l=new Fh(i,e):(Ha[r]||(Ha[r]=new Fh(i,e)),l=Ha[r]),n.query&&!e.query&&(e.query=n.queryKey),l.socket(n.path,e)}Object.assign(oc,{Manager:Fh,Socket:sS,io:oc,connect:oc});let Fd=null;function wa(){return Fd||(Fd=oc("http://localhost:5000",{autoConnect:!0})),Fd}function aS(t){const e=wa();t&&e.emit("joinUserRoom",t)}function E3(){const{user:t}=Jn(),[e,n]=I.useState([]),[i,r]=I.useState(!0),[s,a]=I.useState(""),o=async()=>{try{const h=await Le.get("/notifications");n(h.data)}catch(h){a(Xe(h,"Unable to load notifications."))}finally{r(!1)}};I.useEffect(()=>{o()},[]),I.useEffect(()=>{t&&t.id&&aS(t.id);const h=wa(),f=()=>{o()};return h.on("newNotification",f),()=>{h.off("newNotification",f)}},[t]);const l=async h=>{try{await Le.patch(`/notifications/${h}/read`);const f=[];for(const g of e)g._id===h?f.push({_id:g._id,title:g.title,message:g.message,read:!0,relatedCase:g.relatedCase,createdAt:g.createdAt,updatedAt:g.updatedAt,createdBy:g.createdBy}):f.push(g);n(f)}catch(f){console.error(f)}},u=()=>{let h=0;for(const f of e)f.read||(h+=1);return h},d=h=>h.read?"notification-card read":"notification-card unread";return c.jsxs("div",{className:"app-layout",children:[c.jsx(pn,{}),c.jsxs("main",{className:"main-panel",children:[c.jsx(hn,{title:"Notifications"}),c.jsxs("section",{className:"content-section",children:[c.jsxs("div",{className:"section-header",children:[c.jsxs("div",{children:[c.jsx("p",{className:"eyebrow",children:"Updates"}),c.jsx("h2",{children:"Your Notifications"})]}),c.jsxs("span",{className:"count-pill",children:[u()," unread"]})," "]}),i&&c.jsx("div",{className:"empty-state",children:c.jsx(ei,{})})," ",!i&&s&&c.jsx("div",{className:"empty-state error-state",children:s})," ",!i&&!s&&e.length===0&&c.jsxs("div",{className:"empty-state",children:[c.jsx("h3",{children:"No notifications yet"}),c.jsx("p",{children:"You will see updates when evidence or case activity occurs."})]}),c.jsx("div",{className:"notification-list",children:e.map(h=>c.jsxs("article",{className:d(h),children:[c.jsxs("div",{children:[c.jsx("strong",{children:h.title}),c.jsx("p",{children:h.message}),h.relatedCase&&c.jsxs("small",{children:["Case: ",h.relatedCase.title]})," "]}),!h.read&&c.jsx("button",{className:"btn-small",onClick:()=>l(h._id),children:"Mark read"})]},h._id))})]})]})]})}function M3(){const[t,e]=I.useState(null),[n,i]=I.useState(""),[r,s]=I.useState(""),[a,o]=I.useState(""),[l,u]=I.useState(!1),d=async()=>{o(""),s(""),u(!0);try{const v=await Le.get("/users/2fa/setup");e(v.data),s("Scan the QR code in your authenticator app and then enter the code below")}catch(v){o(Xe(v,"Failed to generate 2FA secret"))}finally{u(!1)}},h=v=>{const S=v.target.value.replace(/\D/g,"").slice(0,6);i(S),o("")},f=async v=>{v.preventDefault(),o(""),s(""),u(!0);try{await Le.post("/users/2fa/verify",{code:n}),s("Two factor authentication is enabled successfully"),e(null),i("")}catch(S){o(Xe(S,"Invalid OTP code"))}finally{u(!1)}},g=t&&t.secret,_=t&&t.qrCodeDataUrl,x=t&&t.otpauthUrl;let m="Generate 2FA secret";l&&(m="Generating secret...");let p="Verify code";return l&&(p="Verifying..."),c.jsxs("div",{className:"app-layout",children:[c.jsx(pn,{}),c.jsxs("main",{className:"main-panel",children:[c.jsx(hn,{title:"Two Factor Setup"}),c.jsx("section",{className:"auth-panel",children:c.jsxs("div",{className:"auth-card",children:[c.jsx("p",{className:"eyebrow",children:"Secure your account"}),c.jsx("h2",{children:"Two Factor Authentication"}),c.jsx("p",{children:"Use an authenticator app to generate a one time password each time you login."}),c.jsx("button",{className:"btn btn-primary",type:"button",onClick:d,disabled:l,children:m}),g&&c.jsxs("div",{className:"auth-note",children:[c.jsx("p",{children:"Enter this secret into your authenticator app"}),c.jsx("code",{children:t.secret})]}),_&&c.jsxs("div",{className:"qr-box",children:[c.jsx("p",{children:"Scan this QR code with Google Authenticator"}),c.jsx("img",{className:"qr-image",src:t.qrCodeDataUrl,alt:"Authenticator QR code"})]}),x&&c.jsxs("div",{className:"auth-note",children:[c.jsx("p",{children:"Or open this link in your authenticator app"}),c.jsx("a",{href:t.otpauthUrl,target:"_blank",rel:"noreferrer",children:"Set up authenticator"})]}),c.jsxs("form",{onSubmit:f,children:[c.jsxs("label",{children:["OTP Code",c.jsx("input",{name:"code",type:"text",inputMode:"numeric",maxLength:"6",value:n,onChange:h,placeholder:"Enter 6 digit code"})]}),c.jsx("button",{className:"btn btn-primary",type:"submit",disabled:l||n.length!==6,children:p})]}),r&&c.jsx("p",{className:"form-success",children:r}),a&&c.jsx("p",{className:"form-error",children:a}),c.jsx("p",{className:"form-link",children:"After setup, logout and login again to use OTP at login."})]})})]})]})}function w3(){const{user:t}=Jn();let e="";t&&t.id&&(e=t.id);const[n,i]=I.useState([]),[r,s]=I.useState(""),[a,o]=I.useState([]),[l,u]=I.useState(""),[d,h]=I.useState(!0),[f,g]=I.useState(!1),[_,x]=I.useState(""),m=()=>{for(const w of n)if(w._id===r)return w;return null};I.useEffect(()=>{(async()=>{x("");try{const C=await Le.get("/chat/users");i(C.data||[]),C.data&&C.data.length>0&&s(C.data[0]._id)}catch(C){x(Xe(C,"Unable to load chat users"))}finally{h(!1)}})()},[]),I.useEffect(()=>{if(!r)return;(async()=>{x(""),g(!0);try{const C=await Le.get(`/chat/${r}`);o(C.data||[])}catch(C){x(Xe(C,"Unable to load messages"))}finally{g(!1)}})()},[r]),I.useEffect(()=>{e&&aS(e);const w=wa(),C=y=>{const b=String(y.sender),P=String(y.receiver),N=String(r),D=String(e);(b===N&&P===D||b===D&&P===N)&&o(H=>{for(const O of H)if(O._id===y._id)return H;const U=H.slice();return U.push(y),U})};return w.on("newMessage",C),()=>{w.off("newMessage",C)}},[e,r]);const p=async w=>{if(w.preventDefault(),x(""),!!r&&l.trim())try{const C=await Le.post(`/chat/${r}`,{text:l});o(y=>{for(const P of y)if(P._id===C.data._id)return y;const b=y.slice();return b.push(C.data),b}),u("")}catch(C){x(Xe(C,"Unable to send message"))}},v=m(),S=w=>{let C="chat-user-btn";return r===w._id&&(C="chat-user-btn active"),C},E=()=>v?`Chat with ${v.name}`:"Select a user",A=w=>String(w.sender)===String(e)?"chat-message mine":"chat-message theirs";return c.jsxs("div",{className:"app-layout",children:[c.jsx(pn,{}),c.jsxs("main",{className:"main-panel",children:[c.jsx(hn,{title:"Chat"}),c.jsxs("section",{className:"content-section",children:[c.jsx("div",{className:"section-header",children:c.jsxs("div",{children:[c.jsx("p",{className:"eyebrow",children:"Communication"}),c.jsx("h2",{children:"Role Based Chat"})]})}),_&&c.jsx("p",{className:"form-error",children:_}),d&&c.jsx("div",{className:"empty-state",children:c.jsx(ei,{})}),!d&&n.length===0&&c.jsxs("div",{className:"empty-state",children:[c.jsx("h3",{children:"No users available for chat"}),c.jsx("p",{children:"Your role can not chat with anyone right now."})]}),!d&&n.length>0&&c.jsxs("div",{className:"chat-layout",children:[c.jsx("aside",{className:"chat-users",children:n.map(w=>c.jsxs("button",{className:S(w),onClick:()=>s(w._id),children:[c.jsx("strong",{children:w.name}),c.jsx("span",{children:w.role})]},w._id))}),c.jsxs("div",{className:"chat-window",children:[c.jsx("div",{className:"chat-window-head",children:c.jsx("strong",{children:E()})}),c.jsxs("div",{className:"chat-messages",children:[f&&c.jsx("p",{children:"Loading messages..."}),!f&&a.length===0&&c.jsx("p",{children:"No messages yet. Start chatting now."}),a.map(w=>c.jsx("div",{className:A(w),children:c.jsx("p",{children:w.text})},w._id))]}),c.jsxs("form",{className:"chat-form",onSubmit:p,children:[c.jsx("input",{value:l,onChange:w=>u(w.target.value),placeholder:"Type your message"}),c.jsx("button",{className:"btn btn-primary",type:"submit",children:"Send"})]})]})]})]})]})]})}function T3(){const{user:t}=Jn();let e="";t&&t.role&&(e=t.role);const[n,i]=I.useState([]),[r,s]=I.useState(!0),[a,o]=I.useState(""),[l,u]=I.useState(""),[d,h]=I.useState(""),f=e==="admin",g=e==="police";let _="";d&&(_=`https://meet.jit.si/${d}`);const x=E=>E.createdBy&&E.createdBy.name?E.createdBy.name:"Admin",m=E=>d===E.roomCode?"meeting-open-btn active":"meeting-open-btn",p=async()=>{o("");try{const E=await Le.get("/meetings");i(E.data||[]),!d&&E.data&&E.data.length>0&&h(E.data[0].roomCode),(!E.data||E.data.length===0)&&h("")}catch(E){o(Xe(E,"Unable to load meetings"))}finally{s(!1)}};I.useEffect(()=>{p();const E=setInterval(p,5e3);return()=>clearInterval(E)},[]);const v=async E=>{if(E.preventDefault(),o(""),!!l.trim())try{await Le.post("/meetings",{title:l}),u(""),await p()}catch(A){o(Xe(A,"Unable to create meeting"))}},S=async E=>{o("");try{await Le.patch(`/meetings/${E}/close`),await p()}catch(A){o(Xe(A,"Unable to close meeting"))}};return c.jsxs("div",{className:"app-layout",children:[c.jsx(pn,{}),c.jsxs("main",{className:"main-panel",children:[c.jsx(hn,{title:"Live Meeting"}),c.jsxs("section",{className:"content-section",children:[c.jsx("div",{className:"section-header",children:c.jsxs("div",{children:[c.jsx("p",{className:"eyebrow",children:"Video Communication"}),c.jsx("h2",{children:"Live Meeting Room"})]})}),!f&&!g&&c.jsxs("div",{className:"empty-state",children:[c.jsx("h3",{children:"Access denied"}),c.jsx("p",{children:"Only admin and police can use live meeting."})]}),(f||g)&&c.jsxs("div",{className:"meeting-layout",children:[c.jsxs("aside",{className:"meeting-side",children:[a&&c.jsx("p",{className:"form-error",children:a}),f&&c.jsxs("form",{className:"form-card",onSubmit:v,children:[c.jsx("h3",{children:"Create Meeting"}),c.jsxs("label",{children:["Meeting title",c.jsx("input",{value:l,onChange:E=>u(E.target.value),placeholder:"Enter meeting title"})]}),c.jsx("button",{className:"btn btn-primary",type:"submit",children:"Create"})]}),c.jsxs("div",{className:"form-card",children:[c.jsx("h3",{children:"Active Meetings"}),r&&c.jsx(ei,{}),!r&&n.length===0&&c.jsx("p",{children:"No active meeting right now."}),!r&&n.map(E=>c.jsxs("div",{className:"meeting-item",children:[c.jsxs("button",{className:m(E),onClick:()=>h(E.roomCode),children:[c.jsx("strong",{children:E.title}),c.jsxs("span",{children:["Created by ",x(E)]})]}),f&&c.jsx("button",{className:"btn btn-danger",onClick:()=>S(E._id),children:"Close"})]},E._id))]})]}),c.jsxs("div",{className:"meeting-room",children:[!d&&c.jsxs("div",{className:"empty-state",children:[c.jsx("h3",{children:"Select a meeting"}),c.jsx("p",{children:"Choose one active meeting from the left panel."})]}),d&&c.jsx("iframe",{title:"Live Meeting Room",src:_,className:"meeting-iframe",allow:"camera; microphone; fullscreen; display-capture"})]})]})]})]})]})}const b3=["open","under_review","closed"],c_={title:"",description:"",location:"",latitude:"",longitude:"",priority:"medium"},u_={q:"",status:"",priority:"",fromDate:"",toDate:"",sortBy:"createdAt",sortOrder:"desc"},C3=t=>{const e={};return t.q&&(e.q=t.q),t.status&&(e.status=t.status),t.priority&&(e.priority=t.priority),t.fromDate&&(e.fromDate=t.fromDate),t.toDate&&(e.toDate=t.toDate),t.sortBy&&(e.sortBy=t.sortBy),t.sortOrder&&(e.sortOrder=t.sortOrder),e},A3=t=>{const e={open:0,under_review:0,closed:0};for(const n of t)e[n.status]!==void 0&&(e[n.status]+=1);return e},R3=t=>t==="under_review"?"badge badge-investigating":t==="closed"?"badge badge-closed":"badge";function N3(){const{user:t}=Jn();let e="";t&&t.role&&(e=t.role);const[n,i]=I.useState([]),[r,s]=I.useState(!0),[a,o]=I.useState(""),[l,u]=I.useState(""),[d,h]=I.useState(c_),[f,g]=I.useState(u_),_=e==="police"||e==="admin",x=e==="admin",m=async()=>{s(!0),u("");try{const y=C3(f),b=await Le.get("/cases",{params:y});i(b.data||[])}catch(y){u(Xe(y,"Unable to load cases."))}finally{s(!1)}};I.useEffect(()=>{m()},[f.q,f.status,f.priority,f.fromDate,f.toDate,f.sortBy,f.sortOrder]),I.useEffect(()=>{const y=wa(),b=()=>{m()};return y.on("caseUpdated",b),()=>{y.off("caseUpdated",b)}},[f]);const p=(y,b)=>{const P={q:f.q,status:f.status,priority:f.priority,fromDate:f.fromDate,toDate:f.toDate,sortBy:f.sortBy,sortOrder:f.sortOrder};P[y]=b,g(P)},v=(y,b)=>{const P={title:d.title,description:d.description,location:d.location,latitude:d.latitude,longitude:d.longitude,priority:d.priority};P[y]=b,h(P)},S=()=>{g(u_)},E=async y=>{if(y.preventDefault(),o(""),u(""),!d.title||!d.description||!d.location){u("Please fill title, description, and location.");return}try{const b={title:d.title,description:d.description,location:d.location,latitude:d.latitude||void 0,longitude:d.longitude||void 0,priority:d.priority};await Le.post("/cases",b),o("Case created successfully."),h(c_),m()}catch(b){u(Xe(b,"Unable to create case."))}},A=async y=>{const b=prompt("Enter status: open, under_review, or closed",y.status||"open");if(b){if(!b3.includes(b)){u("Use only open under_review or closed status");return}try{await Le.put(`/cases/${y._id}`,{status:b}),o("Case updated successfully."),u(""),m()}catch(P){u(Xe(P,"Unable to update case."))}}},w=async y=>{if(window.confirm("Do you want to delete this case?"))try{await Le.delete(`/cases/${y}`),o("Case deleted successfully."),u(""),m()}catch(P){u(Xe(P,"Unable to delete case."))}},C=A3(n);return c.jsxs("div",{className:"app-layout",children:[c.jsx(pn,{}),c.jsxs("main",{className:"main-panel",children:[c.jsx(hn,{title:"Case Management"}),c.jsxs("section",{className:"content-section",children:[c.jsxs("div",{className:"section-header",children:[c.jsxs("div",{children:[c.jsx("p",{className:"eyebrow",children:"Investigations"}),c.jsx("h2",{children:"Cases"})]}),c.jsxs("span",{className:"count-pill",children:[n.length," total"]})]}),c.jsxs("section",{className:"dashboard-summary",children:[c.jsxs("article",{className:"summary-card",children:[c.jsx("p",{children:"Open Cases"}),c.jsx("strong",{children:C.open})]}),c.jsxs("article",{className:"summary-card",children:[c.jsx("p",{children:"Under Review"}),c.jsx("strong",{children:C.under_review})]}),c.jsxs("article",{className:"summary-card",children:[c.jsx("p",{children:"Closed Cases"}),c.jsx("strong",{children:C.closed})]})]}),c.jsxs("section",{className:"form-card case-filter-card",children:[c.jsx("p",{className:"eyebrow",children:"Advanced Search"}),c.jsxs("div",{className:"filter-row case-filter-grid",children:[c.jsxs("label",{children:["Search Text",c.jsx("input",{value:f.q,onChange:y=>p("q",y.target.value),placeholder:"Search title, description, location"})]}),c.jsxs("label",{children:["Status",c.jsxs("select",{value:f.status,onChange:y=>p("status",y.target.value),children:[c.jsx("option",{value:"",children:"All statuses"}),c.jsx("option",{value:"open",children:"Open"}),c.jsx("option",{value:"under_review",children:"Under Review"}),c.jsx("option",{value:"closed",children:"Closed"})]})]}),c.jsxs("label",{children:["Priority",c.jsxs("select",{value:f.priority,onChange:y=>p("priority",y.target.value),children:[c.jsx("option",{value:"",children:"All priorities"}),c.jsx("option",{value:"low",children:"Low"}),c.jsx("option",{value:"medium",children:"Medium"}),c.jsx("option",{value:"high",children:"High"})]})]}),c.jsxs("label",{children:["From Date",c.jsx("input",{type:"date",value:f.fromDate,onChange:y=>p("fromDate",y.target.value)})]}),c.jsxs("label",{children:["To Date",c.jsx("input",{type:"date",value:f.toDate,onChange:y=>p("toDate",y.target.value)})]}),c.jsxs("label",{children:["Sort By",c.jsxs("select",{value:f.sortBy,onChange:y=>p("sortBy",y.target.value),children:[c.jsx("option",{value:"createdAt",children:"Created Date"}),c.jsx("option",{value:"status",children:"Status"}),c.jsx("option",{value:"priority",children:"Priority"}),c.jsx("option",{value:"title",children:"Title"})]})]}),c.jsxs("label",{children:["Sort Order",c.jsxs("select",{value:f.sortOrder,onChange:y=>p("sortOrder",y.target.value),children:[c.jsx("option",{value:"desc",children:"Newest First"}),c.jsx("option",{value:"asc",children:"Oldest First"})]})]})]}),c.jsx("div",{className:"card-actions",children:c.jsx("button",{className:"btn btn-secondary",type:"button",onClick:S,children:"Reset Filters"})})]}),_&&c.jsxs("form",{className:"form-card",onSubmit:E,children:[c.jsx("p",{className:"eyebrow",children:"Create New Case"}),c.jsxs("label",{children:["Title",c.jsx("input",{value:d.title,onChange:y=>v("title",y.target.value),placeholder:"Case title"})]}),c.jsxs("label",{children:["Description",c.jsx("textarea",{value:d.description,onChange:y=>v("description",y.target.value),placeholder:"Case description"})]}),c.jsxs("label",{children:["Location",c.jsx("input",{value:d.location,onChange:y=>v("location",y.target.value),placeholder:"Incident location"})]}),c.jsxs("div",{className:"filter-row case-filter-grid",children:[c.jsxs("label",{children:["Latitude",c.jsx("input",{type:"number",step:"any",value:d.latitude,onChange:y=>v("latitude",y.target.value),placeholder:"Example 22.5726"})]}),c.jsxs("label",{children:["Longitude",c.jsx("input",{type:"number",step:"any",value:d.longitude,onChange:y=>v("longitude",y.target.value),placeholder:"Example 88.3639"})]})]}),c.jsxs("label",{children:["Priority",c.jsxs("select",{value:d.priority,onChange:y=>v("priority",y.target.value),children:[c.jsx("option",{value:"low",children:"Low"}),c.jsx("option",{value:"medium",children:"Medium"}),c.jsx("option",{value:"high",children:"High"})]})]}),c.jsx("button",{className:"btn btn-primary",type:"submit",children:"Create Case"})]}),a&&c.jsx("div",{className:"analysis-result",children:c.jsx("p",{children:a})}),l&&c.jsx("div",{className:"analysis-error",children:c.jsx("p",{children:l})}),r&&c.jsx("div",{className:"empty-state",children:c.jsx(ei,{})}),!r&&n.length===0&&c.jsxs("div",{className:"empty-state",children:[c.jsx("h3",{children:"No case records found"}),c.jsx("p",{children:"Try adjusting filters or create a new case."})]}),!r&&n.length>0&&c.jsx("div",{className:"fir-grid",children:n.map(y=>{const b=y.statusHistory||[];return c.jsxs("article",{className:"fir-card",children:[c.jsxs("div",{className:"fir-card-header",children:[c.jsx("h3",{children:y.title}),c.jsx("span",{className:R3(y.status),children:y.status})]}),c.jsx("p",{className:"fir-description",children:y.description}),c.jsxs("div",{className:"fir-meta",children:[c.jsx("span",{children:"Location"}),c.jsx("strong",{children:y.location})]}),c.jsxs("div",{className:"fir-meta",children:[c.jsx("span",{children:"Map Coordinates"}),c.jsx("strong",{children:y.latitude&&y.longitude?`${y.latitude}, ${y.longitude}`:"Not added"})]}),c.jsxs("div",{className:"fir-meta",children:[c.jsx("span",{children:"Priority"}),c.jsx("strong",{children:y.priority})]}),c.jsxs("div",{className:"fir-meta",children:[c.jsx("span",{children:"Created"}),c.jsx("strong",{children:new Date(y.createdAt).toLocaleString()})]}),b.length>0&&c.jsxs("div",{className:"status-history",children:[c.jsx("span",{children:"Status History"}),b.map(P=>c.jsxs("p",{children:[P.status," on ",new Date(P.changedAt).toLocaleString()]},P._id||`${P.status}-${P.changedAt}`))]}),_&&c.jsxs("div",{className:"card-actions",children:[c.jsx("button",{className:"btn btn-secondary",onClick:()=>A(y),children:"Update Status"}),x&&c.jsx("button",{className:"btn btn-danger",onClick:()=>w(y._id),children:"Delete"})]})]},y._id)})})]})]})]})}const P3=t=>{if(window.google&&window.google.maps)return Promise.resolve();const e=document.getElementById("google-map-script");return e?new Promise((n,i)=>{e.onload=n,e.onerror=i}):new Promise((n,i)=>{const r=document.createElement("script");r.id="google-map-script",r.src=`https://maps.googleapis.com/maps/api/js?key=${t}`,r.async=!0,r.defer=!0,r.onload=n,r.onerror=i,document.body.appendChild(r)})},d_=t=>{const e=[];for(const n of t){if(n.latitude===void 0||n.latitude===null||n.latitude===""||n.longitude===void 0||n.longitude===null||n.longitude==="")continue;const i=Number(n.latitude),r=Number(n.longitude);!Number.isNaN(i)&&!Number.isNaN(r)&&e.push({_id:n._id,title:n.title,location:n.location,status:n.status,latitude:i,longitude:r})}return e};function L3(){const t=I.useRef(null),e=I.useRef([]),[n,i]=I.useState([]),[r,s]=I.useState(!0),[a,o]=I.useState(""),[l,u]=I.useState(""),d=async()=>{s(!0),o("");try{const f=await Le.get("/cases");i(f.data||[])}catch(f){o(Xe(f,"Unable to load map cases"))}finally{s(!1)}};I.useEffect(()=>{d()},[]),I.useEffect(()=>{const f=wa(),g=()=>{d()};return f.on("caseUpdated",g),()=>{f.off("caseUpdated",g)}},[]),I.useEffect(()=>{const f="AIzaSyAEctPI8AtQoFSfqBIN97WdtHkSgCtik-o";if(!t.current)return;const g=()=>{const _=d_(n);let x={lat:20.5937,lng:78.9629};_.length>0&&(x={lat:_[0].latitude,lng:_[0].longitude});const m=new window.google.maps.Map(t.current,{center:x,zoom:_.length>0?8:5});e.current=[];for(const p of _){const v=new window.google.maps.Marker({position:{lat:p.latitude,lng:p.longitude},map:m,title:p.title}),S=new window.google.maps.InfoWindow({content:`<strong>${p.title}</strong><br>${p.location}<br>Status: ${p.status}`});v.addListener("click",()=>{S.open({anchor:v,map:m})}),e.current.push(v)}};P3(f).then(g).catch(()=>{u("Unable to load Google Maps")})},[n]);const h=d_(n);return c.jsxs("div",{className:"app-layout",children:[c.jsx(pn,{}),c.jsxs("main",{className:"main-panel",children:[c.jsx(hn,{title:"Crime Map"}),c.jsxs("section",{className:"content-section",children:[c.jsxs("div",{className:"section-header",children:[c.jsxs("div",{children:[c.jsx("p",{className:"eyebrow",children:"Geo Location"}),c.jsx("h2",{children:"Crime Mapping"})]}),c.jsxs("span",{className:"count-pill",children:[h.length," mapped"]})]}),r&&c.jsx("div",{className:"empty-state",children:c.jsx(ei,{})}),a&&c.jsx("div",{className:"analysis-error",children:c.jsx("p",{children:a})}),l&&c.jsx("div",{className:"analysis-error",children:c.jsx("p",{children:l})}),!r&&!a&&c.jsxs("section",{className:"form-card",children:[c.jsx("p",{className:"eyebrow",children:"Google Maps View"}),c.jsx("div",{className:"map-box",ref:t})]}),!r&&h.length===0&&c.jsxs("div",{className:"empty-state",children:[c.jsx("h3",{children:"No mapped cases found"}),c.jsx("p",{children:"Add latitude and longitude while creating a case."})]}),!r&&h.length>0&&c.jsx("div",{className:"fir-grid",children:h.map(f=>c.jsxs("article",{className:"fir-card",children:[c.jsxs("div",{className:"fir-card-header",children:[c.jsx("h3",{children:f.title}),c.jsx("span",{className:"badge",children:f.status})]}),c.jsxs("div",{className:"fir-meta",children:[c.jsx("span",{children:"Location"}),c.jsx("strong",{children:f.location})]}),c.jsxs("div",{className:"fir-meta",children:[c.jsx("span",{children:"Coordinates"}),c.jsxs("strong",{children:[f.latitude,", ",f.longitude]})]})]},f._id))})]})]})]})}const f_={name:"",age:"",gender:"other",lastSeenLocation:"",status:"unknown",relatedCaseId:""},D3={q:"",status:"",gender:"",caseId:"",sortBy:"createdAt",sortOrder:"desc"},I3=t=>{const e={};return t.q&&(e.q=t.q),t.status&&(e.status=t.status),t.gender&&(e.gender=t.gender),t.caseId&&(e.caseId=t.caseId),t.sortBy&&(e.sortBy=t.sortBy),t.sortOrder&&(e.sortOrder=t.sortOrder),e},U3=t=>{if(!t.relatedCases||t.relatedCases.length===0)return"No case linked";const e=[];for(const n of t.relatedCases)n&&n.title&&e.push(n.title);return e.length===0?"No case linked":e.join(", ")},F3=t=>{if(t.relatedCases&&t.relatedCases.length>0){const e=t.relatedCases[0];if(e&&e._id)return e._id}return""};function O3(){const{user:t}=Jn();let e="";t&&t.role&&(e=t.role);const[n,i]=I.useState([]),[r,s]=I.useState([]),[a,o]=I.useState(f_),[l,u]=I.useState(""),[d,h]=I.useState(""),[f,g]=I.useState(""),[_,x]=I.useState(!0),[m,p]=I.useState(D3),v=e==="admin";let S="Create Suspect",E="Create Suspect";l&&(S="Edit Suspect",E="Update Suspect");const A=async()=>{try{const L=await Le.get("/cases");s(L.data||[])}catch(L){g(Xe(L,"Unable to load cases"))}},w=async()=>{x(!0),g("");try{const L=I3(m),H=await Le.get("/suspects",{params:L});i(H.data||[])}catch(L){g(Xe(L,"Unable to load suspects"))}finally{x(!1)}};I.useEffect(()=>{A()},[]),I.useEffect(()=>{w()},[m.q,m.status,m.gender,m.caseId,m.sortBy,m.sortOrder]);const C=(L,H)=>{const U={name:a.name,age:a.age,gender:a.gender,lastSeenLocation:a.lastSeenLocation,status:a.status,relatedCaseId:a.relatedCaseId};U[L]=H,o(U)},y=(L,H)=>{const U={q:m.q,status:m.status,gender:m.gender,caseId:m.caseId,sortBy:m.sortBy,sortOrder:m.sortOrder};U[L]=H,p(U)},b=()=>{o(f_),u("")},P=async L=>{if(L.preventDefault(),h(""),g(""),!a.name||!a.age){g("Please enter suspect name and age");return}const H=[];a.relatedCaseId&&H.push(a.relatedCaseId);const U={name:a.name,age:a.age,gender:a.gender,lastSeenLocation:a.lastSeenLocation,status:a.status,relatedCases:H};try{l?(await Le.put(`/suspects/${l}`,U),h("Suspect updated successfully")):(await Le.post("/suspects",U),h("Suspect created successfully")),b(),w()}catch(O){g(Xe(O,"Unable to save suspect"))}},N=L=>{u(L._id),o({name:L.name||"",age:L.age||"",gender:L.gender||"other",lastSeenLocation:L.lastSeenLocation||"",status:L.status||"unknown",relatedCaseId:F3(L)})},D=async L=>{if(window.confirm("Do you want to delete this suspect"))try{await Le.delete(`/suspects/${L}`),h("Suspect deleted successfully"),w()}catch(U){g(Xe(U,"Unable to delete suspect"))}};return c.jsxs("div",{className:"app-layout",children:[c.jsx(pn,{}),c.jsxs("main",{className:"main-panel",children:[c.jsx(hn,{title:"Suspect Management"}),c.jsxs("section",{className:"content-section",children:[c.jsxs("div",{className:"section-header",children:[c.jsxs("div",{children:[c.jsx("p",{className:"eyebrow",children:"Profiles"}),c.jsx("h2",{children:"Suspects"})]}),c.jsxs("span",{className:"count-pill",children:[n.length," total"]})]}),c.jsxs("form",{className:"form-card",onSubmit:P,children:[c.jsx("p",{className:"eyebrow",children:S}),c.jsxs("div",{className:"filter-row case-filter-grid",children:[c.jsxs("label",{children:["Name",c.jsx("input",{value:a.name,onChange:L=>C("name",L.target.value),placeholder:"Suspect name"})]}),c.jsxs("label",{children:["Age",c.jsx("input",{type:"number",min:"1",value:a.age,onChange:L=>C("age",L.target.value),placeholder:"Age"})]}),c.jsxs("label",{children:["Gender",c.jsxs("select",{value:a.gender,onChange:L=>C("gender",L.target.value),children:[c.jsx("option",{value:"male",children:"Male"}),c.jsx("option",{value:"female",children:"Female"}),c.jsx("option",{value:"other",children:"Other"})]})]}),c.jsxs("label",{children:["Status",c.jsxs("select",{value:a.status,onChange:L=>C("status",L.target.value),children:[c.jsx("option",{value:"unknown",children:"Unknown"}),c.jsx("option",{value:"wanted",children:"Wanted"}),c.jsx("option",{value:"cleared",children:"Cleared"})]})]}),c.jsxs("label",{children:["Last Seen Location",c.jsx("input",{value:a.lastSeenLocation,onChange:L=>C("lastSeenLocation",L.target.value),placeholder:"Last seen location"})]}),c.jsxs("label",{children:["Related Case",c.jsxs("select",{value:a.relatedCaseId,onChange:L=>C("relatedCaseId",L.target.value),children:[c.jsx("option",{value:"",children:"No case selected"}),r.map(L=>c.jsx("option",{value:L._id,children:L.title},L._id))]})]})]}),c.jsxs("div",{className:"card-actions",children:[c.jsx("button",{className:"btn btn-primary",type:"submit",children:E}),l&&c.jsx("button",{className:"btn btn-secondary",type:"button",onClick:b,children:"Cancel Edit"})]})]}),c.jsxs("section",{className:"form-card case-filter-card",children:[c.jsx("p",{className:"eyebrow",children:"Advanced Search"}),c.jsxs("div",{className:"filter-row case-filter-grid",children:[c.jsxs("label",{children:["Search Text",c.jsx("input",{value:m.q,onChange:L=>y("q",L.target.value),placeholder:"Search name or location"})]}),c.jsxs("label",{children:["Status",c.jsxs("select",{value:m.status,onChange:L=>y("status",L.target.value),children:[c.jsx("option",{value:"",children:"All statuses"}),c.jsx("option",{value:"unknown",children:"Unknown"}),c.jsx("option",{value:"wanted",children:"Wanted"}),c.jsx("option",{value:"cleared",children:"Cleared"})]})]}),c.jsxs("label",{children:["Gender",c.jsxs("select",{value:m.gender,onChange:L=>y("gender",L.target.value),children:[c.jsx("option",{value:"",children:"All genders"}),c.jsx("option",{value:"male",children:"Male"}),c.jsx("option",{value:"female",children:"Female"}),c.jsx("option",{value:"other",children:"Other"})]})]}),c.jsxs("label",{children:["Case",c.jsxs("select",{value:m.caseId,onChange:L=>y("caseId",L.target.value),children:[c.jsx("option",{value:"",children:"All cases"}),r.map(L=>c.jsx("option",{value:L._id,children:L.title},L._id))]})]}),c.jsxs("label",{children:["Sort By",c.jsxs("select",{value:m.sortBy,onChange:L=>y("sortBy",L.target.value),children:[c.jsx("option",{value:"createdAt",children:"Created Date"}),c.jsx("option",{value:"name",children:"Name"}),c.jsx("option",{value:"status",children:"Status"}),c.jsx("option",{value:"age",children:"Age"})]})]}),c.jsxs("label",{children:["Sort Order",c.jsxs("select",{value:m.sortOrder,onChange:L=>y("sortOrder",L.target.value),children:[c.jsx("option",{value:"desc",children:"Newest First"}),c.jsx("option",{value:"asc",children:"Oldest First"})]})]})]})]}),d&&c.jsx("div",{className:"analysis-result",children:c.jsx("p",{children:d})}),f&&c.jsx("div",{className:"analysis-error",children:c.jsx("p",{children:f})}),_&&c.jsx("div",{className:"empty-state",children:c.jsx(ei,{})}),!_&&n.length===0&&c.jsx("div",{className:"empty-state",children:"No suspects found"}),!_&&n.length>0&&c.jsx("div",{className:"fir-grid",children:n.map(L=>c.jsxs("article",{className:"fir-card",children:[c.jsxs("div",{className:"fir-card-header",children:[c.jsxs("div",{children:[c.jsx("p",{className:"eyebrow",children:"Suspect Profile"}),c.jsx("h3",{children:L.name})]}),c.jsx("span",{className:"badge",children:L.status})]}),c.jsxs("div",{className:"fir-meta",children:[c.jsx("span",{children:"Age"}),c.jsx("strong",{children:L.age})]}),c.jsxs("div",{className:"fir-meta",children:[c.jsx("span",{children:"Gender"}),c.jsx("strong",{children:L.gender})]}),c.jsxs("div",{className:"fir-meta",children:[c.jsx("span",{children:"Last Seen"}),c.jsx("strong",{children:L.lastSeenLocation||"Not added"})]}),c.jsxs("div",{className:"fir-meta",children:[c.jsx("span",{children:"Related Case"}),c.jsx("strong",{children:U3(L)})]}),c.jsxs("div",{className:"card-actions",children:[c.jsx("button",{className:"btn btn-secondary",type:"button",onClick:()=>N(L),children:"Edit"}),v&&c.jsx("button",{className:"btn btn-danger",type:"button",onClick:()=>D(L._id),children:"Delete"})]})]},L._id))})]})]})]})}const h_={title:"",content:"",status:"draft",caseId:"",firId:""},B3=t=>t.caseId&&t.caseId.title?t.caseId.title:"No case linked",k3=t=>t.firId&&t.firId.title?t.firId.title:"No fir linked",z3=t=>t.createdBy&&t.createdBy.name?t.createdBy.name:"Unknown user";function j3(){const{user:t}=Jn();let e="",n="";t&&t.role&&(e=t.role),t&&t.id&&(n=t.id);const[i,r]=I.useState([]),[s,a]=I.useState([]),[o,l]=I.useState([]),[u,d]=I.useState(h_),[h,f]=I.useState(""),[g,_]=I.useState(""),[x,m]=I.useState(!0),[p,v]=I.useState(!1),[S,E]=I.useState(!1),[A,w]=I.useState(""),[C,y]=I.useState(""),b=e==="admin",P=["police","admin"].includes(e),N=async()=>{try{const $=await Le.get("/cases"),Ce=await Le.get("/fir");a($.data||[]),l(Ce.data||[])}catch($){y(Xe($,"Unable to load report options"))}},D=async()=>{m(!0),y("");try{const $=await Le.get("/reports");r($.data||[])}catch($){y(Xe($,"Unable to load reports"))}finally{m(!1)}};I.useEffect(()=>{N(),D()},[]);const L=($,Ce)=>{const Z={title:u.title,content:u.content,status:u.status,caseId:u.caseId,firId:u.firId};Z[$]=Ce,d(Z)},H=()=>{d(h_),_("")},U=async()=>{if(w(""),y(""),!h.trim()){y("Please enter crime notes before generating report");return}E(!0);try{const $=await Le.post("/ai/generate-report",{text:h.trim()}),Ce=$.data.title||"AI Crime Report",Z=$.data.content||"";if(!Z){y("AI did not return report content");return}d({title:Ce,content:Z,status:"draft",caseId:u.caseId,firId:u.firId}),_(""),w("AI report generated. Please review it before saving.")}catch($){y(Xe($,"Unable to generate AI report"))}finally{E(!1)}},O=async $=>{if($.preventDefault(),w(""),y(""),!u.title||!u.content){y("Please enter report title and report content");return}const Ce={title:u.title,content:u.content,status:u.status,caseId:u.caseId||void 0,firId:u.firId||void 0};v(!0);try{g?(await Le.put(`/reports/${g}`,Ce),w("Report updated successfully")):(await Le.post("/reports",Ce),w("Report created successfully")),H(),D()}catch(Z){y(Xe(Z,"Unable to save report"))}finally{v(!1)}},j=$=>{let Ce="",Z="";$.caseId&&$.caseId._id&&(Ce=$.caseId._id),$.firId&&$.firId._id&&(Z=$.firId._id),_($._id),d({title:$.title||"",content:$.content||"",status:$.status||"draft",caseId:Ce,firId:Z})},k=async $=>{let Ce=!1;if($.createdBy&&$.createdBy._id===n&&(Ce=!0),!b&&!Ce){y("Only owner or admin can delete this report");return}if(window.confirm("Do you want to delete this report"))try{await Le.delete(`/reports/${$._id}`),w("Report deleted successfully"),D()}catch(Se){y(Xe(Se,"Unable to delete report"))}};let K="Create Report",ee="Create Report";p?K="Saving":g&&(K="Update Report",ee="Edit Report");let re="Generate AI Report";return S&&(re="Generating"),c.jsxs("div",{className:"app-layout",children:[c.jsx(pn,{}),c.jsxs("main",{className:"main-panel",children:[c.jsx(hn,{title:"Reports"}),c.jsxs("section",{className:"content-section",children:[c.jsxs("div",{className:"section-header",children:[c.jsxs("div",{children:[c.jsx("p",{className:"eyebrow",children:"Investigation Reports"}),c.jsx("h2",{children:"Reports"})]}),c.jsxs("span",{className:"count-pill",children:[i.length," total"]})]}),P&&c.jsxs("section",{className:"form-card case-filter-card",children:[c.jsx("p",{className:"eyebrow",children:"ATS Friendly AI Report"}),c.jsxs("label",{children:["Raw Crime Notes",c.jsx("textarea",{value:h,onChange:$=>f($.target.value),placeholder:"Paste victim suspect location evidence and officer notes",rows:"6"})]}),c.jsxs("div",{className:"card-actions",children:[c.jsx("button",{className:"btn btn-primary",type:"button",onClick:U,disabled:S||!h.trim(),children:re}),c.jsx("button",{className:"btn btn-secondary",type:"button",onClick:()=>f(""),children:"Clear Notes"})]})]}),c.jsxs("form",{className:"form-card",onSubmit:O,children:[c.jsx("p",{className:"eyebrow",children:ee}),c.jsxs("label",{children:["Report Title",c.jsx("input",{value:u.title,onChange:$=>L("title",$.target.value),placeholder:"Enter report title"})]}),c.jsxs("label",{children:["Report Content",c.jsx("textarea",{value:u.content,onChange:$=>L("content",$.target.value),placeholder:"Write report details",rows:"7"})]}),c.jsxs("div",{className:"filter-row case-filter-grid",children:[c.jsxs("label",{children:["Status",c.jsxs("select",{value:u.status,onChange:$=>L("status",$.target.value),children:[c.jsx("option",{value:"draft",children:"Draft"}),c.jsx("option",{value:"final",children:"Final"})]})]}),c.jsxs("label",{children:["Linked Case",c.jsxs("select",{value:u.caseId,onChange:$=>L("caseId",$.target.value),children:[c.jsx("option",{value:"",children:"No case selected"}),s.map($=>c.jsx("option",{value:$._id,children:$.title},$._id))]})]}),c.jsxs("label",{children:["Linked FIR",c.jsxs("select",{value:u.firId,onChange:$=>L("firId",$.target.value),children:[c.jsx("option",{value:"",children:"No fir selected"}),o.map($=>c.jsx("option",{value:$._id,children:$.title},$._id))]})]})]}),c.jsxs("div",{className:"card-actions",children:[c.jsx("button",{className:"btn btn-primary",type:"submit",disabled:p,children:K}),g&&c.jsx("button",{className:"btn btn-secondary",type:"button",onClick:H,children:"Cancel Edit"})]})]}),A&&c.jsx("div",{className:"analysis-result",children:c.jsx("p",{children:A})}),C&&c.jsx("div",{className:"analysis-error",children:c.jsx("p",{children:C})}),x&&c.jsx("div",{className:"empty-state",children:c.jsx(ei,{})}),!x&&i.length===0&&c.jsx("div",{className:"empty-state",children:"No reports found"}),!x&&i.length>0&&c.jsx("div",{className:"fir-grid",children:i.map($=>c.jsxs("article",{className:"fir-card",children:[c.jsxs("div",{className:"fir-card-header",children:[c.jsxs("div",{children:[c.jsx("p",{className:"eyebrow",children:"Report Record"}),c.jsx("h3",{children:$.title})]}),c.jsx("span",{className:"badge",children:$.status})]}),c.jsx("p",{className:"fir-description",children:$.content}),c.jsxs("div",{className:"fir-meta",children:[c.jsx("span",{children:"Case"}),c.jsx("strong",{children:B3($)})]}),c.jsxs("div",{className:"fir-meta",children:[c.jsx("span",{children:"FIR"}),c.jsx("strong",{children:k3($)})]}),c.jsxs("div",{className:"fir-meta",children:[c.jsx("span",{children:"Created By"}),c.jsx("strong",{children:z3($)})]}),c.jsxs("div",{className:"card-actions",children:[c.jsx("button",{className:"btn btn-secondary",type:"button",onClick:()=>j($),children:"Edit"}),c.jsx("button",{className:"btn btn-danger",type:"button",onClick:()=>k($),children:"Delete"})]})]},$._id))})]})]})]})}function V3(){const[t,e]=I.useState([]),[n,i]=I.useState(!0),[r,s]=I.useState(""),[a,o]=I.useState(""),[l,u]=I.useState(""),d=async()=>{i(!0),s("");try{const x=await Le.get("/ai-logs");e(x.data||[])}catch(x){s(Xe(x,"Unable to load ai logs"))}finally{i(!1)}};I.useEffect(()=>{d()},[]);const h=x=>x.requestedBy&&x.requestedBy.name?x.requestedBy.name:"Unknown user",f=x=>x==="failed"?"badge btn-danger":"badge",_=(()=>{const x=[],m=l.toLowerCase();for(const p of t){let v=!0;a&&(v=p.status===a);const S=`${p.inputText||""} ${p.outputText||""} ${p.errorMessage||""}`.toLowerCase();let E=!0;l&&(E=S.includes(m)),v&&E&&x.push(p)}return x})();return c.jsxs("div",{className:"app-layout",children:[" ",c.jsx(pn,{})," ",c.jsxs("main",{className:"main-panel",children:[" ",c.jsx(hn,{title:"AI Logs"})," ",c.jsxs("section",{className:"content-section",children:[" ",c.jsxs("div",{className:"section-header",children:[" ",c.jsxs("div",{children:[c.jsx("p",{className:"eyebrow",children:"AI History"})," ",c.jsx("h2",{children:"AI Logs"})," "]}),c.jsxs("span",{className:"count-pill",children:[_.length," filtered"]})," "]}),c.jsxs("section",{className:"form-card case-filter-card",children:[" ",c.jsx("p",{className:"eyebrow",children:"Search Logs"})," ",c.jsxs("div",{className:"filter-row",children:[" ",c.jsxs("label",{children:["Search Text",c.jsx("input",{value:l,onChange:x=>u(x.target.value),placeholder:"Search input output or error text"})]}),c.jsxs("label",{children:["Status",c.jsxs("select",{value:a,onChange:x=>o(x.target.value),children:[c.jsx("option",{value:"",children:"All statuses"}),c.jsx("option",{value:"success",children:"Success"}),c.jsx("option",{value:"failed",children:"Failed"})]})]})]})]}),r&&c.jsx("div",{className:"analysis-error",children:c.jsx("p",{children:r})})," ",n&&c.jsx("div",{className:"empty-state",children:c.jsx(ei,{})})," ",!n&&_.length===0&&c.jsx("div",{className:"empty-state",children:"No ai logs found"}),!n&&_.length>0&&c.jsxs("div",{className:"fir-grid",children:[" ",_.map(x=>c.jsxs("article",{className:"fir-card",children:[" ",c.jsxs("div",{className:"fir-card-header",children:[" ",c.jsxs("div",{children:[c.jsx("p",{className:"eyebrow",children:"AI Request"}),c.jsx("h3",{children:h(x)})]}),c.jsx("span",{className:f(x.status),children:x.status})]}),c.jsxs("div",{className:"fir-meta",children:[c.jsx("span",{children:"User Role"}),c.jsx("strong",{children:x.requestedByRole})]}),c.jsxs("div",{className:"status-history",children:[c.jsx("span",{children:"Input Text"}),c.jsx("p",{children:x.inputText||"No input text"})]}),c.jsxs("div",{className:"status-history",children:[c.jsx("span",{children:"Output Text"}),c.jsx("p",{children:x.outputText||"No output text"})]}),x.errorMessage&&c.jsxs("div",{className:"analysis-error",children:[" ",c.jsx("p",{children:x.errorMessage})," "]}),c.jsxs("div",{className:"fir-meta",children:[c.jsx("span",{children:"Created"}),c.jsx("strong",{children:new Date(x.createdAt).toLocaleString()})]})]},x._id))]})]})]})]})}const p_=t=>t.user&&t.user.name?t.user.name:"Unknown user",H3=t=>t==="delete"?"badge btn-danger":t==="create"?"badge badge-closed":"badge";function G3(){const[t,e]=I.useState([]),[n,i]=I.useState(!0),[r,s]=I.useState(""),[a,o]=I.useState(""),[l,u]=I.useState(""),[d,h]=I.useState(""),f=async()=>{i(!0),s("");try{const x=await Le.get("/activity-logs");e(x.data||[])}catch(x){s(Xe(x,"Unable to load activity logs"))}finally{i(!1)}};I.useEffect(()=>{f()},[]),I.useEffect(()=>{const x=wa(),m=()=>{f()};return x.on("activityUpdated",m),()=>{x.off("activityUpdated",m)}},[]);const _=(()=>{const x=[],m=a.toLowerCase();for(const p of t){let v=!0,S=!0,E=!0;const A=`${p.description||""} ${p.moduleName||""} ${p.action||""} ${p_(p)}`.toLowerCase();a&&(v=A.includes(m)),l&&(S=p.moduleName===l),d&&(E=p.action===d),v&&S&&E&&x.push(p)}return x})();return c.jsxs("div",{className:"app-layout",children:[c.jsx(pn,{}),c.jsxs("main",{className:"main-panel",children:[c.jsx(hn,{title:"Activity Logs"}),c.jsxs("section",{className:"content-section",children:[c.jsxs("div",{className:"section-header",children:[c.jsxs("div",{children:[c.jsx("p",{className:"eyebrow",children:"Audit Tracking"}),c.jsx("h2",{children:"Activity Logs"})]}),c.jsxs("span",{className:"count-pill",children:[_.length," filtered"]})]}),c.jsxs("section",{className:"form-card case-filter-card",children:[c.jsx("p",{className:"eyebrow",children:"Search Activity"}),c.jsxs("div",{className:"filter-row case-filter-grid",children:[c.jsxs("label",{children:["Search Text",c.jsx("input",{value:a,onChange:x=>o(x.target.value),placeholder:"Search user module or action"})]}),c.jsxs("label",{children:["Module",c.jsxs("select",{value:l,onChange:x=>u(x.target.value),children:[c.jsx("option",{value:"",children:"All modules"}),c.jsx("option",{value:"case",children:"Case"}),c.jsx("option",{value:"complaint",children:"Complaint"}),c.jsx("option",{value:"fir",children:"FIR"}),c.jsx("option",{value:"evidence",children:"Evidence"}),c.jsx("option",{value:"suspect",children:"Suspect"}),c.jsx("option",{value:"report",children:"Report"}),c.jsx("option",{value:"meeting",children:"Meeting"}),c.jsx("option",{value:"chat",children:"Chat"})]})]}),c.jsxs("label",{children:["Action",c.jsxs("select",{value:d,onChange:x=>h(x.target.value),children:[c.jsx("option",{value:"",children:"All actions"}),c.jsx("option",{value:"create",children:"Create"}),c.jsx("option",{value:"update",children:"Update"}),c.jsx("option",{value:"delete",children:"Delete"}),c.jsx("option",{value:"send",children:"Send"})]})]})]})]}),r&&c.jsx("div",{className:"analysis-error",children:c.jsx("p",{children:r})}),n&&c.jsx("div",{className:"empty-state",children:c.jsx(ei,{})}),!n&&_.length===0&&c.jsx("div",{className:"empty-state",children:"No activity logs found"}),!n&&_.length>0&&c.jsx("div",{className:"fir-grid",children:_.map(x=>c.jsxs("article",{className:"fir-card",children:[c.jsxs("div",{className:"fir-card-header",children:[c.jsxs("div",{children:[c.jsx("p",{className:"eyebrow",children:x.moduleName}),c.jsx("h3",{children:p_(x)})]}),c.jsx("span",{className:H3(x.action),children:x.action})]}),c.jsxs("div",{className:"status-history",children:[c.jsx("span",{children:"Description"}),c.jsx("p",{children:x.description})]}),c.jsxs("div",{className:"fir-meta",children:[c.jsx("span",{children:"User Role"}),c.jsx("strong",{children:x.userRole})]}),c.jsxs("div",{className:"fir-meta",children:[c.jsx("span",{children:"Created"}),c.jsx("strong",{children:new Date(x.createdAt).toLocaleString()})]})]},x._id))})]})]})]})}const m_=t=>t==="admin"?"Admin":t==="police"?"Police":"User";function W3(){const[t,e]=I.useState([]),[n,i]=I.useState(!0),[r,s]=I.useState(""),a=async()=>{i(!0),s("");try{const o=await Le.get("/users");e(o.data||[])}catch(o){s(Xe(o,"Unable to load users"))}finally{i(!1)}};return I.useEffect(()=>{a()},[]),c.jsxs("div",{className:"app-layout",children:[" ",c.jsx(pn,{})," ",c.jsxs("main",{className:"main-panel",children:[" ",c.jsx(hn,{title:"User Management"})," ",c.jsxs("section",{className:"content-section",children:[" ",c.jsxs("div",{className:"section-header",children:[c.jsxs("div",{children:[c.jsx("p",{className:"eyebrow",children:"Admin Control"}),c.jsx("h2",{children:"Users"})]}),c.jsxs("span",{className:"count-pill",children:[t.length," total"]})]}),r&&c.jsx("div",{className:"analysis-error",children:c.jsx("p",{children:r})})," ",n&&c.jsx("div",{className:"empty-state",children:c.jsx(ei,{})})," ",!n&&t.length===0&&c.jsx("div",{className:"empty-state",children:"No users found"}),!n&&t.length>0&&c.jsxs("div",{className:"fir-grid",children:[" ",t.map(o=>c.jsxs("article",{className:"fir-card",children:[" ",c.jsxs("div",{className:"fir-card-header",children:[" ",c.jsxs("div",{children:[c.jsx("p",{className:"eyebrow",children:"Account"}),c.jsx("h3",{children:o.name})]}),c.jsx("span",{className:"badge",children:m_(o.role)})]}),c.jsxs("div",{className:"fir-meta",children:[c.jsx("span",{children:"Email"}),c.jsx("strong",{children:o.email})]}),c.jsxs("div",{className:"fir-meta",children:[c.jsx("span",{children:"Role"}),c.jsx("strong",{children:m_(o.role)})]})]},o._id))]})]})]})]})}function sn({children:t,roles:e}){const{user:n}=Jn();return!localStorage.getItem("token")||!n?c.jsx(zw,{to:"/",replace:!0}):e&&!e.includes(n.role)?c.jsx("main",{className:"auth-page",children:c.jsxs("section",{className:"access-denied",children:[c.jsx("p",{className:"eyebrow",children:"Access Denied"}),c.jsx("h1",{children:"This page is not available for your role."}),c.jsxs("p",{children:["Your current role is ",c.jsx("strong",{children:n.role}),"."]}),c.jsx("a",{className:"btn btn-primary",href:"/dashboard",children:"Go to Dashboard"})]})}):t}function X3(){return c.jsx(rT,{children:c.jsx(Kw,{children:c.jsxs(Vw,{children:[c.jsx(zt,{path:"/",element:c.jsx(oL,{})}),c.jsx(zt,{path:"/register",element:c.jsx(lL,{})}),c.jsx(zt,{path:"/dashboard",element:c.jsx(sn,{children:c.jsx(xL,{})})}),c.jsx(zt,{path:"/create",element:c.jsx(sn,{roles:["user"],children:c.jsx(yL,{})})}),c.jsx(zt,{path:"/create-fir",element:c.jsx(sn,{roles:["police","admin"],children:c.jsx(SL,{})})}),c.jsx(zt,{path:"/evidence",element:c.jsx(sn,{roles:["police","admin"],children:c.jsx(AL,{})})}),c.jsx(zt,{path:"/notifications",element:c.jsx(sn,{children:c.jsx(E3,{})})}),c.jsx(zt,{path:"/ai",element:c.jsx(sn,{roles:["police","admin"],children:c.jsx(EL,{})})}),c.jsx(zt,{path:"/2fa-setup",element:c.jsx(sn,{children:c.jsx(M3,{})})}),c.jsx(zt,{path:"/chat",element:c.jsx(sn,{children:c.jsx(w3,{})})}),c.jsx(zt,{path:"/meetings",element:c.jsx(sn,{roles:["admin","police"],children:c.jsx(T3,{})})}),c.jsx(zt,{path:"/cases",element:c.jsx(sn,{children:c.jsx(N3,{})})}),c.jsx(zt,{path:"/crime-map",element:c.jsx(sn,{children:c.jsx(L3,{})})}),c.jsx(zt,{path:"/suspects",element:c.jsx(sn,{roles:["police","admin"],children:c.jsx(O3,{})})}),c.jsx(zt,{path:"/reports",element:c.jsx(sn,{children:c.jsx(j3,{})})}),c.jsx(zt,{path:"/ai-logs",element:c.jsx(sn,{children:c.jsx(V3,{})})}),c.jsx(zt,{path:"/activity-logs",element:c.jsx(sn,{children:c.jsx(G3,{})})}),c.jsx(zt,{path:"/users",element:c.jsx(sn,{roles:["admin"],children:c.jsx(W3,{})})})]})})})}Od.createRoot(document.getElementById("root")).render(c.jsx(jc.StrictMode,{children:c.jsx(WM,{clientId:"558791876639-riq95mfsn594de02ag57jgno9ppu6ml8.apps.googleusercontent.com",children:c.jsx(ZM,{children:c.jsx(X3,{})})})}));
