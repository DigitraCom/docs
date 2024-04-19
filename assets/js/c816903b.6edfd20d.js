"use strict";(self.webpackChunktest_website=self.webpackChunktest_website||[]).push([[6267],{79800:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>f,contentTitle:()=>u,default:()=>x,frontMatter:()=>y,metadata:()=>b,toc:()=>h});var s=t(58168),l=(t(96540),t(15680)),i=t(91366),n=(t(6050),t(57742)),m=t.n(n),r=(t(67792),t(27362)),o=t(36683),d=t(81124),p=t(60674),c=t(23397),g=(t(26651),t(77675),t(19365));const y={id:"get-v-1-wallet-balances",title:"List Balances",description:"List balances of all assets with funds.",sidebar_label:"List Balances",hide_title:!0,hide_table_of_contents:!0,api:"eJzVVttu2zgQ/RWCz4lsKbXj5C3ZBIXRK1oX++AaLSWNJbYSpZKULzX87ztDyraci7HdXSxQv5iiOWfOHJ4ZecM1mLpSBgy/3vCo36evFEyiZW1lpfg1f/eKn/GkUhaUpV9FXRcyEfRr75uhIxtukhxKQSu7rgGDqvgbJBYDV+ewEmVd+AT3fs1CesDUTYGQU8Q0BnDFbyd/YIwoq4Zy8SiILgbDq1G/H432+18qnYJGON4PQtxt6lRYSL8IjAijixeD4eXo6sXAfY+2s+32jNe6qkFb6Uns8u7JCq3FGpGkhdI8VcRxfEt2f8xYLVWGx9pK93Uc63hDYWx8F/DtocRTIA+qP0a7k3RvMkYxHR/mEZmtmNUiBVZptpQ2T7VYiqKTcy/fqdRe2af4t2mSRmv0Q7FmqCboBaQsXjNUSeGqzbA9vhvMJ61D7+ye7UhI9FcG+lHWiSzBWOTFqjlb5qCYzaVh/mrYUhjWogWHArC4aTi8HIzC/sVVdDm4GA2jGVnR2Aq9m+WOjUwRfjiIostQXKWjeJjwrf90gTb8VhRCJcAKaVzcQhQN/J/+bTmRBV3XjYl4BvZ8EZ7j3Ra4ij1HQ14VWpRgXYbpE535jFsxgSS9fzSgqRcUglBruMJOWXmzO4qWMBVd4BGOhh+N1ICU56IwcPa3CL2ZjH++vfsUvf2ZDYjZg+zouTmg/fBSyO45MGdBzaRK3WRSmdtVsLKMmKJ1vGEMBcSAALbRaNWAjS1DOxn0MotF8h0hGCCU87UbjGyJqTxcU8aYpAO2gyGIWGboXzwolDtdyFLaI4Hczq/rc+iMUqrXoDKbo1HwSax2Tzi3SaS5cH6M+h0tQ/oJA2XZlLswv8agR9K+EasnyjzWDOcN89anM8QfGxQLnT0Ee40Nw3bOpLPoVT+sjBtNbN6o1ASf1Wf19YOXwTDRoHjKti+Y4CuVDTavWs87g1PJvLcIe979vY77vRG89Rtd4Lnc2tpc93qilkEqM4nTMUiq8pGn3+sqbRL3QKUYQD9Lu/5I1+EGgeuQedUdZH+6/OzD/ccJu3k/JgKU3QOGQZ+8W1fGlsK9JVsfOF1uD5yPeGwOr9r/TMDWSBbboVcXAv1Ho5nU2bRqTvmCRpHXExd7RVGJvKK5N+WbTSwMfNLFdkvb3sCkcyqNwPfQwcLPFnSYG8+Q+g7rztBpJy13TfQLWX6n+XBSiP1I/YdK/It2PslrN8kOtGb0oCXxQk/M8GQO+C9EO4P4oJskgbob9eiPJKHsm/3l/QTfx38B346aAQ==",sidebar_class_name:"get api-method",info_path:"rest/wallet/wallet-rest-apis",custom_edit_url:null},u=void 0,b={unversionedId:"rest/wallet/get-v-1-wallet-balances",id:"rest/wallet/get-v-1-wallet-balances",title:"List Balances",description:"List balances of all assets with funds.",source:"@site/docs/rest/wallet/get-v-1-wallet-balances.api.mdx",sourceDirName:"rest/wallet",slug:"/rest/wallet/get-v-1-wallet-balances",permalink:"/docs/rest/wallet/get-v-1-wallet-balances",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-v-1-wallet-balances",title:"List Balances",description:"List balances of all assets with funds.",sidebar_label:"List Balances",hide_title:!0,hide_table_of_contents:!0,api:"eJzVVttu2zgQ/RWCz4lsKbXj5C3ZBIXRK1oX++AaLSWNJbYSpZKULzX87ztDyraci7HdXSxQv5iiOWfOHJ4ZecM1mLpSBgy/3vCo36evFEyiZW1lpfg1f/eKn/GkUhaUpV9FXRcyEfRr75uhIxtukhxKQSu7rgGDqvgbJBYDV+ewEmVd+AT3fs1CesDUTYGQU8Q0BnDFbyd/YIwoq4Zy8SiILgbDq1G/H432+18qnYJGON4PQtxt6lRYSL8IjAijixeD4eXo6sXAfY+2s+32jNe6qkFb6Uns8u7JCq3FGpGkhdI8VcRxfEt2f8xYLVWGx9pK93Uc63hDYWx8F/DtocRTIA+qP0a7k3RvMkYxHR/mEZmtmNUiBVZptpQ2T7VYiqKTcy/fqdRe2af4t2mSRmv0Q7FmqCboBaQsXjNUSeGqzbA9vhvMJ61D7+ye7UhI9FcG+lHWiSzBWOTFqjlb5qCYzaVh/mrYUhjWogWHArC4aTi8HIzC/sVVdDm4GA2jGVnR2Aq9m+WOjUwRfjiIostQXKWjeJjwrf90gTb8VhRCJcAKaVzcQhQN/J/+bTmRBV3XjYl4BvZ8EZ7j3Ra4ij1HQ14VWpRgXYbpE535jFsxgSS9fzSgqRcUglBruMJOWXmzO4qWMBVd4BGOhh+N1ICU56IwcPa3CL2ZjH++vfsUvf2ZDYjZg+zouTmg/fBSyO45MGdBzaRK3WRSmdtVsLKMmKJ1vGEMBcSAALbRaNWAjS1DOxn0MotF8h0hGCCU87UbjGyJqTxcU8aYpAO2gyGIWGboXzwolDtdyFLaI4Hczq/rc+iMUqrXoDKbo1HwSax2Tzi3SaS5cH6M+h0tQ/oJA2XZlLswv8agR9K+EasnyjzWDOcN89anM8QfGxQLnT0Ee40Nw3bOpLPoVT+sjBtNbN6o1ASf1Wf19YOXwTDRoHjKti+Y4CuVDTavWs87g1PJvLcIe979vY77vRG89Rtd4Lnc2tpc93qilkEqM4nTMUiq8pGn3+sqbRL3QKUYQD9Lu/5I1+EGgeuQedUdZH+6/OzD/ccJu3k/JgKU3QOGQZ+8W1fGlsK9JVsfOF1uD5yPeGwOr9r/TMDWSBbboVcXAv1Ho5nU2bRqTvmCRpHXExd7RVGJvKK5N+WbTSwMfNLFdkvb3sCkcyqNwPfQwcLPFnSYG8+Q+g7rztBpJy13TfQLWX6n+XBSiP1I/YdK/It2PslrN8kOtGb0oCXxQk/M8GQO+C9EO4P4oJskgbob9eiPJKHsm/3l/QTfx38B346aAQ==",sidebar_class_name:"get api-method",info_path:"rest/wallet/wallet-rest-apis",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"List Deposit Addresses",permalink:"/docs/rest/wallet/get-deposit-addresses"},next:{title:"List Deposits",permalink:"/docs/rest/wallet/get-v-1-wallet-deposits"}},f={},h=[{value:"Request",id:"request",level:2}],v={toc:h},T="wrapper";function x(e){let{components:a,...t}=e;return(0,l.yg)(T,(0,s.A)({},v,t,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h1",{className:"openapi__heading"},"List Balances"),(0,l.yg)(m(),{method:"get",path:"/v1/wallet/balances",mdxType:"MethodEndpoint"}),(0,l.yg)("p",null,"List balances of all assets with funds."),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"Requires authentication.")),(0,l.yg)("h2",{id:"request"},"Request"),(0,l.yg)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,l.yg)("summary",{style:{}},(0,l.yg)("h3",{className:"openapi-markdown__details-summary-header-params"},"Query Parameters")),(0,l.yg)("div",null,(0,l.yg)("ul",null,(0,l.yg)(o.A,{className:"paramsItem",param:{schema:{type:"string",example:"BTC"},in:"query",name:"asset",description:"Asset ID."},mdxType:"ParamsItem"}),(0,l.yg)(o.A,{className:"paramsItem",param:{name:"cursor",in:"query",required:!1,schema:{type:"string",example:"MTIzNDU2Nzg5"},description:"A reference to the server indicating the next set of objects to be returned. It is sent back in every response were the number of objects returned is bigger than the limit."},mdxType:"ParamsItem"}),(0,l.yg)(o.A,{className:"paramsItem",param:{name:"limit",in:"query",required:!1,schema:{type:"integer",minLength:1,maxLength:200,default:20,example:100,minimum:1,maximum:200},description:"Max number of objects to be returned as result of request."},mdxType:"ParamsItem"})))),(0,l.yg)("div",null,(0,l.yg)("div",null,(0,l.yg)(i.A,{label:void 0,id:void 0,mdxType:"ApiTabs"},(0,l.yg)(g.default,{label:"200",value:"200",mdxType:"TabItem"},(0,l.yg)("div",null,(0,l.yg)("p",null,"OK")),(0,l.yg)("div",null,(0,l.yg)(r.A,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.yg)(g.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.yg)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.yg)(g.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.yg)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.yg)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.yg)("strong",null,"Schema")),(0,l.yg)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.yg)("ul",{style:{marginLeft:"1rem"}},(0,l.yg)(p.A,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.yg)("details",{style:{},className:"openapi-markdown__details"},(0,l.yg)("summary",{style:{}},(0,l.yg)("span",{className:"openapi-schema__container"},(0,l.yg)("strong",{className:"openapi-schema__property"},"result"),(0,l.yg)("span",{className:"openapi-schema__name"}," object[]"))),(0,l.yg)("div",{style:{marginLeft:"1rem"}},(0,l.yg)("li",null,(0,l.yg)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.yg)(p.A,{collapsible:!1,name:"asset",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"BTC",description:"Asset ID."},mdxType:"SchemaItem"}),(0,l.yg)(p.A,{collapsible:!1,name:"amount",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"2.2356980028",description:"Disponible asset amount to trade or withdrawal."},mdxType:"SchemaItem"}),(0,l.yg)(p.A,{collapsible:!1,name:"amount_orders",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"0.1",description:"Asset amount currently reserved by opened orders"},mdxType:"SchemaItem"}),(0,l.yg)(p.A,{collapsible:!1,name:"updated_at",required:!1,schemaName:"updated_at (integer)",qualifierMessage:void 0,schema:{title:"updated_at",type:"integer",description:"Timestamp of when this object was updated.",examples:[0x5f424032bc6c6],"x-stoplight":{id:"652271a9d8b6c"}},mdxType:"SchemaItem"}),(0,l.yg)("li",null,(0,l.yg)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,l.yg)(g.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.yg)(d.A,{responseExample:'{\n  "result": [\n    {\n      "asset": "BTC",\n      "amount": "2.2356980028",\n      "amount_orders": "0.1",\n      "updated_at": 0\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,l.yg)(g.default,{label:"Balance list",value:"Balance list",mdxType:"TabItem"},(0,l.yg)(d.A,{responseExample:'{\n  "result": [\n    {\n      "asset": "BTC",\n      "amount": "2.2356980028",\n      "amount_orders": "0.1",\n      "updated_at": 12345678945456788\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}x.isMDXComponent=!0}}]);