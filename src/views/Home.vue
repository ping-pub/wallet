<template>
  <div>
    <div class="mb-16">
      <span style="font-size: 16px;" class="mr-8">Cosmoshub-2</span>
      <el-tag size="mini">0.31.1</el-tag>
    </div>

    <el-row :gutter="16" class="mb-16">
      <el-col :span="6" :xs="24">
        <el-card shadow="never">
          <div class="flex-center">
            <div class="flex-1">
              <p class="home-subtitle">Bonded Tokens</p>
              <p class="home-title">126,560</p>
            </div>
            <i style="font-size: 36px;color: #66befb;" class="iconfont icon-bonded"></i>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6" :xs="24">
        <el-card shadow="never">
          <div class="flex-center">
            <div class="flex-1">
              <p class="home-subtitle">Total Tokens</p>
              <p class="home-title">12226,560</p>
            </div>
            <i style="font-size: 42px;color: #4cd595;" class="iconfont icon-total"></i>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6" :xs="24">
        <el-card shadow="never">
          <div class="flex-center">
            <div class="flex-1">
              <p class="home-subtitle">Bonded Rate</p>
              <p class="home-title">12%</p>
            </div>
            <i style="font-size: 40px;color: #9c5fdf;" class="iconfont icon-rate"></i>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6" :xs="24">
        <el-card shadow="never">
          <div class="flex-center">
            <div class="flex-1">
              <p class="home-subtitle">Rewards</p>
              <p class="home-title">12%</p>
            </div>
            <i style="font-size: 40px;color: #ff567b;" class="iconfont icon-rewards"></i>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <div>
      <span style="font-size: 16px;">钱包</span>

      <div>地址、备注、所属人、可用额度、总额度、 市价、一个地址可能有多个币种</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.home-title {
  word-break: break-all;
  white-space: nowrap;
  margin-top: 4px;
  margin-bottom: 0;
  font-size: 24px;
  line-height: 32px;
}
.home-subtitle {
  font-size: 14px;
  color: #999;
}
</style>