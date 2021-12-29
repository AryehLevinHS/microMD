//import * as yup from 'yup';
//const yup = require("yup");
/*
export let schema = yup.object().shape({
    name: yup.string().required(),
    age: yup.number().required().positive().integer(),
    email: yup.string().email(),
    website: yup.string().url(),
    createdOn: yup.date().default(function () {
      return new Date();
    }),
  });
*/
export const careplanData ={
    portal_user_id: {
        element: 'db',
        value: '',
        validation:{required: false},
        valid: true,
        touched: false
    },
    patient_id: {
        element: 'input',
        value: '',
        config:{
            name: 'patient_input',
            label:'Patient',
            type: 'text',
            placeholder: 'Enter the patient'
        },
        validation:{required: false},
        valid: false,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    provider_id: {
        element: 'select',
        value: '',
        config:{
            label: "Provider",
            name: 'receiver_input',
            options:[],
            placeholder: 'Enter the Provider'
        },
        validation:{required: true},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    taken_on: {
        element: 'input',
        value: '',
        config:{
            label: "Time Taken",
            name: 'taken_on_input',
            type: 'text',
            placeholder: 'Enter the time taken',
            disabled: true
        },
        validation:{ required: false },
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
       
    },
  
    sender_name: {
        element: 'input',
        value: '',
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:''
    },
    careplan_id: {
        element: 'db',
        value: '',
        validation:{required: false},
        valid: false,
        touched: false,
        validationMessage:'',
        showlabel: false
    },
    careplan_name: {
        element: 'input',
        value: '',
        config:{
            label: "Careplan Name",
            name: 'careplan_name_input',
            type: 'text',
            placeholder: 'CarePlan',
            disabled: false
        },
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
        
    },
    alert_provider: {
        element: 'checkbox',
        value: 'true',
        config:{
            label: "Send Alert Message to Provider",
            name: 'alert_input',
            type: 'checkbox',
            placeholder: '',
            checked: false
        },
        validation:{required: false},
        valid: false,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    progress_level: {
        element: 'select',
        value: '',
        config:{
            label: "Progress",
            name: 'progress_input',
            options:[],
            placeholder: 'Progress'
        },
        validation:{required: true},
        valid: false,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    progress_notes: {
        element: 'textarea',
        value: '',
        config:{
            label: "Progress Notes",
            name: 'progress_notes_input',
            type: 'text',
            placeholder: 'Progress Notes'
        },
     //   validation: {yup_check: true,yup_condition:"{progress_notes : yup.required('must be 20 or less')}"},
     //   validation_yup: yup.string().required() ,
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    comment: {
        element: 'textarea',
        value: '',
        config:{
            label: "Comment",
            name: 'comment_input',
            type: 'text',
            placeholder: 'Enter your comment'
    
        },
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    }
}