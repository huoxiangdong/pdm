<template>
<el-dialog
  
  :visible.sync="isOpenAddLayer"
  width="30%"
  :before-close="handleClose"
  :show-close="false"
  >
  <el-tag type="info"  slot="title" style="width:100%;border-radius: 0px;color: #fff;background-color: #909399;font-size: 13px;font-weight: bolder;">添加工序</el-tag>
  <span>请输入工序信息</span>
  <span slot="footer" class="dialog-footer">
    <!-- <el-button @click="openAddLayer">取 消</el-button> -->
    <el-button type="info" size="mini"  @click="openAddLayer">应用</el-button>
  </span>
</el-dialog>

</template>

<script>
 import { mapActions } from 'vuex'
  export default {
    data() {
      return {
        dialogVisible: false
      };
    },
    computed: {
        isOpenAddLayer() { return this.$store.state.isOpenAddLayer }
    },
    methods: {
        ...mapActions([
            'openAddLayer'
        ]),
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  };
</script>

<style lang="stylus" scoped>
 .el-dialog__header
    padding: 0px


</style>
