<template>
  <van-cell-group title="币种">
    <div style="padding: 10px 0;" v-if="coins.length === 0">
      <van-skeleton :row="2" avatar />
    </div>
    <van-cell
      right-arrow
      center
      :title="item.denom"
      :label="item.price || '--'"
      v-for="(item, index) in coins"
      :key="index"
    >
      <div slot="icon">
        <van-image
          :src="item.logo || '/static/chains/cosmoshub.svg'"
          width="40"
          height="40"
          style="margin-right: 10px;"
        />
      </div>
      <div>
        <div>{{ item.value || '--' }}</div>
        <div>{{ item.amount }}</div>
      </div>
    </van-cell>
  </van-cell-group>
</template>

<script>
export default {
  props: {
    coins: {
      default() {
        return [
          // {
          //   logo: "",
          //   denom: "",
          //   price: "",
          //   value: "",
          //   amount: ""
          // }
        ];
      }
    }
  }
};
</script>