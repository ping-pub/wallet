<script>
export default {
	onLaunch: function() {
		// #ifdef APP-PLUS
		plus.screen.lockOrientation('portrait-primary'); //锁定屏幕
		const dom = weex.requireModule('dom');
		dom.addRule('fontFace', {
			'fontFamily': "graceIconfont",
			'src': "url('https://at.alicdn.com/t/font_823462_m4rz0iqup9.ttf')"
		});
		// #endif
	},
	onShow: function() {},
	onHide: function() {}
}
</script>
<style>
/* #ifndef APP-PLUS-NVUE */
@import "./graceUI/graceUI.css";
@import "./graceUI/graceIcons.css";
/* #endif */
/* #ifdef APP-PLUS-NVUE */
@import "./graceUI/graceWeex.css";
.grace-icons{font-family:graceIconfont;}
/* #endif */


/*
如下修改和补充能够保证不修改 GraceUI 框架的核心源码，当 GraceUI 升级时可以直接使用框架核心文件包覆盖旧文件
请根据业务原型或者设计稿规划出自己的 公共样式, 如:
*/
.color-black{color:#333333;}
.color-red{color:#FF0036;}
/*
修改 graceUI 或者其他 UI 框架，如, 修改 grace-title:
*/
.grace-title{color:#A5A7B2;}
/* 可以利用条件编译编写不同平台的样式 如 : 修改导航组件 */
/* #ifndef APP-PLUS-NVUE */
navigator{opacity:1; background:none;}
.navigator-hover{background-color:none; opacity:0.8;}
/* #endif */
</style>