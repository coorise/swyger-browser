var f=(d,l,t)=>new Promise((r,s)=>{var c=i=>{try{o(t.next(i))}catch(m){s(m)}},n=i=>{try{o(t.throw(i))}catch(m){s(m)}},o=i=>i.done?r(i.value):Promise.resolve(i.value).then(c,n);o((t=t.apply(d,l)).next())});import{ErrorCodeValidation as C,CodeValidation as V}from"../../validations/code.validation.js";const E=d=>f(void 0,null,function*(){var o,i;const{req:l,controller:t}=d;l.$router;const r=t.client;let s={title:"Email Verify Code | Agglomy !",meta:[{name:"child value",content:"child content value"}]};const c={index:"pages/verify-code.html"};let n={page:"verify-email",message:((o=l.query)==null?void 0:o.message)||"",user:{email:(i=l.query)==null?void 0:i.email,code:""},error:C,clientError:"",verifyCode(){return f(this,null,function*(){var v,g;try{if(V(this.user,this.error)==="ok"){ENV==="dev"&&console.log("All Fields are completed");let h={email:this.user.email,emailCode:this.user.code},a=yield r==null?void 0:r.auth().verifyEmailCode(h).val();if(a!=null&&a.error){let e=(v=a==null?void 0:a.error)==null?void 0:v.auth;switch(e==null?void 0:e.code){case 600:this.clientError=(e==null?void 0:e.message)||"This User does not exit!";break;case 605:this.clientError=(e==null?void 0:e.message)||"Code is Invalid!";break;case 606:this.clientError=(e==null?void 0:e.message)||"Code Is Expired!";break}}else(g=a==null?void 0:a.data)!=null&&g.data&&(this.clientError="",l.go())}}catch(y){ENV==="dev"&&console.log(y)}})},refreshToken(){}};yield t.render({data:n,meta:s,views:c})});export{E as default};
//# sourceMappingURL=verify-email-code.controller.js.map
