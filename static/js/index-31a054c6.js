var Z=Object.defineProperty;var N=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var j=(a,s,t)=>s in a?Z(a,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[s]=t,E=(a,s)=>{for(var t in s||(s={}))J.call(s,t)&&j(a,t,s[t]);if(N)for(var t of N(s))Q.call(s,t)&&j(a,t,s[t]);return a};var D=(a,s,t)=>new Promise((I,w)=>{var f=l=>{try{m(t.next(l))}catch(v){w(v)}},R=l=>{try{m(t.throw(l))}catch(v){w(v)}},m=l=>l.done?I(l.value):Promise.resolve(l.value).then(f,R);m((t=t.apply(a,s)).next())});import{d as X,j as k,a9 as V,C as Y,ba as ee,a2 as te,bb as oe,a as d,o as C,c as $,b as o,w as e,F as z,q as se,E as F,G as ne,n as ae,t as A,u as b,e as h,aN as re,R as ce,aa as ie,Z as x,N as le,bc as pe,ak as ue,al as S,aK as L,O as _e,h as de}from"./index-f1b62783.js";import{u as fe}from"./index-08a0b855.js";import{u as me,P as ve}from"./chartEditStore-486ae2f4.js";import{s as ye}from"./useSyncUpdate.hook-9977faaa.js";import{a as he}from"./project.api-a6799795.js";import{i as we}from"./icon-14375a60.js";import"./plugin-a824adf1.js";import"./useSync.hook-f803091a.js";import"./chartLayoutStore-ce407c49.js";import"./index-22e48ee0.js";import"./SettingItem-d0566dd6.js";/* empty css                                                                      */import"./SettingItemBox-6b455d4c.js";import"./CollapseItem.vue_vue_type_script_setup_true_lang-3590d83e.js";import"./index.esm.min-98f3d51a.js";import"./fileTypeEnum-21359a08.js";const ge=h("发布管理"),Ee=h(" 复制地址 "),Ce=h("关闭弹窗"),Se=X({__name:"index",setup(a){const{BrowsersOutlineIcon:s,SendIcon:t,AnalyticsIcon:I,CloseIcon:w}=we.ionicons5,f=me(),R=k(V()),{copy:m,isSupported:l}=fe({source:R}),v=Y(),y=k(!1),u=k(!1);ee(()=>{u.value=f.getProjectInfo.release||!1});const H=()=>{y.value=!1},U=()=>{const n=le(pe.CHART_PREVIEW_NAME,"href");if(!n)return;const{id:r}=v.params,c=typeof r=="string"?r:r[0],p=f.getStorageInfo(),i=ue(S.GO_CHART_STORAGE_LIST)||[];if(i!=null&&i.length){const g=i.findIndex(T=>T.id===c);g!==-1?(i.splice(g,1,E({id:c},p)),L(S.GO_CHART_STORAGE_LIST,i)):(i.push(E({id:c},p)),L(S.GO_CHART_STORAGE_LIST,i))}else L(S.GO_CHART_STORAGE_LIST,[E({id:c},p)]);_e(n,[c],void 0,!0)},P=()=>{y.value=!y.value},O=(n,r)=>{l?(m(),window.$message.success(n||"复制成功！")):window.$message.error(r||"复制失败！")},q=()=>D(this,null,function*(){const n=yield he({id:re(),state:u.value?-1:1});n&&n.code===ce.SUCCESS?(P(),u.value?window.$message.success("已取消发布"):O("发布成功！已复制地址到剪贴板~","发布成功！"),f.setProjectInfo(ve.RELEASE,!u.value)):ie()}),G=[{select:!0,title:()=>"同步内容",type:()=>"primary",icon:x(I),event:ye},{key:"preview",title:()=>"预览",type:()=>"default",icon:x(s),event:U},{key:"release",title:()=>u.value?"已发布":"发布",icon:x(t),type:()=>u.value?"primary":"default",event:P}],K=te(()=>{if(f.getEditCanvas.isCodeEdit)return G;const n=oe.cloneDeep(G);return n.shift(),n});return(n,r)=>{const c=d("n-button"),p=d("n-space"),i=d("n-h3"),g=d("n-icon"),T=d("n-alert"),B=d("n-list-item"),M=d("n-list"),W=d("n-modal");return C(),$(z,null,[o(p,{class:"go-mt-0",wrap:!1},{default:e(()=>[(C(!0),$(z,null,se(b(K),_=>(C(),F(c,{key:_.key,type:_.type(),ghost:"",onClick:_.event},{icon:e(()=>[(C(),F(ne(_.icon)))]),default:e(()=>[ae("span",null,A(_.title()),1)]),_:2},1032,["type","onClick"]))),128))]),_:1}),o(W,{show:y.value,"onUpdate:show":r[1]||(r[1]=_=>y.value=_),onAfterLeave:H},{default:e(()=>[o(M,{bordered:"",class:"go-system-setting"},{header:e(()=>[o(p,{justify:"space-between"},{default:e(()=>[o(i,{class:"go-mb-0"},{default:e(()=>[ge]),_:1}),o(g,{size:"20",class:"go-cursor-pointer",onClick:H},{default:e(()=>[o(b(w))]),_:1})]),_:1})]),default:e(()=>[o(B,null,{default:e(()=>[o(p,{size:10},{default:e(()=>[o(T,{"show-icon":!1,title:"预览地址：",type:"success"},{default:e(()=>[h(A(b(V)()),1)]),_:1}),o(p,{vertical:""},{default:e(()=>[o(c,{tertiary:"",type:"primary",onClick:r[0]||(r[0]=_=>O())},{default:e(()=>[Ee]),_:1}),o(c,{type:u.value?"warning":"primary",onClick:q},{default:e(()=>[h(A(u.value?"取消发布":"发布大屏"),1)]),_:1},8,["type"])]),_:1})]),_:1})]),_:1}),o(B,null,{default:e(()=>[o(p,{size:10},{default:e(()=>[o(c,{onClick:P},{default:e(()=>[Ce]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["show"])],64)}}});const $e=de(Se,[["__scopeId","data-v-4c768f3f"]]);export{$e as default};
