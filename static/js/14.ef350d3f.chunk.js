(this.webpackJsonpfoliabahiamobile=this.webpackJsonpfoliabahiamobile||[]).push([[14],{918:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return y}));var n=a(51),i=a(0),r=a.n(i),o=a(37),c=a(47),l=a(6),m=a(409);function u(e){return{type:l.h,error:e}}function p(e,t,a){var n=[];a.items.forEach((function(e){n.push({product_id:e.produto.id,quantity:e.quantidade})}));var i={payment_method:"bacs",payment_method_title:"Direct Bank Transfer",set_paid:!1,shipping:t.shipping,line_items:n,shipping_lines:[{method_id:"local_pickup",method_title:"Retirar no Local"}]};c.a.post("orders",i).then((function(t){e(function(e){return{type:l.j,data:e}}(t.data)),e(Object(m.a)())})).catch((function(t){e(u(t.response))}))}var s=a(62),d=a(233),h=a(358),f=a(903),b=a(917),E=a(919),g=a(912),v=a(914);function y(e){var t=e.cart,a=(e.gateways,e.customer),i=Object(o.b)(),c=r.a.useState(""),l=Object(n.a)(c,2),m=l[0],u=l[1];return r.a.createElement(d.a,{p:2},r.a.createElement("h3",null,"Op\xe7\xf5es de pagamento"),r.a.createElement(h.a,{container:!0},r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(f.a,{onClick:e.prevClick},"Voltar")),r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(b.a,{component:"fieldset"},r.a.createElement(E.a,{"aria-label":"pagamento",name:"pagamento",value:m,onChange:function(e){u(e.target.value)}},[{id:1,title:"Boleto"},{id:2,title:"Cart\xe3o de Cr\xe9dito"}].map((function(e){return r.a.createElement(g.a,{value:e.id,control:r.a.createElement(v.a,null),label:e.title,key:e.id})}))))),r.a.createElement(h.a,{item:!0,xs:12,style:{marginTop:20}},r.a.createElement(f.a,{variant:"contained",color:"primary",style:{backgroundColor:s.a[500],width:"100%"},onClick:function(){p(i,a,t)}},"FINALIZAR COMPRA"))))}}}]);
//# sourceMappingURL=14.ef350d3f.chunk.js.map