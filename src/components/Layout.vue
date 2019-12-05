<template>
<el-container>
  <el-header style="padding: 0;height: 48px;z-index:1;">
    <LayoutHeader/>
  </el-header>
  <el-main style="padding: 16px 32px;">
    <router-view style="max-width: 1200px;margin: 0 auto;"/>
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