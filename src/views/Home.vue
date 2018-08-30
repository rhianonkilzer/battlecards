<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-12">
        <img alt="Battle Cards" src="../assets/logo-horizontal.png">
      </div>
      <div class="col-12">
        <form @submit.prevent="startGame">
          <input type="text" v-model="newGame.playerName">
        </form>
      </div>
      <PlayerHand class="col-12" />
      <div class="col-12 justify-content-center mt-5">
        <button class="fight-btn"> F I G H T </button>
      </div>
      <EnemyHand class="col-12 mt-5" />
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
<style scoped>
  .fight-btn {
    font-size: 45px;
    font-family: 'Permanent Marker', cursive;
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    border-radius: 14px;
    border-radius: 14px;
    border-radius: 14px;
    border: 5px solid #000000;
  }
</style>


<!-- 
font-family: 'Permanent Marker', cursive;
font-family: 'Gloria Hallelujah', cursive;
font-family: 'Patrick Hand', cursive;
 -->