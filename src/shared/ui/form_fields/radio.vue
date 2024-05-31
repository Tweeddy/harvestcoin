<template>
    <div class='radio-field-container'>
         <span class='field-header'> {{fieldData.name}}</span>
         <div class='radio-field-wrapper'> 
            <div  v-for='option of fieldData.value' :key=option.id> 
                    <input class='radio-input' type='radio' :id='option.id' :value=option v-model=checked @change=toggleItem(option) />     
                    <label  class='radio-label' :for='option.id' > {{option.name}}      
                </label>
            </div>
        </div>  

        <vInput v-if=showInputNumber :fieldData="inputData" />      
    </div> 
       
</template>

<script>
import vInput from './input.vue'

export default{
    name:'radio',
    props: ['fieldData'],
    components:{
        vInput,
    },
    data(){
        return {
            checked: null,
            showInputNumber: false,
            SUCCESS_RESULT: 'Yes',
            inputData:{
                id: 'number_field',
                type: 'input',
                name: '',
                placeholder: 'Please, type phone number',
                default: '',
                value:'',
            }
        }
    },
    mounted(){},
    methods:{
        toggleItem(option){
            this.showInputNumber = this.checked.name === this.SUCCESS_RESULT;

        }
    },
}

</script>
<style scoped>
.radio-field-container{
    display: flex;
  flex-direction: column;
  gap: 8px;
}
.radio-field-wrapper{
    width: 50%;
    display: flex;
    gap: 16px;
}
input[type="radio"]:checked, 
input[type="radio"]:not(:checked) {
    display:none
}

input[type="radio"]:checked + label, 
input[type="radio"]:not(:checked) + label {
    display: inline-block;
    position: relative;
    padding-left: 28px;
    line-height: 20px;
    cursor: pointer;
}
input[type="radio"]:checked + label:before, 
input[type="radio"]:not(:checked) + label:before {
        content: "";
    position: absolute;
    left: 0px;
    top: 0px;
    width: 18px;
    height: 18px;
    border: 1px solid #dddddd;
    background-color: #ffffff;
    border-radius:5px;
}
input[type="radio"]:checked + label:before{
    background: #5ba6fd;
}
</style>