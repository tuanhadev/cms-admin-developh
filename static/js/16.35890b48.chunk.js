(this["webpackJsonpcms-admin-developh"]=this["webpackJsonpcms-admin-developh"]||[]).push([[16],{691:function(e,a,n){"use strict";n.r(a);var t=n(1),l=n.n(t),r=n(19),c=n(618),m=[{path:"/",exact:!0,name:"Trang ch\u1ee7"},{path:"/dashboard",exact:!0,name:"Th\u1ed1ng k\xea",component:l.a.lazy((function(){return n.e(18).then(n.bind(null,682))}))},{path:"/managers",exact:!0,name:"Danh s\xe1ch qu\u1ea3n l\xfd",component:l.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(9)]).then(n.bind(null,683))}))},{path:"/managers/add",exact:!0,name:"Th\xeam qu\u1ea3n l\xfd",component:l.a.lazy((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,684))}))},{path:"/teachers",exact:!0,name:"Qu\u1ea3n l\xfd gi\xe1o vi\xean",component:l.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(14)]).then(n.bind(null,685))}))},{path:"/teachers/add",exact:!0,name:"Th\xeam gi\xe1o vi\xean",component:l.a.lazy((function(){return Promise.all([n.e(0),n.e(13)]).then(n.bind(null,686))}))},{path:"/teachers/update/:username",exact:!0,name:"C\u1eadp nh\u1eadt th\xf4ng tin",component:l.a.lazy((function(){return Promise.all([n.e(0),n.e(15)]).then(n.bind(null,687))}))},{path:"/students",exact:!0,name:"Qu\u1ea3n l\xfd h\u1ecdc sinh",component:l.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(11)]).then(n.bind(null,688))}))},{path:"/students/add",exact:!0,name:"Th\xeam h\u1ecdc sinh",component:l.a.lazy((function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,689))}))},{path:"/students/update/:username",exact:!1,name:"C\u1eadp nh\u1eadt th\xf4ng tin",component:l.a.lazy((function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,690))}))}],o=l.a.createElement("div",{className:"pt-3 text-center"},l.a.createElement("div",{className:"sk-spinner sk-spinner-pulse"})),s=l.a.memo((function(){return l.a.createElement("main",{className:"c-main"},l.a.createElement(c.m,{fluid:!0},l.a.createElement(t.Suspense,{fallback:o},l.a.createElement(r.d,null,m.map((function(e,a){return e.component&&l.a.createElement(r.b,{key:a,path:e.path,exact:e.exact,name:e.name,render:function(a){return l.a.createElement(c.t,null,l.a.createElement(e.component,a))}})})),l.a.createElement(r.a,{from:"/",to:"/dashboard"})))))})),i=l.a.memo((function(){return l.a.createElement(c.u,{fixed:!1},l.a.createElement("div",null,l.a.createElement("a",{href:"https://develophvietnam.com/",target:"_blank",rel:"noopener noreferrer"},"Developh"),l.a.createElement("span",{className:"ml-1"},"\xa9 2020 creativeLabs.")),l.a.createElement("div",{className:"mfs-auto"},l.a.createElement("span",{className:"mr-1"},"Powered by"),l.a.createElement("a",{href:"https://develophvietnam.com/",target:"_blank",rel:"noopener noreferrer"},"Developh")))})),u=n(160),d=function(){var e=Object(u.b)(),a=Object(u.c)((function(e){return e.sidebarShow}));return l.a.createElement(c.x,{withSubheader:!0},l.a.createElement(c.Z,{inHeader:!0,className:"ml-md-3 d-lg-none",onClick:function(){var n=!![!1,"responsive"].includes(a)||"responsive";e({type:"set",sidebarShow:n})}}),l.a.createElement(c.Z,{inHeader:!0,className:"ml-3 d-md-down-none",onClick:function(){var n=![!0,"responsive"].includes(a)&&"responsive";e({type:"set",sidebarShow:n})}}),l.a.createElement(c.y,{className:"mx-auto d-lg-none",to:"/"},l.a.createElement(c.A,{src:"images/developh_logo_blue.png",alt:"develophvietnam@gmail.com",className:"c-sidebar-brand-full",height:30})),l.a.createElement(c.z,{className:"px-3 ml-lg-auto"},l.a.createElement(E,null)),l.a.createElement(c.Y,{className:"px-3 justify-content-between"},l.a.createElement(c.d,{className:"border-0 c-subheader-nav m-0 px-0 px-md-3",routes:m})))},h=n(622),p=n(620),E=function(){var e=Object(t.useState)(!1),a=Object(h.a)(e,2),n=a[0],r=a[1];return l.a.createElement(c.p,{inNav:!0,className:"c-header-nav-items mx-2",direction:"down"},l.a.createElement(c.s,{className:"c-header-nav-link",caret:!1},l.a.createElement("div",{className:"c-avatar"},l.a.createElement(c.A,{src:"avatars/6.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}))),l.a.createElement(c.r,{className:"pt-0",placement:"bottom-end"},l.a.createElement(c.q,{header:!0,tag:"div",color:"light",className:"text-center"},l.a.createElement("strong",null,"T\xe0i kho\u1ea3n")),l.a.createElement(c.q,null,l.a.createElement(p.a,{name:"cil-user",className:"mfe-2"}),"Setting"),l.a.createElement(c.q,{onClick:function(){return r(!0)}},l.a.createElement(p.a,{name:"cil-lock-locked",className:"mfe-2"}),"\u0110\u0103ng xu\u1ea5t")),l.a.createElement(c.I,{show:n,onClose:r},l.a.createElement(c.L,{closeButton:!0},l.a.createElement(c.M,null,"\u0110\u0103ng xu\u1ea5t")),l.a.createElement(c.J,null,"B\u1ea1n ch\u1eafc ch\u1eafn mu\u1ed1n \u0111\u0103ng xu\u1ea5t ?"),l.a.createElement(c.K,null,l.a.createElement(c.e,{color:"primary",onClick:function(){return localStorage.clear(),r(!1),void window.location.reload()}},"\u0110\u1ed3ng \xfd")," ",l.a.createElement(c.e,{color:"secondary",onClick:function(){return r(!1)}},"Hu\u1ef7"))))},v=[{_tag:"CSidebarNavItem",name:"Th\u1ed1ng k\xea",to:"/dashboard",icon:"cil-speedometer"},{_tag:"CSidebarNavTitle",_children:["Qu\u1ea3n l\xfd nh\xe2n s\u1ef1"]},{_tag:"CSidebarNavItem",name:"Qu\u1ea3n l\xfd gi\xe1o vi\xean",to:"/teachers",icon:"cil-drop"},{_tag:"CSidebarNavItem",name:"Qu\u1ea3n l\xfd h\u1ecdc sinh",to:"/students",icon:"cil-pencil"},{_tag:"CSidebarNavItem",name:"Qu\u1ea3n l\xfd manager",to:"/managers",icon:"cil-puzzle"},{_tag:"CSidebarNavTitle",_children:["Qu\u1ea3n l\xfd l\u1edbp h\u1ecdc"]}],b=l.a.memo((function(){var e=Object(u.b)(),a=Object(u.c)((function(e){return e.sidebarShow}));return l.a.createElement(c.P,{show:a,onShowChange:function(a){return e({type:"set",sidebarShow:a})}},l.a.createElement(c.Q,{className:"d-md-down-none",to:"/"},l.a.createElement(c.A,{src:"images/developh_logo_white.png",alt:"develophvietnam@gmail.com",className:"c-sidebar-brand-full",height:30})),l.a.createElement(c.S,null,l.a.createElement(c.n,{items:v,components:{CSidebarNavDivider:c.T,CSidebarNavDropdown:c.U,CSidebarNavItem:c.V,CSidebarNavTitle:c.W}})),l.a.createElement(c.R,{className:"c-d-md-down-none"}))})),g=n(624);n(623),a.default=function(){return l.a.createElement("div",{className:"c-app c-default-layout"},l.a.createElement(b,null),l.a.createElement("div",{className:"c-wrapper"},l.a.createElement(d,null),l.a.createElement("div",{className:"c-body"},l.a.createElement(s,null)),l.a.createElement(i,null)),l.a.createElement(g.a,null))}}}]);
//# sourceMappingURL=16.35890b48.chunk.js.map