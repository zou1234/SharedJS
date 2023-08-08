# sharedMultiPieData(Object)

**对 ManyUI 组件库 【multi-pie-chart】饼图组件接口统一处理**

![](/SharedJS/markdown/sharedMultiPieData1-2.png)

## 参数
1. **request** (Object)：请求方法体，目前仅axios传入，可全局配置，配置后可不用传
2. **query_key** (String)：后端 query_key 值。url 和 query_key只能传一种
3. **url** (String)： 接口服务地址
4. **method** (String)： 请求方式 “GET” 和 “POST”, 默认GET请求
5. **param** (Object)： 接口请求参数
6. **format** (Array)： 后端对应字段：label = 文案, value = 数值; 例如{label: 'WDZ', value: 'QY'}

## 返回值（Object）
1. **newData** (Object)：处理后的新数据，可直接用
2. **rawData** (Object)：原接口返回数据

## 引入
```javascript
import { sharedMultiPieData } from "SharedJS";
```

## 使用案例

### 1、圆环图对接

![](/SharedJS/markdown/sharedMultiPieData1-1.png)

注意！其他饼图对接一样，这里不多重复介绍

```html
<multi-pie-chart
    unit="家"
    :data="pieData"
    :radius="[40, 70]"
    :outer-edge-line="['80', '81']"
    :islabelLine="false"
    :height="'280px'"
    legend-percent
    :legendText="{
        labelFontSize: 14,
        labelFontColor: '#ffffff',
        valueFontSize: 14,
        valueFontColor: '#ffffff',
      }"
></multi-pie-chart>
```

```javascript
import { sharedMultiPieData } from "SharedJS";

export default {
  data() {
    return {
      pieData: [],
    };
  },

  methods: {
    async getData(){
      const data =  await sharedMultiPieData({
        url: '/demo-data/large-scree/multi-pie-chart',
        method: 'GET',
        format: {
          label: 'SPFLX_MC',
          value: 'JYMJ',
        }
      })

      this.pieData = data.newData
    }
  },

  created(){
    this.getData()
  },
}
```
后端接口返回数据

![](/SharedJS/markdown/sharedMultiPieData1-3.png)
