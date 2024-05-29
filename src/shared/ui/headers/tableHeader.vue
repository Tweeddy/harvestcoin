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
@media screen and (max-width: 480px) {
    .table-header-string{
        font-size:20px
    }

}
</style>
