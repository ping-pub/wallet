(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-wallet-WalletDetail"],{3788:function(t,i,e){"use strict";e.r(i);var a=e("6ec5"),s=e.n(a);for(var c in a)"default"!==c&&function(t){e.d(i,t,function(){return a[t]})}(c);i["default"]=s.a},"3c83":function(t,i,e){"use strict";e.r(i);var a=e("79c4"),s=e("3788");for(var c in s)"default"!==c&&function(t){e.d(i,t,function(){return s[t]})}(c);var n=e("2877"),l=Object(n["a"])(s["default"],a["a"],a["b"],!1,null,null,null);i["default"]=l.exports},"6ec5":function(t,i,e){"use strict";var a=e("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=a(e("87ac")),c={mixins:[s.default],data:function(){return{cuIconList:[{cuIcon:"cardboardfill",color:"red",badge:120,name:"可用"},{cuIcon:"recordfill",color:"orange",badge:1,name:"录像"},{cuIcon:"picfill",color:"yellow",badge:0,name:"图像"},{cuIcon:"noticefill",color:"olive",badge:22,name:"通知"},{cuIcon:"upstagefill",color:"cyan",badge:0,name:"排行榜"},{cuIcon:"clothesfill",color:"blue",badge:0,name:"皮肤"},{cuIcon:"discoverfill",color:"purple",badge:0,name:"发现"},{cuIcon:"questionfill",color:"mauve",badge:0,name:"帮助"},{cuIcon:"commandfill",color:"purple",badge:0,name:"问答"},{cuIcon:"brandfill",color:"mauve",badge:0,name:"版权"}]}},methods:{scan:function(){uni.scanCode()},goSwitch:function(t){uni.switchTab({url:t})},go:function(t){uni.navigateTo({url:t})},goBack:function(){uni.navigateBack()}}};i.default=c},"79c4":function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("gracePage",{attrs:{headerBG:"#fff"}},[e("PageTitle",{attrs:{slot:"gHeader",title:"Address1"},slot:"gHeader"},[e("v-uni-text",{staticClass:"cuIcon-edit",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.go("/pages/wallet/WalletCreate")}}})],1),e("v-uni-view",{attrs:{slot:"gBody"},slot:"gBody"},[e("v-uni-view",{staticClass:"bg-white",staticStyle:{"padding-top":"40rpx","padding-bottom":"20rpx"}},[e("v-uni-view",{staticStyle:{"background-image":"url(../../static/wallet/bg2.png)","background-size":"cover",padding:"40rpx 0 0"}},[e("v-uni-view",{staticClass:"tc",staticStyle:{"margin-bottom":"10rpx"}},[e("v-uni-text",{staticClass:"text-black",staticStyle:{"font-size":"20px"}},[t._v("$2,134,992,134.32")])],1),e("v-uni-view",{staticClass:"tc"},[e("v-uni-text",{staticClass:"text-gray mr-6"},[t._v("cosmos1...453ktq2l6lqjtzw")]),e("v-uni-text",{staticClass:"cuIcon-qrcode text-gray"})],1)],1)],1),e("v-uni-view",{staticClass:"bg-white",staticStyle:{padding:"20rpx"}},[e("v-uni-view",{staticClass:"walletdetail cu-list grid col-3 no-border bg-gradual-blue grace-border-radius-small",staticStyle:{padding:"0"}},[e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-text",{staticClass:"cuIcon-hot",staticStyle:{color:"#fff","font-size":"18px"}}),e("v-uni-text",{staticStyle:{color:"#fff","font-size":"12px"}},[t._v("投票")])],1),e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-text",{staticClass:"cuIcon-safe",staticStyle:{color:"#fff","font-size":"18px"}}),e("v-uni-text",{staticStyle:{color:"#fff","font-size":"12px"}},[t._v("委托")])],1),e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-text",{staticClass:"cuIcon-down",staticStyle:{color:"#fff","font-size":"18px"}}),e("v-uni-text",{staticStyle:{color:"#fff","font-size":"12px"}},[t._v("赎回")])],1)],1)],1),e("v-uni-view",{staticClass:"page-space"}),e("v-uni-view",{staticClass:"cu-bar bg-white"},[e("v-uni-view",{staticClass:"action"},[e("v-uni-text",{staticClass:"cuIcon-titles text-black"}),e("v-uni-text",{staticClass:"text-xl text-bold"},[t._v("ATOM")])],1),e("v-uni-view",{staticClass:"action"},[e("v-uni-text",{staticClass:"text-gray",staticStyle:{"font-size":"12px"}},[t._v("交易")]),e("v-uni-text",{staticClass:"cuIcon-right text-gray",staticStyle:{"font-size":"14px"}})],1)],1),e("v-uni-view",{staticClass:"cu-list grid col-2"},[e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-text",{staticStyle:{color:"#333333","font-size":"16px"}},[t._v("90,123,901,234.91")]),e("v-uni-text",[t._v("可用")])],1),e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-text",{staticStyle:{color:"#333333","font-size":"16px"}},[t._v("90,123,901,234.91")]),e("v-uni-text",[t._v("委托")])],1),e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-text",{staticStyle:{color:"#39b54a","font-size":"16px"}},[t._v("+90,123,901,234.91")]),e("v-uni-text",[t._v("收益")])],1),e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-text",{staticStyle:{color:"#333333","font-size":"16px"}},[t._v("90,123,901,234.91")]),e("v-uni-text",[t._v("赎回中")])],1),e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-text",{staticStyle:{color:"#333333","font-size":"16px"}},[t._v("$4.5")]),e("v-uni-text",[t._v("市价")])],1),e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-text",{staticStyle:{color:"#333333","font-size":"16px"}},[t._v("$90,123,901,234.91")]),e("v-uni-text",[t._v("总值")])],1)],1),e("v-uni-view",{staticClass:"page-space"}),e("v-uni-view",{staticClass:"cu-bar bg-white"},[e("v-uni-view",{staticClass:"action"},[e("v-uni-text",{staticClass:"cuIcon-titles text-black"}),e("v-uni-text",{staticClass:"text-xl text-bold"},[t._v("Kava")])],1),e("v-uni-view",{staticClass:"action"},[e("v-uni-view",{staticClass:"text-black text-lg"},[t._v("$2,134,992,134.32")])],1)],1),e("v-uni-view",{staticClass:"cu-bar bg-white"},[e("v-uni-view",{staticClass:"action"},[e("v-uni-text",{},[t._v("1 Kava = $0.5")])],1),e("v-uni-view",{staticClass:"action"},[e("v-uni-view",{},[t._v("12323 iaa")])],1)],1),e("v-uni-view",{staticClass:"page-space"}),e("v-uni-view",{staticClass:"cu-bar bg-white"},[e("v-uni-view",{staticClass:"action"},[e("v-uni-text",{staticClass:"cuIcon-titles text-black"}),e("v-uni-text",{staticClass:"text-xl text-bold"},[t._v("Iris")])],1),e("v-uni-view",{staticClass:"action"},[e("v-uni-view",{staticClass:"text-black text-lg"},[t._v("$2,134,992,134.32")])],1)],1),e("v-uni-view",{staticClass:"cu-bar bg-white"},[e("v-uni-view",{staticClass:"action"},[e("v-uni-text",{},[t._v("1 Iris = $0.5")])],1),e("v-uni-view",{staticClass:"action"},[e("v-uni-view",{},[t._v("12323 iris")])],1)],1),e("v-uni-view",{staticClass:"page-space"}),e("SwitchWallet",{attrs:{showDialog:t.showSwitchWallet},on:{close:function(i){arguments[0]=i=t.$handleEvent(i),t.closeSwitchWallet.apply(void 0,arguments)}}})],1)],1)},s=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return s})},"87ac":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{showSwitchWallet:!1}},methods:{closeSwitchWallet:function(){this.showSwitchWallet=!1},switchWallet:function(){this.showSwitchWallet=!0}}};i.default=a}}]);