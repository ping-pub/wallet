<template>
	<gracePage headerBG="#fff">
		<PageTitle slot="gHeader" :title="lang.title" :loading="loading"></PageTitle>
		<view slot="gBody">
			<view class="cu-bar bg-white">
				<view class="action">
					<text class="text-lg text-bold">{{ proposal.title }}</text>
				</view>
			</view>
			<view class="bg-white" style="padding: 20rpx;">
				<view class=" grace-card-text text-black" >{{ proposal.description }}</view>
			</view>
			<view class="page-space"></view>
			<view class="bg-white" style="padding: 20rpx;">
				<view class="grace-flex grace-flex-vcenter tc">
					<view class="flex-1">
						<view class="f-16 grace-black">{{ proposal.yes }}</view>
						<view class="grace-black6">Yes</view>
					</view>
					<view class="flex-1">
						<view class="f-16 grace-black">{{ proposal.no }}</view>
						<view class="grace-black6">No</view>
					</view>
					<view class="flex-1">
						<view class="f-16 grace-black">{{ proposal.abstain }}</view>
						<view class="grace-black6">Abstain</view>
					</view>
					<view class="flex-1">
						<view class="f-16 grace-black">{{ proposal.no_with_veto }}</view>
						<view class="grace-black6">No Veto</view>
					</view>
				</view>
			</view>
		</view>
	</gracePage>
</template>
<script>
import BaseMixin from '../../components/BaseMixin.js';

export default {
	mixins: [BaseMixin],
	computed: {
		lang() {
			return this.$t('pagesGoveranceDetail');
		}
	},
	onLoad(options) {
		const { id } = options;
		this.initData(id);
	},
	data() {
		return {
			loading: false,
			proposal: {}
		};
	},
	methods: {
		async initData(id) {
			this.loading = true;
			const result = await this.$api()
				.proposalItem(id)
				.catch(e => {
					this.loading = false;
				});
			this.loading = false;
			this.proposal = result;
		}
	}
};
</script>
