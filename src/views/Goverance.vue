<template>
  <div>
    <div class="flex-center mb-16">
      <p class="flex-1" style="font-size: 16px;">
        治理
        <span style="font-size: 14px;" class="mr-8">· Cosmoshub-2</span>
        <el-tag size="mini">0.31.1</el-tag>
      </p>
      <el-input style="width: 200px;" class="mr-8"></el-input>
      <el-button icon="el-icon-search">搜索</el-button>
    </div>

    <el-card shadow="never" class="mb-8" v-for="n in 10" :key="n">
      <p class="mb-8" style="color: rgba(0,0,0,.85);
    font-size: 16px;
    line-height: 24px;">Adjustment of blocks_per_year to come aligned with actual block time</p>
      <div class="mb-8">
        <el-tag size="mini" class="mr-8">ID:1</el-tag>
        <el-tag size="mini" type="success">Passed</el-tag>
      </div>
      <p class="mb-8" style="color: rgba(0,0,0,.65);">This governance proposal is for adjustment of blocks_per_year parameter to normalize the inflation rate and reward rate. ipfs link: https://ipfs.io/ipfs/QmXqEBr56xeUzFpgjsmDKMSit3iqnKaDEL4tabxPXoz9x2019-03-20T06:41:27.040075748Z</p>
      <div class="mb-8">
        <span>1987-05-03 17:50:03</span>
      </div>
      <div>
        <el-button size="large" type="text">投票</el-button>
      </div>
    </el-card>

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
