const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/KeyValue-DfWQaSyQ.js","assets/QTd-YU6zkIbH.js","assets/index-D_M38cNk.js","assets/index-G0ic_0eP.css","assets/format-CmZjr7-1.js","assets/QTooltip-Ls1fZgw9.js","assets/QTable-BDsDrqiz.js","assets/ClosePopup-B9LXNHdj.js"])))=>i.map(i=>d[i]);
import{_ as j,ag as D,Y as I,Z as r,r as y,a0 as _,$ as k,ac as A,ae as p,a2 as h,a5 as n,aa as x,f as s,ah as Q,F as O,a3 as F,a4 as v,a7 as f,a8 as m,a6 as u,G as T,ai as S,aj as V,ak as c,ab as q,C as N,Q as E,al as Y,am as K}from"./index-D_M38cNk.js";import{Q as g}from"./QTooltip-Ls1fZgw9.js";import{Q as P,a as R}from"./QTable-BDsDrqiz.js";import{Q as H,b as U,a as J,e as L}from"./format-CmZjr7-1.js";import{Q as M}from"./QPopupProxy-BmfLpe9Q.js";import{Q as z}from"./QForm-Bs_cVO36.js";import{C as G}from"./ClosePopup-B9LXNHdj.js";import{T as B}from"./TouchPan-DOSOJ930.js";let a;const Z={components:{KeyValue:D(()=>K(()=>import("./KeyValue-DfWQaSyQ.js"),__vite__mapDeps([0,1,2,3,4,5,6,7])))},setup(){return{APP:I,util:r,sysprops:y([]),application:y([]),version:y([]),bean:y({rows:[],filters:{},columns:[],loading:!1,pagination:{page:1,rowsPerPage:20,sortBy:"beanName",descending:!1},search:_.dialog.init(()=>a.bean.search)}),option:y({boolean:["","true","false"]}),dialog:y({keyvalue:_.dialog.init(()=>a.dialog.keyvalue)})}},created(){a=this,a.bean.columns=[{name:"beanName",label:a.$t("label.bean_name"),field:"beanName",align:"left",sortable:!0},{name:"isProxy",label:a.$t("label.proxy"),field:"isProxy",align:"left",sortable:!0},{name:"isReloadable",label:a.$t("label.reloadable"),field:"isReloadable",align:"left",sortable:!0},{name:"isReconfigure",label:a.$t("label.reconfigure"),field:"isReconfigure",align:"left",sortable:!0},{name:"className",label:a.$t("label.class_name"),field:"className",align:"left",sortable:!0}],a.get_info(),a.get_sysprops(),a.get_beans()},methods:{get_info(){k.call({path:"/info",onSuccess(l){if(r.isObject(l.application)){let e=l.application;a.application=[{label:a.$t("label.id"),value:e.id},{label:a.$t("label.reactive"),value:e.reactive},{label:a.$t("label.native_image"),value:e.inNativeImage},{label:a.$t("label.display_name"),value:e.displayName},{label:a.$t("label.server_classname"),value:r.isString(e.serverClassname)?e.serverClassname:""},{label:a.$t("label.server_port"),value:r.isNumber(e.serverPort)?e.serverPort:""},{label:a.$t("label.bean_count"),value:e.beanCount},{label:a.$t("label.startup_date"),value:r.isNumber(e.startupDate)?r.format.date(e.startupDate,{format:"YYYY-MM-DD HH:mm:ss"}):""}]}if(r.isObject(l.version)){let e=l.version;a.version=[{label:"Ideahut",value:e.ideahut},{label:"Java",value:e.java},{label:"Spring Framework",value:e.springFramework},{label:"Spring Boot",value:e.springBoot},{label:"Hibernate",value:e.hibernate},{label:"Jedis",value:e.jedis},{label:"Quartz",value:e.quartz},{label:"Kafka",value:e.kafka}]}a.version=a.version.filter(e=>r.isString(e.value)),r.isArray(l.beans)&&(a.bean.rows=l.beans,a.bean.pagination.rowsNumber=a.bean.rows.length)}})},get_sysprops(){k.call({path:"/sysprops",onSuccess(l){r.isObject(l)&&(a.sysprops=[],Object.keys(l).forEach(e=>{a.sysprops.push({label:e,value:l[e]})}),r.sort.array(a.sysprops,"label"))}})},get_beans(l){let{page:e,rowsPerPage:w,sortBy:o,descending:C}=a.bean_pagination(l),b={index:e,size:w,order:(C?"-":"")+o};Object.keys(a.bean.filters).forEach(d=>{b[d]=a.bean.filters[d]}),a.bean.loading=!0,k.call({path:"/beans",params:b,onFinish(){a.bean.loading=!1},onSuccess(d){if(r.isObject(d)){a.bean.rows=r.isArray(d.data)?d.data:[];for(const t of a.bean.rows)t.isProxy=t.isProxy+"",t.isReconfigure=t.isReconfigure+"",t.isReloadable=t.isReloadable+"";let i=a.bean.pagination;if(i.page=d.index,i.rowsPerPage=d.size,r.isNumber(d.records))i.rowsNumber=d.records;else{let t=d.index*d.size;a.bean.rows.length!==d.size?i.rowsNumber=t:i.rowsNumber=t+1}}}})},bean_pagination(l){let e=l?.pagination?l.pagination:a.bean.pagination;return e?(a.bean.pagination=e,e):a.bean.pagination},on_bean_refresh_click(){a.bean.rows?.length||a.bean.pagination.page>1&&(a.bean.pagination.page=1),a.get_beans({pagination:a.bean.pagination})},on_bean_search_click(){_.dialog.show(a.bean.search)},on_bean_filter_click(){let l=a.bean.filters;r.isString(l.beanName)&&l.beanName!==""||delete l.beanName,r.isString(l.className)&&l.className!==""||delete l.className,r.isString(l.isProxy)&&l.isProxy!==""||delete l.isProxy,r.isString(l.isReloadable)&&l.isReloadable!==""||delete l.isReloadable,r.isString(l.isReconfigure)&&l.isReconfigure!==""||delete l.isReconfigure,a.get_beans({pagination:a.bean.pagination}),_.dialog.hide(a.bean.search)},on_bean_reset_click(){a.bean.filters={}},on_keyvalue_show(l,e,w){_.dialog.show(a.dialog.keyvalue,{title:l,search:w===!0,rows:e})}}},W={class:"row q-mt-none q-pa-sm"},X={class:"col-md-6 col-xs-12 q-pa-xs q-mb-sm"},$={class:"col-md-6 col-xs-12 q-pa-xs q-mb-sm"},ee={class:"col-md-12 col-xs-12 q-pa-xs q-mb-sm"},le={class:"full-width row flex-center text-accent q-gutter-sm"},ae={class:"text-subtitle2"},oe={class:"col-6 q-pr-xs text-left"},se={class:"col-6 q-pl-xs text-right"};function ne(l,e,w,o,C,b){const d=F("KeyValue");return v(),A(O,null,[p("div",W,[p("div",X,[o.application?.length?(v(),h(P,{key:0,class:"table-sticky-header no-column",style:{"max-height":"27vh"},title:l.$t("label.application"),rows:o.application,separator:"cell","rows-per-page-options":[0],"hide-bottom":"","hide-header":"",bordered:"",dense:""},{"top-right":n(()=>[s(u,{round:"",glossy:"",dense:"",size:"sm",icon:"display_settings",class:"q-mr-sm",onClick:e[0]||(e[0]=i=>b.on_keyvalue_show(l.$t("label.properties"),o.sysprops,!0))},{default:n(()=>[s(g,null,{default:n(()=>[f(m(l.$t("label.properties")),1)]),_:1})]),_:1}),s(u,{round:"",glossy:"",dense:"",size:"sm",icon:"lightbulb",onClick:e[1]||(e[1]=i=>b.on_keyvalue_show(l.$t("label.application"),o.application))},{default:n(()=>[s(g,null,{default:n(()=>[f(m(l.$t("label.view")),1)]),_:1})]),_:1})]),_:1},8,["title","rows"])):x("",!0)]),p("div",$,[o.version?.length?(v(),h(P,{key:0,class:"table-sticky-header no-column",style:{"max-height":"27vh"},title:l.$t("label.version"),rows:o.version,separator:"cell","rows-per-page-options":[0],"hide-bottom":"","hide-header":"",bordered:"",dense:""},{"top-right":n(()=>[s(u,{round:"",glossy:"",dense:"",size:"sm",icon:"lightbulb",onClick:e[2]||(e[2]=i=>b.on_keyvalue_show(l.$t("label.version"),o.version))},{default:n(()=>[s(g,null,{default:n(()=>[f(m(l.$t("label.view")),1)]),_:1})]),_:1})]),_:1},8,["title","rows"])):x("",!0)]),p("div",ee,[s(P,{class:"table-sticky-header",title:l.$t("label.bean"),rows:o.bean.rows,columns:o.bean.columns,loading:o.bean.loading,selection:"single",dense:l.$q.screen.lt.md,"no-data-label":l.$t("error.data_not_available"),"rows-per-page-label":" ","rows-per-page-options":[10,20,30,40,50,60,70,80,90,100],"binary-state-sort":"",separator:"cell",pagination:o.bean.pagination,"onUpdate:pagination":e[8]||(e[8]=i=>o.bean.pagination=i),onRequest:b.get_beans,bordered:""},{"top-right":n(()=>[s(u,{glossy:"",round:"",dense:"",class:"q-ma-none q-ml-md",color:"deep-orange",icon:"search",onClick:b.on_bean_search_click},{default:n(()=>[Object.keys(o.bean.filters).length?(v(),h(L,{key:0,class:"led-green",floating:""})):x("",!0),s(g,null,{default:n(()=>[f(m(l.$t("label.search")),1)]),_:1})]),_:1},8,["onClick"]),s(u,{glossy:"",round:"",dense:"",class:"q-ma-none q-ml-md",color:"indigo",icon:"refresh",loading:o.bean.loading,onClick:b.on_bean_refresh_click},{default:n(()=>[s(g,null,{default:n(()=>[f(m(l.$t("label.refresh")),1)]),_:1})]),_:1},8,["loading","onClick"])]),"no-data":n(({message:i})=>[p("div",le,[s(T,{size:"2em",name:"block"}),p("span",ae,m(i),1)])]),"body-selection":n(i=>[s(u,{glossy:"",round:"",dense:"",size:"sm",class:"q-ma-none q-ml-xs q-mr-sm",color:"deep-purple",icon:"visibility"},{default:n(()=>[s(g,null,{default:n(()=>[f(m(l.$t("label.view")),1)]),_:1}),s(M,{"transition-show":"scale","transition-hide":"scale",onBeforeShow:t=>o.bean.popup=i.row,style:"width: 400px;"},{default:n(()=>[s(S,null,{default:n(()=>[s(V,{style:{"max-height":"600px"},class:"q-pa-xs q-mt-none scroll"},{default:n(()=>[s(c,{type:"text",label:l.$t("label.bean_name"),class:"q-mb-xs",modelValue:o.bean.popup.beanName,"onUpdate:modelValue":e[3]||(e[3]=t=>o.bean.popup.beanName=t),readonly:"",filled:"",dense:"",autogrow:""},null,8,["label","modelValue"]),s(c,{type:"text",label:l.$t("label.proxy"),class:"q-mb-xs",modelValue:o.bean.popup.isProxy,"onUpdate:modelValue":e[4]||(e[4]=t=>o.bean.popup.isProxy=t),readonly:"",filled:"",dense:"",autogrow:""},null,8,["label","modelValue"]),s(c,{type:"text",label:l.$t("label.reloadable"),class:"q-mb-xs",modelValue:o.bean.popup.isReloadable,"onUpdate:modelValue":e[5]||(e[5]=t=>o.bean.popup.isReloadable=t),readonly:"",filled:"",dense:"",autogrow:""},null,8,["label","modelValue"]),s(c,{type:"text",label:l.$t("label.reconfigure"),class:"q-mb-xs",modelValue:o.bean.popup.isReconfigure,"onUpdate:modelValue":e[6]||(e[6]=t=>o.bean.popup.isReconfigure=t),readonly:"",filled:"",dense:"",autogrow:""},null,8,["label","modelValue"]),s(c,{type:"text",label:l.$t("label.class_name"),class:"q-mb-xs",modelValue:o.bean.popup.className,"onUpdate:modelValue":e[7]||(e[7]=t=>o.bean.popup.className=t),readonly:"",filled:"",dense:"",autogrow:""},null,8,["label","modelValue"])]),_:1})]),_:1})]),_:2},1032,["onBeforeShow"])]),_:2},1024)]),_:1},8,["title","rows","columns","loading","dense","no-data-label","pagination","onRequest"])])]),s(Q,{modelValue:o.bean.search.show,"onUpdate:modelValue":e[14]||(e[14]=i=>o.bean.search.show=i),"transition-show":"scale","transition-hide":"fade","backdrop-filter":"blur(1px)",persistent:""},{default:n(()=>[s(S,{style:q("width: "+(l.$q.screen.lt.md?"100%;":"50%;")+o.bean.search.style)},{default:n(()=>[N((v(),h(V,{class:"q-pa-none header-main",style:q(o.APP?.color?.header?"background: "+o.APP.color.header+" !important;":"")},{default:n(()=>[s(H,{class:"q-pr-none"},{default:n(()=>[s(U,null,{default:n(()=>[s(J,{class:"text-h6 text-white"},{default:n(()=>[f(m(l.$t("label.search")),1)]),_:1})]),_:1}),s(U,{side:""},{default:n(()=>[N((v(),h(u,{class:"text-caption text-white q-pl-xs q-pr-xs q-mr-xs",flat:"",round:"",glossy:"",icon:"close"},{default:n(()=>[s(g,null,{default:n(()=>[f(m(l.$t("label.close")),1)]),_:1})]),_:1})),[[G]])]),_:1})]),_:1})]),_:1},8,["style"])),[[B,o.bean.search.onDrag,void 0,{mouse:!0}]]),s(V,{style:{"max-height":"70vh"},class:"q-pa-xs q-mt-xs scroll"},{default:n(()=>[s(z,{onSubmit:b.on_bean_filter_click,onReset:b.on_bean_reset_click},{default:n(()=>[s(c,{modelValue:o.bean.filters.beanName,"onUpdate:modelValue":e[9]||(e[9]=i=>o.bean.filters.beanName=i),type:"text",label:l.$t("label.bean_name"),filled:"",class:"q-mb-xs"},null,8,["modelValue","label"])]),_:1},8,["onSubmit","onReset"]),s(z,{onSubmit:b.on_bean_filter_click,onReset:b.on_bean_reset_click},{default:n(()=>[s(c,{modelValue:o.bean.filters.className,"onUpdate:modelValue":e[10]||(e[10]=i=>o.bean.filters.className=i),type:"text",label:l.$t("label.class_name"),filled:"",class:"q-mb-xs"},null,8,["modelValue","label"])]),_:1},8,["onSubmit","onReset"]),s(R,{modelValue:o.bean.filters.isProxy,"onUpdate:modelValue":e[11]||(e[11]=i=>o.bean.filters.isProxy=i),label:l.$t("label.proxy"),options:o.option.boolean,filled:"",class:"q-mb-xs"},null,8,["modelValue","label","options"]),s(R,{modelValue:o.bean.filters.isReloadable,"onUpdate:modelValue":e[12]||(e[12]=i=>o.bean.filters.isReloadable=i),label:l.$t("label.reloadable"),options:o.option.boolean,filled:"",class:"q-mb-xs"},null,8,["modelValue","label","options"]),s(R,{modelValue:o.bean.filters.isReconfigure,"onUpdate:modelValue":e[13]||(e[13]=i=>o.bean.filters.isReconfigure=i),label:l.$t("label.reconfigure"),options:o.option.boolean,filled:"",class:"q-mb-xs"},null,8,["modelValue","label","options"])]),_:1}),s(E),s(Y,{class:"row"},{default:n(()=>[p("div",oe,[s(u,{label:l.$t("label.reset"),color:"orange","no-caps":"",glossy:"",onClick:b.on_bean_reset_click},null,8,["label","onClick"])]),p("div",se,[s(u,{label:l.$t("label.filter"),color:"purple","no-caps":"",glossy:"",onClick:b.on_bean_filter_click},null,8,["label","onClick"])])]),_:1})]),_:1},8,["style"])]),_:1},8,["modelValue"]),s(Q,{modelValue:o.dialog.keyvalue.show,"onUpdate:modelValue":e[15]||(e[15]=i=>o.dialog.keyvalue.show=i),"transition-show":"scale","transition-hide":"fade","backdrop-filter":"blur(1px)"},{default:n(()=>[N(s(d,{parameters:o.dialog.keyvalue.parameters,style:q(o.dialog.keyvalue.style)},null,8,["parameters","style"]),[[B,o.dialog.keyvalue.onDrag,void 0,{mouse:!0}]])]),_:1},8,["modelValue"])],64)}const fe=j(Z,[["render",ne]]);export{fe as default};
