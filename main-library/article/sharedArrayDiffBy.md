# sharedArrayInterBy(arr1, arr2, key)
获取两个数组对象的差集，即 arr1 中有而 arr2 中没有的元素

## 参数
1. **arr1** (Array) ：数据1
2. **arr2** (Array)： 数据2
2. **key** (String)： 数组对象情况，属性名

## 引入
```javascript
import { sharedArrayInterBy } from "SharedJS";
```

## 例子

```javascript
let arr1 = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'David' }
];
let arr2 = [
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'David' },
  { id: 5, name: 'Emily' },
  { id: 6, name: 'Frank' }
];

console.log(sharedArrayDiffBy(arr1, arr2));
// 输出 [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}]

console.log(sharedArrayDiffBy(arr1, arr2, 'id'));
// 输出 [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}]
```

