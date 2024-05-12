<template>
    <div class='meeting-count-container'>
        <span class=''> Current meeting number 
            <span class='meeting-count-highlighted-number'>{{currentMeetingNumber}}</span> 
            of  
            <span class='meeting-count-highlighted-number'>{{totalMeetingNumber}}</span>  
        </span>
    </div>
</template>

<script>
export default{
    name:'meetingColor',
    props:['currentMeetingNumber','totalMeetingNumber']
}

</script>

<style scoped>
.meeting-count-container{
    font-size:18px;

}
.meeting-count-highlighted-number{
    color:#5ba6fd;
    font-weight: 600;
}
</style>