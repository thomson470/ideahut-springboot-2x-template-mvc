import{Q as k}from"./QTd-BJ3AYphf.js";import{e as b}from"./format-gM1f6VgX.js";import{_ as w,Z as i,r as u,a4 as l,a2 as t,a5 as a,f as n,aj as Q,a7 as d,a8 as m,ae as C,aa as c,ak as V,G as q,ac as g,F as v,ad as x,a6 as h,C as B,ai as R}from"./index-BiudiscR.js";import{Q as p}from"./QTooltip-BXV4SzhB.js";import{Q as F}from"./QTable-C4W6y8PP.js";import{C as N}from"./ClosePopup-C5KXc7XP.js";const T={props:["parameters"],setup(){return{util:i,rows:u([]),filter:u(null),loading:u(!0)}},created(){let e=this;e.rows=i.isArray(e.parameters.rows)?e.parameters.rows:[],e.onRefresh()},methods:{onRefresh(){let e=this;if(i.isFunction(e.parameters.onRefresh)){let f=i.copy(e.parameters);e.parameters.onRefresh({parameters:f,onStar(){e.loading=!0},onFinish(){e.loading=!1},onData(s){i.isArray(s)&&(e.rows=s)}})}}}},z={class:"text-h6"},A={key:1,class:"q-ml-sm q-mr-sm"};function D(e,f,s,o,S,y){return l(),t(R,{style:{"min-width":"50vw","max-width":"90vw"}},{default:a(()=>[n(Q,{class:"q-pa-none"},{default:a(()=>[n(F,{class:"table-sticky-header no-column",style:{"max-height":"70vh"},rows:o.rows,separator:"cell",filter:o.filter,"rows-per-page-options":[0],"hide-bottom":"","hide-header":"",bordered:"",dense:""},{"body-cell":a(r=>[n(k,{props:r,style:{"text-align":"left !important"}},{default:a(()=>[d(m(r.value),1)]),_:2},1032,["props"])]),"top-left":a(()=>[C("div",z,[d(m(s.parameters.title)+" ",1),s.parameters.badge===!0?(l(),t(b,{key:0,color:"orange",rounded:"",align:"top",transparent:""})):c("",!0)])]),"top-right":a(()=>[s.parameters.search!==!1?(l(),t(V,{key:0,borderless:"",dense:"",modelValue:o.filter,"onUpdate:modelValue":f[0]||(f[0]=r=>o.filter=r),class:"q-ml-md",placeholder:e.$t("label.search")},{append:a(()=>[n(q,{name:"search"})]),_:1},8,["modelValue","placeholder"])):c("",!0),o.util.isArray(s.parameters.actions)?(l(),g("div",A,[(l(!0),g(v,null,x(s.parameters.actions,(r,_)=>(l(),t(h,{key:_,round:"",glossy:"",dense:"",size:"sm",icon:r.icon,color:r.color,loading:r.loading,disable:r.disable,class:"q-ml-sm",onClick:r.click},{default:a(()=>[r?.label?.length?(l(),t(p,{key:0},{default:a(()=>[d(m(r.label),1)]),_:2},1024)):c("",!0)]),_:2},1032,["icon","color","loading","disable","onClick"]))),128))])):c("",!0),o.util.isFunction(s.parameters.onRefresh)?(l(),t(h,{key:2,round:"",glossy:"",dense:"",size:"sm",icon:"refresh",class:"q-ml-sm",loading:o.loading,color:s.parameters?.color?.refresh,onClick:y.onRefresh},{default:a(()=>[n(p,null,{default:a(()=>[d(m(e.$t("label.refresh")),1)]),_:1})]),_:1},8,["loading","color","onClick"])):c("",!0),B((l(),t(h,{round:"",glossy:"",dense:"",size:"sm",icon:"close",class:"q-ml-sm",color:s.parameters?.color?.close},{default:a(()=>[n(p,null,{default:a(()=>[d(m(e.$t("label.close")),1)]),_:1})]),_:1},8,["color"])),[[N]])]),_:1},8,["rows","filter"])]),_:1})]),_:1})}const P=w(T,[["render",D]]);export{P as default};
