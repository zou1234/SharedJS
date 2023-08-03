<template>
  <div class="container">
    <!--  头部  -->
    <header-info/>
    <!--  主体  -->
    <!--    <img src="/favicon.ico" alt="/">-->
    <div class="container-content">
      <menu-info class="container-content__menu" @get-markdown-data="getMarkdowndata"/>
      <div class="container-content__markdown" v-html="markDownText"></div>
    </div>
  </div>
</template>

<script>
import '../assets/css/code-default.css'
import { sharedGetHttpString } from "../main-library/core/string-operation/index"

export default {
  name: 'IndexPage',
  data(){
    return{
      title: 'sharedAxiosRequest',
      content: "# title ",
      markdownOption: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: false, // 单双栏模式
        preview: true, // 预览
      },
    }
  },

  computed: {
    markDownText() {
      return require(`../main-library/article/${this.title}.md`).default
    }
  },
  methods:{
    getMarkdowndata({name}){
      this.title = name;
    },

    // 识别http地址#号后面，跳到对应菜单去
    goRouter() {
      const routerTitle = sharedGetHttpString("title")
      if(routerTitle) this.title = routerTitle;
    }
  },
  mounted(){
    this.goRouter();
  }
}
</script>

<style>
.container{
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.container-content{
  display: flex;
  min-width: 1080px;
  height: 800px;
  margin-left: 15%;
}

.container-content__markdown{
  margin-left: 20px;
  overflow-y: scroll;
  height: calc(100vh - 70px);
  width: 100%;
  padding-right: 15%;
  padding-left: 20px;
}

</style>
