<template>
   <div class='file-field-container'>
         <span> {{fieldData.name}} </span>
        <input type="file" id="file" ref="file" class="input-file" @change="handleFileUpload"/>
        <label for="file" class="input-file-wrapper">
            <span class="input__file-button-text">{{choosenFileName || fieldData.placeholder}}</span>
        </label>
    </div>
    
</template>

<script> 
export default{
    name:'file',
    props:['fieldData'],
    data(){
        return {
            file: '',
            choosenFileName: '',
        }
    },
    methods:{
        handleFileUpload(file){
            
            this.file = this.$refs.file.files[0];
            this.choosenFileName = this.file.name
            console.log('file ', this.file);
        }
    }
}
</script>

<style scoped>
.input-file{
  visibility: hidden;
  position: absolute;
}
.input-file-wrapper{
  width: 100%;
  display: block;
  border: 1px solid #ccc;
  padding: 12px;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  color:#ccc;
}
.file-field-container{
    display: flex;
  flex-direction: column;
  gap: 4px;
}

</style>