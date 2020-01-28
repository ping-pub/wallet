<template>
  <div>
    <van-cell-group title="名称">
      <van-field placeholder="请输入" />
    </van-cell-group>
    <van-cell-group>
      <div slot="title">
        <van-row type="flex" justify="space-between">
          <span>地址</span>
          <van-button hairline size="mini" color="#333">粘贴</van-button>
        </van-row>
      </div>
      <van-field placeholder="请输入" rows="3" autosize type="textarea" />
    </van-cell-group>
    <van-cell-group title="主链">
      <van-grid>
        <van-grid-item icon="photo-o" text="Cosmos" />
        <van-grid-item icon="photo-o" text="Iris" />
        <van-grid-item icon="photo-o" text="Kava" />
        <van-grid-item icon="photo-o" text="文字" />
      </van-grid>
    </van-cell-group>
  </div>
</template>
