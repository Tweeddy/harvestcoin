<template> 
   <div class=' main-page-container'>
      <mainHeader> </mainHeader>
      <div class='welcome-page-container'>
        <tableHeader :title='TABLE_TITLE'> </tableHeader>
        <span>You have <span class='meeting-count-highlighted-number'> {{totalMeetingCount}} </span> meetings today </span>
        <customMap :polyMarker = true> </customMap>
        <blueActionButton :buttonData="endWorkflowButtonData" class='end-button-position'> </blueActionButton>
      </div>
    </div>
</template>

<script>
import views from '@/views/style/views.scss'
import mainHeader from '@/enteties/header/header.vue'
import customMap from '@/features/ui/map.vue'
import tableHeader from '@/shared/ui/headers/tableHeader.vue'
import subheader from '@/shared/ui/headers/subheader.vue'
import blueActionButton from '@/features/ui/blueActionButton.vue'
import router from '@/router'

export default{
    name: 'welcome',
  components: { 
        mainHeader,
        customMap,
        tableHeader,
        subheader,
        blueActionButton
    },
    data(){
      return{
           TABLE_TITLE: 'Field collectors workflow',
           
           endWorkflowButtonData:{
            name: 'Go',
            action: function (){
                router.push('/main');
            }
        }
      }
    },
    computed:{
      totalMeetingCount(){
        return this.$store.getters.totalMeetingCount;
      },
      isCreatedData(){
        return this.$store.getters.isCreatedData;
      },
      WELCOME_TITLE(){
        return `You have ${this.totalMeetingCount} meetings today`;
      },
   
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
.welcome-page-container{
  display: flex;
  flex-direction: column;
  gap:30px;
  padding:36px;
}

.meeting-count-highlighted-number{
    color:#5ba6fd;
    font-weight: 600;
}

@media screen and (max-width: 480px) {
  .welcome-page-container{
    padding: 24px;
  }
}
</style>