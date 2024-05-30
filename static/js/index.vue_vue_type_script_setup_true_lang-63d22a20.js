import{L as Q}from"./index-b3402de5.js";import{d as U,X as W,r as C,b as Z,a8 as S,a9 as z,J as V,c as l,B as d,w as e,h as t,l as p,e as M,j as ee,F as P,p as a,x as o,t as O,a2 as L,f as j,A as N,aa as D,H as G,U as $,ab as te,R as T,ac as ne,ad as H}from"./index-aa7518de.js";import{i as R}from"./icon-49f969d0.js";const oe=a("系统设置"),se=U({__name:"index",props:{modelShow:Boolean},emits:["update:modelShow"],setup(A,{emit:m}){const w=A,{HelpOutlineIcon:E,CloseIcon:I}=R.ionicons5,s=W(),i=C(!1),f=Z([{key:S.ASIDE_ALL_COLLAPSED,value:s.getAsideAllCollapsed,type:"switch",name:"菜单折叠",desc:"首页菜单折叠时隐藏至界面外"},{key:S.HIDE_PACKAGE_ONE_CATEGORY,value:s.getHidePackageOneCategory,type:"switch",name:"隐藏分类",desc:"工作空间表单分类只有单项时隐藏"},{key:S.CHANGE_LANG_RELOAD,value:s.getChangeLangReload,type:"switch",name:"切换语言",desc:"切换语言重新加载页面",tip:"若遇到部分区域语言切换失败，则建议开启"},{key:"divider1",type:"divider",name:"",desc:"",value:""},{key:S.CHART_TOOLS_STATUS_HIDE,value:s.getChartToolsStatusHide,type:"switch",name:"隐藏工具栏",desc:"鼠标移入时，会展示切换到展开模式"},{key:S.CHART_TOOLS_STATUS,value:s.getChartToolsStatus,type:"select",name:"工具栏展示",desc:"工作空间工具栏展示方式",options:[{label:"侧边栏",value:z.ASIDE},{label:"底部 Dock",value:z.DOCK}]},{key:"divider0",type:"divider",name:"",desc:"",value:""},{key:S.CHART_MOVE_DISTANCE,value:s.getChartMoveDistance,type:"number",name:"移动距离",min:1,step:1,suffix:"px",desc:"工作空间方向键控制移动距离"},{key:S.CHART_ALIGN_RANGE,value:s.getChartAlignRange,type:"number",name:"吸附距离",min:10,step:2,suffix:"px",desc:"工作空间移动图表时的吸附距离"}]);V(()=>w.modelShow,y=>{i.value=y});const k=()=>{m("update:modelShow",!1)},h=(y,c)=>{s.setItem(c.key,c.value)};return(y,c)=>{const u=o("n-h3"),x=o("n-icon"),_=o("n-space"),v=o("n-divider"),b=o("n-text"),g=o("n-switch"),F=o("n-input-number"),K=o("n-select"),J=o("n-tooltip"),X=o("n-list-item"),Y=o("n-list"),q=o("n-modal");return l(),d(q,{show:i.value,"onUpdate:show":c[0]||(c[0]=n=>i.value=n),onAfterLeave:k},{default:e(()=>[t(Y,{bordered:"",class:"go-system-setting"},{header:e(()=>[t(_,{justify:"space-between"},{default:e(()=>[t(u,{class:"go-mb-0"},{default:e(()=>[oe]),_:1}),t(x,{size:"20",class:"go-cursor-pointer",onClick:k},{default:e(()=>[t(p(I))]),_:1})]),_:1})]),default:e(()=>[(l(!0),M(P,null,ee(f,n=>(l(),d(X,{key:n.key},{default:e(()=>[n.type==="divider"?(l(),d(v,{key:0,style:{margin:"0"}})):(l(),d(_,{key:1,size:40},{default:e(()=>[t(_,null,{default:e(()=>[t(b,{class:"item-left"},{default:e(()=>[a(O(n.name),1)]),_:2},1024),n.type==="switch"?(l(),d(g,{key:0,value:n.value,"onUpdate:value":[r=>n.value=r,r=>h(r,n)],size:"small"},null,8,["value","onUpdate:value"])):n.type==="number"?(l(),d(F,{key:1,value:n.value,"onUpdate:value":[r=>n.value=r,r=>h(r,n)],class:"input-num-width",size:"small",step:n.step||null,suffix:n.suffix||null,min:n.min||0},null,8,["value","onUpdate:value","step","suffix","min"])):n.type==="select"?(l(),d(K,{key:2,class:"select-min-width",value:n.value,"onUpdate:value":[r=>n.value=r,r=>h(r,n)],size:"small",options:n.options},null,8,["value","onUpdate:value","options"])):L("",!0)]),_:2},1024),t(_,null,{default:e(()=>[t(b,{class:"item-right"},{default:e(()=>[a(O(n.desc),1)]),_:2},1024),n.tip?(l(),d(J,{key:0,trigger:"hover"},{trigger:e(()=>[t(x,{size:"21"},{default:e(()=>[t(p(E))]),_:1})]),default:e(()=>[j("span",null,O(n.tip),1)]),_:2},1024)):L("",!0)]),_:2},1024)]),_:2},1024))]),_:2},1024))),128))]),_:1})]),_:1},8,["show"])}}});const le=N(se,[["__scopeId","data-v-fa104537"]]),ae=a("关于我们"),ce=a("版权声明："),_e=a(" GoView 版权属于 "),de=a("https://gitee.com/MTrun/go-view"),ue=a(" 项目作者 "),re=a("协议备注："),ie=a(" 请遵守开源 MIT 协议，以上声明 "),pe=a("不可删除"),me=a("，否则视作侵权行为，后果自负！ "),fe=a("商业授权："),ve=a(" 若不想保留版权声明，请通过仓库/交流群 联系项目作者，进行授权 "),he=U({__name:"index",props:{modelShow:Boolean},emits:["update:modelShow"],setup(A,{emit:m}){const w=A,{HelpOutlineIcon:E,CloseIcon:I}=R.ionicons5,s=C(!1);V(()=>w.modelShow,f=>{s.value=f});const i=()=>{m("update:modelShow",!1)};return(f,k)=>{const h=o("n-h3"),y=o("n-icon"),c=o("n-space"),u=o("n-text"),x=o("n-a"),_=o("n-list-item"),v=o("n-list"),b=o("n-modal");return l(),d(b,{show:s.value,"onUpdate:show":k[0]||(k[0]=g=>s.value=g),onAfterLeave:i},{default:e(()=>[t(v,{bordered:"",class:"go-system-info"},{header:e(()=>[t(c,{justify:"space-between"},{default:e(()=>[t(h,{class:"go-mb-0"},{default:e(()=>[ae]),_:1}),t(y,{size:"20",class:"go-cursor-pointer",onClick:i},{default:e(()=>[t(p(I))]),_:1})]),_:1})]),default:e(()=>[t(_,null,{default:e(()=>[t(c,{class:"go-my-2",size:20},{default:e(()=>[t(u,{class:"item-left"},{default:e(()=>[ce]),_:1}),t(u,null,{default:e(()=>[_e,t(x,{href:"https://gitee.com/MTrun/go-view",target:"_blank"},{default:e(()=>[de]),_:1}),ue]),_:1})]),_:1})]),_:1}),t(_,null,{default:e(()=>[t(c,{class:"go-my-2",size:20},{default:e(()=>[t(u,{class:"item-left"},{default:e(()=>[re]),_:1}),t(u,null,{default:e(()=>[ie,t(u,{type:"error"},{default:e(()=>[pe]),_:1}),me]),_:1})]),_:1})]),_:1}),t(_,null,{default:e(()=>[t(c,{class:"go-mt-2",size:20},{default:e(()=>[t(u,{class:"item-left"},{default:e(()=>[fe]),_:1}),t(u,null,{default:e(()=>[ve]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["show"])}}});const ye=N(he,[["__scopeId","data-v-a1946442"]]),B="/static/png/person.png",ge={class:"user-info-box"},Se=U({__name:"index",setup(A){const{ChatboxEllipsesIcon:m,PersonIcon:w,LogOutOutlineIcon:E,SettingsSharpIcon:I}=R.ionicons5,s=C(!1),i=C(!1),f=C(!1),h=C([{label:"我的信息",key:"info",type:"render",render:()=>T("div",{style:"display: flex; align-items: center; padding: 8px 12px;"},[T(D,{round:!0,style:"margin-right: 12px;",src:B}),T("div",null,[T("div",null,[T(ne,{depth:2},{default:()=>"peter bi"})])])])},{type:"divider",key:"d1"},{label:G("global.sys_set"),key:"sysSet",icon:$(I)},{type:"divider",key:"d3"},{label:G("global.logout"),key:"logout",icon:$(E)}]),y=_=>{f.value=!0},c=()=>{i.value=!0},u=()=>{s.value=!0},x=_=>{switch(_){case"contact":u();break;case"sysSet":c();break;case"logout":te();break}};return(_,v)=>{const b=o("n-dropdown");return l(),M(P,null,[t(b,{trigger:"hover",onSelect:x,"show-arrow":!0,options:h.value},{default:e(()=>[j("div",ge,[f.value?(l(),d(p(w),{key:0})):L("",!0),f.value?L("",!0):(l(),d(p(D),{key:1,round:"","object-fit":"cover",size:"medium",src:p(B),onError:y},null,8,["src"]))])]),_:1},8,["options"]),t(p(le),{modelShow:i.value,"onUpdate:modelShow":v[0]||(v[0]=g=>i.value=g)},null,8,["modelShow"]),t(p(ye),{modelShow:s.value,"onUpdate:modelShow":v[1]||(v[1]=g=>s.value=g)},null,8,["modelShow"])],64)}}});const we=N(Se,[["__scopeId","data-v-f27ed68a"]]),Ce=U({__name:"index",setup(A){return(m,w)=>(l(),d(p(Q),null,{left:e(()=>[H(m.$slots,"left")]),center:e(()=>[H(m.$slots,"center")]),"ri-left":e(()=>[H(m.$slots,"ri-left")]),"ri-right":e(()=>[t(p(we)),H(m.$slots,"ri-right")]),_:3}))}});export{le as G,Ce as _};
