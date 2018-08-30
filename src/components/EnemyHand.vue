<template>
    <div class="enemy-hand">
        <div>
            <h2>
                {{name}}
            </h2>

        </div>
        <div class="row justify-content-center">
            <div class="col-2 card" v-for="enemyCard in enemyData.hand" :key="enemyCard.id">
                <div v-if="enemyActiveCard.id == enemyCard.id">
                    <h1>{{enemyCard.name}}</h1>
                    <img src="../assets/02_legacy_back_ace.jpg" alt=""width="200" height="200">
                    <p>Health: {{enemyCard.health}}</p>
                    <p>Attack: {{enemyCard.attack}}</p>
                </div>
                <div v-else @click="changeActiveCard(enemyCard)">
                        <h1>Enemy</h1>
                        <img src="../assets/02_legacy_back_ace.jpg" alt=""width="200" height="250">
                        <p>Health: ?</p>
                        <p>Attack: ?</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EnemyHand",
        data() {
            return {
                name: "Enemy Player"
            }
        },
        computed: {
            enemyData() {
                if (this.$store.state.game.id) {
                    return this.$store.state.game.players[1]
                }
                return {}
            },
            enemyActiveCard(){
                return {
                    id: ""
                }
            }
        },
        methods: {
            changeActiveCard(enemyCard){
                console.log(enemyCard)
            }
        },
    };
</script>

<style scoped>
    .card {
        outline: rgb(255, 255, 255) solid 2px;
        background-color: rgb(32, 1, 1);
        cursor: pointer;
        
    }
    .enemy-hand{
        font-family: 'Patrick Hand', cursive;
    }
    h1{
        font-size: 1rem;
        color: white;
    }
    p{
        color: white;
    }
    h2{
        font-size: 1.8rem;
        color: white;
    }
</style>


<!-- http://placehold.it/200x200 -->