(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-wallet-WalletTx"],{"75c6":function(t,a,e){"use strict";e.r(a);var n=e("7631"),c=e("ac60");for(var i in c)"default"!==i&&function(t){e.d(a,t,function(){return c[t]})}(i);var l=e("2877"),o=Object(l["a"])(c["default"],n["a"],n["b"],!1,null,null,null);a["default"]=o.exports},7631:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("gracePage",{attrs:{headerBG:"#fff"}},[e("PageTitle",{attrs:{slot:"gHeader",title:"交易记录"},slot:"gHeader"}),e("v-uni-view",{attrs:{slot:"gBody"},slot:"gBody"},[e("v-uni-scroll-view",{staticClass:"bg-white nav",attrs:{"scroll-x":""}},[e("v-uni-view",{staticClass:"flex text-center"},[e("v-uni-view",{staticClass:"cu-item flex-sub",class:{"text-black cur":"all"===t.tab},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.changeTab("all")}}},[t._v("全部")]),e("v-uni-view",{staticClass:"cu-item flex-sub",class:{"text-black cur":"out"===t.tab},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.changeTab("out")}}},[t._v("转出")]),e("v-uni-view",{staticClass:"cu-item flex-sub",class:{"text-black cur":"in"===t.tab},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.changeTab("in")}}},[t._v("转入")]),e("v-uni-view",{staticClass:"cu-item flex-sub",class:{"text-black cur":"fail"===t.tab},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.changeTab("fail")}}},[t._v("失败")])],1)],1),e("v-uni-view",{staticClass:"page-space"}),e("v-uni-view",{staticClass:"cu-bar bg-white"},[e("v-uni-view",{staticClass:"action"},[e("v-uni-text",{},[t._v("1 Kava = $0.5")])],1),e("v-uni-view",{staticClass:"action"},[e("v-uni-view",{},[t._v("12323 iaa")])],1)],1),e("v-uni-view",{staticClass:"page-space"}),e("SwitchWallet",{attrs:{showDialog:t.showSwitchWallet},on:{close:function(a){arguments[0]=a=t.$handleEvent(a),t.closeSwitchWallet.apply(void 0,arguments)}}})],1)],1)},c=[];e.d(a,"a",function(){return n}),e.d(a,"b",function(){return c})},"87ac":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{showSwitchWallet:!1}},methods:{closeSwitchWallet:function(t){var a=t.isChange;this.showSwitchWallet=!1,a&&this.init&&this.init()},switchWallet:function(){this.showSwitchWallet=!0}}};a.default=n},ac60:function(t,a,e){"use strict";e.r(a);var n=e("f409"),c=e.n(n);for(var i in n)"default"!==i&&function(t){e.d(a,t,function(){return n[t]})}(i);a["default"]=c.a},f409:function(t,a,e){"use strict";var n=e("288e");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=n(e("87ac")),i={mixins:[c.default],data:function(){return{tab:"all",cuIconList:[{cuIcon:"cardboardfill",color:"red",badge:120,name:"可用"},{cuIcon:"recordfill",color:"orange",badge:1,name:"录像"},{cuIcon:"picfill",color:"yellow",badge:0,name:"图像"},{cuIcon:"noticefill",color:"olive",badge:22,name:"通知"},{cuIcon:"upstagefill",color:"cyan",badge:0,name:"排行榜"},{cuIcon:"clothesfill",color:"blue",badge:0,name:"皮肤"},{cuIcon:"discoverfill",color:"purple",badge:0,name:"发现"},{cuIcon:"questionfill",color:"mauve",badge:0,name:"帮助"},{cuIcon:"commandfill",color:"purple",badge:0,name:"问答"},{cuIcon:"brandfill",color:"mauve",badge:0,name:"版权"}]}},methods:{changeTab:function(t){this.tab=t},scan:function(){uni.scanCode()},goSwitch:function(t){uni.switchTab({url:t})},go:function(t){uni.navigateTo({url:t})},goBack:function(){uni.navigateBack()}}};a.default=i}}]);