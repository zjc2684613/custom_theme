<template>
  <div class="hello">
    <div class="block">
      <el-color-picker v-model="color" @change="changeColor"></el-color-picker>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      color:this.$store.state.color,
    }
  },
  methods:{
    changeColor(item){
      this.$store.commit('setColor',this.color);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="sass" scoped>
@import "../assets/css/hello_world.sass";
</style>
