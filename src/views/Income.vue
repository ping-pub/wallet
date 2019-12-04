<template>
  <div>
    <el-container>
      <el-aside width="200px" class="address-aside">
        <div>
          <div
            @click="() => { this.menu = 'Cosmos' }"
            class="flex-center address-user-item cp"
            :class="{ 'address-user-item-active': menu === 'Cosmos' }"
          >
            <p class="flex-1">Cosmos</p>
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
            <p class="address-title mb-8">{{ menu + ' 收益计算器'}}</p>
            <p class="address-remark">
              这个 {{ menu }} 收益计算器可以计算出委托给 ping.pub 的 ATOM 代币所带来的潜在回报。计算中考虑了当前的奖励率、价格和其他假设等条件。不可作为客观依据，实际收益因市场情况而定。
            </p>
          </div>

          <el-card shadow="never">
           <img src="/img/cosmos.png" style="width: 100%;" alt="">
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
      menu: "Cosmos"
    };
  }
};
</script>

<style scoped>
.address-header {
  align-items: flex-end;
}
.address-title {
  font-size: 18px;
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
