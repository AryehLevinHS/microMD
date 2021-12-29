export const PasswordData = {
    portal_user_id: {
        element: 'input',
        value: '',
        valid: true,
        touched: false,
    },
    old_password: {
        element: 'input',
        value: '',
        config:{
            name: 'old_password_input',
            type: 'password',
            placeholder: 'Enter your current password',
            label:'Current Password'
        },
        validation:{required: true},
        valid: true,
        touched: false,
        validationMessage:'',
        showPassword: false
    },
    new_password: {
        element: 'password',
        value: '',
        config:{
            name: 'new_password_input',
            type: 'password',
            placeholder: 'Enter new password',
            label:'New Password'
        },
        validation:{confirm: 'new_password'},
        valid: true,
        touched: false,
        validationMessage:'',
        showPassword: false
    },

    confirm_password: {
        element: 'password',
        value: '',
        config:{
            name: 'confirm_password_input',
            type: 'password',
            placeholder: 'Confirm password',
            label:'Confirm Password'
        },
        validation:{required: true},
        valid: true,
        touched: false,
        validationMessage:'',
        showPassword: false
    }
}
