import{s as A,e as Q}from"../chunks/scheduler.mUDnACJu.js";import{S as U,i as B,g as f,s as w,m as h,r as F,h as _,j as V,z as G,c as q,n as v,f as y,u as J,k as M,a as K,x as e,v as N,o as R,d as O,t as W,w as X}from"../chunks/index.ghOtLcqO.js";import{d as Y}from"../chunks/singletons.g80ZrBqI.js";import{C as Z}from"../chunks/CommandLink.RlnDtkR6.js";const tt=()=>{const s=Y;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},et={subscribe(s){return tt().page.subscribe(s)}};function st(s){let a,t,l,z="An error has occured",g,d,T="Unfortunately, an error was encountered whilst trying to process your request.",P,p,j='If you believe this is a mistake, please contact us on our <a href="https://discord.gg/nP9SxVQGnu" target="_blank">Discord server</a>.',S,n,D,b=s[0].status+"",C,H,$=s[0].error?.message+"",E,I,k=s[0].url.pathname+"",x,L,i,u;return i=new Z({props:{title:"Go home"}}),i.$on("click",s[1]),{c(){a=f("div"),t=f("div"),l=f("h1"),l.textContent=z,g=w(),d=f("p"),d.textContent=T,P=w(),p=f("p"),p.innerHTML=j,S=w(),n=f("p"),D=h("Error code: "),C=h(b),H=h(`
			Error message: `),E=h($),I=h(`
			Route: `),x=h(k),L=w(),F(i.$$.fragment),this.h()},l(r){a=_(r,"DIV",{class:!0});var c=V(a);t=_(c,"DIV",{class:!0});var o=V(t);l=_(o,"H1",{"data-svelte-h":!0}),G(l)!=="svelte-10th5ak"&&(l.textContent=z),g=q(o),d=_(o,"P",{"data-svelte-h":!0}),G(d)!=="svelte-1eafemo"&&(d.textContent=T),P=q(o),p=_(o,"P",{"data-svelte-h":!0}),G(p)!=="svelte-100iek0"&&(p.innerHTML=j),S=q(o),n=_(o,"P",{class:!0});var m=V(n);D=v(m,"Error code: "),C=v(m,b),H=v(m,`
			Error message: `),E=v(m,$),I=v(m,`
			Route: `),x=v(m,k),m.forEach(y),L=q(o),J(i.$$.fragment,o),o.forEach(y),c.forEach(y),this.h()},h(){M(n,"class","error__info svelte-1dz3tlq"),M(t,"class","error svelte-1dz3tlq"),M(a,"class","content svelte-1dz3tlq")},m(r,c){K(r,a,c),e(a,t),e(t,l),e(t,g),e(t,d),e(t,P),e(t,p),e(t,S),e(t,n),e(n,D),e(n,C),e(n,H),e(n,E),e(n,I),e(n,x),e(t,L),N(i,t,null),u=!0},p(r,[c]){(!u||c&1)&&b!==(b=r[0].status+"")&&R(C,b),(!u||c&1)&&$!==($=r[0].error?.message+"")&&R(E,$),(!u||c&1)&&k!==(k=r[0].url.pathname+"")&&R(x,k)},i(r){u||(O(i.$$.fragment,r),u=!0)},o(r){W(i.$$.fragment,r),u=!1},d(r){r&&y(a),X(i)}}}function rt(s,a,t){let l;return Q(s,et,g=>t(0,l=g)),[l,()=>window.location.href="/"]}let it=class extends U{constructor(a){super(),B(this,a,rt,st,A,{})}};export{it as component};
