<template>
  <transition name="showHeader">
    <div v-if="visible" class="header-animat">
      <a-layout-header
        v-if="visible"
        :class="[fixedHeader && 'ant-header-fixedHeader', sidebarOpened ? 'ant-header-side-opened' : 'ant-header-side-closed', ]"
        :style="{ padding: '0' }"
      >
        <div v-if="mode === 'sidemenu'" class="header">
          <a-icon
            v-if="device==='mobile'"
            class="trigger"
            :type="collapsed ? 'menu-fold' : 'menu-unfold'"
            @click="toggle"
          />
          <a-icon
            v-else
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="toggle"
          />
          <user-menu v-if="device !=='mobile'"></user-menu>
          <a-icon
            @click="() => { this.drawerShow = true }"
            style="float: right;"
            class="trigger"
            v-if="device==='mobile'"
            type="retweet"
          ></a-icon>
          <a-button @click="() => { this.drawerShow = true }" v-else>
            cosmoshub · cosmosjadqwewqe123123
            <a-icon type="retweet" />
          </a-button>
        </div>
        <div v-else :class="['top-nav-header-index', theme]">
          <div class="header-index-wide">
            <div class="header-index-left">
              <logo class="top-nav-header" :show-title="device !== 'mobile'" />
              <s-menu v-if="device !== 'mobile'" mode="horizontal" :menu="menus" :theme="theme" />
              <a-icon
                v-else
                class="trigger"
                :type="collapsed ? 'menu-fold' : 'menu-unfold'"
                @click="toggle"
              />
            </div>
            <user-menu class="header-index-right"></user-menu>
          </div>
        </div>
      </a-layout-header>

      <a-drawer
        title="Local Wallets"
        width="30%"
        placement="right"
        @close="() => { this.drawerShow = false }"
        :visible="drawerShow"
      >
        <div style="font-size: 18px;margin-bottom: 10px;">Your Address</div>

        <div style="display:flex;margin-bottom: 20px;">
          <a-input placeholder="address(cosmos、irishub、kava)"></a-input>
          <a-button style="margin-left: 5px;">Explore</a-button>
        </div>

        <div style="margin: 10px 0;font-size: 18px;">Cosmoshub</div>

        <a-collapse defaultActiveKey="1" :bordered="false">
          <template v-slot:expandIcon="props">
            <a-icon type="caret-right" :rotate="props.isActive ? 90 : 0" />
          </template>
          <a-collapse-panel
            header="cosmos1jxv0u20scum4trha72c7ltfgfqef6nscj25050"
            key="1"
            :style="customStyle"
          >
            <p>{{text}}</p>
          </a-collapse-panel>
        </a-collapse>

        <div style="margin: 10px 0;font-size: 18px;">Irishub</div>

        <a-collapse defaultActiveKey="1" :bordered="false">
          <template v-slot:expandIcon="props">
            <a-icon type="caret-right" :rotate="props.isActive ? 90 : 0" />
          </template>
          <a-collapse-panel
            header="cosmos1jxv0u20scum4trha72c7ltfgfqef6nscj25050"
            key="1"
            :style="customStyle"
          >
            <p>{{text}}</p>
          </a-collapse-panel>
        </a-collapse>

        <div style="margin: 10px 0;font-size: 18px;">Kava</div>

        <a-empty description="Please Add Address" style="margin-bottom: 20px;"/>

        <a-button style="width: 100%;margin-bottom: 20px;" icon="plus">Add New Chain</a-button>
      </a-drawer>
    </div>
  </transition>
</template>

<script>
import UserMenu from '../tools/UserMenu'
import SMenu from '../Menu/'
import Logo from '../tools/Logo'
import { mixin } from '@/utils/mixin'

export default {
  name: 'GlobalHeader',
  components: {
    UserMenu,
    SMenu,
    Logo
  },
  mixins: [mixin],
  props: {
    mode: {
      type: String,
      // sidemenu, topmenu
      default: 'sidemenu'
    },
    menus: {
      type: Array,
      required: true
    },
    theme: {
      type: String,
      required: false,
      default: 'dark'
    },
    collapsed: {
      type: Boolean,
      required: false,
      default: false
    },
    device: {
      type: String,
      required: false,
      default: 'desktop'
    }
  },
  data() {
    return {
      drawerShow: false,
      visible: true,
      oldScrollTop: 0,
      text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
      customStyle: 'background: #f7f7f7;border-radius: 4px;margin-bottom: 24px;border: 0;overflow: hidden',
      data: [
        'cosmos1jxv0u20scum4trha72c7ltfgfqef6nscj25050',
        'cosmos1jxv0u20scum4trha72c7ltfgfqef6nscj25050',
        'cosmos1jxv0u20scum4trha72c7ltfgfqef6nscj25050',
        'cosmos1jxv0u20scum4trha72c7ltfgfqef6nscj25050',
        'cosmos1jxv0u20scum4trha72c7ltfgfqef6nscj25050'
      ]
    }
  },
  mounted() {
    document.addEventListener('scroll', this.handleScroll, { passive: true })
  },
  methods: {
    handleScroll() {
      if (!this.autoHideHeader) {
        return
      }

      const scrollTop = document.body.scrollTop + document.documentElement.scrollTop
      if (!this.ticking) {
        this.ticking = true
        requestAnimationFrame(() => {
          if (this.oldScrollTop > scrollTop) {
            this.visible = true
          } else if (scrollTop > 300 && this.visible) {
            this.visible = false
          } else if (scrollTop < 300 && !this.visible) {
            this.visible = true
          }
          this.oldScrollTop = scrollTop
          this.ticking = false
        })
      }
    },
    toggle() {
      this.$emit('toggle')
    }
  },
  beforeDestroy() {
    document.body.removeEventListener('scroll', this.handleScroll, true)
  }
}
</script>

<style lang="less">
@import '../index.less';

.header-animat {
  position: relative;
  z-index: @ant-global-header-zindex;
}
.showHeader-enter-active {
  transition: all 0.25s ease;
}
.showHeader-leave-active {
  transition: all 0.5s ease;
}
.showHeader-enter,
.showHeader-leave-to {
  opacity: 0;
}
</style>
