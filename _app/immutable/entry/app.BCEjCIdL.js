const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.B9D5jCmV.js","../chunks/disclose-version.Ct5PvfHI.js","../chunks/runtime.H0yrZg9K.js","../chunks/i18n.DnGXu-z4.js","../chunks/entry.DlqZSuIu.js","../chunks/index.DVS2oyoE.js","../chunks/stores.FBgVzesl.js","../chunks/store.CGsdMBJU.js","../chunks/index-client.Crcxntfw.js","../chunks/Frame.D8DIi-0O.js","../chunks/index.yWkGoIGa.js","../chunks/lifecycle.CcCdISZB.js","../assets/0.B6QUJ6pg.css","../nodes/1.Dpqr-xPS.js","../nodes/2.BPQ3cyUr.js","../nodes/3.BPQ3cyUr.js","../nodes/4.0ctDck0f.js","../chunks/ReviewTrust._xzw6KBa.js","../chunks/svelte-component.DVib471X.js","../nodes/5.0ctDck0f.js"])))=>i.map(i=>d[i]);
var B=n=>{throw TypeError(n)};var U=(n,t,r)=>t.has(n)||B("Cannot "+r);var i=(n,t,r)=>(U(n,t,"read from private field"),r?r.call(n):t.get(n)),A=(n,t,r)=>t.has(n)?B("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(n):t.set(n,r),S=(n,t,r,a)=>(U(n,t,"write to private field"),a?a.call(n,r):t.set(n,r),r);import{i as J}from"../chunks/i18n.DnGXu-z4.js";import{q as v,S as x,aw as K,at as Q,R as X,p as Y,u as Z,j as M,f as k,s as N,a as $,ax as tt,c as et,t as rt,r as st,ay as T,w as C}from"../chunks/runtime.H0yrZg9K.js";import{h as nt,m as ot,u as at,a as it}from"../chunks/store.CGsdMBJU.js";import{j as D,a as P,t as z,k as ct}from"../chunks/disclose-version.Ct5PvfHI.js";import{p as I,o as lt,i as V,a as ut,b as j}from"../chunks/index-client.Crcxntfw.js";import{c as p}from"../chunks/svelte-component.DVib471X.js";function mt(n){return class extends dt{constructor(t){super({component:n,...t})}}}var g,u;class dt{constructor(t){A(this,g);A(this,u);var h;var r=new Map,a=(s,e)=>{var m=X(e);return r.set(s,m),m};const c=new Proxy({...t.props||{},$$events:{}},{get(s,e){return v(r.get(e)??a(e,Reflect.get(s,e)))},has(s,e){return v(r.get(e)??a(e,Reflect.get(s,e))),Reflect.has(s,e)},set(s,e,m){return x(r.get(e)??a(e,m),m),Reflect.set(s,e,m)}});S(this,u,(t.hydrate?nt:ot)(t.component,{target:t.target,props:c,context:t.context,intro:t.intro??!1,recover:t.recover})),(!((h=t==null?void 0:t.props)!=null&&h.$$host)||t.sync===!1)&&K(),S(this,g,c.$$events);for(const s of Object.keys(i(this,u)))s==="$set"||s==="$destroy"||s==="$on"||Q(this,s,{get(){return i(this,u)[s]},set(e){i(this,u)[s]=e},enumerable:!0});i(this,u).$set=s=>{Object.assign(c,s)},i(this,u).$destroy=()=>{at(i(this,u))}}$set(t){i(this,u).$set(t)}$on(t,r){i(this,g)[t]=i(this,g)[t]||[];const a=(...c)=>r.call(this,...c);return i(this,g)[t].push(a),()=>{i(this,g)[t]=i(this,g)[t].filter(c=>c!==a)}}$destroy(){i(this,u).$destroy()}}g=new WeakMap,u=new WeakMap;const ft="modulepreload",_t=function(n,t){return new URL(n,t).href},W={},R=function(t,r,a){let c=Promise.resolve();if(r&&r.length>0){const s=document.getElementsByTagName("link"),e=document.querySelector("meta[property=csp-nonce]"),m=(e==null?void 0:e.nonce)||(e==null?void 0:e.getAttribute("nonce"));c=Promise.allSettled(r.map(l=>{if(l=_t(l,a),l in W)return;W[l]=!0;const y=l.endsWith(".css"),L=y?'[rel="stylesheet"]':"";if(!!a)for(let d=s.length-1;d>=0;d--){const _=s[d];if(_.href===l&&(!y||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${L}`))return;const o=document.createElement("link");if(o.rel=y?"stylesheet":ft,y||(o.as="script"),o.crossOrigin="",o.href=l,m&&o.setAttribute("nonce",m),document.head.appendChild(o),y)return new Promise((d,_)=>{o.addEventListener("load",d),o.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}function h(s){const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=s,window.dispatchEvent(e),!e.defaultPrevented)throw s}return c.then(s=>{for(const e of s||[])e.status==="rejected"&&h(e.reason);return t().catch(h)})},ht=J.reroute(),Ot={};var vt=z('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),gt=z("<!> <!>",1);function yt(n,t){Y(t,!0);let r=I(t,"components",23,()=>[]),a=I(t,"data_0",3,null),c=I(t,"data_1",3,null);Z(()=>t.stores.page.set(t.page)),M(()=>{t.stores,t.page,t.constructors,r(),t.form,a(),c(),t.stores.page.notify()});let h=T(!1),s=T(!1),e=T(null);lt(()=>{const E=t.stores.page.subscribe(()=>{v(h)&&(x(s,!0),tt().then(()=>{x(e,ut(document.title||"untitled page"))}))});return x(h,!0),E});const m=C(()=>t.constructors[1]);var l=gt(),y=k(l);V(y,()=>t.constructors[1],E=>{var o=D();const d=C(()=>t.constructors[0]);var _=k(o);p(_,()=>v(d),(b,O)=>{j(O(b,{get data(){return a()},get form(){return t.form},children:(f,Et)=>{var q=D(),F=k(q);p(F,()=>v(m),(G,H)=>{j(H(G,{get data(){return c()},get form(){return t.form}}),w=>r()[1]=w,()=>{var w;return(w=r())==null?void 0:w[1]})}),P(f,q)},$$slots:{default:!0}}),f=>r()[0]=f,()=>{var f;return(f=r())==null?void 0:f[0]})}),P(E,o)},E=>{var o=D();const d=C(()=>t.constructors[0]);var _=k(o);p(_,()=>v(d),(b,O)=>{j(O(b,{get data(){return a()},get form(){return t.form}}),f=>r()[0]=f,()=>{var f;return(f=r())==null?void 0:f[0]})}),P(E,o)});var L=N(y,2);V(L,()=>v(h),E=>{var o=vt(),d=et(o);V(d,()=>v(s),_=>{var b=ct();rt(()=>it(b,v(e))),P(_,b)}),st(o),P(E,o)}),P(n,l),$()}const At=mt(yt),St=[()=>R(()=>import("../nodes/0.B9D5jCmV.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]),import.meta.url),()=>R(()=>import("../nodes/1.Dpqr-xPS.js"),__vite__mapDeps([13,1,2,7,5,11,6,4]),import.meta.url),()=>R(()=>import("../nodes/2.BPQ3cyUr.js"),__vite__mapDeps([14,1,2,10,11]),import.meta.url),()=>R(()=>import("../nodes/3.BPQ3cyUr.js"),__vite__mapDeps([15,1,2,10,11]),import.meta.url),()=>R(()=>import("../nodes/4.0ctDck0f.js"),__vite__mapDeps([16,1,2,17,8,7,5,9,10,11,18]),import.meta.url),()=>R(()=>import("../nodes/5.0ctDck0f.js"),__vite__mapDeps([19,1,2,17,8,7,5,9,10,11,18]),import.meta.url)],Tt=[],Ct={"/":[2],"/about":[3],"/contact":[4],"/review":[5]},Dt={handleError:({error:n})=>{console.error(n)},reroute:ht||(()=>{})};export{Ct as dictionary,Dt as hooks,Ot as matchers,St as nodes,At as root,Tt as server_loads};
