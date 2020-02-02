<template>
  <div>
    <van-cell-group class="mb-10">
      <van-field label="名称" placeholder="请输入" v-model="form.name" />
      <van-field
        label="地址"
        :disabled="!create"
        placeholder="请输入"
        rows="1"
        autosize
        type="textarea"
        v-model="form.address"
      >
        <van-icon name="scan" size="20" slot="button" v-if="create"></van-icon>
      </van-field>
    </van-cell-group>
    <van-cell title="主链">
      <van-grid slot="label" :border="false">
        <van-grid-item
          @click="() => { form.chain = item.name }"
          v-for="item of chainList"
          :key="item.name"
          :text="item.name"
          :info="form.chain === item.name ? '当前' : null"
          style="background: #333;"
        >
          <div slot="icon" >
            <van-image width="40" height="40" :src="item.logo" />
          </div>
        </van-grid-item>
      </van-grid>
    </van-cell>
    <div class="m-20">
      <van-button color="#333" block @click="save">保存</van-button>
      <van-button v-if="!create" plain block type="danger" style="margin-top: 10px;" @click="del">删除</van-button>
    </div>
  </div>
</template>

<script>
import baseMixin from "../../store/baseMixin";

export default {
  mixins: [baseMixin],
  activated() {
    const { address, create } = this.$route.query;
    this.create = create;
    if (address && this.walletList[address]) {
      this.form = JSON.parse(JSON.stringify(this.walletList[address]));
    } else {
      this.form = {
        name: "",
        address: "",
        chain: "Cosmos"
      }
    }
  },
  data() {
    return {
      create: null,
      form: {
        name: "",
        address: "",
        chain: "Cosmos"
      }
    };
  },
  methods: {
    save() {
      this.$store.commit("walletListSave", this.form);
      this.$Toast('保存成功')
      this.$router.back()
    },
    del() {
      this.$store.commit("walletListDel", this.form);
      this.$Toast('删除成功')
      this.$router.back()
    }
  }
};
</script>