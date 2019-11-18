<template>
  <div class="footer">
    <div class="links">
      <a
        href="https://look.ping.pub/"
        target="_blank"
      >
        Explorer
      </a>
      <a
        href="https://ping.pub/"
        target="_blank"
      >About</a>
      
      <a href="https://ping.pub/"
        target="_blank">Help</a>
      <a href="https://ping.pub/"
        target="_blank">Contact</a>
    </div>
    <div class="copyright">
      Copyright
      <a-icon type="copyright" /> 2019 <span>ping.pub</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GlobalFooter',
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.footer {
  padding: 0 16px;
  margin: 48px 0 24px;
  text-align: center;

  .links {
    margin-bottom: 8px;

    a {
      color: rgba(0, 0, 0, 0.45);

      &:hover {
        color: rgba(0, 0, 0, 0.65);
      }

      &:not(:last-child) {
        margin-right: 40px;
      }
    }
  }
  .copyright {
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
  }
}
</style>
