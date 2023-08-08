/**
 * @description: 更改一个数组对象里的属性名，支持多个，原始属性会保留。
 * @param: {sourceData} 源数据
 * @param: {configData} 配置项 label -- 前端要生成属性名, value -- 接口数据源被改的属性名
 * */
export function sharedArrayOperate({sourceData, configData}) {
  if (sourceData && sourceData.length > 0) {
    return sourceData.map((v) => {
      if (Array.isArray(configData) && configData.length > 0) {
        let obj = {}

        for (let item of configData) {
          if(item.unit){
            obj[item.label] = v[item.value] + `${item.unit}`
          }else {
            obj[item.label] = v[item.value]
          }
        }

        return obj

      } else {
        const {label, value, unit} = configData
        return {
          [label]: v[value] + unit
        }
      }
    })

  } else {
    return sourceData
  }
}

/**
 * @description: 浅拷贝
 * @param: {data} 数据源
 * */
export function sharedShallowCopy(data) {
  if (typeof data !== 'object' || data === null) return data;
  return Object.assign({}, data)
}

/**
 * @description: 深拷贝
 * @param: {data} 数据源
 * */
export function sharedDeepCopy(data) {
  if (typeof data !== 'object' || data === null) return data;

  let copy = Array.isArray(data) ? [] : {};
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      copy[key] = sharedDeepCopy(data[key]);
    }
  }

  return copy;
}

/**
 * @description: 数据补月
 * @param: {data} -- 数据
 * @param: {key} -- 要补月份字段key
 * */
export function sharedSuppleMonth(data, key) {
  let arr = [];
  for (let i = 1; i < 13; i++) {
    let sameData = data.find((v) => i === v[key]);
    sameData ? arr.push(sameData) : arr.push({[key]: i});
  }
  return arr
}

/**
 * @description: 数组去重
 * @param: {data} -- 数据
 * @param: {key} Function -- 函数
 * */
export function sharedArrayUnique(data, key) {
  if (Array.isArray(data) && data.length > 0) {
    const set = new Set();

    return data.filter(item => {
      const k = key ? key(item) : item;
      return !set.has(k) && set.add(k);
    });

  } else {
    return data
  }
}

/**
 * @description: 数组排序
 * @param{data}: Array  -- 数据
 * @param{key}: String -- 需要排序的key值
 * @param{order}: String  asc -- 升序  desc -- 降序
 * */
export function sharedArraySort(data, key, order = 'asc') {
  return data.sort((a, b) => {
    const x = key ? a[key] : a;
    const y = key ? b[key] : b;
    const result = x < y ? -1 : x > y ? 1 : 0;
    return order === 'desc' ? -result : result;
  });
}

/**
 * @description: 获取两个数组对象的交集
 * @param{arr1}: Array  -- 数据1
 * @param{arr2}: Array -- 数据2
 * @param{key}: String 对象情况下传的key值
 * */
export function sharedArrayInterBy(arr1, arr2, key) {
  if (key) {
    return arr1.filter(item1 => arr2.find(item2 => item1[key] === item2[key]));
  } else {
    return arr1.filter(item => arr2.includes(item));
  }
}

/**
 * @description: 获取两个数组对象的并集
 * @param{arr1}: Array  -- 数据1
 * @param{arr2}: Array -- 数据2
 * @param{key}: String 对象情况下传的key值
 * */
export function sharedArrayUnionBy(arr1, arr2, key) {
  if (key) {
    return Array.from(new Set([...arr1, ...arr2].map(item => item[key])));
  } else {
    return Array.from(new Set([...arr1, ...arr2]));
  }
}

/**
 * @description: 获取两个数组对象的差集，即 arr1 中有而 arr2 中没有的元素
 * @param{arr1}: Array  -- 数据1
 * @param{arr2}: Array -- 数据2
 * @param{key}: String 对象情况下传的key值
 * */
export function sharedArrayDiffBy(arr1, arr2, key) {
  if (key) {
    return arr1.filter(item1 => !arr2.find(item2 => item1[key] === item2[key]));
  } else {
    return arr1.filter(item => !arr2.includes(item));
  }
}

/**
 * @description: 获取数组中最多的元素
 * @param{data}: Array  -- 数据
 * @param{key}: String 对象情况下传的key值
 * */
export function sharedArrayMaxNum(data, key) {
  let arr = {}, max = null;

  for(let v of data){
    const itemVal = key ? v[key] : v

    if(arr[itemVal]){
      arr[itemVal] ++
      max = arr[itemVal] > arr[max] ?  arr[max] : itemVal
    }else{
      arr[itemVal] = 1
    }

  }
  return max
}

// let data = [1,2,3,4,5,6,6,6,7,7,7,7,7]
// console.log(sharedArrayMaxNum(data));
// let data = [
//   {name: 1},
//   {name: 1},
//   {name: 2},
//   {name: 3},
//   {name: 4},
//   {name: 2},
//   {name: 1},
// ]
// console.log(sharedArrayMaxNum(data));

