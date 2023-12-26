(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();let hi=Object,mt,ke=hi.getPrototypeOf,di=document,Ur,be,lt,Jc={isConnected:1},wd=1e3,mr,ma={},Ad=ke(Jc),Xc=ke(ke),Zc=(n,e,t,r)=>(n??(setTimeout(t,r),new Set)).add(e),el=(n,e,t)=>{let r=be;be=e;try{return n(t)}catch(s){return console.error(s),t}finally{be=r}},Br=n=>n.filter(e=>{var t;return(t=e._dom)==null?void 0:t.isConnected}),tl=n=>mr=Zc(mr,n,()=>{for(let e of mr)e._bindings=Br(e._bindings),e._listeners=Br(e._listeners);mr=mt},wd),hs={get val(){return be==null||be.add(this),this._val},get oldVal(){return be==null||be.add(this),this._oldVal},set val(n){let e=this;if(n!==e._val){e._val=n;let t=[...e._listeners=Br(e._listeners)];for(let r of t)sl(r.f,r.s,r._dom),r._dom=mt;e._bindings.length?Ur=Zc(Ur,e,Cd):e._oldVal=n}}},nl=n=>({__proto__:hs,_val:n,_oldVal:n,_bindings:[],_listeners:[]}),rl=n=>ke(n??0)===hs,Rd=n=>rl(n)?n.val:n,Sd=n=>rl(n)?n.oldVal:n,Ft=(n,e)=>{let t=new Set,r={f:n},s=lt;lt=[];let i=el(n,t,e);i=(i??di).nodeType?i:new Text(i);for(let o of t)tl(o),o._bindings.push(r);for(let o of lt)o._dom=i;return lt=s,r._dom=i},sl=(n,e=nl(),t)=>{let r=new Set,s={f:n,s:e};s._dom=t??(lt==null?void 0:lt.push(s))??Jc,e.val=el(n,r);for(let i of r)tl(i),i._listeners.push(s);return e},il=(n,...e)=>{for(let t of e.flat(1/0)){let r=ke(t??0),s=r===hs?Ft(()=>t.val):r===Xc?Ft(t):t;s!=mt&&n.append(s)}return n},Pd=n=>(n._isBindingFunc=1,n),ga=n=>new Proxy((e,...t)=>{var o;let[r,...s]=ke(t[0]??0)===Ad?t:[{},...t],i=n?di.createElementNS(n,e):di.createElement(e);for(let[a,c]of hi.entries(r)){let l=E=>E?hi.getOwnPropertyDescriptor(E,a)??l(ke(E)):mt,u=e+","+a,h=ma[u]??(ma[u]=((o=l(ke(i)))==null?void 0:o.set)??0),d=h?h.bind(i):i.setAttribute.bind(i,a),f=ke(c??0);f===hs?Ft(()=>(d(c.val),i)):f===Xc&&(!a.startsWith("on")||c._isBindingFunc)?Ft(()=>(d(c()),i)):d(c)}return il(i,...s)},{get:(e,t)=>e.bind(mt,t)}),ol=(n,e)=>e?e!==n&&n.replaceWith(e):n.remove(),Cd=()=>{let n=[...Ur].filter(e=>e._val!==e._oldVal);Ur=mt;for(let e of new Set(n.flatMap(t=>t._bindings=Br(t._bindings))))ol(e._dom,Ft(e.f,e._dom)),e._dom=mt;for(let e of n)e._oldVal=e._val},bd=(n,e)=>ol(n,Ft(e,n));const D={add:il,_:Pd,tags:ga(),tagsNS:ga,state:nl,val:Rd,oldVal:Sd,derive:sl,hydrate:bd};function fi(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function"){var s=0;for(r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]])}return t}const Gi=D.state(window.location.pathname),kd=D.state({}),Nd=D.state({}),Dd=/:([^\\d|^/]([^/]+)?)/;function Vd(n){var{routes:e}=n,t=fi(n,["routes"]);const r=D.state(!1),s=D.tags.div(Object.assign({},t)),i=()=>{const{route:o,params:a}=(c=>{for(;c!=="/"&&c.endsWith("/");)c=c.slice(0,c.length-1);const l=c.split("/"),u={};let h=null;for(const d of e){const f=d.path.split("/");if(f.length!==l.length)continue;let E=!0;for(let T=0;T<f.length;T++){const v=f[T],O=l[T];if(Dd.test(v))u[decodeURIComponent(v.slice(1))]=decodeURIComponent(O);else if(O!==v){E=!1;break}}if(E){h=d;break}}return h||(h=e.find(d=>d.path==="*")||null),{route:h,params:u}})(window.location.pathname);o&&(s.replaceChildren(o.component()),Nd.val=(c=>{if(c.startsWith("?")&&(c=c.slice(1).trim()),!c)return{};const l={},u=c.split("&");for(const h of u){const[d,f]=h.split("=");l[decodeURIComponent(d)]=decodeURIComponent(f)}return l})(window.location.search),kd.val=a)};return D.derive(()=>{window.onpopstate=i,i()}),D.derive(()=>{Gi.val&&(r.val?i():r.val=!0)}),s}function al(n,...e){var{replace:t}=n;const r=fi(n,["replace"]),{onclick:s,href:i}=r,o=fi(r,["onclick","href"]),a=D.tags.a(Object.assign(Object.assign({},o),{href:i,onclick:c=>{var l;c.preventDefault(),t?window.history.replaceState({},"",i):window.history.pushState({},"",i),i&&(Gi.val=i),(l=s==null?void 0:s.bind(a))===null||l===void 0||l(c)}}),...e);return a}const Ki=(n,e)=>{const{replace:t}=e||{};t?window.history.replaceState({},"",n):window.history.pushState({},"",n),Gi.val=n},Od=(...n)=>n.filter(Boolean).join(" "),Md=n=>n instanceof HTMLElement||["string","number","boolean"].includes(typeof n),{p:_a}=D.tags,We=(n,...e)=>{if(Md(n))return _a(n,...e);const{size:t="md",align:r="center",weight:s="normal",italic:i=!1,className:o,...a}=n,c=Od(t==="sm"&&"text-[13px]",t==="md"&&"text-[16px]",t==="lg"&&"text-[20px]",t==="xl"&&"text-[25px]",r==="left"&&"text-left",r==="center"&&"text-center",r==="right"&&"text-right",s==="light"&&"font-light",s==="normal"&&"font-normal",s==="bold"&&"font-bold",i&&"italic",o);return _a({className:c,...a},...e)};var ya={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ld=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],a=n[t++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ll={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,a=o?n[s+1]:0,c=s+2<n.length,l=c?n[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),r.push(t[u],t[h],t[d],t[f])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(cl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ld(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const l=s<n.length?t[n.charAt(s)]:64;++s;const h=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new xd;const d=i<<2|a>>4;if(r.push(d),l!==64){const f=a<<4&240|l>>2;if(r.push(f),h!==64){const E=l<<6&192|h;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class xd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Fd=function(n){const e=cl(n);return ll.encodeByteArray(e,!0)},qr=function(n){return Fd(n).replace(/\./g,"")},ul=function(n){try{return ll.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ud(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Bd=()=>Ud().__FIREBASE_DEFAULTS__,qd=()=>{if(typeof process>"u"||typeof ya>"u")return;const n=ya.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},$d=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ul(n[1]);return e&&JSON.parse(e)},Qi=()=>{try{return Bd()||qd()||$d()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},hl=n=>{var e,t;return(t=(e=Qi())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},jd=n=>{const e=hl(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},dl=()=>{var n;return(n=Qi())===null||n===void 0?void 0:n.config},fl=n=>{var e;return(e=Qi())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Hd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[qr(JSON.stringify(t)),qr(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Wd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(oe())}function Gd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Kd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Qd(){const n=oe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Yd(){try{return typeof indexedDB=="object"}catch{return!1}}function Jd(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd="FirebaseError";class Ue extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Xd,Object.setPrototypeOf(this,Ue.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wn.prototype.create)}}class Wn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Zd(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ue(s,a,r)}}function Zd(n,e){return n.replace(ef,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ef=/\{\$([^}]+)}/g;function tf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function $r(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(va(i)&&va(o)){if(!$r(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function va(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function fn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function pn(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function nf(n,e){const t=new rf(n,e);return t.subscribe.bind(t)}class rf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");sf(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Ws),s.error===void 0&&(s.error=Ws),s.complete===void 0&&(s.complete=Ws);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sf(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ws(){}/**
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
 */function ee(n){return n&&n._delegate?n._delegate:n}class gt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const at="[DEFAULT]";/**
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
 */class of{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new zd;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cf(e))try{this.getOrInitializeService({instanceIdentifier:at})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=at){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=at){return this.instances.has(e)}getOptions(e=at){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:af(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=at){return this.component?this.component.multipleInstances?e:at:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function af(n){return n===at?void 0:n}function cf(n){return n.instantiationMode==="EAGER"}/**
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
 */class lf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new of(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var b;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(b||(b={}));const uf={debug:b.DEBUG,verbose:b.VERBOSE,info:b.INFO,warn:b.WARN,error:b.ERROR,silent:b.SILENT},hf=b.INFO,df={[b.DEBUG]:"log",[b.VERBOSE]:"log",[b.INFO]:"info",[b.WARN]:"warn",[b.ERROR]:"error"},ff=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=df[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yi{constructor(e){this.name=e,this._logLevel=hf,this._logHandler=ff,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in b))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?uf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,b.DEBUG,...e),this._logHandler(this,b.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,b.VERBOSE,...e),this._logHandler(this,b.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,b.INFO,...e),this._logHandler(this,b.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,b.WARN,...e),this._logHandler(this,b.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,b.ERROR,...e),this._logHandler(this,b.ERROR,...e)}}const pf=(n,e)=>e.some(t=>n instanceof t);let Ea,Ia;function mf(){return Ea||(Ea=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gf(){return Ia||(Ia=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pl=new WeakMap,pi=new WeakMap,ml=new WeakMap,Gs=new WeakMap,Ji=new WeakMap;function _f(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(Ge(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&pl.set(t,n)}).catch(()=>{}),Ji.set(e,n),e}function yf(n){if(pi.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});pi.set(n,e)}let mi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return pi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ml.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ge(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function vf(n){mi=n(mi)}function Ef(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ks(this),e,...t);return ml.set(r,e.sort?e.sort():[e]),Ge(r)}:gf().includes(n)?function(...e){return n.apply(Ks(this),e),Ge(pl.get(this))}:function(...e){return Ge(n.apply(Ks(this),e))}}function If(n){return typeof n=="function"?Ef(n):(n instanceof IDBTransaction&&yf(n),pf(n,mf())?new Proxy(n,mi):n)}function Ge(n){if(n instanceof IDBRequest)return _f(n);if(Gs.has(n))return Gs.get(n);const e=If(n);return e!==n&&(Gs.set(n,e),Ji.set(e,n)),e}const Ks=n=>Ji.get(n);function Tf(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),a=Ge(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Ge(o.result),c.oldVersion,c.newVersion,Ge(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const wf=["get","getKey","getAll","getAllKeys","count"],Af=["put","add","delete","clear"],Qs=new Map;function Ta(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Qs.get(e))return Qs.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Af.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||wf.includes(t)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),s&&c.done]))[0]};return Qs.set(e,i),i}vf(n=>({...n,get:(e,t,r)=>Ta(e,t)||n.get(e,t,r),has:(e,t)=>!!Ta(e,t)||n.has(e,t)}));/**
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
 */class Rf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Sf(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Sf(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gi="@firebase/app",wa="0.9.25";/**
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
 */const _t=new Yi("@firebase/app"),Pf="@firebase/app-compat",Cf="@firebase/analytics-compat",bf="@firebase/analytics",kf="@firebase/app-check-compat",Nf="@firebase/app-check",Df="@firebase/auth",Vf="@firebase/auth-compat",Of="@firebase/database",Mf="@firebase/database-compat",Lf="@firebase/functions",xf="@firebase/functions-compat",Ff="@firebase/installations",Uf="@firebase/installations-compat",Bf="@firebase/messaging",qf="@firebase/messaging-compat",$f="@firebase/performance",jf="@firebase/performance-compat",zf="@firebase/remote-config",Hf="@firebase/remote-config-compat",Wf="@firebase/storage",Gf="@firebase/storage-compat",Kf="@firebase/firestore",Qf="@firebase/firestore-compat",Yf="firebase",Jf="10.7.1";/**
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
 */const _i="[DEFAULT]",Xf={[gi]:"fire-core",[Pf]:"fire-core-compat",[bf]:"fire-analytics",[Cf]:"fire-analytics-compat",[Nf]:"fire-app-check",[kf]:"fire-app-check-compat",[Df]:"fire-auth",[Vf]:"fire-auth-compat",[Of]:"fire-rtdb",[Mf]:"fire-rtdb-compat",[Lf]:"fire-fn",[xf]:"fire-fn-compat",[Ff]:"fire-iid",[Uf]:"fire-iid-compat",[Bf]:"fire-fcm",[qf]:"fire-fcm-compat",[$f]:"fire-perf",[jf]:"fire-perf-compat",[zf]:"fire-rc",[Hf]:"fire-rc-compat",[Wf]:"fire-gcs",[Gf]:"fire-gcs-compat",[Kf]:"fire-fst",[Qf]:"fire-fst-compat","fire-js":"fire-js",[Yf]:"fire-js-all"};/**
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
 */const jr=new Map,yi=new Map;function Zf(n,e){try{n.container.addComponent(e)}catch(t){_t.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ut(n){const e=n.name;if(yi.has(e))return _t.debug(`There were multiple attempts to register component ${e}.`),!1;yi.set(e,n);for(const t of jr.values())Zf(t,n);return!0}function Xi(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const ep={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ke=new Wn("app","Firebase",ep);/**
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
 */class tp{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ke.create("app-deleted",{appName:this._name})}}/**
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
 */const Qt=Jf;function gl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:_i,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Ke.create("bad-app-name",{appName:String(s)});if(t||(t=dl()),!t)throw Ke.create("no-options");const i=jr.get(s);if(i){if($r(t,i.options)&&$r(r,i.config))return i;throw Ke.create("duplicate-app",{appName:s})}const o=new lf(s);for(const c of yi.values())o.addComponent(c);const a=new tp(t,r,o);return jr.set(s,a),a}function _l(n=_i){const e=jr.get(n);if(!e&&n===_i&&dl())return gl();if(!e)throw Ke.create("no-app",{appName:n});return e}function Qe(n,e,t){var r;let s=(r=Xf[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_t.warn(a.join(" "));return}Ut(new gt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const np="firebase-heartbeat-database",rp=1,Pn="firebase-heartbeat-store";let Ys=null;function yl(){return Ys||(Ys=Tf(np,rp,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Pn)}}}).catch(n=>{throw Ke.create("idb-open",{originalErrorMessage:n.message})})),Ys}async function sp(n){try{return await(await yl()).transaction(Pn).objectStore(Pn).get(vl(n))}catch(e){if(e instanceof Ue)_t.warn(e.message);else{const t=Ke.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_t.warn(t.message)}}}async function Aa(n,e){try{const r=(await yl()).transaction(Pn,"readwrite");await r.objectStore(Pn).put(e,vl(n)),await r.done}catch(t){if(t instanceof Ue)_t.warn(t.message);else{const r=Ke.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});_t.warn(r.message)}}}function vl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const ip=1024,op=30*24*60*60*1e3;class ap{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new lp(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ra();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=op}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ra(),{heartbeatsToSend:r,unsentEntries:s}=cp(this._heartbeatsCache.heartbeats),i=qr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ra(){return new Date().toISOString().substring(0,10)}function cp(n,e=ip){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Sa(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Sa(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class lp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yd()?Jd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await sp(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Aa(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Aa(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Sa(n){return qr(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function up(n){Ut(new gt("platform-logger",e=>new Rf(e),"PRIVATE")),Ut(new gt("heartbeat",e=>new ap(e),"PRIVATE")),Qe(gi,wa,n),Qe(gi,wa,"esm2017"),Qe("fire-js","")}up("");var hp="firebase",dp="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qe(hp,dp,"app");function Zi(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function El(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fp=El,Il=new Wn("auth","Firebase",El());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=new Yi("@firebase/auth");function pp(n,...e){zr.logLevel<=b.WARN&&zr.warn(`Auth (${Qt}): ${n}`,...e)}function Nr(n,...e){zr.logLevel<=b.ERROR&&zr.error(`Auth (${Qt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(n,...e){throw eo(n,...e)}function we(n,...e){return eo(n,...e)}function mp(n,e,t){const r=Object.assign(Object.assign({},fp()),{[e]:t});return new Wn("auth","Firebase",r).create(e,{appName:n.name})}function eo(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Il.create(n,...e)}function w(n,e,...t){if(!n)throw eo(e,...t)}function Ne(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Nr(e),new Error(e)}function Me(n,e){n||Ne(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function gp(){return Pa()==="http:"||Pa()==="https:"}function Pa(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gp()||Gd()||"connection"in navigator)?navigator.onLine:!0}function yp(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,t){this.shortDelay=e,this.longDelay=t,Me(t>e,"Short delay should be less than long delay!"),this.isMobile=Wd()||Kd()}get(){return _p()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(n,e){Me(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ne("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ne("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ne("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep=new Kn(3e4,6e4);function et(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function tt(n,e,t,r,s={}){return wl(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Gn(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),Tl.fetch()(Al(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function wl(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},vp),e);try{const s=new Tp(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw gr(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw gr(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw gr(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw gr(n,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw mp(n,u,l);ge(n,u)}}catch(s){if(s instanceof Ue)throw s;ge(n,"network-request-failed",{message:String(s)})}}async function Qn(n,e,t,r,s={}){const i=await tt(n,e,t,r,s);return"mfaPendingCredential"in i&&ge(n,"multi-factor-auth-required",{_serverResponse:i}),i}function Al(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?to(n.config,s):`${n.config.apiScheme}://${s}`}function Ip(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Tp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(we(this.auth,"network-request-failed")),Ep.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function gr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=we(n,e,r);return s.customData._tokenResponse=t,s}function Ca(n){return n!==void 0&&n.enterprise!==void 0}class wp{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Ip(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Ap(n,e){return tt(n,"GET","/v2/recaptchaConfig",et(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rp(n,e){return tt(n,"POST","/v1/accounts:delete",e)}async function Sp(n,e){return tt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Pp(n,e=!1){const t=ee(n),r=await t.getIdToken(e),s=no(r);w(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:En(Js(s.auth_time)),issuedAtTime:En(Js(s.iat)),expirationTime:En(Js(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Js(n){return Number(n)*1e3}function no(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Nr("JWT malformed, contained fewer than 3 sections"),null;try{const s=ul(t);return s?JSON.parse(s):(Nr("Failed to decode base64 JWT payload"),null)}catch(s){return Nr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Cp(n){const e=no(n);return w(e,"internal-error"),w(typeof e.exp<"u","internal-error"),w(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ue&&bp(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function bp({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=En(this.lastLoginAt),this.creationTime=En(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Hr(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Cn(n,Sp(t,{idToken:r}));w(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Vp(i.providerUserInfo):[],a=Dp(n.providerData,o),c=n.isAnonymous,l=!(n.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Rl(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function Np(n){const e=ee(n);await Hr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Dp(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Vp(n){return n.map(e=>{var{providerId:t}=e,r=Zi(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Op(n,e){const t=await wl(n,{},async()=>{const r=Gn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=Al(n,s,"/v1/token",`key=${i}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Tl.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Mp(n,e){return tt(n,"POST","/v2/accounts:revokeToken",et(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){w(e.idToken,"internal-error"),w(typeof e.idToken<"u","internal-error"),w(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Cp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return w(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Op(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new bn;return r&&(w(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(w(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(w(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bn,this.toJSON())}_performRefresh(){return Ne("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(n,e){w(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ft{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=Zi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new kp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Rl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Cn(this,this.stsTokenManager.getToken(this.auth,e));return w(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Pp(this,e)}reload(){return Np(this)}_assign(e){this!==e&&(w(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ft(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){w(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Hr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Cn(this,Rp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,o,a,c,l,u;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,d=(s=t.email)!==null&&s!==void 0?s:void 0,f=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,E=(o=t.photoURL)!==null&&o!==void 0?o:void 0,T=(a=t.tenantId)!==null&&a!==void 0?a:void 0,v=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,O=(l=t.createdAt)!==null&&l!==void 0?l:void 0,B=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:K,emailVerified:fe,isAnonymous:it,providerData:ve,stsTokenManager:ot}=t;w(K&&ot,e,"internal-error");const pa=bn.fromJSON(this.name,ot);w(typeof K=="string",e,"internal-error"),Be(h,e.name),Be(d,e.name),w(typeof fe=="boolean",e,"internal-error"),w(typeof it=="boolean",e,"internal-error"),Be(f,e.name),Be(E,e.name),Be(T,e.name),Be(v,e.name),Be(O,e.name),Be(B,e.name);const on=new ft({uid:K,auth:e,email:d,emailVerified:fe,displayName:h,isAnonymous:it,photoURL:E,phoneNumber:f,tenantId:T,stsTokenManager:pa,createdAt:O,lastLoginAt:B});return ve&&Array.isArray(ve)&&(on.providerData=ve.map(pr=>Object.assign({},pr))),v&&(on._redirectEventId=v),on}static async _fromIdTokenResponse(e,t,r=!1){const s=new bn;s.updateFromServerResponse(t);const i=new ft({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Hr(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba=new Map;function De(n){Me(n instanceof Function,"Expected a class definition");let e=ba.get(n);return e?(Me(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ba.set(n,e),e)}/**
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
 */class Sl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Sl.type="NONE";const ka=Sl;/**
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
 */function Dr(n,e,t){return`firebase:${n}:${e}:${t}`}class Vt{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Dr(this.userKey,s.apiKey,i),this.fullPersistenceKey=Dr("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ft._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Vt(De(ka),e,r);const s=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||De(ka);const o=Dr(r,e.config.apiKey,e.name);let a=null;for(const l of t)try{const u=await l._get(o);if(u){const h=ft._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Vt(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Vt(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Pl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Nl(e))return"Blackberry";if(Dl(e))return"Webos";if(ro(e))return"Safari";if((e.includes("chrome/")||Cl(e))&&!e.includes("edge/"))return"Chrome";if(kl(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Pl(n=oe()){return/firefox\//i.test(n)}function ro(n=oe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Cl(n=oe()){return/crios\//i.test(n)}function bl(n=oe()){return/iemobile/i.test(n)}function kl(n=oe()){return/android/i.test(n)}function Nl(n=oe()){return/blackberry/i.test(n)}function Dl(n=oe()){return/webos/i.test(n)}function ds(n=oe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Lp(n=oe()){var e;return ds(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function xp(){return Qd()&&document.documentMode===10}function Vl(n=oe()){return ds(n)||kl(n)||Dl(n)||Nl(n)||/windows phone/i.test(n)||bl(n)}function Fp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(n,e=[]){let t;switch(n){case"Browser":t=Na(oe());break;case"Worker":t=`${Na(oe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Qt}/${r}`}/**
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
 */class Up{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Bp(n,e={}){return tt(n,"GET","/v2/passwordPolicy",et(n,e))}/**
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
 */const qp=6;class $p{constructor(e){var t,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:qp,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Da(this),this.idTokenSubscription=new Da(this),this.beforeStateQueue=new Up(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Il,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=De(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Vt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return w(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Hr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?ee(e):null;return t&&w(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&w(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(De(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Bp(this),t=new $p(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Wn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Mp(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&De(e)||this._popupRedirectResolver;w(t,this,"argument-error"),this.redirectPersistenceManager=await Vt.create(this,[De(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(w(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return w(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ol(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&pp(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function wt(n){return ee(n)}class Da{constructor(e){this.auth=e,this.observer=null,this.addObserver=nf(t=>this.observer=t)}get next(){return w(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zp(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Ml(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=we("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",zp().appendChild(r)})}function Hp(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Wp="https://www.google.com/recaptcha/enterprise.js?render=",Gp="recaptcha-enterprise",Kp="NO_RECAPTCHA";class Qp{constructor(e){this.type=Gp,this.auth=wt(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Ap(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new wp(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Ca(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(Kp)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!t&&Ca(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Ml(Wp+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Va(n,e,t,r=!1){const s=new Qp(n);let i;try{i=await s.verify(t)}catch{i=await s.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ei(n,e,t,r){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Va(n,e,t,t==="getOobCode");return r(n,i)}else return r(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Va(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yp(n,e){const t=Xi(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if($r(i,e??{}))return s;ge(s,"already-initialized")}return t.initialize({options:e})}function Jp(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(De);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Xp(n,e,t){const r=wt(n);w(r._canInitEmulator,r,"emulator-config-failed"),w(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),i=Ll(e),{host:o,port:a}=Zp(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||em()}function Ll(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Zp(n){const e=Ll(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Oa(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Oa(o)}}}function Oa(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function em(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ne("not implemented")}_getIdTokenResponse(e){return Ne("not implemented")}_linkToIdToken(e,t){return Ne("not implemented")}_getReauthenticationResolver(e){return Ne("not implemented")}}async function tm(n,e){return tt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nm(n,e){return Qn(n,"POST","/v1/accounts:signInWithPassword",et(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rm(n,e){return Qn(n,"POST","/v1/accounts:signInWithEmailLink",et(n,e))}async function sm(n,e){return Qn(n,"POST","/v1/accounts:signInWithEmailLink",et(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends so{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new kn(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new kn(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ei(e,t,"signInWithPassword",nm);case"emailLink":return rm(e,{email:this._email,oobCode:this._password});default:ge(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ei(e,r,"signUpPassword",tm);case"emailLink":return sm(e,{idToken:t,email:this._email,oobCode:this._password});default:ge(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ot(n,e){return Qn(n,"POST","/v1/accounts:signInWithIdp",et(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const im="http://localhost";class yt extends so{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new yt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ge("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=Zi(t,["providerId","signInMethod"]);if(!r||!s)return null;const o=new yt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ot(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ot(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ot(e,t)}buildRequest(){const e={requestUri:im,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Gn(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function om(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function am(n){const e=fn(pn(n)).link,t=e?fn(pn(e)).deep_link_id:null,r=fn(pn(n)).deep_link_id;return(r?fn(pn(r)).link:null)||r||t||e||n}class io{constructor(e){var t,r,s,i,o,a;const c=fn(pn(e)),l=(t=c.apiKey)!==null&&t!==void 0?t:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=om((s=c.mode)!==null&&s!==void 0?s:null);w(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=am(e);try{return new io(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(){this.providerId=Yt.PROVIDER_ID}static credential(e,t){return kn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=io.parseLink(t);return w(r,"argument-error"),kn._fromEmailAndCode(e,r.code,r.tenantId)}}Yt.PROVIDER_ID="password";Yt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Yt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Yn extends xl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe extends Yn{constructor(){super("facebook.com")}static credential(e){return yt._fromParams({providerId:qe.PROVIDER_ID,signInMethod:qe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qe.credentialFromTaggedObject(e)}static credentialFromError(e){return qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qe.credential(e.oauthAccessToken)}catch{return null}}}qe.FACEBOOK_SIGN_IN_METHOD="facebook.com";qe.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e extends Yn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return yt._fromParams({providerId:$e.PROVIDER_ID,signInMethod:$e.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return $e.credentialFromTaggedObject(e)}static credentialFromError(e){return $e.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return $e.credential(t,r)}catch{return null}}}$e.GOOGLE_SIGN_IN_METHOD="google.com";$e.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je extends Yn{constructor(){super("github.com")}static credential(e){return yt._fromParams({providerId:je.PROVIDER_ID,signInMethod:je.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return je.credentialFromTaggedObject(e)}static credentialFromError(e){return je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return je.credential(e.oauthAccessToken)}catch{return null}}}je.GITHUB_SIGN_IN_METHOD="github.com";je.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze extends Yn{constructor(){super("twitter.com")}static credential(e,t){return yt._fromParams({providerId:ze.PROVIDER_ID,signInMethod:ze.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ze.credentialFromTaggedObject(e)}static credentialFromError(e){return ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return ze.credential(t,r)}catch{return null}}}ze.TWITTER_SIGN_IN_METHOD="twitter.com";ze.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cm(n,e){return Qn(n,"POST","/v1/accounts:signUp",et(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await ft._fromIdTokenResponse(e,r,s),o=Ma(r);return new vt({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Ma(r);return new vt({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Ma(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr extends Ue{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Wr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Wr(e,t,r,s)}}function Fl(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Wr._fromErrorAndOperation(n,i,e,r):i})}async function lm(n,e,t=!1){const r=await Cn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return vt._forOperation(n,"link",r)}/**
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
 */async function um(n,e,t=!1){const{auth:r}=n,s="reauthenticate";try{const i=await Cn(n,Fl(r,s,e,n),t);w(i.idToken,r,"internal-error");const o=no(i.idToken);w(o,r,"internal-error");const{sub:a}=o;return w(n.uid===a,r,"user-mismatch"),vt._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ge(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ul(n,e,t=!1){const r="signIn",s=await Fl(n,r,e),i=await vt._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function hm(n,e){return Ul(wt(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bl(n){const e=wt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function dm(n,e,t){const r=wt(n),o=await Ei(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",cm).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Bl(n),c}),a=await vt._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function fm(n,e,t){return hm(ee(n),Yt.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Bl(n),r})}function pm(n,e,t,r){return ee(n).onIdTokenChanged(e,t,r)}function mm(n,e,t){return ee(n).beforeAuthStateChanged(e,t)}function gm(n){return ee(n).signOut()}const Gr="__sak";/**
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
 */class ql{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Gr,"1"),this.storage.removeItem(Gr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _m(){const n=oe();return ro(n)||ds(n)}const ym=1e3,vm=10;class $l extends ql{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=_m()&&Fp(),this.fallbackToPolling=Vl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);xp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,vm):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},ym)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}$l.type="LOCAL";const Em=$l;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl extends ql{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}jl.type="SESSION";const zl=jl;/**
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
 */function Im(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class fs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new fs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(t.origin,i)),c=await Im(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Tm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=oo("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(){return window}function wm(n){Ae().location.href=n}/**
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
 */function Hl(){return typeof Ae().WorkerGlobalScope<"u"&&typeof Ae().importScripts=="function"}async function Am(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Rm(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Sm(){return Hl()?self:null}/**
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
 */const Wl="firebaseLocalStorageDb",Pm=1,Kr="firebaseLocalStorage",Gl="fbase_key";class Jn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ps(n,e){return n.transaction([Kr],e?"readwrite":"readonly").objectStore(Kr)}function Cm(){const n=indexedDB.deleteDatabase(Wl);return new Jn(n).toPromise()}function Ii(){const n=indexedDB.open(Wl,Pm);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Kr,{keyPath:Gl})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Kr)?e(r):(r.close(),await Cm(),e(await Ii()))})})}async function La(n,e,t){const r=ps(n,!0).put({[Gl]:e,value:t});return new Jn(r).toPromise()}async function bm(n,e){const t=ps(n,!1).get(e),r=await new Jn(t).toPromise();return r===void 0?null:r.value}function xa(n,e){const t=ps(n,!0).delete(e);return new Jn(t).toPromise()}const km=800,Nm=3;class Kl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ii(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Nm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fs._getInstance(Sm()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Am(),!this.activeServiceWorker)return;this.sender=new Tm(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Rm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ii();return await La(e,Gr,"1"),await xa(e,Gr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>La(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>bm(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>xa(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ps(s,!1).getAll();return new Jn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),km)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Kl.type="LOCAL";const Dm=Kl;new Kn(3e4,6e4);/**
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
 */function Vm(n,e){return e?De(e):(w(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class ao extends so{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ot(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ot(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ot(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Om(n){return Ul(n.auth,new ao(n),n.bypassAuthState)}function Mm(n){const{auth:e,user:t}=n;return w(t,e,"internal-error"),um(t,new ao(n),n.bypassAuthState)}async function Lm(n){const{auth:e,user:t}=n;return w(t,e,"internal-error"),lm(t,new ao(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Om;case"linkViaPopup":case"linkViaRedirect":return Lm;case"reauthViaPopup":case"reauthViaRedirect":return Mm;default:ge(this.auth,"internal-error")}}resolve(e){Me(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Me(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm=new Kn(2e3,1e4);class Nt extends Ql{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Nt.currentPopupAction&&Nt.currentPopupAction.cancel(),Nt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return w(e,this.auth,"internal-error"),e}async onExecution(){Me(this.filter.length===1,"Popup operations only handle one event");const e=oo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(we(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(we(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Nt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(we(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,xm.get())};e()}}Nt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm="pendingRedirect",Vr=new Map;class Um extends Ql{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Vr.get(this.auth._key());if(!e){try{const r=await Bm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Vr.set(this.auth._key(),e)}return this.bypassAuthState||Vr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Bm(n,e){const t=jm(e),r=$m(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function qm(n,e){Vr.set(n._key(),e)}function $m(n){return De(n._redirectPersistence)}function jm(n){return Dr(Fm,n.config.apiKey,n.name)}async function zm(n,e,t=!1){const r=wt(n),s=Vm(r,e),o=await new Um(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm=10*60*1e3;class Wm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Gm(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Yl(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(we(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Hm&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fa(e))}saveEventToCache(e){this.cachedEventUids.add(Fa(e)),this.lastProcessedEventTime=Date.now()}}function Fa(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Yl({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Gm(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yl(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Km(n,e={}){return tt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ym=/^https?/;async function Jm(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Km(n);for(const t of e)try{if(Xm(t))return}catch{}ge(n,"unauthorized-domain")}function Xm(n){const e=vi(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!Ym.test(t))return!1;if(Qm.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Zm=new Kn(3e4,6e4);function Ua(){const n=Ae().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function eg(n){return new Promise((e,t)=>{var r,s,i;function o(){Ua(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ua(),t(we(n,"network-request-failed"))},timeout:Zm.get()})}if(!((s=(r=Ae().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ae().gapi)===null||i===void 0)&&i.load)o();else{const a=Hp("iframefcb");return Ae()[a]=()=>{gapi.load?o():t(we(n,"network-request-failed"))},Ml(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw Or=null,e})}let Or=null;function tg(n){return Or=Or||eg(n),Or}/**
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
 */const ng=new Kn(5e3,15e3),rg="__/auth/iframe",sg="emulator/auth/iframe",ig={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},og=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ag(n){const e=n.config;w(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?to(e,sg):`https://${n.config.authDomain}/${rg}`,r={apiKey:e.apiKey,appName:n.name,v:Qt},s=og.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Gn(r).slice(1)}`}async function cg(n){const e=await tg(n),t=Ae().gapi;return w(t,n,"internal-error"),e.open({where:document.body,url:ag(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ig,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=we(n,"network-request-failed"),a=Ae().setTimeout(()=>{i(o)},ng.get());function c(){Ae().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const lg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ug=500,hg=600,dg="_blank",fg="http://localhost";class Ba{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pg(n,e,t,r=ug,s=hg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},lg),{width:r.toString(),height:s.toString(),top:i,left:o}),l=oe().toLowerCase();t&&(a=Cl(l)?dg:t),Pl(l)&&(e=e||fg,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[f,E])=>`${d}${f}=${E},`,"");if(Lp(l)&&a!=="_self")return mg(e||"",a),new Ba(null);const h=window.open(e||"",a,u);w(h,n,"popup-blocked");try{h.focus()}catch{}return new Ba(h)}function mg(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const gg="__/auth/handler",_g="emulator/auth/handler",yg=encodeURIComponent("fac");async function qa(n,e,t,r,s,i){w(n.config.authDomain,n,"auth-domain-config-required"),w(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Qt,eventId:s};if(e instanceof xl){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",tf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Yn){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await n._getAppCheckToken(),l=c?`#${yg}=${encodeURIComponent(c)}`:"";return`${vg(n)}?${Gn(a).slice(1)}${l}`}function vg({config:n}){return n.emulator?to(n,_g):`https://${n.authDomain}/${gg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs="webStorageSupport";class Eg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zl,this._completeRedirectFn=zm,this._overrideRedirectResult=qm}async _openPopup(e,t,r,s){var i;Me((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await qa(e,t,r,vi(),s);return pg(e,o,oo())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await qa(e,t,r,vi(),s);return wm(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Me(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await cg(e),r=new Wm(e);return t.register("authEvent",s=>(w(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Xs,{type:Xs},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Xs];o!==void 0&&t(!!o),ge(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Jm(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Vl()||ro()||ds()}}const Ig=Eg;var $a="@firebase/auth",ja="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){w(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ag(n){Ut(new gt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;w(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ol(n)},l=new jp(r,s,i,c);return Jp(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Ut(new gt("auth-internal",e=>{const t=wt(e.getProvider("auth").getImmediate());return(r=>new Tg(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qe($a,ja,wg(n)),Qe($a,ja,"esm2017")}/**
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
 */const Rg=5*60,Sg=fl("authIdTokenMaxAge")||Rg;let za=null;const Pg=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Sg)return;const s=t==null?void 0:t.token;za!==s&&(za=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Cg(n=_l()){const e=Xi(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Yp(n,{popupRedirectResolver:Ig,persistence:[Dm,Em,zl]}),r=fl("authTokenSyncURL");if(r){const i=Pg(r);mm(t,i,()=>i(t.currentUser)),pm(t,o=>i(o))}const s=hl("auth");return s&&Xp(t,`http://${s}`),t}Ag("Browser");var bg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},g,co=co||{},R=bg||self;function ms(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function Xn(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function kg(n){return Object.prototype.hasOwnProperty.call(n,Zs)&&n[Zs]||(n[Zs]=++Ng)}var Zs="closure_uid_"+(1e9*Math.random()>>>0),Ng=0;function Dg(n,e,t){return n.call.apply(n.bind,arguments)}function Vg(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),n.apply(e,s)}}return function(){return n.apply(e,arguments)}}function se(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?se=Dg:se=Vg,se.apply(null,arguments)}function _r(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function G(n,e){function t(){}t.prototype=e.prototype,n.$=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function nt(){this.s=this.s,this.o=this.o}var Og=0;nt.prototype.s=!1;nt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Og!=0)&&kg(this)};nt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Jl=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function lo(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function Ha(n,e){for(let t=1;t<arguments.length;t++){const r=arguments[t];if(ms(r)){const s=n.length||0,i=r.length||0;n.length=s+i;for(let o=0;o<i;o++)n[s+o]=r[o]}else n.push(r)}}function ie(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}ie.prototype.h=function(){this.defaultPrevented=!0};var Mg=function(){if(!R.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{const t=()=>{};R.addEventListener("test",t,e),R.removeEventListener("test",t,e)}catch{}return n}();function Nn(n){return/^[\s\xa0]*$/.test(n)}function gs(){var n=R.navigator;return n&&(n=n.userAgent)?n:""}function Ee(n){return gs().indexOf(n)!=-1}function uo(n){return uo[" "](n),n}uo[" "]=function(){};function Lg(n,e){var t=C_;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:t[n]=e(n)}var xg=Ee("Opera"),Bt=Ee("Trident")||Ee("MSIE"),Xl=Ee("Edge"),Ti=Xl||Bt,Zl=Ee("Gecko")&&!(gs().toLowerCase().indexOf("webkit")!=-1&&!Ee("Edge"))&&!(Ee("Trident")||Ee("MSIE"))&&!Ee("Edge"),Fg=gs().toLowerCase().indexOf("webkit")!=-1&&!Ee("Edge");function eu(){var n=R.document;return n?n.documentMode:void 0}var wi;e:{var ei="",ti=function(){var n=gs();if(Zl)return/rv:([^\);]+)(\)|;)/.exec(n);if(Xl)return/Edge\/([\d\.]+)/.exec(n);if(Bt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(Fg)return/WebKit\/(\S+)/.exec(n);if(xg)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(ti&&(ei=ti?ti[1]:""),Bt){var ni=eu();if(ni!=null&&ni>parseFloat(ei)){wi=String(ni);break e}}wi=ei}var Ai;if(R.document&&Bt){var Wa=eu();Ai=Wa||parseInt(wi,10)||void 0}else Ai=void 0;var Ug=Ai;function Dn(n,e){if(ie.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(Zl){e:{try{uo(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:Bg[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Dn.$.h.call(this)}}G(Dn,ie);var Bg={2:"touch",3:"pen",4:"mouse"};Dn.prototype.h=function(){Dn.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Zn="closure_listenable_"+(1e6*Math.random()|0),qg=0;function $g(n,e,t,r,s){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.la=s,this.key=++qg,this.fa=this.ia=!1}function _s(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function ho(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function jg(n,e){for(const t in n)e.call(void 0,n[t],t,n)}function tu(n){const e={};for(const t in n)e[t]=n[t];return e}const Ga="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function nu(n,e){let t,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(t in r)n[t]=r[t];for(let i=0;i<Ga.length;i++)t=Ga[i],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function ys(n){this.src=n,this.g={},this.h=0}ys.prototype.add=function(n,e,t,r,s){var i=n.toString();n=this.g[i],n||(n=this.g[i]=[],this.h++);var o=Si(n,e,r,s);return-1<o?(e=n[o],t||(e.ia=!1)):(e=new $g(e,this.src,i,!!r,s),e.ia=t,n.push(e)),e};function Ri(n,e){var t=e.type;if(t in n.g){var r=n.g[t],s=Jl(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(_s(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function Si(n,e,t,r){for(var s=0;s<n.length;++s){var i=n[s];if(!i.fa&&i.listener==e&&i.capture==!!t&&i.la==r)return s}return-1}var fo="closure_lm_"+(1e6*Math.random()|0),ri={};function ru(n,e,t,r,s){if(r&&r.once)return iu(n,e,t,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)ru(n,e[i],t,r,s);return null}return t=go(t),n&&n[Zn]?n.O(e,t,Xn(r)?!!r.capture:!!r,s):su(n,e,t,!1,r,s)}function su(n,e,t,r,s,i){if(!e)throw Error("Invalid event type");var o=Xn(s)?!!s.capture:!!s,a=mo(n);if(a||(n[fo]=a=new ys(n)),t=a.add(e,t,r,o,i),t.proxy)return t;if(r=zg(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)Mg||(s=o),s===void 0&&(s=!1),n.addEventListener(e.toString(),r,s);else if(n.attachEvent)n.attachEvent(au(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function zg(){function n(t){return e.call(n.src,n.listener,t)}const e=Hg;return n}function iu(n,e,t,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)iu(n,e[i],t,r,s);return null}return t=go(t),n&&n[Zn]?n.P(e,t,Xn(r)?!!r.capture:!!r,s):su(n,e,t,!0,r,s)}function ou(n,e,t,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)ou(n,e[i],t,r,s);else r=Xn(r)?!!r.capture:!!r,t=go(t),n&&n[Zn]?(n=n.i,e=String(e).toString(),e in n.g&&(i=n.g[e],t=Si(i,t,r,s),-1<t&&(_s(i[t]),Array.prototype.splice.call(i,t,1),i.length==0&&(delete n.g[e],n.h--)))):n&&(n=mo(n))&&(e=n.g[e.toString()],n=-1,e&&(n=Si(e,t,r,s)),(t=-1<n?e[n]:null)&&po(t))}function po(n){if(typeof n!="number"&&n&&!n.fa){var e=n.src;if(e&&e[Zn])Ri(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(au(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=mo(e))?(Ri(t,n),t.h==0&&(t.src=null,e[fo]=null)):_s(n)}}}function au(n){return n in ri?ri[n]:ri[n]="on"+n}function Hg(n,e){if(n.fa)n=!0;else{e=new Dn(e,this);var t=n.listener,r=n.la||n.src;n.ia&&po(n),n=t.call(r,e)}return n}function mo(n){return n=n[fo],n instanceof ys?n:null}var si="__closure_events_fn_"+(1e9*Math.random()>>>0);function go(n){return typeof n=="function"?n:(n[si]||(n[si]=function(e){return n.handleEvent(e)}),n[si])}function W(){nt.call(this),this.i=new ys(this),this.S=this,this.J=null}G(W,nt);W.prototype[Zn]=!0;W.prototype.removeEventListener=function(n,e,t,r){ou(this,n,e,t,r)};function X(n,e){var t,r=n.J;if(r)for(t=[];r;r=r.J)t.push(r);if(n=n.S,r=e.type||e,typeof e=="string")e=new ie(e,n);else if(e instanceof ie)e.target=e.target||n;else{var s=e;e=new ie(r,n),nu(e,s)}if(s=!0,t)for(var i=t.length-1;0<=i;i--){var o=e.g=t[i];s=yr(o,r,!0,e)&&s}if(o=e.g=n,s=yr(o,r,!0,e)&&s,s=yr(o,r,!1,e)&&s,t)for(i=0;i<t.length;i++)o=e.g=t[i],s=yr(o,r,!1,e)&&s}W.prototype.N=function(){if(W.$.N.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)_s(t[r]);delete n.g[e],n.h--}}this.J=null};W.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};W.prototype.P=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function yr(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==t){var a=o.listener,c=o.la||o.src;o.ia&&Ri(n.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var _o=R.JSON.stringify;class Wg{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Gg(){var n=yo;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class Kg{constructor(){this.h=this.g=null}add(e,t){const r=cu.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var cu=new Wg(()=>new Qg,n=>n.reset());class Qg{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Yg(n){var e=1;n=n.split(":");const t=[];for(;0<e&&n.length;)t.push(n.shift()),e--;return n.length&&t.push(n.join(":")),t}function Jg(n){R.setTimeout(()=>{throw n},0)}let Vn,On=!1,yo=new Kg,lu=()=>{const n=R.Promise.resolve(void 0);Vn=()=>{n.then(Xg)}};var Xg=()=>{for(var n;n=Gg();){try{n.h.call(n.g)}catch(t){Jg(t)}var e=cu;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}On=!1};function vs(n,e){W.call(this),this.h=n||1,this.g=e||R,this.j=se(this.qb,this),this.l=Date.now()}G(vs,W);g=vs.prototype;g.ga=!1;g.T=null;g.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),X(this,"tick"),this.ga&&(vo(this),this.start()))}};g.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function vo(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}g.N=function(){vs.$.N.call(this),vo(this),delete this.g};function Eo(n,e,t){if(typeof n=="function")t&&(n=se(n,t));else if(n&&typeof n.handleEvent=="function")n=se(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:R.setTimeout(n,e||0)}function uu(n){n.g=Eo(()=>{n.g=null,n.i&&(n.i=!1,uu(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class Zg extends nt{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:uu(this)}N(){super.N(),this.g&&(R.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Mn(n){nt.call(this),this.h=n,this.g={}}G(Mn,nt);var Ka=[];function hu(n,e,t,r){Array.isArray(t)||(t&&(Ka[0]=t.toString()),t=Ka);for(var s=0;s<t.length;s++){var i=ru(e,t[s],r||n.handleEvent,!1,n.h||n);if(!i)break;n.g[i.key]=i}}function du(n){ho(n.g,function(e,t){this.g.hasOwnProperty(t)&&po(e)},n),n.g={}}Mn.prototype.N=function(){Mn.$.N.call(this),du(this)};Mn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Es(){this.g=!0}Es.prototype.Ea=function(){this.g=!1};function e_(n,e,t,r,s,i){n.info(function(){if(n.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+t+`
`+o})}function t_(n,e,t,r,s,i,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+t+`
`+i+" "+o})}function Dt(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+r_(n,t)+(r?" "+r:"")})}function n_(n,e){n.info(function(){return"TIMEOUT: "+e})}Es.prototype.info=function(){};function r_(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return _o(t)}catch{return e}}var At={},Qa=null;function Is(){return Qa=Qa||new W}At.Ta="serverreachability";function fu(n){ie.call(this,At.Ta,n)}G(fu,ie);function Ln(n){const e=Is();X(e,new fu(e))}At.STAT_EVENT="statevent";function pu(n,e){ie.call(this,At.STAT_EVENT,n),this.stat=e}G(pu,ie);function ce(n){const e=Is();X(e,new pu(e,n))}At.Ua="timingevent";function mu(n,e){ie.call(this,At.Ua,n),this.size=e}G(mu,ie);function er(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return R.setTimeout(function(){n()},e)}var Ts={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},gu={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Io(){}Io.prototype.h=null;function Ya(n){return n.h||(n.h=n.i())}function _u(){}var tr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function To(){ie.call(this,"d")}G(To,ie);function wo(){ie.call(this,"c")}G(wo,ie);var Pi;function ws(){}G(ws,Io);ws.prototype.g=function(){return new XMLHttpRequest};ws.prototype.i=function(){return{}};Pi=new ws;function nr(n,e,t,r){this.l=n,this.j=e,this.m=t,this.W=r||1,this.U=new Mn(this),this.P=s_,n=Ti?125:void 0,this.V=new vs(n),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new yu}function yu(){this.i=null,this.g="",this.h=!1}var s_=45e3,vu={},Ci={};g=nr.prototype;g.setTimeout=function(n){this.P=n};function bi(n,e,t){n.L=1,n.A=Rs(Le(e)),n.u=t,n.S=!0,Eu(n,null)}function Eu(n,e){n.G=Date.now(),rr(n),n.B=Le(n.A);var t=n.B,r=n.W;Array.isArray(r)||(r=[String(r)]),Cu(t.i,"t",r),n.o=0,t=n.l.J,n.h=new yu,n.g=Qu(n.l,t?e:null,!n.u),0<n.O&&(n.M=new Zg(se(n.Pa,n,n.g),n.O)),hu(n.U,n.g,"readystatechange",n.nb),e=n.I?tu(n.I):{},n.u?(n.v||(n.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.B,n.v,n.u,e)):(n.v="GET",n.g.ha(n.B,n.v,null,e)),Ln(),e_(n.j,n.v,n.B,n.m,n.W,n.u)}g.nb=function(n){n=n.target;const e=this.M;e&&Ie(n)==3?e.l():this.Pa(n)};g.Pa=function(n){try{if(n==this.g)e:{const u=Ie(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Ti||this.g&&(this.h.h||this.g.ja()||ec(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Ln(3):Ln(2)),As(this);var t=this.g.da();this.ca=t;t:if(Iu(this)){var r=ec(this.g);n="";var s=r.length,i=Ie(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ut(this),In(this);var o="";break t}this.h.i=new R.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.length=0,this.h.g+=n,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=t==200,t_(this.j,this.v,this.B,this.m,this.W,u,t),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Nn(a)){var l=a;break t}}l=null}if(t=l)Dt(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ki(this,t);else{this.i=!1,this.s=3,ce(12),ut(this),In(this);break e}}this.S?(Tu(this,u,o),Ti&&this.i&&u==3&&(hu(this.U,this.V,"tick",this.mb),this.V.start())):(Dt(this.j,this.m,o,null),ki(this,o)),u==4&&ut(this),this.i&&!this.J&&(u==4?Hu(this.l,this):(this.i=!1,rr(this)))}else R_(this.g),t==400&&0<o.indexOf("Unknown SID")?(this.s=3,ce(12)):(this.s=0,ce(13)),ut(this),In(this)}}}catch{}finally{}};function Iu(n){return n.g?n.v=="GET"&&n.L!=2&&n.l.Ha:!1}function Tu(n,e,t){let r=!0,s;for(;!n.J&&n.o<t.length;)if(s=i_(n,t),s==Ci){e==4&&(n.s=4,ce(14),r=!1),Dt(n.j,n.m,null,"[Incomplete Response]");break}else if(s==vu){n.s=4,ce(15),Dt(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else Dt(n.j,n.m,s,null),ki(n,s);Iu(n)&&n.o!=0&&(n.h.g=n.h.g.slice(n.o),n.o=0),e!=4||t.length!=0||n.h.h||(n.s=1,ce(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.ba&&(n.ba=!0,e=n.l,e.g==n&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+t.length),bo(e),e.M=!0,ce(11))):(Dt(n.j,n.m,t,"[Invalid Chunked Response]"),ut(n),In(n))}g.mb=function(){if(this.g){var n=Ie(this.g),e=this.g.ja();this.o<e.length&&(As(this),Tu(this,n,e),this.i&&n!=4&&rr(this))}};function i_(n,e){var t=n.o,r=e.indexOf(`
`,t);return r==-1?Ci:(t=Number(e.substring(t,r)),isNaN(t)?vu:(r+=1,r+t>e.length?Ci:(e=e.slice(r,r+t),n.o=r+t,e)))}g.cancel=function(){this.J=!0,ut(this)};function rr(n){n.Y=Date.now()+n.P,wu(n,n.P)}function wu(n,e){if(n.C!=null)throw Error("WatchDog timer not null");n.C=er(se(n.lb,n),e)}function As(n){n.C&&(R.clearTimeout(n.C),n.C=null)}g.lb=function(){this.C=null;const n=Date.now();0<=n-this.Y?(n_(this.j,this.B),this.L!=2&&(Ln(),ce(17)),ut(this),this.s=2,In(this)):wu(this,this.Y-n)};function In(n){n.l.H==0||n.J||Hu(n.l,n)}function ut(n){As(n);var e=n.M;e&&typeof e.sa=="function"&&e.sa(),n.M=null,vo(n.V),du(n.U),n.g&&(e=n.g,n.g=null,e.abort(),e.sa())}function ki(n,e){try{var t=n.l;if(t.H!=0&&(t.g==n||Ni(t.i,n))){if(!n.K&&Ni(t.i,n)&&t.H==3){try{var r=t.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<n.G)Jr(t),bs(t);else break e;Co(t),ce(18)}}else t.Fa=s[1],0<t.Fa-t.V&&37500>s[2]&&t.G&&t.A==0&&!t.v&&(t.v=er(se(t.ib,t),6e3));if(1>=Nu(t.i)&&t.oa){try{t.oa()}catch{}t.oa=void 0}}else ht(t,11)}else if((n.K||t.g==n)&&Jr(t),!Nn(e))for(s=t.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(t.V=l[0],l=l[1],t.H==2)if(l[0]=="c"){t.K=l[1],t.pa=l[2];const u=l[3];u!=null&&(t.ra=u,t.l.info("VER="+t.ra));const h=l[4];h!=null&&(t.Ga=h,t.l.info("SVER="+t.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,t.L=r,t.l.info("backChannelRequestTimeoutMs_="+r)),r=t;const f=n.g;if(f){const E=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(E){var i=r.i;i.g||E.indexOf("spdy")==-1&&E.indexOf("quic")==-1&&E.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Ao(i,i.h),i.h=null))}if(r.F){const T=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(r.Da=T,L(r.I,r.F,T))}}t.H=3,t.h&&t.h.Ba(),t.ca&&(t.S=Date.now()-n.G,t.l.info("Handshake RTT: "+t.S+"ms")),r=t;var o=n;if(r.wa=Ku(r,r.J?r.pa:null,r.Y),o.K){Du(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(As(a),rr(a)),r.g=o}else ju(r);0<t.j.length&&ks(t)}else l[0]!="stop"&&l[0]!="close"||ht(t,7);else t.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?ht(t,7):Po(t):l[0]!="noop"&&t.h&&t.h.Aa(l),t.A=0)}}Ln(4)}catch{}}function o_(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(ms(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function a_(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(ms(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const r in n)e[t++]=r;return e}}}function Au(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(ms(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=a_(n),r=o_(n),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],t&&t[i],n)}var Ru=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function c_(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),s=null;if(0<=r){var i=n[t].substring(0,r);s=n[t].substring(r+1)}else i=n[t];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function pt(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof pt){this.h=n.h,Qr(this,n.j),this.s=n.s,this.g=n.g,Yr(this,n.m),this.l=n.l;var e=n.i,t=new xn;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),Ja(this,t),this.o=n.o}else n&&(e=String(n).match(Ru))?(this.h=!1,Qr(this,e[1]||"",!0),this.s=mn(e[2]||""),this.g=mn(e[3]||"",!0),Yr(this,e[4]),this.l=mn(e[5]||"",!0),Ja(this,e[6]||"",!0),this.o=mn(e[7]||"")):(this.h=!1,this.i=new xn(null,this.h))}pt.prototype.toString=function(){var n=[],e=this.j;e&&n.push(gn(e,Xa,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(gn(e,Xa,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(gn(t,t.charAt(0)=="/"?h_:u_,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",gn(t,f_)),n.join("")};function Le(n){return new pt(n)}function Qr(n,e,t){n.j=t?mn(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function Yr(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function Ja(n,e,t){e instanceof xn?(n.i=e,p_(n.i,n.h)):(t||(e=gn(e,d_)),n.i=new xn(e,n.h))}function L(n,e,t){n.i.set(e,t)}function Rs(n){return L(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function mn(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function gn(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,l_),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function l_(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Xa=/[#\/\?@]/g,u_=/[#\?:]/g,h_=/[#\?]/g,d_=/[#\?@]/g,f_=/#/g;function xn(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function rt(n){n.g||(n.g=new Map,n.h=0,n.i&&c_(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}g=xn.prototype;g.add=function(n,e){rt(this),this.i=null,n=Jt(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function Su(n,e){rt(n),e=Jt(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function Pu(n,e){return rt(n),e=Jt(n,e),n.g.has(e)}g.forEach=function(n,e){rt(this),this.g.forEach(function(t,r){t.forEach(function(s){n.call(e,s,r,this)},this)},this)};g.ta=function(){rt(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let r=0;r<e.length;r++){const s=n[r];for(let i=0;i<s.length;i++)t.push(e[r])}return t};g.Z=function(n){rt(this);let e=[];if(typeof n=="string")Pu(this,n)&&(e=e.concat(this.g.get(Jt(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};g.set=function(n,e){return rt(this),this.i=null,n=Jt(this,n),Pu(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};g.get=function(n,e){return n?(n=this.Z(n),0<n.length?String(n[0]):e):e};function Cu(n,e,t){Su(n,e),0<t.length&&(n.i=null,n.g.set(Jt(n,e),lo(t)),n.h+=t.length)}g.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var r=e[t];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),n.push(s)}}return this.i=n.join("&")};function Jt(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function p_(n,e){e&&!n.j&&(rt(n),n.i=null,n.g.forEach(function(t,r){var s=r.toLowerCase();r!=s&&(Su(this,r),Cu(this,s,t))},n)),n.j=e}var m_=class{constructor(n,e){this.g=n,this.map=e}};function bu(n){this.l=n||g_,R.PerformanceNavigationTiming?(n=R.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(R.g&&R.g.Ka&&R.g.Ka()&&R.g.Ka().dc),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var g_=10;function ku(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Nu(n){return n.h?1:n.g?n.g.size:0}function Ni(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function Ao(n,e){n.g?n.g.add(e):n.h=e}function Du(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}bu.prototype.cancel=function(){if(this.i=Vu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Vu(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.F);return e}return lo(n.i)}var __=class{stringify(n){return R.JSON.stringify(n,void 0)}parse(n){return R.JSON.parse(n,void 0)}};function y_(){this.g=new __}function v_(n,e,t){const r=t||"";try{Au(n,function(s,i){let o=s;Xn(s)&&(o=_o(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function E_(n,e){const t=new Es;if(R.Image){const r=new Image;r.onload=_r(vr,t,r,"TestLoadImage: loaded",!0,e),r.onerror=_r(vr,t,r,"TestLoadImage: error",!1,e),r.onabort=_r(vr,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=_r(vr,t,r,"TestLoadImage: timeout",!1,e),R.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function vr(n,e,t,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Ss(n){this.l=n.ec||null,this.j=n.ob||!1}G(Ss,Io);Ss.prototype.g=function(){return new Ps(this.l,this.j)};Ss.prototype.i=function(n){return function(){return n}}({});function Ps(n,e){W.call(this),this.F=n,this.u=e,this.m=void 0,this.readyState=Ro,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}G(Ps,W);var Ro=0;g=Ps.prototype;g.open=function(n,e){if(this.readyState!=Ro)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,Fn(this)};g.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.F||R).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};g.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,sr(this)),this.readyState=Ro};g.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Fn(this)),this.g&&(this.readyState=3,Fn(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof R.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ou(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function Ou(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}g.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?sr(this):Fn(this),this.readyState==3&&Ou(this)}};g.Za=function(n){this.g&&(this.response=this.responseText=n,sr(this))};g.Ya=function(n){this.g&&(this.response=n,sr(this))};g.ka=function(){this.g&&sr(this)};function sr(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Fn(n)}g.setRequestHeader=function(n,e){this.v.append(n,e)};g.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};g.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function Fn(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Ps.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var I_=R.JSON.parse;function U(n){W.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Mu,this.L=this.M=!1}G(U,W);var Mu="",T_=/^https?$/i,w_=["POST","PUT"];g=U.prototype;g.Oa=function(n){this.M=n};g.ha=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);e=e?e.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Pi.g(),this.C=this.u?Ya(this.u):Ya(Pi),this.g.onreadystatechange=se(this.La,this);try{this.G=!0,this.g.open(e,String(n),!0),this.G=!1}catch(i){Za(this,i);return}if(n=t||"",t=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)t.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())t.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(t.keys()).find(i=>i.toLowerCase()=="content-type"),s=R.FormData&&n instanceof R.FormData,!(0<=Jl(w_,e))||r||s||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of t)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Fu(this),0<this.B&&((this.L=A_(this.g))?(this.g.timeout=this.B,this.g.ontimeout=se(this.ua,this)):this.A=Eo(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(i){Za(this,i)}};function A_(n){return Bt&&typeof n.timeout=="number"&&n.ontimeout!==void 0}g.ua=function(){typeof co<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,X(this,"timeout"),this.abort(8))};function Za(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,Lu(n),Cs(n)}function Lu(n){n.F||(n.F=!0,X(n,"complete"),X(n,"error"))}g.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,X(this,"complete"),X(this,"abort"),Cs(this))};g.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Cs(this,!0)),U.$.N.call(this)};g.La=function(){this.s||(this.G||this.v||this.l?xu(this):this.kb())};g.kb=function(){xu(this)};function xu(n){if(n.h&&typeof co<"u"&&(!n.C[1]||Ie(n)!=4||n.da()!=2)){if(n.v&&Ie(n)==4)Eo(n.La,0,n);else if(X(n,"readystatechange"),Ie(n)==4){n.h=!1;try{const o=n.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=o===0){var s=String(n.I).match(Ru)[1]||null;!s&&R.self&&R.self.location&&(s=R.self.location.protocol.slice(0,-1)),r=!T_.test(s?s.toLowerCase():"")}t=r}if(t)X(n,"complete"),X(n,"success");else{n.m=6;try{var i=2<Ie(n)?n.g.statusText:""}catch{i=""}n.j=i+" ["+n.da()+"]",Lu(n)}}finally{Cs(n)}}}}function Cs(n,e){if(n.g){Fu(n);const t=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,e||X(n,"ready");try{t.onreadystatechange=r}catch{}}}function Fu(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(R.clearTimeout(n.A),n.A=null)}g.isActive=function(){return!!this.g};function Ie(n){return n.g?n.g.readyState:0}g.da=function(){try{return 2<Ie(this)?this.g.status:-1}catch{return-1}};g.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};g.Wa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),I_(e)}};function ec(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case Mu:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function R_(n){const e={};n=(n.g&&2<=Ie(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(Nn(n[r]))continue;var t=Yg(n[r]);const s=t[0];if(t=t[1],typeof t!="string")continue;t=t.trim();const i=e[s]||[];e[s]=i,i.push(t)}jg(e,function(r){return r.join(", ")})}g.Ia=function(){return this.m};g.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Uu(n){let e="";return ho(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function So(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=Uu(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):L(n,e,t))}function an(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function Bu(n){this.Ga=0,this.j=[],this.l=new Es,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=an("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=an("baseRetryDelayMs",5e3,n),this.hb=an("retryDelaySeedMs",1e4,n),this.eb=an("forwardChannelMaxRetries",2,n),this.xa=an("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new bu(n&&n.concurrentRequestLimit),this.Ja=new y_,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}g=Bu.prototype;g.ra=8;g.H=1;function Po(n){if(qu(n),n.H==3){var e=n.W++,t=Le(n.I);if(L(t,"SID",n.K),L(t,"RID",e),L(t,"TYPE","terminate"),ir(n,t),e=new nr(n,n.l,e),e.L=2,e.A=Rs(Le(t)),t=!1,R.navigator&&R.navigator.sendBeacon)try{t=R.navigator.sendBeacon(e.A.toString(),"")}catch{}!t&&R.Image&&(new Image().src=e.A,t=!0),t||(e.g=Qu(e.l,null),e.g.ha(e.A)),e.G=Date.now(),rr(e)}Gu(n)}function bs(n){n.g&&(bo(n),n.g.cancel(),n.g=null)}function qu(n){bs(n),n.u&&(R.clearTimeout(n.u),n.u=null),Jr(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&R.clearTimeout(n.m),n.m=null)}function ks(n){if(!ku(n.i)&&!n.m){n.m=!0;var e=n.Na;Vn||lu(),On||(Vn(),On=!0),yo.add(e,n),n.C=0}}function S_(n,e){return Nu(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=e.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=er(se(n.Na,n,e),Wu(n,n.C)),n.C++,!0)}g.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const s=new nr(this,this.l,n);let i=this.s;if(this.U&&(i?(i=tu(i),nu(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,t=0;t<this.j.length;t++){t:{var r=this.j[t];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.j.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=$u(this,s,e),t=Le(this.I),L(t,"RID",n),L(t,"CVER",22),this.F&&L(t,"X-HTTP-Session-Id",this.F),ir(this,t),i&&(this.O?e="headers="+encodeURIComponent(String(Uu(i)))+"&"+e:this.o&&So(t,this.o,i)),Ao(this.i,s),this.bb&&L(t,"TYPE","init"),this.P?(L(t,"$req",e),L(t,"SID","null"),s.aa=!0,bi(s,t,null)):bi(s,t,e),this.H=2}}else this.H==3&&(n?tc(this,n):this.j.length==0||ku(this.i)||tc(this))};function tc(n,e){var t;e?t=e.m:t=n.W++;const r=Le(n.I);L(r,"SID",n.K),L(r,"RID",t),L(r,"AID",n.V),ir(n,r),n.o&&n.s&&So(r,n.o,n.s),t=new nr(n,n.l,t,n.C+1),n.o===null&&(t.I=n.s),e&&(n.j=e.F.concat(n.j)),e=$u(n,t,1e3),t.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),Ao(n.i,t),bi(t,r,e)}function ir(n,e){n.na&&ho(n.na,function(t,r){L(e,r,t)}),n.h&&Au({},function(t,r){L(e,r,t)})}function $u(n,e,t){t=Math.min(n.j.length,t);var r=n.h?se(n.h.Va,n.h,n):null;e:{var s=n.j;let i=-1;for(;;){const o=["count="+t];i==-1?0<t?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<t;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{v_(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return n=n.j.splice(0,t),e.F=n,r}function ju(n){if(!n.g&&!n.u){n.ba=1;var e=n.Ma;Vn||lu(),On||(Vn(),On=!0),yo.add(e,n),n.A=0}}function Co(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=er(se(n.Ma,n),Wu(n,n.A)),n.A++,!0)}g.Ma=function(){if(this.u=null,zu(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=er(se(this.jb,this),n)}};g.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ce(10),bs(this),zu(this))};function bo(n){n.B!=null&&(R.clearTimeout(n.B),n.B=null)}function zu(n){n.g=new nr(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var e=Le(n.wa);L(e,"RID","rpc"),L(e,"SID",n.K),L(e,"AID",n.V),L(e,"CI",n.G?"0":"1"),!n.G&&n.qa&&L(e,"TO",n.qa),L(e,"TYPE","xmlhttp"),ir(n,e),n.o&&n.s&&So(e,n.o,n.s),n.L&&n.g.setTimeout(n.L);var t=n.g;n=n.pa,t.L=1,t.A=Rs(Le(e)),t.u=null,t.S=!0,Eu(t,n)}g.ib=function(){this.v!=null&&(this.v=null,bs(this),Co(this),ce(19))};function Jr(n){n.v!=null&&(R.clearTimeout(n.v),n.v=null)}function Hu(n,e){var t=null;if(n.g==e){Jr(n),bo(n),n.g=null;var r=2}else if(Ni(n.i,e))t=e.F,Du(n.i,e),r=1;else return;if(n.H!=0){if(e.i)if(r==1){t=e.u?e.u.length:0,e=Date.now()-e.G;var s=n.C;r=Is(),X(r,new mu(r,t)),ks(n)}else ju(n);else if(s=e.s,s==3||s==0&&0<e.ca||!(r==1&&S_(n,e)||r==2&&Co(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),s){case 1:ht(n,5);break;case 4:ht(n,10);break;case 3:ht(n,6);break;default:ht(n,2)}}}function Wu(n,e){let t=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(t*=2),t*e}function ht(n,e){if(n.l.info("Error code "+e),e==2){var t=null;n.h&&(t=null);var r=se(n.pb,n);t||(t=new pt("//www.google.com/images/cleardot.gif"),R.location&&R.location.protocol=="http"||Qr(t,"https"),Rs(t)),E_(t.toString(),r)}else ce(2);n.H=0,n.h&&n.h.za(e),Gu(n),qu(n)}g.pb=function(n){n?(this.l.info("Successfully pinged google.com"),ce(2)):(this.l.info("Failed to ping google.com"),ce(1))};function Gu(n){if(n.H=0,n.ma=[],n.h){const e=Vu(n.i);(e.length!=0||n.j.length!=0)&&(Ha(n.ma,e),Ha(n.ma,n.j),n.i.i.length=0,lo(n.j),n.j.length=0),n.h.ya()}}function Ku(n,e,t){var r=t instanceof pt?Le(t):new pt(t);if(r.g!="")e&&(r.g=e+"."+r.g),Yr(r,r.m);else{var s=R.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new pt(null);r&&Qr(i,r),e&&(i.g=e),s&&Yr(i,s),t&&(i.l=t),r=i}return t=n.F,e=n.Da,t&&e&&L(r,t,e),L(r,"VER",n.ra),ir(n,r),r}function Qu(n,e,t){if(e&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n.Ha&&!n.va?new U(new Ss({ob:t})):new U(n.va),e.Oa(n.J),e}g.isActive=function(){return!!this.h&&this.h.isActive(this)};function Yu(){}g=Yu.prototype;g.Ba=function(){};g.Aa=function(){};g.za=function(){};g.ya=function(){};g.isActive=function(){return!0};g.Va=function(){};function Xr(){if(Bt&&!(10<=Number(Ug)))throw Error("Environmental error: no available transport.")}Xr.prototype.g=function(n,e){return new de(n,e)};function de(n,e){W.call(this),this.g=new Bu(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(n?n["X-WebChannel-Client-Profile"]=e.Ca:n={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=n,(n=e&&e.cc)&&!Nn(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Nn(e)&&(this.g.F=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Xt(this)}G(de,W);de.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,e=this.l,t=this.h||void 0;ce(0),n.Y=e,n.na=t||{},n.G=n.aa,n.I=Ku(n,null,n.Y),ks(n)};de.prototype.close=function(){Po(this.g)};de.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=_o(n),n=t);e.j.push(new m_(e.fb++,n)),e.H==3&&ks(e)};de.prototype.N=function(){this.g.h=null,delete this.j,Po(this.g),delete this.g,de.$.N.call(this)};function Ju(n){To.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}G(Ju,To);function Xu(){wo.call(this),this.status=1}G(Xu,wo);function Xt(n){this.g=n}G(Xt,Yu);Xt.prototype.Ba=function(){X(this.g,"a")};Xt.prototype.Aa=function(n){X(this.g,new Ju(n))};Xt.prototype.za=function(n){X(this.g,new Xu)};Xt.prototype.ya=function(){X(this.g,"b")};function P_(){this.blockSize=-1}function _e(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}G(_e,P_);_e.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ii(n,e,t){t||(t=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(s=0;16>s;++s)r[s]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=n.g[0],t=n.g[1],s=n.g[2];var i=n.g[3],o=e+(i^t&(s^i))+r[0]+3614090360&4294967295;e=t+(o<<7&4294967295|o>>>25),o=i+(s^e&(t^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(t^i&(e^t))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=t+(e^s&(i^e))+r[3]+3250441966&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(i^t&(s^i))+r[4]+4118548399&4294967295,e=t+(o<<7&4294967295|o>>>25),o=i+(s^e&(t^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(t^i&(e^t))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=t+(e^s&(i^e))+r[7]+4249261313&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(i^t&(s^i))+r[8]+1770035416&4294967295,e=t+(o<<7&4294967295|o>>>25),o=i+(s^e&(t^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(t^i&(e^t))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=t+(e^s&(i^e))+r[11]+2304563134&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(i^t&(s^i))+r[12]+1804603682&4294967295,e=t+(o<<7&4294967295|o>>>25),o=i+(s^e&(t^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(t^i&(e^t))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=t+(e^s&(i^e))+r[15]+1236535329&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(t^s))+r[1]+4129170786&4294967295,e=t+(o<<5&4294967295|o>>>27),o=i+(t^s&(e^t))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=t+(i^e&(s^i))+r[0]+3921069994&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(t^s))+r[5]+3593408605&4294967295,e=t+(o<<5&4294967295|o>>>27),o=i+(t^s&(e^t))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=t+(i^e&(s^i))+r[4]+3889429448&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(t^s))+r[9]+568446438&4294967295,e=t+(o<<5&4294967295|o>>>27),o=i+(t^s&(e^t))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=t+(i^e&(s^i))+r[8]+1163531501&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(t^s))+r[13]+2850285829&4294967295,e=t+(o<<5&4294967295|o>>>27),o=i+(t^s&(e^t))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=t+(i^e&(s^i))+r[12]+2368359562&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(t^s^i)+r[5]+4294588738&4294967295,e=t+(o<<4&4294967295|o>>>28),o=i+(e^t^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^t)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=t+(s^i^e)+r[14]+4259657740&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(t^s^i)+r[1]+2763975236&4294967295,e=t+(o<<4&4294967295|o>>>28),o=i+(e^t^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^t)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=t+(s^i^e)+r[10]+3200236656&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(t^s^i)+r[13]+681279174&4294967295,e=t+(o<<4&4294967295|o>>>28),o=i+(e^t^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^t)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=t+(s^i^e)+r[6]+76029189&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(t^s^i)+r[9]+3654602809&4294967295,e=t+(o<<4&4294967295|o>>>28),o=i+(e^t^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^t)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=t+(s^i^e)+r[2]+3299628645&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(s^(t|~i))+r[0]+4096336452&4294967295,e=t+(o<<6&4294967295|o>>>26),o=i+(t^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~t))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=t+(i^(s|~e))+r[5]+4237533241&4294967295,t=s+(o<<21&4294967295|o>>>11),o=e+(s^(t|~i))+r[12]+1700485571&4294967295,e=t+(o<<6&4294967295|o>>>26),o=i+(t^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~t))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=t+(i^(s|~e))+r[1]+2240044497&4294967295,t=s+(o<<21&4294967295|o>>>11),o=e+(s^(t|~i))+r[8]+1873313359&4294967295,e=t+(o<<6&4294967295|o>>>26),o=i+(t^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~t))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=t+(i^(s|~e))+r[13]+1309151649&4294967295,t=s+(o<<21&4294967295|o>>>11),o=e+(s^(t|~i))+r[4]+4149444226&4294967295,e=t+(o<<6&4294967295|o>>>26),o=i+(t^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~t))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=t+(i^(s|~e))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+e&4294967295,n.g[1]=n.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+s&4294967295,n.g[3]=n.g[3]+i&4294967295}_e.prototype.j=function(n,e){e===void 0&&(e=n.length);for(var t=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=t;)ii(this,n,i),i+=this.blockSize;if(typeof n=="string"){for(;i<e;)if(r[s++]=n.charCodeAt(i++),s==this.blockSize){ii(this,r),s=0;break}}else for(;i<e;)if(r[s++]=n[i++],s==this.blockSize){ii(this,r),s=0;break}}this.h=s,this.i+=e};_e.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var e=1;e<n.length-8;++e)n[e]=0;var t=8*this.i;for(e=n.length-8;e<n.length;++e)n[e]=t&255,t/=256;for(this.j(n),n=Array(16),e=t=0;4>e;++e)for(var r=0;32>r;r+=8)n[t++]=this.g[e]>>>r&255;return n};function V(n,e){this.h=e;for(var t=[],r=!0,s=n.length-1;0<=s;s--){var i=n[s]|0;r&&i==e||(t[s]=i,r=!1)}this.g=t}var C_={};function ko(n){return-128<=n&&128>n?Lg(n,function(e){return new V([e|0],0>e?-1:0)}):new V([n|0],0>n?-1:0)}function Te(n){if(isNaN(n)||!isFinite(n))return Mt;if(0>n)return Y(Te(-n));for(var e=[],t=1,r=0;n>=t;r++)e[r]=n/t|0,t*=Di;return new V(e,0)}function Zu(n,e){if(n.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(n.charAt(0)=="-")return Y(Zu(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=Te(Math.pow(e,8)),r=Mt,s=0;s<n.length;s+=8){var i=Math.min(8,n.length-s),o=parseInt(n.substring(s,s+i),e);8>i?(i=Te(Math.pow(e,i)),r=r.R(i).add(Te(o))):(r=r.R(t),r=r.add(Te(o)))}return r}var Di=4294967296,Mt=ko(0),Vi=ko(1),nc=ko(16777216);g=V.prototype;g.ea=function(){if(pe(this))return-Y(this).ea();for(var n=0,e=1,t=0;t<this.g.length;t++){var r=this.D(t);n+=(0<=r?r:Di+r)*e,e*=Di}return n};g.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(Ve(this))return"0";if(pe(this))return"-"+Y(this).toString(n);for(var e=Te(Math.pow(n,6)),t=this,r="";;){var s=es(t,e).g;t=Zr(t,s.R(e));var i=((0<t.g.length?t.g[0]:t.h)>>>0).toString(n);if(t=s,Ve(t))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};g.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function Ve(n){if(n.h!=0)return!1;for(var e=0;e<n.g.length;e++)if(n.g[e]!=0)return!1;return!0}function pe(n){return n.h==-1}g.X=function(n){return n=Zr(this,n),pe(n)?-1:Ve(n)?0:1};function Y(n){for(var e=n.g.length,t=[],r=0;r<e;r++)t[r]=~n.g[r];return new V(t,~n.h).add(Vi)}g.abs=function(){return pe(this)?Y(this):this};g.add=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(n.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(n.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,t[s]=o<<16|i}return new V(t,t[t.length-1]&-2147483648?-1:0)};function Zr(n,e){return n.add(Y(e))}g.R=function(n){if(Ve(this)||Ve(n))return Mt;if(pe(this))return pe(n)?Y(this).R(Y(n)):Y(Y(this).R(n));if(pe(n))return Y(this.R(Y(n)));if(0>this.X(nc)&&0>n.X(nc))return Te(this.ea()*n.ea());for(var e=this.g.length+n.g.length,t=[],r=0;r<2*e;r++)t[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<n.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(s)>>>16,c=n.D(s)&65535;t[2*r+2*s]+=o*c,Er(t,2*r+2*s),t[2*r+2*s+1]+=i*c,Er(t,2*r+2*s+1),t[2*r+2*s+1]+=o*a,Er(t,2*r+2*s+1),t[2*r+2*s+2]+=i*a,Er(t,2*r+2*s+2)}for(r=0;r<e;r++)t[r]=t[2*r+1]<<16|t[2*r];for(r=e;r<2*e;r++)t[r]=0;return new V(t,0)};function Er(n,e){for(;(n[e]&65535)!=n[e];)n[e+1]+=n[e]>>>16,n[e]&=65535,e++}function cn(n,e){this.g=n,this.h=e}function es(n,e){if(Ve(e))throw Error("division by zero");if(Ve(n))return new cn(Mt,Mt);if(pe(n))return e=es(Y(n),e),new cn(Y(e.g),Y(e.h));if(pe(e))return e=es(n,Y(e)),new cn(Y(e.g),e.h);if(30<n.g.length){if(pe(n)||pe(e))throw Error("slowDivide_ only works with positive integers.");for(var t=Vi,r=e;0>=r.X(n);)t=rc(t),r=rc(r);var s=Pt(t,1),i=Pt(r,1);for(r=Pt(r,2),t=Pt(t,2);!Ve(r);){var o=i.add(r);0>=o.X(n)&&(s=s.add(t),i=o),r=Pt(r,1),t=Pt(t,1)}return e=Zr(n,s.R(e)),new cn(s,e)}for(s=Mt;0<=n.X(e);){for(t=Math.max(1,Math.floor(n.ea()/e.ea())),r=Math.ceil(Math.log(t)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Te(t),o=i.R(e);pe(o)||0<o.X(n);)t-=r,i=Te(t),o=i.R(e);Ve(i)&&(i=Vi),s=s.add(i),n=Zr(n,o)}return new cn(s,n)}g.gb=function(n){return es(this,n).h};g.and=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)&n.D(r);return new V(t,this.h&n.h)};g.or=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)|n.D(r);return new V(t,this.h|n.h)};g.xor=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)^n.D(r);return new V(t,this.h^n.h)};function rc(n){for(var e=n.g.length+1,t=[],r=0;r<e;r++)t[r]=n.D(r)<<1|n.D(r-1)>>>31;return new V(t,n.h)}function Pt(n,e){var t=e>>5;e%=32;for(var r=n.g.length-t,s=[],i=0;i<r;i++)s[i]=0<e?n.D(i+t)>>>e|n.D(i+t+1)<<32-e:n.D(i+t);return new V(s,n.h)}Xr.prototype.createWebChannel=Xr.prototype.g;de.prototype.send=de.prototype.u;de.prototype.open=de.prototype.m;de.prototype.close=de.prototype.close;Ts.NO_ERROR=0;Ts.TIMEOUT=8;Ts.HTTP_ERROR=6;gu.COMPLETE="complete";_u.EventType=tr;tr.OPEN="a";tr.CLOSE="b";tr.ERROR="c";tr.MESSAGE="d";W.prototype.listen=W.prototype.O;U.prototype.listenOnce=U.prototype.P;U.prototype.getLastError=U.prototype.Sa;U.prototype.getLastErrorCode=U.prototype.Ia;U.prototype.getStatus=U.prototype.da;U.prototype.getResponseJson=U.prototype.Wa;U.prototype.getResponseText=U.prototype.ja;U.prototype.send=U.prototype.ha;U.prototype.setWithCredentials=U.prototype.Oa;_e.prototype.digest=_e.prototype.l;_e.prototype.reset=_e.prototype.reset;_e.prototype.update=_e.prototype.j;V.prototype.add=V.prototype.add;V.prototype.multiply=V.prototype.R;V.prototype.modulo=V.prototype.gb;V.prototype.compare=V.prototype.X;V.prototype.toNumber=V.prototype.ea;V.prototype.toString=V.prototype.toString;V.prototype.getBits=V.prototype.D;V.fromNumber=Te;V.fromString=Zu;var b_=function(){return new Xr},k_=function(){return Is()},oi=Ts,N_=gu,D_=At,sc={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Ir=_u,V_=U,O_=_e,Lt=V;const ic="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ne.UNAUTHENTICATED=new ne(null),ne.GOOGLE_CREDENTIALS=new ne("google-credentials-uid"),ne.FIRST_PARTY=new ne("first-party-uid"),ne.MOCK_USER=new ne("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zt="10.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et=new Yi("@firebase/firestore");function ln(){return Et.logLevel}function y(n,...e){if(Et.logLevel<=b.DEBUG){const t=e.map(No);Et.debug(`Firestore (${Zt}): ${n}`,...t)}}function xe(n,...e){if(Et.logLevel<=b.ERROR){const t=e.map(No);Et.error(`Firestore (${Zt}): ${n}`,...t)}}function qt(n,...e){if(Et.logLevel<=b.WARN){const t=e.map(No);Et.warn(`Firestore (${Zt}): ${n}`,...t)}}function No(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(n="Unexpected state"){const e=`FIRESTORE (${Zt}) INTERNAL ASSERTION FAILED: `+n;throw xe(e),new Error(e)}function M(n,e){n||A()}function P(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _ extends Ue{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class M_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ne.UNAUTHENTICATED))}shutdown(){}}class L_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class x_{constructor(e){this.t=e,this.currentUser=ne.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new Oe;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Oe,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Oe)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(M(typeof r.accessToken=="string"),new eh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return M(e===null||typeof e=="string"),new ne(e)}}class F_{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=ne.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class U_{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new F_(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(ne.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class B_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class q_{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const r=i=>{i.error!=null&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(M(typeof t.token=="string"),this.R=t.token,new B_(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $_(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=$_(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function N(n,e){return n<e?-1:n>e?1:0}function $t(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new _(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new _(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new _(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new _(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return z.fromMillis(Date.now())}static fromDate(e){return z.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new z(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?N(this.nanoseconds,e.nanoseconds):N(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.timestamp=e}static fromTimestamp(e){return new S(e)}static min(){return new S(new z(0,0))}static max(){return new S(new z(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,t,r){t===void 0?t=0:t>e.length&&A(),r===void 0?r=e.length-t:r>e.length-t&&A(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Un.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Un?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class x extends Un{construct(e,t,r){return new x(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new _(p.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new x(t)}static emptyPath(){return new x([])}}const j_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class J extends Un{construct(e,t,r){return new J(e,t,r)}static isValidIdentifier(e){return j_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),J.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new J(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new _(p.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new _(p.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new _(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new _(p.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new J(t)}static emptyPath(){return new J([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.path=e}static fromPath(e){return new I(x.fromString(e))}static fromName(e){return new I(x.fromString(e).popFirst(5))}static empty(){return new I(x.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&x.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return x.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new I(new x(e.slice()))}}function z_(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=S.fromTimestamp(r===1e9?new z(t+1,0):new z(t,r));return new Je(s,I.empty(),e)}function H_(n){return new Je(n.readTime,n.key,-1)}class Je{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Je(S.min(),I.empty(),-1)}static max(){return new Je(S.max(),I.empty(),-1)}}function W_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=I.comparator(n.documentKey,e.documentKey),t!==0?t:N(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class K_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function or(n){if(n.code!==p.FAILED_PRECONDITION||n.message!==G_)throw n;y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&A(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new m((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof m?t:m.resolve(t)}catch(t){return m.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):m.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):m.reject(t)}static resolve(e){return new m((t,r)=>{t(e)})}static reject(e){return new m((t,r)=>{r(e)})}static waitFor(e){return new m((t,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&t()},c=>r(c))}),o=!0,i===s&&t()})}static or(e){let t=m.resolve(!1);for(const r of e)t=t.next(s=>s?m.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new m((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;t(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,t){return new m((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function ar(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Do{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.se(r),this.oe=r=>t.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Do._e=-1;function Ns(n){return n==null}function ts(n){return n===0&&1/n==-1/0}function Q_(n){return typeof n=="number"&&Number.isInteger(n)&&!ts(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Rt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function nh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,t){this.comparator=e,this.root=t||Q.EMPTY}insert(e,t){return new F(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Q.BLACK,null,null))}remove(e){return new F(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Q.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Tr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Tr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Tr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Tr(this.root,e,this.comparator,!0)}}class Tr{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Q{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Q.RED,this.left=s??Q.EMPTY,this.right=i??Q.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Q(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Q.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Q.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Q.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Q.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw A();const e=this.left.check();if(e!==this.right.check())throw A();return e+(this.isRed()?0:1)}}Q.EMPTY=null,Q.RED=!0,Q.BLACK=!1;Q.EMPTY=new class{constructor(){this.size=0}get key(){throw A()}get value(){throw A()}get color(){throw A()}get left(){throw A()}get right(){throw A()}copy(e,t,r,s,i){return this}insert(e,t,r){return new Q(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.comparator=e,this.data=new F(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ac(this.data.getIterator())}getIteratorFrom(e){return new ac(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Z)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Z(this.comparator);return t.data=e,t}}class ac{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.fields=e,e.sort(J.comparator)}static empty(){return new he([])}unionWith(e){let t=new Z(J.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new he(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return $t(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class rh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new rh("Invalid base64 string: "+i):i}}(e);return new ae(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ae(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return N(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ae.EMPTY_BYTE_STRING=new ae("");const Y_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xe(n){if(M(!!n),typeof n=="string"){let e=0;const t=Y_.exec(n);if(M(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:$(n.seconds),nanos:$(n.nanos)}}function $(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function It(n){return typeof n=="string"?ae.fromBase64String(n):ae.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Oo(n){const e=n.mapValue.fields.__previous_value__;return Vo(e)?Oo(e):e}function Bn(n){const e=Xe(n.mapValue.fields.__local_write_time__.timestampValue);return new z(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e,t,r,s,i,o,a,c,l){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class qn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new qn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof qn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Tt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Vo(n)?4:X_(n)?9007199254740991:10:A()}function Pe(n,e){if(n===e)return!0;const t=Tt(n);if(t!==Tt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Bn(n).isEqual(Bn(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Xe(s.timestampValue),a=Xe(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return It(s.bytesValue).isEqual(It(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return $(s.geoPointValue.latitude)===$(i.geoPointValue.latitude)&&$(s.geoPointValue.longitude)===$(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return $(s.integerValue)===$(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=$(s.doubleValue),a=$(i.doubleValue);return o===a?ts(o)===ts(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return $t(n.arrayValue.values||[],e.arrayValue.values||[],Pe);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(oc(o)!==oc(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Pe(o[c],a[c])))return!1;return!0}(n,e);default:return A()}}function $n(n,e){return(n.values||[]).find(t=>Pe(t,e))!==void 0}function jt(n,e){if(n===e)return 0;const t=Tt(n),r=Tt(e);if(t!==r)return N(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return N(n.booleanValue,e.booleanValue);case 2:return function(i,o){const a=$(i.integerValue||i.doubleValue),c=$(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,e);case 3:return cc(n.timestampValue,e.timestampValue);case 4:return cc(Bn(n),Bn(e));case 5:return N(n.stringValue,e.stringValue);case 6:return function(i,o){const a=It(i),c=It(o);return a.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=N(a[l],c[l]);if(u!==0)return u}return N(a.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const a=N($(i.latitude),$(o.latitude));return a!==0?a:N($(i.longitude),$(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=jt(a[l],c[l]);if(u)return u}return N(a.length,c.length)}(n.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===wr.mapValue&&o===wr.mapValue)return 0;if(i===wr.mapValue)return 1;if(o===wr.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=N(c[h],u[h]);if(d!==0)return d;const f=jt(a[c[h]],l[u[h]]);if(f!==0)return f}return N(c.length,u.length)}(n.mapValue,e.mapValue);default:throw A()}}function cc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return N(n,e);const t=Xe(n),r=Xe(e),s=N(t.seconds,r.seconds);return s!==0?s:N(t.nanos,r.nanos)}function zt(n){return Oi(n)}function Oi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Xe(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return It(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return I.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Oi(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Oi(t.fields[o])}`;return s+"}"}(n.mapValue):A()}function lc(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Mi(n){return!!n&&"integerValue"in n}function Mo(n){return!!n&&"arrayValue"in n}function uc(n){return!!n&&"nullValue"in n}function hc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Mr(n){return!!n&&"mapValue"in n}function Tn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Rt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Tn(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Tn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function X_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.value=e}static empty(){return new ue({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Mr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Tn(t)}setAll(e){let t=J.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=a.popLast()}o?r[a.lastSegment()]=Tn(o):s.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Mr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Pe(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Mr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Rt(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ue(Tn(this.value))}}function sh(n){const e=[];return Rt(n.fields,(t,r)=>{const s=new J([t]);if(Mr(r)){const i=sh(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new he(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,t,r,s,i,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new re(e,0,S.min(),S.min(),S.min(),ue.empty(),0)}static newFoundDocument(e,t,r,s){return new re(e,1,t,S.min(),r,s,0)}static newNoDocument(e,t){return new re(e,2,t,S.min(),S.min(),ue.empty(),0)}static newUnknownDocument(e,t){return new re(e,3,t,S.min(),S.min(),ue.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(S.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ue.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ue.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=S.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof re&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new re(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ns{constructor(e,t){this.position=e,this.inclusive=t}}function dc(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=I.comparator(I.fromName(o.referenceValue),t.key):r=jt(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function fc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Pe(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class rs{constructor(e,t="asc"){this.field=e,this.dir=t}}function Z_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class ih{}class j extends ih{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new ty(e,t,r):t==="array-contains"?new sy(e,r):t==="in"?new iy(e,r):t==="not-in"?new oy(e,r):t==="array-contains-any"?new ay(e,r):new j(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new ny(e,r):new ry(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(jt(t,this.value)):t!==null&&Tt(this.value)===Tt(t)&&this.matchesComparison(jt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return A()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ye extends ih{constructor(e,t){super(),this.filters=e,this.op=t,this.ue=null}static create(e,t){return new ye(e,t)}matches(e){return oh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function oh(n){return n.op==="and"}function ah(n){return ey(n)&&oh(n)}function ey(n){for(const e of n.filters)if(e instanceof ye)return!1;return!0}function Li(n){if(n instanceof j)return n.field.canonicalString()+n.op.toString()+zt(n.value);if(ah(n))return n.filters.map(e=>Li(e)).join(",");{const e=n.filters.map(t=>Li(t)).join(",");return`${n.op}(${e})`}}function ch(n,e){return n instanceof j?function(r,s){return s instanceof j&&r.op===s.op&&r.field.isEqual(s.field)&&Pe(r.value,s.value)}(n,e):n instanceof ye?function(r,s){return s instanceof ye&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&ch(o,s.filters[a]),!0):!1}(n,e):void A()}function lh(n){return n instanceof j?function(t){return`${t.field.canonicalString()} ${t.op} ${zt(t.value)}`}(n):n instanceof ye?function(t){return t.op.toString()+" {"+t.getFilters().map(lh).join(" ,")+"}"}(n):"Filter"}class ty extends j{constructor(e,t,r){super(e,t,r),this.key=I.fromName(r.referenceValue)}matches(e){const t=I.comparator(e.key,this.key);return this.matchesComparison(t)}}class ny extends j{constructor(e,t){super(e,"in",t),this.keys=uh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ry extends j{constructor(e,t){super(e,"not-in",t),this.keys=uh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function uh(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>I.fromName(r.referenceValue))}class sy extends j{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Mo(t)&&$n(t.arrayValue,this.value)}}class iy extends j{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&$n(this.value.arrayValue,t)}}class oy extends j{constructor(e,t){super(e,"not-in",t)}matches(e){if($n(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!$n(this.value.arrayValue,t)}}class ay extends j{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Mo(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>$n(this.value.arrayValue,r))}}/**
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
 */class cy{constructor(e,t=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function pc(n,e=null,t=[],r=[],s=null,i=null,o=null){return new cy(n,e,t,r,s,i,o)}function Lo(n){const e=P(n);if(e.ce===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Li(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ns(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>zt(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>zt(r)).join(",")),e.ce=t}return e.ce}function xo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Z_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!ch(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!fc(n.startAt,e.startAt)&&fc(n.endAt,e.endAt)}function xi(n){return I.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,t=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function ly(n,e,t,r,s,i,o,a){return new cr(n,e,t,r,s,i,o,a)}function Fo(n){return new cr(n)}function mc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function hh(n){return n.collectionGroup!==null}function wn(n){const e=P(n);if(e.le===null){e.le=[];const t=new Set;for(const i of e.explicitOrderBy)e.le.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Z(J.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.le.push(new rs(i,r))}),t.has(J.keyField().canonicalString())||e.le.push(new rs(J.keyField(),r))}return e.le}function Re(n){const e=P(n);return e.he||(e.he=uy(e,wn(n))),e.he}function uy(n,e){if(n.limitType==="F")return pc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new rs(s.field,i)});const t=n.endAt?new ns(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ns(n.startAt.position,n.startAt.inclusive):null;return pc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Fi(n,e){const t=n.filters.concat([e]);return new cr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Ui(n,e,t){return new cr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ds(n,e){return xo(Re(n),Re(e))&&n.limitType===e.limitType}function dh(n){return`${Lo(Re(n))}|lt:${n.limitType}`}function Ct(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>lh(s)).join(", ")}]`),Ns(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>zt(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>zt(s)).join(",")),`Target(${r})`}(Re(n))}; limitType=${n.limitType})`}function Vs(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):I.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of wn(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=dc(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,wn(r),s)||r.endAt&&!function(o,a,c){const l=dc(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,wn(r),s))}(n,e)}function hy(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function fh(n){return(e,t)=>{let r=!1;for(const s of wn(n)){const i=dy(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function dy(n,e,t){const r=n.field.isKeyField()?I.comparator(e.key,t.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?jt(c,l):A()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return A()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Rt(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return nh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy=new F(I.comparator);function Fe(){return fy}const ph=new F(I.comparator);function _n(...n){let e=ph;for(const t of n)e=e.insert(t.key,t);return e}function mh(n){let e=ph;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function dt(){return An()}function gh(){return An()}function An(){return new en(n=>n.toString(),(n,e)=>n.isEqual(e))}const py=new F(I.comparator),my=new Z(I.comparator);function C(...n){let e=my;for(const t of n)e=e.add(t);return e}const gy=new Z(N);function _y(){return gy}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _h(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ts(e)?"-0":e}}function yh(n){return{integerValue:""+n}}function yy(n,e){return Q_(e)?yh(e):_h(n,e)}/**
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
 */class Os{constructor(){this._=void 0}}function vy(n,e,t){return n instanceof ss?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Vo(i)&&(i=Oo(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(t,e):n instanceof jn?Eh(n,e):n instanceof zn?Ih(n,e):function(s,i){const o=vh(s,i),a=gc(o)+gc(s.Ie);return Mi(o)&&Mi(s.Ie)?yh(a):_h(s.serializer,a)}(n,e)}function Ey(n,e,t){return n instanceof jn?Eh(n,e):n instanceof zn?Ih(n,e):t}function vh(n,e){return n instanceof is?function(r){return Mi(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ss extends Os{}class jn extends Os{constructor(e){super(),this.elements=e}}function Eh(n,e){const t=Th(e);for(const r of n.elements)t.some(s=>Pe(s,r))||t.push(r);return{arrayValue:{values:t}}}class zn extends Os{constructor(e){super(),this.elements=e}}function Ih(n,e){let t=Th(e);for(const r of n.elements)t=t.filter(s=>!Pe(s,r));return{arrayValue:{values:t}}}class is extends Os{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function gc(n){return $(n.integerValue||n.doubleValue)}function Th(n){return Mo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Iy(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof jn&&s instanceof jn||r instanceof zn&&s instanceof zn?$t(r.elements,s.elements,Pe):r instanceof is&&s instanceof is?Pe(r.Ie,s.Ie):r instanceof ss&&s instanceof ss}(n.transform,e.transform)}class Ty{constructor(e,t){this.version=e,this.transformResults=t}}class me{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new me}static exists(e){return new me(void 0,e)}static updateTime(e){return new me(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Lr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ms{}function wh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Uo(n.key,me.none()):new lr(n.key,n.data,me.none());{const t=n.data,r=ue.empty();let s=new Z(J.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new st(n.key,r,new he(s.toArray()),me.none())}}function wy(n,e,t){n instanceof lr?function(s,i,o){const a=s.value.clone(),c=yc(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof st?function(s,i,o){if(!Lr(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=yc(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Ah(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Rn(n,e,t,r){return n instanceof lr?function(i,o,a,c){if(!Lr(i.precondition,o))return a;const l=i.value.clone(),u=vc(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(n,e,t,r):n instanceof st?function(i,o,a,c){if(!Lr(i.precondition,o))return a;const l=vc(i.fieldTransforms,c,o),u=o.data;return u.setAll(Ah(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(n,e,t,r):function(i,o,a){return Lr(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function Ay(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=vh(r.transform,s||null);i!=null&&(t===null&&(t=ue.empty()),t.set(r.field,i))}return t||null}function _c(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&$t(r,s,(i,o)=>Iy(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class lr extends Ms{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class st extends Ms{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ah(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function yc(n,e,t){const r=new Map;M(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,Ey(o,a,t[s]))}return r}function vc(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,vy(i,o,e))}return r}class Uo extends Ms{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ry extends Ms{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&wy(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Rn(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Rn(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=gh();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(s.key)?null:a;const c=wh(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(S.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),C())}isEqual(e){return this.batchId===e.batchId&&$t(this.mutations,e.mutations,(t,r)=>_c(t,r))&&$t(this.baseMutations,e.baseMutations,(t,r)=>_c(t,r))}}class Bo{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){M(e.mutations.length===r.length);let s=function(){return py}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Bo(e,t,r,s)}}/**
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
 */class Py{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Cy{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q,k;function by(n){switch(n){default:return A();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function Rh(n){if(n===void 0)return xe("GRPC error has no .code"),p.UNKNOWN;switch(n){case q.OK:return p.OK;case q.CANCELLED:return p.CANCELLED;case q.UNKNOWN:return p.UNKNOWN;case q.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case q.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case q.INTERNAL:return p.INTERNAL;case q.UNAVAILABLE:return p.UNAVAILABLE;case q.UNAUTHENTICATED:return p.UNAUTHENTICATED;case q.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case q.NOT_FOUND:return p.NOT_FOUND;case q.ALREADY_EXISTS:return p.ALREADY_EXISTS;case q.PERMISSION_DENIED:return p.PERMISSION_DENIED;case q.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case q.ABORTED:return p.ABORTED;case q.OUT_OF_RANGE:return p.OUT_OF_RANGE;case q.UNIMPLEMENTED:return p.UNIMPLEMENTED;case q.DATA_LOSS:return p.DATA_LOSS;default:return A()}}(k=q||(q={}))[k.OK=0]="OK",k[k.CANCELLED=1]="CANCELLED",k[k.UNKNOWN=2]="UNKNOWN",k[k.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",k[k.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",k[k.NOT_FOUND=5]="NOT_FOUND",k[k.ALREADY_EXISTS=6]="ALREADY_EXISTS",k[k.PERMISSION_DENIED=7]="PERMISSION_DENIED",k[k.UNAUTHENTICATED=16]="UNAUTHENTICATED",k[k.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",k[k.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",k[k.ABORTED=10]="ABORTED",k[k.OUT_OF_RANGE=11]="OUT_OF_RANGE",k[k.UNIMPLEMENTED=12]="UNIMPLEMENTED",k[k.INTERNAL=13]="INTERNAL",k[k.UNAVAILABLE=14]="UNAVAILABLE",k[k.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function ky(){return new TextEncoder}/**
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
 */const Ny=new Lt([4294967295,4294967295],0);function Ec(n){const e=ky().encode(n),t=new O_;return t.update(e),new Uint8Array(t.digest())}function Ic(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Lt([t,r],0),new Lt([s,i],0)]}class qo{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new yn(`Invalid padding: ${t}`);if(r<0)throw new yn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new yn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new yn(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ee=Lt.fromNumber(this.Te)}de(e,t,r){let s=e.add(t.multiply(Lt.fromNumber(r)));return s.compare(Ny)===1&&(s=new Lt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=Ec(e),[r,s]=Ic(t);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new qo(i,s,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const t=Ec(e),[r,s]=Ic(t);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class yn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,ur.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ls(S.min(),s,new F(N),Fe(),C())}}class ur{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ur(r,t,C(),C(),C())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,t,r,s){this.Ve=e,this.removedTargetIds=t,this.key=r,this.me=s}}class Sh{constructor(e,t){this.targetId=e,this.fe=t}}class Ph{constructor(e,t,r=ae.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Tc{constructor(){this.ge=0,this.pe=Ac(),this.ye=ae.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=C(),t=C(),r=C();return this.pe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:A()}}),new ur(this.ye,this.we,e,t,r)}Fe(){this.Se=!1,this.pe=Ac()}Me(e,t){this.Se=!0,this.pe=this.pe.insert(e,t)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,M(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class Dy{constructor(e){this.Le=e,this.ke=new Map,this.qe=Fe(),this.Qe=wc(),this.Ke=new F(N)}$e(e){for(const t of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(t,e.me):this.We(t,e.key,e.me);for(const t of e.removedTargetIds)this.We(t,e.key,e.me)}Ge(e){this.forEachTarget(e,t=>{const r=this.ze(t);switch(e.state){case 0:this.je(t)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(t);break;case 3:this.je(t)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),r.Ce(e.resumeToken));break;default:A()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ke.forEach((r,s)=>{this.je(s)&&t(s)})}Je(e){const t=e.targetId,r=e.fe.count,s=this.Ye(t);if(s){const i=s.target;if(xi(i))if(r===0){const o=new I(i.path);this.We(t,o,re.newNoDocument(o,S.min()))}else M(r===1);else{const o=this.Ze(t);if(o!==r){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(t);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,l)}}}}}Xe(e){const t=e.fe.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,a;try{o=It(r).toUint8Array()}catch(c){if(c instanceof rh)return qt("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new qo(o,s,i)}catch(c){return qt(c instanceof yn?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,t,r){return t.fe.count===r-this.rt(e,t.targetId)?0:2}rt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(t,i,null),s++)}),s}it(e){const t=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&xi(a.target)){const c=new I(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,re.newNoDocument(c,e))}i.De&&(t.set(o,i.ve()),i.Fe())}});let r=C();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ye(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(e));const s=new Ls(e,t,this.Ke,this.qe,r);return this.qe=Fe(),this.Qe=wc(),this.Ke=new F(N),s}Ue(e,t){if(!this.je(e))return;const r=this.st(e,t.key)?2:0;this.ze(e).Me(t.key,r),this.qe=this.qe.insert(t.key,t),this.Qe=this.Qe.insert(t.key,this.ot(t.key).add(e))}We(e,t,r){if(!this.je(e))return;const s=this.ze(e);this.st(e,t)?s.Me(t,1):s.xe(t),this.Qe=this.Qe.insert(t,this.ot(t).delete(e)),r&&(this.qe=this.qe.insert(t,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let t=this.ke.get(e);return t||(t=new Tc,this.ke.set(e,t)),t}ot(e){let t=this.Qe.get(e);return t||(t=new Z(N),this.Qe=this.Qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||y("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.ke.get(e);return t&&t.be?null:this.Le._t(e)}He(e){this.ke.set(e,new Tc),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}st(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function wc(){return new F(I.comparator)}function Ac(){return new F(I.comparator)}const Vy={asc:"ASCENDING",desc:"DESCENDING"},Oy={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},My={and:"AND",or:"OR"};class Ly{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Bi(n,e){return n.useProto3Json||Ns(e)?e:{value:e}}function os(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ch(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function xy(n,e){return os(n,e.toTimestamp())}function Se(n){return M(!!n),S.fromTimestamp(function(t){const r=Xe(t);return new z(r.seconds,r.nanos)}(n))}function $o(n,e){return function(r){return new x(["projects",r.projectId,"databases",r.database])}(n).child("documents").child(e).canonicalString()}function bh(n){const e=x.fromString(n);return M(Vh(e)),e}function qi(n,e){return $o(n.databaseId,e.path)}function ai(n,e){const t=bh(e);if(t.get(1)!==n.databaseId.projectId)throw new _(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new _(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new I(kh(t))}function $i(n,e){return $o(n.databaseId,e)}function Fy(n){const e=bh(n);return e.length===4?x.emptyPath():kh(e)}function ji(n){return new x(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function kh(n){return M(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Rc(n,e,t){return{name:qi(n,e),fields:t.value.mapValue.fields}}function Uy(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:A()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(M(u===void 0||typeof u=="string"),ae.fromBase64String(u||"")):(M(u===void 0||u instanceof Uint8Array),ae.fromUint8Array(u||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?p.UNKNOWN:Rh(l.code);return new _(u,l.message||"")}(o);t=new Ph(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ai(n,r.document.name),i=Se(r.document.updateTime),o=r.document.createTime?Se(r.document.createTime):S.min(),a=new ue({mapValue:{fields:r.document.fields}}),c=re.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];t=new xr(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ai(n,r.document),i=r.readTime?Se(r.readTime):S.min(),o=re.newNoDocument(s,i),a=r.removedTargetIds||[];t=new xr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ai(n,r.document),i=r.removedTargetIds||[];t=new xr([],i,s,null)}else{if(!("filter"in e))return A();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Cy(s,i),a=r.targetId;t=new Sh(a,o)}}return t}function By(n,e){let t;if(e instanceof lr)t={update:Rc(n,e.key,e.value)};else if(e instanceof Uo)t={delete:qi(n,e.key)};else if(e instanceof st)t={update:Rc(n,e.key,e.data),updateMask:Qy(e.fieldMask)};else{if(!(e instanceof Ry))return A();t={verify:qi(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof ss)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof jn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof zn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof is)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw A()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:xy(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:A()}(n,e.precondition)),t}function qy(n,e){return n&&n.length>0?(M(e!==void 0),n.map(t=>function(s,i){let o=s.updateTime?Se(s.updateTime):Se(i);return o.isEqual(S.min())&&(o=Se(i)),new Ty(o,s.transformResults||[])}(t,e))):[]}function $y(n,e){return{documents:[$i(n,e.path)]}}function jy(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=$i(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=$i(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return Dh(ye.create(c,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:bt(h.field),direction:Wy(h.dir)}}(l))}(e.orderBy);i&&(t.structuredQuery.orderBy=i);const o=Bi(n,e.limit);return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function zy(n){let e=Fy(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){M(r===1);const u=t.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];t.where&&(i=function(h){const d=Nh(h);return d instanceof ye&&ah(d)?d.getFilters():[d]}(t.where));let o=[];t.orderBy&&(o=function(h){return h.map(d=>function(E){return new rs(kt(E.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(d))}(t.orderBy));let a=null;t.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Ns(d)?null:d}(t.limit));let c=null;t.startAt&&(c=function(h){const d=!!h.before,f=h.values||[];return new ns(f,d)}(t.startAt));let l=null;return t.endAt&&(l=function(h){const d=!h.before,f=h.values||[];return new ns(f,d)}(t.endAt)),ly(e,s,o,i,a,"F",c,l)}function Hy(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return A()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Nh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=kt(t.unaryFilter.field);return j.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=kt(t.unaryFilter.field);return j.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=kt(t.unaryFilter.field);return j.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=kt(t.unaryFilter.field);return j.create(o,"!=",{nullValue:"NULL_VALUE"});default:return A()}}(n):n.fieldFilter!==void 0?function(t){return j.create(kt(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return A()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ye.create(t.compositeFilter.filters.map(r=>Nh(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return A()}}(t.compositeFilter.op))}(n):A()}function Wy(n){return Vy[n]}function Gy(n){return Oy[n]}function Ky(n){return My[n]}function bt(n){return{fieldPath:n.canonicalString()}}function kt(n){return J.fromServerFormat(n.fieldPath)}function Dh(n){return n instanceof j?function(t){if(t.op==="=="){if(hc(t.value))return{unaryFilter:{field:bt(t.field),op:"IS_NAN"}};if(uc(t.value))return{unaryFilter:{field:bt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(hc(t.value))return{unaryFilter:{field:bt(t.field),op:"IS_NOT_NAN"}};if(uc(t.value))return{unaryFilter:{field:bt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:bt(t.field),op:Gy(t.op),value:t.value}}}(n):n instanceof ye?function(t){const r=t.getFilters().map(s=>Dh(s));return r.length===1?r[0]:{compositeFilter:{op:Ky(t.op),filters:r}}}(n):A()}function Qy(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Vh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,t,r,s,i=S.min(),o=S.min(),a=ae.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new He(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new He(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new He(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new He(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(e){this.ut=e}}function Jy(n){const e=zy({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ui(e,e.limit,"L"):e}/**
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
 */class Xy{constructor(){this.on=new Zy}addToCollectionParentIndex(e,t){return this.on.add(t),m.resolve()}getCollectionParents(e,t){return m.resolve(this.on.getEntries(t))}addFieldIndex(e,t){return m.resolve()}deleteFieldIndex(e,t){return m.resolve()}deleteAllFieldIndexes(e){return m.resolve()}createTargetIndexes(e,t){return m.resolve()}getDocumentsMatchingTarget(e,t){return m.resolve(null)}getIndexType(e,t){return m.resolve(0)}getFieldIndexes(e,t){return m.resolve([])}getNextCollectionGroupToUpdate(e){return m.resolve(null)}getMinOffset(e,t){return m.resolve(Je.min())}getMinOffsetFromCollectionGroup(e,t){return m.resolve(Je.min())}updateCollectionGroup(e,t,r){return m.resolve()}updateIndexEntries(e,t){return m.resolve()}}class Zy{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Z(x.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Z(x.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Ht(0)}static Nn(){return new Ht(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(){this.changes=new en(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,re.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?m.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class tv{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Rn(r.mutation,s,he.empty(),z.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,C()).next(()=>r))}getLocalViewOfDocuments(e,t,r=C()){const s=dt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=_n();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=dt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,C()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,s){let i=Fe();const o=An(),a=function(){return An()}();return t.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof st)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Rn(u.mutation,l,u.mutation.getFieldMask(),z.now())):o.set(l.key,he.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),t.forEach((l,u)=>{var h;return a.set(l,new tv(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const r=An();let s=new F((o,a)=>o-a),i=C();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=t.get(c);if(l===null)return;let u=r.get(c)||he.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||C()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=gh();u.forEach(d=>{if(!i.has(d)){const f=wh(t.get(d),r.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return m.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(o){return I.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):hh(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):m.resolve(dt());let a=-1,c=i;return o.next(l=>m.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?m.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,C())).next(u=>({batchId:a,changes:mh(u)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new I(t)).next(r=>{let s=_n();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=_n();return this.indexManager.getCollectionParents(e,i).next(a=>m.forEach(a,c=>{const l=function(h,d){return new cr(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,re.newInvalidDocument(u)))});let a=_n();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&Rn(u.mutation,l,he.empty(),z.now()),Vs(t,l)&&(a=a.insert(c,l))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,t){return m.resolve(this.ur.get(t))}saveBundleMetadata(e,t){return this.ur.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Se(s.createTime)}}(t)),m.resolve()}getNamedQuery(e,t){return m.resolve(this.cr.get(t))}saveNamedQuery(e,t){return this.cr.set(t.name,function(s){return{name:s.name,query:Jy(s.bundledQuery),readTime:Se(s.readTime)}}(t)),m.resolve()}}/**
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
 */class sv{constructor(){this.overlays=new F(I.comparator),this.lr=new Map}getOverlay(e,t){return m.resolve(this.overlays.get(t))}getOverlays(e,t){const r=dt();return m.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.lt(e,t,i)}),m.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(r)),m.resolve()}getOverlaysForCollection(e,t,r){const s=dt(),i=t.length+1,o=new I(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return m.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new F((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===t&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=dt(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=dt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return m.resolve(a)}lt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.lr.get(s.largestBatchId).delete(r.key);this.lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Py(t,r));let i=this.lr.get(t);i===void 0&&(i=C(),this.lr.set(t,i)),this.lr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(){this.hr=new Z(H.Pr),this.Ir=new Z(H.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,t){const r=new H(e,t);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.dr(new H(e,t))}Ar(e,t){e.forEach(r=>this.removeReference(r,t))}Rr(e){const t=new I(new x([])),r=new H(t,e),s=new H(t,e+1),i=[];return this.Ir.forEachInRange([r,s],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const t=new I(new x([])),r=new H(t,e),s=new H(t,e+1);let i=C();return this.Ir.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new H(e,0),r=this.hr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class H{constructor(e,t){this.key=e,this.gr=t}static Pr(e,t){return I.comparator(e.key,t.key)||N(e.gr,t.gr)}static Tr(e,t){return N(e.gr,t.gr)||I.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.pr=1,this.yr=new Z(H.Pr)}checkEmpty(e){return m.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Sy(i,t,r,s);this.mutationQueue.push(o);for(const a of s)this.yr=this.yr.add(new H(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return m.resolve(o)}lookupMutationBatch(e,t){return m.resolve(this.wr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Sr(r),i=s<0?0:s;return m.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return m.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return m.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new H(t,0),s=new H(t,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([r,s],o=>{const a=this.wr(o.gr);i.push(a)}),m.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Z(N);return t.forEach(s=>{const i=new H(s,0),o=new H(s,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{r=r.add(a.gr)})}),m.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;I.isDocumentKey(i)||(i=i.child(""));const o=new H(new I(i),0);let a=new Z(N);return this.yr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.gr)),!0)},o),m.resolve(this.br(a))}br(e){const t=[];return e.forEach(r=>{const s=this.wr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){M(this.Dr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return m.forEach(t.mutations,s=>{const i=new H(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,t){const r=new H(t,0),s=this.yr.firstAfterOrEqual(r);return m.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,m.resolve()}Dr(e,t){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const t=this.Sr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(e){this.Cr=e,this.docs=function(){return new F(I.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.Cr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return m.resolve(r?r.document.mutableCopy():re.newInvalidDocument(t))}getEntries(e,t){let r=Fe();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():re.newInvalidDocument(s))}),m.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Fe();const o=t.path,a=new I(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||W_(H_(u),r)<=0||(s.has(u.key)||Vs(t,u))&&(i=i.insert(u.key,u.mutableCopy()))}return m.resolve(i)}getAllFromCollectionGroup(e,t,r,s){A()}vr(e,t){return m.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new av(this)}getSize(e){return m.resolve(this.size)}}class av extends ev{constructor(e){super(),this._r=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this._r.addEntry(e,s)):this._r.removeEntry(r)}),m.waitFor(t)}getFromCache(e,t){return this._r.getEntry(e,t)}getAllFromCache(e,t){return this._r.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e){this.persistence=e,this.Fr=new en(t=>Lo(t),xo),this.lastRemoteSnapshotVersion=S.min(),this.highestTargetId=0,this.Mr=0,this.Or=new jo,this.targetCount=0,this.Nr=Ht.On()}forEachTarget(e,t){return this.Fr.forEach((r,s)=>t(s)),m.resolve()}getLastRemoteSnapshotVersion(e){return m.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return m.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),m.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Mr&&(this.Mr=t),m.resolve()}kn(e){this.Fr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Nr=new Ht(t),this.highestTargetId=t),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,t){return this.kn(t),this.targetCount+=1,m.resolve()}updateTargetData(e,t){return this.kn(t),m.resolve()}removeTargetData(e,t){return this.Fr.delete(t.target),this.Or.Rr(t.targetId),this.targetCount-=1,m.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),m.waitFor(i).next(()=>s)}getTargetCount(e){return m.resolve(this.targetCount)}getTargetData(e,t){const r=this.Fr.get(t)||null;return m.resolve(r)}addMatchingKeys(e,t,r){return this.Or.Er(t,r),m.resolve()}removeMatchingKeys(e,t,r){this.Or.Ar(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),m.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Or.Rr(t),m.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Or.mr(t);return m.resolve(r)}containsKey(e,t){return m.resolve(this.Or.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e,t){this.Br={},this.overlays={},this.Lr=new Do(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new cv(this),this.indexManager=new Xy,this.remoteDocumentCache=function(s){return new ov(s)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new Yy(t),this.Kr=new rv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new sv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Br[e.toKey()];return r||(r=new iv(t,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,t,r){y("MemoryPersistence","Starting transaction:",e);const s=new uv(this.Lr.next());return this.referenceDelegate.$r(),r(s).next(i=>this.referenceDelegate.Ur(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Wr(e,t){return m.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,t)))}}class uv extends K_{constructor(e){super(),this.currentSequenceNumber=e}}class zo{constructor(e){this.persistence=e,this.Gr=new jo,this.zr=null}static jr(e){return new zo(e)}get Hr(){if(this.zr)return this.zr;throw A()}addReference(e,t,r){return this.Gr.addReference(r,t),this.Hr.delete(r.toString()),m.resolve()}removeReference(e,t,r){return this.Gr.removeReference(r,t),this.Hr.add(r.toString()),m.resolve()}markPotentiallyOrphaned(e,t){return this.Hr.add(t.toString()),m.resolve()}removeTarget(e,t){this.Gr.Rr(t.targetId).forEach(s=>this.Hr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Hr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}$r(){this.zr=new Set}Ur(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return m.forEach(this.Hr,r=>{const s=I.fromPath(r);return this.Jr(e,s).next(i=>{i||t.removeEntry(s,S.min())})}).next(()=>(this.zr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Jr(e,t).next(r=>{r?this.Hr.delete(t.toString()):this.Hr.add(t.toString())})}Qr(e){return 0}Jr(e,t){return m.or([()=>m.resolve(this.Gr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Wr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.ki=r,this.qi=s}static Qi(e,t){let r=C(),s=C();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ho(e,t.fromCache,r,s)}}/**
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
 */class hv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class dv{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,t){this.Gi=e,this.indexManager=t,this.Ki=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.zi(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ji(e,t,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new hv;return this.Hi(e,t,o).next(a=>{if(i.result=a,this.$i)return this.Ji(e,t,o,a.size)})}).next(()=>i.result)}Ji(e,t,r,s){return r.documentReadCount<this.Ui?(ln()<=b.DEBUG&&y("QueryEngine","SDK will not create cache indexes for query:",Ct(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),m.resolve()):(ln()<=b.DEBUG&&y("QueryEngine","Query:",Ct(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Wi*s?(ln()<=b.DEBUG&&y("QueryEngine","The SDK decides to create cache indexes for query:",Ct(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Re(t))):m.resolve())}zi(e,t){if(mc(t))return m.resolve(null);let r=Re(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Ui(t,null,"F"),r=Re(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=C(...i);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Yi(t,a);return this.Zi(t,l,o,c.readTime)?this.zi(e,Ui(t,null,"F")):this.Xi(e,l,t,c)}))})))}ji(e,t,r,s){return mc(t)||s.isEqual(S.min())?m.resolve(null):this.Gi.getDocuments(e,r).next(i=>{const o=this.Yi(t,i);return this.Zi(t,o,r,s)?m.resolve(null):(ln()<=b.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ct(t)),this.Xi(e,o,t,z_(s,-1)).next(a=>a))})}Yi(e,t){let r=new Z(fh(e));return t.forEach((s,i)=>{Vs(e,i)&&(r=r.add(i))}),r}Zi(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Hi(e,t,r){return ln()<=b.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",Ct(t)),this.Gi.getDocumentsMatchingQuery(e,t,Je.min(),r)}Xi(e,t,r,s){return this.Gi.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e,t,r,s){this.persistence=e,this.es=t,this.serializer=s,this.ts=new F(N),this.ns=new en(i=>Lo(i),xo),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nv(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ts))}}function pv(n,e,t,r){return new fv(n,e,t,r)}async function Oh(n,e){const t=P(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.os(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=C();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return t.localDocuments.getDocuments(r,c).next(l=>({_s:l,removedBatchIds:o,addedBatchIds:a}))})})}function mv(n,e){const t=P(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.ss.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let f=m.resolve();return d.forEach(E=>{f=f.next(()=>u.getEntry(c,E)).next(T=>{const v=l.docVersions.get(E);M(v!==null),T.version.compareTo(v)<0&&(h.applyToRemoteDocument(T,l),T.isValidDocument()&&(T.setReadTime(l.commitVersion),u.addEntry(T)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=C();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Mh(n){const e=P(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.qr.getLastRemoteSnapshotVersion(t))}function gv(n,e){const t=P(n),r=e.snapshotVersion;let s=t.ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.ss.newChangeBuffer({trackRemovals:!0});s=t.ts;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(t.qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>t.qr.addMatchingKeys(i,u.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(ae.EMPTY_BYTE_STRING,S.min()).withLastLimboFreeSnapshotVersion(S.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),s=s.insert(h,f),function(T,v,O){return T.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=3e8?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(d,f,u)&&a.push(t.qr.updateTargetData(i,f))});let c=Fe(),l=C();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(_v(i,o,e.documentUpdates).next(u=>{c=u.us,l=u.cs})),!r.isEqual(S.min())){const u=t.qr.getLastRemoteSnapshotVersion(i).next(h=>t.qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return m.waitFor(a).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(t.ts=s,i))}function _v(n,e,t){let r=C(),s=C();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=Fe();return t.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(S.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{us:o,cs:s}})}function yv(n,e){const t=P(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function vv(n,e){const t=P(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.qr.getTargetData(r,e).next(i=>i?(s=i,m.resolve(s)):t.qr.allocateTargetId(r).next(o=>(s=new He(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.ts=t.ts.insert(r.targetId,r),t.ns.set(e,r.targetId)),r})}async function zi(n,e,t){const r=P(n),s=r.ts.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ar(o))throw o;y("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(s.target)}function Sc(n,e,t){const r=P(n);let s=S.min(),i=C();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=P(c),d=h.ns.get(u);return d!==void 0?m.resolve(h.ts.get(d)):h.qr.getTargetData(l,u)}(r,o,Re(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,t?s:S.min(),t?i:C())).next(a=>(Ev(r,hy(e),a),{documents:a,ls:i})))}function Ev(n,e,t){let r=n.rs.get(e)||S.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.rs.set(e,r)}class Pc{constructor(){this.activeTargetIds=_y()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Iv{constructor(){this.eo=new Pc,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,t,r){this.no[e]=t}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new Pc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Tv{ro(e){}shutdown(){}}/**
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
 */class Cc{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ar=null;function ci(){return Ar===null?Ar=function(){return 268435456+Math.round(2147483648*Math.random())}():Ar++,"0x"+Ar.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te="WebChannelConnection";class Rv extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+t.host,this.fo=`projects/${s}/databases/${i}`,this.po=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get yo(){return!1}wo(t,r,s,i,o){const a=ci(),c=this.So(t,r);y("RestConnection",`Sending RPC '${t}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(l,i,o),this.Do(t,c,l,s).then(u=>(y("RestConnection",`Received RPC '${t}' ${a}: `,u),u),u=>{throw qt("RestConnection",`RPC '${t}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}Co(t,r,s,i,o,a){return this.wo(t,r,s,i,o)}bo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Zt}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>t[o]=i),s&&s.headers.forEach((i,o)=>t[o]=i)}So(t,r){const s=wv[t];return`${this.mo}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,t,r,s){const i=ci();return new Promise((o,a)=>{const c=new V_;c.setWithCredentials(!0),c.listenOnce(N_.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case oi.NO_ERROR:const u=c.getResponseJson();y(te,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case oi.TIMEOUT:y(te,`RPC '${e}' ${i} timed out`),a(new _(p.DEADLINE_EXCEEDED,"Request time out"));break;case oi.HTTP_ERROR:const h=c.getStatus();if(y(te,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const E=function(v){const O=v.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(O)>=0?O:p.UNKNOWN}(f.status);a(new _(E,f.message))}else a(new _(p.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new _(p.UNAVAILABLE,"Connection failed."));break;default:A()}}finally{y(te,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);y(te,`RPC '${e}' ${i} sending request:`,s),c.send(t,"POST",l,r,15)})}vo(e,t,r){const s=ci(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=b_(),a=k_(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.bo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const u=i.join("");y(te,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,f=!1;const E=new Av({co:v=>{f?y(te,`Not sending because RPC '${e}' stream ${s} is closed:`,v):(d||(y(te,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),y(te,`RPC '${e}' stream ${s} sending:`,v),h.send(v))},lo:()=>h.close()}),T=(v,O,B)=>{v.listen(O,K=>{try{B(K)}catch(fe){setTimeout(()=>{throw fe},0)}})};return T(h,Ir.EventType.OPEN,()=>{f||y(te,`RPC '${e}' stream ${s} transport opened.`)}),T(h,Ir.EventType.CLOSE,()=>{f||(f=!0,y(te,`RPC '${e}' stream ${s} transport closed`),E.Ro())}),T(h,Ir.EventType.ERROR,v=>{f||(f=!0,qt(te,`RPC '${e}' stream ${s} transport errored:`,v),E.Ro(new _(p.UNAVAILABLE,"The operation could not be completed")))}),T(h,Ir.EventType.MESSAGE,v=>{var O;if(!f){const B=v.data[0];M(!!B);const K=B,fe=K.error||((O=K[0])===null||O===void 0?void 0:O.error);if(fe){y(te,`RPC '${e}' stream ${s} received error:`,fe);const it=fe.status;let ve=function(on){const pr=q[on];if(pr!==void 0)return Rh(pr)}(it),ot=fe.message;ve===void 0&&(ve=p.INTERNAL,ot="Unknown error status: "+it+" with message "+fe.message),f=!0,E.Ro(new _(ve,ot)),h.close()}else y(te,`RPC '${e}' stream ${s} received:`,B),E.Vo(B)}}),T(a,D_.STAT_EVENT,v=>{v.stat===sc.PROXY?y(te,`RPC '${e}' stream ${s} detected buffering proxy`):v.stat===sc.NOPROXY&&y(te,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{E.Ao()},0),E}}function li(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(n){return new Ly(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e,t,r=1e3,s=1.5,i=6e4){this.si=e,this.timerId=t,this.Fo=r,this.Mo=s,this.xo=i,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const t=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,t-r);s>0&&y("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Oo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e,t,r,s,i,o,a,c){this.si=e,this.Ko=r,this.$o=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new Lh(e,t)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,t){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():t&&t.code===p.RESOURCE_EXHAUSTED?(xe(t.toString()),xe("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):t&&t.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(t)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),t=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Uo===t&&this.s_(r,s)},r=>{e(()=>{const s=new _(p.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(s)})})}s_(e,t){const r=this.i_(this.Uo);this.stream=this.__(e,t),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(s=>{r(()=>this.o_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return t=>{this.si.enqueueAndForget(()=>this.Uo===e?t():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Sv extends xh{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}__(e,t){return this.connection.vo("Listen",e,t)}onMessage(e){this.zo.reset();const t=Uy(this.serializer,e),r=function(i){if(!("targetChange"in i))return S.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?S.min():o.readTime?Se(o.readTime):S.min()}(e);return this.listener.a_(t,r)}u_(e){const t={};t.database=ji(this.serializer),t.addTarget=function(i,o){let a;const c=o.target;if(a=xi(c)?{documents:$y(i,c)}:{query:jy(i,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Ch(i,o.resumeToken);const l=Bi(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(S.min())>0){a.readTime=os(i,o.snapshotVersion.toTimestamp());const l=Bi(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=Hy(this.serializer,e);r&&(t.labels=r),this.e_(t)}c_(e){const t={};t.database=ji(this.serializer),t.removeTarget=e,this.e_(t)}}class Pv extends xh{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,t){return this.connection.vo("Write",e,t)}onMessage(e){if(M(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const t=qy(e.writeResults,e.commitTime),r=Se(e.commitTime);return this.listener.I_(r,t)}return M(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=ji(this.serializer),this.e_(e)}P_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>By(this.serializer,r))};this.e_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.d_=!1}A_(){if(this.d_)throw new _(p.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,t,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.wo(e,t,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new _(p.UNKNOWN,s.toString())})}Co(e,t,r,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(e,t,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new _(p.UNKNOWN,i.toString())})}terminate(){this.d_=!0}}class bv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(xe(t),this.f_=!1):y("OnlineStateTracker",t)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=i,this.F_.ro(o=>{r.enqueueAndForget(async()=>{St(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=P(c);l.C_.add(4),await hr(l),l.M_.set("Unknown"),l.C_.delete(4),await Fs(l)}(this))})}),this.M_=new bv(r,s)}}async function Fs(n){if(St(n))for(const e of n.v_)await e(!0)}async function hr(n){for(const e of n.v_)await e(!1)}function Fh(n,e){const t=P(n);t.D_.has(e.targetId)||(t.D_.set(e.targetId,e),Ko(t)?Go(t):tn(t).Ho()&&Wo(t,e))}function Uh(n,e){const t=P(n),r=tn(t);t.D_.delete(e),r.Ho()&&Bh(t,e),t.D_.size===0&&(r.Ho()?r.Zo():St(t)&&t.M_.set("Unknown"))}function Wo(n,e){if(n.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(S.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}tn(n).u_(e)}function Bh(n,e){n.x_.Oe(e),tn(n).c_(e)}function Go(n){n.x_=new Dy({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>n.D_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),tn(n).start(),n.M_.g_()}function Ko(n){return St(n)&&!tn(n).jo()&&n.D_.size>0}function St(n){return P(n).C_.size===0}function qh(n){n.x_=void 0}async function Nv(n){n.D_.forEach((e,t)=>{Wo(n,e)})}async function Dv(n,e){qh(n),Ko(n)?(n.M_.w_(e),Go(n)):n.M_.set("Unknown")}async function Vv(n,e,t){if(n.M_.set("Online"),e instanceof Ph&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.D_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.D_.delete(a),s.x_.removeTarget(a))}(n,e)}catch(r){y("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await as(n,r)}else if(e instanceof xr?n.x_.$e(e):e instanceof Sh?n.x_.Je(e):n.x_.Ge(e),!t.isEqual(S.min()))try{const r=await Mh(n.localStore);t.compareTo(r)>=0&&await function(i,o){const a=i.x_.it(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.D_.get(l);u&&i.D_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.D_.get(c);if(!u)return;i.D_.set(c,u.withResumeToken(ae.EMPTY_BYTE_STRING,u.snapshotVersion)),Bh(i,c);const h=new He(u.target,c,l,u.sequenceNumber);Wo(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(r){y("RemoteStore","Failed to raise snapshot:",r),await as(n,r)}}async function as(n,e,t){if(!ar(e))throw e;n.C_.add(1),await hr(n),n.M_.set("Offline"),t||(t=()=>Mh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await t(),n.C_.delete(1),await Fs(n)})}function $h(n,e){return e().catch(t=>as(n,t,e))}async function Us(n){const e=P(n),t=Ze(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;Ov(e);)try{const s=await yv(e.localStore,r);if(s===null){e.b_.length===0&&t.Zo();break}r=s.batchId,Mv(e,s)}catch(s){await as(e,s)}jh(e)&&zh(e)}function Ov(n){return St(n)&&n.b_.length<10}function Mv(n,e){n.b_.push(e);const t=Ze(n);t.Ho()&&t.h_&&t.P_(e.mutations)}function jh(n){return St(n)&&!Ze(n).jo()&&n.b_.length>0}function zh(n){Ze(n).start()}async function Lv(n){Ze(n).E_()}async function xv(n){const e=Ze(n);for(const t of n.b_)e.P_(t.mutations)}async function Fv(n,e,t){const r=n.b_.shift(),s=Bo.from(r,e,t);await $h(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Us(n)}async function Uv(n,e){e&&Ze(n).h_&&await async function(r,s){if(function(o){return by(o)&&o!==p.ABORTED}(s.code)){const i=r.b_.shift();Ze(r).Yo(),await $h(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Us(r)}}(n,e),jh(n)&&zh(n)}async function bc(n,e){const t=P(n);t.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");const r=St(t);t.C_.add(3),await hr(t),r&&t.M_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.C_.delete(3),await Fs(t)}async function Bv(n,e){const t=P(n);e?(t.C_.delete(2),await Fs(t)):e||(t.C_.add(2),await hr(t),t.M_.set("Unknown"))}function tn(n){return n.O_||(n.O_=function(t,r,s){const i=P(t);return i.A_(),new Sv(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{ho:Nv.bind(null,n),Io:Dv.bind(null,n),a_:Vv.bind(null,n)}),n.v_.push(async e=>{e?(n.O_.Yo(),Ko(n)?Go(n):n.M_.set("Unknown")):(await n.O_.stop(),qh(n))})),n.O_}function Ze(n){return n.N_||(n.N_=function(t,r,s){const i=P(t);return i.A_(),new Pv(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{ho:Lv.bind(null,n),Io:Uv.bind(null,n),T_:xv.bind(null,n),I_:Fv.bind(null,n)}),n.v_.push(async e=>{e?(n.N_.Yo(),await Us(n)):(await n.N_.stop(),n.b_.length>0&&(y("RemoteStore",`Stopping write stream with ${n.b_.length} pending writes`),n.b_=[]))})),n.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Oe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,a=new Qo(e,t,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new _(p.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yo(n,e){if(xe("AsyncQueue",`${e}: ${n}`),ar(n))return new _(p.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.comparator=e?(t,r)=>e(t,r)||I.comparator(t.key,r.key):(t,r)=>I.comparator(t.key,r.key),this.keyedMap=_n(),this.sortedSet=new F(this.comparator)}static emptySet(e){return new xt(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof xt)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new xt;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(){this.B_=new F(I.comparator)}track(e){const t=e.doc.key,r=this.B_.get(t);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(t,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(t):e.type===1&&r.type===2?this.B_=this.B_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):A():this.B_=this.B_.insert(t,e)}L_(){const e=[];return this.B_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Wt{constructor(e,t,r,s,i,o,a,c,l){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new Wt(e,t,xt.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ds(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(){this.k_=void 0,this.listeners=[]}}class $v{constructor(){this.queries=new en(e=>dh(e),Ds),this.onlineState="Unknown",this.q_=new Set}}async function Hh(n,e){const t=P(n),r=e.query;let s=!1,i=t.queries.get(r);if(i||(s=!0,i=new qv),s)try{i.k_=await t.onListen(r)}catch(o){const a=Yo(o,`Initialization of query '${Ct(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,i),i.listeners.push(e),e.Q_(t.onlineState),i.k_&&e.K_(i.k_)&&Jo(t)}async function Wh(n,e){const t=P(n),r=e.query;let s=!1;const i=t.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return t.queries.delete(r),t.onUnlisten(r)}function jv(n,e){const t=P(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const a of o.listeners)a.K_(s)&&(r=!0);o.k_=s}}r&&Jo(t)}function zv(n,e,t){const r=P(n),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(t);r.queries.delete(e)}function Jo(n){n.q_.forEach(e=>{e.next()})}class Gh{constructor(e,t,r){this.query=e,this.U_=t,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Wt(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.W_?this.z_(e)&&(this.U_.next(e),t=!0):this.j_(e,this.onlineState)&&(this.H_(e),t=!0),this.G_=e,t}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let t=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),t=!0),t}j_(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const t=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}H_(e){e=Wt.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e){this.key=e}}class Qh{constructor(e){this.key=e}}class Hv{constructor(e,t){this.query=e,this.ia=t,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=C(),this.mutatedKeys=C(),this._a=fh(e),this.aa=new xt(this._a)}get ua(){return this.ia}ca(e,t){const r=t?t.la:new kc,s=t?t.aa:this.aa;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),f=Vs(this.query,h)?h:null,E=!!d&&this.mutatedKeys.has(d.key),T=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let v=!1;d&&f?d.data.isEqual(f.data)?E!==T&&(r.track({type:3,doc:f}),v=!0):this.ha(d,f)||(r.track({type:2,doc:f}),v=!0,(c&&this._a(f,c)>0||l&&this._a(f,l)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),v=!0):d&&!f&&(r.track({type:1,doc:d}),v=!0,(c||l)&&(a=!0)),v&&(f?(o=o.add(f),i=T?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{aa:o,la:r,Zi:a,mutatedKeys:i}}ha(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const o=e.la.L_();o.sort((u,h)=>function(f,E){const T=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return A()}};return T(f)-T(E)}(u.type,h.type)||this._a(u.doc,h.doc)),this.Pa(r),s=s!=null&&s;const a=t&&!s?this.Ia():[],c=this.oa.size===0&&this.current&&!s?1:0,l=c!==this.sa;return this.sa=c,o.length!==0||l?{snapshot:new Wt(this.query,e.aa,i,o,e.mutatedKeys,c===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new kc,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(t=>this.ia=this.ia.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.ia=this.ia.delete(t)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=C(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const t=[];return e.forEach(r=>{this.oa.has(r)||t.push(new Qh(r))}),this.oa.forEach(r=>{e.has(r)||t.push(new Kh(r))}),t}da(e){this.ia=e.ls,this.oa=C();const t=this.ca(e.documents);return this.applyChanges(t,!0)}Aa(){return Wt.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class Wv{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Gv{constructor(e){this.key=e,this.Ra=!1}}class Kv{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new en(a=>dh(a),Ds),this.fa=new Map,this.ga=new Set,this.pa=new F(I.comparator),this.ya=new Map,this.wa=new jo,this.Sa={},this.ba=new Map,this.Da=Ht.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function Qv(n,e){const t=iE(n);let r,s;const i=t.ma.get(e);if(i)r=i.targetId,t.sharedClientState.addLocalQueryTarget(r),s=i.view.Aa();else{const o=await vv(t.localStore,Re(e)),a=t.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await Yv(t,e,r,a==="current",o.resumeToken),t.isPrimaryClient&&Fh(t.remoteStore,o)}return s}async function Yv(n,e,t,r,s){n.va=(h,d,f)=>async function(T,v,O,B){let K=v.view.ca(O);K.Zi&&(K=await Sc(T.localStore,v.query,!1).then(({documents:ot})=>v.view.ca(ot,K)));const fe=B&&B.targetChanges.get(v.targetId),it=B&&B.targetMismatches.get(v.targetId)!=null,ve=v.view.applyChanges(K,T.isPrimaryClient,fe,it);return Dc(T,v.targetId,ve.Ta),ve.snapshot}(n,h,d,f);const i=await Sc(n.localStore,e,!0),o=new Hv(e,i.ls),a=o.ca(i.documents),c=ur.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),l=o.applyChanges(a,n.isPrimaryClient,c);Dc(n,t,l.Ta);const u=new Wv(e,t,o);return n.ma.set(e,u),n.fa.has(t)?n.fa.get(t).push(e):n.fa.set(t,[e]),l.snapshot}async function Jv(n,e){const t=P(n),r=t.ma.get(e),s=t.fa.get(r.targetId);if(s.length>1)return t.fa.set(r.targetId,s.filter(i=>!Ds(i,e))),void t.ma.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await zi(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),Uh(t.remoteStore,r.targetId),Hi(t,r.targetId)}).catch(or)):(Hi(t,r.targetId),await zi(t.localStore,r.targetId,!0))}async function Xv(n,e,t){const r=oE(n);try{const s=await function(o,a){const c=P(o),l=z.now(),u=a.reduce((f,E)=>f.add(E.key),C());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",f=>{let E=Fe(),T=C();return c.ss.getEntries(f,u).next(v=>{E=v,E.forEach((O,B)=>{B.isValidDocument()||(T=T.add(O))})}).next(()=>c.localDocuments.getOverlayedDocuments(f,E)).next(v=>{h=v;const O=[];for(const B of a){const K=Ay(B,h.get(B.key).overlayedDocument);K!=null&&O.push(new st(B.key,K,sh(K.value.mapValue),me.exists(!0)))}return c.mutationQueue.addMutationBatch(f,l,O,a)}).next(v=>{d=v;const O=v.applyToLocalDocumentSet(h,T);return c.documentOverlayCache.saveOverlays(f,v.batchId,O)})}).then(()=>({batchId:d.batchId,changes:mh(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.Sa[o.currentUser.toKey()];l||(l=new F(N)),l=l.insert(a,c),o.Sa[o.currentUser.toKey()]=l}(r,s.batchId,t),await dr(r,s.changes),await Us(r.remoteStore)}catch(s){const i=Yo(s,"Failed to persist write");t.reject(i)}}async function Yh(n,e){const t=P(n);try{const r=await gv(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.ya.get(i);o&&(M(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ra=!0:s.modifiedDocuments.size>0?M(o.Ra):s.removedDocuments.size>0&&(M(o.Ra),o.Ra=!1))}),await dr(t,r,e)}catch(r){await or(r)}}function Nc(n,e,t){const r=P(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.ma.forEach((i,o)=>{const a=o.view.Q_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=P(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.listeners)d.Q_(a)&&(l=!0)}),l&&Jo(c)}(r.eventManager,e),s.length&&r.Va.a_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Zv(n,e,t){const r=P(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.ya.get(e),i=s&&s.key;if(i){let o=new F(I.comparator);o=o.insert(i,re.newNoDocument(i,S.min()));const a=C().add(i),c=new Ls(S.min(),new Map,new F(N),o,a);await Yh(r,c),r.pa=r.pa.remove(i),r.ya.delete(e),Xo(r)}else await zi(r.localStore,e,!1).then(()=>Hi(r,e,t)).catch(or)}async function eE(n,e){const t=P(n),r=e.batch.batchId;try{const s=await mv(t.localStore,e);Xh(t,r,null),Jh(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await dr(t,s)}catch(s){await or(s)}}async function tE(n,e,t){const r=P(n);try{const s=await function(o,a){const c=P(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(M(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);Xh(r,e,t),Jh(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await dr(r,s)}catch(s){await or(s)}}function Jh(n,e){(n.ba.get(e)||[]).forEach(t=>{t.resolve()}),n.ba.delete(e)}function Xh(n,e,t){const r=P(n);let s=r.Sa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Sa[r.currentUser.toKey()]=s}}function Hi(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.fa.get(e))n.ma.delete(r),t&&n.Va.Fa(r,t);n.fa.delete(e),n.isPrimaryClient&&n.wa.Rr(e).forEach(r=>{n.wa.containsKey(r)||Zh(n,r)})}function Zh(n,e){n.ga.delete(e.path.canonicalString());const t=n.pa.get(e);t!==null&&(Uh(n.remoteStore,t),n.pa=n.pa.remove(e),n.ya.delete(t),Xo(n))}function Dc(n,e,t){for(const r of t)r instanceof Kh?(n.wa.addReference(r.key,e),nE(n,r)):r instanceof Qh?(y("SyncEngine","Document no longer in limbo: "+r.key),n.wa.removeReference(r.key,e),n.wa.containsKey(r.key)||Zh(n,r.key)):A()}function nE(n,e){const t=e.key,r=t.path.canonicalString();n.pa.get(t)||n.ga.has(r)||(y("SyncEngine","New document in limbo: "+t),n.ga.add(r),Xo(n))}function Xo(n){for(;n.ga.size>0&&n.pa.size<n.maxConcurrentLimboResolutions;){const e=n.ga.values().next().value;n.ga.delete(e);const t=new I(x.fromString(e)),r=n.Da.next();n.ya.set(r,new Gv(t)),n.pa=n.pa.insert(t,r),Fh(n.remoteStore,new He(Re(Fo(t.path)),r,"TargetPurposeLimboResolution",Do._e))}}async function dr(n,e,t){const r=P(n),s=[],i=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,c)=>{o.push(r.va(c,e,t).then(l=>{if((l||t)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=Ho.Qi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.Va.a_(s),await async function(c,l){const u=P(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>m.forEach(l,d=>m.forEach(d.ki,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>m.forEach(d.qi,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!ar(h))throw h;y("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const f=u.ts.get(d),E=f.snapshotVersion,T=f.withLastLimboFreeSnapshotVersion(E);u.ts=u.ts.insert(d,T)}}}(r.localStore,i))}async function rE(n,e){const t=P(n);if(!t.currentUser.isEqual(e)){y("SyncEngine","User change. New user:",e.toKey());const r=await Oh(t.localStore,e);t.currentUser=e,function(i,o){i.ba.forEach(a=>{a.forEach(c=>{c.reject(new _(p.CANCELLED,o))})}),i.ba.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await dr(t,r._s)}}function sE(n,e){const t=P(n),r=t.ya.get(e);if(r&&r.Ra)return C().add(r.key);{let s=C();const i=t.fa.get(e);if(!i)return s;for(const o of i){const a=t.ma.get(o);s=s.unionWith(a.view.ua)}return s}}function iE(n){const e=P(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Yh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=sE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Zv.bind(null,e),e.Va.a_=jv.bind(null,e.eventManager),e.Va.Fa=zv.bind(null,e.eventManager),e}function oE(n){const e=P(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=eE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=tE.bind(null,e),e}class Vc{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=xs(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return pv(this.persistence,new dv,e.initialUser,this.serializer)}createPersistence(e){return new lv(zo.jr,this.serializer)}createSharedClientState(e){return new Iv}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class aE{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Nc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=rE.bind(null,this.syncEngine),await Bv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new $v}()}createDatastore(e){const t=xs(e.databaseInfo.databaseId),r=function(i){return new Rv(i)}(e.databaseInfo);return function(i,o,a,c){return new Cv(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,o,a){return new kv(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>Nc(this.syncEngine,t,0),function(){return Cc.D()?new Cc:new Tv}())}createSyncEngine(e,t){return function(s,i,o,a,c,l,u){const h=new Kv(s,i,o,a,c,l);return u&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(t){const r=P(t);y("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await hr(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ed{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):xe("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(e,t,r,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=ne.UNAUTHENTICATED,this.clientId=th.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{y("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(y("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new _(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Oe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Yo(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ui(n,e){n.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Oh(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Oc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await uE(n);y("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await e.initialize(t,r),n.setCredentialChangeListener(s=>bc(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,i)=>bc(e.remoteStore,i)),n._onlineComponents=e}function lE(n){return n.name==="FirebaseError"?n.code===p.FAILED_PRECONDITION||n.code===p.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function uE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){y("FirestoreClient","Using user provided OfflineComponentProvider");try{await ui(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!lE(t))throw t;qt("Error using user provided cache. Falling back to memory cache: "+t),await ui(n,new Vc)}}else y("FirestoreClient","Using default OfflineComponentProvider"),await ui(n,new Vc);return n._offlineComponents}async function td(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(y("FirestoreClient","Using user provided OnlineComponentProvider"),await Oc(n,n._uninitializedComponentsProvider._online)):(y("FirestoreClient","Using default OnlineComponentProvider"),await Oc(n,new aE))),n._onlineComponents}function hE(n){return td(n).then(e=>e.syncEngine)}async function nd(n){const e=await td(n),t=e.eventManager;return t.onListen=Qv.bind(null,e.syncEngine),t.onUnlisten=Jv.bind(null,e.syncEngine),t}function dE(n,e,t={}){const r=new Oe;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new ed({next:d=>{o.enqueueAndForget(()=>Wh(i,h));const f=d.docs.has(a);!f&&d.fromCache?l.reject(new _(p.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&c&&c.source==="server"?l.reject(new _(p.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new Gh(Fo(a.path),u,{includeMetadataChanges:!0,J_:!0});return Hh(i,h)}(await nd(n),n.asyncQueue,e,t,r)),r.promise}function fE(n,e,t={}){const r=new Oe;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new ed({next:d=>{o.enqueueAndForget(()=>Wh(i,h)),d.fromCache&&c.source==="server"?l.reject(new _(p.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new Gh(a,u,{includeMetadataChanges:!0,J_:!0});return Hh(i,h)}(await nd(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function rd(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(n,e,t){if(!t)throw new _(p.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function pE(n,e,t,r){if(e===!0&&r===!0)throw new _(p.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Lc(n){if(!I.isDocumentKey(n))throw new _(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function xc(n){if(I.isDocumentKey(n))throw new _(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Bs(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":A()}function Ce(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new _(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Bs(n);throw new _(p.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new _(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new _(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}pE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=rd((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new _(p.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new _(p.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new _(p.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class qs{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new _(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new _(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fc(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new M_;switch(r.type){case"firstParty":return new U_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new _(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Mc.get(t);r&&(y("ComponentProvider","Removing Datastore"),Mc.delete(t),r.terminate())}(this),Promise.resolve()}}function mE(n,e,t,r={}){var s;const i=(n=Ce(n,qs))._getSettings(),o=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&qt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=ne.MOCK_USER;else{a=Hd(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new _(p.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ne(l)}n._authCredentials=new L_(new eh(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new nn(this.firestore,e,this._query)}}class le{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ye(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new le(this.firestore,e,this._key)}}class Ye extends nn{constructor(e,t,r){super(e,t,Fo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new le(this.firestore,null,new I(e))}withConverter(e){return new Ye(this.firestore,e,this._path)}}function gE(n,e,...t){if(n=ee(n),sd("collection","path",e),n instanceof qs){const r=x.fromString(e,...t);return xc(r),new Ye(n,null,r)}{if(!(n instanceof le||n instanceof Ye))throw new _(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(x.fromString(e,...t));return xc(r),new Ye(n.firestore,null,r)}}function Hn(n,e,...t){if(n=ee(n),arguments.length===1&&(e=th.newId()),sd("doc","path",e),n instanceof qs){const r=x.fromString(e,...t);return Lc(r),new le(n,null,new I(r))}{if(!(n instanceof le||n instanceof Ye))throw new _(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(x.fromString(e,...t));return Lc(r),new le(n.firestore,n instanceof Ye?n.converter:null,new I(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new Lh(this,"async_queue_retry"),this.iu=()=>{const t=li();t&&y("AsyncQueue","Visibility state changed to "+t.visibilityState),this.zo.Qo()};const e=li();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const t=li();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const t=new Oe;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!ar(e))throw e;y("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const t=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw xe("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.tu=!1,r))));return this.Ja=t,t}enqueueAfterDelay(e,t,r){this.su(),this.ru.indexOf(e)>-1&&(t=0);const s=Qo.createAndSchedule(this,e,t,r,i=>this.au(i));return this.Xa.push(s),s}su(){this.eu&&A()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const t of this.Xa)if(t.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Xa)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const t=this.Xa.indexOf(e);this.Xa.splice(t,1)}}class rn extends qs{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=function(){return new _E}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||id(this),this._firestoreClient.terminate()}}function yE(n,e){const t=typeof n=="object"?n:_l(),r=typeof n=="string"?n:e||"(default)",s=Xi(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=jd("firestore");i&&mE(s,...i)}return s}function Zo(n){return n._firestoreClient||id(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function id(n){var e,t,r;const s=n._freezeSettings(),i=function(a,c,l,u){return new J_(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,rd(u.experimentalLongPollingOptions),u.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new cE(n._authCredentials,n._appCheckCredentials,n._queue,i),!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Gt(ae.fromBase64String(e))}catch(t){throw new _(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Gt(ae.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new _(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new J(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new _(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new _(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return N(this._lat,e._lat)||N(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE=/^__.*__$/;class EE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new st(e,this.data,this.fieldMask,t,this.fieldTransforms):new lr(e,this.data,t,this.fieldTransforms)}}class od{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new st(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function ad(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw A()}}class na{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Pu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new na(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Tu({path:r,du:!1});return s.Au(e),s}Ru(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Tu({path:r,du:!1});return s.Pu(),s}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return cs(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(ad(this.Iu)&&vE.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class IE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||xs(e)}pu(e,t,r,s=!1){return new na({Iu:e,methodName:t,gu:r,path:J.emptyPath(),du:!1,fu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ra(n){const e=n._freezeSettings(),t=xs(n._databaseId);return new IE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function TE(n,e,t,r,s,i={}){const o=n.pu(i.merge||i.mergeFields?2:0,e,t,s);sa("Data must be an object, but it was:",o,r);const a=cd(r,o);let c,l;if(i.merge)c=new he(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=Wi(e,h,t);if(!o.contains(d))throw new _(p.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);ud(u,d)||u.push(d)}c=new he(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new EE(new ue(a),c,l)}class js extends ea{_toFieldTransform(e){if(e.Iu!==2)throw e.Iu===1?e.mu(`${this._methodName}() can only appear at the top level of your update data`):e.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof js}}function wE(n,e,t,r){const s=n.pu(1,e,t);sa("Data must be an object, but it was:",s,r);const i=[],o=ue.empty();Rt(r,(c,l)=>{const u=ia(e,c,t);l=ee(l);const h=s.Ru(u);if(l instanceof js)i.push(u);else{const d=fr(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new he(i);return new od(o,a,s.fieldTransforms)}function AE(n,e,t,r,s,i){const o=n.pu(1,e,t),a=[Wi(e,r,t)],c=[s];if(i.length%2!=0)throw new _(p.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Wi(e,i[d])),c.push(i[d+1]);const l=[],u=ue.empty();for(let d=a.length-1;d>=0;--d)if(!ud(l,a[d])){const f=a[d];let E=c[d];E=ee(E);const T=o.Ru(f);if(E instanceof js)l.push(f);else{const v=fr(E,T);v!=null&&(l.push(f),u.set(f,v))}}const h=new he(l);return new od(u,h,o.fieldTransforms)}function RE(n,e,t,r=!1){return fr(t,n.pu(r?4:3,e))}function fr(n,e){if(ld(n=ee(n)))return sa("Unsupported field value:",e,n),cd(n,e);if(n instanceof ea)return function(r,s){if(!ad(s.Iu))throw s.mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=fr(a,s.Vu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=ee(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return yy(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=z.fromDate(r);return{timestampValue:os(s.serializer,i)}}if(r instanceof z){const i=new z(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:os(s.serializer,i)}}if(r instanceof ta)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Gt)return{bytesValue:Ch(s.serializer,r._byteString)};if(r instanceof le){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:$o(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.mu(`Unsupported field value: ${Bs(r)}`)}(n,e)}function cd(n,e){const t={};return nh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Rt(n,(r,s)=>{const i=fr(s,e.Eu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function ld(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof z||n instanceof ta||n instanceof Gt||n instanceof le||n instanceof ea)}function sa(n,e,t){if(!ld(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Bs(t);throw r==="an object"?e.mu(n+" a custom object"):e.mu(n+" "+r)}}function Wi(n,e,t){if((e=ee(e))instanceof $s)return e._internalPath;if(typeof e=="string")return ia(n,e);throw cs("Field path arguments must be of type string or ",n,!1,void 0,t)}const SE=new RegExp("[~\\*/\\[\\]]");function ia(n,e,t){if(e.search(SE)>=0)throw cs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new $s(...e.split("."))._internalPath}catch{throw cs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function cs(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new _(p.INVALID_ARGUMENT,a+n+c)}function ud(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new PE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(oa("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class PE extends hd{data(){return super.data()}}function oa(n,e){return typeof e=="string"?ia(n,e):e instanceof $s?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new _(p.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class aa{}class bE extends aa{}function kE(n,e,...t){let r=[];e instanceof aa&&r.push(e),r=r.concat(t),function(i){const o=i.filter(c=>c instanceof ca).length,a=i.filter(c=>c instanceof zs).length;if(o>1||o>0&&a>0)throw new _(p.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class zs extends bE{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new zs(e,t,r)}_apply(e){const t=this._parse(e);return dd(e._query,t),new nn(e.firestore,e.converter,Fi(e._query,t))}_parse(e){const t=ra(e.firestore);return function(i,o,a,c,l,u,h){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new _(p.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Bc(h,u);const f=[];for(const E of h)f.push(Uc(c,i,E));d={arrayValue:{values:f}}}else d=Uc(c,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Bc(h,u),d=RE(a,o,h,u==="in"||u==="not-in");return j.create(l,u,d)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function NE(n,e,t){const r=e,s=oa("where",n);return zs._create(s,r,t)}class ca extends aa{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ca(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:ye.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)dd(o,c),o=Fi(o,c)}(e._query,t),new nn(e.firestore,e.converter,Fi(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Uc(n,e,t){if(typeof(t=ee(t))=="string"){if(t==="")throw new _(p.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!hh(e)&&t.indexOf("/")!==-1)throw new _(p.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(x.fromString(t));if(!I.isDocumentKey(r))throw new _(p.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return lc(n,new I(r))}if(t instanceof le)return lc(n,t._key);throw new _(p.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Bs(t)}.`)}function Bc(n,e){if(!Array.isArray(n)||n.length===0)throw new _(p.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function dd(n,e){const t=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new _(p.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new _(p.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class DE{convertValue(e,t="none"){switch(Tt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return $(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(It(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw A()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Rt(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertGeoPoint(e){return new ta($(e.latitude),$(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Oo(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Bn(e));default:return null}}convertTimestamp(e){const t=Xe(e);return new z(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=x.fromString(e);M(Vh(r));const s=new qn(r.get(1),r.get(3)),i=new I(r.popFirst(5));return s.isEqual(t)||xe(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VE(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class fd extends hd{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Fr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(oa("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Fr extends fd{data(e={}){return super.data(e)}}class OE{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new vn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Fr(this._firestore,this._userDataWriter,r.key,r,new vn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new _(p.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new Fr(s._firestore,s._userDataWriter,a.doc.key,a.doc,new vn(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new Fr(s._firestore,s._userDataWriter,a.doc.key,a.doc,new vn(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:ME(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function ME(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return A()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LE(n){n=Ce(n,le);const e=Ce(n.firestore,rn);return dE(Zo(e),n._key).then(t=>BE(e,n,t))}class pd extends DE{constructor(e){super(),this.firestore=e}convertBytes(e){return new Gt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new le(this.firestore,null,t)}}function xE(n){n=Ce(n,nn);const e=Ce(n.firestore,rn),t=Zo(e),r=new pd(e);return CE(n._query),fE(t,n._query).then(s=>new OE(e,r,n,s))}function md(n,e,t){n=Ce(n,le);const r=Ce(n.firestore,rn),s=VE(n.converter,e,t);return la(r,[TE(ra(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,me.none())])}function FE(n,e,t,...r){n=Ce(n,le);const s=Ce(n.firestore,rn),i=ra(s);let o;return o=typeof(e=ee(e))=="string"||e instanceof $s?AE(i,"updateDoc",n._key,e,t,r):wE(i,"updateDoc",n._key,e),la(s,[o.toMutation(n._key,me.exists(!0))])}function UE(n){return la(Ce(n.firestore,rn),[new Uo(n._key,me.none())])}function la(n,e){return function(r,s){const i=new Oe;return r.asyncQueue.enqueueAndForget(async()=>Xv(await hE(r),s,i)),i.promise}(Zo(n),e)}function BE(n,e,t){const r=t.docs.get(e._key),s=new pd(n);return new fd(n,s,e._key,r,new vn(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){Zt=s})(Qt),Ut(new gt("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new rn(new x_(r.getProvider("auth-internal")),new q_(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new _(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qn(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:t},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Qe(ic,"4.4.0",e),Qe(ic,"4.4.0","esm2017")})();const qE={apiKey:"AIzaSyBCdznb3_DIoUFOGxagE43xSW9dolI75bE",authDomain:"vanjs-todo.firebaseapp.com",projectId:"vanjs-todo",storageBucket:"vanjs-todo.appspot.com",messagingSenderId:"184513423059",appId:"1:184513423059:web:a1393edd008ac8342ed626",measurementId:"G-8Z2QGKVVHY"},gd=gl(qE),Hs=Cg(gd),Kt=yE(gd),ua="/",_d="/login",$E="/signup",{div:jE}=D.tags,yd=D.state(!0),Sn=D.state(null);Hs.onAuthStateChanged(async n=>{if(n){const e=Hn(Kt,"users",n.uid);Sn.val=await LE(e).then(t=>t.data())}else Ki(_d);yd.val=!1});function zE(n){return yd.val||!Sn.val?jE({className:"w-full h-full grid place-items-center"},We({align:"center"},"Authenticating. Please wait...")):n()}const{div:qc,input:$c,label:jc,form:HE,button:WE,a:Rr}=D.tags;function GE(){const n=D.state(""),e=D.state(""),t=D.state(!1),r=o=>{n.val=o.target.value},s=o=>{e.val=o.target.value},i=o=>{if(o.preventDefault(),!n.val)return alert("Email is required");if(!e.val)return alert("Password is required");fm(Hs,n.val,e.val).then(a=>{a.user&&(alert("Welcome!"),Ki(ua))}).catch(a=>alert(a.message)).finally(()=>t.val=!1),t.val=!0};return qc({className:"w-full h-full grid place-items-center"},qc({className:"w-96 rounded-xl shadow-xl p-8"},We({size:"xl",align:"center",weight:"bold"},"Awesome Todo Login"),We({size:"sm",align:"center",className:"mt-2"},"Built by ",Rr({href:"https://github.com/kwameopareasiedu",target:"_blank",className:"underline text-cyan-500"},"Kwame Opare Asiedu")," with ♥ with ",Rr({href:"https://vanjs.org",target:"_blank",className:"underline text-rose-500"},"VanJS"),", ",Rr({href:"https://firebase.google.com",target:"_blank",className:"underline text-yellow-600"},"Firebase")," and ",Rr({href:"https://tailwindcss.com",target:"_blank",className:"underline text-sky-400"},"TailwindCSS")),HE({onsubmit:i},jc({className:"label"},"Email"),$c({type:"email",className:"form-field",autofocus:!0,value:n,oninput:r}),jc({className:"label"},"Password"),$c({type:"password",className:"form-field",value:e,oninput:s}),WE({type:"submit",className:"btn-primary",disabled:()=>t.val||!n.val||!e.val},"Login"),al({href:"/signup",className:"block text-center mt-8 underline"},"Create New Account"))))}const{div:un,input:Sr,label:Pr,form:KE,button:QE,a:Cr}=D.tags;function YE(){const n=D.state(""),e=D.state(""),t=D.state(""),r=D.state(""),s=D.state(!1),i=u=>{n.val=u.target.value},o=u=>{e.val=u.target.value},a=u=>{t.val=u.target.value},c=u=>{r.val=u.target.value},l=u=>{if(u.preventDefault(),!n.val)return alert("Name is required");if(!e.val)return alert("Email is required");if(t.val.length<6)return alert("Password should be at least six (6) characters");if(t.val!==r.val)return alert("Passwords must match");dm(Hs,e.val,t.val).then(async h=>{h.user&&(await md(Hn(Kt,"users",h.user.uid),{id:h.user.uid,name:n.val,email:h.user.email}),alert("Account created"),Ki(ua))}).catch(h=>alert(h.message)).finally(()=>s.val=!1),s.val=!0};return un({className:"w-full h-full grid place-items-center"},un({className:"w-96 rounded-xl shadow-xl p-8"},We({size:"xl",align:"center",weight:"bold"},"Awesome Todo Signup"),We({size:"sm",align:"center",className:"mt-2"},"Built by ",Cr({href:"https://github.com/kwameopareasiedu",target:"_blank",className:"underline text-cyan-500"},"Kwame Opare Asiedu")," with ♥ with ",Cr({href:"https://vanjs.org",target:"_blank",className:"underline text-rose-500"},"VanJS"),", ",Cr({href:"https://firebase.google.com",target:"_blank",className:"underline text-yellow-600"},"Firebase")," and ",Cr({href:"https://tailwindcss.com",target:"_blank",className:"underline text-sky-400"},"TailwindCSS")),KE({onsubmit:l},Pr({className:"label"},"Name"),Sr({className:"form-field",autofocus:!0,value:n,oninput:i}),Pr({className:"label"},"Email"),Sr({type:"email",className:"form-field",value:e,oninput:o}),un({className:"flex gap-4"},un({className:"flex-1"},Pr({className:"label"},"Password"),Sr({type:"password",className:"form-field",value:t,oninput:a})),un({className:"flex-1"},Pr({className:"label"},"Confirm Password"),Sr({type:"password",className:"form-field",value:r,oninput:c}))),QE({type:"submit",className:"btn-primary",disabled:()=>s.val||!n.val||!e.val||!t.val||!r.val},"Create Account"),al({href:"/login",className:"block text-center mt-8 underline"},"Login"))))}let{fromEntries:JE,entries:vd,keys:XE,getPrototypeOf:Ed}=Object,{get:ZE,set:zc,deleteProperty:Hc,ownKeys:eI}=Reflect,sn=Symbol,{state:ha,derive:tI,add:nI,tags:SI}=D,rI=Ed(ha()),br,sI=1e3,Id,ct=sn(),iI=sn(),oI=sn(),ls=sn(),hn=sn(),da=sn(),Wc=n=>n!=null&&n[oI]?tI(()=>us(n())):ha(us(n)),us=n=>{if(!(n instanceof Object)||n[ct])return n;let e=new Proxy((n[ct]=JE(vd(n).map(([t,r])=>[t,Wc(r)])),n[iI]=n,n[ls]=[],n[hn]=ha(1),n),{get:(t,r)=>Ed(t[ct][r]??0)===rI?t[ct][r].val:(r==="length"&&t[hn].val,ZE(t,r,e)),set(t,r,s){let i=t[ct];if(r in i)return i[r].val=us(s),1;let o=r in t;if(zc(t,r,s))return o||zc(i,r,Wc(s))&&(++t[hn].val,cI(e,r,i[r])),1},deleteProperty:(t,r)=>(Hc(t[ct],r)&&lI(t,r),Hc(t,r)&&++t[hn].val),ownKeys:t=>(t[hn].val,eI(t))});return e},fa=n=>n[ls]=n[ls].filter(e=>e._containerDom.isConnected),aI=(n,e,t,r)=>()=>{let s=r(t,()=>delete n[e],e);return s[da]=e,s},Td=(n,e,t,{_containerDom:r,f:s},i)=>{if(nI(r,aI(n,e,t,s)),!i&&Array.isArray(n)&&e!=n.length-1){let o={};for(let c of r.childNodes)o[c[da]]=c;let a=r.firstChild;for(let c of XE(n))a===o[c]?a=a.nextSibling:r.insertBefore(o[c],a)}},cI=(n,e,t)=>fa(n).forEach(Td.bind(Id,n,e,t)),lI=(n,e)=>{var t;for(let r of fa(n))(t=[...r._containerDom.childNodes].find(s=>s[da]===e))==null||t.remove()},uI=n=>(br??(br=(setTimeout(()=>(br.forEach(fa),br=Id),sI),new Set))).add(n),hI=(n,e,t)=>{let r={_containerDom:n(),f:t};e[ls].push(r),uI(e);for(let[s,i]of vd(e[ct]))Td(e,s,i,r,1);return r._containerDom};const dI="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='0%200%2024%2024'%20stroke-width='1.5'%20stroke='currentColor'%20class='w-6%20h-6'%3e%3cpath%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M3.75%206.75h16.5M3.75%2012h16.5m-16.5%205.25h16.5'%20/%3e%3c/svg%3e";let fI=(n=21)=>crypto.getRandomValues(new Uint8Array(n)).reduce((e,t)=>(t&=63,t<36?e+=t.toString(36):t<62?e+=(t-26).toString(36).toUpperCase():t>62?e+="-":e+="_",e),"");const pI="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='0%200%2024%2024'%20stroke-width='1.5'%20stroke='currentColor'%20class='w-6%20h-6'%3e%3cpath%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M6.75%2012a.75.75%200%201%201-1.5%200%20.75.75%200%200%201%201.5%200ZM12.75%2012a.75.75%200%201%201-1.5%200%20.75.75%200%200%201%201.5%200ZM18.75%2012a.75.75%200%201%201-1.5%200%20.75.75%200%200%201%201.5%200Z'%20/%3e%3c/svg%3e",mI="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='0%200%2024%2024'%20stroke-width='1.5'%20stroke='currentColor'%20class='w-6%20h-6'%3e%3cpath%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M9%2012.75%2011.25%2015%2015%209.75M21%2012a9%209%200%201%201-18%200%209%209%200%200%201%2018%200Z'%20/%3e%3c/svg%3e",{div:Gc,p:gI,img:_I,button:Kc}=D.tags;function yI({todo:n,index:e,onUpdated:t,onDeleted:r}){const s=D.state(!1),i=D.state(!1),o=()=>{const c={completed:!0};FE(Hn(Kt,"todos",n.id),c).then(()=>t({...n,...c},e)).catch(l=>alert(l.message)).finally(()=>s.val=!1),s.val=!0},a=()=>{UE(Hn(Kt,"todos",n.id)).then(()=>r(e)).catch(c=>alert(c.message)).finally(()=>i.val=!1),i.val=!0};return Gc({className:"flex items-center rounded-lg border border-1 border-grey-200 px-4 py-2 gap-2"},_I({src:n.completed?mI:pI,className:"w-4 h-4"}),gI({className:n.completed?"italic line-through text-gray-400":""},n.content),Gc({className:"flex-1"}),n.completed?null:Kc({className:"bg-green-600 px-2 py-1 rounded text-white text-sm disabled:opacity-30",disabled:()=>s.val,onclick:o},"Complete"),Kc({className:"bg-rose-600 px-2 py-1 rounded text-white text-sm disabled:opacity-30",disabled:()=>i.val,onclick:a},"Delete"))}const{div:dn,button:Qc,img:vI,input:EI,a:kr}=D.tags;function II(){var a;const n=D.state(""),e=D.state(!1),t=us([]),r=c=>{n.val=c.target.value},s=()=>{if(!n.val)return;const c={id:fI(),content:n.val,userId:Sn.val.id,completed:!1};md(Hn(Kt,"todos",c.id),c).then(()=>alert("Saved todo")).catch(l=>{const u=t.indexOf(c);u!==-1&&t.splice(u,1),alert(l.message)}).finally(()=>e.val=!1),t.unshift(c),e.val=!0,n.val=""},i=(c,l)=>{t.splice(l,1,c)},o=c=>{t.splice(c,1)};return D.derive(()=>{const c=kE(gE(Kt,"todos"),NE("userId","==",Sn.val.id));xE(c).then(async l=>{const u=await Promise.all(l.docs.map(h=>h.data()));t.push(...u)})}),dn({className:"w-full mx-auto max-w-[640px] flex flex-col gap-6 py-8 px-8 md:px-0"},dn({className:"flex items-center gap-4"},vI({src:dI,className:"w-6 h-6"}),We({size:"lg",weight:"bold"},"Awesome Todo"),dn({className:"flex-1"}),We({size:"sm"},`Logged in as: ${(a=Sn.val)==null?void 0:a.name}`),Qc({className:"bg-rose-600 px-2 py-1 rounded text-white text-sm",onclick:()=>gm(Hs)},"Logout")),dn({className:"flex items-center gap-4"},EI({className:"form-field flex-1",placeholder:"Create new todo",value:n,oninput:r}),Qc({className:"rounded bg-green-400 px-4 py-2 text-sm text-white disabled:opacity-30",onclick:s,disabled:()=>!n.val||e.val},"Add Todo")),hI((...c)=>dn({className:"flex flex-col gap-2"},...c),t,c=>yI({todo:c.val,index:t.indexOf(c.val),onUpdated:i,onDeleted:o})),We({size:"sm",align:"center",className:"mt-2"},"Built by ",kr({href:"https://github.com/kwameopareasiedu",target:"_blank",className:"underline text-cyan-500"},"Kwame Opare Asiedu")," with ♥ with ",kr({href:"https://vanjs.org",target:"_blank",className:"underline text-rose-500"},"VanJS"),", ",kr({href:"https://firebase.google.com",target:"_blank",className:"underline text-yellow-600"},"Firebase")," and ",kr({href:"https://tailwindcss.com",target:"_blank",className:"underline text-sky-400"},"TailwindCSS")))}function TI(){return Vd({className:"w-screen h-screen",routes:[{path:ua,component:()=>zE(II)},{path:_d,component:GE},{path:$E,component:YE}]})}const Yc=document.querySelector("#app");Yc&&D.add(Yc,TI());
