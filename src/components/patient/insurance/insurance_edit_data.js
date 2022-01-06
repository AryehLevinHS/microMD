export const InsuranceData ={
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
    insurance_id: {
        element: 'db',
        value: '',
        validation:{required: false},
        valid: true,
        touched: false
    },
    policy_number: {
        element: 'input',
        value: '',
        config:{
            name: 'policy_number_input',
            label:'Policy Number',
            type: 'text',
            placeholder: 'Policy Number'
        },
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    group_number: {
        element: 'input',
        value: '',
        config:{
            name: 'group_number_input',
            label:'Group Number',
            type: 'text',
            placeholder: 'Group Number'
        },
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    effective_date: {
        element: 'input',
        value: '',
        config:{
            name: 'begin_date_input',
            label:'Effective Date',
            type: 'date',
            placeholder: 'Effective Date'
        },
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    terminate_date: {
        element: 'input',
        value: '',
        config:{
            name: 'end_date_input',
            label:'Coverage Lapse Date',
            type: 'date',
            placeholder: 'Coverage Lapse Date'
        },
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    carrier_name: {
        element: 'input',
        value: '',
        config:{
            name: 'title_input',
            label:'Insurance Company',
            type: 'text',
            placeholder: 'Insurance Company'
        },
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    insurance_plan_name: {
        element: 'input',
        value: '',
        config:{
            name: 'plan_name_input',
            label:'Plan Name',
            type: 'text',
            placeholder: 'Plan Name'
        },
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    accept_assignment: {
        element: 'select',
        value: '',
        config:{
            label: "Accept Assignment",
            name: 'assignment_input',
            type: 'text',
            placeholder: 'Accept Assignment"',
            options:[]
        },
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    copay: {
        element: 'input',
        value: '',
        config:{
            label: "Copay",
            name: 'copay_input',
            type: 'text',
            placeholder: 'Copay'
        },
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true,
        enabled: false
    },
    copay_level: {
        element: 'select',
        value: '',
        config:{
            label: "Copay Level",
            name: 'copaylevel_input',
            type: 'text',
            placeholder: 'Copay Level',
            options:[],
            disabled: false
        },
        validation:{ required: false },
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    policy_holder_first_name: {
        element: 'input',
        value: '',
        config:{
            label: "Policy Holder First Name",
            name: 'ph_first_name_input',
            type: 'text',
            placeholder: 'Policy Holder First Name',
            disabled: false
        },
        validation:{ required: false },
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    policy_holder_last_name: {
        element: 'input',
        value: '',
        config:{
            label: "Policy Holder Last Name",
            name: 'ph_last_name_input',
            type: 'text',
            placeholder: 'Policy Holder last Name'
        },
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    policy_holder_middle_name: {
        element: 'input',
        value: '',
        config:{
            label: "Middle Name",
            name: 'mi_input',
            type: 'text',
            placeholder: 'Middle Name'
        },
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },  
  policy_holder_phone: {
        element: 'input',
        value: '',
        config:{
            label: "Home Phone",
            name: 'home_phone_input',
            type: 'text',
            placeholder: 'Home Phone'
        },
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    policy_holder_work_phone: {
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
    policy_holder_mobile: {
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
    policy_holder_relationship: {
        element: 'select',
        value: '',
        config:{
            label: "Relationship to Insured",
            name: 'relationshipo_input',
            type: 'text',
            options:[],
            placeholder: 'Relationship to Insured'
        },
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    policy_holder_email: {
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
    policy_holder_additional_info: {
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
    policy_holder_street_address: {
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
    policy_holder_street_address2: {
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
    policy_holder_city: {
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
    policy_holder_state: {
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
    policy_holder_zip: {
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
}