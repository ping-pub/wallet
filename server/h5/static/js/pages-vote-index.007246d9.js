(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-vote-index"],{"16a6":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".checkBtns[data-v-607f7398]{width:%?50?%}",""])},"35fd":function(t,e,a){"use strict";a.r(e);var i=a("fba1"),n=a("f453");for(var c in n)"default"!==c&&function(t){a.d(e,t,function(){return n[t]})}(c);a("ec31");var r=a("2877"),s=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,"607f7398",null);e["default"]=s.exports},"469f":function(t,e,a){a("6c1c"),a("1654"),t.exports=a("7d7b")},"5d73":function(t,e,a){t.exports=a("469f")},"5e52":function(t,e,a){"use strict";var i=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("5d73")),c={created:function(){var t=this._i18n.locale,e=!0,a=!1,i=void 0;try{for(var c,r=(0,n.default)(this.items);!(e=(c=r.next()).done);e=!0){var s=c.value;s.lang===t&&(s.checked=!0)}}catch(l){a=!0,i=l}finally{try{e||null==r.return||r.return()}finally{if(a)throw i}}},computed:{lang:function(){return this.$t("vote")}},data:function(){return{items:[{checked:!1,lang:"en",text:"USD"},{checked:!1,lang:"zh",text:"CNY"}]}},methods:{showDrawer1:function(){this.$refs.SwitchWallet.show()},checkedChange:function(t){var e=!0,a=!1,i=void 0;try{for(var c,r=(0,n.default)(this.items);!(e=(c=r.next()).done);e=!0){var s=c.value;s.checked=!1}}catch(l){a=!0,i=l}finally{try{e||null==r.return||r.return()}finally{if(a)throw i}}this.items[t[1]].checked=t[0],this._i18n.locale=this.items[t[1]].lang,console.log(this._i18n.locale)},goBack:function(){uni.navigateBack()}}};e.default=c},"7d7b":function(t,e,a){var i=a("e4ae"),n=a("7cd6");t.exports=a("584a").getIterator=function(t){var e=n(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return i(e.call(t))}},e377:function(t,e,a){var i=a("16a6");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("32724729",i,!0,{sourceMap:!1,shadowMode:!1})},ec31:function(t,e,a){"use strict";var i=a("e377"),n=a.n(i);n.a},f453:function(t,e,a){"use strict";a.r(e);var i=a("5e52"),n=a.n(i);for(var c in i)"default"!==c&&function(t){a.d(e,t,function(){return i[t]})}(c);e["default"]=n.a},fba1:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("gracePage",{attrs:{headerBG:"#fff"}},[a("v-uni-view",{staticClass:"status_bar"}),a("v-uni-view",{staticClass:"grace-flex-vcenter grace-flex grace-body",attrs:{slot:"gHeader"},slot:"gHeader"},[a("v-uni-text",{staticClass:"grace-black6 grace-icons icon-arrow-left",staticStyle:{width:"200rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}}),a("v-uni-text",{staticClass:"grace-black",staticStyle:{flex:"1","text-align":"center","font-size":"16px"}},[t._v(t._s(t.lang.title))]),a("v-uni-view",{staticClass:"grace-flex-vcenter grace-flex-end",staticStyle:{"font-weight":"500",width:"200rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showDrawer1.apply(void 0,arguments)}}},[a("v-uni-text",{staticStyle:{"margin-right":"12rpx"}},[t._v("Address1")]),a("v-uni-text",{staticClass:"look-app-icon look-app-icon-switch"})],1)],1),a("v-uni-view",{staticClass:"grace-body",attrs:{slot:"gBody"},slot:"gBody"},[a("v-uni-view",{staticClass:"grace-flex grace-flex-vcenter",staticStyle:{"margin-top":"24rpx"}},[a("v-uni-view",{staticClass:"mr-12"},[a("v-uni-image",{staticStyle:{width:"80rpx",height:"80rpx"},attrs:{src:"/static/vote/vote_pic.png",mode:""}})],1),a("v-uni-view",{},[a("v-uni-view",{staticClass:"look-title"},[t._v("Proposals")]),a("v-uni-view",{staticClass:"grace-black9"},[t._v("CosmosHub-3 · 0.32.7")])],1)],1),a("v-uni-view",{staticClass:"grace-flex-center tc look-gtbg-dark grace-border-radius-small mt-12 grace-box-shadow"},[a("v-uni-text",{staticClass:"flex-1",staticStyle:{padding:"12rpx 0"}},[t._v("All")]),a("v-uni-view",{staticStyle:{width:"2rpx",background:"#fff"}}),a("v-uni-text",{staticClass:"flex-1",staticStyle:{padding:"12rpx 0"}},[t._v("Involved")])],1),a("SwitchWallet",{ref:"SwitchWallet"})],1)],1)},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})}}]);