import{a as v,v as g,r as w,o as x,x as k,b as S,e as t,u as e,f as s,g as j,j as y,h as L,t as l}from"./vendor.fb95871b.js";import{a as C,g as R}from"./util.35b21a42.js";import m from"./LinkIcon.6d815ce8.js";import E from"./Title.4a1485ab.js";import{_ as I}from"./plugin-vue_export-helper.5a098b48.js";const N={class:"mini-web-card"},U={class:"mini-web-card-item-front"},B=["src"],T={class:"mini-web-card-item-behind"},D={class:"mini-web-card-link-container"},A=["href"],V=["href"],F=v({props:{cardSourceURL:String,directory:{type:String,default:"javascript"},href:String,cardName:String,cardIndex:Number},setup(i){const _=i,p="https://www.eveningwater.com/my-web-projects/",f="https://github.com/eveningwater/my-web-projects/tree/master/",{cardSourceURL:u,href:n,cardName:o,cardIndex:b}=g(_),c=w(null);return x(()=>{k(()=>{var a;const r=(a=c.value)==null?void 0:a.$el;C(r)?r.classList.add("mini-web-card-hover-title"):r.classList.remove("mini-web-card-hover-title")})}),(r,a)=>(y(),S("div",N,[t("div",U,[t("img",{src:e(R)(i.directory,e(u)),alt:"\u56FE\u7247\u52A0\u8F7D\u4E2D",class:"mini-web-card-img"},null,8,B)]),t("div",T,[s(e(E),{level:"2",class:"mini-web-card-title","data-title":e(o),ref:(d,h)=>{h.titleContainer=d,c.value=d}},{default:j(()=>[L(l(e(b)+1)+"."+l(e(o)),1)]),_:1},8,["data-title"]),t("div",D,[t("a",{href:p+e(n),target:"_blank",rel:"noopener noreferrer",class:"mini-web-card-link"},[s(e(m))],8,A),t("a",{href:f+e(n),target:"_blank",rel:"noopener noreferrer",class:"mini-web-card-link"},[s(e(m),{type:"githubDProp"})],8,V)])])]))}});var z=I(F,[["__scopeId","data-v-17e3b9c8"]]);export{z as default};
