"use strict";(self.webpackChunktest_website=self.webpackChunktest_website||[]).push([[3751],{27962:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var l=a(67294),n=a(86010),r=a(35155),s=a(10833),c=a(35281),m=a(95677),o=a(13008);const u="tag_Nnez";function i(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:u},l.createElement(o.Z,e))))),l.createElement("hr",null))}function g(e){let{tags:t}=e;const a=(0,r.P)(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(i,{key:e.letter,letterEntry:e}))))}var E=a(90197);function p(e){let{tags:t}=e;const a=(0,r.M)();return l.createElement(s.FG,{className:(0,n.default)(c.k.wrapper.docsPages,c.k.page.docsTagsListPage)},l.createElement(s.d,{title:a}),l.createElement(E.Z,{tag:"doc_tags_list"}),l.createElement(m.Z,null,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement("main",{className:"col col--8 col--offset-2"},l.createElement("h1",null,a),l.createElement(g,{tags:t}))))))}},13008:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(67294),n=a(86010),r=a(39960);const s="tag_zVej",c="tagRegular_sFm0",m="tagWithCount_h2kH";function o(e){let{permalink:t,label:a,count:o}=e;return l.createElement(r.default,{href:t,className:(0,n.default)(s,o?m:c)},a,o&&l.createElement("span",null,o))}},35155:(e,t,a)=>{a.d(t,{M:()=>n,P:()=>r});var l=a(95999);const n=()=>(0,l.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function r(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[l]=t;return a.localeCompare(l)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}}}]);