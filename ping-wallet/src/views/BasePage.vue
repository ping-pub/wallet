<template>
  <div>
    <base-topnav :title="title">

    <van-icon
        v-if="component === 'wallet-list'"
        name="add-o"
        size="20"
        color="#333"
        slot="right"
        @click="() => { this.$router.push('/wallet-form') }"
      />
    
    <div v-if="component === 'wallet-form'" slot="right">保存</div>

    </base-topnav>
    
    <component :is="component"></component>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: '',
      component: ''
    }
  },
  beforeRouteEnter (to, from, next)  {
    const component = to.params.component
    const title = component
    next(vm => {
      vm.component = component
      vm.title = title
    })
  },
  beforeRouteUpdate (to, from, next)  {
    this.component = to.params.component
    this.title = this.component
    next()
  },
  components: {
    'wallet-list': () => import('../components/wallet-list'),
    'wallet-form': () => import('../components/wallet-form'),
    'wallet-item': () => import('../components/wallet-item'),
  }
};
</script>