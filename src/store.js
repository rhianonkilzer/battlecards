import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

let cardsApi = Axios.create({
  baseURL: 'https://inspire-server.herokuapp.com/cards',
  timeout: 3000
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    game: {}
  },
  mutations: {
    setGame(state, data){
      state.game = data
    }
  },
  actions: {
    newGame({commit, dispatch}, newGame){
      cardsApi.post('', newGame)
      .then(res=>{
        commit('setGame', res.data)
      })
    },
    getGame({commit, dispatch}, gameId){
      cardsApi.get('/'+gameId)
      .then(res=>{
        commit('setGame', res.data)
      })
    }
  }
})
