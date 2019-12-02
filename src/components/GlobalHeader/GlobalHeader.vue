<template>
  <transition name="showHeader">
    <div v-if="visible" class="header-animat">
      <div style="background: #343a40;">
        <div style="display:flex;max-width: 1200px;margin-left: auto;margin-right: auto;align-items:center;height: 32px;">
        <a-button type="link" class="chain-button chain-button-active">Cosmos</a-button>
        <a-button type="link" class="chain-button">Kava</a-button>
        <a-button type="link" class="chain-button">Iris</a-button>
        <a-button type="link" class="chain-button">Cell</a-button>
        <a-button type="link" icon="plus" class="chain-button"></a-button>
        <span style="flex: 1;"></span>
        <a-button type="link" icon="mobile" class="chain-button">APP</a-button>
        <a-button type="link" href="https://ping.pub" target="_blank" icon="question-circle-o" class="chain-button">帮助</a-button>
      </div>
      </div>
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
          <a-tooltip v-if="device !=='mobile' && wallet && wallet.id">
            <template slot="title">{{ (nodeInfo.network || wallet.id) + ' · ' + nodeInfo.version }}</template>
            <a-icon type="info-circle" style="margin-left: 20px;"></a-icon>
          </a-tooltip>
        </div>
        <div v-else :class="['top-nav-header-index', theme]">
          <div class="header-index-wide">
            <div class="header-index-left">
              <logo class="top-nav-header" :show-title="device !== 'mobile'"/>
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
        <div style="margin-bottom: 10px;">
          <span style="font-size: 18px;">Add Address</span>
          <a-button href="https://ping.pub" target="_blank"  type="link" size="small" style="float:right;" icon="plus">Add New Chain</a-button>
          </div>

        <div style="display:flex;align-items:center;margin-bottom: 20px;">
          <a-input allowClear v-model="newAddress" placeholder="address(cosmos、irishub、kava)"></a-input>

          <a-button @click="addNewAddress" style="margin-left: -1px;">Explore</a-button>
        </div>

        <div style="margin: 10px 0;font-size: 18px;">
          Explore Address
          <span style="float: right;">
            <a-radio-group @change="changeChain" size="small" defaultValue="all" buttonStyle="solid">
              <a-radio-button value="all">All</a-radio-button>
              <a-radio-button value="cosmos">Cosmos</a-radio-button>
              <a-radio-button value="kava">Kava</a-radio-button>
              <a-radio-button value="iaa">Iris</a-radio-button>
            </a-radio-group>
          </span>
        </div>

        <div>
        <div
          class="addressitem"
          :class="{ 'wallet-active': wallet && (item.address === wallet.address) }"
          v-for="(item, key) of wallets"
          :key="key"
        >
          <div class="wallet-address-title" @click="switchWallet(item)">
            <div style="flex: 1;overflow-wrap:break-word;overflow: hidden;">{{ item.address }}</div>
            <a-icon v-if="device !== 'mobile'" style="padding: 0 10px;" type="login"></a-icon>
          </div>

          <div style="display:flex;align-items:flex-end;">
            <span style="flex: 1;">
              <template v-for="(tag, index) in item.tags">
              <a-tooltip v-if="tag.length > 20" :key="index" :title="tag">
                <a-tag
                  style="margin-bottom: 5px;"
                  :key="tag"
                  :afterClose="() => handleClose(tag, item)"
                >{{`${tag.slice(0, 20)}...`}}</a-tag>
              </a-tooltip>
              <a-tag
                v-else
                  style="margin-bottom: 5px;"
                :key="index"
                closable
                :afterClose="() => handleClose(tag, item)"
              >{{tag}}</a-tag>
            </template>
            <a-input
              v-if="inputVisible && inputVisibleKey === key"
              ref="inputTag"
              type="text"
              size="small"
              :style="{ width: '78px' }"
              :value="inputValue"
              @change="handleInputChange"
              @blur="() => handleInputConfirm(item)"
              @keyup.enter="() => handleInputConfirm(item)"
            />
            <a-tag v-else @click="() => { showInput(key) }" style="background: #fff; borderStyle: dashed;">
              <a-icon type="plus" style="margin-right: 5px;"/>New Tag
            </a-tag>

            </span>
            <a-icon
              @click="removeWallet(item)"
              class="address-delete-icon"
              type="delete"
              style="padding: 0 10px;"
            ></a-icon>
          </div>
          </div>
        </div>

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
import { whichChain, isChainSupport } from '@/utils/helper'

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
      inputVisible: false,
      inputVisibleKey: null,
      inputValue: '',
      drawerShow: false,
      visible: true,
      oldScrollTop: 0,
      newAddress: '',
      wallets: [],
      walletsAll: null,
      nodeInfo: {
        version: '--'
      }
    }
  },
  mounted() {
    document.addEventListener('scroll', this.handleScroll, { passive: true })
    this.initWallet()
  },
  methods: {
    changeChain(e) {
      if (!this.walletsAll) {
        this.walletsAll = JSON.parse(JSON.stringify(this.wallets))
      }
      const prefix = e.target.value
      // 筛选地址
      if (prefix === 'all') {
        this.wallets = JSON.parse(JSON.stringify(this.walletsAll))
        return
      }
      const wallets = JSON.parse(JSON.stringify(this.walletsAll))

      this.wallets = wallets.filter((item) => {
        if (item.address.indexOf(prefix) === 0) {
          return item
        }
      })
    },
    async handleClose(removedTag, item) {
      const tags = item.tags.filter(tag => tag !== removedTag)
      item.tags = tags
      await this.$localStorage.setItem('wallets', this.wallets)
    },

    showInput(key) {
      this.inputVisibleKey = key
      this.inputVisible = true
      this.$nextTick(() => {
        this.$refs.inputTag[0].focus()
      })
    },

    handleInputChange(e) {
      this.inputValue = e.target.value
    },

    async handleInputConfirm(item) {
      const inputValue = this.inputValue
      let tags = item.tags
      if (inputValue && tags.indexOf(inputValue) === -1) {
        item.tags = [...tags, inputValue]
      }
      await this.$localStorage.setItem('wallets', this.wallets)
      Object.assign(this, {
        inputVisible: false,
        inputValue: ''
      })
    },
    async removeWallet(one) {
      this.wallets = this.wallets.filter(item => {
        return item.address !== one.address
      })
      await this.$localStorage.setItem('wallets', this.wallets)
      if (one.address === this.wallet.address) {
        this.$store.commit('walletSet', {})
      }
    },
    async initWallet() {
      let address = this.$route.query.address || ''
      let wallets = await this.$localStorage.getItem('wallets')
      if (!address && wallets) {
        address = wallets[0].address
        if (address) {
          this.$router.push({
            query: {
              address
            }
          })
        }
      }
      if (address) {
        const chain = whichChain(address)
        this.$store.commit('walletSet', {
          address,
          ...chain
        })
        if (wallets) {
          let num = 0
          for (const item of wallets) {
            if (item.address === address) {
              num += 1
            }
          }
          if (num === 0) {
            wallets.push({
              address,
              tags: ['From URL']
            })
            await this.$localStorage.setItem('wallets', wallets)
          }
        } else {
          wallets = [
            {
              address,
              tags: ['From URL']
            }
          ]
          await this.$localStorage.setItem('wallets', wallets)
        }
        this.fetchNodeInfo()
      }
    },
    // 获取节点版本
    async fetchNodeInfo() {
      const res = await this.$api.lrc({
        url: 'nodeInfo'
      })
      if (!res) return
      this.nodeInfo = res.node_info || res
    },
    async showDrawer() {
      this.newAddress = ''
      const wallets = await this.$localStorage.getItem('wallets')
      this.wallets = wallets || []
      this.drawerShow = true
    },
    switchWallet(item) {
      const chain = whichChain(item.address)
      this.$store.commit('walletSet', {
        ...item,
        ...chain
      })
      this.$router.push({
        path: '/wallet',
        query: {
          address: item.address
        }
      })
      this.fetchNodeInfo()
      this.drawerShow = false
    },
    async addNewAddress() {
      if (!this.newAddress) {
        return
      }
      if (!isChainSupport(this.newAddress)) {
        this.$notification.error({
          message: 'Sorry',
          description:
            'We do not support this address at this time.You can apply to us for the chain.For details visit our website at ping.pub.'
        })
        return
      }
      const wallets = await this.$localStorage.getItem('wallets')
      const arr = wallets || []
      let num = 0
      for (const item of arr) {
        if (item.address === this.newAddress) {
          num += 1
        }
      }
      if (num !== 0) {
        this.$notification.error({
          message: 'Sorry',
          description: 'Address already exists.'
        })
        return
      }
      arr.push({
        address: this.newAddress,
        tags: []
      })
      await this.$localStorage.setItem('wallets', arr)
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
.chain-button {
  color: #999;
}
.chain-button:hover {
  color: #fff;
}
.chain-button-active {
  color: #fff;
}
.wallet-address-title {
margin-bottom: 10px;cursor:pointer;display:flex;align-items:center;
}
.wallet-address-title:hover {
  color: #343a40
}
.wallet-active {
  border: 1px solid #343a40 !important;
  background-color: #f6ffed !important;
}
.addressitem {
  border: 1px solid #eee;
  padding: 10px;
  background: #f5f5f5;
  margin-bottom: 10px;
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
