<template>
  <div>
    <van-panel
      title="标题111"
      desc="描述信息"
      status="状态"
      v-for="n in 10"
      :key="n"
      style="margin-bottom: 5px;"
      @click="goItem"
    >
      <div>
        <van-grid slot="label" :border="false">
        <van-grid-item
          v-for="(item, index) of chains"
          :key="index"
          :text="item.text"
          style="background: #333;"
        >
          <div slot="icon">
            {{ item.rate }}
          </div>
        </van-grid-item>
      </van-grid>
      </div>
      <van-row  type="flex" align="center" slot="footer">
        <span style="font-size: 12px;color: #999;">剩余时间：</span>
        <van-count-down style="font-size: 12px;color: #999;" :time="time" format="DD 天 HH 时 mm 分 ss 秒" />
      </van-row>
    </van-panel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: 30 * 60 * 60 * 1000,
      chains: [
        {
          text: 'Yes',
          rate: '93%'
        },
        {
          text: 'Yes',
          rate: '93%'
        },
        {
          text: 'Yes',
          rate: '93%'
        },
        {
          text: 'Yes',
          rate: '93%'
        },
      ]
    }
  },
  methods: {
    goItem() {
      this.$router.push("/governance-item");
    }
  }
};
</script>
