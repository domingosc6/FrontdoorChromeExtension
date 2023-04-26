!function(){var t={9669:function(t,e,r){t.exports=r(1609)},5448:function(t,e,r){"use strict";var n=r(4867),o=r(6026),i=r(4372),a=r(5327),s=r(4097),u=r(4109),c=r(7985),f=r(7874),l=r(2648),h=r(644),p=r(205);t.exports=function(t){return new Promise((function(e,r){var d,m=t.data,v=t.headers,y=t.responseType;function g(){t.cancelToken&&t.cancelToken.unsubscribe(d),t.signal&&t.signal.removeEventListener("abort",d)}n.isFormData(m)&&n.isStandardBrowserEnv()&&delete v["Content-Type"];var w=new XMLHttpRequest;if(t.auth){var b=t.auth.username||"",E=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";v.Authorization="Basic "+btoa(b+":"+E)}var x=s(t.baseURL,t.url);function O(){if(w){var n="getAllResponseHeaders"in w?u(w.getAllResponseHeaders()):null,i={data:y&&"text"!==y&&"json"!==y?w.response:w.responseText,status:w.status,statusText:w.statusText,headers:n,config:t,request:w};o((function(t){e(t),g()}),(function(t){r(t),g()}),i),w=null}}if(w.open(t.method.toUpperCase(),a(x,t.params,t.paramsSerializer),!0),w.timeout=t.timeout,"onloadend"in w?w.onloadend=O:w.onreadystatechange=function(){w&&4===w.readyState&&(0!==w.status||w.responseURL&&0===w.responseURL.indexOf("file:"))&&setTimeout(O)},w.onabort=function(){w&&(r(new l("Request aborted",l.ECONNABORTED,t,w)),w=null)},w.onerror=function(){r(new l("Network Error",l.ERR_NETWORK,t,w,w)),w=null},w.ontimeout=function(){var e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded",n=t.transitional||f;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),r(new l(e,n.clarifyTimeoutError?l.ETIMEDOUT:l.ECONNABORTED,t,w)),w=null},n.isStandardBrowserEnv()){var R=(t.withCredentials||c(x))&&t.xsrfCookieName?i.read(t.xsrfCookieName):void 0;R&&(v[t.xsrfHeaderName]=R)}"setRequestHeader"in w&&n.forEach(v,(function(t,e){void 0===m&&"content-type"===e.toLowerCase()?delete v[e]:w.setRequestHeader(e,t)})),n.isUndefined(t.withCredentials)||(w.withCredentials=!!t.withCredentials),y&&"json"!==y&&(w.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&w.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&w.upload&&w.upload.addEventListener("progress",t.onUploadProgress),(t.cancelToken||t.signal)&&(d=function(t){w&&(r(!t||t&&t.type?new h:t),w.abort(),w=null)},t.cancelToken&&t.cancelToken.subscribe(d),t.signal&&(t.signal.aborted?d():t.signal.addEventListener("abort",d))),m||(m=null);var S=p(x);S&&-1===["http","https","file"].indexOf(S)?r(new l("Unsupported protocol "+S+":",l.ERR_BAD_REQUEST,t)):w.send(m)}))}},1609:function(t,e,r){"use strict";var n=r(4867),o=r(1849),i=r(321),a=r(7185),s=function t(e){var r=new i(e),s=o(i.prototype.request,r);return n.extend(s,i.prototype,r),n.extend(s,r),s.create=function(r){return t(a(e,r))},s}(r(5546));s.Axios=i,s.CanceledError=r(644),s.CancelToken=r(4972),s.isCancel=r(6502),s.VERSION=r(7288).version,s.toFormData=r(7675),s.AxiosError=r(2648),s.Cancel=s.CanceledError,s.all=function(t){return Promise.all(t)},s.spread=r(8713),s.isAxiosError=r(6268),t.exports=s,t.exports.default=s},4972:function(t,e,r){"use strict";var n=r(644);function o(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var r=this;this.promise.then((function(t){if(r._listeners){var e,n=r._listeners.length;for(e=0;e<n;e++)r._listeners[e](t);r._listeners=null}})),this.promise.then=function(t){var e,n=new Promise((function(t){r.subscribe(t),e=t})).then(t);return n.cancel=function(){r.unsubscribe(e)},n},t((function(t){r.reason||(r.reason=new n(t),e(r.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.prototype.subscribe=function(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]},o.prototype.unsubscribe=function(t){if(this._listeners){var e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}},o.source=function(){var t;return{token:new o((function(e){t=e})),cancel:t}},t.exports=o},644:function(t,e,r){"use strict";var n=r(2648);function o(t){n.call(this,null==t?"canceled":t,n.ERR_CANCELED),this.name="CanceledError"}r(4867).inherits(o,n,{__CANCEL__:!0}),t.exports=o},6502:function(t){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},321:function(t,e,r){"use strict";var n=r(4867),o=r(5327),i=r(782),a=r(3572),s=r(7185),u=r(4097),c=r(4875),f=c.validators;function l(t){this.defaults=t,this.interceptors={request:new i,response:new i}}l.prototype.request=function(t,e){"string"==typeof t?(e=e||{}).url=t:e=t||{},(e=s(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var r=e.transitional;void 0!==r&&c.assertOptions(r,{silentJSONParsing:f.transitional(f.boolean),forcedJSONParsing:f.transitional(f.boolean),clarifyTimeoutError:f.transitional(f.boolean)},!1);var n=[],o=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(o=o&&t.synchronous,n.unshift(t.fulfilled,t.rejected))}));var i,u=[];if(this.interceptors.response.forEach((function(t){u.push(t.fulfilled,t.rejected)})),!o){var l=[a,void 0];for(Array.prototype.unshift.apply(l,n),l=l.concat(u),i=Promise.resolve(e);l.length;)i=i.then(l.shift(),l.shift());return i}for(var h=e;n.length;){var p=n.shift(),d=n.shift();try{h=p(h)}catch(t){d(t);break}}try{i=a(h)}catch(t){return Promise.reject(t)}for(;u.length;)i=i.then(u.shift(),u.shift());return i},l.prototype.getUri=function(t){t=s(this.defaults,t);var e=u(t.baseURL,t.url);return o(e,t.params,t.paramsSerializer)},n.forEach(["delete","get","head","options"],(function(t){l.prototype[t]=function(e,r){return this.request(s(r||{},{method:t,url:e,data:(r||{}).data}))}})),n.forEach(["post","put","patch"],(function(t){function e(e){return function(r,n,o){return this.request(s(o||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}l.prototype[t]=e(),l.prototype[t+"Form"]=e(!0)})),t.exports=l},2648:function(t,e,r){"use strict";var n=r(4867);function o(t,e,r,n,o){Error.call(this),this.message=t,this.name="AxiosError",e&&(this.code=e),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o)}n.inherits(o,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var i=o.prototype,a={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(t){a[t]={value:t}})),Object.defineProperties(o,a),Object.defineProperty(i,"isAxiosError",{value:!0}),o.from=function(t,e,r,a,s,u){var c=Object.create(i);return n.toFlatObject(t,c,(function(t){return t!==Error.prototype})),o.call(c,t.message,e,r,a,s),c.name=t.name,u&&Object.assign(c,u),c},t.exports=o},782:function(t,e,r){"use strict";var n=r(4867);function o(){this.handlers=[]}o.prototype.use=function(t,e,r){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1},o.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},o.prototype.forEach=function(t){n.forEach(this.handlers,(function(e){null!==e&&t(e)}))},t.exports=o},4097:function(t,e,r){"use strict";var n=r(1793),o=r(7303);t.exports=function(t,e){return t&&!n(e)?o(t,e):e}},3572:function(t,e,r){"use strict";var n=r(4867),o=r(8527),i=r(6502),a=r(5546),s=r(644);function u(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new s}t.exports=function(t){return u(t),t.headers=t.headers||{},t.data=o.call(t,t.data,t.headers,t.transformRequest),t.headers=n.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]})),(t.adapter||a.adapter)(t).then((function(e){return u(t),e.data=o.call(t,e.data,e.headers,t.transformResponse),e}),(function(e){return i(e)||(u(t),e&&e.response&&(e.response.data=o.call(t,e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))}},7185:function(t,e,r){"use strict";var n=r(4867);t.exports=function(t,e){e=e||{};var r={};function o(t,e){return n.isPlainObject(t)&&n.isPlainObject(e)?n.merge(t,e):n.isPlainObject(e)?n.merge({},e):n.isArray(e)?e.slice():e}function i(r){return n.isUndefined(e[r])?n.isUndefined(t[r])?void 0:o(void 0,t[r]):o(t[r],e[r])}function a(t){if(!n.isUndefined(e[t]))return o(void 0,e[t])}function s(r){return n.isUndefined(e[r])?n.isUndefined(t[r])?void 0:o(void 0,t[r]):o(void 0,e[r])}function u(r){return r in e?o(t[r],e[r]):r in t?o(void 0,t[r]):void 0}var c={url:a,method:a,data:a,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:u};return n.forEach(Object.keys(t).concat(Object.keys(e)),(function(t){var e=c[t]||i,o=e(t);n.isUndefined(o)&&e!==u||(r[t]=o)})),r}},6026:function(t,e,r){"use strict";var n=r(2648);t.exports=function(t,e,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?e(new n("Request failed with status code "+r.status,[n.ERR_BAD_REQUEST,n.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):t(r)}},8527:function(t,e,r){"use strict";var n=r(4867),o=r(5546);t.exports=function(t,e,r){var i=this||o;return n.forEach(r,(function(r){t=r.call(i,t,e)})),t}},5546:function(t,e,r){"use strict";var n=r(4867),o=r(6016),i=r(2648),a=r(7874),s=r(7675),u={"Content-Type":"application/x-www-form-urlencoded"};function c(t,e){!n.isUndefined(t)&&n.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var f,l={transitional:a,adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(f=r(5448)),f),transformRequest:[function(t,e){if(o(e,"Accept"),o(e,"Content-Type"),n.isFormData(t)||n.isArrayBuffer(t)||n.isBuffer(t)||n.isStream(t)||n.isFile(t)||n.isBlob(t))return t;if(n.isArrayBufferView(t))return t.buffer;if(n.isURLSearchParams(t))return c(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString();var r,i=n.isObject(t),a=e&&e["Content-Type"];if((r=n.isFileList(t))||i&&"multipart/form-data"===a){var u=this.env&&this.env.FormData;return s(r?{"files[]":t}:t,u&&new u)}return i||"application/json"===a?(c(e,"application/json"),function(t,e,r){if(n.isString(t))try{return(0,JSON.parse)(t),n.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(0,JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){var e=this.transitional||l.transitional,r=e&&e.silentJSONParsing,o=e&&e.forcedJSONParsing,a=!r&&"json"===this.responseType;if(a||o&&n.isString(t)&&t.length)try{return JSON.parse(t)}catch(t){if(a){if("SyntaxError"===t.name)throw i.from(t,i.ERR_BAD_RESPONSE,this,null,this.response);throw t}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:r(1623)},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],(function(t){l.headers[t]={}})),n.forEach(["post","put","patch"],(function(t){l.headers[t]=n.merge(u)})),t.exports=l},7874:function(t){"use strict";t.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}},7288:function(t){t.exports={version:"0.27.2"}},1849:function(t){"use strict";t.exports=function(t,e){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return t.apply(e,r)}}},5327:function(t,e,r){"use strict";var n=r(4867);function o(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,r){if(!e)return t;var i;if(r)i=r(e);else if(n.isURLSearchParams(e))i=e.toString();else{var a=[];n.forEach(e,(function(t,e){null!=t&&(n.isArray(t)?e+="[]":t=[t],n.forEach(t,(function(t){n.isDate(t)?t=t.toISOString():n.isObject(t)&&(t=JSON.stringify(t)),a.push(o(e)+"="+o(t))})))})),i=a.join("&")}if(i){var s=t.indexOf("#");-1!==s&&(t=t.slice(0,s)),t+=(-1===t.indexOf("?")?"?":"&")+i}return t}},7303:function(t){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},4372:function(t,e,r){"use strict";var n=r(4867);t.exports=n.isStandardBrowserEnv()?{write:function(t,e,r,o,i,a){var s=[];s.push(t+"="+encodeURIComponent(e)),n.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),n.isString(o)&&s.push("path="+o),n.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},1793:function(t){"use strict";t.exports=function(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}},6268:function(t,e,r){"use strict";var n=r(4867);t.exports=function(t){return n.isObject(t)&&!0===t.isAxiosError}},7985:function(t,e,r){"use strict";var n=r(4867);t.exports=n.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(t){var n=t;return e&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return t=o(window.location.href),function(e){var r=n.isString(e)?o(e):e;return r.protocol===t.protocol&&r.host===t.host}}():function(){return!0}},6016:function(t,e,r){"use strict";var n=r(4867);t.exports=function(t,e){n.forEach(t,(function(r,n){n!==e&&n.toUpperCase()===e.toUpperCase()&&(t[e]=r,delete t[n])}))}},1623:function(t){t.exports=null},4109:function(t,e,r){"use strict";var n=r(4867),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,r,i,a={};return t?(n.forEach(t.split("\n"),(function(t){if(i=t.indexOf(":"),e=n.trim(t.substr(0,i)).toLowerCase(),r=n.trim(t.substr(i+1)),e){if(a[e]&&o.indexOf(e)>=0)return;a[e]="set-cookie"===e?(a[e]?a[e]:[]).concat([r]):a[e]?a[e]+", "+r:r}})),a):a}},205:function(t){"use strict";t.exports=function(t){var e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}},8713:function(t){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},7675:function(t,e,r){"use strict";var n=r(4867);t.exports=function(t,e){e=e||new FormData;var r=[];function o(t){return null===t?"":n.isDate(t)?t.toISOString():n.isArrayBuffer(t)||n.isTypedArray(t)?"function"==typeof Blob?new Blob([t]):Buffer.from(t):t}return function t(i,a){if(n.isPlainObject(i)||n.isArray(i)){if(-1!==r.indexOf(i))throw Error("Circular reference detected in "+a);r.push(i),n.forEach(i,(function(r,i){if(!n.isUndefined(r)){var s,u=a?a+"."+i:i;if(r&&!a&&"object"==typeof r)if(n.endsWith(i,"{}"))r=JSON.stringify(r);else if(n.endsWith(i,"[]")&&(s=n.toArray(r)))return void s.forEach((function(t){!n.isUndefined(t)&&e.append(u,o(t))}));t(r,u)}})),r.pop()}else e.append(a,o(i))}(t),e}},4875:function(t,e,r){"use strict";var n=r(7288).version,o=r(2648),i={};["object","boolean","number","function","string","symbol"].forEach((function(t,e){i[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}}));var a={};i.transitional=function(t,e,r){function i(t,e){return"[Axios v"+n+"] Transitional option '"+t+"'"+e+(r?". "+r:"")}return function(r,n,s){if(!1===t)throw new o(i(n," has been removed"+(e?" in "+e:"")),o.ERR_DEPRECATED);return e&&!a[n]&&(a[n]=!0,console.warn(i(n," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(r,n,s)}},t.exports={assertOptions:function(t,e,r){if("object"!=typeof t)throw new o("options must be an object",o.ERR_BAD_OPTION_VALUE);for(var n=Object.keys(t),i=n.length;i-- >0;){var a=n[i],s=e[a];if(s){var u=t[a],c=void 0===u||s(u,a,t);if(!0!==c)throw new o("option "+a+" must be "+c,o.ERR_BAD_OPTION_VALUE)}else if(!0!==r)throw new o("Unknown option "+a,o.ERR_BAD_OPTION)}},validators:i}},4867:function(t,e,r){"use strict";var n,o=r(1849),i=Object.prototype.toString,a=(n=Object.create(null),function(t){var e=i.call(t);return n[e]||(n[e]=e.slice(8,-1).toLowerCase())});function s(t){return t=t.toLowerCase(),function(e){return a(e)===t}}function u(t){return Array.isArray(t)}function c(t){return void 0===t}var f=s("ArrayBuffer");function l(t){return null!==t&&"object"==typeof t}function h(t){if("object"!==a(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype}var p=s("Date"),d=s("File"),m=s("Blob"),v=s("FileList");function y(t){return"[object Function]"===i.call(t)}var g=s("URLSearchParams");function w(t,e){if(null!=t)if("object"!=typeof t&&(t=[t]),u(t))for(var r=0,n=t.length;r<n;r++)e.call(null,t[r],r,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}var b,E=(b="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(t){return b&&t instanceof b});t.exports={isArray:u,isArrayBuffer:f,isBuffer:function(t){return null!==t&&!c(t)&&null!==t.constructor&&!c(t.constructor)&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)},isFormData:function(t){var e="[object FormData]";return t&&("function"==typeof FormData&&t instanceof FormData||i.call(t)===e||y(t.toString)&&t.toString()===e)},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&f(t.buffer)},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:l,isPlainObject:h,isUndefined:c,isDate:p,isFile:d,isBlob:m,isFunction:y,isStream:function(t){return l(t)&&y(t.pipe)},isURLSearchParams:g,isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:w,merge:function t(){var e={};function r(r,n){h(e[n])&&h(r)?e[n]=t(e[n],r):h(r)?e[n]=t({},r):u(r)?e[n]=r.slice():e[n]=r}for(var n=0,o=arguments.length;n<o;n++)w(arguments[n],r);return e},extend:function(t,e,r){return w(e,(function(e,n){t[n]=r&&"function"==typeof e?o(e,r):e})),t},trim:function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")},stripBOM:function(t){return 65279===t.charCodeAt(0)&&(t=t.slice(1)),t},inherits:function(t,e,r,n){t.prototype=Object.create(e.prototype,n),t.prototype.constructor=t,r&&Object.assign(t.prototype,r)},toFlatObject:function(t,e,r){var n,o,i,a={};e=e||{};do{for(o=(n=Object.getOwnPropertyNames(t)).length;o-- >0;)a[i=n[o]]||(e[i]=t[i],a[i]=!0);t=Object.getPrototypeOf(t)}while(t&&(!r||r(t,e))&&t!==Object.prototype);return e},kindOf:a,kindOfTest:s,endsWith:function(t,e,r){t=String(t),(void 0===r||r>t.length)&&(r=t.length),r-=e.length;var n=t.indexOf(e,r);return-1!==n&&n===r},toArray:function(t){if(!t)return null;var e=t.length;if(c(e))return null;for(var r=new Array(e);e-- >0;)r[e]=t[e];return r},isTypedArray:E,isFileList:v}},5666:function(t){var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var i=e&&e.prototype instanceof y?e:y,a=Object.create(i.prototype),s=new _(n||[]);return o(a,"_invoke",{value:A(t,r,s)}),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var h="suspendedStart",p="suspendedYield",d="executing",m="completed",v={};function y(){}function g(){}function w(){}var b={};c(b,a,(function(){return this}));var E=Object.getPrototypeOf,x=E&&E(E(L([])));x&&x!==r&&n.call(x,a)&&(b=x);var O=w.prototype=y.prototype=Object.create(b);function R(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(o,i,a,s){var u=l(t[o],t,i);if("throw"!==u.type){var c=u.arg,f=c.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(f).then((function(t){c.value=t,a(c)}),(function(t){return r("throw",t,a,s)}))}s(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function A(t,e,r){var n=h;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===m){if("throw"===o)throw i;return C()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=N(a,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?m:p,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=m,r.method="throw",r.arg=u.arg)}}}function N(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,N(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=l(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function L(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:C}}function C(){return{value:e,done:!0}}return g.prototype=w,o(O,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:g,configurable:!0}),g.displayName=c(w,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,c(t,u,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},R(S.prototype),c(S.prototype,s,(function(){return this})),t.AsyncIterator=S,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new S(f(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},R(O),c(O,u,"Generator"),c(O,a,(function(){return this})),c(O,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=L,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:L(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";var t=r(9669),e=r.n(t),n=r(6026),o=r.n(n),i=r(5327),a=r.n(i),s=r(4097),u=r.n(s),c=r(4867);async function f(t,e){let r;try{r=await fetch(t)}catch(r){return l("Network Error",e,"ERR_NETWORK",t)}const n={ok:r.ok,status:r.status,statusText:r.statusText,headers:new Headers(r.headers),config:e,request:t};if(r.status>=200&&204!==r.status)switch(e.responseType){case"arraybuffer":n.data=await r.arrayBuffer();break;case"blob":n.data=await r.blob();break;case"json":n.data=await r.json();break;case"formData":n.data=await r.formData();break;default:n.data=await r.text()}return n}function l(t,r,n,o,i){return e().AxiosError&&"function"==typeof e().AxiosError?new(e().AxiosError)(t,e().AxiosError[n],r,o,i):function(t,e,r,n,o){return t.config=e,r&&(t.code=r),t.request=n,t.response=o,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},t}(new Error(t),r,n,o,i)}var h=e().create({adapter:async function(t){const e=function(t){const e=new Headers(t.headers);if(t.auth){const r=t.auth.username||"",n=t.auth.password?decodeURI(encodeURIComponent(t.auth.password)):"";e.set("Authorization",`Basic ${btoa(r+":"+n)}`)}const r=t.method.toUpperCase(),n={headers:e,method:r};"GET"!==r&&"HEAD"!==r&&(n.body=t.data,(0,c.isFormData)(n.body)&&(0,c.isStandardBrowserEnv)()&&e.delete("Content-Type")),t.mode&&(n.mode=t.mode),t.cache&&(n.cache=t.cache),t.integrity&&(n.integrity=t.integrity),t.redirect&&(n.redirect=t.redirect),t.referrer&&(n.referrer=t.referrer),(0,c.isUndefined)(t.withCredentials)||(n.credentials=t.withCredentials?"include":"omit");const o=u()(t.baseURL,t.url),i=a()(o,t.params,t.paramsSerializer);return new Request(i,n)}(t),r=[f(e,t)];t.timeout&&t.timeout>0&&r.push(new Promise((r=>{setTimeout((()=>{const n=t.timeoutErrorMessage?t.timeoutErrorMessage:"timeout of "+t.timeout+"ms exceeded";r(l(n,t,"ECONNABORTED",e))}),t.timeout)})));const n=await Promise.race(r);return new Promise(((e,r)=>{n instanceof Error?r(n):"[object Function]"===Object.prototype.toString.call(t.settle)?t.settle(e,r,n):o()(e,r,n)}))},baseURL:"http://localhost:3030/api/v1/",headers:{"Content-type":"application/json"}}),p=function(t){var e={prompt:t};return console.log(e),h.post("/summary/request",e)},d={useHandleClick:function(){return t=this,e=void 0,n=function(){return function(t,e){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(u){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(r=1,n&&(o=2&s[0]?n.return:s[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;switch(n=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,n=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=e.call(t,a)}catch(t){s=[6,t],n=0}finally{r=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}}(this,(function(t){try{chrome.tabs.query({active:!0,windowId:chrome.windows.WINDOW_ID_CURRENT},(function(t){chrome.scripting.executeScript({target:{tabId:t[0].id,allFrames:!0},func:function(){var t;return null===(t=window.getSelection())||void 0===t?void 0:t.toString()}}).then((function(t){for(var e=0,r=t;e<r.length;e++){var n=r[e].result;p(n).then((function(t){return t.data.summary}))}}))}))}catch(t){throw console.error(t),t}return[2]}))},new((r=void 0)||(r=Promise))((function(o,i){function a(t){try{u(n.next(t))}catch(t){i(t)}}function s(t){try{u(n.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,s)}u((n=n.apply(t,e||[])).next())}));var t,e,r,n}};r(5666),chrome.contextMenus.create({title:"Resume this text",id:"ResumeText",contexts:["selection"]}),chrome.contextMenus.onClicked.addListener((function(t){"ResumeText"==t.menuItemId&&d.useHandleClick()}))}()}();