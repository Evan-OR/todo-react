(this["webpackJsonptodo-react"]=this["webpackJsonptodo-react"]||[]).push([[0],{14:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),i=c(8),n=c.n(i),o=(c(7),c(2)),r=c(5),d=c(0);var l=function(e){var t=e.todo,c=e.remove,a=e.addToCompleted;return Object(d.jsxs)("div",{className:"todo-display",children:[Object(d.jsx)("div",{className:"todo-text",children:t.text}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"btn-green",onClick:function(){return a(t)},children:Object(d.jsx)("i",{className:"fas fa-check-circle"})}),Object(d.jsx)("div",{className:"btn-red",onClick:function(){return c(t.id)},children:Object(d.jsx)("i",{className:"fas fa-times-circle"})})]})]})};var j=function(e){var t=e.todo,c=e.returnToActive,a=e.removeCompleted;return Object(d.jsxs)("div",{className:"todo-display",children:[Object(d.jsx)("div",{children:t.text}),Object(d.jsxs)("div",{className:"comp-display-end",children:[Object(d.jsx)("div",{className:"comp-date",children:t.compTime}),Object(d.jsx)("div",{onClick:function(){return c(t)},className:"btn-blue",children:Object(d.jsx)("i",{className:"fas fa-undo-alt"})}),Object(d.jsx)("div",{className:"btn-red",onClick:function(){return a(t.id)},children:Object(d.jsx)("i",{className:"fas fa-times-circle"})})]})]})};var u=function(e){var t=e.displayActive,c=JSON.parse(localStorage.getItem("active-todos"))||[],s=JSON.parse(localStorage.getItem("completed-todos"))||[],i=Object(a.useState)(""),n=Object(o.a)(i,2),u=n[0],m=n[1],b=Object(a.useState)(c),v=Object(o.a)(b,2),O=v[0],p=v[1],x=Object(a.useState)(s),h=Object(o.a)(x,2),f=h[0],N=h[1],g=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];Object(a.useEffect)((function(){localStorage.setItem("active-todos",JSON.stringify(O)),localStorage.setItem("completed-todos",JSON.stringify(f))}),[O,f]);var S=function(e){if(u){var t={text:u,id:O.length+""+u};p([t].concat(Object(r.a)(O))),m("")}e.preventDefault()},y=function(e){for(var t=[],c=0;c<O.length;c++)O[c].id!==e&&t.push(O[c]);p(t)},C=function(e){for(var t=[],c=0;c<f.length;c++)f[c].id!==e&&t.push(f[c]);N(t)},k=function(e){var t,c,a=new Date,s=[{id:e.id,text:e.text,compTime:"".concat((c=a.getMonth(),g[c])," ").concat(a.getDate(),"  ").concat((t=a.toLocaleTimeString(),t.substring(0,t.length-3)))}].concat(Object(r.a)(f));N(s),y(e.id)},T=function(e){for(var t=[],c=0;c<f.length;c++)f[c].id!==e.id&&t.push(f[c]);N(t);var a={id:e.id,text:e.text};p([a].concat(Object(r.a)(O)))};return t?Object(d.jsxs)("div",{className:"todo-creator",children:[Object(d.jsxs)("form",{onSubmit:S,children:[Object(d.jsx)("input",{type:"text",value:u,onChange:function(e){m(e.target.value)}}),Object(d.jsx)("input",{type:"submit",value:"Add Todo"})]}),Object(d.jsx)("div",{className:"todo-display-wrapper",children:O.length>0?O.map((function(e){return Object(d.jsx)(l,{todo:e,remove:y,addToCompleted:k},e.id)})):Object(d.jsx)("h3",{children:"You Have No Active Tasks"})})]}):Object(d.jsx)("div",{className:"completed-display-wrapper",children:f.length>0?f.map((function(e){return Object(d.jsx)(j,{todo:e,returnToActive:T,removeCompleted:C},e.id)})):Object(d.jsx)("h3",{children:"You Have No Completed Tasks"})})};var m=function(){var e=Object(a.useState)(!0),t=Object(o.a)(e,2),c=t[0],s=t[1];return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("div",{className:"todo",children:[Object(d.jsx)("div",{className:"page-title",children:"TODO LIST"}),Object(d.jsxs)("div",{className:"menus",children:[Object(d.jsx)("div",{onClick:function(){return s(!0)},className:c?"menu-element active":"menu-element",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("i",{className:"fas fa-clipboard-list icon"}),"Active"]})}),Object(d.jsxs)("div",{onClick:function(){return s(!1)},className:c?"menu-element":"menu-element active",children:[Object(d.jsx)("i",{className:"fas fa-clipboard-check icon"}),"Completed"]})]}),Object(d.jsx)(u,{displayActive:c})]})})};n.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root"))},7:function(e,t,c){}},[[14,1,2]]]);
//# sourceMappingURL=main.96bc9dcb.chunk.js.map