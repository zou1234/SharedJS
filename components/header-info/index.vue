<template>
  <div class="header-info">
    <div class="header-info__left">
      <span>SharedJS</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>
.header-info{
  height: 70px;
  line-height: 70px;
  background: #a24545;
  box-sizing: border-box;
}

.header-info__left{
  width: 70%;
  height: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  min-width: 1080px;

}

.header-info__left span{
  font-size: 30px;
  font-weight: 600;
  color: #f3dfdf;
}
</style>
