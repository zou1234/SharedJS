# sharedArraySort(data, key)
数组排序

## 参数
1. **data** (Array) ：数据
2. **key** (Function)： 数组对象情况，属性名
2. **order** (String)： asc -- 升序, desc -- 降序

## 引入
```javascript
import { sharedArraySort } from "SharedJS";
```

## 普通数组

```javascript
let arr1 = [3, 1, 4, 2, 5];

console.log(sharedArraySort(arr1));

// 输出 [1, 2, 3, 4, 5]

console.log(sharedArraySort(arr1, null, 'desc')); 

// 输出 [5, 4, 3, 2, 1]
```

## 数组对象排序

```javascript
let arr2 = [
  { id: 3, name: 'Charlie' },
  { id: 1, name: 'Alice' },
  { id: 4, name: 'David' },
  { id: 2, name: 'Bob' }
];

console.log(sharedArraySort(arr2, 'id')); 

// 输出 [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}, {id: 3, name: 'Charlie'}, {id: 4, name: 'David'}

console.log(sharedArraySort(arr2, 'name', 'desc'));

// 输出 [{id: 3, name: 'Charlie'}, {id: 2, name: 'Bob'}, {id: 1, name: 'Alice'}, {id: 4, name: 'David'}]
```

