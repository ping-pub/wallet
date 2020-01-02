<template>
	<gracePage  headerBG="#fff">
		<PageTitle slot="gHeader" title="验证人">
		</PageTitle>
		<view slot="gBody">
			
		</view>
	</gracePage>
</template>

<script>
import SwitchWalletMixin from '../../components/SwitchWalletMixin.js';

export default {
	mixins: [SwitchWalletMixin],
	data() {
		return {
			tab: 'Delegations'
		}
	},
	methods: {
		go(path) {
			uni.navigateTo({
				url: path
			});
		},
		goBack() {
			uni.navigateBack();
		}
	}
};
</script>
