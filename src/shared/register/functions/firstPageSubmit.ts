import { Form, checkFormErrors } from "../Form"
import { userNameIsTaken } from "./checkUserNameAvailability"

export const firstPageSubmit =  (form:Form, setForm: (x: Form) => void)  => {
  let error = checkFormErrors(form, ['display_name', "email",'password', 'confirm_password'])


  if (form['password'].variable !== form['confirm_password'].variable && !form['password'].hasError)   {
    error++
    form['confirm_password'].hasError = true
  } else {
    form['confirm_password'].hasError = false
    
  }

  setForm(structuredClone(form))
  if (error === 0) {
    return true
  }
  return false
}
