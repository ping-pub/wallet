<template>
  <div class="user-wrapper">
    <div class="content-box">
      <span class="action" @click="go('/setting')">
         <a-icon type="setting" />
         设置
        </span>
      
      <a href="https://look.ping.pub" target="_blank">
        <span class="action">
          <a-icon type="database"></a-icon>
          浏览器
        </span>
      </a>
    </div>
  </div>
</template>

<script>
import NoticeIcon from '@/components/NoticeIcon'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'UserMenu',
  components: {
    NoticeIcon
  },
  computed: {
    ...mapGetters(['nickname', 'avatar'])

  },
  methods: {
    go(path) {
      this.$router.push(path)
    },
    ...mapActions(['Logout']),
    handleLogout () {
      this.$confirm({
        title: '提示',
        content: '真的要注销登录吗 ?',
        onOk: () => {
          return this.Logout({}).then(() => {
            setTimeout(() => {
              window.location.reload()
            }, 16)
          }).catch(err => {
            this.$message.error({
              title: '错误',
              description: err.message
            })
          })
        },
        onCancel () {
        }
      })
    }
  }
}
</script>
