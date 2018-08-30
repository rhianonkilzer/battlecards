<template>
    <div class="player-hand">
        <div>
            <h2>
                {{playerData.name || ''}}
            </h2>
        </div>
        <div class="row">
            <div class="col-3 card" v-for="playerCard in playerData.hand":key="playerCard.id">
                <h1>{{playerCard.name}}</h1>
                <img :src="playerCard.img" alt="">
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
    }
    h1 {
        font-size: 1rem;
        color: rgb(0, 0, 0);
    }
    h2{
        font-size: 1.8rem;
    }
    .player-hand {
        font-family: 'Nova Mono', monospace;
    }
</style>