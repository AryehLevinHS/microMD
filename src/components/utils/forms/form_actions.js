//import {useState}  from 'react'
//import {moment} from 'moment'
//import * as yup from 'yup';
//=============================================================================
// validate - validates the fields
// check if need to use Joy or someother form validator
//=============================================================================
export const validateField = (element, formdata= [],id) => {
    let error = [true,''];

    if(element.validation.email){
        const valid = /\S+@\S+\.\S+/.test(element.value)
        const message = `${!valid ? 'Must be a valid email':''}`;
        error = !valid ? [valid,message] : error;
    }

    if(element.validation.confirm){
        const valid = element.value.trim() === formdata[element.validation.confirm].value;
        const message = `${!valid ? 'Passwords do not match':''}`;
        error = !valid ? [valid,message] : error;
    }

    if(element.validation.required){
        console.log('got to reqired')
        const valid = element.value.trim() !== '';
        const message = `${!valid ? 'This field is required':''}`;
        error = !valid ? [valid,message] : error;
    }

    // if (element.config.type === 'date') {
    //     const dateString = element.value.trim()
    //     const dateStart = moment('1900-01-01') //could specify in data
    //     const dateEnd   = moment('2050-01-01')
    //     const dateValue = moment(dateString);
    //    // const dateValue = moment(dateString,'YYYY-MM-DD');
    //     if(dateValue == null || !dateValue.isValid()) {
    //        error = [false,'Invalid Date']
    //     }
    //     else if( dateValue.isBefore(dateStart) ||  dateValue.isAfter(dateEnd) ) {
    //        error = [false,'Date out of Range']
    //      }
    //  }

    return error
}

//=============================================================================
// updateField - checks the new value and then updates the formdata
//=============================================================================
export const updateField = (formdata,field_id,action,value, formName ) => {
    const newFormdata = {...formdata}
    const newElement = { ...newFormdata[field_id]}
   
    newElement.value = value
    newElement.touched = true
   
   // validate field when loose focus  
   if(action === 'onblur'){
        let validData = validateField(newElement,formdata,field_id);
        newElement.valid = validData[0];
        newElement.validationMessage = validData[1];
   }

    newFormdata[field_id] = newElement;

    return newFormdata;
}
//=============================================================================
// clearValidation - clears the validation of a field
//=============================================================================
export const clearValidation = (formdata, field) => {
    
    formdata[field].valid = true
    formdata[field].validationMessage = ''
    formdata[field].touched = true

    return formdata;
}
//=============================================================================
// useForm - settting the value using hooks
//=============================================================================
////export const useForm = (initValue) => {
 //   const [values,setValues] = useState(initValue)

  ////  return [values,e=>{setValues({...values,[e.target.name]:e.target.value})}]
    // useage
    // const [values,handleChange] = useForm({email:'',password:''})
    // <input name="email" value={values.email} onChange={handleChange} />
//}
//=============================================================================
// generateData - creates object datatosubmit based on the formdata (key,value)
//=============================================================================
export const generateData = (formdata, formName) =>{
    let dataToSubmit = {};

    for(let key in formdata){
        dataToSubmit[key] = formdata[key].value;
    }
    return dataToSubmit;
}
//=============================================================================
// isFormValid - checks if form is valid
//=============================================================================
export const isFormValidCheck = (formdata, formName) => {
    let formIsValid = true;
   
    for(let key in formdata){
        formIsValid = formdata[key].valid && formIsValid
    }
    return formIsValid;
}

//=============================================================================
// isFormValid - checks if form is valid
//=============================================================================
export const isFormValid = (formdata, formName) => {
    let formIsValid = true;
    let errorMsg = ''

    for(let key in formdata){
        if (formdata[key].validation.required === true) {
           formIsValid = formdata[key].valid && formIsValid
          if (!formdata[key].valid){
               errorMsg += `${formdata[key].config.label} is not valid, `  
           }
        }
    }
    return {formIsValid,errorMsg};
}
//=============================================================================
// populateOptionFields -set up dropdown fields
//=============================================================================
export const populateOptionFields = (formdata,arrayData=[],field) => {
  const newArray = []
  const newFormData = {...formdata}

  arrayData.forEach(item=>{
      newArray.push({key:item.key,value:item.value})
  })
  newFormData[field].config.options = newArray
  return newFormData
}
//=============================================================================
// addtoOptionFields -adds an item to a existing option field (eg from a lookup)
//=============================================================================
export const addtoOptionFields = (formdata,field,arrayData=[]) => {
   const newFormData = {...formdata}
   let itemExist = 0
   let existingArray =  newFormData[field].config.options
   
    arrayData.forEach(item=>{
        if(!existingArray.find( checkItem => checkItem.key===item.key )) {
           existingArray.push({key:item.key,value:item.value})
        }
    })
    newFormData[field].config.options = existingArray
    return newFormData
  }
//=============================================================================
// setDefaultValue -set up default value for a field
//=============================================================================
export const setDefaultValue = (formdata,field,defaultValue) => {
    const newFormData = {...formdata}
  
    newFormData[field].value = defaultValue
    return newFormData
  }
//=============================================================================
// setValue -sets the value for a field
//=============================================================================
export const setValue = (formdata,field,defaultValue) => {
    
    const newFormData = {...formdata}
    newFormData[field].value = defaultValue
    return newFormData
}
//=============================================================================
// setProperty -set the property of a field
//=============================================================================
export const setProperty = (formdata,field,property,value) => {
 
    switch(property){
    case 'disabled': formdata[field].config.disabled = value
    break;
    case 'invalid': formdata[field].valid = false;
                    formdata[field].validationMessage = value
    break;
    case 'valid': formdata[field].valid = true;
                  formdata[field].validationMessage = ''
    break;
    // case 'password_on': formdata[field].config.type = 'password'
    // break;
    // case 'password_off': formdata[field].config.type = 'text'
    // break;
    default: 
    }
   
    return formdata
  }
//=============================================================================
// resetFields -resets the fields in a form
//=============================================================================
export const resetFields = (formdata,formName) => {
  const newFormdata = {...formdata}

  for(let key in newFormdata){
    newFormdata[key].value = ''
    newFormdata[key].valid = false
    newFormdata[key].touched = false
    newFormdata[key].validationMessage = ''
  }
  return newFormdata
}
  
//=============================================================================
// populate fields (note does not use newformdata - just the array passed in)
//=============================================================================
export const populateFields = (formdata,fields) => {
 
    for(let key in formdata){
        if (fields[key]) {
           formdata[key].value   = fields[key]
           formdata[key].valid   = true
           formdata[key].touched = true
           formdata[key].validationMessage = ''
      }
    }
    return formdata
}
//=============================================================================