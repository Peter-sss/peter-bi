var R=Object.defineProperty;var h=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var E=(s,t,o)=>t in s?R(s,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[t]=o,c=(s,t)=>{for(var o in t||(t={}))O.call(t,o)&&E(s,o,t[o]);if(h)for(var o of h(t))L.call(t,o)&&E(s,o,t[o]);return s};import{d as b,E as w,a1 as B,b2 as G,b as S,o as p,D as _,w as m,c as H,s as k,H as D,q as P,t as N,u as F,F as M,Y as u,O as V,b3 as j,b4 as q,S as l,aE as d,Q,j as W}from"./index-bc995034.js";import{g as Y}from"./plugin-b35dbe73.js";import{u as z}from"./chartEditStore-e7279893.js";import{s as J}from"./useSyncUpdate.hook-e20a2b66.js";import{i as K}from"./icon-bb9a81d8.js";import"./chartLayoutStore-0dc7bb44.js";import"./index-465a140d.js";import"./SettingItem-d387cdd8.js";/* empty css                                                                      */import"./SettingItemBox-4c5ddc0d.js";import"./CollapseItem.vue_vue_type_script_setup_true_lang-d3070662.js";import"./index.esm.min-a06079a4.js";import"./http-28ba3ba4.js";import"./fileTypeEnum-21359a08.js";const U=b({__name:"index",setup(s){const{BrowsersOutlineIcon:t,SendIcon:o,AnalyticsIcon:T}=K.ionicons5,f=z(),y=w(),C=()=>{const a=V(j.CHART_PREVIEW_NAME,"href");if(!a)return;const{id:i}=y.params,n=typeof i=="string"?i:i[0],r=f.getStorageInfo(),e=q(l.GO_CHART_STORAGE_LIST)||[];if(e!=null&&e.length){const v=e.findIndex(A=>A.id===n);v!==-1?(e.splice(v,1,c({id:n},r)),d(l.GO_CHART_STORAGE_LIST,e)):(e.push(c({id:n},r)),d(l.GO_CHART_STORAGE_LIST,e))}else d(l.GO_CHART_STORAGE_LIST,[c({id:n},r)]);Q(a,[n],void 0,!0)},I=()=>{Y({message:"想体验发布功能，请前往 master-fetch 分支查看: https://gitee.com/MTrun/go-view/tree/master-fetch",positiveText:"了然",closeNegativeText:!0,onPositiveCallback:()=>{}})},g=[{select:!0,title:"同步内容",type:"primary",icon:u(T),event:J},{select:!0,title:"预览",icon:u(t),event:C},{select:!0,title:"发布",icon:u(o),event:I}],x=B(()=>{if(f.getEditCanvas.isCodeEdit)return g;const a=G.cloneDeep(g);return a.shift(),a});return(a,i)=>{const n=S("n-button"),r=S("n-space");return p(),_(r,{class:"go-mt-0",wrap:!1},{default:m(()=>[(p(!0),H(M,null,k(F(x),e=>(p(),_(n,{key:e.title,type:e.type,ghost:"",onClick:e.event},{icon:m(()=>[(p(),_(D(e.icon)))]),default:m(()=>[P("span",null,N(e.title),1)]),_:2},1032,["type","onClick"]))),128))]),_:1})}}});const me=W(U,[["__scopeId","data-v-72043e3a"]]);export{me as default};
