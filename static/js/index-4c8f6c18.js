var G=(f,E,g)=>new Promise((S,h)=>{var I=d=>{try{o(g.next(d))}catch(p){h(p)}},c=d=>{try{o(g.throw(d))}catch(p){h(p)}},o=d=>d.done?S(d.value):Promise.resolve(d.value).then(I,c);o((g=g.apply(f,E)).next())});import{d as _e,r as O,a7 as ue,ay as y,J as pe,x as a,c as _,e as k,h as e,w as t,l as s,f as b,a2 as V,O as me,Q as fe,p as u,t as U,cj as R,B as w,cM as ge,F as D,j as H,E as F,a6 as ve,cN as Ce,y as be,z as he,A as ye}from"./index-aa7518de.js";import{F as P}from"./fileTypeEnum-21359a08.js";import{u as ke,E as m}from"./chartEditStore-dcae2239.js";/* empty css                                                                      */import{l as we}from"./index-b3402de5.js";import{i as M}from"./icon-49f969d0.js";import{S as Ee}from"./StylesSetting-62b519d1.js";import"./plugin-2ac2d336.js";import"./SettingItem-1a79e0b6.js";import"./SettingItemBox-f83f1980.js";import"./CollapseItem.vue_vue_type_script_setup_true_lang-78c03a72.js";import"./logo-aa8b8747.js";const Se="./static/png/noImage.png",Ie=f=>(be("data-v-bcb3ba8f"),f=f(),he(),f),ze={class:"go-canvas-setting"},Te={class:"upload-box"},Le=["src"],xe={class:"upload-img"},Oe=Ie(()=>b("img",{src:Se},null,-1)),Ue=u("背景颜色"),Re={class:"picker-height"},Fe=u("应用类型"),Pe=u("背景控制"),Ae=u(" 清除背景 "),Be=u(" 清除颜色 "),Ne=u("适配方式"),Ge=_e({__name:"index",setup(f){const{ColorPaletteIcon:E}=M.ionicons5,{ScaleIcon:g,FitToScreenIcon:S,FitToHeightIcon:h,FitToWidthIcon:I}=M.carbon,c=ke(),o=c.getEditCanvasConfig,d=c.getEditCanvas,p=O(),z=O(!1),T=O(0),Y=we(()=>ue(()=>import("./index-863039a5.js"),["peter-bi/static/js/index-863039a5.js","peter-bi/static/js/index-aa7518de.js","peter-bi/static/css/index-79930e9d.css","peter-bi/static/js/chartEditStore-dcae2239.js","peter-bi/static/js/plugin-2ac2d336.js","peter-bi/static/js/icon-49f969d0.js","peter-bi/static/js/index-b3402de5.js","peter-bi/static/css/index-3486f0f1.css","peter-bi/static/css/index-39f06c17.css"])),$=[{label:"应用颜色",value:0},{label:"应用背景",value:1}],X=[{key:"ChartTheme",title:"主题颜色",icon:E,render:Y}],j=[{key:y.FIT,title:"自适应",icon:g,desc:"自适应比例展示，页面会有留白"},{key:y.SCROLL_Y,title:"Y轴滚动",icon:I,desc:"X轴铺满，Y轴自适应滚动"},{key:y.SCROLL_X,title:"X轴滚动",icon:h,desc:"Y轴铺满，X轴自适应滚动"},{key:y.FULL,title:"铺满",icon:S,desc:"强行拉伸画面，填充所有视图"}];pe(()=>o.selectColor,l=>{T.value=l?0:1},{immediate:!0});const A=l=>l>50,B=()=>{c.computedScale()},K=i=>G(this,[i],function*({file:l}){p.value=[];const r=l.file.type;return l.file.size>1024*1024*R?(window.$message.warning(`图片超出 ${R}M 限制，请重新上传！`),!1):r!==P.PNG&&r!==P.JPEG&&r!==P.GIF?(window.$message.warning("文件格式不符合，请重新上传！"),!1):!0}),J=l=>{o.selectColor=l==0},W=()=>{c.setEditCanvasConfig(m.BACKGROUND_IMAGE,void 0),c.setEditCanvasConfig(m.SELECT_COLOR,!0)},q=()=>{z.value=!0,setTimeout(()=>{z.value=!1})},Q=()=>{c.setEditCanvasConfig(m.BACKGROUND,void 0),o.backgroundImage&&c.setEditCanvasConfig(m.SELECT_COLOR,!1),q()},Z=l=>{const{file:i}=l;ve(()=>{if(i.file){const r=Ce(i.file);c.setEditCanvasConfig(m.BACKGROUND_IMAGE,r),c.setEditCanvasConfig(m.SELECT_COLOR,!1)}else window.$message.error("添加图片失败，请稍后重试！")})},ee=l=>{c.setEditCanvasConfig(m.PREVIEW_SCALE_TYPE,l)};return(l,i)=>{const r=a("n-input-number"),L=a("n-form-item"),te=a("n-form"),C=a("n-text"),oe=a("n-upload-dragger"),ne=a("n-upload"),se=a("n-color-picker"),v=a("n-space"),ae=a("n-select"),x=a("n-button"),N=a("n-icon"),le=a("n-tooltip"),ie=a("n-button-group"),ce=a("n-divider"),de=a("n-tab-pane"),re=a("n-tabs");return _(),k("div",ze,[e(te,{inline:"","label-width":45,size:"small","label-placement":"left"},{default:t(()=>[e(L,{label:"宽度"},{default:t(()=>[e(r,{size:"small",value:s(o).width,"onUpdate:value":[i[0]||(i[0]=n=>s(o).width=n),B],disabled:s(d).lockScale,validator:A},null,8,["value","disabled"])]),_:1}),e(L,{label:"高度"},{default:t(()=>[e(r,{size:"small",value:s(o).height,"onUpdate:value":[i[1]||(i[1]=n=>s(o).height=n),B],disabled:s(d).lockScale,validator:A},null,8,["value","disabled"])]),_:1})]),_:1}),b("div",Te,[e(ne,{"file-list":p.value,"onUpdate:file-list":i[2]||(i[2]=n=>p.value=n),"show-file-list":!1,customRequest:Z,onBeforeUpload:K},{default:t(()=>[e(oe,null,{default:t(()=>[s(o).backgroundImage?(_(),k("img",{key:0,class:"upload-show",src:s(o).backgroundImage,alt:"背景"},null,8,Le)):V("",!0),me(b("div",xe,[Oe,e(C,{class:"upload-desc",depth:"3"},{default:t(()=>[u(" 背景图需小于 "+U(s(R))+"M ，格式为 png/jpg/gif 的文件 ",1)]),_:1})],512),[[fe,!s(o).backgroundImage]])]),_:1})]),_:1},8,["file-list"])]),e(v,{vertical:"",size:12},{default:t(()=>[e(v,null,{default:t(()=>[e(C,null,{default:t(()=>[Ue]),_:1}),b("div",Re,[z.value?V("",!0):(_(),w(se,{key:0,size:"small",style:{width:"250px"},value:s(o).background,"onUpdate:value":i[3]||(i[3]=n=>s(o).background=n),showPreview:!0,swatches:s(ge)},null,8,["value","swatches"]))])]),_:1}),e(v,null,{default:t(()=>[e(C,null,{default:t(()=>[Fe]),_:1}),e(ae,{size:"small",style:{width:"250px"},value:T.value,"onUpdate:value":[i[4]||(i[4]=n=>T.value=n),J],disabled:!s(o).backgroundImage,options:$},null,8,["value","disabled"])]),_:1}),e(v,null,{default:t(()=>[e(C,null,{default:t(()=>[Pe]),_:1}),e(x,{class:"clear-btn",size:"small",disabled:!s(o).backgroundImage,onClick:W},{default:t(()=>[Ae]),_:1},8,["disabled"]),e(x,{class:"clear-btn",size:"small",disabled:!s(o).background,onClick:Q},{default:t(()=>[Be]),_:1},8,["disabled"])]),_:1}),e(v,null,{default:t(()=>[e(C,null,{default:t(()=>[Ne]),_:1}),e(ie,null,{default:t(()=>[(_(),k(D,null,H(j,n=>e(x,{key:n.key,type:s(o).previewScaleType===n.key?"primary":"tertiary",ghost:"",size:"small",onClick:Ve=>ee(n.key)},{default:t(()=>[e(le,{"show-arrow":!1,trigger:"hover"},{trigger:t(()=>[e(N,{class:"select-preview-icon",size:"18"},{default:t(()=>[(_(),w(F(n.icon)))]),_:2},1024)]),default:t(()=>[u(" "+U(n.desc),1)]),_:2},1024)]),_:2},1032,["type","onClick"])),64))]),_:1})]),_:1})]),_:1}),e(s(Ee),{isCanvas:!0,chartStyles:s(o)},null,8,["chartStyles"]),e(ce,{style:{margin:"10px 0"}}),e(re,{class:"tabs-box",size:"small",type:"segment"},{default:t(()=>[(_(),k(D,null,H(X,n=>e(de,{key:n.key,name:n.key,size:"small","display-directive":"show:lazy"},{tab:t(()=>[e(v,null,{default:t(()=>[b("span",null,U(n.title),1),e(N,{size:"16",class:"icon-position"},{default:t(()=>[(_(),w(F(n.icon)))]),_:2},1024)]),_:2},1024)]),default:t(()=>[(_(),w(F(n.render)))]),_:2},1032,["name"])),64))]),_:1})])}}});const et=ye(Ge,[["__scopeId","data-v-bcb3ba8f"]]);export{et as default};