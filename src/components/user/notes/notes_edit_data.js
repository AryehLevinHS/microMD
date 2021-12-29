export const NoteData ={
    note_id: {
        element: 'input',
        value: '',
        validation:{required: false},
        valid: false,
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
    note_date: {
        element: 'input',
        value: '',
        config:{
            label: "Date",
            name: 'dob_input',
            type: 'date',
            placeholder: 'Date of birth',
            disabled: false
        },
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true,
        enabled: false
    },
    note_type: {
        element: 'select',
        value: '',
        config:{
            label: "Note Type",
            name: 'dob_input',
            type: 'text',
            placeholder: 'Note Type',
            options:[],
            disabled: false
        },
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true,
        enabled: false
    },
    status: {
        element: 'select',
        value: '',
        config:{
            label: "Status",
            name: 'dob_input',
            type: 'text',
            placeholder: 'Status',
            options:[],
            disabled: false
        },
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true,
        enabled: false
    },
    subject: {
        element: 'input',
        value: '',
        config:{
            label: "Subject",
            name: 'sent_input',
            type: 'text',
            placeholder: 'Subject',
            disabled: false
        },
        validation:{ required: false },
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    note: {
        element: 'messagetext',
        value: '',
        config:{
            label: "Note",
            name: 'note_input',
            type: 'text',
            placeholder: 'Enter your note'
        },
        validation:{required: false},
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