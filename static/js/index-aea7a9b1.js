var ge=Object.defineProperty,he=Object.defineProperties;var ve=Object.getOwnPropertyDescriptors;var se=Object.getOwnPropertySymbols;var be=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable;var le=(o,d,r)=>d in o?ge(o,d,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[d]=r,Q=(o,d)=>{for(var r in d||(d={}))be.call(d,r)&&le(o,r,d[r]);if(se)for(var r of se(d))ye.call(d,r)&&le(o,r,d[r]);return o},W=(o,d)=>he(o,ve(d));var de=(o,d,r)=>new Promise((q,w)=>{var x=c=>{try{b(r.next(c))}catch(y){w(y)}},i=c=>{try{b(r.throw(c))}catch(y){w(y)}},b=c=>c.done?q(c.value):Promise.resolve(c.value).then(x,i);b((r=r.apply(o,d)).next())});import{d as L,l as k,M as K,b as n,o as u,D as O,w as a,e,c as $,q as _,u as t,f as v,j as V,b9 as _e,m as pe,$ as ee,a1 as G,a6 as ae,F as Y,s as ne,aq as ce,t as A,B as qe,C as we,p as xe,cS as B,aL as X,cR as re,aM as M,aa as Pe,N as De,b2 as Ie,aI as ue,a8 as Z,cr as Ce,cu as Se,bi as $e}from"./index-bc995034.js";import{i as te}from"./icon-bb9a81d8.js";import{c as ke}from"./http-28ba3ba4.js";/* empty css                                                                      */import{S as T}from"./SettingItemBox-4c5ddc0d.js";import{r as Re}from"./chartEditStore-e7279893.js";import{n as Ee}from"./noData-9e194391.js";import{u as oe}from"./useTargetData.hook-de24b8dc.js";import{g as me}from"./plugin-b35dbe73.js";import"./index-2e420a6d.js";import{R as Oe,a as He}from"./pondIndex.vue_vue_type_style_index_0_scoped_75801bda_lang-40340ee3.js";import"./EditorWorker-c9fbb68d.js";import"./editorWorker-43a98755.js";import{S as j}from"./SettingItem-d387cdd8.js";import{C as Te}from"./index-14f8e866.js";import"./index-3bf21822.js";import"./fileTypeEnum-21359a08.js";const Ue={class:"go-pr-3"},Ne=v("名称："),ze={key:1},Be=v("取消"),Ae=v("保存"),Fe=L({__name:"pondIndex",props:{modelShow:Boolean,targetDataRequest:Object},emits:["update:modelShow","editSaveHandle"],setup(o,{emit:d}){const r=o;k();const q=k(),w=k(!1);K(()=>r.modelShow,c=>{w.value=c});const x=()=>{d("update:modelShow",!1)},i=()=>{var c,y;if(!((c=r.targetDataRequest)!=null&&c.dataPondName)){window.$message.warning("请在左下角输入名称！"),(y=q.value)==null||y.focus();return}me({message:"保存内容将同步修改所有使用此接口的组件, 是否继续?",isMaskClosable:!0,transformOrigin:"center",onPositiveCallback:()=>{d("update:modelShow",!1),d("editSaveHandle",r.targetDataRequest)}})},b=()=>{x()};return(c,y)=>{const P=n("n-space"),p=n("n-scrollbar"),D=n("n-tag"),I=n("n-input"),S=n("n-button"),R=n("n-card"),E=n("n-modal");return u(),O(E,{class:"go-chart-data-request",show:w.value,"onUpdate:show":y[1]||(y[1]=g=>w.value=g),"mask-closable":!1,closeOnEsc:!0,onEsc:b},{default:a(()=>[e(R,{bordered:!1,role:"dialog",size:"small","aria-modal":"true",style:{width:"1000px",height:"800px"}},{header:a(()=>[]),"header-extra":a(()=>[]),action:a(()=>[e(P,{justify:"space-between"},{default:a(()=>[o.targetDataRequest?(u(),O(P,{key:0},{default:a(()=>[e(D,{bordered:!1,type:"primary"},{default:a(()=>[Ne]),_:1}),e(I,{value:o.targetDataRequest.dataPondName,"onUpdate:value":y[0]||(y[0]=g=>o.targetDataRequest.dataPondName=g),ref_key:"inputInstRef",ref:q,type:"text",size:"small",autofocus:!0,clearable:!0,minlength:1,maxlength:16,placeholder:"请输入名称"},null,8,["value"])]),_:1})):(u(),$("span",ze)),e(P,null,{default:a(()=>[e(S,{onClick:x},{default:a(()=>[Be]),_:1}),e(S,{type:"primary",onClick:i},{default:a(()=>[Ae]),_:1})]),_:1})]),_:1})]),default:a(()=>[e(p,{style:{"max-height":"718px"}},{default:a(()=>[_("div",Ue,[e(P,{vertical:""},{default:a(()=>{var g;return[e(t(Oe)),e(t(He),{"target-data-request":(g=o.targetDataRequest)==null?void 0:g.dataPondRequestConfig},null,8,["target-data-request"])]}),_:1})])]),_:1})]),_:1})]),_:1},8,["show"])}}}),je=V(Fe,[["__scopeId","data-v-75801bda"]]),Le=o=>(qe("data-v-43dfb7fe"),o=o(),we(),o),Me={class:"go-chart-data-pond-list"},Ge={class:"pond-item-box"},Ve=Le(()=>_("span",null," 创建 ",-1)),Ye=v(" 暂无数据内容， "),Je=v("立即创建"),Qe=["onClick"],We={class:"item-content"},Xe={class:"item-content-body"},Ke=v(" 名称 "),Ze=v(" 地址 "),et=["onClick"],tt=L({__name:"index",emits:["createPond","deletePond"],setup(o,{emit:d}){_e(I=>({"1013e1a5":t(y)}));const{DuplicateOutlineIcon:r,TrashIcon:q}=te.ionicons5,w=pe(),{chartEditStore:x,targetData:i}=oe(),{requestDataPond:b}=ee(x.getRequestGlobalConfig),c=G(()=>i.value.request.requestDataPondId),y=G(()=>w.getAppTheme),P=()=>{d("createPond",!0)},p=(I,S)=>{I.stopPropagation(),I.preventDefault(),d("deletePond",S)},D=I=>{i.value.request.requestDataPondId=I.dataPondId};return(I,S)=>{const R=n("n-timeline-item"),E=n("n-timeline"),g=n("n-icon"),z=n("n-button"),U=n("n-divider"),C=n("n-a"),f=n("n-text"),s=n("n-space"),m=n("n-tag"),h=n("n-ellipsis"),H=n("n-scrollbar");return u(),$("div",Me,[e(E,{class:"pond-item-timeline",style:{width:"20px"}},{default:a(()=>[e(R,{type:"info"}),e(R,{type:"success"})]),_:1}),_("div",Ge,[e(z,{class:"create-btn go-py-4",ghost:"",onClick:P},{icon:a(()=>[e(g,null,{default:a(()=>[e(t(r))]),_:1})]),default:a(()=>[Ve]),_:1}),e(U,{style:{margin:"10px 0"}}),t(b).length?ae("",!0):(u(),O(s,{key:0,justify:"center"},{default:a(()=>[e(f,{class:"not-layer-text",depth:3},{default:a(()=>[Ye,e(C,{onClick:P},{default:a(()=>[Je]),_:1})]),_:1})]),_:1})),e(H,{style:{"max-height":"490px"}},{default:a(()=>[(u(!0),$(Y,null,ne(t(b),l=>(u(),$("div",{key:l.dataPondId,class:ce([{select:l.dataPondId===t(c)},"pond-item"]),onClick:F=>D(l)},[_("div",We,[_("div",Xe,[_("div",null,[e(m,{class:"go-mr-1",type:l.dataPondId===t(c)?"warning":"",bordered:!1},{default:a(()=>[Ke]),_:2},1032,["type"]),e(h,{style:{"max-width":"180px"}},{default:a(()=>[v(A(l.dataPondName||"暂无"),1)]),_:2},1024)]),_("div",null,[e(m,{class:"go-mr-1",type:l.dataPondId===t(c)?"warning":"",bordered:!1},{default:a(()=>[Ze]),_:2},1032,["type"]),e(h,{style:{"max-width":"180px"}},{default:a(()=>[v(A(l.dataPondRequestConfig.requestUrl||"暂无"),1)]),_:2},1024)])]),_("div",{class:"item-content-icon go-transition-quick",onClick:F=>p(F,l)},[e(g,null,{default:a(()=>[e(t(q))]),_:1})],8,et)]),_("div",{class:ce({"select-modal":l.dataPondId===t(c)})},null,2)],10,Qe))),128))]),_:1})])])}}});const at=V(tt,[["__scopeId","data-v-43dfb7fe"]]),nt=_("thead",null,[_("tr",null,[_("th",null,"key"),_("th",null,"value")])],-1),ie=L({__name:"displayTable",props:{target:Object},setup(o){const d=o,r={key:"",value:""},q=xe({content:[]});return K(()=>d.target,w=>{q.content=[];for(const x in w)q.content.push({key:x,value:w[x]});q.content.length||(q.content=[JSON.parse(JSON.stringify(r))])},{immediate:!0,deep:!0}),(w,x)=>{const i=n("n-table");return u(),O(i,{bordered:!1,"single-line":!1,size:"small",style:{"border-bottom-right-radius":"7px","border-bottom-left-radius":"7px"}},{default:a(()=>[nt,_("tbody",null,[(u(!0),$(Y,null,ne(q.content,(b,c)=>(u(),$("tr",{key:c},[_("td",null,A(b.key||"暂无"),1),_("td",null,A(b.value||"暂无"),1)]))),128))])]),_:1})}}}),ot={class:"go-chart-data-display"},st={class:"go-mr-3"},lt={key:0},dt={class:"go-mt-3"},ct={key:0},rt={key:1},ut=v("该接口没有 Body 体"),it={key:1},_t=v("sql"),pt=L({__name:"index",props:{globalData:Object,targetData:Object},setup(o){const d=o,{HelpOutlineIcon:r,FlashIcon:q,PulseIcon:w}=te.ionicons5,{requestUrl:x,requestInterval:i,requestHttpType:b,requestContentType:c,requestSQLContent:y,requestParams:P,requestParamsBodyType:p,requestIntervalUnit:D}=ee(d.targetData.dataPondRequestConfig);B.HEADER;const I={[X.DEFAULT]:"普通请求",[X.SQL]:"SQL 请求"},S=k(B.PARAMS);return(R,E)=>{const g=n("n-input"),z=n("n-icon"),U=n("n-divider"),C=n("n-tab"),f=n("n-tabs"),s=n("n-text"),m=n("n-card"),h=n("n-code"),H=n("n-scrollbar");return u(),$("div",ot,[e(H,{style:{"max-height":"570px"}},{default:a(()=>[_("div",st,[_("div",null,[e(t(T),{name:"主体信息"},{default:a(()=>[e(t(j),{name:"接口名称"},{default:a(()=>{var l;return[e(g,{size:"small",placeholder:((l=o.targetData)==null?void 0:l.dataPondName)||"暂无",disabled:!0},null,8,["placeholder"])]}),_:1}),e(t(j),{name:"接口类型"},{default:a(()=>[e(g,{size:"small",placeholder:t(b)||"暂无",disabled:!0},null,8,["placeholder"])]),_:1})]),_:1}),e(t(T),null,{default:a(()=>[e(t(j),{name:"组件间隔"},{default:a(()=>[e(g,{size:"small",placeholder:`${t(i)||"暂无"}`,disabled:!0},{suffix:a(()=>[v(A(o.targetData&&t(re)[t(D)]),1)]),_:1},8,["placeholder"])]),_:1}),e(t(j),{name:"全局间隔（默认）"},{default:a(()=>{var l;return[e(g,{size:"small",placeholder:`${((l=o.globalData)==null?void 0:l.requestInterval)||"暂无"}`,disabled:!0},{suffix:a(()=>[v(A(o.globalData&&t(re)[o.globalData.requestIntervalUnit]),1)]),_:1},8,["placeholder"])]}),_:1})]),_:1}),e(t(T),{name:"源地址",alone:!0},{default:a(()=>{var l;return[e(g,{size:"small",placeholder:((l=o.globalData)==null?void 0:l.requestOriginUrl)||"暂无",disabled:!0},{prefix:a(()=>[e(z,{component:t(w)},null,8,["component"])]),_:1},8,["placeholder"])]}),_:1}),e(t(T),{name:"接口地址",alone:!0},{default:a(()=>[e(g,{size:"small",placeholder:t(x)||"暂无",disabled:!0},{prefix:a(()=>[e(z,{component:t(q)},null,8,["component"])]),_:1},8,["placeholder"])]),_:1})]),e(U),e(t(T),{name:"类型"},{default:a(()=>[e(t(j),{name:"配置类型"},{default:a(()=>[e(g,{size:"small",placeholder:o.targetData&&I[t(c)],disabled:!0},null,8,["placeholder"])]),_:1}),t(c)===t(X).DEFAULT?(u(),O(t(j),{key:0,name:"body 类型"},{default:a(()=>[e(g,{size:"small",placeholder:o.targetData&&t(p),disabled:!0},null,8,["placeholder"])]),_:1})):ae("",!0)]),_:1}),t(c)===t(X).DEFAULT?(u(),$("div",lt,[e(f,{type:"line",animated:"",value:S.value,"onUpdate:value":E[0]||(E[0]=l=>S.value=l)},{default:a(()=>[(u(!0),$(Y,null,ne(t(B),l=>(u(),O(C,{key:l,name:l,tab:l},{default:a(()=>[v(A(l),1)]),_:2},1032,["name","tab"]))),128))]),_:1},8,["value"]),_("div",dt,[S.value!==t(B).BODY?(u(),$("div",ct,[e(ie,{class:"go-my-3",target:t(P)[S.value]},null,8,["target"])])):(u(),$("div",rt,[t(p)===t(M).NONE?(u(),O(m,{key:0,class:"go-mt-3 go-pb-3"},{default:a(()=>[e(s,{depth:"3"},{default:a(()=>[ut]),_:1})]),_:1})):t(p)===t(M).FORM_DATA||t(p)===t(M).X_WWW_FORM_URLENCODED?(u(),O(ie,{key:1,class:"go-my-3",target:t(P)[t(B).BODY][t(p)]},null,8,["target"])):t(p)===t(M).JSON?(u(),O(m,{key:2,size:"small",style:{"padding-bottom":"7px"}},{default:a(()=>[e(h,{code:t(P)[t(B).BODY][t(p)]||"暂无内容",language:"json"},null,8,["code"])]),_:1})):t(p)===t(M).XML?(u(),O(h,{key:3,code:t(P)[t(B).BODY][t(p)]||"",language:"html"},null,8,["code"])):ae("",!0)]))])])):(u(),$("div",it,[e(t(T),{name:"键名"},{default:a(()=>[e(s,null,{default:a(()=>[_t]),_:1})]),_:1}),e(t(T),{name:"键值"},{default:a(()=>[e(h,{code:t(y).sql||"",language:"sql"},null,8,["code"])]),_:1})]))])]),_:1})])}}});const mt=V(pt,[["__scopeId","data-v-cc877db2"]]),ft={class:"pond-content"},gt={key:1,class:"no-data go-flex-center"},ht=["src"],vt=v("暂未选择公共接口"),bt=v(" 编辑内容 "),yt=v("取消"),qt=v("保存 & 发送请求"),wt=L({__name:"index",props:{modelShow:Boolean},emits:["update:modelShow","sendHandle"],setup(o,{emit:d}){const r=o,{PencilIcon:q}=te.ionicons5,{chartEditStore:w,targetData:x}=oe(),{requestDataPond:i}=ee(w.getRequestGlobalConfig),b=k(!1),c=k(!1),y=k(!1),P=k(!1),p=k(),D=G(()=>{var h,H;const s=(H=(h=x==null?void 0:x.value)==null?void 0:h.request)==null?void 0:H.requestDataPondId;return s?i.value.filter(l=>s===l.dataPondId)[0]:void 0});K(()=>r.modelShow,s=>{c.value=s}),K(()=>D.value,s=>{y.value=!0,p.value=s,Pe(()=>{y.value=!1})},{immediate:!0});const I=(s=!1)=>{P.value=!!s,b.value=!0},S=()=>{const s=De();p.value={dataPondId:s,dataPondName:s,dataPondRequestConfig:Ie.cloneDeep(W(Q({},Re),{requestDataType:ue.Pond}))},I()},R=s=>{P.value?E(s):g(s),P.value=!1,b.value=!1},E=s=>{try{const m=i.value.findIndex(h=>h.dataPondId===s.dataPondId);m!==-1?(i.value.splice(m,1,s),w.getComponentList.forEach(h=>{h.request.requestDataType===ue.Pond&&h.request.requestDataPondId===s.dataPondId&&(h.request=W(Q({},Z(s.dataPondRequestConfig)),{requestDataPondId:s.dataPondId}))}),window.$message.success("保存成功！")):window.$message.error("编辑失败，请稍后重试！")}catch(m){window.$message.error("编辑失败，请稍后重试！")}},g=s=>{try{p.value?(i.value.unshift(s),window.$message.success("创建成功!")):window.$message.error("创建失败，请稍后重试!")}catch(m){window.$message.error("创建失败，请稍后重试!")}},z=s=>{me({message:"删除数据后，需手动处理使用改接口的组件，是否继续？",isMaskClosable:!0,transformOrigin:"center",onPositiveCallback:()=>{const m=i.value.findIndex(h=>h.dataPondId===s.dataPondId);m!==-1?(i.value.splice(m,1),window.$message.success("删除成功!")):window.$message.error("删除失败，请稍后重试！")}})},U=()=>{D.value&&(x.value.request=W(Q({},Z(D.value.dataPondRequestConfig)),{requestDataPondId:D.value.dataPondId})),d("update:modelShow",!1),d("sendHandle")},C=()=>{d("update:modelShow",!1)},f=()=>{C()};return(s,m)=>{const h=n("n-text"),H=n("n-icon"),l=n("n-button"),F=n("n-space"),N=n("n-card"),fe=n("n-modal");return u(),$(Y,null,[e(fe,{class:"go-chart-data-pond-control",show:c.value,"onUpdate:show":m[1]||(m[1]=J=>c.value=J),"mask-closable":!1,"close-on-esc":!0,onEsc:f},{default:a(()=>[e(N,{bordered:!1,role:"dialog",size:"small","aria-modal":"true",style:{width:"900px",height:"650px"}},{header:a(()=>[]),"header-extra":a(()=>[]),action:a(()=>[e(F,{justify:"space-between"},{default:a(()=>[e(l,{type:"info",secondary:"",disabled:!t(D),onClick:m[0]||(m[0]=J=>I(!0))},{icon:a(()=>[e(H,null,{default:a(()=>[e(t(q))]),_:1})]),default:a(()=>[bt]),_:1},8,["disabled"]),_("div",null,[e(l,{class:"go-mr-3",onClick:C},{default:a(()=>[yt]),_:1}),e(l,{type:"primary",onClick:U},{default:a(()=>[qt]),_:1})])]),_:1})]),default:a(()=>[_("div",ft,[t(D)&&!y.value?(u(),O(t(mt),{key:0,targetData:t(D),globalData:t(w).getRequestGlobalConfig},null,8,["targetData","globalData"])):(u(),$("div",gt,[_("img",{src:t(Ee),alt:"暂无数据"},null,8,ht),e(h,{depth:3},{default:a(()=>[vt]),_:1})])),e(t(at),{onCreatePond:S,onDeletePond:z})])]),_:1})]),_:1},8,["show"]),e(t(je),{modelShow:b.value,"onUpdate:modelShow":m[2]||(m[2]=J=>b.value=J),targetDataRequest:p.value,isEdit:P.value,onEditSaveHandle:R},null,8,["modelShow","targetDataRequest","isEdit"])],64)}}});const xt=V(wt,[["__scopeId","data-v-cb258d69"]]),Pt={class:"go-chart-data-pond"},Dt={class:"go-absolute-center"},It=v("编辑配置"),Ct=v(" 测试 "),St=v(" 默认赋值给 dataset 字段 "),$t=v(" 发送请求 "),kt=L({__name:"index",setup(o){_e(C=>({"5189590e":t(g)}));const d=pe(),{HelpOutlineIcon:r,FlashIcon:q,PulseIcon:w,FishIcon:x}=te.ionicons5,{targetData:i,chartEditStore:b}=oe(),{requestDataPond:c,requestInterval:y,requestIntervalUnit:P}=ee(b.getRequestGlobalConfig),p=k(!1),D=k(!1),I=k(!1);let S=0,R;const E=G(()=>{const C=i.value.request.requestDataPondId;return C?c.value.filter(s=>C===s.dataPondId)[0]:void 0}),g=G(()=>d.getAppTheme),z=()=>{D.value=!0},U=()=>de(this,null,function*(){var C;if(!((C=i.value)!=null&&C.request)){window.$message.warning("请选择一个公共接口！");return}p.value=!0;try{const f=yield ke(Z(i.value.request),Z(b.getRequestGlobalConfig));if(p.value=!1,f){if(!(f!=null&&f.data)&&!i.value.filter){window.$message.warning("您的数据不符合默认格式，请配置过滤器！"),I.value=!0;return}i.value.option.dataset=$e(f==null?void 0:f.data,f,i.value.filter),I.value=!0;return}window.$message.warning("没有拿到返回值，请检查接口！")}catch(f){console.error(f),p.value=!1,window.$message.warning("数据异常，请检查参数！")}});return Ce(()=>{var f;const C=(f=i.value)==null?void 0:f.filter;R!==C&&S&&(R=C,U()),S++}),Se(()=>{R=null}),(C,f)=>{const s=n("n-icon"),m=n("n-input"),h=n("n-button"),H=n("n-card"),l=n("n-tooltip"),F=n("go-skeleton");return u(),$(Y,null,[_("div",Pt,[e(H,{class:"n-card-shallow"},{default:a(()=>[e(t(T),{name:"请求名称",alone:!0},{default:a(()=>{var N;return[e(m,{size:"small",placeholder:((N=t(E))==null?void 0:N.dataPondName)||"暂无",disabled:!0},{prefix:a(()=>[e(s,{component:t(x)},null,8,["component"])]),_:1},8,["placeholder"])]}),_:1}),e(t(T),{name:"接口地址",alone:!0},{default:a(()=>{var N;return[e(m,{size:"small",placeholder:((N=t(E))==null?void 0:N.dataPondRequestConfig.requestUrl)||"暂无",disabled:!0},{prefix:a(()=>[e(s,{component:t(q)},null,8,["component"])]),_:1},8,["placeholder"])]}),_:1}),_("div",{class:"edit-text",onClick:z},[_("div",Dt,[e(h,{type:"primary",secondary:""},{default:a(()=>[It]),_:1})])])]),_:1})]),e(t(T),{alone:!0},{name:a(()=>[Ct,e(l,{trigger:"hover"},{trigger:a(()=>[e(s,{size:"21",depth:3},{default:a(()=>[e(t(r))]),_:1})]),default:a(()=>[St]),_:1})]),default:a(()=>[e(h,{type:"primary",ghost:"",onClick:U},{icon:a(()=>[e(s,null,{default:a(()=>[e(t(q))]),_:1})]),default:a(()=>[$t]),_:1})]),_:1}),e(t(Te),{show:I.value&&!p.value,ajax:!0},null,8,["show"]),e(F,{load:p.value,repeat:3},null,8,["load"]),e(t(xt),{modelShow:D.value,"onUpdate:modelShow":f[0]||(f[0]=N=>D.value=N),onSendHandle:U},null,8,["modelShow"])],64)}}});const Qt=V(kt,[["__scopeId","data-v-19fefd48"]]);export{Qt as default};
