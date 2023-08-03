import request from '@/common/global-tools/request.js'
import {sourceData} from '../data/index'
import {
  sharedAxiosRequest,
  sharedActionSheetData,
  sharedScheduleBarData,
  sharedBarLineData,
  sharedMultiPieData
} from "@/main-library/core/business-process/index"


// sharedAxiosRequest 方法测试
export async function sharedAxiosRequestTEST() {
  const aa = await sharedAxiosRequest({
    request: request,
    method: "GET",
    url: '/commonQueryController/commonQuery?query_key=yf-zrzy-czks-006',
    param: {LX: 1, px: 1},
  })
  console.log(aa);
}

// sharedActionSheet 方法测试
export async function sharedActionSheetDataTEST() {
  const configData = [
    {
      label: "name",
      value: 'ND',
      unit: '年'
    }]

  const data =  await sharedActionSheetData({
    request: request,
    method: "GET",
    url: '/shared/shared-action-sheet',
    // query_key: 'yf-zrzy-zygl-tdgy-003',
    configData
  })

  console.log("sharedActionSheetData方法测试", data);
}

// sharedScheduleBarData 方法测试
export async function sharedScheduleBarDataTEST() {
  const configData = [
    {
      label: "name",
      value: 'KQMJ',
      unit: '年'
    },
    {
      label: "value",
      value: 'GS',
      unit: '%'
    }]

  const data =  await sharedScheduleBarData({
    request: request,
    method: "GET",
    url: '/shared/shared-bar-line',
    // query_key: 'yf-zrzy-czks-006',
    param: {
      LX:'1',
      px:'1',
    },
    configData
  })

  console.log("sharedScheduleBarData方法测试", data);

}

// sharedBarLineDataTEST 方法测试
export async function sharedBarLineDataTEST() {
  const data =  await sharedBarLineData({
    request: request,
    // query_key: 'yf-zrzy-czks-003',
    url: '/shared/shared-bar-line',
    method: 'GET',
    rowData: 'SZD',
    xUnitCustom: '今年xx数据',
    format: [
      {
        label: '持有',
        value: 'KSS',
        type: 'bar'
      },
      {
        label: '面积',
        value: 'KQMJ',
        type: 'line',
        yAxisIndex: 1
      }
    ]
  })

  console.log("sharedBarLineData方法测试", data);
}

// sharedMultiPieChartData 方法测试
export async function sharedMultiPieDataTEST() {
  const data =  await sharedMultiPieData({
    request: request,
    // 后端接口地址
    // query_key: 'yf-zrzy-czks-005',
    url: '/shared/shared-multi-pie',
    // 后端接口匹配字段
    format: {
      label: 'MZ',
      value: 'SL',
    },
  })

  console.log("sharedMultiPieData方法测试", data);
}
