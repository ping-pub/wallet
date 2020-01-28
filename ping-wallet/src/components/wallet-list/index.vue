<template>
  <van-cell-group>
    <div slot="title">
      <van-row type="flex" justify="space-between">
        <span>Cosmos</span>
        <img
          src="https://wallet.ping.pub/static/wallet/cosmoshub.svg"
          style="width: 20px;height: 20px;"
          alt
        />
      </van-row>
    </div>
    <van-cell
      v-for="n in 10"
      :key="n"
      title="Name"
      label="cosmos1jxv0u20scum4trha72c7ltfgfqef6nscj25050"
      is-link
    />
  </van-cell-group>
</template>
