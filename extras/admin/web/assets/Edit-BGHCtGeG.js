const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Pick-CWxP39u7.js","assets/index-BiudiscR.js","assets/index-G0ic_0eP.css","assets/format-gM1f6VgX.js","assets/QTooltip-BXV4SzhB.js","assets/QSpace-iSxaVdXM.js","assets/QInnerLoading-Dppzknud.js","assets/QTable-C4W6y8PP.js","assets/ClosePopup-C5KXc7XP.js","assets/TouchPan-BTxdarfL.js","assets/Index-BmeoAz6c.js","assets/QSpinnerGears-BpdyDR9S.js","assets/Table2-BV5X7DKJ.js","assets/FormE-CEFaBtW6.js","assets/QTabPanels-DCU1wcOQ.js","assets/QResizeObserver-DXOy1V9r.js","assets/QPopupProxy-DBgTi8gP.js","assets/QFab-xy2LNXLr.js"])))=>i.map(i=>d[i]);
import{_ as Z,ag as F,am as j,Y as H,a0 as _,r as f,Z as m,$ as O,a3 as A,a4 as i,ac as g,f as n,a5 as r,C,a2 as p,aj as I,ab as B,a7 as U,a8 as x,a6 as k,F as q,ad as Q,ak as P,G as J,ae as w,aa as h,Q as D,aq as K,al as M,ai as W,ah as E}from"./index-BiudiscR.js";import{Q as X,b as L,a as $}from"./format-gM1f6VgX.js";import{Q as S}from"./QTooltip-BXV4SzhB.js";import{a as N}from"./QTable-C4W6y8PP.js";import{Q as ee,a as R,b as le,c as G,d as ae,e as te}from"./QTabPanels-DCU1wcOQ.js";import{Q as oe}from"./QPopupProxy-DBgTi8gP.js";import{Q as ie,a as z}from"./QFab-xy2LNXLr.js";import{C as T}from"./ClosePopup-C5KXc7XP.js";import{T as ne}from"./TouchPan-BTxdarfL.js";import{g as c}from"./Index-BmeoAz6c.js";import"./QResizeObserver-DXOy1V9r.js";import"./QSpace-iSxaVdXM.js";import"./QInnerLoading-Dppzknud.js";import"./QSpinnerGears-BpdyDR9S.js";let a;const se={props:["parameters"],emits:["close"],components:{Pick:F(()=>j(()=>import("./Pick-CWxP39u7.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]))),Table2:F(()=>j(()=>import("./Table2-BV5X7DKJ.js"),__vite__mapDeps([12,1,2,3,4,7,5,6,9,10,11]))),FormE:F(()=>j(()=>import("./FormE-CEFaBtW6.js"),__vite__mapDeps([13,1,2,3,4,7,14,15,9,16,17,8,10,5,6,11])))},setup(){return{APP:H,uix:_,id:f(null),is_edit:f(!1),saving:f(!1),index:f(null),fields:f(null),template:f({options:{}}),row:f(null),replica:f(null),enums:f({}),options:f({}),loading:f({}),dialog:f({main:_.dialog.init(()=>a.dialog.main),form:_.dialog.init(),pick:_.dialog.init(),table:_.dialog.init()})}},created(){a=this,a.fields=[],a.is_edit=!1;let t=c.get.object(a.parameters);a.replica=c.get.number(t.replica,null),a.template=c.get.object(t.template),a.enums={},m.isObject(a.template.enums)&&Object.keys(a.template.enums).forEach(d=>{a.enums[d]=[null].concat(a.template.enums[d])}),a.options={},m.isObject(a.template.options)&&Object.keys(a.template.options).forEach(d=>{a.options[d]=[null].concat(a.template.options[d])}),a.row=c.get.object(t.row);let o=c.get.array(a.template.fields);if(o.length){if(m.isObject(t.row)){a.index=t.index,a.id=c.id.fromPk(a.template.id,t.row._pk_),a.is_edit=m.isDefined(a.id);for(const d of o){let l=c.clone.field(d);l.value=m.getFieldValue(l.name,t.row),!m.isDefined(l.value)&&m.isFunction(l.rowToValue)&&(l.value=l.rowToValue(t.row)),l.type==="datetime"&&l.converter==="epoch"?l.value=m.format.date(l.value,{format:l.pattern||null}):l.type==="pick"&&(m.isDefined(l.value)&&l.value!==null?l.text=m.isFunction(l.format)?l.format(l.value,t.row):l.value+"":l.text=m.isFunction(l.format)?l.format(null,t.row):""),a.is_edit||(l.editable=l.insertable),a.fields.push(l)}}else for(const d of o)if(d.insertable){let l=c.clone.field(d);l.editable=l.insertable,a.fields.push(l)}}},methods:{on_form_click(t,o){let d=c.get.object(a.parameters),l=c.get.object(d.row),V=c.get.array(t.relations);if(!V.length){_.error("error.required","label.relation");return}let u=[];for(const y of V)y.value=m.getFieldValue(y.source,l),u.push({field:y.target,condition:"EQUAL",value:y.value});let v=c.copy(t.crud);v.filters=m.isArray(v.filters)?v.filters:[],v.filters=v.filters.concat(u),m.isNumber(a.replica)&&(v.replica=a.replica),a.loading["form_"+o]=!0,O.call({path:"/crud/single",method:"post",data:v,onFinish(){a.loading["form_"+o]=!1},onSuccess(y){y=c.get.object(y),c.inject.pkAndGridId(t.id,y,a.template._grid_id_),_.dialog.show(a.dialog.form,{form:t,template:a.template,row:l,data:y,replica:a.replica,relations:V,is_edit:m.isDefined(y._pk_)})}})},on_close_dialog_form(){_.dialog.hide(a.dialog.form)},on_pick_select_click(t){let o=a.template.picks[t.pick];if(!m.isObject(o)){_.error("error.required","label.pick");return}_.dialog.show(a.dialog.pick,{template:a.template,field:t,pick:o,replica:a.replica})},on_pick_remove_click(t){t.value=void 0,t.text=void 0},on_close_dialog_pick(t){if(t?._pk_){let o=a.dialog.pick.parameters.field,d=m.isFunction(o.format)?o.format(t):t+"";o.value=t,o.text=d}_.dialog.hide(a.dialog.pick)},on_table_click(t){let o=c.get.object(a.parameters),d=c.get.object(o.template),l=c.get.object(o.row),V=c.copy(c.get.array(t.relations));if(!V.length){_.error("error.required","label.relation");return}for(const u of V)u.value=m.getFieldValue(u.source,l);t._grid_id_=d._grid_id_,_.dialog.show(a.dialog.table,{template:d,definition:t,parentRow:l,relations:V,onlyView:!1,replica:a.replica})},on_close_dialog_table(){_.dialog.hide(a.dialog.table)},on_clone_click(){let t=a.row?c.copy(a.row):null;if(t?._pk_){delete t._pk_;let o=a.template.id;o.type==="STANDARD"&&delete t[o.fields[0]]}a.$emit("close",{row:t,is_edit:a.is_edit})},on_save_click(){c.action.save({id:a.id,fields:a.fields,definition:a.template,replica:a.replica,is_edit:a.is_edit,saving:a.saving,onSuccess:function(t){if(a.is_edit===!0){a.saving=!0;let o=c.copy(a.template.crud);o.id=c.copy(a.id),o.replica=a.replica,O.call({path:"/crud/single",method:"post",data:o,onFinish(){a.saving=!1},onSuccess(d){m.isObject(d)&&(d._grid_id_=a.row._grid_id_,d._pk_=a.row._pk_),a.$emit("close",{row:d,is_edit:a.is_edit,index:a.index})}})}else a.$emit("close",{row:t,is_edit:a.is_edit,index:a.index})}})}}},re={class:"bg-primary"},de={class:"q-pa-xs bg-white row"},ce={class:"col-6 text-left"},me={class:"col-6 text-right"},pe={key:0},ue={key:0,class:"q-mb-xs",style:{width:"100%"}},_e={key:1,class:"q-mb-xs",style:{width:"100%"}},be={key:1},ge={key:0,class:"q-mb-xs",style:{width:"100%"}},ye={key:1,class:"q-mb-xs",style:{width:"100%"}},fe={class:"col-4 q-pr-xs text-left"},ke={class:"col-4 q-pr-xs text-center"},he={class:"col-4 q-pl-xs text-right"};function ve(t,o,d,l,V,u){const v=A("Pick"),y=A("Table2"),Y=A("FormE");return i(),g(q,null,[n(W,{style:B("width: "+(t.$q.screen.lt.md?"100%;":"50%;")+l.dialog.main.style)},{default:r(()=>[C((i(),p(I,{class:"header-main",style:B(l.APP?.color?.header?"background: "+l.APP.color.header+" !important;":"")},{default:r(()=>[n(X,{class:"q-pr-none"},{default:r(()=>[n(L,null,{default:r(()=>[n($,{class:"text-h6 text-white"},{default:r(()=>[U(x(l.is_edit?t.$t("label.edit"):t.$t("label.new")),1)]),_:1})]),_:1}),n(L,{side:""},{default:r(()=>[C((i(),p(k,{class:"text-caption text-white q-pl-xs q-pr-xs q-mr-xs",flat:"",round:"",glossy:"",icon:"close",disable:l.saving},{default:r(()=>[n(S,null,{default:r(()=>[U(x(t.$t("label.close")),1)]),_:1})]),_:1},8,["disable"])),[[T]])]),_:1})]),_:1})]),_:1},8,["style"])),[[ne,l.dialog.main.onDrag,void 0,{mouse:!0}]]),n(I,{style:{"max-height":"65vh"},class:"q-pa-xs q-mt-none scroll"},{default:r(()=>[(i(!0),g(q,null,Q(l.fields,(e,b)=>(i(),g("div",{key:b,class:"q-mb-xs",style:{width:"100%"}},[e.type==="words"?(i(),p(P,{key:0,type:"text",label:e.label,readonly:!e.editable,modelValue:e.value,"onUpdate:modelValue":s=>e.value=s,filled:"",autogrow:"",style:{"max-height":"200px",overflow:"scroll"}},null,8,["label","readonly","modelValue","onUpdate:modelValue"])):e.type==="option"?(i(),p(N,{key:1,modelValue:e.value,"onUpdate:modelValue":s=>e.value=s,label:e.label,readonly:!e.editable,options:l.options[e.option],"option-value":"value","option-label":"label","emit-value":"","map-options":"",filled:""},null,8,["modelValue","onUpdate:modelValue","label","readonly","options"])):e.type==="enum"?(i(),p(N,{key:2,modelValue:e.value,"onUpdate:modelValue":s=>e.value=s,label:e.label,readonly:!e.editable,options:l.enums[e.enum],"option-value":"value","option-label":"label","emit-value":"","map-options":"",filled:""},null,8,["modelValue","onUpdate:modelValue","label","readonly","options"])):e.type==="datetime"||e.type==="date"||e.type==="time"?(i(),p(P,{key:3,type:"text",label:e.label,readonly:!e.editable,modelValue:e.value,"onUpdate:modelValue":s=>e.value=s,filled:""},{append:r(()=>[n(J,{name:e.type==="time"?"schedule":e.type==="date"?"calendar_month":"event",class:"cursor-pointer"},{default:r(()=>[n(oe,{"transition-show":"scale","transition-hide":"scale",cover:"",onBeforeShow:s=>l.uix.calendar.beforeShow(e,"tab","proxy_value","value")},{default:r(()=>[w("div",re,[n(ee,{modelValue:e.tab,"onUpdate:modelValue":s=>e.tab=s,class:"bg-primary text-grey-5 shadow-2 text-subtitle2","no-caps":"","indicator-color":"transparent","active-color":"white"},{default:r(()=>[e.type==="datetime"||e.type==="date"?(i(),p(R,{key:0,name:"date"},{default:r(()=>[w("span",null,x(t.$t("label.date")),1)]),_:1})):h("",!0),e.type==="datetime"||e.type==="time"?(i(),p(R,{key:1,name:"time"},{default:r(()=>[w("span",null,x(t.$t("label.time")),1)]),_:1})):h("",!0)]),_:2},1032,["modelValue","onUpdate:modelValue"]),n(D),n(le,{modelValue:e.tab,"onUpdate:modelValue":s=>e.tab=s},{default:r(()=>[e.type==="datetime"||e.type==="date"?(i(),p(G,{key:0,name:"date",class:"q-pa-none"},{default:r(()=>[n(ae,{modelValue:e.proxy_value,"onUpdate:modelValue":s=>e.proxy_value=s,mask:e.pattern,square:""},null,8,["modelValue","onUpdate:modelValue","mask"])]),_:2},1024)):h("",!0),e.type==="datetime"||e.type==="time"?(i(),p(G,{key:1,name:"time",class:"q-pa-none"},{default:r(()=>[n(te,{modelValue:e.proxy_value,"onUpdate:modelValue":s=>e.proxy_value=s,mask:e.pattern,format24h:"",square:""},null,8,["modelValue","onUpdate:modelValue","mask"])]),_:2},1024)):h("",!0)]),_:2},1032,["modelValue","onUpdate:modelValue"]),n(D),w("div",de,[w("div",ce,[C(n(k,{label:t.$t("label.cancel"),color:"negative","no-caps":""},null,8,["label"]),[[T]])]),w("div",me,[C(n(k,{label:t.$t("label.ok"),color:"secondary","no-caps":"",onClick:s=>e.value=e.proxy_value},null,8,["label","onClick"]),[[T]])])])])]),_:2},1032,["onBeforeShow"])]),_:2},1032,["name"])]),_:2},1032,["label","readonly","modelValue","onUpdate:modelValue"])):e.type==="pick"?(i(),p(P,{key:4,type:"text",label:e.label,readonly:!e.editable,modelValue:e.text,"onUpdate:modelValue":s=>e.text=s,filled:"",autogrow:""},K({_:2},[e.editable?{name:"append",fn:r(()=>[n(ie,{modelValue:e.fab,"onUpdate:modelValue":s=>e.fab=s,icon:"flaky",direction:"left",padding:"none",round:"",dense:"",flat:"",glossy:"",class:"q-ma-none q-pa-none"},{default:r(()=>[n(z,{color:"secondary",icon:"fact_check",round:"",dense:"",glossy:"",onClick:s=>u.on_pick_select_click(e)},{default:r(()=>[n(S,null,{default:r(()=>[U(x(t.$t("label.select")),1)]),_:1})]),_:2},1032,["onClick"]),e.value?(i(),p(z,{key:0,color:"negative",icon:"delete_forever",round:"",dense:"",glossy:"",onClick:s=>u.on_pick_remove_click(e)},{default:r(()=>[n(S,null,{default:r(()=>[U(x(t.$t("label.delete")),1)]),_:1})]),_:2},1032,["onClick"])):h("",!0)]),_:2},1032,["modelValue","onUpdate:modelValue"])]),key:"0"}:void 0]),1032,["label","readonly","modelValue","onUpdate:modelValue"])):(i(),p(P,{key:5,type:e.type,label:e.label,readonly:!e.editable,modelValue:e.value,"onUpdate:modelValue":s=>e.value=s,filled:""},null,8,["type","label","readonly","modelValue","onUpdate:modelValue"]))]))),128)),l.template.childrenFirst?(i(),g("div",pe,[l.is_edit&&l.template.children?.length?(i(),g("div",ue,[(i(!0),g(q,null,Q(l.template.children,(e,b)=>(i(),p(k,{key:b,label:e.title,class:"full-width q-mt-xs q-mb-xs text-weight-bold","no-caps":"",glossy:"",onClick:s=>u.on_table_click(e)},null,8,["label","onClick"]))),128))])):h("",!0),l.is_edit&&l.template.forms?.length?(i(),g("div",_e,[(i(!0),g(q,null,Q(l.template.forms,(e,b)=>(i(),p(k,{key:b,label:e.title,class:"full-width q-mt-xs q-mb-xs text-weight-bold","no-caps":"",glossy:"",loading:l.loading["form_"+b],onClick:s=>u.on_form_click(e,b)},null,8,["label","loading","onClick"]))),128))])):h("",!0)])):(i(),g("div",be,[l.is_edit&&l.template.forms?.length?(i(),g("div",ge,[(i(!0),g(q,null,Q(l.template.forms,(e,b)=>(i(),p(k,{key:b,label:e.title,class:"full-width q-mt-xs q-mb-xs text-weight-bold","no-caps":"",glossy:"",loading:l.loading["form_"+b],onClick:s=>u.on_form_click(e,b)},null,8,["label","loading","onClick"]))),128))])):h("",!0),l.is_edit&&l.template.children?.length?(i(),g("div",ye,[(i(!0),g(q,null,Q(l.template.children,(e,b)=>(i(),p(k,{key:b,label:e.title,class:"full-width q-mt-xs q-mb-xs text-weight-bold","no-caps":"",glossy:"",onClick:s=>u.on_table_click(e)},null,8,["label","onClick"]))),128))])):h("",!0)]))]),_:1}),n(D),n(M,{class:"row"},{default:r(()=>[w("div",fe,[C(n(k,{label:t.$t("label.cancel"),color:"negative","no-caps":"",glossy:"",disable:l.saving},null,8,["label","disable"]),[[T]])]),w("div",ke,[l.is_edit&&l.template.copy!==!1?(i(),p(k,{key:0,label:t.$t("label.copy"),color:"purple","no-caps":"",glossy:"",disable:l.saving,onClick:u.on_clone_click},null,8,["label","disable","onClick"])):h("",!0)]),w("div",he,[n(k,{label:t.$t("label.save"),color:"secondary","no-caps":"",glossy:"",loading:l.saving,onClick:u.on_save_click},null,8,["label","loading","onClick"])])]),_:1})]),_:1},8,["style"]),n(E,{modelValue:l.dialog.pick.show,"onUpdate:modelValue":o[0]||(o[0]=e=>l.dialog.pick.show=e),persistent:"","transition-show":"slide-down","transition-hide":"none","backdrop-filter":"blur(1px)"},{default:r(()=>[n(v,{parameters:l.dialog.pick.parameters,onClose:u.on_close_dialog_pick},null,8,["parameters","onClose"])]),_:1},8,["modelValue"]),n(E,{modelValue:l.dialog.table.show,"onUpdate:modelValue":o[1]||(o[1]=e=>l.dialog.table.show=e),"transition-show":"slide-down","transition-hide":"none","backdrop-filter":"blur(1px)","full-height":""},{default:r(()=>[n(y,{parameters:l.dialog.table.parameters,onClose:u.on_close_dialog_table},null,8,["parameters","onClose"])]),_:1},8,["modelValue"]),n(E,{modelValue:l.dialog.form.show,"onUpdate:modelValue":o[2]||(o[2]=e=>l.dialog.form.show=e),persistent:"","transition-show":"slide-down","transition-hide":"none","backdrop-filter":"blur(1px)"},{default:r(()=>[n(Y,{parameters:l.dialog.form.parameters,onClose:u.on_close_dialog_form},null,8,["parameters","onClose"])]),_:1},8,["modelValue"])],64)}const Se=Z(se,[["render",ve]]);export{Se as default};
