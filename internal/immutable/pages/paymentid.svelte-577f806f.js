import{S as Ce,i as Pe,s as Ne,a as V,l as m,c as z,m as _,n as v,h as o,p as f,b as C,f as M,g as ge,t as U,d as be,o as He,Z as Le,w as oe,e as qe,x as $e,y as ie,z as Me,A as Ae,B as ne,C as Be,r as P,u as N,G as r,$ as ee,K as Se,v as re,E as ce,L as Ge,R as Te}from"../chunks/index-d1f88ab2.js";import{u as te}from"../chunks/usePopper-e1520e00.js";import{M as Ke}from"../chunks/Modal-7dfcadd7.js";import{N as Oe}from"../chunks/NoticeCard-5460754c.js";import{p as ke}from"../chunks/paymentid-a4b3aa8d.js";import"../chunks/index-08e0cf00.js";function De(d,e,a){const t=d.slice();return t[3]=e[a],t}function Ve(d){let e,a,t;const s=[d[0].props];var u=d[0].component;function l(p){let i={};for(let $=0;$<s.length;$+=1)i=Be(i,s[$]);return{props:i}}return u&&(e=new u(l())),{c(){e&&oe(e.$$.fragment),a=qe()},l(p){e&&$e(e.$$.fragment,p),a=qe()},m(p,i){e&&ie(e,p,i),C(p,a,i),t=!0},p(p,i){const $=i&1?Me(s,[Ae(p[0].props)]):{};if(u!==(u=p[0].component)){if(e){ge();const n=e;U(n.$$.fragment,1,0,()=>{ne(n,1)}),be()}u?(e=new u(l()),oe(e.$$.fragment),M(e.$$.fragment,1),ie(e,a.parentNode,a)):e=null}else u&&e.$set($)},i(p){t||(e&&M(e.$$.fragment,p),t=!0)},o(p){e&&U(e.$$.fragment,p),t=!1},d(p){p&&o(a),e&&ne(e,p)}}}function Re(d){let e,a;return e=new Oe({props:{$$slots:{default:[Ze]},$$scope:{ctx:d}}}),{c(){oe(e.$$.fragment)},l(t){$e(e.$$.fragment,t)},m(t,s){ie(e,t,s),a=!0},p(t,s){const u={};s&64&&(u.$$scope={dirty:s,ctx:t}),e.$set(u)},i(t){a||(M(e.$$.fragment,t),a=!0)},o(t){U(e.$$.fragment,t),a=!1},d(t){ne(e,t)}}}function Ue(d){let e,a,t,s,u,l,p,i,$,n,h,y=d[1].hash+"",L,A,D,E,B,G,q,S,Z,K,k,g,w,O,F,T,H,J,fe,j,X,ue,ae,R,de,Ee,Q=d[1].transactions,x=[];for(let c=0;c<Q.length;c+=1)x[c]=ze(De(d,Q,c));return{c(){e=m("section"),a=m("div"),t=m("div"),s=m("div"),u=m("div"),l=m("p"),p=P(`identifica\xE7\xE3o do pagamento
                `),i=m("i"),$=V(),n=m("div"),h=m("p"),L=P(y),D=V(),E=m("i"),G=V(),q=m("div"),S=m("i"),Z=P("\xA0Transa\xE7\xF5es com esta identifica\xE7\xE3o de pagamento"),K=V(),k=m("div"),g=m("h2"),w=m("i"),O=P("\xA0id da transa\xE7\xE3o"),F=V(),T=m("h2"),H=m("i"),J=P("\xA0tamanho"),fe=V(),j=m("h2"),X=m("i"),ue=P("\xA0quantidade"),ae=V(),R=m("ul");for(let c=0;c<x.length;c+=1)x[c].c();this.h()},l(c){e=_(c,"SECTION",{class:!0});var I=v(e);a=_(I,"DIV",{class:!0});var b=v(a);t=_(b,"DIV",{class:!0});var Y=v(t);s=_(Y,"DIV",{class:!0});var xe=v(s);u=_(xe,"DIV",{class:!0});var se=v(u);l=_(se,"P",{class:!0});var pe=v(l);p=N(pe,`identifica\xE7\xE3o do pagamento
                `),i=_(pe,"I",{class:!0}),v(i).forEach(o),pe.forEach(o),$=z(se),n=_(se,"DIV",{class:!0});var le=v(n);h=_(le,"P",{class:!0,"data-title":!0});var Ie=v(h);L=N(Ie,y),Ie.forEach(o),D=z(le),E=_(le,"I",{class:!0,"data-title":!0}),v(E).forEach(o),le.forEach(o),se.forEach(o),xe.forEach(o),Y.forEach(o),b.forEach(o),I.forEach(o),G=z(c),q=_(c,"DIV",{class:!0});var he=v(q);S=_(he,"I",{class:!0}),v(S).forEach(o),Z=N(he,"\xA0Transa\xE7\xF5es com esta identifica\xE7\xE3o de pagamento"),he.forEach(o),K=z(c),k=_(c,"DIV",{class:!0});var W=v(k);g=_(W,"H2",{class:!0});var me=v(g);w=_(me,"I",{class:!0}),v(w).forEach(o),O=N(me,"\xA0id da transa\xE7\xE3o"),me.forEach(o),F=z(W),T=_(W,"H2",{class:!0});var _e=v(T);H=_(_e,"I",{class:!0}),v(H).forEach(o),J=N(_e,"\xA0tamanho"),_e.forEach(o),fe=z(W),j=_(W,"H2",{class:!0});var ve=v(j);X=_(ve,"I",{class:!0}),v(X).forEach(o),ue=N(ve,"\xA0quantidade"),ve.forEach(o),W.forEach(o),ae=z(c),R=_(c,"UL",{class:!0});var ye=v(R);for(let we=0;we<x.length;we+=1)x[we].l(ye);ye.forEach(o),this.h()},h(){f(i,"class","fas fa-info-circle text-quan-color3 cursor-help"),f(l,"class","mb-0 font-sans font-semibold leading-normal text-sm uppercase"),f(h,"class","row-start-1 row-end-2 overflow-hidden font-bold text-ellipsis text-sm lowercase"),f(h,"data-title",A=d[1].hash),f(E,"class","row-start-1 row-end-2 fas fa-copy cursor-pointer ml-1 text-purple-400"),f(E,"data-title",B=d[1].hash),f(n,"class","grid grid-rows-1 items-center w-fit row-start-1 row-end-2"),f(u,"class","flex-none w-full px-3"),f(s,"class","flex flex-row -mx-3"),f(t,"class","flex-auto p-4"),f(a,"class","relative flex flex-col min-w-0 bg-quan-color1 bg-opacity-50 rounded-lg"),f(e,"class","w-full max-w-full px-3 mb-6"),f(S,"class","fas fa-database text-purple-600"),f(q,"class","font-semibold w-full text-base leading-6 text-pink-400 uppercase p-2"),f(w,"class","fas fa-hashtag text-quan-color3"),f(g,"class","p-2 justify-center"),f(H,"class","fas fa-hashtag text-quan-color3"),f(T,"class","p-2 border border-transparent border-l-quan-color1 border-r-quan-color1"),f(X,"class","fas fa-hashtag text-quan-color3"),f(j,"class","p-2"),f(k,"class","grid grid-cols-3 gap-2 w-full border border-transparent border-b-quan-color1 font-semibold text-base text-center leading-6 uppercase text-quan-color2"),f(R,"class","w-full")},m(c,I){C(c,e,I),r(e,a),r(a,t),r(t,s),r(s,u),r(u,l),r(l,p),r(l,i),r(u,$),r(u,n),r(n,h),r(h,L),r(n,D),r(n,E),C(c,G,I),C(c,q,I),r(q,S),r(q,Z),C(c,K,I),C(c,k,I),r(k,g),r(g,w),r(g,O),r(k,F),r(k,T),r(T,H),r(T,J),r(k,fe),r(k,j),r(j,X),r(j,ue),C(c,ae,I),C(c,R,I);for(let b=0;b<x.length;b+=1)x[b].m(R,null);de||(Ee=[ee(te.call(null,i,{body:"a identifica\xE7\xE3o pode ser utilizada por mais de uma transa\xE7\xE3o"})),ee(te.call(null,h,{dataset:"title"})),Se(E,"click",d[2]),ee(te.call(null,E,{body:"clique para copiar o hash"}))],de=!0)},p(c,I){if(I&2&&y!==(y=c[1].hash+"")&&re(L,y),I&2&&A!==(A=c[1].hash)&&f(h,"data-title",A),I&2&&B!==(B=c[1].hash)&&f(E,"data-title",B),I&6){Q=c[1].transactions;let b;for(b=0;b<Q.length;b+=1){const Y=De(c,Q,b);x[b]?x[b].p(Y,I):(x[b]=ze(Y),x[b].c(),x[b].m(R,null))}for(;b<x.length;b+=1)x[b].d(1);x.length=Q.length}},i:ce,o:ce,d(c){c&&o(e),c&&o(G),c&&o(q),c&&o(K),c&&o(k),c&&o(ae),c&&o(R),Ge(x,c),de=!1,Te(Ee)}}}function Ze(d){let e,a;return{c(){e=m("p"),a=P("utilize a pesquisa para procurar uma identifica\xE7\xE3o de pagamento"),this.h()},l(t){e=_(t,"P",{class:!0});var s=v(e);a=N(s,"utilize a pesquisa para procurar uma identifica\xE7\xE3o de pagamento"),s.forEach(o),this.h()},h(){f(e,"class","mb-0 font-sans font-semibold text-center leading-normal text-sm uppercase")},m(t,s){C(t,e,s),r(e,a)},p:ce,d(t){t&&o(e)}}}function ze(d){let e,a,t,s=d[3].hash+"",u,l,p,i,$,n,h,y=d[3].size+"",L,A,D,E,B,G,q=d[3].amount_out+"",S,Z,K,k;return{c(){e=m("li"),a=m("div"),t=m("p"),u=P(s),p=V(),i=m("i"),n=V(),h=m("div"),L=P(y),A=V(),D=m("div"),E=m("span"),B=P("$"),G=P(`\xA0
            `),S=P(q),Z=V(),this.h()},l(g){e=_(g,"LI",{class:!0});var w=v(e);a=_(w,"DIV",{class:!0});var O=v(a);t=_(O,"P",{class:!0,"data-title":!0});var F=v(t);u=N(F,s),F.forEach(o),p=z(O),i=_(O,"I",{class:!0,"data-title":!0}),v(i).forEach(o),O.forEach(o),n=z(w),h=_(w,"DIV",{class:!0});var T=v(h);L=N(T,y),T.forEach(o),A=z(w),D=_(w,"DIV",{class:!0});var H=v(D);E=_(H,"SPAN",{class:!0,title:!0});var J=v(E);B=N(J,"$"),J.forEach(o),G=N(H,`\xA0
            `),S=N(H,q),H.forEach(o),Z=z(w),w.forEach(o),this.h()},h(){f(t,"class","row-start-1 row-end-2 overflow-hidden font-bold text-ellipsis text-sm lowercase"),f(t,"data-title",l=d[3].hash),f(i,"class","row-start-1 row-end-2 fas fa-copy cursor-pointer ml-1 text-purple-400"),f(i,"data-title",$=d[3].hash),f(a,"class","grid grid-rows-1 items-center w-fit row-start-1 row-end-2"),f(h,"class","row-start-1 row-end-2 p2 col-start-2 col-end-3 text-ellipsis overflow-hidden uppercase"),f(E,"class","font-q1v font-thin text-sm"),f(E,"title","q1v"),f(D,"class","row-start-1 row-end-2 p2 col-start-3 col-end-4 text-ellipsis overflow-hidden lowercase"),f(e,"class","grid grid-rows-1 grid-cols-3 gap-2 text-center p-2")},m(g,w){C(g,e,w),r(e,a),r(a,t),r(t,u),r(a,p),r(a,i),r(e,n),r(e,h),r(h,L),r(e,A),r(e,D),r(D,E),r(E,B),r(D,G),r(D,S),r(e,Z),K||(k=[ee(te.call(null,t,{dataset:"title"})),Se(i,"click",d[2]),ee(te.call(null,i,{body:"clique para copiar o hash"}))],K=!0)},p(g,w){w&2&&s!==(s=g[3].hash+"")&&re(u,s),w&2&&l!==(l=g[3].hash)&&f(t,"data-title",l),w&2&&$!==($=g[3].hash)&&f(i,"data-title",$),w&2&&y!==(y=g[3].size+"")&&re(L,y),w&2&&q!==(q=g[3].amount_out+"")&&re(S,q)},d(g){g&&o(e),K=!1,Te(k)}}}function je(d){let e,a,t,s,u,l=d[0]&&Ve(d);const p=[Ue,Re],i=[];function $(n,h){return n[1]&&typeof n[1].hash=="string"?0:1}return t=$(d),s=i[t]=p[t](d),{c(){l&&l.c(),e=V(),a=m("div"),s.c(),this.h()},l(n){l&&l.l(n),e=z(n),a=_(n,"DIV",{class:!0});var h=v(a);s.l(h),h.forEach(o),this.h()},h(){f(a,"class","flex flex-wrap -mx-3 p-4")},m(n,h){l&&l.m(n,h),C(n,e,h),C(n,a,h),i[t].m(a,null),u=!0},p(n,[h]){n[0]?l?(l.p(n,h),h&1&&M(l,1)):(l=Ve(n),l.c(),M(l,1),l.m(e.parentNode,e)):l&&(ge(),U(l,1,1,()=>{l=null}),be());let y=t;t=$(n),t===y?i[t].p(n,h):(ge(),U(i[y],1,1,()=>{i[y]=null}),be(),s=i[t],s?s.p(n,h):(s=i[t]=p[t](n),s.c()),M(s,1),s.m(a,null))},i(n){u||(M(l),M(s),u=!0)},o(n){U(l),U(s),u=!1},d(n){l&&l.d(n),n&&o(e),n&&o(a),i[t].d()}}}function Fe(d,e,a){let t,s;const u=l=>{if(l&&l.target&&l.target.dataset){const p=l.target.dataset;if(p.title){const i=document.createElement("textarea");i.style.zIndex="-1",document.body.appendChild(i),i.value=p.title,i.select(),document.execCommand("copy"),document.body.removeChild(i),a(0,t={component:Ke,props:{type:"copy",body:"hash de transa\xE7\xE3o copiado para o clipboard"}}),setTimeout(()=>{a(0,t=void 0)},2e3)}}};return He(async()=>{ke.subscribe(l=>{l&&l.hash&&a(1,s=l)})}),Le(()=>{a(1,s=void 0),ke.setData({fromSearch:!1})}),[t,s,u]}class Je extends Ce{constructor(e){super(),Pe(this,e,Fe,je,Ne,{})}}function Qe(d){let e,a;return e=new Je({}),{c(){oe(e.$$.fragment)},l(t){$e(e.$$.fragment,t)},m(t,s){ie(e,t,s),a=!0},p:ce,i(t){a||(M(e.$$.fragment,t),a=!0)},o(t){U(e.$$.fragment,t),a=!1},d(t){ne(e,t)}}}class st extends Ce{constructor(e){super(),Pe(this,e,null,Qe,Ne,{})}}export{st as default};
