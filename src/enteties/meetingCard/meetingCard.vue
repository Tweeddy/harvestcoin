<template>
    <div class='meeting-table-wrapper'>
        <div class='meeting-table-column' v-for="tableColumn in meetingData" :key='tableColumn.field_name'>
            <div  class='meeting-table-header-cell'>
                <span> {{tableColumn.field_name}} </span>
            </div>
            <component class='meeting-table-content-cell' :is='tableColumn.field_type' :data='tableColumn' ></component>
        </div>

    </div>
</template>


<script>
import simple from '@/shared/ui/tableFields/simple.vue';
import action from '@/shared/ui/tableFields/action.vue';

    export default{
        name:'meetingCard',
        components:{
            simple,
            action
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
    padding: 24px 0;
}
.meeting-table-column{
    display: flex;
    flex-direction: column;
}
.meeting-table-header-cell{
    padding: 18px;
    font-weight: 600;
    font-size: 16px;
    background: #f1f3f4;
    border-bottom: 1px solid #ccc;
    color: #7b7f85;
    height:40px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    align-items: center;
}
.meeting-table-content-cell{
     height:40px;
     padding: 18px;
     border-bottom: 1px solid #ccc;
}
</style>