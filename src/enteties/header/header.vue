<template>
    <div class='header-container'>
        <logo> </logo>
        <currentUser> </currentUser>
    </div>
</template>

<script>
import currentUser from '@/shared/ui/current/currentUser.vue'
import logo from '@/shared/ui/logo/logo.vue'


export default{
    name:'mainHeader',
    components:{
        currentUser,
        logo
    },

}
</script>


<style scoped>
    .header-container{
        display: flex;
        justify-content: space-between;
        height:40px;
        padding: 12px;
        background: rgba(205, 232, 240, 0.3);
        border-radius: 10px;
    }
</style>
