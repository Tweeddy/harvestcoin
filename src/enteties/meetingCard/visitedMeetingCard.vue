<template>
    <div class='visited-meeting-container'>
        <div class='visited-meeting-row'>
            <div class='meeting-table-column' v-for="tableCell in tableColumnList" :key='tableCell'>
                <meetingCardHeader :field_name="tableCell"> </meetingCardHeader>      
            </div>
        </div>

        <div class='visited-meeting-row' v-for="meeting in visitedMeetingList" :key='meeting.id'>
            <meetingCardRow v-for="tableCell in meeting.meetingData" :key='tableCell.field_name' :data="tableCell"> </meetingCardRow>      
        </div>
    </div>
</template>


<script>

import meetingCardHeader from '@/features/ui/meetingCardHeader.vue';
import meetingCardRow from '@/features/ui/meetingCardRow.vue';

    export default{
        name:'visitedMeetingCard',
        components:{
            meetingCardHeader,
            meetingCardRow
        },
        computed:{
            tableColumnList(){
                return this.visitedMeetingList[0].meetingData.map(table_cell => table_cell.field_name);
            },
            visitedMeetingData(){
                return this.visitedMeetingList.map(meeting => meeting.meetingData);
            }
        },

        props: ['visitedMeetingList'],
        data(){
            return {
  
            }
        },
        mounted(){
            console.log('visited meetingList ', this.visitedMeetingList);
        
        },
        methods:{
        }
    }
</script>

<style scoped>
.visited-meeting-container{
    padding: 12px 0;
}
.visited-meeting-row{
    display: grid;
    grid-template-columns: 3fr 3fr 1fr;
}
.meeting-table-column{
    display: flex;
    flex-direction: column;
}


</style>