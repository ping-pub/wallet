<template>
    <van-sticky>
      <van-nav-bar :title="title || $route.name">
        <van-icon
          @click="() => { this.$router.back() }"
          name="arrow-left"
          size="20"
          color="#333"
          slot="left"
        />
        <div slot="right">
          <slot name="right"></slot>
        </div>
      </van-nav-bar>
    </van-sticky>
</template>

<script>
export default {
  props: {
    title: {
      default: ''
    }
  }
}
</script>
