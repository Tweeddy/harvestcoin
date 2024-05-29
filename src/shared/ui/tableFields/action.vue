<template>
    <div class='action-field-container'>
       <img @click='openInfoPopup' class = 'action-field-icon' src='../../assets/info-icon.svg'/> 
        <div class='info-popup-container' v-if='showPopup'>
            <div v-for="(value, name, index) of data.field_value" :key=index>
                <div class='info-popup-row'>
                    <span>{{name}} </span> 
                    <span>{{value}} </span>
                    <img class='action-field-icon' src='../../assets/copy.svg' @click="copyText(index)"/>   
                </div>
            </div>   
        </div>
    </div>
</template>

<script>
    export default{
        name:'action',
        props:['data'],
        data(){
            return {
                showPopup:false,
            }
        },
        methods:{
            openInfoPopup(){
                this.showPopup = !this.showPopup;
            },
            copyText(index){
                let key = Object.keys(this.data.field_value)[index];
                let copiedText = key + ' ' + this.data.field_value[key];
                navigator.clipboard.writeText(copiedText).then(success => this.showPopup = !this.showPopup);         
                
            },
        }
    }
</script>

<style scoped>
.action-field-icon{
    width: 30px;
    height: 30px;
    cursor: pointer;
}
.action-field-container{
    position: relative;
}
.info-popup-container{
  display: flex;
  flex-direction: column;
  gap:12px;  
  padding: 12px;
  width: max-content;
  height: max-content;
  background: #fff;
  border: 1px solid #ccc;
  position: absolute;
  right: 0;
  margin: auto;
  top: 60px;
  border-radius: 10px;
  z-index:10;
}
.info-popup-row{
    display: grid;
    grid-template-columns: 1fr 1fr 0.5fr;
    align-items: center;
    gap:24px;
}
@media screen and (max-width: 480px) {
    .info-popup-container{
        max-width: 60vw;
        top:80px;
    }
}
</style>