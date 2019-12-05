<template>
  <div>
    <div class="flex-center mb-16">
      <p class="flex-1" style="font-size: 16px;">验证人 <span style="font-size: 14px;" class="mr-8">· Cosmoshub-2 </span><el-tag size="mini">0.31.1</el-tag></p>
      <el-input style="width: 200px;" class="mr-8"></el-input>
      <el-button icon="el-icon-search">搜索</el-button>
    </div>
    <div
      v-for="n in 10"
      :key="n"
      class="flex-center"
      style="padding: 8px 16px;background: #fff;margin-bottom: 8px;"
    >
      <div class="mr-16" style="color: #999;">{{ n }}</div>
      <div class="flex-1 mr-16">
        <p>title</p>
        <p style="font-size: 12px;color: #999;">description</p>
      </div>
      <div class="mr-16">
        <p>Voting Power</p>
        <p class="tr">884654</p>
      </div>
      <div class="mr-16">
        <p>Rewards</p>
        <p class="tr">9.8%</p>
      </div>
      <div>
        <el-button type="text" class="mr-8" @click="go('/income')">估算</el-button>
        <el-button type="primary">委托</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    go(path) {
      this.$router.push(path);
    }
  }
};
</script>
