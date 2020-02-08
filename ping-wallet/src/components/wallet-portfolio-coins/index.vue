<template>
  <van-cell-group :title="$t('message.coins')">
    <div style="padding: 10px 0;" v-if="coins.length === 0">
      <van-skeleton :row="2" avatar />
    </div>
    <van-cell
      right-arrow
      center
      :title="item.unit"
      :label="item.amountNum || '--'"
      v-for="(item, index) in coins"
      :key="index"
    >
      <div slot="icon">
        <van-image :src="logo" width="40" height="40" style="margin-right: 10px;" />
      </div>
      <div>
        <div style="font-size: 16px;color: #333;">{{ item.amountPrice || '--' }}</div>
        <div style="font-size: 12px;">{{ item.price }}</div>
      </div>
    </van-cell>
  </van-cell-group>
</template>

<script>
export default {
  props: {
    logo: {
      default: "/static/chains/cosmoshub.svg"
    },
    coins: {
      default() {
        return [];
      }
    }
  },
  i18n: {
    // `i18n` 选项，为组件设置语言环境信息
    messages: {
      en: {
        message: {
          coins: "Coins",
        }
      },
      cn: {
        message: {
          coins: "币种",
        }
      }
    }
  }
};
</script>