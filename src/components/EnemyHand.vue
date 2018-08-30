<template>
    <div class="enemy-hand">
        <div>
            <h2>
                {{name}}
            </h2>

        </div>
        <div class="row justify-content-center">
            <div class="col-2 card" v-for="enemyCard in enemyData.hand" :key="enemyCard.id">
                    <h1>{{enemyCard.name}}</h1>
                <img :src="enemyCard.img" alt=""width="200" height="200">
                {{enemyCard.health}}
                {{enemyCard.attack}}
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
            // enemyHand(){
            //     if(this.$store.state.game.id){
            //         return this.$store.state.game.players[1].hand
            //     }
            // }
        },
        methods: {

        },
    };
</script>

<style scoped>
    .card {
        outline: rgb(255, 255, 255) solid 1px;
        background-color: rgb(66, 0, 0);
        
    }
    .enemy-hand{
        font-family: 'Patrick Hand', cursive;
    }
    h1{
        font-size: 1rem;
    }
    h2{
        font-size: 1.8rem;
        color: white;
    }
</style>