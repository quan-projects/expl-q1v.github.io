import{F as We,S as Z,i as x,s as ee,a as j,e as R,c as O,b as $,E as H,h as f,o as Te,l as _,m,n as g,p as o,q as De,G as p,r as X,u as Y,H as re,I as ne,J as de,K as M,L as Ge,v as he,M as Ee,N as Ie,w as Q,x as W,O as Xe,y as F,P as we,f as U,t as C,B as G,Q as Ae,g as Ne,d as Pe,R as Ye,T as Ze,z as xe,A as et,C as tt,U as st,V as rt,W as nt,X as at,Y as Be,Z as lt}from"../chunks/index-d1f88ab2.js";import{c as te}from"../chunks/singletons-cdeec3fd.js";import{M as ke}from"../chunks/Modal-7dfcadd7.js";import{s as Se}from"../chunks/stats-9b98a21e.js";import{s as oe,b as ot}from"../chunks/server-7bdc2a5e.js";import{t as it}from"../chunks/transaction-06a72f5c.js";import{p as ct}from"../chunks/paymentid-a4b3aa8d.js";import{u as Le}from"../chunks/unconfirmed-12e26f7f.js";import"../chunks/index-08e0cf00.js";const Ke=()=>{const l=We("__svelte__");return{page:{subscribe:l.page.subscribe},navigating:{subscribe:l.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:l.navigating.subscribe}},session:l.session,updated:l.updated}},ut={subscribe(l){return Ke().page.subscribe(l)}},ft={subscribe(l){return Ke().navigating.subscribe(l)}};function Ve(l){let t,s;return{c(){t=_("div"),s=_("div"),this.h()},l(e){t=m(e,"DIV",{class:!0});var r=g(t);s=m(r,"DIV",{class:!0,style:!0}),g(s).forEach(f),r.forEach(f),this.h()},h(){o(s,"class","progress svelte-1je61mu"),De(s,"width",l[0]*100+"%"),o(t,"class","progress-container svelte-1je61mu")},m(e,r){$(e,t,r),p(t,s)},p(e,r){r&1&&De(s,"width",e[0]*100+"%")},d(e){e&&f(t)}}}function Ue(l){let t;return{c(){t=_("div"),this.h()},l(s){t=m(s,"DIV",{class:!0}),g(t).forEach(f),this.h()},h(){o(t,"class","fade svelte-1je61mu")},m(s,e){$(s,t,e)},d(s){s&&f(t)}}}function pt(l){let t,s,e=l[1]&&Ve(l),r=l[0]>=.4&&Ue();return{c(){e&&e.c(),t=j(),r&&r.c(),s=R()},l(n){e&&e.l(n),t=O(n),r&&r.l(n),s=R()},m(n,a){e&&e.m(n,a),$(n,t,a),r&&r.m(n,a),$(n,s,a)},p(n,[a]){n[1]?e?e.p(n,a):(e=Ve(n),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null),n[0]>=.4?r||(r=Ue(),r.c(),r.m(s.parentNode,s)):r&&(r.d(1),r=null)},i:H,o:H,d(n){e&&e.d(n),n&&f(t),r&&r.d(n),n&&f(s)}}}function dt(l,t,s){let e=0,r=!1;return Te(()=>{s(1,r=!0);function n(){s(0,e+=.1);const a=1-e;a>.15&&setTimeout(n,500/a)}setTimeout(n,250)}),[e,r]}class ht extends Z{constructor(t){super(),x(this,t,dt,pt,ee,{})}}function _t(l){let t,s;return{c(){t=_("footer"),s=X("Powered by Quan Project"),this.h()},l(e){t=m(e,"FOOTER",{class:!0});var r=g(t);s=Y(r,"Powered by Quan Project"),r.forEach(f),this.h()},h(){o(t,"class","text-quan-color2 text-center font-bold text-sm subpixel-antialiased tracking-wider uppercase align-middle p-2")},m(e,r){$(e,t,r),p(t,s)},p:H,i:H,o:H,d(e){e&&f(t)}}}class mt extends Z{constructor(t){super(),x(this,t,null,_t,ee,{})}}function gt(l){let t,s,e,r,n,a,i;return{c(){t=_("button"),s=re("svg"),e=re("line"),r=re("line"),n=re("line"),this.h()},l(c){t=m(c,"BUTTON",{class:!0});var u=g(t);s=ne(u,"svg",{width:!0,height:!0,class:!0});var w=g(s);e=ne(w,"line",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,class:!0}),g(e).forEach(f),r=ne(w,"line",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,class:!0}),g(r).forEach(f),n=ne(w,"line",{id:!0,x1:!0,y1:!0,x2:!0,y2:!0,class:!0}),g(n).forEach(f),w.forEach(f),u.forEach(f),this.h()},h(){o(e,"id","top"),o(e,"x1","0"),o(e,"y1","2"),o(e,"x2","32"),o(e,"y2","2"),o(e,"class","svelte-1d189t5"),o(r,"id","middle"),o(r,"x1","0"),o(r,"y1","12"),o(r,"x2","24"),o(r,"y2","12"),o(r,"class","svelte-1d189t5"),o(n,"id","bottom"),o(n,"x1","0"),o(n,"y1","22"),o(n,"x2","32"),o(n,"y2","22"),o(n,"class","svelte-1d189t5"),o(s,"width","32"),o(s,"height","24"),o(s,"class","svelte-1d189t5"),o(t,"class","text-slate-50 hover:text-slate-50 cursor-pointer mr-4 border-none focus:outline-none md:hidden svelte-1d189t5"),de(t,"open",l[0])},m(c,u){$(c,t,u),p(t,s),p(s,e),p(s,r),p(s,n),a||(i=M(t,"click",l[1]),a=!0)},p(c,[u]){u&1&&de(t,"open",c[0])},i:H,o:H,d(c){c&&f(t),a=!1,i()}}}function bt(l,t,s){let{open:e=!1}=t;const r=()=>s(0,e=!e);return l.$$set=n=>{"open"in n&&s(0,e=n.open)},[e,r]}class vt extends Z{constructor(t){super(),x(this,t,bt,gt,ee,{open:0})}}te.disable_scroll_handling;const ie=te.goto;te.invalidate;te.prefetch;te.prefetch_routes;te.before_navigate;te.after_navigate;function Me(l,t,s){const e=l.slice();return e[3]=t[s],e}function Ce(l){let t,s=l[1],e=[];for(let r=0;r<s.length;r+=1)e[r]=Je(Me(l,s,r));return{c(){for(let r=0;r<e.length;r+=1)e[r].c();t=R()},l(r){for(let n=0;n<e.length;n+=1)e[n].l(r);t=R()},m(r,n){for(let a=0;a<e.length;a+=1)e[a].m(r,n);$(r,t,n)},p(r,n){if(n&7){s=r[1];let a;for(a=0;a<s.length;a+=1){const i=Me(r,s,a);e[a]?e[a].p(i,n):(e[a]=Je(i),e[a].c(),e[a].m(t.parentNode,t))}for(;a<e.length;a+=1)e[a].d(1);e.length=s.length}},d(r){Ge(e,r),r&&f(t)}}}function yt(l){let t,s=l[3].title+"",e,r,n,a,i;return{c(){t=_("li"),e=X(s),r=j(),this.h()},l(c){t=m(c,"LI",{class:!0,"data-goto":!0});var u=g(t);e=Y(u,s),r=O(u),u.forEach(f),this.h()},h(){o(t,"class","hover:text-red-400 cursor-pointer"),o(t,"data-goto",n=l[3].url)},m(c,u){$(c,t,u),p(t,e),p(t,r),a||(i=M(t,"click",l[2]),a=!0)},p(c,u){u&2&&s!==(s=c[3].title+"")&&he(e,s),u&2&&n!==(n=c[3].url)&&o(t,"data-goto",n)},d(c){c&&f(t),a=!1,i()}}}function kt(l){let t,s=l[3].title+"",e,r,n,a,i;return{c(){t=_("li"),e=X(s),r=j(),this.h()},l(c){t=m(c,"LI",{class:!0,"data-goto":!0});var u=g(t);e=Y(u,s),r=O(u),u.forEach(f),this.h()},h(){o(t,"class","text-red-400 cursor-pointer"),o(t,"data-goto",n=l[3].url)},m(c,u){$(c,t,u),p(t,e),p(t,r),a||(i=M(t,"click",l[2]),a=!0)},p(c,u){u&2&&s!==(s=c[3].title+"")&&he(e,s),u&2&&n!==(n=c[3].url)&&o(t,"data-goto",n)},d(c){c&&f(t),a=!1,i()}}}function Je(l){let t;function s(n,a){return n[0]===n[3].url?kt:yt}let e=s(l),r=e(l);return{c(){r.c(),t=R()},l(n){r.l(n),t=R()},m(n,a){r.m(n,a),$(n,t,a)},p(n,a){e===(e=s(n))&&r?r.p(n,a):(r.d(1),r=e(n),r&&(r.c(),r.m(t.parentNode,t)))},d(n){r.d(n),n&&f(t)}}}function Et(l){let t,s,e=l[1]&&l[1].length>0&&Ce(l);return{c(){t=_("nav"),s=_("ul"),e&&e.c(),this.h()},l(r){t=m(r,"NAV",{class:!0});var n=g(t);s=m(n,"UL",{class:!0});var a=g(s);e&&e.l(a),a.forEach(f),n.forEach(f),this.h()},h(){o(s,"class","list-none inline-grid grid-flow-col gap-4"),o(t,"class","hidden uppercase sm:block font-bold")},m(r,n){$(r,t,n),p(t,s),e&&e.m(s,null)},p(r,[n]){r[1]&&r[1].length>0?e?e.p(r,n):(e=Ce(r),e.c(),e.m(s,null)):e&&(e.d(1),e=null)},i:H,o:H,d(r){r&&f(t),e&&e.d()}}}function It(l,t,s){let{page:e,menuItems:r}=t;const n=async a=>{if(a&&a.target&&a.target.dataset){const i=a.target.dataset.goto;i&&await ie(i,{replaceState:!1})}};return l.$$set=a=>{"page"in a&&s(0,e=a.page),"menuItems"in a&&s(1,r=a.menuItems)},[e,r,n]}class wt extends Z{constructor(t){super(),x(this,t,It,Et,ee,{page:0,menuItems:1})}}function St(l){let t,s,e,r,n,a,i,c,u,w,h,D,y,q,b;function J(S){l[3](S)}let z={};return l[0]!==void 0&&(z.open=l[0]),e=new vt({props:z}),Ee.push(()=>Ie(e,"open",J)),q=new wt({props:{page:l[1],menuItems:l[2]}}),{c(){t=_("header"),s=_("nav"),Q(e.$$.fragment),n=j(),a=_("picture"),i=_("source"),c=j(),u=_("source"),w=j(),h=_("img"),y=j(),Q(q.$$.fragment),this.h()},l(S){t=m(S,"HEADER",{class:!0});var T=g(t);s=m(T,"NAV",{class:!0});var k=g(s);W(e.$$.fragment,k),n=O(k),a=m(k,"PICTURE",{class:!0});var I=g(a);i=m(I,"SOURCE",{srcset:!0,type:!0}),c=O(I),u=m(I,"SOURCE",{srcset:!0,type:!0}),w=O(I),h=m(I,"IMG",{class:!0,src:!0,alt:!0}),I.forEach(f),k.forEach(f),y=O(T),W(q.$$.fragment,T),T.forEach(f),this.h()},h(){o(i,"srcset","/assets/img/quan-project.webp"),o(i,"type","image/webp"),o(u,"srcset","/assets/img/quan-project.png"),o(u,"type","image/png"),o(h,"class","h-6 sm:h-6"),Xe(h.src,D="/assets/img/quan-project.png")||o(h,"src",D),o(h,"alt","Quan Project"),o(a,"class","mr-3"),o(s,"class","flex"),o(t,"class","flex justify-between p-2 items-center text-slate-50 svelte-6fczw8")},m(S,T){$(S,t,T),p(t,s),F(e,s,null),p(s,n),p(s,a),p(a,i),p(a,c),p(a,u),p(a,w),p(a,h),p(t,y),F(q,t,null),b=!0},p(S,[T]){const k={};!r&&T&1&&(r=!0,k.open=S[0],we(()=>r=!1)),e.$set(k);const I={};T&2&&(I.page=S[1]),T&4&&(I.menuItems=S[2]),q.$set(I)},i(S){b||(U(e.$$.fragment,S),U(q.$$.fragment,S),b=!0)},o(S){C(e.$$.fragment,S),C(q.$$.fragment,S),b=!1},d(S){S&&f(t),G(e),G(q)}}}function Tt(l,t,s){let{sidebar:e=!1,page:r,menuItems:n}=t;function a(i){e=i,s(0,e)}return l.$$set=i=>{"sidebar"in i&&s(0,e=i.sidebar),"page"in i&&s(1,r=i.page),"menuItems"in i&&s(2,n=i.menuItems)},[e,r,n,a]}class Nt extends Z{constructor(t){super(),x(this,t,Tt,St,ee,{sidebar:0,page:1,menuItems:2})}}function Re(l,t,s){const e=l.slice();return e[4]=t[s],e}function ze(l){let t,s=l[2],e=[];for(let r=0;r<s.length;r+=1)e[r]=He(Re(l,s,r));return{c(){for(let r=0;r<e.length;r+=1)e[r].c();t=R()},l(r){for(let n=0;n<e.length;n+=1)e[n].l(r);t=R()},m(r,n){for(let a=0;a<e.length;a+=1)e[a].m(r,n);$(r,t,n)},p(r,n){if(n&14){s=r[2];let a;for(a=0;a<s.length;a+=1){const i=Re(r,s,a);e[a]?e[a].p(i,n):(e[a]=He(i),e[a].c(),e[a].m(t.parentNode,t))}for(;a<e.length;a+=1)e[a].d(1);e.length=s.length}},d(r){Ge(e,r),r&&f(t)}}}function Pt(l){let t,s=l[4].title+"",e,r,n,a,i;return{c(){t=_("li"),e=X(s),r=j(),this.h()},l(c){t=m(c,"LI",{class:!0,"data-goto":!0});var u=g(t);e=Y(u,s),r=O(u),u.forEach(f),this.h()},h(){o(t,"class","hover:text-red-400 cursor-pointer"),o(t,"data-goto",n=l[4].url)},m(c,u){$(c,t,u),p(t,e),p(t,r),a||(i=M(t,"click",l[3]),a=!0)},p(c,u){u&4&&s!==(s=c[4].title+"")&&he(e,s),u&4&&n!==(n=c[4].url)&&o(t,"data-goto",n)},d(c){c&&f(t),a=!1,i()}}}function jt(l){let t,s=l[4].title+"",e,r,n,a,i;return{c(){t=_("li"),e=X(s),r=j(),this.h()},l(c){t=m(c,"LI",{class:!0,"data-goto":!0});var u=g(t);e=Y(u,s),r=O(u),u.forEach(f),this.h()},h(){o(t,"class","text-red-400 cursor-pointer"),o(t,"data-goto",n=l[4].url)},m(c,u){$(c,t,u),p(t,e),p(t,r),a||(i=M(t,"click",l[3]),a=!0)},p(c,u){u&4&&s!==(s=c[4].title+"")&&he(e,s),u&4&&n!==(n=c[4].url)&&o(t,"data-goto",n)},d(c){c&&f(t),a=!1,i()}}}function He(l){let t;function s(n,a){return n[1]===n[4].url?jt:Pt}let e=s(l),r=e(l);return{c(){r.c(),t=R()},l(n){r.l(n),t=R()},m(n,a){r.m(n,a),$(n,t,a)},p(n,a){e===(e=s(n))&&r?r.p(n,a):(r.d(1),r=e(n),r&&(r.c(),r.m(t.parentNode,t)))},d(n){r.d(n),n&&f(t)}}}function Ot(l){let t,s,e,r=l[2]&&l[2].length>0&&ze(l);return{c(){t=_("aside"),s=_("nav"),e=_("ul"),r&&r.c(),this.h()},l(n){t=m(n,"ASIDE",{class:!0});var a=g(t);s=m(a,"NAV",{class:!0});var i=g(s);e=m(i,"UL",{class:!0});var c=g(e);r&&r.l(c),c.forEach(f),i.forEach(f),a.forEach(f),this.h()},h(){o(e,"class","list-none inline-grid grid-flow-row gap-4"),o(s,"class","p-12 text-xl text-center font-bold"),o(t,"class","absolute z-[99999] w-full h-full border-r-2 shadow-lg md:hidden svelte-1kv1xx1"),de(t,"open",l[0])},m(n,a){$(n,t,a),p(t,s),p(s,e),r&&r.m(e,null)},p(n,[a]){n[2]&&n[2].length>0?r?r.p(n,a):(r=ze(n),r.c(),r.m(e,null)):r&&(r.d(1),r=null),a&1&&de(t,"open",n[0])},i:H,o:H,d(n){n&&f(t),r&&r.d()}}}function $t(l,t,s){let{open:e=!1,page:r,menuItems:n}=t;const a=async i=>{if(i&&i.target&&i.target.dataset){const c=i.target.dataset.goto;c&&(await ie(c,{replaceState:!1}),s(0,e=!1))}};return l.$$set=i=>{"open"in i&&s(0,e=i.open),"page"in i&&s(1,r=i.page),"menuItems"in i&&s(2,n=i.menuItems)},[e,r,n,a]}class qt extends Z{constructor(t){super(),x(this,t,$t,Ot,ee,{open:0,page:1,menuItems:2})}}function Qe(l){let t,s,e;const r=[l[2].props];var n=l[2].component;function a(i){let c={};for(let u=0;u<r.length;u+=1)c=tt(c,r[u]);return{props:c}}return n&&(t=new n(a())),{c(){t&&Q(t.$$.fragment),s=R()},l(i){t&&W(t.$$.fragment,i),s=R()},m(i,c){t&&F(t,i,c),$(i,s,c),e=!0},p(i,c){const u=c&4?xe(r,[et(i[2].props)]):{};if(n!==(n=i[2].component)){if(t){Ne();const w=t;C(w.$$.fragment,1,0,()=>{G(w,1)}),Pe()}n?(t=new n(a()),Q(t.$$.fragment),U(t.$$.fragment,1),F(t,s.parentNode,s)):t=null}else n&&t.$set(u)},i(i){e||(t&&U(t.$$.fragment,i),e=!0)},o(i){t&&C(t.$$.fragment,i),e=!1},d(i){i&&f(s),t&&G(t,i)}}}function Dt(l){let t,s,e,r,n,a,i,c,u,w,h,D,y,q,b,J,z,S,T,k,I,d,E,v,N,L,B,_e,K,ae,me,le,ge,je,A=l[2]&&Qe(l);return{c(){A&&A.c(),t=j(),s=_("div"),e=_("div"),r=_("div"),n=_("input"),a=j(),i=_("button"),c=re("svg"),u=re("path"),w=j(),h=_("div"),D=_("div"),y=_("input"),q=j(),b=_("label"),J=_("span"),z=X("\xA0\xA0Bloco"),S=j(),T=_("div"),k=_("input"),I=j(),d=_("label"),E=_("span"),v=X("\xA0\xA0Transa\xE7\xE3o"),N=j(),L=_("div"),B=_("input"),_e=j(),K=_("label"),ae=_("span"),me=X("\xA0\xA0Id de pagamento"),this.h()},l(P){A&&A.l(P),t=O(P),s=m(P,"DIV",{class:!0});var V=g(s);e=m(V,"DIV",{class:!0});var Oe=g(e);r=m(Oe,"DIV",{class:!0});var ce=g(r);n=m(ce,"INPUT",{class:!0,type:!0,name:!0,placeholder:!0}),a=O(ce),i=m(ce,"BUTTON",{type:!0,class:!0});var $e=g(i);c=ne($e,"svg",{"xml:space":!0,class:!0,viewBox:!0});var qe=g(c);u=ne(qe,"path",{d:!0}),g(u).forEach(f),qe.forEach(f),$e.forEach(f),ce.forEach(f),Oe.forEach(f),w=O(V),h=m(V,"DIV",{class:!0});var se=g(h);D=m(se,"DIV",{class:!0});var ue=g(D);y=m(ue,"INPUT",{class:!0,type:!0,name:!0,id:!0}),q=O(ue),b=m(ue,"LABEL",{class:!0,for:!0});var be=g(b);J=m(be,"SPAN",{class:!0}),g(J).forEach(f),z=Y(be,"\xA0\xA0Bloco"),be.forEach(f),ue.forEach(f),S=O(se),T=m(se,"DIV",{class:!0});var fe=g(T);k=m(fe,"INPUT",{class:!0,type:!0,name:!0,id:!0}),I=O(fe),d=m(fe,"LABEL",{class:!0,for:!0});var ve=g(d);E=m(ve,"SPAN",{class:!0}),g(E).forEach(f),v=Y(ve,"\xA0\xA0Transa\xE7\xE3o"),ve.forEach(f),fe.forEach(f),N=O(se),L=m(se,"DIV",{class:!0});var pe=g(L);B=m(pe,"INPUT",{class:!0,type:!0,name:!0,id:!0}),_e=O(pe),K=m(pe,"LABEL",{class:!0,for:!0});var ye=g(K);ae=m(ye,"SPAN",{class:!0}),g(ae).forEach(f),me=Y(ye,"\xA0\xA0Id de pagamento"),ye.forEach(f),pe.forEach(f),se.forEach(f),V.forEach(f),this.h()},h(){o(n,"class","w-full border-2 border-purple-700 bg-transparent h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"),o(n,"type","search"),o(n,"name","search"),o(n,"placeholder",l[3]),n.required=!0,o(u,"d","M55.146 51.887 41.588 37.786A22.926 22.926 0 0 0 46.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 0 0 .083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z"),o(c,"xml:space","preserve"),o(c,"class","text-quan-color2 h-4 w-4 fill-current"),o(c,"viewBox","0 0 56.966 56.966"),o(i,"type","submit"),o(i,"class","absolute right-0 top-0 mt-5 mr-4"),o(r,"class","pt-2 relative w-full mx-auto text-sky-400"),o(e,"class","flex justify-left px-6 pt-6"),o(y,"class","hidden svelte-ipier3"),o(y,"type","radio"),o(y,"name","searchTypeOptions"),o(y,"id","searchType1"),y.__value="block",y.value=y.__value,l[10][0].push(y),o(J,"class","w-4 h-4 inline-block border border-transparent svelte-ipier3"),o(b,"class","flex items-center cursor-pointer font-semibold svelte-ipier3"),o(b,"for","searchType1"),o(D,"class","form-check form-check-inline p-4"),o(k,"class","hidden svelte-ipier3"),o(k,"type","radio"),o(k,"name","searchTypeOptions"),o(k,"id","searchType2"),k.__value="tx",k.value=k.__value,l[10][0].push(k),o(E,"class","w-4 h-4 inline-block border border-transparent svelte-ipier3"),o(d,"class","flex items-center cursor-pointer font-semibold svelte-ipier3"),o(d,"for","searchType2"),o(T,"class","form-check form-check-inline p-4"),o(B,"class","hidden svelte-ipier3"),o(B,"type","radio"),o(B,"name","searchTypeOptions"),o(B,"id","searchType3"),B.__value="paymentId",B.value=B.__value,l[10][0].push(B),o(ae,"class","w-4 h-4 inline-block border border-transparent svelte-ipier3"),o(K,"class","flex items-center cursor-pointer font-semibold svelte-ipier3"),o(K,"for","searchType3"),o(L,"class","form-check form-check-inline p-4"),o(h,"class","flex justify-center items-center px-6 pb-6"),o(s,"class","grid grid-cols-1 gap-2")},m(P,V){A&&A.m(P,V),$(P,t,V),$(P,s,V),p(s,e),p(e,r),p(r,n),Ae(n,l[0]),p(r,a),p(r,i),p(i,c),p(c,u),p(s,w),p(s,h),p(h,D),p(D,y),y.checked=y.__value===l[1],p(D,q),p(D,b),p(b,J),p(b,z),p(h,S),p(h,T),p(T,k),k.checked=k.__value===l[1],p(T,I),p(T,d),p(d,E),p(d,v),p(h,N),p(h,L),p(L,B),B.checked=B.__value===l[1],p(L,_e),p(L,K),p(K,ae),p(K,me),le=!0,ge||(je=[M(n,"input",l[8]),M(n,"keypress",l[5]),M(i,"click",l[4]),M(y,"change",l[9]),M(y,"change",l[6]),M(k,"change",l[11]),M(k,"change",l[6]),M(B,"change",l[12]),M(B,"change",l[6])],ge=!0)},p(P,[V]){P[2]?A?(A.p(P,V),V&4&&U(A,1)):(A=Qe(P),A.c(),U(A,1),A.m(t.parentNode,t)):A&&(Ne(),C(A,1,1,()=>{A=null}),Pe()),(!le||V&8)&&o(n,"placeholder",P[3]),V&1&&Ae(n,P[0]),V&2&&(y.checked=y.__value===P[1]),V&2&&(k.checked=k.__value===P[1]),V&2&&(B.checked=B.__value===P[1])},i(P){le||(U(A),le=!0)},o(P){C(A),le=!1},d(P){A&&A.d(P),P&&f(t),P&&f(s),l[10][0].splice(l[10][0].indexOf(y),1),l[10][0].splice(l[10][0].indexOf(k),1),l[10][0].splice(l[10][0].indexOf(B),1),ge=!1,Ye(je)}}}function At(l,t,s){let e="",r="/",n,a,i=0,{page:c}=t,u="Pesquisar bloco por altura ou hash";const w=()=>(s(2,a={component:ke,props:{type:"searchError",body:"altura ou hash de block inv\xE1lido"}}),setTimeout(()=>{s(2,a=void 0),s(0,e="")},3e3),!0),h=()=>(s(2,a={component:ke,props:{type:"searchError",body:"hash de transa\xE7\xE3o inv\xE1lido"}}),setTimeout(()=>{s(2,a=void 0),s(0,e="")},3e3),!0),D=()=>(s(2,a={component:ke,props:{type:"searchError",body:"id inv\xE1lido"}}),setTimeout(()=>{s(2,a=void 0),s(0,e="")},3e3),!0),y=async()=>{const v={method:"POST",body:JSON.stringify({jsonrpc:"2.0",id:"test",method:"f_block_json",params:{hash:e.toString()}})},N=await oe.requestJson("/json_rpc",v);if(N){if(N.error)return w();N.res&&N.res.block&&(s(0,e=""),ot.setData({...N.res.block,fromSearch:!0,lastBlock:i}),r!=="/block"&&await ie("/block",{replaceState:!1}))}},q=async()=>{const v={method:"POST",body:JSON.stringify({jsonrpc:"2.0",id:"test",method:"f_transaction_json",params:{hash:e.toString()}})},N=await oe.requestJson("/json_rpc",v);if(N){if(N.error)return h();N.res&&(s(0,e=""),it.setData({...N.res,fromSearch:!0,lastBlock:i}),r!=="/transaction"&&await ie("/transaction",{replaceState:!1}))}},b=async()=>{const v=e.toString().toLowerCase(),N={method:"POST",body:JSON.stringify({jsonrpc:"2.0",id:"test",method:"k_transactions_by_payment_id",params:{payment_id:v}})},L=await oe.requestJson("/json_rpc",N);if(L){if(L.error)return D();L.res&&(s(0,e=""),ct.setData({...L.res,fromSearch:!0,hash:v}),r!=="/paymentid"&&await ie("/paymentid",{replaceState:!1}))}},J=()=>{if(e.toString().length>0){const v=e.toString().replace(/[^a-z]/gi,""),N=e.toString().replace(/[^0-9]/gi,"");return n==="block"?v.toString().length>0&&e.toString().length!==64||N.toString().length===0||Number(e)>i?w():y():n==="tx"?v.toString().length>0&&e.toString().length!==64?h():q():n==="paymentId"?b():!0}},z=v=>{v&&(v.keyCode===13||v.key.toLowerCase()==="enter")&&J()},S=v=>{s(1,n=v.currentTarget.value),n==="block"&&s(3,u="Pesquisar bloco por altura ou hash"),n==="paymentId"&&s(3,u="Pesquisar pagamento por identifica\xE7\xE3o"),n==="tx"&&s(3,u="Pesquisar transa\xE7\xE3o por hash")};Ze(()=>{if(c?r=c:r="/",typeof n>"u")switch(r){case"/transaction":s(1,n="tx");break;case"/paymentid":s(1,n="paymentId");break;default:s(1,n="block");break}}),Te(async()=>{Se.subscribe(v=>{v&&Number(v.height)&&(i=Number(v.height))})});const T=[[]];function k(){e=this.value,s(0,e)}function I(){n=this.__value,s(1,n)}function d(){n=this.__value,s(1,n)}function E(){n=this.__value,s(1,n)}return l.$$set=v=>{"page"in v&&s(7,c=v.page)},[e,n,a,u,J,z,S,c,k,I,T,d,E]}class Bt extends Z{constructor(t){super(),x(this,t,At,Dt,ee,{page:7})}}function Fe(l){let t,s;return t=new ht({}),{c(){Q(t.$$.fragment)},l(e){W(t.$$.fragment,e)},m(e,r){F(t,e,r),s=!0},i(e){s||(U(t.$$.fragment,e),s=!0)},o(e){C(t.$$.fragment,e),s=!1},d(e){G(t,e)}}}function Lt(l){let t,s,e,r,n,a,i,c,u,w,h,D,y,q,b=l[2]&&Fe();function J(d){l[6](d)}let z={menuItems:l[3],page:l[1].url.pathname};l[0]!==void 0&&(z.open=l[0]),e=new qt({props:z}),Ee.push(()=>Ie(e,"open",J));function S(d){l[7](d)}let T={page:l[1].url.pathname,menuItems:l[3]};l[0]!==void 0&&(T.sidebar=l[0]),a=new Nt({props:T}),Ee.push(()=>Ie(a,"sidebar",S)),u=new Bt({props:{page:l[1].url.pathname}});const k=l[5].default,I=st(k,l,l[4],null);return y=new mt({}),{c(){b&&b.c(),t=j(),s=_("main"),Q(e.$$.fragment),n=j(),Q(a.$$.fragment),c=j(),Q(u.$$.fragment),w=j(),I&&I.c(),h=j(),D=_("div"),Q(y.$$.fragment),this.h()},l(d){b&&b.l(d),t=O(d),s=m(d,"MAIN",{class:!0});var E=g(s);W(e.$$.fragment,E),n=O(E),W(a.$$.fragment,E),c=O(E),W(u.$$.fragment,E),w=O(E),I&&I.l(E),h=O(E),D=m(E,"DIV",{class:!0});var v=g(D);W(y.$$.fragment,v),v.forEach(f),E.forEach(f),this.h()},h(){o(D,"class","sticky top-[100vh]"),o(s,"class","w-full h-full")},m(d,E){b&&b.m(d,E),$(d,t,E),$(d,s,E),F(e,s,null),p(s,n),F(a,s,null),p(s,c),F(u,s,null),p(s,w),I&&I.m(s,null),p(s,h),p(s,D),F(y,D,null),q=!0},p(d,[E]){d[2]?b?E&4&&U(b,1):(b=Fe(),b.c(),U(b,1),b.m(t.parentNode,t)):b&&(Ne(),C(b,1,1,()=>{b=null}),Pe());const v={};E&2&&(v.page=d[1].url.pathname),!r&&E&1&&(r=!0,v.open=d[0],we(()=>r=!1)),e.$set(v);const N={};E&2&&(N.page=d[1].url.pathname),!i&&E&1&&(i=!0,N.sidebar=d[0],we(()=>i=!1)),a.$set(N);const L={};E&2&&(L.page=d[1].url.pathname),u.$set(L),I&&I.p&&(!q||E&16)&&rt(I,k,d,d[4],q?at(k,d[4],E,null):nt(d[4]),null)},i(d){q||(U(b),U(e.$$.fragment,d),U(a.$$.fragment,d),U(u.$$.fragment,d),U(I,d),U(y.$$.fragment,d),q=!0)},o(d){C(b),C(e.$$.fragment,d),C(a.$$.fragment,d),C(u.$$.fragment,d),C(I,d),C(y.$$.fragment,d),q=!1},d(d){b&&b.d(d),d&&f(t),d&&f(s),G(e),G(a),G(u),I&&I.d(d),G(y)}}}function Vt(l,t,s){let e,r;Be(l,ut,h=>s(1,e=h)),Be(l,ft,h=>s(2,r=h));let{$$slots:n={},$$scope:a}=t,i=!1;const c=[{url:"/",title:"Home"},{url:"/block",title:"Bloco"},{url:"https://quan-project.com/",title:"Quan Project"}];Te(async()=>{await oe.init(e.url.origin+"/assets/servers.json"),oe.subscribe(h=>{h&&h[0]&&(Se.init(h[0]),Le.init(h[0]))})}),lt(()=>{Se.stop(),Le.stop()});function u(h){i=h,s(0,i)}function w(h){i=h,s(0,i)}return l.$$set=h=>{"$$scope"in h&&s(4,a=h.$$scope)},[i,e,r,c,a,n,u,w]}class Gt extends Z{constructor(t){super(),x(this,t,Vt,Lt,ee,{})}}export{Gt as default};
