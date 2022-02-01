export const PatientData ={
    portal_user_id: {
        element: 'input',
        value: '',
        validation:{required: false},
        valid: false,
        touched: false,
        validationMessage:'',
        showlabel: false
    },
    patient_id: {
        element: 'input',
        value: '',
        validation:{required: false},
        valid: false,
        touched: false,
        validationMessage:'',
        showlabel: false
    },
    first_name: {
        element: 'input',
        value: '',
        config:{
            name: 'first_name_input',
            label:'First Name',
            type: 'text',
            placeholder: 'First Name',
            disabled:false
        },
        validation:{required: true},
        valid: false,
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
            placeholder: 'Last Name'
        },
        validation:{required: true},
        valid: false,
        touched: false,
        validationMessage:'',
        showlabel: true
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
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true,
        enabled: false
    },
    gender: {
        element: 'select',
        value: '',
        config:{
            label: "Gender (sex at birth)",
            name: 'gender_input',
            type: 'text',
            placeholder: 'Gender',
            options:[],
            disabled: false
        },
        validation:{ required: false },
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    gender_identity: {
        element: 'select',
        value: '',
        config:{
            label: "Gender Identity",
            name: 'genderidentity_input',
            type: 'text',
            placeholder: 'Gender Identity',
            options:[],
            disabled: false
        },
        validation:{ required: false },
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    race: {
        element: 'select',
        value: '',
        config:{
            label: "race",
            name: 'race_input',
            type: 'text',
            placeholder: 'Race',
            options:[],
            disabled: false
        },
        validation:{ required: false },
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    primary_language: {
        element: 'select',
        value: '',
        config:{
            label: "Primary Language",
            name: 'language_input',
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
    maiden_name: {
        element: 'input',
        value: '',
        config:{
            label: "Maiden Name",
            name: 'maiden_name_input',
            type: 'text',
            placeholder: 'Maiden Name'
        },
        validation:{required: false},
        valid: false,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    marital_status: {
        element: 'select',
        value: '',
        config:{
            label: "Marital Status",
            name: 'maritalstatus_input',
            type: 'text',
            placeholder: 'Marital Status',
            options:[],
            disabled: false
        },
        validation:{ required: false },
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    family_size: {
        element: 'input',
        value: '',
        config:{
            label: "Family Size",
            name: 'family_size_input',
            type: 'text',
            placeholder: 'Family Size',
            options:[],
            disabled: false
        },
        validation:{ required: false },
        valid: true,
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
            name: 'workphone_input',
            type: 'text',
            placeholder: 'Work Phone'
        },
        validation:{required: false},
        valid: false,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    patient_primary_phone: {
        element: 'select',
        value: '',
        config:{
            label: "Primary Phone",
            name: 'primaryphone_input',
            type: 'text',
            placeholder: 'Primary Phone',
            options:[],
            disabled: false
        },
        validation:{ required: false },
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    street_address: {
        element: 'input',
        value: '',
        config:{
            label: "Address",
            name: 'address_input',
            type: 'text',
            placeholder: 'Address Line 1'
        },
        validation:{required: false},
        valid: false,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    street_address2: {
        element: 'input',
        value: '',
        config:{
            label: "Address 2",
            name: 'address2_input',
            type: 'text',
            placeholder: 'Address Line 2'
        },
        validation:{required: false},
        valid: false,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    city: {
        element: 'input',
        value: '',
        config:{
            label: "City",
            name: 'city_input',
            type: 'text',
            placeholder: 'City'
        },
        validation:{required: false},
        valid: false,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    state_code: {
        element: 'select',
        value: '',
        config:{
            label: "State",
            name: 'state_input',
            options:[],
            placeholder: 'State'
        },
        validation:{required: false},
        valid: false,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    zip: {
        element: 'input',
        value: '',
        config:{
            label: "Zip",
            name: 'zip_input',
            type: 'text',
            placeholder: 'Zip'
        },
        validation:{required: false},
        valid: false,
        touched: false,
        validationMessage:'',
        showlabel: true
    }
  
}