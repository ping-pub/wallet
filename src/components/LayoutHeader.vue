<template>
<div class="layoutheader-wrap">
  <div class="flex-center layout-max layoutheader-content">
    <h1 class="layoutheader-logo">Look Wallet</h1>
    <el-menu mode="horizontal" active-text-color="#6658dd" :router="true">
      <el-menu-item index="/">资产</el-menu-item>
      <el-menu-item index="/tx">交易</el-menu-item>
      <el-menu-item index="/stake">质押</el-menu-item>
      <el-menu-item index="/goverance">治理</el-menu-item>
      <el-menu-item index="/income">收益</el-menu-item>
      <el-menu-item index="/address">地址</el-menu-item>
      <el-menu-item index="/setting">设置</el-menu-item>
    </el-menu>

    <div style="flex: 1;"></div>
    <el-dropdown placement="bottom-end">
      <el-button type="primary" icon="el-icon-plus" circle size="mini"></el-button>

      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>转账</el-dropdown-item>
        <el-dropdown-item divided>赎回</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
<el-divider direction="vertical"></el-divider>

    <el-dropdown placement="bottom-end">
      <el-button type="text" class="el-dropdown-link">
        Cosmoshub-2 · 0.31.2
        <i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>Cosmoshub-2 · 0.31.2</el-dropdown-item>
        <el-dropdown-item divided>Cosmoshub-2 · 0.31.2</el-dropdown-item>
        <el-dropdown-item divided>Cosmoshub-2 · 0.31.2</el-dropdown-item>
        <el-dropdown-item divided>Cosmoshub-2 · 0.31.2</el-dropdown-item>
        <el-dropdown-item divided>Cosmoshub-2 · 0.31.2</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
<el-divider direction="vertical"></el-divider>
    <el-dropdown placement="bottom-end">
      <el-button type="text" class="el-dropdown-link">
        中文
        <i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>中文</el-dropdown-item>
        <el-dropdown-item divided>English</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
<el-divider direction="vertical"></el-divider>
    <a href="https://look.ping.pub" target="_blank" style="font-size: 12px;">
      浏览器
      <i class="el-icon-link"></i>
    </a>
  </div>
</div>
</template>

<style scoped>
.layoutheader-wrap {
  background: #fff;
  height: 48px;
  box-shadow: 0 1px 4px 0 rgba(0, 21, 41, 0.12);
  overflow: hidden;
}
.layoutheader-content {
  padding: 0 32px;
}
.layoutheader-logo {
  color: #6658dd;
  font-size: 18px;
  margin-right: 16px;
}
.el-dropdown-link {
  color: #666;
}
</style>