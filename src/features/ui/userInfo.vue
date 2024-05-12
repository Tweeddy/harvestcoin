<template>
    <div class='user-info-container'>
        <div class='customer-info-block'>
           <div class='customer-info-row'>
              <span class='customer-info-row-key'> {{CUSTOMER_NAME}}</span> 
              <span class='customer-info-row-value'> {{customer_name_value}}</span> 
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
import {meetingData} from '../api/meetingData'

export default{
    name:'userInfo',
    computed:{
        customer_name_value(){
            return this.meetingData.find(field => field.field_name === this.CUSTOMER_NAME).field_value;
        },
        customer_address_value(){
            return this.meetingData.find(field => field.field_name === this.CUSTOMER_ADDRESS).field_value;
        },
        customer_id_value(){
           return this.meetingData.find(field => field.field_name === this.ADDITIONAL_INFO).field_value[this.AGGREEMENT_NUMBER];
        },
        },
    data(){
        return {
            meetingData,
            CUSTOMER_NAME: 'Customer name',
            CUSTOMER_ADDRESS: 'Address',
            ADDITIONAL_INFO:'Additional info',
            AGGREEMENT_NUMBER: 'Agreement number',
            MAP_LINK:'Map',
            GOOGLE_ADDRESS_TEMPLATE_URL:'https://www.google.com/maps?q=',
            google_address_link:''
        }
    },
    mounted(){
        this.createGoogleLink();
    },
    methods:{
        createGoogleLink(){
            const lngAndLat = this.meetingData.find(field => 
                field.field_name === this.CUSTOMER_ADDRESS
            ).map_coords;
            this.google_address_link = `${this.GOOGLE_ADDRESS_TEMPLATE_URL}${Object.values(lngAndLat).join(',')}`;
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
    text-decoration: none;
    color:#5ba6fd;
}
</style>