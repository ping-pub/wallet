<template>
	<gracePage  headerBG="#fff">
		<PageTitle slot="gHeader" title="验证人">
		</PageTitle>
		<view slot="gBody">
			<view class="cu-list menu bg-white">
				<view class="cu-item" v-for="(item, key) of validator" :key="key">
					<view class="content">
						<text class="text-black">{{ key }}</text>
					</view>
					<view class="action">
						<text class="text-black">{{ item }}</text>
					</view>
				</view>
			</view>
		</view>
	</gracePage>
</template>

<script>
import BaseMixin from '../../components/BaseMixin.js'

export default {
	mixins: [BaseMixin],
	data() {
		return {
			validator: {}
		}
	},
	onLoad(options) {
		const { validator } = options
		this.initData(validator)
	},
	methods: {
		async initData(validtorAddress) {
			this.loading = true
			const res = await this.$api().validatorItem(validtorAddress).catch(() => { this.loading = false })
			this.loading = false
			this.validator = res
		}
	}
};
</script>
