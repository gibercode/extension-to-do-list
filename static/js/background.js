(()=>{var e={876:function(e,r){var s,g,a;"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,g=[e],s=function(e){"use strict";var r;if(null===(r=globalThis.chrome)||void 0===r||null===(r=r.runtime)||void 0===r||!r.id)throw new Error("This script should only be loaded in a browser extension.");if("undefined"===typeof globalThis.browser||Object.getPrototypeOf(globalThis.browser)!==Object.prototype){const r="The message port closed before a response was received.",s=e=>{const s={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(0===Object.keys(s).length)throw new Error("api-metadata.json has not been included in browser-polyfill");class g extends WeakMap{constructor(e){super(arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0),this.createItem=e}get(e){return this.has(e)||this.set(e,this.createItem(e)),super.get(e)}}const a=e=>e&&"object"===typeof e&&"function"===typeof e.then,n=(r,s)=>function(){for(var g=arguments.length,a=new Array(g),n=0;n<g;n++)a[n]=arguments[n];e.runtime.lastError?r.reject(new Error(e.runtime.lastError.message)):s.singleCallbackArg||a.length<=1&&!1!==s.singleCallbackArg?r.resolve(a[0]):r.resolve(a)},t=e=>1==e?"argument":"arguments",m=(e,r)=>function(s){for(var g=arguments.length,a=new Array(g>1?g-1:0),m=1;m<g;m++)a[m-1]=arguments[m];if(a.length<r.minArgs)throw new Error("Expected at least ".concat(r.minArgs," ").concat(t(r.minArgs)," for ").concat(e,"(), got ").concat(a.length));if(a.length>r.maxArgs)throw new Error("Expected at most ".concat(r.maxArgs," ").concat(t(r.maxArgs)," for ").concat(e,"(), got ").concat(a.length));return new Promise(((g,t)=>{if(r.fallbackToNoCallback)try{s[e](...a,n({resolve:g,reject:t},r))}catch(m){console.warn("".concat(e," API method doesn't seem to support the callback parameter, ")+"falling back to call it without a callback: ",m),s[e](...a),r.fallbackToNoCallback=!1,r.noCallback=!0,g()}else r.noCallback?(s[e](...a),g()):s[e](...a,n({resolve:g,reject:t},r))}))},i=(e,r,s)=>new Proxy(r,{apply:(r,g,a)=>s.call(g,e,...a)});let o=Function.call.bind(Object.prototype.hasOwnProperty);const A=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},g=Object.create(null),a={has:(r,s)=>s in e||s in g,get(a,n,t){if(n in g)return g[n];if(!(n in e))return;let l=e[n];if("function"===typeof l)if("function"===typeof r[n])l=i(e,e[n],r[n]);else if(o(s,n)){let r=m(n,s[n]);l=i(e,e[n],r)}else l=l.bind(e);else if("object"===typeof l&&null!==l&&(o(r,n)||o(s,n)))l=A(l,r[n],s[n]);else{if(!o(s,"*"))return Object.defineProperty(g,n,{configurable:!0,enumerable:!0,get:()=>e[n],set(r){e[n]=r}}),l;l=A(l,r[n],s["*"])}return g[n]=l,l},set:(r,s,a,n)=>(s in g?g[s]=a:e[s]=a,!0),defineProperty:(e,r,s)=>Reflect.defineProperty(g,r,s),deleteProperty:(e,r)=>Reflect.deleteProperty(g,r)},n=Object.create(e);return new Proxy(n,a)},l=e=>({addListener(r,s){for(var g=arguments.length,a=new Array(g>2?g-2:0),n=2;n<g;n++)a[n-2]=arguments[n];r.addListener(e.get(s),...a)},hasListener:(r,s)=>r.hasListener(e.get(s)),removeListener(r,s){r.removeListener(e.get(s))}}),c=new g((e=>"function"!==typeof e?e:function(r){const s=A(r,{},{getContent:{minArgs:0,maxArgs:0}});e(s)})),x=new g((e=>"function"!==typeof e?e:function(r,s,g){let n,t,m=!1,i=new Promise((e=>{n=function(r){m=!0,e(r)}}));try{t=e(r,s,n)}catch(l){t=Promise.reject(l)}const o=!0!==t&&a(t);if(!0!==t&&!o&&!m)return!1;const A=e=>{e.then((e=>{g(e)}),(e=>{let r;r=e&&(e instanceof Error||"string"===typeof e.message)?e.message:"An unexpected error occurred",g({__mozWebExtensionPolyfillReject__:!0,message:r})})).catch((e=>{console.error("Failed to send onMessage rejected reply",e)}))};return A(o?t:i),!0})),d=(s,g)=>{let{reject:a,resolve:n}=s;e.runtime.lastError?e.runtime.lastError.message===r?n():a(new Error(e.runtime.lastError.message)):g&&g.__mozWebExtensionPolyfillReject__?a(new Error(g.message)):n(g)},u=function(e,r,s){for(var g=arguments.length,a=new Array(g>3?g-3:0),n=3;n<g;n++)a[n-3]=arguments[n];if(a.length<r.minArgs)throw new Error("Expected at least ".concat(r.minArgs," ").concat(t(r.minArgs)," for ").concat(e,"(), got ").concat(a.length));if(a.length>r.maxArgs)throw new Error("Expected at most ".concat(r.maxArgs," ").concat(t(r.maxArgs)," for ").concat(e,"(), got ").concat(a.length));return new Promise(((e,r)=>{const g=d.bind(null,{resolve:e,reject:r});a.push(g),s.sendMessage(...a)}))},f={devtools:{network:{onRequestFinished:l(c)}},runtime:{onMessage:l(x),onMessageExternal:l(x),sendMessage:u.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:u.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},b={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return s.privacy={network:{"*":b},services:{"*":b},websites:{"*":b}},A(e,f,s)};e.exports=s(chrome)}else e.exports=globalThis.browser},void 0===(a="function"===typeof s?s.apply(r,g):s)||(e.exports=a)}},r={};function s(g){var a=r[g];if(void 0!==a)return a.exports;var n=r[g]={exports:{}};return e[g].call(n.exports,n,n.exports,s),n.exports}(()=>{"use strict";var e=s(876);async function r(){await e.storage.local.clear(),e.runtime.onMessage.addListener((async r=>{if("background"===r.to){console.log("background handled: ",r.action);const s=(await async function(){return(await e.tabs.query({active:!0,currentWindow:!0}))[0]}()).id;if(s)return async function(r){var s;const g=await e.storage.local.get(r),a=null!==(s=null===g||void 0===g?void 0:g[r])&&void 0!==s?s:0;return e.storage.local.set({[r]:a+1})}(s.toString())}}))}e.runtime.onInstalled.addListener((()=>{r().then((()=>{console.log("[background] loaded ")}))}))})()})();
//# sourceMappingURL=background.js.map