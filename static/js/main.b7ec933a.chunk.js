(this["webpackJsonpfast-food"]=this["webpackJsonpfast-food"]||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){},105:function(e,t,a){"use strict";a.r(t);var c=a(2),s=a.n(c),n=a(19),r=a.n(n),i=a(15),l=a(27),o=(a(75),a.p+"static/media/Carrusel1.5f056dd3.jpg"),j=a.p+"static/media/Carrusel2.d06e6e07.jpg",d=a.p+"static/media/Carrusel3.d22326b4.jpg",b=a.p+"static/media/Carrusel4.7fc857b5.jpg",h=a.p+"static/media/Carrusel5.a05d5381.jpg",u=a(1);var O=function(){return Object(u.jsx)("div",{className:"Carrusel",children:Object(u.jsxs)(l.a,{children:[Object(u.jsx)(l.a.Item,{children:Object(u.jsx)("img",{className:"d-block w-100 imgCarrusel",src:o,alt:"First plate"})}),Object(u.jsx)(l.a.Item,{children:Object(u.jsx)("img",{className:"d-block w-100 imgCarrusel",src:j,alt:"Second plate"})}),Object(u.jsx)(l.a.Item,{children:Object(u.jsx)("img",{className:"d-block w-100 imgCarrusel",src:d,alt:"Third plate"})}),Object(u.jsx)(l.a.Item,{children:Object(u.jsx)("img",{className:"d-block w-100 imgCarrusel",src:b,alt:"Fourth plate"})}),Object(u.jsx)(l.a.Item,{children:Object(u.jsx)("img",{className:"d-block w-100 imgCarrusel",src:h,alt:"Five plate"})})]})})},m=a(12),x=a(23),p=(a(77),a(107)),f=a(108),g=a(111),N=a(109),v=a(110),C=a(22),y=a(3),E="ADD_TO_CART",S="DELETE_FROM_CART",R="TOTAL_PRICE",k="OPEN_COLLAPSE",T="STORE_ALL",w="SENDING_REQUEST",q="REQUEST_DATA",A="REQUEST_ERROR",F="SEARCH_TABLET",D="CHARACTER_RESULTS",L="ADD_ORDEN",P=function(e){return function(t){t({type:S,payload:e})}},_=function(e,t){return function(a){a(function(e){return{type:E,payload:e}}(Object(y.a)(Object(y.a)({},e),{},{qty:t})))}},M=function(){return function(e){e({type:R})}},I=function(){return function(e){e({type:k})}},B=function(){return function(e){return e({type:w,payload:{loading:!0}}),fetch("json/tablets.json").then((function(e){return e.json()})).catch((function(e){return console.error("Error:",e)})).then((function(t){e(function(e){return{type:q,payload:{list:e,loading:!1}}}(t))})).catch((function(t){e(function(e){return{type:A,payload:{error:e,loading:!1}}}(t))}))}},G=a(28),H=a.n(G),z=a(66),U=a(39),Q=(a(80),a(24)),W=a.n(Q);var K=Object(i.b)((function(e){return{shoppingCart:e.cartReducer.shoppingCart,total:e.cartReducer.total,open:e.cartReducer.open}}),{deleteFromCart:P,totalAcc:M,openCollapse:I})((function(e){var t=e.shoppingCart,a=e.deleteFromCart,n=e.totalAcc,r=e.total,i=e.openCollapse;return Object(c.useEffect)((function(){n()}),[n,t]),Object(u.jsxs)("div",{id:"example-collapse-text",className:"Contenedor",children:[t&&t.length?t.map((function(e){return Object(u.jsxs)(s.a.Fragment,{children:[Object(u.jsx)("div",{className:"imagen",children:Object(u.jsx)("img",{src:e.imagen,className:"img-cart",alt:"Tablet Ordenado"})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{className:"tabName",style:{fontWeight:"bolder"},children:e.principal}),Object(u.jsxs)("p",{className:"tabQty",style:{fontWeight:"bolder"},children:["Cantidad: ",Object(u.jsx)("span",{children:e.qty})]}),Object(u.jsxs)("p",{className:"tabTotal",style:{fontWeight:"bolder"},children:["Subtotal: ",Object(u.jsx)("span",{children:e.qty*e.precio}),Object(u.jsx)(C.b,{})]}),Object(u.jsx)("button",{className:"botonElim",onClick:function(){return a(e.id)},children:Object(u.jsx)(U.a,{style:{width:"20px",height:"20px"}})})]})]},e.id)})):"",Object(u.jsx)("div",{className:"lineaizq"}),Object(u.jsx)("div",{className:"lineader"}),Object(u.jsx)("div",{children:Object(u.jsx)("p",{className:"total",style:{fontWeight:"bolder"},children:"Total a Pagar:"})}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("p",{className:"totalPrice",style:{fontWeight:"bolder"},children:[r,Object(u.jsx)(C.b,{})]}),Object(u.jsx)(x.b,{className:"btn btn-success botonPage",to:"/pagar",onClick:function(e){return function(e){0===r?(e.preventDefault(),W.a.fire({text:"El carrito esta vac\xedo, selecciona los tablets.",icon:"warning",showConfirmButton:!1,timer:2e3})):i()}(e)},children:"Pagar"})]})]})})),V=a.p+"static/media/icon.0d4acf1e.png",J=Object(i.b)((function(e,t){return{section:t.section,list:e.tabletReducer.list,shoppingCart:e.cartReducer.shoppingCart,open:e.cartReducer.open,tabletSearch:e.tabletReducer.tabletSearch}}),{openCollapse:I,updateSearch:function(e){return function(t){t({type:F,payload:e})}},resultsSearch:function(e){return function(t){t({type:D,payload:e})}}})((function(e){var t=e.shoppingCart,a=e.openCollapse,n=e.open,r=e.updateSearch,i=e.tabletSearch,l=e.resultsSearch,o=e.list,j=Object(c.useState)(!1),d=Object(m.a)(j,2),b=d[0],h=d[1],O=function(){return t.reduce((function(e,t){return e+t.qty}),0)};return Object(u.jsxs)(s.a.Fragment,{children:[Object(u.jsx)(p.a,{className:"navBar",dark:!0,expand:"lg",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)(x.c,{className:"nav-link me-0 w-50 textVar",to:"/",children:["Fast Food ",Object(u.jsx)("img",{src:V,className:"iconVar",alt:"icon"})," ","Restaurant"]}),Object(u.jsx)(f.a,{onClick:function(){h(!b)},className:"ms-auto"}),Object(u.jsxs)(g.a,{isOpen:b,navbar:!0,children:[Object(u.jsxs)(N.a,{className:"ms-auto",navbar:!0,children:[Object(u.jsx)(v.a,{children:Object(u.jsx)(x.c,{className:"nav-link",to:"/",activeClassName:"active",children:"Inicio"})}),Object(u.jsx)(v.a,{children:Object(u.jsx)(x.c,{className:"nav-link",to:"/tablets",children:"Tablets"})}),Object(u.jsx)(v.a,{children:Object(u.jsx)(x.c,{className:"nav-link",to:"/contact",children:"Contacto"})}),Object(u.jsx)(v.a,{children:Object(u.jsxs)("button",{className:"Cart nav-link me-2",type:"button","aria-controls":"example-collapse-text","aria-expanded":n,onClick:a,children:[Object(u.jsx)(C.a,{}),Object(u.jsx)("div",{className:"cart-amount ".concat(0===O()?"hide":""),children:Object(u.jsx)("span",{children:0===O()?"":O()})})]})})]}),Object(u.jsxs)("form",{className:"d-flex",children:[Object(u.jsx)("input",{className:"form-control me-1",type:"text",name:"search",value:i,placeholder:"Buscar","aria-label":"Search",onChange:function(e){r(e.target.value)}}),Object(u.jsx)(x.c,{className:"btn btn-outline-warning",to:"/search",onClick:function(e){return function(e){if(""===i)return e.preventDefault(),H()({text:"Seleccione un criterio de b\xfasqueda.",icon:"warning",buttons:!1,timer:2e3});var t=new z.a(o,{keys:["tablet","entrante","principal","postre","liquido"],threshold:.1}).search(i),a=t?t.map((function(e){return e.item})):[];l(a)}(e)},children:"Buscar"})]})]})]})}),Object(u.jsx)(g.a,{isOpen:n,className:"Colapse",children:Object(u.jsx)(K,{})})]})}));a(33);var X=Object(i.b)((function(e){return{}}),{})((function(e){var t=e.data,a=e.addToCart,s=Object(c.useState)(0),n=Object(m.a)(s,2),r=n[0],i=n[1];return Object(u.jsxs)("div",{className:"card",style:{maxHeight:"150vh"},children:[Object(u.jsx)("img",{src:t.imagen,className:"card-img-top",alt:"Men\xfa Dirigido"}),Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("p",{className:"card-text",children:t.entrante}),Object(u.jsx)("p",{className:"card-text platprinc",children:t.principal}),Object(u.jsx)("p",{className:"card-text",children:t.postre}),Object(u.jsx)("p",{className:"card-text",children:t.liquido}),Object(u.jsxs)("p",{className:"Precio",children:[t.precio," ",Object(u.jsx)(C.b,{})," "]}),Object(u.jsxs)("div",{className:"btn-grouper",children:[Object(u.jsxs)("div",{className:"text-center",children:[Object(u.jsx)("button",{className:"btn btn-warning",type:"button",onClick:function(){r>0&&i(r-1)},children:"-"}),Object(u.jsx)("input",{type:"text",className:"Quantity",value:r,onChange:function(e){var t=e.target;i(t)}}),Object(u.jsx)("button",{className:"btn btn-warning strong",type:"button",onClick:function(){return i(r+1)},children:"+"})]}),Object(u.jsx)("div",{children:Object(u.jsxs)("button",{className:"btn btn-dark mt-3",type:"button",onClick:function(){a(t,r),i(0)},children:[Object(u.jsx)(C.a,{})," Agregar Orden"]})})]})]})]})})),Y=(a(99),a(47)),Z=function(){var e=Object(c.useState)(""),t=Object(m.a)(e,2),a=t[0],s=t[1];return Object(u.jsx)("div",{className:"main-footer",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"footerGeneral",children:[Object(u.jsxs)("div",{className:"footerInfo",children:[Object(u.jsxs)("div",{className:"easyInfo left",children:[Object(u.jsxs)("h6",{className:"section-block",children:["Lunes-S\xe1bado",Object(u.jsx)("span",{className:"heading-span",children:"11AM-11PM"})]}),Object(u.jsxs)("h6",{className:"section-block",children:["Domingo",Object(u.jsx)("span",{className:"heading-span",children:"11AM-3PM"})]})]}),Object(u.jsx)("div",{className:"easyInfo right",children:Object(u.jsxs)("h6",{className:"section-block",children:[Object(u.jsx)("a",{className:"phone",href:"tel:42519274",children:"(43) 51-9274"}),Object(u.jsx)("span",{className:"heading-span",children:"Calle 55 #5109-A e/Ave 56 y 58"})]})})]}),Object(u.jsxs)("div",{className:"infoForm",children:[Object(u.jsx)("p",{children:"Si quieres estar al tanto de todas las novedades de nuestro men\xfa y servicios en oferta entonces, reg\xedstrese gratuitamente a nuestra lista de correo a trav\xe9s del siguiente formulario."}),Object(u.jsx)("p",{children:"Subscr\xedbete:"}),Object(u.jsxs)("form",{className:"formEmail",children:[Object(u.jsx)("label",{htmlFor:"input-email",children:"Correo Electronico"}),Object(u.jsx)("input",{id:"input-email",type:"email",name:"email",value:a,placeholder:"Correo Electr\xf3nico",className:"inputEmail",onChange:function(e){s(e.target.value)},required:!0}),Object(u.jsx)("button",{className:"btn btn-outline-warning btnEmail",type:"submit",onClick:function(e){""!==a&&(e.preventDefault(),H()({text:"Se ha subscrito satisfactoriamente.",icon:"success",buttons:!1,timer:2e3}),s(""))},children:"Enviar"})]})]}),Object(u.jsxs)("div",{className:"footerRedes",children:[Object(u.jsxs)("h6",{className:"section-block-redes",children:[Object(u.jsx)("span",{className:"heading-span",children:"SIGUENOS"}),Object(u.jsx)("a",{href:"https://instagram.com",target:"_parent",className:"refIcon",children:Object(u.jsx)("i",{children:Object(u.jsx)(Y.b,{})})}),Object(u.jsx)("a",{href:"https://facebook.com",target:"_parent",className:"refIcon",children:Object(u.jsx)("i",{children:Object(u.jsx)(Y.a,{})})}),Object(u.jsx)("a",{href:"https://twitter.com",target:"_parent",className:"refIcon",children:Object(u.jsx)("i",{children:Object(u.jsx)(Y.c,{})})})]}),Object(u.jsxs)("p",{className:"text-xs-center",children:["\xa9",(new Date).getFullYear()," Fast Food - All Rights Reserved"]})]})]})})})},$=a(63),ee=a.n($),te=(a(100),Object(i.b)((function(e){return{list:e.tabletReducer.list,shoppingCart:e.cartReducer.shoppingCart}}),{fetchData:B,addTablet:_})((function(e){var t=e.list,a=e.fetchData,s=e.addTablet;ee.a.init(),Object(c.useEffect)((function(){a()}),[a]);var n=function(e,t){s(e,t),W.a.fire({text:"Se ha a\xf1adido ".concat(t," tablet al pedido."),icon:"success",showConfirmButton:!1,timer:2e3})};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(J,{}),Object(u.jsx)(O,{}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"sugerencia aos-init aos-animate","data-aos":"zoom-in","data-aos-duration":"1000",children:Object(u.jsxs)("h3",{className:"section-heading",children:["Sugerencias",Object(u.jsx)("em",{children:"del Chef"})]})}),Object(u.jsx)("div",{className:"rowShow",children:Object(u.jsx)("div",{className:"row aos-init aos-animate rowPrincipal","data-aos":"zoom-in","data-aos-duration":"1000",children:t&&t.length?t.map((function(e){return!0===e.sugerencia?Object(u.jsx)("div",{className:"col-md-4 mb-4 mt-4",children:Object(u.jsx)(X,{data:e,addToCart:n})},e.id):null})):""})})]}),Object(u.jsx)(Z,{})]})}))),ae=(a(101),a(13)),ce=a(17),se=Object(i.b)((function(e){return{list:e.tabletReducer.list,loading:e.tabletReducer.loading,error:e.tabletReducer.error}}),{addTablet:_,fetchData:B})((function(e){var t=e.list,a=e.loading,s=e.error,n=e.addTablet,r=e.fetchData;Object(c.useEffect)((function(){r()}),[r]);var i=function(e,t){n(e,t),W.a.fire({text:"Se ha a\xf1adido ".concat(t," tablet al pedido."),icon:"success",showConfirmButton:!1,timer:2e3})};return Object(u.jsxs)("div",{className:"listing",children:[Object(u.jsx)(J,{}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"sugerencia",children:Object(u.jsxs)("h3",{className:"section-heading",children:["Men\xfa",Object(u.jsx)("em",{children:"de Tablet"})]})}),a?"Cargando datos...":"",s?"Recibido error:"+s:"",Object(u.jsxs)(ce.a,{className:"divAcordion",flush:!0,children:[Object(u.jsxs)(ce.a.Item,{eventKey:"0",children:[Object(u.jsx)(ce.a.Header,{children:"Carnes (cerdo, res y carnero)"}),Object(u.jsx)(ce.a.Body,{children:Object(u.jsx)("div",{className:"row mt-3",children:t&&t.length?t.map((function(e){return e.tablet.includes("Carne")?Object(u.jsx)("div",{className:"col-md-4 mb-4 mt-4",children:Object(u.jsx)(X,{data:e,addToCart:i})},e.id):""})):""})})]}),Object(u.jsxs)(ce.a.Item,{eventKey:"1",children:[Object(u.jsx)(ce.a.Header,{children:"Aves (pollo)"}),Object(u.jsx)(ce.a.Body,{children:Object(u.jsx)("div",{className:"row mt-4",children:t&&t.length?t.map((function(e){return e.tablet.includes("Ave")?Object(u.jsx)("div",{className:"col-md-4 mb-4 mt-4",children:Object(u.jsx)(X,{data:e,addToCart:i})},e.id):""})):""})})]}),Object(u.jsxs)(ce.a.Item,{eventKey:"2",children:[Object(u.jsx)(ce.a.Header,{children:"Pastas (espaguetis y pizza)"}),Object(u.jsx)(ce.a.Body,{children:Object(u.jsx)("div",{className:"row mt-4",children:t&&t.length?t.map((function(e){return e.tablet.includes("Pasta")?Object(u.jsx)("div",{className:"col-md-4 mb-4 mt-4",children:Object(u.jsx)(X,{data:e,addToCart:i})},e.id):""})):""})})]}),Object(u.jsxs)(ce.a.Item,{eventKey:"3",children:[Object(u.jsx)(ce.a.Header,{children:"Pescados y Mariscos (langosta y camarones)"}),Object(u.jsx)(ce.a.Body,{children:Object(u.jsx)("div",{className:"row mt-4",children:t&&t.length?t.map((function(e){return e.tablet.includes("Marisco")?Object(u.jsx)("div",{className:"col-md-4 mb-4 mt-4",children:Object(u.jsx)(X,{data:e,addToCart:i})},e.id):""})):""})})]})]})]}),Object(u.jsx)(Z,{})]})})),ne=(a(102),a(8)),re=a(41),ie=a.p+"static/media/Mapa.4402b064.png";var le=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(J,{}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{className:"headingContact",children:"Cont\xe1ctenos"}),Object(u.jsxs)("div",{className:"main",children:[Object(u.jsx)("div",{className:"form-contact",children:Object(u.jsxs)(ne.a,{children:[Object(u.jsxs)(ne.a.Group,{className:"mb-2 input-names",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)(ne.a.Label,{children:"Nombre"}),Object(u.jsx)(ne.a.Control,{type:"text",id:"name",className:"input-datos"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)(ne.a.Label,{children:"Apellidos"}),Object(u.jsx)(ne.a.Control,{type:"text",id:"apellidos",className:"input-datos"})]})]}),Object(u.jsxs)(ne.a.Group,{className:"mb-2",children:[Object(u.jsx)(ne.a.Label,{children:"Email"}),Object(u.jsx)(ne.a.Control,{type:"email",id:"name"})]}),Object(u.jsxs)(ne.a.Group,{className:"mb-2",children:[Object(u.jsx)(ne.a.Label,{children:"Mensaje"}),Object(u.jsx)(ne.a.Control,{as:"textarea",row:4})]}),Object(u.jsx)(re.a,{variant:"primary",type:"submit",className:"enviar-msg",children:"Enviar"})]})}),Object(u.jsx)("div",{className:"map-contact",children:Object(u.jsxs)("div",{className:"section-info",children:[Object(u.jsxs)("h5",{children:["Restaurante ",Object(u.jsx)("b",{children:"Fast Food"})]}),Object(u.jsx)("p",{className:"text-direction",children:"(43) 51-9274"}),Object(u.jsx)("p",{className:"text-direction",children:"Calle 55 #5609-A e/56 y 58"}),Object(u.jsx)("p",{children:"La Juanita, Cienfuegos, Cuba"}),Object(u.jsx)("div",{children:Object(u.jsx)("img",{src:ie,alt:"Mapa Ubicaci\xf3n",className:"map-imagen"})})]})})]})]}),Object(u.jsx)(Z,{})]})},oe=a(64),je=(a(103),a(48)),de=a.p+"static/media/qr-code.1c969dc6.png";var be=Object(i.b)((function(e){return{shoppingCart:e.cartReducer.shoppingCart,total:e.cartReducer.total}}),{deleteFromCart:P,totalAcc:M,addOrden:function(){return function(e){e({type:L})}}})((function(e){var t=e.shoppingCart,a=e.deleteFromCart,n=e.total,r=e.addOrden,i=Object(ae.f)(),l=new Date,o=l.getDate(),j=l.getMonth()+1,d=l.getFullYear();o<10&&(o="0"+o),j<10&&(j="0"+j),l=d+"-"+j+"-"+o;for(var b=[],h=[],O=1;O<13;O++)b.push(O);for(var x=0;x<60;x++)x<10?h.push("0"+x):h.push(x);var p=Object(c.useState)(l),f=Object(m.a)(p,2),N=f[0],v=f[1],y=Object(c.useState)(""),E=Object(m.a)(y,2),S=E[0],R=E[1],k=Object(c.useState)(!1),T=Object(m.a)(k,2),w=T[0],q=T[1],A=Object(c.useState)(""),F=Object(m.a)(A,2),D=F[0],L=F[1],P=Object(c.useState)(!1),_=Object(m.a)(P,2),M=_[0],I=_[1],B=Object(c.useState)(""),G=Object(m.a)(B,2),H=G[0],z=G[1];return Object(u.jsxs)(s.a.Fragment,{children:[Object(u.jsx)(J,{}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h2",{className:"form-header",children:"\xa1Gracias por elegirnos!"}),Object(u.jsx)("p",{className:"form-p",children:"Una vez seleccionado el Men\xfa, le mostramos la Orden generada, asi como los datos que necesita llenar para poder confirmar el pedido y el pago del mismo. Esperamos disfrute de nuestro servicio de Fast Food."}),Object(u.jsx)("div",{className:"formulario",children:Object(u.jsxs)(ne.a,{onSubmit:function(e){t&&0!==t.length?!0!==w||"Efectivo"!==H&&"Transferencia"!==H?(W.a.fire({text:"Especifique el m\xe9todo de entrega y de pago.",icon:"warning",showConfirmButton:!1,timer:3e3}),e.preventDefault()):(W.a.fire({text:"Su pedido se ha recibido satisfactoriamente.",icon:"success",showConfirmButton:!1,timer:3e3}),e.preventDefault(),r(),i.push("/tablets")):(W.a.fire({text:"No existen tablets en su orden.",icon:"warning",showConfirmButton:!1,timer:3e3}),e.preventDefault())},children:[Object(u.jsxs)(ne.a.Group,{className:"mb-3",children:[Object(u.jsxs)(ne.a.Label,{children:["Nombre y Apellidos",Object(u.jsx)("span",{className:"form-required",children:"*"})]}),Object(u.jsxs)("div",{className:"form-name",children:[Object(u.jsx)(ne.a.Control,{type:"text",className:"input-name",placeholder:"Nombre",required:!0}),Object(u.jsx)(ne.a.Control,{type:"text",className:"input-lastname",placeholder:"Apellidos"})]})]}),Object(u.jsxs)(ne.a.Group,{className:"mb-3",children:[Object(u.jsxs)(ne.a.Label,{children:["Email",Object(u.jsx)("span",{className:"form-required",children:"*"})]}),Object(u.jsx)(ne.a.Control,{type:"email",className:"input-email",placeholder:"Enter email",required:!0}),Object(u.jsx)(ne.a.Text,{className:"text-muted",children:"Nunca compartiremos su correo electr\xf3nico con nadie m\xe1s."})]}),Object(u.jsxs)(ne.a.Group,{className:"mb-3",children:[Object(u.jsxs)(ne.a.Label,{children:["M\xf3vil",Object(u.jsx)("span",{className:"form-required",children:"*"})]}),Object(u.jsxs)("div",{className:"form-movil",children:[Object(u.jsx)(ne.a.Control,{type:"text",className:"input-zona",placeholder:"+53",required:!0}),Object(u.jsx)("span",{className:"input-group-addon",children:"-"}),Object(u.jsx)(ne.a.Control,{type:"text",className:"input-movil",required:!0})]})]}),Object(u.jsx)("div",{className:"linea"}),Object(u.jsxs)(ne.a.Group,{className:"mb-3",children:[Object(u.jsx)(ne.a.Label,{style:{fontWeight:"bold",fontSize:"20px"},children:"Men\xfa"}),Object(u.jsxs)("div",{className:"container-md",children:[Object(u.jsxs)(oe.a,{striped:!0,bordered:!0,hover:!0,size:"sm",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Tablet"}),Object(u.jsx)("th",{children:"Cantidad"}),Object(u.jsx)("th",{children:"Subtotal"}),Object(u.jsx)("th",{})]})}),t.map((function(e){return Object(u.jsx)("tbody",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:e.tablet}),Object(u.jsx)("td",{children:e.qty}),Object(u.jsx)("td",{children:e.qty*e.precio}),Object(u.jsxs)("td",{className:"text-center",children:[" ",Object(u.jsx)("button",{className:"botonElimOrden",onClick:function(){return a(e.id)},children:Object(u.jsx)(U.a,{style:{width:"20px",height:"20px"}})})]})]})},e.id)}))]}),Object(u.jsx)("span",{className:"form-total",children:Object(u.jsxs)("b",{children:[Object(u.jsx)("span",{className:"total-text",children:"Total:"}),Object(u.jsxs)("span",{className:"total-price",children:[n," ",Object(u.jsx)(C.b,{})]})]})})]})]}),Object(u.jsx)("div",{className:"linea"}),Object(u.jsxs)(ne.a.Group,{className:"mb-3",children:[Object(u.jsxs)(ne.a.Label,{children:["\xbfCu\xe1ndo quiere su pedido?",Object(u.jsx)("span",{className:"form-required",children:"*"})]}),Object(u.jsxs)("div",{className:"calendar",children:[Object(u.jsxs)("div",{className:"group-calendar",children:[Object(u.jsx)(ne.a.Control,{type:"date",defaultValue:N,className:"input-calendar",min:N,onChange:function(e){v(e.target.value)},required:!0}),Object(u.jsxs)("i",{className:"imgCalendar",children:[Object(u.jsx)(je.a,{})," "]}),Object(u.jsx)(ne.a.Text,{className:"text-muted",children:"D\xeda"})]}),Object(u.jsxs)("div",{className:"group-hour",children:[Object(u.jsxs)(ne.a.Select,{className:"selectHour",value:S,onChange:function(e){R(e.target.value)},required:!0,children:[Object(u.jsx)("option",{}),b.map((function(e){return Object(u.jsx)("option",{value:e,children:e},e)}))]}),Object(u.jsx)("p",{style:{marginLeft:"10px"},children:":"}),Object(u.jsxs)(ne.a.Select,{className:"selectHour",required:!0,children:[Object(u.jsx)("option",{}),h.map((function(e){return Object(u.jsx)("option",{value:e,children:e},e)}))]}),Object(u.jsxs)(ne.a.Select,{className:"selectHour",children:[Object(u.jsx)("option",{value:"am",children:"AM"}),Object(u.jsx)("option",{value:"pm",children:"PM"})]}),Object(u.jsx)(ne.a.Text,{className:"text-muted text-positH",children:"Hora"}),Object(u.jsx)(ne.a.Text,{className:"text-muted text-positM",children:"Minutos"})]})]})]}),Object(u.jsxs)(ne.a.Group,{className:"mb-3 selector",children:[Object(u.jsxs)(ne.a.Label,{children:["\xbfRecogida o entrega?",Object(u.jsx)("span",{className:"form-required",children:"*"})]}),Object(u.jsxs)("div",{className:"group-check",children:[Object(u.jsx)(ne.a.Check,{type:"radio",label:"Recoger",onClick:function(){q(!0),L("recoger")},"aria-controls":"collapse-recoger","aria-expanded":w,name:"chekOrden",id:"chekOrden1"}),Object(u.jsx)("i",{style:{marginLeft:"5px"},children:Object(u.jsx)(je.c,{})})]}),Object(u.jsxs)("div",{className:"group-check",children:[Object(u.jsx)(ne.a.Check,{type:"radio",label:"Entregar",onClick:function(){q(!0),L("entregar")},"aria-controls":"collapse-entregar","aria-expanded":w,name:"chekOrden",id:"chekOrden2"}),Object(u.jsx)("i",{style:{marginLeft:"5px"},children:Object(u.jsx)(je.b,{})})]}),Object(u.jsx)(g.a,{isOpen:w,className:"colapse",children:""!==D&&"recoger"===D?Object(u.jsxs)("div",{id:"collapse-recoger",children:[Object(u.jsx)("h3",{children:"\xa1Excelente! Puede recoger su pedido en:"}),Object(u.jsx)("br",{}),Object(u.jsx)("p",{children:"Calle 55 #5609A e/ Avenida 56 y 58, Cienfuegos."})]}):""!==D&&"entregar"===D?Object(u.jsxs)("div",{id:"collapse-entregar",children:[Object(u.jsx)("h3",{children:"\xa1Excelente! Especifique la direcci\xf3n de entrega:"}),Object(u.jsx)(ne.a.Control,{as:"textarea",rows:3})]}):""})]}),Object(u.jsx)("div",{className:"linea"}),Object(u.jsxs)(ne.a.Group,{className:"mb-3",children:[Object(u.jsxs)(ne.a.Label,{children:["M\xe9todo de Pago",Object(u.jsx)("span",{className:"form-required",children:"*"})]}),Object(u.jsxs)("div",{className:"checkPagar",children:[Object(u.jsxs)("div",{onChange:function(e){z(e.target.value)},children:[Object(u.jsx)(ne.a.Check,{type:"radio",label:"Efectivo",name:"chekPago",id:"chekPago1",value:"Efectivo",onChange:function(){return I(!1)}}),Object(u.jsx)(ne.a.Check,{type:"radio",label:"Transferencia",name:"chekPago",id:"chekPago2",value:"Transferencia",onChange:function(){return I(!0)}})]}),Object(u.jsx)(g.a,{isOpen:M,children:Object(u.jsx)("img",{src:de,alt:"C\xf3digo QR",className:"image-qr"})})]})]}),Object(u.jsx)(re.a,{variant:"primary",type:"submit",className:"btnAceptar",children:"Enviar"})]})})]})]})}));var he=Object(i.b)((function(e){return{tabletSearch:e.tabletReducer.tabletSearch,characterResults:e.tabletReducer.characterResults}}),{addTablet:_})((function(e){var t=e.addTablet,a=e.tabletSearch,c=e.characterResults,n=function(e,a){t(e,a),H()({text:"Se ha a\xf1adido ".concat(a," tablet al pedido."),icon:"success",buttons:!1,timer:2e3})};return Object(u.jsxs)(s.a.Fragment,{children:[Object(u.jsx)(J,{}),Object(u.jsx)("div",{children:Object(u.jsxs)("h2",{className:"titulo-search",children:["Resultados de la b\xfasqueda: ",a]})}),Object(u.jsx)("div",{className:"container row",children:c&&c.length?c.map((function(e){return Object(u.jsx)(X,{data:e,addToCart:n},e.id)})):Object(u.jsx)("div",{children:Object(u.jsx)("p",{className:"subtitulo-search",children:"No hubo coincidencias con el criterio de b\xfasqueda especificado."})})}),Object(u.jsx)(Z,{})]})}));var ue=Object(i.b)((function(e){return{shoppingCart:e.shoppingCart}}),{})((function(){return Object(u.jsx)("div",{className:"rootPage",children:Object(u.jsx)("div",{className:"app",children:Object(u.jsx)(x.a,{basename:"/fast-food",children:Object(u.jsxs)(ae.c,{children:[Object(u.jsx)(ae.a,{path:"/",exact:!0,component:te}),Object(u.jsx)(ae.a,{path:"/tablets",component:se}),Object(u.jsx)(ae.a,{path:"/contact",component:le}),Object(u.jsx)(ae.a,{path:"/cart",component:K}),Object(u.jsx)(ae.a,{path:"/pagar",component:be}),Object(u.jsx)(ae.a,{path:"/search",component:he}),Object(u.jsx)(ae.a,{children:"404 Not Found"})]})})})})})),Oe=a(29),me={list:[],loading:!1,error:"",tabletSearch:"",characterResults:[]},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0,a=t.type,c=t.payload;switch(a){case T:return Object(y.a)(Object(y.a)({},e),{},{list:c.list,loading:c.loading});case w:return Object(y.a)(Object(y.a)({},e),{},{loading:c.loading});case q:return Object(y.a)(Object(y.a)({},e),{},{list:c.list,loading:c.loading});case A:return Object(y.a)(Object(y.a)({},e),{},{error:c.error,loading:c.loading});case F:return Object(y.a)(Object(y.a)({},e),{},{tabletSearch:c});case D:return console.log("character"+c),Object(y.a)(Object(y.a)({},e),{},{characterResults:c});default:return e}},pe=a(20),fe={shoppingCart:[],total:0,open:!1},ge=Object(Oe.b)({tabletReducer:xe,cartReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0,a=t.type,c=t.payload;switch(a){case E:var s=Object(pe.a)(e.shoppingCart),n=!0;return s.forEach((function(e){e.id===c.id&&(e.qty+=c.qty,n=!1)})),!0===n&&s.push(c),Object(y.a)(Object(y.a)({},e),{},{shoppingCart:s});case S:return Object(y.a)(Object(y.a)({},e),{},{shoppingCart:e.shoppingCart.filter((function(e){return e.id!==c}))});case R:var r=Object(pe.a)(e.shoppingCart),i=0;return r.forEach((function(e){i+=e.qty*e.precio})),Object(y.a)(Object(y.a)({},e),{},{total:i});case k:var l=e.open;return Object(y.a)(Object(y.a)({},e),{},{open:!l});case L:return Object(y.a)(Object(y.a)({},e),{},{shoppingCart:[]});default:return e}}}),Ne=a(65),ve=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Oe.c,Ce=Object(Oe.d)(ge,ve(Object(Oe.a)(Ne.a)));a(104);r.a.render(Object(u.jsx)(i.a,{store:Ce,children:Object(u.jsx)(ue,{})}),document.getElementById("root"))},33:function(e,t,a){},75:function(e,t,a){},77:function(e,t,a){},80:function(e,t,a){},99:function(e,t,a){}},[[105,1,2]]]);
//# sourceMappingURL=main.b7ec933a.chunk.js.map