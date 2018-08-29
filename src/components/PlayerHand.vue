<template>
    <div class="player-hand">
        <div>
            <h1>
                {{playerData.name || ''}}
            </h1>
        </div>
        <div class="row">
            <div class="col-3 card" v-for="playerCard in playerData.hand":key="playerCard.id">
                <h1>{{playerCard.name}}</h1>
                <img :src="playerCard.img" alt="">
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
    h1 {
        font-size: 1.8rem;
        color: white;
    }

    .player-hand {
        font-family: 'Nova Mono', monospace;
    }
</style>