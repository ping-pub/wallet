<template>
  <div>
   <wallet-portfolio-card/>
   <wallet-portfolio-btns/>
   <wallet-portfolio-coins/>
  </div>
</template>

<script>
export default {
  components: {
    'wallet-portfolio-btns':  () => import(/* webpackChunkName: "home" */ '../components/wallet-portfolio-btns'),
    'wallet-portfolio-card':  () => import(/* webpackChunkName: "home" */ '../components/wallet-portfolio-card'),
    'wallet-portfolio-coins':  () => import(/* webpackChunkName: "home" */ '../components/wallet-portfolio-coins')
  }
};
</script>
