import{d as m,o as h,c as a,F as d,r as f,a as g,b as n,_ as u}from"./index-O2Ai3IRL.js";const y="/fashion/assets/center-QEO8-6CO.png",k="/fashion/assets/left-DwRbwq3Z.png",v="/fashion/assets/right-BgjV4HaJ.png",b={class:"home-page-style"},x=["src"],C=["src"],B=m({__name:"HomePage",setup(E){const i=[{key:1,name:"left"},{key:2,name:"center"},{key:3,name:"right"}];h(()=>{});const p=()=>{let s=.3,e=document.querySelector(".reveal"),t=e.textContent.split("");e.textContent="";let o=t.filter(r=>r!==" ").length/2;t.forEach((r,_)=>{let l=document.createElement("span");l.textContent=r,l.style.animationDelay="".concat(s+Math.abs(_-o)*.1,"s"),e.append(l)})},c=s=>new URL(Object.assign({"/src/assets/image/homepage/center.png":y,"/src/assets/image/homepage/left.png":k,"/src/assets/image/homepage/right.png":v})["/src/assets/image/homepage/".concat(s,".png")],import.meta.url).href;return(s,e)=>(n(),a("div",b,[(n(),a(d,null,f(i,(t,o)=>g("div",{class:"photo",key:t.key},[o!==1?(n(),a("img",{key:0,src:c(t.name),alt:"",class:"photo-rectangle"},null,8,x)):(n(),a("img",{key:1,src:c(t.name),alt:"",class:"photo-circle",onClick:p},null,8,C))])),64)),e[0]||(e[0]=g("div",{class:"page-title"},"Darleen",-1))]))}}),D=u(B,[["__scopeId","data-v-6832cd5e"]]);export{D as default};