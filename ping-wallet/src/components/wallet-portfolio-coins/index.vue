<template>
  <van-cell-group title="币种">
    <van-cell to="/wallet-item?address=xxx" right-arrow center title="ATOM" is-link label="$7" v-for="n in 2" :key="n">
      <div slot="icon">
        <img
          src="/static/chains/cosmoshub.svg"
          style="width: 40px;height: 40px;margin-right:10px;"
          alt
        />
      </div>
      <div>
        <div>$1239123123</div>
        <div>123123</div>
      </div>
    </van-cell>
  </van-cell-group>
</template>