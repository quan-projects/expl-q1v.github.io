import{S as Le,i as Oe,s as Ze,l as m,w as te,a as k,e as we,m as _,n as $,x as oe,c as x,h as r,p as u,b as E,y as se,G as o,f as z,g as Ee,t as L,d as ke,B as le,o as Qe,r as b,u as g,v as Q,K as He,z as We,A as Xe,L as Ge,$ as Pe,R as Ke,C as et,E as Fe}from"../chunks/index-d1f88ab2.js";import{B as ce,T as Je}from"../chunks/BlockCard-6c7853dd.js";import{s as tt}from"../chunks/stats-9b98a21e.js";import{u as st}from"../chunks/unconfirmed-12e26f7f.js";import{u as Ve}from"../chunks/usePopper-e1520e00.js";import{M as lt}from"../chunks/Modal-7dfcadd7.js";import"../chunks/index-08e0cf00.js";function Re(p,e,c){const a=p.slice();return a[5]=e[c],a}function Ye(p,e,c){const a=p.slice();return a[8]=e[c],a}function at(p){let e,c,a,s,n=p[2].height+"",i;return{c(){e=m("p"),c=b("altura em processo\xA0"),a=k(),s=m("h5"),i=b(n),this.h()},l(t){e=_(t,"P",{class:!0});var l=$(e);c=g(l,"altura em processo\xA0"),l.forEach(r),a=x(t),s=_(t,"H5",{class:!0});var f=$(s);i=g(f,n),f.forEach(r),this.h()},h(){u(e,"class","mb-0 font-sans font-semibold leading-normal text-sm uppercase"),u(s,"class","mb-0 font-bold text-ellipsis overflow-hidden uppercase text-sm")},m(t,l){E(t,e,l),o(e,c),E(t,a,l),E(t,s,l),o(s,i)},p(t,l){l&4&&n!==(n=t[2].height+"")&&Q(i,n)},d(t){t&&r(e),t&&r(a),t&&r(s)}}}function ot(p){let e,c,a,s,n=p[2].last_known_block_index+"",i,t,l,f;return{c(){e=m("p"),c=b("altura conhecida\xA0"),a=k(),s=m("h5"),i=b(n),this.h()},l(d){e=_(d,"P",{class:!0});var I=$(e);c=g(I,"altura conhecida\xA0"),I.forEach(r),a=x(d),s=_(d,"H5",{class:!0,"data-title":!0});var w=$(s);i=g(w,n),w.forEach(r),this.h()},h(){u(e,"class","mb-0 font-sans font-semibold leading-normal text-sm uppercase"),u(s,"class","mb-0 font-bold text-ellipsis overflow-hidden uppercase text-sm cursor-pointer"),u(s,"data-title",t=p[2].last_known_block_index)},m(d,I){E(d,e,I),o(e,c),E(d,a,I),E(d,s,I),o(s,i),l||(f=He(s,"click",p[3]),l=!0)},p(d,I){I&4&&n!==(n=d[2].last_known_block_index+"")&&Q(i,n),I&4&&t!==(t=d[2].last_known_block_index)&&u(s,"data-title",t)},d(d){d&&r(e),d&&r(a),d&&r(s),l=!1,f()}}}function rt(p){let e,c,a,s,n=p[2].transactions+"",i;return{c(){e=m("p"),c=b("transa\xE7\xF5es\xA0"),a=k(),s=m("h5"),i=b(n),this.h()},l(t){e=_(t,"P",{class:!0});var l=$(e);c=g(l,"transa\xE7\xF5es\xA0"),l.forEach(r),a=x(t),s=_(t,"H5",{class:!0});var f=$(s);i=g(f,n),f.forEach(r),this.h()},h(){u(e,"class","mb-0 font-sans font-semibold leading-normal text-sm uppercase"),u(s,"class","mb-0 font-bold text-ellipsis overflow-hidden uppercase text-sm")},m(t,l){E(t,e,l),o(e,c),E(t,a,l),E(t,s,l),o(s,i)},p(t,l){l&4&&n!==(n=t[2].transactions+"")&&Q(i,n)},d(t){t&&r(e),t&&r(a),t&&r(s)}}}function nt(p){let e,c,a,s,n,i,t,l=p[2].currentReward+"",f;return{c(){e=m("p"),c=b("recompensa\xA0"),a=k(),s=m("h5"),n=m("span"),i=b("$"),t=b("\xA0"),f=b(l),this.h()},l(d){e=_(d,"P",{class:!0});var I=$(e);c=g(I,"recompensa\xA0"),I.forEach(r),a=x(d),s=_(d,"H5",{class:!0});var w=$(s);n=_(w,"SPAN",{class:!0,title:!0});var y=$(n);i=g(y,"$"),y.forEach(r),t=g(w,"\xA0"),f=g(w,l),w.forEach(r),this.h()},h(){u(e,"class","mb-0 font-sans font-semibold leading-normal text-sm uppercase"),u(n,"class","font-q1v font-thin text-sm"),u(n,"title","q1v"),u(s,"class","mb-0 font-bold text-ellipsis overflow-hidden uppercase text-sm")},m(d,I){E(d,e,I),o(e,c),E(d,a,I),E(d,s,I),o(s,n),o(n,i),o(s,t),o(s,f)},p(d,I){I&4&&l!==(l=d[2].currentReward+"")&&Q(f,l)},d(d){d&&r(e),d&&r(a),d&&r(s)}}}function it(p){let e,c,a,s,n,i,t,l=p[2].supply+"",f;return{c(){e=m("p"),c=b("distribu\xEDdo\xA0"),a=k(),s=m("h5"),n=m("span"),i=b("$"),t=b("\xA0"),f=b(l),this.h()},l(d){e=_(d,"P",{class:!0});var I=$(e);c=g(I,"distribu\xEDdo\xA0"),I.forEach(r),a=x(d),s=_(d,"H5",{class:!0});var w=$(s);n=_(w,"SPAN",{class:!0,title:!0});var y=$(n);i=g(y,"$"),y.forEach(r),t=g(w,"\xA0"),f=g(w,l),w.forEach(r),this.h()},h(){u(e,"class","mb-0 font-sans font-semibold leading-normal text-sm uppercase"),u(n,"class","font-q1v font-thin text-sm"),u(n,"title","q1v"),u(s,"class","mb-0 font-bold text-ellipsis overflow-hidden uppercase text-sm")},m(d,I){E(d,e,I),o(e,c),E(d,a,I),E(d,s,I),o(s,n),o(n,i),o(s,t),o(s,f)},p(d,I){I&4&&l!==(l=d[2].supply+"")&&Q(f,l)},d(d){d&&r(e),d&&r(a),d&&r(s)}}}function ct(p){let e,c,a,s,n=p[2].emissionPercent+"",i,t;return{c(){e=m("p"),c=b("emiss\xE3o\xA0"),a=k(),s=m("h5"),i=b(n),t=b("%"),this.h()},l(l){e=_(l,"P",{class:!0});var f=$(e);c=g(f,"emiss\xE3o\xA0"),f.forEach(r),a=x(l),s=_(l,"H5",{class:!0});var d=$(s);i=g(d,n),t=g(d,"%"),d.forEach(r),this.h()},h(){u(e,"class","mb-0 font-sans font-semibold leading-normal text-sm uppercase"),u(s,"class","mb-0 font-bold text-ellipsis overflow-hidden uppercase text-sm")},m(l,f){E(l,e,f),o(e,c),E(l,a,f),E(l,s,f),o(s,i),o(s,t)},p(l,f){f&4&&n!==(n=l[2].emissionPercent+"")&&Q(i,n)},d(l){l&&r(e),l&&r(a),l&&r(s)}}}function ft(p){let e,c,a,s,n=p[2].difficulty+"",i;return{c(){e=m("p"),c=b("dificuldade\xA0"),a=k(),s=m("h5"),i=b(n),this.h()},l(t){e=_(t,"P",{class:!0});var l=$(e);c=g(l,"dificuldade\xA0"),l.forEach(r),a=x(t),s=_(t,"H5",{class:!0});var f=$(s);i=g(f,n),f.forEach(r),this.h()},h(){u(e,"class","mb-0 font-sans font-semibold leading-normal text-sm uppercase"),u(s,"class","mb-0 font-bold text-ellipsis overflow-hidden uppercase text-sm")},m(t,l){E(t,e,l),o(e,c),E(t,a,l),E(t,s,l),o(s,i)},p(t,l){l&4&&n!==(n=t[2].difficulty+"")&&Q(i,n)},d(t){t&&r(e),t&&r(a),t&&r(s)}}}function ut(p){let e,c,a,s,n=p[2].avgDifficulty+"",i;return{c(){e=m("p"),c=b("dificuldade m\xE9dia\xA0"),a=k(),s=m("h5"),i=b(n),this.h()},l(t){e=_(t,"P",{class:!0});var l=$(e);c=g(l,"dificuldade m\xE9dia\xA0"),l.forEach(r),a=x(t),s=_(t,"H5",{class:!0});var f=$(s);i=g(f,n),f.forEach(r),this.h()},h(){u(e,"class","mb-0 font-sans font-semibold leading-normal text-sm uppercase"),u(s,"class","mb-0 font-bold text-ellipsis overflow-hidden uppercase text-sm")},m(t,l){E(t,e,l),o(e,c),E(t,a,l),E(t,s,l),o(s,i)},p(t,l){l&4&&n!==(n=t[2].avgDifficulty+"")&&Q(i,n)},d(t){t&&r(e),t&&r(a),t&&r(s)}}}function dt(p){let e,c,a,s,n=p[2].hashRate+"",i;return{c(){e=m("p"),c=b("hash\xA0"),a=k(),s=m("h5"),i=b(n),this.h()},l(t){e=_(t,"P",{class:!0});var l=$(e);c=g(l,"hash\xA0"),l.forEach(r),a=x(t),s=_(t,"H5",{class:!0});var f=$(s);i=g(f,n),f.forEach(r),this.h()},h(){u(e,"class","mb-0 font-sans font-semibold leading-normal text-sm uppercase"),u(s,"class","mb-0 font-bold text-ellipsis overflow-hidden uppercase text-sm")},m(t,l){E(t,e,l),o(e,c),E(t,a,l),E(t,s,l),o(s,i)},p(t,l){l&4&&n!==(n=t[2].hashRate+"")&&Q(i,n)},d(t){t&&r(e),t&&r(a),t&&r(s)}}}function pt(p){let e,c,a,s,n=p[2].avgHashrate+"",i;return{c(){e=m("p"),c=b("taxa m\xE9dia de hash\xA0"),a=k(),s=m("h5"),i=b(n),this.h()},l(t){e=_(t,"P",{class:!0});var l=$(e);c=g(l,"taxa m\xE9dia de hash\xA0"),l.forEach(r),a=x(t),s=_(t,"H5",{class:!0});var f=$(s);i=g(f,n),f.forEach(r),this.h()},h(){u(e,"class","mb-0 font-sans font-semibold leading-normal text-sm uppercase"),u(s,"class","mb-0 font-bold text-ellipsis overflow-hidden uppercase text-sm")},m(t,l){E(t,e,l),o(e,c),E(t,a,l),E(t,s,l),o(s,i)},p(t,l){l&4&&n!==(n=t[2].avgHashrate+"")&&Q(i,n)},d(t){t&&r(e),t&&r(a),t&&r(s)}}}function ht(p){let e,c,a,s,n=p[2].blockSolveTime+"",i;return{c(){e=m("p"),c=b("tempo de resolu\xE7\xE3o\xA0"),a=k(),s=m("h5"),i=b(n),this.h()},l(t){e=_(t,"P",{class:!0});var l=$(e);c=g(l,"tempo de resolu\xE7\xE3o\xA0"),l.forEach(r),a=x(t),s=_(t,"H5",{class:!0});var f=$(s);i=g(f,n),f.forEach(r),this.h()},h(){u(e,"class","mb-0 font-sans font-semibold leading-normal text-sm uppercase"),u(s,"class","mb-0 font-bold text-ellipsis overflow-hidden lowercase text-sm")},m(t,l){E(t,e,l),o(e,c),E(t,a,l),E(t,s,l),o(s,i)},p(t,l){l&4&&n!==(n=t[2].blockSolveTime+"")&&Q(i,n)},d(t){t&&r(e),t&&r(a),t&&r(s)}}}function mt(p){let e,c,a,s,n,i;return n=new Je({props:{timestamp:p[2].lastUnixTime*1e3,format:"DD-MM-YYYY HH:mm:ss UTC Z"}}),{c(){e=m("p"),c=b("\xFAltima atualiza\xE7\xE3o"),a=k(),s=m("h5"),te(n.$$.fragment),this.h()},l(t){e=_(t,"P",{class:!0});var l=$(e);c=g(l,"\xFAltima atualiza\xE7\xE3o"),l.forEach(r),a=x(t),s=_(t,"H5",{class:!0});var f=$(s);oe(n.$$.fragment,f),f.forEach(r),this.h()},h(){u(e,"class","mb-0 font-sans font-semibold leading-normal text-sm uppercase"),u(s,"class","mb-0 font-bold text-ellipsis overflow-hidden uppercase text-sm")},m(t,l){E(t,e,l),o(e,c),E(t,a,l),E(t,s,l),se(n,s,null),i=!0},p(t,l){const f={};l&4&&(f.timestamp=t[2].lastUnixTime*1e3),n.$set(f)},i(t){i||(z(n.$$.fragment,t),i=!0)},o(t){L(n.$$.fragment,t),i=!1},d(t){t&&r(e),t&&r(a),t&&r(s),le(n)}}}function Me(p){let e,c,a;const s=[p[0].props];var n=p[0].component;function i(t){let l={};for(let f=0;f<s.length;f+=1)l=et(l,s[f]);return{props:l}}return n&&(e=new n(i())),{c(){e&&te(e.$$.fragment),c=we()},l(t){e&&oe(e.$$.fragment,t),c=we()},m(t,l){e&&se(e,t,l),E(t,c,l),a=!0},p(t,l){const f=l&1?We(s,[Xe(t[0].props)]):{};if(n!==(n=t[0].component)){if(e){Ee();const d=e;L(d.$$.fragment,1,0,()=>{le(d,1)}),ke()}n?(e=new n(i()),te(e.$$.fragment),z(e.$$.fragment,1),se(e,c.parentNode,c)):e=null}else n&&e.$set(f)},i(t){a||(e&&z(e.$$.fragment,t),a=!0)},o(t){e&&L(e.$$.fragment,t),a=!1},d(t){t&&r(c),e&&le(e,t)}}}function Be(p){let e,c,a,s,n,i,t,l=p[2].blocks.length+"",f,d,I,w,y,Z,Y,N,R,j,M,A,G,K,re,S,H,P,W,F,q,D,h,v,X,ee,ue,ne,ie,pe,B,O,J=p[2].blocks,T=[];for(let V=0;V<J.length;V+=1)T[V]=je(Ye(p,J,V));const he=V=>L(T[V],1,1,()=>{T[V]=null});function me(V,U){return V[1].length>0?$t:_t}let fe=me(p),ae=fe(p);return{c(){e=m("section"),c=m("div"),a=m("div"),s=m("div"),n=m("div"),i=m("p"),t=b("\xFAltimos "),f=b(l),d=b(" blocos conhecidos"),I=k(),w=m("div"),y=m("div");for(let V=0;V<T.length;V+=1)T[V].c();Z=k(),Y=m("div"),N=k(),R=m("div"),j=m("div"),M=m("div"),A=m("div"),G=m("p"),K=b("transa\xE7\xF5es n\xE3o confirmadas"),re=k(),S=m("div"),H=m("h2"),P=m("i"),W=b("\xA0id da transa\xE7\xE3o"),F=k(),q=m("h2"),D=m("i"),h=b("\xA0tamanho"),v=k(),X=m("h2"),ee=m("i"),ue=b("\xA0quantidade"),ne=k(),ie=m("div"),ae.c(),pe=k(),B=m("div"),this.h()},l(V){e=_(V,"SECTION",{class:!0});var U=$(e);c=_(U,"DIV",{class:!0});var C=$(c);a=_(C,"DIV",{class:!0});var _e=$(a);s=_(_e,"DIV",{class:!0});var de=$(s);n=_(de,"DIV",{class:!0});var be=$(n);i=_(be,"P",{class:!0});var ge=$(i);t=g(ge,"\xFAltimos "),f=g(ge,l),d=g(ge," blocos conhecidos"),ge.forEach(r),be.forEach(r),I=x(de),w=_(de,"DIV",{class:!0,id:!0});var Se=$(w);y=_(Se,"DIV",{class:!0});var Ne=$(y);for(let De=0;De<T.length;De+=1)T[De].l(Ne);Ne.forEach(r),Se.forEach(r),Z=x(de),Y=_(de,"DIV",{class:!0}),$(Y).forEach(r),de.forEach(r),_e.forEach(r),C.forEach(r),N=x(U),R=_(U,"DIV",{class:!0});var Te=$(R);j=_(Te,"DIV",{class:!0});var ye=$(j);M=_(ye,"DIV",{class:!0});var $e=$(M);A=_($e,"DIV",{class:!0});var Ae=$(A);G=_(Ae,"P",{class:!0});var Ce=$(G);K=g(Ce,"transa\xE7\xF5es n\xE3o confirmadas"),Ce.forEach(r),Ae.forEach(r),re=x($e),S=_($e,"DIV",{class:!0});var ve=$(S);H=_(ve,"H2",{class:!0});var xe=$(H);P=_(xe,"I",{class:!0}),$(P).forEach(r),W=g(xe,"\xA0id da transa\xE7\xE3o"),xe.forEach(r),F=x(ve),q=_(ve,"H2",{class:!0});var Ie=$(q);D=_(Ie,"I",{class:!0}),$(D).forEach(r),h=g(Ie,"\xA0tamanho"),Ie.forEach(r),v=x(ve),X=_(ve,"H2",{class:!0});var qe=$(X);ee=_(qe,"I",{class:!0}),$(ee).forEach(r),ue=g(qe,"\xA0quantidade"),qe.forEach(r),ve.forEach(r),ne=x($e),ie=_($e,"DIV",{class:!0,id:!0});var ze=$(ie);ae.l(ze),ze.forEach(r),pe=x($e),B=_($e,"DIV",{class:!0}),$(B).forEach(r),$e.forEach(r),ye.forEach(r),Te.forEach(r),U.forEach(r),this.h()},h(){u(i,"class","text-sm"),u(n,"class","font-semibold text-base leading-6 text-pink-400 uppercase p-2"),u(y,"class","w-full divide-y-2 divide-quan-color-bg"),u(w,"class","w-full h-48 overflow-y-scroll bg-quan-color-bg svelte-18y2wuj"),u(w,"id","list1-scroll"),u(Y,"class","h-0.5 border-t border-t-quan-color-bg"),u(s,"class","p-0.5 h-60"),u(a,"class","border border-quan-color-bg rounded-lg bg-quan-color1 bg-opacity-50"),u(c,"class","col-start-1 col-end-2 p-2 h-full flex flex-col"),u(G,"class","text-sm"),u(A,"class","font-semibold text-base leading-6 text-pink-400 uppercase pt-2 pb-1 px-2"),u(P,"class","fas fa-hashtag text-quan-color3"),u(H,"class","p-2 justify-center"),u(D,"class","fas fa-hashtag text-quan-color3"),u(q,"class","p-2 border border-transparent border-l-quan-color1 border-r-quan-color1"),u(ee,"class","fas fa-hashtag text-quan-color3"),u(X,"class","p-2"),u(S,"class","grid grid-cols-3 gap-2 border border-transparent border-b-quan-color1 font-semibold text-xs text-center uppercase text-quan-color2"),u(ie,"class","w-full h-40 overflow-y-scroll bg-quan-color-bg svelte-18y2wuj"),u(ie,"id","list2-scroll"),u(B,"class","h-0.5 border-t border-t-quan-color-bg"),u(M,"class","p-0.5 h-60"),u(j,"class","border border-quan-color-bg rounded-lg bg-quan-color1 bg-opacity-50"),u(R,"class","col-start-2 col-end-4 p-2 flex flex-col"),u(e,"class","grid grid-cols-3 -mx-3 p-4")},m(V,U){E(V,e,U),o(e,c),o(c,a),o(a,s),o(s,n),o(n,i),o(i,t),o(i,f),o(i,d),o(s,I),o(s,w),o(w,y);for(let C=0;C<T.length;C+=1)T[C].m(y,null);o(s,Z),o(s,Y),o(e,N),o(e,R),o(R,j),o(j,M),o(M,A),o(A,G),o(G,K),o(M,re),o(M,S),o(S,H),o(H,P),o(H,W),o(S,F),o(S,q),o(q,D),o(q,h),o(S,v),o(S,X),o(X,ee),o(X,ue),o(M,ne),o(M,ie),ae.m(ie,null),o(M,pe),o(M,B),O=!0},p(V,U){if((!O||U&4)&&l!==(l=V[2].blocks.length+"")&&Q(f,l),U&12){J=V[2].blocks;let C;for(C=0;C<J.length;C+=1){const _e=Ye(V,J,C);T[C]?(T[C].p(_e,U),z(T[C],1)):(T[C]=je(_e),T[C].c(),z(T[C],1),T[C].m(y,null))}for(Ee(),C=J.length;C<T.length;C+=1)he(C);ke()}fe===(fe=me(V))&&ae?ae.p(V,U):(ae.d(1),ae=fe(V),ae&&(ae.c(),ae.m(ie,null)))},i(V){if(!O){for(let U=0;U<J.length;U+=1)z(T[U]);O=!0}},o(V){T=T.filter(Boolean);for(let U=0;U<T.length;U+=1)L(T[U]);O=!1},d(V){V&&r(e),Ge(T,V),ae.d()}}}function je(p){let e,c,a,s,n,i,t,l,f=p[8].height+"",d,I,w,y,Z,Y,N,R,j,M,A,G=p[8].tx_count+"",K,re,S,H,P,W,F,q=p[8].cumul_size+"",D,h,v,X,ee,ue,ne,ie,pe;return ee=new Je({props:{timestamp:p[8].timestamp*1e3,format:"DD-MM-YYYY HH:mm:ss UTC Z"}}),{c(){e=m("div"),c=m("div"),a=m("p"),s=b("altura"),n=k(),i=m("div"),t=m("p"),l=b("#"),d=b(f),I=k(),w=m("i"),Z=k(),Y=m("div"),N=m("div"),R=m("span"),j=b("transa\xE7\xF5es:"),M=b("\xA0\xA0"),A=m("span"),K=b(G),re=k(),S=m("div"),H=m("span"),P=b("tamanho:"),W=b("\xA0\xA0"),F=m("span"),D=b(q),h=b(" B"),v=k(),X=m("div"),te(ee.$$.fragment),ue=k(),this.h()},l(B){e=_(B,"DIV",{class:!0});var O=$(e);c=_(O,"DIV",{class:!0});var J=$(c);a=_(J,"P",{class:!0});var T=$(a);s=g(T,"altura"),T.forEach(r),n=x(J),i=_(J,"DIV",{class:!0});var he=$(i);t=_(he,"P",{class:!0});var me=$(t);l=g(me,"#"),d=g(me,f),me.forEach(r),I=x(he),w=_(he,"I",{class:!0,"data-title":!0,"data-height":!0}),$(w).forEach(r),he.forEach(r),J.forEach(r),Z=x(O),Y=_(O,"DIV",{class:!0});var fe=$(Y);N=_(fe,"DIV",{});var ae=$(N);R=_(ae,"SPAN",{class:!0});var V=$(R);j=g(V,"transa\xE7\xF5es:"),V.forEach(r),M=g(ae,"\xA0\xA0"),A=_(ae,"SPAN",{class:!0});var U=$(A);K=g(U,G),U.forEach(r),ae.forEach(r),re=x(fe),S=_(fe,"DIV",{});var C=$(S);H=_(C,"SPAN",{class:!0});var _e=$(H);P=g(_e,"tamanho:"),_e.forEach(r),W=g(C,"\xA0\xA0"),F=_(C,"SPAN",{class:!0});var de=$(F);D=g(de,q),h=g(de," B"),de.forEach(r),C.forEach(r),v=x(fe),X=_(fe,"DIV",{class:!0});var be=$(X);oe(ee.$$.fragment,be),be.forEach(r),fe.forEach(r),ue=x(O),O.forEach(r),this.h()},h(){u(a,"class","text-indigo-200 row-start-1 row-end-2 w-full text-center"),u(t,"class","text-quan-color2 row-start-1 row-end-2"),u(w,"class","fas fa-copy text-purple-400 self-center text-xs cursor-pointer row-start-1 row-end-2 ml-1"),u(w,"data-title",y=p[8].height),u(w,"data-height","1"),u(i,"class","grid grid-rows-1 text-center w-fit"),u(c,"class","col-start-1 col-end-2 self-center justify-self-center w-fit text-base text-center uppercase p-3"),u(R,"class","text-indigo-200"),u(A,"class","text-yellow-300"),u(H,"class","text-indigo-200"),u(F,"class","text-yellow-300"),u(X,"class","text-quan-color2"),u(Y,"class","col-start-2 col-end-4 self-center text-xs text-left uppercase pl-4"),u(e,"class","grid grid-cols-3 gap-2 font-semibold py-1 cursor-default divide-quan-color-bg divide-x-2 bg-quan-color1 bg-opacity-95")},m(B,O){E(B,e,O),o(e,c),o(c,a),o(a,s),o(c,n),o(c,i),o(i,t),o(t,l),o(t,d),o(i,I),o(i,w),o(e,Z),o(e,Y),o(Y,N),o(N,R),o(R,j),o(N,M),o(N,A),o(A,K),o(Y,re),o(Y,S),o(S,H),o(H,P),o(S,W),o(S,F),o(F,D),o(F,h),o(Y,v),o(Y,X),se(ee,X,null),o(e,ue),ne=!0,ie||(pe=[Pe(Ve.call(null,w,{body:"clique para copiar a altura de bloco"})),He(w,"click",p[3])],ie=!0)},p(B,O){(!ne||O&4)&&f!==(f=B[8].height+"")&&Q(d,f),(!ne||O&4&&y!==(y=B[8].height))&&u(w,"data-title",y),(!ne||O&4)&&G!==(G=B[8].tx_count+"")&&Q(K,G),(!ne||O&4)&&q!==(q=B[8].cumul_size+"")&&Q(D,q);const J={};O&4&&(J.timestamp=B[8].timestamp*1e3),ee.$set(J)},i(B){ne||(z(ee.$$.fragment,B),ne=!0)},o(B){L(ee.$$.fragment,B),ne=!1},d(B){B&&r(e),le(ee),ie=!1,Ke(pe)}}}function _t(p){let e,c,a,s,n,i;return{c(){e=m("div"),c=m("div"),a=m("p"),s=b("nenhuma transa\xE7\xE3o sem confirma\xE7\xE3o"),n=k(),i=m("i"),this.h()},l(t){e=_(t,"DIV",{class:!0});var l=$(e);c=_(l,"DIV",{class:!0});var f=$(c);a=_(f,"P",{class:!0});var d=$(a);s=g(d,"nenhuma transa\xE7\xE3o sem confirma\xE7\xE3o"),d.forEach(r),n=x(f),i=_(f,"I",{class:!0}),$(i).forEach(r),f.forEach(r),l.forEach(r),this.h()},h(){u(a,"class","text-quan-color2 row-start-1 row-end-2"),u(i,"class","fas fa-check-double text-purple-400 self-center cursor-pointer row-start-1 row-end-2 ml-1"),u(c,"class","grid grid-rows-1 text-center w-fit"),u(e,"class","grid w-full h-full items-center justify-items-center text-xs font-bold uppercase p-3")},m(t,l){E(t,e,l),o(e,c),o(c,a),o(a,s),o(c,n),o(c,i)},p:Fe,d(t){t&&r(e)}}}function $t(p){let e,c=p[1],a=[];for(let s=0;s<c.length;s+=1)a[s]=Ue(Re(p,c,s));return{c(){e=m("ul");for(let s=0;s<a.length;s+=1)a[s].c();this.h()},l(s){e=_(s,"UL",{class:!0});var n=$(e);for(let i=0;i<a.length;i+=1)a[i].l(n);n.forEach(r),this.h()},h(){u(e,"class","bg-quan-color1 bg-opacity-95 w-full divide-y-2 divide-quan-color-bg")},m(s,n){E(s,e,n);for(let i=0;i<a.length;i+=1)a[i].m(e,null)},p(s,n){if(n&10){c=s[1];let i;for(i=0;i<c.length;i+=1){const t=Re(s,c,i);a[i]?a[i].p(t,n):(a[i]=Ue(t),a[i].c(),a[i].m(e,null))}for(;i<a.length;i+=1)a[i].d(1);a.length=c.length}},d(s){s&&r(e),Ge(a,s)}}}function Ue(p){let e,c,a,s,n=p[5].id+"",i,t,l,f,d,I,w,y=p[5].blobSize+"",Z,Y,N,R,j,M,A=p[5].amount_out+"",G,K,re,S;return{c(){e=m("li"),c=m("div"),a=m("div"),s=m("p"),i=b(n),l=k(),f=m("i"),I=k(),w=m("span"),Z=b(y),Y=k(),N=m("span"),R=m("span"),j=b("$"),M=b("\xA0"),G=b(A),K=k(),this.h()},l(H){e=_(H,"LI",{class:!0});var P=$(e);c=_(P,"DIV",{class:!0});var W=$(c);a=_(W,"DIV",{class:!0});var F=$(a);s=_(F,"P",{class:!0,"data-title":!0});var q=$(s);i=g(q,n),q.forEach(r),l=x(F),f=_(F,"I",{class:!0,"data-title":!0,"data-hash":!0}),$(f).forEach(r),F.forEach(r),W.forEach(r),I=x(P),w=_(P,"SPAN",{class:!0});var D=$(w);Z=g(D,y),D.forEach(r),Y=x(P),N=_(P,"SPAN",{class:!0});var h=$(N);R=_(h,"SPAN",{class:!0,title:!0});var v=$(R);j=g(v,"$"),v.forEach(r),M=g(h,"\xA0"),G=g(h,A),h.forEach(r),K=x(P),P.forEach(r),this.h()},h(){u(s,"class","row-start-1 row-end-2 overflow-hidden font-bold text-ellipsis text-sm lowercase"),u(s,"data-title",t=p[5].id),u(f,"class","row-start-1 row-end-2 fas fa-copy cursor-pointer ml-1 text-purple-400"),u(f,"data-title",d=p[5].id),u(f,"data-hash","1"),u(a,"class","grid grid-rows-1 items-center w-fit row-start-1 row-end-2"),u(c,"class","p2 col-start-1 col-end-2 text-ellipsis overflow-hidden lowercase cursor-pointer"),u(w,"class","p2 col-start-2 col-end-3 uppercase"),u(R,"class","font-q1v font-thin text-sm"),u(R,"title","q1v"),u(N,"class","p2 col-start-3 col-end-4 lowercase"),u(e,"class","grid grid-cols-3 gap-2 text-center p-2")},m(H,P){E(H,e,P),o(e,c),o(c,a),o(a,s),o(s,i),o(a,l),o(a,f),o(e,I),o(e,w),o(w,Z),o(e,Y),o(e,N),o(N,R),o(R,j),o(N,M),o(N,G),o(e,K),re||(S=[Pe(Ve.call(null,s,{dataset:"title"})),He(f,"click",p[3]),Pe(Ve.call(null,f,{body:"clique para copiar o hash"}))],re=!0)},p(H,P){P&2&&n!==(n=H[5].id+"")&&Q(i,n),P&2&&t!==(t=H[5].id)&&u(s,"data-title",t),P&2&&d!==(d=H[5].id)&&u(f,"data-title",d),P&2&&y!==(y=H[5].blobSize+"")&&Q(Z,y),P&2&&A!==(A=H[5].amount_out+"")&&Q(G,A)},d(H){H&&r(e),re=!1,Ke(S)}}}function vt(p){let e,c,a,s,n,i,t,l,f,d,I,w,y,Z,Y,N,R,j,M,A,G,K,re,S,H,P,W,F;c=new ce({props:{$$slots:{default:[at]},$$scope:{ctx:p}}}),s=new ce({props:{$$slots:{default:[ot]},$$scope:{ctx:p}}}),i=new ce({props:{$$slots:{default:[rt]},$$scope:{ctx:p}}}),l=new ce({props:{$$slots:{default:[nt]},$$scope:{ctx:p}}}),d=new ce({props:{$$slots:{default:[it]},$$scope:{ctx:p}}}),w=new ce({props:{$$slots:{default:[ct]},$$scope:{ctx:p}}}),Z=new ce({props:{$$slots:{default:[ft]},$$scope:{ctx:p}}}),N=new ce({props:{$$slots:{default:[ut]},$$scope:{ctx:p}}}),j=new ce({props:{$$slots:{default:[dt]},$$scope:{ctx:p}}}),A=new ce({props:{$$slots:{default:[pt]},$$scope:{ctx:p}}}),K=new ce({props:{$$slots:{default:[ht]},$$scope:{ctx:p}}}),S=new ce({props:{$$slots:{default:[mt]},$$scope:{ctx:p}}});let q=p[0]&&Me(p),D=p[2].blocks&&Be(p);return{c(){e=m("section"),te(c.$$.fragment),a=k(),te(s.$$.fragment),n=k(),te(i.$$.fragment),t=k(),te(l.$$.fragment),f=k(),te(d.$$.fragment),I=k(),te(w.$$.fragment),y=k(),te(Z.$$.fragment),Y=k(),te(N.$$.fragment),R=k(),te(j.$$.fragment),M=k(),te(A.$$.fragment),G=k(),te(K.$$.fragment),re=k(),te(S.$$.fragment),H=k(),q&&q.c(),P=k(),D&&D.c(),W=we(),this.h()},l(h){e=_(h,"SECTION",{class:!0});var v=$(e);oe(c.$$.fragment,v),a=x(v),oe(s.$$.fragment,v),n=x(v),oe(i.$$.fragment,v),t=x(v),oe(l.$$.fragment,v),f=x(v),oe(d.$$.fragment,v),I=x(v),oe(w.$$.fragment,v),y=x(v),oe(Z.$$.fragment,v),Y=x(v),oe(N.$$.fragment,v),R=x(v),oe(j.$$.fragment,v),M=x(v),oe(A.$$.fragment,v),G=x(v),oe(K.$$.fragment,v),re=x(v),oe(S.$$.fragment,v),v.forEach(r),H=x(h),q&&q.l(h),P=x(h),D&&D.l(h),W=we(),this.h()},h(){u(e,"class","flex flex-wrap -mx-3 p-4")},m(h,v){E(h,e,v),se(c,e,null),o(e,a),se(s,e,null),o(e,n),se(i,e,null),o(e,t),se(l,e,null),o(e,f),se(d,e,null),o(e,I),se(w,e,null),o(e,y),se(Z,e,null),o(e,Y),se(N,e,null),o(e,R),se(j,e,null),o(e,M),se(A,e,null),o(e,G),se(K,e,null),o(e,re),se(S,e,null),E(h,H,v),q&&q.m(h,v),E(h,P,v),D&&D.m(h,v),E(h,W,v),F=!0},p(h,[v]){const X={};v&2052&&(X.$$scope={dirty:v,ctx:h}),c.$set(X);const ee={};v&2052&&(ee.$$scope={dirty:v,ctx:h}),s.$set(ee);const ue={};v&2052&&(ue.$$scope={dirty:v,ctx:h}),i.$set(ue);const ne={};v&2052&&(ne.$$scope={dirty:v,ctx:h}),l.$set(ne);const ie={};v&2052&&(ie.$$scope={dirty:v,ctx:h}),d.$set(ie);const pe={};v&2052&&(pe.$$scope={dirty:v,ctx:h}),w.$set(pe);const B={};v&2052&&(B.$$scope={dirty:v,ctx:h}),Z.$set(B);const O={};v&2052&&(O.$$scope={dirty:v,ctx:h}),N.$set(O);const J={};v&2052&&(J.$$scope={dirty:v,ctx:h}),j.$set(J);const T={};v&2052&&(T.$$scope={dirty:v,ctx:h}),A.$set(T);const he={};v&2052&&(he.$$scope={dirty:v,ctx:h}),K.$set(he);const me={};v&2052&&(me.$$scope={dirty:v,ctx:h}),S.$set(me),h[0]?q?(q.p(h,v),v&1&&z(q,1)):(q=Me(h),q.c(),z(q,1),q.m(P.parentNode,P)):q&&(Ee(),L(q,1,1,()=>{q=null}),ke()),h[2].blocks?D?(D.p(h,v),v&4&&z(D,1)):(D=Be(h),D.c(),z(D,1),D.m(W.parentNode,W)):D&&(Ee(),L(D,1,1,()=>{D=null}),ke())},i(h){F||(z(c.$$.fragment,h),z(s.$$.fragment,h),z(i.$$.fragment,h),z(l.$$.fragment,h),z(d.$$.fragment,h),z(w.$$.fragment,h),z(Z.$$.fragment,h),z(N.$$.fragment,h),z(j.$$.fragment,h),z(A.$$.fragment,h),z(K.$$.fragment,h),z(S.$$.fragment,h),z(q),z(D),F=!0)},o(h){L(c.$$.fragment,h),L(s.$$.fragment,h),L(i.$$.fragment,h),L(l.$$.fragment,h),L(d.$$.fragment,h),L(w.$$.fragment,h),L(Z.$$.fragment,h),L(N.$$.fragment,h),L(j.$$.fragment,h),L(A.$$.fragment,h),L(K.$$.fragment,h),L(S.$$.fragment,h),L(q),L(D),F=!1},d(h){h&&r(e),le(c),le(s),le(i),le(l),le(d),le(w),le(Z),le(N),le(j),le(A),le(K),le(S),h&&r(H),q&&q.d(h),h&&r(P),D&&D.d(h),h&&r(W)}}}function bt(p,e,c){let a,s=[];const n=(l,f)=>{if(l){const d=document.createElement("textarea");d.style.zIndex="-1",document.body.appendChild(d),d.value=l,d.select(),document.execCommand("copy"),document.body.removeChild(d),c(0,a={component:lt,props:{type:"copy",body:f}}),setTimeout(()=>{c(0,a=void 0)},2e3)}},i=l=>{if(l&&l.target&&l.target.dataset){const f=l.target.dataset;f.title&&(f.hash&&n(f.title,"hash do bloco copiado para o clipboard"),f.height&&n(f.title,"altura do bloco copiada para o clipboard"))}};let t={hashRate:0,avgHashrate:0,difficulty:0,avgDifficulty:0,height:0,transactions:0,emissionPercent:0,supply:0,currentReward:0,blockSolveTime:0,lastuptime:0};return Qe(async()=>{tt.subscribe(l=>{l&&(c(2,t=l),st.subscribe(f=>{f&&c(1,s=f.list)}))})}),[a,s,t,i]}class gt extends Le{constructor(e){super(),Oe(this,e,bt,vt,Ze,{})}}function wt(p){let e,c;return e=new gt({}),{c(){te(e.$$.fragment)},l(a){oe(e.$$.fragment,a)},m(a,s){se(e,a,s),c=!0},p:Fe,i(a){c||(z(e.$$.fragment,a),c=!0)},o(a){L(e.$$.fragment,a),c=!1},d(a){le(e,a)}}}class Vt extends Le{constructor(e){super(),Oe(this,e,null,wt,Ze,{})}}export{Vt as default};
