<template>
    <div class="enemy-hand">
        <div>
            {{enemyData.name||''}}
        
        </div>
    </div>
</template>

<script>
export default {
    name: "EnemyHand",
    data(){
        return {}
    },
    computed:{
        enemyData(){
            if(this.$store.state.game.id){
                return this.$store.state.game.players[1] || {}
        }
        return {}
        }
    },
    methods: {

    },
    props: []
};
</script>
