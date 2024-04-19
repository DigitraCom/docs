"use strict";(self.webpackChunktest_website=self.webpackChunktest_website||[]).push([[138],{53465:(e,t,a)=>{a.d(t,{W:()=>m});var r=a(96540),n=a(44586),l=a(96763);const s=["zero","one","two","few","many","other"];function c(e){return s.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function u(){const{i18n:{currentLocale:e}}=(0,n.default)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:c(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return l.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function m(){const e=u();return{selectMessage:(t,a)=>function(e,t,a){const r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&l.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const n=a.select(t),s=a.pluralForms.indexOf(n);return r[Math.min(s,r.length-1)]}(a,t,e)}}},41283:(e,t,a)=>{a.r(t),a.d(t,{default:()=>P});var r=a(96540),n=a(44586),l=a(50637),s=a(5260),c=a(75489),o=a(21312),u=a(53465),m=a(20053),h=a(56347),i=a(92303),p=a(11088);const g=function(){const e=(0,i.default)(),t=(0,h.W6)(),a=(0,h.zy)(),{siteConfig:{baseUrl:r}}=(0,n.default)(),l=e?new URLSearchParams(a.search):null,s=l?.get("q")||"",c=l?.get("ctx")||"",o=l?.get("version")||"",u=e=>{const t=new URLSearchParams(a.search);return e?t.set("q",e):t.delete("q"),t};return{searchValue:s,searchContext:c&&Array.isArray(p.Hg)&&p.Hg.some((e=>"string"==typeof e?e===c:e.path===c))?c:"",searchVersion:o,updateSearchPath:e=>{const a=u(e);t.replace({search:a.toString()})},updateSearchContext:e=>{const r=new URLSearchParams(a.search);r.set("ctx",e),t.replace({search:r.toString()})},generateSearchPageLink:e=>{const t=u(e);return`${r}search?${t.toString()}`}}};var d=a(5891),f=a(32384),y=a(86841),E=a(43810),C=a(27674),S=a(2849),x=a(4471);const w={searchContextInput:"searchContextInput_mXoe",searchQueryInput:"searchQueryInput_CFBF",searchResultItem:"searchResultItem_U687",searchResultItemPath:"searchResultItemPath_uIbk",searchResultItemSummary:"searchResultItemSummary_oZHr",searchQueryColumn:"searchQueryColumn_q7nx",searchContextColumn:"searchContextColumn_oWAF"};var I=a(43385);function v(){const{siteConfig:{baseUrl:e},i18n:{currentLocale:t}}=(0,n.default)(),{selectMessage:a}=(0,u.W)(),{searchValue:l,searchContext:c,searchVersion:h,updateSearchPath:i,updateSearchContext:y}=g(),[E,C]=(0,r.useState)(l),[x,v]=(0,r.useState)(),[P,b]=(0,r.useState)(),A=`${e}${h}`,_=(0,r.useMemo)((()=>E?(0,o.T)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:E}):(0,o.T)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[E]);(0,r.useEffect)((()=>{i(E),x&&(E?x(E,(e=>{b(e)})):b(void 0))}),[E,x]);const F=(0,r.useCallback)((e=>{C(e.target.value)}),[]);return(0,r.useEffect)((()=>{l&&l!==E&&C(l)}),[l]),(0,r.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=!Array.isArray(p.Hg)||c||p.dz?await(0,d.Z)(A,c):{wrappedIndexes:[],zhDictionary:[]};v((()=>(0,f.m)(e,t,100)))}()}),[c,A]),r.createElement(r.Fragment,null,r.createElement(s.A,null,r.createElement("meta",{property:"robots",content:"noindex, follow"}),r.createElement("title",null,_)),r.createElement("div",{className:"container margin-vert--lg"},r.createElement("h1",null,_),r.createElement("div",{className:"row"},r.createElement("div",{className:(0,m.default)("col",{[w.searchQueryColumn]:Array.isArray(p.Hg),"col--9":Array.isArray(p.Hg),"col--12":!Array.isArray(p.Hg)})},r.createElement("input",{type:"search",name:"q",className:w.searchQueryInput,"aria-label":"Search",onChange:F,value:E,autoComplete:"off",autoFocus:!0})),Array.isArray(p.Hg)?r.createElement("div",{className:(0,m.default)("col","col--3","padding-left--none",w.searchContextColumn)},r.createElement("select",{name:"search-context",className:w.searchContextInput,id:"context-selector",value:c,onChange:e=>y(e.target.value)},p.dz&&r.createElement("option",{value:""},(0,o.T)({id:"theme.SearchPage.searchContext.everywhere",message:"everywhere"})),p.Hg.map((e=>{const{label:a,path:n}=(0,I.p)(e,t);return r.createElement("option",{key:n,value:n},a)})))):null),!x&&E&&r.createElement("div",null,r.createElement(S.A,null)),P&&(P.length>0?r.createElement("p",null,a(P.length,(0,o.T)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:P.length}))):r.createElement("p",null,(0,o.T)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),r.createElement("section",null,P&&P.map((e=>r.createElement(R,{key:e.document.i,searchResult:e}))))))}function R(e){let{searchResult:{document:t,type:a,page:n,tokens:l,metadata:s}}=e;const o=0===a,u=2===a,m=(o?t.b:n.b).slice(),h=u?t.s:t.t;o||m.push(n.t);let i="";if(p.CU&&l.length>0){const e=new URLSearchParams;for(const t of l)e.append("_highlight",t);i=`?${e.toString()}`}return r.createElement("article",{className:w.searchResultItem},r.createElement("h2",null,r.createElement(c.default,{to:t.u+i+(t.h||""),dangerouslySetInnerHTML:{__html:u?(0,y.Z)(h,l):(0,E.C)(h,(0,C.g)(s,"t"),l,100)}})),m.length>0&&r.createElement("p",{className:w.searchResultItemPath},(0,x.$)(m)),u&&r.createElement("p",{className:w.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,E.C)(t.t,(0,C.g)(s,"t"),l,100)}}))}const P=function(){return r.createElement(l.A,null,r.createElement(v,null))}}}]);