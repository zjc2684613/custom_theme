import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={
  color:"#545c64",

}
const mutations={
  setColor(state,color){
      state.color=color;
  },
}

export default new Vuex.Store({
  state,mutations
})