<template> 
   <div class='main-page-container'>
       <mainHeader> </mainHeader>
       <meetingTable v-if='isCreatedData'> </meetingTable>
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
    computed:{
      isCreatedData(){
        return this.$store.getters.isCreatedData;
      }
    },
    mounted(){
       !this.isCreatedData && this.createFormData();
    },
    methods:{
      createFormData(){
        this.$store.dispatch('getCustomerList');
        this.$store.commit('setCustomerTable');
      },
    }
    

}
</script>

<style scoped>

</style>