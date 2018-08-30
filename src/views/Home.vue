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
        <button class="fight-btn">FIGHT</button>
      </div>
      <EnemyHand class="col-12 mt-5" :click="setEnemyCard" />
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
        },
        attack: {
          opponentId: '',
          opponentCardId: ''
        }
      };
    },
    methods: {
      fight() {
        this.$store.dispatch("fight", {});
      },

      startGame() {
      
        this.$store.dispatch("newGame", this.newGame);
      },
      setEnemyCard(eId, oCId){
        this.attack.opponentId = eId
        this.attack.opponentCardId = oCId
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