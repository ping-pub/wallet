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
            <p class="address-title mb-8">{{ menu + ' 收益计算器' }}</p>
            <p
              class="address-remark"
            >这个 {{ menu }} 收益计算器可以计算出委托代币所带来的潜在回报。计算中考虑了当前的奖励率、价格和其他假设等条件。不可作为客观依据，实际收益因市场情况而定。</p>
          </div>

          <el-card shadow="never">
            <div>
              <span class="mr-8" style="font-size: 16px;font-weight: bold;">委托给 ping.pub</span>
              <el-button icon="el-icon-refresh" type="text" @click="go('/stake')">切换验证人</el-button>
            </div>

            <div>
              <el-form label-position="left" label-width="120px">
                <el-row>
                  <el-col :xs="24" :md="12" :lg="10" :xl="8">
                    <div style="font-size: 16px;padding: 16px 0;">委托信息</div>
                    <el-form-item label="验证人">
                      <div>Ping.pub</div>
                    </el-form-item>
                    <el-form-item label="介绍">
                      <div>Ping.pub</div>
                    </el-form-item>
                    <el-form-item label="年度收益率">
                      <div style="font-size: 18px;">9.8%</div>
                    </el-form-item>
                    <el-form-item label="委托数量">
                      <el-input-number v-model="sliderVal" style="width: 200px;"></el-input-number>
                    </el-form-item>
                    <el-form-item label="委托市价">
                      <div>
                        <span class="mr-16" style="font-size: 18px;">$12300</span>
                        <span style="color: #666;">(1 ATOM = $123）</span>
                      </div>
                    </el-form-item>
                  </el-col>

                  <el-col :xs="24" :md="12" :lg="14" :xl="16">
                    <div style="font-size: 16px;padding: 16px 0;">预估收益</div>
                    <el-form-item label="日收益">
                      <div>
                        <span class="mr-16" style="font-size: 18px;">$123</span>
                        <span style="color: #666;">10 ATOM</span>
                      </div>
                    </el-form-item>
                    <el-form-item label="周收益">
                      <div>
                        <span class="mr-16" style="font-size: 18px;">$123</span>
                        <span style="color: #666;">10 ATOM</span>
                      </div>
                    </el-form-item>
                    <el-form-item label="月收益">
                      <div>
                        <span class="mr-16" style="font-size: 18px;">$123</span>
                        <span style="color: #666;">10 ATOM</span>
                      </div>
                    </el-form-item>
                    <el-form-item label="年收益">
                      <div>
                        <span class="mr-16" style="font-size: 18px;">$123</span>
                        <span style="color: #666;">10 ATOM</span>
                      </div>
                    </el-form-item>
                    <div>
                      <el-button style="width: 80px;" type="primary">委托</el-button>
                      <el-button style="width: 80px;">重置</el-button>
                    </div>
                  </el-col>
                </el-row>
              </el-form>
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
      this.$router.push(path)
    }
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
