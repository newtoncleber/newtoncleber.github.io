(this.webpackJsonpfoliabahiamobile=this.webpackJsonpfoliabahiamobile||[]).push([[9],{274:function(a,e,t){a.exports=t.p+"static/media/camaleao.6fa1e1f3.jpg"},275:function(a,e,t){a.exports=t.p+"static/media/coruja.85dcf04b.jpg"},276:function(a,e,t){a.exports=t.p+"static/media/eva.cdb39a11.jpg"},277:function(a,e,t){a.exports=t.p+"static/media/inter.4ccba643.jpg"},278:function(a,e,t){a.exports=t.p+"static/media/largadinho.4509591b.jpg"},279:function(a,e,t){a.exports=t.p+"static/media/meabraca.963994ce.jpg"},280:function(a,e,t){a.exports=t.p+"static/media/nana.26f58afe.jpg"},281:function(a,e,t){a.exports=t.p+"static/media/olodum.f6c54ee3.jpg"},282:function(a,e,t){a.exports=t.p+"static/media/praieiro.50d4eabe.jpg"},283:function(a,e,t){a.exports=t.p+"static/media/vumbora.c5b3038c.jpg"},284:function(a,e,t){a.exports=t.p+"static/media/club.0038580e.jpg"},285:function(a,e,t){a.exports=t.p+"static/media/harem.513c0104.jpg"},286:function(a,e,t){a.exports=t.p+"static/media/lounge-skol.9759baca.jpg"},287:function(a,e,t){a.exports=t.p+"static/media/nana.a26816bf.jpg"},288:function(a,e,t){a.exports=t.p+"static/media/planeta-band-all.1f544340.jpg"},289:function(a,e,t){a.exports=t.p+"static/media/planeta-band.a2a939d7.jpg"},290:function(a,e,t){a.exports=t.p+"static/media/salvador.a9f1faa4.jpg"},291:function(a,e,t){a.exports=t.p+"static/media/skol.1f0dda80.jpg"},292:function(a,e,t){a.exports=t.p+"static/media/viafolia.8a5f59d2.jpg"},293:function(a,e,t){a.exports=t.p+"static/media/vilamix.3b42406e.jpg"},294:function(a,e,t){a.exports=t.p+"static/media/carnavalito.a1d6b263.jpg"},298:function(a,e,t){"use strict";t.d(e,"a",(function(){return $}));var i=t(0),n=t.n(i),c=t(258),m=t(324),o=t(325),r=t(326),s=t(327),d=t(274),p=t.n(d),l=t(275),g=t.n(l),u=t(276),f=t.n(u),x=t(277),b=t.n(x),h=t(278),E=t.n(h),j=t(279),v=t.n(j),k=t(280),N=t.n(k),O=t(281),w=t.n(O),y=t(282),C=t.n(y),D=t(283),I=t.n(D),S=t(284),A=t.n(S),q=t(285),z=t.n(q),J=t(286),W=t.n(J),_=t(287),B=t.n(_),F=t(288),G=t.n(F),H=t(289),K=t.n(H),L=t(290),M=t.n(L),P=t(291),Q=t.n(P),R=t(292),T=t.n(R),U=t(293),V=t.n(U),X=t(294),Y=t.n(X),Z=[{id:123,img:p.a},{id:178,img:g.a},{id:837,img:f.a},{id:557,img:f.a},{id:1,img:b.a},{id:536,img:E.a},{id:543,img:v.a},{id:550,img:N.a},{id:552,img:N.a},{id:2,img:w.a},{id:521,img:C.a},{id:559,img:I.a},{id:685,img:I.a},{id:571,img:A.a},{id:3,img:z.a},{id:30,img:W.a},{id:505,img:B.a},{id:4,img:G.a},{id:623,img:K.a},{id:193,img:M.a},{id:688,img:Q.a},{id:622,img:Q.a},{id:606,img:Q.a},{id:605,img:Q.a},{id:600,img:Q.a},{id:5,img:T.a},{id:255,img:V.a},{id:515,img:Y.a}];function $(a){var e=Object(c.a)({root:{width:1.5*a.tamanho,height:a.tamanho}}),t=a.dados,i=t.images[0]?t.images[0].src:"",d=e(),p=i,l=Z.filter((function(a){return a.id===t.id}));return 1===l.length&&(p=l[0].img),n.a.createElement(m.a,{className:d.root},n.a.createElement(o.a,null,n.a.createElement(r.a,{component:"img",alt:t.name,image:p,title:t.name,height:a.tamanho,width:"auto"}),n.a.createElement(s.a,null)))}},563:function(a,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return j}));var i=t(0),n=t.n(i),c=t(56),m=t(42),o=t(12),r=t(328),s=t(262),d=t(263),p=t(298),l=t(404),g=t.n(l),u=t(405),f=t.n(u),x=t(386),b=t.n(x);function h(a){var e=Object(m.c)((function(a){return a.products.grouped_products})),t="";(e=e.filter((function(e){return e.categories[0].id===a.categoriaID}))).length>0&&(t=e[0].categories[0].name);var l={root:{padding:"0 10px"},slideContainer:{padding:"0 10px",width:"auto"},slide:{padding:1,maxWidth:170},margins:{margin:10}},u=Object(i.useState)(0),x=Object(c.a)(u,2),h=x[0],E=x[1];return n.a.createElement(r.a,{container:!0,spacing:1},n.a.createElement(r.a,{item:!0,xs:6,className:"h1-responsive font-weight-bold my-2",style:{color:"#4A4A4A!important"}},n.a.createElement("h2",{className:"text-left "},t)),n.a.createElement(r.a,{item:!0,xs:6},n.a.createElement("h2",{className:"text-right"},n.a.createElement(s.a,{"aria-label":"anterior",onClick:function(){var a=h-1>=0?h-1:e.length-1;E(a)}},n.a.createElement(g.a,{fontSize:"large"})),n.a.createElement(s.a,{"aria-label":"pr\xf3ximo",onClick:function(){var a=h+1<e.length?h+1:0;E(a)}},n.a.createElement(f.a,{fontSize:"large"})))),n.a.createElement(r.a,{item:!0,xs:12},n.a.createElement(b.a,{style:l.root,slideStyle:l.slideContainer,index:h},e.map((function(a){return n.a.createElement(d.a,{key:a.id,style:Object.assign({},l.slide),to:"/compre-aqui",component:o.b},n.a.createElement(p.a,{dados:a,tamanho:110,link:"compre-aqui"}))})))))}var E=t(209);function j(){return n.a.createElement("div",null,n.a.createElement(E.a,{direction:"up",in:!0,mountOnEnter:!0,unmountOnExit:!0},n.a.createElement(r.a,{container:!0,spacing:3},n.a.createElement(r.a,{item:!0,xs:12},n.a.createElement(h,{categoriaID:16,className:"mt-4 mb-5"})),n.a.createElement(r.a,{item:!0,xs:12},n.a.createElement(h,{categoriaID:17,className:"mt-4 mb-5"})),n.a.createElement(r.a,{item:!0,xs:12},n.a.createElement(h,{categoriaID:19,className:"mt-4 mb-5"})))))}}}]);
//# sourceMappingURL=9.fec781fe.chunk.js.map