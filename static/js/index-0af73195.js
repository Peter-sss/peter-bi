var fe=Object.defineProperty;var ce=Object.getOwnPropertySymbols;var he=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable;var re=(v,i,y)=>i in v?fe(v,i,{enumerable:!0,configurable:!0,writable:!0,value:y}):v[i]=y,H=(v,i)=>{for(var y in i||(i={}))he.call(i,y)&&re(v,y,i[y]);if(ce)for(var y of ce(i))ve.call(i,y)&&re(v,y,i[y]);return v};var oe=(v,i,y)=>new Promise((z,w)=>{var I=C=>{try{S(y.next(C))}catch($){w($)}},U=C=>{try{S(y.throw(C))}catch($){w($)}},S=C=>C.done?z(C.value):Promise.resolve(C.value).then(I,U);S((y=y.apply(v,i)).next())});import{d as Z,cP as de,Y as ie,x as n,l as s,c as l,B as A,w as e,h as t,bd as ae,e as h,f as c,a2 as X,j as D,p as o,t as x,F as k,O as ge,Q as ye,cv as be,aF as xe,A as se,aN as J,r as V,J as ue,y as _e,z as pe,aM as L}from"./index-aa7518de.js";import{S as Ee}from"./SettingItem-1a79e0b6.js";import{S as Y}from"./SettingItemBox-f83f1980.js";import{g as we}from"./plugin-2ac2d336.js";import{i as le}from"./icon-49f969d0.js";import{c as Ce}from"./chartEditStore-dcae2239.js";/* empty css                                                                      */import{n as Oe}from"./noData-9e194391.js";import{u as ee}from"./useTargetData.hook-30f23be8.js";import{M as me}from"./EditorWorker-d94027f7.js";import"./editorWorker-43a98755.js";import{n as ke}from"./useLifeHandler.hook-ccdd680f.js";const $e=o(" 新增 "),Te={key:0,class:"no-data go-flex-center"},Se=["src"],De=o("暂无内容"),Ie=o(" 选择目标组件 "),Ne=o("绑定"),Me=o("不支持「静态组件」支持「组件」「公共APi」"),Le=o(" 关联目标请求参数 "),Ae=o(" 暂无数据 "),Ue=Z({__name:"index",setup(v){const{CloseIcon:i,AddIcon:y,HelpOutlineIcon:z}=le.ionicons5,{targetData:w,chartEditStore:I}=ee(),U=[de.PARAMS,de.HEADER],S=ie(()=>{const f=w.value.interactActions;return f?f.map(_=>({label:_.interactName,value:_.interactType})):[]}),C=ie(()=>w.value.option),$=(f,_)=>{var O,g;if(!f)return{};const p=(O=I.requestGlobalConfig.requestDataPond.find(b=>b.dataPondId===f))==null?void 0:O.dataPondRequestConfig.requestParams;return p?p[_]:(g=I.componentList[I.fetchTargetIndex(f)])==null?void 0:g.request.requestParams[_]},N=f=>{if(!f||!w.value.interactActions)return[];const _=w.value.interactActions.find(p=>p.interactType===f);return(_==null?void 0:_.componentEmitEvents[C.value[be]])||[]},K=()=>{var b;const f=r=>r.reduce((d,u)=>(!u.groupList&&u.request.requestDataType===xe.AJAX&&u.request.requestUrl&&d.push(u),u.groupList&&u.groupList.length>0?[...d,...f(u.groupList)]:d),[]),p=f(I.componentList).filter(r=>{const d=r.id!==w.value.id,u=r.chartConfig.chartFrame!==Ce.STATIC,M=!r.isGroup;return d&&u&&M}).map(r=>({id:r.id,title:r.chartConfig.title,disabled:!1,type:"componentList"})),g=I.requestGlobalConfig.requestDataPond.map(r=>({id:r.dataPondId,title:r.dataPondName,disabled:!1,type:"requestDataPond"})).concat(p);return(b=w.value.events.interactEvents)==null||b.forEach(r=>{g.forEach(d=>{d.id===r.interactComponentId&&(d.disabled=!0)})}),g},B=()=>{w.value.events.interactEvents.push({interactOn:void 0,interactComponentId:void 0,interactFn:{}})},W=f=>{we({message:"是否删除此关联交互模块?",onPositiveCallback:()=>{w.value.events.interactEvents.splice(f,1)}})};return(f,_)=>{const p=n("n-icon"),O=n("n-button"),g=n("n-text"),b=n("n-space"),r=n("n-divider"),d=n("n-tag"),u=n("n-select"),M=n("n-input-group"),F=n("n-tooltip"),R=n("n-table"),G=n("n-card"),q=n("n-collapse-item");return s(S).length?(l(),A(q,{key:0,title:"组件交互",name:"1"},{"header-extra":e(()=>[t(O,{type:"primary",tertiary:"",size:"small",onClick:ae(B,["stop"])},{icon:e(()=>[t(p,null,{default:e(()=>[t(s(y))]),_:1})]),default:e(()=>[$e]),_:1},8,["onClick"])]),default:e(()=>[s(w).events.interactEvents.length?X("",!0):(l(),h("div",Te,[c("img",{src:s(Oe),alt:"暂无数据"},null,8,Se),t(g,{depth:3},{default:e(()=>[De]),_:1})])),(l(!0),h(k,null,D(s(w).events.interactEvents,(T,P)=>(l(),A(G,{key:P,class:"n-card-shallow",size:"small"},{default:e(()=>[t(b,{justify:"space-between"},{default:e(()=>[t(g,null,{default:e(()=>[o("关联组件 - "+x(P+1),1)]),_:2},1024),t(O,{type:"error",text:"",size:"small",onClick:E=>W(P)},{icon:e(()=>[t(p,null,{default:e(()=>[t(s(i))]),_:1})]),_:2},1032,["onClick"])]),_:2},1024),t(r,{style:{margin:"10px 0"}}),t(d,{bordered:!1,type:"primary"},{default:e(()=>[Ie]),_:1}),t(s(Y),{name:"触发事件",alone:!0},{default:e(()=>[s(S)?(l(),A(M,{key:0},{default:e(()=>[t(u,{class:"select-type-options",value:T.interactOn,"onUpdate:value":E=>T.interactOn=E,size:"tiny",options:s(S)},null,8,["value","onUpdate:value","options"])]),_:2},1024)):X("",!0)]),_:2},1024),t(s(Y),{alone:!0},{name:e(()=>[t(g,null,{default:e(()=>[Ne]),_:1}),t(F,{trigger:"hover"},{trigger:e(()=>[t(p,{size:"21",depth:3},{default:e(()=>[t(s(z))]),_:1})]),default:e(()=>[t(g,null,{default:e(()=>[Me]),_:1})]),_:1})]),default:e(()=>[t(u,{class:"select-type-options","value-field":"id","label-field":"title",size:"tiny",filterable:"",placeholder:"仅展示符合条件的组件",value:T.interactComponentId,"onUpdate:value":E=>T.interactComponentId=E,options:K()},null,8,["value","onUpdate:value","options"])]),_:2},1024),N(T.interactOn).length?(l(),A(s(Y),{key:0,name:"查询结果",alone:!0},{default:e(()=>[t(R,{size:"small",striped:""},{default:e(()=>[c("thead",null,[c("tr",null,[(l(),h(k,null,D(["参数","说明"],E=>c("th",{key:E},x(E),1)),64))])]),c("tbody",null,[(l(!0),h(k,null,D(N(T.interactOn),(E,m)=>(l(),h("tr",{key:m},[c("td",null,x(E.value),1),c("td",null,x(E.label),1)]))),128))])]),_:2},1024)]),_:2},1024)):X("",!0),t(d,{bordered:!1,type:"primary"},{default:e(()=>[Le]),_:1}),(l(),h(k,null,D(U,E=>t(s(Y),{name:E,key:E},{default:e(()=>[(l(!0),h(k,null,D($(T.interactComponentId,E),(m,a,j)=>(l(),A(s(Ee),{key:j,name:`${a}`},{default:e(()=>[t(u,{size:"tiny",value:T.interactFn[a],"onUpdate:value":ne=>T.interactFn[a]=ne,options:N(T.interactOn),clearable:""},null,8,["value","onUpdate:value","options"])]),_:2},1032,["name"]))),128)),ge(t(g,{class:"go-pt-1",depth:"3"},{default:e(()=>[Ae]),_:2},1536),[[ye,JSON.stringify($(T.interactComponentId,E))==="{}"]])]),_:2},1032,["name"])),64))]),_:2},1024))),128))]),_:1})):X("",!0)}}});const Fe=se(Ue,[["__scopeId","data-v-35304eef"]]),Pe=`
console.log(e)
`,je=`
console.log(echarts)
`,Ve=`
console.log(components)
`,ze=`
console.log(node_modules)
`,qe=`
// 在渲染之后才能获取 dom 实例
e.el.addEventListener('click', () => {
  alert('我触发拉~');
}, false)
`,Be=`
await import('https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/lodash.js/4.17.21/lodash.js')

// lodash 默认赋值给 "_"
console.log('isEqual', _.isEqual(['1'], ['1']))
`,Re=`
// 获取echart实例
const chart = this.refs.vChartRef.chart

// 图表设置tooltip
chart.setOption({
  tooltip: {
    trigger: 'axis', //item
    enterable: true, 
    formatter (params) {
      return\`
        <div>
          <img src="https://portrait.gitee.com/uploads/avatars/user/1654/4964818_MTrun_1653229420.png!avatar30">
          <b><a href="https://gitee.com/dromara/go-view">《这是一个自定义的tooltip》</a></b>
        <div>
        <div style='border-radius:35px;color:#666'>
        \${Object.entries(params[0].value).map(kv => \`<div>\${kv[0]}:\${kv[1]}</div>\`).join('')}
        </div>
      \`;
    },
  }
})
`,Ge=`
// 组件样式作用域标识
const scoped = this.subTree.scopeId
function loadStyleString(css){
	let style = document.createElement('style')
	style.type = 'text/css'
	style.appendChild(document.createTextNode(css))
	let head = document.getElementsByTagName('head')[0]
	head.appendChild(style)
}
loadStyleString(\`
.dv-scroll-board[\${scoped}] {
  position: relative;
  overflow: hidden;
}
.dv-scroll-board[\${scoped}]::before {
  content: '';
  display: block;
  position: absolute;
  top: -20%;
  left: -100%;
  width: 550px;
  height: 60px;
  transform: rotate(-45deg);
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0));
  animation: cross 2s infinite;
}
@keyframes cross{
  to{
    top: 80%;
    left: 100%;
    transform: rotate(-45deg);
  }
}
\`)
`,He=`
const chart = this.refs.vChartRef.chart
// 定义地图原点大小 同理可自定义标签等等内容
this.props.chartConfig.option.series[0].symbolSize = (val) => {
  return Math.sqrt(val[2]) / 3;
}
this.setupState.vEchartsSetOption();
let i = 0; // 当前轮播索引
const len = 3; // 轮播部分提示
(function showTips() {
  const action = (type, dataIndex) => {
    chart.dispatchAction({
      type,
      dataIndex,
      seriesIndex: 0,
    });
  }
  setInterval(() => {
    action("downplay", i);
    action("hideTip", i);
    if (i === len) i = 0;
    i++;
    action("highlight", i);
    action("showTip", i);
  }, 2000);
})()
`,Je=[{description:"获取当前组件实例",code:Pe},{description:"获取全局 echarts 实例",code:je},{description:"获取组件图表集合",code:Ve},{description:"获取 nodeModules 实例",code:ze},{description:"获取远程 CDN 库",code:Be},{description:"设置文字组件点击事件",code:qe},{description:"修改图表 tooltip",code:Re},{description:"添加【轮播列表】样式",code:Ge},{description:"修改【地图】圆点，新增提示自动轮播",code:He}],Q=v=>(_e("data-v-53d5d409"),v=v(),pe(),v),Ke=o(" 编辑 "),We={class:"func-annotate"},Qe=Q(()=>c("br",null,null,-1)),Xe={class:"func-keyword"},Ye=o(" (e, components, echarts, node_modules) { "),Ze={class:"go-ml-4"},et=Q(()=>c("p",null,[o("}"),c("span",null,",")],-1)),tt=o("高级事件编辑器（配合源码使用）"),nt={class:"go-pl-3"},ot=Q(()=>c("span",{class:"func-keyword"},"async function   ",-1)),at={class:"func-keyNameWord"},st=Q(()=>c("p",{class:"go-pl-3 func-keyNameWord"},"}",-1)),lt=o("触发对应生命周期事件时接收的参数"),ct=o("图表组件实例"),rt=Q(()=>c("br",null,null,-1)),dt=o("当前大屏内所有组件的集合id 图表组件中的配置id，可以获取其他图表组件进行控制"),it=o("以下是内置在代码环境中可用的包变量"),ut=Q(()=>c("br",null,null,-1)),_t={class:"go-flex-items-center"},pt=o(" 说明 "),mt=o("通过提供的参数可为图表增加定制化的tooltip、交互事件等等"),ft=o("取消"),ht=o("保存"),vt=Z({__name:"index",setup(v){const{targetData:i,chartEditStore:y}=ee(),{DocumentTextIcon:z,ChevronDownIcon:w,PencilIcon:I}=le.ionicons5,U={[J.VNODE_BEFORE_MOUNT]:"渲染之前",[J.VNODE_MOUNTED]:"渲染之后"},S={[J.VNODE_BEFORE_MOUNT]:"此时组件 DOM 还未存在",[J.VNODE_MOUNTED]:"此时组件 DOM 已经存在"},C=V(!1),$=V(J.VNODE_MOUNTED);let N=V(H({},i.value.events.advancedEvents));const K=V(!1),B=()=>{let _="",p="",O="";return K.value=Object.entries(N.value).every(([g,b])=>{try{const r=Object.getPrototypeOf(function(){return oe(this,null,function*(){})}).constructor;return new r(b),!0}catch(r){return p=r.message,O=r.name,_=g,!1}}),{errorFn:_,message:p,name:O}},W=()=>{C.value=!1},f=()=>{if(B().errorFn){window.$message.error("事件函数错误，无法进行保存");return}Object.values(N.value).join("").trim()===""?i.value.events.advancedEvents={vnodeBeforeMount:void 0,vnodeMounted:void 0}:i.value.events.advancedEvents=H({},N.value),W()};return ue(()=>C.value,_=>{_&&(N.value=H({},i.value.events.advancedEvents))}),(_,p)=>{const O=n("n-icon"),g=n("n-button"),b=n("n-code"),r=n("n-card"),d=n("n-collapse-item"),u=n("n-text"),M=n("n-space"),F=n("n-tab-pane"),R=n("n-tabs"),G=n("n-layout"),q=n("n-collapse"),T=n("n-scrollbar"),P=n("n-tag"),E=n("n-layout-sider"),m=n("n-modal");return l(),h(k,null,[t(d,{title:"高级事件配置",name:"3"},{"header-extra":e(()=>[t(g,{type:"primary",tertiary:"",size:"small",onClick:p[0]||(p[0]=ae(a=>C.value=!0,["stop"]))},{icon:e(()=>[t(O,null,{default:e(()=>[t(s(I))]),_:1})]),default:e(()=>[Ke]),_:1})]),default:e(()=>[t(r,{class:"collapse-show-box"},{default:e(()=>[(l(!0),h(k,null,D(s(J),a=>(l(),h("div",{key:a},[c("p",null,[c("span",We,"// "+x(U[a]),1),Qe,c("span",Xe,"async "+x(a),1),Ye]),c("p",Ze,[t(b,{code:(s(i).events.advancedEvents||{})[a]||"",language:"typescript"},null,8,["code"])]),et]))),128))]),_:1})]),_:1}),t(m,{class:"go-chart-data-monaco-editor",show:C.value,"onUpdate:show":p[2]||(p[2]=a=>C.value=a),"mask-closable":!1},{default:e(()=>[t(r,{bordered:!1,role:"dialog",size:"small","aria-modal":"true",style:{width:"1200px",height:"700px"}},{header:e(()=>[t(M,null,{default:e(()=>[t(u,null,{default:e(()=>[tt]),_:1})]),_:1})]),"header-extra":e(()=>[]),action:e(()=>[t(M,{justify:"space-between"},{default:e(()=>[c("div",_t,[t(P,{bordered:!1,type:"primary"},{icon:e(()=>[t(O,{component:s(z)},null,8,["component"])]),default:e(()=>[pt]),_:1}),t(u,{class:"go-ml-2",depth:"2"},{default:e(()=>[mt]),_:1})]),t(M,null,{default:e(()=>[t(g,{size:"medium",onClick:W},{default:e(()=>[ft]),_:1}),t(g,{size:"medium",type:"primary",onClick:f},{default:e(()=>[ht]),_:1})]),_:1})]),_:1})]),default:e(()=>[t(G,{"has-sider":"","sider-placement":"right"},{default:e(()=>[t(G,{style:{height:"580px","padding-right":"20px"}},{default:e(()=>[t(R,{value:$.value,"onUpdate:value":p[1]||(p[1]=a=>$.value=a),type:"card","tab-style":"min-width: 100px;"},{suffix:e(()=>[t(u,{class:"tab-tip",type:"warning"},{default:e(()=>[o("提示: "+x(S[$.value]),1)]),_:1})]),default:e(()=>[(l(!0),h(k,null,D(s(J),(a,j)=>(l(),A(F,{key:j,tab:`${U[a]}-${a}`,name:a},{default:e(()=>[c("p",nt,[ot,c("span",at,x(a)+"(e, components, echarts, node_modules)  {",1)]),t(s(me),{modelValue:s(N)[a],"onUpdate:modelValue":ne=>s(N)[a]=ne,height:"480px",language:"javascript"},null,8,["modelValue","onUpdate:modelValue"]),st]),_:2},1032,["tab","name"]))),128))]),_:1},8,["value"])]),_:1}),t(E,{"collapsed-width":14,width:340,"show-trigger":"bar","collapse-mode":"transform","content-style":"padding: 12px 12px 0px 12px;margin-left: 3px;"},{default:e(()=>[t(R,{"default-value":"1","justify-content":"space-evenly",type:"segment"},{default:e(()=>[t(F,{tab:"验证结果",name:"1",size:"small"},{default:e(()=>[t(T,{trigger:"none",style:{"max-height":"505px"}},{default:e(()=>[t(q,{class:"go-px-3","arrow-placement":"right","default-expanded-names":[1,2,3]},{default:e(()=>[(l(!0),h(k,null,D([B()],a=>(l(),h(k,{key:a},[t(d,{title:"错误函数",name:1},{default:e(()=>[t(u,{depth:"3"},{default:e(()=>[o(x(a.errorFn||"暂无"),1)]),_:2},1024)]),_:2},1024),t(d,{title:"错误信息",name:2},{default:e(()=>[t(u,{depth:"3"},{default:e(()=>[o(x(a.name||"暂无"),1)]),_:2},1024)]),_:2},1024),t(d,{title:"堆栈信息",name:3},{default:e(()=>[t(u,{depth:"3"},{default:e(()=>[o(x(a.message||"暂无"),1)]),_:2},1024)]),_:2},1024)],64))),128))]),_:1})]),_:1})]),_:1}),t(F,{tab:"变量说明",name:"2"},{default:e(()=>[t(T,{trigger:"none",style:{"max-height":"505px"}},{default:e(()=>[t(q,{class:"go-px-3","arrow-placement":"right","default-expanded-names":[1,2,3,4]},{default:e(()=>[t(d,{title:"e",name:1},{default:e(()=>[t(u,{depth:"3"},{default:e(()=>[lt]),_:1})]),_:1}),t(d,{title:"this",name:2},{default:e(()=>[t(u,{depth:"3"},{default:e(()=>[ct]),_:1}),rt,(l(!0),h(k,null,D(["refs","setupState","ctx","props","..."],a=>(l(),A(P,{class:"go-m-1",key:a},{default:e(()=>[o(x(a),1)]),_:2},1024))),128))]),_:1}),t(d,{title:"components",name:3},{default:e(()=>[t(u,{depth:"3"},{default:e(()=>[dt]),_:1}),t(b,{code:`{
  [id]: component
}`,language:"typescript"})]),_:1}),t(d,{title:"node_modules",name:4},{default:e(()=>[t(u,{depth:"3"},{default:e(()=>[it]),_:1}),ut,(l(!0),h(k,null,D(Object.keys(s(ke)||{}),a=>(l(),A(P,{class:"go-m-1",key:a},{default:e(()=>[o(x(a),1)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1}),t(F,{tab:"介绍案例",name:"3"},{default:e(()=>[t(T,{trigger:"none",style:{"max-height":"505px"}},{default:e(()=>[t(q,{"arrow-placement":"right"},{default:e(()=>[(l(!0),h(k,null,D(s(Je),(a,j)=>(l(),A(d,{key:j,title:`案例${j+1}：${a.description}`,name:j},{default:e(()=>[t(b,{code:a.code,language:"typescript"},null,8,["code"])]),_:2},1032,["title","name"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["show"])],64)}}});const gt=se(vt,[["__scopeId","data-v-53d5d409"]]),te=v=>(_e("data-v-8e33f3b1"),v=v(),pe(),v),yt=o(" 编辑 "),bt={class:"func-annotate"},xt=te(()=>c("br",null,null,-1)),Et={class:"func-keyword"},wt=o(" (mouseEvent,components) { "),Ct={class:"go-ml-4"},Ot=te(()=>c("p",null,[o("}"),c("span",null,",")],-1)),kt=o("基础事件编辑器"),$t=o("提示: ECharts 组件会拦截鼠标事件"),Tt={class:"go-pl-3"},St=te(()=>c("span",{class:"func-keyword"},"async function   ",-1)),Dt={class:"func-keyNameWord"},It=te(()=>c("p",{class:"go-pl-3 func-keyNameWord"},"}",-1)),Nt=o("鼠标事件对象"),Mt={class:"go-flex-items-center"},Lt=o(" 说明 "),At=o("编写方式同正常 JavaScript 写法"),Ut=o("取消"),Ft=o("保存"),Pt=Z({__name:"index",setup(v){const{targetData:i,chartEditStore:y}=ee(),{DocumentTextIcon:z,ChevronDownIcon:w,PencilIcon:I}=le.ionicons5,U={[L.ON_CLICK]:"单击",[L.ON_DBL_CLICK]:"双击",[L.ON_MOUSE_ENTER]:"鼠标进入",[L.ON_MOUSE_LEAVE]:"鼠标移出"},S=V(!1),C=V(L.ON_CLICK);let $=V(H({},i.value.events.baseEvent));const N=V(!1),K=()=>{let f="",_="",p="";return N.value=Object.entries($.value).every(([O,g])=>{try{const b=Object.getPrototypeOf(function(){return oe(this,null,function*(){})}).constructor;return new b(g),!0}catch(b){return _=b.message,p=b.name,f=O,!1}}),{errorFn:f,message:_,name:p}},B=()=>{S.value=!1},W=()=>{if(K().errorFn){window.$message.error("事件函数错误，无法进行保存");return}Object.values($.value).join("").trim()===""?i.value.events.baseEvent={[L.ON_CLICK]:void 0,[L.ON_DBL_CLICK]:void 0,[L.ON_MOUSE_ENTER]:void 0,[L.ON_MOUSE_LEAVE]:void 0}:i.value.events.baseEvent=H({},$.value),B()};return ue(()=>S.value,f=>{f&&($.value=H({},i.value.events.baseEvent))}),(f,_)=>{const p=n("n-icon"),O=n("n-button"),g=n("n-code"),b=n("n-card"),r=n("n-collapse-item"),d=n("n-text"),u=n("n-space"),M=n("n-tab-pane"),F=n("n-tabs"),R=n("n-layout"),G=n("n-collapse"),q=n("n-scrollbar"),T=n("n-layout-sider"),P=n("n-tag"),E=n("n-modal");return l(),h(k,null,[t(r,{title:"基础事件配置",name:"2"},{"header-extra":e(()=>[t(O,{type:"primary",tertiary:"",size:"small",onClick:_[0]||(_[0]=ae(m=>S.value=!0,["stop"]))},{icon:e(()=>[t(p,null,{default:e(()=>[t(s(I))]),_:1})]),default:e(()=>[yt]),_:1})]),default:e(()=>[t(b,{class:"collapse-show-box"},{default:e(()=>[(l(!0),h(k,null,D(s(L),m=>(l(),h("div",{key:m},[c("p",null,[c("span",bt,"// "+x(U[m]),1),xt,c("span",Et,"async "+x(m),1),wt]),c("p",Ct,[t(g,{code:(s(i).events.baseEvent||{})[m]||"",language:"typescript"},null,8,["code"])]),Ot]))),128))]),_:1})]),_:1}),t(E,{class:"go-chart-data-monaco-editor",show:S.value,"onUpdate:show":_[2]||(_[2]=m=>S.value=m),"mask-closable":!1},{default:e(()=>[t(b,{bordered:!1,role:"dialog",size:"small","aria-modal":"true",style:{width:"1200px",height:"700px"}},{header:e(()=>[t(u,null,{default:e(()=>[t(d,null,{default:e(()=>[kt]),_:1})]),_:1})]),"header-extra":e(()=>[]),action:e(()=>[t(u,{justify:"space-between"},{default:e(()=>[c("div",Mt,[t(P,{bordered:!1,type:"primary"},{icon:e(()=>[t(p,{component:s(z)},null,8,["component"])]),default:e(()=>[Lt]),_:1}),t(d,{class:"go-ml-2",depth:"2"},{default:e(()=>[At]),_:1})]),t(u,null,{default:e(()=>[t(O,{size:"medium",onClick:B},{default:e(()=>[Ut]),_:1}),t(O,{size:"medium",type:"primary",onClick:W},{default:e(()=>[Ft]),_:1})]),_:1})]),_:1})]),default:e(()=>[t(R,{"has-sider":"","sider-placement":"right"},{default:e(()=>[t(R,{style:{height:"580px","padding-right":"20px"}},{default:e(()=>[t(F,{value:C.value,"onUpdate:value":_[1]||(_[1]=m=>C.value=m),type:"card","tab-style":"min-width: 100px;"},{suffix:e(()=>[t(d,{class:"tab-tip",type:"warning"},{default:e(()=>[$t]),_:1})]),default:e(()=>[(l(!0),h(k,null,D(s(L),(m,a)=>(l(),A(M,{key:a,tab:`${U[m]}-${m}`,name:m},{default:e(()=>[c("p",Tt,[St,c("span",Dt,x(m)+"(mouseEvent,components)  {",1)]),t(s(me),{modelValue:s($)[m],"onUpdate:modelValue":j=>s($)[m]=j,height:"480px",language:"javascript"},null,8,["modelValue","onUpdate:modelValue"]),It]),_:2},1032,["tab","name"]))),128))]),_:1},8,["value"])]),_:1}),t(T,{"collapsed-width":14,width:340,"show-trigger":"bar","collapse-mode":"transform","content-style":"padding: 12px 12px 0px 12px;margin-left: 3px;"},{default:e(()=>[t(F,{"default-value":"1","justify-content":"space-evenly",type:"segment"},{default:e(()=>[t(M,{tab:"验证结果",name:"1",size:"small"},{default:e(()=>[t(q,{trigger:"none",style:{"max-height":"505px"}},{default:e(()=>[t(G,{class:"go-px-3","arrow-placement":"right","default-expanded-names":[1,2,3]},{default:e(()=>[(l(!0),h(k,null,D([K()],m=>(l(),h(k,{key:m},[t(r,{title:"错误函数",name:1},{default:e(()=>[t(d,{depth:"3"},{default:e(()=>[o(x(m.errorFn||"暂无"),1)]),_:2},1024)]),_:2},1024),t(r,{title:"错误信息",name:2},{default:e(()=>[t(d,{depth:"3"},{default:e(()=>[o(x(m.name||"暂无"),1)]),_:2},1024)]),_:2},1024),t(r,{title:"堆栈信息",name:3},{default:e(()=>[t(d,{depth:"3"},{default:e(()=>[o(x(m.message||"暂无"),1)]),_:2},1024)]),_:2},1024)],64))),128))]),_:1})]),_:1})]),_:1}),t(M,{tab:"变量说明",name:"2"},{default:e(()=>[t(q,{trigger:"none",style:{"max-height":"505px"}},{default:e(()=>[t(G,{class:"go-px-3","arrow-placement":"right","default-expanded-names":[1,2]},{default:e(()=>[t(r,{title:"mouseEvent",name:1},{default:e(()=>[t(d,{depth:"3"},{default:e(()=>[Nt]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["show"])],64)}}});const jt=se(Pt,[["__scopeId","data-v-8e33f3b1"]]),Vt=o(" 组件 id： "),en=Z({__name:"index",setup(v){const{targetData:i}=ee();return V(!1),(y,z)=>{const w=n("n-text"),I=n("n-collapse");return l(),A(I,{class:"go-mt-3","arrow-placement":"right","default-expanded-names":["1","2"]},{default:e(()=>[t(w,{depth:"3"},{default:e(()=>[Vt,t(w,null,{default:e(()=>[o(x(s(i).id),1)]),_:1})]),_:1}),t(s(Fe)),t(s(jt)),t(s(gt))]),_:1})}}});export{en as default};
