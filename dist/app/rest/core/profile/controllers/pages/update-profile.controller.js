var r=(n,s,o)=>new Promise((c,l)=>{var d=e=>{try{t(o.next(e))}catch(a){l(a)}},f=e=>{try{t(o.throw(e))}catch(a){l(a)}},t=e=>e.done?c(e.value):Promise.resolve(e.value).then(d,f);t((o=o.apply(n,s)).next())});const i=()=>r(void 0,null,function*(){});export{i as default};
//# sourceMappingURL=update-profile.controller.js.map
