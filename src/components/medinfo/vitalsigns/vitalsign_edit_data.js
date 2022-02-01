export const vitalsignData ={
  
    patient_id: {
        element: 'db',
        value: '',
        validation:{required: false},
        valid: false,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    provider_id: {
        element: 'select',
        value: '',
        config:{
            label: "Provider",
            name: 'receiver_input',
            options:[],
            placeholder: 'Enter the Provider'
        },
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:'Provider name is required',
        showlabel: true
    },
    portal_user_id: {
        element: 'db',
        value: '',
        validation:{required: false},
        valid: true,
        touched: false
    },
    sender_name: {
        element: 'db',
        value: '',
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:''
    },
    taken_on: {
        element: 'input',
        value: '',
        config:{
            label: "Time taken",
            name: 'sent_input',
            type: 'text',
            placeholder: 'Enter the time taken',
            disabled: true
        },
        validation:{ required: false },
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true     
    },
    systolic: {
        element: 'input_number',
        value: '',
        config:{
            label: "Systolic (mmHg)",
            type: 'text',
            name: 'systolic_input',
            placeholder: 'Systolic'
        },
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    diastolic: {
        element: 'input_number',
        value: '',
        config:{
            label: "Diastolic (mmHg)",
            name: 'diastolic_input',
            type: 'text',
            placeholder: 'Diastolic',
            disabled: false
        },
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
        
    },
    pulse_rate: {
        element: 'input_number',
        value: '',
        config:{
            label: "Pulse Rate (/min)",
            name: 'pulse_rate_input',
            type: 'text',
            placeholder: 'Pulse rate (/min)'
        },
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    oxygen: {
        element: 'input_number',
        value: '',
        config:{
            label: "Oxygen Saturation (%)",
            name: 'oxygen_input',
            type: 'text',
            placeholder: 'Oxygen Saturation (%)'
        },
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    respiratory_rate: {
        element: 'input_number',
        value: '',
        config:{
            label: "Respiratory Rate (rpm)",
            name: ' respiratory_rate_input',
            type: 'text',
            placeholder: 'Respiratory Rate (rpm)'
        },
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    temperature: {
        element: 'input_number',
        value: '',
        config:{
            label: "Temperature (F)",
            name: 'temperature_input',
            type: 'text',
            placeholder: 'Temperature (F)'
        },
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    weight_lb: {
        element: 'input_number',
        value: '',
        config:{
            label: "Weight (lb)",
            name: 'weight_input',
            type: 'text',
            placeholder: 'Weight (lb)'
        },
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    weight_oz: {
        element: 'input_number',
        value: '',
        config:{
            label: "Weight (oz)",
            name: 'weight_oz_input',
            type: 'text',
            placeholder: 'Weight (oz)'
        },
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    height_ft: {
        element: 'input_number',
        value: '',
        config:{
            label: "Height (ft)",
            name: 'height_ft_input',
            type: 'text',
            placeholder: 'Height (ft)',
            style: {width:'30px'}
        },
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    height_in: {
        element: 'input_number',
        value: '',
        config:{
            label: "Height (inches)",
            name: 'height_in_input',
            type: 'text',
            placeholder: 'Height (in)'
        },
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    blood_sugar: {
        element: 'input_number',
        value: '',
        config:{
            label: "Blood Sugar (mg/dL)",
            name: 'sugar_input',
            type: 'text',
            placeholder: 'Enter blood sugar (mg/dL)'
        },
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    pain_severity: {
        element: 'select',
        value: '',
        config:{
            label: "Pain Severity",
            name: 'pain_input',
            type: 'text',
            options:[],
            placeholder: 'Pain severity'
        },
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    comment: {
        element: 'textarea',
        value: '',
        config:{
            label: "Comment",
            name: 'comment_input',
            type: 'text',
            placeholder: 'Enter your comment'
        },
        validation:{required: false},
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    alert: {
        element: 'checkbox',
        value: false,
        config:{
            label: "Send Alert Message to your Provider",
            name: 'alert_input',
            type: 'checkbox',
            placeholder: '',
            checked: false
        },
        validation:{required: false},
        valid: false,
        touched: false,
        validationMessage:'',
        showlabel: true
    },
    attachment: {
        value: [],
        validation:{ required: false },
        valid: true,
        touched: false,
        validationMessage:'',
        showlabel: false
    }
}