# sharedArrayUnique(data, key)
数组去重

## 参数
1. **data** (Array) ：数据
2. **key** (Function)： 数组对象情况，属性名

## 引入
```javascript
import { sharedArrayUnique } from "sharedjs";
```

## 普通数组

```javascript
let arr1 = [1, 2, 3, 3, 4, 5, 5];

console.log(sharedArrayUnique(arr1)); 

// 输出 [1, 2, 3, 4, 5]
```

## 数组对象去重

```javascript
let arr2 = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'Alice' },
  { id: 3, name: 'Charlie' }
];
console.log(sharedArrayUnique(arr2, item => item.id)); 

// 输出 [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}, {id: 3, name: 'Charlie'}]

console.log(sharedArrayUnique(arr2, item => item.name));

// 输出 [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}, {id: 3, name: 'Charlie'}]

console.log(sharedArrayUnique(arr2)); 

// 输出 [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}, {id: 1, name: 'Alice'}, {id: 3, name: 'Charlie'}]
```

