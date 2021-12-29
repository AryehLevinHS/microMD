export const LoginData ={
    userName: {
        element: 'input',
        value: '',
        config:{
            name: 'userName_input',
            type: 'text',
            placeholder: 'Enter your User Name'
        },
        validation:{required: true},
        valid: true,
        touched: false,
        validationMessage:''
    },
    password: {
        element: 'input',
        value: '',
        config:{
            name: 'password_input',
            type: 'password',
            placeholder: 'Enter your password'
        },
        validation:{required: true},
        valid: true,
        touched: false,
        validationMessage:''
    }
}