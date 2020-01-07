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
			this.setTabbar(this.lang)
		},
		onShow: function() {},
		onHide: function() {},
		computed: {
			lang() {
				return this.$t('tabbar');
			}
		},
		watch: {
			lang(val, old) {
				if (val) {
					this.setTabbar(val)
				}
			}
		},
		methods: {
			setTabbar(tabbarLang) {
				for (let i = 0; i < 4; i += 1) {
					uni.setTabBarItem({
						index: i,
						text: tabbarLang[i]
					})
				}
			}
		}
	};
</script>



<style>
	@import './colorui/main.css';
	@import './colorui/icon.css';

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

	.m-space {
		margin: 0 30rpx;
	}

	.cu-bar {
		min-height: 88rpx;
		border-bottom: 2rpx solid #eeeeee;
	}

	.cu-form-group.form-content {
		min-height: 60rpx;
		padding-bottom: 20rpx;
	}

	.cu-form-group.form-title {
		min-height: 40rpx;
	}

	.cu-form-group.form-title+.cu-form-group {
		border-top: none;
	}

	.big-tap {
		padding: 20rpx 0 20rpx 40rpx;
	}

	.ping-form-title {
		padding: 20rpx 30rpx 0 30rpx;
	}

	html,
	body {
		font-family: -apple-system, Helvetica, sans-serif;
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

	.uni-tabbar .uni-tabbar__icon {
		/* #ifdef H5 */
		width: 36rpx;
		height: 36rpx;
		/* #endif */
		/* #ifndef H5 */
		width: 20rpx;
		height: 20rpx;
		/* #endif */
	}

	.uni-radio-input.uni-radio-input-checked {
		background-color: #333333 !important;
		border-color: #333333 !important;
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
	.ping-card-title {
		background: #333;
		margin-left: 0;
		padding: 6rpx 0;
		padding-left: 30rpx;
		width: 240rpx;
		border-radius: 0 16px 16px 0;
		color: #fff;
	}

	.uni-body {
		background: #f7f7f7;
	}

	/* #37434b */
	.bg-primary {
		background: #37434b;
	}

	.mb-12 {
		margin-bottom: 20rpx;
	}

	.mt-12 {
		margin-top: 20rpx;
	}

	.mb-6 {
		margin-bottom: 10rpx;
	}

	.mr-6 {
		margin-right: 10rpx;
	}

	.mr-12 {
		margin-right: 20rpx;
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
		height: 30rpx;
		background: #f7f7f7;
	}

	.grace-border-b {
		border-bottom: 2rpx solid #eeeeee;
	}

	/*  #353a8a,#212452 */
	/* #273043, #32405F */
	/* #212452, #37434b */
	.look-gtbg-blue {
		background: linear-gradient(to right, #53aeff, #3f67d9) !important;
		color: #ffffff !important;
	}

	.look-gtbg-dark {
		background: linear-gradient(to right, #212452, #37434b) !important;
		color: #ffffff !important;
	}

	.look-gtbg-light {
		background: linear-gradient(to right, #e5ebed, #96a8b3) !important;
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
		src: url('http://at.alicdn.com/t/font_1556480_tb72p9xxwi.eot');
		src: url('http://at.alicdn.com/t/font_1556480_tb72p9xxwi.eot?#iefix') format('embedded-opentype'), url('http://at.alicdn.com/t/font_1556480_tb72p9xxwi.woff2') format('woff2'),
			url('http://at.alicdn.com/t/font_1556480_tb72p9xxwi.woff') format('woff'), url('http://at.alicdn.com/t/font_1556480_tb72p9xxwi.ttf') format('truetype'),
			url('http://at.alicdn.com/t/font_1556480_tb72p9xxwi.svg#gFont') format('svg');
	}

	.grace-icons {
		font-size: 40rpx;
	}

	.look-app-icon {
		font-family: 'gFont' !important;
		font-size: 40rpx;
		font-style: normal;
	}

	/* &#xe63f; */
	.look-app-icon-money:before {
		content: '\e63f';
	}

	/* &#xe86c; */
	.look-app-icon-browser:before {
		content: '\e86c';
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
