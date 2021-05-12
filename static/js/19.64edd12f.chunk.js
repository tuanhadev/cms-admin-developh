(this["webpackJsonpcms-admin-developh"]=this["webpackJsonpcms-admin-developh"]||[]).push([[19],{617:function(e,t,a){"use strict";t.a={domain:"https://damp-river-04072.herokuapp.com",METHOD:{GET:"get",POST:"post",PUT:"put",DELETE:"delete"},limit:10}},618:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(615),r=a.n(n),c=a(616),s=a(156),u=a(157),o=a(624),i=a.n(o),l=null,m=function(){function e(){Object(s.a)(this,e)}return Object(u.a)(e,[{key:"startRequest",value:function(){var e=Object(c.a)(r.a.mark((function e(t,a,n){var c,s,u,o=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=o.length>3&&void 0!==o[3]?o[3]:"",e.prev=1,s=localStorage.getItem("access_token")||"",i.a.defaults.headers.common["Content-Type"]="application/json",e.next=6,i()({method:t,url:a,data:n,params:c,headers:{authorization:"Bearer ".concat(s)}});case 6:return u=e.sent,e.abrupt("return",u.data);case 10:throw e.prev=10,e.t0=e.catch(1),e.t0;case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,a,n){return e.apply(this,arguments)}}()}],[{key:"getInstance",value:function(){return null==l&&(l=new e),l}}]),e}()},628:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(615),r=a.n(n),c=a(616),s=a(156),u=a(157),o=a(617),i=a(618),l=function(){function e(){Object(s.a)(this,e)}return Object(u.a)(e,null,[{key:"getListTeacher",value:function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.getInstance().startRequest(o.a.METHOD.GET,"".concat(o.a.domain,"/api/teachers/all"),{},t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getTeacherByUsername",value:function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.getInstance().startRequest(o.a.METHOD.GET,"".concat(o.a.domain,"/api/teachers/get/").concat(t),{});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"createTeacher",value:function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.getInstance().startRequest(o.a.METHOD.POST,"".concat(o.a.domain,"/api/teachers/create"),t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateTeacher",value:function(){var e=Object(c.a)(r.a.mark((function e(t,a){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.getInstance().startRequest(o.a.METHOD.PUT,"".concat(o.a.domain,"/api/teachers/update/").concat(t),a);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"banTeacher",value:function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.getInstance().startRequest(o.a.METHOD.DELETE,"".concat(o.a.domain,"/api/teachers/").concat(t),{});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}()},687:function(e,t,a){"use strict";a.r(t);var n=a(631),r=a(615),c=a.n(r),s=a(616),u=a(621),o=a(1),i=a.n(o),l=a(627),m=a.n(l),p=a(158),d=a(619),h=a(623),f=(a(622),a(628)),g=a(617),b=function(e){switch(e){case"Active":return"success";case"Banned":return"danger";default:return"primary"}},v=[{key:"stt",label:"STT",_style:{width:"1%"}},{key:"name",label:"H\u1ecd v\xe0 t\xean"},{key:"username",label:"T\xean \u0111\u0103ng nh\u1eadp"},{key:"email",label:"Email"},{key:"phone_number",label:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"},{key:"address",label:"\u0110\u1ecba ch\u1ec9"},{key:"status",label:"Tr\u1ea1ng th\xe1i"},{key:"show_details",label:"",_style:{width:"1%"},sorter:!1,filter:!1}];t.default=function(){var e=Object(o.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],l=Object(o.useState)({loadingGet:!1,loadingBan:!1}),E=Object(u.a)(l,2),O=E[0],k=E[1],T=Object(o.useState)([]),y=Object(u.a)(T,2),w=y[0],j=y[1],x=Object(o.useState)(!1),B=Object(u.a)(x,2),C=B[0],S=B[1],I=Object(o.useState)(""),H=Object(u.a)(I,2),_=H[0],D=H[1],G=Object(o.useState)(!1),M=Object(u.a)(G,2),L=M[0],N=M[1],P=Object(o.useCallback)(Object(s.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k({loadingBan:!1,loadingGet:!0}),e.prev=1,e.next=4,f.a.getListTeacher();case 4:(t=e.sent)&&t.data&&(a=t.data.teachers.map((function(e,t){return{stt:t+1,name:e.info.name,username:e.username,email:e.email,phone_number:e.info.phone_number,address:e.info.address,status:e.active?"Active":"Banned",register_at:m()(e.register_at).local().format("DD/MM/YYYY HH:mm")}})),r(a)),k({loadingBan:!1,loadingGet:!1}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),z(e.t0.response.data.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])}))),[]);Object(o.useEffect)((function(){P()}),[P]);var R=function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k({loadingBan:!0,loadingGet:!1}),e.prev=1,e.next=4,f.a.banTeacher(_);case 4:z("Th\xe0nh c\xf4ng",!0),k({loadingBan:!1,loadingGet:!1}),S(!1),P(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),z(e.t0.response.data.message,!1);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(s.a)(c.a.mark((function e(t,a,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S(t),D(a),N(n);case 3:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),z=function(e,t){t?h.b.success(e,{position:h.b.POSITION.BOTTOM_RIGHT,autoClose:2e3}):h.b.error(e,{position:h.b.POSITION.BOTTOM_RIGHT,autoClose:2e3})};return i.a.createElement(d.O,null,i.a.createElement(d.k,{xs:"12",lg:"12"},i.a.createElement(d.f,null,i.a.createElement(d.j,null,i.a.createElement("strong",null,"Danh s\xe1ch gi\xe1o vi\xean")),i.a.createElement(d.g,{className:"text-center"},O.loadingGet?i.a.createElement(d.X,{style:{width:"4rem",height:"4rem"},color:"info"}):i.a.createElement(d.o,{items:a,fields:v,itemsPerPage:g.a.limit,tableFilter:!0,columnFilter:!0,hover:!0,pagination:!0,scopedSlots:{status:function(e){return i.a.createElement("td",null,i.a.createElement(d.a,{color:b(e.status)},e.status))},show_details:function(e,t){return i.a.createElement("td",{className:"py-2"},i.a.createElement(d.e,{color:"primary",variant:"outline",shape:"square",size:"sm",onClick:function(){!function(e){var t=w.indexOf(e),a=w.slice();-1!==t?a.splice(t,1):a=[].concat(Object(n.a)(w),[e]),j(a)}(t)}},w.includes(t)?"Hide":"Show"))},details:function(e,t){return i.a.createElement(d.l,{show:w.includes(t)},i.a.createElement(d.g,null,i.a.createElement("h4",null,e.name),i.a.createElement("p",{className:"text-muted"},"Updated at: ",e.register_at),i.a.createElement(p.b,{to:"/teachers/update/".concat(e.username)},i.a.createElement(d.e,{size:"sm",color:"info"},"C\u1eadp nh\u1eadt")),"Active"===e.status?i.a.createElement(d.e,{disabled:O.loadingBan,onClick:function(){return q(!0,e.username,!0)},size:"sm",color:"danger",className:"ml-1"},O.loadingBan?"...Loading":"C\u1ea5m ho\u1ea1t \u0111\u1ed9ng"):i.a.createElement(d.e,{disabled:O.loadingBan,onClick:function(){return q(!0,e.username,!1)},size:"sm",color:"success",className:"ml-1"},O.loadingBan?"...Loading":"Cho ph\xe9p ho\u1ea1t \u0111\u1ed9ng")))}}})),i.a.createElement(d.h,null,i.a.createElement(p.b,{to:"/teachers/add"},i.a.createElement(d.e,{color:"primary",className:"float-right"},"Th\xeam gi\xe1o vi\xean"))))),i.a.createElement(d.I,{show:C,onClose:S},i.a.createElement(d.L,{closeButton:!0},i.a.createElement(d.M,null,L?"C\u1ea5m ho\u1ea1t \u0111\u1ed9ng":"Cho ph\xe9p ho\u1ea1t \u0111\u1ed9ng")),i.a.createElement(d.J,null,L?"B\u1ea1n ch\u1eafc ch\u1eafn mu\u1ed1n c\u1ea5m ho\u1ea1t \u0111\u1ed9ng v\u1edbi gi\xe1o vi\xean n\xe0y ?":"B\u1ea1n ch\u1eafc ch\u1eafn mu\u1ed1n cho ph\xe9p gi\xe1o vi\xean n\xe0y ho\u1ea1t \u0111\u1ed9ng ?"),i.a.createElement(d.K,null,i.a.createElement(d.e,{disabled:O.loadingBan,color:"primary",onClick:function(){return R()}},O.loadingBan?"...Loading":"\u0110\u1ed3ng \xfd")," ",i.a.createElement(d.e,{color:"secondary",onClick:function(){return S(!1)}},"Hu\u1ef7"))))}}}]);
//# sourceMappingURL=19.64edd12f.chunk.js.map