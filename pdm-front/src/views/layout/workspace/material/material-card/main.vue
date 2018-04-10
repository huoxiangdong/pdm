<template lang="pug">
// :model="observerValue" 
div
  el-card(class="box-card" :body-style="bodyStyle" v-for="(item, key, index) in renderInputs" :key="item.id" v-bind="getInputs(key)")
   div(slot="header")
      span(style="font-size:13px;font-weight:bolder;") {{ key }}   
   el-form(class="el-from")
    div(:style="inputGrid")
      el-input(
        v-for="obj in item" 
        v-model="obj.value" :key="obj.id"
        size="small"
        v-if="obj['isInput']")
        template(slot="prepend") {{ obj['title'] }}
      component(v-else :is="val.component") 
      //el-form-item( v-for="(value, key, index) in baseData" :key="index" v-bind="getInputIndex(index)")
         el-input(v-model="value['value']" )
            template(slot="prepend") {{ value['title'] }}
      //el-form-item( v-for="(value, key, index) in renderInputs" :key="value.id" v-bind="getInputs(value)")   
         el-input(
           v-model="baseData[key].value" 
           size="small"
           v-if="value['isInput']") 
           template(slot="prepend") {{ value['title'] }}
         component(v-else :is="value.component")       
</template>

<script>
//import wInput from "./wInput";
import { mapState, mapActions } from "vuex";
import { stringify } from 'querystring';
var obj = {}
const INPUT_ITEM = {
  component: {}
};

