<template>
    <div class='start-meeting-button' @click='makeAction'> 
        <span>{{buttonData.name}} </span> 
    </div>
</template>

<script>
export default{
    name:'blueActionButton',
    props:['buttonData'],
    mounted(){
    },
    methods:{
        makeAction(){
            this.buttonData.action();
        }
    }
}
</script>

<style scoped>
    .start-meeting-button{
        background: #5ba6fd;
        min-width: 150px;
        max-width: max-content;
        height: max-content;
        padding: 12px;
        font-size: 18px;
        color: #fff;
        text-align: center;
        font-weight: 600;
        border-radius: 10px;
        display: inline;
        cursor: pointer;
    }
    .start-meeting-button:hover{
        background: #2f66cd;
    }

  
</style>