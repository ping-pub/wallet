(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0eff":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("graceBottomDialog",{attrs:{show:t.showDialog},on:{closeDialog:function(e){arguments[0]=e=t.$handleEvent(e),t.close()}}},[i("v-uni-view",{attrs:{slot:"btns"},slot:"btns"},[i("v-uni-view",{staticClass:"grace-space-between grace-body grace-flex-vbottom grace-border-b"},[i("v-uni-view",{staticClass:"look-title-sm",staticStyle:{padding:"12rpx 0 12rpx 0"}},[t._v("Switch Chain")]),i("v-uni-view",{staticClass:"grace-icons icon-close3",staticStyle:{padding:"12rpx 0 12rpx 12rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}})],1)],1),i("v-uni-view",{attrs:{slot:"content"},slot:"content"},[i("v-uni-scroll-view",{staticClass:"grace-scroll-y",staticStyle:{height:"800rpx"},attrs:{"scroll-y":"true"}},[i("v-uni-view",{staticClass:"grace-body mt-12"},[i("v-uni-view",{staticClass:"grace-comments-replay mb-12",staticStyle:{"border-radius":"0"},style:{border:1===t.current?"2rpx solid #37434b":"2rpx solid #eee"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.confirm1.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:" grace-flex-vcenter grace-flex "},[i("v-uni-image",{staticClass:"mr-6 grace-box-shadow",staticStyle:{width:"48rpx",height:"48rpx","border-radius":"100%"},attrs:{src:"../../static/wallet/cosmoshub.svg",mode:""}}),i("v-uni-view",{staticClass:"look-title-sm flex-1"},[t._v("Cosmos")]),i("v-uni-view",{staticClass:"tr",staticStyle:{width:"80rpx"}},[1===t.current?i("v-uni-text",{staticClass:"grace-icons icon-right",staticStyle:{color:"#37434b","font-size":"20px"}}):t._e()],1)],1)],1),i("v-uni-view",{staticClass:"grace-comments-replay mb-12",staticStyle:{"border-radius":"0"},style:{border:"2rpx solid #eee"}},[i("v-uni-view",{staticClass:" grace-flex-vcenter grace-flex "},[i("v-uni-image",{staticClass:"mr-6",staticStyle:{width:"48rpx",height:"48rpx"},attrs:{src:"../../static/wallet/kava.svg",mode:""}}),i("v-uni-view",{staticClass:"look-title-sm flex-1"},[t._v("Kava")]),i("v-uni-view",{staticClass:"tr",staticStyle:{width:"80rpx"}})],1)],1),i("v-uni-view",{staticClass:"grace-comments-replay mb-12",staticStyle:{"border-radius":"0"},style:{border:"2rpx solid #eee"}},[i("v-uni-view",{staticClass:" grace-flex-vcenter grace-flex "},[i("v-uni-image",{staticClass:"mr-6",staticStyle:{width:"48rpx",height:"48rpx"},attrs:{src:"../../static/wallet/iris.svg",mode:""}}),i("v-uni-view",{staticClass:"look-title-sm flex-1"},[t._v("Iris")]),i("v-uni-view",{staticClass:"tr",staticStyle:{width:"80rpx"}})],1)],1),i("v-uni-view",{staticClass:"grace-comments-replay mb-12",staticStyle:{"border-radius":"0"},style:{border:"2rpx solid #eee"}},[i("v-uni-view",{staticClass:" grace-flex-vcenter grace-flex "},[i("v-uni-image",{staticClass:"mr-6",staticStyle:{width:"48rpx",height:"48rpx"},attrs:{src:"../../static/wallet/cosmos.svg",mode:""}}),i("v-uni-view",{staticClass:"look-title-sm flex-1"},[t._v("Cell")]),i("v-uni-view",{staticClass:"tr",staticStyle:{width:"80rpx"}})],1)],1)],1)],1)],1)],1)},s=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return s})},"3f50":function(t,e,i){"use strict";i.r(e);var a=i("dd43"),s=i("885b");for(var c in s)"default"!==c&&function(t){i.d(e,t,function(){return s[t]})}(c);var n=i("2877"),r=Object(n["a"])(s["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports},"87ac":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{showSwitchWallet:!1}},methods:{closeSwitchWallet:function(){this.showSwitchWallet=!1},switchWallet:function(){this.showSwitchWallet=!0}}};e.default=a},"885b":function(t,e,i){"use strict";i.r(e);var a=i("fa59"),s=i.n(a);for(var c in a)"default"!==c&&function(t){i.d(e,t,function(){return a[t]})}(c);e["default"]=s.a},a08d:function(t,e,i){"use strict";i.r(e);var a=i("0eff"),s=i("e0f7");for(var c in s)"default"!==c&&function(t){i.d(e,t,function(){return s[t]})}(c);var n=i("2877"),r=Object(n["a"])(s["default"],a["a"],a["b"],!1,null,"42b1794a",null);e["default"]=r.exports},dd43:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("gracePage",{attrs:{headerBG:"#fff"}},[i("v-uni-view",{staticClass:"grace-bg-white",attrs:{slot:"gHeader"},slot:"gHeader"},[i("v-uni-view",{staticClass:"status_bar"}),i("v-uni-view",{staticClass:"grace-flex-center",staticStyle:{padding:"32rpx 24rpx 12rpx 24rpx"}},[i("v-uni-text",{staticClass:"look-title"},[t._v("Ping")]),i("v-uni-text",{staticClass:"grace-white",staticStyle:{flex:"1","text-align":"center","font-size":"18px"}}),i("v-uni-view",{staticClass:"grace-flex-vcenter grace-flex",staticStyle:{padding:"4rpx 0","font-weight":"500"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.switchWallet.apply(void 0,arguments)}}},[i("v-uni-text",{staticStyle:{"margin-right":"12rpx"}},[t._v("CosmosHub-3")]),i("v-uni-text",{staticClass:"look-app-icon look-app-icon-switch"})],1)],1)],1),i("v-uni-view",{attrs:{slot:"gBody"},slot:"gBody"},[i("v-uni-view",{staticClass:"grace-body",staticStyle:{"padding-top":"48rpx"}},[i("v-uni-view",{staticClass:"grace-box-shadow look-gtbg-dark grace-border-radius-small"},[i("v-uni-view",{staticClass:"grace-space-between",staticStyle:{"align-items":"center",padding:"60rpx 24rpx 48rpx 24rpx"}},[i("v-uni-view",{},[i("v-uni-view",{},[i("v-uni-text",{staticClass:"grace-gray"},[t._v("Assets")])],1),i("v-uni-view",{},[i("v-uni-text",{staticClass:"grace-white",staticStyle:{"font-size":"24px","font-weight":"bold"}},[t._v("$12,992,134,199")])],1)],1),i("v-uni-view",{},[i("v-uni-image",{staticStyle:{width:"140upx",height:"140upx"},attrs:{src:"../../static/wallet/asset1.png",mode:""}})],1)],1)],1)],1),i("v-uni-view",{staticClass:"grace-bg-white grace-space-between grace-flex-vbottom",staticStyle:{padding:"24rpx"}},[i("v-uni-text",{staticClass:"look-title-sm"},[t._v("Wallets")]),i("v-uni-text",{staticClass:"grace-black6",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.go("/pages/walletManage/index")}}},[i("v-uni-text",{staticClass:"grace-icons icon-add2 mr-6 f-16"})],1)],1),t._l(10,function(e){return i("v-uni-view",{key:e},[i("v-uni-view",{staticClass:"grace-flex grace-flex-vcenter look-gtbg-dark grace-border-radius-small",staticStyle:{padding:"24rpx 32rpx",margin:"0 24rpx 24rpx 24rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.go("/pages/walletItem/index")}}},[i("v-uni-image",{staticClass:"mr-12",staticStyle:{width:"60rpx",height:"60rpx"},attrs:{src:"../../static/wallet/cosmoshub.svg"}}),i("v-uni-text",{staticClass:"flex-1 f-16"},[t._v("NAME")]),i("v-uni-view",{staticClass:"tr"},[i("v-uni-view",{staticClass:"f-18 grace-green"},[t._v("$12,992,134,199")]),i("v-uni-view",{staticClass:"grace-gray"},[t._v("cosmos1zu83m37u...ktq2l6lqjtzw")])],1)],1)],1)}),i("SwtichChain",{attrs:{showDialog:t.showSwitchWallet},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.closeSwitchWallet.apply(void 0,arguments)}}})],2)],1)},s=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return s})},e0f7:function(t,e,i){"use strict";i.r(e);var a=i("e5cb"),s=i.n(a);for(var c in a)"default"!==c&&function(t){i.d(e,t,function(){return a[t]})}(c);e["default"]=s.a},e5cb:function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=a(i("6086")),c={props:{showDialog:{default:!1}},components:{graceBottomDialog:s.default},data:function(){return{current:1}},methods:{close:function(){this.$emit("close")},confirm1:function(){this.close()}}};e.default=c},fa59:function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=a(i("87ac")),c=a(i("a08d")),n={components:{SwtichChain:c.default},mounted:function(){this.goSwitch("/pages/indexWhite/index")},mixins:[s.default],methods:{go:function(t){uni.navigateTo({url:t})},goSwitch:function(t){uni.switchTab({url:t})}}};e.default=n}}]);