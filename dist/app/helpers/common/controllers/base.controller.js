var E=Object.defineProperty;var _=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var P=(o,i,t)=>i in o?E(o,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[i]=t,l=(o,i)=>{for(var t in i||(i={}))L.call(i,t)&&P(o,t,i[t]);if(_)for(var t of _(i))b.call(i,t)&&P(o,t,i[t]);return o};var m=(o,i,t)=>(P(o,typeof i!="symbol"?i+"":i,t),t),v=(o,i,t)=>{if(!i.has(o))throw TypeError("Cannot "+t)};var c=(o,i,t)=>(v(o,i,"read from private field"),t?t.call(o):i.get(o)),T=(o,i,t)=>{if(i.has(o))throw TypeError("Cannot add the same private member more than once");i instanceof WeakSet?i.add(o):i.set(o,t)},w=(o,i,t,e)=>(v(o,i,"write to private field"),e?e.call(o,t):i.set(o,t),t);var g=(o,i,t)=>new Promise((e,a)=>{var f=r=>{try{s(t.next(r))}catch(d){a(d)}},h=r=>{try{s(t.throw(r))}catch(d){a(d)}},s=r=>r.done?e(r.value):Promise.resolve(r.value).then(f,h);s((t=t.apply(o,i)).next())});import{Q as y}from"../../../../resources/node_modules/petite-vue.es.js";import{$ as u}from"../../../../resources/node_modules/jquery.js";import{k}from"../../../../resources/node_modules/index.js";import"../../../../resources/node_modules/dottie.js";import"../../../../resources/node_modules/validkeys.js";import"../../../../resources/node_modules/encodePacket.browser.js";import"../../../../resources/node_modules/commons.js";import"../../../../resources/node_modules/decodePacket.browser.js";import"../../../../resources/node_modules/base64-arraybuffer.js";import"../../../../resources/node_modules/polling.js";import"../../../../resources/node_modules/transport.js";import"../../../../resources/node_modules/util.js";import"../../../../resources/node_modules/globalThis.browser.js";import"../../../../resources/node_modules/path-reference.js";import"../../../../resources/node_modules/utils.js";import"../../../../resources/node_modules/bind.js";import"../../../../resources/node_modules/browser.js";import"../../../../resources/node_modules/pad.js";import"../../../../resources/node_modules/not-supported.js";import"../../../../resources/node_modules/id.js";import"../../../../resources/node_modules/optional-observable.js";import"../../../../resources/node_modules/simple-colors.js";import"../../../../resources/node_modules/ipc.js";import"../../../../resources/node_modules/simple-event-emitter.js";import"../../../../resources/node_modules/node-lock.js";import"../../../../resources/node_modules/path-info.js";import"../../../../resources/node_modules/assert.js";import"../../../../resources/node_modules/data-reference.js";import"../../../../resources/node_modules/data-snapshot.js";import"../../../../resources/node_modules/subscription2.js";import"../../../../resources/node_modules/data-proxy.js";import"../../../../resources/node_modules/type-mappings.js";import"../../../../resources/node_modules/acebase-local.js";import"../../../../resources/node_modules/acebase-base.js";import"../../../../resources/node_modules/debug.js";import"../../../../resources/node_modules/api-local.js";import"../../../../resources/node_modules/api.js";import"../../../../resources/node_modules/node-value-types.js";import"../../../../resources/node_modules/query.js";import"../../../../resources/node_modules/node-errors.js";import"../../../../resources/node_modules/async-task-batch.js";import"../../../../resources/node_modules/acebase-browser.js";import"../../../../resources/node_modules/helpers.js";import"../../../../resources/node_modules/partial-array.js";import"../../../../resources/node_modules/ascii85.js";import"../../../../resources/node_modules/yeast.js";import"../../../../resources/node_modules/parseqs.js";import"../../../../resources/node_modules/xmlhttprequest.browser.js";import"../../../../resources/node_modules/has-cors.js";import"../../../../resources/node_modules/websocket.js";import"../../../../resources/node_modules/websocket-constructor.browser.js";import"../../../../resources/node_modules/socket.js";import"../../../../resources/node_modules/parseuri.js";import"../../../../resources/node_modules/on.js";import"../../../../resources/node_modules/url.js";import"../../../../resources/node_modules/manager.js";import"../../../../resources/node_modules/backo2.js";import"../../../../resources/node_modules/binary.js";import"../../../../resources/node_modules/is-binary.js";import"../../../../resources/node_modules/AxiosError.js";import"../../../../resources/node_modules/transitional.js";import"../../../../resources/node_modules/toFormData.js";import"../../../../resources/node_modules/toURLEncodedForm.js";import"../../../../resources/node_modules/URLSearchParams.js";import"../../../../resources/node_modules/AxiosURLSearchParams.js";import"../../../../resources/node_modules/FormData.js";import"../../../../resources/node_modules/Blob.js";import"../../../../resources/node_modules/formDataToJSON.js";import"../../../../resources/node_modules/settings.js";import"../../../../resources/node_modules/transaction.js";import"../../../../resources/node_modules/simple-cache.js";import"../../../../resources/node_modules/node-info.js";import"../../../../resources/node_modules/schema.js";import"../../../../resources/node_modules/create-index.js";import"../../../../resources/node_modules/node-address.js";import"../../../../resources/node_modules/index.service.js";import"../../../../resources/node_modules/axios2.js";import"../../../../resources/node_modules/Axios.js";import"../../../../resources/node_modules/buildURL.js";import"../../../../resources/node_modules/InterceptorManager.js";import"../../../../resources/node_modules/dispatchRequest.js";import"../../../../resources/node_modules/transformData.js";import"../../../../resources/node_modules/AxiosHeaders.js";import"../../../../resources/node_modules/parseHeaders.js";import"../../../../resources/node_modules/isCancel.js";import"../../../../resources/node_modules/CanceledError.js";import"../../../../resources/node_modules/adapters.js";import"../../../../resources/node_modules/null.js";import"../../../../resources/node_modules/xhr.js";import"../../../../resources/node_modules/settle.js";import"../../../../resources/node_modules/cookies.js";import"../../../../resources/node_modules/buildFullPath.js";import"../../../../resources/node_modules/isAbsoluteURL.js";import"../../../../resources/node_modules/combineURLs.js";import"../../../../resources/node_modules/isURLSameOrigin.js";import"../../../../resources/node_modules/parseProtocol.js";import"../../../../resources/node_modules/speedometer.js";import"../../../../resources/node_modules/mergeConfig.js";import"../../../../resources/node_modules/validator.js";import"../../../../resources/node_modules/data.js";import"../../../../resources/node_modules/CancelToken.js";import"../../../../resources/node_modules/spread.js";import"../../../../resources/node_modules/isAxiosError.js";import"../../../../resources/node_modules/HttpStatusCode.js";import"../../../../resources/node_modules/jwt-decode.esm.js";import"../../../../resources/node_modules/api-route.js";import"../../../../resources/node_modules/v4.js";import"../../../../resources/node_modules/native.js";import"../../../../resources/node_modules/rng.js";import"../../../../resources/node_modules/stringify.js";import"../../../../resources/node_modules/env.js";import"../../../../resources/node_modules/Observable.js";import"../../../../resources/node_modules/Subscriber.js";import"../../../../resources/node_modules/tslib.es6.js";import"../../../../resources/node_modules/isFunction.js";import"../../../../resources/node_modules/Subscription.js";import"../../../../resources/node_modules/UnsubscriptionError.js";import"../../../../resources/node_modules/createErrorClass.js";import"../../../../resources/node_modules/arrRemove.js";import"../../../../resources/node_modules/config.js";import"../../../../resources/node_modules/reportUnhandledError.js";import"../../../../resources/node_modules/timeoutProvider.js";import"../../../../resources/node_modules/noop.js";import"../../../../resources/node_modules/NotificationFactories.js";import"../../../../resources/node_modules/errorContext.js";import"../../../../resources/node_modules/observable2.js";import"../../../../resources/node_modules/pipe.js";import"../../../../resources/node_modules/identity.js";import"../../../../resources/node_modules/ConnectableObservable.js";import"../../../../resources/node_modules/refCount.js";import"../../../../resources/node_modules/lift.js";import"../../../../resources/node_modules/OperatorSubscriber.js";import"../../../../resources/node_modules/animationFrames.js";import"../../../../resources/node_modules/performanceTimestampProvider.js";import"../../../../resources/node_modules/animationFrameProvider.js";import"../../../../resources/node_modules/Subject.js";import"../../../../resources/node_modules/ObjectUnsubscribedError.js";import"../../../../resources/node_modules/BehaviorSubject.js";import"../../../../resources/node_modules/ReplaySubject.js";import"../../../../resources/node_modules/dateTimestampProvider.js";import"../../../../resources/node_modules/AsyncSubject.js";import"../../../../resources/node_modules/asap.js";import"../../../../resources/node_modules/AsapAction.js";import"../../../../resources/node_modules/AsyncAction.js";import"../../../../resources/node_modules/Action.js";import"../../../../resources/node_modules/intervalProvider.js";import"../../../../resources/node_modules/immediateProvider.js";import"../../../../resources/node_modules/Immediate.js";import"../../../../resources/node_modules/AsapScheduler.js";import"../../../../resources/node_modules/AsyncScheduler.js";import"../../../../resources/node_modules/Scheduler.js";import"../../../../resources/node_modules/async.js";import"../../../../resources/node_modules/queue.js";import"../../../../resources/node_modules/QueueAction.js";import"../../../../resources/node_modules/QueueScheduler.js";import"../../../../resources/node_modules/animationFrame.js";import"../../../../resources/node_modules/AnimationFrameAction.js";import"../../../../resources/node_modules/AnimationFrameScheduler.js";import"../../../../resources/node_modules/VirtualTimeScheduler.js";import"../../../../resources/node_modules/Notification.js";import"../../../../resources/node_modules/empty.js";import"../../../../resources/node_modules/of.js";import"../../../../resources/node_modules/args.js";import"../../../../resources/node_modules/isScheduler.js";import"../../../../resources/node_modules/from.js";import"../../../../resources/node_modules/scheduled.js";import"../../../../resources/node_modules/scheduleObservable.js";import"../../../../resources/node_modules/innerFrom.js";import"../../../../resources/node_modules/isArrayLike.js";import"../../../../resources/node_modules/isPromise.js";import"../../../../resources/node_modules/isInteropObservable.js";import"../../../../resources/node_modules/isAsyncIterable.js";import"../../../../resources/node_modules/throwUnobservableError.js";import"../../../../resources/node_modules/isIterable.js";import"../../../../resources/node_modules/iterator.js";import"../../../../resources/node_modules/isReadableStreamLike.js";import"../../../../resources/node_modules/observeOn.js";import"../../../../resources/node_modules/executeSchedule.js";import"../../../../resources/node_modules/subscribeOn.js";import"../../../../resources/node_modules/schedulePromise.js";import"../../../../resources/node_modules/scheduleArray.js";import"../../../../resources/node_modules/scheduleIterable.js";import"../../../../resources/node_modules/scheduleAsyncIterable.js";import"../../../../resources/node_modules/scheduleReadableStreamLike.js";import"../../../../resources/node_modules/throwError.js";import"../../../../resources/node_modules/isObservable.js";import"../../../../resources/node_modules/lastValueFrom.js";import"../../../../resources/node_modules/EmptyError.js";import"../../../../resources/node_modules/firstValueFrom.js";import"../../../../resources/node_modules/ArgumentOutOfRangeError.js";import"../../../../resources/node_modules/NotFoundError.js";import"../../../../resources/node_modules/SequenceError.js";import"../../../../resources/node_modules/timeout.js";import"../../../../resources/node_modules/isDate.js";import"../../../../resources/node_modules/bindCallback.js";import"../../../../resources/node_modules/bindCallbackInternals.js";import"../../../../resources/node_modules/mapOneOrManyArgs.js";import"../../../../resources/node_modules/map.js";import"../../../../resources/node_modules/bindNodeCallback.js";import"../../../../resources/node_modules/combineLatest.js";import"../../../../resources/node_modules/argsArgArrayOrObject.js";import"../../../../resources/node_modules/createObject.js";import"../../../../resources/node_modules/argsOrArgArray.js";import"../../../../resources/node_modules/concat.js";import"../../../../resources/node_modules/concatAll.js";import"../../../../resources/node_modules/mergeAll.js";import"../../../../resources/node_modules/mergeMap.js";import"../../../../resources/node_modules/mergeInternals.js";import"../../../../resources/node_modules/connectable.js";import"../../../../resources/node_modules/defer.js";import"../../../../resources/node_modules/forkJoin.js";import"../../../../resources/node_modules/fromEvent.js";import"../../../../resources/node_modules/fromEventPattern.js";import"../../../../resources/node_modules/generate.js";import"../../../../resources/node_modules/iif.js";import"../../../../resources/node_modules/interval.js";import"../../../../resources/node_modules/timer.js";import"../../../../resources/node_modules/merge.js";import"../../../../resources/node_modules/never.js";import"../../../../resources/node_modules/onErrorResumeNext.js";import"../../../../resources/node_modules/pairs.js";import"../../../../resources/node_modules/partition.js";import"../../../../resources/node_modules/not.js";import"../../../../resources/node_modules/filter.js";import"../../../../resources/node_modules/race.js";import"../../../../resources/node_modules/range.js";import"../../../../resources/node_modules/using.js";import"../../../../resources/node_modules/zip.js";import"../../../../resources/node_modules/audit.js";import"../../../../resources/node_modules/auditTime.js";import"../../../../resources/node_modules/buffer.js";import"../../../../resources/node_modules/bufferCount.js";import"../../../../resources/node_modules/bufferTime.js";import"../../../../resources/node_modules/bufferToggle.js";import"../../../../resources/node_modules/bufferWhen.js";import"../../../../resources/node_modules/catchError.js";import"../../../../resources/node_modules/combineAll.js";import"../../../../resources/node_modules/combineLatestAll.js";import"../../../../resources/node_modules/joinAllInternals.js";import"../../../../resources/node_modules/toArray.js";import"../../../../resources/node_modules/reduce.js";import"../../../../resources/node_modules/scanInternals.js";import"../../../../resources/node_modules/combineLatestWith.js";import"../../../../resources/node_modules/concatMap.js";import"../../../../resources/node_modules/concatMapTo.js";import"../../../../resources/node_modules/concatWith.js";import"../../../../resources/node_modules/connect.js";import"../../../../resources/node_modules/fromSubscribable.js";import"../../../../resources/node_modules/count.js";import"../../../../resources/node_modules/debounce.js";import"../../../../resources/node_modules/debounceTime.js";import"../../../../resources/node_modules/defaultIfEmpty.js";import"../../../../resources/node_modules/delay.js";import"../../../../resources/node_modules/delayWhen.js";import"../../../../resources/node_modules/take.js";import"../../../../resources/node_modules/ignoreElements.js";import"../../../../resources/node_modules/mapTo.js";import"../../../../resources/node_modules/dematerialize.js";import"../../../../resources/node_modules/inct.js";import"../../../../resources/node_modules/inctUntilChanged.js";import"../../../../resources/node_modules/inctUntilKeyChanged.js";import"../../../../resources/node_modules/elementAt.js";import"../../../../resources/node_modules/throwIfEmpty.js";import"../../../../resources/node_modules/endWith.js";import"../../../../resources/node_modules/every.js";import"../../../../resources/node_modules/exhaust.js";import"../../../../resources/node_modules/exhaustAll.js";import"../../../../resources/node_modules/exhaustMap.js";import"../../../../resources/node_modules/expand.js";import"../../../../resources/node_modules/finalize.js";import"../../../../resources/node_modules/find.js";import"../../../../resources/node_modules/findIndex.js";import"../../../../resources/node_modules/first.js";import"../../../../resources/node_modules/groupBy.js";import"../../../../resources/node_modules/isEmpty.js";import"../../../../resources/node_modules/last.js";import"../../../../resources/node_modules/takeLast.js";import"../../../../resources/node_modules/materialize.js";import"../../../../resources/node_modules/max.js";import"../../../../resources/node_modules/flatMap.js";import"../../../../resources/node_modules/mergeMapTo.js";import"../../../../resources/node_modules/mergeScan.js";import"../../../../resources/node_modules/mergeWith.js";import"../../../../resources/node_modules/min.js";import"../../../../resources/node_modules/multicast.js";import"../../../../resources/node_modules/onErrorResumeNextWith.js";import"../../../../resources/node_modules/pairwise.js";import"../../../../resources/node_modules/pluck.js";import"../../../../resources/node_modules/publish.js";import"../../../../resources/node_modules/publishBehavior.js";import"../../../../resources/node_modules/publishLast.js";import"../../../../resources/node_modules/publishReplay.js";import"../../../../resources/node_modules/raceWith.js";import"../../../../resources/node_modules/repeat.js";import"../../../../resources/node_modules/repeatWhen.js";import"../../../../resources/node_modules/retry.js";import"../../../../resources/node_modules/retryWhen.js";import"../../../../resources/node_modules/sample.js";import"../../../../resources/node_modules/sampleTime.js";import"../../../../resources/node_modules/scan.js";import"../../../../resources/node_modules/sequenceEqual.js";import"../../../../resources/node_modules/share.js";import"../../../../resources/node_modules/shareReplay.js";import"../../../../resources/node_modules/single.js";import"../../../../resources/node_modules/skip.js";import"../../../../resources/node_modules/skipLast.js";import"../../../../resources/node_modules/skipUntil.js";import"../../../../resources/node_modules/skipWhile.js";import"../../../../resources/node_modules/startWith.js";import"../../../../resources/node_modules/switchAll.js";import"../../../../resources/node_modules/switchMap.js";import"../../../../resources/node_modules/switchMapTo.js";import"../../../../resources/node_modules/switchScan.js";import"../../../../resources/node_modules/takeUntil.js";import"../../../../resources/node_modules/takeWhile.js";import"../../../../resources/node_modules/tap.js";import"../../../../resources/node_modules/throttle.js";import"../../../../resources/node_modules/throttleTime.js";import"../../../../resources/node_modules/timeInterval.js";import"../../../../resources/node_modules/timeoutWith.js";import"../../../../resources/node_modules/timestamp.js";import"../../../../resources/node_modules/window.js";import"../../../../resources/node_modules/windowCount.js";import"../../../../resources/node_modules/windowTime.js";import"../../../../resources/node_modules/windowToggle.js";import"../../../../resources/node_modules/windowWhen.js";import"../../../../resources/node_modules/withLatestFrom.js";import"../../../../resources/node_modules/zipAll.js";import"../../../../resources/node_modules/zipWith.js";var n;class jp{constructor(){m(this,"accessToken",localStorage.getItem("accessToken"));m(this,"date",new Date().getFullYear());m(this,"envDir",ENV==="dev"?"/src":"");m(this,"env",ENV);m(this,"theme","dashui");m(this,"defaultThemePath");m(this,"pathTheme","/index.html");m(this,"parentPath");m(this,"defaultParentComponentPath");m(this,"parentComponentPath");T(this,n,void 0);m(this,"hooks",{index:{beforeEnter:function(){},beforeLeave:function(){}}});m(this,"components",[]);u.ajaxPrefilter(function(i,t,e){i.async=!0}),w(this,n,new k({title:APP_GLOBAL_TITLE,meta:[{name:"title",content:APP_GLOBAL_TITLE},{name:"description",content:APP_GLOBAL_TITLE}]})),c(this,n).render()}render(i){return g(this,null,function*(){try{let{data:t={},meta:e={},views:a={}}=i;this.components.length>0&&this.components.forEach(p=>{a=l(l({},a),p==null?void 0:p.views),t=l(l({},t),p==null?void 0:p.data)});let f=u("#root_frame"),h,s;localStorage.getItem("theme")&&(this.theme=localStorage.getItem("theme")),this.defaultThemePath=this.pathTheme?_themes+"/"+this.theme+this.pathTheme:this.defaultThemePath,this.defaultParentComponentPath=this.parentComponentPath?_themes+"/"+this.theme+this.parentPath+this.parentComponentPath:this.defaultParentComponentPath,f.attr("src",this.defaultThemePath),document.getElementById("root_frame").data=l({date:this.date,envDir:this.envDir,env:this.env,visible:{display:"block"},onCreated(){},onMounted(){}},t);let r=yield(yield fetch(_themes+"/"+this.theme+this.parentPath+this.parentComponentPath)).text();for(let p of Object.keys(a)){let C=yield(yield fetch(_themes+"/"+this.theme+this.parentPath+a[p])).text();r=r.replace(`<${p}/>`,C)}let d=yield(yield fetch(_root+"component.html")).text();r=r+d,h=f.contents(),h.find("#mainView").html(r),h.find("body").addClass("scroll_theme_parent"),s=h.find("#metaView"),u("#root_meta").html(s.html()),yield y(Object.assign({env:this.env,envDir:this.envDir,onCreated(){},onMounted(){}})).mount("#root_html"),c(this,n).setTags(e),yield c(this,n).render()}catch(t){ENV==="dev"&&console.log(t)}})}}n=new WeakMap;export{jp as default};
//# sourceMappingURL=base.controller.js.map
