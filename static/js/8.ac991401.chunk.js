(this.webpackJsonpfoliabahiamobile=this.webpackJsonpfoliabahiamobile||[]).push([[8],{126:function(e,t,a){"use strict";a.r(t);var o=a(15),n=a(16),c=a(18),r=a(17),l=a(19),s=a(1),i=a.n(s),m=a(101),u=a.n(m),d=a(7),p=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(r.a)(t).call(this,e))).state={camarote:{}},a}return Object(l.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){this.setState({camarote:this.props.camarote})}},{key:"render",value:function(){return i.a.createElement(d.d,{style:{width:"22rem"}},i.a.createElement(d.f,{className:"img-fluid",src:this.state.camarote.foto,waves:!0}),i.a.createElement(d.e,null,i.a.createElement(d.h,null,this.state.camarote.nome),i.a.createElement(d.g,null,this.state.camarote.censura," - ",this.state.camarote.modalidade," -"," ",this.state.camarote.preco)))}}]),t}(i.a.Component),h=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(r.a)(t).call(this,e))).camarotes=[{id:1,nome:"Camarote Skol",foto:"https://foliaproducoes.com.br/wp-content/uploads/2019/09/Skol.jpg",censura:18,preco:500,modalidade:"open bar"},{id:2,nome:"Camarote Club",foto:"https://foliaproducoes.com.br/wp-content/uploads/2019/08/Club.jpg",censura:18,preco:5e3,modalidade:"all inclusive"},{id:3,nome:"Carnavalito",foto:"https://foliaproducoes.com.br/wp-content/uploads/2019/08/carnavalito.jpg",censura:18,preco:500,modalidade:"open bar"},{id:4,nome:"Nana",foto:"https://foliaproducoes.com.br/wp-content/uploads/2019/08/Nana.jpg",censura:18,preco:500,modalidade:"open bar"},{id:5,nome:"Villamix",foto:"https://foliaproducoes.com.br/wp-content/uploads/2019/02/Vilamix-1.jpg",censura:18,preco:500,modalidade:"open bar"},{id:6,nome:"Salvador",foto:"https://foliaproducoes.com.br/wp-content/uploads/2018/09/Salvador.jpg",censura:18,preco:500,modalidade:"open bar"}],a}return Object(l.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(d.i,{activeItem:1,length:this.camarotes.length,showControls:!0,className:"z-depth-1",interval:!1,slide:!0},i.a.createElement(d.j,null,this.camarotes.map((function(e){return i.a.createElement(d.k,{key:e.id,itemId:e.id},i.a.createElement(d.x,null,i.a.createElement(p,{camarote:e})))}))))}}]),t}(i.a.Component),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(r.a)(t).call(this,e))).state={blocos:[],camarotes:[],navios:[],hoteis:[]},a}return Object(l.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){u.a.get("./data/db.json").then(function(e){this.setState({blocos:e.data.produtos.blocos,camarotes:e.data.produtos.camarotes}),console.log(e.data)}.bind(this)).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e={color:"#4A4A4A",fontSize:"2rem"};return i.a.createElement("div",{className:"mb-5"},i.a.createElement("h1",{className:"text-white mb-4"},"HOME"),i.a.createElement("div",{className:"secao w-100"},i.a.createElement("h1",{style:e},"CAMAROTES"),i.a.createElement(h,null)),i.a.createElement("div",{className:"secao w-100 mt-3"},i.a.createElement("h1",{style:e},"BLOCOS"),i.a.createElement(h,null)),i.a.createElement("h1",{className:"text-white mb-4"},"HOME"))}}]),t}(i.a.Component);t.default=b}}]);
//# sourceMappingURL=8.ac991401.chunk.js.map