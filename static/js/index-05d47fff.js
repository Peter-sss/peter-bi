import{u as m}from"./chartLayoutStore-0dc7bb44.js";import{d as i,m as _,l as s,a1 as d,M as f,b as a,o as h,D as g,w as v,q as r,e as x,u as C}from"./index-bc995034.js";import"./chartEditStore-e7279893.js";import"./plugin-b35dbe73.js";import"./icon-bb9a81d8.js";const w=r("span",null," 拼命加载中... ",-1),N=i({__name:"index",setup(y){const n=m(),c=_(),o=s(!1),t=s(0),l=d(()=>c.getAppTheme);return f(()=>n.getPercentage,e=>{if(e===0){setTimeout(()=>{t.value=e,o.value=!1},500);return}t.value=e,o.value=e>0}),(e,S)=>{const p=a("n-progress"),u=a("n-modal");return h(),g(u,{show:o.value,"close-on-esc":!1,"transform-origin":"center"},{default:v(()=>[r("div",null,[w,x(p,{type:"line",color:C(l),percentage:t.value,style:{width:"300px"}},null,8,["color","percentage"])])]),_:1},8,["show"])}}});export{N as default};
