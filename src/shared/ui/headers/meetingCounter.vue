<template>
    <span  class='meeting-count-highlighted-number'>{{currentMeetingNumber}}</span> 
    <span>  of </span>
    <span  class='meeting-count-highlighted-number'>{{totalMeetingNumber}}</span>  
</template>

<script>
export default {
    name:'meetingCounter',
    props:['currentMeetingNumber', 'totalMeetingNumber'],
}
</script>

<style scoped>
.meeting-count-highlighted-number{
    color:#5ba6fd;
    font-weight: 600;
}
</style>
