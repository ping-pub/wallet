<template>
  <div>
    <div class="flex-center mb-16">
      <p class="flex-1" style="font-size: 16px;">
        治理
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
      <el-table-column align="right" prop="votingPower" width="60">
        <template slot-scope="scope">
          <div>No</div>
          <div>9.8%</div>
        </template>
      </el-table-column>
      <el-table-column align="right" prop="votingPower" width="60">
        <template slot-scope="scope">
          <div>No</div>
          <div>9.8%</div>
        </template>
      </el-table-column>
      <el-table-column align="right" prop="votingPower" width="60">
        <template slot-scope="scope">
          <div>No</div>
          <div>9.8%</div>
        </template>
      </el-table-column>
      <el-table-column align="right" prop="votingPower" width="60">
        <template slot-scope="scope">
          <div>No</div>
          <div>9.8%</div>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="votingPower" width="100">
        <template slot-scope="scope">
          <el-tag type="success">Passed</el-tag>
        </template>
      </el-table-column>
      <el-table-column width="200" align="center">
        <template slot-scope="scope">
          <el-button size="mini" type="primary">投票</el-button>
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
          name: "Adjustment of blocks_per_year to come aligned with actual block time",
          description: "This governance proposal is for adjustment of blocks_per_year parameter to normalize the inflation rate and reward rate.\n ipfs link: https://ipfs.io/ipfs/QmXqEBr56xeUzFpgjsmDKMSit3iqnKaDEL4tabxPXoz9x2019-03-20T06:41:27.040075748Z",
          votingPower: "884654",
          rewards: "9.8%"
        },
        {
          name: "Adjustment of blocks_per_year to come aligned with actual block time",
          description: "This governance proposal is for adjustment of blocks_per_year parameter to normalize the inflation rate and reward rate.\n ipfs link: https://ipfs.io/ipfs/QmXqEBr56xeUzFpgjsmDKMSit3iqnKaDEL4tabxPXoz9x2019-03-20T06:41:27.040075748Z",
          votingPower: "884654",
          rewards: "9.8%"
        },
        {
          name: "Adjustment of blocks_per_year to come aligned with actual block time",
          description: "This governance proposal is for adjustment of blocks_per_year parameter to normalize the inflation rate and reward rate.\n ipfs link: https://ipfs.io/ipfs/QmXqEBr56xeUzFpgjsmDKMSit3iqnKaDEL4tabxPXoz9x2019-03-20T06:41:27.040075748Z",
          votingPower: "884654",
          rewards: "9.8%"
        },
        {
          name: "Adjustment of blocks_per_year to come aligned with actual block time",
          description: "This governance proposal is for adjustment of blocks_per_year parameter to normalize the inflation rate and reward rate.\n ipfs link: https://ipfs.io/ipfs/QmXqEBr56xeUzFpgjsmDKMSit3iqnKaDEL4tabxPXoz9x2019-03-20T06:41:27.040075748Z",
          votingPower: "884654",
          rewards: "9.8%"
        },
        {
          name: "Adjustment of blocks_per_year to come aligned with actual block time",
          description: "This governance proposal is for adjustment of blocks_per_year parameter to normalize the inflation rate and reward rate.\n ipfs link: https://ipfs.io/ipfs/QmXqEBr56xeUzFpgjsmDKMSit3iqnKaDEL4tabxPXoz9x2019-03-20T06:41:27.040075748Z",
          votingPower: "884654",
          rewards: "9.8%"
        },
        {
          name: "Adjustment of blocks_per_year to come aligned with actual block time",
          description: "This governance proposal is for adjustment of blocks_per_year parameter to normalize the inflation rate and reward rate.\n ipfs link: https://ipfs.io/ipfs/QmXqEBr56xeUzFpgjsmDKMSit3iqnKaDEL4tabxPXoz9x2019-03-20T06:41:27.040075748Z",
          votingPower: "884654",
          rewards: "9.8%"
        },
        {
          name: "Adjustment of blocks_per_year to come aligned with actual block time",
          description: "This governance proposal is for adjustment of blocks_per_year parameter to normalize the inflation rate and reward rate.\n ipfs link: https://ipfs.io/ipfs/QmXqEBr56xeUzFpgjsmDKMSit3iqnKaDEL4tabxPXoz9x2019-03-20T06:41:27.040075748Z",
          votingPower: "884654",
          rewards: "9.8%"
        },
        {
          name: "Adjustment of blocks_per_year to come aligned with actual block time",
          description: "This governance proposal is for adjustment of blocks_per_year parameter to normalize the inflation rate and reward rate.\n ipfs link: https://ipfs.io/ipfs/QmXqEBr56xeUzFpgjsmDKMSit3iqnKaDEL4tabxPXoz9x2019-03-20T06:41:27.040075748Z",
          votingPower: "884654",
          rewards: "9.8%"
        },
        {
          name: "Adjustment of blocks_per_year to come aligned with actual block time",
          description: "This governance proposal is for adjustment of blocks_per_year parameter to normalize the inflation rate and reward rate.\n ipfs link: https://ipfs.io/ipfs/QmXqEBr56xeUzFpgjsmDKMSit3iqnKaDEL4tabxPXoz9x2019-03-20T06:41:27.040075748Z",
          votingPower: "884654",
          rewards: "9.8%"
        },
        {
          name: "Adjustment of blocks_per_year to come aligned with actual block time",
          description: "This governance proposal is for adjustment of blocks_per_year parameter to normalize the inflation rate and reward rate.\n ipfs link: https://ipfs.io/ipfs/QmXqEBr56xeUzFpgjsmDKMSit3iqnKaDEL4tabxPXoz9x2019-03-20T06:41:27.040075748Z",
          votingPower: "884654",
          rewards: "9.8%"
        },
        {
          name: "Adjustment of blocks_per_year to come aligned with actual block time",
          description: "This governance proposal is for adjustment of blocks_per_year parameter to normalize the inflation rate and reward rate.\n ipfs link: https://ipfs.io/ipfs/QmXqEBr56xeUzFpgjsmDKMSit3iqnKaDEL4tabxPXoz9x2019-03-20T06:41:27.040075748Z",
          votingPower: "884654",
          rewards: "9.8%"
        },
        {
          name: "Adjustment of blocks_per_year to come aligned with actual block time",
          description: "This governance proposal is for adjustment of blocks_per_year parameter to normalize the inflation rate and reward rate.\n ipfs link: https://ipfs.io/ipfs/QmXqEBr56xeUzFpgjsmDKMSit3iqnKaDEL4tabxPXoz9x2019-03-20T06:41:27.040075748Z",
          votingPower: "884654",
          rewards: "9.8%"
        },
        {
          name: "Adjustment of blocks_per_year to come aligned with actual block time",
          description: "This governance proposal is for adjustment of blocks_per_year parameter to normalize the inflation rate and reward rate.\n ipfs link: https://ipfs.io/ipfs/QmXqEBr56xeUzFpgjsmDKMSit3iqnKaDEL4tabxPXoz9x2019-03-20T06:41:27.040075748Z",
          votingPower: "884654",
          rewards: "9.8%"
        },
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
