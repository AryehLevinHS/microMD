export const refillData ={
    patient_id: {
        element: 'input',
        value: '',
        validation:{required: false},
        valid: true,
        touched: false,    
    },
    provider_id: {
        element: 'select',
        value: '',
        config:{
            label: "Provider",
            name: 'provider_input',
            options:[],
            placeholder: 'Enter the Provider'
        },
        validation:{required: true},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    time_sent: {
        element: 'input',
        value: '',
        config:{
            label: "Time Sent",
            name: 'sent_input',
            type: 'text',
            placeholder: 'Enter the time sent',
            disabled: true
        },
        validation:{ required: false },
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
       
    },
    portal_user_id: {
        element: 'input',
        value: '',
        validation:{required: false},
        valid: false,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    notes: {
        element: 'textarea',
        value: '',
        config:{
            label: "Notes",
            name: 'notes_input',
            type: 'text',
            placeholder: 'Notes to the provider'
        },
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    }
}