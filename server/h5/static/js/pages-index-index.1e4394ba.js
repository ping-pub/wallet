(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"165d":function(t,a,e){"use strict";e.r(a);var i=e("8752"),s=e("b216");for(var n in s)"default"!==n&&function(t){e.d(a,t,function(){return s[t]})}(n);var c,l=e("f0c5"),u=Object(l["a"])(s["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],c);a["default"]=u.exports},"6f20":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={data:function(){return{showSwitchWallet:!1}},methods:{closeSwitchWallet:function(){this.showSwitchWallet=!1,this.init&&this.init()},switchWallet:function(){this.showSwitchWallet=!0}}};a.default=i},8752:function(t,a,e){"use strict";var i,s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("gracePage",{attrs:{headerBG:"#fff"}},[e("v-uni-view",{attrs:{slot:"gHeader"},slot:"gHeader"},[e("v-uni-view",{staticClass:"cu-bar bg-white"},[e("v-uni-view",{staticClass:"action sub-title"},[e("v-uni-text",{staticClass:"text-xl text-bold text-black"},[t._v("Ping Wallet")]),e("v-uni-text",{staticClass:"bg-black"})],1),e("v-uni-view",{staticClass:"action"})],1)],1),e("v-uni-view",{attrs:{slot:"gBody"},slot:"gBody"},[e("v-uni-scroll-view",{staticClass:"bg-white nav",attrs:{"scroll-x":!0,"scroll-with-animation":!0}},t._l(t.chains,function(a,i){return e("v-uni-view",{key:i,staticClass:"cu-item",class:{"text-black cur":t.tabChain===a.name},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTab(a)}}},[t._v(t._s(a.name))])}),1),e("v-uni-view",{staticClass:" solid-bottom  padding grace-border-radius-small",staticStyle:{margin:"20rpx","background-image":"url('../../static/index/bg.png')","background-size":"cover","background-color":"#fff","text-align":"center",padding:"40rpx 0 60rpx"}},[e("v-uni-view",[e("v-uni-image",{staticStyle:{width:"120rpx",height:"120rpx"},attrs:{src:"../../static/wallet/asset1.png",mode:""}})],1),e("v-uni-text",{staticClass:"text-white",staticStyle:{"font-size":"20px"}},[t._v(t._s(t.currentCurrency)+" "+t._s(t.moneyTotal))])],1),e("v-uni-view",{staticClass:"bg-white "},[e("v-uni-view",{staticClass:"cu-bar "},[e("v-uni-view",{staticClass:"action"},[e("v-uni-text",{staticClass:"cuIcon-titles text-black"}),e("v-uni-text",{staticClass:"text-xl text-bold"},[t._v("地址")])],1),e("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.go("/pages/wallet/WalletManage")}}},[e("v-uni-text",{staticClass:"text-sm text-gray cuIcon-right"})],1)],1),e("v-uni-view",{staticClass:"cu-list menu-avatar m-space"},[t._l(t.chains[t.tabChain].wallets,function(a,i){return e("v-uni-view",{key:i,staticClass:"cu-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.go("/pages/wallet/WalletDetail?address="+a.address+"&name="+a.name+"&chain="+a.chain)}}},[e("v-uni-image",{staticStyle:{width:"96rpx",height:"96rpx"},attrs:{src:t.chains[t.tabChain].logo,mode:""}}),e("v-uni-view",{staticClass:"content",staticStyle:{left:"100rpx"}},[e("v-uni-view",{staticClass:"text-black"},[t._v(t._s(a.name))]),e("v-uni-view",{staticClass:"text-gray text-sm"},[t._v(t._s(a.address.substr(0,10)+"..."+a.address.substr(-10,10)))])],1),e("v-uni-view",{staticClass:"action",staticStyle:{"text-align":"right",width:"100%"}},[e("v-uni-view",{staticClass:"cu-tag round bg-grey"},[e("v-uni-text",{staticClass:"text-lg"},[t._v(t._s(t.currentCurrency)+" "+t._s(a.money||"0"))])],1)],1)],1)}),0===t.chains[t.tabChain].wallets.length?e("PageEmpty",{on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.go("/pages/wallet/WalletCreate")}}}):t._e()],2)],1),e("v-uni-view",{staticClass:"page-space"})],1)],1)},n=[];e.d(a,"b",function(){return s}),e.d(a,"c",function(){return n}),e.d(a,"a",function(){return i})},b216:function(t,a,e){"use strict";e.r(a);var i=e("bb35"),s=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(a,t,function(){return i[t]})}(n);a["default"]=s.a},bb35:function(t,a,e){"use strict";var i=e("288e");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s=i(e("6f20")),n=i(e("86e0")),c={data:function(){return{tabChain:"Cosmos",moneyTotal:"0.00"}},methods:{changeTab:function(t){this.tabChain=t.name}},mixins:[s.default,n.default]};a.default=c}}]);