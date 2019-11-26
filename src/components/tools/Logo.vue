<template>
  <div class="logo">
    <router-link :to="{ path: '/wallet'}">
      <h1 v-if="showTitle">{{ title }}</h1>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'Logo',
  props: {
    title: {
      type: String,
      default: 'Look Wallet',
      required: false
    },
    showTitle: {
      type: Boolean,
      default: true,
      required: false
    }
  }
}
</script>
