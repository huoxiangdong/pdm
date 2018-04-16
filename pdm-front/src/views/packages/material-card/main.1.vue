<template lang="pug">
  // :model="observerValue" 
  el-card(class="box-card" :body-style="bodyStyle" )
   div(slot="header")
      span(style="font-size:13px;font-weight:bolder;") {{ cardHeaderTitle }}
      
   el-form(class="el-from" )
    div(:style="inputGrid")
      //el-form-item( v-for="(value, key, index) in baseData" :key="index" v-bind="getInputIndex(index)")
         el-input(v-model="value['value']" )
            template(slot="prepend") {{ value['title'] }}
      el-form-item( v-for="(value, key, index) in renderInputs" :key="value.id" v-bind="getInputs(value)")   
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
      required: true
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
  

             let obj = {};
  
       Object.values(this.baseData).map((data,index) => {
        
          //console.log(Object.assign(obj,Object.values(this.baseData)[index]))
            obj[data.key] = data.value;
           // return Object.values(this.baseData)[index]
          
        });
        
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
        Object.values(this.baseData).map((data, index) => {
          data.value = val[Object.keys(val)[index]];
        });
        console.log(
          `修改 or 响应后变化的input数据:\n`,
          JSON.stringify(this.observerValue, null, 2)
        );
      }
    },
    // input渲染
    renderInputs() {
      let { baseData, inputSchema: schema } = this;
      //console.log(this)
      //for(let item in baseData) {
       // console.log(this.baseData)
      //}
      
      let renderInputs = Object.values(baseData).map((data,index) => {
       /*  console.log("自定义组件");
        console.log(schema[data.key],data); */
        // 自定义input融入
        let mix = schema && schema[data.key] || {} ;
        //console.log("自定义");
        //console.log(mix) 
        const item = Object.assign({}, data, mix);
        //return item
          //console.log("融合的对象")
          //console.log(item) 
        
      
        return item;
      });

      return renderInputs;
    }
  },
  methods: {
    ...mapActions(["getNavTwoIndex","getObserverValues"]),
    // input数据保存提交
    saveForm() {
      if (this.$rest) {
        this.$rest.submit
          .addMaterial(this.observerValue)
          .then(res => {
            if (!res.success) {
              console.log(JSON.stringify(res, null, 2));
              this.$message.error(res.message);
            } else if (res.data !== null && res.data.errno) {
              console.log(JSON.stringify(res, null, 2));
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
          }); // 提交请求响应过程
      } else {
        this.$message.error("你真厉害，被你发现了😝");
        return false;
      }
    },
    // 查询input数据
    queryInputData() {
      if (this.$rest) {
        this.$rest.submit
          .queryMaterial(this.observerValue) // 提交
          .then(res => {
            if (!res.success) {
              this.$message.error(res.message);
            } else {
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
    // 初始菜单状态
    initNavSate(val, oldVal) {
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
          /*  console.log("zheli ")
          console.log(this.baseData); */
         /* console.log("zheli ")
          console.log(this.baseData); */
         //this.$emit('sendObserverValue',this.baseData)
          console.log(
            `当前input内数据:\n`,
            JSON.stringify(this.observerValue, null, 2)
          );
          this.initNavSate(val, oldVal);
          break;
        case 2: // 新增
          this.observerValue = this.initInputData;
          this.initNavSate(val, oldVal);
          break;
        case 3: // 保存
          this.saveForm();
          this.initNavSate(val, oldVal);
          break;
        case 4: // 查询
          this.queryInputData();
          this.initNavSate(val, oldVal);
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.el-card__header 
  background-color: #999999
  padding: 5px 20px

.el-form-item 
    margin-bottom: 2px
.box-card 
  margin: 10px 60px

.el-from 
  margin: auto 50px

// title
.el-input-group__prepend 
  width: 80px
  text-align: left

// 工作去卡片多的话使其滚动
.el-carousel__item.is-active 
  overflow-y: auto
  overflow-x: hidden

</style>
