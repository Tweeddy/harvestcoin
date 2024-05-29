<template>
    <div class='meeting-count-container'>
        <subheader :title="headerWithCountData.title"> </subheader>
        <meetingCounter :currentMeetingNumber='headerWithCountData.currentMeetingNumber' 
                        :totalMeetingNumber="headerWithCountData.totalMeetingNumber"> 
        </meetingCounter>
    </div> 
</template>

<script>
import subheader from '@/shared/ui/headers/subheader.vue'
import meetingCounter from '@/shared/ui/headers/meetingCounter.vue'

export default{
    name:'headerWithCount',
    components: { 
        subheader,
        meetingCounter 
    },
    props:['headerWithCountData']
}

</script>

<style scoped>
.meeting-count-container{
    font-size:18px;

}
</style>