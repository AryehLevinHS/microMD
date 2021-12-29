export const ReferralData ={
    portal_user_id: {
        element: 'db',
        value: '',
        validation:{required: false},
        valid: true,
        touched: false,
    },
    patient_id: {
        element: 'db',
        value: '',
        validation:{required: false},
        valid: false,
        touched: false,
        validationMessage:''
    },
    receiver_id: {
        element: 'select',
        value: '',
        config:{
            name: 'receiver_input',
            label:'Send Referral Request To',
            options:[],
            placeholder: 'Send referral request to  '
        },
        validation:{required: true},
        valid: false,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    sender_id: {
        element: 'input',
        value: '',
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:''
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
    referral_type: {
        element: 'select',
        value: '',
        config:{
            label: "Referral Type",
            name: 'referral_type_input',
            options:[],
            placeholder: 'Select Referral Type'
        },
        validation:{required: false},
        valid: false,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    subject: {
        element: 'input',
        value: '',
        config:{
            label: "Subject",
            name: 'subject_input',
            type: 'text',
            placeholder: 'Enter the subject'
        },
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    reason: {
        element: 'textarea',
        value: '',
        config:{
            label: "Reason",
            name: 'message_input',
            type: 'text',
            placeholder: 'Enter reason for referral request',
            // style:{height: 100 }
        },
        validation:{required: true},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
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