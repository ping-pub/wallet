(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-demo2-demo2"],{"39d9":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"grace-sbody"},[e.customHeader?a("v-uni-view",[a("v-uni-view",{staticClass:"grace-page-header",style:{"z-index":e.headerIndex,background:e.headerBG}},[a("v-uni-view",{staticClass:"grace-page-status-bar",style:{height:e.statusBarHeight+"px",background:e.statusBarBG}}),a("v-uni-view",{staticClass:"grace-page-header-nav",style:{height:e.headerHeight+"px"}},[a("v-uni-view",{staticClass:"grace-header-main"},[e._t("gHeader")],2),a("v-uni-view",{style:{width:e.BoundingWidth,height:"10px"}})],1)],1),a("v-uni-view",{style:{width:"100%",height:e.statusBarHeight+e.headerHeight+"px"}})],1):e._e(),a("v-uni-view",{staticClass:"grace-page-body"},[e._t("gBody")],2),e.isSwitchPage?e._e():a("v-uni-view",{style:{width:"100%",height:e.iphoneXButtomHeight+"px"}}),a("v-uni-view",{staticClass:"grace-page-footer",style:{"z-index":e.footerIndex,background:e.footerBg}},[e._t("gFooter"),e.isSwitchPage?e._e():a("v-uni-view",{style:{width:"100%",height:e.iphoneXButtomHeight+"px"}})],2),a("v-uni-view",{staticClass:"gui-page-rb-area",style:{right:e.rbRight+"rpx",bottom:e.rbBottom+"rpx",width:e.rbWidth+"rpx"}},[e._t("gRTArea")],2)],1)},n=[];a.d(t,"a",function(){return i}),a.d(t,"b",function(){return n})},4447:function(e,t,a){var i=a("6891");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("920c50fe",i,!0,{sourceMap:!1,shadowMode:!1})},"48ca":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("a481"),a("c5f6");var i={props:{customHeader:{type:Boolean,default:!0},headerHeight:{type:Number,default:44},headerIndex:{type:Number,default:999},headerBG:{type:String,default:"none"},statusBarBG:{type:String,default:"none"},footerIndex:{type:Number,default:999},footerBg:{type:String,default:""},isSwitchPage:{type:Boolean,default:!1},rbWidth:{type:Number,default:100},rbBottom:{type:Number,default:100},rbRight:{type:Number,default:20}},data:function(){return{statusBarHeight:0,iphoneXButtomHeight:0,BoundingWidth:"0px"}},created:function(){try{var e=uni.getSystemInfoSync();e.model=e.model.replace(" ",""),-1!=e.model.indexOf("iPhoneX")&&(this.iphoneXButtomHeight=uni.upx2px(50))}catch(t){return null}this.customHeader&&(this.statusBarHeight=e.statusBarHeight)}};t.default=i},"591e":function(e,t,a){"use strict";a.r(t);var i=a("6a6a"),n=a.n(i);for(var r in i)"default"!==r&&function(e){a.d(t,e,function(){return i[e]})}(r);t["default"]=n.a},"5cfc":function(e,t,a){"use strict";a.r(t);var i=a("48ca"),n=a.n(i);for(var r in i)"default"!==r&&function(e){a.d(t,e,function(){return i[e]})}(r);t["default"]=n.a},6891:function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,".grace-sbody[data-v-5ed21fdb]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.grace-page-header[data-v-5ed21fdb]{width:100%;position:fixed;left:0;top:0;z-index:99;background:#fff}.grace-page-status-bar[data-v-5ed21fdb]{width:100%;height:0}.grace-page-header-nav[data-v-5ed21fdb]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;height:44px;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.grace-header-main[data-v-5ed21fdb]{width:%?300?%;-webkit-box-flex:1;-webkit-flex:auto;-ms-flex:auto;flex:auto}.grace-page-body[data-v-5ed21fdb]{width:100%}.grace-page-footer[data-v-5ed21fdb]{width:100%;position:fixed;left:0;bottom:0;z-index:99}.gui-page-rb-area[data-v-5ed21fdb]{width:%?100?%;position:fixed;right:%?20?%;bottom:%?100?%;z-index:100}",""])},"6a6a":function(e,t,a){"use strict";var i=a("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("e74a")),r={data:function(){return{}},onLoad:function(){},methods:{goback:function(){uni.navigateBack({})},setfun:function(){uni.showToast({title:"您点击了设置",icon:"none"})}},components:{gracePage:n.default}};t.default=r},"71ba":function(e,t,a){"use strict";a.r(t);var i=a("fc93"),n=a("591e");for(var r in n)"default"!==r&&function(e){a.d(t,e,function(){return n[e]})}(r);var o=a("2877"),s=Object(o["a"])(n["default"],i["a"],i["b"],!1,null,"948de472",null);t["default"]=s.exports},e74a:function(e,t,a){"use strict";a.r(t);var i=a("39d9"),n=a("5cfc");for(var r in n)"default"!==r&&function(e){a.d(t,e,function(){return n[e]})}(r);a("e8f2");var o=a("2877"),s=Object(o["a"])(n["default"],i["a"],i["b"],!1,null,"5ed21fdb",null);t["default"]=s.exports},e8f2:function(e,t,a){"use strict";var i=a("4447"),n=a.n(i);n.a},fc93:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("gracePage",{attrs:{headerBG:"#55D6BA",statusBarBG:"#55D6BA"}},[a("v-uni-view",{staticClass:"grace-header-body",attrs:{slot:"gHeader"},slot:"gHeader"},[a("v-uni-text",{staticClass:"grace-header-icons grace-icons icon-arrow-left grace-white",on:{click:function(t){t.stopPropagation(),t=e.$handleEvent(t),e.goback(t)}}}),a("v-uni-view",{staticClass:"grace-header-content"},[a("v-uni-text",{staticClass:"grace-header-text grace-ellipsis grace-white"},[e._v("自定义头部导航，放什么内容您自己来~")])],1),a("v-uni-text",{staticClass:"grace-header-icons grace-icons icon-set grace-white",staticStyle:{"font-size":"22px"},on:{click:function(t){t.stopPropagation(),t=e.$handleEvent(t),e.setfun(t)}}})],1),a("v-uni-view",{staticClass:"demo_body",attrs:{slot:"gBody"},slot:"gBody"},[a("v-uni-view",{staticClass:"demo"},[a("v-uni-image",{staticClass:"index_logo",attrs:{src:"https://graceui.oss-cn-beijing.aliyuncs.com/demo2.1/logo2.png",mode:"widthFix"}})],1),a("v-uni-view",{staticClass:"demo"},[a("v-uni-text",{staticClass:"grace-text-small grace-black9"},[e._v("兼容uni-app及微信小程序的优秀前端框架\\n")]),a("v-uni-text",{staticClass:"grace-text-small grace-black9"},[e._v("本页演示 : \\n")]),a("v-uni-text",{staticClass:"grace-text-small grace-blue"},[e._v("开启自定义导航 + 处理沉浸式")])],1)],1)],1)},n=[];a.d(t,"a",function(){return i}),a.d(t,"b",function(){return n})}}]);