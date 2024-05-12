<template>
    <div class='textarea-container'>
         <span class='field-header'> {{fieldData.name}}</span>
        <textarea class='textarea-field' v-model=text :placeholder="fieldData.placeholder"> </textarea>
    </div>
    
</template>

<script> 
export default{
    name:'textarea',
    props:['fieldData'],
    data(){
        return {
            text:'',
        }
    }
}
</script>
<style scoped>
.textarea-container{
    display: flex;
  flex-direction: column;
  gap: 4px;
}
.textarea-field{
    width: 50%;
  padding: 12px;
  outline: none;
  border: none;
  border-radius: 10px;
  box-sizing: border-box;
  height: 80px;
  font-family: Inter, Arial, sans-serif;
}
.textarea-field::placeholder{
    color:#ccc;
}
</style>