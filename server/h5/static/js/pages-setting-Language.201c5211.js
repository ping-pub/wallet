(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-setting-Language"],{"20b4":function(t,e,n){"use strict";n.r(e);var a=n("ccaa"),i=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,function(){return a[t]})}(c);e["default"]=i.a},"3f27":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("gracePage",{attrs:{headerBG:"#fff"}},[n("PageTitle",{attrs:{slot:"gHeader",title:t.lang.title,toast:t.toast,msg:t.msg},slot:"gHeader"},[n("v-uni-text",{staticClass:"cuIcon-check",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.saveLang()}}})],1),n("v-uni-view",{attrs:{slot:"gBody"},slot:"gBody"},[n("v-uni-view",{staticClass:"cu-list menu text-left"},[n("v-uni-view",{staticClass:"cu-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeCurrent("zh-CN")}}},[n("v-uni-label",{staticClass:"flex justify-between align-center flex-sub",staticStyle:{padding:"20rpx 0"}},[n("v-uni-view",{staticClass:"flex-sub"},[n("v-uni-view",{staticClass:"text-lg"},[t._v("简体中文")])],1),"zh-CN"===t.current?n("v-uni-view",{staticClass:"cuIcon-roundcheckfill",staticStyle:{"font-size":"20px"}}):t._e()],1)],1),n("v-uni-view",{staticClass:"cu-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeCurrent("en-US")}}},[n("v-uni-label",{staticClass:"flex justify-between align-center flex-sub",staticStyle:{padding:"20rpx 0"}},[n("v-uni-view",{staticClass:"flex-sub"},[n("v-uni-view",{staticClass:"text-lg"},[t._v("English")])],1),"en-US"===t.current?n("v-uni-view",{staticClass:"cuIcon-roundcheckfill",staticStyle:{"font-size":"20px"}}):t._e()],1)],1)],1)],1)],1)},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},"52a7a":function(t,e,n){var a=n("c30e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("cc65a938",a,!0,{sourceMap:!1,shadowMode:!1})},"7cbc":function(t,e,n){"use strict";n.r(e);var a=n("3f27"),i=n("20b4");for(var c in i)"default"!==c&&function(t){n.d(e,t,function(){return i[t]})}(c);n("d2e8");var s=n("2877"),u=Object(s["a"])(i["default"],a["a"],a["b"],!1,null,"5429431b",null);e["default"]=u.exports},c30e:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".checkBtns[data-v-5429431b]{width:%?50?%}",""])},ccaa:function(t,e,n){"use strict";var a=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("2680")),c={mixins:[i.default],created:function(){var t=this._i18n.locale;console.log(t),this.current=t},computed:{lang:function(){return this.$t("settingLanguage")}},data:function(){return{current:""}},methods:{goBack:function(){uni.navigateBack()},changeCurrent:function(t){this.current=t},saveLang:function(){try{this._i18n.locale=this.current,uni.setStorageSync("language",this.current),this.goSwitch("/pages/setting/Setting")}catch(t){console.log(t)}}}};e.default=c},d2e8:function(t,e,n){"use strict";var a=n("52a7a"),i=n.n(a);i.a}}]);