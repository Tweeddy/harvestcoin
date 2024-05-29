import { createStore } from 'vuex'

export default createStore({
  state: {
    PENDING_STATUS:'pending',
    CURRENT_STATUS:'current',
    VISITED_STATUS:'visited',
    ORDER_NUMBER:'Order Num',
    ADDRESS: 'Address',
    LATITUDE: 'Latitude',
    LONGITUDE: 'Longitude',
    CUSTOMER_NAME:'Description',
    ORDER_ID:'Order ID',
    customerInfoFormData:[],
    customerList: [
      {
          "Performer": "a.ramirez@breezeventures.ph",
          "Start date": "09.05.2024 07:00",
          "End Date": "09.05.2024 19:01",
          "Address": "Kawit,Toclong,Blk3 Lot12 Josua Vill,\u201a\u00c4\u00ee",
          "Latitude": 14.4032671988,
          "Longitude": 120.9273687098,
          "Description": "Fiasddel Fiasddel Sieasdrbo Yambotasd",
          "Order ID": "PHL-53WP-RF3U-SYDC-IMCY",
          "Order Num": 1,
          "Overdue Amount": 150,
          "Outstanding Balance": 150,
          "Regular Payment": 150,
          "Late Payment Fee": 150,
          "Due data":'19.06.2024',
      },
      {
          "Performer": "a.ramirez@breezeventures.ph",
          "Start date": "09.05.2024 07:00",
          "End Date": "09.05.2024 19:02",
          "Address": "Imus City,Carsadang Bago II,Blk8 Lot28 Legian 1 Homes,\u201a\u00c4\u00ee",
          "Latitude": 14.4158507945,
          "Longitude": 120.9252376294,
          "Description": "Nasdeil Jiasdng Maasdtela Caasdno",
          "Order ID": "PHL-MXCP-LNJY-QWM5-P5R5",
          "Order Num": 2,
          "Overdue Amount": 5000,
          "Outstanding Balance": 5000,
          "Regular Payment": 5000,
          "Late Payment Fee": 5000,
          "Due data":'10.06.2024',
      },
      {
          "Performer": "a.ramirez@breezeventures.ph",
          "Start date": "09.05.2024 07:00",
          "End Date": "09.05.2024 19:03",
          "Address": "Imus City,Pag-Asa I,Unit B trinidad compound,\u201a\u00c4\u00ee",
          "Latitude": 14.4224160192,
          "Longitude": 120.9285412662,
          "Description": "Rovasdeleen Uasdbe Sinasdtos Ligasdutan",
          "Order ID": "PHL-V56K-S7CT-YEWF-YHCI",
          "Order Num": 3,
          "Overdue Amount": 777,
          "Outstanding Balance": 777,
          "Regular Payment": 777,
          "Late Payment Fee": 777,
          "Due data":'09.06.2024',
      }
    ],
    currentMeetingId: null,
    totalMeetingCount: null,
    meetingList:[],
    isCreatedData: false,
    isListOfMeetingCompleted: false
  },
  getters: {
    customerInfoFormData(state){
      return state.customerInfoFormData;
    },
    customerList(state){
      return state.customerList;
    },
    currentMeetingId(state){
      return state.currentMeetingId;
    },
    totalMeetingCount(state){
      return state.totalMeetingCount;
    },
    meetingList(state){
      return state.meetingList;
    },
    isCreatedData(state){
      return state.isCreatedData;
    },
    isListOfMeetingCompleted(state){
      return state.isListOfMeetingCompleted;
    }
  },
  mutations: {
    setCustomerInfoFormData(state){
      console.log('setCustomerInfoFormData');
        state.customerInfoFormData.push({
          id: 'contact_field',
          type: 'dropdown',
          name: 'Who was the contact with?',
          default: '',
          placeholder: 'Choose the contact',
          value: [
            {
              id:1,
              name:'customer'
            },
            {
              id:2,
              name:'family',
            },
            {
              id:3,
              name: 'mother'
            },
            {
              id:4,
              name: 'father'
            },
            {
              id:5,
              name: 'sister'
            },
            {
              id:6,
              name: 'brother'
            }

          ]
        });
        state.customerInfoFormData.push( {
          id: 'result_field',
          type: 'dropdown',
          name:'Result',
          default: '',
          placeholder: 'Choose the result',
          value: [
            {
              id:1,
              name:'result1'
            },
            {
              id:2,
              name:'result2',
            },
            {
              id:3,
              name: 'result3'
            },
            {
              id:4,
              name: 'result4'
            },
            {
              id:5,
              name: 'result5'
            },
        ]
        });
        state.customerInfoFormData.push({
          id: 'get_number_field',
          type: 'radio',
          name: 'Did he/she give you phone number?',
          default: '',
          value: [
            {
              id:1,
              name:'Yes'
            },
            {
              id:2,
              name:'No',
            },
          ]
        });
        state.customerInfoFormData.push({
          id: 'free_text_field',
          type: 'textarea',
          name: 'You can make some new information updates about customer',
          placeholder: 'Please, type the date and your comment',
          default: '',
          value:'',
        });
     },
     clearCustomerFormData(state){
       state.customerInfoFormData.length = 0;
     },
     setCustomerTable(state){
       console.log('setCustomerTable');
      //meetingList = [{
        //  id : order num
        //  status: pending / current / visited 
        //  form_submitted : true/ false
        //  meetingData: [],
        //  overdueData: [],
        // },
        // { ... }, { .... },]

      state.customerList.forEach(meeting => {
        let tmpObj = {};
        tmpObj.id = meeting[state.ORDER_NUMBER];
        tmpObj.status = state.PENDING_STATUS;
        tmpObj.form_submitted = false;
        tmpObj.meetingData = [
          {
            field_type: 'simple',
            field_name: 'Address',
            field_value: meeting[state.ADDRESS],
            field_map_link: '',
            map_coords:{
                lat:meeting[state.LATITUDE],
                lng:meeting[state.LONGITUDE],
            }
        },
        {
            field_type: 'simple',
            field_name: 'Customer name',
            field_value: meeting[state.CUSTOMER_NAME],
        },
        {
            field_type: 'action',
            field_name: 'Additional info',
            field_value: {
                'Order ID': meeting[state.ORDER_ID],
                'Agreement number': '12314536'
            }
        }
        ];
        tmpObj.tabData= [{
            tab_id:1,
            tab_title: 'Info about customer',
            tab_header:'Customer',
            tab_type:'columns',
            data:[{
              'Customer ID': meeting[state.ORDER_ID],
              'Name': meeting[state.CUSTOMER_NAME],
              'product type': meeting[state.ADDRESS],
            },
            {
              'Process': 'SOFT',
              'Outstanding Balance': meeting[state['Outstanding Balance']],
              'Monthly payment': meeting[state['Regular Payment']],
              'Due data': meeting[state['Due data']],
              'Late Payment Fee': meeting[state['Late Payment Fee']],

            }]
        },{
          tab_id:2,
          tab_title: '',
          tab_header:'Customer',
          tab_type:'columns',
          data:{
            'Customer ID': meeting[state.ORDER_ID],
            'Name': meeting[state.CUSTOMER_NAME],
            'product type': meeting[state.ADDRESS],
          }
        },];
        state.meetingList.push(tmpObj);
      });
      state.currentMeetingId = state.meetingList[0].id;
      localStorage.setItem('currentMeetingId',  state.meetingList[0].id)

      state.meetingList[0].status = state.CURRENT_STATUS;
      localStorage.setItem('meetingList',  JSON.stringify(state.meetingList));
      state.totalMeetingCount = state.meetingList.length;
      state.isCreatedData = true;
     },
     setNextMeetingData(state){
       console.log('cur meet ', state.meetingList.find(meeting => meeting.id === state.currentMeetingId));
       state.meetingList && (state.meetingList.find(meeting => meeting.id === state.currentMeetingId).status = state.VISITED_STATUS);
       state.currentMeetingId = ++state.currentMeetingId;
       localStorage.setItem('currentMeetingId',  state.currentMeetingId);
       if (state.currentMeetingId > state.totalMeetingCount) {
          state.isListOfMeetingCompleted = true;  
          localStorage.setItem('currentMeetingId',  0);
          localStorage.setItem('meetingList', []);
       }
      },
  },
  actions: {
    getCustomerList(state){

      console.log('getCustomerList');
        //получаем json со всеми встречами и кладем в state.customerList

    },
  },
  modules: {
  }
})
