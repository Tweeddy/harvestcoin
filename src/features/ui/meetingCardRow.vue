<template>
  <component class='meeting-table-content-cell' :is='data.field_type' :data='data' ></component>
</template>

<script> 
import simple from '@/shared/ui/tableFields/simple.vue';
import action from '@/shared/ui/tableFields/action.vue';

    export default{
        name:'meetingCardRow',
        props: ['data'],
        components:{
            simple,
            action
        },
        mounted(){
            console.log('meetingCardRowProps', this.data);
        },
    }
</script>

<style scoped>
.meeting-table-content-cell{
     height:40px;
     padding: 18px;
     border-bottom: 1px solid #ccc;
}
@media screen and (max-width: 480px) {
    .meeting-table-content-cell{
        padding: 12px;
        font-size: 14px;
        height: 80px;
        gap:8px;
    }
}
</style>>