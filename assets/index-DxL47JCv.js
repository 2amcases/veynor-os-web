const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DeviceSimulator-Bi4FwKV3.js","assets/platform-BInSkKXd.js","assets/App-566vIU4k.js","assets/vault-CqnXAQDP.js","assets/system-BjQSmSmW.js","assets/nightBackend-DdikMzSk.js","assets/device-Dw36lz66.js","assets/audio-DeF7K6YG.js","assets/icons-DVt656rm.js","assets/media-DYyQgLDx.js","assets/files-C_UuibWf.js","assets/fileFinder-BgzxB2SA.js","assets/search-ny0g1U4g.js","assets/musicVisual-CUesxuLb.js","assets/antiSpy-BC5RbPNo.js","assets/nightCloud-FyZfBR8_.js","assets/clock-DV1m3M8I.js","assets/speech-CiStAvfM.js","assets/FeatureSubmissionPage-CjMICU93.js"])))=>i.map(i=>d[i]);
var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},c=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},l=(n,r,o)=>(o=n==null?{}:e(i(n)),c(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function ee(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var te=ee.prototype=new b;te.constructor=ee,_(te,y.prototype),te.isPureReactComponent=!0;var ne=Array.isArray;function re(){}var x={H:null,A:null,T:null,S:null},ie=Object.prototype.hasOwnProperty;function S(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ae(e,t){return S(e.type,t,e.props)}function oe(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function se(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ce=/\/+/g;function le(e,t){return typeof e==`object`&&e&&e.key!=null?se(``+e.key):t.toString(36)}function ue(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(re,re):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function de(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,de(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+le(e,0):a,ne(o)?(i=``,c!=null&&(i=c.replace(ce,`$&/`)+`/`),de(o,r,i,``,function(e){return e})):o!=null&&(oe(o)&&(o=ae(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ce,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ne(e))for(var u=0;u<e.length;u++)a=e[u],s=l+le(a,u),c+=de(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+le(a,u++),c+=de(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return de(ue(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function fe(e,t,n){if(e==null)return e;var r=[],i=0;return de(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function pe(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var me=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function he(e){var t=x.T,n={};n.types=t===null?null:t.types,x.T=n;try{var r=e(),i=x.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(re,me)}catch(e){me(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),x.T=t}}function ge(e){var t=x.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else he(ge.bind(null,e))}var _e={map:fe,forEach:function(e,t,n){fe(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return fe(e,function(){t++}),t},toArray:function(e){return fe(e,function(e){return e})||[]},only:function(e){if(!oe(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=_e,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=ee,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=x,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return x.H.useMemoCache(e)}},e.addTransitionType=ge,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ie.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return S(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ie.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return S(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=oe,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:pe}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=he,e.unstable_useCacheRefresh=function(){return x.H.useCacheRefresh()},e.use=function(e){return x.H.use(e)},e.useActionState=function(e,t,n){return x.H.useActionState(e,t,n)},e.useCallback=function(e,t){return x.H.useCallback(e,t)},e.useContext=function(e){return x.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return x.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return x.H.useEffect(e,t)},e.useEffectEvent=function(e){return x.H.useEffectEvent(e)},e.useId=function(){return x.H.useId()},e.useImperativeHandle=function(e,t,n){return x.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return x.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return x.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return x.H.useMemo(e,t)},e.useOptimistic=function(e,t){return x.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return x.H.useReducer(e,t,n)},e.useRef=function(e){return x.H.useRef(e)},e.useState=function(e){return x.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return x.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return x.H.useTransition()},e.version=`19.3.0`})),d=o(((e,t)=>{t.exports=u()})),f=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function ee(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,te||(te=!0,ae());else{var t=n(l);t!==null&&ce(ee,t.startTime-e)}}}var te=!1,ne=-1,re=5,x=-1;function ie(){return g?!0:!(e.unstable_now()-x<re)}function S(){if(g=!1,te){var t=e.unstable_now();x=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(ne),ne=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ie());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ce(ee,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?ae():te=!1}}}var ae;if(typeof y==`function`)ae=function(){y(S)};else if(typeof MessageChannel<`u`){var oe=new MessageChannel,se=oe.port2;oe.port1.onmessage=S,ae=function(){se.postMessage(null)}}else ae=function(){_(S,0)};function ce(t,n){ne=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):re=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(ne),ne=-1):h=!0,ce(ee,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,te||(te=!0,ae()))),r},e.unstable_shouldYield=ie,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),p=o(((e,t)=>{t.exports=f()})),m=o((e=>{var t=d();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`),o=Symbol.for(`react.recoverable`),s=Symbol.for(`react.optimistic_key`);function c(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:r===s?s:``+r,children:e,containerInfo:t,implementation:n}}var l=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function u(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.browser=function(e){return{$$typeof:o,_reason:e}},e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return c(e,t,null,r)},e.flushSync=function(e){var t=l.T,n=i.p;try{if(l.T=null,i.p=2,e)return e()}finally{l.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=u(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=u(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=u(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=u(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},e.useFormStatus=function(){return l.H.useHostTransitionStatus()},e.version=`19.3.0`})),h=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=m()})),g=o((e=>{var t=p(),n=d(),r=h();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}function m(e,t,n,r,i,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,i,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&m(e.child,t,n,r,i,a))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function _(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),e.tag!==3&&e.tag!==5&&e.tag!==27);)e=e.return;return t}function v(e){var t=[null,null],n=g(e);return n===null||y(t,e,n.child,{foundSelf:!1}),t}function y(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&y(e,t,n.child,r))return!0;n=n.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(i(559))}}var ee=null,te=null;function ne(e,t,n){return e===n||e===t&&(ee=e,!0)}function re(e,t,n){return e===n?(te=e,!1):e===t&&(te!==null&&(ee=e),!0)}function x(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function ie(e,t,n){for(var r=0,i=e;i;i=n(i))r++;i=0;for(var a=t;a;a=n(a))i++;for(;0<r-i;)e=n(e),r--;for(;0<i-r;)t=n(t),i--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var S=Object.assign,ae=Symbol.for(`react.element`),oe=Symbol.for(`react.transitional.element`),se=Symbol.for(`react.portal`),ce=Symbol.for(`react.fragment`),le=Symbol.for(`react.strict_mode`),ue=Symbol.for(`react.profiler`),de=Symbol.for(`react.consumer`),fe=Symbol.for(`react.context`),pe=Symbol.for(`react.forward_ref`),me=Symbol.for(`react.suspense`),he=Symbol.for(`react.suspense_list`),ge=Symbol.for(`react.memo`),_e=Symbol.for(`react.lazy`),ve=Symbol.for(`react.activity`),ye=Symbol.for(`react.legacy_hidden`),be=Symbol.for(`react.memo_cache_sentinel`),xe=Symbol.for(`react.view_transition`),Se=Symbol.for(`react.recoverable`),Ce=Symbol.iterator;function we(e){return typeof e!=`object`||!e?null:(e=Ce&&e[Ce]||e[`@@iterator`],typeof e==`function`?e:null)}var Te=Symbol.for(`react.client.reference`);function Ee(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===Te?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case ce:return`Fragment`;case ue:return`Profiler`;case le:return`StrictMode`;case me:return`Suspense`;case he:return`SuspenseList`;case ve:return`Activity`;case xe:return`ViewTransition`}if(typeof e==`object`)switch(e.$$typeof){case se:return`Portal`;case fe:return e.displayName||`Context`;case de:return(e._context.displayName||`Context`)+`.Consumer`;case pe:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ge:return t=e.displayName||null,t===null?Ee(e.type)||`Memo`:t;case _e:t=e._payload,e=e._init;try{return Ee(e(t))}catch{}}return null}var De=Array.isArray,C=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,w=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Oe={pending:!1,data:null,method:null,action:null},ke=[],Ae=-1;function je(e){return{current:e}}function Me(e){0>Ae||(e.current=ke[Ae],ke[Ae]=null,Ae--)}function T(e,t){Ae++,ke[Ae]=e.current,e.current=t}var Ne=je(null),Pe=je(null),Fe=je(null),Ie=je(null);function Le(e,t){switch(T(Fe,t),T(Pe,e),T(Ne,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?up(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=up(t),e=dp(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}Me(Ne),T(Ne,e)}function Re(){Me(Ne),Me(Pe),Me(Fe)}function ze(e){var t=e.memoizedState;t!==null&&(sh._currentValue=t.memoizedState,T(Ie,e)),t=Ne.current;var n=dp(t,e.type);t!==n&&(T(Pe,e),T(Ne,n))}function Be(e){Pe.current===e&&(Me(Ne),Me(Pe)),Ie.current===e&&(Me(Ie),sh._currentValue=Oe)}var Ve,He;function Ue(e){if(Ve===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Ve=t&&t[1]||``,He=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Ve+e+He}var We=!1;function Ge(e,t){if(!e||We)return``;We=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{We=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ue(n):``}function Ke(e,t){switch(e.tag){case 26:case 27:case 5:return Ue(e.type);case 16:return Ue(`Lazy`);case 13:return e.child!==t&&t!==null?Ue(`Suspense Fallback`):Ue(`Suspense`);case 19:return Ue(`SuspenseList`);case 0:case 15:return Ge(e.type,!1);case 11:return Ge(e.type.render,!1);case 1:return Ge(e.type,!0);case 31:return Ue(`Activity`);case 30:return Ue(`ViewTransition`);default:return``}}function qe(e){try{var t=``,n=null;do t+=Ke(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Je=Object.prototype.hasOwnProperty,Ye=t.unstable_scheduleCallback,Xe=t.unstable_cancelCallback,Ze=t.unstable_shouldYield,Qe=t.unstable_requestPaint,$e=t.unstable_now,et=t.unstable_getCurrentPriorityLevel,tt=t.unstable_ImmediatePriority,nt=t.unstable_UserBlockingPriority,rt=t.unstable_NormalPriority,it=t.unstable_LowPriority,at=t.unstable_IdlePriority,ot=t.log,st=t.unstable_setDisableYieldValue,ct=null,lt=null;function ut(e){if(typeof ot==`function`&&st(e),lt&&typeof lt.setStrictMode==`function`)try{lt.setStrictMode(ct,e)}catch{}}var dt=Math.clz32?Math.clz32:mt,ft=Math.log,pt=Math.LN2;function mt(e){return e>>>=0,e===0?32:31-(ft(e)/pt|0)|0}var ht=256,gt=262144,_t=4194304;function vt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function yt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=vt(n))):i=vt(o):i=vt(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=vt(n))):i=vt(o)):i=vt(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function bt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function xt(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-dt(n),i=1<<r;t|=e[r],n&=~i}return t}function St(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ct(){var e=_t;return _t<<=1,!(_t&62914560)&&(_t=4194304),e}function wt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Tt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Et(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-dt(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&Dt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function Dt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-dt(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function Ot(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-dt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function kt(e,t){var n=t&-t;return n=n&42?1:At(n),(n&(e.suspendedLanes|t))===0?n:0}function At(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function jt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function Mt(){var e=w.p;return e===0?(e=window.event,e===void 0?32:Ch(e.type)):e}function Nt(e,t){var n=w.p;try{return w.p=e,t()}finally{w.p=n}}var Pt=Math.random().toString(36).slice(2),Ft=`__reactFiber$`+Pt,It=`__reactProps$`+Pt,Lt=`__reactContainer$`+Pt,Rt=`__reactEvents$`+Pt,zt=`__reactListeners$`+Pt,Bt=`__reactHandles$`+Pt,Vt=`__reactResources$`+Pt,Ht=`__reactMarker$`+Pt,Ut=`__reactLoad$`+Pt;function Wt(e){delete e[Ft],delete e[It],delete e[zt],delete e[Bt]}function Gt(e){var t;if(t=e[Ft])return t;for(var n=e.parentNode;n;){if(t=n[Lt]||n[Ft]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fm(e);e!==null;){if(n=e[Ft])return n;e=fm(e)}return t}e=n,n=e.parentNode}return null}function Kt(e){if(e=e[Ft]||e[Lt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function qt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Jt(e){var t=e[Vt];return t||=e[Vt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function E(e){e[Ht]=!0}function Yt(e){e[Ut]=void 0}var Xt=new Set,Zt={};function Qt(e,t){$t(e,t),$t(e+`Capture`,t)}function $t(e,t){for(Zt[e]=t,e=0;e<t.length;e++)Xt.add(t[e])}var en=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),tn={},nn={};function rn(e){return Je.call(nn,e)?!0:Je.call(tn,e)?!1:en.test(e)?nn[e]=!0:(tn[e]=!0,!1)}var D=!1;function an(){var e=D;return D=!1,e}function on(e,t,n){if(rn(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,n)}}}function sn(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,n)}}function cn(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,r)}}function ln(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function un(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function dn(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fn(e){if(!e._valueTracker){var t=un(e)?`checked`:`value`;e._valueTracker=dn(e,t,``+e[t])}}function pn(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=un(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}var mn=/[\n"\\]/g;function hn(e){return e.replace(mn,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function gn(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+ln(t)):e.value!==``+ln(t)&&(e.value=``+ln(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):vn(e,ln(n)):o===`number`&&e.value==t?vn(e,ln(e.value)):vn(e,ln(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+ln(s):e.removeAttribute(`name`)}function _n(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){fn(e);return}n=n==null?``:``+ln(n),t=t==null?n:``+ln(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),fn(e)}function vn(e,t){e.defaultValue!==``+t&&(e.defaultValue=``+t)}function yn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+ln(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function bn(e,t,n){if(t!=null&&(t=``+ln(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+ln(n)}function xn(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(De(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=ln(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),fn(e)}function Sn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Cn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function wn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Cn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Tn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``,D=!0);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&(wn(e,a,r),D=!0)}else for(var o in t)t.hasOwnProperty(o)&&wn(e,o,t[o])}function En(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Dn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),On=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function kn(e){return On.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function An(){}var jn=null;function Mn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Nn=null,Pn=null;function Fn(e){var t=Kt(e);if(t&&(e=t.stateNode)){var n=e[It]||null;a:switch(e=t.stateNode,t.type){case`input`:if(gn(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+hn(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[It]||null;if(!a)throw Error(i(90));gn(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&pn(r)}break a;case`textarea`:bn(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&yn(e,!!n.multiple,t,!1)}}}var In=!1;function Ln(e,t,n){if(In)return e(t,n);In=!0;try{return e(t)}finally{if(In=!1,(Nn!==null||Pn!==null)&&(zd(),Nn&&(t=Nn,e=Pn,Pn=Nn=null,Fn(t),e)))for(t=0;t<e.length;t++)Fn(e[t])}}function Rn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[It]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var zn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,Bn=!1;if(zn)try{var Vn={};Object.defineProperty(Vn,"passive",{get:function(){Bn=!0}}),window.addEventListener(`test`,Vn,Vn),window.removeEventListener(`test`,Vn,Vn)}catch{Bn=!1}var Hn=null,Un=null,Wn=null;function Gn(){if(Wn)return Wn;var e,t=Un,n=t.length,r,i=`value`in Hn?Hn.value:Hn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Wn=i.slice(e,1<r?1-r:void 0)}function Kn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qn(){return!0}function Jn(){return!1}function Yn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?qn:Jn,this.isPropagationStopped=Jn,this}return S(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=qn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=qn)},persist:function(){},isPersistent:qn}),t}var Xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zn=Yn(Xn),Qn=S({},Xn,{view:0,detail:0}),$n=Yn(Qn),er,tr,nr,rr=S({},Qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==nr&&(nr&&e.type===`mousemove`?(er=e.screenX-nr.screenX,tr=e.screenY-nr.screenY):tr=er=0,nr=e),er)},movementY:function(e){return`movementY`in e?e.movementY:tr}}),ir=Yn(rr),ar=Yn(S({},rr,{dataTransfer:0})),or=Yn(S({},Qn,{relatedTarget:0})),sr=Yn(S({},Xn,{animationName:0,elapsedTime:0,pseudoElement:0})),cr=Yn(S({},Xn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),lr=Yn(S({},Xn,{data:0})),ur={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},dr={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},fr={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function pr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=fr[e])?!!t[e]:!1}function mr(){return pr}var hr=Yn(S({},Qn,{key:function(e){if(e.key){var t=ur[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Kn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?dr[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mr,charCode:function(e){return e.type===`keypress`?Kn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Kn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),gr=Yn(S({},rr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),_r=Yn(S({},Xn,{submitter:0})),vr=Yn(S({},Qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mr})),yr=Yn(S({},Xn,{propertyName:0,elapsedTime:0,pseudoElement:0})),br=Yn(S({},rr,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),xr=Yn(S({},Xn,{newState:0,oldState:0,source:0})),Sr=[9,13,27,32],Cr=zn&&`CompositionEvent`in window,wr=null;zn&&`documentMode`in document&&(wr=document.documentMode);var Tr=zn&&`TextEvent`in window&&!wr,Er=zn&&(!Cr||wr&&8<wr&&11>=wr),Dr=` `,Or=!1;function kr(e,t){switch(e){case`keyup`:return Sr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Ar(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var jr=!1;function Mr(e,t){switch(e){case`compositionend`:return Ar(t);case`keypress`:return t.which===32?(Or=!0,Dr):null;case`textInput`:return e=t.data,e===Dr&&Or?null:e;default:return null}}function Nr(e,t){if(jr)return e===`compositionend`||!Cr&&kr(e,t)?(e=Gn(),Wn=Un=Hn=null,jr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Er&&t.locale!==`ko`?null:t.data;default:return null}}var Pr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!Pr[e.type]:t===`textarea`}function Ir(e,t,n,r){Nn?Pn?Pn.push(r):Pn=[r]:Nn=r,t=Jf(t,`onChange`),0<t.length&&(n=new Zn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var Lr=null,Rr=null;function zr(e){Vf(e,0)}function Br(e){if(pn(qt(e)))return e}function Vr(e,t){if(e===`change`)return t}var Hr=!1;if(zn){var Ur;if(zn){var Wr=`oninput`in document;if(!Wr){var Gr=document.createElement(`div`);Gr.setAttribute(`oninput`,`return;`),Wr=typeof Gr.oninput==`function`}Ur=Wr}else Ur=!1;Hr=Ur&&(!document.documentMode||9<document.documentMode)}function Kr(){Lr&&(Lr.detachEvent(`onpropertychange`,qr),Rr=Lr=null)}function qr(e){if(e.propertyName===`value`&&Br(Rr)){var t=[];Ir(t,Rr,e,Mn(e)),Ln(zr,t)}}function Jr(e,t,n){e===`focusin`?(Kr(),Lr=t,Rr=n,Lr.attachEvent(`onpropertychange`,qr)):e===`focusout`&&Kr()}function Yr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return Br(Rr)}function Xr(e,t){if(e===`click`)return Br(t)}function Zr(e,t){if(e===`input`||e===`change`)return Br(t)}function Qr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var $r=typeof Object.is==`function`?Object.is:Qr;function ei(e,t){if($r(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Je.call(t,i)||!$r(e[i],t[i]))return!1}return!0}function ti(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function ni(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ri(e,t){var n=ni(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=ni(n)}}function ii(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ii(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ai(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ti(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=ti(e.document)}return t}function oi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var si=zn&&`documentMode`in document&&11>=document.documentMode,ci=null,li=null,ui=null,di=!1;function fi(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;di||ci==null||ci!==ti(r)||(r=ci,`selectionStart`in r&&oi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ui&&ei(ui,r)||(ui=r,r=Jf(li,`onSelect`),0<r.length&&(t=new Zn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=ci)))}function pi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var mi={animationend:pi(`Animation`,`AnimationEnd`),animationiteration:pi(`Animation`,`AnimationIteration`),animationstart:pi(`Animation`,`AnimationStart`),transitionrun:pi(`Transition`,`TransitionRun`),transitionstart:pi(`Transition`,`TransitionStart`),transitioncancel:pi(`Transition`,`TransitionCancel`),transitionend:pi(`Transition`,`TransitionEnd`)},hi={},gi={};zn&&(gi=document.createElement(`div`).style,`AnimationEvent`in window||(delete mi.animationend.animation,delete mi.animationiteration.animation,delete mi.animationstart.animation),`TransitionEvent`in window||delete mi.transitionend.transition);function _i(e){if(hi[e])return hi[e];if(!mi[e])return e;var t=mi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in gi)return hi[e]=t[n];return e}var vi=_i(`animationend`),yi=_i(`animationiteration`),bi=_i(`animationstart`),xi=_i(`transitionrun`),Si=_i(`transitionstart`),Ci=_i(`transitioncancel`),wi=_i(`transitionend`),Ti=new Map,Ei=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Ei.push(`scrollEnd`);function Di(e,t){Ti.set(e,t),Qt(t,[e])}var Oi=0;function ki(e,t){if(e.name!=null&&e.name!==`auto`)return e.name;if(t.autoName!==null)return t.autoName;e=bd.identifierPrefix;var n=Oi++;return e=`_`+e+`t_`+n.toString(32)+`_`,t.autoName=e}function Ai(e){if(e==null||typeof e==`string`)return e;var t=null,n=Od;if(n!==null)for(var r=0;r<n.length;r++){var i=e[n[r]];if(i!=null){if(i===`none`)return`none`;t=t==null?i:t+(` `+i)}}return t??e.default}function ji(e,t){return e=Ai(e),t=Ai(t),t==null?e===`auto`?null:e:t===`auto`?null:t}var Mi=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Ni=[],Pi=0,Fi=0;function Ii(){for(var e=Pi,t=Fi=Pi=0;t<e;){var n=Ni[t];Ni[t++]=null;var r=Ni[t];Ni[t++]=null;var i=Ni[t];Ni[t++]=null;var a=Ni[t];if(Ni[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&Bi(n,i,a)}}function Li(e,t,n,r){Ni[Pi++]=e,Ni[Pi++]=t,Ni[Pi++]=n,Ni[Pi++]=r,Fi|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Ri(e,t,n,r){return Li(e,t,n,r),Vi(e)}function zi(e,t){return Li(e,null,null,t),Vi(e)}function Bi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-dt(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function Vi(e){if(50<kd)throw kd=0,Ad=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Hi={};function Ui(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wi(e,t,n,r){return new Ui(e,t,n,r)}function Gi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ki(e,t){var n=e.alternate;return n===null?(n=Wi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function qi(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ji(e,t,n,r,a,o){var s=0;if(r=e,typeof r==`function`)Gi(r)&&(s=1);else if(typeof r==`string`)s=qm(e,n,Ne.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(r){case ve:return e=Wi(31,n,t,a),e.elementType=ve,e.lanes=o,e;case ce:return Yi(n.children,a,o,t);case le:s=8,a|=24;break;case ue:return e=Wi(12,n,t,a|2),e.elementType=ue,e.lanes=o,e;case me:return e=Wi(13,n,t,a),e.elementType=me,e.lanes=o,e;case he:return e=Wi(19,n,t,a),e.elementType=he,e.lanes=o,e;case ye:case xe:return e=a|32,e=Wi(30,n,t,e),e.elementType=xe,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r==`object`&&r)switch(r.$$typeof){case fe:s=10;break a;case de:s=9;break a;case pe:s=11;break a;case ge:s=14;break a;case _e:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=Wi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Yi(e,t,n,r){return e=Wi(7,e,r,t),e.lanes=n,e}function Xi(e,t,n){return e=Wi(6,e,null,t),e.lanes=n,e}function Zi(e){var t=Wi(18,null,null,0);return t.stateNode=e,t}function Qi(e,t,n){return t=Wi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var $i=new WeakMap;function ea(e,t){if(typeof e==`object`&&e){var n=$i.get(e);return n===void 0?(t={value:e,source:t,stack:qe(t)},$i.set(e,t),t):n}return{value:e,source:t,stack:qe(t)}}var ta=[],na=0,ra=null,ia=0,aa=[],oa=0,sa=null,ca=1,la=``;function ua(e,t){ta[na++]=ia,ta[na++]=ra,ra=e,ia=t}function da(e,t,n){aa[oa++]=ca,aa[oa++]=la,aa[oa++]=sa,sa=e;var r=ca;e=la;var i=32-dt(r)-1;r&=~(1<<i),n+=1;var a=32-dt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ca=1<<32-dt(t)+i|n<<i|r,la=a+e}else ca=1<<a|n<<i|r,la=e}function fa(e){e.return!==null&&(ua(e,1),da(e,1,0))}function pa(e){for(;e===ra;)ra=ta[--na],ta[na]=null,ia=ta[--na],ta[na]=null;for(;e===sa;)sa=aa[--oa],aa[oa]=null,la=aa[--oa],aa[oa]=null,ca=aa[--oa],aa[oa]=null}function ma(e,t){aa[oa++]=ca,aa[oa++]=la,aa[oa++]=sa,ca=t.id,la=t.overflow,sa=e}var O=null,k=null,A=!1,ha=null,ga=!1,_a=Error(i(519));function va(e){throw wa(ea(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),_a}function ya(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Ft]=e,t[It]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<zf.length;n++)Q(zf[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),_n(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),xn(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||ep(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=An),t=!0):t=!1,t||va(e,!0)}function ba(e){for(O=e.return;O;)switch(O.tag){case 5:case 31:case 13:ga=!1;return;case 27:case 3:ga=!0;return;default:O=O.return}}function xa(e){if(e!==O)return!1;if(!A)return ba(e),A=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||pp(e.type,e.memoizedProps)),n=!n),n&&k&&va(e),ba(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));k=dm(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));k=dm(e)}else t===27?(t=k,Sp(e.type)?(e=um,um=null,k=e):k=t):k=O?lm(e.stateNode.nextSibling):null;return!0}function Sa(){k=O=null,A=!1}function Ca(){var e=ha;return e!==null&&(pd===null?pd=e:pd.push.apply(pd,e),ha=null),e}function wa(e){ha===null?ha=[e]:ha.push(e)}var Ta=je(null),Ea=null,Da=null;function Oa(e,t,n){T(Ta,t._currentValue),t._currentValue=n}function ka(e){e._currentValue=Ta.current,Me(Ta)}function Aa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ja(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Aa(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Aa(s,n,e),s=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Aa(a.return,n,e),s=a.child,s=s===null?null:s.sibling):s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Ma(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;$r(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===Ie.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[sh]:e.push(sh))}a=a.return}return e!==null&&ja(t,e,n,r),t.flags|=262144,e!==null}function Na(e){for(e=e.firstContext;e!==null;){if(!$r(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Pa(e){Ea=e,Da=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Fa(e){return La(Ea,e)}function Ia(e,t){return Ea===null&&Pa(e),La(e,t)}function La(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Da===null){if(e===null)throw Error(i(308));Da=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Da=Da.next=t;return n}var Ra=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},za=t.unstable_scheduleCallback,Ba=t.unstable_NormalPriority,j={$$typeof:fe,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Va(){return{controller:new Ra,data:new Map,refCount:0}}function Ha(e){e.refCount--,e.refCount===0&&za(Ba,function(){e.controller.abort()})}function Ua(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}var Wa=null;function Ga(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Ka=null,qa=0,Ja=0,Ya=null;function Xa(e,t){if(Ka===null){var n=Ka=[];qa=0,Ja=Pf(),Ya={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return qa++,t.then(Za,Za),t}function Za(){if(--qa===0&&(Wa=null,Ka!==null)){Ya!==null&&(Ya.status=`fulfilled`);var e=Ka;Ka=null,Ja=0,Ya=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Qa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var $a=C.S;C.S=function(e,t){if(gd=$e(),typeof t==`object`&&t&&typeof t.then==`function`&&Xa(e,t),Wa!==null)for(var n=bf;n!==null;)Ua(n,Wa),n=n.next;if(n=e.types,n!==null){for(var r=bf;r!==null;)Ua(r,n),r=r.next;if(Ja!==0){r=Wa,r===null&&(r=Wa=[]);for(var i=0;i<n.length;i++){var a=n[i];r.indexOf(a)===-1&&r.push(a)}}}$a!==null&&$a(e,t)};var eo=je(null);function to(){var e=eo.current;return e===null?G.pooledCache:e}function no(e,t){t===null?T(eo,eo.current):T(eo,t.pool)}function ro(){var e=to();return e===null?null:{parent:j._currentValue,pool:e}}var io=Error(i(460)),ao=Error(i(474)),oo=Error(i(542)),so={then:function(){}};function co(e){return e=e.status,e===`fulfilled`||e===`rejected`}function lo(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(An,An),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,mo(e),e===void 0&&!(`reason`in t)?Error(i(600)):e;default:if(typeof t.status==`string`)t.then(An,An);else{if(e=G,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,mo(e),e}throw fo=t,io}}function uo(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(fo=e,io):e}}var fo=null;function po(){if(fo===null)throw Error(i(459));var e=fo;return fo=null,e}function mo(e){if(e===io||e===oo)throw Error(i(483))}var ho=null,go=0;function _o(e){var t=go;return go+=1,ho===null&&(ho=[]),lo(ho,e,t)}function vo(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function yo(e,t){throw t.$$typeof===ae?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function bo(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=Ki(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=134217730,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=134217730),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Xi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===ce?(e=d(e,t,n.props.children,r,n.key),vo(e,n),e):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===_e&&uo(i)===t.type)?(t=a(t,n.props),vo(t,n),t.return=e,t):(t=Ji(n.type,n.key,n.props,null,e.mode,r),vo(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Qi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Yi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Xi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case oe:return n=Ji(t.type,t.key,t.props,null,e.mode,n),vo(n,t),n.return=e,n;case se:return t=Qi(t,e.mode,n),t.return=e,t;case _e:return t=uo(t),f(e,t,n)}if(De(t)||we(t))return t=Yi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,_o(t),n);if(t.$$typeof===fe)return f(e,Ia(e,t),n);yo(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case oe:return n.key===i?l(e,t,n,r):null;case se:return n.key===i?u(e,t,n,r):null;case _e:return n=uo(n),p(e,t,n,r)}if(De(n)||we(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,_o(n),r);if(n.$$typeof===fe)return p(e,t,Ia(e,n),r);yo(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case oe:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case se:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case _e:return r=uo(r),m(e,t,n,r,i)}if(De(r)||we(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,_o(r),i);if(r.$$typeof===fe)return m(e,t,n,Ia(t,r),i);yo(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),A&&ua(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return A&&ua(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&(_=g.alternate,_!==null&&d.delete(_.key===null?h:_.key)),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),A&&ua(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),A&&ua(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return A&&ua(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&(_=v.alternate,_!==null&&h.delete(_.key===null?g:_.key)),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),A&&ua(a,g),u}function _(e,r,o,c){if(typeof o==`object`&&o&&o.type===ce&&o.key===null&&o.props.ref===void 0&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case oe:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===ce){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),vo(c,o),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===_e&&uo(l)===r.type){n(e,r.sibling),c=a(r,o.props),vo(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===ce?(c=Yi(o.props.children,e.mode,c,o.key),vo(c,o),c.return=e,e=c):(c=Ji(o.type,o.key,o.props,null,e.mode,c),vo(c,o),c.return=e,e=c)}return s(e);case se:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=Qi(o,e.mode,c),c.return=e,e=c}return s(e);case _e:return o=uo(o),_(e,r,o,c)}if(De(o))return h(e,r,o,c);if(we(o)){if(l=we(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return _(e,r,_o(o),c);if(o.$$typeof===fe)return _(e,r,Ia(e,o),c);yo(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Xi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{go=0;var i=_(e,t,n,r);return ho=null,i}catch(t){if(t===io||t===oo)throw t;var a=Wi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var xo=bo(!0),So=bo(!1),Co=!1;function wo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function To(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Eo(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Do(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Vi(e),Bi(e,null,n),t}return Li(e,r,t,n),Vi(e)}function Oo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ot(e,n)}}function ko(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ao=!1;function jo(){if(Ao){var e=Ya;if(e!==null)throw e}}function Mo(e,t,n,r){Ao=!1;var i=e.updateQueue;Co=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(q&f)===f:(r&f)===f){f!==0&&f===Ja&&(Ao=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,h=s;f=t;var g=n;switch(h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(g,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(g,d,f):m,f==null)break a;d=S({},d,f);break a;case 2:Co=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),sd|=o,e.lanes=o,e.memoizedState=d}}function No(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Po(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)No(n[e],t)}var Fo=je(null),Io=je(0);function Lo(e,t){e=od,T(Io,e),T(Fo,t),od=e|t.baseLanes}function Ro(){T(Io,od),T(Fo,Fo.current)}function zo(){od=Io.current,Me(Fo),Me(Io)}var Bo=je(null),Vo=null;function Ho(e){var t=e.alternate;T(qo,qo.current&1),T(Bo,e),Vo===null&&(t===null||Fo.current!==null||t.memoizedState!==null)&&(Vo=e)}function Uo(e){T(qo,qo.current),T(Bo,e),Vo===null&&(Vo=e)}function Wo(e){e.tag===22?(T(qo,qo.current),T(Bo,e),Vo===null&&(Vo=e)):Go()}function Go(){T(qo,qo.current),T(Bo,Bo.current)}function Ko(e){Me(Bo),Vo===e&&(Vo=null),Me(qo)}var qo=je(0);function Jo(e,t){T(Bo,Bo.current),T(qo,t)}function Yo(e){Me(qo),Me(Bo),Vo===e&&(Vo=null)}function Xo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||om(n)||sm(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==`independent`){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Zo=0,M=null,N=null,P=null,Qo=!1,$o=!1,es=!1,ts=0,ns=0,rs=null,is=0;function F(){throw Error(i(321))}function as(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!$r(e[n],t[n]))return!1;return!0}function os(e,t,n,r,i,a){return Zo=a,M=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,C.H=e===null||e.memoizedState===null?Sc:Cc,es=!1,a=n(r,i),es=!1,$o&&(a=cs(t,n,r,i)),ss(e),a}function ss(e){C.H=xc;var t=N!==null&&N.next!==null;if(Zo=0,P=N=M=null,Qo=!1,ns=0,rs=null,t)throw Error(i(300));e===null||L||(e=e.dependencies,e!==null&&Na(e)&&(L=!0))}function cs(e,t,n,r){M=e;var a=0;do{if($o&&(rs=null),ns=0,$o=!1,25<=a)throw Error(i(301));if(a+=1,P=N=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}C.H=wc,o=t(n,r)}while($o);return o}function ls(){var e=C.H,t=e.useState()[0];return t=typeof t.then==`function`?hs(t):t,e=e.useState()[0],(N===null?null:N.memoizedState)!==e&&(M.flags|=1024),t}function us(){var e=ts!==0;return ts=0,e}function ds(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function fs(e){if(Qo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Qo=!1}Zo=0,P=N=M=null,$o=!1,ns=ts=0,rs=null}function ps(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return P===null?M.memoizedState=P=e:P=P.next=e,P}function I(){if(N===null){var e=M.alternate;e=e===null?null:e.memoizedState}else e=N.next;var t=P===null?M.memoizedState:P.next;if(t!==null)P=t,N=e;else{if(e===null)throw M.alternate===null?Error(i(467)):Error(i(310));N=e,e={memoizedState:N.memoizedState,baseState:N.baseState,baseQueue:N.baseQueue,queue:N.queue,next:null},P===null?M.memoizedState=P=e:P=P.next=e}return P}function ms(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function hs(e){var t=ns;return ns+=1,rs===null&&(rs=[]),e=lo(rs,e,t),t=M,(P===null?t.memoizedState:P.next)===null&&(t=t.alternate,C.H=t===null||t.memoizedState===null?Sc:Cc),e}function gs(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return hs(e);if(e.$$typeof===Se)return;if(e.$$typeof===fe)return Fa(e)}throw Error(i(438,String(e)))}function _s(e){var t=null,n=M.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=M.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=ms(),M.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=be;return t.index++,n}function vs(e,t){return typeof t==`function`?t(e):t}function ys(e){return bs(I(),N,e)}function bs(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(Zo&f)===f:(q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Ja&&(d=!0);else if((Zo&p)===p){u=u.next,p===Ja&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,M.lanes|=p,sd|=p;f=u.action,es&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,M.lanes|=f,sd|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!$r(o,e.memoizedState)&&(L=!0,d&&(n=Ya,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function xs(e){var t=I(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);$r(o,t.memoizedState)||(L=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ss(e,t,n){var r=M,a=I(),o=A;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!$r((N||a).memoizedState,n);if(s&&(a.memoizedState=n,L=!0),a=a.queue,qs(Ts.bind(null,r,a,e),[e]),e=a.getSnapshot!==t||s||P!==null&&!!(P.memoizedState.tag&1),Hs(e?9:8,{destroy:void 0},ws.bind(null,r,a,n,t),null),e){if(r.flags|=2048,G===null)throw Error(i(349));o||Zo&127||Cs(r,t,n)}return n}function Cs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=M.updateQueue,t===null?(t=ms(),M.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ws(e,t,n,r){t.value=n,t.getSnapshot=r,Es(t)&&Ds(e)}function Ts(e,t,n){return n(function(){Es(t)&&Ds(e)})}function Es(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!$r(e,n)}catch{return!0}}function Ds(e){var t=zi(e,2);t!==null&&Pd(t,e,2)}function Os(e){var t=ps();if(typeof e==`function`){var n=e;if(e=n(),es){ut(!0);try{n()}finally{ut(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vs,lastRenderedState:e},t}function ks(e,t,n,r){return e.baseState=n,bs(e,N,typeof r==`function`?r:vs)}function As(e,t,n,r,a){if(vc(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};C.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,js(t,o)):(o.next=n.next,t.pending=n.next=o)}}function js(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=C.T,o={};o.types=a===null?null:a.types,C.T=o;try{var s=n(i,r),c=C.S;c!==null&&c(o,s),Ms(e,t,s)}catch(n){Ps(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),C.T=a}}else try{a=n(i,r),Ms(e,t,a)}catch(n){Ps(e,t,n)}}function Ms(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Ns(e,t,n)},function(n){return Ps(e,t,n)}):Ns(e,t,n)}function Ns(e,t,n){t.status=`fulfilled`,t.value=n,Fs(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,js(e,n)))}function Ps(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Fs(t),t=t.next;while(t!==r)}e.action=null}function Fs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Is(e,t){return t}function Ls(e,t){if(A){var n=G.formState;if(n!==null){a:{var r=M;if(A){if(k){b:{for(var i=k,a=ga;i.nodeType!==8;){if(!a){i=null;break b}if(i=lm(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){k=lm(i.nextSibling),r=i.data===`F!`;break a}}va(r)}r=!1}r&&(t=n[0])}}return n=ps(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Is,lastRenderedState:t},n.queue=r,n=hc.bind(null,M,r),r.dispatch=n,r=Os(!1),a=_c.bind(null,M,!1,r.queue),r=ps(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=As.bind(null,M,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Rs(e){return zs(I(),N,e)}function zs(e,t,n){if(t=bs(e,t,Is)[0],e=ys(vs)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=hs(t)}catch(e){throw e===io?oo:e}else r=t;t=I();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(M.flags|=2048,Hs(9,{destroy:void 0},Bs.bind(null,i,n),null)),[r,a,e]}function Bs(e,t){e.action=t}function Vs(e){var t=I(),n=N;if(n!==null)return zs(t,n,e);I(),t=t.memoizedState,n=I();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Hs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=M.updateQueue,t===null&&(t=ms(),M.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Us(){return I().memoizedState}function Ws(e,t,n,r){var i=ps();M.flags|=e,i.memoizedState=Hs(1|t,{destroy:void 0},n,r===void 0?null:r)}function Gs(e,t,n,r){var i=I();r=r===void 0?null:r;var a=i.memoizedState.inst;N!==null&&r!==null&&as(r,N.memoizedState.deps)?i.memoizedState=Hs(t,a,n,r):(M.flags|=e,i.memoizedState=Hs(1|t,a,n,r))}function Ks(e,t){Ws(8390656,8,e,t)}function qs(e,t){Gs(2048,8,e,t)}function Js(e){M.flags|=4;var t=M.updateQueue;if(t===null)t=ms(),M.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Ys(e){var t=I().memoizedState;return Js({ref:t,nextImpl:e}),function(){if(W&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function Xs(e,t){return Gs(4,2,e,t)}function Zs(e,t){return Gs(4,4,e,t)}function Qs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $s(e,t,n){n=n==null?null:n.concat([e]),Gs(4,4,Qs.bind(null,t,e),n)}function ec(){}function tc(e,t){var n=I();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&as(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function nc(e,t){var n=I();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&as(t,r[1]))return r[0];if(r=e(),es){ut(!0);try{e()}finally{ut(!1)}}return n.memoizedState=[r,t],r}function rc(e,t,n){return n===void 0||Zo&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=n,e=Md(),M.lanes|=e,sd|=e,n)}function ic(e,t,n,r){return $r(n,t)?n:Fo.current===null?!(Zo&106)||Zo&1073741824&&!(q&261930)?(L=!0,e.memoizedState=n):(e=Md(),M.lanes|=e,sd|=e,t):(e=rc(e,n,r),$r(e,t)||(L=!0),e)}function ac(e,t,n,r,i){var a=w.p;w.p=a!==0&&8>a?a:8;var o=C.T,s={};s.types=o===null?null:o.types,C.T=s,_c(e,!1,t,n);try{var c=i(),l=C.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?gc(e,t,Qa(c,r),jd(e)):gc(e,t,r,jd(e))}catch(n){gc(e,t,{then:function(){},status:`rejected`,reason:n},jd())}finally{w.p=a,o!==null&&s.types!==null&&(o.types=s.types),C.T=o}}function oc(){}function sc(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=cc(e).queue;ac(e,a,t,Oe,n===null?oc:function(){return lc(e),n(r)})}function cc(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Oe,baseState:Oe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:vs,lastRenderedState:Oe},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:vs,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function lc(e){var t=cc(e);t.next===null&&(t=e.alternate.memoizedState),gc(e,t.next.queue,{},jd())}function uc(){return Fa(sh)}function dc(){return I().memoizedState}function fc(){return I().memoizedState}function pc(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=jd();e=Eo(n);var r=Do(t,e,n);r!==null&&(Pd(r,t,n),Oo(r,t,n)),t={cache:Va()},e.payload=t;return}t=t.return}}function mc(e,t,n){var r=jd();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},vc(e)?yc(t,n):(n=Ri(e,t,n,r),n!==null&&(Pd(n,e,r),bc(n,t,r)))}function hc(e,t,n){gc(e,t,n,jd())}function gc(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(vc(e))yc(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,$r(s,o))return Li(e,t,i,0),G===null&&Ii(),!1}catch{}if(n=Ri(e,t,i,r),n!==null)return Pd(n,e,r),bc(n,t,r),!0}return!1}function _c(e,t,n,r){if(r={lane:2,revertLane:Pf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},vc(e)){if(t)throw Error(i(479))}else t=Ri(e,n,r,2),t!==null&&Pd(t,e,2)}function vc(e){var t=e.alternate;return e===M||t!==null&&t===M}function yc(e,t){$o=Qo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function bc(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ot(e,n)}}var xc={readContext:Fa,use:gs,useCallback:F,useContext:F,useEffect:F,useImperativeHandle:F,useLayoutEffect:F,useInsertionEffect:F,useMemo:F,useReducer:F,useRef:F,useState:F,useDebugValue:F,useDeferredValue:F,useTransition:F,useSyncExternalStore:F,useId:F,useHostTransitionStatus:F,useFormState:F,useActionState:F,useOptimistic:F,useMemoCache:F,useCacheRefresh:F,useEffectEvent:F},Sc={readContext:Fa,use:gs,useCallback:function(e,t){return ps().memoizedState=[e,t===void 0?null:t],e},useContext:Fa,useEffect:Ks,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),Ws(4194308,4,Qs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ws(4194308,4,e,t)},useInsertionEffect:function(e,t){Ws(4,2,e,t)},useMemo:function(e,t){var n=ps();t=t===void 0?null:t;var r=e();if(es){ut(!0);try{e()}finally{ut(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=ps();if(n!==void 0){var i=n(t);if(es){ut(!0);try{n(t)}finally{ut(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=mc.bind(null,M,e),[r.memoizedState,e]},useRef:function(e){var t=ps();return e={current:e},t.memoizedState=e},useState:function(e){e=Os(e);var t=e.queue,n=hc.bind(null,M,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ec,useDeferredValue:function(e,t){return rc(ps(),e,t)},useTransition:function(){var e=Os(!1);return e=ac.bind(null,M,e.queue,!0,!1),ps().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=M,a=ps();if(A){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),G===null)throw Error(i(349));q&127||Cs(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Ks(Ts.bind(null,r,o,e),[e]),r.flags|=2048,Hs(9,{destroy:void 0},ws.bind(null,r,o,n,t),null),n},useId:function(){var e=ps(),t=G.identifierPrefix;if(A){var n=la,r=ca;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=ts++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=is++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:uc,useFormState:Ls,useActionState:Ls,useOptimistic:function(e){var t=ps();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=_c.bind(null,M,!0,n),n.dispatch=t,[e,t]},useMemoCache:_s,useCacheRefresh:function(){return ps().memoizedState=pc.bind(null,M)},useEffectEvent:function(e){var t=ps(),n={impl:e};return t.memoizedState=n,function(){if(W&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Cc={readContext:Fa,use:gs,useCallback:tc,useContext:Fa,useEffect:qs,useImperativeHandle:$s,useInsertionEffect:Xs,useLayoutEffect:Zs,useMemo:nc,useReducer:ys,useRef:Us,useState:function(){return ys(vs)},useDebugValue:ec,useDeferredValue:function(e,t){return ic(I(),N.memoizedState,e,t)},useTransition:function(){var e=ys(vs)[0],t=I().memoizedState;return[typeof e==`boolean`?e:hs(e),t]},useSyncExternalStore:Ss,useId:dc,useHostTransitionStatus:uc,useFormState:Rs,useActionState:Rs,useOptimistic:function(e,t){return ks(I(),N,e,t)},useMemoCache:_s,useCacheRefresh:fc,useEffectEvent:Ys},wc={readContext:Fa,use:gs,useCallback:tc,useContext:Fa,useEffect:qs,useImperativeHandle:$s,useInsertionEffect:Xs,useLayoutEffect:Zs,useMemo:nc,useReducer:xs,useRef:Us,useState:function(){return xs(vs)},useDebugValue:ec,useDeferredValue:function(e,t){var n=I();return N===null?rc(n,e,t):ic(n,N.memoizedState,e,t)},useTransition:function(){var e=xs(vs)[0],t=I().memoizedState;return[typeof e==`boolean`?e:hs(e),t]},useSyncExternalStore:Ss,useId:dc,useHostTransitionStatus:uc,useFormState:Vs,useActionState:Vs,useOptimistic:function(e,t){var n=I();return N===null?(n.baseState=e,[e,n.queue.dispatch]):ks(n,N,e,t)},useMemoCache:_s,useCacheRefresh:fc,useEffectEvent:Ys};function Tc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:S({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ec={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=jd(),i=Eo(r);i.payload=t,n!=null&&(i.callback=n),t=Do(e,i,r),t!==null&&(Pd(t,e,r),Oo(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=jd(),i=Eo(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Do(e,i,r),t!==null&&(Pd(t,e,r),Oo(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=jd(),r=Eo(n);r.tag=2,t!=null&&(r.callback=t),t=Do(e,r,n),t!==null&&(Pd(t,e,n),Oo(t,e,n))}};function Dc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!ei(n,r)||!ei(i,a):!0}function Oc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ec.enqueueReplaceState(t,t.state,null)}function kc(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=S({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Ac(e){Mi(e)}function jc(e){console.error(e)}function Mc(e){Mi(e)}function Nc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Pc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Fc(e,t,n){return n=Eo(n),n.tag=3,n.payload={element:null},n.callback=function(){Nc(e,t)},n}function Ic(e){return e=Eo(e),e.tag=3,e}function Lc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Pc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Pc(t,n,r),typeof i!=`function`&&(yd===null?yd=new Set([this]):yd.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Rc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Ma(t,n,a,!0),n=Bo.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Vo===null?Kd():n.alternate===null&&Y===0&&(Y=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===so?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),mf(e,r,a)),!1;case 22:return n.flags|=65536,r===so?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),mf(e,r,a)),!1}throw Error(i(435,n.tag))}return mf(e,r,a),Kd(),!1}if(A)return t=Bo.current,t===null?(r!==_a&&(t=Error(i(423),{cause:r}),wa(ea(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=ea(r,n),a=Fc(e.stateNode,r,a),ko(e,a),Y!==4&&(Y=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==_a&&(e=Error(i(422),{cause:r}),wa(ea(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=ea(o,n),fd===null?fd=[o]:fd.push(o),Y!==4&&(Y=2),t===null)return!0;r=ea(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Fc(n.stateNode,r,e),ko(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(yd===null||!yd.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Ic(a),Lc(a,e,n,r),ko(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var zc=Error(i(461)),L=!1;function R(e,t,n,r){t.child=e===null?So(t,null,n,r):xo(t,e.child,n,r)}function Bc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Pa(t),r=os(e,t,n,o,a,i),s=us(),e!==null&&!L?(ds(e,t,i),ml(e,t,i)):(A&&s&&fa(t),t.flags|=1,R(e,t,r,i),t.child)}function Vc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Gi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Hc(e,t,a,r,i)):(e=Ji(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!hl(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?ei:n,n(o,r)&&e.ref===t.ref)return ml(e,t,i)}return t.flags|=1,e=Ki(a,r),e.ref=t.ref,e.return=t,t.child=e}function Hc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(ei(a,r)&&e.ref===t.ref){if(L=!1,t.pendingProps=r=a,hl(e,i))e.flags&131072&&(L=!0);else return t.lanes=e.lanes,ml(e,t,i)}}return Xc(e,t,n,r,i)}function Uc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Gc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&no(t,a===null?null:a.cachePool),a===null?Ro():Lo(t,a),Wo(t);else return r=t.lanes=536870912,Gc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&no(t,null),Ro(),Go()):(no(t,a.cachePool),Lo(t,a),Go(),t.memoizedState=null);return R(e,t,i,n),t.child}function Wc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Gc(e,t,n,r,i){var a=to();return a=a===null?null:{parent:j._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&no(t,null),Ro(),Wo(t),e!==null&&Ma(e,t,r,!0),t.childLanes=i,null}function Kc(e,t){return t=al({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function qc(e,t,n){return xo(t,e.child,null,n),e=Kc(t,t.pendingProps),e.flags|=2,Ko(t),t.memoizedState=null,e}function Jc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(A){if(r.mode===`hidden`)return e=Kc(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Wc(null,e);if(Uo(t),(e=k)?(e=am(e,ga),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:sa===null?null:{id:ca,overflow:la},retryLane:536870912,hydrationErrors:null},n=Zi(e),n.return=t,t.child=n,O=t,k=null)):e=null,e===null)throw va(t);return t.lanes=536870912,null}return Kc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(Uo(t),a){if(t.flags&256)t.flags&=-257,t=qc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(L||Ma(e,t,n,!1),a=(n&e.childLanes)!==0,L||a){if(Fo.current===null){if(r=G,r!==null&&(s=kt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,zi(e,s),Pd(r,e,s),zc;Kd()}t=qc(e,t,n)}else e=o.treeContext,k=lm(s.nextSibling),O=t,A=!0,ha=null,ga=!1,e!==null&&ma(t,e),t=Kc(t,r),t.flags|=134221824;return t}return e=Ki(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Yc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Xc(e,t,n,r,i){return Pa(t),n=os(e,t,n,r,void 0,i),r=us(),e!==null&&!L?(ds(e,t,i),ml(e,t,i)):(A&&r&&fa(t),t.flags|=1,R(e,t,n,i),t.child)}function Zc(e,t,n,r,i,a){return Pa(t),t.updateQueue=null,n=cs(t,r,n,i),ss(e),r=us(),e!==null&&!L?(ds(e,t,a),ml(e,t,a)):(A&&r&&fa(t),t.flags|=1,R(e,t,n,a),t.child)}function Qc(e,t,n,r,i){if(Pa(t),t.stateNode===null){var a=Hi,o=n.contextType;typeof o==`object`&&o&&(a=Fa(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ec,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},wo(t),o=n.contextType,a.context=typeof o==`object`&&o?Fa(o):Hi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Tc(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ec.enqueueReplaceState(a,a.state,null),Mo(t,r,a,i),jo(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=kc(n,s);a.props=c;var l=a.context,u=n.contextType;o=Hi,typeof u==`object`&&u&&(o=Fa(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Oc(t,a,r,o),Co=!1;var f=t.memoizedState;a.state=f,Mo(t,r,a,i),jo(),l=t.memoizedState,s||f!==l||Co?(typeof d==`function`&&(Tc(t,n,d,r),l=t.memoizedState),(c=Co||Dc(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,To(e,t),o=t.memoizedProps,u=kc(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=Hi,typeof l==`object`&&l&&(c=Fa(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Oc(t,a,r,c),Co=!1,f=t.memoizedState,a.state=f,Mo(t,r,a,i),jo();var p=t.memoizedState;o!==d||f!==p||Co||e!==null&&e.dependencies!==null&&Na(e.dependencies)?(typeof s==`function`&&(Tc(t,n,s,r),p=t.memoizedState),(u=Co||Dc(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Na(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Yc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=xo(t,e.child,null,i),t.child=xo(t,null,n,i)):R(e,t,n,i),t.memoizedState=a.state,e=t.child):e=ml(e,t,i),e}function $c(e,t,n,r){return Sa(),t.flags|=256,R(e,t,n,r),t.child}var el={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function tl(e){return{baseLanes:e,cachePool:ro()}}function nl(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=ud),e}function rl(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(qo.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(A){if(i?Ho(t):Go(),(e=k)?(e=am(e,ga),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:sa===null?null:{id:ca,overflow:la},retryLane:536870912,hydrationErrors:null},n=Zi(e),n.return=t,t.child=n,O=t,k=null)):e=null,e===null)throw va(t);return t.lanes=sm(e)?32:536870912,null}return a=r.children,r=r.fallback,i?(Go(),i=t.mode,a=al({mode:`hidden`,children:a},i),r=Yi(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r=t.child,r.memoizedState=tl(n),r.childLanes=nl(e,o,n),t.memoizedState=el,Wc(null,r)):(Ho(t),il(t,a))}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(c!==null)return sl(e,t,a,o,r,c,s,n)}return i?(Go(),i=r.fallback,a=t.mode,s=e.child,c=s.sibling,r=Ki(s,{mode:`hidden`,children:r.children}),r.subtreeFlags=s.subtreeFlags&1206910976,c===null?(i=Yi(i,a,n,null),i.flags|=2):i=Ki(c,i),i.return=t,r.return=t,r.sibling=i,t.child=r,Wc(null,r),r=t.child,i=e.child.memoizedState,i===null?i=tl(n):(a=i.cachePool,a===null?a=ro():(s=j._currentValue,a=a.parent===s?a:{parent:s,pool:s}),i={baseLanes:i.baseLanes|n,cachePool:a}),r.memoizedState=i,r.childLanes=nl(e,o,n),t.memoizedState=el,Wc(e.child,r)):(Ho(t),n=e.child,e=n.sibling,n=Ki(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function il(e,t){return t=al({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function al(e,t){return e=Wi(22,e,null,t),e.lanes=0,e}function ol(e,t,n){return xo(t,e.child,null,n),e=il(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function sl(e,t,n,r,a,o,s,c){if(n)return t.flags&256?(Ho(t),t.flags&=-257,ol(e,t,c)):t.memoizedState===null?(Go(),o=a.fallback,s=t.mode,a=al({mode:`visible`,children:a.children},s),o=Yi(o,s,c,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,xo(t,e.child,null,c),a=t.child,a.memoizedState=tl(c),a.childLanes=nl(e,r,c),t.memoizedState=el,Wc(null,a)):(Go(),t.child=e.child,t.flags|=128,null);if(Ho(t),sm(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,r!==``&&(a=Error(i(419)),a.stack=``,a.digest=r,wa({value:a,source:null,stack:null})),ol(e,t,c)}if(L||Ma(e,t,c,!1),r=(c&e.childLanes)!==0,L||r){if(Fo.current!==null)return ol(e,t,c);if(r=G,r!==null&&(a=kt(r,c),a!==0&&a!==s.retryLane))throw s.retryLane=a,zi(e,a),Pd(r,e,a),zc;return om(o)||Kd(),ol(e,t,c)}return om(o)?(t.flags|=192,t.child=e.child,null):(e=s.treeContext,k=lm(o.nextSibling),O=t,A=!0,ha=null,ga=!1,e!==null&&ma(t,e),t=il(t,a.children),t.flags|=134221824,t)}function cl(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Aa(e.return,t,n)}function ll(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Xo(n)===null&&(t=e),e=e.sibling}return t}function ul(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function dl(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function fl(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=qo.current;if(t.flags&128)return Jo(t,o),null;var s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,Jo(t,o),i===`backwards`&&e!==null?(dl(e),R(e,t,r,n),dl(e)):R(e,t,r,n),r=A?ia:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cl(e,n,t);else if(e.tag===19)cl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`backwards`:n=ll(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,dl(t)),ul(t,!0,i,null,a,r);break;case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Xo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ul(t,!0,n,null,a,r);break;case`together`:ul(t,!1,null,null,void 0,r);break;case`independent`:t.memoizedState=null;break;default:n=ll(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ul(t,!1,i,n,a,r)}return t.child}function pl(e,t,n){var r=t.pendingProps;return Oa(t,t.type,r.value),R(e,t,r.children,n),t.child}function ml(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),sd|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(Ma(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=Ki(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ki(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function hl(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&Na(e)))}function gl(e,t,n){switch(t.tag){case 3:Le(t,t.stateNode.containerInfo),Oa(t,j,e.memoizedState.cache),Sa();break;case 27:case 5:ze(t);break;case 4:Le(t,t.stateNode.containerInfo);break;case 10:Oa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Uo(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return Ho(t),t.flags|=128,null;r=Ma(e,t,n,!1);var i=t.child.childLanes;return r||(n&i)!==0?rl(e,t,n):(Ho(t),e=ml(e,t,n),e===null?null:e.sibling)}Ho(t);break;case 19:if(t.flags&128)return fl(e,t,n);if(i=!!(e.flags&128),r=(n&t.childLanes)!==0,r||=(Ma(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return fl(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Jo(t,qo.current),r)break;return null;case 22:return t.lanes=0,Uc(e,t,n,t.pendingProps);case 24:Oa(t,j,e.memoizedState.cache)}return ml(e,t,n)}function _l(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)L=!0;else{if(!hl(e,n)&&!(t.flags&128))return L=!1,gl(e,t,n);L=!!(e.flags&131072)}}else L=!1,A&&t.flags&1048576&&da(t,ia,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=uo(t.elementType),t.type=e,typeof e==`function`)Gi(e)?(r=kc(e,r),t.tag=1,t=Qc(null,t,e,r,n)):(t.tag=0,t=Xc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===pe){t.tag=11,t=Bc(null,t,e,r,n);break a}if(a===ge){t.tag=14,t=Vc(null,t,e,r,n);break a}if(a===fe){t.tag=10,t.type=e,t=pl(null,t,n);break a}}throw t=Ee(e)||e,Error(i(306,t,``))}}return t;case 0:return Xc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=kc(r,t.pendingProps),Qc(e,t,r,a,n);case 3:a:{if(Le(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,To(e,t),Mo(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Oa(t,j,r),r!==o.cache&&ja(t,[j],n,!0),jo(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=$c(e,t,r,n);break a}if(r!==a){a=ea(Error(i(424)),t),wa(a),t=$c(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(k=lm(e.firstChild),O=t,A=!0,ha=null,ga=!0,n=So(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(Sa(),r===a){t=ml(e,t,n);break a}R(e,t,r,n)}t=t.child}return t;case 26:return Yc(e,t),e===null?(n=Nm(t.type,null,t.pendingProps,null))?t.memoizedState=n:A||(t.stateNode=fp(t.type,t.pendingProps,Fe.current,t)):t.memoizedState=Nm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ze(t),e===null&&A&&(r=t.stateNode=hm(t.type,t.pendingProps,Fe.current),O=t,ga=!0,a=k,Sp(t.type)?(um=a,k=lm(r.firstChild)):k=a),R(e,t,t.pendingProps.children,n),Yc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&A&&((a=r=k)&&(r=rm(r,t.type,t.pendingProps,ga),r===null?a=!1:(t.stateNode=r,O=t,k=lm(r.firstChild),ga=!1,a=!0)),a||va(t)),ze(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,pp(a,o)?r=null:s!==null&&pp(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=os(e,t,ls,null,null,n),sh._currentValue=a),Yc(e,t),R(e,t,r,n),t.child;case 6:return e===null&&A&&((e=n=k)&&(n=im(n,t.pendingProps,ga),n===null?e=!1:(t.stateNode=n,O=t,k=null,e=!0)),e||va(t)),null;case 13:return rl(e,t,n);case 4:return Le(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=xo(t,null,r,n):R(e,t,r,n),t.child;case 11:return Bc(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,Yc(e,t),R(e,t,r,n),t.child;case 8:return R(e,t,t.pendingProps.children,n),t.child;case 12:return R(e,t,t.pendingProps.children,n),t.child;case 10:return pl(e,t,n);case 9:return a=t.type._context,r=t.pendingProps.children,Pa(t),a=Fa(a),r=r(a),t.flags|=1,R(e,t,r,n),t.child;case 14:return Vc(e,t,t.type,t.pendingProps,n);case 15:return Hc(e,t,t.type,t.pendingProps,n);case 19:return fl(e,t,n);case 31:return Jc(e,t,n);case 22:return Uc(e,t,n,t.pendingProps);case 24:return Pa(t),r=Fa(j),e===null?(a=to(),a===null&&(a=G,o=Va(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},wo(t),Oa(t,j,a)):((e.lanes&n)!==0&&(To(e,t),Mo(t,null,null,n),jo()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Oa(t,j,r),r!==a.cache&&ja(t,[j],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Oa(t,j,r))),R(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!==`auto`?t.flags|=e===null?18882560:18874368:A&&fa(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:Yc(e,t),R(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function vl(e){e.flags|=4}function yl(e,t,n,r,i){var a;if((a=!!(e.mode&32))&&(a=n===null?Jm(t,r):Jm(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Ud())e.flags|=8192;else throw fo=so,ao}}else e.flags&=-16777217}function bl(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Ym(t)){if(Ud())e.flags|=8192;else throw fo=so,ao}}function xl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Ct(),e.lanes|=t,dd|=t)}function Sl(e,t){if(!A)switch(e.tailMode){case`visible`:break;case`collapsed`:for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function z(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&1206910976,r|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Cl(e,t,n){var r=t.pendingProps;switch(pa(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return z(t),null;case 1:return z(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ka(j),Re(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(xa(t)?vl(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ca())),z(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(vl(t),o===null?(z(t),yl(t,a,null,r,n)):(z(t),bl(t,o))):o?o===e.memoizedState?(z(t),t.flags&=-16777217):(vl(t),z(t),bl(t,o)):(e=e.memoizedProps,e!==r&&vl(t),z(t),yl(t,a,e,r,n)),null;case 27:if(Be(t),n=Fe.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&vl(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return z(t),t.subtreeFlags&=-33554433,null}e=Ne.current,xa(t)?ya(t,e):(e=hm(a,r,n),t.stateNode=e,vl(t))}return z(t),t.subtreeFlags&=-33554433,null;case 5:if(Be(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&vl(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return z(t),t.subtreeFlags&=-33554433,null}if(o=Ne.current,xa(t))ya(t,o);else{var s=lp(Fe.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[Ft]=t,o[It]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(np(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&vl(t)}}return z(t),t.subtreeFlags&=-33554433,yl(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&vl(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=Fe.current,xa(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=O,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[Ft]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||ep(e.nodeValue,n)),e||va(t,!0)}else e=lp(e).createTextNode(r),e[Ft]=t,t.stateNode=e}return z(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=xa(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[Ft]=t}else Sa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;z(t),e=!1}else n=Ca(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Ko(t),t):(Ko(t),null);if(t.flags&128)throw Error(i(558))}return z(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=xa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[Ft]=t}else Sa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;z(t),a=!1}else a=Ca(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Ko(t),t):(Ko(t),null)}return Ko(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),xl(t,t.updateQueue),z(t),null);case 4:return Re(),e===null&&Wf(t.stateNode.containerInfo),t.flags|=67108864,z(t),null;case 10:return ka(t.type),z(t),null;case 19:if(Yo(t),r=t.memoizedState,r===null)return z(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)Sl(r,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Xo(e),o!==null){for(t.flags|=128,Sl(r,!1),e=o.updateQueue,t.updateQueue=e,xl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)qi(n,e),n=n.sibling;return Jo(t,qo.current&1|2),A&&ua(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&$e()>_d&&(t.flags|=128,a=!0,Sl(r,!1),t.lanes=4194304)}}else{if(!a){if(e=Xo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,xl(t,e),Sl(r,!0),r.tail===null&&r.tailMode!==`collapsed`&&r.tailMode!==`visible`&&!o.alternate&&!A)return z(t),null}else 2*$e()-r.renderingStartTime>_d&&n!==536870912&&(t.flags|=128,a=!0,Sl(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}if(r.tail!==null){e=r.tail;a:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break a}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=$e(),e.sibling=null,o=qo.current,o=a?o&1|2:o&1,r.tailMode===`visible`||r.tailMode===`collapsed`||!n||A?Jo(t,o):(n=o,T(Bo,t),T(qo,n),Vo===null&&(Vo=t)),A&&ua(t,r.treeForkCount),e}return z(t),null;case 22:case 23:return Ko(t),zo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(z(t),t.subtreeFlags&6&&(t.flags|=8192)):z(t),n=t.updateQueue,n!==null&&xl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&Me(eo),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ka(j),z(t),null;case 25:return null;case 30:return t.flags|=33554432,z(t),null}throw Error(i(156,t.tag))}function wl(e,t){switch(pa(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ka(j),Re(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Be(t),null;case 31:if(t.memoizedState!==null){if(Ko(t),t.alternate===null)throw Error(i(340));Sa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ko(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Sa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Yo(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Re(),null;case 10:return ka(t.type),null;case 22:case 23:return Ko(t),zo(),e!==null&&Me(eo),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ka(j),null;case 25:return null;default:return null}}function Tl(e,t){switch(pa(t),t.tag){case 3:ka(j),Re();break;case 26:case 27:case 5:Be(t);break;case 4:Re();break;case 31:t.memoizedState!==null&&Ko(t);break;case 13:Ko(t);break;case 19:Yo(t);break;case 10:ka(t.type);break;case 22:case 23:Ko(t),zo(),e!==null&&Me(eo);break;case 24:ka(j)}}function El(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Dl(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Ol(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Po(t,n)}catch(t){Z(e,e.return,t)}}}function kl(e,t,n){n.props=kc(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Al(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var i=e.stateNode,a=ki(e.memoizedProps,i);(i.ref===null||i.ref.name!==a)&&(i.ref=Pp(a)),r=i.ref;break;case 7:if(e.stateNode===null){var o=new Fp(e);m(e.child,!1,Qp,o,void 0,void 0),e.stateNode=o}r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function jl(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}}function Ml(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)em(e.stateNode,t[n])}function Nl(e){for(var t=e.return;t!==null&&(Il(t)&&em(e.stateNode,t.stateNode),!Fl(t));)t=t.return}function Pl(e){for(var t=e.return;t!==null&&(Il(t)&&tm(e.stateNode,t.stateNode),!Fl(t));)t=t.return}function Fl(e){return e.tag===5||e.tag===3||e.tag===27}function Il(e){return e&&e.tag===7&&e.stateNode!==null}function Ll(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Rl(e,t,n){try{var r=e.stateNode;ip(r,e.type,n,t),r[It]=t}catch(t){Z(e,e.return,t)}}function zl(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sp(e.type)||e.tag===4}function Bl(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||zl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sp(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(i,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(i),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=An)),Ml(e,r),D=!0;else if(i!==4&&(i===27&&(Ml(e,r),r=null,Sp(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Vl(e,t,n,r),e=e.sibling;e!==null;)Vl(e,t,n,r),e=e.sibling}function Hl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),Ml(e,r),D=!0;else if(i!==4&&(i===27&&(Ml(e,r),r=null,Sp(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Hl(e,t,n,r),e=e.sibling;e!==null;)Hl(e,t,n,r),e=e.sibling}function Ul(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);np(t,r,n),t[Ft]=e,t[It]=n}catch(t){Z(e,e.return,t)}}var Wl=!1,Gl=null;function Kl(e){(e.tag===30||e.subtreeFlags&33554432)&&(Wl=!0)}var ql=null;function Jl(){var e=ql;return ql=null,e}var Yl=0;function Xl(e,t,n,r,i){return Yl=0,Zl(e.child,t,n,r,i)}function Zl(e,t,n,r,i){for(var a=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(r!==null){var s=Op(o);r.push(s),s.view&&(a=!0)}else a||Op(o).view&&(a=!0);Wl=!0,Tp(o,Yl===0?t:t+`_`+Yl,n),Yl++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&i||Zl(e.child,t,n,r,i)&&(a=!0));e=e.sibling}return a}function Ql(e,t){for(;e!==null;)e.tag===5?Ep(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Ql(e.child,t)),e=e.sibling}function $l(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&($l(e),e.tag===30&&e.flags&18874368&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name===`auto`)throw Error(i(544));var n=t.name;t=ji(t.default,t.share),t!==`none`&&(Xl(e,n,t,null,!1)||Ql(e.child,!1))}e=e.sibling}}function eu(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,i=ki(r,n),a=ji(r.default,n.paired?r.share:r.enter);a===`none`?$l(e):Xl(e,i,a,null,!1)?($l(e),n.paired||t||Nd(e,r.onEnter)):Ql(e.child,!1)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)eu(e,t),e=e.sibling;else $l(e)}function tu(e){if(Gl!==null&&Gl.size!==0){var t=Gl;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,r=n.name;if(r!=null&&r!==`auto`){var i=t.get(r);if(i!==void 0){var a=ji(n.default,n.share);if(a!==`none`&&(Xl(e,r,a,null,!1)?(a=e.stateNode,i.paired=a,a.paired=i,Nd(e,n.onShare)):Ql(e.child,!1)),t.delete(r),t.size===0)break}}}tu(e)}e=e.sibling}}}function nu(e){if(e.tag===30){var t=e.memoizedProps,n=ki(t,e.stateNode),r=Gl===null?void 0:Gl.get(n),i=ji(t.default,r===void 0?t.exit:t.share);i!==`none`&&(Xl(e,n,i,null,!1)?r===void 0?Nd(e,t.onExit):(i=e.stateNode,r.paired=i,i.paired=r,Gl.delete(n),Nd(e,t.onShare)):Ql(e.child,!1)),Gl!==null&&tu(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)nu(e),e=e.sibling;else Gl!==null&&tu(e)}function ru(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=ki(t,e.stateNode);t=ji(t.default,t.update),e.flags&=-5,t!==`none`&&Xl(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&ru(e);e=e.sibling}}function iu(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,Ql(e.child,!1))}iu(e)}e=e.sibling}}function au(e){if(e.tag===30)e.stateNode.paired=null,Ql(e.child,!1),iu(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)au(e),e=e.sibling;else iu(e)}function ou(e){for(e=e.child;e!==null;)e.tag===30?Ql(e.child,!1):e.subtreeFlags&33554432&&ou(e),e=e.sibling}function su(e,t,n,r,i,a,o){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(a!==null&&Yl<a.length){var l=a[Yl],u=Op(c);(l.view||u.view)&&(s=!0);var d;if(d=!(e.flags&4)){if(u.clip)d=!0;else{d=l.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}}d&&(e.flags|=4),u.abs?u=!l.abs:(l=l.rect,u=u.rect,u=l.height!==u.height||l.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;e.flags&4&&Tp(c,Yl===0?n:n+`_`+Yl,i),s&&e.flags&4||(ql===null&&(ql=[]),ql.push(c,Yl===0?r:r+`_`+Yl,t.memoizedProps)),Yl++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:su(e,t.child,n,r,i,a,o)&&(s=!0));t=t.sibling}return s}function cu(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,i=ki(n,r),a=ji(n.default,n.update);if(t){r=r.clones;var o=r===null?null:r.map(kp)}else o=e.memoizedState,e.memoizedState=null;r=e;var s=e.child;Yl=0,i=su(r,s,i,i,a,o,!1),e.flags&4&&i&&(t||Nd(e,n.onUpdate))}else e.subtreeFlags&33554432&&cu(e,t);e=e.sibling}}var B=!1,V=!1,lu=!1,uu=!1,du=typeof WeakSet==`function`?WeakSet:Set,H=null,fu=!1,pu=!1,mu=!1,hu=!1;function gu(e,t,n){if(e=e.containerInfo,sp=gh,e=ai(e),oi(e)){if(`selectionStart`in e)var r={start:e.selectionStart,end:e.selectionEnd};else a:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===r&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r||={start:0,end:0}}else r=null;for(cp={focusedElem:e,selectionRange:r},gh=!1,n=(n&335544064)===n,H=t,t=n?9270:1024;H!==null;){if(e=H,n&&(r=e.deletions,r!==null))for(a=0;a<r.length;a++)n&&nu(r[a]);if(e.alternate===null&&e.flags&2)n&&Kl(e),_u(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&nu(r),_u(n);continue}if(r!==null&&r.memoizedState!==null){n&&Kl(e),_u(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,H=r):(n&&ru(e),_u(n))}}Gl=null}function _u(e){for(;H!==null;){var t=H,n=e,r=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(a&1024&&r!==null){n=void 0,a=r.memoizedProps,r=r.memoizedState;var o=t.stateNode;try{var s=kc(t.type,a);n=o.getSnapshotBeforeUpdate(s,r),o.__reactInternalSnapshotBeforeUpdate=n}catch(e){Z(t,t.return,e)}}break;case 3:if(a&1024){if(r=t.stateNode.containerInfo,n=r.nodeType,n===9)nm(r);else if(n===1)switch(r.nodeName){case`HEAD`:case`HTML`:case`BODY`:nm(r);break;default:r.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&r!==null&&(n=ki(r.memoizedProps,r.stateNode),a=t.memoizedProps,a=ji(a.default,a.update),a!==`none`&&Xl(r,n,a,r.memoizedState=[],!0));break;default:if(a&1024)throw Error(i(163))}if(r=t.sibling,r!==null){r.return=t.return,H=r;break}H=t.return}}function vu(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Lu(e,n),r&4&&El(5,n);break;case 1:if(Lu(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=kc(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}}r&64&&Ol(n),r&512&&Al(n,n.return);break;case 3:if(Lu(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Po(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&Ul(n);case 26:case 5:Lu(e,n),t===null&&r&4&&Ll(n),r&512&&Al(n,n.return);break;case 12:Lu(e,n);break;case 31:Lu(e,n),r&4&&Eu(e,n);break;case 13:Lu(e,n),r&4&&Du(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=_f.bind(null,n),cm(e,n))));break;case 22:if(r=n.memoizedState!==null||B,!r){var a=t!==null&&t.memoizedState!==null||V;t=B,i=V,B=r,(V=a)&&!i?(r=2,n.subtreeFlags&8772&&(r|=1),zu(e,n,r)):Lu(e,n),B=t,V=i}break;case 30:Lu(e,n),r&512&&Al(n,n.return);break;case 7:r&512&&Al(n,n.return);default:Lu(e,n)}}function yu(e,t){for(e=e.child;e!==null;)bu(e,t),e=e.sibling}function bu(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`}else{var i=e.stateNode,a=e.memoizedProps.style,o=a!=null&&a.hasOwnProperty(`display`)?a.display:null;i.style.display=o==null||typeof o==`boolean`?``:(``+o).trim()}}catch(t){Z(e,e.return,t)}xu(e,t);break;case 6:try{e.stateNode.nodeValue=t?``:e.memoizedProps,D=!0}catch(t){Z(e,e.return,t)}break;case 18:try{var s=e.stateNode;t?wp(s,!0):wp(e.stateNode,!1)}catch(t){Z(e,e.return,t)}break;case 22:case 23:e.memoizedState===null&&yu(e,t);break;default:yu(e,t)}}function xu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){a:{var n=e,r=t;switch(n.tag){case 4:bu(n,r);break a;case 22:n.memoizedState===null&&xu(n,r);break a;default:xu(n,r)}}e=e.sibling}}function Su(e){var t=e.alternate;t!==null&&(e.alternate=null,Su(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Wt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var U=null,Cu=!1;function wu(e,t,n){for(n=n.child;n!==null;)Tu(e,t,n),n=n.sibling}function Tu(e,t,n){if(lt&&typeof lt.onCommitFiberUnmount==`function`)try{lt.onCommitFiberUnmount(ct,n)}catch{}switch(n.tag){case 26:V||jl(n,t),wu(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!V&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:V||jl(n,t),Pl(n);var r=U,i=Cu;Sp(n.type)&&(U=n.stateNode,Cu=!1),wu(e,t,n),gm(n.stateNode,n.type,n.memoizedProps),U=r,Cu=i;break;case 5:V||jl(n,t),Pl(n);case 6:if(n.tag===6&&Pl(n),r=U,i=Cu,U=null,wu(e,t,n),U=r,Cu=i,U!==null){if(Cu)try{(U.nodeType===9?U.body:U.nodeName===`HTML`?U.ownerDocument.body:U).removeChild(n.stateNode),D=!0}catch(e){Z(n,t,e)}else try{U.removeChild(n.stateNode),D=!0}catch(e){Z(n,t,e)}}break;case 18:U!==null&&(Cu?(e=U,Cp(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Hh(e)):Cp(U,n.stateNode));break;case 4:r=U,i=Cu,U=n.stateNode.containerInfo,Cu=!0,wu(e,t,n),U=r,Cu=i;break;case 0:case 11:case 14:case 15:Dl(2,n,t),V||Dl(4,n,t),wu(e,t,n);break;case 1:V||(jl(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&kl(n,t,r)),wu(e,t,n);break;case 21:wu(e,t,n);break;case 22:V=(r=V)||n.memoizedState!==null,wu(e,t,n),V=r;break;case 30:jl(n,t),wu(e,t,n);break;case 7:V||jl(n,t),wu(e,t,n);break;default:wu(e,t,n)}}function Eu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hh(e)}catch(e){Z(t,t.return,e)}}}function Du(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hh(e)}catch(e){Z(t,t.return,e)}}function Ou(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new du),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new du),t;default:throw Error(i(435,e.tag))}}function ku(e,t){var n=Ou(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=vf.bind(null,e,t);t.then(r,r)}})}function Au(e,t,n){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var o=r[a],s=e,c=t,l=c;a:for(;l!==null;){switch(l.tag){case 27:if(Sp(l.type)){U=l.stateNode,Cu=!1;break a}break;case 5:U=l.stateNode,Cu=!1;break a;case 3:case 4:U=l.stateNode.containerInfo,Cu=!0;break a}l=l.return}if(U===null)throw Error(i(160));Tu(s,c,o),U=null,Cu=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Mu(t,e,n),t=t.sibling}var ju=null;function Mu(e,t,n){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(r=e.updateQueue,r=r===null?null:r.events,r!==null))for(var o=0;o<r.length;o++){var s=r[o];s.ref.impl=s.nextImpl}Au(t,e,n),Nu(e),a&4&&(Dl(3,e,e.return),El(3,e),Dl(5,e,e.return));break;case 1:Au(t,e,n),Nu(e),a&512&&(V||r===null||jl(r,r.return)),a&64&&B&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(o=ju,Au(t,e,n),Nu(e),a&512&&(V||r===null||jl(r,r.return)),a&4){if(a=r===null?null:r.memoizedState,n=e.memoizedState,r===null){if(n===null){if(e.stateNode===null){if(B)e.stateNode=fp(e.type,e.memoizedProps,t.containerInfo,e);else{a:{t=e.type,n=e.memoizedProps,a=o.ownerDocument||o;b:switch(t){case`title`:r=a.getElementsByTagName(`title`)[0],(!r||r[Ht]||r[Ft]||r.namespaceURI===`http://www.w3.org/2000/svg`||r.hasAttribute(`itemprop`))&&(r=a.createElement(t),a.head.insertBefore(r,a.querySelector(`head > title`))),np(r,t,n),r[Ft]=e,E(r),t=r;break a;case`link`:if(o=Gm(`link`,`href`,a).get(t+(n.href||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&r.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&r.getAttribute(`title`)===(n.title==null?null:n.title)&&r.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;case`meta`:if(o=Gm(`meta`,`content`,a).get(t+(n.content||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`content`)===(n.content==null?null:``+n.content)&&r.getAttribute(`name`)===(n.name==null?null:n.name)&&r.getAttribute(`property`)===(n.property==null?null:n.property)&&r.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;default:throw Error(i(468,t))}r[Ft]=e,E(r),t=r}e.stateNode=t}}else B||Km(o,e.type,e.stateNode)}else e.stateNode=Bm(o,n,e.memoizedProps)}else a===n?n===null&&e.stateNode!==null&&Rl(e,e.memoizedProps,r.memoizedProps):(a===null?(t=r.stateNode,t===null||V||t.parentNode.removeChild(t)):a.count--,n===null?B||Km(o,e.type,e.stateNode):Bm(o,n,e.memoizedProps))}break;case 27:Au(t,e,n),Nu(e),a&512&&(V||r===null||jl(r,r.return)),r!==null&&a&4&&Rl(e,e.memoizedProps,r.memoizedProps);break;case 5:if(o=lu,lu=!1,Au(t,e,n),lu=o,Nu(e),a&512&&(V||r===null||jl(r,r.return)),e.flags&32){t=e.stateNode;try{Sn(t,``),D=!0}catch(t){Z(e,e.return,t)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,Rl(e,t,r===null?t:r.memoizedProps)),a&1024&&(uu=!0);break;case 6:if(Au(t,e,n),Nu(e),a&4){if(e.stateNode===null)throw Error(i(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,D=!0}catch(t){Z(e,e.return,t)}}break;case 3:if(D=!1,Wm=null,o=ju,ju=bm(t.containerInfo),Au(t,e,n),ju=o,Nu(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Hh(t.containerInfo)}catch(t){Z(e,e.return,t)}uu&&(uu=!1,Pu(e)),D=!1;break;case 4:a=lu,lu=B,r=an(),o=ju,ju=bm(e.stateNode.containerInfo),Au(t,e,n),Nu(e),ju=o,D&&pu&&(mu=!0),D=r,lu=a;break;case 12:Au(t,e,n),Nu(e);break;case 31:Au(t,e,n),Nu(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ku(e,t)));break;case 13:Au(t,e,n),Nu(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(hd=$e()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ku(e,t)));break;case 22:o=e.memoizedState!==null,s=r!==null&&r.memoizedState!==null;var c=B,l=V,u=lu;B=c||o,lu=u||o,V=l||s,Au(t,e,n),V=l,lu=u,B=c,Nu(e),a&8192&&(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,!o||r===null||s||B||V||(t=s||V,n=B,r=V,B=o||B,V=t,Ru(e,2),B=n,V=r),!o&&lu||yu(e,o)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,ku(e,n))));break;case 19:Au(t,e,n),Nu(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ku(e,t)));break;case 30:a&512&&(V||r===null||jl(r,r.return)),a=an(),o=pu,s=(n&335544064)===n,c=e.memoizedProps,pu=s&&ji(c.default,c.update)!==`none`,Au(t,e,n),Nu(e),s&&r!==null&&D&&(e.flags|=4),pu=o,D=a;break;case 21:break;case 7:a&512&&(V||r===null||jl(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Au(t,e,n),Nu(e)}}function Nu(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(zl(r)){n=r;break}r=r.return}r=null;for(var a=e.return;a!==null;){if(Il(a)){var o=a.stateNode;r===null?r=[o]:r.push(o)}if(Fl(a))break;a=a.return}var s=r;if(n==null)throw Error(i(160));switch(n.tag){case 27:var c=n.stateNode;Hl(e,Bl(e),c,s);break;case 5:var l=n.stateNode;n.flags&32&&(Sn(l,``),n.flags&=-33),Hl(e,Bl(e),l,s);break;case 3:case 4:var u=n.stateNode.containerInfo;Vl(e,Bl(e),u,s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Pu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Pu(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,gh=!0,t.reset(),gh=!1),e=e.sibling}}function Fu(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Iu(t,e),t=t.sibling;else cu(t,!1)}function Iu(e,t){var n=e.alternate;if(n===null)eu(e,!1);else switch(e.tag){case 3:if(hu=fu=!1,Jl(),Fu(t,e),!fu&&!mu){if(e=ql,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var i=e[r+1];Ep(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(`+i+`)`})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===``&&(e.style.viewTransitionName=`none`,e.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(root)`}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition`})),hu=!0}ql=null;break;case 5:Fu(t,e);break;case 4:r=fu,fu=!1,Fu(t,e),fu&&(mu=!0),fu=r;break;case 22:e.memoizedState===null&&(n.memoizedState===null?Fu(t,e):eu(e,!1));break;case 30:r=fu,i=Jl(),fu=!1,Fu(t,e),fu&&(e.flags|=4);var a=e.memoizedProps,o=e.stateNode;t=ki(a,o),o=ki(n.memoizedProps,o);var s=ji(a.default,a.update);s===`none`?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Yl=0,t=su(e,n,t,o,s,a,!0),Yl!==(a===null?0:a.length)&&(e.flags|=32)),e.flags&4&&t?(Nd(e,e.memoizedProps.onUpdate),ql=i):i!==null&&(i.push.apply(i,ql),ql=i),fu=e.flags&32?!0:r;break;default:Fu(t,e)}}function Lu(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)vu(e,t.alternate,t),t=t.sibling}function Ru(e,t){for(e=e.child;e!==null;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:Dl(4,n,n.return),Ru(n,r);break;case 1:jl(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount==`function`&&kl(n,n.return,i),Ru(n,r);break;case 27:r&2&&gm(n.stateNode,n.type,n.memoizedProps);case 5:jl(n,n.return),n.tag!==5&&n.tag!==27||Pl(n),Ru(n,r);break;case 6:Pl(n);break;case 26:jl(n,n.return),i=n.stateNode,n.memoizedState!==null||i===null||V||i.parentNode.removeChild(i),Ru(n,r);break;case 22:n.memoizedState===null&&Ru(n,r);break;case 30:jl(n,n.return),Ru(n,r);break;case 7:jl(n,n.return);default:Ru(n,r)}e=e.sibling}}function zu(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags,s=!!(n&1);switch(a.tag){case 0:case 11:case 15:zu(i,a,n),El(4,a);break;case 1:if(zu(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var c=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)No(l[i],c)}catch(e){Z(r,r.return,e)}}s&&o&64&&Ol(a),Al(a,a.return);break;case 27:n&2&&Ul(a);case 5:a.tag!==5&&a.tag!==27||Nl(a),zu(i,a,n),s&&r===null&&o&4&&Ll(a),Al(a,a.return);break;case 6:Nl(a);break;case 26:c=a.stateNode,a.memoizedState!==null||c===null||B||Km(bm(c.ownerDocument),a.type,c),zu(i,a,n),s&&r===null&&o&4&&Ll(a),Al(a,a.return);break;case 12:zu(i,a,n);break;case 31:zu(i,a,n),s&&o&4&&Eu(i,a);break;case 13:zu(i,a,n),s&&o&4&&Du(i,a);break;case 22:a.memoizedState===null&&zu(i,a,n),Al(a,a.return);break;case 30:zu(i,a,n),Al(a,a.return);break;case 7:Al(a,a.return);default:zu(i,a,n)}t=t.sibling}}function Bu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ha(n))}function Vu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ha(e))}function Hu(e,t,n,r){var i=(n&335544064)===n;if(t.subtreeFlags&(i?10262:10256))for(t=t.child;t!==null;)Uu(e,t,n,r),t=t.sibling;else i&&ou(t)}function Uu(e,t,n,r){var i=(n&335544064)===n;i&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&au(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:Hu(e,t,n,r),a&2048&&El(9,t);break;case 1:Hu(e,t,n,r);break;case 3:Hu(e,t,n,r),i&&hu&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,e.style.viewTransitionName===`root`&&(e.style.viewTransitionName=``),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===`none`&&(e.style.viewTransitionName=``)),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Ha(a)));break;case 12:if(a&2048){Hu(e,t,n,r),a=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c==`function`&&c(s,t.alternate===null?`mount`:`update`,a.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Hu(e,t,n,r);break;case 31:Hu(e,t,n,r);break;case 13:Hu(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState===null?(i&&s!==null&&s.memoizedState!==null&&au(t),o._visibility&2?Hu(e,t,n,r):(o._visibility|=2,Wu(e,t,n,r,!!(t.subtreeFlags&10256)||!1))):(i&&s!==null&&s.memoizedState===null&&au(s),o._visibility&2?Hu(e,t,n,r):Gu(e,t)),a&2048&&Bu(s,t);break;case 24:Hu(e,t,n,r),a&2048&&Vu(t.alternate,t);break;case 30:i&&(a=t.alternate,a!==null&&(Ql(a.child,!0),Ql(t.child,!0))),Hu(e,t,n,r);break;default:Hu(e,t,n,r)}}function Wu(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Wu(a,o,s,c,i),El(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Wu(a,o,s,c,i)):u._visibility&2?Wu(a,o,s,c,i):Gu(a,o),i&&l&2048&&Bu(o.alternate,o);break;case 24:Wu(a,o,s,c,i),i&&l&2048&&Vu(o.alternate,o);break;default:Wu(a,o,s,c,i)}t=t.sibling}}function Gu(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Gu(n,r),i&2048&&Bu(r.alternate,r);break;case 24:Gu(n,r),i&2048&&Vu(r.alternate,r);break;default:Gu(n,r)}t=t.sibling}}var Ku=8192;function qu(e,t,n){if(e.subtreeFlags&Ku)for(e=e.child;e!==null;)Ju(e,t,n),e=e.sibling}function Ju(e,t,n){switch(e.tag){case 26:qu(e,t,n),e.flags&Ku&&(e.memoizedState===null?(e=e.stateNode,(t&335544128)===t&&Zm(n,e)):Qm(n,ju,e.memoizedState,e.memoizedProps));break;case 5:qu(e,t,n),e.flags&Ku&&(e=e.stateNode,(t&335544128)===t&&Zm(n,e));break;case 3:case 4:var r=ju;ju=bm(e.stateNode.containerInfo),qu(e,t,n),ju=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ku,Ku=16777216,qu(e,t,n),Ku=r):qu(e,t,n));break;case 30:if((e.flags&Ku)!==0&&(r=e.memoizedProps.name,r!=null&&r!==`auto`)){var i=e.stateNode;i.paired=null,Gl===null&&(Gl=new Map),Gl.set(r,i)}qu(e,t,n);break;default:qu(e,t,n)}}function Yu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Xu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];H=r,$u(r,e)}Yu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Zu(e),e=e.sibling}function Zu(e){switch(e.tag){case 0:case 11:case 15:Xu(e),e.flags&2048&&Dl(9,e,e.return);break;case 3:Xu(e);break;case 12:Xu(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Qu(e)):Xu(e);break;default:Xu(e)}}function Qu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];H=r,$u(r,e)}Yu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Dl(8,t,t.return),Qu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Qu(t));break;default:Qu(t)}e=e.sibling}}function $u(e,t){for(;H!==null;){var n=H;switch(n.tag){case 0:case 11:case 15:Dl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ha(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,H=r;else a:for(n=e;H!==null;){r=H;var i=r.sibling,a=r.return;if(Su(r),r===n){H=null;break a}if(i!==null){i.return=a,H=i;break a}H=a}}}var ed={getCacheForType:function(e){var t=Fa(j),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Fa(j).controller.signal}},td=typeof WeakMap==`function`?WeakMap:Map,W=0,G=null,K=null,q=0,J=0,nd=null,rd=!1,id=!1,ad=!1,od=0,Y=0,sd=0,cd=0,ld=0,ud=0,dd=0,fd=null,pd=null,md=!1,hd=0,gd=0,_d=1/0,vd=null,yd=null,X=0,bd=null,xd=null,Sd=0,Cd=0,wd=null,Td=null,Ed=null,Dd=null,Od=null,kd=0,Ad=null;function jd(){return W&2&&q!==0?q&-q:C.T===null?Mt():Pf()}function Md(){if(ud===0){if(!(q&536870912)||A){var e=gt;gt<<=1,!(gt&3932160)&&(gt=262144),ud=e}else ud=536870912}return e=Bo.current,e!==null&&(e.flags|=32),ud}function Nd(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Pp(ki(e.memoizedProps,n))),Dd===null&&(Dd=[]),Dd.push(t.bind(null,r))}}function Pd(e,t,n){(e===G&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Vd(e,0),Rd(e,q,ud,!1)),Tt(e,n),(!(W&2)||e!==G)&&(e===G&&(!(W&2)&&(cd|=n),Y===4&&Rd(e,q,ud,!1)),Ef(e))}function Fd(e,t,n){if(W&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||bt(e,t),a=r?Yd(e,t):qd(e,t,!0),o=r;do{if(a===0){id&&!r&&Rd(e,t,0,!1);break}if(n=e.current.alternate,o&&!Ld(n)){a=qd(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=fd;var l=c.current.memoizedState.isDehydrated;if(l&&(Vd(c,s).flags|=256),s=qd(c,s,!1),s!==2&&s!==6){if(ad&&!l){c.errorRecoveryDisabledLanes|=o,cd|=o,a=4;break a}o=pd,pd=a,o!==null&&(pd===null?pd=o:pd.push.apply(pd,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Vd(e,0),Rd(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Rd(r,t,ud,!rd);break a;case 2:pd=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=hd+300-$e(),10<a)){if(Rd(r,t,ud,!rd),yt(r,0,!0)!==0)break a;Sd=t,r.timeoutHandle=gp(Id.bind(null,r,n,pd,vd,md,t,ud,cd,dd,rd,o,`Throttled`,-0,0),a);break a}Id(r,n,pd,vd,md,t,ud,cd,dd,rd,o,null,-0,0)}break}while(1);Ef(e)}function Id(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=-1;var m=t.subtreeFlags,h=(a&335544064)===a;if(d=null,(h||m&8192||(m&16785408)==16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:An},Gl=null,Ju(t,a,d),h&&(m=d,h=e.containerInfo,h=(h.nodeType===9?h:h.ownerDocument).__reactViewTransition,h!=null&&(m.count++,m.waitingForViewTransition=!0,m=nh.bind(m),h.finished.then(m,m))),m=(a&62914560)===a?hd-$e():(a&4194048)===a?gd-$e():0,m=eh(d,m),m!==null)){Sd=a,e.cancelPendingCommit=m(nf.bind(null,e,t,a,n,r,i,o,s,c,l,u,d,null,f,p)),Rd(e,a,o,!l);return}nf(e,t,a,n,r,i,o,s,c,l,u,d)}function Ld(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!$r(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rd(e,t,n,r){t=xt(e,t),t&=~ld,t&=~cd,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-dt(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&Dt(e,n,t)}function zd(){return W&6?!0:(Df(0,!1),!1)}function Bd(){if(K!==null){if(J===0)var e=K.return;else e=K,Da=Ea=null,fs(e),ho=null,go=0,e=K;for(;e!==null;)Tl(e.alternate,e),e=e.return;K=null}}function Vd(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,_p(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Sd=0,Bd(),G=e,K=n=Ki(e.current,null),q=t,J=0,nd=null,rd=!1,id=bt(e,t),ad=!1,dd=ud=ld=cd=sd=Y=0,pd=fd=null,md=!1,od=xt(e,t),Ii(),n}function Hd(e,t){M=null,C.H=xc,t===io||t===oo?(t=po(),J=3):t===ao?(t=po(),J=4):J=t===zc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,nd=t,K===null&&(Y=1,Nc(e,ea(t,e.current)))}function Ud(){var e=Bo.current;return e===null?!0:(q&4194048)===q?Vo===null:(q&62914560)===q||q&536870912?e===Vo:!1}function Wd(){var e=C.H;return C.H=xc,e===null?xc:e}function Gd(){var e=C.A;return C.A=ed,e}function Kd(){Y=4,rd||(q&4194048)!==q&&Bo.current!==null||(id=!0),!(sd&134217727)&&!(cd&134217727)||G===null||Rd(G,q,ud,!1)}function qd(e,t,n){var r=W;W|=2;var i=Wd(),a=Gd();(G!==e||q!==t)&&(vd=null,Vd(e,t)),t=!1;var o=Y;a:do try{if(J!==0&&K!==null){var s=K,c=nd;switch(J){case 8:Bd(),o=6;break a;case 3:case 2:case 9:case 6:Bo.current===null&&(t=!0);var l=J;if(J=0,nd=null,$d(e,s,c,l),n&&id){o=0;break a}break;default:l=J,J=0,nd=null,$d(e,s,c,l)}}Jd(),o=Y;break}catch(t){Hd(e,t)}while(1);return t&&e.shellSuspendCounter++,Da=Ea=null,W=r,C.H=i,C.A=a,K===null&&(G=null,q=0,Ii()),o}function Jd(){for(;K!==null;)Zd(K)}function Yd(e,t){var n=W;W|=2;var r=Wd(),a=Gd();G!==e||q!==t?(vd=null,_d=$e()+500,Vd(e,t)):id=bt(e,t);a:do try{if(J!==0&&K!==null){t=K;var o=nd;b:switch(J){case 1:J=0,nd=null,$d(e,t,o,1);break;case 2:case 9:if(co(o)){J=0,nd=null,Qd(t);break}t=function(){J!==2&&J!==9||G!==e||(J=7),Ef(e)},o.then(t,t);break a;case 3:J=7;break a;case 4:J=5;break a;case 7:co(o)?(J=0,nd=null,Qd(t)):(J=0,nd=null,$d(e,t,o,7));break;case 5:var s=null;switch(K.tag){case 26:s=K.memoizedState;case 5:case 27:var c=K;if(s?Ym(s):c.stateNode.complete){J=0,nd=null;var l=c.sibling;if(l!==null)K=l;else{var u=c.return;u===null?K=null:(K=u,ef(u))}break b}}J=0,nd=null,$d(e,t,o,5);break;case 6:J=0,nd=null,$d(e,t,o,6);break;case 8:Bd(),Y=6;break a;default:throw Error(i(462))}}Xd();break}catch(t){Hd(e,t)}while(1);return Da=Ea=null,C.H=r,C.A=a,W=n,K===null?(G=null,q=0,Ii(),Y):0}function Xd(){for(;K!==null&&!Ze();)Zd(K)}function Zd(e){var t=_l(e.alternate,e,od);e.memoizedProps=e.pendingProps,t===null?ef(e):K=t}function Qd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Zc(n,t,t.pendingProps,t.type,void 0,q);break;case 11:t=Zc(n,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:fs(t);var r=t;r===O&&(A?(ba(r),r.tag===5&&r.stateNode!=null&&(k=r.stateNode)):(ba(r),A=!0));default:Tl(n,t),t=K=qi(t,od),t=_l(n,t,od)}e.memoizedProps=e.pendingProps,t===null?ef(e):K=t}function $d(e,t,n,r){Da=Ea=null,fs(t),ho=null,go=0;var i=t.return;try{if(Rc(e,i,t,n,q)){Y=1,Nc(e,ea(n,e.current)),K=null;return}}catch(t){if(i!==null)throw K=i,t;Y=1,Nc(e,ea(n,e.current)),K=null;return}t.flags&32768?(A||r===1?e=!0:id||q&536870912?e=!1:(rd=e=!0,(r===2||r===9||r===3||r===6)&&(r=Bo.current,r!==null&&r.tag===13&&(r.flags|=16384))),tf(t,e)):ef(t)}function ef(e){var t=e;do{if(t.flags&32768){tf(t,rd);return}e=t.return;var n=Cl(t.alternate,t,od);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Y===0&&(Y=5)}function tf(e,t){do{var n=wl(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);Y=6,K=null}function nf(e,t,n,r,a,o,s,c,l,u,d,f){e.cancelPendingCommit=null;do df();while(X!==0);if(W&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));e===G&&(K=G=null,q=0),xd=t,bd=e,Sd=n,wd=a,Td=r,rf(e,t,n,s,c,l,f)}}function rf(e,t,n,r,i,a,o){var s=t.lanes|t.childLanes;if(Cd=s,s|=Fi,Et(e,n,s,r,i,a),Dd=null,(n&335544064)===n?(Od=Ga(e),r=10262):(Od=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,yf(rt,function(){return ff(),null})):(e.callbackNode=null,e.callbackPriority=0),Wl=!1,r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=C.T,C.T=null,i=w.p,w.p=2,a=W,W|=4;try{gu(e,t,n)}finally{W=a,w.p=i,C.T=r}}X=1,Wl?Ed=Mp(o,e.containerInfo,Od,sf,cf,of,lf,ff,af,null,null):(sf(),cf(),lf())}function af(e){if(X!==0){var t=bd.onRecoverableError;t(e,{componentStack:null})}}function of(){X===3&&(X=0,Iu(xd,bd),X=4)}function sf(){if(X===1){X=0;var e=bd,t=xd,n=Sd,r=!!(t.flags&13878);if(t.subtreeFlags&13878||r){r=C.T,C.T=null;var i=w.p;w.p=2;var a=W;W|=4;try{pu=mu=!1,Mu(t,e,n),n=cp;var o=ai(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&ii(s.ownerDocument.documentElement,s)){if(c!==null&&oi(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=ri(s,h),v=ri(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}gh=!!sp,cp=sp=null}finally{W=a,w.p=i,C.T=r}}e.current=t,X=2}}function cf(){if(X===2){X=0;var e=bd,t=xd,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=C.T,C.T=null;var r=w.p;w.p=2;var i=W;W|=4;try{vu(e,t.alternate,t)}finally{W=i,w.p=r,C.T=n}}X=3}}function lf(){if(X===4||X===3){X=0;var e=Ed;Ed=null,Qe();var t=bd,n=xd,r=Sd,i=Td,a=(r&335544064)===r?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?X=5:(X=0,xd=bd=null,uf(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(yd=null),jt(r),n=n.stateNode,lt&&typeof lt.onCommitFiberRoot==`function`)try{lt.onCommitFiberRoot(ct,n,void 0,(n.current.flags&128)==128)}catch{}if(i!==null){n=C.T,a=w.p,w.p=2,C.T=null;try{for(var o=t.onRecoverableError,s=0;s<i.length;s++){var c=i[s];o(c.value,{componentStack:c.stack})}}finally{C.T=n,w.p=a}}if(i=Dd,o=Od,Od=null,i!==null&&(Dd=null,o===null&&(o=[]),e!==null))for(c=0;c<i.length;c++)n=(0,i[c])(o),n!==void 0&&e.finished.finally(n);Sd&3&&df(),Ef(t),a=t.pendingLanes,r&261930&&a&42?t===Ad?kd++:(kd=0,Ad=t):(kd=0,Ad=null),Df(0,!1)}}function uf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ha(t)))}function df(){return Ed!==null&&(Ed.skipTransition(),Ed=null),sf(),cf(),lf(),ff()}function ff(){if(X!==5)return!1;var e=bd,t=Cd;Cd=0;var n=jt(Sd),r=C.T,a=w.p;try{w.p=32>n?32:n,C.T=null,n=wd,wd=null;var o=bd,s=Sd;if(X=0,xd=bd=null,Sd=0,W&6)throw Error(i(331));var c=W;if(W|=4,Zu(o.current),Uu(o,o.current,s,n),W=c,Df(0,!1),lt&&typeof lt.onPostCommitFiberRoot==`function`)try{lt.onPostCommitFiberRoot(ct,o)}catch{}return!0}finally{w.p=a,C.T=r,uf(e,t)}}function pf(e,t,n){t=ea(n,t),t=Fc(e.stateNode,t,2),e=Do(e,t,2),e!==null&&(Tt(e,2),Ef(e))}function Z(e,t,n){if(e.tag===3)pf(e,e,n);else for(;t!==null;){if(t.tag===3){pf(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(yd===null||!yd.has(r))){e=ea(n,e),n=Ic(2),r=Do(t,n,2),r!==null&&(Lc(n,r,t,e),Tt(r,2),Ef(r));break}}t=t.return}}function mf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new td;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(ad=!0,i.add(n),e=hf.bind(null,e,t,n),t.then(e,e))}function hf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,G===e&&(q&n)===n&&(Y===4||Y===3&&(q&62914560)===q&&300>$e()-hd?W&2?ld|=n:Vd(e,0):ld|=n,dd===q&&(dd=0)),Ef(e)}function gf(e,t){t===0&&(t=Ct()),e=zi(e,t),e!==null&&(Tt(e,t),Ef(e))}function _f(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gf(e,n)}function vf(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),gf(e,n)}function yf(e,t){return Ye(e,t)}var bf=null,xf=null,Sf=!1,Cf=!1,wf=!1,Tf=0;function Ef(e){e!==xf&&e.next===null&&(xf===null?bf=xf=e:xf=xf.next=e),Cf=!0,Sf||(Sf=!0,Nf())}function Df(e,t){if(!wf&&Cf){wf=!0;do for(var n=!1,r=bf;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-dt(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Mf(r,a))}else a=q,a=yt(r,r===G?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||bt(r,a)||(n=!0,Mf(r,a))}r=r.next}while(n);wf=!1}}function Of(){kf()}function kf(){Cf=Sf=!1;var e=0;Tf!==0&&hp()&&(e=Tf);for(var t=$e(),n=null,r=bf;r!==null;){var i=r.next,a=Af(r,t);a===0?(r.next=null,n===null?bf=i:n.next=i,i===null&&(xf=n)):(n=r,(e!==0||a&3)&&(Cf=!0)),r=i}X!==0&&X!==5||Df(e,!1),Tf!==0&&(Tf=0)}function Af(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-dt(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=St(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=G,n=q,n=yt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Xe(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||bt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Xe(r),jt(n)){case 2:case 8:n=nt;break;case 32:n=rt;break;case 268435456:n=at;break;default:n=rt}return r=jf.bind(null,e),n=Ye(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Xe(r),e.callbackPriority=2,e.callbackNode=null,2}function jf(e,t){if(X!==0&&X!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(df()&&e.callbackNode!==n)return null;var r=q;return r=yt(e,e===G?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Fd(e,r,t),Af(e,$e()),e.callbackNode!=null&&e.callbackNode===n?jf.bind(null,e):null)}function Mf(e,t){if(df())return null;Fd(e,t,!0)}function Nf(){bp(function(){W&6?Ye(tt,Of):kf()})}function Pf(){if(Tf===0){var e=Ja;e===0&&(e=ht,ht<<=1,!(ht&261888)&&(ht=256)),Tf=e}return Tf}function Ff(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:kn(e)}function If(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Ff((i[It]||null).action),o=r.submitter;o&&(t=(t=o[It]||null)?Ff(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Zn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Tf!==0){var e=new FormData(i,o);sc(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=new FormData(i,o),sc(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var Lf=0;Lf<Ei.length;Lf++){var Rf=Ei[Lf];Di(Rf.toLowerCase(),`on`+(Rf[0].toUpperCase()+Rf.slice(1)))}Di(vi,`onAnimationEnd`),Di(yi,`onAnimationIteration`),Di(bi,`onAnimationStart`),Di(`dblclick`,`onDoubleClick`),Di(`focusin`,`onFocus`),Di(`focusout`,`onBlur`),Di(xi,`onTransitionRun`),Di(Si,`onTransitionStart`),Di(Ci,`onTransitionCancel`),Di(wi,`onTransitionEnd`),$t(`onMouseEnter`,[`mouseout`,`mouseover`]),$t(`onMouseLeave`,[`mouseout`,`mouseover`]),$t(`onPointerEnter`,[`pointerout`,`pointerover`]),$t(`onPointerLeave`,[`pointerout`,`pointerover`]),Qt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Qt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Qt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Qt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Qt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Qt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var zf=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Bf=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(zf));function Vf(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Mi(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Mi(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[Rt];n===void 0&&(n=t[Rt]=new Set);var r=e+`__bubble`;n.has(r)||(Gf(t,e,2,!1),n.add(r))}function Hf(e,t,n){var r=0;t&&(r|=4),Gf(n,e,r,t)}var Uf=`_reactListening`+Math.random().toString(36).slice(2);function Wf(e){if(!e[Uf]){e[Uf]=!0,Xt.forEach(function(t){t!==`selectionchange`&&(Bf.has(t)||Hf(t,!1,e),Hf(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Uf]||(t[Uf]=!0,Hf(`selectionchange`,!1,t))}}function Gf(e,t,n,r){switch(Ch(t)){case 2:var i=_h;break;case 8:i=vh;break;default:i=yh}n=i.bind(null,t,n,e),i=void 0,!Bn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Kf(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Gt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}Ln(function(){var r=a,i=Mn(n),s=[];a:{var c=Ti.get(e);if(c!==void 0){var l=Zn,u=e;switch(e){case`keypress`:if(Kn(n)===0)break a;case`keydown`:case`keyup`:l=hr;break;case`focusin`:u=`focus`,l=or;break;case`focusout`:u=`blur`,l=or;break;case`beforeblur`:case`afterblur`:l=or;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=ir;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=ar;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=vr;break;case vi:case yi:case bi:l=sr;break;case wi:l=yr;break;case`scroll`:case`scrollend`:l=$n;break;case`wheel`:l=br;break;case`copy`:case`cut`:case`paste`:l=cr;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=gr;break;case`submit`:l=_r;break;case`toggle`:case`beforetoggle`:l=xr}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=Rn(m,p),g!=null&&d.push(qf(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(l=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,l&&n!==jn&&(u=n.relatedTarget||n.fromElement)&&(Gt(u)||u[Lt]))break a;(c||l)&&(u=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Gt(l):null,l!==null&&(f=o(l),d=l.tag,l!==f||d!==5&&d!==27&&d!==6)&&(l=null)):(c=null,l=r),c!==l&&(d=ir,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=gr,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?u:qt(c),h=l==null?u:qt(l),u=new d(g,m+`leave`,c,n,i),u.target=f,u.relatedTarget=h,g=null,Gt(i)===r&&(d=new d(p,m+`enter`,l,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,d=c&&l?ie(c,l,Yf):null,c!==null&&Xf(s,u,c,d,!1),l!==null&&f!==null&&Xf(s,f,l,d,!0)))}a:{if(c=r?qt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var _=Vr;else if(Fr(c)){if(Hr)_=Zr;else{_=Yr;var v=Jr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&En(r.elementType)&&(_=Vr):_=Xr;if(_&&=_(e,r)){Ir(s,_,n,i);break a}v&&v(e,c,r)}switch(v=r?qt(r):window,e){case`focusin`:(Fr(v)||v.contentEditable===`true`)&&(ci=v,li=r,ui=null);break;case`focusout`:ui=li=ci=null;break;case`mousedown`:di=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:di=!1,fi(s,n,i);break;case`selectionchange`:if(si)break;case`keydown`:case`keyup`:fi(s,n,i)}var y;if(Cr)b:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break b;case`compositionend`:b=`onCompositionEnd`;break b;case`compositionupdate`:b=`onCompositionUpdate`;break b}b=void 0}else jr?kr(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(b=`onCompositionStart`);b&&(Er&&n.locale!==`ko`&&(jr||b!==`onCompositionStart`?b===`onCompositionEnd`&&jr&&(y=Gn()):(Hn=i,Un=`value`in Hn?Hn.value:Hn.textContent,jr=!0)),v=Jf(r,b),0<v.length&&(b=new lr(b,e,null,n,i),s.push({event:b,listeners:v}),y?b.data=y:(y=Ar(n),y!==null&&(b.data=y)))),(y=Tr?Mr(e,n):Nr(e,n))&&(b=Jf(r,`onBeforeInput`),0<b.length&&(v=new lr(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:v,listeners:b}),v.data=y)),If(s,e,r,n,i)}Vf(s,t)})}function qf(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Jf(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=Rn(e,n),i!=null&&r.unshift(qf(e,i,a)),i=Rn(e,t),i!=null&&r.push(qf(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Yf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xf(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=Rn(n,a),l!=null&&o.unshift(qf(n,l,c))):i||(l=Rn(n,a),l!=null&&o.push(qf(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Zf=/\r\n?/g,Qf=/\u0000|\uFFFD/g;function $f(e){return(typeof e==`string`?e:``+e).replace(Zf,`
`).replace(Qf,``)}function ep(e,t){return t=$f(t),$f(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:if(typeof r==`string`)t===`body`||t===`textarea`&&r===``||Sn(e,r);else if(typeof r==`number`||typeof r==`bigint`)t!==`body`&&Sn(e,``+r);else return;break;case`className`:sn(e,`class`,r);break;case`tabIndex`:sn(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:sn(e,n,r);break;case`style`:Tn(e,r,o);return;case`data`:if(t!==`object`){sn(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=kn(r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=kn(r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=An);return;case`onScroll`:r!=null&&Q(`scroll`,e);return;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=kn(r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),on(e,`popover`,r);break;case`xlinkActuate`:cn(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:cn(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:cn(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:cn(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:cn(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:cn(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:cn(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:cn(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:cn(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:on(e,`is`,r);break;case`innerText`:case`textContent`:return;default:if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)n=Dn.get(n)||n,on(e,n,r);else return}D=!0}function tp(e,t,n,r,a,o){switch(n){case`style`:Tn(e,r,o);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`children`:if(typeof r==`string`)Sn(e,r);else if(typeof r==`number`||typeof r==`bigint`)Sn(e,``+r);else return;break;case`onScroll`:r!=null&&Q(`scroll`,e);return;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);return;case`onClick`:r!=null&&(e.onclick=An);return;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:return;case`innerText`:case`textContent`:return;default:if(!Zt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),o=n.slice(2,a?n.length-7:void 0),t=e[It]||null,t=t==null?null:t[n],typeof t==`function`&&e.removeEventListener(o,t,a),typeof r==`function`)){typeof t!=`function`&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(o,r,a);break a}D=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,``):on(e,n,r)}return}D=!0}function np(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}_n(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&yn(e,!!r,n,!0):yn(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}xn(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<zf.length;r++)Q(zf[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(En(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&tp(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}var rp={};function ip(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:m!==f&&(D=!0),o=m;break;case`name`:m!==f&&(D=!0),a=m;break;case`checked`:m!==f&&(D=!0),u=m;break;case`defaultChecked`:m!==f&&(D=!0),d=m;break;case`value`:m!==f&&(D=!0),s=m;break;case`defaultValue`:m!==f&&(D=!0),c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}gn(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:o!==l&&(D=!0),p=o;break;case`defaultValue`:o!==l&&(D=!0),c=o;break;case`multiple`:o!==l&&(D=!0),s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?yn(e,!!n,n?[]:``,!1):yn(e,!!n,t,!0)):yn(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:a!==o&&(D=!0),p=a;break;case`defaultValue`:a!==o&&(D=!0),m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}bn(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:p!==m&&(D=!0),e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(En(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&tp(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||tp(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function ap(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function op(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&ap(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&ap(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var sp=null,cp=null;function lp(e){return e.nodeType===9?e:e.ownerDocument}function up(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function dp(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function fp(e,t,n,r){return n=lp(n).createElement(e),n[Ft]=r,n[It]=t,np(n,e,t),E(n),n}function pp(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mp=null;function hp(){var e=window.event;return e&&e.type===`popstate`?e!==mp&&(mp=e,!0):(mp=null,!1)}var gp=typeof setTimeout==`function`?setTimeout:void 0,_p=typeof clearTimeout==`function`?clearTimeout:void 0,vp=typeof Promise==`function`?Promise:void 0,yp=typeof requestAnimationFrame==`function`?requestAnimationFrame:gp,bp=typeof queueMicrotask==`function`?queueMicrotask:vp===void 0?gp:function(e){return vp.resolve(null).then(e).catch(xp)};function xp(e){setTimeout(function(){throw e})}function Sp(e){return e===`head`}function Cp(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Hh(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)_m(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,_m(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Ht]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&_m(e.ownerDocument.body)}n=i}while(n);Hh(t)}function wp(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function Tp(e,t,n){if(t=CSS.escape(t)===t?t:`r-`+btoa(t).replace(/=/g,``),e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display===`inline`){if(t=e.getClientRects(),t.length===1)var r=1;else for(var i=r=0;i<t.length;i++){var a=t[i];0<a.width&&0<a.height&&r++}r===1&&(e=e.style,e.display=t.length===1?`inline-block`:`block`,e.marginTop=`-`+n.paddingTop,e.marginBottom=`-`+n.paddingBottom)}}function Ep(e,t){e=e.style,t=t.style;var n=t==null?null:t.hasOwnProperty(`viewTransitionName`)?t.viewTransitionName:t.hasOwnProperty(`view-transition-name`)?t[`view-transition-name`]:null;e.viewTransitionName=n==null||typeof n==`boolean`?``:(``+n).trim(),n=t==null?null:t.hasOwnProperty(`viewTransitionClass`)?t.viewTransitionClass:t.hasOwnProperty(`view-transition-class`)?t[`view-transition-class`]:null,e.viewTransitionClass=n==null||typeof n==`boolean`?``:(``+n).trim(),e.display===`inline-block`&&(t==null?e.display=e.margin=``:(n=t.display,e.display=n==null||typeof n==`boolean`?``:n,n=t.margin,n==null?(n=t.hasOwnProperty(`marginTop`)?t.marginTop:t[`margin-top`],e.marginTop=n==null||typeof n==`boolean`?``:n,t=t.hasOwnProperty(`marginBottom`)?t.marginBottom:t[`margin-bottom`],e.marginBottom=t==null||typeof t==`boolean`?``:t):e.margin=n))}function Dp(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position===`absolute`||t.position===`fixed`,clip:t.clipPath!==`none`||t.overflow!==`visible`||t.filter!==`none`||t.mask!==`none`||t.mask!==`none`||t.borderRadius!==`0px`,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Op(e){return Dp(e.getBoundingClientRect(),getComputedStyle(e),e)}function kp(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return Dp(t,n,e)}function Ap(e){return e.documentElement.clientHeight}function jp(e){this.addEventListener(`load`,e),this.addEventListener(`error`,e)}function Mp(e,t,n,r,i,a,o,s,c){var l=t.nodeType===9?t:t.ownerDocument;try{var u=l.startViewTransition({update:function(){var t=l.defaultView,n=t.navigation&&t.navigation.transition,o=l.fonts.status;r();var s=[];if(o===`loaded`&&(Ap(l),l.fonts.status===`loading`&&s.push(l.fonts.ready)),o=s.length,e!==null)for(var c=e.suspenseyImages,u=0,d=0;d<c.length;d++){var f=c[d];if(!f.complete){var p=f.getBoundingClientRect();if(0<p.bottom&&0<p.right&&p.top<t.innerHeight&&p.left<t.innerWidth){if(u+=Xm(f),u>$m){s.length=o;break}f=new Promise(jp.bind(f)),s.push(f)}}}if(0<s.length)return t=Promise.race([Promise.all(s),new Promise(function(e){return setTimeout(e,500)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(a,a);if(i(),n)return n.finished.then(a,a);a()},types:n});l.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=l.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,i=r.pseudoElement;if(i!=null&&i.startsWith(`::view-transition`)){d.push(n),n=r.getKeyframes();for(var a=i=void 0,s=!0,c=0;c<n.length;c++){var u=n[c],f=u.width;if(i===void 0)i=f;else if(i!==f){s=!1;break}if(f=u.height,a===void 0)a=f;else if(a!==f){s=!1;break}delete u.width,delete u.height,u.transform===`none`&&delete u.transform}s&&i!==void 0&&a!==void 0&&(r.setKeyframes(n),s=getComputedStyle(r.target,r.pseudoElement),s.width!==i||s.height!==a)&&(s=n[0],s.width=i,s.height=a,s=n[n.length-1],s.width=i,s.height=a,r.setKeyframes(n))}}o()},function(e){l.__reactViewTransition===u&&(l.__reactViewTransition=null);try{if(typeof e==`object`&&e)switch(e.name){case`InvalidStateError`:(e.message===`View transition was skipped because document visibility state is hidden.`||e.message===`Skipping view transition because document visibility state has become hidden.`||e.message===`Skipping view transition because viewport size changed.`||e.message===`Transition was aborted because of invalid state`)&&(e=null)}e!==null&&c(e)}finally{r(),i(),o()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();l.__reactViewTransition===u&&(l.__reactViewTransition=null),s()}),u}catch{return r(),i(),o(),null}}function Np(e,t){this._scope=document.documentElement,this._selector=`::view-transition-`+e+`(`+t+`)`}Np.prototype.animate=function(e,t){return t=typeof t==`number`?{duration:t}:S({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Np.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],i=0;i<n.length;i++){var a=n[i].effect;a!==null&&a.target===e&&a.pseudoElement===t&&r.push(n[i])}return r},Np.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Pp(e){return{name:e,group:new Np(`group`,e),imagePair:new Np(`image-pair`,e),old:new Np(`old`,e),new:new Np(`new`,e)}}function Fp(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Fp.prototype.addEventListener=function(e,t,n){var r=null,i=null;if(!(n!=null&&typeof n!=`boolean`&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Bp(a,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!=`boolean`&&!0===n.once&&(s=function(r){o.removeEventListener(e,t,n),typeof t==`function`?t.call(this,r):t.handleEvent(r)}),r!==null&&(i=o.removeEventListener.bind(o,e,t,n),r.addEventListener(`abort`,i,{once:!0}),i=r.removeEventListener.bind(r,`abort`,i)),r=Rp(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:i}),m(this._fragmentFiber.child,!1,Ip,e,s,r)}this._eventListeners=a}};function Ip(e,t,n,r){return b(e).addEventListener(t,n,r),!1}Fp.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=Bp(r,e,t,n),t!==-1)){var i=r[t];n=i.attachedListener;var a=i.cleanup;i=Rp(i.optionsOrUseCapture),m(this._fragmentFiber.child,!1,Lp,e,n,i),r.splice(t,1),a!==null&&a()}};function Lp(e,t,n,r){return b(e).removeEventListener(t,n,r),!1}function Rp(e){return e!=null&&typeof e!=`boolean`&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function zp(e){return e==null?`c=0`:typeof e==`boolean`?`c=`+(e?`1`:`0`):`c=`+(e.capture?`1`:`0`)}function Bp(e,t,n,r){if(e.length===0)return-1;r=zp(r);for(var i=0;i<e.length;i++){var a=e[i];if(a.type===t&&a.listener===n&&zp(a.optionsOrUseCapture)===r)return i}return-1}Fp.prototype.dispatchEvent=function(e){var t=g(this._fragmentFiber);if(t===null)return!0;t=b(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(``):document.createTextNode(``);if(n)for(var i=0;i<n.length;i++){var a=n[i];r.addEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(i=0;i<n.length;i++)a=n[i],r.removeEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},Fp.prototype.focus=function(e){m(this._fragmentFiber.child,!0,Vp,e,void 0,void 0)};function Vp(e,t){return e.tag!==6&&(e=b(e),pm(e,t))}Fp.prototype.focusLast=function(e){var t=[];m(this._fragmentFiber.child,!0,Hp,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Vp(t[n],e);n--);};function Hp(e,t){return t.push(e),!1}Fp.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=b(e),e=lp(e).activeElement,e!==null&&m(this._fragmentFiber.child,!1,Up,e,void 0,void 0))};function Up(e,t){return e.tag!==6&&(e=b(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Fp.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),m(this._fragmentFiber.child,!1,Wp,e,void 0,void 0)};function Wp(e,t){return e.tag!==6&&(e=b(e),t.observe(e),!1)}Fp.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),m(this._fragmentFiber.child,!1,Gp,e,void 0,void 0);for(var n=t=0;n<Kp.length;n++){var r=Kp[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Kp[t++]=r}Kp.length=t}};function Gp(e,t){return e.tag!==6&&(e=b(e),t.unobserve(e),!1)}var Kp=[],qp=!1;function Jp(e,t,n){Kp.push({fragmentInstance:e,observer:t,instance:n}),qp||(qp=!0,mm(function(){qp=!1;var e=Kp;Kp=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}}))}Fp.prototype.getClientRects=function(){var e=[];return m(this._fragmentFiber.child,!1,Yp,e,void 0,void 0),e};function Yp(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=b(e),t.push.apply(t,e.getClientRects());return!1}Fp.prototype.getRootNode=function(e){var t=g(this._fragmentFiber);return t===null?this:b(t).getRootNode(e)},Fp.prototype.compareDocumentPosition=function(e){var t=g(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];m(this._fragmentFiber.child,!1,Hp,n,void 0,void 0);var r=b(t);if(n.length===0){if(n=r,_(this._fragmentFiber)){a:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break a}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var i=r=n.compareDocumentPosition(e);return n===e?i=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=v(t)[1],n===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=b(n).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=b(n[0]),i=b(n[n.length-1]);var a=_(this._fragmentFiber)?t.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=i.compareDocumentPosition(e),c=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=r&&a&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||a&&i===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Xp(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Xp(e,t,n,r,i){var a=Gt(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)a:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break a}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=i.ownerDocument,i===a||i===a.documentElement||i===a.body;a:{for(a=t,t=g(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break a}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=ie(n,a,x),t===null?t=!1:(m(t,!0,ne,a,n),a=ee,ee=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===r)&&(t=ie(r,a,x),t===null?t=!1:(m(t,!0,re,a,r),a=ee,te=ee=null,t=a!==null)),t):!1}function Zp(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Fp.prototype.scrollIntoView=function(e){if(typeof e==`object`)throw Error(i(566));var t=[];m(this._fragmentFiber.child,!1,Hp,t,void 0,void 0);var n=!1!==e;if(t.length===0){var r=v(this._fragmentFiber);if(r=n?r[1]||r[0]||g(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=b(r),Zp(e,n);return}if(r=b(r),r.nodeType!==9){if(r.nodeType===11){n=`host`in r?r.host:null,n!==null&&n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var a=t[r];a.tag===6?(a=b(a),Zp(a,n)):b(a).scrollIntoView(e),r+=n?-1:1}};function Qp(e,t){return e=b(e),$p(e,t),!1}function $p(e,t){e.reactFragments??=new Set,e.reactFragments.add(t)}function em(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.addEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){for(var r=0,i=0;i<Kp.length;i++){var a=Kp[i];(a.fragmentInstance!==t||a.observer!==n||a.instance!==e)&&(Kp[r++]=a)}Kp.length=r,n.observe(e)}),$p(e,t))}function tm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.removeEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){typeof n.rootMargin==`string`?Jp(t,n,e):n.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function nm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:nm(n),Wt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function rm(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[Ht])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lm(e.nextSibling),e===null)break}return null}function im(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lm(e.nextSibling),e===null))return null;return e}function am(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lm(e.nextSibling),e===null))return null;return e}function om(e){return e.data===`$?`||e.data===`$~`}function sm(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cm(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lm(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var um=null;function dm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lm(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function fm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pm(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener(`focus`,n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener(`focus`,n,!0)}return r}function mm(e){yp(function(){yp(function(t){return e(t)})})}function hm(e,t,n){switch(t=lp(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function gm(e,t,n){for(var r in n){var i=n[r];n.hasOwnProperty(r)&&i!=null&&$(e,t,r,null,rp,i)}n.dangerouslySetInnerHTML!=null&&(e.textContent=``),e.onclick===An&&(e.onclick=null),Wt(e)}function _m(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Wt(e)}var vm=new Map,ym=new Set;function bm(e){if(typeof e.getRootNode==`function`){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var xm=w.d;w.d={f:Sm,r:Cm,D:Em,C:Dm,L:Om,m:km,X:jm,S:Am,M:Mm};function Sm(){var e=xm.f(),t=zd();return e||t}function Cm(e){var t=Kt(e);t!==null&&t.tag===5&&t.type===`form`?lc(t):xm.r(e)}var wm=typeof document>`u`?null:document;function Tm(e,t,n){var r=wm;if(r&&typeof t==`string`&&t){var i=hn(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),ym.has(i)||(ym.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),np(t,`link`,e),E(t),r.head.appendChild(t)))}}function Em(e){xm.D(e),Tm(`dns-prefetch`,e,null)}function Dm(e,t){xm.C(e,t),Tm(`preconnect`,e,t)}function Om(e,t,n){xm.L(e,t,n);var r=wm;if(r&&e&&t){var i=`link[rel="preload"][as="`+hn(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+hn(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+hn(n.imageSizes)+`"]`)):i+=`[href="`+hn(e)+`"]`;var a=i;switch(t){case`style`:a=Pm(e);break;case`script`:a=Rm(e)}if(!(vm.has(a)||(e=S({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),vm.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Fm(a))||t===`script`&&r.querySelector(zm(a))))){var o=r.createElement(`link`);np(o,`link`,e),t===`style`&&(o[Ut]=!0,o.onload=o.onerror=function(){Yt(o)}),E(o),r.head.appendChild(o)}}}function km(e,t){xm.m(e,t);var n=wm;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+hn(r)+`"][href="`+hn(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Rm(e)}if(!vm.has(a)&&(e=S({rel:`modulepreload`,href:e},t),vm.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(zm(a)))return}r=n.createElement(`link`),np(r,`link`,e),E(r),n.head.appendChild(r)}}}function Am(e,t,n){xm.S(e,t,n);var r=wm;if(r&&e){var i=Jt(r).hoistableStyles,a=Pm(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Fm(a)))s.loading=5;else{e=S({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=vm.get(a))&&Hm(e,n);var c=o=r.createElement(`link`);E(c),np(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Vm(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function jm(e,t){xm.X(e,t);var n=wm;if(n&&e){var r=Jt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=S({src:e,async:!0},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),E(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Mm(e,t){xm.M(e,t);var n=wm;if(n&&e){var r=Jt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=S({src:e,async:!0,type:`module`},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),E(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Nm(e,t,n,r){var a=(a=Fe.current)?bm(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=Pm(n.href),t=Jt(a).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Pm(n.href);var o=Jt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Fm(e)))?o._p||(s.instance=o,s.state.loading=5):(o=vm.get(e),o||(o={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},vm.set(e,o)),Lm(a,e,o,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=Rm(n),t=Jt(a).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Pm(e){return`href="`+hn(e)+`"`}function Fm(e){return`link[rel="stylesheet"][`+e+`]`}function Im(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function Lm(e,t,n,r){if(t=e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)){if(!0!==t[Ut]){r.loading=1;return}}else t=e.createElement(`link`),t[Ut]=!0,t.onload=t.onerror=Yt.bind(null,t),np(t,`link`,n),E(t),e.head.appendChild(t);r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2})}function Rm(e){return`[src="`+hn(e)+`"]`}function zm(e){return`script[async]`+e}function Bm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+hn(n.href)+`"]`);if(r)return t.instance=r,E(r),r;var a=S({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),E(r),np(r,`style`,a),Vm(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Pm(n.href);var o=e.querySelector(Fm(a));if(o)return t.state.loading|=4,t.instance=o,E(o),o;r=Im(n),(a=vm.get(a))&&Hm(r,a),o=(e.ownerDocument||e).createElement(`link`),E(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),np(o,`link`,r),t.state.loading|=4,Vm(o,n.precedence,e),t.instance=o;case`script`:return o=Rm(n.src),(a=e.querySelector(zm(o)))?(t.instance=a,E(a),a):(r=n,(a=vm.get(o))&&(r=S({},n),Um(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),E(a),np(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Vm(r,n.precedence,e));return t.instance}function Vm(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Hm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Um(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Wm=null;function Gm(e,t,n){if(Wm===null){var r=new Map,i=Wm=new Map;i.set(n,r)}else i=Wm,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Ht]||a[Ft]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Km(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function qm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Jm(e,t){return e===`img`&&t.src!=null&&t.src!==``&&t.onLoad==null&&t.loading!==`lazy`}function Ym(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Xm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio==`number`?devicePixelRatio:1)*.25}function Zm(e,t){typeof t.decode==`function`&&(e.imgCount++,t.complete||(e.imgBytes+=Xm(t),e.suspenseyImages.push(t)),e=rh.bind(e),t.decode().then(e,e))}function Qm(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Pm(r.href),a=t.querySelector(Fm(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=nh.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,E(a);return}a=t.ownerDocument||t,r=Im(r),(i=vm.get(i))&&Hm(r,i),a=a.createElement(`link`),E(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),np(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=nh.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var $m=0;function eh(e,t){return e.stylesheets&&e.count===0&&ah(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&$m===0&&($m=62500*op());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>$m?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function th(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)ah(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function nh(){this.count--,th(this)}function rh(){this.imgCount--,th(this)}var ih=null;function ah(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ih=new Map,t.forEach(oh,e),ih=null,nh.call(e))}function oh(e,t){if(!(t.state.loading&4)){var n=ih.get(e);if(n)var r=n.get(null);else{n=new Map,ih.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=nh.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var sh={$$typeof:fe,Provider:null,Consumer:null,_currentValue:Oe,_currentValue2:Oe,_threadCount:0};function ch(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wt(0),this.hiddenUpdates=wt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function lh(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ch(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=Wi(3,null,null,t),e.current=a,a.stateNode=e,t=Va(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},wo(a),e}function uh(e){return e?(e=Hi,e):Hi}function dh(e,t,n,r,i,a){i=uh(i),r.context===null?r.context=i:r.pendingContext=i,r=Eo(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Do(e,r,t),n!==null&&(Pd(n,e,t),Oo(n,e,t))}function fh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ph(e,t){fh(e,t),(e=e.alternate)&&fh(e,t)}function mh(e){if(e.tag===13||e.tag===31){var t=zi(e,67108864);t!==null&&Pd(t,e,67108864),ph(e,67108864)}}function hh(e){if(e.tag===13||e.tag===31){var t=jd();t=At(t);var n=zi(e,t);n!==null&&Pd(n,e,t),ph(e,t)}}var gh=!0;function _h(e,t,n,r){var i=C.T;C.T=null;var a=w.p;try{w.p=2,yh(e,t,n,r)}finally{w.p=a,C.T=i}}function vh(e,t,n,r){var i=C.T;C.T=null;var a=w.p;try{w.p=8,yh(e,t,n,r)}finally{w.p=a,C.T=i}}function yh(e,t,n,r){if(gh){var i=bh(r);if(i===null)Kf(e,t,r,xh,n),Mh(e,r);else if(Ph(i,e,t,n,r))r.stopPropagation();else if(Mh(e,r),t&4&&-1<jh.indexOf(e)){for(;i!==null;){var a=Kt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=vt(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-dt(o);s.entanglements[1]|=c,o&=~c}Ef(a),!(W&6)&&(_d=$e()+500,Df(0,!1))}}break;case 31:case 13:s=zi(a,2),s!==null&&Pd(s,a,2),zd(),ph(a,2)}if(a=bh(r),a===null&&Kf(e,t,r,xh,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Kf(e,t,r,null,n)}}function bh(e){return e=Mn(e),Sh(e)}var xh=null;function Sh(e){if(xh=null,e=Gt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xh=e,null}function Ch(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`fullscreenerror`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`resize`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(et()){case tt:return 2;case nt:return 8;case rt:case it:return 32;case at:return 268435456;default:return 32}default:return 32}}var wh=!1,Th=null,Eh=null,Dh=null,Oh=new Map,kh=new Map,Ah=[],jh=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Mh(e,t){switch(e){case`focusin`:case`focusout`:Th=null;break;case`dragenter`:case`dragleave`:Eh=null;break;case`mouseover`:case`mouseout`:Dh=null;break;case`pointerover`:case`pointerout`:Oh.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:kh.delete(t.pointerId)}}function Nh(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Kt(t),t!==null&&mh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ph(e,t,n,r,i){switch(t){case`focusin`:return Th=Nh(Th,e,t,n,r,i),!0;case`dragenter`:return Eh=Nh(Eh,e,t,n,r,i),!0;case`mouseover`:return Dh=Nh(Dh,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Oh.set(a,Nh(Oh.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,kh.set(a,Nh(kh.get(a)||null,e,t,n,r,i)),!0}return!1}function Fh(e){var t=Gt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,Nt(e.priority,function(){hh(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,Nt(e.priority,function(){hh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ih(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bh(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);jn=r,n.target.dispatchEvent(r),jn=null}else return t=Kt(n),t!==null&&mh(t),e.blockedOn=n,!1;t.shift()}return!0}function Lh(e,t,n){Ih(e)&&n.delete(t)}function Rh(){wh=!1,Th!==null&&Ih(Th)&&(Th=null),Eh!==null&&Ih(Eh)&&(Eh=null),Dh!==null&&Ih(Dh)&&(Dh=null),Oh.forEach(Lh),kh.forEach(Lh)}function zh(e,n){e.blockedOn===n&&(e.blockedOn=null,wh||(wh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Rh)))}var Bh=null;function Vh(e){Bh!==e&&(Bh=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Bh===e&&(Bh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(Sh(r||n)===null)continue;break}var a=Kt(n);a!==null&&(e.splice(t,3),t-=3,sc(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Hh(e){function t(t){return zh(t,e)}Th!==null&&zh(Th,e),Eh!==null&&zh(Eh,e),Dh!==null&&zh(Dh,e),Oh.forEach(t),kh.forEach(t);for(var n=0;n<Ah.length;n++){var r=Ah[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ah.length&&(n=Ah[0],n.blockedOn===null);)Fh(n),n.blockedOn===null&&Ah.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[It]||null;if(typeof a==`function`)o||Vh(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[It]||null)s=o.formAction;else if(Sh(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Vh(n)}}}function Uh(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Wh(e){this._internalRoot=e}Gh.prototype.render=Wh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;dh(n,jd(),e,t,null,null)},Gh.prototype.unmount=Wh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dh(e.current,2,null,e,null,null),zd(),t[Lt]=null}};function Gh(e){this._internalRoot=e}Gh.prototype.unstable_scheduleHydration=function(e){if(e){var t=Mt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ah.length&&t!==0&&t<Ah[n].priority;n++);Ah.splice(n,0,e),n===0&&Fh(e)}};var Kh=n.version;if(Kh!==`19.3.0`)throw Error(i(527,Kh,`19.3.0`));w.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:f(e),e=e===null?null:e.stateNode,e};var qh={bundleType:0,version:`19.3.0`,rendererPackageName:`react-dom`,currentDispatcherRef:C,reconcilerVersion:`19.3.0`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Jh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jh.isDisabled&&Jh.supportsFiber)try{ct=Jh.inject(qh),lt=Jh}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Ac,s=jc,c=Mc;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=lh(e,1,!1,null,null,n,r,null,o,s,c,Uh),e[Lt]=t.current,Wf(e),new Wh(t)}})),_=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=d(),y=_(),b=`modulepreload`,ee=function(e){return`/veynor-os-web/`+e},te={},ne=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=ee(t,n),t=s(t),t in te)return;te[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:b,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},re=(e,t,n)=>{if(![e,t,n].every(Number.isFinite))throw RangeError(`range bounds and step must be finite numbers`);if(n===0)throw RangeError(`range step cannot be 0`);return n},x=(e,t)=>{let n=e+t;if(n===e)throw RangeError(`range step is too small to advance at this magnitude`);return n},ie=(e,t)=>t==null?!1:typeof t==`string`?t.includes(String(e)):Array.isArray(t)?t.includes(e):t instanceof Set||t instanceof Map||typeof t.has==`function`?t.has(e):typeof t.includes==`function`?t.includes(e):e in t,S=new Map,ae=(e,t)=>{let n=t??e;if(typeof document<`u`&&!S.has(n)){let r=document.createElement(`style`);t&&(r.dataset.vey=t),r.textContent=e,document.head.appendChild(r),S.set(n,r)}return e};ae(`:root {
  --text: #f5f5f7;
  --muted: rgba(245, 245, 247, 0.58);
  --glass: rgba(28, 28, 34, 0.62);
  --glass-strong: rgba(22, 22, 28, 0.86);
  --hairline: rgba(255, 255, 255, 0.10);
  --accent: #a78bfa;
  --accent-2: #f472b6;
  --radius: 18px;
  --font: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Inter", "Segoe UI", system-ui, sans-serif;
  color-scheme: dark;
}
/* #93 Emergency SOS: deliberate dialer and message handoffs, no auto-send. */
.sos-button { display: inline-grid; place-items: center; min-width: 54px; min-height: 44px; padding: 8px 12px; border: 1px solid #bf3b4955; border-radius: 12px; color: #c53949; background: #bf3b4910; font: 750 11px / 1 var(--font); letter-spacing: .08em; }
.phone-home-heading > .sos-button { float: right; }
.lock-sos { position: absolute; bottom: 20px; z-index: 2; }
.lock:has(.lock-sos) .lock-hint { bottom: 90px; }
.menu-right .sos-button { min-height: 28px; padding: 5px 9px; margin-right: 12px; border-radius: 7px; font-size: 9px; }
.sos-dialog { width: min(440px, calc(100vw - 28px)); max-height: calc(100dvh - 32px); margin: auto; padding: 0 24px 24px; overflow-y: auto; overscroll-behavior: contain; border: 1px solid var(--hairline); border-radius: 24px; background: var(--solid); color: var(--text); font-family: var(--font); box-shadow: 0 24px 90px #0006; }
.sos-dialog::backdrop { background: #11181699; }
.sos-heading { display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0; z-index: 1; padding: 18px 0 12px; background: var(--solid); }
.sos-emblem { display: grid; place-items: center; width: 54px; height: 54px; border: 1px solid #bf3b4933; border-radius: 18px; background: #bf3b4915; color: #c53949; font-size: 12px; font-weight: 800; letter-spacing: .08em; }
.sos-close { display: grid; place-items: center; width: 44px; height: 44px; border: 1px solid var(--hairline); border-radius: 50%; background: var(--surface-2); color: var(--text); }
.sos-dialog h2 { margin: 10px 0; font: 500 33px / 1.1 Georgia, serif; letter-spacing: -.04em; color: var(--text); }
.sos-intro { margin: 0 0 24px; color: var(--muted); font-size: 14px; line-height: 1.5; }
.sos-field { display: grid; gap: 8px; margin: 14px 0; color: var(--text); font-size: 12px; font-weight: 600; }
.sos-field .field { width: 100%; min-height: 44px; margin: 0; }
.sos-field small { color: var(--muted); font-size: 10px; font-weight: 400; line-height: 1.5; }
.os .sos-call { display: flex; align-items: center; justify-content: center; gap: 10px; width: 100%; min-height: 56px; margin: 20px 0 12px; padding: 14px; border: 1px solid #a32333; border-radius: 14px; background: #ba293b; color: white; font: 650 14px / 1.4 var(--font); text-decoration: none; }
.sos-call strong { margin-left: auto; font-size: 20px; font-variant-numeric: tabular-nums; }
.sos-call:disabled { opacity: .45; }
.sos-confirm { padding: 16px; border: 1px solid #bf3b4955; border-radius: 14px; background: #bf3b490c; }
.sos-confirm > strong { display: block; font-size: 16px; }
.sos-confirm > p { margin-top: 8px; color: var(--muted); font-size: 12px; line-height: 1.5; }
.sos-confirm > .btn { width: 100%; min-height: 44px; }
.sos-limit, .sos-footnote { margin: 12px 0; color: var(--muted); font-size: 11px; line-height: 1.6; }
.sos-source { display: inline-flex; align-items: center; gap: 4px; color: var(--accent); font-size: 10px; }
.sos-locked { display: flex; align-items: flex-start; gap: 10px; margin: 24px 0 16px; padding: 16px; border: 1px solid var(--hairline); border-radius: 13px; color: var(--muted); font-size: 12px; line-height: 1.6; }
.sos-locked > svg { flex: none; margin-top: 2px; }
.sos-footnote { padding-top: 16px; margin-bottom: 0; border-top: 1px solid var(--hairline); }
.sos-footnote strong { display: block; margin-bottom: 4px; color: var(--text); font-weight: 600; }
.sos-contact-tools { padding-top: 24px; margin-top: 24px; border-top: 1px solid var(--hairline); }
.sos-contact-tools h3 { font: 500 24px / 1.2 Georgia, serif; letter-spacing: -.025em; }
.sos-contact-name { display: grid; gap: 5px; margin: 14px 0; font-size: 15px; font-weight: 600; }
.sos-contact-name > span { color: var(--muted); font-size: 12px; font-weight: 400; }
.sos-location { margin: 18px 0; }
.sos-location > button { min-height: 44px; }
.sos-location > p { margin: 9px 0; color: var(--muted); font-size: 11px; line-height: 1.5; }
.sos-message-preview { margin: 16px 0; padding: 15px; border: 1px solid var(--hairline); border-radius: 12px; background: var(--surface); }
.sos-message-preview > span { color: var(--muted); font-size: 8px; font-weight: 750; letter-spacing: .1em; }
.sos-message-preview > p { margin: 10px 0 0; overflow-wrap: anywhere; white-space: pre-wrap; color: var(--text); font-size: 12px; line-height: 1.6; }
.sos-draft { display: flex; align-items: center; justify-content: center; gap: 10px; min-height: 48px; padding: 12px; border: 1px solid var(--hairline); border-radius: 12px; background: var(--surface-2); color: var(--text); font-size: 13px; font-weight: 600; text-decoration: none; }
.sos-config { margin-top: 20px; padding-top: 12px; border-top: 1px solid var(--hairline); }
.sos-config > summary { min-height: 44px; align-content: center; color: var(--text); cursor: pointer; font-size: 12px; font-weight: 600; }
.sos-form-actions { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px; }
.sos-form-actions > button { min-height: 44px; }
.sos-error { color: var(--text); font-size: 12px; line-height: 1.5; }
.sos-dialog :focus-visible, .sos-button:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
.os.eink .sos-dialog, .os.eink .sos-call, .os.eink .sos-button, .os.eink .sos-emblem { background: #fff; color: #000; border: 1px solid #000; box-shadow: none; }
/* #92 Jump back in: a bounded list instead of another wall of app icons. */
.jump-back-in { grid-column: 1 / -1; min-width: 0; margin: 10px 0; }
.home-launcher .jump-back-in { margin-top: 28px; padding-top: 22px; border-top: 1px solid var(--hairline); }
.jump-heading { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin: 0 0 12px; }
.jump-heading > div > span { color: var(--muted); font-size: 8px; font-weight: 700; letter-spacing: .15em; }
.jump-heading h2 { margin: 5px 0 0; color: var(--text); font: 500 24px / 1.1 Georgia, serif; letter-spacing: -.035em; }
.jump-clear { min-width: 44px; min-height: 44px; color: var(--muted); font: 500 12px / 1.4 var(--font); }
.jump-list { display: grid; gap: 7px; }
.jump-card { display: flex; align-items: center; border: 1px solid var(--hairline); border-radius: 13px; background: var(--surface); box-shadow: inset 0 1px 0 #ffffff18; }
.jump-resume { display: flex; align-items: center; gap: 12px; flex: 1; min-width: 0; min-height: 72px; padding: 12px 0 12px 12px; color: var(--text); text-align: left; }
.jump-icon { display: grid; place-items: center; flex: none; width: 42px; height: 42px; border-radius: 12px; color: #fff; box-shadow: inset 0 1px 1px #ffffff44, 0 2px 5px #0001; }
.jump-copy { flex: 1; min-width: 0; }
.jump-copy strong, .jump-copy small { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.jump-copy strong { font-size: 13px; font-weight: 650; }
.jump-copy small { margin-top: 5px; color: var(--muted); font-size: 10px; }
.jump-resume > svg { flex: none; color: var(--muted); }
.jump-dismiss { display: grid; place-items: center; flex: none; width: 44px; min-height: 44px; color: var(--muted); }
.jump-resume:hover .jump-copy strong, .jump-clear:hover, .jump-dismiss:hover { color: var(--accent); }
.jump-empty { padding: 12px 0; color: var(--muted); font-size: 12px; line-height: 1.5; }
.jump-back-in button:focus-visible { outline: 2px solid var(--accent); outline-offset: -2px; border-radius: 10px; }
.os.eink .jump-card, .os.eink .jump-icon { background: #fff !important; color: #000 !important; border: 1px solid #000; box-shadow: none; }
/* #91 Press-and-hold: a small, solid preview with no background app mount. */
.press-expand { -webkit-touch-callout: none; user-select: none; -webkit-user-select: none; touch-action: manipulation; }
.press-expand:focus-visible { outline: 2px solid var(--accent); outline-offset: 4px; }
.expand-home-hint { grid-column: 1 / -1; margin: -5px 0 3px; text-align: center; color: var(--muted); font-size: 11px; }
.expand-menu-hint { float: right; font-size: 10px; }
.expand-view { width: min(390px, calc(100vw - 32px)); max-height: calc(100dvh - 48px); margin: auto; padding: 0; overflow: auto; overscroll-behavior: contain; border: 1px solid var(--hairline); border-radius: 24px; background: var(--solid, #252822); color: var(--text); font-family: var(--font); text-align: left; box-shadow: 0 24px 90px #0005, inset 0 1px 0 #ffffff18; }
.expand-view[open] { display: block; animation: expand-reveal .18s ease-out; }
.expand-view::backdrop { background: #11181685; }
.expand-heading { display: flex; align-items: center; justify-content: space-between; gap: 14px; padding: 12px 14px 0 24px; }
.expand-heading > span { color: var(--muted); font: 600 9px / 1.4 var(--font); letter-spacing: .16em; }
.expand-close { display: grid; place-items: center; flex: none; width: 44px; height: 44px; border: 1px solid var(--hairline); border-radius: 50%; background: var(--surface-2); color: var(--text); }
.expand-body { padding: 8px 24px 24px; }
.expand-body h2 { margin: 0 0 20px; color: var(--text); font: 500 30px / 1.1 Georgia, serif; letter-spacing: -.035em; }
.expand-app-art { display: grid; place-items: center; width: 94px; height: 94px; margin: 4px 0 18px; border-radius: 26px; color: #fff; box-shadow: inset 0 1px 1px #ffffff55, 0 5px 12px #0002; }
.expand-description { margin: 0 0 14px; color: var(--muted); font-size: 14px; line-height: 1.6; }
.expand-status { display: inline-flex; align-items: center; gap: 7px; margin-bottom: 20px; color: var(--muted); font-size: 11px; }
.expand-status > span { width: 6px; height: 6px; border-radius: 50%; background: var(--muted); }
.expand-status.running > span { background: var(--accent); }
.expand-tools { margin-bottom: 20px; }
.expand-tools h3 { margin: 0 0 8px; color: var(--muted); font-size: 11px; font-weight: 600; }
.expand-tools button { display: flex; align-items: center; gap: 11px; width: 100%; min-height: 46px; padding: 8px 10px; border-bottom: 1px solid var(--hairline); color: var(--text); text-align: left; font: 500 13px / 1.4 var(--font); }
.expand-tools button > span { flex: 1; }
.expand-tools button:hover { background: var(--surface-2); border-radius: 8px; }
.expand-primary { display: flex; align-items: center; justify-content: space-between; gap: 14px; width: 100%; min-height: 48px; padding: 12px 16px; border: 1px solid var(--hairline); border-radius: 13px; background: var(--accent-fill); color: #fff; font: 650 14px / 1.4 var(--font); }
.expand-footer { padding: 13px 24px; border-top: 1px solid var(--hairline); color: var(--muted); text-align: center; font: 400 10px / 1.5 var(--font); }
.expand-clock-time { display: block; margin: 12px 0 8px; color: var(--text); font-size: clamp(27px, 8vw, 42px); font-weight: 500; font-variant-numeric: tabular-nums; letter-spacing: -.05em; }
.expand-clock-details { margin: 22px 0; }
.expand-clock-details p { display: flex; align-items: center; gap: 9px; padding: 14px 0; border-bottom: 1px solid var(--hairline); font-size: 12px; }
.expand-clock-details p > span { flex: 1; color: var(--muted); }
.expand-clock-details strong { color: var(--text); font-weight: 600; font-variant-numeric: tabular-nums; }
.expand-view :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
.os.eink .expand-view, .os.eink .expand-app-art, .os.eink .expand-primary { background: #fff !important; color: #000 !important; border: 1px solid #000; box-shadow: none; }
@keyframes expand-reveal { from { opacity: 0; transform: translateY(8px) scale(.97); } to { opacity: 1; transform: none; } }
.news-masthead { display:flex; align-items:center; justify-content:space-between; gap:18px; padding:8px 2px 20px; }
.news-masthead h2 { margin:5px 0 4px; font-family:Georgia,"Iowan Old Style",serif; font-size:clamp(27px,4vw,39px); line-height:1.05; font-weight:500; letter-spacing:-.045em; }
.news-masthead p { margin:0; color:var(--muted); font-size:13px; }
.news-kicker { color:var(--accent); font-size:10px; font-weight:750; letter-spacing:.16em; }
.news-mark { display:grid; place-items:center; width:55px; height:55px; flex:0 0 55px; border:1px solid var(--hairline); border-radius:18px; background:linear-gradient(145deg,rgba(232,190,117,.28),rgba(200,120,75,.13)); color:var(--accent); font-family:Georgia,serif; font-size:31px; box-shadow:inset 1px 1px 2px rgba(255,255,255,.48),3px 4px 10px rgba(60,40,20,.08); }
.news-search { display:flex; align-items:center; gap:9px; max-width:620px; min-height:46px; margin-bottom:16px; padding:4px 6px 4px 13px; border:1px solid var(--hairline); border-radius:15px; background:var(--glass); box-shadow:inset 1px 1px 2px rgba(0,0,0,.035); }
.news-search .field { min-width:0; flex:1; border:0; background:transparent; box-shadow:none; }
.news-search > svg { flex:0 0 auto; color:var(--muted); }
.news-categories { display:flex; gap:7px; overflow-x:auto; margin:0 -4px 15px; padding:3px 4px 8px; scrollbar-width:thin; }
.news-category { flex:0 0 auto; padding:8px 12px; border:1px solid var(--hairline); border-radius:999px; background:var(--glass); color:var(--muted); font:inherit; font-size:12px; cursor:pointer; }
.news-category.active { border-color:color-mix(in srgb,var(--accent) 42%,var(--hairline)); background:color-mix(in srgb,var(--accent) 13%,var(--glass)); color:var(--text); font-weight:700; }
.news-meta { display:flex; justify-content:space-between; gap:12px; margin:4px 1px 10px; color:var(--muted); font-size:11px; }
.news-status,.news-loading { display:flex; align-items:center; justify-content:space-between; gap:12px; margin:8px 0 14px; padding:12px 14px; border:1px solid var(--hairline); border-radius:13px; color:var(--muted); font-size:13px; }
.news-list { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:11px; }
.news-story { min-width:0; padding:16px; border:1px solid var(--hairline); border-radius:16px; background:var(--glass); box-shadow:0 4px 14px rgba(25,25,25,.035); }
.news-story.lead { grid-column:1/-1; padding:21px; background:linear-gradient(135deg,color-mix(in srgb,var(--accent) 11%,var(--glass)),var(--glass) 68%); }
.news-story-meta { display:flex; flex-wrap:wrap; gap:8px; align-items:center; color:var(--muted); font-size:10px; font-weight:700; letter-spacing:.04em; text-transform:uppercase; }
.news-story h3 { margin:9px 0 7px; font-family:Georgia,"Iowan Old Style",serif; font-size:18px; line-height:1.25; font-weight:600; letter-spacing:-.02em; }
.news-story.lead h3 { max-width:800px; font-size:clamp(21px,3vw,29px); }
.news-story h3 a { color:var(--text); text-decoration:none; }
.news-story h3 a:hover { color:var(--accent); }
.news-story p { display:-webkit-box; overflow:hidden; margin:0; color:var(--muted); font-size:12px; line-height:1.55; -webkit-box-orient:vertical; -webkit-line-clamp:3; }
.news-story-actions { display:flex; align-items:center; justify-content:space-between; gap:8px; margin-top:13px; }
.news-story-actions > a,.news-save { display:inline-flex; align-items:center; gap:6px; color:var(--accent); font-size:11px; font-weight:700; text-decoration:none; }
.news-save { padding:6px 9px; border:1px solid var(--hairline); border-radius:9px; background:transparent; font-family:inherit; cursor:pointer; }
.news-save[aria-pressed="true"] { background:color-mix(in srgb,var(--accent) 12%,var(--glass)); }
.news-footnote { max-width:750px; margin:18px auto 6px; color:var(--muted); font-size:10px; line-height:1.5; text-align:center; }
@media (max-width:620px) { .news-list { grid-template-columns:1fr; } .news-story.lead { grid-column:auto; } .news-meta span:last-child { text-align:right; } .news-masthead { padding-bottom:16px; } }
.scores-masthead { display:flex; align-items:flex-start; justify-content:space-between; gap:16px; padding:8px 2px 16px; }
.scores-masthead h2 { margin:6px 0 5px; font-family:Georgia,"Iowan Old Style",serif; font-size:clamp(27px,4vw,38px); line-height:1.05; font-weight:500; letter-spacing:-.045em; }
.scores-masthead p { color:var(--muted); font-size:13px; }
.scores-kicker { color:var(--accent); font-size:10px; font-weight:750; letter-spacing:.16em; }
.scores-live-mark { display:inline-flex; align-items:center; gap:7px; margin-top:7px; padding:7px 10px; border:1px solid var(--hairline); border-radius:999px; color:var(--muted); font-size:9px; font-weight:800; letter-spacing:.12em; }
.scores-live-mark i { width:7px; height:7px; border-radius:50%; background:var(--muted); }
.scores-live-mark.active { border-color:rgba(91,207,144,.28); color:#8be1af; background:rgba(45,150,90,.12); }
.scores-live-mark.active i,.score-state.live i { background:#58d18b; box-shadow:0 0 9px rgba(88,209,139,.75); }
.scores-updated { display:flex; justify-content:space-between; gap:12px; padding:10px 12px; border:1px solid var(--hairline); border-radius:12px; background:var(--glass); color:var(--muted); font-size:11px; }
.scores-filters { display:flex; gap:7px; overflow-x:auto; margin:13px -4px 14px; padding:3px 4px 8px; scrollbar-width:thin; }
.scores-filter { flex:none; padding:8px 12px; border:1px solid var(--hairline); border-radius:999px; background:var(--glass); color:var(--muted); font:inherit; font-size:12px; }
.scores-filter.active { border-color:color-mix(in srgb,var(--accent) 45%,var(--hairline)); background:color-mix(in srgb,var(--accent) 15%,var(--glass)); color:var(--text); font-weight:700; }
.scores-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:10px; }
.score-card { min-width:0; padding:13px 14px 10px; border:1px solid var(--hairline); border-radius:15px; background:var(--glass); box-shadow:0 5px 16px rgba(0,0,0,.06); }
.score-card.live { border-color:rgba(88,209,139,.27); background:linear-gradient(145deg,rgba(45,150,90,.10),var(--glass) 65%); }
.score-card > header,.score-card > footer { display:flex; align-items:center; justify-content:space-between; gap:10px; }
.score-league { overflow:hidden; color:var(--muted); font-size:9px; font-weight:800; letter-spacing:.13em; text-overflow:ellipsis; text-transform:uppercase; white-space:nowrap; }
.score-state { display:inline-flex; align-items:center; gap:5px; flex:none; color:var(--muted); font-size:9px; font-weight:750; letter-spacing:.06em; }
.score-state.live { color:#8be1af; }
.score-state.live i { width:6px; height:6px; border-radius:50%; }
.score-teams { display:grid; gap:1px; margin:10px 0; }
.score-team { display:grid; grid-template-columns:35px minmax(0,1fr) auto; align-items:center; gap:8px; min-height:34px; }
.score-team-abbr { color:var(--muted); font-size:10px; font-weight:800; letter-spacing:.03em; }
.score-team-name { overflow:hidden; font-size:12px; text-overflow:ellipsis; white-space:nowrap; }
.score-team strong { min-width:20px; font-size:19px; font-weight:650; font-variant-numeric:tabular-nums; text-align:right; }
.score-team:not(.winner) strong { color:var(--muted); }
.score-card > footer { min-height:26px; border-top:1px solid var(--hairline); color:var(--muted); font-size:10px; }
.score-card > footer span { overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
.score-card > footer a { display:grid; place-items:center; flex:none; color:var(--accent); }
.scores-loading { display:flex; align-items:center; gap:9px; padding:18px 4px; color:var(--muted); font-size:13px; }
.scores-pulse { width:8px; height:8px; border-radius:50%; background:var(--accent); animation:pulse 1.2s ease-in-out infinite; }
.scores-footnote { max-width:800px; margin:16px auto 5px; color:var(--muted); font-size:10px; line-height:1.55; text-align:center; }
@media (max-width:620px) { .scores-grid { grid-template-columns:1fr; } .scores-masthead { padding-bottom:13px; } .scores-updated span:last-child { text-align:right; } }
* { box-sizing: border-box; margin: 0; -webkit-tap-highlight-color: transparent; }
html, body, #root { height: 100%; }
body { background: #050507; color: var(--text); font-family: var(--font); overflow: hidden; overscroll-behavior: none; user-select: none; -webkit-user-select: none; }
button { font: inherit; color: inherit; background: none; border: 0; cursor: pointer; }
input, textarea { font: inherit; color: inherit; user-select: text; -webkit-user-select: text; }
.muted { color: var(--muted); }
.small { font-size: 13px; }
.row { display: flex; align-items: center; }
.row.gap { gap: 10px; margin-top: 12px; }
.row.between { justify-content: space-between; padding: 8px 0; }
.ellipsis { overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
.empty { text-align: center; padding: 40px 0; }
* { scrollbar-width: none; }
*::-webkit-scrollbar { display: none; }

.os { position: fixed; inset: 0; overflow: hidden; background-size: cover; transition: background 0.6s ease; }
.reactive-wallpaper { position: absolute; z-index: 0; inset: -12%; pointer-events: none; opacity: var(--opacity); background: radial-gradient(ellipse at 22% 42%, rgba(101, 76, 255, var(--bass-alpha)), transparent 54%), radial-gradient(ellipse at 78% 52%, rgba(255, 65, 142, var(--mids-alpha)), transparent 48%), radial-gradient(ellipse at 50% 84%, rgba(35, 209, 206, var(--highs-alpha)), transparent 46%); filter: blur(34px); transition: opacity 120ms linear; }
/* The glow that follows the Music app's own sound, in the cover's colours. Three soft blobs; the bass, mids and highs set how strong each is. */
.music-glow { position: absolute; pointer-events: none; overflow: hidden; opacity: var(--opacity, 0); will-change: opacity; } /* no blur filter: the gradients are already soft, and a blur redrawn 30 times a second costs battery */
.music-glow.wallpaper { z-index: 0; inset: -12%; }
.music-glow.player { z-index: 0; inset: 0; border-radius: inherit; }
.music-glow span { position: absolute; inset: 0; }
.music-glow .mg-a { background: radial-gradient(ellipse at 22% 42%, var(--c1), transparent 56%); opacity: var(--bass-alpha, 0); }
.music-glow .mg-b { background: radial-gradient(ellipse at 78% 52%, var(--c2), transparent 50%); opacity: var(--mids-alpha, 0); }
.music-glow .mg-c { background: radial-gradient(ellipse at 50% 86%, var(--c1), var(--c2) 30%, transparent 52%); opacity: var(--highs-alpha, 0); }
.full-player { position: relative; overflow: hidden; }
.full-player > :not(.music-glow) { position: relative; z-index: 1; }
.phone-shell, .desktop-shell { z-index: 1; }
.os.reduce-motion .reactive-wallpaper { transition: none; }

/* ── Lock screen ─────────────────────────────────────────── */
.lock-now { margin: 22px auto 0; display: flex; align-items: center; justify-content: space-between; gap: 14px; width: min(340px, 86vw); padding: 10px 14px; border-radius: 20px; background: var(--glass-strong); border: 1px solid var(--hairline); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); }
.lock-now-copy { display: flex; flex-direction: column; min-width: 0; text-align: left; }
.lock-now-copy strong, .lock-now-copy span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.lock-now-controls { display: flex; align-items: center; gap: 6px; flex: none; }
.lock-now { --lock-fg: #fff; background: rgba(24, 24, 30, 0.62); border-color: rgba(255, 255, 255, 0.22); color: var(--lock-fg); box-shadow: 0 10px 34px rgba(0, 0, 0, 0.28); }
.lock-now .muted { color: rgba(255, 255, 255, 0.72); }
.lock-now .song-icon, .lock-now .song-icon.big { width: 44px; min-height: 44px; font-size: 20px; color: var(--lock-fg); }
.lock-now .full-play { background: #fff; color: #111; }
.lock-now .full-play.small { width: 42px; height: 42px; font-size: 17px; }
.lock-now button:focus-visible { outline: 2px solid #fff; outline-offset: 2px; }
.lock { position: absolute; inset: 0; display: grid; place-items: center; backdrop-filter: blur(0px); animation: fade 0.3s ease; }
.lock-clock { text-align: center; position: absolute; top: 12vh; }
.lock-date { font-size: 20px; font-weight: 500; opacity: 0.85; }
.lock-time { font-size: clamp(80px, 22vw, 120px); font-weight: 600; letter-spacing: -3px; line-height: 1; margin-top: 4px; }
.lock-hint { position: fixed; bottom: 48px; left: 0; right: 0; text-align: center; color: var(--muted); font-size: 14px; animation: pulse 2.4s ease-in-out infinite; }
.passcode { display: flex; flex-direction: column; align-items: center; gap: 22px; backdrop-filter: blur(30px); -webkit-backdrop-filter: blur(30px); position: absolute; inset: 0; justify-content: center; background: rgba(0,0,0,0.25); animation: fade 0.25s ease; }
.passcode-title { font-size: 20px; font-weight: 500; }
.dots { display: flex; gap: 16px; }
.dots span { width: 13px; height: 13px; border-radius: 50%; border: 1.5px solid var(--text); transition: background 0.1s; }
.dots span.on { background: var(--text); }
.dots.shake { animation: shake 0.4s; }
.pad { display: grid; grid-template-columns: repeat(3, 78px); gap: 16px 24px; }
.pad-key { width: 78px; height: 78px; border-radius: 50%; font-size: 32px; font-weight: 400; background: var(--w14); backdrop-filter: blur(12px); transition: background 0.1s; }
.pad-key:active { background: var(--w40); }
.pad-key.blank { visibility: hidden; }
.text-btn { font-size: 16px; }

/* ── Status bar / icons ──────────────────────────────────── */
.status-bar { display: flex; justify-content: space-between; align-items: center; padding: 14px 28px 6px; font-size: 15px; font-weight: 600; position: relative; z-index: 5; }
.status-right { display: flex; gap: 7px; align-items: center; }
.dynamic-notch-wrap { position: absolute; top: 7px; left: 50%; transform: translateX(-50%); z-index: 40; }
.dynamic-notch { position: relative; min-width: 112px; max-width: calc(100vw - 150px); min-height: 27px; padding: 6px 14px 6px 34px; border-radius: 18px; background: #050507; color: #f8fafc; box-shadow: 0 4px 16px rgba(0,0,0,0.35); transition: min-width 0.2s ease, border-radius 0.2s ease; text-align: left; }
.dynamic-notch-wrap.expanded .dynamic-notch { min-width: 190px; border-radius: 18px; }
.notch-camera { position: absolute; left: 12px; top: 10px; width: 9px; height: 9px; border-radius: 50%; background: #20252c; box-shadow: inset 0 0 0 2px #111820; }
.notch-live-dot { position: absolute; left: 26px; top: 8px; width: 6px; height: 6px; border-radius: 50%; background: #68d9a2; box-shadow: 0 0 8px #68d9a2; }
.notch-status { display: block; font-size: 12px; font-variant-numeric: tabular-nums; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.notch-panel { position: absolute; top: 35px; left: 50%; transform: translateX(-50%); width: min(340px, calc(100vw - 28px)); padding: 14px; border: 1px solid var(--w14); border-radius: 22px; background: color-mix(in srgb, var(--bg) 82%, #17191d); color: var(--text); box-shadow: 0 20px 56px rgba(0,0,0,0.4); backdrop-filter: blur(28px); -webkit-backdrop-filter: blur(28px); animation: zoomIn 0.16s ease; }
.notch-panel-heading { display: flex; align-items: center; justify-content: space-between; margin: 2px 3px 10px; color: var(--muted); font-size: 10px; font-weight: 700; letter-spacing: .14em; }
.notch-panel-heading > span:last-child { min-width: 20px; height: 20px; display: grid; place-items: center; border-radius: 50%; background: var(--w10); color: var(--text); letter-spacing: 0; }
.notch-empty { margin: 12px 4px; color: var(--muted); font-size: 13px; line-height: 1.45; }
.notch-activity { display: flex; align-items: center; gap: 8px; min-height: 58px; padding: 6px; border-top: 1px solid var(--w10); }
.notch-activity-main { display: flex; align-items: center; flex: 1; min-width: 0; gap: 10px; padding: 2px; text-align: left; }
.notch-activity-icon { width: 34px; height: 34px; display: grid; place-items: center; flex: none; border-radius: 12px; color: #a5e9c5; background: rgba(79,180,127,.16); }
.notch-activity-icon.reminder { color: #ffd28a; background: rgba(220,160,66,.16); }
.notch-activity-icon.alarm { color: #a9c7ff; background: rgba(92,139,226,.17); }
.notch-activity-copy { display: grid; gap: 3px; min-width: 0; }
.notch-activity-copy strong, .notch-activity-copy small { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.notch-activity-copy strong { font-size: 13px; font-weight: 600; }
.notch-activity-copy small { color: var(--muted); font-size: 11px; }
.notch-activity-action { width: 34px; height: 34px; display: grid; place-items: center; flex: none; border-radius: 50%; background: var(--w10); color: var(--text); }
.notch-panel-footer { display: flex; align-items: center; justify-content: space-between; gap: 10px; border-top: 1px solid var(--w10); margin-top: 4px; padding: 10px 4px 0; color: var(--muted); font-size: 10px; }
.notch-panel-footer button { color: var(--accent); font-size: 12px; font-weight: 600; }
.signal { font-size: 11px; letter-spacing: -1px; }
.battery { width: 25px; height: 12px; border: 1.5px solid var(--w70); border-radius: 4px; padding: 1.5px; display: inline-flex; position: relative; }
.battery::after { content: ""; position: absolute; right: -4px; top: 3px; width: 2px; height: 4px; background: var(--w70); border-radius: 0 1px 1px 0; }
.battery span { background: var(--text); border-radius: 1.5px; height: 100%; display: block; }
.app-icon { display: flex; flex-direction: column; align-items: center; gap: 6px; }
.icon-tile { display: grid; place-items: center; border-radius: 23%; color: #fff; box-shadow: 0 6px 18px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.25); transition: transform 0.15s ease; }
.app-icon:active .icon-tile { transform: scale(0.9); filter: brightness(0.85); }
.icon-label { font-size: 12px; text-shadow: 0 1px 3px rgba(0,0,0,0.5); }

/* ── Phone / tablet shell ────────────────────────────────── */
.phone-shell { position: absolute; inset: 0; display: flex; flex-direction: column; }
.home-grid { display: grid; gap: 26px 10px; padding: 26px 22px; align-content: start; flex: 1; animation: zoomIn 0.35s ease; }
.phone-shell.tablet .home-grid { padding: 40px 80px; }
.dock { margin: 0 12px 34px; padding: 14px; border-radius: 32px; background: var(--w14); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); display: flex; justify-content: space-around; }
.phone-shell.tablet .dock { margin: 0 auto 30px; gap: 28px; padding: 14px 26px; }
.app-full { position: absolute; inset: 0; background: var(--bg); z-index: 10; animation: openApp 0.32s cubic-bezier(0.2, 0.9, 0.3, 1); display: flex; flex-direction: column; padding-top: env(safe-area-inset-top); }
.app-full-inner { flex: 1; overflow: hidden; padding-top: 34px; }
.home-bar-zone { position: absolute; left: 0; right: 0; bottom: 0; height: 30px; z-index: 30; display: grid; place-items: center; touch-action: none; cursor: grab; }
.home-bar { width: 134px; height: 5px; border-radius: 3px; background: var(--w75); }
.switcher { position: absolute; inset: 0; z-index: 25; backdrop-filter: blur(30px); -webkit-backdrop-filter: blur(30px); background: rgba(0,0,0,0.35); display: grid; place-items: center; animation: fade 0.2s; }
.switcher-cards { display: flex; gap: 18px; overflow-x: auto; padding: 20px; max-width: 100vw; scroll-snap-type: x mandatory; }
.switcher-card { flex: 0 0 auto; width: min(64vw, 260px); scroll-snap-align: center; }
.switcher-head { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; font-size: 14px; }
.close-x { margin-left: auto; width: 26px; height: 26px; border-radius: 50%; background: var(--w18); font-size: 18px; line-height: 1; }
.switcher-preview { height: min(52vh, 420px); border-radius: 28px; display: grid; place-items: center; font-size: 72px; border: 1px solid var(--hairline); background-color: #111; }

/* ── Desktop shell ───────────────────────────────────────── */
.desktop-shell { position: absolute; inset: 0; }
.menu-bar { height: 30px; display: flex; justify-content: space-between; align-items: center; padding: 0 16px; font-size: 13px; background: rgba(20,20,26,0.45); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); position: relative; z-index: 1000; }
.menu-left, .menu-right { display: flex; gap: 18px; align-items: center; }
.menu-btn { padding: 2px 8px; border-radius: 6px; }
.menu-btn:hover { background: var(--w12); }
.desktop-area { position: absolute; top: 30px; left: 0; right: 0; bottom: 52px; }
.desk-dock { position: absolute; bottom: 10px; left: 50%; transform: translateX(-50%); display: flex; gap: 10px; padding: 8px 12px; border-radius: 22px; background: var(--w14); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); border: 1px solid var(--hairline); z-index: 1000; }
.dock-slot { position: relative; transition: transform 0.15s; }
.dock-slot:hover { transform: translateY(-6px) scale(1.08); }
.dock-dot { position: absolute; bottom: -5px; left: 50%; transform: translateX(-50%); width: 4px; height: 4px; border-radius: 50%; background: var(--text); }
.window { position: absolute; display: flex; flex-direction: column; border-radius: 14px; overflow: hidden; background: rgba(14,14,20,0.92); backdrop-filter: blur(40px); -webkit-backdrop-filter: blur(40px); border: 1px solid var(--hairline); box-shadow: 0 20px 60px rgba(0,0,0,0.45); animation: openWin 0.22s ease; }
.window:not(.focused) { box-shadow: 0 10px 30px rgba(0,0,0,0.3); }
.window:not(.focused) .titlebar { opacity: 0.6; }
.titlebar { height: 36px; display: flex; align-items: center; padding: 0 12px; position: relative; cursor: default; flex: none; touch-action: none; }
.lights { display: flex; gap: 8px; z-index: 1; }
.light { width: 12px; height: 12px; border-radius: 50%; }
.light.red { background: #ff5f57; } .light.yellow { background: #febc2e; }
.title { position: absolute; left: 0; right: 0; text-align: center; font-size: 13px; font-weight: 600; pointer-events: none; }
.window-body { flex: 1; overflow: hidden; }
.resize-handle { position: absolute; right: 0; bottom: 0; width: 18px; height: 18px; cursor: nwse-resize; touch-action: none; }

/* ── App content ─────────────────────────────────────────── */
.app-page { height: 100%; min-height: 0; display: flex; flex-direction: column; }
.app-header { display: flex; align-items: center; justify-content: space-between; padding: 8px 20px 12px; }
.app-header h1 { font-size: 32px; font-weight: 700; letter-spacing: -0.5px; }
.window .app-header h1 { font-size: 22px; }
.app-actions { display: flex; gap: 8px; }
.workspace-subtitle { color: var(--muted); font-size: 12px; margin-top: 3px; }
.workspace, .workspace-panel { height: 100%; min-height: 0; }
.workspace-nav { display: flex; flex: none; gap: 6px; overflow-x: auto; padding: 2px 20px 12px; border-bottom: 1px solid var(--hairline); }
.workspace-nav button { flex: none; white-space: nowrap; padding: 9px 12px; border-radius: 12px; font-size: 13px; color: var(--muted); background: var(--w05); }
.workspace-nav button.active { color: var(--text); background: rgba(167,139,250,0.2); box-shadow: inset 0 0 0 1px var(--accent); }
.workspace-nav button:focus-visible { outline: 2px solid var(--accent); outline-offset: -2px; }
.photos-selected { display: block; width: 100%; max-height: 240px; object-fit: contain; margin-bottom: 12px; border-radius: 12px; }
.photos-actions { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; }
.music-track-copy { display: flex; flex-direction: column; gap: 4px; min-width: 0; margin-right: 12px; overflow-wrap: anywhere; }
.fitness-note { margin-top: 8px; white-space: pre-wrap; overflow-wrap: anywhere; }
.background-library { display: block; font-size: 13px; color: var(--muted); }
.background-library select { margin-top: 8px; }
.app-body { flex: 1; overflow-y: auto; padding: 0 20px 40px; display: flex; flex-direction: column; }
.section { margin-top: 18px; }
.section-label { font-size: 13px; text-transform: uppercase; letter-spacing: 0.4px; color: var(--muted); margin: 0 4px 8px; }
.glass-card { background: var(--w06); border: 1px solid var(--hairline); border-radius: var(--radius); padding: 14px 16px; }
.btn { background: linear-gradient(135deg, var(--accent), var(--accent-2)); color: #fff; font-weight: 600; font-size: 14px; padding: 9px 16px; border-radius: 12px; }
.btn.ghost { background: var(--w10); }
.btn.danger { background: #dc2626; }
.row.gap-sm { gap: 6px; }
.btn:active { opacity: 0.75; }
.field { width: 100%; background: var(--w07); border: 1px solid var(--hairline); border-radius: 12px; padding: 11px 13px; margin-bottom: 10px; outline: none; font-size: 16px; }
.field:focus { border-color: var(--accent); }
.title-field { font-size: 20px; font-weight: 600; }
.body-field { flex: 1; min-height: 240px; resize: none; line-height: 1.5; }
.note-row { position: relative; }
.note-meta { display: flex; gap: 8px; margin-top: 8px; color: var(--muted); font-size: 11px; }
.note-tags { display: flex; gap: 6px; overflow-x: auto; padding: 2px 0 10px; }
.tag-chip { white-space: nowrap; padding: 6px 10px; border-radius: 14px; background: var(--w08); color: var(--muted); font-size: 12px; }
.tag-chip.active { background: var(--accent); color: #fff; }
.kv { display: flex; justify-content: space-between; padding: 7px 0; border-bottom: 1px solid var(--hairline); font-size: 15px; }
.kv:last-child { border: 0; }
.kv span:last-child { color: var(--muted); }
.list { display: flex; flex-direction: column; gap: 8px; }
.list-row { text-align: left; background: var(--w06); border: 1px solid var(--hairline); border-radius: 14px; padding: 12px 14px; }
.list-title { font-weight: 600; margin-bottom: 3px; }
.segmented { display: flex; background: var(--w08); border-radius: 10px; padding: 2px; margin-bottom: 8px; }
.segmented button { flex: 1; padding: 7px 0; border-radius: 8px; font-size: 14px; }
.segmented button.on { background: var(--w20); font-weight: 600; }
.wall-picker { display: flex; gap: 12px; flex-wrap: wrap; }
.wall-swatch { width: 58px; height: 96px; border-radius: 12px; border: 2px solid transparent; }
.wall-swatch.active { border-color: var(--text); }

.clock-hero { text-align: center; padding: 20px 0 8px; }
.clock-widget { grid-column: 1 / -1; width: 100%; min-width: 0; padding: 20px 24px; border-radius: 24px; border: 1px solid var(--hairline); background: var(--glass); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); text-align: left; box-shadow: 0 8px 30px rgba(0,0,0,0.16); }
.clock-widget-heading { display: flex; align-items: center; gap: 8px; font-size: 13px; color: var(--muted); }
.clock-widget-arrow { margin-left: auto; }
.clock-widget-time { display: block; font-size: clamp(36px, 8vw, 56px); font-weight: 300; letter-spacing: -1px; font-variant-numeric: tabular-nums; margin: 8px 0; }
.clock-widget-date { display: block; color: var(--muted); font-size: 14px; }
.clock-widget:focus-visible { outline: 2px solid var(--accent); outline-offset: 4px; }
.clock-widget:active { background: var(--glass-strong); }
.desktop-area > .clock-widget { position: absolute; top: 24px; right: 24px; width: 300px; }
.os.reduce-transparency .clock-widget { background: var(--solid); }
.phone-shell .home-grid { overflow-y: auto; min-height: 0; }
.clock-time { font-size: 52px; font-weight: 300; font-variant-numeric: tabular-nums; letter-spacing: -1px; }
.stopwatch { font-size: 40px; font-weight: 300; font-variant-numeric: tabular-nums; text-align: center; }

.calc-display { text-align: right; padding: 4px 6px 14px; }
.calc-result { font-size: clamp(36px, 9vh, 60px); font-weight: 300; overflow-x: auto; }
.calc-grid { flex: 1; display: grid; grid-template-columns: repeat(4, 1fr); grid-auto-rows: minmax(40px, 1fr); gap: 10px; max-height: 520px; }
.calc-key { border-radius: 18px; background: var(--w10); font-size: 26px; }
.calc-key.accent { background: linear-gradient(145deg, #f97316, #e11d48); }
.calc-key:active { filter: brightness(1.4); }

.chat { flex: 1; display: flex; flex-direction: column; gap: 8px; padding-bottom: 12px; }
.bubble { max-width: 80%; padding: 9px 14px; border-radius: 18px; line-height: 1.4; font-size: 15px; animation: fade 0.2s; user-select: text; }
.bubble.user { align-self: flex-end; background: linear-gradient(135deg, var(--accent), var(--accent-2)); }
.bubble.assistant { align-self: flex-start; background: var(--w10); }
.chat-input { display: flex; gap: 8px; position: sticky; bottom: 0; padding: 10px 0 4px; background: linear-gradient(transparent, var(--bg) 30%); }
.chat-input .field { margin: 0; }

/* ── Phone ── */
.dialer { display: flex; flex-direction: column; align-items: center; flex: 1; justify-content: center; gap: 6px; }
.dial-display { font-size: clamp(26px, 5vh, 36px); font-weight: 400; min-height: 44px; letter-spacing: 0.5px; font-variant-numeric: tabular-nums; }
.dial-status { font-size: 14px; color: var(--accent); min-height: 20px; }
.dial-pad { display: grid; grid-template-columns: repeat(3, 76px); gap: 12px 26px; margin-top: 6px; }
.dial-key { width: 76px; height: 76px; border-radius: 50%; background: var(--w12); display: flex; flex-direction: column; align-items: center; justify-content: center; line-height: 1; }
.dial-key:active { background: var(--w35); }
.dial-digit { font-size: 32px; font-weight: 400; }
.dial-letters { font-size: 9px; letter-spacing: 2px; font-weight: 600; margin-top: 3px; opacity: 0.8; }
.dial-actions { display: grid; grid-template-columns: repeat(3, 76px); gap: 26px; margin-top: 14px; align-items: center; justify-items: center; }
.call-btn { width: 76px; height: 76px; border-radius: 50%; background: #22c55e; font-size: 30px; }
.call-btn:disabled { opacity: 0.4; }
.dial-actions .text-btn { font-size: 24px; }
/* ── Messages ── */
.notice { display: flex; flex-direction: column; gap: 8px; margin-bottom: 12px; }
.composer { display: flex; flex-direction: column; margin-bottom: 14px; }
.composer .btn { align-self: flex-end; }
.btn:disabled { opacity: 0.45; }
.thread-row { display: flex; align-items: center; gap: 10px; }
.thread-main { flex: 1; min-width: 0; }
.unread-dot { width: 9px; height: 9px; border-radius: 50%; background: #3b82f6; flex: none; }
.strong { font-weight: 700; }
.bubble.sms-out { background: linear-gradient(135deg, #22c55e, #16a34a); }
.error { color: var(--err); margin: 6px 0; }

/* ── System overlays ─────────────────────────────────────── */
.scrim { position: absolute; inset: 0; z-index: 5000; background: rgba(0,0,0,0.4); display: grid; place-items: center; animation: fade 0.15s; }
.alert { width: 280px; background: var(--glass-strong); backdrop-filter: blur(40px); -webkit-backdrop-filter: blur(40px); border-radius: 16px; text-align: center; overflow: hidden; animation: pop 0.2s ease; }
.alert h3 { font-size: 16px; font-weight: 600; padding: 18px 16px 4px; line-height: 1.3; }
.alert p { padding: 0 16px 16px; }
.alert-actions { display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid var(--hairline); }
.alert-actions button { padding: 12px; color: var(--accent); font-size: 16px; }
.alert-actions button + button { border-left: 1px solid var(--hairline); }
.alert-actions .strong { font-weight: 600; }
.toast { position: absolute; top: 50px; left: 50%; transform: translateX(-50%); z-index: 6000; background: var(--glass-strong); backdrop-filter: blur(30px); padding: 10px 18px; border-radius: 20px; font-size: 14px; animation: pop 0.2s; }

/* ── Performance modes (Settings → Performance) ── */
.os.reduce-motion *, .os.reduce-motion *::before, .os.reduce-motion *::after { animation: none !important; transition: none !important; }
.os.reduce-transparency * { backdrop-filter: none !important; -webkit-backdrop-filter: none !important; }
.os.reduce-transparency .dock, .os.reduce-transparency .desk-dock, .os.reduce-transparency .menu-bar { background: var(--solid); }
.os.reduce-transparency .passcode, .os.reduce-transparency .switcher { background: rgba(8,8,12,0.94); }
.os.reduce-transparency .window, .os.reduce-transparency .alert, .os.reduce-transparency .toast { background: var(--solid); }
.os.reduce-transparency .pad-key { background: var(--w18); }
.app-loading { height: 100%; display: grid; place-items: center; }
.spinner { width: 26px; height: 26px; border-radius: 50%; border: 3px solid var(--w15); border-top-color: var(--text); animation: spin 0.8s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
.toggle-row { display: flex; justify-content: space-between; align-items: center; padding: 9px 0; border-bottom: 1px solid var(--hairline); gap: 12px; }
.toggle-row:last-child { border: 0; }
.toggle-row .muted { display: block; font-size: 12px; margin-top: 2px; }
.switch { width: 51px; height: 31px; border-radius: 16px; background: var(--w18); position: relative; flex: none; transition: background 0.2s; }
.switch::after { content: ""; position: absolute; top: 2px; left: 2px; width: 27px; height: 27px; border-radius: 50%; background: #fff; transition: transform 0.2s; }
.switch.on { background: #22c55e; }
.switch.on::after { transform: translateX(20px); }
.switch:disabled { opacity: 0.5; }
.bar { height: 8px; border-radius: 4px; background: var(--w10); overflow: hidden; margin: 6px 0 10px; }
.bar span { display: block; height: 100%; background: linear-gradient(90deg, var(--accent), var(--accent-2)); }

@keyframes fade { from { opacity: 0; } }
@keyframes pulse { 50% { opacity: 0.4; } }
@keyframes shake { 20%, 60% { transform: translateX(-10px); } 40%, 80% { transform: translateX(10px); } }
@keyframes zoomIn { from { opacity: 0; transform: scale(1.06); } }
@keyframes openApp { from { opacity: 0; transform: scale(0.85); border-radius: 40px; } }
@keyframes openWin { from { opacity: 0; transform: scale(0.94); } }
@keyframes pop { from { opacity: 0; transform: scale(0.9); } }
@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation: none !important; transition: none !important; } }

.calculator-app { height: 100%; }
.calculator-app:focus-visible { outline: 2px solid var(--accent); outline-offset: -2px; }
.calc-expression { min-height: 24px; overflow-wrap: anywhere; user-select: text; }
.calc-result { display: block; user-select: text; }
.calc-key:focus-visible { outline: 2px solid white; outline-offset: -4px; }

.clock-controls { gap: 12px; flex-wrap: wrap; }
.clock-controls label { flex: 1; min-width: 100px; font-size: 13px; color: var(--muted); }
.clock-controls .field { display: block; margin-top: 6px; }
.clock-browser-note { margin-top: 18px; line-height: 1.5; }
.clock-alert { z-index: 7000; }
.clock-alert-actions { padding: 0 16px 18px; }

.tint-presets { display: flex; flex-wrap: wrap; gap: 12px; margin: 18px 0; }
.tint-swatch { width: 32px; height: 32px; border-radius: 50%; color: #101016; font-weight: 700; border: 2px solid transparent; }
.tint-swatch.selected { outline: 2px solid var(--text); outline-offset: 3px; }
.tint-swatch:focus-visible, .tint-custom input:focus-visible { outline: 2px solid var(--accent); outline-offset: 4px; }
.tint-custom { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; font-size: 14px; }
.tint-custom input { width: 48px; height: 36px; padding: 2px; border: 1px solid var(--hairline); border-radius: 8px; background: transparent; cursor: pointer; }
.tint-preview { display: flex; gap: 20px; flex-wrap: wrap; margin-top: 20px; }
.tinted-icon { text-shadow: 0 0 16px currentColor; }
.volume-list { display: flex; flex-direction: column; gap: 14px; margin: 14px 0 18px; }
.volume-row { padding: 10px 0; border-bottom: 1px solid var(--hairline); }
.volume-label { display: flex; align-items: center; gap: 9px; font-size: 15px; margin-bottom: 8px; }
.volume-label strong { margin-left: auto; color: var(--muted); font-variant-numeric: tabular-nums; font-size: 13px; }
.volume-icon { width: 26px; text-align: center; color: var(--accent); font-size: 18px; }
.volume-row input[type="range"] { width: 100%; accent-color: var(--accent); }
.startup-list { margin-top: 12px; }
.startup-app-name { display: grid; grid-template-columns: 26px auto; align-items: center; column-gap: 8px; }
.startup-app-name .muted { grid-column: 2; font-size: 12px; margin-top: 2px; }
.phone-shell.layout-dense .home-grid { gap: 16px 8px; padding-left: 14px; padding-right: 14px; }
.phone-shell.layout-list .home-grid { gap: 10px; padding: 18px 20px; }
.phone-shell.layout-list .app-icon { flex-direction: row; justify-content: flex-start; gap: 14px; padding: 9px 14px; border-radius: 14px; background: var(--w07); }
.phone-shell.layout-list .icon-tile { border-radius: 18%; }
.phone-shell.layout-list .icon-label { font-size: 15px; }
.layout-preview { display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; padding: 14px; margin-top: 14px; border: 1px solid var(--hairline); border-radius: 14px; background: var(--w05); }
.layout-preview span { display: grid; place-items: center; min-height: 34px; border-radius: 8px; background: linear-gradient(145deg, var(--accent), var(--accent-2)); font-size: 18px; }
.layout-preview-dense { grid-template-columns: repeat(5, 1fr); gap: 4px; }
.layout-preview-dense span { min-height: 27px; font-size: 14px; }
.layout-preview-list { grid-template-columns: 1fr; gap: 5px; }
.layout-preview-list span { justify-content: flex-start; padding-left: 14px; }
.folder-tile { display: flex; flex-direction: column; align-items: center; gap: 6px; }
.folder-preview { width: 60px; height: 60px; padding: 8px; display: grid; grid-template-columns: 1fr 1fr; gap: 3px; border-radius: 23%; background: var(--w18); backdrop-filter: blur(18px); }
.folder-preview span { display: grid; place-items: center; border-radius: 6px; background: var(--w15); font-size: 18px; }
.folder-settings-list { margin-top: 14px; }
.folder-setting { padding: 14px 0; border-bottom: 1px solid var(--hairline); }
.folder-apps { display: grid; grid-template-columns: 1fr 1fr; gap: 9px; margin-top: 12px; font-size: 13px; }
.refresh-30 { --motion-rate: 1.35; }
.refresh-60 { --motion-rate: 1; }
.refresh-120 { --motion-rate: 0.8; }
.refresh-auto { --motion-rate: 1; }
.os.refresh-30 .spinner { animation-duration: calc(0.8s * var(--motion-rate)); }
.os.refresh-120 .spinner { animation-duration: calc(0.8s * var(--motion-rate)); }

.unzip-drop { display: flex; flex-direction: column; align-items: center; gap: 12px; padding: 24px 12px; border: 1px dashed var(--accent); border-radius: 16px; text-align: center; cursor: pointer; }
.unzip-drop input { max-width: 100%; font-size: 13px; }
.unzip-glyph { font-size: 40px; color: var(--accent); }
.unzip-name { overflow-wrap: anywhere; margin: 10px 0; }
.unzip-note { margin-top: 14px; line-height: 1.5; }
.unzip-list { margin-top: 14px; }
.md-text { margin-top: 12px; min-height: 120px; resize: vertical; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 14px; }
.md-options { display: flex; flex-wrap: wrap; align-items: center; gap: 14px; margin-bottom: 12px; }
.md-select { display: inline-block; width: auto; margin: 0 0 0 8px; }
.md-check { display: inline-flex; align-items: center; gap: 8px; }
.md-preview { background: #fff; color: #1d1d1f; border-radius: 14px; padding: 18px 20px; max-height: 55vh; overflow: auto; line-height: 1.5; font-size: 14px; overflow-wrap: anywhere; }
.md-preview h1, .md-preview h2, .md-preview h3, .md-preview h4 { line-height: 1.25; margin: 1.1em 0 0.4em; }
.md-preview h1:first-child, .md-preview h2:first-child { margin-top: 0; }
.md-preview p, .md-preview ul, .md-preview ol { margin: 0 0 0.8em; }
.md-preview ul, .md-preview ol { padding-left: 1.4em; }
.md-preview a { color: #0b45c2; text-decoration: underline; }
.md-preview code { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 0.9em; background: #f0f0f2; padding: 0.1em 0.3em; border-radius: 4px; }
.md-preview pre { background: #f0f0f2; padding: 12px; border-radius: 8px; overflow: auto; margin: 0 0 0.8em; }
.md-preview pre code { background: none; padding: 0; }
.md-preview blockquote { margin: 0 0 0.8em; padding-left: 12px; border-left: 3px solid #c9c9d0; color: #55555c; font-style: italic; }
.md-preview table { border-collapse: collapse; margin: 0 0 0.8em; display: block; overflow: auto; }
.md-preview th, .md-preview td { border: 1px solid #c9c9d0; padding: 5px 9px; text-align: left; }
.md-preview th { background: #f0f0f2; }
.md-preview hr { border: 0; border-top: 1px solid #c9c9d0; margin: 1em 0; }
.focus-banner { display: flex; align-items: center; gap: 12px; padding: 12px 14px; margin: 0 0 12px; border-radius: 14px; background: var(--w07); border: 1px solid var(--hairline); }
.focus-moon { font-size: 22px; line-height: 1; color: var(--accent); }
.focus-banner-text { display: flex; flex-direction: column; min-width: 0; flex: 1; overflow-wrap: anywhere; }
.focus-banner-text span { color: var(--muted); font-size: 14px; }
.focus-popup { position: sticky; bottom: 8px; z-index: 2; margin: 8px 0; animation: focus-rise 220ms ease-out; }
.focus-popup .focus-banner { margin: 0; box-shadow: 0 8px 28px rgba(0, 0, 0, 0.28); background: var(--glass-strong); backdrop-filter: blur(14px); }
@keyframes focus-rise { from { transform: translateY(14px); opacity: 0; } to { transform: none; opacity: 1; } }
@media (prefers-reduced-motion: reduce) { .focus-popup { animation: none; } }
.focus-on-bar { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 10px 14px; margin: 0 0 12px; border-radius: 12px; background: var(--w07); border: 1px solid var(--hairline); }
.focus-presets { display: flex; flex-wrap: wrap; gap: 8px; margin: 4px 0 8px; }
.focus-presets .selected { border-color: var(--accent); }
.focus-field { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
.focus-field .field { width: auto; margin: 0; }
.focus-sample { max-width: 100%; align-self: flex-start; }
.focus-notes { padding-left: 1.2em; }
.focus-notes li { margin-bottom: 6px; }
.unzip-file { display: flex; flex-direction: column; color: var(--text); text-decoration: none; }
.unzip-file:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
.duplicate-drop { display: flex; flex-direction: column; align-items: center; gap: 9px; padding: 24px 12px; border: 1px dashed var(--accent); border-radius: 16px; text-align: center; cursor: pointer; }
.duplicate-drop input { max-width: 100%; font-size: 13px; }
.duplicate-list { gap: 12px; }
.duplicate-file { display: flex; flex-direction: column; gap: 3px; padding: 10px 0; color: var(--text); text-decoration: none; overflow-wrap: anywhere; }
.duplicate-file + .duplicate-file { border-top: 1px solid var(--hairline); }
.duplicate-file:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
.duplicate-note { margin-top: 14px; line-height: 1.5; }
.photo-controls { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 16px; font-size: 13px; color: var(--muted); }
.photo-controls select { margin-left: 6px; padding: 7px 9px; border: 1px solid var(--hairline); border-radius: 8px; background: var(--w08); color: var(--text); }
.photo-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 10px; margin-top: 14px; }
.photo-card { display: flex; flex-direction: column; gap: 4px; min-width: 0; color: var(--text); text-decoration: none; }
.photo-card img { width: 100%; aspect-ratio: 1; object-fit: cover; border-radius: 12px; background: var(--w08); }
.photo-card-name { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 13px; }
.photo-card:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 12px; }
.screenshot-card { border: 0; text-align: left; padding: 0; background: none; }
.screenshot-card.marked img { outline: 3px solid var(--accent); outline-offset: -3px; filter: saturate(0.72); }
.maintenance-status { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 18px; }
.maintenance-status > div { display: flex; flex-direction: column; gap: 3px; padding: 11px 8px; border-radius: 12px; background: var(--w06); text-align: center; }
.maintenance-status strong { font-size: 18px; font-variant-numeric: tabular-nums; }
.maintenance-body { line-height: 1.5; margin-bottom: 14px; }
.maintenance-message { margin-top: 12px; }
.maintenance-note { margin-top: 18px; line-height: 1.5; }
.recorder-indicator { display: flex; align-items: center; gap: 8px; font-weight: 700; }
.recorder-indicator span { width: 12px; height: 12px; border-radius: 50%; background: var(--muted); }
.recorder-indicator.recording span { background: #ef4444; animation: pulse 1.2s ease-in-out infinite; }
.recorder-status { margin: 12px 0; }
.recorder-note { margin-top: 14px; line-height: 1.5; }
.recorder-download { display: inline-block; text-decoration: none; margin-bottom: 10px; }
.journal-date { color: var(--muted); font-size: 13px; margin: 0 0 12px 3px; }
.mood-picker { display: flex; gap: 8px; margin: 2px 0 12px; }
.mood { width: 38px; height: 38px; border-radius: 50%; background: var(--w07); font-size: 20px; }
.mood.selected { background: var(--accent); box-shadow: 0 0 0 2px var(--text); }
.journal-body { min-height: 300px; }
.journal-empty { display: flex; flex-direction: column; align-items: center; gap: 10px; text-align: center; padding: 50px 20px; }
.journal-mark { width: 58px; height: 58px; display: grid; place-items: center; border-radius: 50%; background: linear-gradient(145deg, #ec4899, #be185d); font-size: 26px; }
.journal-empty p { line-height: 1.5; max-width: 300px; }
.journal-row .note-meta { justify-content: flex-start; }
.voice-record { padding: 8px 13px; border-radius: 12px; background: var(--w10); font-weight: 700; }
.voice-record.active { background: #ef4444; }
.voice-hero { display: flex; flex-direction: column; align-items: center; gap: 10px; text-align: center; padding: 18px 0 8px; }
.voice-orb { width: 82px; height: 82px; display: grid; place-items: center; border-radius: 50%; background: linear-gradient(145deg, #c084fc, #9333ea); color: white; font-size: 32px; box-shadow: 0 8px 25px #9333ea55; }
.voice-orb.active { background: #ef4444; animation: pulse 1.2s ease-in-out infinite; }
.voice-note { line-height: 1.5; margin-top: 14px; }
.voice-list { display: flex; flex-direction: column; gap: 16px; }
.voice-entry { display: flex; flex-direction: column; gap: 9px; padding-bottom: 14px; border-bottom: 1px solid var(--hairline); }
.voice-entry audio { width: 100%; height: 36px; }
.todo-form { display: flex; gap: 10px; }
.todo-form label { flex: 1; color: var(--muted); font-size: 13px; }
.todo-form .field { margin-top: 6px; }
.todo-note { margin-top: 14px; line-height: 1.5; }
.todo-row { display: flex; flex-direction: column; align-items: stretch; gap: 8px; }
.todo-completed { padding: 8px 0; color: var(--muted); }
.steps-hero { display: flex; align-items: center; justify-content: center; gap: 28px; padding: 10px 0 18px; }
.steps-ring { width: 126px; height: 126px; display: flex; flex-direction: column; align-items: center; justify-content: center; border-radius: 50%; background: radial-gradient(circle at center, var(--bg) 62%, transparent 63%), conic-gradient(var(--accent) var(--steps-progress), var(--w10) 0); }
.steps-ring strong { font-size: 24px; font-variant-numeric: tabular-nums; }
.steps-ring span { color: var(--muted); font-size: 12px; }
.steps-hero > div:last-child strong { font-size: 28px; color: var(--accent); }
.steps-input { margin: 0; max-width: 150px; }
.steps-history { display: flex; flex-direction: column; gap: 10px; margin-bottom: 14px; }
.steps-note { margin-top: 18px; }
.background-tolerance { display: flex; flex-direction: column; gap: 7px; margin-top: 16px; color: var(--muted); font-size: 13px; }
.background-tolerance input { accent-color: var(--accent); }
.background-preview { display: block; width: 100%; max-height: 430px; object-fit: contain; margin: 4px 0 16px; background-image: linear-gradient(45deg, var(--surface-3) 25%, transparent 25%), linear-gradient(-45deg, var(--surface-3) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, var(--surface-3) 75%), linear-gradient(-45deg, transparent 75%, var(--surface-3) 75%); background-size: 20px 20px; background-position: 0 0, 0 10px, 10px -10px, -10px 0; border-radius: 12px; }
.background-note { margin-top: 14px; line-height: 1.5; }
.file-drop { min-height: 130px; }
.file-toolbar { display: flex; gap: 8px; align-items: center; }
.file-toolbar .field { flex: 1; margin: 0; }
.file-toolbar select { padding: 10px; border: 1px solid var(--hairline); border-radius: 10px; background: var(--w08); color: var(--text); }
.file-list { margin: 14px 0; }
.file-row { display: grid; grid-template-columns: 42px minmax(0, 1fr) auto auto; gap: 9px; align-items: center; }
.file-type { width: 38px; height: 38px; display: grid; place-items: center; border-radius: 10px; background: var(--w09); color: var(--accent); font-size: 9px; font-weight: 800; }
.file-main { min-width: 0; display: flex; flex-direction: column; gap: 3px; }
.file-name { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.file-note { margin-top: 18px; line-height: 1.5; }

/* Search lives above app windows, with the browser's modal focus trap. */
.home-grid { min-height: 0; overflow-y: auto; }
.home-search { grid-column: 1 / -1; display: flex; align-items: center; justify-content: center; gap: 10px; padding: 12px 18px; border: 1px solid var(--hairline); border-radius: 18px; background: var(--w12); color: var(--text); font-size: 14px; }
.webapp-hero { display: flex; align-items: center; gap: 18px; padding: 22px; border: 1px solid var(--hairline); border-radius: 22px; background: linear-gradient(135deg, color-mix(in srgb, #34d399 17%, var(--solid)), color-mix(in srgb, #4f46e5 13%, var(--solid))); margin-bottom: 18px; }
.webapp-hero-mark { width: 56px; height: 56px; flex: 0 0 56px; display: grid; place-items: center; border-radius: 18px; background: linear-gradient(145deg, #34d399, #0f766e); color: white; font-size: 34px; box-shadow: 0 8px 20px #0f766e44; }
.webapp-hero .eyebrow { color: var(--muted); font-size: 10px; font-weight: 750; letter-spacing: .13em; }
.webapp-hero h2 { margin: 4px 0; font-size: 24px; letter-spacing: -.03em; }
.webapp-hero p { margin: 0; color: var(--muted); font-size: 13px; line-height: 1.4; }
.webapp-list { display: grid; gap: 10px; }
.webapp-card { display: flex; align-items: center; gap: 12px; min-width: 0; padding: 11px; border: 1px solid var(--hairline); border-radius: 16px; background: var(--w04); }
.webapp-icon { width: 44px; height: 44px; flex: 0 0 44px; display: grid; place-items: center; border-radius: 14px; color: white; font-size: 22px; font-weight: 700; }
.webapp-card-copy { display: grid; gap: 3px; min-width: 0; flex: 1; }
.webapp-card-copy strong { font-size: 14px; }
.webapp-card-copy small { color: var(--muted); font-size: 11px; line-height: 1.4; overflow-wrap: anywhere; }
.webapp-toolbar { display: flex; justify-content: space-between; align-items: center; gap: 12px; flex-wrap: wrap; }
.webapp-identity { display: flex; align-items: center; gap: 11px; }
.webapp-identity > span:last-child { display: grid; gap: 3px; }
.webapp-identity small { color: var(--muted); font-size: 12px; }
.shop-shots { display: flex; gap: 8px; overflow-x: auto; margin: 8px 0; }
.shop-shots img { height: 170px; border-radius: 12px; border: 1px solid var(--hairline); flex: none; }
.shop-meta { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; font-size: 13px; }
.shop-link { background: none; border: 0; padding: 0; color: var(--accent, #6366f1); font: inherit; cursor: pointer; text-decoration: underline; }
.shopapp-frame { display: block; width: 100%; height: min(72vh, 760px); min-height: 360px; margin: 12px 0; border: 1px solid var(--hairline); border-radius: 16px; background: #fff; }
.webapp-frame { display: block; width: 100%; height: min(66vh, 720px); min-height: 360px; margin: 12px 0; border: 1px solid var(--hairline); border-radius: 16px; background: var(--solid); }
.webapp-publish-result, .webapp-review { display: grid; gap: 8px; margin-top: 14px; padding: 14px; border: 1px solid var(--hairline); border-radius: 16px; background: var(--w04); }
.webapp-publish-result .field { margin: 0; font-size: 12px; }
.webapp-review > p { margin: 2px 0; }
.webapp-import { display: grid; margin-top: 20px; padding-top: 16px; border-top: 1px solid var(--hairline); }
.update-ready-card { display: flex; align-items: center; gap: 12px; margin: 14px 0; padding: 14px; border: 1px solid color-mix(in srgb, var(--accent) 40%, var(--hairline)); border-radius: 16px; background: color-mix(in srgb, var(--accent) 9%, var(--solid)); }
.update-ready-card > span:nth-child(2) { display: grid; gap: 4px; flex: 1; }
.update-ready-card small { color: var(--muted); line-height: 1.4; }
.update-frequency { width: auto; min-width: 158px; }
.update-ready-mark { width: 38px; height: 38px; flex: 0 0 38px; display: grid; place-items: center; border-radius: 12px; background: var(--accent-fill); color: white; font-size: 22px; }
@media (max-width: 540px) { .webapp-hero { align-items: flex-start; padding: 17px; gap: 12px; } .webapp-hero-mark { width: 48px; height: 48px; flex-basis: 48px; } .webapp-hero h2 { font-size: 21px; } .webapp-frame { height: 56vh; min-height: 320px; } }
.home-search > span { font-size: 23px; line-height: 1; }
.desk-dock { max-width: calc(100vw - 24px); overflow-x: auto; }
.dock-slot { flex-shrink: 0; }
.smart-search { width: min(620px, calc(100vw - 32px)); max-height: min(720px, 80dvh); margin: max(24px, 10dvh) auto auto; padding: 0; border: 1px solid var(--w17); border-radius: 24px; background: var(--solid); color: var(--text); box-shadow: 0 30px 100px rgba(0,0,0,0.5); overflow: hidden; }
.smart-search::backdrop { background: rgba(0,0,0,0.6); backdrop-filter: blur(8px); }
.smart-search[open] { display: flex; }
.search-surface { width: 100%; max-height: inherit; display: flex; flex-direction: column; min-height: 0; }
.search-heading { display: flex; justify-content: space-between; align-items: center; padding: 22px 24px 16px; gap: 12px; }
.search-heading h2 { font-size: 19px; letter-spacing: -0.3px; }
.search-heading p { font-size: 12px; color: var(--muted); margin-top: 4px; }
.search-close { width: 34px; height: 34px; border-radius: 50%; background: var(--w07); font-size: 24px; }
.search-input-wrap { display: flex; align-items: center; gap: 12px; margin: 0 20px; padding: 12px 16px; background: #22222d; border: 1px solid var(--hairline); border-radius: 14px; }
.search-input-wrap:focus-within { border-color: var(--accent); box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 9%, transparent); }
.search-input-wrap > span { font-size: 28px; color: var(--accent); line-height: 1; }
.search-input { width: 100%; min-width: 0; border: 0; outline: 0; background: transparent; font-size: 16px; }
.search-input::placeholder { color: var(--muted); font-size: 14px; }
.search-filters { display: flex; flex-shrink: 0; gap: 6px; padding: 16px 20px 10px; overflow-x: auto; }
.search-filter { padding: 7px 12px; border-radius: 9px; font-size: 12px; color: var(--muted); white-space: nowrap; }
.search-filter.active { color: var(--violet-hi); background: color-mix(in srgb, var(--accent) 13%, transparent); }
.search-result-heading { display: flex; justify-content: space-between; padding: 8px 24px; font-size: 11px; color: var(--muted); }
.search-results { overflow-y: auto; min-height: 0; padding: 0 12px 12px; }
.search-result { display: flex; align-items: center; gap: 14px; width: 100%; text-align: left; padding: 12px; border-radius: 12px; border: 1px solid transparent; }
.search-result.selected { background: color-mix(in srgb, var(--accent) 8%, transparent); border-color: color-mix(in srgb, var(--accent) 19%, transparent); }
.search-result:hover { background: var(--w07); }
.search-result-icon { flex: 0 0 38px; height: 38px; display: grid; place-items: center; font-size: 22px; border-radius: 11px; background: color-mix(in srgb, var(--accent) 13%, transparent); color: var(--violet-soft); }
.search-icon-notes { color: var(--amber-t); background: #fbbf2418; }
.search-icon-journal { color: var(--pink-t); background: #f9a8d418; }
.search-icon-tasks { color: var(--cyan); background: #67e8f918; }
.search-result-copy { min-width: 0; flex: 1; display: flex; flex-direction: column; gap: 4px; }
.search-result-copy strong { font-size: 14px; overflow-wrap: anywhere; }
.search-result-copy > span { font-size: 11px; color: var(--muted); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.search-result-copy .search-preview { font-size: 12px; color: var(--ink-2); }
.search-result-arrow { color: var(--muted); font-size: 17px; }
.search-empty { display: flex; flex-direction: column; align-items: center; gap: 10px; text-align: center; padding: 28px 24px 40px; }
.search-empty > span { font-size: 38px; color: var(--accent); }
.search-empty p { color: var(--muted); font-size: 13px; line-height: 1.6; max-width: 310px; }
.search-footer { display: flex; justify-content: space-between; gap: 12px; padding: 14px 24px; font-size: 10px; color: var(--muted); border-top: 1px solid var(--hairline); flex-shrink: 0; }
.search-footer kbd { font: inherit; white-space: nowrap; }
.search-close:focus-visible, .search-filter:focus-visible, .home-search:focus-visible, .search-result:focus-visible { outline: 2px solid var(--accent); outline-offset: -2px; }
.search-revealed { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 12px; }
.finder-hero { padding: 6px 0 22px; }
.finder-eyebrow { display: block; color: var(--sky); font-size: 10px; letter-spacing: 1.8px; font-weight: 700; margin-bottom: 8px; }
.finder-hero h2 { font-size: clamp(23px, 4vw, 30px); line-height: 1.2; letter-spacing: -0.8px; }
.finder-hero p { font-size: 12px; line-height: 1.5; color: var(--muted); max-width: 310px; margin-top: 10px; }
.finder-search-wrap { display: flex; gap: 10px; align-items: center; padding: 11px 14px; border: 1px solid var(--hairline); border-radius: 13px; background: var(--w07); }
.finder-search-wrap:focus-within { border-color: #7dd3fc; }
.finder-search-wrap > span { color: var(--sky); font-size: 26px; line-height: 1; }
.finder-search { min-width: 0; width: 100%; border: 0; outline: 0; background: transparent; font-size: 16px; }
.finder-search::placeholder { font-size: 12px; color: var(--muted); }
.finder-quick { display: flex; flex-wrap: wrap; gap: 7px; margin: 12px 0 20px; }
.finder-quick button { padding: 5px 9px; font-size: 11px; color: var(--sky-soft); background: #38bdf810; border: 1px solid #38bdf820; border-radius: 7px; }
.finder-kinds { display: flex; gap: 5px; overflow-x: auto; padding-bottom: 10px; }
.finder-kind { display: flex; align-items: center; gap: 6px; white-space: nowrap; font-size: 12px; color: var(--muted); padding: 9px 10px; border-radius: 10px; }
.finder-kind.active { color: var(--sky-hi); background: #38bdf821; }
.finder-kind > span { font-size: 17px; }
.finder-kind small { font-size: 10px; opacity: 0.65; }
.finder-toolbar { display: flex; align-items: flex-end; gap: 10px; padding: 6px 0 12px; }
.finder-toolbar label { min-width: 0; flex: 1; display: flex; flex-direction: column; gap: 5px; font-size: 10px; color: var(--muted); }
.finder-toolbar select { width: 100%; padding: 9px 7px; border: 1px solid var(--hairline); border-radius: 8px; color: var(--text); background: var(--surface-3); font: inherit; font-size: 12px; }
.finder-toolbar .btn { font-size: 12px; padding: 9px 10px; }
.finder-hints { display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 12px; }
.finder-hints span { padding: 4px 7px; border-radius: 5px; color: var(--violet-soft); font-size: 10px; background: color-mix(in srgb, var(--accent) 8%, transparent); }
.finder-error { font-size: 12px; color: var(--err-soft); line-height: 1.5; margin-bottom: 12px; }
.finder-results-heading { display: flex; justify-content: space-between; gap: 12px; padding: 4px 0 12px; font-size: 11px; }
.finder-results-heading span { color: var(--muted); }
.finder-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(125px, 1fr)); gap: 16px 12px; }
.finder-card { min-width: 0; display: flex; flex-direction: column; text-align: left; gap: 5px; border-radius: 12px; }
.finder-card strong { font-size: 12px; line-height: 1.3; overflow-wrap: anywhere; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden; }
.finder-card > span:not(.finder-thumbnail), .finder-card small { color: var(--muted); font-size: 10px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 100%; }
.finder-thumbnail { position: relative; display: grid; place-items: center; width: 100%; aspect-ratio: 4 / 3; border: 1px solid var(--hairline); background: linear-gradient(145deg, #202633, #14151c); border-radius: 12px; overflow: hidden; }
.finder-thumbnail img { width: 100%; height: 100%; object-fit: cover; }
.finder-thumbnail > span:not(.finder-format) { font-size: 38px; color: var(--sky); }
.finder-thumb-video { background: linear-gradient(145deg, #302444, #15131d); }
.finder-thumb-video > span:not(.finder-format) { color: var(--violet-soft); }
.finder-format { position: absolute; right: 6px; bottom: 6px; max-width: calc(100% - 12px); padding: 3px 5px; border-radius: 4px; background: #080a12b8; color: var(--ink-3); font-size: 8px; font-weight: 700; overflow: hidden; text-overflow: ellipsis; }
.finder-empty { display: flex; flex-direction: column; align-items: center; gap: 10px; padding: 28px 16px; text-align: center; }
.finder-empty > span { color: var(--sky); font-size: 44px; }
.finder-empty p { max-width: 290px; line-height: 1.5; color: var(--muted); font-size: 12px; }
.finder-empty-actions { display: flex; flex-wrap: wrap; justify-content: center; gap: 7px; margin-top: 5px; }
.finder-more { margin-top: 18px; }
.finder-help { border-top: 1px solid var(--hairline); padding-top: 16px; margin-top: 22px; font-size: 12px; color: var(--muted); }
.finder-help summary { cursor: pointer; color: var(--sky-soft); }
.finder-help p { margin-top: 10px; line-height: 1.6; }
.finder-session-note { color: var(--muted); font-size: 11px; line-height: 1.6; margin-top: 18px; }
.finder-preview { width: min(720px, calc(100vw - 24px)); max-height: 90dvh; padding: 0; margin: auto; border: 1px solid #ffffff25; border-radius: 22px; background: var(--solid); color: var(--text); overflow: hidden; box-shadow: 0 24px 100px #000a; }
.finder-preview::backdrop { background: #000b; backdrop-filter: blur(8px); }
.finder-preview[open] { display: flex; }
.finder-preview-surface { display: flex; flex-direction: column; min-height: 0; max-height: inherit; width: 100%; }
.finder-preview-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; padding: 20px; flex-shrink: 0; }
.finder-preview-header > div { min-width: 0; }
.finder-preview-header h2 { font-size: 17px; overflow-wrap: anywhere; }
.finder-preview-header .search-close { flex-shrink: 0; }
.finder-preview-body { padding: 0 20px 20px; min-height: 0; overflow-y: auto; }
.finder-preview-media { display: block; width: 100%; max-height: 50dvh; object-fit: contain; border-radius: 12px; background: #08080c; }
.finder-preview-audio { width: 100%; margin: 15px 0; }
.finder-text-preview { max-height: 40dvh; overflow: auto; background: var(--bg); padding: 16px; border-radius: 12px; font-size: 12px; line-height: 1.6; white-space: pre-wrap; overflow-wrap: anywhere; user-select: text; -webkit-user-select: text; }
.finder-no-preview { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 10px; padding: 24px 12px; font-size: 13px; color: var(--muted); }
.finder-no-preview > span { font-size: 50px; color: var(--sky); }
.finder-details { margin-top: 18px; display: flex; flex-direction: column; gap: 12px; font-size: 12px; }
.finder-details > div { display: grid; grid-template-columns: 90px minmax(0, 1fr); gap: 12px; }
.finder-details dt { color: var(--muted); }
.finder-details dd { overflow-wrap: anywhere; user-select: text; -webkit-user-select: text; }
.finder-preview-actions { padding: 16px 20px; display: flex; justify-content: space-between; gap: 12px; border-top: 1px solid var(--hairline); flex-shrink: 0; }
.finder-preview-actions a { text-decoration: none; }
.finder-card:focus-visible, .finder-kind:focus-visible, .finder-quick button:focus-visible, .finder-help summary:focus-visible { outline: 2px solid #7dd3fc; outline-offset: 3px; }
@media (max-width: 639px) {
  .smart-search { width: calc(100vw - 20px); max-height: 90dvh; margin-top: 4dvh; border-radius: 20px; }
  .search-heading { padding: 18px 18px 14px; }
  .search-input-wrap { margin: 0 14px; padding: 12px; }
  .search-input::placeholder { font-size: 12px; }
  .search-filters { padding-left: 14px; padding-right: 14px; gap: 2px; }
  .search-footer { padding: 12px 18px; }
  .file-row { grid-template-columns: 38px minmax(0,1fr); }
  .file-row > .btn { grid-row: 2; }
}

/* Desktop taskbar and Start menu */
.taskbar { position: absolute; left: 0; right: 0; bottom: 0; height: 52px; display: flex; align-items: center; gap: 12px; padding: 0 12px; background: rgba(20,20,26,0.6); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); border-top: 1px solid var(--hairline); z-index: 1000; }
.start-btn { width: 38px; height: 38px; border-radius: 12px; display: grid; place-items: center; font-weight: 800; font-size: 18px; color: #fff; background: linear-gradient(145deg, var(--accent), var(--accent-2)); transition: transform 0.15s; }
.start-btn:hover, .start-btn.active { transform: scale(1.08); }
.task-items { flex: 1; display: flex; gap: 6px; align-items: center; justify-content: center; overflow-x: auto; min-width: 0; }
.task-item { position: relative; flex-shrink: 0; padding: 3px; border-radius: 10px; transition: background 0.15s; }
.task-item:hover { background: var(--w12); }
.task-item.active { background: var(--w18); }
.task-item.open::after, .task-item.active::after, .task-item.minimized::after { content: ''; position: absolute; bottom: -2px; left: 50%; transform: translateX(-50%); height: 3px; width: 6px; border-radius: 2px; background: var(--text); transition: width 0.15s; }
.task-item.active::after { width: 16px; background: var(--accent); }
.task-item.minimized::after { opacity: 0.5; }
.tray { display: flex; align-items: center; gap: 12px; font-size: 12px; }
.tray-clock { display: flex; flex-direction: column; align-items: flex-end; line-height: 1.25; }
.start-menu { position: absolute; left: 12px; bottom: 60px; width: min(420px, calc(100vw - 24px)); max-height: min(560px, calc(100% - 100px)); display: flex; flex-direction: column; gap: 10px; padding: 16px; border-radius: 22px; background: rgba(21,21,30,0.94); backdrop-filter: blur(30px); -webkit-backdrop-filter: blur(30px); border: 1px solid var(--hairline); box-shadow: 0 24px 70px rgba(0,0,0,0.5); z-index: 1001; animation: openWin 0.18s ease; }
.start-search { padding: 10px 14px; border-radius: 12px; border: 1px solid var(--hairline); background: var(--w08); color: var(--text); font: inherit; font-size: 14px; user-select: text; -webkit-user-select: text; outline: none; }
.start-search:focus { border-color: var(--accent); }
.start-section { font-size: 12px; opacity: 0.6; padding: 0 4px; }
.start-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px 8px; overflow-y: auto; min-height: 0; padding: 4px; }
.start-empty { grid-column: 1 / -1; opacity: 0.6; font-size: 13px; }
.start-foot { display: flex; justify-content: space-between; align-items: center; padding-top: 10px; border-top: 1px solid var(--hairline); font-size: 13px; }
.start-foot span { display: flex; gap: 6px; }
.os.reduce-transparency .taskbar, .os.reduce-transparency .start-menu { background: var(--solid); }

/* Shared bits for the new apps */
select.field { appearance: none; -webkit-appearance: none; background: var(--w07) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%23aaa'/%3E%3C/svg%3E") no-repeat right 12px center; padding-right: 30px; color: var(--text); }
select.field option, .player-opt option { background: var(--solid); color: var(--text); }
textarea.field { resize: vertical; line-height: 1.45; }
.btn.rec { background: #dc2626; animation: pulse 1.4s ease-in-out infinite; }
@keyframes pulse { 50% { opacity: 0.7; } }
.switch { position: relative; width: 44px; height: 26px; flex-shrink: 0; }
.switch input { position: absolute; opacity: 0; inset: 0; margin: 0; cursor: pointer; z-index: 1; }
.switch span { position: absolute; inset: 0; border-radius: 13px; background: var(--w18); transition: background 0.2s; }
.switch span::after { content: ''; position: absolute; top: 3px; left: 3px; width: 20px; height: 20px; border-radius: 50%; background: #fff; transition: transform 0.2s; }
.switch input:checked + span { background: #22c55e; }
.switch input:checked + span::after { transform: translateX(18px); }
.switch input:focus-visible + span { outline: 2px solid var(--accent); outline-offset: 2px; }

/* Routines */
.auto-actions { margin: 4px 0; }
.auto-result { margin-top: 10px; color: var(--ok); }
.auto-note, .pw-note, .translate-note { margin-top: 16px; line-height: 1.5; }
.auto-action { padding: 10px 0; border-bottom: 1px solid var(--hairline); }
.auto-action .field { margin: 6px 0 0; }
.day-picker { display: flex; gap: 6px; margin-bottom: 8px; }
.day-picker button { width: 34px; height: 34px; border-radius: 50%; background: var(--w08); font-weight: 600; font-size: 13px; }
.day-picker button.on { background: var(--accent); color: #fff; }

/* Passwords */
.pw-health { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
.pw-health > div { display: flex; flex-direction: column; align-items: center; padding: 10px; border-radius: 14px; background: var(--w06); border: 1px solid var(--hairline); }
.pw-health strong { font-size: 22px; }
.pw-flag { color: var(--err-soft); font-size: 12px; text-align: right; }
.pw-secret { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 14px; margin-top: 6px; overflow-wrap: anywhere; user-select: text; -webkit-user-select: text; }
.pw-input { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
.pw-meter { position: relative; height: 22px; margin: -4px 0 10px; border-radius: 6px; background: var(--w06); overflow: hidden; }
.pw-meter span { position: absolute; inset: 0 auto 0 0; transition: width 0.2s; }
.pw-meter em { position: relative; font-style: normal; padding-left: 8px; line-height: 22px; }
.pw-meter.level-0 span { background: #dc262699; } .pw-meter.level-1 span { background: #f59e0b99; }
.pw-meter.level-2 span { background: #22c55e99; } .pw-meter.level-3 span { background: #10b981cc; }

/* Translate + Live Translate */
.translate-langs { display: grid; grid-template-columns: 1fr auto 1fr; gap: 8px; align-items: end; }
.translate-langs:not(:has(> button)) { grid-template-columns: 1fr 1fr; }
.translate-langs .btn { margin-bottom: 10px; }
.translate-box { min-height: 110px; }
.translate-actions { flex-wrap: wrap; }
.translate-result { font-size: 18px; line-height: 1.5; margin-bottom: 8px; user-select: text; -webkit-user-select: text; white-space: pre-wrap; }
.live-feed { flex: 1; min-height: 180px; margin: 12px 0; display: flex; flex-direction: column; gap: 8px; }
.live-line { max-width: 86%; padding: 10px 14px; border-radius: 16px; background: var(--w08); user-select: text; -webkit-user-select: text; }
.live-line.me { align-self: flex-end; background: linear-gradient(135deg, color-mix(in srgb, var(--accent) 33%, transparent), #f472b655); }
.live-line.interim { opacity: 0.6; font-style: italic; }
.live-said { font-size: 17px; margin-top: 3px; }
.live-buttons { display: flex; gap: 8px; position: sticky; bottom: 0; padding: 8px 0; }
.live-buttons .btn { flex: 1; padding: 14px; }

/* Subtitles */
.sub-video, .sub-audio { width: 100%; border-radius: 12px; margin-bottom: 10px; background: #000; max-height: 40dvh; }
.sub-status { margin-top: 10px; }
.sub-translate { margin-top: 12px; grid-template-columns: 1fr auto; }
.sub-cue { display: grid; grid-template-columns: 96px 1fr; gap: 8px; align-items: start; }
.sub-cue .field { margin: 0; font-size: 14px; padding: 8px 10px; }
.sub-time { text-align: left; color: var(--accent); padding-top: 8px; font-variant-numeric: tabular-nums; }

/* Audiobooks + Podcasts */
.player-bar { margin-top: 12px; padding: 14px; border-radius: var(--radius); background: rgba(167,139,250,0.12); border: 1px solid color-mix(in srgb, var(--accent) 27%, transparent); }
.player-art { width: 48px; height: 48px; border-radius: 8px; object-fit: cover; }
.player-meta { min-width: 0; } .player-meta .list-title { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.player-seek { width: 100%; margin-top: 10px; accent-color: var(--accent); }
.player-controls { display: flex; justify-content: center; align-items: center; gap: 14px; margin: 6px 0 10px; }
.player-play { width: 54px; height: 54px; border-radius: 50%; font-size: 18px; padding: 0; }
.player-opt { padding: 6px 8px; border-radius: 8px; border: 1px solid var(--hairline); background: var(--w08); color: var(--text); font: inherit; font-size: 13px; }
.book-head { display: flex; gap: 16px; align-items: flex-start; }
.book-head h2 { font-size: 20px; line-height: 1.25; }
.book-cover { width: 110px; height: 110px; border-radius: 12px; object-fit: cover; flex-shrink: 0; background: var(--w06); }
.book-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(104px, 1fr)); gap: 14px; }
.book-tile { display: flex; flex-direction: column; gap: 4px; text-align: left; min-width: 0; }
.book-tile img, .book-fallback { width: 100%; aspect-ratio: 1; border-radius: 12px; object-fit: cover; background: var(--w08); display: grid; place-items: center; font-size: 34px; }
.book-tile .list-title { overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; }
.book-import { display: inline-block; margin-top: 14px; cursor: pointer; }
.book-hit { display: flex; gap: 12px; align-items: center; }
.book-hit img { width: 52px; height: 52px; border-radius: 8px; object-fit: cover; flex-shrink: 0; background: var(--w08); }
.chapter { display: flex; justify-content: space-between; gap: 10px; }
.list-row.playing { border-color: var(--accent); background: color-mix(in srgb, var(--accent) 12%, transparent); }
.episode.done .list-title { opacity: 0.55; }
.episode-summary { margin-top: 4px; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; }
.now-playing { display: flex; align-items: center; gap: 2px; max-width: 200px; }
.now-playing .menu-btn:first-child { overflow: hidden; white-space: nowrap; text-overflow: ellipsis; min-width: 0; }

/* Maps */
.maps { position: relative; height: 100%; overflow: hidden; }
.maps-canvas { position: absolute; inset: 0; background: var(--solid); }
.maps-search { position: absolute; top: 10px; left: 56px; right: 10px; z-index: 500; display: flex; gap: 6px; }
.maps-search .field { margin: 0; background: var(--mat-pop); box-shadow: 0 6px 20px rgba(0,0,0,0.35); }
.maps-sheet { position: absolute; left: 10px; right: 10px; bottom: 10px; z-index: 500; max-height: 46%; overflow-y: auto; padding: 14px; border-radius: 18px; background: var(--mat-pop); border: 1px solid var(--hairline); box-shadow: 0 10px 30px rgba(0,0,0,0.4); }
.maps-detail { overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; }
.maps-modes { margin: 10px 0; }
.maps-route { margin-top: 12px; }
.maps-route ol { margin: 8px 0 0 18px; display: flex; flex-direction: column; gap: 5px; }
.map-pin { display: block; width: 22px; height: 22px; border-radius: 50%; border: 3px solid #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.45); }
.map-pin.me { background: #3b82f6; }
.map-pin.result { background: #a78bfa; transform: scale(0.75); }
.map-pin.selected { background: #ef4444; }
.leaflet-container { font: inherit; }
.os.reduce-transparency .maps-sheet, .os.reduce-transparency .maps-search .field { background: var(--solid); }

/* ── #68 E-ink mode: black on white, nothing moves, nothing blurs ── */
.os.eink { --text: #000; --muted: #333; --glass: #fff; --glass-strong: #fff; --hairline: #000; --accent: #000; --accent-2: #000; color: #000; color-scheme: light; background: #fff !important; transition: none !important; }
.os.eink .light { background: #fff !important; border: 2px solid #000; }
.os.eink *, .os.eink *::before, .os.eink *::after { animation: none !important; transition: none !important; backdrop-filter: none !important; -webkit-backdrop-filter: none !important; box-shadow: none !important; text-shadow: none !important; }
.os.eink img, .os.eink video, .os.eink canvas, .os.eink .leaflet-container { filter: grayscale(1) contrast(1.2); }
.os.eink .icon-tile { background: #fff !important; color: #000 !important; border: 2px solid #000; }
.os.eink .btn { background: #000; color: #fff; border: 2px solid #000; }
.os.eink .btn.ghost, .os.eink .btn.danger { background: #fff; color: #000; }
.os.eink .btn.danger { border-style: dashed; }
.os.eink .glass-card, .os.eink .list-row, .os.eink .window, .os.eink .alert, .os.eink .toast, .os.eink .dock, .os.eink .desk-dock, .os.eink .menu-bar, .os.eink .taskbar, .os.eink .start-menu, .os.eink .clock-widget, .os.eink .home-search, .os.eink .maintenance-status > div, .os.eink .segmented, .os.eink .field, .os.eink .pad-key, .os.eink .dynamic-notch, .os.eink .start-search, .os.eink .switcher-preview, .os.eink .folder-tile, .os.eink .tag-chip, .os.eink .handoff-banner, .os.eink .chat-bubble, .os.eink .maps-sheet { background: #fff !important; color: #000 !important; border: 1px solid #000; }
.os.eink .switcher, .os.eink .passcode, .os.eink .scrim { background: var(--w92) !important; }
.os.eink .segmented button.on, .os.eink .tag-chip.active, .os.eink .task-item.active { background: #000 !important; color: #fff !important; }
.os.eink .app-full, .os.eink .switcher-preview, .os.eink .app-icon, .os.eink .phone-shell.layout-list .app-icon { background: #fff !important; }
.os.eink .switch { background: #fff; border: 2px solid #000; }
.os.eink .switch::after { background: #000; width: 18px; height: 18px; top: 2px; left: 2px; }
.os.eink .switch.on { background: #000; }
.os.eink .switch.on::after { background: #fff; transform: translateX(18px); }
.os.eink .bar { background: #fff; border: 1px solid #000; }
.os.eink .bar span { background: #000; }
.os.eink .home-bar, .os.eink .dock-dot, .os.eink .dots span.on, .os.eink .battery span, .os.eink .battery::after { background: #000; }
.os.eink .dots span, .os.eink .battery { border-color: #000; }
.os.eink .status-bar, .os.eink .lock-time, .os.eink .lock-date, .os.eink .lock-hint, .os.eink .tray-clock, .os.eink .icon-label, .os.eink .menu-btn, .os.eink .section-label { color: #000; }
.os.eink .window:not(.focused) .titlebar { opacity: 1; }
.os.eink .window.focused { border-width: 2px; }
.os.eink .spinner { border-color: #bbb; border-top-color: #000; }
.os.eink .wall-swatch { filter: grayscale(1); }
.eink-flash { position: fixed; inset: 0; z-index: 99999; background: #000; pointer-events: none; }

/* ── #69 Bottleneck check ── */
.bottleneck-list { margin-top: 10px; }
.bottleneck-dot { display: inline-block; width: 10px; height: 10px; border-radius: 50%; background: #9ca3af; vertical-align: middle; margin-right: 2px; }
.bottleneck.high .bottleneck-dot { background: #ef4444; }
.bottleneck.medium .bottleneck-dot { background: #f59e0b; }
.bottleneck-clear { margin: 10px 0; color: var(--ok-strong); }
.os.eink .bottleneck-dot { background: #000; }
.os.eink .bottleneck.medium .bottleneck-dot, .os.eink .bottleneck.low .bottleneck-dot { background: #fff; border: 2px solid #000; }
.os.eink .bottleneck-clear { color: #000; }

/* ── #70 Driver updates ── */
.driver-status { font-size: 12px; padding: 3px 9px; border-radius: 10px; background: var(--w10); color: var(--muted); white-space: nowrap; }
.driver-status.current { color: var(--ok-strong); }
.driver-status.update-available { background: var(--accent); color: #fff; }
.driver-status.updating { color: #f59e0b; }
.os.eink .driver-status { border: 1px solid #000; color: #000; background: #fff; }
.os.eink .driver-status.update-available { background: #000; color: #fff; }

/* ── #71 Performance limits ── */
.tuning-row { display: flex; flex-direction: column; gap: 4px; padding: 9px 0; border-bottom: 1px solid var(--hairline); font-size: 15px; }
.tuning-row:last-of-type { border-bottom: 0; }
.tuning-row strong { float: right; font-variant-numeric: tabular-nums; }
.tuning-row input[type="range"] { width: 100%; accent-color: var(--accent); }
.tuning-row .field { margin: 0; }

/* ── #72 / #73 Home cloud and ecosystem ── */
.cloud-error { color: var(--err); }
.os.eink .cloud-error { color: #000; text-decoration: underline; }
.origin-add .field { margin: 0; flex: 1; }
.origin-list { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 10px; }
.origin-list .tag-chip button { margin-left: 4px; font-size: 11px; }
.handoff-banner { position: absolute; top: 48px; left: 50%; transform: translateX(-50%); z-index: 5500; display: flex; align-items: center; gap: 12px; padding: 8px 10px 8px 16px; border-radius: 18px; background: var(--glass-strong); backdrop-filter: blur(30px); -webkit-backdrop-filter: blur(30px); border: 1px solid var(--hairline); box-shadow: 0 12px 40px rgba(0,0,0,0.4); max-width: calc(100vw - 24px); animation: pop 0.2s; }
.handoff-text { display: flex; flex-direction: column; min-width: 0; }
.handoff-text strong { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.handoff-banner .btn { padding: 7px 14px; }
.os.reduce-transparency .handoff-banner { background: var(--solid); }
code { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 12px; background: var(--w10); padding: 1px 5px; border-radius: 5px; }

/* ── #74 Quick tab closer ── */
.toast { display: flex; align-items: center; gap: 12px; }
.toast-action { color: var(--accent); font-weight: 600; }
.quick-close-anchor { position: relative; }
.quick-close-count { font-size: 10px; margin-left: 3px; opacity: 0.8; }
.quick-close-pop { position: absolute; right: 0; bottom: 36px; width: min(340px, calc(100vw - 24px)); padding: 12px; border-radius: 16px; background: var(--mat-pop); backdrop-filter: blur(30px); -webkit-backdrop-filter: blur(30px); border: 1px solid var(--hairline); box-shadow: 0 20px 60px rgba(0,0,0,0.5); z-index: 1002; animation: pop 0.15s; text-align: left; font-size: 14px; }
.quick-close-rows { display: flex; flex-direction: column; gap: 4px; max-height: 40vh; overflow-y: auto; }
.quick-close-row { display: flex; align-items: center; justify-content: space-between; border-radius: 10px; padding: 2px 4px 2px 8px; }
.quick-close-row.active { background: var(--w10); }
.quick-close-name { display: flex; align-items: center; gap: 8px; flex: 1; text-align: left; padding: 6px 0; }
.quick-close-actions { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 10px; }
.quick-close-actions .btn { font-size: 13px; padding: 7px 12px; }
.quick-close-hint { margin-top: 10px; }
.switcher-actions { display: flex; gap: 10px; margin-bottom: 8px; }
.os.reduce-transparency .quick-close-pop { background: var(--solid); }
.os.eink .quick-close-pop { background: #fff !important; color: #000; border: 1px solid #000; }

/* ── #75 Reminders ── */
.reminder-main { display: flex; align-items: center; gap: 12px; }
.reminder-text { flex: 1; min-width: 0; }
.reminder-preview { flex: 1; }
.list-title.done { text-decoration: line-through; opacity: 0.6; }
.check { width: 26px; height: 26px; border-radius: 50%; border: 2px solid var(--muted); flex: none; font-size: 14px; font-weight: 700; }
.check.on { background: #22c55e; border-color: #22c55e; color: #fff; }
.reminder.overdue .list-title { color: var(--err); }
.reminder-edit { margin-top: 10px; }
.reminder-edit .field { margin-bottom: 6px; }
.reminder-actions { grid-template-columns: 1fr 1fr 1fr; }
.os.eink .check.on { background: #000; border-color: #000; }
.os.eink .reminder.overdue .list-title { color: #000; text-decoration: underline; }

/* ── #76 Assistant ── */
.chips { display: flex; flex-wrap: wrap; gap: 6px; }
.chips .tag-chip { color: var(--text); }
.bubble { position: relative; white-space: pre-wrap; }
.bubble.pending { min-width: 56px; }
.bubble-meta { display: block; font-size: 10px; color: var(--muted); margin-top: 4px; font-variant-numeric: tabular-nums; }
.typing { display: inline-flex; gap: 4px; align-items: center; height: 16px; }
.typing i { width: 6px; height: 6px; border-radius: 50%; background: var(--muted); animation: blink 1s infinite ease-in-out; }
.typing i:nth-child(2) { animation-delay: 0.15s; } .typing i:nth-child(3) { animation-delay: 0.3s; }
@keyframes blink { 0%, 80%, 100% { opacity: 0.3; } 40% { opacity: 1; } }
.cursor { display: inline-block; width: 2px; height: 1em; background: var(--text); vertical-align: text-bottom; margin-left: 2px; animation: blink 0.8s infinite; }
.assistant-mode { font-size: 11px; padding: 4px 9px; border-radius: 10px; background: var(--w10); color: var(--muted); align-self: center; }
.assistant-mode.online { color: var(--ok-strong); }
.mic.on { background: #dc2626; color: #fff; }
.os.eink .typing i, .os.eink .cursor { background: #000; }

.browser-tabs { display: flex; gap: 6px; overflow-x: auto; margin-bottom: 12px; }
.browser-tab { display: flex; flex: none; border-radius: 10px; background: var(--glass); }
.browser-tab.active { box-shadow: inset 0 0 0 1px var(--accent); }
.browser-tab button { padding: 9px; color: var(--text); background: transparent; max-width: 150px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.browser-toolbar { display: flex; gap: 4px; align-items: center; }
.browser-toolbar .field { flex: 1; min-width: 60px; margin: 0; }
.browser-toolbar .btn { padding: 10px 8px; }
.browser-actions { flex-wrap: wrap; margin-top: 10px; }
.browser-help { margin: 12px 0; }
.browser-frame { width: 100%; height: max(380px, 55vh); border: 0; background: white; border-radius: 10px; }
.browser-frame[hidden] { display: none; }
.browser-bookmark { gap: 10px; margin: 10px 0; }
.browser-bookmark-title { min-width: 0; text-align: left; overflow-wrap: anywhere; }
.browser-bookmark-title span { display: block; }

/* ════════════════════════════════════════════════════════════
   Apple design pass (Human Interface Guidelines)
   Clarity, deference, depth. System-gray surfaces, one accent,
   solid high-contrast buttons, springy motion, 44pt touch targets,
   continuous-curve corners, translucent materials, visible focus.
   E-ink and the Performance modes above still override this layer.
   ════════════════════════════════════════════════════════════ */
:root {
  --accent-fill: #6d4aff;          /* solid button fill: white text on it is 5:1 */
  --ease: cubic-bezier(0.32, 0.72, 0, 1);     /* iOS ease-out */
  --spring: cubic-bezier(0.34, 1.56, 0.64, 1); /* small overshoot */
  --surface: #1c1c1e;              /* secondarySystemGroupedBackground */
  --surface-2: #2c2c2e;
  --surface-3: #3a3a3c;
  --fill: rgba(118, 118, 128, 0.24);
  --fill-soft: rgba(118, 118, 128, 0.16);
  --sep: rgba(255, 255, 255, 0.12);
  --green: #30d158;
  --red: #ff453a;
  --muted: rgba(235, 235, 245, 0.62);
  --hairline: rgba(255, 255, 255, 0.12);
  --radius: 14px;
  --font: -apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Inter", "Segoe UI", system-ui, sans-serif;
}

/* Theme tokens. Dark is the default; .os.scheme-light flips them inside app surfaces only,
   so the wallpaper-based home and lock screens keep their white-on-wallpaper look (like iOS). */
:root {
  --bg: #000; --solid: #1c1c1e;
  --mat-window: rgba(30,30,32,0.82); --mat-pop: rgba(44,44,46,0.88); --mat-bar: rgba(28,28,30,0.62); --mat-menu: rgba(0,0,0,0.38); --mat-sheet: rgba(34,34,36,0.8);
  --seg-on: #636366; --light-off: #5d5d62; --placeholder: rgba(235,235,245,0.45);
  --sky: #7dd3fc; --sky-soft: #bae6fd; --sky-hi: #e0f2fe; --violet-soft: #c4b5fd; --violet-hi: #e6ddff;
  --ink-2: #c2c2cc; --ink-3: #d1d5db; --ok: #86efac; --ok-strong: #22c55e; --err: #f87171; --err-soft: #fca5a5;
  --cyan: #67e8f9; --pink-t: #f9a8d4; --amber-t: #fbbf24;
  --w04: rgba(255, 255, 255, 0.04); --w05: rgba(255, 255, 255, 0.05); --w06: rgba(255, 255, 255, 0.06); --w07: rgba(255, 255, 255, 0.07); --w08: rgba(255, 255, 255, 0.08); --w09: rgba(255, 255, 255, 0.09); --w10: rgba(255, 255, 255, 0.10); --w12: rgba(255, 255, 255, 0.12); --w14: rgba(255, 255, 255, 0.14); --w15: rgba(255, 255, 255, 0.15); --w16: rgba(255, 255, 255, 0.16); --w17: rgba(255, 255, 255, 0.17); --w18: rgba(255, 255, 255, 0.18); --w20: rgba(255, 255, 255, 0.20); --w22: rgba(255, 255, 255, 0.22); --w35: rgba(255, 255, 255, 0.35); --w40: rgba(255, 255, 255, 0.40); --w55: rgba(255, 255, 255, 0.55); --w70: rgba(255, 255, 255, 0.70); --w75: rgba(255, 255, 255, 0.75); --w92: rgba(255, 255, 255, 0.92);
}
html { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; text-rendering: optimizeLegibility; }
body { background: #000; letter-spacing: -0.012em; line-height: 1.3; }
h1, h2, h3 { letter-spacing: -0.02em; }
::selection { background: color-mix(in srgb, var(--accent) 45%, transparent); }

/* Focus: always visible for keyboard, never for mouse. */
:focus { outline: none; }
:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
.field:focus-visible { outline: none; }

/* Touch: one tap target size, press feedback on everything pressable. */
button, .btn, .list-row, .app-icon, .tag-chip, .pad-key, .calc-key, .dial-key { transition: transform 0.22s var(--ease), background-color 0.2s ease, opacity 0.2s ease, filter 0.2s ease; }
button:active:not(:disabled) { transform: scale(0.97); }
.app-icon:active, .pad-key:active, .calc-key:active, .dial-key:active { transform: scale(0.94); }
@media (pointer: coarse) {
  .btn { min-height: 44px; }
  .segmented button { min-height: 36px; }
  .toggle-row, .kv { min-height: 44px; }
}

/* Buttons: solid fill, high contrast, no ghosts (design system #12). */
.btn { display: inline-flex; align-items: center; justify-content: center; gap: 6px; min-height: 36px; padding: 9px 18px; border-radius: 12px; background: var(--accent-fill); color: #fff; font-size: 15px; font-weight: 600; letter-spacing: -0.01em; }
.btn.ghost { background: var(--surface-3); color: var(--text); }
.btn.danger { background: #d70015; color: #fff; }
@media (hover: hover) {
  .btn:hover:not(:disabled) { filter: brightness(1.12); }
  .list-row:hover { background: var(--surface-2); }
  .menu-btn:hover { background: var(--fill); }
}
.btn:active { opacity: 1; filter: brightness(0.9); }
.text-btn { color: var(--accent); font-size: 17px; }

/* Grouped surfaces. */
.app-full { background: var(--bg); }
.glass-card { --card: var(--surface); background: var(--card); border: 0; border-radius: var(--radius); padding: 12px 16px; }
.window { --card: var(--surface-2); }
.list-row { background: var(--card, var(--surface)); border: 0; border-radius: 12px; padding: 13px 16px; transition: background-color 0.15s ease, transform 0.22s var(--ease); }
.list-row:active { background: var(--surface-3); transform: scale(0.99); }
.list-title { font-size: 16px; font-weight: 600; letter-spacing: -0.015em; }
.kv, .toggle-row { border-bottom: 0.5px solid var(--sep); }
.kv:last-child, .toggle-row:last-child { border: 0; }
.section { margin-top: 24px; }
.section-label { font-size: 13px; font-weight: 400; text-transform: uppercase; letter-spacing: 0.01em; color: var(--muted); margin: 0 16px 7px; }
.note-meta, .bubble-meta { color: var(--muted); }

/* Large title header (iOS). */
.app-header { padding: 6px 20px 10px; min-height: 52px; }
.app-header h1 { font-size: 34px; font-weight: 700; letter-spacing: -0.026em; line-height: 1.1; }
.window .app-header h1 { font-size: 26px; }
.workspace-subtitle { font-size: 13px; margin-top: 2px; }
.app-body { padding: 4px 20px 40px; }

/* Segmented control + workspace tabs. */
.segmented { background: var(--fill); border-radius: 9px; padding: 2px; gap: 0; }
.segmented button { min-height: 30px; border-radius: 7px; font-size: 13px; font-weight: 500; letter-spacing: -0.01em; transition: background-color 0.25s var(--ease), box-shadow 0.25s var(--ease); }
.segmented button.on { background: var(--seg-on); color: var(--text); font-weight: 600; box-shadow: 0 3px 8px rgba(0,0,0,0.12), 0 3px 1px rgba(0,0,0,0.04); }
.workspace-nav { gap: 8px; padding: 2px 20px 12px; border-bottom: 0.5px solid var(--sep); }
.workspace-nav button { min-height: 32px; padding: 6px 14px; border-radius: 16px; font-size: 14px; font-weight: 500; color: var(--text); background: var(--fill); }
.workspace-nav button.active { background: var(--accent-fill); color: #fff; box-shadow: none; }
.tag-chip { background: var(--fill); }
.tag-chip.active, .day-picker button.on { background: var(--accent-fill); color: #fff; }
.mood.selected { background: var(--accent-fill); }

/* Inputs. */
.field { background: var(--fill); border: 0; border-radius: 10px; padding: 11px 14px; font-size: 17px; transition: box-shadow 0.2s var(--ease), background-color 0.2s ease; }
.field::placeholder { color: var(--placeholder); }
.field:focus { box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 38%, transparent); }
.search-input-wrap:focus-within, .finder-search-wrap:focus-within { box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 30%, transparent); }
.bubble { border-radius: 20px; font-size: 16px; }
.bubble.user { background: var(--accent-fill); color: #fff; }
.bubble.assistant { background: var(--surface-2); }
.bubble.sms-out { background: #30a14e; color: #fff; }
.chat-input { background: linear-gradient(transparent, var(--bg) 35%); }

/* Switch: iOS green, springy knob. */
.switch.on, .switch input:checked + span { background: var(--green); }
.switch::after, .switch span::after { box-shadow: 0 3px 8px rgba(0,0,0,0.15), 0 1px 1px rgba(0,0,0,0.16); transition: transform 0.3s var(--spring); }

/* App icons: squircle, soft gloss, tight shadow stack. */
.icon-tile { position: relative; overflow: hidden; border-radius: 22.37%; box-shadow: 0 1px 2px rgba(0,0,0,0.35), 0 6px 14px rgba(0,0,0,0.28), inset 0 0.5px 0 rgba(255,255,255,0.4), inset 0 -0.5px 0 rgba(0,0,0,0.22); transition: transform 0.3s var(--spring), filter 0.2s ease; }
.icon-tile::before { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(255,255,255,0.24), rgba(255,255,255,0) 52%); pointer-events: none; }
.icon-tile:not(.tinted-icon) { text-shadow: 0 1px 2px rgba(0,0,0,0.25); }
@supports (corner-shape: squircle) { .icon-tile { corner-shape: squircle; border-radius: 34%; } }
.icon-label { font-size: 12px; font-weight: 500; letter-spacing: -0.005em; text-shadow: 0 1px 4px rgba(0,0,0,0.55); }
.os.eink .icon-tile::before { display: none; }

/* Home screen. */
.home-grid { gap: 24px 8px; padding: 12px 20px 26px; }
.home-search { min-height: 44px; border: 0; border-radius: 14px; background: var(--w16); backdrop-filter: blur(20px) saturate(1.6); -webkit-backdrop-filter: blur(20px) saturate(1.6); font-size: 16px; color: var(--muted); }
.dock { margin: 0 12px max(24px, calc(env(safe-area-inset-bottom) + 12px)); padding: 12px 14px; border-radius: 32px; background: var(--w18); border: 0.5px solid var(--w14); backdrop-filter: blur(30px) saturate(1.8); -webkit-backdrop-filter: blur(30px) saturate(1.8); }
.clock-widget { border: 0; border-radius: 22px; background: var(--w16); backdrop-filter: blur(30px) saturate(1.8); -webkit-backdrop-filter: blur(30px) saturate(1.8); }
.status-bar { padding-top: max(14px, env(safe-area-inset-top)); font-weight: 600; letter-spacing: -0.01em; }
.app-full { animation: openApp 0.4s var(--ease); }
.home-grid { animation: zoomIn 0.4s var(--ease); }
@keyframes openApp { from { opacity: 0; transform: scale(0.86) translateY(28px); border-radius: 44px; } }
@keyframes openWin { from { opacity: 0; transform: scale(0.95); } }
@keyframes toastIn { from { opacity: 0; transform: translate(-50%, -14px) scale(0.96); } }
@keyframes sheetIn { from { opacity: 0; transform: translateY(14px) scale(0.98); } }

/* App switcher. */
.switcher { background: rgba(0,0,0,0.42); backdrop-filter: blur(40px) saturate(1.5); -webkit-backdrop-filter: blur(40px) saturate(1.5); }
.switcher-preview { border: 0.5px solid var(--hairline); border-radius: 30px; box-shadow: 0 18px 50px rgba(0,0,0,0.45); }
.switcher-head { font-size: 14px; font-weight: 600; }
.close-x { background: var(--w22); }

/* Lock screen. */
.lock-date { font-size: 21px; font-weight: 600; letter-spacing: -0.01em; opacity: 0.9; }
.lock-time { font-weight: 700; letter-spacing: -0.045em; text-shadow: 0 2px 30px rgba(0,0,0,0.25); }
.lock-hint { font-size: 15px; font-weight: 500; }
.pad-key { background: var(--w18); font-weight: 300; font-size: 34px; transition: background-color 0.4s ease, transform 0.22s var(--ease); }
.pad-key:active { background: var(--w55); transition: none; }
.passcode-title { font-size: 21px; font-weight: 600; }
.dots span { transition: background-color 0.12s ease, transform 0.2s var(--spring); }
.dots span.on { transform: scale(1.1); }

/* Desktop: macOS-style menu bar, windows, taskbar-as-dock. */
.menu-bar { background: var(--mat-menu); backdrop-filter: blur(30px) saturate(1.8); -webkit-backdrop-filter: blur(30px) saturate(1.8); font-weight: 500; letter-spacing: -0.005em; border-bottom: 0.5px solid var(--w08); }
.menu-left strong { font-weight: 700; }
.menu-btn { border-radius: 6px; padding: 3px 9px; }
.window { border: 0.5px solid var(--w16); border-radius: 12px; background: var(--mat-window); backdrop-filter: blur(50px) saturate(1.8); -webkit-backdrop-filter: blur(50px) saturate(1.8); box-shadow: 0 0 0 0.5px rgba(0,0,0,0.65), 0 24px 70px rgba(0,0,0,0.5), 0 8px 22px rgba(0,0,0,0.3); animation: openWin 0.3s var(--ease); }
.window:not(.focused) { box-shadow: 0 0 0 0.5px rgba(0,0,0,0.55), 0 10px 28px rgba(0,0,0,0.28); }
.titlebar { height: 38px; background: var(--w04); border-bottom: 0.5px solid var(--w08); }
.title { font-size: 13px; font-weight: 600; letter-spacing: -0.005em; }
.lights { gap: 8px; }
.light { position: relative; width: 12px; height: 12px; padding: 0; box-shadow: inset 0 0 0 0.5px rgba(0,0,0,0.22); }
.light::after { position: absolute; inset: 0; display: grid; place-items: center; font-size: 9px; font-weight: 800; line-height: 12px; text-align: center; color: rgba(0,0,0,0.6); opacity: 0; transition: opacity 0.12s ease; }
.light.red::after { content: "×"; font-size: 12px; }
.light.yellow::after { content: "−"; font-size: 12px; }
.lights:hover .light::after, .light:focus-visible::after { opacity: 1; }
.window:not(.focused) .light.red, .window:not(.focused) .light.yellow { background: var(--light-off); }
.window:not(.focused) .lights:hover .light.red { background: #ff5f57; }
.window:not(.focused) .lights:hover .light.yellow { background: #febc2e; }
.os.eink .window:not(.focused) .light { background: #fff; }
.taskbar { height: 56px; background: var(--mat-bar); backdrop-filter: blur(40px) saturate(1.8); -webkit-backdrop-filter: blur(40px) saturate(1.8); border-top: 0.5px solid var(--w10); }
.desktop-area { bottom: 56px; }
.start-btn { border-radius: 10px; background: var(--accent-fill); box-shadow: 0 1px 2px rgba(0,0,0,0.3), inset 0 0.5px 0 rgba(255,255,255,0.35); transition: transform 0.3s var(--spring); }
.task-item { padding: 3px 4px; transition: transform 0.3s var(--spring), background-color 0.15s ease; }
@media (hover: hover) {
  .task-item:hover { transform: translateY(-4px) scale(1.14); background: transparent; }
  .task-item:hover + .task-item, .task-item:has(+ .task-item:hover) { transform: translateY(-1px) scale(1.06); }
}
.task-item.active::after { background: var(--text); }
.tray { gap: 10px; font-size: 12px; font-weight: 500; }
.start-menu { bottom: 66px; border: 0.5px solid var(--w14); border-radius: 22px; background: var(--mat-sheet); backdrop-filter: blur(50px) saturate(1.8); -webkit-backdrop-filter: blur(50px) saturate(1.8); box-shadow: 0 0 0 0.5px rgba(0,0,0,0.6), 0 30px 80px rgba(0,0,0,0.5); animation: sheetIn 0.28s var(--ease); transform-origin: bottom left; }
.start-search { min-height: 38px; background: var(--fill); border: 0; border-radius: 10px; font-size: 15px; }
.start-search:focus { box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 38%, transparent); }
.desktop-area > .clock-widget { border: 0.5px solid var(--w12); }

/* Alerts, toasts, sheets (iOS). */
.scrim { background: rgba(0,0,0,0.4); backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px); }
.alert { width: 280px; border-radius: 16px; background: var(--mat-pop); backdrop-filter: blur(50px) saturate(1.8); -webkit-backdrop-filter: blur(50px) saturate(1.8); box-shadow: 0 20px 60px rgba(0,0,0,0.45); animation: pop 0.3s var(--spring); }
.alert h3 { font-size: 17px; font-weight: 600; padding: 20px 18px 4px; letter-spacing: -0.02em; }
.alert p { padding: 0 18px 18px; }
.alert-actions { border-top: 0.5px solid var(--sep); }
.alert-actions button { min-height: 46px; font-size: 17px; border-radius: 0; }
.alert-actions button + button { border-left: 0.5px solid var(--sep); }
.alert-actions button:active { background: var(--w10); transform: none; }
.toast { top: 54px; padding: 11px 20px; border-radius: 24px; background: var(--mat-pop); backdrop-filter: blur(40px) saturate(1.8); -webkit-backdrop-filter: blur(40px) saturate(1.8); font-size: 14px; font-weight: 500; box-shadow: 0 10px 40px rgba(0,0,0,0.4); animation: toastIn 0.4s var(--spring); }
.handoff-banner { border: 0; border-radius: 22px; background: var(--mat-pop); animation: toastIn 0.4s var(--spring); }
.smart-search { border: 0.5px solid var(--w14); border-radius: 22px; background: var(--mat-sheet); backdrop-filter: blur(50px) saturate(1.8); -webkit-backdrop-filter: blur(50px) saturate(1.8); }
.search-input-wrap, .finder-search-wrap { background: var(--fill); border: 0; border-radius: 12px; }
.search-result { border-radius: 10px; }
.search-result.selected { background: var(--accent-fill); border-color: transparent; }
.search-result.selected .search-result-copy > span, .search-result.selected .search-preview, .search-result.selected .search-result-arrow { color: rgba(255,255,255,0.82); }

/* Progress and spinners. */
.bar { height: 6px; border-radius: 3px; background: var(--fill); }
.bar span { border-radius: 3px; background: var(--accent); transition: width 0.4s var(--ease); }
.spinner { width: 24px; height: 24px; border-width: 2.5px; }


/* ── Light appearance ─────────────────────────────────────── */
.os.scheme-light :is(.app-full, .window, .alert, .smart-search, .finder-preview, .start-menu, .taskbar, .menu-bar, .toast, .handoff-banner, .scrim) {
  color-scheme: light; color: var(--text);
  --text: #000; --muted: rgba(60, 60, 67, 0.72); --hairline: rgba(60, 60, 67, 0.18); --sep: rgba(60, 60, 67, 0.16);
  --bg: #f2f2f7; --solid: #ffffff; --surface: #ffffff; --surface-2: #ffffff; --surface-3: #e5e5ea;
  --fill: rgba(120, 120, 128, 0.16); --fill-soft: rgba(120, 120, 128, 0.1);
  --glass: rgba(255, 255, 255, 0.7); --glass-strong: rgba(255, 255, 255, 0.9);
  --mat-window: rgba(246,246,248,0.86); --mat-pop: rgba(255,255,255,0.88); --mat-bar: rgba(246,246,248,0.72); --mat-menu: rgba(246,246,248,0.62); --mat-sheet: rgba(250,250,252,0.92);
  --seg-on: #ffffff; --light-off: #c8c8cd; --placeholder: rgba(60, 60, 67, 0.5);
  --sky: #0369a1; --sky-soft: #075985; --sky-hi: #0c4a6e; --violet-soft: #5b21b6; --violet-hi: #4c1d95;
  --ink-2: #48484a; --ink-3: #3a3a3c; --ok: #15803d; --ok-strong: #15803d; --err: #c62828; --err-soft: #b91c1c;
  --cyan: #0e7490; --pink-t: #be185d; --amber-t: #b45309;
  --w04: rgba(0, 0, 0, 0.029); --w05: rgba(0, 0, 0, 0.036); --w06: rgba(0, 0, 0, 0.043); --w07: rgba(0, 0, 0, 0.05); --w08: rgba(0, 0, 0, 0.058); --w09: rgba(0, 0, 0, 0.065); --w10: rgba(0, 0, 0, 0.072); --w12: rgba(0, 0, 0, 0.086); --w14: rgba(0, 0, 0, 0.101); --w15: rgba(0, 0, 0, 0.108); --w16: rgba(0, 0, 0, 0.115); --w17: rgba(0, 0, 0, 0.122); --w18: rgba(0, 0, 0, 0.13); --w20: rgba(0, 0, 0, 0.144); --w22: rgba(0, 0, 0, 0.158); --w35: rgba(0, 0, 0, 0.252); --w40: rgba(0, 0, 0, 0.288); --w55: rgba(0, 0, 0, 0.396); --w70: rgba(0, 0, 0, 0.504); --w75: rgba(0, 0, 0, 0.54); --w92: rgba(0, 0, 0, 0.662);
}
.os.scheme-light .window { box-shadow: 0 0 0 0.5px rgba(0,0,0,0.18), 0 24px 70px rgba(0,0,0,0.22), 0 8px 22px rgba(0,0,0,0.12); }
.os.scheme-light .window:not(.focused) { box-shadow: 0 0 0 0.5px rgba(0,0,0,0.14), 0 10px 28px rgba(0,0,0,0.14); }
.os.scheme-light .titlebar { background: rgba(255,255,255,0.4); }
.os.scheme-light .app-full .icon-tile, .os.scheme-light .taskbar .icon-tile { box-shadow: 0 1px 2px rgba(0,0,0,0.25), 0 4px 10px rgba(0,0,0,0.16), inset 0 0.5px 0 rgba(255,255,255,0.5); }
.os.scheme-light .smart-search::backdrop, .os.scheme-light .finder-preview::backdrop { background: rgba(0,0,0,0.3); }
.os.scheme-light .calc-key { color: var(--text); }
.os.scheme-light .tag-chip.active, .os.scheme-light .workspace-nav button.active, .os.scheme-light .btn, .os.scheme-light .btn.danger, .os.scheme-light .bubble.user, .os.scheme-light .search-result.selected, .os.scheme-light .day-picker button.on { color: #fff; }
.os.scheme-light .btn.ghost { color: var(--text); }
.os.scheme-light .alert-actions button:active { background: rgba(0,0,0,0.08); }
.os.scheme-light .task-item.active { background: rgba(0,0,0,0.1); }
.os.scheme-light .task-item:hover { background: transparent; }
.os.scheme-light .start-btn { color: #fff; }
.os.scheme-light .menu-btn:hover { background: rgba(0,0,0,0.08); }

.accent-preview { display: flex; align-items: center; gap: 18px; margin: 4px 0 12px; }
.accent-link { color: var(--accent); font-weight: 600; }
.accent-preview .switch { display: inline-block; }
.tint-swatch.selected { outline-color: var(--text); }
.passcode .text-btn { color: #fff; }

/* ════════════════════════════════════════════════════════════
   App polish: lists, empty states, controls, and per-app looks
   ════════════════════════════════════════════════════════════ */
.btn.compact { min-height: 32px; padding: 6px 14px; font-size: 14px; border-radius: 16px; }
.btn.compact.ghost { background: var(--fill); color: var(--text); }
.app-actions .btn { min-height: 34px; padding: 7px 15px; font-size: 14px; border-radius: 17px; }
.app-actions .btn.ghost { background: var(--fill); color: var(--text); }
.icon-btn { display: inline-grid; place-items: center; flex: none; width: 40px; height: 40px; border-radius: 12px; color: var(--accent); text-decoration: none; }
.icon-btn:disabled { color: var(--muted); opacity: 0.4; }
.icon-btn.on .icon path { fill: currentColor; }
@media (hover: hover) { .icon-btn:hover:not(:disabled) { background: var(--fill); } }

/* Inset grouped lists: rows share one rounded surface, separated by hairlines. */
.list { gap: 0; border-radius: var(--radius); overflow: hidden; background: var(--card, var(--surface)); }
.glass-card .list { margin: 0 -16px; border-radius: 0; background: transparent; }
.list > .list-row { border-radius: 0; background: transparent; border-bottom: 0.5px solid var(--sep); padding: 12px 16px; }
.list > .list-row:last-child { border-bottom: 0; }
.list > .list-row:active { background: var(--fill-soft); transform: none; }
.list > .list-row.playing { background: color-mix(in srgb, var(--accent) 14%, transparent); }
.glass-card .list > :not(.list-row) { margin-left: 16px; margin-right: 16px; }
.list.card-list { gap: 12px; overflow: visible; background: transparent; }
.list.card-list > .list-row { border: 0; border-radius: 18px; padding: 16px; }

/* Empty states */
.empty-state, .finder-empty, .journal-empty { display: flex; flex-direction: column; align-items: center; gap: 8px; text-align: center; padding: 48px 28px 40px; }
.empty-icon, .journal-mark { display: grid; place-items: center; width: 68px; height: 68px; border-radius: 50%; background: var(--fill); color: var(--muted); margin-bottom: 6px; }
.journal-mark { background: color-mix(in srgb, var(--accent) 20%, transparent); color: var(--accent); }
.empty-state strong, .finder-empty strong, .journal-empty strong { font-size: 20px; font-weight: 700; letter-spacing: -0.02em; }
.empty-state p, .finder-empty p, .journal-empty p { color: var(--muted); font-size: 15px; line-height: 1.4; max-width: 300px; }
.finder-empty > span { display: grid; place-items: center; color: var(--accent); font-size: 0; }
.finder-empty p { font-size: 15px; }

/* Native file pickers and drop zones */
input[type="file"] { font-size: 14px; color: var(--muted); max-width: 100%; }
input[type="file"]::file-selector-button { margin-right: 12px; padding: 9px 16px; border: 0; border-radius: 12px; background: var(--accent-fill); color: #fff; font: inherit; font-weight: 600; cursor: pointer; }
.unzip-drop, .duplicate-drop, .file-drop { border: 1.5px dashed color-mix(in srgb, var(--accent) 55%, transparent); border-radius: 18px; background: color-mix(in srgb, var(--accent) 6%, transparent); }
.unzip-glyph { display: grid; place-items: center; color: var(--accent); font-size: 0; }

/* Browser */
.address-bar { margin: 2px 0 10px; }
.address-pill { display: flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 4px 0 14px; border-radius: 14px; background: var(--fill); color: var(--muted); transition: box-shadow 0.2s var(--ease); }
.address-pill:focus-within { box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 38%, transparent); }
.address-input { flex: 1; min-width: 0; border: 0; outline: 0; background: transparent; font-size: 16px; color: var(--text); padding: 10px 0; user-select: text; -webkit-user-select: text; }
.address-input::placeholder { color: var(--placeholder); }
.address-go { padding: 6px 13px; border-radius: 10px; background: var(--accent-fill); color: #fff; font-weight: 600; font-size: 14px; }
.address-pill .icon-btn { width: 36px; height: 36px; }
.browser-tabs { gap: 6px; align-items: center; margin-bottom: 6px; }
.browser-tab { display: flex; align-items: center; border-radius: 10px; background: var(--fill-soft); }
.browser-tab.active { background: var(--fill); box-shadow: inset 0 0 0 1.5px var(--accent); }
.browser-tab button { padding: 8px 10px; font-size: 13px; font-weight: 500; }
.browser-tab button + button { padding: 8px 8px 8px 0; color: var(--muted); display: grid; place-items: center; }
.browser-toolbar { display: flex; align-items: center; gap: 2px; flex-wrap: wrap; margin-bottom: 8px; }
.browser-toolbar .btn.compact { padding: 6px 12px; }
.toolbar-spacer { flex: 1; }
.browser-frame { border-radius: 14px; }

/* Calculator: iOS keypad. Function keys on top, operators on the right. */
.calc-display { padding: 8px 8px 18px; }
.calc-expression { font-size: 18px; text-align: right; }
.calc-result { font-size: clamp(54px, 13vh, 88px); font-weight: 300; letter-spacing: -0.03em; font-variant-numeric: tabular-nums; line-height: 1.05; }
.calc-grid { gap: 12px; max-height: none; grid-auto-rows: minmax(54px, 1fr); }
.calc-key { border-radius: 999px; background: var(--surface-3); color: var(--text); font-size: 28px; font-weight: 400; aspect-ratio: auto; min-height: 54px; }
.calc-key:nth-child(-n+3), .calc-key:nth-child(17) { background: var(--fill); font-size: 24px; }
.calc-key:nth-child(4n) { background: var(--accent-fill); color: #fff; font-size: 32px; }
.calc-key:active { filter: brightness(1.35); transform: scale(0.96); }

/* Phone */
.dial-key { background: var(--w10); }
.call-btn { display: grid; place-items: center; background: #1f9d46; color: #fff; box-shadow: 0 6px 20px rgba(31,157,70,0.35); }
.call-btn:disabled { opacity: 0.35; box-shadow: none; }
.dial-display { font-weight: 300; }

/* Settings and forms */
.layout-preview span { background: var(--accent-fill); color: #fff; }
.tint-swatch { box-shadow: inset 0 0 0 1px rgba(0,0,0,0.12); }
.kv span:last-child { text-align: right; }
.chips .tag-chip { background: var(--fill); }
.driver-status { background: var(--fill); }

.app-loading { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 14px; color: var(--muted); font-size: 15px; }

.map-btn { display: grid; place-items: center; min-width: 44px; min-height: 44px; padding: 0; border-radius: 14px; box-shadow: 0 4px 14px rgba(0,0,0,0.3); }
.maps-sheet { border-radius: 20px; border: 0; }

.btn.on .icon path { fill: currentColor; }
.btn .icon, .menu-btn .icon, .player-play .icon { display: inline-block; vertical-align: -3px; }
.player-controls .btn.ghost { display: inline-flex; align-items: center; gap: 4px; }
.player-play { display: grid; place-items: center; }
.check { display: grid; place-items: center; }
.voice-orb, .mic { display: grid; place-items: center; }
.btn.rec { display: inline-flex; align-items: center; justify-content: center; gap: 8px; }

.phone-shell .chat-input { padding-bottom: 22px; }

/* Line icons */
.icon { display: block; flex: none; }
.icon-tile .icon { filter: drop-shadow(0 1px 1.5px rgba(0,0,0,0.28)); }
.menu-btn { display: inline-flex; align-items: center; gap: 5px; }
.home-search .icon, .search-input-wrap .icon { opacity: 0.85; }
.search-input-wrap > span, .search-empty > span { display: grid; place-items: center; }
.search-close { display: grid; place-items: center; }
.folder-preview span { display: grid; place-items: center; }
.clock-widget-heading, .clock-widget-date { color: rgba(255,255,255,0.82); }
.clock-widget-heading .icon { opacity: 0.9; }
.clock-widget-arrow { display: grid; }
.volume-icon { display: grid; place-items: center; }
.signal { display: inline-flex; }
.os.eink .icon-tile .icon { filter: none; }

/* Restore the Performance modes over this layer. */
.os.reduce-transparency .home-search, .os.reduce-transparency .clock-widget { background: var(--surface-2); }
.os.reduce-transparency .alert, .os.reduce-transparency .toast, .os.reduce-transparency .handoff-banner, .os.reduce-transparency .smart-search, .os.reduce-transparency .start-menu, .os.reduce-transparency .window { background: var(--solid); }
.os.reduce-transparency .taskbar, .os.reduce-transparency .menu-bar { background: var(--solid); }
.os.eink .btn.ghost, .os.eink .btn.danger { background: #fff; color: #000; }
.os.eink .bubble.user, .os.eink .search-result.selected, .os.eink .workspace-nav button.active { background: #000; color: #fff; }
.os.eink .workspace-nav button { background: #fff; color: #000; border: 1px solid #000; }

/* Veynor everyday design: BetterMade's grouped surfaces and CARSPOTZ's restrained contrast. */
:root { --bg: #0a0a0d; --surface: #17171c; --surface-2: #202026; --surface-3: #2b2b33; --muted: #aaaab4; --hairline: rgba(255,255,255,.10); --radius: 18px; }
.os { color: var(--text); }
.os.scheme-light { --text: #18181d; --muted: #62626d; --bg: #f5f5f7; --surface: #fff; --surface-2: #fff; --surface-3: #e8e8ed; --fill: rgba(60,60,67,.08); --fill-soft: rgba(60,60,67,.05); --hairline: rgba(30,30,40,.12); }
button:disabled { cursor: default; opacity: .5; }
button, a, input, select, textarea { touch-action: manipulation; }
.btn { border-radius: 11px; min-height: 40px; font-size: 14px; padding: 10px 16px; }
.btn.ghost { border: 1px solid var(--hairline); background: var(--fill-soft); }
.row.gap { flex-wrap: wrap; }
.field { border-radius: 11px; border-color: var(--hairline); line-height: 1.45; }
input::placeholder, textarea::placeholder { color: var(--muted); opacity: .9; }
input[type="range"] { accent-color: var(--accent); }
input[type="checkbox"] { accent-color: var(--accent-fill); width: 18px; height: 18px; }
.app-header { padding: 18px 24px 16px; gap: 12px; align-items: center; border-bottom: 1px solid var(--hairline); }
.app-header > div:first-child { min-width: 0; }
.app-header h1 { font-size: 28px; line-height: 1.15; }
.window .app-header h1 { font-size: 24px; }
.app-actions { flex-wrap: wrap; justify-content: flex-end; }
.app-body { padding: 4px 24px 32px; gap: 0; scrollbar-width: thin; scrollbar-color: var(--hairline) transparent; }
.app-body::-webkit-scrollbar { display: block; width: 6px; }
.app-body::-webkit-scrollbar-thumb { border-radius: 8px; background: var(--hairline); }
.section { margin-top: 22px; }
.section-label { margin-left: 2px; margin-bottom: 9px; text-transform: none; font-size: 14px; font-weight: 600; letter-spacing: 0; color: var(--text); }
.glass-card { border: 1px solid var(--hairline); border-radius: 18px; padding: 16px; }
.workspace-nav { gap: 4px; padding: 10px 20px; background: var(--fill-soft); scrollbar-width: thin; }
.workspace-nav button { background: transparent; color: var(--muted); padding: 9px 12px; min-height: 36px; border-radius: 9px; }
.workspace-nav button.active { background: var(--surface-3); color: var(--text); box-shadow: inset 0 0 0 1px var(--hairline); font-weight: 600; }
.os.scheme-light .workspace-nav button.active { color: var(--text); }
.titlebar { height: 44px; border-bottom: 1px solid var(--hairline); }
.window { border-radius: 18px; background: var(--bg); backdrop-filter: none; -webkit-backdrop-filter: none; }
.window .titlebar { background: var(--fill-soft); }
.title { font-weight: 500; }
.light { width: 20px; height: 20px; background-clip: content-box; padding: 4px; box-shadow: none; }
.light::after { line-height: 20px; }
.home-eyebrow { font: 600 10px/1.2 ui-monospace, SFMono-Regular, Menlo, monospace; letter-spacing: .22em; color: var(--muted); }
.desktop-home { position: absolute; inset: 36px 32px 24px; display: grid; place-items: center; overflow-y: auto; scrollbar-width: thin; padding: 24px; }
.home-launcher { width: min(100%, 560px); padding: clamp(24px, 5vw, 48px); border: 1px solid var(--hairline); border-radius: 22px; background: color-mix(in srgb, var(--surface) 94%, transparent); box-shadow: 0 16px 42px rgb(20 24 18 / 7%), inset 0 1px 0 rgb(255 255 255 / 45%); }
.home-overview { display: grid; grid-template-columns: 1fr 280px; align-items: center; gap: 40px; margin-bottom: 30px; }
.home-welcome h1 { margin: 12px 0 8px; font-size: clamp(32px, 3.6vw, 46px); font-weight: 600; letter-spacing: -.045em; line-height: 1.1; }
.home-welcome > p { color: var(--muted); font-size: 15px; }
.home-launcher h1 { margin: 12px 0 8px; font-size: clamp(34px, 5vw, 48px); font-weight: 600; letter-spacing: -.045em; line-height: 1.1; }
.home-launcher > p { color: var(--muted); font-size: 15px; }
.home-search-launch { display: flex; align-items: center; gap: 12px; margin-top: 24px; padding: 14px 16px; width: min(100%, 450px); background: var(--surface); color: var(--muted); border: 1px solid var(--hairline); border-radius: 12px; text-align: left; min-height: 48px; }
.home-launcher .home-search-launch { width: 100%; min-height: 68px; margin-top: 28px; color: var(--text); box-shadow: inset 0 1px 0 rgb(255 255 255 / 50%); }
.home-search-copy { display: grid; gap: 3px; }
.home-search-copy strong { font-size: 14px; font-weight: 600; }
.home-search-copy small { color: var(--muted); font-size: 12px; }
.home-search-launch kbd { margin-left: auto; font: 10px var(--font); white-space: nowrap; opacity: .8; }
.home-launcher-hint { margin: 18px 2px 0; font-size: 12px !important; }
.home-app-group { margin: 26px 0; }
.home-app-group h2 { font-size: 14px; font-weight: 600; margin-bottom: 12px; color: var(--muted); }
.home-app-cards { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; }
.home-app-card { display: flex; align-items: center; gap: 13px; padding: 17px 16px; background: var(--surface); border: 1px solid var(--hairline); border-radius: 16px; text-align: left; min-height: 84px; }
.home-card-glyph { display: grid; place-items: center; flex: none; width: 46px; height: 46px; border-radius: 12px; background: var(--fill-soft); }
.home-card-copy { display: flex; flex-direction: column; min-width: 0; gap: 5px; flex: 1; }
.home-card-copy strong { font-size: 15px; font-weight: 600; }
.home-card-copy > span { color: var(--muted); font-size: 12px; line-height: 1.35; }
.home-app-card > .icon { color: var(--muted); opacity: .6; }
.clock-widget { background: var(--surface); color: var(--text); border-radius: 20px; box-shadow: none; backdrop-filter: none; -webkit-backdrop-filter: none; padding: 20px; }
.clock-widget-heading, .clock-widget-date { color: var(--muted); }
.clock-widget-time { color: var(--text); font-size: 44px; font-weight: 500; line-height: 1.1; letter-spacing: -.03em; }
.clock-widget-heading .icon { color: var(--accent); }
.desktop-home .clock-widget { min-width: 0; }
.phone-home-heading { grid-column: 1 / -1; padding: 4px 2px 0; }
.phone-home-heading h1 { font-size: 30px; font-weight: 600; letter-spacing: -.04em; margin: 8px 0; }
.phone-home-heading p { color: var(--muted); font-size: 13px; }
.phone-shell .home-grid { gap: 22px 12px; padding: 24px; }
.phone-shell.tablet .home-grid { max-width: 1040px; width: 100%; margin: 0 auto; padding: 32px 48px; }
.icon-label { color: var(--text); text-shadow: none; font-size: 12px; font-weight: 500; }
.status-bar { color: var(--text); }
.home-search { color: var(--muted); background: var(--surface); border: 1px solid var(--hairline); min-height: 44px; }
.dock { background: var(--fill-soft); border: 1px solid var(--hairline); }
.menu-bar { height: 36px; background: var(--surface); color: var(--text); backdrop-filter: none; -webkit-backdrop-filter: none; border-bottom: 1px solid var(--hairline); }
.desktop-area { top: 36px; }
.taskbar { background: var(--surface); border-color: var(--hairline); }
.start-menu { background: var(--bg); border: 1px solid var(--hairline); border-radius: 20px; }
.settings-layout { display: grid; grid-template-columns: 182px minmax(0, 1fr); gap: 24px; flex: 1; min-height: 0; }
.app-body:has(> .settings-layout) { padding: 0; overflow: hidden; }
.settings-categories { padding: 20px 10px; border-right: 1px solid var(--hairline); background: var(--fill-soft); overflow-y: auto; }
.settings-categories button { width: 100%; display: flex; align-items: center; gap: 10px; text-align: left; padding: 12px 9px; border-radius: 10px; font-size: 12px; min-height: 44px; color: var(--muted); }
.settings-categories button > span:nth-child(2) { flex: 1; }
.settings-category-icon { display: grid; place-items: center; color: var(--muted); }
.settings-categories button.selected { background: var(--surface-3); color: var(--text); font-weight: 600; }
.settings-categories button.selected .settings-category-icon { color: var(--accent); }
.settings-content { padding: 24px 24px 32px 0; overflow-y: auto; min-width: 0; scrollbar-width: thin; }
.settings-category-heading h2 { font-size: 23px; font-weight: 600; letter-spacing: -.03em; }
.settings-category-heading p { margin-top: 5px; font-size: 13px; color: var(--muted); }
.settings-group[hidden], .workspace-panel[hidden] { display: none !important; }
@media (hover: hover) { .home-app-card:hover, .home-search-launch:hover { border-color: color-mix(in srgb, var(--accent) 50%, var(--hairline)); background: var(--surface-2); } .settings-categories button:hover { background: var(--fill); } }
@media (max-width: 1099px) { .settings-layout { grid-template-columns: 1fr; gap: 0; } .settings-categories { display: flex; gap: 5px; padding: 12px 16px; border-right: 0; border-bottom: 1px solid var(--hairline); overflow-x: auto; flex: none; } .settings-categories button { width: auto; white-space: nowrap; flex: none; font-size: 12px; } .settings-categories button > .icon { display: none; } .settings-content { padding: 20px 20px 32px; } .app-header { padding: 16px 20px; } }
@media (pointer: coarse) { .btn, .text-btn, .menu-btn, .workspace-nav button, .segmented button { min-height: 44px; } }
@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: .001ms !important; transition-duration: .001ms !important; scroll-behavior: auto !important; } }
.os.eink .home-app-card, .os.eink .home-search-launch, .os.eink .clock-widget, .os.eink .settings-categories button.selected { color: #000; background: #fff; border: 1px solid #000; }
.os.eink .home-card-glyph { color: #000 !important; }
.os.eink .home-launcher { background: #fff; border: 1px solid #000; box-shadow: none; }
.os.eink .clock-widget-time, .os.eink .clock-widget-heading, .os.eink .clock-widget-date { color: #000; }

.home-overview > .clock-widget { grid-column: auto; }
.app-page { container-type: inline-size; container-name: app-content; }
@container app-content (max-width: 620px) {
  .settings-layout { grid-template-columns: 1fr; gap: 0; }
  .settings-categories { display: flex; gap: 5px; padding: 12px; border-right: 0; border-bottom: 1px solid var(--hairline); overflow-x: auto; }
  .settings-categories button { width: auto; white-space: nowrap; flex: none; }
  .settings-categories button > .icon { display: none; }
  .settings-content { padding: 20px; }
}
.os.scheme-light .home-bar { background: #36363e; }
.os.scheme-light .signal, .os.scheme-light .battery { color: var(--text); border-color: var(--muted); }
.os.scheme-light .battery span, .os.scheme-light .battery::after { background: var(--text); }
.lock-date, .lock-time, .lock-hint { color: var(--text); }
.lock-hint { color: var(--muted); }
.os.scheme-light .passcode { color: #fff; }
.os.eink .workspace-nav button.active, .os.eink .settings-categories button.selected { background: #000; color: #fff; }
.os.eink .settings-category-icon, .os.eink .home-eyebrow { color: inherit; }

.os.scheme-light .passcode { color: #18181d; background: rgba(245,245,247,.94); }
.os.scheme-light .pad-key { color: #18181d; background: rgba(30,30,40,.08); }
.os.scheme-light .pad-key:active { background: rgba(30,30,40,.18); }
.phone-shell.layout-list .phone-home-heading { display: block; }
@media (pointer: coarse) { .light { width: 32px; height: 32px; padding: 10px; } }
.phone-shell .clock-widget-date { display: none; }

.bluetooth-device { display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap; padding:14px 0; border-bottom:1px solid var(--hairline); }
.bluetooth-device > div:first-child { display:grid; gap:4px; min-width:0; overflow-wrap:anywhere; }



.bluetooth-device .row.gap { margin-top:0; flex-wrap:wrap; }

/* Phone design: status notices and the Settings list → detail flow. */
.status-notice { display: flex; align-items: center; gap: 10px; padding: 12px 14px; border-radius: 14px; font-size: 14px; line-height: 1.35; background: var(--surface-2); border: 1px solid var(--hairline); color: var(--text); grid-column: 1 / -1; }
.status-notice > span { flex: 1; min-width: 0; }
.status-notice .icon { flex: none; color: var(--muted); }
.status-notice.error { border-color: #b3202f; }
.status-notice.error .icon { color: #ff6b78; }
.status-notice.offline { border-color: #8a5a00; }
.status-notice.offline .icon { color: #ff9f0a; }
.status-notice.loading .icon { animation: spin 1s linear infinite; }
.os.scheme-light .status-notice.error .icon { color: #b3202f; }
.os.scheme-light .status-notice.offline .icon { color: #8a5a00; }
.os.eink .status-notice { background: #fff; color: #000; border: 1px solid #000; }
.os.eink .status-notice .icon { color: #000 !important; animation: none; }
.settings-layout.compact { display: block; overflow-y: auto; }
.settings-layout.compact .settings-categories { display: flex; flex-direction: column; gap: 8px; padding: 8px 16px 24px; border: 0; background: transparent; overflow: visible; }
.settings-layout.compact .settings-categories button { width: 100%; min-height: 60px; padding: 12px 14px; gap: 12px; font-size: 16px; border-radius: 18px; background: var(--surface); border: 1px solid var(--hairline); white-space: normal; flex: none; }
.settings-layout.compact .settings-categories button > .icon { display: block; opacity: .55; }
.settings-layout.compact .settings-category-icon { width: 36px; height: 36px; border-radius: 10px; background: var(--accent); color: #fff; }
.settings-category-copy { display: flex; flex-direction: column; gap: 2px; flex: 1; min-width: 0; }
.settings-category-copy small { font-size: 13px; color: var(--muted); font-weight: 400; }
.settings-layout.compact .settings-content { padding: 8px 16px 32px; overflow: visible; }
.settings-layout.compact .settings-content[hidden] { display: none; }
.settings-back { display: inline-flex; align-items: center; gap: 4px; min-height: 44px; margin: 0 0 4px -6px; padding: 0 8px; border-radius: 10px; font-size: 16px; color: var(--accent); }
.settings-back:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
.os.eink .settings-layout.compact .settings-category-icon { background: #000; color: #fff; }
.os.eink .settings-back { color: #000; }

.app-header { position: relative; z-index: 2; transition: padding 0.2s var(--ease), background-color 0.2s ease, box-shadow 0.2s ease; }
.app-header.collapsed { padding-top: 2px; padding-bottom: 4px; background: var(--bg); box-shadow: 0 0.5px 0 var(--hairline); }
.app-header.collapsed h1 { font-size: 17px; font-weight: 600; letter-spacing: -0.01em; }
.app-header h1 { transition: font-size 0.2s var(--ease); }
.app-loading { padding: 16px 20px; }
.os.eink .app-header.collapsed { background: #fff; box-shadow: 0 1px 0 #000; }
.lost-device-notice {
  display: grid;
  gap: 8px;
  width: min(84vw, 420px);
  margin: 0 auto 28px;
  padding: 16px 18px;
  border: 1px solid color-mix(in srgb, var(--accent) 38%, transparent);
  border-radius: 18px;
  background: color-mix(in srgb, var(--surface, #17171c) 88%, var(--accent));
  color: var(--text);
  text-align: left;
  font-size: 14px;
  line-height: 1.45;
}
.lost-device-notice strong { font-size: 15px; }
.lost-device-notice span { overflow-wrap: anywhere; }
.field-label { display: grid; gap: 6px; margin: 12px 0; font-size: 14px; font-weight: 550; }

/* Veynor Classic: a quiet, low-effects desktop with soft paper surfaces and restrained bevels. */
:root {
  --font: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  --radius: 9px;
  --ease: ease-out;
}
body { background: #d7d8d1; letter-spacing: 0; line-height: 1.35; }
.os { transition: none; }
.os.scheme-light {
  --text: #252923;
  --muted: #5b6259;
  --bg: #eeeee8;
  --solid: #e7e7df;
  --surface: #f4f4ee;
  --surface-2: #e9eae3;
  --surface-3: #dedfd7;
  --fill: #e1e2da;
  --fill-soft: #ebebe5;
  --hairline: #bfc2b8;
  --sep: #c8cbc1;
  --mat-window: #eeeee8;
  --mat-pop: #f4f4ee;
  --mat-bar: #e3e4dc;
  --mat-menu: #e3e4dc;
  --mat-sheet: #eeeee8;
  --light-off: #a8aaa2;
  --placeholder: #71776f;
  color-scheme: light;
}
.os:not(.scheme-light):not(.eink) {
  --bg: #252822;
  --solid: #30332d;
  --surface: #30332d;
  --surface-2: #383b34;
  --surface-3: #41443d;
  --fill: #41443d;
  --fill-soft: #363932;
  --hairline: #555950;
  --sep: #4a4e46;
  --mat-window: #30332d;
  --mat-pop: #383b34;
  --mat-bar: #292c26;
  --mat-menu: #292c26;
  --mat-sheet: #30332d;
  --muted: #bec2b8;
}
.os.scheme-light .menu-bar,
.os.scheme-light .taskbar {
  color: var(--text);
  background: #e3e4dc;
  border-color: #bfc2b8;
  box-shadow: inset 0 1px #fbfbf7;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
}
.os.scheme-light .menu-bar { height: 34px; border-bottom: 1px solid #bfc2b8; }
.os.scheme-light .taskbar { height: 50px; border-top: 1px solid #bfc2b8; }
.os.scheme-light .desktop-area { top: 34px; bottom: 50px; }
.os.scheme-light .menu-btn { border: 1px solid transparent; border-radius: 5px; }
.os.scheme-light .menu-btn:hover { background: #eeeeea; border-color: #c2c4ba; }
.os.scheme-light .window {
  background: #eeeee8;
  border: 1px solid #92968c;
  border-radius: 8px;
  box-shadow: 0 3px 9px rgba(28, 31, 25, .20), inset 0 1px #fff;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  animation: none;
}
.os.scheme-light .window:not(.focused) { box-shadow: 0 2px 6px rgba(28, 31, 25, .14), inset 0 1px #fff; }
.os.scheme-light .window:not(.focused) .titlebar { opacity: 1; }
.os.scheme-light .titlebar {
  height: 34px;
  color: #30352e;
  background: linear-gradient(#f8f8f3, #e3e4dc);
  border-bottom: 1px solid #b6b9af;
}
.os.scheme-light .title { font-size: 13px; font-weight: 600; }
.os.scheme-light .light { width: 14px; height: 14px; border-radius: 4px; }
.os.scheme-light .taskbar { box-shadow: inset 0 1px #fafaf5; }
.os.scheme-light .task-item { border-radius: 6px; padding: 2px 5px; }
.os.scheme-light .task-item.active { background: #d6d8cf; box-shadow: inset 0 1px 3px rgba(34, 38, 31, .18); }
.os.scheme-light .task-item.active::after { bottom: -3px; width: 14px; height: 2px; border-radius: 0; background: var(--accent-fill); }
.os.scheme-light .start-btn { border-radius: 6px; box-shadow: 0 1px 2px rgba(28,31,25,.18), inset 0 1px rgba(255,255,255,.55); }
.os.scheme-light .start-menu,
.os.scheme-light .smart-search,
.os.scheme-light .alert,
.os.scheme-light .toast,
.os.scheme-light .handoff-banner {
  color: var(--text);
  background: #f0f0e9;
  border: 1px solid #aeb2a7;
  border-radius: 10px;
  box-shadow: 0 5px 16px rgba(28,31,25,.18), inset 0 1px #fff;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  animation: none;
}
.os.scheme-light .start-search,
.os.scheme-light .search-input-wrap,
.os.scheme-light .finder-search-wrap,
.os.scheme-light .field {
  background: #fafaf6;
  border: 1px solid #aeb2a7;
  border-radius: 5px;
  box-shadow: inset 0 1px 2px rgba(36,40,32,.10);
}
.os.scheme-light .btn {
  min-height: 36px;
  border: 1px solid color-mix(in srgb, var(--accent-fill) 78%, #353a31);
  border-radius: 6px;
  box-shadow: inset 0 1px rgba(255,255,255,.34), 0 1px 1px rgba(31,35,28,.12);
  transition: background-color .12s ease, box-shadow .12s ease;
}
.os.scheme-light .btn.ghost {
  color: var(--text);
  background: linear-gradient(#fafaf5, #e6e7df);
  border: 1px solid #adb1a6;
  box-shadow: inset 0 1px #fff, 0 1px 1px rgba(31,35,28,.10);
}
.os.scheme-light .btn:active:not(:disabled),
.os.scheme-light .btn.ghost:active:not(:disabled) {
  transform: none;
  box-shadow: inset 0 1px 3px rgba(31,35,28,.18);
}
.os.scheme-light .glass-card,
.os.scheme-light .list-row,
.os.scheme-light .home-app-card,
.os.scheme-light .clock-widget,
.os.scheme-light .status-notice {
  background: #eeeee8;
  border: 1px solid #c3c6bc;
  border-radius: 9px;
  box-shadow: inset 0 1px #fff, 0 1px 2px rgba(34,38,31,.08);
}
.os.scheme-light .list-row { padding: 12px 14px; }
.os.scheme-light .section-label { color: #545b51; font-size: 13px; font-weight: 650; letter-spacing: .01em; }
.os.scheme-light .app-header { border-bottom: 1px solid #c3c6bc; }
.os.scheme-light .app-header h1,
.os.scheme-light .home-welcome h1,
.os.scheme-light .phone-home-heading h1 {
  color: #303b32;
  font-family: Georgia, "Times New Roman", serif;
  font-weight: 600;
  letter-spacing: -.025em;
}
.os.scheme-light .home-eyebrow { color: #536d58; letter-spacing: .16em; }
.os.scheme-light .home-app-card {
  min-height: 78px;
  border-radius: 10px;
  padding: 14px;
  text-align: left;
}
.os.scheme-light .home-card-glyph { border: 1px solid #d0d2c9; border-radius: 8px; background: #e6e7df; }
.os.scheme-light .clock-widget {
  background: #e6e7df;
  border-color: #b7bbb0;
  box-shadow: inset 1px 1px #fff, inset -1px -1px rgba(75,81,68,.10), 0 2px 4px rgba(34,38,31,.10);
}
.os.scheme-light .clock-widget-heading,
.os.scheme-light .clock-widget-date { color: #596057; }
.os.scheme-light .clock-widget-time { color: #303b32; font-family: "Segoe UI", Tahoma, sans-serif; font-variant-numeric: tabular-nums; }
.os.scheme-light .settings-categories { background: #e7e8e0; border-color: #c0c3b9; }
.os.scheme-light .settings-categories button.selected { background: #d5d8ce; color: #29332a; box-shadow: inset 0 1px 2px rgba(35,39,31,.12); }
.os.scheme-light .settings-categories button.selected .settings-category-icon { color: #506c56; }
.os.scheme-light .workspace-nav { background: #e4e5dd; border-bottom: 1px solid #c0c3b9; }
.os.scheme-light .workspace-nav button.active { background: #d7d9d1; box-shadow: inset 0 1px 2px rgba(35,39,31,.13); }
.os.scheme-light .dock { background: #e4e5dd; border: 1px solid #c1c4ba; border-radius: 12px; box-shadow: inset 0 1px #fafaf5, 0 2px 5px rgba(34,38,31,.12); backdrop-filter: none; -webkit-backdrop-filter: none; }
.os.scheme-light .phone-shell .home-grid { gap: 18px 12px; }
.os.scheme-light .switcher { background: rgba(47,51,44,.72); backdrop-filter: none; -webkit-backdrop-filter: none; }
.os.scheme-light .switcher-card { background: #efefe9; border: 1px solid #bfc2b8; border-radius: 9px; box-shadow: 0 3px 8px rgba(25,29,23,.2); }
.os.scheme-light .lost-device-notice { background: #e7e8df; border-color: #aeb4a8; box-shadow: inset 0 1px #fff, 0 2px 5px rgba(34,38,31,.12); }
.os.scheme-light .lock-time { text-shadow: none; }
.os.scheme-light .passcode { backdrop-filter: none; -webkit-backdrop-filter: none; }
.os.scheme-light .scrim { backdrop-filter: none; -webkit-backdrop-filter: none; }
.os.scheme-light button,
.os.scheme-light .list-row,
.os.scheme-light .app-icon,
.os.scheme-light .tag-chip,
.os.scheme-light .pad-key,
.os.scheme-light .calc-key,
.os.scheme-light .dial-key { transition-duration: .12s; }
.os.scheme-light button:active:not(:disabled):not(.btn) { transform: none; }
.os.eink .glass-card,
.os.eink .list-row,
.os.eink .home-app-card,
.os.eink .clock-widget,
.os.eink .window,
.os.eink .titlebar,
.os.eink .taskbar,
.os.eink .menu-bar { box-shadow: none; backdrop-filter: none; -webkit-backdrop-filter: none; }
/* Keep the shell fast on integrated graphics and battery-powered machines. */
.os .menu-bar,
.os .taskbar,
.os .window,
.os .start-menu,
.os .smart-search,
.os .alert,
.os .toast,
.os .handoff-banner,
.os .scrim,
.os .dock,
.os .switcher { backdrop-filter: none; -webkit-backdrop-filter: none; }
.os .window,
.os .start-menu,
.os .smart-search,
.os .alert,
.os .toast,
.os .handoff-banner { animation: none; }
.os button:active:not(:disabled) { transform: none; }
.os button,
.os .list-row,
.os .app-icon,
.os .tag-chip,
.os .pad-key,
.os .calc-key,
.os .dial-key { transition-duration: .12s; }
.computer-sync-summary {
  display: grid;
  grid-template-columns: 40px minmax(0, 1fr);
  align-items: center;
  gap: 5px 12px;
  padding: 16px;
  border: 1px solid var(--hairline);
  border-radius: 10px;
  background: var(--surface);
}
.computer-sync-mark { grid-row: span 2; display: grid; place-items: center; width: 40px; height: 40px; border-radius: 8px; background: var(--fill); color: var(--accent); }
.computer-sync-summary > strong, .computer-sync-summary > p, .computer-sync-summary > .row { grid-column: 2; }
.computer-sync-summary > .row { margin-top: 8px; }
.computer-sync-summary .btn { justify-self: start; }
.os.eink .computer-sync-summary { background: #fff; border: 1px solid #000; box-shadow: none; }
.os.eink .computer-sync-mark { color: #000; background: #fff; border: 1px solid #000; }
.premium-heading { display: flex; align-items: center; gap: 12px; padding: 14px; border: 1px solid var(--hairline); border-radius: 10px; background: linear-gradient(130deg, color-mix(in srgb, var(--accent) 13%, var(--surface)), var(--surface) 72%); }
.premium-heading p, .premium-free p { margin: 4px 0 0; }
.premium-mark { width: 40px; height: 40px; display: grid; place-items: center; border-radius: 10px; color: var(--accent); background: var(--fill); }
.premium-status { display: grid; grid-template-columns: 1fr auto; gap: 4px 10px; margin-top: 12px; padding: 12px 14px; border-radius: 9px; background: var(--fill); text-transform: capitalize; }
.premium-status small { grid-column: 1 / -1; color: var(--muted); }
.premium-benefits { display: grid; gap: 9px; margin: 14px 0; }
.premium-benefit { display: flex; align-items: flex-start; gap: 10px; }
.premium-benefit > .icon { flex: none; color: var(--accent); margin-top: 2px; }
.premium-benefit span, .premium-plan > div { display: grid; gap: 3px; }
.premium-benefit small { color: var(--muted); }
.premium-free { padding: 12px 14px; border-radius: 9px; border: 1px solid var(--hairline); }
.premium-plan { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-top: 12px; padding: 14px; border-radius: 10px; background: var(--surface); border: 1px solid var(--hairline); }
.premium-plan .btn { flex: none; }
.premium-consent { display: flex; align-items: flex-start; gap: 9px; margin: 14px 0 8px; color: var(--muted); font-size: .88rem; line-height: 1.45; }
.premium-consent input { flex: none; margin-top: 3px; accent-color: var(--accent); }
.premium-cancel-confirm { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin-top: 10px; padding: 12px; border: 1px solid var(--hairline); border-radius: 9px; }
.premium-cancel-confirm p { flex-basis: 100%; margin: 0; color: var(--muted); }
.premium-empty { display: grid; gap: 8px; }
.premium-empty p { margin: 0; }
.os.eink .premium-heading, .os.eink .premium-status, .os.eink .premium-free, .os.eink .premium-plan { background: #fff; border: 1px solid #000; box-shadow: none; }
.os.eink .premium-mark, .os.eink .premium-benefit > .icon { color: #000; background: #fff; }
@media (max-width: 520px) { .premium-plan { align-items: flex-start; flex-direction: column; } }
.public-page-loading { position: fixed; inset: 0; display: grid; place-items: center; background: #f0eee8; color: #273b32; font: 500 15px/1.4 var(--font); }
.feature-public { --feature-ink: #202c27; --feature-muted: #68736d; --feature-paper: #f0eee8; --feature-card: #fbfaf6; --feature-line: #dddcd3; --feature-accent: #366d5c; --feature-accent-dark: #254c40; position: fixed; inset: 0; overflow-y: auto; background: radial-gradient(ellipse at 10% 20%, rgba(221,224,207,.62), transparent 38%), var(--feature-paper); color: var(--feature-ink); color-scheme: light; font-family: var(--font); user-select: text; -webkit-user-select: text; }
.feature-public button, .feature-public a { -webkit-tap-highlight-color: transparent; }
.feature-public-nav { width: min(1120px, calc(100% - 48px)); min-height: 76px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(32,44,39,.13); }
.feature-brand { display: inline-flex; align-items: center; gap: 10px; color: var(--feature-ink); text-decoration: none; font-size: 15px; font-weight: 700; letter-spacing: -.025em; }
.feature-brand-mark { width: 30px; height: 30px; display: grid; place-items: center; color: #f8f6ef; background: linear-gradient(145deg,#496e5c,#29493d); border: 1px solid rgba(255,255,255,.35); border-radius: 9px; box-shadow: 0 2px 4px rgba(25,45,35,.18), inset 0 1px 0 rgba(255,255,255,.25); font-size: 16px; }
.feature-brand-os { margin-left: 4px; color: var(--feature-muted); font-weight: 500; }
.feature-nav-actions { display: flex; align-items: center; gap: 22px; }
.feature-public-badge { display: inline-flex; align-items: center; gap: 7px; color: var(--feature-muted); font-size: 12px; letter-spacing: .015em; }
.feature-public-badge i { width: 7px; height: 7px; border-radius: 50%; background: var(--feature-accent); box-shadow: 0 0 0 3px rgba(54,109,92,.12); }
.feature-home-link { color: var(--feature-ink); text-decoration: none; font-size: 13px; font-weight: 600; }
.feature-home-link span, .feature-share span, .feature-submit-again span { margin-left: 5px; color: var(--feature-accent); }
.feature-public-layout { width: min(1050px, calc(100% - 48px)); min-height: calc(100svh - 138px); margin: 0 auto; padding: clamp(44px,8vh,100px) 0 56px; display: grid; grid-template-columns: minmax(0, .92fr) minmax(360px, 1.08fr); align-items: center; gap: clamp(45px,8vw,112px); }
.feature-intro { max-width: 440px; }
.feature-eyebrow, .feature-card-kicker { color: var(--feature-accent); font-size: 10px; line-height: 1.4; font-weight: 750; letter-spacing: .18em; }
.feature-eyebrow span { display: inline-grid; place-items: center; width: 23px; height: 23px; margin-right: 7px; border: 1px solid #a9b8ab; border-radius: 50%; letter-spacing: 0; }
.feature-intro h1 { margin: 25px 0 17px; color: var(--feature-ink); font-family: Georgia, "Iowan Old Style", serif; font-size: clamp(48px,6vw,72px); font-weight: 500; line-height: .99; letter-spacing: -.055em; }
.feature-intro h1 em { color: var(--feature-accent); font-weight: 500; }
.feature-lede { max-width: 395px; color: #58645d; font-size: 15px; line-height: 1.75; }
.feature-promise-list { display: grid; gap: 18px; margin-top: 35px; }
.feature-promise-list > div { display: flex; align-items: flex-start; gap: 12px; }
.feature-promise-icon { width: 29px; height: 29px; flex: none; display: grid; place-items: center; border: 1px solid #c4ccbd; border-radius: 9px; color: var(--feature-accent); background: rgba(255,255,255,.35); font-size: 16px; }
.feature-promise-list strong, .feature-promise-list small { display: block; }
.feature-promise-list strong { margin: 1px 0 3px; font-size: 13px; font-weight: 650; }
.feature-promise-list small { color: var(--feature-muted); font-size: 12px; line-height: 1.5; }
.feature-share { margin-top: 29px; padding: 0; color: #46554c; font-size: 12px; font-weight: 600; text-decoration: underline; text-decoration-color: #aeb8ad; text-underline-offset: 4px; }
.feature-form-card { position: relative; padding: clamp(24px,4vw,42px); border: 1px solid #dddcd3; border-radius: 17px; background: var(--feature-card); box-shadow: 0 18px 48px rgba(40,47,40,.08), 0 3px 8px rgba(40,47,40,.04), inset 0 1px 0 rgba(255,255,255,.9); }
.feature-form-card::before { position: absolute; content: ""; inset: 6px; border: 1px solid rgba(61,92,74,.07); border-radius: 12px; pointer-events: none; }
.feature-form-heading { position: relative; display: flex; justify-content: space-between; align-items: flex-start; gap: 20px; margin-bottom: 27px; }
.feature-form-heading h2 { margin-top: 8px; color: var(--feature-ink); font-family: Georgia, "Iowan Old Style", serif; font-size: 30px; font-weight: 500; letter-spacing: -.035em; }
.feature-card-stamp { width: 36px; height: 36px; display: grid; place-items: center; border: 1px solid #bdc9bd; border-radius: 50%; color: var(--feature-accent); font-family: Georgia, serif; font-size: 13px; transform: rotate(-9deg); }
.feature-form-card form { position: relative; display: grid; gap: 19px; }
.feature-field { display: grid; gap: 8px; color: #334139; font-size: 12px; font-weight: 650; }
.feature-field input, .feature-field select, .feature-field textarea { width: 100%; min-height: 45px; padding: 11px 13px; border: 1px solid #d5d8cf; border-radius: 8px; outline: none; background: #fffefa; color: #25332b; font-size: 13px; font-weight: 450; box-shadow: inset 0 1px 2px rgba(37,51,43,.035); }
.feature-field textarea { min-height: 136px; line-height: 1.55; resize: vertical; }
.feature-field input::placeholder, .feature-field textarea::placeholder { color: #929991; }
.feature-field input:focus, .feature-field select:focus, .feature-field textarea:focus { border-color: #6f9480; box-shadow: 0 0 0 3px rgba(54,109,92,.12); }
.feature-field small { justify-self: end; margin-top: -5px; color: #849087; font-size: 10px; font-weight: 450; }
.feature-trap { position: absolute !important; left: -10000px !important; width: 1px; height: 1px; overflow: hidden; }
.feature-trap input { width: 1px; }
.feature-privacy-note { padding: 11px 12px; border-left: 2px solid #8ea591; background: #f2f3eb; color: #667269; font-size: 11px; line-height: 1.6; }
.feature-submit { min-height: 47px; display: flex; justify-content: space-between; align-items: center; gap: 10px; padding: 0 16px; border: 1px solid #315f50; border-radius: 8px; background: linear-gradient(#477866,#356351); color: #fff; box-shadow: 0 3px 0 #244637, 0 8px 17px rgba(37,76,62,.15), inset 0 1px 0 rgba(255,255,255,.24); font-size: 13px; font-weight: 650; transition: transform .14s, box-shadow .14s, opacity .14s; }
.feature-submit:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 4px 0 #244637, 0 11px 18px rgba(37,76,62,.18), inset 0 1px 0 rgba(255,255,255,.24); }
.feature-submit:active:not(:disabled) { transform: translateY(2px); box-shadow: 0 1px 0 #244637, inset 0 1px 0 rgba(255,255,255,.18); }
.feature-submit:disabled { cursor: wait; opacity: .65; }
.feature-submit span { font-size: 16px; }
.feature-form-footnote { color: #818981; font-size: 10px; line-height: 1.55; text-align: center; }
.feature-form-error { padding: 10px 12px; border: 1px solid #e8b7ad; border-radius: 7px; background: #fff2ef; color: #8b3728; font-size: 12px; }
.feature-success { position: relative; min-height: 360px; display: flex; flex-direction: column; align-items: flex-start; justify-content: center; }
.feature-success-mark { width: 42px; height: 42px; display: grid; place-items: center; border-radius: 50%; background: #e0ebdd; color: #356351; font-size: 21px; }
.feature-success h3 { margin-top: 20px; color: var(--feature-ink); font-family: Georgia, "Iowan Old Style", serif; font-size: 30px; font-weight: 500; }
.feature-success p { max-width: 390px; margin-top: 9px; color: var(--feature-muted); font-size: 13px; line-height: 1.7; }
.feature-submit-again { margin-top: 24px; padding: 0; color: var(--feature-ink); font-size: 12px; font-weight: 650; }
.feature-public-footer { width: min(1120px, calc(100% - 48px)); min-height: 58px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; gap: 14px; border-top: 1px solid rgba(32,44,39,.13); color: #7a837b; font-size: 9px; letter-spacing: .08em; }
.feature-public-footer span:last-child { letter-spacing: .01em; }
.feature-settings-link { display: flex; align-items: center; justify-content: space-between; gap: 14px; }
.feature-settings-link p { margin-top: 4px; }
.feature-settings-link .btn { flex: none; text-decoration: none; }
.feature-public :focus-visible { outline: 3px solid #5a8b73; outline-offset: 3px; }
@media (max-width: 780px) { .feature-public-layout { grid-template-columns: 1fr; gap: 34px; max-width: 590px; padding-top: 42px; } .feature-intro { max-width: none; } .feature-intro h1 { font-size: clamp(45px,10vw,64px); } .feature-promise-list { grid-template-columns: 1fr; gap: 14px; margin-top: 23px; } .feature-share { margin-top: 22px; } }
@media (max-width: 520px) { .feature-public-nav, .feature-public-footer { width: calc(100% - 34px); } .feature-public-layout { width: calc(100% - 34px); padding: 34px 0 38px; } .feature-public-nav { min-height: 64px; } .feature-nav-actions { gap: 13px; } .feature-public-badge { font-size: 0; gap: 0; } .feature-public-badge i { width: 8px; height: 8px; } .feature-home-link { font-size: 12px; } .feature-intro h1 { margin-top: 21px; } .feature-lede { font-size: 14px; } .feature-form-card { padding: 23px 19px; border-radius: 13px; } .feature-form-heading h2 { font-size: 27px; } .feature-public-footer { font-size: 8px; } .feature-settings-link { align-items: flex-start; flex-direction: column; } }
@media (prefers-reduced-motion: reduce) { .feature-submit { transition: none; } }
/* Clikey Chess standalone game. */
.chess-page { --chess-ink: #28342d; --chess-muted: #7b837c; --chess-paper: #f2efe6; --chess-line: #dedbd0; --chess-green: #3d6653; position: fixed; inset: 0; overflow-y: auto; display: flex; flex-direction: column; background: radial-gradient(ellipse at 16% 10%, rgba(212,199,162,.22), transparent 34%), var(--chess-paper); color: var(--chess-ink); color-scheme: light; font-family: var(--font); user-select: text; -webkit-user-select: text; }
.chess-page button { color: inherit; }
.chess-topbar { min-height: 66px; display: flex; align-items: center; justify-content: space-between; gap: 18px; padding: 0 clamp(20px,5vw,70px); border-bottom: 1px solid rgba(40,52,45,.12); }
.chess-wordmark { display: inline-flex; align-items: center; gap: 8px; color: var(--chess-ink); text-decoration: none; font-size: 17px; font-weight: 750; letter-spacing: -.04em; }
.chess-wordmark > span:first-child { color: var(--chess-green); font-size: 22px; }
.chess-wordmark-dot { color: var(--chess-green); }
.chess-top-label { color: var(--chess-muted); font-size: 9px; font-weight: 750; letter-spacing: .19em; }
.chess-layout { width: min(970px, calc(100% - 40px)); margin: auto; padding: 34px 0 27px; display: grid; grid-template-columns: minmax(0, 560px) minmax(230px, 1fr); align-items: center; gap: clamp(28px,5vw,68px); }
.chess-main { min-width: 0; }
.chess-heading { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
.chess-kicker { color: var(--chess-green); font-size: 9px; font-weight: 750; letter-spacing: .19em; }
.chess-heading h1 { margin-top: 5px; font-family: Georgia, "Iowan Old Style", serif; font-size: clamp(32px,4vw,43px); line-height: 1.05; font-weight: 500; letter-spacing: -.05em; }
.chess-icon-button { width: 39px; height: 39px; display: grid; place-items: center; border: 1px solid var(--chess-line); border-radius: 50%; background: rgba(255,255,255,.4); color: var(--chess-green) !important; font-size: 21px; }
.chess-player { display: flex; align-items: center; gap: 10px; min-height: 39px; }
.chess-player-piece { width: 31px; height: 31px; display: grid; place-items: center; border: 1px solid var(--chess-line); border-radius: 9px; background: rgba(255,255,255,.48); color: #777d75; font-size: 22px; }
.chess-player-piece.active { border-color: #9eb2a1; color: var(--chess-green); background: #e5e9df; }
.chess-player strong, .chess-player small { display: block; }
.chess-player strong { font-size: 12px; font-weight: 700; }
.chess-player small { margin-top: 2px; color: var(--chess-muted); font-size: 10px; }
.chess-board-wrap { position: relative; margin: 8px 0; padding: 0 20px 19px 21px; }
.chess-board { width: 100%; aspect-ratio: 1; display: grid; grid-template-columns: repeat(8,minmax(0,1fr)); overflow: hidden; border: 5px solid #46574b; border-radius: 5px; background: #46574b; box-shadow: 0 12px 34px rgba(33,43,35,.15), 0 2px 5px rgba(33,43,35,.16); }
.chess-square { position: relative; display: grid; place-items: center; min-width: 0; min-height: 0; padding: 0; aspect-ratio: 1; }
.chess-square.light { background: #eee8d8; }
.chess-square.dark { background: #82947a; }
.chess-square.last-move { background-image: linear-gradient(rgba(226,199,102,.38),rgba(226,199,102,.38)); }
.chess-square.selected { background-image: linear-gradient(rgba(232,205,100,.72),rgba(232,205,100,.72)); }
.chess-square:focus-visible { z-index: 2; outline: 3px solid #236f52; outline-offset: -3px; }
.chess-piece { position: relative; z-index: 1; display: block; font-family: "Apple Symbols", "Noto Sans Symbols 2", "Segoe UI Symbol", serif; font-size: clamp(26px,5.4vw,57px); line-height: 1; transform: translateY(-1px); }
.chess-piece.white { color: #fffdf5; text-shadow: 0 1px 0 #56564c, 0 2px 1px rgba(36,38,32,.48), 0 0 2px rgba(22,31,24,.55); }
.chess-piece.black { color: #2f3c33; text-shadow: 0 1px 0 rgba(255,255,255,.28), 0 2px 2px rgba(24,34,28,.23); }
.chess-legal-dot { position: absolute; width: 22%; height: 22%; border-radius: 50%; background: rgba(39,72,52,.38); }
.chess-square.capture::after { content: ""; position: absolute; inset: 4px; border: 3px solid rgba(39,72,52,.48); border-radius: 50%; }
.chess-coords { position: absolute; display: flex; color: #697867; font-size: 9px; font-weight: 700; pointer-events: none; }
.chess-coords-files { right: 21px; bottom: 2px; left: 22px; justify-content: space-around; }
.chess-coords-ranks { top: 5px; bottom: 24px; left: 3px; flex-direction: column; justify-content: space-around; }
.chess-side { padding-top: 34px; }
.chess-mode-tabs { display: grid; grid-template-columns: 1fr 1fr; gap: 3px; margin-bottom: 12px; padding: 3px; border: 1px solid var(--chess-line); border-radius: 8px; background: rgba(227,224,214,.6); }
.chess-mode-tabs button { min-height: 32px; border-radius: 6px; color: #68746b !important; font-size: 10px; font-weight: 600; }
.chess-mode-tabs button.selected { background: #faf8f1; color: var(--chess-ink) !important; box-shadow: 0 1px 3px rgba(31,42,34,.13); }
.chess-status-card { min-height: 67px; display: flex; align-items: center; gap: 12px; padding: 13px 15px; border: 1px solid var(--chess-line); border-radius: 10px; background: rgba(255,255,255,.48); }
.chess-status-dot { width: 9px; height: 9px; flex: none; border-radius: 50%; background: #76a281; box-shadow: 0 0 0 4px rgba(118,162,129,.13); }
.chess-status-card.check .chess-status-dot { background: #c87554; box-shadow: 0 0 0 4px rgba(200,117,84,.13); }
.chess-status-card small, .chess-status-card strong { display: block; }
.chess-status-card small { color: var(--chess-muted); font-size: 8px; font-weight: 750; letter-spacing: .16em; }
.chess-status-card strong { margin-top: 5px; font-size: 13px; font-weight: 680; }
.chess-controls { display: grid; gap: 8px; margin-top: 12px; }
.chess-new-game { min-height: 43px; display: flex; align-items: center; justify-content: space-between; padding: 0 14px; border: 1px solid #345b48 !important; border-radius: 8px; background: linear-gradient(#4c745e,#3c624e) !important; color: white !important; box-shadow: 0 2px 0 #294837; font-size: 12px; font-weight: 650; }
.chess-new-game span { font-size: 17px; }
.chess-undo { min-height: 38px; display: flex; align-items: center; gap: 9px; padding: 0 12px; border: 1px solid var(--chess-line) !important; border-radius: 8px; background: rgba(255,255,255,.4) !important; color: #49574d !important; text-align: left; font-size: 16px; }
.chess-undo span { font-size: 11px; font-weight: 600; }
.chess-undo:disabled { opacity: .42; cursor: default; }
.chess-promotion { margin-top: 23px; padding: 14px 0; border-top: 1px solid var(--chess-line); border-bottom: 1px solid var(--chess-line); }
.chess-promotion > small { color: var(--chess-muted); font-size: 8px; font-weight: 750; letter-spacing: .16em; }
.chess-promotion > div { display: flex; gap: 7px; margin-top: 9px; }
.chess-promotion button { width: 35px; height: 35px; border: 1px solid var(--chess-line); border-radius: 7px; background: rgba(255,255,255,.4); color: #4c5d50 !important; font-size: 22px; }
.chess-promotion button.chosen { border-color: #6f947d; background: #e4e9df; }
.chess-moves { margin-top: 18px; }
.chess-section-title { display: flex; justify-content: space-between; align-items: center; padding-bottom: 9px; border-bottom: 1px solid var(--chess-line); }
.chess-section-title strong { font-family: Georgia,serif; font-size: 17px; font-weight: 500; }
.chess-section-title span { color: var(--chess-muted); font-size: 10px; }
.chess-moves ol { max-height: 205px; overflow-y: auto; margin: 0; padding: 7px 0; list-style: none; }
.chess-moves li { display: grid; grid-template-columns: 35px 1fr; padding: 5px 7px; border-radius: 4px; font-size: 11px; }
.chess-moves li span { color: var(--chess-muted); }
.chess-moves li.current { background: #e4e9df; }
.chess-moves li b { font-weight: 600; }
.chess-empty, .chess-note { color: var(--chess-muted); font-size: 10px; line-height: 1.65; }
.chess-empty { padding: 14px 0; }
.chess-note { margin-top: 19px; }
.chess-ad { margin-top: 17px; min-height: 72px; display: grid; align-content: center; gap: 7px; padding: 12px 13px; border: 1px dashed #c9c7bd; border-radius: 8px; color: var(--chess-muted); }
.chess-ad-label { font-size: 8px; font-weight: 750; letter-spacing: .16em; }
.chess-ad p { font-size: 10px; line-height: 1.5; }
.chess-ad ins { min-height: 50px; }
.chess-footer { min-height: 47px; display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 0 clamp(20px,5vw,70px); border-top: 1px solid rgba(40,52,45,.12); color: var(--chess-muted); font-size: 8px; letter-spacing: .11em; }
.chess-footer span:last-child { letter-spacing: .01em; }
.chess-page :focus-visible { outline: 3px solid #4e8065; outline-offset: 2px; }
@media (max-width: 700px) { .chess-layout { width: min(510px,calc(100% - 28px)); grid-template-columns: 1fr; gap: 17px; padding: 22px 0; } .chess-side { padding-top: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 10px 14px; } .chess-status-card, .chess-controls { grid-column: 1 / -1; } .chess-controls { grid-template-columns: 1.2fr 1fr 1fr; margin-top: 0; } .chess-undo { justify-content: center; padding: 0 5px; } .chess-promotion { margin-top: 0; border-bottom: 0; } .chess-moves { margin-top: 0; } .chess-note { grid-column: 1 / -1; margin-top: 0; } .chess-moves ol { max-height: 100px; } .chess-local { display: none; } }
@media (max-width: 390px) { .chess-layout { width: calc(100% - 22px); } .chess-board-wrap { padding-right: 17px; padding-left: 18px; } .chess-board { border-width: 4px; } .chess-piece { font-size: 8vw; } }
@media (prefers-reduced-motion: reduce) { .chess-page * { scroll-behavior: auto !important; } }
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: .001ms !important; transition-duration: .001ms !important; scroll-behavior: auto !important; }
}

/* ════════════════════════════════════════════════════════════
   iOS pass for Veynor (HIG): 17pt body, 44pt targets, inset grouped
   lists with 0.5pt separators, plain-text nav buttons, large titles,
   10pt grouped corners, material dock. Veynor signature: your accent
   colour, tabular numerals, one accent underline on the active tab.
   Everything reads tokens, so schemes still work; e-ink is untouched.
   ════════════════════════════════════════════════════════════ */
:root { --radius: 10px; --sep: rgba(128, 128, 140, 0.28); }
.os:not(.eink) { font-size: 17px; letter-spacing: -0.01em; }
/* navigation bar + large title */
.os:not(.eink) .app-header { padding: 4px 16px 8px; border: 0; min-height: 52px; }
.os:not(.eink) .app-header h1 { font: 700 30px / 1.2 var(--font); letter-spacing: -0.02em; }
.os:not(.eink) .window .app-header h1 { font-size: 22px; }
.os:not(.eink) .workspace-subtitle { font-size: 13px; }
.os:not(.eink) .app-actions { gap: 4px; }
.os:not(.eink) .app-actions .btn { min-height: 44px; padding: 0 8px; background: none; border: 0; color: var(--accent); font-size: 17px; font-weight: 400; }
.os:not(.eink) .app-actions .btn:active { opacity: .4; filter: none; }
.os:not(.eink) .app-body { padding: 0 16px 32px; }
/* grouped content */
.os:not(.eink) .section { margin-top: 24px; }
.os:not(.eink) .section-label { margin: 0 16px 6px; font-size: 13px; font-weight: 400; letter-spacing: 0; text-transform: uppercase; color: var(--muted); }
.os:not(.eink) .glass-card { border: 0; border-radius: 10px; padding: 12px 16px; background: var(--card, var(--surface)); }
.os:not(.eink) .list { gap: 0; border-radius: 10px; overflow: hidden; background: var(--card, var(--surface)); }
.os:not(.eink) .list > .list-row { border: 0; border-radius: 0; background: transparent; padding: 11px 16px; min-height: 44px; position: relative; }
.os:not(.eink) .list > .list-row + .list-row::before { content: ""; position: absolute; top: 0; left: 16px; right: 0; height: 0.5px; background: var(--sep); }
.os:not(.eink) .list > .list-row:active { background: var(--surface-3); transform: none; }
.os:not(.eink) .list-row { font-size: 17px; }
.os:not(.eink) .list-title { font-size: 17px; font-weight: 400; letter-spacing: -0.02em; margin-bottom: 1px; }
.os:not(.eink) .list-row .muted, .os:not(.eink) .list-row .small { font-size: 15px; }
.os:not(.eink) .kv { font-size: 17px; padding: 11px 0; min-height: 44px; align-items: center; border-bottom: 0.5px solid var(--sep); }
.os:not(.eink) .small { font-size: 13px; }
/* controls */
.os:not(.eink) .btn { min-height: 44px; padding: 0 20px; border: 0; border-radius: 12px; background: var(--accent-fill); color: #fff; font-size: 17px; font-weight: 600; letter-spacing: -0.02em; box-shadow: none; }
.os:not(.eink) .btn:hover:not(:disabled) { box-shadow: none; filter: brightness(1.08); }
.os:not(.eink) .btn:active { filter: brightness(0.85); background: var(--accent-fill); }
.os:not(.eink) .btn.ghost { background: color-mix(in srgb, var(--accent-fill) 14%, transparent); color: var(--accent); border: 0; }
.os:not(.eink) .btn.danger { background: color-mix(in srgb, var(--red) 14%, transparent); color: var(--red); border: 0; }
.os:not(.eink) .field { min-height: 44px; border: 0; border-radius: 10px; padding: 10px 16px; font-size: 17px; background: var(--fill-soft); }
.os:not(.eink) .field:focus { box-shadow: 0 0 0 2px color-mix(in srgb, var(--accent) 55%, transparent); }
.os:not(.eink) .segmented { padding: 2px; border: 0; border-radius: 9px; background: var(--fill); }
.os:not(.eink) .segmented button { min-height: 32px; border-radius: 7px; font-size: 13px; font-weight: 500; }
.os:not(.eink) .segmented button.on { background: var(--seg-on); color: var(--text); font-weight: 600; box-shadow: 0 1px 3px rgba(0,0,0,.2); }
.os:not(.eink) .workspace-nav { padding: 0 16px 8px; gap: 6px; border-bottom: 0.5px solid var(--sep); }
.os:not(.eink) .workspace-nav button { min-height: 36px; padding: 0 14px; border-radius: 18px; font-size: 15px; font-weight: 500; background: var(--fill-soft); color: var(--muted); }
.os:not(.eink) .workspace-nav button.active { background: color-mix(in srgb, var(--accent) 18%, transparent); color: var(--accent); box-shadow: none; }
.os:not(.eink) .tag-chip { min-height: 32px; display: inline-flex; align-items: center; padding: 0 12px; border-radius: 16px; font-size: 15px; background: var(--fill-soft); }
.os:not(.eink) .tag-chip.active { background: color-mix(in srgb, var(--accent) 18%, transparent); color: var(--accent); box-shadow: none; }
/* home, dock, status bar */
.os:not(.eink) .status-bar { padding: 14px 28px 4px; font-size: 15px; font-weight: 600; letter-spacing: -0.01em; font-variant-numeric: tabular-nums; }
.os:not(.eink) .phone-shell .home-grid { gap: 22px 8px; padding: 20px 16px; }
.os:not(.eink) .icon-tile { border-radius: 22.4%; box-shadow: 0 1px 2px rgba(0,0,0,.25), inset 0 0 0 0.5px rgba(255,255,255,.2); }
.os:not(.eink) .icon-label { font-size: 11px; font-weight: 500; letter-spacing: 0; }
.os:not(.eink) .dock { margin: 0 14px 28px; padding: 12px; border: 0; border-radius: 30px; }
.os:not(.eink) .desk-dock { border: 0; border-radius: 22px; padding: 8px 12px; }
.os:not(.eink) .dock-dot { background: var(--text); box-shadow: none; }
.os:not(.eink) .menu-bar { height: 28px; font-size: 13px; border-bottom: 0.5px solid var(--sep); }
.os:not(.eink) .phone-home-heading h1 { font: 700 28px / 1.15 var(--font); letter-spacing: -0.02em; margin: 4px 0; }
.os:not(.eink) .phone-home-heading p { font-size: 15px; letter-spacing: 0; text-transform: none; }
.os:not(.eink) .home-eyebrow { font-size: 13px; letter-spacing: 0; text-transform: none; color: var(--accent); font-weight: 600; }
.os:not(.eink) .clock-widget { padding: 16px; border: 0; border-radius: 20px; }
.os:not(.eink) .clock-widget-time { font-size: 44px; font-weight: 300; font-variant-numeric: tabular-nums; }
.os:not(.eink) .jump-heading h2 { font: 600 20px / 1.2 var(--font); letter-spacing: -0.02em; }
.os:not(.eink) .jump-heading > div > span { font-size: 13px; letter-spacing: 0; color: var(--muted); font-weight: 400; }
.os:not(.eink) .jump-list { gap: 0; border-radius: 12px; overflow: hidden; background: var(--surface); }
.os:not(.eink) .jump-card { border: 0; border-radius: 0; background: transparent; box-shadow: none; position: relative; }
.os:not(.eink) .jump-card + .jump-card::before { content: ""; position: absolute; top: 0; left: 62px; right: 0; height: 0.5px; background: var(--sep); }
.os:not(.eink) .jump-resume { min-height: 60px; padding: 8px 0 8px 14px; }
.os:not(.eink) .jump-icon { width: 40px; height: 40px; border-radius: 9px; }
.os:not(.eink) .jump-copy strong { font-size: 17px; font-weight: 400; }
.os:not(.eink) .jump-copy small { font-size: 13px; }
.os:not(.eink) .home-search { min-height: 44px; border: 0; border-radius: 12px; font-size: 17px; background: var(--fill-soft); }
/* windows, lock */
.os:not(.eink) .window { border-radius: 12px; border-color: var(--sep); box-shadow: 0 20px 60px rgba(0,0,0,.4); }
.os:not(.eink) .window.focused { box-shadow: 0 20px 60px rgba(0,0,0,.4); }
.os:not(.eink) .titlebar { height: 36px; }
.os:not(.eink) .title { font-size: 13px; font-weight: 600; letter-spacing: 0; text-transform: none; color: var(--text); }
.os:not(.eink) .light { width: 12px; height: 12px; }
.os:not(.eink) .lock-time { font-weight: 300; letter-spacing: -2px; font-variant-numeric: tabular-nums; }
.os:not(.eink) .lock-date { font-size: 20px; letter-spacing: 0; text-transform: none; opacity: .85; }
.os:not(.eink) .pad { grid-template-columns: repeat(3, 76px); gap: 14px 22px; }
.os:not(.eink) .pad-key { width: 76px; height: 76px; font-size: 32px; font-weight: 300; background: var(--w14); border: 0; }
.os:not(.eink) .dots span { width: 12px; height: 12px; border-color: var(--text); box-shadow: none; }
.os:not(.eink) .dots span.on { background: var(--text); box-shadow: none; }
/* messages and Focus */
.os:not(.eink) .bubble { padding: 8px 14px; border-radius: 18px; font-size: 17px; line-height: 1.3; border: 0; }
.os:not(.eink) .bubble.assistant { background: var(--surface-2); color: var(--text); }
.os:not(.eink) .bubble.user, .os:not(.eink) .bubble.sms-out { background: var(--accent-fill); color: #fff; border: 0; }
.os:not(.eink) .focus-popup { border: 0; border-radius: 14px; box-shadow: 0 8px 28px rgba(0,0,0,.25); }
.os:not(.eink) .focus-presets .btn { min-height: 34px; padding: 0 14px; border-radius: 17px; font-size: 15px; font-weight: 500; }
.os:not(.eink) .focus-presets .btn.selected { background: var(--accent-fill); color: #fff; box-shadow: none; }
.os:not(.eink) .focus-banner { border: 0; border-radius: 14px; background: var(--surface); }
.os:not(.eink) .focus-on-bar { border: 0; border-radius: 12px; background: var(--surface); }
/* ── Boot screen: the red 2am logo is written in stroke by stroke ── */
.boot-splash { position: fixed; inset: 0; z-index: 9999; display: grid; place-content: center; justify-items: center; gap: 26px; background: #000; color: #ff1a1a; transition: opacity .45s ease, transform .45s ease; }
.boot-splash.leaving { opacity: 0; transform: scale(1.03); pointer-events: none; }
.boot-glow { position: absolute; width: 380px; height: 380px; border-radius: 50%; background: radial-gradient(circle, rgba(255,26,26,.16), transparent 66%); animation: boot-breathe 2.4s ease-in-out infinite; }
.boot-mark { position: relative; max-width: 86vw; height: auto; filter: drop-shadow(0 0 14px rgba(255,26,26,.55)); }
.mark-2am { overflow: visible; }
.mark-animate .mark-stroke { stroke-dasharray: 1; stroke-dashoffset: 1; animation: mark-draw 1s cubic-bezier(.5,.1,.3,1) forwards; }
.mark-animate .s2 { animation-duration: 1.3s; animation-delay: .75s; }
.boot-line { position: relative; width: 96px; height: 2px; overflow: hidden; border-radius: 1px; background: rgba(255,255,255,.1); }
.boot-line span { position: absolute; inset: 0 auto 0 0; width: 40%; border-radius: 1px; background: linear-gradient(90deg, transparent, #ff1a1a, transparent); animation: boot-sweep 1.3s 1.2s ease-in-out infinite; }
.menu-logo { color: #ff1a1a; margin-right: 4px; }
@keyframes mark-draw { to { stroke-dashoffset: 0; } }
@keyframes boot-sweep { from { transform: translateX(-110%); } to { transform: translateX(260%); } }
@keyframes boot-breathe { 0%, 100% { opacity: .6; transform: scale(.94); } 50% { opacity: 1; transform: scale(1.06); } }
.os.reduce-motion .boot-splash *, .os.reduce-motion .boot-splash { animation: none !important; }
.os.reduce-motion .mark-stroke { stroke-dashoffset: 0; }
@media (prefers-reduced-motion: reduce) { .boot-splash *, .boot-splash { animation: none !important; transition: none !important; } .mark-stroke { stroke-dashoffset: 0 !important; } }

/* ── Lock screen: SOS in the corner, a soft two-row keypad (not a phone dialer) ── */
.os:not(.eink) .lock-sos { left: 20px; bottom: 24px; }
.os:not(.eink) .lock:has(.lock-sos) .lock-hint { bottom: 84px; }
.os:not(.eink) .lock-sos .sos-button { min-width: 44px; min-height: 36px; padding: 6px 10px; font-size: 10px; opacity: .8; }
.os:not(.eink) .pad { grid-template-columns: repeat(3, 72px); gap: 14px 22px; }
.os:not(.eink) .pad-key { position: relative; width: 72px; height: 72px; border-radius: 50%; overflow: hidden; font-size: 28px; font-weight: 300; background: var(--w10); border: 0; box-shadow: inset 0 1px 0 rgba(255,255,255,.28), 0 1px 2px rgba(0,0,0,.12); transition: transform .32s cubic-bezier(.3,1.5,.5,1), background .4s ease, box-shadow .4s ease; }
.os:not(.eink) .pad-key::after { content: ""; position: absolute; inset: 0; border-radius: inherit; background: radial-gradient(circle at 50% 38%, rgba(255,255,255,.75), color-mix(in srgb, var(--accent) 45%, transparent) 62%, transparent 78%); opacity: 0; pointer-events: none; }
.os:not(.eink) .pad-key:active { transform: scale(.93); background: var(--w18); box-shadow: inset 0 2px 4px rgba(0,0,0,.18), 0 0 0 rgba(0,0,0,0); transition-duration: .06s, .06s, .06s; }
.os:not(.eink) .pad-key:active::after { animation: key-flash .38s ease-out; }
.os:not(.eink) .pad-key.blank { box-shadow: none; }
.os:not(.eink) .pad-key.blank::after { display: none; }
/* lock screen text buttons stay readable on light wallpapers */
.os:not(.eink) .passcode .text-btn { color: var(--muted); min-height: 44px; font-size: 15px; }
@keyframes key-flash { 0% { opacity: .85; } 100% { opacity: 0; } }
.os.reduce-motion .pad-key::after { animation: none !important; }

/* ── Home screen ── */
.home-screen { display: flex; flex: 1; flex-direction: column; gap: 16px; min-height: 0; padding: 18px 20px 12px; overflow-y: auto; animation: zoomIn .35s ease; }
.home-clock { display: flex; flex-direction: column; gap: 2px; padding: 12px 2px 4px; }
.home-time { font: 200 76px / 1 var(--font); letter-spacing: -.05em; font-variant-numeric: tabular-nums; }
.home-date { font-size: 17px; font-weight: 500; color: var(--muted); }
.quick-row { display: flex; gap: 8px; }
.quick-chip { display: inline-flex; align-items: center; gap: 6px; min-height: 36px; padding: 0 12px; border-radius: 18px; background: var(--fill-soft); color: var(--text); font-size: 13px; font-weight: 500; transition: background .3s ease, transform .2s ease; }
.quick-chip:active { transform: scale(.95); background: var(--fill); }
.quick-chip.on { background: color-mix(in srgb, var(--accent) 22%, transparent); color: var(--accent); }
.home-widgets { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
.home-widget { display: flex; flex-direction: column; align-items: flex-start; gap: 3px; min-height: 84px; padding: 12px; border-radius: 18px; background: var(--fill-soft); text-align: left; transition: transform .22s cubic-bezier(.3,1.4,.5,1), background .3s ease; }
.home-widget:active { transform: scale(.96); background: var(--fill); }
.widget-icon { display: grid; place-items: center; width: 26px; height: 26px; margin-bottom: 8px; border-radius: 8px; color: #fff; }
.widget-name { font-size: 15px; font-weight: 600; letter-spacing: -.01em; }
.widget-line { max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: var(--muted); font-size: 12px; }
.home-empty { margin: auto; color: var(--muted); font-size: 15px; text-align: center; }
.page-pill { display: flex; align-items: center; justify-content: center; gap: 7px; align-self: center; min-width: 64px; min-height: 44px; margin-top: auto; padding: 0 16px; border-radius: 22px; transition: background .3s ease; }
.page-pill:active { background: var(--fill-soft); }
.page-pill span { width: 7px; height: 7px; border-radius: 50%; background: var(--muted); opacity: .45; transition: opacity .3s ease, transform .3s ease; }
.page-pill span.on { background: var(--text); opacity: 1; transform: scale(1.15); }
.phone-shell .dock { margin: 0 20px 26px; padding: 10px 14px; border-radius: 26px; }
.os:not(.eink) .icon-tile { border-radius: 24%; box-shadow: 0 1px 2px rgba(0,0,0,.2); }
.os:not(.eink) .icon-label { font-size: 10.5px; }
.os:not(.eink) .home-bar.charging { background: linear-gradient(90deg, var(--accent) 0 0) no-repeat var(--w75); background-size: 0 100%; animation: bar-charge var(--hold, 2s) linear forwards; }
@keyframes bar-charge { to { background-size: 100% 100%; } }
.home-bar-zone:focus-visible { outline: 2px solid var(--accent); outline-offset: -4px; border-radius: 12px; }
/* app carousel */
.carousel { position: absolute; inset: 0; z-index: 8; display: flex; flex-direction: column; padding-top: 52px; background: color-mix(in srgb, var(--bg) 55%, transparent); backdrop-filter: blur(28px); -webkit-backdrop-filter: blur(28px); animation: carousel-in .32s cubic-bezier(.2,.9,.3,1); }
.carousel-track { display: flex; flex: 1; min-height: 0; overflow-x: auto; scroll-snap-type: x mandatory; overscroll-behavior-x: contain; }
.carousel-page { display: grid; flex: 0 0 100%; align-content: center; gap: 22px 4px; padding: 0 16px; scroll-snap-align: center; }
.carousel-pill { margin: 0 auto 30px; }
@keyframes carousel-in { from { opacity: 0; transform: translateY(40px) scale(.97); } to { opacity: 1; transform: none; } }
/* sheets (quick controls, customize) */
.sheet-scrim { position: absolute; inset: 0; z-index: 20; display: flex; align-items: flex-end; background: rgba(0,0,0,.35); animation: fade .2s ease; }
.sheet { width: 100%; max-height: 82%; overflow-y: auto; padding: 8px 16px 24px; border-radius: 22px 22px 0 0; background: var(--bg); color: var(--text); animation: sheet-up .3s cubic-bezier(.2,.9,.3,1); }
.sheet-grab { width: 36px; height: 5px; margin: 0 auto 8px; border-radius: 3px; background: var(--sep); }
.sheet-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
.sheet-head h2 { font: 700 22px / 1.2 var(--font); letter-spacing: -.02em; }
.sheet-done { min-height: 44px; padding: 0 4px; color: var(--accent); font-size: 17px; font-weight: 600; }
.sheet-group { margin-bottom: 16px; border-radius: 12px; overflow: hidden; background: var(--surface); }
.sheet-scroll { max-height: 220px; overflow-y: auto; }
.sheet-label { margin: 0 16px 6px; color: var(--muted); font-size: 13px; text-transform: uppercase; }
.sheet-row { position: relative; display: flex; align-items: center; justify-content: space-between; gap: 12px; width: 100%; min-height: 44px; padding: 10px 16px; font-size: 17px; text-align: left; }
.sheet-row + .sheet-row::before { content: ""; position: absolute; top: 0; left: 16px; right: 0; height: .5px; background: var(--sep); }
.sheet-row:disabled { opacity: .4; }
.sheet-actions { display: flex; gap: 2px; }
.sheet-actions button { display: grid; place-items: center; width: 36px; min-height: 36px; border-radius: 10px; color: var(--accent); }
.sheet-actions button:disabled { opacity: .25; }
.flip-up { transform: rotate(-90deg); } .flip-down { transform: rotate(90deg); }
.sheet-reset { width: 100%; min-height: 44px; color: var(--red); font-size: 17px; }
.sheet-sos { display: flex; align-items: center; gap: 12px; }
.switch { position: relative; flex: none; width: 51px; height: 31px; border-radius: 16px; background: var(--fill); transition: background .25s ease; }
.switch::after { content: ""; position: absolute; top: 2px; left: 2px; width: 27px; height: 27px; border-radius: 50%; background: #fff; box-shadow: 0 2px 4px rgba(0,0,0,.25); transition: transform .25s cubic-bezier(.3,1.3,.5,1); }
.switch.on { background: var(--green); }
.switch.on::after { transform: translateX(20px); }
@keyframes sheet-up { from { transform: translateY(100%); } to { transform: none; } }
/* search drops down from the top */
.smart-search[open] { animation: search-drop .28s cubic-bezier(.2,.9,.3,1); }
@keyframes search-drop { from { opacity: 0; transform: translateY(-28px); } to { opacity: 1; transform: none; } }
.os.reduce-motion .home-screen, .os.reduce-motion .carousel, .os.reduce-motion .sheet, .os.reduce-motion .smart-search { animation: none; }
/* swipe-down control panel and Focus modes */
.pull-zone { position: absolute; top: 0; left: 0; right: 0; height: 30px; z-index: 35; touch-action: none; }
.sheet-scrim.top { align-items: flex-start; z-index: 45; }
.sheet.top { max-height: 92%; padding-top: 18px; border-radius: 0 0 24px 24px; animation: sheet-down .3s cubic-bezier(.2,.9,.3,1); }
@keyframes sheet-down { from { transform: translateY(-100%); } to { transform: none; } }
.control-status { display: flex; gap: 8px; margin-bottom: 14px; }
.control-status span { display: inline-flex; align-items: center; gap: 6px; min-height: 32px; padding: 0 12px; border-radius: 16px; background: var(--fill-soft); font-size: 13px; font-weight: 500; }
.mode-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; margin-bottom: 12px; }
.mode-tile { display: flex; flex-direction: column; align-items: flex-start; gap: 2px; min-height: 64px; padding: 12px 14px; border-radius: 16px; background: var(--surface); text-align: left; transition: transform .25s cubic-bezier(.3,1.4,.5,1), background .3s ease; }
.mode-tile:active { transform: scale(.96); }
.mode-name { font-size: 17px; font-weight: 600; letter-spacing: -.02em; }
.mode-status { color: var(--muted); font-size: 12px; }
.mode-tile.on { background: var(--accent-fill); color: #fff; }
.mode-tile.on .mode-status { color: rgba(255,255,255,.85); }
.duration-row { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 16px; }
.duration-chip { min-height: 32px; padding: 0 12px; border-radius: 16px; background: var(--fill-soft); color: var(--muted); font-size: 13px; font-weight: 500; }
.duration-chip.on { background: color-mix(in srgb, var(--accent) 18%, transparent); color: var(--accent); }
.control-note { margin-bottom: 16px; color: var(--muted); font-size: 13px; line-height: 1.4; }
.os.reduce-motion .sheet.top { animation: none; }
/* Settings > Focus: modes, people, apps */
.mode-picker { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 12px; }
.allow-list { display: grid; margin-bottom: 8px; border-radius: 12px; overflow: hidden; background: var(--surface); }
.allow-row { position: relative; display: flex; align-items: center; justify-content: space-between; gap: 12px; min-height: 44px; padding: 8px 16px; font-size: 15px; text-align: left; }
.allow-row + .allow-row::before { content: ""; position: absolute; top: 0; left: 16px; right: 0; height: .5px; background: var(--sep); }
.allow-row small { display: block; color: var(--muted); font-size: 12px; }
.allow-check { color: var(--accent); font-weight: 700; }
.allow-add { display: flex; gap: 8px; margin-top: 8px; }
.allow-add .field { margin: 0; }
/* desktop home */
.desktop-widgets { grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); margin: 16px 0; max-width: 560px; }
.desktop-home .home-clock { padding-left: 0; }
/* Music */
.music-tabs { margin: 4px 0 12px; }
.music-tools { display: flex; gap: 8px; margin-bottom: 10px; }
.music-tools .field { margin: 0; }
.music-tools .music-sort { width: auto; flex: none; }
.music-play-row { display: flex; gap: 8px; margin-bottom: 12px; }
.music-play-row .btn { flex: 1; }
.music-note { padding: 8px 4px; }
.music-label { margin: 14px 4px 6px; color: var(--muted); font-size: 13px; text-transform: uppercase; }
.music-head { margin-bottom: 4px; }
.music-back { display: inline-flex; align-items: center; min-height: 44px; color: var(--accent); font-size: 17px; }
.music-title-field { font-size: 22px; font-weight: 700; background: transparent; padding-left: 4px; }
.music-new { display: flex; gap: 8px; margin-bottom: 12px; align-items: center; }
.music-new .field { margin: 0; flex: 1; }
.song-list { display: grid; margin-bottom: 14px; border-radius: 12px; overflow: hidden; background: var(--surface); }
.song-list > * + *, .song-reorder + .song-reorder { position: relative; }
.song-list > * + *::before { content: ""; position: absolute; top: 0; left: 68px; right: 0; height: .5px; background: var(--sep); }
.song-row { display: flex; align-items: center; min-width: 0; padding-right: 4px; }
.song-main { display: flex; align-items: center; flex: 1; gap: 12px; min-width: 0; min-height: 60px; padding: 8px 4px 8px 12px; text-align: left; }
.song-main.list-link { width: 100%; padding-right: 14px; }
.song-art { display: grid; place-items: center; flex: none; border-radius: 8px; color: rgba(255,255,255,.92); box-shadow: inset 0 0 0 .5px rgba(255,255,255,.2); }
.fav-art { width: 44px; height: 44px; background: linear-gradient(145deg, #fb7185, #be123c); }
.song-copy { display: flex; flex-direction: column; min-width: 0; flex: 1; gap: 2px; }
.song-copy strong { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 16px; font-weight: 500; letter-spacing: -.01em; }
.song-copy strong.on { color: var(--accent); }
.song-copy .muted { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.song-icon { position: relative; display: grid; place-items: center; flex: none; width: 40px; min-height: 44px; color: var(--muted); transition: transform .2s cubic-bezier(.3,1.5,.5,1), color .2s ease; }
.song-icon:active { transform: scale(.88); }
.song-icon[aria-pressed="true"], .song-icon.active { color: var(--accent); }
.song-icon.big { width: 48px; color: var(--text); }
.song-icon.big.active { color: var(--accent); }
.song-reorder { display: flex; align-items: center; }
.song-reorder .song-row { flex: 1; min-width: 0; }
.song-move { display: flex; flex: none; padding-right: 6px; }
.song-move button { display: grid; place-items: center; width: 34px; min-height: 44px; color: var(--accent); }
.song-move button:disabled { opacity: .25; }
.mini-player { position: sticky; bottom: 8px; z-index: 3; display: flex; align-items: center; gap: 2px; margin-top: auto; padding: 6px 6px 6px 10px; border-radius: 16px; background: var(--solid); box-shadow: 0 6px 24px rgba(0,0,0,.28), inset 0 0 0 .5px var(--sep); }
.mini-open { display: flex; align-items: center; flex: 1; gap: 10px; min-width: 0; min-height: 48px; text-align: left; }
.full-player { padding-bottom: 28px; }
.full-art { display: grid; place-items: center; margin: 4px 0 16px; }
.full-art .song-art { border-radius: 16px; box-shadow: 0 14px 40px rgba(0,0,0,.35); }
.full-meta { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }
.full-title { display: flex; flex-direction: column; flex: 1; min-width: 0; gap: 2px; }
.full-title strong { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 22px; font-weight: 700; letter-spacing: -.02em; }
.full-controls { display: flex; align-items: center; justify-content: space-between; margin: 14px 0 6px; }
.full-play { display: grid; place-items: center; width: 68px; height: 68px; border-radius: 50%; background: var(--text); color: var(--bg); transition: transform .22s cubic-bezier(.3,1.5,.5,1); }
.full-play:active { transform: scale(.92); }
.repeat-one { position: absolute; right: 6px; top: 8px; font-size: 10px; font-weight: 800; }
.os.reduce-motion .song-icon, .os.reduce-motion .full-play { transition: none; }
/* VPN */
.vpn-card { border-radius: 12px; overflow: hidden; background: var(--surface); }
.vpn-detail { display: grid; grid-template-columns: minmax(0, 1fr); gap: 12px; padding: 4px 16px 16px; }
.vpn-detail > *, .vpn-form > * { min-width: 0; max-width: 100%; }
.vpn-detail .md-check, .vpn-form .md-check { display: flex; align-items: flex-start; gap: 8px; white-space: normal; }
.vpn-detail .focus-field, .vpn-form .focus-field { display: grid; gap: 6px; }
.vpn-detail .btn { width: 100%; }
.vpn-detail .btn.danger { width: 100%; }
.vpn-form { display: grid; gap: 10px; margin-top: 12px; }
.vpn-form .field, .vpn-detail .field { margin: 0; }
.vpn-config { font: 12px / 1.4 ui-monospace, SFMono-Regular, Menlo, monospace; user-select: text; -webkit-user-select: text; resize: vertical; white-space: pre; overflow: auto; }
.vpn-steps { padding-left: 20px; display: grid; gap: 6px; color: var(--muted); }
/* control panel tiles and sliders, brightness dimmer, long-press helper */
.dimmer { position: fixed; inset: 0; z-index: 9990; background: #000; pointer-events: none; transition: opacity .15s ease; }
.os.eink .dimmer { display: none; }
.tile-row.single { grid-template-columns: 1fr; margin-top: -4px; }
.tile.wide { min-height: 64px; }
.cam-dot { color: #ef4444; font-size: 12px; margin-right: 6px; animation: fade 0.2s; }
.spy-dot { display: inline-flex; color: #f59e0b; }
.tile-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 12px; }
.tile { display: flex; flex-direction: column; align-items: flex-start; gap: 4px; min-height: 84px; padding: 12px; border-radius: 16px; background: var(--surface); text-align: left; transition: transform .25s cubic-bezier(.3,1.4,.5,1), background .3s ease; }
.tile:active { transform: scale(.95); }
.tile-name { margin-top: auto; font-size: 15px; font-weight: 600; letter-spacing: -.01em; }
.tile-sub { color: var(--muted); font-size: 12px; }
.tile.on { background: var(--accent-fill); color: #fff; }
.tile.on .tile-sub { color: rgba(255,255,255,.85); }
.slider-group { display: grid; gap: 8px; margin-bottom: 14px; }
.slider-row { display: flex; align-items: center; gap: 12px; min-height: 48px; padding: 0 14px; border-radius: 16px; background: var(--surface); }
.slider-row input[type=range] { flex: 1; min-width: 0; accent-color: var(--accent-fill); }
.slider-icon { display: grid; place-items: center; width: 32px; min-height: 44px; color: var(--text); }
.slider-icon[aria-pressed="true"] { color: var(--red); }
.sr-only { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }
.sr-only-focus { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }
.sr-only-focus:focus { position: static; width: auto; height: auto; clip: auto; align-self: flex-start; padding: 8px 12px; border-radius: 10px; background: var(--surface); color: var(--accent); }
.home-screen { -webkit-touch-callout: none; user-select: none; -webkit-user-select: none; }
.os.reduce-motion .dimmer, .os.reduce-motion .tile { transition: none; }
/* Handwriting in Notes: editable vector strokes saved with the encrypted note. */
.note-ink-section { margin-top: 18px; }
.note-ink-section h2 { margin: 0 0 10px; font-size: 16px; }
.note-ink { display: flex; flex-direction: column; gap: 10px; }
.note-ink-toolbar, .note-ink-options, .note-ink-colors { display: flex; align-items: center; gap: 7px; flex-wrap: wrap; }
.note-ink-toolbar .btn { min-height: 40px; padding: 0 11px; }
.note-ink-options { justify-content: space-between; }
.note-ink-color { width: 28px; height: 28px; min-width: 28px; border: 2px solid var(--surface); border-radius: 50%; cursor: pointer; }
.note-ink-width { display: flex; align-items: center; gap: 8px; color: var(--muted); font-size: 12px; }
.note-ink-paper { width: 100%; min-height: 190px; aspect-ratio: 5 / 3; border: 1px solid var(--hairline); border-radius: 12px; background-color: var(--surface); background-image: linear-gradient(to bottom, transparent 31px, color-mix(in srgb, var(--muted) 18%, transparent) 32px); background-size: 100% 32px; touch-action: none; cursor: crosshair; }
.note-ink-paper polyline { vector-effect: non-scaling-stroke; }
.os.eink .note-ink-paper { background: #fff; background-image: linear-gradient(to bottom, transparent 31px, #aaa 32px); }
@media (max-width: 520px) { .note-ink-toolbar { gap: 4px; } .note-ink-toolbar .btn { min-height: 44px; padding: 0 9px; font-size: 12px; } }

/* Veynor Camera: local face-position framing prototype. */
.camera-workspace { height: 100%; min-height: 0; overflow: auto; padding: 20px; display: flex; flex-direction: column; gap: 14px; }
.camera-face-box { position: absolute; border: 2px solid #43e6a2; border-radius: 16px; box-shadow: 0 0 0 1px rgba(0,0,0,.45); pointer-events: none; }
.camera-status { max-width: 760px; margin: 0 auto 8px; text-align: center; }
.camera-gallery-grid { width: 100%; max-width: 900px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 12px; }
.camera-gallery-card { min-width: 0; padding: 8px; display: grid; gap: 8px; text-align: left; color: var(--text); background: var(--surface); border: 1px solid var(--hairline); border-radius: 14px; cursor: pointer; }
.camera-gallery-card img { width: 100%; aspect-ratio: 4 / 3; object-fit: cover; border-radius: 9px; background: #080a0e; }
.camera-gallery-card span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 12px; }
.camera-gallery-view { width: 100%; max-width: 760px; margin: 0 auto; display: grid; justify-items: start; gap: 12px; }
.camera-photo-large { width: 100%; max-height: 65vh; object-fit: contain; border-radius: 14px; background: #080a0e; }
.camera-chip { min-height: 40px; padding: 8px 16px; border-radius: 999px; border: 1px solid var(--hairline); background: var(--surface); color: var(--text); font-size: 14px; font-weight: 600; }
.camera-chip.active { background: var(--accent-fill); color: #fff; border-color: transparent; }
.camera-chip:disabled { opacity: .5; }
.camera-chip-row { display: flex; gap: 8px; flex-wrap: wrap; width: 100%; max-width: 900px; margin: 0 auto; }
.camera-focus-ring { position: absolute; width: 64px; height: 64px; margin: -32px 0 0 -32px; border: 2px solid #ffd84d; border-radius: 50%; pointer-events: none; box-shadow: 0 0 0 1px rgba(0,0,0,.45); }
.camera-rec { position: absolute; top: 12px; left: 12px; display: flex; align-items: center; gap: 8px; padding: 6px 12px; border-radius: 999px; background: rgba(0,0,0,.62); color: #fff; font: 700 14px / 1 var(--font); font-variant-numeric: tabular-nums; pointer-events: none; }
.camera-rec i { width: 10px; height: 10px; border-radius: 50%; background: #ff3b30; animation: camera-blink 1s steps(2, start) infinite; }
.camera-rec i.paused { animation: none; background: #ffd84d; }
.camera-countdown { position: absolute; inset: 0; display: grid; place-items: center; font: 800 96px / 1 var(--font); color: #fff; text-shadow: 0 2px 16px rgba(0,0,0,.7); background: rgba(0,0,0,.25); pointer-events: none; }
@keyframes camera-blink { to { visibility: hidden; } }
@media (prefers-reduced-motion: reduce) { .camera-rec i { animation: none; } }
.camera-viewer-nav, .camera-viewer-actions, .camera-album-row { display: flex; gap: 8px; flex-wrap: wrap; align-items: center; width: 100%; }
.camera-album-row { max-width: 900px; margin: 0 auto; }
.camera-album-row .field { flex: 1 1 180px; min-width: 0; }
.camera-danger { color: var(--red); }
.camera-gallery-card { position: relative; }
.camera-gallery-card video { width: 100%; aspect-ratio: 4 / 3; object-fit: cover; border-radius: 9px; background: #080a0e; }
.camera-badge { position: absolute; top: 14px; left: 14px; padding: 2px 8px; border-radius: 999px; background: rgba(0,0,0,.65); color: #ffd84d; font-size: 12px; }
.camera-badge-video { left: auto; right: 14px; color: #fff; }
@media (max-width: 520px) { .camera-workspace { padding: 14px; } .camera-gallery-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; } }
.cam { height: 100%; min-height: 0; width: 100%; max-width: 520px; margin: 0 auto; display: flex; flex-direction: column; position: relative; overflow: hidden; background: #000; color: #f5f5f7; }
.cam-head { display: flex; align-items: center; justify-content: space-between; padding: 14px 20px 10px; }
.cam-head h2 { margin: 0; font-size: 22px; font-weight: 600; }
.cam-ai { display: inline-flex; align-items: center; gap: 6px; min-height: 28px; padding: 5px 10px; border-radius: 14px; background: rgba(255,255,255,.12); color: rgba(245,245,247,.9); font-size: 12px; font-weight: 500; }
.cam-ai i { width: 7px; height: 7px; border-radius: 50%; background: rgba(245,245,247,.45); }
.cam-ai.on i { background: #43e6a2; }
.cam-stage { position: relative; flex: 1 1 auto; min-height: 220px; margin: 4px 12px 12px; border-radius: 24px; overflow: hidden; background: linear-gradient(180deg, #172b38, #080d14); cursor: crosshair; }
.cam-video { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.cam-grid { position: absolute; inset: 0; pointer-events: none; }
.cam-grid i { position: absolute; background: rgba(255,255,255,.25); }
.cam-grid .v1, .cam-grid .v2 { top: 0; bottom: 0; width: 1px; }
.cam-grid .h1, .cam-grid .h2 { left: 0; right: 0; height: 1px; }
.cam-grid .v1 { left: 33.333%; } .cam-grid .v2 { left: 66.666%; } .cam-grid .h1 { top: 33.333%; } .cam-grid .h2 { top: 66.666%; }
.cam-hint { position: absolute; top: 14px; left: 50%; transform: translateX(-50%); max-width: calc(100% - 28px); padding: 7px 12px; border-radius: 16px; background: rgba(0,0,0,.55); font-size: 13px; font-weight: 500; text-align: center; pointer-events: none; }
.cam-start { position: absolute; inset: 0; display: grid; place-content: center; justify-items: center; gap: 14px; padding: 24px; text-align: center; color: rgba(245,245,247,.85); cursor: default; }
.cam-start p { margin: 0; max-width: 260px; font-size: 14px; }
.cam-zoom { position: absolute; left: 50%; bottom: 16px; transform: translateX(-50%); display: flex; gap: 4px; padding: 5px; border-radius: 22px; background: rgba(0,0,0,.5); cursor: default; }
.cam-zoom button { min-width: 36px; height: 36px; padding: 0 6px; border-radius: 18px; color: rgba(245,245,247,.85); font-size: 13px; font-weight: 500; }
.cam-zoom button.on { background: #6d4aff; color: #fff; font-weight: 700; }
.cam-status { position: absolute; left: 12px; right: 12px; bottom: 64px; margin: 0; text-align: center; font-size: 12px; line-height: 1.35; color: rgba(245,245,247,.8); text-shadow: 0 1px 6px rgba(0,0,0,.8); pointer-events: none; }
.cam-mode { display: flex; justify-content: center; padding: 2px 0 10px; }
.cam-mode-track { position: relative; display: flex; padding: 4px; border-radius: 22px; background: rgba(255,255,255,.12); touch-action: none; user-select: none; }
.cam-mode-thumb { position: absolute; top: 4px; left: 4px; width: 104px; height: 34px; border-radius: 18px; background: #f5f5f7; transition: transform .2s ease; }
.cam[data-mode=photo] .cam-mode-thumb { transform: translateX(104px); }
.cam-mode-track button { position: relative; width: 104px; height: 34px; border-radius: 18px; color: rgba(245,245,247,.7); font-size: 13px; font-weight: 700; letter-spacing: .8px; }
.cam-mode-track button[aria-checked=true] { color: #000; }
.cam-mode-track button:disabled { opacity: .45; }
.cam-shutter-row { display: flex; align-items: center; justify-content: space-between; padding: 6px 36px 14px; }
.cam-thumb { position: relative; display: grid; place-items: center; width: 56px; height: 56px; overflow: hidden; border-radius: 50%; border: 2px solid #fff; background: rgba(255,255,255,.14); color: rgba(245,245,247,.85); }
.cam-thumb img, .cam-thumb video { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.cam-thumb svg { position: relative; z-index: 1; filter: drop-shadow(0 1px 3px rgba(0,0,0,.6)); }
.cam-shutter { position: relative; width: 80px; height: 80px; border-radius: 50%; border: 4px solid #fff; background: transparent; padding: 0; }
.cam-shutter span { position: absolute; inset: 4px; border-radius: 50%; background: #fff; transition: inset .15s ease, border-radius .15s ease, background .15s ease; }
.cam-shutter.video span { background: #ff3b30; }
.cam-shutter.rec span { inset: 21px; border-radius: 8px; background: #ff3b30; }
.cam-shutter:disabled { opacity: .4; }
.cam-round { display: grid; place-items: center; width: 56px; height: 56px; border-radius: 50%; background: rgba(255,255,255,.14); color: #fff; }
.cam-round:disabled { opacity: .4; }
.cam-tabs { display: flex; padding: 10px 8px max(24px, env(safe-area-inset-bottom)); border-radius: 20px 20px 0 0; background: #1c1c1e; }
.cam-tab { flex: 1 1 0; min-width: 0; min-height: 44px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; padding: 4px 0; color: rgba(245,245,247,.75); font-size: 10px; font-weight: 500; }
.cam-tab.on { color: var(--accent); }
.cam-tab[aria-disabled=true] { opacity: .4; }
.cam-sheet { position: absolute; left: 16px; right: 16px; bottom: 96px; z-index: 3; display: grid; gap: 12px; padding: 14px 16px 16px; border-radius: 20px; background: #1c1c1e; border: 1px solid rgba(255,255,255,.12); box-shadow: 0 8px 30px rgba(0,0,0,.5); }
.cam-sheet p { margin: 0; }
.cam-sheet-head { display: flex; align-items: center; justify-content: space-between; font-size: 15px; }
.cam-sheet-head span { color: var(--accent); font-weight: 600; }
.cam-sheet input[type=range] { width: 100%; min-height: 32px; accent-color: #6d4aff; }
.cam-sheet-scale { display: flex; justify-content: space-between; font-size: 12px; color: rgba(245,245,247,.6); }
@media (prefers-reduced-motion: reduce) { .cam-mode-thumb, .cam-shutter span { transition: none; } }

/* Desktop: full-frame window (green light / double-click the title bar), charging bolt on the battery. */
.light.green { background: #28c840; }
.light.green::after { content: "+"; font-size: 12px; }
.window:not(.focused) .light.green { background: var(--light-off); }
.window:not(.focused) .lights:hover .light.green { background: #28c840; }
.window.maximized { left: 0 !important; top: 0 !important; width: 100% !important; height: 100% !important; border-radius: 0; }
.os.eink .light.green { background: #fff !important; }
.battery .bolt { position: absolute; left: 50%; top: 50%; width: 11px; height: 11px; transform: translate(-50%, -50%); fill: #fff; stroke: rgba(0,0,0,0.7); stroke-width: 1.4; paint-order: stroke; pointer-events: none; }
.os.eink .battery .bolt { fill: #fff; stroke: #000; }
.battery-btn { display: inline-flex; align-items: center; justify-content: center; min-width: 32px; min-height: 28px; padding: 0 4px; background: none; border: 0; color: inherit; cursor: pointer; border-radius: 8px; }
.battery-btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
.desktop-shell .sheet-scrim.top { justify-content: flex-end; align-items: flex-start; }
.desktop-shell .sheet.top { width: min(440px, 100%); margin-top: 34px; border-radius: 0 0 24px 24px; max-height: calc(100% - 34px); }`,`veynor`);function oe({size:e=28,animate:t=!1,className:n=``}){return(0,v.createElement)(`svg`,{className:`mark-2am ${t?`mark-animate`:``} ${n}`,height:e,width:Math.round(e*1.92),viewBox:`100 420 980 510`,role:`img`,"aria-label":`2am`,fill:`none`,stroke:`currentColor`,strokeWidth:`17`,strokeLinecap:`round`,strokeLinejoin:`round`},(0,v.createElement)(`path`,{className:`mark-stroke s1`,pathLength:`1`,d:`M205 612C190 590 260 530 340 480C400 445 450 440 465 465C480 500 450 570 400 630C340 710 230 800 130 897C230 840 380 810 485 797`}),(0,v.createElement)(`path`,{className:`mark-stroke s2`,pathLength:`1`,d:`M545 657C520 700 470 770 430 772C405 768 420 720 465 690C500 665 535 652 545 657C535 700 495 745 502 752C545 735 600 685 630 652C600 700 570 740 572 752C600 720 650 660 690 642C700 640 690 660 660 700C640 725 640 730 650 722C700 670 760 625 785 620C790 630 760 690 735 715C730 728 760 726 800 712L1055 650`}))}function se({leaving:e=!1}){return(0,v.createElement)(`div`,{className:`boot-splash ${e?`leaving`:``}`,role:`status`,"aria-label":`Starting up`},(0,v.createElement)(`div`,{className:`boot-glow`,"aria-hidden":`true`}),(0,v.createElement)(oe,{size:150,animate:!0,className:`boot-mark`}),(0,v.createElement)(`div`,{className:`boot-line`,"aria-hidden":`true`},(0,v.createElement)(`span`,null)))}var ce=2700;function le(e,t){let[n,r]=(0,v.useState)(t),[i,a]=(0,v.useState)(!1);(0,v.useEffect)(()=>{if(t){r(!0);return}let e=setTimeout(()=>r(!0),ce);return()=>clearTimeout(e)},[t]);let o=e&&n;return(0,v.useEffect)(()=>{if(!o)return;let e=setTimeout(()=>a(!0),t?0:450);return()=>clearTimeout(e)},[o,t]),{done:i,leaving:o}}var ue=`veynor:`;function de(e){try{return localStorage.getItem(e)}catch{return null}}function fe(e,t){try{localStorage.setItem(e,t)}catch{}}function pe(e){let t=`${ue}${e}:`;return{get(e,n){let r=de(t+e);if(r==null)return n;try{return JSON.parse(r)}catch{return n}},set(e,n){fe(t+e,JSON.stringify(n))},remove(e){try{localStorage.removeItem(t+e)}catch{}}}}var me=6e4,he=[{id:`t1`,name:`Coach Dan`,address:`+15551234567`,unread:!1,messages:[[!1,`practice is at 4 today`,150],[!0,`ok see you there. are you coming?`,140],[!1,`Focus on: At school. Reply NOTIFY if it's urgent. (Veynor Focus)`,138]]},{id:`t2`,name:`Mom`,address:`+15550001111`,unread:!0,messages:[[!1,`how was the math test?`,95],[!0,`i think i got an A on it`,90],[!1,`proud of you. dinner is at 6, tacos`,88],[!1,`can you grab the mail on the way in?`,20]]},{id:`t3`,name:`Alex`,address:`+15552223333`,unread:!0,messages:[[!1,`bro did you finish the robotics thing`,300],[!0,`almost, the servo keeps jittering`,290],[!1,`lol same. try a bigger capacitor`,285],[!0,`oh that might be it`,280],[!1,`gym after school?`,12]]},{id:`t4`,name:`Maya`,address:`+15554445555`,unread:!1,messages:[[!1,`your 2am case design is so clean`,1500],[!0,`thanks!! more colors dropping soon`,1490]]}];function ge(){let e=Date.now(),t=new Map(he.map(t=>[t.id,t.messages.map(([n,r,i],a)=>({id:`${t.id}-${a}`,body:r,date:e-i*me,outgoing:n}))])),n=new Set(he.filter(e=>e.unread).map(e=>e.id)),r=new Set,i=()=>he.map(e=>{let r=t.get(e.id)??[],i=r[r.length-1];return{id:e.id,address:e.address,name:e.name,snippet:i?.body??``,date:i?.date??0,unread:n.has(e.id)}}).sort((e,t)=>t.date-e.date),a={state:`off`,profileId:null,since:null,message:null},o=new Set,s=e=>{a=e,o.forEach(t=>t(e))};window.veynorHost={name:`web`,battery:async()=>({level:.82,charging:!1}),online:()=>!0,telephony:{dial:async()=>void 0},vpn:{status:async()=>a,connect:async e=>{s({state:`connecting`,profileId:e,since:null,message:null}),await new Promise(e=>setTimeout(e,700)),s({state:`on`,profileId:e,since:Date.now(),message:`Demo tunnel: nothing is really encrypted.`})},disconnect:async()=>s({state:`off`,profileId:null,since:null,message:null}),onStatus:e=>(o.add(e),()=>{o.delete(e)})},sms:{threads:async()=>i(),messages:async e=>(n.delete(e),[...t.get(e)??[]]),send:async(e,n)=>{let i=he.find(t=>t.address===e);return i?(t.set(i.id,[...t.get(i.id)??[],{id:`${i.id}-${Date.now()}`,body:n,date:Date.now(),outgoing:!0}]),r.forEach(e=>e()),!0):!1},onIncoming:e=>(r.add(e),()=>{r.delete(e)})}};let c=pe(`system.permissions`),l=c.get(`messages`,[]);l.includes(`sms`)||c.set(`messages`,[...l,`sms`])}var _e=[`localhost`,`127.0.0.1`].includes(window.location.hostname);_e&&new URLSearchParams(window.location.search).get(`demo`)===`phone`&&ge();var ve=(0,v.lazy)(()=>ne(()=>import(`./DeviceSimulator-Bi4FwKV3.js`),__vite__mapDeps([0,1]))),ye=_e&&new URLSearchParams(window.location.search).get(`simulator`)===`1`,be=(0,v.lazy)(()=>ne(()=>import(`./App-566vIU4k.js`).then(e=>e.t),__vite__mapDeps([2,3,4,5,6,1,7,8,9,10,11,12,13,14,15,16,17]))),xe=(0,v.lazy)(()=>ne(()=>import(`./FeatureSubmissionPage-CjMICU93.js`),__vite__mapDeps([18,5]))),Se=(0,v.lazy)(()=>ne(()=>import(`./Chess-C4AiyWGX.js`),[])),Ce=window.location.pathname.replace(/\/+$/,``)===`/features`,we=[`clikey.store`,`www.clikey.store`].includes(window.location.hostname.toLowerCase()),Te=ye?ve:we?Se:Ce?xe:be,Ee=Te===be?(0,v.createElement)(se,null):(0,v.createElement)(`div`,{className:`public-page-loading`},`Opening Veynor…`);(0,y.createRoot)(document.getElementById(`root`)).render((0,v.createElement)(v.StrictMode,null,(0,v.createElement)(v.Suspense,{fallback:Ee},(0,v.createElement)(Te,null))));export{ae as a,re as c,o as d,s as f,le as i,ne as l,se as n,ie as o,l as p,oe as r,x as s,pe as t,d as u};