"use strict";(self.webpackChunktest_website=self.webpackChunktest_website||[]).push([[87],{27736:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>b,default:()=>v,frontMatter:()=>u,metadata:()=>y,toc:()=>f});var s=a(87462),i=(a(67294),a(3905)),m=a(58219),r=(a(62316),a(51039)),l=a.n(r),n=(a(82723),a(9487)),o=a(41429),d=a(5397),p=a(4667),k=a(9472),c=(a(1176),a(12005),a(85162));const u={id:"get-orderbook-by-market-id",title:"Get Orderbook",description:"List the current bid and ask offers of a specific market.",sidebar_label:"Get Orderbook",hide_title:!0,hide_table_of_contents:!0,api:"eJzVVk1v2zgQ/SuETi1gy5L8kdi3dhsUxXaRoklPRRFQ0thiIokMSTlxBf/3zlCybNlJm6LoYX2xSA5n3nvzSKn2NBglSwPGW9ReFAT0l4JJtFBWyNJbeJf/egMvkaWF0tIqVyoXCafV0a2hkNozSQYFpye7UYCbZHwLicWNj0N45IXKmwIXzTMLaYClq7xJae5w+WvtKS0S2h6No/HUDyeYwIjvNBP4wWQ+Ofe2g8Oo8TT0x1EvKpyezc+87beBF4v0KGs0nc38WT8+mgdR1E8bTaZj/2zeCwvmkwirf9tutwOMlAq0FQ2pPY9j8v24hmUXxbXmGwzqq/1RGMvkklEwe7XUsmAG8hy0eY3TS/z3cY+wUJhfV2wZdWHGalGuMKztSV/pPpDrDNia5xUwm3HLHkSesxiY4iJlVragfBSuFelnRXbNe6oGL2RVWkqJ2V3WFLM6mZsGvlAwDG71iqvN35Nrb6Hn5DpWysF5uVCNH3+pFGXthKpUyi2kN/zQhQJP7Aq0O4PGSjy0q8ytixRXS51Obyt5v86KMCFwHYhwdo6WOI/OZuPzWTAPT6CIAozFYCZL9pBBiQYRhkmdgo6lvGMP3LCcY1daWA3KfQmn9eUunAZOuP/tldDX/1i+bfsbeGQ1d21+oAaswA47zYbxZlhwfYdz2J0nLW7RAUmlNd7Czuu8TOmSaF3urgxmFCRiKRLW5CLrK655ARZDHO+Ti3rvkkKUH6Fc2Qw54Ig/dqMgOLDHOHChoqiKXWD7TGEFtk9g3OUSJ5CzIPz3FWg6uCUiwSHuuElBYepjov81uVhZFTFo4oQntzQ+ewdLjpkXLAp815guFfG8cZq5Uoq7tBruK6EBdba6gsEp7SfO3tvrf4Zfrt7RWThGRUWYSFF6Utf10HeNR2Uz2XbTiU16eaN1OGqQmVHdQdyOunaTjUCvd02pdI67MmuVWYxGXAk/FSthNfcTWZyI9EnLtErcgCAYQFcIu7kiiu5sOdmX0rEV1nFrKBj2+eLqmr359MFgVirfZFyHRFpJYwvuXuetuu+R9eUB5h6Oev9N8EcGbRti4dGOVM6xi3ShkSJ1q+dXAjhoe03IF4dt34uKYmTIgTbUdcwNfNH5dkvTjQFJ6lQYHudkjCXPDfyE08u8+Az+O9gcGb294jzXszXXgmD8JqRXn1tbv2bPePIZOLsXaLk5RLKHuVMTP29QQ+CoqIPWrL9JEiRxsPPkC7B3FN5fXOOF/wO/cGXi",sidebar_class_name:"get api-method",info_path:"docs/rest/markets/markets-rest-apis",custom_edit_url:null},b=void 0,y={unversionedId:"rest/markets/get-orderbook-by-market-id",id:"rest/markets/get-orderbook-by-market-id",title:"Get Orderbook",description:"List the current bid and ask offers of a specific market.",source:"@site/docs/rest/markets/get-orderbook-by-market-id.api.mdx",sourceDirName:"rest/markets",slug:"/rest/markets/get-orderbook-by-market-id",permalink:"/docs/rest/markets/get-orderbook-by-market-id",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-orderbook-by-market-id",title:"Get Orderbook",description:"List the current bid and ask offers of a specific market.",sidebar_label:"Get Orderbook",hide_title:!0,hide_table_of_contents:!0,api:"eJzVVk1v2zgQ/SuETi1gy5L8kdi3dhsUxXaRoklPRRFQ0thiIokMSTlxBf/3zlCybNlJm6LoYX2xSA5n3nvzSKn2NBglSwPGW9ReFAT0l4JJtFBWyNJbeJf/egMvkaWF0tIqVyoXCafV0a2hkNozSQYFpye7UYCbZHwLicWNj0N45IXKmwIXzTMLaYClq7xJae5w+WvtKS0S2h6No/HUDyeYwIjvNBP4wWQ+Ofe2g8Oo8TT0x1EvKpyezc+87beBF4v0KGs0nc38WT8+mgdR1E8bTaZj/2zeCwvmkwirf9tutwOMlAq0FQ2pPY9j8v24hmUXxbXmGwzqq/1RGMvkklEwe7XUsmAG8hy0eY3TS/z3cY+wUJhfV2wZdWHGalGuMKztSV/pPpDrDNia5xUwm3HLHkSesxiY4iJlVragfBSuFelnRXbNe6oGL2RVWkqJ2V3WFLM6mZsGvlAwDG71iqvN35Nrb6Hn5DpWysF5uVCNH3+pFGXthKpUyi2kN/zQhQJP7Aq0O4PGSjy0q8ytixRXS51Obyt5v86KMCFwHYhwdo6WOI/OZuPzWTAPT6CIAozFYCZL9pBBiQYRhkmdgo6lvGMP3LCcY1daWA3KfQmn9eUunAZOuP/tldDX/1i+bfsbeGQ1d21+oAaswA47zYbxZlhwfYdz2J0nLW7RAUmlNd7Czuu8TOmSaF3urgxmFCRiKRLW5CLrK655ARZDHO+Ti3rvkkKUH6Fc2Qw54Ig/dqMgOLDHOHChoqiKXWD7TGEFtk9g3OUSJ5CzIPz3FWg6uCUiwSHuuElBYepjov81uVhZFTFo4oQntzQ+ewdLjpkXLAp815guFfG8cZq5Uoq7tBruK6EBdba6gsEp7SfO3tvrf4Zfrt7RWThGRUWYSFF6Utf10HeNR2Uz2XbTiU16eaN1OGqQmVHdQdyOunaTjUCvd02pdI67MmuVWYxGXAk/FSthNfcTWZyI9EnLtErcgCAYQFcIu7kiiu5sOdmX0rEV1nFrKBj2+eLqmr359MFgVirfZFyHRFpJYwvuXuetuu+R9eUB5h6Oev9N8EcGbRti4dGOVM6xi3ShkSJ1q+dXAjhoe03IF4dt34uKYmTIgTbUdcwNfNH5dkvTjQFJ6lQYHudkjCXPDfyE08u8+Az+O9gcGb294jzXszXXgmD8JqRXn1tbv2bPePIZOLsXaLk5RLKHuVMTP29QQ+CoqIPWrL9JEiRxsPPkC7B3FN5fXOOF/wO/cGXi",sidebar_class_name:"get api-method",info_path:"docs/rest/markets/markets-rest-apis",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"List Markets",permalink:"/docs/rest/markets/get-markets"},next:{title:"Get Prices",permalink:"/docs/rest/markets/get-prices-by-market-id"}},h={},f=[{value:"Request",id:"request",level:2}],g={toc:f};function v(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"Get Orderbook"),(0,i.kt)(l(),{method:"get",path:"/v1/markets/{market_id}/orderbook",mdxType:"MethodEndpoint"}),(0,i.kt)("p",null,"List the current bid and ask offers of a specific market."),(0,i.kt)("h2",{id:"request"},"Request"),(0,i.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(o.Z,{className:"paramsItem",param:{name:"market_id",in:"path",required:!0,schema:{type:"string",example:"BTC-USD"},description:"Market identification."},mdxType:"ParamsItem"})))),(0,i.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Query Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(o.Z,{className:"paramsItem",param:{schema:{type:"integer",minLength:1,maxLength:100,example:30,minimum:1,maximum:100,multipleOf:1},in:"query",name:"max_depth",description:"Maximum number of itens. Default: 20."},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(m.Z,{label:void 0,id:void 0,mdxType:"ApiTabs"},(0,i.kt)(c.default,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"OK")),(0,i.kt)("div",null,(0,i.kt)(n.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(c.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(k.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(c.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"result"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"asks"),(0,i.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"List of asks (from sellers) offers.")),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(p.Z,{collapsible:!1,name:"price",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"23235.14",description:"The value that will be paid to seller."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"size",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"0.04948",description:"The amount to be selled."},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"bids"),(0,i.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"List of bid (from buyers) offers.")),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(p.Z,{collapsible:!1,name:"price",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"22566.62",description:"The value will be paid to buyer."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"size",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"0.029022",description:"The amount to be buyed."},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,i.kt)(p.Z,{collapsible:!1,name:"updated_at",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer","x-stoplight":{id:"nrd5juoqvhm1c"},example:0x5fa188f72ed2b,description:"Timestamp on when this orderbook was last updated."},mdxType:"SchemaItem"}))))))),(0,i.kt)(c.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(d.Z,{responseExample:'{\n  "result": {\n    "asks": [\n      {\n        "price": "23235.14",\n        "size": "0.04948"\n      }\n    ],\n    "bids": [\n      {\n        "price": "22566.62",\n        "size": "0.029022"\n      }\n    ],\n    "updated_at": 1682358276386091\n  }\n}',language:"json",mdxType:"ResponseSamples"})),(0,i.kt)(c.default,{label:"Orderbook",value:"Orderbook",mdxType:"TabItem"},(0,i.kt)(d.Z,{responseExample:'{\n  "result": {\n    "asks": [\n      {\n        "price": "23235.14",\n        "size": "0.04948"\n      },\n      {\n        "price": "23351.32",\n        "size": "0.015797"\n      }\n    ],\n    "bids": [\n      {\n        "price": "22566.62",\n        "size": "0.029022"\n      },\n      {\n        "price": "22453.79",\n        "size": "0.009428"\n      }\n    ],\n    "updated_at": 1682358276386091\n  }\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}v.isMDXComponent=!0}}]);