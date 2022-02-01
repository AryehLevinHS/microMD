export const LoginData ={
    userName: {
        element: 'input',
        value: '',
        config:{
            label: 'Username:',
            name: 'userName_input',
            type: 'text',
            placeholder: 'Enter your Username'
        },
        validation:{required: true},
        valid: true,
        touched: false,
        validationMessage:''
    },
    password: {
        element: 'password',
        value: '',
        config:{
            label: 'Password:',
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