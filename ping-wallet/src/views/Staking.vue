<template>
  <div>
    <van-sticky>
      <van-nav-bar :title="$route.name">
        <div slot="left">
          <van-icon name="exchange" color="#333" size="20" style="margin-right: 5px;" />
          <span>Name</span>
        </div>
        <div slot="right">提取收益</div>
      </van-nav-bar>
    </van-sticky>

    <van-tabs>
      <van-tab title="已委托">
        <van-cell-group title="总收益">
          <van-cell title="Name" label="cosmos23123...ajskdjas" center>
            <!-- 使用 right-icon 插槽来自定义右侧图标 -->
            <van-icon
              slot="right-icon"
              name="success"
              size="20px"
              color="#333"
              style="line-height: inherit;"
            />
          </van-cell>
        </van-cell-group>
        <van-cell-group title="委托人">
          <van-cell title="Name" label="cosmos23123...ajskdjas" center>
            <!-- 使用 right-icon 插槽来自定义右侧图标 -->
            <van-icon
              slot="right-icon"
              name="success"
              size="20px"
              color="#333"
              style="line-height: inherit;"
            />
          </van-cell>
        </van-cell-group>
      </van-tab>
      <van-tab title="验证人">
        <van-cell-group title="推荐">
          <van-cell title="Name" label="cosmos23123...ajskdjas" center>
            <!-- 使用 right-icon 插槽来自定义右侧图标 -->
            <van-icon
              slot="right-icon"
              name="success"
              size="20px"
              color="#333"
              style="line-height: inherit;"
            />
          </van-cell>
        </van-cell-group>
        <van-cell-group title="有效的">
          <van-cell title="Name" label="cosmos23123...ajskdjas" center v-for="n in 5" :key="n">
            <!-- 使用 right-icon 插槽来自定义右侧图标 -->
            <van-icon
              slot="right-icon"
              name="success"
              size="20px"
              color="#333"
              style="line-height: inherit;"
            />
          </van-cell>
        </van-cell-group>
      </van-tab>
      <van-tab title="计算器">
        <van-cell-group title="验证人">
          <van-cell title="Name" label="cosmos23123...ajskdjas" center>
            <!-- 使用 right-icon 插槽来自定义右侧图标 -->
            <van-icon
              slot="right-icon"
              name="success"
              size="20px"
              color="#333"
              style="line-height: inherit;"
            />
          </van-cell>
        </van-cell-group>
        
        <van-cell-group title="收益计算">
          <van-cell title="Name" label="cosmos23123...ajskdjas" center>
            <!-- 使用 right-icon 插槽来自定义右侧图标 -->
            <van-icon
              slot="right-icon"
              name="success"
              size="20px"
              color="#333"
              style="line-height: inherit;"
            />
          </van-cell>
        </van-cell-group>
        </van-tab>
    </van-tabs>
  </div>
</template>