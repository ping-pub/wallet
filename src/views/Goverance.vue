<template>
  <div>
    <div class="flex-center mb-16">
      <p class="flex-1" style="font-size: 16px;">治理 <span style="font-size: 14px;">· Cosmoshub-2 </span><el-tag>0.31.1</el-tag></p>
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
        <p>No</p>
        <p class="tr">9.8%</p>
      </div>
      <div class="mr-16">
        <p>No</p>
        <p class="tr">9.8%</p>
      </div>
      <div class="mr-16">
        <p>No</p>
        <p class="tr">9.8%</p>
      </div>
      <div class="mr-16">
        <p>No</p>
        <p class="tr">9.8%</p>
      </div>
      <div class="mr-16">
        <el-tag type="success">Passed</el-tag>
      </div>
      <div>
        <el-button type="primary">投票</el-button>
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
