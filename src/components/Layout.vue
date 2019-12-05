<template>
<el-container>
  <el-header style="padding: 0;height: 48px;z-index:1;">
    <LayoutHeader/>
  </el-header>
  <el-main style="padding: 16px 32px;">
    <router-view class="layout-max"/>
  </el-main>
  <el-footer>
    <LayoutFooter/>
  </el-footer>
</el-container>
</template>

<script>
import LayoutHeader from './LayoutHeader'
import LayoutFooter from './LayoutFooter'

const components = {
  LayoutHeader,
  LayoutFooter
}

export default {
  components
}

</script>