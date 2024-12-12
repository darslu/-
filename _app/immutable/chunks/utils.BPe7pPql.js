import{ar as m,ak as g,as as S,P as y,Q as D,h as _,T as x,at as O,a5 as P,z as T,F as f,au as L,av as I,i as l,D as V,b as W}from"./runtime.DsZIy1wM.js";function F(e){var t=S,r=y;m(null),g(null);try{return e()}finally{m(t),g(r)}}const j=new Set,q=new Set;function H(e){if(!_)return;e.onload&&e.removeAttribute("onload"),e.onerror&&e.removeAttribute("onerror");const t=e.__e;t!==void 0&&(e.__e=void 0,queueMicrotask(()=>{e.isConnected&&e.dispatchEvent(t)}))}function B(e,t,r,i){function n(a){if(i.capture||R.call(t,a),!a.cancelBubble)return F(()=>r.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?x(()=>{t.addEventListener(e,n,i)}):t.addEventListener(e,n,i),n}function Q(e,t,r,i,n){var a={capture:i,passive:n},o=B(e,t,r,a);(t===document.body||t===window||t===document)&&D(()=>{t.removeEventListener(e,o,a)})}function J(e){for(var t=0;t<e.length;t++)j.add(e[t]);for(var r of q)r(e)}function R(e){var A;var t=this,r=t.ownerDocument,i=e.type,n=((A=e.composedPath)==null?void 0:A.call(e))||[],a=n[0]||e.target,o=0,d=e.__root;if(d){var s=n.indexOf(d);if(s!==-1&&(t===document||t===window)){e.__root=t;return}var c=n.indexOf(t);if(c===-1)return;s<=c&&(o=s)}if(a=n[o]||e.target,a!==t){O(e,"currentTarget",{configurable:!0,get(){return a||r}});var E=S,b=y;m(null),g(null);try{for(var v,k=[];a!==null;){var w=a.assignedSlot||a.parentNode||a.host||null;try{var p=a["__"+i];if(p!==void 0&&!a.disabled)if(P(p)){var[N,...C]=p;N.apply(a,[e,...C])}else p.call(a,e)}catch(h){v?k.push(h):v=h}if(e.cancelBubble||w===t||w===null)break;a=w}if(v){for(let h of k)queueMicrotask(()=>{throw h});throw v}}finally{e.__root=t,delete e.currentTarget,m(E),g(b)}}}function M(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function u(e,t){var r=y;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function K(e,t){var r=(t&L)!==0,i=(t&I)!==0,n,a=!e.startsWith("<!>");return()=>{if(_)return u(l,null),l;n===void 0&&(n=M(a?e:"<!>"+e),r||(n=f(n)));var o=i?document.importNode(n,!0):n.cloneNode(!0);if(r){var d=f(o),s=o.lastChild;u(d,s)}else u(o,o);return o}}function X(e,t,r="svg"){var i=!e.startsWith("<!>"),n=(t&L)!==0,a=`<${r}>${i?e:"<!>"+e}</${r}>`,o;return()=>{if(_)return u(l,null),l;if(!o){var d=M(a),s=f(d);if(n)for(o=document.createDocumentFragment();f(s);)o.appendChild(f(s));else o=f(s)}var c=o.cloneNode(!0);if(n){var E=f(c),b=c.lastChild;u(E,b)}else u(c,c);return c}}function Y(e=""){if(!_){var t=T(e+"");return u(t,t),t}var r=l;return r.nodeType!==3&&(r.before(r=T()),V(r)),u(r,r),r}function Z(){if(_)return u(l,null),l;var e=document.createDocumentFragment(),t=document.createComment(""),r=T();return e.append(t,r),u(t,r),e}function ee(e,t){if(_){y.nodes_end=l,W();return}e!==null&&e.before(t)}function te(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const $=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function re(e){return $.includes(e)}const z={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject"};function ae(e){return e=e.toLowerCase(),z[e]??e}const G=["touchstart","touchmove"];function ne(e){return G.includes(e)}export{ee as a,j as b,u as c,te as d,B as e,J as f,re as g,R as h,ne as i,Z as j,Y as k,M as l,Q as m,ae as n,X as o,H as p,q as r,K as t};
