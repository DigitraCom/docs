"use strict";(self.webpackChunktest_website=self.webpackChunktest_website||[]).push([[453],{70132:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>f,contentTitle:()=>b,default:()=>T,frontMatter:()=>g,metadata:()=>u,toc:()=>k});var s=t(58168),i=(t(96540),t(15680)),m=t(91366),r=(t(6050),t(57742)),l=t.n(r),n=(t(67792),t(27362)),o=t(36683),d=t(81124),p=t(60674),y=t(23397),c=(t(26651),t(77675),t(19365));const g={id:"get-orderbook-by-market-id",title:"Get Orderbook",description:"List the current bid and ask offers of a specific market.",sidebar_label:"Get Orderbook",hide_title:!0,hide_table_of_contents:!0,api:"eJzVVk1v2zgQ/SuETi1gy5L87Vt3GxTFdpGiSU9FEVDS2GajD5aknHgF/fedIWVbspM2RbGH9cUiOXx8780MpdpToGVZaNDeqvaiIKC/FHSihDSiLLyVd/2XN/CSsjBQGFrlUmYi4bQ6+qYppPZ0soWc05PZS8BNZfwNEoMbH4fwyHOZuQOu3DMLaYBHV5mD1Pe4/KX2pBIJbY/G0XjqhxME0OIfmgn8YLKcLLxm0I0aT0N/HPWiwul8OfearwMvFukZajSdzfxZPz5aBlHUh40m07E/X/bCguUkwtO/Nk0zwMhSgjLCiTrpOBffj3Mqj1FcKb7HoL7bH4Q2rFwzCmav1qrMmYYsA6Vf4/Qa/33cIwzk+ucntoqOYdooUWwwrM1J3+k+kdstsB3PKmBmyw17EFnGYmCSi5SZsiXlo3GtST865JC8p87geVkVhiAR3aKmiGptdgl8oWEY3PoVV/v/zq5TCT1n17lTls7LjXL1+FOnCPVoVCVTbiC9464KhbFgndnB4UyBbbwBdYkvctAGaZCVD1soMOtCM2cUe+CaZRx9biH9LulwNp8uwmC8jObT8WIWNY5Tt+2vVQoqLst7GliX/rf93zc7nC2Q6CKaz1B5sAyb9jfwqK7sHfk+RYANmGF5MGEY74c5V/c4J9Kn69lgupNKKbxybWHzIqUboS1pez8wLSERa5Ewh0U5kVzxHAyGWN0Xt/Ip+7koPkCxMVvUgCP+eBwFQSe348CGirzKD4HtM4XlmD6BcddrnEDNgvh/r0BRlxbIBIe44y4FidDnQv92WKyo8hgUacI2LbTP3sKaI/KKRYFvE3OEIp131jN7lOQWVsH3SihAn42qYHAp+4lG++P2z+Hnm7fUlees6BAmUrSe3LU59G3i0dlt2WbTmk1+eaNdOHLM9Kg+UmxGx3RTGYHaHZJSqQx3bY2RejUacSn8VGyEUdxPyvzCpI+qTKvEDoiCBqwKYfY3JNH2lrV9XXb73knQ7NPVzS178/G9RlQ63iHuQhItS21ybt/drbvvUPV1h3OPR336APitAm0TYuDRjGTGMYt0e5EjdevnFyI4aHNNzFfdtJ9MRTO2qIE21HXMNXxWWdPQtCtAsjoVmscZFcaaZxp+oOlltfgM/3vYnxV6e8V5Nmc7rgTR+EVKrz61Zf2aPVOTz9A5vC2LfZfJiebBTfyWQQ+Bo6OWmlt/kyQoorPz4nOv1wrvrm7xHfQv5Lle6A==",sidebar_class_name:"get api-method",info_path:"rest/markets/markets-rest-apis",custom_edit_url:null},b=void 0,u={unversionedId:"rest/markets/get-orderbook-by-market-id",id:"rest/markets/get-orderbook-by-market-id",title:"Get Orderbook",description:"List the current bid and ask offers of a specific market.",source:"@site/docs/rest/markets/get-orderbook-by-market-id.api.mdx",sourceDirName:"rest/markets",slug:"/rest/markets/get-orderbook-by-market-id",permalink:"/docs/rest/markets/get-orderbook-by-market-id",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-orderbook-by-market-id",title:"Get Orderbook",description:"List the current bid and ask offers of a specific market.",sidebar_label:"Get Orderbook",hide_title:!0,hide_table_of_contents:!0,api:"eJzVVk1v2zgQ/SuETi1gy5L87Vt3GxTFdpGiSU9FEVDS2GajD5aknHgF/fedIWVbspM2RbGH9cUiOXx8780MpdpToGVZaNDeqvaiIKC/FHSihDSiLLyVd/2XN/CSsjBQGFrlUmYi4bQ6+qYppPZ0soWc05PZS8BNZfwNEoMbH4fwyHOZuQOu3DMLaYBHV5mD1Pe4/KX2pBIJbY/G0XjqhxME0OIfmgn8YLKcLLxm0I0aT0N/HPWiwul8OfearwMvFukZajSdzfxZPz5aBlHUh40m07E/X/bCguUkwtO/Nk0zwMhSgjLCiTrpOBffj3Mqj1FcKb7HoL7bH4Q2rFwzCmav1qrMmYYsA6Vf4/Qa/33cIwzk+ucntoqOYdooUWwwrM1J3+k+kdstsB3PKmBmyw17EFnGYmCSi5SZsiXlo3GtST865JC8p87geVkVhiAR3aKmiGptdgl8oWEY3PoVV/v/zq5TCT1n17lTls7LjXL1+FOnCPVoVCVTbiC9464KhbFgndnB4UyBbbwBdYkvctAGaZCVD1soMOtCM2cUe+CaZRx9biH9LulwNp8uwmC8jObT8WIWNY5Tt+2vVQoqLst7GliX/rf93zc7nC2Q6CKaz1B5sAyb9jfwqK7sHfk+RYANmGF5MGEY74c5V/c4J9Kn69lgupNKKbxybWHzIqUboS1pez8wLSERa5Ewh0U5kVzxHAyGWN0Xt/Ip+7koPkCxMVvUgCP+eBwFQSe348CGirzKD4HtM4XlmD6BcddrnEDNgvh/r0BRlxbIBIe44y4FidDnQv92WKyo8hgUacI2LbTP3sKaI/KKRYFvE3OEIp131jN7lOQWVsH3SihAn42qYHAp+4lG++P2z+Hnm7fUlees6BAmUrSe3LU59G3i0dlt2WbTmk1+eaNdOHLM9Kg+UmxGx3RTGYHaHZJSqQx3bY2RejUacSn8VGyEUdxPyvzCpI+qTKvEDoiCBqwKYfY3JNH2lrV9XXb73knQ7NPVzS178/G9RlQ63iHuQhItS21ybt/drbvvUPV1h3OPR336APitAm0TYuDRjGTGMYt0e5EjdevnFyI4aHNNzFfdtJ9MRTO2qIE21HXMNXxWWdPQtCtAsjoVmscZFcaaZxp+oOlltfgM/3vYnxV6e8V5Nmc7rgTR+EVKrz61Zf2aPVOTz9A5vC2LfZfJiebBTfyWQQ+Bo6OWmlt/kyQoorPz4nOv1wrvrm7xHfQv5Lle6A==",sidebar_class_name:"get api-method",info_path:"rest/markets/markets-rest-apis",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"List Markets",permalink:"/docs/rest/markets/get-markets"},next:{title:"Get Prices",permalink:"/docs/rest/markets/get-prices-by-market-id"}},f={},k=[{value:"Request",id:"request",level:2}],h={toc:k},v="wrapper";function T(e){let{components:a,...t}=e;return(0,i.yg)(v,(0,s.A)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("h1",{className:"openapi__heading"},"Get Orderbook"),(0,i.yg)(l(),{method:"get",path:"/v1/markets/{market_id}/orderbook",mdxType:"MethodEndpoint"}),(0,i.yg)("p",null,"List the current bid and ask offers of a specific market."),(0,i.yg)("h2",{id:"request"},"Request"),(0,i.yg)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.yg)("summary",{style:{}},(0,i.yg)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,i.yg)("div",null,(0,i.yg)("ul",null,(0,i.yg)(o.A,{className:"paramsItem",param:{name:"market_id",in:"path",required:!0,schema:{type:"string",example:"BTC-USD"},description:"Market identification."},mdxType:"ParamsItem"})))),(0,i.yg)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.yg)("summary",{style:{}},(0,i.yg)("h3",{className:"openapi-markdown__details-summary-header-params"},"Query Parameters")),(0,i.yg)("div",null,(0,i.yg)("ul",null,(0,i.yg)(o.A,{className:"paramsItem",param:{schema:{type:"integer",minLength:1,maxLength:100,example:30,minimum:1,maximum:100,multipleOf:1},in:"query",name:"max_depth",description:"Maximum number of itens. Default: 20."},mdxType:"ParamsItem"})))),(0,i.yg)("div",null,(0,i.yg)("div",null,(0,i.yg)(m.A,{label:void 0,id:void 0,mdxType:"ApiTabs"},(0,i.yg)(c.default,{label:"200",value:"200",mdxType:"TabItem"},(0,i.yg)("div",null,(0,i.yg)("p",null,"OK")),(0,i.yg)("div",null,(0,i.yg)(n.A,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.yg)(c.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.yg)(y.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.yg)(c.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.yg)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.yg)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.yg)("strong",null,"Schema")),(0,i.yg)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.yg)("ul",{style:{marginLeft:"1rem"}},(0,i.yg)(p.A,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.yg)("details",{style:{},className:"openapi-markdown__details"},(0,i.yg)("summary",{style:{}},(0,i.yg)("span",{className:"openapi-schema__container"},(0,i.yg)("strong",{className:"openapi-schema__property"},"result"),(0,i.yg)("span",{className:"openapi-schema__name"}," object"))),(0,i.yg)("div",{style:{marginLeft:"1rem"}},(0,i.yg)(p.A,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.yg)("details",{style:{},className:"openapi-markdown__details"},(0,i.yg)("summary",{style:{}},(0,i.yg)("span",{className:"openapi-schema__container"},(0,i.yg)("strong",{className:"openapi-schema__property"},"asks"),(0,i.yg)("span",{className:"openapi-schema__name"}," object[]"))),(0,i.yg)("div",{style:{marginLeft:"1rem"}},(0,i.yg)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.yg)("p",null,"List of asks (from sellers) offers.")),(0,i.yg)("li",null,(0,i.yg)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.yg)(p.A,{collapsible:!1,name:"price",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"23235.14",description:"The value that will be paid to seller."},mdxType:"SchemaItem"}),(0,i.yg)(p.A,{collapsible:!1,name:"size",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"0.04948",description:"The amount to be selled."},mdxType:"SchemaItem"}),(0,i.yg)("li",null,(0,i.yg)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,i.yg)(p.A,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.yg)("details",{style:{},className:"openapi-markdown__details"},(0,i.yg)("summary",{style:{}},(0,i.yg)("span",{className:"openapi-schema__container"},(0,i.yg)("strong",{className:"openapi-schema__property"},"bids"),(0,i.yg)("span",{className:"openapi-schema__name"}," object[]"))),(0,i.yg)("div",{style:{marginLeft:"1rem"}},(0,i.yg)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.yg)("p",null,"List of bid (from buyers) offers.")),(0,i.yg)("li",null,(0,i.yg)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.yg)(p.A,{collapsible:!1,name:"price",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"22566.62",description:"The value will be paid to buyer."},mdxType:"SchemaItem"}),(0,i.yg)(p.A,{collapsible:!1,name:"size",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"0.029022",description:"The amount to be buyed."},mdxType:"SchemaItem"}),(0,i.yg)("li",null,(0,i.yg)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,i.yg)(p.A,{collapsible:!1,name:"updated_at",required:!1,schemaName:"updated_at (integer)",qualifierMessage:void 0,schema:{title:"updated_at",type:"integer",description:"Timestamp of when this object was last updated.",example:0x5f424032bc6c6},mdxType:"SchemaItem"}))))))),(0,i.yg)(c.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.yg)(d.A,{responseExample:'{\n  "result": {\n    "asks": [\n      {\n        "price": "23235.14",\n        "size": "0.04948"\n      }\n    ],\n    "bids": [\n      {\n        "price": "22566.62",\n        "size": "0.029022"\n      }\n    ],\n    "updated_at": 1675810392753862\n  }\n}',language:"json",mdxType:"ResponseSamples"})),(0,i.yg)(c.default,{label:"Orderbook",value:"Orderbook",mdxType:"TabItem"},(0,i.yg)(d.A,{responseExample:'{\n  "result": {\n    "asks": [\n      {\n        "price": "23235.14",\n        "size": "0.04948"\n      },\n      {\n        "price": "23351.32",\n        "size": "0.015797"\n      }\n    ],\n    "bids": [\n      {\n        "price": "22566.62",\n        "size": "0.029022"\n      },\n      {\n        "price": "22453.79",\n        "size": "0.009428"\n      }\n    ],\n    "updated_at": 1682358276386091\n  }\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}T.isMDXComponent=!0}}]);