import{_ as c,Y as m,Z as i,$ as _,a0 as r,r as u,a2 as f,a5 as l,a3 as k,a4 as p,f as a,a6 as n,a9 as h,a7 as g,a8 as b,ab as P}from"./index-BiudiscR.js";import{Q}from"./QSpace-iSxaVdXM.js";import{Q as w}from"./QTooltip-BXV4SzhB.js";import{e as v,a as y,b as C,c as q,d as z}from"./QLayout-DSQKhFCg.js";import"./QResizeObserver-DXOy1V9r.js";const x={setup(){return{APP:m,util:i,api:_,uix:r,is_dark_mode:u(!1)}},created(){let e=this;e.is_dark_mode=r.dark.active()},methods:{on_header_menu_click(){window.location.href=i.webPath()+"/"},on_dark_click(){r.dark.toggle(),this.is_dark_mode=r.dark.active()}}};function A(e,s,$,o,B,t){const d=k("router-view");return p(),f(v,{view:"hHh lpR fFf",class:"background-layout"},{default:l(()=>[a(C,{class:"header-main",style:P(o.APP?.color?.header?"background: "+o.APP.color.header+" !important;":"")},{default:l(()=>[a(y,null,{default:l(()=>[a(n,{flat:"","no-caps":"","no-wrap":"",label:o.APP.title,size:e.$q.screen.gt.sm?"xl":"lg",class:h("q-pa-xs text-weight-bold "+(e.$q.screen.gt.sm?"q-ml-md":"q-ml-xs")),onClick:s[0]||(s[0]=S=>t.on_header_menu_click())},null,8,["label","size","class"]),a(Q),a(n,{round:"",icon:o.is_dark_mode?"light_mode":"dark_mode",size:e.$q.screen.gt.sm?"md":"sm",onClick:t.on_dark_click},{default:l(()=>[a(w,null,{default:l(()=>[g(b(o.is_dark_mode?e.$t("label.light"):e.$t("label.dark")),1)]),_:1})]),_:1},8,["icon","size","onClick"])]),_:1})]),_:1},8,["style"]),a(z,null,{default:l(()=>[a(q,null,{default:l(()=>[a(d)]),_:1})]),_:1})]),_:1})}const D=c(x,[["render",A]]);export{D as default};
