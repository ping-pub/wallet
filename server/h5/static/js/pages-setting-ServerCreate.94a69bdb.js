(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-setting-ServerCreate"],{"72cc":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".walletcreate-chainitem[data-v-5ffc666f]{background:#fff;padding:%?20?% 0;border:%?2?% solid #fff}.walletcreate-chainitem-active[data-v-5ffc666f]{background:#eee;padding:%?20?% 0;border:%?2?% solid #333}",""])},"80f6":function(t,i,e){var a=e("72cc");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=e("4f06").default;s("563fec18",a,!0,{sourceMap:!1,shadowMode:!1})},8851:function(t,i,e){"use strict";e.r(i);var a=e("e9a4"),s=e("d0d8");for(var n in s)"default"!==n&&function(t){e.d(i,t,function(){return s[t]})}(n);e("96f4");var c,r=e("f0c5"),u=Object(r["a"])(s["default"],a["b"],a["c"],!1,null,"5ffc666f",null,!1,a["a"],c);i["default"]=u.exports},"96f4":function(t,i,e){"use strict";var a=e("80f6"),s=e.n(a);s.a},c181:function(t,i,e){"use strict";var a=e("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("96cf");var s=a(e("3b8d")),n=a(e("2680")),c={mixins:[n.default],data:function(){return{form:{name:"",version:"0.32.7",logo:"",lcd:""}}},methods:{fetchNodeInfo:function(){var t=(0,s.default)(regeneratorRuntime.mark(function t(){var i,e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.form.lcd){t.next=3;break}return this.toastShow("请输入 lcd 服务器地址"),t.abrupt("return");case 3:return this.loading=!0,t.next=6,this.$api().nodeInfo(this.form.lcd).catch(function(){e.loading=!1});case 6:i=t.sent,this.loading=!1,this.form.version=i;case 9:case"end":return t.stop()}},t,this)}));function i(){return t.apply(this,arguments)}return i}()}};i.default=c},d0d8:function(t,i,e){"use strict";e.r(i);var a=e("c181"),s=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,function(){return a[t]})}(n);i["default"]=s.a},e9a4:function(t,i,e){"use strict";var a,s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("gracePage",{attrs:{headerBG:"#fff"}},[e("PageTitle",{attrs:{slot:"gHeader",title:"添加主链",toast:t.toast,msg:t.msg,loading:t.loading},slot:"gHeader"},[e("v-uni-text",{staticClass:"cuIcon-roundcheck"})],1),e("v-uni-view",{attrs:{slot:"gBody"},slot:"gBody"},[e("v-uni-view",{staticClass:"page-space"}),e("v-uni-view",{staticClass:"cu-bar bg-white"},[e("v-uni-view",{staticClass:"action"},[e("v-uni-text",{staticClass:"cuIcon-titles text-black"}),e("v-uni-text",{staticClass:"text-xl text-bold"},[t._v("基础信息")])],1),e("v-uni-view",{staticClass:"action"})],1),e("v-uni-form",[e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[t._v("主链名称")])],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-input",{attrs:{placeholder:"请输入",name:"input"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[t._v("图标地址")])],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-input",{attrs:{placeholder:"请输入",name:"input"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[t._v("lcd 服务器地址")])],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-input",{attrs:{placeholder:"请输入",name:"input"},model:{value:t.form.lcd,callback:function(i){t.$set(t.form,"lcd",i)},expression:"form.lcd"}})],1)],1),e("v-uni-view",{staticClass:"page-space"}),e("v-uni-view",{staticClass:"cu-bar bg-white"},[e("v-uni-view",{staticClass:"action"},[e("v-uni-text",{staticClass:"cuIcon-titles text-black"}),e("v-uni-text",{staticClass:"text-xl text-bold"},[t._v("支持版本")])],1),e("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.fetchNodeInfo.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"cuIcon-refresh",staticStyle:{"font-size":"14px"}}),e("v-uni-text",{staticClass:"text-sm",staticStyle:{"margin-left":"4rpx"}},[t._v("获取版本")])],1)],1),e("v-uni-view",{staticClass:"bg-white"},[e("v-uni-view",{staticClass:"grid col-3 padding-sm"},[e("v-uni-view",{staticClass:"padding-xs"},[e("v-uni-button",{staticClass:"cu-btn lg block",class:{"line-grey":"0.32.7"!==t.form.version,"bg-black":"0.32.7"===t.form.version},staticStyle:{"border-radius":"4rpx"}},[t._v("0.32.7"),e("v-uni-view",{staticClass:"cu-tag badge bg-gradual-blue"},[t._v("推荐")])],1)],1),e("v-uni-view",{staticClass:"padding-xs"},[e("v-uni-button",{staticClass:"cu-btn lg block",class:{"line-grey":"0.32.1"!==t.form.version,"bg-black":"0.32.1"===t.form.version},staticStyle:{"border-radius":"4rpx"}},[t._v("0.32.1")])],1)],1)],1)],1)],1)},n=[];e.d(i,"b",function(){return s}),e.d(i,"c",function(){return n}),e.d(i,"a",function(){return a})}}]);