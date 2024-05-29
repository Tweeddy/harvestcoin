<template>
    <div class='meeting-table-wrapper'>
        <div class='meeting-table-column' v-for="tableColumn in meetingData" :key='tableColumn.field_name'>
            <meetingCardHeader :field_name="tableColumn.field_name"> </meetingCardHeader>
            <meetingCardRow :data='tableColumn'> </meetingCardRow>          
        </div>

    </div>
</template>


<script>

import meetingCardHeader from '@/features/ui/meetingCardHeader.vue';
import meetingCardRow from '@/features/ui/meetingCardRow.vue';

    export default{
        name:'currentMeetingCard',
        components:{
            meetingCardHeader,
            meetingCardRow
        },

        props: ['meetingData'],
        data(){
            return {
  
            }
        },
        mounted(){
        
        },
        methods:{
        }
    }
</script>

<style scoped>
.meeting-table-wrapper{
    display: grid;
    grid-template-columns: 3fr 3fr 1fr;
    padding: 12px 0;
}
.meeting-table-column{
    display: flex;
    flex-direction: column;
}
@media screen and (max-width: 480px) {
     
}


</style>