import { createStore } from 'vuex'

export default createStore({
  state: {
    customerInfoFormData:[]
  },
  getters: {
    customerInfoFormData(state){
      return state.customerInfoFormData;
    }
  },
  mutations: {
    setCustomerInfoFormData(state){
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
     }
  },
  actions: {
  },
  modules: {
  }
})
