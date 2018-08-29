<template>
    <div class="player-hand">
<div>
<h1>{{playerData.name || ''}}</h1>
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
        playerData(){
            if(this.$store.state.game.id){
                return this.$store.state.game.players[1]
            }
            return{}
        }
    },
    methods: {

    }
}
</script>
<style scoped>
    h1{
        font-size: 1.8rem;
        color: white;
    }
    .player-hand{
        font-family: 'Nova Mono', monospace;
    }
</style>