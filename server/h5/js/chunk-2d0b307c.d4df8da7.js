(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b307c"],{2745:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("base-topnav",{attrs:{title:e.titleStr}}),t("keep-alive",[t(e.component,{tag:"component"})],1)],1)},i=[],l=(t("3a20"),{computed:{titleStr:function(){return this.component?this.$t("message."+this.component):this.title}},i18n:{messages:{en:{message:{"wallet-list":"Wallet Manage","wallet-receive":"Receive","wallet-transfer":"Send","wallet-form":"Wallet Form","wallet-tx":"Transcations","governance-item":"Detail","setting-chains":"Chains Server","setting-chains-form":"添加主链服务器","setting-currency":"Currency","setting-lanaguage":"Lanaguage"}},cn:{message:{"wallet-list":"钱包管理","wallet-receive":"收款","wallet-transfer":"转账","wallet-form":"添加钱包","wallet-tx":"交易记录","governance-item":"详情","setting-chains":"主链服务器","setting-chains-form":"添加主链服务器","setting-currency":"货币单位","setting-lanaguage":"语言切换"}}}}}),r={mixins:[l],data:function(){return{title:"",component:""}},beforeRouteEnter:function(e,n,t){var a=e.params.component,i=a;t((function(e){e.component=a,e.title=i}))},beforeRouteUpdate:function(e,n,t){this.component=e.params.component,this.title=this.component,t()},components:{"wallet-list":function(){return t.e("page").then(t.bind(null,"d80f"))},"wallet-form":function(){return t.e("page").then(t.bind(null,"53e4"))},"wallet-item":function(){return t.e("page").then(t.bind(null,"f068"))},"wallet-receive":function(){return t.e("page").then(t.bind(null,"0f2a"))},"wallet-transfer":function(){return t.e("page").then(t.bind(null,"1549"))},"wallet-tx":function(){return t.e("page").then(t.bind(null,"fb8c"))},"governance-item":function(){return t.e("page").then(t.bind(null,"8a84"))},"setting-currency":function(){return t.e("page").then(t.bind(null,"ab08"))},"setting-chains":function(){return t.e("page").then(t.bind(null,"d300"))},"setting-chains-form":function(){return t.e("page").then(t.bind(null,"07ee"))},"setting-lanaguage":function(){return t.e("page").then(t.bind(null,"9a60"))}}},o=r,c=t("5511"),u=Object(c["a"])(o,a,i,!1,null,null,null);n["default"]=u.exports}}]);