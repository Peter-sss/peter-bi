import{aG as a,cO as u,aH as l,d as S,a7 as T,aF as r,Y as P,x as O,l as t,c,e as I,h as b,w as g,B as _,a2 as d}from"./index-aa7518de.js";import{l as v}from"./index-b3402de5.js";/* empty css                                                                      */import{S as D}from"./SettingItemBox-f83f1980.js";import{c as h}from"./chartEditStore-dcae2239.js";import{u as q}from"./useTargetData.hook-30f23be8.js";var N=(e=>(e[e.NULL=0]="NULL",e[e.SUCCESS=1]="SUCCESS",e[e.FAILURE=2]="FAILURE",e))(N||{}),U=(e=>(e.FILTER="数据过滤",e.MAPPING="数据映射",e.CONTENT="数据内容",e))(U||{}),i=(e=>(e.STATIC="静态数据",e.AJAX="动态请求",e.Pond="公共接口",e))(i||{});const W=[{label:a.GET,value:a.GET,style:{color:"greenyellow",fontWeight:"bold"}},{label:a.POST,value:a.POST,style:{color:"skyblue",fontWeight:"bold"}},{label:a.PUT,value:a.PUT,style:{color:"goldenrod",fontWeight:"bold"}},{label:a.PATCH,value:a.PATCH,style:{color:"violet",fontWeight:"bold"}},{label:a.DELETE,value:a.DELETE,disabled:!0,style:{fontWeight:"bold"}}],j=[{label:u[l.SECOND],value:l.SECOND},{label:u[l.MINUTE],value:l.MINUTE},{label:u[l.HOUR],value:l.HOUR},{label:u[l.DAY],value:l.DAY}],L={key:0,class:"go-chart-configurations-data"},k=S({__name:"index",setup(e){const m=v(()=>T(()=>import("./index-54208d49.js"),["static/js/index-54208d49.js","static/js/index-ece80ce6.js","static/js/index-aa7518de.js","static/css/index-79930e9d.css","static/js/chartEditStore-dcae2239.js","static/js/plugin-2ac2d336.js","static/js/icon-49f969d0.js","static/js/useTargetData.hook-30f23be8.js","static/js/EditorWorker-d94027f7.js","static/js/editorWorker-43a98755.js","static/css/EditorWorker-97fea4eb.css","static/js/http-52934de2.js","static/js/fileTypeEnum-21359a08.js","static/css/index-b75b8879.css","static/js/index-b3402de5.js","static/css/index-3486f0f1.css","static/js/SettingItemBox-f83f1980.js","static/css/StylesSetting-7ca7a4ce.css","static/css/index-4dd462f0.css"])),A=v(()=>T(()=>import("./index-9aa0f421.js"),["static/js/index-9aa0f421.js","static/js/index-aa7518de.js","static/css/index-79930e9d.css","static/js/icon-49f969d0.js","static/js/SettingItem-1a79e0b6.js","static/css/StylesSetting-7ca7a4ce.css","static/js/SettingItemBox-f83f1980.js","static/js/chartEditStore-dcae2239.js","static/js/plugin-2ac2d336.js","static/js/pondIndex.vue_vue_type_style_index_0_scoped_75801bda_lang-6f7f2db3.js","static/js/useTargetData.hook-30f23be8.js","static/js/EditorWorker-d94027f7.js","static/js/editorWorker-43a98755.js","static/css/EditorWorker-97fea4eb.css","static/css/pondIndex-de17eed0.css","static/js/http-52934de2.js","static/js/index-ece80ce6.js","static/js/fileTypeEnum-21359a08.js","static/css/index-b75b8879.css","static/js/index-b3402de5.js","static/css/index-3486f0f1.css","static/css/index-c8da2751.css"])),y=v(()=>T(()=>import("./index-39dcbd18.js"),["static/js/index-39dcbd18.js","static/js/index-aa7518de.js","static/css/index-79930e9d.css","static/js/icon-49f969d0.js","static/js/http-52934de2.js","static/js/SettingItemBox-f83f1980.js","static/css/StylesSetting-7ca7a4ce.css","static/js/chartEditStore-dcae2239.js","static/js/plugin-2ac2d336.js","static/js/noData-9e194391.js","static/js/useTargetData.hook-30f23be8.js","static/js/pondIndex.vue_vue_type_style_index_0_scoped_75801bda_lang-6f7f2db3.js","static/js/SettingItem-1a79e0b6.js","static/js/EditorWorker-d94027f7.js","static/js/editorWorker-43a98755.js","static/css/EditorWorker-97fea4eb.css","static/css/pondIndex-de17eed0.css","static/js/index-ece80ce6.js","static/js/fileTypeEnum-21359a08.js","static/css/index-b75b8879.css","static/js/index-b3402de5.js","static/css/index-3486f0f1.css","static/css/index-f89be1c8.css"])),{targetData:o}=q(),C=[{label:i.STATIC,value:r.STATIC},{label:i.AJAX,value:r.AJAX},{label:i.Pond,value:r.Pond}],f=P(()=>{var p,s,n;return((p=o.value.chartConfig)==null?void 0:p.chartFrame)===h.STATIC||typeof((n=(s=o.value)==null?void 0:s.option)==null?void 0:n.dataset)=="undefined"});return(p,s)=>{const n=O("n-select");return t(o)?(c(),I("div",L,[b(t(D),{name:"请求方式",alone:!0},{default:g(()=>[b(n,{value:t(o).request.requestDataType,"onUpdate:value":s[0]||(s[0]=E=>t(o).request.requestDataType=E),disabled:t(f),options:C},null,8,["value","disabled"])]),_:1}),t(o).request.requestDataType===t(r).STATIC?(c(),_(t(m),{key:0})):d("",!0),t(o).request.requestDataType===t(r).AJAX?(c(),_(t(A),{key:1})):d("",!0),t(o).request.requestDataType===t(r).Pond?(c(),_(t(y),{key:2})):d("",!0)])):d("",!0)}}}),G=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"}));export{N as D,U as T,W as a,G as i,j as s};
