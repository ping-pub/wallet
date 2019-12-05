<template>
  <div>
    <div class="mb-16">
      <span style="font-size: 16px;">Cosmoshub-2</span>
      <el-tag>0.31.1</el-tag>
    </div>

    <el-row :gutter="16" class="mb-16">
      <el-col :span="6" :xs="24">
        <el-card shadow="never">tokens</el-card>
      </el-col>
      <el-col :span="6" :xs="24">
        <el-card shadow="never">tokens</el-card>
      </el-col>
      <el-col :span="6" :xs="24">
        <el-card shadow="never">tokens</el-card>
      </el-col>
      <el-col :span="6" :xs="24">
        <el-card shadow="never">tokens</el-card>
      </el-col>
    </el-row>

    <div>
      <span style="font-size: 16px;">钱包</span>

      <div>
        地址、备注、所属人、可用额度、总额度、 市价、一个地址可能有多个币种
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
