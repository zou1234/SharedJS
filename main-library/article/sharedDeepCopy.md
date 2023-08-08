# sharedDeepCopy(data)
深拷贝是指创建一个新对象，新对象与原对象完全独立，互不影响。 一种常见的实现深拷贝的方式是使用递归来遍历原对象的所有属性，并将其复制到新对象中。这样可以确保所有嵌套的引用类型数据都被正确复制。

## 参数
* data (Array|Object)：源数据

## 引入
```javascript
import { sharedDeepCopy } from "SharedJS";
```
## 例子
```javascript
let object = {
  "name": '张飞',
  "skill": ['五虎上将', '力气大']
}

const deepCopyCopyObject = sharedDeepCopy(object)

console.log(deepCopyCopyObject);

// 输出结果 { "name": '张飞', "skill": ['五虎上将', '力气大']}

deepCopyCopyObject.name = "赵云"

deepCopyCopyObject.skill[1] = "会用长枪"

console.log(object);

// 输出结果 { "name": '张飞', "skill": ['五虎上将', '力气大']}
// 不会影响 object
``` 
