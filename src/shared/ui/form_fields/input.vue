<template>
    <div class='input-container'>
        <span> {{fieldData.name}} </span>
        <input class='input-field'  v-model='value' @input='inputItem' :placeholder="fieldData.placeholder" />
    </div>
</template>

<script>
    export default{
        name:'input',
        props:['fieldData'], 
        data(){
            return {
                value: null,
            }
        },       
        methods:{
            inputItem(){
            
            }
        }
    }
</script>

<style>
.input-field{
    width: 100%;
    padding: 12px;
    box-sizing: border-box;
    border: none;
    border-radius: 10px;
    outline: none;
    height: 40px;
  font-size: 18px;
}
.input-field::placeholder{
    color:#ccc;
}
.input-container{
    width: 100%;
  border: 1px solid #ccc;
  border-radius: 10px;
}
</style>
