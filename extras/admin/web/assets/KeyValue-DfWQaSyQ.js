import{Q as b}from"./QTd-YU6zkIbH.js";import{e as w}from"./format-CmZjr7-1.js";import{_ as Q,Z as m,r as h,a4 as s,a2 as t,a5 as e,f as n,aj as C,a7 as c,a8 as f,ae as V,aa as u,ak as q,G as v,ac as y,F as x,ad as B,a6 as p,C as R,ai as F}from"./index-D_M38cNk.js";import{Q as g}from"./QTooltip-Ls1fZgw9.js";import{Q as N}from"./QTable-BDsDrqiz.js";import{C as T}from"./ClosePopup-B9LXNHdj.js";let r;const z={props:["parameters"],setup(){return{util:m,rows:h([]),filter:h(null),loading:h(!0)}},created(){r=this,r.rows=m.isArray(r.parameters.rows)?r.parameters.rows:[],r.onRefresh()},methods:{onRefresh(){if(m.isFunction(r.parameters.onRefresh)){let i=m.copy(r.parameters);r.parameters.onRefresh({parameters:i,onStar(){r.loading=!0},onFinish(){r.loading=!1},onData(d){m.isArray(d)&&(r.rows=d)}})}}}},A={class:"text-h6"},D={key:1,class:"q-ml-sm q-mr-sm"};function S(i,d,l,o,I,_){return s(),t(F,{style:{"min-width":"50vw","max-width":"90vw"}},{default:e(()=>[n(C,{class:"q-pa-none"},{default:e(()=>[n(N,{class:"table-sticky-header no-column",style:{"max-height":"70vh"},rows:o.rows,separator:"cell",filter:o.filter,"rows-per-page-options":[0],"hide-bottom":"","hide-header":"",bordered:"",dense:""},{"body-cell":e(a=>[n(b,{props:a,style:{"text-align":"left !important"}},{default:e(()=>[c(f(a.value),1)]),_:2},1032,["props"])]),"top-left":e(()=>[V("div",A,[c(f(l.parameters.title)+" ",1),l.parameters.badge===!0?(s(),t(w,{key:0,color:"orange",rounded:"",align:"top",transparent:""})):u("",!0)])]),"top-right":e(()=>[l.parameters.search!==!1?(s(),t(q,{key:0,borderless:"",dense:"",modelValue:o.filter,"onUpdate:modelValue":d[0]||(d[0]=a=>o.filter=a),class:"q-ml-md",placeholder:i.$t("label.search")},{append:e(()=>[n(v,{name:"search"})]),_:1},8,["modelValue","placeholder"])):u("",!0),o.util.isArray(l.parameters.actions)?(s(),y("div",D,[(s(!0),y(x,null,B(l.parameters.actions,(a,k)=>(s(),t(p,{key:k,round:"",glossy:"",dense:"",size:"sm",icon:a.icon,color:a.color,loading:a.loading,disable:a.disable,class:"q-ml-sm",onClick:a.click},{default:e(()=>[a?.label?.length?(s(),t(g,{key:0},{default:e(()=>[c(f(a.label),1)]),_:2},1024)):u("",!0)]),_:2},1032,["icon","color","loading","disable","onClick"]))),128))])):u("",!0),o.util.isFunction(l.parameters.onRefresh)?(s(),t(p,{key:2,round:"",glossy:"",dense:"",size:"sm",icon:"refresh",class:"q-ml-sm",loading:o.loading,color:l.parameters?.color?.refresh,onClick:_.onRefresh},{default:e(()=>[n(g,null,{default:e(()=>[c(f(i.$t("label.refresh")),1)]),_:1})]),_:1},8,["loading","color","onClick"])):u("",!0),R((s(),t(p,{round:"",glossy:"",dense:"",size:"sm",icon:"close",class:"q-ml-sm",color:l.parameters?.color?.close},{default:e(()=>[n(g,null,{default:e(()=>[c(f(i.$t("label.close")),1)]),_:1})]),_:1},8,["color"])),[[T]])]),_:1},8,["rows","filter"])]),_:1})]),_:1})}const U=Q(z,[["render",S]]);export{U as default};
