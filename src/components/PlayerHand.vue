<template>
    <div class="player-hand">
        <div>
            <h2>
                {{playerData.name}}
            </h2>
        </div>
        <div class="row justify-content-center">
            <div class="col-2 card" v-for="playerCard in playerData.hand" :key="playerCard.id">
                <h1>{{playerCard.name}}</h1>
                <img :src="playerCard.img" alt="" width="200" height="200">
                <p>
                    Health: {{playerCard.health}}
                </p>
                <p>Attack: {{playerCard.attack}}</p>

            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: "PlayerHand",
        data() {
            return {

            }

        },
        computed: {
            playerData() {
                if (this.$store.state.game.id) {
                    return this.$store.state.game.players[0]
                }
                return {}
            }
        },
        methods: {

        }
    }
</script>
<style scoped>
    .card {
        outline: rgb(32, 1, 1) solid 2px;
        background-color: rgb(24, 24, 24);
    }

    h1 {
        font-size: 1rem;
        color: rgb(255, 255, 255);
    }

    h2 {
        font-size: 1.8rem;
        color: white;
    }

    p {
        color:  white;
    }

    .player-hand {
        font-family: 'Patrick Hand', cursive;
    }
</style>