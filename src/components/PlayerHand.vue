<template>
    <div class="player-hand">
<div>
{{playerData.name || ''}}
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
