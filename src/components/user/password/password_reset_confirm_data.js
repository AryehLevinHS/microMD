export const PasswordResetConfirmData ={
    confirm_for: {
        element: 'input',
        value: 'PASSWORD_RESET',
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:''
    }, 
    login_name: {
        element: 'input',
        value: '',
        config:{
            label:'Login Name',
            name: 'medchanism_input',
            type: 'text',
            placeholder: 'Login Name',
            options: []
        },
        validation:{required: true},
        valid: true,
        touched: false,
        validationMessage:''
    },
    date_of_birth: {
        element: 'input',  //date_picker
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
        valid: false,
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
    confirm_sms: {
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