<template> 
   <div class='main-page-container'>
       <mainHeader> </mainHeader>
       <meetingTable> </meetingTable>
    </div>
</template>

<script>
import mainHeader from '@/enteties/header/header.vue'
import meetingTable from '@/features/ui/meetingTable.vue'
export default{
    name: 'main',
     components: { 
         mainHeader,
         meetingTable 
    },
    mounted(){
        console.log('moun in main');
          this.createFormData();
    },
    methods:{
      createFormData(){
        // this.$store.commit('setCustomerInfoFormData');
      },
    }
    

}
</script>

<style scoped>

</style>