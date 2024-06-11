import{$ as fh,$a as wr,$b as Xo,Aa as _h,Ac as rl,B as $e,Ba as jn,Bb as Ge,Bc as sl,C as Wc,Ca as Vi,Cb as Nh,D as ci,Da as Cs,Db as Vo,E as li,Ea as yr,F as jc,Fa as xr,Fb as qe,G as Xc,Ga as bh,Gb as Fh,H as sn,Ha as yh,I as lh,Ia as xh,Ja as wh,K as $c,Ka as Sh,Kb as Ho,L as Wn,La as Mh,Lb as kh,M as di,Ma as Eh,Mb as Go,N as Yc,Na as on,Nb as Wo,O as dh,Oa as Ah,Ob as tl,Pa as Rs,Pb as Uh,Q as uh,Qa as an,Qb as el,R as hh,Ra as Ot,Rb as nl,S as Po,Sa as ko,Sb as Tr,T as Es,Ta as Is,Tb as jo,U as Ye,Ub as Bh,V as yn,Va as Uo,W as ge,Wa as Th,Wb as Gi,X as de,Xa as Ch,Xb as zh,Y as ui,Yb as Vh,Z as mt,Za as Ht,Zb as Ze,_ as qt,_a as Kc,_b as Hh,a as it,aa as At,ab as Hi,ac as Gh,b as Re,ba as qc,bb as Dn,bc as Wh,ca as H,cb as Rh,cc as It,d as gr,da as st,db as Jc,dc as jh,e as Gn,ea as Lo,eb as Ds,ec as Os,f as rh,fa as Zc,fb as Sr,fc as Xh,g as vr,ga as As,gb as Pn,gc as $h,h as Bc,ha as ue,hb as Mr,hc as Wi,i as zc,ia as ve,ib as Ln,ic as $o,j as ee,ja as Zt,jb as Bo,jc as Yh,k as Xe,ka as we,kb as Qc,l as ai,la as Oo,lb as _e,m as He,ma as ph,mb as fe,n as _t,na as hi,nb as ke,o as Bi,oa as In,ob as Ih,oc as fi,p as Vc,pa as br,pb as Dh,pc as qh,q as sh,qa as mh,qb as Ph,qc as Zh,r as Lt,ra as gh,rb as Lh,rc as Yo,s as _r,sa as No,sb as Ps,sc as Kh,t as rn,ta as Fo,tb as Oh,tc as qo,u as Hc,ua as pn,ub as zo,v as Do,va as zi,vb as Xn,w as Gc,wa as Se,wb as cn,wc as Jh,x as oh,xa as mn,xb as Ls,xc as il,y as ah,ya as vh,yb as Er,z as ch,za as Ts,zb as Ar,zc as Zo}from"./chunk-IHM3KHWJ.js";var Fs=class{},Jo=class{},ji=class i{constructor(t){this.normalizedNames=new Map,this.lazyUpdate=null,t?typeof t=="string"?this.lazyInit=()=>{this.headers=new Map,t.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let r=e.slice(0,n),s=r.toLowerCase(),o=e.slice(n+1).trim();this.maybeSetNormalizedName(r,s),this.headers.has(s)?this.headers.get(s).push(o):this.headers.set(s,[o])}})}:typeof Headers<"u"&&t instanceof Headers?(this.headers=new Map,t.forEach((e,n)=>{this.setHeaderEntries(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(t).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();let e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,e){return this.clone({name:t,value:e,op:"a"})}set(t,e){return this.clone({name:t,value:e,op:"s"})}delete(t,e){return this.clone({name:t,value:e,op:"d"})}maybeSetNormalizedName(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)}init(){this.lazyInit&&(this.lazyInit instanceof i?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(e=>{this.headers.set(e,t.headers.get(e)),this.normalizedNames.set(e,t.normalizedNames.get(e))})}clone(t){let e=new i;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof i?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([t]),e}applyUpdate(t){let e=t.name.toLowerCase();switch(t.op){case"a":case"s":let n=t.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(t.name,e);let r=(t.op==="a"?this.headers.get(e):void 0)||[];r.push(...n),this.headers.set(e,r);break;case"d":let s=t.value;if(!s)this.headers.delete(e),this.normalizedNames.delete(e);else{let o=this.headers.get(e);if(!o)return;o=o.filter(a=>s.indexOf(a)===-1),o.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,o)}break}}setHeaderEntries(t,e){let n=(Array.isArray(e)?e:[e]).map(s=>s.toString()),r=t.toLowerCase();this.headers.set(r,n),this.maybeSetNormalizedName(t,r)}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>t(this.normalizedNames.get(e),this.headers.get(e)))}};var al=class{encodeKey(t){return Qh(t)}encodeValue(t){return Qh(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}};function nv(i,t){let e=new Map;return i.length>0&&i.replace(/^\?/,"").split("&").forEach(r=>{let s=r.indexOf("="),[o,a]=s==-1?[t.decodeKey(r),""]:[t.decodeKey(r.slice(0,s)),t.decodeValue(r.slice(s+1))],c=e.get(o)||[];c.push(a),e.set(o,c)}),e}var iv=/%(\d[a-f0-9])/gi,rv={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Qh(i){return encodeURIComponent(i).replace(iv,(t,e)=>rv[e]??t)}function Ko(i){return`${i}`}var pi=class i{constructor(t={}){if(this.updates=null,this.cloneFrom=null,this.encoder=t.encoder||new al,t.fromString){if(t.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=nv(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(e=>{let n=t.fromObject[e],r=Array.isArray(n)?n.map(Ko):[Ko(n)];this.map.set(e,r)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();let e=this.map.get(t);return e?e[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,e){return this.clone({param:t,value:e,op:"a"})}appendAll(t){let e=[];return Object.keys(t).forEach(n=>{let r=t[n];Array.isArray(r)?r.forEach(s=>{e.push({param:n,value:s,op:"a"})}):e.push({param:n,value:r,op:"a"})}),this.clone(e)}set(t,e){return this.clone({param:t,value:e,op:"s"})}delete(t,e){return this.clone({param:t,value:e,op:"d"})}toString(){return this.init(),this.keys().map(t=>{let e=this.encoder.encodeKey(t);return this.map.get(t).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(t=>t!=="").join("&")}clone(t){let e=new i({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(t),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":let e=(t.op==="a"?this.map.get(t.param):void 0)||[];e.push(Ko(t.value)),this.map.set(t.param,e);break;case"d":if(t.value!==void 0){let n=this.map.get(t.param)||[],r=n.indexOf(Ko(t.value));r!==-1&&n.splice(r,1),n.length>0?this.map.set(t.param,n):this.map.delete(t.param)}else{this.map.delete(t.param);break}}}),this.cloneFrom=this.updates=null)}};var cl=class{constructor(){this.map=new Map}set(t,e){return this.map.set(t,e),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}};function sv(i){switch(i){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function tf(i){return typeof ArrayBuffer<"u"&&i instanceof ArrayBuffer}function ef(i){return typeof Blob<"u"&&i instanceof Blob}function nf(i){return typeof FormData<"u"&&i instanceof FormData}function ov(i){return typeof URLSearchParams<"u"&&i instanceof URLSearchParams}var Ns=class i{constructor(t,e,n,r){this.url=e,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase();let s;if(sv(this.method)||r?(this.body=n!==void 0?n:null,s=r):s=n,s&&(this.reportProgress=!!s.reportProgress,this.withCredentials=!!s.withCredentials,s.responseType&&(this.responseType=s.responseType),s.headers&&(this.headers=s.headers),s.context&&(this.context=s.context),s.params&&(this.params=s.params),this.transferCache=s.transferCache),this.headers??=new ji,this.context??=new cl,!this.params)this.params=new pi,this.urlWithParams=e;else{let o=this.params.toString();if(o.length===0)this.urlWithParams=e;else{let a=e.indexOf("?"),c=a===-1?"?":a<e.length-1?"&":"";this.urlWithParams=e+c+o}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||tf(this.body)||ef(this.body)||nf(this.body)||ov(this.body)?this.body:this.body instanceof pi?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||nf(this.body)?null:ef(this.body)?this.body.type||null:tf(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof pi?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(t={}){let e=t.method||this.method,n=t.url||this.url,r=t.responseType||this.responseType,s=t.transferCache??this.transferCache,o=t.body!==void 0?t.body:this.body,a=t.withCredentials??this.withCredentials,c=t.reportProgress??this.reportProgress,l=t.headers||this.headers,d=t.params||this.params,u=t.context??this.context;return t.setHeaders!==void 0&&(l=Object.keys(t.setHeaders).reduce((h,m)=>h.set(m,t.setHeaders[m]),l)),t.setParams&&(d=Object.keys(t.setParams).reduce((h,m)=>h.set(m,t.setParams[m]),d)),new i(e,n,o,{params:d,headers:l,context:u,reportProgress:c,responseType:r,withCredentials:a,transferCache:s})}},Cr=function(i){return i[i.Sent=0]="Sent",i[i.UploadProgress=1]="UploadProgress",i[i.ResponseHeader=2]="ResponseHeader",i[i.DownloadProgress=3]="DownloadProgress",i[i.Response=4]="Response",i[i.User=5]="User",i}(Cr||{}),ks=class{constructor(t,e=ea.Ok,n="OK"){this.headers=t.headers||new ji,this.status=t.status!==void 0?t.status:e,this.statusText=t.statusText||n,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}},ll=class i extends ks{constructor(t={}){super(t),this.type=Cr.ResponseHeader}clone(t={}){return new i({headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},Qo=class i extends ks{constructor(t={}){super(t),this.type=Cr.Response,this.body=t.body!==void 0?t.body:null}clone(t={}){return new i({body:t.body!==void 0?t.body:this.body,headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},ta=class extends ks{constructor(t){super(t,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${t.url||"(unknown url)"}`:this.message=`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}},ea=function(i){return i[i.Continue=100]="Continue",i[i.SwitchingProtocols=101]="SwitchingProtocols",i[i.Processing=102]="Processing",i[i.EarlyHints=103]="EarlyHints",i[i.Ok=200]="Ok",i[i.Created=201]="Created",i[i.Accepted=202]="Accepted",i[i.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",i[i.NoContent=204]="NoContent",i[i.ResetContent=205]="ResetContent",i[i.PartialContent=206]="PartialContent",i[i.MultiStatus=207]="MultiStatus",i[i.AlreadyReported=208]="AlreadyReported",i[i.ImUsed=226]="ImUsed",i[i.MultipleChoices=300]="MultipleChoices",i[i.MovedPermanently=301]="MovedPermanently",i[i.Found=302]="Found",i[i.SeeOther=303]="SeeOther",i[i.NotModified=304]="NotModified",i[i.UseProxy=305]="UseProxy",i[i.Unused=306]="Unused",i[i.TemporaryRedirect=307]="TemporaryRedirect",i[i.PermanentRedirect=308]="PermanentRedirect",i[i.BadRequest=400]="BadRequest",i[i.Unauthorized=401]="Unauthorized",i[i.PaymentRequired=402]="PaymentRequired",i[i.Forbidden=403]="Forbidden",i[i.NotFound=404]="NotFound",i[i.MethodNotAllowed=405]="MethodNotAllowed",i[i.NotAcceptable=406]="NotAcceptable",i[i.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",i[i.RequestTimeout=408]="RequestTimeout",i[i.Conflict=409]="Conflict",i[i.Gone=410]="Gone",i[i.LengthRequired=411]="LengthRequired",i[i.PreconditionFailed=412]="PreconditionFailed",i[i.PayloadTooLarge=413]="PayloadTooLarge",i[i.UriTooLong=414]="UriTooLong",i[i.UnsupportedMediaType=415]="UnsupportedMediaType",i[i.RangeNotSatisfiable=416]="RangeNotSatisfiable",i[i.ExpectationFailed=417]="ExpectationFailed",i[i.ImATeapot=418]="ImATeapot",i[i.MisdirectedRequest=421]="MisdirectedRequest",i[i.UnprocessableEntity=422]="UnprocessableEntity",i[i.Locked=423]="Locked",i[i.FailedDependency=424]="FailedDependency",i[i.TooEarly=425]="TooEarly",i[i.UpgradeRequired=426]="UpgradeRequired",i[i.PreconditionRequired=428]="PreconditionRequired",i[i.TooManyRequests=429]="TooManyRequests",i[i.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",i[i.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",i[i.InternalServerError=500]="InternalServerError",i[i.NotImplemented=501]="NotImplemented",i[i.BadGateway=502]="BadGateway",i[i.ServiceUnavailable=503]="ServiceUnavailable",i[i.GatewayTimeout=504]="GatewayTimeout",i[i.HttpVersionNotSupported=505]="HttpVersionNotSupported",i[i.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",i[i.InsufficientStorage=507]="InsufficientStorage",i[i.LoopDetected=508]="LoopDetected",i[i.NotExtended=510]="NotExtended",i[i.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",i}(ea||{});function ol(i,t){return{body:t,headers:i.headers,context:i.context,observe:i.observe,params:i.params,reportProgress:i.reportProgress,responseType:i.responseType,withCredentials:i.withCredentials,transferCache:i.transferCache}}var ul=(()=>{let t=class t{constructor(n){this.handler=n}request(n,r,s={}){let o;if(n instanceof Ns)o=n;else{let l;s.headers instanceof ji?l=s.headers:l=new ji(s.headers);let d;s.params&&(s.params instanceof pi?d=s.params:d=new pi({fromObject:s.params})),o=new Ns(n,r,s.body!==void 0?s.body:null,{headers:l,context:s.context,params:d,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials,transferCache:s.transferCache})}let a=_t(o).pipe(li(l=>this.handler.handle(l)));if(n instanceof Ns||s.observe==="events")return a;let c=a.pipe($e(l=>l instanceof Qo));switch(s.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return c.pipe(Lt(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return l.body}));case"blob":return c.pipe(Lt(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new Error("Response is not a Blob.");return l.body}));case"text":return c.pipe(Lt(l=>{if(l.body!==null&&typeof l.body!="string")throw new Error("Response is not a string.");return l.body}));case"json":default:return c.pipe(Lt(l=>l.body))}case"response":return c;default:throw new Error(`Unreachable: unhandled observe type ${s.observe}}`)}}delete(n,r={}){return this.request("DELETE",n,r)}get(n,r={}){return this.request("GET",n,r)}head(n,r={}){return this.request("HEAD",n,r)}jsonp(n,r){return this.request("JSONP",n,{params:new pi().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(n,r={}){return this.request("OPTIONS",n,r)}patch(n,r,s={}){return this.request("PATCH",n,ol(s,r))}post(n,r,s={}){return this.request("POST",n,ol(s,r))}put(n,r,s={}){return this.request("PUT",n,ol(s,r))}};t.\u0275fac=function(r){return new(r||t)(H(Fs))},t.\u0275prov=mt({token:t,factory:t.\u0275fac});let i=t;return i})();function af(i,t){return t(i)}function av(i,t){return(e,n)=>t.intercept(e,{handle:r=>i(r,n)})}function cv(i,t,e){return(n,r)=>In(e,()=>t(n,s=>i(s,r)))}var lv=new At(""),hl=new At(""),dv=new At(""),uv=new At("");function hv(){let i=null;return(t,e)=>{i===null&&(i=(st(lv,{optional:!0})??[]).reduceRight(av,af));let n=st(Ds),r=n.add();return i(t,e).pipe(Wn(()=>n.remove(r)))}}var rf=(()=>{let t=class t extends Fs{constructor(n,r){super(),this.backend=n,this.injector=r,this.chain=null,this.pendingTasks=st(Ds);let s=st(uv,{optional:!0});this.backend=s??n}handle(n){if(this.chain===null){let s=Array.from(new Set([...this.injector.get(hl),...this.injector.get(dv,[])]));this.chain=s.reduceRight((o,a)=>cv(o,a,this.injector),af)}let r=this.pendingTasks.add();return this.chain(n,s=>this.backend.handle(s)).pipe(Wn(()=>this.pendingTasks.remove(r)))}};t.\u0275fac=function(r){return new(r||t)(H(Jo),H(hi))},t.\u0275prov=mt({token:t,factory:t.\u0275fac});let i=t;return i})();var fv=/^\)\]\}',?\n/;function pv(i){return"responseURL"in i&&i.responseURL?i.responseURL:/^X-Request-URL:/m.test(i.getAllResponseHeaders())?i.getResponseHeader("X-Request-URL"):null}var sf=(()=>{let t=class t{constructor(n){this.xhrFactory=n}handle(n){if(n.method==="JSONP")throw new de(-2800,!1);let r=this.xhrFactory;return(r.\u0275loadImpl?He(r.\u0275loadImpl()):_t(null)).pipe(Ye(()=>new vr(o=>{let a=r.build();if(a.open(n.method,n.urlWithParams),n.withCredentials&&(a.withCredentials=!0),n.headers.forEach((p,f)=>a.setRequestHeader(p,f.join(","))),n.headers.has("Accept")||a.setRequestHeader("Accept","application/json, text/plain, */*"),!n.headers.has("Content-Type")){let p=n.detectContentTypeHeader();p!==null&&a.setRequestHeader("Content-Type",p)}if(n.responseType){let p=n.responseType.toLowerCase();a.responseType=p!=="json"?p:"text"}let c=n.serializeBody(),l=null,d=()=>{if(l!==null)return l;let p=a.statusText||"OK",f=new ji(a.getAllResponseHeaders()),E=pv(a)||n.url;return l=new ll({headers:f,status:a.status,statusText:p,url:E}),l},u=()=>{let{headers:p,status:f,statusText:E,url:x}=d(),S=null;f!==ea.NoContent&&(S=typeof a.response>"u"?a.responseText:a.response),f===0&&(f=S?ea.Ok:0);let O=f>=200&&f<300;if(n.responseType==="json"&&typeof S=="string"){let R=S;S=S.replace(fv,"");try{S=S!==""?JSON.parse(S):null}catch(A){S=R,O&&(O=!1,S={error:A,text:S})}}O?(o.next(new Qo({body:S,headers:p,status:f,statusText:E,url:x||void 0})),o.complete()):o.error(new ta({error:S,headers:p,status:f,statusText:E,url:x||void 0}))},h=p=>{let{url:f}=d(),E=new ta({error:p,status:a.status||0,statusText:a.statusText||"Unknown Error",url:f||void 0});o.error(E)},m=!1,g=p=>{m||(o.next(d()),m=!0);let f={type:Cr.DownloadProgress,loaded:p.loaded};p.lengthComputable&&(f.total=p.total),n.responseType==="text"&&a.responseText&&(f.partialText=a.responseText),o.next(f)},v=p=>{let f={type:Cr.UploadProgress,loaded:p.loaded};p.lengthComputable&&(f.total=p.total),o.next(f)};return a.addEventListener("load",u),a.addEventListener("error",h),a.addEventListener("timeout",h),a.addEventListener("abort",h),n.reportProgress&&(a.addEventListener("progress",g),c!==null&&a.upload&&a.upload.addEventListener("progress",v)),a.send(c),o.next({type:Cr.Sent}),()=>{a.removeEventListener("error",h),a.removeEventListener("abort",h),a.removeEventListener("load",u),a.removeEventListener("timeout",h),n.reportProgress&&(a.removeEventListener("progress",g),c!==null&&a.upload&&a.upload.removeEventListener("progress",v)),a.readyState!==a.DONE&&a.abort()}})))}};t.\u0275fac=function(r){return new(r||t)(H(qo))},t.\u0275prov=mt({token:t,factory:t.\u0275fac});let i=t;return i})(),cf=new At(""),mv="XSRF-TOKEN",gv=new At("",{providedIn:"root",factory:()=>mv}),vv="X-XSRF-TOKEN",_v=new At("",{providedIn:"root",factory:()=>vv}),na=class{},bv=(()=>{let t=class t{constructor(n,r,s){this.doc=n,this.platform=r,this.cookieName=s,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if(this.platform==="server")return null;let n=this.doc.cookie||"";return n!==this.lastCookieString&&(this.parseCount++,this.lastToken=$o(n,this.cookieName),this.lastCookieString=n),this.lastToken}};t.\u0275fac=function(r){return new(r||t)(H(It),H(jn),H(gv))},t.\u0275prov=mt({token:t,factory:t.\u0275fac});let i=t;return i})();function yv(i,t){let e=i.url.toLowerCase();if(!st(cf)||i.method==="GET"||i.method==="HEAD"||e.startsWith("http://")||e.startsWith("https://"))return t(i);let n=st(na).getToken(),r=st(_v);return n!=null&&!i.headers.has(r)&&(i=i.clone({headers:i.headers.set(r,n)})),t(i)}var lf=function(i){return i[i.Interceptors=0]="Interceptors",i[i.LegacyInterceptors=1]="LegacyInterceptors",i[i.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",i[i.NoXsrfProtection=3]="NoXsrfProtection",i[i.JsonpSupport=4]="JsonpSupport",i[i.RequestsMadeViaParent=5]="RequestsMadeViaParent",i[i.Fetch=6]="Fetch",i}(lf||{});function xv(i,t){return{\u0275kind:i,\u0275providers:t}}function wv(...i){let t=[ul,sf,rf,{provide:Fs,useExisting:rf},{provide:Jo,useExisting:sf},{provide:hl,useValue:yv,multi:!0},{provide:cf,useValue:!0},{provide:na,useClass:bv}];for(let e of i)t.push(...e.\u0275providers);return Oo(t)}var of=new At("");function Sv(){return xv(lf.LegacyInterceptors,[{provide:of,useFactory:hv},{provide:hl,useExisting:of,multi:!0}])}var kA=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=Zt({type:t}),t.\u0275inj=qt({providers:[wv(Sv())]});let i=t;return i})();var ml=class extends Wh{constructor(){super(...arguments),this.supportsDOMEvents=!0}},gl=class i extends ml{static makeCurrent(){Gh(new i)}onAndCancel(t,e,n){return t.addEventListener(e,n),()=>{t.removeEventListener(e,n)}}dispatchEvent(t,e){t.dispatchEvent(e)}remove(t){t.parentNode&&t.parentNode.removeChild(t)}createElement(t,e){return e=e||this.getDefaultDocument(),e.createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,e){return e==="window"?window:e==="document"?t:e==="body"?t.body:null}getBaseHref(t){let e=Av();return e==null?null:Tv(e)}resetBaseElement(){Us=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return $o(document.cookie,t)}},Us=null;function Av(){return Us=Us||document.querySelector("base"),Us?Us.getAttribute("href"):null}function Tv(i){return new URL(i,document.baseURI).pathname}var vl=class{addToWindow(t){ui.getAngularTestability=(n,r=!0)=>{let s=t.findTestabilityInTree(n,r);if(s==null)throw new de(5103,!1);return s},ui.getAllAngularTestabilities=()=>t.getAllTestabilities(),ui.getAllAngularRootElements=()=>t.getAllRootElements();let e=n=>{let r=ui.getAllAngularTestabilities(),s=r.length,o=function(){s--,s==0&&n()};r.forEach(a=>{a.whenStable(o)})};ui.frameworkStabilizers||(ui.frameworkStabilizers=[]),ui.frameworkStabilizers.push(e)}findTestabilityInTree(t,e,n){if(e==null)return null;let r=t.getTestability(e);return r??(n?Xo().isShadowRoot(e)?this.findTestabilityInTree(t,e.host,!0):this.findTestabilityInTree(t,e.parentElement,!0):null)}},Cv=(()=>{let t=class t{build(){return new XMLHttpRequest}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=mt({token:t,factory:t.\u0275fac});let i=t;return i})(),_l=new At(""),pf=(()=>{let t=class t{constructor(n,r){this._zone=r,this._eventNameToPlugin=new Map,n.forEach(s=>{s.manager=this}),this._plugins=n.slice().reverse()}addEventListener(n,r,s){return this._findPluginFor(r).addEventListener(n,r,s)}getZone(){return this._zone}_findPluginFor(n){let r=this._eventNameToPlugin.get(n);if(r)return r;if(r=this._plugins.find(o=>o.supports(n)),!r)throw new de(5101,!1);return this._eventNameToPlugin.set(n,r),r}};t.\u0275fac=function(r){return new(r||t)(H(_l),H(Ht))},t.\u0275prov=mt({token:t,factory:t.\u0275fac});let i=t;return i})(),ia=class{constructor(t){this._doc=t}},fl="ng-app-id",mf=(()=>{let t=class t{constructor(n,r,s,o={}){this.doc=n,this.appId=r,this.nonce=s,this.platformId=o,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=Yo(o),this.resetHostNodes()}addStyles(n){for(let r of n)this.changeUsageCount(r,1)===1&&this.onStyleAdded(r)}removeStyles(n){for(let r of n)this.changeUsageCount(r,-1)<=0&&this.onStyleRemoved(r)}ngOnDestroy(){let n=this.styleNodesInDOM;n&&(n.forEach(r=>r.remove()),n.clear());for(let r of this.getAllStyles())this.onStyleRemoved(r);this.resetHostNodes()}addHost(n){this.hostNodes.add(n);for(let r of this.getAllStyles())this.addStyleToHost(n,r)}removeHost(n){this.hostNodes.delete(n)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(n){for(let r of this.hostNodes)this.addStyleToHost(r,n)}onStyleRemoved(n){let r=this.styleRef;r.get(n)?.elements?.forEach(s=>s.remove()),r.delete(n)}collectServerRenderedStyles(){let n=this.doc.head?.querySelectorAll(`style[${fl}="${this.appId}"]`);if(n?.length){let r=new Map;return n.forEach(s=>{s.textContent!=null&&r.set(s.textContent,s)}),r}return null}changeUsageCount(n,r){let s=this.styleRef;if(s.has(n)){let o=s.get(n);return o.usage+=r,o.usage}return s.set(n,{usage:r,elements:[]}),r}getStyleElement(n,r){let s=this.styleNodesInDOM,o=s?.get(r);if(o?.parentNode===n)return s.delete(r),o.removeAttribute(fl),o;{let a=this.doc.createElement("style");return this.nonce&&a.setAttribute("nonce",this.nonce),a.textContent=r,this.platformIsServer&&a.setAttribute(fl,this.appId),n.appendChild(a),a}}addStyleToHost(n,r){let s=this.getStyleElement(n,r),o=this.styleRef,a=o.get(r)?.elements;a?a.push(s):o.set(r,{elements:[s],usage:1})}resetHostNodes(){let n=this.hostNodes;n.clear(),n.add(this.doc.head)}};t.\u0275fac=function(r){return new(r||t)(H(It),H(Ts),H(Cs,8),H(jn))},t.\u0275prov=mt({token:t,factory:t.\u0275fac});let i=t;return i})(),pl={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},yl=/%COMP%/g,gf="%COMP%",Rv=`_nghost-${gf}`,Iv=`_ngcontent-${gf}`,Dv=!0,Pv=new At("",{providedIn:"root",factory:()=>Dv});function Lv(i){return Iv.replace(yl,i)}function Ov(i){return Rv.replace(yl,i)}function vf(i,t){return t.map(e=>e.replace(yl,i))}var df=(()=>{let t=class t{constructor(n,r,s,o,a,c,l,d=null){this.eventManager=n,this.sharedStylesHost=r,this.appId=s,this.removeStylesOnCompDestroy=o,this.doc=a,this.platformId=c,this.ngZone=l,this.nonce=d,this.rendererByCompId=new Map,this.platformIsServer=Yo(c),this.defaultRenderer=new Bs(n,a,l,this.platformIsServer)}createRenderer(n,r){if(!n||!r)return this.defaultRenderer;this.platformIsServer&&r.encapsulation===As.ShadowDom&&(r=Re(it({},r),{encapsulation:As.Emulated}));let s=this.getOrCreateRenderer(n,r);return s instanceof ra?s.applyToHost(n):s instanceof zs&&s.applyStyles(),s}getOrCreateRenderer(n,r){let s=this.rendererByCompId,o=s.get(r.id);if(!o){let a=this.doc,c=this.ngZone,l=this.eventManager,d=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,h=this.platformIsServer;switch(r.encapsulation){case As.Emulated:o=new ra(l,d,r,this.appId,u,a,c,h);break;case As.ShadowDom:return new bl(l,d,n,r,a,c,this.nonce,h);default:o=new zs(l,d,r,u,a,c,h);break}s.set(r.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}};t.\u0275fac=function(r){return new(r||t)(H(pf),H(mf),H(Ts),H(Pv),H(It),H(jn),H(Ht),H(Cs))},t.\u0275prov=mt({token:t,factory:t.\u0275fac});let i=t;return i})(),Bs=class{constructor(t,e,n,r){this.eventManager=t,this.doc=e,this.ngZone=n,this.platformIsServer=r,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(t,e){return e?this.doc.createElementNS(pl[e]||e,t):this.doc.createElement(t)}createComment(t){return this.doc.createComment(t)}createText(t){return this.doc.createTextNode(t)}appendChild(t,e){(uf(t)?t.content:t).appendChild(e)}insertBefore(t,e,n){t&&(uf(t)?t.content:t).insertBefore(e,n)}removeChild(t,e){t&&t.removeChild(e)}selectRootElement(t,e){let n=typeof t=="string"?this.doc.querySelector(t):t;if(!n)throw new de(-5104,!1);return e||(n.textContent=""),n}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,e,n,r){if(r){e=r+":"+e;let s=pl[r];s?t.setAttributeNS(s,e,n):t.setAttribute(e,n)}else t.setAttribute(e,n)}removeAttribute(t,e,n){if(n){let r=pl[n];r?t.removeAttributeNS(r,e):t.removeAttribute(`${n}:${e}`)}else t.removeAttribute(e)}addClass(t,e){t.classList.add(e)}removeClass(t,e){t.classList.remove(e)}setStyle(t,e,n,r){r&(Rs.DashCase|Rs.Important)?t.style.setProperty(e,n,r&Rs.Important?"important":""):t.style[e]=n}removeStyle(t,e,n){n&Rs.DashCase?t.style.removeProperty(e):t.style[e]=""}setProperty(t,e,n){t!=null&&(t[e]=n)}setValue(t,e){t.nodeValue=e}listen(t,e,n){if(typeof t=="string"&&(t=Xo().getGlobalEventTarget(this.doc,t),!t))throw new Error(`Unsupported event target ${t} for event ${e}`);return this.eventManager.addEventListener(t,e,this.decoratePreventDefault(n))}decoratePreventDefault(t){return e=>{if(e==="__ngUnwrap__")return t;(this.platformIsServer?this.ngZone.runGuarded(()=>t(e)):t(e))===!1&&e.preventDefault()}}};function uf(i){return i.tagName==="TEMPLATE"&&i.content!==void 0}var bl=class extends Bs{constructor(t,e,n,r,s,o,a,c){super(t,s,o,c),this.sharedStylesHost=e,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let l=vf(r.id,r.styles);for(let d of l){let u=document.createElement("style");a&&u.setAttribute("nonce",a),u.textContent=d,this.shadowRoot.appendChild(u)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}appendChild(t,e){return super.appendChild(this.nodeOrShadowRoot(t),e)}insertBefore(t,e,n){return super.insertBefore(this.nodeOrShadowRoot(t),e,n)}removeChild(t,e){return super.removeChild(this.nodeOrShadowRoot(t),e)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},zs=class extends Bs{constructor(t,e,n,r,s,o,a,c){super(t,s,o,a),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r,this.styles=c?vf(c,n.styles):n.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},ra=class extends zs{constructor(t,e,n,r,s,o,a,c){let l=r+"-"+n.id;super(t,e,n,s,o,a,c,l),this.contentAttr=Lv(l),this.hostAttr=Ov(l)}applyToHost(t){this.applyStyles(),this.setAttribute(t,this.hostAttr,"")}createElement(t,e){let n=super.createElement(t,e);return super.setAttribute(n,this.contentAttr,""),n}},Nv=(()=>{let t=class t extends ia{constructor(n){super(n)}supports(n){return!0}addEventListener(n,r,s){return n.addEventListener(r,s,!1),()=>this.removeEventListener(n,r,s)}removeEventListener(n,r,s){return n.removeEventListener(r,s)}};t.\u0275fac=function(r){return new(r||t)(H(It))},t.\u0275prov=mt({token:t,factory:t.\u0275fac});let i=t;return i})(),hf=["alt","control","meta","shift"],Fv={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},kv={alt:i=>i.altKey,control:i=>i.ctrlKey,meta:i=>i.metaKey,shift:i=>i.shiftKey},Uv=(()=>{let t=class t extends ia{constructor(n){super(n)}supports(n){return t.parseEventName(n)!=null}addEventListener(n,r,s){let o=t.parseEventName(r),a=t.eventCallback(o.fullKey,s,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Xo().onAndCancel(n,o.domEventName,a))}static parseEventName(n){let r=n.toLowerCase().split("."),s=r.shift();if(r.length===0||!(s==="keydown"||s==="keyup"))return null;let o=t._normalizeKey(r.pop()),a="",c=r.indexOf("code");if(c>-1&&(r.splice(c,1),a="code."),hf.forEach(d=>{let u=r.indexOf(d);u>-1&&(r.splice(u,1),a+=d+".")}),a+=o,r.length!=0||o.length===0)return null;let l={};return l.domEventName=s,l.fullKey=a,l}static matchEventFullKeyCode(n,r){let s=Fv[n.key]||n.key,o="";return r.indexOf("code.")>-1&&(s=n.code,o="code."),s==null||!s?!1:(s=s.toLowerCase(),s===" "?s="space":s==="."&&(s="dot"),hf.forEach(a=>{if(a!==s){let c=kv[a];c(n)&&(o+=a+".")}}),o+=s,o===r)}static eventCallback(n,r,s){return o=>{t.matchEventFullKeyCode(o,n)&&s.runGuarded(()=>r(o))}}static _normalizeKey(n){return n==="esc"?"escape":n}};t.\u0275fac=function(r){return new(r||t)(H(It))},t.\u0275prov=mt({token:t,factory:t.\u0275fac});let i=t;return i})();function Bv(){gl.makeCurrent()}function zv(){return new zi}function Vv(){return vh(document),document}var Hv=[{provide:jn,useValue:qh},{provide:_h,useValue:Bv,multi:!0},{provide:It,useFactory:Vv,deps:[]}],qA=Bh(zh,"browser",Hv),Gv=new At(""),Wv=[{provide:Go,useClass:vl,deps:[]},{provide:kh,useClass:Wo,deps:[Ht,tl,Go]},{provide:Wo,useClass:Wo,deps:[Ht,tl,Go]}],jv=[{provide:ph,useValue:"root"},{provide:zi,useFactory:zv,deps:[]},{provide:_l,useClass:Nv,multi:!0,deps:[It,Ht,jn]},{provide:_l,useClass:Uv,multi:!0,deps:[It]},df,mf,pf,{provide:Th,useExisting:df},{provide:qo,useClass:Cv,deps:[]},[]],ZA=(()=>{let t=class t{constructor(n){}static withServerTransition(n){return{ngModule:t,providers:[{provide:Ts,useValue:n.appId}]}}};t.\u0275fac=function(r){return new(r||t)(H(Gv,12))},t.\u0275mod=Zt({type:t}),t.\u0275inj=qt({providers:[...jv,...Wv],imports:[fi,Vh]});let i=t;return i})();var _f=(()=>{let t=class t{constructor(n){this._doc=n}getTitle(){return this._doc.title}setTitle(n){this._doc.title=n||""}};t.\u0275fac=function(r){return new(r||t)(H(It))},t.\u0275prov=mt({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var xl=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=mt({token:t,factory:function(r){let s=null;return r?s=new(r||t):s=H(Xv),s},providedIn:"root"});let i=t;return i})(),Xv=(()=>{let t=class t extends xl{constructor(n){super(),this._doc=n}sanitize(n,r){if(r==null)return null;switch(n){case on.NONE:return r;case on.HTML:return xr(r,"HTML")?yr(r):Eh(this._doc,String(r)).toString();case on.STYLE:return xr(r,"Style")?yr(r):r;case on.SCRIPT:if(xr(r,"Script"))return yr(r);throw new de(5200,!1);case on.URL:return xr(r,"URL")?yr(r):Mh(String(r));case on.RESOURCE_URL:if(xr(r,"ResourceURL"))return yr(r);throw new de(5201,!1);default:throw new de(5202,!1)}}bypassSecurityTrustHtml(n){return bh(n)}bypassSecurityTrustStyle(n){return yh(n)}bypassSecurityTrustScript(n){return xh(n)}bypassSecurityTrustUrl(n){return wh(n)}bypassSecurityTrustResourceUrl(n){return Sh(n)}};t.\u0275fac=function(r){return new(r||t)(H(It))},t.\u0275prov=mt({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var Sl;try{Sl=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Sl=!1}var be=(()=>{let t=class t{constructor(n){this._platformId=n,this.isBrowser=this._platformId?Zh(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||Sl)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}};t.\u0275fac=function(r){return new(r||t)(H(jn))},t.\u0275prov=mt({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var Vs;function $v(){if(Vs==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Vs=!0}))}finally{Vs=Vs||!1}return Vs}function Rr(i){return $v()?i:!!i.capture}var Xi;function yf(){if(Xi==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Xi=!1,Xi;if("scrollBehavior"in document.documentElement.style)Xi=!0;else{let i=Element.prototype.scrollTo;i?Xi=!/\{\s*\[native code\]\s*\}/.test(i.toString()):Xi=!1}}return Xi}var wl;function Yv(){if(wl==null){let i=typeof document<"u"?document.head:null;wl=!!(i&&(i.createShadowRoot||i.attachShadow))}return wl}function xf(i){if(Yv()){let t=i.getRootNode?i.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&t instanceof ShadowRoot)return t}return null}function xn(i){return i.composedPath?i.composedPath()[0]:i.target}function Hs(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function Ir(i){return Array.isArray(i)?i:[i]}function Me(i){return i==null?"":typeof i=="string"?i:`${i}px`}function $n(i){return i instanceof Se?i.nativeElement:i}var wf=new Set,Yi,qv=(()=>{let t=class t{constructor(n,r){this._platform=n,this._nonce=r,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Kv}matchMedia(n){return(this._platform.WEBKIT||this._platform.BLINK)&&Zv(n,this._nonce),this._matchMedia(n)}};t.\u0275fac=function(r){return new(r||t)(H(be),H(Cs,8))},t.\u0275prov=mt({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();function Zv(i,t){if(!wf.has(i))try{Yi||(Yi=document.createElement("style"),t&&Yi.setAttribute("nonce",t),Yi.setAttribute("type","text/css"),document.head.appendChild(Yi)),Yi.sheet&&(Yi.sheet.insertRule(`@media ${i} {body{ }}`,0),wf.add(i))}catch(e){console.error(e)}}function Kv(i){return{matches:i==="all"||i==="",media:i,addListener:()=>{},removeListener:()=>{}}}var sa=(()=>{let t=class t{constructor(n,r){this._mediaMatcher=n,this._zone=r,this._queries=new Map,this._destroySubject=new ee}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(n){return Sf(Ir(n)).some(s=>this._registerQuery(s).mql.matches)}observe(n){let s=Sf(Ir(n)).map(a=>this._registerQuery(a).observable),o=_r(s);return o=Do(o.pipe(sn(1)),o.pipe(Po(1),jc(0))),o.pipe(Lt(a=>{let c={matches:!1,breakpoints:{}};return a.forEach(({matches:l,query:d})=>{c.matches=c.matches||l,c.breakpoints[d]=l}),c}))}_registerQuery(n){if(this._queries.has(n))return this._queries.get(n);let r=this._mediaMatcher.matchMedia(n),o={observable:new vr(a=>{let c=l=>this._zone.run(()=>a.next(l));return r.addListener(c),()=>{r.removeListener(c)}}).pipe(Es(r),Lt(({matches:a})=>({query:n,matches:a})),yn(this._destroySubject)),mql:r};return this._queries.set(n,o),o}};t.\u0275fac=function(r){return new(r||t)(H(qv),H(Ht))},t.\u0275prov=mt({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();function Sf(i){return i.map(t=>t.split(",")).reduce((t,e)=>t.concat(e)).map(t=>t.trim())}var Mf={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};function El(i){return i.buttons===0||i.detail===0}function Al(i){let t=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return!!t&&t.identifier===-1&&(t.radiusX==null||t.radiusX===1)&&(t.radiusY==null||t.radiusY===1)}var Qv=new At("cdk-input-modality-detector-options"),t_={ignoreKeys:[18,17,224,91,16]},Tf=650,Dr=Rr({passive:!0,capture:!0}),e_=(()=>{let t=class t{get mostRecentModality(){return this._modality.value}constructor(n,r,s,o){this._platform=n,this._mostRecentTarget=null,this._modality=new Xe(null),this._lastTouchMs=0,this._onKeydown=a=>{this._options?.ignoreKeys?.some(c=>c===a.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=xn(a))},this._onMousedown=a=>{Date.now()-this._lastTouchMs<Tf||(this._modality.next(El(a)?"keyboard":"mouse"),this._mostRecentTarget=xn(a))},this._onTouchstart=a=>{if(Al(a)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=xn(a)},this._options=it(it({},t_),o),this.modalityDetected=this._modality.pipe(Po(1)),this.modalityChanged=this.modalityDetected.pipe($c()),n.isBrowser&&r.runOutsideAngular(()=>{s.addEventListener("keydown",this._onKeydown,Dr),s.addEventListener("mousedown",this._onMousedown,Dr),s.addEventListener("touchstart",this._onTouchstart,Dr)})}ngOnDestroy(){this._modality.complete(),this._platform.isBrowser&&(document.removeEventListener("keydown",this._onKeydown,Dr),document.removeEventListener("mousedown",this._onMousedown,Dr),document.removeEventListener("touchstart",this._onTouchstart,Dr))}};t.\u0275fac=function(r){return new(r||t)(H(be),H(Ht),H(It),H(Qv,8))},t.\u0275prov=mt({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})(),n_=new At("liveAnnouncerElement",{providedIn:"root",factory:i_});function i_(){return null}var r_=new At("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),s_=0,Cf=(()=>{let t=class t{constructor(n,r,s,o){this._ngZone=r,this._defaultOptions=o,this._document=s,this._liveElement=n||this._createLiveElement()}announce(n,...r){let s=this._defaultOptions,o,a;return r.length===1&&typeof r[0]=="number"?a=r[0]:[o,a]=r,this.clear(),clearTimeout(this._previousTimeout),o||(o=s&&s.politeness?s.politeness:"polite"),a==null&&s&&(a=s.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(c=>this._currentResolve=c)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{this._liveElement.textContent=n,typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let n="cdk-live-announcer-element",r=this._document.getElementsByClassName(n),s=this._document.createElement("div");for(let o=0;o<r.length;o++)r[o].remove();return s.classList.add(n),s.classList.add("cdk-visually-hidden"),s.setAttribute("aria-atomic","true"),s.setAttribute("aria-live","polite"),s.id=`cdk-live-announcer-${s_++}`,this._document.body.appendChild(s),s}_exposeAnnouncerToModals(n){let r=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let s=0;s<r.length;s++){let o=r[s],a=o.getAttribute("aria-owns");a?a.indexOf(n)===-1&&o.setAttribute("aria-owns",a+" "+n):o.setAttribute("aria-owns",n)}}};t.\u0275fac=function(r){return new(r||t)(H(n_,8),H(Ht),H(It),H(r_,8))},t.\u0275prov=mt({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var aa=function(i){return i[i.IMMEDIATE=0]="IMMEDIATE",i[i.EVENTUAL=1]="EVENTUAL",i}(aa||{}),o_=new At("cdk-focus-monitor-default-options"),oa=Rr({passive:!0,capture:!0}),Rf=(()=>{let t=class t{constructor(n,r,s,o,a){this._ngZone=n,this._platform=r,this._inputModalityDetector=s,this._origin=null,this._windowFocused=!1,this._originFromTouchInteraction=!1,this._elementInfo=new Map,this._monitoredElementCount=0,this._rootNodeFocusListenerCount=new Map,this._windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=window.setTimeout(()=>this._windowFocused=!1)},this._stopInputModalityDetector=new ee,this._rootNodeFocusAndBlurListener=c=>{let l=xn(c);for(let d=l;d;d=d.parentElement)c.type==="focus"?this._onFocus(c,d):this._onBlur(c,d)},this._document=o,this._detectionMode=a?.detectionMode||aa.IMMEDIATE}monitor(n,r=!1){let s=$n(n);if(!this._platform.isBrowser||s.nodeType!==1)return _t();let o=xf(s)||this._getDocument(),a=this._elementInfo.get(s);if(a)return r&&(a.checkChildren=!0),a.subject;let c={checkChildren:r,subject:new ee,rootNode:o};return this._elementInfo.set(s,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(n){let r=$n(n),s=this._elementInfo.get(r);s&&(s.subject.complete(),this._setClasses(r),this._elementInfo.delete(r),this._removeGlobalListeners(s))}focusVia(n,r,s){let o=$n(n),a=this._getDocument().activeElement;o===a?this._getClosestElementsInfo(o).forEach(([c,l])=>this._originChanged(c,r,l)):(this._setOrigin(r),typeof o.focus=="function"&&o.focus(s))}ngOnDestroy(){this._elementInfo.forEach((n,r)=>this.stopMonitoring(r))}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_getFocusOrigin(n){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(n)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:n&&this._isLastInteractionFromInputLabel(n)?"mouse":"program"}_shouldBeAttributedToTouch(n){return this._detectionMode===aa.EVENTUAL||!!n?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(n,r){n.classList.toggle("cdk-focused",!!r),n.classList.toggle("cdk-touch-focused",r==="touch"),n.classList.toggle("cdk-keyboard-focused",r==="keyboard"),n.classList.toggle("cdk-mouse-focused",r==="mouse"),n.classList.toggle("cdk-program-focused",r==="program")}_setOrigin(n,r=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=n,this._originFromTouchInteraction=n==="touch"&&r,this._detectionMode===aa.IMMEDIATE){clearTimeout(this._originTimeoutId);let s=this._originFromTouchInteraction?Tf:1;this._originTimeoutId=setTimeout(()=>this._origin=null,s)}})}_onFocus(n,r){let s=this._elementInfo.get(r),o=xn(n);!s||!s.checkChildren&&r!==o||this._originChanged(r,this._getFocusOrigin(o),s)}_onBlur(n,r){let s=this._elementInfo.get(r);!s||s.checkChildren&&n.relatedTarget instanceof Node&&r.contains(n.relatedTarget)||(this._setClasses(r),this._emitOrigin(s,null))}_emitOrigin(n,r){n.subject.observers.length&&this._ngZone.run(()=>n.subject.next(r))}_registerGlobalListeners(n){if(!this._platform.isBrowser)return;let r=n.rootNode,s=this._rootNodeFocusListenerCount.get(r)||0;s||this._ngZone.runOutsideAngular(()=>{r.addEventListener("focus",this._rootNodeFocusAndBlurListener,oa),r.addEventListener("blur",this._rootNodeFocusAndBlurListener,oa)}),this._rootNodeFocusListenerCount.set(r,s+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(yn(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(n){let r=n.rootNode;if(this._rootNodeFocusListenerCount.has(r)){let s=this._rootNodeFocusListenerCount.get(r);s>1?this._rootNodeFocusListenerCount.set(r,s-1):(r.removeEventListener("focus",this._rootNodeFocusAndBlurListener,oa),r.removeEventListener("blur",this._rootNodeFocusAndBlurListener,oa),this._rootNodeFocusListenerCount.delete(r))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(n,r,s){this._setClasses(n,r),this._emitOrigin(s,r),this._lastFocusOrigin=r}_getClosestElementsInfo(n){let r=[];return this._elementInfo.forEach((s,o)=>{(o===n||s.checkChildren&&o.contains(n))&&r.push([o,s])}),r}_isLastInteractionFromInputLabel(n){let{_mostRecentTarget:r,mostRecentModality:s}=this._inputModalityDetector;if(s!=="mouse"||!r||r===n||n.nodeName!=="INPUT"&&n.nodeName!=="TEXTAREA"||n.disabled)return!1;let o=n.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(r))return!0}return!1}};t.\u0275fac=function(r){return new(r||t)(H(Ht),H(be),H(e_),H(It,8),H(o_,8))},t.\u0275prov=mt({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var qi=function(i){return i[i.NONE=0]="NONE",i[i.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",i[i.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",i}(qi||{}),Ef="cdk-high-contrast-black-on-white",Af="cdk-high-contrast-white-on-black",Ml="cdk-high-contrast-active",If=(()=>{let t=class t{constructor(n,r){this._platform=n,this._document=r,this._breakpointSubscription=st(sa).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return qi.NONE;let n=this._document.createElement("div");n.style.backgroundColor="rgb(1,2,3)",n.style.position="absolute",this._document.body.appendChild(n);let r=this._document.defaultView||window,s=r&&r.getComputedStyle?r.getComputedStyle(n):null,o=(s&&s.backgroundColor||"").replace(/ /g,"");switch(n.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return qi.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return qi.BLACK_ON_WHITE}return qi.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let n=this._document.body.classList;n.remove(Ml,Ef,Af),this._hasCheckedHighContrastMode=!0;let r=this.getHighContrastMode();r===qi.BLACK_ON_WHITE?n.add(Ml,Ef):r===qi.WHITE_ON_BLACK&&n.add(Ml,Af)}}};t.\u0275fac=function(r){return new(r||t)(H(be),H(It))},t.\u0275prov=mt({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var a_=new At("cdk-dir-doc",{providedIn:"root",factory:c_});function c_(){return st(It)}var l_=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function d_(i){let t=i?.toLowerCase()||"";return t==="auto"&&typeof navigator<"u"&&navigator?.language?l_.test(navigator.language)?"rtl":"ltr":t==="rtl"?"rtl":"ltr"}var Pf=(()=>{let t=class t{constructor(n){if(this.value="ltr",this.change=new mn,n){let r=n.body?n.body.dir:null,s=n.documentElement?n.documentElement.dir:null;this.value=d_(r||s||"ltr")}}ngOnDestroy(){this.change.complete()}};t.\u0275fac=function(r){return new(r||t)(H(a_,8))},t.\u0275prov=mt({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var mi=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=Zt({type:t}),t.\u0275inj=qt({});let i=t;return i})();function f_(){return!0}var p_=new At("mat-sanity-checks",{providedIn:"root",factory:f_}),Ke=(()=>{let t=class t{constructor(n,r,s){this._sanityChecks=r,this._document=s,this._hasDoneGlobalChecks=!1,n._applyBodyHighContrastModeCssClasses(),this._hasDoneGlobalChecks||(this._hasDoneGlobalChecks=!0)}_checkIsEnabled(n){return Hs()?!1:typeof this._sanityChecks=="boolean"?this._sanityChecks:!!this._sanityChecks[n]}};t.\u0275fac=function(r){return new(r||t)(H(If),H(p_,8),H(It))},t.\u0275mod=Zt({type:t}),t.\u0275inj=qt({imports:[mi,mi]});let i=t;return i})();var gn=function(i){return i[i.FADING_IN=0]="FADING_IN",i[i.VISIBLE=1]="VISIBLE",i[i.FADING_OUT=2]="FADING_OUT",i[i.HIDDEN=3]="HIDDEN",i}(gn||{}),Il=class{constructor(t,e,n,r=!1){this._renderer=t,this.element=e,this.config=n,this._animationForciblyDisabledThroughCss=r,this.state=gn.HIDDEN}fadeOut(){this._renderer.fadeOutRipple(this)}},Lf=Rr({passive:!0,capture:!0}),Dl=class{constructor(){this._events=new Map,this._delegateEventHandler=t=>{let e=xn(t);e&&this._events.get(t.type)?.forEach((n,r)=>{(r===e||r.contains(e))&&n.forEach(s=>s.handleEvent(t))})}}addHandler(t,e,n,r){let s=this._events.get(e);if(s){let o=s.get(n);o?o.add(r):s.set(n,new Set([r]))}else this._events.set(e,new Map([[n,new Set([r])]])),t.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Lf)})}removeHandler(t,e,n){let r=this._events.get(t);if(!r)return;let s=r.get(e);s&&(s.delete(n),s.size===0&&r.delete(e),r.size===0&&(this._events.delete(t),document.removeEventListener(t,this._delegateEventHandler,Lf)))}},Of={enterDuration:225,exitDuration:150},m_=800,Nf=Rr({passive:!0,capture:!0}),Ff=["mousedown","touchstart"],kf=["mouseup","mouseleave","touchend","touchcancel"],Gs=class Gs{constructor(t,e,n,r){this._target=t,this._ngZone=e,this._platform=r,this._isPointerDown=!1,this._activeRipples=new Map,this._pointerUpEventsRegistered=!1,r.isBrowser&&(this._containerElement=$n(n))}fadeInRipple(t,e,n={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),s=it(it({},Of),n.animation);n.centered&&(t=r.left+r.width/2,e=r.top+r.height/2);let o=n.radius||g_(t,e,r),a=t-r.left,c=e-r.top,l=s.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=`${a-o}px`,d.style.top=`${c-o}px`,d.style.height=`${o*2}px`,d.style.width=`${o*2}px`,n.color!=null&&(d.style.backgroundColor=n.color),d.style.transitionDuration=`${l}ms`,this._containerElement.appendChild(d);let u=window.getComputedStyle(d),h=u.transitionProperty,m=u.transitionDuration,g=h==="none"||m==="0s"||m==="0s, 0s"||r.width===0&&r.height===0,v=new Il(this,d,n,g);d.style.transform="scale3d(1, 1, 1)",v.state=gn.FADING_IN,n.persistent||(this._mostRecentTransientRipple=v);let p=null;return!g&&(l||s.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let f=()=>this._finishRippleTransition(v),E=()=>this._destroyRipple(v);d.addEventListener("transitionend",f),d.addEventListener("transitioncancel",E),p={onTransitionEnd:f,onTransitionCancel:E}}),this._activeRipples.set(v,p),(g||!l)&&this._finishRippleTransition(v),v}fadeOutRipple(t){if(t.state===gn.FADING_OUT||t.state===gn.HIDDEN)return;let e=t.element,n=it(it({},Of),t.config.animation);e.style.transitionDuration=`${n.exitDuration}ms`,e.style.opacity="0",t.state=gn.FADING_OUT,(t._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(t)}fadeOutAll(){this._getActiveRipples().forEach(t=>t.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(t=>{t.config.persistent||t.fadeOut()})}setupTriggerEvents(t){let e=$n(t);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Ff.forEach(n=>{Gs._eventManager.addHandler(this._ngZone,n,e,this)}))}handleEvent(t){t.type==="mousedown"?this._onMousedown(t):t.type==="touchstart"?this._onTouchStart(t):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{kf.forEach(e=>{this._triggerElement.addEventListener(e,this,Nf)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(t){t.state===gn.FADING_IN?this._startFadeOutTransition(t):t.state===gn.FADING_OUT&&this._destroyRipple(t)}_startFadeOutTransition(t){let e=t===this._mostRecentTransientRipple,{persistent:n}=t.config;t.state=gn.VISIBLE,!n&&(!e||!this._isPointerDown)&&t.fadeOut()}_destroyRipple(t){let e=this._activeRipples.get(t)??null;this._activeRipples.delete(t),this._activeRipples.size||(this._containerRect=null),t===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),t.state=gn.HIDDEN,e!==null&&(t.element.removeEventListener("transitionend",e.onTransitionEnd),t.element.removeEventListener("transitioncancel",e.onTransitionCancel)),t.element.remove()}_onMousedown(t){let e=El(t),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+m_;!this._target.rippleDisabled&&!e&&!n&&(this._isPointerDown=!0,this.fadeInRipple(t.clientX,t.clientY,this._target.rippleConfig))}_onTouchStart(t){if(!this._target.rippleDisabled&&!Al(t)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=t.changedTouches;if(e)for(let n=0;n<e.length;n++)this.fadeInRipple(e[n].clientX,e[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(t=>{let e=t.state===gn.VISIBLE||t.config.terminateOnPointerUp&&t.state===gn.FADING_IN;!t.config.persistent&&e&&t.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let t=this._triggerElement;t&&(Ff.forEach(e=>Gs._eventManager.removeHandler(e,t,this)),this._pointerUpEventsRegistered&&(kf.forEach(e=>t.removeEventListener(e,this,Nf)),this._pointerUpEventsRegistered=!1))}};Gs._eventManager=new Dl;var Pl=Gs;function g_(i,t,e){let n=Math.max(Math.abs(i-e.left),Math.abs(i-e.right)),r=Math.max(Math.abs(t-e.top),Math.abs(t-e.bottom));return Math.sqrt(n*n+r*r)}var Vf=new At("mat-ripple-global-options"),v_=(()=>{let t=class t{get disabled(){return this._disabled}set disabled(n){n&&this.fadeOutAllNonPersistent(),this._disabled=n,this._setupTriggerEventsIfEnabled()}get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(n){this._trigger=n,this._setupTriggerEventsIfEnabled()}constructor(n,r,s,o,a){this._elementRef=n,this._animationMode=a,this.radius=0,this._disabled=!1,this._isInitialized=!1,this._globalOptions=o||{},this._rippleRenderer=new Pl(this,r,n,s)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:it(it(it({},this._globalOptions.animation),this._animationMode==="NoopAnimations"?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(n,r=0,s){return typeof n=="number"?this._rippleRenderer.fadeInRipple(n,r,it(it({},this.rippleConfig),s)):this._rippleRenderer.fadeInRipple(0,0,it(it({},this.rippleConfig),n))}};t.\u0275fac=function(r){return new(r||t)(Ot(Se),Ot(Ht),Ot(be),Ot(Vf,8),Ot(Vi,8))},t.\u0275dir=we({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(r,s){r&2&&Ln("mat-ripple-unbounded",s.unbounded)},inputs:{color:[ue.None,"matRippleColor","color"],unbounded:[ue.None,"matRippleUnbounded","unbounded"],centered:[ue.None,"matRippleCentered","centered"],radius:[ue.None,"matRippleRadius","radius"],animation:[ue.None,"matRippleAnimation","animation"],disabled:[ue.None,"matRippleDisabled","disabled"],trigger:[ue.None,"matRippleTrigger","trigger"]},exportAs:["matRipple"],standalone:!0});let i=t;return i})(),Hf=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=Zt({type:t}),t.\u0275inj=qt({imports:[Ke,Ke]});let i=t;return i})();var Uf={capture:!0},Bf=["focus","click","mouseenter","touchstart"],Cl="mat-ripple-loader-uninitialized",Rl="mat-ripple-loader-class-name",zf="mat-ripple-loader-centered",ca="mat-ripple-loader-disabled",Gf=(()=>{let t=class t{constructor(){this._document=st(It,{optional:!0}),this._animationMode=st(Vi,{optional:!0}),this._globalRippleOptions=st(Vf,{optional:!0}),this._platform=st(be),this._ngZone=st(Ht),this._hosts=new Map,this._onInteraction=n=>{if(!(n.target instanceof HTMLElement))return;let s=n.target.closest(`[${Cl}]`);s&&this._createRipple(s)},this._ngZone.runOutsideAngular(()=>{for(let n of Bf)this._document?.addEventListener(n,this._onInteraction,Uf)})}ngOnDestroy(){let n=this._hosts.keys();for(let r of n)this.destroyRipple(r);for(let r of Bf)this._document?.removeEventListener(r,this._onInteraction,Uf)}configureRipple(n,r){n.setAttribute(Cl,""),(r.className||!n.hasAttribute(Rl))&&n.setAttribute(Rl,r.className||""),r.centered&&n.setAttribute(zf,""),r.disabled&&n.setAttribute(ca,"")}getRipple(n){return this._hosts.get(n)||this._createRipple(n)}setDisabled(n,r){let s=this._hosts.get(n);if(s){s.disabled=r;return}r?n.setAttribute(ca,""):n.removeAttribute(ca)}_createRipple(n){if(!this._document)return;let r=this._hosts.get(n);if(r)return r;n.querySelector(".mat-ripple")?.remove();let s=this._document.createElement("span");s.classList.add("mat-ripple",n.getAttribute(Rl)),n.append(s);let o=new v_(new Se(s),this._ngZone,this._platform,this._globalRippleOptions?this._globalRippleOptions:void 0,this._animationMode?this._animationMode:void 0);return o._isInitialized=!0,o.trigger=n,o.centered=n.hasAttribute(zf),o.disabled=n.hasAttribute(ca),this.attachRipple(n,o),o}attachRipple(n,r){n.removeAttribute(Cl),this._hosts.set(n,r)}destroyRipple(n){let r=this._hosts.get(n);r&&(r.ngOnDestroy(),this._hosts.delete(n))}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=mt({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var __=["*"];var b_=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],y_=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],x_=new At("MAT_CARD_CONFIG"),EC=(()=>{let t=class t{constructor(n){this.appearance=n?.appearance||"raised"}};t.\u0275fac=function(r){return new(r||t)(Ot(x_,8))},t.\u0275cmp=ve({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:4,hostBindings:function(r,s){r&2&&Ln("mat-mdc-card-outlined",s.appearance==="outlined")("mdc-card--outlined",s.appearance==="outlined")},inputs:{appearance:"appearance"},exportAs:["matCard"],standalone:!0,features:[qe],ngContentSelectors:__,decls:1,vars:0,template:function(r,s){r&1&&(Xn(),cn(0))},styles:['.mdc-card{display:flex;flex-direction:column;box-sizing:border-box}.mdc-card::after{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none;pointer-events:none}@media screen and (forced-colors: active){.mdc-card::after{border-color:CanvasText}}.mdc-card--outlined::after{border:none}.mdc-card__content{border-radius:inherit;height:100%}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__media--square::before{margin-top:100%}.mdc-card__media--16-9::before{margin-top:56.25%}.mdc-card__media-content{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box}.mdc-card__primary-action{display:flex;flex-direction:column;box-sizing:border-box;position:relative;outline:none;color:inherit;text-decoration:none;cursor:pointer;overflow:hidden}.mdc-card__primary-action:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__primary-action:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mdc-card__actions--full-bleed{padding:0}.mdc-card__action-buttons,.mdc-card__action-icons{display:flex;flex-direction:row;align-items:center;box-sizing:border-box}.mdc-card__action-icons{color:rgba(0, 0, 0, 0.6);flex-grow:1;justify-content:flex-end}.mdc-card__action-buttons+.mdc-card__action-icons{margin-left:16px;margin-right:0}[dir=rtl] .mdc-card__action-buttons+.mdc-card__action-icons,.mdc-card__action-buttons+.mdc-card__action-icons[dir=rtl]{margin-left:0;margin-right:16px}.mdc-card__action{display:inline-flex;flex-direction:row;align-items:center;box-sizing:border-box;justify-content:center;cursor:pointer;user-select:none}.mdc-card__action:focus{outline:none}.mdc-card__action--button{margin-left:0;margin-right:8px;padding:0 8px}[dir=rtl] .mdc-card__action--button,.mdc-card__action--button[dir=rtl]{margin-left:8px;margin-right:0}.mdc-card__action--button:last-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-card__action--button:last-child,.mdc-card__action--button:last-child[dir=rtl]{margin-left:0;margin-right:0}.mdc-card__actions--full-bleed .mdc-card__action--button{justify-content:space-between;width:100%;height:auto;max-height:none;margin:0;padding:8px 16px;text-align:left}[dir=rtl] .mdc-card__actions--full-bleed .mdc-card__action--button,.mdc-card__actions--full-bleed .mdc-card__action--button[dir=rtl]{text-align:right}.mdc-card__action--icon{margin:-6px 0;padding:12px}.mdc-card__action--icon:not(:disabled){color:rgba(0, 0, 0, 0.6)}.mat-mdc-card{border-radius:var(--mdc-elevated-card-container-shape);background-color:var(--mdc-elevated-card-container-color);border-width:0;border-style:solid;border-color:var(--mdc-elevated-card-container-color);box-shadow:var(--mdc-elevated-card-container-elevation)}.mat-mdc-card .mdc-card::after{border-radius:var(--mdc-elevated-card-container-shape)}.mat-mdc-card-outlined{border-width:var(--mdc-outlined-card-outline-width);border-style:solid;border-color:var(--mdc-outlined-card-outline-color);border-radius:var(--mdc-outlined-card-container-shape);background-color:var(--mdc-outlined-card-container-color);box-shadow:var(--mdc-outlined-card-container-elevation)}.mat-mdc-card-outlined .mdc-card::after{border-radius:var(--mdc-outlined-card-container-shape)}.mat-mdc-card-title{font-family:var(--mat-card-title-text-font);line-height:var(--mat-card-title-text-line-height);font-size:var(--mat-card-title-text-size);letter-spacing:var(--mat-card-title-text-tracking);font-weight:var(--mat-card-title-text-weight)}.mat-mdc-card-subtitle{color:var(--mat-card-subtitle-text-color);font-family:var(--mat-card-subtitle-text-font);line-height:var(--mat-card-subtitle-text-line-height);font-size:var(--mat-card-subtitle-text-size);letter-spacing:var(--mat-card-subtitle-text-tracking);font-weight:var(--mat-card-subtitle-text-weight)}.mat-mdc-card{position:relative}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}'],encapsulation:2,changeDetection:0});let i=t;return i})(),AC=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275dir=we({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"],standalone:!0});let i=t;return i})();var TC=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275dir=we({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"],standalone:!0});let i=t;return i})(),CC=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275dir=we({type:t,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"],standalone:!0});let i=t;return i})();var RC=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=ve({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],standalone:!0,features:[qe],ngContentSelectors:y_,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(r,s){r&1&&(Xn(b_),cn(0),_e(1,"div",0),cn(2,1),fe(),cn(3,2))},encapsulation:2,changeDetection:0});let i=t;return i})();var Ll=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=Zt({type:t}),t.\u0275inj=qt({imports:[Ke,fi,Ke]});let i=t;return i})();var w_=["*"],la;function S_(){if(la===void 0&&(la=null,typeof window<"u")){let i=window;i.trustedTypes!==void 0&&(la=i.trustedTypes.createPolicy("angular#components",{createHTML:t=>t}))}return la}function Ws(i){return S_()?.createHTML(i)||i}function Wf(i){return Error(`Unable to find icon with the name "${i}"`)}function M_(){return Error("Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.")}function jf(i){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${i}".`)}function Xf(i){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${i}".`)}var Yn=class{constructor(t,e,n){this.url=t,this.svgText=e,this.options=n}},E_=(()=>{let t=class t{constructor(n,r,s,o){this._httpClient=n,this._sanitizer=r,this._errorHandler=o,this._svgIconConfigs=new Map,this._iconSetConfigs=new Map,this._cachedIconsByUrl=new Map,this._inProgressUrlFetches=new Map,this._fontCssClassesByAlias=new Map,this._resolvers=[],this._defaultFontSetClass=["material-icons","mat-ligature-font"],this._document=s}addSvgIcon(n,r,s){return this.addSvgIconInNamespace("",n,r,s)}addSvgIconLiteral(n,r,s){return this.addSvgIconLiteralInNamespace("",n,r,s)}addSvgIconInNamespace(n,r,s,o){return this._addSvgIconConfig(n,r,new Yn(s,null,o))}addSvgIconResolver(n){return this._resolvers.push(n),this}addSvgIconLiteralInNamespace(n,r,s,o){let a=this._sanitizer.sanitize(on.HTML,s);if(!a)throw Xf(s);let c=Ws(a);return this._addSvgIconConfig(n,r,new Yn("",c,o))}addSvgIconSet(n,r){return this.addSvgIconSetInNamespace("",n,r)}addSvgIconSetLiteral(n,r){return this.addSvgIconSetLiteralInNamespace("",n,r)}addSvgIconSetInNamespace(n,r,s){return this._addSvgIconSetConfig(n,new Yn(r,null,s))}addSvgIconSetLiteralInNamespace(n,r,s){let o=this._sanitizer.sanitize(on.HTML,r);if(!o)throw Xf(r);let a=Ws(o);return this._addSvgIconSetConfig(n,new Yn("",a,s))}registerFontClassAlias(n,r=n){return this._fontCssClassesByAlias.set(n,r),this}classNameForFontAlias(n){return this._fontCssClassesByAlias.get(n)||n}setDefaultFontSetClass(...n){return this._defaultFontSetClass=n,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(n){let r=this._sanitizer.sanitize(on.RESOURCE_URL,n);if(!r)throw jf(n);let s=this._cachedIconsByUrl.get(r);return s?_t(da(s)):this._loadSvgIconFromConfig(new Yn(n,null)).pipe(ge(o=>this._cachedIconsByUrl.set(r,o)),Lt(o=>da(o)))}getNamedSvgIcon(n,r=""){let s=$f(r,n),o=this._svgIconConfigs.get(s);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(r,n),o)return this._svgIconConfigs.set(s,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(r);return a?this._getSvgFromIconSetConfigs(n,a):Bi(Wf(s))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(n){return n.svgText?_t(da(this._svgElementFromConfig(n))):this._loadSvgIconFromConfig(n).pipe(Lt(r=>da(r)))}_getSvgFromIconSetConfigs(n,r){let s=this._extractIconWithNameFromAnySet(n,r);if(s)return _t(s);let o=r.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(ci(c=>{let d=`Loading icon set URL: ${this._sanitizer.sanitize(on.RESOURCE_URL,a.url)} failed: ${c.message}`;return this._errorHandler.handleError(new Error(d)),_t(null)})));return oh(o).pipe(Lt(()=>{let a=this._extractIconWithNameFromAnySet(n,r);if(!a)throw Wf(n);return a}))}_extractIconWithNameFromAnySet(n,r){for(let s=r.length-1;s>=0;s--){let o=r[s];if(o.svgText&&o.svgText.toString().indexOf(n)>-1){let a=this._svgElementFromConfig(o),c=this._extractSvgIconFromSet(a,n,o.options);if(c)return c}}return null}_loadSvgIconFromConfig(n){return this._fetchIcon(n).pipe(ge(r=>n.svgText=r),Lt(()=>this._svgElementFromConfig(n)))}_loadSvgIconSetFromConfig(n){return n.svgText?_t(null):this._fetchIcon(n).pipe(ge(r=>n.svgText=r))}_extractSvgIconFromSet(n,r,s){let o=n.querySelector(`[id="${r}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,s);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),s);let c=this._svgElementFromString(Ws("<svg></svg>"));return c.appendChild(a),this._setSvgAttributes(c,s)}_svgElementFromString(n){let r=this._document.createElement("DIV");r.innerHTML=n;let s=r.querySelector("svg");if(!s)throw Error("<svg> tag not found");return s}_toSvgElement(n){let r=this._svgElementFromString(Ws("<svg></svg>")),s=n.attributes;for(let o=0;o<s.length;o++){let{name:a,value:c}=s[o];a!=="id"&&r.setAttribute(a,c)}for(let o=0;o<n.childNodes.length;o++)n.childNodes[o].nodeType===this._document.ELEMENT_NODE&&r.appendChild(n.childNodes[o].cloneNode(!0));return r}_setSvgAttributes(n,r){return n.setAttribute("fit",""),n.setAttribute("height","100%"),n.setAttribute("width","100%"),n.setAttribute("preserveAspectRatio","xMidYMid meet"),n.setAttribute("focusable","false"),r&&r.viewBox&&n.setAttribute("viewBox",r.viewBox),n}_fetchIcon(n){let{url:r,options:s}=n,o=s?.withCredentials??!1;if(!this._httpClient)throw M_();if(r==null)throw Error(`Cannot fetch icon from URL "${r}".`);let a=this._sanitizer.sanitize(on.RESOURCE_URL,r);if(!a)throw jf(r);let c=this._inProgressUrlFetches.get(a);if(c)return c;let l=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(Lt(d=>Ws(d)),Wn(()=>this._inProgressUrlFetches.delete(a)),hh());return this._inProgressUrlFetches.set(a,l),l}_addSvgIconConfig(n,r,s){return this._svgIconConfigs.set($f(n,r),s),this}_addSvgIconSetConfig(n,r){let s=this._iconSetConfigs.get(n);return s?s.push(r):this._iconSetConfigs.set(n,[r]),this}_svgElementFromConfig(n){if(!n.svgElement){let r=this._svgElementFromString(n.svgText);this._setSvgAttributes(r,n.options),n.svgElement=r}return n.svgElement}_getIconConfigFromResolvers(n,r){for(let s=0;s<this._resolvers.length;s++){let o=this._resolvers[s](r,n);if(o)return A_(o)?new Yn(o.url,null,o.options):new Yn(o,null)}}};t.\u0275fac=function(r){return new(r||t)(H(ul,8),H(xl),H(It,8),H(zi))},t.\u0275prov=mt({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();function da(i){return i.cloneNode(!0)}function $f(i,t){return i+":"+t}function A_(i){return!!(i.url&&i.options)}var T_=new At("MAT_ICON_DEFAULT_OPTIONS"),C_=new At("mat-icon-location",{providedIn:"root",factory:R_});function R_(){let i=st(It),t=i?i.location:null;return{getPathname:()=>t?t.pathname+t.search:""}}var Yf=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],I_=Yf.map(i=>`[${i}]`).join(", "),D_=/^url\(['"]?#(.*?)['"]?\)$/,ua=(()=>{let t=class t{get color(){return this._color||this._defaultColor}set color(n){this._color=n}get svgIcon(){return this._svgIcon}set svgIcon(n){n!==this._svgIcon&&(n?this._updateSvgIcon(n):this._svgIcon&&this._clearSvgElement(),this._svgIcon=n)}get fontSet(){return this._fontSet}set fontSet(n){let r=this._cleanupFontValue(n);r!==this._fontSet&&(this._fontSet=r,this._updateFontIconClasses())}get fontIcon(){return this._fontIcon}set fontIcon(n){let r=this._cleanupFontValue(n);r!==this._fontIcon&&(this._fontIcon=r,this._updateFontIconClasses())}constructor(n,r,s,o,a,c){this._elementRef=n,this._iconRegistry=r,this._location=o,this._errorHandler=a,this.inline=!1,this._previousFontSetClass=[],this._currentIconFetch=Gn.EMPTY,c&&(c.color&&(this.color=this._defaultColor=c.color),c.fontSet&&(this.fontSet=c.fontSet)),s||n.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(n){if(!n)return["",""];let r=n.split(":");switch(r.length){case 1:return["",r[0]];case 2:return r;default:throw Error(`Invalid icon name: "${n}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let n=this._elementsWithExternalReferences;if(n&&n.size){let r=this._location.getPathname();r!==this._previousPath&&(this._previousPath=r,this._prependPathToReferences(r))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(n){this._clearSvgElement();let r=this._location.getPathname();this._previousPath=r,this._cacheChildrenWithExternalReferences(n),this._prependPathToReferences(r),this._elementRef.nativeElement.appendChild(n)}_clearSvgElement(){let n=this._elementRef.nativeElement,r=n.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();r--;){let s=n.childNodes[r];(s.nodeType!==1||s.nodeName.toLowerCase()==="svg")&&s.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let n=this._elementRef.nativeElement,r=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(s=>s.length>0);this._previousFontSetClass.forEach(s=>n.classList.remove(s)),r.forEach(s=>n.classList.add(s)),this._previousFontSetClass=r,this.fontIcon!==this._previousFontIconClass&&!r.includes("mat-ligature-font")&&(this._previousFontIconClass&&n.classList.remove(this._previousFontIconClass),this.fontIcon&&n.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(n){return typeof n=="string"?n.trim().split(" ")[0]:n}_prependPathToReferences(n){let r=this._elementsWithExternalReferences;r&&r.forEach((s,o)=>{s.forEach(a=>{o.setAttribute(a.name,`url('${n}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(n){let r=n.querySelectorAll(I_),s=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<r.length;o++)Yf.forEach(a=>{let c=r[o],l=c.getAttribute(a),d=l?l.match(D_):null;if(d){let u=s.get(c);u||(u=[],s.set(c,u)),u.push({name:a,value:d[1]})}})}_updateSvgIcon(n){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),n){let[r,s]=this._splitIconName(n);r&&(this._svgNamespace=r),s&&(this._svgName=s),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(s,r).pipe(sn(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${r}:${s}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}};t.\u0275fac=function(r){return new(r||t)(Ot(Se),Ot(E_),Fo("aria-hidden"),Ot(C_),Ot(zi),Ot(T_,8))},t.\u0275cmp=ve({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(r,s){r&2&&(Pn("data-mat-icon-type",s._usingFontIcon()?"font":"svg")("data-mat-icon-name",s._svgName||s.fontIcon)("data-mat-icon-namespace",s._svgNamespace||s.fontSet)("fontIcon",s._usingFontIcon()?s.fontIcon:null),Bo(s.color?"mat-"+s.color:""),Ln("mat-icon-inline",s.inline)("mat-icon-no-color",s.color!=="primary"&&s.color!=="accent"&&s.color!=="warn"))},inputs:{color:"color",inline:[ue.HasDecoratorInputTransform,"inline","inline",Ze],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],standalone:!0,features:[Dn,qe],ngContentSelectors:w_,decls:1,vars:0,template:function(r,s){r&1&&(Xn(),cn(0))},styles:["mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],encapsulation:2,changeDetection:0});let i=t;return i})(),Ol=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=Zt({type:t}),t.\u0275inj=qt({imports:[Ke,Ke]});let i=t;return i})();var P_=["mat-button",""],L_=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],O_=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var N_=new At("MAT_BUTTON_CONFIG");var F_=[{attribute:"mat-button",mdcClasses:["mdc-button","mat-mdc-button"]},{attribute:"mat-flat-button",mdcClasses:["mdc-button","mdc-button--unelevated","mat-mdc-unelevated-button"]},{attribute:"mat-raised-button",mdcClasses:["mdc-button","mdc-button--raised","mat-mdc-raised-button"]},{attribute:"mat-stroked-button",mdcClasses:["mdc-button","mdc-button--outlined","mat-mdc-outlined-button"]},{attribute:"mat-fab",mdcClasses:["mdc-fab","mat-mdc-fab"]},{attribute:"mat-mini-fab",mdcClasses:["mdc-fab","mdc-fab--mini","mat-mdc-mini-fab"]},{attribute:"mat-icon-button",mdcClasses:["mdc-icon-button","mat-mdc-icon-button"]}],k_=(()=>{let t=class t{get ripple(){return this._rippleLoader?.getRipple(this._elementRef.nativeElement)}set ripple(n){this._rippleLoader?.attachRipple(this._elementRef.nativeElement,n)}get disableRipple(){return this._disableRipple}set disableRipple(n){this._disableRipple=n,this._updateRippleDisabled()}get disabled(){return this._disabled}set disabled(n){this._disabled=n,this._updateRippleDisabled()}constructor(n,r,s,o){this._elementRef=n,this._platform=r,this._ngZone=s,this._animationMode=o,this._focusMonitor=st(Rf),this._rippleLoader=st(Gf),this._isFab=!1,this._disableRipple=!1,this._disabled=!1;let a=st(N_,{optional:!0}),c=n.nativeElement,l=c.classList;this.disabledInteractive=a?.disabledInteractive??!1,this._rippleLoader?.configureRipple(c,{className:"mat-mdc-button-ripple"});for(let{attribute:d,mdcClasses:u}of F_)c.hasAttribute(d)&&l.add(...u)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(n="program",r){n?this._focusMonitor.focusVia(this._elementRef.nativeElement,n,r):this._elementRef.nativeElement.focus(r)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}};t.\u0275fac=function(r){ko()},t.\u0275dir=we({type:t,inputs:{color:"color",disableRipple:[ue.HasDecoratorInputTransform,"disableRipple","disableRipple",Ze],disabled:[ue.HasDecoratorInputTransform,"disabled","disabled",Ze],ariaDisabled:[ue.HasDecoratorInputTransform,"aria-disabled","ariaDisabled",Ze],disabledInteractive:[ue.HasDecoratorInputTransform,"disabledInteractive","disabledInteractive",Ze]},features:[Dn]});let i=t;return i})();var Zf=(()=>{let t=class t extends k_{constructor(n,r,s,o){super(n,r,s,o)}};t.\u0275fac=function(r){return new(r||t)(Ot(Se),Ot(be),Ot(Ht),Ot(Vi,8))},t.\u0275cmp=ve({type:t,selectors:[["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""]],hostVars:14,hostBindings:function(r,s){r&2&&(Pn("disabled",s._getDisabledAttribute())("aria-disabled",s._getAriaDisabled()),Bo(s.color?"mat-"+s.color:""),Ln("mat-mdc-button-disabled",s.disabled)("mat-mdc-button-disabled-interactive",s.disabledInteractive)("_mat-animation-noopable",s._animationMode==="NoopAnimations")("mat-unthemed",!s.color)("mat-mdc-button-base",!0))},exportAs:["matButton"],standalone:!0,features:[Hi,qe],attrs:P_,ngContentSelectors:O_,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(r,s){r&1&&(Xn(L_),ke(0,"span",0),cn(1),_e(2,"span",1),cn(3,1),fe(),cn(4,2),ke(5,"span",2)(6,"span",3)),r&2&&Ln("mdc-button__ripple",!s._isFab)("mdc-fab__ripple",s._isFab)},styles:['.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:rgba(0,0,0,0)}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button[hidden]{display:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__progress-indicator{font-size:0;position:absolute;transform:translate(-50%, -50%);top:50%;left:50%;line-height:initial}.mdc-button .mdc-button__label{position:relative}.mdc-button .mdc-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px);display:none}@media screen and (forced-colors: active){.mdc-button .mdc-button__focus-ring{border-color:CanvasText}}.mdc-button .mdc-button__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-button .mdc-button__focus-ring::after{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{display:block}}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button{padding:0 8px 0 8px}.mdc-button--unelevated{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--unelevated.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--unelevated.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--raised{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--raised.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--raised.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--outlined{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--outlined .mdc-button__ripple{border-style:solid;border-color:rgba(0,0,0,0)}.mat-mdc-button{font-family:var(--mdc-text-button-label-text-font);font-size:var(--mdc-text-button-label-text-size);letter-spacing:var(--mdc-text-button-label-text-tracking);font-weight:var(--mdc-text-button-label-text-weight);text-transform:var(--mdc-text-button-label-text-transform);height:var(--mdc-text-button-container-height);border-radius:var(--mdc-text-button-container-shape);padding:0 var(--mat-text-button-horizontal-padding, 8px)}.mat-mdc-button:not(:disabled){color:var(--mdc-text-button-label-text-color)}.mat-mdc-button:disabled{color:var(--mdc-text-button-disabled-label-text-color)}.mat-mdc-button .mdc-button__ripple{border-radius:var(--mdc-text-button-container-shape)}.mat-mdc-button:has(.material-icons,mat-icon,[matButtonIcon]){padding:0 var(--mat-text-button-with-icon-horizontal-padding, 8px)}.mat-mdc-button>.mat-icon{margin-right:var(--mat-text-button-icon-spacing, 8px);margin-left:var(--mat-text-button-icon-offset, 0)}[dir=rtl] .mat-mdc-button>.mat-icon{margin-right:var(--mat-text-button-icon-offset, 0);margin-left:var(--mat-text-button-icon-spacing, 8px)}.mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-text-button-icon-offset, 0);margin-left:var(--mat-text-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-text-button-icon-spacing, 8px);margin-left:var(--mat-text-button-icon-offset, 0)}.mat-mdc-button .mat-ripple-element{background-color:var(--mat-text-button-ripple-color)}.mat-mdc-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-text-button-state-layer-color)}.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-text-button-disabled-state-layer-color)}.mat-mdc-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-hover-state-layer-opacity)}.mat-mdc-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-focus-state-layer-opacity)}.mat-mdc-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-pressed-state-layer-opacity)}.mat-mdc-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-text-button-touch-target-display)}.mat-mdc-button[disabled],.mat-mdc-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-text-button-disabled-label-text-color)}.mat-mdc-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-unelevated-button{font-family:var(--mdc-filled-button-label-text-font);font-size:var(--mdc-filled-button-label-text-size);letter-spacing:var(--mdc-filled-button-label-text-tracking);font-weight:var(--mdc-filled-button-label-text-weight);text-transform:var(--mdc-filled-button-label-text-transform);height:var(--mdc-filled-button-container-height);border-radius:var(--mdc-filled-button-container-shape);padding:0 var(--mat-filled-button-horizontal-padding, 16px)}.mat-mdc-unelevated-button:not(:disabled){background-color:var(--mdc-filled-button-container-color)}.mat-mdc-unelevated-button:disabled{background-color:var(--mdc-filled-button-disabled-container-color)}.mat-mdc-unelevated-button:not(:disabled){color:var(--mdc-filled-button-label-text-color)}.mat-mdc-unelevated-button:disabled{color:var(--mdc-filled-button-disabled-label-text-color)}.mat-mdc-unelevated-button .mdc-button__ripple{border-radius:var(--mdc-filled-button-container-shape)}.mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-filled-button-icon-spacing, 8px);margin-left:var(--mat-filled-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-filled-button-icon-offset, -4px);margin-left:var(--mat-filled-button-icon-spacing, 8px)}.mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-filled-button-icon-offset, -4px);margin-left:var(--mat-filled-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-filled-button-icon-spacing, 8px);margin-left:var(--mat-filled-button-icon-offset, -4px)}.mat-mdc-unelevated-button .mat-ripple-element{background-color:var(--mat-filled-button-ripple-color)}.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-filled-button-state-layer-color)}.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-filled-button-disabled-state-layer-color)}.mat-mdc-unelevated-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-hover-state-layer-opacity)}.mat-mdc-unelevated-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-focus-state-layer-opacity)}.mat-mdc-unelevated-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-pressed-state-layer-opacity)}.mat-mdc-unelevated-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-filled-button-touch-target-display)}.mat-mdc-unelevated-button[disabled],.mat-mdc-unelevated-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-filled-button-disabled-label-text-color);background-color:var(--mdc-filled-button-disabled-container-color)}.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-raised-button{font-family:var(--mdc-protected-button-label-text-font);font-size:var(--mdc-protected-button-label-text-size);letter-spacing:var(--mdc-protected-button-label-text-tracking);font-weight:var(--mdc-protected-button-label-text-weight);text-transform:var(--mdc-protected-button-label-text-transform);height:var(--mdc-protected-button-container-height);border-radius:var(--mdc-protected-button-container-shape);padding:0 var(--mat-protected-button-horizontal-padding, 16px);box-shadow:var(--mdc-protected-button-container-elevation-shadow)}.mat-mdc-raised-button:not(:disabled){background-color:var(--mdc-protected-button-container-color)}.mat-mdc-raised-button:disabled{background-color:var(--mdc-protected-button-disabled-container-color)}.mat-mdc-raised-button:not(:disabled){color:var(--mdc-protected-button-label-text-color)}.mat-mdc-raised-button:disabled{color:var(--mdc-protected-button-disabled-label-text-color)}.mat-mdc-raised-button .mdc-button__ripple{border-radius:var(--mdc-protected-button-container-shape)}.mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-protected-button-icon-spacing, 8px);margin-left:var(--mat-protected-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-protected-button-icon-offset, -4px);margin-left:var(--mat-protected-button-icon-spacing, 8px)}.mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-protected-button-icon-offset, -4px);margin-left:var(--mat-protected-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-protected-button-icon-spacing, 8px);margin-left:var(--mat-protected-button-icon-offset, -4px)}.mat-mdc-raised-button .mat-ripple-element{background-color:var(--mat-protected-button-ripple-color)}.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-protected-button-state-layer-color)}.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-protected-button-disabled-state-layer-color)}.mat-mdc-raised-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-hover-state-layer-opacity)}.mat-mdc-raised-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-focus-state-layer-opacity)}.mat-mdc-raised-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-pressed-state-layer-opacity)}.mat-mdc-raised-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-protected-button-touch-target-display)}.mat-mdc-raised-button:hover{box-shadow:var(--mdc-protected-button-hover-container-elevation-shadow)}.mat-mdc-raised-button:focus{box-shadow:var(--mdc-protected-button-focus-container-elevation-shadow)}.mat-mdc-raised-button:active,.mat-mdc-raised-button:focus:active{box-shadow:var(--mdc-protected-button-pressed-container-elevation-shadow)}.mat-mdc-raised-button[disabled],.mat-mdc-raised-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-protected-button-disabled-label-text-color);background-color:var(--mdc-protected-button-disabled-container-color)}.mat-mdc-raised-button[disabled].mat-mdc-button-disabled,.mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled{box-shadow:var(--mdc-protected-button-disabled-container-elevation-shadow)}.mat-mdc-raised-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-outlined-button{font-family:var(--mdc-outlined-button-label-text-font);font-size:var(--mdc-outlined-button-label-text-size);letter-spacing:var(--mdc-outlined-button-label-text-tracking);font-weight:var(--mdc-outlined-button-label-text-weight);text-transform:var(--mdc-outlined-button-label-text-transform);height:var(--mdc-outlined-button-container-height);border-radius:var(--mdc-outlined-button-container-shape);padding:0 15px 0 15px;border-width:var(--mdc-outlined-button-outline-width);padding:0 var(--mat-outlined-button-horizontal-padding, 15px)}.mat-mdc-outlined-button:not(:disabled){color:var(--mdc-outlined-button-label-text-color)}.mat-mdc-outlined-button:disabled{color:var(--mdc-outlined-button-disabled-label-text-color)}.mat-mdc-outlined-button .mdc-button__ripple{border-radius:var(--mdc-outlined-button-container-shape)}.mat-mdc-outlined-button:not(:disabled){border-color:var(--mdc-outlined-button-outline-color)}.mat-mdc-outlined-button:disabled{border-color:var(--mdc-outlined-button-disabled-outline-color)}.mat-mdc-outlined-button.mdc-button--icon-trailing{padding:0 11px 0 15px}.mat-mdc-outlined-button.mdc-button--icon-leading{padding:0 15px 0 11px}.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:var(--mdc-outlined-button-outline-width)}.mat-mdc-outlined-button .mdc-button__touch{left:calc(-1 * var(--mdc-outlined-button-outline-width));width:calc(100% + 2 * var(--mdc-outlined-button-outline-width))}.mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-outlined-button-icon-spacing, 8px);margin-left:var(--mat-outlined-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-outlined-button-icon-offset, -4px);margin-left:var(--mat-outlined-button-icon-spacing, 8px)}.mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-outlined-button-icon-offset, -4px);margin-left:var(--mat-outlined-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-outlined-button-icon-spacing, 8px);margin-left:var(--mat-outlined-button-icon-offset, -4px)}.mat-mdc-outlined-button .mat-ripple-element{background-color:var(--mat-outlined-button-ripple-color)}.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-outlined-button-state-layer-color)}.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-outlined-button-disabled-state-layer-color)}.mat-mdc-outlined-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-hover-state-layer-opacity)}.mat-mdc-outlined-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-focus-state-layer-opacity)}.mat-mdc-outlined-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-pressed-state-layer-opacity)}.mat-mdc-outlined-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-outlined-button-touch-target-display)}.mat-mdc-outlined-button[disabled],.mat-mdc-outlined-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-outlined-button-disabled-label-text-color);border-color:var(--mdc-outlined-button-disabled-outline-color)}.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-button-base{text-decoration:none}.mat-mdc-button,.mat-mdc-unelevated-button,.mat-mdc-raised-button,.mat-mdc-outlined-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-button .mdc-button__label,.mat-mdc-unelevated-button .mdc-button__label,.mat-mdc-raised-button .mdc-button__label,.mat-mdc-outlined-button .mdc-button__label{z-index:1}.mat-mdc-button .mat-mdc-focus-indicator,.mat-mdc-unelevated-button .mat-mdc-focus-indicator,.mat-mdc-raised-button .mat-mdc-focus-indicator,.mat-mdc-outlined-button .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-unelevated-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-raised-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-outlined-button:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-button._mat-animation-noopable,.mat-mdc-unelevated-button._mat-animation-noopable,.mat-mdc-raised-button._mat-animation-noopable,.mat-mdc-outlined-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-button>.mat-icon,.mat-mdc-unelevated-button>.mat-icon,.mat-mdc-raised-button>.mat-icon,.mat-mdc-outlined-button>.mat-icon{display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:-1px}.mat-mdc-unelevated-button .mat-mdc-focus-indicator::before,.mat-mdc-raised-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-outlined-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 3px)*-1)}',".cdk-high-contrast-active .mat-mdc-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-unelevated-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-raised-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-outlined-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-icon-button{outline:solid 1px}"],encapsulation:2,changeDetection:0});let i=t;return i})();var Kf=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=Zt({type:t}),t.\u0275inj=qt({imports:[Ke,Hf,Ke]});let i=t;return i})();var js=class{attach(t){return this._attachedHost=t,t.attach(this)}detach(){let t=this._attachedHost;t!=null&&(this._attachedHost=null,t.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(t){this._attachedHost=t}},Pr=class extends js{constructor(t,e,n,r,s){super(),this.component=t,this.viewContainerRef=e,this.injector=n,this.componentFactoryResolver=r,this.projectableNodes=s}},Lr=class extends js{constructor(t,e,n,r){super(),this.templateRef=t,this.viewContainerRef=e,this.context=n,this.injector=r}get origin(){return this.templateRef.elementRef}attach(t,e=this.context){return this.context=e,super.attach(t)}detach(){return this.context=void 0,super.detach()}},Nl=class extends js{constructor(t){super(),this.element=t instanceof Se?t.nativeElement:t}},Or=class{constructor(){this._isDisposed=!1,this.attachDomPortal=null}hasAttached(){return!!this._attachedPortal}attach(t){if(t instanceof Pr)return this._attachedPortal=t,this.attachComponentPortal(t);if(t instanceof Lr)return this._attachedPortal=t,this.attachTemplatePortal(t);if(this.attachDomPortal&&t instanceof Nl)return this._attachedPortal=t,this.attachDomPortal(t)}detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(t){this._disposeFn=t}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var ha=class extends Or{constructor(t,e,n,r,s){super(),this.outletElement=t,this._componentFactoryResolver=e,this._appRef=n,this._defaultInjector=r,this.attachDomPortal=o=>{this._document;let a=o.element;a.parentNode;let c=this._document.createComment("dom-portal");a.parentNode.insertBefore(c,a),this.outletElement.appendChild(a),this._attachedPortal=o,super.setDisposeFn(()=>{c.parentNode&&c.parentNode.replaceChild(a,c)})},this._document=s}attachComponentPortal(t){let n=(t.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(t.component),r;return t.viewContainerRef?(r=t.viewContainerRef.createComponent(n,t.viewContainerRef.length,t.injector||t.viewContainerRef.injector,t.projectableNodes||void 0),this.setDisposeFn(()=>r.destroy())):(r=n.create(t.injector||this._defaultInjector||pn.NULL),this._appRef.attachView(r.hostView),this.setDisposeFn(()=>{this._appRef.viewCount>0&&this._appRef.detachView(r.hostView),r.destroy()})),this.outletElement.appendChild(this._getComponentRootNode(r)),this._attachedPortal=t,r}attachTemplatePortal(t){let e=t.viewContainerRef,n=e.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return n.rootNodes.forEach(r=>this.outletElement.appendChild(r)),n.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(n);r!==-1&&e.remove(r)}),this._attachedPortal=t,n}dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(t){return t.hostView.rootNodes[0]}};var Fl=(()=>{let t=class t extends Or{constructor(n,r,s){super(),this._componentFactoryResolver=n,this._viewContainerRef=r,this._isInitialized=!1,this.attached=new mn,this.attachDomPortal=o=>{this._document;let a=o.element;a.parentNode;let c=this._document.createComment("dom-portal");o.setAttachedHost(this),a.parentNode.insertBefore(c,a),this._getRootNode().appendChild(a),this._attachedPortal=o,super.setDisposeFn(()=>{c.parentNode&&c.parentNode.replaceChild(a,c)})},this._document=s}get portal(){return this._attachedPortal}set portal(n){this.hasAttached()&&!n&&!this._isInitialized||(this.hasAttached()&&super.detach(),n&&super.attach(n),this._attachedPortal=n||null)}get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(n){n.setAttachedHost(this);let r=n.viewContainerRef!=null?n.viewContainerRef:this._viewContainerRef,o=(n.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(n.component),a=r.createComponent(o,r.length,n.injector||r.injector,n.projectableNodes||void 0);return r!==this._viewContainerRef&&this._getRootNode().appendChild(a.hostView.rootNodes[0]),super.setDisposeFn(()=>a.destroy()),this._attachedPortal=n,this._attachedRef=a,this.attached.emit(a),a}attachTemplatePortal(n){n.setAttachedHost(this);let r=this._viewContainerRef.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=n,this._attachedRef=r,this.attached.emit(r),r}_getRootNode(){let n=this._viewContainerRef.element.nativeElement;return n.nodeType===n.ELEMENT_NODE?n:n.parentNode}};t.\u0275fac=function(r){return new(r||t)(Ot(Uo),Ot(wr),Ot(It))},t.\u0275dir=we({type:t,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[ue.None,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],standalone:!0,features:[Hi]});let i=t;return i})();var fa=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=Zt({type:t}),t.\u0275inj=qt({});let i=t;return i})();var U_=20,Qf=(()=>{let t=class t{constructor(n,r,s){this._ngZone=n,this._platform=r,this._scrolled=new ee,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=s}register(n){this.scrollContainers.has(n)||this.scrollContainers.set(n,n.elementScrolled().subscribe(()=>this._scrolled.next(n)))}deregister(n){let r=this.scrollContainers.get(n);r&&(r.unsubscribe(),this.scrollContainers.delete(n))}scrolled(n=U_){return this._platform.isBrowser?new vr(r=>{this._globalSubscription||this._addGlobalListener();let s=n>0?this._scrolled.pipe(Wc(n)).subscribe(r):this._scrolled.subscribe(r);return this._scrolledCount++,()=>{s.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):_t()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((n,r)=>this.deregister(r)),this._scrolled.complete()}ancestorScrolled(n,r){let s=this.getAncestorScrollContainers(n);return this.scrolled(r).pipe($e(o=>!o||s.indexOf(o)>-1))}getAncestorScrollContainers(n){let r=[];return this.scrollContainers.forEach((s,o)=>{this._scrollableContainsElement(o,n)&&r.push(o)}),r}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(n,r){let s=$n(r),o=n.getElementRef().nativeElement;do if(s==o)return!0;while(s=s.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>{let n=this._getWindow();return ah(n.document,"scroll").subscribe(()=>this._scrolled.next())})}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}};t.\u0275fac=function(r){return new(r||t)(H(Ht),H(be),H(It,8))},t.\u0275prov=mt({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var B_=20,kl=(()=>{let t=class t{constructor(n,r,s){this._platform=n,this._change=new ee,this._changeListener=o=>{this._change.next(o)},this._document=s,r.runOutsideAngular(()=>{if(n.isBrowser){let o=this._getWindow();o.addEventListener("resize",this._changeListener),o.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){let n=this._getWindow();n.removeEventListener("resize",this._changeListener),n.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let n={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),n}getViewportRect(){let n=this.getViewportScrollPosition(),{width:r,height:s}=this.getViewportSize();return{top:n.top,left:n.left,bottom:n.top+s,right:n.left+r,height:s,width:r}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let n=this._document,r=this._getWindow(),s=n.documentElement,o=s.getBoundingClientRect(),a=-o.top||n.body.scrollTop||r.scrollY||s.scrollTop||0,c=-o.left||n.body.scrollLeft||r.scrollX||s.scrollLeft||0;return{top:a,left:c}}change(n=B_){return n>0?this._change.pipe(Wc(n)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let n=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:n.innerWidth,height:n.innerHeight}:{width:0,height:0}}};t.\u0275fac=function(r){return new(r||t)(H(be),H(Ht),H(It,8))},t.\u0275prov=mt({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var Jf=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=Zt({type:t}),t.\u0275inj=qt({});let i=t;return i})(),Ul=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=Zt({type:t}),t.\u0275inj=qt({imports:[mi,Jf,mi,Jf]});let i=t;return i})();var tp=yf(),Bl=class{constructor(t,e){this._viewportRuler=t,this._previousHTMLStyles={top:"",left:""},this._isEnabled=!1,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let t=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=t.style.left||"",this._previousHTMLStyles.top=t.style.top||"",t.style.left=Me(-this._previousScrollPosition.left),t.style.top=Me(-this._previousScrollPosition.top),t.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let t=this._document.documentElement,e=this._document.body,n=t.style,r=e.style,s=n.scrollBehavior||"",o=r.scrollBehavior||"";this._isEnabled=!1,n.left=this._previousHTMLStyles.left,n.top=this._previousHTMLStyles.top,t.classList.remove("cdk-global-scrollblock"),tp&&(n.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),tp&&(n.scrollBehavior=s,r.scrollBehavior=o)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.body,n=this._viewportRuler.getViewportSize();return e.scrollHeight>n.height||e.scrollWidth>n.width}};var zl=class{constructor(t,e,n,r){this._scrollDispatcher=t,this._ngZone=e,this._viewportRuler=n,this._config=r,this._scrollSubscription=null,this._detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}}attach(t){this._overlayRef,this._overlayRef=t}enable(){if(this._scrollSubscription)return;let t=this._scrollDispatcher.scrolled(0).pipe($e(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=t.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=t.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},pa=class{enable(){}disable(){}attach(){}};function Vl(i,t){return t.some(e=>{let n=i.bottom<e.top,r=i.top>e.bottom,s=i.right<e.left,o=i.left>e.right;return n||r||s||o})}function ep(i,t){return t.some(e=>{let n=i.top<e.top,r=i.bottom>e.bottom,s=i.left<e.left,o=i.right>e.right;return n||r||s||o})}var Hl=class{constructor(t,e,n,r){this._scrollDispatcher=t,this._viewportRuler=e,this._ngZone=n,this._config=r,this._scrollSubscription=null}attach(t){this._overlayRef,this._overlayRef=t}enable(){if(!this._scrollSubscription){let t=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(t).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:n,height:r}=this._viewportRuler.getViewportSize();Vl(e,[{width:n,height:r,bottom:r,right:n,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},V_=(()=>{let t=class t{constructor(n,r,s,o){this._scrollDispatcher=n,this._viewportRuler=r,this._ngZone=s,this.noop=()=>new pa,this.close=a=>new zl(this._scrollDispatcher,this._ngZone,this._viewportRuler,a),this.block=()=>new Bl(this._viewportRuler,this._document),this.reposition=a=>new Hl(this._scrollDispatcher,this._viewportRuler,this._ngZone,a),this._document=o}};t.\u0275fac=function(r){return new(r||t)(H(Qf),H(kl),H(Ht),H(It))},t.\u0275prov=mt({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})(),Xs=class{constructor(t){if(this.scrollStrategy=new pa,this.panelClass="",this.hasBackdrop=!1,this.backdropClass="cdk-overlay-dark-backdrop",this.disposeOnNavigation=!1,t){let e=Object.keys(t);for(let n of e)t[n]!==void 0&&(this[n]=t[n])}}};var Gl=class{constructor(t,e){this.connectionPair=t,this.scrollableViewProperties=e}};var op=(()=>{let t=class t{constructor(n){this._attachedOverlays=[],this._document=n}ngOnDestroy(){this.detach()}add(n){this.remove(n),this._attachedOverlays.push(n)}remove(n){let r=this._attachedOverlays.indexOf(n);r>-1&&this._attachedOverlays.splice(r,1),this._attachedOverlays.length===0&&this.detach()}};t.\u0275fac=function(r){return new(r||t)(H(It))},t.\u0275prov=mt({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})(),H_=(()=>{let t=class t extends op{constructor(n,r){super(n),this._ngZone=r,this._keydownListener=s=>{let o=this._attachedOverlays;for(let a=o.length-1;a>-1;a--)if(o[a]._keydownEvents.observers.length>0){let c=o[a]._keydownEvents;this._ngZone?this._ngZone.run(()=>c.next(s)):c.next(s);break}}}add(n){super.add(n),this._isAttached||(this._ngZone?this._ngZone.runOutsideAngular(()=>this._document.body.addEventListener("keydown",this._keydownListener)):this._document.body.addEventListener("keydown",this._keydownListener),this._isAttached=!0)}detach(){this._isAttached&&(this._document.body.removeEventListener("keydown",this._keydownListener),this._isAttached=!1)}};t.\u0275fac=function(r){return new(r||t)(H(It),H(Ht,8))},t.\u0275prov=mt({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})(),G_=(()=>{let t=class t extends op{constructor(n,r,s){super(n),this._platform=r,this._ngZone=s,this._cursorStyleIsSet=!1,this._pointerDownListener=o=>{this._pointerDownEventTarget=xn(o)},this._clickListener=o=>{let a=xn(o),c=o.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:a;this._pointerDownEventTarget=null;let l=this._attachedOverlays.slice();for(let d=l.length-1;d>-1;d--){let u=l[d];if(u._outsidePointerEvents.observers.length<1||!u.hasAttached())continue;if(u.overlayElement.contains(a)||u.overlayElement.contains(c))break;let h=u._outsidePointerEvents;this._ngZone?this._ngZone.run(()=>h.next(o)):h.next(o)}}}add(n){if(super.add(n),!this._isAttached){let r=this._document.body;this._ngZone?this._ngZone.runOutsideAngular(()=>this._addEventListeners(r)):this._addEventListeners(r),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=r.style.cursor,r.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){if(this._isAttached){let n=this._document.body;n.removeEventListener("pointerdown",this._pointerDownListener,!0),n.removeEventListener("click",this._clickListener,!0),n.removeEventListener("auxclick",this._clickListener,!0),n.removeEventListener("contextmenu",this._clickListener,!0),this._platform.IOS&&this._cursorStyleIsSet&&(n.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1}}_addEventListeners(n){n.addEventListener("pointerdown",this._pointerDownListener,!0),n.addEventListener("click",this._clickListener,!0),n.addEventListener("auxclick",this._clickListener,!0),n.addEventListener("contextmenu",this._clickListener,!0)}};t.\u0275fac=function(r){return new(r||t)(H(It),H(be),H(Ht,8))},t.\u0275prov=mt({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})(),ap=(()=>{let t=class t{constructor(n,r){this._platform=r,this._document=n}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let n="cdk-overlay-container";if(this._platform.isBrowser||Hs()){let s=this._document.querySelectorAll(`.${n}[platform="server"], .${n}[platform="test"]`);for(let o=0;o<s.length;o++)s[o].remove()}let r=this._document.createElement("div");r.classList.add(n),Hs()?r.setAttribute("platform","test"):this._platform.isBrowser||r.setAttribute("platform","server"),this._document.body.appendChild(r),this._containerElement=r}};t.\u0275fac=function(r){return new(r||t)(H(It),H(be))},t.\u0275prov=mt({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})(),Wl=class{constructor(t,e,n,r,s,o,a,c,l,d=!1){this._portalOutlet=t,this._host=e,this._pane=n,this._config=r,this._ngZone=s,this._keyboardDispatcher=o,this._document=a,this._location=c,this._outsideClickDispatcher=l,this._animationsDisabled=d,this._backdropElement=null,this._backdropClick=new ee,this._attachments=new ee,this._detachments=new ee,this._locationChanges=Gn.EMPTY,this._backdropClickHandler=u=>this._backdropClick.next(u),this._backdropTransitionendHandler=u=>{this._disposeBackdrop(u.target)},this._keydownEvents=new ee,this._outsidePointerEvents=new ee,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropElement}get hostElement(){return this._host}attach(t){!this._host.parentElement&&this._previousHostParent&&this._previousHostParent.appendChild(this._host);let e=this._portalOutlet.attach(t);return this._positionStrategy&&this._positionStrategy.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._ngZone.onStable.pipe(sn(1)).subscribe(()=>{this.hasAttached()&&this.updatePosition()}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let t=this._portalOutlet.detach();return this._detachments.next(),this._keyboardDispatcher.remove(this),this._detachContentWhenStable(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),t}dispose(){let t=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._disposeBackdrop(this._backdropElement),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._previousHostParent=this._pane=this._host=null,t&&this._detachments.next(),this._detachments.complete()}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(t){t!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=t,this.hasAttached()&&(t.attach(this),this.updatePosition()))}updateSize(t){this._config=it(it({},this._config),t),this._updateElementSize()}setDirection(t){this._config=Re(it({},this._config),{direction:t}),this._updateElementDirection()}addPanelClass(t){this._pane&&this._toggleClasses(this._pane,t,!0)}removePanelClass(t){this._pane&&this._toggleClasses(this._pane,t,!1)}getDirection(){let t=this._config.direction;return t?typeof t=="string"?t:t.value:"ltr"}updateScrollStrategy(t){t!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=t,this.hasAttached()&&(t.attach(this),t.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let t=this._pane.style;t.width=Me(this._config.width),t.height=Me(this._config.height),t.minWidth=Me(this._config.minWidth),t.minHeight=Me(this._config.minHeight),t.maxWidth=Me(this._config.maxWidth),t.maxHeight=Me(this._config.maxHeight)}_togglePointerEvents(t){this._pane.style.pointerEvents=t?"":"none"}_attachBackdrop(){let t="cdk-overlay-backdrop-showing";this._backdropElement=this._document.createElement("div"),this._backdropElement.classList.add("cdk-overlay-backdrop"),this._animationsDisabled&&this._backdropElement.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropElement,this._config.backdropClass,!0),this._host.parentElement.insertBefore(this._backdropElement,this._host),this._backdropElement.addEventListener("click",this._backdropClickHandler),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{this._backdropElement&&this._backdropElement.classList.add(t)})}):this._backdropElement.classList.add(t)}_updateStackingOrder(){this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){let t=this._backdropElement;if(t){if(this._animationsDisabled){this._disposeBackdrop(t);return}t.classList.remove("cdk-overlay-backdrop-showing"),this._ngZone.runOutsideAngular(()=>{t.addEventListener("transitionend",this._backdropTransitionendHandler)}),t.style.pointerEvents="none",this._backdropTimeout=this._ngZone.runOutsideAngular(()=>setTimeout(()=>{this._disposeBackdrop(t)},500))}}_toggleClasses(t,e,n){let r=Ir(e||[]).filter(s=>!!s);r.length&&(n?t.classList.add(...r):t.classList.remove(...r))}_detachContentWhenStable(){this._ngZone.runOutsideAngular(()=>{let t=this._ngZone.onStable.pipe(yn(ch(this._attachments,this._detachments))).subscribe(()=>{(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),t.unsubscribe())})})}_disposeScrollStrategy(){let t=this._scrollStrategy;t&&(t.disable(),t.detach&&t.detach())}_disposeBackdrop(t){t&&(t.removeEventListener("click",this._backdropClickHandler),t.removeEventListener("transitionend",this._backdropTransitionendHandler),t.remove(),this._backdropElement===t&&(this._backdropElement=null)),this._backdropTimeout&&(clearTimeout(this._backdropTimeout),this._backdropTimeout=void 0)}},np="cdk-overlay-connected-position-bounding-box",W_=/([A-Za-z%]+)$/,jl=class{get positions(){return this._preferredPositions}constructor(t,e,n,r,s){this._viewportRuler=e,this._document=n,this._platform=r,this._overlayContainer=s,this._lastBoundingBoxSize={width:0,height:0},this._isPushed=!1,this._canPush=!0,this._growAfterOpen=!1,this._hasFlexibleDimensions=!0,this._positionLocked=!1,this._viewportMargin=0,this._scrollables=[],this._preferredPositions=[],this._positionChanges=new ee,this._resizeSubscription=Gn.EMPTY,this._offsetX=0,this._offsetY=0,this._appliedPanelClasses=[],this.positionChanges=this._positionChanges,this.setOrigin(t)}attach(t){this._overlayRef&&this._overlayRef,this._validatePositions(),t.hostElement.classList.add(np),this._overlayRef=t,this._boundingBox=t.hostElement,this._pane=t.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._overlayContainer.getContainerElement().getBoundingClientRect();let t=this._originRect,e=this._overlayRect,n=this._viewportRect,r=this._containerRect,s=[],o;for(let a of this._preferredPositions){let c=this._getOriginPoint(t,r,a),l=this._getOverlayPoint(c,e,a),d=this._getOverlayFit(l,e,n,a);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(a,c);return}if(this._canFitWithFlexibleDimensions(d,l,n)){s.push({position:a,origin:c,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(c,a)});continue}(!o||o.overlayFit.visibleArea<d.visibleArea)&&(o={overlayFit:d,overlayPoint:l,originPoint:c,position:a,overlayRect:e})}if(s.length){let a=null,c=-1;for(let l of s){let d=l.boundingBoxRect.width*l.boundingBoxRect.height*(l.position.weight||1);d>c&&(c=d,a=l)}this._isPushed=!1,this._applyPosition(a.position,a.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(o.position,o.originPoint);return}this._applyPosition(o.position,o.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Zi(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(np),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let t=this._lastPosition;if(t){this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._overlayContainer.getContainerElement().getBoundingClientRect();let e=this._getOriginPoint(this._originRect,this._containerRect,t);this._applyPosition(t,e)}else this.apply()}withScrollableContainers(t){return this._scrollables=t,this}withPositions(t){return this._preferredPositions=t,t.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(t){return this._viewportMargin=t,this}withFlexibleDimensions(t=!0){return this._hasFlexibleDimensions=t,this}withGrowAfterOpen(t=!0){return this._growAfterOpen=t,this}withPush(t=!0){return this._canPush=t,this}withLockedPosition(t=!0){return this._positionLocked=t,this}setOrigin(t){return this._origin=t,this}withDefaultOffsetX(t){return this._offsetX=t,this}withDefaultOffsetY(t){return this._offsetY=t,this}withTransformOriginOn(t){return this._transformOriginSelector=t,this}_getOriginPoint(t,e,n){let r;if(n.originX=="center")r=t.left+t.width/2;else{let o=this._isRtl()?t.right:t.left,a=this._isRtl()?t.left:t.right;r=n.originX=="start"?o:a}e.left<0&&(r-=e.left);let s;return n.originY=="center"?s=t.top+t.height/2:s=n.originY=="top"?t.top:t.bottom,e.top<0&&(s-=e.top),{x:r,y:s}}_getOverlayPoint(t,e,n){let r;n.overlayX=="center"?r=-e.width/2:n.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let s;return n.overlayY=="center"?s=-e.height/2:s=n.overlayY=="top"?0:-e.height,{x:t.x+r,y:t.y+s}}_getOverlayFit(t,e,n,r){let s=rp(e),{x:o,y:a}=t,c=this._getOffset(r,"x"),l=this._getOffset(r,"y");c&&(o+=c),l&&(a+=l);let d=0-o,u=o+s.width-n.width,h=0-a,m=a+s.height-n.height,g=this._subtractOverflows(s.width,d,u),v=this._subtractOverflows(s.height,h,m),p=g*v;return{visibleArea:p,isCompletelyWithinViewport:s.width*s.height===p,fitsInViewportVertically:v===s.height,fitsInViewportHorizontally:g==s.width}}_canFitWithFlexibleDimensions(t,e,n){if(this._hasFlexibleDimensions){let r=n.bottom-e.y,s=n.right-e.x,o=ip(this._overlayRef.getConfig().minHeight),a=ip(this._overlayRef.getConfig().minWidth),c=t.fitsInViewportVertically||o!=null&&o<=r,l=t.fitsInViewportHorizontally||a!=null&&a<=s;return c&&l}return!1}_pushOverlayOnScreen(t,e,n){if(this._previousPushAmount&&this._positionLocked)return{x:t.x+this._previousPushAmount.x,y:t.y+this._previousPushAmount.y};let r=rp(e),s=this._viewportRect,o=Math.max(t.x+r.width-s.width,0),a=Math.max(t.y+r.height-s.height,0),c=Math.max(s.top-n.top-t.y,0),l=Math.max(s.left-n.left-t.x,0),d=0,u=0;return r.width<=s.width?d=l||-o:d=t.x<this._viewportMargin?s.left-n.left-t.x:0,r.height<=s.height?u=c||-a:u=t.y<this._viewportMargin?s.top-n.top-t.y:0,this._previousPushAmount={x:d,y:u},{x:t.x+d,y:t.y+u}}_applyPosition(t,e){if(this._setTransformOrigin(t),this._setOverlayElementStyles(e,t),this._setBoundingBoxStyles(e,t),t.panelClass&&this._addPanelClasses(t.panelClass),this._positionChanges.observers.length){let n=this._getScrollVisibility();if(t!==this._lastPosition||!this._lastScrollVisibility||!j_(this._lastScrollVisibility,n)){let r=new Gl(t,n);this._positionChanges.next(r)}this._lastScrollVisibility=n}this._lastPosition=t,this._isInitialRender=!1}_setTransformOrigin(t){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),n,r=t.overlayY;t.overlayX==="center"?n="center":this._isRtl()?n=t.overlayX==="start"?"right":"left":n=t.overlayX==="start"?"left":"right";for(let s=0;s<e.length;s++)e[s].style.transformOrigin=`${n} ${r}`}_calculateBoundingBoxRect(t,e){let n=this._viewportRect,r=this._isRtl(),s,o,a;if(e.overlayY==="top")o=t.y,s=n.height-o+this._viewportMargin;else if(e.overlayY==="bottom")a=n.height-t.y+this._viewportMargin*2,s=n.height-a+this._viewportMargin;else{let m=Math.min(n.bottom-t.y+n.top,t.y),g=this._lastBoundingBoxSize.height;s=m*2,o=t.y-m,s>g&&!this._isInitialRender&&!this._growAfterOpen&&(o=t.y-g/2)}let c=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,l=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,d,u,h;if(l)h=n.width-t.x+this._viewportMargin*2,d=t.x-this._viewportMargin;else if(c)u=t.x,d=n.right-t.x;else{let m=Math.min(n.right-t.x+n.left,t.x),g=this._lastBoundingBoxSize.width;d=m*2,u=t.x-m,d>g&&!this._isInitialRender&&!this._growAfterOpen&&(u=t.x-g/2)}return{top:o,left:u,bottom:a,right:h,width:d,height:s}}_setBoundingBoxStyles(t,e){let n=this._calculateBoundingBoxRect(t,e);!this._isInitialRender&&!this._growAfterOpen&&(n.height=Math.min(n.height,this._lastBoundingBoxSize.height),n.width=Math.min(n.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right=r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let s=this._overlayRef.getConfig().maxHeight,o=this._overlayRef.getConfig().maxWidth;r.height=Me(n.height),r.top=Me(n.top),r.bottom=Me(n.bottom),r.width=Me(n.width),r.left=Me(n.left),r.right=Me(n.right),e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",s&&(r.maxHeight=Me(s)),o&&(r.maxWidth=Me(o))}this._lastBoundingBoxSize=n,Zi(this._boundingBox.style,r)}_resetBoundingBoxStyles(){Zi(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Zi(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(t,e){let n={},r=this._hasExactPosition(),s=this._hasFlexibleDimensions,o=this._overlayRef.getConfig();if(r){let d=this._viewportRuler.getViewportScrollPosition();Zi(n,this._getExactOverlayY(e,t,d)),Zi(n,this._getExactOverlayX(e,t,d))}else n.position="static";let a="",c=this._getOffset(e,"x"),l=this._getOffset(e,"y");c&&(a+=`translateX(${c}px) `),l&&(a+=`translateY(${l}px)`),n.transform=a.trim(),o.maxHeight&&(r?n.maxHeight=Me(o.maxHeight):s&&(n.maxHeight="")),o.maxWidth&&(r?n.maxWidth=Me(o.maxWidth):s&&(n.maxWidth="")),Zi(this._pane.style,n)}_getExactOverlayY(t,e,n){let r={top:"",bottom:""},s=this._getOverlayPoint(e,this._overlayRect,t);if(this._isPushed&&(s=this._pushOverlayOnScreen(s,this._overlayRect,n)),t.overlayY==="bottom"){let o=this._document.documentElement.clientHeight;r.bottom=`${o-(s.y+this._overlayRect.height)}px`}else r.top=Me(s.y);return r}_getExactOverlayX(t,e,n){let r={left:"",right:""},s=this._getOverlayPoint(e,this._overlayRect,t);this._isPushed&&(s=this._pushOverlayOnScreen(s,this._overlayRect,n));let o;if(this._isRtl()?o=t.overlayX==="end"?"left":"right":o=t.overlayX==="end"?"right":"left",o==="right"){let a=this._document.documentElement.clientWidth;r.right=`${a-(s.x+this._overlayRect.width)}px`}else r.left=Me(s.x);return r}_getScrollVisibility(){let t=this._getOriginRect(),e=this._pane.getBoundingClientRect(),n=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:ep(t,n),isOriginOutsideView:Vl(t,n),isOverlayClipped:ep(e,n),isOverlayOutsideView:Vl(e,n)}}_subtractOverflows(t,...e){return e.reduce((n,r)=>n-Math.max(r,0),t)}_getNarrowedViewportRect(){let t=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,n=this._viewportRuler.getViewportScrollPosition();return{top:n.top+this._viewportMargin,left:n.left+this._viewportMargin,right:n.left+t-this._viewportMargin,bottom:n.top+e-this._viewportMargin,width:t-2*this._viewportMargin,height:e-2*this._viewportMargin}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(t,e){return e==="x"?t.offsetX==null?this._offsetX:t.offsetX:t.offsetY==null?this._offsetY:t.offsetY}_validatePositions(){}_addPanelClasses(t){this._pane&&Ir(t).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(t=>{this._pane.classList.remove(t)}),this._appliedPanelClasses=[])}_getOriginRect(){let t=this._origin;if(t instanceof Se)return t.nativeElement.getBoundingClientRect();if(t instanceof Element)return t.getBoundingClientRect();let e=t.width||0,n=t.height||0;return{top:t.y,bottom:t.y+n,left:t.x,right:t.x+e,height:n,width:e}}};function Zi(i,t){for(let e in t)t.hasOwnProperty(e)&&(i[e]=t[e]);return i}function ip(i){if(typeof i!="number"&&i!=null){let[t,e]=i.split(W_);return!e||e==="px"?parseFloat(t):null}return i||null}function rp(i){return{top:Math.floor(i.top),right:Math.floor(i.right),bottom:Math.floor(i.bottom),left:Math.floor(i.left),width:Math.floor(i.width),height:Math.floor(i.height)}}function j_(i,t){return i===t?!0:i.isOriginClipped===t.isOriginClipped&&i.isOriginOutsideView===t.isOriginOutsideView&&i.isOverlayClipped===t.isOverlayClipped&&i.isOverlayOutsideView===t.isOverlayOutsideView}var sp="cdk-global-overlay-wrapper",Xl=class{constructor(){this._cssPosition="static",this._topOffset="",this._bottomOffset="",this._alignItems="",this._xPosition="",this._xOffset="",this._width="",this._height="",this._isDisposed=!1}attach(t){let e=t.getConfig();this._overlayRef=t,this._width&&!e.width&&t.updateSize({width:this._width}),this._height&&!e.height&&t.updateSize({height:this._height}),t.hostElement.classList.add(sp),this._isDisposed=!1}top(t=""){return this._bottomOffset="",this._topOffset=t,this._alignItems="flex-start",this}left(t=""){return this._xOffset=t,this._xPosition="left",this}bottom(t=""){return this._topOffset="",this._bottomOffset=t,this._alignItems="flex-end",this}right(t=""){return this._xOffset=t,this._xPosition="right",this}start(t=""){return this._xOffset=t,this._xPosition="start",this}end(t=""){return this._xOffset=t,this._xPosition="end",this}width(t=""){return this._overlayRef?this._overlayRef.updateSize({width:t}):this._width=t,this}height(t=""){return this._overlayRef?this._overlayRef.updateSize({height:t}):this._height=t,this}centerHorizontally(t=""){return this.left(t),this._xPosition="center",this}centerVertically(t=""){return this.top(t),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let t=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,n=this._overlayRef.getConfig(),{width:r,height:s,maxWidth:o,maxHeight:a}=n,c=(r==="100%"||r==="100vw")&&(!o||o==="100%"||o==="100vw"),l=(s==="100%"||s==="100vh")&&(!a||a==="100%"||a==="100vh"),d=this._xPosition,u=this._xOffset,h=this._overlayRef.getConfig().direction==="rtl",m="",g="",v="";c?v="flex-start":d==="center"?(v="center",h?g=u:m=u):h?d==="left"||d==="end"?(v="flex-end",m=u):(d==="right"||d==="start")&&(v="flex-start",g=u):d==="left"||d==="start"?(v="flex-start",m=u):(d==="right"||d==="end")&&(v="flex-end",g=u),t.position=this._cssPosition,t.marginLeft=c?"0":m,t.marginTop=l?"0":this._topOffset,t.marginBottom=this._bottomOffset,t.marginRight=c?"0":g,e.justifyContent=v,e.alignItems=l?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let t=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,n=e.style;e.classList.remove(sp),n.justifyContent=n.alignItems=t.marginTop=t.marginBottom=t.marginLeft=t.marginRight=t.position="",this._overlayRef=null,this._isDisposed=!0}},X_=(()=>{let t=class t{constructor(n,r,s,o){this._viewportRuler=n,this._document=r,this._platform=s,this._overlayContainer=o}global(){return new Xl}flexibleConnectedTo(n){return new jl(n,this._viewportRuler,this._document,this._platform,this._overlayContainer)}};t.\u0275fac=function(r){return new(r||t)(H(kl),H(It),H(be),H(ap))},t.\u0275prov=mt({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})(),$_=0,$s=(()=>{let t=class t{constructor(n,r,s,o,a,c,l,d,u,h,m,g){this.scrollStrategies=n,this._overlayContainer=r,this._componentFactoryResolver=s,this._positionBuilder=o,this._keyboardDispatcher=a,this._injector=c,this._ngZone=l,this._document=d,this._directionality=u,this._location=h,this._outsideClickDispatcher=m,this._animationsModuleType=g}create(n){let r=this._createHostElement(),s=this._createPaneElement(r),o=this._createPortalOutlet(s),a=new Xs(n);return a.direction=a.direction||this._directionality.value,new Wl(o,r,s,a,this._ngZone,this._keyboardDispatcher,this._document,this._location,this._outsideClickDispatcher,this._animationsModuleType==="NoopAnimations")}position(){return this._positionBuilder}_createPaneElement(n){let r=this._document.createElement("div");return r.id=`cdk-overlay-${$_++}`,r.classList.add("cdk-overlay-pane"),n.appendChild(r),r}_createHostElement(){let n=this._document.createElement("div");return this._overlayContainer.getContainerElement().appendChild(n),n}_createPortalOutlet(n){return this._appRef||(this._appRef=this._injector.get(Tr)),new ha(n,this._componentFactoryResolver,this._appRef,this._injector,this._document)}};t.\u0275fac=function(r){return new(r||t)(H(V_),H(ap),H(Uo),H(X_),H(H_),H(pn),H(Ht),H(It),H(Pf),H(Wi),H(G_),H(Vi,8))},t.\u0275prov=mt({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var Y_=new At("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let i=st($s);return()=>i.scrollStrategies.reposition()}});function q_(i){return()=>i.scrollStrategies.reposition()}var Z_={provide:Y_,deps:[$s],useFactory:q_},cp=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=Zt({type:t}),t.\u0275inj=qt({providers:[$s,Z_],imports:[mi,fa,Ul,Ul]});let i=t;return i})();function J_(i,t){if(i&1){let e=Ph();_e(0,"div",1)(1,"button",2),Ps("click",function(){mh(e);let r=zo();return gh(r.action())}),Ge(2),fe()()}if(i&2){let e=zo();an(2),Vo(" ",e.data.action," ")}}var Q_=["label"];function tb(i,t){}var eb=Math.pow(2,31)-1,Ys=class{constructor(t,e){this._overlayRef=e,this._afterDismissed=new ee,this._afterOpened=new ee,this._onAction=new ee,this._dismissedByAction=!1,this.containerInstance=t,t._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(t){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(t,eb))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},lp=new At("MatSnackBarData"),Nr=class{constructor(){this.politeness="assertive",this.announcementMessage="",this.duration=0,this.data=null,this.horizontalPosition="center",this.verticalPosition="bottom"}},nb=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275dir=we({type:t,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"],standalone:!0});let i=t;return i})(),ib=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275dir=we({type:t,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"],standalone:!0});let i=t;return i})(),rb=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275dir=we({type:t,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"],standalone:!0});let i=t;return i})(),dp=(()=>{let t=class t{constructor(n,r){this.snackBarRef=n,this.data=r}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}};t.\u0275fac=function(r){return new(r||t)(Ot(Ys),Ot(lp))},t.\u0275cmp=ve({type:t,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],standalone:!0,features:[qe],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["mat-button","","matSnackBarAction","",3,"click"]],template:function(r,s){r&1&&(_e(0,"div",0),Ge(1),fe(),Sr(2,J_,3,1,"div",1)),r&2&&(an(),Vo(" ",s.data.message,`
`),an(),Qc(2,s.hasAction?2:-1))},dependencies:[Zf,nb,ib,rb],styles:[".mat-mdc-simple-snack-bar{display:flex}"],encapsulation:2,changeDetection:0});let i=t;return i})(),sb={snackBarState:Jh("state",[rl("void, hidden",Zo({transform:"scale(0.8)",opacity:0})),rl("visible",Zo({transform:"scale(1)",opacity:1})),sl("* => visible",il("150ms cubic-bezier(0, 0, 0.2, 1)")),sl("* => void, * => hidden",il("75ms cubic-bezier(0.4, 0.0, 1, 1)",Zo({opacity:0})))])},ob=0,ab=(()=>{let t=class t extends Or{constructor(n,r,s,o,a){super(),this._ngZone=n,this._elementRef=r,this._changeDetectorRef=s,this._platform=o,this.snackBarConfig=a,this._document=st(It),this._trackedModals=new Set,this._announceDelay=150,this._destroyed=!1,this._onAnnounce=new ee,this._onExit=new ee,this._onEnter=new ee,this._animationState="void",this._liveElementId=`mat-snack-bar-container-live-${ob++}`,this.attachDomPortal=c=>{this._assertNotAttached();let l=this._portalOutlet.attachDomPortal(c);return this._afterPortalAttached(),l},a.politeness==="assertive"&&!a.announcementMessage?this._live="assertive":a.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(n){this._assertNotAttached();let r=this._portalOutlet.attachComponentPortal(n);return this._afterPortalAttached(),r}attachTemplatePortal(n){this._assertNotAttached();let r=this._portalOutlet.attachTemplatePortal(n);return this._afterPortalAttached(),r}onAnimationEnd(n){let{fromState:r,toState:s}=n;if((s==="void"&&r!=="void"||s==="hidden")&&this._completeExit(),s==="visible"){let o=this._onEnter;this._ngZone.run(()=>{o.next(),o.complete()})}}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce())}exit(){return this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId)}),this._onExit}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let n=this._elementRef.nativeElement,r=this.snackBarConfig.panelClass;r&&(Array.isArray(r)?r.forEach(a=>n.classList.add(a)):n.classList.add(r)),this._exposeToModals();let s=this._label.nativeElement,o="mdc-snackbar__label";s.classList.toggle(o,!s.querySelector(`.${o}`))}_exposeToModals(){let n=this._liveElementId,r=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let s=0;s<r.length;s++){let o=r[s],a=o.getAttribute("aria-owns");this._trackedModals.add(o),a?a.indexOf(n)===-1&&o.setAttribute("aria-owns",a+" "+n):o.setAttribute("aria-owns",n)}}_clearFromModals(){this._trackedModals.forEach(n=>{let r=n.getAttribute("aria-owns");if(r){let s=r.replace(this._liveElementId,"").trim();s.length>0?n.setAttribute("aria-owns",s):n.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{let n=this._elementRef.nativeElement.querySelector("[aria-hidden]"),r=this._elementRef.nativeElement.querySelector("[aria-live]");if(n&&r){let s=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&n.contains(document.activeElement)&&(s=document.activeElement),n.removeAttribute("aria-hidden"),r.appendChild(n),s?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}};t.\u0275fac=function(r){return new(r||t)(Ot(Ht),Ot(Se),Ot(Gi),Ot(be),Ot(Nr))},t.\u0275cmp=ve({type:t,selectors:[["mat-snack-bar-container"]],viewQuery:function(r,s){if(r&1&&(Ls(Fl,7),Ls(Q_,7)),r&2){let o;Er(o=Ar())&&(s._portalOutlet=o.first),Er(o=Ar())&&(s._label=o.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container","mdc-snackbar--open"],hostVars:1,hostBindings:function(r,s){r&1&&Oh("@state.done",function(a){return s.onAnimationEnd(a)}),r&2&&Lh("@state",s._animationState)},standalone:!0,features:[Hi,qe],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(r,s){r&1&&(_e(0,"div",1)(1,"div",2,0)(3,"div",3),Sr(4,tb,0,0,"ng-template",4),fe(),ke(5,"div"),fe()()),r&2&&(an(5),Pn("aria-live",s._live)("role",s._role)("id",s._liveElementId))},dependencies:[Fl],styles:['.mdc-snackbar{display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-snackbar--opening,.mdc-snackbar--open,.mdc-snackbar--closing{display:flex}.mdc-snackbar--open .mdc-snackbar__label,.mdc-snackbar--open .mdc-snackbar__actions{visibility:visible}.mdc-snackbar__surface{padding-left:0;padding-right:8px;display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(0.8);opacity:0}.mdc-snackbar__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-snackbar__surface::before{border-color:CanvasText}}[dir=rtl] .mdc-snackbar__surface,.mdc-snackbar__surface[dir=rtl]{padding-left:8px;padding-right:0}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1)}.mdc-snackbar__label{padding-left:16px;padding-right:8px;width:100%;flex-grow:1;box-sizing:border-box;margin:0;visibility:hidden;padding-top:14px;padding-bottom:14px}[dir=rtl] .mdc-snackbar__label,.mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar__label::before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box;visibility:hidden}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss,.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl]{margin-left:0;margin-right:8px}.mat-mdc-snack-bar-container{margin:8px;position:static}.mat-mdc-snack-bar-container .mdc-snackbar__surface{min-width:344px}@media(max-width: 480px),(max-width: 344px){.mat-mdc-snack-bar-container .mdc-snackbar__surface{min-width:100%}}@media(max-width: 480px),(max-width: 344px){.mat-mdc-snack-bar-container{width:100vw}}.mat-mdc-snack-bar-container .mdc-snackbar__surface{max-width:672px}.mat-mdc-snack-bar-container .mdc-snackbar__surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)}.mat-mdc-snack-bar-container .mdc-snackbar__surface{background-color:var(--mdc-snackbar-container-color)}.mat-mdc-snack-bar-container .mdc-snackbar__surface{border-radius:var(--mdc-snackbar-container-shape)}.mat-mdc-snack-bar-container .mdc-snackbar__label{color:var(--mdc-snackbar-supporting-text-color)}.mat-mdc-snack-bar-container .mdc-snackbar__label{font-size:var(--mdc-snackbar-supporting-text-size);font-family:var(--mdc-snackbar-supporting-text-font);font-weight:var(--mdc-snackbar-supporting-text-weight);line-height:var(--mdc-snackbar-supporting-text-line-height)}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){color:var(--mat-snack-bar-button-color);--mat-text-button-state-layer-color:currentColor;--mat-text-button-ripple-color:currentColor}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element{opacity:.1}.mat-mdc-snack-bar-container .mdc-snackbar__label::before{display:none}.mat-mdc-snack-bar-handset,.mat-mdc-snack-bar-container,.mat-mdc-snack-bar-label{flex:1 1 auto}.mat-mdc-snack-bar-handset .mdc-snackbar__surface{width:100%}'],encapsulation:2,data:{animation:[sb.snackBarState]}});let i=t;return i})();function cb(){return new Nr}var lb=new At("mat-snack-bar-default-options",{providedIn:"root",factory:cb}),db=(()=>{let t=class t{get _openedSnackBarRef(){let n=this._parentSnackBar;return n?n._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(n){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=n:this._snackBarRefAtThisLevel=n}constructor(n,r,s,o,a,c){this._overlay=n,this._live=r,this._injector=s,this._breakpointObserver=o,this._parentSnackBar=a,this._defaultConfig=c,this._snackBarRefAtThisLevel=null,this.simpleSnackBarComponent=dp,this.snackBarContainerComponent=ab,this.handsetCssClass="mat-mdc-snack-bar-handset"}openFromComponent(n,r){return this._attach(n,r)}openFromTemplate(n,r){return this._attach(n,r)}open(n,r="",s){let o=it(it({},this._defaultConfig),s);return o.data={message:n,action:r},o.announcementMessage===n&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(n,r){let s=r&&r.viewContainerRef&&r.viewContainerRef.injector,o=pn.create({parent:s||this._injector,providers:[{provide:Nr,useValue:r}]}),a=new Pr(this.snackBarContainerComponent,r.viewContainerRef,o),c=n.attach(a);return c.instance.snackBarConfig=r,c.instance}_attach(n,r){let s=it(it(it({},new Nr),this._defaultConfig),r),o=this._createOverlay(s),a=this._attachSnackBarContainer(o,s),c=new Ys(a,o);if(n instanceof Is){let l=new Lr(n,null,{$implicit:s.data,snackBarRef:c});c.instance=a.attachTemplatePortal(l)}else{let l=this._createInjector(s,c),d=new Pr(n,void 0,l),u=a.attachComponentPortal(d);c.instance=u.instance}return this._breakpointObserver.observe(Mf.HandsetPortrait).pipe(yn(o.detachments())).subscribe(l=>{o.overlayElement.classList.toggle(this.handsetCssClass,l.matches)}),s.announcementMessage&&a._onAnnounce.subscribe(()=>{this._live.announce(s.announcementMessage,s.politeness)}),this._animateSnackBar(c,s),this._openedSnackBarRef=c,this._openedSnackBarRef}_animateSnackBar(n,r){n.afterDismissed().subscribe(()=>{this._openedSnackBarRef==n&&(this._openedSnackBarRef=null),r.announcementMessage&&this._live.clear()}),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{n.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):n.containerInstance.enter(),r.duration&&r.duration>0&&n.afterOpened().subscribe(()=>n._dismissAfter(r.duration))}_createOverlay(n){let r=new Xs;r.direction=n.direction;let s=this._overlay.position().global(),o=n.direction==="rtl",a=n.horizontalPosition==="left"||n.horizontalPosition==="start"&&!o||n.horizontalPosition==="end"&&o,c=!a&&n.horizontalPosition!=="center";return a?s.left("0"):c?s.right("0"):s.centerHorizontally(),n.verticalPosition==="top"?s.top("0"):s.bottom("0"),r.positionStrategy=s,this._overlay.create(r)}_createInjector(n,r){let s=n&&n.viewContainerRef&&n.viewContainerRef.injector;return pn.create({parent:s||this._injector,providers:[{provide:Ys,useValue:r},{provide:lp,useValue:n.data}]})}};t.\u0275fac=function(r){return new(r||t)(H($s),H(Cf),H(pn),H(sa),H(t,12),H(lb))},t.\u0275prov=mt({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var $l=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=Zt({type:t}),t.\u0275inj=qt({providers:[db],imports:[cp,fa,Kf,Ke,dp,Ke]});let i=t;return i})();var ub=[Ll,Ol,$l],up=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=Zt({type:t}),t.\u0275inj=qt({imports:[ub,fi,Ll,Ol,$l]});let i=t;return i})();var lu="165";var hb=0,hp=1,fb=2;var Um=1,pb=2,ti=3,Ai=0,tn=1,ni=2,Mi=0,ns=1,fp=2,pp=3,mp=4,mb=5,rr=100,gb=101,vb=102,_b=103,bb=104,yb=200,xb=201,wb=202,Sb=203,Td=204,Cd=205,Mb=206,Eb=207,Ab=208,Tb=209,Cb=210,Rb=211,Ib=212,Db=213,Pb=214,Lb=0,Ob=1,Nb=2,za=3,Fb=4,kb=5,Ub=6,Bb=7,Bm=0,zb=1,Vb=2,Ei=0,Hb=1,Gb=2,Wb=3,jb=4,Xb=5,$b=6,Yb=7;var gp=300,os=301,as=302,Rd=303,Id=304,uc=306,Dd=1e3,or=1001,Pd=1002,_n=1003,qb=1004;var ma=1005;var En=1006,Yl=1007;var ar=1008;var Ti=1009,Zb=1010,Kb=1011,Va=1012,zm=1013,cs=1014,Si=1015,hc=1016,Vm=1017,Hm=1018,ls=1020,Jb=35902,Qb=1021,t0=1022,Fn=1023,e0=1024,n0=1025,is=1026,ds=1027,i0=1028,Gm=1029,r0=1030,Wm=1031,jm=1033,ql=33776,Zl=33777,Kl=33778,Jl=33779,vp=35840,_p=35841,bp=35842,yp=35843,xp=36196,wp=37492,Sp=37496,Mp=37808,Ep=37809,Ap=37810,Tp=37811,Cp=37812,Rp=37813,Ip=37814,Dp=37815,Pp=37816,Lp=37817,Op=37818,Np=37819,Fp=37820,kp=37821,Ql=36492,Up=36494,Bp=36495,s0=36283,zp=36284,Vp=36285,Hp=36286;var Ha=2300,Ld=2301,td=2302,Gp=2400,Wp=2401,jp=2402;var o0=3200,a0=3201,c0=0,l0=1,wi="",On="srgb",Ii="srgb-linear",du="display-p3",fc="display-p3-linear",Ga="linear",le="srgb",Wa="rec709",ja="p3";var Fr=7680;var Xp=519,d0=512,u0=513,h0=514,Xm=515,f0=516,p0=517,m0=518,g0=519,$p=35044;var Yp="300 es",ii=2e3,Xa=2001,Ci=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let r=this._listeners[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ed=Math.PI/180,Od=180/Math.PI;function so(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Be[i&255]+Be[i>>8&255]+Be[i>>16&255]+Be[i>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]).toLowerCase()}function Qe(i,t,e){return Math.max(t,Math.min(e,i))}function v0(i,t){return(i%t+t)%t}function nd(i,t,e){return(1-e)*i+e*t}function qs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Je(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ne=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ft=class i{constructor(t,e,n,r,s,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l)}set(t,e,n,r,s,o,a,c,l){let d=this.elements;return d[0]=t,d[1]=r,d[2]=a,d[3]=e,d[4]=s,d[5]=c,d[6]=n,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],d=n[4],u=n[7],h=n[2],m=n[5],g=n[8],v=r[0],p=r[3],f=r[6],E=r[1],x=r[4],S=r[7],O=r[2],R=r[5],A=r[8];return s[0]=o*v+a*E+c*O,s[3]=o*p+a*x+c*R,s[6]=o*f+a*S+c*A,s[1]=l*v+d*E+u*O,s[4]=l*p+d*x+u*R,s[7]=l*f+d*S+u*A,s[2]=h*v+m*E+g*O,s[5]=h*p+m*x+g*R,s[8]=h*f+m*S+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],d=t[8];return e*o*d-e*a*l-n*s*d+n*a*c+r*s*l-r*o*c}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],d=t[8],u=d*o-a*l,h=a*c-d*s,m=l*s-o*c,g=e*u+n*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=u*v,t[1]=(r*l-d*n)*v,t[2]=(a*n-r*o)*v,t[3]=h*v,t[4]=(d*e-r*c)*v,t[5]=(r*s-a*e)*v,t[6]=m*v,t[7]=(n*c-l*e)*v,t[8]=(o*e-n*s)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(id.makeScale(t,e)),this}rotate(t){return this.premultiply(id.makeRotation(-t)),this}translate(t,e){return this.premultiply(id.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},id=new Ft;function $m(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function no(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function _0(){let i=no("canvas");return i.style.display="block",i}var qp={};function Ym(i){i in qp||(qp[i]=!0,console.warn(i))}function b0(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var Zp=new Ft().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Kp=new Ft().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ga={[Ii]:{transfer:Ga,primaries:Wa,toReference:i=>i,fromReference:i=>i},[On]:{transfer:le,primaries:Wa,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[fc]:{transfer:Ga,primaries:ja,toReference:i=>i.applyMatrix3(Kp),fromReference:i=>i.applyMatrix3(Zp)},[du]:{transfer:le,primaries:ja,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Kp),fromReference:i=>i.applyMatrix3(Zp).convertLinearToSRGB()}},y0=new Set([Ii,fc]),se={enabled:!0,_workingColorSpace:Ii,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!y0.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=ga[t].toReference,r=ga[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return ga[i].primaries},getTransfer:function(i){return i===wi?Ga:ga[i].transfer}};function rs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function rd(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var kr,Nd=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{kr===void 0&&(kr=no("canvas")),kr.width=t.width,kr.height=t.height;let n=kr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=kr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=no("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=rs(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(rs(e[n]/255)*255):e[n]=rs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},x0=0,$a=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=so(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(sd(r[o].image)):s.push(sd(r[o]))}else s=sd(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function sd(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Nd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var w0=0,Di=(()=>{class i extends Ci{constructor(e=i.DEFAULT_IMAGE,n=i.DEFAULT_MAPPING,r=or,s=or,o=En,a=ar,c=Fn,l=Ti,d=i.DEFAULT_ANISOTROPY,u=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=so(),this.name="",this.source=new $a(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=d,this.format=c,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dd:e.x=e.x-Math.floor(e.x);break;case or:e.x=e.x<0?0:1;break;case Pd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dd:e.y=e.y-Math.floor(e.y);break;case or:e.y=e.y<0?0:1;break;case Pd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}return i.DEFAULT_IMAGE=null,i.DEFAULT_MAPPING=gp,i.DEFAULT_ANISOTROPY=1,i})(),Ue=class i{constructor(t=0,e=0,n=0,r=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,c=t.elements,l=c[0],d=c[4],u=c[8],h=c[1],m=c[5],g=c[9],v=c[2],p=c[6],f=c[10];if(Math.abs(d-h)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(l+1)/2,S=(m+1)/2,O=(f+1)/2,R=(d+h)/4,A=(u+v)/4,k=(g+p)/4;return x>S&&x>O?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=R/n,s=A/n):S>O?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=R/r,s=k/r):O<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(O),n=A/s,r=k/s),this.set(n,r,s,e),this}let E=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(h-d)*(h-d));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(u-v)/E,this.z=(h-d)/E,this.w=Math.acos((l+m+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fd=class extends Ci{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ue(0,0,t,e),this.scissorTest=!1,this.viewport=new Ue(0,0,t,e);let r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new Di(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new $a(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},si=class extends Fd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ya=class extends Di{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=_n,this.minFilter=_n,this.wrapR=or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var kd=class extends Di{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=_n,this.minFilter=_n,this.wrapR=or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ri=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let c=n[r+0],l=n[r+1],d=n[r+2],u=n[r+3],h=s[o+0],m=s[o+1],g=s[o+2],v=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=d,t[e+3]=u;return}if(a===1){t[e+0]=h,t[e+1]=m,t[e+2]=g,t[e+3]=v;return}if(u!==v||c!==h||l!==m||d!==g){let p=1-a,f=c*h+l*m+d*g+u*v,E=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){let O=Math.sqrt(x),R=Math.atan2(O,f*E);p=Math.sin(p*R)/O,a=Math.sin(a*R)/O}let S=a*E;if(c=c*p+h*S,l=l*p+m*S,d=d*p+g*S,u=u*p+v*S,p===1-a){let O=1/Math.sqrt(c*c+l*l+d*d+u*u);c*=O,l*=O,d*=O,u*=O}}t[e]=c,t[e+1]=l,t[e+2]=d,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,s,o){let a=n[r],c=n[r+1],l=n[r+2],d=n[r+3],u=s[o],h=s[o+1],m=s[o+2],g=s[o+3];return t[e]=a*g+d*u+c*m-l*h,t[e+1]=c*g+d*h+l*u-a*m,t[e+2]=l*g+d*m+a*h-c*u,t[e+3]=d*g-a*u-c*h-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),d=a(r/2),u=a(s/2),h=c(n/2),m=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=h*d*u+l*m*g,this._y=l*m*u-h*d*g,this._z=l*d*g+h*m*u,this._w=l*d*u-h*m*g;break;case"YXZ":this._x=h*d*u+l*m*g,this._y=l*m*u-h*d*g,this._z=l*d*g-h*m*u,this._w=l*d*u+h*m*g;break;case"ZXY":this._x=h*d*u-l*m*g,this._y=l*m*u+h*d*g,this._z=l*d*g+h*m*u,this._w=l*d*u-h*m*g;break;case"ZYX":this._x=h*d*u-l*m*g,this._y=l*m*u+h*d*g,this._z=l*d*g-h*m*u,this._w=l*d*u+h*m*g;break;case"YZX":this._x=h*d*u+l*m*g,this._y=l*m*u+h*d*g,this._z=l*d*g-h*m*u,this._w=l*d*u-h*m*g;break;case"XZY":this._x=h*d*u-l*m*g,this._y=l*m*u-h*d*g,this._z=l*d*g+h*m*u,this._w=l*d*u+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],d=e[6],u=e[10],h=n+a+u;if(h>0){let m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(d-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(n>a&&n>u){let m=2*Math.sqrt(1+n-a-u);this._w=(d-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>u){let m=2*Math.sqrt(1+a-n-u);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+d)/m}else{let m=2*Math.sqrt(1+u-n-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,d=e._w;return this._x=n*d+o*a+r*l-s*c,this._y=r*d+o*c+s*a-n*l,this._z=s*d+o*l+n*c-r*a,this._w=o*d-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}let l=Math.sqrt(c),d=Math.atan2(l,a),u=Math.sin((1-e)*d)/l,h=Math.sin(e*d)/l;return this._w=o*u+this._w*h,this._x=n*u+this._x*h,this._y=r*u+this._y*h,this._z=s*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jp.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*n),d=2*(a*e-s*r),u=2*(s*n-o*e);return this.x=e+c*l+o*u-a*d,this.y=n+c*d+a*l-s*u,this.z=r+c*u+s*d-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return od.copy(this).projectOnVector(t),this.sub(od)}reflect(t){return this.sub(od.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},od=new F,Jp=new Ri,cr=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,wn):wn.fromBufferAttribute(s,o),wn.applyMatrix4(t.matrixWorld),this.expandByPoint(wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),va.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),va.copy(n.boundingBox)),va.applyMatrix4(t.matrixWorld),this.union(va)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,wn),wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zs),_a.subVectors(this.max,Zs),Ur.subVectors(t.a,Zs),Br.subVectors(t.b,Zs),zr.subVectors(t.c,Zs),gi.subVectors(Br,Ur),vi.subVectors(zr,Br),Ki.subVectors(Ur,zr);let e=[0,-gi.z,gi.y,0,-vi.z,vi.y,0,-Ki.z,Ki.y,gi.z,0,-gi.x,vi.z,0,-vi.x,Ki.z,0,-Ki.x,-gi.y,gi.x,0,-vi.y,vi.x,0,-Ki.y,Ki.x,0];return!ad(e,Ur,Br,zr,_a)||(e=[1,0,0,0,1,0,0,0,1],!ad(e,Ur,Br,zr,_a))?!1:(ba.crossVectors(gi,vi),e=[ba.x,ba.y,ba.z],ad(e,Ur,Br,zr,_a))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},qn=[new F,new F,new F,new F,new F,new F,new F,new F],wn=new F,va=new cr,Ur=new F,Br=new F,zr=new F,gi=new F,vi=new F,Ki=new F,Zs=new F,_a=new F,ba=new F,Ji=new F;function ad(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Ji.fromArray(i,s);let a=r.x*Math.abs(Ji.x)+r.y*Math.abs(Ji.y)+r.z*Math.abs(Ji.z),c=t.dot(Ji),l=e.dot(Ji),d=n.dot(Ji);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}var S0=new cr,Ks=new F,cd=new F,us=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):S0.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ks.subVectors(t,this.center);let e=Ks.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Ks,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ks.copy(t.center).add(cd)),this.expandByPoint(Ks.copy(t.center).sub(cd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Zn=new F,ld=new F,ya=new F,_i=new F,dd=new F,xa=new F,ud=new F,qa=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Zn.copy(this.origin).addScaledVector(this.direction,e),Zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){ld.copy(t).add(e).multiplyScalar(.5),ya.copy(e).sub(t).normalize(),_i.copy(this.origin).sub(ld);let s=t.distanceTo(e)*.5,o=-this.direction.dot(ya),a=_i.dot(this.direction),c=-_i.dot(ya),l=_i.lengthSq(),d=Math.abs(1-o*o),u,h,m,g;if(d>0)if(u=o*c-a,h=o*a-c,g=s*d,u>=0)if(h>=-g)if(h<=g){let v=1/d;u*=v,h*=v,m=u*(u+o*h+2*a)+h*(o*u+h+2*c)+l}else h=s,u=Math.max(0,-(o*h+a)),m=-u*u+h*(h+2*c)+l;else h=-s,u=Math.max(0,-(o*h+a)),m=-u*u+h*(h+2*c)+l;else h<=-g?(u=Math.max(0,-(-o*s+a)),h=u>0?-s:Math.min(Math.max(-s,-c),s),m=-u*u+h*(h+2*c)+l):h<=g?(u=0,h=Math.min(Math.max(-s,-c),s),m=h*(h+2*c)+l):(u=Math.max(0,-(o*s+a)),h=u>0?s:Math.min(Math.max(-s,-c),s),m=-u*u+h*(h+2*c)+l);else h=o>0?-s:s,u=Math.max(0,-(o*h+a)),m=-u*u+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ld).addScaledVector(ya,h),m}intersectSphere(t,e){Zn.subVectors(t.center,this.origin);let n=Zn.dot(this.direction),r=Zn.dot(Zn)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,c,l=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,r=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,r=(t.min.x-h.x)*l),d>=0?(s=(t.min.y-h.y)*d,o=(t.max.y-h.y)*d):(s=(t.max.y-h.y)*d,o=(t.min.y-h.y)*d),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(t.min.z-h.z)*u,c=(t.max.z-h.z)*u):(a=(t.max.z-h.z)*u,c=(t.min.z-h.z)*u),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Zn)!==null}intersectTriangle(t,e,n,r,s){dd.subVectors(e,t),xa.subVectors(n,t),ud.crossVectors(dd,xa);let o=this.direction.dot(ud),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_i.subVectors(this.origin,t);let c=a*this.direction.dot(xa.crossVectors(_i,xa));if(c<0)return null;let l=a*this.direction.dot(dd.cross(_i));if(l<0||c+l>o)return null;let d=-a*_i.dot(ud);return d<0?null:this.at(d/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ie=class i{constructor(t,e,n,r,s,o,a,c,l,d,u,h,m,g,v,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l,d,u,h,m,g,v,p)}set(t,e,n,r,s,o,a,c,l,d,u,h,m,g,v,p){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=d,f[10]=u,f[14]=h,f[3]=m,f[7]=g,f[11]=v,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,r=1/Vr.setFromMatrixColumn(t,0).length(),s=1/Vr.setFromMatrixColumn(t,1).length(),o=1/Vr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),d=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let h=o*d,m=o*u,g=a*d,v=a*u;e[0]=c*d,e[4]=-c*u,e[8]=l,e[1]=m+g*l,e[5]=h-v*l,e[9]=-a*c,e[2]=v-h*l,e[6]=g+m*l,e[10]=o*c}else if(t.order==="YXZ"){let h=c*d,m=c*u,g=l*d,v=l*u;e[0]=h+v*a,e[4]=g*a-m,e[8]=o*l,e[1]=o*u,e[5]=o*d,e[9]=-a,e[2]=m*a-g,e[6]=v+h*a,e[10]=o*c}else if(t.order==="ZXY"){let h=c*d,m=c*u,g=l*d,v=l*u;e[0]=h-v*a,e[4]=-o*u,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*d,e[9]=v-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let h=o*d,m=o*u,g=a*d,v=a*u;e[0]=c*d,e[4]=g*l-m,e[8]=h*l+v,e[1]=c*u,e[5]=v*l+h,e[9]=m*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let h=o*c,m=o*l,g=a*c,v=a*l;e[0]=c*d,e[4]=v-h*u,e[8]=g*u+m,e[1]=u,e[5]=o*d,e[9]=-a*d,e[2]=-l*d,e[6]=m*u+g,e[10]=h-v*u}else if(t.order==="XZY"){let h=o*c,m=o*l,g=a*c,v=a*l;e[0]=c*d,e[4]=-u,e[8]=l*d,e[1]=h*u+v,e[5]=o*d,e[9]=m*u-g,e[2]=g*u-m,e[6]=a*d,e[10]=v*u+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(M0,t,E0)}lookAt(t,e,n){let r=this.elements;return ln.subVectors(t,e),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),bi.crossVectors(n,ln),bi.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),bi.crossVectors(n,ln)),bi.normalize(),wa.crossVectors(ln,bi),r[0]=bi.x,r[4]=wa.x,r[8]=ln.x,r[1]=bi.y,r[5]=wa.y,r[9]=ln.y,r[2]=bi.z,r[6]=wa.z,r[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],d=n[1],u=n[5],h=n[9],m=n[13],g=n[2],v=n[6],p=n[10],f=n[14],E=n[3],x=n[7],S=n[11],O=n[15],R=r[0],A=r[4],k=r[8],w=r[12],y=r[1],I=r[5],W=r[9],B=r[13],Y=r[2],$=r[6],j=r[10],Z=r[14],z=r[3],ht=r[7],gt=r[11],bt=r[15];return s[0]=o*R+a*y+c*Y+l*z,s[4]=o*A+a*I+c*$+l*ht,s[8]=o*k+a*W+c*j+l*gt,s[12]=o*w+a*B+c*Z+l*bt,s[1]=d*R+u*y+h*Y+m*z,s[5]=d*A+u*I+h*$+m*ht,s[9]=d*k+u*W+h*j+m*gt,s[13]=d*w+u*B+h*Z+m*bt,s[2]=g*R+v*y+p*Y+f*z,s[6]=g*A+v*I+p*$+f*ht,s[10]=g*k+v*W+p*j+f*gt,s[14]=g*w+v*B+p*Z+f*bt,s[3]=E*R+x*y+S*Y+O*z,s[7]=E*A+x*I+S*$+O*ht,s[11]=E*k+x*W+S*j+O*gt,s[15]=E*w+x*B+S*Z+O*bt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],d=t[2],u=t[6],h=t[10],m=t[14],g=t[3],v=t[7],p=t[11],f=t[15];return g*(+s*c*u-r*l*u-s*a*h+n*l*h+r*a*m-n*c*m)+v*(+e*c*m-e*l*h+s*o*h-r*o*m+r*l*d-s*c*d)+p*(+e*l*u-e*a*m-s*o*u+n*o*m+s*a*d-n*l*d)+f*(-r*a*d-e*c*u+e*a*h+r*o*u-n*o*h+n*c*d)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],d=t[8],u=t[9],h=t[10],m=t[11],g=t[12],v=t[13],p=t[14],f=t[15],E=u*p*l-v*h*l+v*c*m-a*p*m-u*c*f+a*h*f,x=g*h*l-d*p*l-g*c*m+o*p*m+d*c*f-o*h*f,S=d*v*l-g*u*l+g*a*m-o*v*m-d*a*f+o*u*f,O=g*u*c-d*v*c-g*a*h+o*v*h+d*a*p-o*u*p,R=e*E+n*x+r*S+s*O;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/R;return t[0]=E*A,t[1]=(v*h*s-u*p*s-v*r*m+n*p*m+u*r*f-n*h*f)*A,t[2]=(a*p*s-v*c*s+v*r*l-n*p*l-a*r*f+n*c*f)*A,t[3]=(u*c*s-a*h*s-u*r*l+n*h*l+a*r*m-n*c*m)*A,t[4]=x*A,t[5]=(d*p*s-g*h*s+g*r*m-e*p*m-d*r*f+e*h*f)*A,t[6]=(g*c*s-o*p*s-g*r*l+e*p*l+o*r*f-e*c*f)*A,t[7]=(o*h*s-d*c*s+d*r*l-e*h*l-o*r*m+e*c*m)*A,t[8]=S*A,t[9]=(g*u*s-d*v*s-g*n*m+e*v*m+d*n*f-e*u*f)*A,t[10]=(o*v*s-g*a*s+g*n*l-e*v*l-o*n*f+e*a*f)*A,t[11]=(d*a*s-o*u*s-d*n*l+e*u*l+o*n*m-e*a*m)*A,t[12]=O*A,t[13]=(d*v*r-g*u*r+g*n*h-e*v*h-d*n*p+e*u*p)*A,t[14]=(g*a*r-o*v*r-g*n*c+e*v*c+o*n*p-e*a*p)*A,t[15]=(o*u*r-d*a*r+d*n*c-e*u*c-o*n*h+e*a*h)*A,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,d=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,d*a+n,d*c-r*o,0,l*c-r*a,d*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,d=o+o,u=a+a,h=s*l,m=s*d,g=s*u,v=o*d,p=o*u,f=a*u,E=c*l,x=c*d,S=c*u,O=n.x,R=n.y,A=n.z;return r[0]=(1-(v+f))*O,r[1]=(m+S)*O,r[2]=(g-x)*O,r[3]=0,r[4]=(m-S)*R,r[5]=(1-(h+f))*R,r[6]=(p+E)*R,r[7]=0,r[8]=(g+x)*A,r[9]=(p-E)*A,r[10]=(1-(h+v))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements,s=Vr.set(r[0],r[1],r[2]).length(),o=Vr.set(r[4],r[5],r[6]).length(),a=Vr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Sn.copy(this);let l=1/s,d=1/o,u=1/a;return Sn.elements[0]*=l,Sn.elements[1]*=l,Sn.elements[2]*=l,Sn.elements[4]*=d,Sn.elements[5]*=d,Sn.elements[6]*=d,Sn.elements[8]*=u,Sn.elements[9]*=u,Sn.elements[10]*=u,e.setFromRotationMatrix(Sn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=ii){let c=this.elements,l=2*s/(e-t),d=2*s/(n-r),u=(e+t)/(e-t),h=(n+r)/(n-r),m,g;if(a===ii)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Xa)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=ii){let c=this.elements,l=1/(e-t),d=1/(n-r),u=1/(o-s),h=(e+t)*l,m=(n+r)*d,g,v;if(a===ii)g=(o+s)*u,v=-2*u;else if(a===Xa)g=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Vr=new F,Sn=new Ie,M0=new F(0,0,0),E0=new F(1,1,1),bi=new F,wa=new F,ln=new F,Qp=new Ie,tm=new Ri,hs=(()=>{class i{constructor(e=0,n=0,r=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,s=this._order){return this._x=e,this._y=n,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){let s=e.elements,o=s[0],a=s[4],c=s[8],l=s[1],d=s[5],u=s[9],h=s[2],m=s[6],g=s[10];switch(n){case"XYZ":this._y=Math.asin(Qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(m,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,d)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-a,d)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,d));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,d),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,d),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Qp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return tm.setFromEuler(this),this.setFromQuaternion(tm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return i.DEFAULT_ORDER="XYZ",i})(),Za=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},A0=0,em=new F,Hr=new Ri,Kn=new Ie,Sa=new F,Js=new F,T0=new F,C0=new Ri,nm=new F(1,0,0),im=new F(0,1,0),rm=new F(0,0,1),sm={type:"added"},R0={type:"removed"},Gr={type:"childadded",child:null},hd={type:"childremoved",child:null},hr=(()=>{class i extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=so(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,n=new hs,r=new Ri,s=new F(1,1,1);function o(){r.setFromEuler(n,!1)}function a(){n.setFromQuaternion(r,void 0,!1)}n._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ie},normalMatrix:{value:new Ft}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Za,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Hr.setFromAxisAngle(e,n),this.quaternion.multiply(Hr),this}rotateOnWorldAxis(e,n){return Hr.setFromAxisAngle(e,n),this.quaternion.premultiply(Hr),this}rotateX(e){return this.rotateOnAxis(nm,e)}rotateY(e){return this.rotateOnAxis(im,e)}rotateZ(e){return this.rotateOnAxis(rm,e)}translateOnAxis(e,n){return em.copy(e).applyQuaternion(this.quaternion),this.position.add(em.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(nm,e)}translateY(e){return this.translateOnAxis(im,e)}translateZ(e){return this.translateOnAxis(rm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Sa.copy(e):Sa.set(e,n,r);let s=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(Js,Sa,this.up):Kn.lookAt(Sa,Js,this.up),this.quaternion.setFromRotationMatrix(Kn),s&&(Kn.extractRotation(s.matrixWorld),Hr.setFromRotationMatrix(Kn),this.quaternion.premultiply(Hr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sm),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(R0),hd.child=e,this.dispatchEvent(hd),hd.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sm),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,e,T0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,C0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let r=0,s=n.length;r<s;r++){let o=n[r];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){let r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++){let c=s[o];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){let n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let d=0,u=l.length;d<u;d++){let h=l[d];o(e.shapes,h)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,d=this.material.length;l<d;l++)c.push(o(e.materials,this.material[l]));s.material=c}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(e.animations,l))}}if(n){let c=a(e.geometries),l=a(e.materials),d=a(e.textures),u=a(e.images),h=a(e.shapes),m=a(e.skeletons),g=a(e.animations),v=a(e.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),d.length>0&&(r.textures=d),u.length>0&&(r.images=u),h.length>0&&(r.shapes=h),m.length>0&&(r.skeletons=m),g.length>0&&(r.animations=g),v.length>0&&(r.nodes=v)}return r.object=s,r;function a(c){let l=[];for(let d in c){let u=c[d];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){let s=e.children[r];this.add(s.clone())}return this}}return i.DEFAULT_UP=new F(0,1,0),i.DEFAULT_MATRIX_AUTO_UPDATE=!0,i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,i})(),Mn=new F,Jn=new F,fd=new F,Qn=new F,Wr=new F,jr=new F,om=new F,pd=new F,md=new F,gd=new F,Qr=class i{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Mn.subVectors(t,e),r.cross(Mn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Mn.subVectors(r,e),Jn.subVectors(n,e),fd.subVectors(t,e);let o=Mn.dot(Mn),a=Mn.dot(Jn),c=Mn.dot(fd),l=Jn.dot(Jn),d=Jn.dot(fd),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;let h=1/u,m=(l*c-a*d)*h,g=(o*d-a*c)*h;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(t,e,n,r,s,o,a,c){return this.getBarycoord(t,e,n,r,Qn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Qn.x),c.addScaledVector(o,Qn.y),c.addScaledVector(a,Qn.z),c)}static isFrontFacing(t,e,n,r){return Mn.subVectors(n,e),Jn.subVectors(t,e),Mn.cross(Jn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Mn.cross(Jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,a;Wr.subVectors(r,n),jr.subVectors(s,n),pd.subVectors(t,n);let c=Wr.dot(pd),l=jr.dot(pd);if(c<=0&&l<=0)return e.copy(n);md.subVectors(t,r);let d=Wr.dot(md),u=jr.dot(md);if(d>=0&&u<=d)return e.copy(r);let h=c*u-d*l;if(h<=0&&c>=0&&d<=0)return o=c/(c-d),e.copy(n).addScaledVector(Wr,o);gd.subVectors(t,s);let m=Wr.dot(gd),g=jr.dot(gd);if(g>=0&&m<=g)return e.copy(s);let v=m*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(jr,a);let p=d*g-m*u;if(p<=0&&u-d>=0&&m-g>=0)return om.subVectors(s,r),a=(u-d)/(u-d+(m-g)),e.copy(r).addScaledVector(om,a);let f=1/(p+v+h);return o=v*f,a=h*f,e.copy(n).addScaledVector(Wr,o).addScaledVector(jr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},qm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},Ma={h:0,s:0,l:0};function vd(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=On){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=se.workingColorSpace){if(t=v0(t,1),e=Qe(e,0,1),n=Qe(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=vd(o,s,t+1/3),this.g=vd(o,s,t),this.b=vd(o,s,t-1/3)}return se.toWorkingColorSpace(this,r),this}setStyle(t,e=On){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=On){let n=qm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=rs(t.r),this.g=rs(t.g),this.b=rs(t.b),this}copyLinearToSRGB(t){return this.r=rd(t.r),this.g=rd(t.g),this.b=rd(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=On){return se.fromWorkingColorSpace(ze.copy(this),t),Math.round(Qe(ze.r*255,0,255))*65536+Math.round(Qe(ze.g*255,0,255))*256+Math.round(Qe(ze.b*255,0,255))}getHexString(t=On){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.fromWorkingColorSpace(ze.copy(this),e);let n=ze.r,r=ze.g,s=ze.b,o=Math.max(n,r,s),a=Math.min(n,r,s),c,l,d=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=d<=.5?u/(o+a):u/(2-o-a),o){case n:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-n)/u+2;break;case s:c=(n-r)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=d,t}getRGB(t,e=se.workingColorSpace){return se.fromWorkingColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=On){se.fromWorkingColorSpace(ze.copy(this),t);let e=ze.r,n=ze.g,r=ze.b;return t!==On?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(yi),this.setHSL(yi.h+t,yi.s+e,yi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(yi),t.getHSL(Ma);let n=nd(yi.h,Ma.h,e),r=nd(yi.s,Ma.s,e),s=nd(yi.l,Ma.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ze=new Qt;Qt.NAMES=qm;var I0=0,lr=class extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=so(),this.name="",this.type="Material",this.blending=ns,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Td,this.blendDst=Cd,this.blendEquation=rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=za,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fr,this.stencilZFail=Fr,this.stencilZPass=Fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ns&&(n.blending=this.blending),this.side!==Ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Td&&(n.blendSrc=this.blendSrc),this.blendDst!==Cd&&(n.blendDst=this.blendDst),this.blendEquation!==rr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==za&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xp&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ka=class extends lr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hs,this.combine=Bm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ce=new F,Ea=new ne,en=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=$p,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Ym("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ea.fromBufferAttribute(this,e),Ea.applyMatrix3(t),this.setXY(e,Ea.x,Ea.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=qs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Je(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array),r=Je(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array),r=Je(r,this.array),s=Je(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$p&&(t.usage=this.usage),t}};var Ja=class extends en{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Qa=class extends en{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ri=class extends en{constructor(t,e,n){super(new Float32Array(t),e,n)}},D0=0,vn=new Ie,_d=new hr,Xr=new F,dn=new cr,Qs=new cr,Ne=new F,kn=class i extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=so(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($m(t)?Qa:Ja)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ft().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vn.makeRotationFromQuaternion(t),this.applyMatrix4(vn),this}rotateX(t){return vn.makeRotationX(t),this.applyMatrix4(vn),this}rotateY(t){return vn.makeRotationY(t),this.applyMatrix4(vn),this}rotateZ(t){return vn.makeRotationZ(t),this.applyMatrix4(vn),this}translate(t,e,n){return vn.makeTranslation(t,e,n),this.applyMatrix4(vn),this}scale(t,e,n){return vn.makeScale(t,e,n),this.applyMatrix4(vn),this}lookAt(t){return _d.lookAt(t),_d.updateMatrix(),this.applyMatrix4(_d.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xr).negate(),this.translate(Xr.x,Xr.y,Xr.z),this}setFromPoints(t){let e=[];for(let n=0,r=t.length;n<r;n++){let s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ri(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new us);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let n=this.boundingSphere.center;if(dn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];Qs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ne.addVectors(dn.min,Qs.min),dn.expandByPoint(Ne),Ne.addVectors(dn.max,Qs.max),dn.expandByPoint(Ne)):(dn.expandByPoint(Qs.min),dn.expandByPoint(Qs.max))}dn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)Ne.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Ne));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],c=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)Ne.fromBufferAttribute(a,l),c&&(Xr.fromBufferAttribute(t,l),Ne.add(Xr)),r=Math.max(r,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let k=0;k<n.count;k++)a[k]=new F,c[k]=new F;let l=new F,d=new F,u=new F,h=new ne,m=new ne,g=new ne,v=new F,p=new F;function f(k,w,y){l.fromBufferAttribute(n,k),d.fromBufferAttribute(n,w),u.fromBufferAttribute(n,y),h.fromBufferAttribute(s,k),m.fromBufferAttribute(s,w),g.fromBufferAttribute(s,y),d.sub(l),u.sub(l),m.sub(h),g.sub(h);let I=1/(m.x*g.y-g.x*m.y);isFinite(I)&&(v.copy(d).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(I),p.copy(u).multiplyScalar(m.x).addScaledVector(d,-g.x).multiplyScalar(I),a[k].add(v),a[w].add(v),a[y].add(v),c[k].add(p),c[w].add(p),c[y].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let k=0,w=E.length;k<w;++k){let y=E[k],I=y.start,W=y.count;for(let B=I,Y=I+W;B<Y;B+=3)f(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let x=new F,S=new F,O=new F,R=new F;function A(k){O.fromBufferAttribute(r,k),R.copy(O);let w=a[k];x.copy(w),x.sub(O.multiplyScalar(O.dot(w))).normalize(),S.crossVectors(R,w);let I=S.dot(c[k])<0?-1:1;o.setXYZW(k,x.x,x.y,x.z,I)}for(let k=0,w=E.length;k<w;++k){let y=E[k],I=y.start,W=y.count;for(let B=I,Y=I+W;B<Y;B+=3)A(t.getX(B+0)),A(t.getX(B+1)),A(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new en(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);let r=new F,s=new F,o=new F,a=new F,c=new F,l=new F,d=new F,u=new F;if(t)for(let h=0,m=t.count;h<m;h+=3){let g=t.getX(h+0),v=t.getX(h+1),p=t.getX(h+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),o.fromBufferAttribute(e,p),d.subVectors(o,s),u.subVectors(r,s),d.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,p),a.add(d),c.add(d),l.add(d),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,m=e.count;h<m;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),d.subVectors(o,s),u.subVectors(r,s),d.cross(u),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(a,c){let l=a.array,d=a.itemSize,u=a.normalized,h=new l.constructor(c.length*d),m=0,g=0;for(let v=0,p=c.length;v<p;v++){a.isInterleavedBufferAttribute?m=c[v]*a.data.stride+a.offset:m=c[v]*d;for(let f=0;f<d;f++)h[g++]=l[m++]}return new en(h,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=t(c,n);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let d=0,u=l.length;d<u;d++){let h=l[d],m=t(h,n);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],d=[];for(let u=0,h=l.length;u<h;u++){let m=l[u];d.push(m.toJSON(t.data))}d.length>0&&(r[c]=d,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let r=t.attributes;for(let l in r){let d=r[l];this.setAttribute(l,d.clone(e))}let s=t.morphAttributes;for(let l in s){let d=[],u=s[l];for(let h=0,m=u.length;h<m;h++)d.push(u[h].clone(e));this.morphAttributes[l]=d}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,d=o.length;l<d;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},am=new Ie,Qi=new qa,Aa=new us,cm=new F,$r=new F,Yr=new F,qr=new F,bd=new F,Ta=new F,Ca=new ne,Ra=new ne,Ia=new ne,lm=new F,dm=new F,um=new F,Da=new F,Pa=new F,An=class extends hr{constructor(t=new kn,e=new Ka){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){Ta.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let d=a[c],u=s[c];d!==0&&(bd.fromBufferAttribute(u,t),o?Ta.addScaledVector(bd,d):Ta.addScaledVector(bd.sub(e),d))}e.add(Ta)}return e}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(s),Qi.copy(t.ray).recast(t.near),!(Aa.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(Aa,cm)===null||Qi.origin.distanceToSquared(cm)>(t.far-t.near)**2))&&(am.copy(s).invert(),Qi.copy(t.ray).applyMatrix4(am),!(n.boundingBox!==null&&Qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Qi)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,d=s.attributes.uv1,u=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){let p=h[g],f=o[p.materialIndex],E=Math.max(p.start,m.start),x=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let S=E,O=x;S<O;S+=3){let R=a.getX(S),A=a.getX(S+1),k=a.getX(S+2);r=La(this,f,t,n,l,d,u,R,A,k),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{let g=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){let E=a.getX(p),x=a.getX(p+1),S=a.getX(p+2);r=La(this,o,t,n,l,d,u,E,x,S),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){let p=h[g],f=o[p.materialIndex],E=Math.max(p.start,m.start),x=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let S=E,O=x;S<O;S+=3){let R=S,A=S+1,k=S+2;r=La(this,f,t,n,l,d,u,R,A,k),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{let g=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){let E=p,x=p+1,S=p+2;r=La(this,o,t,n,l,d,u,E,x,S),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}};function P0(i,t,e,n,r,s,o,a){let c;if(t.side===tn?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,t.side===Ai,a),c===null)return null;Pa.copy(a),Pa.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Pa);return l<e.near||l>e.far?null:{distance:l,point:Pa.clone(),object:i}}function La(i,t,e,n,r,s,o,a,c,l){i.getVertexPosition(a,$r),i.getVertexPosition(c,Yr),i.getVertexPosition(l,qr);let d=P0(i,t,e,n,$r,Yr,qr,Da);if(d){r&&(Ca.fromBufferAttribute(r,a),Ra.fromBufferAttribute(r,c),Ia.fromBufferAttribute(r,l),d.uv=Qr.getInterpolation(Da,$r,Yr,qr,Ca,Ra,Ia,new ne)),s&&(Ca.fromBufferAttribute(s,a),Ra.fromBufferAttribute(s,c),Ia.fromBufferAttribute(s,l),d.uv1=Qr.getInterpolation(Da,$r,Yr,qr,Ca,Ra,Ia,new ne)),o&&(lm.fromBufferAttribute(o,a),dm.fromBufferAttribute(o,c),um.fromBufferAttribute(o,l),d.normal=Qr.getInterpolation(Da,$r,Yr,qr,lm,dm,um,new F),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new F,materialIndex:0};Qr.getNormal($r,Yr,qr,u.normal),d.face=u}return d}var io=class i extends kn{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],d=[],u=[],h=0,m=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,r,o,2),g("x","z","y",1,-1,t,n,-e,r,o,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new ri(l,3)),this.setAttribute("normal",new ri(d,3)),this.setAttribute("uv",new ri(u,2));function g(v,p,f,E,x,S,O,R,A,k,w){let y=S/A,I=O/k,W=S/2,B=O/2,Y=R/2,$=A+1,j=k+1,Z=0,z=0,ht=new F;for(let gt=0;gt<j;gt++){let bt=gt*I-B;for(let Xt=0;Xt<$;Xt++){let oe=Xt*y-W;ht[v]=oe*E,ht[p]=bt*x,ht[f]=Y,l.push(ht.x,ht.y,ht.z),ht[v]=0,ht[p]=0,ht[f]=R>0?1:-1,d.push(ht.x,ht.y,ht.z),u.push(Xt/A),u.push(1-gt/k),Z+=1}}for(let gt=0;gt<k;gt++)for(let bt=0;bt<A;bt++){let Xt=h+bt+$*gt,oe=h+bt+$*(gt+1),G=h+(bt+1)+$*(gt+1),Q=h+(bt+1)+$*gt;c.push(Xt,oe,Q),c.push(oe,G,Q),z+=6}a.addGroup(m,z,w),m+=z,h+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function fs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function We(i){let t={};for(let e=0;e<i.length;e++){let n=fs(i[e]);for(let r in n)t[r]=n[r]}return t}function L0(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Zm(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}var O0={clone:fs,merge:We},N0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,F0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Un=class extends lr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=N0,this.fragmentShader=F0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fs(t.uniforms),this.uniformsGroups=L0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},tc=class extends hr{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=ii}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},xi=new F,hm=new ne,fm=new ne,je=class extends tc{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Od*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ed*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Od*2*Math.atan(Math.tan(ed*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(xi.x,xi.y).multiplyScalar(-t/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-t/xi.z)}getViewSize(t,e){return this.getViewBounds(t,hm,fm),e.subVectors(fm,hm)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ed*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Zr=-90,Kr=1,Ud=class extends hr{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new je(Zr,Kr,t,e);r.layers=this.layers,this.add(r);let s=new je(Zr,Kr,t,e);s.layers=this.layers,this.add(s);let o=new je(Zr,Kr,t,e);o.layers=this.layers,this.add(o);let a=new je(Zr,Kr,t,e);a.layers=this.layers,this.add(a);let c=new je(Zr,Kr,t,e);c.layers=this.layers,this.add(c);let l=new je(Zr,Kr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,c]=e;for(let l of e)this.remove(l);if(t===ii)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Xa)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,d]=this.children,u=t.getRenderTarget(),h=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,r),t.render(e,d),t.setRenderTarget(u,h,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ec=class extends Di{constructor(t,e,n,r,s,o,a,c,l,d){t=t!==void 0?t:[],e=e!==void 0?e:os,super(t,e,n,r,s,o,a,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Bd=class extends si{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new ec(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:En}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new io(5,5,5),s=new Un({name:"CubemapFromEquirect",uniforms:fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:Mi});s.uniforms.tEquirect.value=e;let o=new An(r,s),a=e.minFilter;return e.minFilter===ar&&(e.minFilter=En),new Ud(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}},yd=new F,k0=new F,U0=new Ft,ei=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=yd.subVectors(n,e).cross(k0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(yd),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||U0.getNormalMatrix(t),r=this.coplanarPoint(yd).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},tr=new us,Oa=new F,nc=class{constructor(t=new ei,e=new ei,n=new ei,r=new ei,s=new ei,o=new ei){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ii){let n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],d=r[5],u=r[6],h=r[7],m=r[8],g=r[9],v=r[10],p=r[11],f=r[12],E=r[13],x=r[14],S=r[15];if(n[0].setComponents(c-s,h-l,p-m,S-f).normalize(),n[1].setComponents(c+s,h+l,p+m,S+f).normalize(),n[2].setComponents(c+o,h+d,p+g,S+E).normalize(),n[3].setComponents(c-o,h-d,p-g,S-E).normalize(),n[4].setComponents(c-a,h-u,p-v,S-x).normalize(),e===ii)n[5].setComponents(c+a,h+u,p+v,S+x).normalize();else if(e===Xa)n[5].setComponents(a,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),tr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),tr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(tr)}intersectsSprite(t){return tr.center.set(0,0,0),tr.radius=.7071067811865476,tr.applyMatrix4(t.matrixWorld),this.intersectsSphere(tr)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(Oa.x=r.normal.x>0?t.max.x:t.min.x,Oa.y=r.normal.y>0?t.max.y:t.min.y,Oa.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Oa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Km(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function B0(i){let t=new WeakMap;function e(a,c){let l=a.array,d=a.usage,u=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,d),a.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let d=c.array,u=c._updateRange,h=c.updateRanges;if(i.bindBuffer(l,a),u.count===-1&&h.length===0&&i.bufferSubData(l,0,d),h.length!==0){for(let m=0,g=h.length;m<g;m++){let v=h[m];i.bufferSubData(l,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}c.clearUpdateRanges()}u.count!==-1&&(i.bufferSubData(l,u.offset*d.BYTES_PER_ELEMENT,d,u.offset,u.count),u.count=-1),c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isGLBufferAttribute){let d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var ic=class i extends kn{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(r),l=a+1,d=c+1,u=t/a,h=e/c,m=[],g=[],v=[],p=[];for(let f=0;f<d;f++){let E=f*h-o;for(let x=0;x<l;x++){let S=x*u-s;g.push(S,-E,0),v.push(0,0,1),p.push(x/a),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let E=0;E<a;E++){let x=E+l*f,S=E+l*(f+1),O=E+1+l*(f+1),R=E+1+l*f;m.push(x,S,R),m.push(S,O,R)}this.setIndex(m),this.setAttribute("position",new ri(g,3)),this.setAttribute("normal",new ri(v,3)),this.setAttribute("uv",new ri(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},z0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,V0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,H0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,G0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,W0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,j0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,X0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Y0=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,q0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Z0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,K0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,J0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Q0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ty=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ey=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ny=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ry=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,oy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ay=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,ly=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,uy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,py=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,my=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gy="gl_FragColor = linearToOutputTexel( gl_FragColor );",vy=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,_y=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,by=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Sy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,My=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ey=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ay=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ty=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ry=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Iy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Py=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ly=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Oy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ny=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ky=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Uy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,By=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Vy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$y=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ky=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ex=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,nx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ix=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,rx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ax=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,lx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ux=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,px=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,mx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_x=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,wx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Sx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Mx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ex=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ax=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Tx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Rx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ix=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Px=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ox=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ux=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Bx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Xx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,$x=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Yx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ew=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ow=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,aw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,pw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_w=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Nt={alphahash_fragment:z0,alphahash_pars_fragment:V0,alphamap_fragment:H0,alphamap_pars_fragment:G0,alphatest_fragment:W0,alphatest_pars_fragment:j0,aomap_fragment:X0,aomap_pars_fragment:$0,batching_pars_vertex:Y0,batching_vertex:q0,begin_vertex:Z0,beginnormal_vertex:K0,bsdfs:J0,iridescence_fragment:Q0,bumpmap_pars_fragment:ty,clipping_planes_fragment:ey,clipping_planes_pars_fragment:ny,clipping_planes_pars_vertex:iy,clipping_planes_vertex:ry,color_fragment:sy,color_pars_fragment:oy,color_pars_vertex:ay,color_vertex:cy,common:ly,cube_uv_reflection_fragment:dy,defaultnormal_vertex:uy,displacementmap_pars_vertex:hy,displacementmap_vertex:fy,emissivemap_fragment:py,emissivemap_pars_fragment:my,colorspace_fragment:gy,colorspace_pars_fragment:vy,envmap_fragment:_y,envmap_common_pars_fragment:by,envmap_pars_fragment:yy,envmap_pars_vertex:xy,envmap_physical_pars_fragment:Py,envmap_vertex:wy,fog_vertex:Sy,fog_pars_vertex:My,fog_fragment:Ey,fog_pars_fragment:Ay,gradientmap_pars_fragment:Ty,lightmap_pars_fragment:Cy,lights_lambert_fragment:Ry,lights_lambert_pars_fragment:Iy,lights_pars_begin:Dy,lights_toon_fragment:Ly,lights_toon_pars_fragment:Oy,lights_phong_fragment:Ny,lights_phong_pars_fragment:Fy,lights_physical_fragment:ky,lights_physical_pars_fragment:Uy,lights_fragment_begin:By,lights_fragment_maps:zy,lights_fragment_end:Vy,logdepthbuf_fragment:Hy,logdepthbuf_pars_fragment:Gy,logdepthbuf_pars_vertex:Wy,logdepthbuf_vertex:jy,map_fragment:Xy,map_pars_fragment:$y,map_particle_fragment:Yy,map_particle_pars_fragment:qy,metalnessmap_fragment:Zy,metalnessmap_pars_fragment:Ky,morphinstance_vertex:Jy,morphcolor_vertex:Qy,morphnormal_vertex:tx,morphtarget_pars_vertex:ex,morphtarget_vertex:nx,normal_fragment_begin:ix,normal_fragment_maps:rx,normal_pars_fragment:sx,normal_pars_vertex:ox,normal_vertex:ax,normalmap_pars_fragment:cx,clearcoat_normal_fragment_begin:lx,clearcoat_normal_fragment_maps:dx,clearcoat_pars_fragment:ux,iridescence_pars_fragment:hx,opaque_fragment:fx,packing:px,premultiplied_alpha_fragment:mx,project_vertex:gx,dithering_fragment:vx,dithering_pars_fragment:_x,roughnessmap_fragment:bx,roughnessmap_pars_fragment:yx,shadowmap_pars_fragment:xx,shadowmap_pars_vertex:wx,shadowmap_vertex:Sx,shadowmask_pars_fragment:Mx,skinbase_vertex:Ex,skinning_pars_vertex:Ax,skinning_vertex:Tx,skinnormal_vertex:Cx,specularmap_fragment:Rx,specularmap_pars_fragment:Ix,tonemapping_fragment:Dx,tonemapping_pars_fragment:Px,transmission_fragment:Lx,transmission_pars_fragment:Ox,uv_pars_fragment:Nx,uv_pars_vertex:Fx,uv_vertex:kx,worldpos_vertex:Ux,background_vert:Bx,background_frag:zx,backgroundCube_vert:Vx,backgroundCube_frag:Hx,cube_vert:Gx,cube_frag:Wx,depth_vert:jx,depth_frag:Xx,distanceRGBA_vert:$x,distanceRGBA_frag:Yx,equirect_vert:qx,equirect_frag:Zx,linedashed_vert:Kx,linedashed_frag:Jx,meshbasic_vert:Qx,meshbasic_frag:tw,meshlambert_vert:ew,meshlambert_frag:nw,meshmatcap_vert:iw,meshmatcap_frag:rw,meshnormal_vert:sw,meshnormal_frag:ow,meshphong_vert:aw,meshphong_frag:cw,meshphysical_vert:lw,meshphysical_frag:dw,meshtoon_vert:uw,meshtoon_frag:hw,points_vert:fw,points_frag:pw,shadow_vert:mw,shadow_frag:gw,sprite_vert:vw,sprite_frag:_w},rt={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},Nn={basic:{uniforms:We([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:We([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:We([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:We([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:We([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:We([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:We([rt.points,rt.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:We([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:We([rt.common,rt.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:We([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:We([rt.sprite,rt.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:We([rt.common,rt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:We([rt.lights,rt.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};Nn.physical={uniforms:We([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};var Na={r:0,b:0,g:0},er=new hs,bw=new Ie;function yw(i,t,e,n,r,s,o){let a=new Qt(0),c=s===!0?0:1,l,d,u=null,h=0,m=null;function g(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?e:t).get(x)),x}function v(E){let x=!1,S=g(E);S===null?f(a,c):S&&S.isColor&&(f(S,1),x=!0);let O=i.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(E,x){let S=g(x);S&&(S.isCubeTexture||S.mapping===uc)?(d===void 0&&(d=new An(new io(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:fs(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(O,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),er.copy(x.backgroundRotation),er.x*=-1,er.y*=-1,er.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(er.y*=-1,er.z*=-1),d.material.uniforms.envMap.value=S,d.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(bw.makeRotationFromEuler(er)),d.material.toneMapped=se.getTransfer(S.colorSpace)!==le,(u!==S||h!==S.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,u=S,h=S.version,m=i.toneMapping),d.layers.enableAll(),E.unshift(d,d.geometry,d.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new An(new ic(2,2),new Un({name:"BackgroundMaterial",uniforms:fs(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=se.getTransfer(S.colorSpace)!==le,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||h!==S.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,h=S.version,m=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function f(E,x){E.getRGB(Na,Zm(i)),n.buffers.color.setClear(Na.r,Na.g,Na.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(E,x=1){a.set(E),c=x,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,f(a,c)},render:v,addToRenderList:p}}function xw(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null),s=r,o=!1;function a(y,I,W,B,Y){let $=!1,j=u(B,W,I);s!==j&&(s=j,l(s.object)),$=m(y,B,W,Y),$&&g(y,B,W,Y),Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,S(y,I,W,B),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function d(y){return i.deleteVertexArray(y)}function u(y,I,W){let B=W.wireframe===!0,Y=n[y.id];Y===void 0&&(Y={},n[y.id]=Y);let $=Y[I.id];$===void 0&&($={},Y[I.id]=$);let j=$[B];return j===void 0&&(j=h(c()),$[B]=j),j}function h(y){let I=[],W=[],B=[];for(let Y=0;Y<e;Y++)I[Y]=0,W[Y]=0,B[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:W,attributeDivisors:B,object:y,attributes:{},index:null}}function m(y,I,W,B){let Y=s.attributes,$=I.attributes,j=0,Z=W.getAttributes();for(let z in Z)if(Z[z].location>=0){let gt=Y[z],bt=$[z];if(bt===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(bt=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(bt=y.instanceColor)),gt===void 0||gt.attribute!==bt||bt&&gt.data!==bt.data)return!0;j++}return s.attributesNum!==j||s.index!==B}function g(y,I,W,B){let Y={},$=I.attributes,j=0,Z=W.getAttributes();for(let z in Z)if(Z[z].location>=0){let gt=$[z];gt===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(gt=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(gt=y.instanceColor));let bt={};bt.attribute=gt,gt&&gt.data&&(bt.data=gt.data),Y[z]=bt,j++}s.attributes=Y,s.attributesNum=j,s.index=B}function v(){let y=s.newAttributes;for(let I=0,W=y.length;I<W;I++)y[I]=0}function p(y){f(y,0)}function f(y,I){let W=s.newAttributes,B=s.enabledAttributes,Y=s.attributeDivisors;W[y]=1,B[y]===0&&(i.enableVertexAttribArray(y),B[y]=1),Y[y]!==I&&(i.vertexAttribDivisor(y,I),Y[y]=I)}function E(){let y=s.newAttributes,I=s.enabledAttributes;for(let W=0,B=I.length;W<B;W++)I[W]!==y[W]&&(i.disableVertexAttribArray(W),I[W]=0)}function x(y,I,W,B,Y,$,j){j===!0?i.vertexAttribIPointer(y,I,W,Y,$):i.vertexAttribPointer(y,I,W,B,Y,$)}function S(y,I,W,B){v();let Y=B.attributes,$=W.getAttributes(),j=I.defaultAttributeValues;for(let Z in $){let z=$[Z];if(z.location>=0){let ht=Y[Z];if(ht===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(ht=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(ht=y.instanceColor)),ht!==void 0){let gt=ht.normalized,bt=ht.itemSize,Xt=t.get(ht);if(Xt===void 0)continue;let oe=Xt.buffer,G=Xt.type,Q=Xt.bytesPerElement,pt=G===i.INT||G===i.UNSIGNED_INT||ht.gpuType===zm;if(ht.isInterleavedBufferAttribute){let ct=ht.data,zt=ct.stride,kt=ht.offset;if(ct.isInstancedInterleavedBuffer){for(let Yt=0;Yt<z.locationSize;Yt++)f(z.location+Yt,ct.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Yt=0;Yt<z.locationSize;Yt++)p(z.location+Yt);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let Yt=0;Yt<z.locationSize;Yt++)x(z.location+Yt,bt/z.locationSize,G,gt,zt*Q,(kt+bt/z.locationSize*Yt)*Q,pt)}else{if(ht.isInstancedBufferAttribute){for(let ct=0;ct<z.locationSize;ct++)f(z.location+ct,ht.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let ct=0;ct<z.locationSize;ct++)p(z.location+ct);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let ct=0;ct<z.locationSize;ct++)x(z.location+ct,bt/z.locationSize,G,gt,bt*Q,bt/z.locationSize*ct*Q,pt)}}else if(j!==void 0){let gt=j[Z];if(gt!==void 0)switch(gt.length){case 2:i.vertexAttrib2fv(z.location,gt);break;case 3:i.vertexAttrib3fv(z.location,gt);break;case 4:i.vertexAttrib4fv(z.location,gt);break;default:i.vertexAttrib1fv(z.location,gt)}}}}E()}function O(){k();for(let y in n){let I=n[y];for(let W in I){let B=I[W];for(let Y in B)d(B[Y].object),delete B[Y];delete I[W]}delete n[y]}}function R(y){if(n[y.id]===void 0)return;let I=n[y.id];for(let W in I){let B=I[W];for(let Y in B)d(B[Y].object),delete B[Y];delete I[W]}delete n[y.id]}function A(y){for(let I in n){let W=n[I];if(W[y.id]===void 0)continue;let B=W[y.id];for(let Y in B)d(B[Y].object),delete B[Y];delete W[y.id]}}function k(){w(),o=!0,s!==r&&(s=r,l(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:k,resetDefaultState:w,dispose:O,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:p,disableUnusedAttributes:E}}function ww(i,t,e){let n;function r(l){n=l}function s(l,d){i.drawArrays(n,l,d),e.update(d,n,1)}function o(l,d,u){u!==0&&(i.drawArraysInstanced(n,l,d,u),e.update(d,n,u))}function a(l,d,u){if(u===0)return;let h=t.get("WEBGL_multi_draw");if(h===null)for(let m=0;m<u;m++)this.render(l[m],d[m]);else{h.multiDrawArraysWEBGL(n,l,0,d,0,u);let m=0;for(let g=0;g<u;g++)m+=d[g];e.update(m,n,1)}}function c(l,d,u,h){if(u===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)o(l[g],d[g],h[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,d,0,h,0,u);let g=0;for(let v=0;v<u;v++)g+=d[v];for(let v=0;v<h.length;v++)e.update(g,n,h[v])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Sw(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==Fn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let A=R===hc&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Ti&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Si&&!A)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);let u=e.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=m>0,O=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:f,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:S,maxSamples:O}}function Mw(i){let t=this,e=null,n=0,r=!1,s=!1,o=new ei,a=new Ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){let m=u.length!==0||h||n!==0||r;return r=h,n=u.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){e=d(u,h,0)},this.setState=function(u,h,m){let g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,f=i.get(u);if(!r||g===null||g.length===0||s&&!p)s?d(null):l();else{let E=s?0:n,x=E*4,S=f.clippingState||null;c.value=S,S=d(g,h,x,m);for(let O=0;O!==x;++O)S[O]=e[O];f.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(u,h,m,g){let v=u!==null?u.length:0,p=null;if(v!==0){if(p=c.value,g!==!0||p===null){let f=m+v*4,E=h.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<f)&&(p=new Float32Array(f));for(let x=0,S=m;x!==v;++x,S+=4)o.copy(u[x]).applyMatrix4(E,a),o.normal.toArray(p,S),p[S+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function Ew(i){let t=new WeakMap;function e(o,a){return a===Rd?o.mapping=os:a===Id&&(o.mapping=as),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Rd||a===Id)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Bd(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var zd=class extends tc{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ts=4,pm=[.125,.215,.35,.446,.526,.582],sr=20,xd=new zd,mm=new Qt,wd=null,Sd=0,Md=0,Ed=!1,ir=(1+Math.sqrt(5))/2,Jr=1/ir,gm=[new F(-ir,Jr,0),new F(ir,Jr,0),new F(-Jr,0,ir),new F(Jr,0,ir),new F(0,ir,-Jr),new F(0,ir,Jr),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],rc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){wd=this._renderer.getRenderTarget(),Sd=this._renderer.getActiveCubeFace(),Md=this._renderer.getActiveMipmapLevel(),Ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_m(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(wd,Sd,Md),this._renderer.xr.enabled=Ed,t.scissorTest=!1,Fa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===os||t.mapping===as?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wd=this._renderer.getRenderTarget(),Sd=this._renderer.getActiveCubeFace(),Md=this._renderer.getActiveMipmapLevel(),Ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:En,minFilter:En,generateMipmaps:!1,type:hc,format:Fn,colorSpace:Ii,depthBuffer:!1},r=vm(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vm(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Aw(s)),this._blurMaterial=Tw(s,t,e)}return r}_compileMaterial(t){let e=new An(this._lodPlanes[0],t);this._renderer.compile(e,xd)}_sceneToCubeUV(t,e,n,r){let a=new je(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,h=d.toneMapping;d.getClearColor(mm),d.toneMapping=Ei,d.autoClear=!1;let m=new Ka({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),g=new An(new io,m),v=!1,p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,v=!0):(m.color.copy(mm),v=!0);for(let f=0;f<6;f++){let E=f%3;E===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):E===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));let x=this._cubeSize;Fa(r,E*x,f>2?x:0,x,x),d.setRenderTarget(r),v&&d.render(g,a),d.render(t,a)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=h,d.autoClear=u,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===os||t.mapping===as;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bm()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_m());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new An(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let c=this._cubeSize;Fa(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,xd)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=gm[(r-s-1)%gm.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let d=3,u=new An(this._lodPlanes[r],l),h=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*sr-1),v=s/g,p=isFinite(s)?1+Math.floor(d*v):sr;p>sr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${sr}`);let f=[],E=0;for(let A=0;A<sr;++A){let k=A/v,w=Math.exp(-k*k/2);f.push(w),A===0?E+=w:A<p&&(E+=2*w)}for(let A=0;A<f.length;A++)f[A]=f[A]/E;h.envMap.value=t.texture,h.samples.value=p,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-n;let S=this._sizeLods[r],O=3*S*(r>x-ts?r-x+ts:0),R=4*(this._cubeSize-S);Fa(e,O,R,3*S,2*S),c.setRenderTarget(e),c.render(u,xd)}};function Aw(i){let t=[],e=[],n=[],r=i,s=i-ts+1+pm.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let c=1/a;o>i-ts?c=pm[o-i+ts-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),d=-l,u=1+l,h=[d,d,u,d,u,u,d,d,u,u,d,u],m=6,g=6,v=3,p=2,f=1,E=new Float32Array(v*g*m),x=new Float32Array(p*g*m),S=new Float32Array(f*g*m);for(let R=0;R<m;R++){let A=R%3*2/3-1,k=R>2?0:-1,w=[A,k,0,A+2/3,k,0,A+2/3,k+1,0,A,k,0,A+2/3,k+1,0,A,k+1,0];E.set(w,v*g*R),x.set(h,p*g*R);let y=[R,R,R,R,R,R];S.set(y,f*g*R)}let O=new kn;O.setAttribute("position",new en(E,v)),O.setAttribute("uv",new en(x,p)),O.setAttribute("faceIndex",new en(S,f)),t.push(O),r>ts&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function vm(i,t,e){let n=new si(i,t,e);return n.texture.mapping=uc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fa(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Tw(i,t,e){let n=new Float32Array(sr),r=new F(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:sr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function _m(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function bm(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function uu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Cw(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Rd||c===Id,d=c===os||c===as;if(l||d){let u=t.get(a),h=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new rc(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let m=a.image;return l&&m&&m.height>0||d&&m&&r(m)?(e===null&&(e=new rc(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let c=0,l=6;for(let d=0;d<l;d++)a[d]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Rw(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&Ym("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Iw(i,t,e,n){let r={},s=new WeakMap;function o(u){let h=u.target;h.index!==null&&t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);for(let g in h.morphAttributes){let v=h.morphAttributes[g];for(let p=0,f=v.length;p<f;p++)t.remove(v[p])}h.removeEventListener("dispose",o),delete r[h.id];let m=s.get(h);m&&(t.remove(m),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(u,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,e.memory.geometries++),h}function c(u){let h=u.attributes;for(let g in h)t.update(h[g],i.ARRAY_BUFFER);let m=u.morphAttributes;for(let g in m){let v=m[g];for(let p=0,f=v.length;p<f;p++)t.update(v[p],i.ARRAY_BUFFER)}}function l(u){let h=[],m=u.index,g=u.attributes.position,v=0;if(m!==null){let E=m.array;v=m.version;for(let x=0,S=E.length;x<S;x+=3){let O=E[x+0],R=E[x+1],A=E[x+2];h.push(O,R,R,A,A,O)}}else if(g!==void 0){let E=g.array;v=g.version;for(let x=0,S=E.length/3-1;x<S;x+=3){let O=x+0,R=x+1,A=x+2;h.push(O,R,R,A,A,O)}}else return;let p=new($m(h)?Qa:Ja)(h,1);p.version=v;let f=s.get(u);f&&t.remove(f),s.set(u,p)}function d(u){let h=s.get(u);if(h){let m=u.index;m!==null&&h.version<m.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:d}}function Dw(i,t,e){let n;function r(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function c(h,m){i.drawElements(n,m,s,h*o),e.update(m,n,1)}function l(h,m,g){g!==0&&(i.drawElementsInstanced(n,m,s,h*o,g),e.update(m,n,g))}function d(h,m,g){if(g===0)return;let v=t.get("WEBGL_multi_draw");if(v===null)for(let p=0;p<g;p++)this.render(h[p]/o,m[p]);else{v.multiDrawElementsWEBGL(n,m,0,s,h,0,g);let p=0;for(let f=0;f<g;f++)p+=m[f];e.update(p,n,1)}}function u(h,m,g,v){if(g===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<h.length;f++)l(h[f]/o,m[f],v[f]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,s,h,0,v,0,g);let f=0;for(let E=0;E<g;E++)f+=m[E];for(let E=0;E<v.length;E++)e.update(f,n,v[E])}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function Pw(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Lw(i,t,e){let n=new WeakMap,r=new Ue;function s(o,a,c){let l=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0,h=n.get(a);if(h===void 0||h.count!==u){let y=function(){k.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var m=y;h!==void 0&&h.texture.dispose();let g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],S=0;g===!0&&(S=1),v===!0&&(S=2),p===!0&&(S=3);let O=a.attributes.position.count*S,R=1;O>t.maxTextureSize&&(R=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);let A=new Float32Array(O*R*4*u),k=new Ya(A,O,R,u);k.type=Si,k.needsUpdate=!0;let w=S*4;for(let I=0;I<u;I++){let W=f[I],B=E[I],Y=x[I],$=O*R*4*I;for(let j=0;j<W.count;j++){let Z=j*w;g===!0&&(r.fromBufferAttribute(W,j),A[$+Z+0]=r.x,A[$+Z+1]=r.y,A[$+Z+2]=r.z,A[$+Z+3]=0),v===!0&&(r.fromBufferAttribute(B,j),A[$+Z+4]=r.x,A[$+Z+5]=r.y,A[$+Z+6]=r.z,A[$+Z+7]=0),p===!0&&(r.fromBufferAttribute(Y,j),A[$+Z+8]=r.x,A[$+Z+9]=r.y,A[$+Z+10]=r.z,A[$+Z+11]=Y.itemSize===4?r.w:1)}}h={count:u,texture:k,size:new ne(O,R)},n.set(a,h),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];let v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function Ow(i,t,e,n){let r=new WeakMap;function s(c){let l=n.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==l&&(t.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return u}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}var sc=class extends Di{constructor(t,e,n,r,s,o,a,c,l,d=is){if(d!==is&&d!==ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===is&&(n=cs),n===void 0&&d===ds&&(n=ls),super(null,r,s,o,a,c,d,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:_n,this.minFilter=c!==void 0?c:_n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Jm=new Di,Qm=new sc(1,1);Qm.compareFunction=Xm;var tg=new Ya,eg=new kd,ng=new ec,ym=[],xm=[],wm=new Float32Array(16),Sm=new Float32Array(9),Mm=new Float32Array(4);function ms(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=ym[r];if(s===void 0&&(s=new Float32Array(r),ym[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function De(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Pe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function pc(i,t){let e=xm[t];e===void 0&&(e=new Int32Array(t),xm[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Nw(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Fw(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2fv(this.addr,t),Pe(e,t)}}function kw(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;i.uniform3fv(this.addr,t),Pe(e,t)}}function Uw(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4fv(this.addr,t),Pe(e,t)}}function Bw(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(De(e,n))return;Mm.set(n),i.uniformMatrix2fv(this.addr,!1,Mm),Pe(e,n)}}function zw(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(De(e,n))return;Sm.set(n),i.uniformMatrix3fv(this.addr,!1,Sm),Pe(e,n)}}function Vw(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(De(e,n))return;wm.set(n),i.uniformMatrix4fv(this.addr,!1,wm),Pe(e,n)}}function Hw(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Gw(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2iv(this.addr,t),Pe(e,t)}}function Ww(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3iv(this.addr,t),Pe(e,t)}}function jw(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4iv(this.addr,t),Pe(e,t)}}function Xw(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function $w(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2uiv(this.addr,t),Pe(e,t)}}function Yw(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3uiv(this.addr,t),Pe(e,t)}}function qw(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4uiv(this.addr,t),Pe(e,t)}}function Zw(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s=this.type===i.SAMPLER_2D_SHADOW?Qm:Jm;e.setTexture2D(t||s,r)}function Kw(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||eg,r)}function Jw(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||ng,r)}function Qw(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||tg,r)}function tS(i){switch(i){case 5126:return Nw;case 35664:return Fw;case 35665:return kw;case 35666:return Uw;case 35674:return Bw;case 35675:return zw;case 35676:return Vw;case 5124:case 35670:return Hw;case 35667:case 35671:return Gw;case 35668:case 35672:return Ww;case 35669:case 35673:return jw;case 5125:return Xw;case 36294:return $w;case 36295:return Yw;case 36296:return qw;case 35678:case 36198:case 36298:case 36306:case 35682:return Zw;case 35679:case 36299:case 36307:return Kw;case 35680:case 36300:case 36308:case 36293:return Jw;case 36289:case 36303:case 36311:case 36292:return Qw}}function eS(i,t){i.uniform1fv(this.addr,t)}function nS(i,t){let e=ms(t,this.size,2);i.uniform2fv(this.addr,e)}function iS(i,t){let e=ms(t,this.size,3);i.uniform3fv(this.addr,e)}function rS(i,t){let e=ms(t,this.size,4);i.uniform4fv(this.addr,e)}function sS(i,t){let e=ms(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function oS(i,t){let e=ms(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function aS(i,t){let e=ms(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function cS(i,t){i.uniform1iv(this.addr,t)}function lS(i,t){i.uniform2iv(this.addr,t)}function dS(i,t){i.uniform3iv(this.addr,t)}function uS(i,t){i.uniform4iv(this.addr,t)}function hS(i,t){i.uniform1uiv(this.addr,t)}function fS(i,t){i.uniform2uiv(this.addr,t)}function pS(i,t){i.uniform3uiv(this.addr,t)}function mS(i,t){i.uniform4uiv(this.addr,t)}function gS(i,t,e){let n=this.cache,r=t.length,s=pc(e,r);De(n,s)||(i.uniform1iv(this.addr,s),Pe(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Jm,s[o])}function vS(i,t,e){let n=this.cache,r=t.length,s=pc(e,r);De(n,s)||(i.uniform1iv(this.addr,s),Pe(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||eg,s[o])}function _S(i,t,e){let n=this.cache,r=t.length,s=pc(e,r);De(n,s)||(i.uniform1iv(this.addr,s),Pe(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||ng,s[o])}function bS(i,t,e){let n=this.cache,r=t.length,s=pc(e,r);De(n,s)||(i.uniform1iv(this.addr,s),Pe(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||tg,s[o])}function yS(i){switch(i){case 5126:return eS;case 35664:return nS;case 35665:return iS;case 35666:return rS;case 35674:return sS;case 35675:return oS;case 35676:return aS;case 5124:case 35670:return cS;case 35667:case 35671:return lS;case 35668:case 35672:return dS;case 35669:case 35673:return uS;case 5125:return hS;case 36294:return fS;case 36295:return pS;case 36296:return mS;case 35678:case 36198:case 36298:case 36306:case 35682:return gS;case 35679:case 36299:case 36307:return vS;case 35680:case 36300:case 36308:case 36293:return _S;case 36289:case 36303:case 36311:case 36292:return bS}}var Vd=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=tS(e.type)}},Hd=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=yS(e.type)}},Gd=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],n)}}},Ad=/(\w+)(\])?(\[|\.)?/g;function Em(i,t){i.seq.push(t),i.map[t.id]=t}function xS(i,t,e){let n=i.name,r=n.length;for(Ad.lastIndex=0;;){let s=Ad.exec(n),o=Ad.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Em(e,l===void 0?new Vd(a,i,t):new Hd(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Gd(a),Em(e,u)),e=u}}}var ss=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);xS(s,o,this)}}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function Am(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var wS=37297,SS=0;function MS(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function ES(i){let t=se.getPrimaries(se.workingColorSpace),e=se.getPrimaries(i),n;switch(t===e?n="":t===ja&&e===Wa?n="LinearDisplayP3ToLinearSRGB":t===Wa&&e===ja&&(n="LinearSRGBToLinearDisplayP3"),i){case Ii:case fc:return[n,"LinearTransferOETF"];case On:case du:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Tm(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+MS(i.getShaderSource(t),o)}else return r}function AS(i,t){let e=ES(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function TS(i,t){let e;switch(t){case Hb:e="Linear";break;case Gb:e="Reinhard";break;case Wb:e="OptimizedCineon";break;case jb:e="ACESFilmic";break;case $b:e="AgX";break;case Yb:e="Neutral";break;case Xb:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function CS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(to).join(`
`)}function RS(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function IS(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function to(i){return i!==""}function Cm(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Rm(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var DS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wd(i){return i.replace(DS,LS)}var PS=new Map;function LS(i,t){let e=Nt[t];if(e===void 0){let n=PS.get(t);if(n!==void 0)e=Nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Wd(e)}var OS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Im(i){return i.replace(OS,NS)}function NS(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Dm(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function FS(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Um?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===pb?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ti&&(t="SHADOWMAP_TYPE_VSM"),t}function kS(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case os:case as:t="ENVMAP_TYPE_CUBE";break;case uc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function US(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case as:t="ENVMAP_MODE_REFRACTION";break}return t}function BS(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Bm:t="ENVMAP_BLENDING_MULTIPLY";break;case zb:t="ENVMAP_BLENDING_MIX";break;case Vb:t="ENVMAP_BLENDING_ADD";break}return t}function zS(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function VS(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,c=FS(e),l=kS(e),d=US(e),u=BS(e),h=zS(e),m=CS(e),g=RS(s),v=r.createProgram(),p,f,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(to).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(to).join(`
`),f.length>0&&(f+=`
`)):(p=[Dm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(to).join(`
`),f=[Dm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+d:"",e.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ei?"#define TONE_MAPPING":"",e.toneMapping!==Ei?Nt.tonemapping_pars_fragment:"",e.toneMapping!==Ei?TS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,AS("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(to).join(`
`)),o=Wd(o),o=Cm(o,e),o=Rm(o,e),a=Wd(a),a=Cm(a,e),a=Rm(a,e),o=Im(o),a=Im(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===Yp?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let x=E+p+o,S=E+f+a,O=Am(r,r.VERTEX_SHADER,x),R=Am(r,r.FRAGMENT_SHADER,S);r.attachShader(v,O),r.attachShader(v,R),e.index0AttributeName!==void 0?r.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function A(I){if(i.debug.checkShaderErrors){let W=r.getProgramInfoLog(v).trim(),B=r.getShaderInfoLog(O).trim(),Y=r.getShaderInfoLog(R).trim(),$=!0,j=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,O,R);else{let Z=Tm(r,O,"vertex"),z=Tm(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+W+`
`+Z+`
`+z)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(B===""||Y==="")&&(j=!1);j&&(I.diagnostics={runnable:$,programLog:W,vertexShader:{log:B,prefix:p},fragmentShader:{log:Y,prefix:f}})}r.deleteShader(O),r.deleteShader(R),k=new ss(r,v),w=IS(r,v)}let k;this.getUniforms=function(){return k===void 0&&A(this),k};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(v,wS)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=SS++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=O,this.fragmentShader=R,this}var HS=0,jd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Xd(t),e.set(t,n)),n}},Xd=class{constructor(t){this.id=HS++,this.code=t,this.usedTimes=0}};function GS(i,t,e,n,r,s,o){let a=new Za,c=new jd,l=new Set,d=[],u=r.logarithmicDepthBuffer,h=r.vertexTextures,m=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return l.add(w),w===0?"uv":`uv${w}`}function p(w,y,I,W,B){let Y=W.fog,$=B.geometry,j=w.isMeshStandardMaterial?W.environment:null,Z=(w.isMeshStandardMaterial?e:t).get(w.envMap||j),z=Z&&Z.mapping===uc?Z.image.height:null,ht=g[w.type];w.precision!==null&&(m=r.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));let gt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,bt=gt!==void 0?gt.length:0,Xt=0;$.morphAttributes.position!==void 0&&(Xt=1),$.morphAttributes.normal!==void 0&&(Xt=2),$.morphAttributes.color!==void 0&&(Xt=3);let oe,G,Q,pt;if(ht){let ae=Nn[ht];oe=ae.vertexShader,G=ae.fragmentShader}else oe=w.vertexShader,G=w.fragmentShader,c.update(w),Q=c.getVertexShaderID(w),pt=c.getFragmentShaderID(w);let ct=i.getRenderTarget(),zt=B.isInstancedMesh===!0,kt=B.isBatchedMesh===!0,Yt=!!w.map,C=!!w.matcap,$t=!!Z,Wt=!!w.aoMap,he=!!w.lightMap,Mt=!!w.bumpMap,Kt=!!w.normalMap,Vt=!!w.displacementMap,Pt=!!w.emissiveMap,Ae=!!w.metalnessMap,M=!!w.roughnessMap,_=w.anisotropy>0,U=w.clearcoat>0,q=w.dispersion>0,K=w.iridescence>0,J=w.sheen>0,wt=w.transmission>0,ot=_&&!!w.anisotropyMap,at=U&&!!w.clearcoatMap,Ut=U&&!!w.clearcoatNormalMap,tt=U&&!!w.clearcoatRoughnessMap,yt=K&&!!w.iridescenceMap,Gt=K&&!!w.iridescenceThicknessMap,Ct=J&&!!w.sheenColorMap,lt=J&&!!w.sheenRoughnessMap,Bt=!!w.specularMap,jt=!!w.specularColorMap,ye=!!w.specularIntensityMap,T=wt&&!!w.transmissionMap,dt=wt&&!!w.thicknessMap,V=!!w.gradientMap,X=!!w.alphaMap,nt=w.alphaTest>0,Rt=!!w.alphaHash,Jt=!!w.extensions,xe=Ei;w.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(xe=i.toneMapping);let Le={shaderID:ht,shaderType:w.type,shaderName:w.name,vertexShader:oe,fragmentShader:G,defines:w.defines,customVertexShaderID:Q,customFragmentShaderID:pt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:kt,batchingColor:kt&&B._colorsTexture!==null,instancing:zt,instancingColor:zt&&B.instanceColor!==null,instancingMorph:zt&&B.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ct===null?i.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Ii,alphaToCoverage:!!w.alphaToCoverage,map:Yt,matcap:C,envMap:$t,envMapMode:$t&&Z.mapping,envMapCubeUVHeight:z,aoMap:Wt,lightMap:he,bumpMap:Mt,normalMap:Kt,displacementMap:h&&Vt,emissiveMap:Pt,normalMapObjectSpace:Kt&&w.normalMapType===l0,normalMapTangentSpace:Kt&&w.normalMapType===c0,metalnessMap:Ae,roughnessMap:M,anisotropy:_,anisotropyMap:ot,clearcoat:U,clearcoatMap:at,clearcoatNormalMap:Ut,clearcoatRoughnessMap:tt,dispersion:q,iridescence:K,iridescenceMap:yt,iridescenceThicknessMap:Gt,sheen:J,sheenColorMap:Ct,sheenRoughnessMap:lt,specularMap:Bt,specularColorMap:jt,specularIntensityMap:ye,transmission:wt,transmissionMap:T,thicknessMap:dt,gradientMap:V,opaque:w.transparent===!1&&w.blending===ns&&w.alphaToCoverage===!1,alphaMap:X,alphaTest:nt,alphaHash:Rt,combine:w.combine,mapUv:Yt&&v(w.map.channel),aoMapUv:Wt&&v(w.aoMap.channel),lightMapUv:he&&v(w.lightMap.channel),bumpMapUv:Mt&&v(w.bumpMap.channel),normalMapUv:Kt&&v(w.normalMap.channel),displacementMapUv:Vt&&v(w.displacementMap.channel),emissiveMapUv:Pt&&v(w.emissiveMap.channel),metalnessMapUv:Ae&&v(w.metalnessMap.channel),roughnessMapUv:M&&v(w.roughnessMap.channel),anisotropyMapUv:ot&&v(w.anisotropyMap.channel),clearcoatMapUv:at&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:lt&&v(w.sheenRoughnessMap.channel),specularMapUv:Bt&&v(w.specularMap.channel),specularColorMapUv:jt&&v(w.specularColorMap.channel),specularIntensityMapUv:ye&&v(w.specularIntensityMap.channel),transmissionMapUv:T&&v(w.transmissionMap.channel),thicknessMapUv:dt&&v(w.thicknessMap.channel),alphaMapUv:X&&v(w.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Kt||_),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!$.attributes.uv&&(Yt||X),fog:!!Y,useFog:w.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:B.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:Xt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:xe,decodeVideoTexture:Yt&&w.map.isVideoTexture===!0&&se.getTransfer(w.map.colorSpace)===le,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ni,flipSided:w.side===tn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Jt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Jt&&w.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Le.vertexUv1s=l.has(1),Le.vertexUv2s=l.has(2),Le.vertexUv3s=l.has(3),l.clear(),Le}function f(w){let y=[];if(w.shaderID?y.push(w.shaderID):(y.push(w.customVertexShaderID),y.push(w.customFragmentShaderID)),w.defines!==void 0)for(let I in w.defines)y.push(I),y.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(E(y,w),x(y,w),y.push(i.outputColorSpace)),y.push(w.customProgramCacheKey),y.join()}function E(w,y){w.push(y.precision),w.push(y.outputColorSpace),w.push(y.envMapMode),w.push(y.envMapCubeUVHeight),w.push(y.mapUv),w.push(y.alphaMapUv),w.push(y.lightMapUv),w.push(y.aoMapUv),w.push(y.bumpMapUv),w.push(y.normalMapUv),w.push(y.displacementMapUv),w.push(y.emissiveMapUv),w.push(y.metalnessMapUv),w.push(y.roughnessMapUv),w.push(y.anisotropyMapUv),w.push(y.clearcoatMapUv),w.push(y.clearcoatNormalMapUv),w.push(y.clearcoatRoughnessMapUv),w.push(y.iridescenceMapUv),w.push(y.iridescenceThicknessMapUv),w.push(y.sheenColorMapUv),w.push(y.sheenRoughnessMapUv),w.push(y.specularMapUv),w.push(y.specularColorMapUv),w.push(y.specularIntensityMapUv),w.push(y.transmissionMapUv),w.push(y.thicknessMapUv),w.push(y.combine),w.push(y.fogExp2),w.push(y.sizeAttenuation),w.push(y.morphTargetsCount),w.push(y.morphAttributeCount),w.push(y.numDirLights),w.push(y.numPointLights),w.push(y.numSpotLights),w.push(y.numSpotLightMaps),w.push(y.numHemiLights),w.push(y.numRectAreaLights),w.push(y.numDirLightShadows),w.push(y.numPointLightShadows),w.push(y.numSpotLightShadows),w.push(y.numSpotLightShadowsWithMaps),w.push(y.numLightProbes),w.push(y.shadowMapType),w.push(y.toneMapping),w.push(y.numClippingPlanes),w.push(y.numClipIntersection),w.push(y.depthPacking)}function x(w,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.doubleSided&&a.enable(10),y.flipSided&&a.enable(11),y.useDepthPacking&&a.enable(12),y.dithering&&a.enable(13),y.transmission&&a.enable(14),y.sheen&&a.enable(15),y.opaque&&a.enable(16),y.pointsUvs&&a.enable(17),y.decodeVideoTexture&&a.enable(18),y.alphaToCoverage&&a.enable(19),w.push(a.mask)}function S(w){let y=g[w.type],I;if(y){let W=Nn[y];I=O0.clone(W.uniforms)}else I=w.uniforms;return I}function O(w,y){let I;for(let W=0,B=d.length;W<B;W++){let Y=d[W];if(Y.cacheKey===y){I=Y,++I.usedTimes;break}}return I===void 0&&(I=new VS(i,y,w,s),d.push(I)),I}function R(w){if(--w.usedTimes===0){let y=d.indexOf(w);d[y]=d[d.length-1],d.pop(),w.destroy()}}function A(w){c.remove(w)}function k(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:S,acquireProgram:O,releaseProgram:R,releaseShaderCache:A,programs:d,dispose:k}}function WS(){let i=new WeakMap;function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function e(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function jS(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Pm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Lm(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(u,h,m,g,v,p){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:h,material:m,groupOrder:g,renderOrder:u.renderOrder,z:v,group:p},i[t]=f):(f.id=u.id,f.object=u,f.geometry=h,f.material=m,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=v,f.group=p),t++,f}function a(u,h,m,g,v,p){let f=o(u,h,m,g,v,p);m.transmission>0?n.push(f):m.transparent===!0?r.push(f):e.push(f)}function c(u,h,m,g,v,p){let f=o(u,h,m,g,v,p);m.transmission>0?n.unshift(f):m.transparent===!0?r.unshift(f):e.unshift(f)}function l(u,h){e.length>1&&e.sort(u||jS),n.length>1&&n.sort(h||Pm),r.length>1&&r.sort(h||Pm)}function d(){for(let u=t,h=i.length;u<h;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:d,sort:l}}function XS(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new Lm,i.set(n,[o])):r>=s.length?(o=new Lm,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function $S(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Qt};break;case"SpotLight":e={position:new F,direction:new F,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function YS(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var qS=0;function ZS(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function KS(i){let t=new $S,e=YS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new F);let r=new F,s=new Ie,o=new Ie;function a(l){let d=0,u=0,h=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let m=0,g=0,v=0,p=0,f=0,E=0,x=0,S=0,O=0,R=0,A=0;l.sort(ZS);for(let w=0,y=l.length;w<y;w++){let I=l[w],W=I.color,B=I.intensity,Y=I.distance,$=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=W.r*B,u+=W.g*B,h+=W.b*B;else if(I.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(I.sh.coefficients[j],B);A++}else if(I.isDirectionalLight){let j=t.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Z=I.shadow,z=e.get(I);z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,n.directionalShadow[m]=z,n.directionalShadowMap[m]=$,n.directionalShadowMatrix[m]=I.shadow.matrix,E++}n.directional[m]=j,m++}else if(I.isSpotLight){let j=t.get(I);j.position.setFromMatrixPosition(I.matrixWorld),j.color.copy(W).multiplyScalar(B),j.distance=Y,j.coneCos=Math.cos(I.angle),j.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),j.decay=I.decay,n.spot[v]=j;let Z=I.shadow;if(I.map&&(n.spotLightMap[O]=I.map,O++,Z.updateMatrices(I),I.castShadow&&R++),n.spotLightMatrix[v]=Z.matrix,I.castShadow){let z=e.get(I);z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,n.spotShadow[v]=z,n.spotShadowMap[v]=$,S++}v++}else if(I.isRectAreaLight){let j=t.get(I);j.color.copy(W).multiplyScalar(B),j.halfWidth.set(I.width*.5,0,0),j.halfHeight.set(0,I.height*.5,0),n.rectArea[p]=j,p++}else if(I.isPointLight){let j=t.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity),j.distance=I.distance,j.decay=I.decay,I.castShadow){let Z=I.shadow,z=e.get(I);z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,z.shadowCameraNear=Z.camera.near,z.shadowCameraFar=Z.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=I.shadow.matrix,x++}n.point[g]=j,g++}else if(I.isHemisphereLight){let j=t.get(I);j.skyColor.copy(I.color).multiplyScalar(B),j.groundColor.copy(I.groundColor).multiplyScalar(B),n.hemi[f]=j,f++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=rt.LTC_FLOAT_1,n.rectAreaLTC2=rt.LTC_FLOAT_2):(n.rectAreaLTC1=rt.LTC_HALF_1,n.rectAreaLTC2=rt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=h;let k=n.hash;(k.directionalLength!==m||k.pointLength!==g||k.spotLength!==v||k.rectAreaLength!==p||k.hemiLength!==f||k.numDirectionalShadows!==E||k.numPointShadows!==x||k.numSpotShadows!==S||k.numSpotMaps!==O||k.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=p,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=S+O-R,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,k.directionalLength=m,k.pointLength=g,k.spotLength=v,k.rectAreaLength=p,k.hemiLength=f,k.numDirectionalShadows=E,k.numPointShadows=x,k.numSpotShadows=S,k.numSpotMaps=O,k.numLightProbes=A,n.version=qS++)}function c(l,d){let u=0,h=0,m=0,g=0,v=0,p=d.matrixWorldInverse;for(let f=0,E=l.length;f<E;f++){let x=l[f];if(x.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),u++}else if(x.isSpotLight){let S=n.spot[m];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),m++}else if(x.isRectAreaLight){let S=n.rectArea[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),o.identity(),s.copy(x.matrixWorld),s.premultiply(p),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){let S=n.point[h];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),h++}else if(x.isHemisphereLight){let S=n.hemi[v];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(p),v++}}}return{setup:a,setupView:c,state:n}}function Om(i){let t=new KS(i),e=[],n=[];function r(d){l.camera=d,e.length=0,n.length=0}function s(d){e.push(d)}function o(d){n.push(d)}function a(){t.setup(e)}function c(d){t.setupView(e,d)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function JS(i){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new Om(i),t.set(r,[a])):s>=o.length?(a=new Om(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var $d=class extends lr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=o0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Yd=class extends lr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},QS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function eM(i,t,e){let n=new nc,r=new ne,s=new ne,o=new Ue,a=new $d({depthPacking:a0}),c=new Yd,l={},d=e.maxTextureSize,u={[Ai]:tn,[tn]:Ai,[ni]:ni},h=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:QS,fragmentShader:tM}),m=h.clone();m.defines.HORIZONTAL_PASS=1;let g=new kn;g.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new An(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Um;let f=this.type;this.render=function(R,A,k){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;let w=i.getRenderTarget(),y=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Mi),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let B=f!==ti&&this.type===ti,Y=f===ti&&this.type!==ti;for(let $=0,j=R.length;$<j;$++){let Z=R[$],z=Z.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);let ht=z.getFrameExtents();if(r.multiply(ht),s.copy(z.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/ht.x),r.x=s.x*ht.x,z.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/ht.y),r.y=s.y*ht.y,z.mapSize.y=s.y)),z.map===null||B===!0||Y===!0){let bt=this.type!==ti?{minFilter:_n,magFilter:_n}:{};z.map!==null&&z.map.dispose(),z.map=new si(r.x,r.y,bt),z.map.texture.name=Z.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();let gt=z.getViewportCount();for(let bt=0;bt<gt;bt++){let Xt=z.getViewport(bt);o.set(s.x*Xt.x,s.y*Xt.y,s.x*Xt.z,s.y*Xt.w),W.viewport(o),z.updateMatrices(Z,bt),n=z.getFrustum(),S(A,k,z.camera,Z,this.type)}z.isPointLightShadow!==!0&&this.type===ti&&E(z,k),z.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(w,y,I)};function E(R,A){let k=t.update(v);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new si(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(A,null,k,h,v,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(A,null,k,m,v,null)}function x(R,A,k,w){let y=null,I=k.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(I!==void 0)y=I;else if(y=k.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let W=y.uuid,B=A.uuid,Y=l[W];Y===void 0&&(Y={},l[W]=Y);let $=Y[B];$===void 0&&($=y.clone(),Y[B]=$,A.addEventListener("dispose",O)),y=$}if(y.visible=A.visible,y.wireframe=A.wireframe,w===ti?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:u[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,k.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let W=i.properties.get(y);W.light=k}return y}function S(R,A,k,w,y){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===ti)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,R.matrixWorld);let B=t.update(R),Y=R.material;if(Array.isArray(Y)){let $=B.groups;for(let j=0,Z=$.length;j<Z;j++){let z=$[j],ht=Y[z.materialIndex];if(ht&&ht.visible){let gt=x(R,ht,w,y);R.onBeforeShadow(i,R,A,k,B,gt,z),i.renderBufferDirect(k,null,B,gt,R,z),R.onAfterShadow(i,R,A,k,B,gt,z)}}}else if(Y.visible){let $=x(R,Y,w,y);R.onBeforeShadow(i,R,A,k,B,$,null),i.renderBufferDirect(k,null,B,$,R,null),R.onAfterShadow(i,R,A,k,B,$,null)}}let W=R.children;for(let B=0,Y=W.length;B<Y;B++)S(W[B],A,k,w,y)}function O(R){R.target.removeEventListener("dispose",O);for(let k in l){let w=l[k],y=R.target.uuid;y in w&&(w[y].dispose(),delete w[y])}}}function nM(i){function t(){let T=!1,dt=new Ue,V=null,X=new Ue(0,0,0,0);return{setMask:function(nt){V!==nt&&!T&&(i.colorMask(nt,nt,nt,nt),V=nt)},setLocked:function(nt){T=nt},setClear:function(nt,Rt,Jt,xe,Le){Le===!0&&(nt*=xe,Rt*=xe,Jt*=xe),dt.set(nt,Rt,Jt,xe),X.equals(dt)===!1&&(i.clearColor(nt,Rt,Jt,xe),X.copy(dt))},reset:function(){T=!1,V=null,X.set(-1,0,0,0)}}}function e(){let T=!1,dt=null,V=null,X=null;return{setTest:function(nt){nt?pt(i.DEPTH_TEST):ct(i.DEPTH_TEST)},setMask:function(nt){dt!==nt&&!T&&(i.depthMask(nt),dt=nt)},setFunc:function(nt){if(V!==nt){switch(nt){case Lb:i.depthFunc(i.NEVER);break;case Ob:i.depthFunc(i.ALWAYS);break;case Nb:i.depthFunc(i.LESS);break;case za:i.depthFunc(i.LEQUAL);break;case Fb:i.depthFunc(i.EQUAL);break;case kb:i.depthFunc(i.GEQUAL);break;case Ub:i.depthFunc(i.GREATER);break;case Bb:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}V=nt}},setLocked:function(nt){T=nt},setClear:function(nt){X!==nt&&(i.clearDepth(nt),X=nt)},reset:function(){T=!1,dt=null,V=null,X=null}}}function n(){let T=!1,dt=null,V=null,X=null,nt=null,Rt=null,Jt=null,xe=null,Le=null;return{setTest:function(ae){T||(ae?pt(i.STENCIL_TEST):ct(i.STENCIL_TEST))},setMask:function(ae){dt!==ae&&!T&&(i.stencilMask(ae),dt=ae)},setFunc:function(ae,Cn,Rn){(V!==ae||X!==Cn||nt!==Rn)&&(i.stencilFunc(ae,Cn,Rn),V=ae,X=Cn,nt=Rn)},setOp:function(ae,Cn,Rn){(Rt!==ae||Jt!==Cn||xe!==Rn)&&(i.stencilOp(ae,Cn,Rn),Rt=ae,Jt=Cn,xe=Rn)},setLocked:function(ae){T=ae},setClear:function(ae){Le!==ae&&(i.clearStencil(ae),Le=ae)},reset:function(){T=!1,dt=null,V=null,X=null,nt=null,Rt=null,Jt=null,xe=null,Le=null}}}let r=new t,s=new e,o=new n,a=new WeakMap,c=new WeakMap,l={},d={},u=new WeakMap,h=[],m=null,g=!1,v=null,p=null,f=null,E=null,x=null,S=null,O=null,R=new Qt(0,0,0),A=0,k=!1,w=null,y=null,I=null,W=null,B=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,j=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Z)[1]),$=j>=1):Z.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),$=j>=2);let z=null,ht={},gt=i.getParameter(i.SCISSOR_BOX),bt=i.getParameter(i.VIEWPORT),Xt=new Ue().fromArray(gt),oe=new Ue().fromArray(bt);function G(T,dt,V,X){let nt=new Uint8Array(4),Rt=i.createTexture();i.bindTexture(T,Rt),i.texParameteri(T,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(T,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Jt=0;Jt<V;Jt++)T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY?i.texImage3D(dt,0,i.RGBA,1,1,X,0,i.RGBA,i.UNSIGNED_BYTE,nt):i.texImage2D(dt+Jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,nt);return Rt}let Q={};Q[i.TEXTURE_2D]=G(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=G(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=G(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=G(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),pt(i.DEPTH_TEST),s.setFunc(za),Mt(!1),Kt(hp),pt(i.CULL_FACE),Wt(Mi);function pt(T){l[T]!==!0&&(i.enable(T),l[T]=!0)}function ct(T){l[T]!==!1&&(i.disable(T),l[T]=!1)}function zt(T,dt){return d[T]!==dt?(i.bindFramebuffer(T,dt),d[T]=dt,T===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=dt),T===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=dt),!0):!1}function kt(T,dt){let V=h,X=!1;if(T){V=u.get(dt),V===void 0&&(V=[],u.set(dt,V));let nt=T.textures;if(V.length!==nt.length||V[0]!==i.COLOR_ATTACHMENT0){for(let Rt=0,Jt=nt.length;Rt<Jt;Rt++)V[Rt]=i.COLOR_ATTACHMENT0+Rt;V.length=nt.length,X=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,X=!0);X&&i.drawBuffers(V)}function Yt(T){return m!==T?(i.useProgram(T),m=T,!0):!1}let C={[rr]:i.FUNC_ADD,[gb]:i.FUNC_SUBTRACT,[vb]:i.FUNC_REVERSE_SUBTRACT};C[_b]=i.MIN,C[bb]=i.MAX;let $t={[yb]:i.ZERO,[xb]:i.ONE,[wb]:i.SRC_COLOR,[Td]:i.SRC_ALPHA,[Cb]:i.SRC_ALPHA_SATURATE,[Ab]:i.DST_COLOR,[Mb]:i.DST_ALPHA,[Sb]:i.ONE_MINUS_SRC_COLOR,[Cd]:i.ONE_MINUS_SRC_ALPHA,[Tb]:i.ONE_MINUS_DST_COLOR,[Eb]:i.ONE_MINUS_DST_ALPHA,[Rb]:i.CONSTANT_COLOR,[Ib]:i.ONE_MINUS_CONSTANT_COLOR,[Db]:i.CONSTANT_ALPHA,[Pb]:i.ONE_MINUS_CONSTANT_ALPHA};function Wt(T,dt,V,X,nt,Rt,Jt,xe,Le,ae){if(T===Mi){g===!0&&(ct(i.BLEND),g=!1);return}if(g===!1&&(pt(i.BLEND),g=!0),T!==mb){if(T!==v||ae!==k){if((p!==rr||x!==rr)&&(i.blendEquation(i.FUNC_ADD),p=rr,x=rr),ae)switch(T){case ns:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fp:i.blendFunc(i.ONE,i.ONE);break;case pp:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mp:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case ns:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fp:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case pp:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mp:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}f=null,E=null,S=null,O=null,R.set(0,0,0),A=0,v=T,k=ae}return}nt=nt||dt,Rt=Rt||V,Jt=Jt||X,(dt!==p||nt!==x)&&(i.blendEquationSeparate(C[dt],C[nt]),p=dt,x=nt),(V!==f||X!==E||Rt!==S||Jt!==O)&&(i.blendFuncSeparate($t[V],$t[X],$t[Rt],$t[Jt]),f=V,E=X,S=Rt,O=Jt),(xe.equals(R)===!1||Le!==A)&&(i.blendColor(xe.r,xe.g,xe.b,Le),R.copy(xe),A=Le),v=T,k=!1}function he(T,dt){T.side===ni?ct(i.CULL_FACE):pt(i.CULL_FACE);let V=T.side===tn;dt&&(V=!V),Mt(V),T.blending===ns&&T.transparent===!1?Wt(Mi):Wt(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),s.setFunc(T.depthFunc),s.setTest(T.depthTest),s.setMask(T.depthWrite),r.setMask(T.colorWrite);let X=T.stencilWrite;o.setTest(X),X&&(o.setMask(T.stencilWriteMask),o.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),o.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),Pt(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?pt(i.SAMPLE_ALPHA_TO_COVERAGE):ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(T){w!==T&&(T?i.frontFace(i.CW):i.frontFace(i.CCW),w=T)}function Kt(T){T!==hb?(pt(i.CULL_FACE),T!==y&&(T===hp?i.cullFace(i.BACK):T===fb?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ct(i.CULL_FACE),y=T}function Vt(T){T!==I&&($&&i.lineWidth(T),I=T)}function Pt(T,dt,V){T?(pt(i.POLYGON_OFFSET_FILL),(W!==dt||B!==V)&&(i.polygonOffset(dt,V),W=dt,B=V)):ct(i.POLYGON_OFFSET_FILL)}function Ae(T){T?pt(i.SCISSOR_TEST):ct(i.SCISSOR_TEST)}function M(T){T===void 0&&(T=i.TEXTURE0+Y-1),z!==T&&(i.activeTexture(T),z=T)}function _(T,dt,V){V===void 0&&(z===null?V=i.TEXTURE0+Y-1:V=z);let X=ht[V];X===void 0&&(X={type:void 0,texture:void 0},ht[V]=X),(X.type!==T||X.texture!==dt)&&(z!==V&&(i.activeTexture(V),z=V),i.bindTexture(T,dt||Q[T]),X.type=T,X.texture=dt)}function U(){let T=ht[z];T!==void 0&&T.type!==void 0&&(i.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function wt(){try{i.texSubImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ot(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function at(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ut(){try{i.texStorage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function tt(){try{i.texStorage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function yt(){try{i.texImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Gt(){try{i.texImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ct(T){Xt.equals(T)===!1&&(i.scissor(T.x,T.y,T.z,T.w),Xt.copy(T))}function lt(T){oe.equals(T)===!1&&(i.viewport(T.x,T.y,T.z,T.w),oe.copy(T))}function Bt(T,dt){let V=c.get(dt);V===void 0&&(V=new WeakMap,c.set(dt,V));let X=V.get(T);X===void 0&&(X=i.getUniformBlockIndex(dt,T.name),V.set(T,X))}function jt(T,dt){let X=c.get(dt).get(T);a.get(dt)!==X&&(i.uniformBlockBinding(dt,X,T.__bindingPointIndex),a.set(dt,X))}function ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},z=null,ht={},d={},u=new WeakMap,h=[],m=null,g=!1,v=null,p=null,f=null,E=null,x=null,S=null,O=null,R=new Qt(0,0,0),A=0,k=!1,w=null,y=null,I=null,W=null,B=null,Xt.set(0,0,i.canvas.width,i.canvas.height),oe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:pt,disable:ct,bindFramebuffer:zt,drawBuffers:kt,useProgram:Yt,setBlending:Wt,setMaterial:he,setFlipSided:Mt,setCullFace:Kt,setLineWidth:Vt,setPolygonOffset:Pt,setScissorTest:Ae,activeTexture:M,bindTexture:_,unbindTexture:U,compressedTexImage2D:q,compressedTexImage3D:K,texImage2D:yt,texImage3D:Gt,updateUBOMapping:Bt,uniformBlockBinding:jt,texStorage2D:Ut,texStorage3D:tt,texSubImage2D:J,texSubImage3D:wt,compressedTexSubImage2D:ot,compressedTexSubImage3D:at,scissor:Ct,viewport:lt,reset:ye}}function iM(i,t,e,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ne,d=new WeakMap,u,h=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,_){return m?new OffscreenCanvas(M,_):no("canvas")}function v(M,_,U){let q=1,K=Ae(M);if((K.width>U||K.height>U)&&(q=U/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){let J=Math.floor(q*K.width),wt=Math.floor(q*K.height);u===void 0&&(u=g(J,wt));let ot=_?g(J,wt):u;return ot.width=J,ot.height=wt,ot.getContext("2d").drawImage(M,0,0,J,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+J+"x"+wt+")."),ot}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),M;return M}function p(M){return M.generateMipmaps&&M.minFilter!==_n&&M.minFilter!==En}function f(M){i.generateMipmap(M)}function E(M,_,U,q,K=!1){if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let J=_;if(_===i.RED&&(U===i.FLOAT&&(J=i.R32F),U===i.HALF_FLOAT&&(J=i.R16F),U===i.UNSIGNED_BYTE&&(J=i.R8)),_===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(J=i.R8UI),U===i.UNSIGNED_SHORT&&(J=i.R16UI),U===i.UNSIGNED_INT&&(J=i.R32UI),U===i.BYTE&&(J=i.R8I),U===i.SHORT&&(J=i.R16I),U===i.INT&&(J=i.R32I)),_===i.RG&&(U===i.FLOAT&&(J=i.RG32F),U===i.HALF_FLOAT&&(J=i.RG16F),U===i.UNSIGNED_BYTE&&(J=i.RG8)),_===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(J=i.RG8UI),U===i.UNSIGNED_SHORT&&(J=i.RG16UI),U===i.UNSIGNED_INT&&(J=i.RG32UI),U===i.BYTE&&(J=i.RG8I),U===i.SHORT&&(J=i.RG16I),U===i.INT&&(J=i.RG32I)),_===i.RGB&&U===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),_===i.RGBA){let wt=K?Ga:se.getTransfer(q);U===i.FLOAT&&(J=i.RGBA32F),U===i.HALF_FLOAT&&(J=i.RGBA16F),U===i.UNSIGNED_BYTE&&(J=wt===le?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function x(M,_){let U;return M?_===null||_===cs||_===ls?U=i.DEPTH24_STENCIL8:_===Si?U=i.DEPTH32F_STENCIL8:_===Va&&(U=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===cs||_===ls?U=i.DEPTH_COMPONENT24:_===Si?U=i.DEPTH_COMPONENT32F:_===Va&&(U=i.DEPTH_COMPONENT16),U}function S(M,_){return p(M)===!0||M.isFramebufferTexture&&M.minFilter!==_n&&M.minFilter!==En?Math.log2(Math.max(_.width,_.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?_.mipmaps.length:1}function O(M){let _=M.target;_.removeEventListener("dispose",O),A(_),_.isVideoTexture&&d.delete(_)}function R(M){let _=M.target;_.removeEventListener("dispose",R),w(_)}function A(M){let _=n.get(M);if(_.__webglInit===void 0)return;let U=M.source,q=h.get(U);if(q){let K=q[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&k(M),Object.keys(q).length===0&&h.delete(U)}n.remove(M)}function k(M){let _=n.get(M);i.deleteTexture(_.__webglTexture);let U=M.source,q=h.get(U);delete q[_.__cacheKey],o.memory.textures--}function w(M){let _=n.get(M);if(M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let K=0;K<_.__webglFramebuffer[q].length;K++)i.deleteFramebuffer(_.__webglFramebuffer[q][K]);else i.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)i.deleteFramebuffer(_.__webglFramebuffer[q]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let U=M.textures;for(let q=0,K=U.length;q<K;q++){let J=n.get(U[q]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(U[q])}n.remove(M)}let y=0;function I(){y=0}function W(){let M=y;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),y+=1,M}function B(M){let _=[];return _.push(M.wrapS),_.push(M.wrapT),_.push(M.wrapR||0),_.push(M.magFilter),_.push(M.minFilter),_.push(M.anisotropy),_.push(M.internalFormat),_.push(M.format),_.push(M.type),_.push(M.generateMipmaps),_.push(M.premultiplyAlpha),_.push(M.flipY),_.push(M.unpackAlignment),_.push(M.colorSpace),_.join()}function Y(M,_){let U=n.get(M);if(M.isVideoTexture&&Vt(M),M.isRenderTargetTexture===!1&&M.version>0&&U.__version!==M.version){let q=M.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(U,M,_);return}}e.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+_)}function $(M,_){let U=n.get(M);if(M.version>0&&U.__version!==M.version){oe(U,M,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+_)}function j(M,_){let U=n.get(M);if(M.version>0&&U.__version!==M.version){oe(U,M,_);return}e.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+_)}function Z(M,_){let U=n.get(M);if(M.version>0&&U.__version!==M.version){G(U,M,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+_)}let z={[Dd]:i.REPEAT,[or]:i.CLAMP_TO_EDGE,[Pd]:i.MIRRORED_REPEAT},ht={[_n]:i.NEAREST,[qb]:i.NEAREST_MIPMAP_NEAREST,[ma]:i.NEAREST_MIPMAP_LINEAR,[En]:i.LINEAR,[Yl]:i.LINEAR_MIPMAP_NEAREST,[ar]:i.LINEAR_MIPMAP_LINEAR},gt={[d0]:i.NEVER,[g0]:i.ALWAYS,[u0]:i.LESS,[Xm]:i.LEQUAL,[h0]:i.EQUAL,[m0]:i.GEQUAL,[f0]:i.GREATER,[p0]:i.NOTEQUAL};function bt(M,_){if(_.type===Si&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===En||_.magFilter===Yl||_.magFilter===ma||_.magFilter===ar||_.minFilter===En||_.minFilter===Yl||_.minFilter===ma||_.minFilter===ar)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(M,i.TEXTURE_WRAP_S,z[_.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,z[_.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,z[_.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,ht[_.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,ht[_.minFilter]),_.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,gt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===_n||_.minFilter!==ma&&_.minFilter!==ar||_.type===Si&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let U=t.get("EXT_texture_filter_anisotropic");i.texParameterf(M,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Xt(M,_){let U=!1;M.__webglInit===void 0&&(M.__webglInit=!0,_.addEventListener("dispose",O));let q=_.source,K=h.get(q);K===void 0&&(K={},h.set(q,K));let J=B(_);if(J!==M.__cacheKey){K[J]===void 0&&(K[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,U=!0),K[J].usedTimes++;let wt=K[M.__cacheKey];wt!==void 0&&(K[M.__cacheKey].usedTimes--,wt.usedTimes===0&&k(_)),M.__cacheKey=J,M.__webglTexture=K[J].texture}return U}function oe(M,_,U){let q=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=i.TEXTURE_3D);let K=Xt(M,_),J=_.source;e.bindTexture(q,M.__webglTexture,i.TEXTURE0+U);let wt=n.get(J);if(J.version!==wt.__version||K===!0){e.activeTexture(i.TEXTURE0+U);let ot=se.getPrimaries(se.workingColorSpace),at=_.colorSpace===wi?null:se.getPrimaries(_.colorSpace),Ut=_.colorSpace===wi||ot===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);let tt=v(_.image,!1,r.maxTextureSize);tt=Pt(_,tt);let yt=s.convert(_.format,_.colorSpace),Gt=s.convert(_.type),Ct=E(_.internalFormat,yt,Gt,_.colorSpace,_.isVideoTexture);bt(q,_);let lt,Bt=_.mipmaps,jt=_.isVideoTexture!==!0,ye=wt.__version===void 0||K===!0,T=J.dataReady,dt=S(_,tt);if(_.isDepthTexture)Ct=x(_.format===ds,_.type),ye&&(jt?e.texStorage2D(i.TEXTURE_2D,1,Ct,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,Ct,tt.width,tt.height,0,yt,Gt,null));else if(_.isDataTexture)if(Bt.length>0){jt&&ye&&e.texStorage2D(i.TEXTURE_2D,dt,Ct,Bt[0].width,Bt[0].height);for(let V=0,X=Bt.length;V<X;V++)lt=Bt[V],jt?T&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,lt.width,lt.height,yt,Gt,lt.data):e.texImage2D(i.TEXTURE_2D,V,Ct,lt.width,lt.height,0,yt,Gt,lt.data);_.generateMipmaps=!1}else jt?(ye&&e.texStorage2D(i.TEXTURE_2D,dt,Ct,tt.width,tt.height),T&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt.width,tt.height,yt,Gt,tt.data)):e.texImage2D(i.TEXTURE_2D,0,Ct,tt.width,tt.height,0,yt,Gt,tt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){jt&&ye&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Ct,Bt[0].width,Bt[0].height,tt.depth);for(let V=0,X=Bt.length;V<X;V++)if(lt=Bt[V],_.format!==Fn)if(yt!==null)if(jt){if(T)if(_.layerUpdates.size>0){for(let nt of _.layerUpdates){let Rt=lt.width*lt.height;e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,nt,lt.width,lt.height,1,yt,lt.data.slice(Rt*nt,Rt*(nt+1)),0,0)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,lt.width,lt.height,tt.depth,yt,lt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,Ct,lt.width,lt.height,tt.depth,0,lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else jt?T&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,lt.width,lt.height,tt.depth,yt,Gt,lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,V,Ct,lt.width,lt.height,tt.depth,0,yt,Gt,lt.data)}else{jt&&ye&&e.texStorage2D(i.TEXTURE_2D,dt,Ct,Bt[0].width,Bt[0].height);for(let V=0,X=Bt.length;V<X;V++)lt=Bt[V],_.format!==Fn?yt!==null?jt?T&&e.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,lt.width,lt.height,yt,lt.data):e.compressedTexImage2D(i.TEXTURE_2D,V,Ct,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?T&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,lt.width,lt.height,yt,Gt,lt.data):e.texImage2D(i.TEXTURE_2D,V,Ct,lt.width,lt.height,0,yt,Gt,lt.data)}else if(_.isDataArrayTexture)if(jt){if(ye&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Ct,tt.width,tt.height,tt.depth),T)if(_.layerUpdates.size>0){let V;switch(Gt){case i.UNSIGNED_BYTE:switch(yt){case i.ALPHA:V=1;break;case i.LUMINANCE:V=1;break;case i.LUMINANCE_ALPHA:V=2;break;case i.RGB:V=3;break;case i.RGBA:V=4;break;default:throw new Error(`Unknown texel size for format ${yt}.`)}break;case i.UNSIGNED_SHORT_4_4_4_4:case i.UNSIGNED_SHORT_5_5_5_1:case i.UNSIGNED_SHORT_5_6_5:V=1;break;default:throw new Error(`Unknown texel size for type ${Gt}.`)}let X=tt.width*tt.height*V;for(let nt of _.layerUpdates)e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,nt,tt.width,tt.height,1,yt,Gt,tt.data.slice(X*nt,X*(nt+1)));_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,yt,Gt,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ct,tt.width,tt.height,tt.depth,0,yt,Gt,tt.data);else if(_.isData3DTexture)jt?(ye&&e.texStorage3D(i.TEXTURE_3D,dt,Ct,tt.width,tt.height,tt.depth),T&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,yt,Gt,tt.data)):e.texImage3D(i.TEXTURE_3D,0,Ct,tt.width,tt.height,tt.depth,0,yt,Gt,tt.data);else if(_.isFramebufferTexture){if(ye)if(jt)e.texStorage2D(i.TEXTURE_2D,dt,Ct,tt.width,tt.height);else{let V=tt.width,X=tt.height;for(let nt=0;nt<dt;nt++)e.texImage2D(i.TEXTURE_2D,nt,Ct,V,X,0,yt,Gt,null),V>>=1,X>>=1}}else if(Bt.length>0){if(jt&&ye){let V=Ae(Bt[0]);e.texStorage2D(i.TEXTURE_2D,dt,Ct,V.width,V.height)}for(let V=0,X=Bt.length;V<X;V++)lt=Bt[V],jt?T&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,yt,Gt,lt):e.texImage2D(i.TEXTURE_2D,V,Ct,yt,Gt,lt);_.generateMipmaps=!1}else if(jt){if(ye){let V=Ae(tt);e.texStorage2D(i.TEXTURE_2D,dt,Ct,V.width,V.height)}T&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,Gt,tt)}else e.texImage2D(i.TEXTURE_2D,0,Ct,yt,Gt,tt);p(_)&&f(q),wt.__version=J.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function G(M,_,U){if(_.image.length!==6)return;let q=Xt(M,_),K=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+U);let J=n.get(K);if(K.version!==J.__version||q===!0){e.activeTexture(i.TEXTURE0+U);let wt=se.getPrimaries(se.workingColorSpace),ot=_.colorSpace===wi?null:se.getPrimaries(_.colorSpace),at=_.colorSpace===wi||wt===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let Ut=_.isCompressedTexture||_.image[0].isCompressedTexture,tt=_.image[0]&&_.image[0].isDataTexture,yt=[];for(let X=0;X<6;X++)!Ut&&!tt?yt[X]=v(_.image[X],!0,r.maxCubemapSize):yt[X]=tt?_.image[X].image:_.image[X],yt[X]=Pt(_,yt[X]);let Gt=yt[0],Ct=s.convert(_.format,_.colorSpace),lt=s.convert(_.type),Bt=E(_.internalFormat,Ct,lt,_.colorSpace),jt=_.isVideoTexture!==!0,ye=J.__version===void 0||q===!0,T=K.dataReady,dt=S(_,Gt);bt(i.TEXTURE_CUBE_MAP,_);let V;if(Ut){jt&&ye&&e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,Bt,Gt.width,Gt.height);for(let X=0;X<6;X++){V=yt[X].mipmaps;for(let nt=0;nt<V.length;nt++){let Rt=V[nt];_.format!==Fn?Ct!==null?jt?T&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,nt,0,0,Rt.width,Rt.height,Ct,Rt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,nt,Bt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jt?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,nt,0,0,Rt.width,Rt.height,Ct,lt,Rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,nt,Bt,Rt.width,Rt.height,0,Ct,lt,Rt.data)}}}else{if(V=_.mipmaps,jt&&ye){V.length>0&&dt++;let X=Ae(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,Bt,X.width,X.height)}for(let X=0;X<6;X++)if(tt){jt?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,yt[X].width,yt[X].height,Ct,lt,yt[X].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Bt,yt[X].width,yt[X].height,0,Ct,lt,yt[X].data);for(let nt=0;nt<V.length;nt++){let Jt=V[nt].image[X].image;jt?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,nt+1,0,0,Jt.width,Jt.height,Ct,lt,Jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,nt+1,Bt,Jt.width,Jt.height,0,Ct,lt,Jt.data)}}else{jt?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Ct,lt,yt[X]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Bt,Ct,lt,yt[X]);for(let nt=0;nt<V.length;nt++){let Rt=V[nt];jt?T&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,nt+1,0,0,Ct,lt,Rt.image[X]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,nt+1,Bt,Ct,lt,Rt.image[X])}}}p(_)&&f(i.TEXTURE_CUBE_MAP),J.__version=K.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function Q(M,_,U,q,K,J){let wt=s.convert(U.format,U.colorSpace),ot=s.convert(U.type),at=E(U.internalFormat,wt,ot,U.colorSpace);if(!n.get(_).__hasExternalTextures){let tt=Math.max(1,_.width>>J),yt=Math.max(1,_.height>>J);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,J,at,tt,yt,_.depth,0,wt,ot,null):e.texImage2D(K,J,at,tt,yt,0,wt,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,M),Kt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,K,n.get(U).__webglTexture,0,Mt(_)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,K,n.get(U).__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(M,_,U){if(i.bindRenderbuffer(i.RENDERBUFFER,M),_.depthBuffer){let q=_.depthTexture,K=q&&q.isDepthTexture?q.type:null,J=x(_.stencilBuffer,K),wt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=Mt(_);Kt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,J,_.width,_.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,J,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,J,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,M)}else{let q=_.textures;for(let K=0;K<q.length;K++){let J=q[K],wt=s.convert(J.format,J.colorSpace),ot=s.convert(J.type),at=E(J.internalFormat,wt,ot,J.colorSpace),Ut=Mt(_);U&&Kt(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,at,_.width,_.height):Kt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ut,at,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,at,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ct(M,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,M),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Y(_.depthTexture,0);let q=n.get(_.depthTexture).__webglTexture,K=Mt(_);if(_.depthTexture.format===is)Kt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0);else if(_.depthTexture.format===ds)Kt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function zt(M){let _=n.get(M),U=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!_.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");ct(_.__webglFramebuffer,M)}else if(U){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]=i.createRenderbuffer(),pt(_.__webglDepthbuffer[q],M,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=i.createRenderbuffer(),pt(_.__webglDepthbuffer,M,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(M,_,U){let q=n.get(M);_!==void 0&&Q(q.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&zt(M)}function Yt(M){let _=M.texture,U=n.get(M),q=n.get(_);M.addEventListener("dispose",R);let K=M.textures,J=M.isWebGLCubeRenderTarget===!0,wt=K.length>1;if(wt||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=_.version,o.memory.textures++),J){U.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer[ot]=[];for(let at=0;at<_.mipmaps.length;at++)U.__webglFramebuffer[ot][at]=i.createFramebuffer()}else U.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer=[];for(let ot=0;ot<_.mipmaps.length;ot++)U.__webglFramebuffer[ot]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(wt)for(let ot=0,at=K.length;ot<at;ot++){let Ut=n.get(K[ot]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=i.createTexture(),o.memory.textures++)}if(M.samples>0&&Kt(M)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ot=0;ot<K.length;ot++){let at=K[ot];U.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[ot]);let Ut=s.convert(at.format,at.colorSpace),tt=s.convert(at.type),yt=E(at.internalFormat,Ut,tt,at.colorSpace,M.isXRRenderTarget===!0),Gt=Mt(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,yt,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,U.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),pt(U.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),bt(i.TEXTURE_CUBE_MAP,_);for(let ot=0;ot<6;ot++)if(_.mipmaps&&_.mipmaps.length>0)for(let at=0;at<_.mipmaps.length;at++)Q(U.__webglFramebuffer[ot][at],M,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,at);else Q(U.__webglFramebuffer[ot],M,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);p(_)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let ot=0,at=K.length;ot<at;ot++){let Ut=K[ot],tt=n.get(Ut);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture),bt(i.TEXTURE_2D,Ut),Q(U.__webglFramebuffer,M,Ut,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,0),p(Ut)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ot=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,q.__webglTexture),bt(ot,_),_.mipmaps&&_.mipmaps.length>0)for(let at=0;at<_.mipmaps.length;at++)Q(U.__webglFramebuffer[at],M,_,i.COLOR_ATTACHMENT0,ot,at);else Q(U.__webglFramebuffer,M,_,i.COLOR_ATTACHMENT0,ot,0);p(_)&&f(ot),e.unbindTexture()}M.depthBuffer&&zt(M)}function C(M){let _=M.textures;for(let U=0,q=_.length;U<q;U++){let K=_[U];if(p(K)){let J=M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,wt=n.get(K).__webglTexture;e.bindTexture(J,wt),f(J),e.unbindTexture()}}}let $t=[],Wt=[];function he(M){if(M.samples>0){if(Kt(M)===!1){let _=M.textures,U=M.width,q=M.height,K=i.COLOR_BUFFER_BIT,J=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(M),ot=_.length>1;if(ot)for(let at=0;at<_.length;at++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let at=0;at<_.length;at++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[at]);let Ut=n.get(_[at]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ut,0)}i.blitFramebuffer(0,0,U,q,0,0,U,q,K,i.NEAREST),c===!0&&($t.length=0,Wt.length=0,$t.push(i.COLOR_ATTACHMENT0+at),M.depthBuffer&&M.resolveDepthBuffer===!1&&($t.push(J),Wt.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Wt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$t))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let at=0;at<_.length;at++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,wt.__webglColorRenderbuffer[at]);let Ut=n.get(_[at]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,Ut,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&c){let _=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Mt(M){return Math.min(r.maxSamples,M.samples)}function Kt(M){let _=n.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Vt(M){let _=o.render.frame;d.get(M)!==_&&(d.set(M,_),M.update())}function Pt(M,_){let U=M.colorSpace,q=M.format,K=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||U!==Ii&&U!==wi&&(se.getTransfer(U)===le?(q!==Fn||K!==Ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),_}function Ae(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(l.width=M.naturalWidth||M.width,l.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(l.width=M.displayWidth,l.height=M.displayHeight):(l.width=M.width,l.height=M.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=I,this.setTexture2D=Y,this.setTexture2DArray=$,this.setTexture3D=j,this.setTextureCube=Z,this.rebindTextures=kt,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=C,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Kt}function rM(i,t){function e(n,r=wi){let s,o=se.getTransfer(r);if(n===Ti)return i.UNSIGNED_BYTE;if(n===Vm)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Hm)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Jb)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Zb)return i.BYTE;if(n===Kb)return i.SHORT;if(n===Va)return i.UNSIGNED_SHORT;if(n===zm)return i.INT;if(n===cs)return i.UNSIGNED_INT;if(n===Si)return i.FLOAT;if(n===hc)return i.HALF_FLOAT;if(n===Qb)return i.ALPHA;if(n===t0)return i.RGB;if(n===Fn)return i.RGBA;if(n===e0)return i.LUMINANCE;if(n===n0)return i.LUMINANCE_ALPHA;if(n===is)return i.DEPTH_COMPONENT;if(n===ds)return i.DEPTH_STENCIL;if(n===i0)return i.RED;if(n===Gm)return i.RED_INTEGER;if(n===r0)return i.RG;if(n===Wm)return i.RG_INTEGER;if(n===jm)return i.RGBA_INTEGER;if(n===ql||n===Zl||n===Kl||n===Jl)if(o===le)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ql)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Kl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Jl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ql)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Kl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Jl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vp||n===_p||n===bp||n===yp)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===vp)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_p)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bp)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yp)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xp||n===wp||n===Sp)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===xp||n===wp)return o===le?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Sp)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Mp||n===Ep||n===Ap||n===Tp||n===Cp||n===Rp||n===Ip||n===Dp||n===Pp||n===Lp||n===Op||n===Np||n===Fp||n===kp)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Mp)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ep)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ap)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Tp)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Cp)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rp)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ip)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Dp)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pp)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Lp)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Op)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Np)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fp)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===kp)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ql||n===Up||n===Bp)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Ql)return o===le?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Up)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===s0||n===zp||n===Vp||n===Hp)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ql)return s.COMPRESSED_RED_RGTC1_EXT;if(n===zp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vp)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Hp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ls?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var qd=class extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},es=class extends hr{constructor(){super(),this.isGroup=!0,this.type="Group"}},sM={type:"move"},eo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new es,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new es,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new es,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let v of t.hand.values()){let p=e.getJointPose(v,n),f=this._getHandJoint(l,v);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let d=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],h=d.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&h>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sM)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new es;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},oM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Zd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let r=new Di,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Un({vertexShader:oM,fragmentShader:aM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new An(new ic(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}},Kd=class extends Ci{constructor(t,e){super();let n=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,d=null,u=null,h=null,m=null,g=null,v=new Zd,p=e.getContextAttributes(),f=null,E=null,x=[],S=[],O=new ne,R=null,A=new je;A.layers.enable(1),A.viewport=new Ue;let k=new je;k.layers.enable(2),k.viewport=new Ue;let w=[A,k],y=new qd;y.layers.enable(1),y.layers.enable(2);let I=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Q=x[G];return Q===void 0&&(Q=new eo,x[G]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(G){let Q=x[G];return Q===void 0&&(Q=new eo,x[G]=Q),Q.getGripSpace()},this.getHand=function(G){let Q=x[G];return Q===void 0&&(Q=new eo,x[G]=Q),Q.getHandSpace()};function B(G){let Q=S.indexOf(G.inputSource);if(Q===-1)return;let pt=x[Q];pt!==void 0&&(pt.update(G.inputSource,G.frame,l||o),pt.dispatchEvent({type:G.type,data:G.inputSource}))}function Y(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",$);for(let G=0;G<x.length;G++){let Q=S[G];Q!==null&&(S[G]=null,x[G].disconnect(Q))}I=null,W=null,v.reset(),t.setRenderTarget(f),m=null,h=null,u=null,r=null,E=null,oe.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(G){return gr(this,null,function*(){if(r=G,r!==null){if(f=t.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&(yield e.makeXRCompatible()),R=t.getPixelRatio(),t.getSize(O),r.renderState.layers===void 0){let Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,Q),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new si(m.framebufferWidth,m.framebufferHeight,{format:Fn,type:Ti,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,pt=null,ct=null;p.depth&&(ct=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=p.stencil?ds:is,pt=p.stencil?ls:cs);let zt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:s};u=new XRWebGLBinding(r,e),h=u.createProjectionLayer(zt),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),E=new si(h.textureWidth,h.textureHeight,{format:Fn,type:Ti,depthTexture:new sc(h.textureWidth,h.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=yield r.requestReferenceSpace(a),oe.setContext(r),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function $(G){for(let Q=0;Q<G.removed.length;Q++){let pt=G.removed[Q],ct=S.indexOf(pt);ct>=0&&(S[ct]=null,x[ct].disconnect(pt))}for(let Q=0;Q<G.added.length;Q++){let pt=G.added[Q],ct=S.indexOf(pt);if(ct===-1){for(let kt=0;kt<x.length;kt++)if(kt>=S.length){S.push(pt),ct=kt;break}else if(S[kt]===null){S[kt]=pt,ct=kt;break}if(ct===-1)break}let zt=x[ct];zt&&zt.connect(pt)}}let j=new F,Z=new F;function z(G,Q,pt){j.setFromMatrixPosition(Q.matrixWorld),Z.setFromMatrixPosition(pt.matrixWorld);let ct=j.distanceTo(Z),zt=Q.projectionMatrix.elements,kt=pt.projectionMatrix.elements,Yt=zt[14]/(zt[10]-1),C=zt[14]/(zt[10]+1),$t=(zt[9]+1)/zt[5],Wt=(zt[9]-1)/zt[5],he=(zt[8]-1)/zt[0],Mt=(kt[8]+1)/kt[0],Kt=Yt*he,Vt=Yt*Mt,Pt=ct/(-he+Mt),Ae=Pt*-he;Q.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Ae),G.translateZ(Pt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();let M=Yt+Pt,_=C+Pt,U=Kt-Ae,q=Vt+(ct-Ae),K=$t*C/_*M,J=Wt*C/_*M;G.projectionMatrix.makePerspective(U,q,K,J,M,_),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function ht(G,Q){Q===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Q.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;v.texture!==null&&(G.near=v.depthNear,G.far=v.depthFar),y.near=k.near=A.near=G.near,y.far=k.far=A.far=G.far,(I!==y.near||W!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),I=y.near,W=y.far,A.near=I,A.far=W,k.near=I,k.far=W,A.updateProjectionMatrix(),k.updateProjectionMatrix(),G.updateProjectionMatrix());let Q=G.parent,pt=y.cameras;ht(y,Q);for(let ct=0;ct<pt.length;ct++)ht(pt[ct],Q);pt.length===2?z(y,A,k):y.projectionMatrix.copy(A.projectionMatrix),gt(G,y,Q)};function gt(G,Q,pt){pt===null?G.matrix.copy(Q.matrixWorld):(G.matrix.copy(pt.matrixWorld),G.matrix.invert(),G.matrix.multiply(Q.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Q.projectionMatrix),G.projectionMatrixInverse.copy(Q.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Od*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function(G){c=G,h!==null&&(h.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let bt=null;function Xt(G,Q){if(d=Q.getViewerPose(l||o),g=Q,d!==null){let pt=d.views;m!==null&&(t.setRenderTargetFramebuffer(E,m.framebuffer),t.setRenderTarget(E));let ct=!1;pt.length!==y.cameras.length&&(y.cameras.length=0,ct=!0);for(let kt=0;kt<pt.length;kt++){let Yt=pt[kt],C=null;if(m!==null)C=m.getViewport(Yt);else{let Wt=u.getViewSubImage(h,Yt);C=Wt.viewport,kt===0&&(t.setRenderTargetTextures(E,Wt.colorTexture,h.ignoreDepthValues?void 0:Wt.depthStencilTexture),t.setRenderTarget(E))}let $t=w[kt];$t===void 0&&($t=new je,$t.layers.enable(kt),$t.viewport=new Ue,w[kt]=$t),$t.matrix.fromArray(Yt.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(Yt.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(C.x,C.y,C.width,C.height),kt===0&&(y.matrix.copy($t.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ct===!0&&y.cameras.push($t)}let zt=r.enabledFeatures;if(zt&&zt.includes("depth-sensing")){let kt=u.getDepthInformation(pt[0]);kt&&kt.isValid&&kt.texture&&v.init(t,kt,r.renderState)}}for(let pt=0;pt<x.length;pt++){let ct=S[pt],zt=x[pt];ct!==null&&zt!==void 0&&zt.update(ct,Q,l||o)}bt&&bt(G,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let oe=new Km;oe.setAnimationLoop(Xt),this.setAnimationLoop=function(G){bt=G},this.dispose=function(){}}},nr=new hs,cM=new Ie;function lM(i,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Zm(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,E,x,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),u(p,f)):f.isMeshPhongMaterial?(s(p,f),d(p,f)):f.isMeshStandardMaterial?(s(p,f),h(p,f),f.isMeshPhysicalMaterial&&m(p,f,S)):f.isMeshMatcapMaterial?(s(p,f),g(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),v(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?c(p,f,E,x):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===tn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===tn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let E=t.get(f),x=E.envMap,S=E.envMapRotation;x&&(p.envMap.value=x,nr.copy(S),nr.x*=-1,nr.y*=-1,nr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(nr.y*=-1,nr.z*=-1),p.envMapRotation.value.setFromMatrix4(cM.makeRotationFromEuler(nr)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,E,x){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*E,p.scale.value=x*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function d(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,E){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===tn&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function v(p,f){let E=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function dM(i,t,e,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,x){let S=x.program;n.uniformBlockBinding(E,S)}function l(E,x){let S=r[E.id];S===void 0&&(g(E),S=d(E),r[E.id]=S,E.addEventListener("dispose",p));let O=x.program;n.updateUBOMapping(E,O);let R=t.render.frame;s[E.id]!==R&&(h(E),s[E.id]=R)}function d(E){let x=u();E.__bindingPointIndex=x;let S=i.createBuffer(),O=E.__size,R=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,O,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,S),S}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){let x=r[E.id],S=E.uniforms,O=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let R=0,A=S.length;R<A;R++){let k=Array.isArray(S[R])?S[R]:[S[R]];for(let w=0,y=k.length;w<y;w++){let I=k[w];if(m(I,R,w,O)===!0){let W=I.__offset,B=Array.isArray(I.value)?I.value:[I.value],Y=0;for(let $=0;$<B.length;$++){let j=B[$],Z=v(j);typeof j=="number"||typeof j=="boolean"?(I.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,W+Y,I.__data)):j.isMatrix3?(I.__data[0]=j.elements[0],I.__data[1]=j.elements[1],I.__data[2]=j.elements[2],I.__data[3]=0,I.__data[4]=j.elements[3],I.__data[5]=j.elements[4],I.__data[6]=j.elements[5],I.__data[7]=0,I.__data[8]=j.elements[6],I.__data[9]=j.elements[7],I.__data[10]=j.elements[8],I.__data[11]=0):(j.toArray(I.__data,Y),Y+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,x,S,O){let R=E.value,A=x+"_"+S;if(O[A]===void 0)return typeof R=="number"||typeof R=="boolean"?O[A]=R:O[A]=R.clone(),!0;{let k=O[A];if(typeof R=="number"||typeof R=="boolean"){if(k!==R)return O[A]=R,!0}else if(k.equals(R)===!1)return k.copy(R),!0}return!1}function g(E){let x=E.uniforms,S=0,O=16;for(let A=0,k=x.length;A<k;A++){let w=Array.isArray(x[A])?x[A]:[x[A]];for(let y=0,I=w.length;y<I;y++){let W=w[y],B=Array.isArray(W.value)?W.value:[W.value];for(let Y=0,$=B.length;Y<$;Y++){let j=B[Y],Z=v(j),z=S%O;z!==0&&O-z<Z.boundary&&(S+=O-z),W.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=S,S+=Z.storage}}}let R=S%O;return R>0&&(S+=O-R),E.__size=S,E.__cache={},this}function v(E){let x={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),x}function p(E){let x=E.target;x.removeEventListener("dispose",p);let S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function f(){for(let E in r)i.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:c,update:l,dispose:f}}var oc=class{constructor(t={}){let{canvas:e=_0(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;let m=new Uint32Array(4),g=new Int32Array(4),v=null,p=null,f=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=On,this.toneMapping=Ei,this.toneMappingExposure=1;let x=this,S=!1,O=0,R=0,A=null,k=-1,w=null,y=new Ue,I=new Ue,W=null,B=new Qt(0),Y=0,$=e.width,j=e.height,Z=1,z=null,ht=null,gt=new Ue(0,0,$,j),bt=new Ue(0,0,$,j),Xt=!1,oe=new nc,G=!1,Q=!1,pt=new Ie,ct=new F,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},kt=!1;function Yt(){return A===null?Z:1}let C=n;function $t(b,D){return e.getContext(b,D)}try{let b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${lu}`),e.addEventListener("webglcontextlost",dt,!1),e.addEventListener("webglcontextrestored",V,!1),e.addEventListener("webglcontextcreationerror",X,!1),C===null){let D="webgl2";if(C=$t(D,b),C===null)throw $t(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Wt,he,Mt,Kt,Vt,Pt,Ae,M,_,U,q,K,J,wt,ot,at,Ut,tt,yt,Gt,Ct,lt,Bt,jt;function ye(){Wt=new Rw(C),Wt.init(),lt=new rM(C,Wt),he=new Sw(C,Wt,t,lt),Mt=new nM(C),Kt=new Pw(C),Vt=new WS,Pt=new iM(C,Wt,Mt,Vt,he,lt,Kt),Ae=new Ew(x),M=new Cw(x),_=new B0(C),Bt=new xw(C,_),U=new Iw(C,_,Kt,Bt),q=new Ow(C,U,_,Kt),yt=new Lw(C,he,Pt),at=new Mw(Vt),K=new GS(x,Ae,M,Wt,he,Bt,at),J=new lM(x,Vt),wt=new XS,ot=new JS(Wt),tt=new yw(x,Ae,M,Mt,q,h,c),Ut=new eM(x,q,he),jt=new dM(C,Kt,he,Mt),Gt=new ww(C,Wt,Kt),Ct=new Dw(C,Wt,Kt),Kt.programs=K.programs,x.capabilities=he,x.extensions=Wt,x.properties=Vt,x.renderLists=wt,x.shadowMap=Ut,x.state=Mt,x.info=Kt}ye();let T=new Kd(x,C);this.xr=T,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let b=Wt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Wt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(b){b!==void 0&&(Z=b,this.setSize($,j,!1))},this.getSize=function(b){return b.set($,j)},this.setSize=function(b,D,L=!0){if(T.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=b,j=D,e.width=Math.floor(b*Z),e.height=Math.floor(D*Z),L===!0&&(e.style.width=b+"px",e.style.height=D+"px"),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set($*Z,j*Z).floor()},this.setDrawingBufferSize=function(b,D,L){$=b,j=D,Z=L,e.width=Math.floor(b*L),e.height=Math.floor(D*L),this.setViewport(0,0,b,D)},this.getCurrentViewport=function(b){return b.copy(y)},this.getViewport=function(b){return b.copy(gt)},this.setViewport=function(b,D,L,N){b.isVector4?gt.set(b.x,b.y,b.z,b.w):gt.set(b,D,L,N),Mt.viewport(y.copy(gt).multiplyScalar(Z).round())},this.getScissor=function(b){return b.copy(bt)},this.setScissor=function(b,D,L,N){b.isVector4?bt.set(b.x,b.y,b.z,b.w):bt.set(b,D,L,N),Mt.scissor(I.copy(bt).multiplyScalar(Z).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(b){Mt.setScissorTest(Xt=b)},this.setOpaqueSort=function(b){z=b},this.setTransparentSort=function(b){ht=b},this.getClearColor=function(b){return b.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(b=!0,D=!0,L=!0){let N=0;if(b){let P=!1;if(A!==null){let et=A.texture.format;P=et===jm||et===Wm||et===Gm}if(P){let et=A.texture.type,ut=et===Ti||et===cs||et===Va||et===ls||et===Vm||et===Hm,ft=tt.getClearColor(),vt=tt.getClearAlpha(),Et=ft.r,Tt=ft.g,St=ft.b;ut?(m[0]=Et,m[1]=Tt,m[2]=St,m[3]=vt,C.clearBufferuiv(C.COLOR,0,m)):(g[0]=Et,g[1]=Tt,g[2]=St,g[3]=vt,C.clearBufferiv(C.COLOR,0,g))}else N|=C.COLOR_BUFFER_BIT}D&&(N|=C.DEPTH_BUFFER_BIT),L&&(N|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",dt,!1),e.removeEventListener("webglcontextrestored",V,!1),e.removeEventListener("webglcontextcreationerror",X,!1),wt.dispose(),ot.dispose(),Vt.dispose(),Ae.dispose(),M.dispose(),q.dispose(),Bt.dispose(),jt.dispose(),K.dispose(),T.dispose(),T.removeEventListener("sessionstart",Cn),T.removeEventListener("sessionend",Rn),ki.stop()};function dt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let b=Kt.autoReset,D=Ut.enabled,L=Ut.autoUpdate,N=Ut.needsUpdate,P=Ut.type;ye(),Kt.autoReset=b,Ut.enabled=D,Ut.autoUpdate=L,Ut.needsUpdate=N,Ut.type=P}function X(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function nt(b){let D=b.target;D.removeEventListener("dispose",nt),Rt(D)}function Rt(b){Jt(b),Vt.remove(b)}function Jt(b){let D=Vt.get(b).programs;D!==void 0&&(D.forEach(function(L){K.releaseProgram(L)}),b.isShaderMaterial&&K.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,L,N,P,et){D===null&&(D=zt);let ut=P.isMesh&&P.matrixWorld.determinant()<0,ft=qg(b,D,L,N,P);Mt.setMaterial(N,ut);let vt=L.index,Et=1;if(N.wireframe===!0){if(vt=U.getWireframeAttribute(L),vt===void 0)return;Et=2}let Tt=L.drawRange,St=L.attributes.position,te=Tt.start*Et,pe=(Tt.start+Tt.count)*Et;et!==null&&(te=Math.max(te,et.start*Et),pe=Math.min(pe,(et.start+et.count)*Et)),vt!==null?(te=Math.max(te,0),pe=Math.min(pe,vt.count)):St!=null&&(te=Math.max(te,0),pe=Math.min(pe,St.count));let me=pe-te;if(me<0||me===1/0)return;Bt.setup(P,N,ft,L,vt);let nn,re=Gt;if(vt!==null&&(nn=_.get(vt),re=Ct,re.setIndex(nn)),P.isMesh)N.wireframe===!0?(Mt.setLineWidth(N.wireframeLinewidth*Yt()),re.setMode(C.LINES)):re.setMode(C.TRIANGLES);else if(P.isLine){let xt=N.linewidth;xt===void 0&&(xt=1),Mt.setLineWidth(xt*Yt()),P.isLineSegments?re.setMode(C.LINES):P.isLineLoop?re.setMode(C.LINE_LOOP):re.setMode(C.LINE_STRIP)}else P.isPoints?re.setMode(C.POINTS):P.isSprite&&re.setMode(C.TRIANGLES);if(P.isBatchedMesh)P._multiDrawInstances!==null?re.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances):re.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else if(P.isInstancedMesh)re.renderInstances(te,me,P.count);else if(L.isInstancedBufferGeometry){let xt=L._maxInstanceCount!==void 0?L._maxInstanceCount:1/0,Ve=Math.min(L.instanceCount,xt);re.renderInstances(te,me,Ve)}else re.render(te,me)};function xe(b,D,L){b.transparent===!0&&b.side===ni&&b.forceSinglePass===!1?(b.side=tn,b.needsUpdate=!0,Ro(b,D,L),b.side=Ai,b.needsUpdate=!0,Ro(b,D,L),b.side=ni):Ro(b,D,L)}this.compile=function(b,D,L=null){L===null&&(L=b),p=ot.get(L),p.init(D),E.push(p),L.traverseVisible(function(P){P.isLight&&P.layers.test(D.layers)&&(p.pushLight(P),P.castShadow&&p.pushShadow(P))}),b!==L&&b.traverseVisible(function(P){P.isLight&&P.layers.test(D.layers)&&(p.pushLight(P),P.castShadow&&p.pushShadow(P))}),p.setupLights();let N=new Set;return b.traverse(function(P){let et=P.material;if(et)if(Array.isArray(et))for(let ut=0;ut<et.length;ut++){let ft=et[ut];xe(ft,L,P),N.add(ft)}else xe(et,L,P),N.add(et)}),E.pop(),p=null,N},this.compileAsync=function(b,D,L=null){let N=this.compile(b,D,L);return new Promise(P=>{function et(){if(N.forEach(function(ut){Vt.get(ut).currentProgram.isReady()&&N.delete(ut)}),N.size===0){P(b);return}setTimeout(et,10)}Wt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let Le=null;function ae(b){Le&&Le(b)}function Cn(){ki.stop()}function Rn(){ki.start()}let ki=new Km;ki.setAnimationLoop(ae),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(b){Le=b,T.setAnimationLoop(b),b===null?ki.stop():ki.start()},T.addEventListener("sessionstart",Cn),T.addEventListener("sessionend",Rn),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),T.enabled===!0&&T.isPresenting===!0&&(T.cameraAutoUpdate===!0&&T.updateCamera(D),D=T.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,D,A),p=ot.get(b,E.length),p.init(D),E.push(p),pt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),oe.setFromProjectionMatrix(pt),Q=this.localClippingEnabled,G=at.init(this.clippingPlanes,Q),v=wt.get(b,f.length),v.init(),f.push(v),T.enabled===!0&&T.isPresenting===!0){let et=x.xr.getDepthSensingMesh();et!==null&&Nc(et,D,-1/0,x.sortObjects)}Nc(b,D,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(z,ht),kt=T.enabled===!1||T.isPresenting===!1||T.hasDepthSensing()===!1,kt&&tt.addToRenderList(v,b),this.info.render.frame++,G===!0&&at.beginShadows();let L=p.state.shadowsArray;Ut.render(L,b,D),G===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();let N=v.opaque,P=v.transmissive;if(p.setupLights(),D.isArrayCamera){let et=D.cameras;if(P.length>0)for(let ut=0,ft=et.length;ut<ft;ut++){let vt=et[ut];Qu(N,P,b,vt)}kt&&tt.render(b);for(let ut=0,ft=et.length;ut<ft;ut++){let vt=et[ut];Ju(v,b,vt,vt.viewport)}}else P.length>0&&Qu(N,P,b,D),kt&&tt.render(b),Ju(v,b,D);A!==null&&(Pt.updateMultisampleRenderTarget(A),Pt.updateRenderTargetMipmap(A)),b.isScene===!0&&b.onAfterRender(x,b,D),Bt.resetDefaultState(),k=-1,w=null,E.pop(),E.length>0?(p=E[E.length-1],G===!0&&at.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function Nc(b,D,L,N){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)L=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||oe.intersectsSprite(b)){N&&ct.setFromMatrixPosition(b.matrixWorld).applyMatrix4(pt);let ut=q.update(b),ft=b.material;ft.visible&&v.push(b,ut,ft,L,ct.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||oe.intersectsObject(b))){let ut=q.update(b),ft=b.material;if(N&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ct.copy(b.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),ct.copy(ut.boundingSphere.center)),ct.applyMatrix4(b.matrixWorld).applyMatrix4(pt)),Array.isArray(ft)){let vt=ut.groups;for(let Et=0,Tt=vt.length;Et<Tt;Et++){let St=vt[Et],te=ft[St.materialIndex];te&&te.visible&&v.push(b,ut,te,L,ct.z,St)}}else ft.visible&&v.push(b,ut,ft,L,ct.z,null)}}let et=b.children;for(let ut=0,ft=et.length;ut<ft;ut++)Nc(et[ut],D,L,N)}function Ju(b,D,L,N){let P=b.opaque,et=b.transmissive,ut=b.transparent;p.setupLightsView(L),G===!0&&at.setGlobalState(x.clippingPlanes,L),N&&Mt.viewport(y.copy(N)),P.length>0&&Co(P,D,L),et.length>0&&Co(et,D,L),ut.length>0&&Co(ut,D,L),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function Qu(b,D,L,N){if((L.isScene===!0?L.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[N.id]===void 0&&(p.state.transmissionRenderTarget[N.id]=new si(1,1,{generateMipmaps:!0,type:Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float")?hc:Ti,minFilter:ar,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:se.workingColorSpace}));let et=p.state.transmissionRenderTarget[N.id],ut=N.viewport||y;et.setSize(ut.z,ut.w);let ft=x.getRenderTarget();x.setRenderTarget(et),x.getClearColor(B),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),kt?tt.render(L):x.clear();let vt=x.toneMapping;x.toneMapping=Ei;let Et=N.viewport;if(N.viewport!==void 0&&(N.viewport=void 0),p.setupLightsView(N),G===!0&&at.setGlobalState(x.clippingPlanes,N),Co(b,L,N),Pt.updateMultisampleRenderTarget(et),Pt.updateRenderTargetMipmap(et),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let St=0,te=D.length;St<te;St++){let pe=D[St],me=pe.object,nn=pe.geometry,re=pe.material,xt=pe.group;if(re.side===ni&&me.layers.test(N.layers)){let Ve=re.side;re.side=tn,re.needsUpdate=!0,th(me,L,N,nn,re,xt),re.side=Ve,re.needsUpdate=!0,Tt=!0}}Tt===!0&&(Pt.updateMultisampleRenderTarget(et),Pt.updateRenderTargetMipmap(et))}x.setRenderTarget(ft),x.setClearColor(B,Y),Et!==void 0&&(N.viewport=Et),x.toneMapping=vt}function Co(b,D,L){let N=D.isScene===!0?D.overrideMaterial:null;for(let P=0,et=b.length;P<et;P++){let ut=b[P],ft=ut.object,vt=ut.geometry,Et=N===null?ut.material:N,Tt=ut.group;ft.layers.test(L.layers)&&th(ft,D,L,vt,Et,Tt)}}function th(b,D,L,N,P,et){b.onBeforeRender(x,D,L,N,P,et),b.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),P.onBeforeRender(x,D,L,N,b,et),P.transparent===!0&&P.side===ni&&P.forceSinglePass===!1?(P.side=tn,P.needsUpdate=!0,x.renderBufferDirect(L,D,N,P,b,et),P.side=Ai,P.needsUpdate=!0,x.renderBufferDirect(L,D,N,P,b,et),P.side=ni):x.renderBufferDirect(L,D,N,P,b,et),b.onAfterRender(x,D,L,N,P,et)}function Ro(b,D,L){D.isScene!==!0&&(D=zt);let N=Vt.get(b),P=p.state.lights,et=p.state.shadowsArray,ut=P.state.version,ft=K.getParameters(b,P.state,et,D,L),vt=K.getProgramCacheKey(ft),Et=N.programs;N.environment=b.isMeshStandardMaterial?D.environment:null,N.fog=D.fog,N.envMap=(b.isMeshStandardMaterial?M:Ae).get(b.envMap||N.environment),N.envMapRotation=N.environment!==null&&b.envMap===null?D.environmentRotation:b.envMapRotation,Et===void 0&&(b.addEventListener("dispose",nt),Et=new Map,N.programs=Et);let Tt=Et.get(vt);if(Tt!==void 0){if(N.currentProgram===Tt&&N.lightsStateVersion===ut)return nh(b,ft),Tt}else ft.uniforms=K.getUniforms(b),b.onBuild(L,ft,x),b.onBeforeCompile(ft,x),Tt=K.acquireProgram(ft,vt),Et.set(vt,Tt),N.uniforms=ft.uniforms;let St=N.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(St.clippingPlanes=at.uniform),nh(b,ft),N.needsLights=Kg(b),N.lightsStateVersion=ut,N.needsLights&&(St.ambientLightColor.value=P.state.ambient,St.lightProbe.value=P.state.probe,St.directionalLights.value=P.state.directional,St.directionalLightShadows.value=P.state.directionalShadow,St.spotLights.value=P.state.spot,St.spotLightShadows.value=P.state.spotShadow,St.rectAreaLights.value=P.state.rectArea,St.ltc_1.value=P.state.rectAreaLTC1,St.ltc_2.value=P.state.rectAreaLTC2,St.pointLights.value=P.state.point,St.pointLightShadows.value=P.state.pointShadow,St.hemisphereLights.value=P.state.hemi,St.directionalShadowMap.value=P.state.directionalShadowMap,St.directionalShadowMatrix.value=P.state.directionalShadowMatrix,St.spotShadowMap.value=P.state.spotShadowMap,St.spotLightMatrix.value=P.state.spotLightMatrix,St.spotLightMap.value=P.state.spotLightMap,St.pointShadowMap.value=P.state.pointShadowMap,St.pointShadowMatrix.value=P.state.pointShadowMatrix),N.currentProgram=Tt,N.uniformsList=null,Tt}function eh(b){if(b.uniformsList===null){let D=b.currentProgram.getUniforms();b.uniformsList=ss.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function nh(b,D){let L=Vt.get(b);L.outputColorSpace=D.outputColorSpace,L.batching=D.batching,L.batchingColor=D.batchingColor,L.instancing=D.instancing,L.instancingColor=D.instancingColor,L.instancingMorph=D.instancingMorph,L.skinning=D.skinning,L.morphTargets=D.morphTargets,L.morphNormals=D.morphNormals,L.morphColors=D.morphColors,L.morphTargetsCount=D.morphTargetsCount,L.numClippingPlanes=D.numClippingPlanes,L.numIntersection=D.numClipIntersection,L.vertexAlphas=D.vertexAlphas,L.vertexTangents=D.vertexTangents,L.toneMapping=D.toneMapping}function qg(b,D,L,N,P){D.isScene!==!0&&(D=zt),Pt.resetTextureUnits();let et=D.fog,ut=N.isMeshStandardMaterial?D.environment:null,ft=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ii,vt=(N.isMeshStandardMaterial?M:Ae).get(N.envMap||ut),Et=N.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,Tt=!!L.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),St=!!L.morphAttributes.position,te=!!L.morphAttributes.normal,pe=!!L.morphAttributes.color,me=Ei;N.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(me=x.toneMapping);let nn=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,re=nn!==void 0?nn.length:0,xt=Vt.get(N),Ve=p.state.lights;if(G===!0&&(Q===!0||b!==w)){let fn=b===w&&N.id===k;at.setState(N,b,fn)}let ce=!1;N.version===xt.__version?(xt.needsLights&&xt.lightsStateVersion!==Ve.state.version||xt.outputColorSpace!==ft||P.isBatchedMesh&&xt.batching===!1||!P.isBatchedMesh&&xt.batching===!0||P.isBatchedMesh&&xt.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&xt.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&xt.instancing===!1||!P.isInstancedMesh&&xt.instancing===!0||P.isSkinnedMesh&&xt.skinning===!1||!P.isSkinnedMesh&&xt.skinning===!0||P.isInstancedMesh&&xt.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&xt.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&xt.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&xt.instancingMorph===!1&&P.morphTexture!==null||xt.envMap!==vt||N.fog===!0&&xt.fog!==et||xt.numClippingPlanes!==void 0&&(xt.numClippingPlanes!==at.numPlanes||xt.numIntersection!==at.numIntersection)||xt.vertexAlphas!==Et||xt.vertexTangents!==Tt||xt.morphTargets!==St||xt.morphNormals!==te||xt.morphColors!==pe||xt.toneMapping!==me||xt.morphTargetsCount!==re)&&(ce=!0):(ce=!0,xt.__version=N.version);let Hn=xt.currentProgram;ce===!0&&(Hn=Ro(N,D,P));let Io=!1,Ui=!1,Fc=!1,Oe=Hn.getUniforms(),oi=xt.uniforms;if(Mt.useProgram(Hn.program)&&(Io=!0,Ui=!0,Fc=!0),N.id!==k&&(k=N.id,Ui=!0),Io||w!==b){Oe.setValue(C,"projectionMatrix",b.projectionMatrix),Oe.setValue(C,"viewMatrix",b.matrixWorldInverse);let fn=Oe.map.cameraPosition;fn!==void 0&&fn.setValue(C,ct.setFromMatrixPosition(b.matrixWorld)),he.logarithmicDepthBuffer&&Oe.setValue(C,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&Oe.setValue(C,"isOrthographic",b.isOrthographicCamera===!0),w!==b&&(w=b,Ui=!0,Fc=!0)}if(P.isSkinnedMesh){Oe.setOptional(C,P,"bindMatrix"),Oe.setOptional(C,P,"bindMatrixInverse");let fn=P.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),Oe.setValue(C,"boneTexture",fn.boneTexture,Pt))}P.isBatchedMesh&&(Oe.setOptional(C,P,"batchingTexture"),Oe.setValue(C,"batchingTexture",P._matricesTexture,Pt),Oe.setOptional(C,P,"batchingColorTexture"),P._colorsTexture!==null&&Oe.setValue(C,"batchingColorTexture",P._colorsTexture,Pt));let kc=L.morphAttributes;if((kc.position!==void 0||kc.normal!==void 0||kc.color!==void 0)&&yt.update(P,L,Hn),(Ui||xt.receiveShadow!==P.receiveShadow)&&(xt.receiveShadow=P.receiveShadow,Oe.setValue(C,"receiveShadow",P.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(oi.envMap.value=vt,oi.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),N.isMeshStandardMaterial&&N.envMap===null&&D.environment!==null&&(oi.envMapIntensity.value=D.environmentIntensity),Ui&&(Oe.setValue(C,"toneMappingExposure",x.toneMappingExposure),xt.needsLights&&Zg(oi,Fc),et&&N.fog===!0&&J.refreshFogUniforms(oi,et),J.refreshMaterialUniforms(oi,N,Z,j,p.state.transmissionRenderTarget[b.id]),ss.upload(C,eh(xt),oi,Pt)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(ss.upload(C,eh(xt),oi,Pt),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&Oe.setValue(C,"center",P.center),Oe.setValue(C,"modelViewMatrix",P.modelViewMatrix),Oe.setValue(C,"normalMatrix",P.normalMatrix),Oe.setValue(C,"modelMatrix",P.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){let fn=N.uniformsGroups;for(let Uc=0,Jg=fn.length;Uc<Jg;Uc++){let ih=fn[Uc];jt.update(ih,Hn),jt.bind(ih,Hn)}}return Hn}function Zg(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function Kg(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(b,D,L){Vt.get(b.texture).__webglTexture=D,Vt.get(b.depthTexture).__webglTexture=L;let N=Vt.get(b);N.__hasExternalTextures=!0,N.__autoAllocateDepthBuffer=L===void 0,N.__autoAllocateDepthBuffer||Wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,D){let L=Vt.get(b);L.__webglFramebuffer=D,L.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,L=0){A=b,O=D,R=L;let N=!0,P=null,et=!1,ut=!1;if(b){let vt=Vt.get(b);vt.__useDefaultFramebuffer!==void 0?(Mt.bindFramebuffer(C.FRAMEBUFFER,null),N=!1):vt.__webglFramebuffer===void 0?Pt.setupRenderTarget(b):vt.__hasExternalTextures&&Pt.rebindTextures(b,Vt.get(b.texture).__webglTexture,Vt.get(b.depthTexture).__webglTexture);let Et=b.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(ut=!0);let Tt=Vt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Tt[D])?P=Tt[D][L]:P=Tt[D],et=!0):b.samples>0&&Pt.useMultisampledRTT(b)===!1?P=Vt.get(b).__webglMultisampledFramebuffer:Array.isArray(Tt)?P=Tt[L]:P=Tt,y.copy(b.viewport),I.copy(b.scissor),W=b.scissorTest}else y.copy(gt).multiplyScalar(Z).floor(),I.copy(bt).multiplyScalar(Z).floor(),W=Xt;if(Mt.bindFramebuffer(C.FRAMEBUFFER,P)&&N&&Mt.drawBuffers(b,P),Mt.viewport(y),Mt.scissor(I),Mt.setScissorTest(W),et){let vt=Vt.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+D,vt.__webglTexture,L)}else if(ut){let vt=Vt.get(b.texture),Et=D||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,vt.__webglTexture,L||0,Et)}k=-1},this.readRenderTargetPixels=function(b,D,L,N,P,et,ut){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ft=Vt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ut!==void 0&&(ft=ft[ut]),ft){Mt.bindFramebuffer(C.FRAMEBUFFER,ft);try{let vt=b.texture,Et=vt.format,Tt=vt.type;if(!he.textureFormatReadable(Et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(Tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-N&&L>=0&&L<=b.height-P&&C.readPixels(D,L,N,P,lt.convert(Et),lt.convert(Tt),et)}finally{let vt=A!==null?Vt.get(A).__webglFramebuffer:null;Mt.bindFramebuffer(C.FRAMEBUFFER,vt)}}},this.readRenderTargetPixelsAsync=function(b,D,L,N,P,et,ut){return gr(this,null,function*(){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ft=Vt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ut!==void 0&&(ft=ft[ut]),ft){Mt.bindFramebuffer(C.FRAMEBUFFER,ft);try{let vt=b.texture,Et=vt.format,Tt=vt.type;if(!he.textureFormatReadable(Et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=b.width-N&&L>=0&&L<=b.height-P){let St=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,St),C.bufferData(C.PIXEL_PACK_BUFFER,et.byteLength,C.STREAM_READ),C.readPixels(D,L,N,P,lt.convert(Et),lt.convert(Tt),0),C.flush();let te=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);yield b0(C,te,4);try{C.bindBuffer(C.PIXEL_PACK_BUFFER,St),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,et)}finally{C.deleteBuffer(St),C.deleteSync(te)}return et}}finally{let vt=A!==null?Vt.get(A).__webglFramebuffer:null;Mt.bindFramebuffer(C.FRAMEBUFFER,vt)}}})},this.copyFramebufferToTexture=function(b,D=null,L=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,b=arguments[1]);let N=Math.pow(2,-L),P=Math.floor(b.image.width*N),et=Math.floor(b.image.height*N),ut=D!==null?D.x:0,ft=D!==null?D.y:0;Pt.setTexture2D(b,0),C.copyTexSubImage2D(C.TEXTURE_2D,L,0,0,ut,ft,P,et),Mt.unbindTexture()},this.copyTextureToTexture=function(b,D,L=null,N=null,P=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),N=arguments[0]||null,b=arguments[1],D=arguments[2],P=arguments[3]||0,L=null);let et,ut,ft,vt,Et,Tt;L!==null?(et=L.max.x-L.min.x,ut=L.max.y-L.min.y,ft=L.min.x,vt=L.min.y):(et=b.image.width,ut=b.image.height,ft=0,vt=0),N!==null?(Et=N.x,Tt=N.y):(Et=0,Tt=0);let St=lt.convert(D.format),te=lt.convert(D.type);Pt.setTexture2D(D,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,D.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,D.unpackAlignment);let pe=C.getParameter(C.UNPACK_ROW_LENGTH),me=C.getParameter(C.UNPACK_IMAGE_HEIGHT),nn=C.getParameter(C.UNPACK_SKIP_PIXELS),re=C.getParameter(C.UNPACK_SKIP_ROWS),xt=C.getParameter(C.UNPACK_SKIP_IMAGES),Ve=b.isCompressedTexture?b.mipmaps[P]:b.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,Ve.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ve.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ft),C.pixelStorei(C.UNPACK_SKIP_ROWS,vt),b.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,P,Et,Tt,et,ut,St,te,Ve.data):b.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,P,Et,Tt,Ve.width,Ve.height,St,Ve.data):C.texSubImage2D(C.TEXTURE_2D,P,Et,Tt,St,te,Ve),C.pixelStorei(C.UNPACK_ROW_LENGTH,pe),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,me),C.pixelStorei(C.UNPACK_SKIP_PIXELS,nn),C.pixelStorei(C.UNPACK_SKIP_ROWS,re),C.pixelStorei(C.UNPACK_SKIP_IMAGES,xt),P===0&&D.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),Mt.unbindTexture()},this.copyTextureToTexture3D=function(b,D,L=null,N=null,P=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),L=arguments[0]||null,N=arguments[1]||null,b=arguments[2],D=arguments[3],P=arguments[4]||0);let et,ut,ft,vt,Et,Tt,St,te,pe,me=b.isCompressedTexture?b.mipmaps[P]:b.image;L!==null?(et=L.max.x-L.min.x,ut=L.max.y-L.min.y,ft=L.max.z-L.min.z,vt=L.min.x,Et=L.min.y,Tt=L.min.z):(et=me.width,ut=me.height,ft=me.depth,vt=0,Et=0,Tt=0),N!==null?(St=N.x,te=N.y,pe=N.z):(St=0,te=0,pe=0);let nn=lt.convert(D.format),re=lt.convert(D.type),xt;if(D.isData3DTexture)Pt.setTexture3D(D,0),xt=C.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)Pt.setTexture2DArray(D,0),xt=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,D.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,D.unpackAlignment);let Ve=C.getParameter(C.UNPACK_ROW_LENGTH),ce=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Hn=C.getParameter(C.UNPACK_SKIP_PIXELS),Io=C.getParameter(C.UNPACK_SKIP_ROWS),Ui=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,me.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,me.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,vt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Et),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Tt),b.isDataTexture||b.isData3DTexture?C.texSubImage3D(xt,P,St,te,pe,et,ut,ft,nn,re,me.data):D.isCompressedArrayTexture?C.compressedTexSubImage3D(xt,P,St,te,pe,et,ut,ft,nn,me.data):C.texSubImage3D(xt,P,St,te,pe,et,ut,ft,nn,re,me),C.pixelStorei(C.UNPACK_ROW_LENGTH,Ve),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ce),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Hn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Io),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ui),P===0&&D.generateMipmaps&&C.generateMipmap(xt),Mt.unbindTexture()},this.initRenderTarget=function(b){Vt.get(b).__webglFramebuffer===void 0&&Pt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Pt.setTextureCube(b,0):b.isData3DTexture?Pt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Pt.setTexture2DArray(b,0):Pt.setTexture2D(b,0),Mt.unbindTexture()},this.resetState=function(){O=0,R=0,A=null,Mt.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===du?"display-p3":"srgb",e.unpackColorSpace=se.workingColorSpace===fc?"display-p3":"srgb"}};var ac=class extends hr{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hs,this.environmentIntensity=1,this.environmentRotation=new hs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var ro=class extends lr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Nm=new Ie,Jd=new qa,ka=new us,Ua=new F,cc=class extends hr{constructor(t=new kn,e=new ro){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ka.copy(n.boundingSphere),ka.applyMatrix4(r),ka.radius+=s,t.ray.intersectsSphere(ka)===!1)return;Nm.copy(r).invert(),Jd.copy(t.ray).applyMatrix4(Nm);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let h=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let g=h,v=m;g<v;g++){let p=l.getX(g);Ua.fromBufferAttribute(u,p),Fm(Ua,p,c,r,t,e,this)}}else{let h=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=h,v=m;g<v;g++)Ua.fromBufferAttribute(u,g),Fm(Ua,g,c,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Fm(i,t,e,n,r,s,o){let a=Jd.distanceSqToPoint(i);if(a<e){let c=new F;Jd.closestPointToPoint(i,c),c.applyMatrix4(n);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}function Ba(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function uM(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ps=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Qd=class extends ps{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gp,endingEnd:Gp}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Wp:s=t,a=2*e-n;break;case jp:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Wp:o=t,c=2*n-e;break;case jp:o=1,c=n+r[1]-r[0];break;default:o=t-1,c=e}let l=(n-e)*.5,d=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=s*d,this._offsetNext=o*d}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,d=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,m=this._weightNext,g=(n-e)/(r-e),v=g*g,p=v*g,f=-h*p+2*h*v-h*g,E=(1+h)*p+(-1.5-2*h)*v+(-.5+h)*g+1,x=(-1-m)*p+(1.5+m)*v+.5*g,S=m*p-m*v;for(let O=0;O!==a;++O)s[O]=f*o[d+O]+E*o[l+O]+x*o[c+O]+S*o[u+O];return s}},tu=class extends ps{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,d=(n-e)/(r-e),u=1-d;for(let h=0;h!==a;++h)s[h]=o[l+h]*u+o[c+h]*d;return s}},eu=class extends ps{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},Tn=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ba(e,this.TimeBufferType),this.values=Ba(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ba(t.times,Array),values:Ba(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new eu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new tu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Qd(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ha:e=this.InterpolantFactoryMethodDiscrete;break;case Ld:e=this.InterpolantFactoryMethodLinear;break;case td:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ha;case this.InterpolantFactoryMethodLinear:return Ld;case this.InterpolantFactoryMethodSmooth:return td}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(r!==void 0&&uM(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===td,s=t.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=t[a],d=t[a+1];if(l!==d&&(a!==1||l!==t[0]))if(r)c=!0;else{let u=a*n,h=u-n,m=u+n;for(let g=0;g!==n;++g){let v=e[u+g];if(v!==e[h+g]||v!==e[m+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,h=o*n;for(let m=0;m!==n;++m)e[h+m]=e[u+m]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}};Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=Ld;var dr=class extends Tn{constructor(t,e,n){super(t,e,n)}};dr.prototype.ValueTypeName="bool";dr.prototype.ValueBufferType=Array;dr.prototype.DefaultInterpolation=Ha;dr.prototype.InterpolantFactoryMethodLinear=void 0;dr.prototype.InterpolantFactoryMethodSmooth=void 0;var nu=class extends Tn{};nu.prototype.ValueTypeName="color";var iu=class extends Tn{};iu.prototype.ValueTypeName="number";var ru=class extends ps{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(r-e),l=t*a;for(let d=l+a;l!==d;l+=4)Ri.slerpFlat(s,0,o,l-a,o,l,c);return s}},lc=class extends Tn{InterpolantFactoryMethodLinear(t){return new ru(this.times,this.values,this.getValueSize(),t)}};lc.prototype.ValueTypeName="quaternion";lc.prototype.InterpolantFactoryMethodSmooth=void 0;var ur=class extends Tn{constructor(t,e,n){super(t,e,n)}};ur.prototype.ValueTypeName="string";ur.prototype.ValueBufferType=Array;ur.prototype.DefaultInterpolation=Ha;ur.prototype.InterpolantFactoryMethodLinear=void 0;ur.prototype.InterpolantFactoryMethodSmooth=void 0;var su=class extends Tn{};su.prototype.ValueTypeName="vector";var km={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},ou=class{constructor(t,e,n){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(d){a++,s===!1&&r.onStart!==void 0&&r.onStart(d,o,a),s=!0},this.itemEnd=function(d){o++,r.onProgress!==void 0&&r.onProgress(d,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,u){return l.push(d,u),this},this.removeHandler=function(d){let u=l.indexOf(d);return u!==-1&&l.splice(u,2),this},this.getHandler=function(d){for(let u=0,h=l.length;u<h;u+=2){let m=l[u],g=l[u+1];if(m.global&&(m.lastIndex=0),m.test(d))return g}return null}}},hM=new ou,ig=(()=>{class i{constructor(e){this.manager=e!==void 0?e:hM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){let r=this;return new Promise(function(s,o){r.load(e,s,n,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}return i.DEFAULT_MATERIAL_NAME="__DEFAULT",i})();var au=class extends ig{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,o=km.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;let a=no("img");function c(){d(),km.add(t,this),e&&e(this),s.manager.itemEnd(t)}function l(u){d(),r&&r(u),s.manager.itemError(t),s.manager.itemEnd(t)}function d(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}};var dc=class extends ig{constructor(t){super(t)}load(t,e,n,r){let s=new Di,o=new au(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}};var hu="\\[\\]\\.:\\/",fM=new RegExp("["+hu+"]","g"),fu="[^"+hu+"]",pM="[^"+hu.replace("\\.","")+"]",mM=/((?:WC+[\/:])*)/.source.replace("WC",fu),gM=/(WCOD+)?/.source.replace("WCOD",pM),vM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fu),_M=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fu),bM=new RegExp("^"+mM+gM+vM+_M+"$"),yM=["material","materials","bones","map"],cu=class{constructor(t,e,n){let r=n||Ee.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ee=(()=>{class i{constructor(e,n,r){this.path=n,this.parsedPath=r||i.parseTrackName(n),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,r){return e&&e.isAnimationObjectGroup?new i.Composite(e,n,r):new i(e,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(fM,"")}static parseTrackName(e){let n=bM.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let r={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);yM.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return r}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let r=e.skeleton.getBoneByName(n);if(r!==void 0)return r}if(e.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===n||c.uuid===n)return c;let l=r(c.children);if(l)return l}return null},s=r(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)e[n++]=r[s]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,r=n.objectName,s=n.propertyName,o=n.propertyIndex;if(e||(e=i.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let d=n.objectIndex;switch(r){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===d){d=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[r]}if(d!==void 0){if(e[d]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[d]}}let a=e[s];if(a===void 0){let d=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+d+"."+s+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return i.Composite=cu,i})();Ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ee.prototype.GetterByBindingType=[Ee.prototype._getValue_direct,Ee.prototype._getValue_array,Ee.prototype._getValue_arrayElement,Ee.prototype._getValue_toArray];Ee.prototype.SetterByBindingTypeAndVersioning=[[Ee.prototype._setValue_direct,Ee.prototype._setValue_direct_setNeedsUpdate,Ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_array,Ee.prototype._setValue_array_setNeedsUpdate,Ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_arrayElement,Ee.prototype._setValue_arrayElement_setNeedsUpdate,Ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_fromArray,Ee.prototype._setValue_fromArray_setNeedsUpdate,Ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var f1=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lu);var m1=(()=>{let t=class t{constructor(){this.scene=new ac,this.fov=75,this.starCount=1e4,this.rotationSpeed=.001}ngAfterViewInit(){this.initStarBackground()}initStarBackground(){let n=document.getElementById("star-background-canvas");if(!n)throw new Error("Canvas not found");this.canvas=n,this.camera=new je(this.fov,window.innerWidth/window.innerHeight),this.scene.add(this.camera),this.renderer=new oc({canvas:this.canvas}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.addParticles(),this.animateFrame()}animateFrame(){this.stars.rotation.y+=this.rotationSpeed,this.stars.rotation.x+=this.rotationSpeed,this.renderer.render(this.scene,this.camera),window.requestAnimationFrame(this.animateFrame.bind(this))}addParticles(){let n=new kn,r=new Float32Array(this.starCount*3);for(let a=0;a<this.starCount*3;a+=3)r[a]=(Math.random()-.5)*100,r[a+1]=(Math.random()-.5)*100,r[a+2]=(Math.random()-.5)*100;n.setAttribute("position",new en(r,3));let o=new dc().load("../../assets/images/star-no-bg.png");this.stars=new cc(n,new ro({map:o,size:.5,sizeAttenuation:!0,transparent:!0})),this.scene.add(this.stars)}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=ve({type:t,selectors:[["app-star-background"]],decls:1,vars:0,consts:[["id","star-background-canvas"]],template:function(r,s){r&1&&ke(0,"canvas",0)},styles:["canvas[_ngcontent-%COMP%]{width:100%;height:100%}"]});let i=t;return i})();var Dt="primary",xo=Symbol("RouteTitle"),_u=class{constructor(t){this.params=t||{}}has(t){return Object.prototype.hasOwnProperty.call(this.params,t)}get(t){if(this.has(t)){let e=this.params[t];return Array.isArray(e)?e[0]:e}return null}getAll(t){if(this.has(t)){let e=this.params[t];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function ys(i){return new _u(i)}function wM(i,t,e){let n=e.path.split("/");if(n.length>i.length||e.pathMatch==="full"&&(t.hasChildren()||n.length<i.length))return null;let r={};for(let s=0;s<n.length;s++){let o=n[s],a=i[s];if(o.startsWith(":"))r[o.substring(1)]=a;else if(o!==a.path)return null}return{consumed:i.slice(0,n.length),posParams:r}}function SM(i,t){if(i.length!==t.length)return!1;for(let e=0;e<i.length;++e)if(!Bn(i[e],t[e]))return!1;return!0}function Bn(i,t){let e=i?bu(i):void 0,n=t?bu(t):void 0;if(!e||!n||e.length!=n.length)return!1;let r;for(let s=0;s<e.length;s++)if(r=e[s],!hg(i[r],t[r]))return!1;return!0}function bu(i){return[...Object.keys(i),...Object.getOwnPropertySymbols(i)]}function hg(i,t){if(Array.isArray(i)&&Array.isArray(t)){if(i.length!==t.length)return!1;let e=[...i].sort(),n=[...t].sort();return e.every((r,s)=>n[s]===r)}else return i===t}function fg(i){return i.length>0?i[i.length-1]:null}function Fi(i){return Vc(i)?i:Uh(i)?He(Promise.resolve(i)):_t(i)}var MM={exact:mg,subset:gg},pg={exact:EM,subset:AM,ignored:()=>!0};function rg(i,t,e){return MM[e.paths](i.root,t.root,e.matrixParams)&&pg[e.queryParams](i.queryParams,t.queryParams)&&!(e.fragment==="exact"&&i.fragment!==t.fragment)}function EM(i,t){return Bn(i,t)}function mg(i,t,e){if(!pr(i.segments,t.segments)||!vc(i.segments,t.segments,e)||i.numberOfChildren!==t.numberOfChildren)return!1;for(let n in t.children)if(!i.children[n]||!mg(i.children[n],t.children[n],e))return!1;return!0}function AM(i,t){return Object.keys(t).length<=Object.keys(i).length&&Object.keys(t).every(e=>hg(i[e],t[e]))}function gg(i,t,e){return vg(i,t,t.segments,e)}function vg(i,t,e,n){if(i.segments.length>e.length){let r=i.segments.slice(0,e.length);return!(!pr(r,e)||t.hasChildren()||!vc(r,e,n))}else if(i.segments.length===e.length){if(!pr(i.segments,e)||!vc(i.segments,e,n))return!1;for(let r in t.children)if(!i.children[r]||!gg(i.children[r],t.children[r],n))return!1;return!0}else{let r=e.slice(0,i.segments.length),s=e.slice(i.segments.length);return!pr(i.segments,r)||!vc(i.segments,r,n)||!i.children[Dt]?!1:vg(i.children[Dt],t,s,n)}}function vc(i,t,e){return t.every((n,r)=>pg[e](i[r].parameters,n.parameters))}var Pi=class{constructor(t=new ie([],{}),e={},n=null){this.root=t,this.queryParams=e,this.fragment=n}get queryParamMap(){return this._queryParamMap??=ys(this.queryParams),this._queryParamMap}toString(){return RM.serialize(this)}},ie=class{constructor(t,e){this.segments=t,this.children=e,this.parent=null,Object.values(e).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return _c(this)}},fr=class{constructor(t,e){this.path=t,this.parameters=e}get parameterMap(){return this._parameterMap??=ys(this.parameters),this._parameterMap}toString(){return bg(this)}};function TM(i,t){return pr(i,t)&&i.every((e,n)=>Bn(e.parameters,t[n].parameters))}function pr(i,t){return i.length!==t.length?!1:i.every((e,n)=>e.path===t[n].path)}function CM(i,t){let e=[];return Object.entries(i.children).forEach(([n,r])=>{n===Dt&&(e=e.concat(t(r,n)))}),Object.entries(i.children).forEach(([n,r])=>{n!==Dt&&(e=e.concat(t(r,n)))}),e}var wo=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=mt({token:t,factory:()=>new fo,providedIn:"root"});let i=t;return i})(),fo=class{parse(t){let e=new xu(t);return new Pi(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(t){let e=`/${oo(t.root,!0)}`,n=PM(t.queryParams),r=typeof t.fragment=="string"?`#${IM(t.fragment)}`:"";return`${e}${n}${r}`}},RM=new fo;function _c(i){return i.segments.map(t=>bg(t)).join("/")}function oo(i,t){if(!i.hasChildren())return _c(i);if(t){let e=i.children[Dt]?oo(i.children[Dt],!1):"",n=[];return Object.entries(i.children).forEach(([r,s])=>{r!==Dt&&n.push(`${r}:${oo(s,!1)}`)}),n.length>0?`${e}(${n.join("//")})`:e}else{let e=CM(i,(n,r)=>r===Dt?[oo(i.children[Dt],!1)]:[`${r}:${oo(n,!1)}`]);return Object.keys(i.children).length===1&&i.children[Dt]!=null?`${_c(i)}/${e[0]}`:`${_c(i)}/(${e.join("//")})`}}function _g(i){return encodeURIComponent(i).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function mc(i){return _g(i).replace(/%3B/gi,";")}function IM(i){return encodeURI(i)}function yu(i){return _g(i).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function bc(i){return decodeURIComponent(i)}function sg(i){return bc(i.replace(/\+/g,"%20"))}function bg(i){return`${yu(i.path)}${DM(i.parameters)}`}function DM(i){return Object.entries(i).map(([t,e])=>`;${yu(t)}=${yu(e)}`).join("")}function PM(i){let t=Object.entries(i).map(([e,n])=>Array.isArray(n)?n.map(r=>`${mc(e)}=${mc(r)}`).join("&"):`${mc(e)}=${mc(n)}`).filter(e=>e);return t.length?`?${t.join("&")}`:""}var LM=/^[^\/()?;#]+/;function pu(i){let t=i.match(LM);return t?t[0]:""}var OM=/^[^\/()?;=#]+/;function NM(i){let t=i.match(OM);return t?t[0]:""}var FM=/^[^=?&#]+/;function kM(i){let t=i.match(FM);return t?t[0]:""}var UM=/^[^&#]+/;function BM(i){let t=i.match(UM);return t?t[0]:""}var xu=class{constructor(t){this.url=t,this.remaining=t}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new ie([],{}):new ie([],this.parseChildren())}parseQueryParams(){let t={};if(this.consumeOptional("?"))do this.parseQueryParam(t);while(this.consumeOptional("&"));return t}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let t=[];for(this.peekStartsWith("(")||t.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),t.push(this.parseSegment());let e={};this.peekStartsWith("/(")&&(this.capture("/"),e=this.parseParens(!0));let n={};return this.peekStartsWith("(")&&(n=this.parseParens(!1)),(t.length>0||Object.keys(e).length>0)&&(n[Dt]=new ie(t,e)),n}parseSegment(){let t=pu(this.remaining);if(t===""&&this.peekStartsWith(";"))throw new de(4009,!1);return this.capture(t),new fr(bc(t),this.parseMatrixParams())}parseMatrixParams(){let t={};for(;this.consumeOptional(";");)this.parseParam(t);return t}parseParam(t){let e=NM(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let r=pu(this.remaining);r&&(n=r,this.capture(n))}t[bc(e)]=bc(n)}parseQueryParam(t){let e=kM(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let o=BM(this.remaining);o&&(n=o,this.capture(n))}let r=sg(e),s=sg(n);if(t.hasOwnProperty(r)){let o=t[r];Array.isArray(o)||(o=[o],t[r]=o),o.push(s)}else t[r]=s}parseParens(t){let e={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let n=pu(this.remaining),r=this.remaining[n.length];if(r!=="/"&&r!==")"&&r!==";")throw new de(4010,!1);let s;n.indexOf(":")>-1?(s=n.slice(0,n.indexOf(":")),this.capture(s),this.capture(":")):t&&(s=Dt);let o=this.parseChildren();e[s]=Object.keys(o).length===1?o[Dt]:new ie([],o),this.consumeOptional("//")}return e}peekStartsWith(t){return this.remaining.startsWith(t)}consumeOptional(t){return this.peekStartsWith(t)?(this.remaining=this.remaining.substring(t.length),!0):!1}capture(t){if(!this.consumeOptional(t))throw new de(4011,!1)}};function yg(i){return i.segments.length>0?new ie([],{[Dt]:i}):i}function xg(i){let t={};for(let[n,r]of Object.entries(i.children)){let s=xg(r);if(n===Dt&&s.segments.length===0&&s.hasChildren())for(let[o,a]of Object.entries(s.children))t[o]=a;else(s.segments.length>0||s.hasChildren())&&(t[n]=s)}let e=new ie(i.segments,t);return zM(e)}function zM(i){if(i.numberOfChildren===1&&i.children[Dt]){let t=i.children[Dt];return new ie(i.segments.concat(t.segments),t.children)}return i}function xs(i){return i instanceof Pi}function VM(i,t,e=null,n=null){let r=wg(i);return Sg(r,t,e,n)}function wg(i){let t;function e(s){let o={};for(let c of s.children){let l=e(c);o[c.outlet]=l}let a=new ie(s.url,o);return s===i&&(t=a),a}let n=e(i.root),r=yg(n);return t??r}function Sg(i,t,e,n){let r=i;for(;r.parent;)r=r.parent;if(t.length===0)return mu(r,r,r,e,n);let s=HM(t);if(s.toRoot())return mu(r,r,new ie([],{}),e,n);let o=GM(s,r,i),a=o.processChildren?lo(o.segmentGroup,o.index,s.commands):Eg(o.segmentGroup,o.index,s.commands);return mu(r,o.segmentGroup,a,e,n)}function yc(i){return typeof i=="object"&&i!=null&&!i.outlets&&!i.segmentPath}function po(i){return typeof i=="object"&&i!=null&&i.outlets}function mu(i,t,e,n,r){let s={};n&&Object.entries(n).forEach(([c,l])=>{s[c]=Array.isArray(l)?l.map(d=>`${d}`):`${l}`});let o;i===t?o=e:o=Mg(i,t,e);let a=yg(xg(o));return new Pi(a,s,r)}function Mg(i,t,e){let n={};return Object.entries(i.children).forEach(([r,s])=>{s===t?n[r]=e:n[r]=Mg(s,t,e)}),new ie(i.segments,n)}var xc=class{constructor(t,e,n){if(this.isAbsolute=t,this.numberOfDoubleDots=e,this.commands=n,t&&n.length>0&&yc(n[0]))throw new de(4003,!1);let r=n.find(po);if(r&&r!==fg(n))throw new de(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function HM(i){if(typeof i[0]=="string"&&i.length===1&&i[0]==="/")return new xc(!0,0,i);let t=0,e=!1,n=i.reduce((r,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let a={};return Object.entries(s.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:o===0?(s.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?e=!0:a===".."?t++:a!=""&&r.push(a))}),r):[...r,s]},[]);return new xc(e,t,n)}var _s=class{constructor(t,e,n){this.segmentGroup=t,this.processChildren=e,this.index=n}};function GM(i,t,e){if(i.isAbsolute)return new _s(t,!0,0);if(!e)return new _s(t,!1,NaN);if(e.parent===null)return new _s(e,!0,0);let n=yc(i.commands[0])?0:1,r=e.segments.length-1+n;return WM(e,r,i.numberOfDoubleDots)}function WM(i,t,e){let n=i,r=t,s=e;for(;s>r;){if(s-=r,n=n.parent,!n)throw new de(4005,!1);r=n.segments.length}return new _s(n,!1,r-s)}function jM(i){return po(i[0])?i[0].outlets:{[Dt]:i}}function Eg(i,t,e){if(i??=new ie([],{}),i.segments.length===0&&i.hasChildren())return lo(i,t,e);let n=XM(i,t,e),r=e.slice(n.commandIndex);if(n.match&&n.pathIndex<i.segments.length){let s=new ie(i.segments.slice(0,n.pathIndex),{});return s.children[Dt]=new ie(i.segments.slice(n.pathIndex),i.children),lo(s,0,r)}else return n.match&&r.length===0?new ie(i.segments,{}):n.match&&!i.hasChildren()?wu(i,t,e):n.match?lo(i,0,r):wu(i,t,e)}function lo(i,t,e){if(e.length===0)return new ie(i.segments,{});{let n=jM(e),r={};if(Object.keys(n).some(s=>s!==Dt)&&i.children[Dt]&&i.numberOfChildren===1&&i.children[Dt].segments.length===0){let s=lo(i.children[Dt],t,e);return new ie(i.segments,s.children)}return Object.entries(n).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[s]=Eg(i.children[s],t,o))}),Object.entries(i.children).forEach(([s,o])=>{n[s]===void 0&&(r[s]=o)}),new ie(i.segments,r)}}function XM(i,t,e){let n=0,r=t,s={match:!1,pathIndex:0,commandIndex:0};for(;r<i.segments.length;){if(n>=e.length)return s;let o=i.segments[r],a=e[n];if(po(a))break;let c=`${a}`,l=n<e.length-1?e[n+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!ag(c,l,o))return s;n+=2}else{if(!ag(c,{},o))return s;n++}r++}return{match:!0,pathIndex:r,commandIndex:n}}function wu(i,t,e){let n=i.segments.slice(0,t),r=0;for(;r<e.length;){let s=e[r];if(po(s)){let c=$M(s.outlets);return new ie(n,c)}if(r===0&&yc(e[0])){let c=i.segments[t];n.push(new fr(c.path,og(e[0]))),r++;continue}let o=po(s)?s.outlets[Dt]:`${s}`,a=r<e.length-1?e[r+1]:null;o&&a&&yc(a)?(n.push(new fr(o,og(a))),r+=2):(n.push(new fr(o,{})),r++)}return new ie(n,{})}function $M(i){let t={};return Object.entries(i).forEach(([e,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(t[e]=wu(new ie([],{}),0,n))}),t}function og(i){let t={};return Object.entries(i).forEach(([e,n])=>t[e]=`${n}`),t}function ag(i,t,e){return i==e.path&&Bn(t,e.parameters)}var uo="imperative",Fe=function(i){return i[i.NavigationStart=0]="NavigationStart",i[i.NavigationEnd=1]="NavigationEnd",i[i.NavigationCancel=2]="NavigationCancel",i[i.NavigationError=3]="NavigationError",i[i.RoutesRecognized=4]="RoutesRecognized",i[i.ResolveStart=5]="ResolveStart",i[i.ResolveEnd=6]="ResolveEnd",i[i.GuardsCheckStart=7]="GuardsCheckStart",i[i.GuardsCheckEnd=8]="GuardsCheckEnd",i[i.RouteConfigLoadStart=9]="RouteConfigLoadStart",i[i.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",i[i.ChildActivationStart=11]="ChildActivationStart",i[i.ChildActivationEnd=12]="ChildActivationEnd",i[i.ActivationStart=13]="ActivationStart",i[i.ActivationEnd=14]="ActivationEnd",i[i.Scroll=15]="Scroll",i[i.NavigationSkipped=16]="NavigationSkipped",i}(Fe||{}),bn=class{constructor(t,e){this.id=t,this.url=e}},ws=class extends bn{constructor(t,e,n="imperative",r=null){super(t,e),this.type=Fe.NavigationStart,this.navigationTrigger=n,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},zn=class extends bn{constructor(t,e,n){super(t,e),this.urlAfterRedirects=n,this.type=Fe.NavigationEnd}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},hn=function(i){return i[i.Redirect=0]="Redirect",i[i.SupersededByNewNavigation=1]="SupersededByNewNavigation",i[i.NoDataFromResolver=2]="NoDataFromResolver",i[i.GuardRejected=3]="GuardRejected",i}(hn||{}),wc=function(i){return i[i.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",i[i.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",i}(wc||{}),Li=class extends bn{constructor(t,e,n,r){super(t,e),this.reason=n,this.code=r,this.type=Fe.NavigationCancel}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Oi=class extends bn{constructor(t,e,n,r){super(t,e),this.reason=n,this.code=r,this.type=Fe.NavigationSkipped}},mo=class extends bn{constructor(t,e,n,r){super(t,e),this.error=n,this.target=r,this.type=Fe.NavigationError}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Sc=class extends bn{constructor(t,e,n,r){super(t,e),this.urlAfterRedirects=n,this.state=r,this.type=Fe.RoutesRecognized}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Su=class extends bn{constructor(t,e,n,r){super(t,e),this.urlAfterRedirects=n,this.state=r,this.type=Fe.GuardsCheckStart}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Mu=class extends bn{constructor(t,e,n,r,s){super(t,e),this.urlAfterRedirects=n,this.state=r,this.shouldActivate=s,this.type=Fe.GuardsCheckEnd}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Eu=class extends bn{constructor(t,e,n,r){super(t,e),this.urlAfterRedirects=n,this.state=r,this.type=Fe.ResolveStart}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Au=class extends bn{constructor(t,e,n,r){super(t,e),this.urlAfterRedirects=n,this.state=r,this.type=Fe.ResolveEnd}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Tu=class{constructor(t){this.route=t,this.type=Fe.RouteConfigLoadStart}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Cu=class{constructor(t){this.route=t,this.type=Fe.RouteConfigLoadEnd}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Ru=class{constructor(t){this.snapshot=t,this.type=Fe.ChildActivationStart}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Iu=class{constructor(t){this.snapshot=t,this.type=Fe.ChildActivationEnd}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Du=class{constructor(t){this.snapshot=t,this.type=Fe.ActivationStart}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Pu=class{constructor(t){this.snapshot=t,this.type=Fe.ActivationEnd}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Mc=class{constructor(t,e,n){this.routerEvent=t,this.position=e,this.anchor=n,this.type=Fe.Scroll}toString(){let t=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${t}')`}},go=class{},vo=class{constructor(t){this.url=t}};var Lu=class{constructor(){this.outlet=null,this.route=null,this.injector=null,this.children=new So,this.attachRef=null}},So=(()=>{let t=class t{constructor(){this.contexts=new Map}onChildOutletCreated(n,r){let s=this.getOrCreateContext(n);s.outlet=r,this.contexts.set(n,s)}onChildOutletDestroyed(n){let r=this.getContext(n);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let n=this.contexts;return this.contexts=new Map,n}onOutletReAttached(n){this.contexts=n}getOrCreateContext(n){let r=this.getContext(n);return r||(r=new Lu,this.contexts.set(n,r)),r}getContext(n){return this.contexts.get(n)||null}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=mt({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})(),Ec=class{constructor(t){this._root=t}get root(){return this._root.value}parent(t){let e=this.pathFromRoot(t);return e.length>1?e[e.length-2]:null}children(t){let e=Ou(t,this._root);return e?e.children.map(n=>n.value):[]}firstChild(t){let e=Ou(t,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(t){let e=Nu(t,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==t)}pathFromRoot(t){return Nu(t,this._root).map(e=>e.value)}};function Ou(i,t){if(i===t.value)return t;for(let e of t.children){let n=Ou(i,e);if(n)return n}return null}function Nu(i,t){if(i===t.value)return[t];for(let e of t.children){let n=Nu(i,e);if(n.length)return n.unshift(t),n}return[]}var un=class{constructor(t,e){this.value=t,this.children=e}toString(){return`TreeNode(${this.value})`}};function vs(i){let t={};return i&&i.children.forEach(e=>t[e.value.outlet]=e),t}var Ac=class extends Ec{constructor(t,e){super(t),this.snapshot=e,ju(this,t)}toString(){return this.snapshot.toString()}};function Ag(i){let t=YM(i),e=new Xe([new fr("",{})]),n=new Xe({}),r=new Xe({}),s=new Xe({}),o=new Xe(""),a=new mr(e,n,s,o,r,Dt,i,t.root);return a.snapshot=t.root,new Ac(new un(a,[]),t)}function YM(i){let t={},e={},n={},r="",s=new _o([],t,n,r,e,Dt,i,null,{});return new Tc("",new un(s,[]))}var mr=class{constructor(t,e,n,r,s,o,a,c){this.urlSubject=t,this.paramsSubject=e,this.queryParamsSubject=n,this.fragmentSubject=r,this.dataSubject=s,this.outlet=o,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(Lt(l=>l[xo]))??_t(void 0),this.url=t,this.params=e,this.queryParams=n,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(Lt(t=>ys(t))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(Lt(t=>ys(t))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Wu(i,t,e="emptyOnly"){let n,{routeConfig:r}=i;return t!==null&&(e==="always"||r?.path===""||!t.component&&!t.routeConfig?.loadComponent)?n={params:it(it({},t.params),i.params),data:it(it({},t.data),i.data),resolve:it(it(it(it({},i.data),t.data),r?.data),i._resolvedData)}:n={params:it({},i.params),data:it({},i.data),resolve:it(it({},i.data),i._resolvedData??{})},r&&Cg(r)&&(n.resolve[xo]=r.title),n}var _o=class{get title(){return this.data?.[xo]}constructor(t,e,n,r,s,o,a,c,l){this.url=t,this.params=e,this.queryParams=n,this.fragment=r,this.data=s,this.outlet=o,this.component=a,this.routeConfig=c,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=ys(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=ys(this.queryParams),this._queryParamMap}toString(){let t=this.url.map(n=>n.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${t}', path:'${e}')`}},Tc=class extends Ec{constructor(t,e){super(e),this.url=t,ju(this,e)}toString(){return Tg(this._root)}};function ju(i,t){t.value._routerState=i,t.children.forEach(e=>ju(i,e))}function Tg(i){let t=i.children.length>0?` { ${i.children.map(Tg).join(", ")} } `:"";return`${i.value}${t}`}function gu(i){if(i.snapshot){let t=i.snapshot,e=i._futureSnapshot;i.snapshot=e,Bn(t.queryParams,e.queryParams)||i.queryParamsSubject.next(e.queryParams),t.fragment!==e.fragment&&i.fragmentSubject.next(e.fragment),Bn(t.params,e.params)||i.paramsSubject.next(e.params),SM(t.url,e.url)||i.urlSubject.next(e.url),Bn(t.data,e.data)||i.dataSubject.next(e.data)}else i.snapshot=i._futureSnapshot,i.dataSubject.next(i._futureSnapshot.data)}function Fu(i,t){let e=Bn(i.params,t.params)&&TM(i.url,t.url),n=!i.parent!=!t.parent;return e&&!n&&(!i.parent||Fu(i.parent,t.parent))}function Cg(i){return typeof i.title=="string"||i.title===null}var qM=(()=>{let t=class t{constructor(){this.activated=null,this._activatedRoute=null,this.name=Dt,this.activateEvents=new mn,this.deactivateEvents=new mn,this.attachEvents=new mn,this.detachEvents=new mn,this.parentContexts=st(So),this.location=st(wr),this.changeDetector=st(Gi),this.environmentInjector=st(hi),this.inputBinder=st(Pc,{optional:!0}),this.supportsBindingToComponentInputs=!0}get activatedComponentRef(){return this.activated}ngOnChanges(n){if(n.name){let{firstChange:r,previousValue:s}=n.name;if(r)return;this.isTrackedInParentContexts(s)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(s)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(n){return this.parentContexts.getContext(n)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let n=this.parentContexts.getContext(this.name);n?.route&&(n.attachRef?this.attach(n.attachRef,n.route):this.activateWith(n.route,n.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new de(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new de(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new de(4012,!1);this.location.detach();let n=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(n.instance),n}attach(n,r){this.activated=n,this._activatedRoute=r,this.location.insert(n.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(n.instance)}deactivate(){if(this.activated){let n=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(n)}}activateWith(n,r){if(this.isActivated)throw new de(4013,!1);this._activatedRoute=n;let s=this.location,a=n.snapshot.component,c=this.parentContexts.getOrCreateContext(this.name).children,l=new ku(n,c,s.injector);this.activated=s.createComponent(a,{index:s.length,injector:l,environmentInjector:r??this.environmentInjector}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}};t.\u0275fac=function(r){return new(r||t)},t.\u0275dir=we({type:t,selectors:[["router-outlet"]],inputs:{name:"name"},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0,features:[br]});let i=t;return i})(),ku=class i{__ngOutletInjector(t){return new i(this.route,this.childContexts,t)}constructor(t,e,n){this.route=t,this.childContexts=e,this.parent=n}get(t,e){return t===mr?this.route:t===So?this.childContexts:this.parent.get(t,e)}},Pc=new At(""),cg=(()=>{let t=class t{constructor(){this.outletDataSubscriptions=new Map}bindActivatedRouteToOutletComponent(n){this.unsubscribeFromRouteData(n),this.subscribeToRouteData(n)}unsubscribeFromRouteData(n){this.outletDataSubscriptions.get(n)?.unsubscribe(),this.outletDataSubscriptions.delete(n)}subscribeToRouteData(n){let{activatedRoute:r}=n,s=_r([r.queryParams,r.params,r.data]).pipe(Ye(([o,a,c],l)=>(c=it(it(it({},o),a),c),l===0?_t(c):Promise.resolve(c)))).subscribe(o=>{if(!n.isActivated||!n.activatedComponentRef||n.activatedRoute!==r||r.component===null){this.unsubscribeFromRouteData(n);return}let a=Hh(r.component);if(!a){this.unsubscribeFromRouteData(n);return}for(let{templateName:c}of a.inputs)n.activatedComponentRef.setInput(c,o[c])});this.outletDataSubscriptions.set(n,s)}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=mt({token:t,factory:t.\u0275fac});let i=t;return i})();function ZM(i,t,e){let n=bo(i,t._root,e?e._root:void 0);return new Ac(n,t)}function bo(i,t,e){if(e&&i.shouldReuseRoute(t.value,e.value.snapshot)){let n=e.value;n._futureSnapshot=t.value;let r=KM(i,t,e);return new un(n,r)}else{if(i.shouldAttach(t.value)){let s=i.retrieve(t.value);if(s!==null){let o=s.route;return o.value._futureSnapshot=t.value,o.children=t.children.map(a=>bo(i,a)),o}}let n=JM(t.value),r=t.children.map(s=>bo(i,s));return new un(n,r)}}function KM(i,t,e){return t.children.map(n=>{for(let r of e.children)if(i.shouldReuseRoute(n.value,r.value.snapshot))return bo(i,n,r);return bo(i,n)})}function JM(i){return new mr(new Xe(i.url),new Xe(i.params),new Xe(i.queryParams),new Xe(i.fragment),new Xe(i.data),i.outlet,i.component,i)}var Rg="ngNavigationCancelingError";function Ig(i,t){let{redirectTo:e,navigationBehaviorOptions:n}=xs(t)?{redirectTo:t,navigationBehaviorOptions:void 0}:t,r=Dg(!1,hn.Redirect);return r.url=e,r.navigationBehaviorOptions=n,r}function Dg(i,t){let e=new Error(`NavigationCancelingError: ${i||""}`);return e[Rg]=!0,e.cancellationCode=t,e}function QM(i){return Pg(i)&&xs(i.url)}function Pg(i){return!!i&&i[Rg]}var tE=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=ve({type:t,selectors:[["ng-component"]],standalone:!0,features:[qe],decls:1,vars:0,template:function(r,s){r&1&&ke(0,"router-outlet")},dependencies:[qM],encapsulation:2});let i=t;return i})();function eE(i,t){return i.providers&&!i._injector&&(i._injector=Jc(i.providers,t,`Route: ${i.path}`)),i._injector??t}function Xu(i){let t=i.children&&i.children.map(Xu),e=t?Re(it({},i),{children:t}):it({},i);return!e.component&&!e.loadComponent&&(t||e.loadChildren)&&e.outlet&&e.outlet!==Dt&&(e.component=tE),e}function Vn(i){return i.outlet||Dt}function nE(i,t){let e=i.filter(n=>Vn(n)===t);return e.push(...i.filter(n=>Vn(n)!==t)),e}function Mo(i){if(!i)return null;if(i.routeConfig?._injector)return i.routeConfig._injector;for(let t=i.parent;t;t=t.parent){let e=t.routeConfig;if(e?._loadedInjector)return e._loadedInjector;if(e?._injector)return e._injector}return null}var iE=(i,t,e,n)=>Lt(r=>(new Uu(t,r.targetRouterState,r.currentRouterState,e,n).activate(i),r)),Uu=class{constructor(t,e,n,r,s){this.routeReuseStrategy=t,this.futureState=e,this.currState=n,this.forwardEvent=r,this.inputBindingEnabled=s}activate(t){let e=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,n,t),gu(this.futureState.root),this.activateChildRoutes(e,n,t)}deactivateChildRoutes(t,e,n){let r=vs(e);t.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,r[o],n),delete r[o]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,n)})}deactivateRoutes(t,e,n){let r=t.value,s=e?e.value:null;if(r===s)if(r.component){let o=n.getContext(r.outlet);o&&this.deactivateChildRoutes(t,e,o.children)}else this.deactivateChildRoutes(t,e,n);else s&&this.deactivateRouteAndItsChildren(e,n)}deactivateRouteAndItsChildren(t,e){t.value.component&&this.routeReuseStrategy.shouldDetach(t.value.snapshot)?this.detachAndStoreRouteSubtree(t,e):this.deactivateRouteAndOutlet(t,e)}detachAndStoreRouteSubtree(t,e){let n=e.getContext(t.value.outlet),r=n&&t.value.component?n.children:e,s=vs(t);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);if(n&&n.outlet){let o=n.outlet.detach(),a=n.children.onOutletDeactivated();this.routeReuseStrategy.store(t.value.snapshot,{componentRef:o,route:t,contexts:a})}}deactivateRouteAndOutlet(t,e){let n=e.getContext(t.value.outlet),r=n&&t.value.component?n.children:e,s=vs(t);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null)}activateChildRoutes(t,e,n){let r=vs(e);t.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],n),this.forwardEvent(new Pu(s.value.snapshot))}),t.children.length&&this.forwardEvent(new Iu(t.value.snapshot))}activateRoutes(t,e,n){let r=t.value,s=e?e.value:null;if(gu(r),r===s)if(r.component){let o=n.getOrCreateContext(r.outlet);this.activateChildRoutes(t,e,o.children)}else this.activateChildRoutes(t,e,n);else if(r.component){let o=n.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),gu(a.route.value),this.activateChildRoutes(t,null,o.children)}else{let a=Mo(r.snapshot);o.attachRef=null,o.route=r,o.injector=a,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(t,null,o.children)}}else this.activateChildRoutes(t,null,n)}},Cc=class{constructor(t){this.path=t,this.route=this.path[this.path.length-1]}},bs=class{constructor(t,e){this.component=t,this.route=e}};function rE(i,t,e){let n=i._root,r=t?t._root:null;return ao(n,r,e,[n.value])}function sE(i){let t=i.routeConfig?i.routeConfig.canActivateChild:null;return!t||t.length===0?null:{node:i,guards:t}}function Ms(i,t){let e=Symbol(),n=t.get(i,e);return n===e?typeof i=="function"&&!fh(i)?i:t.get(i):n}function ao(i,t,e,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=vs(t);return i.children.forEach(o=>{oE(o,s[o.value.outlet],e,n.concat([o.value]),r),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,a])=>ho(a,e.getContext(o),r)),r}function oE(i,t,e,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=i.value,o=t?t.value:null,a=e?e.getContext(i.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let c=aE(o,s,s.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new Cc(n)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?ao(i,t,a?a.children:null,n,r):ao(i,t,e,n,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new bs(a.outlet.component,o))}else o&&ho(t,a,r),r.canActivateChecks.push(new Cc(n)),s.component?ao(i,null,a?a.children:null,n,r):ao(i,null,e,n,r);return r}function aE(i,t,e){if(typeof e=="function")return e(i,t);switch(e){case"pathParamsChange":return!pr(i.url,t.url);case"pathParamsOrQueryParamsChange":return!pr(i.url,t.url)||!Bn(i.queryParams,t.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Fu(i,t)||!Bn(i.queryParams,t.queryParams);case"paramsChange":default:return!Fu(i,t)}}function ho(i,t,e){let n=vs(i),r=i.value;Object.entries(n).forEach(([s,o])=>{r.component?t?ho(o,t.children.getContext(s),e):ho(o,null,e):ho(o,t,e)}),r.component?t&&t.outlet&&t.outlet.isActivated?e.canDeactivateChecks.push(new bs(t.outlet.component,r)):e.canDeactivateChecks.push(new bs(null,r)):e.canDeactivateChecks.push(new bs(null,r))}function Eo(i){return typeof i=="function"}function cE(i){return typeof i=="boolean"}function lE(i){return i&&Eo(i.canLoad)}function dE(i){return i&&Eo(i.canActivate)}function uE(i){return i&&Eo(i.canActivateChild)}function hE(i){return i&&Eo(i.canDeactivate)}function fE(i){return i&&Eo(i.canMatch)}function Lg(i){return i instanceof sh||i?.name==="EmptyError"}var gc=Symbol("INITIAL_VALUE");function Ss(){return Ye(i=>_r(i.map(t=>t.pipe(sn(1),Es(gc)))).pipe(Lt(t=>{for(let e of t)if(e!==!0){if(e===gc)return gc;if(e===!1||e instanceof Pi)return e}return!0}),$e(t=>t!==gc),sn(1)))}function pE(i,t){return rn(e=>{let{targetSnapshot:n,currentSnapshot:r,guards:{canActivateChecks:s,canDeactivateChecks:o}}=e;return o.length===0&&s.length===0?_t(Re(it({},e),{guardsResult:!0})):mE(o,n,r,i).pipe(rn(a=>a&&cE(a)?gE(n,s,i,t):_t(a)),Lt(a=>Re(it({},e),{guardsResult:a})))})}function mE(i,t,e,n){return He(i).pipe(rn(r=>xE(r.component,r.route,e,t,n)),di(r=>r!==!0,!0))}function gE(i,t,e,n){return He(t).pipe(li(r=>Do(_E(r.route.parent,n),vE(r.route,n),yE(i,r.path,e),bE(i,r.route,e))),di(r=>r!==!0,!0))}function vE(i,t){return i!==null&&t&&t(new Du(i)),_t(!0)}function _E(i,t){return i!==null&&t&&t(new Ru(i)),_t(!0)}function bE(i,t,e){let n=t.routeConfig?t.routeConfig.canActivate:null;if(!n||n.length===0)return _t(!0);let r=n.map(s=>Gc(()=>{let o=Mo(t)??e,a=Ms(s,o),c=dE(a)?a.canActivate(t,i):In(o,()=>a(t,i));return Fi(c).pipe(di())}));return _t(r).pipe(Ss())}function yE(i,t,e){let n=t[t.length-1],s=t.slice(0,t.length-1).reverse().map(o=>sE(o)).filter(o=>o!==null).map(o=>Gc(()=>{let a=o.guards.map(c=>{let l=Mo(o.node)??e,d=Ms(c,l),u=uE(d)?d.canActivateChild(n,i):In(l,()=>d(n,i));return Fi(u).pipe(di())});return _t(a).pipe(Ss())}));return _t(s).pipe(Ss())}function xE(i,t,e,n,r){let s=t&&t.routeConfig?t.routeConfig.canDeactivate:null;if(!s||s.length===0)return _t(!0);let o=s.map(a=>{let c=Mo(t)??r,l=Ms(a,c),d=hE(l)?l.canDeactivate(i,t,e,n):In(c,()=>l(i,t,e,n));return Fi(d).pipe(di())});return _t(o).pipe(Ss())}function wE(i,t,e,n){let r=t.canLoad;if(r===void 0||r.length===0)return _t(!0);let s=r.map(o=>{let a=Ms(o,i),c=lE(a)?a.canLoad(t,e):In(i,()=>a(t,e));return Fi(c)});return _t(s).pipe(Ss(),Og(n))}function Og(i){return rh(ge(t=>{if(xs(t))throw Ig(i,t)}),Lt(t=>t===!0))}function SE(i,t,e,n){let r=t.canMatch;if(!r||r.length===0)return _t(!0);let s=r.map(o=>{let a=Ms(o,i),c=fE(a)?a.canMatch(t,e):In(i,()=>a(t,e));return Fi(c)});return _t(s).pipe(Ss(),Og(n))}var yo=class{constructor(t){this.segmentGroup=t||null}},Rc=class extends Error{constructor(t){super(),this.urlTree=t}};function gs(i){return Bi(new yo(i))}function ME(i){return Bi(new de(4e3,!1))}function EE(i){return Bi(Dg(!1,hn.GuardRejected))}var Bu=class{constructor(t,e){this.urlSerializer=t,this.urlTree=e}lineralizeSegments(t,e){let n=[],r=e.root;for(;;){if(n=n.concat(r.segments),r.numberOfChildren===0)return _t(n);if(r.numberOfChildren>1||!r.children[Dt])return ME(t.redirectTo);r=r.children[Dt]}}applyRedirectCommands(t,e,n){let r=this.applyRedirectCreateUrlTree(e,this.urlSerializer.parse(e),t,n);if(e.startsWith("/"))throw new Rc(r);return r}applyRedirectCreateUrlTree(t,e,n,r){let s=this.createSegmentGroup(t,e.root,n,r);return new Pi(s,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(t,e){let n={};return Object.entries(t).forEach(([r,s])=>{if(typeof s=="string"&&s.startsWith(":")){let a=s.substring(1);n[r]=e[a]}else n[r]=s}),n}createSegmentGroup(t,e,n,r){let s=this.createSegments(t,e.segments,n,r),o={};return Object.entries(e.children).forEach(([a,c])=>{o[a]=this.createSegmentGroup(t,c,n,r)}),new ie(s,o)}createSegments(t,e,n,r){return e.map(s=>s.path.startsWith(":")?this.findPosParam(t,s,r):this.findOrReturn(s,n))}findPosParam(t,e,n){let r=n[e.path.substring(1)];if(!r)throw new de(4001,!1);return r}findOrReturn(t,e){let n=0;for(let r of e){if(r.path===t.path)return e.splice(n),r;n++}return t}},zu={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function AE(i,t,e,n,r){let s=$u(i,t,e);return s.matched?(n=eE(t,n),SE(n,t,e,r).pipe(Lt(o=>o===!0?s:it({},zu)))):_t(s)}function $u(i,t,e){if(t.path==="**")return TE(e);if(t.path==="")return t.pathMatch==="full"&&(i.hasChildren()||e.length>0)?it({},zu):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(t.matcher||wM)(e,i,t);if(!r)return it({},zu);let s={};Object.entries(r.posParams??{}).forEach(([a,c])=>{s[a]=c.path});let o=r.consumed.length>0?it(it({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function TE(i){return{matched:!0,parameters:i.length>0?fg(i).parameters:{},consumedSegments:i,remainingSegments:[],positionalParamSegments:{}}}function lg(i,t,e,n){return e.length>0&&IE(i,e,n)?{segmentGroup:new ie(t,RE(n,new ie(e,i.children))),slicedSegments:[]}:e.length===0&&DE(i,e,n)?{segmentGroup:new ie(i.segments,CE(i,e,n,i.children)),slicedSegments:e}:{segmentGroup:new ie(i.segments,i.children),slicedSegments:e}}function CE(i,t,e,n){let r={};for(let s of e)if(Lc(i,t,s)&&!n[Vn(s)]){let o=new ie([],{});r[Vn(s)]=o}return it(it({},n),r)}function RE(i,t){let e={};e[Dt]=t;for(let n of i)if(n.path===""&&Vn(n)!==Dt){let r=new ie([],{});e[Vn(n)]=r}return e}function IE(i,t,e){return e.some(n=>Lc(i,t,n)&&Vn(n)!==Dt)}function DE(i,t,e){return e.some(n=>Lc(i,t,n))}function Lc(i,t,e){return(i.hasChildren()||t.length>0)&&e.pathMatch==="full"?!1:e.path===""}function PE(i,t,e,n){return Vn(i)!==n&&(n===Dt||!Lc(t,e,i))?!1:$u(t,i,e).matched}function LE(i,t,e){return t.length===0&&!i.children[e]}var Vu=class{};function OE(i,t,e,n,r,s,o="emptyOnly"){return new Hu(i,t,e,n,r,o,s).recognize()}var NE=31,Hu=class{constructor(t,e,n,r,s,o,a){this.injector=t,this.configLoader=e,this.rootComponentType=n,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=a,this.applyRedirects=new Bu(this.urlSerializer,this.urlTree),this.absoluteRedirectCount=0,this.allowRedirects=!0}noMatchError(t){return new de(4002,`'${t.segmentGroup}'`)}recognize(){let t=lg(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(t).pipe(Lt(e=>{let n=new _o([],Object.freeze({}),Object.freeze(it({},this.urlTree.queryParams)),this.urlTree.fragment,{},Dt,this.rootComponentType,null,{}),r=new un(n,e),s=new Tc("",r),o=VM(n,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),this.inheritParamsAndData(s._root,null),{state:s,tree:o}}))}match(t){return this.processSegmentGroup(this.injector,this.config,t,Dt).pipe(ci(n=>{if(n instanceof Rc)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof yo?this.noMatchError(n):n}))}inheritParamsAndData(t,e){let n=t.value,r=Wu(n,e,this.paramsInheritanceStrategy);n.params=Object.freeze(r.params),n.data=Object.freeze(r.data),t.children.forEach(s=>this.inheritParamsAndData(s,n))}processSegmentGroup(t,e,n,r){return n.segments.length===0&&n.hasChildren()?this.processChildren(t,e,n):this.processSegment(t,e,n,n.segments,r,!0).pipe(Lt(s=>s instanceof un?[s]:[]))}processChildren(t,e,n){let r=[];for(let s of Object.keys(n.children))s==="primary"?r.unshift(s):r.push(s);return He(r).pipe(li(s=>{let o=n.children[s],a=nE(e,s);return this.processSegmentGroup(t,a,o,s)}),uh((s,o)=>(s.push(...o),s)),Xc(null),dh(),rn(s=>{if(s===null)return gs(n);let o=Ng(s);return FE(o),_t(o)}))}processSegment(t,e,n,r,s,o){return He(e).pipe(li(a=>this.processSegmentAgainstRoute(a._injector??t,e,a,n,r,s,o).pipe(ci(c=>{if(c instanceof yo)return _t(null);throw c}))),di(a=>!!a),ci(a=>{if(Lg(a))return LE(n,r,s)?_t(new Vu):gs(n);throw a}))}processSegmentAgainstRoute(t,e,n,r,s,o,a){return PE(n,r,s,o)?n.redirectTo===void 0?this.matchSegmentAgainstRoute(t,r,n,s,o):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(t,r,e,n,s,o):gs(r):gs(r)}expandSegmentAgainstRouteUsingRedirect(t,e,n,r,s,o){let{matched:a,consumedSegments:c,positionalParamSegments:l,remainingSegments:d}=$u(e,r,s);if(!a)return gs(e);r.redirectTo.startsWith("/")&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>NE&&(this.allowRedirects=!1));let u=this.applyRedirects.applyRedirectCommands(c,r.redirectTo,l);return this.applyRedirects.lineralizeSegments(r,u).pipe(rn(h=>this.processSegment(t,n,e,h.concat(d),o,!1)))}matchSegmentAgainstRoute(t,e,n,r,s){let o=AE(e,n,r,t,this.urlSerializer);return n.path==="**"&&(e.children={}),o.pipe(Ye(a=>a.matched?(t=n._injector??t,this.getChildConfig(t,n,r).pipe(Ye(({routes:c})=>{let l=n._loadedInjector??t,{consumedSegments:d,remainingSegments:u,parameters:h}=a,m=new _o(d,h,Object.freeze(it({},this.urlTree.queryParams)),this.urlTree.fragment,UE(n),Vn(n),n.component??n._loadedComponent??null,n,BE(n)),{segmentGroup:g,slicedSegments:v}=lg(e,d,u,c);if(v.length===0&&g.hasChildren())return this.processChildren(l,c,g).pipe(Lt(f=>f===null?null:new un(m,f)));if(c.length===0&&v.length===0)return _t(new un(m,[]));let p=Vn(n)===s;return this.processSegment(l,c,g,v,p?Dt:s,!0).pipe(Lt(f=>new un(m,f instanceof un?[f]:[])))}))):gs(e)))}getChildConfig(t,e,n){return e.children?_t({routes:e.children,injector:t}):e.loadChildren?e._loadedRoutes!==void 0?_t({routes:e._loadedRoutes,injector:e._loadedInjector}):wE(t,e,n,this.urlSerializer).pipe(rn(r=>r?this.configLoader.loadChildren(t,e).pipe(ge(s=>{e._loadedRoutes=s.routes,e._loadedInjector=s.injector})):EE(e))):_t({routes:[],injector:t})}};function FE(i){i.sort((t,e)=>t.value.outlet===Dt?-1:e.value.outlet===Dt?1:t.value.outlet.localeCompare(e.value.outlet))}function kE(i){let t=i.value.routeConfig;return t&&t.path===""}function Ng(i){let t=[],e=new Set;for(let n of i){if(!kE(n)){t.push(n);continue}let r=t.find(s=>n.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...n.children),e.add(r)):t.push(n)}for(let n of e){let r=Ng(n.children);t.push(new un(n.value,r))}return t.filter(n=>!e.has(n))}function UE(i){return i.data||{}}function BE(i){return i.resolve||{}}function zE(i,t,e,n,r,s){return rn(o=>OE(i,t,e,n,o.extractedUrl,r,s).pipe(Lt(({state:a,tree:c})=>Re(it({},o),{targetSnapshot:a,urlAfterRedirects:c}))))}function VE(i,t){return rn(e=>{let{targetSnapshot:n,guards:{canActivateChecks:r}}=e;if(!r.length)return _t(e);let s=new Set(r.map(c=>c.route)),o=new Set;for(let c of s)if(!o.has(c))for(let l of Fg(c))o.add(l);let a=0;return He(o).pipe(li(c=>s.has(c)?HE(c,n,i,t):(c.data=Wu(c,c.parent,i).resolve,_t(void 0))),ge(()=>a++),Yc(1),rn(c=>a===o.size?_t(e):ai))})}function Fg(i){let t=i.children.map(e=>Fg(e)).flat();return[i,...t]}function HE(i,t,e,n){let r=i.routeConfig,s=i._resolve;return r?.title!==void 0&&!Cg(r)&&(s[xo]=r.title),GE(s,i,t,n).pipe(Lt(o=>(i._resolvedData=o,i.data=Wu(i,i.parent,e).resolve,null)))}function GE(i,t,e,n){let r=bu(i);if(r.length===0)return _t({});let s={};return He(r).pipe(rn(o=>WE(i[o],t,e,n).pipe(di(),ge(a=>{s[o]=a}))),Yc(1),lh(s),ci(o=>Lg(o)?ai:Bi(o)))}function WE(i,t,e,n){let r=Mo(t)??n,s=Ms(i,r),o=s.resolve?s.resolve(t,e):In(r,()=>s(t,e));return Fi(o)}function vu(i){return Ye(t=>{let e=i(t);return e?He(e).pipe(Lt(()=>t)):_t(t)})}var kg=(()=>{let t=class t{buildTitle(n){let r,s=n.root;for(;s!==void 0;)r=this.getResolvedTitleForRoute(s)??r,s=s.children.find(o=>o.outlet===Dt);return r}getResolvedTitleForRoute(n){return n.data[xo]}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=mt({token:t,factory:()=>st(jE),providedIn:"root"});let i=t;return i})(),jE=(()=>{let t=class t extends kg{constructor(n){super(),this.title=n}updateTitle(n){let r=this.buildTitle(n);r!==void 0&&this.title.setTitle(r)}};t.\u0275fac=function(r){return new(r||t)(H(_f))},t.\u0275prov=mt({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})(),Ao=new At("",{providedIn:"root",factory:()=>({})}),Ic=new At(""),Yu=(()=>{let t=class t{constructor(){this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap,this.compiler=st(jo)}loadComponent(n){if(this.componentLoaders.get(n))return this.componentLoaders.get(n);if(n._loadedComponent)return _t(n._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(n);let r=Fi(n.loadComponent()).pipe(Lt(Ug),ge(o=>{this.onLoadEndListener&&this.onLoadEndListener(n),n._loadedComponent=o}),Wn(()=>{this.componentLoaders.delete(n)})),s=new zc(r,()=>new ee).pipe(Bc());return this.componentLoaders.set(n,s),s}loadChildren(n,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return _t({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let o=XE(r,this.compiler,n,this.onLoadEndListener).pipe(Wn(()=>{this.childrenLoaders.delete(r)})),a=new zc(o,()=>new ee).pipe(Bc());return this.childrenLoaders.set(r,a),a}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=mt({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();function XE(i,t,e,n){return Fi(i.loadChildren()).pipe(Lt(Ug),rn(r=>r instanceof Rh||Array.isArray(r)?_t(r):He(t.compileModuleAsync(r))),Lt(r=>{n&&n(i);let s,o,a=!1;return Array.isArray(r)?(o=r,a=!0):(s=r.create(e).injector,o=s.get(Ic,[],{optional:!0,self:!0}).flat()),{routes:o.map(Xu),injector:s}}))}function $E(i){return i&&typeof i=="object"&&"default"in i}function Ug(i){return $E(i)?i.default:i}var qu=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=mt({token:t,factory:()=>st(YE),providedIn:"root"});let i=t;return i})(),YE=(()=>{let t=class t{shouldProcessUrl(n){return!0}extract(n){return n}merge(n,r){return n}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=mt({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})(),Bg=new At(""),zg=new At("");function qE(i,t,e){let n=i.get(zg),r=i.get(It);return i.get(Ht).runOutsideAngular(()=>{if(!r.startViewTransition||n.skipNextTransition)return n.skipNextTransition=!1,new Promise(l=>setTimeout(l));let s,o=new Promise(l=>{s=l}),a=r.startViewTransition(()=>(s(),ZE(i))),{onViewTransitionCreated:c}=n;return c&&In(i,()=>c({transition:a,from:t,to:e})),o})}function ZE(i){return new Promise(t=>{Kc(t,{injector:i})})}var Zu=(()=>{let t=class t{get hasRequestedNavigation(){return this.navigationId!==0}constructor(){this.currentNavigation=null,this.currentTransition=null,this.lastSuccessfulNavigation=null,this.events=new ee,this.transitionAbortSubject=new ee,this.configLoader=st(Yu),this.environmentInjector=st(hi),this.urlSerializer=st(wo),this.rootContexts=st(So),this.location=st(Wi),this.inputBindingEnabled=st(Pc,{optional:!0})!==null,this.titleStrategy=st(kg),this.options=st(Ao,{optional:!0})||{},this.paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly",this.urlHandlingStrategy=st(qu),this.createViewTransition=st(Bg,{optional:!0}),this.navigationId=0,this.afterPreactivation=()=>_t(void 0),this.rootComponentType=null;let n=s=>this.events.next(new Tu(s)),r=s=>this.events.next(new Cu(s));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=n}complete(){this.transitions?.complete()}handleNavigationRequest(n){let r=++this.navigationId;this.transitions?.next(Re(it(it({},this.transitions.value),n),{id:r}))}setupNavigations(n,r,s){return this.transitions=new Xe({id:0,currentUrlTree:r,currentRawUrl:r,extractedUrl:this.urlHandlingStrategy.extract(r),urlAfterRedirects:this.urlHandlingStrategy.extract(r),rawUrl:r,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:uo,restoredState:null,currentSnapshot:s.snapshot,targetSnapshot:null,currentRouterState:s,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe($e(o=>o.id!==0),Lt(o=>Re(it({},o),{extractedUrl:this.urlHandlingStrategy.extract(o.rawUrl)})),Ye(o=>{let a=!1,c=!1;return _t(o).pipe(Ye(l=>{if(this.navigationId>o.id)return this.cancelNavigationTransition(o,"",hn.SupersededByNewNavigation),ai;this.currentTransition=o,this.currentNavigation={id:l.id,initialUrl:l.rawUrl,extractedUrl:l.extractedUrl,trigger:l.source,extras:l.extras,previousNavigation:this.lastSuccessfulNavigation?Re(it({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let d=!n.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=l.extras.onSameUrlNavigation??n.onSameUrlNavigation;if(!d&&u!=="reload"){let h="";return this.events.next(new Oi(l.id,this.urlSerializer.serialize(l.rawUrl),h,wc.IgnoredSameUrlNavigation)),l.resolve(null),ai}if(this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))return _t(l).pipe(Ye(h=>{let m=this.transitions?.getValue();return this.events.next(new ws(h.id,this.urlSerializer.serialize(h.extractedUrl),h.source,h.restoredState)),m!==this.transitions?.getValue()?ai:Promise.resolve(h)}),zE(this.environmentInjector,this.configLoader,this.rootComponentType,n.config,this.urlSerializer,this.paramsInheritanceStrategy),ge(h=>{o.targetSnapshot=h.targetSnapshot,o.urlAfterRedirects=h.urlAfterRedirects,this.currentNavigation=Re(it({},this.currentNavigation),{finalUrl:h.urlAfterRedirects});let m=new Sc(h.id,this.urlSerializer.serialize(h.extractedUrl),this.urlSerializer.serialize(h.urlAfterRedirects),h.targetSnapshot);this.events.next(m)}));if(d&&this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)){let{id:h,extractedUrl:m,source:g,restoredState:v,extras:p}=l,f=new ws(h,this.urlSerializer.serialize(m),g,v);this.events.next(f);let E=Ag(this.rootComponentType).snapshot;return this.currentTransition=o=Re(it({},l),{targetSnapshot:E,urlAfterRedirects:m,extras:Re(it({},p),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=m,_t(o)}else{let h="";return this.events.next(new Oi(l.id,this.urlSerializer.serialize(l.extractedUrl),h,wc.IgnoredByUrlHandlingStrategy)),l.resolve(null),ai}}),ge(l=>{let d=new Su(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(d)}),Lt(l=>(this.currentTransition=o=Re(it({},l),{guards:rE(l.targetSnapshot,l.currentSnapshot,this.rootContexts)}),o)),pE(this.environmentInjector,l=>this.events.next(l)),ge(l=>{if(o.guardsResult=l.guardsResult,xs(l.guardsResult))throw Ig(this.urlSerializer,l.guardsResult);let d=new Mu(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot,!!l.guardsResult);this.events.next(d)}),$e(l=>l.guardsResult?!0:(this.cancelNavigationTransition(l,"",hn.GuardRejected),!1)),vu(l=>{if(l.guards.canActivateChecks.length)return _t(l).pipe(ge(d=>{let u=new Eu(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects),d.targetSnapshot);this.events.next(u)}),Ye(d=>{let u=!1;return _t(d).pipe(VE(this.paramsInheritanceStrategy,this.environmentInjector),ge({next:()=>u=!0,complete:()=>{u||this.cancelNavigationTransition(d,"",hn.NoDataFromResolver)}}))}),ge(d=>{let u=new Au(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects),d.targetSnapshot);this.events.next(u)}))}),vu(l=>{let d=u=>{let h=[];u.routeConfig?.loadComponent&&!u.routeConfig._loadedComponent&&h.push(this.configLoader.loadComponent(u.routeConfig).pipe(ge(m=>{u.component=m}),Lt(()=>{})));for(let m of u.children)h.push(...d(m));return h};return _r(d(l.targetSnapshot.root)).pipe(Xc(null),sn(1))}),vu(()=>this.afterPreactivation()),Ye(()=>{let{currentSnapshot:l,targetSnapshot:d}=o,u=this.createViewTransition?.(this.environmentInjector,l.root,d.root);return u?He(u).pipe(Lt(()=>o)):_t(o)}),Lt(l=>{let d=ZM(n.routeReuseStrategy,l.targetSnapshot,l.currentRouterState);return this.currentTransition=o=Re(it({},l),{targetRouterState:d}),this.currentNavigation.targetRouterState=d,o}),ge(()=>{this.events.next(new go)}),iE(this.rootContexts,n.routeReuseStrategy,l=>this.events.next(l),this.inputBindingEnabled),sn(1),ge({next:l=>{a=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new zn(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects))),this.titleStrategy?.updateTitle(l.targetRouterState.snapshot),l.resolve(!0)},complete:()=>{a=!0}}),yn(this.transitionAbortSubject.pipe(ge(l=>{throw l}))),Wn(()=>{!a&&!c&&this.cancelNavigationTransition(o,"",hn.SupersededByNewNavigation),this.currentTransition?.id===o.id&&(this.currentNavigation=null,this.currentTransition=null)}),ci(l=>{if(c=!0,Pg(l))this.events.next(new Li(o.id,this.urlSerializer.serialize(o.extractedUrl),l.message,l.cancellationCode)),QM(l)?this.events.next(new vo(l.url)):o.resolve(!1);else{this.events.next(new mo(o.id,this.urlSerializer.serialize(o.extractedUrl),l,o.targetSnapshot??void 0));try{o.resolve(n.errorHandler(l))}catch(d){this.options.resolveNavigationPromiseOnError?o.resolve(!1):o.reject(d)}}return ai}))}))}cancelNavigationTransition(n,r,s){let o=new Li(n.id,this.urlSerializer.serialize(n.extractedUrl),r,s);this.events.next(o),n.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){return this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))).toString()!==this.currentTransition?.extractedUrl.toString()&&!this.currentTransition?.extras.skipLocationChange}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=mt({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();function KE(i){return i!==uo}var JE=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=mt({token:t,factory:()=>st(QE),providedIn:"root"});let i=t;return i})(),Gu=class{shouldDetach(t){return!1}store(t,e){}shouldAttach(t){return!1}retrieve(t){return null}shouldReuseRoute(t,e){return t.routeConfig===e.routeConfig}},QE=(()=>{let t=class t extends Gu{};t.\u0275fac=(()=>{let n;return function(s){return(n||(n=No(t)))(s||t)}})(),t.\u0275prov=mt({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})(),Vg=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=mt({token:t,factory:()=>st(tA),providedIn:"root"});let i=t;return i})(),tA=(()=>{let t=class t extends Vg{constructor(){super(...arguments),this.location=st(Wi),this.urlSerializer=st(wo),this.options=st(Ao,{optional:!0})||{},this.canceledNavigationResolution=this.options.canceledNavigationResolution||"replace",this.urlHandlingStrategy=st(qu),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.currentUrlTree=new Pi,this.rawUrlTree=this.currentUrlTree,this.currentPageId=0,this.lastSuccessfulId=-1,this.routerState=Ag(null),this.stateMemento=this.createStateMemento()}getCurrentUrlTree(){return this.currentUrlTree}getRawUrlTree(){return this.rawUrlTree}restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}getRouterState(){return this.routerState}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(n){return this.location.subscribe(r=>{r.type==="popstate"&&n(r.url,r.state)})}handleRouterEvent(n,r){if(n instanceof ws)this.stateMemento=this.createStateMemento();else if(n instanceof Oi)this.rawUrlTree=r.initialUrl;else if(n instanceof Sc){if(this.urlUpdateStrategy==="eager"&&!r.extras.skipLocationChange){let s=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl);this.setBrowserUrl(s,r)}}else n instanceof go?(this.currentUrlTree=r.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl),this.routerState=r.targetRouterState,this.urlUpdateStrategy==="deferred"&&(r.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,r))):n instanceof Li&&(n.code===hn.GuardRejected||n.code===hn.NoDataFromResolver)?this.restoreHistory(r):n instanceof mo?this.restoreHistory(r,!0):n instanceof zn&&(this.lastSuccessfulId=n.id,this.currentPageId=this.browserPageId)}setBrowserUrl(n,r){let s=this.urlSerializer.serialize(n);if(this.location.isCurrentPathEqualTo(s)||r.extras.replaceUrl){let o=this.browserPageId,a=it(it({},r.extras.state),this.generateNgRouterState(r.id,o));this.location.replaceState(s,"",a)}else{let o=it(it({},r.extras.state),this.generateNgRouterState(r.id,this.browserPageId+1));this.location.go(s,"",o)}}restoreHistory(n,r=!1){if(this.canceledNavigationResolution==="computed"){let s=this.browserPageId,o=this.currentPageId-s;o!==0?this.location.historyGo(o):this.currentUrlTree===n.finalUrl&&o===0&&(this.resetState(n),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(r&&this.resetState(n),this.resetUrlToCurrentUrlTree())}resetState(n){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,n.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(n,r){return this.canceledNavigationResolution==="computed"?{navigationId:n,\u0275routerPageId:r}:{navigationId:n}}};t.\u0275fac=(()=>{let n;return function(s){return(n||(n=No(t)))(s||t)}})(),t.\u0275prov=mt({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})(),co=function(i){return i[i.COMPLETE=0]="COMPLETE",i[i.FAILED=1]="FAILED",i[i.REDIRECTING=2]="REDIRECTING",i}(co||{});function Hg(i,t){i.events.pipe($e(e=>e instanceof zn||e instanceof Li||e instanceof mo||e instanceof Oi),Lt(e=>e instanceof zn||e instanceof Oi?co.COMPLETE:(e instanceof Li?e.code===hn.Redirect||e.code===hn.SupersededByNewNavigation:!1)?co.REDIRECTING:co.FAILED),$e(e=>e!==co.REDIRECTING),sn(1)).subscribe(()=>{t()})}function eA(i){throw i}var nA={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},iA={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Ni=(()=>{let t=class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}constructor(){this.disposed=!1,this.isNgZoneEnabled=!1,this.console=st(Ho),this.stateManager=st(Vg),this.options=st(Ao,{optional:!0})||{},this.pendingTasks=st(Ds),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.navigationTransitions=st(Zu),this.urlSerializer=st(wo),this.location=st(Wi),this.urlHandlingStrategy=st(qu),this._events=new ee,this.errorHandler=this.options.errorHandler||eA,this.navigated=!1,this.routeReuseStrategy=st(JE),this.onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore",this.config=st(Ic,{optional:!0})?.flat()??[],this.componentInputBindingEnabled=!!st(Pc,{optional:!0}),this.eventsSubscription=new Gn,this.isNgZoneEnabled=st(Ht)instanceof Ht&&Ht.isInAngularZone(),this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:n=>{this.console.warn(n)}}),this.subscribeToNavigationEvents()}subscribeToNavigationEvents(){let n=this.navigationTransitions.events.subscribe(r=>{try{let s=this.navigationTransitions.currentTransition,o=this.navigationTransitions.currentNavigation;if(s!==null&&o!==null){if(this.stateManager.handleRouterEvent(r,o),r instanceof Li&&r.code!==hn.Redirect&&r.code!==hn.SupersededByNewNavigation)this.navigated=!0;else if(r instanceof zn)this.navigated=!0;else if(r instanceof vo){let a=this.urlHandlingStrategy.merge(r.url,s.currentRawUrl),c={info:s.extras.info,skipLocationChange:s.extras.skipLocationChange,replaceUrl:this.urlUpdateStrategy==="eager"||KE(s.source)};this.scheduleNavigation(a,uo,null,c,{resolve:s.resolve,reject:s.reject,promise:s.promise})}}sA(r)&&this._events.next(r)}catch(s){this.navigationTransitions.transitionAbortSubject.next(s)}});this.eventsSubscription.add(n)}resetRootComponentType(n){this.routerState.root.component=n,this.navigationTransitions.rootComponentType=n}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),uo,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((n,r)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(n,"popstate",r)},0)})}navigateToSyncWithBrowser(n,r,s){let o={replaceUrl:!0},a=s?.navigationId?s:null;if(s){let l=it({},s);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(o.state=l)}let c=this.parseUrl(n);this.scheduleNavigation(c,r,a,o)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(n){this.config=n.map(Xu),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(n,r={}){let{relativeTo:s,queryParams:o,fragment:a,queryParamsHandling:c,preserveFragment:l}=r,d=l?this.currentUrlTree.fragment:a,u=null;switch(c){case"merge":u=it(it({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let h;try{let m=s?s.snapshot:this.routerState.snapshot.root;h=wg(m)}catch{(typeof n[0]!="string"||!n[0].startsWith("/"))&&(n=[]),h=this.currentUrlTree.root}return Sg(h,n,u,d??null)}navigateByUrl(n,r={skipLocationChange:!1}){let s=xs(n)?n:this.parseUrl(n),o=this.urlHandlingStrategy.merge(s,this.rawUrlTree);return this.scheduleNavigation(o,uo,null,r)}navigate(n,r={skipLocationChange:!1}){return rA(n),this.navigateByUrl(this.createUrlTree(n,r),r)}serializeUrl(n){return this.urlSerializer.serialize(n)}parseUrl(n){try{return this.urlSerializer.parse(n)}catch{return this.urlSerializer.parse("/")}}isActive(n,r){let s;if(r===!0?s=it({},nA):r===!1?s=it({},iA):s=r,xs(n))return rg(this.currentUrlTree,n,s);let o=this.parseUrl(n);return rg(this.currentUrlTree,o,s)}removeEmptyProps(n){return Object.entries(n).reduce((r,[s,o])=>(o!=null&&(r[s]=o),r),{})}scheduleNavigation(n,r,s,o,a){if(this.disposed)return Promise.resolve(!1);let c,l,d;a?(c=a.resolve,l=a.reject,d=a.promise):d=new Promise((h,m)=>{c=h,l=m});let u=this.pendingTasks.add();return Hg(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:s,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:n,extras:o,resolve:c,reject:l,promise:d,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),d.catch(h=>Promise.reject(h))}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=mt({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();function rA(i){for(let t=0;t<i.length;t++)if(i[t]==null)throw new de(4008,!1)}function sA(i){return!(i instanceof go)&&!(i instanceof vo)}var Oc=(()=>{let t=class t{constructor(n,r,s,o,a,c){this.router=n,this.route=r,this.tabIndexAttribute=s,this.renderer=o,this.el=a,this.locationStrategy=c,this.href=null,this.commands=null,this.onChanges=new ee,this.preserveFragment=!1,this.skipLocationChange=!1,this.replaceUrl=!1;let l=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area",this.isAnchorElement?this.subscription=n.events.subscribe(d=>{d instanceof zn&&this.updateHref()}):this.setTabIndexIfNotOnNativeEl("0")}setTabIndexIfNotOnNativeEl(n){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",n)}ngOnChanges(n){this.isAnchorElement&&this.updateHref(),this.onChanges.next(this)}set routerLink(n){n!=null?(this.commands=Array.isArray(n)?n:[n],this.setTabIndexIfNotOnNativeEl("0")):(this.commands=null,this.setTabIndexIfNotOnNativeEl(null))}onClick(n,r,s,o,a){let c=this.urlTree;if(c===null||this.isAnchorElement&&(n!==0||r||s||o||a||typeof this.target=="string"&&this.target!="_self"))return!0;let l={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(c,l),!this.isAnchorElement}ngOnDestroy(){this.subscription?.unsubscribe()}updateHref(){let n=this.urlTree;this.href=n!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(n)):null;let r=this.href===null?null:Ah(this.href,this.el.nativeElement.tagName.toLowerCase(),"href");this.applyAttributeValue("href",r)}applyAttributeValue(n,r){let s=this.renderer,o=this.el.nativeElement;r!==null?s.setAttribute(o,n,r):s.removeAttribute(o,n)}get urlTree(){return this.commands===null?null:this.router.createUrlTree(this.commands,{relativeTo:this.relativeTo!==void 0?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}};t.\u0275fac=function(r){return new(r||t)(Ot(Ni),Ot(mr),Fo("tabindex"),Ot(Ch),Ot(Se),Ot(Os))},t.\u0275dir=we({type:t,selectors:[["","routerLink",""]],hostVars:1,hostBindings:function(r,s){r&1&&Ps("click",function(a){return s.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),r&2&&Pn("target",s.target)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[ue.HasDecoratorInputTransform,"preserveFragment","preserveFragment",Ze],skipLocationChange:[ue.HasDecoratorInputTransform,"skipLocationChange","skipLocationChange",Ze],replaceUrl:[ue.HasDecoratorInputTransform,"replaceUrl","replaceUrl",Ze],routerLink:"routerLink"},standalone:!0,features:[Dn,br]});let i=t;return i})();var Dc=class{};var oA=(()=>{let t=class t{constructor(n,r,s,o,a){this.router=n,this.injector=s,this.preloadingStrategy=o,this.loader=a}setUpPreloading(){this.subscription=this.router.events.pipe($e(n=>n instanceof zn),li(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(n,r){let s=[];for(let o of r){o.providers&&!o._injector&&(o._injector=Jc(o.providers,n,`Route: ${o.path}`));let a=o._injector??n,c=o._loadedInjector??a;(o.loadChildren&&!o._loadedRoutes&&o.canLoad===void 0||o.loadComponent&&!o._loadedComponent)&&s.push(this.preloadConfig(a,o)),(o.children||o._loadedRoutes)&&s.push(this.processRoutes(c,o.children??o._loadedRoutes))}return He(s).pipe(Hc())}preloadConfig(n,r){return this.preloadingStrategy.preload(r,()=>{let s;r.loadChildren&&r.canLoad===void 0?s=this.loader.loadChildren(n,r):s=_t(null);let o=s.pipe(rn(a=>a===null?_t(void 0):(r._loadedRoutes=a.routes,r._loadedInjector=a.injector,this.processRoutes(a.injector??n,a.routes))));if(r.loadComponent&&!r._loadedComponent){let a=this.loader.loadComponent(r);return He([o,a]).pipe(Hc())}else return o})}};t.\u0275fac=function(r){return new(r||t)(H(Ni),H(jo),H(hi),H(Dc),H(Yu))},t.\u0275prov=mt({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})(),Gg=new At(""),aA=(()=>{let t=class t{constructor(n,r,s,o,a={}){this.urlSerializer=n,this.transitions=r,this.viewportScroller=s,this.zone=o,this.options=a,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},this.environmentInjector=st(hi),a.scrollPositionRestoration||="disabled",a.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(n=>{n instanceof ws?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=n.navigationTrigger,this.restoredId=n.restoredState?n.restoredState.navigationId:0):n instanceof zn?(this.lastId=n.id,this.scheduleScrollEvent(n,this.urlSerializer.parse(n.urlAfterRedirects).fragment)):n instanceof Oi&&n.code===wc.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(n,this.urlSerializer.parse(n.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(n=>{n instanceof Mc&&(n.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0]):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(n.position):n.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(n.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(n,r){this.zone.runOutsideAngular(()=>gr(this,null,function*(){yield new Promise(s=>{setTimeout(()=>{s()}),Kc(()=>{s()},{injector:this.environmentInjector})}),this.zone.run(()=>{this.transitions.events.next(new Mc(n,this.lastSource==="popstate"?this.store[this.restoredId]:null,r))})}))}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}};t.\u0275fac=function(r){ko()},t.\u0275prov=mt({token:t,factory:t.\u0275fac});let i=t;return i})();function cA(i){return i.routerState.root}function To(i,t){return{\u0275kind:i,\u0275providers:t}}function lA(){let i=st(pn);return t=>{let e=i.get(Tr);if(t!==e.components[0])return;let n=i.get(Ni),r=i.get(Wg);i.get(Ku)===1&&n.initialNavigation(),i.get(jg,null,qc.Optional)?.setUpPreloading(),i.get(Gg,null,qc.Optional)?.init(),n.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var Wg=new At("",{factory:()=>new ee}),Ku=new At("",{providedIn:"root",factory:()=>1});function dA(){return To(2,[{provide:Ku,useValue:0},{provide:el,multi:!0,deps:[pn],useFactory:t=>{let e=t.get(jh,Promise.resolve());return()=>e.then(()=>new Promise(n=>{let r=t.get(Ni),s=t.get(Wg);Hg(r,()=>{n(!0)}),t.get(Zu).afterPreactivation=()=>(n(!0),s.closed?_t(void 0):s),r.initialNavigation()}))}}])}function uA(){return To(3,[{provide:el,multi:!0,useFactory:()=>{let t=st(Ni);return()=>{t.setUpLocationChangeListener()}}},{provide:Ku,useValue:2}])}var jg=new At("");function hA(i){return To(0,[{provide:jg,useExisting:oA},{provide:Dc,useExisting:i}])}function fA(){return To(8,[cg,{provide:Pc,useExisting:cg}])}function pA(i){let t=[{provide:Bg,useValue:qE},{provide:zg,useValue:it({skipNextTransition:!!i?.skipInitialTransition},i)}];return To(9,t)}var dg=new At("ROUTER_FORROOT_GUARD"),mA=[Wi,{provide:wo,useClass:fo},Ni,So,{provide:mr,useFactory:cA,deps:[Ni]},Yu,[]],Xg=(()=>{let t=class t{constructor(n){}static forRoot(n,r){return{ngModule:t,providers:[mA,[],{provide:Ic,multi:!0,useValue:n},{provide:dg,useFactory:bA,deps:[[Ni,new Lo,new Zc]]},{provide:Ao,useValue:r||{}},r?.useHash?vA():_A(),gA(),r?.preloadingStrategy?hA(r.preloadingStrategy).\u0275providers:[],r?.initialNavigation?yA(r):[],r?.bindToComponentInputs?fA().\u0275providers:[],r?.enableViewTransitions?pA().\u0275providers:[],xA()]}}static forChild(n){return{ngModule:t,providers:[{provide:Ic,multi:!0,useValue:n}]}}};t.\u0275fac=function(r){return new(r||t)(H(dg,8))},t.\u0275mod=Zt({type:t}),t.\u0275inj=qt({});let i=t;return i})();function gA(){return{provide:Gg,useFactory:()=>{let i=st(Kh),t=st(Ht),e=st(Ao),n=st(Zu),r=st(wo);return e.scrollOffset&&i.setOffset(e.scrollOffset),new aA(r,n,i,t,e)}}}function vA(){return{provide:Os,useClass:$h}}function _A(){return{provide:Os,useClass:Xh}}function bA(i){return"guarded"}function yA(i){return[i.initialNavigation==="disabled"?uA().\u0275providers:[],i.initialNavigation==="enabledBlocking"?dA().\u0275providers:[]]}var ug=new At("");function xA(){return[{provide:ug,useFactory:lA},{provide:nl,multi:!0,useExisting:ug}]}function wA(i,t){if(i&1&&(Ih(0),_e(1,"div",3)(2,"a",4),Ge(3),fe(),ke(4,"mat-icon",5),fe(),Dh()),i&2){let e=t.$implicit;an(2),Mr("routerLink",e.path),an(),Nh(e.title)}}var F1=(()=>{let t=class t{constructor(){this.menuConfig=[{title:"Start Game",path:"/game"},{title:"About",path:"/about"}]}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=ve({type:t,selectors:[["app-menu"]],decls:8,vars:1,consts:[[1,"menu-container"],[1,"menu"],[4,"ngFor","ngForOf"],[1,"menu-item"],[3,"routerLink"],["fontIcon","arrow_left",1,"arrow-icon"]],template:function(r,s){r&1&&(_e(0,"div",0)(1,"h1")(2,"span"),Ge(3,"STAR WARS"),fe(),_e(4,"span"),Ge(5,"Card Game"),fe()(),_e(6,"div",1),Sr(7,wA,5,2,"ng-container",2),fe()()),r&2&&(an(7),Mr("ngForOf",s.menuConfig))},dependencies:[Yh,Oc,ua],styles:['@import"https://fonts.cdnfonts.com/css/star-wars";.menu-container[_ngcontent-%COMP%]{display:flex;height:100%;flex-direction:column;justify-content:center;align-items:center;color:#fff}.menu-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:18px;font-family:Star Wars,sans-serif;color:#ffe81f;font-size:3.5rem;padding-bottom:64px}.menu-container[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px}.menu-container[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center;height:24px;gap:10px}.menu-container[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:flex-end;color:#fff;height:inherit;text-decoration:none;font-size:24px;text-align:center;font-family:Star Wars,sans-serif}.menu-container[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#2e557c}.menu-container[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover ~ .arrow-icon[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.menu-container[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%]{display:none;height:inherit;font-size:34px;color:#ffe81f;line-height:none!important}']});let i=t;return i})();var SA=i=>[i],Yg=(()=>{let t=class t{constructor(){this.route="/"}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=ve({type:t,selectors:[["app-go-back-button"]],inputs:{route:"route"},decls:4,vars:3,consts:[[1,"go-back-button"],["fontIcon","arrow_back_ios"],["id","go-back-anchor",3,"routerLink"]],template:function(r,s){r&1&&(_e(0,"div",0),ke(1,"mat-icon",1),_e(2,"a",2),Ge(3," Go back "),fe()()),r&2&&(an(2),Mr("routerLink",Fh(1,SA,s.route)))},dependencies:[Oc,ua],styles:['@import"https://fonts.cdnfonts.com/css/star-wars";.go-back-button[_ngcontent-%COMP%]{position:absolute;display:flex;flex-direction:row;gap:4px;top:30px;left:0;align-items:flex-end}.go-back-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;fill:#ffe81f!important;color:#ffe81f!important;font-size:16px}.go-back-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;text-decoration:none;color:#ffe81f;font-size:18px}.go-back-button[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%]{fill:#2e557c!important;color:#2e557c!important}.go-back-button[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{color:#2e557c}']});let i=t;return i})();var U1=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=ve({type:t,selectors:[["app-about"]],decls:9,vars:0,consts:[[1,"about-container"],["id","swapi-link","href","https://www.swapi.tech/"]],template:function(r,s){r&1&&(ke(0,"app-go-back-button"),_e(1,"div",0)(2,"h1"),Ge(3," About: "),fe(),_e(4,"div"),Ge(5," This game uses the Star Wars API ( "),_e(6,"a",1),Ge(7," SWAPI "),fe(),Ge(8," ) to fetch data about Star Wars characters, vehicles, starships. The game is a simple card game where you can pick a deck and face against random cards. Uses common attribute to declare winner .The game is built using Angular and Material Design components. "),fe()())},dependencies:[Yg],styles:['@import"https://fonts.cdnfonts.com/css/star-wars";.about-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100%;color:#ffe81f;gap:24px}.about-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{width:100%;font-family:Star Wars,sans-serif;font-size:32px;text-align:left}']});let i=t;return i})();var K1=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=Zt({type:t}),t.\u0275inj=qt({imports:[fi,Xg,up]});let i=t;return i})();export{pi as a,ul as b,lv as c,kA as d,df as e,qA as f,ZA as g,mr as h,qM as i,Ni as j,Oc as k,Xg as l,ua as m,F1 as n,Yg as o,U1 as p,EC as q,AC as r,TC as s,CC as t,RC as u,db as v,up as w,m1 as x,K1 as y};
