<template> 
   <div class='main-page-container'>
       <mainHeader> </mainHeader>
       <div class='map-page-main-content'>
          <tableHeader :title='TABLE_TITLE'> </tableHeader>
          <userInfo @openOverdueInfo = openOverdueInfo> </userInfo>
          <customMap> </customMap>
          <buttonBlock :buttonData='existAddressButtonData'> </buttonBlock>
       </div>

       <!-- <overdueInfoTable> </overdueInfoTable> -->

    </div>
</template>

<script>
import mainHeader from '@/enteties/header/header.vue'
import userInfo from '@/features/ui/userInfo.vue'
import customMap from '@/features/ui/map.vue'
import buttonBlock from '@/shared/ui/buttonBlock/buttonBlock.vue'
import views from '@/views/style/views.scss'
import store from '@/store'
import router from '@/router'
import tableHeader from '@/shared/ui/headers/tableHeader.vue'
import overdueInfoTable from '@/features/ui/overdueInfoTable.vue'

export default{
    name: 'map',
     components: { 
         router,
         mainHeader,
         userInfo,
         customMap,
         buttonBlock,
         tableHeader,
         overdueInfoTable
    },
    data(){
        return {
            TABLE_TITLE: 'Field collectors workflow',
            existAddressButtonData:{
                header:'Did you find the address??',
                buttonList:[
                {
                    id: 1,
                    value: 'Yes',
                    type: 'positive',
                    action: function(){
                        router.push('/form')
                    },
                },
                {
                    id: 2,
                    value: 'No',
                    type: 'negative',
                    action: function(){
                        router.push('/');
                        store.commit('setNextMeetingData');
                    },
                }]
            },
        }
    },
    mounted(){
        this.createButtonBlockData();
    },
    methods:{
        createButtonBlockData(){
            this.existAddressButtonData.header = 'Did you find the address??';
            this.existAddressButtonData.list =[
                {
                    id: 1,
                    value: 'Yes',
                    action: function(){
                        console.log('accept');
                        this.$router.push('/form');
                    },
                },
                {
                    id: 2,
                    value: 'No',
                    action: function(){
                        console.log('decline router', this.$router);
                        this.$router.push('/');
                    },
                }
            ]

        },
        openOverdueInfo(){

        },
    },
    

}
</script>

<style scoped>


</style>