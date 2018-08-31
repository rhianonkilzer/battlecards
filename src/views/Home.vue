<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-12">
        <img alt="Battle Cards" src="../assets/logo-horizontal.png">
      </div>
      <div class="col-12" v-if="!game.winner">
        <form @submit.prevent="startGame">
          <input type="text" v-model="newGame.playerName">
        </form>
      </div>
      <div class="justify-content-center col-12" v-if="game.winner">
        <h1>WINNER</h1>
        <h3>{{game.winner.name}}</h3>
      </div>
      <PlayerHand class="col-12" v-if="!game.winner"/>
      <div class="col-12 justify-content-center mt-5" v-if="!game.winner">
        <button class="fight-btn" v-if="playerCard.id && enemyCard.id" @click="battle">FIGHT</button>
      </div>
      <EnemyHand class="col-12 mt-5" v-if="!game.winner"/>
    </div>
  </div>
</template>

<script>
  import PlayerHand from "@/components/PlayerHand";
  import EnemyHand from "@/components/EnemyHand";

  export default {
    name: "home",
    data() {
      return {
        playerHand: {},
        enemyHand: {},
        newGame: {
          playerName: "",
          opponents: 1,
          set: 4
        }
      };
    },
    computed: {
      enemyCard() {
        return this.$store.state.enemyCard
      },
      playerCard() {
        return this.$store.state.playerCard
      },
      player() {
        return this.$store.state.game.players[0]
      },
      enemy() {
        return this.$store.state.game.players[1]
      },
      game(){
        return this.$store.state.game
      }
    },

    methods: {
      fight() {
        this.$store.dispatch("fight", {});
      },

      startGame() {

        this.$store.dispatch("newGame", this.newGame);
      },
      battle() {
        let attackObject = {
          playerId: this.player.id,
          playerCardId: this.playerCard.id,
          opponentId: this.enemy.id,
          opponentCardId: this.enemyCard.id
        }
        this.$store.dispatch('battle', attackObject);
      }

    },


    components: {
      PlayerHand,
      EnemyHand
    }
  };
</script>
<style scoped>
  .fight-btn {
    font-size: 45px;
    font-family: 'Permanent Marker', cursive;
    background-color: rgb(24, 24, 24);
    color: rgb(255, 255, 255);
    border-radius: 14px;
    border-radius: 14px;
    border-radius: 14px;
    border: 5px solid rgb(151, 119, 71);
  }
</style>


<!-- 
font-family: 'Permanent Marker', cursive;
font-family: 'Gloria Hallelujah', cursive;
font-family: 'Patrick Hand', cursive;
 -->