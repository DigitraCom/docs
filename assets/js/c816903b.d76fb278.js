"use strict";(self.webpackChunktest_website=self.webpackChunktest_website||[]).push([[267],{79800:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>f,contentTitle:()=>u,default:()=>v,frontMatter:()=>y,metadata:()=>b,toc:()=>h});var s=t(58168),l=(t(96540),t(15680)),n=t(91366),i=(t(6050),t(57742)),m=t.n(i),r=(t(67792),t(27362)),o=t(36683),p=t(81124),d=t(60674),c=t(23397),g=(t(26651),t(77675),t(19365));const y={id:"get-v-1-wallet-balances",title:"List Balances",description:"List balances of all assets with funds.",sidebar_label:"List Balances",hide_title:!0,hide_table_of_contents:!0,api:"eJzVVtty2zYQ/RUMnm1KoiNb9ptdezqaJmkmUaYPjicByZWIhAQYANQlGv57dwGKonzRNG2nM9WLQGj37NmDg6W23ICttLJg+dWWx8MhfWVgUyMrJ7XiV/z33/gJT7VyoBz9KqqqkKmgXwdfLYVsuU1zKAWt3KYCTNLJV0gdJq5PYS3KqggF7sKajegBS9cFQt4jprWAK34z+wVzRKlrqsXjKD4bn19OhsN40u1/1iYDg3B8GI1wt64y4SD7LDBjFJ+9Gp9fTC5fjf33pHlomhNeGV2BcTKQ2NXtyApjxAaRpIPSPtfEYX5Ltguzzki1wLC2066PQx2vKY1NbyPe7Fs8BvKo+0O0W0nnJhMU0/NhAZE5zZwRGTBt2Eq6PDNiJYpezU6+Y6WDss/xb8uktTHoh2LDUE0wS8hYsmGoksJVW6E5PBusJ51H7+2e7EhI9NcCzJOqM1mCdciL6Tlb5aCYy6Vl4WjYSljWokX9BkbnF+PJaHh2GV+MzybnceM/XYDv/kYUQqXACmk9u6UoavgvfdlyImv52zTNMHcB7nQ5OsUzK3CVBI6WPCiMKMH5CvfP3LgXXIgFJOn4vQZDHlcIQpb3jR2z6HYXikdtNR3MAY6B77U0gJTnorBw8pcIvZlNf7y9/Ri//bEYE7NH1dFLc0Bb4aGQjXNg3lqGSZX5iaMWflfB2jFiipYIRrCUkAACuNqgBSM2dQxtYtGjLBHpN4RggFDer37gsRWWCnB1mWCRHtgOhiASuUBfYqBQPrqQpXQHAvmdn9dn7/hSqtegFi5Ho+CTWO+ecB6TSHPh/RgP+w6nnzBRlnW5SwtrTHoi7RuxfqbNQ81wjrBgfYoh/njxsNGHx2Cv8cKwnTMpFr0ahpD1I4fNa5XZ6JP6pL68DzJYJmoUT7n2xRF9obbB5br1vDc4tcwHy9EguH/Qc38wQrB+bQqMy52r7NVgICoZZXIhcepFqS6fePqd0Vmd+gdqxQL6WbrNBzoOPwj8DZnr/oD6w9dn7+8+zNj1uykRoOoBcBQNybuVtq4U/u3X+sDrcrPnfMBju3+F/msCtkZyeB0GVSHQfzRySZ1tq+Y9X9IoCnriolMUlcg1zb17vt0mwsJHUzQNbQcDk86ZtALfL3sLv9jQfm68QOobbHpDp5203F+in6jyf5oPR4XoRurfVOIfXOejvHaTbE/rgR6MJF7oiQeMzAH/XRhvkJB0naZQ9bOe/EEklO6y/3o3403zJzWrjbo=",sidebar_class_name:"get api-method",info_path:"rest/wallet/wallet-rest-apis",custom_edit_url:null},u=void 0,b={unversionedId:"rest/wallet/get-v-1-wallet-balances",id:"rest/wallet/get-v-1-wallet-balances",title:"List Balances",description:"List balances of all assets with funds.",source:"@site/docs/rest/wallet/get-v-1-wallet-balances.api.mdx",sourceDirName:"rest/wallet",slug:"/rest/wallet/get-v-1-wallet-balances",permalink:"/docs/rest/wallet/get-v-1-wallet-balances",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-v-1-wallet-balances",title:"List Balances",description:"List balances of all assets with funds.",sidebar_label:"List Balances",hide_title:!0,hide_table_of_contents:!0,api:"eJzVVtty2zYQ/RUMnm1KoiNb9ptdezqaJmkmUaYPjicByZWIhAQYANQlGv57dwGKonzRNG2nM9WLQGj37NmDg6W23ICttLJg+dWWx8MhfWVgUyMrJ7XiV/z33/gJT7VyoBz9KqqqkKmgXwdfLYVsuU1zKAWt3KYCTNLJV0gdJq5PYS3KqggF7sKajegBS9cFQt4jprWAK34z+wVzRKlrqsXjKD4bn19OhsN40u1/1iYDg3B8GI1wt64y4SD7LDBjFJ+9Gp9fTC5fjf33pHlomhNeGV2BcTKQ2NXtyApjxAaRpIPSPtfEYX5Ltguzzki1wLC2066PQx2vKY1NbyPe7Fs8BvKo+0O0W0nnJhMU0/NhAZE5zZwRGTBt2Eq6PDNiJYpezU6+Y6WDss/xb8uktTHoh2LDUE0wS8hYsmGoksJVW6E5PBusJ51H7+2e7EhI9NcCzJOqM1mCdciL6Tlb5aCYy6Vl4WjYSljWokX9BkbnF+PJaHh2GV+MzybnceM/XYDv/kYUQqXACmk9u6UoavgvfdlyImv52zTNMHcB7nQ5OsUzK3CVBI6WPCiMKMH5CvfP3LgXXIgFJOn4vQZDHlcIQpb3jR2z6HYXikdtNR3MAY6B77U0gJTnorBw8pcIvZlNf7y9/Ri//bEYE7NH1dFLc0Bb4aGQjXNg3lqGSZX5iaMWflfB2jFiipYIRrCUkAACuNqgBSM2dQxtYtGjLBHpN4RggFDer37gsRWWCnB1mWCRHtgOhiASuUBfYqBQPrqQpXQHAvmdn9dn7/hSqtegFi5Ho+CTWO+ecB6TSHPh/RgP+w6nnzBRlnW5SwtrTHoi7RuxfqbNQ81wjrBgfYoh/njxsNGHx2Cv8cKwnTMpFr0ahpD1I4fNa5XZ6JP6pL68DzJYJmoUT7n2xRF9obbB5br1vDc4tcwHy9EguH/Qc38wQrB+bQqMy52r7NVgICoZZXIhcepFqS6fePqd0Vmd+gdqxQL6WbrNBzoOPwj8DZnr/oD6w9dn7+8+zNj1uykRoOoBcBQNybuVtq4U/u3X+sDrcrPnfMBju3+F/msCtkZyeB0GVSHQfzRySZ1tq+Y9X9IoCnriolMUlcg1zb17vt0mwsJHUzQNbQcDk86ZtALfL3sLv9jQfm68QOobbHpDp5203F+in6jyf5oPR4XoRurfVOIfXOejvHaTbE/rgR6MJF7oiQeMzAH/XRhvkJB0naZQ9bOe/EEklO6y/3o3403zJzWrjbo=",sidebar_class_name:"get api-method",info_path:"rest/wallet/wallet-rest-apis",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"List Deposit Addresses",permalink:"/docs/rest/wallet/get-deposit-addresses"},next:{title:"List Deposits",permalink:"/docs/rest/wallet/get-v-1-wallet-deposits"}},f={},h=[{value:"Request",id:"request",level:2}],B={toc:h},N="wrapper";function v(e){let{components:a,...t}=e;return(0,l.yg)(N,(0,s.A)({},B,t,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h1",{className:"openapi__heading"},"List Balances"),(0,l.yg)(m(),{method:"get",path:"/v1/wallet/balances",mdxType:"MethodEndpoint"}),(0,l.yg)("p",null,"List balances of all assets with funds."),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"Requires authentication.")),(0,l.yg)("h2",{id:"request"},"Request"),(0,l.yg)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,l.yg)("summary",{style:{}},(0,l.yg)("h3",{className:"openapi-markdown__details-summary-header-params"},"Query Parameters")),(0,l.yg)("div",null,(0,l.yg)("ul",null,(0,l.yg)(o.A,{className:"paramsItem",param:{schema:{type:"string",example:"BTC"},in:"query",name:"asset",description:"Asset ID."},mdxType:"ParamsItem"}),(0,l.yg)(o.A,{className:"paramsItem",param:{name:"cursor",in:"query",required:!1,schema:{type:"string",example:"MTIzNDU2Nzg5"},description:"A reference to the server indicating the next set of objects to be returned. It is sent back in every response were the number of objects returned is bigger than the limit."},mdxType:"ParamsItem"}),(0,l.yg)(o.A,{className:"paramsItem",param:{name:"limit",in:"query",required:!1,schema:{type:"integer",minLength:1,maxLength:200,default:20,example:100,minimum:1,maximum:200},description:"Max number of objects to be returned as result of request."},mdxType:"ParamsItem"})))),(0,l.yg)("div",null,(0,l.yg)("div",null,(0,l.yg)(n.A,{label:void 0,id:void 0,mdxType:"ApiTabs"},(0,l.yg)(g.default,{label:"200",value:"200",mdxType:"TabItem"},(0,l.yg)("div",null,(0,l.yg)("p",null,"OK")),(0,l.yg)("div",null,(0,l.yg)(r.A,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.yg)(g.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.yg)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.yg)(g.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.yg)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.yg)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.yg)("strong",null,"Schema")),(0,l.yg)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.yg)("ul",{style:{marginLeft:"1rem"}},(0,l.yg)(d.A,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.yg)("details",{style:{},className:"openapi-markdown__details"},(0,l.yg)("summary",{style:{}},(0,l.yg)("span",{className:"openapi-schema__container"},(0,l.yg)("strong",{className:"openapi-schema__property"},"result"),(0,l.yg)("span",{className:"openapi-schema__name"}," object[]"))),(0,l.yg)("div",{style:{marginLeft:"1rem"}},(0,l.yg)("li",null,(0,l.yg)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.yg)(d.A,{collapsible:!1,name:"asset",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"BTC",description:"Asset ID."},mdxType:"SchemaItem"}),(0,l.yg)(d.A,{collapsible:!1,name:"amount",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"2.2356980028",description:"Disponible asset amount to trade or withdrawal."},mdxType:"SchemaItem"}),(0,l.yg)(d.A,{collapsible:!1,name:"amount_orders",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"0.1",description:"Asset amount currently reserved by opened orders"},mdxType:"SchemaItem"}),(0,l.yg)(d.A,{collapsible:!1,name:"updated_at",required:!1,schemaName:"updated_at (integer)",qualifierMessage:void 0,schema:{title:"updated_at",type:"integer",description:"Timestamp of when this object was updated.",example:0x5f424032bc6c6},mdxType:"SchemaItem"}),(0,l.yg)("li",null,(0,l.yg)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,l.yg)(g.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.yg)(p.A,{responseExample:'{\n  "result": [\n    {\n      "asset": "BTC",\n      "amount": "2.2356980028",\n      "amount_orders": "0.1",\n      "updated_at": 1675810392753862\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,l.yg)(g.default,{label:"Balance list",value:"Balance list",mdxType:"TabItem"},(0,l.yg)(p.A,{responseExample:'{\n  "result": [\n    {\n      "asset": "BTC",\n      "amount": "2.2356980028",\n      "amount_orders": "0.1",\n      "updated_at": 12345678945456788\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}v.isMDXComponent=!0}}]);