import w from"./CzGYAQKm.js";import I from"./Cnnh-Nrl.js";import k from"./D9DxjwhY.js";import{u as v}from"./i06kq0be.js";import{d as g,Y as A,I as S,M as n,b as a,c as r,e as o,g as i,F as C,Z as B,j as e,w as u,p as L,i as N,s as b,$ as P,X as V,l as F}from"./DHVnTPCx.js";import"./BcWussCh.js";const M=t=>(L("data-v-fcda61d2"),t=t(),N(),t),T={key:0,class:"articles-list"},Y={class:"featured"},$={class:"layout"},j={key:1,class:"tour"},q=M(()=>o("p",null,"Seems like there are no articles yet.",-1)),D=g({__name:"ArticlesList",props:{path:{type:String,default:"articles"}},async setup(t){let s,l;const _=t,{data:m}=([s,l]=A(async()=>v(_.path,async()=>await b(P(_.path)).sort({date:-1}).find(),"$NP6Mt2bIt3")),s=await s,l(),s),c=S(()=>m.value||[]);return(E,X)=>{var d;const p=w,f=I,h=k;return(d=n(c))!=null&&d.length?(a(),r("div",T,[o("div",Y,[i(p,{article:n(c)[0],featured:!0},null,8,["article"])]),o("div",$,[(a(!0),r(C,null,B(n(c).slice(1),(y,x)=>(a(),V(p,{key:x,article:y},null,8,["article"]))),128))])])):(a(),r("div",j,[q,o("p",null,[e(" You can start by "),i(f,{href:"https://alpine.nuxt.space/articles/write-articles"},{default:u(()=>[e("creating")]),_:1}),e(" one in the "),i(h,null,{default:u(()=>[e("articles")]),_:1}),e(" folder. ")])]))}}}),O=F(D,[["__scopeId","data-v-fcda61d2"]]);export{O as default};
