(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-settingLanguage-index"],{"0755":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("c5f6");var n={props:{size:{type:Number,default:38},color:{type:String,default:"#EEEEEE"},checked:{type:Boolean,default:!1},checkedColor:{type:String,default:"#FF0036"},parameter:{type:Array,default:function(){return[]}}},data:function(){return{status:!1}},watch:{checked:function(t,e){this.status=t}},created:function(){this.status=this.checked},methods:{changeStatus:function(){this.status=!this.status,this.$emit("change",[this.status,this.parameter])}}};e.default=n},"144a":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("gracePage",{attrs:{headerBG:"#fff"}},[a("v-uni-view",{staticClass:"status_bar"}),a("v-uni-view",{staticClass:"grace-flex-center",attrs:{slot:"gHeader"},slot:"gHeader"},[a("v-uni-text",{staticClass:"grace-black6 grace-icons icon-arrow-left",staticStyle:{padding:"0 24upx",width:"200upx","align-self":"flex-end"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}}),a("v-uni-text",{staticClass:"grace-black",staticStyle:{flex:"1","text-align":"center","font-size":"18px"}},[t._v(t._s(t.lang.title))]),a("v-uni-text",{staticClass:"grace-black6 look-app-icon look-app-icon-save",staticStyle:{padding:"0 24upx",width:"200upx","text-align":"right","align-self":"flex-end"}})],1),a("v-uni-view",{staticClass:"grace-body",attrs:{slot:"gBody"},slot:"gBody"},[a("v-uni-view",{staticClass:"grace-list"},t._l(t.items,function(e,n){return a("v-uni-view",{key:n,staticClass:"items"},[a("v-uni-view",{staticClass:"checkBtns"},[a("graceCheckBtn",{attrs:{checkedColor:"#37434b",checked:e.checked,parameter:[n],size:46},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.checkedChange.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"body"},[a("v-uni-view",{staticClass:"title"},[t._v(t._s(e.text))])],1)],1)}),1)],1)],1)},c=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return c})},1511:function(t,e,a){"use strict";a.r(e);var n=a("0755"),c=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);e["default"]=c.a},"1a1c":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".checkBtns[data-v-3824abd9]{width:%?50?%}",""])},"1f90":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-text",{class:["grace-check-btn",t.status?"grace-check-checked":""],style:{fontSize:t.size+"rpx",lineHeight:t.size+"rpx",color:t.status?t.checkedColor:t.color},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeStatus.apply(void 0,arguments)}}})},c=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return c})},"3ad8":function(t,e,a){"use strict";var n=a("8e18"),c=a.n(n);c.a},"3d73":function(t,e,a){var n=a("1a1c");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var c=a("4f06").default;c("6897b6be",n,!0,{sourceMap:!1,shadowMode:!1})},"469f":function(t,e,a){a("6c1c"),a("1654"),t.exports=a("7d7b")},4747:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,'@font-face{font-family:gFont;src:url(https://at.alicdn.com/t/font_1350962_3csfyqy98za.ttf) format("truetype")}.grace-check-btn[data-v-273d5ece]{font-family:gFont;color:#999}.grace-check-btn[data-v-273d5ece]:after{content:"\\E762"}.grace-check-checked[data-v-273d5ece]:after{content:"\\E7F8"}',""])},"5d73":function(t,e,a){t.exports=a("469f")},"7bf6":function(t,e,a){"use strict";a.r(e);var n=a("d7a7"),c=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);e["default"]=c.a},"7d7b":function(t,e,a){var n=a("e4ae"),c=a("7cd6");t.exports=a("584a").getIterator=function(t){var e=c(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return n(e.call(t))}},8036:function(t,e,a){"use strict";a.r(e);var n=a("144a"),c=a("7bf6");for(var i in c)"default"!==i&&function(t){a.d(e,t,function(){return c[t]})}(i);a("df5d");var r=a("2877"),s=Object(r["a"])(c["default"],n["a"],n["b"],!1,null,"3824abd9",null);e["default"]=s.exports},"8e18":function(t,e,a){var n=a("4747");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var c=a("4f06").default;c("0ac8b794",n,!0,{sourceMap:!1,shadowMode:!1})},d7a7:function(t,e,a){"use strict";var n=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=n(a("5d73")),i=n(a("e650")),r={created:function(){var t=this._i18n.locale,e=!0,a=!1,n=void 0;try{for(var i,r=(0,c.default)(this.items);!(e=(i=r.next()).done);e=!0){var s=i.value;s.lang===t&&(s.checked=!0)}}catch(o){a=!0,n=o}finally{try{e||null==r.return||r.return()}finally{if(a)throw n}}},computed:{lang:function(){return this.$t("settingLanguage")}},data:function(){return{items:[{checked:!1,lang:"en",text:"English"},{checked:!1,lang:"zh",text:"简体中文"}]}},methods:{checkedChange:function(t){var e=!0,a=!1,n=void 0;try{for(var i,r=(0,c.default)(this.items);!(e=(i=r.next()).done);e=!0){var s=i.value;s.checked=!1}}catch(o){a=!0,n=o}finally{try{e||null==r.return||r.return()}finally{if(a)throw n}}this.items[t[1]].checked=t[0],this._i18n.locale=this.items[t[1]].lang,console.log(this._i18n.locale)},goBack:function(){uni.navigateBack()}},components:{graceCheckBtn:i.default}};e.default=r},df5d:function(t,e,a){"use strict";var n=a("3d73"),c=a.n(n);c.a},e650:function(t,e,a){"use strict";a.r(e);var n=a("1f90"),c=a("1511");for(var i in c)"default"!==i&&function(t){a.d(e,t,function(){return c[t]})}(i);a("3ad8");var r=a("2877"),s=Object(r["a"])(c["default"],n["a"],n["b"],!1,null,"273d5ece",null);e["default"]=s.exports}}]);