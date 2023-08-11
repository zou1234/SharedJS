# sharedScheduleBarData(Object)
**对 ManyUI 组件库 【schedule-bar-chart】组件进行接口请求封装，返回目标数据**

![](/SharedJS/markdown/sharedScheduleBarData1-1.png)

## 参数（Object）
1. **request** (Object)：请求方法体，目前仅axios传入，可全局配置，配置后可不用传
2. **url** (String)： 接口服务地址
3. **method** (String)： 请求方式 “GET” 和 “POST”, 默认GET请求
4. **param** (Object)： 接口请求参数
5. **query_key** (String)：后端 query_key 值（业务特殊定制，其他公司或个人可不予理会）
6. **configData** (Object | Array)： 详细请参考 sharedArrayOperate

## 返回值（Object）
1. **newData** (Object)：处理后的新数据，可直接用
2. **rawData** (Object)：原接口返回数据

## 引入
```javascript
import { sharedScheduleBarData } form "sharedjs";
```
## 例子
![](/SharedJS/markdown/sharedScheduleBarData1-2.png)
```html
<schedule-bar-chart
  unit="起"
  :data="data"
  :total="700"
>
</schedule-bar-chart>
``` 

```javascript
import { sharedScheduleBarData } from "SharedJS";

export default {
  name: "bar-line-chart-abutment",
  data() {
    return {
      data: [],
    };
  },

  methods: {
    async getData(){
      const data =  await sharedScheduleBarData({
        url: '/demo-data/large-scree/schedule-bar-chart',
        method: 'GET',
        configData:[
          {
            label: "name",
            value: 'ND',
            unit: '年'
          },
          {
            label: "value",
            value: 'JYJJ',
            unit: 0
          }]
      })
      console.log(JSON.stringify(data.newData));
      console.log(data);

      this.data = data.newData

    }
  },

  created(){
    this.getData()
  }
}
```

输出结果，和原来接口数据

![](/SharedJS/markdown/sharedScheduleBarData1-3.png)


