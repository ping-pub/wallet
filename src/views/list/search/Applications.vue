<template>
  <div>
    <a-card :bordered="false" class="ant-pro-components-tag-select">
      <div style="display:flex;align-items:center;">
        <a-input-search
            style="width: 400px;"
            placeholder="address"
            size="large"
            enterButton="Add"
          />

          <span style="flex: 1;"></span>

        <div style="margin-right: 20px;">Tags</div>
              <tag-select>
              <tag-select-option value="mine">Mine</tag-select-option>
              <tag-select-option value="ping">Ping</tag-select-option>
              <tag-select-option value="others">Others</tag-select-option>
            </tag-select>
            <span>
              <a-popover title="Add Tag" trigger="click" placement="bottomRight">
            <template slot="content">
              <div style="display:flex;align-items:center;">
                <a-input size="small"></a-input>
                <a-button size="small">Save</a-button>
              </div>
            </template>
            <a-tag>
              <a-icon type="plus"></a-icon>
            </a-tag>
          </a-popover>
            </span>
            </div>
    </a-card>

    <div class="ant-pro-pages-list-applications-filterCardList">
      <a-list :loading="loading" :data-source="data" :grid="{ gutter: 24, xl: 4, lg: 3, md: 3, sm: 2, xs: 1 }" style="margin-top: 24px;">
        <a-list-item slot="renderItem" slot-scope="item">
          <a-card :body-style="{ paddingBottom: 20 }" hoverable>
            <a-card-meta :title="item.title">
              <template slot="avatar">
                <a-avatar size="small" :src="item.avatar"/>
              </template>
            </a-card-meta>
            <template slot="actions">
              <a-tooltip title="下载">
                <a-icon type="download" />
              </a-tooltip>
              <a-tooltip title="编辑">
                <a-icon type="edit" />
              </a-tooltip>
              <a-tooltip title="分享">
                <a-icon type="share-alt" />
              </a-tooltip>
              <a-dropdown>
                <a class="ant-dropdown-link">
                  <a-icon type="ellipsis" />
                </a>
                <a-menu slot="overlay">
                  <a-menu-item>
                    <a href="javascript:;">1st menu item</a>
                  </a-menu-item>
                  <a-menu-item>
                    <a href="javascript:;">2nd menu item</a>
                  </a-menu-item>
                  <a-menu-item>
                    <a href="javascript:;">3rd menu item</a>
                  </a-menu-item>
                </a-menu>
              </a-dropdown>
            </template>
            <div class="">
              <card-info active-user="100" new-user="999"></card-info>
            </div>
          </a-card>
        </a-list-item>
      </a-list>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { TagSelect, StandardFormRow, Ellipsis, AvatarList } from '@/components'
import CardInfo from './components/CardInfo'
const TagSelectOption = TagSelect.Option
const AvatarListItem = AvatarList.AvatarItem

export default {
  components: {
    AvatarList,
    AvatarListItem,
    Ellipsis,
    TagSelect,
    TagSelectOption,
    StandardFormRow,
    CardInfo
  },
  data () {
    return {
      data: [],
      form: this.$form.createForm(this),
      loading: true
    }
  },
  filters: {
    fromNow (date) {
      return moment(date).fromNow()
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    handleChange (value) {
      console.log(`selected ${value}`)
    },
    getList () {
      this.$http.get('/list/article', { params: { count: 8 } }).then(res => {
        console.log('res', res)
        this.data = res.result
        this.loading = false
      })
    }
  }
}
</script>

<style lang="less" scoped>
.ant-pro-components-tag-select {
  /deep/ .ant-pro-tag-select .ant-tag {
    margin-right: 24px;
    padding: 0 8px;
    font-size: 14px;
  }
}
.ant-pro-pages-list-projects-cardList {
  margin-top: 24px;

  /deep/ .ant-card-meta-title {
    margin-bottom: 4px;
  }

  /deep/ .ant-card-meta-description {
    height: 44px;
    overflow: hidden;
    line-height: 22px;
  }

  .cardItemContent {
    display: flex;
    height: 20px;
    margin-top: 16px;
    margin-bottom: -4px;
    line-height: 20px;

    > span {
      flex: 1 1;
      color: rgba(0,0,0,.45);
      font-size: 12px;
    }

    /deep/ .ant-pro-avatar-list {
      flex: 0 1 auto;
    }
  }
}
</style>
