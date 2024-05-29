<template>
    <div class='user-info-container'>
        <div class='customer-info-block'>
           <div class='customer-info-row'>
              <span class='customer-info-row-key'> {{CUSTOMER_NAME}}</span> 
              <span class='customer-info-row-value customer-info-row-link'> {{customer_name_value}}
                <span class='customer-info-link' @click='emitOverdueInfo' > {{OVERDUE_INFO}} </span> 
              </span> 
            </div>

            <div class='customer-info-row'>
                <span class='customer-info-row-key'>{{CUSTOMER_ADDRESS}} </span> 
                <span class='customer-info-row-value customer-info-row-link'> {{customer_address_value}}
                    <a class='customer-info-link' :href='google_address_link' target="_blank"> {{MAP_LINK}} </a>
                </span> 
            </div>

            <div class='customer-info-row'>
              <span class='customer-info-row-key'> {{AGGREEMENT_NUMBER}}</span> 
              <span class='customer-info-row-value'>{{customer_id_value}} </span> 
            </div>
        </div>
    </div>
</template>

<script>
import computedMixins from '@/mixins/computedMixins';
import {createGoogleLink} from '@/shared/model/createData/'

export default{
    name:'userInfo',
    mixins:[computedMixins],
    computed:{

        customer_name_value(){
            return this.curentMeetingData?.find(field => field.field_name === this.CUSTOMER_NAME).field_value;
        },
        customer_address_value(){
            return this.curentMeetingData?.find(field => field.field_name === this.CUSTOMER_ADDRESS).field_value;
        },
        customer_id_value(){
           return this.curentMeetingData?.find(field => field.field_name === this.ADDITIONAL_INFO).field_value[this.AGGREEMENT_NUMBER];
        },
        },
    data(){
        return {
            CUSTOMER_NAME: 'Customer name',
            CUSTOMER_ADDRESS: 'Address',
            OVERDUE_INFO:'Info about customer',
            ADDITIONAL_INFO:'Additional info',
            AGGREEMENT_NUMBER: 'Agreement number',
            MAP_LINK:'Build a route',
            GOOGLE_ADDRESS_TEMPLATE_URL:'https://www.google.com/maps?q=',
            google_address_link:''
        }
    },
    mounted(){
        createGoogleLink(this);
    },
    methods:{
        createGoogleLink,
        emitOverdueInfo(){
            this.$emit('openOverdueInfo');
        },
    },


}
</script>


<style scoped>
.user-info-container{
    background: #f1f3f4;
    padding: 36px;
    gap: 24px;
    display: flex;
    flex-direction: column;
}
.customer-info-block{
    display: flex;
    flex-direction: column;
    gap: 16px;

}
.customer-info-row{
    gap: 8px;
    display: grid;
    grid-template-columns: 1fr 3fr;
}
.customer-info-row-key{
    font-weight: 600;
}
.customer-info-row-link{
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.customer-info-link,.customer-info-link:visited {
    cursor:pointer;
    text-decoration: none;
    color:#5ba6fd;
}
@media screen and (max-width: 480px) {
    .user-info-container{
        gap:12px;
        padding: 12px;
    }
    .customer-info-row{
        font-size: 14px;
    }
}
</style>