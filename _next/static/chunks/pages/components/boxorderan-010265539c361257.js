(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[851],{2253:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/boxorderan",function(){return a(895)}])},895:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return c}});var r=a(5893),n=a(7294);let s=async()=>{let e=sessionStorage.getItem("token");try{let t=await fetch("https://api.satria-wisata.com/api/faktur/getdatapembayaran",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}});if(!t.ok)throw Error("Failed to fetch user data");return await t.json()}catch(e){throw Error("Fetch Failed")}};var i=a(1457),o=a.n(i),c=()=>{let[e,t]=(0,n.useState)(!1),[a,i]=(0,n.useState)([]),[c,l]=(0,n.useState)(5);return(0,n.useEffect)(()=>{(async()=>{try{let e=await s();i(e.sort((e,t)=>t.total-e.total))}catch(e){console.error("Failed to fetch user data:",e)}})()},[]),(0,r.jsxs)("div",{className:"card mb-3 ".concat(o().card),children:[(0,r.jsx)("div",{className:"card-header ".concat(o().heder),children:(0,r.jsx)("h3",{children:"Belum Bayar"})}),(0,r.jsx)("div",{className:"card-body",children:(0,r.jsxs)("ul",{style:{listStyleType:"disc",paddingLeft:"20px"},children:[a.slice(0,e?a.length:c).map((e,t)=>(0,r.jsxs)(n.Fragment,{children:[(0,r.jsxs)("li",{style:{marginBottom:"5px",marginRight:"30px",display:"flex",justifyContent:"space-between"},children:[(0,r.jsx)("span",{children:e.nama_pemesan}),(0,r.jsx)("strong",{style:{color:e.total>3e7?"red":"inherit",textAlign:"left"},children:new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(e.total)})]}),(0,r.jsx)("hr",{})]},t)),!e&&(0,r.jsx)("button",{onClick:()=>{t(!0)},className:o().pilih,children:"Show More"}),e&&(0,r.jsx)("button",{onClick:()=>{t(!1)},className:o().pilih,children:"Show Less"})]})})]})}},1457:function(e){e.exports={heder:"boxoderan_heder__sax4D",pilih:"boxoderan_pilih__W5UAL"}}},function(e){e.O(0,[888,774,179],function(){return e(e.s=2253)}),_N_E=e.O()}]);