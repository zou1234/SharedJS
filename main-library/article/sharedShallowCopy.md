# sharedShallowCopy(fn, delay)
浅拷贝是指创建一个新对象，新对象与原对象共享引用类型的数据。当修改新对象中的引用类型数据时，原对象也会受到影响。
一种简单的实现浅拷贝的方式是使用 Object.assign 方法或展开运算符 ...。它们都可以将一个或多个对象的属性复制到目标对象中。

## 参数
* data (Array|Object)：源数据

## 引入
```javascript
import { sharedShallowCopy } form "sharedjs";
```
## 例子
```javascript
let object = {
  "name": '张飞',
  "skill": ['五虎上将', '力气大']
}

const shallowCopyObject = sharedShallowCopy(object)

console.log(shallowCopyObject);

// 输出结果 { "name": '张飞', "skill": ['五虎上将', '力气大']}

shallowCopyObject.name = "赵云"

shallowCopyObject.skill[1] = "会用长枪"

console.log(object);

// 输出结果 { "name": '张飞', "skill": ['五虎上将', '会用长枪']} 

// object skill属性发生了变化

``` 
