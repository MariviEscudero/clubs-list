(this["webpackJsonpreact-starter-kit"]=this["webpackJsonpreact-starter-kit"]||[]).push([[0],{13:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var c=t(1),a=t(6),s=t.n(a),r=t(8),l=t(3),o=(t(13),t(7)),i=t(0),b=function(){var e=Object(c.useState)(o),n=Object(l.a)(e,2),t=n[0],a=n[1],s=Object(c.useState)(""),b=Object(l.a)(s,2),d=b[0],j=b[1],u=Object(c.useState)(!1),O=Object(l.a)(u,2),h=O[0],m=O[1],p=Object(c.useState)(!1),k=Object(l.a)(p,2),x=k[0],f=k[1];return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("header",{className:"header",children:Object(i.jsx)("h1",{children:"Mis clubs"})}),Object(i.jsxs)("main",{children:[Object(i.jsx)("ul",{className:"main__list",children:t.map((function(e,n){return Object(i.jsxs)("li",{className:"main__list--item",children:[Object(i.jsx)("h2",{children:"#".concat(n,": ").concat(e.name)}),Object(i.jsx)("p",{children:"Abierto entre semana: ".concat(!0===e.openOnWeekdays?"S\xed":"No")}),Object(i.jsx)("p",{children:"Abierto el fin de semana: ".concat(!0===e.openOnWeekend?"S\xed":"No")})]},n)}))}),Object(i.jsx)("h3",{children:"A\xf1adir un nuevo club"}),Object(i.jsxs)("form",{action:"",className:"form",children:[Object(i.jsx)("label",{htmlFor:"add-club",children:"Nombre del club"}),Object(i.jsx)("input",{name:"add-club",type:"text",value:d,onChange:function(e){j(e.target.value)}}),Object(i.jsxs)("label",{htmlFor:"daily",children:[Object(i.jsx)("input",{id:"",type:"checkbox",name:"daily",onChange:function(e){m(e.target.checked)}}),"\xbfAbre entre semana?"]}),Object(i.jsxs)("label",{htmlFor:"weekend",children:[Object(i.jsx)("input",{id:"",type:"checkbox",name:"weekend",onChange:function(e){f(e.target.checked)}}),"\xbfAbre los fines de semana?"]}),Object(i.jsx)("button",{onClick:function(e){e.preventDefault();var n={name:d,openOnWeekdays:h,openOnWeekend:x};a([].concat(Object(r.a)(t),[n]))},children:"A\xf1adir un nuevo club"})]})]})]})};s.a.render(Object(i.jsx)(b,{}),document.getElementById("root"))},7:function(e){e.exports=JSON.parse('[{"name":"Book club","openOnWeekdays":true,"openOnWeekend":true},{"name":"Chess club","openOnWeekdays":false,"openOnWeekend":true},{"name":"Escape room club","openOnWeekdays":false,"openOnWeekend":false},{"name":"Debate club","openOnWeekdays":true,"openOnWeekend":false}]')}},[[15,1,2]]]);
//# sourceMappingURL=main.e085646a.chunk.js.map