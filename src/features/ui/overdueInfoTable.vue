<template>
    <div class='overdue-wrapper'> 
        <div class='tabList-container'> 
            <div class='tab-item' v-for="tab of tabList" :key="tab.id" :class="{'active-tab-item':tab.active}" @click='setActiveTab(tab.id)'> {{tab.title}}</div>
        </div>
        <div> 
            <component :is='tabData.tab_type' :data='tabData'> </component>
        </div>
    </div>


</template>

<script>
import computedMixins from '@/mixins/computedMixins'
import columns from '@/shared/ui/tabFields/columns.vue'

export default{
    name:'overdueInfoTable',
    mixins:[computedMixins],
    components:{    
        columns
    },
    data(){
        return {
            tabList: [{
                id:1,
                title:'Info about customer',
                active:true,
                settings_get_url: '',
            },{
                id:2,
                title:'History',
                active:false,
                settings_get_url: '',
            }],
            activeTabId: 1,
        }
    },
    computed:{
        activeTabId(){
            return 
        },
        tabData(){
            return this.currentMeeting.tabData.find(tab => tab.tab_id === this.activeTabId);
        }
    },
    mounted(){
        console.log('mount oberdue')
    },
    methods:{
        setActiveTab(activeId){
            this.tabList.forEach(tab => tab.active = tab.id === activeId);
            this.activeTabId = activeId;    
            
        }
    }
}

</script>

<style scoped>
.overdue-wrapper{
    width: 100%;
    padding: 36px;
}
.tabList-container{
    display: flex; 
    gap:24px; 
}
.tab-item{
    width: 100%;
    border-bottom:1px solid #ccc;
    padding: 24px;
    cursor: pointer;
    text-align: center;
}
.active-tab-item{
    border-bottom:2px solid #4d77ff;
}
</style>