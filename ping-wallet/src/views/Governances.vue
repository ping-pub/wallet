<template>
  <div>
    <van-panel title="标题" desc="描述信息" status="状态" v-for="n in 10" :key="n" style="margin-bottom: 5px;">
      <div>内容</div>
      <div slot="footer" style="text-align: right;">
        <van-button size="small" type="primary">投票</van-button>
      </div>
    </van-panel>
  </div>
</template>