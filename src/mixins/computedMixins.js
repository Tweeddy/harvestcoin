export default{
    computed:{
        currentMeetingNumber(){
            return this.$store.getters.currentMeetingId || +localStorage.getItem('currentMeetingId');
        },
        meetingList(){
            return  Object.keys(this.$store.getters.meetingList).length  ? this.$store.getters.meetingList 
            : JSON.parse(localStorage.getItem('meetingList'));
        },
        currentMeeting(){
            return this.meetingList.find(meeting => meeting.id === this.currentMeetingNumber);
        },
        curentMeetingData(){
            return this.meetingList.find(meeting => meeting.id === this.currentMeetingNumber)?.meetingData || null;
        }
    },
    
}