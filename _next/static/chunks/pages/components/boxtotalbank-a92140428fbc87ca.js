(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[519],{9648:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/boxtotalbank",function(){return n(7677)}])},7677:function(e,t,n){"use strict";n.r(t);var r=n(5893),a=n(7294),l=n(1457),s=n.n(l);t.default=()=>{let[e,t]=(0,a.useState)(!1),[n,l]=(0,a.useState)(5),[o,i]=(0,a.useState)([]);(0,a.useEffect)(()=>{let e=localStorage.getItem("DataFaktur");e?i(JSON.parse(e)):console.error("No data found in localStorage")},[]);let c=Object.entries((e=>{let t={};return e.forEach(e=>{let{kartu_kredit:n,harga_nett:r}=e;t[n]||(t[n]=0),t[n]+=r}),t})(o)).map(e=>{let[t,n]=e;return{kartu_kredit:t,total:n}});return c.sort((e,t)=>t.total-e.total),(0,r.jsxs)("div",{className:"card mb-3 ".concat(s().card),children:[(0,r.jsx)("div",{className:"card-header ".concat(s().heder),children:(0,r.jsx)("h3",{children:"Bank Total"})}),(0,r.jsx)("div",{className:"card-body",children:(0,r.jsxs)("ul",{style:{listStyleType:"disc",paddingLeft:"20px"},children:[c.slice(0,e?c.length:n).map((e,t)=>(0,r.jsxs)(a.Fragment,{children:[(0,r.jsxs)("li",{style:{marginBottom:"5px",marginRight:"30px",display:"flex",justifyContent:"space-between"},children:[(0,r.jsx)("span",{children:e.kartu_kredit}),(0,r.jsx)("strong",{style:{color:e.total>3e7?"red":"inherit",textAlign:"left"},children:new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(e.total)})]}),(0,r.jsx)("hr",{})]},t)),!e&&(0,r.jsx)("button",{onClick:()=>{t(!0)},className:s().pilih,children:"Show More"}),e&&(0,r.jsx)("button",{onClick:()=>{t(!1)},className:s().pilih,children:"Show Less"})]})})]})}},1457:function(e){e.exports={heder:"boxoderan_heder__sax4D",pilih:"boxoderan_pilih__W5UAL"}}},function(e){e.O(0,[888,774,179],function(){return e(e.s=9648)}),_N_E=e.O()}]);