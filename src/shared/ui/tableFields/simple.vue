<template>
    <div class='simple-field-container'>
         <span class='simple-field-text'> {{data.field_value}}</span>
         <a v-if="data.field_map_link" href=# class='simple-field-map-link'> {{mapText}}</a>
    </div>
</template>

<script>
    export default{
        name:'simple',
        props:['data'],
        data(){
            return{
                mapText:'map'
            }
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