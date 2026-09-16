(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var fh={exports:{}},rl={};var dv;function WM(){if(dv)return rl;dv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:c}}return rl.Fragment=e,rl.jsx=i,rl.jsxs=i,rl}var hv;function qM(){return hv||(hv=1,fh.exports=WM()),fh.exports}var et=qM(),dh={exports:{}},ue={};var pv;function YM(){if(pv)return ue;pv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.for("react.view_transition"),E=Symbol.iterator;function R(z){return z===null||typeof z!="object"?null:(z=E&&z[E]||z["@@iterator"],typeof z=="function"?z:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,x={};function L(z,gt,Rt){this.props=z,this.context=gt,this.refs=x,this.updater=Rt||C}L.prototype.isReactComponent={},L.prototype.setState=function(z,gt){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,gt,"setState")},L.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function G(){}G.prototype=L.prototype;function w(z,gt,Rt){this.props=z,this.context=gt,this.refs=x,this.updater=Rt||C}var N=w.prototype=new G;N.constructor=w,y(N,L.prototype),N.isPureReactComponent=!0;var U=Array.isArray;function P(){}var T={H:null,A:null,T:null,S:null},O=Object.prototype.hasOwnProperty;function V(z,gt,Rt){var Z=Rt.ref;return{$$typeof:o,type:z,key:gt,ref:Z!==void 0?Z:null,props:Rt}}function Y(z,gt){return V(z.type,gt,z.props)}function $(z){return typeof z=="object"&&z!==null&&z.$$typeof===o}function ut(z){var gt={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(Rt){return gt[Rt]})}var K=/\/+/g;function tt(z,gt){return typeof z=="object"&&z!==null&&z.key!=null?ut(""+z.key):gt.toString(36)}function k(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(P,P):(z.status="pending",z.then(function(gt){z.status==="pending"&&(z.status="fulfilled",z.value=gt)},function(gt){z.status==="pending"&&(z.status="rejected",z.reason=gt)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function W(z,gt,Rt,Z,ht){var bt=typeof z;(bt==="undefined"||bt==="boolean")&&(z=null);var It=!1;if(z===null)It=!0;else switch(bt){case"bigint":case"string":case"number":It=!0;break;case"object":switch(z.$$typeof){case o:case e:It=!0;break;case S:return It=z._init,W(It(z._payload),gt,Rt,Z,ht)}}if(It)return ht=ht(z),It=Z===""?"."+tt(z,0):Z,U(ht)?(Rt="",It!=null&&(Rt=It.replace(K,"$&/")+"/"),W(ht,gt,Rt,"",function(He){return He})):ht!=null&&($(ht)&&(ht=Y(ht,Rt+(ht.key==null||z&&z.key===ht.key?"":(""+ht.key).replace(K,"$&/")+"/")+It)),gt.push(ht)),1;It=0;var mt=Z===""?".":Z+":";if(U(z))for(var Ct=0;Ct<z.length;Ct++)Z=z[Ct],bt=mt+tt(Z,Ct),It+=W(Z,gt,Rt,bt,ht);else if(Ct=R(z),typeof Ct=="function")for(z=Ct.call(z),Ct=0;!(Z=z.next()).done;)Z=Z.value,bt=mt+tt(Z,Ct++),It+=W(Z,gt,Rt,bt,ht);else if(bt==="object"){if(typeof z.then=="function")return W(k(z),gt,Rt,Z,ht);throw gt=String(z),Error("Objects are not valid as a React child (found: "+(gt==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":gt)+"). If you meant to render a collection of children, use an array instead.")}return It}function ft(z,gt,Rt){if(z==null)return z;var Z=[],ht=0;return W(z,Z,"","",function(bt){return gt.call(Rt,bt,ht++)}),Z}function ot(z){if(z._status===-1){var gt=z._result,Rt=gt();Rt.then(function(Z){(z._status===0||z._status===-1)&&(z._status=1,z._result=Z,Rt.status===void 0&&(Rt.status="fulfilled",Rt.value=Z))},function(Z){(z._status===0||z._status===-1)&&(z._status=2,z._result=Z,Rt.status===void 0&&(Rt.status="rejected",Rt.reason=Z))}),z._status===-1&&(z._status=0,z._result=Rt)}if(z._status===1)return z._result.default;throw z._result}var pt=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var gt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(gt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)};function Et(z){var gt=T.T,Rt={};Rt.types=gt!==null?gt.types:null,T.T=Rt;try{var Z=z(),ht=T.S;ht!==null&&ht(Rt,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(P,pt)}catch(bt){pt(bt)}finally{gt!==null&&Rt.types!==null&&(gt.types=Rt.types),T.T=gt}}function Zt(z){var gt=T.T;if(gt!==null){var Rt=gt.types;Rt===null?gt.types=[z]:Rt.indexOf(z)===-1&&Rt.push(z)}else Et(Zt.bind(null,z))}var jt={map:ft,forEach:function(z,gt,Rt){ft(z,function(){gt.apply(this,arguments)},Rt)},count:function(z){var gt=0;return ft(z,function(){gt++}),gt},toArray:function(z){return ft(z,function(gt){return gt})||[]},only:function(z){if(!$(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return ue.Activity=_,ue.Children=jt,ue.Component=L,ue.Fragment=i,ue.Profiler=l,ue.PureComponent=w,ue.StrictMode=s,ue.Suspense=p,ue.ViewTransition=v,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,ue.__COMPILER_RUNTIME={__proto__:null,c:function(z){return T.H.useMemoCache(z)}},ue.addTransitionType=Zt,ue.cache=function(z){return function(){return z.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(z,gt,Rt){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Z=y({},z.props),ht=z.key;if(gt!=null)for(bt in gt.key!==void 0&&(ht=""+gt.key),gt)!O.call(gt,bt)||bt==="key"||bt==="__self"||bt==="__source"||bt==="ref"&&gt.ref===void 0||(Z[bt]=gt[bt]);var bt=arguments.length-2;if(bt===1)Z.children=Rt;else if(1<bt){for(var It=Array(bt),mt=0;mt<bt;mt++)It[mt]=arguments[mt+2];Z.children=It}return V(z.type,ht,Z)},ue.createContext=function(z){return z={$$typeof:d,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:c,_context:z},z},ue.createElement=function(z,gt,Rt){var Z,ht={},bt=null;if(gt!=null)for(Z in gt.key!==void 0&&(bt=""+gt.key),gt)O.call(gt,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(ht[Z]=gt[Z]);var It=arguments.length-2;if(It===1)ht.children=Rt;else if(1<It){for(var mt=Array(It),Ct=0;Ct<It;Ct++)mt[Ct]=arguments[Ct+2];ht.children=mt}if(z&&z.defaultProps)for(Z in It=z.defaultProps,It)ht[Z]===void 0&&(ht[Z]=It[Z]);return V(z,bt,ht)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(z){return{$$typeof:h,render:z}},ue.isValidElement=$,ue.lazy=function(z){return{$$typeof:S,_payload:{_status:-1,_result:z},_init:ot}},ue.memo=function(z,gt){return{$$typeof:m,type:z,compare:gt===void 0?null:gt}},ue.startTransition=Et,ue.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},ue.use=function(z){return T.H.use(z)},ue.useActionState=function(z,gt,Rt){return T.H.useActionState(z,gt,Rt)},ue.useCallback=function(z,gt){return T.H.useCallback(z,gt)},ue.useContext=function(z){return T.H.useContext(z)},ue.useDebugValue=function(){},ue.useDeferredValue=function(z,gt){return T.H.useDeferredValue(z,gt)},ue.useEffect=function(z,gt){return T.H.useEffect(z,gt)},ue.useEffectEvent=function(z){return T.H.useEffectEvent(z)},ue.useId=function(){return T.H.useId()},ue.useImperativeHandle=function(z,gt,Rt){return T.H.useImperativeHandle(z,gt,Rt)},ue.useInsertionEffect=function(z,gt){return T.H.useInsertionEffect(z,gt)},ue.useLayoutEffect=function(z,gt){return T.H.useLayoutEffect(z,gt)},ue.useMemo=function(z,gt){return T.H.useMemo(z,gt)},ue.useOptimistic=function(z,gt){return T.H.useOptimistic(z,gt)},ue.useReducer=function(z,gt,Rt){return T.H.useReducer(z,gt,Rt)},ue.useRef=function(z){return T.H.useRef(z)},ue.useState=function(z){return T.H.useState(z)},ue.useSyncExternalStore=function(z,gt,Rt){return T.H.useSyncExternalStore(z,gt,Rt)},ue.useTransition=function(){return T.H.useTransition()},ue.version="19.3.0",ue}var mv;function kp(){return mv||(mv=1,dh.exports=YM()),dh.exports}var Ye=kp(),hh={exports:{}},ol={},ph={exports:{}},mh={};var gv;function ZM(){return gv||(gv=1,(function(o){function e(k,W){var ft=k.length;k.push(W);t:for(;0<ft;){var ot=ft-1>>>1,pt=k[ot];if(0<l(pt,W))k[ot]=W,k[ft]=pt,ft=ot;else break t}}function i(k){return k.length===0?null:k[0]}function s(k){if(k.length===0)return null;var W=k[0],ft=k.pop();if(ft!==W){k[0]=ft;t:for(var ot=0,pt=k.length,Et=pt>>>1;ot<Et;){var Zt=2*(ot+1)-1,jt=k[Zt],z=Zt+1,gt=k[z];if(0>l(jt,ft))z<pt&&0>l(gt,jt)?(k[ot]=gt,k[z]=ft,ot=z):(k[ot]=jt,k[Zt]=ft,ot=Zt);else if(z<pt&&0>l(gt,ft))k[ot]=gt,k[z]=ft,ot=z;else break t}}return W}function l(k,W){var ft=k.sortIndex-W.sortIndex;return ft!==0?ft:k.id-W.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var p=[],m=[],S=1,_=null,v=3,E=!1,R=!1,C=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;function w(k){for(var W=i(m);W!==null;){if(W.callback===null)s(m);else if(W.startTime<=k)s(m),W.sortIndex=W.expirationTime,e(p,W);else break;W=i(m)}}function N(k){if(C=!1,w(k),!R)if(i(p)!==null)R=!0,U||(U=!0,$());else{var W=i(m);W!==null&&tt(N,W.startTime-k)}}var U=!1,P=-1,T=5,O=-1;function V(){return y?!0:!(o.unstable_now()-O<T)}function Y(){if(y=!1,U){var k=o.unstable_now();O=k;var W=!0;try{t:{R=!1,C&&(C=!1,L(P),P=-1),E=!0;var ft=v;try{e:{for(w(k),_=i(p);_!==null&&!(_.expirationTime>k&&V());){var ot=_.callback;if(typeof ot=="function"){_.callback=null,v=_.priorityLevel;var pt=ot(_.expirationTime<=k);if(k=o.unstable_now(),typeof pt=="function"){_.callback=pt,w(k),W=!0;break e}_===i(p)&&s(p),w(k)}else s(p);_=i(p)}if(_!==null)W=!0;else{var Et=i(m);Et!==null&&tt(N,Et.startTime-k),W=!1}}break t}finally{_=null,v=ft,E=!1}W=void 0}}finally{W?$():U=!1}}}var $;if(typeof G=="function")$=function(){G(Y)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,K=ut.port2;ut.port1.onmessage=Y,$=function(){K.postMessage(null)}}else $=function(){x(Y,0)};function tt(k,W){P=x(function(){k(o.unstable_now())},W)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(k){k.callback=null},o.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<k?Math.floor(1e3/k):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(k){switch(v){case 1:case 2:case 3:var W=3;break;default:W=v}var ft=v;v=W;try{return k()}finally{v=ft}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(k,W){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var ft=v;v=k;try{return W()}finally{v=ft}},o.unstable_scheduleCallback=function(k,W,ft){var ot=o.unstable_now();switch(typeof ft=="object"&&ft!==null?(ft=ft.delay,ft=typeof ft=="number"&&0<ft?ot+ft:ot):ft=ot,k){case 1:var pt=-1;break;case 2:pt=250;break;case 5:pt=1073741823;break;case 4:pt=1e4;break;default:pt=5e3}return pt=ft+pt,k={id:S++,callback:W,priorityLevel:k,startTime:ft,expirationTime:pt,sortIndex:-1},ft>ot?(k.sortIndex=ft,e(m,k),i(p)===null&&k===i(m)&&(C?(L(P),P=-1):C=!0,tt(N,ft-ot))):(k.sortIndex=pt,e(p,k),R||E||(R=!0,U||(U=!0,$()))),k},o.unstable_shouldYield=V,o.unstable_wrapCallback=function(k){var W=v;return function(){var ft=v;v=W;try{return k.apply(this,arguments)}finally{v=ft}}}})(mh)),mh}var _v;function KM(){return _v||(_v=1,ph.exports=ZM()),ph.exports}var gh={exports:{}},Un={};var vv;function jM(){if(vv)return Un;vv=1;var o=kp();function e(S){var _="https://react.dev/errors/"+S;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)_+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+S+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),c=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(S,_,v){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:E==null?null:E===d?d:""+E,children:S,containerInfo:_,implementation:v}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(S,_){if(S==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Un.browser=function(S){return{$$typeof:c,_reason:S}},Un.createPortal=function(S,_){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(e(299));return h(S,_,null,v)},Un.flushSync=function(S){var _=p.T,v=s.p;try{if(p.T=null,s.p=2,S)return S()}finally{p.T=_,s.p=v,s.d.f()}},Un.preconnect=function(S,_){typeof S=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,s.d.C(S,_))},Un.prefetchDNS=function(S){typeof S=="string"&&s.d.D(S)},Un.preinit=function(S,_){if(typeof S=="string"&&_&&typeof _.as=="string"){var v=_.as,E=m(v,_.crossOrigin),R=typeof _.integrity=="string"?_.integrity:void 0,C=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;v==="style"?s.d.S(S,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:E,integrity:R,fetchPriority:C}):v==="script"&&s.d.X(S,{crossOrigin:E,integrity:R,fetchPriority:C,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},Un.preinitModule=function(S,_){if(typeof S=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var v=m(_.as,_.crossOrigin);s.d.M(S,{crossOrigin:v,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0})}}else _==null&&s.d.M(S)},Un.preload=function(S,_){if(typeof S=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var v=_.as,E=m(v,_.crossOrigin);s.d.L(S,v,{crossOrigin:E,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},Un.preloadModule=function(S,_){if(typeof S=="string")if(_){var v=m(_.as,_.crossOrigin);s.d.m(S,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:v,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0})}else s.d.m(S)},Un.requestFormReset=function(S){s.d.r(S)},Un.unstable_batchedUpdates=function(S,_){return S(_)},Un.useFormState=function(S,_,v){return p.H.useFormState(S,_,v)},Un.useFormStatus=function(){return p.H.useHostTransitionStatus()},Un.version="19.3.0",Un}var Sv;function QM(){if(Sv)return gh.exports;Sv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),gh.exports=jM(),gh.exports}var xv;function JM(){if(xv)return ol;xv=1;var o=KM(),e=kp(),i=QM();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(s(188))}function m(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return p(u),t;if(f===r)return p(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var g=!1,A=u.child;A;){if(A===a){g=!0,a=u,r=f;break}if(A===r){g=!0,r=u,a=f;break}A=A.sibling}if(!g){for(A=f.child;A;){if(A===a){g=!0,a=f,r=u;break}if(A===r){g=!0,r=f,a=u;break}A=A.sibling}if(!g)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function S(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=S(t),n!==null)return n;t=t.sibling}return null}function _(t,n,a,r,u,f){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,r,u,f)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&_(t.child,n,a,r,u,f))return!0;t=t.sibling}return!1}function v(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function E(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function R(t){var n=[null,null],a=v(t);return a===null||C(n,t,a.child,{foundSelf:!1}),n}function C(t,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&C(t,n,a.child,r))return!0;a=a.sibling}return!1}function y(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var x=null,L=null;function G(t,n,a){return t===a?!0:t===n?(x=t,!0):!1}function w(t,n,a){return t===a?(L=t,!1):t===n?(L!==null&&(x=t),!0):!1}function N(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function U(t,n,a){for(var r=0,u=t;u;u=a(u))r++;u=0;for(var f=n;f;f=a(f))u++;for(;0<r-u;)t=a(t),r--;for(;0<u-r;)n=a(n),u--;for(;r--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var P=Object.assign,T=Symbol.for("react.element"),O=Symbol.for("react.transitional.element"),V=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),ut=Symbol.for("react.profiler"),K=Symbol.for("react.consumer"),tt=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),ft=Symbol.for("react.suspense_list"),ot=Symbol.for("react.memo"),pt=Symbol.for("react.lazy"),Et=Symbol.for("react.activity"),Zt=Symbol.for("react.legacy_hidden"),jt=Symbol.for("react.memo_cache_sentinel"),z=Symbol.for("react.view_transition"),gt=Symbol.for("react.recoverable"),Rt=Symbol.iterator;function Z(t){return t===null||typeof t!="object"?null:(t=Rt&&t[Rt]||t["@@iterator"],typeof t=="function"?t:null)}var ht=Symbol.for("react.client.reference");function bt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ht?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Y:return"Fragment";case ut:return"Profiler";case $:return"StrictMode";case W:return"Suspense";case ft:return"SuspenseList";case Et:return"Activity";case z:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case V:return"Portal";case tt:return t.displayName||"Context";case K:return(t._context.displayName||"Context")+".Consumer";case k:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ot:return n=t.displayName||null,n!==null?n:bt(t.type)||"Memo";case pt:n=t._payload,t=t._init;try{return bt(t(n))}catch{}}return null}var It=Array.isArray,mt=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ct=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,He={pending:!1,data:null,method:null,action:null},fe=[],xe=-1;function ye(t){return{current:t}}function ee(t){0>xe||(t.current=fe[xe],fe[xe]=null,xe--)}function At(t,n){xe++,fe[xe]=t.current,t.current=n}var oe=ye(null),Me=ye(null),ie=ye(null),de=ye(null);function B(t,n){switch(At(ie,n),At(Me,t),At(oe,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?y_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=y_(n),t=M_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ee(oe),At(oe,t)}function _e(){ee(oe),ee(Me),ee(ie)}function Ee(t){var n=t.memoizedState;n!==null&&(Fr._currentValue=n.memoizedState,At(de,t)),n=oe.current;var a=M_(n,t.type);n!==a&&(At(Me,t),At(oe,a))}function D(t){Me.current===t&&(ee(oe),ee(Me)),de.current===t&&(ee(de),Fr._currentValue=He)}var M,J;function it(t){if(M===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);M=n&&n[1]||"",J=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+M+t+J}var _t=!1;function wt(t,n){if(!t||_t)return"";_t=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(Pt){var q=Pt}Reflect.construct(t,[],xt)}else{try{xt.call()}catch(Pt){q=Pt}xt=!1;try{var rt=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),xt=!0,new t}finally{xt&&(rt!==void 0?Object.defineProperty(t.prototype,"props",rt):delete t.prototype.props)}}}else{try{throw Error()}catch(Pt){q=Pt}(xt=t())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(Pt){if(Pt&&q&&typeof Pt.stack=="string")return[Pt.stack,q.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),g=f[0],A=f[1];if(g&&A){var I=g.split(`
`),Q=A.split(`
`);for(u=r=0;r<I.length&&!I[r].includes("DetermineComponentFrameRoot");)r++;for(;u<Q.length&&!Q[u].includes("DetermineComponentFrameRoot");)u++;if(r===I.length||u===Q.length)for(r=I.length-1,u=Q.length-1;1<=r&&0<=u&&I[r]!==Q[u];)u--;for(;1<=r&&0<=u;r--,u--)if(I[r]!==Q[u]){if(r!==1||u!==1)do if(r--,u--,0>u||I[r]!==Q[u]){var lt=`
`+I[r].replace(" at new "," at ");return t.displayName&&lt.includes("<anonymous>")&&(lt=lt.replace("<anonymous>",t.displayName)),lt}while(1<=r&&0<=u);break}}}finally{_t=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?it(a):""}function Ut(t,n){switch(t.tag){case 26:case 27:case 5:return it(t.type);case 16:return it("Lazy");case 13:return t.child!==n&&n!==null?it("Suspense Fallback"):it("Suspense");case 19:return it("SuspenseList");case 0:case 15:return wt(t.type,!1);case 11:return wt(t.type.render,!1);case 1:return wt(t.type,!0);case 31:return it("Activity");case 30:return it("ViewTransition");default:return""}}function vt(t){try{var n="",a=null;do n+=Ut(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Mt=Object.prototype.hasOwnProperty,Nt=o.unstable_scheduleCallback,te=o.unstable_cancelCallback,Bt=o.unstable_shouldYield,zt=o.unstable_requestPaint,kt=o.unstable_now,ae=o.unstable_getCurrentPriorityLevel,he=o.unstable_ImmediatePriority,X=o.unstable_UserBlockingPriority,Dt=o.unstable_NormalPriority,yt=o.unstable_LowPriority,Lt=o.unstable_IdlePriority,Xt=o.log,Tt=o.unstable_setDisableYieldValue,$t=null,Vt=null;function Oe(t){if(typeof Xt=="function"&&Tt(t),Vt&&typeof Vt.setStrictMode=="function")try{Vt.setStrictMode($t,t)}catch{}}var pe=Math.clz32?Math.clz32:Fc,$n=Math.log,di=Math.LN2;function Fc(t){return t>>>=0,t===0?32:31-($n(t)/di|0)|0}var er=256,xs=262144,Ba=4194304;function fa(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ys(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var u=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var A=r&134217727;return A!==0?(r=A&~f,r!==0?u=fa(r):(g&=A,g!==0?u=fa(g):a||(a=A&~t,a!==0&&(u=fa(a))))):(A=r&~f,A!==0?u=fa(A):g!==0?u=fa(g):a||(a=r&~t,a!==0&&(u=fa(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Fa(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Hi(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var r=31-pe(a),u=1<<r;n|=t[r],a&=~u}return n}function fo(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ho(){var t=Ba;return Ba<<=1,(Ba&62914560)===0&&(Ba=4194304),t}function nr(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Gi(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Rl(t,n,a,r,u,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,I=t.expirationTimes,Q=t.hiddenUpdates;for(a=g&~a;0<a;){var lt=31-pe(a),xt=1<<lt;A[lt]=0,I[lt]=-1;var q=Q[lt];if(q!==null)for(Q[lt]=null,lt=0;lt<q.length;lt++){var rt=q[lt];rt!==null&&(rt.lane&=-536870913)}a&=~xt}r!==0&&Ms(t,r,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function Ms(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-pe(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function po(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-pe(a),u=1<<r;u&n|t[r]&n&&(t[r]|=n),a&=~u}}function mo(t,n){var a=n&-n;return a=(a&42)!==0?1:go(a),(a&(t.suspendedLanes|n))!==0?0:a}function go(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function _o(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Cl(){var t=Ct.p;return t!==0?t:(t=window.event,t===void 0?32:sv(t.type))}function wl(t,n){var a=Ct.p;try{return Ct.p=t,n()}finally{Ct.p=a}}var hi=Math.random().toString(36).slice(2),b="__reactFiber$"+hi,F="__reactProps$"+hi,dt="__reactContainer$"+hi,at="__reactEvents$"+hi,st="__reactListeners$"+hi,Ft="__reactHandles$"+hi,Wt="__reactResources$"+hi,Ot="__reactMarker$"+hi,Kt="__reactLoad$"+hi;function Qt(t){delete t[b],delete t[F],delete t[st],delete t[Ft]}function re(t){var n;if(n=t[b])return n;for(var a=t.parentNode;a;){if(n=a[dt]||a[b]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=F_(t);t!==null;){if(a=t[b])return a;t=F_(t)}return n}t=a,a=t.parentNode}return null}function me(t){if(t=t[b]||t[dt]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function qt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Ce(t){var n=t[Wt];return n||(n=t[Wt]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function be(t){t[Ot]=!0}function Je(t){t[Kt]=void 0}var We=new Set,Sn={};function Ht(t,n){on(t,n),on(t+"Capture",n)}function on(t,n){for(Sn[t]=n,t=0;t<n.length;t++)We.add(n[t])}var Pe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bn={},ti={};function Vi(t){return Mt.call(ti,t)?!0:Mt.call(Bn,t)?!1:Pe.test(t)?ti[t]=!0:(Bn[t]=!0,!1)}var Ae=!1;function Ve(){var t=Ae;return Ae=!1,t}function en(t,n,a){if(Vi(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function ei(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function Ne(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,r)}}function ln(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function da(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Dl(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Hc(t){if(!t._valueTracker){var n=da(t)?"checked":"value";t._valueTracker=Dl(t,n,""+t[n])}}function um(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=da(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}var dx=/[\n"\\]/g;function pi(t){return t.replace(dx,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Gc(t,n,a,r,u,f,g,A){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ln(n)):t.value!==""+ln(n)&&(t.value=""+ln(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?g==="number"&&t.value==n?Vc(t,ln(t.value)):Vc(t,ln(n)):a!=null?Vc(t,ln(a)):r!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+ln(A):t.removeAttribute("name")}function cm(t,n,a,r,u,f,g,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Hc(t);return}a=a!=null?""+ln(a):"",n=n!=null?""+ln(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=A?t.checked:!!r,t.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),Hc(t)}function Vc(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function ir(t,n,a,r){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&r&&(t[a].defaultSelected=!0)}else{for(a=""+ln(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,r&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function fm(t,n,a){if(n!=null&&(n=""+ln(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ln(a):""}function dm(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(It(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=ln(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Hc(t)}function ar(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var hx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function hm(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||hx.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function pm(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",Ae=!0);for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&(hm(t,u,r),Ae=!0)}else for(var f in n)n.hasOwnProperty(f)&&hm(t,f,n[f])}function Xc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var px=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),mx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Nl(t){return mx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Xi(){}var kc=null;function Wc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var sr=null,rr=null;function mm(t){var n=me(t);if(n&&(t=n.stateNode)){var a=t[F]||null;t:switch(t=n.stateNode,n.type){case"input":if(Gc(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+pi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var u=r[F]||null;if(!u)throw Error(s(90));Gc(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&um(r)}break t;case"textarea":fm(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ir(t,!!a.multiple,n,!1)}}}var qc=!1;function gm(t,n,a){if(qc)return t(n,a);qc=!0;try{var r=t(n);return r}finally{if(qc=!1,(sr!==null||rr!==null)&&(Nu(),sr&&(n=sr,t=rr,rr=sr=null,mm(n),t)))for(n=0;n<t.length;n++)mm(t[n])}}function vo(t,n){var a=t.stateNode;if(a===null)return null;var r=a[F]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ha=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yc=!1;if(ha)try{var So={};Object.defineProperty(So,"passive",{get:function(){Yc=!0}}),window.addEventListener("test",So,So),window.removeEventListener("test",So,So)}catch{Yc=!1}var Ha=null,Zc=null,Ul=null;function _m(){if(Ul)return Ul;var t,n=Zc,a=n.length,r,u="value"in Ha?Ha.value:Ha.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var g=a-t;for(r=1;r<=g&&n[a-r]===u[f-r];r++);return Ul=u.slice(t,1<r?1-r:void 0)}function Ll(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Ol(){return!0}function vm(){return!1}function Fn(t){function n(a,r,u,f,g){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Ol:vm,this.isPropagationStopped=vm,this}return P(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ol)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ol)},persist:function(){},isPersistent:Ol}),n}var Ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pl=Fn(Ga),xo=P({},Ga,{view:0,detail:0}),gx=Fn(xo),Kc,jc,yo,Il=P({},xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==yo&&(yo&&t.type==="mousemove"?(Kc=t.screenX-yo.screenX,jc=t.screenY-yo.screenY):jc=Kc=0,yo=t),Kc)},movementY:function(t){return"movementY"in t?t.movementY:jc}}),Sm=Fn(Il),_x=P({},Il,{dataTransfer:0}),vx=Fn(_x),Sx=P({},xo,{relatedTarget:0}),Qc=Fn(Sx),xx=P({},Ga,{animationName:0,elapsedTime:0,pseudoElement:0}),yx=Fn(xx),Mx=P({},Ga,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ex=Fn(Mx),Tx=P({},Ga,{data:0}),xm=Fn(Tx),bx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ax={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Rx[t])?!!n[t]:!1}function Jc(){return Cx}var wx=P({},xo,{key:function(t){if(t.key){var n=bx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Ll(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ax[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jc,charCode:function(t){return t.type==="keypress"?Ll(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ll(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Dx=Fn(wx),Nx=P({},Il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ym=Fn(Nx),Ux=P({},Ga,{submitter:0}),Lx=Fn(Ux),Ox=P({},xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jc}),Px=Fn(Ox),Ix=P({},Ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),zx=Fn(Ix),Bx=P({},Il,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Fx=Fn(Bx),Hx=P({},Ga,{newState:0,oldState:0,source:0}),Gx=Fn(Hx),Vx=[9,13,27,32],$c=ha&&"CompositionEvent"in window,Mo=null;ha&&"documentMode"in document&&(Mo=document.documentMode);var Xx=ha&&"TextEvent"in window&&!Mo,Mm=ha&&(!$c||Mo&&8<Mo&&11>=Mo),Em=" ",Tm=!1;function bm(t,n){switch(t){case"keyup":return Vx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Am(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var or=!1;function kx(t,n){switch(t){case"compositionend":return Am(n);case"keypress":return n.which!==32?null:(Tm=!0,Em);case"textInput":return t=n.data,t===Em&&Tm?null:t;default:return null}}function Wx(t,n){if(or)return t==="compositionend"||!$c&&bm(t,n)?(t=_m(),Ul=Zc=Ha=null,or=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Mm&&n.locale!=="ko"?null:n.data;default:return null}}var qx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!qx[t.type]:n==="textarea"}function Cm(t,n,a,r){sr?rr?rr.push(r):rr=[r]:sr=r,n=zu(n,"onChange"),0<n.length&&(a=new Pl("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var Eo=null,To=null;function Yx(t){m_(t,0)}function zl(t){var n=qt(t);if(um(n))return t}function wm(t,n){if(t==="change")return n}var Dm=!1;if(ha){var tf;if(ha){var ef="oninput"in document;if(!ef){var Nm=document.createElement("div");Nm.setAttribute("oninput","return;"),ef=typeof Nm.oninput=="function"}tf=ef}else tf=!1;Dm=tf&&(!document.documentMode||9<document.documentMode)}function Um(){Eo&&(Eo.detachEvent("onpropertychange",Lm),To=Eo=null)}function Lm(t){if(t.propertyName==="value"&&zl(To)){var n=[];Cm(n,To,t,Wc(t)),gm(Yx,n)}}function Zx(t,n,a){t==="focusin"?(Um(),Eo=n,To=a,Eo.attachEvent("onpropertychange",Lm)):t==="focusout"&&Um()}function Kx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zl(To)}function jx(t,n){if(t==="click")return zl(n)}function Qx(t,n){if(t==="input"||t==="change")return zl(n)}function Jx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ni=typeof Object.is=="function"?Object.is:Jx;function bo(t,n){if(ni(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!Mt.call(n,u)||!ni(t[u],n[u]))return!1}return!0}function nf(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Om(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pm(t,n){var a=Om(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Om(a)}}function Im(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Im(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function zm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=nf(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=nf(t.document)}return n}function af(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var $x=ha&&"documentMode"in document&&11>=document.documentMode,lr=null,sf=null,Ao=null,rf=!1;function Bm(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;rf||lr==null||lr!==nf(r)||(r=lr,"selectionStart"in r&&af(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ao&&bo(Ao,r)||(Ao=r,r=zu(sf,"onSelect"),0<r.length&&(n=new Pl("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=lr)))}function Es(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var ur={animationend:Es("Animation","AnimationEnd"),animationiteration:Es("Animation","AnimationIteration"),animationstart:Es("Animation","AnimationStart"),transitionrun:Es("Transition","TransitionRun"),transitionstart:Es("Transition","TransitionStart"),transitioncancel:Es("Transition","TransitionCancel"),transitionend:Es("Transition","TransitionEnd")},of={},Fm={};ha&&(Fm=document.createElement("div").style,"AnimationEvent"in window||(delete ur.animationend.animation,delete ur.animationiteration.animation,delete ur.animationstart.animation),"TransitionEvent"in window||delete ur.transitionend.transition);function Ts(t){if(of[t])return of[t];if(!ur[t])return t;var n=ur[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Fm)return of[t]=n[a];return t}var Hm=Ts("animationend"),Gm=Ts("animationiteration"),Vm=Ts("animationstart"),ty=Ts("transitionrun"),ey=Ts("transitionstart"),ny=Ts("transitioncancel"),Xm=Ts("transitionend"),km=new Map,lf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lf.push("scrollEnd");function bi(t,n){km.set(t,n),Ht(n,[t])}var iy=0;function pa(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=wi.identifierPrefix;var a=iy++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function Wm(t){if(t==null||typeof t=="string")return t;var n=null,a=wr;if(a!==null)for(var r=0;r<a.length;r++){var u=t[a[r]];if(u!=null){if(u==="none")return"none";n=n==null?u:n+(" "+u)}}return n??t.default}function ma(t,n){return t=Wm(t),n=Wm(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var Bl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},mi=[],cr=0,uf=0;function Fl(){for(var t=cr,n=uf=cr=0;n<t;){var a=mi[n];mi[n++]=null;var r=mi[n];mi[n++]=null;var u=mi[n];mi[n++]=null;var f=mi[n];if(mi[n++]=null,r!==null&&u!==null){var g=r.pending;g===null?u.next=u:(u.next=g.next,g.next=u),r.pending=u}f!==0&&qm(a,u,f)}}function Hl(t,n,a,r){mi[cr++]=t,mi[cr++]=n,mi[cr++]=a,mi[cr++]=r,uf|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function cf(t,n,a,r){return Hl(t,n,a,r),Gl(t)}function bs(t,n){return Hl(t,null,null,n),Gl(t)}function qm(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-pe(a),t=f.hiddenUpdates,r=t[u],r===null?t[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function Gl(t){if(50<Zo)throw Zo=0,Du=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var fr={};function ay(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,n,a,r){return new ay(t,n,a,r)}function ff(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ga(t,n){var a=t.alternate;return a===null?(a=Wn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Ym(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Vl(t,n,a,r,u,f){var g=0;if(r=t,typeof r=="function")ff(r)&&(g=1);else if(typeof r=="string")g=UM(t,a,oe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case Et:return t=Wn(31,a,n,u),t.elementType=Et,t.lanes=f,t;case Y:return As(a.children,u,f,n);case $:g=8,u|=24;break;case ut:return t=Wn(12,a,n,u|2),t.elementType=ut,t.lanes=f,t;case W:return t=Wn(13,a,n,u),t.elementType=W,t.lanes=f,t;case ft:return t=Wn(19,a,n,u),t.elementType=ft,t.lanes=f,t;case Zt:case z:return t=u|32,t=Wn(30,a,n,t),t.elementType=z,t.lanes=f,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case tt:g=10;break t;case K:g=9;break t;case k:g=11;break t;case ot:g=14;break t;case pt:g=16,r=null;break t}g=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=Wn(g,a,n,u),n.elementType=t,n.type=r,n.lanes=f,n}function As(t,n,a,r){return t=Wn(7,t,r,n),t.lanes=a,t}function df(t,n,a){return t=Wn(6,t,null,n),t.lanes=a,t}function Zm(t){var n=Wn(18,null,null,0);return n.stateNode=t,n}function hf(t,n,a){return n=Wn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Km=new WeakMap;function gi(t,n){if(typeof t=="object"&&t!==null){var a=Km.get(t);return a!==void 0?a:(n={value:t,source:n,stack:vt(n)},Km.set(t,n),n)}return{value:t,source:n,stack:vt(n)}}var dr=[],hr=0,Xl=null,Ro=0,_i=[],vi=0,Va=null,ki=1,Wi="";function _a(t,n){dr[hr++]=Ro,dr[hr++]=Xl,Xl=t,Ro=n}function jm(t,n,a){_i[vi++]=ki,_i[vi++]=Wi,_i[vi++]=Va,Va=t;var r=ki;t=Wi;var u=32-pe(r)-1;r&=~(1<<u),a+=1;var f=32-pe(n)+u;if(30<f){var g=u-u%5;f=(r&(1<<g)-1).toString(32),r>>=g,u-=g,ki=1<<32-pe(n)+u|a<<u|r,Wi=f+t}else ki=1<<f|a<<u|r,Wi=t}function kl(t){t.return!==null&&(_a(t,1),jm(t,1,0))}function pf(t){for(;t===Xl;)Xl=dr[--hr],dr[hr]=null,Ro=dr[--hr],dr[hr]=null;for(;t===Va;)Va=_i[--vi],_i[vi]=null,Wi=_i[--vi],_i[vi]=null,ki=_i[--vi],_i[vi]=null}function Qm(t,n){_i[vi++]=ki,_i[vi++]=Wi,_i[vi++]=Va,ki=n.id,Wi=n.overflow,Va=t}var En=null,nn=null,Re=!1,Xa=null,Si=!1,mf=Error(s(519));function ka(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Co(gi(n,t)),mf}function Jm(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[b]=t,n[F]=r,a){case"dialog":De("cancel",n),De("close",n);break;case"iframe":case"object":case"embed":De("load",n);break;case"video":case"audio":for(a=0;a<jo.length;a++)De(jo[a],n);break;case"source":De("error",n);break;case"img":case"image":case"link":De("error",n),De("load",n);break;case"details":De("toggle",n);break;case"input":De("invalid",n),cm(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":De("invalid",n);break;case"textarea":De("invalid",n),dm(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||S_(n.textContent,a)?(r.popover!=null&&(De("beforetoggle",n),De("toggle",n)),r.onScroll!=null&&De("scroll",n),r.onScrollEnd!=null&&De("scrollend",n),r.onClick!=null&&(n.onclick=Xi),n=!0):n=!1,n||ka(t,!0)}function Wl(t){for(En=t.return;En;)switch(En.tag){case 5:case 31:case 13:Si=!1;return;case 27:case 3:Si=!0;return;default:En=En.return}}function pr(t){if(t!==En)return!1;if(!Re)return Wl(t),Re=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Wd(t.type,t.memoizedProps)),a=!a),a&&nn&&ka(t),Wl(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));nn=B_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));nn=B_(t)}else n===27?(n=nn,rs(t.type)?(t=th,th=null,nn=t):nn=n):nn=En?yi(t.stateNode.nextSibling):null;return!0}function Rs(){nn=En=null,Re=!1}function gf(){var t=Xa;return t!==null&&(Zn===null?Zn=t:Zn.push.apply(Zn,t),Xa=null),t}function Co(t){Xa===null?Xa=[t]:Xa.push(t)}var _f=ye(null),Cs=null,va=null;function Wa(t,n,a){At(_f,n._currentValue),n._currentValue=a}function Sa(t){t._currentValue=_f.current,ee(_f)}function ql(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function vf(t,n,a,r){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var g=u.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=u;for(var I=0;I<n.length;I++)if(A.context===n[I]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),ql(f.return,a,t),r||(g=null);break t}f=A.next}}else if(u.tag===18){if(g=u.return,g===null)throw Error(s(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),ql(g,a,t),g=null}else u.tag===13&&u.memoizedState!==null&&u.memoizedState.dehydrated===null?(u.lanes|=a,g=u.alternate,g!==null&&(g.lanes|=a),ql(u.return,a,t),g=u.child,g=g!==null?g.sibling:null):g=u.child;if(g!==null)g.return=u;else for(g=u;g!==null;){if(g===t){g=null;break}if(u=g.sibling,u!==null){u.return=g.return,g=u;break}g=g.return}u=g}}function ws(t,n,a,r){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var g=u.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var A=u.type;ni(u.pendingProps.value,g.value)||(t!==null?t.push(A):t=[A])}}else if(u===de.current){if(g=u.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Fr):t=[Fr])}u=u.return}return t!==null&&vf(n,t,a,r),n.flags|=262144,t!==null}function Yl(t){for(t=t.firstContext;t!==null;){if(!ni(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ds(t){Cs=t,va=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Rn(t){return $m(Cs,t)}function Zl(t,n){return Cs===null&&Ds(t),$m(t,n)}function $m(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},va===null){if(t===null)throw Error(s(308));va=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else va=va.next=n;return a}var sy=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},ry=o.unstable_scheduleCallback,oy=o.unstable_NormalPriority,pn={$$typeof:tt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Sf(){return{controller:new sy,data:new Map,refCount:0}}function wo(t){t.refCount--,t.refCount===0&&ry(oy,function(){t.controller.abort()})}function t0(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var r=n[t];a.indexOf(r)===-1&&a.push(r)}}}var Do=null;function ly(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var No=null,xf=0,Ns=0,mr=null;function uy(t,n){if(No===null){var a=No=[];xf=0,Ns=Id(),mr={status:"pending",value:void 0,then:function(r){a.push(r)}}}return xf++,n.then(e0,e0),n}function e0(){if(--xf===0&&(Do=null,No!==null)){mr!==null&&(mr.status="fulfilled");var t=No;No=null,Ns=0,mr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function cy(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var n0=mt.S;mt.S=function(t,n){if(Zg=kt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&uy(t,n),Do!==null)for(var a=Lr;a!==null;)t0(a,Do),a=a.next;if(a=t.types,a!==null){for(var r=Lr;r!==null;)t0(r,a),r=r.next;if(Ns!==0){r=Do,r===null&&(r=Do=[]);for(var u=0;u<a.length;u++){var f=a[u];r.indexOf(f)===-1&&r.push(f)}}}n0!==null&&n0(t,n)};var Us=ye(null);function yf(){var t=Us.current;return t!==null?t:tn.pooledCache}function Kl(t,n){n===null?At(Us,Us.current):At(Us,n.pool)}function i0(){var t=yf();return t===null?null:{parent:pn._currentValue,pool:t}}var gr=Error(s(460)),Mf=Error(s(474)),jl=Error(s(542)),Ql={then:function(){}};function a0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function s0(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Xi,Xi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,o0(t),t===void 0&&!("reason"in n)?Error(s(600)):t;default:if(typeof n.status=="string")n.then(Xi,Xi);else{if(t=tn,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,o0(t),t}throw Os=n,gr}}function Ls(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Os=a,gr):a}}var Os=null;function r0(){if(Os===null)throw Error(s(459));var t=Os;return Os=null,t}function o0(t){if(t===gr||t===jl)throw Error(s(483))}var _r=null,Uo=0;function Jl(t){var n=Uo;return Uo+=1,_r===null&&(_r=[]),s0(_r,t,n)}function qa(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function $l(t,n){throw n.$$typeof===T?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function l0(t){function n(j,H){if(t){var nt=j.deletions;nt===null?(j.deletions=[H],j.flags|=16):nt.push(H)}}function a(j,H){if(!t)return null;for(;H!==null;)n(j,H),H=H.sibling;return null}function r(j){for(var H=new Map;j!==null;)j.key===null?H.set(j.index,j):H.set(j.key,j),j=j.sibling;return H}function u(j,H){return j=ga(j,H),j.index=0,j.sibling=null,j}function f(j,H,nt){return j.index=nt,t?(nt=j.alternate,nt!==null?(nt=nt.index,nt<H?(j.flags|=2,H):nt):(j.flags|=134217730,H)):(j.flags|=1048576,H)}function g(j){return t&&j.alternate===null&&(j.flags|=134217730),j}function A(j,H,nt,St){return H===null||H.tag!==6?(H=df(nt,j.mode,St),H.return=j,H):(H=u(H,nt),H.return=j,H)}function I(j,H,nt,St){var Yt=nt.type;return Yt===Y?(j=lt(j,H,nt.props.children,St,nt.key),qa(j,nt),j):H!==null&&(H.elementType===Yt||typeof Yt=="object"&&Yt!==null&&Yt.$$typeof===pt&&Ls(Yt)===H.type)?(H=u(H,nt.props),qa(H,nt),H.return=j,H):(H=Vl(nt.type,nt.key,nt.props,null,j.mode,St),qa(H,nt),H.return=j,H)}function Q(j,H,nt,St){return H===null||H.tag!==4||H.stateNode.containerInfo!==nt.containerInfo||H.stateNode.implementation!==nt.implementation?(H=hf(nt,j.mode,St),H.return=j,H):(H=u(H,nt.children||[]),H.return=j,H)}function lt(j,H,nt,St,Yt){return H===null||H.tag!==7?(H=As(nt,j.mode,St,Yt),H.return=j,H):(H=u(H,nt),H.return=j,H)}function xt(j,H,nt){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=df(""+H,j.mode,nt),H.return=j,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case O:return nt=Vl(H.type,H.key,H.props,null,j.mode,nt),qa(nt,H),nt.return=j,nt;case V:return H=hf(H,j.mode,nt),H.return=j,H;case pt:return H=Ls(H),xt(j,H,nt)}if(It(H)||Z(H))return H=As(H,j.mode,nt,null),H.return=j,H;if(typeof H.then=="function")return xt(j,Jl(H),nt);if(H.$$typeof===tt)return xt(j,Zl(j,H),nt);$l(j,H)}return null}function q(j,H,nt,St){var Yt=H!==null?H.key:null;if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return Yt!==null?null:A(j,H,""+nt,St);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case O:return nt.key===Yt?I(j,H,nt,St):null;case V:return nt.key===Yt?Q(j,H,nt,St):null;case pt:return nt=Ls(nt),q(j,H,nt,St)}if(It(nt)||Z(nt))return Yt!==null?null:lt(j,H,nt,St,null);if(typeof nt.then=="function")return q(j,H,Jl(nt),St);if(nt.$$typeof===tt)return q(j,H,Zl(j,nt),St);$l(j,nt)}return null}function rt(j,H,nt,St,Yt){if(typeof St=="string"&&St!==""||typeof St=="number"||typeof St=="bigint")return j=j.get(nt)||null,A(H,j,""+St,Yt);if(typeof St=="object"&&St!==null){switch(St.$$typeof){case O:return j=j.get(St.key===null?nt:St.key)||null,I(H,j,St,Yt);case V:return j=j.get(St.key===null?nt:St.key)||null,Q(H,j,St,Yt);case pt:return St=Ls(St),rt(j,H,nt,St,Yt)}if(It(St)||Z(St))return j=j.get(nt)||null,lt(H,j,St,Yt,null);if(typeof St.then=="function")return rt(j,H,nt,Jl(St),Yt);if(St.$$typeof===tt)return rt(j,H,nt,Zl(H,St),Yt);$l(H,St)}return null}function Pt(j,H,nt,St){for(var Yt=null,Le=null,ne=H,se=H=0,_n=null;ne!==null&&se<nt.length;se++){ne.index>se?(_n=ne,ne=null):_n=ne.sibling;var Be=q(j,ne,nt[se],St);if(Be===null){ne===null&&(ne=_n);break}t&&ne&&Be.alternate===null&&n(j,ne),H=f(Be,H,se),Le===null?Yt=Be:Le.sibling=Be,Le=Be,ne=_n}if(se===nt.length)return a(j,ne),Re&&_a(j,se),Yt;if(ne===null){for(;se<nt.length;se++)ne=xt(j,nt[se],St),ne!==null&&(H=f(ne,H,se),Le===null?Yt=ne:Le.sibling=ne,Le=ne);return Re&&_a(j,se),Yt}for(ne=r(ne);se<nt.length;se++)_n=rt(ne,j,se,nt[se],St),_n!==null&&(t&&(Be=_n.alternate,Be!==null&&ne.delete(Be.key===null?se:Be.key)),H=f(_n,H,se),Le===null?Yt=_n:Le.sibling=_n,Le=_n);return t&&ne.forEach(function(fs){return n(j,fs)}),Re&&_a(j,se),Yt}function Jt(j,H,nt,St){if(nt==null)throw Error(s(151));for(var Yt=null,Le=null,ne=H,se=H=0,_n=null,Be=nt.next();ne!==null&&!Be.done;se++,Be=nt.next()){ne.index>se?(_n=ne,ne=null):_n=ne.sibling;var fs=q(j,ne,Be.value,St);if(fs===null){ne===null&&(ne=_n);break}t&&ne&&fs.alternate===null&&n(j,ne),H=f(fs,H,se),Le===null?Yt=fs:Le.sibling=fs,Le=fs,ne=_n}if(Be.done)return a(j,ne),Re&&_a(j,se),Yt;if(ne===null){for(;!Be.done;se++,Be=nt.next())Be=xt(j,Be.value,St),Be!==null&&(H=f(Be,H,se),Le===null?Yt=Be:Le.sibling=Be,Le=Be);return Re&&_a(j,se),Yt}for(ne=r(ne);!Be.done;se++,Be=nt.next())Be=rt(ne,j,se,Be.value,St),Be!==null&&(t&&(_n=Be.alternate,_n!==null&&ne.delete(_n.key===null?se:_n.key)),H=f(Be,H,se),Le===null?Yt=Be:Le.sibling=Be,Le=Be);return t&&ne.forEach(function(kM){return n(j,kM)}),Re&&_a(j,se),Yt}function Se(j,H,nt,St){if(typeof nt=="object"&&nt!==null&&nt.type===Y&&nt.key===null&&nt.props.ref===void 0&&(nt=nt.props.children),typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case O:t:{for(var Yt=nt.key;H!==null;){if(H.key===Yt){if(Yt=nt.type,Yt===Y){if(H.tag===7){a(j,H.sibling),St=u(H,nt.props.children),qa(St,nt),St.return=j,j=St;break t}}else if(H.elementType===Yt||typeof Yt=="object"&&Yt!==null&&Yt.$$typeof===pt&&Ls(Yt)===H.type){a(j,H.sibling),St=u(H,nt.props),qa(St,nt),St.return=j,j=St;break t}a(j,H);break}else n(j,H);H=H.sibling}nt.type===Y?(St=As(nt.props.children,j.mode,St,nt.key),qa(St,nt),St.return=j,j=St):(St=Vl(nt.type,nt.key,nt.props,null,j.mode,St),qa(St,nt),St.return=j,j=St)}return g(j);case V:t:{for(Yt=nt.key;H!==null;){if(H.key===Yt)if(H.tag===4&&H.stateNode.containerInfo===nt.containerInfo&&H.stateNode.implementation===nt.implementation){a(j,H.sibling),St=u(H,nt.children||[]),St.return=j,j=St;break t}else{a(j,H);break}else n(j,H);H=H.sibling}St=hf(nt,j.mode,St),St.return=j,j=St}return g(j);case pt:return nt=Ls(nt),Se(j,H,nt,St)}if(It(nt))return Pt(j,H,nt,St);if(Z(nt)){if(Yt=Z(nt),typeof Yt!="function")throw Error(s(150));return nt=Yt.call(nt),Jt(j,H,nt,St)}if(typeof nt.then=="function")return Se(j,H,Jl(nt),St);if(nt.$$typeof===tt)return Se(j,H,Zl(j,nt),St);$l(j,nt)}return typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint"?(nt=""+nt,H!==null&&H.tag===6?(a(j,H.sibling),St=u(H,nt),St.return=j,j=St):(a(j,H),St=df(nt,j.mode,St),St.return=j,j=St),g(j)):a(j,H)}return function(j,H,nt,St){try{Uo=0;var Yt=Se(j,H,nt,St);return _r=null,Yt}catch(ne){if(ne===gr||ne===jl)throw ne;var Le=Wn(29,ne,null,j.mode);return Le.lanes=St,Le.return=j,Le}}}var Ps=l0(!0),u0=l0(!1),Ya=!1;function Ef(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Tf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Za(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ka(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Xe&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=Gl(t),qm(t,null,a),n}return Hl(t,r,n,a),Gl(t)}function Lo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,po(t,a)}}function bf(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Af=!1;function Oo(){if(Af){var t=mr;if(t!==null)throw t}}function Po(t,n,a,r){Af=!1;var u=t.updateQueue;Ya=!1;var f=u.firstBaseUpdate,g=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var I=A,Q=I.next;I.next=null,g===null?f=Q:g.next=Q,g=I;var lt=t.alternate;lt!==null&&(lt=lt.updateQueue,A=lt.lastBaseUpdate,A!==g&&(A===null?lt.firstBaseUpdate=Q:A.next=Q,lt.lastBaseUpdate=I))}if(f!==null){var xt=u.baseState;g=0,lt=Q=I=null,A=f;do{var q=A.lane&-536870913,rt=q!==A.lane;if(rt?(Ue&q)===q:(r&q)===q){q!==0&&q===Ns&&(Af=!0),lt!==null&&(lt=lt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Pt=t,Jt=A;q=n;var Se=a;switch(Jt.tag){case 1:if(Pt=Jt.payload,typeof Pt=="function"){xt=Pt.call(Se,xt,q);break t}xt=Pt;break t;case 3:Pt.flags=Pt.flags&-65537|128;case 0:if(Pt=Jt.payload,q=typeof Pt=="function"?Pt.call(Se,xt,q):Pt,q==null)break t;xt=P({},xt,q);break t;case 2:Ya=!0}}q=A.callback,q!==null&&(t.flags|=64,rt&&(t.flags|=8192),rt=u.callbacks,rt===null?u.callbacks=[q]:rt.push(q))}else rt={lane:q,tag:A.tag,payload:A.payload,callback:A.callback,next:null},lt===null?(Q=lt=rt,I=xt):lt=lt.next=rt,g|=q;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;rt=A,A=rt.next,rt.next=null,u.lastBaseUpdate=rt,u.shared.pending=null}}while(!0);lt===null&&(I=xt),u.baseState=I,u.firstBaseUpdate=Q,u.lastBaseUpdate=lt,f===null&&(u.shared.lanes=0),ns|=g,t.lanes=g,t.memoizedState=xt}}function c0(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function f0(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)c0(a[t],n)}var ja=ye(null),tu=ye(0);function d0(t,n){t=Ta,At(tu,t),At(ja,n),Ta=t|n.baseLanes}function Rf(){At(tu,Ta),At(ja,ja.current)}function Cf(){Ta=tu.current,ee(ja),ee(tu)}var Cn=ye(null),On=null;function Qa(t){var n=t.alternate;At(wn,wn.current&1),At(Cn,t),On===null&&(n===null||ja.current!==null||n.memoizedState!==null)&&(On=t)}function wf(t){At(wn,wn.current),At(Cn,t),On===null&&(On=t)}function h0(t){t.tag===22?(At(wn,wn.current),At(Cn,t),On===null&&(On=t)):Ja()}function Ja(){At(wn,wn.current),At(Cn,Cn.current)}function ii(t){ee(Cn),On===t&&(On=null),ee(wn)}var wn=ye(0);function Io(t,n){At(Cn,Cn.current),At(wn,n)}function Df(t){ee(wn),ee(Cn),On===t&&(On=null)}function eu(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Jd(a)||$d(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var xa=0,ve=null,$e=null,mn=null,nu=!1,vr=!1,Is=!1,iu=0,zo=0,Sr=null,fy=0;function un(){throw Error(s(321))}function Nf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ni(t[a],n[a]))return!1;return!0}function Uf(t,n,a,r,u,f){return xa=f,ve=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,mt.H=t===null||t.memoizedState===null?j0:Q0,Is=!1,f=a(r,u),Is=!1,vr&&(f=m0(n,a,r,u)),p0(t),f}function p0(t){mt.H=cu;var n=$e!==null&&$e.next!==null;if(xa=0,mn=$e=ve=null,nu=!1,zo=0,Sr=null,n)throw Error(s(300));t===null||gn||(t=t.dependencies,t!==null&&Yl(t)&&(gn=!0))}function m0(t,n,a,r){ve=t;var u=0;do{if(vr&&(Sr=null),zo=0,vr=!1,25<=u)throw Error(s(301));if(u+=1,mn=$e=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}mt.H=Sy,f=n(a,r)}while(vr);return f}function dy(){var t=mt.H,n=t.useState()[0];return n=typeof n.then=="function"?Bo(n):n,t=t.useState()[0],($e!==null?$e.memoizedState:null)!==t&&(ve.flags|=1024),n}function Lf(){var t=iu!==0;return iu=0,t}function Of(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Pf(t){if(nu){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}nu=!1}xa=0,mn=$e=ve=null,vr=!1,zo=iu=0,Sr=null}function Hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?ve.memoizedState=mn=t:mn=mn.next=t,mn}function hn(){if($e===null){var t=ve.alternate;t=t!==null?t.memoizedState:null}else t=$e.next;var n=mn===null?ve.memoizedState:mn.next;if(n!==null)mn=n,$e=t;else{if(t===null)throw ve.alternate===null?Error(s(467)):Error(s(310));$e=t,t={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},mn===null?ve.memoizedState=mn=t:mn=mn.next=t}return mn}function au(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Bo(t){var n=zo;return zo+=1,Sr===null&&(Sr=[]),t=s0(Sr,t,n),n=ve,(mn===null?n.memoizedState:mn.next)===null&&(n=n.alternate,mt.H=n===null||n.memoizedState===null?j0:Q0),t}function su(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Bo(t);if(t.$$typeof===gt)return;if(t.$$typeof===tt)return Rn(t)}throw Error(s(438,String(t)))}function If(t){var n=null,a=ve.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=ve.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=au(),ve.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=jt;return n.index++,a}function ya(t,n){return typeof n=="function"?n(t):n}function ru(t){var n=hn();return zf(n,$e,t)}function zf(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=t.baseQueue,f=r.pending;if(f!==null){if(u!==null){var g=u.next;u.next=f.next,f.next=g}n.baseQueue=u=f,r.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var A=g=null,I=null,Q=n,lt=!1;do{var xt=Q.lane&-536870913;if(xt!==Q.lane?(Ue&xt)===xt:(xa&xt)===xt){var q=Q.revertLane;if(q===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),xt===Ns&&(lt=!0);else if((xa&q)===q){Q=Q.next,q===Ns&&(lt=!0);continue}else xt={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},I===null?(A=I=xt,g=f):I=I.next=xt,ve.lanes|=q,ns|=q;xt=Q.action,Is&&a(f,xt),f=Q.hasEagerState?Q.eagerState:a(f,xt)}else q={lane:xt,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},I===null?(A=I=q,g=f):I=I.next=q,ve.lanes|=xt,ns|=xt;Q=Q.next}while(Q!==null&&Q!==n);if(I===null?g=f:I.next=A,!ni(f,t.memoizedState)&&(gn=!0,lt&&(a=mr,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=I,r.lastRenderedState=f}return u===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Bf(t){var n=hn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var g=u=u.next;do f=t(f,g.action),g=g.next;while(g!==u);ni(f,n.memoizedState)||(gn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function g0(t,n,a){var r=ve,u=hn(),f=Re;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var g=!ni(($e||u).memoizedState,a);if(g&&(u.memoizedState=a,gn=!0),u=u.queue,Gf(S0.bind(null,r,u,t),[t]),t=u.getSnapshot!==n||g||mn!==null&&(mn.memoizedState.tag&1)!==0,xr(t?9:8,{destroy:void 0},v0.bind(null,r,u,a,n),null),t){if(r.flags|=2048,tn===null)throw Error(s(349));f||(xa&127)!==0||_0(r,n,a)}return a}function _0(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ve.updateQueue,n===null?(n=au(),ve.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function v0(t,n,a,r){n.value=a,n.getSnapshot=r,x0(n)&&y0(t)}function S0(t,n,a){return a(function(){x0(n)&&y0(t)})}function x0(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ni(t,a)}catch{return!0}}function y0(t){var n=bs(t,2);n!==null&&Kn(n,t,2)}function Ff(t){var n=Hn();if(typeof t=="function"){var a=t;if(t=a(),Is){Oe(!0);try{a()}finally{Oe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:t},n}function M0(t,n,a,r){return t.baseState=a,zf(t,$e,typeof r=="function"?r:ya)}function hy(t,n,a,r,u){if(uu(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};mt.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,E0(n,f)):(f.next=a.next,n.pending=a.next=f)}}function E0(t,n){var a=n.action,r=n.payload,u=t.state;if(n.isTransition){var f=mt.T,g={};g.types=f!==null?f.types:null,mt.T=g;try{var A=a(u,r),I=mt.S;I!==null&&I(g,A),T0(t,n,A)}catch(Q){Hf(t,n,Q)}finally{f!==null&&g.types!==null&&(f.types=g.types),mt.T=f}}else try{f=a(u,r),T0(t,n,f)}catch(Q){Hf(t,n,Q)}}function T0(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){b0(t,n,r)},function(r){return Hf(t,n,r)}):b0(t,n,a)}function b0(t,n,a){n.status="fulfilled",n.value=a,A0(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,E0(t,a)))}function Hf(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,A0(n),n=n.next;while(n!==r)}t.action=null}function A0(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function R0(t,n){return n}function C0(t,n){if(Re){var a=tn.formState;if(a!==null){t:{var r=ve;if(Re){if(nn){e:{for(var u=nn,f=Si;u.nodeType!==8;){if(!f){u=null;break e}if(u=yi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){nn=yi(u.nextSibling),r=u.data==="F!";break t}}ka(r)}r=!1}r&&(n=a[0])}}return a=Hn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:R0,lastRenderedState:n},a.queue=r,a=Y0.bind(null,ve,r),r.dispatch=a,r=Ff(!1),f=qf.bind(null,ve,!1,r.queue),r=Hn(),u={state:n,dispatch:null,action:t,pending:null},r.queue=u,a=hy.bind(null,ve,u,f,a),u.dispatch=a,r.memoizedState=t,[n,a,!1]}function w0(t){var n=hn();return D0(n,$e,t)}function D0(t,n,a){if(n=zf(t,n,R0)[0],t=ru(ya)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Bo(n)}catch(g){throw g===gr?jl:g}else r=n;n=hn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ve.flags|=2048,xr(9,{destroy:void 0},py.bind(null,u,a),null)),[r,f,t]}function py(t,n){t.action=n}function N0(t){var n=hn(),a=$e;if(a!==null)return D0(n,a,t);hn(),n=n.memoizedState,a=hn();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function xr(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=ve.updateQueue,n===null&&(n=au(),ve.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function U0(){return hn().memoizedState}function ou(t,n,a,r){var u=Hn();ve.flags|=t,u.memoizedState=xr(1|n,{destroy:void 0},a,r===void 0?null:r)}function lu(t,n,a,r){var u=hn();r=r===void 0?null:r;var f=u.memoizedState.inst;$e!==null&&r!==null&&Nf(r,$e.memoizedState.deps)?u.memoizedState=xr(n,f,a,r):(ve.flags|=t,u.memoizedState=xr(1|n,f,a,r))}function L0(t,n){ou(8390656,8,t,n)}function Gf(t,n){lu(2048,8,t,n)}function my(t){ve.flags|=4;var n=ve.updateQueue;if(n===null)n=au(),ve.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function O0(t){var n=hn().memoizedState;return my({ref:n,nextImpl:t}),function(){if((Xe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function P0(t,n){return lu(4,2,t,n)}function I0(t,n){return lu(4,4,t,n)}function z0(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function B0(t,n,a){a=a!=null?a.concat([t]):null,lu(4,4,z0.bind(null,n,t),a)}function Vf(){}function F0(t,n){var a=hn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Nf(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function H0(t,n){var a=hn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Nf(n,r[1]))return r[0];if(r=t(),Is){Oe(!0);try{t()}finally{Oe(!1)}}return a.memoizedState=[r,n],r}function Xf(t,n,a){return a===void 0||(xa&1073741824)!==0&&(Ue&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=jg(),ve.lanes|=t,ns|=t,a)}function G0(t,n,a,r){return ni(a,n)?a:ja.current!==null?(t=Xf(t,a,r),ni(t,n)||(gn=!0),t):(xa&106)===0||(xa&1073741824)!==0&&(Ue&261930)===0?(gn=!0,t.memoizedState=a):(t=jg(),ve.lanes|=t,ns|=t,n)}function V0(t,n,a,r,u){var f=Ct.p;Ct.p=f!==0&&8>f?f:8;var g=mt.T,A={};A.types=g!==null?g.types:null,mt.T=A,qf(t,!1,n,a);try{var I=u(),Q=mt.S;if(Q!==null&&Q(A,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var lt=cy(I,r);Fo(t,n,lt,oi(t))}else Fo(t,n,r,oi(t))}catch(xt){Fo(t,n,{then:function(){},status:"rejected",reason:xt},oi())}finally{Ct.p=f,g!==null&&A.types!==null&&(g.types=A.types),mt.T=g}}function gy(){}function kf(t,n,a,r){if(t.tag!==5)throw Error(s(476));var u=X0(t).queue;V0(t,u,n,He,a===null?gy:function(){return k0(t),a(r)})}function X0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:He,baseState:He,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:He},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function k0(t){var n=X0(t);n.next===null&&(n=t.alternate.memoizedState),Fo(t,n.next.queue,{},oi())}function Wf(){return Rn(Fr)}function W0(){return hn().memoizedState}function q0(){return hn().memoizedState}function _y(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=oi();t=Za(a);var r=Ka(n,t,a);r!==null&&(Kn(r,n,a),Lo(r,n,a)),n={cache:Sf()},t.payload=n;return}n=n.return}}function vy(t,n,a){var r=oi();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},uu(t)?Z0(n,a):(a=cf(t,n,a,r),a!==null&&(Kn(a,t,r),K0(a,n,r)))}function Y0(t,n,a){var r=oi();Fo(t,n,a,r)}function Fo(t,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(uu(t))Z0(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,A=f(g,a);if(u.hasEagerState=!0,u.eagerState=A,ni(A,g))return Hl(t,n,u,0),tn===null&&Fl(),!1}catch{}if(a=cf(t,n,u,r),a!==null)return Kn(a,t,r),K0(a,n,r),!0}return!1}function qf(t,n,a,r){if(r={lane:2,revertLane:Id(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},uu(t)){if(n)throw Error(s(479))}else n=cf(t,a,r,2),n!==null&&Kn(n,t,2)}function uu(t){var n=t.alternate;return t===ve||n!==null&&n===ve}function Z0(t,n){vr=nu=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function K0(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,po(t,a)}}var cu={readContext:Rn,use:su,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useLayoutEffect:un,useInsertionEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useSyncExternalStore:un,useId:un,useHostTransitionStatus:un,useFormState:un,useActionState:un,useOptimistic:un,useMemoCache:un,useCacheRefresh:un,useEffectEvent:un},j0={readContext:Rn,use:su,useCallback:function(t,n){return Hn().memoizedState=[t,n===void 0?null:n],t},useContext:Rn,useEffect:L0,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,ou(4194308,4,z0.bind(null,n,t),a)},useLayoutEffect:function(t,n){return ou(4194308,4,t,n)},useInsertionEffect:function(t,n){ou(4,2,t,n)},useMemo:function(t,n){var a=Hn();n=n===void 0?null:n;var r=t();if(Is){Oe(!0);try{t()}finally{Oe(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Hn();if(a!==void 0){var u=a(n);if(Is){Oe(!0);try{a(n)}finally{Oe(!1)}}}else u=n;return r.memoizedState=r.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},r.queue=t,t=t.dispatch=vy.bind(null,ve,t),[r.memoizedState,t]},useRef:function(t){var n=Hn();return t={current:t},n.memoizedState=t},useState:function(t){t=Ff(t);var n=t.queue,a=Y0.bind(null,ve,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Vf,useDeferredValue:function(t,n){var a=Hn();return Xf(a,t,n)},useTransition:function(){var t=Ff(!1);return t=V0.bind(null,ve,t.queue,!0,!1),Hn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=ve,u=Hn();if(Re){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),tn===null)throw Error(s(349));(Ue&127)!==0||_0(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,L0(S0.bind(null,r,f,t),[t]),r.flags|=2048,xr(9,{destroy:void 0},v0.bind(null,r,f,a,n),null),a},useId:function(){var t=Hn(),n=tn.identifierPrefix;if(Re){var a=Wi,r=ki;a=(r&~(1<<32-pe(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=iu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=fy++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Wf,useFormState:C0,useActionState:C0,useOptimistic:function(t){var n=Hn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=qf.bind(null,ve,!0,a),a.dispatch=n,[t,n]},useMemoCache:If,useCacheRefresh:function(){return Hn().memoizedState=_y.bind(null,ve)},useEffectEvent:function(t){var n=Hn(),a={impl:t};return n.memoizedState=a,function(){if((Xe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Q0={readContext:Rn,use:su,useCallback:F0,useContext:Rn,useEffect:Gf,useImperativeHandle:B0,useInsertionEffect:P0,useLayoutEffect:I0,useMemo:H0,useReducer:ru,useRef:U0,useState:function(){return ru(ya)},useDebugValue:Vf,useDeferredValue:function(t,n){var a=hn();return G0(a,$e.memoizedState,t,n)},useTransition:function(){var t=ru(ya)[0],n=hn().memoizedState;return[typeof t=="boolean"?t:Bo(t),n]},useSyncExternalStore:g0,useId:W0,useHostTransitionStatus:Wf,useFormState:w0,useActionState:w0,useOptimistic:function(t,n){var a=hn();return M0(a,$e,t,n)},useMemoCache:If,useCacheRefresh:q0,useEffectEvent:O0},Sy={readContext:Rn,use:su,useCallback:F0,useContext:Rn,useEffect:Gf,useImperativeHandle:B0,useInsertionEffect:P0,useLayoutEffect:I0,useMemo:H0,useReducer:Bf,useRef:U0,useState:function(){return Bf(ya)},useDebugValue:Vf,useDeferredValue:function(t,n){var a=hn();return $e===null?Xf(a,t,n):G0(a,$e.memoizedState,t,n)},useTransition:function(){var t=Bf(ya)[0],n=hn().memoizedState;return[typeof t=="boolean"?t:Bo(t),n]},useSyncExternalStore:g0,useId:W0,useHostTransitionStatus:Wf,useFormState:N0,useActionState:N0,useOptimistic:function(t,n){var a=hn();return $e!==null?M0(a,$e,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:If,useCacheRefresh:q0,useEffectEvent:O0};function Yf(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:P({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Zf={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=oi(),u=Za(r);u.payload=n,a!=null&&(u.callback=a),n=Ka(t,u,r),n!==null&&(Kn(n,t,r),Lo(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=oi(),u=Za(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ka(t,u,r),n!==null&&(Kn(n,t,r),Lo(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=oi(),r=Za(a);r.tag=2,n!=null&&(r.callback=n),n=Ka(t,r,a),n!==null&&(Kn(n,t,a),Lo(n,t,a))}};function J0(t,n,a,r,u,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,g):n.prototype&&n.prototype.isPureReactComponent?!bo(a,r)||!bo(u,f):!0}function $0(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&Zf.enqueueReplaceState(n,n.state,null)}function zs(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=P({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function tg(t){Bl(t)}function eg(t){console.error(t)}function ng(t){Bl(t)}function fu(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function ig(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Kf(t,n,a){return a=Za(a),a.tag=3,a.payload={element:null},a.callback=function(){fu(t,n)},a}function ag(t){return t=Za(t),t.tag=3,t}function sg(t,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;t.payload=function(){return u(f)},t.callback=function(){ig(n,a,r)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){ig(n,a,r),typeof u!="function"&&(is===null?is=new Set([this]):is.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function xy(t,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&ws(n,a,u,!0),a=Cn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return On===null?Uu():a.alternate===null&&cn===0&&(cn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===Ql?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Ld(t,r,u)),!1;case 22:return a.flags|=65536,r===Ql?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Ld(t,r,u)),!1}throw Error(s(435,a.tag))}return Ld(t,r,u),Uu(),!1}if(Re)return n=Cn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==mf&&(t=Error(s(422),{cause:r}),Co(gi(t,a)))):(r!==mf&&(n=Error(s(423),{cause:r}),Co(gi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,r=gi(r,a),u=Kf(t.stateNode,r,u),bf(t,u),cn!==4&&(cn=2)),!1;var f=Error(s(520),{cause:r});if(f=gi(f,a),Yo===null?Yo=[f]:Yo.push(f),cn!==4&&(cn=2),n===null)return!0;r=gi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Kf(a.stateNode,r,t),bf(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(is===null||!is.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=ag(u),sg(u,t,a,r),bf(a,u),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var jf=Error(s(461)),gn=!1;function xn(t,n,a,r){n.child=t===null?u0(n,null,a,r):Ps(n,t.child,a,r)}function rg(t,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var g={};for(var A in r)A!=="ref"&&(g[A]=r[A])}else g=r;return Ds(n),r=Uf(t,n,a,g,f,u),A=Lf(),t!==null&&!gn?(Of(t,n,u),Ma(t,n,u)):(Re&&A&&kl(n),n.flags|=1,xn(t,n,r,u),n.child)}function og(t,n,a,r,u){if(t===null){var f=a.type;return typeof f=="function"&&!ff(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,lg(t,n,f,r,u)):(t=Vl(a.type,null,r,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!ad(t,u)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:bo,a(g,r)&&t.ref===n.ref)return Ma(t,n,u)}return n.flags|=1,t=ga(f,r),t.ref=n.ref,t.return=n,n.child=t}function lg(t,n,a,r,u){if(t!==null){var f=t.memoizedProps;if(bo(f,r)&&t.ref===n.ref)if(gn=!1,n.pendingProps=r=f,ad(t,u))(t.flags&131072)!==0&&(gn=!0);else return n.lanes=t.lanes,Ma(t,n,u)}return Qf(t,n,a,r,u)}function ug(t,n,a,r){var u=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return cg(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Kl(n,f!==null?f.cachePool:null),f!==null?d0(n,f):Rf(),h0(n);else return r=n.lanes=536870912,cg(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(Kl(n,f.cachePool),d0(n,f),Ja(),n.memoizedState=null):(t!==null&&Kl(n,null),Rf(),Ja());return xn(t,n,u,a),n.child}function Ho(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function cg(t,n,a,r,u){var f=yf();return f=f===null?null:{parent:pn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Kl(n,null),Rf(),h0(n),t!==null&&ws(t,n,r,!0),n.childLanes=u,null}function du(t,n){return n=hu({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function fg(t,n,a){return Ps(n,t.child,null,a),t=du(n,n.pendingProps),t.flags|=2,ii(n),n.memoizedState=null,t}function yy(t,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Re){if(r.mode==="hidden")return t=du(n,r),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Ho(null,t);if(wf(n),(t=nn)?(t=z_(t,Si),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Va!==null?{id:ki,overflow:Wi}:null,retryLane:536870912,hydrationErrors:null},a=Zm(t),a.return=n,n.child=a,En=n,nn=null)):t=null,t===null)throw ka(n);return n.lanes=536870912,null}return du(n,r)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(wf(n),u)if(n.flags&256)n.flags&=-257,n=fg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(gn||ws(t,n,a,!1),u=(a&t.childLanes)!==0,gn||u){if(ja.current===null){if(r=tn,r!==null&&(g=mo(r,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,bs(t,g),Kn(r,t,g),jf;Uu()}n=fg(t,n,a)}else t=f.treeContext,nn=yi(g.nextSibling),En=n,Re=!0,Xa=null,Si=!1,t!==null&&Qm(n,t),n=du(n,r),n.flags|=134221824;return n}return t=ga(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function yr(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Qf(t,n,a,r,u){return Ds(n),a=Uf(t,n,a,r,void 0,u),r=Lf(),t!==null&&!gn?(Of(t,n,u),Ma(t,n,u)):(Re&&r&&kl(n),n.flags|=1,xn(t,n,a,u),n.child)}function dg(t,n,a,r,u,f){return Ds(n),n.updateQueue=null,a=m0(n,r,a,u),p0(t),r=Lf(),t!==null&&!gn?(Of(t,n,f),Ma(t,n,f)):(Re&&r&&kl(n),n.flags|=1,xn(t,n,a,f),n.child)}function hg(t,n,a,r,u){if(Ds(n),n.stateNode===null){var f=fr,g=a.contextType;typeof g=="object"&&g!==null&&(f=Rn(g)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Zf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Ef(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?Rn(g):fr,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Yf(n,a,g,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&Zf.enqueueReplaceState(f,f.state,null),Po(n,r,f,u),Oo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var A=n.memoizedProps,I=zs(a,A);f.props=I;var Q=f.context,lt=a.contextType;g=fr,typeof lt=="object"&&lt!==null&&(g=Rn(lt));var xt=a.getDerivedStateFromProps;lt=typeof xt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,lt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||Q!==g)&&$0(n,f,r,g),Ya=!1;var q=n.memoizedState;f.state=q,Po(n,r,f,u),Oo(),Q=n.memoizedState,A||q!==Q||Ya?(typeof xt=="function"&&(Yf(n,a,xt,r),Q=n.memoizedState),(I=Ya||J0(n,a,I,r,q,Q,g))?(lt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=Q),f.props=r,f.state=Q,f.context=g,r=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Tf(t,n),g=n.memoizedProps,lt=zs(a,g),f.props=lt,xt=n.pendingProps,q=f.context,Q=a.contextType,I=fr,typeof Q=="object"&&Q!==null&&(I=Rn(Q)),A=a.getDerivedStateFromProps,(Q=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==xt||q!==I)&&$0(n,f,r,I),Ya=!1,q=n.memoizedState,f.state=q,Po(n,r,f,u),Oo();var rt=n.memoizedState;g!==xt||q!==rt||Ya||t!==null&&t.dependencies!==null&&Yl(t.dependencies)?(typeof A=="function"&&(Yf(n,a,A,r),rt=n.memoizedState),(lt=Ya||J0(n,a,lt,r,q,rt,I)||t!==null&&t.dependencies!==null&&Yl(t.dependencies))?(Q||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,rt,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,rt,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&q===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&q===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=rt),f.props=r,f.state=rt,f.context=I,r=lt):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&q===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&q===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,yr(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=Ps(n,t.child,null,u),n.child=Ps(n,null,a,u)):xn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=Ma(t,n,u),t}function pg(t,n,a,r){return Rs(),n.flags|=256,xn(t,n,a,r),n.child}var Jf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function $f(t){return{baseLanes:t,cachePool:i0()}}function td(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ri),t}function mg(t,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:(wn.current&2)!==0),g&&(u=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(Re){if(u?Qa(n):Ja(),(t=nn)?(t=z_(t,Si),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Va!==null?{id:ki,overflow:Wi}:null,retryLane:536870912,hydrationErrors:null},a=Zm(t),a.return=n,n.child=a,En=n,nn=null)):t=null,t===null)throw ka(n);return $d(t)?n.lanes=32:n.lanes=536870912,null}return f=r.children,r=r.fallback,u?(Ja(),u=n.mode,f=hu({mode:"hidden",children:f},u),r=As(r,u,a,null),f.return=n,r.return=n,f.sibling=r,n.child=f,r=n.child,r.memoizedState=$f(a),r.childLanes=td(t,g,a),n.memoizedState=Jf,Ho(null,r)):(Qa(n),ed(n,f))}var A=t.memoizedState;if(A!==null){var I=A.dehydrated;if(I!==null)return My(t,n,f,g,r,I,A,a)}return u?(Ja(),u=r.fallback,f=n.mode,A=t.child,I=A.sibling,r=ga(A,{mode:"hidden",children:r.children}),r.subtreeFlags=A.subtreeFlags&1206910976,I!==null?u=ga(I,u):(u=As(u,f,a,null),u.flags|=2),u.return=n,r.return=n,r.sibling=u,n.child=r,Ho(null,r),r=n.child,u=t.child.memoizedState,u===null?u=$f(a):(f=u.cachePool,f!==null?(A=pn._currentValue,f=f.parent!==A?{parent:A,pool:A}:f):f=i0(),u={baseLanes:u.baseLanes|a,cachePool:f}),r.memoizedState=u,r.childLanes=td(t,g,a),n.memoizedState=Jf,Ho(t.child,r)):(Qa(n),a=t.child,t=a.sibling,a=ga(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function ed(t,n){return n=hu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function hu(t,n){return t=Wn(22,t,null,n),t.lanes=0,t}function pu(t,n,a){return Ps(n,t.child,null,a),t=ed(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function My(t,n,a,r,u,f,g,A){if(a)return n.flags&256?(Qa(n),n.flags&=-257,pu(t,n,A)):n.memoizedState!==null?(Ja(),n.child=t.child,n.flags|=128,null):(Ja(),f=u.fallback,g=n.mode,u=hu({mode:"visible",children:u.children},g),f=As(f,g,A,null),f.flags|=2,u.return=n,f.return=n,u.sibling=f,n.child=u,Ps(n,t.child,null,A),u=n.child,u.memoizedState=$f(A),u.childLanes=td(t,r,A),n.memoizedState=Jf,Ho(null,u));if(Qa(n),$d(f)){if(r=f.nextSibling&&f.nextSibling.dataset,r)var I=r.dgst;return r=I,r!==""&&(u=Error(s(419)),u.stack="",u.digest=r,Co({value:u,source:null,stack:null})),pu(t,n,A)}if(gn||ws(t,n,A,!1),r=(A&t.childLanes)!==0,gn||r){if(ja.current!==null)return pu(t,n,A);if(r=tn,r!==null&&(u=mo(r,A),u!==0&&u!==g.retryLane))throw g.retryLane=u,bs(t,u),Kn(r,t,u),jf;return Jd(f)||Uu(),pu(t,n,A)}return Jd(f)?(n.flags|=192,n.child=t.child,null):(t=g.treeContext,nn=yi(f.nextSibling),En=n,Re=!0,Xa=null,Si=!1,t!==null&&Qm(n,t),n=ed(n,u.children),n.flags|=134221824,n)}function gg(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),ql(t.return,n,a)}function _g(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&eu(a)===null&&(n=t),t=t.sibling}return n}function mu(t,n,a,r,u,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=r,g.tail=a,g.tailMode=u,g.treeForkCount=f)}function nd(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function id(t,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var g=wn.current;if(n.flags&128)return Io(n,g),null;var A=(g&2)!==0;if(A?(g=g&1|2,n.flags|=128):g&=1,Io(n,g),u==="backwards"&&t!==null?(nd(t),xn(t,n,r,a),nd(t)):xn(t,n,r,a),r=Re?Ro:0,!A&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&gg(t,a,n);else if(t.tag===19)gg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"backwards":a=_g(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null,nd(n)),mu(n,!0,u,null,f,r);break;case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&eu(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}mu(n,!0,a,null,f,r);break;case"together":mu(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=_g(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),mu(n,!1,u,a,f,r)}return n.child}function vg(t,n,a){var r=n.pendingProps;return Wa(n,n.type,r.value),xn(t,n,r.children,a),n.child}function Ma(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ns|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(ws(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=ga(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ga(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function ad(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Yl(t)))}function Ey(t,n,a){switch(n.tag){case 3:B(n,n.stateNode.containerInfo),Wa(n,pn,t.memoizedState.cache),Rs();break;case 27:case 5:Ee(n);break;case 4:B(n,n.stateNode.containerInfo);break;case 10:Wa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,wf(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return Qa(n),n.flags|=128,null;r=ws(t,n,a,!1);var u=n.child.childLanes;return r||(a&u)!==0?mg(t,n,a):(Qa(n),t=Ma(t,n,a),t!==null?t.sibling:null)}Qa(n);break;case 19:if(n.flags&128)return id(t,n,a);if(u=(t.flags&128)!==0,r=(a&n.childLanes)!==0,r||(ws(t,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return id(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Io(n,wn.current),r)break;return null;case 22:return n.lanes=0,ug(t,n,a,n.pendingProps);case 24:Wa(n,pn,t.memoizedState.cache)}return Ma(t,n,a)}function Sg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)gn=!0;else{if(!ad(t,a)&&(n.flags&128)===0)return gn=!1,Ey(t,n,a);gn=(t.flags&131072)!==0}else gn=!1,Re&&(n.flags&1048576)!==0&&jm(n,Ro,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=Ls(n.elementType),n.type=t,typeof t=="function")ff(t)?(r=zs(t,r),n.tag=1,n=hg(null,n,t,r,a)):(n.tag=0,n=Qf(null,n,t,r,a));else{if(t!=null){var u=t.$$typeof;if(u===k){n.tag=11,n=rg(null,n,t,r,a);break t}else if(u===ot){n.tag=14,n=og(null,n,t,r,a);break t}else if(u===tt){n.tag=10,n.type=t,n=vg(null,n,a);break t}}throw n=bt(t)||t,Error(s(306,n,""))}}return n;case 0:return Qf(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=zs(r,n.pendingProps),hg(t,n,r,u,a);case 3:t:{if(B(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,Tf(t,n),Po(n,r,null,a);var g=n.memoizedState;if(r=g.cache,Wa(n,pn,r),r!==f.cache&&vf(n,[pn],a,!0),Oo(),r=g.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=pg(t,n,r,a);break t}else if(r!==u){u=gi(Error(s(424)),n),Co(u),n=pg(t,n,r,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,nn=yi(t.firstChild),En=n,Re=!0,Xa=null,Si=!0,a=u0(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(Rs(),r===u){n=Ma(t,n,a);break t}xn(t,n,r,a)}n=n.child}return n;case 26:return yr(t,n),t===null?(a=k_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Re||(n.stateNode=E_(n.type,n.pendingProps,ie.current,n)):n.memoizedState=k_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ee(n),t===null&&Re&&(r=n.stateNode=H_(n.type,n.pendingProps,ie.current),En=n,Si=!0,u=nn,rs(n.type)?(th=u,nn=yi(r.firstChild)):nn=u),xn(t,n,n.pendingProps.children,a),yr(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Re&&((u=r=nn)&&(r=_M(r,n.type,n.pendingProps,Si),r!==null?(n.stateNode=r,En=n,nn=yi(r.firstChild),Si=!1,u=!0):u=!1),u||ka(n)),Ee(n),u=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,r=f.children,Wd(u,f)?r=null:g!==null&&Wd(u,g)&&(n.flags|=32),n.memoizedState!==null&&(u=Uf(t,n,dy,null,null,a),Fr._currentValue=u),yr(t,n),xn(t,n,r,a),n.child;case 6:return t===null&&Re&&((t=a=nn)&&(a=vM(a,n.pendingProps,Si),a!==null?(n.stateNode=a,En=n,nn=null,t=!0):t=!1),t||ka(n)),null;case 13:return mg(t,n,a);case 4:return B(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=Ps(n,null,r,a):xn(t,n,r,a),n.child;case 11:return rg(t,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,yr(t,n),xn(t,n,r,a),n.child;case 8:return xn(t,n,n.pendingProps.children,a),n.child;case 12:return xn(t,n,n.pendingProps.children,a),n.child;case 10:return vg(t,n,a);case 9:return u=n.type._context,r=n.pendingProps.children,Ds(n),u=Rn(u),r=r(u),n.flags|=1,xn(t,n,r,a),n.child;case 14:return og(t,n,n.type,n.pendingProps,a);case 15:return lg(t,n,n.type,n.pendingProps,a);case 19:return id(t,n,a);case 31:return yy(t,n,a);case 22:return ug(t,n,a,n.pendingProps);case 24:return Ds(n),r=Rn(pn),t===null?(u=yf(),u===null&&(u=tn,f=Sf(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},Ef(n),Wa(n,pn,u)):((t.lanes&a)!==0&&(Tf(t,n),Po(n,null,null,a),Oo()),u=t.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Wa(n,pn,r)):(r=f.cache,Wa(n,pn,r),r!==u.cache&&vf(n,[pn],a,!0))),xn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=t===null?18882560:18874368:Re&&kl(n),t!==null&&t.memoizedProps.name!==r.name?n.flags|=4194816:yr(t,n),xn(t,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ea(t){t.flags|=4}function sd(t,n,a,r,u){var f;if((f=(t.mode&32)!==0)&&(f=a===null?Z_(n,r):Z_(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),f){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(t_())t.flags|=8192;else throw Os=Ql,Mf}else t.flags&=-16777217}function xg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!K_(n))if(t_())t.flags|=8192;else throw Os=Ql,Mf}function gu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?ho():536870912,t.lanes|=n,Ar|=n)}function Go(t,n){if(!Re)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function an(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&1206910976,r|=u.flags&1206910976,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function Ty(t,n,a){var r=n.pendingProps;switch(pf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(n),null;case 1:return an(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Sa(pn),_e(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(pr(n)?Ea(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,gf())),an(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(Ea(n),f!==null?(an(n),xg(n,f)):(an(n),sd(n,u,null,r,a))):f?f!==t.memoizedState?(Ea(n),an(n),xg(n,f)):(an(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&Ea(n),an(n),sd(n,u,t,r,a)),null;case 27:if(D(n),a=ie.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Ea(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return an(n),n.subtreeFlags&=-33554433,null}t=oe.current,pr(n)?Jm(n):(t=H_(u,r,a),n.stateNode=t,Ea(n))}return an(n),n.subtreeFlags&=-33554433,null;case 5:if(D(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Ea(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return an(n),n.subtreeFlags&=-33554433,null}if(f=oe.current,pr(n))Jm(n);else{var g=Jo(ie.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?g.createElement("select",{is:r.is}):g.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?g.createElement(u,{is:r.is}):g.createElement(u)}}f[b]=n,f[F]=r;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(Nn(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Ea(n)}}return an(n),n.subtreeFlags&=-33554433,sd(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&Ea(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=ie.current,pr(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,u=En,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}t[b]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||S_(t.nodeValue,a)),t||ka(n,!0)}else t=Jo(t).createTextNode(r),t[b]=n,n.stateNode=t}return an(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=pr(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[b]=n}else Rs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;an(n),t=!1}else a=gf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ii(n),n):(ii(n),null);if((n.flags&128)!==0)throw Error(s(558))}return an(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=pr(n),r!==null&&r.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[b]=n}else Rs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;an(n),u=!1}else u=gf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ii(n),n):(ii(n),null)}return ii(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),gu(n,n.updateQueue),an(n),null);case 4:return _e(),t===null&&Hd(n.stateNode.containerInfo),n.flags|=67108864,an(n),null;case 10:return Sa(n.type),an(n),null;case 19:if(Df(n),r=n.memoizedState,r===null)return an(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)Go(r,!1);else{if(cn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=eu(t),f!==null){for(n.flags|=128,Go(r,!1),t=f.updateQueue,n.updateQueue=t,gu(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Ym(a,t),a=a.sibling;return Io(n,wn.current&1|2),Re&&_a(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&kt()>Cu&&(n.flags|=128,u=!0,Go(r,!1),n.lanes=4194304)}else{if(!u)if(t=eu(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,gu(n,t),Go(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!f.alternate&&!Re)return an(n),null}else 2*kt()-r.renderingStartTime>Cu&&a!==536870912&&(n.flags|=128,u=!0,Go(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}if(r.tail!==null){t=r.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=kt(),t.sibling=null,f=wn.current,f=u?f&1|2:f&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||Re?Io(n,f):(a=f,At(Cn,n),At(wn,a),On===null&&(On=n)),Re&&_a(n,r.treeForkCount),t}return an(n),null;case 22:case 23:return ii(n),Cf(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(an(n),n.subtreeFlags&6&&(n.flags|=8192)):an(n),a=n.updateQueue,a!==null&&gu(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&ee(Us),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Sa(pn),an(n),null;case 25:return null;case 30:return n.flags|=33554432,an(n),null}throw Error(s(156,n.tag))}function by(t,n){switch(pf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Sa(pn),_e(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return D(n),null;case 31:if(n.memoizedState!==null){if(ii(n),n.alternate===null)throw Error(s(340));Rs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ii(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Rs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Df(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return _e(),null;case 10:return Sa(n.type),null;case 22:case 23:return ii(n),Cf(),t!==null&&ee(Us),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Sa(pn),null;case 25:return null;default:return null}}function yg(t,n){switch(pf(n),n.tag){case 3:Sa(pn),_e();break;case 26:case 27:case 5:D(n);break;case 4:_e();break;case 31:n.memoizedState!==null&&ii(n);break;case 13:ii(n);break;case 19:Df(n);break;case 10:Sa(n.type);break;case 22:case 23:ii(n),Cf(),t!==null&&ee(Us);break;case 24:Sa(pn)}}function Vo(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&t)===t){r=void 0;var f=a.create,g=a.inst;r=f(),g.destroy=r}a=a.next}while(a!==u)}}catch(A){Ke(n,n.return,A)}}function $a(t,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&t)===t){var g=r.inst,A=g.destroy;if(A!==void 0){g.destroy=void 0,u=n;var I=a,Q=A;try{Q()}catch(lt){Ke(u,I,lt)}}}r=r.next}while(r!==f)}}catch(lt){Ke(n,n.return,lt)}}function Mg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{f0(n,a)}catch(r){Ke(t,t.return,r)}}}function Eg(t,n,a){a.props=zs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Ke(t,n,r)}}function qi(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var u=t.stateNode,f=pa(t.memoizedProps,u);(u.ref===null||u.ref.name!==f)&&(u.ref=D_(f)),r=u.ref;break;case 7:if(t.stateNode===null){var g=new li(t);_(t.child,!1,mM,g,void 0,void 0),t.stateNode=g}r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(A){Ke(t,n,A)}}function Dn(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){Ke(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ke(t,n,u)}else a.current=null}function _u(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)I_(t.stateNode,n[a])}function Tg(t){for(var n=t.return;n!==null&&(od(n)&&I_(t.stateNode,n.stateNode),!rd(n));)n=n.return}function Xo(t){for(var n=t.return;n!==null&&(od(n)&&gM(t.stateNode,n.stateNode),!rd(n));)n=n.return}function rd(t){return t.tag===5||t.tag===3||t.tag===27}function od(t){return t&&t.tag===7&&t.stateNode!==null}function ld(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){Ke(t,t.return,u)}}function ud(t,n,a){try{var r=t.stateNode;Qy(r,t.type,a,n),r[F]=n}catch(u){Ke(t,t.return,u)}}function bg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&rs(t.type)||t.tag===4}function cd(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||bg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&rs(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function fd(t,n,a,r){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(u,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(u),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Xi)),_u(t,r),Ae=!0;else if(u!==4&&(u===27&&(_u(t,r),r=null,rs(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(fd(t,n,a,r),t=t.sibling;t!==null;)fd(t,n,a,r),t=t.sibling}function vu(t,n,a,r){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?a.insertBefore(u,n):a.appendChild(u),_u(t,r),Ae=!0;else if(u!==4&&(u===27&&(_u(t,r),r=null,rs(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(vu(t,n,a,r),t=t.sibling;t!==null;)vu(t,n,a,r),t=t.sibling}function Ag(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Nn(n,r,a),n[b]=t,n[F]=a}catch(f){Ke(t,t.return,f)}}var Su=!1,ai=null;function Rg(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(Su=!0)}var Yi=null;function Cg(){var t=Yi;return Yi=null,t}var qn=0;function Mr(t,n,a,r,u){return qn=0,wg(t.child,n,a,r,u)}function wg(t,n,a,r,u){for(var f=!1;t!==null;){if(t.tag===5){var g=t.stateNode;if(r!==null){var A=Zd(g);r.push(A),A.view&&(f=!0)}else f||Zd(g).view&&(f=!0);Su=!0,C_(g,qn===0?n:n+"_"+qn,a),qn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&u||wg(t.child,n,a,r,u)&&(f=!0));t=t.sibling}return f}function Zi(t,n){for(;t!==null;)t.tag===5?w_(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Zi(t.child,n)),t=t.sibling}function xu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(xu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=ma(n.default,n.share),n!=="none"&&(Mr(t,a,n,null,!1)||Zi(t.child,!1))}t=t.sibling}}function dd(t,n){if(t.tag===30){var a=t.stateNode,r=t.memoizedProps,u=pa(r,a),f=ma(r.default,a.paired?r.share:r.enter);f!=="none"?Mr(t,u,f,null,!1)?(xu(t),a.paired||n||Dr(t,r.onEnter)):Zi(t.child,!1):xu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)dd(t,n),t=t.sibling;else xu(t)}function hd(t){if(ai!==null&&ai.size!==0){var n=ai;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var u=n.get(r);if(u!==void 0){var f=ma(a.default,a.share);if(f!=="none"&&(Mr(t,r,f,null,!1)?(f=t.stateNode,u.paired=f,f.paired=u,Dr(t,a.onShare)):Zi(t.child,!1)),n.delete(r),n.size===0)break}}}hd(t)}t=t.sibling}}}function pd(t){if(t.tag===30){var n=t.memoizedProps,a=pa(n,t.stateNode),r=ai!==null?ai.get(a):void 0,u=ma(n.default,r!==void 0?n.share:n.exit);u!=="none"&&(Mr(t,a,u,null,!1)?r!==void 0?(u=t.stateNode,r.paired=u,u.paired=r,ai.delete(a),Dr(t,n.onShare)):Dr(t,n.onExit):Zi(t.child,!1)),ai!==null&&hd(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)pd(t),t=t.sibling;else ai!==null&&hd(t)}function Dg(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=pa(n,t.stateNode);n=ma(n.default,n.update),t.flags&=-5,n!=="none"&&Mr(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&Dg(t);t=t.sibling}}function md(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Zi(t.child,!1))}md(t)}t=t.sibling}}function yu(t){if(t.tag===30)t.stateNode.paired=null,Zi(t.child,!1),md(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)yu(t),t=t.sibling;else md(t)}function Ng(t){for(t=t.child;t!==null;)t.tag===30?Zi(t.child,!1):(t.subtreeFlags&33554432)!==0&&Ng(t),t=t.sibling}function gd(t,n,a,r,u,f,g){for(var A=!1;n!==null;){if(n.tag===5){var I=n.stateNode;if(f!==null&&qn<f.length){var Q=f[qn],lt=Zd(I);(Q.view||lt.view)&&(A=!0);var xt;if(xt=(t.flags&4)===0)if(lt.clip)xt=!0;else{xt=Q.rect;var q=lt.rect;xt=xt.y!==q.y||xt.x!==q.x||xt.height!==q.height||xt.width!==q.width}xt&&(t.flags|=4),lt.abs?lt=!Q.abs:(Q=Q.rect,lt=lt.rect,lt=Q.height!==lt.height||Q.width!==lt.width),lt&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&C_(I,qn===0?a:a+"_"+qn,u),A&&(t.flags&4)!==0||(Yi===null&&(Yi=[]),Yi.push(I,qn===0?r:r+"_"+qn,n.memoizedProps)),qn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&g?t.flags|=n.flags&32:gd(t,n.child,a,r,u,f,g)&&(A=!0));n=n.sibling}return A}function Ug(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,r=t.stateNode,u=pa(a,r),f=ma(a.default,a.update),g;g=t.memoizedState,t.memoizedState=null,r=t;var A=t.child;qn=0,u=gd(r,A,u,u,f,g,!1),(t.flags&4)!==0&&u&&Dr(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&Ug(t);t=t.sibling}}var Tn=!1,qe=!1,Ki=!1,_d=!1,Lg=typeof WeakSet=="function"?WeakSet:Set,bn=null,ji=!1,ko=!1,Mu=!1,vd=!1;function Ay(t,n,a){if(t=t.containerInfo,Xd=Hr,t=zm(t),af(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var u=r.getSelection&&r.getSelection();if(u&&u.rangeCount!==0){r=u.anchorNode;var f=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{r.nodeType,g.nodeType}catch{r=null;break t}var A=0,I=-1,Q=-1,lt=0,xt=0,q=t,rt=null;e:for(;;){for(var Pt;q!==r||f!==0&&q.nodeType!==3||(I=A+f),q!==g||u!==0&&q.nodeType!==3||(Q=A+u),q.nodeType===3&&(A+=q.nodeValue.length),(Pt=q.firstChild)!==null;)rt=q,q=Pt;for(;;){if(q===t)break e;if(rt===r&&++lt===f&&(I=A),rt===g&&++xt===u&&(Q=A),(Pt=q.nextSibling)!==null)break;q=rt,rt=q.parentNode}q=Pt}r=I===-1||Q===-1?null:{start:I,end:Q}}else r=null}r=r||{start:0,end:0}}else r=null;for(kd={focusedElem:t,selectionRange:r},Hr=!1,a=(a&335544064)===a,bn=n,n=a?9270:1024;bn!==null;){if(t=bn,a&&(r=t.deletions,r!==null))for(f=0;f<r.length;f++)a&&pd(r[f]);if(t.alternate===null&&(t.flags&2)!==0)a&&Rg(t),Eu(a);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&pd(r),Eu(a);continue}else if(r!==null&&r.memoizedState!==null){a&&Rg(t),Eu(a);continue}}r=t.child,(t.subtreeFlags&n)!==0&&r!==null?(r.return=t,bn=r):(a&&Dg(t),Eu(a))}}ai=null}function Eu(t){for(;bn!==null;){var n=bn,a=t,r=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((u&1024)!==0&&r!==null){a=void 0,u=r.memoizedProps,r=r.memoizedState;var f=n.stateNode;try{var g=zs(n.type,u);a=f.getSnapshotBeforeUpdate(g,r),f.__reactInternalSnapshotBeforeUpdate=a}catch(A){Ke(n,n.return,A)}}break;case 3:if((u&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)Qd(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Qd(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=pa(r.memoizedProps,r.stateNode),u=n.memoizedProps,u=ma(u.default,u.update),u!=="none"&&Mr(r,a,u,r.memoizedState=[],!0));break;default:if((u&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,bn=r;break}bn=n.return}}function Og(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Qi(t,a),r&4&&Vo(5,a);break;case 1:if(Qi(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){Ke(a,a.return,g)}else{var u=zs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Ke(a,a.return,g)}}r&64&&Mg(a),r&512&&qi(a,a.return);break;case 3:if(Qi(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{f0(t,n)}catch(g){Ke(a,a.return,g)}}break;case 27:n===null&&r&4&&Ag(a);case 26:case 5:Qi(t,a),n===null&&r&4&&ld(a),r&512&&qi(a,a.return);break;case 12:Qi(t,a);break;case 31:Qi(t,a),r&4&&Bg(t,a);break;case 13:Qi(t,a),r&4&&Fg(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=By.bind(null,a),SM(t,a))));break;case 22:if(r=a.memoizedState!==null||Tn,!r){var f=n!==null&&n.memoizedState!==null||qe;n=Tn,u=qe,Tn=r,(qe=f)&&!u?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),Ci(t,a,r)):Qi(t,a),Tn=n,qe=u}break;case 30:Qi(t,a),r&512&&qi(a,a.return);break;case 7:r&512&&qi(a,a.return);default:Qi(t,a)}}function Sd(t,n){for(t=t.child;t!==null;)Pg(t,n),t=t.sibling}function Pg(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var u=t.stateNode,f=t.memoizedProps.style,g=f!=null&&f.hasOwnProperty("display")?f.display:null;u.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(I){Ke(t,t.return,I)}xd(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,Ae=!0}catch(I){Ke(t,t.return,I)}break;case 18:try{var A=t.stateNode;n?R_(A,!0):R_(t.stateNode,!1)}catch(I){Ke(t,t.return,I)}break;case 22:case 23:t.memoizedState===null&&Sd(t,n);break;default:Sd(t,n)}}function xd(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,r=n;switch(a.tag){case 4:Pg(a,r);break t;case 22:a.memoizedState===null&&xd(a,r);break t;default:xd(a,r)}}t=t.sibling}}function Ig(t){var n=t.alternate;n!==null&&(t.alternate=null,Ig(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Qt(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var sn=null,Yn=!1;function Ai(t,n,a){for(a=a.child;a!==null;)zg(t,n,a),a=a.sibling}function zg(t,n,a){if(Vt&&typeof Vt.onCommitFiberUnmount=="function")try{Vt.onCommitFiberUnmount($t,a)}catch{}switch(a.tag){case 26:qe||Dn(a,n),Ai(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!qe&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:qe||Dn(a,n),Xo(a);var r=sn,u=Yn;rs(a.type)&&(sn=a.stateNode,Yn=!1),Ai(t,n,a),G_(a.stateNode,a.type,a.memoizedProps),sn=r,Yn=u;break;case 5:qe||Dn(a,n),Xo(a);case 6:if(a.tag===6&&Xo(a),r=sn,u=Yn,sn=null,Ai(t,n,a),sn=r,Yn=u,sn!==null)if(Yn)try{(sn.nodeType===9?sn.body:sn.nodeName==="HTML"?sn.ownerDocument.body:sn).removeChild(a.stateNode),Ae=!0}catch(f){Ke(a,n,f)}else try{sn.removeChild(a.stateNode),Ae=!0}catch(f){Ke(a,n,f)}break;case 18:sn!==null&&(Yn?(t=sn,A_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Gr(t)):A_(sn,a.stateNode));break;case 4:r=sn,u=Yn,sn=a.stateNode.containerInfo,Yn=!0,Ai(t,n,a),sn=r,Yn=u;break;case 0:case 11:case 14:case 15:$a(2,a,n),qe||$a(4,a,n),Ai(t,n,a);break;case 1:qe||(Dn(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Eg(a,n,r)),Ai(t,n,a);break;case 21:Ai(t,n,a);break;case 22:qe=(r=qe)||a.memoizedState!==null,Ai(t,n,a),qe=r;break;case 30:Dn(a,n),Ai(t,n,a);break;case 7:qe||Dn(a,n),Ai(t,n,a);break;default:Ai(t,n,a)}}function Bg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Gr(t)}catch(a){Ke(n,n.return,a)}}}function Fg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Gr(t)}catch(a){Ke(n,n.return,a)}}function Ry(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Lg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Lg),n;default:throw Error(s(435,t.tag))}}function Tu(t,n){var a=Ry(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=Fy.bind(null,t,r);r.then(u,u)}})}function Gn(t,n,a){var r=n.deletions;if(r!==null)for(var u=0;u<r.length;u++){var f=r[u],g=t,A=n,I=A;t:for(;I!==null;){switch(I.tag){case 27:if(rs(I.type)){sn=I.stateNode,Yn=!1;break t}break;case 5:sn=I.stateNode,Yn=!1;break t;case 3:case 4:sn=I.stateNode.containerInfo,Yn=!0;break t}I=I.return}if(sn===null)throw Error(s(160));zg(g,A,f),sn=null,Yn=!1,g=f.alternate,g!==null&&(g.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Hg(n,t,a),n=n.sibling}var Ri=null;function Hg(t,n,a){var r=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(u&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var f=0;f<r.length;f++){var g=r[f];g.ref.impl=g.nextImpl}Gn(n,t,a),Vn(t),u&4&&($a(3,t,t.return),Vo(3,t),$a(5,t,t.return));break;case 1:Gn(n,t,a),Vn(t),u&512&&(qe||r===null||Dn(r,r.return)),u&64&&Tn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(f=Ri,Gn(n,t,a),Vn(t),u&512&&(qe||r===null||Dn(r,r.return)),u&4)if(u=r!==null?r.memoizedState:null,a=t.memoizedState,r===null)if(a===null)if(t.stateNode===null)if(Tn)t.stateNode=E_(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,u=f.ownerDocument||f;e:switch(n){case"title":r=u.getElementsByTagName("title")[0],(!r||r[Ot]||r[b]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=u.createElement(n),u.head.insertBefore(r,u.querySelector("head > title"))),Nn(r,n,a),r[b]=t,be(r),n=r;break t;case"link":if(f=Y_("link","href",u).get(n+(a.href||""))){for(g=0;g<f.length;g++)if(r=f[g],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(g,1);break e}}r=u.createElement(n),Nn(r,n,a),u.head.appendChild(r);break;case"meta":if(f=Y_("meta","content",u).get(n+(a.content||""))){for(g=0;g<f.length;g++)if(r=f[g],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(g,1);break e}}r=u.createElement(n),Nn(r,n,a),u.head.appendChild(r);break;default:throw Error(s(468,n))}r[b]=t,be(r),n=r}t.stateNode=n}else Tn||ah(f,t.type,t.stateNode);else t.stateNode=q_(f,a,t.memoizedProps);else u!==a?(u===null?(n=r.stateNode,n===null||qe||n.parentNode.removeChild(n)):u.count--,a===null?Tn||ah(f,t.type,t.stateNode):q_(f,a,t.memoizedProps)):a===null&&t.stateNode!==null&&ud(t,t.memoizedProps,r.memoizedProps);break;case 27:Gn(n,t,a),Vn(t),u&512&&(qe||r===null||Dn(r,r.return)),r!==null&&u&4&&ud(t,t.memoizedProps,r.memoizedProps);break;case 5:if(f=Ki,Ki=!1,Gn(n,t,a),Ki=f,Vn(t),u&512&&(qe||r===null||Dn(r,r.return)),t.flags&32){n=t.stateNode;try{ar(n,""),Ae=!0}catch(lt){Ke(t,t.return,lt)}}u&4&&t.stateNode!=null&&(n=t.memoizedProps,ud(t,n,r!==null?r.memoizedProps:n)),u&1024&&(_d=!0);break;case 6:if(Gn(n,t,a),Vn(t),u&4){if(t.stateNode===null)throw Error(s(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,Ae=!0}catch(lt){Ke(t,t.return,lt)}}break;case 3:if(Ae=!1,Fu=null,f=Ri,Ri=$o(n.containerInfo),Gn(n,t,a),Ri=f,Vn(t),u&4&&r!==null&&r.memoizedState.isDehydrated)try{Gr(n.containerInfo)}catch(lt){Ke(t,t.return,lt)}_d&&(_d=!1,Gg(t)),Ae=!1;break;case 4:u=Ki,Ki=Tn,r=Ve(),f=Ri,Ri=$o(t.stateNode.containerInfo),Gn(n,t,a),Vn(t),Ri=f,Ae&&ko&&(Mu=!0),Ae=r,Ki=u;break;case 12:Gn(n,t,a),Vn(t);break;case 31:Gn(n,t,a),Vn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Tu(t,n)));break;case 13:Gn(n,t,a),Vn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Ru=kt()),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Tu(t,n)));break;case 22:f=t.memoizedState!==null,g=r!==null&&r.memoizedState!==null;var A=Tn,I=qe,Q=Ki;Tn=A||f,Ki=Q||f,qe=I||g,Gn(n,t,a),qe=I,Ki=Q,Tn=A,Vn(t),u&8192&&(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,!f||r===null||g||Tn||qe||(n=g||qe,a=Tn,r=qe,Tn=f||Tn,qe=n,ts(t,2),Tn=a,qe=r),!f&&Ki||Sd(t,f)),u&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Tu(t,a))));break;case 19:Gn(n,t,a),Vn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Tu(t,n)));break;case 30:u&512&&(qe||r===null||Dn(r,r.return)),u=Ve(),f=ko,g=(a&335544064)===a,A=t.memoizedProps,ko=g&&ma(A.default,A.update)!=="none",Gn(n,t,a),Vn(t),g&&r!==null&&Ae&&(t.flags|=4),ko=f,Ae=u;break;case 21:break;case 7:u&512&&(qe||r===null||Dn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:Gn(n,t,a),Vn(t)}}function Vn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(bg(r)){a=r;break}r=r.return}r=null;for(var u=t.return;u!==null;){if(od(u)){var f=u.stateNode;r===null?r=[f]:r.push(f)}if(rd(u))break;u=u.return}var g=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var A=a.stateNode,I=cd(t);vu(t,I,A,g);break;case 5:var Q=a.stateNode;a.flags&32&&(ar(Q,""),a.flags&=-33);var lt=cd(t);vu(t,lt,Q,g);break;case 3:case 4:var xt=a.stateNode.containerInfo,q=cd(t);fd(t,q,xt,g);break;default:throw Error(s(161))}}catch(rt){Ke(t,t.return,rt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Gg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Gg(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Hr=!0,n.reset(),Hr=!1),t=t.sibling}}function Er(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)Vg(n,t),n=n.sibling;else Ug(n)}function Vg(t,n){var a=t.alternate;if(a===null)dd(t,!1);else switch(t.tag){case 3:if(vd=ji=!1,Cg(),Er(n,t),!ji&&!Mu){if(t=Yi,t!==null)for(var r=0;r<t.length;r+=3){a=t[r];var u=t[r+1];w_(a,t[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+u+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),vd=!0}Yi=null;break;case 5:Er(n,t);break;case 4:r=ji,ji=!1,Er(n,t),ji&&(Mu=!0),ji=r;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?dd(t,!1):Er(n,t));break;case 30:r=ji,u=Cg(),ji=!1,Er(n,t),ji&&(t.flags|=4);var f=t.memoizedProps,g=t.stateNode;n=pa(f,g),g=pa(a.memoizedProps,g);var A=ma(f.default,f.update);A==="none"?n=!1:(f=a.memoizedState,a.memoizedState=null,a=t.child,qn=0,n=gd(t,a,n,g,A,f,!0),qn!==(f===null?0:f.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Dr(t,t.memoizedProps.onUpdate),Yi=u):u!==null&&(u.push.apply(u,Yi),Yi=u),ji=(t.flags&32)!==0?!0:r;break;default:Er(n,t)}}function Qi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Og(t,n.alternate,n),n=n.sibling}function ts(t,n){for(t=t.child;t!==null;){var a=t,r=n;switch(a.tag){case 0:case 11:case 14:case 15:$a(4,a,a.return),ts(a,r);break;case 1:Dn(a,a.return);var u=a.stateNode;typeof u.componentWillUnmount=="function"&&Eg(a,a.return,u),ts(a,r);break;case 27:(r&2)!==0&&G_(a.stateNode,a.type,a.memoizedProps);case 5:Dn(a,a.return),a.tag!==5&&a.tag!==27||Xo(a),ts(a,r);break;case 6:Xo(a);break;case 26:Dn(a,a.return),u=a.stateNode,a.memoizedState!==null||u===null||qe||u.parentNode.removeChild(u),ts(a,r);break;case 22:a.memoizedState===null&&ts(a,r);break;case 30:Dn(a,a.return),ts(a,r);break;case 7:Dn(a,a.return);default:ts(a,r)}t=t.sibling}}function Ci(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,u=t,f=n,g=f.flags,A=(a&1)!==0;switch(f.tag){case 0:case 11:case 15:Ci(u,f,a),Vo(4,f);break;case 1:if(Ci(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(lt){Ke(r,r.return,lt)}if(r=f,u=r.updateQueue,u!==null){var I=r.stateNode;try{var Q=u.shared.hiddenCallbacks;if(Q!==null)for(u.shared.hiddenCallbacks=null,u=0;u<Q.length;u++)c0(Q[u],I)}catch(lt){Ke(r,r.return,lt)}}A&&g&64&&Mg(f),qi(f,f.return);break;case 27:(a&2)!==0&&Ag(f);case 5:f.tag!==5&&f.tag!==27||Tg(f),Ci(u,f,a),A&&r===null&&g&4&&ld(f),qi(f,f.return);break;case 6:Tg(f);break;case 26:I=f.stateNode,f.memoizedState!==null||I===null||Tn||ah($o(I.ownerDocument),f.type,I),Ci(u,f,a),A&&r===null&&g&4&&ld(f),qi(f,f.return);break;case 12:Ci(u,f,a);break;case 31:Ci(u,f,a),A&&g&4&&Bg(u,f);break;case 13:Ci(u,f,a),A&&g&4&&Fg(u,f);break;case 22:f.memoizedState===null&&Ci(u,f,a),qi(f,f.return);break;case 30:Ci(u,f,a),qi(f,f.return);break;case 7:qi(f,f.return);default:Ci(u,f,a)}n=n.sibling}}function yd(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&wo(a))}function Md(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&wo(t))}function xi(t,n,a,r){var u=(a&335544064)===a;if(n.subtreeFlags&(u?10262:10256))for(n=n.child;n!==null;)Xg(t,n,a,r),n=n.sibling;else u&&Ng(n)}function Xg(t,n,a,r){var u=(a&335544064)===a;u&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&yu(n);var f=n.flags;switch(n.tag){case 0:case 11:case 15:xi(t,n,a,r),f&2048&&Vo(9,n);break;case 1:xi(t,n,a,r);break;case 3:xi(t,n,a,r),u&&vd&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),f&2048&&(f=null,n.alternate!==null&&(f=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==f&&(n.refCount++,f!=null&&wo(f)));break;case 12:if(f&2048){xi(t,n,a,r),f=n.stateNode;try{var g=n.memoizedProps,A=g.id,I=g.onPostCommit;typeof I=="function"&&I(A,n.alternate===null?"mount":"update",f.passiveEffectDuration,-0)}catch(Q){Ke(n,n.return,Q)}}else xi(t,n,a,r);break;case 31:xi(t,n,a,r);break;case 13:xi(t,n,a,r);break;case 23:break;case 22:g=n.stateNode,A=n.alternate,n.memoizedState!==null?(u&&A!==null&&A.memoizedState===null&&yu(A),g._visibility&2?xi(t,n,a,r):Wo(t,n)):(u&&A!==null&&A.memoizedState!==null&&yu(n),g._visibility&2?xi(t,n,a,r):(g._visibility|=2,Tr(t,n,a,r,(n.subtreeFlags&10256)!==0||!1))),f&2048&&yd(A,n);break;case 24:xi(t,n,a,r),f&2048&&Md(n.alternate,n);break;case 30:u&&(f=n.alternate,f!==null&&(Zi(f.child,!0),Zi(n.child,!0))),xi(t,n,a,r);break;default:xi(t,n,a,r)}}function Tr(t,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,A=a,I=r,Q=g.flags;switch(g.tag){case 0:case 11:case 15:Tr(f,g,A,I,u),Vo(8,g);break;case 23:break;case 22:var lt=g.stateNode;g.memoizedState!==null?lt._visibility&2?Tr(f,g,A,I,u):Wo(f,g):(lt._visibility|=2,Tr(f,g,A,I,u)),u&&Q&2048&&yd(g.alternate,g);break;case 24:Tr(f,g,A,I,u),u&&Q&2048&&Md(g.alternate,g);break;default:Tr(f,g,A,I,u)}n=n.sibling}}function Wo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,u=r.flags;switch(r.tag){case 22:Wo(a,r),u&2048&&yd(r.alternate,r);break;case 24:Wo(a,r),u&2048&&Md(r.alternate,r);break;default:Wo(a,r)}n=n.sibling}}var Bs=8192;function Fs(t,n,a){if(t.subtreeFlags&Bs)for(t=t.child;t!==null;)kg(t,n,a),t=t.sibling}function kg(t,n,a){switch(t.tag){case 26:Fs(t,n,a),t.flags&Bs&&(t.memoizedState!==null?LM(a,Ri,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&Q_(a,t)));break;case 5:Fs(t,n,a),t.flags&Bs&&(t=t.stateNode,(n&335544128)===n&&Q_(a,t));break;case 3:case 4:var r=Ri;Ri=$o(t.stateNode.containerInfo),Fs(t,n,a),Ri=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Bs,Bs=16777216,Fs(t,n,a),Bs=r):Fs(t,n,a));break;case 30:if((t.flags&Bs)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var u=t.stateNode;u.paired=null,ai===null&&(ai=new Map),ai.set(r,u)}Fs(t,n,a);break;default:Fs(t,n,a)}}function Wg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function qo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];bn=r,Yg(r,t)}Wg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)qg(t),t=t.sibling}function qg(t){switch(t.tag){case 0:case 11:case 15:qo(t),t.flags&2048&&$a(9,t,t.return);break;case 3:qo(t);break;case 12:qo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,bu(t)):qo(t);break;default:qo(t)}}function bu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];bn=r,Yg(r,t)}Wg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:$a(8,n,n.return),bu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,bu(n));break;default:bu(n)}t=t.sibling}}function Yg(t,n){for(;bn!==null;){var a=bn;switch(a.tag){case 0:case 11:case 15:$a(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:wo(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,bn=r;else t:for(a=t;bn!==null;){r=bn;var u=r.sibling,f=r.return;if(Ig(r),r===a){bn=null;break t}if(u!==null){u.return=f,bn=u;break t}bn=f}}}var Cy={getCacheForType:function(t){var n=Rn(pn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Rn(pn).controller.signal}},wy=typeof WeakMap=="function"?WeakMap:Map,Xe=0,tn=null,we=null,Ue=0,Ze=0,si=null,es=!1,br=!1,Ed=!1,Ta=0,cn=0,ns=0,Hs=0,Au=0,ri=0,Ar=0,Yo=null,Zn=null,Td=!1,Ru=0,Zg=0,Cu=1/0,wu=null,is=null,rn=0,wi=null,Gs=null,Ji=0,bd=0,Ad=null,Kg=null,Rr=null,Cr=null,wr=null,Zo=0,Du=null;function oi(){return(Xe&2)!==0&&Ue!==0?Ue&-Ue:mt.T!==null?Id():Cl()}function jg(){if(ri===0)if((Ue&536870912)===0||Re){var t=xs;xs<<=1,(xs&3932160)===0&&(xs=262144),ri=t}else ri=536870912;return t=Cn.current,t!==null&&(t.flags|=32),ri}function Dr(t,n){if(n!=null){var a=t.stateNode,r=a.ref;r===null&&(r=a.ref=D_(pa(t.memoizedProps,a))),Cr===null&&(Cr=[]),Cr.push(n.bind(null,r))}}function Kn(t,n,a){(t===tn&&(Ze===2||Ze===9)||t.cancelPendingCommit!==null)&&(Nr(t,0),as(t,Ue,ri,!1)),Gi(t,a),((Xe&2)===0||t!==tn)&&(t===tn&&((Xe&2)===0&&(Hs|=a),cn===4&&as(t,Ue,ri,!1)),$i(t))}function Qg(t,n,a){if((Xe&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Fa(t,n),u=r?Uy(t,n):Cd(t,n,!0),f=r;do{if(u===0){br&&!r&&as(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Dy(a)){u=Cd(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var A=t;u=Yo;var I=A.current.memoizedState.isDehydrated;if(I&&(Nr(A,g).flags|=256),g=Cd(A,g,!1),g!==2&&g!==6){if(Ed&&!I){A.errorRecoveryDisabledLanes|=f,Hs|=f,u=4;break t}f=Zn,Zn=u,f!==null&&(Zn===null?Zn=f:Zn.push.apply(Zn,f))}u=g}if(f=!1,u!==2)continue}}if(u===1){Nr(t,0),as(t,n,0,!0);break}t:{switch(r=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:as(r,n,ri,!es);break t;case 2:Zn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Ru+300-kt(),10<u)){if(as(r,n,ri,!es),ys(r,0,!0)!==0)break t;Ji=n,r.timeoutHandle=Yd(Jg.bind(null,r,a,Zn,wu,Td,n,ri,Hs,Ar,es,f,"Throttled",-0,0),u);break t}Jg(r,a,Zn,wu,Td,n,ri,Hs,Ar,es,f,null,-0,0)}}break}while(!0);$i(t)}function Jg(t,n,a,r,u,f,g,A,I,Q,lt,xt,q,rt){t.timeoutHandle=-1;var Pt=n.subtreeFlags,Jt=(f&335544064)===f;if(xt=null,(Jt||Pt&8192||(Pt&16785408)===16785408)&&(xt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xi},ai=null,kg(n,f,xt),Jt&&(Pt=xt,Jt=t.containerInfo,Jt=(Jt.nodeType===9?Jt:Jt.ownerDocument).__reactViewTransition,Jt!=null&&(Pt.count++,Pt.waitingForViewTransition=!0,Pt=nl.bind(Pt),Jt.finished.then(Pt,Pt))),Pt=(f&62914560)===f?Ru-kt():(f&4194048)===f?Zg-kt():0,Pt=OM(xt,Pt),Pt!==null)){Ji=f,t.cancelPendingCommit=Pt(r_.bind(null,t,n,f,a,r,u,g,A,I,Q,lt,xt,null,q,rt)),as(t,f,g,!Q);return}r_(t,n,f,a,r,u,g,A,I,Q,lt,xt)}function Dy(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!ni(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function as(t,n,a,r){n=Hi(t,n),n&=~Au,n&=~Hs,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var u=n;0<u;){var f=31-pe(u),g=1<<f;r[f]=-1,u&=~g}a!==0&&Ms(t,a,n)}function Nu(){return(Xe&6)===0?(Ko(0),!1):!0}function Rd(){if(we!==null){if(Ze===0)var t=we.return;else t=we,va=Cs=null,Pf(t),_r=null,Uo=0,t=we;for(;t!==null;)yg(t.alternate,t),t=t.return;we=null}}function Nr(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,tM(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ji=0,Rd(),tn=t,we=a=ga(t.current,null),Ue=n,Ze=0,si=null,es=!1,br=Fa(t,n),Ed=!1,Ar=ri=Au=Hs=ns=cn=0,Zn=Yo=null,Td=!1,Ta=Hi(t,n),Fl(),a}function $g(t,n){ve=null,mt.H=cu,n===gr||n===jl?(n=r0(),Ze=3):n===Mf?(n=r0(),Ze=4):Ze=n===jf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,si=n,we===null&&(cn=1,fu(t,gi(n,t.current)))}function t_(){var t=Cn.current;return t===null?!0:(Ue&4194048)===Ue?On===null:(Ue&62914560)===Ue||(Ue&536870912)!==0?t===On:!1}function e_(){var t=mt.H;return mt.H=cu,t===null?cu:t}function n_(){var t=mt.A;return mt.A=Cy,t}function Uu(){cn=4,es||(Ue&4194048)!==Ue&&Cn.current!==null||(br=!0),(ns&134217727)===0&&(Hs&134217727)===0||tn===null||as(tn,Ue,ri,!1)}function Cd(t,n,a){var r=Xe;Xe|=2;var u=e_(),f=n_();(tn!==t||Ue!==n)&&(wu=null,Nr(t,n)),n=!1;var g=cn;t:do try{if(Ze!==0&&we!==null){var A=we,I=si;switch(Ze){case 8:Rd(),g=6;break t;case 3:case 2:case 9:case 6:Cn.current===null&&(n=!0);var Q=Ze;if(Ze=0,si=null,Ur(t,A,I,Q),a&&br){g=0;break t}break;default:Q=Ze,Ze=0,si=null,Ur(t,A,I,Q)}}Ny(),g=cn;break}catch(lt){$g(t,lt)}while(!0);return n&&t.shellSuspendCounter++,va=Cs=null,Xe=r,mt.H=u,mt.A=f,we===null&&(tn=null,Ue=0,Fl()),g}function Ny(){for(;we!==null;)i_(we)}function Uy(t,n){var a=Xe;Xe|=2;var r=e_(),u=n_();tn!==t||Ue!==n?(wu=null,Cu=kt()+500,Nr(t,n)):br=Fa(t,n);t:do try{if(Ze!==0&&we!==null){n=we;var f=si;e:switch(Ze){case 1:Ze=0,si=null,Ur(t,n,f,1);break;case 2:case 9:if(a0(f)){Ze=0,si=null,a_(n);break}n=function(){Ze!==2&&Ze!==9||tn!==t||(Ze=7),$i(t)},f.then(n,n);break t;case 3:Ze=7;break t;case 4:Ze=5;break t;case 7:a0(f)?(Ze=0,si=null,a_(n)):(Ze=0,si=null,Ur(t,n,f,7));break;case 5:var g=null;switch(we.tag){case 26:g=we.memoizedState;case 5:case 27:var A=we;if(g?K_(g):A.stateNode.complete){Ze=0,si=null;var I=A.sibling;if(I!==null)we=I;else{var Q=A.return;Q!==null?(we=Q,Lu(Q)):we=null}break e}}Ze=0,si=null,Ur(t,n,f,5);break;case 6:Ze=0,si=null,Ur(t,n,f,6);break;case 8:Rd(),cn=6;break t;default:throw Error(s(462))}}Ly();break}catch(lt){$g(t,lt)}while(!0);return va=Cs=null,mt.H=r,mt.A=u,Xe=a,we!==null?0:(tn=null,Ue=0,Fl(),cn)}function Ly(){for(;we!==null&&!Bt();)i_(we)}function i_(t){var n=Sg(t.alternate,t,Ta);t.memoizedProps=t.pendingProps,n===null?Lu(t):we=n}function a_(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=dg(a,n,n.pendingProps,n.type,void 0,Ue);break;case 11:n=dg(a,n,n.pendingProps,n.type.render,n.ref,Ue);break;case 5:Pf(n);var r=n;r===En&&(Re?(Wl(r),r.tag===5&&r.stateNode!=null&&(nn=r.stateNode)):(Wl(r),Re=!0));default:yg(a,n),n=we=Ym(n,Ta),n=Sg(a,n,Ta)}t.memoizedProps=t.pendingProps,n===null?Lu(t):we=n}function Ur(t,n,a,r){va=Cs=null,Pf(n),_r=null,Uo=0;var u=n.return;try{if(xy(t,u,n,a,Ue)){cn=1,fu(t,gi(a,t.current)),we=null;return}}catch(f){if(u!==null)throw we=u,f;cn=1,fu(t,gi(a,t.current)),we=null;return}n.flags&32768?(Re||r===1?t=!0:br||(Ue&536870912)!==0?t=!1:(es=t=!0,(r===2||r===9||r===3||r===6)&&(r=Cn.current,r!==null&&r.tag===13&&(r.flags|=16384))),s_(n,t)):Lu(n)}function Lu(t){var n=t;do{if((n.flags&32768)!==0){s_(n,es);return}t=n.return;var a=Ty(n.alternate,n,Ta);if(a!==null){we=a;return}if(n=n.sibling,n!==null){we=n;return}we=n=t}while(n!==null);cn===0&&(cn=5)}function s_(t,n){do{var a=by(t.alternate,t);if(a!==null){a.flags&=32767,we=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){we=t;return}we=t=a}while(t!==null);cn=6,we=null}function r_(t,n,a,r,u,f,g,A,I,Q,lt,xt){t.cancelPendingCommit=null;do Ou();while(rn!==0);if((Xe&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));t===tn&&(we=tn=null,Ue=0),Gs=n,wi=t,Ji=a,Ad=u,Kg=r,Oy(t,n,a,g,A,I,xt)}}function Oy(t,n,a,r,u,f,g){var A=n.lanes|n.childLanes;if(bd=A,A|=uf,Rl(t,a,A,r,u,f),Cr=null,(a&335544064)===a?(wr=ly(t),r=10262):(wr=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,Hy(Dt,function(){return Ud(),null})):(t.callbackNode=null,t.callbackPriority=0),Su=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=mt.T,mt.T=null,u=Ct.p,Ct.p=2,f=Xe,Xe|=4;try{Ay(t,n,a)}finally{Xe=f,Ct.p=u,mt.T=r}}rn=1,Su?Rr=rM(g,t.containerInfo,wr,wd,Dd,Iy,Nd,Ud,Py):(wd(),Dd(),Nd())}function Py(t){if(rn!==0){var n=wi.onRecoverableError;n(t,{componentStack:null})}}function Iy(){rn===3&&(rn=0,Vg(Gs,wi),rn=4)}function wd(){if(rn===1){rn=0;var t=wi,n=Gs,a=Ji,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=mt.T,mt.T=null;var u=Ct.p;Ct.p=2;var f=Xe;Xe|=4;try{ko=Mu=!1,Hg(n,t,a),a=kd;var g=zm(t.containerInfo),A=a.focusedElem,I=a.selectionRange;if(g!==A&&A&&A.ownerDocument&&Im(A.ownerDocument.documentElement,A)){if(I!==null&&af(A)){var Q=I.start,lt=I.end;if(lt===void 0&&(lt=Q),"selectionStart"in A)A.selectionStart=Q,A.selectionEnd=Math.min(lt,A.value.length);else{var xt=A.ownerDocument||document,q=xt&&xt.defaultView||window;if(q.getSelection){var rt=q.getSelection(),Pt=A.textContent.length,Jt=Math.min(I.start,Pt),Se=I.end===void 0?Jt:Math.min(I.end,Pt);!rt.extend&&Jt>Se&&(g=Se,Se=Jt,Jt=g);var j=Pm(A,Jt),H=Pm(A,Se);if(j&&H&&(rt.rangeCount!==1||rt.anchorNode!==j.node||rt.anchorOffset!==j.offset||rt.focusNode!==H.node||rt.focusOffset!==H.offset)){var nt=xt.createRange();nt.setStart(j.node,j.offset),rt.removeAllRanges(),Jt>Se?(rt.addRange(nt),rt.extend(H.node,H.offset)):(nt.setEnd(H.node,H.offset),rt.addRange(nt))}}}}for(xt=[],rt=A;rt=rt.parentNode;)rt.nodeType===1&&xt.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<xt.length;A++){var St=xt[A];St.element.scrollLeft=St.left,St.element.scrollTop=St.top}}Hr=!!Xd,kd=Xd=null}finally{Xe=f,Ct.p=u,mt.T=r}}t.current=n,rn=2}}function Dd(){if(rn===2){rn=0;var t=wi,n=Gs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=mt.T,mt.T=null;var r=Ct.p;Ct.p=2;var u=Xe;Xe|=4;try{Og(t,n.alternate,n)}finally{Xe=u,Ct.p=r,mt.T=a}}rn=3}}function Nd(){if(rn===4||rn===3){rn=0;var t=Rr;Rr=null,zt();var n=wi,a=Gs,r=Ji,u=Kg,f=(r&335544064)===r?10262:10256;if((a.subtreeFlags&f)!==0||(a.flags&f)!==0?rn=5:(rn=0,Gs=wi=null,o_(n,n.pendingLanes)),f=n.pendingLanes,f===0&&(is=null),_o(r),a=a.stateNode,Vt&&typeof Vt.onCommitFiberRoot=="function")try{Vt.onCommitFiberRoot($t,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=mt.T,f=Ct.p,Ct.p=2,mt.T=null;try{for(var g=n.onRecoverableError,A=0;A<u.length;A++){var I=u[A];g(I.value,{componentStack:I.stack})}}finally{mt.T=a,Ct.p=f}}if(u=Cr,g=wr,wr=null,u!==null&&(Cr=null,g===null&&(g=[]),t!==null))for(I=0;I<u.length;I++)a=(0,u[I])(g),a!==void 0&&t.finished.finally(a);(Ji&3)!==0&&Ou(),$i(n),f=n.pendingLanes,(r&261930)!==0&&(f&42)!==0?n===Du?Zo++:(Zo=0,Du=n):(Zo=0,Du=null),Ko(0)}}function o_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,wo(n)))}function Ou(){return Rr!==null&&(Rr.skipTransition(),Rr=null),wd(),Dd(),Nd(),Ud()}function Ud(){if(rn!==5)return!1;var t=wi,n=bd;bd=0;var a=_o(Ji),r=mt.T,u=Ct.p;try{Ct.p=32>a?32:a,mt.T=null,a=Ad,Ad=null;var f=wi,g=Ji;if(rn=0,Gs=wi=null,Ji=0,(Xe&6)!==0)throw Error(s(331));var A=Xe;if(Xe|=4,qg(f.current),Xg(f,f.current,g,a),Xe=A,Ko(0,!1),Vt&&typeof Vt.onPostCommitFiberRoot=="function")try{Vt.onPostCommitFiberRoot($t,f)}catch{}return!0}finally{Ct.p=u,mt.T=r,o_(t,n)}}function l_(t,n,a){n=gi(a,n),n=Kf(t.stateNode,n,2),t=Ka(t,n,2),t!==null&&(Gi(t,2),$i(t))}function Ke(t,n,a){if(t.tag===3)l_(t,t,a);else for(;n!==null;){if(n.tag===3){l_(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(is===null||!is.has(r))){t=gi(a,t),a=ag(2),r=Ka(n,a,2),r!==null&&(sg(a,r,n,t),Gi(r,2),$i(r));break}}n=n.return}}function Ld(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new wy;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(Ed=!0,u.add(a),t=zy.bind(null,t,n,a),n.then(t,t))}function zy(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,tn===t&&(Ue&a)===a&&((cn===4||cn===3&&(Ue&62914560)===Ue&&300>kt()-Ru)&&(Xe&2)===0?Nr(t,0):Au|=a,Ar===Ue&&(Ar=0)),$i(t)}function u_(t,n){n===0&&(n=ho()),t=bs(t,n),t!==null&&(Gi(t,n),$i(t))}function By(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),u_(t,a)}function Fy(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),u_(t,a)}function Hy(t,n){return Nt(t,n)}var Lr=null,Or=null,Od=!1,Pu=!1,Pd=!1,ss=0;function $i(t){t!==Or&&t.next===null&&(Or===null?Lr=Or=t:Or=Or.next=t),Pu=!0,Od||(Od=!0,Vy())}function Ko(t,n){if(!Pd&&Pu){Pd=!0;do for(var a=!1,r=Lr;r!==null;){if(t!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var g=r.suspendedLanes,A=r.pingedLanes;f=(1<<31-pe(42|t)+1)-1,f&=u&~(g&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,h_(r,f))}else f=Ue,f=ys(r,r===tn?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Fa(r,f)||(a=!0,h_(r,f));r=r.next}while(a);Pd=!1}}function Gy(){c_()}function c_(){Pu=Od=!1;var t=0;ss!==0&&$y()&&(t=ss);for(var n=kt(),a=null,r=Lr;r!==null;){var u=r.next,f=f_(r,n);f===0?(r.next=null,a===null?Lr=u:a.next=u,u===null&&(Or=a)):(a=r,(t!==0||(f&3)!==0)&&(Pu=!0)),r=u}rn!==0&&rn!==5||Ko(t),ss!==0&&(ss=0)}function f_(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-pe(f),A=1<<g,I=u[g];I===-1?((A&a)===0||(A&r)!==0)&&(u[g]=fo(A,n)):I<=n&&(t.expiredLanes|=A),f&=~A}if(n=tn,a=Ue,a=ys(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Ze===2||Ze===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&te(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Fa(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&te(r),_o(a)){case 2:case 8:a=X;break;case 32:a=Dt;break;case 268435456:a=Lt;break;default:a=Dt}return r=d_.bind(null,t),a=Nt(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&te(r),t.callbackPriority=2,t.callbackNode=null,2}function d_(t,n){if(rn!==0&&rn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Ou()&&t.callbackNode!==a)return null;var r=Ue;return r=ys(t,t===tn?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(Qg(t,r,n),f_(t,kt()),t.callbackNode!=null&&t.callbackNode===a?d_.bind(null,t):null)}function h_(t,n){if(Ou())return null;Qg(t,n,!0)}function Vy(){eM(function(){(Xe&6)!==0?Nt(he,Gy):c_()})}function Id(){if(ss===0){var t=Ns;t===0&&(t=er,er<<=1,(er&261888)===0&&(er=256)),ss=t}return ss}function p_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Nl(t)}function Xy(t,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=p_((u[F]||null).action),g=r.submitter;g&&(n=(n=g[F]||null)?p_(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var A=new Pl("action","action",null,r,u);t.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ss!==0){var I=new FormData(u,g);kf(a,{pending:!0,data:I,method:u.method,action:f},null,I)}}else typeof f=="function"&&(A.preventDefault(),I=new FormData(u,g),kf(a,{pending:!0,data:I,method:u.method,action:f},f,I))},currentTarget:u}]})}}for(var zd=0;zd<lf.length;zd++){var Bd=lf[zd],ky=Bd.toLowerCase(),Wy=Bd[0].toUpperCase()+Bd.slice(1);bi(ky,"on"+Wy)}bi(Hm,"onAnimationEnd"),bi(Gm,"onAnimationIteration"),bi(Vm,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(ty,"onTransitionRun"),bi(ey,"onTransitionStart"),bi(ny,"onTransitionCancel"),bi(Xm,"onTransitionEnd"),on("onMouseEnter",["mouseout","mouseover"]),on("onMouseLeave",["mouseout","mouseover"]),on("onPointerEnter",["pointerout","pointerover"]),on("onPointerLeave",["pointerout","pointerover"]),Ht("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ht("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ht("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ht("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ht("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ht("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(jo));function m_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],u=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var g=r.length-1;0<=g;g--){var A=r[g],I=A.instance,Q=A.currentTarget;if(A=A.listener,I!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=Q;try{f(u)}catch(lt){Bl(lt)}u.currentTarget=null,f=I}else for(g=0;g<r.length;g++){if(A=r[g],I=A.instance,Q=A.currentTarget,A=A.listener,I!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=Q;try{f(u)}catch(lt){Bl(lt)}u.currentTarget=null,f=I}}}}function De(t,n){var a=n[at];a===void 0&&(a=n[at]=new Set);var r=t+"__bubble";a.has(r)||(g_(n,t,2,!1),a.add(r))}function Fd(t,n,a){var r=0;n&&(r|=4),g_(a,t,r,n)}var Iu="_reactListening"+Math.random().toString(36).slice(2);function Hd(t){if(!t[Iu]){t[Iu]=!0,We.forEach(function(a){a!=="selectionchange"&&(qy.has(a)||Fd(a,!1,t),Fd(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Iu]||(n[Iu]=!0,Fd("selectionchange",!1,n))}}function g_(t,n,a,r){switch(sv(n)){case 2:var u=BM;break;case 8:u=FM;break;default:u=rh}a=u.bind(null,n,a,t),u=void 0,!Yc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Gd(t,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var A=r.stateNode.containerInfo;if(A===u)break;if(g===4)for(g=r.return;g!==null;){var I=g.tag;if((I===3||I===4)&&g.stateNode.containerInfo===u)return;g=g.return}for(;A!==null;){if(g=re(A),g===null)return;if(I=g.tag,I===5||I===6||I===26||I===27){r=f=g;continue t}A=A.parentNode}}r=r.return}gm(function(){var Q=f,lt=Wc(a),xt=[];t:{var q=km.get(t);if(q!==void 0){var rt=Pl,Pt=t;switch(t){case"keypress":if(Ll(a)===0)break t;case"keydown":case"keyup":rt=Dx;break;case"focusin":Pt="focus",rt=Qc;break;case"focusout":Pt="blur",rt=Qc;break;case"beforeblur":case"afterblur":rt=Qc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=Sm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=vx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=Px;break;case Hm:case Gm:case Vm:rt=yx;break;case Xm:rt=zx;break;case"scroll":case"scrollend":rt=gx;break;case"wheel":rt=Fx;break;case"copy":case"cut":case"paste":rt=Ex;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=ym;break;case"submit":rt=Lx;break;case"toggle":case"beforetoggle":rt=Gx}var Jt=(n&4)!==0,Se=!Jt&&(t==="scroll"||t==="scrollend"),j=Jt?q!==null?q+"Capture":null:q;Jt=[];for(var H=Q,nt;H!==null;){var St=H;if(nt=St.stateNode,St=St.tag,St!==5&&St!==26&&St!==27||nt===null||j===null||(St=vo(H,j),St!=null&&Jt.push(Qo(H,St,nt))),Se)break;H=H.return}0<Jt.length&&(q=new rt(q,Pt,null,a,lt),xt.push({event:q,listeners:Jt}))}}if((n&7)===0){t:{if(rt=t==="mouseover"||t==="pointerover",q=t==="mouseout"||t==="pointerout",rt&&a!==kc&&(Pt=a.relatedTarget||a.fromElement)&&(re(Pt)||Pt[dt]))break t;(q||rt)&&(Pt=lt.window===lt?lt:(rt=lt.ownerDocument)?rt.defaultView||rt.parentWindow:window,q?(rt=a.relatedTarget||a.toElement,q=Q,rt=rt?re(rt):null,rt!==null&&(Se=c(rt),Jt=rt.tag,rt!==Se||Jt!==5&&Jt!==27&&Jt!==6)&&(rt=null)):(q=null,rt=Q),q!==rt&&(Jt=Sm,St="onMouseLeave",j="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(Jt=ym,St="onPointerLeave",j="onPointerEnter",H="pointer"),Se=q==null?Pt:qt(q),nt=rt==null?Pt:qt(rt),Pt=new Jt(St,H+"leave",q,a,lt),Pt.target=Se,Pt.relatedTarget=nt,St=null,re(lt)===Q&&(Jt=new Jt(j,H+"enter",rt,a,lt),Jt.target=nt,Jt.relatedTarget=Se,St=Jt),Se=St,Jt=q&&rt?U(q,rt,Yy):null,q!==null&&__(xt,Pt,q,Jt,!1),rt!==null&&Se!==null&&__(xt,Se,rt,Jt,!0)))}t:{if(q=Q?qt(Q):window,rt=q.nodeName&&q.nodeName.toLowerCase(),rt==="select"||rt==="input"&&q.type==="file")var Yt=wm;else if(Rm(q))if(Dm)Yt=Qx;else{Yt=Kx;var Le=Zx}else rt=q.nodeName,!rt||rt.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?Q&&Xc(Q.elementType)&&(Yt=wm):Yt=jx;if(Yt&&(Yt=Yt(t,Q))){Cm(xt,Yt,a,lt);break t}Le&&Le(t,q,Q)}switch(Le=Q?qt(Q):window,t){case"focusin":(Rm(Le)||Le.contentEditable==="true")&&(lr=Le,sf=Q,Ao=null);break;case"focusout":Ao=sf=lr=null;break;case"mousedown":rf=!0;break;case"contextmenu":case"mouseup":case"dragend":rf=!1,Bm(xt,a,lt);break;case"selectionchange":if($x)break;case"keydown":case"keyup":Bm(xt,a,lt)}var ne;if($c)t:{switch(t){case"compositionstart":var se="onCompositionStart";break t;case"compositionend":se="onCompositionEnd";break t;case"compositionupdate":se="onCompositionUpdate";break t}se=void 0}else or?bm(t,a)&&(se="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(se="onCompositionStart");se&&(Mm&&a.locale!=="ko"&&(or||se!=="onCompositionStart"?se==="onCompositionEnd"&&or&&(ne=_m()):(Ha=lt,Zc="value"in Ha?Ha.value:Ha.textContent,or=!0)),Le=zu(Q,se),0<Le.length&&(se=new xm(se,t,null,a,lt),xt.push({event:se,listeners:Le}),ne?se.data=ne:(ne=Am(a),ne!==null&&(se.data=ne)))),(ne=Xx?kx(t,a):Wx(t,a))&&(se=zu(Q,"onBeforeInput"),0<se.length&&(Le=new xm("onBeforeInput","beforeinput",null,a,lt),xt.push({event:Le,listeners:se}),Le.data=ne)),Xy(xt,t,Q,a,lt)}m_(xt,n)})}function Qo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function zu(t,n){for(var a=n+"Capture",r=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=vo(t,a),u!=null&&r.unshift(Qo(t,u,f)),u=vo(t,n),u!=null&&r.push(Qo(t,u,f))),t.tag===3)return r;t=t.return}return[]}function Yy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function __(t,n,a,r,u){for(var f=n._reactName,g=[];a!==null&&a!==r;){var A=a,I=A.alternate,Q=A.stateNode;if(A=A.tag,I!==null&&I===r)break;A!==5&&A!==26&&A!==27||Q===null||(I=Q,u?(Q=vo(a,f),Q!=null&&g.unshift(Qo(a,Q,I))):u||(Q=vo(a,f),Q!=null&&g.push(Qo(a,Q,I)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var Zy=/\r\n?/g,Ky=/\u0000|\uFFFD/g;function v_(t){return(typeof t=="string"?t:""+t).replace(Zy,`
`).replace(Ky,"")}function S_(t,n){return n=v_(n),v_(t)===n}function je(t,n,a,r,u,f){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||ar(t,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&ar(t,""+r);else return;break;case"className":ei(t,"class",r);break;case"tabIndex":ei(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":ei(t,a,r);break;case"style":pm(t,r,f);return;case"data":if(n!=="object"){ei(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Nl(r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&je(t,n,"name",u.name,u,null),je(t,n,"formEncType",u.formEncType,u,null),je(t,n,"formMethod",u.formMethod,u,null),je(t,n,"formTarget",u.formTarget,u,null)):(je(t,n,"encType",u.encType,u,null),je(t,n,"method",u.method,u,null),je(t,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Nl(r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Xi);return;case"onScroll":r!=null&&De("scroll",t);return;case"onScrollEnd":r!=null&&De("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));f?.__html!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=Nl(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":De("beforetoggle",t),De("toggle",t),en(t,"popover",r);break;case"xlinkActuate":Ne(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Ne(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Ne(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Ne(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Ne(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Ne(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Ne(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Ne(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Ne(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":en(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=px.get(a)||a,en(t,a,r);else return}Ae=!0}function Vd(t,n,a,r,u,f){switch(a){case"style":pm(t,r,f);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));f?.__html!==a&&(t.innerHTML=a)}}break;case"children":if(typeof r=="string")ar(t,r);else if(typeof r=="number"||typeof r=="bigint")ar(t,""+r);else return;break;case"onScroll":r!=null&&De("scroll",t);return;case"onScrollEnd":r!=null&&De("scrollend",t);return;case"onClick":r!=null&&(t.onclick=Xi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Sn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),f=a.slice(2,u?a.length-7:void 0),n=t[F]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(f,n,u),typeof r=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(f,r,u);break t}Ae=!0,a in t?t[a]=r:r===!0?t.setAttribute(a,""):en(t,a,r)}return}Ae=!0}function Nn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":De("error",t),De("load",t);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:je(t,n,f,g,a,null)}}u&&je(t,n,"srcSet",a.srcSet,a,null),r&&je(t,n,"src",a.src,a,null);return;case"input":De("invalid",t);var A=f=g=u=null,I=null,Q=null;for(r in a)if(a.hasOwnProperty(r)){var lt=a[r];if(lt!=null)switch(r){case"name":u=lt;break;case"type":g=lt;break;case"checked":I=lt;break;case"defaultChecked":Q=lt;break;case"value":f=lt;break;case"defaultValue":A=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:je(t,n,r,lt,a,null)}}cm(t,f,A,I,Q,g,u,!1);return;case"select":De("invalid",t),r=g=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":g=A;break;case"multiple":r=A;default:je(t,n,u,A,a,null)}n=f,a=g,t.multiple=!!r,n!=null?ir(t,!!r,n,!1):a!=null&&ir(t,!!r,a,!0);return;case"textarea":De("invalid",t),f=u=r=null;for(g in a)if(a.hasOwnProperty(g)&&(A=a[g],A!=null))switch(g){case"value":r=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:je(t,n,g,A,a,null)}dm(t,r,u,f);return;case"option":for(I in a)a.hasOwnProperty(I)&&(r=a[I],r!=null)&&(I==="selected"?t.selected=r&&typeof r!="function"&&typeof r!="symbol":je(t,n,I,r,a,null));return;case"dialog":De("beforetoggle",t),De("toggle",t),De("cancel",t),De("close",t);break;case"iframe":case"object":De("load",t);break;case"video":case"audio":for(r=0;r<jo.length;r++)De(jo[r],t);break;case"image":De("error",t),De("load",t);break;case"details":De("toggle",t);break;case"embed":case"source":case"link":De("error",t),De("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(r=a[Q],r!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:je(t,n,Q,r,a,null)}return;default:if(Xc(n)){for(lt in a)a.hasOwnProperty(lt)&&(r=a[lt],r!==void 0&&Vd(t,n,lt,r,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(r=a[A],r!=null&&je(t,n,A,r,a,null))}var jy={};function Qy(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,g=null,A=null,I=null,Q=null,lt=null;for(rt in a){var xt=a[rt];if(a.hasOwnProperty(rt)&&xt!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":I=xt;default:r.hasOwnProperty(rt)||je(t,n,rt,null,r,xt)}}for(var q in r){var rt=r[q];if(xt=a[q],r.hasOwnProperty(q)&&(rt!=null||xt!=null))switch(q){case"type":rt!==xt&&(Ae=!0),f=rt;break;case"name":rt!==xt&&(Ae=!0),u=rt;break;case"checked":rt!==xt&&(Ae=!0),Q=rt;break;case"defaultChecked":rt!==xt&&(Ae=!0),lt=rt;break;case"value":rt!==xt&&(Ae=!0),g=rt;break;case"defaultValue":rt!==xt&&(Ae=!0),A=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,n));break;default:rt!==xt&&je(t,n,q,rt,r,xt)}}Gc(t,g,A,I,Q,lt,f,u);return;case"select":rt=g=A=q=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":rt=I;default:r.hasOwnProperty(f)||je(t,n,f,null,r,I)}for(u in r)if(f=r[u],I=a[u],r.hasOwnProperty(u)&&(f!=null||I!=null))switch(u){case"value":f!==I&&(Ae=!0),q=f;break;case"defaultValue":f!==I&&(Ae=!0),A=f;break;case"multiple":f!==I&&(Ae=!0),g=f;default:f!==I&&je(t,n,u,f,r,I)}n=A,a=g,r=rt,q!=null?ir(t,!!a,q,!1):!!r!=!!a&&(n!=null?ir(t,!!a,n,!0):ir(t,!!a,a?[]:"",!1));return;case"textarea":rt=q=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:je(t,n,A,null,r,u)}for(g in r)if(u=r[g],f=a[g],r.hasOwnProperty(g)&&(u!=null||f!=null))switch(g){case"value":u!==f&&(Ae=!0),q=u;break;case"defaultValue":u!==f&&(Ae=!0),rt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&je(t,n,g,u,r,f)}fm(t,q,rt);return;case"option":for(var Pt in a)q=a[Pt],a.hasOwnProperty(Pt)&&q!=null&&!r.hasOwnProperty(Pt)&&(Pt==="selected"?t.selected=!1:je(t,n,Pt,null,r,q));for(I in r)q=r[I],rt=a[I],r.hasOwnProperty(I)&&q!==rt&&(q!=null||rt!=null)&&(I==="selected"?(q!==rt&&(Ae=!0),t.selected=q&&typeof q!="function"&&typeof q!="symbol"):je(t,n,I,q,r,rt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in a)q=a[Jt],a.hasOwnProperty(Jt)&&q!=null&&!r.hasOwnProperty(Jt)&&je(t,n,Jt,null,r,q);for(Q in r)if(q=r[Q],rt=a[Q],r.hasOwnProperty(Q)&&q!==rt&&(q!=null||rt!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,n));break;default:je(t,n,Q,q,r,rt)}return;default:if(Xc(n)){for(var Se in a)q=a[Se],a.hasOwnProperty(Se)&&q!==void 0&&!r.hasOwnProperty(Se)&&Vd(t,n,Se,void 0,r,q);for(lt in r)q=r[lt],rt=a[lt],!r.hasOwnProperty(lt)||q===rt||q===void 0&&rt===void 0||Vd(t,n,lt,q,r,rt);return}}for(var j in a)q=a[j],a.hasOwnProperty(j)&&q!=null&&!r.hasOwnProperty(j)&&je(t,n,j,null,r,q);for(xt in r)q=r[xt],rt=a[xt],!r.hasOwnProperty(xt)||q===rt||q==null&&rt==null||je(t,n,xt,q,r,rt)}function x_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Jy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,g=u.initiatorType,A=u.duration;if(f&&A&&x_(g)){for(g=0,A=u.responseEnd,r+=1;r<a.length;r++){var I=a[r],Q=I.startTime;if(Q>A)break;var lt=I.transferSize,xt=I.initiatorType;lt&&x_(xt)&&(I=I.responseEnd,g+=lt*(I<A?1:(A-Q)/(I-Q)))}if(--r,n+=8*(f+g)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Xd=null,kd=null;function Jo(t){return t.nodeType===9?t:t.ownerDocument}function y_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function M_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function E_(t,n,a,r){return a=Jo(a).createElement(t),a[b]=r,a[F]=n,Nn(a,t,n),be(a),a}function Wd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var qd=null;function $y(){var t=window.event;return t&&t.type==="popstate"?t===qd?!1:(qd=t,!0):(qd=null,!1)}var Yd=typeof setTimeout=="function"?setTimeout:void 0,tM=typeof clearTimeout=="function"?clearTimeout:void 0,T_=typeof Promise=="function"?Promise:void 0,b_=typeof requestAnimationFrame=="function"?requestAnimationFrame:Yd,eM=typeof queueMicrotask=="function"?queueMicrotask:typeof T_<"u"?function(t){return T_.resolve(null).then(t).catch(nM)}:Yd;function nM(t){setTimeout(function(){throw t})}function rs(t){return t==="head"}function A_(t,n){var a=n,r=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(u),Gr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")eh(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,eh(a);for(var f=a.firstChild;f;){var g=f.nextSibling,A=f.nodeName;f[Ot]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&eh(t.ownerDocument.body);a=u}while(a);Gr(n)}function R_(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function C_(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var r=1;else for(var u=r=0;u<n.length;u++){var f=n[u];0<f.width&&0<f.height&&r++}r===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function w_(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function iM(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function Zd(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return iM(n,a,t)}function aM(t){return t.documentElement.clientHeight}function sM(t){this.addEventListener("load",t),this.addEventListener("error",t)}function rM(t,n,a,r,u,f,g,A,I){var Q=n.nodeType===9?n:n.ownerDocument;try{var lt=Q.startViewTransition({update:function(){var q=Q.defaultView,rt=q.navigation&&q.navigation.transition,Pt=Q.fonts.status;r();var Jt=[];if(Pt==="loaded"&&(aM(Q),Q.fonts.status==="loading"&&Jt.push(Q.fonts.ready)),Pt=Jt.length,t!==null)for(var Se=t.suspenseyImages,j=0,H=0;H<Se.length;H++){var nt=Se[H];if(!nt.complete){var St=nt.getBoundingClientRect();if(0<St.bottom&&0<St.right&&St.top<q.innerHeight&&St.left<q.innerWidth){if(j+=j_(nt),j>Hu){Jt.length=Pt;break}nt=new Promise(sM.bind(nt)),Jt.push(nt)}}}if(0<Jt.length)return q=Promise.race([Promise.all(Jt),new Promise(function(Yt){return setTimeout(Yt,500)})]).then(u,u),(rt?Promise.allSettled([rt.finished,q]):q).then(f,f);if(u(),rt)return rt.finished.then(f,f);f()},types:a});Q.__reactViewTransition=lt;var xt=[];return lt.ready.then(function(){for(var q=Q.documentElement.getAnimations({subtree:!0}),rt=0;rt<q.length;rt++){var Pt=q[rt],Jt=Pt.effect,Se=Jt.pseudoElement;if(Se!=null&&Se.startsWith("::view-transition")){xt.push(Pt),Pt=Jt.getKeyframes();for(var j=Se=void 0,H=!0,nt=0;nt<Pt.length;nt++){var St=Pt[nt],Yt=St.width;if(Se===void 0)Se=Yt;else if(Se!==Yt){H=!1;break}if(Yt=St.height,j===void 0)j=Yt;else if(j!==Yt){H=!1;break}delete St.width,delete St.height,St.transform==="none"&&delete St.transform}H&&Se!==void 0&&j!==void 0&&(Jt.setKeyframes(Pt),H=getComputedStyle(Jt.target,Jt.pseudoElement),H.width!==Se||H.height!==j)&&(H=Pt[0],H.width=Se,H.height=j,H=Pt[Pt.length-1],H.width=Se,H.height=j,Jt.setKeyframes(Pt))}}g()},function(q){Q.__reactViewTransition===lt&&(Q.__reactViewTransition=null);try{typeof q=="object"&&q!==null&&q.name==="InvalidStateError"&&(q.message==="View transition was skipped because document visibility state is hidden."||q.message==="Skipping view transition because document visibility state has become hidden."||q.message==="Skipping view transition because viewport size changed."||q.message==="Transition was aborted because of invalid state")&&(q=null),q!==null&&I(q)}finally{r(),u(),g()}}),lt.finished.finally(function(){for(var q=0;q<xt.length;q++)xt[q].cancel();Q.__reactViewTransition===lt&&(Q.__reactViewTransition=null),A()}),lt}catch{return r(),u(),g(),null}}function Vs(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Vs.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:P({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Vs.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),r=[],u=0;u<a.length;u++){var f=a[u].effect;f!==null&&f.target===t&&f.pseudoElement===n&&r.push(a[u])}return r},Vs.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function D_(t){return{name:t,group:new Vs("group",t),imagePair:new Vs("image-pair",t),old:new Vs("old",t),new:new Vs("new",t)}}function li(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}li.prototype.addEventListener=function(t,n,a){var r=null,u=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var f=this._eventListeners;if(U_(f,t,n,a)===-1){var g=this,A=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(A=function(I){g.removeEventListener(t,n,a),typeof n=="function"?n.call(this,I):n.handleEvent(I)}),r!==null&&(u=g.removeEventListener.bind(g,t,n,a),r.addEventListener("abort",u,{once:!0}),u=r.removeEventListener.bind(r,"abort",u)),r=Pr(a),f.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:A,cleanup:u}),_(this._fragmentFiber.child,!1,oM,t,A,r)}this._eventListeners=f}};function oM(t,n,a,r){return y(t).addEventListener(n,a,r),!1}li.prototype.removeEventListener=function(t,n,a){var r=this._eventListeners;if(r!==null&&(n=U_(r,t,n,a),n!==-1)){var u=r[n];a=u.attachedListener;var f=u.cleanup;u=Pr(u.optionsOrUseCapture),_(this._fragmentFiber.child,!1,lM,t,a,u),r.splice(n,1),f!==null&&f()}};function lM(t,n,a,r){return y(t).removeEventListener(n,a,r),!1}function Pr(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function N_(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function U_(t,n,a,r){if(t.length===0)return-1;r=N_(r);for(var u=0;u<t.length;u++){var f=t[u];if(f.type===n&&f.listener===a&&N_(f.optionsOrUseCapture)===r)return u}return-1}li.prototype.dispatchEvent=function(t){var n=v(this._fragmentFiber);if(n===null)return!0;n=y(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var u=0;u<a.length;u++){var f=a[u];r.addEventListener(f.type,f.attachedListener,Pr(f.optionsOrUseCapture))}if(n.appendChild(r),t=r.dispatchEvent(t),a)for(u=0;u<a.length;u++)f=a[u],r.removeEventListener(f.type,f.attachedListener,Pr(f.optionsOrUseCapture));return n.removeChild(r),t}return n.dispatchEvent(t)},li.prototype.focus=function(t){_(this._fragmentFiber.child,!0,L_,t,void 0,void 0)};function L_(t,n){return t.tag===6?!1:(t=y(t),xM(t,n))}li.prototype.focusLast=function(t){var n=[];_(this._fragmentFiber.child,!0,Kd,n,void 0,void 0);for(var a=n.length-1;0<=a&&!L_(n[a],t);a--);};function Kd(t,n){return n.push(t),!1}li.prototype.blur=function(){var t=v(this._fragmentFiber);t!==null&&(t=y(t),t=Jo(t).activeElement,t!==null&&_(this._fragmentFiber.child,!1,uM,t,void 0,void 0))};function uM(t,n){return t.tag===6?!1:(t=y(t),t===n||t.contains(n)?(n.blur(),!0):!1)}li.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),_(this._fragmentFiber.child,!1,cM,t,void 0,void 0)};function cM(t,n){return t.tag===6||(t=y(t),n.observe(t)),!1}li.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),_(this._fragmentFiber.child,!1,fM,t,void 0,void 0);for(var a=n=0;a<Di.length;a++){var r=Di[a];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):Di[n++]=r}Di.length=n}};function fM(t,n){return t.tag===6||(t=y(t),n.unobserve(t)),!1}var Di=[],jd=!1;function dM(t,n,a){Di.push({fragmentInstance:t,observer:n,instance:a}),jd||(jd=!0,yM(function(){jd=!1;var r=Di;Di=[];for(var u=0;u<r.length;u++){var f=r[u];f.observer.unobserve(f.instance)}}))}li.prototype.getClientRects=function(){var t=[];return _(this._fragmentFiber.child,!1,hM,t,void 0,void 0),t};function hM(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=y(t),n.push.apply(n,t.getClientRects());return!1}li.prototype.getRootNode=function(t){var n=v(this._fragmentFiber);return n===null?this:y(n).getRootNode(t)},li.prototype.compareDocumentPosition=function(t){var n=v(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];_(this._fragmentFiber.child,!1,Kd,a,void 0,void 0);var r=y(n);if(a.length===0){if(a=r,E(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var u=r=a.compareDocumentPosition(t);return a===t?u=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=R(n)[1],a===null?u=Node.DOCUMENT_POSITION_PRECEDING:(t=y(a).compareDocumentPosition(t),u=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),u|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=y(a[0]),u=y(a[a.length-1]);var f=E(this._fragmentFiber)?n.parentElement:r;if(f==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=f.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,f=f.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_CONTAINED_BY;var g=n.compareDocumentPosition(t),A=u.compareDocumentPosition(t),I=g&Node.DOCUMENT_POSITION_CONTAINED_BY||A&Node.DOCUMENT_POSITION_CONTAINED_BY;return A=r&&f&&g&Node.DOCUMENT_POSITION_FOLLOWING&&A&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===t||f&&u===t||I||A?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===t||!f&&u===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:g,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||pM(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function pM(t,n,a,r,u){var f=re(u);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!f)t:{for(;f!==null;){if(f.tag===7&&(f===n||f.alternate===n)){a=!0;break t}f=f.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(f===null)return f=u.ownerDocument,u===f||u===f.documentElement||u===f.body;t:{for(f=n,n=v(n);f!==null;){if(!(f.tag!==5&&f.tag!==3&&f.tag!==27||f!==n&&f.alternate!==n)){f=!0;break t}f=f.return}f=!1}return f}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!f)&&!(n=f===a)&&(n=U(a,f,N),n===null?n=!1:(_(n,!0,G,f,a),f=x,x=null,n=f!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!f)&&!(n=f===r)&&(n=U(r,f,N),n===null?n=!1:(_(n,!0,w,f,r),f=x,L=x=null,n=f!==null)),n):!1}function O_(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}li.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var n=[];_(this._fragmentFiber.child,!1,Kd,n,void 0,void 0);var a=t!==!1;if(n.length===0){var r=R(this._fragmentFiber);if(r=a?r[1]||r[0]||v(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=y(r),O_(t,a);return}if(r=y(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var u=n[r];u.tag===6?(u=y(u),O_(u,a)):y(u).scrollIntoView(t),r+=a?-1:1}};function mM(t,n){return t=y(t),P_(t,n),!1}function P_(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function I_(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r];t.addEventListener(u.type,u.attachedListener,Pr(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){for(var g=0,A=0;A<Di.length;A++){var I=Di[A];(I.fragmentInstance!==n||I.observer!==f||I.instance!==t)&&(Di[g++]=I)}Di.length=g,f.observe(t)}),P_(t,n))}function gM(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r];t.removeEventListener(u.type,u.attachedListener,Pr(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){typeof f.rootMargin=="string"?dM(n,f,t):f.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function Qd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Qd(a),Qt(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function _M(t,n,a,r){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Ot])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=yi(t.nextSibling),t===null)break}return null}function vM(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=yi(t.nextSibling),t===null))return null;return t}function z_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=yi(t.nextSibling),t===null))return null;return t}function Jd(t){return t.data==="$?"||t.data==="$~"}function $d(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function SM(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function yi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var th=null;function B_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return yi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function F_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function xM(t,n){function a(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return r}function yM(t){b_(function(){b_(function(n){return t(n)})})}function H_(t,n,a){switch(n=Jo(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function G_(t,n,a){for(var r in a){var u=a[r];a.hasOwnProperty(r)&&u!=null&&je(t,n,r,null,jy,u)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Xi&&(t.onclick=null),Qt(t)}function eh(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Qt(t)}var Mi=new Map,V_=new Set;function $o(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var ba=Ct.d;Ct.d={f:MM,r:EM,D:TM,C:bM,L:AM,m:RM,X:wM,S:CM,M:DM};function MM(){var t=ba.f(),n=Nu();return t||n}function EM(t){var n=me(t);n!==null&&n.tag===5&&n.type==="form"?k0(n):ba.r(t)}var Ir=typeof document>"u"?null:document;function X_(t,n,a){var r=Ir;if(r&&typeof n=="string"&&n){var u=pi(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),V_.has(u)||(V_.add(u),t={rel:t,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),Nn(n,"link",t),be(n),r.head.appendChild(n)))}}function TM(t){ba.D(t),X_("dns-prefetch",t,null)}function bM(t,n){ba.C(t,n),X_("preconnect",t,n)}function AM(t,n,a){ba.L(t,n,a);var r=Ir;if(r&&t&&n){var u='link[rel="preload"][as="'+pi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+pi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+pi(a.imageSizes)+'"]')):u+='[href="'+pi(t)+'"]';var f=u;switch(n){case"style":f=zr(t);break;case"script":f=Br(t)}if(!(Mi.has(f)||(t=P({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Mi.set(f,t),r.querySelector(u)!==null||n==="style"&&r.querySelector(tl(f))||n==="script"&&r.querySelector(el(f))))){var g=r.createElement("link");Nn(g,"link",t),n==="style"&&(g[Kt]=!0,g.onload=g.onerror=function(){Je(g)}),be(g),r.head.appendChild(g)}}}function RM(t,n){ba.m(t,n);var a=Ir;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+pi(r)+'"][href="'+pi(t)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Br(t)}if(!Mi.has(f)&&(t=P({rel:"modulepreload",href:t},n),Mi.set(f,t),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(el(f)))return}r=a.createElement("link"),Nn(r,"link",t),be(r),a.head.appendChild(r)}}}function CM(t,n,a){ba.S(t,n,a);var r=Ir;if(r&&t){var u=Ce(r).hoistableStyles,f=zr(t);n=n||"default";var g=u.get(f);if(!g){var A={loading:0,preload:null};if(g=r.querySelector(tl(f)))A.loading=5;else{t=P({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Mi.get(f))&&nh(t,a);var I=g=r.createElement("link");be(I),Nn(I,"link",t),I._p=new Promise(function(Q,lt){I.onload=Q,I.onerror=lt}),I.addEventListener("load",function(){A.loading|=1}),I.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Bu(g,n,r)}g={type:"stylesheet",instance:g,count:1,state:A},u.set(f,g)}}}function wM(t,n){ba.X(t,n);var a=Ir;if(a&&t){var r=Ce(a).hoistableScripts,u=Br(t),f=r.get(u);f||(f=a.querySelector(el(u)),f||(t=P({src:t,async:!0},n),(n=Mi.get(u))&&ih(t,n),f=a.createElement("script"),be(f),Nn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function DM(t,n){ba.M(t,n);var a=Ir;if(a&&t){var r=Ce(a).hoistableScripts,u=Br(t),f=r.get(u);f||(f=a.querySelector(el(u)),f||(t=P({src:t,async:!0,type:"module"},n),(n=Mi.get(u))&&ih(t,n),f=a.createElement("script"),be(f),Nn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function k_(t,n,a,r){var u=(u=ie.current)?$o(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=zr(a.href),n=Ce(u).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=zr(a.href);var f=Ce(u).hoistableStyles,g=f.get(t);if(g||(u=u.ownerDocument||u,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=u.querySelector(tl(t)))?f._p||(g.instance=f,g.state.loading=5):(f=Mi.get(t),f||(f={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Mi.set(t,f)),NM(u,t,f,g.state))),n&&r===null)throw Error(s(528,""));return g}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Br(a),n=Ce(u).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function zr(t){return'href="'+pi(t)+'"'}function tl(t){return'link[rel="stylesheet"]['+t+"]"}function W_(t){return P({},t,{"data-precedence":t.precedence,precedence:null})}function NM(t,n,a,r){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Kt]!==!0){r.loading=1;return}}else n=t.createElement("link"),n[Kt]=!0,n.onload=n.onerror=Je.bind(null,n),Nn(n,"link",a),be(n),t.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function Br(t){return'[src="'+pi(t)+'"]'}function el(t){return"script[async]"+t}function q_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+pi(a.href)+'"]');if(r)return n.instance=r,be(r),r;var u=P({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),be(r),Nn(r,"style",u),Bu(r,a.precedence,t),n.instance=r;case"stylesheet":u=zr(a.href);var f=t.querySelector(tl(u));if(f)return n.state.loading|=4,n.instance=f,be(f),f;r=W_(a),(u=Mi.get(u))&&nh(r,u),f=(t.ownerDocument||t).createElement("link"),be(f);var g=f;return g._p=new Promise(function(A,I){g.onload=A,g.onerror=I}),Nn(f,"link",r),n.state.loading|=4,Bu(f,a.precedence,t),n.instance=f;case"script":return f=Br(a.src),(u=t.querySelector(el(f)))?(n.instance=u,be(u),u):(r=a,(u=Mi.get(f))&&(r=P({},a),ih(r,u)),t=t.ownerDocument||t,u=t.createElement("script"),be(u),Nn(u,"link",r),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Bu(r,a.precedence,t));return n.instance}function Bu(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,g=0;g<r.length;g++){var A=r[g];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function nh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function ih(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Fu=null;function Y_(t,n,a){if(Fu===null){var r=new Map,u=Fu=new Map;u.set(a,r)}else u=Fu,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Ot]||f[b]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var A=r.get(g);A?A.push(f):r.set(g,[f])}}return r}function ah(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function UM(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Z_(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function K_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function j_(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Q_(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=j_(n),t.suspenseyImages.push(n)),t=PM.bind(t),n.decode().then(t,t))}function LM(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=zr(r.href),f=n.querySelector(tl(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=nl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,be(f);return}f=n.ownerDocument||n,r=W_(r),(u=Mi.get(u))&&nh(r,u),f=f.createElement("link"),be(f);var g=f;g._p=new Promise(function(A,I){g.onload=A,g.onerror=I}),Nn(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=nl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Hu=0;function OM(t,n){return t.stylesheets&&t.count===0&&Vu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&Vu(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Hu===0&&(Hu=62500*Jy());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Vu(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Hu?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function J_(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Vu(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function nl(){this.count--,J_(this)}function PM(){this.imgCount--,J_(this)}var Gu=null;function Vu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Gu=new Map,n.forEach(IM,t),Gu=null,nl.call(t))}function IM(t,n){if(!(n.state.loading&4)){var a=Gu.get(t);if(a)var r=a.get(null);else{a=new Map,Gu.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var g=u[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),r=g)}r&&a.set(null,r)}u=n.instance,g=u.getAttribute("data-precedence"),f=a.get(g)||r,f===r&&a.set(null,u),a.set(g,u),this.count++,r=nl.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Fr={$$typeof:tt,Provider:null,Consumer:null,_currentValue:He,_currentValue2:He,_threadCount:0};function zM(t,n,a,r,u,f,g,A,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=nr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nr(0),this.hiddenUpdates=nr(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.transitionTypes=null,this.incompleteTransitions=new Map}function $_(t,n,a,r,u,f,g,A,I,Q,lt,xt){return t=new zM(t,n,a,g,I,Q,lt,xt,A),n=1,f===!0&&(n|=24),f=Wn(3,null,null,n),t.current=f,f.stateNode=t,n=Sf(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Ef(f),t}function tv(t){return t?(t=fr,t):fr}function ev(t,n,a,r,u,f){u=tv(u),r.context===null?r.context=u:r.pendingContext=u,r=Za(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Ka(t,r,n),a!==null&&(Kn(a,t,n),Lo(a,t,n))}function nv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function sh(t,n){nv(t,n),(t=t.alternate)&&nv(t,n)}function iv(t){if(t.tag===13||t.tag===31){var n=bs(t,67108864);n!==null&&Kn(n,t,67108864),sh(t,67108864)}}function av(t){if(t.tag===13||t.tag===31){var n=oi();n=go(n);var a=bs(t,n);a!==null&&Kn(a,t,n),sh(t,n)}}var Hr=!0;function BM(t,n,a,r){var u=mt.T;mt.T=null;var f=Ct.p;try{Ct.p=2,rh(t,n,a,r)}finally{Ct.p=f,mt.T=u}}function FM(t,n,a,r){var u=mt.T;mt.T=null;var f=Ct.p;try{Ct.p=8,rh(t,n,a,r)}finally{Ct.p=f,mt.T=u}}function rh(t,n,a,r){if(Hr){var u=oh(r);if(u===null)Gd(t,n,r,Xu,a),rv(t,r);else if(GM(u,t,n,a,r))r.stopPropagation();else if(rv(t,r),n&4&&-1<HM.indexOf(t)){for(;u!==null;){var f=me(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=fa(f.pendingLanes);if(g!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;g;){var I=1<<31-pe(g);A.entanglements[1]|=I,g&=~I}$i(f),(Xe&6)===0&&(Cu=kt()+500,Ko(0))}}break;case 31:case 13:A=bs(f,2),A!==null&&Kn(A,f,2),Nu(),sh(f,2)}if(f=oh(r),f===null&&Gd(t,n,r,Xu,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else Gd(t,n,r,null,a)}}function oh(t){return t=Wc(t),lh(t)}var Xu=null;function lh(t){if(Xu=null,t=re(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Xu=t,null}function sv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ae()){case he:return 2;case X:return 8;case Dt:case yt:return 32;case Lt:return 268435456;default:return 32}default:return 32}}var uh=!1,os=null,ls=null,us=null,il=new Map,al=new Map,cs=[],HM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function rv(t,n){switch(t){case"focusin":case"focusout":os=null;break;case"dragenter":case"dragleave":ls=null;break;case"mouseover":case"mouseout":us=null;break;case"pointerover":case"pointerout":il.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":al.delete(n.pointerId)}}function sl(t,n,a,r,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=me(n),n!==null&&iv(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function GM(t,n,a,r,u){switch(n){case"focusin":return os=sl(os,t,n,a,r,u),!0;case"dragenter":return ls=sl(ls,t,n,a,r,u),!0;case"mouseover":return us=sl(us,t,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return il.set(f,sl(il.get(f)||null,t,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,al.set(f,sl(al.get(f)||null,t,n,a,r,u)),!0}return!1}function ov(t){var n=re(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,wl(t.priority,function(){av(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,wl(t.priority,function(){av(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ku(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=oh(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);kc=r,a.target.dispatchEvent(r),kc=null}else return n=me(a),n!==null&&iv(n),t.blockedOn=a,!1;n.shift()}return!0}function lv(t,n,a){ku(t)&&a.delete(n)}function VM(){uh=!1,os!==null&&ku(os)&&(os=null),ls!==null&&ku(ls)&&(ls=null),us!==null&&ku(us)&&(us=null),il.forEach(lv),al.forEach(lv)}function Wu(t,n){t.blockedOn===n&&(t.blockedOn=null,uh||(uh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,VM)))}var qu=null;function uv(t){qu!==t&&(qu=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){qu===t&&(qu=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],u=t[n+2];if(typeof r!="function"){if(lh(r||a)===null)continue;break}var f=me(a);f!==null&&(t.splice(n,3),n-=3,kf(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function Gr(t){function n(I){return Wu(I,t)}os!==null&&Wu(os,t),ls!==null&&Wu(ls,t),us!==null&&Wu(us,t),il.forEach(n),al.forEach(n);for(var a=0;a<cs.length;a++){var r=cs[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<cs.length&&(a=cs[0],a.blockedOn===null);)ov(a),a.blockedOn===null&&cs.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],g=u[F]||null;if(typeof f=="function")g||uv(a);else if(g){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,g=f[F]||null)A=g.formAction;else if(lh(u)!==null)continue}else A=g.action;typeof A=="function"?a[r+1]=A:(a.splice(r,3),r-=3),uv(a)}}}function cv(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return u=g})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function ch(t){this._internalRoot=t}Yu.prototype.render=ch.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=oi();ev(a,r,t,n,null,null)},Yu.prototype.unmount=ch.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;ev(t.current,2,null,t,null,null),Nu(),n[dt]=null}};function Yu(t){this._internalRoot=t}Yu.prototype.unstable_scheduleHydration=function(t){if(t){var n=Cl();t={blockedOn:null,target:t,priority:n};for(var a=0;a<cs.length&&n!==0&&n<cs[a].priority;a++);cs.splice(a,0,t),a===0&&ov(t)}};var fv=e.version;if(fv!=="19.3.0")throw Error(s(527,fv,"19.3.0"));Ct.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=m(n),t=t!==null?S(t):null,t=t===null?null:t.stateNode,t};var XM={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:mt,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zu.isDisabled&&Zu.supportsFiber)try{$t=Zu.inject(XM),Vt=Zu}catch{}}return ol.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",u=tg,f=eg,g=ng;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=$_(t,1,!1,null,null,a,r,null,u,f,g,cv),t[dt]=n.current,Hd(t),new ch(n)},ol.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,u="",f=tg,g=eg,A=ng,I=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=$_(t,1,!0,n,a??null,r,u,I,f,g,A,cv),n.context=tv(null),a=n.current,r=oi(),r=go(r),u=Za(r),u.callback=null,Ka(a,u,r),a=r,n.current.lanes=a,Gi(n,a),$i(n),t[dt]=n.current,Hd(t),new Yu(n)},ol.version="19.3.0",ol}var yv;function $M(){if(yv)return hh.exports;yv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),hh.exports=JM(),hh.exports}var tE=$M();const eE=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),nE=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,s)=>s?s.toUpperCase():i.toLowerCase()),Mv=o=>{const e=nE(o);return e.charAt(0).toUpperCase()+e.slice(1)},AS=(...o)=>o.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim(),iE=o=>{for(const e in o)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};var aE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const sE=Ye.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:d,...h},p)=>Ye.createElement("svg",{ref:p,...aE,width:e,height:e,stroke:o,strokeWidth:s?Number(i)*24/Number(e):i,className:AS("lucide",l),...!c&&!iE(h)&&{"aria-hidden":"true"},...h},[...d.map(([m,S])=>Ye.createElement(m,S)),...Array.isArray(c)?c:[c]]));const ca=(o,e)=>{const i=Ye.forwardRef(({className:s,...l},c)=>Ye.createElement(sE,{ref:c,iconNode:e,className:AS(`lucide-${eE(Mv(o))}`,`lucide-${o}`,s),...l}));return i.displayName=Mv(o),i};const rE=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],oE=ca("activity",rE);const lE=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]],Ev=ca("brain",lE);const uE=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],cE=ca("flask-conical",uE);const fE=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],dE=ca("gauge",fE);const hE=[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]],pE=ca("pause",hE);const mE=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],gE=ca("play",mE);const _E=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],vE=ca("rotate-ccw",_E);const SE=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],xE=ca("save",SE);const yE=[["line",{x1:"6",x2:"6",y1:"4",y2:"20",key:"fy8qot"}],["polygon",{points:"10,4 20,12 10,20",key:"1mc1pf"}]],ME=ca("step-forward",yE);const EE=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],$h=ca("zap",EE);async function _h(o){try{const e=await fetch(o);return e.ok?await e.json():null}catch{return null}}async function ll(o,e){try{const i=await fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e??{})});return i.ok?await i.json():null}catch{return null}}const Aa={state:()=>_h("/api/state"),report:()=>_h("/api/report"),subset:()=>_h("/public/data/connectome-subset.json"),flyStep:()=>ll("/api/fly_step",{}),humanMove:(o,e)=>ll("/api/human_move",{cell:o,dir:e}),newGame:(o=!1)=>ll("/api/new_game",o?{from_scratch:!0}:{}),turbo:(o=200)=>ll("/api/turbo",{episodes:o}),save:()=>ll("/api/save",{})},so=[{c:"#ff6b6b",s:"circle"},{c:"#ffb347",s:"square"},{c:"#7cff6b",s:"diamond"},{c:"#56d8ff",s:"hex"},{c:"#c792ea",s:"star"},{c:"#ff5fd2",s:"drop"}];function vh(o,e){const i=parseInt(o.slice(1),16),s=Math.max(0,Math.min(255,(i>>16)+e)),l=Math.max(0,Math.min(255,(i>>8&255)+e)),c=Math.max(0,Math.min(255,(i&255)+e));return`rgb(${s},${l},${c})`}function Sh(o,e,i,s){if(o.fillStyle=s,o.beginPath(),e==="circle")o.arc(0,0,i,0,7);else if(e==="square")o.roundRect?o.roundRect(-i,-i,i*2,i*2,i/3):o.rect(-i,-i,i*2,i*2);else if(e==="drop")o.arc(0,2,Math.max(1,i-1),0,7),o.moveTo(-i+4,0),o.lineTo(i-4,0),o.lineTo(0,-i-4),o.closePath();else{const l=[];if(e==="diamond")l.push([0,-i],[i,0],[0,i],[-i,0]);else if(e==="hex")for(let c=0;c<6;c++)l.push([i*Math.cos(Math.PI/3*c),i*Math.sin(Math.PI/3*c)]);else for(let c=0;c<10;c++){const d=c%2?i*.45:i,h=-Math.PI/2+c*Math.PI/5;l.push([d*Math.cos(h),d*Math.sin(h)])}l.forEach((c,d)=>d?o.lineTo(c[0],c[1]):o.moveTo(c[0],c[1])),o.closePath()}o.fill()}function TE(o,e,i,s,l,c,d=1){s=Math.max(3,s*d),o.save(),o.translate(e,i),o.fillStyle="rgba(20,8,30,0.35)",o.beginPath(),o.ellipse(0,s*.85,s*.75,s*.26,0,0,7),o.fill(),Sh(o,l,s,vh(c,-70)),o.save(),o.translate(0,-1),Sh(o,l,s*.86,c),o.restore(),o.save(),o.translate(-s*.06,-s*.16),o.globalAlpha=.85,Sh(o,l,s*.62,vh(c,80)),o.restore(),l!=="star"&&(o.save(),o.globalAlpha=.45,o.fillStyle=vh(c,-70),o.beginPath(),o.ellipse(0,s*.45,s*.5,s*.27,0,0,7),o.fill(),o.restore()),o.fillStyle="rgba(255,255,255,0.92)",o.beginPath(),o.arc(-s*.18,-s*.24,Math.max(1,s*.15),0,7),o.fill(),o.fillStyle="rgba(255,255,255,0.6)",o.beginPath(),o.arc(-s*.3,-s*.05,Math.max(1,s*.07),0,7),o.fill(),o.restore()}function bE(o,e,i,s,l,c){o.save(),o.globalAlpha=.6,o.fillStyle="#fff",o.beginPath(),o.ellipse(e-32,i-34,23,14,-.3,0,7),o.fill(),o.beginPath(),o.ellipse(e+32,i-34,23,14,.3,0,7),o.fill(),o.restore(),o.fillStyle="#46465a",o.beginPath(),o.ellipse(e,i,26,24,0,0,7),o.fill(),o.fillStyle="#5f5f75",o.beginPath(),o.ellipse(e,i+4,18,16,0,0,7),o.fill();for(const d of[-13,13])o.fillStyle="#fff",o.beginPath(),o.arc(e+d,i-6,11,0,7),o.fill(),c?(o.strokeStyle="#46465a",o.lineWidth=3,o.beginPath(),o.moveTo(e+d-9,i-6),o.lineTo(e+d+9,i-6),o.stroke()):(o.fillStyle="#1e0a28",o.beginPath(),o.arc(e+d+s,i-6+l,5,0,7),o.fill(),o.fillStyle="#fff",o.beginPath(),o.arc(e+d+s+1,i-7+l,2,0,7),o.fill());o.strokeStyle="#3a1e5a",o.lineWidth=2,o.beginPath(),o.arc(e,i+2,10,Math.PI*1.15,Math.PI*1.85),o.stroke()}const le=62,Ku={up:[-1,0],down:[1,0],left:[0,-1],right:[0,1]};class AE{snap=null;subset=null;report={};status="connecting…";listeners=new Set;phase="idle";phaseT=0;pending=null;pendingFinal=null;steps=[];stepIdx=0;falls={};pops=new Set;matched=new Set;floats=[];particles=[];sel=null;rejectCells=[];rejectT=99;say="…";happy=.5;sayT=99;aimT=0;overT=0;manual=!1;playing=!0;speedMul=1;busy=!1;trailCells=[];trailT=99;subscribe=e=>(this.listeners.add(e),()=>{this.listeners.delete(e)});emit(){try{this.listeners.forEach(e=>e())}catch{}}setStatus(e){this.status=e,this.emit()}get board(){return this.snap?.board??null}localSwap(e,i){try{const s=this.snap?.board;if(!s)return;const l=Math.floor(e/8),c=e%8,d=Ku[i]||[0,0],h=l+d[0],p=c+d[1];if(h<0||h>7||p<0||p>7)return;const m=s[l][c];s[l][c]=s[h][p],s[h][p]=m}catch{}}applyPub(e){e&&(this.snap=Object.assign(this.snap||{},e),e.board&&(this.snap.board=e.board),this.emit())}async boot(){this.subset=await Aa.subset(),this.report=await Aa.report()||{};const e=await Aa.state();if(!e){this.setStatus("backend offline — run: ./.venv/bin/python -m backend.server");return}this.applyPub(e),this.setStatus(`brain: ${e.prov} · updates ${e.updates} · saved@${e.saved??0} (postgres, auto)`)}async flyStep(){if(!this.busy){this.busy=!0;try{const e=await Aa.flyStep();if(!e){this.setStatus("backend offline");return}if(!e.ok&&e.reason!=="no-match"){e.reason==="game-over"&&this.snap&&(this.snap.over=!0),this.emit();return}if(this.pendingFinal=e.board||null,delete e.board,this.applyPub(e),e.valid){const i=e.decision;this.pending=i,this.steps=e.steps||[],this.stepIdx=0,this.phase="aim",this.phaseT=0}else{this.pending=e.decision,this.steps=[],this.stepIdx=0,e.reshuffled&&this.pendingFinal&&this.snap&&(this.snap.board=this.pendingFinal);const i=Ku[this.pending.dir]||[0,0],s=Math.floor(this.pending.cell/8),l=this.pending.cell%8;this.floats.push({x:40+(2*l+i[1])/2*le+le/2,y:130+(2*s+i[0])/2*le+le/2,txt:"×",t:0,big:!0,col:"#ff5f5f"}),this.rejectCells=[[s,l],[s+i[0],l+i[1]]],this.rejectT=0,this.say="Hmm… no match",this.happy=.1,this.sayT=0,this.phase="aim",this.phaseT=0}e.reshuffled&&(this.say="no moves — shuffled!",this.happy=.3,this.sayT=0),e.over&&this.snap&&(this.snap.over=!0,this.overT=0,this.say=`game over · ${e.score} pts`,this.happy=.5,this.sayT=0),this.emit()}finally{this.busy=!1}}}async humanMove(e,i){if(!(this.busy||this.phase!=="idle")){this.busy=!0;try{const s=await Aa.humanMove(e,i);if(!s){this.setStatus("backend offline");return}if(!s.ok&&s.reason!=="no-match")return;if(this.pendingFinal=s.board||null,delete s.board,this.applyPub(s),s.valid)this.localSwap(e,i),this.pending={cell:e,dir:i},this.steps=s.steps||[],this.stepIdx=0,this.phase="swap",this.phaseT=0;else{this.pending={cell:e,dir:i},s.reshuffled&&this.pendingFinal&&this.snap&&(this.snap.board=this.pendingFinal);const l=Ku[i]||[0,0],c=Math.floor(e/8),d=e%8;this.floats.push({x:40+(2*d+l[1])/2*le+le/2,y:130+(2*c+l[0])/2*le+le/2,txt:"×",t:0,big:!0,col:"#ff5f5f"}),this.rejectCells=[[c,d],[c+l[0],d+l[1]]],this.rejectT=0,this.say="Hmm… no match",this.happy=.1,this.sayT=0,this.phase="swapback",this.phaseT=0}s.reshuffled&&(this.say="no moves — shuffled!",this.sayT=0),s.over&&this.snap&&(this.snap.over=!0,this.overT=0),this.emit()}finally{this.busy=!1}}}async newGame(e=!1){if(!this.busy){this.busy=!0;try{const i=await Aa.newGame(e);if(!i){this.setStatus("backend offline");return}this.applyPub(i),this.pendingFinal=null,this.phase="idle",this.phaseT=0,this.steps=[],this.falls={},this.matched=new Set,this.say=e?"blank brain — learning live":"new grid — brain keeps learning",this.happy=.8,this.sayT=0,this.setStatus(`brain: ${this.snap?.prov} · updates ${this.snap?.updates}`)}finally{this.busy=!1}}}async turbo(){const e=await Aa.turbo(200);e&&e.ok?this.setStatus("TURBO başladı · 200 episode · ~1000 hamle/sn"):e&&e.reason==="already-running"?this.setStatus("TURBO zaten koşuyor"):this.setStatus("turbo failed")}async save(){const e=await Aa.save();this.setStatus(e&&e.ok?`brain saved · updates ${e.updates}`:"save failed")}clickCell(e,i){if(!this.manual||this.phase!=="idle"||!this.snap||this.snap.over)return;if(!this.sel){this.sel=[e,i];return}const[s,l]=this.sel;if(this.sel=null,s===e&&l===i)return;if(Math.abs(s-e)+Math.abs(l-i)!==1){this.sel=[e,i];return}const c=e===s-1?"up":e===s+1?"down":i===l-1?"left":"right";this.humanMove(s*8+l,c)}update(e){let i=!(e>=0)||e>.25?.025:e;i*=this.speedMul;const s=this.snap;this.sayT+=i,s&&(s.dopa=Math.max(0,(s.dopa||0)-i*26));for(const l of this.floats)l.t+=i,l.y-=i*40;this.floats=this.floats.filter(l=>l.t<1.2);for(const l of this.particles)l.t+=i,l.x+=l.vx*i,l.y+=l.vy*i,l.vy+=900*i;if(this.particles=this.particles.filter(l=>l.t<l.life),this.rejectT+=i,this.rejectT>1.6&&(this.rejectCells=[]),this.trailT+=i,this.trailT>1.4&&(this.trailCells=[]),this.phase==="idle"&&s&&!s.over)this.playing&&!this.manual&&(this.aimT+=i,this.aimT>.55&&(this.aimT=0,this.flyStep()));else if(this.phase==="aim")this.phaseT+=i,this.phaseT>.6&&(this.pending&&this.steps.length>0&&this.localSwap(this.pending.cell,this.pending.dir),this.phase="swap",this.phaseT=0);else if(this.phase==="swap"){if(this.phaseT+=i,this.phaseT>.22)if(this.steps.length){if(this.stepIdx=0,this.phase="flash",this.phaseT=0,this.matched=new Set(this.steps[0].matched.map(([l,c])=>l*8+c)),this.pending){const l=Math.floor(this.pending.cell/8),c=this.pending.cell%8,d=Ku[this.pending.dir]||[0,0];this.trailCells=[[l,c],[l+d[0],c+d[1]]],this.trailT=0}}else this.phase="swapback",this.phaseT=0}else if(this.phase==="flash"){if(this.phaseT+=i,this.phaseT>.45){const l=this.steps[this.stepIdx];this.pops=new Set(l.matched.map(([c,d])=>c*8+d));for(const[c,d]of l.matched){const h=40+d*le+le/2,p=130+c*le+le/2,m=this.board?.[c]?.[d]??0,S=so[m]?so[m].c:"#fff";for(let _=0;_<4&&this.particles.length<240;_++){const v=Math.random()*6.283,E=60+Math.random()*170;this.particles.push({x:h,y:p,vx:Math.cos(v)*E,vy:Math.sin(v)*E-80,t:0,life:.5+Math.random()*.3,col:S})}}this.phase="pop",this.phaseT=0}}else if(this.phase==="pop"){if(this.phaseT+=i,this.phaseT>.22){const l=this.steps[this.stepIdx];s&&(s.board=l.board),this.falls=l.falls||{},this.pops=new Set;const c=l.matched,d=c.reduce((p,[m])=>p+m,0)/c.length,h=c.reduce((p,[,m])=>p+m,0)/c.length;this.floats.push({x:40+h*le+le/2,y:130+d*le,txt:`+${l.gained}`,t:0}),this.say=`${l.word} +${l.gained}`,this.happy=1,this.sayT=0,this.emit(),this.phase="fall",this.phaseT=0}}else this.phase==="fall"?(this.phaseT+=i,this.phaseT>.38&&(this.falls={},this.stepIdx++,this.stepIdx<this.steps.length?(this.phase="flash",this.phaseT=0,this.matched=new Set(this.steps[this.stepIdx].matched.map(([l,c])=>l*8+c))):(this.pendingFinal&&s&&(s.board=this.pendingFinal),this.pendingFinal=null,this.phase="idle",this.phaseT=0))):this.phase==="swapback"&&(this.phaseT+=i,this.phaseT>.6&&(this.phase="idle",this.phaseT=0));s&&s.over&&(this.overT+=i,this.overT>3&&this.phase==="idle"&&(this.overT=0,this.newGame(!1)))}poll=async()=>{try{if(this.phase==="idle"){const e=await Aa.state();if(e){this.applyPub(e);const i=e.job;i&&i.running&&this.setStatus(`TURBO ${i.done}/${i.total} · avg ${i.avg} · eğri canlanıyor…`)}}}catch{}}}const RE=40,CE=130;let xh=null;function wE(){return xh||(xh=new AE),xh}const RS="flycrush-ui";function DE(o){try{const e=localStorage.getItem(RS);if(!e)return;const i=JSON.parse(e);typeof i.playing=="boolean"&&(o.playing=i.playing),(i.speedMul===1||i.speedMul===2||i.speedMul===4)&&(o.speedMul=i.speedMul),typeof i.manual=="boolean"&&(o.manual=i.manual)}catch{}}function NE(){const o=Ye.useMemo(()=>wE(),[]),[,e]=Ye.useState(0);return Ye.useEffect(()=>{DE(o);const i=o.subscribe(()=>e(c=>c+1));o.boot();const s=setInterval(()=>{o.poll();try{localStorage.setItem(RS,JSON.stringify({playing:o.playing,speedMul:o.speedMul,manual:o.manual}))}catch{}},2e3),l=c=>{try{c.code==="Space"?(c.preventDefault(),o.playing=!o.playing,o.emit()):c.key==="n"||c.key==="N"?o.phase==="idle"&&o.snap&&!o.snap.over&&o.flyStep():c.key==="m"||c.key==="M"?(o.manual=!o.manual,o.emit()):c.key==="r"||c.key==="R"?o.newGame(!1):c.key==="s"||c.key==="S"?o.save():(c.key==="f"||c.key==="F")&&(o.speedMul=o.speedMul>=4?1:o.speedMul*2,o.emit())}catch{}};return document.addEventListener("keydown",l),()=>{clearInterval(s),document.removeEventListener("keydown",l),i()}},[o]),o}const Tv={up:[-1,0],down:[1,0],left:[0,-1],right:[0,1]},Ac=le*8+28,bv=le*8+40;function UE({ctl:o}){const e=Ye.useRef(null);Ye.useEffect(()=>{const s=e.current;if(!s)return;const l=s.getContext("2d");if(!l)return;let c=0,d=0;const h=p=>{c=requestAnimationFrame(h);try{d||(d=p);let m=(p-d)/1e3;d=p,o.update(m),LE(l,o,p/1e3)}catch{}};return c=requestAnimationFrame(h),()=>cancelAnimationFrame(c)},[o]);const i=s=>{try{const l=s.currentTarget.getBoundingClientRect(),c=(s.clientX-l.left)*(Ac/l.width),d=(s.clientY-l.top)*(bv/l.height),h=Math.floor((c-14)/le),p=Math.floor((d-14)/le);p>=0&&p<8&&h>=0&&h<8&&o.clickCell(p,h)}catch{}};return et.jsx("canvas",{ref:e,width:Ac,height:bv,className:"board-canvas",onClick:i})}function LE(o,e,i){const s=e.board;if(o.fillStyle="#fff8eb",o.beginPath(),o.roundRect?o.roundRect(0,0,Ac,le*8+28,22):o.rect(0,0,Ac,le*8+28),o.fill(),o.strokeStyle="#d28cc8",o.lineWidth=3,o.stroke(),!s)return;const l=14,c=14;for(let p=0;p<8;p++)for(let m=0;m<8;m++){const S=(s[p]||[])[m]||0;let _=0,v=0,E=1;if((e.phase==="swap"||e.phase==="swapback")&&e.pending){const y=Math.floor(e.pending.cell/8),x=e.pending.cell%8,L=Tv[e.pending.dir]||[0,0];let G;e.phase==="swapback"?G=1-Math.min(1,e.phaseT/.6):e.steps.length>0?G=1-Math.min(1,e.phaseT/.22):G=Math.min(1,e.phaseT/.22),p===y&&m===x?(_=L[1]*le*G,v=L[0]*le*G):p===y+L[0]&&m===x+L[1]&&(_=-L[1]*le*G,v=-L[0]*le*G)}const R=`${p},${m}`;if(e.phase==="fall"&&e.falls[R]){const y=Math.min(1,e.phaseT/.38),x=1-Math.pow(1-y,3);v+=e.falls[R]*(1-x)}e.phase==="flash"&&e.matched.has(p*8+m)&&(E=1+.14*Math.sin(e.phaseT*25)),e.phase==="pop"&&e.pops.has(p*8+m)&&(E=Math.max(0,1-e.phaseT/.22)),e.sel&&e.sel[0]===p&&e.sel[1]===m&&(o.strokeStyle="#56d8ff",o.lineWidth=3,o.strokeRect(l+m*le+2,c+p*le+2,le-4,le-4)),e.rejectT<1.6&&e.rejectCells.some(([y,x])=>y===p&&x===m)&&(o.strokeStyle="#ff5f5f",o.lineWidth=3+Math.round(2*Math.sin(i*9)),o.strokeRect(l+m*le+2,c+p*le+2,le-4,le-4)),e.trailT<1.4&&e.trailCells.some(([y,x])=>y===p&&x===m)&&(o.strokeStyle="#7cff6b",o.lineWidth=2+Math.round(2*Math.sin(i*7+1)),o.strokeRect(l+m*le+4,c+p*le+4,le-8,le-8));const C=so[S]||so[0];TE(o,l+m*le+le/2+_,c+p*le+le/2+v,24,C.s,C.c,E)}if(e.phase==="aim"&&e.pending){const p=Math.floor(e.pending.cell/8),m=e.pending.cell%8,S=l+m*le+le/2,_=c+p*le+le/2,v=3+2*Math.sin(i*10);o.strokeStyle="#7cff6b",o.lineWidth=4,o.strokeRect(S-30-v,_-30-v,60+v*2,60+v*2),o.fillStyle="#7cff6b",o.font="bold 15px ui-monospace,monospace",o.fillText(`(${m},${p}) → ${e.pending.dir}`,S-34,_-44);const E=Tv[e.pending.dir]||[0,0],R=S+E[1]*le,C=_+E[0]*le;o.beginPath(),o.moveTo(S+E[1]*30,_+E[0]*30),o.lineTo(R-E[1]*12,C-E[0]*12),o.stroke();const y=Math.atan2(E[0],E[1]);for(const x of[.5,-.5])o.beginPath(),o.moveTo(R-E[1]*12,C-E[0]*12),o.lineTo(R-E[1]*12-12*Math.cos(y+x),C-E[0]*12-12*Math.sin(y+x)),o.stroke()}o.textBaseline="alphabetic";const d=l-RE,h=c-CE;for(const p of e.floats)o.globalAlpha=Math.max(0,1-p.t/1.2),o.fillStyle=p.col||"#7a2b6b",o.font=p.big?"bold 34px ui-monospace,monospace":"20px ui-monospace,monospace",o.fillText(p.txt,p.x+d-20,p.y+h-20);o.globalAlpha=1,o.font="20px ui-monospace,monospace";for(const p of e.particles)o.fillStyle=p.col,o.beginPath(),o.arc(p.x+d,p.y+h,Math.max(1,4*(1-p.t/p.life)),0,7),o.fill()}const Wp="186",OE=0,Av=1,PE=2,xc=1,IE=2,gl=3,js=0,Qn=1,Ua=2,Oa=0,Sl=1,Rv=2,Cv=3,wv=4,zE=5,eo=100,BE=101,FE=102,HE=103,GE=104,VE=200,XE=201,kE=202,WE=203,CS=204,wS=205,qE=206,YE=207,ZE=208,KE=209,jE=210,QE=211,JE=212,$E=213,tT=214,tp=0,ep=1,np=2,xl=3,ip=4,ap=5,sp=6,rp=7,DS=0,eT=1,nT=2,sa=0,NS=1,US=2,LS=3,OS=4,PS=5,IS=6,zS=7,BS=300,Qs=301,ro=302,yh=303,Mh=304,Oc=306,op=1e3,La=1001,lp=1002,Ln=1003,iT=1004,ju=1005,zn=1006,Eh=1007,Zs=1008,Ti=1009,FS=1010,HS=1011,yl=1012,qp=1013,la=1014,ia=1015,ua=1016,Yp=1017,Zp=1018,Ml=1020,GS=35902,VS=35899,XS=1021,kS=1022,Ii=1023,Ia=1026,Ks=1027,WS=1028,Kp=1029,Js=1030,jp=1031,Qp=1033,yc=33776,Mc=33777,Ec=33778,Tc=33779,up=35840,cp=35841,fp=35842,dp=35843,hp=36196,pp=37492,mp=37496,gp=37488,_p=37489,Rc=37490,vp=37491,Sp=37808,xp=37809,yp=37810,Mp=37811,Ep=37812,Tp=37813,bp=37814,Ap=37815,Rp=37816,Cp=37817,wp=37818,Dp=37819,Np=37820,Up=37821,Lp=36492,Op=36494,Pp=36495,Ip=36283,zp=36284,Cc=36285,Bp=36286,aT=3200,Dv=0,sT=1,vs="",fi="srgb",wc="srgb-linear",Dc="linear",Qe="srgb",Th=7680,rT=519,oT=512,lT=513,uT=514,Jp=515,cT=516,fT=517,$p=518,dT=519,hT=35044,Nv="300 es",aa=2e3,Nc=2001;function pT(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Uc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function mT(){const o=Uc("canvas");return o.style.display="block",o}const Uv={};function Lv(...o){const e="THREE."+o.shift();console.log(e,...o)}function qS(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function ce(...o){o=qS(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...o)}}function Fe(...o){o=qS(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...o)}}function io(...o){const e=o.join(" ");e in Uv||(Uv[e]=!0,ce(...o))}function gT(o,e,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const _T={[tp]:ep,[np]:sp,[ip]:rp,[xl]:ap,[ep]:tp,[sp]:np,[rp]:ip,[ap]:xl};class tr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bh=Math.PI/180,Fp=180/Math.PI;function Tl(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Pn[o&255]+Pn[o>>8&255]+Pn[o>>16&255]+Pn[o>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[i&63|128]+Pn[i>>8&255]+"-"+Pn[i>>16&255]+Pn[i>>24&255]+Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]).toLowerCase()}function ze(o,e,i){return Math.max(e,Math.min(i,o))}function vT(o,e){return(o%e+e)%e}function Ah(o,e,i){return(1-i)*o+i*e}function ul(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:case Uint8ClampedArray:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function jn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const am=class am{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=ze(this.x,e.x,i.x),this.y=ze(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=ze(this.x,e,i),this.y=ze(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ze(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(ze(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*s-d*l+e.x,this.y=c*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};am.prototype.isVector2=!0;let Ge=am;class lo{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,d,h){let p=s[l+0],m=s[l+1],S=s[l+2],_=s[l+3],v=c[d+0],E=c[d+1],R=c[d+2],C=c[d+3];if(_!==C||p!==v||m!==E||S!==R){let y=p*v+m*E+S*R+_*C;y<0&&(v=-v,E=-E,R=-R,C=-C,y=-y);let x=1-h;if(y<.9995){const L=Math.acos(y),G=Math.sin(L);x=Math.sin(x*L)/G,h=Math.sin(h*L)/G,p=p*x+v*h,m=m*x+E*h,S=S*x+R*h,_=_*x+C*h}else{p=p*x+v*h,m=m*x+E*h,S=S*x+R*h,_=_*x+C*h;const L=1/Math.sqrt(p*p+m*m+S*S+_*_);p*=L,m*=L,S*=L,_*=L}}e[i]=p,e[i+1]=m,e[i+2]=S,e[i+3]=_}static multiplyQuaternionsFlat(e,i,s,l,c,d){const h=s[l],p=s[l+1],m=s[l+2],S=s[l+3],_=c[d],v=c[d+1],E=c[d+2],R=c[d+3];return e[i]=h*R+S*_+p*E-m*v,e[i+1]=p*R+S*v+m*_-h*E,e[i+2]=m*R+S*E+h*v-p*_,e[i+3]=S*R-h*_-p*v-m*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,d=e._order,h=Math.cos,p=Math.sin,m=h(s/2),S=h(l/2),_=h(c/2),v=p(s/2),E=p(l/2),R=p(c/2);switch(d){case"XYZ":this._x=v*S*_+m*E*R,this._y=m*E*_-v*S*R,this._z=m*S*R+v*E*_,this._w=m*S*_-v*E*R;break;case"YXZ":this._x=v*S*_+m*E*R,this._y=m*E*_-v*S*R,this._z=m*S*R-v*E*_,this._w=m*S*_+v*E*R;break;case"ZXY":this._x=v*S*_-m*E*R,this._y=m*E*_+v*S*R,this._z=m*S*R+v*E*_,this._w=m*S*_-v*E*R;break;case"ZYX":this._x=v*S*_-m*E*R,this._y=m*E*_+v*S*R,this._z=m*S*R-v*E*_,this._w=m*S*_+v*E*R;break;case"YZX":this._x=v*S*_+m*E*R,this._y=m*E*_+v*S*R,this._z=m*S*R-v*E*_,this._w=m*S*_-v*E*R;break;case"XZY":this._x=v*S*_-m*E*R,this._y=m*E*_-v*S*R,this._z=m*S*R+v*E*_,this._w=m*S*_+v*E*R;break;default:ce("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],d=i[1],h=i[5],p=i[9],m=i[2],S=i[6],_=i[10],v=s+h+_;if(v>0){const E=.5/Math.sqrt(v+1);this._w=.25/E,this._x=(S-p)*E,this._y=(c-m)*E,this._z=(d-l)*E}else if(s>h&&s>_){const E=2*Math.sqrt(1+s-h-_);this._w=(S-p)/E,this._x=.25*E,this._y=(l+d)/E,this._z=(c+m)/E}else if(h>_){const E=2*Math.sqrt(1+h-s-_);this._w=(c-m)/E,this._x=(l+d)/E,this._y=.25*E,this._z=(p+S)/E}else{const E=2*Math.sqrt(1+_-s-h);this._w=(d-l)/E,this._x=(c+m)/E,this._y=(p+S)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ze(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,d=e._w,h=i._x,p=i._y,m=i._z,S=i._w;return this._x=s*S+d*h+l*m-c*p,this._y=l*S+d*p+c*h-s*m,this._z=c*S+d*m+s*p-l*h,this._w=d*S-s*h-l*p-c*m,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,d=e._w,h=this.dot(e);h<0&&(s=-s,l=-l,c=-c,d=-d,h=-h);let p=1-i;if(h<.9995){const m=Math.acos(h),S=Math.sin(m);p=Math.sin(p*m)/S,i=Math.sin(i*m)/S,this._x=this._x*p+s*i,this._y=this._y*p+l*i,this._z=this._z*p+c*i,this._w=this._w*p+d*i,this._onChangeCallback()}else this._x=this._x*p+s*i,this._y=this._y*p+l*i,this._z=this._z*p+c*i,this._w=this._w*p+d*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const sm=class sm{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Ov.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Ov.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,d=e.y,h=e.z,p=e.w,m=2*(d*l-h*s),S=2*(h*i-c*l),_=2*(c*s-d*i);return this.x=i+p*m+d*_-h*S,this.y=s+p*S+h*m-c*_,this.z=l+p*_+c*S-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=ze(this.x,e.x,i.x),this.y=ze(this.y,e.y,i.y),this.z=ze(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=ze(this.x,e,i),this.y=ze(this.y,e,i),this.z=ze(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ze(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,d=i.x,h=i.y,p=i.z;return this.x=l*p-c*h,this.y=c*d-s*p,this.z=s*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Rh.copy(this).projectOnVector(e),this.sub(Rh)}reflect(e){return this.sub(Rh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(ze(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};sm.prototype.isVector3=!0;let ct=sm;const Rh=new ct,Ov=new lo,rm=class rm{constructor(e,i,s,l,c,d,h,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,h,p,m)}set(e,i,s,l,c,d,h,p,m){const S=this.elements;return S[0]=e,S[1]=l,S[2]=h,S[3]=i,S[4]=c,S[5]=p,S[6]=s,S[7]=d,S[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],h=s[3],p=s[6],m=s[1],S=s[4],_=s[7],v=s[2],E=s[5],R=s[8],C=l[0],y=l[3],x=l[6],L=l[1],G=l[4],w=l[7],N=l[2],U=l[5],P=l[8];return c[0]=d*C+h*L+p*N,c[3]=d*y+h*G+p*U,c[6]=d*x+h*w+p*P,c[1]=m*C+S*L+_*N,c[4]=m*y+S*G+_*U,c[7]=m*x+S*w+_*P,c[2]=v*C+E*L+R*N,c[5]=v*y+E*G+R*U,c[8]=v*x+E*w+R*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],p=e[6],m=e[7],S=e[8];return i*d*S-i*h*m-s*c*S+s*h*p+l*c*m-l*d*p}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],p=e[6],m=e[7],S=e[8],_=S*d-h*m,v=h*p-S*c,E=m*c-d*p,R=i*_+s*v+l*E;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=_*C,e[1]=(l*m-S*s)*C,e[2]=(h*s-l*d)*C,e[3]=v*C,e[4]=(S*i-l*p)*C,e[5]=(l*c-h*i)*C,e[6]=E*C,e[7]=(s*p-m*i)*C,e[8]=(d*i-s*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,d,h){const p=Math.cos(c),m=Math.sin(c);return this.set(s*p,s*m,-s*(p*d+m*h)+d+e,-l*m,l*p,-l*(-m*d+p*h)+h+i,0,0,1),this}scale(e,i){return io("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ch.makeScale(e,i)),this}rotate(e){return io("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ch.makeRotation(-e)),this}translate(e,i){return io("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ch.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};rm.prototype.isMatrix3=!0;let ge=rm;const Ch=new ge,Pv=new ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Iv=new ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ST(){const o={enabled:!0,workingColorSpace:wc,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Qe&&(l.r=Pa(l.r),l.g=Pa(l.g),l.b=Pa(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Qe&&(l.r=ao(l.r),l.g=ao(l.g),l.b=ao(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===vs?Dc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return io("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return io("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[wc]:{primaries:e,whitePoint:s,transfer:Dc,toXYZ:Pv,fromXYZ:Iv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:e,whitePoint:s,transfer:Qe,toXYZ:Pv,fromXYZ:Iv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),o}const Ie=ST();function Pa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ao(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Vr;class xT{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Vr===void 0&&(Vr=Uc("canvas")),Vr.width=e.width,Vr.height=e.height;const l=Vr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Vr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Uc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=Pa(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Pa(i[s]/255)*255):i[s]=Pa(i[s]);return{data:i,width:e.width,height:e.height}}else return ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yT=0;class tm{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:yT++}),this.uuid=Tl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(wh(l[d].image)):c.push(wh(l[d]))}else c=wh(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function wh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?xT.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ce("Texture: Unable to serialize Texture."),{})}let MT=0;const Dh=new ct;class kn extends tr{constructor(e=kn.DEFAULT_IMAGE,i=kn.DEFAULT_MAPPING,s=La,l=La,c=zn,d=Zs,h=Ii,p=Ti,m=kn.DEFAULT_ANISOTROPY,S=vs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:MT++}),this.uuid=Tl(),this.name="",this.source=new tm(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Dh).x}get height(){return this.source.getSize(Dh).y}get depth(){return this.source.getSize(Dh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){ce(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ce(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==BS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case op:e.x=e.x-Math.floor(e.x);break;case La:e.x=e.x<0?0:1;break;case lp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case op:e.y=e.y-Math.floor(e.y);break;case La:e.y=e.y<0?0:1;break;case lp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=BS;kn.DEFAULT_ANISOTROPY=1;const om=class om{constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const p=e.elements,m=p[0],S=p[4],_=p[8],v=p[1],E=p[5],R=p[9],C=p[2],y=p[6],x=p[10];if(Math.abs(S-v)<.01&&Math.abs(_-C)<.01&&Math.abs(R-y)<.01){if(Math.abs(S+v)<.1&&Math.abs(_+C)<.1&&Math.abs(R+y)<.1&&Math.abs(m+E+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const G=(m+1)/2,w=(E+1)/2,N=(x+1)/2,U=(S+v)/4,P=(_+C)/4,T=(R+y)/4;return G>w&&G>N?G<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(G),l=U/s,c=P/s):w>N?w<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),s=U/l,c=T/l):N<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(N),s=P/c,l=T/c),this.set(s,l,c,i),this}let L=Math.sqrt((y-R)*(y-R)+(_-C)*(_-C)+(v-S)*(v-S));return Math.abs(L)<.001&&(L=1),this.x=(y-R)/L,this.y=(_-C)/L,this.z=(v-S)/L,this.w=Math.acos((m+E+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=ze(this.x,e.x,i.x),this.y=ze(this.y,e.y,i.y),this.z=ze(this.z,e.z,i.z),this.w=ze(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=ze(this.x,e,i),this.y=ze(this.y,e,i),this.z=ze(this.z,e,i),this.w=ze(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ze(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};om.prototype.isVector4=!0;let fn=om;class ET extends tr{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new fn(0,0,e,i),this.scissorTest=!1,this.viewport=new fn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new kn(l),d=s.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveColorBuffer=s.resolveColorBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.storeMultisampledColorBuffer=s.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=s.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=s.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new tm(l)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const i=e.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends ET{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class YS extends kn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=La,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class TT extends kn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=La,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Lc=class Lc{constructor(e,i,s,l,c,d,h,p,m,S,_,v,E,R,C,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,h,p,m,S,_,v,E,R,C,y)}set(e,i,s,l,c,d,h,p,m,S,_,v,E,R,C,y){const x=this.elements;return x[0]=e,x[4]=i,x[8]=s,x[12]=l,x[1]=c,x[5]=d,x[9]=h,x[13]=p,x[2]=m,x[6]=S,x[10]=_,x[14]=v,x[3]=E,x[7]=R,x[11]=C,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lc().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Xr.setFromMatrixColumn(e,0).length(),c=1/Xr.setFromMatrixColumn(e,1).length(),d=1/Xr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,d=Math.cos(s),h=Math.sin(s),p=Math.cos(l),m=Math.sin(l),S=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const v=d*S,E=d*_,R=h*S,C=h*_;i[0]=p*S,i[4]=-p*_,i[8]=m,i[1]=E+R*m,i[5]=v-C*m,i[9]=-h*p,i[2]=C-v*m,i[6]=R+E*m,i[10]=d*p}else if(e.order==="YXZ"){const v=p*S,E=p*_,R=m*S,C=m*_;i[0]=v+C*h,i[4]=R*h-E,i[8]=d*m,i[1]=d*_,i[5]=d*S,i[9]=-h,i[2]=E*h-R,i[6]=C+v*h,i[10]=d*p}else if(e.order==="ZXY"){const v=p*S,E=p*_,R=m*S,C=m*_;i[0]=v-C*h,i[4]=-d*_,i[8]=R+E*h,i[1]=E+R*h,i[5]=d*S,i[9]=C-v*h,i[2]=-d*m,i[6]=h,i[10]=d*p}else if(e.order==="ZYX"){const v=d*S,E=d*_,R=h*S,C=h*_;i[0]=p*S,i[4]=R*m-E,i[8]=v*m+C,i[1]=p*_,i[5]=C*m+v,i[9]=E*m-R,i[2]=-m,i[6]=h*p,i[10]=d*p}else if(e.order==="YZX"){const v=d*p,E=d*m,R=h*p,C=h*m;i[0]=p*S,i[4]=C-v*_,i[8]=R*_+E,i[1]=_,i[5]=d*S,i[9]=-h*S,i[2]=-m*S,i[6]=E*_+R,i[10]=v-C*_}else if(e.order==="XZY"){const v=d*p,E=d*m,R=h*p,C=h*m;i[0]=p*S,i[4]=-_,i[8]=m*S,i[1]=v*_+C,i[5]=d*S,i[9]=E*_-R,i[2]=R*_-E,i[6]=h*S,i[10]=C*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bT,e,AT)}lookAt(e,i,s){const l=this.elements;return ui.subVectors(e,i),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),ds.crossVectors(s,ui),ds.lengthSq()===0&&(Math.abs(s.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),ds.crossVectors(s,ui)),ds.normalize(),Qu.crossVectors(ui,ds),l[0]=ds.x,l[4]=Qu.x,l[8]=ui.x,l[1]=ds.y,l[5]=Qu.y,l[9]=ui.y,l[2]=ds.z,l[6]=Qu.z,l[10]=ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],h=s[4],p=s[8],m=s[12],S=s[1],_=s[5],v=s[9],E=s[13],R=s[2],C=s[6],y=s[10],x=s[14],L=s[3],G=s[7],w=s[11],N=s[15],U=l[0],P=l[4],T=l[8],O=l[12],V=l[1],Y=l[5],$=l[9],ut=l[13],K=l[2],tt=l[6],k=l[10],W=l[14],ft=l[3],ot=l[7],pt=l[11],Et=l[15];return c[0]=d*U+h*V+p*K+m*ft,c[4]=d*P+h*Y+p*tt+m*ot,c[8]=d*T+h*$+p*k+m*pt,c[12]=d*O+h*ut+p*W+m*Et,c[1]=S*U+_*V+v*K+E*ft,c[5]=S*P+_*Y+v*tt+E*ot,c[9]=S*T+_*$+v*k+E*pt,c[13]=S*O+_*ut+v*W+E*Et,c[2]=R*U+C*V+y*K+x*ft,c[6]=R*P+C*Y+y*tt+x*ot,c[10]=R*T+C*$+y*k+x*pt,c[14]=R*O+C*ut+y*W+x*Et,c[3]=L*U+G*V+w*K+N*ft,c[7]=L*P+G*Y+w*tt+N*ot,c[11]=L*T+G*$+w*k+N*pt,c[15]=L*O+G*ut+w*W+N*Et,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],d=e[1],h=e[5],p=e[9],m=e[13],S=e[2],_=e[6],v=e[10],E=e[14],R=e[3],C=e[7],y=e[11],x=e[15],L=p*E-m*v,G=h*E-m*_,w=h*v-p*_,N=d*E-m*S,U=d*v-p*S,P=d*_-h*S;return i*(C*L-y*G+x*w)-s*(R*L-y*N+x*U)+l*(R*G-C*N+x*P)-c*(R*w-C*U+y*P)}determinantAffine(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[1],d=e[5],h=e[9],p=e[2],m=e[6],S=e[10];return i*(d*S-h*m)-s*(c*S-h*p)+l*(c*m-d*p)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],h=e[5],p=e[6],m=e[7],S=e[8],_=e[9],v=e[10],E=e[11],R=e[12],C=e[13],y=e[14],x=e[15],L=i*h-s*d,G=i*p-l*d,w=i*m-c*d,N=s*p-l*h,U=s*m-c*h,P=l*m-c*p,T=S*C-_*R,O=S*y-v*R,V=S*x-E*R,Y=_*y-v*C,$=_*x-E*C,ut=v*x-E*y,K=L*ut-G*$+w*Y+N*V-U*O+P*T;if(K===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const tt=1/K;return e[0]=(h*ut-p*$+m*Y)*tt,e[1]=(l*$-s*ut-c*Y)*tt,e[2]=(C*P-y*U+x*N)*tt,e[3]=(v*U-_*P-E*N)*tt,e[4]=(p*V-d*ut-m*O)*tt,e[5]=(i*ut-l*V+c*O)*tt,e[6]=(y*w-R*P-x*G)*tt,e[7]=(S*P-v*w+E*G)*tt,e[8]=(d*$-h*V+m*T)*tt,e[9]=(s*V-i*$-c*T)*tt,e[10]=(R*U-C*w+x*L)*tt,e[11]=(_*w-S*U-E*L)*tt,e[12]=(h*O-d*Y-p*T)*tt,e[13]=(i*Y-s*O+l*T)*tt,e[14]=(C*G-R*N-y*L)*tt,e[15]=(S*N-_*G+v*L)*tt,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=e.x,h=e.y,p=e.z,m=c*d,S=c*h;return this.set(m*d+s,m*h-l*p,m*p+l*h,0,m*h+l*p,S*h+s,S*p-l*d,0,m*p-l*h,S*p+l*d,c*p*p+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,d){return this.set(1,s,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,d=i._y,h=i._z,p=i._w,m=c+c,S=d+d,_=h+h,v=c*m,E=c*S,R=c*_,C=d*S,y=d*_,x=h*_,L=p*m,G=p*S,w=p*_,N=s.x,U=s.y,P=s.z;return l[0]=(1-(C+x))*N,l[1]=(E+w)*N,l[2]=(R-G)*N,l[3]=0,l[4]=(E-w)*U,l[5]=(1-(v+x))*U,l[6]=(y+L)*U,l[7]=0,l[8]=(R+G)*P,l[9]=(y-L)*P,l[10]=(1-(v+C))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return s.set(1,1,1),i.identity(),this;let d=Xr.set(l[0],l[1],l[2]).length();const h=Xr.set(l[4],l[5],l[6]).length(),p=Xr.set(l[8],l[9],l[10]).length();c<0&&(d=-d),Ni.copy(this);const m=1/d,S=1/h,_=1/p;return Ni.elements[0]*=m,Ni.elements[1]*=m,Ni.elements[2]*=m,Ni.elements[4]*=S,Ni.elements[5]*=S,Ni.elements[6]*=S,Ni.elements[8]*=_,Ni.elements[9]*=_,Ni.elements[10]*=_,i.setFromRotationMatrix(Ni),s.x=d,s.y=h,s.z=p,this}makePerspective(e,i,s,l,c,d,h=aa,p=!1){const m=this.elements,S=2*c/(i-e),_=2*c/(s-l),v=(i+e)/(i-e),E=(s+l)/(s-l);let R,C;if(p)R=c/(d-c),C=d*c/(d-c);else if(h===aa)R=-(d+c)/(d-c),C=-2*d*c/(d-c);else if(h===Nc)R=-d/(d-c),C=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=S,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=_,m[9]=E,m[13]=0,m[2]=0,m[6]=0,m[10]=R,m[14]=C,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,s,l,c,d,h=aa,p=!1){const m=this.elements,S=2/(i-e),_=2/(s-l),v=-(i+e)/(i-e),E=-(s+l)/(s-l);let R,C;if(p)R=1/(d-c),C=d/(d-c);else if(h===aa)R=-2/(d-c),C=-(d+c)/(d-c);else if(h===Nc)R=-1/(d-c),C=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=S,m[4]=0,m[8]=0,m[12]=v,m[1]=0,m[5]=_,m[9]=0,m[13]=E,m[2]=0,m[6]=0,m[10]=R,m[14]=C,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};Lc.prototype.isMatrix4=!0;let dn=Lc;const Xr=new ct,Ni=new dn,bT=new ct(0,0,0),AT=new ct(1,1,1),ds=new ct,Qu=new ct,ui=new ct,zv=new dn,Bv=new lo;class $s{constructor(e=0,i=0,s=0,l=$s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],d=l[4],h=l[8],p=l[1],m=l[5],S=l[9],_=l[2],v=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-S,E),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(h,E),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(ze(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,E),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-ze(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,E),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(ze(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-S,m),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,E));break;case"XZY":this._z=Math.asin(-ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-S,E),this._y=0);break;default:ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return zv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zv,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Bv.setFromEuler(this),this.setFromQuaternion(Bv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$s.DEFAULT_ORDER="XYZ";class em{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let RT=0;const Fv=new ct,kr=new lo,Ra=new dn,Ju=new ct,cl=new ct,CT=new ct,wT=new lo,Hv=new ct(1,0,0),Gv=new ct(0,1,0),Vv=new ct(0,0,1),Xv={type:"added"},DT={type:"removed"},Wr={type:"childadded",child:null},Nh={type:"childremoved",child:null};class Jn extends tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:RT++}),this.uuid=Tl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jn.DEFAULT_UP.clone();const e=new ct,i=new $s,s=new lo,l=new ct(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new dn},normalMatrix:{value:new ge}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=Jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new em,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return kr.setFromAxisAngle(e,i),this.quaternion.multiply(kr),this}rotateOnWorldAxis(e,i){return kr.setFromAxisAngle(e,i),this.quaternion.premultiply(kr),this}rotateX(e){return this.rotateOnAxis(Hv,e)}rotateY(e){return this.rotateOnAxis(Gv,e)}rotateZ(e){return this.rotateOnAxis(Vv,e)}translateOnAxis(e,i){return Fv.copy(e).applyQuaternion(this.quaternion),this.position.add(Fv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Hv,e)}translateY(e){return this.translateOnAxis(Gv,e)}translateZ(e){return this.translateOnAxis(Vv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ra.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Ju.copy(e):Ju.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),cl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ra.lookAt(cl,Ju,this.up):Ra.lookAt(Ju,cl,this.up),this.quaternion.setFromRotationMatrix(Ra),l&&(Ra.extractRotation(l.matrixWorld),kr.setFromRotationMatrix(Ra),this.quaternion.premultiply(kr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Fe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xv),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null):Fe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(DT),Nh.child=e,this.dispatchEvent(Nh),Nh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ra.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ra.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ra),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xv),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cl,e,CT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cl,wT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i,s=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const c=this.children;for(let d=0,h=c.length;d<h;d++)c[d].updateWorldMatrix(!1,!0,s)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,l.name=this.name,l.castShadow=this.castShadow,l.receiveShadow=this.receiveShadow,l.visible=this.visible,l.frustumCulled=this.frustumCulled,l.renderOrder=this.renderOrder,l.static=this.static,l.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,S=p.length;m<S;m++){const _=p[m];c(e.shapes,_)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(c(e.materials,this.material[p]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(c(e.animations,p))}}if(i){const h=d(e.geometries),p=d(e.materials),m=d(e.textures),S=d(e.images),_=d(e.shapes),v=d(e.skeletons),E=d(e.animations),R=d(e.nodes);h.length>0&&(s.geometries=h),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),S.length>0&&(s.images=S),_.length>0&&(s.shapes=_),v.length>0&&(s.skeletons=v),E.length>0&&(s.animations=E),R.length>0&&(s.nodes=R)}return s.object=l,s;function d(h){const p=[];for(const m in h){const S=h[m];delete S.metadata,p.push(S)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Jn.DEFAULT_UP=new ct(0,1,0);Jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class _l extends Jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const NT={type:"move"};class Uh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _l,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _l,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ct,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ct),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _l,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ct,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ct,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,d=null;const h=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const C of e.hand.values()){const y=i.getJointPose(C,s),x=this._getHandJoint(m,C);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const S=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],v=S.position.distanceTo(_.position),E=.02,R=.005;m.inputState.pinching&&v>E+R?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&v<=E-R&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(NT)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new _l;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const ZS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hs={h:0,s:0,l:0},$u={h:0,s:0,l:0};function Lh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class ke{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ie.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Ie.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ie.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Ie.workingColorSpace){if(e=vT(e,1),i=ze(i,0,1),s=ze(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=Lh(d,c,e+1/3),this.g=Lh(d,c,e),this.b=Lh(d,c,e-1/3)}return Ie.colorSpaceToWorking(this,l),this}setStyle(e,i=fi){function s(c){c!==void 0&&parseFloat(c)<1&&ce("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ce("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);ce("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=fi){const s=ZS[e.toLowerCase()];return s!==void 0?this.setHex(s,i):ce("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pa(e.r),this.g=Pa(e.g),this.b=Pa(e.b),this}copyLinearToSRGB(e){return this.r=ao(e.r),this.g=ao(e.g),this.b=ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return Ie.workingToColorSpace(In.copy(this),e),Math.round(ze(In.r*255,0,255))*65536+Math.round(ze(In.g*255,0,255))*256+Math.round(ze(In.b*255,0,255))}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ie.workingColorSpace){Ie.workingToColorSpace(In.copy(this),i);const s=In.r,l=In.g,c=In.b,d=Math.max(s,l,c),h=Math.min(s,l,c);let p,m;const S=(h+d)/2;if(h===d)p=0,m=0;else{const _=d-h;switch(m=S<=.5?_/(d+h):_/(2-d-h),d){case s:p=(l-c)/_+(l<c?6:0);break;case l:p=(c-s)/_+2;break;case c:p=(s-l)/_+4;break}p/=6}return e.h=p,e.s=m,e.l=S,e}getRGB(e,i=Ie.workingColorSpace){return Ie.workingToColorSpace(In.copy(this),i),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=fi){Ie.workingToColorSpace(In.copy(this),e);const i=In.r,s=In.g,l=In.b;return e!==fi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(hs),this.setHSL(hs.h+e,hs.s+i,hs.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(hs),e.getHSL($u);const s=Ah(hs.h,$u.h,i),l=Ah(hs.s,$u.s,i),c=Ah(hs.l,$u.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new ke;ke.NAMES=ZS;class UT extends Jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $s,this.environmentIntensity=1,this.environmentRotation=new $s,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ui=new ct,Ca=new ct,Oh=new ct,wa=new ct,qr=new ct,Yr=new ct,kv=new ct,Ph=new ct,Ih=new ct,zh=new ct,Bh=new fn,Fh=new fn,Hh=new fn;class Pi{constructor(e=new ct,i=new ct,s=new ct){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ui.subVectors(e,i),l.cross(Ui);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Ui.subVectors(l,i),Ca.subVectors(s,i),Oh.subVectors(e,i);const d=Ui.dot(Ui),h=Ui.dot(Ca),p=Ui.dot(Oh),m=Ca.dot(Ca),S=Ca.dot(Oh),_=d*m-h*h;if(_===0)return c.set(0,0,0),null;const v=1/_,E=(m*p-h*S)*v,R=(d*S-h*p)*v;return c.set(1-E-R,R,E)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,wa)===null?!1:wa.x>=0&&wa.y>=0&&wa.x+wa.y<=1}static getInterpolation(e,i,s,l,c,d,h,p){return this.getBarycoord(e,i,s,l,wa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,wa.x),p.addScaledVector(d,wa.y),p.addScaledVector(h,wa.z),p)}static getInterpolatedAttribute(e,i,s,l,c,d){return Bh.setScalar(0),Fh.setScalar(0),Hh.setScalar(0),Bh.fromBufferAttribute(e,i),Fh.fromBufferAttribute(e,s),Hh.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Bh,c.x),d.addScaledVector(Fh,c.y),d.addScaledVector(Hh,c.z),d}static isFrontFacing(e,i,s,l){return Ui.subVectors(s,i),Ca.subVectors(e,i),Ui.cross(Ca).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ui.subVectors(this.c,this.b),Ca.subVectors(this.a,this.b),Ui.cross(Ca).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Pi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Pi.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let d,h;qr.subVectors(l,s),Yr.subVectors(c,s),Ph.subVectors(e,s);const p=qr.dot(Ph),m=Yr.dot(Ph);if(p<=0&&m<=0)return i.copy(s);Ih.subVectors(e,l);const S=qr.dot(Ih),_=Yr.dot(Ih);if(S>=0&&_<=S)return i.copy(l);const v=p*_-S*m;if(v<=0&&p>=0&&S<=0)return d=p/(p-S),i.copy(s).addScaledVector(qr,d);zh.subVectors(e,c);const E=qr.dot(zh),R=Yr.dot(zh);if(R>=0&&E<=R)return i.copy(c);const C=E*m-p*R;if(C<=0&&m>=0&&R<=0)return h=m/(m-R),i.copy(s).addScaledVector(Yr,h);const y=S*R-E*_;if(y<=0&&_-S>=0&&E-R>=0)return kv.subVectors(c,l),h=(_-S)/(_-S+(E-R)),i.copy(l).addScaledVector(kv,h);const x=1/(y+C+v);return d=C*x,h=v*x,i.copy(s).addScaledVector(qr,d).addScaledVector(Yr,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class uo{constructor(e=new ct(1/0,1/0,1/0),i=new ct(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Li.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Li.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Li.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Li):Li.fromBufferAttribute(c,d),Li.applyMatrix4(e.matrixWorld),this.expandByPoint(Li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),tc.copy(s.boundingBox)),tc.applyMatrix4(e.matrixWorld),this.union(tc)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Li),Li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fl),ec.subVectors(this.max,fl),Zr.subVectors(e.a,fl),Kr.subVectors(e.b,fl),jr.subVectors(e.c,fl),ps.subVectors(Kr,Zr),ms.subVectors(jr,Kr),Xs.subVectors(Zr,jr);let i=[0,-ps.z,ps.y,0,-ms.z,ms.y,0,-Xs.z,Xs.y,ps.z,0,-ps.x,ms.z,0,-ms.x,Xs.z,0,-Xs.x,-ps.y,ps.x,0,-ms.y,ms.x,0,-Xs.y,Xs.x,0];return!Gh(i,Zr,Kr,jr,ec)||(i=[1,0,0,0,1,0,0,0,1],!Gh(i,Zr,Kr,jr,ec))?!1:(nc.crossVectors(ps,ms),i=[nc.x,nc.y,nc.z],Gh(i,Zr,Kr,jr,ec))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Da[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Da[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Da[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Da[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Da[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Da[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Da[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Da[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Da),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Da=[new ct,new ct,new ct,new ct,new ct,new ct,new ct,new ct],Li=new ct,tc=new uo,Zr=new ct,Kr=new ct,jr=new ct,ps=new ct,ms=new ct,Xs=new ct,fl=new ct,ec=new ct,nc=new ct,ks=new ct;function Gh(o,e,i,s,l){for(let c=0,d=o.length-3;c<=d;c+=3){ks.fromArray(o,c);const h=l.x*Math.abs(ks.x)+l.y*Math.abs(ks.y)+l.z*Math.abs(ks.z),p=e.dot(ks),m=i.dot(ks),S=s.dot(ks);if(Math.max(-Math.max(p,m,S),Math.min(p,m,S))>h)return!1}return!0}const vn=new ct,ic=new Ge;let LT=0;class ra extends tr{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:LT++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=hT,this.updateRanges=[],this.gpuType=ia,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)ic.fromBufferAttribute(this,i),ic.applyMatrix3(e),this.setXY(i,ic.x,ic.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix3(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix4(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.applyNormalMatrix(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.transformDirection(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=ul(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=jn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=ul(i,this.array)),i}setX(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=ul(i,this.array)),i}setY(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=ul(i,this.array)),i}setZ(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=ul(i,this.array)),i}setW(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array),l=jn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array),l=jn(l,this.array),c=jn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class KS extends ra{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class jS extends ra{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class oa extends ra{constructor(e,i,s){super(new Float32Array(e),i,s)}}const OT=new uo,dl=new ct,Vh=new ct;class Pc{constructor(e=new ct,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):OT.setFromPoints(e).getCenter(s);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;dl.subVectors(e,this.center);const i=dl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(dl,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(dl.copy(e.center).add(Vh)),this.expandByPoint(dl.copy(e.center).sub(Vh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let PT=0;const Ei=new dn,Xh=new Jn,Qr=new ct,ci=new uo,hl=new uo,An=new ct;class Fi extends tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:PT++}),this.uuid=Tl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pT(e)?jS:KS)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ge().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ei.makeRotationFromQuaternion(e),this.applyMatrix4(Ei),this}rotateX(e){return Ei.makeRotationX(e),this.applyMatrix4(Ei),this}rotateY(e){return Ei.makeRotationY(e),this.applyMatrix4(Ei),this}rotateZ(e){return Ei.makeRotationZ(e),this.applyMatrix4(Ei),this}translate(e,i,s){return Ei.makeTranslation(e,i,s),this.applyMatrix4(Ei),this}scale(e,i,s){return Ei.makeScale(e,i,s),this.applyMatrix4(Ei),this}lookAt(e){return Xh.lookAt(e),Xh.updateMatrix(),this.applyMatrix4(Xh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qr).negate(),this.translate(Qr.x,Qr.y,Qr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new oa(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new uo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ct(-1/0,-1/0,-1/0),new ct(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ci.setFromBufferAttribute(c),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Fe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ct,1/0);return}if(e){const s=this.boundingSphere.center;if(ci.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];hl.setFromBufferAttribute(h),this.morphTargetsRelative?(An.addVectors(ci.min,hl.min),ci.expandByPoint(An),An.addVectors(ci.max,hl.max),ci.expandByPoint(An)):(ci.expandByPoint(hl.min),ci.expandByPoint(hl.max))}ci.getCenter(s);let l=0;for(let c=0,d=e.count;c<d;c++)An.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(An));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],p=this.morphTargetsRelative;for(let m=0,S=h.count;m<S;m++)An.fromBufferAttribute(h,m),p&&(Qr.fromBufferAttribute(e,m),An.add(Qr)),l=Math.max(l,s.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Fe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Fe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==s.count)&&(d=new ra(new Float32Array(4*s.count),4),this.setAttribute("tangent",d));const h=[],p=[];for(let T=0;T<s.count;T++)h[T]=new ct,p[T]=new ct;const m=new ct,S=new ct,_=new ct,v=new Ge,E=new Ge,R=new Ge,C=new ct,y=new ct;function x(T,O,V){m.fromBufferAttribute(s,T),S.fromBufferAttribute(s,O),_.fromBufferAttribute(s,V),v.fromBufferAttribute(c,T),E.fromBufferAttribute(c,O),R.fromBufferAttribute(c,V),S.sub(m),_.sub(m),E.sub(v),R.sub(v);const Y=1/(E.x*R.y-R.x*E.y);isFinite(Y)&&(C.copy(S).multiplyScalar(R.y).addScaledVector(_,-E.y).multiplyScalar(Y),y.copy(_).multiplyScalar(E.x).addScaledVector(S,-R.x).multiplyScalar(Y),h[T].add(C),h[O].add(C),h[V].add(C),p[T].add(y),p[O].add(y),p[V].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let T=0,O=L.length;T<O;++T){const V=L[T],Y=V.start,$=V.count;for(let ut=Y,K=Y+$;ut<K;ut+=3)x(e.getX(ut+0),e.getX(ut+1),e.getX(ut+2))}const G=new ct,w=new ct,N=new ct,U=new ct;function P(T){N.fromBufferAttribute(l,T),U.copy(N);const O=h[T];G.copy(O),G.sub(N.multiplyScalar(N.dot(O))).normalize(),w.crossVectors(U,O);const Y=w.dot(p[T])<0?-1:1;d.setXYZW(T,G.x,G.y,G.z,Y)}for(let T=0,O=L.length;T<O;++T){const V=L[T],Y=V.start,$=V.count;for(let ut=Y,K=Y+$;ut<K;ut+=3)P(e.getX(ut+0)),P(e.getX(ut+1)),P(e.getX(ut+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new ra(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let v=0,E=s.count;v<E;v++)s.setXYZ(v,0,0,0);const l=new ct,c=new ct,d=new ct,h=new ct,p=new ct,m=new ct,S=new ct,_=new ct;if(e)for(let v=0,E=e.count;v<E;v+=3){const R=e.getX(v+0),C=e.getX(v+1),y=e.getX(v+2);l.fromBufferAttribute(i,R),c.fromBufferAttribute(i,C),d.fromBufferAttribute(i,y),S.subVectors(d,c),_.subVectors(l,c),S.cross(_),h.fromBufferAttribute(s,R),p.fromBufferAttribute(s,C),m.fromBufferAttribute(s,y),h.add(S),p.add(S),m.add(S),s.setXYZ(R,h.x,h.y,h.z),s.setXYZ(C,p.x,p.y,p.z),s.setXYZ(y,m.x,m.y,m.z)}else for(let v=0,E=i.count;v<E;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),d.fromBufferAttribute(i,v+2),S.subVectors(d,c),_.subVectors(l,c),S.cross(_),s.setXYZ(v+0,S.x,S.y,S.z),s.setXYZ(v+1,S.x,S.y,S.z),s.setXYZ(v+2,S.x,S.y,S.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)An.fromBufferAttribute(e,i),An.normalize(),e.setXYZ(i,An.x,An.y,An.z)}toNonIndexed(){function e(h,p){const m=h.array,S=h.itemSize,_=h.normalized,v=new m.constructor(p.length*S);let E=0,R=0;for(let C=0,y=p.length;C<y;C++){h.isInterleavedBufferAttribute?E=p[C]*h.data.stride+h.offset:E=p[C]*S;for(let x=0;x<S;x++)v[R++]=m[E++]}return new ra(v,S,_)}if(this.index===null)return ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Fi,s=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=e(p,s);i.setAttribute(h,m)}const c=this.morphAttributes;for(const h in c){const p=[],m=c[h];for(let S=0,_=m.length;S<_;S++){const v=m[S],E=e(v,s);p.push(E)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const m=d[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],S=[];for(let _=0,v=m.length;_<v;_++){const E=m[_];S.push(E.toJSON(e.data))}S.length>0&&(l[p]=S,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const m in l){const S=l[m];this.setAttribute(m,S.clone(i))}const c=e.morphAttributes;for(const m in c){const S=[],_=c[m];for(let v=0,E=_.length;v<E;v++)S.push(_[v].clone(i));this.morphAttributes[m]=S}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,S=d.length;m<S;m++){const _=d[m];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kh=new ct,IT=new ct,zT=new ge;class _s{constructor(e=new ct(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=kh.subVectors(s,i).cross(IT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(kh),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(l,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||zT.getNormalMatrix(e),l=this.coplanarPoint(kh).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let BT=0;class bl extends tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:BT++}),this.uuid=Tl(),this.name="",this.type="Material",this.blending=Sl,this.side=js,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=CS,this.blendDst=wS,this.blendEquation=eo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=xl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rT,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Th,this.stencilZFail=Th,this.stencilZPass=Th,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){ce(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ce(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,s.blending=this.blending,s.side=this.side,s.shadowSide=this.shadowSide,s.vertexColors=this.vertexColors,s.opacity=this.opacity,s.transparent=this.transparent,s.blendSrc=this.blendSrc,s.blendDst=this.blendDst,s.blendEquation=this.blendEquation,s.blendSrcAlpha=this.blendSrcAlpha,s.blendDstAlpha=this.blendDstAlpha,s.blendEquationAlpha=this.blendEquationAlpha,s.blendColor=this.blendColor.getHex(),s.blendAlpha=this.blendAlpha,s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.clipIntersection=this.clipIntersection,s.clipShadows=this.clipShadows,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,s.stencilWrite=this.stencilWrite,s.polygonOffset=this.polygonOffset,s.polygonOffsetFactor=this.polygonOffsetFactor,s.polygonOffsetUnits=this.polygonOffsetUnits,s.dithering=this.dithering,s.alphaTest=this.alphaTest,s.alphaHash=this.alphaHash,s.alphaToCoverage=this.alphaToCoverage,s.premultipliedAlpha=this.premultipliedAlpha,s.forceSinglePass=this.forceSinglePass,s.allowOverride=this.allowOverride,s.visible=this.visible,s.toneMapped=this.toneMapped,s.name=this.name,this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(s.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(s.clippingPlanes=this.clippingPlanes.map(c=>c.toJSON())),this.rotation!==void 0&&(s.rotation=this.rotation),this.depthPacking!==void 0&&(s.depthPacking=this.depthPacking),this.linewidth!==void 0&&(s.linewidth=this.linewidth),this.linecap!==void 0&&(s.linecap=this.linecap),this.linejoin!==void 0&&(s.linejoin=this.linejoin),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.wireframe!==void 0&&(s.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(s.flatShading=this.flatShading),this.fog!==void 0&&(s.fog=this.fog),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const h in c){const p=c[h];delete p.metadata,d.push(p)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(s=>new _s().fromJSON(s))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new Ge().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ge().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Na=new ct,Wh=new ct,ac=new ct,sc=new ct;class nm{constructor(e=new ct,i=new ct(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Na)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Na.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Na.copy(this.origin).addScaledVector(this.direction,i),Na.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Wh.copy(e).add(i).multiplyScalar(.5),ac.copy(i).sub(e).normalize(),sc.copy(this.origin).sub(Wh);const c=e.distanceTo(i)*.5,d=-this.direction.dot(ac),h=sc.dot(this.direction),p=-sc.dot(ac),m=sc.lengthSq(),S=Math.abs(1-d*d);let _,v,E,R;if(S>0)if(_=d*p-h,v=d*h-p,R=c*S,_>=0)if(v>=-R)if(v<=R){const C=1/S;_*=C,v*=C,E=_*(_+d*v+2*h)+v*(d*_+v+2*p)+m}else v=c,_=Math.max(0,-(d*v+h)),E=-_*_+v*(v+2*p)+m;else v=-c,_=Math.max(0,-(d*v+h)),E=-_*_+v*(v+2*p)+m;else v<=-R?(_=Math.max(0,-(-d*c+h)),v=_>0?-c:Math.min(Math.max(-c,-p),c),E=-_*_+v*(v+2*p)+m):v<=R?(_=0,v=Math.min(Math.max(-c,-p),c),E=v*(v+2*p)+m):(_=Math.max(0,-(d*c+h)),v=_>0?c:Math.min(Math.max(-c,-p),c),E=-_*_+v*(v+2*p)+m);else v=d>0?-c:c,_=Math.max(0,-(d*v+h)),E=-_*_+v*(v+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Wh).addScaledVector(ac,v),E}intersectSphere(e,i){if(e.radius<0)return null;Na.subVectors(e.center,this.origin);const s=Na.dot(this.direction),l=Na.dot(Na)-s*s,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=s-d,p=s+d;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,d,h,p;const m=1/this.direction.x,S=1/this.direction.y,_=1/this.direction.z,v=this.origin;return m>=0?(s=(e.min.x-v.x)*m,l=(e.max.x-v.x)*m):(s=(e.max.x-v.x)*m,l=(e.min.x-v.x)*m),S>=0?(c=(e.min.y-v.y)*S,d=(e.max.y-v.y)*S):(c=(e.max.y-v.y)*S,d=(e.min.y-v.y)*S),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),_>=0?(h=(e.min.z-v.z)*_,p=(e.max.z-v.z)*_):(h=(e.max.z-v.z)*_,p=(e.min.z-v.z)*_),s>p||h>l)||((h>s||s!==s)&&(s=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Na)!==null}intersectTriangle(e,i,s,l,c){const d=this.origin,h=this.direction,p=h.x,m=h.y,S=h.z,_=e.x-d.x,v=e.y-d.y,E=e.z-d.z,R=i.x-d.x,C=i.y-d.y,y=i.z-d.z,x=s.x-d.x,L=s.y-d.y,G=s.z-d.z,w=Math.abs(p),N=Math.abs(m),U=Math.abs(S);let P,T,O,V,Y,$,ut,K,tt,k,W,ft;if(w>=N&&w>=U?(O=p,$=_,tt=R,ft=x,p>=0?(P=m,T=S,V=v,Y=E,ut=C,K=y,k=L,W=G):(P=S,T=m,V=E,Y=v,ut=y,K=C,k=G,W=L)):N>=U?(O=m,$=v,tt=C,ft=L,m>=0?(P=S,T=p,V=E,Y=_,ut=y,K=R,k=G,W=x):(P=p,T=S,V=_,Y=E,ut=R,K=y,k=x,W=G)):(O=S,$=E,tt=y,ft=G,S>=0?(P=p,T=m,V=_,Y=v,ut=R,K=C,k=x,W=L):(P=m,T=p,V=v,Y=_,ut=C,K=R,k=L,W=x)),O===0)return null;const ot=P/O,pt=T/O,Et=1/O,Zt=V-ot*$,jt=Y-pt*$,z=ut-ot*tt,gt=K-pt*tt,Rt=k-ot*ft,Z=W-pt*ft,ht=Rt*gt-Z*z,bt=Zt*Z-jt*Rt,It=z*jt-gt*Zt;if(l){if(ht<0||bt<0||It<0)return null}else if((ht<0||bt<0||It<0)&&(ht>0||bt>0||It>0))return null;const mt=ht+bt+It;if(mt===0)return null;const Ct=Et*(ht*$+bt*tt+It*ft);return(mt>0?Ct<0:Ct>0)?null:this.at(Ct/mt,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class QS extends bl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $s,this.combine=DS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wv=new dn,Ws=new nm,rc=new Pc,qv=new ct,oc=new ct,lc=new ct,uc=new ct,qh=new ct,cc=new ct,Yv=new ct,fc=new ct;class za extends Jn{constructor(e=new Fi,i=new QS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){cc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const S=h[p],_=c[p];S!==0&&(qh.fromBufferAttribute(_,e),d?cc.addScaledVector(qh,S):cc.addScaledVector(qh.sub(i),S))}i.add(cc)}return i}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),rc.copy(s.boundingSphere),rc.applyMatrix4(c),Ws.copy(e.ray).recast(e.near),!(rc.containsPoint(Ws.origin)===!1&&(Ws.intersectSphere(rc,qv)===null||Ws.origin.distanceToSquared(qv)>(e.far-e.near)**2))&&(Wv.copy(c).invert(),Ws.copy(e.ray).applyMatrix4(Wv),!(s.boundingBox!==null&&Ws.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Ws)))}_computeIntersections(e,i,s){let l;const c=this.geometry,d=this.material,h=c.index,p=c.attributes.position,m=c.attributes.uv,S=c.attributes.uv1,_=c.attributes.normal,v=c.groups,E=c.drawRange;if(h!==null)if(Array.isArray(d))for(let R=0,C=v.length;R<C;R++){const y=v[R],x=d[y.materialIndex],L=Math.max(y.start,E.start),G=Math.min(h.count,Math.min(y.start+y.count,E.start+E.count));for(let w=L,N=G;w<N;w+=3){const U=h.getX(w),P=h.getX(w+1),T=h.getX(w+2);l=dc(this,x,e,s,m,S,_,U,P,T),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const R=Math.max(0,E.start),C=Math.min(h.count,E.start+E.count);for(let y=R,x=C;y<x;y+=3){const L=h.getX(y),G=h.getX(y+1),w=h.getX(y+2);l=dc(this,d,e,s,m,S,_,L,G,w),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(d))for(let R=0,C=v.length;R<C;R++){const y=v[R],x=d[y.materialIndex],L=Math.max(y.start,E.start),G=Math.min(p.count,Math.min(y.start+y.count,E.start+E.count));for(let w=L,N=G;w<N;w+=3){const U=w,P=w+1,T=w+2;l=dc(this,x,e,s,m,S,_,U,P,T),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const R=Math.max(0,E.start),C=Math.min(p.count,E.start+E.count);for(let y=R,x=C;y<x;y+=3){const L=y,G=y+1,w=y+2;l=dc(this,d,e,s,m,S,_,L,G,w),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function FT(o,e,i,s,l,c,d,h){let p;if(e.side===Qn?p=s.intersectTriangle(d,c,l,!0,h):p=s.intersectTriangle(l,c,d,e.side===js,h),p===null)return null;fc.copy(h),fc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(fc);return m<i.near||m>i.far?null:{distance:m,point:fc.clone(),object:o}}function dc(o,e,i,s,l,c,d,h,p,m){o.getVertexPosition(h,oc),o.getVertexPosition(p,lc),o.getVertexPosition(m,uc);const S=FT(o,e,i,s,oc,lc,uc,Yv);if(S){const _=new ct;Pi.getBarycoord(Yv,oc,lc,uc,_),l&&(S.uv=Pi.getInterpolatedAttribute(l,h,p,m,_,new Ge)),c&&(S.uv1=Pi.getInterpolatedAttribute(c,h,p,m,_,new Ge)),d&&(S.normal=Pi.getInterpolatedAttribute(d,h,p,m,_,new ct),S.normal.dot(s.direction)>0&&S.normal.multiplyScalar(-1));const v={a:h,b:p,c:m,normal:new ct,materialIndex:0};Pi.getNormal(oc,lc,uc,v.normal),S.face=v,S.barycoord=_}return S}class HT extends kn{constructor(e=null,i=1,s=1,l,c,d,h,p,m=Ln,S=Ln,_,v){super(null,d,h,p,m,S,l,c,_,v),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qs=new Pc,GT=new Ge(.5,.5),hc=new ct;class JS{constructor(e=new _s,i=new _s,s=new _s,l=new _s,c=new _s,d=new _s){this.planes=[e,i,s,l,c,d]}set(e,i,s,l,c,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=aa,s=!1){const l=this.planes,c=e.elements,d=c[0],h=c[1],p=c[2],m=c[3],S=c[4],_=c[5],v=c[6],E=c[7],R=c[8],C=c[9],y=c[10],x=c[11],L=c[12],G=c[13],w=c[14],N=c[15];if(l[0].setComponents(m-d,E-S,x-R,N-L).normalize(),l[1].setComponents(m+d,E+S,x+R,N+L).normalize(),l[2].setComponents(m+h,E+_,x+C,N+G).normalize(),l[3].setComponents(m-h,E-_,x-C,N-G).normalize(),s)l[4].setComponents(p,v,y,w).normalize(),l[5].setComponents(m-p,E-v,x-y,N-w).normalize();else if(l[4].setComponents(m-p,E-v,x-y,N-w).normalize(),i===aa)l[5].setComponents(m+p,E+v,x+y,N+w).normalize();else if(i===Nc)l[5].setComponents(p,v,y,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),qs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qs)}intersectsSprite(e){qs.center.set(0,0,0);const i=GT.distanceTo(e.center);return qs.radius=.7071067811865476+i,qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(qs)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(hc.x=l.normal.x>0?e.max.x:e.min.x,hc.y=l.normal.y>0?e.max.y:e.min.y,hc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(hc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class VT extends bl{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Zv=new dn,Hp=new nm,pc=new Pc,mc=new ct;class XT extends Jn{constructor(e=new Fi,i=new VT){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),pc.copy(s.boundingSphere),pc.applyMatrix4(l),pc.radius+=c,e.ray.intersectsSphere(pc)===!1)return;Zv.copy(l).invert(),Hp.copy(e.ray).applyMatrix4(Zv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,m=s.index,_=s.attributes.position;if(m!==null){const v=Math.max(0,d.start),E=Math.min(m.count,d.start+d.count);for(let R=v,C=E;R<C;R++){const y=m.getX(R);mc.fromBufferAttribute(_,y),Kv(mc,y,p,l,e,i,this)}}else{const v=Math.max(0,d.start),E=Math.min(_.count,d.start+d.count);for(let R=v,C=E;R<C;R++)mc.fromBufferAttribute(_,R),Kv(mc,R,p,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Kv(o,e,i,s,l,c,d){const h=Hp.distanceSqToPoint(o);if(h<i){const p=new ct;Hp.closestPointToPoint(o,p),p.applyMatrix4(s);const m=l.ray.origin.distanceTo(p);if(m<l.near||m>l.far)return;c.push({distance:m,distanceToRay:Math.sqrt(h),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class $S extends kn{constructor(e=[],i=Qs,s,l,c,d,h,p,m,S){super(e,i,s,l,c,d,h,p,m,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class El extends kn{constructor(e,i,s=la,l,c,d,h=Ln,p=Ln,m,S=Ia,_=1){if(S!==Ia&&S!==Ks)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:_};super(v,l,c,d,h,p,S,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new tm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return i.compareFunction=this.compareFunction,i}}class kT extends El{constructor(e,i=la,s=Qs,l,c,d=Ln,h=Ln,p,m=Ia){const S={width:e,height:e,depth:1},_=[S,S,S,S,S,S];super(e,e,i,s,l,c,d,h,p,m),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class tx extends kn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Al extends Fi{constructor(e=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const p=[],m=[],S=[],_=[];let v=0,E=0;R("z","y","x",-1,-1,s,i,e,d,c,0),R("z","y","x",1,-1,s,i,-e,d,c,1),R("x","z","y",1,1,e,s,i,l,d,2),R("x","z","y",1,-1,e,s,-i,l,d,3),R("x","y","z",1,-1,e,i,s,l,c,4),R("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(p),this.setAttribute("position",new oa(m,3)),this.setAttribute("normal",new oa(S,3)),this.setAttribute("uv",new oa(_,2));function R(C,y,x,L,G,w,N,U,P,T,O){const V=w/P,Y=N/T,$=w/2,ut=N/2,K=U/2,tt=P+1,k=T+1;let W=0,ft=0;const ot=new ct;for(let pt=0;pt<k;pt++){const Et=pt*Y-ut;for(let Zt=0;Zt<tt;Zt++){const jt=Zt*V-$;ot[C]=jt*L,ot[y]=Et*G,ot[x]=K,m.push(ot.x,ot.y,ot.z),ot[C]=0,ot[y]=0,ot[x]=U>0?1:-1,S.push(ot.x,ot.y,ot.z),_.push(Zt/P),_.push(1-pt/T),W+=1}}for(let pt=0;pt<T;pt++)for(let Et=0;Et<P;Et++){const Zt=v+Et+tt*pt,jt=v+Et+tt*(pt+1),z=v+(Et+1)+tt*(pt+1),gt=v+(Et+1)+tt*pt;p.push(Zt,jt,gt),p.push(jt,z,gt),ft+=6}h.addGroup(E,ft,O),E+=ft,v+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Al(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ic extends Fi{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,d=i/2,h=Math.floor(s),p=Math.floor(l),m=h+1,S=p+1,_=e/h,v=i/p,E=[],R=[],C=[],y=[];for(let x=0;x<S;x++){const L=x*v-d;for(let G=0;G<m;G++){const w=G*_-c;R.push(w,-L,0),C.push(0,0,1),y.push(G/h),y.push(1-x/p)}}for(let x=0;x<p;x++)for(let L=0;L<h;L++){const G=L+m*x,w=L+m*(x+1),N=L+1+m*(x+1),U=L+1+m*x;E.push(G,w,U),E.push(w,N,U)}this.setIndex(E),this.setAttribute("position",new oa(R,3)),this.setAttribute("normal",new oa(C,3)),this.setAttribute("uv",new oa(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ic(e.width,e.height,e.widthSegments,e.heightSegments)}}function oo(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];if(jv(l))l.isRenderTargetTexture?(ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(jv(l[0])){const c=[];for(let d=0,h=l.length;d<h;d++)c[d]=l[d].clone();e[i][s]=c}else e[i][s]=l.slice();else e[i][s]=l}}return e}function Xn(o){const e={};for(let i=0;i<o.length;i++){const s=oo(o[i]);for(const l in s)e[l]=s[l]}return e}function jv(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function WT(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function ex(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ie.workingColorSpace}const qT={clone:oo,merge:Xn};var YT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bi extends bl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=YT,this.fragmentShader=ZT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oo(e.uniforms),this.uniformsGroups=WT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const s in e.uniforms){const l=e.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new ke().setHex(l.value);break;case"v2":this.uniforms[s].value=new Ge().fromArray(l.value);break;case"v3":this.uniforms[s].value=new ct().fromArray(l.value);break;case"v4":this.uniforms[s].value=new fn().fromArray(l.value);break;case"m3":this.uniforms[s].value=new ge().fromArray(l.value);break;case"m4":this.uniforms[s].value=new dn().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class KT extends Bi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class jT extends bl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=aT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class QT extends bl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gc=new ct,_c=new lo,ta=new ct;class nx extends Jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=aa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(gc,_c,ta),ta.x===1&&ta.y===1&&ta.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gc,_c,ta.set(1,1,1)).invert()}updateWorldMatrix(e,i,s=!1){super.updateWorldMatrix(e,i,s),this.matrixWorld.decompose(gc,_c,ta),ta.x===1&&ta.y===1&&ta.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gc,_c,ta.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const gs=new ct,Qv=new Ge,Jv=new Ge;class Oi extends nx{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Fp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fp*2*Math.atan(Math.tan(bh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){gs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gs.x,gs.y).multiplyScalar(-e/gs.z),gs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(gs.x,gs.y).multiplyScalar(-e/gs.z)}getViewSize(e,i){return this.getViewBounds(e,Qv,Jv),i.subVectors(Jv,Qv)}setViewOffset(e,i,s,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(bh*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;c+=d.offsetX*l/p,i-=d.offsetY*s/m,l*=d.width/p,s*=d.height/m}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class im extends nx{constructor(e=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,d=s+e,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,d=c+m*this.view.width,h-=S*this.view.offsetY,p=h-S*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Jr=-90,$r=1;class JT extends Jn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Oi(Jr,$r,e,i);l.layers=this.layers,this.add(l);const c=new Oi(Jr,$r,e,i);c.layers=this.layers,this.add(c);const d=new Oi(Jr,$r,e,i);d.layers=this.layers,this.add(d);const h=new Oi(Jr,$r,e,i);h.layers=this.layers,this.add(h);const p=new Oi(Jr,$r,e,i);p.layers=this.layers,this.add(p);const m=new Oi(Jr,$r,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,h,p]=i;for(const m of i)this.remove(m);if(e===aa)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Nc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,p,m,S]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),R=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(s,2,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(s,3,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,4,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,S),e.setRenderTarget(_,v,E),e.xr.enabled=R,s.texture.needsPMREMUpdate=!0}}class $T extends Oi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const $v=new dn;class tb{constructor(e,i,s=0,l=1/0){this.ray=new nm(e,i),this.near=s,this.far=l,this.camera=null,this.layers=new em,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,i.projectionMatrix.elements[14]).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Fe("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return $v.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($v),this}intersectObject(e,i=!0,s=[]){return Gp(e,this,s,i),s.sort(tS),s}intersectObjects(e,i=!0,s=[]){for(let l=0,c=e.length;l<c;l++)Gp(e[l],this,s,i);return s.sort(tS),s}}function tS(o,e){return o.distance-e.distance}function Gp(o,e,i,s){let l=!0;if(o.layers.test(e.layers)&&o.raycast(e,i)===!1&&(l=!1),l===!0&&s===!0){const c=o.children;for(let d=0,h=c.length;d<h;d++)Gp(c[d],e,i,!0)}}const lm=class lm{constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=s,c[3]=l,this}};lm.prototype.isMatrix2=!0;let eS=lm;function nS(o,e,i,s){const l=eb(s);switch(i){case XS:return o*e;case WS:return o*e/l.components*l.byteLength;case Kp:return o*e/l.components*l.byteLength;case Js:return o*e*2/l.components*l.byteLength;case jp:return o*e*2/l.components*l.byteLength;case kS:return o*e*3/l.components*l.byteLength;case Ii:return o*e*4/l.components*l.byteLength;case Qp:return o*e*4/l.components*l.byteLength;case yc:case Mc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Ec:case Tc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case cp:case dp:return Math.max(o,16)*Math.max(e,8)/4;case up:case fp:return Math.max(o,8)*Math.max(e,8)/2;case hp:case pp:case gp:case _p:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case mp:case Rc:case vp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Sp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case xp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case yp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Mp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Ep:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Tp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case bp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Ap:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Rp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Cp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case wp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Dp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Np:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Up:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Lp:case Op:case Pp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Ip:case zp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Cc:case Bp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function eb(o){switch(o){case Ti:case FS:return{byteLength:1,components:1};case yl:case HS:case ua:return{byteLength:2,components:1};case Yp:case Zp:return{byteLength:2,components:4};case la:case qp:case ia:return{byteLength:4,components:1};case GS:case VS:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wp}}));typeof window<"u"&&(window.__THREE__?ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wp);function ix(){let o=null,e=!1,i=null,s=null;function l(c,d){s=o.requestAnimationFrame(l),i(c,d)}return{start:function(){e!==!0&&i!==null&&o!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function nb(o){const e=new WeakMap;function i(h,p){const m=h.array,S=h.usage,_=m.byteLength,v=o.createBuffer();o.bindBuffer(p,v),o.bufferData(p,m,S),h.onUploadCallback();let E;if(m instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)E=o.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)E=o.SHORT;else if(m instanceof Uint32Array)E=o.UNSIGNED_INT;else if(m instanceof Int32Array)E=o.INT;else if(m instanceof Int8Array)E=o.BYTE;else if(m instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:E,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:_}}function s(h,p,m){const S=p.array,_=p.updateRanges;if(o.bindBuffer(m,h),_.length===0)o.bufferSubData(m,0,S);else{_.sort((E,R)=>E.start-R.start);let v=0;for(let E=1;E<_.length;E++){const R=_[v],C=_[E];C.start<=R.start+R.count+1?R.count=Math.max(R.count,C.start+C.count-R.start):(++v,_[v]=C)}_.length=v+1;for(let E=0,R=_.length;E<R;E++){const C=_[E];o.bufferSubData(m,C.start*S.BYTES_PER_ELEMENT,S,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(o.deleteBuffer(p.buffer),e.delete(h))}function d(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const S=e.get(h);(!S||S.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,h,p),m.version=h.version}}return{get:l,remove:c,update:d}}var ib=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ab=`#ifdef USE_ALPHAHASH
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
#endif`,sb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ob=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ub=`#ifdef USE_AOMAP
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
#endif`,cb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fb=`#ifdef USE_BATCHING
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
#endif`,db=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gb=`#ifdef USE_IRIDESCENCE
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
#endif`,_b=`#ifdef USE_BUMPMAP
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
#endif`,vb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Eb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Tb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,bb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ab=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Rb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cb=`vec3 transformedNormal = objectNormal;
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
#endif`,wb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Db=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ub=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ob=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif`,Ib=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,zb=`#ifdef USE_ENVMAP
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
#endif`,Bb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Hb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kb=`#ifdef USE_GRADIENTMAP
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
}`,Wb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zb=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#include <lightprobes_pars_fragment>`,Kb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,jb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$b=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,t1=`PhysicalMaterial material;
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
#endif`,e1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
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
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
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
}`,n1=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,i1=`#if defined( RE_IndirectDiffuse )
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
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,a1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,s1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,r1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,o1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,c1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,f1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,d1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,h1=`#if defined( USE_POINTS_UV )
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
#endif`,p1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,m1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,g1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,v1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,S1=`#ifdef USE_MORPHTARGETS
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
#endif`,x1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,M1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,E1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,A1=`#ifdef USE_NORMALMAP
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
#endif`,R1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,C1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,w1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,D1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,N1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,U1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,L1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,O1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,P1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,I1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,z1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,B1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,F1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
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
#endif`,H1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,G1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,V1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
}`,X1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,k1=`#ifdef USE_SKINNING
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
#endif`,W1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,q1=`#ifdef USE_SKINNING
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
#endif`,Y1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Z1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,K1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,j1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Q1=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,J1=`#ifdef USE_TRANSMISSION
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
#endif`,$1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aA=`uniform sampler2D t2D;
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
}`,sA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,oA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uA=`#include <common>
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
}`,cA=`#if DEPTH_PACKING == 3200
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
}`,fA=`#define DISTANCE
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
}`,dA=`#define DISTANCE
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
void main() {
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
}`,hA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mA=`uniform float scale;
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
}`,gA=`uniform vec3 diffuse;
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
}`,_A=`#include <common>
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
}`,vA=`uniform vec3 diffuse;
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
}`,SA=`#define LAMBERT
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
}`,xA=`#define LAMBERT
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
}`,yA=`#define MATCAP
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
}`,MA=`#define MATCAP
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
}`,EA=`#define NORMAL
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
}`,TA=`#define NORMAL
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
}`,bA=`#define PHONG
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
}`,AA=`#define PHONG
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
}`,RA=`#define STANDARD
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
}`,CA=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
}`,wA=`#define TOON
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
}`,DA=`#define TOON
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
}`,NA=`uniform float size;
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
}`,UA=`uniform vec3 diffuse;
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
}`,LA=`#include <common>
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
}`,OA=`uniform vec3 color;
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
}`,PA=`uniform float rotation;
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
}`,IA=`uniform vec3 diffuse;
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
}`,Te={alphahash_fragment:ib,alphahash_pars_fragment:ab,alphamap_fragment:sb,alphamap_pars_fragment:rb,alphatest_fragment:ob,alphatest_pars_fragment:lb,aomap_fragment:ub,aomap_pars_fragment:cb,batching_pars_vertex:fb,batching_vertex:db,begin_vertex:hb,beginnormal_vertex:pb,bsdfs:mb,iridescence_fragment:gb,bumpmap_pars_fragment:_b,clipping_planes_fragment:vb,clipping_planes_pars_fragment:Sb,clipping_planes_pars_vertex:xb,clipping_planes_vertex:yb,color_fragment:Mb,color_pars_fragment:Eb,color_pars_vertex:Tb,color_vertex:bb,common:Ab,cube_uv_reflection_fragment:Rb,defaultnormal_vertex:Cb,displacementmap_pars_vertex:wb,displacementmap_vertex:Db,emissivemap_fragment:Nb,emissivemap_pars_fragment:Ub,colorspace_fragment:Lb,colorspace_pars_fragment:Ob,envmap_fragment:Pb,envmap_common_pars_fragment:Ib,envmap_pars_fragment:zb,envmap_pars_vertex:Bb,envmap_physical_pars_fragment:Kb,envmap_vertex:Fb,fog_vertex:Hb,fog_pars_vertex:Gb,fog_fragment:Vb,fog_pars_fragment:Xb,gradientmap_pars_fragment:kb,lightmap_pars_fragment:Wb,lights_lambert_fragment:qb,lights_lambert_pars_fragment:Yb,lights_pars_begin:Zb,lights_toon_fragment:jb,lights_toon_pars_fragment:Qb,lights_phong_fragment:Jb,lights_phong_pars_fragment:$b,lights_physical_fragment:t1,lights_physical_pars_fragment:e1,lights_fragment_begin:n1,lights_fragment_maps:i1,lights_fragment_end:a1,lightprobes_pars_fragment:s1,logdepthbuf_fragment:r1,logdepthbuf_pars_fragment:o1,logdepthbuf_pars_vertex:l1,logdepthbuf_vertex:u1,map_fragment:c1,map_pars_fragment:f1,map_particle_fragment:d1,map_particle_pars_fragment:h1,metalnessmap_fragment:p1,metalnessmap_pars_fragment:m1,morphinstance_vertex:g1,morphcolor_vertex:_1,morphnormal_vertex:v1,morphtarget_pars_vertex:S1,morphtarget_vertex:x1,normal_fragment_begin:y1,normal_fragment_maps:M1,normal_pars_fragment:E1,normal_pars_vertex:T1,normal_vertex:b1,normalmap_pars_fragment:A1,clearcoat_normal_fragment_begin:R1,clearcoat_normal_fragment_maps:C1,clearcoat_pars_fragment:w1,iridescence_pars_fragment:D1,opaque_fragment:N1,packing:U1,premultiplied_alpha_fragment:L1,project_vertex:O1,dithering_fragment:P1,dithering_pars_fragment:I1,roughnessmap_fragment:z1,roughnessmap_pars_fragment:B1,shadowmap_pars_fragment:F1,shadowmap_pars_vertex:H1,shadowmap_vertex:G1,shadowmask_pars_fragment:V1,skinbase_vertex:X1,skinning_pars_vertex:k1,skinning_vertex:W1,skinnormal_vertex:q1,specularmap_fragment:Y1,specularmap_pars_fragment:Z1,tonemapping_fragment:K1,tonemapping_pars_fragment:j1,transmission_fragment:Q1,transmission_pars_fragment:J1,uv_pars_fragment:$1,uv_pars_vertex:tA,uv_vertex:eA,worldpos_vertex:nA,background_vert:iA,background_frag:aA,backgroundCube_vert:sA,backgroundCube_frag:rA,cube_vert:oA,cube_frag:lA,depth_vert:uA,depth_frag:cA,distance_vert:fA,distance_frag:dA,equirect_vert:hA,equirect_frag:pA,linedashed_vert:mA,linedashed_frag:gA,meshbasic_vert:_A,meshbasic_frag:vA,meshlambert_vert:SA,meshlambert_frag:xA,meshmatcap_vert:yA,meshmatcap_frag:MA,meshnormal_vert:EA,meshnormal_frag:TA,meshphong_vert:bA,meshphong_frag:AA,meshphysical_vert:RA,meshphysical_frag:CA,meshtoon_vert:wA,meshtoon_frag:DA,points_vert:NA,points_frag:UA,shadow_vert:LA,shadow_frag:OA,sprite_vert:PA,sprite_frag:IA},Gt={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ge}},envmap:{envMap:{value:null},envMapRotation:{value:new ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ge},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ct},probesMax:{value:new ct},probesResolution:{value:new ct}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0},uvTransform:{value:new ge}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}}},na={basic:{uniforms:Xn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:Xn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new ke(0)},envMapIntensity:{value:1}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:Xn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:Xn([Gt.common,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.roughnessmap,Gt.metalnessmap,Gt.fog,Gt.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},toon:{uniforms:Xn([Gt.common,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.gradientmap,Gt.fog,Gt.lights,{emissive:{value:new ke(0)}}]),vertexShader:Te.meshtoon_vert,fragmentShader:Te.meshtoon_frag},matcap:{uniforms:Xn([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:Xn([Gt.points,Gt.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:Xn([Gt.common,Gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:Xn([Gt.common,Gt.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:Xn([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,{opacity:{value:1}}]),vertexShader:Te.meshnormal_vert,fragmentShader:Te.meshnormal_frag},sprite:{uniforms:Xn([Gt.sprite,Gt.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ge}},vertexShader:Te.backgroundCube_vert,fragmentShader:Te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distance:{uniforms:Xn([Gt.common,Gt.displacementmap,{referencePosition:{value:new ct},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distance_vert,fragmentShader:Te.distance_frag},shadow:{uniforms:Xn([Gt.lights,Gt.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};na.physical={uniforms:Xn([na.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ge},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ge},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ge},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ge},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ge},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ge},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ge}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};const vc={r:0,b:0,g:0},zA=new dn,ax=new ge;ax.set(-1,0,0,0,1,0,0,0,1);function BA(o,e,i,s,l,c){const d=new ke(0);let h=l===!0?0:1,p,m,S=null,_=0,v=null;function E(L){let G=L.isScene===!0?L.background:null;if(G&&G.isTexture){const w=L.backgroundBlurriness>0;G=e.get(G,w)}return G}function R(L){let G=!1;const w=E(L);w===null?y(d,h):w&&w.isColor&&(y(w,1),G=!0);const N=o.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,c):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||G)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function C(L,G){const w=E(G);w&&(w.isCubeTexture||w.mapping===Oc)?(m===void 0&&(m=new za(new Al(1,1,1),new Bi({name:"BackgroundCubeMaterial",uniforms:oo(na.backgroundCube.uniforms),vertexShader:na.backgroundCube.vertexShader,fragmentShader:na.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(N,U,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),m.material.uniforms.envMap.value=w,m.material.uniforms.backgroundBlurriness.value=G.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=G.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(zA.makeRotationFromEuler(G.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(ax),m.material.toneMapped=Ie.getTransfer(w.colorSpace)!==Qe,(S!==w||_!==w.version||v!==o.toneMapping)&&(m.material.needsUpdate=!0,S=w,_=w.version,v=o.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null)):w&&w.isTexture&&(p===void 0&&(p=new za(new Ic(2,2),new Bi({name:"BackgroundMaterial",uniforms:oo(na.background.uniforms),vertexShader:na.background.vertexShader,fragmentShader:na.background.fragmentShader,side:js,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=w,p.material.uniforms.backgroundIntensity.value=G.backgroundIntensity,p.material.toneMapped=Ie.getTransfer(w.colorSpace)!==Qe,w.matrixAutoUpdate===!0&&w.updateMatrix(),p.material.uniforms.uvTransform.value.copy(w.matrix),(S!==w||_!==w.version||v!==o.toneMapping)&&(p.material.needsUpdate=!0,S=w,_=w.version,v=o.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function y(L,G){L.getRGB(vc,ex(o)),i.buffers.color.setClear(vc.r,vc.g,vc.b,G,c)}function x(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,G=1){d.set(L),h=G,y(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(L){h=L,y(d,h)},render:R,addToRenderList:C,dispose:x}}function FA(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=v(null);let c=l,d=!1;function h(Y,$,ut,K,tt){let k=!1;const W=_(Y,K,ut,$);c!==W&&(c=W,m(c.object)),k=E(Y,K,ut,tt),k&&R(Y,K,ut,tt),tt!==null&&e.update(tt,o.ELEMENT_ARRAY_BUFFER),(k||d)&&(d=!1,w(Y,$,ut,K),tt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(tt).buffer))}function p(){return o.createVertexArray()}function m(Y){return o.bindVertexArray(Y)}function S(Y){return o.deleteVertexArray(Y)}function _(Y,$,ut,K){const tt=K.wireframe===!0;let k=s[$.id];k===void 0&&(k={},s[$.id]=k);const W=Y.isInstancedMesh===!0?Y.id:0;let ft=k[W];ft===void 0&&(ft={},k[W]=ft);let ot=ft[ut.id];ot===void 0&&(ot={},ft[ut.id]=ot);let pt=ot[tt];return pt===void 0&&(pt=v(p()),ot[tt]=pt),pt}function v(Y){const $=[],ut=[],K=[];for(let tt=0;tt<i;tt++)$[tt]=0,ut[tt]=0,K[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:ut,attributeDivisors:K,object:Y,attributes:{},index:null}}function E(Y,$,ut,K){const tt=c.attributes,k=$.attributes;let W=0;const ft=ut.getAttributes();for(const ot in ft)if(ft[ot].location>=0){const Et=tt[ot];let Zt=k[ot];if(Zt===void 0&&(ot==="instanceMatrix"&&Y.instanceMatrix&&(Zt=Y.instanceMatrix),ot==="instanceColor"&&Y.instanceColor&&(Zt=Y.instanceColor)),Et===void 0||Et.attribute!==Zt||Zt&&Et.data!==Zt.data)return!0;W++}return c.attributesNum!==W||c.index!==K}function R(Y,$,ut,K){const tt={},k=$.attributes;let W=0;const ft=ut.getAttributes();for(const ot in ft)if(ft[ot].location>=0){let Et=k[ot];Et===void 0&&(ot==="instanceMatrix"&&Y.instanceMatrix&&(Et=Y.instanceMatrix),ot==="instanceColor"&&Y.instanceColor&&(Et=Y.instanceColor));const Zt={};Zt.attribute=Et,Et&&Et.data&&(Zt.data=Et.data),tt[ot]=Zt,W++}c.attributes=tt,c.attributesNum=W,c.index=K}function C(){const Y=c.newAttributes;for(let $=0,ut=Y.length;$<ut;$++)Y[$]=0}function y(Y){x(Y,0)}function x(Y,$){const ut=c.newAttributes,K=c.enabledAttributes,tt=c.attributeDivisors;ut[Y]=1,K[Y]===0&&(o.enableVertexAttribArray(Y),K[Y]=1),tt[Y]!==$&&(o.vertexAttribDivisor(Y,$),tt[Y]=$)}function L(){const Y=c.newAttributes,$=c.enabledAttributes;for(let ut=0,K=$.length;ut<K;ut++)$[ut]!==Y[ut]&&(o.disableVertexAttribArray(ut),$[ut]=0)}function G(Y,$,ut,K,tt,k,W){W===!0?o.vertexAttribIPointer(Y,$,ut,tt,k):o.vertexAttribPointer(Y,$,ut,K,tt,k)}function w(Y,$,ut,K){C();const tt=K.attributes,k=ut.getAttributes(),W=$.defaultAttributeValues;for(const ft in k){const ot=k[ft];if(ot.location>=0){let pt=tt[ft];if(pt===void 0&&(ft==="instanceMatrix"&&Y.instanceMatrix&&(pt=Y.instanceMatrix),ft==="instanceColor"&&Y.instanceColor&&(pt=Y.instanceColor)),pt!==void 0){const Et=pt.normalized,Zt=pt.itemSize,jt=e.get(pt);if(jt===void 0)continue;const z=jt.buffer,gt=jt.type,Rt=jt.bytesPerElement,Z=gt===o.INT||gt===o.UNSIGNED_INT||pt.gpuType===qp;if(pt.isInterleavedBufferAttribute){const ht=pt.data,bt=ht.stride,It=pt.offset;if(ht.isInstancedInterleavedBuffer){for(let mt=0;mt<ot.locationSize;mt++)x(ot.location+mt,ht.meshPerAttribute);Y.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let mt=0;mt<ot.locationSize;mt++)y(ot.location+mt);o.bindBuffer(o.ARRAY_BUFFER,z);for(let mt=0;mt<ot.locationSize;mt++)G(ot.location+mt,Zt/ot.locationSize,gt,Et,bt*Rt,(It+Zt/ot.locationSize*mt)*Rt,Z)}else{if(pt.isInstancedBufferAttribute){for(let ht=0;ht<ot.locationSize;ht++)x(ot.location+ht,pt.meshPerAttribute);Y.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let ht=0;ht<ot.locationSize;ht++)y(ot.location+ht);o.bindBuffer(o.ARRAY_BUFFER,z);for(let ht=0;ht<ot.locationSize;ht++)G(ot.location+ht,Zt/ot.locationSize,gt,Et,Zt*Rt,Zt/ot.locationSize*ht*Rt,Z)}}else if(W!==void 0){const Et=W[ft];if(Et!==void 0)switch(Et.length){case 2:o.vertexAttrib2fv(ot.location,Et);break;case 3:o.vertexAttrib3fv(ot.location,Et);break;case 4:o.vertexAttrib4fv(ot.location,Et);break;default:o.vertexAttrib1fv(ot.location,Et)}}}}L()}function N(){O();for(const Y in s){const $=s[Y];for(const ut in $){const K=$[ut];for(const tt in K){const k=K[tt];for(const W in k)S(k[W].object),delete k[W];delete K[tt]}}delete s[Y]}}function U(Y){if(s[Y.id]===void 0)return;const $=s[Y.id];for(const ut in $){const K=$[ut];for(const tt in K){const k=K[tt];for(const W in k)S(k[W].object),delete k[W];delete K[tt]}}delete s[Y.id]}function P(Y){for(const $ in s){const ut=s[$];for(const K in ut){const tt=ut[K];if(tt[Y.id]===void 0)continue;const k=tt[Y.id];for(const W in k)S(k[W].object),delete k[W];delete tt[Y.id]}}}function T(Y){for(const $ in s){const ut=s[$],K=Y.isInstancedMesh===!0?Y.id:0,tt=ut[K];if(tt!==void 0){for(const k in tt){const W=tt[k];for(const ft in W)S(W[ft].object),delete W[ft];delete tt[k]}delete ut[K],Object.keys(ut).length===0&&delete s[$]}}}function O(){V(),d=!0,c!==l&&(c=l,m(c.object))}function V(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:O,resetDefaultState:V,dispose:N,releaseStatesOfGeometry:U,releaseStatesOfObject:T,releaseStatesOfProgram:P,initAttributes:C,enableAttribute:y,disableUnusedAttributes:L}}function HA(o,e,i){let s;function l(p){s=p}function c(p,m){o.drawArrays(s,p,m),i.update(m,s,1)}function d(p,m,S){S!==0&&(o.drawArraysInstanced(s,p,m,S),i.update(m,s,S))}function h(p,m,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,m,0,S);let v=0;for(let E=0;E<S;E++)v+=m[E];i.update(v,s,1)}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h}function GA(o,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(P){return!(P!==Ii&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const T=P===ua&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Ti&&P!==ia&&!T&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE))}function p(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const S=p(m);S!==m&&(ce("WebGLRenderer:",m,"not supported, using",S,"instead."),m=S);const _=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&v===!1&&ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),L=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),G=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),N=o.getParameter(o.MAX_SAMPLES),U=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:E,maxVertexTextures:R,maxTextureSize:C,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:L,maxVaryings:G,maxFragmentUniforms:w,maxSamples:N,samples:U}}function VA(o){const e=this;let i=null,s=0,l=!1,c=!1;const d=new _s,h=new ge,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const E=_.length!==0||v||s!==0||l;return l=v,s=_.length,E},this.beginShadows=function(){c=!0,S(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){i=S(_,v,0)},this.setState=function(_,v,E){const R=_.clippingPlanes,C=_.clipIntersection,y=_.clipShadows,x=o.get(_);if(!l||R===null||R.length===0||c&&!y)c?S(null):m();else{const L=c?0:s,G=L*4;let w=x.clippingState||null;p.value=w,w=S(R,v,G,E);for(let N=0;N!==G;++N)w[N]=i[N];x.clippingState=w,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=L}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function S(_,v,E,R){const C=_!==null?_.length:0;let y=null;if(C!==0){if(y=p.value,R!==!0||y===null){const x=E+C*4,L=v.matrixWorldInverse;h.getNormalMatrix(L),(y===null||y.length<x)&&(y=new Float32Array(x));for(let G=0,w=E;G!==C;++G,w+=4)d.copy(_[G]).applyMatrix4(L,h),d.normal.toArray(y,w),y[w+3]=d.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}const no=4,XA=6,kA=20,WA=256,pl=new im,iS=new ke;let Yh=null,Zh=0,Kh=0,jh=!1;const qA=new ct,Ys=new ct;class aS{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:d=256,position:h=qA}=c;Yh=this._renderer.getRenderTarget(),Zh=this._renderer.getActiveCubeFace(),Kh=this._renderer.getActiveMipmapLevel(),jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,s,l,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Yh,Zh,Kh),this._renderer.xr.enabled=jh,e.scissorTest=!1,to(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Qs||e.mapping===ro?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yh=this._renderer.getRenderTarget(),Zh=this._renderer.getActiveCubeFace(),Kh=this._renderer.getActiveMipmapLevel(),jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:ua,format:Ii,colorSpace:wc,depthBuffer:!1},l=sS(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sS(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=YA(c)),this._blurMaterial=KA(c,e,i),this._ggxMaterial=ZA(c,e,i)}return l}_compileMaterial(e){const i=new za(new Fi,e);this._renderer.compile(i,pl)}_sceneToCubeUV(e,i,s,l,c){const p=new Oi(90,1,i,s),m=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,E=_.toneMapping;_.getClearColor(iS),_.toneMapping=sa,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new za(new Al,new QS({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let x=!1;const L=e.background;L?L.isColor&&(y.color.copy(L),e.background=null,x=!0):(y.color.copy(iS),x=!0);for(let G=0;G<6;G++){const w=G%3;w===0?(p.up.set(0,m[G],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+S[G],c.y,c.z)):w===1?(p.up.set(0,0,m[G]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+S[G],c.z)):(p.up.set(0,m[G],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+S[G]));const N=this._cubeSize;to(l,w*N,G>2?N:0,N,N),_.setRenderTarget(l),x&&_.render(C,p),_.render(e,p)}_.toneMapping=E,_.autoClear=v,e.background=L}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Qs||e.mapping===ro;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=oS()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rS());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const h=c.uniforms;h.envMap.value=e;const p=this._cubeSize;to(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(d,pl)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const p=d.uniforms,m=s/(this._lodMeshes.length-1),S=i/(this._lodMeshes.length-1),_=Math.sqrt(m*m-S*S),v=m*1.25,E=_*v,{_lodMax:R}=this,C=this._sizeLods[s],y=3*C*(s>R-no?s-R+no:0),x=4*(this._cubeSize-C);p.envMap.value=e.texture,p.roughness.value=E,p.mipInt.value=R-i,to(c,y,x,3*C,2*C),l.setRenderTarget(c),l.render(h,pl),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=R-s,to(e,y,x,3*C,2*C),l.setRenderTarget(e),l.render(h,pl)}_blur(e,i,s,l){const c=this._pingPongRenderTarget,d=Math.min(l,Math.PI)/Math.SQRT2;this._blurPass(e,c,i,s,d),this._blurPass(c,e,s,s,d)}_blurPass(e,i,s,l,c){const d=this._renderer,h=this._blurMaterial,p=this._lodMeshes[l];p.material=h;const m=h.uniforms;m.envMap.value=e.texture,m.sigma.value=c,m.mipInt.value=this._lodMax-s;const S=this._sizeLods[l],_=3*S*(l>this._lodMax-no?l-this._lodMax+no:0),v=4*(this._cubeSize-S);to(i,_,v,3*S,2*S),d.setRenderTarget(i),d.render(p,pl)}}function YA(o){const e=[],i=[];let s=o;const l=o-no+1+XA;for(let c=0;c<l;c++){const d=Math.pow(2,s);e.push(d);const h=1/(d-2),p=-h,m=1+h,S=[p,p,m,p,m,m,p,p,m,m,p,m],_=6,v=6,E=3,R=new Float32Array(E*v*_),C=new Float32Array(E*v*_);for(let x=0;x<_;x++){const L=x%3*2/3-1,G=x>2?0:-1,w=[L,G,0,L+2/3,G,0,L+2/3,G+1,0,L,G,0,L+2/3,G+1,0,L,G+1,0];R.set(w,E*v*x);for(let N=0;N<v;N++){const U=S[N*2]*2-1,P=S[N*2+1]*2-1;x===0?Ys.set(1,P,U):x===1?Ys.set(-U,1,-P):x===2?Ys.set(-U,P,1):x===3?Ys.set(-1,P,-U):x===4?Ys.set(-U,-1,P):Ys.set(U,P,-1),Ys.toArray(C,(x*v+N)*E)}}const y=new Fi;y.setAttribute("position",new ra(R,E)),y.setAttribute("outputDirection",new ra(C,E)),i.push(new za(y,null)),s>no&&s--}return{lodMeshes:i,sizeLods:e}}function sS(o,e,i){const s=new zi(o,e,i);return s.texture.mapping=Oc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function to(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function ZA(o,e,i){return new Bi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:WA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zc(),fragmentShader:`

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
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function KA(o,e,i){return new Bi({name:"SphericalGaussianBlur",defines:{SAMPLES:kA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:zc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function rS(){return new Bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zc(),fragmentShader:`

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
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function oS(){return new Bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function zc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class sx extends zi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new $S(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Al(5,5,5),c=new Bi({name:"CubemapFromEquirect",uniforms:oo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Qn,blending:Oa});c.uniforms.tEquirect.value=i;const d=new za(l,c),h=i.minFilter;return i.minFilter===Zs&&(i.minFilter=zn),new JT(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,l);e.setRenderTarget(c)}}function jA(o){let e=new WeakMap,i=new WeakMap,s=null;function l(v,E=!1){return v==null?null:E?d(v):c(v)}function c(v){if(v&&v.isTexture){const E=v.mapping;if(E===yh||E===Mh)if(e.has(v)){const R=e.get(v).texture;return h(R,v.mapping)}else{const R=v.image;if(R&&R.height>0){const C=new sx(R.height);return C.fromEquirectangularTexture(o,v),e.set(v,C),v.addEventListener("dispose",m),h(C.texture,v.mapping)}else return null}}return v}function d(v){if(v&&v.isTexture){const E=v.mapping,R=E===yh||E===Mh,C=E===Qs||E===ro;if(R||C){let y=i.get(v);const x=y!==void 0?y.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==x)return s===null&&(s=new aS(o)),y=R?s.fromEquirectangular(v,y):s.fromCubemap(v,y),y.texture.pmremVersion=v.pmremVersion,i.set(v,y),y.texture;if(y!==void 0)return y.texture;{const L=v.image;return R&&L&&L.height>0||C&&L&&p(L)?(s===null&&(s=new aS(o)),y=R?s.fromEquirectangular(v):s.fromCubemap(v),y.texture.pmremVersion=v.pmremVersion,i.set(v,y),v.addEventListener("dispose",S),y.texture):null}}}return v}function h(v,E){return E===yh?v.mapping=Qs:E===Mh&&(v.mapping=ro),v}function p(v){let E=0;const R=6;for(let C=0;C<R;C++)v[C]!==void 0&&E++;return E===R}function m(v){const E=v.target;E.removeEventListener("dispose",m);const R=e.get(E);R!==void 0&&(e.delete(E),R.dispose())}function S(v){const E=v.target;E.removeEventListener("dispose",S);const R=i.get(E);R!==void 0&&(i.delete(E),R.dispose())}function _(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:_}}function QA(o){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=o.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&io("WebGLRenderer: "+s+" extension not supported."),l}}}function JA(o,e,i,s){const l={},c=new WeakMap;function d(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const R in v.attributes)e.remove(v.attributes[R]);v.removeEventListener("dispose",d),delete l[v.id];const E=c.get(v);E&&(e.remove(E),c.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(_,v){return l[v.id]===!0||(v.addEventListener("dispose",d),l[v.id]=!0,i.memory.geometries++),v}function p(_){const v=_.attributes;for(const E in v)e.update(v[E],o.ARRAY_BUFFER)}function m(_){const v=[],E=_.index,R=_.attributes.position;let C=0;if(R===void 0)return;if(E!==null){const L=E.array;C=E.version;for(let G=0,w=L.length;G<w;G+=3){const N=L[G+0],U=L[G+1],P=L[G+2];v.push(N,U,U,P,P,N)}}else{const L=R.array;C=R.version;for(let G=0,w=L.length/3-1;G<w;G+=3){const N=G+0,U=G+1,P=G+2;v.push(N,U,U,P,P,N)}}const y=new(R.count>=65535?jS:KS)(v,1);y.version=C;const x=c.get(_);x&&e.remove(x),c.set(_,y)}function S(_){const v=c.get(_);if(v){const E=_.index;E!==null&&v.version<E.version&&m(_)}else m(_);return c.get(_)}return{get:h,update:p,getWireframeAttribute:S}}function $A(o,e,i){let s;function l(_){s=_}let c,d;function h(_){c=_.type,d=_.bytesPerElement}function p(_,v){o.drawElements(s,v,c,_*d),i.update(v,s,1)}function m(_,v,E){E!==0&&(o.drawElementsInstanced(s,v,c,_*d,E),i.update(v,s,E))}function S(_,v,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,v,0,c,_,0,E);let C=0;for(let y=0;y<E;y++)C+=v[y];i.update(C,s,1)}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=S}function tR(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(c/3);break;case o.LINES:i.lines+=h*(c/2);break;case o.LINE_STRIP:i.lines+=h*(c-1);break;case o.LINE_LOOP:i.lines+=h*c;break;case o.POINTS:i.points+=h*c;break;default:Fe("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function eR(o,e,i){const s=new WeakMap,l=new fn;function c(d,h,p){const m=d.morphTargetInfluences,S=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=S!==void 0?S.length:0;let v=s.get(h);if(v===void 0||v.count!==_){let V=function(){T.dispose(),s.delete(h),h.removeEventListener("dispose",V)};var E=V;v!==void 0&&v.texture.dispose();const R=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],G=h.morphAttributes.color||[];let w=0;R===!0&&(w=1),C===!0&&(w=2),y===!0&&(w=3);let N=h.attributes.position.count*w,U=1;N>e.maxTextureSize&&(U=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const P=new Float32Array(N*U*4*_),T=new YS(P,N,U,_);T.type=ia,T.needsUpdate=!0;const O=w*4;for(let Y=0;Y<_;Y++){const $=x[Y],ut=L[Y],K=G[Y],tt=N*U*4*Y;for(let k=0;k<$.count;k++){const W=k*O;R===!0&&(l.fromBufferAttribute($,k),P[tt+W+0]=l.x,P[tt+W+1]=l.y,P[tt+W+2]=l.z,P[tt+W+3]=0),C===!0&&(l.fromBufferAttribute(ut,k),P[tt+W+4]=l.x,P[tt+W+5]=l.y,P[tt+W+6]=l.z,P[tt+W+7]=0),y===!0&&(l.fromBufferAttribute(K,k),P[tt+W+8]=l.x,P[tt+W+9]=l.y,P[tt+W+10]=l.z,P[tt+W+11]=K.itemSize===4?l.w:1)}}v={count:_,texture:T,size:new Ge(N,U)},s.set(h,v),h.addEventListener("dispose",V)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let R=0;for(let y=0;y<m.length;y++)R+=m[y];const C=h.morphTargetsRelative?1:1-R;p.getUniforms().setValue(o,"morphTargetBaseInfluence",C),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",v.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:c}}function nR(o,e,i,s,l){let c=new WeakMap;function d(m){const S=l.render.frame,_=m.geometry,v=e.get(m,_);if(c.get(v)!==S&&(e.update(v),c.set(v,S)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),c.get(m)!==S&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),c.set(m,S))),m.isSkinnedMesh){const E=m.skeleton;c.get(E)!==S&&(E.update(),c.set(E,S))}return v}function h(){c=new WeakMap}function p(m){const S=m.target;S.removeEventListener("dispose",p),s.releaseStatesOfObject(S),i.remove(S.instanceMatrix),S.instanceColor!==null&&i.remove(S.instanceColor)}return{update:d,dispose:h}}const iR={[NS]:"LINEAR_TONE_MAPPING",[US]:"REINHARD_TONE_MAPPING",[LS]:"CINEON_TONE_MAPPING",[OS]:"ACES_FILMIC_TONE_MAPPING",[IS]:"AGX_TONE_MAPPING",[zS]:"NEUTRAL_TONE_MAPPING",[PS]:"CUSTOM_TONE_MAPPING"};function aR(o,e,i,s,l,c){const d=new zi(e,i,{type:o,depthBuffer:l,stencilBuffer:c,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,p=null;const m=new Fi;m.setAttribute("position",new oa([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new oa([0,2,0,0,2,0],2));const S=new KT({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),_=new za(m,S),v=new im(-1,1,1,-1,0,1);let E=null,R=null,C=!1,y,x=null,L=[],G=!1;this.setSize=function(w,N){d.setSize(w,N),h!==null&&h.setSize(w,N),p!==null&&p.setSize(w,N);for(let U=0;U<L.length;U++){const P=L[U];P.setSize&&P.setSize(w,N)}},this.setEffects=function(w){L=w,G=L.length>0&&L[0].isRenderPass===!0;const N=d.width,U=d.height;L.length>0&&h===null&&(h=new zi(N,U,{type:ua,depthBuffer:!1,stencilBuffer:!1}),p=new zi(N,U,{type:ua,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<L.length;P++){const T=L[P];T.setSize&&T.setSize(N,U)}},this.begin=function(w,N){if(C||w.toneMapping===sa&&L.length===0)return!1;if(x=N,N!==null){const U=N.width,P=N.height;(d.width!==U||d.height!==P)&&this.setSize(U,P)}return G===!1&&w.setRenderTarget(d),y=w.toneMapping,w.toneMapping=sa,!0},this.hasRenderPass=function(){return G},this.end=function(w,N){w.toneMapping=y,C=!0;let U=d,P=h;for(let T=0;T<L.length;T++){const O=L[T];O.enabled!==!1&&(O.render(w,P,U,N),O.needsSwap!==!1&&(U=P,P=P===h?p:h))}if(E!==w.outputColorSpace||R!==w.toneMapping){E=w.outputColorSpace,R=w.toneMapping,S.defines={},Ie.getTransfer(E)===Qe&&(S.defines.SRGB_TRANSFER="");const T=iR[R];T&&(S.defines[T]=""),S.needsUpdate=!0}S.uniforms.tDiffuse.value=U.texture,w.setRenderTarget(x),w.render(_,v),x=null,C=!1},this.isCompositing=function(){return C},this.dispose=function(){d.dispose(),h!==null&&h.dispose(),p!==null&&p.dispose(),m.dispose(),S.dispose()}}const rx=new kn,Vp=new El(1,1),ox=new YS,lx=new TT,ux=new $S,lS=[],uS=[],cS=new Float32Array(16),fS=new Float32Array(9),dS=new Float32Array(4);function co(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let c=lS[l];if(c===void 0&&(c=new Float32Array(l),lS[l]=c),e!==0){s.toArray(c,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(c,h)}return c}function yn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function Mn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Bc(o,e){let i=uS[e];i===void 0&&(i=new Int32Array(e),uS[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function sR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function rR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;o.uniform2fv(this.addr,e),Mn(i,e)}}function oR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(yn(i,e))return;o.uniform3fv(this.addr,e),Mn(i,e)}}function lR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;o.uniform4fv(this.addr,e),Mn(i,e)}}function uR(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(yn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),Mn(i,e)}else{if(yn(i,s))return;dS.set(s),o.uniformMatrix2fv(this.addr,!1,dS),Mn(i,s)}}function cR(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(yn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),Mn(i,e)}else{if(yn(i,s))return;fS.set(s),o.uniformMatrix3fv(this.addr,!1,fS),Mn(i,s)}}function fR(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(yn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),Mn(i,e)}else{if(yn(i,s))return;cS.set(s),o.uniformMatrix4fv(this.addr,!1,cS),Mn(i,s)}}function dR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function hR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;o.uniform2iv(this.addr,e),Mn(i,e)}}function pR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(yn(i,e))return;o.uniform3iv(this.addr,e),Mn(i,e)}}function mR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;o.uniform4iv(this.addr,e),Mn(i,e)}}function gR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function _R(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;o.uniform2uiv(this.addr,e),Mn(i,e)}}function vR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(yn(i,e))return;o.uniform3uiv(this.addr,e),Mn(i,e)}}function SR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;o.uniform4uiv(this.addr,e),Mn(i,e)}}function xR(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Vp.compareFunction=i.isReversedDepthBuffer()?$p:Jp,c=Vp):c=rx,i.setTexture2D(e||c,l)}function yR(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||lx,l)}function MR(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||ux,l)}function ER(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||ox,l)}function TR(o){switch(o){case 5126:return sR;case 35664:return rR;case 35665:return oR;case 35666:return lR;case 35674:return uR;case 35675:return cR;case 35676:return fR;case 5124:case 35670:return dR;case 35667:case 35671:return hR;case 35668:case 35672:return pR;case 35669:case 35673:return mR;case 5125:return gR;case 36294:return _R;case 36295:return vR;case 36296:return SR;case 35678:case 36198:case 36298:case 36306:case 35682:return xR;case 35679:case 36299:case 36307:return yR;case 35680:case 36300:case 36308:case 36293:return MR;case 36289:case 36303:case 36311:case 36292:return ER}}function bR(o,e){o.uniform1fv(this.addr,e)}function AR(o,e){const i=co(e,this.size,2);o.uniform2fv(this.addr,i)}function RR(o,e){const i=co(e,this.size,3);o.uniform3fv(this.addr,i)}function CR(o,e){const i=co(e,this.size,4);o.uniform4fv(this.addr,i)}function wR(o,e){const i=co(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function DR(o,e){const i=co(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function NR(o,e){const i=co(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function UR(o,e){o.uniform1iv(this.addr,e)}function LR(o,e){o.uniform2iv(this.addr,e)}function OR(o,e){o.uniform3iv(this.addr,e)}function PR(o,e){o.uniform4iv(this.addr,e)}function IR(o,e){o.uniform1uiv(this.addr,e)}function zR(o,e){o.uniform2uiv(this.addr,e)}function BR(o,e){o.uniform3uiv(this.addr,e)}function FR(o,e){o.uniform4uiv(this.addr,e)}function HR(o,e,i){const s=this.cache,l=e.length,c=Bc(i,l);yn(s,c)||(o.uniform1iv(this.addr,c),Mn(s,c));let d;this.type===o.SAMPLER_2D_SHADOW?d=Vp:d=rx;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||d,c[h])}function GR(o,e,i){const s=this.cache,l=e.length,c=Bc(i,l);yn(s,c)||(o.uniform1iv(this.addr,c),Mn(s,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||lx,c[d])}function VR(o,e,i){const s=this.cache,l=e.length,c=Bc(i,l);yn(s,c)||(o.uniform1iv(this.addr,c),Mn(s,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||ux,c[d])}function XR(o,e,i){const s=this.cache,l=e.length,c=Bc(i,l);yn(s,c)||(o.uniform1iv(this.addr,c),Mn(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||ox,c[d])}function kR(o){switch(o){case 5126:return bR;case 35664:return AR;case 35665:return RR;case 35666:return CR;case 35674:return wR;case 35675:return DR;case 35676:return NR;case 5124:case 35670:return UR;case 35667:case 35671:return LR;case 35668:case 35672:return OR;case 35669:case 35673:return PR;case 5125:return IR;case 36294:return zR;case 36295:return BR;case 36296:return FR;case 35678:case 36198:case 36298:case 36306:case 35682:return HR;case 35679:case 36299:case 36307:return GR;case 35680:case 36300:case 36308:case 36293:return VR;case 36289:case 36303:case 36311:case 36292:return XR}}class WR{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=TR(i.type)}}class qR{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=kR(i.type)}}class YR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(e,i[h.id],s)}}}const Qh=/(\w+)(\])?(\[|\.)?/g;function hS(o,e){o.seq.push(e),o.map[e.id]=e}function ZR(o,e,i){const s=o.name,l=s.length;for(Qh.lastIndex=0;;){const c=Qh.exec(s),d=Qh.lastIndex;let h=c[1];const p=c[2]==="]",m=c[3];if(p&&(h=h|0),m===void 0||m==="["&&d+2===l){hS(i,m===void 0?new WR(h,o,e):new qR(h,o,e));break}else{let _=i.map[h];_===void 0&&(_=new YR(h),hS(i,_)),i=_}}}class bc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const h=e.getActiveUniform(i,d),p=e.getUniformLocation(i,h.name);ZR(h,p,this)}const l=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],p=s[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&s.push(d)}return s}}function pS(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const KR=37297;let jR=0;function QR(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const h=d+1;s.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const mS=new ge;function JR(o){Ie._getMatrix(mS,Ie.workingColorSpace,o);const e=`mat3( ${mS.elements.map(i=>i.toFixed(4))} )`;switch(Ie.getTransfer(o)){case Dc:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return ce("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function gS(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+QR(o.getShaderSource(e),h)}else return c}function $R(o,e){const i=JR(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const t3={[NS]:"Linear",[US]:"Reinhard",[LS]:"Cineon",[OS]:"ACESFilmic",[IS]:"AgX",[zS]:"Neutral",[PS]:"Custom"};function e3(o,e){const i=t3[e];return i===void 0?(ce("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Sc=new ct;function n3(){Ie.getLuminanceCoefficients(Sc);const o=Sc.x.toFixed(4),e=Sc.y.toFixed(4),i=Sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function i3(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vl).join(`
`)}function a3(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function s3(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(e,l),d=c.name;let h=1;c.type===o.FLOAT_MAT2&&(h=2),c.type===o.FLOAT_MAT3&&(h=3),c.type===o.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function vl(o){return o!==""}function _S(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vS(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const r3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xp(o){return o.replace(r3,l3)}const o3=new Map;function l3(o,e){let i=Te[e];if(i===void 0){const s=o3.get(e);if(s!==void 0)i=Te[s],ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Xp(i)}const u3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function SS(o){return o.replace(u3,c3)}function c3(o,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function xS(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const f3={[xc]:"SHADOWMAP_TYPE_PCF",[gl]:"SHADOWMAP_TYPE_VSM"};function d3(o){return f3[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const h3={[Qs]:"ENVMAP_TYPE_CUBE",[ro]:"ENVMAP_TYPE_CUBE",[Oc]:"ENVMAP_TYPE_CUBE_UV"};function p3(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":h3[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const m3={[ro]:"ENVMAP_MODE_REFRACTION"};function g3(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":m3[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const _3={[DS]:"ENVMAP_BLENDING_MULTIPLY",[eT]:"ENVMAP_BLENDING_MIX",[nT]:"ENVMAP_BLENDING_ADD"};function v3(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":_3[o.combine]||"ENVMAP_BLENDING_NONE"}function S3(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function x3(o,e,i,s){const l=o.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const p=d3(i),m=p3(i),S=g3(i),_=v3(i),v=S3(i),E=i3(i),R=a3(c),C=l.createProgram();let y,x,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(vl).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(vl).join(`
`),x.length>0&&(x+=`
`)):(y=[xS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vl).join(`
`),x=[xS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+S:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==sa?"#define TONE_MAPPING":"",i.toneMapping!==sa?Te.tonemapping_pars_fragment:"",i.toneMapping!==sa?e3("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Te.colorspace_pars_fragment,$R("linearToOutputTexel",i.outputColorSpace),n3(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(vl).join(`
`)),d=Xp(d),d=_S(d,i),d=vS(d,i),h=Xp(h),h=_S(h,i),h=vS(h,i),d=SS(d),h=SS(h),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",i.glslVersion===Nv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Nv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const G=L+y+d,w=L+x+h,N=pS(l,l.VERTEX_SHADER,G),U=pS(l,l.FRAGMENT_SHADER,w);l.attachShader(C,N),l.attachShader(C,U),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function P(Y){if(o.debug.checkShaderErrors){const $=l.getProgramInfoLog(C)||"",ut=l.getShaderInfoLog(N)||"",K=l.getShaderInfoLog(U)||"",tt=$.trim(),k=ut.trim(),W=K.trim();let ft=!0,ot=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(ft=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,N,U);else{const pt=gS(l,N,"vertex"),Et=gS(l,U,"fragment");Fe("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+Y.name+`
Material Type: `+Y.type+`

Program Info Log: `+tt+`
`+pt+`
`+Et)}else tt!==""?ce("WebGLProgram: Program Info Log:",tt):(k===""||W==="")&&(ot=!1);ot&&(Y.diagnostics={runnable:ft,programLog:tt,vertexShader:{log:k,prefix:y},fragmentShader:{log:W,prefix:x}})}l.deleteShader(N),l.deleteShader(U),T=new bc(l,C),O=s3(l,C)}let T;this.getUniforms=function(){return T===void 0&&P(this),T};let O;this.getAttributes=function(){return O===void 0&&P(this),O};let V=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=l.getProgramParameter(C,KR)),V},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=jR++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=N,this.fragmentShader=U,this}let y3=0;class M3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,s){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new E3(e),i.set(e,s)),s}}class E3{constructor(e){this.id=y3++,this.code=e,this.usedTimes=0}}function T3(o){return o===Js||o===Rc||o===Cc}function b3(o,e,i,s,l,c){const d=new em,h=new M3,p=new Set,m=[],S=new Map,_=s.logarithmicDepthBuffer;let v=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(T){return p.add(T),T===0?"uv":`uv${T}`}function C(T,O,V,Y,$,ut){const K=Y.fog,tt=$.geometry,k=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?Y.environment:null,W=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,ft=e.get(T.envMap||k,W),ot=ft&&ft.mapping===Oc?ft.image.height:null,pt=E[T.type];T.precision!==null&&(v=s.getMaxPrecision(T.precision),v!==T.precision&&ce("WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const Et=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,Zt=Et!==void 0?Et.length:0;let jt=0;tt.morphAttributes.position!==void 0&&(jt=1),tt.morphAttributes.normal!==void 0&&(jt=2),tt.morphAttributes.color!==void 0&&(jt=3);let z,gt,Rt,Z;if(pt){const Oe=na[pt];z=Oe.vertexShader,gt=Oe.fragmentShader}else{z=T.vertexShader,gt=T.fragmentShader;const Oe=h.getVertexShaderStage(T),pe=h.getFragmentShaderStage(T);h.update(T,Oe,pe),Rt=Oe.id,Z=pe.id}const ht=o.getRenderTarget(),bt=o.state.buffers.depth.getReversed(),It=$.isInstancedMesh===!0,mt=$.isBatchedMesh===!0,Ct=!!T.map,He=!!T.matcap,fe=!!ft,xe=!!T.aoMap,ye=!!T.lightMap,ee=!!T.bumpMap&&T.wireframe===!1,At=!!T.normalMap,oe=!!T.displacementMap,Me=!!T.emissiveMap,ie=!!T.metalnessMap,de=!!T.roughnessMap,B=T.anisotropy>0,_e=T.clearcoat>0,Ee=T.dispersion>0,D=T.retroreflectivity>0,M=T.iridescence>0,J=T.sheen>0,it=T.transmission>0,_t=B&&!!T.anisotropyMap,wt=_e&&!!T.clearcoatMap,Ut=_e&&!!T.clearcoatNormalMap,vt=_e&&!!T.clearcoatRoughnessMap,Mt=M&&!!T.iridescenceMap,Nt=M&&!!T.iridescenceThicknessMap,te=J&&!!T.sheenColorMap,Bt=J&&!!T.sheenRoughnessMap,zt=!!T.specularMap,kt=!!T.specularColorMap,ae=!!T.specularIntensityMap,he=it&&!!T.transmissionMap,X=it&&!!T.thicknessMap,Dt=!!T.gradientMap,yt=!!T.alphaMap,Lt=T.alphaTest>0,Xt=!!T.alphaHash,Tt=!!T.extensions;let $t=sa;T.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&($t=o.toneMapping);const Vt={shaderID:pt,shaderType:T.type,shaderName:T.name,vertexShader:z,fragmentShader:gt,defines:T.defines,customVertexShaderID:Rt,customFragmentShaderID:Z,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:mt,batchingColor:mt&&$._colorsTexture!==null,instancing:It,instancingColor:It&&$.instanceColor!==null,instancingMorph:It&&$.morphTexture!==null,outputColorSpace:ht===null?o.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Ie.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Ct,matcap:He,envMap:fe,envMapMode:fe&&ft.mapping,envMapCubeUVHeight:ot,aoMap:xe,lightMap:ye,bumpMap:ee,normalMap:At,displacementMap:oe,emissiveMap:Me,normalMapObjectSpace:At&&T.normalMapType===sT,normalMapTangentSpace:At&&T.normalMapType===Dv,packedNormalMap:At&&T.normalMapType===Dv&&T3(T.normalMap.format),metalnessMap:ie,roughnessMap:de,anisotropy:B,anisotropyMap:_t,clearcoat:_e,clearcoatMap:wt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:vt,dispersion:Ee,retroreflection:D,iridescence:M,iridescenceMap:Mt,iridescenceThicknessMap:Nt,sheen:J,sheenColorMap:te,sheenRoughnessMap:Bt,specularMap:zt,specularColorMap:kt,specularIntensityMap:ae,transmission:it,transmissionMap:he,thicknessMap:X,gradientMap:Dt,opaque:T.transparent===!1&&T.blending===Sl&&T.alphaToCoverage===!1,alphaMap:yt,alphaTest:Lt,alphaHash:Xt,combine:T.combine,mapUv:Ct&&R(T.map.channel),aoMapUv:xe&&R(T.aoMap.channel),lightMapUv:ye&&R(T.lightMap.channel),bumpMapUv:ee&&R(T.bumpMap.channel),normalMapUv:At&&R(T.normalMap.channel),displacementMapUv:oe&&R(T.displacementMap.channel),emissiveMapUv:Me&&R(T.emissiveMap.channel),metalnessMapUv:ie&&R(T.metalnessMap.channel),roughnessMapUv:de&&R(T.roughnessMap.channel),anisotropyMapUv:_t&&R(T.anisotropyMap.channel),clearcoatMapUv:wt&&R(T.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&R(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&R(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&R(T.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&R(T.iridescenceThicknessMap.channel),sheenColorMapUv:te&&R(T.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&R(T.sheenRoughnessMap.channel),specularMapUv:zt&&R(T.specularMap.channel),specularColorMapUv:kt&&R(T.specularColorMap.channel),specularIntensityMapUv:ae&&R(T.specularIntensityMap.channel),transmissionMapUv:he&&R(T.transmissionMap.channel),thicknessMapUv:X&&R(T.thicknessMap.channel),alphaMapUv:yt&&R(T.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(At||B),vertexNormals:!!tt.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!tt.attributes.uv&&(Ct||yt),fog:!!K,useFog:T.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||tt.attributes.normal===void 0&&At===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:bt,skinning:$.isSkinnedMesh===!0,hasPositionAttribute:tt.attributes.position!==void 0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:Zt,morphTextureStride:jt,numSunLights:O.sun.length,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numSunLightShadows:O.sunShadowMap.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numLightProbeGrids:ut.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:$t,decodeVideoTexture:Ct&&T.map.isVideoTexture===!0&&Ie.getTransfer(T.map.colorSpace)===Qe,decodeVideoTextureEmissive:Me&&T.emissiveMap.isVideoTexture===!0&&Ie.getTransfer(T.emissiveMap.colorSpace)===Qe,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ua,flipSided:T.side===Qn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Tt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&T.extensions.multiDraw===!0||mt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Vt.vertexUv1s=p.has(1),Vt.vertexUv2s=p.has(2),Vt.vertexUv3s=p.has(3),p.clear(),Vt}function y(T){const O=[];if(T.shaderID?O.push(T.shaderID):(O.push(T.customVertexShaderID),O.push(T.customFragmentShaderID)),T.defines!==void 0)for(const V in T.defines)O.push(V),O.push(T.defines[V]);return T.isRawShaderMaterial===!1&&(x(O,T),L(O,T),O.push(o.outputColorSpace)),O.push(T.customProgramCacheKey),O.join()}function x(T,O){T.push(O.precision),T.push(O.outputColorSpace),T.push(O.envMapMode),T.push(O.envMapCubeUVHeight),T.push(O.mapUv),T.push(O.alphaMapUv),T.push(O.lightMapUv),T.push(O.aoMapUv),T.push(O.bumpMapUv),T.push(O.normalMapUv),T.push(O.displacementMapUv),T.push(O.emissiveMapUv),T.push(O.metalnessMapUv),T.push(O.roughnessMapUv),T.push(O.anisotropyMapUv),T.push(O.clearcoatMapUv),T.push(O.clearcoatNormalMapUv),T.push(O.clearcoatRoughnessMapUv),T.push(O.iridescenceMapUv),T.push(O.iridescenceThicknessMapUv),T.push(O.sheenColorMapUv),T.push(O.sheenRoughnessMapUv),T.push(O.specularMapUv),T.push(O.specularColorMapUv),T.push(O.specularIntensityMapUv),T.push(O.transmissionMapUv),T.push(O.thicknessMapUv),T.push(O.combine),T.push(O.fogExp2),T.push(O.sizeAttenuation),T.push(O.morphTargetsCount),T.push(O.morphAttributeCount),T.push(O.numSunLights),T.push(O.numDirLights),T.push(O.numPointLights),T.push(O.numSpotLights),T.push(O.numSpotLightMaps),T.push(O.numHemiLights),T.push(O.numRectAreaLights),T.push(O.numSunLightShadows),T.push(O.numDirLightShadows),T.push(O.numPointLightShadows),T.push(O.numSpotLightShadows),T.push(O.numSpotLightShadowsWithMaps),T.push(O.numLightProbes),T.push(O.shadowMapType),T.push(O.toneMapping),T.push(O.numClippingPlanes),T.push(O.numClipIntersection),T.push(O.depthPacking)}function L(T,O){d.disableAll(),O.instancing&&d.enable(0),O.instancingColor&&d.enable(1),O.instancingMorph&&d.enable(2),O.matcap&&d.enable(3),O.envMap&&d.enable(4),O.normalMapObjectSpace&&d.enable(5),O.normalMapTangentSpace&&d.enable(6),O.clearcoat&&d.enable(7),O.iridescence&&d.enable(8),O.alphaTest&&d.enable(9),O.vertexColors&&d.enable(10),O.vertexAlphas&&d.enable(11),O.vertexUv1s&&d.enable(12),O.vertexUv2s&&d.enable(13),O.vertexUv3s&&d.enable(14),O.vertexTangents&&d.enable(15),O.anisotropy&&d.enable(16),O.alphaHash&&d.enable(17),O.batching&&d.enable(18),O.dispersion&&d.enable(19),O.retroreflection&&d.enable(24),O.batchingColor&&d.enable(20),O.gradientMap&&d.enable(21),O.packedNormalMap&&d.enable(22),O.vertexNormals&&d.enable(23),T.push(d.mask),d.disableAll(),O.fog&&d.enable(0),O.useFog&&d.enable(1),O.flatShading&&d.enable(2),O.logarithmicDepthBuffer&&d.enable(3),O.reversedDepthBuffer&&d.enable(4),O.skinning&&d.enable(5),O.morphTargets&&d.enable(6),O.morphNormals&&d.enable(7),O.morphColors&&d.enable(8),O.premultipliedAlpha&&d.enable(9),O.shadowMapEnabled&&d.enable(10),O.doubleSided&&d.enable(11),O.flipSided&&d.enable(12),O.useDepthPacking&&d.enable(13),O.dithering&&d.enable(14),O.transmission&&d.enable(15),O.sheen&&d.enable(16),O.opaque&&d.enable(17),O.pointsUvs&&d.enable(18),O.decodeVideoTexture&&d.enable(19),O.decodeVideoTextureEmissive&&d.enable(20),O.alphaToCoverage&&d.enable(21),O.numLightProbeGrids>0&&d.enable(22),O.hasPositionAttribute&&d.enable(23),T.push(d.mask)}function G(T){const O=E[T.type];let V;if(O){const Y=na[O];V=qT.clone(Y.uniforms)}else V=T.uniforms;return V}function w(T,O){let V=S.get(O);return V!==void 0?++V.usedTimes:(V=new x3(o,O,T,l),m.push(V),S.set(O,V)),V}function N(T){if(--T.usedTimes===0){const O=m.indexOf(T);m[O]=m[m.length-1],m.pop(),S.delete(T.cacheKey),T.destroy()}}function U(T){h.remove(T)}function P(){h.dispose()}return{getParameters:C,getProgramCacheKey:y,getUniforms:G,acquireProgram:w,releaseProgram:N,releaseShaderCache:U,programs:m,dispose:P}}function A3(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function l(d,h,p){o.get(d)[h]=p}function c(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function R3(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function yS(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function MS(){const o=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function d(v){let E=0;return v.isInstancedMesh&&(E+=2),v.isSkinnedMesh&&(E+=1),E}function h(v,E,R,C,y,x){let L=o[e];return L===void 0?(L={id:v.id,object:v,geometry:E,material:R,materialVariant:d(v),groupOrder:C,renderOrder:v.renderOrder,z:y,group:x},o[e]=L):(L.id=v.id,L.object=v,L.geometry=E,L.material=R,L.materialVariant=d(v),L.groupOrder=C,L.renderOrder=v.renderOrder,L.z=y,L.group=x),e++,L}function p(v,E,R,C,y,x,L){L.reversedDepth===!0&&(y=-y);const G=h(v,E,R,C,y,x);R.transmission>0?s.push(G):R.transparent===!0?l.push(G):i.push(G)}function m(v,E,R,C,y,x){const L=h(v,E,R,C,y,x);R.transmission>0?s.unshift(L):R.transparent===!0?l.unshift(L):i.unshift(L)}function S(v,E){i.length>1&&i.sort(v||R3),s.length>1&&s.sort(E||yS),l.length>1&&l.sort(E||yS)}function _(){for(let v=e,E=o.length;v<E;v++){const R=o[v];if(R.id===null)break;R.id=null,R.object=null,R.geometry=null,R.material=null,R.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:p,unshift:m,finish:_,sort:S}}function C3(){let o=new WeakMap;function e(s,l){const c=o.get(s);let d;return c===void 0?(d=new MS,o.set(s,[d])):l>=c.length?(d=new MS,c.push(d)):d=c[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function w3(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={direction:new ct,color:new ke};break;case"SpotLight":i={position:new ct,direction:new ct,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ct,color:new ke,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ct,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":i={color:new ke,position:new ct,halfWidth:new ct,halfHeight:new ct};break}return o[e.id]=i,i}}}function D3(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let N3=0;function U3(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function L3(o){const e=new w3,i=D3(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new ct);const l=new ct,c=new dn,d=new dn;function h(m){let S=0,_=0,v=0;for(let $=0;$<9;$++)s.probe[$].set(0,0,0);let E=0,R=0,C=0,y=0,x=0,L=0,G=0,w=0,N=0,U=0,P=0,T=0,O=0,V=0;m.sort(U3);for(let $=0,ut=m.length;$<ut;$++){const K=m[$],tt=K.color,k=K.intensity,W=K.distance;let ft=null;if(K.shadow&&K.shadow.map&&(K.shadow.map.texture.format===Js?ft=K.shadow.map.texture:ft=K.shadow.map.depthTexture||K.shadow.map.texture),K.isAmbientLight)S+=tt.r*k,_+=tt.g*k,v+=tt.b*k;else if(K.isLightProbe){for(let ot=0;ot<9;ot++)s.probe[ot].addScaledVector(K.sh.coefficients[ot],k);V++}else if(K.isSunLight){const ot=e.get(K);if(ot.color.copy(K.color).multiplyScalar(K.intensity),K.castShadow){const pt=K.shadow,Et=i.get(K);Et.shadowIntensity=pt.intensity,Et.shadowBias=pt.bias,Et.shadowNormalBias=pt.normalBias,Et.shadowRadius=pt.radius,Et.shadowMapSize.copy(pt.mapSize).multiply(pt.getFrameExtents()),s.sunShadow[R]=Et,s.sunShadowMap[R]=ft;const Zt=pt.getViewportCount();for(let jt=0;jt<Zt;jt++)s.sunShadowMatrix[C+jt]=pt.getMatrix(jt),s.sunShadowCascade[C+jt]=pt._cascadeData[jt];C+=Zt,R++}s.sun[E]=ot,E++}else if(K.isDirectionalLight){const ot=e.get(K);if(ot.color.copy(K.color).multiplyScalar(K.intensity),K.castShadow){const pt=K.shadow,Et=i.get(K);Et.shadowIntensity=pt.intensity,Et.shadowBias=pt.bias,Et.shadowNormalBias=pt.normalBias,Et.shadowRadius=pt.radius,Et.shadowMapSize=pt.mapSize,s.directionalShadow[y]=Et,s.directionalShadowMap[y]=ft,s.directionalShadowMatrix[y]=K.shadow.matrix,N++}s.directional[y]=ot,y++}else if(K.isSpotLight){const ot=e.get(K);ot.position.setFromMatrixPosition(K.matrixWorld),ot.color.copy(tt).multiplyScalar(k),ot.distance=W,ot.coneCos=Math.cos(K.angle),ot.penumbraCos=Math.cos(K.angle*(1-K.penumbra)),ot.decay=K.decay,s.spot[L]=ot;const pt=K.shadow;if(K.map&&(s.spotLightMap[T]=K.map,T++,pt.updateMatrices(K),K.castShadow&&O++),s.spotLightMatrix[L]=pt.matrix,K.castShadow){const Et=i.get(K);Et.shadowIntensity=pt.intensity,Et.shadowBias=pt.bias,Et.shadowNormalBias=pt.normalBias,Et.shadowRadius=pt.radius,Et.shadowMapSize=pt.mapSize,s.spotShadow[L]=Et,s.spotShadowMap[L]=ft,P++}L++}else if(K.isRectAreaLight){const ot=e.get(K);ot.color.copy(tt).multiplyScalar(k),ot.halfWidth.set(K.width*.5,0,0),ot.halfHeight.set(0,K.height*.5,0),s.rectArea[G]=ot,G++}else if(K.isPointLight){const ot=e.get(K);if(ot.color.copy(K.color).multiplyScalar(K.intensity),ot.distance=K.distance,ot.decay=K.decay,K.castShadow){const pt=K.shadow,Et=i.get(K);Et.shadowIntensity=pt.intensity,Et.shadowBias=pt.bias,Et.shadowNormalBias=pt.normalBias,Et.shadowRadius=pt.radius,Et.shadowMapSize=pt.mapSize,Et.shadowCameraNear=pt.camera.near,Et.shadowCameraFar=pt.camera.far,s.pointShadow[x]=Et,s.pointShadowMap[x]=ft,s.pointShadowMatrix[x]=K.shadow.matrix,U++}s.point[x]=ot,x++}else if(K.isHemisphereLight){const ot=e.get(K);ot.skyColor.copy(K.color).multiplyScalar(k),ot.groundColor.copy(K.groundColor).multiplyScalar(k),s.hemi[w]=ot,w++}}G>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Gt.LTC_FLOAT_1,s.rectAreaLTC2=Gt.LTC_FLOAT_2):(s.rectAreaLTC1=Gt.LTC_HALF_1,s.rectAreaLTC2=Gt.LTC_HALF_2)),s.ambient[0]=S,s.ambient[1]=_,s.ambient[2]=v;const Y=s.hash;(Y.sunLength!==E||Y.directionalLength!==y||Y.pointLength!==x||Y.spotLength!==L||Y.rectAreaLength!==G||Y.hemiLength!==w||Y.numSunShadows!==R||Y.numDirectionalShadows!==N||Y.numPointShadows!==U||Y.numSpotShadows!==P||Y.numSpotMaps!==T||Y.numLightProbes!==V)&&(s.sun.length=E,s.directional.length=y,s.spot.length=L,s.rectArea.length=G,s.point.length=x,s.hemi.length=w,s.sunShadow.length=R,s.sunShadowMap.length=R,s.sunShadowMatrix.length=C,s.sunShadowCascade.length=C,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.directionalShadowMatrix.length=N,s.pointShadow.length=U,s.pointShadowMap.length=U,s.pointShadowMatrix.length=U,s.spotShadow.length=P,s.spotShadowMap.length=P,s.spotLightMatrix.length=P+T-O,s.spotLightMap.length=T,s.numSpotLightShadowsWithMaps=O,s.numLightProbes=V,Y.sunLength=E,Y.directionalLength=y,Y.pointLength=x,Y.spotLength=L,Y.rectAreaLength=G,Y.hemiLength=w,Y.numSunShadows=R,Y.numDirectionalShadows=N,Y.numPointShadows=U,Y.numSpotShadows=P,Y.numSpotMaps=T,Y.numLightProbes=V,s.version=N3++)}function p(m,S){let _=0,v=0,E=0,R=0,C=0,y=0;const x=S.matrixWorldInverse;for(let L=0,G=m.length;L<G;L++){const w=m[L];if(w.isSunLight){const N=s.sun[_];N.direction.setFromMatrixPosition(w.matrixWorld),N.direction.transformDirection(x),_++}else if(w.isDirectionalLight){const N=s.directional[v];N.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(x),v++}else if(w.isSpotLight){const N=s.spot[R];N.position.setFromMatrixPosition(w.matrixWorld),N.position.applyMatrix4(x),N.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(x),R++}else if(w.isRectAreaLight){const N=s.rectArea[C];N.position.setFromMatrixPosition(w.matrixWorld),N.position.applyMatrix4(x),d.identity(),c.copy(w.matrixWorld),c.premultiply(x),d.extractRotation(c),N.halfWidth.set(w.width*.5,0,0),N.halfHeight.set(0,w.height*.5,0),N.halfWidth.applyMatrix4(d),N.halfHeight.applyMatrix4(d),C++}else if(w.isPointLight){const N=s.point[E];N.position.setFromMatrixPosition(w.matrixWorld),N.position.applyMatrix4(x),E++}else if(w.isHemisphereLight){const N=s.hemi[y];N.direction.setFromMatrixPosition(w.matrixWorld),N.direction.transformDirection(x),y++}}}return{setup:h,setupView:p,state:s}}function ES(o){const e=new L3(o),i=[],s=[],l=[];function c(v){_.camera=v,i.length=0,s.length=0,l.length=0}function d(v){i.push(v)}function h(v){s.push(v)}function p(v){l.push(v)}function m(){e.setup(i)}function S(v){e.setupView(i,v)}const _={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:m,setupLightsView:S,pushLight:d,pushShadow:h,pushLightProbeGrid:p}}function O3(o){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let h;return d===void 0?(h=new ES(o),e.set(l,[h])):c>=d.length?(h=new ES(o),d.push(h)):h=d[c],h}function s(){e=new WeakMap}return{get:i,dispose:s}}const P3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,I3=`uniform sampler2D shadow_pass;
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
}`,z3=[new ct(1,0,0),new ct(-1,0,0),new ct(0,1,0),new ct(0,-1,0),new ct(0,0,1),new ct(0,0,-1)],B3=[new ct(0,-1,0),new ct(0,-1,0),new ct(0,0,1),new ct(0,0,-1),new ct(0,-1,0),new ct(0,-1,0)],TS=new dn,ml=new ct,Jh=new ct;function F3(o,e,i){let s=new JS;const l=new Ge,c=new Ge,d=new fn,h=new jT,p=new QT,m={},S=i.maxTextureSize,_={[js]:Qn,[Qn]:js,[Ua]:Ua},v=new Bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:P3,fragmentShader:I3}),E=v.clone();E.defines.HORIZONTAL_PASS=1;const R=new Fi;R.setAttribute("position",new ra(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new za(R,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xc;let x=this.type;this.render=function(U,P,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||U.length===0)return;this.type===IE&&(ce("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=xc);const O=o.getRenderTarget(),V=o.getActiveCubeFace(),Y=o.getActiveMipmapLevel(),$=o.state;$.setBlending(Oa),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const ut=x!==this.type;ut&&P.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach(tt=>tt.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,tt=U.length;K<tt;K++){const k=U[K],W=k.shadow;if(W===void 0){ce("WebGLShadowMap:",k,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const ft=W.getFrameExtents();l.multiply(ft),c.copy(W.mapSize),(l.x>S||l.y>S)&&(l.x>S&&(c.x=Math.floor(S/ft.x),l.x=c.x*ft.x,W.mapSize.x=c.x),l.y>S&&(c.y=Math.floor(S/ft.y),l.y=c.y*ft.y,W.mapSize.y=c.y));const ot=o.state.buffers.depth.getReversed();if(W.camera._reversedDepth=ot,W.map===null||ut===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===gl){if(k.isPointLight){ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new zi(l.x,l.y,{format:Js,type:ua,minFilter:zn,magFilter:zn,generateMipmaps:!1}),W.map.texture.name=k.name+".shadowMap",W.map.depthTexture=new El(l.x,l.y,ia),W.map.depthTexture.name=k.name+".shadowMapDepth",W.map.depthTexture.format=Ia,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ln,W.map.depthTexture.magFilter=Ln}else k.isPointLight?(W.map=new sx(l.x),W.map.depthTexture=new kT(l.x,la)):(W.map=new zi(l.x,l.y),W.map.depthTexture=new El(l.x,l.y,la)),W.map.depthTexture.name=k.name+".shadowMap",W.map.depthTexture.format=Ia,this.type===xc?(W.map.depthTexture.compareFunction=ot?$p:Jp,W.map.depthTexture.minFilter=zn,W.map.depthTexture.magFilter=zn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ln,W.map.depthTexture.magFilter=Ln);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==l.x||W.map.height!==l.y)&&W.map.setSize(l.x,l.y);const pt=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();k.isPointLight!==!0&&W.updateMatrices(k,T);for(let Et=0;Et<pt;Et++){const Zt=W.getCamera(Et);if(k.isPointLight){const jt=W.camera,z=W.matrix,gt=k.distance||jt.far;gt!==jt.far&&(jt.far=gt,jt.updateProjectionMatrix()),ml.setFromMatrixPosition(k.matrixWorld),jt.position.copy(ml),Jh.copy(jt.position),Jh.add(z3[Et]),jt.up.copy(B3[Et]),jt.lookAt(Jh),jt.updateMatrixWorld(),z.makeTranslation(-ml.x,-ml.y,-ml.z),TS.multiplyMatrices(jt.projectionMatrix,jt.matrixWorldInverse),W._frustum.setFromProjectionMatrix(TS,jt.coordinateSystem,jt.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)o.setRenderTarget(W.map,Et),o.clear();else{Et===0&&(o.setRenderTarget(W.map),o.clear());const jt=W.getViewport(Et);d.set(c.x*jt.x,c.y*jt.y,c.x*jt.z,c.y*jt.w),$.viewport(d)}s=W.getFrustum(Et),w(P,T,Zt,k,this.type)}W.isPointLightShadow!==!0&&this.type===gl&&L(W,T),W.needsUpdate=!1}x=this.type,y.needsUpdate=!1,o.setRenderTarget(O,V,Y)};function L(U,P){const T=e.update(C);v.defines.VSM_SAMPLES!==U.blurSamples&&(v.defines.VSM_SAMPLES=U.blurSamples,E.defines.VSM_SAMPLES=U.blurSamples,v.needsUpdate=!0,E.needsUpdate=!0),U.mapPass===null?U.mapPass=new zi(l.x,l.y,{format:Js,type:ua}):(U.mapPass.width!==U.map.width||U.mapPass.height!==U.map.height)&&U.mapPass.setSize(U.map.width,U.map.height),v.uniforms.shadow_pass.value=U.map.depthTexture,v.uniforms.resolution.value.set(U.map.width,U.map.height),v.uniforms.radius.value=U.radius,o.setRenderTarget(U.mapPass),o.clear(),o.renderBufferDirect(P,null,T,v,C,null),E.uniforms.shadow_pass.value=U.mapPass.texture,E.uniforms.resolution.value.set(U.map.width,U.map.height),E.uniforms.radius.value=U.radius,o.setRenderTarget(U.map),o.clear(),o.renderBufferDirect(P,null,T,E,C,null)}function G(U,P,T,O){let V=null;const Y=T.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(Y!==void 0)V=Y;else if(V=T.isPointLight===!0?p:h,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const $=V.uuid,ut=P.uuid;let K=m[$];K===void 0&&(K={},m[$]=K);let tt=K[ut];tt===void 0&&(tt=V.clone(),K[ut]=tt,P.addEventListener("dispose",N)),V=tt}if(V.visible=P.visible,V.wireframe=P.wireframe,O===gl?V.side=P.shadowSide!==null?P.shadowSide:P.side:V.side=P.shadowSide!==null?P.shadowSide:_[P.side],V.alphaMap=P.alphaMap,V.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,V.map=P.map,V.clipShadows=P.clipShadows,V.clippingPlanes=P.clippingPlanes,V.clipIntersection=P.clipIntersection,V.displacementMap=P.displacementMap,V.displacementScale=P.displacementScale,V.displacementBias=P.displacementBias,V.wireframeLinewidth=P.wireframeLinewidth,V.linewidth=P.linewidth,T.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const $=o.properties.get(V);$.light=T}return V}function w(U,P,T,O,V){if(U.visible===!1)return;if(U.layers.test(P.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&V===gl)&&(!U.frustumCulled||U.intersectsFrustum(s))){U.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,U.matrixWorld);const ut=e.update(U),K=U.material;if(Array.isArray(K)){const tt=ut.groups;for(let k=0,W=tt.length;k<W;k++){const ft=tt[k],ot=K[ft.materialIndex];if(ot&&ot.visible){const pt=G(U,ot,O,V);U.onBeforeShadow(o,U,P,T,ut,pt,ft),o.renderBufferDirect(T,null,ut,pt,U,ft),U.onAfterShadow(o,U,P,T,ut,pt,ft)}}}else if(K.visible){const tt=G(U,K,O,V);U.onBeforeShadow(o,U,P,T,ut,tt,null),o.renderBufferDirect(T,null,ut,tt,U,null),U.onAfterShadow(o,U,P,T,ut,tt,null)}}const $=U.children;for(let ut=0,K=$.length;ut<K;ut++)w($[ut],P,T,O,V)}function N(U){U.target.removeEventListener("dispose",N);for(const T in m){const O=m[T],V=U.target.uuid;V in O&&(O[V].dispose(),delete O[V])}}}function H3(o,e){function i(){let X=!1;const Dt=new fn;let yt=null;const Lt=new fn(0,0,0,0);return{setMask:function(Xt){yt!==Xt&&!X&&(o.colorMask(Xt,Xt,Xt,Xt),yt=Xt)},setLocked:function(Xt){X=Xt},setClear:function(Xt,Tt,$t,Vt,Oe){Oe===!0&&(Xt*=Vt,Tt*=Vt,$t*=Vt),Dt.set(Xt,Tt,$t,Vt),Lt.equals(Dt)===!1&&(o.clearColor(Xt,Tt,$t,Vt),Lt.copy(Dt))},reset:function(){X=!1,yt=null,Lt.set(-1,0,0,0)}}}function s(){let X=!1,Dt=!1,yt=null,Lt=null,Xt=null;return{setReversed:function(Tt){if(Dt!==Tt){const $t=e.get("EXT_clip_control");Tt?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT),Dt=Tt;const Vt=Xt;Xt=null,this.setClear(Vt)}},getReversed:function(){return Dt},setTest:function(Tt){Tt?ht(o.DEPTH_TEST):bt(o.DEPTH_TEST)},setMask:function(Tt){yt!==Tt&&!X&&(o.depthMask(Tt),yt=Tt)},setFunc:function(Tt){if(Dt&&(Tt=_T[Tt]),Lt!==Tt){switch(Tt){case tp:o.depthFunc(o.NEVER);break;case ep:o.depthFunc(o.ALWAYS);break;case np:o.depthFunc(o.LESS);break;case xl:o.depthFunc(o.LEQUAL);break;case ip:o.depthFunc(o.EQUAL);break;case ap:o.depthFunc(o.GEQUAL);break;case sp:o.depthFunc(o.GREATER);break;case rp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Lt=Tt}},setLocked:function(Tt){X=Tt},setClear:function(Tt){Xt!==Tt&&(Xt=Tt,Dt&&(Tt=1-Tt),o.clearDepth(Tt))},reset:function(){X=!1,yt=null,Lt=null,Xt=null,Dt=!1}}}function l(){let X=!1,Dt=null,yt=null,Lt=null,Xt=null,Tt=null,$t=null,Vt=null,Oe=null;return{setTest:function(pe){X||(pe?ht(o.STENCIL_TEST):bt(o.STENCIL_TEST))},setMask:function(pe){Dt!==pe&&!X&&(o.stencilMask(pe),Dt=pe)},setFunc:function(pe,$n,di){(yt!==pe||Lt!==$n||Xt!==di)&&(o.stencilFunc(pe,$n,di),yt=pe,Lt=$n,Xt=di)},setOp:function(pe,$n,di){(Tt!==pe||$t!==$n||Vt!==di)&&(o.stencilOp(pe,$n,di),Tt=pe,$t=$n,Vt=di)},setLocked:function(pe){X=pe},setClear:function(pe){Oe!==pe&&(o.clearStencil(pe),Oe=pe)},reset:function(){X=!1,Dt=null,yt=null,Lt=null,Xt=null,Tt=null,$t=null,Vt=null,Oe=null}}}const c=new i,d=new s,h=new l,p=new WeakMap,m=new WeakMap;let S={},_={},v={},E=new WeakMap,R=[],C=null,y=!1,x=null,L=null,G=null,w=null,N=null,U=null,P=null,T=new ke(0,0,0),O=0,V=!1,Y=null,$=null,ut=null,K=null,tt=null;const k=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ft=0;const ot=o.getParameter(o.VERSION);ot.indexOf("WebGL")!==-1?(ft=parseFloat(/^WebGL (\d)/.exec(ot)[1]),W=ft>=1):ot.indexOf("OpenGL ES")!==-1&&(ft=parseFloat(/^OpenGL ES (\d)/.exec(ot)[1]),W=ft>=2);let pt=null,Et={};const Zt=o.getParameter(o.SCISSOR_BOX),jt=o.getParameter(o.VIEWPORT),z=new fn().fromArray(Zt),gt=new fn().fromArray(jt);function Rt(X,Dt,yt,Lt){const Xt=new Uint8Array(4),Tt=o.createTexture();o.bindTexture(X,Tt),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let $t=0;$t<yt;$t++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Dt,0,o.RGBA,1,1,Lt,0,o.RGBA,o.UNSIGNED_BYTE,Xt):o.texImage2D(Dt+$t,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Xt);return Tt}const Z={};Z[o.TEXTURE_2D]=Rt(o.TEXTURE_2D,o.TEXTURE_2D,1),Z[o.TEXTURE_CUBE_MAP]=Rt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[o.TEXTURE_2D_ARRAY]=Rt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Z[o.TEXTURE_3D]=Rt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ht(o.DEPTH_TEST),d.setFunc(xl),ee(!1),At(Av),ht(o.CULL_FACE),xe(Oa);function ht(X){S[X]!==!0&&(o.enable(X),S[X]=!0)}function bt(X){S[X]!==!1&&(o.disable(X),S[X]=!1)}function It(X,Dt){return v[X]!==Dt?(o.bindFramebuffer(X,Dt),v[X]=Dt,X===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Dt),X===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Dt),!0):!1}function mt(X,Dt){let yt=R,Lt=!1;if(X){yt=E.get(Dt),yt===void 0&&(yt=[],E.set(Dt,yt));const Xt=X.textures;if(yt.length!==Xt.length||yt[0]!==o.COLOR_ATTACHMENT0){for(let Tt=0,$t=Xt.length;Tt<$t;Tt++)yt[Tt]=o.COLOR_ATTACHMENT0+Tt;yt.length=Xt.length,Lt=!0}}else yt[0]!==o.BACK&&(yt[0]=o.BACK,Lt=!0);Lt&&o.drawBuffers(yt)}function Ct(X){return C!==X?(o.useProgram(X),C=X,!0):!1}const He={[eo]:o.FUNC_ADD,[BE]:o.FUNC_SUBTRACT,[FE]:o.FUNC_REVERSE_SUBTRACT};He[HE]=o.MIN,He[GE]=o.MAX;const fe={[VE]:o.ZERO,[XE]:o.ONE,[kE]:o.SRC_COLOR,[CS]:o.SRC_ALPHA,[jE]:o.SRC_ALPHA_SATURATE,[ZE]:o.DST_COLOR,[qE]:o.DST_ALPHA,[WE]:o.ONE_MINUS_SRC_COLOR,[wS]:o.ONE_MINUS_SRC_ALPHA,[KE]:o.ONE_MINUS_DST_COLOR,[YE]:o.ONE_MINUS_DST_ALPHA,[QE]:o.CONSTANT_COLOR,[JE]:o.ONE_MINUS_CONSTANT_COLOR,[$E]:o.CONSTANT_ALPHA,[tT]:o.ONE_MINUS_CONSTANT_ALPHA};function xe(X,Dt,yt,Lt,Xt,Tt,$t,Vt,Oe,pe){if(X===Oa){y===!0&&(bt(o.BLEND),y=!1);return}if(y===!1&&(ht(o.BLEND),y=!0),X!==zE){if(X!==x||pe!==V){if((L!==eo||N!==eo)&&(o.blendEquation(o.FUNC_ADD),L=eo,N=eo),pe)switch(X){case Sl:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Rv:o.blendFunc(o.ONE,o.ONE);break;case Cv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case wv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Fe("WebGLState: Invalid blending: ",X);break}else switch(X){case Sl:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Rv:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Cv:Fe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wv:Fe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Fe("WebGLState: Invalid blending: ",X);break}G=null,w=null,U=null,P=null,T.set(0,0,0),O=0,x=X,V=pe}return}Xt=Xt||Dt,Tt=Tt||yt,$t=$t||Lt,(Dt!==L||Xt!==N)&&(o.blendEquationSeparate(He[Dt],He[Xt]),L=Dt,N=Xt),(yt!==G||Lt!==w||Tt!==U||$t!==P)&&(o.blendFuncSeparate(fe[yt],fe[Lt],fe[Tt],fe[$t]),G=yt,w=Lt,U=Tt,P=$t),(Vt.equals(T)===!1||Oe!==O)&&(o.blendColor(Vt.r,Vt.g,Vt.b,Oe),T.copy(Vt),O=Oe),x=X,V=!1}function ye(X,Dt){X.side===Ua?bt(o.CULL_FACE):ht(o.CULL_FACE);let yt=X.side===Qn;Dt&&(yt=!yt),ee(yt),X.blending===Sl&&X.transparent===!1?xe(Oa):xe(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),d.setFunc(X.depthFunc),d.setTest(X.depthTest),d.setMask(X.depthWrite),c.setMask(X.colorWrite);const Lt=X.stencilWrite;h.setTest(Lt),Lt&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Me(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ht(o.SAMPLE_ALPHA_TO_COVERAGE):bt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ee(X){Y!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),Y=X)}function At(X){X!==OE?(ht(o.CULL_FACE),X!==$&&(X===Av?o.cullFace(o.BACK):X===PE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):bt(o.CULL_FACE),$=X}function oe(X){X!==ut&&(W&&o.lineWidth(X),ut=X)}function Me(X,Dt,yt){X?(ht(o.POLYGON_OFFSET_FILL),(K!==Dt||tt!==yt)&&(K=Dt,tt=yt,d.getReversed()&&(Dt=-Dt),o.polygonOffset(Dt,yt))):bt(o.POLYGON_OFFSET_FILL)}function ie(X){X?ht(o.SCISSOR_TEST):bt(o.SCISSOR_TEST)}function de(X){X===void 0&&(X=o.TEXTURE0+k-1),pt!==X&&(o.activeTexture(X),pt=X)}function B(X,Dt,yt){yt===void 0&&(pt===null?yt=o.TEXTURE0+k-1:yt=pt);let Lt=Et[yt];Lt===void 0&&(Lt={type:void 0,texture:void 0},Et[yt]=Lt),(Lt.type!==X||Lt.texture!==Dt)&&(pt!==yt&&(o.activeTexture(yt),pt=yt),o.bindTexture(X,Dt||Z[X]),Lt.type=X,Lt.texture=Dt)}function _e(){const X=Et[pt];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Ee(){try{o.compressedTexImage2D(...arguments)}catch(X){Fe("WebGLState:",X)}}function D(){try{o.compressedTexImage3D(...arguments)}catch(X){Fe("WebGLState:",X)}}function M(){try{o.texSubImage2D(...arguments)}catch(X){Fe("WebGLState:",X)}}function J(){try{o.texSubImage3D(...arguments)}catch(X){Fe("WebGLState:",X)}}function it(){try{o.compressedTexSubImage2D(...arguments)}catch(X){Fe("WebGLState:",X)}}function _t(){try{o.compressedTexSubImage3D(...arguments)}catch(X){Fe("WebGLState:",X)}}function wt(){try{o.texStorage2D(...arguments)}catch(X){Fe("WebGLState:",X)}}function Ut(){try{o.texStorage3D(...arguments)}catch(X){Fe("WebGLState:",X)}}function vt(){try{o.texImage2D(...arguments)}catch(X){Fe("WebGLState:",X)}}function Mt(){try{o.texImage3D(...arguments)}catch(X){Fe("WebGLState:",X)}}function Nt(X){return _[X]!==void 0?_[X]:o.getParameter(X)}function te(X,Dt){_[X]!==Dt&&(o.pixelStorei(X,Dt),_[X]=Dt)}function Bt(X){z.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),z.copy(X))}function zt(X){gt.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),gt.copy(X))}function kt(X,Dt){let yt=m.get(Dt);yt===void 0&&(yt=new WeakMap,m.set(Dt,yt));let Lt=yt.get(X);Lt===void 0&&(Lt=o.getUniformBlockIndex(Dt,X.name),yt.set(X,Lt))}function ae(X,Dt){const Lt=m.get(Dt).get(X);p.get(Dt)!==Lt&&(o.uniformBlockBinding(Dt,Lt,X.__bindingPointIndex),p.set(Dt,Lt))}function he(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),S={},_={},pt=null,Et={},v={},E=new WeakMap,R=[],C=null,y=!1,x=null,L=null,G=null,w=null,N=null,U=null,P=null,T=new ke(0,0,0),O=0,V=!1,Y=null,$=null,ut=null,K=null,tt=null,z.set(0,0,o.canvas.width,o.canvas.height),gt.set(0,0,o.canvas.width,o.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:ht,disable:bt,bindFramebuffer:It,drawBuffers:mt,useProgram:Ct,setBlending:xe,setMaterial:ye,setFlipSided:ee,setCullFace:At,setLineWidth:oe,setPolygonOffset:Me,setScissorTest:ie,activeTexture:de,bindTexture:B,unbindTexture:_e,compressedTexImage2D:Ee,compressedTexImage3D:D,texImage2D:vt,texImage3D:Mt,pixelStorei:te,getParameter:Nt,updateUBOMapping:kt,uniformBlockBinding:ae,texStorage2D:wt,texStorage3D:Ut,texSubImage2D:M,texSubImage3D:J,compressedTexSubImage2D:it,compressedTexSubImage3D:_t,scissor:Bt,viewport:zt,reset:he}}function G3(o,e,i,s,l,c,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Ge,S=new WeakMap,_=new Set;let v;const E=new WeakMap;let R=!1;try{R=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(D,M){return R?new OffscreenCanvas(D,M):Uc("canvas")}function y(D,M,J){let it=1;const _t=Ee(D);if((_t.width>J||_t.height>J)&&(it=J/Math.max(_t.width,_t.height)),it<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const wt=Math.floor(it*_t.width),Ut=Math.floor(it*_t.height);v===void 0&&(v=C(wt,Ut));const vt=M?C(wt,Ut):v;return vt.width=wt,vt.height=Ut,vt.getContext("2d").drawImage(D,0,0,wt,Ut),ce("WebGLRenderer: Texture has been resized from ("+_t.width+"x"+_t.height+") to ("+wt+"x"+Ut+")."),vt}else return"data"in D&&ce("WebGLRenderer: Image in DataTexture is too big ("+_t.width+"x"+_t.height+")."),D;return D}function x(D){return D.generateMipmaps}function L(D){o.generateMipmap(D)}function G(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function w(D,M,J,it,_t,wt=!1){if(D!==null){if(o[D]!==void 0)return o[D];ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Ut;it&&(Ut=e.get("EXT_texture_norm16"),Ut||ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let vt=M;if(M===o.RED&&(J===o.FLOAT&&(vt=o.R32F),J===o.HALF_FLOAT&&(vt=o.R16F),J===o.UNSIGNED_BYTE&&(vt=o.R8),J===o.UNSIGNED_SHORT&&Ut&&(vt=Ut.R16_EXT),J===o.SHORT&&Ut&&(vt=Ut.R16_SNORM_EXT)),M===o.RED_INTEGER&&(J===o.UNSIGNED_BYTE&&(vt=o.R8UI),J===o.UNSIGNED_SHORT&&(vt=o.R16UI),J===o.UNSIGNED_INT&&(vt=o.R32UI),J===o.BYTE&&(vt=o.R8I),J===o.SHORT&&(vt=o.R16I),J===o.INT&&(vt=o.R32I)),M===o.RG&&(J===o.FLOAT&&(vt=o.RG32F),J===o.HALF_FLOAT&&(vt=o.RG16F),J===o.UNSIGNED_BYTE&&(vt=o.RG8),J===o.UNSIGNED_SHORT&&Ut&&(vt=Ut.RG16_EXT),J===o.SHORT&&Ut&&(vt=Ut.RG16_SNORM_EXT)),M===o.RG_INTEGER&&(J===o.UNSIGNED_BYTE&&(vt=o.RG8UI),J===o.UNSIGNED_SHORT&&(vt=o.RG16UI),J===o.UNSIGNED_INT&&(vt=o.RG32UI),J===o.BYTE&&(vt=o.RG8I),J===o.SHORT&&(vt=o.RG16I),J===o.INT&&(vt=o.RG32I)),M===o.RGB_INTEGER&&(J===o.UNSIGNED_BYTE&&(vt=o.RGB8UI),J===o.UNSIGNED_SHORT&&(vt=o.RGB16UI),J===o.UNSIGNED_INT&&(vt=o.RGB32UI),J===o.BYTE&&(vt=o.RGB8I),J===o.SHORT&&(vt=o.RGB16I),J===o.INT&&(vt=o.RGB32I)),M===o.RGBA_INTEGER&&(J===o.UNSIGNED_BYTE&&(vt=o.RGBA8UI),J===o.UNSIGNED_SHORT&&(vt=o.RGBA16UI),J===o.UNSIGNED_INT&&(vt=o.RGBA32UI),J===o.BYTE&&(vt=o.RGBA8I),J===o.SHORT&&(vt=o.RGBA16I),J===o.INT&&(vt=o.RGBA32I)),M===o.RGB&&(J===o.UNSIGNED_SHORT&&Ut&&(vt=Ut.RGB16_EXT),J===o.SHORT&&Ut&&(vt=Ut.RGB16_SNORM_EXT),J===o.UNSIGNED_INT_5_9_9_9_REV&&(vt=o.RGB9_E5),J===o.UNSIGNED_INT_10F_11F_11F_REV&&(vt=o.R11F_G11F_B10F)),M===o.RGBA){const Mt=wt?Dc:Ie.getTransfer(_t);J===o.FLOAT&&(vt=o.RGBA32F),J===o.HALF_FLOAT&&(vt=o.RGBA16F),J===o.UNSIGNED_BYTE&&(vt=Mt===Qe?o.SRGB8_ALPHA8:o.RGBA8),J===o.UNSIGNED_SHORT&&Ut&&(vt=Ut.RGBA16_EXT),J===o.SHORT&&Ut&&(vt=Ut.RGBA16_SNORM_EXT),J===o.UNSIGNED_SHORT_4_4_4_4&&(vt=o.RGBA4),J===o.UNSIGNED_SHORT_5_5_5_1&&(vt=o.RGB5_A1)}return(vt===o.R16F||vt===o.R32F||vt===o.RG16F||vt===o.RG32F||vt===o.RGBA16F||vt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),vt}function N(D,M){let J;return D?M===null||M===la||M===Ml?J=o.DEPTH24_STENCIL8:M===ia?J=o.DEPTH32F_STENCIL8:M===yl&&(J=o.DEPTH24_STENCIL8,ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===la||M===Ml?J=o.DEPTH_COMPONENT24:M===ia?J=o.DEPTH_COMPONENT32F:M===yl&&(J=o.DEPTH_COMPONENT16),J}function U(D,M){return x(D)===!0||D.isFramebufferTexture&&D.minFilter!==Ln&&D.minFilter!==zn?Math.log2(Math.max(M.width,M.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?M.mipmaps.length:1}function P(D){const M=D.target;M.removeEventListener("dispose",P),O(M),M.isVideoTexture&&S.delete(M),M.isHTMLTexture&&_.delete(M)}function T(D){const M=D.target;M.removeEventListener("dispose",T),Y(M)}function O(D){const M=s.get(D);if(M.__webglInit===void 0)return;const J=D.source,it=E.get(J);if(it){const _t=it[M.__cacheKey];_t.usedTimes--,_t.usedTimes===0&&V(D),Object.keys(it).length===0&&E.delete(J)}s.remove(D)}function V(D){const M=s.get(D);o.deleteTexture(M.__webglTexture);const J=D.source,it=E.get(J);delete it[M.__cacheKey],d.memory.textures--}function Y(D){const M=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(M.__webglFramebuffer[it]))for(let _t=0;_t<M.__webglFramebuffer[it].length;_t++)o.deleteFramebuffer(M.__webglFramebuffer[it][_t]);else o.deleteFramebuffer(M.__webglFramebuffer[it]);M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer[it])}else{if(Array.isArray(M.__webglFramebuffer))for(let it=0;it<M.__webglFramebuffer.length;it++)o.deleteFramebuffer(M.__webglFramebuffer[it]);else o.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&o.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let it=0;it<M.__webglColorRenderbuffer.length;it++)M.__webglColorRenderbuffer[it]&&o.deleteRenderbuffer(M.__webglColorRenderbuffer[it]);M.__webglDepthRenderbuffer&&o.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const J=D.textures;for(let it=0,_t=J.length;it<_t;it++){const wt=s.get(J[it]);wt.__webglTexture&&(o.deleteTexture(wt.__webglTexture),d.memory.textures--),s.remove(J[it])}s.remove(D)}let $=0;function ut(){$=0}function K(){return $}function tt(D){$=D}function k(){const D=$;return D>=l.maxTextures&&ce("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+l.maxTextures),$+=1,D}function W(D){const M=[];return M.push(D.wrapS),M.push(D.wrapT),M.push(D.wrapR||0),M.push(D.magFilter),M.push(D.minFilter),M.push(D.anisotropy),M.push(D.internalFormat),M.push(D.format),M.push(D.type),M.push(D.generateMipmaps),M.push(D.premultiplyAlpha),M.push(D.flipY),M.push(D.unpackAlignment),M.push(D.colorSpace),M.join()}function ft(D,M){const J=s.get(D);if(D.isVideoTexture&&B(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&J.__version!==D.version){const it=D.image;if(it===null)ce("WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)ce("WebGLRenderer: Texture marked for update but image is incomplete");else{bt(J,D,M);return}}else D.isExternalTexture&&(J.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,J.__webglTexture,o.TEXTURE0+M)}function ot(D,M){const J=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){bt(J,D,M);return}else D.isExternalTexture&&(J.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,J.__webglTexture,o.TEXTURE0+M)}function pt(D,M){const J=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){bt(J,D,M);return}i.bindTexture(o.TEXTURE_3D,J.__webglTexture,o.TEXTURE0+M)}function Et(D,M){const J=s.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&J.__version!==D.version){It(J,D,M);return}i.bindTexture(o.TEXTURE_CUBE_MAP,J.__webglTexture,o.TEXTURE0+M)}const Zt={[op]:o.REPEAT,[La]:o.CLAMP_TO_EDGE,[lp]:o.MIRRORED_REPEAT},jt={[Ln]:o.NEAREST,[iT]:o.NEAREST_MIPMAP_NEAREST,[ju]:o.NEAREST_MIPMAP_LINEAR,[zn]:o.LINEAR,[Eh]:o.LINEAR_MIPMAP_NEAREST,[Zs]:o.LINEAR_MIPMAP_LINEAR},z={[oT]:o.NEVER,[dT]:o.ALWAYS,[lT]:o.LESS,[Jp]:o.LEQUAL,[uT]:o.EQUAL,[$p]:o.GEQUAL,[cT]:o.GREATER,[fT]:o.NOTEQUAL};function gt(D,M){if(M.type===ia&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===zn||M.magFilter===Eh||M.magFilter===ju||M.magFilter===Zs||M.minFilter===zn||M.minFilter===Eh||M.minFilter===ju||M.minFilter===Zs)&&ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,Zt[M.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,Zt[M.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,Zt[M.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,jt[M.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,jt[M.minFilter]),M.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,z[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ln||M.minFilter!==ju&&M.minFilter!==Zs||M.type===ia&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");o.texParameterf(D,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function Rt(D,M){let J=!1;D.__webglInit===void 0&&(D.__webglInit=!0,M.addEventListener("dispose",P));const it=M.source;let _t=E.get(it);_t===void 0&&(_t={},E.set(it,_t));const wt=W(M);if(wt!==D.__cacheKey){_t[wt]===void 0&&(_t[wt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,J=!0),_t[wt].usedTimes++;const Ut=_t[D.__cacheKey];Ut!==void 0&&(_t[D.__cacheKey].usedTimes--,Ut.usedTimes===0&&V(M)),D.__cacheKey=wt,D.__webglTexture=_t[wt].texture}return J}function Z(D,M,J){return Math.floor(Math.floor(D/J)/M)}function ht(D,M,J,it){const wt=D.updateRanges;if(wt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,M.width,M.height,J,it,M.data);else{wt.sort((te,Bt)=>te.start-Bt.start);let Ut=0;for(let te=1;te<wt.length;te++){const Bt=wt[Ut],zt=wt[te],kt=Bt.start+Bt.count,ae=Z(zt.start,M.width,4),he=Z(Bt.start,M.width,4);zt.start<=kt+1&&ae===he&&Z(zt.start+zt.count-1,M.width,4)===ae?Bt.count=Math.max(Bt.count,zt.start+zt.count-Bt.start):(++Ut,wt[Ut]=zt)}wt.length=Ut+1;const vt=i.getParameter(o.UNPACK_ROW_LENGTH),Mt=i.getParameter(o.UNPACK_SKIP_PIXELS),Nt=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,M.width);for(let te=0,Bt=wt.length;te<Bt;te++){const zt=wt[te],kt=Math.floor(zt.start/4),ae=Math.ceil(zt.count/4),he=kt%M.width,X=Math.floor(kt/M.width),Dt=ae,yt=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,he),i.pixelStorei(o.UNPACK_SKIP_ROWS,X),i.texSubImage2D(o.TEXTURE_2D,0,he,X,Dt,yt,J,it,M.data)}D.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,vt),i.pixelStorei(o.UNPACK_SKIP_PIXELS,Mt),i.pixelStorei(o.UNPACK_SKIP_ROWS,Nt)}}function bt(D,M,J){let it=o.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(it=o.TEXTURE_2D_ARRAY),M.isData3DTexture&&(it=o.TEXTURE_3D);const _t=Rt(D,M),wt=M.source;i.bindTexture(it,D.__webglTexture,o.TEXTURE0+J);const Ut=s.get(wt);if(wt.version!==Ut.__version||_t===!0){if(i.activeTexture(o.TEXTURE0+J),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const yt=Ie.getPrimaries(Ie.workingColorSpace),Lt=M.colorSpace===vs?null:Ie.getPrimaries(M.colorSpace),Xt=M.colorSpace===vs||yt===Lt?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt)}i.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment);let Mt=y(M.image,!1,l.maxTextureSize);Mt=_e(M,Mt);const Nt=c.convert(M.format,M.colorSpace),te=c.convert(M.type);let Bt=w(M.internalFormat,Nt,te,M.normalized,M.colorSpace,M.isVideoTexture);gt(it,M);let zt;const kt=M.mipmaps,ae=M.isVideoTexture!==!0,he=Ut.__version===void 0||_t===!0,X=wt.dataReady,Dt=U(M,Mt);if(M.isDepthTexture)Bt=N(M.format===Ks,M.type),he&&(ae?i.texStorage2D(o.TEXTURE_2D,1,Bt,Mt.width,Mt.height):i.texImage2D(o.TEXTURE_2D,0,Bt,Mt.width,Mt.height,0,Nt,te,null));else if(M.isDataTexture)if(kt.length>0){ae&&he&&i.texStorage2D(o.TEXTURE_2D,Dt,Bt,kt[0].width,kt[0].height);for(let yt=0,Lt=kt.length;yt<Lt;yt++)zt=kt[yt],ae?X&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,zt.width,zt.height,Nt,te,zt.data):i.texImage2D(o.TEXTURE_2D,yt,Bt,zt.width,zt.height,0,Nt,te,zt.data);M.generateMipmaps=!1}else ae?(he&&i.texStorage2D(o.TEXTURE_2D,Dt,Bt,Mt.width,Mt.height),X&&ht(M,Mt,Nt,te)):i.texImage2D(o.TEXTURE_2D,0,Bt,Mt.width,Mt.height,0,Nt,te,Mt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ae&&he&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Dt,Bt,kt[0].width,kt[0].height,Mt.depth);for(let yt=0,Lt=kt.length;yt<Lt;yt++)if(zt=kt[yt],M.format!==Ii)if(Nt!==null)if(ae){if(X)if(M.layerUpdates.size>0){const Xt=nS(zt.width,zt.height,M.format,M.type);for(const Tt of M.layerUpdates){const $t=zt.data.subarray(Tt*Xt/zt.data.BYTES_PER_ELEMENT,(Tt+1)*Xt/zt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,Tt,zt.width,zt.height,1,Nt,$t)}}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,zt.width,zt.height,Mt.depth,Nt,zt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,yt,Bt,zt.width,zt.height,Mt.depth,0,zt.data,0,0);else ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?X&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,zt.width,zt.height,Mt.depth,Nt,te,zt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,yt,Bt,zt.width,zt.height,Mt.depth,0,Nt,te,zt.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{ae&&he&&i.texStorage2D(o.TEXTURE_2D,Dt,Bt,kt[0].width,kt[0].height);for(let yt=0,Lt=kt.length;yt<Lt;yt++)zt=kt[yt],M.format!==Ii?Nt!==null?ae?X&&i.compressedTexSubImage2D(o.TEXTURE_2D,yt,0,0,zt.width,zt.height,Nt,zt.data):i.compressedTexImage2D(o.TEXTURE_2D,yt,Bt,zt.width,zt.height,0,zt.data):ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?X&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,zt.width,zt.height,Nt,te,zt.data):i.texImage2D(o.TEXTURE_2D,yt,Bt,zt.width,zt.height,0,Nt,te,zt.data)}else if(M.isDataArrayTexture)if(ae){if(he&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Dt,Bt,Mt.width,Mt.height,Mt.depth),X)if(M.layerUpdates.size>0){const yt=nS(Mt.width,Mt.height,M.format,M.type);for(const Lt of M.layerUpdates){const Xt=Mt.data.subarray(Lt*yt/Mt.data.BYTES_PER_ELEMENT,(Lt+1)*yt/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Lt,Mt.width,Mt.height,1,Nt,te,Xt)}M.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Nt,te,Mt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Bt,Mt.width,Mt.height,Mt.depth,0,Nt,te,Mt.data);else if(M.isData3DTexture)ae?(he&&i.texStorage3D(o.TEXTURE_3D,Dt,Bt,Mt.width,Mt.height,Mt.depth),X&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Nt,te,Mt.data)):i.texImage3D(o.TEXTURE_3D,0,Bt,Mt.width,Mt.height,Mt.depth,0,Nt,te,Mt.data);else if(M.isFramebufferTexture){if(he)if(ae)i.texStorage2D(o.TEXTURE_2D,Dt,Bt,Mt.width,Mt.height);else{let yt=Mt.width,Lt=Mt.height;for(let Xt=0;Xt<Dt;Xt++)i.texImage2D(o.TEXTURE_2D,Xt,Bt,yt,Lt,0,Nt,te,null),yt>>=1,Lt>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in o){const yt=o.canvas;if(yt.hasAttribute("layoutsubtree")||yt.setAttribute("layoutsubtree","true"),Mt.parentNode!==yt){yt.appendChild(Mt),_.add(M),yt.onpaint=Lt=>{const Xt=Lt.changedElements;for(const Tt of _)Xt.includes(Tt.image)&&(Tt.needsUpdate=!0)},yt.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,Mt);else{const Xt=o.RGBA,Tt=o.RGBA,$t=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,Xt,Tt,$t,Mt)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(kt.length>0){if(ae&&he){const yt=Ee(kt[0]);i.texStorage2D(o.TEXTURE_2D,Dt,Bt,yt.width,yt.height)}for(let yt=0,Lt=kt.length;yt<Lt;yt++)zt=kt[yt],ae?X&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Nt,te,zt):i.texImage2D(o.TEXTURE_2D,yt,Bt,Nt,te,zt);M.generateMipmaps=!1}else if(ae){if(he){const yt=Ee(Mt);i.texStorage2D(o.TEXTURE_2D,Dt,Bt,yt.width,yt.height)}X&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Nt,te,Mt)}else i.texImage2D(o.TEXTURE_2D,0,Bt,Nt,te,Mt);x(M)&&L(it),Ut.__version=wt.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function It(D,M,J){if(M.image.length!==6)return;const it=Rt(D,M),_t=M.source;i.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+J);const wt=s.get(_t);if(_t.version!==wt.__version||it===!0){i.activeTexture(o.TEXTURE0+J);const Ut=Ie.getPrimaries(Ie.workingColorSpace),vt=M.colorSpace===vs?null:Ie.getPrimaries(M.colorSpace),Mt=M.colorSpace===vs||Ut===vt?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const Nt=M.isCompressedTexture||M.image[0].isCompressedTexture,te=M.image[0]&&M.image[0].isDataTexture,Bt=[];for(let Tt=0;Tt<6;Tt++)!Nt&&!te?Bt[Tt]=y(M.image[Tt],!0,l.maxCubemapSize):Bt[Tt]=te?M.image[Tt].image:M.image[Tt],Bt[Tt]=_e(M,Bt[Tt]);const zt=Bt[0],kt=c.convert(M.format,M.colorSpace),ae=c.convert(M.type),he=w(M.internalFormat,kt,ae,M.normalized,M.colorSpace),X=M.isVideoTexture!==!0,Dt=wt.__version===void 0||it===!0,yt=_t.dataReady;let Lt=U(M,zt);gt(o.TEXTURE_CUBE_MAP,M);let Xt;if(Nt){X&&Dt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,he,zt.width,zt.height);for(let Tt=0;Tt<6;Tt++){Xt=Bt[Tt].mipmaps;for(let $t=0;$t<Xt.length;$t++){const Vt=Xt[$t];M.format!==Ii?kt!==null?X?yt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,$t,0,0,Vt.width,Vt.height,kt,Vt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,$t,he,Vt.width,Vt.height,0,Vt.data):ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?yt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,$t,0,0,Vt.width,Vt.height,kt,ae,Vt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,$t,he,Vt.width,Vt.height,0,kt,ae,Vt.data)}}}else{if(Xt=M.mipmaps,X&&Dt){Xt.length>0&&Lt++;const Tt=Ee(Bt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,he,Tt.width,Tt.height)}for(let Tt=0;Tt<6;Tt++)if(te){X?yt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,Bt[Tt].width,Bt[Tt].height,kt,ae,Bt[Tt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,he,Bt[Tt].width,Bt[Tt].height,0,kt,ae,Bt[Tt].data);for(let $t=0;$t<Xt.length;$t++){const Oe=Xt[$t].image[Tt].image;X?yt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,$t+1,0,0,Oe.width,Oe.height,kt,ae,Oe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,$t+1,he,Oe.width,Oe.height,0,kt,ae,Oe.data)}}else{X?yt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,kt,ae,Bt[Tt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,he,kt,ae,Bt[Tt]);for(let $t=0;$t<Xt.length;$t++){const Vt=Xt[$t];X?yt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,$t+1,0,0,kt,ae,Vt.image[Tt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,$t+1,he,kt,ae,Vt.image[Tt])}}}x(M)&&L(o.TEXTURE_CUBE_MAP),wt.__version=_t.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function mt(D,M,J,it,_t,wt){const Ut=c.convert(J.format,J.colorSpace),vt=c.convert(J.type),Mt=w(J.internalFormat,Ut,vt,J.normalized,J.colorSpace),Nt=s.get(M),te=s.get(J);if(te.__renderTarget=M,!Nt.__hasExternalTextures){const Bt=Math.max(1,M.width>>wt),zt=Math.max(1,M.height>>wt);_t===o.TEXTURE_3D||_t===o.TEXTURE_2D_ARRAY?i.texImage3D(_t,wt,Mt,Bt,zt,M.depth,0,Ut,vt,null):i.texImage2D(_t,wt,Mt,Bt,zt,0,Ut,vt,null)}i.bindFramebuffer(o.FRAMEBUFFER,D),de(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,it,_t,te.__webglTexture,0,ie(M)):(_t===o.TEXTURE_2D||_t>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&_t<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,it,_t,te.__webglTexture,wt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ct(D,M,J){if(o.bindRenderbuffer(o.RENDERBUFFER,D),M.depthBuffer){const it=M.depthTexture,_t=it&&it.isDepthTexture?it.type:null,wt=N(M.stencilBuffer,_t),Ut=M.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;de(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ie(M),wt,M.width,M.height):J?o.renderbufferStorageMultisample(o.RENDERBUFFER,ie(M),wt,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,wt,M.width,M.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ut,o.RENDERBUFFER,D)}else{const it=M.textures;for(let _t=0;_t<it.length;_t++){const wt=it[_t],Ut=c.convert(wt.format,wt.colorSpace),vt=c.convert(wt.type),Mt=w(wt.internalFormat,Ut,vt,wt.normalized,wt.colorSpace);de(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ie(M),Mt,M.width,M.height):J?o.renderbufferStorageMultisample(o.RENDERBUFFER,ie(M),Mt,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,Mt,M.width,M.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function He(D,M,J){const it=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,D),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const _t=s.get(M.depthTexture);if(_t.__renderTarget=M,(!_t.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),it){if(_t.__webglInit===void 0&&(_t.__webglInit=!0,M.depthTexture.addEventListener("dispose",P)),_t.__webglTexture===void 0){_t.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,_t.__webglTexture),gt(o.TEXTURE_CUBE_MAP,M.depthTexture);const Nt=c.convert(M.depthTexture.format),te=c.convert(M.depthTexture.type);let Bt;M.depthTexture.format===Ia?Bt=o.DEPTH_COMPONENT24:M.depthTexture.format===Ks&&(Bt=o.DEPTH24_STENCIL8);for(let zt=0;zt<6;zt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0,Bt,M.width,M.height,0,Nt,te,null)}}else ft(M.depthTexture,0);const wt=_t.__webglTexture,Ut=ie(M),vt=it?o.TEXTURE_CUBE_MAP_POSITIVE_X+J:o.TEXTURE_2D,Mt=M.depthTexture.format===Ks?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(M.depthTexture.format===Ia)de(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Mt,vt,wt,0,Ut):o.framebufferTexture2D(o.FRAMEBUFFER,Mt,vt,wt,0);else if(M.depthTexture.format===Ks)de(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Mt,vt,wt,0,Ut):o.framebufferTexture2D(o.FRAMEBUFFER,Mt,vt,wt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function fe(D){const M=s.get(D),J=D.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==D.depthTexture){const it=D.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),it){const _t=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,it.removeEventListener("dispose",_t)};it.addEventListener("dispose",_t),M.__depthDisposeCallback=_t}M.__boundDepthTexture=it}if(D.depthTexture&&!M.__autoAllocateDepthBuffer)if(J)for(let it=0;it<6;it++)He(M.__webglFramebuffer[it],D,it);else{const it=D.texture.mipmaps;it&&it.length>0?He(M.__webglFramebuffer[0],D,0):He(M.__webglFramebuffer,D,0)}else if(J){M.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[it]),M.__webglDepthbuffer[it]===void 0)M.__webglDepthbuffer[it]=o.createRenderbuffer(),Ct(M.__webglDepthbuffer[it],D,!1);else{const _t=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,wt=M.__webglDepthbuffer[it];o.bindRenderbuffer(o.RENDERBUFFER,wt),o.framebufferRenderbuffer(o.FRAMEBUFFER,_t,o.RENDERBUFFER,wt)}}else{const it=D.texture.mipmaps;if(it&&it.length>0?i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=o.createRenderbuffer(),Ct(M.__webglDepthbuffer,D,!1);else{const _t=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,wt=M.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,wt),o.framebufferRenderbuffer(o.FRAMEBUFFER,_t,o.RENDERBUFFER,wt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function xe(D,M,J){const it=s.get(D);M!==void 0&&mt(it.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),J!==void 0&&fe(D)}function ye(D){const M=D.texture,J=s.get(D),it=s.get(M);D.addEventListener("dispose",T);const _t=D.textures,wt=D.isWebGLCubeRenderTarget===!0,Ut=_t.length>1;if(Ut||(it.__webglTexture===void 0&&(it.__webglTexture=o.createTexture()),it.__version=M.version,d.memory.textures++),wt){J.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(M.mipmaps&&M.mipmaps.length>0){J.__webglFramebuffer[vt]=[];for(let Mt=0;Mt<M.mipmaps.length;Mt++)J.__webglFramebuffer[vt][Mt]=o.createFramebuffer()}else J.__webglFramebuffer[vt]=o.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){J.__webglFramebuffer=[];for(let vt=0;vt<M.mipmaps.length;vt++)J.__webglFramebuffer[vt]=o.createFramebuffer()}else J.__webglFramebuffer=o.createFramebuffer();if(Ut)for(let vt=0,Mt=_t.length;vt<Mt;vt++){const Nt=s.get(_t[vt]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=o.createTexture(),d.memory.textures++)}if(D.samples>0&&de(D)===!1){J.__webglMultisampledFramebuffer=o.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let vt=0;vt<_t.length;vt++){const Mt=_t[vt];J.__webglColorRenderbuffer[vt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,J.__webglColorRenderbuffer[vt]);const Nt=c.convert(Mt.format,Mt.colorSpace),te=c.convert(Mt.type),Bt=w(Mt.internalFormat,Nt,te,Mt.normalized,Mt.colorSpace,D.isXRRenderTarget===!0),zt=ie(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,zt,Bt,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+vt,o.RENDERBUFFER,J.__webglColorRenderbuffer[vt])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(J.__webglDepthRenderbuffer=o.createRenderbuffer(),Ct(J.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(wt){i.bindTexture(o.TEXTURE_CUBE_MAP,it.__webglTexture),gt(o.TEXTURE_CUBE_MAP,M);for(let vt=0;vt<6;vt++)if(M.mipmaps&&M.mipmaps.length>0)for(let Mt=0;Mt<M.mipmaps.length;Mt++)mt(J.__webglFramebuffer[vt][Mt],D,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Mt);else mt(J.__webglFramebuffer[vt],D,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);x(M)&&L(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ut){for(let vt=0,Mt=_t.length;vt<Mt;vt++){const Nt=_t[vt],te=s.get(Nt);let Bt=o.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Bt=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Bt,te.__webglTexture),gt(Bt,Nt),mt(J.__webglFramebuffer,D,Nt,o.COLOR_ATTACHMENT0+vt,Bt,0),x(Nt)&&L(Bt)}i.unbindTexture()}else{let vt=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(vt=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(vt,it.__webglTexture),gt(vt,M),M.mipmaps&&M.mipmaps.length>0)for(let Mt=0;Mt<M.mipmaps.length;Mt++)mt(J.__webglFramebuffer[Mt],D,M,o.COLOR_ATTACHMENT0,vt,Mt);else mt(J.__webglFramebuffer,D,M,o.COLOR_ATTACHMENT0,vt,0);x(M)&&L(vt),i.unbindTexture()}D.depthBuffer&&fe(D)}function ee(D){const M=D.textures;for(let J=0,it=M.length;J<it;J++){const _t=M[J];if(x(_t)){const wt=G(D),Ut=s.get(_t).__webglTexture;i.bindTexture(wt,Ut),L(wt),i.unbindTexture()}}}const At=[],oe=[];function Me(D){if(D.samples>0){if(de(D)===!1){const M=D.textures,J=D.width,it=D.height;let _t=o.COLOR_BUFFER_BIT;const wt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ut=s.get(D),vt=M.length>1;if(vt)for(let Nt=0;Nt<M.length;Nt++)i.bindFramebuffer(o.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Nt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ut.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Nt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer);const Mt=D.texture.mipmaps;Mt&&Mt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Nt=0;Nt<M.length;Nt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(_t|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(_t|=o.STENCIL_BUFFER_BIT)),vt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ut.__webglColorRenderbuffer[Nt]);const te=s.get(M[Nt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,te,0)}o.blitFramebuffer(0,0,J,it,0,0,J,it,_t,o.NEAREST),p===!0&&(At.length=0,oe.length=0,At.push(o.COLOR_ATTACHMENT0+Nt),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&(At.push(wt),oe.push(wt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,oe)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,At))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),vt)for(let Nt=0;Nt<M.length;Nt++){i.bindFramebuffer(o.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Nt,o.RENDERBUFFER,Ut.__webglColorRenderbuffer[Nt]);const te=s.get(M[Nt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ut.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Nt,o.TEXTURE_2D,te,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&p){const M=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[M])}}}function ie(D){return Math.min(l.maxSamples,D.samples)}function de(D){const M=s.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function B(D){const M=d.render.frame;S.get(D)!==M&&(S.set(D,M),D.update())}function _e(D,M){const J=D.colorSpace,it=D.format,_t=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||J!==wc&&J!==vs&&(Ie.getTransfer(J)===Qe?(it!==Ii||_t!==Ti)&&ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Fe("WebGLTextures: Unsupported texture color space:",J)),M}function Ee(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(m.width=D.naturalWidth||D.width,m.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(m.width=D.displayWidth,m.height=D.displayHeight):(m.width=D.width,m.height=D.height),m}this.allocateTextureUnit=k,this.resetTextureUnits=ut,this.getTextureUnits=K,this.setTextureUnits=tt,this.setTexture2D=ft,this.setTexture2DArray=ot,this.setTexture3D=pt,this.setTextureCube=Et,this.rebindTextures=xe,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=de,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function V3(o,e){function i(s,l=vs){let c;const d=Ie.getTransfer(l);if(s===Ti)return o.UNSIGNED_BYTE;if(s===Yp)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Zp)return o.UNSIGNED_SHORT_5_5_5_1;if(s===GS)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===VS)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===FS)return o.BYTE;if(s===HS)return o.SHORT;if(s===yl)return o.UNSIGNED_SHORT;if(s===qp)return o.INT;if(s===la)return o.UNSIGNED_INT;if(s===ia)return o.FLOAT;if(s===ua)return o.HALF_FLOAT;if(s===XS)return o.ALPHA;if(s===kS)return o.RGB;if(s===Ii)return o.RGBA;if(s===Ia)return o.DEPTH_COMPONENT;if(s===Ks)return o.DEPTH_STENCIL;if(s===WS)return o.RED;if(s===Kp)return o.RED_INTEGER;if(s===Js)return o.RG;if(s===jp)return o.RG_INTEGER;if(s===Qp)return o.RGBA_INTEGER;if(s===yc||s===Mc||s===Ec||s===Tc)if(d===Qe)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===yc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Mc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ec)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Tc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===yc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Mc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ec)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Tc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===up||s===cp||s===fp||s===dp)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===up)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===cp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===fp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===dp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===hp||s===pp||s===mp||s===gp||s===_p||s===Rc||s===vp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===hp||s===pp)return d===Qe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===mp)return d===Qe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===gp)return c.COMPRESSED_R11_EAC;if(s===_p)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Rc)return c.COMPRESSED_RG11_EAC;if(s===vp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Sp||s===xp||s===yp||s===Mp||s===Ep||s===Tp||s===bp||s===Ap||s===Rp||s===Cp||s===wp||s===Dp||s===Np||s===Up)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Sp)return d===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===xp)return d===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===yp)return d===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Mp)return d===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ep)return d===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Tp)return d===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===bp)return d===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ap)return d===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Rp)return d===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Cp)return d===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===wp)return d===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Dp)return d===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Np)return d===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Up)return d===Qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Lp||s===Op||s===Pp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Lp)return d===Qe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Op)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Pp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ip||s===zp||s===Cc||s===Bp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Ip)return c.COMPRESSED_RED_RGTC1_EXT;if(s===zp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Cc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Bp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ml?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const X3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,k3=`
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

}`;class W3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new tx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Bi({vertexShader:X3,fragmentShader:k3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new za(new Ic(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class q3 extends tr{constructor(e,i){super();const s=this;let l=null,c=1,d=null,h="local-floor",p=1,m=null,S=null,_=null,v=null,E=null,R=null;const C=typeof XRWebGLBinding<"u",y=new W3,x={},L=i.getContextAttributes();let G=null,w=null;const N=[],U=[],P=new Ge;let T=null,O=null;const V=new Oi;V.viewport=new fn;const Y=new Oi;Y.viewport=new fn;const $=[V,Y],ut=new $T;let K=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ht=N[Z];return ht===void 0&&(ht=new Uh,N[Z]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(Z){let ht=N[Z];return ht===void 0&&(ht=new Uh,N[Z]=ht),ht.getGripSpace()},this.getHand=function(Z){let ht=N[Z];return ht===void 0&&(ht=new Uh,N[Z]=ht),ht.getHandSpace()};function k(Z){const ht=U.indexOf(Z.inputSource);if(ht===-1)return;const bt=N[ht];bt!==void 0&&(bt.update(Z.inputSource,Z.frame,m||d),bt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function W(){l.removeEventListener("select",k),l.removeEventListener("selectstart",k),l.removeEventListener("selectend",k),l.removeEventListener("squeeze",k),l.removeEventListener("squeezestart",k),l.removeEventListener("squeezeend",k),l.removeEventListener("end",W),l.removeEventListener("inputsourceschange",ft);for(let Z=0;Z<N.length;Z++){const ht=U[Z];ht!==null&&(U[Z]=null,N[Z].disconnect(ht))}K=null,tt=null,y.reset();for(const Z in x)delete x[Z];if(e.setRenderTarget(G),E=null,v=null,_=null,l=null,w=null,Rt.stop(),s.isPresenting=!1,e.setPixelRatio(T),e.setSize(P.width,P.height,!1),O!==null){const Z=O.camera;Z.fov=O.fov,Z.zoom=O.zoom,Z.updateProjectionMatrix(),O=null}s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){c=Z,s.isPresenting===!0&&ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){h=Z,s.isPresenting===!0&&ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(Z){m=Z},this.getBaseLayer=function(){return v!==null?v:E},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return R},this.getSession=function(){return l},this.setSession=async function(Z){if(l=Z,l!==null){if(G=e.getRenderTarget(),l.addEventListener("select",k),l.addEventListener("selectstart",k),l.addEventListener("selectend",k),l.addEventListener("squeeze",k),l.addEventListener("squeezestart",k),l.addEventListener("squeezeend",k),l.addEventListener("end",W),l.addEventListener("inputsourceschange",ft),L.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(P),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,It=null,mt=null;L.depth&&(mt=L.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,bt=L.stencil?Ks:Ia,It=L.stencil?Ml:la);const Ct={colorFormat:i.RGBA8,depthFormat:mt,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer(Ct),l.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),w=new zi(v.textureWidth,v.textureHeight,{format:Ii,type:Ti,depthTexture:new El(v.textureWidth,v.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}else{const bt={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,bt),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),w=new zi(E.framebufferWidth,E.framebufferHeight,{format:Ii,type:Ti,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1,storeMultisampledDepthBuffer:E.ignoreDepthValues===!1,storeMultisampledStencilBuffer:E.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await l.requestReferenceSpace(h),Rt.setContext(l),Rt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ft(Z){for(let ht=0;ht<Z.removed.length;ht++){const bt=Z.removed[ht],It=U.indexOf(bt);It>=0&&(U[It]=null,N[It].disconnect(bt))}for(let ht=0;ht<Z.added.length;ht++){const bt=Z.added[ht];let It=U.indexOf(bt);if(It===-1){for(let Ct=0;Ct<N.length;Ct++)if(Ct>=U.length){U.push(bt),It=Ct;break}else if(U[Ct]===null){U[Ct]=bt,It=Ct;break}if(It===-1)break}const mt=N[It];mt&&mt.connect(bt)}}const ot=new ct,pt=new ct;function Et(Z,ht,bt){ot.setFromMatrixPosition(ht.matrixWorld),pt.setFromMatrixPosition(bt.matrixWorld);const It=ot.distanceTo(pt),mt=ht.projectionMatrix.elements,Ct=bt.projectionMatrix.elements,He=mt[14]/(mt[10]-1),fe=mt[14]/(mt[10]+1),xe=(mt[9]+1)/mt[5],ye=(mt[9]-1)/mt[5],ee=(mt[8]-1)/mt[0],At=(Ct[8]+1)/Ct[0],oe=He*ee,Me=He*At,ie=It/(-ee+At),de=ie*-ee;if(ht.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(de),Z.translateZ(ie),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),mt[10]===-1)Z.projectionMatrix.copy(ht.projectionMatrix),Z.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const B=He+ie,_e=fe+ie,Ee=oe-de,D=Me+(It-de),M=xe*fe/_e*B,J=ye*fe/_e*B;Z.projectionMatrix.makePerspective(Ee,D,M,J,B,_e),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Zt(Z,ht){ht===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ht.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(l===null)return;let ht=Z.near,bt=Z.far;y.texture!==null&&(y.depthNear>0&&(ht=y.depthNear),y.depthFar>0&&(bt=y.depthFar)),ut.near=Y.near=V.near=ht,ut.far=Y.far=V.far=bt,(K!==ut.near||tt!==ut.far)&&(l.updateRenderState({depthNear:ut.near,depthFar:ut.far}),K=ut.near,tt=ut.far),ut.layers.mask=Z.layers.mask|6,V.layers.mask=ut.layers.mask&-5,Y.layers.mask=ut.layers.mask&-3;const It=Z.parent,mt=ut.cameras;Zt(ut,It);for(let Ct=0;Ct<mt.length;Ct++)Zt(mt[Ct],It);mt.length===2?Et(ut,V,Y):ut.projectionMatrix.copy(V.projectionMatrix),O===null&&Z.isPerspectiveCamera&&(O={camera:Z,fov:Z.fov,zoom:Z.zoom}),jt(Z,ut,It)};function jt(Z,ht,bt){bt===null?Z.matrix.copy(ht.matrixWorld):(Z.matrix.copy(bt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ht.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ht.projectionMatrix),Z.projectionMatrixInverse.copy(ht.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Fp*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return ut},this.getFoveation=function(){if(!(v===null&&E===null))return p},this.setFoveation=function(Z){p=Z,v!==null&&(v.fixedFoveation=Z),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=Z)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(ut)},this.getCameraTexture=function(Z){return x[Z]};let z=null;function gt(Z,ht){if(S=ht.getViewerPose(m||d),R=ht,S!==null){const bt=S.views;E!==null&&(e.setRenderTargetFramebuffer(w,E.framebuffer),e.setRenderTarget(w));let It=!1;bt.length!==ut.cameras.length&&(ut.cameras.length=0,It=!0);for(let fe=0;fe<bt.length;fe++){const xe=bt[fe];let ye=null;if(E!==null)ye=E.getViewport(xe);else{const At=_.getViewSubImage(v,xe);ye=At.viewport,fe===0&&(e.setRenderTargetTextures(w,At.colorTexture,At.depthStencilTexture),e.setRenderTarget(w))}let ee=$[fe];ee===void 0&&(ee=new Oi,ee.layers.enable(fe),ee.viewport=new fn,$[fe]=ee),ee.matrix.fromArray(xe.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(xe.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(ye.x,ye.y,ye.width,ye.height),fe===0&&(ut.matrix.copy(ee.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale)),It===!0&&ut.cameras.push(ee)}const mt=l.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){_=s.getBinding();const fe=_.getDepthInformation(bt[0]);fe&&fe.isValid&&fe.texture&&y.init(fe,l.renderState)}if(mt&&mt.includes("camera-access")&&C){e.state.unbindTexture(),_=s.getBinding();for(let fe=0;fe<bt.length;fe++){const xe=bt[fe].camera;if(xe){let ye=x[xe];ye||(ye=new tx,x[xe]=ye);const ee=_.getCameraImage(xe);ye.sourceTexture=ee}}}}for(let bt=0;bt<N.length;bt++){const It=U[bt],mt=N[bt];It!==null&&mt!==void 0&&mt.update(It,ht,m||d)}z&&z(Z,ht),ht.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ht}),R=null}const Rt=new ix;Rt.setAnimationLoop(gt),this.setAnimationLoop=function(Z){z=Z},this.dispose=function(){}}}const Y3=new dn,cx=new ge;cx.set(-1,0,0,0,1,0,0,0,1);function Z3(o,e){function i(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function s(y,x){x.color.getRGB(y.fogColor.value,ex(o)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function l(y,x,L,G,w){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?c(y,x):x.isMeshLambertMaterial?(c(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(y,x),_(y,x)):x.isMeshPhongMaterial?(c(y,x),S(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(y,x),v(y,x),x.isMeshPhysicalMaterial&&E(y,x,w)):x.isMeshMatcapMaterial?(c(y,x),R(y,x)):x.isMeshDepthMaterial?c(y,x):x.isMeshDistanceMaterial?(c(y,x),C(y,x)):x.isMeshNormalMaterial?c(y,x):x.isLineBasicMaterial?(d(y,x),x.isLineDashedMaterial&&h(y,x)):x.isPointsMaterial?p(y,x,L,G):x.isSpriteMaterial?m(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,i(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Qn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,i(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Qn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,i(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,i(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const L=e.get(x),G=L.envMap,w=L.envMapRotation;G&&(y.envMap.value=G,y.envMapRotation.value.setFromMatrix4(Y3.makeRotationFromEuler(w)).transpose(),G.isCubeTexture&&G.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(cx),y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,y.aoMapTransform))}function d(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform))}function h(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function p(y,x,L,G){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*L,y.scale.value=G*.5,x.map&&(y.map.value=x.map,i(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function m(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function S(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function _(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function v(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function E(y,x,L){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Qn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.retroreflectivity>0&&(y.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,y.specularIntensityMapTransform))}function R(y,x){x.matcap&&(y.matcap.value=x.matcap)}function C(y,x){const L=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function K3(o,e,i,s){let l={},c={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(w,N){const U=N.program;s.uniformBlockBinding(w,U)}function m(w,N){let U=l[w.id];U===void 0&&(y(w),U=S(w),l[w.id]=U,w.addEventListener("dispose",L));const P=N.program;s.updateUBOMapping(w,P);const T=e.render.frame;c[w.id]!==T&&(v(w),c[w.id]=T)}function S(w){const N=_();w.__bindingPointIndex=N;const U=o.createBuffer(),P=w.__size,T=w.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,P,T),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,U),U}function _(){for(let w=0;w<h;w++)if(d.indexOf(w)===-1)return d.push(w),w;return Fe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(w){const N=l[w.id],U=w.uniforms,P=w.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let T=0,O=U.length;T<O;T++){const V=U[T];if(Array.isArray(V))for(let Y=0,$=V.length;Y<$;Y++)E(V[Y],T,Y,P);else E(V,T,0,P)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(w,N,U,P){if(C(w,N,U,P)===!0){const T=w.__offset,O=w.value;if(Array.isArray(O)){let V=0;for(let Y=0;Y<O.length;Y++){const $=O[Y],ut=x($);R($,w.__data,V),typeof $!="number"&&typeof $!="boolean"&&!$.isMatrix3&&!ArrayBuffer.isView($)&&(V+=ut.storage/Float32Array.BYTES_PER_ELEMENT)}}else R(O,w.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,T,w.__data)}}function R(w,N,U){typeof w=="number"||typeof w=="boolean"?N[0]=w:w.isMatrix3?(N[0]=w.elements[0],N[1]=w.elements[1],N[2]=w.elements[2],N[3]=0,N[4]=w.elements[3],N[5]=w.elements[4],N[6]=w.elements[5],N[7]=0,N[8]=w.elements[6],N[9]=w.elements[7],N[10]=w.elements[8],N[11]=0):ArrayBuffer.isView(w)?N.set(new w.constructor(w.buffer,w.byteOffset,N.length)):w.toArray(N,U)}function C(w,N,U,P){const T=w.value,O=N+"_"+U;if(P[O]===void 0)return typeof T=="number"||typeof T=="boolean"?P[O]=T:ArrayBuffer.isView(T)?P[O]=T.slice():P[O]=T.clone(),!0;{const V=P[O];if(typeof T=="number"||typeof T=="boolean"){if(V!==T)return P[O]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(V.equals(T)===!1)return V.copy(T),!0}}return!1}function y(w){const N=w.uniforms;let U=0;const P=16;for(let O=0,V=N.length;O<V;O++){const Y=Array.isArray(N[O])?N[O]:[N[O]];for(let $=0,ut=Y.length;$<ut;$++){const K=Y[$],tt=Array.isArray(K.value)?K.value:[K.value];for(let k=0,W=tt.length;k<W;k++){const ft=tt[k],ot=x(ft),pt=U%P,Et=pt%ot.boundary,Zt=pt+Et;U+=Et,Zt!==0&&P-Zt<ot.storage&&(U+=P-Zt),K.__data=new Float32Array(ot.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=U,U+=ot.storage}}}const T=U%P;return T>0&&(U+=P-T),w.__size=U,w.__cache={},this}function x(w){const N={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(N.boundary=4,N.storage=4):w.isVector2?(N.boundary=8,N.storage=8):w.isVector3||w.isColor?(N.boundary=16,N.storage=12):w.isVector4?(N.boundary=16,N.storage=16):w.isMatrix3?(N.boundary=48,N.storage=48):w.isMatrix4?(N.boundary=64,N.storage=64):w.isTexture?ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(N.boundary=16,N.storage=w.byteLength):ce("WebGLRenderer: Unsupported uniform value type.",w),N}function L(w){const N=w.target;N.removeEventListener("dispose",L);const U=d.indexOf(N.__bindingPointIndex);d.splice(U,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function G(){for(const w in l)o.deleteBuffer(l[w]);d=[],l={},c={}}return{bind:p,update:m,dispose:G}}const j3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ea=null;function Q3(){return ea===null&&(ea=new HT(j3,16,16,Js,ua),ea.name="DFG_LUT",ea.minFilter=zn,ea.magFilter=zn,ea.wrapS=La,ea.wrapT=La,ea.generateMipmaps=!1,ea.needsUpdate=!0),ea}class J3{constructor(e={}){const{canvas:i=mT(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:E=Ti}=e;this.isWebGLRenderer=!0;let R;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=s.getContextAttributes().alpha}else R=d;const C=E,y=new Set([Qp,jp,Kp]),x=new Set([Ti,la,yl,Ml,Yp,Zp]),L=new Uint32Array(4),G=new Int32Array(4),w=new ct;let N=null,U=null;const P=[],T=[];let O=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=sa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const V=this;let Y=!1,$=null,ut=null,K=null,tt=null;this._outputColorSpace=fi;let k=0,W=0,ft=null,ot=-1,pt=null;const Et=new fn,Zt=new fn;let jt=null;const z=new ke(0);let gt=0,Rt=i.width,Z=i.height,ht=1,bt=null,It=null;const mt=new fn(0,0,Rt,Z),Ct=new fn(0,0,Rt,Z);let He=!1;const fe=new JS;let xe=!1,ye=!1;const ee=new dn,At=new ct,oe=new fn,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ie=!1;function de(){return ft===null?ht:1}let B=s;function _e(b,F){return i.getContext(b,F)}let Ee,D,M,J,it,_t,wt,Ut,vt,Mt,Nt,te,Bt,zt,kt,ae,he,X,Dt,yt,Lt,Xt,Tt;try{const b={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:S,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Wp}`),i.addEventListener("webglcontextlost",Oe,!1),i.addEventListener("webglcontextrestored",pe,!1),i.addEventListener("webglcontextcreationerror",$n,!1),B===null){const F="webgl2";if(B=_e(F,b),B===null)throw _e(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$t()}catch(b){throw i.removeEventListener("webglcontextlost",Oe,!1),i.removeEventListener("webglcontextrestored",pe,!1),i.removeEventListener("webglcontextcreationerror",$n,!1),Fe("WebGLRenderer: "+b.message),b}function $t(){Ee=new QA(B),Ee.init(),Lt=new V3(B,Ee),D=new GA(B,Ee,e,Lt),M=new H3(B,Ee),D.reversedDepthBuffer&&v&&M.buffers.depth.setReversed(!0),ut=B.createFramebuffer(),K=B.createFramebuffer(),tt=B.createFramebuffer(),J=new tR(B),it=new A3,_t=new G3(B,Ee,M,it,D,Lt,J),wt=new jA(V),Ut=new nb(B),Xt=new FA(B,Ut),vt=new JA(B,Ut,J,Xt),Mt=new nR(B,vt,Ut,Xt,J),X=new eR(B,D,_t),kt=new VA(it),Nt=new b3(V,wt,Ee,D,Xt,kt),te=new Z3(V,it),Bt=new C3,zt=new O3(Ee),he=new BA(V,wt,M,Mt,R,p),ae=new F3(V,Mt,D),Tt=new K3(B,J,D,M),Dt=new HA(B,Ee,J),yt=new $A(B,Ee,J),J.programs=Nt.programs,V.capabilities=D,V.extensions=Ee,V.properties=it,V.renderLists=Bt,V.shadowMap=ae,V.state=M,V.info=J}C!==Ti&&(O=new aR(C,i.width,i.height,h,l,c));const Vt=new q3(V,B);this.xr=Vt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const b=Ee.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ee.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ht},this.setPixelRatio=function(b){b!==void 0&&(ht=b,this.setSize(Rt,Z,!1))},this.getSize=function(b){return b.set(Rt,Z)},this.setSize=function(b,F,dt=!0){if(Vt.isPresenting){ce("WebGLRenderer: Can't change size while VR device is presenting.");return}Rt=b,Z=F,i.width=Math.floor(b*ht),i.height=Math.floor(F*ht),dt===!0&&(i.style.width=b+"px",i.style.height=F+"px"),O!==null&&O.setSize(i.width,i.height),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(Rt*ht,Z*ht).floor()},this.setDrawingBufferSize=function(b,F,dt){Rt=b,Z=F,ht=dt,i.width=Math.floor(b*dt),i.height=Math.floor(F*dt),this.setViewport(0,0,b,F)},this.setEffects=function(b){if(C===Ti){Fe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let F=0;F<b.length;F++)if(b[F].isOutputPass===!0){ce("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(Et)},this.getViewport=function(b){return b.copy(mt)},this.setViewport=function(b,F,dt,at){b.isVector4?mt.set(b.x,b.y,b.z,b.w):mt.set(b,F,dt,at),M.viewport(Et.copy(mt).multiplyScalar(ht).round())},this.getScissor=function(b){return b.copy(Ct)},this.setScissor=function(b,F,dt,at){b.isVector4?Ct.set(b.x,b.y,b.z,b.w):Ct.set(b,F,dt,at),M.scissor(Zt.copy(Ct).multiplyScalar(ht).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(b){M.setScissorTest(He=b)},this.setOpaqueSort=function(b){bt=b},this.setTransparentSort=function(b){It=b},this.getClearColor=function(b){return b.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor(...arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha(...arguments)},this.clear=function(b=!0,F=!0,dt=!0){let at=0;if(b){let st=!1;if(ft!==null){const Ft=ft.texture.format;st=y.has(Ft)}if(st){const Ft=ft.texture.type,Wt=x.has(Ft),Ot=he.getClearColor(),Kt=he.getClearAlpha(),Qt=Ot.r,re=Ot.g,me=Ot.b;Wt?(L[0]=Qt,L[1]=re,L[2]=me,L[3]=Kt,B.clearBufferuiv(B.COLOR,0,L)):(G[0]=Qt,G[1]=re,G[2]=me,G[3]=Kt,B.clearBufferiv(B.COLOR,0,G))}else at|=B.COLOR_BUFFER_BIT}F&&(at|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),dt&&(at|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),at!==0&&B.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),$=b},this.dispose=function(){i.removeEventListener("webglcontextlost",Oe,!1),i.removeEventListener("webglcontextrestored",pe,!1),i.removeEventListener("webglcontextcreationerror",$n,!1),he.dispose(),Bt.dispose(),zt.dispose(),it.dispose(),wt.dispose(),Mt.dispose(),Xt.dispose(),Tt.dispose(),Nt.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",ys),Vt.removeEventListener("sessionend",Fa),Hi.stop()};function Oe(b){b.preventDefault(),Lv("WebGLRenderer: Context Lost."),Y=!0}function pe(){Lv("WebGLRenderer: Context Restored."),Y=!1;const b=J.autoReset,F=ae.enabled,dt=ae.autoUpdate,at=ae.needsUpdate,st=ae.type;$t(),J.autoReset=b,ae.enabled=F,ae.autoUpdate=dt,ae.needsUpdate=at,ae.type=st}function $n(b){Fe("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function di(b){const F=b.target;F.removeEventListener("dispose",di),Fc(F)}function Fc(b){er(b),it.remove(b)}function er(b){const F=it.get(b).programs;F!==void 0&&(F.forEach(function(dt){Nt.releaseProgram(dt)}),b.isShaderMaterial&&Nt.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,dt,at,st,Ft){F===null&&(F=Me);const Wt=st.isMesh&&st.matrixWorld.determinantAffine()<0,Ot=_o(b,F,dt,at,st);M.setMaterial(at,Wt);let Kt=dt.index,Qt=1;if(at.wireframe===!0){if(Kt=vt.getWireframeAttribute(dt),Kt===void 0)return;Qt=2}const re=dt.drawRange,me=dt.attributes.position;let qt=re.start*Qt,Ce=(re.start+re.count)*Qt;Ft!==null&&(qt=Math.max(qt,Ft.start*Qt),Ce=Math.min(Ce,(Ft.start+Ft.count)*Qt)),Kt!==null?(qt=Math.max(qt,0),Ce=Math.min(Ce,Kt.count)):me!=null&&(qt=Math.max(qt,0),Ce=Math.min(Ce,me.count));const be=Ce-qt;if(be<0||be===1/0)return;Xt.setup(st,at,Ot,dt,Kt);let Je,We=Dt;if(Kt!==null&&(Je=Ut.get(Kt),We=yt,We.setIndex(Je)),st.isMesh)at.wireframe===!0?(M.setLineWidth(at.wireframeLinewidth*de()),We.setMode(B.LINES)):We.setMode(B.TRIANGLES);else if(st.isLine){let Sn=at.linewidth;Sn===void 0&&(Sn=1),M.setLineWidth(Sn*de()),st.isLineSegments?We.setMode(B.LINES):st.isLineLoop?We.setMode(B.LINE_LOOP):We.setMode(B.LINE_STRIP)}else st.isPoints?We.setMode(B.POINTS):st.isSprite&&We.setMode(B.TRIANGLES);if(st.isBatchedMesh)if(Ee.get("WEBGL_multi_draw"))We.renderMultiDraw(st._multiDrawStarts,st._multiDrawCounts,st._multiDrawCount);else{const Sn=st._multiDrawStarts,Ht=st._multiDrawCounts,on=st._multiDrawCount,Pe=Kt?Ut.get(Kt).bytesPerElement:1,Bn=it.get(at).currentProgram.getUniforms();for(let ti=0;ti<on;ti++)Bn.setValue(B,"_gl_DrawID",ti),We.render(Sn[ti]/Pe,Ht[ti])}else if(st.isInstancedMesh)We.renderInstances(qt,be,st.count);else if(dt.isInstancedBufferGeometry){const Sn=dt._maxInstanceCount!==void 0?dt._maxInstanceCount:1/0,Ht=Math.min(dt.instanceCount,Sn);We.renderInstances(qt,be,Ht)}else We.render(qt,be)};function xs(b,F,dt,at){$!==null&&b.isNodeMaterial&&$.setObject(at,b),xe===!0&&kt.setState(b,dt,!1),b.transparent===!0&&b.side===Ua&&b.forceSinglePass===!1?(b.side=Qn,b.needsUpdate=!0,Ms(b,F,at),b.side=js,b.needsUpdate=!0,Ms(b,F,at),b.side=Ua):Ms(b,F,at)}this.compile=function(b,F,dt=null){dt===null&&(dt=b),$!==null&&$.renderStart(b,F,dt),U=zt.get(dt),U.init(F),T.push(U),dt.traverseVisible(function(st){st.isLight&&st.layers.test(F.layers)&&(U.pushLight(st),st.castShadow&&U.pushShadow(st))}),b!==dt&&b.traverseVisible(function(st){st.isLight&&st.layers.test(F.layers)&&(U.pushLight(st),st.castShadow&&U.pushShadow(st))}),U.setupLights(),$!==null&&$.updateLights(U.state.lightsArray),ye=this.localClippingEnabled,xe=kt.init(this.clippingPlanes,ye),xe===!0&&kt.setGlobalState(this.clippingPlanes,F),$!==null&&ae.render(U.state.shadowsArray,dt,F);const at=new Set;return b.traverse(function(st){if(!(st.isMesh||st.isPoints||st.isLine||st.isSprite))return;const Ft=st.material;if(Ft)if(Array.isArray(Ft))for(let Wt=0;Wt<Ft.length;Wt++){const Ot=Ft[Wt];xs(Ot,dt,F,st),at.add(Ot)}else xs(Ft,dt,F,st),at.add(Ft)}),U=T.pop(),$!==null&&$.renderEnd(),at},this.compileAsync=function(b,F,dt=null){const at=this.compile(b,F,dt);return new Promise(st=>{function Ft(){if(at.forEach(function(Wt){const Kt=it.get(Wt).currentProgram;(Kt===void 0||Kt.isReady())&&at.delete(Wt)}),at.size===0){st(b);return}setTimeout(Ft,10)}Ee.get("KHR_parallel_shader_compile")!==null?Ft():setTimeout(Ft,10)})};let Ba=null;function fa(b){Ba&&Ba(b)}function ys(){Hi.stop()}function Fa(){Hi.start()}const Hi=new ix;Hi.setAnimationLoop(fa),typeof self<"u"&&Hi.setContext(self),this.setAnimationLoop=function(b){Ba=b,Vt.setAnimationLoop(b),b===null?Hi.stop():Hi.start()},Vt.addEventListener("sessionstart",ys),Vt.addEventListener("sessionend",Fa),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){Fe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;$!==null&&$.renderStart(b,F);const dt=Vt.enabled===!0&&Vt.isPresenting===!0,at=O!==null&&(ft===null||dt)&&O.begin(V,ft);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(F),F=Vt.getCamera()),b.isScene===!0&&b.onBeforeRender(V,b,F,ft),U=zt.get(b,T.length),U.init(F),U.state.textureUnits=_t.getTextureUnits(),T.push(U),ee.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),fe.setFromProjectionMatrix(ee,aa,F.reversedDepth),ye=this.localClippingEnabled,xe=kt.init(this.clippingPlanes,ye),N=Bt.get(b,P.length),N.init(),P.push(N),Vt.enabled===!0&&Vt.isPresenting===!0){const Wt=V.xr.getDepthSensingMesh();Wt!==null&&fo(Wt,F,-1/0,V.sortObjects)}fo(b,F,0,V.sortObjects),N.finish(),$!==null&&$.updateLights(U.state.lightsArray),V.sortObjects===!0&&N.sort(bt,It),ie=Vt.enabled===!1||Vt.isPresenting===!1||Vt.hasDepthSensing()===!1,ie&&he.addToRenderList(N,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),xe===!0&&kt.beginShadows();const st=U.state.shadowsArray;if(ae.render(st,b,F),xe===!0&&kt.endShadows(),(at&&O.hasRenderPass())===!1){const Wt=N.opaque,Ot=N.transmissive;if(U.setupLights(),F.isArrayCamera){const Kt=F.cameras;if(Ot.length>0)for(let Qt=0,re=Kt.length;Qt<re;Qt++){const me=Kt[Qt];nr(Wt,Ot,b,me)}ie&&he.render(b);for(let Qt=0,re=Kt.length;Qt<re;Qt++){const me=Kt[Qt];ho(N,b,me,me.viewport)}}else Ot.length>0&&nr(Wt,Ot,b,F),ie&&he.render(b),ho(N,b,F)}ft!==null&&W===0&&(_t.updateMultisampleRenderTarget(ft),_t.updateRenderTargetMipmap(ft)),at&&O.end(V),b.isScene===!0&&b.onAfterRender(V,b,F),Xt.resetDefaultState(),ot=-1,pt=null,T.pop(),T.length>0?(U=T[T.length-1],_t.setTextureUnits(U.state.textureUnits),xe===!0&&kt.setGlobalState(V.clippingPlanes,U.state.camera)):U=null,P.pop(),P.length>0?N=P[P.length-1]:N=null,$!==null&&$.renderEnd()};function fo(b,F,dt,at){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)dt=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLightProbeGrid)U.pushLightProbeGrid(b);else if(b.isLight)U.pushLight(b),b.castShadow&&U.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(fe)){at&&oe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ee);const Wt=Mt.update(b),Ot=b.material;Ot.visible&&N.push(b,Wt,Ot,dt,oe.z,null,F)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(fe))){const Wt=Mt.update(b),Ot=b.material;if(at&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),oe.copy(b.boundingSphere.center)):(Wt.boundingSphere===null&&Wt.computeBoundingSphere(),oe.copy(Wt.boundingSphere.center)),oe.applyMatrix4(b.matrixWorld).applyMatrix4(ee)),Array.isArray(Ot)){const Kt=Wt.groups;for(let Qt=0,re=Kt.length;Qt<re;Qt++){const me=Kt[Qt],qt=Ot[me.materialIndex];qt&&qt.visible&&N.push(b,Wt,qt,dt,oe.z,me,F)}}else Ot.visible&&N.push(b,Wt,Ot,dt,oe.z,null,F)}}const Ft=b.children;for(let Wt=0,Ot=Ft.length;Wt<Ot;Wt++)fo(Ft[Wt],F,dt,at)}function ho(b,F,dt,at){const{opaque:st,transmissive:Ft,transparent:Wt}=b;U.setupLightsView(dt),xe===!0&&kt.setGlobalState(V.clippingPlanes,dt),at&&M.viewport(Et.copy(at)),st.length>0&&Gi(st,F,dt),Ft.length>0&&Gi(Ft,F,dt),Wt.length>0&&Gi(Wt,F,dt),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function nr(b,F,dt,at){if((dt.isScene===!0?dt.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[at.id]===void 0){const qt=Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[at.id]=new zi(1,1,{generateMipmaps:!0,type:qt?ua:Ti,minFilter:Zs,samples:Math.max(4,D.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ie.workingColorSpace})}const Ft=U.state.transmissionRenderTarget[at.id],Wt=at.viewport||Et;Ft.setSize(Wt.z*V.transmissionResolutionScale,Wt.w*V.transmissionResolutionScale);const Ot=V.getRenderTarget(),Kt=V.getActiveCubeFace(),Qt=V.getActiveMipmapLevel();V.setRenderTarget(Ft),V.getClearColor(z),gt=V.getClearAlpha(),gt<1&&V.setClearColor(16777215,.5),V.clear(),ie&&he.render(dt);const re=V.toneMapping;V.toneMapping=sa;const me=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),U.setupLightsView(at),xe===!0&&kt.setGlobalState(V.clippingPlanes,at),Gi(b,dt,at),_t.updateMultisampleRenderTarget(Ft),_t.updateRenderTargetMipmap(Ft),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Ce=0,be=F.length;Ce<be;Ce++){const Je=F[Ce],{object:We,geometry:Sn,material:Ht,group:on}=Je;if(Ht.side===Ua&&We.layers.test(at.layers)){const Pe=Ht.side;Ht.side=Qn,Ht.needsUpdate=!0,Rl(We,dt,at,Sn,Ht,on),Ht.side=Pe,Ht.needsUpdate=!0,qt=!0}}qt===!0&&(_t.updateMultisampleRenderTarget(Ft),_t.updateRenderTargetMipmap(Ft))}V.setRenderTarget(Ot,Kt,Qt),V.setClearColor(z,gt),me!==void 0&&(at.viewport=me),V.toneMapping=re}function Gi(b,F,dt){const at=F.isScene===!0?F.overrideMaterial:null;for(let st=0,Ft=b.length;st<Ft;st++){const Wt=b[st],{object:Ot,geometry:Kt,group:Qt}=Wt;let re=Wt.material;re.allowOverride===!0&&at!==null&&(re=at),Ot.layers.test(dt.layers)&&Rl(Ot,F,dt,Kt,re,Qt)}}function Rl(b,F,dt,at,st,Ft){$!==null&&st.isNodeMaterial&&$.setObject(b,st),b.onBeforeRender(V,F,dt,at,st,Ft),b.modelViewMatrix.multiplyMatrices(dt.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),st.onBeforeRender(V,F,dt,at,b,Ft),st.transparent===!0&&st.side===Ua&&st.forceSinglePass===!1?(st.side=Qn,st.needsUpdate=!0,V.renderBufferDirect(dt,F,at,st,b,Ft),st.side=js,st.needsUpdate=!0,V.renderBufferDirect(dt,F,at,st,b,Ft),st.side=Ua):V.renderBufferDirect(dt,F,at,st,b,Ft),b.onAfterRender(V,F,dt,at,st,Ft)}function Ms(b,F,dt){F.isScene!==!0&&(F=Me);const at=it.get(b),st=U.state.lights,Ft=U.state.shadowsArray,Wt=st.state.version,Ot=Nt.getParameters(b,st.state,Ft,F,dt,U.state.lightProbeGridArray),Kt=Nt.getProgramCacheKey(Ot);let Qt=at.programs;at.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?F.environment:null,at.fog=F.fog;const re=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;at.envMap=wt.get(b.envMap||at.environment,re),at.envMapRotation=at.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,Qt===void 0&&(b.addEventListener("dispose",di),Qt=new Map,at.programs=Qt);let me=Qt.get(Kt);if(me!==void 0){if(at.currentProgram===me&&at.lightsStateVersion===Wt)return mo(b,Ot),me}else Ot.uniforms=Nt.getUniforms(b),$!==null&&b.isNodeMaterial&&$.build(b,dt,Ot),b.onBeforeCompile(Ot,V),me=Nt.acquireProgram(Ot,Kt),Qt.set(Kt,me),at.uniforms=Ot.uniforms;const qt=at.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(qt.clippingPlanes=kt.uniform),mo(b,Ot),at.needsLights=wl(b),at.lightsStateVersion=Wt,at.needsLights&&(qt.ambientLightColor.value=st.state.ambient,qt.lightProbe.value=st.state.probe,qt.sunLights.value=st.state.sun,qt.sunLightShadows.value=st.state.sunShadow,qt.directionalLights.value=st.state.directional,qt.directionalLightShadows.value=st.state.directionalShadow,qt.spotLights.value=st.state.spot,qt.spotLightShadows.value=st.state.spotShadow,qt.rectAreaLights.value=st.state.rectArea,qt.ltc_1.value=st.state.rectAreaLTC1,qt.ltc_2.value=st.state.rectAreaLTC2,qt.pointLights.value=st.state.point,qt.pointLightShadows.value=st.state.pointShadow,qt.hemisphereLights.value=st.state.hemi,qt.sunShadowMatrix.value=st.state.sunShadowMatrix,qt.sunShadowCascade.value=st.state.sunShadowCascade,qt.directionalShadowMatrix.value=st.state.directionalShadowMatrix,qt.spotLightMatrix.value=st.state.spotLightMatrix,qt.spotLightMap.value=st.state.spotLightMap,qt.pointShadowMatrix.value=st.state.pointShadowMatrix),at.lightProbeGrid=U.state.lightProbeGridArray.length>0,at.currentProgram=me,at.uniformsList=null,me}function po(b){if(b.uniformsList===null){const F=b.currentProgram.getUniforms();b.uniformsList=bc.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function mo(b,F){const dt=it.get(b);dt.outputColorSpace=F.outputColorSpace,dt.batching=F.batching,dt.batchingColor=F.batchingColor,dt.instancing=F.instancing,dt.instancingColor=F.instancingColor,dt.instancingMorph=F.instancingMorph,dt.skinning=F.skinning,dt.morphTargets=F.morphTargets,dt.morphNormals=F.morphNormals,dt.morphColors=F.morphColors,dt.morphTargetsCount=F.morphTargetsCount,dt.numClippingPlanes=F.numClippingPlanes,dt.numIntersection=F.numClipIntersection,dt.vertexAlphas=F.vertexAlphas,dt.vertexTangents=F.vertexTangents,dt.toneMapping=F.toneMapping}function go(b,F){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;w.setFromMatrixPosition(F.matrixWorld);for(let dt=0,at=b.length;dt<at;dt++){const st=b[dt];if(st.texture!==null&&st.boundingBox.containsPoint(w))return st}return null}function _o(b,F,dt,at,st){F.isScene!==!0&&(F=Me),_t.resetTextureUnits();const Ft=F.fog,Wt=at.isMeshStandardMaterial||at.isMeshLambertMaterial||at.isMeshPhongMaterial?F.environment:null,Ot=ft===null?V.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Ie.workingColorSpace,Kt=at.isMeshStandardMaterial||at.isMeshLambertMaterial&&!at.envMap||at.isMeshPhongMaterial&&!at.envMap,Qt=wt.get(at.envMap||Wt,Kt),re=at.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,me=!!dt.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),qt=!!dt.morphAttributes.position,Ce=!!dt.morphAttributes.normal,be=!!dt.morphAttributes.color;let Je=sa;at.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(Je=V.toneMapping);const We=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,Sn=We!==void 0?We.length:0,Ht=it.get(at),on=U.state.lights;if(xe===!0&&(ye===!0||b!==pt)){const Ne=b===pt&&at.id===ot;kt.setState(at,b,Ne)}let Pe=!1;at.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==on.state.version||Ht.outputColorSpace!==Ot||st.isBatchedMesh&&Ht.batching===!1||!st.isBatchedMesh&&Ht.batching===!0||st.isBatchedMesh&&Ht.batchingColor===!0&&st._colorsTexture===null||st.isBatchedMesh&&Ht.batchingColor===!1&&st._colorsTexture!==null||st.isInstancedMesh&&Ht.instancing===!1||!st.isInstancedMesh&&Ht.instancing===!0||st.isSkinnedMesh&&Ht.skinning===!1||!st.isSkinnedMesh&&Ht.skinning===!0||st.isInstancedMesh&&Ht.instancingColor===!0&&st.instanceColor===null||st.isInstancedMesh&&Ht.instancingColor===!1&&st.instanceColor!==null||st.isInstancedMesh&&Ht.instancingMorph===!0&&st.morphTexture===null||st.isInstancedMesh&&Ht.instancingMorph===!1&&st.morphTexture!==null||Ht.envMap!==Qt||at.fog===!0&&Ht.fog!==Ft||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==kt.numPlanes||Ht.numIntersection!==kt.numIntersection)||Ht.vertexAlphas!==re||Ht.vertexTangents!==me||Ht.morphTargets!==qt||Ht.morphNormals!==Ce||Ht.morphColors!==be||Ht.toneMapping!==Je||Ht.morphTargetsCount!==Sn||!!Ht.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(Pe=!0):(Pe=!0,Ht.__version=at.version);let Bn=Ht.currentProgram;Pe===!0&&(Bn=Ms(at,F,st),$&&at.isNodeMaterial&&$.onUpdateProgram(at,Bn,Ht));let ti=!1,Vi=!1,Ae=!1;const Ve=Bn.getUniforms(),en=Ht.uniforms;if(M.useProgram(Bn.program)&&(ti=!0,Vi=!0,Ae=!0),at.id!==ot&&(ot=at.id,Vi=!0),Ht.needsLights){const Ne=go(U.state.lightProbeGridArray,st);Ht.lightProbeGrid!==Ne&&(Ht.lightProbeGrid=Ne,Vi=!0)}if(ti||pt!==b){M.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Ve.setValue(B,"projectionMatrix",b.projectionMatrix),Ve.setValue(B,"viewMatrix",b.matrixWorldInverse);const ln=Ve.map.cameraPosition;ln!==void 0&&ln.setValue(B,At.setFromMatrixPosition(b.matrixWorld)),D.logarithmicDepthBuffer&&Ve.setValue(B,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&Ve.setValue(B,"isOrthographic",b.isOrthographicCamera===!0),pt!==b&&(pt=b,Vi=!0,Ae=!0)}if(Ht.needsLights&&(on.state.sunShadowMap.length>0&&Ve.setValue(B,"sunShadowMap",on.state.sunShadowMap,_t),on.state.directionalShadowMap.length>0&&Ve.setValue(B,"directionalShadowMap",on.state.directionalShadowMap,_t),on.state.spotShadowMap.length>0&&Ve.setValue(B,"spotShadowMap",on.state.spotShadowMap,_t),on.state.pointShadowMap.length>0&&Ve.setValue(B,"pointShadowMap",on.state.pointShadowMap,_t)),st.isSkinnedMesh){Ve.setOptional(B,st,"bindMatrix"),Ve.setOptional(B,st,"bindMatrixInverse");const Ne=st.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),Ve.setValue(B,"boneTexture",Ne.boneTexture,_t))}st.isBatchedMesh&&(Ve.setOptional(B,st,"batchingTexture"),Ve.setValue(B,"batchingTexture",st._matricesTexture,_t),Ve.setOptional(B,st,"batchingIdTexture"),Ve.setValue(B,"batchingIdTexture",st._indirectTexture,_t),Ve.setOptional(B,st,"batchingColorTexture"),st._colorsTexture!==null&&Ve.setValue(B,"batchingColorTexture",st._colorsTexture,_t));const ei=dt.morphAttributes;if((ei.position!==void 0||ei.normal!==void 0||ei.color!==void 0)&&X.update(st,dt,Bn),(Vi||Ht.receiveShadow!==st.receiveShadow)&&(Ht.receiveShadow=st.receiveShadow,Ve.setValue(B,"receiveShadow",st.receiveShadow)),(at.isMeshStandardMaterial||at.isMeshLambertMaterial||at.isMeshPhongMaterial)&&at.envMap===null&&F.environment!==null&&(en.envMapIntensity.value=F.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=Q3()),Vi){if(Ve.setValue(B,"toneMappingExposure",V.toneMappingExposure),Ht.needsLights&&Cl(en,Ae),Ft&&at.fog===!0&&te.refreshFogUniforms(en,Ft),te.refreshMaterialUniforms(en,at,ht,Z,U.state.transmissionRenderTarget[b.id]),Ht.needsLights&&Ht.lightProbeGrid){const Ne=Ht.lightProbeGrid;en.probesSH.value=Ne.texture,en.probesMin.value.copy(Ne.boundingBox.min),en.probesMax.value.copy(Ne.boundingBox.max),en.probesResolution.value.copy(Ne.resolution)}bc.upload(B,po(Ht),en,_t)}if(at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(bc.upload(B,po(Ht),en,_t),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&Ve.setValue(B,"center",st.center),Ve.setValue(B,"modelViewMatrix",st.modelViewMatrix),Ve.setValue(B,"normalMatrix",st.normalMatrix),Ve.setValue(B,"modelMatrix",st.matrixWorld),at.uniformsGroups!==void 0){const Ne=at.uniformsGroups;for(let ln=0,da=Ne.length;ln<da;ln++){const Dl=Ne[ln];Tt.update(Dl,Bn),Tt.bind(Dl,Bn)}}return Bn}function Cl(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.sunLights.needsUpdate=F,b.sunLightShadows.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function wl(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return ft},this.setRenderTargetTextures=function(b,F,dt){const at=it.get(b);at.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),it.get(b.texture).__webglTexture=F,it.get(b.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:dt,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,F){const dt=it.get(b);dt.__webglFramebuffer=F,dt.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,dt=0){ft=b,k=F,W=dt;let at=null,st=!1,Ft=!1;if(b){const Ot=it.get(b);if(Ot.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(B.FRAMEBUFFER,Ot.__webglFramebuffer),Et.copy(b.viewport),Zt.copy(b.scissor),jt=b.scissorTest,M.viewport(Et),M.scissor(Zt),M.setScissorTest(jt),ot=-1;return}else if(Ot.__webglFramebuffer===void 0)_t.setupRenderTarget(b);else if(Ot.__hasExternalTextures)_t.rebindTextures(b,it.get(b.texture).__webglTexture,it.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const re=b.depthTexture;if(Ot.__boundDepthTexture!==re){if(re!==null&&it.has(re)&&(b.width!==re.image.width||b.height!==re.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");_t.setupDepthRenderbuffer(b)}}const Kt=b.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Ft=!0);const Qt=it.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Qt[F])?at=Qt[F][dt]:at=Qt[F],st=!0):b.samples>0&&_t.useMultisampledRTT(b)===!1?at=it.get(b).__webglMultisampledFramebuffer:Array.isArray(Qt)?at=Qt[dt]:at=Qt,Et.copy(b.viewport),Zt.copy(b.scissor),jt=b.scissorTest}else Et.copy(mt).multiplyScalar(ht).floor(),Zt.copy(Ct).multiplyScalar(ht).floor(),jt=He;if(dt!==0&&(at=ut),M.bindFramebuffer(B.FRAMEBUFFER,at)&&M.drawBuffers(b,at),M.viewport(Et),M.scissor(Zt),M.setScissorTest(jt),st){const Ot=it.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ot.__webglTexture,dt)}else if(Ft){const Ot=F;for(let Kt=0;Kt<b.textures.length;Kt++){const Qt=it.get(b.textures[Kt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Kt,Qt.__webglTexture,dt,Ot)}}else if(b!==null&&dt!==0){const Ot=it.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ot.__webglTexture,dt)}ot=-1};function hi(b){const F=it.get(b);return(F.__readFormat!==b.format||F.__readType!==b.type)&&(F.__readFormat=b.format,F.__readType=b.type,F.__formatReadable=D.textureFormatReadable(b.format),F.__typeReadable=D.textureTypeReadable(b.type)),F}this.readRenderTargetPixels=function(b,F,dt,at,st,Ft,Wt,Ot=0){if(!(b&&b.isWebGLRenderTarget)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Kt=it.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Wt!==void 0&&(Kt=Kt[Wt]),Kt){M.bindFramebuffer(B.FRAMEBUFFER,Kt);try{const Qt=b.textures[Ot],re=Qt.format,me=Qt.type;b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ot);const qt=hi(Qt);if(qt.__formatReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(qt.__typeReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-at&&dt>=0&&dt<=b.height-st&&B.readPixels(F,dt,at,st,Lt.convert(re),Lt.convert(me),Ft)}finally{const Qt=ft!==null?it.get(ft).__webglFramebuffer:null;M.bindFramebuffer(B.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(b,F,dt,at,st,Ft,Wt,Ot=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Kt=it.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Wt!==void 0&&(Kt=Kt[Wt]),Kt)if(F>=0&&F<=b.width-at&&dt>=0&&dt<=b.height-st){M.bindFramebuffer(B.FRAMEBUFFER,Kt);const Qt=b.textures[Ot],re=Qt.format,me=Qt.type;b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ot);const qt=hi(Qt);if(qt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(qt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ce=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ce),B.bufferData(B.PIXEL_PACK_BUFFER,Ft.byteLength,B.STREAM_READ),B.readPixels(F,dt,at,st,Lt.convert(re),Lt.convert(me),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);const be=ft!==null?it.get(ft).__webglFramebuffer:null;M.bindFramebuffer(B.FRAMEBUFFER,be);const Je=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await gT(B,Je,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ce),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Ft),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(Ce),B.deleteSync(Je),Ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,F=null,dt=0){const at=Math.pow(2,-dt),st=Math.floor(b.image.width*at),Ft=Math.floor(b.image.height*at),Wt=F!==null?F.x:0,Ot=F!==null?F.y:0;_t.setTexture2D(b,0),B.copyTexSubImage2D(B.TEXTURE_2D,dt,0,0,Wt,Ot,st,Ft),M.unbindTexture()},this.copyTextureToTexture=function(b,F,dt=null,at=null,st=0,Ft=0){let Wt,Ot,Kt,Qt,re,me,qt,Ce,be;const Je=b.isCompressedTexture?b.mipmaps[Ft]:b.image;if(dt!==null)Wt=dt.max.x-dt.min.x,Ot=dt.max.y-dt.min.y,Kt=dt.isBox3?dt.max.z-dt.min.z:1,Qt=dt.min.x,re=dt.min.y,me=dt.isBox3?dt.min.z:0;else{const en=Math.pow(2,-st);Wt=Math.floor(Je.width*en),Ot=Math.floor(Je.height*en),b.isDataArrayTexture?Kt=Je.depth:b.isData3DTexture?Kt=Math.floor(Je.depth*en):Kt=1,Qt=0,re=0,me=0}at!==null?(qt=at.x,Ce=at.y,be=at.z):(qt=0,Ce=0,be=0);const We=Lt.convert(F.format),Sn=Lt.convert(F.type);let Ht;F.isData3DTexture?(_t.setTexture3D(F,0),Ht=B.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(_t.setTexture2DArray(F,0),Ht=B.TEXTURE_2D_ARRAY):(_t.setTexture2D(F,0),Ht=B.TEXTURE_2D),M.activeTexture(B.TEXTURE0),M.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,F.flipY),M.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),M.pixelStorei(B.UNPACK_ALIGNMENT,F.unpackAlignment);const on=M.getParameter(B.UNPACK_ROW_LENGTH),Pe=M.getParameter(B.UNPACK_IMAGE_HEIGHT),Bn=M.getParameter(B.UNPACK_SKIP_PIXELS),ti=M.getParameter(B.UNPACK_SKIP_ROWS),Vi=M.getParameter(B.UNPACK_SKIP_IMAGES);M.pixelStorei(B.UNPACK_ROW_LENGTH,Je.width),M.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Je.height),M.pixelStorei(B.UNPACK_SKIP_PIXELS,Qt),M.pixelStorei(B.UNPACK_SKIP_ROWS,re),M.pixelStorei(B.UNPACK_SKIP_IMAGES,me);const Ae=b.isDataArrayTexture||b.isData3DTexture,Ve=F.isDataArrayTexture||F.isData3DTexture;if(b.isDepthTexture){const en=it.get(b),ei=it.get(F),Ne=it.get(en.__renderTarget),ln=it.get(ei.__renderTarget);M.bindFramebuffer(B.READ_FRAMEBUFFER,Ne.__webglFramebuffer),M.bindFramebuffer(B.DRAW_FRAMEBUFFER,ln.__webglFramebuffer);for(let da=0;da<Kt;da++)Ae&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,it.get(b).__webglTexture,st,me+da),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,it.get(F).__webglTexture,Ft,be+da)),B.blitFramebuffer(Qt,re,Wt,Ot,qt,Ce,Wt,Ot,B.DEPTH_BUFFER_BIT,B.NEAREST);M.bindFramebuffer(B.READ_FRAMEBUFFER,null),M.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(st!==0||b.isRenderTargetTexture||it.has(b)){const en=it.get(b),ei=it.get(F);M.bindFramebuffer(B.READ_FRAMEBUFFER,K),M.bindFramebuffer(B.DRAW_FRAMEBUFFER,tt);for(let Ne=0;Ne<Kt;Ne++)Ae?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,en.__webglTexture,st,me+Ne):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,en.__webglTexture,st),Ve?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ei.__webglTexture,Ft,be+Ne):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ei.__webglTexture,Ft),st!==0?B.blitFramebuffer(Qt,re,Wt,Ot,qt,Ce,Wt,Ot,B.COLOR_BUFFER_BIT,B.NEAREST):Ve?B.copyTexSubImage3D(Ht,Ft,qt,Ce,be+Ne,Qt,re,Wt,Ot):B.copyTexSubImage2D(Ht,Ft,qt,Ce,Qt,re,Wt,Ot);M.bindFramebuffer(B.READ_FRAMEBUFFER,null),M.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Ve?b.isDataTexture||b.isData3DTexture?B.texSubImage3D(Ht,Ft,qt,Ce,be,Wt,Ot,Kt,We,Sn,Je.data):F.isCompressedArrayTexture?B.compressedTexSubImage3D(Ht,Ft,qt,Ce,be,Wt,Ot,Kt,We,Je.data):B.texSubImage3D(Ht,Ft,qt,Ce,be,Wt,Ot,Kt,We,Sn,Je):b.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Ft,qt,Ce,Wt,Ot,We,Sn,Je.data):b.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Ft,qt,Ce,Je.width,Je.height,We,Je.data):B.texSubImage2D(B.TEXTURE_2D,Ft,qt,Ce,Wt,Ot,We,Sn,Je);M.pixelStorei(B.UNPACK_ROW_LENGTH,on),M.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Pe),M.pixelStorei(B.UNPACK_SKIP_PIXELS,Bn),M.pixelStorei(B.UNPACK_SKIP_ROWS,ti),M.pixelStorei(B.UNPACK_SKIP_IMAGES,Vi),Ft===0&&F.generateMipmaps&&B.generateMipmap(Ht),M.unbindTexture()},this.initRenderTarget=function(b){it.get(b).__webglFramebuffer===void 0&&_t.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?_t.setTextureCube(b,0):b.isData3DTexture?_t.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?_t.setTexture2DArray(b,0):_t.setTexture2D(b,0),M.unbindTexture()},this.resetState=function(){k=0,W=0,ft=null,M.reset(),Xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return aa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ie._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ie._getUnpackColorSpace()}}const $3=o=>o==="DNa01"||o==="DNa02"||o==="DNp"?"desc":o==="PAM-DAN"||o==="MBON"?"mod":"optic",tC={cloud:[.35,.42,.55],optic:[.07,.21,.46],desc:[.07,.35,.15],mod:[.42,.25,.08]};function eC(o){return new Bi({transparent:!0,depthWrite:!1,uniforms:{pixelRatio:{value:Math.min(window.devicePixelRatio||1,2)},baseCol:{value:new ct(...o)}},vertexShader:`
      attribute float activity; varying float strength; uniform float pixelRatio;
      void main() {
        strength = activity;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = (1.1 + strength * 3.2) * pixelRatio;
      }`,fragmentShader:`
      varying float strength; uniform vec3 baseCol;
      void main() {
        float r = length(gl_PointCoord - vec2(.5));
        if (r > .5) discard;
        vec3 color = mix(baseCol, vec3(.2,.95,1.), strength);
        color = mix(color, vec3(1.), smoothstep(.6,1.,strength));
        gl_FragColor = vec4(color, (.30+.65*strength)*(1.-smoothstep(.18,.5,r)));
      }`})}function nC({subset:o,rates:e}){const i=Ye.useRef(null),[s,l]=Ye.useState("loading"),[c,d]=Ye.useState(!0),[h,p]=Ye.useState({optic:!0,desc:!0,mod:!0,cloud:!0}),[m,S]=Ye.useState(null),_=Ye.useMemo(()=>{let C=null,y=null;return{setView(x){C=x},go(x){try{C?.(x)}catch{}},setLayerFn(x){y=x},toggle(x,L){try{y?.(x,L)}catch{}}}},[]),v=Ye.useRef(e);v.current=e;const E=Ye.useRef(h);E.current=h,Ye.useEffect(()=>{const C=i.current;if(!C||!o)return;let y=!1;const x=new UT,L=new im(-3,3,2,-2,.01,100);let G=null;try{G=new J3({antialias:!0,alpha:!0})}catch{l("error");return}G.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),G.outputColorSpace=fi,C.appendChild(G.domElement);const w=new _l;x.add(w);const N=(o.neurons||[]).filter(At=>At&&Array.isArray(At.xyz)),U=new uo,P=new ct;if(N.forEach(At=>{P.set(At.xyz[0],At.xyz[1],At.xyz[2]),U.expandByPoint(P)}),(o.renderCloud||[]).forEach(At=>{Array.isArray(At)&&(P.set(+At[0],+At[1],+At[2]),U.expandByPoint(P))}),U.isEmpty()){l("error");return}const T=U.getCenter(new ct),O=U.getSize(new ct),V=5/Math.max(O.x,O.y,O.z,1e-6),Y=(At,oe,Me)=>[(At-T.x)*V,(oe-T.y)*V,(Me-T.z)*V],$={cloud:null,optic:null,desc:null,mod:null},ut=[[],[],[],[]],K=["cloud","optic","desc","mod"],tt=new Map;try{const At=o.renderCloud||[],oe=Math.max(1,Math.ceil(At.length/2200)),Me=[];for(let B=0;B<At.length;B+=oe){const _e=At[B];Array.isArray(_e)&&Me.push(...Y(+_e[0],+_e[1],+_e[2]))}$.cloud=k(Me,new Array(Me.length/3).fill(0),"cloud");const ie={optic:[],desc:[],mod:[]},de={optic:[],desc:[],mod:[]};N.forEach(B=>{const _e=$3(B.type||""),Ee=ie[_e].length;ie[_e].push(...Y(B.xyz[0],B.xyz[1],B.xyz[2])),de[_e].push({id:B.id,type:B.type,region:B.region,layer:_e,rate:0}),tt.set(B.id,{g:K.indexOf(_e),i:Ee})}),Object.keys(ie).forEach(B=>{$[B]=k(ie[B],new Array(ie[B].length/3).fill(0),B),ut[K.indexOf(B)]=de[B]})}catch{l("error");return}function k(At,oe,Me){const ie=new Fi;ie.setAttribute("position",new oa(At,3)),ie.setAttribute("activity",new ra(new Float32Array(oe),1));const de=new XT(ie,eC(tC[Me]));return de.frustumCulled=!1,de.visible=!!E.current[Me],w.add(de),de}const W=At=>{At==="frontal"?w.rotation.set(0,0,0):At==="dorsal"?w.rotation.set(-Math.PI/2,0,0):w.rotation.set(0,Math.PI/2,0),ft()};_.setView(W),_.setLayerFn((At,oe)=>{const Me=$[At];Me&&(Me.visible=oe,G?.render(x,L))});const ft=()=>{if(!G)return;const At=Math.max(1,C.clientWidth),oe=Math.max(1,C.clientHeight||320);G.setSize(At,oe,!1);const Me=At/oe,ie=3.1;L.top=ie,L.bottom=-ie,L.left=-ie*Me,L.right=ie*Me,L.position.set(0,0,10),L.lookAt(0,0,0),L.updateProjectionMatrix(),G.render(x,L)},ot=new ResizeObserver(ft);ot.observe(C);const pt=new tb;pt.params.Points={threshold:.12};const Et=new Ge;let Zt=!1;const jt=At=>{Zt||(Zt=!0,requestAnimationFrame(()=>{Zt=!1;try{const oe=G.domElement.getBoundingClientRect();Et.set((At.clientX-oe.left)/oe.width*2-1,-((At.clientY-oe.top)/oe.height)*2+1),pt.setFromCamera(Et,L);const Me=["optic","desc","mod"].map(de=>$[de]).filter(de=>!!de&&de.visible),ie=pt.intersectObjects(Me,!1);if(ie.length&&ie[0].index!==void 0){const de=ie[0].object,B=K.indexOf(Object.keys($).find(Ee=>$[Ee]===de)),_e=ut[B]?.[ie[0].index];S(_e?{..._e}:null)}else S(null)}catch{S(null)}}))};let z=!1,gt=0,Rt=0;const Z=At=>{z=!0,gt=At.clientX,Rt=At.clientY;try{G.domElement.setPointerCapture(At.pointerId)}catch{}},ht=At=>{z?(w.rotation.y+=(At.clientX-gt)*.006,w.rotation.x+=(At.clientY-Rt)*.006,gt=At.clientX,Rt=At.clientY,ft()):jt(At)},bt=()=>{z=!1},It=()=>{z=!1,S(null)},mt=G.domElement;mt.addEventListener("pointerdown",Z),mt.addEventListener("pointermove",ht),mt.addEventListener("pointerup",bt),mt.addEventListener("pointercancel",bt),mt.addEventListener("pointerleave",It);let Ct=0,He=performance.now();const fe={current:!0};_._orbit=fe;const xe=window.matchMedia("(prefers-reduced-motion: reduce)"),ye=new Map,ee=At=>{if(!y){Ct=requestAnimationFrame(ee);try{const oe=Math.min(.05,(At-He)/1e3);He=At;const Me=v.current||[];if(Me.length){ye.clear();const ie=o.neurons||[];for(const[de,B]of Me){const _e=ie[de];_e&&ye.set(_e.id,Math.max(0,Math.min(1,B)))}for(const de of["optic","desc","mod"]){const B=$[de];if(!B||!B.visible)continue;const _e=B.geometry.getAttribute("activity"),Ee=_e.array,D=ut[K.indexOf(de)];let M=!1;for(let J=0;J<D.length;J++){const it=ye.get(D[J].id)??0;Ee[J]!==it&&(Ee[J]=it,M=!0),D[J].rate=it}M&&(_e.needsUpdate=!0)}}fe.current&&!z&&!xe.matches&&!document.hidden&&(w.rotation.y+=oe*.12),document.hidden||G.render(x,L)}catch{}}};return _._orbit=fe,ft(),l("ready"),Ct=requestAnimationFrame(ee),()=>{y=!0,cancelAnimationFrame(Ct),ot.disconnect(),mt.removeEventListener("pointerdown",Z),mt.removeEventListener("pointermove",ht),mt.removeEventListener("pointerup",bt),mt.removeEventListener("pointercancel",bt),mt.removeEventListener("pointerleave",It),Object.values($).forEach(At=>{try{At&&(w.remove(At),At.geometry.dispose(),At.material.dispose())}catch{}});try{G.dispose()}catch{}try{mt.remove()}catch{}}},[o]),Ye.useEffect(()=>{try{const C=_._orbit;C&&(C.current=c)}catch{}},[c,_,s]);const R=C=>{const y={...h,[C]:!h[C]};p(y),_.toggle(C,y[C])};return et.jsxs("div",{className:"brain3d",children:[et.jsxs("div",{className:"brain-view-controls",children:[et.jsx("button",{onClick:()=>_.go("frontal"),children:"frontal"}),et.jsx("button",{onClick:()=>_.go("dorsal"),children:"dorsal"}),et.jsx("button",{onClick:()=>_.go("lateral"),children:"lateral"}),et.jsxs("button",{"aria-pressed":c,onClick:()=>d(C=>!C),children:["orbit ",c?"on":"off"]}),["optic","desc","mod","cloud"].map(C=>et.jsx("button",{"aria-pressed":h[C],className:h[C]?"":"off",onClick:()=>R(C),children:C},C))]}),et.jsx("div",{className:"brain-legend",children:"blue: anatomy · cyan/white: live firing (by body ID) · drag to rotate"}),et.jsxs("div",{ref:i,className:"three-viewport","aria-label":"MaleCNS subset, interactive 3D",children:[s!=="ready"&&et.jsx("span",{className:"neural-load",role:"status",children:s==="error"?"atlas unavailable":"loading anatomy…"}),m&&et.jsxs("div",{className:"hovertip",children:[et.jsxs("b",{children:[m.type,"#",String(m.id).slice(-6)]})," · ",m.region," · rate ",m.rate.toFixed(2)]})]}),et.jsxs("div",{className:"dim small",children:["schematic subset · ",(o?.neurons||[]).length," neurons · viewer pattern: fly-connectome-template BrainScene"]})]})}function Ss({title:o,icon:e,right:i,children:s,className:l}){return et.jsxs("section",{className:`card ${l||""}`,children:[et.jsxs("header",{className:"card-h",children:[et.jsxs("span",{className:"card-t",children:[e,o]}),i?et.jsx("span",{className:"card-r",children:i}):null]}),s]})}function iC({s:o}){const e=[["MOVES",o?o.moves_left===null?"∞":String(o.moves_left):"—","c-acc"],["SCORE",o?String(o.score):"—","c-white"],["COMBO",o?`×${o.combo}`:"—","c-grn"]];return et.jsx("div",{className:"badges",children:e.map(([i,s,l])=>et.jsxs("div",{className:"badge",children:[et.jsx("div",{className:"bk",children:i}),et.jsx("div",{className:`bv ${l}`,children:s})]},i))})}function aC({ctl:o}){const e=Ye.useRef(null);return Ye.useEffect(()=>{const i=e.current;if(!i)return;const s=i.getContext("2d");if(!s)return;let l=0;const c=d=>{l=requestAnimationFrame(c);try{const h=d/1e3;s.clearRect(0,0,120,110);let p=0,m=0;const S=o.pending;if(S&&(o.phase==="aim"||o.phase==="swap")){const _=S.cell%8,v=Math.floor(S.cell/8);p=Math.max(-4,Math.min(4,_-3.5)),m=Math.max(-3,Math.min(3,v-3.5))}bE(s,60,62,p,m,h%3.7<.12)}catch{}};return l=requestAnimationFrame(c),()=>cancelAnimationFrame(l)},[o]),et.jsxs("div",{className:"flyrow",children:[et.jsx("canvas",{ref:e,width:120,height:110,className:"flycv"}),et.jsxs("div",{className:"speech",children:[et.jsx("div",{className:"say",children:o.say}),et.jsxs("div",{className:"prov",children:["brain: ",o.snap?.prov??"…"]})]})]})}function sC({s:o}){const e=o?.dec;return et.jsxs(Ss,{title:"CNS · RECORDED ACTIVITY",icon:et.jsx(oE,{size:14}),children:[et.jsxs("div",{className:"mono-big",children:["L ",et.jsx("b",{className:"c-acc",children:e?e.L:"—"})," · R ",et.jsx("b",{className:"c-grn",children:e?e.R:"—"})," · gate"," ",et.jsx("b",{className:"c-mag",children:e?e.gate.toFixed(2):"—"})]}),et.jsx("div",{className:"chips",children:["up","down","left","right"].map(i=>et.jsxs("div",{className:e&&e.dir===i?"hot":"",children:[i.toUpperCase()," ",(e?e.dirs[i]??0:0).toFixed(2)]},i))})]})}function rC({s:o}){const e=o?.dopa??0;return et.jsxs(Ss,{title:"DOPAMINE · PAM11",children:[et.jsxs("div",{className:"mono-big",children:[e.toFixed(1)," ",et.jsx("span",{className:"dim",children:"Hz"})]}),et.jsx("div",{className:"dopabar",children:et.jsx("i",{style:{height:`${Math.max(3,Math.min(100,e/120*100))}%`}})}),et.jsx("div",{className:"dim small",children:"reward current after a hit"})]})}function oC({board:o}){const e=Ye.useRef(null);return Ye.useEffect(()=>{const i=e.current;if(!i||!o)return;const s=i.getContext("2d");if(s)try{const l=document.createElement("canvas");l.width=40,l.height=40;const c=l.getContext("2d");if(!c)return;c.fillStyle="#05070b",c.fillRect(0,0,40,40);for(let d=0;d<4;d++)for(let h=0;h<4;h++){let p=0,m=0,S=0;for(let _=0;_<2;_++)for(let v=0;v<2;v++){const E=(o[d*2+_]||[])[h*2+v]||0,R=so[E]?so[E].c:"#888888",C=parseInt(R.slice(1),16);p+=C>>16,m+=C>>8&255,S+=C&255}c.fillStyle=`rgb(${p/4|0},${m/4|0},${S/4|0})`,c.beginPath(),c.arc(h*10+5,d*10+5,5,0,7),c.fill()}s.imageSmoothingEnabled=!0,s.clearRect(0,0,132,132),s.drawImage(l,0,0,132,132),s.fillStyle="rgba(0,0,0,0.25)";for(let d=0;d<132;d+=4)s.fillRect(0,d,132,1)}catch{}}),et.jsxs(Ss,{title:"FLY CAM · what the network saw",children:[et.jsx("canvas",{ref:e,width:132,height:132,className:"camcv"}),et.jsx("div",{className:"dim small",children:"4×4 regions of color contrast — never crisp sprites"})]})}function lC({s:o}){const e=Ye.useRef(null),i=o?.job?.curve||[],s=i.length>1,l=s?i.slice(-120):(o?.hist||[]).slice(-220);Ye.useEffect(()=>{const h=e.current;if(!h)return;const p=h.getContext("2d");if(p)try{const m=h.width,S=h.height;if(p.fillStyle="#05070b",p.fillRect(0,0,m,S),l.length<2)return;const _=Math.max(s?1:.6,...l),v=Math.min(s?0:-.1,...l),E=_-v||1;p.strokeStyle="#7cff6b",p.lineWidth=2,p.beginPath(),l.forEach((R,C)=>{const y=6+C/(l.length-1)*(m-12),x=S-6-(R-v)/E*(S-12);C?p.lineTo(y,x):p.moveTo(y,x)}),p.stroke(),p.fillStyle="#7a8598",p.font="10px monospace",p.fillText(s?"turbo · score / episode":"reward / brain move",8,14)}catch{}});const c=(o?.hist||[]).slice(-50),d=c.length?c.reduce((h,p)=>h+p,0)/c.length:0;return et.jsxs(Ss,{title:"LEARNING · live",icon:et.jsx($h,{size:14}),right:et.jsx("span",{children:`e${o?.eps??0} · u${o?.updates??0} · ${d>=0?"+":""}${d.toFixed(2)} · sv@${o?.saved??0}`}),children:[et.jsx("canvas",{ref:e,width:420,height:110,className:"wide"}),et.jsx("div",{className:"dim small",children:"green = reward · pink baseline · turbo curve in score/episode"})]})}const uC=[["optic","optic lobe (T4/T5/LC)","#56d8ff"],["desc","descending (DN)","#7cff6b"],["pam","PAM11 dopamine","#ff5fd2"],["mod","other modulatory","#ffb347"]];function cC({s:o,subset:e}){const i=Ye.useRef(null),s=o?.trace||[],l=o?.layers||{optic:0,desc:0,pam:0,mod:0},c=Math.max(1,l.optic,l.desc,l.pam,l.mod);Ye.useEffect(()=>{const m=i.current;if(!m)return;const S=m.getContext("2d");if(S)try{const _=m.width,v=m.height;S.fillStyle="#05070b",S.fillRect(0,0,_,v);const E=[["optic","#56d8ff"],["desc","#7cff6b"],["pam","#ff5fd2"]],R=Math.max(1,s.length);E.forEach(([C,y],x)=>{s.forEach((L,G)=>{const w=Math.min(1,(L[C==="optic"?"o":C==="desc"?"d":"p"]||0)/24);if(w<=.02)return;S.fillStyle=y,S.globalAlpha=.25+.75*w;const N=_/40;S.fillRect(_-(R-G)*N,8+x*((v-16)/3),Math.max(1,N-1),(v-16)/3-3)})}),S.globalAlpha=1,S.fillStyle="#7a8598",S.font="10px monospace",S.fillText("O",4,20),S.fillText("D",4,44),S.fillText("P",4,68)}catch{}});const d=o?.last,h=[...o?.rates||[]].sort((m,S)=>S[1]-m[1]).slice(0,8),p=e?.neurons||[];return et.jsxs(Ss,{title:"BRAIN INSPECTOR · every move, every layer",className:"insp",children:[et.jsx("div",{className:"dim small",children:"spike raster · last 40 moves (O optic / D descending / P PAM11)"}),et.jsx("canvas",{ref:i,width:420,height:80,className:"wide"}),et.jsx("div",{className:"lbars",children:uC.map(([m,S,_])=>et.jsxs("div",{className:"lbar",children:[et.jsx("span",{children:S}),et.jsx("div",{className:"ltrack",children:et.jsx("i",{style:{width:`${Math.min(100,(l[m]||0)/c*100)}%`,background:_}})}),et.jsx("b",{children:l[m]||0})]},m))}),et.jsx("div",{className:"dim small",children:"function trace · last move"}),et.jsx("table",{className:"ftrace",children:et.jsxs("tbody",{children:[et.jsxs("tr",{children:[et.jsx("td",{children:"observe (eye)"}),et.jsxs("td",{children:["in-energy ",d?d.in_energy:"—"]})]}),et.jsxs("tr",{children:[et.jsx("td",{children:"lif.step ×4"}),et.jsxs("td",{children:["spikes O ",d?d.o:"—"," · D ",d?d.d:"—"," · P ",d?d.p:"—"]})]}),et.jsxs("tr",{children:[et.jsx("td",{children:"decode (DN)"}),et.jsxs("td",{children:["L ",o?.dec.L??"—"," · R ",o?.dec.R??"—"," · gate ",(o?.dec.gate??0).toFixed(2)]})]}),et.jsxs("tr",{children:[et.jsxs("td",{children:["policyAct (ε ",d?d.eps:"—",")"]}),et.jsxs("td",{children:["cell ",d?d.cell:"—"," · dirIdx ",d?d.di:"—"]})]}),et.jsxs("tr",{children:[et.jsxs("td",{children:["reinforce (upd ",d?d.updates:"—",")"]}),et.jsxs("td",{children:["r ",d?d.r:"—"," · +",d?d.gained:"—"," pts"]})]})]})}),et.jsx("div",{className:"dim small",children:"firing now · top descending/modulatory units"}),et.jsx("div",{className:"firing",children:h.length?h.map(([m,S])=>{const _=p[m];return et.jsxs("span",{className:"ftag",children:[_?`${_.type}#${String(_.id).slice(-5)}`:`#${m}`," ",S.toFixed(2)]},m)}):et.jsx("span",{className:"dim",children:"—"})})]})}const fx={up:"↑",down:"↓",left:"←",right:"→"};function fC({s:o}){const e=o?.invalid;if(!e)return null;const i=Math.round((e.rate||0)*100);return et.jsxs(Ss,{title:"REJECTED · wrong moves stay visible",right:et.jsxs("span",{children:[e.count," / ",e.moves," · ",i,"%"]}),children:[et.jsx("div",{className:"rejbar",children:et.jsx("i",{style:{width:`${Math.min(100,i)}%`}})}),et.jsx("div",{className:"rejlist",children:e.recent.length?[...e.recent].reverse().map((s,l)=>et.jsxs("span",{className:"rejtag",title:`move #${s.n} via ${s.via}`,children:["#",s.n," (",s.L,",",s.R,") ",fx[s.dir]||s.dir," ",et.jsx("em",{children:s.via})]},`${s.n}-${l}`)):et.jsx("span",{className:"dim",children:"henüz yok — sinek utangaç"})})]})}function dC({s:o}){const e=["up","down","left","right"],i=(o?.trace||[]).map((c,d)=>({n:c.n??-1e9+d,L:c.cell%8,R:Math.floor(c.cell/8),dir:e[c.di]||"?",ok:(c.gained||0)>0,pts:c.gained||0})),s=(o?.invalid?.recent||[]).map(c=>({n:c.n??-1e9,L:c.L,R:c.R,dir:c.dir,ok:!1,pts:0})),l=[...i,...s].sort((c,d)=>d.n-c.n).slice(0,8);return et.jsx(Ss,{title:"HAMLELER · every move the fly makes",right:et.jsx("span",{children:"son 8"}),children:et.jsx("div",{className:"rejlist",children:l.length?l.map((c,d)=>et.jsxs("span",{className:c.ok?"movetag":"rejtag",children:["#",c.n," (",c.L,",",c.R,") ",fx[c.dir]||c.dir," ",c.ok?`+${c.pts} ✓`:"×"]},`${c.n}-${d}`)):et.jsx("span",{className:"dim",children:"oynuyor… birazdan burada"})})})}function hC({report:o}){const e=o.eval120;return e?et.jsxs(Ss,{title:"EVAL · 120 fresh boards",children:[et.jsx("table",{className:"eval",children:et.jsxs("tbody",{children:[et.jsxs("tr",{children:[et.jsx("td",{children:"random policy"}),et.jsx("td",{children:e.random})]}),et.jsxs("tr",{children:[et.jsx("td",{children:et.jsx("b",{children:"trained readout"})}),et.jsx("td",{children:et.jsx("b",{children:e.trained})})]}),et.jsxs("tr",{children:[et.jsx("td",{children:"engineered planner (search)"}),et.jsx("td",{children:e.firstFoundPlanner})]})]})}),et.jsxs("details",{children:[et.jsx("summary",{children:"methods + negative control"}),et.jsxs("div",{className:"dim small",children:[o.algo," ",o.negativeControl]})]})]}):null}function pC(){const o=NE(),e=o.snap,i=e?.job;return Ye.useEffect(()=>{document.title="FLYCRUSH · a fruit-fly connectome plays candy crush"},[]),et.jsxs("div",{className:"wrap",children:[et.jsxs("header",{className:"top",children:[et.jsxs("div",{children:[et.jsxs("h1",{children:["FLY",et.jsx("span",{children:"CRUSH"})]}),et.jsx("p",{children:"a fruit-fly connectome plays candy crush"}),et.jsxs("div",{className:"chain",children:["REPLAY … chain ",e?.chain??0," · best ",e?.best??0]})]}),et.jsxs("div",{className:"topr",children:[et.jsxs("span",{className:`prov ${e?.prov?.includes("postgres")?"live":""}`,children:[et.jsx(Ev,{size:13})," ",e?.prov??"…"]}),i?.running&&et.jsxs("span",{className:"prov turbo",children:[et.jsx($h,{size:13})," TURBO ",i.done,"/",i.total," · avg ",i.avg]})]})]}),et.jsxs("main",{className:"grid",children:[et.jsxs("section",{className:"col-game",children:[et.jsxs("div",{className:"card gamecard",children:[et.jsx(UE,{ctl:o}),et.jsxs("div",{className:"controls",children:[et.jsxs("button",{className:o.playing?"":"primary",onClick:()=>{o.playing=!o.playing,o.emit()},children:[o.playing?et.jsx(pE,{size:15}):et.jsx(gE,{size:15}),o.playing?"pause":"play"]}),et.jsxs("button",{onClick:()=>{o.phase==="idle"&&e&&!e.over&&o.flyStep()},children:[et.jsx(ME,{size:15})," step"]}),et.jsxs("button",{className:"accent",onClick:()=>{o.turbo()},children:[et.jsx($h,{size:15})," turbo 200"]}),et.jsxs("button",{className:"ghost",onClick:()=>{o.newGame(!1)},children:[et.jsx(vE,{size:15})," reset"]}),et.jsxs("button",{className:"ghost",onClick:()=>{o.save()},children:[et.jsx(xE,{size:15})," save"]}),et.jsxs("button",{className:"ghost",onClick:()=>{o.speedMul=o.speedMul>=4?1:o.speedMul*2,o.emit()},children:[et.jsx(dE,{size:15})," ×",o.speedMul]}),et.jsxs("button",{className:"ghost",onClick:()=>{o.newGame(!0)},children:[et.jsx(cE,{size:15})," scratch"]})]}),et.jsxs("div",{className:"hint",children:["SPACE play · N step · M manual (click two candies) · R reset · S save · F speed · ⚡ turbo trains live",o.manual&&et.jsx("b",{children:" · MANUAL: click two adjacent candies"})]})]}),et.jsxs("div",{className:"card",children:[et.jsx(iC,{s:e}),et.jsx(aC,{ctl:o})]}),et.jsx(dC,{s:e}),et.jsx(hC,{report:o.report})]}),et.jsxs("section",{className:"col-side",children:[et.jsx(sC,{s:e}),et.jsxs("div",{className:"row2",children:[et.jsx(rC,{s:e}),et.jsx(oC,{board:e?.board??null})]}),et.jsxs("div",{className:"card",children:[et.jsx("div",{className:"card-h",children:et.jsxs("span",{className:"card-t",children:[et.jsx(Ev,{size:14})," Brain · MaleCNS view"]})}),et.jsx(nC,{subset:o.subset,rates:e?.rates})]}),et.jsx(fC,{s:e}),et.jsx(lC,{s:e}),et.jsx(cC,{s:e,subset:o.subset})]})]}),et.jsxs("footer",{children:[et.jsx("span",{children:o.status}),et.jsx("span",{className:"dim",children:"deterministic REINFORCE readout · frozen LIF wiring · no search in the decision path"}),et.jsxs("span",{className:"dim",children:["brain viewer pattern: ",et.jsx("a",{href:"https://github.com/cobanov/fly-connectome-template",children:"fly-connectome-template"})," · list: ",et.jsx("a",{href:"https://github.com/cobanov/awesome-fly",children:"awesome-fly"})]})]})]})}const bS=document.getElementById("root");bS&&tE.createRoot(bS).render(et.jsx(Ye.StrictMode,{children:et.jsx(pC,{})}));
