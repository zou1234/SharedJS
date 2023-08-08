# sharedBarLineData(Object)

**对 ManyUI 组件库【bar-line-chart】柱线图组件接口统一处理。**

![](/SharedJS/markdown/sharedBarLineData1-2.png)

注意！ 部分特殊数据结构情况无法满足，这个需要自己请求数据处理。

## 参数
1. **request** (Object)：请求方法体，目前仅axios传入，可全局配置，配置后可不用传
2. **url** (String)： 接口服务地址
3. **query_key** (String)：后端 query_key 值。url 和 query_key只能传一种
4. **method** (String)： 请求方式 “GET” 和 “POST”, 默认GET请求
5. **param** (Object)： 接口请求参数
6. **rowData** (String)：x轴对应后端字段
7. **xUnitCustom** (String)：x轴数据添加文案，例如传 ”第xx季度“ 变成 ”第1季度“, ”xx“会被替换为后端返回的rowData变量
8. **format** (Array)： 后端对应字段：label = 文案, value = 数值; 例如{label: 'WDZ', value: 'QY'}

## 返回值（Object）
1. **data** (Object)：后端接口原始数据
2. **xData** (Object)：组件 xData 数据
2. **yData** (Object)：组件 yData 数据

## 引入
```javascript
import { sharedBarLineData } from "SharedJS";
```

## 使用案例 

### 1、柱状图折线图混合
注意！request 一般项目会全部配置，可不用传。

![](/SharedJS/markdown/sharedBarLineData1-3.png)

```html
 <bar-line-chart
      height="250px"
      y-unit="单位：个"
      :yData="yData"
      :xData="xData"
      :barWidth="16"
      barGapNum="0"
      yLineColor="transparent"
      xAxisLineColor="rgba(255,255,255,0.2)"
      fontColor="rgba(255,255,255,0.70)"
>
</bar-line-chart>
```

```javascript

import { sharedBarLineData } from "SharedJS";

export default {
  name: "bar-line-chart-abutment",
  data() {
    return {
      xData: [],
      yData: []
    };
  },

  methods: {
    async getData(){
      const data =  await sharedBarLineData({
        url: '/demo-data/large-scree/bar-line-chart',
        method: 'GET',
        rowData: 'YD',
        xUnitCustom: 'xx月',
        format: [
          {
            label: '分类1',
            value: 'JYJE',
            type: 'line',
          },
          {
            label: '分类2',
            value: 'JYJE_TB',
            type: 'line',
          },
          {
            label: '分类3',
            value: 'JYJE',
            type: 'bar',
          },

          {
            label: '分类4',
            value: 'JYJJ_HB',
            type: 'bar',
          }
        ]
      })

      this.yData = data.yData
      this.xData = data.xData
    }
  },

  created(){
    this.getData()
  },
}
```


### 2、带数字案例
![](/SharedJS/markdown/sharedBarLineData1-4.png)

```html
<bar-line-chart vertical
                :yData="yData"
                :xData="xData"
                y-unit="单位：个"
                verticalGridTop="30"
                xLineColor="transparent"
                :yAxisLine="{show: true, lineStyle: { color: '#E6E6E6'}}"
                barWidth="14"
></bar-line-chart>
```

```javascript
import { sharedBarLineData } from "SharedJS";

export default {
  name: "bar-line-chart-abutment",
  data() {
    return {
      xData: [],
      yData: []
    };
  },

  methods: {
    async getData(){
      const data =  await sharedBarLineData({
        url: '/demo-data/large-scree/bar-line-chart',
        method: 'GET',
        rowData: 'YD',
        xUnitCustom: 'xx月',
        format: [
          {
            name: '分类1',
            value: 'JYJE',
            stack: 'total',
            type: 'bar',
            label: {
              show: true,
              position: 'insideRight',
              padding: [2, 4, 0, 0],
            },
          },
          {
            name: '分类2',
            value: 'JYJJ_HB',
            stack: 'total',
            type: 'bar',
            label: {
              show: true,
              position: 'insideRight',
              padding: [2, 4, 0, 0],
            },
          }
        ]
      })

      this.yData = data.yData
      this.xData = data.xData
    }
  },

  created(){
    this.getData()
  },
}
```

后端接口数据展示，正常都是这种结构

![](/SharedJS/markdown/sharedBarLineData1-1.png)
