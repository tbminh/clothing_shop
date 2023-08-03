var ne={exports:{}},Be=function(r,n){return function(){for(var t=new Array(arguments.length),a=0;a<t.length;a++)t[a]=arguments[a];return r.apply(n,t)}},Ge=Be,w=Object.prototype.toString;function ie(e){return Array.isArray(e)}function re(e){return typeof e>"u"}function Ye(e){return e!==null&&!re(e)&&e.constructor!==null&&!re(e.constructor)&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}function De(e){return w.call(e)==="[object ArrayBuffer]"}function Qe(e){return w.call(e)==="[object FormData]"}function Ze(e){var r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(e):r=e&&e.buffer&&De(e.buffer),r}function er(e){return typeof e=="string"}function rr(e){return typeof e=="number"}function je(e){return e!==null&&typeof e=="object"}function T(e){if(w.call(e)!=="[object Object]")return!1;var r=Object.getPrototypeOf(e);return r===null||r===Object.prototype}function tr(e){return w.call(e)==="[object Date]"}function nr(e){return w.call(e)==="[object File]"}function ir(e){return w.call(e)==="[object Blob]"}function _e(e){return w.call(e)==="[object Function]"}function ar(e){return je(e)&&_e(e.pipe)}function sr(e){return w.call(e)==="[object URLSearchParams]"}function or(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function ur(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function ae(e,r){if(!(e===null||typeof e>"u"))if(typeof e!="object"&&(e=[e]),ie(e))for(var n=0,i=e.length;n<i;n++)r.call(null,e[n],n,e);else for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.call(null,e[t],t,e)}function te(){var e={};function r(t,a){T(e[a])&&T(t)?e[a]=te(e[a],t):T(t)?e[a]=te({},t):ie(t)?e[a]=t.slice():e[a]=t}for(var n=0,i=arguments.length;n<i;n++)ae(arguments[n],r);return e}function fr(e,r,n){return ae(r,function(t,a){n&&typeof t=="function"?e[a]=Ge(t,n):e[a]=t}),e}function lr(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}var p={isArray:ie,isArrayBuffer:De,isBuffer:Ye,isFormData:Qe,isArrayBufferView:Ze,isString:er,isNumber:rr,isObject:je,isPlainObject:T,isUndefined:re,isDate:tr,isFile:nr,isBlob:ir,isFunction:_e,isStream:ar,isURLSearchParams:sr,isStandardBrowserEnv:ur,forEach:ae,merge:te,extend:fr,trim:or,stripBOM:lr},O=p;function ce(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var $e=function(r,n,i){if(!n)return r;var t;if(i)t=i(n);else if(O.isURLSearchParams(n))t=n.toString();else{var a=[];O.forEach(n,function(l,f){l===null||typeof l>"u"||(O.isArray(l)?f=f+"[]":l=[l],O.forEach(l,function(s){O.isDate(s)?s=s.toISOString():O.isObject(s)&&(s=JSON.stringify(s)),a.push(ce(f)+"="+ce(s))}))}),t=a.join("&")}if(t){var u=r.indexOf("#");u!==-1&&(r=r.slice(0,u)),r+=(r.indexOf("?")===-1?"?":"&")+t}return r},cr=p;function g(){this.handlers=[]}g.prototype.use=function(r,n,i){return this.handlers.push({fulfilled:r,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1};g.prototype.eject=function(r){this.handlers[r]&&(this.handlers[r]=null)};g.prototype.forEach=function(r){cr.forEach(this.handlers,function(i){i!==null&&r(i)})};var dr=g,hr=p,pr=function(r,n){hr.forEach(r,function(t,a){a!==n&&a.toUpperCase()===n.toUpperCase()&&(r[n]=t,delete r[a])})},Ie=function(r,n,i,t,a){return r.config=n,i&&(r.code=i),r.request=t,r.response=a,r.isAxiosError=!0,r.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},r},_,de;function ke(){if(de)return _;de=1;var e=Ie;return _=function(n,i,t,a,u){var o=new Error(n);return e(o,i,t,a,u)},_}var $,he;function vr(){if(he)return $;he=1;var e=ke();return $=function(n,i,t){var a=t.config.validateStatus;!t.status||!a||a(t.status)?n(t):i(e("Request failed with status code "+t.status,t.config,null,t.request,t))},$}var I,pe;function mr(){if(pe)return I;pe=1;var e=p;return I=e.isStandardBrowserEnv()?function(){return{write:function(i,t,a,u,o,l){var f=[];f.push(i+"="+encodeURIComponent(t)),e.isNumber(a)&&f.push("expires="+new Date(a).toGMTString()),e.isString(u)&&f.push("path="+u),e.isString(o)&&f.push("domain="+o),l===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(i){var t=document.cookie.match(new RegExp("(^|;\\s*)("+i+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(i){this.write(i,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),I}var k,ve;function br(){return ve||(ve=1,k=function(r){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)}),k}var F,me;function yr(){return me||(me=1,F=function(r,n){return n?r.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):r}),F}var H,be;function Er(){if(be)return H;be=1;var e=br(),r=yr();return H=function(i,t){return i&&!e(t)?r(i,t):t},H}var M,ye;function wr(){if(ye)return M;ye=1;var e=p,r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return M=function(i){var t={},a,u,o;return i&&e.forEach(i.split(`
`),function(f){if(o=f.indexOf(":"),a=e.trim(f.substr(0,o)).toLowerCase(),u=e.trim(f.substr(o+1)),a){if(t[a]&&r.indexOf(a)>=0)return;a==="set-cookie"?t[a]=(t[a]?t[a]:[]).concat([u]):t[a]=t[a]?t[a]+", "+u:u}}),t},M}var J,Ee;function Rr(){if(Ee)return J;Ee=1;var e=p;return J=e.isStandardBrowserEnv()?function(){var n=/(msie|trident)/i.test(navigator.userAgent),i=document.createElement("a"),t;function a(u){var o=u;return n&&(i.setAttribute("href",o),o=i.href),i.setAttribute("href",o),{href:i.href,protocol:i.protocol?i.protocol.replace(/:$/,""):"",host:i.host,search:i.search?i.search.replace(/^\?/,""):"",hash:i.hash?i.hash.replace(/^#/,""):"",hostname:i.hostname,port:i.port,pathname:i.pathname.charAt(0)==="/"?i.pathname:"/"+i.pathname}}return t=a(window.location.href),function(o){var l=e.isString(o)?a(o):o;return l.protocol===t.protocol&&l.host===t.host}}():function(){return function(){return!0}}(),J}var z,we;function L(){if(we)return z;we=1;function e(r){this.message=r}return e.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},e.prototype.__CANCEL__=!0,z=e,z}var V,Re;function Ce(){if(Re)return V;Re=1;var e=p,r=vr(),n=mr(),i=$e,t=Er(),a=wr(),u=Rr(),o=ke(),l=B(),f=L();return V=function(s){return new Promise(function(h,E){var x=s.data,A=s.headers,N=s.responseType,C;function oe(){s.cancelToken&&s.cancelToken.unsubscribe(C),s.signal&&s.signal.removeEventListener("abort",C)}e.isFormData(x)&&delete A["Content-Type"];var d=new XMLHttpRequest;if(s.auth){var Xe=s.auth.username||"",We=s.auth.password?unescape(encodeURIComponent(s.auth.password)):"";A.Authorization="Basic "+btoa(Xe+":"+We)}var ue=t(s.baseURL,s.url);d.open(s.method.toUpperCase(),i(ue,s.params,s.paramsSerializer),!0),d.timeout=s.timeout;function fe(){if(d){var b="getAllResponseHeaders"in d?a(d.getAllResponseHeaders()):null,S=!N||N==="text"||N==="json"?d.responseText:d.response,R={data:S,status:d.status,statusText:d.statusText,headers:b,config:s,request:d};r(function(j){h(j),oe()},function(j){E(j),oe()},R),d=null}}if("onloadend"in d?d.onloadend=fe:d.onreadystatechange=function(){!d||d.readyState!==4||d.status===0&&!(d.responseURL&&d.responseURL.indexOf("file:")===0)||setTimeout(fe)},d.onabort=function(){d&&(E(o("Request aborted",s,"ECONNABORTED",d)),d=null)},d.onerror=function(){E(o("Network Error",s,null,d)),d=null},d.ontimeout=function(){var S=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded",R=s.transitional||l.transitional;s.timeoutErrorMessage&&(S=s.timeoutErrorMessage),E(o(S,s,R.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",d)),d=null},e.isStandardBrowserEnv()){var le=(s.withCredentials||u(ue))&&s.xsrfCookieName?n.read(s.xsrfCookieName):void 0;le&&(A[s.xsrfHeaderName]=le)}"setRequestHeader"in d&&e.forEach(A,function(S,R){typeof x>"u"&&R.toLowerCase()==="content-type"?delete A[R]:d.setRequestHeader(R,S)}),e.isUndefined(s.withCredentials)||(d.withCredentials=!!s.withCredentials),N&&N!=="json"&&(d.responseType=s.responseType),typeof s.onDownloadProgress=="function"&&d.addEventListener("progress",s.onDownloadProgress),typeof s.onUploadProgress=="function"&&d.upload&&d.upload.addEventListener("progress",s.onUploadProgress),(s.cancelToken||s.signal)&&(C=function(b){d&&(E(!b||b&&b.type?new f("canceled"):b),d.abort(),d=null)},s.cancelToken&&s.cancelToken.subscribe(C),s.signal&&(s.signal.aborted?C():s.signal.addEventListener("abort",C))),x||(x=null),d.send(x)})},V}var X,Se;function B(){if(Se)return X;Se=1;var e=p,r=pr,n=Ie,i={"Content-Type":"application/x-www-form-urlencoded"};function t(l,f){!e.isUndefined(l)&&e.isUndefined(l["Content-Type"])&&(l["Content-Type"]=f)}function a(){var l;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(l=Ce()),l}function u(l,f,c){if(e.isString(l))try{return(f||JSON.parse)(l),e.trim(l)}catch(s){if(s.name!=="SyntaxError")throw s}return(c||JSON.stringify)(l)}var o={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:a(),transformRequest:[function(f,c){return r(c,"Accept"),r(c,"Content-Type"),e.isFormData(f)||e.isArrayBuffer(f)||e.isBuffer(f)||e.isStream(f)||e.isFile(f)||e.isBlob(f)?f:e.isArrayBufferView(f)?f.buffer:e.isURLSearchParams(f)?(t(c,"application/x-www-form-urlencoded;charset=utf-8"),f.toString()):e.isObject(f)||c&&c["Content-Type"]==="application/json"?(t(c,"application/json"),u(f)):f}],transformResponse:[function(f){var c=this.transitional||o.transitional,s=c&&c.silentJSONParsing,m=c&&c.forcedJSONParsing,h=!s&&this.responseType==="json";if(h||m&&e.isString(f)&&f.length)try{return JSON.parse(f)}catch(E){if(h)throw E.name==="SyntaxError"?n(E,this,"E_JSON_PARSE"):E}return f}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(f){return f>=200&&f<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};return e.forEach(["delete","get","head"],function(f){o.headers[f]={}}),e.forEach(["post","put","patch"],function(f){o.headers[f]=e.merge(i)}),X=o,X}var Cr=p,Sr=B(),Or=function(r,n,i){var t=this||Sr;return Cr.forEach(i,function(u){r=u.call(t,r,n)}),r},W,Oe;function Fe(){return Oe||(Oe=1,W=function(r){return!!(r&&r.__CANCEL__)}),W}var qe=p,K=Or,qr=Fe(),xr=B(),Ar=L();function G(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ar("canceled")}var Nr=function(r){G(r),r.headers=r.headers||{},r.data=K.call(r,r.data,r.headers,r.transformRequest),r.headers=qe.merge(r.headers.common||{},r.headers[r.method]||{},r.headers),qe.forEach(["delete","get","head","post","put","patch","common"],function(t){delete r.headers[t]});var n=r.adapter||xr.adapter;return n(r).then(function(t){return G(r),t.data=K.call(r,t.data,t.headers,r.transformResponse),t},function(t){return qr(t)||(G(r),t&&t.response&&(t.response.data=K.call(r,t.response.data,t.response.headers,r.transformResponse))),Promise.reject(t)})},v=p,He=function(r,n){n=n||{};var i={};function t(c,s){return v.isPlainObject(c)&&v.isPlainObject(s)?v.merge(c,s):v.isPlainObject(s)?v.merge({},s):v.isArray(s)?s.slice():s}function a(c){if(v.isUndefined(n[c])){if(!v.isUndefined(r[c]))return t(void 0,r[c])}else return t(r[c],n[c])}function u(c){if(!v.isUndefined(n[c]))return t(void 0,n[c])}function o(c){if(v.isUndefined(n[c])){if(!v.isUndefined(r[c]))return t(void 0,r[c])}else return t(void 0,n[c])}function l(c){if(c in n)return t(r[c],n[c]);if(c in r)return t(void 0,r[c])}var f={url:u,method:u,data:u,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l};return v.forEach(Object.keys(r).concat(Object.keys(n)),function(s){var m=f[s]||a,h=m(s);v.isUndefined(h)&&m!==l||(i[s]=h)}),i},Y,xe;function Me(){return xe||(xe=1,Y={version:"0.25.0"}),Y}var Pr=Me().version,se={};["object","boolean","number","function","string","symbol"].forEach(function(e,r){se[e]=function(i){return typeof i===e||"a"+(r<1?"n ":" ")+e}});var Ae={};se.transitional=function(r,n,i){function t(a,u){return"[Axios v"+Pr+"] Transitional option '"+a+"'"+u+(i?". "+i:"")}return function(a,u,o){if(r===!1)throw new Error(t(u," has been removed"+(n?" in "+n:"")));return n&&!Ae[u]&&(Ae[u]=!0,console.warn(t(u," has been deprecated since v"+n+" and will be removed in the near future"))),r?r(a,u,o):!0}};function Tr(e,r,n){if(typeof e!="object")throw new TypeError("options must be an object");for(var i=Object.keys(e),t=i.length;t-- >0;){var a=i[t],u=r[a];if(u){var o=e[a],l=o===void 0||u(o,a,e);if(l!==!0)throw new TypeError("option "+a+" must be "+l);continue}if(n!==!0)throw Error("Unknown option "+a)}}var Ur={assertOptions:Tr,validators:se},Je=p,gr=$e,Ne=dr,Pe=Nr,D=He,ze=Ur,q=ze.validators;function P(e){this.defaults=e,this.interceptors={request:new Ne,response:new Ne}}P.prototype.request=function(r,n){if(typeof r=="string"?(n=n||{},n.url=r):n=r||{},!n.url)throw new Error("Provided config url is not valid");n=D(this.defaults,n),n.method?n.method=n.method.toLowerCase():this.defaults.method?n.method=this.defaults.method.toLowerCase():n.method="get";var i=n.transitional;i!==void 0&&ze.assertOptions(i,{silentJSONParsing:q.transitional(q.boolean),forcedJSONParsing:q.transitional(q.boolean),clarifyTimeoutError:q.transitional(q.boolean)},!1);var t=[],a=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(a=a&&h.synchronous,t.unshift(h.fulfilled,h.rejected))});var u=[];this.interceptors.response.forEach(function(h){u.push(h.fulfilled,h.rejected)});var o;if(!a){var l=[Pe,void 0];for(Array.prototype.unshift.apply(l,t),l=l.concat(u),o=Promise.resolve(n);l.length;)o=o.then(l.shift(),l.shift());return o}for(var f=n;t.length;){var c=t.shift(),s=t.shift();try{f=c(f)}catch(m){s(m);break}}try{o=Pe(f)}catch(m){return Promise.reject(m)}for(;u.length;)o=o.then(u.shift(),u.shift());return o};P.prototype.getUri=function(r){if(!r.url)throw new Error("Provided config url is not valid");return r=D(this.defaults,r),gr(r.url,r.params,r.paramsSerializer).replace(/^\?/,"")};Je.forEach(["delete","get","head","options"],function(r){P.prototype[r]=function(n,i){return this.request(D(i||{},{method:r,url:n,data:(i||{}).data}))}});Je.forEach(["post","put","patch"],function(r){P.prototype[r]=function(n,i,t){return this.request(D(t||{},{method:r,url:n,data:i}))}});var Lr=P,Q,Te;function Br(){if(Te)return Q;Te=1;var e=L();function r(n){if(typeof n!="function")throw new TypeError("executor must be a function.");var i;this.promise=new Promise(function(u){i=u});var t=this;this.promise.then(function(a){if(t._listeners){var u,o=t._listeners.length;for(u=0;u<o;u++)t._listeners[u](a);t._listeners=null}}),this.promise.then=function(a){var u,o=new Promise(function(l){t.subscribe(l),u=l}).then(a);return o.cancel=function(){t.unsubscribe(u)},o},n(function(u){t.reason||(t.reason=new e(u),i(t.reason))})}return r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.prototype.subscribe=function(i){if(this.reason){i(this.reason);return}this._listeners?this._listeners.push(i):this._listeners=[i]},r.prototype.unsubscribe=function(i){if(this._listeners){var t=this._listeners.indexOf(i);t!==-1&&this._listeners.splice(t,1)}},r.source=function(){var i,t=new r(function(u){i=u});return{token:t,cancel:i}},Q=r,Q}var Z,Ue;function Dr(){return Ue||(Ue=1,Z=function(r){return function(i){return r.apply(null,i)}}),Z}var ee,ge;function jr(){if(ge)return ee;ge=1;var e=p;return ee=function(n){return e.isObject(n)&&n.isAxiosError===!0},ee}var Le=p,_r=Be,U=Lr,$r=He,Ir=B();function Ve(e){var r=new U(e),n=_r(U.prototype.request,r);return Le.extend(n,U.prototype,r),Le.extend(n,r),n.create=function(t){return Ve($r(e,t))},n}var y=Ve(Ir);y.Axios=U;y.Cancel=L();y.CancelToken=Br();y.isCancel=Fe();y.VERSION=Me().version;y.all=function(r){return Promise.all(r)};y.spread=Dr();y.isAxiosError=jr();ne.exports=y;ne.exports.default=y;var kr=ne.exports;export{kr as a};
