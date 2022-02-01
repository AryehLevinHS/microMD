export const RegisterConfirmData ={
    confirm_for: {
        element: 'db',
        value: 'REGISTER',
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:''
    }, 
    first_name: {
        element: 'input',
        value: '',
        config:{
            label: "First Name",
            name: 'name_input',
            type: 'text',
            placeholder: 'Enter your first name'
        },
        validation:{required: true },
        valid: true,
        touched: false,
        validationMessage:''
    },
    last_name: {
        element: 'input',
        value: '',
        config:{
            label: "Last Name",
            name: 'lastname_input',
            type: 'text',
            placeholder: 'Enter your last name'
        },
        validation:{required: true},
        valid: true,
        touched: false,
        validationMessage:''
    },
    date_of_birth: {
        element: 'input',
        value: '',
        config:{
            label: "Date of Birth",
            name: 'dob_input',
            type: 'date',
            placeholder: 'Date of birth',
            disabled: false
        },
        validation:{required: true},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true,
        enabled: false
    },
    confirm_mechanism: {
        element: 'select',
        value: '',
        config:{
            label:'Send Confirmation Code Via',
            name: 'medchanism_input',
            type: 'text',
            placeholder: 'Send confirmation code using',
            options: []
        },
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:''
    },
    confirm_code: {
        element: 'input',
        value: '',
        config:{
            label:'Confirmation Code',
            name: 'confirmation_input',
            type: 'text',
            placeholder: 'Enter your confimation code'
        },
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:''
    },
    confirm_data: {
        element: 'input',
        value: '',
        config:{
            name: 'confirm_input',
            label:'SMS',
            type: 'text',
            placeholder: 'Alternative Registered SMS'
        },
        validation:{required: false},
        valid: false,
        touched: false,
        validationMessage:''
    },
    confirm_email: {
        element: 'input',
        value: '',
        config:{
            name: 'confirm_email',
            label:'Email (this needs to be previously registered)',
            type: 'text',
            placeholder: 'Email (this needs to be previously registered)',
            disabled:true

        },
        validation:{required: false},
        valid: false,
        touched: false,
        validationMessage:''
    },
}