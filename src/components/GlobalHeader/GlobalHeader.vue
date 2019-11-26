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
            @click="showDrawer"
            style="float: right;"
            class="trigger"
            v-if="device==='mobile'"
            type="retweet"
          ></a-icon>
          <a-button @click="showDrawer" v-else>
            {{ wallet && wallet.address || 'Click here to add an address'}}
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
          <a-input v-model="newAddress" placeholder="address(cosmos、irishub、kava)"></a-input>

          <a-button @click="addNewAddress" style="margin-left: -1px;">Explore</a-button>
        </div>

        <div style="margin: 10px 0;font-size: 18px;">
          Explore Address

          <span style="float: right;">$22.8 / $12.3 </span>
        </div>

        <div class="addressitem" :class="{ 'wallet-active': item.address === wallet.address }"  v-for="(item, index) of wallets" :key="index">
          <div style="margin-bottom: 10px;cursor:pointer;" @click="switchWallet(item)">
            <span>{{ item.address }}</span>
            <a-icon
              
              style="float:right;margin-right: 20px;"
              type="login"
            ></a-icon>
          </div>

          <div style="display:flex;align-items:center;">
            <a-tag v-for="(el, key) of item.tags" :key="key">{{ el.name }}</a-tag>

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

            <span style="flex: 1;"></span>
            <span >28 ATOM + 0.12</span>
            <a-icon class="address-delete-icon" type="delete" style="padding: 0 10px;"></a-icon>
          </div>
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
  computed: {
    wallet() {
      return this.$store.state.wallet
    }
  },
  data() {
    return {
      drawerShow: false,
      visible: true,
      oldScrollTop: 0,
      text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
      customStyle: 'background: #f7f7f7;border-radius: 4px;margin-bottom: 24px;border: 0;overflow: hidden',
      newAddress: '',
      wallets: []
    }
  },
  mounted() {
    document.addEventListener('scroll', this.handleScroll, { passive: true })
    this.initWallet()
  },
  methods: {
    initWallet() {
      const address = this.$route.query.address || ''
      if (address) {
        this.$store.commit('walletSet', {
          address
        })
      }
    },
    showDrawer() {
      this.newAddress = ''
      const wallets = window.localStorage.getItem('wallets')
      this.wallets = (wallets && JSON.parse(wallets)) || []
      this.drawerShow = true
    },
    switchWallet(item) {
      this.$store.commit('walletSet', item)
      window.localStorage.setItem('wallet', JSON.stringify(item))
      this.$router.push({
        query: {
          address: item.address
        }
      })
      this.drawerShow = false
    },
    addNewAddress() {
      if (!this.newAddress) {
        return
      }
      const wallets = window.localStorage.getItem('wallets')
      const arr = (wallets && JSON.parse(wallets)) || []
      arr.push({
        address: this.newAddress,
        tags: []
      })
      window.localStorage.setItem('wallets', JSON.stringify(arr))
      this.wallets = arr
      this.newAddress = ''
    },
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
.wallet-active {
  border: 1px solid #343a40 !important;
  background-color: #f6ffed !important;
}
.addressitem {
  border: 1px solid #eee;
  padding: 10px;background: #f5f5f5;margin-bottom: 10px;
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
.address-delete-icon {
  cursor: pointer;
}
.address-delete-icon:hover {
  color: #e66;
}
</style>
