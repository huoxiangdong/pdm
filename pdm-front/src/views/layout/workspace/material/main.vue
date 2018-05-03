<template lang="pug">
//  v-for="(value,key,index) in materialData"
    :key="value.id"
    v-bind="getData(value)"
    :cardNum="getCardNum(index)"
    :cardHeaderTitle="key"
    :inputSchema="inputSchema"
x-card(
        :baseData="materialData"
        :initInputData="initInputData"
        
        :inputGrid=`{ 
          display: "grid",
          "grid-template-columns": "1fr 1fr 1fr", 
          "grid-row-gap": "1rem",
          "grid-column-gap": "2rem" }`)
  
  //- w-Card(
  //-   id="2"
  //-   cardHeaderTitle="采购(或外协)参数"
  //-   :inputGrid="inputGrid_1"
  //-   :baseData="materialData['采购(或外协)参数']"
  //-   :initInputData="initInputData"
  //-   :inputSchema="inputSchema")
  //- w-Card(
  //-   cardHeaderTitle="状态控制"
  //-   :inputGrid="inputGrid_1"
  //-   :baseData="materialData['状态控制']"
  //-   :initInputData="initInputData"
  //-   :inputSchema="inputSchema")
  //- w-Card(
  //-   cardHeaderTitle="销售数量控制"
  //-   :inputGrid="inputGrid_1"
  //-   :baseData="materialData['销售数量控制']"
  //-   :initInputData="initInputData"
  //-   :inputSchema="inputSchema")
  //- w-Card(
  //-   cardHeaderTitle="生产相关参数"
  //-   :inputGrid="inputGrid_1"
  //-   :baseData="materialData['生产相关参数']"
  //-   :initInputData="initInputData"
  //-   :inputSchema="inputSchema")
  //- w-Card(
  //-   cardHeaderTitle="库存有关参数"
  //-   :inputGrid="inputGrid_1"
  //-   :baseData="materialData['库存有关参数']"
  //-   :initInputData="initInputData"
  //-   :inputSchema="inputSchema")
  //- w-Card(
  //-   cardHeaderTitle="装箱信息"
  //-   :inputGrid="inputGrid_1"
  //-   :baseData="materialData['装箱信息']"
  //-   :initInputData="initInputData"
  //-   :inputSchema="inputSchema")
  //- w-Card(
  //-   cardHeaderTitle="财务参数"
  //-   :inputGrid="inputGrid_1"
  //-   :baseData="materialData['财务参数']"
  //-   :initInputData="initInputData"
  //-   :inputSchema="inputSchema")
</template>

<script>

import { mapState, mapActions } from "vuex";
import Data from "./data";
import Schema from "./schema";
export default {
  mixins: [Schema],
  data() {
    return {
      materialData: Data.data,
      initInputData: Data.initData,
     /*  inputGrid_1: {
        display: "grid",
        "grid-template-columns": "1fr 1fr",
        "grid-row-gap": "10px",
        "grid-column-gap": "100px"
      } */
    };
  },
  computed: {
    //...mapState(["navTwoIndex"])
    /*  materialData:function() {
      let obj = []
        Object.keys(Data).map(data => {
               Data[data].map(data => {
                    obj.push(data)               
               })     
        })
        return obj
    } */
  },
  methods: {
    // getCardNum(index) {
    //   return index;
    //   //console.log(index)
    // },
    // getData(val) {
    //   console.log("val值");
    //   console.log(val);
    // }
  },
  // watch: {
  //   // 观察菜单状态
  //   navTwoIndex: function(val, oldVal) {
  //     switch (val) {
  //       case 7:
  //         /* let obj = {}
  //       Object.keys(this.materialData).map((data,index) => {
  //         //return this.materialData[data]
  //         return obj[data] = this.materialData[data]
  //       }) */
        
  //         let obj = {};
  //         for (let item in this.materialData) {
  //           this.materialData[item].map(data => {
  //             obj[data.key] = data.value;
  //           });
  //         }
  //         console.log(obj);
  //         break;
  //     }
  //   }
  // }
};
</script>



