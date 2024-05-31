export const createGoogleLink = function(vm) {
        if (vm.curentMeetingData) {
            const lngAndLat = vm.curentMeetingData?.find(field => 
                field.field_name === vm.CUSTOMER_ADDRESS
            )?.map_coords;
            vm.google_address_link = `${vm.GOOGLE_ADDRESS_TEMPLATE_URL}${Object.values(lngAndLat).join(',')}`;
        }

};

    
