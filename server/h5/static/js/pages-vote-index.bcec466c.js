(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-vote-index"],{2680:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={methods:{go:function(t){uni.navigateTo({url:t})},goSwitch:function(t){uni.switchTab({url:t})}}};e.default=a},"665b":function(t,e,i){"use strict";i.r(e);var a=i("fbbc"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e["default"]=s.a},6967:function(t,e,i){"use strict";i.r(e);var a=i("7e2b"),s=i("665b");for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);var c=i("2877"),l=Object(c["a"])(s["default"],a["a"],a["b"],!1,null,null,null);e["default"]=l.exports},"7e2b":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("gracePage",{attrs:{headerBG:"#fff"}},[i("v-uni-view",{staticClass:"grace-bg-white",attrs:{slot:"gHeader"},slot:"gHeader"},[i("v-uni-view",{staticClass:"status_bar"}),i("v-uni-view",{staticClass:"grace-flex-center",staticStyle:{padding:"32rpx 24rpx 12rpx 24rpx"}},[i("v-uni-text",{staticClass:"look-title"},[t._v("Goverance")]),i("v-uni-text",{staticClass:"grace-white",staticStyle:{flex:"1","text-align":"center","font-size":"18px"}}),i("v-uni-view",{staticClass:"grace-flex-vcenter grace-flex",staticStyle:{padding:"4rpx 0","font-weight":"500"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.switchWallet.apply(void 0,arguments)}}},[i("v-uni-text",{staticStyle:{"margin-right":"12rpx"}},[t._v("Address1")]),i("v-uni-text",{staticClass:"look-app-icon look-app-icon-switch"})],1)],1)],1),i("v-uni-view",{staticClass:"grace-body",attrs:{slot:"gBody"},slot:"gBody"},[i("SwitchWallet",{attrs:{showDialog:t.showSwitchWallet},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.closeSwitchWallet.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"grace-flex grace-flex-vcenter mb-12",staticStyle:{"padding-top":"32rpx"}},[i("v-uni-view",{staticClass:"mr-12"},[i("v-uni-image",{staticStyle:{width:"80rpx",height:"80rpx"},attrs:{src:"/static/vote/vote_pic.png",mode:""}})],1),i("v-uni-view",{staticClass:"flex-1"},[i("v-uni-view",{staticClass:"grace-space-between grace-flex-vbottom"},[i("v-uni-text",{staticClass:"look-title-sm"},[t._v("Cosmos")])],1),i("v-uni-view",[i("v-uni-text",{staticClass:"grace-black9"},[t._v("CosmosHub-3 · 0.32.7")])],1)],1)],1),t._l(10,function(e){return i("v-uni-view",{key:e,staticClass:"mb-12 grace-box-shadow look-gtbg-dark grace-border-radius-small",staticStyle:{padding:"24rpx 0"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.go("/pages/voteItem/index")}}},[i("v-uni-view",{staticClass:"mb-6 ",staticStyle:{"font-size":"12px"}},[i("v-uni-text",{staticClass:"grace-bg-green",staticStyle:{padding:"0 24rpx"}},[t._v("投票中")])],1),i("v-uni-view",{staticStyle:{padding:"0 24rpx"}},[i("v-uni-view",{staticClass:"look-title-sm mt-12 grace-white"},[t._v("是否支持冷钱包投票?")]),i("v-uni-view",{staticClass:"grace-flex grace-flex-vcenter tc mt-12 mb-12"},[i("v-uni-view",{staticClass:"flex-1"},[i("v-uni-view",{staticClass:"f-16 grace-green"},[t._v("23%")]),i("v-uni-view",{staticClass:"grace-gray"},[t._v("Yes")])],1),i("v-uni-view",{staticClass:"flex-1"},[i("v-uni-view",{staticClass:"f-16 grace-green"},[t._v("36%")]),i("v-uni-view",{staticClass:"grace-gray"},[t._v("No")])],1),i("v-uni-view",{staticClass:"flex-1"},[i("v-uni-view",{staticClass:"f-16 grace-green"},[t._v("22%")]),i("v-uni-view",{staticClass:"grace-gray"},[t._v("Width")])],1),i("v-uni-view",{staticClass:"flex-1"},[i("v-uni-view",{staticClass:"f-16 grace-green"},[t._v("7.89%")]),i("v-uni-view",{staticClass:"grace-gray"},[t._v("Rewards")])],1)],1),i("v-uni-view",{staticClass:"grace-white",staticStyle:{"font-size":"12px"}},[t._v("投票倒计时：20天12小时12分")])],1)],1)})],2)],1)},s=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return s})},"87ac":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{showSwitchWallet:!1}},methods:{closeSwitchWallet:function(){this.showSwitchWallet=!1},switchWallet:function(){this.showSwitchWallet=!0}}};e.default=a},fbbc:function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=a(i("87ac")),n=a(i("2680")),c={mixins:[n.default,s.default],computed:{lang:function(){return this.$t("vote")}},data:function(){return{items:[{checked:!1,lang:"en",text:"USD"},{checked:!1,lang:"zh",text:"CNY"}]}},methods:{goBack:function(){uni.navigateBack()}}};e.default=c}}]);