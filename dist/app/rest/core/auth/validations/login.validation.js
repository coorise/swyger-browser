let l={style:{color:"red",display:"none"},email:"",password:"",password_length:"",password_digit:"",password_specialChar:""};const i=(a,s)=>{if(a.email?s.email="":(console.log("email is empty"),s.email="(email is empty)"),a.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)?s.email="":(console.log("give us a valid email address"),s.style.display="block",s.email="(Please give us valid email address)"),a.password.length<8?(console.log("password is too short"),s.style.display="block",s.password_length="(password is too short min <= 8 )"):s.password_length="",a.password.search(/[0-9]/)<0?(console.log("password must contain 1 digit"),s.style.display="block",s.password_digit="(password must contain at least 1 digit [0-9])"):s.password_digit="",a.password.search(/[!@#$%^&*]/)<0?(console.log("password must contain 1 special character"),s.style.display="block",s.password_specialChar="(password must contain at least 1 special character [!@#$%^&*])"):s.password_specialChar="",a.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)&&a.password&&a.password.length>=8&&a.password.search(/[0-9]/)>0&&a.password.search(/[!@#$%^&*]/)>0)return"ok"};export{l as ErrorLoginValidation,i as LoginValidation};
//# sourceMappingURL=login.validation.js.map
