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
    game: {},
    enemyCard: {},
    playerCard: {}

  },
  mutations: {
    setGame(state, data) {
      state.game = data
    },
    setEnemyCard(state, enemyCard) {
      state.enemyCard = enemyCard
    },
    setPlayerCard(state, playerCard) {
      state.playerCard = playerCard
    }
  },
  actions: {
    newGame({ commit, dispatch }, newGame) {
      cardsApi.post('', newGame)
        .then(res => {
          commit('setGame', res.data)
        })
    },
    getGame({ commit, dispatch }, gameId) {
      cardsApi.get('/' + gameId)
        .then(res => {
          commit('setGame', res.data.data)
        })
    },
    changeEnemyCard({ commit, dispatch }, enemyCard) {
      commit('setEnemyCard', enemyCard)
    },
    changePlayerCard({ commit, dispatch }, playerCard) {
      commit('setPlayerCard', playerCard)
    },
    battle({ commit, dispatch, state }, battle) {
      cardsApi.put('/'+state.game.id, battle)
      .then(res=>{
        dispatch('getGame', state.game.id)
      })
    }
  }
})
