<template>
    <div class="enemy-hand">
        <div>
            {{name}}

        </div>
        <div class="row">
            <div class="col-3 card" v-for="enemyCard in enemyData.hand" :key="enemyCard.id">
                {{enemyCard.name}}
                <img :src="enemyCard.img" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EnemyHand",
        data() {
            return {
                name: "Oponet"
            }
        },
        computed: {
            enemyData() {
                if (this.$store.state.game.id) {
                    return this.$store.state.game.players[1]
                }
                return {}
            }
        },
        methods: {

        },
    };
</script>

<style scoped>
    .card {
        outline: red solid 1px;
    }
</style>