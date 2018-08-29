<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <form @submit.prevent="startGame">
      <input type="text" v-model="newGame.playerName">
    </form>
    <div class="row">
     <PlayerHand class="col-6"/> 
    <EnemyHand class="col-6"/>
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
  methods: {
    fight() {
      this.$store.dispatch("fight", {});
    },

    startGame() {
      this.$store.dispatch("newGame", this.newGame);
    }
  },

  components: {
    PlayerHand,
    EnemyHand
  }
};
</script>
