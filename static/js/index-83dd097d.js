var gt=Object.defineProperty,_t=Object.defineProperties;var vt=Object.getOwnPropertyDescriptors;var Ve=Object.getOwnPropertySymbols;var mt=Object.prototype.hasOwnProperty,Ct=Object.prototype.propertyIsEnumerable;var qe=(e,s,n)=>s in e?gt(e,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[s]=n,A=(e,s)=>{for(var n in s||(s={}))mt.call(s,n)&&qe(e,n,s[n]);if(Ve)for(var n of Ve(s))Ct.call(s,n)&&qe(e,n,s[n]);return e},he=(e,s)=>_t(e,vt(s));var ue=(e,s,n)=>new Promise((h,o)=>{var _=d=>{try{i(n.next(d))}catch(u){o(u)}},p=d=>{try{i(n.throw(d))}catch(u){o(u)}},i=d=>d.done?h(d.value):Promise.resolve(d.value).then(_,p);i((n=n.apply(e,s)).next())});import{o as Ne,Z as st,cE as yt,aD as Pe,cF as N,a$ as xe,b7 as Re,a4 as St,d as Q,b6 as ve,u as me,Y as $,c as S,e as Y,ad as Ge,F as ae,j as ie,an as ne,am as q,l as t,a2 as be,f as D,A as te,av as nt,B as X,w as T,E as de,ap as Ye,at as we,au as Xe,aq as at,a3 as Z,X as rt,b as Ke,a5 as je,J as ce,ao as ct,x as U,cG as Tt,W as ke,r as G,cH as Je,y as Le,z as Me,h as w,g as xt,p as _e,t as se,aP as wt,cs as B,ct as z,co as Et,cI as bt,aC as kt,cJ as Lt,a6 as Mt,cK as $t,C as Dt,a9 as Ze,O as Oe,Q as Ue,bb as It,M as Rt,cL as Ot,b2 as Ut,N as Ht,b1 as At,S as Se,aB as He,bi as Pt}from"./index-aa7518de.js";import{u as Fe,d as Yt}from"./index-2e28529a.js";import{u as oe,f as V,g as M,h as Te,a as Xt}from"./chartEditStore-dcae2239.js";import{e as Bt,S as Nt}from"./index-a2f40237.js";import{a as Gt}from"./useKeyboard.hook-89bdb26b.js";import{a as Kt,b as Qe,l as Ft,g as zt}from"./plugin-2ac2d336.js";import{C as Wt}from"./index-ebbeeec8.js";import"./querySelectorAll-a1c431d2.js";import{l as et}from"./listen-92ff7612.js";import{u as lt,C as it}from"./chartLayoutStore-e45b6248.js";import{i as pe}from"./icon-49f969d0.js";import{G as Vt}from"./index.vue_vue_type_script_setup_true_lang-63d22a20.js";import{F as tt}from"./fileTypeEnum-21359a08.js";import{u as qt,a as jt}from"./useSyncUpdate.hook-34023094.js";import"./index-b3402de5.js";import"./SettingItem-1a79e0b6.js";/* empty css                                                                      */import"./SettingItemBox-f83f1980.js";import"./CollapseItem.vue_vue_type_script_setup_true_lang-78c03a72.js";import"./index.esm.min-99d94c47.js";import"./http-52934de2.js";const fe=oe(),Jt=e=>{let s=()=>{};Ne(()=>ue(void 0,null,function*(){fe.setEditCanvas(V.EDIT_LAYOUT_DOM,document.getElementById("go-chart-edit-layout")),fe.setEditCanvas(V.EDIT_CONTENT_DOM,document.getElementById("go-chart-edit-content")),yield e(),s=fe.listenerScale()})),st(()=>{fe.setEditCanvas(V.EDIT_LAYOUT_DOM,null),fe.setEditCanvas(V.EDIT_CONTENT_DOM,null),s()})},m=oe(),{onClickOutSide:Zt}=Fe(),Qt=e=>ue(void 0,null,function*(){e.preventDefault();try{Kt();const s=e.dataTransfer.getData(yt.DRAG_KEY);if(!s){Qe();return}m.setEditCanvas(V.IS_CREATE,!1);const n=Pe(s);if(n.disabled)return;let h=yield Bt(n);n.redirectComponent&&(n.dataset&&(h.option.dataset=n.dataset),h.chartConfig.title=n.title,h.chartConfig.chartFrame=n.chartFrame),N(h,e.offsetX-h.attr.w/2,e.offsetY-h.attr.h/2),m.addComponentList(h,!1,!0),m.setTargetSelectChart(h.id),Qe()}catch(s){Ft(),window.$message.warning("图表正在研发中, 敬请期待...")}}),ot=e=>{e.preventDefault(),e.stopPropagation(),e.dataTransfer&&(e.dataTransfer.dropEffect="copy")},ut=(e,s)=>{if(s){m.setTargetSelectChart(s.id);return}m.setTargetSelectChart(void 0)},eo=(e,s)=>{var u;if(e.which==2||(u=window.$KeyboardActive)!=null&&u.space)return;ut();const n=e.offsetX,h=e.offsetY,o=e.screenX,_=e.screenY,p=m.getEditCanvas.scale;m.setMousePosition(void 0,void 0,n,h);const i=xe.throttle(f=>{m.setTargetSelectChart(),m.setEditCanvas(V.IS_SELECT,!0);const a=n+f.screenX-o,r=h+f.screenY-_;m.setMousePosition(a,r);const l={x1:0,y1:0,x2:0,y2:0};a>n&&r>h?(l.x1=n,l.y1=h,l.x2=Math.round(n+(f.screenX-o)/p),l.y2=Math.round(h+(f.screenY-_)/p)):a>n&&r<h?(l.x1=n,l.y1=Math.round(h-(_-f.screenY)/p),l.x2=Math.round(n+(f.screenX-o)/p),l.y2=h):a<n&&r>h?(l.x1=Math.round(n-(o-f.screenX)/p),l.y1=h,l.x2=n,l.y2=Math.round(h+(f.screenY-_)/p)):(l.x1=Math.round(n-(o-f.screenX)/p),l.y1=Math.round(h-(_-f.screenY)/p),l.x2=n,l.y2=h),m.getComponentList.forEach(c=>{if(!m.getTargetChart.selectId.includes(c.id)){const{x:g,y:x,w:L,h:C}=c.attr,E={x1:g,y1:x,x2:g+L,y2:x+C};E.x1-l.x1>=0&&E.y1-l.y1>=0&&E.x2-l.x2<=0&&E.y2-l.y2<=0&&!c.status.lock&&!c.status.hide&&m.setTargetSelectChart(c.id,!0)}})},30),d=()=>{i.cancel(),m.setEditCanvas(V.IS_SELECT,!1),m.setMousePosition(0,0,0,0),document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",d)};document.addEventListener("mousemove",i),document.addEventListener("mouseup",d)},dt=()=>({mouseClickHandle:(o,_)=>{var p;if(o.preventDefault(),o.stopPropagation(),!_.status.lock&&(p=window.$KeyboardActive)!=null&&p.ctrl)if(m.targetChart.selectId.includes(_.id)){const i=m.targetChart.selectId.filter(d=>d!==_.id);m.setTargetSelectChart(i)}else m.setTargetSelectChart(_.id,!0)},mousedownHandle:(o,_)=>{var x;if(o.preventDefault(),o.stopPropagation(),_.status.lock||(Zt(),o.buttons===Re.LEFT&&((x=window.$KeyboardActive)!=null&&x.ctrl)))return;const p=m.getTargetChart.selectId;if(o.buttons===Re.RIGHT&&p.length>1&&p.includes(_.id)||(m.setTargetSelectChart(_.id),o.buttons===Re.RIGHT))return;const i=m.getEditCanvas.scale,d=m.getEditCanvasConfig.width,u=m.getEditCanvasConfig.height,f=new Map;m.getTargetChart.selectId.forEach(L=>{const C=m.fetchTargetIndex(L);if(C!==-1){const{x:E,y:k,w:O,h:K}=St(m.getComponentList[C]).attr;f.set(L,{x:E,y:k,w:O,h:K})}});const a=o.screenX,r=o.screenY;let l=[];m.getTargetChart.selectId.forEach(L=>{if(!f.has(L))return;const C=m.fetchTargetIndex(L);l.push(xe.cloneDeep(m.getComponentList[C]))}),m.setMousePosition(void 0,void 0,a,r);const c=xe.throttle(L=>{m.setEditCanvas(V.IS_DRAG,!0),m.setMousePosition(L.screenX,L.screenY);let C=(L.screenX-a)/i,E=(L.screenY-r)/i;m.getTargetChart.selectId.forEach(k=>{if(!f.has(k))return;const O=m.fetchTargetIndex(k),{x:K,y:ee,w:P,h:v}=f.get(k),I=m.getComponentList[O];let H=Math.round(K+C),y=Math.round(ee+E);const b=50;H=H<-P+b?-P+b:H,y=y<-v+b?-v+b:y,H=H>d-b?d-b:H,y=y>u-b?u-b:y,I&&(I.attr=Object.assign(I.attr,{x:H,y}))})},20),g=()=>{try{if(m.setMousePosition(0,0,0,0),m.setEditCanvas(V.IS_DRAG,!1),l.length){m.getTargetChart.selectId.forEach(C=>{if(!f.has(C))return;const E=m.fetchTargetIndex(C),k=m.getComponentList[E];l.forEach(O=>{O.id===C&&(O.attr=Object.assign(O.attr,{offsetX:k.attr.x-O.attr.x,offsetY:k.attr.y-O.attr.y}))})});const L=l.filter(C=>C.attr.offsetX!==0&&C.attr.offsetY!==0);L.length&&m.moveComponentList(L)}document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",g)}catch(L){console.log(L)}};document.addEventListener("mousemove",c),document.addEventListener("mouseup",g)},mouseenterHandle:(o,_)=>{o.preventDefault(),o.stopPropagation(),m.getEditCanvas.isSelect||m.setTargetHoverChart(_.id)},mouseleaveHandle:(o,_)=>{o.preventDefault(),o.stopPropagation(),m.setEditCanvas(V.IS_DRAG,!1),m.setTargetHoverChart(void 0)}}),to=(e,s,n)=>{e.stopPropagation(),e.preventDefault(),m.setEditCanvas(V.IS_DRAG,!0);const h=m.getEditCanvas.scale,o=n.x,_=n.y,p=n.w,i=n.h,d=e.screenX,u=e.screenY;m.setMousePosition(d,u);const f=xe.throttle(r=>{m.setMousePosition(r.screenX,r.screenY);let l=Math.round((r.screenX-d)/h),c=Math.round((r.screenY-u)/h);const g=/t/.test(s),x=/b/.test(s),L=/l/.test(s),C=/r/.test(s),E=i+(g?-c:x?c:0),k=p+(L?-l:C?l:0);n.h=E>0?E:0,n.w=k>0?k:0,n.x=o+(L?l:0),n.y=_+(g?c:0)},50),a=()=>{m.setEditCanvas(V.IS_DRAG,!1),m.setMousePosition(0,0,0,0),document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",a)};document.addEventListener("mousemove",f),document.addEventListener("mouseup",a)},Ee=(e,s)=>e?{zIndex:s+1,left:`${e.x}px`,top:`${e.y}px`}:{},le=(e,s)=>e?{width:`${s?s*e.w:e.w}px`,height:`${s?s*e.h:e.h}px`}:{},oo=(e,s,n,h)=>{const{w:o,h:_}=n,p=/t/.test(e),i=/b/.test(e),d=/l/.test(e),u=/r/.test(e);let f=0,a=0;return e.length===2?(f=d?0:o,a=p?0:_):((p||i)&&(f=o/2,a=p?0:_),(d||u)&&(f=d?0:o,a=Math.floor(_/2))),{left:`${f}px`,top:`${a}px`,cursor:h[s]+"-resize"}},so=["onMousedown"],no=Q({__name:"index",props:{item:{type:Object,required:!0},hiddenPoint:{type:Boolean,required:!1}},setup(e){const s=e;ve(a=>({ab01a3ce:t(p)}));const n=me(),h=oe(),o=["t","r","b","l","lt","rt","lb","rb"],_=["n","e","s","w","nw","ne","sw","se"],p=$(()=>n.getAppTheme),i=$(()=>h.getEditCanvas[V.IS_DRAG]||s.item.status.lock?!1:s.item.id===h.getTargetChart.hoverId),d=$(()=>{const a=s.item.id;return s.item.status.lock?!1:h.getTargetChart.selectId.find(r=>r===a)}),u=$(()=>s.item.status.lock),f=$(()=>s.item.status.hide);return(a,r)=>(S(),Y("div",{class:ne(["go-shape-box",{lock:t(u),hide:t(f)}])},[Ge(a.$slots,"default",{},void 0,!0),e.hiddenPoint?be("",!0):(S(!0),Y(ae,{key:0},ie(t(d)?o:[],(l,c)=>(S(),Y("div",{class:ne(`shape-point ${l}`),key:c,style:q(t(oo)(l,c,e.item.attr,_)),onMousedown:g=>t(to)(g,l,e.item.attr)},null,46,so))),128)),D("div",{class:"shape-modal",style:q(t(le)(e.item.attr))},[D("div",{class:ne(["shape-modal-select",{active:t(d)}])},null,2),D("div",{class:ne(["shape-modal-change",{selectActive:t(d),hoverActive:t(i)}])},null,2)],4)],2))}});const Be=te(no,[["__scopeId","data-v-e6e74e0e"]]),ao={class:"go-edit-group-box"},ro=Q({__name:"index",props:{groupData:{type:Object,required:!0},groupIndex:{type:Number,required:!0}},setup(e){const s=oe(),{handleContextMenu:n}=Fe(),{mouseenterHandle:h,mouseleaveHandle:o,mousedownHandle:_,mouseClickHandle:p}=dt(),i=(f,a,r)=>{const l=c=>a.filter(g=>c.includes(g.key));if(s.getTargetChart.selectId.length>1)return l([Z.GROUP,Z.DELETE]);{const c=[];r.status.lock?c.push(Z.LOCK):c.push(Z.UNLOCK),r.status.hide?c.push(Z.HIDE):c.push(Z.SHOW);const g=[Z.UN_GROUP];return[...l(g),Yt(),...f.filter(x=>!c.includes(x.key))]}},d=$(()=>nt(s.getEditCanvasConfig.chartCustomThemeColorInfo)[s.getEditCanvasConfig.chartThemeColor]),u=$(()=>s.getEditCanvasConfig.chartThemeSetting);return(f,a)=>(S(),Y("div",ao,[(S(),X(t(Be),{key:e.groupData.id,"data-id":e.groupData.id,index:e.groupIndex,item:e.groupData,hiddenPoint:!0,class:ne(t(Ye)(e.groupData.styles.animations)),style:q(A(A(A(A(A({},t(Ee)(e.groupData.attr,e.groupIndex)),t(le)(e.groupData.attr)),t(we)(e.groupData.styles)),t(Xe)(e.groupData.styles)),t(at)(e.groupData.styles))),onClick:a[0]||(a[0]=r=>t(p)(r,e.groupData)),onMousedown:a[1]||(a[1]=r=>t(_)(r,e.groupData)),onMouseenter:a[2]||(a[2]=r=>t(h)(r,e.groupData)),onMouseleave:a[3]||(a[3]=r=>t(o)(r,e.groupData)),onContextmenu:a[4]||(a[4]=r=>t(n)(r,e.groupData,i))},{default:T(()=>[(S(!0),Y(ae,null,ie(e.groupData.groupList,r=>(S(),X(t(Be),{key:r.id,"data-id":r.id,index:e.groupIndex,item:r,hiddenPoint:!0,style:q(A({},t(Ee)(r.attr,e.groupIndex)))},{default:T(()=>[(S(),X(de(r.chartConfig.chartKey),{class:ne(["edit-content-chart",t(Ye)(r.styles.animations)]),chartConfig:r,themeSetting:t(u),themeColor:t(d),style:q(A(A(A({},t(le)(r.attr)),t(we)(r.styles)),t(Xe)(r.styles)))},null,8,["class","chartConfig","themeSetting","themeColor","style"]))]),_:2},1032,["data-id","index","item","style"]))),128))]),_:1},8,["data-id","index","item","class","style"]))]))}}),co={class:"go-edit-align-line"},lo=Q({__name:"index",setup(e){ve(c=>({"2a25621e":t(p)}));const s=me(),n=oe(),h=rt(),o=Ke({lineArr:["rowt","rowc","rowb","coll","colc","colr"],select:new Map,sorptioned:{x:!1,y:!1}}),_=c=>c?{left:`${c.x?c.x:0}px`,top:`${c.y?c.y:0}px`}:{},p=$(()=>s.getAppTheme),i=$(()=>h.getChartAlignRange),d=$(()=>n.getEditCanvas[V.IS_DRAG]),u=(c,g)=>Math.abs(c-g)<=i.value,f=$(()=>n.getTargetChart.selectId),a=$(()=>n.getComponentList[n.fetchTargetIndex()]),r=$(()=>{var c;return((c=a.value)==null?void 0:c.attr)||{}}),l=$(()=>({id:"0",attr:{w:je(n.getEditCanvasConfig.width),h:je(n.getEditCanvasConfig.height),x:0,y:0,offsetX:0,offsetY:0,zIndex:0}}));return ce(()=>n.getMousePosition,ct(()=>{try{if(!d.value||f.value.length!==1)return;const c=r.value.w,g=r.value.h,x=r.value.x,L=x+c/2,C=x+c,E=[x,L,C],k=r.value.y,O=k+g/2,K=k+g,ee=[k,O,K];o.select.clear(),o.sorptioned.y=!1;const P=n.getComponentList.map(v=>({id:v.id,attr:v.attr}));P.push(l.value),o.lineArr.forEach(v=>{P.forEach(I=>{if(f.value[0]===I.id)return;const H=I.attr.w,y=I.attr.h,b=I.attr.x,F=b+H/2,R=b+H,$e=[b,F,R],W=I.attr.y,j=W+y/2,J=W+y,We=[W,j,J];v.includes("rowt")&&(u(k,W)&&(o.select.set(v,{y:W}),N(a.value,x,W)),u(k,j)&&(o.select.set(v,{y:j}),N(a.value,x,j)),u(k,J)&&(o.select.set(v,{y:J}),N(a.value,x,J))),v.includes("rowc")&&(u(O,W)&&(o.select.set(v,{y:W}),N(a.value,x,W-g/2)),u(O,j)&&(o.select.set(v,{y:j}),N(a.value,x,j-g/2)),u(O,J)&&(o.select.set(v,{y:J}),N(a.value,x,J-g/2))),v.includes("rowb")&&(u(K,W)&&(o.select.set(v,{y:W}),N(a.value,x,W-g)),u(K,j)&&(o.select.set(v,{y:j}),N(a.value,x,j-g)),u(K,J)&&(o.select.set(v,{y:J}),N(a.value,x,J-g))),v.includes("coll")&&(u(x,b)&&(o.select.set(v,{x:b}),N(a.value,b,k)),u(x,F)&&(o.select.set(v,{x:F}),N(a.value,F,k)),u(x,R)&&(o.select.set(v,{x:R}),N(a.value,R,k))),v.includes("colc")&&(u(L,b)&&(o.select.set(v,{x:b}),N(a.value,b-c/2,k)),u(L,F)&&(o.select.set(v,{x:F}),N(a.value,F-c/2,k)),u(L,R)&&(o.select.set(v,{x:R}),N(a.value,R-c/2,k))),v.includes("colr")&&(u(C,b)&&(o.select.set(v,{x:b}),N(a.value,b-c,k)),u(C,F)&&(o.select.set(v,{x:F}),N(a.value,F-c,k)),u(C,R)&&(o.select.set(v,{x:R}),N(a.value,R-c,k)))})})}catch(c){console.log(c)}},200),{deep:!0}),ce(()=>d.value,c=>{c||(o.select.clear(),o.sorptioned.y=!1)}),(c,g)=>(S(),Y("div",co,[(S(!0),Y(ae,null,ie(o.lineArr,x=>(S(),Y("div",{class:ne(["line",[x.includes("row")?"row":"col",o.select.has(x)&&"visible"]]),key:x,style:q(_(o.select.get(x)))},null,6))),128))]))}});const io=te(lo,[["__scopeId","data-v-792c43f5"]]),uo=Q({__name:"index",setup(e){return(s,n)=>{const h=U("n-watermark");return S(),X(h,{id:"go-edit-watermark",content:t(Tt),cross:"",selectable:"","font-size":16,"line-height":16,width:500,height:150,"x-offset":12,"y-offset":80,rotate:-15},null,8,["content"])}}});const po=te(uo,[["__scopeId","data-v-15e7d440"]]),pt=e=>(Le("data-v-649acbea"),e=e(),Me(),e),ho=pt(()=>D("div",{class:"select-background"},null,-1)),fo=pt(()=>D("div",{class:"select-border"},null,-1)),go=[ho,fo],_o=Q({__name:"index",setup(e){ve(i=>({"4898c5de":t(_)}));const s=me(),n=oe(),{isSelect:h,scale:o}=ke(n.getEditCanvas),_=$(()=>s.getAppTheme),p=G();return ce(()=>n.getMousePosition,i=>{if(!h.value)return;const{startX:d,startY:u,x:f,y:a}=i,r={zIndex:Je,x:0,y:0,w:0,h:0,offsetX:0,offsetY:0};f>d&&a>u?(r.x=d,r.y=u,r.w=Math.round((f-d)/o.value),r.h=Math.round((a-u)/o.value)):f>d&&a<u?(r.x=d,r.w=Math.round((f-d)/o.value),r.h=Math.round((u-a)/o.value),r.y=u-r.h):f<d&&a>u?(r.y=u,r.w=Math.round((d-f)/o.value),r.h=Math.round((a-u)/o.value),r.x=d-r.w):(r.w=Math.round((d-f)/o.value),r.h=Math.round((u-a)/o.value),r.x=d-r.w,r.y=u-r.h),p.value=A(A({},Ee(r,Je)),le(r))},{deep:!0}),(i,d)=>t(h)?(S(),Y("div",{key:0,class:"go-edit-select",style:q(p.value)},go,4)):be("",!0)}});const vo=te(_o,[["__scopeId","data-v-649acbea"]]),mo=Q({__name:"index",setup(e){const s=oe(),{getEditCanvasConfig:n,getEditCanvas:h}=ke(s),o=$(()=>({w:n.value.width,h:n.value.height})),_=$(()=>{const i={transform:`scale(${h.value.scale})`};return A(A({},le(o.value)),i)}),p=$(()=>{const i=h.value.isCreate&&{"z-index":99999};return A(A({},le(o.value)),i)});return(i,d)=>(S(),Y("div",{class:"go-edit-range go-transition",style:q(t(_)),onMousedown:d[0]||(d[0]=u=>t(eo)(u,void 0))},[Ge(i.$slots,"default",{},void 0,!0),w(t(po)),w(t(io)),w(t(vo)),D("div",{class:"go-edit-range-model",style:q(t(p))},null,4)],36))}});const Co=te(mo,[["__scopeId","data-v-78e41de7"]]),yo={class:"go-sketch-rule"},So=Q({__name:"index",setup(e){ve(y=>({"9d05dca8":t(O),"47efd952":t(E),"591bffa9":r.value}));const s=oe(),n=lt(),h=me(),o=20;let _=[0,0],p=[0,0];const i=G(),d=G(!0),u=G(),f=G(),a=G(!1),r=G("auto"),{width:l,height:c}=ke(s.getEditCanvasConfig),g=G(0),x=G(0),L=Ke({h:[],v:[]}),C=$(()=>s.getEditCanvas.scale),E=$(()=>`${c.value*2}px`),k=$(()=>h.getDarkTheme?{bgColor:"#18181c",longfgColor:"#4d4d4d",shortfgColor:"#4d4d4d",fontColor:"#4d4d4d",shadowColor:"#18181c",borderColor:"#18181c",cornerActiveColor:"#18181c"}:{}),O=$(()=>h.getAppTheme),K=y=>{if(y.ctrlKey||y.metaKey){y.preventDefault();let b=C.value;if(y.wheelDelta>=0&&C.value<2){b=C.value+.05,s.setScale(b);return}y.wheelDelta<0&&C.value>.1&&(b=C.value-.05,s.setScale(b))}},ee=()=>{if(!i.value)return;const y=i.value.getBoundingClientRect(),b=u.value.getBoundingClientRect();g.value=(y.left+o-b.left)/C.value,x.value=(y.top+o-b.top)/C.value},P=y=>{var W,j;if(y.preventDefault(),y.stopPropagation(),y.which==2)a.value=!0;else if(!((W=window.$KeyboardActive)!=null&&W.space))return;(j=document.activeElement)==null||j.blur();const b=y.pageX,F=y.pageY,R=et(window,"mousemove",J=>{const We=J.pageX-b,ft=J.pageY-F,[De,Ce]=_,[Ie,ye]=p;_=[Ce,We],p=[ye,ft],i.value.scrollLeft-=Ce>De?Math.abs(Ce-De):-Math.abs(Ce-De),i.value.scrollTop-=ye>Ie?Math.abs(ye-Ie):-Math.abs(ye-Ie)}),$e=et(window,"mouseup",()=>{R(),$e(),_=[0,0],p=[0,0],a.value=!1})},v=()=>{const y=document.getElementById("go-chart-edit-layout");return y?{height:y.clientHeight-20,width:y.clientWidth-20}:{width:l.value,height:c.value}},I=ct(()=>{d.value=!1,setTimeout(()=>{d.value=!0},10)},20),H=()=>{const{width:y,height:b}=f.value.getBoundingClientRect(),{width:F,height:R}=v();i.value.scrollLeft=y/2-F/2,i.value.scrollTop=b/2-R/2};return ce(()=>h.getDarkTheme,()=>{I()}),ce(()=>C.value,(y,b)=>{b!==y&&n.getRePositionCanvas?(n.setItemUnHandle(it.RE_POSITION_CANVAS,!1),ee(),setTimeout(()=>{H(),I()},400)):I()}),ce(()=>a.value,y=>{r.value=y?"grab":"auto"}),Ne(()=>{i.value&&(i.value.addEventListener("wheel",K,{passive:!1}),H())}),st(()=>{i.value&&i.value.removeEventListener("wheel",K)}),window.onKeySpacePressHold=y=>{a.value=y},(y,b)=>{const F=U("sketch-rule");return S(),Y("div",yo,[d.value?(S(),X(F,{key:0,thick:o,scale:t(C),width:v().width,height:v().height,startX:g.value,startY:x.value,lines:L,palette:t(k)},null,8,["scale","width","height","startX","startY","lines","palette"])):be("",!0),D("div",{ref_key:"$app",ref:i,class:"edit-screens",onScroll:ee},[D("div",{ref_key:"$container",ref:f,class:"edit-screen-container",style:q({width:t(l)*2+"px"})},[D("div",{ref_key:"refSketchRuleBox",ref:u,class:"canvas",onMousedown:P,style:q({marginLeft:"-"+(v().width/2-25)+"px"})},[D("div",{style:q({pointerEvents:a.value?"none":"auto"})},[Ge(y.$slots,"default",{},void 0,!0)],4)],36)],4)],544)])}}});const To=te(So,[["__scopeId","data-v-cd5bd112"]]),Ae={[M.ADD]:"新增",[M.DELETE]:"删除",[M.UPDATE]:"更新",[M.MOVE]:"移动",[M.PASTE]:"粘贴",[M.COPY]:"复制",[M.CUT]:"剪切",[M.TOP]:"置顶",[M.BOTTOM]:"置底",[M.UP]:"上移",[M.DOWN]:"下移",[M.GROUP]:"成组",[M.UN_GROUP]:"解组",[M.LOCK]:"锁定",[M.UNLOCK]:"解锁",[M.HIDE]:"隐藏",[M.SHOW]:"显示",[Te.CANVAS]:"画布初始化"};var xo=Array.prototype,wo=xo.reverse;function Eo(e){return e==null?e:wo.call(e)}var bo=Eo;const ko=xt(bo),ht=e=>(Le("data-v-5a6ac549"),e=e(),Me(),e),Lo={class:"go-flex-items-center"},Mo=ht(()=>D("span",{class:"btn-text"},"历史记录",-1)),$o={class:"history-list-box"},Do=["title"],Io=ht(()=>D("div",{class:"popover-modal"},null,-1)),Ro=Q({__name:"index",setup(e){const{DesktopOutlineIcon:s,PencilIcon:n,TrashIcon:h,CopyIcon:o,LayersIcon:_,DuplicateIcon:p,HelpOutlineIcon:i,LockClosedOutlineIcon:d,LockOpenOutlineIcon:u,EyeOffOutlineIcon:f,EyeOutlineIcon:a}=pe.ionicons5,{StackedMoveIcon:r,Carbon3DCursorIcon:l,Carbon3DSoftwareIcon:c}=pe.carbon,g=Xt(),x=E=>{if(E.targetType===Te.CANVAS)return s;switch(E.actionType){case M.UPDATE:return n;case M.DELETE:return h;case M.PASTE:return o;case M.TOP:return _;case M.BOTTOM:return _;case M.UP:return _;case M.DOWN:return _;case M.MOVE:return r;case M.ADD:return p;case M.GROUP:return l;case M.UN_GROUP:return c;case M.LOCK:return d;case M.UNLOCK:return u;case M.HIDE:return f;case M.SHOW:return a;default:return n}},L=E=>{if(E.targetType===Te.CANVAS)return Ae[Te.CANVAS];if(E.actionType===M.GROUP||E.actionType===M.UN_GROUP)return`${Ae[E.actionType]}`;if(E.historyData.length)return`${Ae[E.actionType]} - ${E.historyData[0].chartConfig.title}`},C=$(()=>{const k=g.getBackStack.map(O=>({label:L(O),icon:x(O)}));return ko(k.filter(O=>O.label))});return(E,k)=>{const O=U("n-button"),K=U("n-icon"),ee=U("n-text"),P=U("n-scrollbar"),v=U("n-popover"),I=U("n-tooltip");return S(),Y("div",Lo,[w(v,{class:"edit-history-popover","show-arrow":!1,size:"small",trigger:"click",placement:"top-start"},{trigger:T(()=>[w(O,{class:"mr-10",secondary:"",size:"small",disabled:t(C).length===0},{default:T(()=>[Mo]),_:1},8,["disabled"])]),default:T(()=>[D("div",$o,[w(P,{style:{"max-height":"500px"}},{default:T(()=>[(S(!0),Y(ae,null,ie(t(C),(H,y)=>(S(),Y("div",{class:"list-item go-flex-items-center go-ellipsis-1",key:y,title:H.label},[w(K,{class:"item-icon",size:"16",depth:2,component:H.icon},null,8,["component"]),w(ee,{depth:"2"},{default:T(()=>[_e(se(H.label),1)]),_:2},1024)],8,Do))),128))]),_:1}),Io])]),_:1}),w(I,{trigger:"hover"},{trigger:T(()=>[w(K,{size:"21",depth:3},{default:T(()=>[w(t(i))]),_:1})]),default:T(()=>[D("span",null,"最多只保留"+se(t(wt))+"条记录",1)]),_:1})])}}});const Oo=te(Ro,[["__scopeId","data-v-5a6ac549"]]),ze=e=>(Le("data-v-f19379a6"),e=e(),Me(),e),Uo=ze(()=>D("th",null,"功能",-1)),Ho=ze(()=>D("th",null,"Win 快捷键",-1)),Ao=ze(()=>D("span",null," Mac 快捷键 ",-1)),Po={key:0},Yo={key:1},Xo=Q({__name:"ShortcutKeyModal",props:{modelShow:Boolean},emits:["update:modelShow"],setup(e,{emit:s}){const n=e,{CloseIcon:h}=pe.ionicons5,o=G(!1);ce(()=>n.modelShow,i=>{o.value=i});const _=[{label:"拖拽画布",win:`${B.SPACE.toUpperCase()} + 🖱️ `,mac:`${z.SPACE.toUpperCase()} + 🖱️ `,macSource:!0},{label:"向 上/右/下/左 移动",win:`${B.CTRL.toUpperCase()} + ↑ 或 → 或 ↓ 或 ←`,mac:`${z.CTRL.toUpperCase()} + ↑ `},{label:"锁定",win:`${B.CTRL.toUpperCase()} + L `,mac:`${z.CTRL.toUpperCase()} + L `},{label:"解锁",win:`${B.CTRL.toUpperCase()} + ${B.SHIFT.toUpperCase()}+ L `,mac:`${z.CTRL.toUpperCase()} + ${z.SHIFT.toUpperCase()} + L `},{label:"展示",win:`${B.CTRL.toUpperCase()} + H `,mac:`${z.CTRL.toUpperCase()} + H `},{label:"隐藏",win:`${B.CTRL.toUpperCase()} + ${B.SHIFT.toUpperCase()} + H `,mac:`${z.CTRL.toUpperCase()} + ${z.SHIFT.toUpperCase()} + H `},{label:"删除",win:"Delete".toUpperCase(),mac:`${z.CTRL.toUpperCase()} + Backspace `},{label:"复制",win:`${B.CTRL.toUpperCase()} + C `,mac:`${z.CTRL.toUpperCase()} + C `},{label:"剪切",win:`${B.CTRL.toUpperCase()} + X `,mac:`${z.CTRL.toUpperCase()} + X `},{label:"粘贴",win:`${B.CTRL.toUpperCase()} + V `,mac:`${z.CTRL.toUpperCase()} + V `},{label:"后退",win:`${B.CTRL.toUpperCase()} + Z `,mac:`${z.CTRL.toUpperCase()} + Z `},{label:"前进",win:`${B.CTRL.toUpperCase()} + ${B.SHIFT.toUpperCase()} + Z `,mac:`${z.CTRL.toUpperCase()} + ${z.SHIFT.toUpperCase()} + Z `},{label:"多选",win:`${B.CTRL.toUpperCase()} + 🖱️ `,mac:`${z.CTRL_SOURCE_KEY.toUpperCase()} + 🖱️ `},{label:"创建分组",win:`${B.CTRL.toUpperCase()} + G / 🖱️ `,mac:`${z.CTRL_SOURCE_KEY.toUpperCase()} + G / 🖱️`},{label:"解除分组",win:`${B.CTRL.toUpperCase()} + ${B.SHIFT.toUpperCase()} + G `,mac:`${z.CTRL_SOURCE_KEY.toUpperCase()} + ${B.SHIFT.toUpperCase()} + G `}],p=()=>{s("update:modelShow",!1)};return(i,d)=>{const u=U("n-icon"),f=U("n-space"),a=U("n-gradient-text"),r=U("n-table"),l=U("n-modal");return S(),X(l,{show:o.value,"onUpdate:show":d[0]||(d[0]=c=>o.value=c),"mask-closable":!0,onAfterLeave:p},{default:T(()=>[w(r,{class:"model-content",bordered:!1,"single-line":!1},{default:T(()=>[D("thead",null,[D("tr",null,[Uo,Ho,D("th",null,[w(f,{justify:"space-between"},{default:T(()=>[Ao,w(u,{size:"20",class:"go-cursor-pointer",onClick:p},{default:T(()=>[w(t(h))]),_:1})]),_:1})])])]),D("tbody",null,[(S(),Y(ae,null,ie(_,(c,g)=>D("tr",{key:g},[D("td",null,se(c.label),1),D("td",null,se(c.win),1),c.macSource?(S(),Y("td",Po,se(c.mac),1)):(S(),Y("td",Yo,[w(a,{size:22},{default:T(()=>[_e(se(c.mac.substr(0,1)),1)]),_:2},1024),_e(" + "+se(c.mac.substr(3)),1)]))])),64))])]),_:1})]),_:1},8,["show"])}}});const Bo=te(Xo,[["__scopeId","data-v-f19379a6"]]),No=e=>(Le("data-v-f48c63d8"),e=e(),Me(),e),Go={class:"go-edit-shortcut"},Ko=No(()=>D("span",null,"快捷键",-1)),Fo=Q({__name:"index",setup(e){const{DicomOverlayIcon:s}=pe.carbon,n=G(!1);return(h,o)=>{const _=U("n-icon"),p=U("n-button"),i=U("n-tooltip");return S(),Y("div",Go,[w(Bo,{modelShow:n.value,"onUpdate:modelShow":o[0]||(o[0]=d=>n.value=d)},null,8,["modelShow"]),w(i,{trigger:"hover"},{trigger:T(()=>[w(p,{class:"scale-btn",secondary:"",size:"small",onClick:o[1]||(o[1]=d=>n.value=!0)},{default:T(()=>[w(_,{size:"21",depth:3},{default:T(()=>[w(t(s))]),_:1})]),_:1})]),default:T(()=>[Ko]),_:1})])}}});const zo=te(Fo,[["__scopeId","data-v-f48c63d8"]]),Wo={class:"go-edit-bottom"},Vo=Q({__name:"index",setup(e){ve(C=>({"208a1d30":o.value}));const{LockClosedOutlineIcon:s,LockOpenOutlineIcon:n}=pe.ionicons5,h=me(),o=G(h.getAppTheme),_=lt(),p=oe(),{lockScale:i,scale:d}=ke(p.getEditCanvas),u=G(null);let f=[{label:"200%",value:200},{label:"150%",value:150},{label:"100%",value:100},{label:"50%",value:50},{label:"自适应",value:0}];const a=G(""),r=C=>{var E;if((E=u.value)==null||E.blur(),C===0){_.setItemUnHandle(it.RE_POSITION_CANVAS,!0),p.computedScale();return}p.setScale(C/100)},l=()=>{p.setEditCanvas(V.LOCK_SCALE,!i.value)},c=G(100),g=C=>`${C}%`,x=C=>{p.setScale(C/100)},L=Ke({100:""});return Et(()=>{const C=(d.value*100).toFixed(0);a.value=`${C}%`,c.value=parseInt(C)}),(C,E)=>{const k=U("n-text"),O=U("n-space"),K=U("n-select"),ee=U("n-icon"),P=U("n-button"),v=U("n-tooltip"),I=U("n-slider");return S(),Y("div",Wo,[w(O,null,{default:T(()=>[w(t(Oo)),w(k,{id:"keyboard-dress-show",depth:"3"})]),_:1}),w(O,{class:"bottom-ri"},{default:T(()=>[w(zo),w(K,{ref_key:"selectInstRef",ref:u,class:"scale-btn",value:a.value,"onUpdate:value":[E[0]||(E[0]=H=>a.value=H),r],size:"mini",disabled:t(i),options:t(f)},null,8,["value","disabled","options"]),w(v,{trigger:"hover"},{trigger:T(()=>[w(P,{onClick:l,text:""},{default:T(()=>[w(ee,{class:ne(["lock-icon",{color:t(i)}]),size:"18",depth:2},{default:T(()=>[t(i)?(S(),X(t(s),{key:0})):(S(),X(t(n),{key:1}))]),_:1},8,["class"])]),_:1})]),default:T(()=>[D("span",null,se(t(i)?"解锁":"锁定")+"当前比例",1)]),_:1}),w(I,{class:"scale-slider",value:c.value,"onUpdate:value":[E[1]||(E[1]=H=>c.value=H),x],"default-value":50,min:10,max:200,step:5,"format-tooltip":g,disabled:t(i),marks:L},null,8,["value","disabled","marks"])]),_:1})])}}});const qo=te(Vo,[["__scopeId","data-v-34f94d2f"]]),ge=oe(),jo=()=>{ge.setTargetSelectChart(void 0),bt(kt(ge.getStorageInfo()||[]),void 0,"json");const e=document.querySelector(".go-edit-range"),s=document.getElementById("go-edit-watermark");if(!e||!s){window.$message.error("导出失败！");return}const n=ge.getEditCanvas.scale;ge.setScale(1,!0),s.style.display="block",setTimeout(()=>{Lt(e,()=>{s&&(s.style.display="none"),ge.setScale(n,!0)})},600)},Jo=()=>{const e=G(),{updateComponent:s}=qt();return{importUploadFileListRef:e,importBeforeUpload:({file:o})=>{e.value=[];const _=o.file.type;return _!==tt.JSON&&_!==tt.TXT?(window.$message.warning("仅支持上传 【JSON】 格式文件，请重新上传！"),!1):!0},importCustomRequest:o=>{const{file:_}=o;Mt(()=>{_.file?$t(_.file).then(p=>{zt({message:"请选择导入方式:",positiveText:"新增（可撤回）",negativeText:"覆盖（不可撤回）",negativeButtonProps:{type:"info",ghost:!1},onPositiveCallback:()=>ue(void 0,null,function*(){try{p=Pe(p),yield s(p,!1,!0),window.$message.success("导入成功！")}catch(i){console.log(i),window.$message.error("组件导入失败，请检查文件完整性!")}}),onNegativeCallback:()=>ue(void 0,null,function*(){try{p=Pe(p),yield s(p,!0,!0),window.$message.success("导入成功！")}catch(i){console.log(i),window.$message.error("组件导入失败，请检查文件完整性!")}})})}):window.$message.error("导入失败，请检查数据或联系管理员！")})}}};var re=(e=>(e.BUTTON="button",e.IMPORTUPLOAD="importUpload",e))(re||{});const Zo={class:"btn-item"},Qo=Q({__name:"index",setup(e){const{DownloadIcon:s,ShareIcon:n,PawIcon:h,SettingsSharpIcon:o,CreateIcon:_}=pe.ionicons5,p=rt(),i=oe();Dt(),jt();let d=null;const u=G(!1),f=G(!0),a=G(!0),{importUploadFileListRef:r,importCustomRequest:l,importBeforeUpload:c}=Jo(),g=$(()=>p.getChartToolsStatus===Ze.ASIDE),x=$(()=>p.getChartToolsStatusHide),L=$(()=>f.value&&x.value),C=$(()=>{if(!g.value)return ee;const P=[];return ee.map(v=>{P.unshift(v)}),P}),E=()=>{d=setTimeout(()=>{f.value&&(f.value=!1,a.value=!0)},200),setTimeout(()=>{a.value=!1},400)},k=()=>{clearTimeout(d),f.value||(f.value=!0)},O=()=>{window.$message.warning("请通过顶部【同步内容】按钮同步最新数据！"),i.setEditCanvas(V.IS_CODE_EDIT,!0),setTimeout(()=>{const P=Rt(Ot.CHART_EDIT_NAME,"href");if(!P)return;const v=Ut();K(v),Ht(P,[v],void 0,!0)},2e3)},K=P=>{const v=i.getStorageInfo(),I=At(Se.GO_CHART_STORAGE_LIST)||[];if(I!=null&&I.length){const H=I.findIndex(y=>y.id===P);H!==-1?(I.splice(H,1,he(A({},v),{id:P})),He(Se.GO_CHART_STORAGE_LIST,I)):(I.push(he(A({},v),{id:P})),He(Se.GO_CHART_STORAGE_LIST,I))}else He(Se.GO_CHART_STORAGE_LIST,[he(A({},v),{id:P})])},ee=[{key:"import",type:re.IMPORTUPLOAD,name:"导入",icon:n},{key:"export",type:re.BUTTON,name:"导出",icon:s,handle:jo},{key:"edit",type:re.BUTTON,name:"编辑",icon:_,handle:O},{key:"setting",type:re.BUTTON,name:"设置",icon:o,handle:()=>{u.value=!0}}];return(P,v)=>{const I=U("n-icon"),H=U("n-text"),y=U("n-button"),b=U("n-upload"),F=U("n-tooltip");return S(),Y(ae,null,[D("div",{class:ne(["go-chart-edit-tools",[t(p).getChartToolsStatus,t(L)?"isMini":"unMini"]]),onClick:v[1]||(v[1]=R=>f.value&&(f.value=!1)),onMouseenter:E,onMouseleave:k},[Oe(w(I,{class:"asideLogo",size:"22"},{default:T(()=>[w(t(h))]),_:1},512),[[Ue,t(p).getChartToolsStatus===t(Ze).ASIDE&&t(L)]]),(S(!0),Y(ae,null,ie(t(C),(R,$e)=>(S(),X(F,{key:R.key,disabled:!t(g)||t(x)&&a.value,trigger:"hover",placement:"left"},{trigger:T(()=>[D("div",Zo,[R.type===t(re).BUTTON?(S(),X(y,{key:0,circle:t(g),secondary:"",onClick:R.handle},{icon:T(()=>[t(g)?(S(),X(I,{key:0,size:"22"},{default:T(()=>[(S(),X(de(R.icon)))]),_:2},1024)):(S(),X(de(R.icon),{key:1}))]),default:T(()=>[Oe(w(H,{depth:"3"},{default:T(()=>[_e(se(R.name),1)]),_:2},1536),[[Ue,!t(g)]])]),_:2},1032,["circle","onClick"])):R.type===t(re).IMPORTUPLOAD?(S(),X(b,{key:1,"file-list":t(r),"onUpdate:file-list":v[0]||(v[0]=W=>It(r)?r.value=W:null),"show-file-list":!1,customRequest:t(l),onBeforeUpload:t(c)},{default:T(()=>[w(y,{circle:t(g),secondary:""},{icon:T(()=>[t(g)?(S(),X(I,{key:0,size:"22"},{default:T(()=>[(S(),X(de(R.icon)))]),_:2},1024)):(S(),X(de(R.icon),{key:1}))]),default:T(()=>[Oe(w(H,{depth:"3"},{default:T(()=>[_e(se(R.name),1)]),_:2},1536),[[Ue,!t(g)]])]),_:2},1032,["circle"])]),_:2},1032,["file-list","customRequest","onBeforeUpload"])):be("",!0)])]),default:T(()=>[D("span",null,se(R.name),1)]),_:2},1032,["disabled"]))),128))],34),w(t(Vt),{modelShow:u.value,"onUpdate:modelShow":v[2]||(v[2]=R=>u.value=R)},null,8,["modelShow"])],64)}}});const es=te(Qo,[["__scopeId","data-v-705dcb7b"]]),ts=Q({__name:"index",setup(e){const s=oe(),{handleContextMenu:n}=Fe();Pt(Nt,null),Jt(()=>ue(this,null,function*(){}));const{mouseenterHandle:h,mouseleaveHandle:o,mousedownHandle:_,mouseClickHandle:p}=dt(),i=(a,r,l)=>{if(s.getTargetChart.selectId.length>1)return r.filter(g=>[Z.GROUP,Z.DELETE].includes(g.key));const c=[];return l.status.lock?c.push(Z.LOCK):c.push(Z.UNLOCK),l.status.hide?c.push(Z.HIDE):c.push(Z.SHOW),a.filter(g=>!c.includes(g.key))},d=$(()=>s.getEditCanvasConfig.chartThemeSetting),u=$(()=>nt(s.getEditCanvasConfig.chartCustomThemeColorInfo)[s.getEditCanvasConfig.chartThemeColor]);$(()=>s.getEditCanvasConfig.filterShow);const f=$(()=>{const a=s.getEditCanvasConfig.background,r=s.getEditCanvasConfig.backgroundImage,g=s.getEditCanvasConfig.selectColor?{background:a||void 0}:{background:`url(${r}) no-repeat center center / cover !important`};return he(A({},g),{width:"inherit",height:"inherit"})});return Ne(()=>{Gt()}),(a,r)=>(S(),X(t(Wt),{id:"go-chart-edit-layout",flex:!0,showTop:!1,showBottom:!0,depth:1,xScroll:!0,disabledScroll:!0,onMousedown:t(ut),onDrop:t(Qt),onDragover:t(ot),onDragenter:t(ot)},{aside:T(()=>[w(t(es))]),bottom:T(()=>[w(t(qo))]),default:T(()=>[w(t(To),null,{default:T(()=>[D("div",{id:"go-chart-edit-content",onContextmenu:r[0]||(r[0]=(...l)=>t(n)&&t(n)(...l))},[w(t(Co),null,{default:T(()=>[D("div",{style:q(A(A({},t(we)(t(s).getEditCanvasConfig)),t(f)))},[(S(!0),Y(ae,null,ie(t(s).getComponentList,(l,c)=>(S(),Y("div",{key:l.id},[l.isGroup?(S(),X(t(ro),{key:0,groupData:l,groupIndex:c},null,8,["groupData","groupIndex"])):(S(),X(t(Be),{key:1,"data-id":l.id,index:c,style:q(A(A({},t(Ee)(l.attr,c)),t(at)(l.styles))),item:l,onClick:g=>t(p)(g,l),onMousedown:g=>t(_)(g,l),onMouseenter:g=>t(h)(g,l),onMouseleave:g=>t(o)(g,l),onContextmenu:g=>t(n)(g,l,i)},{default:T(()=>[(S(),X(de(l.chartConfig.chartKey),{class:ne(["edit-content-chart",t(Ye)(l.styles.animations)]),chartConfig:l,themeSetting:t(d),themeColor:t(u),style:q(A(A(A({},t(le)(l.attr)),t(we)(l.styles)),t(Xe)(l.styles)))},null,8,["class","chartConfig","themeSetting","themeColor","style"]))]),_:2},1032,["data-id","index","style","item","onClick","onMousedown","onMouseenter","onMouseleave","onContextmenu"]))]))),128))],4)]),_:1})],32)]),_:1})]),_:1},8,["onMousedown","onDrop","onDragover","onDragenter"]))}});const ws=te(ts,[["__scopeId","data-v-c72cd623"]]);export{ws as default};
