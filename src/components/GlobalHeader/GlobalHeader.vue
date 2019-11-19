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
        :width="device==='mobile' ? '100%' : '600px'"
        placement="right"
        @close="() => { this.drawerShow = false }"
        :visible="drawerShow"
      >
        <div style="font-size: 18px;margin-bottom: 10px;">Add Address</div>

        <div style="display:flex;align-items:center;margin-bottom: 20px;">
          <a-input placeholder="address(cosmos、irishub、kava)"></a-input>

          <a-button style="margin-left: -1px;">Explore</a-button>
        </div>

        <div style="margin: 10px 0;font-size: 18px;">
          Explore Address

          <span>$22.8 / $12.3 </span>
          <a-icon type="filter"></a-icon>
        </div>

        <div style="padding: 10px;background: #f5f5f5;margin-bottom: 10px;" class="addressitem" v-for="n in 5" :key="n">
          <div style="margin-bottom: 10px;cursor:pointer;" @click="() => { this.drawerShow = false }">
            <span>cosmos1jxv0u20scum4trha72c7ltfgfqef6nscj25050</span>
            <a-icon
              
              style="float:right;margin-right: 20px;"
              type="login"
            ></a-icon>
          </div>

          <a-tag color="green">Mine</a-tag>
          <a-tag>Ledger 接入</a-tag>

          <a-popover title="Select Tag" trigger="click">
            <template slot="content">
              <div style="display:flex;align-items:center;">
                <a-select size="small" mode="tags" style="width: 100%" placeholder="Tags Mode">
                  <a-select-option
                    v-for="i in 25"
                    :key="(i + 9).toString(36) + i"
                  >{{(i + 9).toString(36) + i}}</a-select-option>
                </a-select>
                <a-button size="small">Save</a-button>
              </div>
            </template>
            <a-tag>
              <a-icon type="plus"></a-icon>
            </a-tag>
          </a-popover>

          <span style="float: right;">28 ATOM + 0.12</span>
        </div>

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
import { NumberInfo } from '@/components'

export default {
  name: 'GlobalHeader',
  components: {
    NumberInfo,
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
.addressitem {
  border: 1px solid #eee;
}
.addressitem:hover {
  border: 1px solid #343a40;
}
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
