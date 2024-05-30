import{d as z,l as L,p as ke,M as xe,b as r,o as s,D as x,w as n,q as m,c as D,s as A,t as I,e as t,F as B,f as y,$ as N,cS as k,u as e,a6 as j,b9 as De,m as Ue,a1 as Ee,be as q,R as W,U as Y,j as Q,aL as F,cU as Te,aM as O,aJ as v,cV as Se}from"./index-bc995034.js";import{S as H}from"./SettingItem-d387cdd8.js";import{S as V}from"./SettingItemBox-4c5ddc0d.js";import{i as K}from"./icon-bb9a81d8.js";import"./chartEditStore-e7279893.js";/* empty css                                                                      */import{u as X}from"./useTargetData.hook-de24b8dc.js";import{s as Z,a as Re}from"./index-2e420a6d.js";import{M as J}from"./EditorWorker-c9fbb68d.js";import"./editorWorker-43a98755.js";const qe=m("thead",null,[m("tr",null,[m("th"),m("th",null,"Key"),m("th",null,"Value"),m("th",null,"操作"),m("th",null,"结果")])],-1),$e={style:{width:"80px"}},Ce=y("+"),Oe=y(" - "),Be=y(" 格式错误 "),Me=y(" 格式通过 "),P=z({__name:"index",props:{target:{type:Object,required:!0,default:()=>{}},editDisabled:{type:Boolean,required:!1,default:!1}},emits:["update"],setup(b,{emit:R}){const T=b;L(!1);const f={key:"",value:"",error:!1},p=ke({content:[]}),c=()=>{let i=0;if(p.content.forEach(g=>{g.key!==""&&g.value==""||g.key===""&&g.value!==""?g.error=!0:(i++,g.error=!1)}),i==p.content.length){const g={};p.content.forEach(u=>{u.key&&(g[u.key]=u.value)}),R("update",g)}},o=i=>{p.content.splice(i+1,0,{key:"",value:"",error:!1})},_=i=>{p.content.length!==1&&p.content.splice(i,1),c()};return xe(()=>T.target,i=>{p.content=[];for(const g in i)p.content.push({key:g,value:i[g],error:!1});p.content.length||(p.content=[JSON.parse(JSON.stringify(f))])},{immediate:!0,deep:!0}),(i,g)=>{const u=r("n-input"),l=r("n-button"),S=r("n-table");return s(),x(S,{class:"go-request-header-table-box","single-line":!1,size:"small"},{default:n(()=>[qe,m("tbody",null,[(s(!0),D(B,null,A(p.content,(d,U)=>(s(),D("tr",{key:U},[m("td",null,I(U+1),1),m("td",null,[t(u,{value:d.key,"onUpdate:value":E=>d.key=E,disabled:b.editDisabled,type:"text",size:"small",onBlur:c},null,8,["value","onUpdate:value","disabled"])]),m("td",null,[t(u,{value:d.value,"onUpdate:value":E=>d.value=E,disabled:b.editDisabled,type:"text",size:"small",onBlur:c},null,8,["value","onUpdate:value","disabled"])]),m("td",null,[m("div",$e,[t(l,{class:"go-ml-2",type:"primary",size:"small",ghost:"",disabled:b.editDisabled,onClick:E=>o(U)},{default:n(()=>[Ce]),_:2},1032,["disabled","onClick"]),t(l,{class:"go-ml-2",type:"warning",size:"small",ghost:"",disabled:U===0&&b.editDisabled,onClick:E=>_(U)},{default:n(()=>[Oe]),_:2},1032,["disabled","onClick"])])]),m("td",null,[d.error?(s(),x(l,{key:0,class:"go-ml-2",text:"",type:"error"},{default:n(()=>[Be]),_:1})):(s(),x(l,{key:1,class:"go-ml-2",text:"",type:"primary"},{default:n(()=>[Me]),_:1}))])]))),128))])]),_:1})}}});const we={class:"go-mt-3"},Ge=z({__name:"index",props:{editDisabled:{type:Boolean,default:!0}},setup(b){const{chartEditStore:R}=X(),{requestParams:T}=N(R.getRequestGlobalConfig),f=L(k.HEADER),p=[k.HEADER],c=o=>{f.value===k.HEADER&&(T.value[f.value]=o)};return(o,_)=>{const i=r("n-tab"),g=r("n-tabs");return s(),D("div",null,[t(g,{type:"line",animated:"",value:f.value,"onUpdate:value":_[0]||(_[0]=u=>f.value=u)},{default:n(()=>[(s(),D(B,null,A(p,u=>t(i,{key:u,name:u,tab:u},{default:n(()=>[y(I(u),1)]),_:2},1032,["name","tab"])),64))]),_:1},8,["value"]),m("div",we,[f.value===e(k).HEADER?(s(),x(e(P),{key:0,editDisabled:b.editDisabled,target:e(T)[f.value],onUpdate:c},null,8,["editDisabled","target"])):j("",!0)])])}}}),Ie=y(" 全局公共配置 "),Le=y(" 编辑配置 "),Ae=y(" 展开 "),Ne=z({__name:"index",setup(b){De(S=>({e19b6098:e(l)}));const{PencilIcon:R,ChevronDownOutlineIcon:T,ChevronUpOutlineIcon:f}=K.ionicons5,{chartEditStore:p}=X(),{requestOriginUrl:c,requestInterval:o,requestIntervalUnit:_}=N(p.getRequestGlobalConfig),i=L(!0),g=Ue(),u=L(!1),l=Ee(()=>g.getAppTheme);return(S,d)=>{const U=r("n-tag"),E=r("n-input"),M=r("n-input-number"),w=r("n-select"),G=r("n-input-group"),$=r("n-icon"),a=r("n-button"),he=r("n-collapse-transition"),ye=r("n-tooltip"),be=r("n-card");return s(),x(be,{class:"n-card-shallow"},{default:n(()=>[t(U,{type:"info",bordered:!1,style:{"border-radius":"5px"}},{default:n(()=>[Ie]),_:1}),t(e(V),{name:"服务",itemRightStyle:{gridTemplateColumns:"5fr 2fr 1fr"}},{default:n(()=>[t(e(H),{name:"前置 URL"},{default:n(()=>[t(E,{value:e(c),"onUpdate:value":d[0]||(d[0]=C=>q(c)?c.value=C:null),valueModifiers:{trim:!0},disabled:i.value,placeholder:"例：http://127.0.0.1/"},null,8,["value","disabled"])]),_:1}),t(e(H),{name:"更新间隔，为 0 只会初始化"},{default:n(()=>[t(G,null,{default:n(()=>[t(M,{class:"select-time-number",value:e(o),"onUpdate:value":d[1]||(d[1]=C=>q(o)?o.value=C:null),valueModifiers:{trim:!0},min:"0","show-button":!1,disabled:i.value,placeholder:"请输入数字"},null,8,["value","disabled"]),t(w,{class:"select-time-options",value:e(_),"onUpdate:value":d[2]||(d[2]=C=>q(_)?_.value=C:null),options:e(Z),disabled:i.value},null,8,["value","options","disabled"])]),_:1})]),_:1}),W(t(a,{type:"primary",ghost:"",onClick:d[3]||(d[3]=C=>i.value=!1)},{icon:n(()=>[t($,null,{default:n(()=>[t(e(R))]),_:1})]),default:n(()=>[Le]),_:1},512),[[Y,i.value]])]),_:1}),t(he,{show:u.value},{default:n(()=>[t(e(Ge),{editDisabled:i.value},null,8,["editDisabled"])]),_:1},8,["show"]),u.value?(s(),D("div",{key:0,class:"go-flex-center go-mt-3 down",onClick:d[4]||(d[4]=C=>u.value=!1)},[t($,{size:"32"},{default:n(()=>[t(e(f))]),_:1})])):(s(),D("div",{key:1,class:"go-flex-center go-mt-3 down",onClick:d[5]||(d[5]=C=>u.value=!0)},[t(ye,{trigger:"hover",placement:"top","keep-alive-on-hover":!1},{trigger:n(()=>[t($,{size:"32"},{default:n(()=>[t(e(T))]),_:1})]),default:n(()=>[Ae]),_:1})]))]),_:1})}}});const Tt=Q(Ne,[["__scopeId","data-v-79c4500f"]]),Ve={style:{width:"600px"}},ze={class:"go-mt-3"},Fe={key:0},He={key:1},Je=y("该接口没有 Body 体"),We=y("SQL 类型不支持 Get 请求，请使用其它方式"),Ye=y("需要后台提供专门处理 sql 的接口"),Pe=y(" sql "),je=z({__name:"index",props:{targetDataRequest:Object},setup(b){const R=b,{requestHttpType:T,requestContentType:f,requestSQLContent:p,requestParams:c,requestParamsBodyType:o}=N(R.targetDataRequest),_=L(k.PARAMS),i=u=>{_.value!==k.BODY&&(c.value[_.value]=u)},g=u=>{_.value===k.BODY&&(o.value===O.FORM_DATA||o.value===O.X_WWW_FORM_URLENCODED)&&(c.value[k.BODY][o.value]=u)};return(u,l)=>{const S=r("n-tab"),d=r("n-tabs"),U=r("n-radio"),E=r("n-space"),M=r("n-radio-group"),w=r("n-text"),G=r("n-card"),$=r("n-tag");return s(),x(E,{vertical:""},{default:n(()=>[m("div",Ve,[t(d,{value:e(f),"onUpdate:value":l[0]||(l[0]=a=>q(f)?f.value=a:null),type:"segment",size:"small"},{default:n(()=>[t(S,{name:e(F).DEFAULT,tab:"普通请求"},null,8,["name"]),t(S,{name:e(F).SQL,tab:"SQL 请求"},null,8,["name"])]),_:1},8,["value"])]),W(m("div",null,[t(d,{type:"line",animated:"",value:_.value,"onUpdate:value":l[1]||(l[1]=a=>_.value=a)},{default:n(()=>[(s(!0),D(B,null,A(e(k),a=>(s(),x(S,{key:a,name:a,tab:a},{default:n(()=>[y(I(a),1)]),_:2},1032,["name","tab"]))),128))]),_:1},8,["value"]),m("div",ze,[_.value!==e(k).BODY?(s(),D("div",Fe,[t(e(P),{target:e(c)[_.value],onUpdate:i},null,8,["target"])])):(s(),D("div",He,[t(M,{value:e(o),"onUpdate:value":l[2]||(l[2]=a=>q(o)?o.value=a:null),name:"radiogroup"},{default:n(()=>[t(E,null,{default:n(()=>[(s(!0),D(B,null,A(e(Te),a=>(s(),x(U,{key:a,value:a},{default:n(()=>[y(I(a),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1},8,["value"]),e(o)===e(O).NONE?(s(),x(G,{key:0,class:"go-mt-3 go-pb-3"},{default:n(()=>[t(w,{depth:"3"},{default:n(()=>[Je]),_:1})]),_:1})):e(o)===e(O).FORM_DATA||e(o)===e(O).X_WWW_FORM_URLENCODED?(s(),x(e(P),{key:1,class:"go-mt-3",target:e(c)[e(k).BODY][e(o)],onUpdate:g},null,8,["target"])):e(o)===e(O).JSON?(s(),x(e(J),{key:2,modelValue:e(c)[e(k).BODY][e(o)],"onUpdate:modelValue":l[3]||(l[3]=a=>e(c)[e(k).BODY][e(o)]=a),width:"600px",height:"200px",language:"json"},null,8,["modelValue"])):e(o)===e(O).XML?(s(),x(e(J),{key:3,modelValue:e(c)[e(k).BODY][e(o)],"onUpdate:modelValue":l[4]||(l[4]=a=>e(c)[e(k).BODY][e(o)]=a),width:"600px",height:"200px",language:"html"},null,8,["modelValue"])):j("",!0)]))])],512),[[Y,e(f)===e(F).DEFAULT]]),W(m("div",null,[e(T)===e(v).GET?(s(),x(w,{key:0},{default:n(()=>[We]),_:1})):(s(),D(B,{key:1},[t($,{type:"warning"},{default:n(()=>[Ye]),_:1}),t(e(V),{name:"键名"},{default:n(()=>[t($,{type:"primary",bordered:!1,style:{width:"40px","font-size":"16px"}},{default:n(()=>[Pe]),_:1})]),_:1}),t(e(V),{name:"键值"},{default:n(()=>[t(e(J),{modelValue:e(p).sql,"onUpdate:modelValue":l[5]||(l[5]=a=>e(p).sql=a),width:"600px",height:"200px",language:"sql"},null,8,["modelValue"])]),_:1})],64))],512),[[Y,e(f)===e(F).SQL]])]),_:1})}}});const Qe=Q(je,[["__scopeId","data-v-00740feb"]]),Xe=["12a","1a","2a","3a","4a","5a","6a","7a","8a","9a","10a","11a","12p","1p","2p","3p","4p","5p","6p","7p","8p","9p","10p","11p"],Ke=["Saturday","Friday","Thursday","Wednesday","Tuesday","Monday","Sunday"],Ze=[[0,0,"@integer(0, 10)"],[1,0,"@integer(0, 10)"],[2,0,"-"],[3,0,"-"],[4,0,"-"],[5,0,"-"],[6,0,"-"],[7,0,"-"],[8,0,"-"],[9,0,"-"],[10,0,"-"],[11,0,"@integer(0, 10)"],[12,0,"@integer(0, 10)"],[13,0,"@integer(0, 10)"],[14,0,"@integer(0, 10)"],[15,0,"@integer(0, 10)"],[16,0,"@integer(0, 10)"],[17,0,"@integer(0, 10)"],[18,0,"@integer(0, 10)"],[19,0,"@integer(0, 10)"],[20,0,"@integer(0, 10)"],[21,0,"@integer(0, 10)"],[22,0,"@integer(0, 10)"],[23,0,"@integer(0, 10)"],[0,1,7],[1,1,"-"],[2,1,"-"],[3,1,"-"],[4,1,"-"],[5,1,"-"],[6,1,"-"],[7,1,"-"],[8,1,"-"],[9,1,"-"],[10,1,"@integer(0, 10)"],[11,1,"@integer(0, 10)"],[12,1,"@integer(0, 10)"],[13,1,"@integer(0, 10)"],[14,1,"@integer(0, 10)"],[15,1,"@integer(0, 10)"],[16,1,"@integer(0, 10)"],[17,1,"@integer(0, 10)"],[18,1,"@integer(0, 10)"],[19,1,"@integer(0, 10)"],[20,1,"@integer(0, 10)"],[21,1,"@integer(0, 10)"],[22,1,"@integer(0, 10)"],[23,1,"@integer(0, 10)"],[0,2,1],[1,2,1],[2,2,"-"],[3,2,"-"],[4,2,"-"],[5,2,"-"],[6,2,"-"],[7,2,"-"],[8,2,"-"],[9,2,"-"],[10,2,"@integer(0, 10)"],[11,2,"@integer(0, 10)"],[12,2,"@integer(0, 10)"],[13,2,"@integer(0, 10)"],[14,2,"@integer(0, 10)"],[15,2,"@integer(0, 10)"],[16,2,"@integer(0, 10)"],[17,2,"@integer(0, 10)"],[18,2,"@integer(0, 10)"],[19,2,"@integer(0, 10)"],[20,2,"@integer(0, 10)"],[21,2,"@integer(0, 10)"],[22,2,"@integer(0, 10)"],[23,2,"@integer(0, 10)"],[0,3,7],[1,3,3],[2,3,"-"],[3,3,"-"],[4,3,"-"],[5,3,"-"],[6,3,"-"],[7,3,"-"],[8,3,1],[9,3,"-"],[10,3,"@integer(0, 10)"],[11,3,"@integer(0, 10)"],[12,3,"@integer(0, 10)"],[13,3,"@integer(0, 10)"],[14,3,"@integer(0, 10)"],[15,3,"@integer(0, 10)"],[16,3,"@integer(0, 10)"],[17,3,"@integer(0, 10)"],[18,3,"@integer(0, 10)"],[19,3,"@integer(0, 10)"],[20,3,"@integer(0, 10)"],[21,3,"@integer(0, 10)"],[22,3,"@integer(0, 10)"],[23,3,"@integer(0, 10)"],[0,4,"@integer(0, 10)"],[1,4,"@integer(0, 10)"],[2,4,"-"],[3,4,"-"],[4,4,"-"],[5,4,"@integer(0, 10)"],[6,4,"-"],[7,4,"-"],[8,4,"-"],[9,4,"@integer(0, 10)"],[10,4,"@integer(0, 10)"],[11,4,"@integer(0, 10)"],[12,4,"@integer(0, 10)"],[13,4,"@integer(0, 10)"],[14,4,"@integer(0, 10)"],[15,4,"@integer(0, 10)"],[16,4,"@integer(0, 10)"],[17,4,"@integer(0, 10)"],[18,4,"@integer(0, 10)"],[19,4,"@integer(0, 10)"],[20,4,"@integer(0, 10)"],[21,4,"@integer(0, 10)"],[22,4,"@integer(0, 10)"],[23,4,"-"],[0,5,"@integer(0, 10)"],[1,5,"@integer(0, 10)"],[2,5,"-"],[3,5,"@integer(0, 10)"],[4,5,"-"],[5,5,"-"],[6,5,"-"],[7,5,"-"],[8,5,"@integer(0, 10)"],[9,5,"-"],[10,5,"@integer(0, 10)"],[11,5,"@integer(0, 10)"],[12,5,"@integer(0, 10)"],[13,5,"@integer(0, 10)"],[14,5,"@integer(0, 10)"],[15,5,"@integer(0, 10)"],[16,5,"@integer(0, 10)"],[17,5,"@integer(0, 10)"],[18,5,"-"],[19,5,"@integer(0, 10)"],[20,5,"@integer(0, 10)"],[21,5,"@integer(0, 10)"],[22,5,"@integer(0, 10)"],[23,5,"-"],[0,6,"@integer(0, 10)"],[1,6,"-"],[2,6,"-"],[3,6,"-"],[4,6,"-"],[5,6,"-"],[6,6,"-"],[7,6,"-"],[8,6,"-"],[9,6,"-"],[10,6,"@integer(0, 10)"],[11,6,"-"],[12,6,"@integer(0, 10)"],[13,6,"@integer(0, 10)"],[14,6,"@integer(0, 10)"],[15,6,"@integer(0, 10)"],[16,6,"-"],[17,6,"-"],[18,6,"-"],[19,6,"-"],[20,6,"@integer(0, 10)"],[21,6,"@integer(0, 10)"],[22,6,"@integer(0, 10)"],[23,6,"@integer(0, 10)"]],et={xAxis:Xe,yAxis:Ke,seriesData:Ze},tt=[{dimensions:["data1"],source:[[10,"@integer(0, 100)"],[8.07,"@integer(0, 100)"],[13,"@integer(0, 100)"],[9.05,"@integer(0, 100)"],[11,"@integer(0, 100)"],[14,"@integer(0, 100)"],[13.4,"@integer(0, 100)"],[10,"@integer(0, 100)"],[14,"@integer(0, 100)"],[12.5,"@integer(0, 100)"],[9.15,"@integer(0, 100)"],[11.5,"@integer(0, 100)"],[3.03,"@integer(0, 100)"],[12.2,"@integer(0, 100)"],[2.02,"@integer(0, 100)"],[1.05,"@integer(0, 100)"],[4.05,"@integer(0, 100)"],[6.03,"@integer(0, 100)"],[12,"@integer(0, 100)"],[12,"@integer(0, 100)"],[7.08,"@integer(0, 100)"],[5.02,"@integer(0, 100)"]]},{dimensions:["data2"],source:[[10,"@integer(0, 70)"],[8.07,"@integer(0, 70)"],[13,"@integer(0, 70)"],[9.05,"@integer(0, 70)"],[11,"@integer(0, 70)"],[14,"@integer(0, 70)"],[13.4,"@integer(0, 70)"],[10,"@integer(0, 70)"],[14,"@integer(0, 70)"],[12.5,"@integer(0, 70)"],[9.15,"@integer(0, 70)"],[11.5,"@integer(0, 70)"],[3.03,"@integer(0, 70)"],[12.2,"@integer(0, 70)"],[2.02,"@integer(0, 70)"],[1.05,"@integer(0, 70)"],[4.05,"@integer(0, 70)"],[6.03,"@integer(0, 70)"],[12,"@integer(0, 70)"],[12,"@integer(0, 70)"],[7.08,"@integer(0, 70)"],[5.02,"@integer(0, 70)"]]}],nt={"markers|50":[{name:"某某地市",value:"@integer(2, 20)",position:["@float(115, 117, 1, 6)","@float(38, 40, 1, 6)"]}]},at=[{name:"@name",value:"@integer(0, 1000)",children:[{name:"@name",value:"@integer(0, 500)"},{name:"@name",value:"@integer(0, 500)"}]},{name:"@name",value:"@integer(0, 1000)",children:[{name:"@name",value:"@integer(0, 00)"},{name:"@name",value:"@integer(0, 500)"}]},{name:"@name",value:"@integer(0, 1000)",children:[{name:"@name",value:"@integer(0, 1000)"}]},{name:"@name",value:"@integer(0, 1000)",children:[{name:"@name",value:"@integer(0, 1000)"}]}],rt=[{name:"a"},{name:"b"},{name:"a1"},{name:"a2"},{name:"b1"},{name:"b2"}],ot=[{source:"a",target:"a1",value:"@integer(0, 10)"},{source:"a",target:"a2",value:"@integer(0, 10)"},{source:"b",target:"b1",value:"@integer(0, 10)"},{source:"a",target:"b1",value:"@integer(0, 10)"},{source:"b1",target:"a1",value:"@integer(0, 10)"},{source:"b1",target:"b2",value:"@integer(0, 10)"}],lt=[{depth:0,itemStyle:{color:"#decbe4"},lineStyle:{color:"source",opacity:.9}},{depth:1,itemStyle:{color:"#b3cde3"},lineStyle:{color:"source",opacity:.6}},{depth:2,itemStyle:{color:"#ccebc5"},lineStyle:{color:"source",opacity:.6}}],st={label:rt,links:ot,levels:lt},it=[{id:"0",name:"Myriel",symbolSize:"@integer(0, 50)",x:-266.82776,y:299.6904,value:"@integer(0, 50)",category:3},{id:"1",name:"Napoleon",symbolSize:"@integer(0, 50)",x:-418.08344,y:446.8853,value:"@integer(0, 50)",category:5},{id:"2",name:"MlleBaptistine",symbolSize:"@integer(0, 50)",x:-212.76357,y:245.29176,value:"@integer(0, 50)",category:1},{id:"3",name:"MmeMagloire",symbolSize:"@integer(0, 50)",x:-242.82404,y:235.26283,value:"@integer(0, 50)",category:1},{id:"4",name:"CountessDeLo",symbolSize:"@integer(0, 50)",x:-379.30386,y:429.06424,value:"@integer(0, 50)",category:0}],ut=[{source:"1",target:"@integer(2, 4)"},{source:"2",target:"@integer(3, 4)"},{source:"3",target:"@integer(0, 2)"},{source:"3",target:"@integer(0, 1)"},{source:"4",target:"@integer(0, 3)"}],dt=[{name:"A"},{name:"B"},{name:"C"},{name:"D"},{name:"E"},{name:"F"},{name:"G"},{name:"H"},{name:"I"}],ct={nodes:it,links:ut,categories:dt},h={fetchMockSingleData:{code:0,status:200,msg:"请求成功",data:{dimensions:["product","dataOne"],"source|20":[{product:"@name","dataOne|0-900":3}]}},fetchCapsule:{code:0,status:200,msg:"请求成功",data:{dimensions:["name","value"],"source|2-5":[{"name|+1":["厦门","福州","北京","上海","新疆","郑州","湖南","内蒙古"],"value|0-40":20}]}},fetchMockData:{code:0,status:200,msg:"请求成功",data:{dimensions:["product","dataOne","dataTwo","dataThree"],"source|20":[{product:"@name","dataOne|100-900":3,"dataTwo|100-900":3,"dataThree|100-900":3}]}},fetchRankList:{code:0,status:200,msg:"请求成功","data|50":[{name:"@name","value|100-900":5}]},fetchScrollBoard:{code:0,status:200,msg:"请求成功",data:[["行1列1","行1列2","1"],["行2列1","行2列2","2"],["行3列1","行3列2","3"],["行4列1","行4列2","4"],["行5列1","行5列2","5"],["行6列1","行6列2","6"],["行7列1","行7列2","行7列3"],["行8列1","行8列2","行8列3"],["行9列1","行9列2","行9列3"],["行10列1","行10列2","行10列3"]]},fetchNumberFloat:{code:0,status:200,msg:"请求成功",data:"@float(0, 0.99, 1, 4)"},fetchNumberInt:{code:0,status:200,msg:"请求成功",data:"@integer(0, 100)"},fetchText:{code:0,status:200,msg:"请求成功",data:"@paragraph(1, 10)"},fetchImage:b=>({code:0,status:200,msg:"请求成功",data:`https://robohash.org/${b}`}),fetchRadar:{code:0,status:200,msg:"请求成功",data:{radarIndicator:[{name:"@name",max:1e4},{name:"@name",max:1e4},{name:"@name",max:1e4},{name:"@name",max:1e4},{name:"@name",max:1e4},{name:"@name",max:1e4}],seriesData:[{value:["@integer(0, 10000)","@integer(0, 10000)","@integer(0, 10000)","@integer(0, 10000)","@integer(0, 10000)","@integer(0, 10000)"],name:"data1"},{value:["@integer(0, 10000)","@integer(0, 10000)","@integer(0, 10000)","@integer(0, 10000)","@integer(0, 10000)","@integer(0, 10000)"],name:"data2"}]}},fetchHeatmap:{code:0,status:200,msg:"请求成功",data:et},fetchScatterBasic:{code:0,status:200,msg:"请求成功",data:tt},fetchMap:{code:0,status:200,msg:"请求成功",data:nt},fetchWordCloud:{code:0,status:200,msg:"请求成功",data:[{name:"@name",value:8e3,textStyle:{color:"#78fbb2"},emphasis:{textStyle:{color:"red"}}},{name:"@name",value:"@integer(10, 8000)"},{name:"@name",value:"@integer(10, 8000)"},{name:"@name",value:"@integer(10, 8000)"},{name:"@name",value:"@integer(10, 8000)"},{name:"@name",value:"@integer(10, 8000)"},{name:"@name",value:"@integer(10, 8000)"},{name:"@name",value:"@integer(10, 8000)"},{name:"@name",value:"@integer(10, 8000)"},{name:"@name",value:"@integer(10, 8000)"},{name:"@name",value:"@integer(10, 8000)"},{name:"@name",value:"@integer(10, 8000)"},{name:"@name",value:"@integer(10, 8000)"},{name:"@name",value:"@integer(10, 8000)"},{name:"@name",value:"@integer(10, 8000)"},{name:"@name",value:"@integer(10, 8000)"},{name:"@name",value:"@integer(10, 8000)"},{name:"@name",value:"@integer(10, 8000)"},{name:"@name",value:"@integer(10, 8000)"},{name:"@name",value:"@integer(10, 8000)"}]},fetchTreemap:{code:0,status:200,msg:"请求成功",data:at},threeEarth01Data:{code:0,status:200,msg:"请求成功",data:[{startArray:{name:"@name",N:"@integer(10, 100)",E:"@integer(10, 100)"},"endArray|10":[{name:"@name",N:"@integer(10, 100)",E:"@integer(10, 100)"}]}]},fetchSankey:{code:0,status:200,msg:"请求成功",data:st},graphData:{code:0,status:200,msg:"请求成功",data:ct}},ee="/mock/chartData",te="/mock/chartSingleData",ne="/mock/number/float",ae="/mock/number/int",re="/mock/text",oe="/mock/image",le="/mock/rankList",se="/mock/scrollBoard",ie="/mock/radarData",ue="/mock/heatMapData",de="/mock/scatterBasic",ce="/mock/map",ge="/mock/capsule",me="/mock/wordCloud",pe="/mock/treemap",_e="/mock/threeEarth01Data",ve="/mock/sankey",fe="/mock/graphData";v.GET,v.GET,v.GET,v.GET,v.GET,v.GET,v.GET,v.GET,v.GET,v.GET,v.GET,v.GET,v.GET,v.GET,v.GET,v.GET,v.GET,v.GET;const gt=y(" 地址 "),mt={class:"go-pl-0"},pt=y(" 开发环境使用 mock 数据，请输入 "),_t=z({__name:"index",props:{targetDataRequest:Object},setup(b){const R=b,{HelpOutlineIcon:T}=K.ionicons5,{chartEditStore:f}=X(),{requestOriginUrl:p}=N(f.getRequestGlobalConfig),{requestInterval:c,requestIntervalUnit:o,requestHttpType:_,requestUrl:i}=N(R.targetDataRequest),g=[{value:`【图表】${ee}`},{value:`【单数据图表】${te}`},{value:`【文本】${re}`},{value:`【0~100 整数】${ae}`},{value:`【0~1小数】${ne}`},{value:`【图片地址】${oe}`},{value:`【排名列表】${le}`},{value:`【滚动表格】${se}`},{value:`【雷达】${ie}`},{value:`【热力图】${ue}`},{value:`【基础散点图】${de}`},{value:`【地图数据】${ce}`},{value:`【胶囊柱图】${ge}`},{value:`【词云】${me}`},{value:`【树图】${pe}`},{value:`【三维地球】${_e}`},{value:`【桑基图】${ve}`},{value:`【关系图】${fe}`}];return(u,l)=>{const S=r("n-divider"),d=r("n-icon"),U=r("n-text"),E=r("n-tooltip"),M=r("n-select"),w=r("n-input"),G=r("n-input-group"),$=r("n-input-number");return s(),D(B,null,[t(S,{class:"go-my-3","title-placement":"left"}),t(e(V),{itemRightStyle:{gridTemplateColumns:"6fr 2fr"},style:{"padding-right":"25px"}},{name:n(()=>[gt,e(Se)()?(s(),x(E,{key:0,trigger:"hover"},{trigger:n(()=>[t(d,{size:"21",depth:3},{default:n(()=>[t(e(T))]),_:1})]),default:n(()=>[m("ul",mt,[pt,(s(),D(B,null,A(g,a=>m("li",{key:a.value},[t(U,{type:"info"},{default:n(()=>[y(I(a.value),1)]),_:2},1024)])),64))])]),_:1})):j("",!0)]),default:n(()=>[t(e(H),{name:"请求方式 & URL 地址"},{default:n(()=>[t(G,null,{default:n(()=>[t(M,{class:"select-type-options",value:e(_),"onUpdate:value":l[0]||(l[0]=a=>q(_)?_.value=a:null),options:e(Re)},null,8,["value","options"]),t(w,{value:e(i),"onUpdate:value":l[1]||(l[1]=a=>q(i)?i.value=a:null),valueModifiers:{trim:!0},min:1,placeholder:"请输入地址（去除前置URL）"},{prefix:n(()=>[t(U,null,{default:n(()=>[y(I(e(p)),1)]),_:1}),t(S,{vertical:""})]),_:1},8,["value"])]),_:1})]),_:1}),t(e(H),{name:"更新间隔，为 0 只会初始化"},{default:n(()=>[t(G,null,{default:n(()=>[t($,{value:e(c),"onUpdate:value":l[2]||(l[2]=a=>q(c)?c.value=a:null),valueModifiers:{trim:!0},class:"select-time-number",min:"0","show-button":!1,placeholder:"默认使用全局数据"},null,8,["value"]),t(M,{class:"select-time-options",value:e(o),"onUpdate:value":l[3]||(l[3]=a=>q(o)?o.value=a:null),options:e(Z)},null,8,["value","options"])]),_:1})]),_:1})]),_:1}),t(e(V),{name:"选择方式",class:"go-mt-0"},{default:n(()=>[t(e(Qe),{targetDataRequest:b.targetDataRequest},null,8,["targetDataRequest"])]),_:1})],64)}}});const St=Q(_t,[["__scopeId","data-v-ccb89b17"]]);export{Tt as R,St as a};
