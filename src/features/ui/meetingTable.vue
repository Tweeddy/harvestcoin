<template>
    <div class='meeting-table-container' >
        <tableHeader :title='TABLE_TITLE'> </tableHeader> 

        <div v-if='isListOfMeetingCompleted'>
            <tableHeader :title='completedMeetingsTitle' class='font-weight-thin'> </tableHeader> 
        </div>
        
        <div v-if='visitedMeetingList.length'>
            <subheader :title='VISITED_MEETING_TITLE' :action='true' @subheaderClick='openVisitedMeetingDropdown' class='subheader-wrapper'>  </subheader>
            <visitedMeetingCard v-if='showVisitedMeetings' :visitedMeetingList='visitedMeetingList'> </visitedMeetingCard>
        </div>

         <div v-if='curentMeetingData' class='current-meeting-container'>
             <headerWithCount :headerWithCountData='headerWithCountData'> </headerWithCount>
             <currentMeetingCard :meetingData='curentMeetingData'> </currentMeetingCard>
             <blueActionButton :buttonData="startButtonData">  </blueActionButton>
         </div>
           
    </div>
   
</template>

<script>

import tableHeader from '@/shared/ui/headers/tableHeader.vue'
import headerWithCount from '@/shared/ui/headers/headerWithCount.vue'
import currentMeetingCard from '@/enteties/meetingCard/currentMeetingCard.vue'
import visitedMeetingCard from '@/enteties/meetingCard/visitedMeetingCard.vue'
import blueActionButton from './blueActionButton.vue'
import subheader from '@/shared/ui/headers/subheader.vue'

import computedMixins from '@/mixins/computedMixins.js'
import router from '@/router'

export default{
    name:'meetingTable',
    mixins:[computedMixins],
    components:{
        tableHeader,
        headerWithCount,
        currentMeetingCard,
        visitedMeetingCard,
        blueActionButton,
        subheader,
    },
    computed:{
        totalMeetingNumber(){
            return this.$store.getters.totalMeetingCount;
        },
        isListOfMeetingCompleted(){
           return this.$store.getters.isListOfMeetingCompleted;
        },
        visitedMeetingList(){
            return this.$store.getters.meetingList.filter(meeting => meeting.status === this.VISITED_STATUS);
        },
        headerWithCountData(){
            return {
                totalMeetingNumber: this.totalMeetingNumber,
                currentMeetingNumber: this.currentMeetingNumber,
                title:this.CURRENT_MEETING_TITLE
            }
        } 
    },
    data(){
        return {    
            TABLE_TITLE: 'Field collectors workflow',
            VISITED_STATUS:'visited',
            completedMeetingsTitle: "Great job! Yoy've completed all meetings for today!",
            CURRENT_MEETING_TITLE:' Current meeting number ',
            VISITED_MEETING_TITLE: 'Visited meeting list',
            showVisitedMeetings: false,
            startButtonData:{
                name:'Start',
                action: function(){
                    router.push('/map')
                }
            },

            dropdownAction: function(vm){
                console.log('click on action');
                clickDropdownAction();
                vm.showVisitedMeetings = !vm.showVisitedMeetings;
                console.log('show ', vm.showVisitedMeetings);
            }
        }
    },
    mounted(){
        console.log('curerent meetingId ', this.currentMeetingNumber);
        console.log('currentMeetingData', this.$store.getters.meetingList.find(meeting => meeting.id === this.currentMeetingNumber));
    },
    methods:{
        openVisitedMeetingDropdown(){
            this.showVisitedMeetings = !this.showVisitedMeetings
        }
    }

}
</script>

<style scoped>
    .meeting-table-container{
        padding: 36px;
        gap: 24px;
        display: flex;
        flex-direction: column;
    }
    .font-weight-thin{
        font-weight:500;
    }
    .current-meeting-container{
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
    .subheader-wrapper{
        cursor:pointer;
        display: flex;
        align-content: center;
        gap:8px;
    }

    @media screen and (max-width: 480px) {
        .meeting-table-container{
            padding: 24px;
            gap: 12px;
        }
    }
</style>

