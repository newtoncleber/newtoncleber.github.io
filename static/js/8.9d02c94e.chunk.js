(this.webpackJsonpfoliabahiamobile=this.webpackJsonpfoliabahiamobile||[]).push([[8],{460:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(49),c=a(18),i=a(153);function o(e){var t=e.item,a=t.attributes.find((function(e){return"Dias"===e.name})),n=Object(l.b)();a=a?a.options[0]:"";var o=t.attributes.find((function(e){return"G\xeanero"===e.name}));function u(){return n(Object(i.a)(t))}function m(){return r.a.createElement(c.k,{bgColor:"blue lighten-4",waves:!0,className:"w-100",onClick:u},"Comprar")}switch(o&&(o=o.options[0]),t.categories[0].id){case 16:return r.a.createElement("div",{className:"d-flex flex-column grey lighten-4 rounded border border-light p-2 m-2 justify-content-cente"},r.a.createElement("div",null,a),r.a.createElement("div",null,o),r.a.createElement("div",null,t.price),m());case 17:return r.a.createElement("div",{className:"d-flex flex-column grey lighten-4 rounded border border-light p-2 m-2 justify-content-cente"},r.a.createElement("div",null,a),r.a.createElement("div",null,t.price),m());case 19:return r.a.createElement("div",{className:"d-flex flex-column grey lighten-4 rounded border border-light p-2 m-2 justify-content-cente"},r.a.createElement("div",null,t.name),r.a.createElement("div",null,t.price),m());default:return r.a.createElement("p",null,t.name)}}function u(e){var t=e.produtos,a=e.item,n=a.images[0]?a.images[0].src:"",l=a.images[0]?a.images[0].alt:"",i=a.grouped_products,u=function(){var e=[];i&&Array.prototype.forEach.call(i,(function(a){var n=t.find((function(e){return e.id===a}));n&&e.push(n)}));return e}();return r.a.createElement(c.h,{wide:!0,className:"my-3"},r.a.createElement(c.j,{className:"view view-cascade gradient-card-header peach-gradient",cascade:!0,tag:"div"},r.a.createElement("div",{className:"d-flex flex-row"},r.a.createElement("div",{className:"p-2"},r.a.createElement("img",{src:n,alt:l,className:"img-fluid",style:{maxHeight:"7vh"}})),r.a.createElement("div",{className:"p-2"},a.name))),r.a.createElement(c.i,{cascade:!0,className:"text-center"},r.a.createElement(c.z,null,u.map((function(e){return r.a.createElement(c.l,{size:"6",key:e.id},r.a.createElement(o,{item:e}))})))))}function m(e){var t=e.produtos,a=t.filter((function(e){return"grouped"===e.type}));return a=a.filter((function(t){return t.categories[0].id===e.categoria})),r.a.createElement(c.n,{className:"mt-5"},r.a.createElement("h5",{className:"h1-responsive font-weight-bold text-left my-2"},e.titulo),a.map((function(e){return r.a.createElement(u,{key:e.id,item:e,produtos:t})})))}t.default=function(){var e=Object(l.c)((function(e){return e.products.produtos}));return r.a.createElement(c.b,{type:"slideInLeft"},r.a.createElement("h1",{className:"text-white"},"."),r.a.createElement(c.e,null,r.a.createElement(c.f,null,"Home"),r.a.createElement(c.f,{active:!0},"Compre Aqui")),r.a.createElement("h5",null,"Monte o carnaval do seu jeito"),r.a.createElement(m,{categoria:16,titulo:"CAMAROTES",produtos:e}),r.a.createElement(m,{categoria:17,titulo:"BLOCOS",produtos:e}))}}}]);
//# sourceMappingURL=8.9d02c94e.chunk.js.map