export const AuthenticationData ={
    portal_user_id: {
        element: 'db',
        value: '',
        validation:{required: false},
    },
    authentication_id: {
        element: 'db',
        value: '',
        validation:{required: false},
    },
    description: {
        element: 'input',
        value: '',
        config:{
            name: 'description',
            label:'Description',
            type: 'text',
            placeholder: 'Description'
        },
        validation:{required: true},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    number_type: {
        element: 'select',
        value: '',
        config:{
            name: 'number_type_input',
            label:'Number Type',
            type: 'text',
            placeholder: 'Number Type',
            options:[]
        },
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    number: {
        element: 'input',
        value: '',
        config:{
            name: 'number_input',
            label:'Number',
            type: 'text',
            placeholder: 'Number'
        },
        validation:{required: true},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
}