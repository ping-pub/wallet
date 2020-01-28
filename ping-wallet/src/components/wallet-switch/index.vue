<template>
  <van-popup
    v-model="show"
    :closeable="true"
    position="bottom"
    :style="{ height: '80%', width: '100%' }"
  >
    <van-cell-group title="cosmos" v-for="i in 3" :key="i">
      <van-cell title="Name" label="cosmos23123...ajskdjas" center v-for="n in 5" :key="n">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <van-icon
          slot="right-icon"
          name="success"
          size="20px"
          color="#333"
          style="line-height: inherit;"
        />
      </van-cell>
    </van-cell-group>
  </van-popup>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    switch() {
      this.show = !this.show;
    }
  }
};
</script>