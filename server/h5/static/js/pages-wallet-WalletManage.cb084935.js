(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-wallet-WalletManage"],{"0949":function(t,e,a){"use strict";var i=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("2680")),s={mixins:[n.default],computed:{lang:function(){return this.$t("pagesWalletManage")}},methods:{goBack:function(){uni.navigateBack()}}};e.default=s},7273:function(t,e,a){"use strict";var i,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("gracePage",{attrs:{headerBG:"#fff"}},[a("PageTitle",{attrs:{slot:"gHeader",title:t.lang.title},slot:"gHeader"},[a("v-uni-text",{staticClass:"cuIcon-add big-tap",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.go("/pages/wallet/WalletCreate?create=1")}}})],1),a("v-uni-view",{attrs:{slot:"gBody"},slot:"gBody"},[a("v-uni-view",{staticClass:"page-space"}),t._l(t.chains,function(e,i){return e.wallets.length>0?a("v-uni-view",{key:i},[a("v-uni-view",{staticClass:"cu-bar bg-white"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-image",{staticStyle:{width:"48rpx",height:"48rpx","margin-right":"20rpx"},attrs:{src:e.logo,mode:""}}),a("v-uni-text",{staticClass:"text-lg text-bold"},[t._v(t._s(e.name))])],1),a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"cu-tag"},[t._v(t._s(e.unit||""))])],1)],1),a("v-uni-view",{staticClass:"cu-list menu-avatar bg-white"},t._l(e.wallets,function(e,i){return a("v-uni-view",{key:i,staticClass:"cu-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.go("/pages/wallet/WalletCreate?address="+e)}}},[a("v-uni-view",{staticClass:"content",staticStyle:{left:"40rpx"}},[a("v-uni-view",{staticClass:"text-black"},[t._v(t._s(t.wallets[e].name))]),a("v-uni-view",{staticClass:"text-gray"},[t._v(t._s(t.wallets[e].short))])],1),a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"cuIcon-edit"})],1)],1)}),1),a("v-uni-view",{staticClass:"page-space"})],1):t._e()}),0===Object.keys(t.wallets).length?a("PageEmpty"):t._e()],2)],1)},s=[];a.d(e,"b",function(){return n}),a.d(e,"c",function(){return s}),a.d(e,"a",function(){return i})},b3e6:function(t,e,a){"use strict";a.r(e);var i=a("7273"),n=a("b679");for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);var l,c=a("f0c5"),u=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],l);e["default"]=u.exports},b679:function(t,e,a){"use strict";a.r(e);var i=a("0949"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);e["default"]=n.a}}]);