export default {
  name: "wCard",
  props: {
    baseData: { // 基本数据
      type: [Object, Array],
      default() {
        return {};
      }
    },
    cardHeaderTitle: { // 卡片标题
      type: String,
      //required: true
    },
    inputGrid: Object, // 布局
    initInputData: Object,  // 初始化默认 新增
    inputSchema:Object // 自定义模板
  },

  data() {
    return {
      bodyStyle: { margin: "0px auto", background: "#eee" },
     
      //headerStyle:{'background-color': '#999999','padding':'10px 20px'}
     
    };
  },
  computed: {
    ...mapState(["navTwoIndex"]),
    // 获取input值
    
    observerValue: {
      get: function() {
       let obj = {}
        for(let item in this.baseData) {
             this.baseData[item].map(data => {
               obj[data.key] = data.value         
             })   
        }
  
       /* Object.values(this.baseData).map((data,index) => {
        
          //console.log(Object.assign(obj,Object.values(this.baseData)[index]))
            obj[data.key] = data.value;
           // return Object.values(this.baseData)[index]
          
        }); */
        
        return obj
      },
      set: function(val) {
        let obj = {};
        // for (let key in val) {
        //for(let i=0;i<this.baseData.length;i++) {
        //console.log()
        //this.baseData[i].value =  val[Object.keys(val)[i]]
        //}
        //this.baseData[i].value = val[key]
        //this.baseData[key].value = val[key];
        //}
        /* Object.values(this.baseData).map((data, index) => {
          data.value = val[Object.keys(val)[index]];
        }); */
        for(let item in this.baseData) {
             this.baseData[item].map(data => {
               data.value =  val[data.key]   
             })   
        }
        console.log(typeof val)
        console.log(
          `修改 or 响应后变化的input数据:\n`,
          JSON.stringify(this.observerValue, null, 2)
        );
      }
    },
    queryData() { // 查询条件 一般第一栏为关键字
        let obj = {}
        obj[Object.keys(this.observerValue)[0]] = Object.values(this.observerValue)[0]
        return obj
    },
    // input渲染
    renderInputs() {
      let { baseData, inputSchema: schema } = this;
      //console.log(this)
      //for(let item in baseData) {
       // console.log(this.baseData)
      //}
      /* let renderInputs = {}
     for(let item in this.baseData) {
           this.baseData[item].map(data => {
            let mix = schema && schema[data.key] || {} ;
            const item = Object.assign({}, data,mix);
            renderInputs = item
           })
         } */
        
     /*  let renderInputs = obj.map((data,index) => {
        console.log("自定义组件");
      console.log(data.key)
        // 自定义input融入
        
        //console.log("自定义");
        //console.log(mix) 
        const item = Object.assign({}, data,mix);
        //return item
          //console.log("融合的对象")
          //console.log(item) 
        
      
        return item;
      }); */
     let renderInputs = {}
     Object.keys(baseData).map(title => {
        let item = baseData[title].map(obj => {
             let mix = schema && schema[obj.key] || {} 
             //obj = Object.assign(obj ,mix);
             obj = {...obj,...mix}
             return obj
           })
           console.log('这里')
           console.log(item)
           baseData[title] = item
         })
      return baseData;
    }
  },
  methods: {
    ...mapActions(["getNavTwoIndex","getObserverValues"]),
    // input数据保存提交
    addMaterialData() {
      if (this.$rest) {
        this.$rest.submit
          .addMaterialData(this.observerValue)
          .then(res => {
            if (!res.success) {
              console.log(JSON.stringify(res, null, 2));
              const h = this.$createElement;
              this.$message({
                showClose: true,
                type: "error",
                message: h("div", null, [
                  h("p", null, JSON.stringify(res.data.errors,null,2)),
                  //h("p", { style: "margin-top:3px" }, res.data.errors[0].validatorKey)
                ])
              });
            }else { this.$message.success(res.message) }
          }).catch(err => { this.$message.error(`${err.message}`) }); // 提交请求响应过程
      }else {
        this.$message.error("你真厉害，被你发现了😝");
        return false; }
   },
    queryMaterialData() {  // 查询input数据
      if (this.$rest) {
        this.$rest.submit
          .queryMaterialData(this.queryData) // 提交
          .then(res => {
            if (!res.success) {
              this.$message.error(res.message);
            } else {
              console.log(res.data)
              this.observerValue = res.data;
              this.$message.success(res.message);
            }
          })
          .catch(err => {
            this.$message.error(`${err.message}`);
          });
      } else {
        this.$message.error("😝 我也不晓得咋办了");
        return false;
      }
    },
    updateMaterialData() { // 更新数据
     if (this.$rest) {
        this.$rest.submit
          .updateMaterialData(this.observerValue)
          .then(res => {
            if (!res.success) {
              console.log(JSON.stringify(res, null, 2));
              this.$message.error(res.message);
            } else if (res.data !== null && res.data.errno) { // res.data.errno 为mysql报错
              console.log(JSON.stringify(res, null, 2));
              // message
              const h = this.$createElement;
              this.$message({
                showClose: true,
                type: "error",
                message: h("div", null, [
                  h("p", null, res.data.sqlMessage),
                  h("p", { style: "margin-top:3px" }, res.data.sql)
                ])
              });

            } else {
              this.$message.warning(res.message);
            }
          })
          .catch(err => {
            this.$message.error(`${err.message}`);
          }); // 提交请求响应过程出错
      } else {
        this.$message.error("你真厉害，被你发现了😝");
        return false;
      }
    },
    // 删
    deleteMaterialData() {
       if (this.$rest) {
        this.$rest.submit
          .deleteMaterialData(this.queryData) // 提交
          .then(res => {
            if (!res.success) {
              this.$message.error(res.message);
            } else {
              let username = localStorage.getItem("username")
              this.observerValue = { Creator: username }
              this.$message.success(res.message);
            }
          })
          .catch(err => {
            this.$message.error(`${err.message}`);
          });
      } else {
        this.$message.error("😝 我也不晓得咋办了");
        return false;
      }

    },
    // 初始菜单状态
    initNavState(val, oldVal) {
      this.getNavTwoIndex(~~0);
      console.log("new: %s, old: %s", val, oldVal);
    },
    getInputs(value) {
      /* console.log("renderInputs是");
      console.log(value); */
    },
    getBaseData() {
      console.log("获取到基础数据");
      let props = {};
      this.baseData.map((val, index) => {
        console.log(val);
        props[index] = val;
      });
      return props;
    }
  },
  watch: {
    // 观察菜单状态
    navTwoIndex: function(val, oldVal) {
      switch (val) {
        case 1:
        
       console.log(this.queryData)
         /* Object.keys(this.baseData).map(data => {
           obj[data] = val
         }) */
         
         //console.log(this.observerValue)
         //console.log(this.baseData)
          /*  console.log("zheli ")
          console.log(this.baseData); */
         /* console.log("zheli ")
          console.log(this.baseData); */
         //this.$emit('sendObserverValue',this.baseData)
          console.log(
            `当前input内数据:\n`,
            JSON.stringify(this.observerValue, null, 2)
          );
          this.initNavState(val, oldVal);
          break;
        case 2: // 新增
          this.observerValue = this.initInputData;
          this.initNavState(val, oldVal);
          break;
        case 3: // 保存
          this.addMaterialData();
          this.initNavState(val, oldVal);
          break;
        case 4: // 查询
          this.queryMaterialData();
          this.initNavState(val, oldVal);
          break;
        case 5: // 更新
          console.log('更新')
          this.updateMaterialData();
          this.initNavState(val, oldVal);
          break;
        case 6: 
          this.deleteMaterialData()
         
          this.initNavState(val, oldVal);
      }
    },
    observerValue:function(val,oldVal) {
      //console.log(val,oldVal)
    }
  }
};
</script>

<style lang="stylus" scoped>
div >>>
    .el-card__header 
      background-color: #999999
      padding: 5px 20px
    /* .el-form-item 
        margin-bottom: 2px */
    .box-card 
      margin: 10px 160px
    .el-from 
      margin: auto 50px
    // title
    .el-input-group__prepend 
      width: 80px
      text-align: left   
</style>
