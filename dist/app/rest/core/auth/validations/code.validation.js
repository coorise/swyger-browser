let a={style:{color:"red",display:"none"},email:"",code:"",code_length:""};const i=(e,l)=>{if(e.email?l.email="":(console.log("email is empty"),l.email="(email is empty)"),e.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)?l.email="":(console.log("give us a valid email address"),l.style.display="block",l.email="(Please give us valid email address)"),e.code.length<0?(console.log("password is too short"),l.style.display="block",l.code_length="(code is too short)"):l.code_length="",e.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)&&e.code&&e.code.length>0)return"ok"};export{i as CodeValidation,a as ErrorCodeValidation};
//# sourceMappingURL=code.validation.js.map