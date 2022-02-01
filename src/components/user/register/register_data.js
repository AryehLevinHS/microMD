export const RegisterData ={
    portal_user_id: {
        element: 'db',
        value: '',
        validation:{required: false},
        valid: true,
        showlabel: true,
        enabled: false
    },
    practice_id: {
        element: 'db',
        value: '',
        validation:{required: false},
        valid: true,
        showlabel: true,
        enabled: false
    },
    updated_by: {
        element: 'db',
        value: '',
        validation:{required: false},
        valid: true,
        showlabel: true,
        enabled: false
    },
    patient_id: {
        element: 'db',
        value: '',
        validation:{required: false},
        valid: true,
        showlabel: true,
        enabled: false
    },
    patient_name: {
        element: 'input',
        value: '',
        config:{
            label: "Patient / Default Patient (if user type is not patient) ",
            name: 'patient_input',
            type: 'text',
            placeholder: 'Patient',
            options:[],
            disabled: true
        },
        validation:{ required: false },
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    user_type: {
        element: 'input',
        value: 'PATIENT',
        validation:{required: false},
        valid: true,
        showlabel: true,
        enabled: false
    },
    login_name: {
        element: 'input',
        value: '',
        config:{
            name: 'login_name_input',
            label:'Login Name',
            type: 'text',
            placeholder: 'Login Name'
        },
        validation:{required: true},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
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
        validation:{ required: true },
        valid: true,
        touched: false,
        validationMessage:''
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
        validation:{confirm: 'new_password'},
        valid: true,
        touched: false,
        validationMessage:''
        },
    first_name: {
        element: 'input',
        value: '',
        config:{
            name: 'first_name_input',
            label:'First Name',
            type: 'text',
            placeholder: 'First Name',
            disabled: true
        },
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    last_name: {
        element: 'input',
        value: '',
        config:{
            label: "Last Name",
            name: 'last_name_input',
            type: 'text',
            placeholder: 'Last Name',
            disabled: true
        },
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },  
    date_of_birth: {
        element: 'input',
        value: '',
        config:{
            label: "Date of Birth",
            name: 'sent_input',
            type: 'date',
            placeholder: 'Date of Birth',
            disabled: true
        },
        validation:{ required: false },
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    default_clinic: {
        element: 'select',
        value: '',
        config:{
            name: 'default_clinic_input',
            label:'Default Clinic',
            type: 'text',
            placeholder: 'Enter you default Clinic',
            options: []
        },
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:''
    },
    primary_language: {
        element: 'select',
        value: '',
        config:{
            label: "Primary Language",
            name: 'sent_input',
            type: 'text',
            placeholder: 'Primary Language',
            options:[],
            disabled: false
        },
        validation:{ required: false },
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    email: {
        element: 'input',
        value: '',
        config:{
            label: "Email",
            name: 'email_type_input',
            type: 'email',
            placeholder: 'Email'
        },
        validation:{required: false},
        valid: false,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    home_phone: {
        element: 'input',
        value: '',
        config:{
            label: "Home Phone",
            name: 'home_phone_input',
            type: 'text',
            placeholder: 'Home Phone'
        },
        validation:{required: false},
        valid: false,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    work_phone: {
        element: 'input',
        value: '',
        config:{
            label: "Work Phone",
            name: 'work_phone_input',
            type: 'text',
            placeholder: 'Work Phone'
        },
        validation:{required: false},
        valid: false,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    mobile: {
        element: 'input',
        value: '',
        config:{
            label: "Mobile",
            name: 'mobile_input',
            type: 'text',
            placeholder: 'Mobile'
        },
        validation:{required: false},
        valid: false,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    fax: {
        element: 'input',
        value: '',
        config:{
            label: "Fax",
            name: 'fax_input',
            type: 'text',
            placeholder: 'Fax'
        },
        validation:{required: false},
        valid: false,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    notes: {
        element: 'textarea',
        value: '',
        config:{
            label: "Notes",
            name: 'notes_input',
            type: 'text',
            placeholder: 'Enter your notes'
        },
        validation:{required: false},
        valid: false,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
   
}