(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[865],{3526:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/layout/layout",function(){return a(4205)}])},7915:function(e,t,a){"use strict";a.d(t,{TX:function(){return r},lq:function(){return s},me:function(){return o},pH:function(){return n}});let n=async(e,t)=>{try{let a=await fetch("https://api.satria-wisata.com/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({RequestParameter:{email:e,password:t},SecretKey:"SAT123SU77",APPS:"satriaweb"})});if(!a.ok)throw Error("Login failed");let n=await a.json(),r=Date.now()+1e3*n.expires_in;return sessionStorage.setItem("token",n.token),sessionStorage.setItem("expires_at",r.toString()),n}catch(e){throw Error("Login failed")}},r=async()=>{try{sessionStorage.removeItem("token"),sessionStorage.removeItem("expires_at")}catch(e){throw Error("Logout failed")}},o=async()=>{let e=sessionStorage.getItem("token");try{let t=await fetch("https://api.satria-wisata.com/api/auth/me",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}});if(!t.ok)throw Error("Failed to fetch user data");return(await t.json()).name}catch(e){throw Error("Login failed")}},s=async()=>{let e=sessionStorage.getItem("token");try{let t=await fetch("https://api.satria-wisata.com/api/auth/me",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}});if(!t.ok)throw Error("Failed to fetch user data");let a=await t.json();return console.log(a),a}catch(e){throw Error("Login failed")}}},7961:function(e,t,a){"use strict";var n=a(5893),r=a(7294),o=a(1163);t.Z=e=>t=>{let a=(0,o.useRouter)();return(0,r.useEffect)(()=>{let e=sessionStorage.getItem("token"),t=sessionStorage.getItem("expires_at");(!e||!t||Date.now()>parseInt(t))&&a.push("/login")},[]),(0,n.jsx)(e,{...t})}},852:function(e,t,a){"use strict";a.r(t);var n=a(5893);a(7294),t.default=()=>(0,n.jsx)("div",{children:(0,n.jsx)("img",{src:"/assets/images/logosatria.png",alt:"logo",style:{height:"10vh"}})})},7666:function(e,t,a){"use strict";a.r(t);var n=a(5893),r=a(1664),o=a.n(r),s=a(7294),i=a(7697),c=a.n(i),l=a(852),d=a(7915),u=a(1163);t.default=()=>{let[e,t]=(0,s.useState)(!1),[a,r]=(0,s.useState)(!1),i=(0,u.useRouter)();(0,s.useEffect)(()=>{let e=()=>{r(window.innerWidth<=1e3)};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]);let h=()=>{t(!e)},f=async()=>{await (0,d.TX)(),i.push("/login")};return(0,n.jsxs)("div",{className:c().navbar,children:[(0,n.jsx)(o(),{href:"/",children:(0,n.jsx)(l.default,{})}),a?(0,n.jsxs)("div",{className:c().dropdown,children:[(0,n.jsx)("button",{onClick:h,className:c().dropbtn,children:"☰ "}),e&&(0,n.jsxs)("div",{className:c().dropdownContent,children:[(0,n.jsx)(o(),{href:"/",children:"Home"}),(0,n.jsx)(o(),{href:"/datafaktur",children:"Data Faktur"}),(0,n.jsx)(o(),{href:"/profile",children:"Profile"}),(0,n.jsx)(o(),{href:"/login",onClick:f,children:"Logout"})]})]}):(0,n.jsxs)("div",{className:c().dropdown,children:[(0,n.jsx)("button",{onClick:h,className:c().dropbtn,children:"Profile"}),e&&(0,n.jsxs)("div",{className:c().dropdownContent,children:[(0,n.jsx)(o(),{href:"#",children:"Profile"}),(0,n.jsx)(o(),{href:"/login",onClick:f,children:"Logout"})]})]})]})}},3261:function(e,t,a){"use strict";a.r(t);var n=a(5893),r=a(1664),o=a.n(r),s=a(1163),i=a(2554),c=a.n(i);a(852),t.default=()=>{let e=(0,s.useRouter)();return(0,n.jsx)("div",{className:c().sidebar,children:(0,n.jsxs)("ul",{className:c().navLinks,children:[(0,n.jsx)("li",{className:"/"===e.pathname?c().active:"",children:(0,n.jsx)(o(),{href:"/",children:"Home"})}),(0,n.jsx)("li",{className:"/datafaktur"===e.pathname?c().active:"",children:(0,n.jsx)(o(),{href:"/datafaktur",children:"Data Faktur"})}),(0,n.jsx)("li",{className:"/contact"===e.pathname?c().active:"",children:(0,n.jsx)(o(),{href:"/contact",children:"Contact"})})]})})}},4205:function(e,t,a){"use strict";a.r(t);var n=a(5893),r=a(3261),o=a(7666),s=a(2003),i=a.n(s),c=a(7961);t.default=(0,c.Z)(e=>{let{children:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.default,{}),(0,n.jsxs)("div",{className:i().container,children:[(0,n.jsx)("div",{className:i().sidebar,children:(0,n.jsx)(r.default,{})}),(0,n.jsx)("div",{className:i().content,children:t})]})]})})},7697:function(e){e.exports={navbar:"Navbar_navbar__FkDBW",dropdown:"Navbar_dropdown__l33L_",dropbtn:"Navbar_dropbtn__y_FtL",dropdownContent:"Navbar_dropdownContent__j3s04"}},2554:function(e){e.exports={sidebar:"Sidebar_sidebar__AuXS2",navLinks:"Sidebar_navLinks__G_sZa",active:"Sidebar_active__3o1Gj"}},2003:function(e){e.exports={content:"Home_content__Qnbja",contint:"Home_contint__pCTM0","box-container":"Home_box-container__9VIhg",fakturcoy:"Home_fakturcoy__GRj6O",box:"Home_box__9OzCW",box2:"Home_box2__YWsfu",sidebar:"Home_sidebar__7e4Eq"}}},function(e){e.O(0,[424,888,774,179],function(){return e(e.s=3526)}),_N_E=e.O()}]);