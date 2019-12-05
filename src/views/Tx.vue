<template>
  <div>
    <el-container>
      <el-aside width="200px" class="address-aside">
        <div>
          <div class="mb-16 mr-8">Cosmoshub-2 <el-tag size="mini">0.31.1</el-tag></div> 
          <div
            @click="() => { this.menu = 'Cosmos' }"
            class="flex-center address-user-item cp"
            :class="{ 'address-user-item-active': menu === 'Cosmos' }"
          >
            <p class="flex-1">钱包地址</p>
            <i class="el-icon-arrow-right"></i>
          </div>
          <div
            @click="() => { this.menu = 'Kava' }"
            class="flex-center address-user-item cp"
            :class="{ 'address-user-item-active': menu === 'Kava' }"
          >
            <p class="flex-1">Kava</p>
            <i class="el-icon-arrow-right"></i>
          </div>
          <div
            @click="() => { this.menu = 'Iris' }"
            class="flex-center address-user-item cp"
            :class="{ 'address-user-item-active': menu === 'Iris' }"
          >
            <p class="flex-1">Iris</p>
            <i class="el-icon-arrow-right"></i>
          </div>
          <div
            @click="() => { this.menu = 'Cell' }"
            class="flex-center address-user-item cp"
            :class="{ 'address-user-item-active': menu === 'Cell' }"
          >
            <p class="flex-1">Cell</p>
            <i class="el-icon-arrow-right"></i>
          </div>
        </div>
      </el-aside>
      <el-main class="ml-16" style="overflow:hidden;">
        <div>
          <div class="address-header mb-16">
            <p class="address-title mb-8">钱包地址</p>
            <div class="address-remark mb-8">李三  18018018018  备注: xxxxxxxxxxxxx</div>
            <div>
              <el-tag size="mini" v-for="n in 10" :key="n" class="mr-8 mb-8">备注</el-tag>
            </div>
          </div>

          <el-card shadow="never">
            <div>
              <div
                v-for="n in 10"
                :key="n"
                class="flex-center"
                style="padding: 8px 16px;background: #fff;margin-bottom: 8px;"
              >
                <div class="mr-16" style="color: #999;">{{ n + '54646' }}</div>
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
              </div>
            </div>
          </el-card>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: "Cosmos",
      sliderVal: 100
    };
  },
  methods: {
    go(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style scoped>
.address-header {
  align-items: flex-end;
}
.address-title {
  font-size: 16px;
}
.address-subtitle {
  font-size: 14px;
  color: #999;
}
.address-remark {
  font-size: 14px;
  color: #999;
}
.address-user-item {
  padding: 16px;
  border-left: 4px solid #f5f6f8;
}
.address-user-item:hover {
  background: #fff;
}
.address-user-item-active {
  background: #fff;
  border-left: 4px solid #6658dd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.address-aside {
  border-right: 1px solid #eee;
  padding-right: 16px;
}
</style>
