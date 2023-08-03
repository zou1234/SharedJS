import { sharedSuppleMonth } from "@/main-library/core/array-operation/index"
import { sharedGetHttpString } from "@/main-library/core/string-operation/index"

// sharedGetHttpString 方法测试
export function sharedGetHttpStringTEST() {
  const data =  sharedGetHttpString("title")
  console.log("sharedGetHttpString方法测试", data);
}
// sharedSuppleMonth 方法测试
export function sharedSuppleMonthTEST() {
  const data = [
    {
      "YD": 4,
      "LINGSQY": 211
    },
    {
      "YD": 5,
      "LINGSQY": 231
    },
    {
      "YD": 6,
      "LINGSQY": 271
    }
  ]

  console.log("sharedSuppleMonth方法测试", sharedSuppleMonth(data, 'YD'))
}

