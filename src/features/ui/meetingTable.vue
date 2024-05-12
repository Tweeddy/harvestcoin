<template>
    <div class='meeting-table-container' v-if='meetingData' >
         <tableHeader :title='tableTitle'> </tableHeader>
         <meetingCount :totalMeetingNumber='totalMeetingNumber' :currentMeetingNumber='currentMeetingNumber'> </meetingCount>
         <meetingCard :meetingData='meetingData'> </meetingCard>
         <blueActionButton :buttonData="startButtonData">  </blueActionButton>
    
    </div>
   
</template>

<script>

import tableHeader from '@/shared/ui/tableHeader/tableHeader.vue'
import meetingCount from '@/shared/ui/meetingCount/meetingCount.vue'
import meetingCard from '@/enteties/meetingCard/meetingCard.vue'
import {meetingData} from '../api/meetingData'
import blueActionButton from './blueActionButton.vue'
import router from '@/router'

export default{
    name:'meetingTable',
    components:{
        tableHeader,
        meetingCount,
        meetingCard,
        blueActionButton,
    },
    data(){
        return {
            meetingData,
            tableTitle: 'Field collectors workflow',
            totalMeetingNumber: 22,
            currentMeetingNumber: 4,
            startButtonData:{
                name:'Start',
                action: function(){
                    router.push('/map')
                }
            }
        }
    },

}
</script>

<style scoped>
    .meeting-table-container{
        padding: 36px;
        gap: 12px;
        display: flex;
        flex-direction: column;
    }

</style>

