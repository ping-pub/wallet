<template>
  <div>
    <van-cell-group class="mb-10">
      <van-field label="名称" placeholder="请输入" />
      <van-field label="lcd" placeholder="请输入" rows="1" autosize type="textarea">
        <van-icon name="orders-o" size="20" slot="button"></van-icon>
      </van-field>
    </van-cell-group>
    <van-cell title="内核版本">
      <div slot="label">
        <van-radio-group v-model="radio">
          <van-cell-group>
            <van-cell title="0.32.7" clickable @click="radio = '1'">
              <van-radio slot="right-icon" name="1" checked-color="#333" />
            </van-cell>
            <van-cell title="0.32.1" clickable @click="radio = '2'">
              <van-radio slot="right-icon" name="2" checked-color="#333" />
            </van-cell>
          </van-cell-group>
        </van-radio-group>
      </div>
    </van-cell>
    <div class="m-20">
      <van-button color="#333" block>保存</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "1",
      form: {
        name: "",
        address: "",
        chain: "Cosmos"
      },
      chains: [
        {
          name: "Cosmos",
          logo: "/static/chains/cosmoshub.svg",
          version: ""
        },
        {
          name: "Iris",
          logo: "/static/chains/irishub.svg",
          version: ""
        },
        {
          name: "Kava",
          logo: "/static/chains/kava.svg",
          version: ""
        },
        {
          name: "Other",
          logo: "/static/chains/default.png",
          version: ""
        }
      ]
    };
  }
};
</script>