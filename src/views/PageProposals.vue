<template>
  <div class="card-list" ref="content">

    <div style="font-size: 18px;margin-bottom: 10px;">November 17th 2019</div>
    <a-list
      rowKey="id"
      :grid="{gutter: 24, lg: 3, md: 2, sm: 1, xs: 1}"
      :dataSource="dataSource"
    >
      <a-list-item slot="renderItem" slot-scope="item">
        <template>
          <a-card :hoverable="true">
            <a-card-meta>
              <a slot="title">{{ item.title }}</a>
              <a-avatar class="card-avatar" slot="avatar" :src="item.avatar" size="large"/>
              <div class="meta-content" slot="description">
                <div>To {{ item.name }}</div>
                <div>{{ item.fee }}</div>
                <div>{{ item.time }}</div>
              </div>
            </a-card-meta>
            <template class="ant-card-actions" slot="actions">
              <a>Block #{{ item.block }}</a>
            </template>
          </a-card>
        </template>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>

const dataSource = []
dataSource.push({})
for (let i = 0; i < 11; i++) {
  dataSource.push({
    id: i,
    title: 'Delegated 400 ATOM',
    time: '@ Nov 18th 2019 20:31:04',
    fee: 'Network Fee:  0.0002 ATOM',
    block: '2614448',
    name: 'Ping',
    avatar: 'https://app.lunie.io/img/cosmos-logo.07f10280.png',
  })
}

export default {
  name: 'CardList',
  data () {
    return {
      description: '段落示意：蚂蚁金服务设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态， 提供跨越设计与开发的体验解决方案。',
      linkList: [
        { icon: 'rocket', href: '#', title: '快速开始' },
        { icon: 'info-circle-o', href: '#', title: '产品简介' },
        { icon: 'file-text', href: '#', title: '产品文档' }
      ],
      extraImage: 'https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png',
      dataSource
    }
  }
}
</script>

<style lang="less" scoped>
  @import "~@/components/index.less";

  .card-list {
    /deep/ .ant-card-body:hover {
      .ant-card-meta-title>a {
        color: @primary-color;
      }
    }

    /deep/ .ant-card-meta-title {
      margin-bottom: 12px;

      &>a {
        display: inline-block;
        max-width: 100%;
        color: rgba(0,0,0,.85);
      }
    }

    /deep/ .meta-content {
      position: relative;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      height: 64px;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;

      margin-bottom: 1em;
    }
  }

  .card-avatar {
    width: 48px;
    height: 48px;
    border-radius: 48px;
  }

  .ant-card-actions {
    background: #f7f9fa;

    li {
      float: left;
      text-align: center;
      margin: 12px 0;
      color: rgba(0, 0, 0, 0.45);
      width: 50%;

      &:not(:last-child) {
        border-right: 1px solid #e8e8e8;
      }

      a {
        color: rgba(0, 0, 0, .45);
        line-height: 22px;
        display: inline-block;
        width: 100%;
        &:hover {
          color: @primary-color;
        }
      }
    }
  }

  .new-btn {
    background-color: #fff;
    border-radius: 2px;
    width: 100%;
    height: 188px;
  }

</style>
