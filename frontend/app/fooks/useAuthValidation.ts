export default function useAuthValidation(
        email: string, password: string
    ) {
    const authValidation = () => {
      let email_fmt_err = false
      let email_len_err = false
      let pass_len_err = false
      let pass_min_len_err = false

      let index = email.indexOf("@")
      if(index === -1){
        email_fmt_err = true
      }

      if(email.length === 0){
        email_len_err = true
      }

      if(password.length === 0){
        pass_len_err = true
      }

      if(password.length < 6){
        pass_min_len_err = true
      }
  
      return { email_fmt_err, email_len_err, pass_len_err, pass_min_len_err }
    }
    return { authValidation }
  }
  