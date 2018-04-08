<template lang="pug">
  el-breadcrumb(separator="/")
    el-breadcrumb-item(:to="{ path: '/' }") Standard: 
         span MultiConductor
    el-breadcrumb-item Description:
         span 3 # 18 LDPE FS PVC
    el-breadcrumb-item State:
         span Unconfirmed
    el-breadcrumb-item Last Update Date:
         span 01-Aug-2017
    el-breadcrumb-item Last Upadate By:
         span admin
         
</template>

<script>
export default {

}
</script>

<style lang="stylus">
.el-breadcrumb {
  padding: 24px;
}
</style>
