import{c as o,l as $,r as s,O as T,be as H,o as M,h as a,p as O,E as Q,bm as A,w as F,bn as S,g as P,_ as V,ac as W,f as G,a4 as J}from"./index-BiudiscR.js";const K={ratio:[String,Number]};function U(e,r){return o(()=>{const u=Number(e.ratio||(r!==void 0?r.value:void 0));return isNaN(u)!==!0&&u>0?{paddingBottom:`${100/u}%`}:null})}const X=1.7778,Y=$({name:"QImg",props:{...K,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:X},placeholderSrc:String,errorSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:r,emit:u}){const y=s(e.initialRatio),_=U(e,y),f=P(),{registerTimeout:C,removeTimeout:m}=T(),{registerTimeout:k,removeTimeout:b}=T(),v=o(()=>e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null),N=o(()=>e.errorSrc!==void 0?{src:e.errorSrc,__qerror:!0}:null),i=[s(null),s(v.value)],n=s(0),c=s(!1),g=s(!1),L=o(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),z=o(()=>({width:e.width,height:e.height})),B=o(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition q-img__image--`),I=o(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));function R(){if(b(),e.loadingShowDelay===0){c.value=!0;return}k(()=>{c.value=!0},e.loadingShowDelay)}function h(){b(),c.value=!1}function x({target:t}){S(f)===!1&&(m(),y.value=t.naturalHeight===0?.5:t.naturalWidth/t.naturalHeight,w(t,1))}function w(t,l){l===1e3||S(f)===!0||(t.complete===!0?D(t):C(()=>{w(t,l+1)},50))}function D(t){S(f)!==!0&&(n.value=n.value^1,i[n.value].value=null,h(),t.getAttribute("__qerror")!=="true"&&(g.value=!1),u("load",t.currentSrc||t.src))}function j(t){m(),h(),g.value=!0,i[n.value].value=N.value,i[n.value^1].value=v.value,u("error",t)}function q(t){const l=i[t].value,d={key:"img_"+t,class:B.value,style:I.value,alt:e.alt,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...l};return n.value===t?Object.assign(d,{class:d.class+"current",onLoad:x,onError:j}):d.class+="loaded",a("div",{class:"q-img__container absolute-full",key:"img"+t},a("img",d))}function E(){return c.value===!1?a("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},Q(r[g.value===!0?"error":"default"])):a("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},r.loading!==void 0?r.loading():e.noSpinner===!0?void 0:[a(A,{color:e.spinnerColor,size:e.spinnerSize})])}{let t=function(){F(()=>e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null,l=>{m(),g.value=!1,l===null?(h(),i[n.value^1].value=v.value):R(),i[n.value].value=l},{immediate:!0})};H.value===!0?M(t):t()}return()=>{const t=[];return _.value!==null&&t.push(a("div",{key:"filler",style:_.value})),i[0].value!==null&&t.push(q(0)),i[1].value!==null&&t.push(q(1)),t.push(a(O,{name:"q-transition--fade"},E)),a("div",{key:"main",class:L.value,style:z.value,role:"img","aria-label":e.alt},t)}}}),Z="/__admin__/assets/logo-CA7NL8Dr.png",p={},ee={class:"flex flex-center"};function te(e,r){return J(),W("div",ee,[G(Y,{class:"login-form",src:Z,ratio:1,style:{"max-width":"300px"},fit:"fill"})])}const ne=V(p,[["render",te]]);export{ne as default};
