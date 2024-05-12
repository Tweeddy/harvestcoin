<template>
    <span class='table-header-string'> {{title}} </span>    
</template>

<script>
    export default{
        name:'tableHeader', 
        props: ['title'],
    }
</script>

<style scoped>
.table-header-string{
   font-size: 24px;
  font-weight: 600;


}
</style>
