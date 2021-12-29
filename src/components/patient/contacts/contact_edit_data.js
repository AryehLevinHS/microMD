export const ContactData ={
    portal_user_id: {
        element: 'db',
        value: '',
        validation:{required: false},
        valid: true,
        touched: false
    },
    patient_id: {
        element: 'db',
        value: '',
        validation:{required: false},
        valid: true,
        touched: false
    },
    patcontact_id: {
        element: 'db',
        value: '',
        validation:{required: false},
        valid: true,
        touched: false
    },
    contact_id: {
        element: 'db',
        value: '',
        validation:{required: false},
        valid: true,
        touched: false
    },
    contact_type_description: {
        element: 'select',
        value: '',
        config:{
            name: 'contact_type_input',
            label:'Contact Type',
            type: 'text',
            placeholder: 'Contact Type',
            options:[]
        },
        validation:{required: true},
        valid: false,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    is_primary: {
        element: 'select',
        value: '',
        config:{
            name: 'primary_input',
            label:'Is Primary',
            type: 'text',
            placeholder: 'Is Primary',
            options:[]
        },
        validation:{required: true},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    contact_type: {
        element: 'select',
        value: '',
        config:{
            name: 'contact_type_input',
            label:'Contact Type',
            type: 'text',
            placeholder: 'Contact Type',
            options:[]
        },
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    relationship: {
        element: 'select',
        value: '',
        config:{
            name: 'relationship_input',
            label:'Relationship to Patient',
            type: 'text',
            placeholder: 'Relationship',
            options:[]
        },
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    title: {
        element: 'input',
        value: '',
        config:{
            name: 'title_input',
            label:'Title',
            type: 'text',
            placeholder: 'Title'
        },
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    first_name: {
        element: 'input',
        value: '',
        config:{
            name: 'first_name_input',
            label:'First Name',
            type: 'text',
            placeholder: 'First Name'
        },
        validation:{required: true},
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
            placeholder: 'Last Name'
        },
        validation:{required: true},
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
            name: 'dob_input',
            type: 'date',
            placeholder: 'Date of birth'
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
            label: "Gender",
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
    primary_language: {
        element: 'select',
        value: '',
        config:{
            label: "Language",
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
    
    institution_name: {
        element: 'input',
        value: '',
        config:{
            label: "Institution Name",
            name: 'institution_input',
            type: 'text',
            placeholder: 'Institution Name'
        },
        validation:{required: false},
        valid: true,
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
        valid: true,
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
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    additionalInfo: {
        element: 'textarea',
        value: '',
        config:{
            label: "Additional Information",
            name: 'additionalInfo_input',
            type: 'text',
            placeholder: 'Additional Information',
        },
        validation:{required: false},
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
        valid: true,
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
        valid: true,
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
        valid: true,
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
        valid: true,
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
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    country: {
        element: 'input',
        value: '',
        config:{
            label: "Country",
            name: 'country_input',
            type: 'text',
            placeholder: 'Country'
        },
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
}