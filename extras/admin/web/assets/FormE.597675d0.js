import{_ as I,aH as O,aO as $,r as m,Z as _,a4 as D,a5 as r,ab as x,f as t,a3 as o,aK as U,a7 as f,a8 as y,C as V,a2 as p,a6 as v,ad as b,F as C,ac as E,aL as g,G as N,aa as k,Q as w,bo as A,aN as L,aM as z,aJ as G,aI as H}from"./index.d5afe56e.js";import{Q as J,b as q,a as K}from"./format.7bfff210.js";import{Q}from"./QTooltip.4c17e337.js";import{a as j}from"./QTable.25ca810d.js";import{Q as M,a as P,b as R,c as S,d as Z,e as W}from"./QTabPanels.9ee621cf.js";import{Q as X}from"./QPopupProxy.7bdd13ae.js";import{Q as Y,a as F}from"./QFab.5f3d0dcc.js";import{C as h}from"./ClosePopup.01c735d3.js";import{g as u}from"./Index.e15d6137.js";import"./QResizeObserver.8ef8bc20.js";import"./TouchPan.7507b236.js";import"./QSpace.90da3d3c.js";import"./QInnerLoading.680ae592.js";import"./QSpinnerGears.913dcc00.js";const ee={props:["parameters"],emits:["close"],components:{Pick:O(()=>$(()=>import("./Pick.d2ec7b41.js"),["assets/Pick.d2ec7b41.js","assets/index.d5afe56e.js","assets/index.749bada7.css","assets/format.7bfff210.js","assets/QTooltip.4c17e337.js","assets/QSpace.90da3d3c.js","assets/QInnerLoading.680ae592.js","assets/QTable.25ca810d.js","assets/ClosePopup.01c735d3.js","assets/Index.e15d6137.js","assets/QSpinnerGears.913dcc00.js"]))},setup(){return{id:m(null),title:m(""),is_edit:m(!1),saving:m(!1),index:m(null),fields:m(null),form:m(null),template:m({options:{},enums:{}}),replica:m(null),relations:m([]),enums:m({}),options:m({}),row:m(null),dialog:m({pick:{show:!1,parameters:null}})}},created(){let a=this,n=u.get.object(a.parameters),d=u.get.object(n.form);a.template=u.get.object(n.template),a.replica=u.get.object(n.replica),a.relations=u.get.array(n.relations),a.enums={},_.isObject(a.template.enums)&&Object.keys(a.template.enums).forEach(c=>{a.enums[c]=[null].concat(a.template.enums[c])}),a.options={},_.isObject(a.template.options)&&Object.keys(a.template.options).forEach(c=>{a.options[c]=[null].concat(a.template.options[c])}),a.data=u.get.object(n.data),a.form=d,a.fields=[],a.is_edit=n.is_edit,a.title=(_.isString(d.title)&&d.title!==""?d.title+" - ":"")+(a.is_edit?a.$t("label.edit"):a.$t("label.new"));let i=u.get.array(d.fields);if(a.is_edit){a.id=u.id.fromPk(a.form.id,a.data._pk_);for(const c of i){let l=u.clone.field(c);l.value=_.getFieldValue(l.name,a.data),l.type==="datetime"&&l.converter==="epoch"?l.value=_.format.date(l.value,{format:l.pattern||null}):l.type==="pick"?_.isDefined(l.value)&&(l.text=_.isFunction(l.format)?l.format(l.value,n.row):l.value+""):_.isFunction(l.format)&&(l.text=l.format(l.value,n.row)),(l.insertable===!0||l.editable===!0)&&a.fields.push(l)}}else for(const c of i)if(c.insertable){let l=u.clone.field(c);l.editable=!0,a.fields.push(l)}},methods:{on_pick_select_click(a){let n=this,d=n.template.picks[a.pick];if(!_.isObject(d)){uix.error("error.required","label.pick");return}n.dialog.pick={show:!0,parameters:{template:n.template,field:a,pick:d,replica:n.replica}}},on_pick_remove_click(a){a.value=void 0,a.text=void 0},on_close_dialog_pick(a){let n=this;if(a!=null&&a._pk_){let d=n.dialog.pick.parameters.field,i=_.isFunction(d.format)?d.format(a):a+"";d.value=a,d.text=i}n.dialog.pick={show:!1,parameters:null,field:null}},on_save_click(){let a=this;a.form._grid_id_=a.template._grid_id_,u.action.save({id:a.id,fields:a.fields,definition:a.form,replica:a.replica,relations:a.relations,is_edit:a.is_edit,saving:a.saving,onSuccess:function(n){a.$emit("close",{row:n,is_edit:a.is_edit,index:a.index})}})}}},ae={class:"row"},le={class:"bg-primary"},te={class:"q-pa-xs bg-white row"},oe={class:"col-6 text-left"},se={class:"col-6 text-right"},ne={class:"col-6 q-pr-xs text-left"},ie={class:"col-6 q-pl-xs text-right"};function re(a,n,d,i,c,l){const T=D("Pick");return r(),x(C,null,[t(G,{style:z("width: "+(a.$q.screen.lt.md?"100%;":"50%;"))},{default:o(()=>[t(U,{class:"q-pa-none header-main"},{default:o(()=>[t(J,{class:"q-pr-none"},{default:o(()=>[t(q,null,{default:o(()=>[t(K,{class:"text-h6 text-white"},{default:o(()=>[f(y(i.title),1)]),_:1})]),_:1}),t(q,{side:""},{default:o(()=>[V((r(),p(v,{class:"text-caption text-white q-pl-xs q-pr-xs q-mr-xs",flat:"",round:"",glossy:"",icon:"close",disable:i.saving},{default:o(()=>[t(Q,null,{default:o(()=>[f(y(a.$t("label.close")),1)]),_:1})]),_:1},8,["disable"])),[[h]])]),_:1})]),_:1})]),_:1}),t(U,{style:{"max-height":"80vh"},class:"q-pa-xs q-mt-xs scroll"},{default:o(()=>[b("div",ae,[(r(!0),x(C,null,E(i.fields,(e,B)=>(r(),x("div",{key:B,class:"col-md-6 col-sm-12 q-mb-xs",style:{width:"100%"}},[e.type==="words"?(r(),p(g,{key:0,type:"text",label:e.label,readonly:!e.editable,modelValue:e.value,"onUpdate:modelValue":s=>e.value=s,filled:"",autogrow:"",style:{"max-height":"200px",overflow:"scroll"}},null,8,["label","readonly","modelValue","onUpdate:modelValue"])):e.type==="enum"?(r(),p(j,{key:1,modelValue:e.value,"onUpdate:modelValue":s=>e.value=s,label:e.label,readonly:e.editable!==!0,options:i.enums[e.enum],"option-value":"value","option-label":"label","emit-value":"","map-options":"",filled:""},null,8,["modelValue","onUpdate:modelValue","label","readonly","options"])):e.type==="option"?(r(),p(j,{key:2,modelValue:e.value,"onUpdate:modelValue":s=>e.value=s,label:e.label,readonly:e.editable!==!0,options:i.options[e.option],"option-value":"value","option-label":"label","emit-value":"","map-options":"",filled:""},null,8,["modelValue","onUpdate:modelValue","label","readonly","options"])):e.type==="datetime"||e.type==="date"||e.type==="time"?(r(),p(g,{key:3,type:"text",label:e.label,readonly:!e.editable,modelValue:e.value,"onUpdate:modelValue":s=>e.value=s,filled:""},{append:o(()=>[t(N,{name:e.type==="time"?"schedule":e.type==="date"?"calendar_month":"event",class:"cursor-pointer"},{default:o(()=>[t(X,{"transition-show":"scale","transition-hide":"scale",cover:"",onBeforeShow:s=>{e.proxy_value=e.value,e.tab=e.type==="time"?"time":"date"}},{default:o(()=>[b("div",le,[t(M,{modelValue:e.tab,"onUpdate:modelValue":s=>e.tab=s,class:"bg-primary text-grey-5 shadow-2 text-subtitle2",align:"justify","no-caps":"","indicator-color":"transparent","active-color":"white"},{default:o(()=>[e.type==="datetime"||e.type==="date"?(r(),p(P,{key:0,name:"date"},{default:o(()=>[b("span",null,y(a.$t("label.date")),1)]),_:1})):k("",!0),e.type==="datetime"||e.type==="time"?(r(),p(P,{key:1,name:"time"},{default:o(()=>[b("span",null,y(a.$t("label.time")),1)]),_:1})):k("",!0)]),_:2},1032,["modelValue","onUpdate:modelValue"]),t(w),t(R,{modelValue:e.tab,"onUpdate:modelValue":s=>e.tab=s},{default:o(()=>[e.type==="datetime"||e.type==="date"?(r(),p(S,{key:0,name:"date",class:"q-pa-none"},{default:o(()=>[t(Z,{modelValue:e.proxy_value,"onUpdate:modelValue":s=>e.proxy_value=s,mask:e.format,square:""},null,8,["modelValue","onUpdate:modelValue","mask"])]),_:2},1024)):k("",!0),e.type==="datetime"||e.type==="time"?(r(),p(S,{key:1,name:"time",class:"q-pa-none"},{default:o(()=>[t(W,{modelValue:e.proxy_value,"onUpdate:modelValue":s=>e.proxy_value=s,mask:e.format,format24h:"",square:""},null,8,["modelValue","onUpdate:modelValue","mask"])]),_:2},1024)):k("",!0)]),_:2},1032,["modelValue","onUpdate:modelValue"]),t(w),b("div",te,[b("div",oe,[V(t(v,{label:a.$t("label.cancel"),color:"negative","no-caps":""},null,8,["label"]),[[h]])]),b("div",se,[V(t(v,{label:a.$t("label.ok"),color:"secondary","no-caps":"",onClick:s=>e.value=e.proxy_value},null,8,["label","onClick"]),[[h]])])])])]),_:2},1032,["onBeforeShow"])]),_:2},1032,["name"])]),_:2},1032,["label","readonly","modelValue","onUpdate:modelValue"])):e.type==="pick"?(r(),p(g,{key:4,type:"text",label:e.label,readonly:!e.editable,modelValue:e.text,"onUpdate:modelValue":s=>e.text=s,filled:""},A({_:2},[e.editable?{name:"append",fn:o(()=>[t(Y,{modelValue:e.fab,"onUpdate:modelValue":s=>e.fab=s,icon:"flaky",direction:"left",padding:"none",flat:"",class:"q-ma-none q-pa-none"},{default:o(()=>[t(F,{color:"secondary",icon:"fact_check",onClick:s=>l.on_pick_select_click(e)},{default:o(()=>[t(Q,null,{default:o(()=>[f(y(a.$t("label.select")),1)]),_:1})]),_:2},1032,["onClick"]),e.value?(r(),p(F,{key:0,color:"negative",icon:"delete_forever",onClick:s=>l.on_pick_remove_click(e)},{default:o(()=>[t(Q,null,{default:o(()=>[f(y(a.$t("label.delete")),1)]),_:1})]),_:2},1032,["onClick"])):k("",!0)]),_:2},1032,["modelValue","onUpdate:modelValue"])]),key:"0"}:void 0]),1032,["label","readonly","modelValue","onUpdate:modelValue"])):(r(),p(g,{key:5,type:e.type,label:e.label,readonly:!e.editable,modelValue:e.value,"onUpdate:modelValue":s=>e.value=s,filled:""},null,8,["type","label","readonly","modelValue","onUpdate:modelValue"]))]))),128))])]),_:1}),t(w),t(L,{class:"row"},{default:o(()=>[b("div",ne,[V(t(v,{label:a.$t("label.cancel"),color:"negative","no-caps":"",glossy:"",disable:i.saving},null,8,["label","disable"]),[[h]])]),b("div",ie,[t(v,{label:a.$t("label.save"),color:"secondary","no-caps":"",glossy:"",loading:i.saving,onClick:l.on_save_click},null,8,["label","loading","onClick"])])]),_:1})]),_:1},8,["style"]),t(H,{modelValue:i.dialog.pick.show,"onUpdate:modelValue":n[0]||(n[0]=e=>i.dialog.pick.show=e),persistent:"","transition-show":"slide-down","transition-hide":"none","backdrop-filter":"blur(2px)"},{default:o(()=>[t(T,{parameters:i.dialog.pick.parameters,onClose:l.on_close_dialog_pick},null,8,["parameters","onClose"])]),_:1},8,["modelValue"])],64)}var xe=I(ee,[["render",re]]);export{xe as default};