(this["webpackJsonpcms-admin-developh"]=this["webpackJsonpcms-admin-developh"]||[]).push([[5],{622:function(e,a,t){"use strict";function n(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}function r(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,r=!1,l=void 0;try{for(var c,o=e[Symbol.iterator]();!(n=(c=o.next()).done)&&(t.push(c.value),!a||t.length!==a);n=!0);}catch(m){r=!0,l=m}finally{try{n||null==o.return||o.return()}finally{if(r)throw l}}return t}}(e,a)||function(e,a){if(e){if("string"===typeof e)return n(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,a):void 0}}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(a,"a",(function(){return r}))},665:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(19),c=t(615),o=[{path:"/",exact:!0,name:"Home"},{path:"/dashboard",name:"Dashboard",component:r.a.lazy((function(){return t.e(7).then(t.bind(null,664))}))}],m=r.a.createElement("div",{className:"pt-3 text-center"},r.a.createElement("div",{className:"sk-spinner sk-spinner-pulse"})),s=r.a.memo((function(){return r.a.createElement("main",{className:"c-main"},r.a.createElement(c.j,{fluid:!0},r.a.createElement(n.Suspense,{fallback:m},r.a.createElement(l.d,null,o.map((function(e,a){return e.component&&r.a.createElement(l.b,{key:a,path:e.path,exact:e.exact,name:e.name,render:function(a){return r.a.createElement(c.p,null,r.a.createElement(e.component,a))}})})),r.a.createElement(l.a,{from:"/",to:"/dashboard"})))))})),i=r.a.memo((function(){return r.a.createElement(c.q,{fixed:!1},r.a.createElement("div",null,r.a.createElement("a",{href:"https://develophvietnam.com/",target:"_blank",rel:"noopener noreferrer"},"Developh"),r.a.createElement("span",{className:"ml-1"},"\xa9 2020 creativeLabs.")),r.a.createElement("div",{className:"mfs-auto"},r.a.createElement("span",{className:"mr-1"},"Powered by"),r.a.createElement("a",{href:"https://develophvietnam.com/",target:"_blank",rel:"noopener noreferrer"},"Developh")))})),u=t(160),d=function(){var e=Object(u.b)(),a=Object(u.c)((function(e){return e.sidebarShow}));return r.a.createElement(c.s,{withSubheader:!0},r.a.createElement(c.S,{inHeader:!0,className:"ml-md-3 d-lg-none",onClick:function(){var t=!![!1,"responsive"].includes(a)||"responsive";e({type:"set",sidebarShow:t})}}),r.a.createElement(c.S,{inHeader:!0,className:"ml-3 d-md-down-none",onClick:function(){var t=![!0,"responsive"].includes(a)&&"responsive";e({type:"set",sidebarShow:t})}}),r.a.createElement(c.t,{className:"mx-auto d-lg-none",to:"/"},r.a.createElement(c.v,{src:"images/developh_logo_blue.png",alt:"develophvietnam@gmail.com",className:"c-sidebar-brand-full",height:30})),r.a.createElement(c.u,{className:"px-3 ml-lg-auto"},r.a.createElement(E,null)),r.a.createElement(c.R,{className:"px-3 justify-content-between"},r.a.createElement(c.d,{className:"border-0 c-subheader-nav m-0 px-0 px-md-3",routes:o})))},p=t(622),v=t(616),E=function(){var e=Object(n.useState)(!1),a=Object(p.a)(e,2),t=a[0],l=a[1];return r.a.createElement(c.l,{inNav:!0,className:"c-header-nav-items mx-2",direction:"down"},r.a.createElement(c.o,{className:"c-header-nav-link",caret:!1},r.a.createElement("div",{className:"c-avatar"},r.a.createElement(c.v,{src:"avatars/6.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}))),r.a.createElement(c.n,{className:"pt-0",placement:"bottom-end"},r.a.createElement(c.m,{header:!0,tag:"div",color:"light",className:"text-center"},r.a.createElement("strong",null,"Account")),r.a.createElement(c.m,null,r.a.createElement(v.a,{name:"cil-user",className:"mfe-2"}),"Profile"),r.a.createElement(c.m,{onClick:function(){return l(!0)}},r.a.createElement(v.a,{name:"cil-lock-locked",className:"mfe-2"}),"Logout")),r.a.createElement(c.C,{show:t,onClose:l},r.a.createElement(c.F,{closeButton:!0},r.a.createElement(c.G,null,"Logout")),r.a.createElement(c.D,null,"Do you want to log out."),r.a.createElement(c.E,null,r.a.createElement(c.e,{color:"primary",onClick:function(){return localStorage.clear(),l(!1),void window.location.reload()}},"Log out")," ",r.a.createElement(c.e,{color:"secondary",onClick:function(){return l(!1)}},"Cancel"))))},h=[{_tag:"CSidebarNavItem",name:"Dashboard",to:"/dashboard",icon:"cil-speedometer"}],b=r.a.memo((function(){var e=Object(u.b)(),a=Object(u.c)((function(e){return e.sidebarShow}));return r.a.createElement(c.J,{show:a,onShowChange:function(a){return e({type:"set",sidebarShow:a})},style:{background:"#08085a"}},r.a.createElement(c.K,{className:"d-md-down-none",to:"/"},r.a.createElement(c.v,{src:"images/developh_logo_white.png",alt:"develophvietnam@gmail.com",className:"c-sidebar-brand-full",height:30})),r.a.createElement(c.M,null,r.a.createElement(c.k,{items:h,components:{CSidebarNavDivider:c.N,CSidebarNavDropdown:c.O,CSidebarNavItem:c.P,CSidebarNavTitle:c.Q}})),r.a.createElement(c.L,{className:"c-d-md-down-none"}))}));a.default=function(){return r.a.createElement("div",{className:"c-app c-default-layout"},r.a.createElement(b,null),r.a.createElement("div",{className:"c-wrapper"},r.a.createElement(d,null),r.a.createElement("div",{className:"c-body"},r.a.createElement(s,null)),r.a.createElement(i,null)))}}}]);
//# sourceMappingURL=5.b427b8b5.chunk.js.map