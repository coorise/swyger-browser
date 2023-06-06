import AuthModule from "./auth/index.js";
import NotFoundModule from "./not_found/index.js";
import ProfileModule from "./profile/index.js";
import DocModule from "./doc/index.js";

//Here is the core module, because some modules are dependant from other modules,
// So when you remove something here, care to check if there is no usages outside
let CoreModule={
  ...NotFoundModule,
  ...AuthModule,
  ...ProfileModule,
  ...DocModule,
}
export default CoreModule
