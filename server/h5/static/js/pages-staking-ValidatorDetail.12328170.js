(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-staking-ValidatorDetail"],{3853:function(t,n,a){"use strict";a.r(n);var e=a("bb62"),i=a("f65b");for(var r in i)"default"!==r&&function(t){a.d(n,t,function(){return i[t]})}(r);var u,s=a("f0c5"),c=Object(s["a"])(i["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],u);n["default"]=c.exports},"647a":function(t,n,a){"use strict";var e=a("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,a("96cf");var i=e(a("3b8d")),r=e(a("2680")),u={mixins:[r.default],data:function(){return{validator:{}}},onLoad:function(t){var n=t.validator;this.initData(n)},methods:{initData:function(){var t=(0,i.default)(regeneratorRuntime.mark(function t(n){var a,e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,this.$api().validatorItem(n).catch(function(){e.loading=!1});case 3:a=t.sent,this.loading=!1,this.validator=a;case 6:case"end":return t.stop()}},t,this)}));function n(n){return t.apply(this,arguments)}return n}()}};n.default=u},bb62:function(t,n,a){"use strict";var e,i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("gracePage",{attrs:{headerBG:"#fff"}},[a("PageTitle",{attrs:{slot:"gHeader",title:"验证人"},slot:"gHeader"}),a("v-uni-view",{attrs:{slot:"gBody"},slot:"gBody"},[a("v-uni-view",{staticClass:"cu-list menu bg-white"},t._l(t.validator,function(n,e){return a("v-uni-view",{key:e,staticClass:"cu-item"},[a("v-uni-view",{staticClass:"content"},[a("v-uni-text",{staticClass:"text-black"},[t._v(t._s(e))])],1),a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"text-black"},[t._v(t._s(n))])],1)],1)}),1)],1)],1)},r=[];a.d(n,"b",function(){return i}),a.d(n,"c",function(){return r}),a.d(n,"a",function(){return e})},f65b:function(t,n,a){"use strict";a.r(n);var e=a("647a"),i=a.n(e);for(var r in e)"default"!==r&&function(t){a.d(n,t,function(){return e[t]})}(r);n["default"]=i.a}}]);