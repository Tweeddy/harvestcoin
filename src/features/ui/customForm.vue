<template>
        <div class='form-container'>
            <component v-for="formField of customerFormData" :key="formField.id" :is="formField.type" :fieldData='formField'></component>
          </div>
</template>

<script>
import dropdown from '@/shared/ui/form_fields/dropdown.vue'
import radio from '@/shared/ui/form_fields/radio.vue'
import textarea from '@/shared/ui/form_fields/textarea.vue'

export default{
    name:'customForm',
    components:{
        dropdown,
        radio,
        textarea
    },
    computed:{
        customerFormData(){
            return this.$store.getters['customerInfoFormData'];
        },
    
    },
    mounted(){
        console.log('custom', this.customerFormData)
    },
}
</script>
<style scoped>
.form-container{
    padding: 0 36px;
    display: flex;
    flex-direction: column;
    gap:30px
}
@media screen and (max-width: 480px) {
    .form-container{
        padding: 0;
        gap:16px;
    }
}
</style>