(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goverance-Goverance"],{4866:function(t,i,e){"use strict";var a,s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("gracePage",{attrs:{headerBG:"#fff"}},[e("v-uni-view",{attrs:{slot:"gHeader"},slot:"gHeader"},[e("v-uni-view",{staticClass:"cu-bar bg-white"},[e("v-uni-view",{staticClass:"action sub-title"},[e("v-uni-text",{staticClass:"text-xl text-bold text-black"},[t._v("治理")]),e("v-uni-text",{staticClass:"bg-black"})],1),e("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.switchWallet.apply(void 0,arguments)}}},[t._v(t._s(t.currentWallet.name)),e("v-uni-text",{staticClass:"cuIcon-filter text-gray"})],1)],1)],1),e("v-uni-view",{attrs:{slot:"gBody"},slot:"gBody"},[e("SwitchWallet",{attrs:{showDialog:t.showSwitchWallet},on:{close:function(i){arguments[0]=i=t.$handleEvent(i),t.closeSwitchWallet.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"page-space"}),t._l(t.list,function(i){return e("v-uni-view",{key:i.id,staticClass:"cu-card article no-card",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.go("/pages/goverance/GoveranceDetail?id="+i.id)}}},[e("v-uni-view",{staticClass:"cu-item shadow"},[e("v-uni-view",{staticClass:"title"},[e("v-uni-view",{staticClass:"text-cut"},[t._v(t._s(i.title))])],1),e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"desc"},[e("v-uni-view",{staticClass:"text-gray"},[t._v(t._s(i.description))]),e("v-uni-view",{staticClass:"grace-flex grace-flex-vcenter tc mt-12 mb-12"},[e("v-uni-view",{staticClass:"flex-1"},[e("v-uni-view",{staticClass:"f-16 grace-black"},[t._v(t._s(i.yes))]),e("v-uni-view",{staticClass:"grace-black6"},[t._v("Yes")])],1),e("v-uni-view",{staticClass:"flex-1"},[e("v-uni-view",{staticClass:"f-16 grace-black"},[t._v(t._s(i.no))]),e("v-uni-view",{staticClass:"grace-black6"},[t._v("No")])],1),e("v-uni-view",{staticClass:"flex-1"},[e("v-uni-view",{staticClass:"f-16 grace-black"},[t._v(t._s(i.abstain))]),e("v-uni-view",{staticClass:"grace-black6"},[t._v("Abstain")])],1),e("v-uni-view",{staticClass:"flex-1"},[e("v-uni-view",{staticClass:"f-16 grace-black"},[t._v(t._s(i.no_with_veto))]),e("v-uni-view",{staticClass:"grace-black6"},[t._v("No Veto")])],1)],1),e("v-uni-view")],1)],1)],1),e("v-uni-view",{staticClass:"page-space"})],1)}),e("PageLoading",{attrs:{loading:t.loading}})],2)],1)},n=[];e.d(i,"b",function(){return s}),e.d(i,"c",function(){return n}),e.d(i,"a",function(){return a})},5425:function(t,i,e){"use strict";e.r(i);var a=e("9545"),s=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,function(){return a[t]})}(n);i["default"]=s.a},"6f20":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{showSwitchWallet:!1}},methods:{closeSwitchWallet:function(){this.showSwitchWallet=!1,this.init&&this.init()},switchWallet:function(){this.showSwitchWallet=!0}}};i.default=a},9545:function(t,i,e){"use strict";var a=e("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("96cf");var s=a(e("3b8d")),n=a(e("6f20")),c=a(e("86e0")),l={mixins:[c.default,n.default],computed:{lang:function(){return this.$t("vote")}},onLoad:function(){this.initList()},data:function(){return{loading:!1,list:[]}},methods:{init:function(){this.initList()},initList:function(){var t=(0,s.default)(regeneratorRuntime.mark(function t(){var i,e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,this.$api().proposalList().catch(function(t){e.loading=!1});case 3:i=t.sent,this.loading=!1,this.list=i;case 6:case"end":return t.stop()}},t,this)}));function i(){return t.apply(this,arguments)}return i}()}};i.default=l},a254:function(t,i,e){"use strict";e.r(i);var a=e("4866"),s=e("5425");for(var n in s)"default"!==n&&function(t){e.d(i,t,function(){return s[t]})}(n);var c,l=e("f0c5"),u=Object(l["a"])(s["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],c);i["default"]=u.exports}}]);