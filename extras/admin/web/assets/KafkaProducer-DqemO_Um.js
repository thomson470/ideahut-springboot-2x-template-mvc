const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/KeyValue-Bgp01dYt.js","assets/QTd-BJ3AYphf.js","assets/index-BiudiscR.js","assets/index-G0ic_0eP.css","assets/format-gM1f6VgX.js","assets/QTooltip-BXV4SzhB.js","assets/QTable-C4W6y8PP.js","assets/ClosePopup-C5KXc7XP.js"])))=>i.map(i=>d[i]);
import{_ as N,ag as I,Y as T,Z as d,r as w,a0 as u,$ as R,ac as B,f as l,a5 as o,ah as C,F as D,a3 as E,a4 as g,a6 as f,a2 as k,aa as z,a7 as b,a8 as m,ae as p,G as A,C as y,ab as q,ai as O,aj as Q,ak as x,Q as U,al as F,am as Y}from"./index-BiudiscR.js";import{Q as j,b as S,a as K,e as H}from"./format-gM1f6VgX.js";import{Q as _}from"./QTooltip-BXV4SzhB.js";import{Q as L}from"./QTable-C4W6y8PP.js";import{Q as V}from"./QForm-DPskBrwV.js";import{T as P}from"./TouchPan-BTxdarfL.js";import{C as M}from"./ClosePopup-C5KXc7XP.js";let a;const G={components:{KeyValue:I(()=>Y(()=>import("./KeyValue-Bgp01dYt.js"),__vite__mapDeps([0,1,2,3,4,5,6,7])))},setup(){return{APP:T,util:d,handler:w(null),table:w({rows:[],filters:{},columns:[],loading:!1,pagination:{page:1,rowsPerPage:30,sortBy:"producerId",descending:!1,count:!0}}),dialog:w({view:u.dialog.init(()=>a.dialog.view),search:u.dialog.init(()=>a.dialog.search)})}},created(){a=this,a.handler=a.$route.query.handler,a.table.columns=[{name:"producerId",label:a.$t("label.producer_id"),field:"producerId",align:"left",sortable:!0},{name:"partition.topic",label:a.$t("label.topic"),field:"partition",align:"left",sortable:!0,format:function(e){return e.topic}},{name:"partition.index",label:a.$t("label.partition"),field:"partition",align:"left",sortable:!0,format:function(e){return e.index}},{name:"lastTimestamp",label:a.$t("label.last_timestamp"),field:"lastTimestamp",align:"left",sortable:!0,format:function(e){return d.isNumber(e)&&e>0?d.format.date(e,{format:"YYYY-MM-DD HH:mm:ss"}):""}},{name:"lastSequence",label:a.$t("label.last_sequence"),field:"lastSequence",align:"left"},{name:"producerEpoch",label:a.$t("label.producer_epoch"),field:"producerEpoch",align:"left"},{name:"coordinatorEpoch",label:a.$t("label.coordinator_epoch"),field:"coordinatorEpoch",align:"left"},{name:"currentTransactionStartOffset",label:a.$t("label.current_trx_start_offset"),field:"currentTransactionStartOffset",align:"left"}],a.on_refresh_click()},methods:{do_request(e){let{page:r,rowsPerPage:c,sortBy:t,descending:v}=a.get_pagination(e),n={name:a.handler,index:r,size:c,order:(v?"-":"")+t};Object.keys(a.table.filters).forEach(s=>{n[s]=a.table.filters[s]}),a.table.loading=!0,R.call({path:"/kafka/producers",params:n,onFinish(){a.table.loading=!1},onSuccess(s){if(d.isObject(s)){a.table.rows=d.isArray(s.data)?s.data:[];let i=a.table.pagination;if(i.page=s.index,i.rowsPerPage=s.size,d.isNumber(s.records))i.rowsNumber=s.records;else{let h=s.index*s.size;a.table.rows.length!==s.size?i.rowsNumber=h:i.rowsNumber=h+1}}}})},get_pagination(e){let r=e?.pagination?e.pagination:a.table.pagination;return r?(a.table.pagination=r,r):a.table.pagination},on_refresh_click(){a.table.rows?.length||a.table.pagination.page>1&&(a.table.pagination.page=1),a.do_request({pagination:a.table.pagination})},on_view_click(e){let r=[];for(const c of e.cols)r.push({label:c.label,value:d.isFunction(c.format)?c.format(e.row[c.field],e.row):e.row[c.field]});u.dialog.show(a.dialog.view,{search:!1,rows:r})},on_search_reset_click(){a.table.filters={}},on_search_filter_click(){let e=a.table.filters;d.isString(e.producerId)&&e.producerId!==""||delete e.producerId,d.isString(e.topicName)&&e.topicName!==""||delete e.topicName,d.isString(e.partition)&&e.partition!==""||delete e.partition,a.do_request({pagination:a.table.pagination}),u.dialog.hide(a.dialog.search)},on_search_dialog_click(){u.dialog.show(a.dialog.search)}}},Z={class:"full-width row flex-center text-accent q-gutter-sm"},J={class:"text-subtitle2"},W={class:"col-6 q-pr-xs text-left"},X={class:"col-6 q-pl-xs text-right"};function $(e,r,c,t,v,n){const s=E("KeyValue");return g(),B(D,null,[l(L,{class:"table-sticky-header q-ma-sm",rows:t.table.rows,columns:t.table.columns,loading:t.table.loading,selection:"single",dense:e.$q.screen.lt.md,"no-data-label":e.$t("error.data_not_available"),"rows-per-page-label":" ","rows-per-page-options":[10,20,30,40,50],"binary-state-sort":"",separator:"cell",pagination:t.table.pagination,"onUpdate:pagination":r[0]||(r[0]=i=>t.table.pagination=i),onRequest:n.do_request,bordered:""},{"top-right":o(()=>[l(f,{glossy:"",round:"",dense:"",class:"q-ma-none q-ml-md",color:"deep-orange",icon:"search",onClick:n.on_search_dialog_click},{default:o(()=>[Object.keys(t.table.filters).length?(g(),k(H,{key:0,class:"led-green",floating:""})):z("",!0),l(_,null,{default:o(()=>[b(m(e.$t("label.search")),1)]),_:1})]),_:1},8,["onClick"]),l(f,{glossy:"",round:"",dense:"",class:"q-ma-none q-ml-md",color:"indigo",icon:"refresh",loading:t.table.loading,onClick:n.on_refresh_click},{default:o(()=>[l(_,null,{default:o(()=>[b(m(e.$t("label.refresh")),1)]),_:1})]),_:1},8,["loading","onClick"])]),"no-data":o(({message:i})=>[p("div",Z,[l(A,{size:"2em",name:"block"}),p("span",J,m(i),1)])]),"body-selection":o(i=>[l(f,{glossy:"",round:"",dense:"",size:"sm",class:"q-ma-none q-ml-xs q-mr-sm",color:"deep-purple",icon:"visibility",onClick:h=>n.on_view_click(i)},{default:o(()=>[l(_,null,{default:o(()=>[b(m(e.$t("label.view")),1)]),_:1})]),_:2},1032,["onClick"])]),_:1},8,["rows","columns","loading","dense","no-data-label","pagination","onRequest"]),l(C,{modelValue:t.dialog.view.show,"onUpdate:modelValue":r[1]||(r[1]=i=>t.dialog.view.show=i),"transition-show":"scale","transition-hide":"fade","backdrop-filter":"blur(1px)"},{default:o(()=>[y(l(s,{parameters:t.dialog.view.parameters,style:q(t.dialog.view.style)},null,8,["parameters","style"]),[[P,t.dialog.view.onDrag,void 0,{mouse:!0}]])]),_:1},8,["modelValue"]),l(C,{modelValue:t.dialog.search.show,"onUpdate:modelValue":r[5]||(r[5]=i=>t.dialog.search.show=i),"transition-show":"scale","transition-hide":"fade","backdrop-filter":"blur(1px)",persistent:""},{default:o(()=>[l(O,{style:q("width: "+(e.$q.screen.lt.md?"100%;":"50%;")+t.dialog.search.style)},{default:o(()=>[y((g(),k(Q,{class:"q-pa-none header-main",style:q(t.APP?.color?.header?"background: "+t.APP.color.header+" !important;":"")},{default:o(()=>[l(j,{class:"q-pr-none"},{default:o(()=>[l(S,null,{default:o(()=>[l(K,{class:"text-h6 text-white"},{default:o(()=>[b(m(e.$t("label.search")),1)]),_:1})]),_:1}),l(S,{side:""},{default:o(()=>[y((g(),k(f,{class:"text-caption text-white q-pl-xs q-pr-xs q-mr-xs",flat:"",round:"",glossy:"",icon:"close"},{default:o(()=>[l(_,null,{default:o(()=>[b(m(e.$t("label.close")),1)]),_:1})]),_:1})),[[M]])]),_:1})]),_:1})]),_:1},8,["style"])),[[P,t.dialog.search.onDrag,void 0,{mouse:!0}]]),l(Q,{style:{"max-height":"70vh"},class:"q-pa-xs q-mt-xs scroll"},{default:o(()=>[l(V,{onSubmit:n.on_search_filter_click,onReset:n.on_search_reset_click},{default:o(()=>[l(x,{modelValue:t.table.filters.producerId,"onUpdate:modelValue":r[2]||(r[2]=i=>t.table.filters.producerId=i),type:"text",label:e.$t("label.producer_id"),filled:"",class:"q-mb-xs"},null,8,["modelValue","label"])]),_:1},8,["onSubmit","onReset"]),l(V,{onSubmit:n.on_search_filter_click,onReset:n.on_search_reset_click},{default:o(()=>[l(x,{modelValue:t.table.filters.topicName,"onUpdate:modelValue":r[3]||(r[3]=i=>t.table.filters.topicName=i),type:"text",label:e.$t("label.topic"),filled:"",class:"q-mb-xs"},null,8,["modelValue","label"])]),_:1},8,["onSubmit","onReset"]),l(V,{onSubmit:n.on_search_filter_click,onReset:n.on_search_reset_click},{default:o(()=>[l(x,{modelValue:t.table.filters.partition,"onUpdate:modelValue":r[4]||(r[4]=i=>t.table.filters.partition=i),type:"text",label:e.$t("label.partition"),filled:"",class:"q-mb-xs"},null,8,["modelValue","label"])]),_:1},8,["onSubmit","onReset"])]),_:1}),l(U),l(F,{class:"row"},{default:o(()=>[p("div",W,[l(f,{label:e.$t("label.reset"),color:"orange","no-caps":"",glossy:"",onClick:n.on_search_reset_click},null,8,["label","onClick"])]),p("div",X,[l(f,{label:e.$t("label.filter"),color:"purple","no-caps":"",glossy:"",onClick:n.on_search_filter_click},null,8,["label","onClick"])])]),_:1})]),_:1},8,["style"])]),_:1},8,["modelValue"])],64)}const ne=N(G,[["render",$]]);export{ne as default};
