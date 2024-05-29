<template>
    <div class='simple-field-container'>
         <span class='simple-field-text'> {{data.field_value}}</span>
         <a v-if="data.map_coords && google_address_link" :href='google_address_link' target="_blank" class='simple-field-map-link'> {{mapText}}</a>
    </div>
</template>

<script>
import {createGoogleLink} from '@/shared/model/createData/'
import computedMixins from '@/mixins/computedMixins';
    export default{
        name:'simple',
        props:['data'],
        mixins:[computedMixins],
        data(){
            return{
                mapText:'Map',
                google_address_link:'',
                CUSTOMER_ADDRESS: 'Address',
                GOOGLE_ADDRESS_TEMPLATE_URL:'https://www.google.com/maps?q=',
            }
        },
          mounted(){
            createGoogleLink(this);
        },
    methods:{
        createGoogleLink,
    },
    }
</script>

<style scoped>
.simple-field-map-link, .simple-field-map-link:visited{
    color:#5ba6fd;
    text-decoration: none;
}
.simple-field-container{
    display: flex;
    flex-direction: column;
}
.simple-field-text{
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>>