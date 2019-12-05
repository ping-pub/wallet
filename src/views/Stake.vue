<template>
  <div>
    <div class="flex-center mb-16">
      <p class="flex-1" style="font-size: 16px;">
        验证人
        <span style="font-size: 14px;" class="mr-8">· Cosmoshub-2</span>
        <el-tag size="mini">0.31.1</el-tag>
      </p>
      <el-input style="width: 200px;" class="mr-8"></el-input>
      <el-button icon="el-icon-search">搜索</el-button>
    </div>

    <el-table size="large" :show-header="false" class="mb-16" :data="tableData">
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column prop="name">
        <template slot-scope="scope">
          <p style="font-size: 16px;">{{scope.row.name}}</p>
          <p style="font-size: 12px;color: #999;">{{ scope.row.description }}</p>
        </template>
      </el-table-column>
      <el-table-column align="right" prop="votingPower" width="200"></el-table-column>
      <el-table-column align="right" prop="rewards" width="200"></el-table-column>
      <el-table-column width="200" align="center">
        <template slot-scope="scope">
          <el-button size="mini" type="text">估算</el-button>
          <el-button size="mini" type="primary">委托</el-button>
        </template>
      </el-table-column>
    </el-table>
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
      ]
    };
  },
  methods: {
    go(path) {
      this.$router.push(path);
    }
  }
};
</script>
