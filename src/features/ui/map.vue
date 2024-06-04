<template>
    <div v-if='showMap' class='google-map-container'>
        <GoogleMap ref='map'
        api-key="AIzaSyBwYOCA_7QCj7pSQLTfs76Qi4bOgBsHJQ4"
        style="width: 100%; height: 500px"
        :center="center"
        :zoom="14"
        >
            <div v-if='polyMarker'>
            <Marker  v-for='destination of destinationList' :key='destination.lat' :options="{ position: destination }" />
            </div>
            <Marker v-if='!polyMarker' :options="{ position: destination }" />       
        </GoogleMap>
     
    </div>
</template>

<script >
import { GoogleMap, Marker, Polyline } from 'vue3-google-map'
import computedMixins from '@/mixins/computedMixins'

export default{
    components:{GoogleMap,Marker, Polyline },
    props:['polyMarker'],
    mixins:[computedMixins],
    data(){
        return {
            showMap:false,
            myLocation:{},
            fieldPath: {
                path: [],
                geodesic: true,
                strokeColor: '#FF0000',
                strokeOpacity: 1.0,
                strokeWeight: 2,
                closerZoom:18,
                furtherZoom:13,
            }
        }
    },
    computed:{
        destinationList(){
            return this.$store.getters.destinationList;        
        },
        destination(){
            return this.curentMeetingData?.find(field => field.field_name === 'Address').map_coords;
        },
        center(){
            return  this.polyMarker ? this.destinationList[Math. floor(this.destinationList.length / 2) ] : this.destination;
        },
    },
    mounted(){
        this.showMap = true;
            // this.fieldPath.path.push(this.meetingData.find(field => field.field_name === 'Address').map_coords);
            // console.log('fieldPathh', this.fieldPath);
            // if (navigator.geolocation){
            //     navigator.geolocation.getCurrentPosition(res => {
            //     this.myLocation.lat = res.coords.latitude;
            //     this.myLocation.lng = res.coords.longitude;
            //     this.showMap = true;
            //     this.getRoute();
            //     console.log('myLocation ', this.myLocation);
            //     })
            // }
            // else {
            //     console.log('geolocation is not allowed')
            // }       
    },
    methods:{
         getRoute() {
            // let directionsService = new google.maps.DirectionsService();
            // let directionsDisplay = new google.maps.DirectionsRenderer();
            // console.log('direction',directionsService,  directionsDisplay);
            // console.log('this.refs ',this.$refs);
            // directionsDisplay.setMap(this.$refs.map.$mapObject)
    
            // directionsService.route({
            //     origin: this.myLocation, // Can be coord or also a search query
            //     destination: this.destination,
            //     travelMode: 'DRIVING'
            // }, function (response, status) {
            //     console.log('response ', response);
            //     console.log('status ', status);
            //     if (status === 'OK') {
            //     directionsDisplay.setDirections(response) // draws the polygon to the map
            //     } else {
            //     console.log('Directions request failed due to ' + status)
            //     }
            // })
    },  
}
}
</script>

<style scoped>
.google-map-container{
    width:100%;
    margin-top:-16px;
}
</style>


