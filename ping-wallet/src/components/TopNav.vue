<template>
<van-nav-bar
  :title="title"
  right-text="按钮"
  :left-arrow="back"
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
</template>

<script>
export default {
    props: {
        title: {
            default: ''
        },
        back: {
            default: true
        }
    },
    methods: {
        onClickLeft() {
            this.$router.back()
        },
        onClickRight() {

        }
    }
}
</script>