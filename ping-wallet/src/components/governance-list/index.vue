<!--
 * @Author: your name
 * @Date: 2020-02-08 22:32:46
 * @LastEditTime : 2020-02-08 22:54:44
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ping-wallet/ping-wallet/src/components/governance-list/index.vue
 -->
<template>
  <div>
    <div v-if="list && list.length === 0">
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
        <span style="font-size: 12px;color: #999;">{{ $t('message.Deadline') }} {{ toDate(item.voting_end_time) }}</span>
      </van-row>
    </van-panel>
  </div>
</template>

<script>
import baseMixin from "../../store/baseMixin";
import mixinData from "./mixinData";
import mixinLang from "./mixinLang";

export default {
  mixins: [baseMixin, mixinData, mixinLang],
  data() {
    return {
      list: []
    };
  },
  methods: {
    goItem(item) {
      this.$router.push("/governance-item?id=" + item.id);
    },
    toDate(time) {
      return new Date(time).toISOString().replace(/T/g, " ").replace(/\.[\d]{3}Z/, "")
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