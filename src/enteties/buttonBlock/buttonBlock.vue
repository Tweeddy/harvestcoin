<template>
    <div class='button-block-container'>
        <span class='button-block-header'> {{buttonData.header}}</span>
        <div class='button-list-wrapper'> 
            <div class='button-item' :class="{'negative-background':button.type === NEGATIVE_BG, 
                                                'positive-background': button.type === POSITIVE_BG}" 
                    v-for='button of buttonData.buttonList' :key='button.id' @click='clickButton(button)'>
                {{button.value}}
            </div>
        </div>
    </div>
</template>

<script>

export default{
    name:'buttonBlock',
    props:['buttonData'],
    data(){
        return{
            NEGATIVE_BG: 'negative',
            POSITIVE_BG: 'positive',
        }
    },
    methods:{
        clickButton(buttonData){
            buttonData.action();
        }
    }
}

</script>

<style scoped>
.button-block-container{
    padding: 0 36px;
    gap:16px;
    display: flex;
    flex-direction: column;
}
.button-block-header{
    font-weight: 600;
}
.button-list-wrapper{
    display: flex;
    gap:8px;
}
.button-item{
    padding: 12px 36px;
    color: #fff;
    border-radius: 10px;
    cursor: pointer;
}
.negative-background{
    background: #e88580;
    opacity: 0.6;
}
.positive-background{
    background: #b0f558;
    opacity: 0.6;
}
.negative-background:hover, .positive-background:hover{
    opacity: 1;
}
</style>