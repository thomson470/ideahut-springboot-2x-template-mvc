import{_ as k,bj as q,Y as m,r as d,Z as g,$ as x,aa as p,f as r,a2 as n,aG as C,F as Q,a3 as $,a4 as _,a5 as c,a6 as b,a7 as u,aF as y,G as V,a9 as v,bn as j}from"./index.cf0e6694.js";import{Q as E}from"./QSpace.1021ecfc.js";import{Q as f}from"./QTooltip.3cd33127.js";import{Q as O}from"./QInnerLoading.1086a0a2.js";import{Q as T}from"./QTable.4293fe89.js";import"./format.650a3fa7.js";const B={components:{Keys:q(()=>j(()=>import("./CacheKeys.1069f700.js"),["assets/CacheKeys.1069f700.js","assets/format.650a3fa7.js","assets/index.cf0e6694.js","assets/index.eebf37ce.css","assets/QTooltip.3cd33127.js","assets/QSpace.1021ecfc.js","assets/QInnerLoading.1086a0a2.js","assets/QTable.4293fe89.js","assets/ClosePopup.fb083e6c.js"]))},setup(){return{util:m,type:d(null),handler:d(null),columns:{single:[],group:[]},table:d({rows:[],columns:[],loading:!1,clearing:{}}),dialog:d({keys:{show:!1,parameters:null}})}},created(){let e=this;e.columns={single:[{name:"label",label:e.$t("label.name"),field:"label",align:"left",sortable:!0},{name:"limit",label:e.$t("label.limit"),field:"limit",align:"left",sortable:!0},{name:"nullable",label:e.$t("label.nullable"),field:"nullable",align:"left",sortable:!0}],group:[{name:"label",label:e.$t("label.group"),field:"label",align:"left",sortable:!0},{name:"limit",label:e.$t("label.limit"),field:"limit",align:"left",sortable:!0},{name:"nullable",label:e.$t("label.nullable"),field:"nullable",align:"left",sortable:!0},{name:"expiry",label:e.$t("label.expiry"),field:"expiry",align:"left",sortable:!0}]},e.do_init()},beforeUpdate(){this.do_init()},methods:{do_init(){let e=this,l=e.$route.query.type,t=e.$route.query.handler;l===e.type&&t===e.handler||(e.type=l,e.handler=t,e.do_request())},do_request(){let e=this;e.table.loading=!0,g.call({path:"/cache/info",params:{type:e.type,handler:e.handler},onFinish(){e.table.loading=!1},onSuccess(l,t){if(t=m.isObject(t)?t:{},t.type==="group"){l=m.isObject(l)?l:{};let a=m.isObject(l.groups)?l.groups:{};e.table.columns=e.columns.group,e.table.columns[1].format=i=>i===0?e.$t("label.unlimited"):i,e.table.columns[3].format=i=>i&&i>0?i:e.$t("label.never_expire"),e.table.rows=[],Object.keys(a).forEach(i=>{let s=a[i];e.table.rows.push({name:s.name,label:s.name,limit:s.limit,nullable:s.nullable,expiry:s.expiry,is_group:!0}),e.table.clearing[s.name]=!1})}else if(t.type=="single"){e.table.columns=e.columns.single,e.table.columns[1].format=a=>a===0?e.$t("label.unlimited"):a,e.table.rows=m.isArray(l)?l:[];for(const a of e.table.rows)e.table.clearing[a.name]=!1,a.is_group=!1}}})},on_clear_click(e){let l=this;x.confirm(function(){let t;e.row.is_group?t={name:l.handler,group:e.row.name}:t={name:e.row.name},l.table.clearing[e.row.name]=!0,g.call({path:"/cache/clear",method:"post",data:{info:t},onSuccess(a){setTimeout(function(){l.table.clearing[e.row.name]=!1,l.do_request()},500)},onError(){l.table.clearing[e.row.name]=!1},notify:!0})},"confirm.clear",e.row.label)},on_keys_click(e){let l=this;l.dialog.keys={show:!0,parameters:{title:e.row.label,name:e.row.is_group?l.handler:e.row.name,group:e.row.is_group?e.row.name:null}}}}},F={class:"full-width row flex-center text-accent q-gutter-sm"},N={class:"text-subtitle2"},S={key:0};function z(e,l,t,a,i,s){const h=$("Keys");return _(),p(Q,null,[r(T,{class:"table-sticky-header q-ma-sm",rows:a.table.rows,columns:a.table.columns,"row-key":"name",loading:a.table.loading,selection:"single",selected:a.table.selected,"onUpdate:selected":l[0]||(l[0]=o=>a.table.selected=o),dense:e.$q.screen.lt.md,"no-data-label":e.$t("error.data_not_available"),"rows-per-page-label":" ","selected-rows-label":o=>{},"binary-state-sort":"",separator:"cell","hide-bottom":"",bordered:""},{top:n(()=>[r(E),r(c,{glossy:"",round:"",dense:"",class:"q-ma-none q-ml-md",color:"indigo",icon:"refresh",loading:a.table.loading,onClick:s.do_request},{default:n(()=>[r(f,null,{default:n(()=>[b(u(e.$t("label.refresh")),1)]),_:1})]),_:1},8,["loading","onClick"])]),"no-data":n(({message:o})=>[y("div",F,[r(V,{size:"2em",name:"block"}),y("span",N,u(o),1)])]),loading:n(()=>[r(O,{showing:"",color:"primary"})]),"body-selection":n(o=>[o.row.limit!==0?(_(),p("div",S,[r(c,{glossy:"",round:"",dense:"",size:"sm",class:"q-ma-none q-ml-xs q-mr-sm",color:"deep-orange-10",icon:"clear_all",loading:a.table.clearing[o.row.name],onClick:w=>s.on_clear_click(o)},{default:n(()=>[r(f,null,{default:n(()=>[b(u(e.$t("label.clear")),1)]),_:1})]),_:2},1032,["loading","onClick"]),r(c,{glossy:"",round:"",dense:"",size:"sm",class:"q-ma-none q-ml-xs q-mr-sm",color:"primary",icon:"list_alt",onClick:w=>s.on_keys_click(o)},{default:n(()=>[r(f,null,{default:n(()=>[b(u(e.$t("label.keys")),1)]),_:1})]),_:2},1032,["onClick"])])):v("",!0)]),_:1},8,["rows","columns","loading","selected","dense","no-data-label"]),r(C,{modelValue:a.dialog.keys.show,"onUpdate:modelValue":l[1]||(l[1]=o=>a.dialog.keys.show=o),persistent:"","transition-show":"slide-down","transition-hide":"none"},{default:n(()=>[r(h,{parameters:a.dialog.keys.parameters},null,8,["parameters"])]),_:1},8,["modelValue"])],64)}var L=k(B,[["render",z]]);export{L as default};