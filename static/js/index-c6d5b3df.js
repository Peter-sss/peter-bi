import{d as j,$ as M,p as y,Y as n,a1 as f,b as r,o as s,D as c,w as t,e as a,u as G,c as g,s as C,H as b,q as S,t as h,F as v,b1 as J,j as Q}from"./index-bc995034.js";import{g as U}from"./plugin-b35dbe73.js";import{i as X}from"./icon-bb9a81d8.js";import{u as Z}from"./useKeyboard.hook-964fbff9.js";import{u as ee,a as te,H as l}from"./chartEditStore-e7279893.js";import{u as A,C as i}from"./chartLayoutStore-0dc7bb44.js";const oe=j({__name:"index",setup(se){const{LayersIcon:H,BarChartIcon:w,PrismIcon:B,HomeIcon:I,ArrowBackIcon:L,ArrowForwardIcon:D}=X.ionicons5,{setItem:x}=A(),{getLayers:E,getCharts:F,getDetails:R}=M(A()),d=ee(),p=te(),K=y([{key:i.CHARTS,select:F,title:"图表组件",icon:n(w)},{key:i.LAYERS,select:E,title:"图层控制",icon:n(H)},{key:i.DETAILS,select:R,title:"详情设置",icon:n(B)}]),T=f(()=>p.getBackStack.length>1),z=f(()=>p.getForwardStack.length>0),$=y([{key:l.BACK_STACK,select:T,title:"后退",icon:n(L)},{key:l.FORWARD_STACK,select:z,title:"前进",icon:n(D)}]),q=o=>o.key===i.DETAILS?o.select?"":"primary":o.select?"primary":"",N=o=>{x(o.key,!o.select)},O=o=>{switch(o.key){case l.BACK_STACK:d.setBack();break;case l.FORWARD_STACK:d.setForward();break}},P=()=>{U({message:"返回将不会保存任何操作",isMaskClosable:!0,onPositiveCallback:()=>{J(),Z()}})};return(o,u)=>{const V=r("n-icon"),_=r("n-button"),k=r("n-tooltip"),W=r("n-divider"),m=r("n-space");return s(),c(m,{class:"header-left-btn",wrap:!1,size:25},{default:t(()=>[a(_,{size:"small",quaternary:"",onClick:u[0]||(u[0]=e=>P())},{icon:t(()=>[a(V,{depth:3},{default:t(()=>[a(G(I))]),_:1})]),_:1}),a(m,{wrap:!1},{default:t(()=>[(s(!0),g(v,null,C(K,e=>(s(),c(k,{key:e.key,placement:"bottom",trigger:"hover"},{trigger:t(()=>[a(_,{size:"small",ghost:"",type:q(e),focusable:!1,onClick:Y=>N(e)},{default:t(()=>[(s(),c(b(e.icon)))]),_:2},1032,["type","onClick"])]),default:t(()=>[S("span",null,h(e.title),1)]),_:2},1024))),128)),a(W,{vertical:""}),(s(!0),g(v,null,C($,e=>(s(),c(k,{key:e.key,placement:"bottom",trigger:"hover"},{trigger:t(()=>[a(_,{size:"small",ghost:"",type:"primary",disabled:!e.select,onClick:Y=>O(e)},{default:t(()=>[(s(),c(b(e.icon)))]),_:2},1032,["disabled","onClick"])]),default:t(()=>[S("span",null,h(e.title),1)]),_:2},1024))),128))]),_:1})]),_:1})}}});const _e=Q(oe,[["__scopeId","data-v-bb96fcea"]]);export{_e as default};
