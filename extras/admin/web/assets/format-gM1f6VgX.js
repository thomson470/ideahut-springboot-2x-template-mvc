import{l as s,c as u,h as o,E as b,L as E,v as q,u as I,y as k,b9 as $,r as g,g as y,a$ as A,H as K,az as R}from"./index-BiudiscR.js";const N=s({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const a=u(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>o("div",{class:a.value},b(t.default))}}),j=["top","middle","bottom"],z=s({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:e=>j.includes(e)}},setup(e,{slots:t}){const a=u(()=>e.align!==void 0?{verticalAlign:e.align}:null),l=u(()=>{const i=e.outline===!0&&e.color||e.textColor;return`q-badge flex inline items-center no-wrap q-badge--${e.multiLine===!0?"multi":"single"}-line`+(e.outline===!0?" q-badge--outline":e.color!==void 0?` bg-${e.color}`:"")+(i!==void 0?` text-${i}`:"")+(e.floating===!0?" q-badge--floating":"")+(e.rounded===!0?" q-badge--rounded":"")+(e.transparent===!0?" q-badge--transparent":"")});return()=>o("div",{class:l.value,style:a.value,role:"status","aria-label":e.label},E(t.default,e.label!==void 0?[e.label]:[]))}}),P=s({name:"QItem",props:{...q,...I,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:a}){const{proxy:{$q:l}}=y(),i=k(e,l),{hasLink:c,linkAttrs:B,linkClass:h,linkTag:_,navigateOnClick:x}=$(),d=g(null),v=g(null),f=u(()=>e.clickable===!0||c.value===!0||e.tag==="label"),r=u(()=>e.disable!==!0&&f.value===!0),L=u(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(i.value===!0?" q-item--dark":"")+(c.value===!0&&e.active===null?h.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(r.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),C=u(()=>e.insetLevel===void 0?null:{["padding"+(l.lang.rtl===!0?"Right":"Left")]:16+e.insetLevel*56+"px"});function S(n){r.value===!0&&(v.value!==null&&(n.qKeyEvent!==!0&&document.activeElement===d.value?v.value.focus():document.activeElement===v.value&&d.value.focus()),x(n))}function w(n){if(r.value===!0&&A(n,[13,32])===!0){K(n),n.qKeyEvent=!0;const m=new MouseEvent("click",n);m.qKeyEvent=!0,d.value.dispatchEvent(m)}a("keyup",n)}function Q(){const n=R(t.default,[]);return r.value===!0&&n.unshift(o("div",{class:"q-focus-helper",tabindex:-1,ref:v})),n}return()=>{const n={ref:d,class:L.value,style:C.value,role:"listitem",onClick:S,onKeyup:w};return r.value===!0?(n.tabindex=e.tabindex||"0",Object.assign(n,B.value)):f.value===!0&&(n["aria-disabled"]="true"),o(_.value,n,Q())}}}),T=s({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const a=u(()=>parseInt(e.lines,10)),l=u(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(a.value===1?" ellipsis":"")),i=u(()=>e.lines!==void 0&&a.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":a.value}:null);return()=>o("div",{style:i.value,class:l.value},b(t.default))}}),D=["ul","ol"],F=s({name:"QList",props:{...q,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const a=y(),l=k(e,a.proxy.$q),i=u(()=>D.includes(e.tag)?null:"list"),c=u(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(l.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>o(e.tag,{class:c.value,role:i.value},b(t.default))}});function O(e,t,a){return a<=t?t:Math.min(a,Math.max(t,e))}function W(e,t,a){if(a<=t)return t;const l=a-t+1;let i=t+(e-t)%l;return i<t&&(i=l+i),i===0?0:i}function H(e,t=2,a="0"){if(e==null)return e;const l=""+e;return l.length>=t?l:new Array(t-l.length+1).join(a)+l}export{P as Q,T as a,N as b,O as c,F as d,z as e,W as n,H as p};
