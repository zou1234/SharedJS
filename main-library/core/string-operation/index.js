/**
 * @description: 获取http地址头部某个字段
 * @param: {variable} 字段名
 * */
export function sharedGetHttpString(variable) {
  const query = window.location.href;
  if (new RegExp(".*\\b" + variable + "\\b(\\s*=([^&]+)).*", "gi").test(query)) {
    return RegExp.$2;
  } else {
    return false;
  }
}

/**
 * @description: 四舍五入，保留小数点位数
 * @param: {value} 值
 * @param: {places} 小数位数
 * */
export function sharedKeepDecimal(value, places) {
  return Math.round(value * 10 ** places) / 10 ** places;
}

/**
 * @description: 对数值特殊数据处理，保留几位小数
 * null、undefind、空值、NaN等统一返回 “--”
 * @param: {data} 源数据
 * @param: {ident} 自定义返回符号
 * */
export function sharedSpecialVal(data, ident){
  if(data == null || data.length <= 0 || data !== data){
    return ident || "--"
  }else {
    return data
  }
}

/**
 * @description: 单位转换 - 例如：100000 = 10万元, 默认保留2位小数
 * @param {data}: 数据
 * @param {places}: isBillion
 * */
export function sharedFormatNumber(data, places = 2) {
  if (data >= 100000000) {
    const val = data / 100000000
    return Math.round(val * 10 ** places) / 10 ** places + '亿'

  } else if (data >= 10000) {
    const val = data / 10000
    return Math.round(val * 10 ** places) / 10 ** places + '万'

  } else {
    return data.toString();
  }
}
