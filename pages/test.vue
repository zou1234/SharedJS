<template>
  <div>
    <button @click="handleClickGO">全部测试</button>
  </div>
</template>

<script>
import {
  sharedAxiosRequestTEST,
  sharedActionSheetDataTEST,
  sharedScheduleBarDataTEST,
  sharedBarLineDataTEST,
  sharedMultiPieDataTEST
} from "@/main-library/test/business-process";

import {
  sharedGetHttpStringTEST,
  sharedSuppleMonthTEST
} from "@/main-library/test/string-operation/index";

import { sharedArrayOperateTEST } from "@/main-library/test/array-operation/index";


export default {
  name: "test",
  async asyncData({$axios}) {
    // try {
    //   console.log("sharedAxiosRequest方法测试",  await sharedAxiosRequestTEST());
    // }catch (err){
    //   console.log(err);
    // }
  },
  methods:{
    async handleClickGO(){
      // business-process
      // await sharedActionSheetDataTEST()
      // await sharedScheduleBarDataTEST()
      await sharedBarLineDataTEST()
      // await sharedMultiPieDataTEST()

      // // array-operation
      // await sharedArrayOperateTEST()
      //
      // // string-operation
      // sharedGetHttpStringTEST()
      // sharedSuppleMonthTEST();

      // performance
    },
  }
}
</script>

<style scoped>

</style>
