<template>
  <div>
    <div v-if="!item.title">
      <div class="skeleton-item">
        <van-skeleton :row="4" />
      </div>
    </div>
    <van-panel
      v-if="item.title"
      :title="item.title"
      :desc="item.description"
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
  data() {
    return {
      item: {},
      time: 30 * 60 * 60 * 1000
    };
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