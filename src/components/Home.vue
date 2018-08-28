<template>
  <div class="Home">

  </div>
</template>

<script>
export default {
  name: 'Home',
data(){
  return {
	player: {},
	playerCards: {},
	opponent: {},
	opponentCards: {}
  }
},
methods: {
setPlayer(player){
  this.activePlayer = player
},
setOpponent(opponentId){
  this.activeOpponent = opponent
},
newGame(){
  this.$store.dispatch('newGame', )
}
},
components: {

}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
