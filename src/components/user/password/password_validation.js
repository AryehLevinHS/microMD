//=============================================================================
// passwordCheck - checks the password
//=============================================================================
export const passwordSingleCheck = (tocheck,new_pwd,confirm_pwd) => {
    const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
    
    switch(tocheck){
        case 'SIZE': 
           if (new_pwd.length  < 6 || new_pwd.length > 12) {
              return false
           }
           break;
        case 'CONFIRM': 
            if (new_pwd !== confirm_pwd) {
               return false
            }
            break;
        case 'SPECIAL_CHARS': 
          if(!specialChars.test(new_pwd)){
            return false
          }
          break;
        default : 
          return true
    }
   return true
}
//=============================================================================
// passwordCheck - checks the password
//=============================================================================
export const passwordCheck = (new_pwd,confirm_pwd) => {
    const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
    
    let error = ''
    let valid = true

    if (new_pwd.length  < 6 || new_pwd.length > 12) {
        error = 'Password must be between 6 and 12 characters'
        valid = false
    }
    if (new_pwd !== confirm_pwd) {
        if (error.length > 0) 
            error += ', ' 
            error += 'Confirm Password does not match'
        valid = false
    }
    if(!specialChars.test(new_pwd)){
        if (error.length > 0) 
            error += ', ' 
        error += 'Password must contain at least one special charater'
        valid = false
    }
    return ({valid:valid,error:error})
}
//=============================================================================
// end
//=============================================================================