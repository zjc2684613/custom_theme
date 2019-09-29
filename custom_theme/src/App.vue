<template>
  <div id="app">
    <div class="appBox">
      <div class="item1">
        <leftSilder></leftSilder>
      </div>
      <div class="item2">
         <HelloWorld msg="Welcome to Your Vue.js App"/>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import leftSilder from './components/left_slider.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,leftSilder
  }
}
</script>
<style>
#app{
  position: absolute;
  top: 0px;
  left:0px;
  right:0px;
  bottom:0px;
}
.appBox{
  display: flex;
  justify-content: center;
  height: 100%;
}
.item1{
  flex-grow:0;
  width: 201px;
  height: 100%;
  background-color: #545c64;
  overflow-x: scroll;
}
.item2{
  flex-grow:1;
}
</style>
