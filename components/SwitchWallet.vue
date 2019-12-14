<template>
	<graceBottomDialog :show="show1" v-on:closeDialog="closeDialog1">
		<view slot="btns">
			<view class="grace-btdialog-btns">
				<view @tap="closeDialog1">取消</view>
				<view style="color:#00B26A;" @tap="confirm1">确定</view>
			</view>
		</view>
		<view slot="content">
			<view class="content1">普通文本提示 ^_^</view>
		</view>
	</graceBottomDialog>
</template>

<script>
</script>

<style>
</style>
