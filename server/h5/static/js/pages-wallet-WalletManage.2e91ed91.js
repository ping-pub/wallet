(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-wallet-WalletManage"],{"48c6":function(t,e,a){"use strict";a.r(e);var i=a("5cdc"),n=a("ed75");for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);var c,l=a("f0c5"),u=Object(l["a"])(n["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],c);e["default"]=u.exports},"5cdc":function(t,e,a){"use strict";var i,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("gracePage",{attrs:{headerBG:"#fff"}},[a("PageTitle",{attrs:{slot:"gHeader",title:"Wallet Manage"},slot:"gHeader"},[a("v-uni-text",{staticClass:"cuIcon-add big-tap",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.go("/pages/wallet/WalletCreate?create=1")}}})],1),a("v-uni-view",{attrs:{slot:"gBody"},slot:"gBody"},[a("v-uni-view",{staticClass:"page-space"}),t._l(t.chains,function(e,i){return a("v-uni-view",{key:i},[a("v-uni-view",{staticClass:"cu-bar bg-white"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"cuIcon-titles text-black"}),a("v-uni-text",{staticClass:"text-xl text-bold"},[t._v(t._s(e.name))])],1),a("v-uni-view",{staticClass:"action"},[a("v-uni-image",{staticStyle:{width:"48rpx",height:"48rpx"},attrs:{src:e.logo,mode:""}})],1)],1),a("v-uni-view",{staticClass:"cu-list menu-avatar bg-white"},[t._l(e.wallets,function(e,i){return a("v-uni-view",{key:i,staticClass:"cu-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.go("/pages/wallet/WalletCreate?address="+e.address+"&chain="+e.chain)}}},[a("v-uni-view",{staticClass:"content",staticStyle:{left:"40rpx"}},[a("v-uni-view",{staticClass:"text-black"},[t._v(t._s(e.name))]),a("v-uni-view",{staticClass:"text-gray"},[t._v(t._s(e.address))])],1),a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"cuIcon-edit"})],1)],1)}),0===Object.keys(e.wallets).length?a("PageEmpty"):t._e()],2),a("v-uni-view",{staticClass:"page-space"})],1)})],2)],1)},s=[];a.d(e,"b",function(){return n}),a.d(e,"c",function(){return s}),a.d(e,"a",function(){return i})},b1bf:function(t,e,a){"use strict";var i=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("86e0")),s={mixins:[n.default],methods:{goBack:function(){uni.navigateBack()}}};e.default=s},ed75:function(t,e,a){"use strict";a.r(e);var i=a("b1bf"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);e["default"]=n.a}}]);