<template>
    <div  class='meeting-table-header-cell'>
        <span> {{field_name}} </span>
    </div>
</template>

<script> 
    export default{
        name:'meetingCardHeader',
        props: ['field_name']
    }
</script>

<style scoped>
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
@media screen and (max-width: 480px) {
    .meeting-table-header-cell{
        padding: 12px;
        font-size:14px;
    }
}

</style>>