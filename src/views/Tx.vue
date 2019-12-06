<template>
  <div>
    <el-container>
      <el-aside width="200px" class="address-aside">
        <div>
          <div class="mb-16 mr-8">
            Cosmoshub-2
            <el-tag size="mini">0.31.1</el-tag>
          </div>
          <div
            @click="() => { this.menu = 'Cosmos' }"
            class="flex-center address-user-item cp"
            :class="{ 'address-user-item-active': menu === 'Cosmos' }"
          >
            <p class="flex-1">cosmos1zu8...jtzw</p>
            <i class="el-icon-arrow-right"></i>
          </div>
          <div
            @click="() => { this.menu = 'Kava' }"
            class="flex-center address-user-item cp"
            :class="{ 'address-user-item-active': menu === 'Kava' }"
          >
            <p class="flex-1">cosmos1zu8...jtzw</p>
            <i class="el-icon-arrow-right"></i>
          </div>
          <div
            @click="() => { this.menu = 'Iris' }"
            class="flex-center address-user-item cp"
            :class="{ 'address-user-item-active': menu === 'Iris' }"
          >
            <p class="flex-1">cosmos1zu8...jtzw</p>
            <i class="el-icon-arrow-right"></i>
          </div>
          <div
            @click="() => { this.menu = 'Cell' }"
            class="flex-center address-user-item cp"
            :class="{ 'address-user-item-active': menu === 'Cell' }"
          >
            <p class="flex-1">cosmos1zu8...jtzw</p>
            <i class="el-icon-arrow-right"></i>
          </div>
        </div>
      </el-aside>
      <el-main class="ml-16" style="overflow:hidden;">
        <div>
          <div class="address-header mb-16">
            <p class="address-title mb-8">cosmos1zu83m37u7k8zzzshgj6sq4q453ktq2l6lqjtzw</p>
            <div class="address-remark mb-8">李三 18018018018 备注: xxxxxxxxxxxxx</div>
            <div>
              <el-tag size="mini" v-for="n in 10" :key="n" class="mr-8 mb-8">备注</el-tag>
            </div>
          </div>

          <el-card shadow="never">
            <el-table size="large" :show-header="false" class="mb-16" :data="tableData">
              <el-table-column type="index" width="50"></el-table-column>
              <el-table-column prop="name">
                <template slot-scope="scope">
                  <p style="font-size: 16px;">{{scope.row.name}}</p>
                  <p style="font-size: 12px;color: #999;">{{ scope.row.description }}</p>
                </template>
              </el-table-column>
              <el-table-column align="center" prop="votingPower" width="200"></el-table-column>
              <el-table-column align="center" prop="rewards" width="200"></el-table-column>
            </el-table>
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
      tableData: [
        {
          name: "cosmosvaloper",
          description: "cosmosvaloper17mggn4znyeyg25wd7498qxl7r2jhgue8u4qjcq",
          votingPower: "884654",
          rewards: "9.8%"
        },
        {
          name: "cosmosvaloper",
          description: "cosmosvaloper17mggn4znyeyg25wd7498qxl7r2jhgue8u4qjcq",
          votingPower: "884654",
          rewards: "9.8%"
        },
        {
          name: "cosmosvaloper",
          description: "cosmosvaloper17mggn4znyeyg25wd7498qxl7r2jhgue8u4qjcq",
          votingPower: "884654",
          rewards: "9.8%"
        },
        {
          name: "cosmosvaloper",
          description: "cosmosvaloper17mggn4znyeyg25wd7498qxl7r2jhgue8u4qjcq",
          votingPower: "884654",
          rewards: "9.8%"
        },
        {
          name: "cosmosvaloper",
          description: "cosmosvaloper17mggn4znyeyg25wd7498qxl7r2jhgue8u4qjcq",
          votingPower: "884654",
          rewards: "9.8%"
        },
        {
          name: "cosmosvaloper",
          description: "cosmosvaloper17mggn4znyeyg25wd7498qxl7r2jhgue8u4qjcq",
          votingPower: "884654",
          rewards: "9.8%"
        },
        {
          name: "cosmosvaloper",
          description: "cosmosvaloper17mggn4znyeyg25wd7498qxl7r2jhgue8u4qjcq",
          votingPower: "884654",
          rewards: "9.8%"
        },
        {
          name: "cosmosvaloper",
          description: "cosmosvaloper17mggn4znyeyg25wd7498qxl7r2jhgue8u4qjcq",
          votingPower: "884654",
          rewards: "9.8%"
        },
        {
          name: "cosmosvaloper",
          description: "cosmosvaloper17mggn4znyeyg25wd7498qxl7r2jhgue8u4qjcq",
          votingPower: "884654",
          rewards: "9.8%"
        },
        {
          name: "cosmosvaloper",
          description: "cosmosvaloper17mggn4znyeyg25wd7498qxl7r2jhgue8u4qjcq",
          votingPower: "884654",
          rewards: "9.8%"
        },
        {
          name: "cosmosvaloper",
          description: "cosmosvaloper17mggn4znyeyg25wd7498qxl7r2jhgue8u4qjcq",
          votingPower: "884654",
          rewards: "9.8%"
        },
        {
          name: "cosmosvaloper",
          description: "cosmosvaloper17mggn4znyeyg25wd7498qxl7r2jhgue8u4qjcq",
          votingPower: "884654",
          rewards: "9.8%"
        },
        {
          name: "cosmosvaloper",
          description: "cosmosvaloper17mggn4znyeyg25wd7498qxl7r2jhgue8u4qjcq",
          votingPower: "884654",
          rewards: "9.8%"
        },
        {
          name: "cosmosvaloper",
          description: "cosmosvaloper17mggn4znyeyg25wd7498qxl7r2jhgue8u4qjcq",
          votingPower: "884654",
          rewards: "9.8%"
        },
        {
          name: "cosmosvaloper",
          description: "cosmosvaloper17mggn4znyeyg25wd7498qxl7r2jhgue8u4qjcq",
          votingPower: "884654",
          rewards: "9.8%"
        },
        {
          name: "cosmosvaloper",
          description: "cosmosvaloper17mggn4znyeyg25wd7498qxl7r2jhgue8u4qjcq",
          votingPower: "884654",
          rewards: "9.8%"
        },
        {
          name: "cosmosvaloper",
          description: "cosmosvaloper17mggn4znyeyg25wd7498qxl7r2jhgue8u4qjcq",
          votingPower: "884654",
          rewards: "9.8%"
        }
      ],
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
