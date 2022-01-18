export const LoginData ={
    userName: {
        element: 'input',
        value: '',
        config:{
            label: 'User Name:',
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