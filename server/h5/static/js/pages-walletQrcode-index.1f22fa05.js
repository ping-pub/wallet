(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-walletQrcode-index"],{"26f4":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={methods:{goBack:function(){uni.navigateBack()},go:function(t){uni.navigateTo({url:t})}}};e.default=i},"31fd":function(t,e,a){"use strict";a.r(e);var i=a("26f4"),c=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,function(){return i[t]})}(r);e["default"]=c.a},a6e1:function(t,e,a){"use strict";a.r(e);var i=a("d975"),c=a("31fd");for(var r in c)"default"!==r&&function(t){a.d(e,t,function(){return c[t]})}(r);var n=a("2877"),s=Object(n["a"])(c["default"],i["a"],i["b"],!1,null,null,null);e["default"]=s.exports},d975:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("gracePage",{attrs:{headerBG:"#fff"}},[a("v-uni-view",{staticClass:"status_bar"}),a("v-uni-view",{staticClass:"grace-flex-vcenter grace-space-between",attrs:{slot:"gHeader"},slot:"gHeader"},[a("v-uni-text",{staticClass:"grace-black6 grace-icons icon-arrow-left",staticStyle:{padding:"0 24upx",width:"80upx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}}),a("v-uni-text",{staticClass:"grace-black",staticStyle:{flex:"1","text-align":"center","font-size":"16px"}},[t._v("Receive")]),a("v-uni-text",{staticStyle:{padding:"0 24upx",width:"80upx","text-align":"right","font-size":"26px"}})],1),a("v-uni-view",{staticClass:"grace-body",attrs:{slot:"gBody"},slot:"gBody"},[a("v-uni-view",{staticClass:"grace-bg-white grace-border mb-12  grace-border-radius-small grace-box-shadow",staticStyle:{padding:"48rpx","margin-top":"24rpx"}},[a("v-uni-view",{staticClass:"mb-12 tc"},[a("v-uni-text",{staticStyle:{"font-size":"18px"}},[t._v("NAME")])],1),a("v-uni-view",[a("v-uni-text",{staticClass:"f-16 grace-text tc",staticStyle:{width:"100%",display:"block","overflow-wrap":"break-word"}},[t._v("cosmos1zu83m37u7k8zzzshgj6sq4q453ktq2l6lqjtzw")])],1),a("v-uni-view",{staticStyle:{background:"#fff",margin:"0 auto","margin-top":"24rpx",width:"360rpx",height:"360rpx"}},[a("v-uni-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:"https://mubu.com/qrcode/service?data=https://mubu.com/doc/6a87FSKhV1k&size=200",mode:""}})],1),a("v-uni-view",{staticClass:"tc grace-black9",staticStyle:{"margin-top":"24rpx"}},[t._v("扫一扫上面的二维码，转账给我")])],1),a("v-uni-view",{staticClass:"grace-border tc grace-black6 grace-box-shadowm",staticStyle:{padding:"12rpx 0","margin-bottom":"20rpx"}},[t._v("Copy")])],1)],1)},c=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return c})}}]);