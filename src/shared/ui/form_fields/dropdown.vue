<template>
    <div class='dropdown-container'>  
        <span class='field-header'> {{fieldData.name}}</span>
        <div class='dropdown-wrapper'>
            <div class='dropdown-input-block' @click='openDropdown'> 
                <div class='dropdown-input' :class='{"placeholder-value": !selected}' > {{showValue}} </div>
                <img class='dropdown-arrow' src='../../assets/dropdown-arrow.png' />
            </div>
            <div v-if='dropdownOpened' class='dropdown-list-block'> 
                <div v-for='option of fieldData.value' :key='option.id' @click='toggleItem(option)'
                        class='dropdown-list-item'> {{option.name}}</div>    
            </div> 
        </div>
    </div>
    
</template>

<script>
export default{
    name:'dropdown',
    props:['fieldData'],
    data(){
        return {
            dropdownOpened: false,
            selected: null,
        }
    },
    computed:{
        showValue(){
            return this.selected ? this.selected : this.fieldData.placeholder;
        },
    },
    mounted(){console.log('select ', this.fieldData)},
    methods:{
        toggleItem(item){
            this.selected = item.name;
            this.dropdownOpened = !this.dropdownOpened;
        },
        openDropdown(){
            this.dropdownOpened = !this.dropdownOpened;
        },
    }
}
</script>

<style scoped>
.dropdown-container{
    display: flex;
  flex-direction: column;
  gap: 4px;
}
.dropdown-wrapper{
    height: 40px;
}
.dropdown-input{
    padding: 12px;
    border-radius: 10px;
    outline: none;
    border: 0;
    width: 100%;
    box-sizing: border-box;
    height: 40px;
    background: #fff;
}
.dropdown-input-block{
  position: relative;
  width: 100%;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 10px;
    cursor: pointer;
}
.dropdown-arrow{
    position: absolute;
  right: 0;
  bottom: 0;
  padding: 8px;
}
.dropdown-list-block{
    position: relative;
  top: 10px;
  background: #fff;
  width: 50%;
  border-radius: 10px;
  border: 1px solid #ccc;
  z-index: 10;
}
.dropdown-list-item{
    padding: 12px;
}
.dropdown-list-item:hover{
    background: #5ba6fd;
    color:#fff
}
.placeholder-value{
    color:#ccc;
}
</style>