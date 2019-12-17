<script>
	export default {
		onLaunch: function() {
			// #ifdef APP-PLUS
			plus.screen.lockOrientation('portrait-primary'); //锁定屏幕
			const dom = weex.requireModule('dom');
			dom.addRule('fontFace', {
				fontFamily: 'graceIconfont',
				src: "url('https://at.alicdn.com/t/font_823462_m4rz0iqup9.ttf')"
			});
			// #endif
			console.log(this._i18n.locale);
		},
		onShow: function() {},
		onHide: function() {}
	};
</script>
<style>
	/* #ifndef APP-PLUS-NVUE */
	@import './graceUI/graceUI.css';
	@import './graceUI/graceIcons.css';
	/* #endif */
	/* #ifdef APP-PLUS-NVUE */
	@import './graceUI/graceWeex.css';

	.grace-icons {
		font-family: graceIconfont;
	}

	/* #endif */

	html,
	body {
		font-family: -apple-system, sans-serif;
	}

	/*
如下修改和补充能够保证不修改 GraceUI 框架的核心源码，当 GraceUI 升级时可以直接使用框架核心文件包覆盖旧文件
请根据业务原型或者设计稿规划出自己的 公共样式, 如:
*/
	.color-black {
		color: #333333;
	}

	.color-red {
		color: #ff0036;
	}

	/*
修改 graceUI 或者其他 UI 框架，如, 修改 grace-title:
*/
	.grace-title {
		color: #a5a7b2;
	}

	/* 可以利用条件编译编写不同平台的样式 如 : 修改导航组件 */
	/* #ifndef APP-PLUS-NVUE */
	navigator {
		opacity: 1;
		background: none;
	}

	.navigator-hover {
		background-color: none;
		opacity: 0.8;
	}

	/* #endif */

	.uni-body {
		/* background: #f4f5f7; */
	}

	/* #37434b */
	.bg-primary {
		background: #37434b;
	}

	.mb-12 {
		margin-bottom: 24rpx;
	}

	.mt-12 {
		margin-top: 24rpx;
	}

	.mb-6 {
		margin-bottom: 12rpx;
	}

	.mr-6 {
		margin-right: 12rpx;
	}

	.mr-12 {
		margin-right: 24rpx;
	}

	.fw {
		font-weight: bold;
	}

	.tr {
		text-align: right;
	}

	.tc {
		text-align: center;
	}

	.flex-1 {
		flex: 1;
	}

	.f-16 {
		font-size: 16px;
	}

	.f-18 {
		font-size: 18px;
	}

	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}

	.page-space {
		height: 20rpx;
		background: #F5F5F5;
	}

	/*  #353a8a,#212452 */
	/* #273043, #32405F */
	/* #212452, #37434b */
	.look-gtbg-dark {
		background: linear-gradient(to right, #212452, #37434b) !important;
		color: #ffffff !important;
	}

	.look-title {
		font-size: 22px;
		font-weight: bold;
	}

	.look-title-sm {
		font-size: 16px;
		font-weight: bold;
	}

	@font-face {
		font-family: 'gFont';
		/* project id 1556480 */
		src: url('http://at.alicdn.com/t/font_1556480_x1otxseynf.eot');
		src: url('http://at.alicdn.com/t/font_1556480_x1otxseynf.eot?#iefix') format('embedded-opentype'), url('http://at.alicdn.com/t/font_1556480_x1otxseynf.woff2') format('woff2'),
			url('http://at.alicdn.com/t/font_1556480_x1otxseynf.woff') format('woff'), url('http://at.alicdn.com/t/font_1556480_x1otxseynf.ttf') format('truetype'),
			url('http://at.alicdn.com/t/font_1556480_x1otxseynf.svg#gFont') format('svg');
	}

	.grace-icons {
		font-size: 40rpx;
	}

	.look-app-icon {
		font-family: 'gFont' !important;
		font-size: 40rpx;
		font-style: normal;
	}

	/* &#xe605; */
	.look-app-icon-transfer:before {
		content: '\e605';
	}

	/* &#xe8c2; */
	.look-app-icon-selected:before {
		content: '\e8c2';
	}

	/* &#xe69b; */
	.look-app-icon-switch:before {
		content: '\e69b';
	}

	/* &#xe602; */
	.look-app-icon-manage:before {
		content: '\e602';
	}

	.look-app-icon-qrcode:before {
		content: '\e6de';
	}

	/* &#xe61d; */
	.look-app-icon-update:before {
		content: '\e61d';
	}

	/* &#xe623; */
	.look-app-icon-ip:before {
		content: '\e623';
	}

	/* &#xe677;*/
	.look-app-icon-host:before {
		content: '\e667';
	}

	/* &#xe639; */
	.look-app-icon-language:before {
		content: '\e60a';
	}

	.look-app-icon-book:before {
		content: '\e639';
	}

	/* &#xe637; */
	.look-app-icon-wallet:before {
		content: '\e637';
	}

	/* &#xe624; */
	.look-app-icon-save:before {
		content: '\e624';
	}
</style>
