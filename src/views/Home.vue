<template>
  <div>
    <div class="mb-16 flex-center">
      <span style="font-size: 16px;" class="mr-8">Cosmoshub-2</span>
      <el-tag size="mini">0.31.1</el-tag>
      <div class="flex-1"></div>
      <p class="mr-8" style="color: #666">1 ATOM = $3.9</p>
      <i class="el-icon-refresh-right cp"></i>
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

    <div class="flex-center">
      <p style="font-size: 16px;" class="mr-8 flex-1">钱包</p>
      <el-button @click="go('/address')" type="primary" icon="el-icon-plus" size="mini">添加</el-button>
    </div>

    <el-divider content-position="left">
      <div>
        <span>我的</span>
        <span>· $34234</span>
        <span class="mr-8">· 1223ATOM</span>
      </div>
    </el-divider>
    <el-row :gutter="16">
      <el-col :md="12" :xl="8" :lg="12" :sm="24" :xs="24" v-for="n in 6" :key="n" class="mb-16">
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="flex-center">
            <p class="flex-1">cosmos1zu83m37u7k8zzzshgj6sq4q453ktq2l6lqjtzw</p>
          </div>
          <div class="flex-center mb-8">
            <div>
              <div class="home-subtitle">总额</div>
              <div class="home-title">
                $112334
                <span class="home-subtitle">100 ATOM</span>
              </div>
            </div>
            <div style="width: 48px;"></div>
            <div>
              <div class="home-subtitle">可用</div>
              <div class="home-title">
                $112334
                <span class="home-subtitle">100 ATOM</span>
              </div>
            </div>
          </div>
          <div>
            <el-tag size="mini" v-for="o in 2" :key="o" class="mr-8 mb-8">备注</el-tag>
          </div>
          <el-divider class="home-myaddress"></el-divider>
          <div>
            <el-button size="mini">Transfer</el-button>
            <el-button size="mini" class="mr-8">Claim Rewards</el-button>
            <el-popover
              placement="top-start"
              title="Vesting Details"
              width="200"
              trigger="click"
            >
            <div>
              ---
            </div>

              <el-button v-if="n === 1" slot="reference" type="primary" size="mini">Vesting</el-button>
            </el-popover>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-divider content-position="left">
      <el-tooltip placement="bottom">
        <div slot="content">
          <p class="mb-8">18018018018</p>
          <p>备注: xxxxxxxxxxxxxxxxxxxxx</p>
        </div>
        <div>
          <span>李云飞</span>
          <span>· $34234</span>
          <span class="mr-8">· 1223ATOM</span>
          <i class="el-icon-warning-outline" style="font-size: 16px;"></i>
        </div>
      </el-tooltip>
    </el-divider>

    <el-row :gutter="16">
      <el-col :md="12" :xl="8" :lg="12" :sm="24" :xs="24" v-for="n in 6" :key="n" class="mb-16">
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="flex-center">
            <p class="flex-1">cosmos1zu83m37u7k8zzzshgj6sq4q453ktq2l6lqjtzw</p>
          </div>
          <div class="flex-center mb-8">
            <div>
              <div class="home-subtitle">总额</div>
              <div class="home-title">
                $112334
                <span class="home-subtitle">100 ATOM</span>
              </div>
            </div>
            <div style="width: 48px;"></div>
            <div>
              <div class="home-subtitle">可用</div>
              <div class="home-title">
                $112334
                <span class="home-subtitle">100 ATOM</span>
              </div>
            </div>
          </div>
          <div>
            <el-tag size="mini" v-for="o in 1" :key="o" class="mr-8 mb-8">备注</el-tag>
          </div>
          <el-divider class="home-myaddress"></el-divider>
          <div>
            <el-button size="mini">Transfer</el-button>
            <el-button size="mini">Claim Rewards</el-button>
            <el-button v-if="n === 3" type="primary" size="mini">Vesting</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <div style="text-align:center;">
      <el-button size="mini" style="width: 300px;">加载更多</el-button>
    </div>
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

<style>
.home-myaddress.el-divider--horizontal {
  margin: 8px 0 16px 0;
}
</style>

<style scoped>
.home-title {
  word-break: break-all;
  white-space: nowrap;
  margin-top: 4px;
  margin-bottom: 0;
  font-size: 20px;
  line-height: 32px;
}
.home-subtitle {
  font-size: 14px;
  color: #999;
}
</style>