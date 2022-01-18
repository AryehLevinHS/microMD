export const messageData ={
    portal_user_id: {
        element: 'db',
        value: '',
        validation:{required: false},
        valid: true,
        touched: false
    },
    patient_id: {
        element: 'db',
        value: '',
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    patient_name: {
        element: 'db',
        value: '',
        validation:{required: false},
        valid: true,
        touched: false
    },
    receiver_id: {
        element: 'select',
        value: '',
        config:{
            name: 'receiver_input',
            label:'Send To',
            options:[],
            placeholder: 'Enter the receiver',
            color:'green'
        },
        validation:{required: true},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    receiver_name: {
        element: 'db',
        value: '',
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    replyto_msg_id: {
        element: 'input',
        value: '',
        validation:{required: false},
        valid: true,
        touched: false
    },
    sender_name: {
        element: 'input',
        value: '',
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
        
    },
    time_sent: {
        element: 'db',
        value: '',
        validation:{ required: false },
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
       
    },
    message_type: {
        element: 'select',
        value: '',
        config:{
            label: "Message Type",
            name: 'message_type_input',
            options:[],
            placeholder: 'Select Message Topic'
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
        validation:{required: true},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    message: {
        element: 'messagetext',
        value: '',
        config:{
            label: "Message",
            name: 'message_input',
            type: 'text',
            placeholder: 'Enter your message',
            // style:{height: 300 }
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