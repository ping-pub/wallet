(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-setting-Currency"],{"288f":function(t,e,n){"use strict";n.r(e);var c=n("2e67"),i=n.n(c);for(var u in c)"default"!==u&&function(t){n.d(e,t,function(){return c[t]})}(u);e["default"]=i.a},"2e67":function(t,e,n){"use strict";var c=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=c(n("86e0")),u={mixins:[i.default],computed:{lang:function(){return this.$t("settingCurrency")},currency:function(){return this.$store.state.currency.currency}},data:function(){return{current:"$"}},created:function(){this.current=this.currency},methods:{goBack:function(){uni.navigateBack()},changeCurrent:function(t){this.current=t},save:function(){try{this.$store.commit("changeCurrency",this.current),uni.setStorageSync("currency",this.current),this.toastShow("设置成功")}catch(t){console.log(t)}}}};e.default=u},"8b58":function(t,e,n){"use strict";n.r(e);var c=n("8d5e"),i=n("288f");for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);var s,a=n("f0c5"),r=Object(a["a"])(i["default"],c["b"],c["c"],!1,null,"dab84a98",null,!1,c["a"],s);e["default"]=r.exports},"8d5e":function(t,e,n){"use strict";var c,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("gracePage",{attrs:{headerBG:"#fff"}},[n("PageTitle",{attrs:{slot:"gHeader",title:t.lang.title,toast:t.toast,msg:t.msg},slot:"gHeader"},[n("v-uni-text",{staticClass:"cuIcon-roundcheck",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.save()}}})],1),n("v-uni-view",{attrs:{slot:"gBody"},slot:"gBody"},[n("v-uni-view",{staticClass:"cu-list menu text-left"},[n("v-uni-view",{staticClass:"cu-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeCurrent("￥")}}},[n("v-uni-label",{staticClass:"flex justify-between align-center flex-sub",staticStyle:{padding:"20rpx 0"}},[n("v-uni-view",{staticClass:"flex-sub"},[n("v-uni-view",{staticClass:"text-lg"},[t._v("人民币(￥)")])],1),"￥"===t.current?n("v-uni-view",{staticClass:"cuIcon-roundcheckfill",staticStyle:{"font-size":"20px"}}):t._e()],1)],1),n("v-uni-view",{staticClass:"cu-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeCurrent("$")}}},[n("v-uni-label",{staticClass:"flex justify-between align-center flex-sub",staticStyle:{padding:"20rpx 0"}},[n("v-uni-view",{staticClass:"flex-sub"},[n("v-uni-view",{staticClass:"text-lg"},[t._v("美元($)")])],1),"$"===t.current?n("v-uni-view",{staticClass:"cuIcon-roundcheckfill",staticStyle:{"font-size":"20px"}}):t._e()],1)],1)],1)],1)],1)},u=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return u}),n.d(e,"a",function(){return c})}}]);