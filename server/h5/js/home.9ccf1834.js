(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"16d0":function(t,e,n){var a=n("988a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("499e").default;i("42eb69ac",a,!0,{sourceMap:!1,shadowMode:!1})},"18ab":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".staking-cell .van-cell__value{-webkit-box-flex:0;-ms-flex:none;flex:none}",""]),t.exports=e},"3ca3":function(t,e,n){"use strict";var a=n("6547").charAt,i=n("69f3"),r=n("7dd0"),s="String Iterator",o=i.set,l=i.getterFor(s);r(String,"String",(function(t){o(this,{type:s,string:String(t),index:0})}),(function(){var t,e=l(this),n=e.string,i=e.index;return i>=n.length?{value:void 0,done:!0}:(t=a(n,i),e.index+=t.length,{value:t,done:!1})}))},6547:function(t,e,n){var a=n("a691"),i=n("1d80"),r=function(t){return function(e,n){var r,s,o=String(i(e)),l=a(n),c=o.length;return l<0||l>=c?t?"":void 0:(r=o.charCodeAt(l),r<55296||r>56319||l+1===c||(s=o.charCodeAt(l+1))<56320||s>57343?t?o.charAt(l):r:t?o.slice(l,l+2):s-56320+(r-55296<<10)+65536)}};t.exports={codeAt:r(!1),charAt:r(!0)}},"684d":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=this,n=e.$createElement,a=e._self._c||n;return a("div",[a("van-sticky",[a("van-nav-bar",{attrs:{title:e.titles[e.$route.name]}},["Setting"!==e.$route.name?a("div",{attrs:{slot:"left"},on:{click:e.showSwitch},slot:"left"},[a("van-icon",{staticStyle:{"margin-right":"5px"},attrs:{name:"exchange",color:"#333",size:"20"}}),a("span",[e._v(e._s(e.currentWallet.name))])],1):e._e(),"WalletPortfolio"===e.$route.name?a("div",{attrs:{slot:"right"},on:{click:function(){t.$router.push("/wallet-list")}},slot:"right"},[a("van-icon",{attrs:{name:"add-o",color:"#333",size:"20"}})],1):e._e()])],1),a("wallet-switch",{ref:"wallet-switch"}),a("keep-alive",[a("router-view")],1),a("div",{staticStyle:{height:"50px"}}),a("van-tabbar",{attrs:{"safe-area-inset-bottom":"","active-color":"#333","inactive-color":"#999",route:""}},[a("van-tabbar-item",{attrs:{to:"/",icon:"paid"}},[e._v("资产")]),a("van-tabbar-item",{attrs:{to:"/staking",icon:"chart-trending-o"}},[e._v("委托")]),a("van-tabbar-item",{attrs:{to:"/governance-list",icon:"comment-o"}},[e._v("治理")]),a("van-tabbar-item",{attrs:{to:"/setting",icon:"setting-o"}},[e._v("设置")])],1)],1)},i=[],r=n("ec97"),s={mixins:[r["a"]],data:function(){return{titles:{WalletPortfolio:"资产",Staking:"委托",Governances:"治理",Setting:"设置"}}},methods:{showSwitch:function(){this.$refs["wallet-switch"].switch()}}},o=s,l=n("2877"),c=Object(l["a"])(o,a,i,!1,null,null,null);e["default"]=c.exports},"758c":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=this,n=e.$createElement,a=e._self._c||n;return a("van-grid",{attrs:{"icon-size":"20px"}},[a("van-grid-item",{attrs:{icon:"qr",text:"收款"},on:{click:function(){t.$router.push("/wallet-receive?address="+e.currentWallet.address)}}}),a("van-grid-item",{attrs:{icon:"cash-back-record",text:"转账"},on:{click:function(){t.$router.push("/wallet-transfer?address="+e.currentWallet.address)}}}),a("van-grid-item",{attrs:{icon:"todo-list-o",text:"交易"},on:{click:function(){t.$router.push("/wallet-tx?address="+e.currentWallet.address)}}}),a("van-grid-item",{attrs:{icon:"setting-o",text:"详情"},on:{click:function(){t.$router.push("/wallet-form?address="+e.currentWallet.address)}}})],1)},i=[],r=n("ec97"),s={mixins:[r["a"]]},o=s,l=n("2877"),c=Object(l["a"])(o,a,i,!1,null,null,null);e["default"]=c.exports},"77c5":function(t,e,n){"use strict";var a=n("16d0"),i=n.n(a);i.a},"8f90":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-cell-group",{attrs:{title:"币种"}},[0===t.coins.length?n("div",{staticStyle:{padding:"10px 0"}},[n("van-skeleton",{attrs:{row:2,avatar:""}})],1):t._e(),t._l(t.coins,(function(e,a){return n("van-cell",{key:a,attrs:{"right-arrow":"",center:"",title:e.denom,label:e.price||"--"}},[n("div",{attrs:{slot:"icon"},slot:"icon"},[n("van-image",{staticStyle:{"margin-right":"10px"},attrs:{src:e.logo||"/static/chains/cosmoshub.svg",width:"40",height:"40"}})],1),n("div",[n("div",[t._v(t._s(e.value||"--"))]),n("div",[t._v(t._s(e.amount))])])])}))],2)},i=[],r={props:{coins:{default:function(){return[]}}}},s=r,o=n("2877"),l=Object(o["a"])(s,a,i,!1,null,null,null);e["default"]=l.exports},"988a":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".skeleton-item[data-v-d57e1436]{padding:20px 0;background:#fff;margin-bottom:10px}",""]),t.exports=e},"9d0f":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-pull-refresh",{staticStyle:{overflow:"visible"},on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[n("wallet-portfolio-card"),n("wallet-portfolio-btns"),n("wallet-portfolio-coins",{attrs:{coins:t.coins}})],1)],1)},i=[],r=(n("d3b7"),n("ec97")),s=(n("96cf"),n("1da1")),o=n("bc3a"),l=n.n(o),c={methods:{init:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.currentWallet.address,t.next=3,l.a.get("/api/auth/accounts/".concat(e));case 3:n=t.sent,this.coins=n.data.result.value.coins;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},u={mixins:[r["a"],c],created:function(){this.init()},components:{"wallet-portfolio-btns":function(){return Promise.all([n.e("home~page"),n.e("home")]).then(n.bind(null,"758c"))},"wallet-portfolio-card":function(){return Promise.all([n.e("home~page"),n.e("home")]).then(n.bind(null,"ab64"))},"wallet-portfolio-coins":function(){return Promise.all([n.e("home~page"),n.e("home")]).then(n.bind(null,"8f90"))}},data:function(){return{coins:[],count:0,isLoading:!1}},methods:{onRefresh:function(){var t=this;setTimeout((function(){t.isLoading=!1,t.count++}),1e3)}}},v=u,d=n("2877"),f=Object(d["a"])(v,a,i,!1,null,null,null);e["default"]=f.exports},ab64:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-cell-group",[n("van-cell",{staticStyle:{padding:"20px",background:"#333",color:"#fff"},attrs:{center:""}},[n("div",[n("van-image",{attrs:{src:"/static/chains/cosmoshub.svg",width:"40",height:"40"}})],1),n("div",{attrs:{slot:"title"},slot:"title"},[n("div",{staticStyle:{"font-size":"20px"}},[t._v("$1239231.123")])]),n("div",{attrs:{slot:"label"},slot:"label"},[n("div",{staticStyle:{color:"#999"}},[t._v(t._s(t._f("shortAddress")(t.currentWallet.address)))])])])],1)},i=[],r=n("ec97"),s={mixins:[r["a"]]},o=s,l=n("2877"),c=Object(l["a"])(o,a,i,!1,null,null,null);e["default"]=c.exports},acb7:function(t,e,n){var a=n("18ab");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("499e").default;i("7fbd66d0",a,!0,{sourceMap:!1,shadowMode:!1})},c66d:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-tabs",{attrs:{color:"#333"}},[n("van-tab",{attrs:{title:"已委托"}},[n("van-cell-group",{attrs:{title:"总收益"}},[n("van-cell",{attrs:{title:"委托总数",center:""}},[n("div",[n("div",[t._v("+238293")]),n("div",[t._v("+$231231.23")])])]),n("van-cell",{attrs:{title:"收益总数",center:""}},[n("div",[n("div",[t._v("+238293")]),n("div",[t._v("+$231231.23")])])])],1),n("van-cell-group",{attrs:{title:"委托人"}},[n("van-cell",{attrs:{title:"Genesis Lab",label:"Rate 7%",center:"","is-link":""}},[n("div",[n("div",[t._v("200")]),n("div",[t._v("+23.xx")])])])],1)],1),n("van-tab",{attrs:{title:"验证人"}},[n("van-cell-group",{attrs:{title:"推荐"}},[n("van-cell",{attrs:{title:"Ping.pub",value:"2%",center:"","is-link":""}})],1),n("van-cell-group",{attrs:{title:"全部"}},[0===t.list.length?n("div",t._l(10,(function(t){return n("div",{key:t,staticClass:"van-hairline--bottom",staticStyle:{padding:"10px 0"}},[n("van-skeleton",{attrs:{row:1,avatar:""}})],1)})),0):t._e(),t._l(t.list,(function(e,a){return n("van-cell",{key:e.operator_address,staticClass:"staking-cell",attrs:{title:e.moniker,value:e.rate,to:"staking-item?validator="+e.operator_address,center:"","is-link":""}},[n("div",{attrs:{slot:"icon"},slot:"icon"},[n("van-tag",{staticStyle:{"margin-right":"10px"},attrs:{plain:"",type:"primary"}},[t._v(t._s(a+1))])],1)])}))],2)],1),n("van-tab",{attrs:{title:"计算器"}},[n("van-cell-group",{attrs:{title:"验证人"}},[n("van-cell",{attrs:{title:"Genesis Lab",value:"Rate 7%",center:"","is-link":""}})],1),n("van-cell-group",{attrs:{title:"收益计算"}},[n("van-field",{attrs:{label:"委托数量",placeholder:"请输入"}})],1)],1)],1)],1)},i=[],r=(n("a4d3"),n("e01a"),n("d28b"),n("a9e3"),n("b680"),n("d3b7"),n("3ca3"),n("ddb0"),n("96cf"),n("1da1")),s=n("bc3a"),o=n.n(s),l={methods:{init:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,n,a,i,r,s,l,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("/api/staking/validators");case 2:for(e=t.sent,n=e.data.result,a=!0,i=!1,r=void 0,t.prev=7,s=n[Symbol.iterator]();!(a=(l=s.next()).done);a=!0)c=l.value,c.moniker=c.description.moniker,c.rate=parseFloat(Number((100*Number(c.commission.commission_rates.rate)).toFixed(2)))+"%";t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](7),i=!0,r=t.t0;case 15:t.prev=15,t.prev=16,a||null==s.return||s.return();case 18:if(t.prev=18,!i){t.next=21;break}throw r;case 21:return t.finish(18);case 22:return t.finish(15);case 23:n.sort((function(t,e){return Number(e.tokens)-Number(t.tokens)})),this.list=n;case 25:case"end":return t.stop()}}),t,this,[[7,11,15,23],[16,,18,22]])})));function e(){return t.apply(this,arguments)}return e}()}},c={mixins:[l],created:function(){this.init()},data:function(){return{list:[]}}},u=c,v=(n("e566"),n("2877")),d=Object(v["a"])(u,a,i,!1,null,null,null);e["default"]=d.exports},cb41:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-cell-group",{attrs:{title:"钱包"}},[n("van-cell",{attrs:{icon:"location-o",title:"钱包管理","is-link":"",to:"/wallet-list"}}),n("van-cell",{attrs:{icon:"location-o",title:"主链服务器","is-link":"",to:"/setting-chains"}})],1),n("van-cell-group",{attrs:{title:"习惯"}},[n("van-cell",{attrs:{icon:"location-o",title:"语言切换","is-link":"",value:"简体中文",to:"/setting-lanaguage"}}),n("van-cell",{attrs:{icon:"location-o",title:"货币单位","is-link":"",value:"$",to:"/setting-currency"}})],1),n("van-cell-group",{attrs:{title:"推荐"}},[n("van-cell",{attrs:{icon:"location-o",title:"区块浏览器","is-link":"",url:"https://look.ping.pub",value:"https://look.ping.pub"}})],1)],1)},i=[],r=n("2877"),s={},o=Object(r["a"])(s,a,i,!1,null,null,null);e["default"]=o.exports},d28b:function(t,e,n){var a=n("746f");a("iterator")},ddb0:function(t,e,n){var a=n("da84"),i=n("fdbc"),r=n("e260"),s=n("9112"),o=n("b622"),l=o("iterator"),c=o("toStringTag"),u=r.values;for(var v in i){var d=a[v],f=d&&d.prototype;if(f){if(f[l]!==u)try{s(f,l,u)}catch(h){f[l]=u}if(f[c]||s(f,c,v),i[v])for(var p in r)if(f[p]!==r[p])try{s(f,p,r[p])}catch(h){f[p]=r[p]}}}},e1e3:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[0===t.list.length?n("div",t._l(5,(function(t){return n("div",{key:t,staticClass:"skeleton-item"},[n("van-skeleton",{attrs:{row:4}})],1)})),0):t._e(),t._l(t.list,(function(e,a){return n("van-panel",{key:a,staticStyle:{"margin-bottom":"10px"},attrs:{title:e.title,desc:e.description},on:{click:function(n){return t.goItem(e)}}},[n("div",[n("van-grid",{attrs:{slot:"label",border:!1},slot:"label"},t._l(e.rate,(function(e,a){return n("van-grid-item",{key:a,staticStyle:{background:"#333"},attrs:{text:a}},[n("div",{attrs:{slot:"icon"},slot:"icon"},[t._v(t._s(e))])])})),1)],1),n("van-row",{attrs:{slot:"footer",type:"flex",align:"center"},slot:"footer"},[n("van-tag",{attrs:{mark:"",type:"Rejected"===e.proposal_status?"danger":"Passed"===e.proposal_status?"success":""}},[t._v(t._s(e.proposal_status))]),n("span",{staticClass:"flex-1"}),n("span",{staticStyle:{"font-size":"12px",color:"#999"}},[t._v("剩余时间：")]),n("van-count-down",{staticStyle:{"font-size":"12px",color:"#999"},attrs:{time:t.time,format:"DD 天 HH 时 mm 分 ss 秒"}})],1)],1)}))],2)},i=[],r=(n("a4d3"),n("e01a"),n("d28b"),n("a9e3"),n("b680"),n("d3b7"),n("3ca3"),n("ddb0"),n("96cf"),n("1da1")),s=n("bc3a"),o=n.n(s),l={methods:{init:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,n,a,i,r,s,l,c,u,v,d,f,p,h,m,g,b;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("/api/gov/proposals");case 2:for(e=t.sent,n=e.data.result,a=!0,i=!1,r=void 0,t.prev=7,s=n[Symbol.iterator]();!(a=(l=s.next()).done);a=!0)c=l.value,u=c.content&&c.content.value||{},v=u.title,d=u.description,c.title=v,c.description=d&&d.substr(0,80)+"...",f=c.final_tally_result,p=f.yes,h=f.no,m=f.abstain,g=f.no_with_veto,b=Number(p)+Number(h)+Number(m)+Number(g),c.yes=(Number(p)/b*100).toFixed(2)+"%",c.no=(Number(h)/b*100).toFixed(2)+"%",c.abstain=(Number(m)/b*100).toFixed(2)+"%",c.no_with_veto=(Number(g)/b*100).toFixed(2)+"%",c.rate={yes:c.yes,no:c.no,abstain:c.abstain,no_with_veto:c.no_with_veto};t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](7),i=!0,r=t.t0;case 15:t.prev=15,t.prev=16,a||null==s.return||s.return();case 18:if(t.prev=18,!i){t.next=21;break}throw r;case 21:return t.finish(18);case 22:return t.finish(15);case 23:this.list=n;case 24:case"end":return t.stop()}}),t,this,[[7,11,15,23],[16,,18,22]])})));function e(){return t.apply(this,arguments)}return e}()}},c={mixins:[l],created:function(){this.init()},data:function(){return{list:[],time:108e6}},methods:{goItem:function(t){this.$router.push("/governance-item?id="+t.id)}}},u=c,v=(n("77c5"),n("2877")),d=Object(v["a"])(u,a,i,!1,null,"d57e1436",null);e["default"]=d.exports},e566:function(t,e,n){"use strict";var a=n("acb7"),i=n.n(a);i.a},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);