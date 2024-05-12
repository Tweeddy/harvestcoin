<template>
    <div class='current-user-container'> 
        <div class='current-user-info-block' @click="openDropdown"> 
            <img class='current-user-info-icon' src='../../assets/user-icon.png' />
            <span class='current-user-info-name'> Alibek Aitkulov </span>
            <img class='dropdownArrow' src='../../assets/dropdown-arrow.png' />
          
        </div>
        <div class='current-user-exit-block hidden' :class='{"current-user-exit-block-show": showDropdown}'> 
            <img class='exit-icon' src='../../assets/exit.svg' />
            <span class='current-user-exit-button'> Log Out </span>
        </div>
    </div>


</template>

<script> 
export default{
    name:'currentUser',
    data(){
        return {
            showDropdown: false,
        }
    },
    mounted(){},
    methods:{
        openDropdown(){
            console.log('clicked');
            this.showDropdown = !this.showDropdown;
        },

    }
}

</script>

<style scoped>
    .hidden{
        display: none;
    }
    .current-user-exit-block-show{
        display:flex;
    }
    .dropdownArrow{
        width:24px;
    }
    .current-user-container{
        display: flex;
        position: relative;
    }
    .current-user-info-icon{
        width:30px;
        height:30px;
    }
    .current-user-info-block{
        display: flex;
        gap: 8px;
        align-self: center;
        cursor: pointer;
    }
    .current-user-info-name{
        align-self:center;
    }
    .exit-icon{
        width:24px;
    }
    .current-user-exit-button{
        align-self: center;
    }
    .current-user-exit-block{
        align-content: center;
        position: absolute;
        bottom: -45px;
        right: 0;
        padding: 10px 20px;
        border: 1px solid #edeff0;
        background: #fff;
        cursor:pointer;
        gap:8px;
    }
</style>