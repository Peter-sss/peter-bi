var m=Object.defineProperty,c=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var i=(a,t,o)=>t in a?m(a,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[t]=o,r=(a,t)=>{for(var o in t||(t={}))C.call(t,o)&&i(a,o,t[o]);if(n)for(var o of n(t))u.call(t,o)&&i(a,o,t[o]);return a},s=(a,t)=>c(a,f(t));var e=(a,t,o)=>(i(a,typeof t!="symbol"?t+"":t,o),o);import{aV as E,ad as l,cK as T}from"./index-f1b62783.js";import{e as d}from"./chartEditStore-486ae2f4.js";import{x as p,y as g,z as A}from"./index-22e48ee0.js";import"./plugin-a824adf1.js";import"./icon-14375a60.js";import"./SettingItem-d0566dd6.js";/* empty css                                                                      */import"./SettingItemBox-6b455d4c.js";import"./CollapseItem.vue_vue_type_script_setup_true_lang-3590d83e.js";import"./index.esm.min-98f3d51a.js";import"./fileTypeEnum-21359a08.js";const I={[T]:A.DATA,selectValue:"1",dataset:[{label:"选项1",value:"1"},{label:"选项2",value:"2"},{label:"选项3",value:"3"}]};class O extends d{constructor(){super(...arguments);e(this,"key",p.key);e(this,"attr",s(r({},E),{w:260,h:32,zIndex:-1}));e(this,"chartConfig",l(p));e(this,"interactActions",g);e(this,"option",l(I))}}export{O as default,I as option};
