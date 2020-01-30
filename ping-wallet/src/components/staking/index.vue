<template>
  <div>
    <van-tabs>
      <van-tab title="已委托">
        <van-cell-group title="总收益">
          <van-cell title="委托总数" center>
            <div>
              <div>+238293</div>
              <div>+$231231.23</div>
            </div>
          </van-cell>
          <van-cell title="收益总数" center>
            <div>
              <div>+238293</div>
              <div>+$231231.23</div>
            </div>
          </van-cell>
        </van-cell-group>
        <van-cell-group title="委托人">
          <van-cell title="Genesis Lab" label="Rate 7%" center is-link>
            <div>
              <div>200</div>
              <div>+23.xx</div>
            </div>
          </van-cell>
        </van-cell-group>
      </van-tab>
      <van-tab title="验证人">
        <van-cell-group title="推荐">
          <van-cell title="Genesis Lab" value="Rate 7%" center is-link></van-cell>
        </van-cell-group>
        <van-cell-group title="全部">
          <van-cell title="Genesis Lab" value="Rate 7%" center is-link></van-cell>
        </van-cell-group>
      </van-tab>
      <van-tab title="计算器">
        <van-cell-group title="验证人">
          <van-cell title="Genesis Lab" value="Rate 7%" center is-link></van-cell>
        </van-cell-group>

        <van-cell-group title="收益计算">
          <van-field label="委托数量" placeholder="请输入" />
        </van-cell-group>
      </van-tab>
    </van-tabs>
  </div>
</template>