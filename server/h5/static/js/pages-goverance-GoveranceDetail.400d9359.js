(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goverance-GoveranceDetail"],{"27f2":function(t,a,e){"use strict";var i=e("288e");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("96cf");var s=i(e("3b8d")),n=i(e("86e0")),c={mixins:[n.default],computed:{lang:function(){return this.$t("vote")}},onLoad:function(t){var a=t.id;this.initData(a)},data:function(){return{loading:!1,proposal:{}}},methods:{initData:function(){var t=(0,s.default)(regeneratorRuntime.mark(function t(a){var e,i=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,this.$api().proposalItem(a).catch(function(t){i.loading=!1});case 3:e=t.sent,this.loading=!1,this.proposal=e;case 6:case"end":return t.stop()}},t,this)}));function a(a){return t.apply(this,arguments)}return a}()}};a.default=c},"9f4d":function(t,a,e){"use strict";e.r(a);var i=e("27f2"),s=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(a,t,function(){return i[t]})}(n);a["default"]=s.a},abd8:function(t,a,e){"use strict";var i,s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("gracePage",{attrs:{headerBG:"#fff"}},[e("PageTitle",{attrs:{slot:"gHeader",title:"详情",loading:t.loading},slot:"gHeader"}),e("v-uni-view",{attrs:{slot:"gBody"},slot:"gBody"},[e("v-uni-view",{staticClass:"cu-bar bg-white"},[e("v-uni-view",{staticClass:"action"},[e("v-uni-text",{staticClass:"text-lg text-bold"},[t._v(t._s(t.proposal.title))])],1)],1),e("v-uni-view",{staticClass:"bg-white",staticStyle:{padding:"20rpx"}},[e("v-uni-view",{staticClass:" grace-card-text text-black"},[t._v(t._s(t.proposal.description))])],1),e("v-uni-view",{staticClass:"page-space"}),e("v-uni-view",{staticClass:"bg-white",staticStyle:{padding:"20rpx"}},[e("v-uni-view",{staticClass:"grace-flex grace-flex-vcenter tc"},[e("v-uni-view",{staticClass:"flex-1"},[e("v-uni-view",{staticClass:"f-16 grace-black"},[t._v(t._s(t.proposal.yes))]),e("v-uni-view",{staticClass:"grace-black6"},[t._v("Yes")])],1),e("v-uni-view",{staticClass:"flex-1"},[e("v-uni-view",{staticClass:"f-16 grace-black"},[t._v(t._s(t.proposal.no))]),e("v-uni-view",{staticClass:"grace-black6"},[t._v("No")])],1),e("v-uni-view",{staticClass:"flex-1"},[e("v-uni-view",{staticClass:"f-16 grace-black"},[t._v(t._s(t.proposal.abstain))]),e("v-uni-view",{staticClass:"grace-black6"},[t._v("Abstain")])],1),e("v-uni-view",{staticClass:"flex-1"},[e("v-uni-view",{staticClass:"f-16 grace-black"},[t._v(t._s(t.proposal.no_with_veto))]),e("v-uni-view",{staticClass:"grace-black6"},[t._v("No Veto")])],1)],1)],1)],1)],1)},n=[];e.d(a,"b",function(){return s}),e.d(a,"c",function(){return n}),e.d(a,"a",function(){return i})},f857:function(t,a,e){"use strict";e.r(a);var i=e("abd8"),s=e("9f4d");for(var n in s)"default"!==n&&function(t){e.d(a,t,function(){return s[t]})}(n);var c,r=e("f0c5"),l=Object(r["a"])(s["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],c);a["default"]=l.exports}}]);