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
           @click="handleClickGoMD(item)"
       >{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "index",
  data(){
    return{
      current:'sharedAntiShake',
      menuList: [
        { name: 'performance(性能)', attribute: "class"},
        { name: 'sharedAntiShake' },
        { name: 'sharedThrottle' },
        { name: 'sharedThrottle' },
        { name: 'sharedThrottle' },
        { name: 'sharedThrottle' },
        { name: 'sharedThrottle' },
        { name: 'sharedThrottle' },
        { name: 'sharedThrottle' },
        { name: 'sharedThrottle' },
        { name: 'sharedThrottle' },
        { name: 'sharedThrottle' },
        { name: 'sharedThrottle' },
        { name: 'sharedThrottle' },
        { name: 'sharedThrottle' },
        { name: 'sharedThrottle' },
        { name: 'sharedThrottle' },
        { name: 'sharedThrottle' },
        { name: 'sharedThrottle' },
        { name: 'sharedThrottle' },
        { name: 'sharedThrottle' },
        { name: 'sharedThrottle' },
        { name: 'sharedThrottle' },
        { name: 'sharedThrottle' },
        { name: 'sharedThrottle' },
        { name: 'sharedThrottle' },
        { name: 'sharedThrottle' },
        { name: 'sharedThrottle' },
        { name: 'sharedThrottle' },
        { name: 'sharedThrottle' },
        { name: 'sharedThrottle' },
        { name: 'sharedThrottle' },
        { name: 'sharedThrottle' },
        { name: 'sharedThrottle' },
        { name: 'sharedThrottle' },
        { name: 'sharedThrottle' },
        { name: 'sharedThrottle' },
        { name: 'sharedThrottle' },
        { name: 'sharedThrottle' },
      ]
    }
  },
  methods:{
    handleClickGoMD(item){
      this.current = item.name
      this.$emit('get-markdown-data', item)
    }
  }
}
</script>

<style scoped>
.menu-info{
  width: 220px;
  display: inline-block;
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

.is-active-menu, .menu-info__content-item:hover{
  color: red;
}

.is-class{
  color: rgba(28, 27, 27);
  font-weight: 600;
  font-size: 20px;
}


</style>
