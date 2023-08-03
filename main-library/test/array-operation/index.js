import {sharedArrayOperate} from "@/main-library/core/array-operation";
import {sourceData} from "@/main-library/test/data";

// sharedArrayOperate 方法测试
export function sharedArrayOperateTEST() {
  const configData = [
    {
      label: "title",
      value: 'ZKZ'
    },
    {
      label: "name",
      value: 'ND',
      unit: '年'
    }]

  const data = sharedArrayOperate({sourceData, configData})

  console.log("sharedArrayOperate方法测试", JSON.stringify(data));
}




