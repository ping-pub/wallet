(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-walletItem-index"],{"184b":function(t,e,a){"use strict";a.r(e);var i=a("e1ed"),s=a("4e43");for(var c in s)"default"!==c&&function(t){a.d(e,t,function(){return s[t]})}(c);var n=a("2877"),l=Object(n["a"])(s["default"],i["a"],i["b"],!1,null,null,null);e["default"]=l.exports},"4e43":function(t,e,a){"use strict";a.r(e);var i=a("9d89"),s=a.n(i);for(var c in i)"default"!==c&&function(t){a.d(e,t,function(){return i[t]})}(c);e["default"]=s.a},"87ac":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{showSwitchWallet:!1}},methods:{closeSwitchWallet:function(){this.showSwitchWallet=!1},switchWallet:function(){this.showSwitchWallet=!0}}};e.default=i},"9d89":function(t,e,a){"use strict";var i=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i(a("87ac")),c={mixins:[s.default],methods:{scan:function(){uni.scanCode()},goSwitch:function(t){uni.switchTab({url:t})},go:function(t){uni.navigateTo({url:t})},goBack:function(){uni.navigateBack()}}};e.default=c},e1ed:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("gracePage",{attrs:{headerBG:"#fff"}},[a("PageTitle",{attrs:{slot:"gHeader",title:"Wallet Detail"},slot:"gHeader"},[a("v-uni-view",{staticClass:"grace-flex-vcenter grace-flex",staticStyle:{padding:"12rpx 24rpx","font-weight":"500"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.switchWallet.apply(void 0,arguments)}}},[a("v-uni-text",{staticStyle:{"margin-right":"12rpx"}},[t._v("Address1")]),a("v-uni-text",{staticClass:"look-app-icon look-app-icon-switch"})],1)],1),a("v-uni-view",{attrs:{slot:"gBody"},slot:"gBody"},[a("v-uni-view",{staticClass:"grace-body"},[a("v-uni-view",{staticClass:"look-gtbg-dark grace-box-shadow grace-border mb-12 mt-12  grace-border-radius-small",staticStyle:{padding:"24rpx"}},[a("v-uni-view",{staticClass:"mb-12"},[a("v-uni-view",{staticClass:"grace-white"},[a("v-uni-view",{staticClass:"grace-ellipsis"},[t._v("cosmos1zu83m37u7k8zzzshgj6sq4q453ktq2l6lqjtzw")])],1)],1),a("v-uni-view",{staticClass:"grace-space-between grace-flex-vcenter"},[a("v-uni-text",{staticClass:"grace-white",staticStyle:{"font-size":"22px","font-weight":"bold"}},[t._v("$12,992,134,199")]),a("v-uni-view",[a("v-uni-image",{staticStyle:{width:"80rpx",height:"80rpx"},attrs:{src:"../../static/wallet/cosmoshub.svg",mode:""}})],1)],1)],1)],1),a("v-uni-view",{staticClass:"grace-flex tc",staticStyle:{padding:"32rpx 0 24rpx 0"}},[a("v-uni-view",{staticClass:"flex-1 grace-black6",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.go("/pages/walletQrcode/index")}}},[a("v-uni-view",{staticClass:"mb-6"},[a("v-uni-text",{staticClass:"look-app-icon look-app-icon-qrcode grace-box-shadow",staticStyle:{"font-size":"20px",padding:"16rpx","border-radius":"100%"}})],1),a("v-uni-view",{staticClass:"grace-grids-text"},[t._v("Recevie")])],1),a("v-uni-view",{staticClass:"flex-1 grace-black6",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.go("/pages/walletTransfer/index")}}},[a("v-uni-view",{staticClass:"mb-6"},[a("v-uni-text",{staticClass:"look-app-icon look-app-icon-transfer grace-box-shadow",staticStyle:{"font-size":"20px",padding:"16rpx","border-radius":"100%"}})],1),a("v-uni-view",{staticClass:"grace-grids-text"},[t._v("Send")])],1),a("v-uni-view",{staticClass:"flex-1 grace-black6",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.scan.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"mb-6"},[a("v-uni-text",{staticClass:"grace-icons icon-set grace-box-shadow",staticStyle:{"font-size":"20px",padding:"16rpx","border-radius":"100%"}})],1),a("v-uni-view",{staticClass:"grace-grids-text"},[t._v("Rename")])],1)],1),a("v-uni-view",{staticClass:"page-space"}),a("v-uni-view",{staticClass:"mb-12",staticStyle:{padding:"24rpx 32rpx"}},[a("v-uni-view",{staticClass:"grace-space-between grace-flex-vcenter"},[a("v-uni-view",[a("v-uni-text",{staticClass:"look-title",staticStyle:{color:"#212452"}},[t._v("ATOM")])],1),a("v-uni-view",{staticClass:"tr"},[a("v-uni-text",{staticClass:"grace-black f-18"},[t._v("$2,134,992,134.32")])],1)],1),a("v-uni-view",{staticClass:"tr grace-border-b mb-6",staticStyle:{"padding-bottom":"12rpx"}},[a("v-uni-text",{staticClass:"grace-black6 f-16"},[t._v("123324 ATOM")])],1),a("v-uni-view",{staticClass:"grace-black6 grace-space-between mb-6"},[a("v-uni-text",[t._v("Avaliable")]),a("v-uni-text",[t._v("9,012,390,123,901,234.91")])],1),a("v-uni-view",{staticClass:"grace-black6 grace-space-between mb-6"},[a("v-uni-text",[t._v("Delegated")]),a("v-uni-text",[t._v("4.90123")])],1),a("v-uni-view",{staticClass:"grace-black6 grace-space-between mb-6"},[a("v-uni-text",[t._v("Unbonding")]),a("v-uni-text",[t._v("4.90123")])],1),a("v-uni-view",{staticClass:"grace-black6 grace-space-between mb-6"},[a("v-uni-text",[t._v("Reward")]),a("v-uni-text",{staticClass:"grace-green f-16"},[t._v("+ 4.90123")])],1),a("v-uni-view",{staticClass:"grace-flex-center tc look-gtbg-dark grace-border-radius-small mt-12 grace-box-shadow"},[a("v-uni-text",{staticClass:"flex-1",staticStyle:{padding:"12rpx 0"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goSwitch("/pages/delegate/index")}}},[t._v("Delegate")]),a("v-uni-view",{staticStyle:{width:"2rpx",background:"#fff"}}),a("v-uni-text",{staticClass:"flex-1",staticStyle:{padding:"12rpx 0"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goSwitch("/pages/vote/index")}}},[t._v("Vote")])],1)],1),a("v-uni-view",{staticClass:"page-space"}),t._l(5,function(e){return a("v-uni-view",{key:e},[a("v-uni-view",{staticClass:"grace-flex grace-flex-vcenter grace-border-b",staticStyle:{padding:"24rpx"}},[a("v-uni-view",{staticClass:"flex-1"},[a("v-uni-text",{staticClass:"look-title",staticStyle:{color:"#212452"}},[t._v("IRIS")])],1),a("v-uni-view",{staticClass:"tr"},[a("v-uni-view",[a("v-uni-text",{staticClass:"grace-black f-16"},[t._v("$2,134,992,134.32")])],1),a("v-uni-view",[a("v-uni-text",{staticClass:"grace-black6"},[t._v("12323 iaa")])],1)],1)],1)],1)}),a("SwitchWallet",{attrs:{showDialog:t.showSwitchWallet},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.closeSwitchWallet.apply(void 0,arguments)}}})],2)],1)},s=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return s})}}]);