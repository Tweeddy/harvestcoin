<template>
    <span @click='emitSubheaderClick'> 
        <span class='subheader-font'>  {{title}} </span>
        <img v-if='action' src='../../assets/dropdown-arrow.png' /> 
    </span>
</template>

<script>
export default{
    name:'subheader',
    props:['title','action'],
    methods:{
        emitSubheaderClick(){
         this.$emit('subheaderClick')
        }
    }
}

</script>

<style scoped>
.subheader-font{
    font-size:18px;
}
@media screen and (max-width: 480px) {
    .subheader-font{
        font-size:16px;
    }
}

</style>