var i=(c,t,a)=>new Promise((n,s)=>{var d=e=>{try{o(a.next(e))}catch(l){s(l)}},r=e=>{try{o(a.throw(e))}catch(l){s(l)}},o=e=>e.done?n(e.value):Promise.resolve(e.value).then(d,r);o((a=a.apply(c,t)).next())});const g=c=>i(void 0,null,function*(){const{req:t,controller:a}=c;t.$router;const n=t==null?void 0:t.client;let s={title:"Home | Swyger Browser !",meta:[{name:"child value",content:"child content value"}]};const d={index:"pages/index.html"};let r=n==null?void 0:n.database();r.ready(()=>i(void 0,null,function*(){var e;(e=r.ref("/path/to/json"))==null||e.get({name:"test"}).on().get(l=>{console.log("Home Database listener: ",l.value)})}));let o={name:"Coorise"};yield a.render({data:o,meta:s,views:d})});export{g as default};
//# sourceMappingURL=index.controller.js.map