<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <form @submit.prevent="startGame">
      <input type="text" v-model="newGame.playerName">

    </form>
    <PlayerHand/>
    <EnemyHand/>
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
        playerName: '',
        opponents: 1,
        set: 4
      }
    };
  },
  methods: {
    fight() {
      this.$store.dispatch("fight", {
      
      });
    },

    startGame(){
      this.$store.dispatch("startGame", this.newGame)
    }
  },

  components: {
    PlayerHand,
    EnemyHand
  }
};
</script>
