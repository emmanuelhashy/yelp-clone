(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{215:function(t,e,n){var content=n(225);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(87).default)("226f75b4",content,!0,{sourceMap:!1})},220:function(t,e,n){"use strict";n.r(e);n(32);var o={data:function(){return{showNav:!1}},methods:{toggleNav:function(t){this.showNav=t,console.log("state",t);var e=document.querySelector(".bars"),nav=document.querySelector(".nav"),n=document.querySelector(".times"),o=document.querySelectorAll(".nav-links");e.addEventListener("click",(function(){nav.classList.toggle("nav-active"),o.forEach((function(link,t){link.style.animmation="navLinkFade 0.5s ease forwards ".concat(t/7+.3,"s")}))})),n.addEventListener("click",(function(){nav.classList.toggle("nav-active"),o.forEach((function(link,t){link.style.animmation="navLinkFade 0.5s ease forwards ".concat(t/7+.3,"s")}))}))}}},r=(n(224),n(35)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"nav"},[n("div",{staticClass:"nav__left"},[n("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("write a review")]),t._v(" "),n("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Events")]),t._v(" "),n("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Talk")]),t._v(" "),n("font-awesome-icon",{staticClass:" times",attrs:{icon:"times"},on:{click:function(e){return t.toggleNav(!1)}}})],1),t._v(" "),t._m(0)]),t._v(" "),n("font-awesome-icon",{staticClass:"icon bars",attrs:{icon:"bars"},on:{click:function(e){return t.toggleNav(!0)}}})],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav__right"},[n("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Log in")]),t._v(" "),n("button",{staticClass:"btn-signup"},[t._v("Sign up")])])}],!1,null,"06f768ea",null);e.default=component.exports},224:function(t,e,n){"use strict";n(215)},225:function(t,e,n){var o=n(86)(!1);o.push([t.i,"a[data-v-06f768ea]{text-decoration:none}.bars[data-v-06f768ea],.times[data-v-06f768ea]{display:none}.nav[data-v-06f768ea]{display:flex;height:5rem;background-color:transparent;justify-content:space-between;align-items:center}.nav-link[data-v-06f768ea]{color:#fff;padding:9px 12px 10px;font-size:14px;line-height:1.28571em;font-weight:700;background:none;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;text-transform:capitalize}.nav-link[data-v-06f768ea]:hover{border-bottom:1px solid #fff}.btn-signup[data-v-06f768ea]{color:#fff;padding:.5rem 1.5rem;font-size:14px;line-height:1.28571em;font-weight:700;background:none;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;text-transform:capitalize;border-radius:3px;border:2px solid #fff}.btn-signup[data-v-06f768ea]:hover{background-color:#fff;color:#555}@media screen and (max-width:620px){.bars[data-v-06f768ea]{display:block;font-size:2rem;float:right}.bars[data-v-06f768ea],.times[data-v-06f768ea]{color:#fff}.nav[data-v-06f768ea]{position:absolute;left:0;height:100vh;top:0;z-index:3000;background-color:#202020;align-items:center;justify-content:start;width:50%;transform:translate(-100%);transition:transform .5s ease-in;padding-top:3rem}.nav[data-v-06f768ea],.nav__left[data-v-06f768ea]{display:flex;flex-direction:column}.times[data-v-06f768ea]{position:absolute;right:1rem;top:1rem;font-size:1.5rem;display:block}.nav-link[data-v-06f768ea]{font-size:1rem;margin-bottom:1rem}.body[data-v-06f768ea]{overflow:hidden}.nav-active[data-v-06f768ea]{transform:translate(0)}@-webkit-keyframes navLinkFade-data-v-06f768ea{0%{opacity:0;transform:translateX(50px)}}@keyframes navLinkFade-data-v-06f768ea{0%{opacity:0;transform:translateX(50px)}}}",""]),t.exports=o}}]);