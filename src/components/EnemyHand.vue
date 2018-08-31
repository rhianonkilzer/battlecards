<template>
    <div class="enemy-hand">
        <div>
            <h2>
                {{name}}
            </h2>

        </div>
        <div class="row mb-3 justify-content-center">
            <div class="col-2 card" v-for="enemyCard in enemyData.hand" :key="enemyCard.id">
                <div v-if="enemyActiveCard.id == enemyCard.id">
                    <h1>{{enemyCard.name}}</h1>
                    <img :src="enemyCard.img" alt="" width="200" height="250">

                    <p>Health: {{enemyCard.health}}</p>
                    <p>Attack: {{enemyCard.attack}}</p>
                    <p>Defense: {{enemyCard.defense}}</p>
                </div>
                <div v-else @click="changeActiveCard(enemyCard)">
                    <h1>Enemy</h1>
                    <img src="..//assets/02_legacy_back_ace.jpg" alt="card" width="200" height="250" class="image">
                    <p>Health: ?</p>
                    <p>Attack: ?</p>
                    <p>Defense: ?</p>
                   
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
            enemyActiveCard() {
                return this.$store.state.enemyCard
            }
        },
        methods: {
            changeActiveCard(enemyCard) {
                this.$store.dispatch('changeEnemyCard', enemyCard)
            }
        }

    };
</script>

<style scoped>
  
    .card {
        outline: rgb(255, 255, 255) solid 2px;
        background-color: rgb(151, 119, 71);
        cursor: pointer;
    }

    .image {
        font-family: 'Patrick Hand', cursive;
    
    }


    h1 {
        font-size: 1rem;
        color: white;
    }

    p {
        color: white;
    }

    h2 {
        font-size: 1.8rem;
        color: white;
    }
</style>
