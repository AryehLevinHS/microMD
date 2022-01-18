export const apptrequestData ={
    appt_for_id: {
        element: 'dropdownlookup',
        value: '',
        config:{
            name: 'appt_for_id_input',
            label:'Appointment For',
            options:[],
            placeholder: 'Appointment for'
        },
        validation:{required: true},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    portal_user_id: {
        element: 'input',
        value: '',
        config:{
            label: "Sender",
            name: 'sender_input',
            type: 'text',
            placeholder: 'Enter the sender'
        },
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    sender_name: {
        element: 'input',
        value: '',
        config:{
            label: "Sender",
            name: 'sender_input',
            type: 'text',
            placeholder: 'Enter the sender',
            disabled: true
        },
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true,
        enabled: false
    },
    patient_id: {
        element: 'input',
        value: '',
        config:{
            label: "Patient",
            name: 'sender_input',
            type: 'text',
            placeholder: 'Enter the patient'
        },
        validation:{required: false},
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
    from_date: {
        element: 'date',
        value: '',
        config:{
            label: "From Date",
            name: 'req_date',
            type: 'date',
            placeholder: 'From date',
            disabled: false
        },
        validation:{ required: false },
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    appt_type: {
        element: 'select',
        value: '',
        config:{
            label: "Appointment Type",
            name: 'appt_type_input',
            options:[],
            placeholder: 'select reason'
        },
        validation:{required: false},
        valid: false,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    preferred_time: {
        element: 'select',
        value: '',
        config:{
            label: "Preferred Time",
            name: 'pref_time_input',
            options:[],
            placeholder: 'select preferred time'
        },
        validation:{required: false},
        valid: false,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    preferred_days: {
        element: 'checkboxgroup',
        value: '',
        config:{
            label: "Preferred Days",
            name: 'pref_days_input',
            options:[],
            placeholder: 'select preferred days'
        },
        validation:{required: false},
        valid: false,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    reason: {
        element: 'input',
        value: '',
        config:{
            label: "Reason",
            name: 'reason_input',
            type: 'text',
            placeholder: 'Enter the reason for the appointment'
        },
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
            name: 'message_input',
            type: 'text',
            placeholder: 'Enter any additional information'
            // style:{height: 100 }
        },
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: false
    },
    attachment: {
        value: [],
        validation:{ required: false },
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: false
    }
}