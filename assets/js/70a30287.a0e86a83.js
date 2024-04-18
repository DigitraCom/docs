"use strict";(self.webpackChunktest_website=self.webpackChunktest_website||[]).push([[1419],{69204:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>y,contentTitle:()=>k,default:()=>w,frontMatter:()=>h,metadata:()=>b,toc:()=>g});var s=t(87462),i=(t(67294),t(3905)),n=t(58219),l=(t(62316),t(51039)),m=t.n(l),r=(t(82723),t(9487)),d=t(41429),o=t(5397),p=t(4667),u=t(9472),c=(t(1176),t(12005),t(85162));const h={id:"get-asset",title:"Get Asset",description:"Get asset data by asset ID.",sidebar_label:"Get Asset",hide_title:!0,hide_table_of_contents:!0,api:"eJylVttu20gM/ZWBXrwLpHaczW4bvwVIUAR7K5IU+5AWKS3R1jTSjDpDxTYM/fuSo4svcuJgVy+WNTM8h+QhOevIFuiAtDU3STSJ5kjvwHuk6CRK0MdOF7LGKx+RVFhRCRCo6ar5d3M1/GK+mG+3+KPUDr2CklI0pONgdfiNLfHnwhqPPpqso7PTU/nZtf7377wttob4pKxCUWSNhdF3L1vWES4hL7LayC1S6Yw2cwXq893VfSA1lJVnyEqUFwYts2BMi2eyizEM5Cj/jCZM1B0BMeUrm2Xg1H2KhI43Bc8e586WRX1SDiItrHti9Id1a+WaPXVY5ryca/PI/Gfa5YE17xufRNPMxk9xCrxIMH+sj5kyyxgjSZihf0QD0wyZIbkSJeiF9Zr2Py80pYmDBWSvrAiH0ouz49PhabS7BstuTZ5D65rD7zh+0eTsvPpa8XMS+TjFHCSKtCrEZzv9jrHIo3AiHdJ1QjbRJk2ZbGxltHznyXI25+kmGUtzNs8u5nAR/7L4EDHM68blTEfAk+O89/R5GdSoE5HerBUf72pU0yqgaiXwNnszzpWSAz1TrVqqPbkctWuUDe+QqXBERGxnyutciwiDMd+DC8Q7CXYg4Bysehh/aE9iM+FfbWJS7Um1EMEqSrVvypdfigxiTASRayL3x3P9tgD+VWO+mpKugKqDFdRBiDLnoTS7s+f7eH9qo/MyV6bMp+jE/VB97GiScKmTZbdRbSpSQWY59FIDamVLp8iB8RDXLKsXirel9LBxW+o5+rpPZ5BjbgfKOjXgBU5DcEosDVTpmRAz8DbHLje7kfn1t/fn788+nF0Ege33ii4wU2szBNML/s1MMtvsF9/naKTPo2psKWtqGTTwweNe83kTDu1BOYxRP6NqrB2GOtTQ/hNaDk+oNtaOonVN8ph+Wz1JrUNuS0MdHGwB7qYtNN7qcOc9CgjLfUAuujwMKkbemFQzVhVCnKrBCx18sM+qafl9Zpuef6DY9qLfbFWkWbbCCHSIyZQjwunYCo/BxTZfmPFJ1gVTlm4ndRjGNEtkpg27B9RzhUM2OJEiSbk2d4uDp9PWw90JHNcmQ9TDuTeyuni/NAuaDs5jhnuguFoApeHeEu40W8O5PyH4/hNVXP1MILXNFUo6pliYRKPn8Yg9ypBGdWMfrVusind5DmhLu3SchCglKvxkNIJCDxM919yUhrHNe8n45GxShl4V0D3GpdO0uhPfQ5euxJWZ3Z7I/wQi6vb67l5dfrrxbFTQa4PjWh5cspSD2bT5cPG7PHQlXG8ubP/rdthkiXBJI55FnADmEaKxbsL4ED2P5boS+Lf3M6E/6RLHMUiZuuxdr6fg8bPLqko+/yjRrfg7vz6D06LUEG8ejk3fmXHb2M/utnM/NeyTn9Um5y/wbueykanc3EUjfn3C1bbO+HrFhBESrjMhUy9fxjEWtHWwdw3eUdrHa9Zw9S8A/hRR",sidebar_class_name:"get api-method",info_path:"docs/rest/wallet/wallet-rest-apis",custom_edit_url:null},k=void 0,b={unversionedId:"rest/wallet/get-asset",id:"rest/wallet/get-asset",title:"Get Asset",description:"Get asset data by asset ID.",source:"@site/docs/rest/wallet/get-asset.api.mdx",sourceDirName:"rest/wallet",slug:"/rest/wallet/get-asset",permalink:"/docs/rest/wallet/get-asset",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-asset",title:"Get Asset",description:"Get asset data by asset ID.",sidebar_label:"Get Asset",hide_title:!0,hide_table_of_contents:!0,api:"eJylVttu20gM/ZWBXrwLpHaczW4bvwVIUAR7K5IU+5AWKS3R1jTSjDpDxTYM/fuSo4svcuJgVy+WNTM8h+QhOevIFuiAtDU3STSJ5kjvwHuk6CRK0MdOF7LGKx+RVFhRCRCo6ar5d3M1/GK+mG+3+KPUDr2CklI0pONgdfiNLfHnwhqPPpqso7PTU/nZtf7377wttob4pKxCUWSNhdF3L1vWES4hL7LayC1S6Yw2cwXq893VfSA1lJVnyEqUFwYts2BMi2eyizEM5Cj/jCZM1B0BMeUrm2Xg1H2KhI43Bc8e586WRX1SDiItrHti9Id1a+WaPXVY5ryca/PI/Gfa5YE17xufRNPMxk9xCrxIMH+sj5kyyxgjSZihf0QD0wyZIbkSJeiF9Zr2Py80pYmDBWSvrAiH0ouz49PhabS7BstuTZ5D65rD7zh+0eTsvPpa8XMS+TjFHCSKtCrEZzv9jrHIo3AiHdJ1QjbRJk2ZbGxltHznyXI25+kmGUtzNs8u5nAR/7L4EDHM68blTEfAk+O89/R5GdSoE5HerBUf72pU0yqgaiXwNnszzpWSAz1TrVqqPbkctWuUDe+QqXBERGxnyutciwiDMd+DC8Q7CXYg4Bysehh/aE9iM+FfbWJS7Um1EMEqSrVvypdfigxiTASRayL3x3P9tgD+VWO+mpKugKqDFdRBiDLnoTS7s+f7eH9qo/MyV6bMp+jE/VB97GiScKmTZbdRbSpSQWY59FIDamVLp8iB8RDXLKsXirel9LBxW+o5+rpPZ5BjbgfKOjXgBU5DcEosDVTpmRAz8DbHLje7kfn1t/fn788+nF0Ege33ii4wU2szBNML/s1MMtvsF9/naKTPo2psKWtqGTTwweNe83kTDu1BOYxRP6NqrB2GOtTQ/hNaDk+oNtaOonVN8ph+Wz1JrUNuS0MdHGwB7qYtNN7qcOc9CgjLfUAuujwMKkbemFQzVhVCnKrBCx18sM+qafl9Zpuef6DY9qLfbFWkWbbCCHSIyZQjwunYCo/BxTZfmPFJ1gVTlm4ndRjGNEtkpg27B9RzhUM2OJEiSbk2d4uDp9PWw90JHNcmQ9TDuTeyuni/NAuaDs5jhnuguFoApeHeEu40W8O5PyH4/hNVXP1MILXNFUo6pliYRKPn8Yg9ypBGdWMfrVusind5DmhLu3SchCglKvxkNIJCDxM919yUhrHNe8n45GxShl4V0D3GpdO0uhPfQ5euxJWZ3Z7I/wQi6vb67l5dfrrxbFTQa4PjWh5cspSD2bT5cPG7PHQlXG8ubP/rdthkiXBJI55FnADmEaKxbsL4ED2P5boS+Lf3M6E/6RLHMUiZuuxdr6fg8bPLqko+/yjRrfg7vz6D06LUEG8ejk3fmXHb2M/utnM/NeyTn9Um5y/wbueykanc3EUjfn3C1bbO+HrFhBESrjMhUy9fxjEWtHWwdw3eUdrHa9Zw9S8A/hRR",sidebar_class_name:"get api-method",info_path:"docs/rest/wallet/wallet-rest-apis",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Wallet",permalink:"/docs/category/wallet"},next:{title:"List Assets",permalink:"/docs/rest/wallet/get-assets"}},y={},g=[{value:"Request",id:"request",level:2}],f={toc:g};function w(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,s.Z)({},f,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"Get Asset"),(0,i.kt)(m(),{method:"get",path:"/v1/wallet/assets/{asset_id}",mdxType:"MethodEndpoint"}),(0,i.kt)("p",null,"Get asset data by asset ID."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Requires authentication.")),(0,i.kt)("h2",{id:"request"},"Request"),(0,i.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(d.Z,{className:"paramsItem",param:{schema:{type:"string",example:"USDT"},name:"asset_id",in:"path",required:!0,description:"Asset ID."},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(n.Z,{label:void 0,id:void 0,mdxType:"ApiTabs"},(0,i.kt)(c.default,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"OK")),(0,i.kt)("div",null,(0,i.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(c.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(c.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"result"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Asset identification.",example:"USDT"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Asset full name.",example:"USD Theter"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"asset_group",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"An optional grouping of similar assets.",example:"USD"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"networks"),(0,i.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"List of distinct networks where this asset is placed.")),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(p.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Network identification.",example:"Ethereum"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"min_confirmations",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:4,description:"Minimum number of blocks added to the blockchain along with your transaction."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"blockchain_tag_name",required:!1,schemaName:["string","null"],qualifierMessage:void 0,schema:{type:["string","null"],description:"'memo' or 'destination_tag' used in some networks.",example:"567472829"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"address_enabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"If is enabled to generate address on this network."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"deposit_enabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"If it is enabled to receive deposits on this network."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"withdrawal_enabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"If it is enabled to make withdrawals on this network."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"withdrawal_min_usd",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Minimum USD amount to make a withdrawal.",example:"10.0"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"withdrawal_max_usd",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Maximum USD amount permited to withdrawal for each 'withdrawal_max_interval'.",example:"100000.0"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"withdrawal_max_interval",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"Interval time to wait to be able to make a new withdrawal after reaching the value defined at 'withdrawal_max_usd', in hours.",example:24},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))))))))),(0,i.kt)(c.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:'{\n  "result": {\n    "id": "USDT",\n    "name": "USD Theter",\n    "asset_group": "USD",\n    "networks": [\n      {\n        "name": "Ethereum",\n        "min_confirmations": 4,\n        "blockchain_tag_name": "567472829",\n        "address_enabled": true,\n        "deposit_enabled": true,\n        "withdrawal_enabled": true,\n        "withdrawal_min_usd": "10.0",\n        "withdrawal_max_usd": "100000.0",\n        "withdrawal_max_interval": 24\n      }\n    ]\n  }\n}',language:"json",mdxType:"ResponseSamples"})),(0,i.kt)(c.default,{label:"Returning a USDT data.",value:"Returning a USDT data.",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:'{\n  "result": {\n    "id": "USDT",\n    "name": "United States Dollar Theter",\n    "asset_group": "USD",\n    "networks": [\n      {\n        "name": "Ethereum",\n        "min_confirmations": 1,\n        "blockchain_tag_name": null,\n        "address_enabled": true,\n        "deposit_enabled": true,\n        "withdrawal_enabled": true,\n        "withdrawal_min_usd": "10.0",\n        "withdrawal_max_usd": "100000.0",\n        "withdrawal_max_interval": 24\n      }\n    ]\n  }\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}w.isMDXComponent=!0}}]);