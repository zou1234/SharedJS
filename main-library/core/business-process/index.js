import {sharedSuppleMonth, sharedArrayOperate} from "@/main-library/core/array-operation";

/**
 * @description：post 请求
 * @param obj: {query_key} 后端 query_key 值
 * @param obj: {param} 接口入参数
 * @param obj: {method} 请求方式 “GET” 和 “POST”
 * @param obj: {url} 接口服务地址
 * @param obj: {request} axios 请求体
 * */
export function sharedAxiosRequest({request, url, param = {}, method = 'GET', query_key}) {
  // 默认读取全局拦截器
  const _request = request || window["sharedRequest"]

  let params = url ?
    {...param} :
    {query_key, ...param};

  return new Promise((resolve, reject) => {
    let queryFn = method == 'POST'
      ? function commonPost(param, url, request) {
        return _request({
          url: url || "/commonQueryController/commonQuery",
          method: "post",
          data: param
        })
      }
      : function commonQuery(param, url, request) {
        return _request({
          url: url || "/commonQueryController/commonQuery",
          method: "get",
          params: param
        })
      };

    queryFn(params, url, request).then(res => {
      if (res.statusCode == 200) {
        resolve(res.result)
      } else {
        reject(res)
      }
    }).catch(err => {
      reject(err)
    })

  })
}

/**
 * @description: 一键式获取 Vant ActionSheet 组件对接
 * @param: {data} 源数据
 * @param: {rearEndKey}
 * @param: {unit}
 * @param: {attrKey}
 * */
export async function sharedActionSheetData({request, url, param, method, query_key, configData}) {
  const data = await sharedAxiosRequest({request, url, param, method, query_key})

  if (data && data.length > 0) {
    const asData = sharedArrayOperate({sourceData: data, configData})
    return {newData: asData, rawData: data}

  } else {
    throw "sharedActionSheetData" + query_key + "接口没有获取到合理数据"
  }
}

/**
 * @description: 一键式获取 schedule-bar-chart 组件对接
 * @param: {query_key}
 * @param: {unit}
 * @param: {attrKey}
 * */
export async function sharedScheduleBarData({request, url, param, method, query_key, configData}) {
  const data = await sharedAxiosRequest({request, url, param, method, query_key})

  if (data && data.length > 0) {
    const asData = sharedArrayOperate({"sourceData": data, configData})
    return {newData: asData, rawData: data}

  } else {
    throw "sharedScheduleBarData" + query_key + "接口没有获取到合理数据"
  }
}

/**
 * @description: ManyUI bar-line-chart柱线图组件接口统一处理
 * @param: {key} 后端固定query_key
 * @param: {param} 接口入参数
 * @param: {year} 年份
 * @param: {method} 请求方式：get post
 * @param: {format} 后端对应字段：label = 文案, value = 数值; 例如：{label: 'WDZ', value: 'QY'}
 * @param: {comMonth} 是否进行自动补全月份, 或者季度操作
 * @param: {xUnitCustom} x轴数据后缀，例如：(xUnitCustom：xx年) => (2023 变成 2023年)
 * */
export async function sharedBarLineData(ob) {
  const {
    request,
    query_key,
    param,
    method,
    format,
    url,
    rowData,
    comMonth,
    xUnitCustom
  } = ob;

  let data = await sharedAxiosRequest({request, query_key, param, method, url}),
    xData = [];

  if (comMonth) data = sharedSuppleMonth(data, (rowData || format[0].x));

  const yData = format.map((v, i) => {
    let targetData = [];

    data.forEach((s) => {
      const _rowData = rowData || v.x
      targetData.push(s[v.value]);

      if (i === (format.length - 1)) {
        if (xUnitCustom) xData.push(xUnitCustom.replace('xx', s[_rowData]))
      }
    });

    return {
      type: v.type,
      name: v.label,
      data: targetData,
    }
  });

  return {xData, yData, data};
}


/**
 * @description: ManyUI multi-pie-chart饼图组件接口统一处理
 * @param: {key} 后端固定query_key
 * @param: {param} 接口入参数
 * @param: {year} 年份
 * @param: {method} 请求方式：get post
 * @param: {format} 后端对应字段：label = 文案, value = 数值; 例如{label: 'WDZ', value: 'QY'}
 * */
export async function sharedMultiPieData({request, query_key, param, method, url, format}) {
  const rawData = await sharedAxiosRequest({request, query_key, param, method, url});

  const newData = rawData.map((v) => {
    return {
      name: v[format.label],
      value: v[format.value],
    }
  });
  return {newData, rawData};
}
