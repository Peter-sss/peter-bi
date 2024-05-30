import{cx as X,cA as ee,b0 as te,d as re,H as T,bB as x,a0 as ne,a2 as z,L as E,ba as B,m as ie,a3 as ae,Y as se,u as C,cB as oe,ae as ue,cC as _e}from"./index-f1b62783.js";const ce=(e,t,r)=>e=X({},ee(t,r),e),Le=(e,t)=>(e.backgroundColor="rgba(0,0,0,0)",ce(e,te,t)),Ae=(e,t,r=!0)=>{if(!e)return;const i=e.getOption();i.dataset=null,e.setOption(t,{notMerge:r})};var j=null;function de(e){return j||(j=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){return setTimeout(t,16)}).bind(window)),j(e)}var H=null;function fe(e){H||(H=(window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||function(t){clearTimeout(t)}).bind(window)),H(e)}function le(e){var t=document.createElement("style");return t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),(document.querySelector("head")||document.body).appendChild(t),t}function L(e,t){t===void 0&&(t={});var r=document.createElement(e);return Object.keys(t).forEach(function(i){r[i]=t[i]}),r}function I(e,t,r){var i=window.getComputedStyle(e,r||null)||{display:"none"};return i[t]}function R(e){if(!document.documentElement.contains(e))return{detached:!0,rendered:!1};for(var t=e;t!==document;){if(I(t,"display")==="none")return{detached:!1,rendered:!1};t=t.parentNode}return{detached:!1,rendered:!0}}var ve='.resize-triggers{visibility:hidden;opacity:0;pointer-events:none}.resize-contract-trigger,.resize-contract-trigger:before,.resize-expand-trigger,.resize-triggers{content:"";position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden}.resize-contract-trigger,.resize-expand-trigger{background:#eee;overflow:auto}.resize-contract-trigger:before{width:200%;height:200%}',k=0,A=null;function he(e,t){e.__resize_mutation_handler__||(e.__resize_mutation_handler__=ze.bind(e));var r=e.__resize_listeners__;if(!r){if(e.__resize_listeners__=[],window.ResizeObserver){var i=e.offsetWidth,a=e.offsetHeight,n=new ResizeObserver(function(){!e.__resize_observer_triggered__&&(e.__resize_observer_triggered__=!0,e.offsetWidth===i&&e.offsetHeight===a)||S(e)}),_=R(e),g=_.detached,f=_.rendered;e.__resize_observer_triggered__=g===!1&&f===!1,e.__resize_observer__=n,n.observe(e)}else if(e.attachEvent&&e.addEventListener)e.__resize_legacy_resize_handler__=function(){S(e)},e.attachEvent("onresize",e.__resize_legacy_resize_handler__),document.addEventListener("DOMSubtreeModified",e.__resize_mutation_handler__);else if(k||(A=le(ve)),be(e),e.__resize_rendered__=R(e).rendered,window.MutationObserver){var l=new MutationObserver(e.__resize_mutation_handler__);l.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0}),e.__resize_mutation_observer__=l}}e.__resize_listeners__.push(t),k++}function ge(e,t){var r=e.__resize_listeners__;if(r){if(t&&r.splice(r.indexOf(t),1),!r.length||!t){if(e.detachEvent&&e.removeEventListener){e.detachEvent("onresize",e.__resize_legacy_resize_handler__),document.removeEventListener("DOMSubtreeModified",e.__resize_mutation_handler__);return}e.__resize_observer__?(e.__resize_observer__.unobserve(e),e.__resize_observer__.disconnect(),e.__resize_observer__=null):(e.__resize_mutation_observer__&&(e.__resize_mutation_observer__.disconnect(),e.__resize_mutation_observer__=null),e.removeEventListener("scroll",D),e.removeChild(e.__resize_triggers__.triggers),e.__resize_triggers__=null),e.__resize_listeners__=null}!--k&&A&&A.parentNode.removeChild(A)}}function pe(e){var t=e.__resize_last__,r=t.width,i=t.height,a=e.offsetWidth,n=e.offsetHeight;return a!==r||n!==i?{width:a,height:n}:null}function ze(){var e=R(this),t=e.rendered,r=e.detached;t!==this.__resize_rendered__&&(!r&&this.__resize_triggers__&&(F(this),this.addEventListener("scroll",D,!0)),this.__resize_rendered__=t,S(this))}function D(){var e=this;F(this),this.__resize_raf__&&fe(this.__resize_raf__),this.__resize_raf__=de(function(){var t=pe(e);t&&(e.__resize_last__=t,S(e))})}function S(e){!e||!e.__resize_listeners__||e.__resize_listeners__.forEach(function(t){t.call(e,e)})}function be(e){var t=I(e,"position");(!t||t==="static")&&(e.style.position="relative"),e.__resize_old_position__=t,e.__resize_last__={};var r=L("div",{className:"resize-triggers"}),i=L("div",{className:"resize-expand-trigger"}),a=L("div"),n=L("div",{className:"resize-contract-trigger"});i.appendChild(a),r.appendChild(i),r.appendChild(n),e.appendChild(r),e.__resize_triggers__={triggers:r,expand:i,expandChild:a,contract:n},F(e),e.addEventListener("scroll",D,!0),e.__resize_last__={width:e.offsetWidth,height:e.offsetHeight}}function F(e){var t=e.__resize_triggers__,r=t.expand,i=t.expandChild,a=t.contract,n=a.scrollWidth,_=a.scrollHeight,g=r.offsetWidth,f=r.offsetHeight,l=r.scrollWidth,d=r.scrollHeight;a.scrollLeft=n,a.scrollTop=_,i.style.width=g+1+"px",i.style.height=f+1+"px",r.scrollLeft=l,r.scrollTop=d}var p=function(){return(p=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},we=["getWidth","getHeight","getDom","getOption","resize","dispatchAction","convertToPixel","convertFromPixel","containPixel","getDataURL","getConnectedDataURL","appendData","clear","isDisposed","dispose"];function ye(e){return t=Object.create(null),we.forEach(function(r){t[r]=function(i){return function(){for(var a=[],n=0;n<arguments.length;n++)a[n]=arguments[n];if(!e.value)throw new Error("ECharts is not initialized yet.");return e.value[i].apply(e.value,a)}}(r)}),t;var t}var Oe={autoresize:Boolean},me={loading:Boolean,loadingOptions:Object},P=[],b=[];(function(e,t){if(e&&typeof document!="undefined"){var r,i=t.prepend===!0?"prepend":"append",a=t.singleTag===!0,n=typeof t.container=="string"?document.querySelector(t.container):document.getElementsByTagName("head")[0];if(a){var _=P.indexOf(n);_===-1&&(_=P.push(n)-1,b[_]={}),r=b[_]&&b[_][i]?b[_][i]:b[_][i]=g()}else r=g();e.charCodeAt(0)===65279&&(e=e.substring(1)),r.styleSheet?r.styleSheet.cssText+=e:r.appendChild(document.createTextNode(e))}function g(){var f=document.createElement("style");if(f.setAttribute("type","text/css"),t.attributes)for(var l=Object.keys(t.attributes),d=0;d<l.length;d++)f.setAttribute(l[d],t.attributes[l[d]]);var w=i==="prepend"?"afterbegin":"beforeend";return n.insertAdjacentElement(w,f),f}})("x-vue-echarts{display:block;width:100%;height:100%}",{});var xe=/^on[^a-z]/,Ee=function(e){return xe.test(e)},Se=re({name:"echarts",props:p(p({option:Object,theme:{type:[Object,String]},initOptions:Object,updateOptions:Object,group:String,manualUpdate:Boolean},Oe),me),inheritAttrs:!1,setup:function(e,t){var r=t.attrs,i=t.listeners,a=T(),n=T(),_=T(),g=x("ecTheme",null),f=x("ecInitOptions",null),l=x("ecUpdateOptions",null),d=ne(e),w=d.autoresize,$=d.manualUpdate,J=d.loading,Y=d.loadingOptions,Z=z(function(){return _.value||e.option||null}),U=z(function(){return e.theme||C(g)||{}}),M=z(function(){return e.initOptions||C(f)||{}}),N=z(function(){return e.updateOptions||C(l)||{}}),G=z(function(){return function(c){var s={};for(var u in c)Ee(u)||(s[u]=c[u]);return s}(r)});function y(c){if(a.value){var s=n.value=oe(a.value,U.value,M.value);e.group&&(s.group=e.group);var u=i;u||(u={},Object.keys(r).filter(function(o){return o.indexOf("on")===0&&o.length>2}).forEach(function(o){var v=o.charAt(2).toLowerCase()+o.slice(3);u[v]=r[o]})),Object.keys(u).forEach(function(o){var v=u[o];v&&(o.indexOf("zr:")===0?s.getZr().on(o.slice(3).toLowerCase(),v):s.on(o.toLowerCase(),v))}),w.value?ue(function(){s&&!s.isDisposed()&&s.resize(),h()}):h()}function h(){var o=c||Z.value;o&&s.setOption(o,N.value)}}function W(){n.value&&(n.value.dispose(),n.value=void 0)}var O=null;E($,function(c){typeof O=="function"&&(O(),O=null),c||(O=E(function(){return e.option},function(s,u){s&&(n.value?n.value.setOption(s,p({notMerge:s.value!==(u==null?void 0:u.value)},N.value)):y())},{deep:!0}))},{immediate:!0}),E([U,M],function(){W(),y()},{deep:!0}),B(function(){e.group&&n.value&&(n.value.group=e.group)});var K=ye(n);return function(c,s,u){var h=x("ecLoadingOptions",{}),o=z(function(){return p(p({},C(h)),u==null?void 0:u.value)});B(function(){var v=c.value;v&&(s.value?v.showLoading(o.value):v.hideLoading())})}(n,J,Y),function(c,s,u){var h=null;E([u,c,s],function(o,v,Q){var m=o[0],q=o[1],V=o[2];m&&q&&V&&(h=_e(function(){q.resize()},100),he(m,h)),Q(function(){h&&m&&ge(m,h)})})}(n,w,a),ie(function(){y()}),ae(W),p({chart:n,root:a,setOption:function(c,s){e.manualUpdate&&(_.value=c),n.value?n.value.setOption(c,s||{}):y(c)},nonEventAttrs:G},K)},render:function(){var e=p({},this.nonEventAttrs);return e.ref="root",e.class=e.class?["echarts"].concat(e.class):"echarts",se("x-vue-echarts",e)}});export{Se as U,Le as e,ce as m,Ae as s};
