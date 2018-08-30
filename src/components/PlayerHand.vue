<template>
    <div class="player-hand">
        <div>
            <h2>
                {{playerData.name || ''}}
            </h2>
        </div>
        <div class="row justify-content-center">
            <div class="col-2 card" v-for="playerCard in playerData.hand":key="playerCard.id">
                <h1>{{playerCard.name}}</h1>
                <img :src="playerCard.img" alt="" width="200" height="200">
                {{playerCard.health}}
                {{playerCard.attack}}

            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: "PlayerHand",
        data() {
            return {}
            
        },
        computed: {
            playerData() {
                if (this.$store.state.game.id) {
                    return this.$store.state.game.players[1]
                }
                return {}
            }
        },
        methods: {

        }
    }
</script>
<style scoped>
    .card{
        outline: white solid 1px;
        background-color: rgb(58, 58, 58);
    }
    h1 {
        font-size: 1rem;
        color: rgb(0, 0, 0);
    }
    h2{
        font-size: 1.8rem;
        color: white;
    }
    .player-hand {
        font-family: 'Patrick Hand', cursive;
    }
</style>