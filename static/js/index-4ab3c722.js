import{u as m}from"./chartLayoutStore-e45b6248.js";import{d as i,u as _,r as s,Y as d,J as f,x as r,c as h,B as g,w as v,f as a,h as x,l as C}from"./index-aa7518de.js";import"./chartEditStore-dcae2239.js";import"./plugin-2ac2d336.js";import"./icon-49f969d0.js";const w=a("span",null," 拼命加载中... ",-1),A=i({__name:"index",setup(y){const n=m(),c=_(),o=s(!1),t=s(0),l=d(()=>c.getAppTheme);return f(()=>n.getPercentage,e=>{if(e===0){setTimeout(()=>{t.value=e,o.value=!1},500);return}t.value=e,o.value=e>0}),(e,B)=>{const p=r("n-progress"),u=r("n-modal");return h(),g(u,{show:o.value,"close-on-esc":!1,"transform-origin":"center"},{default:v(()=>[a("div",null,[w,x(p,{type:"line",color:C(l),percentage:t.value,style:{width:"300px"}},null,8,["color","percentage"])])]),_:1},8,["show"])}}});export{A as default};