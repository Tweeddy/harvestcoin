 <template> 
   <div class='main-page-container'>
       <mainHeader> </mainHeader>
          <div class='map-page-main-content'>
            <tableHeader :title='TABLE_TITLE'> </tableHeader>
            <userInfo> </userInfo>
            <customForm> </customForm>
            <blueActionButton :buttonData="endWorkflowButtonData" class='end-button-position'> </blueActionButton>
          </div>
    </div>
</template>

<script>
import views from '@/views/style/views.scss'
import mainHeader from '@/enteties/header/header.vue'
import userInfo from '@/features/ui/userInfo.vue'
import customForm from '@/features/ui/customForm.vue'
import blueActionButton from '@/features/ui/blueActionButton.vue'
import router from '@/router'
import store from '@/store'
import tableHeader from '@/shared/ui/headers/tableHeader.vue'

export default{
    name: 'formView',
    components:{
        mainHeader,
        userInfo,
        customForm,
        blueActionButton,
        tableHeader
    },
    data(){
        return {
            TABLE_TITLE: 'Field collectors workflow',
            endWorkflowButtonData:{
                name: 'End workflow',
                action: function (){
                    router.push('/main');
                    store.commit('clearCustomerFormData');
                    store.commit('setNextMeetingData');
                }
            }
        }
    },
    mounted(){
        this.$store.commit('setCustomerInfoFormData');
    }
}
</script>

<style scoped>
.end-button-position{
    margin: 36px;
    margin-top: 0;
}
@media screen and (max-width: 480px) {
    .end-button-position{
        margin:0;
    }
}
</style>
