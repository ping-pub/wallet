(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b35f45f"],{"7df7":function(t,e,i){},c40f:function(t,e,i){"use strict";var a=i("7df7"),s=i.n(a);s.a},e8c1:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=this,i=e.$createElement,a=e._self._c||i;return a("div",{staticClass:"page-header-index-wide"},[a("a-card",{style:{height:"100%"},attrs:{bordered:!1,bodyStyle:{padding:"16px 0",height:"100%"}}},[a("div",{staticClass:"account-settings-info-main",class:e.device},[a("div",{staticClass:"account-settings-info-left"},[a("div",{staticStyle:{margin:"0 16px 16px 16px"}},[a("a-button",{staticStyle:{width:"100%"},attrs:{icon:"plus",type:"primary"}},[e._v("创建")])],1),a("div",{staticClass:"address-name-item address-name-item-active"},[a("span",{staticStyle:{flex:"1"}},[e._v("我的")]),a("a-icon",{attrs:{type:"lock"}})],1),a("div",{staticClass:"address-name-item"},[e._v("张三丰")])]),a("div",{staticClass:"account-settings-info-right"},[a("div",{staticClass:"account-settings-info-title"},[a("span",{staticStyle:{flex:"1"}},[e._v("我的")])]),a("div",{staticStyle:{display:"flex","align-items":"center","margin-bottom":"16px"}},[a("div",{staticStyle:{flex:"1","font-size":"14px",color:"rgba(0, 0, 0, 0.65)","font-weight":"bold"}},[e._v("基本信息")]),e.editInfo?a("a-button",{attrs:{type:"link",icon:"save",size:"small"}},[e._v("保存")]):a("div",[a("a-button",{attrs:{type:"link",icon:"edit",size:"small"},on:{click:function(){t.editInfo=!0}}},[e._v("编辑")]),a("a-button",{attrs:{type:"link",icon:"delete",size:"small"}},[e._v("删除")])],1)],1),a("description-list",{attrs:{col:2}},[a("description-list-item",{attrs:{term:"姓名"}},[e.editInfo?a("a-input",{staticStyle:{width:"80%"}}):a("div",[e._v("林东东")])],1),a("description-list-item",{attrs:{term:"联系方式"}},[e.editInfo?a("a-input",{staticStyle:{width:"80%"}}):a("div",[e._v("12345")])],1),a("description-list-item",{attrs:{term:"备注"}},[e.editInfo?a("a-input",{staticStyle:{width:"80%"}}):a("div",[e._v("asdklkllkkkk")])],1)],1),a("div",{staticStyle:{display:"flex","align-items":"center","margin-bottom":"16px","margin-top":"16px"}},[a("div",{staticStyle:{flex:"1","font-size":"14px",color:"rgba(0, 0, 0, 0.65)","font-weight":"bold"}},[e._v("钱包地址")]),a("a-input",{staticStyle:{"max-width":"500px","margin-right":"8px"},attrs:{placeholder:"输入地址，添加到对应联系人"}}),a("a-button",{attrs:{icon:"plus"}},[e._v("添加")])],1),a("a-list",{attrs:{itemLayout:"horizontal",dataSource:e.data},scopedSlots:e._u([{key:"renderItem",fn:function(t,i){var s=this;return a("a-list-item",{},[a("div",{attrs:{slot:"actions"},slot:"actions"},[a("a-select",{staticStyle:{width:"120px"},attrs:{defaultValue:"lucy"}},[a("a-select-option",{attrs:{value:"jack"}},[e._v("Cosmos")]),a("a-select-option",{attrs:{value:"lucy"}},[e._v("Kava")]),a("a-select-option",{attrs:{value:"disabled"}},[e._v("Iris")]),a("a-select-option",{attrs:{value:"Yiminghe"}},[e._v("Cell")])],1)],1),a("a-button",{attrs:{slot:"actions",icon:"delete",type:"link"},slot:"actions"}),a("a-list-item-meta",[a("a",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.title))]),a("a-avatar",{attrs:{slot:"avatar",src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"},slot:"avatar"}),a("div",{attrs:{slot:"description"},slot:"description"},[a("a-tag",[e._v("自己的")]),a("a-tag",[e._v("金库")]),a("a-tag",[e._v("有钱")]),e.inputVisible?a("a-input",{ref:"inputTag",style:{width:"78px"},attrs:{type:"text",size:"small"},on:{blur:function(){s.inputVisible=!1},keyup:function(t){var i=this;return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:function(){i.inputVisible=!1}()}}}):a("a-tag",{staticStyle:{background:"#fff",borderStyle:"dashed"},on:{click:function(){s.inputVisible=!0}}},[a("a-icon",{staticStyle:{"margin-right":"5px"},attrs:{type:"plus"}}),e._v("创建 ")],1)],1)],1)],1)}}])})],1)])])],1)},s=[],n=(i("99af"),i("680a")),o=i("ac0d"),l=i("2af9"),c=l["b"].Item,r={components:{DescriptionList:l["b"],DescriptionListItem:c,RouteView:n["c"],PageView:n["b"]},mixins:[o["d"]],data:function(){return{editInfo:!1,data:[{title:"cosmos1sjllsnramtg3ewxqwwrwjxfgc4n4ef9u0tvx7u"},{title:"cosmos1sjllsnramtg3ewxqwwrwjxfgc4n4ef9u0tvx7u"},{title:"cosmos1sjllsnramtg3ewxqwwrwjxfgc4n4ef9u0tvx7u"},{title:"cosmos1sjllsnramtg3ewxqwwrwjxfgc4n4ef9u0tvx7u"}],inputVisible:!1,mode:"inline",openKeys:[],selectedKeys:["my"],preview:{},option:{img:"/avatar2.jpg",info:!0,size:1,outputType:"jpeg",canScale:!1,autoCrop:!0,autoCropWidth:180,autoCropHeight:180,fixedBox:!0,fixed:!0,fixedNumber:[1,1]},pageTitle:""}},created:function(){this.updateMenu()},methods:{onOpenChange:function(t){this.openKeys=t},updateMenu:function(){var t=this.$route.matched.concat();this.selectedKeys=[t.pop().path]}},watch:{$route:function(t){this.updateMenu()}}},d=r,p=(i("c40f"),i("2877")),u=Object(p["a"])(d,a,s,!1,null,"77b8fdb7",null);e["default"]=u.exports}}]);