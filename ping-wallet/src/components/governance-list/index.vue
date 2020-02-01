<template>
  <div>
    <div v-if="list.length === 0">
      <div v-for="n in 5" :key="n" class="skeleton-item">
        <van-skeleton :row="4" />
      </div>
    </div>
    <van-panel
      :title="item.title"
      :desc="item.description"
      v-for="(item, index) in list"
      :key="index"
      style="margin-bottom: 10px;"
      @click="goItem(item)"
    >
      <div>
        <van-grid slot="label" :border="false">
          <van-grid-item
            v-for="(el, key) of item.rate"
            :key="key"
            :text="key"
            style="background: #333;"
          >
            <div slot="icon">{{ el }}</div>
          </van-grid-item>
        </van-grid>
      </div>
      <van-row type="flex" align="center" slot="footer">
        <van-tag
          mark
          :type="item.proposal_status === 'Rejected' ? 'danger' : item.proposal_status === 'Passed' ? 'success' : ''"
        >{{item.proposal_status}}</van-tag>
        <span class="flex-1"></span>
        <span style="font-size: 12px;color: #999;">剩余时间：</span>
        <van-count-down
          style="font-size: 12px;color: #999;"
          :time="time"
          format="DD 天 HH 时 mm 分 ss 秒"
        />
      </van-row>
    </van-panel>
  </div>
</template>

<script>
import mixinData from "./mixinData";

export default {
  mixins: [mixinData],
  created() {
    this.init();
  },
  data() {
    return {
      list: [],
      time: 30 * 60 * 60 * 1000
    };
  },
  methods: {
    goItem(item) {
      this.$router.push("/governance-item?id=" + item.id);
    }
  }
};
</script>

<style scoped>
.skeleton-item {
  padding: 20px 0;
  background: #fff;
  margin-bottom: 10px;
}
</style>