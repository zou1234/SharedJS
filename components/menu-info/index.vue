<template>
  <div class="menu-info">
    <ul class="menu-info__content">
       <li class="menu-info__content-item"
           v-for="(item, index) in menuList"
           :key="index"
           :class="{
             'is-class' : item.attribute=== 'class',
             'is-active-menu' : current === item.name
           }"
           @click="!item.attribute && handleClickGoMD(item)"
       >
        <span style="font-weight: 600"> {{ item.name }}</span>
         <br/>
         <span style="font-size: 14px">{{item.chinese}}</span>
       </li>
    </ul>
  </div>
</template>

<script>
import { sharedGetHttpString } from "../../main-library/core/string-operation/index"

export default {
  name: "index",
  data(){
    return{
      current:'sharedActionSheetData',
      menuList: [
        { name: '业务接口', attribute: "class"},
        { name: 'sharedAxiosRequest', chinese: 'axios请求' },
        { name: 'sharedActionSheetData', chinese: 'vant下拉' },
        { name: 'sharedScheduleBarData', chinese: 'schedule-bar-chart对接' },
        { name: 'sharedBarLineData', chinese: 'bar-line-chart 对接' },
        { name: 'sharedMultiPieData', chinese: 'multi-pie-chart 对接' },

        { name: '字符串', attribute: "class"},
        { name: 'sharedGetHttpString', chinese: '获取http字符' },
        { name: 'sharedKeepDecimal', chinese: '四舍五入' },
        { name: 'sharedSpecialVal', chinese: '特殊值返回' },
        { name: 'sharedFormatNumber', chinese: '大数值换单位' },
        { name: 'sharedSuppleMonth', chinese: '数据补月' },

        { name: '数组', attribute: "class"},
        { name: 'sharedArrayOperate', chinese: '修改属性名' },
        { name: 'sharedDeepCopy', chinese: '深拷贝' },
        { name: 'sharedShallowCopy', chinese: '浅拷贝'  },
        { name: 'sharedArrayUnique', chinese: '数组去重'  },
        { name: 'sharedArraySort', chinese: '数组排序'  },
        { name: 'sharedArrayInterBy', chinese: '数组交集'  },
        { name: 'sharedArrayUnionBy', chinese: '数组并集'  },
        { name: 'sharedArrayDiffBy', chinese: '数组差集'  },

        { name: '性能', attribute: "class"},
        { name: 'sharedAntiShake', chinese: '防抖' },
        { name: 'sharedThrottle', chinese: '节流'  },
      ]
    }
  },

  methods:{
    handleClickGoMD(item){
      // 替换地址栏 title
      const url = window.location.href;
      window.location.href = url.replace(/(\?|&)title=[^&]+/, `?title=${item.name}`);

      this.current = item.name
      this.$emit('get-markdown-data', item)
    },

    // 识别http地址#号后面，跳到对应菜单去
    goRouter() {
      const routerTitle = sharedGetHttpString("title")
      if(routerTitle) this.current = routerTitle;
    }
  },

  mounted(){
    this.goRouter();
  }

}
</script>

<style scoped>
.menu-info{
  /*width: 420px;*/
  width: 350px;
  display: inline-block;
  box-sizing: border-box;
  padding-top: 15px;
  /*border: 1px solid red;*/
  /*min-height: calc(100vh - 74px);*/
  /*box-shadow: 0 0.5rem 1.375rem #ebedf0;*/
}

.menu-info__content{
  padding: 0 10px;
  height: calc(100vh - 75px);
  overflow-y: auto;
}

.menu-info__content-item{
  font-family: "-apple-system,BlinkMacSystemFont,'Helvetica Neue',Helvetica,Segoe UI,Arial,Roboto,'PingFang SC',miui,'Hiragino Sans GB','Microsoft Yahei',sans-serif";
  padding: 8px 0;
  color: rgba(28, 27, 27, .8);
  cursor: pointer;
  font-size: 16px;
}

.is-active-menu{
  color: red;
}

.menu-info__content-item:hover{
  color: #3f0fea;
}

.is-class{
  color: rgba(28, 27, 27, .9);
  font-weight: 600;
  font-size: 24px;
}
</style>
