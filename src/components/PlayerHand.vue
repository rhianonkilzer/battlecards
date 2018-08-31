<template>
    <div class="player-hand">
        <div>
            <h2>
                {{playerData.name}}
            </h2>
        </div>
        <div class="row justify-content-center">
            <div class="col-2 card" v-for="playerCard in playerData.hand" :key="playerCard.id">
                <!-- <div @click="changeActiveCard(playerCard)" v-if="playerActiveCard.id == playerCard.id"> -->
                <div @click="changePlayerCard(playerCard)">


                    <h1>{{playerCard.name}}</h1>
                    <img :src="playerCard.img" alt="" width="200" height="250">

                    <p>Health: {{playerCard.health}}</p>
                    <p>Attack: {{playerCard.attack}}</p>
                    <p>Defense: {{playerCard.defense}}</p>
                </div>

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
            },
            playerActiveCard() {
                return this.$store.state.playerCard
            }
        },
        methods: {
            changePlayerCard(playerCard) {
                this.$store.dispatch('changePlayerCard', playerCard)
            }
        }
    }
</script>
<style scoped>
    .card {
        outline: white solid 2px;
        background-color: rgb(151, 119, 71);
        cursor: pointer;
    }

    h1 {
        font-size: 1rem;
        color: rgb(255, 255, 255);
    }

    h2 {
        font-size: 1.8rem;
        color: rgb(255, 255, 255);
    }

    p {
        color: rgb(255, 255, 255);
    }

    .player-hand {
        font-family: 'Patrick Hand', cursive;
    }
</style>