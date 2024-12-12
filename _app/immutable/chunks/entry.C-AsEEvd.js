import{ax as ut}from"./runtime.DsZIy1wM.js";import{w as _e}from"./index.CrBBLfgZ.js";new URL("sveltekit-internal://");function dt(e,n){return e==="/"||n==="ignore"?e:n==="never"?e.endsWith("/")?e.slice(0,-1):e:n==="always"&&!e.endsWith("/")?e+"/":e}function ht(e){return e.split("%25").map(decodeURI).join("%25")}function pt(e){for(const n in e)e[n]=decodeURIComponent(e[n]);return e}function ue({href:e}){return e.split("#")[0]}const gt=["href","pathname","search","toString","toJSON"];function mt(e,n,t){const r=new URL(e);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(a,o){if(o==="get"||o==="getAll"||o==="has")return i=>(t(i),a[o](i));n();const s=Reflect.get(a,o);return typeof s=="function"?s.bind(a):s}}),enumerable:!0,configurable:!0});for(const a of gt)Object.defineProperty(r,a,{get(){return n(),e[a]},enumerable:!0,configurable:!0});return r}const yt="/__data.json",_t=".html__data.json";function wt(e){return e.endsWith(".html")?e.replace(/\.html$/,_t):e.replace(/\/$/,"")+yt}function vt(...e){let n=5381;for(const t of e)if(typeof t=="string"){let r=t.length;for(;r;)n=n*33^t.charCodeAt(--r)}else if(ArrayBuffer.isView(t)){const r=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);let a=r.length;for(;a;)n=n*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function bt(e){const n=atob(e),t=new Uint8Array(n.length);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t.buffer}const Ge=window.fetch;window.fetch=(e,n)=>((e instanceof Request?e.method:(n==null?void 0:n.method)||"GET")!=="GET"&&G.delete(we(e)),Ge(e,n));const G=new Map;function kt(e,n){const t=we(e,n),r=document.querySelector(t);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const s=r.getAttribute("data-ttl");return s&&G.set(t,{body:a,init:o,ttl:1e3*Number(s)}),r.getAttribute("data-b64")!==null&&(a=bt(a)),Promise.resolve(new Response(a,o))}return window.fetch(e,n)}function At(e,n,t){if(G.size>0){const r=we(e,t),a=G.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(t==null?void 0:t.cache))return new Response(a.body,a.init);G.delete(r)}}return window.fetch(n,t)}function we(e,n){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(n!=null&&n.headers||n!=null&&n.body){const a=[];n.headers&&a.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&a.push(n.body),r+=`[data-hash="${vt(...a)}"]`}return r}const Et=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function St(e){const n=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${It(e).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return n.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const s=r.split(/\[(.+?)\](?!\])/);return"/"+s.map((c,f)=>{if(f%2){if(c.startsWith("x+"))return de(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return de(String.fromCharCode(...c.slice(2).split("-").map(l=>parseInt(l,16))));const d=Et.exec(c),[,h,y,u,g]=d;return n.push({name:u,matcher:g,optional:!!h,rest:!!y,chained:y?f===1&&s[0]==="":!1}),y?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return de(c)}).join("")}).join("")}/?$`),params:n}}function Rt(e){return!/^\([^)]+\)$/.test(e)}function It(e){return e.slice(1).split("/").filter(Rt)}function Tt(e,n,t){const r={},a=e.slice(1),o=a.filter(i=>i!==void 0);let s=0;for(let i=0;i<n.length;i+=1){const c=n[i];let f=a[i-s];if(c.chained&&c.rest&&s&&(f=a.slice(i-s,i+1).filter(d=>d).join("/"),s=0),f===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||t[c.matcher](f)){r[c.name]=f;const d=n[i+1],h=a[i+1];d&&!d.rest&&d.optional&&h&&c.chained&&(s=0),!d&&!h&&Object.keys(r).length===o.length&&(s=0);continue}if(c.optional&&c.chained){s++;continue}return}if(!s)return r}function de(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Ut({nodes:e,server_loads:n,dictionary:t,matchers:r}){const a=new Set(n);return Object.entries(t).map(([i,[c,f,d]])=>{const{pattern:h,params:y}=St(i),u={id:i,exec:g=>{const l=h.exec(g);if(l)return Tt(l,y,r)},errors:[1,...d||[]].map(g=>e[g]),layouts:[0,...f||[]].map(s),leaf:o(c)};return u.errors.length=u.layouts.length=Math.max(u.errors.length,u.layouts.length),u});function o(i){const c=i<0;return c&&(i=~i),[c,e[i]]}function s(i){return i===void 0?i:[a.has(i),e[i]]}}function qe(e,n=JSON.parse){try{return n(sessionStorage[e])}catch{}}function xe(e,n,t=JSON.stringify){const r=t(n);try{sessionStorage[e]=r}catch{}}var Ve;const U=((Ve=globalThis.__sveltekit_1ciwkxd)==null?void 0:Ve.base)??"/darslu.github.io";var Be;const Lt=((Be=globalThis.__sveltekit_1ciwkxd)==null?void 0:Be.assets)??U,xt="1734001913087",Me="sveltekit:snapshot",He="sveltekit:scroll",Ke="sveltekit:states",Pt="sveltekit:pageurl",j="sveltekit:history",M="sveltekit:navigation",J={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},W=location.origin;function We(e){if(e instanceof URL)return e;let n=document.baseURI;if(!n){const t=document.getElementsByTagName("base");n=t.length?t[0].href:document.URL}return new URL(e,n)}function ve(){return{x:pageXOffset,y:pageYOffset}}function N(e,n){return e.getAttribute(`data-sveltekit-${n}`)}const Pe={...J,"":J.hover};function Ye(e){let n=e.assignedSlot??e.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function Je(e,n){for(;e&&e!==n;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Ye(e)}}function ge(e,n){let t;try{t=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target,a=!t||!!r||re(t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(t==null?void 0:t.origin)===W&&e.hasAttribute("download");return{url:t,external:a,target:r,download:o}}function z(e){let n=null,t=null,r=null,a=null,o=null,s=null,i=e;for(;i&&i!==document.documentElement;)r===null&&(r=N(i,"preload-code")),a===null&&(a=N(i,"preload-data")),n===null&&(n=N(i,"keepfocus")),t===null&&(t=N(i,"noscroll")),o===null&&(o=N(i,"reload")),s===null&&(s=N(i,"replacestate")),i=Ye(i);function c(f){switch(f){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Pe[r??"off"],preload_data:Pe[a??"off"],keepfocus:c(n),noscroll:c(t),reload:c(o),replace_state:c(s)}}function Ce(e){const n=_e(e);let t=!0;function r(){t=!0,n.update(s=>s)}function a(s){t=!1,n.set(s)}function o(s){let i;return n.subscribe(c=>{(i===void 0||t&&c!==i)&&s(i=c)})}return{notify:r,set:a,subscribe:o}}function Ct(){const{set:e,subscribe:n}=_e(!1);let t;async function r(){clearTimeout(t);try{const a=await fetch(`${Lt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const s=(await a.json()).version!==xt;return s&&(e(!0),clearTimeout(t)),s}catch{return!1}}return{subscribe:n,check:r}}function re(e,n){return e.origin!==W||!e.pathname.startsWith(n)}function Ne(e){const n=Ot(e),t=new ArrayBuffer(n.length),r=new DataView(t);for(let a=0;a<t.byteLength;a++)r.setUint8(a,n.charCodeAt(a));return t}const Nt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Ot(e){e.length%4===0&&(e=e.replace(/==?$/,""));let n="",t=0,r=0;for(let a=0;a<e.length;a++)t<<=6,t|=Nt.indexOf(e[a]),r+=6,r===24&&(n+=String.fromCharCode((t&16711680)>>16),n+=String.fromCharCode((t&65280)>>8),n+=String.fromCharCode(t&255),t=r=0);return r===12?(t>>=4,n+=String.fromCharCode(t)):r===18&&(t>>=2,n+=String.fromCharCode((t&65280)>>8),n+=String.fromCharCode(t&255)),n}const jt=-1,Dt=-2,$t=-3,Ft=-4,Vt=-5,Bt=-6;function Gt(e,n){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const t=e,r=Array(t.length);function a(o,s=!1){if(o===jt)return;if(o===$t)return NaN;if(o===Ft)return 1/0;if(o===Vt)return-1/0;if(o===Bt)return-0;if(s)throw new Error("Invalid input");if(o in r)return r[o];const i=t[o];if(!i||typeof i!="object")r[o]=i;else if(Array.isArray(i))if(typeof i[0]=="string"){const c=i[0],f=n==null?void 0:n[c];if(f)return r[o]=f(a(i[1]));switch(c){case"Date":r[o]=new Date(i[1]);break;case"Set":const d=new Set;r[o]=d;for(let u=1;u<i.length;u+=1)d.add(a(i[u]));break;case"Map":const h=new Map;r[o]=h;for(let u=1;u<i.length;u+=2)h.set(a(i[u]),a(i[u+1]));break;case"RegExp":r[o]=new RegExp(i[1],i[2]);break;case"Object":r[o]=Object(i[1]);break;case"BigInt":r[o]=BigInt(i[1]);break;case"null":const y=Object.create(null);r[o]=y;for(let u=1;u<i.length;u+=2)y[i[u]]=a(i[u+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const u=globalThis[c],g=i[1],l=Ne(g),p=new u(l);r[o]=p;break}case"ArrayBuffer":{const u=i[1],g=Ne(u);r[o]=g;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(i.length);r[o]=c;for(let f=0;f<i.length;f+=1){const d=i[f];d!==Dt&&(c[f]=a(d))}}else{const c={};r[o]=c;for(const f in i){const d=i[f];c[f]=a(d)}}return r[o]}return a(0)}const ze=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...ze];const qt=new Set([...ze]);[...qt];function Mt(e){return e.filter(n=>n!=null)}class ae{constructor(n,t){this.status=n,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class Xe{constructor(n,t){this.status=n,this.location=t}}class be extends Error{constructor(n,t,r){super(r),this.status=n,this.text=t}}const Ht="x-sveltekit-invalidated",Kt="x-sveltekit-trailing-slash";function X(e){return e instanceof ae||e instanceof be?e.status:500}function Wt(e){return e instanceof be?e.text:"Internal Error"}const Yt=new Set(["icon","shortcut icon","apple-touch-icon"]),C=qe(He)??{},H=qe(Me)??{},x={url:Ce({}),page:Ce({}),navigating:_e(null),updated:Ct()};function ke(e){C[e]=ve()}function Jt(e,n){let t=e+1;for(;C[t];)delete C[t],t+=1;for(t=n+1;H[t];)delete H[t],t+=1}function $(e){return location.href=e.href,new Promise(()=>{})}async function Ze(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(U||"/");e&&await e.update()}}function Oe(){}let oe,me,Z,L,ye,V;const Q=[],ee=[];let R=null;const Qe=[],zt=[];let O=[],_={branch:[],error:null,url:null},Ae=!1,te=!1,je=!0,K=!1,B=!1,et=!1,Ee=!1,ie,S,T,I,F;const q=new Set;let he;async function ln(e,n,t){var a,o,s,i;document.URL!==location.href&&(location.href=location.href),V=e,await((o=(a=e.hooks).init)==null?void 0:o.call(a)),oe=Ut(e),L=document.documentElement,ye=n,me=e.nodes[0],Z=e.nodes[1],me(),Z(),S=(s=history.state)==null?void 0:s[j],T=(i=history.state)==null?void 0:i[M],S||(S=T=Date.now(),history.replaceState({...history.state,[j]:S,[M]:T},""));const r=C[S];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),t?await an(ye,t):nn(location.href,{replaceState:!0}),rn()}async function Xt(){if(await(he||(he=Promise.resolve())),!he)return;he=null;const e=ce(_.url,!0);R=null;const n=F={},t=e&&await Te(e);if(!(!t||n!==F)){if(t.type==="redirect")return Se(new URL(t.location,_.url).href,{},1,n);t.props.page&&(I=t.props.page),_=t.state,tt(),ie.$set(t.props)}}function tt(){Q.length=0,Ee=!1}function nt(e){ee.some(n=>n==null?void 0:n.snapshot)&&(H[e]=ee.map(n=>{var t;return(t=n==null?void 0:n.snapshot)==null?void 0:t.capture()}))}function rt(e){var n;(n=H[e])==null||n.forEach((t,r)=>{var a,o;(o=(a=ee[r])==null?void 0:a.snapshot)==null||o.restore(t)})}function De(){ke(S),xe(He,C),nt(T),xe(Me,H)}async function Se(e,n,t,r){return Y({type:"goto",url:We(e),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:t,nav_token:r,accept:()=>{n.invalidateAll&&(Ee=!0)}})}async function Zt(e){if(e.id!==(R==null?void 0:R.id)){const n={};q.add(n),R={id:e.id,token:n,promise:Te({...e,preload:n}).then(t=>(q.delete(n),t.type==="loaded"&&t.state.error&&(R=null),t))}}return R.promise}async function pe(e){const n=oe.find(t=>t.exec(ot(e)));n&&await Promise.all([...n.layouts,n.leaf].map(t=>t==null?void 0:t[1]()))}function at(e,n,t){var o;_=e.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),I=e.props.page,ie=new V.root({target:n,props:{...e.props,stores:x,components:ee},hydrate:t,sync:!1}),rt(T);const a={from:null,to:{params:_.params,route:{id:((o=_.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};O.forEach(s=>s(a)),te=!0}function ne({url:e,params:n,branch:t,status:r,error:a,route:o,form:s}){let i="never";if(U&&(e.pathname===U||e.pathname===U+"/"))i="always";else for(const u of t)(u==null?void 0:u.slash)!==void 0&&(i=u.slash);e.pathname=dt(e.pathname,i),e.search=e.search;const c={type:"loaded",state:{url:e,params:n,branch:t,error:a,route:o},props:{constructors:Mt(t).map(u=>u.node.component),page:I}};s!==void 0&&(c.props.form=s);let f={},d=!I,h=0;for(let u=0;u<Math.max(t.length,_.branch.length);u+=1){const g=t[u],l=_.branch[u];(g==null?void 0:g.data)!==(l==null?void 0:l.data)&&(d=!0),g&&(f={...f,...g.data},d&&(c.props[`data_${h}`]=f),h+=1)}return(!_.url||e.href!==_.url.href||_.error!==a||s!==void 0&&s!==I.form||d)&&(c.props.page={error:a,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(e),form:s??null,data:d?f:I.data}),c}async function Re({loader:e,parent:n,url:t,params:r,route:a,server_data_node:o}){var d,h,y;let s=null,i=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},f=await e();if((d=f.universal)!=null&&d.load){let u=function(...l){for(const p of l){const{href:b}=new URL(p,t);c.dependencies.add(b)}};const g={route:new Proxy(a,{get:(l,p)=>(i&&(c.route=!0),l[p])}),params:new Proxy(r,{get:(l,p)=>(i&&c.params.add(p),l[p])}),data:(o==null?void 0:o.data)??null,url:mt(t,()=>{i&&(c.url=!0)},l=>{i&&c.search_params.add(l)}),async fetch(l,p){let b;l instanceof Request?(b=l.url,p={body:l.method==="GET"||l.method==="HEAD"?void 0:await l.blob(),cache:l.cache,credentials:l.credentials,headers:[...l.headers].length?l.headers:void 0,integrity:l.integrity,keepalive:l.keepalive,method:l.method,mode:l.mode,redirect:l.redirect,referrer:l.referrer,referrerPolicy:l.referrerPolicy,signal:l.signal,...p}):b=l;const A=new URL(b,t);return i&&u(A.href),A.origin===t.origin&&(b=A.href.slice(t.origin.length)),te?At(b,A.href,p):kt(b,p)},setHeaders:()=>{},depends:u,parent(){return i&&(c.parent=!0),n()},untrack(l){i=!1;try{return l()}finally{i=!0}}};s=await f.universal.load.call(null,g)??null}return{node:f,loader:e,server:o,universal:(h=f.universal)!=null&&h.load?{type:"data",data:s,uses:c}:null,data:s??(o==null?void 0:o.data)??null,slash:((y=f.universal)==null?void 0:y.trailingSlash)??(o==null?void 0:o.slash)}}function $e(e,n,t,r,a,o){if(Ee)return!0;if(!a)return!1;if(a.parent&&e||a.route&&n||a.url&&t)return!0;for(const s of a.search_params)if(r.has(s))return!0;for(const s of a.params)if(o[s]!==_.params[s])return!0;for(const s of a.dependencies)if(Q.some(i=>i(new URL(s))))return!0;return!1}function Ie(e,n){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?n??null:null}function Qt(e,n){if(!e)return new Set(n.searchParams.keys());const t=new Set([...e.searchParams.keys(),...n.searchParams.keys()]);for(const r of t){const a=e.searchParams.getAll(r),o=n.searchParams.getAll(r);a.every(s=>o.includes(s))&&o.every(s=>a.includes(s))&&t.delete(r)}return t}function Fe({error:e,url:n,route:t,params:r}){return{type:"loaded",state:{error:e,url:n,route:t,params:r,branch:[]},props:{page:I,constructors:[]}}}async function Te({id:e,invalidating:n,url:t,params:r,route:a,preload:o}){if((R==null?void 0:R.id)===e)return q.delete(R.token),R.promise;const{errors:s,layouts:i,leaf:c}=a,f=[...i,c];s.forEach(m=>m==null?void 0:m().catch(()=>{})),f.forEach(m=>m==null?void 0:m[1]().catch(()=>{}));let d=null;const h=_.url?e!==_.url.pathname+_.url.search:!1,y=_.route?a.id!==_.route.id:!1,u=Qt(_.url,t);let g=!1;const l=f.map((m,v)=>{var P;const k=_.branch[v],E=!!(m!=null&&m[0])&&((k==null?void 0:k.loader)!==m[1]||$e(g,y,h,u,(P=k.server)==null?void 0:P.uses,r));return E&&(g=!0),E});if(l.some(Boolean)){try{d=await ct(t,l)}catch(m){const v=await D(m,{url:t,params:r,route:{id:e}});return q.has(o)?Fe({error:v,url:t,params:r,route:a}):se({status:X(m),error:v,url:t,route:a})}if(d.type==="redirect")return d}const p=d==null?void 0:d.nodes;let b=!1;const A=f.map(async(m,v)=>{var le;if(!m)return;const k=_.branch[v],E=p==null?void 0:p[v];if((!E||E.type==="skip")&&m[1]===(k==null?void 0:k.loader)&&!$e(b,y,h,u,(le=k.universal)==null?void 0:le.uses,r))return k;if(b=!0,(E==null?void 0:E.type)==="error")throw E;return Re({loader:m[1],url:t,params:r,route:a,parent:async()=>{var Le;const Ue={};for(let fe=0;fe<v;fe+=1)Object.assign(Ue,(Le=await A[fe])==null?void 0:Le.data);return Ue},server_data_node:Ie(E===void 0&&m[0]?{type:"skip"}:E??null,m[0]?k==null?void 0:k.server:void 0)})});for(const m of A)m.catch(()=>{});const w=[];for(let m=0;m<f.length;m+=1)if(f[m])try{w.push(await A[m])}catch(v){if(v instanceof Xe)return{type:"redirect",location:v.location};if(q.has(o))return Fe({error:await D(v,{params:r,url:t,route:{id:a.id}}),url:t,params:r,route:a});let k=X(v),E;if(p!=null&&p.includes(v))k=v.status??k,E=v.error;else if(v instanceof ae)E=v.body;else{if(await x.updated.check())return await Ze(),await $(t);E=await D(v,{params:r,url:t,route:{id:a.id}})}const P=await en(m,w,s);return P?ne({url:t,params:r,branch:w.slice(0,P.idx).concat(P.node),status:k,error:E,route:a}):await st(t,{id:a.id},E,k)}else w.push(void 0);return ne({url:t,params:r,branch:w,status:200,error:null,route:a,form:n?void 0:null})}async function en(e,n,t){for(;e--;)if(t[e]){let r=e;for(;!n[r];)r-=1;try{return{idx:r+1,node:{node:await t[e](),loader:t[e],data:{},server:null,universal:null}}}catch{continue}}}async function se({status:e,error:n,url:t,route:r}){const a={};let o=null;if(V.server_loads[0]===0)try{const f=await ct(t,[!0]);if(f.type!=="data"||f.nodes[0]&&f.nodes[0].type!=="data")throw 0;o=f.nodes[0]??null}catch{(t.origin!==W||t.pathname!==location.pathname||Ae)&&await $(t)}const i=await Re({loader:me,url:t,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Ie(o)}),c={node:await Z(),loader:Z,universal:null,server:null,data:null};return ne({url:t,params:a,branch:[i,c],status:e,error:n,route:null})}function ce(e,n){if(!e||re(e,U))return;let t;try{t=V.hooks.reroute({url:new URL(e)})??e.pathname}catch{return}const r=ot(t);for(const a of oe){const o=a.exec(r);if(o)return{id:e.pathname+e.search,invalidating:n,route:a,params:pt(o),url:e}}}function ot(e){return ht(e.slice(U.length)||"/")}function it({url:e,type:n,intent:t,delta:r}){let a=!1;const o=ft(_,t,e,n);r!==void 0&&(o.navigation.delta=r);const s={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return K||Qe.forEach(i=>i(s)),a?null:o}async function Y({type:e,url:n,popped:t,keepfocus:r,noscroll:a,replace_state:o,state:s={},redirect_count:i=0,nav_token:c={},accept:f=Oe,block:d=Oe}){const h=ce(n,!1),y=it({url:n,type:e,delta:t==null?void 0:t.delta,intent:h});if(!y){d();return}const u=S,g=T;f(),K=!0,te&&x.navigating.set(y.navigation),F=c;let l=h&&await Te(h);if(!l){if(re(n,U))return await $(n);l=await st(n,{id:null},await D(new be(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,F!==c)return y.reject(new Error("navigation aborted")),!1;if(l.type==="redirect")if(i>=20)l=await se({status:500,error:await D(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return Se(new URL(l.location,n).href,{},i+1,c),!1;else l.props.page.status>=400&&await x.updated.check()&&(await Ze(),await $(n));if(tt(),ke(u),nt(g),l.props.page.url.pathname!==n.pathname&&(n.pathname=l.props.page.url.pathname),s=t?t.state:s,!t){const w=o?0:1,m={[j]:S+=w,[M]:T+=w,[Ke]:s};(o?history.replaceState:history.pushState).call(history,m,"",n),o||Jt(S,T)}if(R=null,l.props.page.state=s,te){_=l.state,l.props.page&&(l.props.page.url=n);const w=(await Promise.all(zt.map(m=>m(y.navigation)))).filter(m=>typeof m=="function");if(w.length>0){let m=function(){O=O.filter(v=>!w.includes(v))};w.push(m),O.push(...w)}ie.$set(l.props),et=!0}else at(l,ye,!1);const{activeElement:p}=document;await ut();const b=t?t.scroll:a?ve():null;if(je){const w=n.hash&&document.getElementById(decodeURIComponent(n.hash.slice(1)));b?scrollTo(b.x,b.y):w?w.scrollIntoView():scrollTo(0,0)}const A=document.activeElement!==p&&document.activeElement!==document.body;!r&&!A&&on(),je=!0,l.props.page&&(I=l.props.page),K=!1,e==="popstate"&&rt(T),y.fulfil(void 0),O.forEach(w=>w(y.navigation)),x.navigating.set(null)}async function st(e,n,t,r){return e.origin===W&&e.pathname===location.pathname&&!Ae?await se({status:r,error:t,url:e,route:n}):await $(e)}function tn(){let e;L.addEventListener("mousemove",o=>{const s=o.target;clearTimeout(e),e=setTimeout(()=>{r(s,2)},20)});function n(o){o.defaultPrevented||r(o.composedPath()[0],1)}L.addEventListener("mousedown",n),L.addEventListener("touchstart",n,{passive:!0});const t=new IntersectionObserver(o=>{for(const s of o)s.isIntersecting&&(pe(s.target.href),t.unobserve(s.target))},{threshold:0});function r(o,s){const i=Je(o,L);if(!i)return;const{url:c,external:f,download:d}=ge(i,U);if(f||d)return;const h=z(i),y=c&&_.url.pathname+_.url.search===c.pathname+c.search;if(!h.reload&&!y)if(s<=h.preload_data){const u=ce(c,!1);u&&Zt(u)}else s<=h.preload_code&&pe(c.pathname)}function a(){t.disconnect();for(const o of L.querySelectorAll("a")){const{url:s,external:i,download:c}=ge(o,U);if(i||c)continue;const f=z(o);f.reload||(f.preload_code===J.viewport&&t.observe(o),f.preload_code===J.eager&&pe(s.pathname))}}O.push(a),a()}function D(e,n){if(e instanceof ae)return e.body;const t=X(e),r=Wt(e);return V.hooks.handleError({error:e,event:n,status:t,message:r})??{message:r}}function nn(e,n={}){return e=We(e),e.origin!==W?Promise.reject(new Error("goto: invalid URL")):Se(e,n,0)}function fn(e){if(typeof e=="function")Q.push(e);else{const{href:n}=new URL(e,location.href);Q.push(t=>t.href===n)}return Xt()}function rn(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let r=!1;if(De(),!K){const a=ft(_,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};Qe.forEach(s=>s(o))}r?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&De()}),(n=navigator.connection)!=null&&n.saveData||tn(),L.addEventListener("click",async t=>{if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const r=Je(t.composedPath()[0],L);if(!r)return;const{url:a,external:o,target:s,download:i}=ge(r,U);if(!a)return;if(s==="_parent"||s==="_top"){if(window.parent!==window)return}else if(s&&s!=="_self")return;const c=z(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||i)return;const[d,h]=a.href.split("#"),y=d===ue(location);if(o||c.reload&&(!y||!h)){it({url:a,type:"link"})?K=!0:t.preventDefault();return}if(h!==void 0&&y){const[,u]=_.url.href.split("#");if(u===h){if(t.preventDefault(),h===""||h==="top"&&r.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const g=r.ownerDocument.getElementById(decodeURIComponent(h));g&&(g.scrollIntoView(),g.focus())}return}if(B=!0,ke(S),e(a),!c.replace_state)return;B=!1}t.preventDefault(),await new Promise(u=>{requestAnimationFrame(()=>{setTimeout(u,0)}),setTimeout(u,100)}),Y({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),L.addEventListener("submit",t=>{if(t.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(t.target),a=t.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const i=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(re(i,U))return;const c=t.target,f=z(c);if(f.reload)return;t.preventDefault(),t.stopPropagation();const d=new FormData(c),h=a==null?void 0:a.getAttribute("name");h&&d.append(h,(a==null?void 0:a.getAttribute("value"))??""),i.search=new URLSearchParams(d).toString(),Y({type:"form",url:i,keepfocus:f.keepfocus,noscroll:f.noscroll,replace_state:f.replace_state??i.href===location.href})}),addEventListener("popstate",async t=>{var r;if((r=t.state)!=null&&r[j]){const a=t.state[j];if(F={},a===S)return;const o=C[a],s=t.state[Ke]??{},i=new URL(t.state[Pt]??location.href),c=t.state[M],f=ue(location)===ue(_.url);if(c===T&&(et||f)){e(i),C[S]=ve(),o&&scrollTo(o.x,o.y),s!==I.state&&(I={...I,state:s},ie.$set({page:I})),S=a;return}const h=a-S;await Y({type:"popstate",url:i,popped:{state:s,scroll:o,delta:h},accept:()=>{S=a,T=c},block:()=>{history.go(-h)},nav_token:F})}else if(!B){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{B&&(B=!1,history.replaceState({...history.state,[j]:++S,[M]:T},"",location.href))});for(const t of document.querySelectorAll("link"))Yt.has(t.rel)&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&x.navigating.set(null)});function e(t){_.url=t,x.page.set({...I,url:t}),x.page.notify()}}async function an(e,{status:n=200,error:t,node_ids:r,params:a,route:o,data:s,form:i}){Ae=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=ce(c,!1)||{});let f,d=!0;try{const h=r.map(async(g,l)=>{const p=s[l];return p!=null&&p.uses&&(p.uses=lt(p.uses)),Re({loader:V.nodes[g],url:c,params:a,route:o,parent:async()=>{const b={};for(let A=0;A<l;A+=1)Object.assign(b,(await h[A]).data);return b},server_data_node:Ie(p)})}),y=await Promise.all(h),u=oe.find(({id:g})=>g===o.id);if(u){const g=u.layouts;for(let l=0;l<g.length;l++)g[l]||y.splice(l,0,void 0)}f=ne({url:c,params:a,branch:y,status:n,error:t,form:i,route:u??null})}catch(h){if(h instanceof Xe){await $(new URL(h.location,location.href));return}f=await se({status:X(h),error:await D(h,{url:c,params:a,route:o}),url:c,route:o}),e.textContent="",d=!1}f.props.page&&(f.props.page.state={}),at(f,e,d)}async function ct(e,n){var a;const t=new URL(e);t.pathname=wt(e.pathname),e.pathname.endsWith("/")&&t.searchParams.append(Kt,"1"),t.searchParams.append(Ht,n.map(o=>o?"1":"0").join(""));const r=await Ge(t.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new ae(r.status,o)}return new Promise(async o=>{var h;const s=new Map,i=r.body.getReader(),c=new TextDecoder;function f(y){return Gt(y,{Promise:u=>new Promise((g,l)=>{s.set(u,{fulfil:g,reject:l})})})}let d="";for(;;){const{done:y,value:u}=await i.read();if(y&&!d)break;for(d+=!u&&d?`
`:c.decode(u,{stream:!0});;){const g=d.indexOf(`
`);if(g===-1)break;const l=JSON.parse(d.slice(0,g));if(d=d.slice(g+1),l.type==="redirect")return o(l);if(l.type==="data")(h=l.nodes)==null||h.forEach(p=>{(p==null?void 0:p.type)==="data"&&(p.uses=lt(p.uses),p.data=f(p.data))}),o(l);else if(l.type==="chunk"){const{id:p,data:b,error:A}=l,w=s.get(p);s.delete(p),A?w.reject(f(A)):w.fulfil(f(b))}}}})}function lt(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function on(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const n=document.body,t=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),t!==null?n.setAttribute("tabindex",t):n.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const s=a[o],i=r.getRangeAt(o);if(s.commonAncestorContainer!==i.commonAncestorContainer||s.startContainer!==i.startContainer||s.endContainer!==i.endContainer||s.startOffset!==i.startOffset||s.endOffset!==i.endOffset)return}r.removeAllRanges()}})}}}function ft(e,n,t,r){var c,f;let a,o;const s=new Promise((d,h)=>{a=d,o=h});return s.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:t&&{params:(n==null?void 0:n.params)??null,route:{id:((f=n==null?void 0:n.route)==null?void 0:f.id)??null},url:t},willUnload:!n,type:r,complete:s},fulfil:a,reject:o}}export{ln as a,U as b,fn as i,x as s};
