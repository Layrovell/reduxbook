(this.webpackJsonpreduxbook=this.webpackJsonpreduxbook||[]).push([[0],{42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(15),s=n.n(a),o=(n(42),n(43),n(44),n(17)),i=n(3),l=n(9),u=n(10),j=n.n(u),b=n(14),h=n(35),d=n.n(h),m=n(24),p="SET_USERS",O={items:[]};var f=function(e){return{type:p,payload:e}},x=n(1),v=function(e){var t=e.users,n=Object(l.b)();return Object(x.jsx)("section",{className:"section",children:Object(x.jsxs)("div",{className:"home",children:[Object(x.jsx)("h3",{className:"title",children:"The phonebook"}),Object(x.jsx)("ul",{className:"home__book book",children:t.map((function(e){return Object(x.jsxs)("li",{className:"book__item",children:[Object(x.jsx)("span",{className:"book__icon"}),e.name,Object(x.jsx)("button",{onClick:function(){var t;n((t=e._id,function(){var e=Object(b.a)(j.a.mark((function e(n){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c=fetch("http://localhost:8008/api/users/delete/".concat(t),{method:"GET"}),e.abrupt("return",c.json());case 5:e.prev=5,e.t0=e.catch(0),e.t0.message;case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()))},children:"delete"})]},e._id)}))})]})})},N=n(23),y=function(){var e=Object(c.useState)(""),t=Object(N.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(N.a)(a,2),o=s[0],i=s[1],u=Object(l.b)();return Object(x.jsxs)("form",{action:"",className:"form__add",onSubmit:function(e){e.preventDefault(),""!==n&&""!==o&&(u(function(e,t){return function(){var n=Object(b.a)(j.a.mark((function n(c){var r;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("http://localhost:8008/api/users/create",{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({name:e,number:t})});case 3:return r=n.sent,n.next=6,r.json();case 6:n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),n.t0.message;case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}(n,o)),r(""),i("")),console.warn("handleSubmit")},children:[Object(x.jsx)("h3",{className:"title",children:"Create"}),Object(x.jsx)("label",{htmlFor:"firstName",children:"Name:"}),Object(x.jsx)("input",{value:n,onChange:function(e){r(e.target.value)},type:"text",placeholder:"John",id:"firstName"}),Object(x.jsx)("label",{htmlFor:"phone",children:"Number:"}),Object(x.jsx)("input",{value:o,onChange:function(e){i(e.target.value)},type:"text",placeholder:"+3 733 333 77 77",id:"phone"}),Object(x.jsx)("button",{className:"btn",type:"submit",children:"Save"})]})},g=function(){return Object(x.jsxs)("form",{action:"",className:"form__edit",children:[Object(x.jsx)("h3",{className:"title",children:"Edit"}),Object(x.jsx)("label",{htmlFor:"firstName",children:"Name:"}),Object(x.jsx)("input",{type:"text",placeholder:"John",id:"firstName"}),Object(x.jsx)("label",{htmlFor:"phone",children:"Number:"}),Object(x.jsx)("input",{type:"text",placeholder:"+3 733 333 77 77",id:"phone"}),Object(x.jsx)("button",{className:"btn",type:"submit",children:"Save"})]})},k=function(){return Object(x.jsx)("section",{className:"section",children:Object(x.jsxs)("div",{className:"forms",children:[Object(x.jsx)(y,{}),Object(x.jsx)(g,{})]})})};var _=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.users.items}));return Object(c.useEffect)((function(){e(function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d.a.post("http://localhost:8008/api/users/get").then((function(e){var n=e.data;t(f(n))})).catch((function(e){e.message}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(x.jsx)(o.a,{children:Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)("nav",{className:"nav",children:Object(x.jsxs)("ul",{className:"nav_list",children:[Object(x.jsx)("li",{className:"nav_link",children:Object(x.jsx)(o.b,{to:"/home","data-item":"Home",children:"Home"})}),Object(x.jsx)("li",{className:"nav_link",children:Object(x.jsx)(o.b,{to:"/form","data-item":"Form",children:"Form"})})]})}),Object(x.jsxs)(i.d,{children:[Object(x.jsx)(i.b,{exact:!0,path:"/reduxbook",render:function(){return Object(x.jsx)(i.a,{to:"/home"})}}),Object(x.jsx)(i.b,{path:"/home",render:function(){return Object(x.jsx)(v,{users:t})}}),Object(x.jsx)(i.b,{path:"/form",render:function(){return Object(x.jsx)(k,{})}})]})]})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))},w=n(11),F=n(36),C=n(37),T=Object(w.combineReducers)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(m.a)(Object(m.a)({},e),{},{items:t.payload.items});default:return e}}}),E=Object(w.createStore)(T,Object(F.composeWithDevTools)(Object(w.applyMiddleware)(C.a)));s.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(l.a,{store:E,children:Object(x.jsx)(_,{})})}),document.getElementById("root")),S()}},[[70,1,2]]]);
//# sourceMappingURL=main.7aa92474.chunk.js.map