<template> 
   <div class='main-page-container'>
       <mainHeader> </mainHeader>
       <div class='map-page-main-content'>
          <tableHeader :title='TABLE_TITLE'> </tableHeader>
          <userInfo> </userInfo>
          <buttonBlock :buttonData='existAddressButtonData'> </buttonBlock>
          <customMap> </customMap>
       </div>
    </div>
</template>

<script>
import mainHeader from '@/enteties/header/header.vue'
import userInfo from '@/features/ui/userInfo.vue'
import customMap from '@/features/ui/map.vue'
import buttonBlock from '@/enteties/buttonBlock/buttonBlock.vue'
import views from '@/views/style/views.scss'
import router from '@/router'
import tableHeader from '@/shared/ui/tableHeader/tableHeader.vue'

export default{
    name: 'map',
     components: { 
         router,
         mainHeader,
         userInfo,
         customMap,
         buttonBlock,
         tableHeader
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
                        router.push('/')
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
    },
    

}
</script>

<style scoped>


</style>