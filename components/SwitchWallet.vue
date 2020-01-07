<template>
	<view class="cu-modal" :class="showDialog?'show':''" @tap="close" @touchmove.stop.prevent="">
		<view class="cu-dialog" @tap.stop="" style="max-height: 80%;">
			<view class="cu-bar bg-white ">
				<view class="action">
					<text class="cu-tag bg-olive round shadow">{{ currentWallet.name }}</text>
				</view>
				<view class="content">{{ lang.title }}</view>
				<view class="action" @tap="close">
					<text class="cuIcon-close text-gray"></text>
				</view>
			</view>
			<scroll-view scroll-x class="bg-white nav" scroll-with-animation>
				<view @tap="changeTap(item)" v-for="(item, key) of chains" :key="key" v-if="Object.keys(item.wallets).length > 0"
				 class="cu-item" :class="{'text-black cur': tabChain === item.name }">{{ item.name }}</view>
			</scroll-view>
			<scroll-view scroll-y="true" style="height: 600rpx;">
				<view class="cu-list menu text-left">
					<view class="cu-item" @tap="changeWallet(chains[tabChain], el)" v-for="(el,index) in chains[tabChain].wallets"
					 :key="index">
						<label class="flex justify-between align-center flex-sub" style="padding: 20rpx 0;">
							<view class="flex-sub">
								<view class="text-lg">
									{{ el.name}}
								</view>
								<view class="text-sm text-gray">
									{{ el.address }}
								</view>
							</view>
							<view v-if="el.address === currentWallet.address" class="cuIcon-check" style="font-size: 18px;"></view>
						</label>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import BaseMixin from './BaseMixin.js'

	export default {
		mixins: [BaseMixin],
		computed: {
			lang() {
				return this.$t('componentsSwitchWallet');
			},
		},
		props: {
			showDialog: {
				default: false
			}
		},
		data() {
			return {
				tabChain: 'Cosmos',
				current: 1
			};
		},
		watch: {
			showDialog(val, old) {
				if (val) {
					this.tabChain = this.currentChain.name
				}
			}
		},
		methods: {
			changeTap(chain) {
				this.tabChain = chain.name
			},
			close() {
				this.$emit('close')
			},
			confirm1() {
				this.close();
			},
			changeItem(e) {
				console.log(e)
				this.current = e
			},
			changeWallet(chain, wallet) {
				this.$store.commit('walletChange', {
					chain,
					wallet
				})
				this.close()
			}
		}
	};
</script>

<style></style>
