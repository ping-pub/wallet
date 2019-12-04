<template>
  <div>
    <el-container>
      <el-aside width="200px" class="address-aside">
        <el-button icon="plus" style="width: 100%;margin-bottom: 16px;" type="primary">创建</el-button>

        <div>
          <div class="flex-center address-user-item address-user-item-active">
            <p class="flex-1">我的</p>
            <i class="el-icon-lock"></i>
          </div>
          <div v-for="n in 5" :key="n" class="flex-center address-user-item">
            <p class="flex-1">曲院荷风</p>
            <el-popover placement="right-start" width="300" trigger="click">
              <div>
                <el-form label-position="top">
                  <el-form-item label="姓名">
                    <el-input placeholder="name"></el-input>
                  </el-form-item>
                  <el-form-item label="手机">
                    <el-input placeholder="phone"></el-input>
                  </el-form-item>
                  <el-form-item label="备注">
                    <el-input type="textarea" :rows="2" placeholder="remark"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button>保存</el-button>
                    <el-button>删除</el-button>
                  </el-form-item>
                </el-form>
              </div>
              <i slot="reference" class="el-icon-s-operation cp"></i>
            </el-popover>
          </div>
        </div>
      </el-aside>
      <el-main class="ml-16" style="overflow:hidden;">
        <div>
          <div class="flex-center address-header mb-8">
            <p class="address-title mr-16">我的</p>
            <p class="address-subtitle">18018018</p>
            <div class="flex-1"></div>
            <el-input class="mr-8" style="max-width: 300px;"></el-input>
            <el-button>添加</el-button>
          </div>
          <div class="address-remark mb-16">备注: 婕拉手机到了</div>

          <div v-for="i in 4" :key="i">
            <el-divider
              content-position="left"
            >{{ i === 1 ? 'Cosmos' : i === 2 ? 'Kava' : i === 3 ? 'Iris' : 'Cell' }}</el-divider>
            <el-row :gutter="16">
              <el-col :md="12" :lg="8" :sm="24" :xs="24" v-for="n in 6" :key="n" class="mb-16">
                <el-card class="box-card" shadow="hover">
                  <div slot="header" class="flex-center">
                    <p class="flex-1">60356c796f7f2189af0dc31dba39cbdde38091ea</p>
                    <i class="el-icon-delete cp" style="color: #999;"></i>
                  </div>
                  <div class="flex-center">
                    <el-tag closable v-for="o in 4" :key="o" class="mr-8">备注</el-tag>

                    <el-popover placement="top-end" width="200" trigger="click">
                      <div class="flex-center">
                        <el-input class="mr-8"></el-input>
                        <el-button icon="el-icon-check" circle size="mini"></el-button>
                      </div>
                      <el-tag slot="reference" class="cp" style="background: #fff;">
                        <i class="el-icon-plus"></i>
                      </el-tag>
                    </el-popover>
                    <div class="flex-1"></div>

                    <el-popover placement="top-end" width="80" trigger="click">
                      <div>
                        <el-form label-position="top">
                          <el-form-item label="所属链">
                            <el-radio-group>
                              <el-radio style="display:block;" :label="3">Cosmos</el-radio>
                              <el-radio style="display:block;" :label="6">Kava</el-radio>
                              <el-radio style="display:block;" :label="9">Iris</el-radio>
                              <el-radio style="display:block;" :label="9">Cell</el-radio>
                            </el-radio-group>
                          </el-form-item>
                          <el-form-item style="margin-bottom: 0;">
                            <el-button type="primary" plain size="mini" style="width: 100%;">确定</el-button>
                          </el-form-item>
                        </el-form>
                      </div>
                      <i slot="reference" class="el-icon-refresh cp" style="color: #999;"></i>
                    </el-popover>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.address-header {
  align-items: flex-end;
}
.address-title {
  font-size: 18px;
}
.address-subtitle {
  font-size: 14px;
  color: #999;
}
.address-remark {
  font-size: 14px;
  color: #999;
}
.address-user-item {
  padding: 16px;
  border-left: 4px solid #f5f6f8;
}
.address-user-item:hover {
  background: #fff;
}
.address-user-item-active {
  background: #fff;
  border-left: 4px solid #6658dd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.address-aside {
  border-right: 1px solid #eee;
  padding-right: 16px;
}
</style>