<template>
        <div class='columns-container'>
            <div v-for="column of columnsData" :key="column">
                <span> </span>

            
            </div>
            
        </div>   
</template>

<script> 
    export default{
        name:'columns',
        props:['data'],
        computed:{
            columnsData(){
                return this.data.data;
            }
        },
        mounted(){
            console.log('mounted in columns ', this.data);
        },
    }
</script>