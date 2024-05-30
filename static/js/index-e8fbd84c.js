/* empty css                                                                      */import{d as g,b as c,o as p,D as f,w as o,e as a,u as n,c as x,F as I,s as V,H as w,f as y,Y as h,a6 as H,j as $}from"./index-bc995034.js";import"./chartEditStore-e7279893.js";import{S as v}from"./SettingItemBox-4c5ddc0d.js";import{i as j}from"./icon-bb9a81d8.js";import{S as D}from"./StylesSetting-f1bb679f.js";import{u as q}from"./useTargetData.hook-de24b8dc.js";import"./plugin-b35dbe73.js";import"./SettingItem-d387cdd8.js";import"./CollapseItem.vue_vue_type_script_setup_true_lang-d3070662.js";import"./logo-aa8b8747.js";const U=g({__name:"NameSetting",props:{chartConfig:{type:Object,required:!0}},setup(e){const t=e;let r="";const l=()=>{r=t.chartConfig.title},s=()=>{t.chartConfig.title.length||(window.$message.warning("请输入至少一个字符!"),t.chartConfig.title=r)};return(d,m)=>{const A=c("n-input");return p(),f(n(v),{name:"名称",alone:!0},{default:o(()=>[a(A,{type:"text",maxlength:"12",minlength:"1",placeholder:"请输入图表名称",size:"small",clearable:"","show-count":"",value:e.chartConfig.title,"onUpdate:value":m[0]||(m[0]=i=>e.chartConfig.title=i),onFocus:l,onBlur:s},null,8,["value"])]),_:1})}}}),F=y("上"),L=y("左"),N=g({__name:"PositionSetting",props:{canvasConfig:{type:Object,required:!0},chartAttr:{type:Object,required:!0}},setup(e){const t=e,{AlignHorizontalLeftIcon:r,AlignVerticalCenterIcon:l,AlignVerticalTopIcon:s,AlignHorizontalCenterIcon:d,AlignHorizontalRightIcon:m,AlignVerticalBottomIcon:A}=j.carbon,i=[{key:"AlignHorizontalLeftIcon",lable:"局左",icon:h(r)},{key:"AlignVerticalCenterIcon",lable:"X轴居中",icon:h(l)},{key:"AlignHorizontalRightIcon",lable:"局右",icon:h(m)},{key:"AlignVerticalTopIcon",lable:"顶部",icon:h(s)},{key:"AlignHorizontalCenterIcon",lable:"Y轴居中",icon:h(d)},{key:"AlignVerticalBottomIcon",lable:"底部",icon:h(A)}],z=C=>{switch(C){case i[0].key:t.chartAttr.x=0;break;case i[1].key:t.chartAttr.y=(t.canvasConfig.height-t.chartAttr.h)/2;break;case i[2].key:t.chartAttr.x=t.canvasConfig.width-t.chartAttr.w;break;case i[3].key:t.chartAttr.y=0;break;case i[4].key:t.chartAttr.x=(t.canvasConfig.width-t.chartAttr.w)/2;break;case i[5].key:t.chartAttr.y=t.canvasConfig.height-t.chartAttr.h;break}};return(C,_)=>{const S=c("n-divider"),B=c("n-button"),G=c("n-space"),b=c("n-text"),k=c("n-input-number");return p(),x(I,null,[a(S,{style:{margin:"10px 0"}}),a(G,{size:8,justify:"space-between",style:{"margin-top":"10px"}},{default:o(()=>[(p(),x(I,null,V(i,u=>a(B,{secondary:"",key:u.key,onClick:K=>z(u.key)},{icon:o(()=>[(p(),f(w(u.icon)))]),_:2},1032,["onClick"])),64))]),_:1}),a(n(v),{name:"位置"},{default:o(()=>[a(k,{value:e.chartAttr.y,"onUpdate:value":_[0]||(_[0]=u=>e.chartAttr.y=u),min:0,size:"small",placeholder:"px"},{prefix:o(()=>[a(b,{depth:"3"},{default:o(()=>[F]),_:1})]),_:1},8,["value"]),a(k,{value:e.chartAttr.x,"onUpdate:value":_[1]||(_[1]=u=>e.chartAttr.x=u),min:0,size:"small",placeholder:"px"},{prefix:o(()=>[a(b,{depth:"3"},{default:o(()=>[L]),_:1})]),_:1},8,["value"])]),_:1})],64)}}}),O=y("宽度"),T=y("高度"),E=g({__name:"SizeSetting",props:{chartAttr:{type:Object,required:!0},isGroup:{type:Boolean,required:!1}},setup(e){return(t,r)=>{const l=c("n-text"),s=c("n-input-number");return p(),f(n(v),{name:"尺寸"},{default:o(()=>[a(s,{value:e.chartAttr.w,"onUpdate:value":r[0]||(r[0]=d=>e.chartAttr.w=d),min:50,disabled:e.isGroup,size:"small",placeholder:"px"},{prefix:o(()=>[a(l,{depth:"3"},{default:o(()=>[O]),_:1})]),_:1},8,["value","disabled"]),a(s,{value:e.chartAttr.h,"onUpdate:value":r[1]||(r[1]=d=>e.chartAttr.h=d),min:50,disabled:e.isGroup,size:"small",placeholder:"px"},{prefix:o(()=>[a(l,{depth:"3"},{default:o(()=>[T]),_:1})]),_:1},8,["value","disabled"])]),_:1})}}}),R={key:0,class:"go-chart-configurations-setting"},Y=g({__name:"index",setup(e){const{targetData:t,chartEditStore:r}=q();return(l,s)=>n(t)?(p(),x("div",R,[a(n(U),{chartConfig:n(t).chartConfig},null,8,["chartConfig"]),a(n(E),{isGroup:n(t).isGroup,chartAttr:n(t).attr},null,8,["isGroup","chartAttr"]),a(n(N),{chartAttr:n(t).attr,canvasConfig:n(r).getEditCanvasConfig},null,8,["chartAttr","canvasConfig"]),a(n(D),{isGroup:n(t).isGroup,chartStyles:n(t).styles},null,8,["isGroup","chartStyles"]),(p(),f(w(n(t).chartConfig.conKey),{optionData:n(t).option},null,8,["optionData"]))])):H("",!0)}});const ot=$(Y,[["__scopeId","data-v-246c8460"]]);export{ot as default};
