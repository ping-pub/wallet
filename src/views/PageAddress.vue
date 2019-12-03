<template>
  <div class="page-header-index-wide">
    <a-card
      :bordered="false"
      :bodyStyle="{ padding: '16px 0', height: '100%' }"
      :style="{ height: '100%' }"
    >
      <div class="account-settings-info-main" :class="device">
        <div class="account-settings-info-left">
          <div style="margin: 0 16px 16px 16px;">
            <a-button icon="plus" type="primary" style="width: 100%;">创建</a-button>
          </div>
          <div class="address-name-item address-name-item-active">
            <span style="flex: 1;">我的</span>

            <a-icon type="lock"></a-icon>
          </div>
          <div class="address-name-item">张三丰</div>
        </div>
        <div class="account-settings-info-right">
          <div class="account-settings-info-title">
            <span style="flex: 1;">我的</span>
          </div>

          <div style="display:flex;align-items:center;margin-bottom: 16px;">
            <div
              style="flex: 1;font-size: 14px;
    color: rgba(0, 0, 0, 0.65);
    font-weight: bold;"
            >基本信息</div>
            <a-button v-if="editInfo" >保存</a-button>
            <a-button
              v-else
              @click="() => { this.editInfo = true; }"
            >编辑</a-button>
          </div>
          <description-list  :col="2">
            <description-list-item term="姓名">
              <div v-if="!editInfo">林东东</div>
              <a-input style="width: 80%;" v-else></a-input>
            </description-list-item>
            <description-list-item term="联系方式">
              <div v-if="!editInfo">12345</div>
              <a-input style="width: 80%;" v-else></a-input>
            </description-list-item>
            <description-list-item term="备注">
              <div v-if="!editInfo">asdklkllkkkk</div>
              <a-input style="width: 80%;"  v-else></a-input>
            </description-list-item>
          </description-list>

          <div style="display:flex;align-items:center;margin-bottom: 16px;margin-top: 16px;">
            <div
              style="flex: 1;font-size: 14px;
    color: rgba(0, 0, 0, 0.65);
    font-weight: bold;"
            >钱包地址</div>

            <a-input 
              style="max-width: 500px;margin-right: 8px;"
              placeholder="输入地址，添加到对应联系人"
            ></a-input>
            <a-button icon="plus">添加</a-button>
          </div>

          <a-list itemLayout="horizontal" :dataSource="data">
            <a-list-item slot="renderItem" slot-scope="item, index">
              <div slot="actions">
                <a-select defaultValue="lucy" style="width: 120px">
      <a-select-option value="jack">Cosmos</a-select-option>
      <a-select-option value="lucy">Kava</a-select-option>
      <a-select-option value="disabled">Iris</a-select-option>
      <a-select-option value="Yiminghe">Cell</a-select-option>
    </a-select>
              </div>
              <a-button slot="actions" icon="delete" type="link"></a-button>
              <a-list-item-meta>
                <a slot="title" href="https://vue.ant.design/">{{item.title}}</a>
                <a-avatar
                  slot="avatar"
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                />
                <div slot="description">
                  <a-tag>自己的</a-tag>
                  <a-tag>金库</a-tag>
                  <a-tag>有钱</a-tag>
                  <a-input
                    v-if="inputVisible"
                    ref="inputTag"
                    type="text"
                    size="small"
                    @blur="() => { this.inputVisible = false }"
                    @keyup.enter="() => { this.inputVisible = false }"
                    :style="{ width: '78px' }"
                  />
                  <a-tag
                    v-else
                    @click="() => { this.inputVisible = true }"
                    style="background: #fff; borderStyle: dashed;"
                  >
                    <a-icon type="plus" style="margin-right: 5px;" />创建
                  </a-tag>
                </div>
              </a-list-item-meta>
            </a-list-item>
          </a-list>
        </div>
      </div>
    </a-card>
  </div>
</template>

<script>
import { PageView, RouteView } from '@/layouts'
import { mixinDevice } from '@/utils/mixin.js'
import { DescriptionList } from '@/components'
const DescriptionListItem = DescriptionList.Item

export default {
  components: {
    DescriptionList,
    DescriptionListItem,
    RouteView,
    PageView
  },
  mixins: [mixinDevice],
  data() {
    return {
      editInfo: false,
      data: [
        {
          title: 'cosmos1sjllsnramtg3ewxqwwrwjxfgc4n4ef9u0tvx7u'
        },
        {
          title: 'cosmos1sjllsnramtg3ewxqwwrwjxfgc4n4ef9u0tvx7u'
        },
        {
          title: 'cosmos1sjllsnramtg3ewxqwwrwjxfgc4n4ef9u0tvx7u'
        },
        {
          title: 'cosmos1sjllsnramtg3ewxqwwrwjxfgc4n4ef9u0tvx7u'
        }
      ],
      inputVisible: false,
      // horizontal  inline
      mode: 'inline',

      openKeys: [],
      selectedKeys: ['my'],

      // cropper
      preview: {},
      option: {
        img: '/avatar2.jpg',
        info: true,
        size: 1,
        outputType: 'jpeg',
        canScale: false,
        autoCrop: true,
        // 只有自动截图开启 宽度高度才生效
        autoCropWidth: 180,
        autoCropHeight: 180,
        fixedBox: true,
        // 开启宽度和高度比例
        fixed: true,
        fixedNumber: [1, 1]
      },

      pageTitle: ''
    }
  },
  created() {
    this.updateMenu()
  },
  methods: {
    onOpenChange(openKeys) {
      this.openKeys = openKeys
    },
    updateMenu() {
      const routes = this.$route.matched.concat()
      this.selectedKeys = [routes.pop().path]
    }
  },
  watch: {
    $route(val) {
      this.updateMenu()
    }
  }
}
</script>

<style lang="less" scoped>
.address-name-item {
  padding: 8px 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.address-name-item:hover {
  background: #f7f7f7;
}
.address-name-item-active {
  background: #f7f7f7;
  border-left: 4px solid #343a40;
}
.account-settings-info-main {
  width: 100%;
  display: flex;
  height: 100%;
  overflow: auto;

  &.mobile {
    display: block;

    .account-settings-info-left {
      border-right: unset;
      border-bottom: 1px solid #e8e8e8;
      width: 100%;
      height: 50px;
      overflow-x: auto;
      overflow-y: scroll;
    }
    .account-settings-info-right {
      padding: 0 16px;
    }
  }

  .account-settings-info-left {
    border-right: 1px solid #e8e8e8;
    width: 224px;
  }

  .account-settings-info-right {
    flex: 1 1;
    padding: 4px 16px;

    .account-settings-info-title {
      color: rgba(0, 0, 0, 0.85);
      font-size: 18px;
      font-weight: 500;
      line-height: 28px;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
    }
    .account-settings-info-view {
      padding-top: 12px;
    }
  }
}
</style>
