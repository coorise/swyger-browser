var a=Object.defineProperty;var l=(o,e,t)=>e in o?a(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var r=(o,e,t)=>(l(o,typeof e!="symbol"?e+"":e,t),t);class g{constructor(){r(this,"required",e=>{if(localStorage.getItem("accessToken")&&localStorage.getItem("refreshToken"))return!0;window.top.location.href="/login"});r(this,"isLoggedIn",e=>{localStorage.getItem("accessToken")&&localStorage.getItem("refreshToken")&&(window.top.location.href="/home")})}}export{g as default};
//# sourceMappingURL=auth.middleware.js.map