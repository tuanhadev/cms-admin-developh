(this["webpackJsonpcms-admin-developh"]=this["webpackJsonpcms-admin-developh"]||[]).push([[9],{620:function(e,t,a){"use strict";t.a={domain:"https://damp-river-04072.herokuapp.com",METHOD:{GET:"get",POST:"post",PUT:"put",DELETE:"delete"},limit:10}},621:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(617),r=a.n(n),c=a(618),s=a(156),l=a(157),u=a(625),i=a.n(u),o=null,m=function(){function e(){Object(s.a)(this,e)}return Object(l.a)(e,[{key:"startRequest",value:function(){var e=Object(c.a)(r.a.mark((function e(t,a,n){var c,s,l,u=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=u.length>3&&void 0!==u[3]?u[3]:"",e.prev=1,s=localStorage.getItem("access_token")||"",i.a.defaults.headers.common["Content-Type"]="application/json",e.next=6,i()({method:t,url:a,data:n,params:c,headers:{authorization:"Bearer ".concat(s)}});case 6:return l=e.sent,e.abrupt("return",l.data);case 10:throw e.prev=10,e.t0=e.catch(1),e.t0;case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,a,n){return e.apply(this,arguments)}}()}],[{key:"getInstance",value:function(){return null==o&&(o=new e),o}}]),e}()},681:function(e,t,a){"use strict";a.r(t);var n=a(617),r=a.n(n),c=a(618),s=a(631),l=a(622),u=a(1),i=a.n(u),o=a(630),m=a.n(o),d=a(615),p=a(156),h=a(157),f=a(620),b=a(621),E=function(){function e(){Object(p.a)(this,e)}return Object(h.a)(e,null,[{key:"getListStudent",value:function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.getInstance().startRequest(f.a.METHOD.GET,"".concat(f.a.domain,"/api/students/all"),{},t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),v=function(e){switch(e){case"Active":return"success";case"Banned":return"danger";default:return"primary"}},g=[{key:"stt",label:"STT",_style:{width:"1%"}},{key:"name",label:"H\u1ecd v\xe0 t\xean"},{key:"username",label:"T\xean \u0111\u0103ng nh\u1eadp"},{key:"email",label:"Email"},{key:"phone_number",label:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"},{key:"address",label:"\u0110\u1ecba ch\u1ec9"},{key:"status",label:"Tr\u1ea1ng th\xe1i"},{key:"show_details",label:"",_style:{width:"1%"},sorter:!1,filter:!1}];t.default=function(){var e=Object(u.useState)([]),t=Object(l.a)(e,2),a=t[0],n=t[1],o=Object(u.useState)(!1),p=Object(l.a)(o,2),h=p[0],b=p[1],k=Object(u.useState)(null),y=Object(l.a)(k,2),O=y[0],j=y[1],w=Object(u.useState)([]),T=Object(l.a)(w,2),S=T[0],x=T[1];return Object(u.useEffect)((function(){(function(){var e=Object(c.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.prev=1,e.next=4,E.getListStudent();case 4:(t=e.sent)&&t.data&&(a=t.data.students.map((function(e,t){return{stt:t+1,name:e.info.name,username:e.username,email:e.email,phone_number:e.info.phone_number,address:e.info.address,status:e.active?"Active":"Banned",register_at:m()(e.register_at).local().format("DD/MM/YYYY HH:mm")}})),n(a)),b(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),j(e.t0.response.data.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}})()()}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement(d.L,null,i.a.createElement(d.j,{xs:"12",lg:"12"},i.a.createElement(d.f,null,i.a.createElement(d.i,null,i.a.createElement("strong",null,"Danh s\xe1ch h\u1ecdc sinh")),i.a.createElement(d.g,{className:"text-center"},h?i.a.createElement(d.U,{style:{width:"4rem",height:"4rem"},color:"info"}):i.a.createElement(d.n,{items:a,fields:g,itemsPerPage:f.a.limit,tableFilter:!0,columnFilter:!0,hover:!0,pagination:!0,scopedSlots:{status:function(e){return i.a.createElement("td",null,i.a.createElement(d.a,{color:v(e.status)},e.status))},show_details:function(e,t){return i.a.createElement("td",{className:"py-2"},i.a.createElement(d.e,{color:"primary",variant:"outline",shape:"square",size:"sm",onClick:function(){!function(e){var t=S.indexOf(e),a=S.slice();-1!==t?a.splice(t,1):a=[].concat(Object(s.a)(S),[e]),x(a)}(t)}},S.includes(t)?"Hide":"Show"))},details:function(e,t){return i.a.createElement(d.k,{show:S.includes(t)},i.a.createElement(d.g,null,i.a.createElement("h4",null,e.name),i.a.createElement("p",{className:"text-muted"},"Updated at: ",e.register_at),i.a.createElement(d.e,{size:"sm",color:"info"},"Update"),i.a.createElement(d.e,{size:"sm",color:"danger",className:"ml-1"},"Ban")))}}}))))),i.a.createElement(d.Z,{position:"bottom-right"},i.a.createElement(d.W,{show:Boolean(O),autohide:3e3,fade:!0,style:{backgroundColor:"#e55353"}},i.a.createElement(d.Y,{closeButton:!0},"Th\xf4ng b\xe1o"),i.a.createElement(d.X,null,O))))}}}]);
//# sourceMappingURL=9.3a2c1053.chunk.js.map