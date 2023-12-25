import{r as h,n as p,j as v,k as E,l as b,m as S,p as w,q as C,v as T,w as N,x as j,y as B,z as D}from"./scheduler.mUDnACJu.js";let $=!1;function H(){$=!0}function I(){$=!1}function L(e,t,n,i){for(;e<t;){const r=e+(t-e>>1);n(r)<=i?e=r+1:t=r}return e}function P(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const s=[];for(let a=0;a<t.length;a++){const o=t[a];o.claim_order!==void 0&&s.push(o)}t=s}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let r=0;for(let s=0;s<t.length;s++){const a=t[s].claim_order,o=(r>0&&t[n[r]].claim_order<=a?r+1:L(1,r,_=>t[n[_]].claim_order,a))-1;i[s]=n[o]+1;const u=o+1;n[u]=s,r=Math.max(u,r)}const f=[],l=[];let c=t.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(f.push(t[s-1]);c>=s;c--)l.push(t[c]);c--}for(;c>=0;c--)l.push(t[c]);f.reverse(),l.sort((s,a)=>s.claim_order-a.claim_order);for(let s=0,a=0;s<l.length;s++){for(;a<f.length&&l[s].claim_order>=f[a].claim_order;)a++;const o=a<f.length?f[a]:null;e.insertBefore(l[s],o)}}function q(e,t){if($){for(P(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function X(e,t,n){$&&!n?q(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function z(e){e.parentNode&&e.parentNode.removeChild(e)}function M(e){return document.createElement(e)}function y(e){return document.createTextNode(e)}function Y(){return y(" ")}function Z(){return y("")}function k(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function ee(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function te(e){return e.dataset.svelteH}function O(e){return Array.from(e.childNodes)}function R(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function A(e,t,n,i,r=!1){R(e);const f=(()=>{for(let l=e.claim_info.last_index;l<e.length;l++){const c=e[l];if(t(c)){const s=n(c);return s===void 0?e.splice(l,1):e[l]=s,r||(e.claim_info.last_index=l),c}}for(let l=e.claim_info.last_index-1;l>=0;l--){const c=e[l];if(t(c)){const s=n(c);return s===void 0?e.splice(l,1):e[l]=s,r?s===void 0&&e.claim_info.last_index--:e.claim_info.last_index=l,c}}return i()})();return f.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,f}function U(e,t,n,i){return A(e,r=>r.nodeName===t,r=>{const f=[];for(let l=0;l<r.attributes.length;l++){const c=r.attributes[l];n[c.name]||f.push(c.name)}f.forEach(l=>r.removeAttribute(l))},()=>i(t))}function ne(e,t,n){return U(e,t,n,M)}function V(e,t){return A(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>y(t),!0)}function ie(e){return V(e," ")}function re(e,t){t=""+t,e.data!==t&&(e.data=t)}function se(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function ae(e,t){const n=[];let i=0;for(const r of t.childNodes)if(r.nodeType===8){const f=r.textContent.trim();f===`HEAD_${e}_END`?(i-=1,n.push(r)):f===`HEAD_${e}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function le(e,t){return new e(t)}const m=new Set;let d;function fe(){d={r:0,c:[],p:d}}function ce(){d.r||h(d.c),d=d.p}function W(e,t){e&&e.i&&(m.delete(e),e.i(t))}function ue(e,t,n,i){if(e&&e.o){if(m.has(e))return;m.add(e),d.c.push(()=>{m.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function oe(e){e&&e.c()}function de(e,t){e&&e.l(t)}function F(e,t,n){const{fragment:i,after_update:r}=e.$$;i&&i.m(t,n),w(()=>{const f=e.$$.on_mount.map(j).filter(b);e.$$.on_destroy?e.$$.on_destroy.push(...f):h(f),e.$$.on_mount=[]}),r.forEach(w)}function G(e,t){const n=e.$$;n.fragment!==null&&(C(n.after_update),h(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function J(e,t){e.$$.dirty[0]===-1&&(B.push(e),D(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function _e(e,t,n,i,r,f,l=null,c=[-1]){const s=T;N(e);const a=e.$$={fragment:null,ctx:[],props:f,update:p,not_equal:r,bound:v(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:v(),dirty:c,skip_bound:!1,root:t.target||s.$$.root};l&&l(a.root);let o=!1;if(a.ctx=n?n(e,t.props||{},(u,_,...x)=>{const g=x.length?x[0]:_;return a.ctx&&r(a.ctx[u],a.ctx[u]=g)&&(!a.skip_bound&&a.bound[u]&&a.bound[u](g),o&&J(e,u)),_}):[],a.update(),o=!0,h(a.before_update),a.fragment=i?i(a.ctx):!1,t.target){if(t.hydrate){H();const u=O(t.target);a.fragment&&a.fragment.l(u),u.forEach(z)}else a.fragment&&a.fragment.c();t.intro&&W(e.$$.fragment),F(e,t.target,t.anchor),I(),E()}N(s)}class me{$$=void 0;$$set=void 0;$destroy(){G(this,1),this.$destroy=p}$on(t,n){if(!b(n))return p;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!S(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const K="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(K);export{k as A,me as S,X as a,ce as b,ie as c,W as d,Z as e,z as f,M as g,ne as h,_e as i,O as j,ee as k,se as l,y as m,V as n,re as o,fe as p,le as q,oe as r,Y as s,ue as t,de as u,F as v,G as w,q as x,ae as y,te as z};
