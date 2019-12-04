<template>
  <div>
    <el-container>
      <el-aside width="200px" class="address-aside">
        <div>
          <div
            @click="() => { this.menu = 'default' }"
            class="flex-center address-user-item cp"
            :class="{ 'address-user-item-active': menu === 'default' }"
          >
            <p class="flex-1">默认设置</p>
            <i class="el-icon-arrow-right"></i>
          </div>
          <div
            @click="() => { this.menu = 'api' }"
            class="flex-center address-user-item cp"
            :class="{ 'address-user-item-active': menu === 'api' }"
          >
            <p class="flex-1">接口设置</p>
            <i class="el-icon-arrow-right"></i>
          </div>
          <div
            @click="() => { this.menu = 'about' }"
            class="flex-center address-user-item cp"
            :class="{ 'address-user-item-active': menu === 'about' }"
          >
            <p class="flex-1">关于本站</p>
            <i class="el-icon-arrow-right"></i>
          </div>
        </div>
      </el-aside>
      <el-main class="ml-16" style="overflow:hidden;">
        <div>
          <div class="flex-center address-header mb-16">
            <p class="address-title mr-16">{{ menu === 'default' ? '默认设置' : menu === 'api' ? '接口设置' : menu === 'about' ? '关于本站' : '' }}</p>
            <div class="flex-1"></div>
          </div>

          <el-card shadow="never">
            <!-- default -->
            <template v-if="menu === 'default'">
              <el-form label-position="top">
                <el-form-item label="主链">
                  <el-radio-group>
                    <el-radio :label="3">Cosmos</el-radio>
                    <el-radio :label="6">Kava</el-radio>
                    <el-radio :label="9">Iris</el-radio>
                    <el-radio :label="9">Cell</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="语言">
                  <el-radio-group>
                    <el-radio :label="3">中文</el-radio>
                    <el-radio :label="6">English</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="货币单位">
                  <el-radio-group>
                    <el-radio :label="3">人民币</el-radio>
                    <el-radio :label="6">美元</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item>
                  <el-button style="width: 80px;" type="primary">保存</el-button>
                  <el-button style="width: 80px;">重置</el-button>
                </el-form-item>
              </el-form>
            </template>

            <template v-if="menu === 'api'">
              <el-form label-position="top">
                <el-form-item label="Cosmos(https://look.ping.pub)">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="Kava(https://look.ping.pub)">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="Iris(https://look.ping.pub)">
                  <el-input></el-input>
                </el-form-item>
                <el-form-item label="Cell(https://look.ping.pub)">
                  <el-input></el-input>
                </el-form-item>
              
                <el-form-item>
                  <el-button style="width: 80px;" type="primary">保存</el-button>
                  <el-button style="width: 80px;">重置</el-button>
                </el-form-item>
              </el-form>
            </template>

            <template v-if="menu === 'about'">
              <div style="text-align:center;padding: 200px 0;">
                <a href="https://ping.pub" target="_blank" style="font-size: 48px;font-weight: bold;color: #eee;">Look Wallet</a>
              </div>
            </template>
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
      menu: "default"
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
  font-size: 12px;
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
